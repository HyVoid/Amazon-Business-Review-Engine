/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useMemo } from 'react';
import { FactSalesRow, SKUMapRow, FactSQPRow } from '../types';
import { formatCurrency, formatInteger, formatPercent, formatPercentOneDecimal, calculatePriorPeriod } from '../utils';
import { TrendingDown, ShieldAlert, Sparkles, AlertCircle, RefreshCw } from 'lucide-react';

interface DashExecutiveProps {
  factSales: FactSalesRow[];
  skuMap: SKUMapRow[];
  factSqp: FactSQPRow[];
  currentPeriod: string;
  priorPeriod: string;
  onUpdatePeriod: (curr: string) => void;
  availablePeriods: string[];
}

export default function DashExecutive({
  factSales,
  skuMap,
  factSqp,
  currentPeriod,
  priorPeriod,
  onUpdatePeriod,
  availablePeriods
}: DashExecutiveProps) {

  // Overall calculations for Current Period
  const curMetrics = useMemo(() => {
    const rows = factSales.filter(r => r.periodTag === currentPeriod);
    const revenue = rows.reduce((sum, r) => sum + r.salesRevenue, 0);
    const profit = rows.reduce((sum, r) => sum + r.netProfit, 0);
    const ppc = rows.reduce((sum, r) => sum + r.ppcSpend, 0);
    const acos = revenue > 0 ? ppc / revenue : 0;
    return { revenue, profit, ppc, acos, rowsCount: rows.length };
  }, [factSales, currentPeriod]);

  // Overall calculations for Prior Period
  const priMetrics = useMemo(() => {
    const rows = factSales.filter(r => r.periodTag === priorPeriod);
    const revenue = rows.reduce((sum, r) => sum + r.salesRevenue, 0);
    const profit = rows.reduce((sum, r) => sum + r.netProfit, 0);
    const ppc = rows.reduce((sum, r) => sum + r.ppcSpend, 0);
    const acos = revenue > 0 ? ppc / revenue : 0;
    return { revenue, profit, ppc, acos };
  }, [factSales, priorPeriod]);

  // Trends
  const trends = useMemo(() => {
    const calcChg = (cur: number, pri: number) => {
      if (pri === 0) return 0;
      return (cur - pri) / pri;
    };
    return {
      revenue: calcChg(curMetrics.revenue, priMetrics.revenue),
      profit: calcChg(curMetrics.profit, priMetrics.profit),
      ppc: calcChg(curMetrics.ppc, priMetrics.ppc),
      acos: curMetrics.acos - priMetrics.acos // Absolute basis points change
    };
  }, [curMetrics, priMetrics]);

  // DIAGNOSIS COMPONENT 1: Top 5 Worst Profit-Loss SKUs
  // Formula: rank based on netProfitChange < 0 (lowest change first)
  const top5WorstProfitLossSKUs = useMemo(() => {
    // Collect all SKUs in current period
    const currentPeriodSKUs = Array.from(new Set(
      factSales.filter(r => r.periodTag === currentPeriod).map(r => r.sku)
    ));

    const drops = currentPeriodSKUs.map(sku => {
      const curRows = factSales.filter(r => r.sku === sku && r.periodTag === currentPeriod);
      const curProfit = curRows.reduce((sum, r) => sum + r.netProfit, 0);

      const priRows = factSales.filter(r => r.sku === sku && r.periodTag === priorPeriod);
      const priProfit = priRows.reduce((sum, r) => sum + r.netProfit, 0);

      const profitChange = curProfit - priProfit;
      const mapInfo = skuMap.find(m => m.sku === sku);

      return {
        sku,
        productName: mapInfo?.name || 'Unmapped Product',
        productLine: mapInfo?.productLine || 'General Catalog',
        profitChange,
        curProfit,
        priProfit
      };
    })
    .filter(item => item.profitChange < 0) // Only drops
    .sort((a, b) => a.profitChange - b.profitChange) // Most negative first
    .slice(0, 5);

    return drops;
  }, [factSales, skuMap, currentPeriod, priorPeriod]);

  // DIAGNOSIS COMPONENT 2: Top 5 Worst Purchase Share Drop Keywords
  const top5WorstShareDropKeywords = useMemo(() => {
    const curSqp = factSqp.filter(r => r.period === currentPeriod);
    
    const drops = curSqp.map(kw => {
      const priorKw = factSqp.find(r => r.searchQuery === kw.searchQuery && r.period === priorPeriod);
      const curShare = kw.purchaseShare;
      const priShare = priorKw ? priorKw.purchaseShare : 0;
      const shareChange = curShare - priShare;

      return {
        searchQuery: kw.searchQuery,
        curShare,
        priShare,
        shareChange,
        searchVolume: kw.searchVolume
      };
    })
    .filter(item => item.shareChange < 0) // Only contraction
    .sort((a, b) => a.shareChange - b.shareChange) // Worst drops first
    .slice(0, 5);

    return drops;
  }, [factSqp, currentPeriod, priorPeriod]);

  // Severe anomaly triggers if we have large drops
  const hasSevereProfitErosion = top5WorstProfitLossSKUs.some(s => s.profitChange < -250);
  const hasSevereShareErosion = top5WorstShareDropKeywords.some(k => k.shareChange < -0.02);

  return (
    <div className="space-y-8 animate-fade-up" id="dash-executive">
      {/* Top Controls & Greeting */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-xl shadow-md">
        <div>
          <span className="text-[11px] font-semibold tracking-wider text-[var(--color-muted)] uppercase block mb-1">
            Executive Performance Cockpit
          </span>
          <h2 className="font-serif-heading text-2xl font-bold text-[var(--color-primary)]">
            Amazon Business Review Executive Dashboard
          </h2>
          <p className="text-[12px] text-[var(--color-muted)] mt-1">
            Real-time diagnostics and dual-period comparisons. Instantly isolate operational bottlenecks.
          </p>
        </div>
        
        {/* Dynamic Period Selector connected to config */}
        <div className="flex items-center gap-3">
          <label className="text-[11px] font-semibold tracking-wider text-[var(--color-muted)] uppercase shrink-0">
            Select Analysis Period:
          </label>
          <select
            value={currentPeriod}
            onChange={(e) => onUpdatePeriod(e.target.value)}
            className="bg-[var(--color-input-bg)] border border-[var(--color-border)] rounded-md px-4 py-1.5 text-[13px] text-[var(--color-primary)] font-mono font-bold focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)] cursor-pointer shadow-sm hover:brightness-95 transition-all"
          >
            {availablePeriods.map(p => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
        </div>
      </div>

      {/* KPI 4-Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card 1: Sales Revenue */}
        <div className="bg-white p-6 rounded-xl shadow-md card-hover relative overflow-hidden">
          <div className="flex justify-between items-start mb-2">
            <span className="text-[11px] font-semibold tracking-wider text-[var(--color-muted)] uppercase">
              Sales Revenue
            </span>
            <span className="text-[11px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full font-mono">
              vs {priorPeriod}
            </span>
          </div>
          <p className="font-serif-display text-3xl font-bold text-[var(--color-primary)] tracking-tight">
            {formatCurrency(curMetrics.revenue)}
          </p>
          <div className="flex items-center justify-between mt-3 border-t border-[var(--color-border)] pt-2 text-[12px]">
            <span className="text-[var(--color-muted)] font-mono">
              Prev: {formatCurrency(priMetrics.revenue)}
            </span>
            <span className="font-semibold text-[var(--color-muted)] font-sans">
              {trends.revenue > 0 ? '▲' : '▼'} {formatPercentOneDecimal(Math.abs(trends.revenue))}
            </span>
          </div>
        </div>

        {/* Card 2: Net Profit */}
        <div className="bg-white p-6 rounded-xl shadow-md card-hover relative overflow-hidden">
          <div className="flex justify-between items-start mb-2">
            <span className="text-[11px] font-semibold tracking-wider text-[var(--color-muted)] uppercase">
              Net Profit
            </span>
            {curMetrics.profit < 0 && (
              <span className="text-[10px] bg-red-100 text-[var(--color-negative)] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider animate-pulse">
                Loss
              </span>
            )}
          </div>
          <p className={`font-serif-display text-3xl font-bold tracking-tight ${curMetrics.profit < 0 ? 'text-[var(--color-negative)]' : 'text-[var(--color-primary)]'}`}>
            {formatCurrency(curMetrics.profit)}
          </p>
          <div className="flex items-center justify-between mt-3 border-t border-[var(--color-border)] pt-2 text-[12px]">
            <span className="text-[var(--color-muted)] font-mono">
              Prev: {formatCurrency(priMetrics.profit)}
            </span>
            <span className="font-semibold text-[var(--color-muted)] font-sans">
              {trends.profit > 0 ? '▲' : '▼'} {formatPercentOneDecimal(Math.abs(trends.profit))}
            </span>
          </div>
        </div>

        {/* Card 3: PPC Spend */}
        <div className="bg-white p-6 rounded-xl shadow-md card-hover relative overflow-hidden">
          <div className="flex justify-between items-start mb-2">
            <span className="text-[11px] font-semibold tracking-wider text-[var(--color-muted)] uppercase">
              PPC Spend
            </span>
          </div>
          <p className="font-serif-display text-3xl font-bold text-[var(--color-primary)] tracking-tight">
            {formatCurrency(curMetrics.ppc)}
          </p>
          <div className="flex items-center justify-between mt-3 border-t border-[var(--color-border)] pt-2 text-[12px]">
            <span className="text-[var(--color-muted)] font-mono">
              Prev: {formatCurrency(priMetrics.ppc)}
            </span>
            <span className="font-semibold text-[var(--color-muted)] font-sans">
              {trends.ppc > 0 ? '▲' : '▼'} {formatPercentOneDecimal(Math.abs(trends.ppc))}
            </span>
          </div>
        </div>

        {/* Card 4: Overall ACoS */}
        <div className="bg-white p-6 rounded-xl shadow-md card-hover relative overflow-hidden">
          <div className="flex justify-between items-start mb-2">
            <span className="text-[11px] font-semibold tracking-wider text-[var(--color-muted)] uppercase">
              Overall ACoS
            </span>
          </div>
          <p className="font-serif-display text-3xl font-bold text-[var(--color-accent)] tracking-tight">
            {formatPercent(curMetrics.acos)}
          </p>
          <div className="flex items-center justify-between mt-3 border-t border-[var(--color-border)] pt-2 text-[12px]">
            <span className="text-[var(--color-muted)] font-mono">
              Prev: {formatPercent(priMetrics.acos)}
            </span>
            <span className="font-semibold text-[var(--color-muted)] font-sans">
              {trends.acos > 0 ? '▲ +' : '▼ -'}{formatPercent(Math.abs(trends.acos))}
            </span>
          </div>
        </div>
      </div>

      {/* Warning/Insight Blocks */}
      {(hasSevereProfitErosion || hasSevereShareErosion) && (
        <div className="insight-block bg-red-50/50 p-5 rounded-xl border-l-4 border-[var(--color-negative)] flex items-start gap-3 shadow-sm">
          <ShieldAlert size={20} className="text-[var(--color-negative)] shrink-0 mt-0.5 animate-bounce" />
          <div>
            <h4 className="font-serif-heading text-base font-bold text-[var(--color-negative)]">
              Severe Diagnostic Warnings Triggered (Action Required)
            </h4>
            <p className="text-[12px] text-slate-700 mt-1 leading-relaxed">
              The analysis engines have flagged active leaks this period. At least one SKU is suffering severe profit erosion, or core high-volume keywords are losing market purchase share. 
              Review the detailed diagnosis panels below to locate precise culprits.
            </p>
          </div>
        </div>
      )}

      {/* Two Diagnostic Tables Side-By-Side */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Card Component 1: Top 5 Worst Profit-Loss SKUs */}
        <div className="bg-white p-6 rounded-xl shadow-md flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-[var(--color-border)] pb-3 mb-4">
              <div>
                <h3 className="font-serif-heading text-lg font-bold text-[var(--color-primary)]">
                  Top 5 Profit-Loss SKU Diagnosis
                </h3>
                <p className="text-[11px] text-[var(--color-muted)] uppercase tracking-wider font-semibold">
                  Primary profit erosion culprits (Cur vs Pri)
                </p>
              </div>
              <span className="text-[10px] bg-red-100 text-[var(--color-negative)] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                Leaks
              </span>
            </div>

            {top5WorstProfitLossSKUs.length === 0 ? (
              <div className="py-12 text-center text-[var(--color-muted)] font-serif-heading italic">
                No active profit erosion detected among trading SKUs this period. Excellent health!
              </div>
            ) : (
              <div className="space-y-4">
                {top5WorstProfitLossSKUs.map((item, idx) => {
                  return (
                    <div
                      key={item.sku}
                      className="flex items-center justify-between p-3 rounded-lg bg-slate-50 border-l-3 border-[var(--color-negative)] hover:translate-x-1 transition-all duration-150"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono font-bold text-[13px] text-[var(--color-primary)]">
                            {item.sku}
                          </span>
                          <span className="text-[10px] bg-slate-200 text-slate-700 px-1.5 py-0.2 rounded font-medium">
                            {item.productLine}
                          </span>
                        </div>
                        <p className="text-[11px] text-[var(--color-muted)] truncate max-w-[200px] mt-0.5">
                          {item.productName}
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="font-mono text-[13px] text-[var(--color-negative)] font-semibold block">
                          -{formatCurrency(Math.abs(item.profitChange))}
                        </span>
                        <span className="text-[10px] text-[var(--color-muted)] block font-mono">
                          Curr: {formatCurrency(item.curProfit)}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          <div className="text-[11px] text-[var(--color-muted)] pt-4 mt-4 border-t border-slate-100">
            * Diagnostic formula sorting the absolute drops in SKU net earnings, identifying core leaks.
          </div>
        </div>

        {/* Card Component 2: Top 5 Worst Purchase Share Drop Keywords */}
        <div className="bg-white p-6 rounded-xl shadow-md flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-[var(--color-border)] pb-3 mb-4">
              <div>
                <h3 className="font-serif-heading text-lg font-bold text-[var(--color-primary)]">
                  Top 5 Purchase Share Drop Keywords
                </h3>
                <p className="text-[11px] text-[var(--color-muted)] uppercase tracking-wider font-semibold">
                  Core traffic leakage queries (Cur vs Pri)
                </p>
              </div>
              <span className="text-[10px] bg-red-100 text-[var(--color-negative)] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                Funnel
              </span>
            </div>

            {top5WorstShareDropKeywords.length === 0 ? (
              <div className="py-12 text-center text-[var(--color-muted)] font-serif-heading italic">
                No market share drop observed on core search queries this period.
              </div>
            ) : (
              <div className="space-y-4">
                {top5WorstShareDropKeywords.map((item, idx) => {
                  return (
                    <div
                      key={item.searchQuery}
                      className="flex items-center justify-between p-3 rounded-lg bg-slate-50 border-l-3 border-[var(--color-negative)] hover:translate-x-1 transition-all duration-150"
                    >
                      <div>
                        <span className="font-medium text-[13px] text-[var(--color-primary)] block truncate max-w-[250px]">
                          "{item.searchQuery}"
                        </span>
                        <span className="text-[10px] text-[var(--color-muted)] block font-mono">
                          Vol: {formatInteger(item.searchVolume)}
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="font-mono text-[13px] text-[var(--color-negative)] font-semibold block">
                          -{formatPercent(Math.abs(item.shareChange))}
                        </span>
                        <span className="text-[10px] text-[var(--color-muted)] block font-mono">
                          Curr: {formatPercent(item.curShare)}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          <div className="text-[11px] text-[var(--color-muted)] pt-4 mt-4 border-t border-slate-100">
            * Measures brand buy funnel purchase share drops on high volume traffic channels.
          </div>
        </div>
      </div>
    </div>
  );
}
