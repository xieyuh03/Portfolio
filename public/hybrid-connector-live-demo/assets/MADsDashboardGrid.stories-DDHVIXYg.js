import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./jsx-runtime-cM__dR4X.js";import{n as r,t as i}from"./MADsDashboardCard-w3cQsSSz.js";import{n as a,t as o}from"./MADsDashboardGrid-PLI1611P.js";var s,c,l,u,d;t((()=>{a(),r(),s=e(n(),1),c={title:`Design System MADS/Layout/MADsDashboardGrid`,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`**来源:** DesignAgent 自建 &nbsp;|&nbsp; **实现:** Fluent v9 (makeStyles)`}}}},l=[{title:`Active Users`,value:`12,450`,color:`#0078d4`,subtitle:`+4.2% from last month`},{title:`Licenses Used`,value:`8,930`,color:`#107c10`,subtitle:`71.7% utilization`},{title:`Connectors`,value:`100`,color:`#c19c00`,subtitle:`94 healthy, 6 attention`},{title:`Security Score`,value:`87`,color:`#8764b8`,subtitle:`Good — improve to 95+`}],u={render:()=>(0,s.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:32,padding:16},children:[(0,s.jsx)(`h3`,{style:{margin:`16px 0 8px`},children:`4-Column Grid`}),(0,s.jsx)(o,{columns:4,gap:16,children:l.map(e=>(0,s.jsxs)(i,{title:e.title,size:`small`,children:[(0,s.jsx)(`p`,{style:{margin:0,fontSize:28,fontWeight:700,color:e.color},children:e.value}),(0,s.jsx)(`p`,{style:{margin:`4px 0 0`,fontSize:12,color:`#605e5c`},children:e.subtitle})]},e.title))}),(0,s.jsx)(`h3`,{style:{margin:`16px 0 8px`},children:`2-Column Grid`}),(0,s.jsx)(o,{columns:2,gap:24,children:l.map(e=>(0,s.jsxs)(i,{title:e.title,size:`medium`,primaryAction:{label:`View Details`,onClick:()=>alert(`${e.title} details`)},children:[(0,s.jsx)(`p`,{style:{margin:0,fontSize:36,fontWeight:700,color:e.color},children:e.value}),(0,s.jsx)(`p`,{style:{margin:`4px 0 0`,fontSize:13,color:`#605e5c`},children:e.subtitle})]},e.title))}),(0,s.jsx)(`h3`,{style:{margin:`16px 0 8px`},children:`3-Column Grid (Default)`}),(0,s.jsx)(o,{columns:3,gap:20,children:l.map(e=>(0,s.jsxs)(i,{title:e.title,size:`auto`,children:[(0,s.jsx)(`p`,{style:{margin:0,fontSize:32,fontWeight:700,color:e.color},children:e.value}),(0,s.jsx)(`p`,{style:{margin:`4px 0 0`,fontSize:12,color:`#605e5c`},children:e.subtitle})]},e.title))}),(0,s.jsx)(`h3`,{style:{margin:`16px 0 8px`},children:`1-Column Grid (Full Width)`}),(0,s.jsx)(o,{columns:1,gap:16,children:l.slice(0,2).map(e=>(0,s.jsxs)(i,{title:e.title,size:`large`,primaryAction:{label:`View Details`,onClick:()=>{}},children:[(0,s.jsx)(`p`,{style:{margin:0,fontSize:40,fontWeight:700,color:e.color},children:e.value}),(0,s.jsx)(`p`,{style:{margin:`4px 0 0`,fontSize:14,color:`#605e5c`},children:e.subtitle})]},e.title))})]})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 32,
    padding: 16
  }}>
      <h3 style={{
      margin: '16px 0 8px'
    }}>4-Column Grid</h3>
      <MADsDashboardGrid columns={4} gap={16}>
        {sampleCards.map(card => <MADsDashboardCard key={card.title} title={card.title} size="small">
            <p style={{
          margin: 0,
          fontSize: 28,
          fontWeight: 700,
          color: card.color
        }}>{card.value}</p>
            <p style={{
          margin: '4px 0 0',
          fontSize: 12,
          color: '#605e5c'
        }}>{card.subtitle}</p>
          </MADsDashboardCard>)}
      </MADsDashboardGrid>

      <h3 style={{
      margin: '16px 0 8px'
    }}>2-Column Grid</h3>
      <MADsDashboardGrid columns={2} gap={24}>
        {sampleCards.map(card => <MADsDashboardCard key={card.title} title={card.title} size="medium" primaryAction={{
        label: 'View Details',
        onClick: () => alert(\`\${card.title} details\`)
      }}>
            <p style={{
          margin: 0,
          fontSize: 36,
          fontWeight: 700,
          color: card.color
        }}>{card.value}</p>
            <p style={{
          margin: '4px 0 0',
          fontSize: 13,
          color: '#605e5c'
        }}>{card.subtitle}</p>
          </MADsDashboardCard>)}
      </MADsDashboardGrid>

      <h3 style={{
      margin: '16px 0 8px'
    }}>3-Column Grid (Default)</h3>
      <MADsDashboardGrid columns={3} gap={20}>
        {sampleCards.map(card => <MADsDashboardCard key={card.title} title={card.title} size="auto">
            <p style={{
          margin: 0,
          fontSize: 32,
          fontWeight: 700,
          color: card.color
        }}>{card.value}</p>
            <p style={{
          margin: '4px 0 0',
          fontSize: 12,
          color: '#605e5c'
        }}>{card.subtitle}</p>
          </MADsDashboardCard>)}
      </MADsDashboardGrid>

      <h3 style={{
      margin: '16px 0 8px'
    }}>1-Column Grid (Full Width)</h3>
      <MADsDashboardGrid columns={1} gap={16}>
        {sampleCards.slice(0, 2).map(card => <MADsDashboardCard key={card.title} title={card.title} size="large" primaryAction={{
        label: 'View Details',
        onClick: () => {}
      }}>
            <p style={{
          margin: 0,
          fontSize: 40,
          fontWeight: 700,
          color: card.color
        }}>{card.value}</p>
            <p style={{
          margin: '4px 0 0',
          fontSize: 14,
          color: '#605e5c'
        }}>{card.subtitle}</p>
          </MADsDashboardCard>)}
      </MADsDashboardGrid>
    </div>
}`,...u.parameters?.docs?.source}}},d=[`Default`]}))();export{u as Default,d as __namedExportsOrder,c as default};