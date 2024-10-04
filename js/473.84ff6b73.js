"use strict";(self["webpackChunkresep_bunda"]=self["webpackChunkresep_bunda"]||[]).push([[473],{6091:(e,n,r)=>{var t=r(6530).PROPER,a=r(7293),u=r(1361),i="​᠎";e.exports=function(e){return a((function(){return!!u[e]()||i[e]()!==i||t&&u[e].name!==e}))}},3210:(e,n,r)=>{var t=r(2109),a=r(3111).trim,u=r(6091);t({target:"String",proto:!0,forced:u("trim")},{trim:function(){return a(this)}})},4473:(e,n,r)=>{r.r(n),r.d(n,{default:()=>h});var t=r(3144),a=r(124),u=r(8534),i=(r(1249),r(3210),r(6252)),o=r(2262),l=r(1661),c=r(6100),s=r(316),d=r(6708),f=r(6693),p=r(5856),m={class:"profile-picture-container"},g=["src"],v=(0,i._)("label",{for:"file-upload",class:"upload-button"},"Ganti Foto Profil",-1);const k={__name:"HalamanSetting",setup:function(e){var n=r(6706),k=(0,c.ad)(p.H),U=(0,d.cF)(p.H),h=(0,o.iH)(""),w=(0,o.iH)(""),b=(0,o.iH)(""),x=(0,o.iH)(""),S=(0,o.iH)(""),W=(0,o.iH)(""),_=(0,o.iH)(n),R=(0,o.iH)([]),Z=(0,o.iH)({isOpen:!1,message:"",duration:2e3,color:"success"}),H=function(){var e=(0,u.Z)((0,a.Z)().mark((function e(){var r,t,u,i;return(0,a.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=(0,s.v0)(p.H),t=r.currentUser,t){e.next=5;break}return K("Pengguna tidak terautentikasi","danger"),e.abrupt("return");case 5:return e.prev=5,e.next=8,(0,c.QT)((0,c.JU)(k,"users",t.uid));case 8:u=e.sent,u.exists()?(i=u.data(),h.value=i.fullName||"",w.value=i.email||"",b.value=i.username||"",x.value=i.kelas||"",S.value=i.role||"",_.value=i.profilePicture||n,W.value=i.qrCode||""):K("Data pengguna tidak ditemukan","danger"),e.next=16;break;case 12:e.prev=12,e.t0=e["catch"](5),console.error("Error fetching user data:",e.t0),K("Terjadi kesalahan saat mengambil data pengguna","danger");case 16:case"end":return e.stop()}}),e,null,[[5,12]])})));return function(){return e.apply(this,arguments)}}(),P=function(){var e=(0,u.Z)((0,a.Z)().mark((function e(){var n;return(0,a.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,c.PL)((0,c.hJ)(k,"kelas"));case 2:n=e.sent,R.value=n.docs.map((function(e){return(0,t.Z)({id:e.id},e.data())}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Q=function(){var e=(0,u.Z)((0,a.Z)().mark((function e(){var n;return(0,a.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.mR.checkPermission({force:!0});case 3:return e.next=5,f.mR.hideBackground();case 5:return e.next=7,f.mR.startScan();case 7:n=e.sent,n.hasContent&&(W.value=n.content,K("QR Code berhasil dipindai","success")),e.next=15;break;case 11:e.prev=11,e.t0=e["catch"](0),console.error("Error scanning QR code:",e.t0),K("Error scanning QR code","danger");case 15:return e.prev=15,f.mR.showBackground(),f.mR.stopScan(),e.finish(15);case 19:case"end":return e.stop()}}),e,null,[[0,11,15,19]])})));return function(){return e.apply(this,arguments)}}(),V=function(){var e=(0,u.Z)((0,a.Z)().mark((function e(){var n,r;return(0,a.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=(0,s.v0)(p.H),r=n.currentUser,r){e.next=5;break}return K("Pengguna tidak terautentikasi","danger"),e.abrupt("return");case 5:if(""!==W.value.trim()){e.next=8;break}return K("Kode QR tidak boleh kosong","danger"),e.abrupt("return");case 8:return e.prev=8,e.next=11,(0,c.r7)((0,c.JU)(k,"users",r.uid),{qrCode:W.value});case 11:K("Kode QR berhasil didaftarkan","success"),e.next=18;break;case 14:e.prev=14,e.t0=e["catch"](8),console.error("Error registering QR code:",e.t0),K("Gagal mendaftarkan kode QR","danger");case 18:case"end":return e.stop()}}),e,null,[[8,14]])})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=(0,u.Z)((0,a.Z)().mark((function e(){var n,r;return(0,a.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=(0,s.v0)(p.H),r=n.currentUser,r){e.next=5;break}return K("Pengguna tidak terautentikasi","danger"),e.abrupt("return");case 5:return e.prev=5,e.next=8,(0,c.r7)((0,c.JU)(k,"users",r.uid),{fullName:h.value,email:w.value,username:b.value,kelas:x.value,profilePicture:_.value});case 8:K("Informasi pengguna berhasil diperbarui","success"),e.next=15;break;case 11:e.prev=11,e.t0=e["catch"](5),console.error("Error updating user info:",e.t0),K("Gagal memperbarui informasi pengguna","danger");case 15:case"end":return e.stop()}}),e,null,[[5,11]])})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=(0,u.Z)((0,a.Z)().mark((function e(n){var r,t,u,i,o;return(0,a.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=n.target.files[0],r){e.next=3;break}return e.abrupt("return");case 3:if(t=(0,s.v0)(p.H),u=t.currentUser,u){e.next=8;break}return K("Pengguna tidak terautentikasi","danger"),e.abrupt("return");case 8:return i=(0,d.iH)(U,"profile_pictures/".concat(u.uid)),e.prev=9,e.next=12,(0,d.KV)(i,r);case 12:return e.next=14,(0,d.Jt)(i);case 14:return o=e.sent,_.value=o,K("Foto profil berhasil diunggah","success"),e.next=19,(0,c.r7)((0,c.JU)(k,"users",u.uid),{profilePicture:o});case 19:e.next=25;break;case 21:e.prev=21,e.t0=e["catch"](9),console.error("Error uploading profile picture:",e.t0),K("Gagal mengunggah foto profil","danger");case 25:case"end":return e.stop()}}),e,null,[[9,21]])})));return function(n){return e.apply(this,arguments)}}(),K=function(e,n){Z.value={isOpen:!0,message:e,duration:2e3,color:n}},E=function(e){H(),P(),e.target.complete()};return(0,i.bv)((function(){H(),P()})),function(e,r){return(0,i.wg)(),(0,i.j4)((0,o.SU)(l._i),null,{default:(0,i.w5)((function(){return[(0,i.Wm)((0,o.SU)(l.Gu),{mode:"ios"},{default:(0,i.w5)((function(){return[(0,i.Wm)((0,o.SU)(l.sr),null,{default:(0,i.w5)((function(){return[(0,i.Wm)((0,o.SU)(l.wd),null,{default:(0,i.w5)((function(){return[(0,i.Uk)("Pengaturan")]})),_:1}),(0,i.Wm)((0,o.SU)(l.oU),{slot:"start","default-href":"/"})]})),_:1})]})),_:1}),(0,i.Wm)((0,o.SU)(l.W2),{fullscreen:!0},{default:(0,i.w5)((function(){return[(0,i.Wm)((0,o.SU)(l.nJ),{slot:"fixed",onIonRefresh:r[0]||(r[0]=function(e){return E(e)})},{default:(0,i.w5)((function(){return[(0,i.Wm)((0,o.SU)(l.Wo))]})),_:1}),(0,i.Wm)((0,o.SU)(l.W2),{class:"ion-padding"},{default:(0,i.w5)((function(){return[(0,i._)("div",m,[(0,i._)("img",{src:_.value||(0,o.SU)(n),alt:"Profile Picture",class:"profile-picture"},null,8,g),v,(0,i._)("input",{id:"file-upload",type:"file",onChange:y,accept:"image/*"},null,32)]),(0,i.Wm)((0,o.SU)(l.Ie),null,{default:(0,i.w5)((function(){return[(0,i.Wm)((0,o.SU)(l.Q$),{position:"floating"},{default:(0,i.w5)((function(){return[(0,i.Uk)("Nama Lengkap")]})),_:1}),(0,i.Wm)((0,o.SU)(l.pK),{modelValue:h.value,"onUpdate:modelValue":r[1]||(r[1]=function(e){return h.value=e})},null,8,["modelValue"])]})),_:1}),(0,i.Wm)((0,o.SU)(l.Ie),null,{default:(0,i.w5)((function(){return[(0,i.Wm)((0,o.SU)(l.Q$),{position:"floating"},{default:(0,i.w5)((function(){return[(0,i.Uk)("Email")]})),_:1}),(0,i.Wm)((0,o.SU)(l.pK),{modelValue:w.value,"onUpdate:modelValue":r[2]||(r[2]=function(e){return w.value=e}),type:"email"},null,8,["modelValue"])]})),_:1}),(0,i.Wm)((0,o.SU)(l.Ie),null,{default:(0,i.w5)((function(){return[(0,i.Wm)((0,o.SU)(l.Q$),{position:"floating"},{default:(0,i.w5)((function(){return[(0,i.Uk)("Username")]})),_:1}),(0,i.Wm)((0,o.SU)(l.pK),{modelValue:b.value,"onUpdate:modelValue":r[3]||(r[3]=function(e){return b.value=e})},null,8,["modelValue"])]})),_:1}),(0,i.Wm)((0,o.SU)(l.Ie),null,{default:(0,i.w5)((function(){return[(0,i.Wm)((0,o.SU)(l.Q$),{position:"floating"},{default:(0,i.w5)((function(){return[(0,i.Uk)("Role")]})),_:1}),(0,i.Wm)((0,o.SU)(l.pK),{modelValue:S.value,"onUpdate:modelValue":r[4]||(r[4]=function(e){return S.value=e}),readonly:""},null,8,["modelValue"])]})),_:1}),(0,i.Wm)((0,o.SU)(l.YG),{style:{color:""},onClick:C,expand:"block",color:"warning"},{default:(0,i.w5)((function(){return[(0,i.Uk)("Perbarui Informasi Pengguna")]})),_:1}),(0,i.Wm)((0,o.SU)(l.Ie),null,{default:(0,i.w5)((function(){return[(0,i.Wm)((0,o.SU)(l.Q$),{position:"floating"},{default:(0,i.w5)((function(){return[(0,i.Uk)("Kode QR")]})),_:1}),(0,i.Wm)((0,o.SU)(l.pK),{modelValue:W.value,"onUpdate:modelValue":r[5]||(r[5]=function(e){return W.value=e}),placeholder:"Hasil scan QR Code",readonly:""},null,8,["modelValue"])]})),_:1}),(0,i.Wm)((0,o.SU)(l.YG),{onClick:Q,expand:"block",color:"warning"},{default:(0,i.w5)((function(){return[(0,i.Uk)("Scan QR Code")]})),_:1}),(0,i.Wm)((0,o.SU)(l.YG),{onClick:V,expand:"block",color:"warning"},{default:(0,i.w5)((function(){return[(0,i.Uk)("Daftarkan Kode QR")]})),_:1})]})),_:1}),(0,i.Wm)((0,o.SU)(l.jY),{class:"ion-padding"}),(0,i.Wm)((0,o.SU)(l.Px),{"is-open":Z.value.isOpen,message:Z.value.message,duration:Z.value.duration,color:Z.value.color,onDidDismiss:r[6]||(r[6]=function(){return Z.value.isOpen=!1})},null,8,["is-open","message","duration","color"])]})),_:1})]})),_:1})}}},U=k,h=U},6706:(e,n,r)=>{e.exports=r.p+"img/avatar.40910a76.png"}}]);
//# sourceMappingURL=473.84ff6b73.js.map