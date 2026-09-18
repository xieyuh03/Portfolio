import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./jsx-runtime-cM__dR4X.js";import{n as r,r as i,t as a}from"./_M365Wrapper-DdTyzi7w.js";var o,s,c,l,u;t((()=>{r(),o=e(n(),1),s=()=>(0,o.jsx)(a,{children:(0,o.jsxs)(`div`,{style:i.page,children:[(0,o.jsx)(`h1`,{style:i.title,children:`ChartingHelpers`}),(0,o.jsxs)(`p`,{style:i.subtitle,children:[(0,o.jsx)(`span`,{style:i.code,children:`@m365-admin/charting-helpers`}),` — 图表辅助组件，封装 Fluent UI Charts + M365 主题。`]}),(0,o.jsxs)(`div`,{style:i.section,children:[(0,o.jsx)(`h3`,{style:i.sectionTitle,children:`Components`}),(0,o.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8},children:[{name:`StackedBarChartHelper`,desc:`堆叠柱状图辅助 — 封装 @fluentui/react-charting StackedBarChart，自动应用 M365 主题色`},{name:`MultiStackedBarChartHelper`,desc:`多层堆叠柱状图辅助 — 同上，支持多组数据`}].map(({name:e,desc:t})=>(0,o.jsxs)(`div`,{style:{padding:16,border:`1px solid #e0e0e0`,borderRadius:4,backgroundColor:`#fff`},children:[(0,o.jsx)(`span`,{style:{...i.code,display:`block`,marginBottom:6,fontSize:14},children:e}),(0,o.jsx)(`span`,{style:{fontSize:13,color:`#616161`},children:t})]},e))})]}),(0,o.jsxs)(`div`,{style:i.section,children:[(0,o.jsx)(`h3`,{style:i.sectionTitle,children:`Data Interface`}),(0,o.jsx)(`div`,{style:i.card,children:(0,o.jsx)(`pre`,{style:{margin:0,fontSize:12,fontFamily:`Consolas, monospace`,color:`#323130`,lineHeight:`20px`,whiteSpace:`pre-wrap`},children:`interface IChartingHelperDataPoint {
  legend: string;     // 图例名称
  data: number;       // 数值
  color?: string;     // 自定义颜色（默认用 M365 dataVis 色）
  onClick?: () => void;
}

// StackedBarChartHelper props:
{
  chartDataPoints: IChartingHelperDataPoint[];
  hideLabels?: boolean;
  barHeight?: number;
  theme?: IM365Theme;
}`})})]}),(0,o.jsxs)(`div`,{style:i.section,children:[(0,o.jsx)(`h3`,{style:i.sectionTitle,children:`Usage Pattern`}),(0,o.jsx)(`div`,{style:i.card,children:(0,o.jsxs)(`p`,{style:{fontSize:13,color:`#616161`,margin:0,lineHeight:`22px`},children:[`ChartingHelpers 包装了 `,(0,o.jsx)(`span`,{style:i.code,children:`@fluentui/react-charting`}),` 的图表组件， 自动使用 M365 扩展主题色（dataVis1~10）。在 M365Wrapper 内使用即可获得正确的配色。 通常与 `,(0,o.jsx)(`span`,{style:i.code,children:`DashboardCard`}),` 搭配放置在仪表盘中。`]})})]})]})}),c={title:`Design System MADS/Charts/ChartingHelpers`,parameters:{layout:`fullscreen`,docs:{description:{component:`**@m365-admin/charting-helpers** — 图表辅助组件，封装 Fluent Charts + M365 主题色。`}}},tags:[`autodocs`]},l={render:()=>(0,o.jsx)(s,{})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <ChartingHelpersDemo />
}`,...l.parameters?.docs?.source}}},u=[`Overview`]}))();export{l as Overview,u as __namedExportsOrder,c as default};