import{u as i,f as e,bf as u,I as c,p as g,J as p,bM as m,a0 as o,bg as d,bc as a,B as s,W as h}from"./index.5e357d2b.js";import{u as f}from"./useT.8b9254c3.js";import{b}from"./Layout.64915290.js";import{L as $}from"./index.0fa676c5.js";import"./useTitle.87a65e2c.js";import"./Markdown.3667143f.js";import"./api.5220f38d.js";import"./useUtil.2dda9330.js";import"./index.5f0bb485.js";import"./FolderTree.ccea379b.js";const T=()=>{const t=f(),{refresh:n}=b(),{back:l}=i();return e(h,{w:{"@initial":"$full","@md":"$lg"},p:"$8",spacing:"$3",alignItems:"start",get children(){return[e(u,{get children(){return t("home.input_password")}}),e(c,{type:"password",get value(){return g()},get background(){return p("$neutral3","$neutral2")()},onKeyDown:r=>{r.key==="Enter"&&n(!0)},onInput:r=>m(r.currentTarget.value)}),e(o,{w:"$full",justifyContent:"space-between",get children(){return[e(d,{fontSize:"$sm",color:"$neutral10",direction:{"@initial":"column","@sm":"row"},columnGap:"$1",get children(){return[e(a,{get children(){return t("global.have_account")}}),e(a,{color:"$info9",as:$,get href(){return`/@login?redirect=${encodeURIComponent(location.pathname)}`},get children(){return t("global.go_login")}})]}}),e(o,{spacing:"$2",get children(){return[e(s,{colorScheme:"neutral",onClick:l,get children(){return t("global.back")}}),e(s,{onClick:()=>n(!0),get children(){return t("global.ok")}})]}})]}})]}})};export{T as default};