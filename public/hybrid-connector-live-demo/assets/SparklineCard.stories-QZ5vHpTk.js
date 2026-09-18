import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./react-DngYkFIh.js";import{t as r}from"./jsx-runtime-cM__dR4X.js";import{n as i,t as a}from"./lib-Cuo3fYRJ.js";import{n as o,t as s}from"./MADsDashboardCard-w3cQsSSz.js";var c,l,u=t((()=>{n(),a(),c=e(r(),1),l=({data:e,color:t=`#0078d4`,width:n=120,height:r=40,showLegend:a=!1,className:o,style:s})=>(0,c.jsx)(`div`,{className:o,style:s,children:(0,c.jsx)(i,{data:{lineChartData:[{legend:`Trend`,color:t,data:e.map(e=>({x:e.x,y:e.y}))}]},width:n,height:r,showLegend:a})})})),d,f,p=t((()=>{n(),o(),u(),d=e(r(),1),f=({title:e,data:t,color:n,width:r,height:i,showLegend:a,className:o=``,style:c={}})=>(0,d.jsx)(s,{title:e,size:`auto`,className:o,style:c,children:(0,d.jsx)(l,{data:t,color:n,width:r,height:i,showLegend:a})})})),m,h,g,_,v,y,b;t((()=>{p(),u(),m=e(r(),1),h={title:`Design System MADS/Charts/SparklineCard`,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`**来源:** @fluentui/react-charts-preview &nbsp;|&nbsp; **实现:** Fluent v9 (makeStyles) + @fluentui/react-charts-preview

Sparkline 是紧凑型折线图，适合嵌入 KPI 卡片中显示趋势。`}}}},g=[{x:1,y:1200},{x:2,y:1350},{x:3,y:1280},{x:4,y:1500},{x:5,y:1620},{x:6,y:1800}],_=[{x:1,y:980},{x:2,y:870},{x:3,y:910},{x:4,y:750},{x:5,y:680},{x:6,y:520}],v=[{x:1,y:5200},{x:2,y:5350},{x:3,y:5180},{x:4,y:5400},{x:5,y:5250},{x:6,y:5300}],y={render:()=>(0,m.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:24,padding:16},children:[(0,m.jsx)(`h3`,{style:{margin:`16px 0 8px`},children:`Sparkline in Card`}),(0,m.jsxs)(`div`,{style:{display:`flex`,gap:16,flexWrap:`wrap`},children:[(0,m.jsx)(`div`,{style:{maxWidth:240},children:(0,m.jsx)(f,{title:`Active Users Trend`,data:g,color:`#107c10`,width:160,height:48})}),(0,m.jsx)(`div`,{style:{maxWidth:240},children:(0,m.jsx)(f,{title:`Error Rate`,data:_,color:`#d13438`,width:160,height:48})}),(0,m.jsx)(`div`,{style:{maxWidth:240},children:(0,m.jsx)(f,{title:`Sessions`,data:v,color:`#0078d4`,width:160,height:48})})]}),(0,m.jsx)(`h3`,{style:{margin:`16px 0 8px`},children:`Sparkline 独立使用（嵌入 KPI 场景）`}),(0,m.jsxs)(`div`,{style:{display:`flex`,gap:32,alignItems:`center`,padding:`16px`,border:`1px solid #edebe9`,borderRadius:4,maxWidth:480},children:[(0,m.jsxs)(`div`,{children:[(0,m.jsx)(`div`,{style:{fontSize:12,color:`#605e5c`},children:`Monthly Active Users`}),(0,m.jsx)(`div`,{style:{fontSize:28,fontWeight:600},children:`37,200`}),(0,m.jsx)(`div`,{style:{fontSize:12,color:`#107c10`},children:`↑ 5.1% vs last month`})]}),(0,m.jsx)(l,{data:g,color:`#107c10`,width:120,height:40})]})]})},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    padding: 16
  }}>
      <h3 style={{
      margin: '16px 0 8px'
    }}>Sparkline in Card</h3>
      <div style={{
      display: 'flex',
      gap: 16,
      flexWrap: 'wrap'
    }}>
        <div style={{
        maxWidth: 240
      }}>
          <SparklineCard title="Active Users Trend" data={trendUp} color="#107c10" width={160} height={48} />
        </div>
        <div style={{
        maxWidth: 240
      }}>
          <SparklineCard title="Error Rate" data={trendDown} color="#d13438" width={160} height={48} />
        </div>
        <div style={{
        maxWidth: 240
      }}>
          <SparklineCard title="Sessions" data={trendFlat} color="#0078d4" width={160} height={48} />
        </div>
      </div>

      <h3 style={{
      margin: '16px 0 8px'
    }}>Sparkline 独立使用（嵌入 KPI 场景）</h3>
      <div style={{
      display: 'flex',
      gap: 32,
      alignItems: 'center',
      padding: '16px',
      border: '1px solid #edebe9',
      borderRadius: 4,
      maxWidth: 480
    }}>
        <div>
          <div style={{
          fontSize: 12,
          color: '#605e5c'
        }}>Monthly Active Users</div>
          <div style={{
          fontSize: 28,
          fontWeight: 600
        }}>37,200</div>
          <div style={{
          fontSize: 12,
          color: '#107c10'
        }}>↑ 5.1% vs last month</div>
        </div>
        <SparklineChart data={trendUp} color="#107c10" width={120} height={40} />
      </div>
    </div>
}`,...y.parameters?.docs?.source}}},b=[`Default`]}))();export{y as Default,b as __namedExportsOrder,h as default};