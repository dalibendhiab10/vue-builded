"use strict";(self["webpackChunkclient"]=self["webpackChunkclient"]||[]).push([[991],{7991:function(e,a,l){l.r(a),l.d(a,{default:function(){return M}});var t=l(6252),i=l(3577),o=l(2262),d=l(9201),n=l(2201),r=l(6154);const s=e=>((0,t.dD)("data-v-af89938e"),e=e(),(0,t.Cn)(),e),u={class:"grid"},p={class:"col-12"},m={class:"card"},c={class:"my-2"},h={key:0,style:{color:"#3b82f6"}},v={key:1,style:{color:"#ef4444"}},b={key:2,style:{color:"#22c55e"}},f={key:0},g={key:0,style:{color:"#ef4444"}},w={key:1,style:{color:"#22c55e"}},y={key:1},_=s((()=>(0,t._)("a",{style:{color:"#3b82f6"}},"Voir Lit",-1))),S=[_],U={class:"grid"},k={class:"col-12 lg:col-6"},C={class:"card p-fluid"},W=s((()=>(0,t._)("h5",{align:"center"},"Choisir Bien",-1))),I={class:"field"},V=s((()=>(0,t._)("label",{for:"name"},"Choisir Residence",-1))),D={class:"field"},H=s((()=>(0,t._)("label",{for:"name"},"Choisir Bloc",-1))),L={class:"field"},A=s((()=>(0,t._)("label",{for:"name"},"Choisir Etage",-1))),P={class:"field"},E=s((()=>(0,t._)("label",{for:"name"},"Choisir Appartements",-1))),N={class:"field"},q=s((()=>(0,t._)("label",{for:"name"},"Choisir Chambre",-1))),x={class:"col-12 lg:col-6"},B={class:"card p-fluid"},T=s((()=>(0,t._)("h5",{align:"center"},"Maintenance",-1))),F={class:"p-inputgroup flex-1"};var R={__name:"Depensesdash",setup(e){const a=(0,o.iH)(null),l=(0,n.yj)(),s=((0,d.p)(),l.params.id,(0,o.iH)(null)),_=localStorage.getItem("token");let R=(0,o.iH)(!1),z=(0,o.iH)({}),j=(0,o.iH)([]),M=(0,o.iH)([]),O=(0,o.iH)([]),Z=(0,o.iH)([]),K=(0,o.iH)([]),G=(0,o.iH)(null),J=(0,o.iH)(null),Q=(0,o.iH)(null),X=(0,o.iH)(null),Y=(0,o.iH)(null),$=(0,o.iH)(null);const ee=(0,o.iH)([]),ae=(0,o.iH)([]),le=e=>{setTimeout((()=>{e.query.trim().length?ee.value=ae.value.filter((a=>a.name.toLowerCase().startsWith(e.query.toLowerCase()))):ee.value=[...ae.value]}),50)},te=async()=>{try{const e=await r.Z.get("https://api.plaimmobiliere.online/depences/get/getres/",{headers:{Authorization:_}});z.value=e.data.residence;const a=e.data.residence;a?a.forEach((e=>{j.value.push({id:e.Id,name:e.Name})})):console.error("No residence found")}catch(e){console.error(e)}},ie=e=>{M.value=[];let a=z.value.filter((a=>a.Id===e.id));a[0].Bloc.forEach((e=>{M.value.push({id:e.Id,name:e.Name})}))},oe=e=>{let a=z.value.filter((e=>e.Id===G.value.id)),l=a[0].Bloc.filter((a=>a.Id===e.id));O.value=[],l[0].Etage.forEach((e=>{let a;a=0==e.Numetage?"Etage RDC":"Etage "+e.Numetage,O.value.push({id:e.Id,name:a})}))},de=e=>{let a=z.value.filter((e=>e.Id===G.value.id)),l=a[0].Bloc.filter((e=>e.Id===J.value.id)),t=l[0].Etage.filter((a=>a.Id===e.id));Z.value=[],t[0].Appartement.forEach((e=>{Z.value.push({id:e.Id,name:"Appartement N° "+e.Numapp})}))};let ne=(0,o.iH)(!1);const re=e=>{let a=z.value.filter((e=>e.Id===G.value.id)),l=a[0].Bloc.filter((e=>e.Id===J.value.id)),t=l[0].Etage.filter((e=>e.Id===Q.value.id)),i=t[0].Appartement.filter((a=>a.Id===e.id));K.value=[],0==i[0].chambredetails.length?ne.value=!0:(ne.value=!1,i[0].chambredetails.forEach(((e,a)=>{K.value.push({id:e._id,name:"Chambre N° "+(a+1)})})))};(0,t.m0)((()=>{document.addEventListener("new-saved-fournisseur",(()=>{te()}))}));const se=()=>{const e="/depenses/Fournisseur";window.open(e,"_blank")};return(e,l)=>{const d=(0,t.up)("Toast"),n=(0,t.up)("Button"),r=(0,t.up)("Toolbar"),_=(0,t.up)("Column"),z=(0,t.up)("DataTable"),ae=(0,t.up)("Dropdown"),te=(0,t.up)("AutoComplete"),ue=(0,t.up)("Dialog");return(0,t.wg)(),(0,t.iD)("div",u,[(0,t._)("div",p,[(0,t._)("div",m,[(0,t.Wm)(d),(0,t.Wm)(r,{class:"mb-4"},{start:(0,t.w5)((()=>[(0,t._)("div",c,[(0,t.Wm)(n,{label:"Ajouter",icon:"pi pi-plus",class:"p-button-success mr-2"})])])),end:(0,t.w5)((()=>[(0,t.Wm)(n,{label:"Exporter",icon:"pi pi-upload",class:"p-button-help"}),(0,t.Wm)(n,{label:"Show",icon:"pi pi-external-link",onClick:l[0]||(l[0]=e=>se())})])),_:1}),(0,t.Wm)(z,{ref_key:"dt",ref:s,value:a.value,dataKey:"name",paginator:!0,rows:10,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",rowsPerPageOptions:[5,10,25],currentPageReportTemplate:"Showing {first} to {last} of {totalRecords} ",responsiveLayout:"scroll",sortField:"type",sortOrder:-1},{default:(0,t.w5)((()=>[(0,t.Wm)(_,{field:"type",header:"Type d'appartement",headerStyle:"width:10%; min-width:15rem;",sortable:!0},{body:(0,t.w5)((e=>["AC"===e.data.type?((0,t.wg)(),(0,t.iD)("a",h,"Appartement à Lit")):"AF"===e.data.type&&e.data.Isrent?((0,t.wg)(),(0,t.iD)("a",v,"Appartement Famillial")):"AF"!==e.data.type||e.data.Isrent?(0,t.kq)("",!0):((0,t.wg)(),(0,t.iD)("a",b,"Appartement Famillial"))])),_:1}),(0,t.Wm)(_,{field:"blocname",header:"Nom Bloc",headerStyle:"width:5%; min-width:10rem;",sortable:!0},{body:(0,t.w5)((e=>[(0,t.Uk)((0,i.zw)(e.data.blocname),1)])),_:1}),(0,t.Wm)(_,{field:"etagenumber",header:"Num. etage",headerStyle:"width:15%; min-width:10rem;",sortable:!0},{body:(0,t.w5)((e=>[(0,t.Uk)((0,i.zw)(0==e.data.etagenumber?"RDC":e.data.etagenumber),1)])),_:1}),(0,t.Wm)(_,{field:"numappartement",header:"Num App.",headerStyle:"width:15%; min-width:10rem;",sortable:!0},{body:(0,t.w5)((e=>[(0,t.Uk)((0,i.zw)(e.data.numappartement),1)])),_:1}),(0,t.Wm)(_,{field:"Prix",header:"Prix",headerStyle:"width:10%; min-width:10rem;",sortable:!0},{body:(0,t.w5)((e=>["AF"==e.data.type?((0,t.wg)(),(0,t.iD)("div",f,[e.data.Isrent?((0,t.wg)(),(0,t.iD)("a",g,(0,i.zw)(e.data.Prix)+" DT",1)):e.data.Isrent?(0,t.kq)("",!0):((0,t.wg)(),(0,t.iD)("a",w,(0,i.zw)(e.data.Prix)+" DT",1))])):((0,t.wg)(),(0,t.iD)("div",y,S))])),_:1}),(0,t.Wm)(_,{headerStyle:"min-width:10rem;"},{body:(0,t.w5)((e=>[(0,t.Wm)(n,{icon:"fas fa-eye",class:"p-button-rounded p-button-secondary mr-2"}),(0,t.Wm)(n,{icon:"pi pi-pencil",class:"p-button-rounded p-button-success mr-2"}),(0,t.Wm)(n,{icon:"pi pi-trash",class:"p-button-rounded p-button-warning mt-2"})])),_:1})])),_:1},8,["value"]),(0,t.Wm)(ue,{visible:(0,o.SU)(R),"onUpdate:visible":l[12]||(l[12]=e=>(0,o.dq)(R)?R.value=e:R=e),modal:"",header:"Ajouter Maintenance Bien",style:{width:"70vw"},breakpoints:{"960px":"75vw","641px":"100vw"}},{default:(0,t.w5)((()=>[(0,t._)("div",U,[(0,t._)("div",k,[(0,t._)("div",C,[W,(0,t._)("div",I,[V,(0,t.Wm)(ae,{modelValue:(0,o.SU)(G),"onUpdate:modelValue":l[1]||(l[1]=e=>(0,o.dq)(G)?G.value=e:G=e),options:(0,o.SU)(j),optionLabel:"name",placeholder:"Select",onChange:l[2]||(l[2]=e=>ie((0,o.SU)(G)))},null,8,["modelValue","options"])]),(0,t._)("div",D,[H,(0,t.Wm)(ae,{modelValue:(0,o.SU)(J),"onUpdate:modelValue":l[3]||(l[3]=e=>(0,o.dq)(J)?J.value=e:J=e),options:(0,o.SU)(M),optionLabel:"name",placeholder:"Select",onChange:l[4]||(l[4]=e=>oe((0,o.SU)(J))),disabled:!(0,o.SU)(G)},null,8,["modelValue","options","disabled"])]),(0,t._)("div",L,[A,(0,t.Wm)(ae,{modelValue:(0,o.SU)(Q),"onUpdate:modelValue":l[5]||(l[5]=e=>(0,o.dq)(Q)?Q.value=e:Q=e),options:(0,o.SU)(O),optionLabel:"name",placeholder:"Select",onChange:l[6]||(l[6]=e=>de((0,o.SU)(Q))),disabled:!(0,o.SU)(J)},null,8,["modelValue","options","disabled"])]),(0,t._)("div",P,[E,(0,t.Wm)(ae,{modelValue:(0,o.SU)(X),"onUpdate:modelValue":l[7]||(l[7]=e=>(0,o.dq)(X)?X.value=e:X=e),options:(0,o.SU)(Z),optionLabel:"name",placeholder:"Select",onChange:l[8]||(l[8]=e=>re((0,o.SU)(X))),disabled:!(0,o.SU)(Q)},null,8,["modelValue","options","disabled"])]),(0,t._)("div",N,[q,(0,t.Wm)(ae,{modelValue:(0,o.SU)(Y),"onUpdate:modelValue":l[9]||(l[9]=e=>(0,o.dq)(Y)?Y.value=e:Y=e),options:(0,o.SU)(K),optionLabel:"name",placeholder:"Select",disabled:(0,o.SU)(ne)||!(0,o.SU)(X)},null,8,["modelValue","options","disabled"])])])]),(0,t._)("div",x,[(0,t._)("div",B,[T,(0,t._)("div",F,[(0,t.Wm)(n,{icon:"pi pi-plus"}),(0,t.Wm)(te,{placeholder:"Search",dropdown:!0,modelValue:(0,o.SU)($),"onUpdate:modelValue":l[10]||(l[10]=e=>(0,o.dq)($)?$.value=e:$=e),suggestions:ee.value,onComplete:l[11]||(l[11]=e=>le(e)),field:"name"},null,8,["modelValue","suggestions"])])])])])])),_:1},8,["visible"])])])])}}},z=l(3744);const j=(0,z.Z)(R,[["__scopeId","data-v-af89938e"]]);var M=j}}]);
//# sourceMappingURL=991.46b16875.js.map