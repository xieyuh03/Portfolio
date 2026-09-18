import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./react-DngYkFIh.js";import{Er as r,gr as i}from"./lib-CZaTWtPI.js";import{t as a,wr as o}from"./lib-DC32QjlN.js";import{t as s}from"./jsx-runtime-cM__dR4X.js";import{n as c,t as l}from"./assetPath-GDH6Nbcb.js";var u,d,f,p,m,h,g=t((()=>{u=e(n(),1),a(),d=e(s(),1),f=i({table:{width:`100%`,borderCollapse:`separate`,borderSpacing:`0`,fontFamily:o.fontFamilyBase,backgroundColor:o.colorNeutralBackground1},listHeader:{backgroundColor:o.colorNeutralBackground1,position:`sticky`,top:`0`,zIndex:10},headerCell:{paddingTop:`13px`,paddingBottom:`14px`,paddingLeft:`12px`,paddingRight:`12px`,textAlign:`left`,fontFamily:o.fontFamilyBase,fontSize:o.fontSizeBase200,fontWeight:o.fontWeightSemibold,lineHeight:o.lineHeightBase200,color:o.colorNeutralForeground1,borderBottomStyle:`solid`,borderBottomWidth:o.strokeWidthThin,borderBottomColor:o.colorNeutralStroke2,whiteSpace:`nowrap`},headerCellPrimary:{minWidth:`300px`},headerCellChooseColumns:{display:`flex`,alignItems:`center`,gap:`8px`,cursor:`pointer`,userSelect:`none`,":hover":{backgroundColor:o.colorSubtleBackgroundHover}},listRow:{backgroundColor:o.colorNeutralBackground1,borderBottomStyle:`solid`,borderBottomWidth:o.strokeWidthThin,borderBottomColor:o.colorNeutralStroke2,cursor:`pointer`,":hover":{backgroundColor:o.colorSubtleBackgroundHover}},listRowSelected:{backgroundColor:o.colorSubtleBackgroundSelected},listCell:{paddingTop:`10px`,paddingBottom:`13px`,paddingLeft:`12px`,paddingRight:`12px`,verticalAlign:`middle`,fontFamily:o.fontFamilyBase,fontSize:o.fontSizeBase200,lineHeight:o.lineHeightBase200,color:o.colorNeutralForeground2},primaryCell:{display:`flex`,alignItems:`center`,gap:`12px`,minWidth:`300px`},itemIcon:{width:`36px`,height:`36px`,flexShrink:0,borderTopLeftRadius:`3.2px`,borderTopRightRadius:`3.2px`,borderBottomLeftRadius:`3.2px`,borderBottomRightRadius:`3.2px`,overflowX:`hidden`,overflowY:`hidden`,display:`flex`,alignItems:`center`,justifyContent:`center`},itemAvatar:{backgroundColor:`#a8f0cd`,color:`#00723b`,fontSize:o.fontSizeBase300,fontWeight:o.fontWeightSemibold,lineHeight:o.lineHeightBase300,textAlign:`center`},itemDetails:{display:`flex`,flexDirection:`column`,gap:`2px`,position:`relative`,flex:1,minWidth:`0`},itemName:{fontSize:o.fontSizeBase300,fontWeight:o.fontWeightSemibold,lineHeight:o.lineHeightBase300,color:o.colorNeutralForeground1,whiteSpace:`nowrap`,overflowX:`hidden`,overflowY:`hidden`,textOverflow:`ellipsis`},itemDescription:{fontSize:o.fontSizeBase200,lineHeight:o.lineHeightBase200,color:o.colorNeutralForeground2,whiteSpace:`nowrap`,overflowX:`hidden`,overflowY:`hidden`,textOverflow:`ellipsis`},itemDescriptionLink:{color:o.colorBrandForegroundLink,cursor:`pointer`,":hover":{textDecoration:`underline`}},badgeNew:{position:`absolute`,left:`133px`,top:`0`,backgroundColor:`#d0e7f8`,borderTopStyle:`solid`,borderRightStyle:`solid`,borderBottomStyle:`solid`,borderLeftStyle:`solid`,borderTopWidth:o.strokeWidthThin,borderRightWidth:o.strokeWidthThin,borderBottomWidth:o.strokeWidthThin,borderLeftWidth:o.strokeWidthThin,borderTopColor:o.colorNeutralBackground1,borderRightColor:o.colorNeutralBackground1,borderBottomColor:o.colorNeutralBackground1,borderLeftColor:o.colorNeutralBackground1,borderTopLeftRadius:`2px`,borderTopRightRadius:`2px`,borderBottomLeftRadius:`2px`,borderBottomRightRadius:`2px`,paddingTop:`4px`,paddingBottom:`4px`,paddingLeft:`8px`,paddingRight:`8px`,fontSize:`9px`,fontWeight:o.fontWeightSemibold,color:`#005ba1`,lineHeight:`normal`,whiteSpace:`nowrap`},statusCell:{display:`flex`,alignItems:`center`,gap:`6px`},statusIcon:{width:`14px`,height:`14px`,flexShrink:0},rolloutLink:{color:o.colorBrandForegroundLink,cursor:`pointer`,textDecoration:`none`,":hover":{textDecoration:`underline`}}}),p={syncing:`var(--colorNeutralForeground2)`,active:`var(--colorPaletteGreenForeground1)`,failed:`var(--colorPaletteDarkRedForeground2)`,custom:`var(--colorNeutralForeground3)`},m={syncing:`Syncing`,active:`Active`,failed:`Failed`,custom:`Custom`},h=({items:e=[],onItemClicked:t,onItemSelected:n,onAddDescriptionClicked:i,onRolloutClicked:a})=>{let s=f(),[c,l]=(0,u.useState)(new Set),[,h]=(0,u.useState)(null),g=(e,t)=>{t.preventDefault();let r=new Set(c);r.has(e.id)?r.delete(e.id):r.add(e.id),l(r),n&&n(e,r.has(e.id))},_=(e,n)=>{n.stopPropagation(),t&&t(e)},v=(e,t)=>{t.stopPropagation(),i&&i(e)},y=(e,t,n)=>{n.stopPropagation(),a&&a(e,t)},b=e=>e.iconType===`avatar`?(0,d.jsx)(`div`,{className:r(s.itemIcon,s.itemAvatar),children:e.icon}):e.icon?(0,d.jsx)(`div`,{className:s.itemIcon,children:(0,d.jsx)(`img`,{src:e.icon,alt:e.displayName,style:{width:`100%`,height:`100%`,objectFit:`cover`}})}):(0,d.jsx)(`div`,{className:s.itemIcon,style:{backgroundColor:`#f3f2f1`},children:(0,d.jsx)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 20 20`,fill:`currentColor`,children:(0,d.jsx)(`path`,{d:`M3 5.5A2.5 2.5 0 0 1 5.5 3h5.086a2 2 0 0 1 1.414.586l4.414 4.414A2 2 0 0 1 17 9.414V14.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9Z`})})}),x=e=>{let t=p[e];return t?e===`active`?(0,d.jsxs)(`svg`,{className:s.statusIcon,width:`14`,height:`14`,viewBox:`0 0 14 14`,fill:`none`,children:[(0,d.jsx)(`circle`,{cx:`7`,cy:`7`,r:`5`,fill:t}),(0,d.jsx)(`path`,{d:`M5 7L6.5 8.5L9 6`,stroke:`white`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})]}):e===`failed`?(0,d.jsxs)(`svg`,{className:s.statusIcon,width:`14`,height:`14`,viewBox:`0 0 14 14`,fill:`none`,children:[(0,d.jsx)(`circle`,{cx:`7`,cy:`7`,r:`5`,fill:t}),(0,d.jsx)(`path`,{d:`M5 5L9 9M9 5L5 9`,stroke:`white`,strokeWidth:`1.5`,strokeLinecap:`round`})]}):e===`syncing`?(0,d.jsx)(`svg`,{className:s.statusIcon,width:`14`,height:`14`,viewBox:`0 0 14 14`,fill:`none`,children:(0,d.jsx)(`circle`,{cx:`7`,cy:`7`,r:`5`,stroke:t,strokeWidth:`2`,fill:`none`,strokeDasharray:`4 4`,children:(0,d.jsx)(`animateTransform`,{attributeName:`transform`,type:`rotate`,from:`0 7 7`,to:`360 7 7`,dur:`1s`,repeatCount:`indefinite`})})}):(0,d.jsx)(`svg`,{className:s.statusIcon,width:`14`,height:`14`,viewBox:`0 0 14 14`,fill:`none`,children:(0,d.jsx)(`circle`,{cx:`7`,cy:`7`,r:`5`,fill:t})}):null};return(0,d.jsxs)(`table`,{className:s.table,role:`grid`,children:[(0,d.jsx)(`thead`,{className:s.listHeader,children:(0,d.jsxs)(`tr`,{role:`row`,children:[(0,d.jsx)(`th`,{className:r(s.headerCell,s.headerCellPrimary),role:`columnheader`,children:`Display Name`}),(0,d.jsx)(`th`,{className:s.headerCell,role:`columnheader`,children:`Connection Name`}),(0,d.jsx)(`th`,{className:s.headerCell,role:`columnheader`,children:`Staged Rollout`}),(0,d.jsx)(`th`,{className:s.headerCell,role:`columnheader`,children:`Connection State`}),(0,d.jsx)(`th`,{className:s.headerCell,role:`columnheader`,children:`Last sync`}),(0,d.jsxs)(`th`,{className:r(s.headerCell,s.headerCellChooseColumns),role:`columnheader`,children:[(0,d.jsx)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 14 14`,fill:`currentColor`,children:(0,d.jsx)(`path`,{d:`M7 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2z`})}),(0,d.jsx)(`span`,{children:`Choose columns`})]})]})}),(0,d.jsx)(`tbody`,{children:e.map(e=>(0,d.jsxs)(`tr`,{className:r(s.listRow,c.has(e.id)?s.listRowSelected:void 0),role:`row`,onClick:t=>g(e,t),onMouseEnter:()=>h(e.id),onMouseLeave:()=>h(null),children:[(0,d.jsx)(`td`,{className:s.listCell,role:`gridcell`,children:(0,d.jsxs)(`div`,{className:s.primaryCell,onClick:t=>_(e,t),children:[b(e),(0,d.jsxs)(`div`,{className:s.itemDetails,children:[(0,d.jsx)(`div`,{className:s.itemName,children:e.displayName}),e.description===`Add Description`?(0,d.jsx)(`div`,{className:r(s.itemDescription,s.itemDescriptionLink),onClick:t=>v(e,t),children:`Add Description`}):(0,d.jsx)(`div`,{className:s.itemDescription,children:e.description}),e.badge===`new`&&(0,d.jsx)(`span`,{className:s.badgeNew,children:`New`})]})]})}),(0,d.jsx)(`td`,{className:s.listCell,role:`gridcell`,children:e.connectionName}),(0,d.jsxs)(`td`,{className:s.listCell,role:`gridcell`,children:[(0,d.jsx)(`span`,{style:{color:o.colorNeutralForeground2},children:e.stagedRollout===`all`?`All users | `:`Staged | `}),(0,d.jsx)(`a`,{className:s.rolloutLink,href:`#`,onClick:t=>y(e,e.stagedRollout===`all`?`add`:`edit`,t),children:e.stagedRollout===`all`?`Add Staging`:`Edit`})]}),(0,d.jsx)(`td`,{className:s.listCell,role:`gridcell`,children:(0,d.jsxs)(`div`,{className:s.statusCell,children:[x(e.connectionState),(0,d.jsx)(`span`,{children:m[e.connectionState]})]})}),(0,d.jsx)(`td`,{className:s.listCell,role:`gridcell`,children:e.lastSync}),(0,d.jsx)(`td`,{className:s.listCell,role:`gridcell`})]},e.id))})]})}})),_,v,y,b,x,S,C,w,T,E,D,O,k,A;t((()=>{c(),g(),_=e(s(),1),v=[{id:`1`,displayName:`HelpIN (Insights AI)`,description:`SNOW Tickets connection for team Insights AI`,icon:l(`logos/helpin-logo.svg`),iconType:`image`,connectionName:`ServiceNow04`,stagedRollout:`all`,connectionState:`syncing`,lastSync:`-`,badge:`new`},{id:`2`,displayName:`Confluence`,description:`Connects our Confluence spaces to enable search and retrieve...`,icon:l(`logos/confluence-logo.svg`),iconType:`image`,connectionName:`Confluence01`,stagedRollout:`all`,connectionState:`active`,lastSync:`15 hours ago`},{id:`3`,displayName:`HelpIN (Fabrikam)`,description:`SNOW Tickets connection for team Fabrikam`,icon:l(`logos/helpin-logo.svg`),iconType:`image`,connectionName:`ServiceNow03`,stagedRollout:`all`,connectionState:`active`,lastSync:`1 day ago`},{id:`4`,displayName:`Google Drive (Insights AI)`,description:`Add Description`,icon:l(`logos/googledrive-logo.svg`),iconType:`image`,connectionName:`GoogleDrive01`,stagedRollout:`staged`,connectionState:`active`,lastSync:`3 mins ago`},{id:`5`,displayName:`Jira`,description:`Links to our Jira projects, allowing users to view, track, and qua...`,icon:l(`logos/jira-logo.svg`),iconType:`image`,connectionName:`Jira02`,stagedRollout:`all`,connectionState:`active`,lastSync:`1 day ago`},{id:`6`,displayName:`Jira Test`,description:`Add Description`,icon:l(`logos/jira-logo.svg`),iconType:`image`,connectionName:`Jira01`,stagedRollout:`all`,connectionState:`failed`,lastSync:`8 days ago`},{id:`7`,displayName:`HelpIN Tickets`,description:`SNOW Tickets connection for entire org`,icon:l(`logos/helpin-logo.svg`),iconType:`image`,connectionName:`ServiceNow02`,stagedRollout:`staged`,connectionState:`active`,lastSync:`1 day ago`},{id:`8`,displayName:`Logic Apps`,description:`Custom MCP server for Logic Apps integration for the entire org`,icon:`LA`,iconType:`avatar`,connectionName:`LA Custom Connector`,stagedRollout:`staged`,connectionState:`custom`,lastSync:`1 day ago`}],y={title:`Design System MADS/Data Display/ConnectorList`,component:h,tags:[`autodocs`],argTypes:{items:{control:`object`,description:`Array of connector items to display`},compact:{control:`boolean`,description:`Enable compact mode for smaller spacing`}},parameters:{docs:{description:{component:`**来源:** DesignAgent 自建 &nbsp;|&nbsp; **实现:** Fluent v9 (makeStyles)


