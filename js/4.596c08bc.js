"use strict";(self["webpackChunkresep_bunda"]=self["webpackChunkresep_bunda"]||[]).push([[4],{4:(e,n,t)=>{t.r(n),t.d(n,{default:()=>x});t(8309);var a=t(6252),r=t(3577),i=(0,a._)("div",{id:"editor-container"},null,-1),u=(0,a._)("h2",null,"Daftar Materi",-1),o=["innerHTML"],l=(0,a._)("div",{id:"editor-edit-container"},null,-1);function c(e,n,t,c,s,d){var f=(0,a.up)("ion-title"),m=(0,a.up)("ion-back-button"),p=(0,a.up)("ion-toolbar"),w=(0,a.up)("ion-header"),v=(0,a.up)("ion-refresher-content"),h=(0,a.up)("ion-refresher"),k=(0,a.up)("ion-label"),g=(0,a.up)("ion-input"),b=(0,a.up)("ion-item"),M=(0,a.up)("ion-select-option"),_=(0,a.up)("ion-select"),W=(0,a.up)("ion-button"),x=(0,a.up)("ion-list"),Z=(0,a.up)("ion-col"),H=(0,a.up)("ion-row"),D=(0,a.up)("ion-grid"),I=(0,a.up)("ion-content"),C=(0,a.up)("ion-buttons"),U=(0,a.up)("ion-modal"),j=(0,a.up)("ion-toast"),y=(0,a.up)("ion-page");return(0,a.wg)(),(0,a.j4)(y,null,{default:(0,a.w5)((function(){return[(0,a.Wm)(w,{mode:"ios"},{default:(0,a.w5)((function(){return[(0,a.Wm)(p,null,{default:(0,a.w5)((function(){return[(0,a.Wm)(f,null,{default:(0,a.w5)((function(){return[(0,a.Uk)("Tambah Materi")]})),_:1}),(0,a.Wm)(m,{slot:"start","default-href":"/"})]})),_:1})]})),_:1}),(0,a.Wm)(I,{fullscreen:!0},{default:(0,a.w5)((function(){return[(0,a.Wm)(h,{slot:"fixed",onIonRefresh:n[0]||(n[0]=function(n){return e.doRefresh(n)})},{default:(0,a.w5)((function(){return[(0,a.Wm)(v)]})),_:1}),(0,a.Wm)(I,{class:"ion-padding"},{default:(0,a.w5)((function(){return[(0,a.Wm)(b,null,{default:(0,a.w5)((function(){return[(0,a.Wm)(k,null,{default:(0,a.w5)((function(){return[(0,a.Uk)("Judul Materi")]})),_:1}),(0,a.Wm)(g,{modelValue:e.title,"onUpdate:modelValue":n[1]||(n[1]=function(n){return e.title=n}),placeholder:"Masukkan judul materi"},null,8,["modelValue"])]})),_:1}),(0,a.Wm)(b,null,{default:(0,a.w5)((function(){return[(0,a.Wm)(k,null,{default:(0,a.w5)((function(){return[(0,a.Uk)("Kelas")]})),_:1}),(0,a.Wm)(_,{modelValue:e.selectedClass,"onUpdate:modelValue":n[2]||(n[2]=function(n){return e.selectedClass=n}),placeholder:"Pilih Kelas"},{default:(0,a.w5)((function(){return[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.classes,(function(e){return(0,a.wg)(),(0,a.j4)(M,{key:e.id,value:e.id},{default:(0,a.w5)((function(){return[(0,a.Uk)((0,r.zw)(e.name),1)]})),_:2},1032,["value"])})),128))]})),_:1},8,["modelValue"])]})),_:1}),(0,a.Wm)(b,null,{default:(0,a.w5)((function(){return[(0,a.Wm)(k,null,{default:(0,a.w5)((function(){return[(0,a.Uk)("Mata Pelajaran")]})),_:1}),(0,a.Wm)(_,{modelValue:e.selectedSubject,"onUpdate:modelValue":n[3]||(n[3]=function(n){return e.selectedSubject=n}),placeholder:"Pilih Mata Pelajaran"},{default:(0,a.w5)((function(){return[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.subjects,(function(e){return(0,a.wg)(),(0,a.j4)(M,{key:e.id,value:e.id},{default:(0,a.w5)((function(){return[(0,a.Uk)((0,r.zw)(e.name),1)]})),_:2},1032,["value"])})),128))]})),_:1},8,["modelValue"])]})),_:1}),i,(0,a.Wm)(W,{style:{color:"white"},expand:"block",onClick:e.saveMateri},{default:(0,a.w5)((function(){return[(0,a.Uk)("Simpan Materi")]})),_:1},8,["onClick"]),(0,a.Wm)(D,{class:"ion-padding"},{default:(0,a.w5)((function(){return[(0,a.Wm)(H,null,{default:(0,a.w5)((function(){return[(0,a.Wm)(Z,null,{default:(0,a.w5)((function(){return[u,(0,a.Wm)(x,null,{default:(0,a.w5)((function(){return[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.materiList,(function(n){return(0,a.wg)(),(0,a.j4)(b,{key:n.id},{default:(0,a.w5)((function(){return[(0,a.Wm)(k,null,{default:(0,a.w5)((function(){return[(0,a._)("h3",null,(0,r.zw)(n.title),1),(0,a._)("p",null,"Kelas: "+(0,r.zw)(n.className),1),(0,a._)("p",null,"Mata Pelajaran: "+(0,r.zw)(n.subjectName),1)]})),_:2},1024),(0,a.Wm)(W,{style:{color:"white"},onClick:function(t){return e.openDetailModal(n.content)}},{default:(0,a.w5)((function(){return[(0,a.Uk)("Detail")]})),_:2},1032,["onClick"]),(0,a.Wm)(W,{color:"success",onClick:function(t){return e.openEditModal(n)}},{default:(0,a.w5)((function(){return[(0,a.Uk)("Edit")]})),_:2},1032,["onClick"]),(0,a.Wm)(W,{color:"danger",onClick:function(t){return e.deleteMateri(n.id)}},{default:(0,a.w5)((function(){return[(0,a.Uk)("Hapus")]})),_:2},1032,["onClick"])]})),_:2},1024)})),128))]})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1}),(0,a.Wm)(U,{"is-open":e.isDetailModalOpen,onDidDismiss:e.closeDetailModal},{default:(0,a.w5)((function(){return[(0,a.Wm)(w,null,{default:(0,a.w5)((function(){return[(0,a.Wm)(p,null,{default:(0,a.w5)((function(){return[(0,a.Wm)(f,null,{default:(0,a.w5)((function(){return[(0,a.Uk)("Detail Materi")]})),_:1}),(0,a.Wm)(C,{slot:"end"},{default:(0,a.w5)((function(){return[(0,a.Wm)(W,{onClick:e.closeDetailModal},{default:(0,a.w5)((function(){return[(0,a.Uk)("Close")]})),_:1},8,["onClick"])]})),_:1})]})),_:1})]})),_:1}),(0,a.Wm)(I,null,{default:(0,a.w5)((function(){return[(0,a._)("div",{innerHTML:e.detailContent},null,8,o)]})),_:1})]})),_:1},8,["is-open","onDidDismiss"]),(0,a.Wm)(U,{"is-open":e.isEditModalOpen,onDidPresent:e.handleModalDidPresent,onDidDismiss:e.closeEditModal},{default:(0,a.w5)((function(){return[(0,a.Wm)(w,null,{default:(0,a.w5)((function(){return[(0,a.Wm)(p,null,{default:(0,a.w5)((function(){return[(0,a.Wm)(f,null,{default:(0,a.w5)((function(){return[(0,a.Uk)("Edit Materi")]})),_:1}),(0,a.Wm)(C,{slot:"end"},{default:(0,a.w5)((function(){return[(0,a.Wm)(W,{onClick:e.closeEditModal},{default:(0,a.w5)((function(){return[(0,a.Uk)("Close")]})),_:1},8,["onClick"])]})),_:1})]})),_:1})]})),_:1}),(0,a.Wm)(I,null,{default:(0,a.w5)((function(){return[l,(0,a.Wm)(W,{style:{color:"white"},expand:"block",onClick:e.updateMateri},{default:(0,a.w5)((function(){return[(0,a.Uk)("Update Materi")]})),_:1},8,["onClick"])]})),_:1})]})),_:1},8,["is-open","onDidPresent","onDidDismiss"]),(0,a.Wm)(j,{"is-open":e.toast.isOpen,message:e.toast.message,duration:e.toast.duration,color:e.toast.color,onDidDismiss:n[4]||(n[4]=function(){return e.toast.isOpen=!1})},null,8,["is-open","message","duration","color"])]})),_:1})]})),_:1})}var s=t(124),d=t(3144),f=t(8534),m=(t(1249),t(9826),t(1539),t(4916),t(5306),t(2564),t(2262)),p=t(1661),w=t(4903),v=t(6100),h=t(5856),k=t(6708),g=(0,v.ad)(h.H),b=(0,k.cF)(h.H);const M=(0,a.aZ)({name:"TambahMateri",components:{IonPage:p._i,IonHeader:p.Gu,IonToolbar:p.sr,IonTitle:p.wd,IonBackButton:p.oU,IonContent:p.W2,IonRefresher:p.nJ,IonRefresherContent:p.Wo,IonButton:p.YG,IonGrid:p.jY,IonRow:p.Nd,IonCol:p.wI,IonList:p.q_,IonItem:p.Ie,IonLabel:p.Q$,IonToast:p.Px,IonModal:p.ki,IonInput:p.pK,IonSelect:p.t9,IonSelectOption:p.n0,IonButtons:p.Sm},setup:function(){var e,n,t=(0,m.iH)({isOpen:!1,message:"",duration:2e3,color:"success"}),r=(0,m.iH)(""),i=(0,m.iH)(""),u=(0,m.iH)(""),o=(0,m.iH)([]),l=(0,m.iH)(!1),c=(0,m.iH)(!1),p=(0,m.iH)(""),h=(0,m.iH)(null),M=(0,m.iH)(""),_=(0,m.iH)([]),W=(0,m.iH)([]);(0,a.bv)((function(){e=new w.ZP("#editor-container",{theme:"snow",modules:{toolbar:{container:[[{header:[1,2,!1]}],["bold","italic","underline"],["image","video","audio"],[{list:"ordered"},{list:"bullet"}],[{align:""},{align:"center"},{align:"right"},{align:"justify"}]],handlers:{image:function(){P()},video:function(){S()},audio:function(){J()}}}}}),x(),Z(),H()}));var x=function(){var e=(0,f.Z)((0,s.Z)().mark((function e(){var n;return(0,s.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,v.PL)((0,v.hJ)(g,"kelas"));case 2:n=e.sent,_.value=n.docs.map((function(e){return(0,d.Z)({id:e.id},e.data())}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Z=function(){var e=(0,f.Z)((0,s.Z)().mark((function e(){var n;return(0,s.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,v.PL)((0,v.hJ)(g,"mataPelajaran"));case 2:n=e.sent,W.value=n.docs.map((function(e){return(0,d.Z)({id:e.id},e.data())}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),H=function(){var e=(0,f.Z)((0,s.Z)().mark((function e(){var n;return(0,s.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,v.PL)((0,v.hJ)(g,"materi"));case 3:n=e.sent,o.value=n.docs.map((function(e){var n,t,a=e.data();return(0,d.Z)((0,d.Z)({id:e.id},a),{},{className:(null===(n=_.value.find((function(e){return e.id===a["class"]})))||void 0===n?void 0:n.name)||"N/A",subjectName:(null===(t=W.value.find((function(e){return e.id===a.subject})))||void 0===t?void 0:t.name)||"N/A"})})),e.next=11;break;case 7:e.prev=7,e.t0=e["catch"](0),console.error("Error fetching materi:",e.t0),K("Terjadi kesalahan saat mengambil data materi.","danger");case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),D=function(){var n=(0,f.Z)((0,s.Z)().mark((function n(){var t;return(0,s.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(t=e.root.innerHTML,r.value&&i.value&&u.value&&t){n.next=4;break}return K("Semua field harus diisi","danger"),n.abrupt("return");case 4:return n.prev=4,n.next=7,(0,v.ET)((0,v.hJ)(g,"materi"),{title:r.value,class:i.value,subject:u.value,content:t,createdAt:(0,v.Bt)()});case 7:K("Materi berhasil disimpan","success"),e.root.innerHTML="",r.value="",i.value="",u.value="",H(),n.next=19;break;case 15:n.prev=15,n.t0=n["catch"](4),console.error("Error saving materi: ",n.t0),K("Terjadi kesalahan saat menyimpan materi","danger");case 19:case"end":return n.stop()}}),n,null,[[4,15]])})));return function(){return n.apply(this,arguments)}}(),I=function(){var e=(0,f.Z)((0,s.Z)().mark((function e(n){return(0,s.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,v.oe)((0,v.JU)(g,"materi",n));case 3:K("Materi berhasil dihapus","success"),H(),e.next=11;break;case 7:e.prev=7,e.t0=e["catch"](0),console.error("Error deleting materi: ",e.t0),K("Terjadi kesalahan saat menghapus materi","danger");case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),C=function(e){p.value=e,l.value=!0},U=function(e){h.value=e.id,M.value=e.content,c.value=!0},j=function(){l.value=!1},y=function(){c.value=!1},T=function(){c.value&&(n=new w.ZP("#editor-edit-container",{theme:"snow",modules:{toolbar:{container:[[{header:[1,2,!1]}],["bold","italic","underline"],["image","video","audio"],[{list:"ordered"},{list:"bullet"}],[{align:""},{align:"center"},{align:"right"},{align:"justify"}]],handlers:{image:function(){E()},video:function(){V()},audio:function(){R()}}}}}),n.root.innerHTML=M.value)},L=function(){var e=(0,f.Z)((0,s.Z)().mark((function e(){var t;return(0,s.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=n.root.innerHTML,t){e.next=4;break}return K("Isi materi tidak boleh kosong","danger"),e.abrupt("return");case 4:return e.prev=4,e.next=7,(0,v.r7)((0,v.JU)(g,"materi",h.value),{content:t});case 7:K("Materi berhasil diperbarui","success"),y(),H(),e.next=16;break;case 12:e.prev=12,e.t0=e["catch"](4),console.error("Error updating materi: ",e.t0),K("Terjadi kesalahan saat memperbarui materi","danger");case 16:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(){return e.apply(this,arguments)}}(),P=function(){var n=document.createElement("input");n.setAttribute("type","file"),n.setAttribute("accept","image/*"),n.click(),n.onchange=(0,f.Z)((0,s.Z)().mark((function t(){var a,r,i,u;return(0,s.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=n.files[0],r=(0,k.iH)(b,"images/".concat(a.name)),t.next=4,(0,k.KV)(r,a);case 4:return t.next=6,(0,k.Jt)(r);case 6:i=t.sent,u=e.getSelection(),e.insertEmbed(u.index,"image",i);case 9:case"end":return t.stop()}}),t)})))},E=function(){var e=document.createElement("input");e.setAttribute("type","file"),e.setAttribute("accept","image/*"),e.click(),e.onchange=(0,f.Z)((0,s.Z)().mark((function t(){var a,r,i,u;return(0,s.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.files[0],r=(0,k.iH)(b,"images/".concat(a.name)),t.next=4,(0,k.KV)(r,a);case 4:return t.next=6,(0,k.Jt)(r);case 6:i=t.sent,u=n.getSelection(),n.insertEmbed(u.index,"image",i);case 9:case"end":return t.stop()}}),t)})))},S=function(){var n=prompt("Masukkan URL video (YouTube):");if(n){var t=e.getSelection(),a='<iframe width="560" height="315" src="'.concat(n.replace("watch?v=","embed/"),'" frameborder="0" allowfullscreen></iframe>');e.clipboard.dangerouslyPasteHTML(t.index,a)}},V=function(){var e=prompt("Masukkan URL video (YouTube):");if(e){var t=n.getSelection(),a='<iframe width="560" height="315" src="'.concat(e.replace("watch?v=","embed/"),'" frameborder="0" allowfullscreen></iframe>');n.clipboard.dangerouslyPasteHTML(t.index,a)}},J=function(){var n=prompt("Masukkan URL audio:");if(n){var t=e.getSelection(),a='<audio controls><source src="'.concat(n,'" type="audio/mpeg">Your browser does not support the audio element.</audio>');e.clipboard.dangerouslyPasteHTML(t.index,a)}},R=function(){var e=prompt("Masukkan URL audio:");if(e){var t=n.getSelection(),a='<audio controls><source src="'.concat(e,'" type="audio/mpeg">Your browser does not support the audio element.</audio>');n.clipboard.dangerouslyPasteHTML(t.index,a)}},K=function(e,n){t.value={isOpen:!0,message:e,duration:2e3,color:n}};return{title:r,selectedClass:i,selectedSubject:u,saveMateri:D,deleteMateri:I,materiList:o,toast:t,isDetailModalOpen:l,isEditModalOpen:c,detailContent:p,openDetailModal:C,openEditModal:U,closeDetailModal:j,closeEditModal:y,handleModalDidPresent:T,updateMateri:L,classes:_,subjects:W}},methods:{doRefresh:function(e){var n=this;setTimeout((function(){e.target.complete(),n.fetchMateri()}),2e3)}}});var _=t(3744);const W=(0,_.Z)(M,[["render",c]]),x=W}}]);
//# sourceMappingURL=4.596c08bc.js.map