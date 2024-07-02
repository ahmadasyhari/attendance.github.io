"use strict";(self["webpackChunkresep_bunda"]=self["webpackChunkresep_bunda"]||[]).push([[990],{8990:(e,t,n)=>{n.r(t),n.d(t,{createSwipeBackGesture:()=>c});var r=n(6587),s=n(545),a=n(6515);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const c=(e,t,n,c,i)=>{const o=e.ownerDocument.defaultView;let u=(0,s.i)(e);const d=e=>{const t=50,{startX:n}=e;return u?n>=o.innerWidth-t:n<=t},h=e=>u?-e.deltaX:e.deltaX,l=e=>u?-e.velocityX:e.velocityX,p=n=>(u=(0,s.i)(e),d(n)&&t()),b=e=>{const t=h(e),n=t/o.innerWidth;c(n)},k=e=>{const t=h(e),n=o.innerWidth,s=t/n,a=l(e),c=n/2,u=a>=0&&(a>.2||t>c),d=u?1-s:s,p=d*n;let b=0;if(p>5){const e=p/Math.abs(a);b=Math.min(e,540)}i(u,s<=0?.01:(0,r.h)(0,s,.9999),b)};return(0,a.createGesture)({el:e,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:p,onStart:n,onMove:b,onEnd:k})}}}]);
//# sourceMappingURL=990.d8578090.js.map