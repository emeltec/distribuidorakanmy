import{a as Ue,b as $e,c as Ge,d as Ye}from"./chunk-6XFFPCIL.js";import{a as Je,b as Xe}from"./chunk-RMYE5MAH.js";import{a as Ze,b as et}from"./chunk-WTL3Q3KW.js";import{a as Ee}from"./chunk-Y7RBYY4F.js";import{a as ze,b as We}from"./chunk-WFZSHCFA.js";import"./chunk-DBEIHDI5.js";import{b as Se,d as Ne,e as ke,h as Ie,l as Ke,m as qe}from"./chunk-7QHPTTUW.js";import{e as Fe}from"./chunk-5VMUS6SC.js";import{A as de,D as Le,Fa as m,Ga as S,K as Ae,L as Pe,M as $,Ma as be,Na as je,Oa as Qe,Pa as He,S as ce,V as G,da as pe,ja as Re,m as oe,n as I,pa as Ve,r as ae,ta as Oe,ua as ue,wa as j,ya as Q,za as H}from"./chunk-R7C5GZN4.js";import{$b as B,Ac as ie,Eb as ee,Fb as te,Fc as k,Gb as _e,Gc as De,Hb as T,Ib as g,Jb as V,Kb as O,Lb as ne,Mb as z,Nb as C,Oa as s,Ob as M,Pb as we,Qb as Te,Rb as Ce,T as q,U as L,V as ve,Vb as f,Wb as u,X as A,Z as d,ac as D,bc as F,ca as X,cb as x,da as Z,db as ye,e as J,ea as le,gb as P,gc as W,hb as R,ib as U,la as v,ob as N,pa as h,pb as y,qb as _,ra as he,rc as Me,vb as c,vc as b,wb as a,wc as xe,xb as r,yb as w,yc as E,zc as Be}from"./chunk-E5NKZWGT.js";var tt=`
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
`;var ft=["previcon"],vt=["nexticon"],ut=["content"],ht=["prevButton"],yt=["nextButton"],_t=["inkbar"],wt=["tabs"],Y=["*"];function Tt(t,l){t&1&&ee(0)}function Ct(t,l){if(t&1&&U(0,Tt,1,0,"ng-container",11),t&2){let e=g(2);c("ngTemplateOutlet",e.prevIconTemplate||e._prevIconTemplate)}}function Mt(t,l){t&1&&(le(),w(0,"svg",10))}function xt(t,l){if(t&1){let e=te();a(0,"button",9,3),T("click",function(){X(e);let n=g();return Z(n.onPrevButtonClick())}),y(2,Ct,1,1,"ng-container")(3,Mt,1,0,":svg:svg",10),r()}if(t&2){let e=g();f(e.cx("prevButton")),c("pBind",e.ptm("prevButton")),N("aria-label",e.prevButtonAriaLabel)("tabindex",e.tabindex())("data-pc-group-section","navigator"),s(2),_(e.prevIconTemplate||e._prevIconTemplate?2:3)}}function Bt(t,l){t&1&&ee(0)}function Dt(t,l){if(t&1&&U(0,Bt,1,0,"ng-container",11),t&2){let e=g(2);c("ngTemplateOutlet",e.nextIconTemplate||e._nextIconTemplate)}}function Ft(t,l){t&1&&(le(),w(0,"svg",12))}function Et(t,l){if(t&1){let e=te();a(0,"button",9,4),T("click",function(){X(e);let n=g();return Z(n.onNextButtonClick())}),y(2,Dt,1,1,"ng-container")(3,Ft,1,0,":svg:svg",12),r()}if(t&2){let e=g();f(e.cx("nextButton")),c("pBind",e.ptm("nextButton")),N("aria-label",e.nextButtonAriaLabel)("tabindex",e.tabindex())("data-pc-group-section","navigator"),s(2),_(e.nextIconTemplate||e._nextIconTemplate?2:3)}}function St(t,l){t&1&&O(0)}function Nt(t,l){t&1&&ee(0)}function kt(t,l){if(t&1&&U(0,Nt,1,0,"ng-container",1),t&2){let e=g(),i=Ce(1);c("ngTemplateOutlet",e.content()?e.content():i)}}var It={root:({instance:t})=>["p-tabs p-component",{"p-tabs-scrollable":t.scrollable()}]},nt=(()=>{class t extends j{name="tabs";style=tt;classes=It;static \u0275fac=(()=>{let e;return function(n){return(e||(e=h(t)))(n||t)}})();static \u0275prov=L({token:t,factory:t.\u0275fac})}return t})();var Lt={root:({instance:t})=>["p-tab",{"p-tab-active":t.active(),"p-disabled":t.disabled()}]},it=(()=>{class t extends j{name="tab";classes=Lt;static \u0275fac=(()=>{let e;return function(n){return(e||(e=h(t)))(n||t)}})();static \u0275prov=L({token:t,factory:t.\u0275fac})}return t})();var At={root:"p-tablist",content:"p-tablist-content p-tablist-viewport",tabList:"p-tablist-tab-list",activeBar:"p-tablist-active-bar",prevButton:"p-tablist-prev-button p-tablist-nav-button",nextButton:"p-tablist-next-button p-tablist-nav-button"},ot=(()=>{class t extends j{name="tablist";classes=At;static \u0275fac=(()=>{let e;return function(n){return(e||(e=h(t)))(n||t)}})();static \u0275prov=L({token:t,factory:t.\u0275fac})}return t})();var at=new A("TABLIST_INSTANCE"),re=(()=>{class t extends H{$pcTabList=d(at,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=d(m,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}prevIconTemplate;nextIconTemplate;templates;content;prevButton;nextButton;inkbar;tabs;pcTabs=d(q(()=>K));isPrevButtonEnabled=v(!1);isNextButtonEnabled=v(!1);resizeObserver;showNavigators=b(()=>this.pcTabs.showNavigators());tabindex=b(()=>this.pcTabs.tabindex());scrollable=b(()=>this.pcTabs.scrollable());_componentStyle=d(ot);constructor(){super(),xe(()=>{this.pcTabs.value(),ae(this.platformId)&&setTimeout(()=>{this.updateInkBar()})})}get prevButtonAriaLabel(){return this.config?.translation?.aria?.previous}get nextButtonAriaLabel(){return this.config?.translation?.aria?.next}onAfterViewInit(){this.showNavigators()&&ae(this.platformId)&&(this.updateButtonState(),this.bindResizeObserver())}_prevIconTemplate;_nextIconTemplate;onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"previcon":this._prevIconTemplate=e.template;break;case"nexticon":this._nextIconTemplate=e.template;break}})}onDestroy(){this.unbindResizeObserver()}onScroll(e){this.showNavigators()&&this.updateButtonState(),e.preventDefault()}onPrevButtonClick(){let e=this.content.nativeElement,i=G(e),n=Math.abs(e.scrollLeft)-i,o=n<=0?0:n;e.scrollLeft=de(e)?-1*o:o}onNextButtonClick(){let e=this.content.nativeElement,i=G(e)-this.getVisibleButtonWidths(),n=e.scrollLeft+i,o=e.scrollWidth-i,p=n>=o?o:n;e.scrollLeft=de(e)?-1*p:p}updateButtonState(){let e=this.content?.nativeElement,i=this.el?.nativeElement,{scrollWidth:n,offsetWidth:o}=e,p=Math.abs(e.scrollLeft),se=G(e);this.isPrevButtonEnabled.set(p!==0),this.isNextButtonEnabled.set(i.offsetWidth>=o&&Math.abs(p-n+se)>1)}updateInkBar(){let e=this.content?.nativeElement,i=this.inkbar?.nativeElement,n=this.tabs?.nativeElement,o=Ae(e,'[data-pc-name="tab"][data-p-active="true"]');i&&(i.style.width=Le(o)+"px",i.style.left=ce(o).left-ce(n).left+"px")}getVisibleButtonWidths(){let e=this.prevButton?.nativeElement,i=this.nextButton?.nativeElement;return[e,i].reduce((n,o)=>o?n+G(o):n,0)}bindResizeObserver(){this.resizeObserver=new ResizeObserver(()=>this.updateButtonState()),this.resizeObserver.observe(this.el.nativeElement)}unbindResizeObserver(){this.resizeObserver&&(this.resizeObserver.unobserve(this.el.nativeElement),this.resizeObserver=null)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=x({type:t,selectors:[["p-tablist"]],contentQueries:function(i,n,o){if(i&1&&(ne(o,ft,4),ne(o,vt,4),ne(o,Oe,4)),i&2){let p;C(p=M())&&(n.prevIconTemplate=p.first),C(p=M())&&(n.nextIconTemplate=p.first),C(p=M())&&(n.templates=p)}},viewQuery:function(i,n){if(i&1&&(z(ut,5),z(ht,5),z(yt,5),z(_t,5),z(wt,5)),i&2){let o;C(o=M())&&(n.content=o.first),C(o=M())&&(n.prevButton=o.first),C(o=M())&&(n.nextButton=o.first),C(o=M())&&(n.inkbar=o.first),C(o=M())&&(n.tabs=o.first)}},hostVars:2,hostBindings:function(i,n){i&2&&f(n.cx("root"))},features:[W([ot,{provide:at,useExisting:t},{provide:Q,useExisting:t}]),R([m]),P],ngContentSelectors:Y,decls:9,vars:11,consts:[["content",""],["tabs",""],["inkbar",""],["prevButton",""],["nextButton",""],["type","button","pRipple","",3,"pBind","class"],[3,"scroll","pBind"],["role","tablist",3,"pBind"],["role","presentation",3,"pBind"],["type","button","pRipple","",3,"click","pBind"],["data-p-icon","chevron-left"],[4,"ngTemplateOutlet"],["data-p-icon","chevron-right"]],template:function(i,n){if(i&1){let o=te();V(),y(0,xt,4,7,"button",5),a(1,"div",6,0),T("scroll",function(se){return X(o),Z(n.onScroll(se))}),a(3,"div",7,1),O(5),w(6,"span",8,2),r()(),y(8,Et,4,7,"button",5)}i&2&&(_(n.showNavigators()&&n.isPrevButtonEnabled()?0:-1),s(),f(n.cx("content")),c("pBind",n.ptm("content")),s(2),f(n.cx("tabList")),c("pBind",n.ptm("tabList")),s(3),f(n.cx("activeBar")),c("pBind",n.ptm("activeBar")),s(2),_(n.showNavigators()&&n.isNextButtonEnabled()?8:-1))},dependencies:[I,oe,ze,We,je,be,ue,S,m],encapsulation:2,changeDetection:0})}return t})(),rt=new A("TAB_INSTANCE"),me=(()=>{class t extends H{$pcTab=d(rt,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=d(m,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}value=ie();disabled=E(!1,{transform:k});pcTabs=d(q(()=>K));pcTabList=d(q(()=>re));el=d(he);_componentStyle=d(it);ripple=b(()=>this.config.ripple());id=b(()=>`${this.pcTabs.id()}_tab_${this.value()}`);ariaControls=b(()=>`${this.pcTabs.id()}_tabpanel_${this.value()}`);active=b(()=>pe(this.pcTabs.value(),this.value()));tabindex=b(()=>this.disabled()?-1:this.active()?this.pcTabs.tabindex():-1);mutationObserver;onFocus(e){this.disabled()||this.pcTabs.selectOnFocus()&&this.changeActiveValue()}onClick(e){this.disabled()||this.changeActiveValue()}onKeyDown(e){switch(e.code){case"ArrowRight":this.onArrowRightKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"PageDown":this.onPageDownKey(e);break;case"PageUp":this.onPageUpKey(e);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(e);break;default:break}e.stopPropagation()}onAfterViewInit(){this.bindMutationObserver()}onArrowRightKey(e){let i=this.findNextTab(e.currentTarget);i?this.changeFocusedTab(e,i):this.onHomeKey(e),e.preventDefault()}onArrowLeftKey(e){let i=this.findPrevTab(e.currentTarget);i?this.changeFocusedTab(e,i):this.onEndKey(e),e.preventDefault()}onHomeKey(e){let i=this.findFirstTab();this.changeFocusedTab(e,i),e.preventDefault()}onEndKey(e){let i=this.findLastTab();this.changeFocusedTab(e,i),e.preventDefault()}onPageDownKey(e){this.scrollInView(this.findLastTab()),e.preventDefault()}onPageUpKey(e){this.scrollInView(this.findFirstTab()),e.preventDefault()}onEnterKey(e){this.disabled()||this.changeActiveValue(),e.preventDefault()}findNextTab(e,i=!1){let n=i?e:e.nextElementSibling;return n?$(n,"data-p-disabled")||$(n,"data-pc-section")==="activebar"?this.findNextTab(n):n:null}findPrevTab(e,i=!1){let n=i?e:e.previousElementSibling;return n?$(n,"data-p-disabled")||$(n,"data-pc-section")==="activebar"?this.findPrevTab(n):n:null}findFirstTab(){return this.findNextTab(this.pcTabList?.tabs?.nativeElement?.firstElementChild,!0)}findLastTab(){return this.findPrevTab(this.pcTabList?.tabs?.nativeElement?.lastElementChild,!0)}changeActiveValue(){this.pcTabs.updateValue(this.value())}changeFocusedTab(e,i){Pe(i),this.scrollInView(i)}scrollInView(e){e?.scrollIntoView?.({block:"nearest"})}bindMutationObserver(){ae(this.platformId)&&(this.mutationObserver=new MutationObserver(e=>{e.forEach(()=>{this.active()&&this.pcTabList?.updateInkBar()})}),this.mutationObserver.observe(this.el.nativeElement,{childList:!0,characterData:!0,subtree:!0}))}unbindMutationObserver(){this.mutationObserver?.disconnect()}onDestroy(){this.mutationObserver&&this.unbindMutationObserver()}static \u0275fac=(()=>{let e;return function(n){return(e||(e=h(t)))(n||t)}})();static \u0275cmp=x({type:t,selectors:[["p-tab"]],hostVars:10,hostBindings:function(i,n){i&1&&T("focus",function(p){return n.onFocus(p)})("click",function(p){return n.onClick(p)})("keydown",function(p){return n.onKeyDown(p)}),i&2&&(N("id",n.id())("aria-controls",n.ariaControls())("role","tab")("aria-selected",n.active())("aria-disabled",n.disabled())("data-p-disabled",n.disabled())("data-p-active",n.active())("tabindex",n.tabindex()),f(n.cx("root")))},inputs:{value:[1,"value"],disabled:[1,"disabled"]},outputs:{value:"valueChange"},features:[W([it,{provide:rt,useExisting:t},{provide:Q,useExisting:t}]),R([be,m]),P],ngContentSelectors:Y,decls:1,vars:0,template:function(i,n){i&1&&(V(),O(0))},dependencies:[I,ue,S],encapsulation:2,changeDetection:0})}return t})(),Pt={root:({instance:t})=>["p-tabpanel",{"p-tabpanel-active":t.active()}]},st=(()=>{class t extends j{name="tabpanel";classes=Pt;static \u0275fac=(()=>{let e;return function(n){return(e||(e=h(t)))(n||t)}})();static \u0275prov=L({token:t,factory:t.\u0275fac})}return t})();var lt=new A("TABPANEL_INSTANCE"),ge=(()=>{class t extends H{$pcTabPanel=d(lt,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=d(m,{self:!0});pcTabs=d(q(()=>K));onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}lazy=E(!1,{transform:k});value=ie(void 0);content=Be("content");id=b(()=>`${this.pcTabs.id()}_tabpanel_${this.value()}`);ariaLabelledby=b(()=>`${this.pcTabs.id()}_tab_${this.value()}`);active=b(()=>pe(this.pcTabs.value(),this.value()));isLazyEnabled=b(()=>this.pcTabs.lazy()||this.lazy());hasBeenRendered=!1;shouldRender=b(()=>!this.isLazyEnabled()||this.hasBeenRendered?!0:this.active()?(this.hasBeenRendered=!0,!0):!1);_componentStyle=d(st);static \u0275fac=(()=>{let e;return function(n){return(e||(e=h(t)))(n||t)}})();static \u0275cmp=x({type:t,selectors:[["p-tabpanel"]],contentQueries:function(i,n,o){i&1&&we(o,n.content,ut,5),i&2&&Te()},hostVars:7,hostBindings:function(i,n){i&2&&(_e("hidden",!n.active()),N("id",n.id())("role","tabpanel")("aria-labelledby",n.ariaLabelledby())("data-p-active",n.active()),f(n.cx("root")))},inputs:{lazy:[1,"lazy"],value:[1,"value"]},outputs:{value:"valueChange"},features:[W([st,{provide:lt,useExisting:t},{provide:Q,useExisting:t}]),R([m]),P],ngContentSelectors:Y,decls:3,vars:1,consts:[["defaultContent",""],[4,"ngTemplateOutlet"]],template:function(i,n){i&1&&(V(),U(0,St,1,0,"ng-template",null,0,Me),y(2,kt,1,1,"ng-container")),i&2&&(s(2),_(n.shouldRender()?2:-1))},dependencies:[oe,S],encapsulation:2,changeDetection:0})}return t})(),Rt={root:"p-tabpanels"},dt=(()=>{class t extends j{name="tabpanels";classes=Rt;static \u0275fac=(()=>{let e;return function(n){return(e||(e=h(t)))(n||t)}})();static \u0275prov=L({token:t,factory:t.\u0275fac})}return t})();var ct=new A("TABPANELS_INSTANCE"),fe=(()=>{class t extends H{$pcTabPanels=d(ct,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=d(m,{self:!0});_componentStyle=d(dt);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}static \u0275fac=(()=>{let e;return function(n){return(e||(e=h(t)))(n||t)}})();static \u0275cmp=x({type:t,selectors:[["p-tabpanels"]],hostVars:3,hostBindings:function(i,n){i&2&&(N("role","presentation"),f(n.cx("root")))},features:[W([dt,{provide:ct,useExisting:t},{provide:Q,useExisting:t}]),R([m]),P],ngContentSelectors:Y,decls:1,vars:0,template:function(i,n){i&1&&(V(),O(0))},dependencies:[I,S],encapsulation:2,changeDetection:0})}return t})(),pt=new A("TABS_INSTANCE"),K=(()=>{class t extends H{$pcTabs=d(pt,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=d(m,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}value=ie(void 0);scrollable=E(!1,{transform:k});lazy=E(!1,{transform:k});selectOnFocus=E(!1,{transform:k});showNavigators=E(!0,{transform:k});tabindex=E(0,{transform:De});id=v(Re("pn_id_"));_componentStyle=d(nt);updateValue(e){this.value.update(()=>e)}static \u0275fac=(()=>{let e;return function(n){return(e||(e=h(t)))(n||t)}})();static \u0275cmp=x({type:t,selectors:[["p-tabs"]],hostVars:3,hostBindings:function(i,n){i&2&&(N("id",n.id()),f(n.cx("root")))},inputs:{value:[1,"value"],scrollable:[1,"scrollable"],lazy:[1,"lazy"],selectOnFocus:[1,"selectOnFocus"],showNavigators:[1,"showNavigators"],tabindex:[1,"tabindex"]},outputs:{value:"valueChange"},features:[W([nt,{provide:pt,useExisting:t},{provide:Q,useExisting:t}]),R([m]),P],ngContentSelectors:Y,decls:1,vars:0,template:function(i,n){i&1&&(V(),O(0))},dependencies:[I,S],encapsulation:2,changeDetection:0})}return t})(),bt=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ye({type:t});static \u0275inj=ve({imports:[K,fe,ge,re,me,S,S]})}return t})();function Ot(t,l){if(t&1&&w(0,"p-message",14),t&2){let e=g();c("text",e.error())}}function zt(t,l){if(t&1&&w(0,"p-message",14),t&2){let e=g();c("text",e.error())}}function Wt(t,l){if(t&1&&w(0,"p-message",26),t&2){let e=g();c("text",e.exito())}}var mt=class t{auth=d(Ee);router=d(Fe);msg=d(Ve);modo=v("login");cargando=v(!1);error=v(null);exito=v(null);activeTab=v(0);loginForm={email:"",password:"123456"};registroForm={nombre:"",email:"",password:"",telefono:""};confirmarPassword="";ngOnInit(){return J(this,null,function*(){if(yield this.auth.esperarInicializacion(),this.auth.estaLogueado()){let e=this.auth.obtenerSesion()?.rol==="admin"?"/admin/dashboard":"/cliente/catalogo";this.router.navigate([e])}})}cambiarModo(l=0){this.activeTab.set(l),this.modo.set(l===0?"login":"registro"),this.limpiarMensajes()}onLogin(){return J(this,null,function*(){if(this.limpiarMensajes(),!this.loginForm.email||!this.loginForm.password){this.error.set("Completa todos los campos.");return}this.cargando.set(!0);let{error:l}=yield this.auth.login(this.loginForm);if(this.cargando.set(!1),l){this.error.set(l);return}this.auth.redireccionarSegunRol()})}onRegistro(){return J(this,null,function*(){if(this.limpiarMensajes(),!this.registroForm.nombre||!this.registroForm.email||!this.registroForm.password){this.error.set("Completa todos los campos obligatorios.");return}if(this.registroForm.password!==this.confirmarPassword){this.error.set("Las contrase\xF1as no coinciden.");return}if(this.registroForm.password.length<6){this.error.set("La contrase\xF1a debe tener al menos 6 caracteres.");return}this.cargando.set(!0);let{error:l}=yield this.auth.registrar(this.registroForm);this.cargando.set(!1),l?this.error.set(l):(this.msg.add({severity:"success",summary:"\xA1Registro exitoso!",detail:"Revisa tu correo para confirmar tu cuenta.",life:2e3}),this.registroForm={nombre:"",email:"",password:"",telefono:""},this.confirmarPassword="",yield this.auth.redireccionarSegunRol())})}limpiarMensajes(){this.error.set(null),this.exito.set(null)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=x({type:t,selectors:[["app-login"]],decls:57,vars:22,consts:[[1,"min-h-screen","flex","align-items-center","justify-content-center","bg-gray-100"],[1,"surface-card","border-round-xl","shadow-4","p-5","w-full",2,"max-width","440px"],[1,"text-center","mb-5"],[1,"text-3xl","font-bold","m-0"],[2,"color","#1e40af"],[2,"color","#f97316"],[1,"text-color-secondary","text-sm","mt-1"],[3,"valueChange","value"],[3,"value"],[1,"flex","flex-column","gap-4","mt-3"],["pInputText","","id","login-email","type","email","autocomplete","email",1,"w-full",3,"ngModelChange","ngModel"],["for","login-email"],["id","login-password","styleClass","w-full","inputStyleClass","w-full","autocomplete","current-password",3,"ngModelChange","ngModel","feedback","toggleMask"],["for","login-password"],["severity","error",3,"text"],["label","Ingresar","icon","pi pi-sign-in","styleClass","w-full",3,"onClick","loading"],["pInputText","","id","reg-nombre","type","text",1,"w-full",3,"ngModelChange","ngModel"],["for","reg-nombre"],["pInputText","","id","reg-email","type","email","autocomplete","email",1,"w-full",3,"ngModelChange","ngModel"],["for","reg-email"],["pInputText","","id","reg-telefono","type","tel",1,"w-full",3,"ngModelChange","ngModel"],["for","reg-telefono"],["id","reg-password","inputStyleClass","w-full","promptLabel","Ingresa contrase\xF1a","weakLabel","D\xE9bil","mediumLabel","Media","strongLabel","Fuerte",1,"w-full",3,"ngModelChange","ngModel","toggleMask"],["for","reg-password"],["id","reg-confirm","inputStyleClass","w-full",1,"w-full",3,"ngModelChange","ngModel","feedback","toggleMask"],["for","reg-confirm"],["severity","success",3,"text"],["label","Crear cuenta","icon","pi pi-user-plus","styleClass","w-full",3,"onClick","loading"],[1,"text-xs","text-color-secondary","text-center","m-0"]],template:function(e,i){e&1&&(a(0,"div",0)(1,"div",1),w(2,"p-toast"),a(3,"div",2)(4,"h1",3)(5,"span",4),u(6,"FERRE"),r(),a(7,"span",5),u(8,"KANMY"),r()(),a(9,"p",6),u(10,"Sistema de pedidos mayorista"),r()(),a(11,"p-tabs",7),T("valueChange",function(o){return i.cambiarModo(o)}),a(12,"p-tablist")(13,"p-tab",8),u(14,"Iniciar sesi\xF3n"),r(),a(15,"p-tab",8),u(16,"Registrarse"),r()(),a(17,"p-tabpanels")(18,"p-tabpanel",8)(19,"div",9)(20,"p-floatlabel")(21,"input",10),F("ngModelChange",function(o){return D(i.loginForm.email,o)||(i.loginForm.email=o),o}),r(),a(22,"label",11),u(23,"Correo electr\xF3nico"),r()(),a(24,"p-floatlabel")(25,"p-password",12),F("ngModelChange",function(o){return D(i.loginForm.password,o)||(i.loginForm.password=o),o}),r(),a(26,"label",13),u(27,"Contrase\xF1a"),r()(),y(28,Ot,1,1,"p-message",14),a(29,"p-button",15),T("onClick",function(){return i.onLogin()}),r()()(),a(30,"p-tabpanel",8)(31,"div",9)(32,"p-floatlabel")(33,"input",16),F("ngModelChange",function(o){return D(i.registroForm.nombre,o)||(i.registroForm.nombre=o),o}),r(),a(34,"label",17),u(35,"Nombre completo *"),r()(),a(36,"p-floatlabel")(37,"input",18),F("ngModelChange",function(o){return D(i.registroForm.email,o)||(i.registroForm.email=o),o}),r(),a(38,"label",19),u(39,"Correo electr\xF3nico *"),r()(),a(40,"p-floatlabel")(41,"input",20),F("ngModelChange",function(o){return D(i.registroForm.telefono,o)||(i.registroForm.telefono=o),o}),r(),a(42,"label",21),u(43,"Tel\xE9fono (opcional)"),r()(),a(44,"p-floatlabel")(45,"p-password",22),F("ngModelChange",function(o){return D(i.registroForm.password,o)||(i.registroForm.password=o),o}),r(),a(46,"label",23),u(47,"Contrase\xF1a *"),r()(),a(48,"p-floatlabel")(49,"p-password",24),F("ngModelChange",function(o){return D(i.confirmarPassword,o)||(i.confirmarPassword=o),o}),r(),a(50,"label",25),u(51,"Confirmar contrase\xF1a *"),r()(),y(52,zt,1,1,"p-message",14),y(53,Wt,1,1,"p-message",26),a(54,"p-button",27),T("onClick",function(){return i.onRegistro()}),r(),a(55,"p",28),u(56," * Campos obligatorios "),r()()()()()()()),e&2&&(s(11),c("value",i.activeTab()),s(2),c("value",0),s(2),c("value",1),s(3),c("value",0),s(3),B("ngModel",i.loginForm.email),s(4),B("ngModel",i.loginForm.password),c("feedback",!1)("toggleMask",!0),s(3),_(i.error()?28:-1),s(),c("loading",i.cargando()),s(),c("value",1),s(3),B("ngModel",i.registroForm.nombre),s(4),B("ngModel",i.registroForm.email),s(4),B("ngModel",i.registroForm.telefono),s(4),B("ngModel",i.registroForm.password),c("toggleMask",!0),s(4),B("ngModel",i.confirmarPassword),c("feedback",!1)("toggleMask",!0),s(3),_(i.error()?52:-1),s(),_(i.exito()?53:-1),s(),c("loading",i.cargando()))},dependencies:[I,Ie,Se,Ne,ke,He,Qe,qe,Ke,$e,Ue,Ye,Ge,bt,K,fe,ge,re,me,Xe,Je,et,Ze],encapsulation:2})};export{mt as LoginComponent};
