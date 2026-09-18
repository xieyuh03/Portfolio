import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{gr as n}from"./lib-CZaTWtPI.js";import{Sr as r,hr as i,t as a,wr as o}from"./lib-DC32QjlN.js";import{t as s}from"./jsx-runtime-cM__dR4X.js";import{m as c,t as l}from"./copilot-chat-6BrYhyVg.js";var u,d,f,p,m,h,g,_,v,y;t((()=>{a(),l(),u=e(s(),1),d=n({surface:{backgroundColor:o.colorNeutralBackground1,minHeight:`480px`,padding:`32px 40px`}}),f=()=>(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(`p`,{style:{marginTop:0,marginBottom:12},children:`Based on this quarter’s Domain Lens activity, here are the three onboarding issues blocking the most FQDNs:`}),(0,u.jsxs)(`ul`,{style:{marginTop:0,marginBottom:12,paddingLeft:24},children:[(0,u.jsxs)(`li`,{children:[(0,u.jsx)(`strong`,{children:`Missing service tree assignment`}),` — 14 FQDNs in `,(0,u.jsx)(`code`,{children:`*.office.com`}),` `,`have no owner mapped.`]}),(0,u.jsxs)(`li`,{children:[(0,u.jsx)(`strong`,{children:`Stale customer-facing flag`}),` — 6 endpoints still inherit their pre-2024 value.`]}),(0,u.jsxs)(`li`,{children:[(0,u.jsx)(`strong`,{children:`OCDI validation pending`}),` — 9 entries are stuck awaiting compliance review.`]})]})]}),p=({agentName:e,thinkingText:t,isStreaming:n,showSuggestions:a=!0,showCitations:o=!0,showActions:s=!0})=>(0,u.jsx)(i,{theme:r,children:(0,u.jsx)(`div`,{className:d().surface,children:(0,u.jsx)(c,{agentName:e,thinkingText:t,isStreaming:n,citations:o?[`OCDI handbook`,`Domain Lens Q1 report`,`Service tree spec`]:void 0,suggestions:a?[`Draft remediation plan`,`Show pending validations`,`Email owners about flagged FQDNs`]:void 0,showActions:s,sourcesCount:3,children:(0,u.jsx)(f,{})})})}),m={title:`Design System Copilot/Chat/AiMessage`,component:p,parameters:{layout:`fullscreen`}},h={},g={args:{isStreaming:!0,thinkingText:`Searching domain lens reports…`}},_={args:{showSuggestions:!1}},v={args:{showSuggestions:!1,showCitations:!1,showActions:!1}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    isStreaming: true,
    thinkingText: 'Searching domain lens reports…'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    showSuggestions: false
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    showSuggestions: false,
    showCitations: false,
    showActions: false
  }
}`,...v.parameters?.docs?.source}}},y=[`Default`,`Streaming`,`WithoutSuggestions`,`MinimalActions`]}))();export{h as Default,v as MinimalActions,g as Streaming,_ as WithoutSuggestions,y as __namedExportsOrder,m as default};