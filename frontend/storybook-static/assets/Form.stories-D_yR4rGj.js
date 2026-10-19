import{t as f,d as r,e as d,j as e,r as k}from"./iframe-DwRLCFzj.js";import"./preload-helper-D9Z9MdNV.js";const{colors:t,typography:l}=f;function i({id:o,text:a,subTitle:s,grey:u=90,checked:h,onChange:m,inputRef:g}){const y=r`
        color: ${t.grey[u]};
    `;return d("label",{htmlFor:o,css:b,children:[e("input",{id:o,type:"checkbox",css:C,onChange:m,checked:h,ref:g??void 0}),e("span",{css:x}),d("div",{css:T,children:[e("span",{css:[S,y],children:a}),s&&e("span",{css:v,children:s})]})]})}const b=r`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
`,x=r`
    position: relative;
    width: 1.1rem;
    height: 1.1rem;
    border: 3px solid ${t.grey[100]};
    border-radius: 6px;
    transition: all 0.15s ease-in-out;
`,C=r`
    position: absolute;
    opacity: 0;
    pointer-events: none;

    &:checked + span {
        background-color: ${t.grey[60]};
        border-color: ${t.grey[60]};
    }

    &:checked + span::after {
        content: '';
        position: absolute;
        width: 0.4rem;
        height: 0.65rem;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -70%) rotate(45deg);
        border-right: 2px solid ${t.grey[100]};
        border-bottom: 2px solid ${t.grey[100]};
    }
`,T=r`
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
`,S=r`
    font-size: ${l.fontSize.caption};
    color: ${t.grey[90]};
`,v=r`
    color: ${t.grey[70]};
    font-weight: ${l.fontWeight.regular};
    font-size: 0.75rem;
`;i.__docgenInfo={description:"",methods:[],displayName:"CheckBox",props:{id:{required:!0,tsType:{name:"string"},description:""},text:{required:!0,tsType:{name:"string"},description:""},subTitle:{required:!1,tsType:{name:"string"},description:""},grey:{required:!1,tsType:{name:"ColorValueType"},description:"",defaultValue:{value:"90",computed:!1}},checked:{required:!1,tsType:{name:"boolean"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},inputRef:{required:!1,tsType:{name:"RefObject",elements:[{name:"HTMLInputElement"}],raw:"RefObject<HTMLInputElement>"},description:""}}};const{action:p}=__STORYBOOK_MODULE_ACTIONS__,O={title:"Atoms/Form",parameters:{layout:"centered"},decorators:[o=>e("div",{style:{padding:"2rem",background:"#333333"},children:e(o,{})})]};function _(){const[o,a]=k.useState(!1);return e(i,{id:"storybook-checkbox",text:"Agree to notifications",subTitle:"Click to toggle the checked state",checked:o,onChange:()=>{a(s=>!s),p("checkbox changed")()}})}const n={render:()=>e(_,{})},c={render:()=>e(i,{id:"storybook-checkbox-checked",text:"Checked option",subTitle:"Default checked view",checked:!0,onChange:p("checkbox changed")})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <StatefulCheckBox />
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <CheckBox id='storybook-checkbox-checked' text='Checked option' subTitle='Default checked view' checked onChange={action('checkbox changed')} />
}`,...c.parameters?.docs?.source}}};const q=["Default","Checked"];export{c as Checked,n as Default,q as __namedExportsOrder,O as default};
