import{a as A,aI as M,_ as F,bl as O,b as C,N as _,p as G,bm as l,P as u,bn as j,bo as I,n as L,ah as S}from"./index.2ea96c44.js";import{l as U,f as B}from"./api.bb9abe10.js";const D=(t,...r)=>{},m=new Map,Q=(t,r)=>{m.set(t,r)},E=t=>{window.scroll({top:m.get(t)||0,behavior:"smooth"}),D("recoverScroll",t,m.get(t))};let d;function N(t,r,n="replaceState"){let a=n==="location"?location.href:location.hash;if(!a.includes("?"))a=`${a}?${t}=${r}`;else if(!a.includes(t))a=`${a}&${t}=${r}`;else{const f=`(\\?|&|#)${t}([^&|^#]*)(&|$|#)`;a=a.replace(new RegExp(f),"$1"+t+"="+r+"$3")}n==="location"&&(location.href=a),n==="pushState"&&history.pushState({},"",a),n==="replaceState"&&history.replaceState({},"",a)}function z(t){for(var r=window.location.search.substring(1),n=r.split("&"),a=0;a<n.length;a++){var f=n[a].split("=");if(f[0]==t)return f[1]}return""}const b={};let i=1;const W=()=>i,q=()=>{const t=O();i=1,t.type==="pagination"&&N("page",1),console.log("resetGlobalPage",i)},J=()=>{const{pathname:t}=A(),[,r]=M(e=>U(e,F())),n=O();n.type==="pagination"&&z("page")&&(i=parseInt(z("page")));const[,a]=M(e=>{const o={index:e==null?void 0:e.index,size:e==null?void 0:e.size};return B(e==null?void 0:e.path,F(),o.index,o.size,e==null?void 0:e.force,new C.CancelToken(function(c){d=c}))}),f=(e,o=!0,s=!1)=>{s&&(e=G(t(),e)),o?b[e]=!0:delete b[e]};let w=!1;const g=(e,o,s)=>{d==null||d(),w=o!=null?o:!1,v(""),b[e]?p(e,i,void 0,void 0,s):$(e)},$=async e=>{l.setState(u.FetchingObj);const o=await r(e);j(o,s=>{var c;l.setObj(s),l.setProvider(s.provider),s.is_dir?(f(e),p(e,i)):(l.setReadme(s.readme),l.setRelated((c=s.related)!=null?c:[]),l.setRawUrl(s.raw_url),l.setState(u.File))},v)},p=async(e,o,s,c=!1,H)=>{s||(s=n.size),s!==void 0&&n.type==="all"&&(s=void 0),i=o!=null?o:1,l.setState(c?u.FetchingMore:u.FetchingObjs);const y=await a({path:e,index:o,size:s,force:H});j(y,h=>{var R;c?I(h.content):(l.setObjs((R=h.content)!=null?R:[]),l.setTotal(h.total)),l.setReadme(h.readme),l.setWrite(h.write),l.setProvider(h.provider),l.setState(u.Folder),c&&(o!=null?o:1)>1||E(e)},v)},v=(e,o)=>{o===403?(l.setState(u.NeedPassword),w&&L.error(e)):l.setErr(e)},P=(e,o,s=!1)=>{p(t(),e,o,s)};return{handlePathChange:g,setPathAs:f,refresh:(e,o)=>{g(t(),e,o)},pageChange:P,loadMore:()=>{P(i+1,void 0,!0)},allLoaded:()=>i>=Math.ceil(_.total/n.size)}};function x(t){return S({a:{viewBox:"0 0 24 24"},c:'<path fill="none" d="M0 0h24v24H0z"/><path d="M16 2l5 5v14.008a.993.993 0 01-.993.992H3.993A1 1 0 013 21.008V2.992C3 2.444 3.445 2 3.993 2H16zm-3 10h3l-4-4-4 4h3v4h2v-4z"/>'},t)}function K(t){return S({a:{viewBox:"0 0 24 24"},c:'<path fill="none" d="M0 0h24v24H0z"/><path d="M12.414 5H21a1 1 0 011 1v14a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1h7.414l2 2zM13 13h3l-4-4-4 4h3v4h2v-4z"/>'},t)}function X(t){return S({a:{viewBox:"0 0 24 24"},c:'<path fill="none" d="M0 0h24v24H0z"/><path d="M5.463 4.433A9.961 9.961 0 0112 2c5.523 0 10 4.477 10 10 0 2.136-.67 4.116-1.81 5.74L17 12h3A8 8 0 006.46 6.228l-.997-1.795zm13.074 15.134A9.961 9.961 0 0112 22C6.477 22 2 17.523 2 12c0-2.136.67-4.116 1.81-5.74L7 12H4a8 8 0 0013.54 5.772l.997 1.795z"/>'},t)}export{X as R,q as a,E as b,K as c,x as d,N as e,W as g,Q as r,J as u};