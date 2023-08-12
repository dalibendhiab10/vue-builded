"use strict";(self["webpackChunkclient"]=self["webpackChunkclient"]||[]).push([[708],{9708:function(e,a,t){t.r(a),t.d(a,{default:function(){return U}});var l=t(6252),i=t(3577),s=t(2262),n=t(6154);let o=localStorage.getItem("token");class r{getEtage(e){let a,t=localStorage.getItem("token");try{const l=n.Z.get(`https://api.plaimmobiliere.online/etage/Getetages/${e}`,{headers:{Authorization:`${t}`}});a=l}catch(l){console.error(l)}return a}saveEtage(e,a,t){let l={type:null,msg:null,summary:null},i={idres:e,idbloc:t,numetage:a};const s=n.Z.post("https://api.plaimmobiliere.online/etage/add",i,{headers:{Authorization:`${o}`}}).then((e=>(e.data.success?(l.type="success",l.msg="Résidence ajoutée avec succès",l.summary="Action Terminée"):(l.type="error",l.msg=e.data.msg,l.summary="ERREUR"),l))).catch((e=>(alert("Wrong user account "+e),l)));return s}async deleteEtage(e,a){let t={type:null,msg:null,summary:null};try{const l=await n.Z["delete"](`https://api.plaimmobiliere.online/etage/DeleteEtage/${a}/${e.blocid}/${e.etageid}`,{headers:{Authorization:`${o}`}});return l.data.success?(t.type="success",t.msg="Etage supprimé avec succès",t.summary="Action Terminée"):(t.type="error",t.msg=l.data.msg,t.summary="ERREUR"),t}catch(l){console.error(l)}}}var u=t(9201),c=t(2201);const d={class:"grid"},m={class:"col-12"},p={class:"card"},g={class:"my-2"},v={class:"field"},b=(0,l._)("label",{for:"name"},"Choisir Bloc",-1),h={class:"field"},y=(0,l._)("label",{for:"name"},"Choisir Etage",-1),w={class:"flex align-items-center justify-content-center"},f=(0,l._)("i",{class:"pi pi-exclamation-triangle mr-3",style:{"font-size":"2rem"}},null,-1),k={key:0};var C={__name:"Etages",setup(e){const a=(0,c.yj)(),t=(0,u.p)(),n=(0,s.iH)(null),o=(0,s.iH)(null),C=(0,s.iH)(!1),S=(0,s.iH)(!1),U=(0,s.iH)({}),_=(0,s.iH)(!1),W=new r,E=a.params.id;let x=(0,s.iH)(null),P=(0,s.iH)(null),R=(0,s.iH)([]),H=(0,s.iH)(""),N=(0,s.iH)([]),D=(0,s.iH)([]);const L=()=>{z(E)},z=async e=>{const a=await W.getEtage(e),t=a.data.blocsNames.map((e=>({id:e.id,name:`${e.name} `,etageCounter:e.etageCount})));N.value=t.map((e=>({id:e.id,name:e.name,etageCount:e.etageCounter}))),o.value=a.data.etageData},$=e=>{D.value=[];const a=[];for(let t=0;t<=10;t++)0==t?a.push({id:parseInt(t),name:"RDC"}):-1===e.etageCount.indexOf(t)&&a.push({id:parseInt(t),name:t.toString()});D.value=a},A=()=>{U.value={},x.value=null,P.value=null,C.value=!0},O=()=>{C.value=!1},T=()=>{n.value.exportCSV()},V=async()=>{const e=JSON.parse(JSON.stringify(x.value),!0),a=JSON.parse(JSON.stringify(P.value),!0),l=e.id,i=a.id;_.value=!0;try{const e=await W.saveEtage(E,i,l);t.add({severity:e.type,summary:e.summary,detail:e.msg,life:3e3}),C.value=!1,U.value={},L()}catch(s){console.log(s)}},j=e=>{H=e.blocname+" etage: "+e.numetage,R={blocid:e.blocid,etageid:e.etageid},S.value=!0},q=async()=>{S.value=!1;const e=await W.deleteEtage(R,E);H="",R="",t.add({severity:e.type,summary:e.summary,detail:e.msg,life:3e3}),L()};return(0,l.m0)((()=>{"etages"==a.name&&z(a.params.id)})),(0,l.bv)((async()=>{z(E)})),(e,a)=>{const t=(0,l.up)("Toast"),r=(0,l.up)("Button"),u=(0,l.up)("Toolbar"),c=(0,l.up)("Column"),_=(0,l.up)("DataTable"),W=(0,l.up)("Dropdown"),E=(0,l.up)("Dialog");return(0,l.wg)(),(0,l.iD)("div",d,[(0,l._)("div",m,[(0,l._)("div",p,[(0,l.Wm)(t),(0,l.Wm)(u,{class:"mb-4"},{start:(0,l.w5)((()=>[(0,l._)("div",g,[(0,l.Wm)(r,{label:"New",icon:"pi pi-plus",class:"p-button-success mr-2",onClick:A})])])),end:(0,l.w5)((()=>[(0,l.Wm)(r,{label:"Export",icon:"pi pi-upload",class:"p-button-help",onClick:a[0]||(a[0]=e=>T(e))})])),_:1}),(0,l.Wm)(_,{ref_key:"dt",ref:n,value:o.value,dataKey:"name",paginator:!0,rows:10,sortOrder:-1,sortField:"blocname",paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",rowsPerPageOptions:[5,10,25],currentPageReportTemplate:"Showing {first} to {last} of {totalRecords} Residences",responsiveLayout:"scroll"},{empty:(0,l.w5)((()=>[(0,l.Uk)(" Pas D'etages dans cette residence . ")])),loading:(0,l.w5)((()=>[(0,l.Uk)(" Loading data. Please wait. ")])),default:(0,l.w5)((()=>[(0,l.Wm)(c,{field:"blocname",header:"Nom Bloc",sortable:!0,headerStyle:"width:5%; min-width:10rem;"},{body:(0,l.w5)((e=>[(0,l.Uk)((0,i.zw)(e.data.blocname),1)])),_:1}),(0,l.Wm)(c,{field:"numetage",header:"Etage Num.",sortable:"",headerStyle:"width:20%; min-width:10rem;"},{body:(0,l.w5)((e=>[(0,l.Uk)((0,i.zw)(0==e.data.numetage?"RDC":e.data.numetage),1)])),_:1}),(0,l.Wm)(c,{field:"localccounter",header:"Nb LC",sortable:"",headerStyle:"width:20%; min-width:10rem;"},{body:(0,l.w5)((e=>[(0,l.Uk)((0,i.zw)(e.data.localccounter),1)])),_:1}),(0,l.Wm)(c,{field:"appartementcounter",header:"Nb Appartement",sortable:"",headerStyle:"width:25%; min-width:10rem;"},{body:(0,l.w5)((e=>[(0,l.Uk)((0,i.zw)(e.data.appartementcounter),1)])),_:1}),(0,l.Wm)(c,{headerStyle:"min-width:10rem;"},{body:(0,l.w5)((e=>[(0,l.Wm)(r,{icon:"pi pi-trash",class:"p-button-rounded p-button-warning mt-2",onClick:a=>j(e.data)},null,8,["onClick"])])),_:1})])),_:1},8,["value"]),(0,l.Wm)(E,{visible:C.value,"onUpdate:visible":a[4]||(a[4]=e=>C.value=e),style:{width:"450px"},header:"Ajouter un etage",modal:!0,class:"p-fluid"},{footer:(0,l.w5)((()=>[(0,l.Wm)(r,{label:"Cancel",icon:"pi pi-times",class:"p-button-text",onClick:O}),(0,l.Wm)(r,{label:"Save",icon:"pi pi-check",class:"p-button-text",onClick:V,disabled:!(0,s.SU)(x)||!(0,s.SU)(P)},null,8,["disabled"])])),default:(0,l.w5)((()=>[(0,l._)("div",v,[b,(0,l.Wm)(W,{modelValue:(0,s.SU)(x),"onUpdate:modelValue":a[1]||(a[1]=e=>(0,s.dq)(x)?x.value=e:x=e),options:(0,s.SU)(N),optionLabel:"name",placeholder:"Select",onChange:a[2]||(a[2]=e=>$((0,s.SU)(x)))},null,8,["modelValue","options"])]),(0,l._)("div",h,[y,(0,l.Wm)(W,{modelValue:(0,s.SU)(P),"onUpdate:modelValue":a[3]||(a[3]=e=>(0,s.dq)(P)?P.value=e:P=e),options:(0,s.SU)(D),optionLabel:"name",placeholder:"Select"},null,8,["modelValue","options"])])])),_:1},8,["visible"]),(0,l.Wm)(E,{visible:S.value,"onUpdate:visible":a[6]||(a[6]=e=>S.value=e),style:{width:"450px"},header:"Confirm",modal:!0},{footer:(0,l.w5)((()=>[(0,l.Wm)(r,{label:"No",icon:"pi pi-times",class:"p-button-text",onClick:a[5]||(a[5]=e=>{S.value=!1,(0,s.dq)(H)?H.value=null:H=null})}),(0,l.Wm)(r,{label:"Yes",icon:"pi pi-check",class:"p-button-text",onClick:q})])),default:(0,l.w5)((()=>[(0,l._)("div",w,[f,U.value?((0,l.wg)(),(0,l.iD)("span",k,[(0,l.Uk)("Etes vous sur de suprimer "),(0,l._)("b",null,(0,i.zw)((0,s.SU)(H)),1),(0,l.Uk)(" ? cela supprimera tous les appartements et locaux commerciaux de cet etage ")])):(0,l.kq)("",!0)])])),_:1},8,["visible"])])])])}}};const S=C;var U=S}}]);
//# sourceMappingURL=708.66eed0c7.js.map