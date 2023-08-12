"use strict";(self["webpackChunkclient"]=self["webpackChunkclient"]||[]).push([[165],{8165:function(e,l,a){a.r(l),a.d(l,{default:function(){return E}});var o=a(6252),i=a(2262),u=a(9201),d=a(2201),s=a(6154);const t=e=>((0,o.dD)("data-v-243068de"),e=e(),(0,o.Cn)(),e),n={class:"grid justify-center"},m={class:"col-12 lg:col-6"},c={class:"card p-fluid"},r={class:"field"},v=t((()=>(0,o._)("label",null,"Nom & Prenom",-1))),p={class:"field"},f=t((()=>(0,o._)("label",null,"Cin",-1))),b={class:"field"},V=t((()=>(0,o._)("label",null,"Telephone",-1))),_={class:"field"},U=t((()=>(0,o._)("label",null,"Adresse",-1))),y={class:"field"},g=t((()=>(0,o._)("label",null,"Email",-1))),h={class:"field"},S=t((()=>(0,o._)("label",null,"Salaire",-1))),W={class:"field"},k=t((()=>(0,o._)("label",null,"Poste",-1))),M={key:0,class:"field"};var w={__name:"UserSettings",setup(e){(0,d.yj)();const l=(0,u.p)();let a=localStorage.getItem("token");const t=(0,i.qj)([{icon:"fas fa-user-edit",label:"Modifier Utilisateur"},{icon:"fas fa-times",label:"Annuler la modification"}]);let w=(0,i.iH)({});const C=(0,i.iH)({}),A=async()=>{try{const e=await s.Z.get("https://api.plaimmobiliere.online/users/getuser",{headers:{Authorization:`${a}`}});C.value=e.data.user}catch(e){console.log(e)}};(0,o.wF)((async()=>{A(),w.value.label=t[0].label,w.value.icon=t[0].icon}));let E=(0,i.iH)(!0);const j=()=>{E.value=!E.value,console.log(E.value),E.value?(w.value.label=t[0].label,w.value.icon=t[0].icon):(A(),w.value.label=t[1].label,w.value.icon=t[1].icon)},I=()=>{let e={fullname:C.value.fullname,cin:C.value.cin,tel:C.value.tel,adresse:C.value.adresse,email:C.value.email,salaire:C.value.salaire,poste:C.value.poste,idemplye:C.value.idemplye};console.log(e),s.Z.put("https://api.plaimmobiliere.online/users/updateemploye",e,{headers:{Authorization:`${a}`}}).then((e=>{A(),l.add({severity:"success",summary:"Succes",detail:"Employé Modifié",life:3e3}),E.value=!E.value,w.value.label=t[0].label,w.value.icon=t[0].icon})).catch((function(e){console.log(e),l.add({severity:"error",summary:"Erreur",detail:"Employé Non Modifié",life:3e3})}))};return(e,l)=>{const a=(0,o.up)("Toast"),u=(0,o.up)("Button"),d=(0,o.up)("Toolbar"),s=(0,o.up)("InputText"),t=(0,o.up)("InputNumber");return(0,o.wg)(),(0,o.iD)("div",n,[(0,o.Wm)(a),(0,o._)("div",m,[(0,o._)("div",c,[(0,o.Wm)(d,{class:"mb-4",style:{"background-color":"white",border:"0"}},{center:(0,o.w5)((()=>[(0,o.Wm)(u,{label:(0,i.SU)(w).label,icon:(0,i.SU)(w).icon,class:"p-button-help",onClick:l[0]||(l[0]=e=>j())},null,8,["label","icon"])])),_:1}),(0,o._)("div",r,[v,(0,o.Wm)(s,{autocomplete:"off",modelValue:C.value.fullname,"onUpdate:modelValue":l[1]||(l[1]=e=>C.value.fullname=e),modelModifiers:{trim:!0},disabled:(0,i.SU)(E)},null,8,["modelValue","disabled"])]),(0,o._)("div",p,[f,(0,o.Wm)(s,{autocomplete:"off",modelValue:C.value.cin,"onUpdate:modelValue":l[2]||(l[2]=e=>C.value.cin=e),modelModifiers:{trim:!0},disabled:(0,i.SU)(E)},null,8,["modelValue","disabled"])]),(0,o._)("div",b,[V,(0,o.Wm)(t,{useGrouping:!1,autocomplete:"off",modelValue:C.value.tel,"onUpdate:modelValue":l[3]||(l[3]=e=>C.value.tel=e),modelModifiers:{trim:!0},disabled:(0,i.SU)(E)},null,8,["modelValue","disabled"])]),(0,o._)("div",_,[U,(0,o.Wm)(s,{autocomplete:"off",modelValue:C.value.adresse,"onUpdate:modelValue":l[4]||(l[4]=e=>C.value.adresse=e),modelModifiers:{trim:!0},disabled:(0,i.SU)(E)},null,8,["modelValue","disabled"])]),(0,o._)("div",y,[g,(0,o.Wm)(s,{type:"email",autocomplete:"off",modelValue:C.value.email,"onUpdate:modelValue":l[5]||(l[5]=e=>C.value.email=e),modelModifiers:{trim:!0},disabled:(0,i.SU)(E)},null,8,["modelValue","disabled"])]),(0,o._)("div",h,[S,(0,o.Wm)(t,{useGrouping:!1,autocomplete:"off",modelValue:C.value.salaire,"onUpdate:modelValue":l[6]||(l[6]=e=>C.value.salaire=e),modelModifiers:{trim:!0},disabled:(0,i.SU)(E)},null,8,["modelValue","disabled"])]),(0,o._)("div",W,[k,(0,o.Wm)(s,{autocomplete:"off",modelValue:C.value.poste,"onUpdate:modelValue":l[7]||(l[7]=e=>C.value.poste=e),modelModifiers:{trim:!0},disabled:(0,i.SU)(E)},null,8,["modelValue","disabled"])]),(0,i.SU)(E)?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("div",M,[(0,o.Wm)(u,{label:"Ajouter Un Employée",class:"p-button-primary",onClick:l[8]||(l[8]=e=>I()),disabled:!C.value.fullname||!C.value.cin||!C.value.tel||!C.value.adresse||!C.value.email||!C.value.salaire||!C.value.poste},null,8,["disabled"])]))])])])}}},C=a(3744);const A=(0,C.Z)(w,[["__scopeId","data-v-243068de"]]);var E=A}}]);
//# sourceMappingURL=165.8dabd5a1.js.map