import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./jsx-runtime-cM__dR4X.js";import{n as r,t as i}from"./iframe-BBRsb2Z3.js";import{n as a,r as o,t as s}from"./storyHelpers-Dg2WQpdu.js";import{n as c,t as l}from"./ThemeToggle-DeXbKHOt.js";var u,d,f,p;t((()=>{c(),r(),o(),u=e(n(),1),d={title:`Design System MADS/Theme & Config/ThemeToggle`,component:l,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`**来源:** DesignAgent 自建 &nbsp;|&nbsp; **实现:** Fluent v9 + Custom tokens`}}},decorators:[e=>(0,u.jsx)(i,{children:(0,u.jsx)(e,{})})],argTypes:{size:{control:`select`,options:[`small`,`medium`,`large`]},appearance:{control:`select`,options:[`subtle`,`outline`,`primary`,`secondary`,`transparent`]},showLabel:{control:`boolean`}}},f={render:()=>(0,u.jsxs)(a,{children:[(0,u.jsx)(s,{label:`Default`,children:(0,u.jsx)(l,{size:`medium`,appearance:`subtle`})}),(0,u.jsx)(s,{label:`With Label`,children:(0,u.jsx)(l,{size:`medium`,appearance:`subtle`,showLabel:!0})}),(0,u.jsx)(s,{label:`Sizes`,children:(0,u.jsxs)(`div`,{style:{display:`flex`,gap:16,alignItems:`center`},children:[(0,u.jsx)(l,{size:`small`,showLabel:!0}),(0,u.jsx)(l,{size:`medium`,showLabel:!0}),(0,u.jsx)(l,{size:`large`,showLabel:!0})]})}),(0,u.jsx)(s,{label:`Appearance`,children:(0,u.jsxs)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`},children:[(0,u.jsx)(l,{appearance:`subtle`,showLabel:!0}),(0,u.jsx)(l,{appearance:`outline`,showLabel:!0}),(0,u.jsx)(l,{appearance:`primary`,showLabel:!0})]})})]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <ShowcaseLayout>
      <Section label="Default">
        <ThemeToggle size="medium" appearance="subtle" />
      </Section>

      <Section label="With Label">
        <ThemeToggle size="medium" appearance="subtle" showLabel />
      </Section>

      <Section label="Sizes">
        <div style={{
        display: 'flex',
        gap: 16,
        alignItems: 'center'
      }}>
          <ThemeToggle size="small" showLabel />
          <ThemeToggle size="medium" showLabel />
          <ThemeToggle size="large" showLabel />
        </div>
      </Section>

      <Section label="Appearance">
        <div style={{
        display: 'flex',
        gap: 8,
        flexWrap: 'wrap'
      }}>
          <ThemeToggle appearance="subtle" showLabel />
          <ThemeToggle appearance="outline" showLabel />
          <ThemeToggle appearance="primary" showLabel />
        </div>
      </Section>
    </ShowcaseLayout>
}`,...f.parameters?.docs?.source}}},p=[`Default`]}))();export{f as Default,p as __namedExportsOrder,d as default};