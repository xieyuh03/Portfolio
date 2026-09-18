import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{gr as n}from"./lib-CZaTWtPI.js";import{Sr as r,hr as i,t as a,wr as o}from"./lib-DC32QjlN.js";import{t as s}from"./jsx-runtime-cM__dR4X.js";import{i as c,o as l,t as u}from"./copilot-chat-6BrYhyVg.js";var d,f,p,m,h,g,_,v,y;t((()=>{a(),u(),d=e(s(),1),f=n({surface:{backgroundColor:o.colorNeutralBackground1,minHeight:`320px`,padding:`32px 40px`,display:`flex`,flexDirection:`column`,gap:o.spacingVerticalXXL,maxWidth:`560px`,margin:`0 auto`},section:{display:`flex`,flexDirection:`column`,gap:o.spacingVerticalS},caption:{color:o.colorNeutralForeground3,fontSize:o.fontSizeBase200,fontWeight:o.fontWeightSemibold,textTransform:`uppercase`,letterSpacing:`0.04em`}}),p=e=>(0,d.jsx)(i,{theme:r,children:(0,d.jsx)(`div`,{className:f().surface,children:(0,d.jsx)(l,{...e})})}),m=({chips:e,cards:t})=>{let n=f();return(0,d.jsx)(i,{theme:r,children:(0,d.jsxs)(`div`,{className:n.surface,children:[(0,d.jsxs)(`div`,{className:n.section,children:[(0,d.jsx)(`span`,{className:n.caption,children:`SuggestionChips · horizontal pills`}),(0,d.jsx)(l,{suggestions:e})]}),(0,d.jsxs)(`div`,{className:n.section,children:[(0,d.jsx)(`span`,{className:n.caption,children:`SuggestionCardList · vertical action cards`}),(0,d.jsx)(c,{items:t})]})]})})},h={title:`Design System Copilot/Chat/SuggestionChips`,component:p,parameters:{layout:`fullscreen`}},g={args:{suggestions:[{text:`Draft remediation plan`},{text:`Show pending validations`},{text:`Email owners about flagged FQDNs`}]}},_={args:{suggestions:[{text:`Summarise this quarter’s OCDI onboarding status`},{text:`Which workloads have the most blocked FQDNs?`},{text:`Generate a compliance handover doc for *.office.com`},{text:`Find duplicate service tree mappings`}]}},v={render:e=>(0,d.jsx)(m,{...e}),args:{chips:[{text:`Open OCDI handbook`},{text:`Show all 14 blocked FQDNs`},{text:`Notify the listed owners`}],cards:[{title:`Summarise OCDI onboarding status`,description:`Group blockers by workload, surface the top 3 to act on.`},{title:`Which workloads have the most blocked FQDNs?`,description:`Rank by impact and number of pending endpoints.`},{title:`Draft compliance handover for *.office.com`,description:`Generate a sendable email to FQDN owners.`}]}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    suggestions: [{
      text: 'Draft remediation plan'
    }, {
      text: 'Show pending validations'
    }, {
      text: 'Email owners about flagged FQDNs'
    }]
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    suggestions: [{
      text: 'Summarise this quarter’s OCDI onboarding status'
    }, {
      text: 'Which workloads have the most blocked FQDNs?'
    }, {
      text: 'Generate a compliance handover doc for *.office.com'
    }, {
      text: 'Find duplicate service tree mappings'
    }]
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: (args: {
    chips: SuggestionChipsProps['suggestions'];
    cards: SuggestionCardItem[];
  }) => <WrapperBoth {...args} />,
  args: {
    chips: [{
      text: 'Open OCDI handbook'
    }, {
      text: 'Show all 14 blocked FQDNs'
    }, {
      text: 'Notify the listed owners'
    }],
    cards: [{
      title: 'Summarise OCDI onboarding status',
      description: 'Group blockers by workload, surface the top 3 to act on.'
    }, {
      title: 'Which workloads have the most blocked FQDNs?',
      description: 'Rank by impact and number of pending endpoints.'
    }, {
      title: 'Draft compliance handover for *.office.com',
      description: 'Generate a sendable email to FQDN owners.'
    }]
  }
}`,...v.parameters?.docs?.source}}},y=[`FollowUps`,`EmptyStateStarters`,`ChipsVsCards`]}))();export{v as ChipsVsCards,_ as EmptyStateStarters,g as FollowUps,y as __namedExportsOrder,h as default};