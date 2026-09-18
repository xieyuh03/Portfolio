import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./react-DngYkFIh.js";import{Er as r,gr as i}from"./lib-CZaTWtPI.js";import{t as a,wr as o}from"./lib-DC32QjlN.js";import{t as s}from"./jsx-runtime-cM__dR4X.js";var c,l,u,d=t((()=>{n(),a(),c=e(s(),1),l=i({root:{display:`flex`,alignItems:`center`,gap:o.spacingHorizontalS,paddingTop:o.spacingVerticalXS,paddingBottom:o.spacingVerticalXS},indicator:{width:`8px`,height:`8px`,borderRadius:o.borderRadiusCircular,flexShrink:0},healthy:{backgroundColor:o.colorStatusSuccessBackground3},warning:{backgroundColor:o.colorStatusWarningBackground3},error:{backgroundColor:o.colorStatusDangerBackground3},info:{display:`flex`,flexDirection:`column`,gap:`2px`,minWidth:0},label:{fontSize:o.fontSizeBase200,lineHeight:o.lineHeightBase200,color:o.colorNeutralForeground2,overflow:`hidden`,textOverflow:`ellipsis`,whiteSpace:`nowrap`},value:{fontSize:o.fontSizeBase200,lineHeight:o.lineHeightBase200,fontWeight:o.fontWeightSemibold,color:o.colorNeutralForeground1},valueHealthy:{color:o.colorStatusSuccessForeground1},valueWarning:{color:o.colorStatusWarningForeground1},valueError:{color:o.colorStatusDangerForeground1}}),u=({label:e,value:t,status:n})=>{let i=l(),a=n===`healthy`?i.healthy:n===`warning`?i.warning:i.error,o=n===`healthy`?i.valueHealthy:n===`warning`?i.valueWarning:i.valueError;return(0,c.jsxs)(`div`,{className:i.root,children:[(0,c.jsx)(`div`,{className:r(i.indicator,a)}),(0,c.jsxs)(`div`,{className:i.info,children:[(0,c.jsx)(`div`,{className:i.label,children:e}),(0,c.jsx)(`div`,{className:r(i.value,o),children:t})]})]})}})),f,p,m,h,g;t((()=>{d(),f=e(s(),1),p={title:`Design System MADS/Data Display/StatusListItem`,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`**来源:** DesignAgent 自建 &nbsp;|&nbsp; **实现:** Fluent v9 (makeStyles)`}}}},m={render:()=>(0,f.jsxs)(`div`,{style:{width:280},children:[(0,f.jsx)(`h4`,{style:{margin:`0 0 8px`},children:`Service Status`}),(0,f.jsx)(u,{label:`API Gateway`,value:`Operational`,status:`healthy`}),(0,f.jsx)(u,{label:`Database`,value:`Operational`,status:`healthy`}),(0,f.jsx)(u,{label:`Cache Server`,value:`Degraded`,status:`warning`}),(0,f.jsx)(u,{label:`Storage`,value:`Unavailable`,status:`error`})]})},h={render:()=>(0,f.jsxs)(`div`,{style:{display:`flex`,gap:32,flexWrap:`wrap`},children:[(0,f.jsxs)(`div`,{style:{width:240},children:[(0,f.jsx)(`h4`,{style:{margin:`0 0 8px`},children:`Healthy`}),(0,f.jsx)(u,{label:`API Gateway`,value:`Operational`,status:`healthy`})]}),(0,f.jsxs)(`div`,{style:{width:240},children:[(0,f.jsx)(`h4`,{style:{margin:`0 0 8px`},children:`Warning`}),(0,f.jsx)(u,{label:`Cache Server`,value:`Degraded`,status:`warning`})]}),(0,f.jsxs)(`div`,{style:{width:240},children:[(0,f.jsx)(`h4`,{style:{margin:`0 0 8px`},children:`Error`}),(0,f.jsx)(u,{label:`Auth Service`,value:`Unavailable`,status:`error`})]})]})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 280
  }}>
      <h4 style={{
      margin: '0 0 8px'
    }}>Service Status</h4>
      <StatusListItem label="API Gateway" value="Operational" status="healthy" />
      <StatusListItem label="Database" value="Operational" status="healthy" />
      <StatusListItem label="Cache Server" value="Degraded" status="warning" />
      <StatusListItem label="Storage" value="Unavailable" status="error" />
    </div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 32,
    flexWrap: 'wrap'
  }}>
      <div style={{
      width: 240
    }}>
        <h4 style={{
        margin: '0 0 8px'
      }}>Healthy</h4>
        <StatusListItem label="API Gateway" value="Operational" status="healthy" />
      </div>
      <div style={{
      width: 240
    }}>
        <h4 style={{
        margin: '0 0 8px'
      }}>Warning</h4>
        <StatusListItem label="Cache Server" value="Degraded" status="warning" />
      </div>
      <div style={{
      width: 240
    }}>
        <h4 style={{
        margin: '0 0 8px'
      }}>Error</h4>
        <StatusListItem label="Auth Service" value="Unavailable" status="error" />
      </div>
    </div>
}`,...h.parameters?.docs?.source}}},g=[`Default`,`AllVariants`]}))();export{h as AllVariants,m as Default,g as __namedExportsOrder,p as default};