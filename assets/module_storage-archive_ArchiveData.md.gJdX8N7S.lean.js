import{d as o,am as A,l as D,o as g,c as y,m as h,t as C,I as t,w as p,E as u,a as k,U as B}from"./chunks/framework.WU9gZgzV.js";class v{constructor(s){this.dataExpire=0,this.storage=s}get key(){if(!this.archiveKey)throw new Error(`not allow key = "${this.archiveKey}"`);return this.archiveKey}init(s){const{key:i="",dataExpire:a=0}=s;if(!i)throw new Error(`not allow key = "${i}"`);this.archiveKey=i,this.dataExpire=a}createTempRow(){return JSON.stringify({expireAt:0,data:null})}get(){let s=null;try{s=JSON.parse(this.storage.getItem(this.key))}catch(a){console.error(a)}return s||(s=JSON.parse(this.createTempRow())),s.expireAt<this.nowTime()?null:s}set(s){const i=this.nowExpireAt();this.storage.setItem(this.key,JSON.stringify({expireAt:i,data:s}))}clear(){this.storage.removeItem(this.key)}clearByExpired(){const s=this.get();s?this.storage.setItem(this.key,JSON.stringify(s)):this.storage.removeItem(this.key)}nowTime(){return Date.now()}nowExpireAt(){return this.nowTime()+this.dataExpire}}const m=h("div",null,"3초 동안 저장합니다.",-1),_=o({__name:"ExampleArchiveData",setup(e){const s=A({foo:"",bar:0,savedAt:0});let i;const a=()=>{i.set({foo:new Date().toLocaleString(),bar:Math.round(Math.random()*999999),savedAt:Date.now()}),l()},c=()=>{i.clear(),l()},E=()=>{i.clearByExpired(),l()},l=()=>{const{data:r}=i.get()||{},{foo:d="",bar:n=0,savedAt:F=0}=r||{};s.foo=d,s.bar=n,s.savedAt=F};return D(()=>{i=new v(typeof window<"u"?window.localStorage:null),i.init({key:"my-storage-key",dataExpire:1e3*3}),E()}),(r,d)=>{const n=u("el-button");return g(),y("div",null,[m,h("div",null,C(s),1),t(n,{onClick:a},{default:p(()=>[k("save")]),_:1}),t(n,{onClick:E},{default:p(()=>[k("update expired")]),_:1}),t(n,{onClick:c},{default:p(()=>[k("clear")]),_:1})])}}}),f=h("h1",{id:"archivedata",tabindex:"-1"},[k("ArchiveData "),h("a",{class:"header-anchor",href:"#archivedata","aria-label":'Permalink to "ArchiveData"'},"​")],-1),w=h("p",null,"로컬 보관소(로컬 스토리지) 데이터 저장과 expire 지원.",-1),x=B("",1),M=JSON.parse('{"title":"ArchiveData","description":"","frontmatter":{},"headers":[],"relativePath":"module/storage-archive/ArchiveData.md","filePath":"module/storage-archive/ArchiveData.md"}'),b={name:"module/storage-archive/ArchiveData.md"},T=Object.assign(b,{setup(e){return(s,i)=>(g(),y("div",null,[f,w,t(_),x]))}});export{M as __pageData,T as default};
