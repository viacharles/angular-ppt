(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[18],{"+jFv":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var o=n("kdn0"),i=Object(o.d)({name:"floatingBanner",initialState:{showForceLoginBanner:!1,showMobileBottomBanner:!0},reducers:{setForceLoginBannerVisibility:function(e,t){e.showForceLoginBanner=t.payload},setMobileBottomBannerVisibility:function(e,t){e.showMobileBottomBanner=t.payload}}})},"/mTh":function(e,t,n){"use strict";var o,i,r;n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return i})),function(e){e.ComingSoon="coming_soon",e.ForSale="for_sale",e.EndOfSale="end_of_sale",e.OutOfStock="out_of_stock",e.Disable="disable"}(o||(o={})),function(e){e.STORE_PICKUP_FAMILY="STORE_PICKUP_FAMILY",e.STORE_PICKUP_711="STORE_PICKUP_711",e.HOME_DELIVERY="HOME_DELIVERY"}(i||(i={})),function(e){e.B2C="B2C",e.C2C="C2C"}(r||(r={}))},"9oca":function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return s}));var o,i=n("ERkP"),r=n.n(i),c=n("bSzb"),a=n("yqsq"),u=r.a.createElement,l="data-auto-play";!function(e){e.PostList="post-list",e.Post="post"}(o||(o={}));var d=function(e){var t=e.children,n=e.autoplay,o=e.suspend,r=Object(i.useRef)(null);return Object(a.a)({autoplay:n,containerRef:r,suspend:o}),u("div",{ref:r},t)};function s(e){var t=e.children,n=e.autoplay,o=e.uniqKey,r=e.suspend,a=Object(i.useState)(""),s=a[0],f=a[1],p=Object(i.useRef)(),m=Object(i.useCallback)((function(e){return p.current=e}),[]),b=Object(i.useRef)(!!r),h=Object(i.useMemo)((function(){return[l,o].filter(Boolean).join("-")}),[o]);return Object(i.useEffect)((function(){b.current=!!r}),[r]),u(c.a.Provider,{value:{containerRef:p,setContainerRef:m,currentPlayingVideo:s,setCurrentPlayingVideo:f,autoPlayKey:h,suspendRef:b,suspend:r}},u(d,{autoplay:n,suspend:r},t))}},"J/f1":function(e,t,n){"use strict";n.d(t,"b",(function(){return hn})),n.d(t,"a",(function(){return Sn})),n.d(t,"c",(function(){return yn}));var o=n("VtSi"),i=n.n(o),r=n("QsI/"),c=n("cxan"),a=n("ERkP"),u=n.n(a),l=n("uDfI"),d=n("j/s1"),s=n("AU4o"),f=n.n(s),p=n("jZ6r"),m=n("bB64"),b=n("7ebh"),h=n("ZBae"),g=u.a.createElement,O=Object(d.e)(b.a).withConfig({componentId:"sc-1da5p6a-0"})(["width:100%;"]),v=function(){return g(O,{ratio:1},g(h.a,{ratio:1},g("rect",{x:0,y:0,width:6,height:6,rx:6,ry:6}),g("rect",{x:8,y:1.5,width:15,height:3}),g("rect",{x:25,y:1.5,width:25,height:3}),g("rect",{x:0,y:9,width:60,height:5}),g("rect",{x:0,y:15,width:10,height:3}),g("rect",{x:12,y:15,width:20,height:3}),g("rect",{x:0,y:30,width:60,height:3}),g("rect",{x:0,y:35,width:90,height:3}),g("rect",{x:0,y:40,width:30,height:3}),g("rect",{x:0,y:55,width:75,height:3}),g("rect",{x:0,y:60,width:20,height:3}),g("rect",{x:0,y:75,width:30,height:3})))},w=n("zygG"),I=n("syhI"),j=n("vDEh"),x=n("+jFv"),C=u.a.createElement,S=d.e.div.withConfig({componentId:"nc2rhb-0"})(["position:relative;"]),y=d.e.div.withConfig({componentId:"nc2rhb-1"})(["position:absolute;top:50%;left:50%;transform:translate(-50%,200%);width:100px;height:100px;visibility:hidden;pointer-events:none;"]);function T(e){var t=e.delay,n=void 0===t?0:t,o=Object(l.d)(),i=Object(j.a)(),r=Object(w.a)(i,3),c=r[0],u=r[2],d=Object(I.a)(u),s=Object(a.useState)(d),f=s[0],p=s[1];return Object(a.useEffect)((function(){var e;if(!f&&d&&c)return p(!0),n?e=setTimeout((function(){return o(x.a.actions.setForceLoginBannerVisibility(!0))}),n):o(x.a.actions.setForceLoginBannerVisibility(!0)),function(){e&&f&&clearTimeout(e)}}),[f,d,c,o,n]),C(S,null,C(y,{ref:u}))}var _=u.a.createElement,k=d.e.div.withConfig({componentId:"sc-1gfwqzk-0"})(["position:relative;"]),E=d.e.div.withConfig({componentId:"sc-1gfwqzk-1"})(["position:absolute;top:50%;left:50%;transform:translate(-50%,0%);width:100px;height:0;visibility:hidden;pointer-events:none;"]);function M(){var e=Object(l.d)(),t=Object(a.useRef)(null),n=Object(I.a)(t);return Object(a.useEffect)((function(){e(x.a.actions.setMobileBottomBannerVisibility(!n))}),[n,e]),_(k,null,_(E,{ref:t}))}var A=n("Czhu"),P=n("9e7o"),L=n("pcOi"),D=n("56lG"),N=n("Dso+"),R=n("JWLz"),B=n("0qS3"),F=n("wowS"),G=n("Br/J"),z=n("xpQu"),H=n("SNCh"),q=n("tepD"),Z=u.a.createElement;function V(e){var t=e.post,n=e.comments,o=e.onClose,i=Object(z.a)(),r=Object(L.a)(),c=Object(F.a)(),u=c.handlers.openInAppOrDownloadApp,l=c.links.downloadLink,d=Object(a.useRef)(null),s=Object(I.a)(d),f=Object(a.useRef)(!1),p=Object(P.a)((function(e){return Object(B.f)(e,r.query.forumAlias)})),m=Object(G.a)(),b=p&&q.a.includes(p.alias),h="b"===Object(H.a)().normal_forum_refer_to_download_phase3,g=Object(a.useCallback)((function(e){var t=e.action,n=e.target,o=e.targetDetail,r=e.clickButtonType;p&&i.bilanx.enqueue({event:"conversionBannerClicked",payload:Object(A.a)(Object(A.a)(Object(A.a)(Object(A.a)({bannerType:"blocker",action:t},r&&{clickButtonType:r}),n&&{target:n}),o&&{targetDetail:o}),{},{forumId:p.id})})}),[i.bilanx,p]);Object(a.useEffect)((function(){s&&!f.current&&(l&&g({action:"view",target:"app_download",targetDetail:l}),f.current=!0)}),[g,s,l]);var O=Object(a.useCallback)((function(){p&&l&&(g({action:"click",clickButtonType:"app_download",target:"app_download",targetDetail:l}),u())}),[p,g,u,l]),v=Object(a.useCallback)((function(){g({action:"click",clickButtonType:"close_banner"}),null===o||void 0===o||o()}),[g,o]),w=null===p||void 0===p?void 0:p.name,j=Object(a.useMemo)((function(){return b?h?"\u60f3\u770b\u66f4\u591a".concat(w,"\u5167\u5bb9\uff1f"):"\u4e0a\u5927\u5b78\u3001\u51fa\u793e\u6703\u7684\u4f60\uff0c\u5feb\u4f86".concat(w,"\u677f\u4e00\u8d77\u8a0e\u8ad6\uff01\u7acb\u523b\u52a0\u5165Dcard \uff01"):m>=1e4?"\u6709\u8d85\u904e 10,000 \u591a\u4f4d\u5b78\u9577\u59d0\u5728".concat(w,"\u677f\n\u7b49\u8457\u56de\u7b54\u4f60\u7684\u554f\u984c"):"\u6709 ".concat(m.toLocaleString()," \u4f4d\u5b78\u9577\u59d0\u5728").concat(w,"\u677f\n\u7b49\u8457\u56de\u7b54\u4f60\u7684\u554f\u984c")}),[w,m,b,h]);return p&&(p.isSchool||b)?Z(W,null,n.length>0&&Z(U,null,Z(R.a,{comment:n[0],post:t,noBorder:!0})),Z(J,null,0===n.length?Z(D.a,{forum:p,size:40}):Z(K,null),Z($,null,Z(Y,{ref:d},j),b&&h&&Z(Q,null,"\u4e0d\u9650\u5927\u5b78\u751f\uff0c\n\u7acb\u523b\u7528 e-mail \u52a0\u5165 Dcard \u4e00\u8d77\u8a0e\u8ad6\uff01")),Z($,null,Z(N.d,{intent:N.b.PRIMARY,size:N.c.SMALL,block:!0,onClick:O},"\u7acb\u5373\u4e0b\u8f09 / \u958b\u555f Dcard"),!!o&&Z(N.d,{intent:N.b.TEXT_BLACK,size:N.c.SMALL,block:!0,onClick:function(){return v()}},"\u5148\u770b\u8a0e\u8ad6")))):null}var W=d.e.div.withConfig({componentId:"sc-19rzwmf-0"})(["position:relative;"]),U=d.e.div.withConfig({componentId:"sc-19rzwmf-1"})(["position:absolute;z-index:-1;top:0;width:100%;padding:0 ","px;"],(function(e){return e.theme.POST_LIST_SECTION_HORIZONTAL_PADDING+e.theme.POST_LIST_SECTION_HORIZONTAL_MARGIN})),K=d.e.div.withConfig({componentId:"sc-19rzwmf-2"})(["height:40px;"]),J=d.e.div.withConfig({componentId:"sc-19rzwmf-3"})(["width:100%;padding:16px;background-image:linear-gradient(180deg,#FFFFFF80 0%,#FFFFFF 38%,#FFFFFF 100%);display:grid;grid-row-gap:12px;justify-items:center;"]),Y=d.e.div.withConfig({componentId:"sc-19rzwmf-4"})(["font-size:18px;font-weight:800;white-space:pre-wrap;text-align:center;line-height:1.4;"]),Q=d.e.div.withConfig({componentId:"sc-19rzwmf-5"})([""," color:",";white-space:pre-wrap;text-align:center;"],(function(e){return e.theme.body1}),(function(e){return e.theme.newTextSemiDark})),$=d.e.div.withConfig({componentId:"sc-19rzwmf-6"})(["width:100%;display:grid;grid-row-gap:8px;justify-items:center;"]),X=n("Bcuc"),ee=n("9IgF"),te=n("7u6U"),ne=n("aO+1"),oe=n("7Tip"),ie=u.a.createElement,re=f()((function(){return Promise.all([n.e(21),n.e(33),n.e(147)]).then(n.bind(null,"QwnX"))}),{ssr:!1,loadableGenerated:{webpack:function(){return["QwnX"]},modules:["./AuthorMenu"]}}),ce=f()((function(){return Promise.all([n.e(13),n.e(212)]).then(n.bind(null,"3Rm+"))}),{ssr:!1,loadableGenerated:{webpack:function(){return["3Rm+"]},modules:["/home/circleci/project/sites/web/modules/post/components/CrossPost"]}}),ae=d.e.article.withConfig({componentId:"sc-1eorkjw-0"})(["background:",";padding:0 ","px 0;"],(function(e){return e.theme.containerBg}),(function(e){return e.theme.POST_LIST_SECTION_HORIZONTAL_PADDING+e.theme.POST_LIST_SECTION_HORIZONTAL_MARGIN})),ue=d.e.div.withConfig({componentId:"sc-1eorkjw-1"})(["display:flex;align-items:center;"]),le=d.e.div.withConfig({componentId:"sc-1eorkjw-2"})(["flex:1;overflow:hidden;"]),de=d.e.div.withConfig({componentId:"sc-1eorkjw-3"})(["font-size:","px;display:flex;align-items:center;margin-top:12px;"],(function(e){return e.theme.isMobile?13:14})),se=d.e.div.withConfig({componentId:"sc-1eorkjw-4"})(["color:",";white-space:nowrap;",";&:not(:last-child)::after{content:'\xb7';padding:0 0.5em;}"],(function(e){return e.theme.textLight}),(function(e){return e.theme.ellipsis})),fe=d.e.div.withConfig({componentId:"sc-1eorkjw-5"})(["padding:","px 0 ","px;"],(function(e){return e.theme.POST_VIEW_VERTICAL_PADDING}),(function(e){return e.theme.isMobile?24:40})),pe=d.e.div.withConfig({componentId:"sc-1eorkjw-6"})(["padding-bottom:","px;"],(function(e){return e.theme.isMobile?12:16}));function me(e){var t=e.post;return ie(ae,null,ie(ue,null,ie(le,null,ie(ne.a,null,Object(oe.d)(t.titleSegments))),t.currentMember&&ie(re,{post:t})),ie(de,null,t.customStyle.showHeaderForum&&ie(se,null,ie(X.a,{to:"/f/".concat(t.forumAlias)},t.forumName)),t.customStyle.showCreatedAt&&ie(se,null,t.timeString)),ie(fe,null,t.meta.crossPostId?ie(ce,{crossPostId:t.meta.crossPostId,postId:t.id,placement:"postView"}):ie(te.a,{post:t})),t.topics&&t.topics.length>0&&ie(pe,null,ie(ee.a,{topics:t.topics,position:"post"})))}var be=n("Qu5f"),he=n("ojop"),ge=n("D4jl"),Oe=u.a.createElement,ve=d.e.div.withConfig({componentId:"sc-6gpifi-0"})(["background:",";padding:0 ","px;padding-bottom:","px;"],(function(e){return e.theme.containerSecondaryBg}),(function(e){return e.theme.POST_LIST_SECTION_HORIZONTAL_PADDING+e.theme.POST_LIST_SECTION_HORIZONTAL_MARGIN}),(function(e){return e.theme.POST_BAR_HEIGHT+(e.expanded?e.theme.COMMENT_EDITOR_HEIGHT:120)})),we=d.e.div.withConfig({componentId:"sc-6gpifi-1"})(["border-top:1px solid ",";padding:24px 0;"],(function(e){return e.noBorder?"transparent":e.theme.borderWhiteLight})),Ie=d.e.div.withConfig({componentId:"sc-6gpifi-2"})(["background:",";color:",";border-radius:4px;border:1px solid ",";line-height:60px;font-size:18px;padding-left:17px;user-select:none;cursor:text;"],(function(e){return e.theme.whiteBg}),(function(e){return e.theme.textLight}),(function(e){return e.theme.borderWhiteLight}));function je(e){var t=e.post,n=Object(he.c)(),o=Object(a.useContext)(ge.a),i=o.openCommentEditor,r=o.setOpenCommentEditor;return Oe(u.a.Fragment,null,Oe(ve,{expanded:i},Oe(we,{noBorder:!t||!t.commentCount},Oe(Ie,{onClick:function(){r(!0),requestAnimationFrame((function(){n.scrollTo({top:Number.MAX_SAFE_INTEGER})}))}},"\u99ac\u4e0a\u56de\u61c9\u6436\u7b2c ",t&&t.commentCount+1," \u6a13..."))))}var xe=n("/nHl"),Ce=u.a.createElement,Se=d.e.div.withConfig({componentId:"sc-1ko7sfh-0"})(["background:",";padding:0 ","px;"],(function(e){return e.theme.isMobile&&e.theme.containerBg}),(function(e){return e.theme.POST_LIST_SECTION_HORIZONTAL_PADDING+e.theme.POST_LIST_SECTION_HORIZONTAL_MARGIN})),ye=d.e.div.withConfig({componentId:"sc-1ko7sfh-1"})(["border-top:1px solid ",";padding:14px 0;"],(function(e){return e.noBorder?"transparent":e.theme.borderWhiteLight})),Te=Object(a.forwardRef)((function(e,t){return Ce(Se,{ref:t},Ce(ye,null,Ce(xe.a,null)))})),_e=n("RRpZ"),ke=n("kdb8"),Ee=n("kl5W"),Me=n("xok/"),Ae=n("Wk2p"),Pe=n("iveW"),Le=n("2zbF"),De=n("1tpf"),Ne=u.a.createElement,Re=d.e.div.withConfig({componentId:"xrkql2-3"})(["flex:1;display:flex;"]),Be=Object(d.e)(De.a).withConfig({componentId:"xrkql2-4"})(["--background-color:",";"],(function(e){return e.theme.tooltipBg})),Fe=Object(d.e)(X.a).withConfig({componentId:"xrkql2-5"})(["display:flex;align-items:center;"]),Ge=d.e.div.withConfig({componentId:"xrkql2-6"})(["color:",";padding:6px 16px;line-height:2;"],(function(e){return e.theme.newTextWhite}));function ze(e){var t=e.children,n=e.post,o=Object(l.d)(),i=Object(a.useState)(!1),r=i[0],c=i[1],d=Object(P.a)(Le.b),s=Object(P.a)((function(e){var t,o;return null===e||void 0===e||null===(t=e.persona)||void 0===t||null===(o=t.data)||void 0===o?void 0:o[n.authorUid]}));return Object(a.useEffect)((function(){n.authorUid&&o(Object(Ae.b)({uid:n.authorUid},{requestOnIdle:!0}))}),[o,n.authorUid]),Ne(u.a.Fragment,null,Ne(Re,null,Ne(Be,{isOpen:r,setOpen:c,placement:"right",preventOverflow:!1,trigger:Ne(Fe,{onMouseEnter:function(){return c(!0)},onMouseLeave:function(){return c(!1)},to:"/@".concat(n.authorUid)},t)},Ne(Ge,null,"\u5171\u767c\u8868 ",s&&"number"===typeof s.postCount?s.postCount:""," \u7bc7\u6587\u7ae0"))),!n.currentMember&&n.personaSubscriptable&&s&&Ne(Pe.c,{persona:s,position:"post",size:d?Pe.b.SMALL:Pe.b.NORMAL}))}var He=n("vljj"),qe=n("CX9e"),Ze=d.e.div.withConfig({componentId:"s3d701-0"})(["flex:1;min-width:0;overflow:hidden;"]),Ve=d.e.div.withConfig({componentId:"s3d701-1"})([""," color:",";",";"],(function(e){return e.theme.isMobile?Object(d.d)(["",""],e.theme.subtitle2):Object(d.d)(["",""],e.theme.subtitle1)}),(function(e){return e.theme.newTextSemiDark}),(function(e){return e.theme.ellipsis})),We=d.e.div.withConfig({componentId:"s3d701-2"})(["font-size:","px;"],(function(e){return e.theme.isMobile?12:14})),Ue=u.a.createElement,Ke=Object(d.e)(Ze).withConfig({componentId:"fve9d9-0"})(["cursor:pointer;"]),Je=d.e.div.withConfig({componentId:"fve9d9-1"})(["display:flex;align-items:center;"]),Ye=Object(d.e)(He.a).attrs((function(e){return{fill:e.theme.suspiciousIconColor,size:16}})).withConfig({componentId:"fve9d9-2"})(["margin-left:3px;"]);function Qe(){var e=Object(a.useState)(!1),t=e[0],n=e[1];return Ue(u.a.Fragment,null,Ue(Ke,{onClick:function(){return n(!0)}},Ue(Ve,null,Ue(Je,null,"\u6b64\u5e33\u865f\u7591\u4f3c\u7570\u5e38",Ue(Ye,null))),Ue(We,null,"\u5b98\u65b9\u6b63\u5728\u9032\u884c\u8eab\u4efd\u78ba\u8a8d")),Ue(qe.a,{isOpen:t,onClose:function(){return n(!1)}}))}var $e=n("4hQm"),Xe=u.a.createElement,et=d.e.div.withConfig({componentId:"sc-1mc3zbv-0"})(["background:",";color:",";padding:14px 0;font-size:14px;text-align:center;"],(function(e){return e.headerColor||e.theme.danger}),(function(e){return e.theme.textWhite})),tt=d.e.div.withConfig({componentId:"sc-1mc3zbv-1"})(["padding:",";display:flex;align-items:center;"],(function(e){return e.theme.isMobile?"16px ".concat(e.theme.POST_VIEW_HORIZONTAL_PADDING,"px"):"40px ".concat(e.theme.POST_VIEW_HORIZONTAL_PADDING,"px 22px")})),nt=d.e.div.withConfig({componentId:"sc-1mc3zbv-2"})(["display:flex;align-items:center;justify-content:space-between;width:100%;"]),ot=d.e.div.withConfig({componentId:"sc-1mc3zbv-3"})(["padding-right:15px;"]),it=Object(d.e)(_e.a).attrs((function(e){return{size:e.theme.isMobile?32:40}})).withConfig({componentId:"sc-1mc3zbv-4"})([""]),rt=Object(d.e)(We).withConfig({componentId:"sc-1mc3zbv-5"})(["color:",";"],(function(e){return e.theme.isMobile?e.theme.textDefault:e.theme.mainLight})),ct=d.e.div.withConfig({componentId:"sc-1mc3zbv-6"})(["display:flex;padding:0 ","px 18px;"],(function(e){return e.theme.POST_VIEW_HORIZONTAL_PADDING})),at=Object(d.e)(Me.a).withConfig({componentId:"sc-1mc3zbv-7"})(["background:",";color:",";font-size:","px;padding:4px 7px;border-radius:4px;"],(function(e){return e.bgColor}),(function(e){return e.theme.textWhite}),(function(e){return e.theme.isMobile?15:18})),ut=d.e.button.withConfig({componentId:"sc-1mc3zbv-8"})(["padding:0;padding-left:8px;background:none;border:none;cursor:pointer;","{width:24px;height:24px;fill:",";}&:hover{","{fill:",";}}"],ke.a,(function(e){return e.theme.iconFillMedium}),ke.a,(function(e){return e.theme.active}));var lt=function(e){var t=e.post,n=Object(l.d)(),o=Object(P.a)(Le.b),i=Object(a.useContext)($e.a).closeModal,r=t.customStyle.headerColor,c=t.customStyle.label;Object(a.useEffect)((function(){t.authorUid&&n(Object(Ae.b)({uid:t.authorUid},{requestOnIdle:!0}))}),[n,t.authorUid]);var d=Xe(u.a.Fragment,null,Xe(ot,null,Xe(it,{source:t})),t.isSuspiciousAccount?Xe(Qe,null):Xe(Ze,null,Xe(Ve,null,t.authorName),t.withNickname&&Xe(rt,null,"@",t.authorUid)));return Xe(u.a.Fragment,null,!o&&r&&Xe(et,{headerColor:r}),!o&&t&&!!t.backupMessage&&Xe(et,null,t.backupMessage),Xe(tt,null,Xe(nt,null,t.withNickname?Xe(ze,{post:t},d):d,i&&Xe(ut,{onClick:i,"aria-label":"\u95dc\u9589"},Xe(Ee.a,null)))),c&&Xe(ct,null,Xe(at,{bgColor:c.bgColor},c.text)))},dt=n("+jG8"),st=u.a.createElement,ft=f()((function(){return n.e(13).then(n.bind(null,"m2GP"))}),{ssr:!1,loadableGenerated:{webpack:function(){return["m2GP"]},modules:["/home/circleci/project/sites/web/modules/post/components/PostActionBar"]}}),pt=d.e.div.withConfig({componentId:"fiw2dr-0"})(["padding:0 ","px;background:",";"],(function(e){return e.theme.POST_LIST_SECTION_HORIZONTAL_PADDING+e.theme.POST_LIST_SECTION_HORIZONTAL_MARGIN}),(function(e){return e.theme.containerBg})),mt=d.e.div.withConfig({componentId:"fiw2dr-1"})(["padding:","px 0;color:",";font-size:","px;display:flex;justify-content:space-between;align-items:center;border-top:",";border-bottom:",";"],(function(e){return e.theme.isMobile?12:6}),(function(e){return e.theme.textDefault}),(function(e){return e.theme.isMobile?16:18}),(function(e){return e.theme.isMobile&&"1px solid ".concat(e.theme.borderBlackTransparent5)}),(function(e){return e.theme.isMobile&&"1px solid ".concat(e.theme.borderBlackTransparent5)})),bt=d.e.div.withConfig({componentId:"fiw2dr-2"})(["display:flex;flex:1;align-items:center;"]),ht=d.e.div.withConfig({componentId:"fiw2dr-3"})(["flex-shrink:0;"]),gt=d.e.div.withConfig({componentId:"fiw2dr-4"})(["span{border-color:",";}"],(function(e){return e.theme.containerBg})),Ot=Object(d.e)(dt.a).attrs((function(e){return{size:e.theme.isMobile?21:24}})).withConfig({componentId:"fiw2dr-5"})([""]),vt=function(e){var t=e.post;return st(pt,null,st(mt,null,st(bt,null,st(gt,null,st(Ot,{count:t&&t.reactionCount,enableModal:!0,reactions:t&&t.reactions,postId:t&&t.id})),"\uff0e\u56de\u61c9 ",t?t.commentCount:""),st(ht,null,st(ft,{post:t,position:"post"}))))},wt=n("Prm1"),It=n("fAjh"),jt=n("JrgN"),xt=n("HEbu"),Ct=u.a.createElement,St=d.e.li.withConfig({componentId:"sc-1an3q64-0"})(["position:relative;min-width:0;padding:",";border-bottom:",";&:last-child{border-bottom:none;}",""],(function(e){return e.theme.isMobile?"11px 0":"8px 0 8px 15px"}),(function(e){return e.theme.isMobile&&"1px solid ".concat(e.theme.borderBlackTransparent5)}),(function(e){return!e.theme.isMobile&&"\n    &::before {\n      content: '';\n      width: 7px;\n      height: 7px;\n      position: absolute;\n      top: 15px;\n      left: 0;\n      border-radius: 50%;\n      margin: auto;\n      background: ".concat(e.theme.active,";\n    }\n  ")})),yt=d.e.div.withConfig({componentId:"sc-1an3q64-1"})(["height:","px;display:grid;grid-template-areas:'title thumb' 'footer thumb';"],(function(e){return e.theme.isMobile?62:40})),Tt=d.e.div.withConfig({componentId:"sc-1an3q64-2"})(["grid-area:title;margin-top:auto;margin-bottom:auto;font-size:16px;font-weight:bold;color:",";",";"],(function(e){return e.theme.newTextDark}),(function(e){return e.theme.ellipsis})),_t=d.e.div.withConfig({componentId:"sc-1an3q64-3"})(["grid-area:footer;margin-top:auto;margin-bottom:auto;font-size:14px;color:",";"],(function(e){return e.theme.isMobile?e.theme.textDefault:e.theme.newTextSemiLight})),kt=d.e.div.withConfig({componentId:"sc-1an3q64-4"})(["grid-area:thumb;margin-left:auto;width:40px;height:40px;"]),Et=Object(d.e)(jt.a).attrs((function(e){return{size:e.theme.RECOMMENDED_POSTS_THUMBNAIL_SIZE}})).withConfig({componentId:"sc-1an3q64-5"})(["margin-left:0;border-radius:","px;"],(function(e){return e.theme.isMobile?12:10}));function Mt(e){var t=e.postId,n=e.recommendedPost,o=e.onClick,i={sourceKey:It.a.darsys,sourceDetail:t};return Ct(St,{onClick:function(){return o(n)}},Ct(xt.a,{forumAlias:n.forumAlias,postId:n.id,state:i},Ct(yt,null,Ct(Tt,null,n.title),Ct(_t,null,"\u5fc3\u60c5\u6578 ",n.likeCount,"\uff0e\u56de\u61c9 ",n.commentCount),Ct(kt,null,Ct(Et,{post:n})))))}var At=n("U2d/"),Pt=n("EHGq"),Lt=u.a.createElement,Dt=d.e.div.withConfig({componentId:"reh9gk-0"})(["color:",";padding:",";"],(function(e){return e.theme.textLight}),(function(e){return!e.theme.isMobile&&"40px 0"})),Nt=d.e.ul.withConfig({componentId:"reh9gk-1"})(["display:grid;grid-template-columns:repeat(",",1fr);grid-gap:0 43px;margin-top:","px;padding:0 ","px;"],(function(e){return e.theme.isMobile?1:2}),(function(e){return e.theme.isMobile?0:10}),(function(e){return e.theme.POST_LIST_SECTION_HORIZONTAL_PADDING+e.theme.POST_LIST_SECTION_HORIZONTAL_MARGIN}));function Rt(e){var t=e.postId,n=Object(z.a)(),o=Object(P.a)((function(e){return Object(At.a)(e,t)})),i=Object(P.a)((function(e){return Object(Pt.j)(e,t)})),r=Object(a.useMemo)((function(){return function(e,t,o){n.bilanx.enqueue({event:"recommendedPostViewed",payload:{postId:e,action:t,recommendedId:o}})}}),[n]);return Object(a.useEffect)((function(){o.length&&r(+t,"view")}),[r,t,o]),"similarPosts"===(null===i||void 0===i?void 0:i.customStyle.darsysType)&&o.length?Lt(Dt,null,Lt(wt.default,null,"\u4f60\u53ef\u80fd\u611f\u8208\u8da3\u7684\u6587\u7ae0"),Lt(Nt,null,o.map((function(e,n){return Lt(Mt,{key:n,postId:t,recommendedPost:e,onClick:function(e){return r(+t,"click",+e.id)}})})))):null}var Bt=n("gJx9"),Ft=u.a.createElement,Gt=d.e.div.withConfig({componentId:"sc-13qef6d-0"})(["position:relative;"]),zt=d.e.div.withConfig({componentId:"sc-13qef6d-1"})(["position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);height:300vh;visibility:hidden;pointer-events:none;"]);function Ht(e){var t=e.children,n=e.forceDisplay,o=void 0!==n&&n,i=Object(Bt.a)(),r=Object(a.useRef)(null),c=Object(I.a)(r),u=Object(a.useState)(o||c),l=u[0],d=u[1];return Object(a.useEffect)((function(){!l&&c&&d(!0)}),[l,c]),Ft(Gt,null,Ft(zt,{ref:function(e){e&&!r.current&&(r.current=e,i())}}),l&&t)}var qt=n("rOtb"),Zt=n("G5Zb"),Vt=n("9w6I"),Wt=n("kHPa"),Ut=n("A2ZH"),Kt=u.a.createElement,Jt=f()((function(){return n.e(168).then(n.bind(null,"IH4c"))}),{ssr:!1,loadableGenerated:{webpack:function(){return["IH4c"]},modules:["./CommentModal"]}});function Yt(e){var t=e.children;return Kt(Ut.a.Provider,{value:{useModal:!0}},t,Kt(Jt,null))}var Qt=n("cf3O"),$t=n("8hrp"),Xt=n("OZ1t");var en=n("neW5"),tn=n("9oca"),nn=n("IEyF"),on=n("dAsy"),rn=n("PaJF"),cn=n("/mTh"),an=u.a.createElement,un=f()((function(){return n.e(182).then(n.bind(null,"bp68"))}),{ssr:!1,loadableGenerated:{webpack:function(){return["bp68"]},modules:["./PostInfo"]}}),ln=f()((function(){return Promise.all([n.e(19),n.e(133)]).then(n.bind(null,"odvc"))}),{ssr:!1,loadableGenerated:{webpack:function(){return["odvc"]},modules:["./TopAdVideo"]}}),dn=f()((function(){return Promise.all([n.e(13),n.e(225)]).then(n.bind(null,"SCge"))}),{ssr:!1,loadableGenerated:{webpack:function(){return["SCge"]},modules:["./ToolbarContainer"]}}),sn=f()((function(){return Promise.all([n.e(13),n.e(223)]).then(n.bind(null,"SZVK"))}),{ssr:!1,loadableGenerated:{webpack:function(){return["SZVK"]},modules:["../MobileGoodInfo"]}}),fn=f()((function(){return n.e(224).then(n.bind(null,"jnxU"))}),{ssr:!1,loadableGenerated:{webpack:function(){return["jnxU"]},modules:["./ECAnchorButton"]}}),pn=f()((function(){return n.e(226).then(n.bind(null,"whwY"))}),{ssr:!1,loadableGenerated:{webpack:function(){return["whwY"]},modules:["../WarmReminder"]}}),mn=f()((function(){return n.e(166).then(n.bind(null,"xru7"))}),{ssr:!1,loadableGenerated:{webpack:function(){return["xru7"]},modules:["../GoodList"]}}),bn=d.e.div.withConfig({componentId:"sc-1bx44oc-0"})(["border-radius:4px;min-height:100%;width:100%;padding-bottom:var(--safe-area-inset-bottom);"]),hn=d.e.div.withConfig({componentId:"sc-1bx44oc-1"})(["background:",";"],(function(e){return e.theme.isMobile&&e.theme.containerBg})),gn=Object(d.e)(hn).withConfig({componentId:"sc-1bx44oc-2"})(["background:",";padding:","px 0;"],(function(e){return e.theme.containerSecondaryBg}),(function(e){return e.theme.isMobile?0:40})),On=Object(d.e)(hn).withConfig({componentId:"sc-1bx44oc-3"})(["padding:16px 0;"]),vn=d.e.div.withConfig({componentId:"sc-1bx44oc-4"})(["background:",";position:relative;display:flex;justify-content:center;padding:",";"],(function(e){return e.theme.containerBg}),(function(e){return e.theme.isMobile?"".concat(e.theme.POST_VIEW_VERTICAL_PADDING,"px 0"):""})),wn=d.e.div.withConfig({componentId:"sc-1bx44oc-5"})(["padding-bottom:","px;"],(function(e){return e.theme.isMobile&&e.theme.POST_BAR_HEIGHT})),In=d.e.div.withConfig({componentId:"sc-1bx44oc-6"})(["padding:22px ","px;"],(function(e){return e.theme.POST_LIST_SECTION_HORIZONTAL_PADDING+e.theme.POST_LIST_SECTION_HORIZONTAL_MARGIN})),jn=d.e.div.withConfig({componentId:"sc-1bx44oc-7"})(["padding-bottom:120px;"]);function xn(e){var t=e.children,n=e.title,o=e.post,i=e.popular,r=e.showAd,u=Object(a.useState)(!0),d=u[0],s=u[1],f=o.id,p=Object(Vt.e)({postId:f,popular:i}),m=Object(P.a)((function(e){return Object(Vt.c)(e,p)})),b=Object(P.a)((function(e){return Object(Vt.a)(e,p)})),h=Object(l.d)(),g=Object(q.b)(),O=g.shouldMountMobileCommentHoverBanner,v=g.shouldShowCloseButton,w=g.isSpecificNormalForum,I=Object(H.a)().normal_forum_refer_to_download_phase3,j=!i&&!!O,x=!!["a","b"].includes(I||"")&&!!d&&!!j,C=!!d&&!!j;if(w){if(x)return an(V,Object(c.a)({post:o,comments:b},v&&{onClose:function(){return s(!1)}}))}else if(C)return an(V,{post:o,comments:b});return m?m.fetched&&!m.index.length?null:an(gn,{id:"comment-anchor"},!!m.index.length&&an(be.b,{comments:b,post:o,title:n,showAd:r,showLoadMoreInGap:!i}),!i&&an(nn.default,{pagination:m,onLoadMore:function(){var e=b[b.length-1];h(Object(Qt.e)({postId:f,after:"".concat(e&&e.floor||0)}))}},an(Te,null)),!!m.index.length&&t):null}function Cn(e){var t=e.post,n=e.enableToolbar,o=void 0===n||n,c=e.children,d=Object(L.a)(),s=t.forumAlias||d.query.forumAlias,f=Object(P.a)((function(e){return Object(B.f)(e,s)})),b=Object(P.a)(Le.a),h=Object(P.a)(Le.b),g=t.enableAd&&h,O=Object(q.b)().shouldShowCloseButton,v=t.id,w=Object(P.a)((function(e){return Object(Vt.c)(e,Object(Vt.e)({postId:v,popular:!1}))})),j=w.noMore||w.error,x=function(e){var t=e.postId,n=Object(L.a)(),o=Object(z.a)(),i=Object(a.useRef)(null),r=Object(I.a)(i),c=Object(a.useRef)(Date.now()),u=Object(a.useRef)(!1),l=Object(a.useRef)(!1),d=Object(Xt.c)((function(e,i){var r,c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=(null===(r=e.customizedSource)||void 0===r?void 0:r.key)?e.customizedSource:Object(A.a)(Object(A.a)({},e.previousSource),e.customizedSource),u=function(){switch(a.key){case It.a.post:case It.a.postArticleReply:case It.a.postArticleContent:case It.a.postArticleCrossPost:return!0}}(),l=n.query.cid;o.bilanx.enqueue({event:"postViewed",payload:Object(A.a)({postId:+t,percentage:i,cellNo:a.cellNo||0,duration:c,itemPosition:a.itemPosition||0},l?{source:It.a.share,sourceDetail:"".concat(n.query.cid)}:Object(A.a)({source:a.key,sourceDetail:"".concat(a.detail)},u&&{sourceFrom:"".concat(t)}))})}),[t,n,o]);return Object(a.useEffect)((function(){u.current=!1,l.current=!1,c.current=Date.now()}),[t]),Object(a.useEffect)((function(){u.current||(u.current=!0,d(0))}),[d]),Object(a.useEffect)((function(){l.current||r&&(l.current=!0,d(100,Math.floor((Date.now()-c.current)/1e3)))}),[d,r]),i}({postId:t.id}),C=Object(a.useContext)(en.a).scrollTo,S=!!Object(a.useContext)($e.a).closeModal;Object(a.useEffect)((function(){S&&C&&C({left:0,top:0})}),[v,S,C]),function(e,t){var n=Object(l.d)(),o=Object(P.a)((function(e){return e.post.elevated})),c=Object($t.a)(o),u=Object(he.c)();Object(he.b)(u),Object(a.useEffect)((function(){function a(e){u.scrollTo({top:e})}function l(){a(Number.MAX_SAFE_INTEGER)}function d(){return(d=Object(r.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n(Object(Qt.e)({postId:e.id,before:"".concat(e.commentCount+1)}));case 2:requestAnimationFrame((function(){l()}));case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}c!==o&&(!0===o?t?l():function(){d.apply(this,arguments)}():!1===o&&a(0))}),[n,u,o,c,t,e.id,e.commentCount])}(t,j);var y="string"===typeof t.content;return an(Yt,null,t.isEC&&h&&an(fn,null),an(m.b,{type:m.a.post,ctx:{post:t}}),g&&!t.adVideoId&&an(vn,null,an(p.a,{placement:qt.a.MobileArticleTop})),g&&t.adVideoId&&an(ln,{post:t}),an(hn,null,an(lt,{post:t})),an(me,{post:t}),y&&an("div",{ref:x}),y&&!t.backupMessage&&an(u.a.Fragment,null,an(Ht,{forceDisplay:t.isEC&&h},an(vt,{post:t}),an(un,{post:t,postForum:f}),!h&&!b&&t.enableAd&&an(On,null,an(vn,null,an(p.a,{placement:qt.a.DesktopArticleBottom}))),g&&an(vn,null,an(p.a,{placement:qt.a.MobileArticleBottom})),h&&an(hn,null,an(Rt,{postId:t.id}))),t.customStyle.showPopularComments&&an(xn,{post:t,title:"\u71b1\u9580\u56de\u61c9",popular:!0},g&&an(hn,null,an(vn,null,an(p.a,{placement:qt.a.MobilePopularCommentsBottom})))),an(Ht,{forceDisplay:t.isEC&&h},!h&&an(hn,null,an(Rt,{postId:t.id})),h&&t.isEC&&an(hn,null,an(sn,{postId:t.id})),an(hn,null,an(pn,{postId:t.id})),an(hn,null,an(mn,{postId:t.id}))),!b&&!h&&an(T,O&&{delay:5e3}),c,!b&&h&&!O&&an(M,null),an(Ht,null,g&&(j||!b)&&an(hn,null,an(vn,null,an(p.a,{placement:qt.a.MobileLatestCommentsBottom}))),!h&&!t.customStyle.enableSurveyButton&&o&&j&&an(je,{post:t}),!h&&t.customStyle.enableSurveyButton&&an(jn,null)),o&&an(wn,null,an(dn,{post:t}))))}function Sn(e){var t=e.enableToolbar,n=e.children,o=Object(Wt.a)(),i=Object(P.a)((function(e){return Object(Pt.j)(e,o)})),r=Object(l.d)();return function(e){var t=e.postId,n=Object(P.a)((function(e){return Object(on.a)(e,t)})),o=null===n||void 0===n?void 0:n.id,i=null===n||void 0===n?void 0:n.coupons,r=Object(P.a)(Le.a),c=Object(l.d)(),u=Object(a.useMemo)((function(){var e;switch(null!==(e=null===n||void 0===n?void 0:n.state)&&void 0!==e?e:cn.a.Disable){case cn.a.Disable:case cn.a.EndOfSale:case cn.a.OutOfStock:return!0;default:return!1}}),[n]);Object(a.useEffect)((function(){r&&o&&!i&&!u&&c(Object(rn.a)({campaignId:o,postId:t}))}),[o,c,r,u,i,t])}({postId:o}),Object(a.useEffect)((function(){function e(){r(Object(Zt.e)(null))}return e(),function(){e()}}),[r,o]),an(tn.b,{uniqKey:tn.a.Post,autoplay:(null===i||void 0===i?void 0:i.layout)===oe.b.video},an(bn,null,i?an(Cn,{post:i,enableToolbar:t},n):an(hn,null,an(In,null,an(v,null)))))}function yn(e){var t=e.enableToolbar,n=Object(P.a)(Le.a),o=Object(P.a)(Le.b),i=Object(Wt.a)(),r=Object(P.a)((function(e){return Object(Pt.j)(e,i)})),c=(null===r||void 0===r?void 0:r.enableAd)&&(o||!o&&!n);return an(Sn,{enableToolbar:t},r&&an(xn,{post:r,title:"\u5171 ".concat(null===r||void 0===r?void 0:r.commentCount," \u5247\u56de\u61c9"),showAd:c}))}},MCDl:function(e,t){var n='<svg viewBox="0 0 24 24"><path d="M23.7 5.9l-.3-.3a.9.9 0 00-1.2 0l-9.8 9.8c-.2.2-.6.2-.8 0L1.8 5.6a.9.9 0 00-1.2 0l-.3.3c-.4.3-.4.9 0 1.2l9.8 9.8a2.7 2.7 0 003.8 0l9.8-9.8c.4-.3.4-.9 0-1.2z"/></svg>';e.exports=n,t.default=n},Prm1:function(e,t,n){"use strict";n.r(t);var o=n("ERkP"),i=n.n(o),r=n("j/s1"),c=i.a.createElement,a=r.e.div.withConfig({componentId:"sc-3l0xho-0"})(["padding:0 ","px;background-color:",";"],(function(e){return e.theme.POST_VIEW_HORIZONTAL_PADDING}),(function(e){return e.theme.isMobile?e.theme.uiBackground:"transparent"})),u=Object(r.d)(["",";color:",";padding:26px 0 6px;"],(function(e){return e.theme.subtitle2}),(function(e){return e.theme.newTextSemiLight})),l=Object(r.d)(["",";border-bottom:1px solid ",";color:",";padding-bottom:4px;"],(function(e){return e.theme.body1}),(function(e){return e.theme.borderBlackTransparent5}),(function(e){return e.theme.textDefault})),d=r.e.div.withConfig({componentId:"sc-3l0xho-1"})(["",""],(function(e){return e.theme.isMobile?u:l}));t.default=function(e){var t=e.children,n=e.className;return c(a,{className:n},c(d,null,t))}},Qu5f:function(e,t,n){"use strict";n.d(t,"a",(function(){return P})),n.d(t,"b",(function(){return N}));var o=n("zjfJ"),i=n("Czhu"),r=n("2h71"),c=n("ERkP"),a=n.n(c),u=n("9e7o"),l=n("j/s1"),d=n("JWLz"),s=n("Prm1"),f=n("IpA2"),p=n("uDfI"),m=n("syhI"),b=n("/nHl"),h=n("kdb8"),g=n("yDbQ"),O=n("MCDl"),v=n.n(O),w=Object(g.a)(v.a),I=n("cf3O"),j=n("9w6I"),x=a.a.createElement,C=l.e.div.withConfig({componentId:"sc-1g6i0fc-0"})(["border-bottom:1px solid ",";border-top:1px solid ",";cursor:pointer;position:relative;user-select:none;"],(function(e){return e.theme.borderWhiteLight}),(function(e){return e.theme.borderWhiteLight})),S=l.e.div.withConfig({componentId:"sc-1g6i0fc-1"})(["display:flex;align-items:center;justify-content:center;color:",";padding:24px 0;font-size:14px;&:hover{background:",";}","{fill:",";width:20px;height:20px;margin-right:10px;transform:rotateZ(",");}"],(function(e){return e.theme.active}),(function(e){return e.theme.hoverContainerBg}),h.a,(function(e){return e.theme.active}),(function(e){return e.downward&&"180deg"})),y=l.e.div.withConfig({componentId:"sc-1g6i0fc-2"})(["position:absolute;bottom:calc(50% + 50vh);pointer-events:none;visibility:hidden;"]);function T(e){var t=e.start,n=e.end,o=e.post,i=Object(p.d)(),r=Object(c.useRef)(null),a=!Object(m.a)(r),l=Object(u.a)((function(e){var t;return Object(j.c)(e,Object(j.e)({postId:null!==(t=null===o||void 0===o?void 0:o.id)&&void 0!==t?t:""}))})),d=!o||l.loading,s=a?n-1:t+1,f=a?Math.max(n-30,t+1):Math.min(t+30,n-1),h=Object(c.useCallback)((function(){o&&i(Object(I.e)({postId:o.id,after:"".concat(Math.min(s,f)-1),limit:Math.min(Math.abs(s-f)+1,30)}))}),[i,o,s,f]);return x(C,null,x(y,{ref:r}),d?x(b.a,null):x(S,{onClick:h,downward:a},x(w,null),"\u986f\u793a B",s," \u2014 B",f," \u56de\u61c9"))}var _,k=n("jZ6r"),E=n("rOtb"),M=n("2zbF"),A=a.a.createElement,P="data-floor",L=l.e.div.withConfig({componentId:"sc-1ghk0k7-0"})(["padding:0 ","px;"],(function(e){return e.theme.POST_LIST_SECTION_HORIZONTAL_PADDING+e.theme.POST_LIST_SECTION_HORIZONTAL_MARGIN})),D=l.e.div.withConfig({componentId:"sc-1ghk0k7-1"})(["background:",";position:relative;display:flex;justify-content:center;padding:",";border-bottom:1px solid ",";"],(function(e){return e.theme.containerBg}),(function(e){return e.theme.isMobile?"".concat(e.theme.POST_VIEW_VERTICAL_PADDING,"px 0"):""}),(function(e){return e.theme.borderWhiteLight}));function N(e){var t=e.comments,n=void 0===t?[]:t,a=e.post,l=e.showAd,p=e.showLoadMoreInGap,m=e.title,b=e.enableDataFloor,h=Object(u.a)(M.b),g=Object(c.useMemo)((function(){var e,t=[],o=0,i=0,c=a&&a.commentCount||n.length,u=Object(r.a)(n);try{for(u.s();!(e=u.n()).done;){var d=e.value;p&&d.floor-o>1&&t.push({type:_.Gap,start:o,end:d.floor}),l&&(o-10)%30===0&&c-o>=10&&t.push({type:_.Ads,index:"".concat(++i)}),t.push({type:_.Comment,comment:d}),o=d.floor}}catch(s){u.e(s)}finally{u.f()}return t}),[n,a,l,p]),O=Object(c.useMemo)((function(){return g.reduce((function(e,t,n){return Object(i.a)(Object(i.a)({},e),t.type===_.Ads&&Object(o.a)({},n,!0))}),{})}),[g]);return A("section",null,A(s.default,null,m),A(f.a,{rowCount:g.length,initialRowSize:125,persistRow:function(e){return O[e]}},(function(e){return function(e){var t=g[e];switch(t.type){case _.Comment:return A(L,b&&Object(o.a)({},P,t.comment.floor),A(d.a,{comment:t.comment,post:a,noBorder:e===g.length-1||(g[e+1]||{}).type===_.Gap,maxHeight:"25vh"}));case _.Gap:return A(L,null,A(T,{post:a,start:t.start,end:t.end}));case _.Ads:if(a){var n="".concat(t.index);return A(D,null,h&&A(k.a,{placement:E.a.MobileLatestCommentsMiddle,idSuffix:n}),!h&&A(k.a,{placement:E.a.DesktopLatestCommentsMiddle,idSuffix:n}))}}return null}(e.index)})))}!function(e){e[e.Comment=0]="Comment",e[e.Gap=1]="Gap",e[e.Ads=2]="Ads"}(_||(_={}))},VSBF:function(e,t,n){"use strict";var o=n("Czhu"),i=n("fGyu"),r=n("2h71"),c=n("DRLc"),a=n("JuBR"),u=n("njY1"),l=n("mrqE");function d(e){Object(l.a)(1,arguments);var t=Object(a.a)(e);return t.setHours(0,0,0,0),t}function s(e,t){Object(l.a)(2,arguments);var n=d(e),o=d(t),i=n.getTime()-Object(u.a)(n),r=o.getTime()-Object(u.a)(o);return Math.round((i-r)/864e5)}function f(e,t){var n=e.getFullYear()-t.getFullYear()||e.getMonth()-t.getMonth()||e.getDate()-t.getDate()||e.getHours()-t.getHours()||e.getMinutes()-t.getMinutes()||e.getSeconds()-t.getSeconds()||e.getMilliseconds()-t.getMilliseconds();return n<0?-1:n>0?1:n}function p(e,t){Object(l.a)(2,arguments);var n=Object(a.a)(e),o=Object(a.a)(t),i=f(n,o),r=Math.abs(s(n,o));n.setDate(n.getDate()-i*r);var c=f(n,o)===-i,u=i*(r-c);return 0===u?0:u}var m=n("CzDk"),b=n("it/K"),h=n("BK6N");function g(e,t){if(arguments.length<1)throw new TypeError("1 argument required, but only ".concat(arguments.length," present"));var n=Object(a.a)(e);if(!Object(b.a)(n))throw new RangeError("Invalid time value");var o=t||{},i=null==o.format?"extended":String(o.format),r=null==o.representation?"complete":String(o.representation);if("extended"!==i&&"basic"!==i)throw new RangeError("format must be 'extended' or 'basic'");if("date"!==r&&"time"!==r&&"complete"!==r)throw new RangeError("representation must be 'date', 'time', or 'complete'");var c="",u="",l="extended"===i?"-":"",d="extended"===i?":":"";if("time"!==r){var s=Object(h.a)(n.getDate(),2),f=Object(h.a)(n.getMonth()+1,2),p=Object(h.a)(n.getFullYear(),4);c="".concat(p).concat(l).concat(f).concat(l).concat(s)}if("date"!==r){var m=n.getTimezoneOffset();if(0!==m){var g=Math.abs(m),O=Object(h.a)(Math.floor(g/60),2),v=Object(h.a)(g%60,2),w=m<0?"+":"-";u="".concat(w).concat(O,":").concat(v)}else u="Z";var I=Object(h.a)(n.getHours(),2),j=Object(h.a)(n.getMinutes(),2),x=Object(h.a)(n.getSeconds(),2),C=""===c?"":"T",S=[I,j,x].join(d);c="".concat(c).concat(C).concat(S).concat(u)}return c}var O=n("N1LS");function v(e,t){Object(l.a)(2,arguments);var n=Object(a.a)(e),o=Object(O.a)(t);return isNaN(o)?new Date(NaN):o?(n.setDate(n.getDate()+o),n):n}var w=function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")};function I(e){var t,n=[],c=Object(r.a)(e);try{var a=function(){var e=t.value;n.push.apply(n,Object(i.a)((e.skus||[]).map((function(t){return Object(o.a)(Object(o.a)({},t),{},{price:e.price,onSaleSkuId:e.onSaleSkuId})}))))};for(c.s();!(t=c.n()).done;)a()}catch(u){c.e(u)}finally{c.f()}return n}var j=Object(c.a)({selectId:function(e){return e.postId},transform:function(e){return Object(o.a)(Object(o.a)({},e),{},{shipFeeList:e.shipFeeList.map((function(e){return Object(o.a)(Object(o.a)({},e),{},{readablePrice:e.maxPrice===e.minPrice?"$".concat(e.minPrice):"$".concat(e.minPrice," - $").concat(e.maxPrice)})})),url:"/goods/".concat(e.postId),duration:p(new Date(e.endAt),new Date)<=14?"".concat(Object(m.a)(new Date(e.endAt),"yyyy/MM/dd")," \u622a\u6b62"):"",readablePriceRange:e.priceInfo.low===e.priceInfo.high?"$".concat(w(e.priceInfo.low)):"$".concat(w(e.priceInfo.low)," - $").concat(w(e.priceInfo.high)),readableDeprecatedPrice:"$".concat(w(e.priceInfo.deprecated)),saleEndAt:g(v(new Date(e.startAt),1)),allSkus:I(e.products)})}});t.a=j},dAsy:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var o=n("VSBF").a.getSelectors((function(e){return e.haowuCampaign})).selectById,i=function(e,t){return o(e,t)}},vDEh:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var o=n("ERkP");function i(){var e=Object(o.useState)(!1),t=e[0],n=e[1],i=Object(o.useRef)(null),r=Object(o.useRef)((function(){n(!1)}));return Object(o.useEffect)((function(){function e(){n(!0)}function o(t){[32,33,34,35,36,38,40].includes(t.which)&&e()}return t||setTimeout((function(){return function(){var t;window.addEventListener("wheel",e),window.addEventListener("keydown",o),null===(t=i.current)||void 0===t||t.addEventListener("click",e)}()})),function(){var t;window.removeEventListener("wheel",e),window.removeEventListener("keydown",e),null===(t=i.current)||void 0===t||t.removeEventListener("click",e)}}),[t]),[t,r.current,i]}}}]);
