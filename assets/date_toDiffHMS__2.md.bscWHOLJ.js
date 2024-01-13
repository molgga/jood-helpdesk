import{t as g,a as k}from"./chunks/toLeadingTime.jRHSut5j.js";import{d as u,am as _,k as y,l as C,_ as f,E as F,o as d,c as r,m as h,t as o,I as c,w as m,a as D,U as E}from"./chunks/framework.WU9gZgzV.js";import"./chunks/isNumber.pnWU5ZW6.js";const B=(s,i)=>{const t=g(s,i),l=t.hour,e=t.minute%60,a=t.second%60;return{hour:l,minute:e,second:a}},v=u({setup(){const s=new Date;s.setHours(24,0,0,0);const i=_({hour:0,minute:0,second:0}),t=y(()=>{const{hour:a,minute:n,second:p}=i;return{result:`${k(a)}시 ${k(n)}분 ${k(p)}초`}}),l=()=>{e()},e=()=>{const{hour:a,minute:n,second:p}=B(Date.now(),s.getTime());i.hour=a,i.minute=n,i.second=p};return C(()=>{e()}),{state:i,viewState:t,onExecute:l}}}),S={class:"to-diff-hms"},A={class:"print-state"},b={class:"bside"},T={class:"result"},H={class:"aside"},M={class:"real-state"};function x(s,i,t,l,e,a){const n=F("el-button");return d(),r("div",S,[h("div",A,[h("div",b,[h("div",T,o(s.viewState.result),1)]),h("div",H,[c(n,{onClick:s.onExecute},{default:m(()=>[D("👆 오늘 자정까지 남은 시간은?")]),_:1},8,["onClick"])])]),h("div",M,o(s.state),1)])}const $=f(v,[["render",x],["__scopeId","data-v-349d716a"]]),w=E(`<h1 id="todiffhms-두개의-시간-차이" tabindex="-1">toDiffHMS - 두개의 시간 차이 <a class="header-anchor" href="#todiffhms-두개의-시간-차이" aria-label="Permalink to &quot;toDiffHMS - 두개의 시간 차이&quot;">​</a></h1><p>💡 <code>09시 12분 22초 남았습니다</code>, <code>이제 곧 종료 됩니다</code></p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toDiffHMS</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(대상시간, 비교시간);</span></span>
<span class="line highlighted"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toDiffHMS</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Date.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">now</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(), </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1660295996286</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// { hour: 11, minute: 2, second: 33 }</span></span></code></pre></div><h2 id="예제" tabindex="-1">예제 <a class="header-anchor" href="#예제" aria-label="Permalink to &quot;예제&quot;">​</a></h2>`,4),P=E(`<p>아래 코드는 위 예제의 일부 입니다. 버튼을 클릭해서 <code>execute</code> 를 실행해 보세요.</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> midnight</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Date</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">midnight.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setHours</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">24</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> execute</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">hour</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">minute</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">second</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> toDiffHMS</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Date.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">now</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(), midnight.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getTime</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">());</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div>`,2),O=JSON.parse('{"title":"toDiffHMS - 두개의 시간 차이","description":"","frontmatter":{},"headers":[],"relativePath":"date/toDiffHMS__2.md","filePath":"date/toDiffHMS__2.md"}'),V={name:"date/toDiffHMS__2.md"},R=Object.assign(V,{setup(s){return(i,t)=>(d(),r("div",null,[w,c($),P]))}});export{O as __pageData,R as default};