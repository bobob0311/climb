import{t as n}from"./iframe-DwRLCFzj.js";function l({colors:t,colorString:o}){const[e,r]=o.split("-");return t[e][r]}function i({fontSize:t="label",fontWeight:o="regular",color:e="grey-100",lineHeight:r=1}){return`
        color: ${l({colors:n.colors,colorString:e})};
        font-size: ${n.typography.fontSize[t]};
        font-weight: ${n.typography.fontWeight[o]};
        line-height: ${r};
    `}export{i as c,l as g};
