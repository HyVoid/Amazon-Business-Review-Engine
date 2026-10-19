[ 🌐 عربي ](README.ar.md) | [ 🇩🇪 Deutsch ](README.de.md) | [ 🇫🇷 Français ](README.fr.md) | [ 🇳🇱 Nederlands ](README.nl.md) | [ 🇪🇸 Español ](README.sp.md) | [ 🇬🇧 English ](README.md)

# Motor de Revisión de Negocios de Amazon

![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)
![Platform](https://img.shields.io/badge/Platform-Browser%20%2B%20Excel-success)
![Tool](https://img.shields.io/badge/Tool-Decision%20Support-orange)
![Amazon](https://img.shields.io/badge/Designed%20For-Amazon%20Sellers-FF9900)

---

## Convierta los informes exportados de Amazon en revisiones de negocio listas para la dirección en minutos — gratis, sin instalación, disponible tanto en el navegador como en Excel.

En lugar de pasar horas limpiando archivos CSV, reconstruyendo fórmulas y recreando informes semanales, este proyecto estandariza todo su flujo de trabajo de revisión de negocios de Amazon en un pipeline analítico repetible.

Diseñado específicamente para vendedores de Amazon, agencias y analistas de eCommerce, consolida las exportaciones de **Amazon Seller Central**, **Search Query Performance (SQP)** y **Sellerboard** en un modelo analítico unificado capaz de producir revisiones de rendimiento semanales, mensuales y anuales con un trabajo manual mínimo.

En lugar de funcionar como otro panel de control más, el libro de trabajo sirve como un marco ligero de apoyo a la decisión. Los datos operativos brutos se transforman en hechos de negocio estandarizados antes de generar automáticamente información de rendimiento a nivel de SKU, Parent ASIN, palabras clave, rentabilidad, publicidad y dirección.

El objetivo es simple:

> Dedique menos tiempo a preparar informes.
>
> Dedique más tiempo a comprender qué cambió realmente en el negocio.

---

**Sin registro. Sin instalación. Gratis en su navegador.**

Pruebe la versión de navegador gratis. Si necesita la versión de Excel, puede comprarla con una garantía de devolución de 30 días sin preguntas.

 **🌐 Abrir en el navegador**  👉 [*Demo HTML*](https://hyvoid.github.io/Amazon-Business-Review-Engine/)

 **📥 Descargar Excel**   👉 [*Enlace de descarga*](https://www.theseusworkshop.com/l/vfywnz?utm_source=github&utm_medium=GitHub%20README&utm_campaign=readme%20new%20launch&utm_content=amazon-business-review-analytics)
 
 Disponible en versiones de **Navegador** y **Excel**. Simplemente abra, importe los informes exportados, actualice y comience a analizar.

---

## Qué le ayuda a seguir

- Rendimiento del negocio semanal, mensual y anual sin reconstruir informes en cada ciclo de reporte.

- Qué SKU, Parent ASIN o grupos de productos están impulsando realmente el crecimiento de ingresos o la caída de ganancias.

- Si las pérdidas de tráfico provienen de una demanda de mercado en contracción, tasas de clic más débiles o un rendimiento de conversión en declive.

- Qué palabras clave de búsqueda están perdiendo cuota de compra antes de convertirse en problemas significativos de ingresos.

- KPIs ejecutivos —incluyendo Ventas, Ganancia, Gasto en PPC y ACoS— en una única revisión de negocio estandarizada.

- Cambios históricos del negocio utilizando comparaciones consistentes WoW, MoM y YoY en lugar de hojas de cálculo ensambladas manualmente.

---

## Flujo de trabajo de inicio rápido

El libro de trabajo está diseñado alrededor de un principio operativo simple:

**Configurar una vez. Importar nuevos informes. Actualizar periódicamente.**

No es necesario copiar fórmulas.
No es necesario reconstruir informes.
No es necesario recrear paneles.

### 1. Configurar los parámetros de reporte

Abra la hoja de trabajo **Config_Param** y defina la configuración de reporte.

Los parámetros típicos incluyen:

- Período de análisis (semanal o mensual)
- Período de reporte actual
- Período de comparación
- Mapeos de SKU a Parent ASIN
- Tablas de referencia opcionales como tipos de cambio o grupos de productos

Estas configuraciones normalmente permanecen sin cambios después de la configuración inicial.

---

### 2. Importar informes existentes

Exporte informes de sistemas operativos existentes como:

- Amazon Seller Central
- Amazon Search Query Performance (SQP)
- Sellerboard

Pegue cada CSV directamente en su hoja de datos brutos correspondiente.

Sin reorganización manual de columnas.

Sin reformateo.

Sin preprocesamiento.

El libro de trabajo estandariza automáticamente los datos entrantes en una estructura analítica consistente.

---

### 3. Revisar los resultados al instante

Seleccione **Actualizar todo** en Excel (o actualice la versión de navegador).

El motor analítico actualiza automáticamente:

- Panel de KPIs ejecutivos
- Análisis de rendimiento de SKU
- Resúmenes de Parent ASIN
- Análisis de oportunidades de palabras clave
- Comparaciones semanales / mensuales / año contra año
- Gráficos de tendencias ejecutivos
- Mayores ganancias y pérdidas de rendimiento

No se requieren cálculos manuales.

---

### 4. Actualizar según un cronograma regular

Cada ciclo de reporte sigue exactamente el mismo flujo de trabajo:

Exporte los informes.

Reemplace los datos brutos.

Actualice.

Revise la información de negocio actualizada.

No es necesario reconstruir fórmulas, recrear tablas dinámicas, rediseñar gráficos ni volver a configurar paneles.

---

> **Establezca algunos parámetros clave. Agregue sus datos existentes. Obtenga el análisis. Actualice cada vez que haya nuevos informes disponibles.**
## Por qué construí esto

Todo vendedor de Amazon exporta informes.

Muy pocos tienen un proceso de reporte.

En la mayoría de los negocios, la revisión semanal comienza descargando archivos CSV de múltiples sistemas, ajustando formatos de columnas, eliminando campos innecesarios, reconstruyendo fórmulas, recreando tablas dinámicas y copiando gráficos en PowerPoint. Cuando los datos finalmente están listos, la reunión ya se centra en explicar números en lugar de comprender el negocio detrás de ellos.

El verdadero cuello de botella no es la disponibilidad de datos — es la falta de un marco analítico repetible.

Construí este proyecto después de ver el mismo patrón repetirse en diferentes negocios de Amazon. Cada semana, los analistas pasaban horas preparando informes casi idénticos a los de la semana anterior. Cada mes, los períodos de comparación tenían que reconstruirse manualmente. Cada trimestre, las tendencias históricas se volvían cada vez más difíciles de conciliar porque cada hoja de cálculo evolucionaba de forma independiente.

El problema no era Excel.

El problema era que Excel se usaba como un documento en lugar de como un motor analítico.

Este proyecto convierte en producto el proceso de razonamiento detrás de una revisión de negocios de Amazon. En lugar de tratar cada ciclo de reporte como una nueva hoja de cálculo, estandariza la preparación de datos, la lógica de comparación, el cálculo de KPIs y el diagnóstico de rendimiento en un marco reutilizable.

### Antes

Las ventas cayeron un 8 %.

El equipo comparaba manualmente múltiples informes intentando determinar si la caída provenía de la eficiencia publicitaria, de una demanda de búsqueda en contracción, de problemas de inventario o de productos con bajo rendimiento. Se pasaban horas recopilando evidencia antes de que pudiera comenzar una discusión significativa.

### Después

El panel identifica de inmediato:

- Tres SKU que contribuyen con más del 70 % de la caída de ingresos.
- Dos palabras clave de alto volumen con pérdidas significativas de cuota de compra.
- Eficiencia publicitaria estable a pesar del tráfico reducido.
- Volumen de búsqueda del mercado en declive como el principal impulsor de menores ventas.

En lugar de preguntar *«¿Qué pasó?»*, la discusión comienza con *«¿Cómo deberíamos responder?»*

Ese es el propósito de este proyecto — no automatizar hojas de cálculo, sino estandarizar el razonamiento de negocio en un sistema repetible de apoyo a la decisión.

---

## Problemas comunes de reporte de Amazon que esto resuelve

| Problema | Sin esta herramienta | Con esta herramienta |
|----------|------------------|----------------|
| Los informes semanales requieren horas de preparación manual | Los archivos CSV se reformatean, las fórmulas se copian, las tablas dinámicas se reconstruyen y los gráficos se recrean en cada ciclo de reporte. | Exporte informes, pegue datos brutos, actualice y revise información de negocio generada automáticamente. |
| Múltiples fuentes de datos no pueden analizarse juntas | Las exportaciones de Seller Central, Sellerboard y SQP permanecen aisladas, forzando la conciliación manual. | Ventas, publicidad, rentabilidad y rendimiento de palabras clave se estandarizan en un modelo analítico unificado. |
| Los cambios de rendimiento no pueden explicarse rápidamente | Los cambios de ingresos son visibles, pero identificar el SKU, Parent ASIN o palabra clave responsable requiere una investigación manual extensa. | El análisis de contribución aísla automáticamente los productos y términos de búsqueda que impulsan el cambio del negocio. |
| Las comparaciones históricas se vuelven inconsistentes | Los libros de trabajo semanales y mensuales evolucionan de forma independiente, haciendo poco confiables las comparaciones WoW, MoM y YoY. | Períodos de reporte estandarizados y tablas de hechos unificadas producen un análisis de tendencias consistente a lo largo de los ciclos de reporte. |
| Las reuniones ejecutivas se centran en preparar números en lugar de tomar decisiones | Los analistas pasan más tiempo recopilando información que interpretándola. | Los paneles ejecutivos destacan los cambios de negocio de mayor impacto antes de que comience la reunión. |
| El conocimiento operativo depende de expertos en hojas de cálculo | Los flujos de reporte se vuelven difíciles de mantener cuando cambian las fórmulas, los diseños o el personal. | Un marco analítico estandarizado minimiza el mantenimiento y hace que el reporte sea repetible entre equipos. |

---

## Para quién es esto

Este proyecto está diseñado para profesionales que preparan regularmente revisiones de negocios de Amazon y necesitan un flujo de trabajo de reporte confiable y repetible en lugar de otro panel estático.

Es especialmente adecuado para:

- Propietarios de marcas de Amazon que administran múltiples SKU o Parent ASIN.
- Gerentes de marketplace responsables de revisiones de rendimiento semanales y mensuales.
- Analistas de eCommerce que consolidan informes operativos, publicitarios y financieros.
- Agencias de Amazon que apoyan múltiples cuentas de clientes con reportes estandarizados.
- Equipos de finanzas y operaciones que buscan reportes de KPIs consistentes entre períodos de reporte.
- Practicantes de Excel que construyen soluciones analíticas ligeras sin introducir plataformas de BI empresariales.

**No** está diseñado para:

- Negocios que requieren integraciones de API en tiempo real o almacenes de datos empresariales.
- Organizaciones que buscan una plataforma completa de ERP o Business Intelligence.
- Usuarios que buscan sistemas de reporte altamente personalizados que requieren un desarrollo de software extenso.

No se requiere experiencia en hojas de cálculo para el uso diario.

Abra la versión de navegador o el libro de Excel, importe los informes exportados, actualice los datos y comience de inmediato a revisar información de negocio estandarizada.

---

## Acerca de

Construyo herramientas ligeras de apoyo a la decisión para situaciones donde simplemente hay demasiadas piezas móviles para mantener en la cabeza.

La mayoría de los problemas de negocio no requieren otra plataforma empresarial — requieren una mejor manera de organizar la información para que la próxima decisión se vuelva evidente.

Cada proyecto comienza con la misma pregunta:

> **¿Qué información necesita existir en un solo lugar para que la próxima decisión de negocio pueda tomarse con confianza?**

**Amazon Business Review Data Engine** es un ejemplo de esa filosofía. Transforma el trabajo de reporte repetitivo en un marco analítico reutilizable, permitiendo a los analistas pasar menos tiempo preparando hojas de cálculo y más tiempo comprendiendo lo que realmente está sucediendo dentro del negocio.
## Detalles técnicos

<details>
<summary><strong>Para revisores técnicos, practicantes de Excel y colaboradores</strong></summary>

---

## Arquitectura del libro de trabajo

El libro de trabajo sigue una arquitectura analítica por capas en lugar de un diseño tradicional de hoja de cálculo.

Cada hoja de trabajo tiene una única responsabilidad, permitiendo que el flujo de reporte permanezca estable incluso a medida que los datos brutos crecen con el tiempo.

```
                    Amazon Seller Central
                           │
                    Sellerboard Export
                           │
                    SQP Export (CSV)
                           │
                           ▼
────────────────────────────────────────────
             Raw Data Layer
────────────────────────────────────────────

Raw_Seller_Central
Raw_Sellerboard
Raw_SQP

           │
           ▼

────────────────────────────────────────────
        Canonical Fact Layer
────────────────────────────────────────────

Fact_Sales
Fact_SQP

           │
           ▼

────────────────────────────────────────────
        Business Analysis Engine
────────────────────────────────────────────

Anly_SKU_Performance
Anly_Keyword_Performance

           │
           ▼

────────────────────────────────────────────
      Executive Decision Dashboard
────────────────────────────────────────────

Dash_Executive

           ▲
           │
     Config_Param
```

## Responsabilidades de las hojas de trabajo

| Hoja de trabajo | Propósito | Capa |
|------------|---------|------|
| Config_Param | Período de análisis, mapeos, configuración | Configuration |
| Raw_Seller_Central | Importación del Amazon Business Report | Input |
| Raw_Sellerboard | Importación del informe de ganancias | Input |
| Raw_SQP | Importación de Search Query Performance | Input |
| Fact_Sales | Tabla de hechos unificada de ventas y finanzas | Canonical Data |
| Fact_SQP | Tabla estandarizada de rendimiento de palabras clave | Canonical Data |
| Anly_SKU_Performance | Análisis de contribución de SKU & Parent ASIN | Business Engine |
| Anly_Keyword_Performance | Análisis de oportunidades de palabras clave | Business Engine |
| Dash_Executive | Panel de KPIs ejecutivos | Output |

---

## Tres trampas que atrapan incluso a los analistas de Amazon experimentados

---

## Trampa 1 — Las ventas bajaron, por lo tanto la publicidad falló

### Decisión

El presupuesto publicitario se incrementa porque las ventas semanales bajaron.

### Problema oculto

Los ingresos por sí solos no explican por qué cambiaron las ventas.

El tráfico, la tasa de conversión, el inventario, los precios y la demanda del mercado pueden producir cambios de ingresos similares.

### Razonamiento incorrecto

| Métrica observable | Conclusión |
|-------------------|-----------|
| Ventas -8% | Aumentar el presupuesto de PPC |

La recomendación asume que la publicidad causó la caída.

### Análisis correcto

El motor descompone el movimiento de ingresos en:

- Demanda de búsqueda
- Rendimiento de clics
- Rendimiento de conversión
- Cuota de compra
- Contribución de SKU

Ejemplo:

| Métrica | Resultado |
|---------|--------|
| Volumen de búsqueda | -11% |
| CTR de marca | Estable |
| CVR de marca | Estable |
| Cuota de compra | Estable |

Recomendación:

> La demanda se contrajo.
>
> Aumentar el presupuesto publicitario no recuperará el volumen del mercado.

Decisión correcta:

Mantener la eficiencia publicitaria mientras se protege la rentabilidad.

<details>
<summary>Lógica de fórmulas</summary>

```excel
Revenue Change
=Cur_Revenue-Pri_Revenue

Contribution
=SUMIFS(...)

Search Volume Comparison
=SUMIFS(...)

Purchase Share Comparison
=SUMIFS(...)
```

</details>

---

## Trampa 2 — El SKU menos rentable debe eliminarse

### Decisión

Un SKU con baja ganancia se descontinúa.

### Problema oculto

La ganancia absoluta es diferente de la contribución a la ganancia.

Eliminar un SKU puede reducir el tráfico que soporta otros productos.

### Análisis incorrecto

| SKU | Ganancia |
|------|---------|
| A | $320 |
| B | $40 |

Conclusión:

Eliminar el SKU B.

### Análisis correcto

El libro de trabajo clasifica los SKU por **cambio de ganancia**, no por ganancia actual.

Ejemplo:

| SKU | Cambio de ganancia |
|------|---------------|
| A | -$12,500 |
| B | +$200 |

Recomendación:

El SKU A merece investigación.

El SKU B está mejorando.

Decisión correcta:

Priorizar la investigación usando el ranking de contribución en lugar de valores absolutos.

<details>
<summary>Lógica de fórmulas</summary>

```excel
Profit Change

=Cur_Profit-Pri_Profit

Ranking

=RANK(
ProfitChange,
NegativeChanges,
1
)
```

</details>

---

## Trampa 3 — Alto volumen de búsqueda significa gran oportunidad

### Decisión

El presupuesto publicitario se incrementa en la palabra clave de mayor volumen.

### Problema oculto

El volumen de búsqueda mide la demanda del mercado.

No indica si la ficha de producto es competitiva.

### Análisis incorrecto

| Palabra clave | Volumen de búsqueda |
|----------|---------------|
| coffee grinder | 480,000 |

Conclusión:

Aumentar las pujas.

### Análisis correcto

El libro de trabajo compara:

- CTR de marca
- CTR del mercado
- CVR de marca
- CVR del mercado

Diagnóstico posible:

| CTR | CVR | Recomendación |
|------|------|----------------|
| Bajo | Alto | Mejorar la imagen principal o los precios |
| Alto | Bajo | Mejorar el contenido de la ficha |
| Bajo | Bajo | Reducir pujas hasta que la ficha mejore |

Esto evita gastar presupuesto publicitario en problemas estructurales de la ficha.

<details>
<summary>Lógica de fórmulas</summary>

```excel
CTR Gap

=BrandCTR-MarketCTR

Opportunity

=IF(
BrandCTR<MarketCTR,
Improve Image,
Improve Listing
)
```

</details>

---

## Escenario de ejemplo

Una marca que vende accesorios de cocina exporta informes semanales de Amazon Seller Central, Sellerboard y Search Query Performance.

El período de reporte es **2026-W27**.

Después de reemplazar los archivos CSV brutos y seleccionar **Actualizar todo**, el libro de trabajo reconstruye automáticamente las tablas de hechos estandarizadas.

Resumen del panel ejecutivo:

| KPI | W26 | W27 | Cambio |
|-----|------|------|--------|
| Ingresos | $105,200 | $120,450 | +14.5% |
| Ganancia neta | $24,000 | $31,500 | +31.2% |
| Gasto en PPC | $26,000 | $25,100 | -3.5% |
| ACoS | 24.71% | 20.84% | Mejorado |

El diagnóstico de SKU identifica:

- Un SKU generó el 46 % del crecimiento total de ganancias.
- Dos Parent ASIN representan casi todos los ingresos incrementales.
- Tres SKU con bajo rendimiento explican la mayoría de las pérdidas restantes.

El diagnóstico de palabras clave identifica:

- Dos palabras clave de alto volumen perdieron cuota de compra.
- El CTR se mantiene por encima del promedio del mercado.
- La tasa de conversión disminuyó porque las fichas de los competidores mejoraron.

Recomendación de negocio:

En lugar de aumentar el gasto publicitario en todas las campañas, priorice la optimización de fichas en las dos palabras clave en declive mientras mantiene la eficiencia de PPC existente.

El proceso de reporte toma solo unos minutos y produce una revisión de negocio repetible lista para la dirección sin reconstruir fórmulas ni tablas dinámicas.

---

## Referencia de fórmulas

<details>
<summary>Capa de configuración</summary>

| Fórmula | Propósito |
|----------|---------|
| LET | Gestión de parámetros |
| EDATE | Comparación mensual |
| WEEKNUM | Comparación semanal |
| TEXT | Etiquetas de período estandarizadas |

</details>

<details>
<summary>Capa de hechos canónica</summary>

| Fórmula | Propósito |
|----------|---------|
| UNIQUE | Eliminar registros duplicados |
| FILTER | Eliminar filas en blanco |
| SORT | Orden cronológico |
| XLOOKUP | Mapeo de SKU |
| MAP | Cálculos por fila |
| LAMBDA | Motor de cálculo dinámico |
| SUMIFS | Agregación de métricas |

</details>

<details>
<summary>Motor de análisis</summary>

| Fórmula | Propósito |
|----------|---------|
| MAP | Generación de KPIs |
| HSTACK | Comparación actual vs anterior |
| SORTBY | Clasificación |
| INDEX | Extracción dinámica |
| RANK | Ranking de contribución |

</details>

<details>
<summary>Capa del panel</summary>

| Fórmula | Propósito |
|----------|---------|
| SORTBY | Mejores desempeños |
| MAP | Tarjetas de KPI |
| SUMIFS | Métricas ejecutivas |
| INDEX | Componentes dinámicos del panel |

</details>

---

## Reglas de validación

| Campo | Regla | Comportamiento de error |
|--------|------|----------------|
| Analysis_Type | Solo semanal o mensual | Mensaje de validación |
| Current_Period | Período de reporte válido | Panel no actualizado |
| SKU | No puede estar en blanco | Excluido de la tabla de hechos |
| Parent ASIN | Debe existir en la tabla de mapeo | Muestra "Unmapped" |
| Date | Fecha de Excel válida | Fila excluida |
| Sales Revenue | Numérico | Devuelve cero |
| Net Profit | Numérico | Devuelve cero |
| Search Volume | Entero ≥ 0 | Advertencia de validación |
| Purchase Share | Entre 0 % y 100 % | Advertencia de validación |
| CTR / CVR | Porcentaje | Advertencia de validación |
| Duplicate Date + SKU | Agregado automáticamente | No se requiere acción manual |
| Blank Raw Rows | Ignoradas automáticamente | Sin error |

</details>

---

## Otras herramientas de esta serie

- **Inventory Replenishment Planner** — Pronostique el agotamiento de inventario y el momento de reordenar.
- **Amazon PPC Budget Optimizer** — Asigne el gasto publicitario según la rentabilidad en lugar de las impresiones.
- **Product Profitability Analyzer** — Compare el margen de contribución entre productos y marketplaces.
- **Executive KPI Tracker** — Tarjeta de puntuación operativa ligera para revisiones de gestión recurrentes.

Se publicarán más herramientas de apoyo a la decisión a través del repositorio de GitHub y nuestro [sitio web](https://www.theseusworkshop.com/).

---

## Licencia

Bajo licencia **Apache License 2.0**.

Este proyecto es libre de usar, modificar y distribuir bajo los términos de la Apache License 2.0. Las contribuciones, mejoras e informes de problemas son bienvenidos.
