import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./react-DngYkFIh.js";import{Er as r,gr as i}from"./lib-CZaTWtPI.js";import{t as a,wr as o}from"./lib-DC32QjlN.js";import{t as s}from"./jsx-runtime-cM__dR4X.js";var c,l,u,d=t((()=>{n(),a(),c=e(s(),1),l=i({root:{position:`relative`,backgroundColor:o.colorNeutralBackground1,borderTopStyle:`solid`,borderRightStyle:`solid`,borderBottomStyle:`solid`,borderLeftStyle:`solid`,borderTopWidth:o.strokeWidthThin,borderRightWidth:o.strokeWidthThin,borderBottomWidth:o.strokeWidthThin,borderLeftWidth:o.strokeWidthThin,borderTopColor:o.colorNeutralStroke2,borderRightColor:o.colorNeutralStroke2,borderBottomColor:o.colorNeutralStroke2,borderLeftColor:o.colorNeutralStroke2,borderTopLeftRadius:`2px`,borderTopRightRadius:`2px`,borderBottomLeftRadius:`2px`,borderBottomRightRadius:`2px`,boxShadow:o.shadow16,maxWidth:`340px`,boxSizing:`border-box`,marginTop:o.spacingVerticalS},content:{paddingTop:o.spacingVerticalL,paddingBottom:o.spacingVerticalL,paddingLeft:o.spacingHorizontalL,paddingRight:o.spacingHorizontalL,display:`flex`,flexDirection:`column`,gap:o.spacingVerticalS},title:{fontSize:o.fontSizeBase300,fontWeight:o.fontWeightSemibold,lineHeight:o.lineHeightBase300,color:o.colorNeutralForeground1,marginTop:`0`,marginBottom:`0`},message:{fontSize:o.fontSizeBase200,fontWeight:o.fontWeightRegular,lineHeight:o.lineHeightBase200,color:o.colorNeutralForeground2,marginTop:`0`,marginBottom:`0`},link:{fontSize:o.fontSizeBase200,fontWeight:o.fontWeightRegular,lineHeight:o.lineHeightBase200,color:o.colorBrandForeground1,textDecoration:`none`,cursor:`pointer`,width:`fit-content`,":hover":{textDecoration:`underline`},":focus-visible":{outlineStyle:`solid`,outlineWidth:`2px`,outlineColor:o.colorStrokeFocus2,outlineOffset:`2px`,borderTopLeftRadius:`2px`,borderTopRightRadius:`2px`,borderBottomLeftRadius:`2px`,borderBottomRightRadius:`2px`}},actions:{display:`flex`,gap:o.spacingHorizontalS,marginTop:o.spacingVerticalS},buttonBase:{fontSize:o.fontSizeBase300,fontWeight:o.fontWeightSemibold,lineHeight:o.lineHeightBase300,paddingTop:`5px`,paddingBottom:`5px`,paddingLeft:`12px`,paddingRight:`12px`,borderTopLeftRadius:o.borderRadiusSmall,borderTopRightRadius:o.borderRadiusSmall,borderBottomLeftRadius:o.borderRadiusSmall,borderBottomRightRadius:o.borderRadiusSmall,cursor:`pointer`,fontFamily:`inherit`,borderTopStyle:`none`,borderRightStyle:`none`,borderBottomStyle:`none`,borderLeftStyle:`none`,outlineStyle:`none`},primaryButton:{backgroundColor:o.colorBrandBackground,color:o.colorNeutralForegroundOnBrand,":hover":{backgroundColor:o.colorBrandBackgroundHover},":active":{backgroundColor:o.colorBrandBackgroundPressed},":focus-visible":{outlineStyle:`solid`,outlineWidth:`2px`,outlineColor:o.colorStrokeFocus2,outlineOffset:`2px`}},secondaryButton:{backgroundColor:o.colorNeutralBackground1,color:o.colorNeutralForeground1,borderTopStyle:`solid`,borderRightStyle:`solid`,borderBottomStyle:`solid`,borderLeftStyle:`solid`,borderTopWidth:o.strokeWidthThin,borderRightWidth:o.strokeWidthThin,borderBottomWidth:o.strokeWidthThin,borderLeftWidth:o.strokeWidthThin,borderTopColor:o.colorNeutralStroke1,borderRightColor:o.colorNeutralStroke1,borderBottomColor:o.colorNeutralStroke1,borderLeftColor:o.colorNeutralStroke1,":hover":{backgroundColor:o.colorNeutralBackground1Hover},":active":{backgroundColor:o.colorNeutralBackground1Pressed},":focus-visible":{outlineStyle:`solid`,outlineWidth:`2px`,outlineColor:o.colorStrokeFocus2,outlineOffset:`2px`}}}),u=({title:e,message:t,link:n,primaryAction:i,secondaryAction:a,className:o=``,style:s={},visible:u=!0})=>{let d=l(),f=e=>{n?.onClick&&(e.preventDefault(),n.onClick())};if(!u)return null;let p=i||a;return(0,c.jsx)(`div`,{className:r(d.root,o),style:s,role:`dialog`,"aria-modal":`false`,children:(0,c.jsxs)(`div`,{className:d.content,children:[e&&(0,c.jsx)(`h3`,{className:d.title,children:e}),t&&(0,c.jsx)(`p`,{className:d.message,children:t}),n&&!p&&(0,c.jsx)(`a`,{href:n.href||`#`,className:d.link,onClick:f,children:n.text}),p&&(0,c.jsxs)(`div`,{className:d.actions,children:[i&&(0,c.jsx)(`button`,{className:r(d.buttonBase,d.primaryButton),onClick:i.onClick,type:`button`,children:i.text}),a&&(0,c.jsx)(`button`,{className:r(d.buttonBase,d.secondaryButton),onClick:a.onClick,type:`button`,children:a.text})]})]})})}})),f,p,m,h,g,_;t((()=>{f=e(n(),1),d(),p=e(s(),1),m={title:`Design System MADS/Overlays/MADsCallout`,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`**来源:** DesignAgent 自建 &nbsp;|&nbsp; **实现:** Fluent v9 (makeStyles)`}}}},h=({label:e,title:t,message:n})=>{let[r,i]=(0,f.useState)(!1);return(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`button`,{onClick:()=>i(!0),style:{padding:`8px 16px`,background:`#0078d4`,color:`#fff`,border:`none`,borderRadius:4,cursor:`pointer`,fontSize:14,marginBottom:12},children:e}),(0,p.jsx)(u,{title:t,message:n,visible:r,onDismiss:()=>i(!1),primaryAction:{text:`Confirm`,onClick:()=>i(!1)},secondaryAction:{text:`Cancel`,onClick:()=>i(!1)}})]})},g={render:()=>(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:24,padding:16},children:[(0,p.jsx)(`h3`,{style:{margin:`16px 0 8px`},children:`Always Visible — Title, Message, Primary + Secondary Actions`}),(0,p.jsx)(u,{title:`Update Available`,message:`A new version of this connector is available. Update now to get the latest features and security improvements.`,visible:!0,primaryAction:{text:`Update Now`,onClick:()=>alert(`Update clicked`)},secondaryAction:{text:`Remind Me Later`,onClick:()=>alert(`Remind later`)}}),(0,p.jsx)(`h3`,{style:{margin:`16px 0 8px`},children:`Always Visible — Title Only`}),(0,p.jsx)(u,{title:`Session Expiring Soon`,message:`Your session will expire in 5 minutes. Save your work to avoid losing changes.`,visible:!0,primaryAction:{text:`Extend Session`,onClick:()=>alert(`Extended`)}}),(0,p.jsx)(`h3`,{style:{margin:`16px 0 8px`},children:`Always Visible — Message with Link`}),(0,p.jsx)(u,{title:`Learn More`,message:`Connectors enable seamless data flow between your services. Configure them from the Connectors page.`,link:{text:`Go to Connectors`,href:`#`},visible:!0}),(0,p.jsx)(`h3`,{style:{margin:`16px 0 8px`},children:`Toggle Visibility`}),(0,p.jsx)(h,{label:`Show Callout`,title:`Confirm Action`,message:`Are you sure you want to delete this connector? This action cannot be undone.`}),(0,p.jsx)(`h3`,{style:{margin:`16px 0 8px`},children:`Not Visible (renders nothing)`}),(0,p.jsxs)(`div`,{style:{padding:12,background:`#faf9f8`,border:`1px solid #edebe9`,borderRadius:4},children:[(0,p.jsx)(`p`,{style:{margin:0,fontSize:13,color:`#605e5c`},children:`The callout below has visible=false, so nothing renders:`}),(0,p.jsx)(u,{title:`Hidden Callout`,message:`This should not be visible.`,visible:!1}),(0,p.jsx)(`p`,{style:{margin:`8px 0 0`,fontSize:13,color:`#107c10`},children:`(Empty space above is expected)`})]})]})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    padding: 16
  }}>
      <h3 style={{
      margin: '16px 0 8px'
    }}>Always Visible — Title, Message, Primary + Secondary Actions</h3>
      <MADsCallout title="Update Available" message="A new version of this connector is available. Update now to get the latest features and security improvements." visible primaryAction={{
      text: 'Update Now',
      onClick: () => alert('Update clicked')
    }} secondaryAction={{
      text: 'Remind Me Later',
      onClick: () => alert('Remind later')
    }} />

      <h3 style={{
      margin: '16px 0 8px'
    }}>Always Visible — Title Only</h3>
      <MADsCallout title="Session Expiring Soon" message="Your session will expire in 5 minutes. Save your work to avoid losing changes." visible primaryAction={{
      text: 'Extend Session',
      onClick: () => alert('Extended')
    }} />

      <h3 style={{
      margin: '16px 0 8px'
    }}>Always Visible — Message with Link</h3>
      <MADsCallout title="Learn More" message="Connectors enable seamless data flow between your services. Configure them from the Connectors page." link={{
      text: 'Go to Connectors',
      href: '#'
    }} visible />

      <h3 style={{
      margin: '16px 0 8px'
    }}>Toggle Visibility</h3>
      <DismissableCallout label="Show Callout" title="Confirm Action" message="Are you sure you want to delete this connector? This action cannot be undone." />

      <h3 style={{
      margin: '16px 0 8px'
    }}>Not Visible (renders nothing)</h3>
      <div style={{
      padding: 12,
      background: '#faf9f8',
      border: '1px solid #edebe9',
      borderRadius: 4
    }}>
        <p style={{
        margin: 0,
        fontSize: 13,
        color: '#605e5c'
      }}>
          The callout below has visible=false, so nothing renders:
        </p>
        <MADsCallout title="Hidden Callout" message="This should not be visible." visible={false} />
        <p style={{
        margin: '8px 0 0',
        fontSize: 13,
        color: '#107c10'
      }}>(Empty space above is expected)</p>
      </div>
    </div>
}`,...g.parameters?.docs?.source}}},_=[`Default`]}))();export{g as Default,_ as __namedExportsOrder,m as default};