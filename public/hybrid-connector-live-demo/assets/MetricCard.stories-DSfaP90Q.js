import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./react-DngYkFIh.js";import{gr as r}from"./lib-CZaTWtPI.js";import{t as i,wr as a}from"./lib-DC32QjlN.js";import{t as o}from"./jsx-runtime-cM__dR4X.js";var s,c,l,u,d,f=t((()=>{n(),i(),s=e(o(),1),c=r({root:{display:`flex`,flexDirection:`column`,gap:a.spacingVerticalXS,padding:`${a.spacingVerticalS} 0`},value:{fontSize:a.fontSizeBase600,fontWeight:a.fontWeightSemibold,lineHeight:a.lineHeightBase600,color:a.colorNeutralForeground1},change:{display:`flex`,alignItems:`center`,gap:a.spacingHorizontalXS,fontSize:a.fontSizeBase200,fontWeight:a.fontWeightSemibold,lineHeight:a.lineHeightBase200},positive:{color:a.colorStatusSuccessForeground1},negative:{color:a.colorStatusDangerForeground1},neutral:{color:a.colorNeutralForeground3},label:{fontSize:a.fontSizeBase200,lineHeight:a.lineHeightBase200,color:a.colorNeutralForeground3}}),l=()=>(0,s.jsx)(`svg`,{width:`12`,height:`12`,viewBox:`0 0 12 12`,fill:`currentColor`,"aria-hidden":`true`,children:(0,s.jsx)(`path`,{d:`M6 2L10 10H2L6 2Z`})}),u=()=>(0,s.jsx)(`svg`,{width:`12`,height:`12`,viewBox:`0 0 12 12`,fill:`currentColor`,"aria-hidden":`true`,children:(0,s.jsx)(`path`,{d:`M6 10L2 2H10L6 10Z`})}),d=({value:e,label:t,change:n,changeType:r=`neutral`,valueColor:i})=>{let a=c(),o=r===`positive`?a.positive:r===`negative`?a.negative:a.neutral;return(0,s.jsxs)(`div`,{className:a.root,children:[(0,s.jsx)(`div`,{className:a.value,style:i?{color:i}:void 0,children:e}),n&&(0,s.jsxs)(`div`,{className:`${a.change} ${o}`,children:[r===`positive`&&(0,s.jsx)(l,{}),r===`negative`&&(0,s.jsx)(u,{}),(0,s.jsx)(`span`,{children:n})]}),(0,s.jsx)(`div`,{className:a.label,children:t})]})}})),p,m,h,g;t((()=>{f(),p=e(o(),1),m={title:`Design System MADS/Data Display/MetricCard`,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`**来源:** DesignAgent 自建 &nbsp;|&nbsp; **实现:** Fluent v9 (makeStyles)`}}}},h={render:()=>(0,p.jsxs)(`div`,{style:{display:`flex`,gap:32,flexWrap:`wrap`},children:[(0,p.jsxs)(`div`,{style:{width:180},children:[(0,p.jsx)(`h4`,{style:{margin:`0 0 8px`},children:`Positive change`}),(0,p.jsx)(d,{value:`12,847`,label:`vs last month`,change:`+12.5%`,changeType:`positive`})]}),(0,p.jsxs)(`div`,{style:{width:180},children:[(0,p.jsx)(`h4`,{style:{margin:`0 0 8px`},children:`Negative change`}),(0,p.jsx)(d,{value:`127ms`,label:`avg over 24h`,change:`-3.1%`,changeType:`negative`,valueColor:`#0F6CBD`})]}),(0,p.jsxs)(`div`,{style:{width:180},children:[(0,p.jsx)(`h4`,{style:{margin:`0 0 8px`},children:`Neutral / no change`}),(0,p.jsx)(d,{value:`99.97%`,label:`last 30 days`,changeType:`neutral`})]}),(0,p.jsxs)(`div`,{style:{width:180},children:[(0,p.jsx)(`h4`,{style:{margin:`0 0 8px`},children:`Custom value color`}),(0,p.jsx)(d,{value:`99.97%`,label:`last 30 days`,change:`+0.12%`,changeType:`positive`,valueColor:`#107C10`})]})]})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 32,
    flexWrap: 'wrap'
  }}>
      <div style={{
      width: 180
    }}>
        <h4 style={{
        margin: '0 0 8px'
      }}>Positive change</h4>
        <MetricCard value="12,847" label="vs last month" change="+12.5%" changeType="positive" />
      </div>
      <div style={{
      width: 180
    }}>
        <h4 style={{
        margin: '0 0 8px'
      }}>Negative change</h4>
        <MetricCard value="127ms" label="avg over 24h" change="-3.1%" changeType="negative" valueColor="#0F6CBD" />
      </div>
      <div style={{
      width: 180
    }}>
        <h4 style={{
        margin: '0 0 8px'
      }}>Neutral / no change</h4>
        <MetricCard value="99.97%" label="last 30 days" changeType="neutral" />
      </div>
      <div style={{
      width: 180
    }}>
        <h4 style={{
        margin: '0 0 8px'
      }}>Custom value color</h4>
        <MetricCard value="99.97%" label="last 30 days" change="+0.12%" changeType="positive" valueColor="#107C10" />
      </div>
    </div>
}`,...h.parameters?.docs?.source}}},g=[`Default`]}))();export{h as Default,g as __namedExportsOrder,m as default};