import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./jsx-runtime-cM__dR4X.js";import{n as r,t as i}from"./iframe-BBRsb2Z3.js";import{n as a,r as o,t as s}from"./ProgressBar-C3inV9lQ.js";import{n as c,r as l,t as u}from"./storyHelpers-Dg2WQpdu.js";var d,f,p,m,h,g,_,v;t((()=>{o(),r(),l(),d=e(n(),1),f={title:`Design System MADS/Feedback/ProgressBar`,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`**MADsProgressBar** — 单色进度条（Fluent v9 封装）<br>**MADsStackedProgressBar** — 多段堆叠进度条（自建）`}}},decorators:[e=>(0,d.jsx)(i,{children:(0,d.jsx)(`div`,{style:{maxWidth:640},children:(0,d.jsx)(e,{})})})]},p={name:`MADsProgressBar`,render:()=>(0,d.jsxs)(c,{children:[(0,d.jsx)(u,{label:`Colors`,children:(0,d.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8},children:[(0,d.jsx)(s,{value:.6,color:`primary`}),(0,d.jsx)(s,{value:.75,color:`success`}),(0,d.jsx)(s,{value:.88,color:`warning`}),(0,d.jsx)(s,{value:.15,color:`error`}),(0,d.jsx)(s,{value:.5,color:`info`})]})}),(0,d.jsx)(u,{label:`Sizes`,children:(0,d.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8},children:[(0,d.jsx)(s,{value:.5,color:`primary`,size:`small`}),(0,d.jsx)(s,{value:.5,color:`primary`,size:`medium`}),(0,d.jsx)(s,{value:.5,color:`primary`,size:`large`})]})}),(0,d.jsx)(u,{label:`With Label & Value`,children:(0,d.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8},children:[(0,d.jsx)(s,{value:.75,color:`primary`,label:`Storage usage`}),(0,d.jsx)(s,{value:.72,color:`primary`,label:`CPU usage`,showValue:!0})]})})]})},m=[{value:42,color:`#107c10`,label:`Healthy`},{value:8,color:`#ff8c00`,label:`Degraded`},{value:5,color:`#d13438`,label:`Failed`}],h=[{value:230,color:`#0078d4`,label:`Used`},{value:40,color:`#c8c6c4`,label:`Reserved`},{value:230,color:`#edebe9`,label:`Free`}],g=[{value:60,color:`#107c10`,label:`Connected`},{value:15,color:`#0078d4`,label:`Syncing`},{value:10,color:`#ff8c00`,label:`Warning`},{value:8,color:`#d13438`,label:`Error`},{value:7,color:`#c8c6c4`,label:`Disabled`}],_={name:`MADsStackedProgressBar`,render:()=>(0,d.jsxs)(c,{children:[(0,d.jsx)(u,{label:`Connector Health (with legend)`,children:(0,d.jsx)(a,{segments:m,total:55,height:`medium`,showLegend:!0})}),(0,d.jsx)(u,{label:`Storage Usage (with legend)`,children:(0,d.jsx)(a,{segments:h,total:500,height:`large`,showLegend:!0})}),(0,d.jsx)(u,{label:`Multi-segment Status (5 categories)`,children:(0,d.jsx)(a,{segments:g,total:100,height:`medium`,showLegend:!0})}),(0,d.jsx)(u,{label:`Heights Comparison`,children:(0,d.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:[`small`,`medium`,`large`].map(e=>(0,d.jsxs)(`div`,{children:[(0,d.jsxs)(`p`,{style:{margin:`0 0 8px`,fontSize:12,color:`#605e5c`,fontFamily:`monospace`},children:[`height="`,e,`"`]}),(0,d.jsx)(a,{segments:m,total:55,height:e,showLegend:!1})]},e))})})]})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'MADsProgressBar',
  render: () => <ShowcaseLayout>
      <Section label="Colors">
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 8
      }}>
          <MADsProgressBar value={0.6} color="primary" />
          <MADsProgressBar value={0.75} color="success" />
          <MADsProgressBar value={0.88} color="warning" />
          <MADsProgressBar value={0.15} color="error" />
          <MADsProgressBar value={0.5} color="info" />
        </div>
      </Section>
      <Section label="Sizes">
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 8
      }}>
          <MADsProgressBar value={0.5} color="primary" size="small" />
          <MADsProgressBar value={0.5} color="primary" size="medium" />
          <MADsProgressBar value={0.5} color="primary" size="large" />
        </div>
      </Section>
      <Section label="With Label & Value">
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 8
      }}>
          <MADsProgressBar value={0.75} color="primary" label="Storage usage" />
          <MADsProgressBar value={0.72} color="primary" label="CPU usage" showValue />
        </div>
      </Section>
    </ShowcaseLayout>
}`,...p.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'MADsStackedProgressBar',
  render: () => <ShowcaseLayout>
      <Section label="Connector Health (with legend)">
        <MADsStackedProgressBar segments={healthSegments} total={55} height="medium" showLegend />
      </Section>

      <Section label="Storage Usage (with legend)">
        <MADsStackedProgressBar segments={storageSegments} total={500} height="large" showLegend />
      </Section>

      <Section label="Multi-segment Status (5 categories)">
        <MADsStackedProgressBar segments={statusSegments} total={100} height="medium" showLegend />
      </Section>

      <Section label="Heights Comparison">
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }}>
          {(['small', 'medium', 'large'] as const).map(h => <div key={h}>
              <p style={{
            margin: '0 0 8px',
            fontSize: 12,
            color: '#605e5c',
            fontFamily: 'monospace'
          }}>
                height="{h}"
              </p>
              <MADsStackedProgressBar segments={healthSegments} total={55} height={h} showLegend={false} />
            </div>)}
        </div>
      </Section>
    </ShowcaseLayout>
}`,..._.parameters?.docs?.source}}},v=[`ProgressBarDemo`,`StackedProgressBarDemo`]}))();export{p as ProgressBarDemo,_ as StackedProgressBarDemo,v as __namedExportsOrder,f as default};