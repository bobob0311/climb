import{j as r,d as o,e as d}from"./iframe-DwRLCFzj.js";import"./preload-helper-D9Z9MdNV.js";function t({size:e="2.5rem",src:s="",alt:l=""}){return r("img",{src:s,alt:l,css:m({size:e}),draggable:!1})}const m=({size:e})=>o`
    width: ${e};
    height: ${e};
    border-radius: 50%;
    object-fit: cover;
`;t.__docgenInfo={description:"",methods:[],displayName:"CircleImage",props:{size:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'2.5rem'",computed:!1}},src:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},alt:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const n=""+new URL("mainImg-CqN7sDau.png",import.meta.url).href;function i({width:e=115,height:s=30}){return r("img",{src:n,width:e,height:s,alt:"Main Logo"})}i.__docgenInfo={description:"",methods:[],displayName:"LogoImage",props:{width:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"115",computed:!1}},height:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"30",computed:!1}}}};const c="data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 120 120%22%3E%3Crect width=%22120%22 height=%22120%22 fill=%22%232693ff%22/%3E%3Ccircle cx=%2260%22 cy=%2248%22 r=%2224%22 fill=%22%23fff35b%22/%3E%3Cpath d=%22M24 104c10-24 62-24 72 0%22 fill=%22%23ffffff%22/%3E%3C/svg%3E",u={title:"Atoms/Image",parameters:{layout:"centered"},decorators:[e=>r("div",{style:{padding:"2rem",background:"#333333"},children:r(e,{})})]},a={render:()=>d("div",{style:{display:"grid",gap:"1.5rem",justifyItems:"start"},children:[r(i,{}),r(t,{size:"5rem",src:c,alt:"Sample profile"})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: '1.5rem',
    justifyItems: 'start'
  }}>\r
            <LogoImage />\r
            <CircleImage size='5rem' src={sampleImage} alt='Sample profile' />\r
        </div>
}`,...a.parameters?.docs?.source}}};const g=["All"];export{a as All,g as __namedExportsOrder,u as default};
