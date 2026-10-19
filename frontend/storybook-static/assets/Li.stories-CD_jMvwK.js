import{j as e,t as a,d as c}from"./iframe-DwRLCFzj.js";import"./preload-helper-D9Z9MdNV.js";function n({children:r,onClick:s}){return e("li",{css:l,onClick:s,children:r})}const{colors:o,typography:i}=a,l=c`
    color: ${o.greyOpacityWhite[50]};
    font-size: ${i.fontSize.label};
    font-weight: ${i.fontWeight.bold};
    font-style: normal;
    line-height: normal;

    &:hover {
        color: ${o.grey[100]};
        cursor: pointer;
    }
`;n.__docgenInfo={description:"",methods:[],displayName:"TextLi",props:{children:{required:!0,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const{action:d}=__STORYBOOK_MODULE_ACTIONS__,p={title:"Atoms/Li",component:n,parameters:{layout:"centered"},decorators:[r=>e("div",{style:{padding:"2rem",background:"#333333"},children:e(r,{})})]},t={args:{children:"Mountain route"},render:()=>e("ul",{children:e(n,{onClick:d("list item clicked"),children:"Mountain route"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Mountain route'
  },
  render: () => <ul>\r
            <TextLi onClick={action('list item clicked')}>Mountain route</TextLi>\r
        </ul>
}`,...t.parameters?.docs?.source}}};const g=["Default"];export{t as Default,g as __namedExportsOrder,p as default};
