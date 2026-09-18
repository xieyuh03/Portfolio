import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{Et as n,Jt as r,Kt as i,Tn as a,t as o}from"./lib-DC32QjlN.js";import{t as s}from"./jsx-runtime-cM__dR4X.js";import{n as c,r as l,t as u}from"./storyHelpers-Dg2WQpdu.js";var d,f,p,m;t((()=>{o(),l(),d=e(s(),1),f={title:`Design System MADS/Inputs/RadioGroup`,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:"**Fluent UI v9 RadioGroup** — 直接从 `@fluentui/react-components` 导入"}}}},p={render:()=>(0,d.jsxs)(c,{children:[(0,d.jsxs)(u,{label:`Vertical Layout (default)`,children:[(0,d.jsx)(a,{htmlFor:`perm-v`,children:`Permission level`}),(0,d.jsxs)(r,{id:`perm-v`,defaultValue:`write`,children:[(0,d.jsx)(i,{value:`read`,label:`Read only`}),(0,d.jsx)(i,{value:`write`,label:`Read and write`}),(0,d.jsx)(i,{value:`admin`,label:`Admin`})]})]}),(0,d.jsxs)(u,{label:`Horizontal Layout`,children:[(0,d.jsx)(a,{htmlFor:`perm-h`,children:`Permission level`}),(0,d.jsxs)(r,{id:`perm-h`,layout:`horizontal`,defaultValue:`read`,children:[(0,d.jsx)(i,{value:`read`,label:`Read only`}),(0,d.jsx)(i,{value:`write`,label:`Read and write`}),(0,d.jsx)(i,{value:`admin`,label:`Admin`})]})]}),(0,d.jsxs)(u,{label:`With Description`,children:[(0,d.jsx)(a,{htmlFor:`plan`,children:`Select your plan`}),(0,d.jsxs)(r,{id:`plan`,defaultValue:`professional`,children:[(0,d.jsx)(i,{value:`standard`,label:(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n,{weight:`semibold`,children:`Standard`}),(0,d.jsx)(`br`,{}),(0,d.jsx)(n,{size:200,children:`Up to 100 connectors, 5 GB storage`})]})}),(0,d.jsx)(i,{value:`professional`,label:(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n,{weight:`semibold`,children:`Professional`}),(0,d.jsx)(`br`,{}),(0,d.jsx)(n,{size:200,children:`Up to 500 connectors, 50 GB storage`})]})}),(0,d.jsx)(i,{value:`enterprise`,label:(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n,{weight:`semibold`,children:`Enterprise`}),(0,d.jsx)(`br`,{}),(0,d.jsx)(n,{size:200,children:`Unlimited connectors, unlimited storage`})]})})]})]}),(0,d.jsxs)(u,{label:`Disabled`,children:[(0,d.jsx)(a,{htmlFor:`disabled-rg`,children:`Read-only selection`}),(0,d.jsxs)(r,{id:`disabled-rg`,defaultValue:`admin`,disabled:!0,children:[(0,d.jsx)(i,{value:`read`,label:`Read only`}),(0,d.jsx)(i,{value:`write`,label:`Read and write`}),(0,d.jsx)(i,{value:`admin`,label:`Admin`})]})]})]})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <ShowcaseLayout>
      <Section label="Vertical Layout (default)">
        <Label htmlFor="perm-v">Permission level</Label>
        <RadioGroup id="perm-v" defaultValue="write">
          <Radio value="read" label="Read only" />
          <Radio value="write" label="Read and write" />
          <Radio value="admin" label="Admin" />
        </RadioGroup>
      </Section>
      <Section label="Horizontal Layout">
        <Label htmlFor="perm-h">Permission level</Label>
        <RadioGroup id="perm-h" layout="horizontal" defaultValue="read">
          <Radio value="read" label="Read only" />
          <Radio value="write" label="Read and write" />
          <Radio value="admin" label="Admin" />
        </RadioGroup>
      </Section>
      <Section label="With Description">
        <Label htmlFor="plan">Select your plan</Label>
        <RadioGroup id="plan" defaultValue="professional">
          <Radio value="standard" label={<><Text weight="semibold">Standard</Text><br /><Text size={200}>Up to 100 connectors, 5 GB storage</Text></>} />
          <Radio value="professional" label={<><Text weight="semibold">Professional</Text><br /><Text size={200}>Up to 500 connectors, 50 GB storage</Text></>} />
          <Radio value="enterprise" label={<><Text weight="semibold">Enterprise</Text><br /><Text size={200}>Unlimited connectors, unlimited storage</Text></>} />
        </RadioGroup>
      </Section>
      <Section label="Disabled">
        <Label htmlFor="disabled-rg">Read-only selection</Label>
        <RadioGroup id="disabled-rg" defaultValue="admin" disabled>
          <Radio value="read" label="Read only" />
          <Radio value="write" label="Read and write" />
          <Radio value="admin" label="Admin" />
        </RadioGroup>
      </Section>
    </ShowcaseLayout>
}`,...p.parameters?.docs?.source}}},m=[`Default`]}))();export{p as Default,m as __namedExportsOrder,f as default};