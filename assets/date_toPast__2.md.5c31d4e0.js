import{a as D,i as x,t as w}from"./chunks/toLeadingTime.043432d4.js";import{d as Y,a0 as T,j as S,_ as P,o as u,c as A,k as C,t as b,F as E,G as j,p as k,m as H,J as f,l as g,S as v}from"./chunks/framework.27f3689a.js";const $=(n,s={})=>{const{multiple:e=1,alternative:r="",format:t="YYYY-MM-DD hh:mm:ss",labelDays:p=["일","월","화","수","목","금","토"]}=s;let a=r;if(n){const o=x(n)?new Date(n*e):new Date(n);if(!o||isNaN(o.valueOf()))return a;const d=o.getFullYear(),h=o.getMonth()+1,m=o.getDate(),_=o.getDay(),l=o.getHours(),i=l<13?l:l-12,y=o.getMinutes(),F=o.getSeconds(),M=l<13?"오전":"오후";a=t,a=a.replace(/YYYY/,d.toString()),a=a.replace(/MM/,D(h)),a=a.replace(/DD/,D(m)),/AA/.test(a)===!0?(a=a.replace(/AA/,M),a=a.replace(/hh/,D(i))):a=a.replace(/hh/,D(l)),/d/.test(a)===!0&&(a=a.replace(/d/,p[_])),a=a.replace(/mm/,D(y)),a=a.replace(/ss/,D(F))}return a},q=(n,s,e={})=>{const{justMax:r=60,minuteMax:t=3600,hourMax:p=86400,dayMax:a=2592e3,justLabel:o="방금 전",minuteLabel:d="분 전",hourLabel:h="시간 전",dayLabel:m="일 전",format:_="YYYY-MM-DD hh:mm:ss",alternative:l="Unknown",overThenJust:i=!0}=e;if(!s||!n)return l;const y=n&&n.constructor===String?new Date(n).getTime():n,F=s&&s.constructor===String?new Date(s).getTime():s;if(!i&&y<=F)return l;const M=i?Math.min(y,F):F,c=w(M,y);return c.second<r?o:c.second<t?`${c.minute}${d}`:c.second<p?`${c.hour}${h}`:c.second<=a?`${c.day}${m}`:$(s,{format:_})},N=()=>{const n=[];return n.push((()=>new Date)()),n.push((()=>{const s=new Date;return s.setMinutes(s.getMinutes()-1),s})()),n.push((()=>{const s=new Date;return s.setMinutes(s.getMinutes()-5),s})()),n.push((()=>{const s=new Date;return s.setMinutes(s.getMinutes()-59),s})()),n.push((()=>{const s=new Date;return s.setHours(s.getHours()-1),s})()),n.push((()=>{const s=new Date;return s.setHours(s.getHours()-24),s})()),n.push((()=>{const s=new Date;return s.setHours(s.getHours()-24*7),s})()),n.push((()=>{const s=new Date;return s.setHours(s.getHours()-24*30),s})()),n.push((()=>{const s=new Date;return s.setHours(s.getHours()-24*45),s})()),n.push((()=>null)()),n.push((()=>{const s=new Date;return s.setHours(s.getHours()+24),s})()),n},O=Y({props:{optionSample:{type:Number,default:1},sampleOption:{type:Object,default:()=>({})}},setup(n){const s=N(),e=T({nowAt:0,nowLabel:"",resultList:[]}),r=()=>{t()},t=()=>{const p=new Date;e.nowAt=p.getTime(),e.nowLabel=p.toLocaleString(),e.resultList=[],s.forEach(a=>{e.resultList.push({target:(a==null?void 0:a.toLocaleString())||"null",result:q(e.nowAt,a==null?void 0:a.getTime(),n.sampleOption)})})};return S(()=>{t()}),{state:e,onExecute:r}}});const I=n=>(k("data-v-54aac61c"),n=n(),H(),n),J={class:"to-past"},V={class:"now-label"},U={class:"sample-list"},B={class:"target"},R=I(()=>C("div",{class:"spacer"},null,-1)),G={class:"result"};function z(n,s,e,r,t,p){return u(),A("div",J,[C("div",V,b(n.state.nowLabel),1),C("div",U,[(u(!0),A(E,null,j(n.state.resultList,(a,o)=>(u(),A("div",{key:o,class:"sample-item"},[C("div",B,b(a.target),1),R,C("div",G,b(a.result),1)]))),128))])])}const L=P(O,[["render",z],["__scopeId","data-v-54aac61c"]]),K={justMax:60,minuteMax:3600,hourMax:86400,dayMax:60*60*24*30,justLabel:"방금 전 👍",minuteLabel:"분 전 😺",hourLabel:"시간 전 😎",dayLabel:"일 전 😴",format:"YYYY/MM/DD hh:mm:ss",alternative:"Unknown",overThenJust:!0},Q={justMax:60*5,minuteMax:3600,hourMax:86400,dayMax:60*60*24*7,justLabel:"방금 전 👍",minuteLabel:"분 전 😺",hourLabel:"시간 전 😎",dayLabel:"일 전 😴",format:"YYYY/MM/DD hh:mm:ss",alternative:"Unknown",overThenJust:!1},W=v(`<h1 id="topast-지나간-시간" tabindex="-1">toPast - 지나간 시간 <a class="header-anchor" href="#topast-지나간-시간" aria-label="Permalink to &quot;toPast - 지나간 시간&quot;">​</a></h1><p>💡 <code>방금 전</code>, <code>n분 전</code>, <code>n일 전</code>, <code>2022년 09월 01일</code></p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#82AAFF;">toPastAt</span><span style="color:#A6ACCD;">(대상시간</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> 비교시간</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> 옵션)</span><span style="color:#89DDFF;">;</span></span>
<span class="line highlighted"><span style="color:#82AAFF;">toPastAt</span><span style="color:#A6ACCD;">(Date</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">now</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1660295996286</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// &quot;방금 전&quot; || &quot;7일전&quot; ...</span></span></code></pre></div><h2 id="예제1" tabindex="-1">예제1 <a class="header-anchor" href="#예제1" aria-label="Permalink to &quot;예제1&quot;">​</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">justMax</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">60</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">minuteMax</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3600</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">hourMax</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">86400</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">dayMax</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">60</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">60</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">24</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">30</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">justLabel</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">방금 전 👍</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">minuteLabel</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">분 전 😺</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">hourLabel</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">시간 전 😎</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">dayLabel</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">일 전 😴</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">format</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">YYYY/MM/DD hh:mm:ss</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">alternative</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Unknown</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">overThenJust</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span></code></pre></div><p>위 옵션은 이런 의미를 갖습니다.</p><ul><li><code>justMax</code> 는 60초 미만 까지 <code>justLabel</code> 로 표시 합니다.</li><li><code>minuteMax</code> 는 3600초(1시간) 미만 까지 <code>minuteLabel</code> 로 표시 합니다.</li><li><code>dayMax</code> 는 2592000(30일) 까지 <code>dayLabel</code> 로 표시 합니다.</li><li><code>dayMax</code> 를 초과하면 <code>format</code> 로 표시 합니다.</li><li>날짜 형식이 잘못되었다면 <code>alternative</code> 로 표시 합니다.</li><li>지난 시간의 값인 target 시간이 오히려 from 보다 크다면 <code>justLabel</code> 로 표시할지, <code>alternative</code> 로 표시 할지를 결정합니다.</li></ul>`,7),X=v(`<h2 id="예제2" tabindex="-1">예제2 <a class="header-anchor" href="#예제2" aria-label="Permalink to &quot;예제2&quot;">​</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">justMax</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">60</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">minuteMax</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3600</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">hourMax</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">86400</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">dayMax</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">60</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">60</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">24</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">7</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">justLabel</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">방금 전 👍</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">minuteLabel</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">분 전 😺</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">hourLabel</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">시간 전 😎</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">dayLabel</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">일 전 😴</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">format</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">YYYY/MM/DD hh:mm:ss</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">alternative</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Unknown</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">overThenJust</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span></code></pre></div><p>위 <strong><code>예제1</code></strong> 과 대상 시간은 같습니다. 옵션에 따라 출력이 어떻게 달라지는지 확인해 보세요.</p>`,3),ns=JSON.parse('{"title":"toPast - 지나간 시간","description":"","frontmatter":{},"headers":[],"relativePath":"date/toPast__2.md","filePath":"date/toPast__2.md"}'),Z={name:"date/toPast__2.md"},os=Object.assign(Z,{setup(n){return(s,e)=>(u(),A("div",null,[W,f(L,{sampleOption:g(K)},null,8,["sampleOption"]),X,f(L,{sampleOption:g(Q)},null,8,["sampleOption"])]))}});export{ns as __pageData,os as default};