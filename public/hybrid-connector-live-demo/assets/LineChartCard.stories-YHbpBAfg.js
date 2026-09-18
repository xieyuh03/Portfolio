import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./jsx-runtime-cM__dR4X.js";import{n as r,t as i}from"./LineChartCard-BOv83UO5.js";var a,o,s,c,l,u,d;t((()=>{r(),a=e(n(),1),o={title:`Design System MADS/Charts/LineChartCard`,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`**来源:** @fluentui/react-charts-preview &nbsp;|&nbsp; **实现:** Fluent v9 (makeStyles) + @fluentui/react-charts-preview`}}}},s=[`Jan`,`Feb`,`Mar`,`Apr`,`May`,`Jun`,`Jul`,`Aug`],c=[{name:`Active Users`,color:`#0078d4`,data:s.map((e,t)=>({x:t+1,y:8e3+t*450+Math.floor(Math.sin(t)*200),xAxisCalloutData:e}))}],l=[{name:`Teams`,color:`#0078d4`,data:s.map((e,t)=>({x:t+1,y:4200+t*300+Math.floor(Math.sin(t*.8)*150),xAxisCalloutData:e}))},{name:`SharePoint`,color:`#107c10`,data:s.map((e,t)=>({x:t+1,y:2800+t*180+Math.floor(Math.cos(t*.9)*100),xAxisCalloutData:e}))},{name:`Exchange`,color:`#c19c00`,data:s.map((e,t)=>({x:t+1,y:1600+t*90+Math.floor(Math.sin(t*1.2)*80),xAxisCalloutData:e}))}],u={render:()=>(0,a.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:24,padding:16},children:[(0,a.jsx)(`h3`,{style:{margin:`16px 0 8px`},children:`Single Line Chart`}),(0,a.jsx)(`div`,{style:{maxWidth:640},children:(0,a.jsx)(i,{title:`Active Users Over Time`,series:c,hideLegend:!0,yAxisTitle:`Users`})}),(0,a.jsx)(`h3`,{style:{margin:`16px 0 8px`},children:`Multi-Line Chart with Legend`}),(0,a.jsx)(`div`,{style:{maxWidth:640},children:(0,a.jsx)(i,{title:`App Usage by Service`,series:l,yAxisTitle:`Users`})}),(0,a.jsx)(`h3`,{style:{margin:`16px 0 8px`},children:`Multi-Line Chart — No Legend`}),(0,a.jsx)(`div`,{style:{maxWidth:640},children:(0,a.jsx)(i,{title:`Service Adoption`,series:l,hideLegend:!0})})]})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    padding: 16
  }}>
      <h3 style={{
      margin: '16px 0 8px'
    }}>Single Line Chart</h3>
      <div style={{
      maxWidth: 640
    }}>
        <LineChartCard title="Active Users Over Time" series={singleSeries} hideLegend yAxisTitle="Users" />
      </div>

      <h3 style={{
      margin: '16px 0 8px'
    }}>Multi-Line Chart with Legend</h3>
      <div style={{
      maxWidth: 640
    }}>
        <LineChartCard title="App Usage by Service" series={multiSeries} yAxisTitle="Users" />
      </div>

      <h3 style={{
      margin: '16px 0 8px'
    }}>Multi-Line Chart — No Legend</h3>
      <div style={{
      maxWidth: 640
    }}>
        <LineChartCard title="Service Adoption" series={multiSeries} hideLegend />
      </div>
    </div>
}`,...u.parameters?.docs?.source}}},d=[`Default`]}))();export{u as Default,d as __namedExportsOrder,o as default};