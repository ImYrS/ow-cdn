!function(){function n(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==t)return;var r,a,i=[],o=!0,u=!1;try{for(t=t.call(n);!(o=(r=t.next()).done)&&(i.push(r.value),!e||i.length!==e);o=!0);}catch(c){u=!0,a=c}finally{try{o||null==t.return||t.return()}finally{if(u)throw a}}return i}(n,t)||function(n,t){if(!n)return;if("string"==typeof n)return e(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(n,t)}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}System.register(["./index-legacy.0e657d30.js","./File-legacy.3e041ea7.js","./useUtil-legacy.3af5bad6.js","./api-legacy.85b132ea.js","./icon-legacy.0d85ae7f.js","./index-legacy.ab3033b7.js","./index-legacy.10708fd8.js","./Layout-legacy.3a04d564.js","./Markdown-legacy.aa151ebe.js","./index-legacy.a639c811.js","./FolderTree-legacy.38296712.js"],(function(e){"use strict";var t,r,a,i,o,u;return{setters:[function(n){t=n.d,r=n.e,a=n.j,i=n.B,o=n.o},function(n){u=n.F},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){e("default",(function(){var e=t(),c=n(r(!1),2),l=c[0],f=c[1];return a(u,{get children(){return a(i,{as:"a",get href(){return"itms-services://?action=download-manifest&url="+o.raw_url},onClick:function(){f(!0)},get children(){return e("home.preview.".concat(l()?"installing":"install"))}})}})}))}}}))}();