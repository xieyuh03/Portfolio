import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./react-DngYkFIh.js";import{i as r}from"./Icon-sSlGJTJZ.js";import{t as i}from"./lib-BIv0kCW3.js";import{t as a}from"./jsx-runtime-cM__dR4X.js";var o,s,c,l,u,d,f;t((()=>{n(),i(),o=e(a(),1),s={title:`Design System MADS/Icon & Logo/Fluent UI Icons`,parameters:{layout:`padded`,docs:{description:{component:`**来源:** Simplified 移植 &nbsp;|&nbsp; **实现:** Fluent v8`}}}},c=[{name:`Add`,label:`Add`},{name:`Edit`,label:`Edit`},{name:`Delete`,label:`Delete`},{name:`Search`,label:`Search`},{name:`Settings`,label:`Settings`},{name:`Filter`,label:`Filter`},{name:`Download`,label:`Download`},{name:`Upload`,label:`Upload`},{name:`Refresh`,label:`Refresh`},{name:`ChevronRight`,label:`ChevronRight`},{name:`ChevronDown`,label:`ChevronDown`},{name:`Info`,label:`Info`},{name:`Warning`,label:`Warning`},{name:`CheckMark`,label:`CheckMark`},{name:`Cancel`,label:`Cancel`},{name:`Home`,label:`Home`},{name:`Mail`,label:`Mail`},{name:`Contact`,label:`Person`},{name:`Group`,label:`Group`},{name:`Calendar`,label:`Calendar`}],l=[{name:`More`,label:`More`},{name:`Copy`,label:`Copy`},{name:`Save`,label:`Save`},{name:`Share`,label:`Share`},{name:`Lock`,label:`Lock`},{name:`Unlock`,label:`Unlock`},{name:`View`,label:`View`},{name:`Hide`,label:`Hide`},{name:`Sort`,label:`Sort`},{name:`BulletedList`,label:`BulletedList`},{name:`Table`,label:`Table`},{name:`BarChart4`,label:`BarChart`},{name:`LineChart`,label:`LineChart`},{name:`Permissions`,label:`Permissions`},{name:`StatusCircleCheckmark`,label:`StatusCheckmark`},{name:`StatusCircleErrorX`,label:`StatusError`},{name:`PlugConnected`,label:`PlugConnected`},{name:`PlugDisconnected`,label:`PlugDisconnected`},{name:`CloudUpload`,label:`CloudUpload`},{name:`CloudDownload`,label:`CloudDownload`}],u=({iconName:e,label:t,size:n=24})=>(0,o.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:6,padding:`12px 8px`,border:`1px solid #edebe9`,borderRadius:4,minWidth:80,backgroundColor:`#faf9f8`},children:[(0,o.jsx)(r,{iconName:e,style:{fontSize:n,color:`#323130`}}),(0,o.jsx)(`span`,{style:{fontSize:10,color:`#605e5c`,textAlign:`center`,wordBreak:`break-word`},children:t})]}),d={render:()=>(0,o.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:24},children:[(0,o.jsx)(`h3`,{children:`Common Icons`}),(0,o.jsx)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`},children:c.map(({name:e,label:t})=>(0,o.jsx)(u,{iconName:e,label:t},e))}),(0,o.jsx)(`h3`,{children:`Extended Set`}),(0,o.jsx)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`},children:l.map(({name:e,label:t})=>(0,o.jsx)(u,{iconName:e,label:t},e))}),(0,o.jsx)(`h3`,{children:`Size Variants (using "Settings" icon)`}),(0,o.jsx)(`div`,{style:{display:`flex`,gap:16,flexWrap:`wrap`,alignItems:`flex-end`},children:[12,16,20,24,32,48,64].map(e=>(0,o.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:4},children:[(0,o.jsx)(r,{iconName:`Settings`,style:{fontSize:e,color:`#0078d4`}}),(0,o.jsxs)(`span`,{style:{fontSize:11,color:`#605e5c`},children:[e,`px`]})]},e))}),(0,o.jsx)(`h3`,{children:`Color Variants`}),(0,o.jsx)(`div`,{style:{display:`flex`,gap:16,flexWrap:`wrap`,alignItems:`center`},children:[{color:`#323130`,label:`Default`},{color:`#0078d4`,label:`Brand`},{color:`#107c10`,label:`Success`},{color:`#ff8c00`,label:`Warning`},{color:`#d13438`,label:`Error`},{color:`#605e5c`,label:`Muted`},{color:`#c8c6c4`,label:`Disabled`}].map(({color:e,label:t})=>(0,o.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:4},children:[(0,o.jsx)(r,{iconName:`Info`,style:{fontSize:24,color:e}}),(0,o.jsx)(`span`,{style:{fontSize:11,color:`#605e5c`},children:t})]},e))})]})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  }}>
      <h3>Common Icons</h3>
      <div style={{
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }}>
        {commonIcons.map(({
        name,
        label
      }) => <IconCard key={name} iconName={name} label={label} />)}
      </div>

      <h3>Extended Set</h3>
      <div style={{
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }}>
        {extendedIcons.map(({
        name,
        label
      }) => <IconCard key={name} iconName={name} label={label} />)}
      </div>

      <h3>Size Variants (using "Settings" icon)</h3>
      <div style={{
      display: 'flex',
      gap: 16,
      flexWrap: 'wrap',
      alignItems: 'flex-end'
    }}>
        {[12, 16, 20, 24, 32, 48, 64].map(size => <div key={size} style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 4
      }}>
            <Icon iconName="Settings" style={{
          fontSize: size,
          color: '#0078d4'
        }} />
            <span style={{
          fontSize: 11,
          color: '#605e5c'
        }}>{size}px</span>
          </div>)}
      </div>

      <h3>Color Variants</h3>
      <div style={{
      display: 'flex',
      gap: 16,
      flexWrap: 'wrap',
      alignItems: 'center'
    }}>
        {[{
        color: '#323130',
        label: 'Default'
      }, {
        color: '#0078d4',
        label: 'Brand'
      }, {
        color: '#107c10',
        label: 'Success'
      }, {
        color: '#ff8c00',
        label: 'Warning'
      }, {
        color: '#d13438',
        label: 'Error'
      }, {
        color: '#605e5c',
        label: 'Muted'
      }, {
        color: '#c8c6c4',
        label: 'Disabled'
      }].map(({
        color,
        label
      }) => <div key={color} style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 4
      }}>
            <Icon iconName="Info" style={{
          fontSize: 24,
          color
        }} />
            <span style={{
          fontSize: 11,
          color: '#605e5c'
        }}>{label}</span>
          </div>)}
      </div>
    </div>
}`,...d.parameters?.docs?.source}}},f=[`Showcase`]}))();export{d as Showcase,f as __namedExportsOrder,s as default};