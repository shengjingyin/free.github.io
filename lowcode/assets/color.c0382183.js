import{d as f,f as c,a as i,o as g,c as d,u as m,C as v}from"./index.42c7a497.js";const k=f({__name:"color",props:{select:{type:Object,require:!0},config:{type:Object,require:!0},group:String},setup(l){const e=l,r=c(()=>{var o;return(o=e.config)==null?void 0:o.key}),n=()=>e.group?e.select[e.group]:e.select.options[r.value]!==void 0?e.select.options:e.select,s=c({get:()=>n()[r.value],set:o=>{const t=n();t[r.value]=o}}),a=["#ff4500","#ff8c00","#ffd700","#90ee90","#00ced1","#1e90ff","#c71585","rgba(255, 69, 0, 0.68)","rgb(255, 120, 0)","hsv(51, 100, 98)","hsva(120, 40, 94, 0.5)","hsl(181, 100%, 37%)","hsla(209, 100%, 56%, 0.73)","#c7158577"];return(o,t)=>{const u=i("el-color-picker");return g(),d(u,{modelValue:m(s),"onUpdate:modelValue":t[0]||(t[0]=p=>v(s)?s.value=p:null),"show-alpha":"",predefine:a},null,8,["modelValue"])}}});export{k as default};