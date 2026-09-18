import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./jsx-runtime-cM__dR4X.js";import{n as r,t as i}from"./DonutChartCard-GvW8Y0Jd.js";var a,o,s,c,l,u,d;t((()=>{r(),a=e(n(),1),o={title:`Design System MADS/Charts/DonutChartCard`,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`**来源:** @fluentui/react-charts-preview &nbsp;|&nbsp; **实现:** Fluent v9 (makeStyles) + @fluentui/react-charts-preview`}}}},s=[{legend:`Connected`,value:1204,color:`#0078d4`,calloutText:`1,204`},{legend:`Syncing`,value:430,color:`#2b88d8`,calloutText:`430`},{legend:`Disconnected`,value:215,color:`#d13438`,calloutText:`215`},{legend:`Pending`,value:230,color:`#c19c00`,calloutText:`230`}],c=[{legend:`Licensed`,value:8450,color:`#107c10`,calloutText:`8,450`},{legend:`Unlicensed`,value:2180,color:`#71afe5`,calloutText:`2,180`},{legend:`Guest`,value:980,color:`#a9d3f0`,calloutText:`980`},{legend:`Blocked`,value:490,color:`#d13438`,calloutText:`490`}],l=[{legend:`Healthy`,value:92,color:`#107c10`,calloutText:`92`},{legend:`At Risk`,value:8,color:`#d13438`,calloutText:`8`}],u={render:()=>(0,a.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:24,padding:16},children:[(0,a.jsx)(`h3`,{style:{margin:`16px 0 8px`},children:`Connector Status (4 segments)`}),(0,a.jsx)(`div`,{style:{maxWidth:400},children:(0,a.jsx)(i,{title:`Connector Health`,data:s,centerValue:`2,079`})}),(0,a.jsx)(`h3`,{style:{margin:`16px 0 8px`},children:`User License Distribution (4 segments)`}),(0,a.jsx)(`div`,{style:{maxWidth:400},children:(0,a.jsx)(i,{title:`User Licenses`,data:c,centerValue:`12,100`})}),(0,a.jsx)(`h3`,{style:{margin:`16px 0 8px`},children:`Health Score (2 segments)`}),(0,a.jsx)(`div`,{style:{maxWidth:400},children:(0,a.jsx)(i,{title:`System Health`,data:l,centerValue:`92%`})})]})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    padding: 16
  }}>
      <h3 style={{
      margin: '16px 0 8px'
    }}>Connector Status (4 segments)</h3>
      <div style={{
      maxWidth: 400
    }}>
        <DonutChartCard title="Connector Health" data={connectorData} centerValue="2,079" />
      </div>

      <h3 style={{
      margin: '16px 0 8px'
    }}>User License Distribution (4 segments)</h3>
      <div style={{
      maxWidth: 400
    }}>
        <DonutChartCard title="User Licenses" data={userLicenseData} centerValue="12,100" />
      </div>

      <h3 style={{
      margin: '16px 0 8px'
    }}>Health Score (2 segments)</h3>
      <div style={{
      maxWidth: 400
    }}>
        <DonutChartCard title="System Health" data={healthData} centerValue="92%" />
      </div>
    </div>
}`,...u.parameters?.docs?.source}}},d=[`Default`]}))();export{u as Default,d as __namedExportsOrder,o as default};