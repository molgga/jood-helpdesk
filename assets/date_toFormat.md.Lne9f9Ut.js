import{_ as s,c as i,o as a,U as t}from"./chunks/framework.WU9gZgzV.js";const o=JSON.parse('{"title":"toFormat","description":"","frontmatter":{},"headers":[],"relativePath":"date/toFormat.md","filePath":"date/toFormat.md"}'),h={name:"date/toFormat.md"},k=t(`<h1 id="toformat" tabindex="-1">toFormat <a class="header-anchor" href="#toformat" aria-label="Permalink to &quot;toFormat&quot;">​</a></h1><p>지정된 시간을 지정된 옵션의 포맷으로 변경합니다.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toFormat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(시간, {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  [format </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;YYYY-MM-DD hh:mm:ss&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]: at 정보를 변경할 문자 </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">포맷</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (예: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">YYYY</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">MM</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">DD</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> AA</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> hh </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2020</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">01</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">01</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 오전 12시)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  [alternative </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]: at 정보가 invalid 할 때 대체 문자</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  [multiple </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]: at 의 </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">곱셈</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (예: 초 단위로 다루는 at 을 밀리세컨드로 반환하려면 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 지정)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  [labelDays </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;일&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;월&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;화&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;수&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;목&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;금&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;토&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]]: 요일 처리 문자</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> at1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1553146437000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// new Date(&quot;2019-03-21 14:33:57&quot;).getTime();</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> at2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1553146437</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// unixtime</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toFormat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(at1); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &quot;2019-03-21 14:33:57&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toFormat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(at1, { format: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;YYYY-MM-DD(d)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &quot;2019-03-21(목)&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toFormat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(at1, { format: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;hh:mm:ss YYYY/MM/DD&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &quot;14:33:57 2019/03/21&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toFormat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(at2, { multiple: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &quot;2019-03-21 14:33:57&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toFormat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, { alternative: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Unknown&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &quot;Unknown&quot;</span></span></code></pre></div>`,4),n=[k];function l(p,e,E,r,d,F){return a(),i("div",null,n)}const y=s(h,[["render",l]]);export{o as __pageData,y as default};