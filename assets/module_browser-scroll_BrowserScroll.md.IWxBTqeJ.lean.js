import{B as y}from"./chunks/BrowserScroll.to6ndI4d.js";import{d as c,am as F,l as C,A as B,o as h,c as k,F as D,D as b,m as A,t as u,_ as v,I as _,U as e}from"./chunks/framework.WU9gZgzV.js";import{S}from"./chunks/Subject.S6NvqjeN.js";const Y=c({__name:"ExampleBrowserScroll",setup(E){const s=new y,i=new S,n=F({scrollTop:0,directionY:0,directionLooseY:0,countEndY:0});return C(()=>{const t=s.observeScroll().subscribe(a=>{n.scrollTop=a.scrollTop}),p=s.observeDirectionY().subscribe(a=>{n.directionY=a.directionY}),l=s.observeDirectionLooseY().subscribe(a=>{n.directionLooseY=a.directionY}),r=s.observeEndY().subscribe(a=>{n.countEndY++}),d=s.observeDirectionX().subscribe(a=>{}),g=s.observeDirectionLooseX().subscribe(a=>{}),o=s.observeEndX().subscribe(a=>{});i.add(t),i.add(p),i.add(l),i.add(r),i.add(d),i.add(g),i.add(o),s.init()}),B(()=>{i.unsubscribe(),s.destroy()}),(t,p)=>(h(),k("div",null,[(h(),k(D,null,b(5,l=>A("div",{key:l,class:"box"},u(n),1)),64))]))}}),m=v(Y,[["__scopeId","data-v-a3d4065a"]]),w=e("",3),X=e("",1),q=JSON.parse('{"title":"BrowserScroll","description":"","frontmatter":{},"headers":[],"relativePath":"module/browser-scroll/BrowserScroll.md","filePath":"module/browser-scroll/BrowserScroll.md"}'),f={name:"module/browser-scroll/BrowserScroll.md"},P=Object.assign(f,{setup(E){return(s,i)=>(h(),k("div",null,[w,_(m),X]))}});export{q as __pageData,P as default};