## Connector List

A reusable, interactive list component for displaying connectors with multiple columns of information. Based on Figma design specifications with full FluentUI token compliance.

### Features
- ✅ Multi-column table layout (Display Name, Connection Name, Staged Rollout, Connection State, Last sync)
- ✅ Interactive rows with hover and selection states
- ✅ Support for icons, avatars, and service logos
- ✅ Status indicators with visual icons (Syncing, Active, Failed, Custom)
- ✅ Clickable links for "Add Description" and "Add Staging"/"Edit"
- ✅ "New" badge support for recently added items
- ✅ Fully accessible with ARIA roles
- ✅ FluentUI design tokens for colors and typography
- ✅ Responsive design with mobile optimizations

### Usage
\`\`\`typescript
import '../design-system/ConnectorList';
import type { ConnectorItem } from '@design-system/data-display/ConnectorList/ConnectorList';

const items: ConnectorItem[] = [
  {
    id: '1',
    displayName: 'Confluence',
    description: 'Connects our Confluence spaces...',
    icon: 'https://example.com/icon.png',
    connectionName: 'Confluence01',
    stagedRollout: 'all',
    connectionState: 'active',
    lastSync: '15 hours ago',
    badge: 'new'
  }
];

<connector-list .items=\${items}></connector-list>
\`\`\`

### Events
- \`item-clicked\`: Fired when a row is clicked
- \`item-selected\`: Fired when a row is selected
- \`add-description-clicked\`: Fired when "Add Description" link is clicked
- \`rollout-clicked\`: Fired when "Add Staging" or "Edit" link is clicked

### Design Tokens Used
- Colors: \`colorNeutralForeground1\`, \`colorNeutralForeground2\`, \`colorBrandForegroundLink\`
- Typography: Segoe UI, 12px Regular/Semibold, 14px Semibold
- Spacing: 12px horizontal padding, 10-14px vertical padding
- Borders: \`colorNeutralStroke2\` (#E1E1E1)
- Status colors: Green (Active), Red (Failed), Gray (Syncing/Custom)
        `}}}},b={render:()=>(0,_.jsx)(`div`,{style:{padding:`24px`,background:`var(--colorNeutralBackground1, #ffffff)`},children:(0,_.jsx)(h,{items:v,onItemClicked:e=>console.log(`Item clicked:`,e),onItemSelected:(e,t)=>console.log(`Item selected:`,e,t),onAddDescriptionClicked:e=>console.log(`Add description clicked:`,e),onRolloutClicked:(e,t)=>console.log(`Rollout clicked:`,e,t)})})},x={render:()=>(0,_.jsx)(`div`,{style:{padding:`24px`,background:`var(--colorNeutralBackground1, #ffffff)`},children:(0,_.jsx)(h,{items:v.slice(0,3)})})},S={render:()=>(0,_.jsx)(`div`,{style:{padding:`24px`,background:`var(--colorNeutralBackground1, #ffffff)`},children:(0,_.jsx)(h,{items:[v[0]]})})},C={render:()=>(0,_.jsxs)(`div`,{style:{padding:`24px`,background:`var(--colorNeutralBackground1, #ffffff)`},children:[(0,_.jsx)(h,{items:[]}),(0,_.jsx)(`div`,{style:{padding:`48px`,textAlign:`center`,color:`var(--colorNeutralForeground3)`},children:(0,_.jsx)(`p`,{style:{fontSize:`14px`,margin:0},children:`No connectors available`})})]})},w={render:()=>(0,_.jsx)(`div`,{style:{padding:`24px`,background:`var(--colorNeutralBackground1, #ffffff)`},children:(0,_.jsx)(h,{items:[{...v[0],connectionState:`syncing`},{...v[1],connectionState:`active`},{...v[5],connectionState:`failed`},{...v[7],connectionState:`custom`}]})})},T={render:()=>(0,_.jsx)(`div`,{style:{padding:`24px`,background:`var(--colorNeutralBackground1, #ffffff)`},children:(0,_.jsx)(h,{items:[v[3],v[5]],onAddDescriptionClicked:e=>{alert(`Add description for: ${e.displayName}`)}})})},E={render:()=>(0,_.jsx)(`div`,{style:{padding:`24px`,background:`var(--colorNeutralBackground1, #ffffff)`},children:(0,_.jsx)(h,{items:[{...v[0],stagedRollout:`all`},{...v[3],stagedRollout:`staged`},{...v[6],stagedRollout:`staged`}],onRolloutClicked:(e,t)=>{alert(`Rollout action: ${t} for ${e.displayName}`)}})})},D={render:()=>(0,_.jsx)(`div`,{style:{padding:`24px`,background:`var(--colorNeutralBackground1, #ffffff)`},children:(0,_.jsx)(h,{items:[v[0],v[1]]})})},O={render:()=>(0,_.jsx)(`div`,{style:{maxWidth:`768px`,padding:`24px`,background:`var(--colorNeutralBackground1, #ffffff)`},children:(0,_.jsx)(h,{items:v.slice(0,4)})})},k={render:()=>(0,_.jsxs)(`div`,{style:{padding:`24px`,background:`var(--colorNeutralBackground1, #ffffff)`},children:[(0,_.jsx)(`h3`,{style:{margin:`0 0 16px 0`,fontSize:`18px`,fontWeight:600,color:`var(--colorNeutralForeground1)`},children:`Interactive Connector List Demo`}),(0,_.jsx)(`p`,{style:{margin:`0 0 24px 0`,fontSize:`14px`,color:`var(--colorNeutralForeground2)`},children:`Click on rows to select, click on links to trigger actions. Notifications will appear in the top-right corner.`}),(0,_.jsx)(h,{items:v,onItemClicked:e=>{let t=document.createElement(`div`);t.style.cssText=`
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--colorBrandBackground);
        color: white;
        padding: 12px 24px;
        border-radius: 4px;
        z-index: 1000;
        font-family: 'Segoe UI', sans-serif;
        font-size: 14px;
      `,t.textContent=`Clicked: ${e.displayName}`,document.body.appendChild(t),setTimeout(()=>t.remove(),2e3)},onItemSelected:(e,t)=>{console.log(`Selection changed:`,e,t)},onAddDescriptionClicked:e=>{alert(`Add description for: ${e.displayName}`)},onRolloutClicked:(e,t)=>{alert(`${t===`add`?`Add Staging`:`Edit Staging`} for: ${e.displayName}`)}})]})},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '24px',
    background: 'var(--colorNeutralBackground1, #ffffff)'
  }}>
      <ConnectorList items={sampleConnectors} onItemClicked={item => console.log('Item clicked:', item)} onItemSelected={(item, selected) => console.log('Item selected:', item, selected)} onAddDescriptionClicked={item => console.log('Add description clicked:', item)} onRolloutClicked={(item, action) => console.log('Rollout clicked:', item, action)} />
    </div>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '24px',
    background: 'var(--colorNeutralBackground1, #ffffff)'
  }}>
      <ConnectorList items={sampleConnectors.slice(0, 3)} />
    </div>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '24px',
    background: 'var(--colorNeutralBackground1, #ffffff)'
  }}>
      <ConnectorList items={[sampleConnectors[0]]} />
    </div>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '24px',
    background: 'var(--colorNeutralBackground1, #ffffff)'
  }}>
      <ConnectorList items={[]} />
      <div style={{
      padding: '48px',
      textAlign: 'center',
      color: 'var(--colorNeutralForeground3)'
    }}>
        <p style={{
        fontSize: '14px',
        margin: 0
      }}>No connectors available</p>
      </div>
    </div>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '24px',
    background: 'var(--colorNeutralBackground1, #ffffff)'
  }}>
      <ConnectorList items={[{
      ...sampleConnectors[0],
      connectionState: 'syncing' as const
    }, {
      ...sampleConnectors[1],
      connectionState: 'active' as const
    }, {
      ...sampleConnectors[5],
      connectionState: 'failed' as const
    }, {
      ...sampleConnectors[7],
      connectionState: 'custom' as const
    }]} />
    </div>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '24px',
    background: 'var(--colorNeutralBackground1, #ffffff)'
  }}>
      <ConnectorList items={[sampleConnectors[3], sampleConnectors[5]]} onAddDescriptionClicked={item => {
      alert(\`Add description for: \${item.displayName}\`);
    }} />
    </div>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '24px',
    background: 'var(--colorNeutralBackground1, #ffffff)'
  }}>
      <ConnectorList items={[{
      ...sampleConnectors[0],
      stagedRollout: 'all' as const
    }, {
      ...sampleConnectors[3],
      stagedRollout: 'staged' as const
    }, {
      ...sampleConnectors[6],
      stagedRollout: 'staged' as const
    }]} onRolloutClicked={(item, action) => {
      alert(\`Rollout action: \${action} for \${item.displayName}\`);
    }} />
    </div>
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '24px',
    background: 'var(--colorNeutralBackground1, #ffffff)'
  }}>
      <ConnectorList items={[sampleConnectors[0],
    // 包含 'new' badge
    sampleConnectors[1]]} />
    </div>
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: '768px',
    padding: '24px',
    background: 'var(--colorNeutralBackground1, #ffffff)'
  }}>
      <ConnectorList items={sampleConnectors.slice(0, 4)} />
    </div>
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => {
    const handleItemClicked = (item: ConnectorItem) => {
      const notification = document.createElement('div');
      notification.style.cssText = \`
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--colorBrandBackground);
        color: white;
        padding: 12px 24px;
        border-radius: 4px;
        z-index: 1000;
        font-family: 'Segoe UI', sans-serif;
        font-size: 14px;
      \`;
      notification.textContent = \`Clicked: \${item.displayName}\`;
      document.body.appendChild(notification);
      setTimeout(() => notification.remove(), 2000);
    };
    return <div style={{
      padding: '24px',
      background: 'var(--colorNeutralBackground1, #ffffff)'
    }}>
        <h3 style={{
        margin: '0 0 16px 0',
        fontSize: '18px',
        fontWeight: 600,
        color: 'var(--colorNeutralForeground1)'
      }}>
          Interactive Connector List Demo
        </h3>
        <p style={{
        margin: '0 0 24px 0',
        fontSize: '14px',
        color: 'var(--colorNeutralForeground2)'
      }}>
          Click on rows to select, click on links to trigger actions. Notifications will appear in the top-right corner.
        </p>
        <ConnectorList items={sampleConnectors} onItemClicked={handleItemClicked} onItemSelected={(item, selected) => {
        console.log('Selection changed:', item, selected);
      }} onAddDescriptionClicked={item => {
        alert(\`Add description for: \${item.displayName}\`);
      }} onRolloutClicked={(item, action) => {
        alert(\`\${action === 'add' ? 'Add Staging' : 'Edit Staging'} for: \${item.displayName}\`);
      }} />
      </div>;
  }
}`,...k.parameters?.docs?.source}}},A=[`Default`,`FewItems`,`SingleItem`,`Empty`,`MixedStates`,`WithAddDescription`,`RolloutVariations`,`WithNewBadge`,`ResponsiveNarrow`,`InteractiveDemo`]}))();export{b as Default,C as Empty,x as FewItems,k as InteractiveDemo,w as MixedStates,O as ResponsiveNarrow,E as RolloutVariations,S as SingleItem,T as WithAddDescription,D as WithNewBadge,A as __namedExportsOrder,y as default};