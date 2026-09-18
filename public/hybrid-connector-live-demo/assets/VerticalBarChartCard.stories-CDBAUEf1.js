import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./jsx-runtime-cM__dR4X.js";import{n as r,t as i}from"./VerticalBarChartCard-5dkqp8V_.js";var a,o,s,c,l,u,d;t((()=>{r(),a=e(n(),1),o={title:`Design System MADS/Charts/VerticalBarChartCard`,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`**来源:** @fluentui/react-charts-preview &nbsp;|&nbsp; **实现:** Fluent v9 (makeStyles) + @fluentui/react-charts-preview`}}}},s=[`Jan`,`Feb`,`Mar`,`Apr`,`May`,`Jun`,`Jul`,`Aug`].map((e,t)=>({x:e,y:8e3+t*600+Math.floor(Math.sin(t)*300),legend:e,color:`#0078d4`})),c=[{x:`Engineering`,y:91,color:`#107c10`,legend:`Engineering`},{x:`Marketing`,y:84,color:`#0078d4`,legend:`Marketing`},{x:`Sales`,y:76,color:`#0078d4`,legend:`Sales`},{x:`HR`,y:71,color:`#0078d4`,legend:`HR`},{x:`Operations`,y:64,color:`#0078d4`,legend:`Operations`},{x:`Legal`,y:48,color:`#c19c00`,legend:`Legal`},{x:`Finance`,y:23,color:`#d13438`,legend:`Finance`}],l=[{x:`Teams`,y:4821,color:`#0078d4`,legend:`Teams`},{x:`SharePoint`,y:3205,color:`#107c10`,legend:`SharePoint`},{x:`Exchange`,y:2750,color:`#c19c00`,legend:`Exchange`},{x:`OneDrive`,y:1980,color:`#8764b8`,legend:`OneDrive`},{x:`Yammer`,y:540,color:`#71afe5`,legend:`Yammer`}],u={render:()=>(0,a.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:24,padding:16},children:[(0,a.jsx)(`h3`,{style:{margin:`16px 0 8px`},children:`Monthly Active Users`}),(0,a.jsx)(`div`,{style:{maxWidth:640},children:(0,a.jsx)(i,{title:`Monthly Active Users`,data:s,yAxisTitle:`Users`,hideLegend:!0})}),(0,a.jsx)(`h3`,{style:{margin:`16px 0 8px`},children:`Adoption Rate by Department (%)`}),(0,a.jsx)(`div`,{style:{maxWidth:640},children:(0,a.jsx)(i,{title:`Adoption by Department`,data:c,yAxisTitle:`Adoption %`,barWidth:`auto`})}),(0,a.jsx)(`h3`,{style:{margin:`16px 0 8px`},children:`App Usage by Service — Multi-Color`}),(0,a.jsx)(`div`,{style:{maxWidth:640},children:(0,a.jsx)(i,{title:`App Usage by Service`,data:l,yAxisTitle:`Active Users`,barWidth:`auto`})})]})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    padding: 16
  }}>
      <h3 style={{
      margin: '16px 0 8px'
    }}>Monthly Active Users</h3>
      <div style={{
      maxWidth: 640
    }}>
        <VerticalBarChartCard title="Monthly Active Users" data={monthlyActiveUsers} yAxisTitle="Users" hideLegend />
      </div>

      <h3 style={{
      margin: '16px 0 8px'
    }}>Adoption Rate by Department (%)</h3>
      <div style={{
      maxWidth: 640
    }}>
        <VerticalBarChartCard title="Adoption by Department" data={deptAdoptionData} yAxisTitle="Adoption %" barWidth="auto" />
      </div>

      <h3 style={{
      margin: '16px 0 8px'
    }}>App Usage by Service — Multi-Color</h3>
      <div style={{
      maxWidth: 640
    }}>
        <VerticalBarChartCard title="App Usage by Service" data={multiColorData} yAxisTitle="Active Users" barWidth="auto" />
      </div>
    </div>
}`,...u.parameters?.docs?.source}}},d=[`Default`]}))();export{u as Default,d as __namedExportsOrder,o as default};