import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./react-DngYkFIh.js";import{Kn as r,Kt as i,Pn as a,cn as o,gr as s,t as c}from"./lib-CZaTWtPI.js";import{Bt as l,Ht as u,In as d,Sr as f,hr as p,t as m,wr as h}from"./lib-DC32QjlN.js";import{t as g}from"./jsx-runtime-cM__dR4X.js";var _,v,y,b,x,S,C,w,T,E;t((()=>{_=e(n(),1),m(),c(),v=e(g(),1),y=s({surface:{backgroundColor:h.colorNeutralBackground1,minHeight:`520px`,padding:`32px 40px`},card:{backgroundColor:h.colorNeutralBackground2,borderRadius:h.borderRadiusXLarge,padding:`16px`,maxWidth:`720px`,display:`flex`,flexDirection:`column`,gap:h.spacingVerticalM},caption:{color:h.colorNeutralForeground2,fontSize:h.fontSizeBase200,fontStyle:`italic`},grid:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(240px, 1fr))`,gap:h.spacingHorizontalM},cell:{position:`relative`,aspectRatio:`1 / 1`,backgroundColor:h.colorNeutralBackground3,borderRadius:h.borderRadiusMedium,overflow:`hidden`,cursor:`pointer`},imgBtn:{position:`absolute`,inset:0,padding:0,width:`100%`,height:`100%`,borderTopStyle:`none`,borderRightStyle:`none`,borderBottomStyle:`none`,borderLeftStyle:`none`,background:`transparent`,cursor:`pointer`,transition:`opacity 150ms ease`,":hover":{opacity:.92},":focus-visible":{outlineWidth:`2px`,outlineStyle:`solid`,outlineColor:h.colorBrandStroke1,outlineOffset:`2px`}},img:{width:`100%`,height:`100%`,objectFit:`cover`,display:`block`},skeleton:{position:`absolute`,inset:0},actions:{display:`flex`,gap:h.spacingHorizontalS,flexWrap:`wrap`,paddingTop:h.spacingVerticalXS},placeholderA:{background:`linear-gradient(135deg, #FFD3A5 0%, #FD6585 50%, #7B61FF 100%)`},placeholderB:{background:`linear-gradient(135deg, #00B3D7 0%, #5C2D91 100%)`},placeholderC:{background:`linear-gradient(135deg, #107C10 0%, #00B3D7 100%)`},placeholderD:{background:`linear-gradient(135deg, #F2B441 0%, #FD6585 100%)`}}),b=({prompt:e=`A neon-lit teal sparkle floating above a forest of magnifying glasses`,images:t,loading:n=!1})=>{let s=y(),[c,f]=(0,_.useState)(new Set),p=e=>e===`a`?s.placeholderA:e===`b`?s.placeholderB:e===`c`?s.placeholderC:s.placeholderD;return(0,v.jsxs)(`div`,{className:s.card,children:[e&&(0,v.jsxs)(`div`,{className:s.caption,children:[`“`,e,`”`]}),(0,v.jsx)(`div`,{className:s.grid,role:`list`,children:t.map(e=>{let t=c.has(e.id);return(0,v.jsxs)(`div`,{className:s.cell,role:`listitem`,children:[(!t||n)&&(0,v.jsx)(u,{className:s.skeleton,children:(0,v.jsx)(l,{shape:`rectangle`,style:{width:`100%`,height:`100%`}})}),(0,v.jsx)(`button`,{className:`${s.imgBtn} ${p(e.palette)}`,"aria-label":e.alt,onClick:()=>f(t=>{let n=new Set(t);return n.add(e.id),n}),children:(0,v.jsx)(`span`,{className:s.img})})]},e.id)})}),(0,v.jsxs)(`div`,{className:s.actions,children:[(0,v.jsx)(d,{appearance:`subtle`,size:`small`,icon:(0,v.jsx)(i,{}),children:`Download all`}),(0,v.jsx)(d,{appearance:`subtle`,size:`small`,icon:(0,v.jsx)(o,{}),children:`Regenerate`}),(0,v.jsx)(d,{appearance:`subtle`,size:`small`,icon:(0,v.jsx)(a,{}),children:`Copy prompt`}),(0,v.jsx)(d,{appearance:`subtle`,size:`small`,icon:(0,v.jsx)(r,{}),children:`Share`})]})]})},x=e=>(0,v.jsx)(p,{theme:f,children:(0,v.jsx)(`div`,{className:y().surface,children:(0,v.jsx)(b,{...e})})}),S={title:`Design System Copilot/Content/GeneratedImageCard`,component:x,parameters:{layout:`fullscreen`}},C={args:{images:[{id:`1`,alt:`Variation A`,palette:`a`},{id:`2`,alt:`Variation B`,palette:`b`},{id:`3`,alt:`Variation C`,palette:`c`},{id:`4`,alt:`Variation D`,palette:`d`}]}},w={args:{prompt:`A futuristic Microsoft 365 admin dashboard, isometric, soft pastels`,images:[{id:`1`,alt:`Variation A`,palette:`b`},{id:`2`,alt:`Variation B`,palette:`c`}]}},T={args:{images:[{id:`1`,alt:`Loading`,palette:`a`},{id:`2`,alt:`Loading`,palette:`b`},{id:`3`,alt:`Loading`,palette:`c`},{id:`4`,alt:`Loading`,palette:`d`}],loading:!0}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    images: [{
      id: '1',
      alt: 'Variation A',
      palette: 'a'
    }, {
      id: '2',
      alt: 'Variation B',
      palette: 'b'
    }, {
      id: '3',
      alt: 'Variation C',
      palette: 'c'
    }, {
      id: '4',
      alt: 'Variation D',
      palette: 'd'
    }]
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    prompt: 'A futuristic Microsoft 365 admin dashboard, isometric, soft pastels',
    images: [{
      id: '1',
      alt: 'Variation A',
      palette: 'b'
    }, {
      id: '2',
      alt: 'Variation B',
      palette: 'c'
    }]
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    images: [{
      id: '1',
      alt: 'Loading',
      palette: 'a'
    }, {
      id: '2',
      alt: 'Loading',
      palette: 'b'
    }, {
      id: '3',
      alt: 'Loading',
      palette: 'c'
    }, {
      id: '4',
      alt: 'Loading',
      palette: 'd'
    }],
    loading: true
  }
}`,...T.parameters?.docs?.source}}},E=[`FourImages`,`TwoImages`,`Loading`]}))();export{C as FourImages,T as Loading,w as TwoImages,E as __namedExportsOrder,S as default};