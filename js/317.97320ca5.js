"use strict";(self["webpackChunkresep_bunda"]=self["webpackChunkresep_bunda"]||[]).push([[317],{5212:(n,e,t)=>{var a=t(2109),r=t(2092).some,u=t(2133),i=u("some");a({target:"Array",proto:!0,forced:!i},{some:function(n){return r(this,n,arguments.length>1?arguments[1]:void 0)}})},6317:(n,e,t)=>{t.r(e),t.d(e,{default:()=>h});var a=t(3144),r=t(124),u=t(8534),i=(t(1249),t(9826),t(1539),t(8309),t(7658),t(3710),t(5212),t(7327),t(6252)),s=t(2262),c=t(3577),l=t(1661),o=t(6100),f=t(316),d=t(2201),p=t(5856);const m={__name:"JadwalUjian",setup:function(n){var e=(0,o.ad)(p.H),t=(0,f.v0)(p.H),m=(0,d.tv)(),w=(0,s.iH)([]),v=(0,s.iH)(""),h=(0,s.iH)([]),U=(0,s.iH)([]),Z=(0,s.iH)([]),k=(0,s.iH)({isOpen:!1,message:"",duration:2e3,color:"success"}),_=function(){var n=(0,u.Z)((0,r.Z)().mark((function n(){var a,u;return(0,r.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(a=t.currentUser,!a){n.next=6;break}return n.next=4,(0,o.QT)((0,o.JU)(e,"users",a.uid));case 4:u=n.sent,u.exists()&&(v.value=u.data().kelas);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),x=function(){var n=(0,u.Z)((0,r.Z)().mark((function n(){var t;return(0,r.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,(0,o.PL)((0,o.hJ)(e,"kelas"));case 2:t=n.sent,U.value=t.docs.map((function(n){return(0,a.Z)({id:n.id},n.data())}));case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),g=function(){var n=(0,u.Z)((0,r.Z)().mark((function n(){var t;return(0,r.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,(0,o.PL)((0,o.hJ)(e,"mataPelajaran"));case 2:t=n.sent,Z.value=t.docs.map((function(n){return(0,a.Z)({id:n.id},n.data())}));case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),j=function(){var n=(0,u.Z)((0,r.Z)().mark((function n(){var t;return(0,r.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,(0,o.PL)((0,o.hJ)(e,"jadwal"));case 2:t=n.sent,w.value=t.docs.map((function(n){var e=n.data(),t=U.value.find((function(n){return n.id===e.kelas})),r=Z.value.find((function(n){return n.id===e.mataPelajaran}));return(0,a.Z)((0,a.Z)({id:n.id},e),{},{className:t?t.name:"N/A",subjectName:r?r.name:"N/A"})}));case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),S=function(){var n=(0,u.Z)((0,r.Z)().mark((function n(){var u,i,s;return(0,r.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(u=t.currentUser,!u){n.next=7;break}return i=(0,o.IO)((0,o.hJ)(e,"examResults"),(0,o.ar)("userId","==",u.uid)),n.next=5,(0,o.PL)(i);case 5:s=n.sent,h.value=s.docs.map((function(n){return(0,a.Z)({id:n.id},n.data())}));case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),W=function(n){n.aktif?b(n.id):N("Ujian belum dimulai.","warning")},b=function(n){y(n)?(N("Anda sudah melakukan ujian ini.","danger"),m.push({name:"lihathasilujianUser"})):m.push({name:"halamanujianUser",params:{jadwalId:n}})},D=function(n){if(!n)return"N/A";var e;if(n.seconds)e=new Date(1e3*n.seconds);else{if(!("string"===typeof n||n instanceof Date))return"Invalid Date";e=new Date(n)}return e.toLocaleDateString("id-ID",{year:"numeric",month:"short",day:"numeric"})},y=function(n){return h.value.some((function(e){return e.jadwalId===n}))},H=(0,i.Fl)((function(){return w.value.filter((function(n){return n.kelas===v.value}))}));(0,i.bv)((0,u.Z)((0,r.Z)().mark((function n(){return(0,r.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,x();case 2:return n.next=4,g();case 4:return n.next=6,_();case 6:return n.next=8,j();case 8:return n.next=10,S();case 10:case"end":return n.stop()}}),n)}))));var N=function(n,e){k.value={isOpen:!0,message:n,duration:2e3,color:e}};return function(n,e){return(0,i.wg)(),(0,i.j4)((0,s.SU)(l._i),null,{default:(0,i.w5)((function(){return[(0,i.Wm)((0,s.SU)(l.Gu),{mode:"ios"},{default:(0,i.w5)((function(){return[(0,i.Wm)((0,s.SU)(l.sr),null,{default:(0,i.w5)((function(){return[(0,i.Wm)((0,s.SU)(l.wd),null,{default:(0,i.w5)((function(){return[(0,i.Uk)("Jadwal Ujian")]})),_:1}),(0,i.Wm)((0,s.SU)(l.oU),{slot:"start","default-href":"/"})]})),_:1})]})),_:1}),(0,i.Wm)((0,s.SU)(l.W2),{fullscreen:!0},{default:(0,i.w5)((function(){return[(0,i.Wm)((0,s.SU)(l.W2),{class:"ion-padding"},{default:(0,i.w5)((function(){return[(0,i.Wm)((0,s.SU)(l.Nd),null,{default:(0,i.w5)((function(){return[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(H.value,(function(n){return(0,i.wg)(),(0,i.j4)((0,s.SU)(l.wI),{key:n.id},{default:(0,i.w5)((function(){return[(0,i.Wm)((0,s.SU)(l.PM),{onClick:function(e){return W(n)}},{default:(0,i.w5)((function(){return[(0,i.Wm)((0,s.SU)(l.Zi),null,{default:(0,i.w5)((function(){return[(0,i.Wm)((0,s.SU)(l.Dq),null,{default:(0,i.w5)((function(){return[(0,i.Uk)("Ujian Mata Pelajaran "+(0,c.zw)(n.subjectName),1)]})),_:2},1024)]})),_:2},1024),(0,i.Wm)((0,s.SU)(l.FN),null,{default:(0,i.w5)((function(){return[(0,i._)("p",null,"Kelas: "+(0,c.zw)(n.className),1),(0,i._)("p",null,"Durasi: "+(0,c.zw)(n.durasi)+" Menit",1),(0,i._)("p",null,"Tanggal Ujian: "+(0,c.zw)(D(n.tanggalUjian)),1)]})),_:2},1024)]})),_:2},1032,["onClick"])]})),_:2},1024)})),128))]})),_:1})]})),_:1}),(0,i.Wm)((0,s.SU)(l.Px),{"is-open":k.value.isOpen,message:k.value.message,duration:k.value.duration,color:k.value.color,onDidDismiss:e[0]||(e[0]=function(){return k.value.isOpen=!1})},null,8,["is-open","message","duration","color"])]})),_:1})]})),_:1})}}};var w=t(3744);const v=(0,w.Z)(m,[["__scopeId","data-v-50f818bf"]]),h=v}}]);
//# sourceMappingURL=317.97320ca5.js.map