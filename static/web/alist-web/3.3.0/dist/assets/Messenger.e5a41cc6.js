import{e,bf as i,a5 as w,n as y,d as R,a as r,b4 as o,br as b,an as k,W as c,v as C,aw as x,af as T,I as W,a0 as B,B as g,h as F,aK as H,cj as L}from"./index.403084e8.js";import{u as N}from"./useT.fc5c14e1.js";const j=n=>e(i,{get children(){return n.content}}),z=n=>e(w,{get src(){return n.content}}),D={string:j,image:z},P=()=>{const n=N();y.info(n("manage.messenger-tips"));const[a,l]=R(""),[u,d]=r(()=>o.post("/admin/message/get")),[p,m]=r(()=>o.post("/admin/message/send",{message:a()})),[h,f]=b([]),s=async()=>{const t=await d();F(t,I=>{f(L($=>$.push(I)))})},S=async()=>{const t=await m();H(t)},v=setInterval(s,1e3);return k(()=>clearInterval(v)),e(c,{spacing:"$2",h:"$full",alignItems:"start",get children(){return[e(c,{w:"$full",spacing:"$2",alignItems:"start",p:"$2",rounded:"$lg",border:"1px solid var(--hope-colors-neutral6)",get children(){return[e(i,{size:"xl",get children(){return n("manage.received_msgs")}}),e(C,{each:h,children:t=>e(x,T({get component(){return D[t.type]}},t))})]}}),e(W,{w:"$full",get value(){return a()},onInput:t=>l(t.currentTarget.value)}),e(B,{spacing:"$2",get children(){return[e(g,{colorScheme:"accent",get loading(){return u()},onClick:s,get children(){return n("manage.receive")}}),e(g,{get loading(){return p()},onClick:S,get children(){return n("manage.send")}})]}})]}})};export{P as Messenger,D as Shower,P as default};