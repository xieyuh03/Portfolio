import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./jsx-runtime-cM__dR4X.js";import{g as r,t as i,v as a}from"./card-B2pfoq3A.js";var o,s,c,l;t((()=>{i(),o=e(n(),1),s={title:`Design System MADS/Data Display/ActionCard`,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`**来源:** Simplified 移植 &nbsp;|&nbsp; **实现:** Fluent v8`}}}},c={render:()=>(0,o.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:24,padding:16},children:[(0,o.jsx)(`h3`,{style:{margin:`16px 0 8px`},children:`Default (SecondaryPage mode)`}),(0,o.jsx)(`div`,{style:{maxWidth:400},children:(0,o.jsx)(r,{primaryText:`Manage Connectors`,secondaryText:`Configure and monitor your connectors`,mainIcon:`PlugConnected`})}),(0,o.jsx)(`h3`,{style:{margin:`16px 0 8px`},children:`With Title Text`}),(0,o.jsx)(`div`,{style:{maxWidth:400},children:(0,o.jsx)(r,{titleText:`Section`,primaryText:`User Management`,secondaryText:`Add, remove, and manage users in your organization`,mainIcon:`People`})}),(0,o.jsx)(`h3`,{style:{margin:`16px 0 8px`},children:`Dashboard Mode with Color Bar`}),(0,o.jsx)(`div`,{style:{maxWidth:400},children:(0,o.jsx)(r,{primaryText:`Security Overview`,secondaryText:`3 items need attention`,mainIcon:`Shield`,color:`#d13438`,mode:a.Dashboard})}),(0,o.jsx)(`h3`,{style:{margin:`16px 0 8px`},children:`Dashboard Mode — Blue Color`}),(0,o.jsx)(`div`,{style:{maxWidth:400},children:(0,o.jsx)(r,{primaryText:`Active Users`,secondaryText:`1,204 users signed in this week`,mainIcon:`Contact`,color:`#0078d4`,mode:a.Dashboard})}),(0,o.jsx)(`h3`,{style:{margin:`16px 0 8px`},children:`SecondaryPage Mode — Green Color`}),(0,o.jsx)(`div`,{style:{maxWidth:400},children:(0,o.jsx)(r,{primaryText:`All Systems Operational`,secondaryText:`Last checked: 2 minutes ago`,mainIcon:`StatusCircleCheckmark`,color:`#107c10`,mode:a.SecondaryPage})}),(0,o.jsx)(`h3`,{style:{margin:`16px 0 8px`},children:`With Icon Button (More Options)`}),(0,o.jsx)(`div`,{style:{maxWidth:400},children:(0,o.jsx)(r,{primaryText:`Billing & Subscriptions`,secondaryText:`View your current plan and usage`,mainIcon:`PaymentCard`,mode:a.Dashboard,iconButtonProps:{iconProps:{iconName:`MoreVertical`},ariaLabel:`More options`}})}),(0,o.jsx)(`h3`,{style:{margin:`16px 0 8px`},children:`No Icon`}),(0,o.jsx)(`div`,{style:{maxWidth:400},children:(0,o.jsx)(r,{primaryText:`Settings`,secondaryText:`Configure application preferences`,mode:a.SecondaryPage})})]})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    const iconButtonProps: IButtonProps = {
      iconProps: {
        iconName: 'MoreVertical'
      },
      ariaLabel: 'More options'
    };
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      padding: 16
    }}>
        <h3 style={{
        margin: '16px 0 8px'
      }}>Default (SecondaryPage mode)</h3>
        <div style={{
        maxWidth: 400
      }}>
          <ActionCard primaryText="Manage Connectors" secondaryText="Configure and monitor your connectors" mainIcon="PlugConnected" />
        </div>

        <h3 style={{
        margin: '16px 0 8px'
      }}>With Title Text</h3>
        <div style={{
        maxWidth: 400
      }}>
          <ActionCard titleText="Section" primaryText="User Management" secondaryText="Add, remove, and manage users in your organization" mainIcon="People" />
        </div>

        <h3 style={{
        margin: '16px 0 8px'
      }}>Dashboard Mode with Color Bar</h3>
        <div style={{
        maxWidth: 400
      }}>
          <ActionCard primaryText="Security Overview" secondaryText="3 items need attention" mainIcon="Shield" color="#d13438" mode={ActionCardMode.Dashboard} />
        </div>

        <h3 style={{
        margin: '16px 0 8px'
      }}>Dashboard Mode — Blue Color</h3>
        <div style={{
        maxWidth: 400
      }}>
          <ActionCard primaryText="Active Users" secondaryText="1,204 users signed in this week" mainIcon="Contact" color="#0078d4" mode={ActionCardMode.Dashboard} />
        </div>

        <h3 style={{
        margin: '16px 0 8px'
      }}>SecondaryPage Mode — Green Color</h3>
        <div style={{
        maxWidth: 400
      }}>
          <ActionCard primaryText="All Systems Operational" secondaryText="Last checked: 2 minutes ago" mainIcon="StatusCircleCheckmark" color="#107c10" mode={ActionCardMode.SecondaryPage} />
        </div>

        <h3 style={{
        margin: '16px 0 8px'
      }}>With Icon Button (More Options)</h3>
        <div style={{
        maxWidth: 400
      }}>
          <ActionCard primaryText="Billing & Subscriptions" secondaryText="View your current plan and usage" mainIcon="PaymentCard" mode={ActionCardMode.Dashboard} iconButtonProps={iconButtonProps} />
        </div>

        <h3 style={{
        margin: '16px 0 8px'
      }}>No Icon</h3>
        <div style={{
        maxWidth: 400
      }}>
          <ActionCard primaryText="Settings" secondaryText="Configure application preferences" mode={ActionCardMode.SecondaryPage} />
        </div>
      </div>;
  }
}`,...c.parameters?.docs?.source}}},l=[`Default`]}))();export{c as Default,l as __namedExportsOrder,s as default};