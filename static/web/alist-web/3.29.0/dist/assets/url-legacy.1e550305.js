!function(){function n(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==t)return;var r,o,i=[],u=!0,a=!1;try{for(t=t.call(n);!(u=(r=t.next()).done)&&(i.push(r.value),!e||i.length!==e);u=!0);}catch(c){a=!0,o=c}finally{try{u||null==t.return||t.return()}finally{if(a)throw o}}return i}(n,t)||function(n,t){if(!n)return;if("string"==typeof n)return e(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(n,t)}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}System.register(["./index-legacy.2629d851.js","./File-legacy.1b23ee22.js","./icon-legacy.f4ea01f1.js","./index-legacy.9ff1aa9b.js","./index-legacy.78048231.js","./Layout-legacy.d8547610.js","./index-legacy.376a3969.js","./FolderTree-legacy.d4b17747.js"],(function(e){"use strict";var t,r,o,i,u,a,c,l;return{setters:[function(n){t=n.cQ,r=n.e,o=n.a,i=n.h,u=n.B,a=n.Z,c=n.cR},function(n){l=n.F},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){e("default",(function(){var e=n(t(),1)[0];function f(){var n,t=null===(n=e())||void 0===n?void 0:n.content,r=c(t).text;t&&window.open(r(),"_blank")}r((function(){f()}));var y=o();return i(a,{get loading(){return e.loading},get children(){return i(l,{get children(){return i(u,{onClick:f,get children(){return y("home.preview.open_in_new_window")}})}})}})}))}}}))}();