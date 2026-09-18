import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{gr as n}from"./lib-CZaTWtPI.js";import{Sr as r,hr as i,t as a,wr as o}from"./lib-DC32QjlN.js";import{t as s}from"./jsx-runtime-cM__dR4X.js";import{f as c,t as l}from"./copilot-chat-6BrYhyVg.js";var u,d,f,p,m,h,g,_,v;t((()=>{a(),l(),u=e(s(),1),d=n({surface:{backgroundColor:o.colorNeutralBackground1,minHeight:`320px`,padding:`32px 40px`,display:`flex`,flexDirection:`column`,alignItems:`flex-end`}}),f=e=>(0,u.jsx)(i,{theme:r,children:(0,u.jsx)(`div`,{className:d().surface,children:(0,u.jsx)(c,{...e})})}),p={title:`Design System Copilot/Chat/UserMessage`,component:f,parameters:{layout:`fullscreen`}},m={args:{content:`Which FQDNs in *.office.com are missing a service tree assignment this quarter?`}},h={args:{...m.args,timestamp:`11:42 AM`}},g={args:{content:`Cross-check these onboarding records against the OCDI handbook.`,attachments:[{kind:`file`,name:`Q1-onboarding-log.pdf`,fileKind:`pdf`},{kind:`file`,name:`service-tree-mapping.docx`,fileKind:`doc`}],timestamp:`11:43 AM`}},_={args:{content:`Summarise the blockers preventing the *.office.com endpoints from completing OCDI onboarding this quarter.

Group by owning service tree and flag anything still waiting on compliance review.`,timestamp:`11:46 AM`}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'Which FQDNs in *.office.com are missing a service tree assignment this quarter?'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    timestamp: '11:42 AM'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'Cross-check these onboarding records against the OCDI handbook.',
    attachments: [{
      kind: 'file',
      name: 'Q1-onboarding-log.pdf',
      fileKind: 'pdf'
    }, {
      kind: 'file',
      name: 'service-tree-mapping.docx',
      fileKind: 'doc'
    }],
    timestamp: '11:43 AM'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'Summarise the blockers preventing the *.office.com endpoints from completing OCDI onboarding this quarter.\\n\\nGroup by owning service tree and flag anything still waiting on compliance review.',
    timestamp: '11:46 AM'
  }
}`,..._.parameters?.docs?.source}}},v=[`Default`,`WithTimestamp`,`WithFileAttachments`,`MultilineLong`]}))();export{m as Default,_ as MultilineLong,g as WithFileAttachments,h as WithTimestamp,v as __namedExportsOrder,p as default};