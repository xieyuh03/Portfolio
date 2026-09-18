import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{Cn as n,_n as r,t as i,yn as a}from"./lib-DC32QjlN.js";import{t as o}from"./jsx-runtime-cM__dR4X.js";import{n as s,r as c,t as l}from"./storyHelpers-Dg2WQpdu.js";var u,d,f,p;t((()=>{i(),c(),u=e(o(),1),d={title:`Design System MADS/Inputs/ComboBox`,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:"**Fluent UI v9 Combobox** — 直接从 `@fluentui/react-components` 导入"}}}},f={render:()=>(0,u.jsxs)(s,{children:[(0,u.jsx)(l,{label:`Default`,children:(0,u.jsx)(`div`,{style:{maxWidth:400},children:(0,u.jsx)(n,{label:`Select country`,children:(0,u.jsxs)(r,{placeholder:`Choose a country`,defaultValue:`United States`,children:[(0,u.jsx)(a,{value:`us`,children:`United States`}),(0,u.jsx)(a,{value:`ca`,children:`Canada`}),(0,u.jsx)(a,{value:`uk`,children:`United Kingdom`}),(0,u.jsx)(a,{value:`de`,children:`Germany`}),(0,u.jsx)(a,{value:`fr`,children:`France`}),(0,u.jsx)(a,{value:`jp`,children:`Japan`}),(0,u.jsx)(a,{value:`au`,children:`Australia`})]})})})}),(0,u.jsx)(l,{label:`Multi-select`,children:(0,u.jsx)(`div`,{style:{maxWidth:400},children:(0,u.jsx)(n,{label:`Select departments`,children:(0,u.jsxs)(r,{placeholder:`Choose one or more`,multiselect:!0,children:[(0,u.jsx)(a,{value:`finance`,children:`Finance`}),(0,u.jsx)(a,{value:`hr`,children:`Human Resources`}),(0,u.jsx)(a,{value:`it`,children:`IT`}),(0,u.jsx)(a,{value:`ops`,children:`Operations`}),(0,u.jsx)(a,{value:`sales`,children:`Sales`})]})})})}),(0,u.jsx)(l,{label:`Freeform Input`,children:(0,u.jsx)(`div`,{style:{maxWidth:400},children:(0,u.jsx)(n,{label:`Country (type or select)`,children:(0,u.jsxs)(r,{placeholder:`Type or choose...`,freeform:!0,children:[(0,u.jsx)(a,{value:`us`,children:`United States`}),(0,u.jsx)(a,{value:`ca`,children:`Canada`}),(0,u.jsx)(a,{value:`uk`,children:`United Kingdom`}),(0,u.jsx)(a,{value:`de`,children:`Germany`})]})})})}),(0,u.jsx)(l,{label:`Disabled`,children:(0,u.jsx)(`div`,{style:{maxWidth:400},children:(0,u.jsx)(n,{label:`Disabled Combobox`,children:(0,u.jsxs)(r,{defaultValue:`United Kingdom`,disabled:!0,children:[(0,u.jsx)(a,{value:`us`,children:`United States`}),(0,u.jsx)(a,{value:`uk`,children:`United Kingdom`})]})})})})]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <ShowcaseLayout>
      <Section label="Default">
        <div style={{
        maxWidth: 400
      }}>
          <Field label="Select country">
            <Combobox placeholder="Choose a country" defaultValue="United States">
              <Option value="us">United States</Option>
              <Option value="ca">Canada</Option>
              <Option value="uk">United Kingdom</Option>
              <Option value="de">Germany</Option>
              <Option value="fr">France</Option>
              <Option value="jp">Japan</Option>
              <Option value="au">Australia</Option>
            </Combobox>
          </Field>
        </div>
      </Section>

      <Section label="Multi-select">
        <div style={{
        maxWidth: 400
      }}>
          <Field label="Select departments">
            <Combobox placeholder="Choose one or more" multiselect>
              <Option value="finance">Finance</Option>
              <Option value="hr">Human Resources</Option>
              <Option value="it">IT</Option>
              <Option value="ops">Operations</Option>
              <Option value="sales">Sales</Option>
            </Combobox>
          </Field>
        </div>
      </Section>

      <Section label="Freeform Input">
        <div style={{
        maxWidth: 400
      }}>
          <Field label="Country (type or select)">
            <Combobox placeholder="Type or choose..." freeform>
              <Option value="us">United States</Option>
              <Option value="ca">Canada</Option>
              <Option value="uk">United Kingdom</Option>
              <Option value="de">Germany</Option>
            </Combobox>
          </Field>
        </div>
      </Section>

      <Section label="Disabled">
        <div style={{
        maxWidth: 400
      }}>
          <Field label="Disabled Combobox">
            <Combobox defaultValue="United Kingdom" disabled>
              <Option value="us">United States</Option>
              <Option value="uk">United Kingdom</Option>
            </Combobox>
          </Field>
        </div>
      </Section>
    </ShowcaseLayout>
}`,...f.parameters?.docs?.source}}},p=[`Default`]}))();export{f as Default,p as __namedExportsOrder,d as default};