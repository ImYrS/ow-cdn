import{e as r,o as t,Q as o,V as a}from"./index.d90e2c50.js";import{u as m}from"./useT.a9d28a0d.js";import{I as s}from"./ImageWithError.5390466c.js";const g=()=>{const e=m();return r(s,{maxH:"75vh",rounded:"$lg",get src(){return t.raw_url},get fallback(){return r(o,{})},get fallbackErr(){return r(a,{get msg(){return e("home.preview.failed_load_img")}})}})};export{g as default};