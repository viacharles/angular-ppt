_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[49],{"2VqO":function(e,t,n){var r=n("AuHH"),o=n("TcdR"),a=n("N+ot");e.exports=function(e){var t=o();return function(){var n,o=r(e);if(t){var i=r(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return a(this,n)}}},"5Yy7":function(e,t,n){var r=n("695J");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"7t6h":function(e,t,n){"use strict";n.r(t),n.d(t,"getCLS",(function(){return h})),n.d(t,"getFCP",(function(){return v})),n.d(t,"getFID",(function(){return g})),n.d(t,"getLCP",(function(){return _})),n.d(t,"getTTFB",(function(){return w}));var r,o,a=function(){return"".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12)},i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1;return{name:e,value:t,delta:0,entries:[],id:a(),isFinal:!1}},u=function(e,t){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){var n=new PerformanceObserver((function(e){return e.getEntries().map(t)}));return n.observe({type:e,buffered:!0}),n}}catch(e){}},c=!1,s=!1,l=function(e){c=!e.persisted},f=function(){addEventListener("pagehide",l),addEventListener("unload",(function(){}))},d=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];s||(f(),s=!0),addEventListener("visibilitychange",(function(t){var n=t.timeStamp;"hidden"===document.visibilityState&&e({timeStamp:n,isUnloading:c})}),{capture:!0,once:t})},p=function(e,t,n,r){var o;return function(){n&&t.isFinal&&n.disconnect(),t.value>=0&&(r||t.isFinal||"hidden"===document.visibilityState)&&(t.delta=t.value-(o||0),(t.delta||t.isFinal||void 0===o)&&(e(t),o=t.value))}},h=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=i("CLS",0),r=function(e){e.hadRecentInput||(n.value+=e.value,n.entries.push(e),a())},o=u("layout-shift",r),a=p(e,n,o,t);d((function(e){var t=e.isUnloading;o&&o.takeRecords().map(r),t&&(n.isFinal=!0),a()}))},m=function(){return void 0===r&&(r="hidden"===document.visibilityState?0:1/0,d((function(e){var t=e.timeStamp;return r=t}),!0)),{get timeStamp(){return r}}},v=function(e){var t=i("FCP"),n=m(),r=u("paint",(function(e){"first-contentful-paint"===e.name&&e.startTime<n.timeStamp&&(t.value=e.startTime,t.isFinal=!0,t.entries.push(e),o())})),o=p(e,t,r)},g=function(e){var t=i("FID"),n=m(),r=function(e){e.startTime<n.timeStamp&&(t.value=e.processingStart-e.startTime,t.entries.push(e),t.isFinal=!0,a())},o=u("first-input",r),a=p(e,t,o);d((function(){o&&(o.takeRecords().map(r),o.disconnect())}),!0),o||window.perfMetrics&&window.perfMetrics.onFirstInputDelay&&window.perfMetrics.onFirstInputDelay((function(e,r){r.timeStamp<n.timeStamp&&(t.value=e,t.isFinal=!0,t.entries=[{entryType:"first-input",name:r.type,target:r.target,cancelable:r.cancelable,startTime:r.timeStamp,processingStart:r.timeStamp+e}],a())}))},y=function(){return o||(o=new Promise((function(e){return["scroll","keydown","pointerdown"].map((function(t){addEventListener(t,e,{once:!0,passive:!0,capture:!0})}))}))),o},_=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=i("LCP"),r=m(),o=function(e){var t=e.startTime;t<r.timeStamp?(n.value=t,n.entries.push(e)):n.isFinal=!0,c()},a=u("largest-contentful-paint",o),c=p(e,n,a,t),s=function(){n.isFinal||(a&&a.takeRecords().map(o),n.isFinal=!0,c())};y().then(s),d(s,!0)},w=function(e){var t,n=i("TTFB");t=function(){try{var t=performance.getEntriesByType("navigation")[0]||function(){var e=performance.timing,t={entryType:"navigation",startTime:0};for(var n in e)"navigationStart"!==n&&"toJSON"!==n&&(t[n]=Math.max(e[n]-e.navigationStart,0));return t}();n.value=n.delta=t.responseStart,n.entries=[t],n.isFinal=!0,e(n)}catch(e){}},"complete"===document.readyState?setTimeout(t,0):addEventListener("pageshow",t)}},AuHH:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},J6CG:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n="/"===e?"/index":/^\/index(\/|$)/.test(e)?"/index".concat(e):"".concat(e);return n+t}},"N+ot":function(e,t,n){var r=n("T0aG"),o=n("1Pcy");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},"Om4/":function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e){return e.replace(/[/#?]/g,(function(e){return encodeURIComponent(e)}))}},YtVx:function(e,t,n){"use strict";var r=n("yWCo")(n("ioxi"));window.next=r,(0,r.default)().catch(console.error)},awAI:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var r=n("7t6h");t.default=function(e){(0,r.getCLS)(e),(0,r.getFID)(e),(0,r.getFCP)(e),(0,r.getLCP)(e),(0,r.getTTFB)(e)}},ioxi:function(e,t,n){"use strict";var r=n("VtSi"),o=n("cbiG"),a=n("VrFO"),i=n("Y9Ll"),u=n("5Yy7"),c=n("2VqO"),s=n("ddV6"),l=n("yWCo"),f=n("IGGJ");t.__esModule=!0,t.render=Z,t.renderError=te,t.default=t.emitter=t.router=t.version=void 0;var d=f(n("97Jx")),p=(f(n("yWCo")),f(n("ERkP"))),h=f(n("7nmT")),m=n("op+c"),v=f(n("YBsB")),g=n("wsRY"),y=n("L9lV"),_=n("Lko9"),w=l(n("FrRs")),S=l(n("0D0S")),E=n("fvxO"),b=f(n("jRQF")),x=l(n("vOaH")),P=f(n("awAI")),T=n("7xIC");"finally"in Promise.prototype||(Promise.prototype.finally=n("m9ql"));var C=JSON.parse(document.getElementById("__NEXT_DATA__").textContent);window.__NEXT_DATA__=C;t.version="9.5.3";var R=C.props,k=C.err,N=C.page,A=C.query,M=C.buildId,F=C.assetPrefix,I=C.runtimeConfig,L=C.dynamicIds,B=C.isFallback,D=F||"";n.p="".concat(D,"/_next/"),S.setConfig({serverRuntimeConfig:{},publicRuntimeConfig:I||{}});var O=(0,E.getURL)();(0,y.hasBasePath)(O)&&(O=(0,y.delBasePath)(O));var j=new x.default(M,D,N),q=function(e){var t=s(e,2),n=t[0],r=t[1];return j.registerPage(n,r)};window.__NEXT_P&&window.__NEXT_P.map((function(e){return setTimeout((function(){return q(e)}),0)})),window.__NEXT_P=[],window.__NEXT_P.push=q;var H,G,U,V,Y,J,W,X=(0,b.default)(),Q=document.getElementById("__next");t.router=U;var $=function(e){u(n,e);var t=c(n);function n(){return a(this,n),t.apply(this,arguments)}return i(n,[{key:"componentDidCatch",value:function(e,t){this.props.fn(e,t)}},{key:"componentDidMount",value:function(){this.scrollToHash(),U.isSsr&&(B||C.nextExport&&((0,_.isDynamicRoute)(U.pathname)||location.search)||R&&R.__N_SSG&&location.search)&&U.replace(U.pathname+"?"+String(w.assign(w.urlQueryToSearchParams(U.query),new URLSearchParams(location.search))),O,{_h:1,shallow:!B})}},{key:"componentDidUpdate",value:function(){this.scrollToHash()}},{key:"scrollToHash",value:function(){var e=location.hash;if(e=e&&e.substring(1)){var t=document.getElementById(e);t&&setTimeout((function(){return t.scrollIntoView()}),0)}}},{key:"render",value:function(){return this.props.children}}]),n}(p.default.Component),K=(0,v.default)();t.emitter=K;var z=function(){var e=o(r.mark((function e(){var n,o,a,i,u,c,s=arguments;return r.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.length>0&&void 0!==s[0]?s[0]:{},e.next=4,j.loadPage("/_app");case 4:return n=e.sent,o=n.page,a=n.mod,J=o,a&&a.reportWebVitals&&(W=function(e){var t,n=e.id,r=e.name,o=e.startTime,i=e.value,u=e.duration,c=e.entryType,s=e.entries,l="".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12);s&&s.length&&(t=s[0].startTime),a.reportWebVitals({id:n||l,name:r,startTime:o||t,value:null==i?u:i,label:"mark"===c||"measure"===c?"custom":"web-vital"})}),i=k,e.prev=10,e.next=14,j.loadPage(N);case 14:u=e.sent,V=u.page,Y=u.styleSheets,e.next=21;break;case 21:e.next=26;break;case 23:e.prev=23,e.t0=e.catch(10),i=e.t0;case 26:if(!window.__NEXT_PRELOADREADY){e.next=30;break}return e.next=30,window.__NEXT_PRELOADREADY(L);case 30:return t.router=U=(0,T.createRouter)(N,A,O,{initialProps:R,pageLoader:j,App:J,Component:V,initialStyleSheets:Y,wrapApp:ue,err:i,isFallback:Boolean(B),subscription:function(e,t){return Z({App:t,Component:e.Component,styleSheets:e.styleSheets,props:e.props,err:e.err})}}),Z(c={App:J,Component:V,styleSheets:Y,props:R,err:i}),e.abrupt("return",K);case 38:return e.abrupt("return",{emitter:K,render:Z,renderCtx:c});case 39:case"end":return e.stop()}}),e,null,[[10,23]])})));return function(){return e.apply(this,arguments)}}();function Z(e){return ee.apply(this,arguments)}function ee(){return(ee=o(r.mark((function e(t){return r.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.err){e.next=4;break}return e.next=3,te(t);case 3:return e.abrupt("return");case 4:return e.prev=4,e.next=7,ce(t);case 7:e.next=16;break;case 9:if(e.prev=9,e.t0=e.catch(4),!e.t0.cancelled){e.next=13;break}throw e.t0;case 13:return e.next=16,te((0,d.default)({},t,{err:e.t0}));case 16:case"end":return e.stop()}}),e,null,[[4,9]])})))).apply(this,arguments)}function te(e){var t=e.App,n=e.err;return console.error(n),j.loadPage("/_error").then((function(r){var o=r.page,a=r.styleSheets,i=ue(t),u={Component:o,AppTree:i,router:U,ctx:{err:n,pathname:N,query:A,asPath:O,AppTree:i}};return Promise.resolve(e.props?e.props:(0,E.loadGetInitialProps)(t,u)).then((function(t){return ce((0,d.default)({},e,{err:n,Component:o,styleSheets:a,props:t}))}))}))}t.default=z;var ne="function"===typeof h.default.hydrate;function re(){E.ST&&(performance.mark("afterHydrate"),performance.measure("Next.js-before-hydration","navigationStart","beforeRender"),performance.measure("Next.js-hydration","beforeRender","afterHydrate"),W&&performance.getEntriesByName("Next.js-hydration").forEach(W),ae())}function oe(){if(E.ST){performance.mark("afterRender");var e=performance.getEntriesByName("routeChange","mark");e.length&&(performance.measure("Next.js-route-change-to-render",e[0].name,"beforeRender"),performance.measure("Next.js-render","beforeRender","afterRender"),W&&(performance.getEntriesByName("Next.js-render").forEach(W),performance.getEntriesByName("Next.js-route-change-to-render").forEach(W)),ae(),["Next.js-route-change-to-render","Next.js-render"].forEach((function(e){return performance.clearMeasures(e)})))}}function ae(){["beforeRender","afterHydrate","afterRender","routeChange"].forEach((function(e){return performance.clearMarks(e)}))}function ie(e){var t=e.children;return p.default.createElement($,{fn:function(e){return te({App:J,err:e}).catch((function(e){return console.error("Error rendering page: ",e)}))}},p.default.createElement(g.RouterContext.Provider,{value:(0,T.makePublicRouterInstance)(U)},p.default.createElement(m.HeadManagerContext.Provider,{value:X},t)))}var ue=function(e){return function(t){var n=(0,d.default)({},t,{Component:V,err:k,router:U});return p.default.createElement(ie,null,p.default.createElement(e,n))}};function ce(e){var t=e.App,n=e.Component,r=e.props,o=e.err,a=e.styleSheets;n=n||H.Component,r=r||H.props;var i=(0,d.default)({},r,{Component:n,err:o,router:U});H=i;var u,c=!1,s=new Promise((function(e,t){G&&G(),u=function(){G=null,e()},G=function(){c=!0,G=null;var e=new Error("Cancel rendering route");e.cancelled=!0,t(e)}}));var l,f,m=p.default.createElement(se,{callback:function(){if(!ne&&!c){for(var e=new Set(a.map((function(e){return e.href}))),t=(0,x.looseToArray)(document.querySelectorAll("style[data-n-href]")),n=t.map((function(e){return e.getAttribute("data-n-href")})),r=0;r<n.length;++r)e.has(n[r])?t[r].removeAttribute("media"):t[r].setAttribute("media","x");var o=document.querySelector("noscript[data-n-css]");o&&a.forEach((function(e){var t=e.href,n=document.querySelector('style[data-n-href="'.concat(t,'"]'));n&&(o.parentNode.insertBefore(n,o.nextSibling),o=n)})),(0,x.looseToArray)(document.querySelectorAll("link[data-n-p]")).forEach((function(e){e.parentNode.removeChild(e)})),getComputedStyle(document.body,"height")}u()}},p.default.createElement(ie,null,p.default.createElement(t,i)));return function(){if(ne)return!1;var e=(0,x.looseToArray)(document.querySelectorAll("style[data-n-href]")),t=new Set(e.map((function(e){return e.getAttribute("data-n-href")})));a.forEach((function(e){var n=e.href,r=e.text;if(!t.has(n)){var o=document.createElement("style");o.setAttribute("data-n-href",n),o.setAttribute("media","x"),document.head.appendChild(o),o.appendChild(document.createTextNode(r))}}))}(),l=m,f=Q,E.ST&&performance.mark("beforeRender"),ne?(h.default.hydrate(l,f,re),ne=!1,W&&E.ST&&(0,P.default)(W)):h.default.render(l,f,oe),s}function se(e){var t=e.callback,n=e.children;return p.default.useLayoutEffect((function(){return t()}),[t]),n}},jRQF:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(){var e=null;return{mountedInstances:new Set,updateHead:function(t){var n=e=Promise.resolve().then((function(){if(n===e){e=null;var r={};t.forEach((function(e){var t=r[e.type]||[];t.push(e),r[e.type]=t}));var a=r.title?r.title[0]:null,i="";if(a){var u=a.props.children;i="string"===typeof u?u:u.join("")}i!==document.title&&(document.title=i),["meta","base","link","style","script"].forEach((function(e){!function(e,t){var n=document.getElementsByTagName("head")[0],r=n.querySelector("meta[name=next-head-count]");0;for(var a=Number(r.content),i=[],u=0,c=r.previousElementSibling;u<a;u++,c=c.previousElementSibling)c.tagName.toLowerCase()===e&&i.push(c);var s=t.map(o).filter((function(e){for(var t=0,n=i.length;t<n;t++){if(i[t].isEqualNode(e))return i.splice(t,1),!1}return!0}));i.forEach((function(e){return e.parentNode.removeChild(e)})),s.forEach((function(e){return n.insertBefore(e,r)})),r.content=(a-i.length+s.length).toString()}(e,r[e]||[])}))}}))}}};var r={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv"};function o(e){var t=e.type,n=e.props,o=document.createElement(t);for(var a in n)if(n.hasOwnProperty(a)&&"children"!==a&&"dangerouslySetInnerHTML"!==a&&void 0!==n[a]){var i=r[a]||a.toLowerCase();o.setAttribute(i,n[a])}var u=n.children,c=n.dangerouslySetInnerHTML;return c?o.innerHTML=c.__html||"":u&&(o.textContent="string"===typeof u?u:u.join("")),o}},m9ql:function(e,t){Promise.prototype.finally=function(e){if("function"!=typeof e)return this.then(e,e);var t=this.constructor||Promise;return this.then((function(n){return t.resolve(e()).then((function(){return n}))}),(function(n){return t.resolve(e()).then((function(){throw n}))}))}},"op+c":function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n("ERkP"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=o},vOaH:function(e,t,n){"use strict";var r=n("VrFO"),o=n("Y9Ll"),a=n("IGGJ");t.__esModule=!0,t.default=t.looseToArray=void 0;var i=a(n("YBsB")),u=n("L9lV"),c=a(n("Om4/")),s=a(n("J6CG")),l=n("Lko9"),f=n("3G4Q"),d=n("FrRs"),p=n("TBBy"),h=n("uChv"),m=function(e){return[].slice.call(e)};function v(e,t){try{return document.createElement("link").relList.supports(e)}catch(n){}}function g(e){return(0,u.markLoadingError)(new Error("Error loading ".concat(e)))}t.looseToArray=m;var y=v("preload")&&!v("prefetch")?"preload":"prefetch",_=v("preload")?"preload":y;document.createElement("script");function w(e){if("/"!==e[0])throw new Error('Route name should start with a "/", got "'.concat(e,'"'));return"/"===e?e:e.replace(/\/$/,"")}function S(e,t,n,r){return new Promise((function(o,a){r=document.createElement("link"),n&&(r.as=n),r.rel=t,r.crossOrigin=void 0,r.onload=o,r.onerror=a,r.href=e,document.head.appendChild(r)}))}var E=function(){function e(t,n,o){r(this,e),this.initialPage=void 0,this.buildId=void 0,this.assetPrefix=void 0,this.pageCache=void 0,this.pageRegisterEvents=void 0,this.loadingRoutes=void 0,this.promisedBuildManifest=void 0,this.promisedSsgManifest=void 0,this.promisedDevPagesManifest=void 0,this.initialPage=o,this.buildId=t,this.assetPrefix=n,this.pageCache={},this.pageRegisterEvents=(0,i.default)(),this.loadingRoutes={"/_app":!0},"/_error"!==o&&(this.loadingRoutes[o]=!0),this.promisedBuildManifest=new Promise((function(e){window.__BUILD_MANIFEST?e(window.__BUILD_MANIFEST):window.__BUILD_MANIFEST_CB=function(){e(window.__BUILD_MANIFEST)}})),this.promisedSsgManifest=new Promise((function(e){window.__SSG_MANIFEST?e(window.__SSG_MANIFEST):window.__SSG_MANIFEST_CB=function(){e(window.__SSG_MANIFEST)}}))}return o(e,[{key:"getPageList",value:function(){return this.promisedBuildManifest.then((function(e){return e.sortedPages}))}},{key:"getDependencies",value:function(e){var t=this;return this.promisedBuildManifest.then((function(n){return n[e]?n[e].map((function(e){return"".concat(t.assetPrefix,"/_next/").concat(encodeURI(e))})):Promise.reject(g(e))}))}},{key:"getDataHref",value:function(e,t,n){var r,o=this,a=(0,f.parseRelativeUrl)(e),i=a.pathname,m=a.searchParams,v=a.search,g=(0,d.searchParamsToUrlQuery)(m),y=(0,f.parseRelativeUrl)(t).pathname,_=w(i),S=function(e){var t=(0,s.default)(e,".json");return(0,u.addBasePath)("/_next/data/".concat(o.buildId).concat(t).concat(n?"":v))},E=(0,l.isDynamicRoute)(_);if(E){var b=(0,h.getRouteRegex)(_),x=b.groups,P=(0,p.getRouteMatcher)(b)(y)||g;r=_,Object.keys(x).every((function(e){var t=P[e]||"",n=x[e],o=n.repeat,a=n.optional,i="[".concat(o?"...":"").concat(e,"]");return a&&(i="".concat(t?"":"/","[").concat(i,"]")),o&&!Array.isArray(t)&&(t=[t]),(a||e in P)&&(r=r.replace(i,o?t.map(c.default).join("/"):(0,c.default)(t))||"/")}))||(r="")}return E?r&&S(r):S(_)}},{key:"prefetchData",value:function(e,t){var n=this,r=w((0,f.parseRelativeUrl)(e).pathname);return this.promisedSsgManifest.then((function(o,a){return o.has(r)&&(a=n.getDataHref(e,t,!0))&&!document.querySelector('link[rel="'.concat(y,'"][href^="').concat(a,'"]'))&&S(a,y,"fetch").catch((function(){}))}))}},{key:"loadPage",value:function(e){var t=this;return e=w(e),new Promise((function(n,r){var o=t.pageCache[e];if(o)"error"in o?r(o.error):n(o);else{var a=function o(a){t.pageRegisterEvents.off(e,o),delete t.loadingRoutes[e],"error"in a?r(a.error):n(a)};if(t.pageRegisterEvents.on(e,a),!t.loadingRoutes[e])t.loadingRoutes[e]=!0,t.getDependencies(e).then((function(e){var t=[];return e.forEach((function(e){e.endsWith(".js")&&!document.querySelector('script[src^="'.concat(e,'"]'))&&t.push(function(e){return new Promise((function(t,n){var r=document.createElement("script");r.crossOrigin=void 0,r.src=e,r.onload=t,r.onerror=function(){return n(g(e))},document.body.appendChild(r)}))}(e)),e.endsWith(".css")&&!document.querySelector('link[rel="'.concat(_,'"][href^="').concat(e,'"]'))&&S(e,_,"fetch").catch((function(){}))})),Promise.all(t)})).catch((function(n){t.pageCache[e]={error:n},a({error:n})}))}}))}},{key:"registerPage",value:function(e,t){var n=this;var r=e===this.initialPage;("/_app"===e?Promise.resolve([]):(r?Promise.resolve(m(document.querySelectorAll("link[data-n-p]")).map((function(e){return e.getAttribute("href")}))):this.getDependencies(e).then((function(e){return e.filter((function(e){return e.endsWith(".css")}))}))).then((function(e){return Promise.all(e.map((function(e){return t=e,fetch(t).then((function(e){if(!e.ok)throw g(t);return e.text().then((function(e){return{href:t,text:e}}))}));var t}))).catch((function(e){if(r)return m(document.styleSheets).filter((function(e){return e.ownerNode&&"LINK"===e.ownerNode.tagName&&e.ownerNode.hasAttribute("data-n-p")})).map((function(e){return{href:e.ownerNode.getAttribute("href"),text:m(e.cssRules).map((function(e){return e.cssText})).join("")}}));throw e}))}))).then((function(r){return function(r){try{var o=t(),a={page:o.default||o,mod:o,styleSheets:r};n.pageCache[e]=a,n.pageRegisterEvents.emit(e,a)}catch(i){n.pageCache[e]={error:i},n.pageRegisterEvents.emit(e,{error:i})}}(r)}),(function(t){n.pageCache[e]={error:t},n.pageRegisterEvents.emit(e,{error:t})}))}},{key:"prefetch",value:function(e,t){var n,r,o=this;if((n=navigator.connection)&&(n.saveData||/2g/.test(n.effectiveType)))return Promise.resolve();if(t)r=e;else;return Promise.all(document.querySelector('link[rel="'.concat(y,'"][href^="').concat(r,'"]'))?[]:[r&&S(r,y,r.endsWith(".css")?"fetch":"script"),!t&&this.getDependencies(e).then((function(e){return Promise.all(e.map((function(e){return o.prefetch(e,!0)})))}))]).then((function(){}),(function(){}))}}]),e}();t.default=E}},[["YtVx",1,2,0]]]);
