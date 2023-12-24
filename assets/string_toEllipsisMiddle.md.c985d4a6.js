import{_ as s,o as l,c as a,S as o}from"./chunks/framework.27f3689a.js";const F=JSON.parse('{"title":"toEllipsisMiddle","description":"","frontmatter":{},"headers":[],"relativePath":"string/toEllipsisMiddle.md","filePath":"string/toEllipsisMiddle.md"}'),n={name:"string/toEllipsisMiddle.md"},p=o(`<h1 id="toellipsismiddle" tabindex="-1">toEllipsisMiddle <a class="header-anchor" href="#toellipsismiddle" aria-label="Permalink to &quot;toEllipsisMiddle&quot;">​</a></h1><p>지정된 소스 문자열이 기준 수를 넘어가면 좌, 우로 잘라내고 사이에 대체 문자열을 삽입합니다.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">toEllipsisEnd</span><span style="color:#A6ACCD;">(소스 문자열</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> 잘라낼 기준 수</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> 잘라낸 문자열 사이에 들어갈 문자열)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">toEllipsisMiddle</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://developers.google.com/web/fundamentals/architecture/app-shell</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">30</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// &quot;https://develop...cture/app-shell&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">toEllipsisMiddle</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">01234567890</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">6</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// &quot;012...789&quot;</span></span>
<span class="line"><span style="color:#82AAFF;">toEllipsisMiddle</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">01234567890</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// &quot;0123456789&quot;</span></span>
<span class="line"><span style="color:#82AAFF;">toEllipsisMiddle</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">01234567890</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">11</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// &quot;0123456789&quot;</span></span></code></pre></div>`,4),t=[p];function e(c,r,i,y,D,d){return l(),a("div",null,t)}const A=s(n,[["render",e]]);export{F as __pageData,A as default};