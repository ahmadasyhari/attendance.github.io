"use strict";(self["webpackChunkresep_bunda"]=self["webpackChunkresep_bunda"]||[]).push([[217],{9928:(n,e,t)=>{t.r(e),t.d(e,{default:()=>w});var u=t(5082),r=t(124),a=t(8534),i=(t(1249),t(9826),t(1539),t(8309),t(7327),t(2564),t(6252)),l=t(2262),s=t(3577),c=t(286),o=t(6100),f=t(316),d=t(5856),m=["innerHTML"];const v={__name:"HalamanMateri",setup:function(n){var e=(0,o.ad)(d.H),t=(0,f.v0)(d.H),v=(0,l.iH)([]),p=(0,l.iH)(""),w=(0,l.iH)([]),k=(0,l.iH)([]),h=(0,l.iH)(!1),U=(0,l.iH)(""),_=(0,l.iH)([]),W=(0,l.iH)({isOpen:!1,message:"",duration:2e3,color:"success"});(0,i.bv)((0,a.Z)((0,r.Z)().mark((function n(){return(0,r.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,S();case 2:return n.next=4,g();case 4:return n.next=6,x();case 6:return n.next=8,Z();case 8:case"end":return n.stop()}}),n)}))));var S=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(){var u,a;return(0,r.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(u=t.currentUser,!u){n.next=8;break}return n.next=4,(0,o.QT)((0,o.JU)(e,"users",u.uid));case 4:a=n.sent,a.exists()?p.value=a.data().kelas:D("Kelas pengguna tidak ditemukan.","danger"),n.next=9;break;case 8:D("Pengguna tidak terautentikasi.","danger");case 9:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),g=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(){var t;return(0,r.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,(0,o.PL)((0,o.hJ)(e,"kelas"));case 2:t=n.sent,v.value=t.docs.map((function(n){return(0,u.Z)({id:n.id},n.data())}));case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),x=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(){var t;return(0,r.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,(0,o.PL)((0,o.hJ)(e,"mataPelajaran"));case 2:t=n.sent,_.value=t.docs.map((function(n){return(0,u.Z)({id:n.id},n.data())}));case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),Z=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(){var t;return(0,r.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,o.PL)((0,o.hJ)(e,"materi"));case 3:t=n.sent,w.value=t.docs.map((function(n){var e,t,r=n.data();return(0,u.Z)((0,u.Z)({id:n.id},r),{},{className:(null===(e=v.value.find((function(n){return n.id===r["class"]})))||void 0===e?void 0:e.name)||"N/A",subjectName:(null===(t=_.value.find((function(n){return n.id===r.subject})))||void 0===t?void 0:t.name)||"N/A"})})),H(),n.next=12;break;case 8:n.prev=8,n.t0=n["catch"](0),console.error("Error fetching materi:",n.t0),D("Terjadi kesalahan saat mengambil data materi.","danger");case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}(),H=function(){k.value=w.value.filter((function(n){return n["class"]===p.value}))},b=function(n){U.value=n,h.value=!0},j=function(){h.value=!1},C=function(n){setTimeout((function(){Z(),n.target.complete()}),2e3)},D=function(n,e){W.value={isOpen:!0,message:n,duration:2e3,color:e}};return function(n,e){return(0,i.wg)(),(0,i.j4)((0,l.SU)(c._i),null,{default:(0,i.w5)((function(){return[(0,i.Wm)((0,l.SU)(c.Gu),{mode:"ios"},{default:(0,i.w5)((function(){return[(0,i.Wm)((0,l.SU)(c.sr),null,{default:(0,i.w5)((function(){return[(0,i.Wm)((0,l.SU)(c.wd),null,{default:(0,i.w5)((function(){return[(0,i.Uk)("Materi")]})),_:1}),(0,i.Wm)((0,l.SU)(c.oU),{slot:"start","default-href":"/"})]})),_:1})]})),_:1}),(0,i.Wm)((0,l.SU)(c.W2),{fullscreen:!0},{default:(0,i.w5)((function(){return[(0,i.Wm)((0,l.SU)(c.nJ),{slot:"fixed",onIonRefresh:e[0]||(e[0]=function(n){return C(n)})},{default:(0,i.w5)((function(){return[(0,i.Wm)((0,l.SU)(c.Wo))]})),_:1}),(0,i.Wm)((0,l.SU)(c.W2),{class:"ion-padding"},{default:(0,i.w5)((function(){return[(0,i.Wm)((0,l.SU)(c.q_),null,{default:(0,i.w5)((function(){return[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(k.value,(function(n){return(0,i.wg)(),(0,i.j4)((0,l.SU)(c.Ie),{key:n.id,onClick:function(e){return b(n.content)}},{default:(0,i.w5)((function(){return[(0,i.Wm)((0,l.SU)(c.Q$),null,{default:(0,i.w5)((function(){return[(0,i._)("h3",null,(0,s.zw)(n.title),1),(0,i._)("p",null,(0,s.zw)(n.subjectName),1)]})),_:2},1024)]})),_:2},1032,["onClick"])})),128))]})),_:1})]})),_:1}),(0,i.Wm)((0,l.SU)(c.ki),{"is-open":h.value,onDidDismiss:j},{default:(0,i.w5)((function(){return[(0,i.Wm)((0,l.SU)(c.Gu),null,{default:(0,i.w5)((function(){return[(0,i.Wm)((0,l.SU)(c.sr),null,{default:(0,i.w5)((function(){return[(0,i.Wm)((0,l.SU)(c.wd),null,{default:(0,i.w5)((function(){return[(0,i.Uk)("Detail Materi")]})),_:1}),(0,i.Wm)((0,l.SU)(c.Sm),{slot:"end"},{default:(0,i.w5)((function(){return[(0,i.Wm)((0,l.SU)(c.YG),{onClick:j},{default:(0,i.w5)((function(){return[(0,i.Uk)("Close")]})),_:1})]})),_:1})]})),_:1})]})),_:1}),(0,i.Wm)((0,l.SU)(c.W2),null,{default:(0,i.w5)((function(){return[(0,i._)("div",{innerHTML:U.value},null,8,m)]})),_:1})]})),_:1},8,["is-open"]),(0,i.Wm)((0,l.SU)(c.Px),{"is-open":W.value.isOpen,message:W.value.message,duration:W.value.duration,color:W.value.color,onDidDismiss:e[1]||(e[1]=function(){return W.value.isOpen=!1})},null,8,["is-open","message","duration","color"])]})),_:1})]})),_:1})}}},p=v,w=p}}]);
//# sourceMappingURL=217.c797a8a2.js.map