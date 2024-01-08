import{_ as s,c as i,o as a,U as t}from"./chunks/framework.WU9gZgzV.js";const y=JSON.parse('{"title":"toStringsByComma","description":"","frontmatter":{},"headers":[],"relativePath":"array/toStringsByComma.md","filePath":"array/toStringsByComma.md"}'),n={name:"array/toStringsByComma.md"},h=t(`<h1 id="tostringsbycomma" tabindex="-1">toStringsByComma <a class="header-anchor" href="#tostringsbycomma" aria-label="Permalink to &quot;toStringsByComma&quot;">​</a></h1><p>콤마(,) 문자열을 문자열 배열로 반환합니다.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toStringsByComma</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;1,2,3&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// [&#39;1&#39;,&#39;2&#39;,&#39;3&#39;]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toStringsByComma</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;1,,3&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// [&#39;1&#39;,&#39;3&#39;]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toStringsByComma</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;1,foo,bar&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// [&#39;1&#39;,&#39;foo&#39;, &#39;bar&#39;]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toStringsByComma</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;1,null,3&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// [&#39;1&#39;,&#39;null&#39;,&#39;3&#39;]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toStringsByComma</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;1,true,3&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// [&#39;1&#39;,&#39;true&#39;,&#39;3&#39;]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toStringsByComma</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;1,true,false&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// [&#39;1&#39;,&#39;true&#39;,&#39;false&#39;]</span></span></code></pre></div>`,3),l=[h];function k(p,e,r,o,E,d){return a(),i("div",null,l)}const m=s(n,[["render",k]]);export{y as __pageData,m as default};
