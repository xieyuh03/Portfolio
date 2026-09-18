import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./react-DngYkFIh.js";import{gr as r}from"./lib-CZaTWtPI.js";import{Sr as i,hr as a,t as o,wr as s}from"./lib-DC32QjlN.js";import{t as c}from"./jsx-runtime-cM__dR4X.js";import{t as l,u}from"./copilot-chat-6BrYhyVg.js";var d,f,p,m,h,g,_,v,y;t((()=>{d=e(n(),1),o(),l(),f=e(c(),1),p=r({surface:{backgroundColor:s.colorNeutralBackground2,minHeight:`320px`,padding:`40px`,display:`flex`,justifyContent:`center`,alignItems:`center`},shell:{width:`100%`,maxWidth:`760px`}}),m=e=>{let t=p(),[n,r]=(0,d.useState)(e.defaultValue??``);return(0,f.jsx)(a,{theme:i,children:(0,f.jsx)(`div`,{className:t.surface,children:(0,f.jsx)(`div`,{className:t.shell,children:(0,f.jsx)(u,{...e,value:n,onChange:r,onSubmit:()=>r(``)})})})})},h={title:`Design System Copilot/Chat/ChatInput`,component:m,parameters:{layout:`fullscreen`}},g={args:{placeholder:`Ask Domain Lens Copilot anything…`,hint:`Press Enter to send · Shift+Enter for a new line`}},_={args:{placeholder:`Ask Domain Lens Copilot anything…`,defaultValue:`Summarise this quarter’s OCDI onboarding blockers and rank them by impact.`}},v={args:{placeholder:`Ask Domain Lens Copilot anything…`,isStreaming:!0}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Ask Domain Lens Copilot anything…',
    hint: 'Press Enter to send · Shift+Enter for a new line'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Ask Domain Lens Copilot anything…',
    defaultValue: 'Summarise this quarter’s OCDI onboarding blockers and rank them by impact.'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Ask Domain Lens Copilot anything…',
    isStreaming: true
  }
}`,...v.parameters?.docs?.source}}},y=[`Empty`,`WithDraft`,`Streaming`]}))();export{g as Empty,v as Streaming,_ as WithDraft,y as __namedExportsOrder,h as default};