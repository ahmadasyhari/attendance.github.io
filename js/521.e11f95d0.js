"use strict";(self["webpackChunkresep_bunda"]=self["webpackChunkresep_bunda"]||[]).push([[521],{8990:(e,t,n)=>{n.r(t),n.d(t,{createSwipeBackGesture:()=>i});var r=n(6587),s=n(545),a=n(6515);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const i=(e,t,n,i,o)=>{const c=e.ownerDocument.defaultView;let u=(0,s.i)(e);const d=e=>{const t=50,{startX:n}=e;return u?n>=c.innerWidth-t:n<=t},h=e=>u?-e.deltaX:e.deltaX,l=e=>u?-e.velocityX:e.velocityX,p=n=>(u=(0,s.i)(e),d(n)&&t()),b=e=>{const t=h(e),n=t/c.innerWidth;i(n)},k=e=>{const t=h(e),n=c.innerWidth,s=t/n,a=l(e),i=n/2,u=a>=0&&(a>.2||t>i),d=u?1-s:s,p=d*n;let b=0;if(p>5){const e=p/Math.abs(a);b=Math.min(e,540)}o(u,s<=0?.01:(0,r.h)(0,s,.9999),b)};return(0,a.A)({el:e,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:p,onStart:n,onMove:b,onEnd:k})}}}]);
//# sourceMappingURL=521.e11f95d0.js.map