"use strict";(self["webpackChunkresep_bunda"]=self["webpackChunkresep_bunda"]||[]).push([[330],{7556:(e,n,t)=>{var r=t(7293);e.exports=r((function(){if("function"==typeof ArrayBuffer){var e=new ArrayBuffer(8);Object.isExtensible(e)&&Object.defineProperty(e,"a",{value:8})}}))},5631:(e,n,t)=>{var r=t(30),u=t(7045),a=t(9190),o=t(9974),l=t(5787),i=t(8554),c=t(408),s=t(1656),f=t(6178),d=t(6340),v=t(9781),m=t(2423).fastKey,p=t(9909),w=p.set,k=p.getterFor;e.exports={getConstructor:function(e,n,t,s){var f=e((function(e,u){l(e,d),w(e,{type:n,index:r(null),first:void 0,last:void 0,size:0}),v||(e.size=0),i(u)||c(u,e[s],{that:e,AS_ENTRIES:t})})),d=f.prototype,p=k(n),h=function(e,n,t){var r,u,a=p(e),o=U(e,n);return o?o.value=t:(a.last=o={index:u=m(n,!0),key:n,value:t,previous:r=a.last,next:void 0,removed:!1},a.first||(a.first=o),r&&(r.next=o),v?a.size++:e.size++,"F"!==u&&(a.index[u]=o)),e},U=function(e,n){var t,r=p(e),u=m(n);if("F"!==u)return r.index[u];for(t=r.first;t;t=t.next)if(t.key===n)return t};return a(d,{clear:function(){var e=this,n=p(e),t=n.index,r=n.first;while(r)r.removed=!0,r.previous&&(r.previous=r.previous.next=void 0),delete t[r.index],r=r.next;n.first=n.last=void 0,v?n.size=0:e.size=0},delete:function(e){var n=this,t=p(n),r=U(n,e);if(r){var u=r.next,a=r.previous;delete t.index[r.index],r.removed=!0,a&&(a.next=u),u&&(u.previous=a),t.first===r&&(t.first=u),t.last===r&&(t.last=a),v?t.size--:n.size--}return!!r},forEach:function(e){var n,t=p(this),r=o(e,arguments.length>1?arguments[1]:void 0);while(n=n?n.next:t.first){r(n.value,n.key,this);while(n&&n.removed)n=n.previous}},has:function(e){return!!U(this,e)}}),a(d,t?{get:function(e){var n=U(this,e);return n&&n.value},set:function(e,n){return h(this,0===e?0:e,n)}}:{add:function(e){return h(this,e=0===e?0:e,e)}}),v&&u(d,"size",{configurable:!0,get:function(){return p(this).size}}),f},setStrong:function(e,n,t){var r=n+" Iterator",u=k(n),a=k(r);s(e,n,(function(e,n){w(this,{type:r,target:e,state:u(e),kind:n,last:void 0})}),(function(){var e=a(this),n=e.kind,t=e.last;while(t&&t.removed)t=t.previous;return e.target&&(e.last=t=t?t.next:e.state.first)?f("keys"===n?t.key:"values"===n?t.value:[t.key,t.value],!1):(e.target=void 0,f(void 0,!0))}),t?"entries":"values",!t,!0),d(n)}}},7710:(e,n,t)=>{var r=t(2109),u=t(7854),a=t(1702),o=t(4705),l=t(8052),i=t(2423),c=t(408),s=t(5787),f=t(614),d=t(8554),v=t(111),m=t(7293),p=t(7072),w=t(8003),k=t(9587);e.exports=function(e,n,t){var h=-1!==e.indexOf("Map"),U=-1!==e.indexOf("Weak"),g=h?"set":"add",S=u[e],_=S&&S.prototype,x=S,W={},b=function(e){var n=a(_[e]);l(_,e,"add"===e?function(e){return n(this,0===e?0:e),this}:"delete"===e?function(e){return!(U&&!v(e))&&n(this,0===e?0:e)}:"get"===e?function(e){return U&&!v(e)?void 0:n(this,0===e?0:e)}:"has"===e?function(e){return!(U&&!v(e))&&n(this,0===e?0:e)}:function(e,t){return n(this,0===e?0:e,t),this})},y=o(e,!f(S)||!(U||_.forEach&&!m((function(){(new S).entries().next()}))));if(y)x=t.getConstructor(n,e,h,g),i.enable();else if(o(e,!0)){var D=new x,I=D[g](U?{}:-0,1)!==D,Y=m((function(){D.has(1)})),j=p((function(e){new S(e)})),z=!U&&m((function(){var e=new S,n=5;while(n--)e[g](n,n);return!e.has(-0)}));j||(x=n((function(e,n){s(e,_);var t=k(new S,e,x);return d(n)||c(n,t[g],{that:t,AS_ENTRIES:h}),t})),x.prototype=_,_.constructor=x),(Y||z)&&(b("delete"),b("has"),h&&b("get")),(z||I)&&b(g),U&&_.clear&&delete _.clear}return W[e]=x,r({global:!0,constructor:!0,forced:x!==S},W),w(x,e),U||t.setStrong(x,e,h),x}},4964:(e,n,t)=>{var r=t(5112),u=r("match");e.exports=function(e){var n=/./;try{"/./"[e](n)}catch(t){try{return n[u]=!1,"/./"[e](n)}catch(r){}}return!1}},9190:(e,n,t)=>{var r=t(8052);e.exports=function(e,n,t){for(var u in n)r(e,u,n[u],t);return e}},6677:(e,n,t)=>{var r=t(7293);e.exports=!r((function(){return Object.isExtensible(Object.preventExtensions({}))}))},2423:(e,n,t)=>{var r=t(2109),u=t(1702),a=t(3501),o=t(111),l=t(2597),i=t(3070).f,c=t(8006),s=t(1156),f=t(2050),d=t(9711),v=t(6677),m=!1,p=d("meta"),w=0,k=function(e){i(e,p,{value:{objectID:"O"+w++,weakData:{}}})},h=function(e,n){if(!o(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!l(e,p)){if(!f(e))return"F";if(!n)return"E";k(e)}return e[p].objectID},U=function(e,n){if(!l(e,p)){if(!f(e))return!0;if(!n)return!1;k(e)}return e[p].weakData},g=function(e){return v&&m&&f(e)&&!l(e,p)&&k(e),e},S=function(){_.enable=function(){},m=!0;var e=c.f,n=u([].splice),t={};t[p]=1,e(t).length&&(c.f=function(t){for(var r=e(t),u=0,a=r.length;u<a;u++)if(r[u]===p){n(r,u,1);break}return r},r({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:s.f}))},_=e.exports={enable:S,fastKey:h,getWeakData:U,onFreeze:g};a[p]=!0},7850:(e,n,t)=>{var r=t(111),u=t(4326),a=t(5112),o=a("match");e.exports=function(e){var n;return r(e)&&(void 0!==(n=e[o])?!!n:"RegExp"===u(e))}},3929:(e,n,t)=>{var r=t(7850),u=TypeError;e.exports=function(e){if(r(e))throw u("The method doesn't accept regular expressions");return e}},2050:(e,n,t)=>{var r=t(7293),u=t(111),a=t(4326),o=t(7556),l=Object.isExtensible,i=r((function(){l(1)}));e.exports=i||o?function(e){return!!u(e)&&((!o||"ArrayBuffer"!==a(e))&&(!l||l(e)))}:l},6699:(e,n,t)=>{var r=t(2109),u=t(1318).includes,a=t(7293),o=t(1223),l=a((function(){return!Array(1).includes()}));r({target:"Array",proto:!0,forced:l},{includes:function(e){return u(this,e,arguments.length>1?arguments[1]:void 0)}}),o("includes")},9600:(e,n,t)=>{var r=t(2109),u=t(1702),a=t(8361),o=t(5656),l=t(2133),i=u([].join),c=a!==Object,s=c||!l("join",",");r({target:"Array",proto:!0,forced:s},{join:function(e){return i(o(this),void 0===e?",":e)}})},7227:(e,n,t)=>{var r=t(7710),u=t(5631);r("Set",(function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}}),u)},189:(e,n,t)=>{t(7227)},2023:(e,n,t)=>{var r=t(2109),u=t(1702),a=t(3929),o=t(4488),l=t(1340),i=t(4964),c=u("".indexOf);r({target:"String",proto:!0,forced:!i("includes")},{includes:function(e){return!!~c(l(o(this)),l(a(e)),arguments.length>1?arguments[1]:void 0)}})},2330:(e,n,t)=>{t.r(n),t.d(n,{default:()=>W});var r=t(6347),u=t(5082),a=t(124),o=t(8534),l=(t(1539),t(189),t(8783),t(3948),t(9554),t(4747),t(1038),t(1249),t(2222),t(7327),t(3710),t(6699),t(2023),t(7042),t(3112),t(9600),t(6252)),i=t(2262),c=t(3577),s=t(6100),f=t(286),d=t(5856),v=t(4105),m=(0,l._)("h1",null,"Filter Role",-1),p=(0,l._)("h1",null,"Filter Tanggal",-1),w={class:"date-picker-modal"},k={class:"date-picker-modal"},h=(0,l._)("h1",null,"Filter Keterlambatan",-1),U=(0,l._)("h1",null,"Pencarian Nama Lengkap",-1),g=(0,l._)("h1",null,"Laporan Absensi",-1),S=10;const _={__name:"LaporanKehadiran",setup:function(e){var n=(0,s.ad)(d.H),t=(0,i.iH)([]),_=(0,i.iH)([]),x=(0,i.iH)(""),W=(0,i.iH)(""),b=(0,i.iH)(""),y=(0,i.iH)(!1),D=(0,i.iH)(""),I=(0,i.iH)({isOpen:!1,message:"",duration:2e3,color:"success"}),Y=(0,i.iH)(1),j=(0,i.iH)(!1),z=(0,i.iH)(!1),C=function(){j.value=!0},E=function(){j.value=!1},L=function(){z.value=!0},O=function(){z.value=!1},H=function(){var e=(0,o.Z)((0,a.Z)().mark((function e(){var t,r;return(0,a.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,s.PL)((0,s.hJ)(n,"users"));case 2:t=e.sent,r=new Set,t.forEach((function(e){var n=e.data();n.role&&r.add(n.role)})),_.value=Array.from(r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),M=function(){var e=(0,o.Z)((0,a.Z)().mark((function e(){var o,l,i,c,f,d;return(0,a.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("Fetching attendance records..."),e.prev=1,e.next=4,(0,s.PL)((0,s.hJ)(n,"users"));case 4:o=e.sent,l=o.docs.map((function(e){return(0,u.Z)({id:e.id},e.data())})),i=[],c=(0,r.Z)(l),e.prev=8,d=(0,a.Z)().mark((function e(){var t,r,u;return(0,a.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=f.value,r=(0,s.hJ)(n,"attendance",t.id,"records"),e.next=4,(0,s.PL)((0,s.IO)(r,(0,s.Xo)("masuk","desc")));case 4:u=e.sent,i=i.concat(u.docs.map((function(e){var n=e.data();return{id:e.id,userId:t.id,fullName:t.fullName,role:t.role,date:e.id,masuk:n.masuk?n.masuk.toDate().toLocaleString():"Belum absen",keluar:n.keluar?n.keluar.toDate().toLocaleString():"Belum absen",lateTime:P(n.masuk?n.masuk.toDate():null)}})));case 6:case"end":return e.stop()}}),e)})),c.s();case 11:if((f=c.n()).done){e.next=15;break}return e.delegateYield(d(),"t0",13);case 13:e.next=11;break;case 15:e.next=20;break;case 17:e.prev=17,e.t1=e["catch"](8),c.e(e.t1);case 20:return e.prev=20,c.f(),e.finish(20);case 23:t.value=i,console.log("Attendance records fetched:",t.value),e.next=31;break;case 27:e.prev=27,e.t2=e["catch"](1),console.error("Error fetching attendance records:",e.t2),Z("Error fetching attendance records.","danger");case 31:case"end":return e.stop()}}),e,null,[[1,27],[8,17,20,23]])})));return function(){return e.apply(this,arguments)}}(),N=(0,l.Fl)((function(){return t.value.filter((function(e){var n=new Date(e.date),t=W.value?new Date(W.value):new Date("2000-01-01"),r=b.value?new Date(b.value):new Date,u=F(e.masuk),a=e.fullName.toLowerCase().includes(D.value.toLowerCase());return(!x.value||e.role===x.value)&&n>=t&&n<=r&&(!y.value||u)&&a}))})),T=(0,l.Fl)((function(){return N.value.slice(0,Y.value*S)})),V=(0,l.Fl)((function(){return Y.value*S<N.value.length})),A=function(){Y.value++},F=function(e){if(!e)return!1;var n=new Date(e),t=new Date(n);return t.setHours(8,0,0,0),n>t},P=function(e){if(!e)return"";var n=new Date(e),t=new Date(n);if(t.setHours(8,0,0,0),n>t){var r=Math.floor((n-t)/6e4),u=Math.floor(r/60),a=r%60;return"".concat(u," jam ").concat(a," menit")}return"Tepat Waktu"},K=function(){var e=v.P6.json_to_sheet(N.value),n=v.P6.book_new();v.P6.book_append_sheet(n,e,"Laporan Absensi"),v.NC(n,"laporan_absensi.xlsx")},Z=function(e,n){I.value={isOpen:!0,message:e,duration:2e3,color:n}},B=function(e){var n=new Date(e),t="".concat(n.getMonth()+1).padStart(2,"0"),r="".concat(n.getDate()).padStart(2,"0"),u=n.getFullYear();return[u,t,r].join("-")},G=function(){Y.value=1};return(0,l.bv)((function(){H(),M()})),function(e,n){return(0,l.wg)(),(0,l.j4)((0,i.SU)(f._i),null,{default:(0,l.w5)((function(){return[(0,l.Wm)((0,i.SU)(f.Gu),null,{default:(0,l.w5)((function(){return[(0,l.Wm)((0,i.SU)(f.sr),null,{default:(0,l.w5)((function(){return[(0,l.Wm)((0,i.SU)(f.wd),null,{default:(0,l.w5)((function(){return[(0,l.Uk)("Laporan Kehadiran")]})),_:1}),(0,l.Wm)((0,i.SU)(f.oU),{slot:"start","default-href":"/"})]})),_:1})]})),_:1}),(0,l.Wm)((0,i.SU)(f.W2),{class:"ion-padding"},{default:(0,l.w5)((function(){return[m,(0,l.Wm)((0,i.SU)(f.Ie),null,{default:(0,l.w5)((function(){return[(0,l.Wm)((0,i.SU)(f.Q$),null,{default:(0,l.w5)((function(){return[(0,l.Uk)("Role")]})),_:1}),(0,l.Wm)((0,i.SU)(f.t9),{modelValue:x.value,"onUpdate:modelValue":n[0]||(n[0]=function(e){return x.value=e}),onIonChange:G},{default:(0,l.w5)((function(){return[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(_.value,(function(e){return(0,l.wg)(),(0,l.j4)((0,i.SU)(f.n0),{key:e,value:e},{default:(0,l.w5)((function(){return[(0,l.Uk)((0,c.zw)(e),1)]})),_:2},1032,["value"])})),128))]})),_:1},8,["modelValue"])]})),_:1}),p,(0,l.Wm)((0,i.SU)(f.Ie),null,{default:(0,l.w5)((function(){return[(0,l.Wm)((0,i.SU)(f.Q$),null,{default:(0,l.w5)((function(){return[(0,l.Uk)("Dari")]})),_:1}),(0,l.Wm)((0,i.SU)(f.YG),{expand:"block",onClick:C},{default:(0,l.w5)((function(){return[(0,l.Uk)((0,c.zw)(W.value?B(W.value):"Pilih Tanggal"),1)]})),_:1})]})),_:1}),(0,l.Wm)((0,i.SU)(f.Ie),null,{default:(0,l.w5)((function(){return[(0,l.Wm)((0,i.SU)(f.Q$),null,{default:(0,l.w5)((function(){return[(0,l.Uk)("Sampai")]})),_:1}),(0,l.Wm)((0,i.SU)(f.YG),{expand:"block",onClick:L},{default:(0,l.w5)((function(){return[(0,l.Uk)((0,c.zw)(b.value?B(b.value):"Pilih Tanggal"),1)]})),_:1})]})),_:1}),(0,l.Wm)((0,i.SU)(f.ki),{"is-open":j.value,onIonModalDidDismiss:E},{default:(0,l.w5)((function(){return[(0,l.Wm)((0,i.SU)(f.W2),null,{default:(0,l.w5)((function(){return[(0,l._)("div",w,[(0,l.Wm)((0,i.SU)(f.x4),{"display-format":"YYYY-MM-DD","picker-format":"YYYY-MM-DD",modelValue:W.value,"onUpdate:modelValue":n[1]||(n[1]=function(e){return W.value=e}),onIonChange:G},null,8,["modelValue"]),(0,l.Wm)((0,i.SU)(f.YG),{expand:"block",onClick:E},{default:(0,l.w5)((function(){return[(0,l.Uk)("Tutup")]})),_:1})])]})),_:1})]})),_:1},8,["is-open"]),(0,l.Wm)((0,i.SU)(f.ki),{"is-open":z.value,onIonModalDidDismiss:O},{default:(0,l.w5)((function(){return[(0,l.Wm)((0,i.SU)(f.W2),null,{default:(0,l.w5)((function(){return[(0,l._)("div",k,[(0,l.Wm)((0,i.SU)(f.x4),{"display-format":"YYYY-MM-DD","picker-format":"YYYY-MM-DD",modelValue:b.value,"onUpdate:modelValue":n[2]||(n[2]=function(e){return b.value=e}),onIonChange:G},null,8,["modelValue"]),(0,l.Wm)((0,i.SU)(f.YG),{expand:"block",onClick:O},{default:(0,l.w5)((function(){return[(0,l.Uk)("Tutup")]})),_:1})])]})),_:1})]})),_:1},8,["is-open"]),h,(0,l.Wm)((0,i.SU)(f.Ie),null,{default:(0,l.w5)((function(){return[(0,l.Wm)((0,i.SU)(f.Q$),null,{default:(0,l.w5)((function(){return[(0,l.Uk)("Telat")]})),_:1}),(0,l.Wm)((0,i.SU)(f.ho),{modelValue:y.value,"onUpdate:modelValue":n[3]||(n[3]=function(e){return y.value=e}),onIonChange:G},null,8,["modelValue"])]})),_:1}),U,(0,l.Wm)((0,i.SU)(f.Ie),null,{default:(0,l.w5)((function(){return[(0,l.Wm)((0,i.SU)(f.Q$),null,{default:(0,l.w5)((function(){return[(0,l.Uk)("Nama Lengkap")]})),_:1}),(0,l.Wm)((0,i.SU)(f.pK),{modelValue:D.value,"onUpdate:modelValue":n[4]||(n[4]=function(e){return D.value=e}),placeholder:"Cari Nama Lengkap",onIonInput:G},null,8,["modelValue"])]})),_:1}),g,(0,l.Wm)((0,i.SU)(f.jY),{class:"table"},{default:(0,l.w5)((function(){return[(0,l.Wm)((0,i.SU)(f.Nd),{class:"table-header"},{default:(0,l.w5)((function(){return[(0,l.Wm)((0,i.SU)(f.wI),null,{default:(0,l.w5)((function(){return[(0,l.Uk)("Nama Lengkap")]})),_:1}),(0,l.Wm)((0,i.SU)(f.wI),null,{default:(0,l.w5)((function(){return[(0,l.Uk)("Role")]})),_:1}),(0,l.Wm)((0,i.SU)(f.wI),null,{default:(0,l.w5)((function(){return[(0,l.Uk)("Tanggal")]})),_:1}),(0,l.Wm)((0,i.SU)(f.wI),null,{default:(0,l.w5)((function(){return[(0,l.Uk)("Masuk")]})),_:1}),(0,l.Wm)((0,i.SU)(f.wI),null,{default:(0,l.w5)((function(){return[(0,l.Uk)("Keluar")]})),_:1}),(0,l.Wm)((0,i.SU)(f.wI),null,{default:(0,l.w5)((function(){return[(0,l.Uk)("Keterangan Telat")]})),_:1})]})),_:1}),0===N.value.length?((0,l.wg)(),(0,l.j4)((0,i.SU)(f.Nd),{key:0},{default:(0,l.w5)((function(){return[(0,l.Wm)((0,i.SU)(f.wI),{colspan:"6"},{default:(0,l.w5)((function(){return[(0,l.Uk)("Tidak ada data absensi")]})),_:1})]})),_:1})):(0,l.kq)("",!0),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(T.value,(function(e){return(0,l.wg)(),(0,l.j4)((0,i.SU)(f.Nd),{key:e.id,class:"table-row"},{default:(0,l.w5)((function(){return[(0,l.Wm)((0,i.SU)(f.wI),null,{default:(0,l.w5)((function(){return[(0,l.Uk)((0,c.zw)(e.fullName),1)]})),_:2},1024),(0,l.Wm)((0,i.SU)(f.wI),null,{default:(0,l.w5)((function(){return[(0,l.Uk)((0,c.zw)(e.role),1)]})),_:2},1024),(0,l.Wm)((0,i.SU)(f.wI),null,{default:(0,l.w5)((function(){return[(0,l.Uk)((0,c.zw)(e.date),1)]})),_:2},1024),(0,l.Wm)((0,i.SU)(f.wI),null,{default:(0,l.w5)((function(){return[(0,l.Wm)((0,i.SU)(f.yp),{color:F(e.masuk)?"danger":"success"},{default:(0,l.w5)((function(){return[(0,l.Uk)((0,c.zw)(e.masuk?e.masuk:"Belum absen"),1)]})),_:2},1032,["color"])]})),_:2},1024),(0,l.Wm)((0,i.SU)(f.wI),null,{default:(0,l.w5)((function(){return[(0,l.Uk)((0,c.zw)(e.keluar?e.keluar:"Belum absen"),1)]})),_:2},1024),(0,l.Wm)((0,i.SU)(f.wI),null,{default:(0,l.w5)((function(){return[(0,l.Uk)((0,c.zw)(P(e.masuk)),1)]})),_:2},1024)]})),_:2},1024)})),128))]})),_:1}),V.value?((0,l.wg)(),(0,l.j4)((0,i.SU)(f.YG),{key:0,onClick:A,color:"primary"},{default:(0,l.w5)((function(){return[(0,l.Uk)("Load More Attendance Records")]})),_:1})):(0,l.kq)("",!0),(0,l.Wm)((0,i.SU)(f.YG),{onClick:K,color:"success"},{default:(0,l.w5)((function(){return[(0,l.Uk)("Export Laporan Absensi ke Excel")]})),_:1}),(0,l.Wm)((0,i.SU)(f.Px),{"is-open":I.value.isOpen,message:I.value.message,duration:I.value.duration,color:I.value.color,onDidDismiss:n[5]||(n[5]=function(e){return I.value.isOpen=!1})},null,8,["is-open","message","duration","color"])]})),_:1})]})),_:1})}}},x=_,W=x}}]);
//# sourceMappingURL=330.020bdd2c.js.map