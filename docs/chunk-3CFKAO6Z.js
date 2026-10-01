import{a as Ge,b as $e,c as Ye,d as Je}from"./chunk-TMF2MFGQ.js";import{a as Xe,b as Ze}from"./chunk-RMYE5MAH.js";import{a as et,b as tt}from"./chunk-6FSQHIND.js";import{a as Ee}from"./chunk-HNBLJYC4.js";import{a as ze,b as je}from"./chunk-E7HPEJWK.js";import{b as Se,d as Ne,e as ke,h as Ie,i as Le,m as qe,n as Ue}from"./chunk-JBMXG2TU.js";import{e as De}from"./chunk-5VMUS6SC.js";import{A as de,D as Ae,Fa as m,Ga as S,K as Pe,L as Re,M as G,Ma as be,Na as Qe,Oa as He,Pa as Ke,S as ce,V as $,da as ue,ja as Ve,m as oe,n as I,pa as Oe,r as ae,ta as We,ua as pe,wa as j,ya as Q,za as H}from"./chunk-R7C5GZN4.js";import{$b as x,Ac as ie,Eb as ee,Fb as te,Fc as k,Gb as _e,Gc as Fe,Hb as T,Ib as g,Jb as V,Kb as O,Lb as ne,Mb as W,Nb as C,Oa as s,Ob as M,Pb as we,Qb as Te,Rb as Ce,T as q,U as L,V as ve,Vb as f,Wb as p,X as A,Z as d,ac as B,bc as F,ca as X,cb as D,da as Z,db as ye,e as J,ea as le,gb as P,gc as z,hb as R,ib as U,la as v,ob as N,pa as h,pb as y,qb as _,ra as he,rc as Me,vb as c,vc as b,wb as a,wc as xe,xb as r,yb as w,yc as E,zc as Be}from"./chunk-E5NKZWGT.js";var nt=`
    .p-tabs {
        display: flex;
        flex-direction: column;
    }

    .p-tablist {
        display: flex;
        position: relative;
        overflow: hidden;
        background: dt('tabs.tablist.background');
    }

    .p-tablist-viewport {
        overflow-x: auto;
        overflow-y: hidden;
        scroll-behavior: smooth;
        scrollbar-width: none;
        overscroll-behavior: contain auto;
    }

    .p-tablist-viewport::-webkit-scrollbar {
        display: none;
    }

    .p-tablist-tab-list {
        position: relative;
        display: flex;
        border-style: solid;
        border-color: dt('tabs.tablist.border.color');
        border-width: dt('tabs.tablist.border.width');
    }

    .p-tablist-content {
        flex-grow: 1;
    }

    .p-tablist-nav-button {
        all: unset;
        position: absolute !important;
        flex-shrink: 0;
        inset-block-start: 0;
        z-index: 2;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: dt('tabs.nav.button.background');
        color: dt('tabs.nav.button.color');
        width: dt('tabs.nav.button.width');
        transition:
            color dt('tabs.transition.duration'),
            outline-color dt('tabs.transition.duration'),
            box-shadow dt('tabs.transition.duration');
        box-shadow: dt('tabs.nav.button.shadow');
        outline-color: transparent;
        cursor: pointer;
    }

    .p-tablist-nav-button:focus-visible {
        z-index: 1;
        box-shadow: dt('tabs.nav.button.focus.ring.shadow');
        outline: dt('tabs.nav.button.focus.ring.width') dt('tabs.nav.button.focus.ring.style') dt('tabs.nav.button.focus.ring.color');
        outline-offset: dt('tabs.nav.button.focus.ring.offset');
    }

    .p-tablist-nav-button:hover {
        color: dt('tabs.nav.button.hover.color');
    }

    .p-tablist-prev-button {
        inset-inline-start: 0;
    }

    .p-tablist-next-button {
        inset-inline-end: 0;
    }

    .p-tablist-prev-button:dir(rtl),
    .p-tablist-next-button:dir(rtl) {
        transform: rotate(180deg);
    }

    .p-tab {
        flex-shrink: 0;
        cursor: pointer;
        user-select: none;
        position: relative;
        border-style: solid;
        white-space: nowrap;
        gap: dt('tabs.tab.gap');
        background: dt('tabs.tab.background');
        border-width: dt('tabs.tab.border.width');
        border-color: dt('tabs.tab.border.color');
        color: dt('tabs.tab.color');
        padding: dt('tabs.tab.padding');
        font-weight: dt('tabs.tab.font.weight');
        transition:
            background dt('tabs.transition.duration'),
            border-color dt('tabs.transition.duration'),
            color dt('tabs.transition.duration'),
            outline-color dt('tabs.transition.duration'),
            box-shadow dt('tabs.transition.duration');
        margin: dt('tabs.tab.margin');
        outline-color: transparent;
    }

    .p-tab:not(.p-disabled):focus-visible {
        z-index: 1;
        box-shadow: dt('tabs.tab.focus.ring.shadow');
        outline: dt('tabs.tab.focus.ring.width') dt('tabs.tab.focus.ring.style') dt('tabs.tab.focus.ring.color');
        outline-offset: dt('tabs.tab.focus.ring.offset');
    }

    .p-tab:not(.p-tab-active):not(.p-disabled):hover {
        background: dt('tabs.tab.hover.background');
        border-color: dt('tabs.tab.hover.border.color');
        color: dt('tabs.tab.hover.color');
    }

    .p-tab-active {
        background: dt('tabs.tab.active.background');
        border-color: dt('tabs.tab.active.border.color');
        color: dt('tabs.tab.active.color');
    }

    .p-tabpanels {
        background: dt('tabs.tabpanel.background');
        color: dt('tabs.tabpanel.color');
        padding: dt('tabs.tabpanel.padding');
        outline: 0 none;
    }

    .p-tabpanel:focus-visible {
        box-shadow: dt('tabs.tabpanel.focus.ring.shadow');
        outline: dt('tabs.tabpanel.focus.ring.width') dt('tabs.tabpanel.focus.ring.style') dt('tabs.tabpanel.focus.ring.color');
        outline-offset: dt('tabs.tabpanel.focus.ring.offset');
    }

    .p-tablist-active-bar {
        z-index: 1;
        display: block;
        position: absolute;
        inset-block-end: dt('tabs.active.bar.bottom');
        height: dt('tabs.active.bar.height');
        background: dt('tabs.active.bar.background');
        transition: 250ms cubic-bezier(0.35, 0, 0.25, 1);
    }
`;var vt=["previcon"],ht=["nexticon"],bt=["content"],yt=["prevButton"],_t=["nextButton"],wt=["inkbar"],Tt=["tabs"],Y=["*"];function Ct(t,l){t&1&&ee(0)}function Mt(t,l){if(t&1&&U(0,Ct,1,0,"ng-container",11),t&2){let e=g(2);c("ngTemplateOutlet",e.prevIconTemplate||e._prevIconTemplate)}}function xt(t,l){t&1&&(le(),w(0,"svg",10))}function Bt(t,l){if(t&1){let e=te();a(0,"button",9,3),T("click",function(){X(e);let i=g();return Z(i.onPrevButtonClick())}),y(2,Mt,1,1,"ng-container")(3,xt,1,0,":svg:svg",10),r()}if(t&2){let e=g();f(e.cx("prevButton")),c("pBind",e.ptm("prevButton")),N("aria-label",e.prevButtonAriaLabel)("tabindex",e.tabindex())("data-pc-group-section","navigator"),s(2),_(e.prevIconTemplate||e._prevIconTemplate?2:3)}}function Ft(t,l){t&1&&ee(0)}function Dt(t,l){if(t&1&&U(0,Ft,1,0,"ng-container",11),t&2){let e=g(2);c("ngTemplateOutlet",e.nextIconTemplate||e._nextIconTemplate)}}function Et(t,l){t&1&&(le(),w(0,"svg",12))}function St(t,l){if(t&1){let e=te();a(0,"button",9,4),T("click",function(){X(e);let i=g();return Z(i.onNextButtonClick())}),y(2,Dt,1,1,"ng-container")(3,Et,1,0,":svg:svg",12),r()}if(t&2){let e=g();f(e.cx("nextButton")),c("pBind",e.ptm("nextButton")),N("aria-label",e.nextButtonAriaLabel)("tabindex",e.tabindex())("data-pc-group-section","navigator"),s(2),_(e.nextIconTemplate||e._nextIconTemplate?2:3)}}function Nt(t,l){t&1&&O(0)}function kt(t,l){t&1&&ee(0)}function It(t,l){if(t&1&&U(0,kt,1,0,"ng-container",1),t&2){let e=g(),n=Ce(1);c("ngTemplateOutlet",e.content()?e.content():n)}}var Lt={root:({instance:t})=>["p-tabs p-component",{"p-tabs-scrollable":t.scrollable()}]},it=(()=>{class t extends j{name="tabs";style=nt;classes=Lt;static \u0275fac=(()=>{let e;return function(i){return(e||(e=h(t)))(i||t)}})();static \u0275prov=L({token:t,factory:t.\u0275fac})}return t})();var At={root:({instance:t})=>["p-tab",{"p-tab-active":t.active(),"p-disabled":t.disabled()}]},ot=(()=>{class t extends j{name="tab";classes=At;static \u0275fac=(()=>{let e;return function(i){return(e||(e=h(t)))(i||t)}})();static \u0275prov=L({token:t,factory:t.\u0275fac})}return t})();var Pt={root:"p-tablist",content:"p-tablist-content p-tablist-viewport",tabList:"p-tablist-tab-list",activeBar:"p-tablist-active-bar",prevButton:"p-tablist-prev-button p-tablist-nav-button",nextButton:"p-tablist-next-button p-tablist-nav-button"},at=(()=>{class t extends j{name="tablist";classes=Pt;static \u0275fac=(()=>{let e;return function(i){return(e||(e=h(t)))(i||t)}})();static \u0275prov=L({token:t,factory:t.\u0275fac})}return t})();var rt=new A("TABLIST_INSTANCE"),re=(()=>{class t extends H{$pcTabList=d(rt,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=d(m,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}prevIconTemplate;nextIconTemplate;templates;content;prevButton;nextButton;inkbar;tabs;pcTabs=d(q(()=>K));isPrevButtonEnabled=v(!1);isNextButtonEnabled=v(!1);resizeObserver;showNavigators=b(()=>this.pcTabs.showNavigators());tabindex=b(()=>this.pcTabs.tabindex());scrollable=b(()=>this.pcTabs.scrollable());_componentStyle=d(at);constructor(){super(),xe(()=>{this.pcTabs.value(),ae(this.platformId)&&setTimeout(()=>{this.updateInkBar()})})}get prevButtonAriaLabel(){return this.config?.translation?.aria?.previous}get nextButtonAriaLabel(){return this.config?.translation?.aria?.next}onAfterViewInit(){this.showNavigators()&&ae(this.platformId)&&(this.updateButtonState(),this.bindResizeObserver())}_prevIconTemplate;_nextIconTemplate;onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"previcon":this._prevIconTemplate=e.template;break;case"nexticon":this._nextIconTemplate=e.template;break}})}onDestroy(){this.unbindResizeObserver()}onScroll(e){this.showNavigators()&&this.updateButtonState(),e.preventDefault()}onPrevButtonClick(){let e=this.content.nativeElement,n=$(e),i=Math.abs(e.scrollLeft)-n,o=i<=0?0:i;e.scrollLeft=de(e)?-1*o:o}onNextButtonClick(){let e=this.content.nativeElement,n=$(e)-this.getVisibleButtonWidths(),i=e.scrollLeft+n,o=e.scrollWidth-n,u=i>=o?o:i;e.scrollLeft=de(e)?-1*u:u}updateButtonState(){let e=this.content?.nativeElement,n=this.el?.nativeElement,{scrollWidth:i,offsetWidth:o}=e,u=Math.abs(e.scrollLeft),se=$(e);this.isPrevButtonEnabled.set(u!==0),this.isNextButtonEnabled.set(n.offsetWidth>=o&&Math.abs(u-i+se)>1)}updateInkBar(){let e=this.content?.nativeElement,n=this.inkbar?.nativeElement,i=this.tabs?.nativeElement,o=Pe(e,'[data-pc-name="tab"][data-p-active="true"]');n&&(n.style.width=Ae(o)+"px",n.style.left=ce(o).left-ce(i).left+"px")}getVisibleButtonWidths(){let e=this.prevButton?.nativeElement,n=this.nextButton?.nativeElement;return[e,n].reduce((i,o)=>o?i+$(o):i,0)}bindResizeObserver(){this.resizeObserver=new ResizeObserver(()=>this.updateButtonState()),this.resizeObserver.observe(this.el.nativeElement)}unbindResizeObserver(){this.resizeObserver&&(this.resizeObserver.unobserve(this.el.nativeElement),this.resizeObserver=null)}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=D({type:t,selectors:[["p-tablist"]],contentQueries:function(n,i,o){if(n&1&&(ne(o,vt,4),ne(o,ht,4),ne(o,We,4)),n&2){let u;C(u=M())&&(i.prevIconTemplate=u.first),C(u=M())&&(i.nextIconTemplate=u.first),C(u=M())&&(i.templates=u)}},viewQuery:function(n,i){if(n&1&&(W(bt,5),W(yt,5),W(_t,5),W(wt,5),W(Tt,5)),n&2){let o;C(o=M())&&(i.content=o.first),C(o=M())&&(i.prevButton=o.first),C(o=M())&&(i.nextButton=o.first),C(o=M())&&(i.inkbar=o.first),C(o=M())&&(i.tabs=o.first)}},hostVars:2,hostBindings:function(n,i){n&2&&f(i.cx("root"))},features:[z([at,{provide:rt,useExisting:t},{provide:Q,useExisting:t}]),R([m]),P],ngContentSelectors:Y,decls:9,vars:11,consts:[["content",""],["tabs",""],["inkbar",""],["prevButton",""],["nextButton",""],["type","button","pRipple","",3,"pBind","class"],[3,"scroll","pBind"],["role","tablist",3,"pBind"],["role","presentation",3,"pBind"],["type","button","pRipple","",3,"click","pBind"],["data-p-icon","chevron-left"],[4,"ngTemplateOutlet"],["data-p-icon","chevron-right"]],template:function(n,i){if(n&1){let o=te();V(),y(0,Bt,4,7,"button",5),a(1,"div",6,0),T("scroll",function(se){return X(o),Z(i.onScroll(se))}),a(3,"div",7,1),O(5),w(6,"span",8,2),r()(),y(8,St,4,7,"button",5)}n&2&&(_(i.showNavigators()&&i.isPrevButtonEnabled()?0:-1),s(),f(i.cx("content")),c("pBind",i.ptm("content")),s(2),f(i.cx("tabList")),c("pBind",i.ptm("tabList")),s(3),f(i.cx("activeBar")),c("pBind",i.ptm("activeBar")),s(2),_(i.showNavigators()&&i.isNextButtonEnabled()?8:-1))},dependencies:[I,oe,ze,je,Qe,be,pe,S,m],encapsulation:2,changeDetection:0})}return t})(),st=new A("TAB_INSTANCE"),me=(()=>{class t extends H{$pcTab=d(st,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=d(m,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}value=ie();disabled=E(!1,{transform:k});pcTabs=d(q(()=>K));pcTabList=d(q(()=>re));el=d(he);_componentStyle=d(ot);ripple=b(()=>this.config.ripple());id=b(()=>`${this.pcTabs.id()}_tab_${this.value()}`);ariaControls=b(()=>`${this.pcTabs.id()}_tabpanel_${this.value()}`);active=b(()=>ue(this.pcTabs.value(),this.value()));tabindex=b(()=>this.disabled()?-1:this.active()?this.pcTabs.tabindex():-1);mutationObserver;onFocus(e){this.disabled()||this.pcTabs.selectOnFocus()&&this.changeActiveValue()}onClick(e){this.disabled()||this.changeActiveValue()}onKeyDown(e){switch(e.code){case"ArrowRight":this.onArrowRightKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"PageDown":this.onPageDownKey(e);break;case"PageUp":this.onPageUpKey(e);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(e);break;default:break}e.stopPropagation()}onAfterViewInit(){this.bindMutationObserver()}onArrowRightKey(e){let n=this.findNextTab(e.currentTarget);n?this.changeFocusedTab(e,n):this.onHomeKey(e),e.preventDefault()}onArrowLeftKey(e){let n=this.findPrevTab(e.currentTarget);n?this.changeFocusedTab(e,n):this.onEndKey(e),e.preventDefault()}onHomeKey(e){let n=this.findFirstTab();this.changeFocusedTab(e,n),e.preventDefault()}onEndKey(e){let n=this.findLastTab();this.changeFocusedTab(e,n),e.preventDefault()}onPageDownKey(e){this.scrollInView(this.findLastTab()),e.preventDefault()}onPageUpKey(e){this.scrollInView(this.findFirstTab()),e.preventDefault()}onEnterKey(e){this.disabled()||this.changeActiveValue(),e.preventDefault()}findNextTab(e,n=!1){let i=n?e:e.nextElementSibling;return i?G(i,"data-p-disabled")||G(i,"data-pc-section")==="activebar"?this.findNextTab(i):i:null}findPrevTab(e,n=!1){let i=n?e:e.previousElementSibling;return i?G(i,"data-p-disabled")||G(i,"data-pc-section")==="activebar"?this.findPrevTab(i):i:null}findFirstTab(){return this.findNextTab(this.pcTabList?.tabs?.nativeElement?.firstElementChild,!0)}findLastTab(){return this.findPrevTab(this.pcTabList?.tabs?.nativeElement?.lastElementChild,!0)}changeActiveValue(){this.pcTabs.updateValue(this.value())}changeFocusedTab(e,n){Re(n),this.scrollInView(n)}scrollInView(e){e?.scrollIntoView?.({block:"nearest"})}bindMutationObserver(){ae(this.platformId)&&(this.mutationObserver=new MutationObserver(e=>{e.forEach(()=>{this.active()&&this.pcTabList?.updateInkBar()})}),this.mutationObserver.observe(this.el.nativeElement,{childList:!0,characterData:!0,subtree:!0}))}unbindMutationObserver(){this.mutationObserver?.disconnect()}onDestroy(){this.mutationObserver&&this.unbindMutationObserver()}static \u0275fac=(()=>{let e;return function(i){return(e||(e=h(t)))(i||t)}})();static \u0275cmp=D({type:t,selectors:[["p-tab"]],hostVars:10,hostBindings:function(n,i){n&1&&T("focus",function(u){return i.onFocus(u)})("click",function(u){return i.onClick(u)})("keydown",function(u){return i.onKeyDown(u)}),n&2&&(N("id",i.id())("aria-controls",i.ariaControls())("role","tab")("aria-selected",i.active())("aria-disabled",i.disabled())("data-p-disabled",i.disabled())("data-p-active",i.active())("tabindex",i.tabindex()),f(i.cx("root")))},inputs:{value:[1,"value"],disabled:[1,"disabled"]},outputs:{value:"valueChange"},features:[z([ot,{provide:st,useExisting:t},{provide:Q,useExisting:t}]),R([be,m]),P],ngContentSelectors:Y,decls:1,vars:0,template:function(n,i){n&1&&(V(),O(0))},dependencies:[I,pe,S],encapsulation:2,changeDetection:0})}return t})(),Rt={root:({instance:t})=>["p-tabpanel",{"p-tabpanel-active":t.active()}]},lt=(()=>{class t extends j{name="tabpanel";classes=Rt;static \u0275fac=(()=>{let e;return function(i){return(e||(e=h(t)))(i||t)}})();static \u0275prov=L({token:t,factory:t.\u0275fac})}return t})();var dt=new A("TABPANEL_INSTANCE"),ge=(()=>{class t extends H{$pcTabPanel=d(dt,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=d(m,{self:!0});pcTabs=d(q(()=>K));onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}lazy=E(!1,{transform:k});value=ie(void 0);content=Be("content");id=b(()=>`${this.pcTabs.id()}_tabpanel_${this.value()}`);ariaLabelledby=b(()=>`${this.pcTabs.id()}_tab_${this.value()}`);active=b(()=>ue(this.pcTabs.value(),this.value()));isLazyEnabled=b(()=>this.pcTabs.lazy()||this.lazy());hasBeenRendered=!1;shouldRender=b(()=>!this.isLazyEnabled()||this.hasBeenRendered?!0:this.active()?(this.hasBeenRendered=!0,!0):!1);_componentStyle=d(lt);static \u0275fac=(()=>{let e;return function(i){return(e||(e=h(t)))(i||t)}})();static \u0275cmp=D({type:t,selectors:[["p-tabpanel"]],contentQueries:function(n,i,o){n&1&&we(o,i.content,bt,5),n&2&&Te()},hostVars:7,hostBindings:function(n,i){n&2&&(_e("hidden",!i.active()),N("id",i.id())("role","tabpanel")("aria-labelledby",i.ariaLabelledby())("data-p-active",i.active()),f(i.cx("root")))},inputs:{lazy:[1,"lazy"],value:[1,"value"]},outputs:{value:"valueChange"},features:[z([lt,{provide:dt,useExisting:t},{provide:Q,useExisting:t}]),R([m]),P],ngContentSelectors:Y,decls:3,vars:1,consts:[["defaultContent",""],[4,"ngTemplateOutlet"]],template:function(n,i){n&1&&(V(),U(0,Nt,1,0,"ng-template",null,0,Me),y(2,It,1,1,"ng-container")),n&2&&(s(2),_(i.shouldRender()?2:-1))},dependencies:[oe,S],encapsulation:2,changeDetection:0})}return t})(),Vt={root:"p-tabpanels"},ct=(()=>{class t extends j{name="tabpanels";classes=Vt;static \u0275fac=(()=>{let e;return function(i){return(e||(e=h(t)))(i||t)}})();static \u0275prov=L({token:t,factory:t.\u0275fac})}return t})();var ut=new A("TABPANELS_INSTANCE"),fe=(()=>{class t extends H{$pcTabPanels=d(ut,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=d(m,{self:!0});_componentStyle=d(ct);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}static \u0275fac=(()=>{let e;return function(i){return(e||(e=h(t)))(i||t)}})();static \u0275cmp=D({type:t,selectors:[["p-tabpanels"]],hostVars:3,hostBindings:function(n,i){n&2&&(N("role","presentation"),f(i.cx("root")))},features:[z([ct,{provide:ut,useExisting:t},{provide:Q,useExisting:t}]),R([m]),P],ngContentSelectors:Y,decls:1,vars:0,template:function(n,i){n&1&&(V(),O(0))},dependencies:[I,S],encapsulation:2,changeDetection:0})}return t})(),pt=new A("TABS_INSTANCE"),K=(()=>{class t extends H{$pcTabs=d(pt,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=d(m,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}value=ie(void 0);scrollable=E(!1,{transform:k});lazy=E(!1,{transform:k});selectOnFocus=E(!1,{transform:k});showNavigators=E(!0,{transform:k});tabindex=E(0,{transform:Fe});id=v(Ve("pn_id_"));_componentStyle=d(it);updateValue(e){this.value.update(()=>e)}static \u0275fac=(()=>{let e;return function(i){return(e||(e=h(t)))(i||t)}})();static \u0275cmp=D({type:t,selectors:[["p-tabs"]],hostVars:3,hostBindings:function(n,i){n&2&&(N("id",i.id()),f(i.cx("root")))},inputs:{value:[1,"value"],scrollable:[1,"scrollable"],lazy:[1,"lazy"],selectOnFocus:[1,"selectOnFocus"],showNavigators:[1,"showNavigators"],tabindex:[1,"tabindex"]},outputs:{value:"valueChange"},features:[z([it,{provide:pt,useExisting:t},{provide:Q,useExisting:t}]),R([m]),P],ngContentSelectors:Y,decls:1,vars:0,template:function(n,i){n&1&&(V(),O(0))},dependencies:[I,S],encapsulation:2,changeDetection:0})}return t})(),mt=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=ye({type:t});static \u0275inj=ve({imports:[K,fe,ge,re,me,S,S]})}return t})();function Wt(t,l){if(t&1&&w(0,"p-message",14),t&2){let e=g();c("text",e.error())}}function zt(t,l){if(t&1&&w(0,"p-message",14),t&2){let e=g();c("text",e.error())}}function jt(t,l){if(t&1&&w(0,"p-message",28),t&2){let e=g();c("text",e.exito())}}var gt=class t{auth=d(Ee);router=d(De);msg=d(Oe);modo=v("login");cargando=v(!1);error=v(null);exito=v(null);activeTab=v(0);loginForm={email:"",password:"123456"};registroForm={nombre:"",ruc:"",email:"",password:"",telefono:""};confirmarPassword="";ngOnInit(){return J(this,null,function*(){if(yield this.auth.esperarInicializacion(),this.auth.estaLogueado()){let e=this.auth.obtenerSesion()?.rol==="admin"?"/admin/dashboard":"/cliente/catalogo";this.router.navigate([e])}})}cambiarModo(l=0){this.activeTab.set(l),this.modo.set(l===0?"login":"registro"),this.limpiarMensajes()}onLogin(){return J(this,null,function*(){if(this.limpiarMensajes(),!this.loginForm.email||!this.loginForm.password){this.error.set("Completa todos los campos.");return}this.cargando.set(!0);let{error:l}=yield this.auth.login(this.loginForm);if(this.cargando.set(!1),l){this.error.set(l);return}this.auth.redireccionarSegunRol()})}onRegistro(){return J(this,null,function*(){if(this.limpiarMensajes(),!this.registroForm.nombre||!this.registroForm.email||!this.registroForm.password){this.error.set("Completa todos los campos obligatorios.");return}let l=this.registroForm.ruc.trim();if(l&&!/^\d{11}$/.test(l)){this.error.set("El RUC debe contener exactamente 11 d\xEDgitos.");return}if(this.registroForm.password!==this.confirmarPassword){this.error.set("Las contrase\xF1as no coinciden.");return}if(this.registroForm.password.length<6){this.error.set("La contrase\xF1a debe tener al menos 6 caracteres.");return}this.cargando.set(!0);let{error:e}=yield this.auth.registrar(this.registroForm);if(this.cargando.set(!1),e){this.error.set(e);return}if(this.auth.estaLogueado()){this.auth.redireccionarSegunRol();return}this.msg.add({severity:"success",summary:"\xA1Registro exitoso!",detail:"Revisa tu correo para confirmar tu cuenta.",life:2e3}),this.registroForm={nombre:"",ruc:"",email:"",password:"",telefono:""},this.confirmarPassword=""})}limpiarMensajes(){this.error.set(null),this.exito.set(null)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=D({type:t,selectors:[["app-login"]],decls:61,vars:24,consts:[[1,"min-h-screen","flex","align-items-center","justify-content-center","bg-gray-100"],[1,"surface-card","border-round-xl","shadow-4","p-5","w-full",2,"max-width","440px"],[1,"text-center","mb-5"],[1,"text-3xl","font-bold","m-0"],[2,"color","#1e40af"],[2,"color","#f97316"],[1,"text-color-secondary","text-sm","mt-1"],[3,"valueChange","value"],[3,"value"],[1,"flex","flex-column","gap-4","mt-3"],["pInputText","","id","login-email","type","email","autocomplete","email",1,"w-full",3,"ngModelChange","ngModel"],["for","login-email"],["id","login-password","styleClass","w-full","inputStyleClass","w-full","autocomplete","current-password",3,"ngModelChange","ngModel","feedback","toggleMask"],["for","login-password"],["severity","error",3,"text"],["label","Ingresar","icon","pi pi-sign-in","styleClass","w-full",3,"onClick","loading"],["pInputText","","id","reg-email","type","email","autocomplete","email",1,"w-full",3,"ngModelChange","ngModel"],["for","reg-email"],["pInputText","","id","reg-nombre","type","text",1,"w-full",3,"ngModelChange","ngModel"],["for","reg-nombre"],["pInputText","","id","reg-ruc","type","text","inputmode","numeric","maxlength","11",1,"w-full",3,"ngModelChange","ngModel"],["for","reg-ruc"],["pInputText","","id","reg-telefono","type","tel",1,"w-full",3,"ngModelChange","ngModel"],["for","reg-telefono"],["id","reg-password","inputStyleClass","w-full","promptLabel","Ingresa contrase\xF1a",1,"w-full",3,"ngModelChange","ngModel","feedback","toggleMask"],["for","reg-password"],["id","reg-confirm","inputStyleClass","w-full",1,"w-full",3,"ngModelChange","ngModel","feedback","toggleMask"],["for","reg-confirm"],["severity","success",3,"text"],["label","Crear cuenta","icon","pi pi-user-plus","styleClass","w-full",3,"onClick","loading"],[1,"text-xs","text-color-secondary","text-center","m-0"]],template:function(e,n){e&1&&(a(0,"div",0)(1,"div",1),w(2,"p-toast"),a(3,"div",2)(4,"h1",3)(5,"span",4),p(6,"FERRE"),r(),a(7,"span",5),p(8,"KANMY"),r()(),a(9,"p",6),p(10,"Sistema de pedidos mayorista"),r()(),a(11,"p-tabs",7),T("valueChange",function(o){return n.cambiarModo(o)}),a(12,"p-tablist")(13,"p-tab",8),p(14,"Iniciar sesi\xF3n"),r(),a(15,"p-tab",8),p(16,"Registrarse"),r()(),a(17,"p-tabpanels")(18,"p-tabpanel",8)(19,"div",9)(20,"p-floatlabel")(21,"input",10),F("ngModelChange",function(o){return B(n.loginForm.email,o)||(n.loginForm.email=o),o}),r(),a(22,"label",11),p(23,"Correo electr\xF3nico"),r()(),a(24,"p-floatlabel")(25,"p-password",12),F("ngModelChange",function(o){return B(n.loginForm.password,o)||(n.loginForm.password=o),o}),r(),a(26,"label",13),p(27,"Contrase\xF1a"),r()(),y(28,Wt,1,1,"p-message",14),a(29,"p-button",15),T("onClick",function(){return n.onLogin()}),r()()(),a(30,"p-tabpanel",8)(31,"div",9)(32,"p-floatlabel")(33,"input",16),F("ngModelChange",function(o){return B(n.registroForm.email,o)||(n.registroForm.email=o),o}),r(),a(34,"label",17),p(35,"Correo electr\xF3nico (usuario) *"),r()(),a(36,"p-floatlabel")(37,"input",18),F("ngModelChange",function(o){return B(n.registroForm.nombre,o)||(n.registroForm.nombre=o),o}),r(),a(38,"label",19),p(39,"Nombre o raz\xF3n social *"),r()(),a(40,"p-floatlabel")(41,"input",20),F("ngModelChange",function(o){return B(n.registroForm.ruc,o)||(n.registroForm.ruc=o),o}),r(),a(42,"label",21),p(43,"RUC (opcional)"),r()(),a(44,"p-floatlabel")(45,"input",22),F("ngModelChange",function(o){return B(n.registroForm.telefono,o)||(n.registroForm.telefono=o),o}),r(),a(46,"label",23),p(47,"Tel\xE9fono (opcional)"),r()(),a(48,"p-floatlabel")(49,"p-password",24),F("ngModelChange",function(o){return B(n.registroForm.password,o)||(n.registroForm.password=o),o}),r(),a(50,"label",25),p(51,"Contrase\xF1a *"),r()(),a(52,"p-floatlabel")(53,"p-password",26),F("ngModelChange",function(o){return B(n.confirmarPassword,o)||(n.confirmarPassword=o),o}),r(),a(54,"label",27),p(55,"Confirmar contrase\xF1a *"),r()(),y(56,zt,1,1,"p-message",14),y(57,jt,1,1,"p-message",28),a(58,"p-button",29),T("onClick",function(){return n.onRegistro()}),r(),a(59,"p",30),p(60," * Campos obligatorios "),r()()()()()()()),e&2&&(s(11),c("value",n.activeTab()),s(2),c("value",0),s(2),c("value",1),s(3),c("value",0),s(3),x("ngModel",n.loginForm.email),s(4),x("ngModel",n.loginForm.password),c("feedback",!1)("toggleMask",!0),s(3),_(n.error()?28:-1),s(),c("loading",n.cargando()),s(),c("value",1),s(3),x("ngModel",n.registroForm.email),s(4),x("ngModel",n.registroForm.nombre),s(4),x("ngModel",n.registroForm.ruc),s(4),x("ngModel",n.registroForm.telefono),s(4),x("ngModel",n.registroForm.password),c("feedback",!1)("toggleMask",!0),s(4),x("ngModel",n.confirmarPassword),c("feedback",!1)("toggleMask",!0),s(3),_(n.error()?56:-1),s(),_(n.exito()?57:-1),s(),c("loading",n.cargando()))},dependencies:[I,Le,Se,Ne,Ie,ke,Ke,He,Ue,qe,$e,Ge,Je,Ye,mt,K,fe,ge,re,me,Ze,Xe,tt,et],encapsulation:2})};export{gt as LoginComponent};
