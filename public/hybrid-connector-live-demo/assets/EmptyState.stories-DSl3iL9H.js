import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{gr as n}from"./lib-CZaTWtPI.js";import{Sr as r,hr as i,t as a,wr as o}from"./lib-DC32QjlN.js";import{t as s}from"./jsx-runtime-cM__dR4X.js";import{c,i as l,t as u}from"./copilot-chat-6BrYhyVg.js";var d,f,p,m,h,g,_,v;t((()=>{a(),u(),d=e(s(),1),f=n({surfaceFull:{backgroundColor:o.colorNeutralBackground1,minHeight:`480px`,padding:`48px 40px`,display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`},surfaceCompact:{backgroundColor:o.colorNeutralBackground1,minHeight:`480px`,padding:`32px 24px`,display:`flex`,justifyContent:`center`,alignItems:`center`},panelMock:{width:`440px`,border:`1px solid ${o.colorNeutralStroke2}`,borderRadius:o.borderRadiusLarge,padding:`20px`,backgroundColor:o.colorNeutralBackground1,boxShadow:o.shadow8}}),p=({variant:e=`full`,title:t=`Hi, Sandra.`,subtitle:n=`Ask Domain Lens about OCDI onboarding, FQDN ownership, and customer-facing classification.`,showBadge:a=!0,withSuggestions:o=!0})=>{let s=f(),u=o&&e===`compact`?(0,d.jsx)(l,{items:[{title:`Summarise this quarter’s OCDI status`,description:`Group blockers by workload, surface top 3 to act on.`},{title:`Which workloads have the most blocked FQDNs?`,description:`Rank by impact and number of pending endpoints.`},{title:`Draft compliance handover`,description:`Generate a sendable email to FQDN owners.`}]}):null;return e===`compact`?(0,d.jsx)(i,{theme:r,children:(0,d.jsx)(`div`,{className:s.surfaceCompact,children:(0,d.jsx)(`div`,{className:s.panelMock,children:(0,d.jsx)(c,{title:t,subtitle:n,variant:`compact`,showBadge:a,children:u})})})}):(0,d.jsx)(i,{theme:r,children:(0,d.jsx)(`div`,{className:s.surfaceFull,children:(0,d.jsx)(c,{title:t,subtitle:n,variant:`full`,showBadge:a})})})},m={title:`Design System Copilot/Chat/EmptyState`,component:p,parameters:{layout:`fullscreen`}},h={args:{variant:`full`}},g={args:{variant:`compact`,title:`Hi, I’m your Domain Lens agent.`}},_={args:{variant:`compact`,showBadge:!1,title:`Domain Lens`,subtitle:void 0}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'full'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'compact',
    title: 'Hi, I’m your Domain Lens agent.'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'compact',
    showBadge: false,
    title: 'Domain Lens',
    subtitle: undefined
  }
}`,..._.parameters?.docs?.source}}},v=[`Full`,`Compact`,`CompactNoBadge`]}))();export{g as Compact,_ as CompactNoBadge,h as Full,v as __namedExportsOrder,m as default};