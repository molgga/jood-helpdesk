import{i as m}from"./chunks/isNumber.pnWU5ZW6.js";import{c as B}from"./chunks/createInputFormatter.32O95VtA.js";import{d as f,G as A,am as D,l as _,o as u,c,m as p,p as r,a as d,I as g,w as o,t as v,E as b,_ as V,U as w}from"./chunks/framework.WU9gZgzV.js";const q=(h,k={})=>{if(!m(h))return h;const{fixed:t=0,replaceChar:i=","}=k,e=String(h),E=e.split(".");let a="",s="",n=E[0];n=Number(n).toFixed(1).replace(/\d(?=(\d{3})+\.)/g,`$&${i}`),n=n.substring(0,n.length-2);const l=Number(h)<0&&n==="0",y=/\./.test(e);if(y&&(s=E[1]),0<t){const F=s.length;if(F<t){const C=Array.from(Array(t-F)).map(()=>"0").join("");s=`${s}${C}`}else s=s.substring(0,t);a=`${n}.${s}`}else a=y?`${n}.${s}`:n;return l&&(a=`-${a}`),a},x=()=>{const{setFormatter:h,setElement:k,getValue:t,setValue:i,handleKeydown:e,handleInput:E,toNumber:a,onUpdated:s}=B({});return h(n=>q((n||"").replace(/[^\d]/g,""))),{getValue:t,setValue:i,setElement:k,handleKeydown:e,handleInput:E,toNumber:a,onUpdated:s}},I=["value"],N=f({__name:"ExampleKrw",setup(h){const k=A(null),t=D({myValue:0}),i=x(),e=a=>{const s=(Number(i.getValue().replace(/[^0-9]/g,""))+a).toString();i.setValue(s)},E=a=>{const s=Math.max(0,Number(i.getValue().replace(/[^0-9]/g,""))+a).toString();i.setValue(s)};return _(()=>{i.setElement(k.value),i.setValue(t.myValue.toString()),i.onUpdated(a=>{t.myValue=i.toNumber(a)})}),(a,s)=>{const n=b("el-button");return u(),c("div",null,[p("div",null,[p("input",{ref_key:"refInput",ref:k,class:"my-input",inputmode:"numeric",placeholder:"0",value:r(i).getValue(),onKeydown:s[0]||(s[0]=(...l)=>r(i).handleKeydown&&r(i).handleKeydown(...l)),onInput:s[1]||(s[1]=(...l)=>r(i).handleInput&&r(i).handleInput(...l))},null,40,I),d("   "),g(n,{onClick:s[2]||(s[2]=l=>e(1e3))},{default:o(()=>[d("+1000")]),_:1}),g(n,{onClick:s[3]||(s[3]=l=>E(-1e3))},{default:o(()=>[d("-1000")]),_:1})]),p("div",null,v(t),1)])}}}),K=V(N,[["__scopeId","data-v-18ee49aa"]]),S=p("h1",{id:"input-formatter",tabindex:"-1"},[d("input-formatter "),p("a",{class:"header-anchor",href:"#input-formatter","aria-label":'Permalink to "input-formatter"'},"​")],-1),$=p("h2",{id:"inputformatterkrw",tabindex:"-1"},[d("inputFormatterKrw "),p("a",{class:"header-anchor",href:"#inputformatterkrw","aria-label":'Permalink to "inputFormatterKrw"'},"​")],-1),M=w("",1),j=JSON.parse('{"title":"input-formatter","description":"","frontmatter":{},"headers":[],"relativePath":"module/input-formatter/inputFormatterKrw.md","filePath":"module/input-formatter/inputFormatterKrw.md"}'),P={name:"module/input-formatter/inputFormatterKrw.md"},L=Object.assign(P,{setup(h){return(k,t)=>(u(),c("div",null,[S,$,g(K),M]))}});export{j as __pageData,L as default};