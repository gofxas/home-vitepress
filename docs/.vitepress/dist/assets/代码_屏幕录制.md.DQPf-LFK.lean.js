import{c as p,j as s,a as E,a1 as r,o as d}from"./chunks/framework.BdbYcYPl.js";const y=s("h1",{id:"临时的录屏工具",tabindex:"-1"},[E("临时的录屏工具 "),s("a",{class:"header-anchor",href:"#临时的录屏工具","aria-label":'Permalink to "临时的录屏工具"'},"​")],-1),g=s("blockquote",null,[s("p",null,"不需要下载任何 APP，用一段 JS 代码就可以实现了。")],-1),o=r("",1),v=JSON.parse('{"title":"临时的录屏工具","description":"","frontmatter":{},"headers":[],"relativePath":"代码/屏幕录制.md","filePath":"代码/屏幕录制.md"}'),c={name:"代码/屏幕录制.md"},m=Object.assign(c,{setup(F){const e=async function(){var k=await navigator.mediaDevices.getDisplayMedia({video:!0}),i=MediaRecorder.isTypeSupported("video/webm; codecs=vp9")?"video/webm; codecs=vp9":"video/webm",a=new MediaRecorder(k,{mimeType:i}),n=[];a.addEventListener("dataavailable",function(t){n.push(t.data)}),a.addEventListener("stop",function(){var t=new Blob(n,{type:n[0].type}),l=URL.createObjectURL(t),h=document.createElement("a");h.href=l,h.download="video.webm",h.click()}),a.start()};return(k,i)=>(d(),p("div",null,[y,g,s("p",null,[s("button",{class:"m-2 text-xs border rounded",onClick:i[0]||(i[0]=a=>e())},"开始录屏")]),o]))}});export{v as __pageData,m as default};
