import{d as g,r as n,a as r,o as v,c as C,w as t,q as d,n as i,e as a,b,t as V,m as k}from"./index.42c7a497.js";const y=d("span",null,"This is a message",-1),w={class:"dialog-footer"},B=g({__name:"Dialog",props:{options:{type:Object,required:!0}},setup(u,{expose:p}){const o=n(!0),m=n(!1),f=()=>{};return p({loading:m}),(c,e)=>{const l=r("el-button"),_=r("el-dialog");return v(),C(_,k({modelValue:o.value,"onUpdate:modelValue":e[2]||(e[2]=s=>o.value=s),title:"Tips",width:"30%"},u.options,{"before-close":f}),{footer:t(()=>[d("span",w,[i(l,{onClick:e[0]||(e[0]=s=>o.value=!1)},{default:t(()=>[a("Cancel")]),_:1}),i(l,{type:"primary",onClick:e[1]||(e[1]=s=>o.value=!1)},{default:t(()=>[a(" Confirm ")]),_:1})])]),default:t(()=>[y,b(c.$slots,"default",{},()=>[a(V("\u6309\u94AE"))])]),_:3},16,["modelValue"])}}});export{B as _};