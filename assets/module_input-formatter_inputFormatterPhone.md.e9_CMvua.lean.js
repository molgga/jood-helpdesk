import{c as B}from"./chunks/createInputFormatter.32O95VtA.js";import{d as f,G as _,am as D,l as A,o as y,c as o,m as t,p as l,t as v,_ as q,I as P,a as F,U as x}from"./chunks/framework.WU9gZgzV.js";const I=()=>{const{setFormatter:e,setElement:k,getValue:a,setValue:s,handleKeydown:p,handleInput:n,onUpdated:h}=B({});return e((c,i)=>{const E=c||"",d=/\-/.test(E),g=d?13:11,u=d?12:10,m=g<=E.length&&(i===void 0||u<=(i==null?void 0:i.length))?/(\d{0,3})(\d{0,4})(\d{0,4})/:/(\d{0,3})(\d{0,3})(\d{0,4})/;let r=E.replace(/[^0-9]/g,"").replace(m,"$1-$2-$3").replace(/-+$/g,"");return(i==null?void 0:i.length)===g&&r.split("-").some(C=>4<C.length)&&(r=i),r}),{getValue:a,setValue:s,setElement:k,handleKeydown:p,handleInput:n,onUpdated:h}},b=["value"],w=f({__name:"ExamplePhone",setup(e){const k=_(null),a=D({myValue:""}),s=I();return A(()=>{s.setElement(k.value),s.setValue(a.myValue),s.onUpdated(p=>{a.myValue=p})}),(p,n)=>(y(),o("div",null,[t("input",{class:"my-input",inputmode:"numeric",maxlength:"13",value:l(s).getValue(),onKeydown:n[0]||(n[0]=(...h)=>l(s).handleKeydown&&l(s).handleKeydown(...h)),onInput:n[1]||(n[1]=(...h)=>l(s).handleInput&&l(s).handleInput(...h))},null,40,b),t("div",null,v(a),1)]))}}),T=q(w,[["__scopeId","data-v-078dae1e"]]),V=t("h1",{id:"input-formatter",tabindex:"-1"},[F("input-formatter "),t("a",{class:"header-anchor",href:"#input-formatter","aria-label":'Permalink to "input-formatter"'},"​")],-1),N=t("h2",{id:"inputformatterphone",tabindex:"-1"},[F("inputFormatterPhone "),t("a",{class:"header-anchor",href:"#inputformatterphone","aria-label":'Permalink to "inputFormatterPhone"'},"​")],-1),R=x("",1),L=JSON.parse('{"title":"input-formatter","description":"","frontmatter":{},"headers":[],"relativePath":"module/input-formatter/inputFormatterPhone.md","filePath":"module/input-formatter/inputFormatterPhone.md"}'),S={name:"module/input-formatter/inputFormatterPhone.md"},j=Object.assign(S,{setup(e){return(k,a)=>(y(),o("div",null,[V,N,P(T),R]))}});export{L as __pageData,j as default};
