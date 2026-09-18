import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{gn as n,t as r}from"./lib-CZaTWtPI.js";import{Cn as i,dn as a,t as o,vt as s}from"./lib-DC32QjlN.js";import{t as c}from"./jsx-runtime-cM__dR4X.js";import{n as l,r as u,t as d}from"./storyHelpers-Dg2WQpdu.js";var f,p,m,h;t((()=>{o(),r(),u(),f=e(c(),1),p={title:`Design System MADS/Inputs/TextField`,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:"**Fluent UI v9 Input / Textarea** — 直接从 `@fluentui/react-components` 导入"}}}},m={render:()=>(0,f.jsxs)(l,{children:[(0,f.jsx)(d,{label:`Default`,children:(0,f.jsx)(`div`,{style:{maxWidth:400},children:(0,f.jsx)(i,{label:`Display name`,children:(0,f.jsx)(a,{defaultValue:`Contoso connector`})})})}),(0,f.jsx)(d,{label:`With Placeholder`,children:(0,f.jsx)(`div`,{style:{maxWidth:400},children:(0,f.jsx)(i,{label:`Description`,children:(0,f.jsx)(a,{placeholder:`Enter a description...`})})})}),(0,f.jsx)(d,{label:`Required`,children:(0,f.jsx)(`div`,{style:{maxWidth:400},children:(0,f.jsx)(i,{label:`API endpoint`,required:!0,children:(0,f.jsx)(a,{placeholder:`https://api.example.com`})})})}),(0,f.jsx)(d,{label:`Textarea (Multiline)`,children:(0,f.jsx)(`div`,{style:{maxWidth:400},children:(0,f.jsx)(i,{label:`Configuration JSON`,children:(0,f.jsx)(s,{rows:4,placeholder:`{ "key": "value" }`})})})}),(0,f.jsx)(d,{label:`Password`,children:(0,f.jsx)(`div`,{style:{maxWidth:400},children:(0,f.jsx)(i,{label:`Client secret`,children:(0,f.jsx)(a,{type:`password`,placeholder:`Enter client secret`,contentAfter:(0,f.jsx)(n,{})})})})}),(0,f.jsx)(d,{label:`Appearances`,children:(0,f.jsxs)(`div`,{style:{maxWidth:400,display:`flex`,flexDirection:`column`,gap:12},children:[(0,f.jsx)(i,{label:`Outline (default)`,children:(0,f.jsx)(a,{appearance:`outline`,placeholder:`Outline`})}),(0,f.jsx)(i,{label:`Underline`,children:(0,f.jsx)(a,{appearance:`underline`,placeholder:`Underline`})}),(0,f.jsx)(i,{label:`Filled darker`,children:(0,f.jsx)(a,{appearance:`filled-darker`,placeholder:`Filled darker`})})]})}),(0,f.jsx)(d,{label:`States`,children:(0,f.jsxs)(`div`,{style:{maxWidth:400,display:`flex`,flexDirection:`column`,gap:12},children:[(0,f.jsx)(i,{label:`Tenant ID`,children:(0,f.jsx)(a,{value:`3e7d4aa3-c2b1-4f8e-9d0a-b1c2f3e4a5b6`,disabled:!0})}),(0,f.jsx)(i,{label:`Email address`,validationMessage:`Please enter a valid email address.`,validationState:`error`,children:(0,f.jsx)(a,{defaultValue:`not-an-email`})})]})})]})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <ShowcaseLayout>
      <Section label="Default">
        <div style={{
        maxWidth: 400
      }}>
          <Field label="Display name">
            <Input defaultValue="Contoso connector" />
          </Field>
        </div>
      </Section>
      <Section label="With Placeholder">
        <div style={{
        maxWidth: 400
      }}>
          <Field label="Description">
            <Input placeholder="Enter a description..." />
          </Field>
        </div>
      </Section>
      <Section label="Required">
        <div style={{
        maxWidth: 400
      }}>
          <Field label="API endpoint" required>
            <Input placeholder="https://api.example.com" />
          </Field>
        </div>
      </Section>
      <Section label="Textarea (Multiline)">
        <div style={{
        maxWidth: 400
      }}>
          <Field label="Configuration JSON">
            <Textarea rows={4} placeholder='{ "key": "value" }' />
          </Field>
        </div>
      </Section>
      <Section label="Password">
        <div style={{
        maxWidth: 400
      }}>
          <Field label="Client secret">
            <Input type="password" placeholder="Enter client secret" contentAfter={<EyeRegular />} />
          </Field>
        </div>
      </Section>
      <Section label="Appearances">
        <div style={{
        maxWidth: 400,
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }}>
          <Field label="Outline (default)"><Input appearance="outline" placeholder="Outline" /></Field>
          <Field label="Underline"><Input appearance="underline" placeholder="Underline" /></Field>
          <Field label="Filled darker"><Input appearance="filled-darker" placeholder="Filled darker" /></Field>
        </div>
      </Section>
      <Section label="States">
        <div style={{
        maxWidth: 400,
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }}>
          <Field label="Tenant ID">
            <Input value="3e7d4aa3-c2b1-4f8e-9d0a-b1c2f3e4a5b6" disabled />
          </Field>
          <Field label="Email address" validationMessage="Please enter a valid email address." validationState="error">
            <Input defaultValue="not-an-email" />
          </Field>
        </div>
      </Section>
    </ShowcaseLayout>
}`,...m.parameters?.docs?.source}}},h=[`Default`]}))();export{m as Default,h as __namedExportsOrder,p as default};