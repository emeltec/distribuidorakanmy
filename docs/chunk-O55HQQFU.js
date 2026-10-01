import{a as Y,b as Z}from"./chunk-RMYE5MAH.js";import{a as $,b as ee}from"./chunk-6FSQHIND.js";import{a as j}from"./chunk-HNBLJYC4.js";import{b as L,d as V,e as O,i as R,m as Q,n as X}from"./chunk-JBMXG2TU.js";import"./chunk-5VMUS6SC.js";import{Fa as g,Ga as w,Oa as J,Pa as K,n as h,pa as S,t as M,ua as q,wa as G,ya as H,za as U}from"./chunk-R7C5GZN4.js";import{$b as u,Hb as _,Jb as N,Kb as W,Oa as p,U as I,Ub as A,V as E,Vb as D,Wb as s,X as T,Z as m,ac as c,bc as f,cb as b,db as k,e as v,gb as F,gc as y,hb as x,la as C,ob as B,pa as P,vb as l,wb as o,xb as r,yb as z}from"./chunk-E5NKZWGT.js";var te=`
    .p-divider-horizontal {
        display: flex;
        width: 100%;
        position: relative;
        align-items: center;
        margin: dt('divider.horizontal.margin');
        padding: dt('divider.horizontal.padding');
    }

    .p-divider-horizontal:before {
        position: absolute;
        display: block;
        inset-block-start: 50%;
        inset-inline-start: 0;
        width: 100%;
        content: '';
        border-block-start: 1px solid dt('divider.border.color');
    }

    .p-divider-horizontal .p-divider-content {
        padding: dt('divider.horizontal.content.padding');
    }

    .p-divider-vertical {
        min-height: 100%;
        display: flex;
        position: relative;
        justify-content: center;
        margin: dt('divider.vertical.margin');
        padding: dt('divider.vertical.padding');
    }

    .p-divider-vertical:before {
        position: absolute;
        display: block;
        inset-block-start: 0;
        inset-inline-start: 50%;
        height: 100%;
        content: '';
        border-inline-start: 1px solid dt('divider.border.color');
    }

    .p-divider.p-divider-vertical .p-divider-content {
        padding: dt('divider.vertical.content.padding');
    }

    .p-divider-content {
        z-index: 1;
        background: dt('divider.content.background');
        color: dt('divider.content.color');
    }

    .p-divider-solid.p-divider-horizontal:before {
        border-block-start-style: solid;
    }

    .p-divider-solid.p-divider-vertical:before {
        border-inline-start-style: solid;
    }

    .p-divider-dashed.p-divider-horizontal:before {
        border-block-start-style: dashed;
    }

    .p-divider-dashed.p-divider-vertical:before {
        border-inline-start-style: dashed;
    }

    .p-divider-dotted.p-divider-horizontal:before {
        border-block-start-style: dotted;
    }

    .p-divider-dotted.p-divider-vertical:before {
        border-inline-start-style: dotted;
    }

    .p-divider-left:dir(rtl),
    .p-divider-right:dir(rtl) {
        flex-direction: row-reverse;
    }
`;var de=["*"],le={root:({instance:e})=>({justifyContent:e.layout==="horizontal"?e.align==="center"||e.align==null?"center":e.align==="left"?"flex-start":e.align==="right"?"flex-end":null:null,alignItems:e.layout==="vertical"?e.align==="center"||e.align==null?"center":e.align==="top"?"flex-start":e.align==="bottom"?"flex-end":null:null})},se={root:({instance:e})=>["p-divider p-component","p-divider-"+e.layout,"p-divider-"+e.type,{"p-divider-left":e.layout==="horizontal"&&(!e.align||e.align==="left")},{"p-divider-center":e.layout==="horizontal"&&e.align==="center"},{"p-divider-right":e.layout==="horizontal"&&e.align==="right"},{"p-divider-top":e.layout==="vertical"&&e.align==="top"},{"p-divider-center":e.layout==="vertical"&&(!e.align||e.align==="center")},{"p-divider-bottom":e.layout==="vertical"&&e.align==="bottom"}],content:"p-divider-content"},ie=(()=>{class e extends G{name="divider";style=te;classes=se;inlineStyles=le;static \u0275fac=(()=>{let a;return function(i){return(a||(a=P(e)))(i||e)}})();static \u0275prov=I({token:e,factory:e.\u0275fac})}return e})();var ne=new T("DIVIDER_INSTANCE"),pe=(()=>{class e extends U{$pcDivider=m(ne,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=m(g,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass;layout="horizontal";type="solid";align;_componentStyle=m(ie);static \u0275fac=(()=>{let a;return function(i){return(a||(a=P(e)))(i||e)}})();static \u0275cmp=b({type:e,selectors:[["p-divider"]],hostAttrs:["role","separator"],hostVars:5,hostBindings:function(t,i){t&2&&(B("aria-orientation",i.layout),A(i.sx("root")),D(i.cn(i.cx("root"),i.styleClass)))},inputs:{styleClass:"styleClass",layout:"layout",type:"type",align:"align"},features:[y([ie,{provide:ne,useExisting:e},{provide:H,useExisting:e}]),x([g]),F],ngContentSelectors:de,decls:2,vars:3,consts:[[3,"pBind"]],template:function(t,i){t&1&&(N(),o(0,"div",0),W(1),r()),t&2&&(D(i.cx("content")),l("pBind",i.ptm("content")))},dependencies:[h,q,w,g],encapsulation:2,changeDetection:0})}return e})(),oe=(()=>{class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=k({type:e});static \u0275inj=E({imports:[pe,w,w]})}return e})();var re=class e{auth=m(j);msg=m(S);nombre="";email="";telefono="";nuevaPassword="";confirmarPassword="";guardando=C(!1);cambiandoPass=C(!1);ngOnInit(){return v(this,null,function*(){let d=this.auth.sesion();if(!d)return;this.email=d.email,this.nombre=d.nombre;let{data:a}=yield M.from("usuarios").select("nombre, telefono").eq("id",d.id).single();a&&(this.nombre=a.nombre,this.telefono=a.telefono??"")})}guardarPerfil(){return v(this,null,function*(){if(!this.nombre.trim()){this.msg.add({severity:"warn",summary:"Atenci\xF3n",detail:"El nombre no puede estar vac\xEDo."});return}this.guardando.set(!0);let{error:d}=yield M.from("usuarios").update({nombre:this.nombre.trim(),telefono:this.telefono||null}).eq("id",this.auth.sesion().id);this.guardando.set(!1),d?this.msg.add({severity:"error",summary:"Error",detail:"No se pudo guardar."}):this.msg.add({severity:"success",summary:"Guardado",detail:"Datos actualizados."})})}cambiarPassword(){return v(this,null,function*(){if(this.nuevaPassword.length<6){this.msg.add({severity:"warn",summary:"Atenci\xF3n",detail:"M\xEDnimo 6 caracteres."});return}if(this.nuevaPassword!==this.confirmarPassword){this.msg.add({severity:"warn",summary:"Atenci\xF3n",detail:"Las contrase\xF1as no coinciden."});return}this.cambiandoPass.set(!0);let{error:d}=yield M.auth.updateUser({password:this.nuevaPassword});this.cambiandoPass.set(!1),d?this.msg.add({severity:"error",summary:"Error",detail:d.message}):(this.msg.add({severity:"success",summary:"Listo",detail:"Contrase\xF1a actualizada."}),this.nuevaPassword="",this.confirmarPassword="")})}static \u0275fac=function(a){return new(a||e)};static \u0275cmp=b({type:e,selectors:[["app-mis-datos"]],features:[y([S])],decls:34,vars:12,consts:[[1,"p-4",2,"max-width","520px","margin","0 auto"],[1,"text-xl","font-semibold","mb-4"],[1,"surface-card","border-round-lg","p-4","shadow-1","mb-4",2,"border","1px solid var(--surface-200)"],[1,"text-base","font-medium","mt-0","mb-4","text-500","uppercase",2,"font-size","12px","letter-spacing",".05em"],[1,"flex","flex-column","gap-4"],["pInputText","","id","nombre",1,"w-full",3,"ngModelChange","ngModel","disabled"],["for","nombre"],["pInputText","","id","email",1,"w-full",3,"ngModelChange","ngModel","disabled"],["for","email"],["pInputText","","id","telefono","type","tel",1,"w-full",3,"ngModelChange","ngModel","disabled"],["for","telefono"],["label","Guardar cambios","icon","pi pi-save",3,"onClick","loading"],[1,"surface-card","border-round-lg","p-4","shadow-1",2,"border","1px solid var(--surface-200)"],["pInputText","","id","nuevaPass","type","password",1,"w-full",3,"ngModelChange","ngModel","disabled"],["for","nuevaPass"],["pInputText","","id","confirmPass","type","password",1,"w-full",3,"ngModelChange","ngModel","disabled"],["for","confirmPass"],["label","Cambiar contrase\xF1a","icon","pi pi-lock","severity","secondary",3,"onClick","loading"]],template:function(a,t){a&1&&(o(0,"div",0),z(1,"p-toast"),o(2,"h2",1),s(3,"Mis datos"),r(),o(4,"div",2)(5,"h3",3),s(6," Informaci\xF3n personal "),r(),o(7,"div",4)(8,"p-floatlabel")(9,"input",5),f("ngModelChange",function(n){return c(t.nombre,n)||(t.nombre=n),n}),r(),o(10,"label",6),s(11,"Nombre completo"),r()(),o(12,"p-floatlabel")(13,"input",7),f("ngModelChange",function(n){return c(t.email,n)||(t.email=n),n}),r(),o(14,"label",8),s(15,"Correo electr\xF3nico"),r()(),o(16,"p-floatlabel")(17,"input",9),f("ngModelChange",function(n){return c(t.telefono,n)||(t.telefono=n),n}),r(),o(18,"label",10),s(19,"Tel\xE9fono"),r()(),o(20,"p-button",11),_("onClick",function(){return t.guardarPerfil()}),r()()(),o(21,"div",12)(22,"h3",3),s(23," Cambiar contrase\xF1a "),r(),o(24,"div",4)(25,"p-floatlabel")(26,"input",13),f("ngModelChange",function(n){return c(t.nuevaPassword,n)||(t.nuevaPassword=n),n}),r(),o(27,"label",14),s(28,"Nueva contrase\xF1a"),r()(),o(29,"p-floatlabel")(30,"input",15),f("ngModelChange",function(n){return c(t.confirmarPassword,n)||(t.confirmarPassword=n),n}),r(),o(31,"label",16),s(32,"Confirmar nueva contrase\xF1a"),r()(),o(33,"p-button",17),_("onClick",function(){return t.cambiarPassword()}),r()()()()),a&2&&(p(9),u("ngModel",t.nombre),l("disabled",t.guardando()),p(4),u("ngModel",t.email),l("disabled",!0),p(4),u("ngModel",t.telefono),l("disabled",t.guardando()),p(3),l("loading",t.guardando()),p(6),u("ngModel",t.nuevaPassword),l("disabled",t.cambiandoPass()),p(4),u("ngModel",t.confirmarPassword),l("disabled",t.cambiandoPass()),p(3),l("loading",t.cambiandoPass()))},dependencies:[h,R,L,V,O,K,J,X,Q,Z,Y,ee,$,oe],encapsulation:2})};export{re as MisDatosComponent};
