import{e as i,a,b4 as o,f as t,bf as $,c3 as M,af as S,B as c,bd as g,n as v,I as O,a0 as R,Z as U}from"./index.33d2aa70.js";import{u as x}from"./useT.2ec8a2b0.js";import{b as D}from"./useTitle.38fb23d6.js";import{c as E}from"./useUtil.c55c396d.js";import{G as b}from"./index.4c2ca7d7.js";import{I as C}from"./SettingItem.2d33a6e9.js";import"./api.e0893224.js";import"./index.a372d41a.js";import"./item_type.be442da4.js";const V=()=>{const r=x();D("manage.sidemenu.other");const[u,l]=i(""),[m,d]=i(""),[p,h]=i(""),[k,I]=i([]),[L,T]=a(()=>o.get(`/admin/setting/list?groups=${b.ARIA2},${b.SINGLE}`)),[A,G]=a(()=>o.post("/admin/setting/set_aria2",{uri:u(),secret:m()}));(async()=>{const e=await T();g(e,n=>{var f,_,y;l(((f=n.find(s=>s.key==="aria2_uri"))==null?void 0:f.value)||""),d(((_=n.find(s=>s.key==="aria2_secret"))==null?void 0:_.value)||""),h(((y=n.find(s=>s.key==="token"))==null?void 0:y.value)||""),I(n)})})();const[w,B]=a(()=>o.post("/admin/setting/reset_token")),{copy:H}=E();return t(U,{get loading(){return L()},get children(){return[t($,{mb:"$2",get children(){return r("settings_other.aria2")}}),t(M,{gap:"$2",columns:{"@initial":1,"@md":2},get children(){return[t(C,S(()=>k().find(e=>e.key==="aria2_uri"),{get value(){return u()},onChange:e=>l(e)})),t(C,S(()=>k().find(e=>e.key==="aria2_secret"),{get value(){return m()},onChange:e=>d(e)}))]}}),t(c,{my:"$2",get loading(){return A()},onClick:async()=>{const e=await G();g(e,n=>{v.success(`${r("settings_other.aria2_version")} ${n}`)})},get children(){return r("settings_other.set_aria2")}}),t($,{my:"$2",get children(){return r("settings.token")}}),t(O,{get value(){return p()},readOnly:!0}),t(R,{my:"$2",spacing:"$2",get children(){return[t(c,{onClick:()=>{H(p())},get children(){return r("settings_other.copy_token")}}),t(c,{colorScheme:"danger",get loading(){return w()},onClick:async()=>{const e=await B();g(e,n=>{v.success(r("settings_other.reset_token_success")),h(n)})},get children(){return r("settings_other.reset_token")}})]}})]}})};export{V as default};