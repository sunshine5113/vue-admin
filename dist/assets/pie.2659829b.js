import{d as e,C as a,q as s,M as r,x as o,y as t,o as l,c as m,k as i,p as n}from"./vendor.910582b6.js";import{i as d}from"./install.4bf805dc.js";import{u,cy as p,cx as v,cw as c,cv as f}from"./install.f743767a.js";import{d as b}from"./install.d08ad8ea.js";import{i as j}from"./install.7215798d.js";import{i as y}from"./install.f56d6496.js";import"./LegendVisualProvider.84b89ceb.js";import"./createListSimply.02618497.js";import"./installCommon.e6fb8a9d.js";import"./sliderMove.9fa02ce2.js";import"./cursorHelper.990d559a.js";const h={title:{text:"南丁格尔玫瑰图",subtext:"纯属虚构",left:"center"},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{left:"center",top:"bottom",data:["rose1","rose2","rose3","rose4","rose5","rose6","rose7","rose8"]},toolbox:{show:!0,feature:{mark:{show:!0},dataView:{show:!0,readOnly:!1},restore:{show:!0},saveAsImage:{show:!0}}},series:[{name:"半径模式",type:"pie",radius:[20,140],center:["25%","50%"],roseType:"radius",itemStyle:{borderRadius:5},label:{show:!1},emphasis:{label:{show:!0}},data:[{value:40,name:"rose1"},{value:33,name:"rose2"},{value:28,name:"rose3"},{value:22,name:"rose4"},{value:20,name:"rose5"},{value:15,name:"rose6"},{value:12,name:"rose7"},{value:10,name:"rose8"}]},{name:"面积模式",type:"pie",radius:[20,140],center:["75%","50%"],roseType:"area",itemStyle:{borderRadius:5},data:[{value:30,name:"rose1"},{value:28,name:"rose2"},{value:26,name:"rose3"},{value:24,name:"rose4"},{value:22,name:"rose5"},{value:20,name:"rose6"},{value:18,name:"rose7"},{value:16,name:"rose8"}]}]};var w=e({setup(){const e=a(null);let o=null;return s((()=>{u([v,c,b,d,j,y,f]),o=p(e.value),o.setOption(h),r("resize",(()=>o.resize()))})),{dom:e}}});const x=n();o("data-v-3434a735");const g={class:"layout-container"},S={ref:"dom",class:"chart"};t();const k=x(((e,a,s,r,o,t)=>(l(),m("div",g,[i("div",S,null,512)]))));w.render=k,w.__scopeId="data-v-3434a735";export default w;
