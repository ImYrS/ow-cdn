import{j as t,a1 as l,C as $,aE as h,aH as b,ct as m,r as f,aF as w,bI as j,ai as k,a8 as p,ah as y,aP as a,bM as A,b_ as C,d as v,e as d,f as S,cu as P,cv as I,cw as M,aq as u,x as O,o as z,X as E}from"./index.b4298eea.js";import{b as L}from"./Folder.7619183f.js";import{a as B,M as F}from"./Layout.19d5b48c.js";import{c as H}from"./useUtil.7ca0bda2.js";import{p as T}from"./index.1acfb043.js";import{g as _,O as D}from"./icon.f2fe2827.js";import"./Paginator.1eb0e68f.js";import"./index.73ff8816.js";import"./api.5a741649.js";import"./Markdown.944cde28.js";import"./index.9a19b081.js";import"./FolderTree.341a488f.js";const n=[{name:"name",textAlign:"left",w:{"@initial":"76%","@md":"50%"}},{name:"size",textAlign:"right",w:{"@initial":"24%","@md":"17%"}},{name:"modified",textAlign:"right",w:{"@initial":0,"@md":"33%"}}],W=e=>{const{isHide:o}=H();if(o(e.obj))return null;const{setPathAs:c}=B(),{show:s}=L({id:1});return t(F.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.2},style:{width:"100%"},get children(){return t(l,{class:"list-item",w:"$full",p:"$2",rounded:"$lg",transition:"all 0.3s",get _hover(){return{transform:"scale(1.01)",bgColor:$()}},as:T,get href(){return e.obj.name},onMouseEnter:()=>{c(e.obj.name,e.obj.is_dir,!0)},onContextMenu:r=>{h(()=>{b(!1),m(e.index,!0,!0)}),s(r,{props:e.obj})},get children(){return[t(l,{class:"name-box",spacing:"$1",get w(){return n[0].w},get children(){return[t(f,{get when(){return w()},get children(){return t(j,{"on:click":r=>{r.stopPropagation()},get checked(){return e.obj.selected},onChange:r=>{m(e.index,r.target.checked)}})}}),t(k,{class:"icon",boxSize:"$6",get color(){return p()},get as(){return _(e.obj)},mr:"$1","on:click":r=>{e.obj.type===D.IMAGE&&(r.stopPropagation(),r.preventDefault(),y.emit("gallery",e.obj.name))}}),t(a,{class:"name",css:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},get title(){return e.obj.name},get children(){return e.obj.name}})]}}),t(a,{class:"size",get w(){return n[1].w},get textAlign(){return n[1].textAlign},get children(){return A(e.obj.size)}}),t(a,{class:"modified",display:{"@initial":"none","@md":"inline"},get w(){return n[2].w},get textAlign(){return n[2].textAlign},get children(){return C(e.obj.modified)}})]}})}})},ee=()=>{const e=v(),[o,c]=d(),[s,r]=d(!1);S(()=>{o()&&P(o(),s())});const g=i=>({fontWeight:"bold",fontSize:"$sm",color:"$neutral11",textAlign:i.textAlign,cursor:"pointer",onClick:()=>{i.name===o()?r(!s()):h(()=>{c(i.name),r(!1)})}});return t(E,{class:"list",w:"$full",spacing:"$1",get children(){return[t(l,{class:"title",w:"$full",p:"$2",get children(){return[t(l,{get w(){return n[0].w},spacing:"$1",get children(){return[t(f,{get when(){return w()},get children(){return t(j,{get checked(){return I()},get indeterminate(){return M()},onChange:i=>{b(i.target.checked)}})}}),t(a,u(()=>g(n[0]),{get children(){return e(`home.obj.${n[0].name}`)}}))]}}),t(a,u({get w(){return n[1].w}},()=>g(n[1]),{get children(){return e(`home.obj.${n[1].name}`)}})),t(a,u({get w(){return n[2].w}},()=>g(n[2]),{display:{"@initial":"none","@md":"inline"},get children(){return e(`home.obj.${n[2].name}`)}}))]}}),t(O,{get each(){return z.objs},children:(i,x)=>t(W,{obj:i,get index(){return x()}})})]}})};export{ee as default};