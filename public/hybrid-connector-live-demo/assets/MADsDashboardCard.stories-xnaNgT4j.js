import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./jsx-runtime-cM__dR4X.js";import{n as r,t as i}from"./MADsDashboardCard-w3cQsSSz.js";var a,o,s,c;t((()=>{r(),a=e(n(),1),o={title:`Design System MADS/Charts/MADsDashboardCard`,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`**来源:** DesignAgent 自建 &nbsp;|&nbsp; **实现:** Fluent v9 (makeStyles)`}}}},s={render:()=>(0,a.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:24,padding:16},children:[(0,a.jsx)(`h3`,{style:{margin:`16px 0 8px`},children:`Small — No Actions`}),(0,a.jsx)(`div`,{style:{maxWidth:300},children:(0,a.jsxs)(i,{title:`Active Users`,size:`small`,children:[(0,a.jsx)(`p`,{style:{margin:0,fontSize:32,fontWeight:600,color:`#0078d4`},children:`12,450`}),(0,a.jsx)(`p`,{style:{margin:`4px 0 0`,fontSize:12,color:`#605e5c`},children:`+4.2% from last month`})]})}),(0,a.jsx)(`h3`,{style:{margin:`16px 0 8px`},children:`Medium — With Primary Action`}),(0,a.jsx)(`div`,{style:{maxWidth:420},children:(0,a.jsx)(i,{title:`Connector Health`,size:`medium`,primaryAction:{label:`View All Connectors`,onClick:()=>alert(`View connectors`)},onMenuClick:()=>alert(`Menu clicked`),children:(0,a.jsxs)(`div`,{style:{display:`flex`,gap:24,padding:`8px 0`},children:[(0,a.jsxs)(`div`,{children:[(0,a.jsx)(`p`,{style:{margin:0,fontSize:24,fontWeight:600,color:`#107c10`},children:`94`}),(0,a.jsx)(`p`,{style:{margin:`2px 0 0`,fontSize:12,color:`#605e5c`},children:`Healthy`})]}),(0,a.jsxs)(`div`,{children:[(0,a.jsx)(`p`,{style:{margin:0,fontSize:24,fontWeight:600,color:`#c19c00`},children:`4`}),(0,a.jsx)(`p`,{style:{margin:`2px 0 0`,fontSize:12,color:`#605e5c`},children:`Warning`})]}),(0,a.jsxs)(`div`,{children:[(0,a.jsx)(`p`,{style:{margin:0,fontSize:24,fontWeight:600,color:`#d13438`},children:`2`}),(0,a.jsx)(`p`,{style:{margin:`2px 0 0`,fontSize:12,color:`#605e5c`},children:`Error`})]})]})})}),(0,a.jsx)(`h3`,{style:{margin:`16px 0 8px`},children:`Large — With Primary + Secondary Actions`}),(0,a.jsx)(`div`,{style:{maxWidth:600},children:(0,a.jsx)(i,{title:`License Usage`,size:`large`,primaryAction:{label:`Manage Licenses`,onClick:()=>alert(`Manage`)},secondaryAction:{label:`Export Report`,onClick:()=>alert(`Export`)},onMenuClick:()=>alert(`Menu clicked`),children:(0,a.jsxs)(`div`,{style:{padding:`8px 0`},children:[(0,a.jsx)(`p`,{style:{marginTop:0},children:`You are currently using 8,930 of 12,450 available licenses (71.7%).`}),(0,a.jsx)(`div`,{style:{background:`#edebe9`,borderRadius:4,height:8,overflow:`hidden`},children:(0,a.jsx)(`div`,{style:{background:`#0078d4`,width:`72%`,height:`100%`,borderRadius:4}})}),(0,a.jsx)(`p`,{style:{margin:`8px 0 0`,fontSize:12,color:`#605e5c`},children:`3,520 licenses available for reassignment`})]})})}),(0,a.jsx)(`h3`,{style:{margin:`16px 0 8px`},children:`Auto Size — No Header Border`}),(0,a.jsx)(`div`,{style:{maxWidth:400},children:(0,a.jsxs)(i,{title:`Security Score`,size:`auto`,showHeaderBorder:!1,primaryAction:{label:`Improve Score`,onClick:()=>alert(`Improve`)},children:[(0,a.jsx)(`p`,{style:{margin:`0 0 8px`,fontSize:48,fontWeight:700,color:`#107c10`},children:`87`}),(0,a.jsx)(`p`,{style:{margin:0,fontSize:13,color:`#605e5c`},children:`Your security posture is good. Enable MFA for remaining users to reach 95+.`})]})}),(0,a.jsx)(`h3`,{style:{margin:`16px 0 8px`},children:`No Header — Content Only`}),(0,a.jsx)(`div`,{style:{maxWidth:360},children:(0,a.jsx)(i,{size:`auto`,children:(0,a.jsx)(`p`,{style:{margin:0,textAlign:`center`,color:`#605e5c`,fontStyle:`italic`,padding:`16px 0`},children:`This card has no title or footer — just content.`})})})]})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    padding: 16
  }}>
      <h3 style={{
      margin: '16px 0 8px'
    }}>Small — No Actions</h3>
      <div style={{
      maxWidth: 300
    }}>
        <MADsDashboardCard title="Active Users" size="small">
          <p style={{
          margin: 0,
          fontSize: 32,
          fontWeight: 600,
          color: '#0078d4'
        }}>12,450</p>
          <p style={{
          margin: '4px 0 0',
          fontSize: 12,
          color: '#605e5c'
        }}>+4.2% from last month</p>
        </MADsDashboardCard>
      </div>

      <h3 style={{
      margin: '16px 0 8px'
    }}>Medium — With Primary Action</h3>
      <div style={{
      maxWidth: 420
    }}>
        <MADsDashboardCard title="Connector Health" size="medium" primaryAction={{
        label: 'View All Connectors',
        onClick: () => alert('View connectors')
      }} onMenuClick={() => alert('Menu clicked')}>
          <div style={{
          display: 'flex',
          gap: 24,
          padding: '8px 0'
        }}>
            <div>
              <p style={{
              margin: 0,
              fontSize: 24,
              fontWeight: 600,
              color: '#107c10'
            }}>94</p>
              <p style={{
              margin: '2px 0 0',
              fontSize: 12,
              color: '#605e5c'
            }}>Healthy</p>
            </div>
            <div>
              <p style={{
              margin: 0,
              fontSize: 24,
              fontWeight: 600,
              color: '#c19c00'
            }}>4</p>
              <p style={{
              margin: '2px 0 0',
              fontSize: 12,
              color: '#605e5c'
            }}>Warning</p>
            </div>
            <div>
              <p style={{
              margin: 0,
              fontSize: 24,
              fontWeight: 600,
              color: '#d13438'
            }}>2</p>
              <p style={{
              margin: '2px 0 0',
              fontSize: 12,
              color: '#605e5c'
            }}>Error</p>
            </div>
          </div>
        </MADsDashboardCard>
      </div>

      <h3 style={{
      margin: '16px 0 8px'
    }}>Large — With Primary + Secondary Actions</h3>
      <div style={{
      maxWidth: 600
    }}>
        <MADsDashboardCard title="License Usage" size="large" primaryAction={{
        label: 'Manage Licenses',
        onClick: () => alert('Manage')
      }} secondaryAction={{
        label: 'Export Report',
        onClick: () => alert('Export')
      }} onMenuClick={() => alert('Menu clicked')}>
          <div style={{
          padding: '8px 0'
        }}>
            <p style={{
            marginTop: 0
          }}>
              You are currently using 8,930 of 12,450 available licenses (71.7%).
            </p>
            <div style={{
            background: '#edebe9',
            borderRadius: 4,
            height: 8,
            overflow: 'hidden'
          }}>
              <div style={{
              background: '#0078d4',
              width: '72%',
              height: '100%',
              borderRadius: 4
            }} />
            </div>
            <p style={{
            margin: '8px 0 0',
            fontSize: 12,
            color: '#605e5c'
          }}>
              3,520 licenses available for reassignment
            </p>
          </div>
        </MADsDashboardCard>
      </div>

      <h3 style={{
      margin: '16px 0 8px'
    }}>Auto Size — No Header Border</h3>
      <div style={{
      maxWidth: 400
    }}>
        <MADsDashboardCard title="Security Score" size="auto" showHeaderBorder={false} primaryAction={{
        label: 'Improve Score',
        onClick: () => alert('Improve')
      }}>
          <p style={{
          margin: '0 0 8px',
          fontSize: 48,
          fontWeight: 700,
          color: '#107c10'
        }}>87</p>
          <p style={{
          margin: 0,
          fontSize: 13,
          color: '#605e5c'
        }}>
            Your security posture is good. Enable MFA for remaining users to reach 95+.
          </p>
        </MADsDashboardCard>
      </div>

      <h3 style={{
      margin: '16px 0 8px'
    }}>No Header — Content Only</h3>
      <div style={{
      maxWidth: 360
    }}>
        <MADsDashboardCard size="auto">
          <p style={{
          margin: 0,
          textAlign: 'center',
          color: '#605e5c',
          fontStyle: 'italic',
          padding: '16px 0'
        }}>
            This card has no title or footer — just content.
          </p>
        </MADsDashboardCard>
      </div>
    </div>
}`,...s.parameters?.docs?.source}}},c=[`Default`]}))();export{s as Default,c as __namedExportsOrder,o as default};