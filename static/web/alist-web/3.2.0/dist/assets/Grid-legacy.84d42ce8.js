!function(){function e(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,a=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(u){l=!0,o=u}finally{try{i||null==n.return||n.return()}finally{if(l)throw o}}return a}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}System.register(["./index-legacy.5b9784ac.js","./Folder-legacy.881c51b2.js","./Layout-legacy.378eb480.js","./useUtil-legacy.e97de047.js","./index-legacy.19a581b9.js","./ImageWithError-legacy.237ffbea.js","./obj-legacy.97e43e8b.js","./icon-legacy.7816f7d2.js","./useT-legacy.48d38145.js","./useTitle-legacy.ef70dfe6.js","./Markdown-legacy.23931882.js","./api-legacy.9aeb0991.js","./index-legacy.ef8a97ef.js","./FolderTree-legacy.3a45aa9c.js"],(function(t){"use strict";var n,r,o,a,i,l,u,c,f,s,g,d,b,y,h,j,m,p,v,w,x,$,k,A,S,I,M,C;return{setters:[function(e){n=e.e,r=e.bb,o=e.ae,a=e.d,i=e.t,l=e.aC,u=e.W,c=e.z,f=e.aB,s=e.aE,g=e.ck,d=e.aa,b=e.am,y=e.k,h=e.bq,j=e.a6,m=e.bc,p=e.v,v=e.o,w=e.b_},function(e){x=e.I},function(e){$=e.b,k=e.M},function(e){A=e.c},function(e){S=e.I},function(e){I=e.I},function(e){M=e.O},function(e){C=e.g},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){var E=function(t){if((0,A().isHide)(t.obj))return null;var p=$().setPathAs,v=n(o,{get color(){return r()},boxSize:"$12",get as(){return C(t.obj)}}),w=e(a(!1),2),E=w[0],z=w[1],O=i((function(){return l()&&(E()||t.obj.selected)})),T=x({id:1}).show;return n(k.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.2},style:{width:"100%"},get children(){return n(u,{class:"grid-item",w:"$full",p:"$1",spacing:"$1",rounded:"$lg",transition:"all 0.3s",get _hover(){return{transform:"scale(1.06)",bgColor:c()}},as:S,get href(){return t.obj.name},onMouseEnter:function(){z(!0),p(t.obj.name,t.obj.is_dir,!0)},onMouseLeave:function(){z(!1)},onContextMenu:function(e){f((function(){s(!1),g(t.index,!0,!0)})),T(e,{props:t.obj})},get children(){return[n(d,{class:"item-thumbnail",h:"70px",w:"$full","on:click":function(e){t.obj.type===M.IMAGE&&(e.stopPropagation(),e.preventDefault(),b.emit("gallery",t.obj.name))},pos:"relative",get children(){return[n(y,{get when(){return O()},get children(){return n(h,{pos:"absolute",left:"$1",top:"$1","on:click":function(e){e.stopPropagation()},get checked(){return t.obj.selected},onChange:function(e){g(t.index,e.target.checked)}})}}),n(y,{get when(){return t.obj.thumb},fallback:v,get children(){return n(I,{maxH:"$full",maxW:"$full",rounded:"$lg",shadow:"$md",get fallback(){return n(j,{size:"lg"})},fallbackErr:v,get src(){return t.obj.thumb},loading:"lazy"})}})]}}),n(m,{css:{whiteSpace:"nowrap",textOverflow:"ellipsis"},w:"$full",overflow:"hidden",textAlign:"center",fontSize:"$sm",get title(){return t.obj.name},get children(){return t.obj.name}})]}})}})};t("default",(function(){return n(w,{w:"$full",gap:"$1",templateColumns:"repeat(auto-fill, minmax(100px,1fr))",get children(){return n(p,{get each(){return v.objs},children:function(e,t){return n(E,{obj:e,get index(){return t()}})}})}})}))}}}))}();