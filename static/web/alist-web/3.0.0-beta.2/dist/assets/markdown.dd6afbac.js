import{f as r,Z as a,o,bI as i}from"./index.5e357d2b.js";import{d}from"./useUtil.2dda9330.js";import{M as m}from"./Markdown.3667143f.js";import"./api.5220f38d.js";import"./useT.8b9254c3.js";const g=()=>{const[t]=d(),n=e=>o.obj.name.endsWith(".md")?e:"```"+i(o.obj.name)+`
`+e+"\n```";return r(a,{get loading(){return t.loading},get children(){return r(m,{get children(){var e;return n((e=t())==null?void 0:e.content)}})}})};export{g as default};