import{a as r,i as B,t as L}from"./chunks/toLeadingTime.eCwEVOTu.js";import{d as x,am as w,l as Y,_ as T,o as u,c as g,m as E,t as D,F as A,D as S,q as P,s as j,I as b,p as M,U as f}from"./chunks/framework.WU9gZgzV.js";const H=(a,s={})=>{const{multiple:e=1,alternative:k="",format:l="YYYY-MM-DD hh:mm:ss",labelDays:h=["일","월","화","수","목","금","토"]}=s;let i=k;if(a){const t=B(a)?new Date(a*e):new Date(a);if(!t||isNaN(t.valueOf()))return i;const y=t.getFullYear(),F=t.getMonth()+1,m=t.getDate(),_=t.getDay(),n=t.getHours(),c=n<13?n:n-12,o=t.getMinutes(),d=t.getSeconds(),C=n<13?"오전":"오후";i=l,i=i.replace(/YYYY/,y.toString()),i=i.replace(/MM/,r(F)),i=i.replace(/DD/,r(m)),/AA/.test(i)===!0?(i=i.replace(/AA/,C),i=i.replace(/hh/,r(c))):i=i.replace(/hh/,r(n)),/d/.test(i)===!0&&(i=i.replace(/d/,h[_])),i=i.replace(/mm/,r(o)),i=i.replace(/ss/,r(d))}return i},$=(a,s,e={})=>{const{justMax:k=60,minuteMax:l=3600,hourMax:h=86400,dayMax:i=2592e3,justLabel:t="방금 전",minuteLabel:y="분 전",hourLabel:F="시간 전",dayLabel:m="일 전",format:_="YYYY-MM-DD hh:mm:ss",alternative:n="Unknown",overThenJust:c=!0}=e;if(!s||!a)return n;const o=a&&a.constructor===String?new Date(a).getTime():a,d=s&&s.constructor===String?new Date(s).getTime():s;if(!c&&o<=d)return n;const C=c?Math.min(o,d):d,p=L(C,o);return p.second<k?t:p.second<l?`${p.minute}${y}`:p.second<h?`${p.hour}${F}`:p.second<=i?`${p.day}${m}`:H(s,{format:_})},q=()=>{const a=[];return a.push(new Date),a.push((()=>{const s=new Date;return s.setMinutes(s.getMinutes()-1),s})()),a.push((()=>{const s=new Date;return s.setMinutes(s.getMinutes()-5),s})()),a.push((()=>{const s=new Date;return s.setMinutes(s.getMinutes()-59),s})()),a.push((()=>{const s=new Date;return s.setHours(s.getHours()-1),s})()),a.push((()=>{const s=new Date;return s.setHours(s.getHours()-24),s})()),a.push((()=>{const s=new Date;return s.setHours(s.getHours()-24*7),s})()),a.push((()=>{const s=new Date;return s.setHours(s.getHours()-24*30),s})()),a.push((()=>{const s=new Date;return s.setHours(s.getHours()-24*45),s})()),a.push(null),a.push((()=>{const s=new Date;return s.setHours(s.getHours()+24),s})()),a},N=x({props:{optionSample:{type:Number,default:1},sampleOption:{type:Object,default:()=>({})}},setup(a){const s=q(),e=w({nowAt:0,nowLabel:"",resultList:[]}),k=()=>{l()},l=()=>{const h=new Date;e.nowAt=h.getTime(),e.nowLabel=h.toLocaleString(),e.resultList=[],s.forEach(i=>{e.resultList.push({target:(i==null?void 0:i.toLocaleString())||"null",result:$(e.nowAt,i==null?void 0:i.getTime(),a.sampleOption)})})};return Y(()=>{l()}),{state:e,onExecute:k}}}),O=a=>(P("data-v-54aac61c"),a=a(),j(),a),I={class:"to-past"},V={class:"now-label"},J={class:"sample-list"},U={class:"target"},R=O(()=>E("div",{class:"spacer"},null,-1)),z={class:"result"};function G(a,s,e,k,l,h){return u(),g("div",I,[E("div",V,D(a.state.nowLabel),1),E("div",J,[(u(!0),g(A,null,S(a.state.resultList,(i,t)=>(u(),g("div",{key:t,class:"sample-item"},[E("div",U,D(i.target),1),R,E("div",z,D(i.result),1)]))),128))])])}const v=T(N,[["render",G],["__scopeId","data-v-54aac61c"]]),K={justMax:60,minuteMax:3600,hourMax:86400,dayMax:60*60*24*30,justLabel:"방금 전 👍",minuteLabel:"분 전 😺",hourLabel:"시간 전 😎",dayLabel:"일 전 😴",format:"YYYY/MM/DD hh:mm:ss",alternative:"Unknown",overThenJust:!0},Q={justMax:60*5,minuteMax:3600,hourMax:86400,dayMax:60*60*24*7,justLabel:"방금 전 👍",minuteLabel:"분 전 😺",hourLabel:"시간 전 😎",dayLabel:"일 전 😴",format:"YYYY/MM/DD hh:mm:ss",alternative:"Unknown",overThenJust:!1},W=f("",7),X=f("",3),as=JSON.parse('{"title":"toPast - 지나간 시간","description":"","frontmatter":{},"headers":[],"relativePath":"date/toPast__2.md","filePath":"date/toPast__2.md"}'),Z={name:"date/toPast__2.md"},ts=Object.assign(Z,{setup(a){return(s,e)=>(u(),g("div",null,[W,b(v,{sampleOption:M(K)},null,8,["sampleOption"]),X,b(v,{sampleOption:M(Q)},null,8,["sampleOption"])]))}});export{as as __pageData,ts as default};
