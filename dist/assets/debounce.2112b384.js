import{_ as u,d as i,aU as l,E as n,r as d,B as v,o as s,c as p,a as c,C as f,v as m,w as b,f as h}from"./index.d6404b28.js";const k={mounted(e,t){if(typeof t.value!="function"){console.error("callback must be a function");return}let o=null;e.__handleClick__=function(a){o&&clearInterval(o),o=setTimeout(()=>{t.value()},200)},e.addEventListener("click",e.__handleClick__)},beforeUnmount(e){e.removeEventListener("click",e.__handleClick__)}};const y=i({directives:{Debounce:k},setup(){const e=t=>function(){console.log(t),n({type:"success",message:"\u6B63\u5728\u62C9\u53D6\u6570\u636E"})};return l(()=>{n.closeAll()}),{getData:e}}}),C={class:"layout-container"},x={class:"layout-container-table"},E={class:"box"},B=h("\u9632\u6296\u6309\u94AE");function D(e,t,o,a,g,$){const r=d("el-button"),_=v("debounce");return s(),p("div",C,[c("div",x,[c("div",E,[f((s(),m(r,{type:"primary"},{default:b(()=>[B]),_:1})),[[_,e.getData(123)]])])])])}var U=u(y,[["render",D],["__scopeId","data-v-361793dd"]]);export{U as default};
