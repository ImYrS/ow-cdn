import{d as $,u as k,a as M,bj as l,e as y,cc as C,f as e,a0 as o,B as c,Y as v,cd as S,ce as B,cf as d,v as g,cg as u,ch as F,ci as n,bp as h,n as W,W as x}from"./index.2e73a62d.js";import{o as D}from"./index.8d91172c.js";import{D as H}from"./DeletePopover.18c0982a.js";import{W as L}from"./Wether.652f578d.js";const P=()=>{const r=$();D("manage.sidemenu.metas");const{to:i}=k(),[p,m]=M(()=>l.get("/admin/meta/list")),[f,b]=y([]),a=async()=>{const t=await m();h(t,s=>b(s.content))};a();const[w,T]=C(t=>l.post(`/admin/meta/delete?id=${t}`));return e(x,{spacing:"$2",alignItems:"start",w:"$full",get children(){return[e(o,{spacing:"$2",get children(){return[e(c,{colorScheme:"accent",get loading(){return p()},onClick:a,get children(){return r("global.refresh")}}),e(c,{onClick:()=>{i("/@manage/metas/add")},get children(){return r("global.add")}})]}}),e(v,{w:"$full",overflowX:"auto",get children(){return e(S,{highlightOnHover:!0,dense:!0,get children(){return[e(B,{get children(){return e(d,{get children(){return[e(g,{each:["path","password","write"],children:t=>e(u,{get children(){return r(`metas.${t}`)}})}),e(u,{get children(){return r("global.operations")}})]}})}}),e(F,{get children(){return e(g,{get each(){return f()},children:t=>e(d,{get children(){return[e(n,{get children(){return t.path}}),e(n,{get children(){return t.password}}),e(n,{get children(){return e(L,{get yes(){return t.write}})}}),e(n,{get children(){return e(o,{spacing:"$2",get children(){return[e(c,{onClick:()=>{i(`/@manage/metas/edit/${t.id}`)},get children(){return r("global.edit")}}),e(H,{get name(){return t.path},get loading(){return w()===t.id},onClick:async()=>{const s=await T(t.id);h(s,()=>{W.success(r("global.delete_success")),a()})}})]}})}})]}})})}})]}})}})]}})};export{P as default};