import{j as e,t as l,d as u,r as s,e as w}from"./iframe-DwRLCFzj.js";import"./preload-helper-D9Z9MdNV.js";function c({placeholder:t}){return e("input",{css:v,type:"text",maxLength:2,placeholder:t})}const{colors:T,typography:i}=l,v=u`
    width: 3.59375rem;
    height: 2.5rem;
    border: none;
    background: transparent;
    text-align: center;
    font-size: ${i.fontSize.label};
    font-weight: ${i.fontWeight.medium};
    line-height: 1.5;
    color: ${T.grey[10]};
    outline: none;
`;c.__docgenInfo={description:"",methods:[],displayName:"DigitInput",props:{placeholder:{required:!0,tsType:{name:"string"},description:""}}};const{colors:o,typography:p}=l,a=s.forwardRef(({id:t,ariaLabel:m,placeholder:g,type:y,onInput:h},x)=>{const n=s.useRef(null),f=300;return e("input",{ref:x,id:t,"aria-label":m,placeholder:g,type:y,onInput:b=>{const I=b.target.value;n.current&&clearTimeout(n.current),n.current=setTimeout(()=>{h?.(I)},f)},css:_})}),_=u`
    all: unset;
    box-sizing: border-box;
    min-width: 26rem;
    height: 1.5rem;
    color: ${o.grey[90]};
    font-weight: ${p.fontWeight.medium};
    cursor: text;
    font-size: ${p.fontSize.caption};

    &::placeholder {
        color: ${o.grey[60]};
    }

    &:focus {
        outline: none;
        border-bottom: 2px solid ${o.primary};
    }
`;a.__docgenInfo={description:"",methods:[],displayName:"TextInput",props:{id:{required:!1,tsType:{name:"string"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},type:{required:!0,tsType:{name:"union",raw:"'text' | 'password'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'password'"}]},description:""},onInput:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}}};const{action:d}=__STORYBOOK_MODULE_ACTIONS__,S={title:"Atoms/Input",parameters:{layout:"centered"},decorators:[t=>e("div",{style:{padding:"2rem",background:"#333333"},children:e(t,{})})]},r={render:()=>w("div",{style:{display:"grid",gap:"1rem"},children:[e(a,{id:"storybook-text-input",ariaLabel:"Text input",placeholder:"Enter text",type:"text",onInput:d("text input changed")}),e(a,{id:"storybook-password-input",ariaLabel:"Password input",placeholder:"Enter password",type:"password",onInput:d("password input changed")}),e(c,{placeholder:"12"})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: '1rem'
  }}>\r
            <TextInput id='storybook-text-input' ariaLabel='Text input' placeholder='Enter text' type='text' onInput={action('text input changed')} />\r
            <TextInput id='storybook-password-input' ariaLabel='Password input' placeholder='Enter password' type='password' onInput={action('password input changed')} />\r
            <DigitInput placeholder='12' />\r
        </div>
}`,...r.parameters?.docs?.source}}};const k=["All"];export{r as All,k as __namedExportsOrder,S as default};
