import{t as r,d as o,j as e,e as F}from"./iframe-DwRLCFzj.js";import{c as k}from"./utils-BOxwGsZ-.js";import"./preload-helper-D9Z9MdNV.js";const{colors:s}=r;function y({children:t}){return e("span",{css:v,children:t})}const v=o`
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    background-color: ${s.status.light.bad};
    color: ${s.status.normal.bad};
`;y.__docgenInfo={description:"",methods:[],displayName:"CautionText",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};function u(t){const{TextTag:n,color:z,fontSize:R,fontWeight:W,lineHeight:_,children:N,flexColoumn:q}=t,C=o`
        ${q&&"display: flex; flex-direction: column; align-items: center;"}
        ${k({fontSize:R,fontWeight:W,color:z,lineHeight:_})}
    `;return e(n,{css:C,children:N})}u.__docgenInfo={description:"",methods:[],displayName:"CommonText",props:{TextTag:{required:!0,tsType:{name:"union",raw:"'span' | 'p'",elements:[{name:"literal",value:"'span'"},{name:"literal",value:"'p'"}]},description:""},fontSize:{required:!1,tsType:{name:"FontSizeType"},description:""},fontWeight:{required:!1,tsType:{name:"FontWeightType"},description:""},lineHeight:{required:!1,tsType:{name:"number"},description:""},color:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},flexColoumn:{required:!1,tsType:{name:"boolean"},description:""}}};function x(t){const{children:n}=t;return e("div",{css:L,children:n})}const{colors:a,typography:c}=r,L=o`
    width: max-content;
    padding: 0.25rem 0.75rem;
    box-sizing: border-box;
    border-radius: 0.5rem;
    background-color: ${a.grey[40]};
    white-space: nowrap;
    font-size: ${c.fontSize.caption};
    font-weight: ${c.fontWeight.bold};
    color: ${a.grey[100]};
`;x.__docgenInfo={description:"",methods:[],displayName:"FilterLabelTextBox",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const{colors:I,typography:l}=r;function T({text:t}){return e("span",{css:B,children:t})}const B=o`
    color: ${I.grey[100]};
    font-weight: ${l.fontWeight.bold};
    font-size: ${l.fontSize.caption};
`;T.__docgenInfo={description:"",methods:[],displayName:"FormLabelText",props:{text:{required:!0,tsType:{name:"string"},description:""}}};function f({children:t}){return e("span",{css:j,children:t})}const{colors:E,typography:d}=r,j=o`
    color: ${E.grey[100]};
    font-size: ${d.fontSize.label};
    font-weight: ${d.fontWeight.bold};
    font-style: normal;
    line-height: normal;
`;f.__docgenInfo={description:"",methods:[],displayName:"SearchBarText",props:{children:{required:!0,tsType:{name:"string"},description:""}}};function b({children:t}){return e("span",{css:H,children:t})}const{colors:A,typography:p}=r,H=o`
    color: ${A.grey[80]};
    font-size: ${p.fontSize.body};
    font-weight: ${p.fontWeight.medium};
    text-align: center;
    line-height: 150%;
`;b.__docgenInfo={description:"",methods:[],displayName:"SelectorText",props:{children:{required:!0,tsType:{name:"string"},description:""}}};function S({children:t}){return e("span",{css:D,children:t})}const{colors:O,typography:m}=r,D=o`
    color: ${O.grey[100]};
    font-size: ${m.fontSize.label};
    font-weight: ${m.fontWeight.bold};
    text-align: center;
`;S.__docgenInfo={description:"",methods:[],displayName:"SelectorTitleText",props:{children:{required:!0,tsType:{name:"string"},description:""}}};function $(t){const{children:n}=t;return e("p",{css:J,children:n})}const{colors:G,typography:h}=r,J=o`
    width: 15.625rem;
    height: 2.875rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: break-all;

    line-height: 150%;
    font-size: ${h.fontSize.caption};
    font-weight: ${h.fontWeight.medium};
    color: ${G.grey[50]};
`;$.__docgenInfo={description:"",methods:[],displayName:"TwoLinesEllipsis",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const{colors:K,typography:g}=r;function w({children:t}){return e("span",{css:M,children:t})}const M=o`
    color: ${K.status.regular.bad};
    font-size: ${g.fontSize.caption};
    font-weight: ${g.fontWeight.regular};
    line-height: 140%;
`;w.__docgenInfo={description:"",methods:[],displayName:"WarningText",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const V={title:"Atoms/Text",parameters:{layout:"centered"},decorators:[t=>e("div",{style:{padding:"2rem",background:"#333333"},children:e(t,{})})]},i={render:()=>F("div",{style:{display:"grid",gap:"1rem",maxWidth:"24rem"},children:[e(u,{TextTag:"p",fontSize:"body",fontWeight:"bold",children:"Common body text"}),e(f,{children:"Search label"}),e(S,{children:"Selector title"}),e(b,{children:"Selector description"}),e(T,{text:"Form label"}),e(x,{children:"Filter label"}),e(y,{children:"Caution message"}),e(w,{children:"Warning message"}),e($,{children:"This long description is rendered through the two-line ellipsis component so its clipping behavior can be checked in Storybook."})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: '1rem',
    maxWidth: '24rem'
  }}>\r
            <CommonText TextTag='p' fontSize='body' fontWeight='bold'>\r
                Common body text\r
            </CommonText>\r
            <SearchBarText>Search label</SearchBarText>\r
            <SelectorTitleText>Selector title</SelectorTitleText>\r
            <SelectorText>Selector description</SelectorText>\r
            <FormLabelText text='Form label' />\r
            <FilterLabelTextBox>Filter label</FilterLabelTextBox>\r
            <CautionText>Caution message</CautionText>\r
            <WarningText>Warning message</WarningText>\r
            <TwoLinesEllipsis>\r
                This long description is rendered through the two-line\r
                ellipsis component so its clipping behavior can be checked in\r
                Storybook.\r
            </TwoLinesEllipsis>\r
        </div>
}`,...i.parameters?.docs?.source}}};const X=["All"];export{i as All,X as __namedExportsOrder,V as default};
