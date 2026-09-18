import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./react-DngYkFIh.js";import{gr as r}from"./lib-CZaTWtPI.js";import{t as i,wr as a}from"./lib-DC32QjlN.js";import{t as o}from"./jsx-runtime-cM__dR4X.js";var s,c,l,u=t((()=>{n(),i(),s=e(o(),1),c=r({root:{display:`flex`,alignItems:`center`,gap:a.spacingHorizontalS,paddingTop:a.spacingVerticalXS,paddingBottom:a.spacingVerticalXS},label:{fontSize:a.fontSizeBase200,lineHeight:a.lineHeightBase200,color:a.colorNeutralForeground2,width:`80px`,flexShrink:0,overflow:`hidden`,textOverflow:`ellipsis`,whiteSpace:`nowrap`},track:{flex:1,height:`6px`,backgroundColor:a.colorNeutralBackground4,borderRadius:a.borderRadiusCircular,overflow:`hidden`},fill:{height:`100%`,borderRadius:a.borderRadiusCircular,transitionProperty:`width`,transitionDuration:a.durationNormal,transitionTimingFunction:a.curveEasyEase},valueText:{fontSize:a.fontSizeBase200,lineHeight:a.lineHeightBase200,fontWeight:a.fontWeightSemibold,color:a.colorNeutralForeground1,width:`36px`,textAlign:`right`,flexShrink:0}}),l=({label:e,percentage:t,color:n=a.colorBrandBackground})=>{let r=c(),i=Math.min(100,Math.max(0,t));return(0,s.jsxs)(`div`,{className:r.root,children:[(0,s.jsx)(`div`,{className:r.label,children:e}),(0,s.jsx)(`div`,{className:r.track,role:`progressbar`,"aria-valuenow":i,"aria-valuemin":0,"aria-valuemax":100,children:(0,s.jsx)(`div`,{className:r.fill,style:{width:`${i}%`,backgroundColor:n}})}),(0,s.jsxs)(`div`,{className:r.valueText,children:[i,`%`]})]})}})),d,f,p,m,h;t((()=>{u(),d=e(o(),1),f={title:`Design System MADS/Data Display/ProgressBarItem`,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`**来源:** DesignAgent 自建 &nbsp;|&nbsp; **实现:** Fluent v9 (makeStyles)`}}}},p={render:()=>(0,d.jsxs)(`div`,{style:{width:360},children:[(0,d.jsx)(`h4`,{style:{margin:`0 0 8px`},children:`Server Load`}),(0,d.jsx)(l,{label:`CPU Usage`,percentage:67,color:`#0F6CBD`}),(0,d.jsx)(l,{label:`Memory`,percentage:82,color:`#F7630C`}),(0,d.jsx)(l,{label:`Disk I/O`,percentage:45,color:`#107C10`}),(0,d.jsx)(l,{label:`Network`,percentage:34,color:`#107C10`})]})},m={render:()=>(0,d.jsxs)(`div`,{style:{width:360},children:[(0,d.jsx)(`h4`,{style:{margin:`0 0 8px`},children:`Edge Cases`}),(0,d.jsx)(l,{label:`Empty`,percentage:0}),(0,d.jsx)(l,{label:`Half`,percentage:50}),(0,d.jsx)(l,{label:`Full`,percentage:100}),(0,d.jsx)(l,{label:`Over 100`,percentage:120})]})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 360
  }}>
      <h4 style={{
      margin: '0 0 8px'
    }}>Server Load</h4>
      <ProgressBarItem label="CPU Usage" percentage={67} color="#0F6CBD" />
      <ProgressBarItem label="Memory" percentage={82} color="#F7630C" />
      <ProgressBarItem label="Disk I/O" percentage={45} color="#107C10" />
      <ProgressBarItem label="Network" percentage={34} color="#107C10" />
    </div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 360
  }}>
      <h4 style={{
      margin: '0 0 8px'
    }}>Edge Cases</h4>
      <ProgressBarItem label="Empty" percentage={0} />
      <ProgressBarItem label="Half" percentage={50} />
      <ProgressBarItem label="Full" percentage={100} />
      <ProgressBarItem label="Over 100" percentage={120} />
    </div>
}`,...m.parameters?.docs?.source}}},h=[`Default`,`EdgeCases`]}))();export{p as Default,m as EdgeCases,h as __namedExportsOrder,f as default};