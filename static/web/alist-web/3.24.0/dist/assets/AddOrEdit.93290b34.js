import{d as m,u as C,bI as k,a as u,bj as c,f as e,W as _,br as v,m as F,a2 as g,bd as a,b1 as l,I as p,bs as S,v as q,ao as D,bH as f,B as L,bp as h,n as T,Z as U}from"./index.2e73a62d.js";import{F as E}from"./FolderTree.7b1f73f3.js";import"./index.540ec8e2.js";import"./api.c9827e00.js";const B=r=>{const o=m();return e(a,{display:"inline-flex",flexDirection:"row",alignItems:"center",gap:"$2",rounded:"$md",shadow:"$md",p:"$2",w:"fit-content",get children(){return[e(l,{mb:"0",get children(){return o(`users.permissions.${r.name}`)}}),e(f,{get checked(){return r.can},onChange:()=>r.onChange(!r.can)})]}})},z=()=>{const r=m(),{params:o,back:b}=C(),{id:i}=o,[s,t]=k({id:0,username:"",password:"",base_path:"",role:0,permission:0,disabled:!1,sso_id:""}),[w,$]=u(()=>c.get(`/admin/user/get?id=${i}`));i&&(async()=>{const n=await $();h(n,t)})();const[x,y]=u(()=>c.post(`/admin/user/${i?"update":"create"}`,s));return e(U,{get loading(){return w()},get children(){return e(_,{w:"$full",alignItems:"start",spacing:"$2",get children(){return[e(v,{get children(){return r(`global.${i?"edit":"add"}`)}}),e(F,{get when(){return!g.is_guest(s)},get children(){return[e(a,{w:"$full",display:"flex",flexDirection:"column",required:!0,get children(){return[e(l,{for:"username",display:"flex",alignItems:"center",get children(){return r("users.username")}}),e(p,{id:"username",get value(){return s.username},onInput:n=>t("username",n.currentTarget.value)})]}}),e(a,{w:"$full",display:"flex",flexDirection:"column",required:!0,get children(){return[e(l,{for:"password",display:"flex",alignItems:"center",get children(){return r("users.password")}}),e(p,{id:"password",type:"password",placeholder:"********",get value(){return s.password},onInput:n=>t("password",n.currentTarget.value)})]}})]}}),e(a,{w:"$full",display:"flex",flexDirection:"column",required:!0,get children(){return[e(l,{for:"base_path",display:"flex",alignItems:"center",get children(){return r("users.base_path")}}),e(E,{id:"base_path",get value(){return s.base_path},onChange:n=>t("base_path",n),onlyFolder:!0})]}}),e(a,{w:"$full",required:!0,get children(){return[e(l,{display:"flex",alignItems:"center",get children(){return r("users.permission")}}),e(S,{w:"$full",wrap:"wrap",gap:"$2",get children(){return e(q,{each:D,children:(n,d)=>e(B,{name:n,get can(){return g.can(s,d())},onChange:I=>{I?t("permission",s.permission|=1<<d()):t("permission",s.permission&=~(1<<d()))}})})}})]}}),e(a,{w:"fit-content",display:"flex",get children(){return e(f,{css:{whiteSpace:"nowrap"},id:"disabled",onChange:n=>t("disabled",n.currentTarget.checked),color:"$neutral10",fontSize:"$sm",get checked(){return s.disabled},get children(){return r("users.disabled")}})}}),e(L,{get loading(){return x()},onClick:async()=>{const n=await y();h(n,()=>{T.success(r("global.save_success")),b()})},get children(){return r(`global.${i?"save":"add"}`)}})]}})}})};export{z as default};