import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./jsx-runtime-cM__dR4X.js";import{n as r,t as i}from"./BarChartCard-3_1TUFJ8.js";var a,o,s,c,l,u,d;t((()=>{r(),a=e(n(),1),o={title:`Design System MADS/Charts/BarChartCard`,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`**来源:** @fluentui/react-charts-preview &nbsp;|&nbsp; **实现:** Fluent v9 (makeStyles) + @fluentui/react-charts-preview`}}}},s=[{label:`Teams`,value:4821,color:`#0078d4`,calloutText:`4,821`},{label:`SharePoint`,value:3205,color:`#2b88d8`,calloutText:`3,205`},{label:`Exchange`,value:2750,color:`#71afe5`,calloutText:`2,750`},{label:`OneDrive`,value:1980,color:`#a9d3f0`,calloutText:`1,980`},{label:`Yammer`,value:540,color:`#deecf9`,calloutText:`540`}],c=[{label:`Active`,segments:[{legend:`Licensed`,value:1200,color:`#0078d4`,calloutText:`1,200`},{legend:`Unlicensed`,value:800,color:`#2b88d8`,calloutText:`800`},{legend:`Guest`,value:430,color:`#71afe5`,calloutText:`430`}]},{label:`Inactive`,segments:[{legend:`Dormant`,value:520,color:`#e1dfdd`,calloutText:`520`},{legend:`Pending`,value:350,color:`#c8c6c4`,calloutText:`350`}]},{label:`Blocked`,segments:[{legend:`Blocked`,value:124,color:`#d13438`,calloutText:`124`}]}],l=[{label:`North America`,value:38,color:`#0078d4`,calloutText:`38%`},{label:`Europe`,value:27,color:`#2b88d8`,calloutText:`27%`},{label:`Asia Pacific`,value:22,color:`#71afe5`,calloutText:`22%`},{label:`Latin America`,value:9,color:`#a9d3f0`,calloutText:`9%`},{label:`Other`,value:4,color:`#deecf9`,calloutText:`4%`}],u={render:()=>(0,a.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:24,padding:16},children:[(0,a.jsx)(`h3`,{style:{margin:`16px 0 8px`},children:`Single Bars — Part to Whole`}),(0,a.jsx)(`div`,{style:{maxWidth:480},children:(0,a.jsx)(i,{title:`App Usage by Service`,data:s})}),(0,a.jsx)(`h3`,{style:{margin:`16px 0 8px`},children:`Stacked Horizontal Bars`}),(0,a.jsx)(`div`,{style:{maxWidth:480},children:(0,a.jsx)(i,{title:`User Status Breakdown`,data:c})}),(0,a.jsx)(`h3`,{style:{margin:`16px 0 8px`},children:`Regional Distribution`}),(0,a.jsx)(`div`,{style:{maxWidth:480},children:(0,a.jsx)(i,{title:`Usage by Region`,data:l})})]})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    padding: 16
  }}>
      <h3 style={{
      margin: '16px 0 8px'
    }}>Single Bars — Part to Whole</h3>
      <div style={{
      maxWidth: 480
    }}>
        <BarChartCard title="App Usage by Service" data={simpleBarData} />
      </div>

      <h3 style={{
      margin: '16px 0 8px'
    }}>Stacked Horizontal Bars</h3>
      <div style={{
      maxWidth: 480
    }}>
        <BarChartCard title="User Status Breakdown" data={stackedBarData} />
      </div>

      <h3 style={{
      margin: '16px 0 8px'
    }}>Regional Distribution</h3>
      <div style={{
      maxWidth: 480
    }}>
        <BarChartCard title="Usage by Region" data={regionData} />
      </div>
    </div>
}`,...u.parameters?.docs?.source}}},d=[`Default`]}))();export{u as Default,d as __namedExportsOrder,o as default};