import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./jsx-runtime-cM__dR4X.js";import{n as r,t as i}from"./KPIWithActionsCard-B6TzUwmE.js";var a,o,s,c,l,u;t((()=>{r(),a=e(n(),1),o={title:`Design System MADS/Data Display/KPIWithActionsCard`,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`**来源:** DesignAgent 自建 &nbsp;|&nbsp; **实现:** Fluent v9 (makeStyles)`}}}},s=[{label:`Total Users`,value:`12,450`,color:`#0078d4`},{label:`Active Licenses`,value:`8,930`,color:`#107c10`},{label:`Pending Actions`,value:`47`,color:`#d13438`}],c=[{title:`Optimize License Usage`,description:`You have 3,520 unassigned licenses that can be reallocated to reduce costs.`,badges:[{text:`March 2026`,variant:`date`},{text:`3 need attention`,variant:`attention`}],insight:{text:`Reassigning 500 licenses could save your organization $12,000 annually.`,highlight:[`save your organization $12,000 annually`]},dataBars:[{label:`Assigned`,value:`8,930`,percentage:72,color:`#0078d4`},{label:`Unassigned`,value:`3,520`,percentage:28,color:`#e1dfdd`}],businessImpacts:[{label:`Potential savings`,value:`$12K/yr`},{label:`Licenses to reassign`,value:`500`}],actionLabel:`Review Licenses`,actionHandler:()=>alert(`Review Licenses clicked`)},{title:`Enable Multi-Factor Authentication`,description:`1,240 users do not have MFA enabled. Enabling MFA significantly reduces security risk.`,badges:[{text:`Security`,variant:`warning`},{text:`1,240 users at risk`,variant:`attention`}],insight:{text:`Enabling MFA for all users reduces breach risk by up to 99.9%.`,highlight:[`reduces breach risk by up to 99.9%`]},dataBars:[{label:`MFA Enabled`,value:`11,210`,percentage:90,color:`#107c10`},{label:`MFA Disabled`,value:`1,240`,percentage:10,color:`#d13438`}],actionLabel:`Enable MFA`,actionHandler:()=>alert(`Enable MFA clicked`)}],l={render:()=>(0,a.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:24,padding:16},children:[(0,a.jsx)(`h3`,{style:{margin:`16px 0 8px`},children:`KPI with Actions Card — 3 Metrics, 2 Scenarios`}),(0,a.jsx)(i,{title:`Organization Health`,metrics:s,description:`Your organization has 12,450 users across 3 active directories. Review the suggested actions below.`,alertText:`47 items need attention`,scenarios:c}),(0,a.jsx)(`h3`,{style:{margin:`16px 0 8px`},children:`Without Alert Text`}),(0,a.jsx)(i,{title:`License Overview`,metrics:[{label:`Total Seats`,value:`500`,color:`#0078d4`},{label:`In Use`,value:`423`,color:`#107c10`},{label:`Available`,value:`77`,color:`#605e5c`}],description:`Your current license utilization is at 84.6%. Consider reviewing underutilized seats.`,scenarios:[c[0]]})]})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    padding: 16
  }}>
      <h3 style={{
      margin: '16px 0 8px'
    }}>KPI with Actions Card — 3 Metrics, 2 Scenarios</h3>
      <KPIWithActionsCard title="Organization Health" metrics={metrics} description="Your organization has 12,450 users across 3 active directories. Review the suggested actions below." alertText="47 items need attention" scenarios={scenarios} />

      <h3 style={{
      margin: '16px 0 8px'
    }}>Without Alert Text</h3>
      <KPIWithActionsCard title="License Overview" metrics={[{
      label: 'Total Seats',
      value: '500',
      color: '#0078d4'
    }, {
      label: 'In Use',
      value: '423',
      color: '#107c10'
    }, {
      label: 'Available',
      value: '77',
      color: '#605e5c'
    }]} description="Your current license utilization is at 84.6%. Consider reviewing underutilized seats." scenarios={[scenarios[0]]} />
    </div>
}`,...l.parameters?.docs?.source}}},u=[`Default`]}))();export{l as Default,u as __namedExportsOrder,o as default};