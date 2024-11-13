import{_ as s,c as i,o as a,U as n}from"./chunks/framework.WU9gZgzV.js";const F=JSON.parse('{"title":"toMasking","description":"","frontmatter":{},"headers":[],"relativePath":"string/toMasking.md","filePath":"string/toMasking.md"}'),k={name:"string/toMasking.md"},h=n(`<h1 id="tomasking" tabindex="-1">toMasking <a class="header-anchor" href="#tomasking" aria-label="Permalink to &quot;toMasking&quot;">​</a></h1><p>문자열에 마스킹 처리를 합니다.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toMasking</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(소스 문자열,{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  [mask </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;*&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]: 마스킹 문자열</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  [direction </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;end&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]: 마스킹 처리 부분 </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &#39;start&#39;(앞) | &#39;middle&#39;(중간) | &#39;end&#39;(끝) | &#39;justify&#39;(양쪽)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toMasking</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;a&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &#39;a&#39;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toMasking</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;ab&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &#39;a*&#39;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toMasking</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;abc&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &#39;a**&#39;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toMasking</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;abcdefgh&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &#39;****efgh&#39;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toMasking</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;ab&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, { direction: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;middle&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &#39;a*&#39;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toMasking</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;abc&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, { direction: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;middle&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &#39;a*c&#39;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toMasking</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;abcdefgh&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, { direction: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;middle&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &#39;a******h&#39;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toMasking</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;ab&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, { direction: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;start&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &#39;*b&#39;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toMasking</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;abc&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, { direction: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;start&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &#39;*bc&#39;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toMasking</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;abcdefgh&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, { direction: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;start&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &#39;****efgh&#39;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toMasking</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;ab&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, { direction: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;justify&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &#39;a*&#39;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toMasking</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;abc&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, { direction: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;justify&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &#39;*b*&#39;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toMasking</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;abcdefgh&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, { direction: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;justify&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &#39;**cdef**&#39;</span></span></code></pre></div>`,4),t=[h];function l(p,e,E,d,r,g){return a(),i("div",null,t)}const c=s(k,[["render",l]]);export{F as __pageData,c as default};