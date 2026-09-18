import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./jsx-runtime-cM__dR4X.js";import{n as r,t as i}from"./DashboardCommandBar-BM607__s.js";var a,o,s,c;t((()=>{r(),a=e(n(),1),o={title:`Design System MADS/Actions/DashboardCommandBar`,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`**来源:** DesignAgent 自建 &nbsp;|&nbsp; **实现:** Fluent v9 (makeStyles)`}}}},s={render:()=>(0,a.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:24,padding:16},children:[(0,a.jsx)(`h3`,{style:{margin:`16px 0 8px`},children:`With Organization Name`}),(0,a.jsx)(`div`,{style:{border:`1px solid #edebe9`,borderRadius:4,overflow:`hidden`},children:(0,a.jsx)(i,{organizationName:`Contoso Inc.`,onDashboardClick:()=>alert(`Dashboard`),onAddUserClick:()=>alert(`Add user`),onResetPasswordClick:()=>alert(`Reset password`),onAddTeamClick:()=>alert(`Add team`),onViewBillClick:()=>alert(`View bill`),onRecapClick:()=>alert(`Recap`),onMoreClick:()=>alert(`More`),onOrganizationClick:()=>alert(`Switch org`)})}),(0,a.jsx)(`h3`,{style:{margin:`16px 0 8px`},children:`With Default Organization Name (Alina Lin)`}),(0,a.jsx)(`div`,{style:{border:`1px solid #edebe9`,borderRadius:4,overflow:`hidden`},children:(0,a.jsx)(i,{})}),(0,a.jsx)(`h3`,{style:{margin:`16px 0 8px`},children:`Without Organization Name (empty string fallback)`}),(0,a.jsx)(`div`,{style:{border:`1px solid #edebe9`,borderRadius:4,overflow:`hidden`},children:(0,a.jsx)(i,{organizationName:``})})]})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    padding: 16
  }}>
      <h3 style={{
      margin: '16px 0 8px'
    }}>With Organization Name</h3>
      <div style={{
      border: '1px solid #edebe9',
      borderRadius: 4,
      overflow: 'hidden'
    }}>
        <DashboardCommandBar organizationName="Contoso Inc." onDashboardClick={() => alert('Dashboard')} onAddUserClick={() => alert('Add user')} onResetPasswordClick={() => alert('Reset password')} onAddTeamClick={() => alert('Add team')} onViewBillClick={() => alert('View bill')} onRecapClick={() => alert('Recap')} onMoreClick={() => alert('More')} onOrganizationClick={() => alert('Switch org')} />
      </div>

      <h3 style={{
      margin: '16px 0 8px'
    }}>With Default Organization Name (Alina Lin)</h3>
      <div style={{
      border: '1px solid #edebe9',
      borderRadius: 4,
      overflow: 'hidden'
    }}>
        <DashboardCommandBar />
      </div>

      <h3 style={{
      margin: '16px 0 8px'
    }}>Without Organization Name (empty string fallback)</h3>
      <div style={{
      border: '1px solid #edebe9',
      borderRadius: 4,
      overflow: 'hidden'
    }}>
        <DashboardCommandBar organizationName="" />
      </div>
    </div>
}`,...s.parameters?.docs?.source}}},c=[`Default`]}))();export{s as Default,c as __namedExportsOrder,o as default};