import{d as O,v as S,r as B,f as v,k as I,a as c,o as N,c as M,w as n,n as a,u as d,e as g,m as T,g as j,l as b}from"./index.42c7a497.js";import{d as A}from"./vuedraggable.umd.d91527e9.js";import{C as J,s as P,g as U}from"./comp-wrap.12e7cace.js";import{e as q}from"./index.da5474a2.js";import{u as K}from"./lowcode.bca37bc6.js";import{_ as L}from"./_plugin-vue_export-helper.cdc0426e.js";const R=O({__name:"index",props:{element:{type:Object,required:!0}},setup(i){const u=i,{idMap:x}=S(K()),o=B({}),h=v(()=>u.element.options);q.on(u.element.model+"event",()=>{});const f=v({get(){return u.element.children},set(){}});I(o,()=>{console.log("formValue",o.value)},{deep:!0});const _={"free-input":{label:"\u8F93\u5165\u6846"}};let p;const y=e=>(p=U(e.component),{...e,options:{...e.options},i:String(x.value.total+1),model:e.component+"_"+p,inForm:!0}),C=()=>{},D=e=>{var s;const l=(s=e.dataTransfer)==null?void 0:s.getData("element");if(l){const t=JSON.parse(l);if(console.log("\u{1F680} ~ \u5BB9\u5668\uFF1A\u653E\u7F6E",t),_.hasOwnProperty(t.component)){b.exports.extend(t,b.exports.cloneDeep(_[t.component]));const r=y(t);o.value[r.model]="",f.value.push(r),P(r.component,p)}}},F=e=>{e.preventDefault()},V=()=>{alert(JSON.stringify(o.value,null,2))},k=()=>{Object.keys(o.value).forEach(e=>{o.value[e]=null})};return(e,l)=>{const s=c("el-form-item"),t=c("el-button"),r=c("el-form");return N(),M(r,T({class:"form drop scrollbar",ref:"form","label-width":"100px"},d(h),{onSubmit:l[0]||(l[0]=j(()=>{},["prevent"])),onDragleave:C,onDrop:D,onDragover:F}),{default:n(()=>[a(d(A),{list:d(f),"item-key":"model","ghost-class":"ghost","chosen-class":"chosenClass",animation:"300",handle:".el-form-item__label"},{item:n(({element:m,index:w})=>[a(s,{class:"item",label:m.label,prop:m.model},{default:n(()=>[a(J,{parent:i.element,element:m,index:w,modelValue:o.value[m.model],"onUpdate:modelValue":E=>o.value[m.model]=E},null,8,["parent","element","index","modelValue","onUpdate:modelValue"])]),_:2},1032,["label","prop"])]),_:1},8,["list"]),a(s,null,{default:n(()=>[a(t,{type:"primary",onClick:V},{default:n(()=>[g("\u63D0\u4EA4")]),_:1}),a(t,{onClick:k},{default:n(()=>[g("\u91CD\u7F6E")]),_:1})]),_:1})]),_:1},16)}}});const Y=L(R,[["__scopeId","data-v-d5a3555f"]]);export{Y as default};