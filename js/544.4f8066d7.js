"use strict";(self["webpackChunkresep_bunda"]=self["webpackChunkresep_bunda"]||[]).push([[544],{2642:(e,t,s)=>{s.r(t),s.d(t,{startFocusVisible:()=>c});
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const o="ion-focused",n="ion-focusable",r=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],c=e=>{let t=[],s=!0;const c=e?e.shadowRoot:document,d=e||document.body,i=e=>{t.forEach((e=>e.classList.remove(o))),e.forEach((e=>e.classList.add(o))),t=e},a=()=>{s=!1,i([])},u=e=>{s=r.includes(e.key),s||i([])},v=e=>{if(s&&void 0!==e.composedPath){const t=e.composedPath().filter((e=>!!e.classList&&e.classList.contains(n)));i(t)}},E=()=>{c.activeElement===d&&i([])};c.addEventListener("keydown",u),c.addEventListener("focusin",v),c.addEventListener("focusout",E),c.addEventListener("touchstart",a),c.addEventListener("mousedown",a);const L=()=>{c.removeEventListener("keydown",u),c.removeEventListener("focusin",v),c.removeEventListener("focusout",E),c.removeEventListener("touchstart",a),c.removeEventListener("mousedown",a)};return{destroy:L,setFocus:i}}}}]);
//# sourceMappingURL=544.4f8066d7.js.map