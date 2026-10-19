import{j as n}from"./iframe-DwRLCFzj.js";import{I as o}from"./Icons-1opuER45.js";import"./preload-helper-D9Z9MdNV.js";import"./utils-BOxwGsZ-.js";const s=["clear-day","cloudy","rain","snow","search-sm","settings-04","bell-01","heart-rounded","download-02","x"],c={title:"Atoms/Icon",component:o,parameters:{layout:"centered"},decorators:[r=>n("div",{style:{padding:"2rem",background:"#333333"},children:n(r,{})})]},e={args:{name:"clear-day",width:1.5,height:1.5,color:"grey-100"},render:()=>n("div",{style:{display:"grid",gridTemplateColumns:"repeat(5, minmax(3rem, 1fr))",gap:"1rem"},children:s.map(r=>n(o,{name:r,width:1.5,height:1.5,color:"grey-100"},r))})},a={args:{name:"search-sm",width:1.8,height:1.8,color:"grey-100"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'clear-day',
    width: 1.5,
    height: 1.5,
    color: 'grey-100'
  },
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(5, minmax(3rem, 1fr))',
    gap: '1rem'
  }}>\r
            {iconNames.map(name => <Icon key={name} name={name} width={1.5} height={1.5} color='grey-100' />)}\r
        </div>
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'search-sm',
    width: 1.8,
    height: 1.8,
    color: 'grey-100'
  }
}`,...a.parameters?.docs?.source}}};const l=["Gallery","Primary"];export{e as Gallery,a as Primary,l as __namedExportsOrder,c as default};
