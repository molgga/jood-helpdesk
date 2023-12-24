import{_ as s,o as a,c as n,S as l}from"./chunks/framework.27f3689a.js";const i=JSON.parse('{"title":"toKoreanLabelNumber","description":"","frontmatter":{},"headers":[],"relativePath":"number/toKoreanLabelNumber.md","filePath":"number/toKoreanLabelNumber.md"}'),o={name:"number/toKoreanLabelNumber.md"},p=l(`<h1 id="tokoreanlabelnumber" tabindex="-1">toKoreanLabelNumber <a class="header-anchor" href="#tokoreanlabelnumber" aria-label="Permalink to &quot;toKoreanLabelNumber&quot;">​</a></h1><p>숫자를 한글/한국식 표기로 반환합니다.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">toKoreanLabelNumber</span><span style="color:#A6ACCD;">(소스</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">labelType</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">korean</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> 숫자 표기 방식 </span><span style="color:#676E95;font-style:italic;">// &#39;korean&#39;(한국어) | &#39;number&#39;(숫자)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span></code></pre></div><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">toKoreanLabelNumber</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// &#39;&#39;</span></span>
<span class="line"><span style="color:#82AAFF;">toKoreanLabelNumber</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">123</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// &#39;일백이십삼&#39;</span></span>
<span class="line"><span style="color:#82AAFF;">toKoreanLabelNumber</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1234</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// &#39;일천이백삼십사&#39;</span></span>
<span class="line"><span style="color:#82AAFF;">toKoreanLabelNumber</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">12345</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// &#39;일만이천삼백사십오&#39;</span></span>
<span class="line"><span style="color:#82AAFF;">toKoreanLabelNumber</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">20000</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// &#39;이만&#39;</span></span>
<span class="line"><span style="color:#82AAFF;">toKoreanLabelNumber</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">5830000</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// &#39;오백팔십삼만&#39;</span></span>
<span class="line"><span style="color:#82AAFF;">toKoreanLabelNumber</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">132000000</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// &#39;일억삼천이백만&#39;</span></span>
<span class="line"><span style="color:#82AAFF;">toKoreanLabelNumber</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">302003000</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// &#39;삼억이백만삼천&#39;</span></span></code></pre></div><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">toKoreanLabelNumber</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">123</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">labelType</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">number</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// &#39;1백2십3&#39;</span></span>
<span class="line"><span style="color:#82AAFF;">toKoreanLabelNumber</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1234</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">labelType</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">number</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// &#39;1천2백3십4&#39;</span></span>
<span class="line"><span style="color:#82AAFF;">toKoreanLabelNumber</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">12345</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">labelType</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">number</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// &#39;1만2천3백4십5&#39;</span></span>
<span class="line"><span style="color:#82AAFF;">toKoreanLabelNumber</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">20000</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">labelType</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">number</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// &#39;2만&#39;</span></span>
<span class="line"><span style="color:#82AAFF;">toKoreanLabelNumber</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">5830000</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">labelType</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">number</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// &#39;5백8십3만&#39;</span></span>
<span class="line"><span style="color:#82AAFF;">toKoreanLabelNumber</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">132000000</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">labelType</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">number</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// &#39;1억3천2백만&#39;</span></span>
<span class="line"><span style="color:#82AAFF;">toKoreanLabelNumber</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">302003000</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">labelType</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">number</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// &#39;3억2백만3천&#39;</span></span></code></pre></div>`,5),e=[p];function t(r,c,y,D,C,A){return a(),n("div",null,e)}const b=s(o,[["render",t]]);export{i as __pageData,b as default};