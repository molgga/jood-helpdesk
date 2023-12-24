import{a as D,i as x,t as w}from"./chunks/toLeadingTime.043432d4.js";import{d as Y,a0 as T,j as S,_ as P,o as u,c as A,k as C,t as b,F as E,G as j,p as k,m as H,J as f,l as g,S as v}from"./chunks/framework.27f3689a.js";const $=(n,s={})=>{const{multiple:e=1,alternative:r="",format:t="YYYY-MM-DD hh:mm:ss",labelDays:p=["일","월","화","수","목","금","토"]}=s;let a=r;if(n){const o=x(n)?new Date(n*e):new Date(n);if(!o||isNaN(o.valueOf()))return a;const d=o.getFullYear(),h=o.getMonth()+1,m=o.getDate(),_=o.getDay(),l=o.getHours(),i=l<13?l:l-12,y=o.getMinutes(),F=o.getSeconds(),M=l<13?"오전":"오후";a=t,a=a.replace(/YYYY/,d.toString()),a=a.replace(/MM/,D(h)),a=a.replace(/DD/,D(m)),/AA/.test(a)===!0?(a=a.replace(/AA/,M),a=a.replace(/hh/,D(i))):a=a.replace(/hh/,D(l)),/d/.test(a)===!0&&(a=a.replace(/d/,p[_])),a=a.replace(/mm/,D(y)),a=a.replace(/ss/,D(F))}return a},q=(n,s,e={})=>{const{justMax:r=60,minuteMax:t=3600,hourMax:p=86400,dayMax:a=2592e3,justLabel:o="방금 전",minuteLabel:d="분 전",hourLabel:h="시간 전",dayLabel:m="일 전",format:_="YYYY-MM-DD hh:mm:ss",alternative:l="Unknown",overThenJust:i=!0}=e;if(!s||!n)return l;const y=n&&n.constructor===String?new Date(n).getTime():n,F=s&&s.constructor===String?new Date(s).getTime():s;if(!i&&y<=F)return l;const M=i?Math.min(y,F):F,c=w(M,y);return c.second<r?o:c.second<t?`${c.minute}${d}`:c.second<p?`${c.hour}${h}`:c.second<=a?`${c.day}${m}`:$(s,{format:_})},N=()=>{const n=[];return n.push((()=>new Date)()),n.push((()=>{const s=new Date;return s.setMinutes(s.getMinutes()-1),s})()),n.push((()=>{const s=new Date;return s.setMinutes(s.getMinutes()-5),s})()),n.push((()=>{const s=new Date;return s.setMinutes(s.getMinutes()-59),s})()),n.push((()=>{const s=new Date;return s.setHours(s.getHours()-1),s})()),n.push((()=>{const s=new Date;return s.setHours(s.getHours()-24),s})()),n.push((()=>{const s=new Date;return s.setHours(s.getHours()-24*7),s})()),n.push((()=>{const s=new Date;return s.setHours(s.getHours()-24*30),s})()),n.push((()=>{const s=new Date;return s.setHours(s.getHours()-24*45),s})()),n.push((()=>null)()),n.push((()=>{const s=new Date;return s.setHours(s.getHours()+24),s})()),n},O=Y({props:{optionSample:{type:Number,default:1},sampleOption:{type:Object,default:()=>({})}},setup(n){const s=N(),e=T({nowAt:0,nowLabel:"",resultList:[]}),r=()=>{t()},t=()=>{const p=new Date;e.nowAt=p.getTime(),e.nowLabel=p.toLocaleString(),e.resultList=[],s.forEach(a=>{e.resultList.push({target:(a==null?void 0:a.toLocaleString())||"null",result:q(e.nowAt,a==null?void 0:a.getTime(),n.sampleOption)})})};return S(()=>{t()}),{state:e,onExecute:r}}});const I=n=>(k("data-v-54aac61c"),n=n(),H(),n),J={class:"to-past"},V={class:"now-label"},U={class:"sample-list"},B={class:"target"},R=I(()=>C("div",{class:"spacer"},null,-1)),G={class:"result"};function z(n,s,e,r,t,p){return u(),A("div",J,[C("div",V,b(n.state.nowLabel),1),C("div",U,[(u(!0),A(E,null,j(n.state.resultList,(a,o)=>(u(),A("div",{key:o,class:"sample-item"},[C("div",B,b(a.target),1),R,C("div",G,b(a.result),1)]))),128))])])}const L=P(O,[["render",z],["__scopeId","data-v-54aac61c"]]),K={justMax:60,minuteMax:3600,hourMax:86400,dayMax:60*60*24*30,justLabel:"방금 전 👍",minuteLabel:"분 전 😺",hourLabel:"시간 전 😎",dayLabel:"일 전 😴",format:"YYYY/MM/DD hh:mm:ss",alternative:"Unknown",overThenJust:!0},Q={justMax:60*5,minuteMax:3600,hourMax:86400,dayMax:60*60*24*7,justLabel:"방금 전 👍",minuteLabel:"분 전 😺",hourLabel:"시간 전 😎",dayLabel:"일 전 😴",format:"YYYY/MM/DD hh:mm:ss",alternative:"Unknown",overThenJust:!1},W=v("",7),X=v("",3),ns=JSON.parse('{"title":"toPast - 지나간 시간","description":"","frontmatter":{},"headers":[],"relativePath":"date/toPast__2.md","filePath":"date/toPast__2.md"}'),Z={name:"date/toPast__2.md"},os=Object.assign(Z,{setup(n){return(s,e)=>(u(),A("div",null,[W,f(L,{sampleOption:g(K)},null,8,["sampleOption"]),X,f(L,{sampleOption:g(Q)},null,8,["sampleOption"])]))}});export{ns as __pageData,os as default};