import{j as e,N as c,d as m,t as p,e as u}from"./iframe-DwRLCFzj.js";import{I as f}from"./Icons-1opuER45.js";import"./preload-helper-D9Z9MdNV.js";import"./utils-BOxwGsZ-.js";function l({to:t,name:o,size:s=1.9,color:d="grey-100"}){return e(c,{css:m`
                display: flex;
                align-items: center;
            `,to:t,children:e(f,{name:o,width:s,height:s,color:d})})}l.__docgenInfo={description:"",methods:[],displayName:"IconLink",props:{to:{required:!0,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1.9",computed:!1}},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'grey-100'",computed:!1}}}};function a({to:t,children:o}){return e(c,{to:t,css:g,children:o})}const{colors:r,typography:i}=p,g=m`
    all: unset;
    position: relative;
    cursor: pointer;
    padding-bottom: 0.3rem;
    color: ${r.greyOpacityWhite[40]};
    font-size: ${i.fontSize.label};
    font-weight: ${i.fontWeight.medium};
    line-height: 150%;

    &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: ${r.grey[100]};
        transform: scaleX(0);
        transform-origin: left center;
        transition: transform 0.3s ease;
    }

    &:hover::before {
        transform: scaleX(1);
    }

    &:hover {
        color: ${r.grey[100]};
    }

    &.active {
        color: ${r.grey[100]};
    }

    &.active::before {
        color: ${r.grey[100]};
        transform: scaleX(1);
    }
`;a.__docgenInfo={description:"",methods:[],displayName:"NavItemLink",props:{to:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const k={title:"Atoms/Link",parameters:{layout:"centered"},decorators:[t=>e("div",{style:{padding:"2rem",background:"#333333"},children:e(t,{})})]},n={render:()=>u("nav",{style:{display:"flex",alignItems:"center",gap:"1.5rem"},children:[e(a,{to:"/",children:"Home"}),e(a,{to:"/mountains",children:"Mountains"}),e(l,{to:"/search",name:"search-sm"})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <nav style={{
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem'
  }}>\r
            <NavItemLink to='/'>Home</NavItemLink>\r
            <NavItemLink to='/mountains'>Mountains</NavItemLink>\r
            <IconLink to='/search' name='search-sm' />\r
        </nav>
}`,...n.parameters?.docs?.source}}};const L=["All"];export{n as All,L as __namedExportsOrder,k as default};
