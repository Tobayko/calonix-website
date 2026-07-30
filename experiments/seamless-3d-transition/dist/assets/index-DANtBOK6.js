(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))a(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function n(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(l){if(l.ep)return;l.ep=!0;const c=n(l);fetch(l.href,c)}})();function eM(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Vh={exports:{}},$o={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Iv;function nM(){if(Iv)return $o;Iv=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(a,l,c){var u=null;if(c!==void 0&&(u=""+c),l.key!==void 0&&(u=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:r,type:a,key:u,ref:l!==void 0?l:null,props:c}}return $o.Fragment=t,$o.jsx=n,$o.jsxs=n,$o}var Fv;function iM(){return Fv||(Fv=1,Vh.exports=nM()),Vh.exports}var bt=iM(),kh={exports:{}},ge={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hv;function aM(){if(Hv)return ge;Hv=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),g=Symbol.iterator;function x(P){return P===null||typeof P!="object"?null:(P=g&&P[g]||P["@@iterator"],typeof P=="function"?P:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,M={};function S(P,Q,xt){this.props=P,this.context=Q,this.refs=M,this.updater=xt||E}S.prototype.isReactComponent={},S.prototype.setState=function(P,Q){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,Q,"setState")},S.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function B(){}B.prototype=S.prototype;function N(P,Q,xt){this.props=P,this.context=Q,this.refs=M,this.updater=xt||E}var A=N.prototype=new B;A.constructor=N,R(A,S.prototype),A.isPureReactComponent=!0;var z=Array.isArray;function O(){}var D={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function U(P,Q,xt){var Dt=xt.ref;return{$$typeof:r,type:P,key:Q,ref:Dt!==void 0?Dt:null,props:xt}}function V(P,Q){return U(P.type,Q,P.props)}function G(P){return typeof P=="object"&&P!==null&&P.$$typeof===r}function Z(P){var Q={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(xt){return Q[xt]})}var et=/\/+/g;function ft(P,Q){return typeof P=="object"&&P!==null&&P.key!=null?Z(""+P.key):Q.toString(36)}function Y(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(O,O):(P.status="pending",P.then(function(Q){P.status==="pending"&&(P.status="fulfilled",P.value=Q)},function(Q){P.status==="pending"&&(P.status="rejected",P.reason=Q)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function I(P,Q,xt,Dt,At){var K=typeof P;(K==="undefined"||K==="boolean")&&(P=null);var vt=!1;if(P===null)vt=!0;else switch(K){case"bigint":case"string":case"number":vt=!0;break;case"object":switch(P.$$typeof){case r:case t:vt=!0;break;case _:return vt=P._init,I(vt(P._payload),Q,xt,Dt,At)}}if(vt)return At=At(P),vt=Dt===""?"."+ft(P,0):Dt,z(At)?(xt="",vt!=null&&(xt=vt.replace(et,"$&/")+"/"),I(At,Q,xt,"",function(ie){return ie})):At!=null&&(G(At)&&(At=V(At,xt+(At.key==null||P&&P.key===At.key?"":(""+At.key).replace(et,"$&/")+"/")+vt)),Q.push(At)),1;vt=0;var yt=Dt===""?".":Dt+":";if(z(P))for(var Pt=0;Pt<P.length;Pt++)Dt=P[Pt],K=yt+ft(Dt,Pt),vt+=I(Dt,Q,xt,K,At);else if(Pt=x(P),typeof Pt=="function")for(P=Pt.call(P),Pt=0;!(Dt=P.next()).done;)Dt=Dt.value,K=yt+ft(Dt,Pt++),vt+=I(Dt,Q,xt,K,At);else if(K==="object"){if(typeof P.then=="function")return I(Y(P),Q,xt,Dt,At);throw Q=String(P),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.")}return vt}function F(P,Q,xt){if(P==null)return P;var Dt=[],At=0;return I(P,Dt,"","",function(K){return Q.call(xt,K,At++)}),Dt}function tt(P){if(P._status===-1){var Q=P._result;Q=Q(),Q.then(function(xt){(P._status===0||P._status===-1)&&(P._status=1,P._result=xt)},function(xt){(P._status===0||P._status===-1)&&(P._status=2,P._result=xt)}),P._status===-1&&(P._status=0,P._result=Q)}if(P._status===1)return P._result.default;throw P._result}var pt=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(Q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)},St={map:F,forEach:function(P,Q,xt){F(P,function(){Q.apply(this,arguments)},xt)},count:function(P){var Q=0;return F(P,function(){Q++}),Q},toArray:function(P){return F(P,function(Q){return Q})||[]},only:function(P){if(!G(P))throw Error("React.Children.only expected to receive a single React element child.");return P}};return ge.Activity=v,ge.Children=St,ge.Component=S,ge.Fragment=n,ge.Profiler=l,ge.PureComponent=N,ge.StrictMode=a,ge.Suspense=m,ge.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=D,ge.__COMPILER_RUNTIME={__proto__:null,c:function(P){return D.H.useMemoCache(P)}},ge.cache=function(P){return function(){return P.apply(null,arguments)}},ge.cacheSignal=function(){return null},ge.cloneElement=function(P,Q,xt){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var Dt=R({},P.props),At=P.key;if(Q!=null)for(K in Q.key!==void 0&&(At=""+Q.key),Q)!T.call(Q,K)||K==="key"||K==="__self"||K==="__source"||K==="ref"&&Q.ref===void 0||(Dt[K]=Q[K]);var K=arguments.length-2;if(K===1)Dt.children=xt;else if(1<K){for(var vt=Array(K),yt=0;yt<K;yt++)vt[yt]=arguments[yt+2];Dt.children=vt}return U(P.type,At,Dt)},ge.createContext=function(P){return P={$$typeof:u,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:c,_context:P},P},ge.createElement=function(P,Q,xt){var Dt,At={},K=null;if(Q!=null)for(Dt in Q.key!==void 0&&(K=""+Q.key),Q)T.call(Q,Dt)&&Dt!=="key"&&Dt!=="__self"&&Dt!=="__source"&&(At[Dt]=Q[Dt]);var vt=arguments.length-2;if(vt===1)At.children=xt;else if(1<vt){for(var yt=Array(vt),Pt=0;Pt<vt;Pt++)yt[Pt]=arguments[Pt+2];At.children=yt}if(P&&P.defaultProps)for(Dt in vt=P.defaultProps,vt)At[Dt]===void 0&&(At[Dt]=vt[Dt]);return U(P,K,At)},ge.createRef=function(){return{current:null}},ge.forwardRef=function(P){return{$$typeof:d,render:P}},ge.isValidElement=G,ge.lazy=function(P){return{$$typeof:_,_payload:{_status:-1,_result:P},_init:tt}},ge.memo=function(P,Q){return{$$typeof:p,type:P,compare:Q===void 0?null:Q}},ge.startTransition=function(P){var Q=D.T,xt={};D.T=xt;try{var Dt=P(),At=D.S;At!==null&&At(xt,Dt),typeof Dt=="object"&&Dt!==null&&typeof Dt.then=="function"&&Dt.then(O,pt)}catch(K){pt(K)}finally{Q!==null&&xt.types!==null&&(Q.types=xt.types),D.T=Q}},ge.unstable_useCacheRefresh=function(){return D.H.useCacheRefresh()},ge.use=function(P){return D.H.use(P)},ge.useActionState=function(P,Q,xt){return D.H.useActionState(P,Q,xt)},ge.useCallback=function(P,Q){return D.H.useCallback(P,Q)},ge.useContext=function(P){return D.H.useContext(P)},ge.useDebugValue=function(){},ge.useDeferredValue=function(P,Q){return D.H.useDeferredValue(P,Q)},ge.useEffect=function(P,Q){return D.H.useEffect(P,Q)},ge.useEffectEvent=function(P){return D.H.useEffectEvent(P)},ge.useId=function(){return D.H.useId()},ge.useImperativeHandle=function(P,Q,xt){return D.H.useImperativeHandle(P,Q,xt)},ge.useInsertionEffect=function(P,Q){return D.H.useInsertionEffect(P,Q)},ge.useLayoutEffect=function(P,Q){return D.H.useLayoutEffect(P,Q)},ge.useMemo=function(P,Q){return D.H.useMemo(P,Q)},ge.useOptimistic=function(P,Q){return D.H.useOptimistic(P,Q)},ge.useReducer=function(P,Q,xt){return D.H.useReducer(P,Q,xt)},ge.useRef=function(P){return D.H.useRef(P)},ge.useState=function(P){return D.H.useState(P)},ge.useSyncExternalStore=function(P,Q,xt){return D.H.useSyncExternalStore(P,Q,xt)},ge.useTransition=function(){return D.H.useTransition()},ge.version="19.2.0",ge}var Gv;function Dp(){return Gv||(Gv=1,kh.exports=aM()),kh.exports}var sn=Dp();const sM=eM(sn);var Xh={exports:{}},tl={},Wh={exports:{}},qh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vv;function rM(){return Vv||(Vv=1,(function(r){function t(I,F){var tt=I.length;I.push(F);t:for(;0<tt;){var pt=tt-1>>>1,St=I[pt];if(0<l(St,F))I[pt]=F,I[tt]=St,tt=pt;else break t}}function n(I){return I.length===0?null:I[0]}function a(I){if(I.length===0)return null;var F=I[0],tt=I.pop();if(tt!==F){I[0]=tt;t:for(var pt=0,St=I.length,P=St>>>1;pt<P;){var Q=2*(pt+1)-1,xt=I[Q],Dt=Q+1,At=I[Dt];if(0>l(xt,tt))Dt<St&&0>l(At,xt)?(I[pt]=At,I[Dt]=tt,pt=Dt):(I[pt]=xt,I[Q]=tt,pt=Q);else if(Dt<St&&0>l(At,tt))I[pt]=At,I[Dt]=tt,pt=Dt;else break t}}return F}function l(I,F){var tt=I.sortIndex-F.sortIndex;return tt!==0?tt:I.id-F.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var u=Date,d=u.now();r.unstable_now=function(){return u.now()-d}}var m=[],p=[],_=1,v=null,g=3,x=!1,E=!1,R=!1,M=!1,S=typeof setTimeout=="function"?setTimeout:null,B=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function A(I){for(var F=n(p);F!==null;){if(F.callback===null)a(p);else if(F.startTime<=I)a(p),F.sortIndex=F.expirationTime,t(m,F);else break;F=n(p)}}function z(I){if(R=!1,A(I),!E)if(n(m)!==null)E=!0,O||(O=!0,Z());else{var F=n(p);F!==null&&Y(z,F.startTime-I)}}var O=!1,D=-1,T=5,U=-1;function V(){return M?!0:!(r.unstable_now()-U<T)}function G(){if(M=!1,O){var I=r.unstable_now();U=I;var F=!0;try{t:{E=!1,R&&(R=!1,B(D),D=-1),x=!0;var tt=g;try{e:{for(A(I),v=n(m);v!==null&&!(v.expirationTime>I&&V());){var pt=v.callback;if(typeof pt=="function"){v.callback=null,g=v.priorityLevel;var St=pt(v.expirationTime<=I);if(I=r.unstable_now(),typeof St=="function"){v.callback=St,A(I),F=!0;break e}v===n(m)&&a(m),A(I)}else a(m);v=n(m)}if(v!==null)F=!0;else{var P=n(p);P!==null&&Y(z,P.startTime-I),F=!1}}break t}finally{v=null,g=tt,x=!1}F=void 0}}finally{F?Z():O=!1}}}var Z;if(typeof N=="function")Z=function(){N(G)};else if(typeof MessageChannel<"u"){var et=new MessageChannel,ft=et.port2;et.port1.onmessage=G,Z=function(){ft.postMessage(null)}}else Z=function(){S(G,0)};function Y(I,F){D=S(function(){I(r.unstable_now())},F)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(I){I.callback=null},r.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<I?Math.floor(1e3/I):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_next=function(I){switch(g){case 1:case 2:case 3:var F=3;break;default:F=g}var tt=g;g=F;try{return I()}finally{g=tt}},r.unstable_requestPaint=function(){M=!0},r.unstable_runWithPriority=function(I,F){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var tt=g;g=I;try{return F()}finally{g=tt}},r.unstable_scheduleCallback=function(I,F,tt){var pt=r.unstable_now();switch(typeof tt=="object"&&tt!==null?(tt=tt.delay,tt=typeof tt=="number"&&0<tt?pt+tt:pt):tt=pt,I){case 1:var St=-1;break;case 2:St=250;break;case 5:St=1073741823;break;case 4:St=1e4;break;default:St=5e3}return St=tt+St,I={id:_++,callback:F,priorityLevel:I,startTime:tt,expirationTime:St,sortIndex:-1},tt>pt?(I.sortIndex=tt,t(p,I),n(m)===null&&I===n(p)&&(R?(B(D),D=-1):R=!0,Y(z,tt-pt))):(I.sortIndex=St,t(m,I),E||x||(E=!0,O||(O=!0,Z()))),I},r.unstable_shouldYield=V,r.unstable_wrapCallback=function(I){var F=g;return function(){var tt=g;g=F;try{return I.apply(this,arguments)}finally{g=tt}}}})(qh)),qh}var kv;function oM(){return kv||(kv=1,Wh.exports=rM()),Wh.exports}var Yh={exports:{}},zn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xv;function lM(){if(Xv)return zn;Xv=1;var r=Dp();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,_){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:_}}var u=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return zn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,zn.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,_)},zn.flushSync=function(m){var p=u.T,_=a.p;try{if(u.T=null,a.p=2,m)return m()}finally{u.T=p,a.p=_,a.d.f()}},zn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,a.d.C(m,p))},zn.prefetchDNS=function(m){typeof m=="string"&&a.d.D(m)},zn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,v=d(_,p.crossOrigin),g=typeof p.integrity=="string"?p.integrity:void 0,x=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?a.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:g,fetchPriority:x}):_==="script"&&a.d.X(m,{crossOrigin:v,integrity:g,fetchPriority:x,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},zn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=d(p.as,p.crossOrigin);a.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&a.d.M(m)},zn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,v=d(_,p.crossOrigin);a.d.L(m,_,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},zn.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=d(p.as,p.crossOrigin);a.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else a.d.m(m)},zn.requestFormReset=function(m){a.d.r(m)},zn.unstable_batchedUpdates=function(m,p){return m(p)},zn.useFormState=function(m,p,_){return u.H.useFormState(m,p,_)},zn.useFormStatus=function(){return u.H.useHostTransitionStatus()},zn.version="19.2.0",zn}var Wv;function cM(){if(Wv)return Yh.exports;Wv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Yh.exports=lM(),Yh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qv;function uM(){if(qv)return tl;qv=1;var r=oM(),t=Dp(),n=cM();function a(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var i=e,s=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(s=i.return),e=i.return;while(e)}return i.tag===3?s:null}function u(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function d(e){if(e.tag===31){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(a(188))}function p(e){var i=e.alternate;if(!i){if(i=c(e),i===null)throw Error(a(188));return i!==e?null:e}for(var s=e,o=i;;){var f=s.return;if(f===null)break;var h=f.alternate;if(h===null){if(o=f.return,o!==null){s=o;continue}break}if(f.child===h.child){for(h=f.child;h;){if(h===s)return m(f),e;if(h===o)return m(f),i;h=h.sibling}throw Error(a(188))}if(s.return!==o.return)s=f,o=h;else{for(var y=!1,C=f.child;C;){if(C===s){y=!0,s=f,o=h;break}if(C===o){y=!0,o=f,s=h;break}C=C.sibling}if(!y){for(C=h.child;C;){if(C===s){y=!0,s=h,o=f;break}if(C===o){y=!0,o=h,s=f;break}C=C.sibling}if(!y)throw Error(a(189))}}if(s.alternate!==o)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?e:i}function _(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=_(e),i!==null)return i;e=e.sibling}return null}var v=Object.assign,g=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),B=Symbol.for("react.consumer"),N=Symbol.for("react.context"),A=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),O=Symbol.for("react.suspense_list"),D=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),V=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function Z(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var et=Symbol.for("react.client.reference");function ft(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===et?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case R:return"Fragment";case S:return"Profiler";case M:return"StrictMode";case z:return"Suspense";case O:return"SuspenseList";case U:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case N:return e.displayName||"Context";case B:return(e._context.displayName||"Context")+".Consumer";case A:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case D:return i=e.displayName||null,i!==null?i:ft(e.type)||"Memo";case T:i=e._payload,e=e._init;try{return ft(e(i))}catch{}}return null}var Y=Array.isArray,I=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,tt={pending:!1,data:null,method:null,action:null},pt=[],St=-1;function P(e){return{current:e}}function Q(e){0>St||(e.current=pt[St],pt[St]=null,St--)}function xt(e,i){St++,pt[St]=e.current,e.current=i}var Dt=P(null),At=P(null),K=P(null),vt=P(null);function yt(e,i){switch(xt(K,i),xt(At,e),xt(Dt,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?ov(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=ov(i),e=lv(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Q(Dt),xt(Dt,e)}function Pt(){Q(Dt),Q(At),Q(K)}function ie(e){e.memoizedState!==null&&xt(vt,e);var i=Dt.current,s=lv(i,e.type);i!==s&&(xt(At,e),xt(Dt,s))}function $t(e){At.current===e&&(Q(Dt),Q(At)),vt.current===e&&(Q(vt),Ko._currentValue=tt)}var be,oe;function Mt(e){if(be===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);be=i&&i[1]||"",oe=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+be+e+oe}var wt=!1;function Rt(e,i){if(!e||wt)return"";wt=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(i){var Et=function(){throw Error()};if(Object.defineProperty(Et.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Et,[])}catch(ut){var lt=ut}Reflect.construct(e,[],Et)}else{try{Et.call()}catch(ut){lt=ut}e.call(Et.prototype)}}else{try{throw Error()}catch(ut){lt=ut}(Et=e())&&typeof Et.catch=="function"&&Et.catch(function(){})}}catch(ut){if(ut&&lt&&typeof ut.stack=="string")return[ut.stack,lt.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),y=h[0],C=h[1];if(y&&C){var H=y.split(`
`),at=C.split(`
`);for(f=o=0;o<H.length&&!H[o].includes("DetermineComponentFrameRoot");)o++;for(;f<at.length&&!at[f].includes("DetermineComponentFrameRoot");)f++;if(o===H.length||f===at.length)for(o=H.length-1,f=at.length-1;1<=o&&0<=f&&H[o]!==at[f];)f--;for(;1<=o&&0<=f;o--,f--)if(H[o]!==at[f]){if(o!==1||f!==1)do if(o--,f--,0>f||H[o]!==at[f]){var mt=`
`+H[o].replace(" at new "," at ");return e.displayName&&mt.includes("<anonymous>")&&(mt=mt.replace("<anonymous>",e.displayName)),mt}while(1<=o&&0<=f);break}}}finally{wt=!1,Error.prepareStackTrace=s}return(s=e?e.displayName||e.name:"")?Mt(s):""}function Ht(e,i){switch(e.tag){case 26:case 27:case 5:return Mt(e.type);case 16:return Mt("Lazy");case 13:return e.child!==i&&i!==null?Mt("Suspense Fallback"):Mt("Suspense");case 19:return Mt("SuspenseList");case 0:case 15:return Rt(e.type,!1);case 11:return Rt(e.type.render,!1);case 1:return Rt(e.type,!0);case 31:return Mt("Activity");default:return""}}function Bt(e){try{var i="",s=null;do i+=Ht(e,s),s=e,e=e.return;while(e);return i}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var re=Object.prototype.hasOwnProperty,Jt=r.unstable_scheduleCallback,ue=r.unstable_cancelCallback,fe=r.unstable_shouldYield,X=r.unstable_requestPaint,me=r.unstable_now,_e=r.unstable_getCurrentPriorityLevel,L=r.unstable_ImmediatePriority,b=r.unstable_UserBlockingPriority,j=r.unstable_NormalPriority,nt=r.unstable_LowPriority,dt=r.unstable_IdlePriority,Ut=r.log,Ot=r.unstable_setDisableYieldValue,ht=null,ct=null;function Lt(e){if(typeof Ut=="function"&&Ot(e),ct&&typeof ct.setStrictMode=="function")try{ct.setStrictMode(ht,e)}catch{}}var Wt=Math.clz32?Math.clz32:te,Gt=Math.log,zt=Math.LN2;function te(e){return e>>>=0,e===0?32:31-(Gt(e)/zt|0)|0}var ae=256,pe=262144,q=4194304;function Nt(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function gt(e,i,s){var o=e.pendingLanes;if(o===0)return 0;var f=0,h=e.suspendedLanes,y=e.pingedLanes;e=e.warmLanes;var C=o&134217727;return C!==0?(o=C&~h,o!==0?f=Nt(o):(y&=C,y!==0?f=Nt(y):s||(s=C&~e,s!==0&&(f=Nt(s))))):(C=o&~h,C!==0?f=Nt(C):y!==0?f=Nt(y):s||(s=o&~e,s!==0&&(f=Nt(s)))),f===0?0:i!==0&&i!==f&&(i&h)===0&&(h=f&-f,s=i&-i,h>=s||h===32&&(s&4194048)!==0)?i:f}function Ct(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function Xt(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Tt(){var e=q;return q<<=1,(q&62914560)===0&&(q=4194304),e}function ee(e){for(var i=[],s=0;31>s;s++)i.push(e);return i}function Zt(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function tn(e,i,s,o,f,h){var y=e.pendingLanes;e.pendingLanes=s,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=s,e.entangledLanes&=s,e.errorRecoveryDisabledLanes&=s,e.shellSuspendCounter=0;var C=e.entanglements,H=e.expirationTimes,at=e.hiddenUpdates;for(s=y&~s;0<s;){var mt=31-Wt(s),Et=1<<mt;C[mt]=0,H[mt]=-1;var lt=at[mt];if(lt!==null)for(at[mt]=null,mt=0;mt<lt.length;mt++){var ut=lt[mt];ut!==null&&(ut.lane&=-536870913)}s&=~Et}o!==0&&Fe(e,o,0),h!==0&&f===0&&e.tag!==0&&(e.suspendedLanes|=h&~(y&~i))}function Fe(e,i,s){e.pendingLanes|=i,e.suspendedLanes&=~i;var o=31-Wt(i);e.entangledLanes|=i,e.entanglements[o]=e.entanglements[o]|1073741824|s&261930}function ni(e,i){var s=e.entangledLanes|=i;for(e=e.entanglements;s;){var o=31-Wt(s),f=1<<o;f&i|e[o]&i&&(e[o]|=i),s&=~f}}function ii(e,i){var s=i&-i;return s=(s&42)!==0?1:lo(s),(s&(e.suspendedLanes|i))!==0?0:s}function lo(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function co(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function uo(){var e=F.p;return e!==0?e:(e=window.event,e===void 0?32:Uv(e.type))}function er(e,i){var s=F.p;try{return F.p=e,i()}finally{F.p=s}}var Gi=Math.random().toString(36).slice(2),dn="__reactFiber$"+Gi,wn="__reactProps$"+Gi,Zn="__reactContainer$"+Gi,ys="__reactEvents$"+Gi,wl="__reactListeners$"+Gi,Cl="__reactHandles$"+Gi,Ms="__reactResources$"+Gi,Pa="__reactMarker$"+Gi;function za(e){delete e[dn],delete e[wn],delete e[ys],delete e[wl],delete e[Cl]}function sa(e){var i=e[dn];if(i)return i;for(var s=e.parentNode;s;){if(i=s[Zn]||s[dn]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(e=mv(e);e!==null;){if(s=e[dn])return s;e=mv(e)}return i}e=s,s=e.parentNode}return null}function ra(e){if(e=e[dn]||e[Zn]){var i=e.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return e}return null}function Es(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(a(33))}function Ba(e){var i=e[Ms];return i||(i=e[Ms]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function pn(e){e[Pa]=!0}var Dl=new Set,w={};function J(e,i){ot(e,i),ot(e+"Capture",i)}function ot(e,i){for(w[e]=i,e=0;e<i.length;e++)Dl.add(i[e])}var st=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),rt={},Vt={};function Yt(e){return re.call(Vt,e)?!0:re.call(rt,e)?!1:st.test(e)?Vt[e]=!0:(rt[e]=!0,!1)}function It(e,i,s){if(Yt(i))if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var o=i.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+s)}}function Qt(e,i,s){if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+s)}}function Kt(e,i,s,o){if(o===null)e.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttributeNS(i,s,""+o)}}function le(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function xe(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function se(e,i,s){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,i);if(!e.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,h=o.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return f.call(this)},set:function(y){s=""+y,h.call(this,y)}}),Object.defineProperty(e,i,{enumerable:o.enumerable}),{getValue:function(){return s},setValue:function(y){s=""+y},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function Oe(e){if(!e._valueTracker){var i=xe(e)?"checked":"value";e._valueTracker=se(e,i,""+e[i])}}function en(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var s=i.getValue(),o="";return e&&(o=xe(e)?e.checked?"true":"false":e.value),e=o,e!==s?(i.setValue(e),!0):!1}function Ke(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var He=/[\n"\\]/g;function Ge(e){return e.replace(He,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function qt(e,i,s,o,f,h,y,C){e.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.type=y:e.removeAttribute("type"),i!=null?y==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+le(i)):e.value!==""+le(i)&&(e.value=""+le(i)):y!=="submit"&&y!=="reset"||e.removeAttribute("value"),i!=null?Ae(e,y,le(i)):s!=null?Ae(e,y,le(s)):o!=null&&e.removeAttribute("value"),f==null&&h!=null&&(e.defaultChecked=!!h),f!=null&&(e.checked=f&&typeof f!="function"&&typeof f!="symbol"),C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"?e.name=""+le(C):e.removeAttribute("name")}function Pn(e,i,s,o,f,h,y,C){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.type=h),i!=null||s!=null){if(!(h!=="submit"&&h!=="reset"||i!=null)){Oe(e);return}s=s!=null?""+le(s):"",i=i!=null?""+le(i):s,C||i===e.value||(e.value=i),e.defaultValue=i}o=o??f,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=C?e.checked:!!o,e.defaultChecked=!!o,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(e.name=y),Oe(e)}function Ae(e,i,s){i==="number"&&Ke(e.ownerDocument)===e||e.defaultValue===""+s||(e.defaultValue=""+s)}function Sn(e,i,s,o){if(e=e.options,i){i={};for(var f=0;f<s.length;f++)i["$"+s[f]]=!0;for(s=0;s<e.length;s++)f=i.hasOwnProperty("$"+e[s].value),e[s].selected!==f&&(e[s].selected=f),f&&o&&(e[s].defaultSelected=!0)}else{for(s=""+le(s),i=null,f=0;f<e.length;f++){if(e[f].value===s){e[f].selected=!0,o&&(e[f].defaultSelected=!0);return}i!==null||e[f].disabled||(i=e[f])}i!==null&&(i.selected=!0)}}function ai(e,i,s){if(i!=null&&(i=""+le(i),i!==e.value&&(e.value=i),s==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=s!=null?""+le(s):""}function Ci(e,i,s,o){if(i==null){if(o!=null){if(s!=null)throw Error(a(92));if(Y(o)){if(1<o.length)throw Error(a(93));o=o[0]}s=o}s==null&&(s=""),i=s}s=le(i),e.defaultValue=s,o=e.textContent,o===s&&o!==""&&o!==null&&(e.value=o),Oe(e)}function si(e,i){if(i){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=i;return}}e.textContent=i}var Ve=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function nn(e,i,s){var o=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?o?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":o?e.setProperty(i,s):typeof s!="number"||s===0||Ve.has(i)?i==="float"?e.cssFloat=s:e[i]=(""+s).trim():e[i]=s+"px"}function Di(e,i,s){if(i!=null&&typeof i!="object")throw Error(a(62));if(e=e.style,s!=null){for(var o in s)!s.hasOwnProperty(o)||i!=null&&i.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var f in i)o=i[f],i.hasOwnProperty(f)&&s[f]!==o&&nn(e,f,o)}else for(var h in i)i.hasOwnProperty(h)&&nn(e,h,i[h])}function Ie(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ia=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function bs(e){return Ia.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function oa(){}var Iu=null;function Fu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var nr=null,ir=null;function rm(e){var i=ra(e);if(i&&(e=i.stateNode)){var s=e[wn]||null;t:switch(e=i.stateNode,i.type){case"input":if(qt(e,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+Ge(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var o=s[i];if(o!==e&&o.form===e.form){var f=o[wn]||null;if(!f)throw Error(a(90));qt(o,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(i=0;i<s.length;i++)o=s[i],o.form===e.form&&en(o)}break t;case"textarea":ai(e,s.value,s.defaultValue);break t;case"select":i=s.value,i!=null&&Sn(e,!!s.multiple,i,!1)}}}var Hu=!1;function om(e,i,s){if(Hu)return e(i,s);Hu=!0;try{var o=e(i);return o}finally{if(Hu=!1,(nr!==null||ir!==null)&&(vc(),nr&&(i=nr,e=ir,ir=nr=null,rm(i),e)))for(i=0;i<e.length;i++)rm(e[i])}}function fo(e,i){var s=e.stateNode;if(s===null)return null;var o=s[wn]||null;if(o===null)return null;s=o[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(a(231,i,typeof s));return s}var la=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gu=!1;if(la)try{var ho={};Object.defineProperty(ho,"passive",{get:function(){Gu=!0}}),window.addEventListener("test",ho,ho),window.removeEventListener("test",ho,ho)}catch{Gu=!1}var Fa=null,Vu=null,Ul=null;function lm(){if(Ul)return Ul;var e,i=Vu,s=i.length,o,f="value"in Fa?Fa.value:Fa.textContent,h=f.length;for(e=0;e<s&&i[e]===f[e];e++);var y=s-e;for(o=1;o<=y&&i[s-o]===f[h-o];o++);return Ul=f.slice(e,1<o?1-o:void 0)}function Nl(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function Ll(){return!0}function cm(){return!1}function Kn(e){function i(s,o,f,h,y){this._reactName=s,this._targetInst=f,this.type=o,this.nativeEvent=h,this.target=y,this.currentTarget=null;for(var C in e)e.hasOwnProperty(C)&&(s=e[C],this[C]=s?s(h):h[C]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Ll:cm,this.isPropagationStopped=cm,this}return v(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Ll)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Ll)},persist:function(){},isPersistent:Ll}),i}var Ts={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ol=Kn(Ts),po=v({},Ts,{view:0,detail:0}),$x=Kn(po),ku,Xu,mo,Pl=v({},po,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==mo&&(mo&&e.type==="mousemove"?(ku=e.screenX-mo.screenX,Xu=e.screenY-mo.screenY):Xu=ku=0,mo=e),ku)},movementY:function(e){return"movementY"in e?e.movementY:Xu}}),um=Kn(Pl),tS=v({},Pl,{dataTransfer:0}),eS=Kn(tS),nS=v({},po,{relatedTarget:0}),Wu=Kn(nS),iS=v({},Ts,{animationName:0,elapsedTime:0,pseudoElement:0}),aS=Kn(iS),sS=v({},Ts,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),rS=Kn(sS),oS=v({},Ts,{data:0}),fm=Kn(oS),lS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},uS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fS(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=uS[e])?!!i[e]:!1}function qu(){return fS}var hS=v({},po,{key:function(e){if(e.key){var i=lS[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=Nl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?cS[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qu,charCode:function(e){return e.type==="keypress"?Nl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Nl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),dS=Kn(hS),pS=v({},Pl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hm=Kn(pS),mS=v({},po,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qu}),gS=Kn(mS),vS=v({},Ts,{propertyName:0,elapsedTime:0,pseudoElement:0}),_S=Kn(vS),xS=v({},Pl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),SS=Kn(xS),yS=v({},Ts,{newState:0,oldState:0}),MS=Kn(yS),ES=[9,13,27,32],Yu=la&&"CompositionEvent"in window,go=null;la&&"documentMode"in document&&(go=document.documentMode);var bS=la&&"TextEvent"in window&&!go,dm=la&&(!Yu||go&&8<go&&11>=go),pm=" ",mm=!1;function gm(e,i){switch(e){case"keyup":return ES.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ar=!1;function TS(e,i){switch(e){case"compositionend":return vm(i);case"keypress":return i.which!==32?null:(mm=!0,pm);case"textInput":return e=i.data,e===pm&&mm?null:e;default:return null}}function AS(e,i){if(ar)return e==="compositionend"||!Yu&&gm(e,i)?(e=lm(),Ul=Vu=Fa=null,ar=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return dm&&i.locale!=="ko"?null:i.data;default:return null}}var RS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _m(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!RS[e.type]:i==="textarea"}function xm(e,i,s,o){nr?ir?ir.push(o):ir=[o]:nr=o,i=bc(i,"onChange"),0<i.length&&(s=new Ol("onChange","change",null,s,o),e.push({event:s,listeners:i}))}var vo=null,_o=null;function wS(e){ev(e,0)}function zl(e){var i=Es(e);if(en(i))return e}function Sm(e,i){if(e==="change")return i}var ym=!1;if(la){var Zu;if(la){var Ku="oninput"in document;if(!Ku){var Mm=document.createElement("div");Mm.setAttribute("oninput","return;"),Ku=typeof Mm.oninput=="function"}Zu=Ku}else Zu=!1;ym=Zu&&(!document.documentMode||9<document.documentMode)}function Em(){vo&&(vo.detachEvent("onpropertychange",bm),_o=vo=null)}function bm(e){if(e.propertyName==="value"&&zl(_o)){var i=[];xm(i,_o,e,Fu(e)),om(wS,i)}}function CS(e,i,s){e==="focusin"?(Em(),vo=i,_o=s,vo.attachEvent("onpropertychange",bm)):e==="focusout"&&Em()}function DS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return zl(_o)}function US(e,i){if(e==="click")return zl(i)}function NS(e,i){if(e==="input"||e==="change")return zl(i)}function LS(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var ri=typeof Object.is=="function"?Object.is:LS;function xo(e,i){if(ri(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var s=Object.keys(e),o=Object.keys(i);if(s.length!==o.length)return!1;for(o=0;o<s.length;o++){var f=s[o];if(!re.call(i,f)||!ri(e[f],i[f]))return!1}return!0}function Tm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Am(e,i){var s=Tm(e);e=0;for(var o;s;){if(s.nodeType===3){if(o=e+s.textContent.length,e<=i&&o>=i)return{node:s,offset:i-e};e=o}t:{for(;s;){if(s.nextSibling){s=s.nextSibling;break t}s=s.parentNode}s=void 0}s=Tm(s)}}function Rm(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?Rm(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function wm(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=Ke(e.document);i instanceof e.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)e=i.contentWindow;else break;i=Ke(e.document)}return i}function Ju(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var OS=la&&"documentMode"in document&&11>=document.documentMode,sr=null,Qu=null,So=null,ju=!1;function Cm(e,i,s){var o=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;ju||sr==null||sr!==Ke(o)||(o=sr,"selectionStart"in o&&Ju(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),So&&xo(So,o)||(So=o,o=bc(Qu,"onSelect"),0<o.length&&(i=new Ol("onSelect","select",null,i,s),e.push({event:i,listeners:o}),i.target=sr)))}function As(e,i){var s={};return s[e.toLowerCase()]=i.toLowerCase(),s["Webkit"+e]="webkit"+i,s["Moz"+e]="moz"+i,s}var rr={animationend:As("Animation","AnimationEnd"),animationiteration:As("Animation","AnimationIteration"),animationstart:As("Animation","AnimationStart"),transitionrun:As("Transition","TransitionRun"),transitionstart:As("Transition","TransitionStart"),transitioncancel:As("Transition","TransitionCancel"),transitionend:As("Transition","TransitionEnd")},$u={},Dm={};la&&(Dm=document.createElement("div").style,"AnimationEvent"in window||(delete rr.animationend.animation,delete rr.animationiteration.animation,delete rr.animationstart.animation),"TransitionEvent"in window||delete rr.transitionend.transition);function Rs(e){if($u[e])return $u[e];if(!rr[e])return e;var i=rr[e],s;for(s in i)if(i.hasOwnProperty(s)&&s in Dm)return $u[e]=i[s];return e}var Um=Rs("animationend"),Nm=Rs("animationiteration"),Lm=Rs("animationstart"),PS=Rs("transitionrun"),zS=Rs("transitionstart"),BS=Rs("transitioncancel"),Om=Rs("transitionend"),Pm=new Map,tf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");tf.push("scrollEnd");function Ui(e,i){Pm.set(e,i),J(i,[e])}var Bl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},_i=[],or=0,ef=0;function Il(){for(var e=or,i=ef=or=0;i<e;){var s=_i[i];_i[i++]=null;var o=_i[i];_i[i++]=null;var f=_i[i];_i[i++]=null;var h=_i[i];if(_i[i++]=null,o!==null&&f!==null){var y=o.pending;y===null?f.next=f:(f.next=y.next,y.next=f),o.pending=f}h!==0&&zm(s,f,h)}}function Fl(e,i,s,o){_i[or++]=e,_i[or++]=i,_i[or++]=s,_i[or++]=o,ef|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function nf(e,i,s,o){return Fl(e,i,s,o),Hl(e)}function ws(e,i){return Fl(e,null,null,i),Hl(e)}function zm(e,i,s){e.lanes|=s;var o=e.alternate;o!==null&&(o.lanes|=s);for(var f=!1,h=e.return;h!==null;)h.childLanes|=s,o=h.alternate,o!==null&&(o.childLanes|=s),h.tag===22&&(e=h.stateNode,e===null||e._visibility&1||(f=!0)),e=h,h=h.return;return e.tag===3?(h=e.stateNode,f&&i!==null&&(f=31-Wt(s),e=h.hiddenUpdates,o=e[f],o===null?e[f]=[i]:o.push(i),i.lane=s|536870912),h):null}function Hl(e){if(50<Vo)throw Vo=0,hh=null,Error(a(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var lr={};function IS(e,i,s,o){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function oi(e,i,s,o){return new IS(e,i,s,o)}function af(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ca(e,i){var s=e.alternate;return s===null?(s=oi(e.tag,i,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=i,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&65011712,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,i=e.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s.refCleanup=e.refCleanup,s}function Bm(e,i){e.flags&=65011714;var s=e.alternate;return s===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=s.childLanes,e.lanes=s.lanes,e.child=s.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=s.memoizedProps,e.memoizedState=s.memoizedState,e.updateQueue=s.updateQueue,e.type=s.type,i=s.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function Gl(e,i,s,o,f,h){var y=0;if(o=e,typeof e=="function")af(e)&&(y=1);else if(typeof e=="string")y=ky(e,s,Dt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case U:return e=oi(31,s,i,f),e.elementType=U,e.lanes=h,e;case R:return Cs(s.children,f,h,i);case M:y=8,f|=24;break;case S:return e=oi(12,s,i,f|2),e.elementType=S,e.lanes=h,e;case z:return e=oi(13,s,i,f),e.elementType=z,e.lanes=h,e;case O:return e=oi(19,s,i,f),e.elementType=O,e.lanes=h,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case N:y=10;break t;case B:y=9;break t;case A:y=11;break t;case D:y=14;break t;case T:y=16,o=null;break t}y=29,s=Error(a(130,e===null?"null":typeof e,"")),o=null}return i=oi(y,s,i,f),i.elementType=e,i.type=o,i.lanes=h,i}function Cs(e,i,s,o){return e=oi(7,e,o,i),e.lanes=s,e}function sf(e,i,s){return e=oi(6,e,null,i),e.lanes=s,e}function Im(e){var i=oi(18,null,null,0);return i.stateNode=e,i}function rf(e,i,s){return i=oi(4,e.children!==null?e.children:[],e.key,i),i.lanes=s,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var Fm=new WeakMap;function xi(e,i){if(typeof e=="object"&&e!==null){var s=Fm.get(e);return s!==void 0?s:(i={value:e,source:i,stack:Bt(i)},Fm.set(e,i),i)}return{value:e,source:i,stack:Bt(i)}}var cr=[],ur=0,Vl=null,yo=0,Si=[],yi=0,Ha=null,ki=1,Xi="";function ua(e,i){cr[ur++]=yo,cr[ur++]=Vl,Vl=e,yo=i}function Hm(e,i,s){Si[yi++]=ki,Si[yi++]=Xi,Si[yi++]=Ha,Ha=e;var o=ki;e=Xi;var f=32-Wt(o)-1;o&=~(1<<f),s+=1;var h=32-Wt(i)+f;if(30<h){var y=f-f%5;h=(o&(1<<y)-1).toString(32),o>>=y,f-=y,ki=1<<32-Wt(i)+f|s<<f|o,Xi=h+e}else ki=1<<h|s<<f|o,Xi=e}function of(e){e.return!==null&&(ua(e,1),Hm(e,1,0))}function lf(e){for(;e===Vl;)Vl=cr[--ur],cr[ur]=null,yo=cr[--ur],cr[ur]=null;for(;e===Ha;)Ha=Si[--yi],Si[yi]=null,Xi=Si[--yi],Si[yi]=null,ki=Si[--yi],Si[yi]=null}function Gm(e,i){Si[yi++]=ki,Si[yi++]=Xi,Si[yi++]=Ha,ki=i.id,Xi=i.overflow,Ha=e}var Cn=null,Qe=null,Ue=!1,Ga=null,Mi=!1,cf=Error(a(519));function Va(e){var i=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Mo(xi(i,e)),cf}function Vm(e){var i=e.stateNode,s=e.type,o=e.memoizedProps;switch(i[dn]=e,i[wn]=o,s){case"dialog":we("cancel",i),we("close",i);break;case"iframe":case"object":case"embed":we("load",i);break;case"video":case"audio":for(s=0;s<Xo.length;s++)we(Xo[s],i);break;case"source":we("error",i);break;case"img":case"image":case"link":we("error",i),we("load",i);break;case"details":we("toggle",i);break;case"input":we("invalid",i),Pn(i,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":we("invalid",i);break;case"textarea":we("invalid",i),Ci(i,o.value,o.defaultValue,o.children)}s=o.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||o.suppressHydrationWarning===!0||sv(i.textContent,s)?(o.popover!=null&&(we("beforetoggle",i),we("toggle",i)),o.onScroll!=null&&we("scroll",i),o.onScrollEnd!=null&&we("scrollend",i),o.onClick!=null&&(i.onclick=oa),i=!0):i=!1,i||Va(e,!0)}function km(e){for(Cn=e.return;Cn;)switch(Cn.tag){case 5:case 31:case 13:Mi=!1;return;case 27:case 3:Mi=!0;return;default:Cn=Cn.return}}function fr(e){if(e!==Cn)return!1;if(!Ue)return km(e),Ue=!0,!1;var i=e.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=e.type,s=!(s!=="form"&&s!=="button")||Rh(e.type,e.memoizedProps)),s=!s),s&&Qe&&Va(e),km(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));Qe=pv(e)}else if(i===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));Qe=pv(e)}else i===27?(i=Qe,ns(e.type)?(e=Nh,Nh=null,Qe=e):Qe=i):Qe=Cn?bi(e.stateNode.nextSibling):null;return!0}function Ds(){Qe=Cn=null,Ue=!1}function uf(){var e=Ga;return e!==null&&($n===null?$n=e:$n.push.apply($n,e),Ga=null),e}function Mo(e){Ga===null?Ga=[e]:Ga.push(e)}var ff=P(null),Us=null,fa=null;function ka(e,i,s){xt(ff,i._currentValue),i._currentValue=s}function ha(e){e._currentValue=ff.current,Q(ff)}function hf(e,i,s){for(;e!==null;){var o=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,o!==null&&(o.childLanes|=i)):o!==null&&(o.childLanes&i)!==i&&(o.childLanes|=i),e===s)break;e=e.return}}function df(e,i,s,o){var f=e.child;for(f!==null&&(f.return=e);f!==null;){var h=f.dependencies;if(h!==null){var y=f.child;h=h.firstContext;t:for(;h!==null;){var C=h;h=f;for(var H=0;H<i.length;H++)if(C.context===i[H]){h.lanes|=s,C=h.alternate,C!==null&&(C.lanes|=s),hf(h.return,s,e),o||(y=null);break t}h=C.next}}else if(f.tag===18){if(y=f.return,y===null)throw Error(a(341));y.lanes|=s,h=y.alternate,h!==null&&(h.lanes|=s),hf(y,s,e),y=null}else y=f.child;if(y!==null)y.return=f;else for(y=f;y!==null;){if(y===e){y=null;break}if(f=y.sibling,f!==null){f.return=y.return,y=f;break}y=y.return}f=y}}function hr(e,i,s,o){e=null;for(var f=i,h=!1;f!==null;){if(!h){if((f.flags&524288)!==0)h=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var y=f.alternate;if(y===null)throw Error(a(387));if(y=y.memoizedProps,y!==null){var C=f.type;ri(f.pendingProps.value,y.value)||(e!==null?e.push(C):e=[C])}}else if(f===vt.current){if(y=f.alternate,y===null)throw Error(a(387));y.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(e!==null?e.push(Ko):e=[Ko])}f=f.return}e!==null&&df(i,e,s,o),i.flags|=262144}function kl(e){for(e=e.firstContext;e!==null;){if(!ri(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ns(e){Us=e,fa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Dn(e){return Xm(Us,e)}function Xl(e,i){return Us===null&&Ns(e),Xm(e,i)}function Xm(e,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},fa===null){if(e===null)throw Error(a(308));fa=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else fa=fa.next=i;return s}var FS=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(s,o){e.push(o)}};this.abort=function(){i.aborted=!0,e.forEach(function(s){return s()})}},HS=r.unstable_scheduleCallback,GS=r.unstable_NormalPriority,mn={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function pf(){return{controller:new FS,data:new Map,refCount:0}}function Eo(e){e.refCount--,e.refCount===0&&HS(GS,function(){e.controller.abort()})}var bo=null,mf=0,dr=0,pr=null;function VS(e,i){if(bo===null){var s=bo=[];mf=0,dr=_h(),pr={status:"pending",value:void 0,then:function(o){s.push(o)}}}return mf++,i.then(Wm,Wm),i}function Wm(){if(--mf===0&&bo!==null){pr!==null&&(pr.status="fulfilled");var e=bo;bo=null,dr=0,pr=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function kS(e,i){var s=[],o={status:"pending",value:null,reason:null,then:function(f){s.push(f)}};return e.then(function(){o.status="fulfilled",o.value=i;for(var f=0;f<s.length;f++)(0,s[f])(i)},function(f){for(o.status="rejected",o.reason=f,f=0;f<s.length;f++)(0,s[f])(void 0)}),o}var qm=I.S;I.S=function(e,i){Cg=me(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&VS(e,i),qm!==null&&qm(e,i)};var Ls=P(null);function gf(){var e=Ls.current;return e!==null?e:Je.pooledCache}function Wl(e,i){i===null?xt(Ls,Ls.current):xt(Ls,i.pool)}function Ym(){var e=gf();return e===null?null:{parent:mn._currentValue,pool:e}}var mr=Error(a(460)),vf=Error(a(474)),ql=Error(a(542)),Yl={then:function(){}};function Zm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Km(e,i,s){switch(s=e[s],s===void 0?e.push(i):s!==i&&(i.then(oa,oa),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,Qm(e),e;default:if(typeof i.status=="string")i.then(oa,oa);else{if(e=Je,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=i,e.status="pending",e.then(function(o){if(i.status==="pending"){var f=i;f.status="fulfilled",f.value=o}},function(o){if(i.status==="pending"){var f=i;f.status="rejected",f.reason=o}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,Qm(e),e}throw Ps=i,mr}}function Os(e){try{var i=e._init;return i(e._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(Ps=s,mr):s}}var Ps=null;function Jm(){if(Ps===null)throw Error(a(459));var e=Ps;return Ps=null,e}function Qm(e){if(e===mr||e===ql)throw Error(a(483))}var gr=null,To=0;function Zl(e){var i=To;return To+=1,gr===null&&(gr=[]),Km(gr,e,i)}function Ao(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function Kl(e,i){throw i.$$typeof===g?Error(a(525)):(e=Object.prototype.toString.call(i),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function jm(e){function i($,W){if(e){var it=$.deletions;it===null?($.deletions=[W],$.flags|=16):it.push(W)}}function s($,W){if(!e)return null;for(;W!==null;)i($,W),W=W.sibling;return null}function o($){for(var W=new Map;$!==null;)$.key!==null?W.set($.key,$):W.set($.index,$),$=$.sibling;return W}function f($,W){return $=ca($,W),$.index=0,$.sibling=null,$}function h($,W,it){return $.index=it,e?(it=$.alternate,it!==null?(it=it.index,it<W?($.flags|=67108866,W):it):($.flags|=67108866,W)):($.flags|=1048576,W)}function y($){return e&&$.alternate===null&&($.flags|=67108866),$}function C($,W,it,_t){return W===null||W.tag!==6?(W=sf(it,$.mode,_t),W.return=$,W):(W=f(W,it),W.return=$,W)}function H($,W,it,_t){var ce=it.type;return ce===R?mt($,W,it.props.children,_t,it.key):W!==null&&(W.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===T&&Os(ce)===W.type)?(W=f(W,it.props),Ao(W,it),W.return=$,W):(W=Gl(it.type,it.key,it.props,null,$.mode,_t),Ao(W,it),W.return=$,W)}function at($,W,it,_t){return W===null||W.tag!==4||W.stateNode.containerInfo!==it.containerInfo||W.stateNode.implementation!==it.implementation?(W=rf(it,$.mode,_t),W.return=$,W):(W=f(W,it.children||[]),W.return=$,W)}function mt($,W,it,_t,ce){return W===null||W.tag!==7?(W=Cs(it,$.mode,_t,ce),W.return=$,W):(W=f(W,it),W.return=$,W)}function Et($,W,it){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=sf(""+W,$.mode,it),W.return=$,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case x:return it=Gl(W.type,W.key,W.props,null,$.mode,it),Ao(it,W),it.return=$,it;case E:return W=rf(W,$.mode,it),W.return=$,W;case T:return W=Os(W),Et($,W,it)}if(Y(W)||Z(W))return W=Cs(W,$.mode,it,null),W.return=$,W;if(typeof W.then=="function")return Et($,Zl(W),it);if(W.$$typeof===N)return Et($,Xl($,W),it);Kl($,W)}return null}function lt($,W,it,_t){var ce=W!==null?W.key:null;if(typeof it=="string"&&it!==""||typeof it=="number"||typeof it=="bigint")return ce!==null?null:C($,W,""+it,_t);if(typeof it=="object"&&it!==null){switch(it.$$typeof){case x:return it.key===ce?H($,W,it,_t):null;case E:return it.key===ce?at($,W,it,_t):null;case T:return it=Os(it),lt($,W,it,_t)}if(Y(it)||Z(it))return ce!==null?null:mt($,W,it,_t,null);if(typeof it.then=="function")return lt($,W,Zl(it),_t);if(it.$$typeof===N)return lt($,W,Xl($,it),_t);Kl($,it)}return null}function ut($,W,it,_t,ce){if(typeof _t=="string"&&_t!==""||typeof _t=="number"||typeof _t=="bigint")return $=$.get(it)||null,C(W,$,""+_t,ce);if(typeof _t=="object"&&_t!==null){switch(_t.$$typeof){case x:return $=$.get(_t.key===null?it:_t.key)||null,H(W,$,_t,ce);case E:return $=$.get(_t.key===null?it:_t.key)||null,at(W,$,_t,ce);case T:return _t=Os(_t),ut($,W,it,_t,ce)}if(Y(_t)||Z(_t))return $=$.get(it)||null,mt(W,$,_t,ce,null);if(typeof _t.then=="function")return ut($,W,it,Zl(_t),ce);if(_t.$$typeof===N)return ut($,W,it,Xl(W,_t),ce);Kl(W,_t)}return null}function jt($,W,it,_t){for(var ce=null,Pe=null,ne=W,ye=W=0,De=null;ne!==null&&ye<it.length;ye++){ne.index>ye?(De=ne,ne=null):De=ne.sibling;var ze=lt($,ne,it[ye],_t);if(ze===null){ne===null&&(ne=De);break}e&&ne&&ze.alternate===null&&i($,ne),W=h(ze,W,ye),Pe===null?ce=ze:Pe.sibling=ze,Pe=ze,ne=De}if(ye===it.length)return s($,ne),Ue&&ua($,ye),ce;if(ne===null){for(;ye<it.length;ye++)ne=Et($,it[ye],_t),ne!==null&&(W=h(ne,W,ye),Pe===null?ce=ne:Pe.sibling=ne,Pe=ne);return Ue&&ua($,ye),ce}for(ne=o(ne);ye<it.length;ye++)De=ut(ne,$,ye,it[ye],_t),De!==null&&(e&&De.alternate!==null&&ne.delete(De.key===null?ye:De.key),W=h(De,W,ye),Pe===null?ce=De:Pe.sibling=De,Pe=De);return e&&ne.forEach(function(os){return i($,os)}),Ue&&ua($,ye),ce}function he($,W,it,_t){if(it==null)throw Error(a(151));for(var ce=null,Pe=null,ne=W,ye=W=0,De=null,ze=it.next();ne!==null&&!ze.done;ye++,ze=it.next()){ne.index>ye?(De=ne,ne=null):De=ne.sibling;var os=lt($,ne,ze.value,_t);if(os===null){ne===null&&(ne=De);break}e&&ne&&os.alternate===null&&i($,ne),W=h(os,W,ye),Pe===null?ce=os:Pe.sibling=os,Pe=os,ne=De}if(ze.done)return s($,ne),Ue&&ua($,ye),ce;if(ne===null){for(;!ze.done;ye++,ze=it.next())ze=Et($,ze.value,_t),ze!==null&&(W=h(ze,W,ye),Pe===null?ce=ze:Pe.sibling=ze,Pe=ze);return Ue&&ua($,ye),ce}for(ne=o(ne);!ze.done;ye++,ze=it.next())ze=ut(ne,$,ye,ze.value,_t),ze!==null&&(e&&ze.alternate!==null&&ne.delete(ze.key===null?ye:ze.key),W=h(ze,W,ye),Pe===null?ce=ze:Pe.sibling=ze,Pe=ze);return e&&ne.forEach(function(tM){return i($,tM)}),Ue&&ua($,ye),ce}function Ze($,W,it,_t){if(typeof it=="object"&&it!==null&&it.type===R&&it.key===null&&(it=it.props.children),typeof it=="object"&&it!==null){switch(it.$$typeof){case x:t:{for(var ce=it.key;W!==null;){if(W.key===ce){if(ce=it.type,ce===R){if(W.tag===7){s($,W.sibling),_t=f(W,it.props.children),_t.return=$,$=_t;break t}}else if(W.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===T&&Os(ce)===W.type){s($,W.sibling),_t=f(W,it.props),Ao(_t,it),_t.return=$,$=_t;break t}s($,W);break}else i($,W);W=W.sibling}it.type===R?(_t=Cs(it.props.children,$.mode,_t,it.key),_t.return=$,$=_t):(_t=Gl(it.type,it.key,it.props,null,$.mode,_t),Ao(_t,it),_t.return=$,$=_t)}return y($);case E:t:{for(ce=it.key;W!==null;){if(W.key===ce)if(W.tag===4&&W.stateNode.containerInfo===it.containerInfo&&W.stateNode.implementation===it.implementation){s($,W.sibling),_t=f(W,it.children||[]),_t.return=$,$=_t;break t}else{s($,W);break}else i($,W);W=W.sibling}_t=rf(it,$.mode,_t),_t.return=$,$=_t}return y($);case T:return it=Os(it),Ze($,W,it,_t)}if(Y(it))return jt($,W,it,_t);if(Z(it)){if(ce=Z(it),typeof ce!="function")throw Error(a(150));return it=ce.call(it),he($,W,it,_t)}if(typeof it.then=="function")return Ze($,W,Zl(it),_t);if(it.$$typeof===N)return Ze($,W,Xl($,it),_t);Kl($,it)}return typeof it=="string"&&it!==""||typeof it=="number"||typeof it=="bigint"?(it=""+it,W!==null&&W.tag===6?(s($,W.sibling),_t=f(W,it),_t.return=$,$=_t):(s($,W),_t=sf(it,$.mode,_t),_t.return=$,$=_t),y($)):s($,W)}return function($,W,it,_t){try{To=0;var ce=Ze($,W,it,_t);return gr=null,ce}catch(ne){if(ne===mr||ne===ql)throw ne;var Pe=oi(29,ne,null,$.mode);return Pe.lanes=_t,Pe.return=$,Pe}finally{}}}var zs=jm(!0),$m=jm(!1),Xa=!1;function _f(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function xf(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Wa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function qa(e,i,s){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Be&2)!==0){var f=o.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),o.pending=i,i=Hl(e),zm(e,null,s),i}return Fl(e,o,i,s),Hl(e)}function Ro(e,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var o=i.lanes;o&=e.pendingLanes,s|=o,i.lanes=s,ni(e,s)}}function Sf(e,i){var s=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,s===o)){var f=null,h=null;if(s=s.firstBaseUpdate,s!==null){do{var y={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};h===null?f=h=y:h=h.next=y,s=s.next}while(s!==null);h===null?f=h=i:h=h.next=i}else f=h=i;s={baseState:o.baseState,firstBaseUpdate:f,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=i:e.next=i,s.lastBaseUpdate=i}var yf=!1;function wo(){if(yf){var e=pr;if(e!==null)throw e}}function Co(e,i,s,o){yf=!1;var f=e.updateQueue;Xa=!1;var h=f.firstBaseUpdate,y=f.lastBaseUpdate,C=f.shared.pending;if(C!==null){f.shared.pending=null;var H=C,at=H.next;H.next=null,y===null?h=at:y.next=at,y=H;var mt=e.alternate;mt!==null&&(mt=mt.updateQueue,C=mt.lastBaseUpdate,C!==y&&(C===null?mt.firstBaseUpdate=at:C.next=at,mt.lastBaseUpdate=H))}if(h!==null){var Et=f.baseState;y=0,mt=at=H=null,C=h;do{var lt=C.lane&-536870913,ut=lt!==C.lane;if(ut?(Ce&lt)===lt:(o&lt)===lt){lt!==0&&lt===dr&&(yf=!0),mt!==null&&(mt=mt.next={lane:0,tag:C.tag,payload:C.payload,callback:null,next:null});t:{var jt=e,he=C;lt=i;var Ze=s;switch(he.tag){case 1:if(jt=he.payload,typeof jt=="function"){Et=jt.call(Ze,Et,lt);break t}Et=jt;break t;case 3:jt.flags=jt.flags&-65537|128;case 0:if(jt=he.payload,lt=typeof jt=="function"?jt.call(Ze,Et,lt):jt,lt==null)break t;Et=v({},Et,lt);break t;case 2:Xa=!0}}lt=C.callback,lt!==null&&(e.flags|=64,ut&&(e.flags|=8192),ut=f.callbacks,ut===null?f.callbacks=[lt]:ut.push(lt))}else ut={lane:lt,tag:C.tag,payload:C.payload,callback:C.callback,next:null},mt===null?(at=mt=ut,H=Et):mt=mt.next=ut,y|=lt;if(C=C.next,C===null){if(C=f.shared.pending,C===null)break;ut=C,C=ut.next,ut.next=null,f.lastBaseUpdate=ut,f.shared.pending=null}}while(!0);mt===null&&(H=Et),f.baseState=H,f.firstBaseUpdate=at,f.lastBaseUpdate=mt,h===null&&(f.shared.lanes=0),Qa|=y,e.lanes=y,e.memoizedState=Et}}function t0(e,i){if(typeof e!="function")throw Error(a(191,e));e.call(i)}function e0(e,i){var s=e.callbacks;if(s!==null)for(e.callbacks=null,e=0;e<s.length;e++)t0(s[e],i)}var vr=P(null),Jl=P(0);function n0(e,i){e=ya,xt(Jl,e),xt(vr,i),ya=e|i.baseLanes}function Mf(){xt(Jl,ya),xt(vr,vr.current)}function Ef(){ya=Jl.current,Q(vr),Q(Jl)}var li=P(null),Ei=null;function Ya(e){var i=e.alternate;xt(fn,fn.current&1),xt(li,e),Ei===null&&(i===null||vr.current!==null||i.memoizedState!==null)&&(Ei=e)}function bf(e){xt(fn,fn.current),xt(li,e),Ei===null&&(Ei=e)}function i0(e){e.tag===22?(xt(fn,fn.current),xt(li,e),Ei===null&&(Ei=e)):Za()}function Za(){xt(fn,fn.current),xt(li,li.current)}function ci(e){Q(li),Ei===e&&(Ei=null),Q(fn)}var fn=P(0);function Ql(e){for(var i=e;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||Dh(s)||Uh(s)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var da=0,Se=null,qe=null,gn=null,jl=!1,_r=!1,Bs=!1,$l=0,Do=0,xr=null,XS=0;function cn(){throw Error(a(321))}function Tf(e,i){if(i===null)return!1;for(var s=0;s<i.length&&s<e.length;s++)if(!ri(e[s],i[s]))return!1;return!0}function Af(e,i,s,o,f,h){return da=h,Se=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,I.H=e===null||e.memoizedState===null?H0:Gf,Bs=!1,h=s(o,f),Bs=!1,_r&&(h=s0(i,s,o,f)),a0(e),h}function a0(e){I.H=Lo;var i=qe!==null&&qe.next!==null;if(da=0,gn=qe=Se=null,jl=!1,Do=0,xr=null,i)throw Error(a(300));e===null||vn||(e=e.dependencies,e!==null&&kl(e)&&(vn=!0))}function s0(e,i,s,o){Se=e;var f=0;do{if(_r&&(xr=null),Do=0,_r=!1,25<=f)throw Error(a(301));if(f+=1,gn=qe=null,e.updateQueue!=null){var h=e.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}I.H=G0,h=i(s,o)}while(_r);return h}function WS(){var e=I.H,i=e.useState()[0];return i=typeof i.then=="function"?Uo(i):i,e=e.useState()[0],(qe!==null?qe.memoizedState:null)!==e&&(Se.flags|=1024),i}function Rf(){var e=$l!==0;return $l=0,e}function wf(e,i,s){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~s}function Cf(e){if(jl){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}jl=!1}da=0,gn=qe=Se=null,_r=!1,Do=$l=0,xr=null}function Gn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gn===null?Se.memoizedState=gn=e:gn=gn.next=e,gn}function hn(){if(qe===null){var e=Se.alternate;e=e!==null?e.memoizedState:null}else e=qe.next;var i=gn===null?Se.memoizedState:gn.next;if(i!==null)gn=i,qe=e;else{if(e===null)throw Se.alternate===null?Error(a(467)):Error(a(310));qe=e,e={memoizedState:qe.memoizedState,baseState:qe.baseState,baseQueue:qe.baseQueue,queue:qe.queue,next:null},gn===null?Se.memoizedState=gn=e:gn=gn.next=e}return gn}function tc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Uo(e){var i=Do;return Do+=1,xr===null&&(xr=[]),e=Km(xr,e,i),i=Se,(gn===null?i.memoizedState:gn.next)===null&&(i=i.alternate,I.H=i===null||i.memoizedState===null?H0:Gf),e}function ec(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Uo(e);if(e.$$typeof===N)return Dn(e)}throw Error(a(438,String(e)))}function Df(e){var i=null,s=Se.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var o=Se.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(i={data:o.data.map(function(f){return f.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=tc(),Se.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(e),o=0;o<e;o++)s[o]=V;return i.index++,s}function pa(e,i){return typeof i=="function"?i(e):i}function nc(e){var i=hn();return Uf(i,qe,e)}function Uf(e,i,s){var o=e.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=s;var f=e.baseQueue,h=o.pending;if(h!==null){if(f!==null){var y=f.next;f.next=h.next,h.next=y}i.baseQueue=f=h,o.pending=null}if(h=e.baseState,f===null)e.memoizedState=h;else{i=f.next;var C=y=null,H=null,at=i,mt=!1;do{var Et=at.lane&-536870913;if(Et!==at.lane?(Ce&Et)===Et:(da&Et)===Et){var lt=at.revertLane;if(lt===0)H!==null&&(H=H.next={lane:0,revertLane:0,gesture:null,action:at.action,hasEagerState:at.hasEagerState,eagerState:at.eagerState,next:null}),Et===dr&&(mt=!0);else if((da&lt)===lt){at=at.next,lt===dr&&(mt=!0);continue}else Et={lane:0,revertLane:at.revertLane,gesture:null,action:at.action,hasEagerState:at.hasEagerState,eagerState:at.eagerState,next:null},H===null?(C=H=Et,y=h):H=H.next=Et,Se.lanes|=lt,Qa|=lt;Et=at.action,Bs&&s(h,Et),h=at.hasEagerState?at.eagerState:s(h,Et)}else lt={lane:Et,revertLane:at.revertLane,gesture:at.gesture,action:at.action,hasEagerState:at.hasEagerState,eagerState:at.eagerState,next:null},H===null?(C=H=lt,y=h):H=H.next=lt,Se.lanes|=Et,Qa|=Et;at=at.next}while(at!==null&&at!==i);if(H===null?y=h:H.next=C,!ri(h,e.memoizedState)&&(vn=!0,mt&&(s=pr,s!==null)))throw s;e.memoizedState=h,e.baseState=y,e.baseQueue=H,o.lastRenderedState=h}return f===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Nf(e){var i=hn(),s=i.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=e;var o=s.dispatch,f=s.pending,h=i.memoizedState;if(f!==null){s.pending=null;var y=f=f.next;do h=e(h,y.action),y=y.next;while(y!==f);ri(h,i.memoizedState)||(vn=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),s.lastRenderedState=h}return[h,o]}function r0(e,i,s){var o=Se,f=hn(),h=Ue;if(h){if(s===void 0)throw Error(a(407));s=s()}else s=i();var y=!ri((qe||f).memoizedState,s);if(y&&(f.memoizedState=s,vn=!0),f=f.queue,Pf(c0.bind(null,o,f,e),[e]),f.getSnapshot!==i||y||gn!==null&&gn.memoizedState.tag&1){if(o.flags|=2048,Sr(9,{destroy:void 0},l0.bind(null,o,f,s,i),null),Je===null)throw Error(a(349));h||(da&127)!==0||o0(o,i,s)}return s}function o0(e,i,s){e.flags|=16384,e={getSnapshot:i,value:s},i=Se.updateQueue,i===null?(i=tc(),Se.updateQueue=i,i.stores=[e]):(s=i.stores,s===null?i.stores=[e]:s.push(e))}function l0(e,i,s,o){i.value=s,i.getSnapshot=o,u0(i)&&f0(e)}function c0(e,i,s){return s(function(){u0(i)&&f0(e)})}function u0(e){var i=e.getSnapshot;e=e.value;try{var s=i();return!ri(e,s)}catch{return!0}}function f0(e){var i=ws(e,2);i!==null&&ti(i,e,2)}function Lf(e){var i=Gn();if(typeof e=="function"){var s=e;if(e=s(),Bs){Lt(!0);try{s()}finally{Lt(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:e},i}function h0(e,i,s,o){return e.baseState=s,Uf(e,qe,typeof o=="function"?o:pa)}function qS(e,i,s,o,f){if(sc(e))throw Error(a(485));if(e=i.action,e!==null){var h={payload:f,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){h.listeners.push(y)}};I.T!==null?s(!0):h.isTransition=!1,o(h),s=i.pending,s===null?(h.next=i.pending=h,d0(i,h)):(h.next=s.next,i.pending=s.next=h)}}function d0(e,i){var s=i.action,o=i.payload,f=e.state;if(i.isTransition){var h=I.T,y={};I.T=y;try{var C=s(f,o),H=I.S;H!==null&&H(y,C),p0(e,i,C)}catch(at){Of(e,i,at)}finally{h!==null&&y.types!==null&&(h.types=y.types),I.T=h}}else try{h=s(f,o),p0(e,i,h)}catch(at){Of(e,i,at)}}function p0(e,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(o){m0(e,i,o)},function(o){return Of(e,i,o)}):m0(e,i,s)}function m0(e,i,s){i.status="fulfilled",i.value=s,g0(i),e.state=s,i=e.pending,i!==null&&(s=i.next,s===i?e.pending=null:(s=s.next,i.next=s,d0(e,s)))}function Of(e,i,s){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do i.status="rejected",i.reason=s,g0(i),i=i.next;while(i!==o)}e.action=null}function g0(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function v0(e,i){return i}function _0(e,i){if(Ue){var s=Je.formState;if(s!==null){t:{var o=Se;if(Ue){if(Qe){e:{for(var f=Qe,h=Mi;f.nodeType!==8;){if(!h){f=null;break e}if(f=bi(f.nextSibling),f===null){f=null;break e}}h=f.data,f=h==="F!"||h==="F"?f:null}if(f){Qe=bi(f.nextSibling),o=f.data==="F!";break t}}Va(o)}o=!1}o&&(i=s[0])}}return s=Gn(),s.memoizedState=s.baseState=i,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:v0,lastRenderedState:i},s.queue=o,s=B0.bind(null,Se,o),o.dispatch=s,o=Lf(!1),h=Hf.bind(null,Se,!1,o.queue),o=Gn(),f={state:i,dispatch:null,action:e,pending:null},o.queue=f,s=qS.bind(null,Se,f,h,s),f.dispatch=s,o.memoizedState=e,[i,s,!1]}function x0(e){var i=hn();return S0(i,qe,e)}function S0(e,i,s){if(i=Uf(e,i,v0)[0],e=nc(pa)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var o=Uo(i)}catch(y){throw y===mr?ql:y}else o=i;i=hn();var f=i.queue,h=f.dispatch;return s!==i.memoizedState&&(Se.flags|=2048,Sr(9,{destroy:void 0},YS.bind(null,f,s),null)),[o,h,e]}function YS(e,i){e.action=i}function y0(e){var i=hn(),s=qe;if(s!==null)return S0(i,s,e);hn(),i=i.memoizedState,s=hn();var o=s.queue.dispatch;return s.memoizedState=e,[i,o,!1]}function Sr(e,i,s,o){return e={tag:e,create:s,deps:o,inst:i,next:null},i=Se.updateQueue,i===null&&(i=tc(),Se.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=e.next=e:(o=s.next,s.next=e,e.next=o,i.lastEffect=e),e}function M0(){return hn().memoizedState}function ic(e,i,s,o){var f=Gn();Se.flags|=e,f.memoizedState=Sr(1|i,{destroy:void 0},s,o===void 0?null:o)}function ac(e,i,s,o){var f=hn();o=o===void 0?null:o;var h=f.memoizedState.inst;qe!==null&&o!==null&&Tf(o,qe.memoizedState.deps)?f.memoizedState=Sr(i,h,s,o):(Se.flags|=e,f.memoizedState=Sr(1|i,h,s,o))}function E0(e,i){ic(8390656,8,e,i)}function Pf(e,i){ac(2048,8,e,i)}function ZS(e){Se.flags|=4;var i=Se.updateQueue;if(i===null)i=tc(),Se.updateQueue=i,i.events=[e];else{var s=i.events;s===null?i.events=[e]:s.push(e)}}function b0(e){var i=hn().memoizedState;return ZS({ref:i,nextImpl:e}),function(){if((Be&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}function T0(e,i){return ac(4,2,e,i)}function A0(e,i){return ac(4,4,e,i)}function R0(e,i){if(typeof i=="function"){e=e();var s=i(e);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function w0(e,i,s){s=s!=null?s.concat([e]):null,ac(4,4,R0.bind(null,i,e),s)}function zf(){}function C0(e,i){var s=hn();i=i===void 0?null:i;var o=s.memoizedState;return i!==null&&Tf(i,o[1])?o[0]:(s.memoizedState=[e,i],e)}function D0(e,i){var s=hn();i=i===void 0?null:i;var o=s.memoizedState;if(i!==null&&Tf(i,o[1]))return o[0];if(o=e(),Bs){Lt(!0);try{e()}finally{Lt(!1)}}return s.memoizedState=[o,i],o}function Bf(e,i,s){return s===void 0||(da&1073741824)!==0&&(Ce&261930)===0?e.memoizedState=i:(e.memoizedState=s,e=Ug(),Se.lanes|=e,Qa|=e,s)}function U0(e,i,s,o){return ri(s,i)?s:vr.current!==null?(e=Bf(e,s,o),ri(e,i)||(vn=!0),e):(da&42)===0||(da&1073741824)!==0&&(Ce&261930)===0?(vn=!0,e.memoizedState=s):(e=Ug(),Se.lanes|=e,Qa|=e,i)}function N0(e,i,s,o,f){var h=F.p;F.p=h!==0&&8>h?h:8;var y=I.T,C={};I.T=C,Hf(e,!1,i,s);try{var H=f(),at=I.S;if(at!==null&&at(C,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var mt=kS(H,o);No(e,i,mt,hi(e))}else No(e,i,o,hi(e))}catch(Et){No(e,i,{then:function(){},status:"rejected",reason:Et},hi())}finally{F.p=h,y!==null&&C.types!==null&&(y.types=C.types),I.T=y}}function KS(){}function If(e,i,s,o){if(e.tag!==5)throw Error(a(476));var f=L0(e).queue;N0(e,f,i,tt,s===null?KS:function(){return O0(e),s(o)})}function L0(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:tt,baseState:tt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:tt},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:s},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function O0(e){var i=L0(e);i.next===null&&(i=e.alternate.memoizedState),No(e,i.next.queue,{},hi())}function Ff(){return Dn(Ko)}function P0(){return hn().memoizedState}function z0(){return hn().memoizedState}function JS(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var s=hi();e=Wa(s);var o=qa(i,e,s);o!==null&&(ti(o,i,s),Ro(o,i,s)),i={cache:pf()},e.payload=i;return}i=i.return}}function QS(e,i,s){var o=hi();s={lane:o,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},sc(e)?I0(i,s):(s=nf(e,i,s,o),s!==null&&(ti(s,e,o),F0(s,i,o)))}function B0(e,i,s){var o=hi();No(e,i,s,o)}function No(e,i,s,o){var f={lane:o,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(sc(e))I0(i,f);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var y=i.lastRenderedState,C=h(y,s);if(f.hasEagerState=!0,f.eagerState=C,ri(C,y))return Fl(e,i,f,0),Je===null&&Il(),!1}catch{}finally{}if(s=nf(e,i,f,o),s!==null)return ti(s,e,o),F0(s,i,o),!0}return!1}function Hf(e,i,s,o){if(o={lane:2,revertLane:_h(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},sc(e)){if(i)throw Error(a(479))}else i=nf(e,s,o,2),i!==null&&ti(i,e,2)}function sc(e){var i=e.alternate;return e===Se||i!==null&&i===Se}function I0(e,i){_r=jl=!0;var s=e.pending;s===null?i.next=i:(i.next=s.next,s.next=i),e.pending=i}function F0(e,i,s){if((s&4194048)!==0){var o=i.lanes;o&=e.pendingLanes,s|=o,i.lanes=s,ni(e,s)}}var Lo={readContext:Dn,use:ec,useCallback:cn,useContext:cn,useEffect:cn,useImperativeHandle:cn,useLayoutEffect:cn,useInsertionEffect:cn,useMemo:cn,useReducer:cn,useRef:cn,useState:cn,useDebugValue:cn,useDeferredValue:cn,useTransition:cn,useSyncExternalStore:cn,useId:cn,useHostTransitionStatus:cn,useFormState:cn,useActionState:cn,useOptimistic:cn,useMemoCache:cn,useCacheRefresh:cn};Lo.useEffectEvent=cn;var H0={readContext:Dn,use:ec,useCallback:function(e,i){return Gn().memoizedState=[e,i===void 0?null:i],e},useContext:Dn,useEffect:E0,useImperativeHandle:function(e,i,s){s=s!=null?s.concat([e]):null,ic(4194308,4,R0.bind(null,i,e),s)},useLayoutEffect:function(e,i){return ic(4194308,4,e,i)},useInsertionEffect:function(e,i){ic(4,2,e,i)},useMemo:function(e,i){var s=Gn();i=i===void 0?null:i;var o=e();if(Bs){Lt(!0);try{e()}finally{Lt(!1)}}return s.memoizedState=[o,i],o},useReducer:function(e,i,s){var o=Gn();if(s!==void 0){var f=s(i);if(Bs){Lt(!0);try{s(i)}finally{Lt(!1)}}}else f=i;return o.memoizedState=o.baseState=f,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:f},o.queue=e,e=e.dispatch=QS.bind(null,Se,e),[o.memoizedState,e]},useRef:function(e){var i=Gn();return e={current:e},i.memoizedState=e},useState:function(e){e=Lf(e);var i=e.queue,s=B0.bind(null,Se,i);return i.dispatch=s,[e.memoizedState,s]},useDebugValue:zf,useDeferredValue:function(e,i){var s=Gn();return Bf(s,e,i)},useTransition:function(){var e=Lf(!1);return e=N0.bind(null,Se,e.queue,!0,!1),Gn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,s){var o=Se,f=Gn();if(Ue){if(s===void 0)throw Error(a(407));s=s()}else{if(s=i(),Je===null)throw Error(a(349));(Ce&127)!==0||o0(o,i,s)}f.memoizedState=s;var h={value:s,getSnapshot:i};return f.queue=h,E0(c0.bind(null,o,h,e),[e]),o.flags|=2048,Sr(9,{destroy:void 0},l0.bind(null,o,h,s,i),null),s},useId:function(){var e=Gn(),i=Je.identifierPrefix;if(Ue){var s=Xi,o=ki;s=(o&~(1<<32-Wt(o)-1)).toString(32)+s,i="_"+i+"R_"+s,s=$l++,0<s&&(i+="H"+s.toString(32)),i+="_"}else s=XS++,i="_"+i+"r_"+s.toString(32)+"_";return e.memoizedState=i},useHostTransitionStatus:Ff,useFormState:_0,useActionState:_0,useOptimistic:function(e){var i=Gn();i.memoizedState=i.baseState=e;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=Hf.bind(null,Se,!0,s),s.dispatch=i,[e,i]},useMemoCache:Df,useCacheRefresh:function(){return Gn().memoizedState=JS.bind(null,Se)},useEffectEvent:function(e){var i=Gn(),s={impl:e};return i.memoizedState=s,function(){if((Be&2)!==0)throw Error(a(440));return s.impl.apply(void 0,arguments)}}},Gf={readContext:Dn,use:ec,useCallback:C0,useContext:Dn,useEffect:Pf,useImperativeHandle:w0,useInsertionEffect:T0,useLayoutEffect:A0,useMemo:D0,useReducer:nc,useRef:M0,useState:function(){return nc(pa)},useDebugValue:zf,useDeferredValue:function(e,i){var s=hn();return U0(s,qe.memoizedState,e,i)},useTransition:function(){var e=nc(pa)[0],i=hn().memoizedState;return[typeof e=="boolean"?e:Uo(e),i]},useSyncExternalStore:r0,useId:P0,useHostTransitionStatus:Ff,useFormState:x0,useActionState:x0,useOptimistic:function(e,i){var s=hn();return h0(s,qe,e,i)},useMemoCache:Df,useCacheRefresh:z0};Gf.useEffectEvent=b0;var G0={readContext:Dn,use:ec,useCallback:C0,useContext:Dn,useEffect:Pf,useImperativeHandle:w0,useInsertionEffect:T0,useLayoutEffect:A0,useMemo:D0,useReducer:Nf,useRef:M0,useState:function(){return Nf(pa)},useDebugValue:zf,useDeferredValue:function(e,i){var s=hn();return qe===null?Bf(s,e,i):U0(s,qe.memoizedState,e,i)},useTransition:function(){var e=Nf(pa)[0],i=hn().memoizedState;return[typeof e=="boolean"?e:Uo(e),i]},useSyncExternalStore:r0,useId:P0,useHostTransitionStatus:Ff,useFormState:y0,useActionState:y0,useOptimistic:function(e,i){var s=hn();return qe!==null?h0(s,qe,e,i):(s.baseState=e,[e,s.queue.dispatch])},useMemoCache:Df,useCacheRefresh:z0};G0.useEffectEvent=b0;function Vf(e,i,s,o){i=e.memoizedState,s=s(o,i),s=s==null?i:v({},i,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var kf={enqueueSetState:function(e,i,s){e=e._reactInternals;var o=hi(),f=Wa(o);f.payload=i,s!=null&&(f.callback=s),i=qa(e,f,o),i!==null&&(ti(i,e,o),Ro(i,e,o))},enqueueReplaceState:function(e,i,s){e=e._reactInternals;var o=hi(),f=Wa(o);f.tag=1,f.payload=i,s!=null&&(f.callback=s),i=qa(e,f,o),i!==null&&(ti(i,e,o),Ro(i,e,o))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var s=hi(),o=Wa(s);o.tag=2,i!=null&&(o.callback=i),i=qa(e,o,s),i!==null&&(ti(i,e,s),Ro(i,e,s))}};function V0(e,i,s,o,f,h,y){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,h,y):i.prototype&&i.prototype.isPureReactComponent?!xo(s,o)||!xo(f,h):!0}function k0(e,i,s,o){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,o),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,o),i.state!==e&&kf.enqueueReplaceState(i,i.state,null)}function Is(e,i){var s=i;if("ref"in i){s={};for(var o in i)o!=="ref"&&(s[o]=i[o])}if(e=e.defaultProps){s===i&&(s=v({},s));for(var f in e)s[f]===void 0&&(s[f]=e[f])}return s}function X0(e){Bl(e)}function W0(e){console.error(e)}function q0(e){Bl(e)}function rc(e,i){try{var s=e.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(o){setTimeout(function(){throw o})}}function Y0(e,i,s){try{var o=e.onCaughtError;o(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Xf(e,i,s){return s=Wa(s),s.tag=3,s.payload={element:null},s.callback=function(){rc(e,i)},s}function Z0(e){return e=Wa(e),e.tag=3,e}function K0(e,i,s,o){var f=s.type.getDerivedStateFromError;if(typeof f=="function"){var h=o.value;e.payload=function(){return f(h)},e.callback=function(){Y0(i,s,o)}}var y=s.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(e.callback=function(){Y0(i,s,o),typeof f!="function"&&(ja===null?ja=new Set([this]):ja.add(this));var C=o.stack;this.componentDidCatch(o.value,{componentStack:C!==null?C:""})})}function jS(e,i,s,o,f){if(s.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(i=s.alternate,i!==null&&hr(i,s,f,!0),s=li.current,s!==null){switch(s.tag){case 31:case 13:return Ei===null?_c():s.alternate===null&&un===0&&(un=3),s.flags&=-257,s.flags|=65536,s.lanes=f,o===Yl?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([o]):i.add(o),mh(e,o,f)),!1;case 22:return s.flags|=65536,o===Yl?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([o])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([o]):s.add(o)),mh(e,o,f)),!1}throw Error(a(435,s.tag))}return mh(e,o,f),_c(),!1}if(Ue)return i=li.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=f,o!==cf&&(e=Error(a(422),{cause:o}),Mo(xi(e,s)))):(o!==cf&&(i=Error(a(423),{cause:o}),Mo(xi(i,s))),e=e.current.alternate,e.flags|=65536,f&=-f,e.lanes|=f,o=xi(o,s),f=Xf(e.stateNode,o,f),Sf(e,f),un!==4&&(un=2)),!1;var h=Error(a(520),{cause:o});if(h=xi(h,s),Go===null?Go=[h]:Go.push(h),un!==4&&(un=2),i===null)return!0;o=xi(o,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,e=f&-f,s.lanes|=e,e=Xf(s.stateNode,o,e),Sf(s,e),!1;case 1:if(i=s.type,h=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(ja===null||!ja.has(h))))return s.flags|=65536,f&=-f,s.lanes|=f,f=Z0(f),K0(f,e,s,o),Sf(s,f),!1}s=s.return}while(s!==null);return!1}var Wf=Error(a(461)),vn=!1;function Un(e,i,s,o){i.child=e===null?$m(i,null,s,o):zs(i,e.child,s,o)}function J0(e,i,s,o,f){s=s.render;var h=i.ref;if("ref"in o){var y={};for(var C in o)C!=="ref"&&(y[C]=o[C])}else y=o;return Ns(i),o=Af(e,i,s,y,h,f),C=Rf(),e!==null&&!vn?(wf(e,i,f),ma(e,i,f)):(Ue&&C&&of(i),i.flags|=1,Un(e,i,o,f),i.child)}function Q0(e,i,s,o,f){if(e===null){var h=s.type;return typeof h=="function"&&!af(h)&&h.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=h,j0(e,i,h,o,f)):(e=Gl(s.type,null,o,i,i.mode,f),e.ref=i.ref,e.return=i,i.child=e)}if(h=e.child,!$f(e,f)){var y=h.memoizedProps;if(s=s.compare,s=s!==null?s:xo,s(y,o)&&e.ref===i.ref)return ma(e,i,f)}return i.flags|=1,e=ca(h,o),e.ref=i.ref,e.return=i,i.child=e}function j0(e,i,s,o,f){if(e!==null){var h=e.memoizedProps;if(xo(h,o)&&e.ref===i.ref)if(vn=!1,i.pendingProps=o=h,$f(e,f))(e.flags&131072)!==0&&(vn=!0);else return i.lanes=e.lanes,ma(e,i,f)}return qf(e,i,s,o,f)}function $0(e,i,s,o){var f=o.children,h=e!==null?e.memoizedState:null;if(e===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((i.flags&128)!==0){if(h=h!==null?h.baseLanes|s:s,e!==null){for(o=i.child=e.child,f=0;o!==null;)f=f|o.lanes|o.childLanes,o=o.sibling;o=f&~h}else o=0,i.child=null;return tg(e,i,h,s,o)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&Wl(i,h!==null?h.cachePool:null),h!==null?n0(i,h):Mf(),i0(i);else return o=i.lanes=536870912,tg(e,i,h!==null?h.baseLanes|s:s,s,o)}else h!==null?(Wl(i,h.cachePool),n0(i,h),Za(),i.memoizedState=null):(e!==null&&Wl(i,null),Mf(),Za());return Un(e,i,f,s),i.child}function Oo(e,i){return e!==null&&e.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function tg(e,i,s,o,f){var h=gf();return h=h===null?null:{parent:mn._currentValue,pool:h},i.memoizedState={baseLanes:s,cachePool:h},e!==null&&Wl(i,null),Mf(),i0(i),e!==null&&hr(e,i,o,!0),i.childLanes=f,null}function oc(e,i){return i=cc({mode:i.mode,children:i.children},e.mode),i.ref=e.ref,e.child=i,i.return=e,i}function eg(e,i,s){return zs(i,e.child,null,s),e=oc(i,i.pendingProps),e.flags|=2,ci(i),i.memoizedState=null,e}function $S(e,i,s){var o=i.pendingProps,f=(i.flags&128)!==0;if(i.flags&=-129,e===null){if(Ue){if(o.mode==="hidden")return e=oc(i,o),i.lanes=536870912,Oo(null,e);if(bf(i),(e=Qe)?(e=dv(e,Mi),e=e!==null&&e.data==="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:Ha!==null?{id:ki,overflow:Xi}:null,retryLane:536870912,hydrationErrors:null},s=Im(e),s.return=i,i.child=s,Cn=i,Qe=null)):e=null,e===null)throw Va(i);return i.lanes=536870912,null}return oc(i,o)}var h=e.memoizedState;if(h!==null){var y=h.dehydrated;if(bf(i),f)if(i.flags&256)i.flags&=-257,i=eg(e,i,s);else if(i.memoizedState!==null)i.child=e.child,i.flags|=128,i=null;else throw Error(a(558));else if(vn||hr(e,i,s,!1),f=(s&e.childLanes)!==0,vn||f){if(o=Je,o!==null&&(y=ii(o,s),y!==0&&y!==h.retryLane))throw h.retryLane=y,ws(e,y),ti(o,e,y),Wf;_c(),i=eg(e,i,s)}else e=h.treeContext,Qe=bi(y.nextSibling),Cn=i,Ue=!0,Ga=null,Mi=!1,e!==null&&Gm(i,e),i=oc(i,o),i.flags|=4096;return i}return e=ca(e.child,{mode:o.mode,children:o.children}),e.ref=i.ref,i.child=e,e.return=i,e}function lc(e,i){var s=i.ref;if(s===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(e===null||e.ref!==s)&&(i.flags|=4194816)}}function qf(e,i,s,o,f){return Ns(i),s=Af(e,i,s,o,void 0,f),o=Rf(),e!==null&&!vn?(wf(e,i,f),ma(e,i,f)):(Ue&&o&&of(i),i.flags|=1,Un(e,i,s,f),i.child)}function ng(e,i,s,o,f,h){return Ns(i),i.updateQueue=null,s=s0(i,o,s,f),a0(e),o=Rf(),e!==null&&!vn?(wf(e,i,h),ma(e,i,h)):(Ue&&o&&of(i),i.flags|=1,Un(e,i,s,h),i.child)}function ig(e,i,s,o,f){if(Ns(i),i.stateNode===null){var h=lr,y=s.contextType;typeof y=="object"&&y!==null&&(h=Dn(y)),h=new s(o,h),i.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=kf,i.stateNode=h,h._reactInternals=i,h=i.stateNode,h.props=o,h.state=i.memoizedState,h.refs={},_f(i),y=s.contextType,h.context=typeof y=="object"&&y!==null?Dn(y):lr,h.state=i.memoizedState,y=s.getDerivedStateFromProps,typeof y=="function"&&(Vf(i,s,y,o),h.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(y=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),y!==h.state&&kf.enqueueReplaceState(h,h.state,null),Co(i,o,h,f),wo(),h.state=i.memoizedState),typeof h.componentDidMount=="function"&&(i.flags|=4194308),o=!0}else if(e===null){h=i.stateNode;var C=i.memoizedProps,H=Is(s,C);h.props=H;var at=h.context,mt=s.contextType;y=lr,typeof mt=="object"&&mt!==null&&(y=Dn(mt));var Et=s.getDerivedStateFromProps;mt=typeof Et=="function"||typeof h.getSnapshotBeforeUpdate=="function",C=i.pendingProps!==C,mt||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(C||at!==y)&&k0(i,h,o,y),Xa=!1;var lt=i.memoizedState;h.state=lt,Co(i,o,h,f),wo(),at=i.memoizedState,C||lt!==at||Xa?(typeof Et=="function"&&(Vf(i,s,Et,o),at=i.memoizedState),(H=Xa||V0(i,s,H,o,lt,at,y))?(mt||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(i.flags|=4194308)):(typeof h.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=o,i.memoizedState=at),h.props=o,h.state=at,h.context=y,o=H):(typeof h.componentDidMount=="function"&&(i.flags|=4194308),o=!1)}else{h=i.stateNode,xf(e,i),y=i.memoizedProps,mt=Is(s,y),h.props=mt,Et=i.pendingProps,lt=h.context,at=s.contextType,H=lr,typeof at=="object"&&at!==null&&(H=Dn(at)),C=s.getDerivedStateFromProps,(at=typeof C=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(y!==Et||lt!==H)&&k0(i,h,o,H),Xa=!1,lt=i.memoizedState,h.state=lt,Co(i,o,h,f),wo();var ut=i.memoizedState;y!==Et||lt!==ut||Xa||e!==null&&e.dependencies!==null&&kl(e.dependencies)?(typeof C=="function"&&(Vf(i,s,C,o),ut=i.memoizedState),(mt=Xa||V0(i,s,mt,o,lt,ut,H)||e!==null&&e.dependencies!==null&&kl(e.dependencies))?(at||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,ut,H),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,ut,H)),typeof h.componentDidUpdate=="function"&&(i.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof h.componentDidUpdate!="function"||y===e.memoizedProps&&lt===e.memoizedState||(i.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&lt===e.memoizedState||(i.flags|=1024),i.memoizedProps=o,i.memoizedState=ut),h.props=o,h.state=ut,h.context=H,o=mt):(typeof h.componentDidUpdate!="function"||y===e.memoizedProps&&lt===e.memoizedState||(i.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&lt===e.memoizedState||(i.flags|=1024),o=!1)}return h=o,lc(e,i),o=(i.flags&128)!==0,h||o?(h=i.stateNode,s=o&&typeof s.getDerivedStateFromError!="function"?null:h.render(),i.flags|=1,e!==null&&o?(i.child=zs(i,e.child,null,f),i.child=zs(i,null,s,f)):Un(e,i,s,f),i.memoizedState=h.state,e=i.child):e=ma(e,i,f),e}function ag(e,i,s,o){return Ds(),i.flags|=256,Un(e,i,s,o),i.child}var Yf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Zf(e){return{baseLanes:e,cachePool:Ym()}}function Kf(e,i,s){return e=e!==null?e.childLanes&~s:0,i&&(e|=fi),e}function sg(e,i,s){var o=i.pendingProps,f=!1,h=(i.flags&128)!==0,y;if((y=h)||(y=e!==null&&e.memoizedState===null?!1:(fn.current&2)!==0),y&&(f=!0,i.flags&=-129),y=(i.flags&32)!==0,i.flags&=-33,e===null){if(Ue){if(f?Ya(i):Za(),(e=Qe)?(e=dv(e,Mi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:Ha!==null?{id:ki,overflow:Xi}:null,retryLane:536870912,hydrationErrors:null},s=Im(e),s.return=i,i.child=s,Cn=i,Qe=null)):e=null,e===null)throw Va(i);return Uh(e)?i.lanes=32:i.lanes=536870912,null}var C=o.children;return o=o.fallback,f?(Za(),f=i.mode,C=cc({mode:"hidden",children:C},f),o=Cs(o,f,s,null),C.return=i,o.return=i,C.sibling=o,i.child=C,o=i.child,o.memoizedState=Zf(s),o.childLanes=Kf(e,y,s),i.memoizedState=Yf,Oo(null,o)):(Ya(i),Jf(i,C))}var H=e.memoizedState;if(H!==null&&(C=H.dehydrated,C!==null)){if(h)i.flags&256?(Ya(i),i.flags&=-257,i=Qf(e,i,s)):i.memoizedState!==null?(Za(),i.child=e.child,i.flags|=128,i=null):(Za(),C=o.fallback,f=i.mode,o=cc({mode:"visible",children:o.children},f),C=Cs(C,f,s,null),C.flags|=2,o.return=i,C.return=i,o.sibling=C,i.child=o,zs(i,e.child,null,s),o=i.child,o.memoizedState=Zf(s),o.childLanes=Kf(e,y,s),i.memoizedState=Yf,i=Oo(null,o));else if(Ya(i),Uh(C)){if(y=C.nextSibling&&C.nextSibling.dataset,y)var at=y.dgst;y=at,o=Error(a(419)),o.stack="",o.digest=y,Mo({value:o,source:null,stack:null}),i=Qf(e,i,s)}else if(vn||hr(e,i,s,!1),y=(s&e.childLanes)!==0,vn||y){if(y=Je,y!==null&&(o=ii(y,s),o!==0&&o!==H.retryLane))throw H.retryLane=o,ws(e,o),ti(y,e,o),Wf;Dh(C)||_c(),i=Qf(e,i,s)}else Dh(C)?(i.flags|=192,i.child=e.child,i=null):(e=H.treeContext,Qe=bi(C.nextSibling),Cn=i,Ue=!0,Ga=null,Mi=!1,e!==null&&Gm(i,e),i=Jf(i,o.children),i.flags|=4096);return i}return f?(Za(),C=o.fallback,f=i.mode,H=e.child,at=H.sibling,o=ca(H,{mode:"hidden",children:o.children}),o.subtreeFlags=H.subtreeFlags&65011712,at!==null?C=ca(at,C):(C=Cs(C,f,s,null),C.flags|=2),C.return=i,o.return=i,o.sibling=C,i.child=o,Oo(null,o),o=i.child,C=e.child.memoizedState,C===null?C=Zf(s):(f=C.cachePool,f!==null?(H=mn._currentValue,f=f.parent!==H?{parent:H,pool:H}:f):f=Ym(),C={baseLanes:C.baseLanes|s,cachePool:f}),o.memoizedState=C,o.childLanes=Kf(e,y,s),i.memoizedState=Yf,Oo(e.child,o)):(Ya(i),s=e.child,e=s.sibling,s=ca(s,{mode:"visible",children:o.children}),s.return=i,s.sibling=null,e!==null&&(y=i.deletions,y===null?(i.deletions=[e],i.flags|=16):y.push(e)),i.child=s,i.memoizedState=null,s)}function Jf(e,i){return i=cc({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function cc(e,i){return e=oi(22,e,null,i),e.lanes=0,e}function Qf(e,i,s){return zs(i,e.child,null,s),e=Jf(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function rg(e,i,s){e.lanes|=i;var o=e.alternate;o!==null&&(o.lanes|=i),hf(e.return,i,s)}function jf(e,i,s,o,f,h){var y=e.memoizedState;y===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:o,tail:s,tailMode:f,treeForkCount:h}:(y.isBackwards=i,y.rendering=null,y.renderingStartTime=0,y.last=o,y.tail=s,y.tailMode=f,y.treeForkCount=h)}function og(e,i,s){var o=i.pendingProps,f=o.revealOrder,h=o.tail;o=o.children;var y=fn.current,C=(y&2)!==0;if(C?(y=y&1|2,i.flags|=128):y&=1,xt(fn,y),Un(e,i,o,s),o=Ue?yo:0,!C&&e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&rg(e,s,i);else if(e.tag===19)rg(e,s,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(f){case"forwards":for(s=i.child,f=null;s!==null;)e=s.alternate,e!==null&&Ql(e)===null&&(f=s),s=s.sibling;s=f,s===null?(f=i.child,i.child=null):(f=s.sibling,s.sibling=null),jf(i,!1,f,s,h,o);break;case"backwards":case"unstable_legacy-backwards":for(s=null,f=i.child,i.child=null;f!==null;){if(e=f.alternate,e!==null&&Ql(e)===null){i.child=f;break}e=f.sibling,f.sibling=s,s=f,f=e}jf(i,!0,s,null,h,o);break;case"together":jf(i,!1,null,null,void 0,o);break;default:i.memoizedState=null}return i.child}function ma(e,i,s){if(e!==null&&(i.dependencies=e.dependencies),Qa|=i.lanes,(s&i.childLanes)===0)if(e!==null){if(hr(e,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(a(153));if(i.child!==null){for(e=i.child,s=ca(e,e.pendingProps),i.child=s,s.return=i;e.sibling!==null;)e=e.sibling,s=s.sibling=ca(e,e.pendingProps),s.return=i;s.sibling=null}return i.child}function $f(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&kl(e)))}function ty(e,i,s){switch(i.tag){case 3:yt(i,i.stateNode.containerInfo),ka(i,mn,e.memoizedState.cache),Ds();break;case 27:case 5:ie(i);break;case 4:yt(i,i.stateNode.containerInfo);break;case 10:ka(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,bf(i),null;break;case 13:var o=i.memoizedState;if(o!==null)return o.dehydrated!==null?(Ya(i),i.flags|=128,null):(s&i.child.childLanes)!==0?sg(e,i,s):(Ya(i),e=ma(e,i,s),e!==null?e.sibling:null);Ya(i);break;case 19:var f=(e.flags&128)!==0;if(o=(s&i.childLanes)!==0,o||(hr(e,i,s,!1),o=(s&i.childLanes)!==0),f){if(o)return og(e,i,s);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),xt(fn,fn.current),o)break;return null;case 22:return i.lanes=0,$0(e,i,s,i.pendingProps);case 24:ka(i,mn,e.memoizedState.cache)}return ma(e,i,s)}function lg(e,i,s){if(e!==null)if(e.memoizedProps!==i.pendingProps)vn=!0;else{if(!$f(e,s)&&(i.flags&128)===0)return vn=!1,ty(e,i,s);vn=(e.flags&131072)!==0}else vn=!1,Ue&&(i.flags&1048576)!==0&&Hm(i,yo,i.index);switch(i.lanes=0,i.tag){case 16:t:{var o=i.pendingProps;if(e=Os(i.elementType),i.type=e,typeof e=="function")af(e)?(o=Is(e,o),i.tag=1,i=ig(null,i,e,o,s)):(i.tag=0,i=qf(null,i,e,o,s));else{if(e!=null){var f=e.$$typeof;if(f===A){i.tag=11,i=J0(null,i,e,o,s);break t}else if(f===D){i.tag=14,i=Q0(null,i,e,o,s);break t}}throw i=ft(e)||e,Error(a(306,i,""))}}return i;case 0:return qf(e,i,i.type,i.pendingProps,s);case 1:return o=i.type,f=Is(o,i.pendingProps),ig(e,i,o,f,s);case 3:t:{if(yt(i,i.stateNode.containerInfo),e===null)throw Error(a(387));o=i.pendingProps;var h=i.memoizedState;f=h.element,xf(e,i),Co(i,o,null,s);var y=i.memoizedState;if(o=y.cache,ka(i,mn,o),o!==h.cache&&df(i,[mn],s,!0),wo(),o=y.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:y.cache},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){i=ag(e,i,o,s);break t}else if(o!==f){f=xi(Error(a(424)),i),Mo(f),i=ag(e,i,o,s);break t}else{switch(e=i.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Qe=bi(e.firstChild),Cn=i,Ue=!0,Ga=null,Mi=!0,s=$m(i,null,o,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(Ds(),o===f){i=ma(e,i,s);break t}Un(e,i,o,s)}i=i.child}return i;case 26:return lc(e,i),e===null?(s=xv(i.type,null,i.pendingProps,null))?i.memoizedState=s:Ue||(s=i.type,e=i.pendingProps,o=Tc(K.current).createElement(s),o[dn]=i,o[wn]=e,Nn(o,s,e),pn(o),i.stateNode=o):i.memoizedState=xv(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return ie(i),e===null&&Ue&&(o=i.stateNode=gv(i.type,i.pendingProps,K.current),Cn=i,Mi=!0,f=Qe,ns(i.type)?(Nh=f,Qe=bi(o.firstChild)):Qe=f),Un(e,i,i.pendingProps.children,s),lc(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&Ue&&((f=o=Qe)&&(o=Dy(o,i.type,i.pendingProps,Mi),o!==null?(i.stateNode=o,Cn=i,Qe=bi(o.firstChild),Mi=!1,f=!0):f=!1),f||Va(i)),ie(i),f=i.type,h=i.pendingProps,y=e!==null?e.memoizedProps:null,o=h.children,Rh(f,h)?o=null:y!==null&&Rh(f,y)&&(i.flags|=32),i.memoizedState!==null&&(f=Af(e,i,WS,null,null,s),Ko._currentValue=f),lc(e,i),Un(e,i,o,s),i.child;case 6:return e===null&&Ue&&((e=s=Qe)&&(s=Uy(s,i.pendingProps,Mi),s!==null?(i.stateNode=s,Cn=i,Qe=null,e=!0):e=!1),e||Va(i)),null;case 13:return sg(e,i,s);case 4:return yt(i,i.stateNode.containerInfo),o=i.pendingProps,e===null?i.child=zs(i,null,o,s):Un(e,i,o,s),i.child;case 11:return J0(e,i,i.type,i.pendingProps,s);case 7:return Un(e,i,i.pendingProps,s),i.child;case 8:return Un(e,i,i.pendingProps.children,s),i.child;case 12:return Un(e,i,i.pendingProps.children,s),i.child;case 10:return o=i.pendingProps,ka(i,i.type,o.value),Un(e,i,o.children,s),i.child;case 9:return f=i.type._context,o=i.pendingProps.children,Ns(i),f=Dn(f),o=o(f),i.flags|=1,Un(e,i,o,s),i.child;case 14:return Q0(e,i,i.type,i.pendingProps,s);case 15:return j0(e,i,i.type,i.pendingProps,s);case 19:return og(e,i,s);case 31:return $S(e,i,s);case 22:return $0(e,i,s,i.pendingProps);case 24:return Ns(i),o=Dn(mn),e===null?(f=gf(),f===null&&(f=Je,h=pf(),f.pooledCache=h,h.refCount++,h!==null&&(f.pooledCacheLanes|=s),f=h),i.memoizedState={parent:o,cache:f},_f(i),ka(i,mn,f)):((e.lanes&s)!==0&&(xf(e,i),Co(i,null,null,s),wo()),f=e.memoizedState,h=i.memoizedState,f.parent!==o?(f={parent:o,cache:o},i.memoizedState=f,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=f),ka(i,mn,o)):(o=h.cache,ka(i,mn,o),o!==f.cache&&df(i,[mn],s,!0))),Un(e,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function ga(e){e.flags|=4}function th(e,i,s,o,f){if((i=(e.mode&32)!==0)&&(i=!1),i){if(e.flags|=16777216,(f&335544128)===f)if(e.stateNode.complete)e.flags|=8192;else if(Pg())e.flags|=8192;else throw Ps=Yl,vf}else e.flags&=-16777217}function cg(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!bv(i))if(Pg())e.flags|=8192;else throw Ps=Yl,vf}function uc(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?Tt():536870912,e.lanes|=i,br|=i)}function Po(e,i){if(!Ue)switch(e.tailMode){case"hidden":i=e.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function je(e){var i=e.alternate!==null&&e.alternate.child===e.child,s=0,o=0;if(i)for(var f=e.child;f!==null;)s|=f.lanes|f.childLanes,o|=f.subtreeFlags&65011712,o|=f.flags&65011712,f.return=e,f=f.sibling;else for(f=e.child;f!==null;)s|=f.lanes|f.childLanes,o|=f.subtreeFlags,o|=f.flags,f.return=e,f=f.sibling;return e.subtreeFlags|=o,e.childLanes=s,i}function ey(e,i,s){var o=i.pendingProps;switch(lf(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return je(i),null;case 1:return je(i),null;case 3:return s=i.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),i.memoizedState.cache!==o&&(i.flags|=2048),ha(mn),Pt(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(fr(i)?ga(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,uf())),je(i),null;case 26:var f=i.type,h=i.memoizedState;return e===null?(ga(i),h!==null?(je(i),cg(i,h)):(je(i),th(i,f,null,o,s))):h?h!==e.memoizedState?(ga(i),je(i),cg(i,h)):(je(i),i.flags&=-16777217):(e=e.memoizedProps,e!==o&&ga(i),je(i),th(i,f,e,o,s)),null;case 27:if($t(i),s=K.current,f=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==o&&ga(i);else{if(!o){if(i.stateNode===null)throw Error(a(166));return je(i),null}e=Dt.current,fr(i)?Vm(i):(e=gv(f,o,s),i.stateNode=e,ga(i))}return je(i),null;case 5:if($t(i),f=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==o&&ga(i);else{if(!o){if(i.stateNode===null)throw Error(a(166));return je(i),null}if(h=Dt.current,fr(i))Vm(i);else{var y=Tc(K.current);switch(h){case 1:h=y.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:h=y.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":h=y.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":h=y.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":h=y.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof o.is=="string"?y.createElement("select",{is:o.is}):y.createElement("select"),o.multiple?h.multiple=!0:o.size&&(h.size=o.size);break;default:h=typeof o.is=="string"?y.createElement(f,{is:o.is}):y.createElement(f)}}h[dn]=i,h[wn]=o;t:for(y=i.child;y!==null;){if(y.tag===5||y.tag===6)h.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===i)break t;for(;y.sibling===null;){if(y.return===null||y.return===i)break t;y=y.return}y.sibling.return=y.return,y=y.sibling}i.stateNode=h;t:switch(Nn(h,f,o),f){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&ga(i)}}return je(i),th(i,i.type,e===null?null:e.memoizedProps,i.pendingProps,s),null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==o&&ga(i);else{if(typeof o!="string"&&i.stateNode===null)throw Error(a(166));if(e=K.current,fr(i)){if(e=i.stateNode,s=i.memoizedProps,o=null,f=Cn,f!==null)switch(f.tag){case 27:case 5:o=f.memoizedProps}e[dn]=i,e=!!(e.nodeValue===s||o!==null&&o.suppressHydrationWarning===!0||sv(e.nodeValue,s)),e||Va(i,!0)}else e=Tc(e).createTextNode(o),e[dn]=i,i.stateNode=e}return je(i),null;case 31:if(s=i.memoizedState,e===null||e.memoizedState!==null){if(o=fr(i),s!==null){if(e===null){if(!o)throw Error(a(318));if(e=i.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(557));e[dn]=i}else Ds(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;je(i),e=!1}else s=uf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),e=!0;if(!e)return i.flags&256?(ci(i),i):(ci(i),null);if((i.flags&128)!==0)throw Error(a(558))}return je(i),null;case 13:if(o=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(f=fr(i),o!==null&&o.dehydrated!==null){if(e===null){if(!f)throw Error(a(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(a(317));f[dn]=i}else Ds(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;je(i),f=!1}else f=uf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=f),f=!0;if(!f)return i.flags&256?(ci(i),i):(ci(i),null)}return ci(i),(i.flags&128)!==0?(i.lanes=s,i):(s=o!==null,e=e!==null&&e.memoizedState!==null,s&&(o=i.child,f=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(f=o.alternate.memoizedState.cachePool.pool),h=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==f&&(o.flags|=2048)),s!==e&&s&&(i.child.flags|=8192),uc(i,i.updateQueue),je(i),null);case 4:return Pt(),e===null&&Mh(i.stateNode.containerInfo),je(i),null;case 10:return ha(i.type),je(i),null;case 19:if(Q(fn),o=i.memoizedState,o===null)return je(i),null;if(f=(i.flags&128)!==0,h=o.rendering,h===null)if(f)Po(o,!1);else{if(un!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(h=Ql(e),h!==null){for(i.flags|=128,Po(o,!1),e=h.updateQueue,i.updateQueue=e,uc(i,e),i.subtreeFlags=0,e=s,s=i.child;s!==null;)Bm(s,e),s=s.sibling;return xt(fn,fn.current&1|2),Ue&&ua(i,o.treeForkCount),i.child}e=e.sibling}o.tail!==null&&me()>mc&&(i.flags|=128,f=!0,Po(o,!1),i.lanes=4194304)}else{if(!f)if(e=Ql(h),e!==null){if(i.flags|=128,f=!0,e=e.updateQueue,i.updateQueue=e,uc(i,e),Po(o,!0),o.tail===null&&o.tailMode==="hidden"&&!h.alternate&&!Ue)return je(i),null}else 2*me()-o.renderingStartTime>mc&&s!==536870912&&(i.flags|=128,f=!0,Po(o,!1),i.lanes=4194304);o.isBackwards?(h.sibling=i.child,i.child=h):(e=o.last,e!==null?e.sibling=h:i.child=h,o.last=h)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=me(),e.sibling=null,s=fn.current,xt(fn,f?s&1|2:s&1),Ue&&ua(i,o.treeForkCount),e):(je(i),null);case 22:case 23:return ci(i),Ef(),o=i.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(i.flags|=8192):o&&(i.flags|=8192),o?(s&536870912)!==0&&(i.flags&128)===0&&(je(i),i.subtreeFlags&6&&(i.flags|=8192)):je(i),s=i.updateQueue,s!==null&&uc(i,s.retryQueue),s=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),o=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),o!==s&&(i.flags|=2048),e!==null&&Q(Ls),null;case 24:return s=null,e!==null&&(s=e.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),ha(mn),je(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function ny(e,i){switch(lf(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return ha(mn),Pt(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return $t(i),null;case 31:if(i.memoizedState!==null){if(ci(i),i.alternate===null)throw Error(a(340));Ds()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 13:if(ci(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(a(340));Ds()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return Q(fn),null;case 4:return Pt(),null;case 10:return ha(i.type),null;case 22:case 23:return ci(i),Ef(),e!==null&&Q(Ls),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return ha(mn),null;case 25:return null;default:return null}}function ug(e,i){switch(lf(i),i.tag){case 3:ha(mn),Pt();break;case 26:case 27:case 5:$t(i);break;case 4:Pt();break;case 31:i.memoizedState!==null&&ci(i);break;case 13:ci(i);break;case 19:Q(fn);break;case 10:ha(i.type);break;case 22:case 23:ci(i),Ef(),e!==null&&Q(Ls);break;case 24:ha(mn)}}function zo(e,i){try{var s=i.updateQueue,o=s!==null?s.lastEffect:null;if(o!==null){var f=o.next;s=f;do{if((s.tag&e)===e){o=void 0;var h=s.create,y=s.inst;o=h(),y.destroy=o}s=s.next}while(s!==f)}}catch(C){Xe(i,i.return,C)}}function Ka(e,i,s){try{var o=i.updateQueue,f=o!==null?o.lastEffect:null;if(f!==null){var h=f.next;o=h;do{if((o.tag&e)===e){var y=o.inst,C=y.destroy;if(C!==void 0){y.destroy=void 0,f=i;var H=s,at=C;try{at()}catch(mt){Xe(f,H,mt)}}}o=o.next}while(o!==h)}}catch(mt){Xe(i,i.return,mt)}}function fg(e){var i=e.updateQueue;if(i!==null){var s=e.stateNode;try{e0(i,s)}catch(o){Xe(e,e.return,o)}}}function hg(e,i,s){s.props=Is(e.type,e.memoizedProps),s.state=e.memoizedState;try{s.componentWillUnmount()}catch(o){Xe(e,i,o)}}function Bo(e,i){try{var s=e.ref;if(s!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof s=="function"?e.refCleanup=s(o):s.current=o}}catch(f){Xe(e,i,f)}}function Wi(e,i){var s=e.ref,o=e.refCleanup;if(s!==null)if(typeof o=="function")try{o()}catch(f){Xe(e,i,f)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(f){Xe(e,i,f)}else s.current=null}function dg(e){var i=e.type,s=e.memoizedProps,o=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&o.focus();break t;case"img":s.src?o.src=s.src:s.srcSet&&(o.srcset=s.srcSet)}}catch(f){Xe(e,e.return,f)}}function eh(e,i,s){try{var o=e.stateNode;by(o,e.type,s,i),o[wn]=i}catch(f){Xe(e,e.return,f)}}function pg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ns(e.type)||e.tag===4}function nh(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||pg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ns(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ih(e,i,s){var o=e.tag;if(o===5||o===6)e=e.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(e,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(e),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=oa));else if(o!==4&&(o===27&&ns(e.type)&&(s=e.stateNode,i=null),e=e.child,e!==null))for(ih(e,i,s),e=e.sibling;e!==null;)ih(e,i,s),e=e.sibling}function fc(e,i,s){var o=e.tag;if(o===5||o===6)e=e.stateNode,i?s.insertBefore(e,i):s.appendChild(e);else if(o!==4&&(o===27&&ns(e.type)&&(s=e.stateNode),e=e.child,e!==null))for(fc(e,i,s),e=e.sibling;e!==null;)fc(e,i,s),e=e.sibling}function mg(e){var i=e.stateNode,s=e.memoizedProps;try{for(var o=e.type,f=i.attributes;f.length;)i.removeAttributeNode(f[0]);Nn(i,o,s),i[dn]=e,i[wn]=s}catch(h){Xe(e,e.return,h)}}var va=!1,_n=!1,ah=!1,gg=typeof WeakSet=="function"?WeakSet:Set,Tn=null;function iy(e,i){if(e=e.containerInfo,Th=Nc,e=wm(e),Ju(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else t:{s=(s=e.ownerDocument)&&s.defaultView||window;var o=s.getSelection&&s.getSelection();if(o&&o.rangeCount!==0){s=o.anchorNode;var f=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{s.nodeType,h.nodeType}catch{s=null;break t}var y=0,C=-1,H=-1,at=0,mt=0,Et=e,lt=null;e:for(;;){for(var ut;Et!==s||f!==0&&Et.nodeType!==3||(C=y+f),Et!==h||o!==0&&Et.nodeType!==3||(H=y+o),Et.nodeType===3&&(y+=Et.nodeValue.length),(ut=Et.firstChild)!==null;)lt=Et,Et=ut;for(;;){if(Et===e)break e;if(lt===s&&++at===f&&(C=y),lt===h&&++mt===o&&(H=y),(ut=Et.nextSibling)!==null)break;Et=lt,lt=Et.parentNode}Et=ut}s=C===-1||H===-1?null:{start:C,end:H}}else s=null}s=s||{start:0,end:0}}else s=null;for(Ah={focusedElem:e,selectionRange:s},Nc=!1,Tn=i;Tn!==null;)if(i=Tn,e=i.child,(i.subtreeFlags&1028)!==0&&e!==null)e.return=i,Tn=e;else for(;Tn!==null;){switch(i=Tn,h=i.alternate,e=i.flags,i.tag){case 0:if((e&4)!==0&&(e=i.updateQueue,e=e!==null?e.events:null,e!==null))for(s=0;s<e.length;s++)f=e[s],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&h!==null){e=void 0,s=i,f=h.memoizedProps,h=h.memoizedState,o=s.stateNode;try{var jt=Is(s.type,f);e=o.getSnapshotBeforeUpdate(jt,h),o.__reactInternalSnapshotBeforeUpdate=e}catch(he){Xe(s,s.return,he)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,s=e.nodeType,s===9)Ch(e);else if(s===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Ch(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=i.sibling,e!==null){e.return=i.return,Tn=e;break}Tn=i.return}}function vg(e,i,s){var o=s.flags;switch(s.tag){case 0:case 11:case 15:xa(e,s),o&4&&zo(5,s);break;case 1:if(xa(e,s),o&4)if(e=s.stateNode,i===null)try{e.componentDidMount()}catch(y){Xe(s,s.return,y)}else{var f=Is(s.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(f,i,e.__reactInternalSnapshotBeforeUpdate)}catch(y){Xe(s,s.return,y)}}o&64&&fg(s),o&512&&Bo(s,s.return);break;case 3:if(xa(e,s),o&64&&(e=s.updateQueue,e!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{e0(e,i)}catch(y){Xe(s,s.return,y)}}break;case 27:i===null&&o&4&&mg(s);case 26:case 5:xa(e,s),i===null&&o&4&&dg(s),o&512&&Bo(s,s.return);break;case 12:xa(e,s);break;case 31:xa(e,s),o&4&&Sg(e,s);break;case 13:xa(e,s),o&4&&yg(e,s),o&64&&(e=s.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(s=hy.bind(null,s),Ny(e,s))));break;case 22:if(o=s.memoizedState!==null||va,!o){i=i!==null&&i.memoizedState!==null||_n,f=va;var h=_n;va=o,(_n=i)&&!h?Sa(e,s,(s.subtreeFlags&8772)!==0):xa(e,s),va=f,_n=h}break;case 30:break;default:xa(e,s)}}function _g(e){var i=e.alternate;i!==null&&(e.alternate=null,_g(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&za(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var an=null,Jn=!1;function _a(e,i,s){for(s=s.child;s!==null;)xg(e,i,s),s=s.sibling}function xg(e,i,s){if(ct&&typeof ct.onCommitFiberUnmount=="function")try{ct.onCommitFiberUnmount(ht,s)}catch{}switch(s.tag){case 26:_n||Wi(s,i),_a(e,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:_n||Wi(s,i);var o=an,f=Jn;ns(s.type)&&(an=s.stateNode,Jn=!1),_a(e,i,s),qo(s.stateNode),an=o,Jn=f;break;case 5:_n||Wi(s,i);case 6:if(o=an,f=Jn,an=null,_a(e,i,s),an=o,Jn=f,an!==null)if(Jn)try{(an.nodeType===9?an.body:an.nodeName==="HTML"?an.ownerDocument.body:an).removeChild(s.stateNode)}catch(h){Xe(s,i,h)}else try{an.removeChild(s.stateNode)}catch(h){Xe(s,i,h)}break;case 18:an!==null&&(Jn?(e=an,fv(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,s.stateNode),Nr(e)):fv(an,s.stateNode));break;case 4:o=an,f=Jn,an=s.stateNode.containerInfo,Jn=!0,_a(e,i,s),an=o,Jn=f;break;case 0:case 11:case 14:case 15:Ka(2,s,i),_n||Ka(4,s,i),_a(e,i,s);break;case 1:_n||(Wi(s,i),o=s.stateNode,typeof o.componentWillUnmount=="function"&&hg(s,i,o)),_a(e,i,s);break;case 21:_a(e,i,s);break;case 22:_n=(o=_n)||s.memoizedState!==null,_a(e,i,s),_n=o;break;default:_a(e,i,s)}}function Sg(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Nr(e)}catch(s){Xe(i,i.return,s)}}}function yg(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Nr(e)}catch(s){Xe(i,i.return,s)}}function ay(e){switch(e.tag){case 31:case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new gg),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new gg),i;default:throw Error(a(435,e.tag))}}function hc(e,i){var s=ay(e);i.forEach(function(o){if(!s.has(o)){s.add(o);var f=dy.bind(null,e,o);o.then(f,f)}})}function Qn(e,i){var s=i.deletions;if(s!==null)for(var o=0;o<s.length;o++){var f=s[o],h=e,y=i,C=y;t:for(;C!==null;){switch(C.tag){case 27:if(ns(C.type)){an=C.stateNode,Jn=!1;break t}break;case 5:an=C.stateNode,Jn=!1;break t;case 3:case 4:an=C.stateNode.containerInfo,Jn=!0;break t}C=C.return}if(an===null)throw Error(a(160));xg(h,y,f),an=null,Jn=!1,h=f.alternate,h!==null&&(h.return=null),f.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)Mg(i,e),i=i.sibling}var Ni=null;function Mg(e,i){var s=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Qn(i,e),jn(e),o&4&&(Ka(3,e,e.return),zo(3,e),Ka(5,e,e.return));break;case 1:Qn(i,e),jn(e),o&512&&(_n||s===null||Wi(s,s.return)),o&64&&va&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(s=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=s===null?o:s.concat(o))));break;case 26:var f=Ni;if(Qn(i,e),jn(e),o&512&&(_n||s===null||Wi(s,s.return)),o&4){var h=s!==null?s.memoizedState:null;if(o=e.memoizedState,s===null)if(o===null)if(e.stateNode===null){t:{o=e.type,s=e.memoizedProps,f=f.ownerDocument||f;e:switch(o){case"title":h=f.getElementsByTagName("title")[0],(!h||h[Pa]||h[dn]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=f.createElement(o),f.head.insertBefore(h,f.querySelector("head > title"))),Nn(h,o,s),h[dn]=e,pn(h),o=h;break t;case"link":var y=Mv("link","href",f).get(o+(s.href||""));if(y){for(var C=0;C<y.length;C++)if(h=y[C],h.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&h.getAttribute("rel")===(s.rel==null?null:s.rel)&&h.getAttribute("title")===(s.title==null?null:s.title)&&h.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){y.splice(C,1);break e}}h=f.createElement(o),Nn(h,o,s),f.head.appendChild(h);break;case"meta":if(y=Mv("meta","content",f).get(o+(s.content||""))){for(C=0;C<y.length;C++)if(h=y[C],h.getAttribute("content")===(s.content==null?null:""+s.content)&&h.getAttribute("name")===(s.name==null?null:s.name)&&h.getAttribute("property")===(s.property==null?null:s.property)&&h.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&h.getAttribute("charset")===(s.charSet==null?null:s.charSet)){y.splice(C,1);break e}}h=f.createElement(o),Nn(h,o,s),f.head.appendChild(h);break;default:throw Error(a(468,o))}h[dn]=e,pn(h),o=h}e.stateNode=o}else Ev(f,e.type,e.stateNode);else e.stateNode=yv(f,o,e.memoizedProps);else h!==o?(h===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):h.count--,o===null?Ev(f,e.type,e.stateNode):yv(f,o,e.memoizedProps)):o===null&&e.stateNode!==null&&eh(e,e.memoizedProps,s.memoizedProps)}break;case 27:Qn(i,e),jn(e),o&512&&(_n||s===null||Wi(s,s.return)),s!==null&&o&4&&eh(e,e.memoizedProps,s.memoizedProps);break;case 5:if(Qn(i,e),jn(e),o&512&&(_n||s===null||Wi(s,s.return)),e.flags&32){f=e.stateNode;try{si(f,"")}catch(jt){Xe(e,e.return,jt)}}o&4&&e.stateNode!=null&&(f=e.memoizedProps,eh(e,f,s!==null?s.memoizedProps:f)),o&1024&&(ah=!0);break;case 6:if(Qn(i,e),jn(e),o&4){if(e.stateNode===null)throw Error(a(162));o=e.memoizedProps,s=e.stateNode;try{s.nodeValue=o}catch(jt){Xe(e,e.return,jt)}}break;case 3:if(wc=null,f=Ni,Ni=Ac(i.containerInfo),Qn(i,e),Ni=f,jn(e),o&4&&s!==null&&s.memoizedState.isDehydrated)try{Nr(i.containerInfo)}catch(jt){Xe(e,e.return,jt)}ah&&(ah=!1,Eg(e));break;case 4:o=Ni,Ni=Ac(e.stateNode.containerInfo),Qn(i,e),jn(e),Ni=o;break;case 12:Qn(i,e),jn(e);break;case 31:Qn(i,e),jn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,hc(e,o)));break;case 13:Qn(i,e),jn(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(pc=me()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,hc(e,o)));break;case 22:f=e.memoizedState!==null;var H=s!==null&&s.memoizedState!==null,at=va,mt=_n;if(va=at||f,_n=mt||H,Qn(i,e),_n=mt,va=at,jn(e),o&8192)t:for(i=e.stateNode,i._visibility=f?i._visibility&-2:i._visibility|1,f&&(s===null||H||va||_n||Fs(e)),s=null,i=e;;){if(i.tag===5||i.tag===26){if(s===null){H=s=i;try{if(h=H.stateNode,f)y=h.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{C=H.stateNode;var Et=H.memoizedProps.style,lt=Et!=null&&Et.hasOwnProperty("display")?Et.display:null;C.style.display=lt==null||typeof lt=="boolean"?"":(""+lt).trim()}}catch(jt){Xe(H,H.return,jt)}}}else if(i.tag===6){if(s===null){H=i;try{H.stateNode.nodeValue=f?"":H.memoizedProps}catch(jt){Xe(H,H.return,jt)}}}else if(i.tag===18){if(s===null){H=i;try{var ut=H.stateNode;f?hv(ut,!0):hv(H.stateNode,!1)}catch(jt){Xe(H,H.return,jt)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}o&4&&(o=e.updateQueue,o!==null&&(s=o.retryQueue,s!==null&&(o.retryQueue=null,hc(e,s))));break;case 19:Qn(i,e),jn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,hc(e,o)));break;case 30:break;case 21:break;default:Qn(i,e),jn(e)}}function jn(e){var i=e.flags;if(i&2){try{for(var s,o=e.return;o!==null;){if(pg(o)){s=o;break}o=o.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var f=s.stateNode,h=nh(e);fc(e,h,f);break;case 5:var y=s.stateNode;s.flags&32&&(si(y,""),s.flags&=-33);var C=nh(e);fc(e,C,y);break;case 3:case 4:var H=s.stateNode.containerInfo,at=nh(e);ih(e,at,H);break;default:throw Error(a(161))}}catch(mt){Xe(e,e.return,mt)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function Eg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;Eg(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function xa(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)vg(e,i.alternate,i),i=i.sibling}function Fs(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:Ka(4,i,i.return),Fs(i);break;case 1:Wi(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&hg(i,i.return,s),Fs(i);break;case 27:qo(i.stateNode);case 26:case 5:Wi(i,i.return),Fs(i);break;case 22:i.memoizedState===null&&Fs(i);break;case 30:Fs(i);break;default:Fs(i)}e=e.sibling}}function Sa(e,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var o=i.alternate,f=e,h=i,y=h.flags;switch(h.tag){case 0:case 11:case 15:Sa(f,h,s),zo(4,h);break;case 1:if(Sa(f,h,s),o=h,f=o.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(at){Xe(o,o.return,at)}if(o=h,f=o.updateQueue,f!==null){var C=o.stateNode;try{var H=f.shared.hiddenCallbacks;if(H!==null)for(f.shared.hiddenCallbacks=null,f=0;f<H.length;f++)t0(H[f],C)}catch(at){Xe(o,o.return,at)}}s&&y&64&&fg(h),Bo(h,h.return);break;case 27:mg(h);case 26:case 5:Sa(f,h,s),s&&o===null&&y&4&&dg(h),Bo(h,h.return);break;case 12:Sa(f,h,s);break;case 31:Sa(f,h,s),s&&y&4&&Sg(f,h);break;case 13:Sa(f,h,s),s&&y&4&&yg(f,h);break;case 22:h.memoizedState===null&&Sa(f,h,s),Bo(h,h.return);break;case 30:break;default:Sa(f,h,s)}i=i.sibling}}function sh(e,i){var s=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==s&&(e!=null&&e.refCount++,s!=null&&Eo(s))}function rh(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Eo(e))}function Li(e,i,s,o){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)bg(e,i,s,o),i=i.sibling}function bg(e,i,s,o){var f=i.flags;switch(i.tag){case 0:case 11:case 15:Li(e,i,s,o),f&2048&&zo(9,i);break;case 1:Li(e,i,s,o);break;case 3:Li(e,i,s,o),f&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Eo(e)));break;case 12:if(f&2048){Li(e,i,s,o),e=i.stateNode;try{var h=i.memoizedProps,y=h.id,C=h.onPostCommit;typeof C=="function"&&C(y,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(H){Xe(i,i.return,H)}}else Li(e,i,s,o);break;case 31:Li(e,i,s,o);break;case 13:Li(e,i,s,o);break;case 23:break;case 22:h=i.stateNode,y=i.alternate,i.memoizedState!==null?h._visibility&2?Li(e,i,s,o):Io(e,i):h._visibility&2?Li(e,i,s,o):(h._visibility|=2,yr(e,i,s,o,(i.subtreeFlags&10256)!==0||!1)),f&2048&&sh(y,i);break;case 24:Li(e,i,s,o),f&2048&&rh(i.alternate,i);break;default:Li(e,i,s,o)}}function yr(e,i,s,o,f){for(f=f&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var h=e,y=i,C=s,H=o,at=y.flags;switch(y.tag){case 0:case 11:case 15:yr(h,y,C,H,f),zo(8,y);break;case 23:break;case 22:var mt=y.stateNode;y.memoizedState!==null?mt._visibility&2?yr(h,y,C,H,f):Io(h,y):(mt._visibility|=2,yr(h,y,C,H,f)),f&&at&2048&&sh(y.alternate,y);break;case 24:yr(h,y,C,H,f),f&&at&2048&&rh(y.alternate,y);break;default:yr(h,y,C,H,f)}i=i.sibling}}function Io(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=e,o=i,f=o.flags;switch(o.tag){case 22:Io(s,o),f&2048&&sh(o.alternate,o);break;case 24:Io(s,o),f&2048&&rh(o.alternate,o);break;default:Io(s,o)}i=i.sibling}}var Fo=8192;function Mr(e,i,s){if(e.subtreeFlags&Fo)for(e=e.child;e!==null;)Tg(e,i,s),e=e.sibling}function Tg(e,i,s){switch(e.tag){case 26:Mr(e,i,s),e.flags&Fo&&e.memoizedState!==null&&Xy(s,Ni,e.memoizedState,e.memoizedProps);break;case 5:Mr(e,i,s);break;case 3:case 4:var o=Ni;Ni=Ac(e.stateNode.containerInfo),Mr(e,i,s),Ni=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=Fo,Fo=16777216,Mr(e,i,s),Fo=o):Mr(e,i,s));break;default:Mr(e,i,s)}}function Ag(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function Ho(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var o=i[s];Tn=o,wg(o,e)}Ag(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Rg(e),e=e.sibling}function Rg(e){switch(e.tag){case 0:case 11:case 15:Ho(e),e.flags&2048&&Ka(9,e,e.return);break;case 3:Ho(e);break;case 12:Ho(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,dc(e)):Ho(e);break;default:Ho(e)}}function dc(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var o=i[s];Tn=o,wg(o,e)}Ag(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:Ka(8,i,i.return),dc(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,dc(i));break;default:dc(i)}e=e.sibling}}function wg(e,i){for(;Tn!==null;){var s=Tn;switch(s.tag){case 0:case 11:case 15:Ka(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var o=s.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Eo(s.memoizedState.cache)}if(o=s.child,o!==null)o.return=s,Tn=o;else t:for(s=e;Tn!==null;){o=Tn;var f=o.sibling,h=o.return;if(_g(o),o===s){Tn=null;break t}if(f!==null){f.return=h,Tn=f;break t}Tn=h}}}var sy={getCacheForType:function(e){var i=Dn(mn),s=i.data.get(e);return s===void 0&&(s=e(),i.data.set(e,s)),s},cacheSignal:function(){return Dn(mn).controller.signal}},ry=typeof WeakMap=="function"?WeakMap:Map,Be=0,Je=null,Re=null,Ce=0,ke=0,ui=null,Ja=!1,Er=!1,oh=!1,ya=0,un=0,Qa=0,Hs=0,lh=0,fi=0,br=0,Go=null,$n=null,ch=!1,pc=0,Cg=0,mc=1/0,gc=null,ja=null,yn=0,$a=null,Tr=null,Ma=0,uh=0,fh=null,Dg=null,Vo=0,hh=null;function hi(){return(Be&2)!==0&&Ce!==0?Ce&-Ce:I.T!==null?_h():uo()}function Ug(){if(fi===0)if((Ce&536870912)===0||Ue){var e=pe;pe<<=1,(pe&3932160)===0&&(pe=262144),fi=e}else fi=536870912;return e=li.current,e!==null&&(e.flags|=32),fi}function ti(e,i,s){(e===Je&&(ke===2||ke===9)||e.cancelPendingCommit!==null)&&(Ar(e,0),ts(e,Ce,fi,!1)),Zt(e,s),((Be&2)===0||e!==Je)&&(e===Je&&((Be&2)===0&&(Hs|=s),un===4&&ts(e,Ce,fi,!1)),qi(e))}function Ng(e,i,s){if((Be&6)!==0)throw Error(a(327));var o=!s&&(i&127)===0&&(i&e.expiredLanes)===0||Ct(e,i),f=o?cy(e,i):ph(e,i,!0),h=o;do{if(f===0){Er&&!o&&ts(e,i,0,!1);break}else{if(s=e.current.alternate,h&&!oy(s)){f=ph(e,i,!1),h=!1;continue}if(f===2){if(h=i,e.errorRecoveryDisabledLanes&h)var y=0;else y=e.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){i=y;t:{var C=e;f=Go;var H=C.current.memoizedState.isDehydrated;if(H&&(Ar(C,y).flags|=256),y=ph(C,y,!1),y!==2){if(oh&&!H){C.errorRecoveryDisabledLanes|=h,Hs|=h,f=4;break t}h=$n,$n=f,h!==null&&($n===null?$n=h:$n.push.apply($n,h))}f=y}if(h=!1,f!==2)continue}}if(f===1){Ar(e,0),ts(e,i,0,!0);break}t:{switch(o=e,h=f,h){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:ts(o,i,fi,!Ja);break t;case 2:$n=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(f=pc+300-me(),10<f)){if(ts(o,i,fi,!Ja),gt(o,0,!0)!==0)break t;Ma=i,o.timeoutHandle=cv(Lg.bind(null,o,s,$n,gc,ch,i,fi,Hs,br,Ja,h,"Throttled",-0,0),f);break t}Lg(o,s,$n,gc,ch,i,fi,Hs,br,Ja,h,null,-0,0)}}break}while(!0);qi(e)}function Lg(e,i,s,o,f,h,y,C,H,at,mt,Et,lt,ut){if(e.timeoutHandle=-1,Et=i.subtreeFlags,Et&8192||(Et&16785408)===16785408){Et={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:oa},Tg(i,h,Et);var jt=(h&62914560)===h?pc-me():(h&4194048)===h?Cg-me():0;if(jt=Wy(Et,jt),jt!==null){Ma=h,e.cancelPendingCommit=jt(Gg.bind(null,e,i,h,s,o,f,y,C,H,mt,Et,null,lt,ut)),ts(e,h,y,!at);return}}Gg(e,i,h,s,o,f,y,C,H)}function oy(e){for(var i=e;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var o=0;o<s.length;o++){var f=s[o],h=f.getSnapshot;f=f.value;try{if(!ri(h(),f))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ts(e,i,s,o){i&=~lh,i&=~Hs,e.suspendedLanes|=i,e.pingedLanes&=~i,o&&(e.warmLanes|=i),o=e.expirationTimes;for(var f=i;0<f;){var h=31-Wt(f),y=1<<h;o[h]=-1,f&=~y}s!==0&&Fe(e,s,i)}function vc(){return(Be&6)===0?(ko(0),!1):!0}function dh(){if(Re!==null){if(ke===0)var e=Re.return;else e=Re,fa=Us=null,Cf(e),gr=null,To=0,e=Re;for(;e!==null;)ug(e.alternate,e),e=e.return;Re=null}}function Ar(e,i){var s=e.timeoutHandle;s!==-1&&(e.timeoutHandle=-1,Ry(s)),s=e.cancelPendingCommit,s!==null&&(e.cancelPendingCommit=null,s()),Ma=0,dh(),Je=e,Re=s=ca(e.current,null),Ce=i,ke=0,ui=null,Ja=!1,Er=Ct(e,i),oh=!1,br=fi=lh=Hs=Qa=un=0,$n=Go=null,ch=!1,(i&8)!==0&&(i|=i&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=i;0<o;){var f=31-Wt(o),h=1<<f;i|=e[f],o&=~h}return ya=i,Il(),s}function Og(e,i){Se=null,I.H=Lo,i===mr||i===ql?(i=Jm(),ke=3):i===vf?(i=Jm(),ke=4):ke=i===Wf?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,ui=i,Re===null&&(un=1,rc(e,xi(i,e.current)))}function Pg(){var e=li.current;return e===null?!0:(Ce&4194048)===Ce?Ei===null:(Ce&62914560)===Ce||(Ce&536870912)!==0?e===Ei:!1}function zg(){var e=I.H;return I.H=Lo,e===null?Lo:e}function Bg(){var e=I.A;return I.A=sy,e}function _c(){un=4,Ja||(Ce&4194048)!==Ce&&li.current!==null||(Er=!0),(Qa&134217727)===0&&(Hs&134217727)===0||Je===null||ts(Je,Ce,fi,!1)}function ph(e,i,s){var o=Be;Be|=2;var f=zg(),h=Bg();(Je!==e||Ce!==i)&&(gc=null,Ar(e,i)),i=!1;var y=un;t:do try{if(ke!==0&&Re!==null){var C=Re,H=ui;switch(ke){case 8:dh(),y=6;break t;case 3:case 2:case 9:case 6:li.current===null&&(i=!0);var at=ke;if(ke=0,ui=null,Rr(e,C,H,at),s&&Er){y=0;break t}break;default:at=ke,ke=0,ui=null,Rr(e,C,H,at)}}ly(),y=un;break}catch(mt){Og(e,mt)}while(!0);return i&&e.shellSuspendCounter++,fa=Us=null,Be=o,I.H=f,I.A=h,Re===null&&(Je=null,Ce=0,Il()),y}function ly(){for(;Re!==null;)Ig(Re)}function cy(e,i){var s=Be;Be|=2;var o=zg(),f=Bg();Je!==e||Ce!==i?(gc=null,mc=me()+500,Ar(e,i)):Er=Ct(e,i);t:do try{if(ke!==0&&Re!==null){i=Re;var h=ui;e:switch(ke){case 1:ke=0,ui=null,Rr(e,i,h,1);break;case 2:case 9:if(Zm(h)){ke=0,ui=null,Fg(i);break}i=function(){ke!==2&&ke!==9||Je!==e||(ke=7),qi(e)},h.then(i,i);break t;case 3:ke=7;break t;case 4:ke=5;break t;case 7:Zm(h)?(ke=0,ui=null,Fg(i)):(ke=0,ui=null,Rr(e,i,h,7));break;case 5:var y=null;switch(Re.tag){case 26:y=Re.memoizedState;case 5:case 27:var C=Re;if(y?bv(y):C.stateNode.complete){ke=0,ui=null;var H=C.sibling;if(H!==null)Re=H;else{var at=C.return;at!==null?(Re=at,xc(at)):Re=null}break e}}ke=0,ui=null,Rr(e,i,h,5);break;case 6:ke=0,ui=null,Rr(e,i,h,6);break;case 8:dh(),un=6;break t;default:throw Error(a(462))}}uy();break}catch(mt){Og(e,mt)}while(!0);return fa=Us=null,I.H=o,I.A=f,Be=s,Re!==null?0:(Je=null,Ce=0,Il(),un)}function uy(){for(;Re!==null&&!fe();)Ig(Re)}function Ig(e){var i=lg(e.alternate,e,ya);e.memoizedProps=e.pendingProps,i===null?xc(e):Re=i}function Fg(e){var i=e,s=i.alternate;switch(i.tag){case 15:case 0:i=ng(s,i,i.pendingProps,i.type,void 0,Ce);break;case 11:i=ng(s,i,i.pendingProps,i.type.render,i.ref,Ce);break;case 5:Cf(i);default:ug(s,i),i=Re=Bm(i,ya),i=lg(s,i,ya)}e.memoizedProps=e.pendingProps,i===null?xc(e):Re=i}function Rr(e,i,s,o){fa=Us=null,Cf(i),gr=null,To=0;var f=i.return;try{if(jS(e,f,i,s,Ce)){un=1,rc(e,xi(s,e.current)),Re=null;return}}catch(h){if(f!==null)throw Re=f,h;un=1,rc(e,xi(s,e.current)),Re=null;return}i.flags&32768?(Ue||o===1?e=!0:Er||(Ce&536870912)!==0?e=!1:(Ja=e=!0,(o===2||o===9||o===3||o===6)&&(o=li.current,o!==null&&o.tag===13&&(o.flags|=16384))),Hg(i,e)):xc(i)}function xc(e){var i=e;do{if((i.flags&32768)!==0){Hg(i,Ja);return}e=i.return;var s=ey(i.alternate,i,ya);if(s!==null){Re=s;return}if(i=i.sibling,i!==null){Re=i;return}Re=i=e}while(i!==null);un===0&&(un=5)}function Hg(e,i){do{var s=ny(e.alternate,e);if(s!==null){s.flags&=32767,Re=s;return}if(s=e.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(e=e.sibling,e!==null)){Re=e;return}Re=e=s}while(e!==null);un=6,Re=null}function Gg(e,i,s,o,f,h,y,C,H){e.cancelPendingCommit=null;do Sc();while(yn!==0);if((Be&6)!==0)throw Error(a(327));if(i!==null){if(i===e.current)throw Error(a(177));if(h=i.lanes|i.childLanes,h|=ef,tn(e,s,h,y,C,H),e===Je&&(Re=Je=null,Ce=0),Tr=i,$a=e,Ma=s,uh=h,fh=f,Dg=o,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,py(j,function(){return qg(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||o){o=I.T,I.T=null,f=F.p,F.p=2,y=Be,Be|=4;try{iy(e,i,s)}finally{Be=y,F.p=f,I.T=o}}yn=1,Vg(),kg(),Xg()}}function Vg(){if(yn===1){yn=0;var e=$a,i=Tr,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=I.T,I.T=null;var o=F.p;F.p=2;var f=Be;Be|=4;try{Mg(i,e);var h=Ah,y=wm(e.containerInfo),C=h.focusedElem,H=h.selectionRange;if(y!==C&&C&&C.ownerDocument&&Rm(C.ownerDocument.documentElement,C)){if(H!==null&&Ju(C)){var at=H.start,mt=H.end;if(mt===void 0&&(mt=at),"selectionStart"in C)C.selectionStart=at,C.selectionEnd=Math.min(mt,C.value.length);else{var Et=C.ownerDocument||document,lt=Et&&Et.defaultView||window;if(lt.getSelection){var ut=lt.getSelection(),jt=C.textContent.length,he=Math.min(H.start,jt),Ze=H.end===void 0?he:Math.min(H.end,jt);!ut.extend&&he>Ze&&(y=Ze,Ze=he,he=y);var $=Am(C,he),W=Am(C,Ze);if($&&W&&(ut.rangeCount!==1||ut.anchorNode!==$.node||ut.anchorOffset!==$.offset||ut.focusNode!==W.node||ut.focusOffset!==W.offset)){var it=Et.createRange();it.setStart($.node,$.offset),ut.removeAllRanges(),he>Ze?(ut.addRange(it),ut.extend(W.node,W.offset)):(it.setEnd(W.node,W.offset),ut.addRange(it))}}}}for(Et=[],ut=C;ut=ut.parentNode;)ut.nodeType===1&&Et.push({element:ut,left:ut.scrollLeft,top:ut.scrollTop});for(typeof C.focus=="function"&&C.focus(),C=0;C<Et.length;C++){var _t=Et[C];_t.element.scrollLeft=_t.left,_t.element.scrollTop=_t.top}}Nc=!!Th,Ah=Th=null}finally{Be=f,F.p=o,I.T=s}}e.current=i,yn=2}}function kg(){if(yn===2){yn=0;var e=$a,i=Tr,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=I.T,I.T=null;var o=F.p;F.p=2;var f=Be;Be|=4;try{vg(e,i.alternate,i)}finally{Be=f,F.p=o,I.T=s}}yn=3}}function Xg(){if(yn===4||yn===3){yn=0,X();var e=$a,i=Tr,s=Ma,o=Dg;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?yn=5:(yn=0,Tr=$a=null,Wg(e,e.pendingLanes));var f=e.pendingLanes;if(f===0&&(ja=null),co(s),i=i.stateNode,ct&&typeof ct.onCommitFiberRoot=="function")try{ct.onCommitFiberRoot(ht,i,void 0,(i.current.flags&128)===128)}catch{}if(o!==null){i=I.T,f=F.p,F.p=2,I.T=null;try{for(var h=e.onRecoverableError,y=0;y<o.length;y++){var C=o[y];h(C.value,{componentStack:C.stack})}}finally{I.T=i,F.p=f}}(Ma&3)!==0&&Sc(),qi(e),f=e.pendingLanes,(s&261930)!==0&&(f&42)!==0?e===hh?Vo++:(Vo=0,hh=e):Vo=0,ko(0)}}function Wg(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,Eo(i)))}function Sc(){return Vg(),kg(),Xg(),qg()}function qg(){if(yn!==5)return!1;var e=$a,i=uh;uh=0;var s=co(Ma),o=I.T,f=F.p;try{F.p=32>s?32:s,I.T=null,s=fh,fh=null;var h=$a,y=Ma;if(yn=0,Tr=$a=null,Ma=0,(Be&6)!==0)throw Error(a(331));var C=Be;if(Be|=4,Rg(h.current),bg(h,h.current,y,s),Be=C,ko(0,!1),ct&&typeof ct.onPostCommitFiberRoot=="function")try{ct.onPostCommitFiberRoot(ht,h)}catch{}return!0}finally{F.p=f,I.T=o,Wg(e,i)}}function Yg(e,i,s){i=xi(s,i),i=Xf(e.stateNode,i,2),e=qa(e,i,2),e!==null&&(Zt(e,2),qi(e))}function Xe(e,i,s){if(e.tag===3)Yg(e,e,s);else for(;i!==null;){if(i.tag===3){Yg(i,e,s);break}else if(i.tag===1){var o=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(ja===null||!ja.has(o))){e=xi(s,e),s=Z0(2),o=qa(i,s,2),o!==null&&(K0(s,o,i,e),Zt(o,2),qi(o));break}}i=i.return}}function mh(e,i,s){var o=e.pingCache;if(o===null){o=e.pingCache=new ry;var f=new Set;o.set(i,f)}else f=o.get(i),f===void 0&&(f=new Set,o.set(i,f));f.has(s)||(oh=!0,f.add(s),e=fy.bind(null,e,i,s),i.then(e,e))}function fy(e,i,s){var o=e.pingCache;o!==null&&o.delete(i),e.pingedLanes|=e.suspendedLanes&s,e.warmLanes&=~s,Je===e&&(Ce&s)===s&&(un===4||un===3&&(Ce&62914560)===Ce&&300>me()-pc?(Be&2)===0&&Ar(e,0):lh|=s,br===Ce&&(br=0)),qi(e)}function Zg(e,i){i===0&&(i=Tt()),e=ws(e,i),e!==null&&(Zt(e,i),qi(e))}function hy(e){var i=e.memoizedState,s=0;i!==null&&(s=i.retryLane),Zg(e,s)}function dy(e,i){var s=0;switch(e.tag){case 31:case 13:var o=e.stateNode,f=e.memoizedState;f!==null&&(s=f.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(a(314))}o!==null&&o.delete(i),Zg(e,s)}function py(e,i){return Jt(e,i)}var yc=null,wr=null,gh=!1,Mc=!1,vh=!1,es=0;function qi(e){e!==wr&&e.next===null&&(wr===null?yc=wr=e:wr=wr.next=e),Mc=!0,gh||(gh=!0,gy())}function ko(e,i){if(!vh&&Mc){vh=!0;do for(var s=!1,o=yc;o!==null;){if(e!==0){var f=o.pendingLanes;if(f===0)var h=0;else{var y=o.suspendedLanes,C=o.pingedLanes;h=(1<<31-Wt(42|e)+1)-1,h&=f&~(y&~C),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(s=!0,jg(o,h))}else h=Ce,h=gt(o,o===Je?h:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(h&3)===0||Ct(o,h)||(s=!0,jg(o,h));o=o.next}while(s);vh=!1}}function my(){Kg()}function Kg(){Mc=gh=!1;var e=0;es!==0&&Ay()&&(e=es);for(var i=me(),s=null,o=yc;o!==null;){var f=o.next,h=Jg(o,i);h===0?(o.next=null,s===null?yc=f:s.next=f,f===null&&(wr=s)):(s=o,(e!==0||(h&3)!==0)&&(Mc=!0)),o=f}yn!==0&&yn!==5||ko(e),es!==0&&(es=0)}function Jg(e,i){for(var s=e.suspendedLanes,o=e.pingedLanes,f=e.expirationTimes,h=e.pendingLanes&-62914561;0<h;){var y=31-Wt(h),C=1<<y,H=f[y];H===-1?((C&s)===0||(C&o)!==0)&&(f[y]=Xt(C,i)):H<=i&&(e.expiredLanes|=C),h&=~C}if(i=Je,s=Ce,s=gt(e,e===i?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,s===0||e===i&&(ke===2||ke===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&ue(o),e.callbackNode=null,e.callbackPriority=0;if((s&3)===0||Ct(e,s)){if(i=s&-s,i===e.callbackPriority)return i;switch(o!==null&&ue(o),co(s)){case 2:case 8:s=b;break;case 32:s=j;break;case 268435456:s=dt;break;default:s=j}return o=Qg.bind(null,e),s=Jt(s,o),e.callbackPriority=i,e.callbackNode=s,i}return o!==null&&o!==null&&ue(o),e.callbackPriority=2,e.callbackNode=null,2}function Qg(e,i){if(yn!==0&&yn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var s=e.callbackNode;if(Sc()&&e.callbackNode!==s)return null;var o=Ce;return o=gt(e,e===Je?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(Ng(e,o,i),Jg(e,me()),e.callbackNode!=null&&e.callbackNode===s?Qg.bind(null,e):null)}function jg(e,i){if(Sc())return null;Ng(e,i,!0)}function gy(){wy(function(){(Be&6)!==0?Jt(L,my):Kg()})}function _h(){if(es===0){var e=dr;e===0&&(e=ae,ae<<=1,(ae&261888)===0&&(ae=256)),es=e}return es}function $g(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:bs(""+e)}function tv(e,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,e.id&&s.setAttribute("form",e.id),i.parentNode.insertBefore(s,i),e=new FormData(e),s.parentNode.removeChild(s),e}function vy(e,i,s,o,f){if(i==="submit"&&s&&s.stateNode===f){var h=$g((f[wn]||null).action),y=o.submitter;y&&(i=(i=y[wn]||null)?$g(i.formAction):y.getAttribute("formAction"),i!==null&&(h=i,y=null));var C=new Ol("action","action",null,o,f);e.push({event:C,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(es!==0){var H=y?tv(f,y):new FormData(f);If(s,{pending:!0,data:H,method:f.method,action:h},null,H)}}else typeof h=="function"&&(C.preventDefault(),H=y?tv(f,y):new FormData(f),If(s,{pending:!0,data:H,method:f.method,action:h},h,H))},currentTarget:f}]})}}for(var xh=0;xh<tf.length;xh++){var Sh=tf[xh],_y=Sh.toLowerCase(),xy=Sh[0].toUpperCase()+Sh.slice(1);Ui(_y,"on"+xy)}Ui(Um,"onAnimationEnd"),Ui(Nm,"onAnimationIteration"),Ui(Lm,"onAnimationStart"),Ui("dblclick","onDoubleClick"),Ui("focusin","onFocus"),Ui("focusout","onBlur"),Ui(PS,"onTransitionRun"),Ui(zS,"onTransitionStart"),Ui(BS,"onTransitionCancel"),Ui(Om,"onTransitionEnd"),ot("onMouseEnter",["mouseout","mouseover"]),ot("onMouseLeave",["mouseout","mouseover"]),ot("onPointerEnter",["pointerout","pointerover"]),ot("onPointerLeave",["pointerout","pointerover"]),J("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),J("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),J("onBeforeInput",["compositionend","keypress","textInput","paste"]),J("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),J("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),J("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Sy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Xo));function ev(e,i){i=(i&4)!==0;for(var s=0;s<e.length;s++){var o=e[s],f=o.event;o=o.listeners;t:{var h=void 0;if(i)for(var y=o.length-1;0<=y;y--){var C=o[y],H=C.instance,at=C.currentTarget;if(C=C.listener,H!==h&&f.isPropagationStopped())break t;h=C,f.currentTarget=at;try{h(f)}catch(mt){Bl(mt)}f.currentTarget=null,h=H}else for(y=0;y<o.length;y++){if(C=o[y],H=C.instance,at=C.currentTarget,C=C.listener,H!==h&&f.isPropagationStopped())break t;h=C,f.currentTarget=at;try{h(f)}catch(mt){Bl(mt)}f.currentTarget=null,h=H}}}}function we(e,i){var s=i[ys];s===void 0&&(s=i[ys]=new Set);var o=e+"__bubble";s.has(o)||(nv(i,e,2,!1),s.add(o))}function yh(e,i,s){var o=0;i&&(o|=4),nv(s,e,o,i)}var Ec="_reactListening"+Math.random().toString(36).slice(2);function Mh(e){if(!e[Ec]){e[Ec]=!0,Dl.forEach(function(s){s!=="selectionchange"&&(Sy.has(s)||yh(s,!1,e),yh(s,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[Ec]||(i[Ec]=!0,yh("selectionchange",!1,i))}}function nv(e,i,s,o){switch(Uv(i)){case 2:var f=Zy;break;case 8:f=Ky;break;default:f=Bh}s=f.bind(null,i,s,e),f=void 0,!Gu||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),o?f!==void 0?e.addEventListener(i,s,{capture:!0,passive:f}):e.addEventListener(i,s,!0):f!==void 0?e.addEventListener(i,s,{passive:f}):e.addEventListener(i,s,!1)}function Eh(e,i,s,o,f){var h=o;if((i&1)===0&&(i&2)===0&&o!==null)t:for(;;){if(o===null)return;var y=o.tag;if(y===3||y===4){var C=o.stateNode.containerInfo;if(C===f)break;if(y===4)for(y=o.return;y!==null;){var H=y.tag;if((H===3||H===4)&&y.stateNode.containerInfo===f)return;y=y.return}for(;C!==null;){if(y=sa(C),y===null)return;if(H=y.tag,H===5||H===6||H===26||H===27){o=h=y;continue t}C=C.parentNode}}o=o.return}om(function(){var at=h,mt=Fu(s),Et=[];t:{var lt=Pm.get(e);if(lt!==void 0){var ut=Ol,jt=e;switch(e){case"keypress":if(Nl(s)===0)break t;case"keydown":case"keyup":ut=dS;break;case"focusin":jt="focus",ut=Wu;break;case"focusout":jt="blur",ut=Wu;break;case"beforeblur":case"afterblur":ut=Wu;break;case"click":if(s.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ut=um;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ut=eS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ut=gS;break;case Um:case Nm:case Lm:ut=aS;break;case Om:ut=_S;break;case"scroll":case"scrollend":ut=$x;break;case"wheel":ut=SS;break;case"copy":case"cut":case"paste":ut=rS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ut=hm;break;case"toggle":case"beforetoggle":ut=MS}var he=(i&4)!==0,Ze=!he&&(e==="scroll"||e==="scrollend"),$=he?lt!==null?lt+"Capture":null:lt;he=[];for(var W=at,it;W!==null;){var _t=W;if(it=_t.stateNode,_t=_t.tag,_t!==5&&_t!==26&&_t!==27||it===null||$===null||(_t=fo(W,$),_t!=null&&he.push(Wo(W,_t,it))),Ze)break;W=W.return}0<he.length&&(lt=new ut(lt,jt,null,s,mt),Et.push({event:lt,listeners:he}))}}if((i&7)===0){t:{if(lt=e==="mouseover"||e==="pointerover",ut=e==="mouseout"||e==="pointerout",lt&&s!==Iu&&(jt=s.relatedTarget||s.fromElement)&&(sa(jt)||jt[Zn]))break t;if((ut||lt)&&(lt=mt.window===mt?mt:(lt=mt.ownerDocument)?lt.defaultView||lt.parentWindow:window,ut?(jt=s.relatedTarget||s.toElement,ut=at,jt=jt?sa(jt):null,jt!==null&&(Ze=c(jt),he=jt.tag,jt!==Ze||he!==5&&he!==27&&he!==6)&&(jt=null)):(ut=null,jt=at),ut!==jt)){if(he=um,_t="onMouseLeave",$="onMouseEnter",W="mouse",(e==="pointerout"||e==="pointerover")&&(he=hm,_t="onPointerLeave",$="onPointerEnter",W="pointer"),Ze=ut==null?lt:Es(ut),it=jt==null?lt:Es(jt),lt=new he(_t,W+"leave",ut,s,mt),lt.target=Ze,lt.relatedTarget=it,_t=null,sa(mt)===at&&(he=new he($,W+"enter",jt,s,mt),he.target=it,he.relatedTarget=Ze,_t=he),Ze=_t,ut&&jt)e:{for(he=yy,$=ut,W=jt,it=0,_t=$;_t;_t=he(_t))it++;_t=0;for(var ce=W;ce;ce=he(ce))_t++;for(;0<it-_t;)$=he($),it--;for(;0<_t-it;)W=he(W),_t--;for(;it--;){if($===W||W!==null&&$===W.alternate){he=$;break e}$=he($),W=he(W)}he=null}else he=null;ut!==null&&iv(Et,lt,ut,he,!1),jt!==null&&Ze!==null&&iv(Et,Ze,jt,he,!0)}}t:{if(lt=at?Es(at):window,ut=lt.nodeName&&lt.nodeName.toLowerCase(),ut==="select"||ut==="input"&&lt.type==="file")var Pe=Sm;else if(_m(lt))if(ym)Pe=NS;else{Pe=DS;var ne=CS}else ut=lt.nodeName,!ut||ut.toLowerCase()!=="input"||lt.type!=="checkbox"&&lt.type!=="radio"?at&&Ie(at.elementType)&&(Pe=Sm):Pe=US;if(Pe&&(Pe=Pe(e,at))){xm(Et,Pe,s,mt);break t}ne&&ne(e,lt,at),e==="focusout"&&at&&lt.type==="number"&&at.memoizedProps.value!=null&&Ae(lt,"number",lt.value)}switch(ne=at?Es(at):window,e){case"focusin":(_m(ne)||ne.contentEditable==="true")&&(sr=ne,Qu=at,So=null);break;case"focusout":So=Qu=sr=null;break;case"mousedown":ju=!0;break;case"contextmenu":case"mouseup":case"dragend":ju=!1,Cm(Et,s,mt);break;case"selectionchange":if(OS)break;case"keydown":case"keyup":Cm(Et,s,mt)}var ye;if(Yu)t:{switch(e){case"compositionstart":var De="onCompositionStart";break t;case"compositionend":De="onCompositionEnd";break t;case"compositionupdate":De="onCompositionUpdate";break t}De=void 0}else ar?gm(e,s)&&(De="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(De="onCompositionStart");De&&(dm&&s.locale!=="ko"&&(ar||De!=="onCompositionStart"?De==="onCompositionEnd"&&ar&&(ye=lm()):(Fa=mt,Vu="value"in Fa?Fa.value:Fa.textContent,ar=!0)),ne=bc(at,De),0<ne.length&&(De=new fm(De,e,null,s,mt),Et.push({event:De,listeners:ne}),ye?De.data=ye:(ye=vm(s),ye!==null&&(De.data=ye)))),(ye=bS?TS(e,s):AS(e,s))&&(De=bc(at,"onBeforeInput"),0<De.length&&(ne=new fm("onBeforeInput","beforeinput",null,s,mt),Et.push({event:ne,listeners:De}),ne.data=ye)),vy(Et,e,at,s,mt)}ev(Et,i)})}function Wo(e,i,s){return{instance:e,listener:i,currentTarget:s}}function bc(e,i){for(var s=i+"Capture",o=[];e!==null;){var f=e,h=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||h===null||(f=fo(e,s),f!=null&&o.unshift(Wo(e,f,h)),f=fo(e,i),f!=null&&o.push(Wo(e,f,h))),e.tag===3)return o;e=e.return}return[]}function yy(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function iv(e,i,s,o,f){for(var h=i._reactName,y=[];s!==null&&s!==o;){var C=s,H=C.alternate,at=C.stateNode;if(C=C.tag,H!==null&&H===o)break;C!==5&&C!==26&&C!==27||at===null||(H=at,f?(at=fo(s,h),at!=null&&y.unshift(Wo(s,at,H))):f||(at=fo(s,h),at!=null&&y.push(Wo(s,at,H)))),s=s.return}y.length!==0&&e.push({event:i,listeners:y})}var My=/\r\n?/g,Ey=/\u0000|\uFFFD/g;function av(e){return(typeof e=="string"?e:""+e).replace(My,`
`).replace(Ey,"")}function sv(e,i){return i=av(i),av(e)===i}function Ye(e,i,s,o,f,h){switch(s){case"children":typeof o=="string"?i==="body"||i==="textarea"&&o===""||si(e,o):(typeof o=="number"||typeof o=="bigint")&&i!=="body"&&si(e,""+o);break;case"className":Qt(e,"class",o);break;case"tabIndex":Qt(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Qt(e,s,o);break;case"style":Di(e,o,h);break;case"data":if(i!=="object"){Qt(e,"data",o);break}case"src":case"href":if(o===""&&(i!=="a"||s!=="href")){e.removeAttribute(s);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(s);break}o=bs(""+o),e.setAttribute(s,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(s==="formAction"?(i!=="input"&&Ye(e,i,"name",f.name,f,null),Ye(e,i,"formEncType",f.formEncType,f,null),Ye(e,i,"formMethod",f.formMethod,f,null),Ye(e,i,"formTarget",f.formTarget,f,null)):(Ye(e,i,"encType",f.encType,f,null),Ye(e,i,"method",f.method,f,null),Ye(e,i,"target",f.target,f,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(s);break}o=bs(""+o),e.setAttribute(s,o);break;case"onClick":o!=null&&(e.onclick=oa);break;case"onScroll":o!=null&&we("scroll",e);break;case"onScrollEnd":o!=null&&we("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(s=o.__html,s!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}s=bs(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(s,""+o):e.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(s,""):e.removeAttribute(s);break;case"capture":case"download":o===!0?e.setAttribute(s,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(s,o):e.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(s,o):e.removeAttribute(s);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(s):e.setAttribute(s,o);break;case"popover":we("beforetoggle",e),we("toggle",e),It(e,"popover",o);break;case"xlinkActuate":Kt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Kt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Kt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Kt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Kt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Kt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Kt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Kt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Kt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":It(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=Vi.get(s)||s,It(e,s,o))}}function bh(e,i,s,o,f,h){switch(s){case"style":Di(e,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(s=o.__html,s!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"children":typeof o=="string"?si(e,o):(typeof o=="number"||typeof o=="bigint")&&si(e,""+o);break;case"onScroll":o!=null&&we("scroll",e);break;case"onScrollEnd":o!=null&&we("scrollend",e);break;case"onClick":o!=null&&(e.onclick=oa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!w.hasOwnProperty(s))t:{if(s[0]==="o"&&s[1]==="n"&&(f=s.endsWith("Capture"),i=s.slice(2,f?s.length-7:void 0),h=e[wn]||null,h=h!=null?h[s]:null,typeof h=="function"&&e.removeEventListener(i,h,f),typeof o=="function")){typeof h!="function"&&h!==null&&(s in e?e[s]=null:e.hasAttribute(s)&&e.removeAttribute(s)),e.addEventListener(i,o,f);break t}s in e?e[s]=o:o===!0?e.setAttribute(s,""):It(e,s,o)}}}function Nn(e,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":we("error",e),we("load",e);var o=!1,f=!1,h;for(h in s)if(s.hasOwnProperty(h)){var y=s[h];if(y!=null)switch(h){case"src":o=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Ye(e,i,h,y,s,null)}}f&&Ye(e,i,"srcSet",s.srcSet,s,null),o&&Ye(e,i,"src",s.src,s,null);return;case"input":we("invalid",e);var C=h=y=f=null,H=null,at=null;for(o in s)if(s.hasOwnProperty(o)){var mt=s[o];if(mt!=null)switch(o){case"name":f=mt;break;case"type":y=mt;break;case"checked":H=mt;break;case"defaultChecked":at=mt;break;case"value":h=mt;break;case"defaultValue":C=mt;break;case"children":case"dangerouslySetInnerHTML":if(mt!=null)throw Error(a(137,i));break;default:Ye(e,i,o,mt,s,null)}}Pn(e,h,C,H,at,y,f,!1);return;case"select":we("invalid",e),o=y=h=null;for(f in s)if(s.hasOwnProperty(f)&&(C=s[f],C!=null))switch(f){case"value":h=C;break;case"defaultValue":y=C;break;case"multiple":o=C;default:Ye(e,i,f,C,s,null)}i=h,s=y,e.multiple=!!o,i!=null?Sn(e,!!o,i,!1):s!=null&&Sn(e,!!o,s,!0);return;case"textarea":we("invalid",e),h=f=o=null;for(y in s)if(s.hasOwnProperty(y)&&(C=s[y],C!=null))switch(y){case"value":o=C;break;case"defaultValue":f=C;break;case"children":h=C;break;case"dangerouslySetInnerHTML":if(C!=null)throw Error(a(91));break;default:Ye(e,i,y,C,s,null)}Ci(e,o,f,h);return;case"option":for(H in s)if(s.hasOwnProperty(H)&&(o=s[H],o!=null))switch(H){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Ye(e,i,H,o,s,null)}return;case"dialog":we("beforetoggle",e),we("toggle",e),we("cancel",e),we("close",e);break;case"iframe":case"object":we("load",e);break;case"video":case"audio":for(o=0;o<Xo.length;o++)we(Xo[o],e);break;case"image":we("error",e),we("load",e);break;case"details":we("toggle",e);break;case"embed":case"source":case"link":we("error",e),we("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(at in s)if(s.hasOwnProperty(at)&&(o=s[at],o!=null))switch(at){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Ye(e,i,at,o,s,null)}return;default:if(Ie(i)){for(mt in s)s.hasOwnProperty(mt)&&(o=s[mt],o!==void 0&&bh(e,i,mt,o,s,void 0));return}}for(C in s)s.hasOwnProperty(C)&&(o=s[C],o!=null&&Ye(e,i,C,o,s,null))}function by(e,i,s,o){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,h=null,y=null,C=null,H=null,at=null,mt=null;for(ut in s){var Et=s[ut];if(s.hasOwnProperty(ut)&&Et!=null)switch(ut){case"checked":break;case"value":break;case"defaultValue":H=Et;default:o.hasOwnProperty(ut)||Ye(e,i,ut,null,o,Et)}}for(var lt in o){var ut=o[lt];if(Et=s[lt],o.hasOwnProperty(lt)&&(ut!=null||Et!=null))switch(lt){case"type":h=ut;break;case"name":f=ut;break;case"checked":at=ut;break;case"defaultChecked":mt=ut;break;case"value":y=ut;break;case"defaultValue":C=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(a(137,i));break;default:ut!==Et&&Ye(e,i,lt,ut,o,Et)}}qt(e,y,C,H,at,mt,h,f);return;case"select":ut=y=C=lt=null;for(h in s)if(H=s[h],s.hasOwnProperty(h)&&H!=null)switch(h){case"value":break;case"multiple":ut=H;default:o.hasOwnProperty(h)||Ye(e,i,h,null,o,H)}for(f in o)if(h=o[f],H=s[f],o.hasOwnProperty(f)&&(h!=null||H!=null))switch(f){case"value":lt=h;break;case"defaultValue":C=h;break;case"multiple":y=h;default:h!==H&&Ye(e,i,f,h,o,H)}i=C,s=y,o=ut,lt!=null?Sn(e,!!s,lt,!1):!!o!=!!s&&(i!=null?Sn(e,!!s,i,!0):Sn(e,!!s,s?[]:"",!1));return;case"textarea":ut=lt=null;for(C in s)if(f=s[C],s.hasOwnProperty(C)&&f!=null&&!o.hasOwnProperty(C))switch(C){case"value":break;case"children":break;default:Ye(e,i,C,null,o,f)}for(y in o)if(f=o[y],h=s[y],o.hasOwnProperty(y)&&(f!=null||h!=null))switch(y){case"value":lt=f;break;case"defaultValue":ut=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(a(91));break;default:f!==h&&Ye(e,i,y,f,o,h)}ai(e,lt,ut);return;case"option":for(var jt in s)if(lt=s[jt],s.hasOwnProperty(jt)&&lt!=null&&!o.hasOwnProperty(jt))switch(jt){case"selected":e.selected=!1;break;default:Ye(e,i,jt,null,o,lt)}for(H in o)if(lt=o[H],ut=s[H],o.hasOwnProperty(H)&&lt!==ut&&(lt!=null||ut!=null))switch(H){case"selected":e.selected=lt&&typeof lt!="function"&&typeof lt!="symbol";break;default:Ye(e,i,H,lt,o,ut)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var he in s)lt=s[he],s.hasOwnProperty(he)&&lt!=null&&!o.hasOwnProperty(he)&&Ye(e,i,he,null,o,lt);for(at in o)if(lt=o[at],ut=s[at],o.hasOwnProperty(at)&&lt!==ut&&(lt!=null||ut!=null))switch(at){case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(a(137,i));break;default:Ye(e,i,at,lt,o,ut)}return;default:if(Ie(i)){for(var Ze in s)lt=s[Ze],s.hasOwnProperty(Ze)&&lt!==void 0&&!o.hasOwnProperty(Ze)&&bh(e,i,Ze,void 0,o,lt);for(mt in o)lt=o[mt],ut=s[mt],!o.hasOwnProperty(mt)||lt===ut||lt===void 0&&ut===void 0||bh(e,i,mt,lt,o,ut);return}}for(var $ in s)lt=s[$],s.hasOwnProperty($)&&lt!=null&&!o.hasOwnProperty($)&&Ye(e,i,$,null,o,lt);for(Et in o)lt=o[Et],ut=s[Et],!o.hasOwnProperty(Et)||lt===ut||lt==null&&ut==null||Ye(e,i,Et,lt,o,ut)}function rv(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Ty(){if(typeof performance.getEntriesByType=="function"){for(var e=0,i=0,s=performance.getEntriesByType("resource"),o=0;o<s.length;o++){var f=s[o],h=f.transferSize,y=f.initiatorType,C=f.duration;if(h&&C&&rv(y)){for(y=0,C=f.responseEnd,o+=1;o<s.length;o++){var H=s[o],at=H.startTime;if(at>C)break;var mt=H.transferSize,Et=H.initiatorType;mt&&rv(Et)&&(H=H.responseEnd,y+=mt*(H<C?1:(C-at)/(H-at)))}if(--o,i+=8*(h+y)/(f.duration/1e3),e++,10<e)break}}if(0<e)return i/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Th=null,Ah=null;function Tc(e){return e.nodeType===9?e:e.ownerDocument}function ov(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function lv(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function Rh(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var wh=null;function Ay(){var e=window.event;return e&&e.type==="popstate"?e===wh?!1:(wh=e,!0):(wh=null,!1)}var cv=typeof setTimeout=="function"?setTimeout:void 0,Ry=typeof clearTimeout=="function"?clearTimeout:void 0,uv=typeof Promise=="function"?Promise:void 0,wy=typeof queueMicrotask=="function"?queueMicrotask:typeof uv<"u"?function(e){return uv.resolve(null).then(e).catch(Cy)}:cv;function Cy(e){setTimeout(function(){throw e})}function ns(e){return e==="head"}function fv(e,i){var s=i,o=0;do{var f=s.nextSibling;if(e.removeChild(s),f&&f.nodeType===8)if(s=f.data,s==="/$"||s==="/&"){if(o===0){e.removeChild(f),Nr(i);return}o--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")o++;else if(s==="html")qo(e.ownerDocument.documentElement);else if(s==="head"){s=e.ownerDocument.head,qo(s);for(var h=s.firstChild;h;){var y=h.nextSibling,C=h.nodeName;h[Pa]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&h.rel.toLowerCase()==="stylesheet"||s.removeChild(h),h=y}}else s==="body"&&qo(e.ownerDocument.body);s=f}while(s);Nr(i)}function hv(e,i){var s=e;e=0;do{var o=s.nextSibling;if(s.nodeType===1?i?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(i?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),o&&o.nodeType===8)if(s=o.data,s==="/$"){if(e===0)break;e--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||e++;s=o}while(s)}function Ch(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Ch(s),za(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}e.removeChild(s)}}function Dy(e,i,s,o){for(;e.nodeType===1;){var f=s;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Pa])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(h=e.getAttribute("rel"),h==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(h!==f.rel||e.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||e.getAttribute("title")!==(f.title==null?null:f.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(h=e.getAttribute("src"),(h!==(f.src==null?null:f.src)||e.getAttribute("type")!==(f.type==null?null:f.type)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&h&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var h=f.name==null?null:""+f.name;if(f.type==="hidden"&&e.getAttribute("name")===h)return e}else return e;if(e=bi(e.nextSibling),e===null)break}return null}function Uy(e,i,s){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=bi(e.nextSibling),e===null))return null;return e}function dv(e,i){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=bi(e.nextSibling),e===null))return null;return e}function Dh(e){return e.data==="$?"||e.data==="$~"}function Uh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Ny(e,i){var s=e.ownerDocument;if(e.data==="$~")e._reactRetry=i;else if(e.data!=="$?"||s.readyState!=="loading")i();else{var o=function(){i(),s.removeEventListener("DOMContentLoaded",o)};s.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function bi(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return e}var Nh=null;function pv(e){e=e.nextSibling;for(var i=0;e;){if(e.nodeType===8){var s=e.data;if(s==="/$"||s==="/&"){if(i===0)return bi(e.nextSibling);i--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||i++}e=e.nextSibling}return null}function mv(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(i===0)return e;i--}else s!=="/$"&&s!=="/&"||i++}e=e.previousSibling}return null}function gv(e,i,s){switch(i=Tc(s),e){case"html":if(e=i.documentElement,!e)throw Error(a(452));return e;case"head":if(e=i.head,!e)throw Error(a(453));return e;case"body":if(e=i.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function qo(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);za(e)}var Ti=new Map,vv=new Set;function Ac(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ea=F.d;F.d={f:Ly,r:Oy,D:Py,C:zy,L:By,m:Iy,X:Hy,S:Fy,M:Gy};function Ly(){var e=Ea.f(),i=vc();return e||i}function Oy(e){var i=ra(e);i!==null&&i.tag===5&&i.type==="form"?O0(i):Ea.r(e)}var Cr=typeof document>"u"?null:document;function _v(e,i,s){var o=Cr;if(o&&typeof i=="string"&&i){var f=Ge(i);f='link[rel="'+e+'"][href="'+f+'"]',typeof s=="string"&&(f+='[crossorigin="'+s+'"]'),vv.has(f)||(vv.add(f),e={rel:e,crossOrigin:s,href:i},o.querySelector(f)===null&&(i=o.createElement("link"),Nn(i,"link",e),pn(i),o.head.appendChild(i)))}}function Py(e){Ea.D(e),_v("dns-prefetch",e,null)}function zy(e,i){Ea.C(e,i),_v("preconnect",e,i)}function By(e,i,s){Ea.L(e,i,s);var o=Cr;if(o&&e&&i){var f='link[rel="preload"][as="'+Ge(i)+'"]';i==="image"&&s&&s.imageSrcSet?(f+='[imagesrcset="'+Ge(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(f+='[imagesizes="'+Ge(s.imageSizes)+'"]')):f+='[href="'+Ge(e)+'"]';var h=f;switch(i){case"style":h=Dr(e);break;case"script":h=Ur(e)}Ti.has(h)||(e=v({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:e,as:i},s),Ti.set(h,e),o.querySelector(f)!==null||i==="style"&&o.querySelector(Yo(h))||i==="script"&&o.querySelector(Zo(h))||(i=o.createElement("link"),Nn(i,"link",e),pn(i),o.head.appendChild(i)))}}function Iy(e,i){Ea.m(e,i);var s=Cr;if(s&&e){var o=i&&typeof i.as=="string"?i.as:"script",f='link[rel="modulepreload"][as="'+Ge(o)+'"][href="'+Ge(e)+'"]',h=f;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=Ur(e)}if(!Ti.has(h)&&(e=v({rel:"modulepreload",href:e},i),Ti.set(h,e),s.querySelector(f)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Zo(h)))return}o=s.createElement("link"),Nn(o,"link",e),pn(o),s.head.appendChild(o)}}}function Fy(e,i,s){Ea.S(e,i,s);var o=Cr;if(o&&e){var f=Ba(o).hoistableStyles,h=Dr(e);i=i||"default";var y=f.get(h);if(!y){var C={loading:0,preload:null};if(y=o.querySelector(Yo(h)))C.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":i},s),(s=Ti.get(h))&&Lh(e,s);var H=y=o.createElement("link");pn(H),Nn(H,"link",e),H._p=new Promise(function(at,mt){H.onload=at,H.onerror=mt}),H.addEventListener("load",function(){C.loading|=1}),H.addEventListener("error",function(){C.loading|=2}),C.loading|=4,Rc(y,i,o)}y={type:"stylesheet",instance:y,count:1,state:C},f.set(h,y)}}}function Hy(e,i){Ea.X(e,i);var s=Cr;if(s&&e){var o=Ba(s).hoistableScripts,f=Ur(e),h=o.get(f);h||(h=s.querySelector(Zo(f)),h||(e=v({src:e,async:!0},i),(i=Ti.get(f))&&Oh(e,i),h=s.createElement("script"),pn(h),Nn(h,"link",e),s.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(f,h))}}function Gy(e,i){Ea.M(e,i);var s=Cr;if(s&&e){var o=Ba(s).hoistableScripts,f=Ur(e),h=o.get(f);h||(h=s.querySelector(Zo(f)),h||(e=v({src:e,async:!0,type:"module"},i),(i=Ti.get(f))&&Oh(e,i),h=s.createElement("script"),pn(h),Nn(h,"link",e),s.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(f,h))}}function xv(e,i,s,o){var f=(f=K.current)?Ac(f):null;if(!f)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=Dr(s.href),s=Ba(f).hoistableStyles,o=s.get(i),o||(o={type:"style",instance:null,count:0,state:null},s.set(i,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){e=Dr(s.href);var h=Ba(f).hoistableStyles,y=h.get(e);if(y||(f=f.ownerDocument||f,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(e,y),(h=f.querySelector(Yo(e)))&&!h._p&&(y.instance=h,y.state.loading=5),Ti.has(e)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Ti.set(e,s),h||Vy(f,e,s,y.state))),i&&o===null)throw Error(a(528,""));return y}if(i&&o!==null)throw Error(a(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Ur(s),s=Ba(f).hoistableScripts,o=s.get(i),o||(o={type:"script",instance:null,count:0,state:null},s.set(i,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function Dr(e){return'href="'+Ge(e)+'"'}function Yo(e){return'link[rel="stylesheet"]['+e+"]"}function Sv(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function Vy(e,i,s,o){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?o.loading=1:(i=e.createElement("link"),o.preload=i,i.addEventListener("load",function(){return o.loading|=1}),i.addEventListener("error",function(){return o.loading|=2}),Nn(i,"link",s),pn(i),e.head.appendChild(i))}function Ur(e){return'[src="'+Ge(e)+'"]'}function Zo(e){return"script[async]"+e}function yv(e,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var o=e.querySelector('style[data-href~="'+Ge(s.href)+'"]');if(o)return i.instance=o,pn(o),o;var f=v({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),pn(o),Nn(o,"style",f),Rc(o,s.precedence,e),i.instance=o;case"stylesheet":f=Dr(s.href);var h=e.querySelector(Yo(f));if(h)return i.state.loading|=4,i.instance=h,pn(h),h;o=Sv(s),(f=Ti.get(f))&&Lh(o,f),h=(e.ownerDocument||e).createElement("link"),pn(h);var y=h;return y._p=new Promise(function(C,H){y.onload=C,y.onerror=H}),Nn(h,"link",o),i.state.loading|=4,Rc(h,s.precedence,e),i.instance=h;case"script":return h=Ur(s.src),(f=e.querySelector(Zo(h)))?(i.instance=f,pn(f),f):(o=s,(f=Ti.get(h))&&(o=v({},s),Oh(o,f)),e=e.ownerDocument||e,f=e.createElement("script"),pn(f),Nn(f,"link",o),e.head.appendChild(f),i.instance=f);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(o=i.instance,i.state.loading|=4,Rc(o,s.precedence,e));return i.instance}function Rc(e,i,s){for(var o=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=o.length?o[o.length-1]:null,h=f,y=0;y<o.length;y++){var C=o[y];if(C.dataset.precedence===i)h=C;else if(h!==f)break}h?h.parentNode.insertBefore(e,h.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(e,i.firstChild))}function Lh(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function Oh(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var wc=null;function Mv(e,i,s){if(wc===null){var o=new Map,f=wc=new Map;f.set(s,o)}else f=wc,o=f.get(s),o||(o=new Map,f.set(s,o));if(o.has(e))return o;for(o.set(e,null),s=s.getElementsByTagName(e),f=0;f<s.length;f++){var h=s[f];if(!(h[Pa]||h[dn]||e==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var y=h.getAttribute(i)||"";y=e+y;var C=o.get(y);C?C.push(h):o.set(y,[h])}}return o}function Ev(e,i,s){e=e.ownerDocument||e,e.head.insertBefore(s,i==="title"?e.querySelector("head > title"):null)}function ky(e,i,s){if(s===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function bv(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Xy(e,i,s,o){if(s.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var f=Dr(o.href),h=i.querySelector(Yo(f));if(h){i=h._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(e.count++,e=Cc.bind(e),i.then(e,e)),s.state.loading|=4,s.instance=h,pn(h);return}h=i.ownerDocument||i,o=Sv(o),(f=Ti.get(f))&&Lh(o,f),h=h.createElement("link"),pn(h);var y=h;y._p=new Promise(function(C,H){y.onload=C,y.onerror=H}),Nn(h,"link",o),s.instance=h}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(s,i),(i=s.state.preload)&&(s.state.loading&3)===0&&(e.count++,s=Cc.bind(e),i.addEventListener("load",s),i.addEventListener("error",s))}}var Ph=0;function Wy(e,i){return e.stylesheets&&e.count===0&&Uc(e,e.stylesheets),0<e.count||0<e.imgCount?function(s){var o=setTimeout(function(){if(e.stylesheets&&Uc(e,e.stylesheets),e.unsuspend){var h=e.unsuspend;e.unsuspend=null,h()}},6e4+i);0<e.imgBytes&&Ph===0&&(Ph=62500*Ty());var f=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Uc(e,e.stylesheets),e.unsuspend)){var h=e.unsuspend;e.unsuspend=null,h()}},(e.imgBytes>Ph?50:800)+i);return e.unsuspend=s,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(f)}}:null}function Cc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Uc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Dc=null;function Uc(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Dc=new Map,i.forEach(qy,e),Dc=null,Cc.call(e))}function qy(e,i){if(!(i.state.loading&4)){var s=Dc.get(e);if(s)var o=s.get(null);else{s=new Map,Dc.set(e,s);for(var f=e.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<f.length;h++){var y=f[h];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(s.set(y.dataset.precedence,y),o=y)}o&&s.set(null,o)}f=i.instance,y=f.getAttribute("data-precedence"),h=s.get(y)||o,h===o&&s.set(null,f),s.set(y,f),this.count++,o=Cc.bind(this),f.addEventListener("load",o),f.addEventListener("error",o),h?h.parentNode.insertBefore(f,h.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(f,e.firstChild)),i.state.loading|=4}}var Ko={$$typeof:N,Provider:null,Consumer:null,_currentValue:tt,_currentValue2:tt,_threadCount:0};function Yy(e,i,s,o,f,h,y,C,H){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ee(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ee(0),this.hiddenUpdates=ee(null),this.identifierPrefix=o,this.onUncaughtError=f,this.onCaughtError=h,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=H,this.incompleteTransitions=new Map}function Tv(e,i,s,o,f,h,y,C,H,at,mt,Et){return e=new Yy(e,i,s,y,H,at,mt,Et,C),i=1,h===!0&&(i|=24),h=oi(3,null,null,i),e.current=h,h.stateNode=e,i=pf(),i.refCount++,e.pooledCache=i,i.refCount++,h.memoizedState={element:o,isDehydrated:s,cache:i},_f(h),e}function Av(e){return e?(e=lr,e):lr}function Rv(e,i,s,o,f,h){f=Av(f),o.context===null?o.context=f:o.pendingContext=f,o=Wa(i),o.payload={element:s},h=h===void 0?null:h,h!==null&&(o.callback=h),s=qa(e,o,i),s!==null&&(ti(s,e,i),Ro(s,e,i))}function wv(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<i?s:i}}function zh(e,i){wv(e,i),(e=e.alternate)&&wv(e,i)}function Cv(e){if(e.tag===13||e.tag===31){var i=ws(e,67108864);i!==null&&ti(i,e,67108864),zh(e,67108864)}}function Dv(e){if(e.tag===13||e.tag===31){var i=hi();i=lo(i);var s=ws(e,i);s!==null&&ti(s,e,i),zh(e,i)}}var Nc=!0;function Zy(e,i,s,o){var f=I.T;I.T=null;var h=F.p;try{F.p=2,Bh(e,i,s,o)}finally{F.p=h,I.T=f}}function Ky(e,i,s,o){var f=I.T;I.T=null;var h=F.p;try{F.p=8,Bh(e,i,s,o)}finally{F.p=h,I.T=f}}function Bh(e,i,s,o){if(Nc){var f=Ih(o);if(f===null)Eh(e,i,o,Lc,s),Nv(e,o);else if(Qy(f,e,i,s,o))o.stopPropagation();else if(Nv(e,o),i&4&&-1<Jy.indexOf(e)){for(;f!==null;){var h=ra(f);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var y=Nt(h.pendingLanes);if(y!==0){var C=h;for(C.pendingLanes|=2,C.entangledLanes|=2;y;){var H=1<<31-Wt(y);C.entanglements[1]|=H,y&=~H}qi(h),(Be&6)===0&&(mc=me()+500,ko(0))}}break;case 31:case 13:C=ws(h,2),C!==null&&ti(C,h,2),vc(),zh(h,2)}if(h=Ih(o),h===null&&Eh(e,i,o,Lc,s),h===f)break;f=h}f!==null&&o.stopPropagation()}else Eh(e,i,o,null,s)}}function Ih(e){return e=Fu(e),Fh(e)}var Lc=null;function Fh(e){if(Lc=null,e=sa(e),e!==null){var i=c(e);if(i===null)e=null;else{var s=i.tag;if(s===13){if(e=u(i),e!==null)return e;e=null}else if(s===31){if(e=d(i),e!==null)return e;e=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return Lc=e,null}function Uv(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(_e()){case L:return 2;case b:return 8;case j:case nt:return 32;case dt:return 268435456;default:return 32}default:return 32}}var Hh=!1,is=null,as=null,ss=null,Jo=new Map,Qo=new Map,rs=[],Jy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Nv(e,i){switch(e){case"focusin":case"focusout":is=null;break;case"dragenter":case"dragleave":as=null;break;case"mouseover":case"mouseout":ss=null;break;case"pointerover":case"pointerout":Jo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qo.delete(i.pointerId)}}function jo(e,i,s,o,f,h){return e===null||e.nativeEvent!==h?(e={blockedOn:i,domEventName:s,eventSystemFlags:o,nativeEvent:h,targetContainers:[f]},i!==null&&(i=ra(i),i!==null&&Cv(i)),e):(e.eventSystemFlags|=o,i=e.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),e)}function Qy(e,i,s,o,f){switch(i){case"focusin":return is=jo(is,e,i,s,o,f),!0;case"dragenter":return as=jo(as,e,i,s,o,f),!0;case"mouseover":return ss=jo(ss,e,i,s,o,f),!0;case"pointerover":var h=f.pointerId;return Jo.set(h,jo(Jo.get(h)||null,e,i,s,o,f)),!0;case"gotpointercapture":return h=f.pointerId,Qo.set(h,jo(Qo.get(h)||null,e,i,s,o,f)),!0}return!1}function Lv(e){var i=sa(e.target);if(i!==null){var s=c(i);if(s!==null){if(i=s.tag,i===13){if(i=u(s),i!==null){e.blockedOn=i,er(e.priority,function(){Dv(s)});return}}else if(i===31){if(i=d(s),i!==null){e.blockedOn=i,er(e.priority,function(){Dv(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Oc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var s=Ih(e.nativeEvent);if(s===null){s=e.nativeEvent;var o=new s.constructor(s.type,s);Iu=o,s.target.dispatchEvent(o),Iu=null}else return i=ra(s),i!==null&&Cv(i),e.blockedOn=s,!1;i.shift()}return!0}function Ov(e,i,s){Oc(e)&&s.delete(i)}function jy(){Hh=!1,is!==null&&Oc(is)&&(is=null),as!==null&&Oc(as)&&(as=null),ss!==null&&Oc(ss)&&(ss=null),Jo.forEach(Ov),Qo.forEach(Ov)}function Pc(e,i){e.blockedOn===i&&(e.blockedOn=null,Hh||(Hh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,jy)))}var zc=null;function Pv(e){zc!==e&&(zc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){zc===e&&(zc=null);for(var i=0;i<e.length;i+=3){var s=e[i],o=e[i+1],f=e[i+2];if(typeof o!="function"){if(Fh(o||s)===null)continue;break}var h=ra(s);h!==null&&(e.splice(i,3),i-=3,If(h,{pending:!0,data:f,method:s.method,action:o},o,f))}}))}function Nr(e){function i(H){return Pc(H,e)}is!==null&&Pc(is,e),as!==null&&Pc(as,e),ss!==null&&Pc(ss,e),Jo.forEach(i),Qo.forEach(i);for(var s=0;s<rs.length;s++){var o=rs[s];o.blockedOn===e&&(o.blockedOn=null)}for(;0<rs.length&&(s=rs[0],s.blockedOn===null);)Lv(s),s.blockedOn===null&&rs.shift();if(s=(e.ownerDocument||e).$$reactFormReplay,s!=null)for(o=0;o<s.length;o+=3){var f=s[o],h=s[o+1],y=f[wn]||null;if(typeof h=="function")y||Pv(s);else if(y){var C=null;if(h&&h.hasAttribute("formAction")){if(f=h,y=h[wn]||null)C=y.formAction;else if(Fh(f)!==null)continue}else C=y.action;typeof C=="function"?s[o+1]=C:(s.splice(o,3),o-=3),Pv(s)}}}function zv(){function e(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(y){return f=y})},focusReset:"manual",scroll:"manual"})}function i(){f!==null&&(f(),f=null),o||setTimeout(s,20)}function s(){if(!o&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,f=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(s,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),f!==null&&(f(),f=null)}}}function Gh(e){this._internalRoot=e}Bc.prototype.render=Gh.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(a(409));var s=i.current,o=hi();Rv(s,o,e,i,null,null)},Bc.prototype.unmount=Gh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;Rv(e.current,2,null,e,null,null),vc(),i[Zn]=null}};function Bc(e){this._internalRoot=e}Bc.prototype.unstable_scheduleHydration=function(e){if(e){var i=uo();e={blockedOn:null,target:e,priority:i};for(var s=0;s<rs.length&&i!==0&&i<rs[s].priority;s++);rs.splice(s,0,e),s===0&&Lv(e)}};var Bv=t.version;if(Bv!=="19.2.0")throw Error(a(527,Bv,"19.2.0"));F.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=p(i),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var $y={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ic=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ic.isDisabled&&Ic.supportsFiber)try{ht=Ic.inject($y),ct=Ic}catch{}}return tl.createRoot=function(e,i){if(!l(e))throw Error(a(299));var s=!1,o="",f=X0,h=W0,y=q0;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(o=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(h=i.onCaughtError),i.onRecoverableError!==void 0&&(y=i.onRecoverableError)),i=Tv(e,1,!1,null,null,s,o,null,f,h,y,zv),e[Zn]=i.current,Mh(e),new Gh(i)},tl.hydrateRoot=function(e,i,s){if(!l(e))throw Error(a(299));var o=!1,f="",h=X0,y=W0,C=q0,H=null;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onUncaughtError!==void 0&&(h=s.onUncaughtError),s.onCaughtError!==void 0&&(y=s.onCaughtError),s.onRecoverableError!==void 0&&(C=s.onRecoverableError),s.formState!==void 0&&(H=s.formState)),i=Tv(e,1,!0,i,s??null,o,f,H,h,y,C,zv),i.context=Av(null),s=i.current,o=hi(),o=lo(o),f=Wa(o),f.callback=null,qa(s,f,o),s=o,i.current.lanes=s,Zt(i,s),qi(i),e[Zn]=i.current,Mh(e),new Bc(i)},tl.version="19.2.0",tl}var Yv;function fM(){if(Yv)return Xh.exports;Yv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Xh.exports=uM(),Xh.exports}var hM=fM();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Up="185",dM=0,Zv=1,pM=2,vu=1,rx=2,ul=3,_s=0,ei=1,Ca=2,Ua=0,Jr=1,Ld=2,Kv=3,Jv=4,mM=5,qs=100,gM=101,vM=102,_M=103,xM=104,SM=200,yM=201,MM=202,EM=203,Od=204,Pd=205,bM=206,TM=207,AM=208,RM=209,wM=210,CM=211,DM=212,UM=213,NM=214,zd=0,Bd=1,Id=2,to=3,Fd=4,Hd=5,Gd=6,Vd=7,ox=0,LM=1,OM=2,ta=0,lx=1,cx=2,ux=3,Np=4,fx=5,hx=6,dx=7,px=300,Js=301,eo=302,Zh=303,Kh=304,Lu=306,kd=1e3,Da=1001,Xd=1002,Ln=1003,PM=1004,Fc=1005,Fn=1006,Jh=1007,Zs=1008,vi=1009,mx=1010,gx=1011,gl=1012,Lp=1013,ia=1014,Qi=1015,La=1016,Op=1017,Pp=1018,vl=1020,vx=35902,_x=35899,xx=1021,Sx=1022,Bi=1023,Oa=1026,Ks=1027,yx=1028,zp=1029,Qs=1030,Bp=1031,Ip=1033,_u=33776,xu=33777,Su=33778,yu=33779,Wd=35840,qd=35841,Yd=35842,Zd=35843,Kd=36196,Jd=37492,Qd=37496,jd=37488,$d=37489,Eu=37490,tp=37491,ep=37808,np=37809,ip=37810,ap=37811,sp=37812,rp=37813,op=37814,lp=37815,cp=37816,up=37817,fp=37818,hp=37819,dp=37820,pp=37821,mp=36492,gp=36494,vp=36495,_p=36283,xp=36284,bu=36285,Sp=36286,zM=3200,yp=0,BM=1,ms="",mi="srgb",Tu="srgb-linear",Au="linear",We="srgb",Lr=7680,Qv=519,IM=512,FM=513,HM=514,Fp=515,GM=516,VM=517,Hp=518,kM=519,jv=35044,$v="300 es",ji=2e3,_l=2001;function XM(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Ru(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function WM(){const r=Ru("canvas");return r.style.display="block",r}const t_={};function e_(...r){const t="THREE."+r.shift();console.log(t,...r)}function Mx(r){const t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){const n=r[1];n&&n.isStackTrace?r[0]+=" "+n.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function de(...r){r=Mx(r);const t="THREE."+r.shift();{const n=r[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...r)}}function Le(...r){r=Mx(r);const t="THREE."+r.shift();{const n=r[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...r)}}function Qr(...r){const t=r.join(" ");t in t_||(t_[t]=!0,de(...r))}function qM(r,t,n){return new Promise(function(a,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:a()}}setTimeout(c,n)})}const YM={[zd]:Bd,[Id]:Gd,[Fd]:Vd,[to]:Hd,[Bd]:zd,[Gd]:Id,[Vd]:Fd,[Hd]:to};class $s{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[t]===void 0&&(a[t]=[]),a[t].indexOf(n)===-1&&a[t].push(n)}hasEventListener(t,n){const a=this._listeners;return a===void 0?!1:a[t]!==void 0&&a[t].indexOf(n)!==-1}removeEventListener(t,n){const a=this._listeners;if(a===void 0)return;const l=a[t];if(l!==void 0){const c=l.indexOf(n);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const a=n[t.type];if(a!==void 0){t.target=this;const l=a.slice(0);for(let c=0,u=l.length;c<u;c++)l[c].call(this,t);t.target=null}}}const Bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let n_=1234567;const jr=Math.PI/180,xl=180/Math.PI;function tr(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Bn[r&255]+Bn[r>>8&255]+Bn[r>>16&255]+Bn[r>>24&255]+"-"+Bn[t&255]+Bn[t>>8&255]+"-"+Bn[t>>16&15|64]+Bn[t>>24&255]+"-"+Bn[n&63|128]+Bn[n>>8&255]+"-"+Bn[n>>16&255]+Bn[n>>24&255]+Bn[a&255]+Bn[a>>8&255]+Bn[a>>16&255]+Bn[a>>24&255]).toLowerCase()}function Te(r,t,n){return Math.max(t,Math.min(n,r))}function Gp(r,t){return(r%t+t)%t}function ZM(r,t,n,a,l){return a+(r-t)*(l-a)/(n-t)}function KM(r,t,n){return r!==t?(n-r)/(t-r):0}function dl(r,t,n){return(1-n)*r+n*t}function JM(r,t,n,a){return dl(r,t,1-Math.exp(-n*a))}function QM(r,t=1){return t-Math.abs(Gp(r,t*2)-t)}function jM(r,t,n){return r<=t?0:r>=n?1:(r=(r-t)/(n-t),r*r*(3-2*r))}function $M(r,t,n){return r<=t?0:r>=n?1:(r=(r-t)/(n-t),r*r*r*(r*(r*6-15)+10))}function tE(r,t){return r+Math.floor(Math.random()*(t-r+1))}function eE(r,t){return r+Math.random()*(t-r)}function nE(r){return r*(.5-Math.random())}function iE(r){r!==void 0&&(n_=r);let t=n_+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function aE(r){return r*jr}function sE(r){return r*xl}function rE(r){return(r&r-1)===0&&r!==0}function oE(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function lE(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function cE(r,t,n,a,l){const c=Math.cos,u=Math.sin,d=c(n/2),m=u(n/2),p=c((t+a)/2),_=u((t+a)/2),v=c((t-a)/2),g=u((t-a)/2),x=c((a-t)/2),E=u((a-t)/2);switch(l){case"XYX":r.set(d*_,m*v,m*g,d*p);break;case"YZY":r.set(m*g,d*_,m*v,d*p);break;case"ZXZ":r.set(m*v,m*g,d*_,d*p);break;case"XZX":r.set(d*_,m*E,m*x,d*p);break;case"YXY":r.set(m*x,d*_,m*E,d*p);break;case"ZYZ":r.set(m*E,m*x,d*_,d*p);break;default:de("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Zr(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function kn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const gs={DEG2RAD:jr,RAD2DEG:xl,generateUUID:tr,clamp:Te,euclideanModulo:Gp,mapLinear:ZM,inverseLerp:KM,lerp:dl,damp:JM,pingpong:QM,smoothstep:jM,smootherstep:$M,randInt:tE,randFloat:eE,randFloatSpread:nE,seededRandom:iE,degToRad:aE,radToDeg:sE,isPowerOfTwo:rE,ceilPowerOfTwo:oE,floorPowerOfTwo:lE,setQuaternionFromProperEuler:cE,normalize:kn,denormalize:Zr},em=class em{constructor(t=0,n=0){this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,a=this.y,l=t.elements;return this.x=l[0]*n+l[3]*a+l[6],this.y=l[1]*n+l[4]*a+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Te(this.x,t.x,n.x),this.y=Te(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=Te(this.x,t,n),this.y=Te(this.y,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Te(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(Te(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y;return n*n+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const a=Math.cos(n),l=Math.sin(n),c=this.x-t.x,u=this.y-t.y;return this.x=c*a-u*l+t.x,this.y=c*l+u*a+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};em.prototype.isVector2=!0;let Ft=em;class so{constructor(t=0,n=0,a=0,l=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=a,this._w=l}static slerpFlat(t,n,a,l,c,u,d){let m=a[l+0],p=a[l+1],_=a[l+2],v=a[l+3],g=c[u+0],x=c[u+1],E=c[u+2],R=c[u+3];if(v!==R||m!==g||p!==x||_!==E){let M=m*g+p*x+_*E+v*R;M<0&&(g=-g,x=-x,E=-E,R=-R,M=-M);let S=1-d;if(M<.9995){const B=Math.acos(M),N=Math.sin(B);S=Math.sin(S*B)/N,d=Math.sin(d*B)/N,m=m*S+g*d,p=p*S+x*d,_=_*S+E*d,v=v*S+R*d}else{m=m*S+g*d,p=p*S+x*d,_=_*S+E*d,v=v*S+R*d;const B=1/Math.sqrt(m*m+p*p+_*_+v*v);m*=B,p*=B,_*=B,v*=B}}t[n]=m,t[n+1]=p,t[n+2]=_,t[n+3]=v}static multiplyQuaternionsFlat(t,n,a,l,c,u){const d=a[l],m=a[l+1],p=a[l+2],_=a[l+3],v=c[u],g=c[u+1],x=c[u+2],E=c[u+3];return t[n]=d*E+_*v+m*x-p*g,t[n+1]=m*E+_*g+p*v-d*x,t[n+2]=p*E+_*x+d*g-m*v,t[n+3]=_*E-d*v-m*g-p*x,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,a,l){return this._x=t,this._y=n,this._z=a,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const a=t._x,l=t._y,c=t._z,u=t._order,d=Math.cos,m=Math.sin,p=d(a/2),_=d(l/2),v=d(c/2),g=m(a/2),x=m(l/2),E=m(c/2);switch(u){case"XYZ":this._x=g*_*v+p*x*E,this._y=p*x*v-g*_*E,this._z=p*_*E+g*x*v,this._w=p*_*v-g*x*E;break;case"YXZ":this._x=g*_*v+p*x*E,this._y=p*x*v-g*_*E,this._z=p*_*E-g*x*v,this._w=p*_*v+g*x*E;break;case"ZXY":this._x=g*_*v-p*x*E,this._y=p*x*v+g*_*E,this._z=p*_*E+g*x*v,this._w=p*_*v-g*x*E;break;case"ZYX":this._x=g*_*v-p*x*E,this._y=p*x*v+g*_*E,this._z=p*_*E-g*x*v,this._w=p*_*v+g*x*E;break;case"YZX":this._x=g*_*v+p*x*E,this._y=p*x*v+g*_*E,this._z=p*_*E-g*x*v,this._w=p*_*v-g*x*E;break;case"XZY":this._x=g*_*v-p*x*E,this._y=p*x*v-g*_*E,this._z=p*_*E+g*x*v,this._w=p*_*v+g*x*E;break;default:de("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const a=n/2,l=Math.sin(a);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,a=n[0],l=n[4],c=n[8],u=n[1],d=n[5],m=n[9],p=n[2],_=n[6],v=n[10],g=a+d+v;if(g>0){const x=.5/Math.sqrt(g+1);this._w=.25/x,this._x=(_-m)*x,this._y=(c-p)*x,this._z=(u-l)*x}else if(a>d&&a>v){const x=2*Math.sqrt(1+a-d-v);this._w=(_-m)/x,this._x=.25*x,this._y=(l+u)/x,this._z=(c+p)/x}else if(d>v){const x=2*Math.sqrt(1+d-a-v);this._w=(c-p)/x,this._x=(l+u)/x,this._y=.25*x,this._z=(m+_)/x}else{const x=2*Math.sqrt(1+v-a-d);this._w=(u-l)/x,this._x=(c+p)/x,this._y=(m+_)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let a=t.dot(n)+1;return a<1e-8?(a=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=a):(this._x=0,this._y=-t.z,this._z=t.y,this._w=a)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=a),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Te(this.dot(t),-1,1)))}rotateTowards(t,n){const a=this.angleTo(t);if(a===0)return this;const l=Math.min(1,n/a);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const a=t._x,l=t._y,c=t._z,u=t._w,d=n._x,m=n._y,p=n._z,_=n._w;return this._x=a*_+u*d+l*p-c*m,this._y=l*_+u*m+c*d-a*p,this._z=c*_+u*p+a*m-l*d,this._w=u*_-a*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,n){let a=t._x,l=t._y,c=t._z,u=t._w,d=this.dot(t);d<0&&(a=-a,l=-l,c=-c,u=-u,d=-d);let m=1-n;if(d<.9995){const p=Math.acos(d),_=Math.sin(p);m=Math.sin(m*p)/_,n=Math.sin(n*p)/_,this._x=this._x*m+a*n,this._y=this._y*m+l*n,this._z=this._z*m+c*n,this._w=this._w*m+u*n,this._onChangeCallback()}else this._x=this._x*m+a*n,this._y=this._y*m+l*n,this._z=this._z*m+c*n,this._w=this._w*m+u*n,this.normalize();return this}slerpQuaternions(t,n,a){return this.copy(t).slerp(n,a)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),l=Math.sqrt(1-a),c=Math.sqrt(a);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(n),c*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const nm=class nm{constructor(t=0,n=0,a=0){this.x=t,this.y=n,this.z=a}set(t,n,a){return a===void 0&&(a=this.z),this.x=t,this.y=n,this.z=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(i_.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(i_.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,a=this.y,l=this.z,c=t.elements;return this.x=c[0]*n+c[3]*a+c[6]*l,this.y=c[1]*n+c[4]*a+c[7]*l,this.z=c[2]*n+c[5]*a+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,a=this.y,l=this.z,c=t.elements,u=1/(c[3]*n+c[7]*a+c[11]*l+c[15]);return this.x=(c[0]*n+c[4]*a+c[8]*l+c[12])*u,this.y=(c[1]*n+c[5]*a+c[9]*l+c[13])*u,this.z=(c[2]*n+c[6]*a+c[10]*l+c[14])*u,this}applyQuaternion(t){const n=this.x,a=this.y,l=this.z,c=t.x,u=t.y,d=t.z,m=t.w,p=2*(u*l-d*a),_=2*(d*n-c*l),v=2*(c*a-u*n);return this.x=n+m*p+u*v-d*_,this.y=a+m*_+d*p-c*v,this.z=l+m*v+c*_-u*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,a=this.y,l=this.z,c=t.elements;return this.x=c[0]*n+c[4]*a+c[8]*l,this.y=c[1]*n+c[5]*a+c[9]*l,this.z=c[2]*n+c[6]*a+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Te(this.x,t.x,n.x),this.y=Te(this.y,t.y,n.y),this.z=Te(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=Te(this.x,t,n),this.y=Te(this.y,t,n),this.z=Te(this.z,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Te(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const a=t.x,l=t.y,c=t.z,u=n.x,d=n.y,m=n.z;return this.x=l*m-c*d,this.y=c*u-a*m,this.z=a*d-l*u,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const a=t.dot(this)/n;return this.copy(t).multiplyScalar(a)}projectOnPlane(t){return Qh.copy(this).projectOnVector(t),this.sub(Qh)}reflect(t){return this.sub(Qh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(Te(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y,l=this.z-t.z;return n*n+a*a+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,a){const l=Math.sin(n)*t;return this.x=l*Math.sin(a),this.y=Math.cos(n)*t,this.z=l*Math.cos(a),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,a){return this.x=t*Math.sin(n),this.y=a,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),a=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=a,this.z=l,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(t),this.y=n,this.z=a*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};nm.prototype.isVector3=!0;let k=nm;const Qh=new k,i_=new so,im=class im{constructor(t,n,a,l,c,u,d,m,p){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,a,l,c,u,d,m,p)}set(t,n,a,l,c,u,d,m,p){const _=this.elements;return _[0]=t,_[1]=l,_[2]=d,_[3]=n,_[4]=c,_[5]=m,_[6]=a,_[7]=u,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(t,n,a){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,l=n.elements,c=this.elements,u=a[0],d=a[3],m=a[6],p=a[1],_=a[4],v=a[7],g=a[2],x=a[5],E=a[8],R=l[0],M=l[3],S=l[6],B=l[1],N=l[4],A=l[7],z=l[2],O=l[5],D=l[8];return c[0]=u*R+d*B+m*z,c[3]=u*M+d*N+m*O,c[6]=u*S+d*A+m*D,c[1]=p*R+_*B+v*z,c[4]=p*M+_*N+v*O,c[7]=p*S+_*A+v*D,c[2]=g*R+x*B+E*z,c[5]=g*M+x*N+E*O,c[8]=g*S+x*A+E*D,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[1],l=t[2],c=t[3],u=t[4],d=t[5],m=t[6],p=t[7],_=t[8];return n*u*_-n*d*p-a*c*_+a*d*m+l*c*p-l*u*m}invert(){const t=this.elements,n=t[0],a=t[1],l=t[2],c=t[3],u=t[4],d=t[5],m=t[6],p=t[7],_=t[8],v=_*u-d*p,g=d*m-_*c,x=p*c-u*m,E=n*v+a*g+l*x;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/E;return t[0]=v*R,t[1]=(l*p-_*a)*R,t[2]=(d*a-l*u)*R,t[3]=g*R,t[4]=(_*n-l*m)*R,t[5]=(l*c-d*n)*R,t[6]=x*R,t[7]=(a*m-p*n)*R,t[8]=(u*n-a*c)*R,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,a,l,c,u,d){const m=Math.cos(c),p=Math.sin(c);return this.set(a*m,a*p,-a*(m*u+p*d)+u+t,-l*p,l*m,-l*(-p*u+m*d)+d+n,0,0,1),this}scale(t,n){return Qr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(jh.makeScale(t,n)),this}rotate(t){return Qr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(jh.makeRotation(-t)),this}translate(t,n){return Qr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(jh.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,a=t.elements;for(let l=0;l<9;l++)if(n[l]!==a[l])return!1;return!0}fromArray(t,n=0){for(let a=0;a<9;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t}clone(){return new this.constructor().fromArray(this.elements)}};im.prototype.isMatrix3=!0;let ve=im;const jh=new ve,a_=new ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),s_=new ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function uE(){const r={enabled:!0,workingColorSpace:Tu,spaces:{},convert:function(l,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===We&&(l.r=Na(l.r),l.g=Na(l.g),l.b=Na(l.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===We&&(l.r=$r(l.r),l.g=$r(l.g),l.b=$r(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ms?Au:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,u){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Qr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Qr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return r.define({[Tu]:{primaries:t,whitePoint:a,transfer:Au,toXYZ:a_,fromXYZ:s_,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:mi},outputColorSpaceConfig:{drawingBufferColorSpace:mi}},[mi]:{primaries:t,whitePoint:a,transfer:We,toXYZ:a_,fromXYZ:s_,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:mi}}}),r}const Ne=uE();function Na(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function $r(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Or;class fE{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let a;if(t instanceof HTMLCanvasElement)a=t;else{Or===void 0&&(Or=Ru("canvas")),Or.width=t.width,Or.height=t.height;const l=Or.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),a=Or}return a.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=Ru("canvas");n.width=t.width,n.height=t.height;const a=n.getContext("2d");a.drawImage(t,0,0,t.width,t.height);const l=a.getImageData(0,0,t.width,t.height),c=l.data;for(let u=0;u<c.length;u++)c[u]=Na(c[u]/255)*255;return a.putImageData(l,0,0),n}else if(t.data){const n=t.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(Na(n[a]/255)*255):n[a]=Na(n[a]);return{data:n,width:t.width,height:t.height}}else return de("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let hE=0;class Vp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hE++}),this.uuid=tr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayWidth,n.displayHeight,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const a={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let u=0,d=l.length;u<d;u++)l[u].isDataTexture?c.push($h(l[u].image)):c.push($h(l[u]))}else c=$h(l);a.url=c}return n||(t.images[this.uuid]=a),a}}function $h(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?fE.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(de("Texture: Unable to serialize Texture."),{})}let dE=0;const td=new k;class qn extends $s{constructor(t=qn.DEFAULT_IMAGE,n=qn.DEFAULT_MAPPING,a=Da,l=Da,c=Fn,u=Zs,d=Bi,m=vi,p=qn.DEFAULT_ANISOTROPY,_=ms){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dE++}),this.uuid=tr(),this.name="",this.source=new Vp(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=l,this.magFilter=c,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Ft(0,0),this.repeat=new Ft(1,1),this.center=new Ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(td).x}get height(){return this.source.getSize(td).y}get depth(){return this.source.getSize(td).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const a=t[n];if(a===void 0){de(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const l=this[n];if(l===void 0){de(`Texture.setValues(): property '${n}' does not exist.`);continue}l&&a&&l.isVector2&&a.isVector2||l&&a&&l.isVector3&&a.isVector3||l&&a&&l.isMatrix3&&a.isMatrix3?l.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(t.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==px)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case kd:t.x=t.x-Math.floor(t.x);break;case Da:t.x=t.x<0?0:1;break;case Xd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case kd:t.y=t.y-Math.floor(t.y);break;case Da:t.y=t.y<0?0:1;break;case Xd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}qn.DEFAULT_IMAGE=null;qn.DEFAULT_MAPPING=px;qn.DEFAULT_ANISOTROPY=1;const am=class am{constructor(t=0,n=0,a=0,l=1){this.x=t,this.y=n,this.z=a,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,a,l){return this.x=t,this.y=n,this.z=a,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,a=this.y,l=this.z,c=this.w,u=t.elements;return this.x=u[0]*n+u[4]*a+u[8]*l+u[12]*c,this.y=u[1]*n+u[5]*a+u[9]*l+u[13]*c,this.z=u[2]*n+u[6]*a+u[10]*l+u[14]*c,this.w=u[3]*n+u[7]*a+u[11]*l+u[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,a,l,c;const m=t.elements,p=m[0],_=m[4],v=m[8],g=m[1],x=m[5],E=m[9],R=m[2],M=m[6],S=m[10];if(Math.abs(_-g)<.01&&Math.abs(v-R)<.01&&Math.abs(E-M)<.01){if(Math.abs(_+g)<.1&&Math.abs(v+R)<.1&&Math.abs(E+M)<.1&&Math.abs(p+x+S-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const N=(p+1)/2,A=(x+1)/2,z=(S+1)/2,O=(_+g)/4,D=(v+R)/4,T=(E+M)/4;return N>A&&N>z?N<.01?(a=0,l=.707106781,c=.707106781):(a=Math.sqrt(N),l=O/a,c=D/a):A>z?A<.01?(a=.707106781,l=0,c=.707106781):(l=Math.sqrt(A),a=O/l,c=T/l):z<.01?(a=.707106781,l=.707106781,c=0):(c=Math.sqrt(z),a=D/c,l=T/c),this.set(a,l,c,n),this}let B=Math.sqrt((M-E)*(M-E)+(v-R)*(v-R)+(g-_)*(g-_));return Math.abs(B)<.001&&(B=1),this.x=(M-E)/B,this.y=(v-R)/B,this.z=(g-_)/B,this.w=Math.acos((p+x+S-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Te(this.x,t.x,n.x),this.y=Te(this.y,t.y,n.y),this.z=Te(this.z,t.z,n.z),this.w=Te(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=Te(this.x,t,n),this.y=Te(this.y,t,n),this.z=Te(this.z,t,n),this.w=Te(this.w,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Te(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this.w=t.w+(n.w-t.w)*a,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};am.prototype.isVector4=!0;let rn=am;class pE extends $s{constructor(t=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},a),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=a.depth,this.scissor=new rn(0,0,t,n),this.scissorTest=!1,this.viewport=new rn(0,0,t,n),this.textures=[];const l={width:t,height:n,depth:a.depth},c=new qn(l),u=a.count;for(let d=0;d<u;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview,this.useArrayDepthTexture=a.useArrayDepthTexture}_setTextureOptions(t={}){const n={minFilter:Fn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,a=1){if(this.width!==t||this.height!==n||this.depth!==a){this.width=t,this.height=n,this.depth=a;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=n,this.textures[l].image.depth=a,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,a=t.textures.length;n<a;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const l=Object.assign({},t.textures[n].image);this.textures[n].source=new Vp(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ea extends pE{constructor(t=1,n=1,a={}){super(t,n,a),this.isWebGLRenderTarget=!0}}class Ex extends qn{constructor(t=null,n=1,a=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:a,depth:l},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=Da,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class mE extends qn{constructor(t=null,n=1,a=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:a,depth:l},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=Da,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Nu=class Nu{constructor(t,n,a,l,c,u,d,m,p,_,v,g,x,E,R,M){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,a,l,c,u,d,m,p,_,v,g,x,E,R,M)}set(t,n,a,l,c,u,d,m,p,_,v,g,x,E,R,M){const S=this.elements;return S[0]=t,S[4]=n,S[8]=a,S[12]=l,S[1]=c,S[5]=u,S[9]=d,S[13]=m,S[2]=p,S[6]=_,S[10]=v,S[14]=g,S[3]=x,S[7]=E,S[11]=R,S[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Nu().fromArray(this.elements)}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(t){const n=this.elements,a=t.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,a){return this.determinantAffine()===0?(t.set(1,0,0),n.set(0,1,0),a.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this)}makeBasis(t,n,a){return this.set(t.x,n.x,a.x,0,t.y,n.y,a.y,0,t.z,n.z,a.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const n=this.elements,a=t.elements,l=1/Pr.setFromMatrixColumn(t,0).length(),c=1/Pr.setFromMatrixColumn(t,1).length(),u=1/Pr.setFromMatrixColumn(t,2).length();return n[0]=a[0]*l,n[1]=a[1]*l,n[2]=a[2]*l,n[3]=0,n[4]=a[4]*c,n[5]=a[5]*c,n[6]=a[6]*c,n[7]=0,n[8]=a[8]*u,n[9]=a[9]*u,n[10]=a[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,a=t.x,l=t.y,c=t.z,u=Math.cos(a),d=Math.sin(a),m=Math.cos(l),p=Math.sin(l),_=Math.cos(c),v=Math.sin(c);if(t.order==="XYZ"){const g=u*_,x=u*v,E=d*_,R=d*v;n[0]=m*_,n[4]=-m*v,n[8]=p,n[1]=x+E*p,n[5]=g-R*p,n[9]=-d*m,n[2]=R-g*p,n[6]=E+x*p,n[10]=u*m}else if(t.order==="YXZ"){const g=m*_,x=m*v,E=p*_,R=p*v;n[0]=g+R*d,n[4]=E*d-x,n[8]=u*p,n[1]=u*v,n[5]=u*_,n[9]=-d,n[2]=x*d-E,n[6]=R+g*d,n[10]=u*m}else if(t.order==="ZXY"){const g=m*_,x=m*v,E=p*_,R=p*v;n[0]=g-R*d,n[4]=-u*v,n[8]=E+x*d,n[1]=x+E*d,n[5]=u*_,n[9]=R-g*d,n[2]=-u*p,n[6]=d,n[10]=u*m}else if(t.order==="ZYX"){const g=u*_,x=u*v,E=d*_,R=d*v;n[0]=m*_,n[4]=E*p-x,n[8]=g*p+R,n[1]=m*v,n[5]=R*p+g,n[9]=x*p-E,n[2]=-p,n[6]=d*m,n[10]=u*m}else if(t.order==="YZX"){const g=u*m,x=u*p,E=d*m,R=d*p;n[0]=m*_,n[4]=R-g*v,n[8]=E*v+x,n[1]=v,n[5]=u*_,n[9]=-d*_,n[2]=-p*_,n[6]=x*v+E,n[10]=g-R*v}else if(t.order==="XZY"){const g=u*m,x=u*p,E=d*m,R=d*p;n[0]=m*_,n[4]=-v,n[8]=p*_,n[1]=g*v+R,n[5]=u*_,n[9]=x*v-E,n[2]=E*v-x,n[6]=d*_,n[10]=R*v+g}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(gE,t,vE)}lookAt(t,n,a){const l=this.elements;return di.subVectors(t,n),di.lengthSq()===0&&(di.z=1),di.normalize(),ls.crossVectors(a,di),ls.lengthSq()===0&&(Math.abs(a.z)===1?di.x+=1e-4:di.z+=1e-4,di.normalize(),ls.crossVectors(a,di)),ls.normalize(),Hc.crossVectors(di,ls),l[0]=ls.x,l[4]=Hc.x,l[8]=di.x,l[1]=ls.y,l[5]=Hc.y,l[9]=di.y,l[2]=ls.z,l[6]=Hc.z,l[10]=di.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,l=n.elements,c=this.elements,u=a[0],d=a[4],m=a[8],p=a[12],_=a[1],v=a[5],g=a[9],x=a[13],E=a[2],R=a[6],M=a[10],S=a[14],B=a[3],N=a[7],A=a[11],z=a[15],O=l[0],D=l[4],T=l[8],U=l[12],V=l[1],G=l[5],Z=l[9],et=l[13],ft=l[2],Y=l[6],I=l[10],F=l[14],tt=l[3],pt=l[7],St=l[11],P=l[15];return c[0]=u*O+d*V+m*ft+p*tt,c[4]=u*D+d*G+m*Y+p*pt,c[8]=u*T+d*Z+m*I+p*St,c[12]=u*U+d*et+m*F+p*P,c[1]=_*O+v*V+g*ft+x*tt,c[5]=_*D+v*G+g*Y+x*pt,c[9]=_*T+v*Z+g*I+x*St,c[13]=_*U+v*et+g*F+x*P,c[2]=E*O+R*V+M*ft+S*tt,c[6]=E*D+R*G+M*Y+S*pt,c[10]=E*T+R*Z+M*I+S*St,c[14]=E*U+R*et+M*F+S*P,c[3]=B*O+N*V+A*ft+z*tt,c[7]=B*D+N*G+A*Y+z*pt,c[11]=B*T+N*Z+A*I+z*St,c[15]=B*U+N*et+A*F+z*P,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[4],l=t[8],c=t[12],u=t[1],d=t[5],m=t[9],p=t[13],_=t[2],v=t[6],g=t[10],x=t[14],E=t[3],R=t[7],M=t[11],S=t[15],B=m*x-p*g,N=d*x-p*v,A=d*g-m*v,z=u*x-p*_,O=u*g-m*_,D=u*v-d*_;return n*(R*B-M*N+S*A)-a*(E*B-M*z+S*O)+l*(E*N-R*z+S*D)-c*(E*A-R*O+M*D)}determinantAffine(){const t=this.elements,n=t[0],a=t[4],l=t[8],c=t[1],u=t[5],d=t[9],m=t[2],p=t[6],_=t[10];return n*(u*_-d*p)-a*(c*_-d*m)+l*(c*p-u*m)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,a){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=n,l[14]=a),this}invert(){const t=this.elements,n=t[0],a=t[1],l=t[2],c=t[3],u=t[4],d=t[5],m=t[6],p=t[7],_=t[8],v=t[9],g=t[10],x=t[11],E=t[12],R=t[13],M=t[14],S=t[15],B=n*d-a*u,N=n*m-l*u,A=n*p-c*u,z=a*m-l*d,O=a*p-c*d,D=l*p-c*m,T=_*R-v*E,U=_*M-g*E,V=_*S-x*E,G=v*M-g*R,Z=v*S-x*R,et=g*S-x*M,ft=B*et-N*Z+A*G+z*V-O*U+D*T;if(ft===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Y=1/ft;return t[0]=(d*et-m*Z+p*G)*Y,t[1]=(l*Z-a*et-c*G)*Y,t[2]=(R*D-M*O+S*z)*Y,t[3]=(g*O-v*D-x*z)*Y,t[4]=(m*V-u*et-p*U)*Y,t[5]=(n*et-l*V+c*U)*Y,t[6]=(M*A-E*D-S*N)*Y,t[7]=(_*D-g*A+x*N)*Y,t[8]=(u*Z-d*V+p*T)*Y,t[9]=(a*V-n*Z-c*T)*Y,t[10]=(E*O-R*A+S*B)*Y,t[11]=(v*A-_*O-x*B)*Y,t[12]=(d*U-u*G-m*T)*Y,t[13]=(n*G-a*U+l*T)*Y,t[14]=(R*N-E*z-M*B)*Y,t[15]=(_*z-v*N+g*B)*Y,this}scale(t){const n=this.elements,a=t.x,l=t.y,c=t.z;return n[0]*=a,n[4]*=l,n[8]*=c,n[1]*=a,n[5]*=l,n[9]*=c,n[2]*=a,n[6]*=l,n[10]*=c,n[3]*=a,n[7]*=l,n[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,a,l))}makeTranslation(t,n,a){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),a=Math.sin(t);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const a=Math.cos(n),l=Math.sin(n),c=1-a,u=t.x,d=t.y,m=t.z,p=c*u,_=c*d;return this.set(p*u+a,p*d-l*m,p*m+l*d,0,p*d+l*m,_*d+a,_*m-l*u,0,p*m-l*d,_*m+l*u,c*m*m+a,0,0,0,0,1),this}makeScale(t,n,a){return this.set(t,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(t,n,a,l,c,u){return this.set(1,a,c,0,t,1,u,0,n,l,1,0,0,0,0,1),this}compose(t,n,a){const l=this.elements,c=n._x,u=n._y,d=n._z,m=n._w,p=c+c,_=u+u,v=d+d,g=c*p,x=c*_,E=c*v,R=u*_,M=u*v,S=d*v,B=m*p,N=m*_,A=m*v,z=a.x,O=a.y,D=a.z;return l[0]=(1-(R+S))*z,l[1]=(x+A)*z,l[2]=(E-N)*z,l[3]=0,l[4]=(x-A)*O,l[5]=(1-(g+S))*O,l[6]=(M+B)*O,l[7]=0,l[8]=(E+N)*D,l[9]=(M-B)*D,l[10]=(1-(g+R))*D,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,n,a){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const c=this.determinantAffine();if(c===0)return a.set(1,1,1),n.identity(),this;let u=Pr.set(l[0],l[1],l[2]).length();const d=Pr.set(l[4],l[5],l[6]).length(),m=Pr.set(l[8],l[9],l[10]).length();c<0&&(u=-u),Oi.copy(this);const p=1/u,_=1/d,v=1/m;return Oi.elements[0]*=p,Oi.elements[1]*=p,Oi.elements[2]*=p,Oi.elements[4]*=_,Oi.elements[5]*=_,Oi.elements[6]*=_,Oi.elements[8]*=v,Oi.elements[9]*=v,Oi.elements[10]*=v,n.setFromRotationMatrix(Oi),a.x=u,a.y=d,a.z=m,this}makePerspective(t,n,a,l,c,u,d=ji,m=!1){const p=this.elements,_=2*c/(n-t),v=2*c/(a-l),g=(n+t)/(n-t),x=(a+l)/(a-l);let E,R;if(m)E=c/(u-c),R=u*c/(u-c);else if(d===ji)E=-(u+c)/(u-c),R=-2*u*c/(u-c);else if(d===_l)E=-u/(u-c),R=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=v,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=R,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,n,a,l,c,u,d=ji,m=!1){const p=this.elements,_=2/(n-t),v=2/(a-l),g=-(n+t)/(n-t),x=-(a+l)/(a-l);let E,R;if(m)E=1/(u-c),R=u/(u-c);else if(d===ji)E=-2/(u-c),R=-(u+c)/(u-c);else if(d===_l)E=-1/(u-c),R=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=0,p[12]=g,p[1]=0,p[5]=v,p[9]=0,p[13]=x,p[2]=0,p[6]=0,p[10]=E,p[14]=R,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const n=this.elements,a=t.elements;for(let l=0;l<16;l++)if(n[l]!==a[l])return!1;return!0}fromArray(t,n=0){for(let a=0;a<16;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t[n+9]=a[9],t[n+10]=a[10],t[n+11]=a[11],t[n+12]=a[12],t[n+13]=a[13],t[n+14]=a[14],t[n+15]=a[15],t}};Nu.prototype.isMatrix4=!0;let $e=Nu;const Pr=new k,Oi=new $e,gE=new k(0,0,0),vE=new k(1,1,1),ls=new k,Hc=new k,di=new k,r_=new $e,o_=new so;class xs{constructor(t=0,n=0,a=0,l=xs.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=a,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,a,l=this._order){return this._x=t,this._y=n,this._z=a,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,a=!0){const l=t.elements,c=l[0],u=l[4],d=l[8],m=l[1],p=l[5],_=l[9],v=l[2],g=l[6],x=l[10];switch(n){case"XYZ":this._y=Math.asin(Te(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,x),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Te(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,x),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(Te(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-v,x),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Te(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(g,x),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(Te(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(d,x));break;case"XZY":this._z=Math.asin(-Te(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-_,x),this._y=0);break;default:de("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,a){return r_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(r_,n,a)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return o_.setFromEuler(this),this.setFromQuaternion(o_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xs.DEFAULT_ORDER="XYZ";class bx{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let _E=0;const l_=new k,zr=new so,ba=new $e,Gc=new k,el=new k,xE=new k,SE=new so,c_=new k(1,0,0),u_=new k(0,1,0),f_=new k(0,0,1),h_={type:"added"},yE={type:"removed"},Br={type:"childadded",child:null},ed={type:"childremoved",child:null};class Mn extends $s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_E++}),this.uuid=tr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mn.DEFAULT_UP.clone();const t=new k,n=new xs,a=new so,l=new k(1,1,1);function c(){a.setFromEuler(n,!1)}function u(){n.setFromQuaternion(a,void 0,!1)}n._onChange(c),a._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new $e},normalMatrix:{value:new ve}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=Mn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return zr.setFromAxisAngle(t,n),this.quaternion.multiply(zr),this}rotateOnWorldAxis(t,n){return zr.setFromAxisAngle(t,n),this.quaternion.premultiply(zr),this}rotateX(t){return this.rotateOnAxis(c_,t)}rotateY(t){return this.rotateOnAxis(u_,t)}rotateZ(t){return this.rotateOnAxis(f_,t)}translateOnAxis(t,n){return l_.copy(t).applyQuaternion(this.quaternion),this.position.add(l_.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(c_,t)}translateY(t){return this.translateOnAxis(u_,t)}translateZ(t){return this.translateOnAxis(f_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ba.copy(this.matrixWorld).invert())}lookAt(t,n,a){t.isVector3?Gc.copy(t):Gc.set(t,n,a);const l=this.parent;this.updateWorldMatrix(!0,!1),el.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ba.lookAt(el,Gc,this.up):ba.lookAt(Gc,el,this.up),this.quaternion.setFromRotationMatrix(ba),l&&(ba.extractRotation(l.matrixWorld),zr.setFromRotationMatrix(ba),this.quaternion.premultiply(zr.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(Le("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(h_),Br.child=t,this.dispatchEvent(Br),Br.child=null):Le("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(yE),ed.child=t,this.dispatchEvent(ed),ed.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ba.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ba.multiply(t.parent.matrixWorld)),t.applyMatrix4(ba),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(h_),Br.child=t,this.dispatchEvent(Br),Br.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let a=0,l=this.children.length;a<l;a++){const u=this.children[a].getObjectByProperty(t,n);if(u!==void 0)return u}}getObjectsByProperty(t,n,a=[]){this[t]===n&&a.push(this);const l=this.children;for(let c=0,u=l.length;c<u;c++)l[c].getObjectsByProperty(t,n,a);return a}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(el,t,xE),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(el,SE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let a=0,l=n.length;a<l;a++)n[a].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let a=0,l=n.length;a<l;a++)n[a].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const n=t.x,a=t.y,l=t.z,c=this.matrix.elements;c[12]+=n-c[0]*n-c[4]*a-c[8]*l,c[13]+=a-c[1]*n-c[5]*a-c[9]*l,c[14]+=l-c[2]*n-c[6]*a-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let a=0,l=n.length;a<l;a++)n[a].updateMatrixWorld(t)}updateWorldMatrix(t,n,a=!1){const l=this.parent;if(t===!0&&l!==null&&l.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||a)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,a=!0),n===!0){const c=this.children;for(let u=0,d=c.length;u<d;u++)c[u].updateWorldMatrix(!1,!0,a)}}toJSON(t){const n=t===void 0||typeof t=="string",a={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const v=m[p];c(t.shapes,v)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(n){const d=u(t.geometries),m=u(t.materials),p=u(t.textures),_=u(t.images),v=u(t.shapes),g=u(t.skeletons),x=u(t.animations),E=u(t.nodes);d.length>0&&(a.geometries=d),m.length>0&&(a.materials=m),p.length>0&&(a.textures=p),_.length>0&&(a.images=_),v.length>0&&(a.shapes=v),g.length>0&&(a.skeletons=g),x.length>0&&(a.animations=x),E.length>0&&(a.nodes=E)}return a.object=l,a;function u(d){const m=[];for(const p in d){const _=d[p];delete _.metadata,m.push(_)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let a=0;a<t.children.length;a++){const l=t.children[a];this.add(l.clone())}return this}}Mn.DEFAULT_UP=new k(0,1,0);Mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Wn extends Mn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ME={type:"move"};class nd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const a of t.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,a){let l=null,c=null,u=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(p&&t.hand){u=!0;for(const R of t.hand.values()){const M=n.getJointPose(R,a),S=this._getHandJoint(p,R);M!==null&&(S.matrix.fromArray(M.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=M.radius),S.visible=M!==null}const _=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],g=_.position.distanceTo(v.position),x=.02,E=.005;p.inputState.pinching&&g>x+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&g<=x-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=n.getPose(t.gripSpace,a),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:t,target:this})));d!==null&&(l=n.getPose(t.targetRaySpace,a),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(ME)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const a=new Wn;a.matrixAutoUpdate=!1,a.visible=!1,t.joints[n.jointName]=a,t.add(a)}return t.joints[n.jointName]}}const Tx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cs={h:0,s:0,l:0},Vc={h:0,s:0,l:0};function id(r,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?r+(t-r)*6*n:n<1/2?t:n<2/3?r+(t-r)*6*(2/3-n):r}class Me{constructor(t,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,a)}set(t,n,a){if(n===void 0&&a===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,n,a);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=mi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ne.colorSpaceToWorking(this,n),this}setRGB(t,n,a,l=Ne.workingColorSpace){return this.r=t,this.g=n,this.b=a,Ne.colorSpaceToWorking(this,l),this}setHSL(t,n,a,l=Ne.workingColorSpace){if(t=Gp(t,1),n=Te(n,0,1),a=Te(a,0,1),n===0)this.r=this.g=this.b=a;else{const c=a<=.5?a*(1+n):a+n-a*n,u=2*a-c;this.r=id(u,c,t+1/3),this.g=id(u,c,t),this.b=id(u,c,t-1/3)}return Ne.colorSpaceToWorking(this,l),this}setStyle(t,n=mi){function a(c){c!==void 0&&parseFloat(c)<1&&de("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const u=l[1],d=l[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return a(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return a(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return a(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:de("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);de("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=mi){const a=Tx[t.toLowerCase()];return a!==void 0?this.setHex(a,n):de("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Na(t.r),this.g=Na(t.g),this.b=Na(t.b),this}copyLinearToSRGB(t){return this.r=$r(t.r),this.g=$r(t.g),this.b=$r(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=mi){return Ne.workingToColorSpace(In.copy(this),t),Math.round(Te(In.r*255,0,255))*65536+Math.round(Te(In.g*255,0,255))*256+Math.round(Te(In.b*255,0,255))}getHexString(t=mi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Ne.workingColorSpace){Ne.workingToColorSpace(In.copy(this),n);const a=In.r,l=In.g,c=In.b,u=Math.max(a,l,c),d=Math.min(a,l,c);let m,p;const _=(d+u)/2;if(d===u)m=0,p=0;else{const v=u-d;switch(p=_<=.5?v/(u+d):v/(2-u-d),u){case a:m=(l-c)/v+(l<c?6:0);break;case l:m=(c-a)/v+2;break;case c:m=(a-l)/v+4;break}m/=6}return t.h=m,t.s=p,t.l=_,t}getRGB(t,n=Ne.workingColorSpace){return Ne.workingToColorSpace(In.copy(this),n),t.r=In.r,t.g=In.g,t.b=In.b,t}getStyle(t=mi){Ne.workingToColorSpace(In.copy(this),t);const n=In.r,a=In.g,l=In.b;return t!==mi?`color(${t} ${n.toFixed(3)} ${a.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(l*255)})`}offsetHSL(t,n,a){return this.getHSL(cs),this.setHSL(cs.h+t,cs.s+n,cs.l+a)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,a){return this.r=t.r+(n.r-t.r)*a,this.g=t.g+(n.g-t.g)*a,this.b=t.b+(n.b-t.b)*a,this}lerpHSL(t,n){this.getHSL(cs),t.getHSL(Vc);const a=dl(cs.h,Vc.h,n),l=dl(cs.s,Vc.s,n),c=dl(cs.l,Vc.l,n);return this.setHSL(a,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,a=this.g,l=this.b,c=t.elements;return this.r=c[0]*n+c[3]*a+c[6]*l,this.g=c[1]*n+c[4]*a+c[7]*l,this.b=c[2]*n+c[5]*a+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const In=new Me;Me.NAMES=Tx;class kp{constructor(t,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new Me(t),this.density=n}clone(){return new kp(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class EE extends Mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xs,this.environmentIntensity=1,this.environmentRotation=new xs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Pi=new k,Ta=new k,ad=new k,Aa=new k,Ir=new k,Fr=new k,d_=new k,sd=new k,rd=new k,od=new k,ld=new rn,cd=new rn,ud=new rn;class wi{constructor(t=new k,n=new k,a=new k){this.a=t,this.b=n,this.c=a}static getNormal(t,n,a,l){l.subVectors(a,n),Pi.subVectors(t,n),l.cross(Pi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,n,a,l,c){Pi.subVectors(l,n),Ta.subVectors(a,n),ad.subVectors(t,n);const u=Pi.dot(Pi),d=Pi.dot(Ta),m=Pi.dot(ad),p=Ta.dot(Ta),_=Ta.dot(ad),v=u*p-d*d;if(v===0)return c.set(0,0,0),null;const g=1/v,x=(p*m-d*_)*g,E=(u*_-d*m)*g;return c.set(1-x-E,E,x)}static containsPoint(t,n,a,l){return this.getBarycoord(t,n,a,l,Aa)===null?!1:Aa.x>=0&&Aa.y>=0&&Aa.x+Aa.y<=1}static getInterpolation(t,n,a,l,c,u,d,m){return this.getBarycoord(t,n,a,l,Aa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Aa.x),m.addScaledVector(u,Aa.y),m.addScaledVector(d,Aa.z),m)}static getInterpolatedAttribute(t,n,a,l,c,u){return ld.setScalar(0),cd.setScalar(0),ud.setScalar(0),ld.fromBufferAttribute(t,n),cd.fromBufferAttribute(t,a),ud.fromBufferAttribute(t,l),u.setScalar(0),u.addScaledVector(ld,c.x),u.addScaledVector(cd,c.y),u.addScaledVector(ud,c.z),u}static isFrontFacing(t,n,a,l){return Pi.subVectors(a,n),Ta.subVectors(t,n),Pi.cross(Ta).dot(l)<0}set(t,n,a){return this.a.copy(t),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(t,n,a,l){return this.a.copy(t[n]),this.b.copy(t[a]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,n,a,l){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,a),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Pi.subVectors(this.c,this.b),Ta.subVectors(this.a,this.b),Pi.cross(Ta).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return wi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return wi.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,a,l,c){return wi.getInterpolation(t,this.a,this.b,this.c,n,a,l,c)}containsPoint(t){return wi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return wi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const a=this.a,l=this.b,c=this.c;let u,d;Ir.subVectors(l,a),Fr.subVectors(c,a),sd.subVectors(t,a);const m=Ir.dot(sd),p=Fr.dot(sd);if(m<=0&&p<=0)return n.copy(a);rd.subVectors(t,l);const _=Ir.dot(rd),v=Fr.dot(rd);if(_>=0&&v<=_)return n.copy(l);const g=m*v-_*p;if(g<=0&&m>=0&&_<=0)return u=m/(m-_),n.copy(a).addScaledVector(Ir,u);od.subVectors(t,c);const x=Ir.dot(od),E=Fr.dot(od);if(E>=0&&x<=E)return n.copy(c);const R=x*p-m*E;if(R<=0&&p>=0&&E<=0)return d=p/(p-E),n.copy(a).addScaledVector(Fr,d);const M=_*E-x*v;if(M<=0&&v-_>=0&&x-E>=0)return d_.subVectors(c,l),d=(v-_)/(v-_+(x-E)),n.copy(l).addScaledVector(d_,d);const S=1/(M+R+g);return u=R*S,d=g*S,n.copy(a).addScaledVector(Ir,u).addScaledVector(Fr,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class bl{constructor(t=new k(1/0,1/0,1/0),n=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n+=3)this.expandByPoint(zi.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,a=t.count;n<a;n++)this.expandByPoint(zi.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const a=zi.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(a),this.max.copy(t).add(a),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const a=t.geometry;if(a!==void 0){const c=a.getAttribute("position");if(n===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let u=0,d=c.count;u<d;u++)t.isMesh===!0?t.getVertexPosition(u,zi):zi.fromBufferAttribute(c,u),zi.applyMatrix4(t.matrixWorld),this.expandByPoint(zi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),kc.copy(t.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),kc.copy(a.boundingBox)),kc.applyMatrix4(t.matrixWorld),this.union(kc)}const l=t.children;for(let c=0,u=l.length;c<u;c++)this.expandByObject(l[c],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,zi),zi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,a;return t.normal.x>0?(n=t.normal.x*this.min.x,a=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,a=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,a+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,a+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,a+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,a+=t.normal.z*this.min.z),n<=-t.constant&&a>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(nl),Xc.subVectors(this.max,nl),Hr.subVectors(t.a,nl),Gr.subVectors(t.b,nl),Vr.subVectors(t.c,nl),us.subVectors(Gr,Hr),fs.subVectors(Vr,Gr),Gs.subVectors(Hr,Vr);let n=[0,-us.z,us.y,0,-fs.z,fs.y,0,-Gs.z,Gs.y,us.z,0,-us.x,fs.z,0,-fs.x,Gs.z,0,-Gs.x,-us.y,us.x,0,-fs.y,fs.x,0,-Gs.y,Gs.x,0];return!fd(n,Hr,Gr,Vr,Xc)||(n=[1,0,0,0,1,0,0,0,1],!fd(n,Hr,Gr,Vr,Xc))?!1:(Wc.crossVectors(us,fs),n=[Wc.x,Wc.y,Wc.z],fd(n,Hr,Gr,Vr,Xc))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,zi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(zi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ra[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ra[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ra[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ra[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ra[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ra[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ra[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ra[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ra),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ra=[new k,new k,new k,new k,new k,new k,new k,new k],zi=new k,kc=new bl,Hr=new k,Gr=new k,Vr=new k,us=new k,fs=new k,Gs=new k,nl=new k,Xc=new k,Wc=new k,Vs=new k;function fd(r,t,n,a,l){for(let c=0,u=r.length-3;c<=u;c+=3){Vs.fromArray(r,c);const d=l.x*Math.abs(Vs.x)+l.y*Math.abs(Vs.y)+l.z*Math.abs(Vs.z),m=t.dot(Vs),p=n.dot(Vs),_=a.dot(Vs);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>d)return!1}return!0}const xn=new k,qc=new Ft;let bE=0;class Fi extends $s{constructor(t,n,a=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:bE++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=a,this.usage=jv,this.updateRanges=[],this.gpuType=Qi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,a){t*=this.itemSize,a*=n.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=n.array[a+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)qc.fromBufferAttribute(this,n),qc.applyMatrix3(t),this.setXY(n,qc.x,qc.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)xn.fromBufferAttribute(this,n),xn.applyMatrix3(t),this.setXYZ(n,xn.x,xn.y,xn.z);return this}applyMatrix4(t){for(let n=0,a=this.count;n<a;n++)xn.fromBufferAttribute(this,n),xn.applyMatrix4(t),this.setXYZ(n,xn.x,xn.y,xn.z);return this}applyNormalMatrix(t){for(let n=0,a=this.count;n<a;n++)xn.fromBufferAttribute(this,n),xn.applyNormalMatrix(t),this.setXYZ(n,xn.x,xn.y,xn.z);return this}transformDirection(t){for(let n=0,a=this.count;n<a;n++)xn.fromBufferAttribute(this,n),xn.transformDirection(t),this.setXYZ(n,xn.x,xn.y,xn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let a=this.array[t*this.itemSize+n];return this.normalized&&(a=Zr(a,this.array)),a}setComponent(t,n,a){return this.normalized&&(a=kn(a,this.array)),this.array[t*this.itemSize+n]=a,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Zr(n,this.array)),n}setX(t,n){return this.normalized&&(n=kn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Zr(n,this.array)),n}setY(t,n){return this.normalized&&(n=kn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Zr(n,this.array)),n}setZ(t,n){return this.normalized&&(n=kn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Zr(n,this.array)),n}setW(t,n){return this.normalized&&(n=kn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,a){return t*=this.itemSize,this.normalized&&(n=kn(n,this.array),a=kn(a,this.array)),this.array[t+0]=n,this.array[t+1]=a,this}setXYZ(t,n,a,l){return t*=this.itemSize,this.normalized&&(n=kn(n,this.array),a=kn(a,this.array),l=kn(l,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=l,this}setXYZW(t,n,a,l,c){return t*=this.itemSize,this.normalized&&(n=kn(n,this.array),a=kn(a,this.array),l=kn(l,this.array),c=kn(c,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==jv&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class Ax extends Fi{constructor(t,n,a){super(new Uint16Array(t),n,a)}}class Rx extends Fi{constructor(t,n,a){super(new Uint32Array(t),n,a)}}class ln extends Fi{constructor(t,n,a){super(new Float32Array(t),n,a)}}const TE=new bl,il=new k,hd=new k;class Tl{constructor(t=new k,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const a=this.center;n!==void 0?a.copy(n):TE.setFromPoints(t).getCenter(a);let l=0;for(let c=0,u=t.length;c<u;c++)l=Math.max(l,a.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const a=this.center.distanceToSquared(t);return n.copy(t),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;il.subVectors(t,this.center);const n=il.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),l=(a-this.radius)*.5;this.center.addScaledVector(il,l/a),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(hd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(il.copy(t.center).add(hd)),this.expandByPoint(il.copy(t.center).sub(hd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let AE=0;const Ai=new $e,dd=new Mn,kr=new k,pi=new bl,al=new bl,An=new k;class Rn extends $s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:AE++}),this.uuid=tr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(XM(t)?Rx:Ax)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,a=0){this.groups.push({start:t,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const c=new ve().getNormalMatrix(t);a.applyNormalMatrix(c),a.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Ai.makeRotationFromQuaternion(t),this.applyMatrix4(Ai),this}rotateX(t){return Ai.makeRotationX(t),this.applyMatrix4(Ai),this}rotateY(t){return Ai.makeRotationY(t),this.applyMatrix4(Ai),this}rotateZ(t){return Ai.makeRotationZ(t),this.applyMatrix4(Ai),this}translate(t,n,a){return Ai.makeTranslation(t,n,a),this.applyMatrix4(Ai),this}scale(t,n,a){return Ai.makeScale(t,n,a),this.applyMatrix4(Ai),this}lookAt(t){return dd.lookAt(t),dd.updateMatrix(),this.applyMatrix4(dd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(kr).negate(),this.translate(kr.x,kr.y,kr.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let l=0,c=t.length;l<c;l++){const u=t[l];a.push(u.x,u.y,u.z||0)}this.setAttribute("position",new ln(a,3))}else{const a=Math.min(t.length,n.count);for(let l=0;l<a;l++){const c=t[l];n.setXYZ(l,c.x,c.y,c.z||0)}t.length>n.count&&de("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bl);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Le("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let a=0,l=n.length;a<l;a++){const c=n[a];pi.setFromBufferAttribute(c),this.morphTargetsRelative?(An.addVectors(this.boundingBox.min,pi.min),this.boundingBox.expandByPoint(An),An.addVectors(this.boundingBox.max,pi.max),this.boundingBox.expandByPoint(An)):(this.boundingBox.expandByPoint(pi.min),this.boundingBox.expandByPoint(pi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Le('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tl);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Le("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(t){const a=this.boundingSphere.center;if(pi.setFromBufferAttribute(t),n)for(let c=0,u=n.length;c<u;c++){const d=n[c];al.setFromBufferAttribute(d),this.morphTargetsRelative?(An.addVectors(pi.min,al.min),pi.expandByPoint(An),An.addVectors(pi.max,al.max),pi.expandByPoint(An)):(pi.expandByPoint(al.min),pi.expandByPoint(al.max))}pi.getCenter(a);let l=0;for(let c=0,u=t.count;c<u;c++)An.fromBufferAttribute(t,c),l=Math.max(l,a.distanceToSquared(An));if(n)for(let c=0,u=n.length;c<u;c++){const d=n[c],m=this.morphTargetsRelative;for(let p=0,_=d.count;p<_;p++)An.fromBufferAttribute(d,p),m&&(kr.fromBufferAttribute(t,p),An.add(kr)),l=Math.max(l,a.distanceToSquared(An))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Le('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Le("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,l=n.normal,c=n.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==a.count)&&(u=new Fi(new Float32Array(4*a.count),4),this.setAttribute("tangent",u));const d=[],m=[];for(let T=0;T<a.count;T++)d[T]=new k,m[T]=new k;const p=new k,_=new k,v=new k,g=new Ft,x=new Ft,E=new Ft,R=new k,M=new k;function S(T,U,V){p.fromBufferAttribute(a,T),_.fromBufferAttribute(a,U),v.fromBufferAttribute(a,V),g.fromBufferAttribute(c,T),x.fromBufferAttribute(c,U),E.fromBufferAttribute(c,V),_.sub(p),v.sub(p),x.sub(g),E.sub(g);const G=1/(x.x*E.y-E.x*x.y);isFinite(G)&&(R.copy(_).multiplyScalar(E.y).addScaledVector(v,-x.y).multiplyScalar(G),M.copy(v).multiplyScalar(x.x).addScaledVector(_,-E.x).multiplyScalar(G),d[T].add(R),d[U].add(R),d[V].add(R),m[T].add(M),m[U].add(M),m[V].add(M))}let B=this.groups;B.length===0&&(B=[{start:0,count:t.count}]);for(let T=0,U=B.length;T<U;++T){const V=B[T],G=V.start,Z=V.count;for(let et=G,ft=G+Z;et<ft;et+=3)S(t.getX(et+0),t.getX(et+1),t.getX(et+2))}const N=new k,A=new k,z=new k,O=new k;function D(T){z.fromBufferAttribute(l,T),O.copy(z);const U=d[T];N.copy(U),N.sub(z.multiplyScalar(z.dot(U))).normalize(),A.crossVectors(O,U);const G=A.dot(m[T])<0?-1:1;u.setXYZW(T,N.x,N.y,N.z,G)}for(let T=0,U=B.length;T<U;++T){const V=B[T],G=V.start,Z=V.count;for(let et=G,ft=G+Z;et<ft;et+=3)D(t.getX(et+0)),D(t.getX(et+1)),D(t.getX(et+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0||a.count!==n.count)a=new Fi(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let g=0,x=a.count;g<x;g++)a.setXYZ(g,0,0,0);const l=new k,c=new k,u=new k,d=new k,m=new k,p=new k,_=new k,v=new k;if(t)for(let g=0,x=t.count;g<x;g+=3){const E=t.getX(g+0),R=t.getX(g+1),M=t.getX(g+2);l.fromBufferAttribute(n,E),c.fromBufferAttribute(n,R),u.fromBufferAttribute(n,M),_.subVectors(u,c),v.subVectors(l,c),_.cross(v),d.fromBufferAttribute(a,E),m.fromBufferAttribute(a,R),p.fromBufferAttribute(a,M),d.add(_),m.add(_),p.add(_),a.setXYZ(E,d.x,d.y,d.z),a.setXYZ(R,m.x,m.y,m.z),a.setXYZ(M,p.x,p.y,p.z)}else for(let g=0,x=n.count;g<x;g+=3)l.fromBufferAttribute(n,g+0),c.fromBufferAttribute(n,g+1),u.fromBufferAttribute(n,g+2),_.subVectors(u,c),v.subVectors(l,c),_.cross(v),a.setXYZ(g+0,_.x,_.y,_.z),a.setXYZ(g+1,_.x,_.y,_.z),a.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,a=t.count;n<a;n++)An.fromBufferAttribute(t,n),An.normalize(),t.setXYZ(n,An.x,An.y,An.z)}toNonIndexed(){function t(d,m){const p=d.array,_=d.itemSize,v=d.normalized,g=new p.constructor(m.length*_);let x=0,E=0;for(let R=0,M=m.length;R<M;R++){d.isInterleavedBufferAttribute?x=m[R]*d.data.stride+d.offset:x=m[R]*_;for(let S=0;S<_;S++)g[E++]=p[x++]}return new Fi(g,_,v)}if(this.index===null)return de("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Rn,a=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,a);n.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let _=0,v=p.length;_<v;_++){const g=p[_],x=t(g,a);m.push(x)}n.morphAttributes[d]=m}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,m=u.length;d<m;d++){const p=u[d];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const m in a){const p=a[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let v=0,g=p.length;v<g;v++){const x=p[v];_.push(x.toJSON(t.data))}_.length>0&&(l[m]=_,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(t.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const a=t.index;a!==null&&this.setIndex(a.clone());const l=t.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(n))}const c=t.morphAttributes;for(const p in c){const _=[],v=c[p];for(let g=0,x=v.length;g<x;g++)_.push(v[g].clone(n));this.morphAttributes[p]=_}this.morphTargetsRelative=t.morphTargetsRelative;const u=t.groups;for(let p=0,_=u.length;p<_;p++){const v=u[p];this.addGroup(v.start,v.count,v.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let RE=0;class Ss extends $s{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:RE++}),this.uuid=tr(),this.name="",this.type="Material",this.blending=Jr,this.side=_s,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Od,this.blendDst=Pd,this.blendEquation=qs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Me(0,0,0),this.blendAlpha=0,this.depthFunc=to,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Lr,this.stencilZFail=Lr,this.stencilZPass=Lr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const a=t[n];if(a===void 0){de(`Material: parameter '${n}' has value of undefined.`);continue}const l=this[n];if(l===void 0){de(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(a):l&&l.isVector2&&a&&a.isVector2||l&&l.isEuler&&a&&a.isEuler||l&&l.isVector3&&a&&a.isVector3?l.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(t).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(t).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(t).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(t).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(t).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==Jr&&(a.blending=this.blending),this.side!==_s&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==Od&&(a.blendSrc=this.blendSrc),this.blendDst!==Pd&&(a.blendDst=this.blendDst),this.blendEquation!==qs&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==to&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qv&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Lr&&(a.stencilFail=this.stencilFail),this.stencilZFail!==Lr&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==Lr&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.allowOverride===!1&&(a.allowOverride=!1),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function l(c){const u=[];for(const d in c){const m=c[d];delete m.metadata,u.push(m)}return u}if(n){const c=l(t.textures),u=l(t.images);c.length>0&&(a.textures=c),u.length>0&&(a.images=u)}return a}fromJSON(t,n){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Me().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=n[t.map]||null),t.matcap!==void 0&&(this.matcap=n[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=n[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=n[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=n[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let a=t.normalScale;Array.isArray(a)===!1&&(a=[a,a]),this.normalScale=new Ft().fromArray(a)}return t.displacementMap!==void 0&&(this.displacementMap=n[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=n[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=n[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=n[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=n[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=n[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=n[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=n[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=n[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=n[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=n[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ft().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=n[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=n[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=n[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=n[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=n[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let a=null;if(n!==null){const l=n.length;a=new Array(l);for(let c=0;c!==l;++c)a[c]=n[c].clone()}return this.clippingPlanes=a,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const wa=new k,pd=new k,Yc=new k,hs=new k,md=new k,Zc=new k,gd=new k;class Xp{constructor(t=new k,n=new k(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,wa)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=wa.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(wa.copy(this.origin).addScaledVector(this.direction,n),wa.distanceToSquared(t))}distanceSqToSegment(t,n,a,l){pd.copy(t).add(n).multiplyScalar(.5),Yc.copy(n).sub(t).normalize(),hs.copy(this.origin).sub(pd);const c=t.distanceTo(n)*.5,u=-this.direction.dot(Yc),d=hs.dot(this.direction),m=-hs.dot(Yc),p=hs.lengthSq(),_=Math.abs(1-u*u);let v,g,x,E;if(_>0)if(v=u*m-d,g=u*d-m,E=c*_,v>=0)if(g>=-E)if(g<=E){const R=1/_;v*=R,g*=R,x=v*(v+u*g+2*d)+g*(u*v+g+2*m)+p}else g=c,v=Math.max(0,-(u*g+d)),x=-v*v+g*(g+2*m)+p;else g=-c,v=Math.max(0,-(u*g+d)),x=-v*v+g*(g+2*m)+p;else g<=-E?(v=Math.max(0,-(-u*c+d)),g=v>0?-c:Math.min(Math.max(-c,-m),c),x=-v*v+g*(g+2*m)+p):g<=E?(v=0,g=Math.min(Math.max(-c,-m),c),x=g*(g+2*m)+p):(v=Math.max(0,-(u*c+d)),g=v>0?c:Math.min(Math.max(-c,-m),c),x=-v*v+g*(g+2*m)+p);else g=u>0?-c:c,v=Math.max(0,-(u*g+d)),x=-v*v+g*(g+2*m)+p;return a&&a.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(pd).addScaledVector(Yc,g),x}intersectSphere(t,n){wa.subVectors(t.center,this.origin);const a=wa.dot(this.direction),l=wa.dot(wa)-a*a,c=t.radius*t.radius;if(l>c)return null;const u=Math.sqrt(c-l),d=a-u,m=a+u;return m<0?null:d<0?this.at(m,n):this.at(d,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(t.normal)+t.constant)/n;return a>=0?a:null}intersectPlane(t,n){const a=this.distanceToPlane(t);return a===null?null:this.at(a,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let a,l,c,u,d,m;const p=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,g=this.origin;return p>=0?(a=(t.min.x-g.x)*p,l=(t.max.x-g.x)*p):(a=(t.max.x-g.x)*p,l=(t.min.x-g.x)*p),_>=0?(c=(t.min.y-g.y)*_,u=(t.max.y-g.y)*_):(c=(t.max.y-g.y)*_,u=(t.min.y-g.y)*_),a>u||c>l||((c>a||isNaN(a))&&(a=c),(u<l||isNaN(l))&&(l=u),v>=0?(d=(t.min.z-g.z)*v,m=(t.max.z-g.z)*v):(d=(t.max.z-g.z)*v,m=(t.min.z-g.z)*v),a>m||d>l)||((d>a||a!==a)&&(a=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(a>=0?a:l,n)}intersectsBox(t){return this.intersectBox(t,wa)!==null}intersectTriangle(t,n,a,l,c){md.subVectors(n,t),Zc.subVectors(a,t),gd.crossVectors(md,Zc);let u=this.direction.dot(gd),d;if(u>0){if(l)return null;d=1}else if(u<0)d=-1,u=-u;else return null;hs.subVectors(this.origin,t);const m=d*this.direction.dot(Zc.crossVectors(hs,Zc));if(m<0)return null;const p=d*this.direction.dot(md.cross(hs));if(p<0||m+p>u)return null;const _=-d*hs.dot(gd);return _<0?null:this.at(_/u,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Al extends Ss{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xs,this.combine=ox,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const p_=new $e,ks=new Xp,Kc=new Tl,m_=new k,Jc=new k,Qc=new k,jc=new k,vd=new k,$c=new k,g_=new k,tu=new k;class On extends Mn{constructor(t=new Rn,n=new Al){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const l=n[a[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=l.length;c<u;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,n){const a=this.geometry,l=a.attributes.position,c=a.morphAttributes.position,u=a.morphTargetsRelative;n.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){$c.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const _=d[m],v=c[m];_!==0&&(vd.fromBufferAttribute(v,t),u?$c.addScaledVector(vd,_):$c.addScaledVector(vd.sub(n),_))}n.add($c)}return n}raycast(t,n){const a=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),Kc.copy(a.boundingSphere),Kc.applyMatrix4(c),ks.copy(t.ray).recast(t.near),!(Kc.containsPoint(ks.origin)===!1&&(ks.intersectSphere(Kc,m_)===null||ks.origin.distanceToSquared(m_)>(t.far-t.near)**2))&&(p_.copy(c).invert(),ks.copy(t.ray).applyMatrix4(p_),!(a.boundingBox!==null&&ks.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(t,n,ks)))}_computeIntersections(t,n,a){let l;const c=this.geometry,u=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,_=c.attributes.uv1,v=c.attributes.normal,g=c.groups,x=c.drawRange;if(d!==null)if(Array.isArray(u))for(let E=0,R=g.length;E<R;E++){const M=g[E],S=u[M.materialIndex],B=Math.max(M.start,x.start),N=Math.min(d.count,Math.min(M.start+M.count,x.start+x.count));for(let A=B,z=N;A<z;A+=3){const O=d.getX(A),D=d.getX(A+1),T=d.getX(A+2);l=eu(this,S,t,a,p,_,v,O,D,T),l&&(l.faceIndex=Math.floor(A/3),l.face.materialIndex=M.materialIndex,n.push(l))}}else{const E=Math.max(0,x.start),R=Math.min(d.count,x.start+x.count);for(let M=E,S=R;M<S;M+=3){const B=d.getX(M),N=d.getX(M+1),A=d.getX(M+2);l=eu(this,u,t,a,p,_,v,B,N,A),l&&(l.faceIndex=Math.floor(M/3),n.push(l))}}else if(m!==void 0)if(Array.isArray(u))for(let E=0,R=g.length;E<R;E++){const M=g[E],S=u[M.materialIndex],B=Math.max(M.start,x.start),N=Math.min(m.count,Math.min(M.start+M.count,x.start+x.count));for(let A=B,z=N;A<z;A+=3){const O=A,D=A+1,T=A+2;l=eu(this,S,t,a,p,_,v,O,D,T),l&&(l.faceIndex=Math.floor(A/3),l.face.materialIndex=M.materialIndex,n.push(l))}}else{const E=Math.max(0,x.start),R=Math.min(m.count,x.start+x.count);for(let M=E,S=R;M<S;M+=3){const B=M,N=M+1,A=M+2;l=eu(this,u,t,a,p,_,v,B,N,A),l&&(l.faceIndex=Math.floor(M/3),n.push(l))}}}}function wE(r,t,n,a,l,c,u,d){let m;if(t.side===ei?m=a.intersectTriangle(u,c,l,!0,d):m=a.intersectTriangle(l,c,u,t.side===_s,d),m===null)return null;tu.copy(d),tu.applyMatrix4(r.matrixWorld);const p=n.ray.origin.distanceTo(tu);return p<n.near||p>n.far?null:{distance:p,point:tu.clone(),object:r}}function eu(r,t,n,a,l,c,u,d,m,p){r.getVertexPosition(d,Jc),r.getVertexPosition(m,Qc),r.getVertexPosition(p,jc);const _=wE(r,t,n,a,Jc,Qc,jc,g_);if(_){const v=new k;wi.getBarycoord(g_,Jc,Qc,jc,v),l&&(_.uv=wi.getInterpolatedAttribute(l,d,m,p,v,new Ft)),c&&(_.uv1=wi.getInterpolatedAttribute(c,d,m,p,v,new Ft)),u&&(_.normal=wi.getInterpolatedAttribute(u,d,m,p,v,new k),_.normal.dot(a.direction)>0&&_.normal.multiplyScalar(-1));const g={a:d,b:m,c:p,normal:new k,materialIndex:0};wi.getNormal(Jc,Qc,jc,g.normal),_.face=g,_.barycoord=v}return _}class CE extends qn{constructor(t=null,n=1,a=1,l,c,u,d,m,p=Ln,_=Ln,v,g){super(null,u,d,m,p,_,l,c,v,g),this.isDataTexture=!0,this.image={data:t,width:n,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const _d=new k,DE=new k,UE=new ve;class Ws{constructor(t=new k(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,a,l){return this.normal.set(t,n,a),this.constant=l,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,a){const l=_d.subVectors(a,n).cross(DE.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n,a=!0){const l=t.delta(_d),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/c;return a===!0&&(u<0||u>1)?null:n.copy(t.start).addScaledVector(l,u)}intersectsLine(t){const n=this.distanceToPoint(t.start),a=this.distanceToPoint(t.end);return n<0&&a>0||a<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const a=n||UE.getNormalMatrix(t),l=this.coplanarPoint(_d).applyMatrix4(t),c=this.normal.applyMatrix3(a).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xs=new Tl,NE=new Ft(.5,.5),nu=new k;class Wp{constructor(t=new Ws,n=new Ws,a=new Ws,l=new Ws,c=new Ws,u=new Ws){this.planes=[t,n,a,l,c,u]}set(t,n,a,l,c,u){const d=this.planes;return d[0].copy(t),d[1].copy(n),d[2].copy(a),d[3].copy(l),d[4].copy(c),d[5].copy(u),this}copy(t){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(t.planes[a]);return this}setFromProjectionMatrix(t,n=ji,a=!1){const l=this.planes,c=t.elements,u=c[0],d=c[1],m=c[2],p=c[3],_=c[4],v=c[5],g=c[6],x=c[7],E=c[8],R=c[9],M=c[10],S=c[11],B=c[12],N=c[13],A=c[14],z=c[15];if(l[0].setComponents(p-u,x-_,S-E,z-B).normalize(),l[1].setComponents(p+u,x+_,S+E,z+B).normalize(),l[2].setComponents(p+d,x+v,S+R,z+N).normalize(),l[3].setComponents(p-d,x-v,S-R,z-N).normalize(),a)l[4].setComponents(m,g,M,A).normalize(),l[5].setComponents(p-m,x-g,S-M,z-A).normalize();else if(l[4].setComponents(p-m,x-g,S-M,z-A).normalize(),n===ji)l[5].setComponents(p+m,x+g,S+M,z+A).normalize();else if(n===_l)l[5].setComponents(m,g,M,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Xs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Xs.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Xs)}intersectsSprite(t){Xs.center.set(0,0,0);const n=NE.distanceTo(t.center);return Xs.radius=.7071067811865476+n,Xs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Xs)}intersectsSphere(t){const n=this.planes,a=t.center,l=-t.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(a)<l)return!1;return!0}intersectsBox(t){const n=this.planes;for(let a=0;a<6;a++){const l=n[a];if(nu.x=l.normal.x>0?t.max.x:t.min.x,nu.y=l.normal.y>0?t.max.y:t.min.y,nu.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(nu)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class qp extends Ss{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Me(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const wu=new k,Cu=new k,v_=new $e,sl=new Xp,iu=new Tl,xd=new k,__=new k;class wx extends Mn{constructor(t=new Rn,n=new qp){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,a=[0];for(let l=1,c=n.count;l<c;l++)wu.fromBufferAttribute(n,l-1),Cu.fromBufferAttribute(n,l),a[l]=a[l-1],a[l]+=wu.distanceTo(Cu);t.setAttribute("lineDistance",new ln(a,1))}else de("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,n){const a=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,u=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),iu.copy(a.boundingSphere),iu.applyMatrix4(l),iu.radius+=c,t.ray.intersectsSphere(iu)===!1)return;v_.copy(l).invert(),sl.copy(t.ray).applyMatrix4(v_);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,_=a.index,g=a.attributes.position;if(_!==null){const x=Math.max(0,u.start),E=Math.min(_.count,u.start+u.count);for(let R=x,M=E-1;R<M;R+=p){const S=_.getX(R),B=_.getX(R+1),N=au(this,t,sl,m,S,B,R);N&&n.push(N)}if(this.isLineLoop){const R=_.getX(E-1),M=_.getX(x),S=au(this,t,sl,m,R,M,E-1);S&&n.push(S)}}else{const x=Math.max(0,u.start),E=Math.min(g.count,u.start+u.count);for(let R=x,M=E-1;R<M;R+=p){const S=au(this,t,sl,m,R,R+1,R);S&&n.push(S)}if(this.isLineLoop){const R=au(this,t,sl,m,E-1,x,E-1);R&&n.push(R)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const l=n[a[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=l.length;c<u;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function au(r,t,n,a,l,c,u){const d=r.geometry.attributes.position;if(wu.fromBufferAttribute(d,l),Cu.fromBufferAttribute(d,c),n.distanceSqToSegment(wu,Cu,xd,__)>a)return;xd.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(xd);if(!(p<t.near||p>t.far))return{distance:p,point:__.clone().applyMatrix4(r.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:r}}const x_=new k,S_=new k;class LE extends wx{constructor(t,n){super(t,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,a=[];for(let l=0,c=n.count;l<c;l+=2)x_.fromBufferAttribute(n,l),S_.fromBufferAttribute(n,l+1),a[l]=l===0?0:a[l-1],a[l+1]=a[l]+x_.distanceTo(S_);t.setAttribute("lineDistance",new ln(a,1))}else de("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Cx extends Ss{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Me(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const y_=new $e,Mp=new Xp,su=new Tl,ru=new k;class OE extends Mn{constructor(t=new Rn,n=new Cx){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,n){const a=this.geometry,l=this.matrixWorld,c=t.params.Points.threshold,u=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),su.copy(a.boundingSphere),su.applyMatrix4(l),su.radius+=c,t.ray.intersectsSphere(su)===!1)return;y_.copy(l).invert(),Mp.copy(t.ray).applyMatrix4(y_);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=a.index,v=a.attributes.position;if(p!==null){const g=Math.max(0,u.start),x=Math.min(p.count,u.start+u.count);for(let E=g,R=x;E<R;E++){const M=p.getX(E);ru.fromBufferAttribute(v,M),M_(ru,M,m,l,t,n,this)}}else{const g=Math.max(0,u.start),x=Math.min(v.count,u.start+u.count);for(let E=g,R=x;E<R;E++)ru.fromBufferAttribute(v,E),M_(ru,E,m,l,t,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const l=n[a[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=l.length;c<u;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function M_(r,t,n,a,l,c,u){const d=Mp.distanceSqToPoint(r);if(d<n){const m=new k;Mp.closestPointToPoint(r,m),m.applyMatrix4(a);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(d),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:u})}}class Dx extends qn{constructor(t=[],n=Js,a,l,c,u,d,m,p,_){super(t,n,a,l,c,u,d,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class no extends qn{constructor(t,n,a=ia,l,c,u,d=Ln,m=Ln,p,_=Oa,v=1){if(_!==Oa&&_!==Ks)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:t,height:n,depth:v};super(g,l,c,u,d,m,_,a,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Vp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class PE extends no{constructor(t,n=ia,a=Js,l,c,u=Ln,d=Ln,m,p=Oa){const _={width:t,height:t,depth:1},v=[_,_,_,_,_,_];super(t,t,n,a,l,c,u,d,m,p),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Ux extends qn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class ro extends Rn{constructor(t=1,n=1,a=1,l=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:a,widthSegments:l,heightSegments:c,depthSegments:u};const d=this;l=Math.floor(l),c=Math.floor(c),u=Math.floor(u);const m=[],p=[],_=[],v=[];let g=0,x=0;E("z","y","x",-1,-1,a,n,t,u,c,0),E("z","y","x",1,-1,a,n,-t,u,c,1),E("x","z","y",1,1,t,a,n,l,u,2),E("x","z","y",1,-1,t,a,-n,l,u,3),E("x","y","z",1,-1,t,n,a,l,c,4),E("x","y","z",-1,-1,t,n,-a,l,c,5),this.setIndex(m),this.setAttribute("position",new ln(p,3)),this.setAttribute("normal",new ln(_,3)),this.setAttribute("uv",new ln(v,2));function E(R,M,S,B,N,A,z,O,D,T,U){const V=A/D,G=z/T,Z=A/2,et=z/2,ft=O/2,Y=D+1,I=T+1;let F=0,tt=0;const pt=new k;for(let St=0;St<I;St++){const P=St*G-et;for(let Q=0;Q<Y;Q++){const xt=Q*V-Z;pt[R]=xt*B,pt[M]=P*N,pt[S]=ft,p.push(pt.x,pt.y,pt.z),pt[R]=0,pt[M]=0,pt[S]=O>0?1:-1,_.push(pt.x,pt.y,pt.z),v.push(Q/D),v.push(1-St/T),F+=1}}for(let St=0;St<T;St++)for(let P=0;P<D;P++){const Q=g+P+Y*St,xt=g+P+Y*(St+1),Dt=g+(P+1)+Y*(St+1),At=g+(P+1)+Y*St;m.push(Q,xt,At),m.push(xt,Dt,At),tt+=6}d.addGroup(x,tt,U),x+=tt,g+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ro(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Ou extends Rn{constructor(t=1,n=1,a=1,l=32,c=1,u=!1,d=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:n,height:a,radialSegments:l,heightSegments:c,openEnded:u,thetaStart:d,thetaLength:m};const p=this;l=Math.floor(l),c=Math.floor(c);const _=[],v=[],g=[],x=[];let E=0;const R=[],M=a/2;let S=0;B(),u===!1&&(t>0&&N(!0),n>0&&N(!1)),this.setIndex(_),this.setAttribute("position",new ln(v,3)),this.setAttribute("normal",new ln(g,3)),this.setAttribute("uv",new ln(x,2));function B(){const A=new k,z=new k;let O=0;const D=(n-t)/a;for(let T=0;T<=c;T++){const U=[],V=T/c,G=V*(n-t)+t;for(let Z=0;Z<=l;Z++){const et=Z/l,ft=et*m+d,Y=Math.sin(ft),I=Math.cos(ft);z.x=G*Y,z.y=-V*a+M,z.z=G*I,v.push(z.x,z.y,z.z),A.set(Y,D,I).normalize(),g.push(A.x,A.y,A.z),x.push(et,1-V),U.push(E++)}R.push(U)}for(let T=0;T<l;T++)for(let U=0;U<c;U++){const V=R[U][T],G=R[U+1][T],Z=R[U+1][T+1],et=R[U][T+1];(t>0||U!==0)&&(_.push(V,G,et),O+=3),(n>0||U!==c-1)&&(_.push(G,Z,et),O+=3)}p.addGroup(S,O,0),S+=O}function N(A){const z=E,O=new Ft,D=new k;let T=0;const U=A===!0?t:n,V=A===!0?1:-1;for(let Z=1;Z<=l;Z++)v.push(0,M*V,0),g.push(0,V,0),x.push(.5,.5),E++;const G=E;for(let Z=0;Z<=l;Z++){const ft=Z/l*m+d,Y=Math.cos(ft),I=Math.sin(ft);D.x=U*I,D.y=M*V,D.z=U*Y,v.push(D.x,D.y,D.z),g.push(0,V,0),O.x=Y*.5+.5,O.y=I*.5*V+.5,x.push(O.x,O.y),E++}for(let Z=0;Z<l;Z++){const et=z+Z,ft=G+Z;A===!0?_.push(ft,ft+1,et):_.push(ft+1,ft,et),T+=3}p.addGroup(S,T,A===!0?1:2),S+=T}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ou(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Yp extends Ou{constructor(t=1,n=1,a=32,l=1,c=!1,u=0,d=Math.PI*2){super(0,t,n,a,l,c,u,d),this.type="ConeGeometry",this.parameters={radius:t,height:n,radialSegments:a,heightSegments:l,openEnded:c,thetaStart:u,thetaLength:d}}static fromJSON(t){return new Yp(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}const ou=new k,lu=new k,Sd=new k,cu=new wi;class zE extends Rn{constructor(t=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:n},t!==null){const l=Math.pow(10,4),c=Math.cos(jr*n),u=t.getIndex(),d=t.getAttribute("position"),m=u?u.count:d.count,p=[0,0,0],_=["a","b","c"],v=new Array(3),g={},x=[];for(let E=0;E<m;E+=3){u?(p[0]=u.getX(E),p[1]=u.getX(E+1),p[2]=u.getX(E+2)):(p[0]=E,p[1]=E+1,p[2]=E+2);const{a:R,b:M,c:S}=cu;if(R.fromBufferAttribute(d,p[0]),M.fromBufferAttribute(d,p[1]),S.fromBufferAttribute(d,p[2]),cu.getNormal(Sd),v[0]=`${Math.round(R.x*l)},${Math.round(R.y*l)},${Math.round(R.z*l)}`,v[1]=`${Math.round(M.x*l)},${Math.round(M.y*l)},${Math.round(M.z*l)}`,v[2]=`${Math.round(S.x*l)},${Math.round(S.y*l)},${Math.round(S.z*l)}`,!(v[0]===v[1]||v[1]===v[2]||v[2]===v[0]))for(let B=0;B<3;B++){const N=(B+1)%3,A=v[B],z=v[N],O=cu[_[B]],D=cu[_[N]],T=`${A}_${z}`,U=`${z}_${A}`;U in g&&g[U]?(Sd.dot(g[U].normal)<=c&&(x.push(O.x,O.y,O.z),x.push(D.x,D.y,D.z)),g[U]=null):T in g||(g[T]={index0:p[B],index1:p[N],normal:Sd.clone()})}}for(const E in g)if(g[E]){const{index0:R,index1:M}=g[E];ou.fromBufferAttribute(d,R),lu.fromBufferAttribute(d,M),x.push(ou.x,ou.y,ou.z),x.push(lu.x,lu.y,lu.z)}this.setAttribute("position",new ln(x,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class aa{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){de("Curve: .getPoint() not implemented.")}getPointAt(t,n){const a=this.getUtoTmapping(t);return this.getPoint(a,n)}getPoints(t=5){const n=[];for(let a=0;a<=t;a++)n.push(this.getPoint(a/t));return n}getSpacedPoints(t=5){const n=[];for(let a=0;a<=t;a++)n.push(this.getPointAt(a/t));return n}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let a,l=this.getPoint(0),c=0;n.push(0);for(let u=1;u<=t;u++)a=this.getPoint(u/t),c+=a.distanceTo(l),n.push(c),l=a;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,n=null){const a=this.getLengths();let l=0;const c=a.length;let u;n?u=n:u=t*a[c-1];let d=0,m=c-1,p;for(;d<=m;)if(l=Math.floor(d+(m-d)/2),p=a[l]-u,p<0)d=l+1;else if(p>0)m=l-1;else{m=l;break}if(l=m,a[l]===u)return l/(c-1);const _=a[l],g=a[l+1]-_,x=(u-_)/g;return(l+x)/(c-1)}getTangent(t,n){let l=t-1e-4,c=t+1e-4;l<0&&(l=0),c>1&&(c=1);const u=this.getPoint(l),d=this.getPoint(c),m=n||(u.isVector2?new Ft:new k);return m.copy(d).sub(u).normalize(),m}getTangentAt(t,n){const a=this.getUtoTmapping(t);return this.getTangent(a,n)}computeFrenetFrames(t,n=!1){const a=new k,l=[],c=[],u=[],d=new k,m=new $e;for(let x=0;x<=t;x++){const E=x/t;l[x]=this.getTangentAt(E,new k)}c[0]=new k,u[0]=new k;let p=Number.MAX_VALUE;const _=Math.abs(l[0].x),v=Math.abs(l[0].y),g=Math.abs(l[0].z);_<=p&&(p=_,a.set(1,0,0)),v<=p&&(p=v,a.set(0,1,0)),g<=p&&a.set(0,0,1),d.crossVectors(l[0],a).normalize(),c[0].crossVectors(l[0],d),u[0].crossVectors(l[0],c[0]);for(let x=1;x<=t;x++){if(c[x]=c[x-1].clone(),u[x]=u[x-1].clone(),d.crossVectors(l[x-1],l[x]),d.length()>Number.EPSILON){d.normalize();const E=Math.acos(Te(l[x-1].dot(l[x]),-1,1));c[x].applyMatrix4(m.makeRotationAxis(d,E))}u[x].crossVectors(l[x],c[x])}if(n===!0){let x=Math.acos(Te(c[0].dot(c[t]),-1,1));x/=t,l[0].dot(d.crossVectors(c[0],c[t]))>0&&(x=-x);for(let E=1;E<=t;E++)c[E].applyMatrix4(m.makeRotationAxis(l[E],x*E)),u[E].crossVectors(l[E],c[E])}return{tangents:l,normals:c,binormals:u}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Zp extends aa{constructor(t=0,n=0,a=1,l=1,c=0,u=Math.PI*2,d=!1,m=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=n,this.xRadius=a,this.yRadius=l,this.aStartAngle=c,this.aEndAngle=u,this.aClockwise=d,this.aRotation=m}getPoint(t,n=new Ft){const a=n,l=Math.PI*2;let c=this.aEndAngle-this.aStartAngle;const u=Math.abs(c)<Number.EPSILON;for(;c<0;)c+=l;for(;c>l;)c-=l;c<Number.EPSILON&&(u?c=0:c=l),this.aClockwise===!0&&!u&&(c===l?c=-l:c=c-l);const d=this.aStartAngle+t*c;let m=this.aX+this.xRadius*Math.cos(d),p=this.aY+this.yRadius*Math.sin(d);if(this.aRotation!==0){const _=Math.cos(this.aRotation),v=Math.sin(this.aRotation),g=m-this.aX,x=p-this.aY;m=g*_-x*v+this.aX,p=g*v+x*_+this.aY}return a.set(m,p)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class BE extends Zp{constructor(t,n,a,l,c,u){super(t,n,a,a,l,c,u),this.isArcCurve=!0,this.type="ArcCurve"}}function Kp(){let r=0,t=0,n=0,a=0;function l(c,u,d,m){r=c,t=d,n=-3*c+3*u-2*d-m,a=2*c-2*u+d+m}return{initCatmullRom:function(c,u,d,m,p){l(u,d,p*(d-c),p*(m-u))},initNonuniformCatmullRom:function(c,u,d,m,p,_,v){let g=(u-c)/p-(d-c)/(p+_)+(d-u)/_,x=(d-u)/_-(m-u)/(_+v)+(m-d)/v;g*=_,x*=_,l(u,d,g,x)},calc:function(c){const u=c*c,d=u*c;return r+t*c+n*u+a*d}}}const E_=new k,b_=new k,yd=new Kp,Md=new Kp,Ed=new Kp;class Jp extends aa{constructor(t=[],n=!1,a="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=n,this.curveType=a,this.tension=l}getPoint(t,n=new k){const a=n,l=this.points,c=l.length,u=(c-(this.closed?0:1))*t;let d=Math.floor(u),m=u-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/c)+1)*c:m===0&&d===c-1&&(d=c-2,m=1);let p,_;this.closed||d>0?p=l[(d-1)%c]:(b_.subVectors(l[0],l[1]).add(l[0]),p=b_);const v=l[d%c],g=l[(d+1)%c];if(this.closed||d+2<c?_=l[(d+2)%c]:(E_.subVectors(l[c-1],l[c-2]).add(l[c-1]),_=E_),this.curveType==="centripetal"||this.curveType==="chordal"){const x=this.curveType==="chordal"?.5:.25;let E=Math.pow(p.distanceToSquared(v),x),R=Math.pow(v.distanceToSquared(g),x),M=Math.pow(g.distanceToSquared(_),x);R<1e-4&&(R=1),E<1e-4&&(E=R),M<1e-4&&(M=R),yd.initNonuniformCatmullRom(p.x,v.x,g.x,_.x,E,R,M),Md.initNonuniformCatmullRom(p.y,v.y,g.y,_.y,E,R,M),Ed.initNonuniformCatmullRom(p.z,v.z,g.z,_.z,E,R,M)}else this.curveType==="catmullrom"&&(yd.initCatmullRom(p.x,v.x,g.x,_.x,this.tension),Md.initCatmullRom(p.y,v.y,g.y,_.y,this.tension),Ed.initCatmullRom(p.z,v.z,g.z,_.z,this.tension));return a.set(yd.calc(m),Md.calc(m),Ed.calc(m)),a}copy(t){super.copy(t),this.points=[];for(let n=0,a=t.points.length;n<a;n++){const l=t.points[n];this.points.push(l.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let n=0,a=this.points.length;n<a;n++){const l=this.points[n];t.points.push(l.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,a=t.points.length;n<a;n++){const l=t.points[n];this.points.push(new k().fromArray(l))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function T_(r,t,n,a,l){const c=(a-t)*.5,u=(l-n)*.5,d=r*r,m=r*d;return(2*n-2*a+c+u)*m+(-3*n+3*a-2*c-u)*d+c*r+n}function IE(r,t){const n=1-r;return n*n*t}function FE(r,t){return 2*(1-r)*r*t}function HE(r,t){return r*r*t}function pl(r,t,n,a){return IE(r,t)+FE(r,n)+HE(r,a)}function GE(r,t){const n=1-r;return n*n*n*t}function VE(r,t){const n=1-r;return 3*n*n*r*t}function kE(r,t){return 3*(1-r)*r*r*t}function XE(r,t){return r*r*r*t}function ml(r,t,n,a,l){return GE(r,t)+VE(r,n)+kE(r,a)+XE(r,l)}class Nx extends aa{constructor(t=new Ft,n=new Ft,a=new Ft,l=new Ft){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=n,this.v2=a,this.v3=l}getPoint(t,n=new Ft){const a=n,l=this.v0,c=this.v1,u=this.v2,d=this.v3;return a.set(ml(t,l.x,c.x,u.x,d.x),ml(t,l.y,c.y,u.y,d.y)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class WE extends aa{constructor(t=new k,n=new k,a=new k,l=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=n,this.v2=a,this.v3=l}getPoint(t,n=new k){const a=n,l=this.v0,c=this.v1,u=this.v2,d=this.v3;return a.set(ml(t,l.x,c.x,u.x,d.x),ml(t,l.y,c.y,u.y,d.y),ml(t,l.z,c.z,u.z,d.z)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Lx extends aa{constructor(t=new Ft,n=new Ft){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=n}getPoint(t,n=new Ft){const a=n;return t===1?a.copy(this.v2):(a.copy(this.v2).sub(this.v1),a.multiplyScalar(t).add(this.v1)),a}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new Ft){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class qE extends aa{constructor(t=new k,n=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=n}getPoint(t,n=new k){const a=n;return t===1?a.copy(this.v2):(a.copy(this.v2).sub(this.v1),a.multiplyScalar(t).add(this.v1)),a}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new k){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ox extends aa{constructor(t=new Ft,n=new Ft,a=new Ft){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=n,this.v2=a}getPoint(t,n=new Ft){const a=n,l=this.v0,c=this.v1,u=this.v2;return a.set(pl(t,l.x,c.x,u.x),pl(t,l.y,c.y,u.y)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Px extends aa{constructor(t=new k,n=new k,a=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=n,this.v2=a}getPoint(t,n=new k){const a=n,l=this.v0,c=this.v1,u=this.v2;return a.set(pl(t,l.x,c.x,u.x),pl(t,l.y,c.y,u.y),pl(t,l.z,c.z,u.z)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class zx extends aa{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,n=new Ft){const a=n,l=this.points,c=(l.length-1)*t,u=Math.floor(c),d=c-u,m=l[u===0?u:u-1],p=l[u],_=l[u>l.length-2?l.length-1:u+1],v=l[u>l.length-3?l.length-1:u+2];return a.set(T_(d,m.x,p.x,_.x,v.x),T_(d,m.y,p.y,_.y,v.y)),a}copy(t){super.copy(t),this.points=[];for(let n=0,a=t.points.length;n<a;n++){const l=t.points[n];this.points.push(l.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let n=0,a=this.points.length;n<a;n++){const l=this.points[n];t.points.push(l.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,a=t.points.length;n<a;n++){const l=t.points[n];this.points.push(new Ft().fromArray(l))}return this}}var Du=Object.freeze({__proto__:null,ArcCurve:BE,CatmullRomCurve3:Jp,CubicBezierCurve:Nx,CubicBezierCurve3:WE,EllipseCurve:Zp,LineCurve:Lx,LineCurve3:qE,QuadraticBezierCurve:Ox,QuadraticBezierCurve3:Px,SplineCurve:zx});class YE extends aa{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(n)){const a=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Du[a](n,t))}return this}getPoint(t,n){const a=t*this.getLength(),l=this.getCurveLengths();let c=0;for(;c<l.length;){if(l[c]>=a){const u=l[c]-a,d=this.curves[c],m=d.getLength(),p=m===0?0:1-u/m;return d.getPointAt(p,n)}c++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let n=0;for(let a=0,l=this.curves.length;a<l;a++)n+=this.curves[a].getLength(),t.push(n);return this.cacheLengths=t,t}getSpacedPoints(t=40){const n=[];for(let a=0;a<=t;a++)n.push(this.getPoint(a/t));return this.autoClose&&n.push(n[0]),n}getPoints(t=12){const n=[];let a;for(let l=0,c=this.curves;l<c.length;l++){const u=c[l],d=u.isEllipseCurve?t*2:u.isLineCurve||u.isLineCurve3?1:u.isSplineCurve?t*u.points.length:t,m=u.getPoints(d);for(let p=0;p<m.length;p++){const _=m[p];a&&a.equals(_)||(n.push(_),a=_)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(t){super.copy(t),this.curves=[];for(let n=0,a=t.curves.length;n<a;n++){const l=t.curves[n];this.curves.push(l.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let n=0,a=this.curves.length;n<a;n++){const l=this.curves[n];t.curves.push(l.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let n=0,a=t.curves.length;n<a;n++){const l=t.curves[n];this.curves.push(new Du[l.type]().fromJSON(l))}return this}}class Ep extends YE{constructor(t){super(),this.type="Path",this.currentPoint=new Ft,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let n=1,a=t.length;n<a;n++)this.lineTo(t[n].x,t[n].y);return this}moveTo(t,n){return this.currentPoint.set(t,n),this}lineTo(t,n){const a=new Lx(this.currentPoint.clone(),new Ft(t,n));return this.curves.push(a),this.currentPoint.set(t,n),this}quadraticCurveTo(t,n,a,l){const c=new Ox(this.currentPoint.clone(),new Ft(t,n),new Ft(a,l));return this.curves.push(c),this.currentPoint.set(a,l),this}bezierCurveTo(t,n,a,l,c,u){const d=new Nx(this.currentPoint.clone(),new Ft(t,n),new Ft(a,l),new Ft(c,u));return this.curves.push(d),this.currentPoint.set(c,u),this}splineThru(t){const n=[this.currentPoint.clone()].concat(t),a=new zx(n);return this.curves.push(a),this.currentPoint.copy(t[t.length-1]),this}arc(t,n,a,l,c,u){const d=this.currentPoint.x,m=this.currentPoint.y;return this.absarc(t+d,n+m,a,l,c,u),this}absarc(t,n,a,l,c,u){return this.absellipse(t,n,a,a,l,c,u),this}ellipse(t,n,a,l,c,u,d,m){const p=this.currentPoint.x,_=this.currentPoint.y;return this.absellipse(t+p,n+_,a,l,c,u,d,m),this}absellipse(t,n,a,l,c,u,d,m){const p=new Zp(t,n,a,l,c,u,d,m);if(this.curves.length>0){const v=p.getPoint(0);v.equals(this.currentPoint)||this.lineTo(v.x,v.y)}this.curves.push(p);const _=p.getPoint(1);return this.currentPoint.copy(_),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Bx extends Ep{constructor(t){super(t),this.uuid=tr(),this.type="Shape",this.holes=[]}getPointsHoles(t){const n=[];for(let a=0,l=this.holes.length;a<l;a++)n[a]=this.holes[a].getPoints(t);return n}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let n=0,a=t.holes.length;n<a;n++){const l=t.holes[n];this.holes.push(l.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let n=0,a=this.holes.length;n<a;n++){const l=this.holes[n];t.holes.push(l.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let n=0,a=t.holes.length;n<a;n++){const l=t.holes[n];this.holes.push(new Ep().fromJSON(l))}return this}}function ZE(r,t,n=2){const a=t&&t.length,l=a?t[0]*n:r.length;let c=Ix(r,0,l,n,!0);const u=[];if(!c||c.next===c.prev)return u;let d,m,p;if(a&&(c=$E(r,t,c,n)),r.length>80*n){d=r[0],m=r[1];let _=d,v=m;for(let g=n;g<l;g+=n){const x=r[g],E=r[g+1];x<d&&(d=x),E<m&&(m=E),x>_&&(_=x),E>v&&(v=E)}p=Math.max(_-d,v-m),p=p!==0?32767/p:0}return Sl(c,u,n,d,m,p,0),u}function Ix(r,t,n,a,l){let c;if(l===ub(r,t,n,a)>0)for(let u=t;u<n;u+=a)c=A_(u/a|0,r[u],r[u+1],c);else for(let u=n-a;u>=t;u-=a)c=A_(u/a|0,r[u],r[u+1],c);return c&&io(c,c.next)&&(Ml(c),c=c.next),c}function js(r,t){if(!r)return r;t||(t=r);let n=r,a;do if(a=!1,!n.steiner&&(io(n,n.next)||on(n.prev,n,n.next)===0)){if(Ml(n),n=t=n.prev,n===n.next)break;a=!0}else n=n.next;while(a||n!==t);return t}function Sl(r,t,n,a,l,c,u){if(!r)return;!u&&c&&ab(r,a,l,c);let d=r;for(;r.prev!==r.next;){const m=r.prev,p=r.next;if(c?JE(r,a,l,c):KE(r)){t.push(m.i,r.i,p.i),Ml(r),r=p.next,d=p.next;continue}if(r=p,r===d){u?u===1?(r=QE(js(r),t),Sl(r,t,n,a,l,c,2)):u===2&&jE(r,t,n,a,l,c):Sl(js(r),t,n,a,l,c,1);break}}}function KE(r){const t=r.prev,n=r,a=r.next;if(on(t,n,a)>=0)return!1;const l=t.x,c=n.x,u=a.x,d=t.y,m=n.y,p=a.y,_=Math.min(l,c,u),v=Math.min(d,m,p),g=Math.max(l,c,u),x=Math.max(d,m,p);let E=a.next;for(;E!==t;){if(E.x>=_&&E.x<=g&&E.y>=v&&E.y<=x&&fl(l,d,c,m,u,p,E.x,E.y)&&on(E.prev,E,E.next)>=0)return!1;E=E.next}return!0}function JE(r,t,n,a){const l=r.prev,c=r,u=r.next;if(on(l,c,u)>=0)return!1;const d=l.x,m=c.x,p=u.x,_=l.y,v=c.y,g=u.y,x=Math.min(d,m,p),E=Math.min(_,v,g),R=Math.max(d,m,p),M=Math.max(_,v,g),S=bp(x,E,t,n,a),B=bp(R,M,t,n,a);let N=r.prevZ,A=r.nextZ;for(;N&&N.z>=S&&A&&A.z<=B;){if(N.x>=x&&N.x<=R&&N.y>=E&&N.y<=M&&N!==l&&N!==u&&fl(d,_,m,v,p,g,N.x,N.y)&&on(N.prev,N,N.next)>=0||(N=N.prevZ,A.x>=x&&A.x<=R&&A.y>=E&&A.y<=M&&A!==l&&A!==u&&fl(d,_,m,v,p,g,A.x,A.y)&&on(A.prev,A,A.next)>=0))return!1;A=A.nextZ}for(;N&&N.z>=S;){if(N.x>=x&&N.x<=R&&N.y>=E&&N.y<=M&&N!==l&&N!==u&&fl(d,_,m,v,p,g,N.x,N.y)&&on(N.prev,N,N.next)>=0)return!1;N=N.prevZ}for(;A&&A.z<=B;){if(A.x>=x&&A.x<=R&&A.y>=E&&A.y<=M&&A!==l&&A!==u&&fl(d,_,m,v,p,g,A.x,A.y)&&on(A.prev,A,A.next)>=0)return!1;A=A.nextZ}return!0}function QE(r,t){let n=r;do{const a=n.prev,l=n.next.next;!io(a,l)&&Hx(a,n,n.next,l)&&yl(a,l)&&yl(l,a)&&(t.push(a.i,n.i,l.i),Ml(n),Ml(n.next),n=r=l),n=n.next}while(n!==r);return js(n)}function jE(r,t,n,a,l,c){let u=r;do{let d=u.next.next;for(;d!==u.prev;){if(u.i!==d.i&&ob(u,d)){let m=Gx(u,d);u=js(u,u.next),m=js(m,m.next),Sl(u,t,n,a,l,c,0),Sl(m,t,n,a,l,c,0);return}d=d.next}u=u.next}while(u!==r)}function $E(r,t,n,a){const l=[];for(let c=0,u=t.length;c<u;c++){const d=t[c]*a,m=c<u-1?t[c+1]*a:r.length,p=Ix(r,d,m,a,!1);p===p.next&&(p.steiner=!0),l.push(rb(p))}l.sort(tb);for(let c=0;c<l.length;c++)n=eb(l[c],n);return n}function tb(r,t){let n=r.x-t.x;if(n===0&&(n=r.y-t.y,n===0)){const a=(r.next.y-r.y)/(r.next.x-r.x),l=(t.next.y-t.y)/(t.next.x-t.x);n=a-l}return n}function eb(r,t){const n=nb(r,t);if(!n)return t;const a=Gx(n,r);return js(a,a.next),js(n,n.next)}function nb(r,t){let n=t;const a=r.x,l=r.y;let c=-1/0,u;if(io(r,n))return n;do{if(io(r,n.next))return n.next;if(l<=n.y&&l>=n.next.y&&n.next.y!==n.y){const v=n.x+(l-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(v<=a&&v>c&&(c=v,u=n.x<n.next.x?n:n.next,v===a))return u}n=n.next}while(n!==t);if(!u)return null;const d=u,m=u.x,p=u.y;let _=1/0;n=u;do{if(a>=n.x&&n.x>=m&&a!==n.x&&Fx(l<p?a:c,l,m,p,l<p?c:a,l,n.x,n.y)){const v=Math.abs(l-n.y)/(a-n.x);yl(n,r)&&(v<_||v===_&&(n.x>u.x||n.x===u.x&&ib(u,n)))&&(u=n,_=v)}n=n.next}while(n!==d);return u}function ib(r,t){return on(r.prev,r,t.prev)<0&&on(t.next,r,r.next)<0}function ab(r,t,n,a){let l=r;do l.z===0&&(l.z=bp(l.x,l.y,t,n,a)),l.prevZ=l.prev,l.nextZ=l.next,l=l.next;while(l!==r);l.prevZ.nextZ=null,l.prevZ=null,sb(l)}function sb(r){let t,n=1;do{let a=r,l;r=null;let c=null;for(t=0;a;){t++;let u=a,d=0;for(let p=0;p<n&&(d++,u=u.nextZ,!!u);p++);let m=n;for(;d>0||m>0&&u;)d!==0&&(m===0||!u||a.z<=u.z)?(l=a,a=a.nextZ,d--):(l=u,u=u.nextZ,m--),c?c.nextZ=l:r=l,l.prevZ=c,c=l;a=u}c.nextZ=null,n*=2}while(t>1);return r}function bp(r,t,n,a,l){return r=(r-n)*l|0,t=(t-a)*l|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function rb(r){let t=r,n=r;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==r);return n}function Fx(r,t,n,a,l,c,u,d){return(l-u)*(t-d)>=(r-u)*(c-d)&&(r-u)*(a-d)>=(n-u)*(t-d)&&(n-u)*(c-d)>=(l-u)*(a-d)}function fl(r,t,n,a,l,c,u,d){return!(r===u&&t===d)&&Fx(r,t,n,a,l,c,u,d)}function ob(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!lb(r,t)&&(yl(r,t)&&yl(t,r)&&cb(r,t)&&(on(r.prev,r,t.prev)||on(r,t.prev,t))||io(r,t)&&on(r.prev,r,r.next)>0&&on(t.prev,t,t.next)>0)}function on(r,t,n){return(t.y-r.y)*(n.x-t.x)-(t.x-r.x)*(n.y-t.y)}function io(r,t){return r.x===t.x&&r.y===t.y}function Hx(r,t,n,a){const l=fu(on(r,t,n)),c=fu(on(r,t,a)),u=fu(on(n,a,r)),d=fu(on(n,a,t));return!!(l!==c&&u!==d||l===0&&uu(r,n,t)||c===0&&uu(r,a,t)||u===0&&uu(n,r,a)||d===0&&uu(n,t,a))}function uu(r,t,n){return t.x<=Math.max(r.x,n.x)&&t.x>=Math.min(r.x,n.x)&&t.y<=Math.max(r.y,n.y)&&t.y>=Math.min(r.y,n.y)}function fu(r){return r>0?1:r<0?-1:0}function lb(r,t){let n=r;do{if(n.i!==r.i&&n.next.i!==r.i&&n.i!==t.i&&n.next.i!==t.i&&Hx(n,n.next,r,t))return!0;n=n.next}while(n!==r);return!1}function yl(r,t){return on(r.prev,r,r.next)<0?on(r,t,r.next)>=0&&on(r,r.prev,t)>=0:on(r,t,r.prev)<0||on(r,r.next,t)<0}function cb(r,t){let n=r,a=!1;const l=(r.x+t.x)/2,c=(r.y+t.y)/2;do n.y>c!=n.next.y>c&&n.next.y!==n.y&&l<(n.next.x-n.x)*(c-n.y)/(n.next.y-n.y)+n.x&&(a=!a),n=n.next;while(n!==r);return a}function Gx(r,t){const n=Tp(r.i,r.x,r.y),a=Tp(t.i,t.x,t.y),l=r.next,c=t.prev;return r.next=t,t.prev=r,n.next=l,l.prev=n,a.next=n,n.prev=a,c.next=a,a.prev=c,a}function A_(r,t,n,a){const l=Tp(r,t,n);return a?(l.next=a.next,l.prev=a,a.next.prev=l,a.next=l):(l.prev=l,l.next=l),l}function Ml(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Tp(r,t,n){return{i:r,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function ub(r,t,n,a){let l=0;for(let c=t,u=n-a;c<n;c+=a)l+=(r[u]-r[c])*(r[c+1]+r[u+1]),u=c;return l}class fb{static triangulate(t,n,a=2){return ZE(t,n,a)}}class Kr{static area(t){const n=t.length;let a=0;for(let l=n-1,c=0;c<n;l=c++)a+=t[l].x*t[c].y-t[c].x*t[l].y;return a*.5}static isClockWise(t){return Kr.area(t)<0}static triangulateShape(t,n){const a=[],l=[],c=[];R_(t),w_(a,t);let u=t.length;n.forEach(R_);for(let m=0;m<n.length;m++)l.push(u),u+=n[m].length,w_(a,n[m]);const d=fb.triangulate(a,l);for(let m=0;m<d.length;m+=3)c.push(d.slice(m,m+3));return c}}function R_(r){const t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function w_(r,t){for(let n=0;n<t.length;n++)r.push(t[n].x),r.push(t[n].y)}class Qp extends Rn{constructor(t=new Bx([new Ft(.5,.5),new Ft(-.5,.5),new Ft(-.5,-.5),new Ft(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:n},t=Array.isArray(t)?t:[t];const a=this,l=[],c=[];for(let d=0,m=t.length;d<m;d++){const p=t[d];u(p)}this.setAttribute("position",new ln(l,3)),this.setAttribute("uv",new ln(c,2)),this.computeVertexNormals();function u(d){const m=[],p=n.curveSegments!==void 0?n.curveSegments:12,_=n.steps!==void 0?n.steps:1,v=n.depth!==void 0?n.depth:1;let g=n.bevelEnabled!==void 0?n.bevelEnabled:!0,x=n.bevelThickness!==void 0?n.bevelThickness:.2,E=n.bevelSize!==void 0?n.bevelSize:x-.1,R=n.bevelOffset!==void 0?n.bevelOffset:0,M=n.bevelSegments!==void 0?n.bevelSegments:3;const S=n.extrudePath,B=n.UVGenerator!==void 0?n.UVGenerator:hb;let N,A=!1,z,O,D,T;if(S){N=S.getSpacedPoints(_),A=!0,g=!1;const Mt=S.isCatmullRomCurve3?S.closed:!1;z=S.computeFrenetFrames(_,Mt),O=new k,D=new k,T=new k}g||(M=0,x=0,E=0,R=0);const U=d.extractPoints(p);let V=U.shape;const G=U.holes;if(!Kr.isClockWise(V)){V=V.reverse();for(let Mt=0,wt=G.length;Mt<wt;Mt++){const Rt=G[Mt];Kr.isClockWise(Rt)&&(G[Mt]=Rt.reverse())}}function et(Mt){const Rt=10000000000000001e-36;let Ht=Mt[0];for(let Bt=1;Bt<=Mt.length;Bt++){const re=Bt%Mt.length,Jt=Mt[re],ue=Jt.x-Ht.x,fe=Jt.y-Ht.y,X=ue*ue+fe*fe,me=Math.max(Math.abs(Jt.x),Math.abs(Jt.y),Math.abs(Ht.x),Math.abs(Ht.y)),_e=Rt*me*me;if(X<=_e){Mt.splice(re,1),Bt--;continue}Ht=Jt}}et(V),G.forEach(et);const ft=G.length,Y=V;for(let Mt=0;Mt<ft;Mt++){const wt=G[Mt];V=V.concat(wt)}function I(Mt,wt,Rt){return wt||Le("ExtrudeGeometry: vec does not exist"),Mt.clone().addScaledVector(wt,Rt)}const F=V.length;function tt(Mt,wt,Rt){let Ht,Bt,re;const Jt=Mt.x-wt.x,ue=Mt.y-wt.y,fe=Rt.x-Mt.x,X=Rt.y-Mt.y,me=Jt*Jt+ue*ue,_e=Jt*X-ue*fe;if(Math.abs(_e)>Number.EPSILON){const L=Math.sqrt(me),b=Math.sqrt(fe*fe+X*X),j=wt.x-ue/L,nt=wt.y+Jt/L,dt=Rt.x-X/b,Ut=Rt.y+fe/b,Ot=((dt-j)*X-(Ut-nt)*fe)/(Jt*X-ue*fe);Ht=j+Jt*Ot-Mt.x,Bt=nt+ue*Ot-Mt.y;const ht=Ht*Ht+Bt*Bt;if(ht<=2)return new Ft(Ht,Bt);re=Math.sqrt(ht/2)}else{let L=!1;Jt>Number.EPSILON?fe>Number.EPSILON&&(L=!0):Jt<-Number.EPSILON?fe<-Number.EPSILON&&(L=!0):Math.sign(ue)===Math.sign(X)&&(L=!0),L?(Ht=-ue,Bt=Jt,re=Math.sqrt(me)):(Ht=Jt,Bt=ue,re=Math.sqrt(me/2))}return new Ft(Ht/re,Bt/re)}const pt=[];for(let Mt=0,wt=Y.length,Rt=wt-1,Ht=Mt+1;Mt<wt;Mt++,Rt++,Ht++)Rt===wt&&(Rt=0),Ht===wt&&(Ht=0),pt[Mt]=tt(Y[Mt],Y[Rt],Y[Ht]);const St=[];let P,Q=pt.concat();for(let Mt=0,wt=ft;Mt<wt;Mt++){const Rt=G[Mt];P=[];for(let Ht=0,Bt=Rt.length,re=Bt-1,Jt=Ht+1;Ht<Bt;Ht++,re++,Jt++)re===Bt&&(re=0),Jt===Bt&&(Jt=0),P[Ht]=tt(Rt[Ht],Rt[re],Rt[Jt]);St.push(P),Q=Q.concat(P)}let xt;if(M===0)xt=Kr.triangulateShape(Y,G);else{const Mt=[],wt=[];for(let Rt=0;Rt<M;Rt++){const Ht=Rt/M,Bt=x*Math.cos(Ht*Math.PI/2),re=E*Math.sin(Ht*Math.PI/2)+R;for(let Jt=0,ue=Y.length;Jt<ue;Jt++){const fe=I(Y[Jt],pt[Jt],re);Pt(fe.x,fe.y,-Bt),Ht===0&&Mt.push(fe)}for(let Jt=0,ue=ft;Jt<ue;Jt++){const fe=G[Jt];P=St[Jt];const X=[];for(let me=0,_e=fe.length;me<_e;me++){const L=I(fe[me],P[me],re);Pt(L.x,L.y,-Bt),Ht===0&&X.push(L)}Ht===0&&wt.push(X)}}xt=Kr.triangulateShape(Mt,wt)}const Dt=xt.length,At=E+R;for(let Mt=0;Mt<F;Mt++){const wt=g?I(V[Mt],Q[Mt],At):V[Mt];A?(D.copy(z.normals[0]).multiplyScalar(wt.x),O.copy(z.binormals[0]).multiplyScalar(wt.y),T.copy(N[0]).add(D).add(O),Pt(T.x,T.y,T.z)):Pt(wt.x,wt.y,0)}for(let Mt=1;Mt<=_;Mt++)for(let wt=0;wt<F;wt++){const Rt=g?I(V[wt],Q[wt],At):V[wt];A?(D.copy(z.normals[Mt]).multiplyScalar(Rt.x),O.copy(z.binormals[Mt]).multiplyScalar(Rt.y),T.copy(N[Mt]).add(D).add(O),Pt(T.x,T.y,T.z)):Pt(Rt.x,Rt.y,v/_*Mt)}for(let Mt=M-1;Mt>=0;Mt--){const wt=Mt/M,Rt=x*Math.cos(wt*Math.PI/2),Ht=E*Math.sin(wt*Math.PI/2)+R;for(let Bt=0,re=Y.length;Bt<re;Bt++){const Jt=I(Y[Bt],pt[Bt],Ht);Pt(Jt.x,Jt.y,v+Rt)}for(let Bt=0,re=G.length;Bt<re;Bt++){const Jt=G[Bt];P=St[Bt];for(let ue=0,fe=Jt.length;ue<fe;ue++){const X=I(Jt[ue],P[ue],Ht);A?Pt(X.x,X.y+N[_-1].y,N[_-1].x+Rt):Pt(X.x,X.y,v+Rt)}}}K(),vt();function K(){const Mt=l.length/3;if(g){let wt=0,Rt=F*wt;for(let Ht=0;Ht<Dt;Ht++){const Bt=xt[Ht];ie(Bt[2]+Rt,Bt[1]+Rt,Bt[0]+Rt)}wt=_+M*2,Rt=F*wt;for(let Ht=0;Ht<Dt;Ht++){const Bt=xt[Ht];ie(Bt[0]+Rt,Bt[1]+Rt,Bt[2]+Rt)}}else{for(let wt=0;wt<Dt;wt++){const Rt=xt[wt];ie(Rt[2],Rt[1],Rt[0])}for(let wt=0;wt<Dt;wt++){const Rt=xt[wt];ie(Rt[0]+F*_,Rt[1]+F*_,Rt[2]+F*_)}}a.addGroup(Mt,l.length/3-Mt,0)}function vt(){const Mt=l.length/3;let wt=0;yt(Y,wt),wt+=Y.length;for(let Rt=0,Ht=G.length;Rt<Ht;Rt++){const Bt=G[Rt];yt(Bt,wt),wt+=Bt.length}a.addGroup(Mt,l.length/3-Mt,1)}function yt(Mt,wt){let Rt=Mt.length;for(;--Rt>=0;){const Ht=Rt;let Bt=Rt-1;Bt<0&&(Bt=Mt.length-1);for(let re=0,Jt=_+M*2;re<Jt;re++){const ue=F*re,fe=F*(re+1),X=wt+Ht+ue,me=wt+Bt+ue,_e=wt+Bt+fe,L=wt+Ht+fe;$t(X,me,_e,L)}}}function Pt(Mt,wt,Rt){m.push(Mt),m.push(wt),m.push(Rt)}function ie(Mt,wt,Rt){be(Mt),be(wt),be(Rt);const Ht=l.length/3,Bt=B.generateTopUV(a,l,Ht-3,Ht-2,Ht-1);oe(Bt[0]),oe(Bt[1]),oe(Bt[2])}function $t(Mt,wt,Rt,Ht){be(Mt),be(wt),be(Ht),be(wt),be(Rt),be(Ht);const Bt=l.length/3,re=B.generateSideWallUV(a,l,Bt-6,Bt-3,Bt-2,Bt-1);oe(re[0]),oe(re[1]),oe(re[3]),oe(re[1]),oe(re[2]),oe(re[3])}function be(Mt){l.push(m[Mt*3+0]),l.push(m[Mt*3+1]),l.push(m[Mt*3+2])}function oe(Mt){c.push(Mt.x),c.push(Mt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),n=this.parameters.shapes,a=this.parameters.options;return db(n,a,t)}static fromJSON(t,n){const a=[];for(let c=0,u=t.shapes.length;c<u;c++){const d=n[t.shapes[c]];a.push(d)}const l=t.options.extrudePath;return l!==void 0&&(t.options.extrudePath=new Du[l.type]().fromJSON(l)),new Qp(a,t.options)}}const hb={generateTopUV:function(r,t,n,a,l){const c=t[n*3],u=t[n*3+1],d=t[a*3],m=t[a*3+1],p=t[l*3],_=t[l*3+1];return[new Ft(c,u),new Ft(d,m),new Ft(p,_)]},generateSideWallUV:function(r,t,n,a,l,c){const u=t[n*3],d=t[n*3+1],m=t[n*3+2],p=t[a*3],_=t[a*3+1],v=t[a*3+2],g=t[l*3],x=t[l*3+1],E=t[l*3+2],R=t[c*3],M=t[c*3+1],S=t[c*3+2];return Math.abs(d-_)<Math.abs(u-p)?[new Ft(u,1-m),new Ft(p,1-v),new Ft(g,1-E),new Ft(R,1-S)]:[new Ft(d,1-m),new Ft(_,1-v),new Ft(x,1-E),new Ft(M,1-S)]}};function db(r,t,n){if(n.shapes=[],Array.isArray(r))for(let a=0,l=r.length;a<l;a++){const c=r[a];n.shapes.push(c.uuid)}else n.shapes.push(r.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}class Rl extends Rn{constructor(t=1,n=1,a=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:a,heightSegments:l};const c=t/2,u=n/2,d=Math.floor(a),m=Math.floor(l),p=d+1,_=m+1,v=t/d,g=n/m,x=[],E=[],R=[],M=[];for(let S=0;S<_;S++){const B=S*g-u;for(let N=0;N<p;N++){const A=N*v-c;E.push(A,-B,0),R.push(0,0,1),M.push(N/d),M.push(1-S/m)}}for(let S=0;S<m;S++)for(let B=0;B<d;B++){const N=B+p*S,A=B+p*(S+1),z=B+1+p*(S+1),O=B+1+p*S;x.push(N,A,O),x.push(A,z,O)}this.setIndex(x),this.setAttribute("position",new ln(E,3)),this.setAttribute("normal",new ln(R,3)),this.setAttribute("uv",new ln(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Rl(t.width,t.height,t.widthSegments,t.heightSegments)}}class jp extends Rn{constructor(t=1,n=32,a=16,l=0,c=Math.PI*2,u=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:a,phiStart:l,phiLength:c,thetaStart:u,thetaLength:d},n=Math.max(3,Math.floor(n)),a=Math.max(2,Math.floor(a));const m=Math.min(u+d,Math.PI);let p=0;const _=[],v=new k,g=new k,x=[],E=[],R=[],M=[];for(let S=0;S<=a;S++){const B=[],N=S/a,A=u+N*d,z=t*Math.cos(A),O=Math.sqrt(t*t-z*z);let D=0;S===0&&u===0?D=.5/n:S===a&&m===Math.PI&&(D=-.5/n);for(let T=0;T<=n;T++){const U=T/n,V=l+U*c;v.x=-O*Math.cos(V),v.y=z,v.z=O*Math.sin(V),E.push(v.x,v.y,v.z),g.copy(v).normalize(),R.push(g.x,g.y,g.z),M.push(U+D,1-N),B.push(p++)}_.push(B)}for(let S=0;S<a;S++)for(let B=0;B<n;B++){const N=_[S][B+1],A=_[S][B],z=_[S+1][B],O=_[S+1][B+1];(S!==0||u>0)&&x.push(N,A,O),(S!==a-1||m<Math.PI)&&x.push(A,z,O)}this.setIndex(x),this.setAttribute("position",new ln(E,3)),this.setAttribute("normal",new ln(R,3)),this.setAttribute("uv",new ln(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jp(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class El extends Rn{constructor(t=new Px(new k(-1,-1,0),new k(-1,1,0),new k(1,1,0)),n=64,a=1,l=8,c=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:n,radius:a,radialSegments:l,closed:c};const u=t.computeFrenetFrames(n,c);this.tangents=u.tangents,this.normals=u.normals,this.binormals=u.binormals;const d=new k,m=new k,p=new Ft;let _=new k;const v=[],g=[],x=[],E=[];R(),this.setIndex(E),this.setAttribute("position",new ln(v,3)),this.setAttribute("normal",new ln(g,3)),this.setAttribute("uv",new ln(x,2));function R(){for(let N=0;N<n;N++)M(N);M(c===!1?n:0),B(),S()}function M(N){_=t.getPointAt(N/n,_);const A=u.normals[N],z=u.binormals[N];for(let O=0;O<=l;O++){const D=O/l*Math.PI*2,T=Math.sin(D),U=-Math.cos(D);m.x=U*A.x+T*z.x,m.y=U*A.y+T*z.y,m.z=U*A.z+T*z.z,m.normalize(),g.push(m.x,m.y,m.z),d.x=_.x+a*m.x,d.y=_.y+a*m.y,d.z=_.z+a*m.z,v.push(d.x,d.y,d.z)}}function S(){for(let N=1;N<=n;N++)for(let A=1;A<=l;A++){const z=(l+1)*(N-1)+(A-1),O=(l+1)*N+(A-1),D=(l+1)*N+A,T=(l+1)*(N-1)+A;E.push(z,O,T),E.push(O,D,T)}}function B(){for(let N=0;N<=n;N++)for(let A=0;A<=l;A++)p.x=N/n,p.y=A/l,x.push(p.x,p.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new El(new Du[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class pb extends Ss{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Me(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}}function ao(r){const t={};for(const n in r){t[n]={};for(const a in r[n]){const l=r[n][a];if(C_(l))l.isRenderTargetTexture?(de("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][a]=null):t[n][a]=l.clone();else if(Array.isArray(l))if(C_(l[0])){const c=[];for(let u=0,d=l.length;u<d;u++)c[u]=l[u].clone();t[n][a]=c}else t[n][a]=l.slice();else t[n][a]=l}}return t}function Xn(r){const t={};for(let n=0;n<r.length;n++){const a=ao(r[n]);for(const l in a)t[l]=a[l]}return t}function C_(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function mb(r){const t=[];for(let n=0;n<r.length;n++)t.push(r[n].clone());return t}function Vx(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ne.workingColorSpace}const gb={clone:ao,merge:Xn};var vb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_b=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Hi extends Ss{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vb,this.fragmentShader=_b,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ao(t.uniforms),this.uniformsGroups=mb(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const l in this.uniforms){const u=this.uniforms[l].value;u&&u.isTexture?n.uniforms[l]={type:"t",value:u.toJSON(t).uuid}:u&&u.isColor?n.uniforms[l]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[l]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[l]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[l]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[l]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[l]={type:"m4",value:u.toArray()}:n.uniforms[l]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const l in this.extensions)this.extensions[l]===!0&&(a[l]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}fromJSON(t,n){if(super.fromJSON(t,n),t.uniforms!==void 0)for(const a in t.uniforms){const l=t.uniforms[a];switch(this.uniforms[a]={},l.type){case"t":this.uniforms[a].value=n[l.value]||null;break;case"c":this.uniforms[a].value=new Me().setHex(l.value);break;case"v2":this.uniforms[a].value=new Ft().fromArray(l.value);break;case"v3":this.uniforms[a].value=new k().fromArray(l.value);break;case"v4":this.uniforms[a].value=new rn().fromArray(l.value);break;case"m3":this.uniforms[a].value=new ve().fromArray(l.value);break;case"m4":this.uniforms[a].value=new $e().fromArray(l.value);break;default:this.uniforms[a].value=l.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const a in t.extensions)this.extensions[a]=t.extensions[a];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class xb extends Hi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class $p extends Ss{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Me(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yp,this.normalScale=new Ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xs,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Sb extends Ss{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class yb extends Ss{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Pu extends Mn{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Me(t),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}class Mb extends Pu{constructor(t,n,a){super(t,a),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Mn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Me(n)}copy(t,n){return super.copy(t,n),this.groundColor.copy(t.groundColor),this}toJSON(t){const n=super.toJSON(t);return n.object.groundColor=this.groundColor.getHex(),n}}const bd=new $e,D_=new k,U_=new k;class kx{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ft(512,512),this.mapType=vi,this.map=null,this.mapPass=null,this.matrix=new $e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wp,this._frameExtents=new Ft(1,1),this._viewportCount=1,this._viewports=[new rn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,a=this.matrix;D_.setFromMatrixPosition(t.matrixWorld),n.position.copy(D_),U_.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(U_),n.updateMatrixWorld(),bd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bd,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===_l||n.reversedDepth?a.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(bd)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const hu=new k,du=new so,Yi=new k;class Xx extends Mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=ji,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(hu,du,Yi),Yi.x===1&&Yi.y===1&&Yi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(hu,du,Yi.set(1,1,1)).invert()}updateWorldMatrix(t,n,a=!1){super.updateWorldMatrix(t,n,a),this.matrixWorld.decompose(hu,du,Yi),Yi.x===1&&Yi.y===1&&Yi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(hu,du,Yi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ds=new k,N_=new Ft,L_=new Ft;class gi extends Xx{constructor(t=50,n=1,a=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=a,this.far=l,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=xl*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(jr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return xl*2*Math.atan(Math.tan(jr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,a){ds.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ds.x,ds.y).multiplyScalar(-t/ds.z),ds.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(ds.x,ds.y).multiplyScalar(-t/ds.z)}getViewSize(t,n){return this.getViewBounds(t,N_,L_),n.subVectors(L_,N_)}setViewOffset(t,n,a,l,c,u){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=l,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(jr*.5*this.fov)/this.zoom,a=2*n,l=this.aspect*a,c=-.5*l;const u=this.view;if(this.view!==null&&this.view.enabled){const m=u.fullWidth,p=u.fullHeight;c+=u.offsetX*l/m,n-=u.offsetY*a/p,l*=u.width/m,a*=u.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,n,n-a,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class Eb extends kx{constructor(){super(new gi(90,1,.5,500)),this.isPointLightShadow=!0}}class O_ extends Pu{constructor(t,n,a=0,l=2){super(t,n),this.isPointLight=!0,this.type="PointLight",this.distance=a,this.decay=l,this.shadow=new Eb}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const n=super.toJSON(t);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class tm extends Xx{constructor(t=-1,n=1,a=1,l=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=a,this.bottom=l,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,a,l,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=l,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=a-t,u=a+t,d=l+n,m=l-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,u=c+p*this.view.width,d-=_*this.view.offsetY,m=d-_*this.view.height}this.projectionMatrix.makeOrthographic(c,u,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class bb extends kx{constructor(){super(new tm(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Tb extends Pu{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mn.DEFAULT_UP),this.updateMatrix(),this.target=new Mn,this.shadow=new bb}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const n=super.toJSON(t);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class Td extends Pu{constructor(t,n,a=10,l=10){super(t,n),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=a,this.height=l}get power(){return this.intensity*this.width*this.height*Math.PI}set power(t){this.intensity=t/(this.width*this.height*Math.PI)}copy(t){return super.copy(t),this.width=t.width,this.height=t.height,this}toJSON(t){const n=super.toJSON(t);return n.object.width=this.width,n.object.height=this.height,n}}const Xr=-90,Wr=1;class Ab extends Mn{constructor(t,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new gi(Xr,Wr,t,n);l.layers=this.layers,this.add(l);const c=new gi(Xr,Wr,t,n);c.layers=this.layers,this.add(c);const u=new gi(Xr,Wr,t,n);u.layers=this.layers,this.add(u);const d=new gi(Xr,Wr,t,n);d.layers=this.layers,this.add(d);const m=new gi(Xr,Wr,t,n);m.layers=this.layers,this.add(m);const p=new gi(Xr,Wr,t,n);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[a,l,c,u,d,m]=n;for(const p of n)this.remove(p);if(t===ji)a.up.set(0,1,0),a.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===_l)a.up.set(0,-1,0),a.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of n)this.add(p),p.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,u,d,m,p,_]=this.children,v=t.getRenderTarget(),g=t.getActiveCubeFace(),x=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const R=a.texture.generateMipmaps;a.texture.generateMipmaps=!1;let M=!1;t.isWebGLRenderer===!0?M=t.state.buffers.depth.getReversed():M=t.reversedDepthBuffer,t.setRenderTarget(a,0,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(n,c),t.setRenderTarget(a,1,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(n,u),t.setRenderTarget(a,2,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(n,d),t.setRenderTarget(a,3,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(n,m),t.setRenderTarget(a,4,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(n,p),a.texture.generateMipmaps=R,t.setRenderTarget(a,5,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(n,_),t.setRenderTarget(v,g,x),t.xr.enabled=E,a.texture.needsPMREMUpdate=!0}}class Rb extends gi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const sm=class sm{constructor(t,n,a,l){this.elements=[1,0,0,1],t!==void 0&&this.set(t,n,a,l)}identity(){return this.set(1,0,0,1),this}fromArray(t,n=0){for(let a=0;a<4;a++)this.elements[a]=t[a+n];return this}set(t,n,a,l){const c=this.elements;return c[0]=t,c[2]=n,c[1]=a,c[3]=l,this}};sm.prototype.isMatrix2=!0;let P_=sm;function z_(r,t,n,a){const l=wb(a);switch(n){case xx:return r*t;case yx:return r*t/l.components*l.byteLength;case zp:return r*t/l.components*l.byteLength;case Qs:return r*t*2/l.components*l.byteLength;case Bp:return r*t*2/l.components*l.byteLength;case Sx:return r*t*3/l.components*l.byteLength;case Bi:return r*t*4/l.components*l.byteLength;case Ip:return r*t*4/l.components*l.byteLength;case _u:case xu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Su:case yu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case qd:case Zd:return Math.max(r,16)*Math.max(t,8)/4;case Wd:case Yd:return Math.max(r,8)*Math.max(t,8)/2;case Kd:case Jd:case jd:case $d:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Qd:case Eu:case tp:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case ep:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case np:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case ip:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case ap:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case sp:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case rp:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case op:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case lp:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case cp:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case up:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case fp:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case hp:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case dp:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case pp:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case mp:case gp:case vp:return Math.ceil(r/4)*Math.ceil(t/4)*16;case _p:case xp:return Math.ceil(r/4)*Math.ceil(t/4)*8;case bu:case Sp:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function wb(r){switch(r){case vi:case mx:return{byteLength:1,components:1};case gl:case gx:case La:return{byteLength:2,components:1};case Op:case Pp:return{byteLength:2,components:4};case ia:case Lp:case Qi:return{byteLength:4,components:1};case vx:case _x:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Up}}));typeof window<"u"&&(window.__THREE__?de("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Up);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Wx(){let r=null,t=!1,n=null,a=null;function l(c,u){n(c,u),a=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&n!==null&&r!==null&&(a=r.requestAnimationFrame(l),t=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(a),t=!1},setAnimationLoop:function(c){n=c},setContext:function(c){r=c}}}function Cb(r){const t=new WeakMap;function n(d,m){const p=d.array,_=d.usage,v=p.byteLength,g=r.createBuffer();r.bindBuffer(m,g),r.bufferData(m,p,_),d.onUploadCallback();let x;if(p instanceof Float32Array)x=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)x=r.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?x=r.HALF_FLOAT:x=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)x=r.SHORT;else if(p instanceof Uint32Array)x=r.UNSIGNED_INT;else if(p instanceof Int32Array)x=r.INT;else if(p instanceof Int8Array)x=r.BYTE;else if(p instanceof Uint8Array)x=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)x=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:x,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:v}}function a(d,m,p){const _=m.array,v=m.updateRanges;if(r.bindBuffer(p,d),v.length===0)r.bufferSubData(p,0,_);else{v.sort((x,E)=>x.start-E.start);let g=0;for(let x=1;x<v.length;x++){const E=v[g],R=v[x];R.start<=E.start+E.count+1?E.count=Math.max(E.count,R.start+R.count-E.start):(++g,v[g]=R)}v.length=g+1;for(let x=0,E=v.length;x<E;x++){const R=v[x];r.bufferSubData(p,R.start*_.BYTES_PER_ELEMENT,_,R.start,R.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(r.deleteBuffer(m.buffer),t.delete(d))}function u(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=t.get(d);(!_||_.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,n(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:u}}var Db=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ub=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Nb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Lb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ob=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Pb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Bb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ib=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Fb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Hb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,kb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Xb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Wb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,qb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Kb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Jb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Qb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,jb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,$b=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,t1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,e1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,n1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,i1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,a1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,s1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,r1="gl_FragColor = linearToOutputTexel( gl_FragColor );",o1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,l1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,c1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,u1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,f1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,h1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,d1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,p1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,m1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,g1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,v1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,_1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,x1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,S1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,y1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,M1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,E1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,b1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,T1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,A1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,R1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,w1=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,C1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,D1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,U1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,N1=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,L1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,O1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,P1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,z1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,B1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,I1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,F1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,H1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,G1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,V1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,k1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,X1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,W1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,q1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Y1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Z1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,K1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,J1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Q1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,j1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,$1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,tT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,eT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,aT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,rT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,oT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,uT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,dT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,pT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,mT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,gT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,_T=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ST=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,MT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ET=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,bT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,TT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,AT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,RT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,CT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const DT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,UT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,LT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,PT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,BT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,IT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,FT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,HT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,GT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,XT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,WT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,YT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,KT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,QT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,jT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$T=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,eA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,sA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ee={alphahash_fragment:Db,alphahash_pars_fragment:Ub,alphamap_fragment:Nb,alphamap_pars_fragment:Lb,alphatest_fragment:Ob,alphatest_pars_fragment:Pb,aomap_fragment:zb,aomap_pars_fragment:Bb,batching_pars_vertex:Ib,batching_vertex:Fb,begin_vertex:Hb,beginnormal_vertex:Gb,bsdfs:Vb,iridescence_fragment:kb,bumpmap_pars_fragment:Xb,clipping_planes_fragment:Wb,clipping_planes_pars_fragment:qb,clipping_planes_pars_vertex:Yb,clipping_planes_vertex:Zb,color_fragment:Kb,color_pars_fragment:Jb,color_pars_vertex:Qb,color_vertex:jb,common:$b,cube_uv_reflection_fragment:t1,defaultnormal_vertex:e1,displacementmap_pars_vertex:n1,displacementmap_vertex:i1,emissivemap_fragment:a1,emissivemap_pars_fragment:s1,colorspace_fragment:r1,colorspace_pars_fragment:o1,envmap_fragment:l1,envmap_common_pars_fragment:c1,envmap_pars_fragment:u1,envmap_pars_vertex:f1,envmap_physical_pars_fragment:M1,envmap_vertex:h1,fog_vertex:d1,fog_pars_vertex:p1,fog_fragment:m1,fog_pars_fragment:g1,gradientmap_pars_fragment:v1,lightmap_pars_fragment:_1,lights_lambert_fragment:x1,lights_lambert_pars_fragment:S1,lights_pars_begin:y1,lights_toon_fragment:E1,lights_toon_pars_fragment:b1,lights_phong_fragment:T1,lights_phong_pars_fragment:A1,lights_physical_fragment:R1,lights_physical_pars_fragment:w1,lights_fragment_begin:C1,lights_fragment_maps:D1,lights_fragment_end:U1,lightprobes_pars_fragment:N1,logdepthbuf_fragment:L1,logdepthbuf_pars_fragment:O1,logdepthbuf_pars_vertex:P1,logdepthbuf_vertex:z1,map_fragment:B1,map_pars_fragment:I1,map_particle_fragment:F1,map_particle_pars_fragment:H1,metalnessmap_fragment:G1,metalnessmap_pars_fragment:V1,morphinstance_vertex:k1,morphcolor_vertex:X1,morphnormal_vertex:W1,morphtarget_pars_vertex:q1,morphtarget_vertex:Y1,normal_fragment_begin:Z1,normal_fragment_maps:K1,normal_pars_fragment:J1,normal_pars_vertex:Q1,normal_vertex:j1,normalmap_pars_fragment:$1,clearcoat_normal_fragment_begin:tT,clearcoat_normal_fragment_maps:eT,clearcoat_pars_fragment:nT,iridescence_pars_fragment:iT,opaque_fragment:aT,packing:sT,premultiplied_alpha_fragment:rT,project_vertex:oT,dithering_fragment:lT,dithering_pars_fragment:cT,roughnessmap_fragment:uT,roughnessmap_pars_fragment:fT,shadowmap_pars_fragment:hT,shadowmap_pars_vertex:dT,shadowmap_vertex:pT,shadowmask_pars_fragment:mT,skinbase_vertex:gT,skinning_pars_vertex:vT,skinning_vertex:_T,skinnormal_vertex:xT,specularmap_fragment:ST,specularmap_pars_fragment:yT,tonemapping_fragment:MT,tonemapping_pars_fragment:ET,transmission_fragment:bT,transmission_pars_fragment:TT,uv_pars_fragment:AT,uv_pars_vertex:RT,uv_vertex:wT,worldpos_vertex:CT,background_vert:DT,background_frag:UT,backgroundCube_vert:NT,backgroundCube_frag:LT,cube_vert:OT,cube_frag:PT,depth_vert:zT,depth_frag:BT,distance_vert:IT,distance_frag:FT,equirect_vert:HT,equirect_frag:GT,linedashed_vert:VT,linedashed_frag:kT,meshbasic_vert:XT,meshbasic_frag:WT,meshlambert_vert:qT,meshlambert_frag:YT,meshmatcap_vert:ZT,meshmatcap_frag:KT,meshnormal_vert:JT,meshnormal_frag:QT,meshphong_vert:jT,meshphong_frag:$T,meshphysical_vert:tA,meshphysical_frag:eA,meshtoon_vert:nA,meshtoon_frag:iA,points_vert:aA,points_frag:sA,shadow_vert:rA,shadow_frag:oA,sprite_vert:lA,sprite_frag:cA},kt={common:{diffuse:{value:new Me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ve},alphaMap:{value:null},alphaMapTransform:{value:new ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ve}},envmap:{envMap:{value:null},envMapRotation:{value:new ve},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ve},normalScale:{value:new Ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new k},probesMax:{value:new k},probesResolution:{value:new k}},points:{diffuse:{value:new Me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ve},alphaTest:{value:0},uvTransform:{value:new ve}},sprite:{diffuse:{value:new Me(16777215)},opacity:{value:1},center:{value:new Ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ve},alphaMap:{value:null},alphaMapTransform:{value:new ve},alphaTest:{value:0}}},Ji={basic:{uniforms:Xn([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.fog]),vertexShader:Ee.meshbasic_vert,fragmentShader:Ee.meshbasic_frag},lambert:{uniforms:Xn([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,kt.lights,{emissive:{value:new Me(0)},envMapIntensity:{value:1}}]),vertexShader:Ee.meshlambert_vert,fragmentShader:Ee.meshlambert_frag},phong:{uniforms:Xn([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,kt.lights,{emissive:{value:new Me(0)},specular:{value:new Me(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ee.meshphong_vert,fragmentShader:Ee.meshphong_frag},standard:{uniforms:Xn([kt.common,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.roughnessmap,kt.metalnessmap,kt.fog,kt.lights,{emissive:{value:new Me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ee.meshphysical_vert,fragmentShader:Ee.meshphysical_frag},toon:{uniforms:Xn([kt.common,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.gradientmap,kt.fog,kt.lights,{emissive:{value:new Me(0)}}]),vertexShader:Ee.meshtoon_vert,fragmentShader:Ee.meshtoon_frag},matcap:{uniforms:Xn([kt.common,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,{matcap:{value:null}}]),vertexShader:Ee.meshmatcap_vert,fragmentShader:Ee.meshmatcap_frag},points:{uniforms:Xn([kt.points,kt.fog]),vertexShader:Ee.points_vert,fragmentShader:Ee.points_frag},dashed:{uniforms:Xn([kt.common,kt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ee.linedashed_vert,fragmentShader:Ee.linedashed_frag},depth:{uniforms:Xn([kt.common,kt.displacementmap]),vertexShader:Ee.depth_vert,fragmentShader:Ee.depth_frag},normal:{uniforms:Xn([kt.common,kt.bumpmap,kt.normalmap,kt.displacementmap,{opacity:{value:1}}]),vertexShader:Ee.meshnormal_vert,fragmentShader:Ee.meshnormal_frag},sprite:{uniforms:Xn([kt.sprite,kt.fog]),vertexShader:Ee.sprite_vert,fragmentShader:Ee.sprite_frag},background:{uniforms:{uvTransform:{value:new ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ee.background_vert,fragmentShader:Ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ve}},vertexShader:Ee.backgroundCube_vert,fragmentShader:Ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ee.cube_vert,fragmentShader:Ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ee.equirect_vert,fragmentShader:Ee.equirect_frag},distance:{uniforms:Xn([kt.common,kt.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ee.distance_vert,fragmentShader:Ee.distance_frag},shadow:{uniforms:Xn([kt.lights,kt.fog,{color:{value:new Me(0)},opacity:{value:1}}]),vertexShader:Ee.shadow_vert,fragmentShader:Ee.shadow_frag}};Ji.physical={uniforms:Xn([Ji.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ve},clearcoatNormalScale:{value:new Ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ve},sheen:{value:0},sheenColor:{value:new Me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ve},transmissionSamplerSize:{value:new Ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ve},attenuationDistance:{value:0},attenuationColor:{value:new Me(0)},specularColor:{value:new Me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ve},anisotropyVector:{value:new Ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ve}}]),vertexShader:Ee.meshphysical_vert,fragmentShader:Ee.meshphysical_frag};const pu={r:0,b:0,g:0},uA=new $e,qx=new ve;qx.set(-1,0,0,0,1,0,0,0,1);function fA(r,t,n,a,l,c){const u=new Me(0);let d=l===!0?0:1,m,p,_=null,v=0,g=null;function x(B){let N=B.isScene===!0?B.background:null;if(N&&N.isTexture){const A=B.backgroundBlurriness>0;N=t.get(N,A)}return N}function E(B){let N=!1;const A=x(B);A===null?M(u,d):A&&A.isColor&&(M(A,1),N=!0);const z=r.xr.getEnvironmentBlendMode();z==="additive"?n.buffers.color.setClear(0,0,0,1,c):z==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,c),(r.autoClear||N)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function R(B,N){const A=x(N);A&&(A.isCubeTexture||A.mapping===Lu)?(p===void 0&&(p=new On(new ro(1,1,1),new Hi({name:"BackgroundCubeMaterial",uniforms:ao(Ji.backgroundCube.uniforms),vertexShader:Ji.backgroundCube.vertexShader,fragmentShader:Ji.backgroundCube.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(z,O,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(p)),p.material.uniforms.envMap.value=A,p.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(uA.makeRotationFromEuler(N.backgroundRotation)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(qx),p.material.toneMapped=Ne.getTransfer(A.colorSpace)!==We,(_!==A||v!==A.version||g!==r.toneMapping)&&(p.material.needsUpdate=!0,_=A,v=A.version,g=r.toneMapping),p.layers.enableAll(),B.unshift(p,p.geometry,p.material,0,0,null)):A&&A.isTexture&&(m===void 0&&(m=new On(new Rl(2,2),new Hi({name:"BackgroundMaterial",uniforms:ao(Ji.background.uniforms),vertexShader:Ji.background.vertexShader,fragmentShader:Ji.background.fragmentShader,side:_s,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=A,m.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,m.material.toneMapped=Ne.getTransfer(A.colorSpace)!==We,A.matrixAutoUpdate===!0&&A.updateMatrix(),m.material.uniforms.uvTransform.value.copy(A.matrix),(_!==A||v!==A.version||g!==r.toneMapping)&&(m.material.needsUpdate=!0,_=A,v=A.version,g=r.toneMapping),m.layers.enableAll(),B.unshift(m,m.geometry,m.material,0,0,null))}function M(B,N){B.getRGB(pu,Vx(r)),n.buffers.color.setClear(pu.r,pu.g,pu.b,N,c)}function S(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return u},setClearColor:function(B,N=1){u.set(B),d=N,M(u,d)},getClearAlpha:function(){return d},setClearAlpha:function(B){d=B,M(u,d)},render:E,addToRenderList:R,dispose:S}}function hA(r,t){const n=r.getParameter(r.MAX_VERTEX_ATTRIBS),a={},l=g(null);let c=l,u=!1;function d(G,Z,et,ft,Y){let I=!1;const F=v(G,ft,et,Z);c!==F&&(c=F,p(c.object)),I=x(G,ft,et,Y),I&&E(G,ft,et,Y),Y!==null&&t.update(Y,r.ELEMENT_ARRAY_BUFFER),(I||u)&&(u=!1,A(G,Z,et,ft),Y!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function m(){return r.createVertexArray()}function p(G){return r.bindVertexArray(G)}function _(G){return r.deleteVertexArray(G)}function v(G,Z,et,ft){const Y=ft.wireframe===!0;let I=a[Z.id];I===void 0&&(I={},a[Z.id]=I);const F=G.isInstancedMesh===!0?G.id:0;let tt=I[F];tt===void 0&&(tt={},I[F]=tt);let pt=tt[et.id];pt===void 0&&(pt={},tt[et.id]=pt);let St=pt[Y];return St===void 0&&(St=g(m()),pt[Y]=St),St}function g(G){const Z=[],et=[],ft=[];for(let Y=0;Y<n;Y++)Z[Y]=0,et[Y]=0,ft[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:et,attributeDivisors:ft,object:G,attributes:{},index:null}}function x(G,Z,et,ft){const Y=c.attributes,I=Z.attributes;let F=0;const tt=et.getAttributes();for(const pt in tt)if(tt[pt].location>=0){const P=Y[pt];let Q=I[pt];if(Q===void 0&&(pt==="instanceMatrix"&&G.instanceMatrix&&(Q=G.instanceMatrix),pt==="instanceColor"&&G.instanceColor&&(Q=G.instanceColor)),P===void 0||P.attribute!==Q||Q&&P.data!==Q.data)return!0;F++}return c.attributesNum!==F||c.index!==ft}function E(G,Z,et,ft){const Y={},I=Z.attributes;let F=0;const tt=et.getAttributes();for(const pt in tt)if(tt[pt].location>=0){let P=I[pt];P===void 0&&(pt==="instanceMatrix"&&G.instanceMatrix&&(P=G.instanceMatrix),pt==="instanceColor"&&G.instanceColor&&(P=G.instanceColor));const Q={};Q.attribute=P,P&&P.data&&(Q.data=P.data),Y[pt]=Q,F++}c.attributes=Y,c.attributesNum=F,c.index=ft}function R(){const G=c.newAttributes;for(let Z=0,et=G.length;Z<et;Z++)G[Z]=0}function M(G){S(G,0)}function S(G,Z){const et=c.newAttributes,ft=c.enabledAttributes,Y=c.attributeDivisors;et[G]=1,ft[G]===0&&(r.enableVertexAttribArray(G),ft[G]=1),Y[G]!==Z&&(r.vertexAttribDivisor(G,Z),Y[G]=Z)}function B(){const G=c.newAttributes,Z=c.enabledAttributes;for(let et=0,ft=Z.length;et<ft;et++)Z[et]!==G[et]&&(r.disableVertexAttribArray(et),Z[et]=0)}function N(G,Z,et,ft,Y,I,F){F===!0?r.vertexAttribIPointer(G,Z,et,Y,I):r.vertexAttribPointer(G,Z,et,ft,Y,I)}function A(G,Z,et,ft){R();const Y=ft.attributes,I=et.getAttributes(),F=Z.defaultAttributeValues;for(const tt in I){const pt=I[tt];if(pt.location>=0){let St=Y[tt];if(St===void 0&&(tt==="instanceMatrix"&&G.instanceMatrix&&(St=G.instanceMatrix),tt==="instanceColor"&&G.instanceColor&&(St=G.instanceColor)),St!==void 0){const P=St.normalized,Q=St.itemSize,xt=t.get(St);if(xt===void 0)continue;const Dt=xt.buffer,At=xt.type,K=xt.bytesPerElement,vt=At===r.INT||At===r.UNSIGNED_INT||St.gpuType===Lp;if(St.isInterleavedBufferAttribute){const yt=St.data,Pt=yt.stride,ie=St.offset;if(yt.isInstancedInterleavedBuffer){for(let $t=0;$t<pt.locationSize;$t++)S(pt.location+$t,yt.meshPerAttribute);G.isInstancedMesh!==!0&&ft._maxInstanceCount===void 0&&(ft._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let $t=0;$t<pt.locationSize;$t++)M(pt.location+$t);r.bindBuffer(r.ARRAY_BUFFER,Dt);for(let $t=0;$t<pt.locationSize;$t++)N(pt.location+$t,Q/pt.locationSize,At,P,Pt*K,(ie+Q/pt.locationSize*$t)*K,vt)}else{if(St.isInstancedBufferAttribute){for(let yt=0;yt<pt.locationSize;yt++)S(pt.location+yt,St.meshPerAttribute);G.isInstancedMesh!==!0&&ft._maxInstanceCount===void 0&&(ft._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let yt=0;yt<pt.locationSize;yt++)M(pt.location+yt);r.bindBuffer(r.ARRAY_BUFFER,Dt);for(let yt=0;yt<pt.locationSize;yt++)N(pt.location+yt,Q/pt.locationSize,At,P,Q*K,Q/pt.locationSize*yt*K,vt)}}else if(F!==void 0){const P=F[tt];if(P!==void 0)switch(P.length){case 2:r.vertexAttrib2fv(pt.location,P);break;case 3:r.vertexAttrib3fv(pt.location,P);break;case 4:r.vertexAttrib4fv(pt.location,P);break;default:r.vertexAttrib1fv(pt.location,P)}}}}B()}function z(){U();for(const G in a){const Z=a[G];for(const et in Z){const ft=Z[et];for(const Y in ft){const I=ft[Y];for(const F in I)_(I[F].object),delete I[F];delete ft[Y]}}delete a[G]}}function O(G){if(a[G.id]===void 0)return;const Z=a[G.id];for(const et in Z){const ft=Z[et];for(const Y in ft){const I=ft[Y];for(const F in I)_(I[F].object),delete I[F];delete ft[Y]}}delete a[G.id]}function D(G){for(const Z in a){const et=a[Z];for(const ft in et){const Y=et[ft];if(Y[G.id]===void 0)continue;const I=Y[G.id];for(const F in I)_(I[F].object),delete I[F];delete Y[G.id]}}}function T(G){for(const Z in a){const et=a[Z],ft=G.isInstancedMesh===!0?G.id:0,Y=et[ft];if(Y!==void 0){for(const I in Y){const F=Y[I];for(const tt in F)_(F[tt].object),delete F[tt];delete Y[I]}delete et[ft],Object.keys(et).length===0&&delete a[Z]}}}function U(){V(),u=!0,c!==l&&(c=l,p(c.object))}function V(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:U,resetDefaultState:V,dispose:z,releaseStatesOfGeometry:O,releaseStatesOfObject:T,releaseStatesOfProgram:D,initAttributes:R,enableAttribute:M,disableUnusedAttributes:B}}function dA(r,t,n){let a;function l(m){a=m}function c(m,p){r.drawArrays(a,m,p),n.update(p,a,1)}function u(m,p,_){_!==0&&(r.drawArraysInstanced(a,m,p,_),n.update(p,a,_))}function d(m,p,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,m,0,p,0,_);let g=0;for(let x=0;x<_;x++)g+=p[x];n.update(g,a,1)}this.setMode=l,this.render=c,this.renderInstances=u,this.renderMultiDraw=d}function pA(r,t,n,a){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const D=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function u(D){return!(D!==Bi&&a.convert(D)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(D){const T=D===La&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(D!==vi&&a.convert(D)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==Qi&&!T)}function m(D){if(D==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=n.precision!==void 0?n.precision:"highp";const _=m(p);_!==p&&(de("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const v=n.logarithmicDepthBuffer===!0,g=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control");n.reversedDepthBuffer===!0&&g===!1&&de("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const x=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),S=r.getParameter(r.MAX_VERTEX_ATTRIBS),B=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),N=r.getParameter(r.MAX_VARYING_VECTORS),A=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),z=r.getParameter(r.MAX_SAMPLES),O=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:u,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:g,maxTextures:x,maxVertexTextures:E,maxTextureSize:R,maxCubemapSize:M,maxAttributes:S,maxVertexUniforms:B,maxVaryings:N,maxFragmentUniforms:A,maxSamples:z,samples:O}}function mA(r){const t=this;let n=null,a=0,l=!1,c=!1;const u=new Ws,d=new ve,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,g){const x=v.length!==0||g||a!==0||l;return l=g,a=v.length,x},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,g){n=_(v,g,0)},this.setState=function(v,g,x){const E=v.clippingPlanes,R=v.clipIntersection,M=v.clipShadows,S=r.get(v);if(!l||E===null||E.length===0||c&&!M)c?_(null):p();else{const B=c?0:a,N=B*4;let A=S.clippingState||null;m.value=A,A=_(E,g,N,x);for(let z=0;z!==N;++z)A[z]=n[z];S.clippingState=A,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=B}};function p(){m.value!==n&&(m.value=n,m.needsUpdate=a>0),t.numPlanes=a,t.numIntersection=0}function _(v,g,x,E){const R=v!==null?v.length:0;let M=null;if(R!==0){if(M=m.value,E!==!0||M===null){const S=x+R*4,B=g.matrixWorldInverse;d.getNormalMatrix(B),(M===null||M.length<S)&&(M=new Float32Array(S));for(let N=0,A=x;N!==R;++N,A+=4)u.copy(v[N]).applyMatrix4(B,d),u.normal.toArray(M,A),M[A+3]=u.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=R,t.numIntersection=0,M}}const vs=4,B_=[.125,.215,.35,.446,.526,.582],Ys=20,gA=256,rl=new tm,I_=new Me;let Ad=null,Rd=0,wd=0,Cd=!1;const vA=new k;class F_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,a=.1,l=100,c={}){const{size:u=256,position:d=vA}=c;Ad=this._renderer.getRenderTarget(),Rd=this._renderer.getActiveCubeFace(),wd=this._renderer.getActiveMipmapLevel(),Cd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,a,l,m,d),n>0&&this._blur(m,0,0,n),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=V_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=G_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Ad,Rd,wd),this._renderer.xr.enabled=Cd,t.scissorTest=!1,qr(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Js||t.mapping===eo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ad=this._renderer.getRenderTarget(),Rd=this._renderer.getActiveCubeFace(),wd=this._renderer.getActiveMipmapLevel(),Cd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(t,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:Fn,minFilter:Fn,generateMipmaps:!1,type:La,format:Bi,colorSpace:Tu,depthBuffer:!1},l=H_(t,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=H_(t,n,a);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=_A(c)),this._blurMaterial=SA(c,t,n),this._ggxMaterial=xA(c,t,n)}return l}_compileMaterial(t){const n=new On(new Rn,t);this._renderer.compile(n,rl)}_sceneToCubeUV(t,n,a,l,c){const m=new gi(90,1,n,a),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,x=v.toneMapping;v.getClearColor(I_),v.toneMapping=ta,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new On(new ro,new Al({name:"PMREM.Background",side:ei,depthWrite:!1,depthTest:!1})));const R=this._backgroundBox,M=R.material;let S=!1;const B=t.background;B?B.isColor&&(M.color.copy(B),t.background=null,S=!0):(M.color.copy(I_),S=!0);for(let N=0;N<6;N++){const A=N%3;A===0?(m.up.set(0,p[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[N],c.y,c.z)):A===1?(m.up.set(0,0,p[N]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[N],c.z)):(m.up.set(0,p[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[N]));const z=this._cubeSize;qr(l,A*z,N>2?z:0,z,z),v.setRenderTarget(l),S&&v.render(R,m),v.render(t,m)}v.toneMapping=x,v.autoClear=g,t.background=B}_textureToCubeUV(t,n){const a=this._renderer,l=t.mapping===Js||t.mapping===eo;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=V_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=G_());const c=l?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=c;const d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;qr(n,0,0,3*m,2*m),a.setRenderTarget(n),a.render(u,rl)}_applyPMREM(t){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);n.autoClear=a}_applyGGXFilter(t,n,a){const l=this._renderer,c=this._pingPongRenderTarget,u=this._ggxMaterial,d=this._lodMeshes[a];d.material=u;const m=u.uniforms,p=a/(this._lodMeshes.length-1),_=n/(this._lodMeshes.length-1),v=Math.sqrt(p*p-_*_),g=0+p*1.25,x=v*g,{_lodMax:E}=this,R=this._sizeLods[a],M=3*R*(a>E-vs?a-E+vs:0),S=4*(this._cubeSize-R);m.envMap.value=t.texture,m.roughness.value=x,m.mipInt.value=E-n,qr(c,M,S,3*R,2*R),l.setRenderTarget(c),l.render(d,rl),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-a,qr(t,M,S,3*R,2*R),l.setRenderTarget(t),l.render(d,rl)}_blur(t,n,a,l,c){const u=this._pingPongRenderTarget;this._halfBlur(t,u,n,a,l,"latitudinal",c),this._halfBlur(u,t,a,a,l,"longitudinal",c)}_halfBlur(t,n,a,l,c,u,d){const m=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Le("blur direction must be either latitudinal or longitudinal!");const _=3,v=this._lodMeshes[l];v.material=p;const g=p.uniforms,x=this._sizeLods[a]-1,E=isFinite(c)?Math.PI/(2*x):2*Math.PI/(2*Ys-1),R=c/E,M=isFinite(c)?1+Math.floor(_*R):Ys;M>Ys&&de(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Ys}`);const S=[];let B=0;for(let D=0;D<Ys;++D){const T=D/R,U=Math.exp(-T*T/2);S.push(U),D===0?B+=U:D<M&&(B+=2*U)}for(let D=0;D<S.length;D++)S[D]=S[D]/B;g.envMap.value=t.texture,g.samples.value=M,g.weights.value=S,g.latitudinal.value=u==="latitudinal",d&&(g.poleAxis.value=d);const{_lodMax:N}=this;g.dTheta.value=E,g.mipInt.value=N-a;const A=this._sizeLods[l],z=3*A*(l>N-vs?l-N+vs:0),O=4*(this._cubeSize-A);qr(n,z,O,3*A,2*A),m.setRenderTarget(n),m.render(v,rl)}}function _A(r){const t=[],n=[],a=[];let l=r;const c=r-vs+1+B_.length;for(let u=0;u<c;u++){const d=Math.pow(2,l);t.push(d);let m=1/d;u>r-vs?m=B_[u-r+vs-1]:u===0&&(m=0),n.push(m);const p=1/(d-2),_=-p,v=1+p,g=[_,_,v,_,v,v,_,_,v,v,_,v],x=6,E=6,R=3,M=2,S=1,B=new Float32Array(R*E*x),N=new Float32Array(M*E*x),A=new Float32Array(S*E*x);for(let O=0;O<x;O++){const D=O%3*2/3-1,T=O>2?0:-1,U=[D,T,0,D+2/3,T,0,D+2/3,T+1,0,D,T,0,D+2/3,T+1,0,D,T+1,0];B.set(U,R*E*O),N.set(g,M*E*O);const V=[O,O,O,O,O,O];A.set(V,S*E*O)}const z=new Rn;z.setAttribute("position",new Fi(B,R)),z.setAttribute("uv",new Fi(N,M)),z.setAttribute("faceIndex",new Fi(A,S)),a.push(new On(z,null)),l>vs&&l--}return{lodMeshes:a,sizeLods:t,sigmas:n}}function H_(r,t,n){const a=new ea(r,t,n);return a.texture.mapping=Lu,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function qr(r,t,n,a,l){r.viewport.set(t,n,a,l),r.scissor.set(t,n,a,l)}function xA(r,t,n){return new Hi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:gA,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:zu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ua,depthTest:!1,depthWrite:!1})}function SA(r,t,n){const a=new Float32Array(Ys),l=new k(0,1,0);return new Hi({name:"SphericalGaussianBlur",defines:{n:Ys,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:zu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ua,depthTest:!1,depthWrite:!1})}function G_(){return new Hi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ua,depthTest:!1,depthWrite:!1})}function V_(){return new Hi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ua,depthTest:!1,depthWrite:!1})}function zu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Yx extends ea{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const a={width:t,height:t,depth:1},l=[a,a,a,a,a,a];this.texture=new Dx(l),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new ro(5,5,5),c=new Hi({name:"CubemapFromEquirect",uniforms:ao(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:ei,blending:Ua});c.uniforms.tEquirect.value=n;const u=new On(l,c),d=n.minFilter;return n.minFilter===Zs&&(n.minFilter=Fn),new Ab(1,10,this).update(t,u),n.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(t,n=!0,a=!0,l=!0){const c=t.getRenderTarget();for(let u=0;u<6;u++)t.setRenderTarget(this,u),t.clear(n,a,l);t.setRenderTarget(c)}}function yA(r){let t=new WeakMap,n=new WeakMap,a=null;function l(g,x=!1){return g==null?null:x?u(g):c(g)}function c(g){if(g&&g.isTexture){const x=g.mapping;if(x===Zh||x===Kh)if(t.has(g)){const E=t.get(g).texture;return d(E,g.mapping)}else{const E=g.image;if(E&&E.height>0){const R=new Yx(E.height);return R.fromEquirectangularTexture(r,g),t.set(g,R),g.addEventListener("dispose",p),d(R.texture,g.mapping)}else return null}}return g}function u(g){if(g&&g.isTexture){const x=g.mapping,E=x===Zh||x===Kh,R=x===Js||x===eo;if(E||R){let M=n.get(g);const S=M!==void 0?M.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==S)return a===null&&(a=new F_(r)),M=E?a.fromEquirectangular(g,M):a.fromCubemap(g,M),M.texture.pmremVersion=g.pmremVersion,n.set(g,M),M.texture;if(M!==void 0)return M.texture;{const B=g.image;return E&&B&&B.height>0||R&&B&&m(B)?(a===null&&(a=new F_(r)),M=E?a.fromEquirectangular(g):a.fromCubemap(g),M.texture.pmremVersion=g.pmremVersion,n.set(g,M),g.addEventListener("dispose",_),M.texture):null}}}return g}function d(g,x){return x===Zh?g.mapping=Js:x===Kh&&(g.mapping=eo),g}function m(g){let x=0;const E=6;for(let R=0;R<E;R++)g[R]!==void 0&&x++;return x===E}function p(g){const x=g.target;x.removeEventListener("dispose",p);const E=t.get(x);E!==void 0&&(t.delete(x),E.dispose())}function _(g){const x=g.target;x.removeEventListener("dispose",_);const E=n.get(x);E!==void 0&&(n.delete(x),E.dispose())}function v(){t=new WeakMap,n=new WeakMap,a!==null&&(a.dispose(),a=null)}return{get:l,dispose:v}}function MA(r){const t={};function n(a){if(t[a]!==void 0)return t[a];const l=r.getExtension(a);return t[a]=l,l}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const l=n(a);return l===null&&Qr("WebGLRenderer: "+a+" extension not supported."),l}}}function EA(r,t,n,a){const l={},c=new WeakMap;function u(v){const g=v.target;g.index!==null&&t.remove(g.index);for(const E in g.attributes)t.remove(g.attributes[E]);g.removeEventListener("dispose",u),delete l[g.id];const x=c.get(g);x&&(t.remove(x),c.delete(g)),a.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,n.memory.geometries--}function d(v,g){return l[g.id]===!0||(g.addEventListener("dispose",u),l[g.id]=!0,n.memory.geometries++),g}function m(v){const g=v.attributes;for(const x in g)t.update(g[x],r.ARRAY_BUFFER)}function p(v){const g=[],x=v.index,E=v.attributes.position;let R=0;if(E===void 0)return;if(x!==null){const B=x.array;R=x.version;for(let N=0,A=B.length;N<A;N+=3){const z=B[N+0],O=B[N+1],D=B[N+2];g.push(z,O,O,D,D,z)}}else{const B=E.array;R=E.version;for(let N=0,A=B.length/3-1;N<A;N+=3){const z=N+0,O=N+1,D=N+2;g.push(z,O,O,D,D,z)}}const M=new(E.count>=65535?Rx:Ax)(g,1);M.version=R;const S=c.get(v);S&&t.remove(S),c.set(v,M)}function _(v){const g=c.get(v);if(g){const x=v.index;x!==null&&g.version<x.version&&p(v)}else p(v);return c.get(v)}return{get:d,update:m,getWireframeAttribute:_}}function bA(r,t,n){let a;function l(v){a=v}let c,u;function d(v){c=v.type,u=v.bytesPerElement}function m(v,g){r.drawElements(a,g,c,v*u),n.update(g,a,1)}function p(v,g,x){x!==0&&(r.drawElementsInstanced(a,g,c,v*u,x),n.update(g,a,x))}function _(v,g,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,g,0,c,v,0,x);let R=0;for(let M=0;M<x;M++)R+=g[M];n.update(R,a,1)}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=_}function TA(r){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(c,u,d){switch(n.calls++,u){case r.TRIANGLES:n.triangles+=d*(c/3);break;case r.LINES:n.lines+=d*(c/2);break;case r.LINE_STRIP:n.lines+=d*(c-1);break;case r.LINE_LOOP:n.lines+=d*c;break;case r.POINTS:n.points+=d*c;break;default:Le("WebGLInfo: Unknown draw mode:",u);break}}function l(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:l,update:a}}function AA(r,t,n){const a=new WeakMap,l=new rn;function c(u,d,m){const p=u.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=_!==void 0?_.length:0;let g=a.get(d);if(g===void 0||g.count!==v){let V=function(){T.dispose(),a.delete(d),d.removeEventListener("dispose",V)};var x=V;g!==void 0&&g.texture.dispose();const E=d.morphAttributes.position!==void 0,R=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,S=d.morphAttributes.position||[],B=d.morphAttributes.normal||[],N=d.morphAttributes.color||[];let A=0;E===!0&&(A=1),R===!0&&(A=2),M===!0&&(A=3);let z=d.attributes.position.count*A,O=1;z>t.maxTextureSize&&(O=Math.ceil(z/t.maxTextureSize),z=t.maxTextureSize);const D=new Float32Array(z*O*4*v),T=new Ex(D,z,O,v);T.type=Qi,T.needsUpdate=!0;const U=A*4;for(let G=0;G<v;G++){const Z=S[G],et=B[G],ft=N[G],Y=z*O*4*G;for(let I=0;I<Z.count;I++){const F=I*U;E===!0&&(l.fromBufferAttribute(Z,I),D[Y+F+0]=l.x,D[Y+F+1]=l.y,D[Y+F+2]=l.z,D[Y+F+3]=0),R===!0&&(l.fromBufferAttribute(et,I),D[Y+F+4]=l.x,D[Y+F+5]=l.y,D[Y+F+6]=l.z,D[Y+F+7]=0),M===!0&&(l.fromBufferAttribute(ft,I),D[Y+F+8]=l.x,D[Y+F+9]=l.y,D[Y+F+10]=l.z,D[Y+F+11]=ft.itemSize===4?l.w:1)}}g={count:v,texture:T,size:new Ft(z,O)},a.set(d,g),d.addEventListener("dispose",V)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",u.morphTexture,n);else{let E=0;for(let M=0;M<p.length;M++)E+=p[M];const R=d.morphTargetsRelative?1:1-E;m.getUniforms().setValue(r,"morphTargetBaseInfluence",R),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",g.texture,n),m.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:c}}function RA(r,t,n,a,l){let c=new WeakMap;function u(p){const _=l.render.frame,v=p.geometry,g=t.get(p,v);if(c.get(g)!==_&&(t.update(g),c.set(g,_)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),c.get(p)!==_&&(n.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,r.ARRAY_BUFFER),c.set(p,_))),p.isSkinnedMesh){const x=p.skeleton;c.get(x)!==_&&(x.update(),c.set(x,_))}return g}function d(){c=new WeakMap}function m(p){const _=p.target;_.removeEventListener("dispose",m),a.releaseStatesOfObject(_),n.remove(_.instanceMatrix),_.instanceColor!==null&&n.remove(_.instanceColor)}return{update:u,dispose:d}}const wA={[lx]:"LINEAR_TONE_MAPPING",[cx]:"REINHARD_TONE_MAPPING",[ux]:"CINEON_TONE_MAPPING",[Np]:"ACES_FILMIC_TONE_MAPPING",[hx]:"AGX_TONE_MAPPING",[dx]:"NEUTRAL_TONE_MAPPING",[fx]:"CUSTOM_TONE_MAPPING"};function CA(r,t,n,a,l,c){const u=new ea(t,n,{type:r,depthBuffer:l,stencilBuffer:c,samples:a?4:0,depthTexture:l?new no(t,n):void 0}),d=new ea(t,n,{type:La,depthBuffer:!1,stencilBuffer:!1}),m=new Rn;m.setAttribute("position",new ln([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new ln([0,2,0,0,2,0],2));const p=new xb({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),_=new On(m,p),v=new tm(-1,1,1,-1,0,1);let g=null,x=null,E=!1,R,M=null,S=[],B=!1;this.setSize=function(N,A){u.setSize(N,A),d.setSize(N,A);for(let z=0;z<S.length;z++){const O=S[z];O.setSize&&O.setSize(N,A)}},this.setEffects=function(N){S=N,B=S.length>0&&S[0].isRenderPass===!0;const A=u.width,z=u.height;for(let O=0;O<S.length;O++){const D=S[O];D.setSize&&D.setSize(A,z)}},this.begin=function(N,A){if(E||N.toneMapping===ta&&S.length===0)return!1;if(M=A,A!==null){const z=A.width,O=A.height;(u.width!==z||u.height!==O)&&this.setSize(z,O)}return B===!1&&N.setRenderTarget(u),R=N.toneMapping,N.toneMapping=ta,!0},this.hasRenderPass=function(){return B},this.end=function(N,A){N.toneMapping=R,E=!0;let z=u,O=d;for(let D=0;D<S.length;D++){const T=S[D];if(T.enabled!==!1&&(T.render(N,O,z,A),T.needsSwap!==!1)){const U=z;z=O,O=U}}if(g!==N.outputColorSpace||x!==N.toneMapping){g=N.outputColorSpace,x=N.toneMapping,p.defines={},Ne.getTransfer(g)===We&&(p.defines.SRGB_TRANSFER="");const D=wA[x];D&&(p.defines[D]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=z.texture,N.setRenderTarget(M),N.render(_,v),M=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){u.depthTexture&&u.depthTexture.dispose(),u.dispose(),d.dispose(),m.dispose(),p.dispose()}}const Zx=new qn,Ap=new no(1,1),Kx=new Ex,Jx=new mE,Qx=new Dx,k_=[],X_=[],W_=new Float32Array(16),q_=new Float32Array(9),Y_=new Float32Array(4);function oo(r,t,n){const a=r[0];if(a<=0||a>0)return r;const l=t*n;let c=k_[l];if(c===void 0&&(c=new Float32Array(l),k_[l]=c),t!==0){a.toArray(c,0);for(let u=1,d=0;u!==t;++u)d+=n,r[u].toArray(c,d)}return c}function En(r,t){if(r.length!==t.length)return!1;for(let n=0,a=r.length;n<a;n++)if(r[n]!==t[n])return!1;return!0}function bn(r,t){for(let n=0,a=t.length;n<a;n++)r[n]=t[n]}function Bu(r,t){let n=X_[t];n===void 0&&(n=new Int32Array(t),X_[t]=n);for(let a=0;a!==t;++a)n[a]=r.allocateTextureUnit();return n}function DA(r,t){const n=this.cache;n[0]!==t&&(r.uniform1f(this.addr,t),n[0]=t)}function UA(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(En(n,t))return;r.uniform2fv(this.addr,t),bn(n,t)}}function NA(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(En(n,t))return;r.uniform3fv(this.addr,t),bn(n,t)}}function LA(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(En(n,t))return;r.uniform4fv(this.addr,t),bn(n,t)}}function OA(r,t){const n=this.cache,a=t.elements;if(a===void 0){if(En(n,t))return;r.uniformMatrix2fv(this.addr,!1,t),bn(n,t)}else{if(En(n,a))return;Y_.set(a),r.uniformMatrix2fv(this.addr,!1,Y_),bn(n,a)}}function PA(r,t){const n=this.cache,a=t.elements;if(a===void 0){if(En(n,t))return;r.uniformMatrix3fv(this.addr,!1,t),bn(n,t)}else{if(En(n,a))return;q_.set(a),r.uniformMatrix3fv(this.addr,!1,q_),bn(n,a)}}function zA(r,t){const n=this.cache,a=t.elements;if(a===void 0){if(En(n,t))return;r.uniformMatrix4fv(this.addr,!1,t),bn(n,t)}else{if(En(n,a))return;W_.set(a),r.uniformMatrix4fv(this.addr,!1,W_),bn(n,a)}}function BA(r,t){const n=this.cache;n[0]!==t&&(r.uniform1i(this.addr,t),n[0]=t)}function IA(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(En(n,t))return;r.uniform2iv(this.addr,t),bn(n,t)}}function FA(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(En(n,t))return;r.uniform3iv(this.addr,t),bn(n,t)}}function HA(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(En(n,t))return;r.uniform4iv(this.addr,t),bn(n,t)}}function GA(r,t){const n=this.cache;n[0]!==t&&(r.uniform1ui(this.addr,t),n[0]=t)}function VA(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(En(n,t))return;r.uniform2uiv(this.addr,t),bn(n,t)}}function kA(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(En(n,t))return;r.uniform3uiv(this.addr,t),bn(n,t)}}function XA(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(En(n,t))return;r.uniform4uiv(this.addr,t),bn(n,t)}}function WA(r,t,n){const a=this.cache,l=n.allocateTextureUnit();a[0]!==l&&(r.uniform1i(this.addr,l),a[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(Ap.compareFunction=n.isReversedDepthBuffer()?Hp:Fp,c=Ap):c=Zx,n.setTexture2D(t||c,l)}function qA(r,t,n){const a=this.cache,l=n.allocateTextureUnit();a[0]!==l&&(r.uniform1i(this.addr,l),a[0]=l),n.setTexture3D(t||Jx,l)}function YA(r,t,n){const a=this.cache,l=n.allocateTextureUnit();a[0]!==l&&(r.uniform1i(this.addr,l),a[0]=l),n.setTextureCube(t||Qx,l)}function ZA(r,t,n){const a=this.cache,l=n.allocateTextureUnit();a[0]!==l&&(r.uniform1i(this.addr,l),a[0]=l),n.setTexture2DArray(t||Kx,l)}function KA(r){switch(r){case 5126:return DA;case 35664:return UA;case 35665:return NA;case 35666:return LA;case 35674:return OA;case 35675:return PA;case 35676:return zA;case 5124:case 35670:return BA;case 35667:case 35671:return IA;case 35668:case 35672:return FA;case 35669:case 35673:return HA;case 5125:return GA;case 36294:return VA;case 36295:return kA;case 36296:return XA;case 35678:case 36198:case 36298:case 36306:case 35682:return WA;case 35679:case 36299:case 36307:return qA;case 35680:case 36300:case 36308:case 36293:return YA;case 36289:case 36303:case 36311:case 36292:return ZA}}function JA(r,t){r.uniform1fv(this.addr,t)}function QA(r,t){const n=oo(t,this.size,2);r.uniform2fv(this.addr,n)}function jA(r,t){const n=oo(t,this.size,3);r.uniform3fv(this.addr,n)}function $A(r,t){const n=oo(t,this.size,4);r.uniform4fv(this.addr,n)}function tR(r,t){const n=oo(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,n)}function eR(r,t){const n=oo(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,n)}function nR(r,t){const n=oo(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,n)}function iR(r,t){r.uniform1iv(this.addr,t)}function aR(r,t){r.uniform2iv(this.addr,t)}function sR(r,t){r.uniform3iv(this.addr,t)}function rR(r,t){r.uniform4iv(this.addr,t)}function oR(r,t){r.uniform1uiv(this.addr,t)}function lR(r,t){r.uniform2uiv(this.addr,t)}function cR(r,t){r.uniform3uiv(this.addr,t)}function uR(r,t){r.uniform4uiv(this.addr,t)}function fR(r,t,n){const a=this.cache,l=t.length,c=Bu(n,l);En(a,c)||(r.uniform1iv(this.addr,c),bn(a,c));let u;this.type===r.SAMPLER_2D_SHADOW?u=Ap:u=Zx;for(let d=0;d!==l;++d)n.setTexture2D(t[d]||u,c[d])}function hR(r,t,n){const a=this.cache,l=t.length,c=Bu(n,l);En(a,c)||(r.uniform1iv(this.addr,c),bn(a,c));for(let u=0;u!==l;++u)n.setTexture3D(t[u]||Jx,c[u])}function dR(r,t,n){const a=this.cache,l=t.length,c=Bu(n,l);En(a,c)||(r.uniform1iv(this.addr,c),bn(a,c));for(let u=0;u!==l;++u)n.setTextureCube(t[u]||Qx,c[u])}function pR(r,t,n){const a=this.cache,l=t.length,c=Bu(n,l);En(a,c)||(r.uniform1iv(this.addr,c),bn(a,c));for(let u=0;u!==l;++u)n.setTexture2DArray(t[u]||Kx,c[u])}function mR(r){switch(r){case 5126:return JA;case 35664:return QA;case 35665:return jA;case 35666:return $A;case 35674:return tR;case 35675:return eR;case 35676:return nR;case 5124:case 35670:return iR;case 35667:case 35671:return aR;case 35668:case 35672:return sR;case 35669:case 35673:return rR;case 5125:return oR;case 36294:return lR;case 36295:return cR;case 36296:return uR;case 35678:case 36198:case 36298:case 36306:case 35682:return fR;case 35679:case 36299:case 36307:return hR;case 35680:case 36300:case 36308:case 36293:return dR;case 36289:case 36303:case 36311:case 36292:return pR}}class gR{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.setValue=KA(n.type)}}class vR{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=mR(n.type)}}class _R{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,a){const l=this.seq;for(let c=0,u=l.length;c!==u;++c){const d=l[c];d.setValue(t,n[d.id],a)}}}const Dd=/(\w+)(\])?(\[|\.)?/g;function Z_(r,t){r.seq.push(t),r.map[t.id]=t}function xR(r,t,n){const a=r.name,l=a.length;for(Dd.lastIndex=0;;){const c=Dd.exec(a),u=Dd.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&u+2===l){Z_(n,p===void 0?new gR(d,r,t):new vR(d,r,t));break}else{let v=n.map[d];v===void 0&&(v=new _R(d),Z_(n,v)),n=v}}}class Mu{constructor(t,n){this.seq=[],this.map={};const a=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let u=0;u<a;++u){const d=t.getActiveUniform(n,u),m=t.getUniformLocation(n,d.name);xR(d,m,this)}const l=[],c=[];for(const u of this.seq)u.type===t.SAMPLER_2D_SHADOW||u.type===t.SAMPLER_CUBE_SHADOW||u.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(u):c.push(u);l.length>0&&(this.seq=l.concat(c))}setValue(t,n,a,l){const c=this.map[n];c!==void 0&&c.setValue(t,a,l)}setOptional(t,n,a){const l=n[a];l!==void 0&&this.setValue(t,a,l)}static upload(t,n,a,l){for(let c=0,u=n.length;c!==u;++c){const d=n[c],m=a[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,n){const a=[];for(let l=0,c=t.length;l!==c;++l){const u=t[l];u.id in n&&a.push(u)}return a}}function K_(r,t,n){const a=r.createShader(t);return r.shaderSource(a,n),r.compileShader(a),a}const SR=37297;let yR=0;function MR(r,t){const n=r.split(`
`),a=[],l=Math.max(t-6,0),c=Math.min(t+6,n.length);for(let u=l;u<c;u++){const d=u+1;a.push(`${d===t?">":" "} ${d}: ${n[u]}`)}return a.join(`
`)}const J_=new ve;function ER(r){Ne._getMatrix(J_,Ne.workingColorSpace,r);const t=`mat3( ${J_.elements.map(n=>n.toFixed(4))} )`;switch(Ne.getTransfer(r)){case Au:return[t,"LinearTransferOETF"];case We:return[t,"sRGBTransferOETF"];default:return de("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Q_(r,t,n){const a=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(a&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const d=parseInt(u[1]);return n.toUpperCase()+`

`+c+`

`+MR(r.getShaderSource(t),d)}else return c}function bR(r,t){const n=ER(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const TR={[lx]:"Linear",[cx]:"Reinhard",[ux]:"Cineon",[Np]:"ACESFilmic",[hx]:"AgX",[dx]:"Neutral",[fx]:"Custom"};function AR(r,t){const n=TR[t];return n===void 0?(de("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const mu=new k;function RR(){Ne.getLuminanceCoefficients(mu);const r=mu.x.toFixed(4),t=mu.y.toFixed(4),n=mu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function wR(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hl).join(`
`)}function CR(r){const t=[];for(const n in r){const a=r[n];a!==!1&&t.push("#define "+n+" "+a)}return t.join(`
`)}function DR(r,t){const n={},a=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<a;l++){const c=r.getActiveAttrib(t,l),u=c.name;let d=1;c.type===r.FLOAT_MAT2&&(d=2),c.type===r.FLOAT_MAT3&&(d=3),c.type===r.FLOAT_MAT4&&(d=4),n[u]={type:c.type,location:r.getAttribLocation(t,u),locationSize:d}}return n}function hl(r){return r!==""}function j_(r,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function $_(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const UR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rp(r){return r.replace(UR,LR)}const NR=new Map;function LR(r,t){let n=Ee[t];if(n===void 0){const a=NR.get(t);if(a!==void 0)n=Ee[a],de('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,a);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Rp(n)}const OR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tx(r){return r.replace(OR,PR)}function PR(r,t,n,a){let l="";for(let c=parseInt(t);c<parseInt(n);c++)l+=a.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function ex(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const zR={[vu]:"SHADOWMAP_TYPE_PCF",[ul]:"SHADOWMAP_TYPE_VSM"};function BR(r){return zR[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const IR={[Js]:"ENVMAP_TYPE_CUBE",[eo]:"ENVMAP_TYPE_CUBE",[Lu]:"ENVMAP_TYPE_CUBE_UV"};function FR(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":IR[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const HR={[eo]:"ENVMAP_MODE_REFRACTION"};function GR(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":HR[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const VR={[ox]:"ENVMAP_BLENDING_MULTIPLY",[LM]:"ENVMAP_BLENDING_MIX",[OM]:"ENVMAP_BLENDING_ADD"};function kR(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":VR[r.combine]||"ENVMAP_BLENDING_NONE"}function XR(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,a=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function WR(r,t,n,a){const l=r.getContext(),c=n.defines;let u=n.vertexShader,d=n.fragmentShader;const m=BR(n),p=FR(n),_=GR(n),v=kR(n),g=XR(n),x=wR(n),E=CR(c),R=l.createProgram();let M,S,B=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(M=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(hl).join(`
`),M.length>0&&(M+=`
`),S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(hl).join(`
`),S.length>0&&(S+=`
`)):(M=[ex(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hl).join(`
`),S=[ex(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+_:"",n.envMap?"#define "+v:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ta?"#define TONE_MAPPING":"",n.toneMapping!==ta?Ee.tonemapping_pars_fragment:"",n.toneMapping!==ta?AR("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ee.colorspace_pars_fragment,bR("linearToOutputTexel",n.outputColorSpace),RR(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(hl).join(`
`)),u=Rp(u),u=j_(u,n),u=$_(u,n),d=Rp(d),d=j_(d,n),d=$_(d,n),u=tx(u),d=tx(d),n.isRawShaderMaterial!==!0&&(B=`#version 300 es
`,M=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,S=["#define varying in",n.glslVersion===$v?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===$v?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const N=B+M+u,A=B+S+d,z=K_(l,l.VERTEX_SHADER,N),O=K_(l,l.FRAGMENT_SHADER,A);l.attachShader(R,z),l.attachShader(R,O),n.index0AttributeName!==void 0?l.bindAttribLocation(R,0,n.index0AttributeName):n.hasPositionAttribute===!0&&l.bindAttribLocation(R,0,"position"),l.linkProgram(R);function D(G){if(r.debug.checkShaderErrors){const Z=l.getProgramInfoLog(R)||"",et=l.getShaderInfoLog(z)||"",ft=l.getShaderInfoLog(O)||"",Y=Z.trim(),I=et.trim(),F=ft.trim();let tt=!0,pt=!0;if(l.getProgramParameter(R,l.LINK_STATUS)===!1)if(tt=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,R,z,O);else{const St=Q_(l,z,"vertex"),P=Q_(l,O,"fragment");Le("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(R,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+Y+`
`+St+`
`+P)}else Y!==""?de("WebGLProgram: Program Info Log:",Y):(I===""||F==="")&&(pt=!1);pt&&(G.diagnostics={runnable:tt,programLog:Y,vertexShader:{log:I,prefix:M},fragmentShader:{log:F,prefix:S}})}l.deleteShader(z),l.deleteShader(O),T=new Mu(l,R),U=DR(l,R)}let T;this.getUniforms=function(){return T===void 0&&D(this),T};let U;this.getAttributes=function(){return U===void 0&&D(this),U};let V=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=l.getProgramParameter(R,SR)),V},this.destroy=function(){a.releaseStatesOfProgram(this),l.deleteProgram(R),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=yR++,this.cacheKey=t,this.usedTimes=1,this.program=R,this.vertexShader=z,this.fragmentShader=O,this}let qR=0;class YR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,n,a){const l=this._getShaderCacheForMaterial(t);return l.has(n)===!1&&(l.add(n),n.usedTimes++),l.has(a)===!1&&(l.add(a),a.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let a=n.get(t);return a===void 0&&(a=new Set,n.set(t,a)),a}_getShaderStage(t){const n=this.shaderCache;let a=n.get(t);return a===void 0&&(a=new ZR(t),n.set(t,a)),a}}class ZR{constructor(t){this.id=qR++,this.code=t,this.usedTimes=0}}function KR(r){return r===Qs||r===Eu||r===bu}function JR(r,t,n,a,l,c){const u=new bx,d=new YR,m=new Set,p=[],_=new Map,v=a.logarithmicDepthBuffer;let g=a.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(T){return m.add(T),T===0?"uv":`uv${T}`}function R(T,U,V,G,Z,et){const ft=G.fog,Y=Z.geometry,I=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?G.environment:null,F=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,tt=t.get(T.envMap||I,F),pt=tt&&tt.mapping===Lu?tt.image.height:null,St=x[T.type];T.precision!==null&&(g=a.getMaxPrecision(T.precision),g!==T.precision&&de("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const P=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Q=P!==void 0?P.length:0;let xt=0;Y.morphAttributes.position!==void 0&&(xt=1),Y.morphAttributes.normal!==void 0&&(xt=2),Y.morphAttributes.color!==void 0&&(xt=3);let Dt,At,K,vt;if(St){const Zt=Ji[St];Dt=Zt.vertexShader,At=Zt.fragmentShader}else{Dt=T.vertexShader,At=T.fragmentShader;const Zt=d.getVertexShaderStage(T),tn=d.getFragmentShaderStage(T);d.update(T,Zt,tn),K=Zt.id,vt=tn.id}const yt=r.getRenderTarget(),Pt=r.state.buffers.depth.getReversed(),ie=Z.isInstancedMesh===!0,$t=Z.isBatchedMesh===!0,be=!!T.map,oe=!!T.matcap,Mt=!!tt,wt=!!T.aoMap,Rt=!!T.lightMap,Ht=!!T.bumpMap&&T.wireframe===!1,Bt=!!T.normalMap,re=!!T.displacementMap,Jt=!!T.emissiveMap,ue=!!T.metalnessMap,fe=!!T.roughnessMap,X=T.anisotropy>0,me=T.clearcoat>0,_e=T.dispersion>0,L=T.iridescence>0,b=T.sheen>0,j=T.transmission>0,nt=X&&!!T.anisotropyMap,dt=me&&!!T.clearcoatMap,Ut=me&&!!T.clearcoatNormalMap,Ot=me&&!!T.clearcoatRoughnessMap,ht=L&&!!T.iridescenceMap,ct=L&&!!T.iridescenceThicknessMap,Lt=b&&!!T.sheenColorMap,Wt=b&&!!T.sheenRoughnessMap,Gt=!!T.specularMap,zt=!!T.specularColorMap,te=!!T.specularIntensityMap,ae=j&&!!T.transmissionMap,pe=j&&!!T.thicknessMap,q=!!T.gradientMap,Nt=!!T.alphaMap,gt=T.alphaTest>0,Ct=!!T.alphaHash,Xt=!!T.extensions;let Tt=ta;T.toneMapped&&(yt===null||yt.isXRRenderTarget===!0)&&(Tt=r.toneMapping);const ee={shaderID:St,shaderType:T.type,shaderName:T.name,vertexShader:Dt,fragmentShader:At,defines:T.defines,customVertexShaderID:K,customFragmentShaderID:vt,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:$t,batchingColor:$t&&Z._colorsTexture!==null,instancing:ie,instancingColor:ie&&Z.instanceColor!==null,instancingMorph:ie&&Z.morphTexture!==null,outputColorSpace:yt===null?r.outputColorSpace:yt.isXRRenderTarget===!0?yt.texture.colorSpace:Ne.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:be,matcap:oe,envMap:Mt,envMapMode:Mt&&tt.mapping,envMapCubeUVHeight:pt,aoMap:wt,lightMap:Rt,bumpMap:Ht,normalMap:Bt,displacementMap:re,emissiveMap:Jt,normalMapObjectSpace:Bt&&T.normalMapType===BM,normalMapTangentSpace:Bt&&T.normalMapType===yp,packedNormalMap:Bt&&T.normalMapType===yp&&KR(T.normalMap.format),metalnessMap:ue,roughnessMap:fe,anisotropy:X,anisotropyMap:nt,clearcoat:me,clearcoatMap:dt,clearcoatNormalMap:Ut,clearcoatRoughnessMap:Ot,dispersion:_e,iridescence:L,iridescenceMap:ht,iridescenceThicknessMap:ct,sheen:b,sheenColorMap:Lt,sheenRoughnessMap:Wt,specularMap:Gt,specularColorMap:zt,specularIntensityMap:te,transmission:j,transmissionMap:ae,thicknessMap:pe,gradientMap:q,opaque:T.transparent===!1&&T.blending===Jr&&T.alphaToCoverage===!1,alphaMap:Nt,alphaTest:gt,alphaHash:Ct,combine:T.combine,mapUv:be&&E(T.map.channel),aoMapUv:wt&&E(T.aoMap.channel),lightMapUv:Rt&&E(T.lightMap.channel),bumpMapUv:Ht&&E(T.bumpMap.channel),normalMapUv:Bt&&E(T.normalMap.channel),displacementMapUv:re&&E(T.displacementMap.channel),emissiveMapUv:Jt&&E(T.emissiveMap.channel),metalnessMapUv:ue&&E(T.metalnessMap.channel),roughnessMapUv:fe&&E(T.roughnessMap.channel),anisotropyMapUv:nt&&E(T.anisotropyMap.channel),clearcoatMapUv:dt&&E(T.clearcoatMap.channel),clearcoatNormalMapUv:Ut&&E(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ot&&E(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ht&&E(T.iridescenceMap.channel),iridescenceThicknessMapUv:ct&&E(T.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&E(T.sheenColorMap.channel),sheenRoughnessMapUv:Wt&&E(T.sheenRoughnessMap.channel),specularMapUv:Gt&&E(T.specularMap.channel),specularColorMapUv:zt&&E(T.specularColorMap.channel),specularIntensityMapUv:te&&E(T.specularIntensityMap.channel),transmissionMapUv:ae&&E(T.transmissionMap.channel),thicknessMapUv:pe&&E(T.thicknessMap.channel),alphaMapUv:Nt&&E(T.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Bt||X),vertexNormals:!!Y.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!Y.attributes.uv&&(be||Nt),fog:!!ft,useFog:T.fog===!0,fogExp2:!!ft&&ft.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||Y.attributes.normal===void 0&&Bt===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Pt,skinning:Z.isSkinnedMesh===!0,hasPositionAttribute:Y.attributes.position!==void 0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:xt,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numLightProbeGrids:et.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&V.length>0,shadowMapType:r.shadowMap.type,toneMapping:Tt,decodeVideoTexture:be&&T.map.isVideoTexture===!0&&Ne.getTransfer(T.map.colorSpace)===We,decodeVideoTextureEmissive:Jt&&T.emissiveMap.isVideoTexture===!0&&Ne.getTransfer(T.emissiveMap.colorSpace)===We,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Ca,flipSided:T.side===ei,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Xt&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xt&&T.extensions.multiDraw===!0||$t)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return ee.vertexUv1s=m.has(1),ee.vertexUv2s=m.has(2),ee.vertexUv3s=m.has(3),m.clear(),ee}function M(T){const U=[];if(T.shaderID?U.push(T.shaderID):(U.push(T.customVertexShaderID),U.push(T.customFragmentShaderID)),T.defines!==void 0)for(const V in T.defines)U.push(V),U.push(T.defines[V]);return T.isRawShaderMaterial===!1&&(S(U,T),B(U,T),U.push(r.outputColorSpace)),U.push(T.customProgramCacheKey),U.join()}function S(T,U){T.push(U.precision),T.push(U.outputColorSpace),T.push(U.envMapMode),T.push(U.envMapCubeUVHeight),T.push(U.mapUv),T.push(U.alphaMapUv),T.push(U.lightMapUv),T.push(U.aoMapUv),T.push(U.bumpMapUv),T.push(U.normalMapUv),T.push(U.displacementMapUv),T.push(U.emissiveMapUv),T.push(U.metalnessMapUv),T.push(U.roughnessMapUv),T.push(U.anisotropyMapUv),T.push(U.clearcoatMapUv),T.push(U.clearcoatNormalMapUv),T.push(U.clearcoatRoughnessMapUv),T.push(U.iridescenceMapUv),T.push(U.iridescenceThicknessMapUv),T.push(U.sheenColorMapUv),T.push(U.sheenRoughnessMapUv),T.push(U.specularMapUv),T.push(U.specularColorMapUv),T.push(U.specularIntensityMapUv),T.push(U.transmissionMapUv),T.push(U.thicknessMapUv),T.push(U.combine),T.push(U.fogExp2),T.push(U.sizeAttenuation),T.push(U.morphTargetsCount),T.push(U.morphAttributeCount),T.push(U.numDirLights),T.push(U.numPointLights),T.push(U.numSpotLights),T.push(U.numSpotLightMaps),T.push(U.numHemiLights),T.push(U.numRectAreaLights),T.push(U.numDirLightShadows),T.push(U.numPointLightShadows),T.push(U.numSpotLightShadows),T.push(U.numSpotLightShadowsWithMaps),T.push(U.numLightProbes),T.push(U.shadowMapType),T.push(U.toneMapping),T.push(U.numClippingPlanes),T.push(U.numClipIntersection),T.push(U.depthPacking)}function B(T,U){u.disableAll(),U.instancing&&u.enable(0),U.instancingColor&&u.enable(1),U.instancingMorph&&u.enable(2),U.matcap&&u.enable(3),U.envMap&&u.enable(4),U.normalMapObjectSpace&&u.enable(5),U.normalMapTangentSpace&&u.enable(6),U.clearcoat&&u.enable(7),U.iridescence&&u.enable(8),U.alphaTest&&u.enable(9),U.vertexColors&&u.enable(10),U.vertexAlphas&&u.enable(11),U.vertexUv1s&&u.enable(12),U.vertexUv2s&&u.enable(13),U.vertexUv3s&&u.enable(14),U.vertexTangents&&u.enable(15),U.anisotropy&&u.enable(16),U.alphaHash&&u.enable(17),U.batching&&u.enable(18),U.dispersion&&u.enable(19),U.batchingColor&&u.enable(20),U.gradientMap&&u.enable(21),U.packedNormalMap&&u.enable(22),U.vertexNormals&&u.enable(23),T.push(u.mask),u.disableAll(),U.fog&&u.enable(0),U.useFog&&u.enable(1),U.flatShading&&u.enable(2),U.logarithmicDepthBuffer&&u.enable(3),U.reversedDepthBuffer&&u.enable(4),U.skinning&&u.enable(5),U.morphTargets&&u.enable(6),U.morphNormals&&u.enable(7),U.morphColors&&u.enable(8),U.premultipliedAlpha&&u.enable(9),U.shadowMapEnabled&&u.enable(10),U.doubleSided&&u.enable(11),U.flipSided&&u.enable(12),U.useDepthPacking&&u.enable(13),U.dithering&&u.enable(14),U.transmission&&u.enable(15),U.sheen&&u.enable(16),U.opaque&&u.enable(17),U.pointsUvs&&u.enable(18),U.decodeVideoTexture&&u.enable(19),U.decodeVideoTextureEmissive&&u.enable(20),U.alphaToCoverage&&u.enable(21),U.numLightProbeGrids>0&&u.enable(22),U.hasPositionAttribute&&u.enable(23),T.push(u.mask)}function N(T){const U=x[T.type];let V;if(U){const G=Ji[U];V=gb.clone(G.uniforms)}else V=T.uniforms;return V}function A(T,U){let V=_.get(U);return V!==void 0?++V.usedTimes:(V=new WR(r,U,T,l),p.push(V),_.set(U,V)),V}function z(T){if(--T.usedTimes===0){const U=p.indexOf(T);p[U]=p[p.length-1],p.pop(),_.delete(T.cacheKey),T.destroy()}}function O(T){d.remove(T)}function D(){d.dispose()}return{getParameters:R,getProgramCacheKey:M,getUniforms:N,acquireProgram:A,releaseProgram:z,releaseShaderCache:O,programs:p,dispose:D}}function QR(){let r=new WeakMap;function t(u){return r.has(u)}function n(u){let d=r.get(u);return d===void 0&&(d={},r.set(u,d)),d}function a(u){r.delete(u)}function l(u,d,m){r.get(u)[d]=m}function c(){r=new WeakMap}return{has:t,get:n,remove:a,update:l,dispose:c}}function jR(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function nx(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function ix(){const r=[];let t=0;const n=[],a=[],l=[];function c(){t=0,n.length=0,a.length=0,l.length=0}function u(g){let x=0;return g.isInstancedMesh&&(x+=2),g.isSkinnedMesh&&(x+=1),x}function d(g,x,E,R,M,S){let B=r[t];return B===void 0?(B={id:g.id,object:g,geometry:x,material:E,materialVariant:u(g),groupOrder:R,renderOrder:g.renderOrder,z:M,group:S},r[t]=B):(B.id=g.id,B.object=g,B.geometry=x,B.material=E,B.materialVariant=u(g),B.groupOrder=R,B.renderOrder=g.renderOrder,B.z=M,B.group=S),t++,B}function m(g,x,E,R,M,S){const B=d(g,x,E,R,M,S);E.transmission>0?a.push(B):E.transparent===!0?l.push(B):n.push(B)}function p(g,x,E,R,M,S){const B=d(g,x,E,R,M,S);E.transmission>0?a.unshift(B):E.transparent===!0?l.unshift(B):n.unshift(B)}function _(g,x,E){n.length>1&&n.sort(g||jR),a.length>1&&a.sort(x||nx),l.length>1&&l.sort(x||nx),E&&(n.reverse(),a.reverse(),l.reverse())}function v(){for(let g=t,x=r.length;g<x;g++){const E=r[g];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:n,transmissive:a,transparent:l,init:c,push:m,unshift:p,finish:v,sort:_}}function $R(){let r=new WeakMap;function t(a,l){const c=r.get(a);let u;return c===void 0?(u=new ix,r.set(a,[u])):l>=c.length?(u=new ix,c.push(u)):u=c[l],u}function n(){r=new WeakMap}return{get:t,dispose:n}}function t2(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new k,color:new Me};break;case"SpotLight":n={position:new k,direction:new k,color:new Me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new k,color:new Me,distance:0,decay:0};break;case"HemisphereLight":n={direction:new k,skyColor:new Me,groundColor:new Me};break;case"RectAreaLight":n={color:new Me,position:new k,halfWidth:new k,halfHeight:new k};break}return r[t.id]=n,n}}}function e2(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=n,n}}}let n2=0;function i2(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function a2(r){const t=new t2,n=e2(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)a.probe.push(new k);const l=new k,c=new $e,u=new $e;function d(p){let _=0,v=0,g=0;for(let U=0;U<9;U++)a.probe[U].set(0,0,0);let x=0,E=0,R=0,M=0,S=0,B=0,N=0,A=0,z=0,O=0,D=0;p.sort(i2);for(let U=0,V=p.length;U<V;U++){const G=p[U],Z=G.color,et=G.intensity,ft=G.distance;let Y=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===Qs?Y=G.shadow.map.texture:Y=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)_+=Z.r*et,v+=Z.g*et,g+=Z.b*et;else if(G.isLightProbe){for(let I=0;I<9;I++)a.probe[I].addScaledVector(G.sh.coefficients[I],et);D++}else if(G.isDirectionalLight){const I=t.get(G);if(I.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const F=G.shadow,tt=n.get(G);tt.shadowIntensity=F.intensity,tt.shadowBias=F.bias,tt.shadowNormalBias=F.normalBias,tt.shadowRadius=F.radius,tt.shadowMapSize=F.mapSize,a.directionalShadow[x]=tt,a.directionalShadowMap[x]=Y,a.directionalShadowMatrix[x]=G.shadow.matrix,B++}a.directional[x]=I,x++}else if(G.isSpotLight){const I=t.get(G);I.position.setFromMatrixPosition(G.matrixWorld),I.color.copy(Z).multiplyScalar(et),I.distance=ft,I.coneCos=Math.cos(G.angle),I.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),I.decay=G.decay,a.spot[R]=I;const F=G.shadow;if(G.map&&(a.spotLightMap[z]=G.map,z++,F.updateMatrices(G),G.castShadow&&O++),a.spotLightMatrix[R]=F.matrix,G.castShadow){const tt=n.get(G);tt.shadowIntensity=F.intensity,tt.shadowBias=F.bias,tt.shadowNormalBias=F.normalBias,tt.shadowRadius=F.radius,tt.shadowMapSize=F.mapSize,a.spotShadow[R]=tt,a.spotShadowMap[R]=Y,A++}R++}else if(G.isRectAreaLight){const I=t.get(G);I.color.copy(Z).multiplyScalar(et),I.halfWidth.set(G.width*.5,0,0),I.halfHeight.set(0,G.height*.5,0),a.rectArea[M]=I,M++}else if(G.isPointLight){const I=t.get(G);if(I.color.copy(G.color).multiplyScalar(G.intensity),I.distance=G.distance,I.decay=G.decay,G.castShadow){const F=G.shadow,tt=n.get(G);tt.shadowIntensity=F.intensity,tt.shadowBias=F.bias,tt.shadowNormalBias=F.normalBias,tt.shadowRadius=F.radius,tt.shadowMapSize=F.mapSize,tt.shadowCameraNear=F.camera.near,tt.shadowCameraFar=F.camera.far,a.pointShadow[E]=tt,a.pointShadowMap[E]=Y,a.pointShadowMatrix[E]=G.shadow.matrix,N++}a.point[E]=I,E++}else if(G.isHemisphereLight){const I=t.get(G);I.skyColor.copy(G.color).multiplyScalar(et),I.groundColor.copy(G.groundColor).multiplyScalar(et),a.hemi[S]=I,S++}}M>0&&(r.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=kt.LTC_FLOAT_1,a.rectAreaLTC2=kt.LTC_FLOAT_2):(a.rectAreaLTC1=kt.LTC_HALF_1,a.rectAreaLTC2=kt.LTC_HALF_2)),a.ambient[0]=_,a.ambient[1]=v,a.ambient[2]=g;const T=a.hash;(T.directionalLength!==x||T.pointLength!==E||T.spotLength!==R||T.rectAreaLength!==M||T.hemiLength!==S||T.numDirectionalShadows!==B||T.numPointShadows!==N||T.numSpotShadows!==A||T.numSpotMaps!==z||T.numLightProbes!==D)&&(a.directional.length=x,a.spot.length=R,a.rectArea.length=M,a.point.length=E,a.hemi.length=S,a.directionalShadow.length=B,a.directionalShadowMap.length=B,a.pointShadow.length=N,a.pointShadowMap.length=N,a.spotShadow.length=A,a.spotShadowMap.length=A,a.directionalShadowMatrix.length=B,a.pointShadowMatrix.length=N,a.spotLightMatrix.length=A+z-O,a.spotLightMap.length=z,a.numSpotLightShadowsWithMaps=O,a.numLightProbes=D,T.directionalLength=x,T.pointLength=E,T.spotLength=R,T.rectAreaLength=M,T.hemiLength=S,T.numDirectionalShadows=B,T.numPointShadows=N,T.numSpotShadows=A,T.numSpotMaps=z,T.numLightProbes=D,a.version=n2++)}function m(p,_){let v=0,g=0,x=0,E=0,R=0;const M=_.matrixWorldInverse;for(let S=0,B=p.length;S<B;S++){const N=p[S];if(N.isDirectionalLight){const A=a.directional[v];A.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),A.direction.sub(l),A.direction.transformDirection(M),v++}else if(N.isSpotLight){const A=a.spot[x];A.position.setFromMatrixPosition(N.matrixWorld),A.position.applyMatrix4(M),A.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),A.direction.sub(l),A.direction.transformDirection(M),x++}else if(N.isRectAreaLight){const A=a.rectArea[E];A.position.setFromMatrixPosition(N.matrixWorld),A.position.applyMatrix4(M),u.identity(),c.copy(N.matrixWorld),c.premultiply(M),u.extractRotation(c),A.halfWidth.set(N.width*.5,0,0),A.halfHeight.set(0,N.height*.5,0),A.halfWidth.applyMatrix4(u),A.halfHeight.applyMatrix4(u),E++}else if(N.isPointLight){const A=a.point[g];A.position.setFromMatrixPosition(N.matrixWorld),A.position.applyMatrix4(M),g++}else if(N.isHemisphereLight){const A=a.hemi[R];A.direction.setFromMatrixPosition(N.matrixWorld),A.direction.transformDirection(M),R++}}}return{setup:d,setupView:m,state:a}}function ax(r){const t=new a2(r),n=[],a=[],l=[];function c(g){v.camera=g,n.length=0,a.length=0,l.length=0}function u(g){n.push(g)}function d(g){a.push(g)}function m(g){l.push(g)}function p(){t.setup(n)}function _(g){t.setupView(n,g)}const v={lightsArray:n,shadowsArray:a,lightProbeGridArray:l,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:v,setupLights:p,setupLightsView:_,pushLight:u,pushShadow:d,pushLightProbeGrid:m}}function s2(r){let t=new WeakMap;function n(l,c=0){const u=t.get(l);let d;return u===void 0?(d=new ax(r),t.set(l,[d])):c>=u.length?(d=new ax(r),u.push(d)):d=u[c],d}function a(){t=new WeakMap}return{get:n,dispose:a}}const r2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,o2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,l2=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],c2=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],sx=new $e,ol=new k,Ud=new k;function u2(r,t,n){let a=new Wp;const l=new Ft,c=new Ft,u=new rn,d=new Sb,m=new yb,p={},_=n.maxTextureSize,v={[_s]:ei,[ei]:_s,[Ca]:Ca},g=new Hi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ft},radius:{value:4}},vertexShader:r2,fragmentShader:o2}),x=g.clone();x.defines.HORIZONTAL_PASS=1;const E=new Rn;E.setAttribute("position",new Fi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new On(E,g),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vu;let S=this.type;this.render=function(O,D,T){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||O.length===0)return;this.type===rx&&(de("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=vu);const U=r.getRenderTarget(),V=r.getActiveCubeFace(),G=r.getActiveMipmapLevel(),Z=r.state;Z.setBlending(Ua),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const et=S!==this.type;et&&D.traverse(function(ft){ft.material&&(Array.isArray(ft.material)?ft.material.forEach(Y=>Y.needsUpdate=!0):ft.material.needsUpdate=!0)});for(let ft=0,Y=O.length;ft<Y;ft++){const I=O[ft],F=I.shadow;if(F===void 0){de("WebGLShadowMap:",I,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;l.copy(F.mapSize);const tt=F.getFrameExtents();l.multiply(tt),c.copy(F.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/tt.x),l.x=c.x*tt.x,F.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/tt.y),l.y=c.y*tt.y,F.mapSize.y=c.y));const pt=r.state.buffers.depth.getReversed();if(F.camera._reversedDepth=pt,F.map===null||et===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===ul){if(I.isPointLight){de("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new ea(l.x,l.y,{format:Qs,type:La,minFilter:Fn,magFilter:Fn,generateMipmaps:!1}),F.map.texture.name=I.name+".shadowMap",F.map.depthTexture=new no(l.x,l.y,Qi),F.map.depthTexture.name=I.name+".shadowMapDepth",F.map.depthTexture.format=Oa,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Ln,F.map.depthTexture.magFilter=Ln}else I.isPointLight?(F.map=new Yx(l.x),F.map.depthTexture=new PE(l.x,ia)):(F.map=new ea(l.x,l.y),F.map.depthTexture=new no(l.x,l.y,ia)),F.map.depthTexture.name=I.name+".shadowMap",F.map.depthTexture.format=Oa,this.type===vu?(F.map.depthTexture.compareFunction=pt?Hp:Fp,F.map.depthTexture.minFilter=Fn,F.map.depthTexture.magFilter=Fn):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Ln,F.map.depthTexture.magFilter=Ln);F.camera.updateProjectionMatrix()}const St=F.map.isWebGLCubeRenderTarget?6:1;for(let P=0;P<St;P++){if(F.map.isWebGLCubeRenderTarget)r.setRenderTarget(F.map,P),r.clear();else{P===0&&(r.setRenderTarget(F.map),r.clear());const Q=F.getViewport(P);u.set(c.x*Q.x,c.y*Q.y,c.x*Q.z,c.y*Q.w),Z.viewport(u)}if(I.isPointLight){const Q=F.camera,xt=F.matrix,Dt=I.distance||Q.far;Dt!==Q.far&&(Q.far=Dt,Q.updateProjectionMatrix()),ol.setFromMatrixPosition(I.matrixWorld),Q.position.copy(ol),Ud.copy(Q.position),Ud.add(l2[P]),Q.up.copy(c2[P]),Q.lookAt(Ud),Q.updateMatrixWorld(),xt.makeTranslation(-ol.x,-ol.y,-ol.z),sx.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),F._frustum.setFromProjectionMatrix(sx,Q.coordinateSystem,Q.reversedDepth)}else F.updateMatrices(I);a=F.getFrustum(),A(D,T,F.camera,I,this.type)}F.isPointLightShadow!==!0&&this.type===ul&&B(F,T),F.needsUpdate=!1}S=this.type,M.needsUpdate=!1,r.setRenderTarget(U,V,G)};function B(O,D){const T=t.update(R);g.defines.VSM_SAMPLES!==O.blurSamples&&(g.defines.VSM_SAMPLES=O.blurSamples,x.defines.VSM_SAMPLES=O.blurSamples,g.needsUpdate=!0,x.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new ea(l.x,l.y,{format:Qs,type:La})),g.uniforms.shadow_pass.value=O.map.depthTexture,g.uniforms.resolution.value=O.mapSize,g.uniforms.radius.value=O.radius,r.setRenderTarget(O.mapPass),r.clear(),r.renderBufferDirect(D,null,T,g,R,null),x.uniforms.shadow_pass.value=O.mapPass.texture,x.uniforms.resolution.value=O.mapSize,x.uniforms.radius.value=O.radius,r.setRenderTarget(O.map),r.clear(),r.renderBufferDirect(D,null,T,x,R,null)}function N(O,D,T,U){let V=null;const G=T.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(G!==void 0)V=G;else if(V=T.isPointLight===!0?m:d,r.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){const Z=V.uuid,et=D.uuid;let ft=p[Z];ft===void 0&&(ft={},p[Z]=ft);let Y=ft[et];Y===void 0&&(Y=V.clone(),ft[et]=Y,D.addEventListener("dispose",z)),V=Y}if(V.visible=D.visible,V.wireframe=D.wireframe,U===ul?V.side=D.shadowSide!==null?D.shadowSide:D.side:V.side=D.shadowSide!==null?D.shadowSide:v[D.side],V.alphaMap=D.alphaMap,V.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,V.map=D.map,V.clipShadows=D.clipShadows,V.clippingPlanes=D.clippingPlanes,V.clipIntersection=D.clipIntersection,V.displacementMap=D.displacementMap,V.displacementScale=D.displacementScale,V.displacementBias=D.displacementBias,V.wireframeLinewidth=D.wireframeLinewidth,V.linewidth=D.linewidth,T.isPointLight===!0&&V.isMeshDistanceMaterial===!0){const Z=r.properties.get(V);Z.light=T}return V}function A(O,D,T,U,V){if(O.visible===!1)return;if(O.layers.test(D.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&V===ul)&&(!O.frustumCulled||a.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,O.matrixWorld);const et=t.update(O),ft=O.material;if(Array.isArray(ft)){const Y=et.groups;for(let I=0,F=Y.length;I<F;I++){const tt=Y[I],pt=ft[tt.materialIndex];if(pt&&pt.visible){const St=N(O,pt,U,V);O.onBeforeShadow(r,O,D,T,et,St,tt),r.renderBufferDirect(T,null,et,St,O,tt),O.onAfterShadow(r,O,D,T,et,St,tt)}}}else if(ft.visible){const Y=N(O,ft,U,V);O.onBeforeShadow(r,O,D,T,et,Y,null),r.renderBufferDirect(T,null,et,Y,O,null),O.onAfterShadow(r,O,D,T,et,Y,null)}}const Z=O.children;for(let et=0,ft=Z.length;et<ft;et++)A(Z[et],D,T,U,V)}function z(O){O.target.removeEventListener("dispose",z);for(const T in p){const U=p[T],V=O.target.uuid;V in U&&(U[V].dispose(),delete U[V])}}}function f2(r,t){function n(){let q=!1;const Nt=new rn;let gt=null;const Ct=new rn(0,0,0,0);return{setMask:function(Xt){gt!==Xt&&!q&&(r.colorMask(Xt,Xt,Xt,Xt),gt=Xt)},setLocked:function(Xt){q=Xt},setClear:function(Xt,Tt,ee,Zt,tn){tn===!0&&(Xt*=Zt,Tt*=Zt,ee*=Zt),Nt.set(Xt,Tt,ee,Zt),Ct.equals(Nt)===!1&&(r.clearColor(Xt,Tt,ee,Zt),Ct.copy(Nt))},reset:function(){q=!1,gt=null,Ct.set(-1,0,0,0)}}}function a(){let q=!1,Nt=!1,gt=null,Ct=null,Xt=null;return{setReversed:function(Tt){if(Nt!==Tt){const ee=t.get("EXT_clip_control");Tt?ee.clipControlEXT(ee.LOWER_LEFT_EXT,ee.ZERO_TO_ONE_EXT):ee.clipControlEXT(ee.LOWER_LEFT_EXT,ee.NEGATIVE_ONE_TO_ONE_EXT),Nt=Tt;const Zt=Xt;Xt=null,this.setClear(Zt)}},getReversed:function(){return Nt},setTest:function(Tt){Tt?yt(r.DEPTH_TEST):Pt(r.DEPTH_TEST)},setMask:function(Tt){gt!==Tt&&!q&&(r.depthMask(Tt),gt=Tt)},setFunc:function(Tt){if(Nt&&(Tt=YM[Tt]),Ct!==Tt){switch(Tt){case zd:r.depthFunc(r.NEVER);break;case Bd:r.depthFunc(r.ALWAYS);break;case Id:r.depthFunc(r.LESS);break;case to:r.depthFunc(r.LEQUAL);break;case Fd:r.depthFunc(r.EQUAL);break;case Hd:r.depthFunc(r.GEQUAL);break;case Gd:r.depthFunc(r.GREATER);break;case Vd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ct=Tt}},setLocked:function(Tt){q=Tt},setClear:function(Tt){Xt!==Tt&&(Xt=Tt,Nt&&(Tt=1-Tt),r.clearDepth(Tt))},reset:function(){q=!1,gt=null,Ct=null,Xt=null,Nt=!1}}}function l(){let q=!1,Nt=null,gt=null,Ct=null,Xt=null,Tt=null,ee=null,Zt=null,tn=null;return{setTest:function(Fe){q||(Fe?yt(r.STENCIL_TEST):Pt(r.STENCIL_TEST))},setMask:function(Fe){Nt!==Fe&&!q&&(r.stencilMask(Fe),Nt=Fe)},setFunc:function(Fe,ni,ii){(gt!==Fe||Ct!==ni||Xt!==ii)&&(r.stencilFunc(Fe,ni,ii),gt=Fe,Ct=ni,Xt=ii)},setOp:function(Fe,ni,ii){(Tt!==Fe||ee!==ni||Zt!==ii)&&(r.stencilOp(Fe,ni,ii),Tt=Fe,ee=ni,Zt=ii)},setLocked:function(Fe){q=Fe},setClear:function(Fe){tn!==Fe&&(r.clearStencil(Fe),tn=Fe)},reset:function(){q=!1,Nt=null,gt=null,Ct=null,Xt=null,Tt=null,ee=null,Zt=null,tn=null}}}const c=new n,u=new a,d=new l,m=new WeakMap,p=new WeakMap;let _={},v={},g={},x=new WeakMap,E=[],R=null,M=!1,S=null,B=null,N=null,A=null,z=null,O=null,D=null,T=new Me(0,0,0),U=0,V=!1,G=null,Z=null,et=null,ft=null,Y=null;const I=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,tt=0;const pt=r.getParameter(r.VERSION);pt.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(pt)[1]),F=tt>=1):pt.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(pt)[1]),F=tt>=2);let St=null,P={};const Q=r.getParameter(r.SCISSOR_BOX),xt=r.getParameter(r.VIEWPORT),Dt=new rn().fromArray(Q),At=new rn().fromArray(xt);function K(q,Nt,gt,Ct){const Xt=new Uint8Array(4),Tt=r.createTexture();r.bindTexture(q,Tt),r.texParameteri(q,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(q,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ee=0;ee<gt;ee++)q===r.TEXTURE_3D||q===r.TEXTURE_2D_ARRAY?r.texImage3D(Nt,0,r.RGBA,1,1,Ct,0,r.RGBA,r.UNSIGNED_BYTE,Xt):r.texImage2D(Nt+ee,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Xt);return Tt}const vt={};vt[r.TEXTURE_2D]=K(r.TEXTURE_2D,r.TEXTURE_2D,1),vt[r.TEXTURE_CUBE_MAP]=K(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),vt[r.TEXTURE_2D_ARRAY]=K(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),vt[r.TEXTURE_3D]=K(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),d.setClear(0),yt(r.DEPTH_TEST),u.setFunc(to),Ht(!1),Bt(Zv),yt(r.CULL_FACE),wt(Ua);function yt(q){_[q]!==!0&&(r.enable(q),_[q]=!0)}function Pt(q){_[q]!==!1&&(r.disable(q),_[q]=!1)}function ie(q,Nt){return g[q]!==Nt?(r.bindFramebuffer(q,Nt),g[q]=Nt,q===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=Nt),q===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=Nt),!0):!1}function $t(q,Nt){let gt=E,Ct=!1;if(q){gt=x.get(Nt),gt===void 0&&(gt=[],x.set(Nt,gt));const Xt=q.textures;if(gt.length!==Xt.length||gt[0]!==r.COLOR_ATTACHMENT0){for(let Tt=0,ee=Xt.length;Tt<ee;Tt++)gt[Tt]=r.COLOR_ATTACHMENT0+Tt;gt.length=Xt.length,Ct=!0}}else gt[0]!==r.BACK&&(gt[0]=r.BACK,Ct=!0);Ct&&r.drawBuffers(gt)}function be(q){return R!==q?(r.useProgram(q),R=q,!0):!1}const oe={[qs]:r.FUNC_ADD,[gM]:r.FUNC_SUBTRACT,[vM]:r.FUNC_REVERSE_SUBTRACT};oe[_M]=r.MIN,oe[xM]=r.MAX;const Mt={[SM]:r.ZERO,[yM]:r.ONE,[MM]:r.SRC_COLOR,[Od]:r.SRC_ALPHA,[wM]:r.SRC_ALPHA_SATURATE,[AM]:r.DST_COLOR,[bM]:r.DST_ALPHA,[EM]:r.ONE_MINUS_SRC_COLOR,[Pd]:r.ONE_MINUS_SRC_ALPHA,[RM]:r.ONE_MINUS_DST_COLOR,[TM]:r.ONE_MINUS_DST_ALPHA,[CM]:r.CONSTANT_COLOR,[DM]:r.ONE_MINUS_CONSTANT_COLOR,[UM]:r.CONSTANT_ALPHA,[NM]:r.ONE_MINUS_CONSTANT_ALPHA};function wt(q,Nt,gt,Ct,Xt,Tt,ee,Zt,tn,Fe){if(q===Ua){M===!0&&(Pt(r.BLEND),M=!1);return}if(M===!1&&(yt(r.BLEND),M=!0),q!==mM){if(q!==S||Fe!==V){if((B!==qs||z!==qs)&&(r.blendEquation(r.FUNC_ADD),B=qs,z=qs),Fe)switch(q){case Jr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ld:r.blendFunc(r.ONE,r.ONE);break;case Kv:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Jv:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Le("WebGLState: Invalid blending: ",q);break}else switch(q){case Jr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ld:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Kv:Le("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Jv:Le("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Le("WebGLState: Invalid blending: ",q);break}N=null,A=null,O=null,D=null,T.set(0,0,0),U=0,S=q,V=Fe}return}Xt=Xt||Nt,Tt=Tt||gt,ee=ee||Ct,(Nt!==B||Xt!==z)&&(r.blendEquationSeparate(oe[Nt],oe[Xt]),B=Nt,z=Xt),(gt!==N||Ct!==A||Tt!==O||ee!==D)&&(r.blendFuncSeparate(Mt[gt],Mt[Ct],Mt[Tt],Mt[ee]),N=gt,A=Ct,O=Tt,D=ee),(Zt.equals(T)===!1||tn!==U)&&(r.blendColor(Zt.r,Zt.g,Zt.b,tn),T.copy(Zt),U=tn),S=q,V=!1}function Rt(q,Nt){q.side===Ca?Pt(r.CULL_FACE):yt(r.CULL_FACE);let gt=q.side===ei;Nt&&(gt=!gt),Ht(gt),q.blending===Jr&&q.transparent===!1?wt(Ua):wt(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),u.setFunc(q.depthFunc),u.setTest(q.depthTest),u.setMask(q.depthWrite),c.setMask(q.colorWrite);const Ct=q.stencilWrite;d.setTest(Ct),Ct&&(d.setMask(q.stencilWriteMask),d.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),d.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),Jt(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?yt(r.SAMPLE_ALPHA_TO_COVERAGE):Pt(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ht(q){G!==q&&(q?r.frontFace(r.CW):r.frontFace(r.CCW),G=q)}function Bt(q){q!==dM?(yt(r.CULL_FACE),q!==Z&&(q===Zv?r.cullFace(r.BACK):q===pM?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Pt(r.CULL_FACE),Z=q}function re(q){q!==et&&(F&&r.lineWidth(q),et=q)}function Jt(q,Nt,gt){q?(yt(r.POLYGON_OFFSET_FILL),(ft!==Nt||Y!==gt)&&(ft=Nt,Y=gt,u.getReversed()&&(Nt=-Nt),r.polygonOffset(Nt,gt))):Pt(r.POLYGON_OFFSET_FILL)}function ue(q){q?yt(r.SCISSOR_TEST):Pt(r.SCISSOR_TEST)}function fe(q){q===void 0&&(q=r.TEXTURE0+I-1),St!==q&&(r.activeTexture(q),St=q)}function X(q,Nt,gt){gt===void 0&&(St===null?gt=r.TEXTURE0+I-1:gt=St);let Ct=P[gt];Ct===void 0&&(Ct={type:void 0,texture:void 0},P[gt]=Ct),(Ct.type!==q||Ct.texture!==Nt)&&(St!==gt&&(r.activeTexture(gt),St=gt),r.bindTexture(q,Nt||vt[q]),Ct.type=q,Ct.texture=Nt)}function me(){const q=P[St];q!==void 0&&q.type!==void 0&&(r.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function _e(){try{r.compressedTexImage2D(...arguments)}catch(q){Le("WebGLState:",q)}}function L(){try{r.compressedTexImage3D(...arguments)}catch(q){Le("WebGLState:",q)}}function b(){try{r.texSubImage2D(...arguments)}catch(q){Le("WebGLState:",q)}}function j(){try{r.texSubImage3D(...arguments)}catch(q){Le("WebGLState:",q)}}function nt(){try{r.compressedTexSubImage2D(...arguments)}catch(q){Le("WebGLState:",q)}}function dt(){try{r.compressedTexSubImage3D(...arguments)}catch(q){Le("WebGLState:",q)}}function Ut(){try{r.texStorage2D(...arguments)}catch(q){Le("WebGLState:",q)}}function Ot(){try{r.texStorage3D(...arguments)}catch(q){Le("WebGLState:",q)}}function ht(){try{r.texImage2D(...arguments)}catch(q){Le("WebGLState:",q)}}function ct(){try{r.texImage3D(...arguments)}catch(q){Le("WebGLState:",q)}}function Lt(q){return v[q]!==void 0?v[q]:r.getParameter(q)}function Wt(q,Nt){v[q]!==Nt&&(r.pixelStorei(q,Nt),v[q]=Nt)}function Gt(q){Dt.equals(q)===!1&&(r.scissor(q.x,q.y,q.z,q.w),Dt.copy(q))}function zt(q){At.equals(q)===!1&&(r.viewport(q.x,q.y,q.z,q.w),At.copy(q))}function te(q,Nt){let gt=p.get(Nt);gt===void 0&&(gt=new WeakMap,p.set(Nt,gt));let Ct=gt.get(q);Ct===void 0&&(Ct=r.getUniformBlockIndex(Nt,q.name),gt.set(q,Ct))}function ae(q,Nt){const Ct=p.get(Nt).get(q);m.get(Nt)!==Ct&&(r.uniformBlockBinding(Nt,Ct,q.__bindingPointIndex),m.set(Nt,Ct))}function pe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),u.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),_={},v={},St=null,P={},g={},x=new WeakMap,E=[],R=null,M=!1,S=null,B=null,N=null,A=null,z=null,O=null,D=null,T=new Me(0,0,0),U=0,V=!1,G=null,Z=null,et=null,ft=null,Y=null,Dt.set(0,0,r.canvas.width,r.canvas.height),At.set(0,0,r.canvas.width,r.canvas.height),c.reset(),u.reset(),d.reset()}return{buffers:{color:c,depth:u,stencil:d},enable:yt,disable:Pt,bindFramebuffer:ie,drawBuffers:$t,useProgram:be,setBlending:wt,setMaterial:Rt,setFlipSided:Ht,setCullFace:Bt,setLineWidth:re,setPolygonOffset:Jt,setScissorTest:ue,activeTexture:fe,bindTexture:X,unbindTexture:me,compressedTexImage2D:_e,compressedTexImage3D:L,texImage2D:ht,texImage3D:ct,pixelStorei:Wt,getParameter:Lt,updateUBOMapping:te,uniformBlockBinding:ae,texStorage2D:Ut,texStorage3D:Ot,texSubImage2D:b,texSubImage3D:j,compressedTexSubImage2D:nt,compressedTexSubImage3D:dt,scissor:Gt,viewport:zt,reset:pe}}function h2(r,t,n,a,l,c,u){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ft,_=new WeakMap,v=new Set;let g;const x=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function R(L,b){return E?new OffscreenCanvas(L,b):Ru("canvas")}function M(L,b,j){let nt=1;const dt=_e(L);if((dt.width>j||dt.height>j)&&(nt=j/Math.max(dt.width,dt.height)),nt<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const Ut=Math.floor(nt*dt.width),Ot=Math.floor(nt*dt.height);g===void 0&&(g=R(Ut,Ot));const ht=b?R(Ut,Ot):g;return ht.width=Ut,ht.height=Ot,ht.getContext("2d").drawImage(L,0,0,Ut,Ot),de("WebGLRenderer: Texture has been resized from ("+dt.width+"x"+dt.height+") to ("+Ut+"x"+Ot+")."),ht}else return"data"in L&&de("WebGLRenderer: Image in DataTexture is too big ("+dt.width+"x"+dt.height+")."),L;return L}function S(L){return L.generateMipmaps}function B(L){r.generateMipmap(L)}function N(L){return L.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?r.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function A(L,b,j,nt,dt,Ut=!1){if(L!==null){if(r[L]!==void 0)return r[L];de("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Ot;nt&&(Ot=t.get("EXT_texture_norm16"),Ot||de("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ht=b;if(b===r.RED&&(j===r.FLOAT&&(ht=r.R32F),j===r.HALF_FLOAT&&(ht=r.R16F),j===r.UNSIGNED_BYTE&&(ht=r.R8),j===r.UNSIGNED_SHORT&&Ot&&(ht=Ot.R16_EXT),j===r.SHORT&&Ot&&(ht=Ot.R16_SNORM_EXT)),b===r.RED_INTEGER&&(j===r.UNSIGNED_BYTE&&(ht=r.R8UI),j===r.UNSIGNED_SHORT&&(ht=r.R16UI),j===r.UNSIGNED_INT&&(ht=r.R32UI),j===r.BYTE&&(ht=r.R8I),j===r.SHORT&&(ht=r.R16I),j===r.INT&&(ht=r.R32I)),b===r.RG&&(j===r.FLOAT&&(ht=r.RG32F),j===r.HALF_FLOAT&&(ht=r.RG16F),j===r.UNSIGNED_BYTE&&(ht=r.RG8),j===r.UNSIGNED_SHORT&&Ot&&(ht=Ot.RG16_EXT),j===r.SHORT&&Ot&&(ht=Ot.RG16_SNORM_EXT)),b===r.RG_INTEGER&&(j===r.UNSIGNED_BYTE&&(ht=r.RG8UI),j===r.UNSIGNED_SHORT&&(ht=r.RG16UI),j===r.UNSIGNED_INT&&(ht=r.RG32UI),j===r.BYTE&&(ht=r.RG8I),j===r.SHORT&&(ht=r.RG16I),j===r.INT&&(ht=r.RG32I)),b===r.RGB_INTEGER&&(j===r.UNSIGNED_BYTE&&(ht=r.RGB8UI),j===r.UNSIGNED_SHORT&&(ht=r.RGB16UI),j===r.UNSIGNED_INT&&(ht=r.RGB32UI),j===r.BYTE&&(ht=r.RGB8I),j===r.SHORT&&(ht=r.RGB16I),j===r.INT&&(ht=r.RGB32I)),b===r.RGBA_INTEGER&&(j===r.UNSIGNED_BYTE&&(ht=r.RGBA8UI),j===r.UNSIGNED_SHORT&&(ht=r.RGBA16UI),j===r.UNSIGNED_INT&&(ht=r.RGBA32UI),j===r.BYTE&&(ht=r.RGBA8I),j===r.SHORT&&(ht=r.RGBA16I),j===r.INT&&(ht=r.RGBA32I)),b===r.RGB&&(j===r.UNSIGNED_SHORT&&Ot&&(ht=Ot.RGB16_EXT),j===r.SHORT&&Ot&&(ht=Ot.RGB16_SNORM_EXT),j===r.UNSIGNED_INT_5_9_9_9_REV&&(ht=r.RGB9_E5),j===r.UNSIGNED_INT_10F_11F_11F_REV&&(ht=r.R11F_G11F_B10F)),b===r.RGBA){const ct=Ut?Au:Ne.getTransfer(dt);j===r.FLOAT&&(ht=r.RGBA32F),j===r.HALF_FLOAT&&(ht=r.RGBA16F),j===r.UNSIGNED_BYTE&&(ht=ct===We?r.SRGB8_ALPHA8:r.RGBA8),j===r.UNSIGNED_SHORT&&Ot&&(ht=Ot.RGBA16_EXT),j===r.SHORT&&Ot&&(ht=Ot.RGBA16_SNORM_EXT),j===r.UNSIGNED_SHORT_4_4_4_4&&(ht=r.RGBA4),j===r.UNSIGNED_SHORT_5_5_5_1&&(ht=r.RGB5_A1)}return(ht===r.R16F||ht===r.R32F||ht===r.RG16F||ht===r.RG32F||ht===r.RGBA16F||ht===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ht}function z(L,b){let j;return L?b===null||b===ia||b===vl?j=r.DEPTH24_STENCIL8:b===Qi?j=r.DEPTH32F_STENCIL8:b===gl&&(j=r.DEPTH24_STENCIL8,de("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ia||b===vl?j=r.DEPTH_COMPONENT24:b===Qi?j=r.DEPTH_COMPONENT32F:b===gl&&(j=r.DEPTH_COMPONENT16),j}function O(L,b){return S(L)===!0||L.isFramebufferTexture&&L.minFilter!==Ln&&L.minFilter!==Fn?Math.log2(Math.max(b.width,b.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?b.mipmaps.length:1}function D(L){const b=L.target;b.removeEventListener("dispose",D),U(b),b.isVideoTexture&&_.delete(b),b.isHTMLTexture&&v.delete(b)}function T(L){const b=L.target;b.removeEventListener("dispose",T),G(b)}function U(L){const b=a.get(L);if(b.__webglInit===void 0)return;const j=L.source,nt=x.get(j);if(nt){const dt=nt[b.__cacheKey];dt.usedTimes--,dt.usedTimes===0&&V(L),Object.keys(nt).length===0&&x.delete(j)}a.remove(L)}function V(L){const b=a.get(L);r.deleteTexture(b.__webglTexture);const j=L.source,nt=x.get(j);delete nt[b.__cacheKey],u.memory.textures--}function G(L){const b=a.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),a.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(b.__webglFramebuffer[nt]))for(let dt=0;dt<b.__webglFramebuffer[nt].length;dt++)r.deleteFramebuffer(b.__webglFramebuffer[nt][dt]);else r.deleteFramebuffer(b.__webglFramebuffer[nt]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[nt])}else{if(Array.isArray(b.__webglFramebuffer))for(let nt=0;nt<b.__webglFramebuffer.length;nt++)r.deleteFramebuffer(b.__webglFramebuffer[nt]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let nt=0;nt<b.__webglColorRenderbuffer.length;nt++)b.__webglColorRenderbuffer[nt]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[nt]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const j=L.textures;for(let nt=0,dt=j.length;nt<dt;nt++){const Ut=a.get(j[nt]);Ut.__webglTexture&&(r.deleteTexture(Ut.__webglTexture),u.memory.textures--),a.remove(j[nt])}a.remove(L)}let Z=0;function et(){Z=0}function ft(){return Z}function Y(L){Z=L}function I(){const L=Z;return L>=l.maxTextures&&de("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),Z+=1,L}function F(L){const b=[];return b.push(L.wrapS),b.push(L.wrapT),b.push(L.wrapR||0),b.push(L.magFilter),b.push(L.minFilter),b.push(L.anisotropy),b.push(L.internalFormat),b.push(L.format),b.push(L.type),b.push(L.generateMipmaps),b.push(L.premultiplyAlpha),b.push(L.flipY),b.push(L.unpackAlignment),b.push(L.colorSpace),b.join()}function tt(L,b){const j=a.get(L);if(L.isVideoTexture&&X(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&j.__version!==L.version){const nt=L.image;if(nt===null)de("WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)de("WebGLRenderer: Texture marked for update but image is incomplete");else{Pt(j,L,b);return}}else L.isExternalTexture&&(j.__webglTexture=L.sourceTexture?L.sourceTexture:null);n.bindTexture(r.TEXTURE_2D,j.__webglTexture,r.TEXTURE0+b)}function pt(L,b){const j=a.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&j.__version!==L.version){Pt(j,L,b);return}else L.isExternalTexture&&(j.__webglTexture=L.sourceTexture?L.sourceTexture:null);n.bindTexture(r.TEXTURE_2D_ARRAY,j.__webglTexture,r.TEXTURE0+b)}function St(L,b){const j=a.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&j.__version!==L.version){Pt(j,L,b);return}n.bindTexture(r.TEXTURE_3D,j.__webglTexture,r.TEXTURE0+b)}function P(L,b){const j=a.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&j.__version!==L.version){ie(j,L,b);return}n.bindTexture(r.TEXTURE_CUBE_MAP,j.__webglTexture,r.TEXTURE0+b)}const Q={[kd]:r.REPEAT,[Da]:r.CLAMP_TO_EDGE,[Xd]:r.MIRRORED_REPEAT},xt={[Ln]:r.NEAREST,[PM]:r.NEAREST_MIPMAP_NEAREST,[Fc]:r.NEAREST_MIPMAP_LINEAR,[Fn]:r.LINEAR,[Jh]:r.LINEAR_MIPMAP_NEAREST,[Zs]:r.LINEAR_MIPMAP_LINEAR},Dt={[IM]:r.NEVER,[kM]:r.ALWAYS,[FM]:r.LESS,[Fp]:r.LEQUAL,[HM]:r.EQUAL,[Hp]:r.GEQUAL,[GM]:r.GREATER,[VM]:r.NOTEQUAL};function At(L,b){if(b.type===Qi&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Fn||b.magFilter===Jh||b.magFilter===Fc||b.magFilter===Zs||b.minFilter===Fn||b.minFilter===Jh||b.minFilter===Fc||b.minFilter===Zs)&&de("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(L,r.TEXTURE_WRAP_S,Q[b.wrapS]),r.texParameteri(L,r.TEXTURE_WRAP_T,Q[b.wrapT]),(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)&&r.texParameteri(L,r.TEXTURE_WRAP_R,Q[b.wrapR]),r.texParameteri(L,r.TEXTURE_MAG_FILTER,xt[b.magFilter]),r.texParameteri(L,r.TEXTURE_MIN_FILTER,xt[b.minFilter]),b.compareFunction&&(r.texParameteri(L,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(L,r.TEXTURE_COMPARE_FUNC,Dt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Ln||b.minFilter!==Fc&&b.minFilter!==Zs||b.type===Qi&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||a.get(b).__currentAnisotropy){const j=t.get("EXT_texture_filter_anisotropic");r.texParameterf(L,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),a.get(b).__currentAnisotropy=b.anisotropy}}}function K(L,b){let j=!1;L.__webglInit===void 0&&(L.__webglInit=!0,b.addEventListener("dispose",D));const nt=b.source;let dt=x.get(nt);dt===void 0&&(dt={},x.set(nt,dt));const Ut=F(b);if(Ut!==L.__cacheKey){dt[Ut]===void 0&&(dt[Ut]={texture:r.createTexture(),usedTimes:0},u.memory.textures++,j=!0),dt[Ut].usedTimes++;const Ot=dt[L.__cacheKey];Ot!==void 0&&(dt[L.__cacheKey].usedTimes--,Ot.usedTimes===0&&V(b)),L.__cacheKey=Ut,L.__webglTexture=dt[Ut].texture}return j}function vt(L,b,j){return Math.floor(Math.floor(L/j)/b)}function yt(L,b,j,nt){const Ut=L.updateRanges;if(Ut.length===0)n.texSubImage2D(r.TEXTURE_2D,0,0,0,b.width,b.height,j,nt,b.data);else{Ut.sort((Wt,Gt)=>Wt.start-Gt.start);let Ot=0;for(let Wt=1;Wt<Ut.length;Wt++){const Gt=Ut[Ot],zt=Ut[Wt],te=Gt.start+Gt.count,ae=vt(zt.start,b.width,4),pe=vt(Gt.start,b.width,4);zt.start<=te+1&&ae===pe&&vt(zt.start+zt.count-1,b.width,4)===ae?Gt.count=Math.max(Gt.count,zt.start+zt.count-Gt.start):(++Ot,Ut[Ot]=zt)}Ut.length=Ot+1;const ht=n.getParameter(r.UNPACK_ROW_LENGTH),ct=n.getParameter(r.UNPACK_SKIP_PIXELS),Lt=n.getParameter(r.UNPACK_SKIP_ROWS);n.pixelStorei(r.UNPACK_ROW_LENGTH,b.width);for(let Wt=0,Gt=Ut.length;Wt<Gt;Wt++){const zt=Ut[Wt],te=Math.floor(zt.start/4),ae=Math.ceil(zt.count/4),pe=te%b.width,q=Math.floor(te/b.width),Nt=ae,gt=1;n.pixelStorei(r.UNPACK_SKIP_PIXELS,pe),n.pixelStorei(r.UNPACK_SKIP_ROWS,q),n.texSubImage2D(r.TEXTURE_2D,0,pe,q,Nt,gt,j,nt,b.data)}L.clearUpdateRanges(),n.pixelStorei(r.UNPACK_ROW_LENGTH,ht),n.pixelStorei(r.UNPACK_SKIP_PIXELS,ct),n.pixelStorei(r.UNPACK_SKIP_ROWS,Lt)}}function Pt(L,b,j){let nt=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(nt=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(nt=r.TEXTURE_3D);const dt=K(L,b),Ut=b.source;n.bindTexture(nt,L.__webglTexture,r.TEXTURE0+j);const Ot=a.get(Ut);if(Ut.version!==Ot.__version||dt===!0){if(n.activeTexture(r.TEXTURE0+j),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){const gt=Ne.getPrimaries(Ne.workingColorSpace),Ct=b.colorSpace===ms?null:Ne.getPrimaries(b.colorSpace),Xt=b.colorSpace===ms||gt===Ct?r.NONE:r.BROWSER_DEFAULT_WEBGL;n.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt)}n.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment);let ct=M(b.image,!1,l.maxTextureSize);ct=me(b,ct);const Lt=c.convert(b.format,b.colorSpace),Wt=c.convert(b.type);let Gt=A(b.internalFormat,Lt,Wt,b.normalized,b.colorSpace,b.isVideoTexture);At(nt,b);let zt;const te=b.mipmaps,ae=b.isVideoTexture!==!0,pe=Ot.__version===void 0||dt===!0,q=Ut.dataReady,Nt=O(b,ct);if(b.isDepthTexture)Gt=z(b.format===Ks,b.type),pe&&(ae?n.texStorage2D(r.TEXTURE_2D,1,Gt,ct.width,ct.height):n.texImage2D(r.TEXTURE_2D,0,Gt,ct.width,ct.height,0,Lt,Wt,null));else if(b.isDataTexture)if(te.length>0){ae&&pe&&n.texStorage2D(r.TEXTURE_2D,Nt,Gt,te[0].width,te[0].height);for(let gt=0,Ct=te.length;gt<Ct;gt++)zt=te[gt],ae?q&&n.texSubImage2D(r.TEXTURE_2D,gt,0,0,zt.width,zt.height,Lt,Wt,zt.data):n.texImage2D(r.TEXTURE_2D,gt,Gt,zt.width,zt.height,0,Lt,Wt,zt.data);b.generateMipmaps=!1}else ae?(pe&&n.texStorage2D(r.TEXTURE_2D,Nt,Gt,ct.width,ct.height),q&&yt(b,ct,Lt,Wt)):n.texImage2D(r.TEXTURE_2D,0,Gt,ct.width,ct.height,0,Lt,Wt,ct.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){ae&&pe&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Nt,Gt,te[0].width,te[0].height,ct.depth);for(let gt=0,Ct=te.length;gt<Ct;gt++)if(zt=te[gt],b.format!==Bi)if(Lt!==null)if(ae){if(q)if(b.layerUpdates.size>0){const Xt=z_(zt.width,zt.height,b.format,b.type);for(const Tt of b.layerUpdates){const ee=zt.data.subarray(Tt*Xt/zt.data.BYTES_PER_ELEMENT,(Tt+1)*Xt/zt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,gt,0,0,Tt,zt.width,zt.height,1,Lt,ee)}b.clearLayerUpdates()}else n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,gt,0,0,0,zt.width,zt.height,ct.depth,Lt,zt.data)}else n.compressedTexImage3D(r.TEXTURE_2D_ARRAY,gt,Gt,zt.width,zt.height,ct.depth,0,zt.data,0,0);else de("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ae?q&&n.texSubImage3D(r.TEXTURE_2D_ARRAY,gt,0,0,0,zt.width,zt.height,ct.depth,Lt,Wt,zt.data):n.texImage3D(r.TEXTURE_2D_ARRAY,gt,Gt,zt.width,zt.height,ct.depth,0,Lt,Wt,zt.data)}else{ae&&pe&&n.texStorage2D(r.TEXTURE_2D,Nt,Gt,te[0].width,te[0].height);for(let gt=0,Ct=te.length;gt<Ct;gt++)zt=te[gt],b.format!==Bi?Lt!==null?ae?q&&n.compressedTexSubImage2D(r.TEXTURE_2D,gt,0,0,zt.width,zt.height,Lt,zt.data):n.compressedTexImage2D(r.TEXTURE_2D,gt,Gt,zt.width,zt.height,0,zt.data):de("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ae?q&&n.texSubImage2D(r.TEXTURE_2D,gt,0,0,zt.width,zt.height,Lt,Wt,zt.data):n.texImage2D(r.TEXTURE_2D,gt,Gt,zt.width,zt.height,0,Lt,Wt,zt.data)}else if(b.isDataArrayTexture)if(ae){if(pe&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Nt,Gt,ct.width,ct.height,ct.depth),q)if(b.layerUpdates.size>0){const gt=z_(ct.width,ct.height,b.format,b.type);for(const Ct of b.layerUpdates){const Xt=ct.data.subarray(Ct*gt/ct.data.BYTES_PER_ELEMENT,(Ct+1)*gt/ct.data.BYTES_PER_ELEMENT);n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Ct,ct.width,ct.height,1,Lt,Wt,Xt)}b.clearLayerUpdates()}else n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ct.width,ct.height,ct.depth,Lt,Wt,ct.data)}else n.texImage3D(r.TEXTURE_2D_ARRAY,0,Gt,ct.width,ct.height,ct.depth,0,Lt,Wt,ct.data);else if(b.isData3DTexture)ae?(pe&&n.texStorage3D(r.TEXTURE_3D,Nt,Gt,ct.width,ct.height,ct.depth),q&&n.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ct.width,ct.height,ct.depth,Lt,Wt,ct.data)):n.texImage3D(r.TEXTURE_3D,0,Gt,ct.width,ct.height,ct.depth,0,Lt,Wt,ct.data);else if(b.isFramebufferTexture){if(pe)if(ae)n.texStorage2D(r.TEXTURE_2D,Nt,Gt,ct.width,ct.height);else{let gt=ct.width,Ct=ct.height;for(let Xt=0;Xt<Nt;Xt++)n.texImage2D(r.TEXTURE_2D,Xt,Gt,gt,Ct,0,Lt,Wt,null),gt>>=1,Ct>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in r){const gt=r.canvas;if(gt.hasAttribute("layoutsubtree")||gt.setAttribute("layoutsubtree","true"),ct.parentNode!==gt){gt.appendChild(ct),v.add(b),gt.onpaint=Ct=>{const Xt=Ct.changedElements;for(const Tt of v)Xt.includes(Tt.image)&&(Tt.needsUpdate=!0)},gt.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,ct);else{const Xt=r.RGBA,Tt=r.RGBA,ee=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,Xt,Tt,ee,ct)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(te.length>0){if(ae&&pe){const gt=_e(te[0]);n.texStorage2D(r.TEXTURE_2D,Nt,Gt,gt.width,gt.height)}for(let gt=0,Ct=te.length;gt<Ct;gt++)zt=te[gt],ae?q&&n.texSubImage2D(r.TEXTURE_2D,gt,0,0,Lt,Wt,zt):n.texImage2D(r.TEXTURE_2D,gt,Gt,Lt,Wt,zt);b.generateMipmaps=!1}else if(ae){if(pe){const gt=_e(ct);n.texStorage2D(r.TEXTURE_2D,Nt,Gt,gt.width,gt.height)}q&&n.texSubImage2D(r.TEXTURE_2D,0,0,0,Lt,Wt,ct)}else n.texImage2D(r.TEXTURE_2D,0,Gt,Lt,Wt,ct);S(b)&&B(nt),Ot.__version=Ut.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function ie(L,b,j){if(b.image.length!==6)return;const nt=K(L,b),dt=b.source;n.bindTexture(r.TEXTURE_CUBE_MAP,L.__webglTexture,r.TEXTURE0+j);const Ut=a.get(dt);if(dt.version!==Ut.__version||nt===!0){n.activeTexture(r.TEXTURE0+j);const Ot=Ne.getPrimaries(Ne.workingColorSpace),ht=b.colorSpace===ms?null:Ne.getPrimaries(b.colorSpace),ct=b.colorSpace===ms||Ot===ht?r.NONE:r.BROWSER_DEFAULT_WEBGL;n.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);const Lt=b.isCompressedTexture||b.image[0].isCompressedTexture,Wt=b.image[0]&&b.image[0].isDataTexture,Gt=[];for(let Tt=0;Tt<6;Tt++)!Lt&&!Wt?Gt[Tt]=M(b.image[Tt],!0,l.maxCubemapSize):Gt[Tt]=Wt?b.image[Tt].image:b.image[Tt],Gt[Tt]=me(b,Gt[Tt]);const zt=Gt[0],te=c.convert(b.format,b.colorSpace),ae=c.convert(b.type),pe=A(b.internalFormat,te,ae,b.normalized,b.colorSpace),q=b.isVideoTexture!==!0,Nt=Ut.__version===void 0||nt===!0,gt=dt.dataReady;let Ct=O(b,zt);At(r.TEXTURE_CUBE_MAP,b);let Xt;if(Lt){q&&Nt&&n.texStorage2D(r.TEXTURE_CUBE_MAP,Ct,pe,zt.width,zt.height);for(let Tt=0;Tt<6;Tt++){Xt=Gt[Tt].mipmaps;for(let ee=0;ee<Xt.length;ee++){const Zt=Xt[ee];b.format!==Bi?te!==null?q?gt&&n.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,ee,0,0,Zt.width,Zt.height,te,Zt.data):n.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,ee,pe,Zt.width,Zt.height,0,Zt.data):de("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?gt&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,ee,0,0,Zt.width,Zt.height,te,ae,Zt.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,ee,pe,Zt.width,Zt.height,0,te,ae,Zt.data)}}}else{if(Xt=b.mipmaps,q&&Nt){Xt.length>0&&Ct++;const Tt=_e(Gt[0]);n.texStorage2D(r.TEXTURE_CUBE_MAP,Ct,pe,Tt.width,Tt.height)}for(let Tt=0;Tt<6;Tt++)if(Wt){q?gt&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,0,0,Gt[Tt].width,Gt[Tt].height,te,ae,Gt[Tt].data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,pe,Gt[Tt].width,Gt[Tt].height,0,te,ae,Gt[Tt].data);for(let ee=0;ee<Xt.length;ee++){const tn=Xt[ee].image[Tt].image;q?gt&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,ee+1,0,0,tn.width,tn.height,te,ae,tn.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,ee+1,pe,tn.width,tn.height,0,te,ae,tn.data)}}else{q?gt&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,0,0,te,ae,Gt[Tt]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,pe,te,ae,Gt[Tt]);for(let ee=0;ee<Xt.length;ee++){const Zt=Xt[ee];q?gt&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,ee+1,0,0,te,ae,Zt.image[Tt]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,ee+1,pe,te,ae,Zt.image[Tt])}}}S(b)&&B(r.TEXTURE_CUBE_MAP),Ut.__version=dt.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function $t(L,b,j,nt,dt,Ut){const Ot=c.convert(j.format,j.colorSpace),ht=c.convert(j.type),ct=A(j.internalFormat,Ot,ht,j.normalized,j.colorSpace),Lt=a.get(b),Wt=a.get(j);if(Wt.__renderTarget=b,!Lt.__hasExternalTextures){const Gt=Math.max(1,b.width>>Ut),zt=Math.max(1,b.height>>Ut);dt===r.TEXTURE_3D||dt===r.TEXTURE_2D_ARRAY?n.texImage3D(dt,Ut,ct,Gt,zt,b.depth,0,Ot,ht,null):n.texImage2D(dt,Ut,ct,Gt,zt,0,Ot,ht,null)}n.bindFramebuffer(r.FRAMEBUFFER,L),fe(b)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,nt,dt,Wt.__webglTexture,0,ue(b)):(dt===r.TEXTURE_2D||dt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&dt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,nt,dt,Wt.__webglTexture,Ut),n.bindFramebuffer(r.FRAMEBUFFER,null)}function be(L,b,j){if(r.bindRenderbuffer(r.RENDERBUFFER,L),b.depthBuffer){const nt=b.depthTexture,dt=nt&&nt.isDepthTexture?nt.type:null,Ut=z(b.stencilBuffer,dt),Ot=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;fe(b)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ue(b),Ut,b.width,b.height):j?r.renderbufferStorageMultisample(r.RENDERBUFFER,ue(b),Ut,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,Ut,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ot,r.RENDERBUFFER,L)}else{const nt=b.textures;for(let dt=0;dt<nt.length;dt++){const Ut=nt[dt],Ot=c.convert(Ut.format,Ut.colorSpace),ht=c.convert(Ut.type),ct=A(Ut.internalFormat,Ot,ht,Ut.normalized,Ut.colorSpace);fe(b)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ue(b),ct,b.width,b.height):j?r.renderbufferStorageMultisample(r.RENDERBUFFER,ue(b),ct,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,ct,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function oe(L,b,j){const nt=b.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(r.FRAMEBUFFER,L),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const dt=a.get(b.depthTexture);if(dt.__renderTarget=b,(!dt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),nt){if(dt.__webglInit===void 0&&(dt.__webglInit=!0,b.depthTexture.addEventListener("dispose",D)),dt.__webglTexture===void 0){dt.__webglTexture=r.createTexture(),n.bindTexture(r.TEXTURE_CUBE_MAP,dt.__webglTexture),At(r.TEXTURE_CUBE_MAP,b.depthTexture);const Lt=c.convert(b.depthTexture.format),Wt=c.convert(b.depthTexture.type);let Gt;b.depthTexture.format===Oa?Gt=r.DEPTH_COMPONENT24:b.depthTexture.format===Ks&&(Gt=r.DEPTH24_STENCIL8);for(let zt=0;zt<6;zt++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+zt,0,Gt,b.width,b.height,0,Lt,Wt,null)}}else tt(b.depthTexture,0);const Ut=dt.__webglTexture,Ot=ue(b),ht=nt?r.TEXTURE_CUBE_MAP_POSITIVE_X+j:r.TEXTURE_2D,ct=b.depthTexture.format===Ks?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(b.depthTexture.format===Oa)fe(b)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ct,ht,Ut,0,Ot):r.framebufferTexture2D(r.FRAMEBUFFER,ct,ht,Ut,0);else if(b.depthTexture.format===Ks)fe(b)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ct,ht,Ut,0,Ot):r.framebufferTexture2D(r.FRAMEBUFFER,ct,ht,Ut,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Mt(L){const b=a.get(L),j=L.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==L.depthTexture){const nt=L.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),nt){const dt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,nt.removeEventListener("dispose",dt)};nt.addEventListener("dispose",dt),b.__depthDisposeCallback=dt}b.__boundDepthTexture=nt}if(L.depthTexture&&!b.__autoAllocateDepthBuffer)if(j)for(let nt=0;nt<6;nt++)oe(b.__webglFramebuffer[nt],L,nt);else{const nt=L.texture.mipmaps;nt&&nt.length>0?oe(b.__webglFramebuffer[0],L,0):oe(b.__webglFramebuffer,L,0)}else if(j){b.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)if(n.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[nt]),b.__webglDepthbuffer[nt]===void 0)b.__webglDepthbuffer[nt]=r.createRenderbuffer(),be(b.__webglDepthbuffer[nt],L,!1);else{const dt=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ut=b.__webglDepthbuffer[nt];r.bindRenderbuffer(r.RENDERBUFFER,Ut),r.framebufferRenderbuffer(r.FRAMEBUFFER,dt,r.RENDERBUFFER,Ut)}}else{const nt=L.texture.mipmaps;if(nt&&nt.length>0?n.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[0]):n.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),be(b.__webglDepthbuffer,L,!1);else{const dt=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ut=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Ut),r.framebufferRenderbuffer(r.FRAMEBUFFER,dt,r.RENDERBUFFER,Ut)}}n.bindFramebuffer(r.FRAMEBUFFER,null)}function wt(L,b,j){const nt=a.get(L);b!==void 0&&$t(nt.__webglFramebuffer,L,L.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),j!==void 0&&Mt(L)}function Rt(L){const b=L.texture,j=a.get(L),nt=a.get(b);L.addEventListener("dispose",T);const dt=L.textures,Ut=L.isWebGLCubeRenderTarget===!0,Ot=dt.length>1;if(Ot||(nt.__webglTexture===void 0&&(nt.__webglTexture=r.createTexture()),nt.__version=b.version,u.memory.textures++),Ut){j.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(b.mipmaps&&b.mipmaps.length>0){j.__webglFramebuffer[ht]=[];for(let ct=0;ct<b.mipmaps.length;ct++)j.__webglFramebuffer[ht][ct]=r.createFramebuffer()}else j.__webglFramebuffer[ht]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){j.__webglFramebuffer=[];for(let ht=0;ht<b.mipmaps.length;ht++)j.__webglFramebuffer[ht]=r.createFramebuffer()}else j.__webglFramebuffer=r.createFramebuffer();if(Ot)for(let ht=0,ct=dt.length;ht<ct;ht++){const Lt=a.get(dt[ht]);Lt.__webglTexture===void 0&&(Lt.__webglTexture=r.createTexture(),u.memory.textures++)}if(L.samples>0&&fe(L)===!1){j.__webglMultisampledFramebuffer=r.createFramebuffer(),j.__webglColorRenderbuffer=[],n.bindFramebuffer(r.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let ht=0;ht<dt.length;ht++){const ct=dt[ht];j.__webglColorRenderbuffer[ht]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,j.__webglColorRenderbuffer[ht]);const Lt=c.convert(ct.format,ct.colorSpace),Wt=c.convert(ct.type),Gt=A(ct.internalFormat,Lt,Wt,ct.normalized,ct.colorSpace,L.isXRRenderTarget===!0),zt=ue(L);r.renderbufferStorageMultisample(r.RENDERBUFFER,zt,Gt,L.width,L.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ht,r.RENDERBUFFER,j.__webglColorRenderbuffer[ht])}r.bindRenderbuffer(r.RENDERBUFFER,null),L.depthBuffer&&(j.__webglDepthRenderbuffer=r.createRenderbuffer(),be(j.__webglDepthRenderbuffer,L,!0)),n.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Ut){n.bindTexture(r.TEXTURE_CUBE_MAP,nt.__webglTexture),At(r.TEXTURE_CUBE_MAP,b);for(let ht=0;ht<6;ht++)if(b.mipmaps&&b.mipmaps.length>0)for(let ct=0;ct<b.mipmaps.length;ct++)$t(j.__webglFramebuffer[ht][ct],L,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,ct);else $t(j.__webglFramebuffer[ht],L,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);S(b)&&B(r.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ot){for(let ht=0,ct=dt.length;ht<ct;ht++){const Lt=dt[ht],Wt=a.get(Lt);let Gt=r.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Gt=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(Gt,Wt.__webglTexture),At(Gt,Lt),$t(j.__webglFramebuffer,L,Lt,r.COLOR_ATTACHMENT0+ht,Gt,0),S(Lt)&&B(Gt)}n.unbindTexture()}else{let ht=r.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ht=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(ht,nt.__webglTexture),At(ht,b),b.mipmaps&&b.mipmaps.length>0)for(let ct=0;ct<b.mipmaps.length;ct++)$t(j.__webglFramebuffer[ct],L,b,r.COLOR_ATTACHMENT0,ht,ct);else $t(j.__webglFramebuffer,L,b,r.COLOR_ATTACHMENT0,ht,0);S(b)&&B(ht),n.unbindTexture()}L.depthBuffer&&Mt(L)}function Ht(L){const b=L.textures;for(let j=0,nt=b.length;j<nt;j++){const dt=b[j];if(S(dt)){const Ut=N(L),Ot=a.get(dt).__webglTexture;n.bindTexture(Ut,Ot),B(Ut),n.unbindTexture()}}}const Bt=[],re=[];function Jt(L){if(L.samples>0){if(fe(L)===!1){const b=L.textures,j=L.width,nt=L.height;let dt=r.COLOR_BUFFER_BIT;const Ut=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ot=a.get(L),ht=b.length>1;if(ht)for(let Lt=0;Lt<b.length;Lt++)n.bindFramebuffer(r.FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Lt,r.RENDERBUFFER,null),n.bindFramebuffer(r.FRAMEBUFFER,Ot.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Lt,r.TEXTURE_2D,null,0);n.bindFramebuffer(r.READ_FRAMEBUFFER,Ot.__webglMultisampledFramebuffer);const ct=L.texture.mipmaps;ct&&ct.length>0?n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ot.__webglFramebuffer[0]):n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ot.__webglFramebuffer);for(let Lt=0;Lt<b.length;Lt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(dt|=r.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(dt|=r.STENCIL_BUFFER_BIT)),ht){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ot.__webglColorRenderbuffer[Lt]);const Wt=a.get(b[Lt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Wt,0)}r.blitFramebuffer(0,0,j,nt,0,0,j,nt,dt,r.NEAREST),m===!0&&(Bt.length=0,re.length=0,Bt.push(r.COLOR_ATTACHMENT0+Lt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Bt.push(Ut),re.push(Ut),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,re)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Bt))}if(n.bindFramebuffer(r.READ_FRAMEBUFFER,null),n.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ht)for(let Lt=0;Lt<b.length;Lt++){n.bindFramebuffer(r.FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Lt,r.RENDERBUFFER,Ot.__webglColorRenderbuffer[Lt]);const Wt=a.get(b[Lt]).__webglTexture;n.bindFramebuffer(r.FRAMEBUFFER,Ot.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Lt,r.TEXTURE_2D,Wt,0)}n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ot.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const b=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function ue(L){return Math.min(l.maxSamples,L.samples)}function fe(L){const b=a.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function X(L){const b=u.render.frame;_.get(L)!==b&&(_.set(L,b),L.update())}function me(L,b){const j=L.colorSpace,nt=L.format,dt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||j!==Tu&&j!==ms&&(Ne.getTransfer(j)===We?(nt!==Bi||dt!==vi)&&de("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Le("WebGLTextures: Unsupported texture color space:",j)),b}function _e(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=I,this.resetTextureUnits=et,this.getTextureUnits=ft,this.setTextureUnits=Y,this.setTexture2D=tt,this.setTexture2DArray=pt,this.setTexture3D=St,this.setTextureCube=P,this.rebindTextures=wt,this.setupRenderTarget=Rt,this.updateRenderTargetMipmap=Ht,this.updateMultisampleRenderTarget=Jt,this.setupDepthRenderbuffer=Mt,this.setupFrameBufferTexture=$t,this.useMultisampledRTT=fe,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function d2(r,t){function n(a,l=ms){let c;const u=Ne.getTransfer(l);if(a===vi)return r.UNSIGNED_BYTE;if(a===Op)return r.UNSIGNED_SHORT_4_4_4_4;if(a===Pp)return r.UNSIGNED_SHORT_5_5_5_1;if(a===vx)return r.UNSIGNED_INT_5_9_9_9_REV;if(a===_x)return r.UNSIGNED_INT_10F_11F_11F_REV;if(a===mx)return r.BYTE;if(a===gx)return r.SHORT;if(a===gl)return r.UNSIGNED_SHORT;if(a===Lp)return r.INT;if(a===ia)return r.UNSIGNED_INT;if(a===Qi)return r.FLOAT;if(a===La)return r.HALF_FLOAT;if(a===xx)return r.ALPHA;if(a===Sx)return r.RGB;if(a===Bi)return r.RGBA;if(a===Oa)return r.DEPTH_COMPONENT;if(a===Ks)return r.DEPTH_STENCIL;if(a===yx)return r.RED;if(a===zp)return r.RED_INTEGER;if(a===Qs)return r.RG;if(a===Bp)return r.RG_INTEGER;if(a===Ip)return r.RGBA_INTEGER;if(a===_u||a===xu||a===Su||a===yu)if(u===We)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===_u)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===xu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Su)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===yu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===_u)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===xu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Su)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===yu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Wd||a===qd||a===Yd||a===Zd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===Wd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===qd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Yd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Zd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Kd||a===Jd||a===Qd||a===jd||a===$d||a===Eu||a===tp)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(a===Kd||a===Jd)return u===We?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===Qd)return u===We?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(a===jd)return c.COMPRESSED_R11_EAC;if(a===$d)return c.COMPRESSED_SIGNED_R11_EAC;if(a===Eu)return c.COMPRESSED_RG11_EAC;if(a===tp)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(a===ep||a===np||a===ip||a===ap||a===sp||a===rp||a===op||a===lp||a===cp||a===up||a===fp||a===hp||a===dp||a===pp)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(a===ep)return u===We?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===np)return u===We?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===ip)return u===We?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===ap)return u===We?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===sp)return u===We?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===rp)return u===We?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===op)return u===We?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===lp)return u===We?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===cp)return u===We?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===up)return u===We?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===fp)return u===We?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===hp)return u===We?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===dp)return u===We?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===pp)return u===We?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===mp||a===gp||a===vp)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(a===mp)return u===We?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===gp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===vp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===_p||a===xp||a===bu||a===Sp)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(a===_p)return c.COMPRESSED_RED_RGTC1_EXT;if(a===xp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===bu)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Sp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===vl?r.UNSIGNED_INT_24_8:r[a]!==void 0?r[a]:null}return{convert:n}}const p2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,m2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class g2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const a=new Ux(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,a=new Hi({vertexShader:p2,fragmentShader:m2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new On(new Rl(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class v2 extends $s{constructor(t,n){super();const a=this;let l=null,c=1,u=null,d="local-floor",m=1,p=null,_=null,v=null,g=null,x=null,E=null;const R=typeof XRWebGLBinding<"u",M=new g2,S={},B=n.getContextAttributes();let N=null,A=null;const z=[],O=[],D=new Ft;let T=null;const U=new gi;U.viewport=new rn;const V=new gi;V.viewport=new rn;const G=[U,V],Z=new Rb;let et=null,ft=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let vt=z[K];return vt===void 0&&(vt=new nd,z[K]=vt),vt.getTargetRaySpace()},this.getControllerGrip=function(K){let vt=z[K];return vt===void 0&&(vt=new nd,z[K]=vt),vt.getGripSpace()},this.getHand=function(K){let vt=z[K];return vt===void 0&&(vt=new nd,z[K]=vt),vt.getHandSpace()};function Y(K){const vt=O.indexOf(K.inputSource);if(vt===-1)return;const yt=z[vt];yt!==void 0&&(yt.update(K.inputSource,K.frame,p||u),yt.dispatchEvent({type:K.type,data:K.inputSource}))}function I(){l.removeEventListener("select",Y),l.removeEventListener("selectstart",Y),l.removeEventListener("selectend",Y),l.removeEventListener("squeeze",Y),l.removeEventListener("squeezestart",Y),l.removeEventListener("squeezeend",Y),l.removeEventListener("end",I),l.removeEventListener("inputsourceschange",F);for(let K=0;K<z.length;K++){const vt=O[K];vt!==null&&(O[K]=null,z[K].disconnect(vt))}et=null,ft=null,M.reset();for(const K in S)delete S[K];t.setRenderTarget(N),x=null,g=null,v=null,l=null,A=null,At.stop(),a.isPresenting=!1,t.setPixelRatio(T),t.setSize(D.width,D.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){c=K,a.isPresenting===!0&&de("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){d=K,a.isPresenting===!0&&de("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(K){p=K},this.getBaseLayer=function(){return g!==null?g:x},this.getBinding=function(){return v===null&&R&&(v=new XRWebGLBinding(l,n)),v},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(K){if(l=K,l!==null){if(N=t.getRenderTarget(),l.addEventListener("select",Y),l.addEventListener("selectstart",Y),l.addEventListener("selectend",Y),l.addEventListener("squeeze",Y),l.addEventListener("squeezestart",Y),l.addEventListener("squeezeend",Y),l.addEventListener("end",I),l.addEventListener("inputsourceschange",F),B.xrCompatible!==!0&&await n.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(D),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let yt=null,Pt=null,ie=null;B.depth&&(ie=B.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,yt=B.stencil?Ks:Oa,Pt=B.stencil?vl:ia);const $t={colorFormat:n.RGBA8,depthFormat:ie,scaleFactor:c};v=this.getBinding(),g=v.createProjectionLayer($t),l.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),A=new ea(g.textureWidth,g.textureHeight,{format:Bi,type:vi,depthTexture:new no(g.textureWidth,g.textureHeight,Pt,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:B.stencil,colorSpace:t.outputColorSpace,samples:B.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const yt={antialias:B.antialias,alpha:!0,depth:B.depth,stencil:B.stencil,framebufferScaleFactor:c};x=new XRWebGLLayer(l,n,yt),l.updateRenderState({baseLayer:x}),t.setPixelRatio(1),t.setSize(x.framebufferWidth,x.framebufferHeight,!1),A=new ea(x.framebufferWidth,x.framebufferHeight,{format:Bi,type:vi,colorSpace:t.outputColorSpace,stencilBuffer:B.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(m),p=null,u=await l.requestReferenceSpace(d),At.setContext(l),At.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function F(K){for(let vt=0;vt<K.removed.length;vt++){const yt=K.removed[vt],Pt=O.indexOf(yt);Pt>=0&&(O[Pt]=null,z[Pt].disconnect(yt))}for(let vt=0;vt<K.added.length;vt++){const yt=K.added[vt];let Pt=O.indexOf(yt);if(Pt===-1){for(let $t=0;$t<z.length;$t++)if($t>=O.length){O.push(yt),Pt=$t;break}else if(O[$t]===null){O[$t]=yt,Pt=$t;break}if(Pt===-1)break}const ie=z[Pt];ie&&ie.connect(yt)}}const tt=new k,pt=new k;function St(K,vt,yt){tt.setFromMatrixPosition(vt.matrixWorld),pt.setFromMatrixPosition(yt.matrixWorld);const Pt=tt.distanceTo(pt),ie=vt.projectionMatrix.elements,$t=yt.projectionMatrix.elements,be=ie[14]/(ie[10]-1),oe=ie[14]/(ie[10]+1),Mt=(ie[9]+1)/ie[5],wt=(ie[9]-1)/ie[5],Rt=(ie[8]-1)/ie[0],Ht=($t[8]+1)/$t[0],Bt=be*Rt,re=be*Ht,Jt=Pt/(-Rt+Ht),ue=Jt*-Rt;if(vt.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(ue),K.translateZ(Jt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),ie[10]===-1)K.projectionMatrix.copy(vt.projectionMatrix),K.projectionMatrixInverse.copy(vt.projectionMatrixInverse);else{const fe=be+Jt,X=oe+Jt,me=Bt-ue,_e=re+(Pt-ue),L=Mt*oe/X*fe,b=wt*oe/X*fe;K.projectionMatrix.makePerspective(me,_e,L,b,fe,X),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function P(K,vt){vt===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(vt.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(l===null)return;let vt=K.near,yt=K.far;M.texture!==null&&(M.depthNear>0&&(vt=M.depthNear),M.depthFar>0&&(yt=M.depthFar)),Z.near=V.near=U.near=vt,Z.far=V.far=U.far=yt,(et!==Z.near||ft!==Z.far)&&(l.updateRenderState({depthNear:Z.near,depthFar:Z.far}),et=Z.near,ft=Z.far),Z.layers.mask=K.layers.mask|6,U.layers.mask=Z.layers.mask&-5,V.layers.mask=Z.layers.mask&-3;const Pt=K.parent,ie=Z.cameras;P(Z,Pt);for(let $t=0;$t<ie.length;$t++)P(ie[$t],Pt);ie.length===2?St(Z,U,V):Z.projectionMatrix.copy(U.projectionMatrix),Q(K,Z,Pt)};function Q(K,vt,yt){yt===null?K.matrix.copy(vt.matrixWorld):(K.matrix.copy(yt.matrixWorld),K.matrix.invert(),K.matrix.multiply(vt.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(vt.projectionMatrix),K.projectionMatrixInverse.copy(vt.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=xl*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(g===null&&x===null))return m},this.setFoveation=function(K){m=K,g!==null&&(g.fixedFoveation=K),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=K)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(Z)},this.getCameraTexture=function(K){return S[K]};let xt=null;function Dt(K,vt){if(_=vt.getViewerPose(p||u),E=vt,_!==null){const yt=_.views;x!==null&&(t.setRenderTargetFramebuffer(A,x.framebuffer),t.setRenderTarget(A));let Pt=!1;yt.length!==Z.cameras.length&&(Z.cameras.length=0,Pt=!0);for(let oe=0;oe<yt.length;oe++){const Mt=yt[oe];let wt=null;if(x!==null)wt=x.getViewport(Mt);else{const Ht=v.getViewSubImage(g,Mt);wt=Ht.viewport,oe===0&&(t.setRenderTargetTextures(A,Ht.colorTexture,Ht.depthStencilTexture),t.setRenderTarget(A))}let Rt=G[oe];Rt===void 0&&(Rt=new gi,Rt.layers.enable(oe),Rt.viewport=new rn,G[oe]=Rt),Rt.matrix.fromArray(Mt.transform.matrix),Rt.matrix.decompose(Rt.position,Rt.quaternion,Rt.scale),Rt.projectionMatrix.fromArray(Mt.projectionMatrix),Rt.projectionMatrixInverse.copy(Rt.projectionMatrix).invert(),Rt.viewport.set(wt.x,wt.y,wt.width,wt.height),oe===0&&(Z.matrix.copy(Rt.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),Pt===!0&&Z.cameras.push(Rt)}const ie=l.enabledFeatures;if(ie&&ie.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&R){v=a.getBinding();const oe=v.getDepthInformation(yt[0]);oe&&oe.isValid&&oe.texture&&M.init(oe,l.renderState)}if(ie&&ie.includes("camera-access")&&R){t.state.unbindTexture(),v=a.getBinding();for(let oe=0;oe<yt.length;oe++){const Mt=yt[oe].camera;if(Mt){let wt=S[Mt];wt||(wt=new Ux,S[Mt]=wt);const Rt=v.getCameraImage(Mt);wt.sourceTexture=Rt}}}}for(let yt=0;yt<z.length;yt++){const Pt=O[yt],ie=z[yt];Pt!==null&&ie!==void 0&&ie.update(Pt,vt,p||u)}xt&&xt(K,vt),vt.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:vt}),E=null}const At=new Wx;At.setAnimationLoop(Dt),this.setAnimationLoop=function(K){xt=K},this.dispose=function(){}}}const _2=new $e,jx=new ve;jx.set(-1,0,0,0,1,0,0,0,1);function x2(r,t){function n(M,S){M.matrixAutoUpdate===!0&&M.updateMatrix(),S.value.copy(M.matrix)}function a(M,S){S.color.getRGB(M.fogColor.value,Vx(r)),S.isFog?(M.fogNear.value=S.near,M.fogFar.value=S.far):S.isFogExp2&&(M.fogDensity.value=S.density)}function l(M,S,B,N,A){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?c(M,S):S.isMeshLambertMaterial?(c(M,S),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(c(M,S),v(M,S)):S.isMeshPhongMaterial?(c(M,S),_(M,S),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(c(M,S),g(M,S),S.isMeshPhysicalMaterial&&x(M,S,A)):S.isMeshMatcapMaterial?(c(M,S),E(M,S)):S.isMeshDepthMaterial?c(M,S):S.isMeshDistanceMaterial?(c(M,S),R(M,S)):S.isMeshNormalMaterial?c(M,S):S.isLineBasicMaterial?(u(M,S),S.isLineDashedMaterial&&d(M,S)):S.isPointsMaterial?m(M,S,B,N):S.isSpriteMaterial?p(M,S):S.isShadowMaterial?(M.color.value.copy(S.color),M.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function c(M,S){M.opacity.value=S.opacity,S.color&&M.diffuse.value.copy(S.color),S.emissive&&M.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(M.map.value=S.map,n(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,n(S.alphaMap,M.alphaMapTransform)),S.bumpMap&&(M.bumpMap.value=S.bumpMap,n(S.bumpMap,M.bumpMapTransform),M.bumpScale.value=S.bumpScale,S.side===ei&&(M.bumpScale.value*=-1)),S.normalMap&&(M.normalMap.value=S.normalMap,n(S.normalMap,M.normalMapTransform),M.normalScale.value.copy(S.normalScale),S.side===ei&&M.normalScale.value.negate()),S.displacementMap&&(M.displacementMap.value=S.displacementMap,n(S.displacementMap,M.displacementMapTransform),M.displacementScale.value=S.displacementScale,M.displacementBias.value=S.displacementBias),S.emissiveMap&&(M.emissiveMap.value=S.emissiveMap,n(S.emissiveMap,M.emissiveMapTransform)),S.specularMap&&(M.specularMap.value=S.specularMap,n(S.specularMap,M.specularMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest);const B=t.get(S),N=B.envMap,A=B.envMapRotation;N&&(M.envMap.value=N,M.envMapRotation.value.setFromMatrix4(_2.makeRotationFromEuler(A)).transpose(),N.isCubeTexture&&N.isRenderTargetTexture===!1&&M.envMapRotation.value.premultiply(jx),M.reflectivity.value=S.reflectivity,M.ior.value=S.ior,M.refractionRatio.value=S.refractionRatio),S.lightMap&&(M.lightMap.value=S.lightMap,M.lightMapIntensity.value=S.lightMapIntensity,n(S.lightMap,M.lightMapTransform)),S.aoMap&&(M.aoMap.value=S.aoMap,M.aoMapIntensity.value=S.aoMapIntensity,n(S.aoMap,M.aoMapTransform))}function u(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,S.map&&(M.map.value=S.map,n(S.map,M.mapTransform))}function d(M,S){M.dashSize.value=S.dashSize,M.totalSize.value=S.dashSize+S.gapSize,M.scale.value=S.scale}function m(M,S,B,N){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.size.value=S.size*B,M.scale.value=N*.5,S.map&&(M.map.value=S.map,n(S.map,M.uvTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,n(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function p(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.rotation.value=S.rotation,S.map&&(M.map.value=S.map,n(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,n(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function _(M,S){M.specular.value.copy(S.specular),M.shininess.value=Math.max(S.shininess,1e-4)}function v(M,S){S.gradientMap&&(M.gradientMap.value=S.gradientMap)}function g(M,S){M.metalness.value=S.metalness,S.metalnessMap&&(M.metalnessMap.value=S.metalnessMap,n(S.metalnessMap,M.metalnessMapTransform)),M.roughness.value=S.roughness,S.roughnessMap&&(M.roughnessMap.value=S.roughnessMap,n(S.roughnessMap,M.roughnessMapTransform)),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)}function x(M,S,B){M.ior.value=S.ior,S.sheen>0&&(M.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),M.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(M.sheenColorMap.value=S.sheenColorMap,n(S.sheenColorMap,M.sheenColorMapTransform)),S.sheenRoughnessMap&&(M.sheenRoughnessMap.value=S.sheenRoughnessMap,n(S.sheenRoughnessMap,M.sheenRoughnessMapTransform))),S.clearcoat>0&&(M.clearcoat.value=S.clearcoat,M.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(M.clearcoatMap.value=S.clearcoatMap,n(S.clearcoatMap,M.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,n(S.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(M.clearcoatNormalMap.value=S.clearcoatNormalMap,n(S.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===ei&&M.clearcoatNormalScale.value.negate())),S.dispersion>0&&(M.dispersion.value=S.dispersion),S.iridescence>0&&(M.iridescence.value=S.iridescence,M.iridescenceIOR.value=S.iridescenceIOR,M.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(M.iridescenceMap.value=S.iridescenceMap,n(S.iridescenceMap,M.iridescenceMapTransform)),S.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=S.iridescenceThicknessMap,n(S.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),S.transmission>0&&(M.transmission.value=S.transmission,M.transmissionSamplerMap.value=B.texture,M.transmissionSamplerSize.value.set(B.width,B.height),S.transmissionMap&&(M.transmissionMap.value=S.transmissionMap,n(S.transmissionMap,M.transmissionMapTransform)),M.thickness.value=S.thickness,S.thicknessMap&&(M.thicknessMap.value=S.thicknessMap,n(S.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=S.attenuationDistance,M.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(M.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(M.anisotropyMap.value=S.anisotropyMap,n(S.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=S.specularIntensity,M.specularColor.value.copy(S.specularColor),S.specularColorMap&&(M.specularColorMap.value=S.specularColorMap,n(S.specularColorMap,M.specularColorMapTransform)),S.specularIntensityMap&&(M.specularIntensityMap.value=S.specularIntensityMap,n(S.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,S){S.matcap&&(M.matcap.value=S.matcap)}function R(M,S){const B=t.get(S).light;M.referencePosition.value.setFromMatrixPosition(B.matrixWorld),M.nearDistance.value=B.shadow.camera.near,M.farDistance.value=B.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:l}}function S2(r,t,n,a){let l={},c={},u=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(A,z){const O=z.program;a.uniformBlockBinding(A,O)}function p(A,z){let O=l[A.id];O===void 0&&(M(A),O=_(A),l[A.id]=O,A.addEventListener("dispose",B));const D=z.program;a.updateUBOMapping(A,D);const T=t.render.frame;c[A.id]!==T&&(g(A),c[A.id]=T)}function _(A){const z=v();A.__bindingPointIndex=z;const O=r.createBuffer(),D=A.__size,T=A.usage;return r.bindBuffer(r.UNIFORM_BUFFER,O),r.bufferData(r.UNIFORM_BUFFER,D,T),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,z,O),O}function v(){for(let A=0;A<d;A++)if(u.indexOf(A)===-1)return u.push(A),A;return Le("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(A){const z=l[A.id],O=A.uniforms,D=A.__cache;r.bindBuffer(r.UNIFORM_BUFFER,z);for(let T=0,U=O.length;T<U;T++){const V=O[T];if(Array.isArray(V))for(let G=0,Z=V.length;G<Z;G++)x(V[G],T,G,D);else x(V,T,0,D)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function x(A,z,O,D){if(R(A,z,O,D)===!0){const T=A.__offset,U=A.value;if(Array.isArray(U)){let V=0;for(let G=0;G<U.length;G++){const Z=U[G],et=S(Z);E(Z,A.__data,V),typeof Z!="number"&&typeof Z!="boolean"&&!Z.isMatrix3&&!ArrayBuffer.isView(Z)&&(V+=et.storage/Float32Array.BYTES_PER_ELEMENT)}}else E(U,A.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,T,A.__data)}}function E(A,z,O){typeof A=="number"||typeof A=="boolean"?z[0]=A:A.isMatrix3?(z[0]=A.elements[0],z[1]=A.elements[1],z[2]=A.elements[2],z[3]=0,z[4]=A.elements[3],z[5]=A.elements[4],z[6]=A.elements[5],z[7]=0,z[8]=A.elements[6],z[9]=A.elements[7],z[10]=A.elements[8],z[11]=0):ArrayBuffer.isView(A)?z.set(new A.constructor(A.buffer,A.byteOffset,z.length)):A.toArray(z,O)}function R(A,z,O,D){const T=A.value,U=z+"_"+O;if(D[U]===void 0)return typeof T=="number"||typeof T=="boolean"?D[U]=T:ArrayBuffer.isView(T)?D[U]=T.slice():D[U]=T.clone(),!0;{const V=D[U];if(typeof T=="number"||typeof T=="boolean"){if(V!==T)return D[U]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(V.equals(T)===!1)return V.copy(T),!0}}return!1}function M(A){const z=A.uniforms;let O=0;const D=16;for(let U=0,V=z.length;U<V;U++){const G=Array.isArray(z[U])?z[U]:[z[U]];for(let Z=0,et=G.length;Z<et;Z++){const ft=G[Z],Y=Array.isArray(ft.value)?ft.value:[ft.value];for(let I=0,F=Y.length;I<F;I++){const tt=Y[I],pt=S(tt),St=O%D,P=St%pt.boundary,Q=St+P;O+=P,Q!==0&&D-Q<pt.storage&&(O+=D-Q),ft.__data=new Float32Array(pt.storage/Float32Array.BYTES_PER_ELEMENT),ft.__offset=O,O+=pt.storage}}}const T=O%D;return T>0&&(O+=D-T),A.__size=O,A.__cache={},this}function S(A){const z={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(z.boundary=4,z.storage=4):A.isVector2?(z.boundary=8,z.storage=8):A.isVector3||A.isColor?(z.boundary=16,z.storage=12):A.isVector4?(z.boundary=16,z.storage=16):A.isMatrix3?(z.boundary=48,z.storage=48):A.isMatrix4?(z.boundary=64,z.storage=64):A.isTexture?de("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(A)?(z.boundary=16,z.storage=A.byteLength):de("WebGLRenderer: Unsupported uniform value type.",A),z}function B(A){const z=A.target;z.removeEventListener("dispose",B);const O=u.indexOf(z.__bindingPointIndex);u.splice(O,1),r.deleteBuffer(l[z.id]),delete l[z.id],delete c[z.id]}function N(){for(const A in l)r.deleteBuffer(l[A]);u=[],l={},c={}}return{bind:m,update:p,dispose:N}}const y2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Zi=null;function M2(){return Zi===null&&(Zi=new CE(y2,16,16,Qs,La),Zi.name="DFG_LUT",Zi.minFilter=Fn,Zi.magFilter=Fn,Zi.wrapS=Da,Zi.wrapT=Da,Zi.generateMipmaps=!1,Zi.needsUpdate=!0),Zi}class E2{constructor(t={}){const{canvas:n=WM(),context:a=null,depth:l=!0,stencil:c=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:g=!1,outputBufferType:x=vi}=t;this.isWebGLRenderer=!0;let E;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=a.getContextAttributes().alpha}else E=u;const R=x,M=new Set([Ip,Bp,zp]),S=new Set([vi,ia,gl,vl,Op,Pp]),B=new Uint32Array(4),N=new Int32Array(4),A=new k;let z=null,O=null;const D=[],T=[];let U=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ta,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const V=this;let G=!1,Z=null,et=null,ft=null,Y=null;this._outputColorSpace=mi;let I=0,F=0,tt=null,pt=-1,St=null;const P=new rn,Q=new rn;let xt=null;const Dt=new Me(0);let At=0,K=n.width,vt=n.height,yt=1,Pt=null,ie=null;const $t=new rn(0,0,K,vt),be=new rn(0,0,K,vt);let oe=!1;const Mt=new Wp;let wt=!1,Rt=!1;const Ht=new $e,Bt=new k,re=new rn,Jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ue=!1;function fe(){return tt===null?yt:1}let X=a;function me(w,J){return n.getContext(w,J)}try{const w={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Up}`),n.addEventListener("webglcontextlost",tn,!1),n.addEventListener("webglcontextrestored",Fe,!1),n.addEventListener("webglcontextcreationerror",ni,!1),X===null){const J="webgl2";if(X=me(J,w),X===null)throw me(J)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(w){throw Le("WebGLRenderer: "+w.message),w}let _e,L,b,j,nt,dt,Ut,Ot,ht,ct,Lt,Wt,Gt,zt,te,ae,pe,q,Nt,gt,Ct,Xt,Tt;function ee(){_e=new MA(X),_e.init(),Ct=new d2(X,_e),L=new pA(X,_e,t,Ct),b=new f2(X,_e),L.reversedDepthBuffer&&g&&b.buffers.depth.setReversed(!0),et=X.createFramebuffer(),ft=X.createFramebuffer(),Y=X.createFramebuffer(),j=new TA(X),nt=new QR,dt=new h2(X,_e,b,nt,L,Ct,j),Ut=new yA(V),Ot=new Cb(X),Xt=new hA(X,Ot),ht=new EA(X,Ot,j,Xt),ct=new RA(X,ht,Ot,Xt,j),q=new AA(X,L,dt),te=new mA(nt),Lt=new JR(V,Ut,_e,L,Xt,te),Wt=new x2(V,nt),Gt=new $R,zt=new s2(_e),pe=new fA(V,Ut,b,ct,E,m),ae=new u2(V,ct,L),Tt=new S2(X,j,L,b),Nt=new dA(X,_e,j),gt=new bA(X,_e,j),j.programs=Lt.programs,V.capabilities=L,V.extensions=_e,V.properties=nt,V.renderLists=Gt,V.shadowMap=ae,V.state=b,V.info=j}ee(),R!==vi&&(U=new CA(R,n.width,n.height,d,l,c));const Zt=new v2(V,X);this.xr=Zt,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const w=_e.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=_e.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return yt},this.setPixelRatio=function(w){w!==void 0&&(yt=w,this.setSize(K,vt,!1))},this.getSize=function(w){return w.set(K,vt)},this.setSize=function(w,J,ot=!0){if(Zt.isPresenting){de("WebGLRenderer: Can't change size while VR device is presenting.");return}K=w,vt=J,n.width=Math.floor(w*yt),n.height=Math.floor(J*yt),ot===!0&&(n.style.width=w+"px",n.style.height=J+"px"),U!==null&&U.setSize(n.width,n.height),this.setViewport(0,0,w,J)},this.getDrawingBufferSize=function(w){return w.set(K*yt,vt*yt).floor()},this.setDrawingBufferSize=function(w,J,ot){K=w,vt=J,yt=ot,n.width=Math.floor(w*ot),n.height=Math.floor(J*ot),this.setViewport(0,0,w,J)},this.setEffects=function(w){if(R===vi){Le("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let J=0;J<w.length;J++)if(w[J].isOutputPass===!0){de("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(P)},this.getViewport=function(w){return w.copy($t)},this.setViewport=function(w,J,ot,st){w.isVector4?$t.set(w.x,w.y,w.z,w.w):$t.set(w,J,ot,st),b.viewport(P.copy($t).multiplyScalar(yt).round())},this.getScissor=function(w){return w.copy(be)},this.setScissor=function(w,J,ot,st){w.isVector4?be.set(w.x,w.y,w.z,w.w):be.set(w,J,ot,st),b.scissor(Q.copy(be).multiplyScalar(yt).round())},this.getScissorTest=function(){return oe},this.setScissorTest=function(w){b.setScissorTest(oe=w)},this.setOpaqueSort=function(w){Pt=w},this.setTransparentSort=function(w){ie=w},this.getClearColor=function(w){return w.copy(pe.getClearColor())},this.setClearColor=function(){pe.setClearColor(...arguments)},this.getClearAlpha=function(){return pe.getClearAlpha()},this.setClearAlpha=function(){pe.setClearAlpha(...arguments)},this.clear=function(w=!0,J=!0,ot=!0){let st=0;if(w){let rt=!1;if(tt!==null){const Vt=tt.texture.format;rt=M.has(Vt)}if(rt){const Vt=tt.texture.type,Yt=S.has(Vt),It=pe.getClearColor(),Qt=pe.getClearAlpha(),Kt=It.r,le=It.g,xe=It.b;Yt?(B[0]=Kt,B[1]=le,B[2]=xe,B[3]=Qt,X.clearBufferuiv(X.COLOR,0,B)):(N[0]=Kt,N[1]=le,N[2]=xe,N[3]=Qt,X.clearBufferiv(X.COLOR,0,N))}else st|=X.COLOR_BUFFER_BIT}J&&(st|=X.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ot&&(st|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),st!==0&&X.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),Z=w},this.dispose=function(){n.removeEventListener("webglcontextlost",tn,!1),n.removeEventListener("webglcontextrestored",Fe,!1),n.removeEventListener("webglcontextcreationerror",ni,!1),pe.dispose(),Gt.dispose(),zt.dispose(),nt.dispose(),Ut.dispose(),ct.dispose(),Xt.dispose(),Tt.dispose(),Lt.dispose(),Zt.dispose(),Zt.removeEventListener("sessionstart",dn),Zt.removeEventListener("sessionend",wn),Zn.stop()};function tn(w){w.preventDefault(),e_("WebGLRenderer: Context Lost."),G=!0}function Fe(){e_("WebGLRenderer: Context Restored."),G=!1;const w=j.autoReset,J=ae.enabled,ot=ae.autoUpdate,st=ae.needsUpdate,rt=ae.type;ee(),j.autoReset=w,ae.enabled=J,ae.autoUpdate=ot,ae.needsUpdate=st,ae.type=rt}function ni(w){Le("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ii(w){const J=w.target;J.removeEventListener("dispose",ii),lo(J)}function lo(w){co(w),nt.remove(w)}function co(w){const J=nt.get(w).programs;J!==void 0&&(J.forEach(function(ot){Lt.releaseProgram(ot)}),w.isShaderMaterial&&Lt.releaseShaderCache(w))}this.renderBufferDirect=function(w,J,ot,st,rt,Vt){J===null&&(J=Jt);const Yt=rt.isMesh&&rt.matrixWorld.determinantAffine()<0,It=Ba(w,J,ot,st,rt);b.setMaterial(st,Yt);let Qt=ot.index,Kt=1;if(st.wireframe===!0){if(Qt=ht.getWireframeAttribute(ot),Qt===void 0)return;Kt=2}const le=ot.drawRange,xe=ot.attributes.position;let se=le.start*Kt,Oe=(le.start+le.count)*Kt;Vt!==null&&(se=Math.max(se,Vt.start*Kt),Oe=Math.min(Oe,(Vt.start+Vt.count)*Kt)),Qt!==null?(se=Math.max(se,0),Oe=Math.min(Oe,Qt.count)):xe!=null&&(se=Math.max(se,0),Oe=Math.min(Oe,xe.count));const en=Oe-se;if(en<0||en===1/0)return;Xt.setup(rt,st,It,ot,Qt);let Ke,He=Nt;if(Qt!==null&&(Ke=Ot.get(Qt),He=gt,He.setIndex(Ke)),rt.isMesh)st.wireframe===!0?(b.setLineWidth(st.wireframeLinewidth*fe()),He.setMode(X.LINES)):He.setMode(X.TRIANGLES);else if(rt.isLine){let Ge=st.linewidth;Ge===void 0&&(Ge=1),b.setLineWidth(Ge*fe()),rt.isLineSegments?He.setMode(X.LINES):rt.isLineLoop?He.setMode(X.LINE_LOOP):He.setMode(X.LINE_STRIP)}else rt.isPoints?He.setMode(X.POINTS):rt.isSprite&&He.setMode(X.TRIANGLES);if(rt.isBatchedMesh)if(_e.get("WEBGL_multi_draw"))He.renderMultiDraw(rt._multiDrawStarts,rt._multiDrawCounts,rt._multiDrawCount);else{const Ge=rt._multiDrawStarts,qt=rt._multiDrawCounts,Pn=rt._multiDrawCount,Ae=Qt?Ot.get(Qt).bytesPerElement:1,Sn=nt.get(st).currentProgram.getUniforms();for(let ai=0;ai<Pn;ai++)Sn.setValue(X,"_gl_DrawID",ai),He.render(Ge[ai]/Ae,qt[ai])}else if(rt.isInstancedMesh)He.renderInstances(se,en,rt.count);else if(ot.isInstancedBufferGeometry){const Ge=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,qt=Math.min(ot.instanceCount,Ge);He.renderInstances(se,en,qt)}else He.render(se,en)};function uo(w,J,ot){w.transparent===!0&&w.side===Ca&&w.forceSinglePass===!1?(w.side=ei,w.needsUpdate=!0,za(w,J,ot),w.side=_s,w.needsUpdate=!0,za(w,J,ot),w.side=Ca):za(w,J,ot)}this.compile=function(w,J,ot=null){ot===null&&(ot=w),O=zt.get(ot),O.init(J),T.push(O),ot.traverseVisible(function(rt){rt.isLight&&rt.layers.test(J.layers)&&(O.pushLight(rt),rt.castShadow&&O.pushShadow(rt))}),w!==ot&&w.traverseVisible(function(rt){rt.isLight&&rt.layers.test(J.layers)&&(O.pushLight(rt),rt.castShadow&&O.pushShadow(rt))}),O.setupLights();const st=new Set;return w.traverse(function(rt){if(!(rt.isMesh||rt.isPoints||rt.isLine||rt.isSprite))return;const Vt=rt.material;if(Vt)if(Array.isArray(Vt))for(let Yt=0;Yt<Vt.length;Yt++){const It=Vt[Yt];uo(It,ot,rt),st.add(It)}else uo(Vt,ot,rt),st.add(Vt)}),O=T.pop(),st},this.compileAsync=function(w,J,ot=null){const st=this.compile(w,J,ot);return new Promise(rt=>{function Vt(){if(st.forEach(function(Yt){nt.get(Yt).currentProgram.isReady()&&st.delete(Yt)}),st.size===0){rt(w);return}setTimeout(Vt,10)}_e.get("KHR_parallel_shader_compile")!==null?Vt():setTimeout(Vt,10)})};let er=null;function Gi(w){er&&er(w)}function dn(){Zn.stop()}function wn(){Zn.start()}const Zn=new Wx;Zn.setAnimationLoop(Gi),typeof self<"u"&&Zn.setContext(self),this.setAnimationLoop=function(w){er=w,Zt.setAnimationLoop(w),w===null?Zn.stop():Zn.start()},Zt.addEventListener("sessionstart",dn),Zt.addEventListener("sessionend",wn),this.render=function(w,J){if(J!==void 0&&J.isCamera!==!0){Le("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;Z!==null&&Z.renderStart(w,J);const ot=Zt.enabled===!0&&Zt.isPresenting===!0,st=U!==null&&(tt===null||ot)&&U.begin(V,tt);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),Zt.enabled===!0&&Zt.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(Zt.cameraAutoUpdate===!0&&Zt.updateCamera(J),J=Zt.getCamera()),w.isScene===!0&&w.onBeforeRender(V,w,J,tt),O=zt.get(w,T.length),O.init(J),O.state.textureUnits=dt.getTextureUnits(),T.push(O),Ht.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),Mt.setFromProjectionMatrix(Ht,ji,J.reversedDepth),Rt=this.localClippingEnabled,wt=te.init(this.clippingPlanes,Rt),z=Gt.get(w,D.length),z.init(),D.push(z),Zt.enabled===!0&&Zt.isPresenting===!0){const Yt=V.xr.getDepthSensingMesh();Yt!==null&&ys(Yt,J,-1/0,V.sortObjects)}ys(w,J,0,V.sortObjects),z.finish(),V.sortObjects===!0&&z.sort(Pt,ie,J.reversedDepth),ue=Zt.enabled===!1||Zt.isPresenting===!1||Zt.hasDepthSensing()===!1,ue&&pe.addToRenderList(z,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),wt===!0&&te.beginShadows();const rt=O.state.shadowsArray;if(ae.render(rt,w,J),wt===!0&&te.endShadows(),(st&&U.hasRenderPass())===!1){const Yt=z.opaque,It=z.transmissive;if(O.setupLights(),J.isArrayCamera){const Qt=J.cameras;if(It.length>0)for(let Kt=0,le=Qt.length;Kt<le;Kt++){const xe=Qt[Kt];Cl(Yt,It,w,xe)}ue&&pe.render(w);for(let Kt=0,le=Qt.length;Kt<le;Kt++){const xe=Qt[Kt];wl(z,w,xe,xe.viewport)}}else It.length>0&&Cl(Yt,It,w,J),ue&&pe.render(w),wl(z,w,J)}tt!==null&&F===0&&(dt.updateMultisampleRenderTarget(tt),dt.updateRenderTargetMipmap(tt)),st&&U.end(V),w.isScene===!0&&w.onAfterRender(V,w,J),Xt.resetDefaultState(),pt=-1,St=null,T.pop(),T.length>0?(O=T[T.length-1],dt.setTextureUnits(O.state.textureUnits),wt===!0&&te.setGlobalState(V.clippingPlanes,O.state.camera)):O=null,D.pop(),D.length>0?z=D[D.length-1]:z=null,Z!==null&&Z.renderEnd()};function ys(w,J,ot,st){if(w.visible===!1)return;if(w.layers.test(J.layers)){if(w.isGroup)ot=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(J);else if(w.isLightProbeGrid)O.pushLightProbeGrid(w);else if(w.isLight)O.pushLight(w),w.castShadow&&O.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Mt.intersectsSprite(w)){st&&re.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Ht);const Yt=ct.update(w),It=w.material;It.visible&&z.push(w,Yt,It,ot,re.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Mt.intersectsObject(w))){const Yt=ct.update(w),It=w.material;if(st&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),re.copy(w.boundingSphere.center)):(Yt.boundingSphere===null&&Yt.computeBoundingSphere(),re.copy(Yt.boundingSphere.center)),re.applyMatrix4(w.matrixWorld).applyMatrix4(Ht)),Array.isArray(It)){const Qt=Yt.groups;for(let Kt=0,le=Qt.length;Kt<le;Kt++){const xe=Qt[Kt],se=It[xe.materialIndex];se&&se.visible&&z.push(w,Yt,se,ot,re.z,xe)}}else It.visible&&z.push(w,Yt,It,ot,re.z,null)}}const Vt=w.children;for(let Yt=0,It=Vt.length;Yt<It;Yt++)ys(Vt[Yt],J,ot,st)}function wl(w,J,ot,st){const{opaque:rt,transmissive:Vt,transparent:Yt}=w;O.setupLightsView(ot),wt===!0&&te.setGlobalState(V.clippingPlanes,ot),st&&b.viewport(P.copy(st)),rt.length>0&&Ms(rt,J,ot),Vt.length>0&&Ms(Vt,J,ot),Yt.length>0&&Ms(Yt,J,ot),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function Cl(w,J,ot,st){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;if(O.state.transmissionRenderTarget[st.id]===void 0){const se=_e.has("EXT_color_buffer_half_float")||_e.has("EXT_color_buffer_float");O.state.transmissionRenderTarget[st.id]=new ea(1,1,{generateMipmaps:!0,type:se?La:vi,minFilter:Zs,samples:Math.max(4,L.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ne.workingColorSpace})}const Vt=O.state.transmissionRenderTarget[st.id],Yt=st.viewport||P;Vt.setSize(Yt.z*V.transmissionResolutionScale,Yt.w*V.transmissionResolutionScale);const It=V.getRenderTarget(),Qt=V.getActiveCubeFace(),Kt=V.getActiveMipmapLevel();V.setRenderTarget(Vt),V.getClearColor(Dt),At=V.getClearAlpha(),At<1&&V.setClearColor(16777215,.5),V.clear(),ue&&pe.render(ot);const le=V.toneMapping;V.toneMapping=ta;const xe=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),O.setupLightsView(st),wt===!0&&te.setGlobalState(V.clippingPlanes,st),Ms(w,ot,st),dt.updateMultisampleRenderTarget(Vt),dt.updateRenderTargetMipmap(Vt),_e.has("WEBGL_multisampled_render_to_texture")===!1){let se=!1;for(let Oe=0,en=J.length;Oe<en;Oe++){const Ke=J[Oe],{object:He,geometry:Ge,material:qt,group:Pn}=Ke;if(qt.side===Ca&&He.layers.test(st.layers)){const Ae=qt.side;qt.side=ei,qt.needsUpdate=!0,Pa(He,ot,st,Ge,qt,Pn),qt.side=Ae,qt.needsUpdate=!0,se=!0}}se===!0&&(dt.updateMultisampleRenderTarget(Vt),dt.updateRenderTargetMipmap(Vt))}V.setRenderTarget(It,Qt,Kt),V.setClearColor(Dt,At),xe!==void 0&&(st.viewport=xe),V.toneMapping=le}function Ms(w,J,ot){const st=J.isScene===!0?J.overrideMaterial:null;for(let rt=0,Vt=w.length;rt<Vt;rt++){const Yt=w[rt],{object:It,geometry:Qt,group:Kt}=Yt;let le=Yt.material;le.allowOverride===!0&&st!==null&&(le=st),It.layers.test(ot.layers)&&Pa(It,J,ot,Qt,le,Kt)}}function Pa(w,J,ot,st,rt,Vt){w.onBeforeRender(V,J,ot,st,rt,Vt),w.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),rt.onBeforeRender(V,J,ot,st,w,Vt),rt.transparent===!0&&rt.side===Ca&&rt.forceSinglePass===!1?(rt.side=ei,rt.needsUpdate=!0,V.renderBufferDirect(ot,J,st,rt,w,Vt),rt.side=_s,rt.needsUpdate=!0,V.renderBufferDirect(ot,J,st,rt,w,Vt),rt.side=Ca):V.renderBufferDirect(ot,J,st,rt,w,Vt),w.onAfterRender(V,J,ot,st,rt,Vt)}function za(w,J,ot){J.isScene!==!0&&(J=Jt);const st=nt.get(w),rt=O.state.lights,Vt=O.state.shadowsArray,Yt=rt.state.version,It=Lt.getParameters(w,rt.state,Vt,J,ot,O.state.lightProbeGridArray),Qt=Lt.getProgramCacheKey(It);let Kt=st.programs;st.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?J.environment:null,st.fog=J.fog;const le=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;st.envMap=Ut.get(w.envMap||st.environment,le),st.envMapRotation=st.environment!==null&&w.envMap===null?J.environmentRotation:w.envMapRotation,Kt===void 0&&(w.addEventListener("dispose",ii),Kt=new Map,st.programs=Kt);let xe=Kt.get(Qt);if(xe!==void 0){if(st.currentProgram===xe&&st.lightsStateVersion===Yt)return ra(w,It),xe}else It.uniforms=Lt.getUniforms(w),Z!==null&&w.isNodeMaterial&&Z.build(w,ot,It),w.onBeforeCompile(It,V),xe=Lt.acquireProgram(It,Qt),Kt.set(Qt,xe),st.uniforms=It.uniforms;const se=st.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(se.clippingPlanes=te.uniform),ra(w,It),st.needsLights=Dl(w),st.lightsStateVersion=Yt,st.needsLights&&(se.ambientLightColor.value=rt.state.ambient,se.lightProbe.value=rt.state.probe,se.directionalLights.value=rt.state.directional,se.directionalLightShadows.value=rt.state.directionalShadow,se.spotLights.value=rt.state.spot,se.spotLightShadows.value=rt.state.spotShadow,se.rectAreaLights.value=rt.state.rectArea,se.ltc_1.value=rt.state.rectAreaLTC1,se.ltc_2.value=rt.state.rectAreaLTC2,se.pointLights.value=rt.state.point,se.pointLightShadows.value=rt.state.pointShadow,se.hemisphereLights.value=rt.state.hemi,se.directionalShadowMatrix.value=rt.state.directionalShadowMatrix,se.spotLightMatrix.value=rt.state.spotLightMatrix,se.spotLightMap.value=rt.state.spotLightMap,se.pointShadowMatrix.value=rt.state.pointShadowMatrix),st.lightProbeGrid=O.state.lightProbeGridArray.length>0,st.currentProgram=xe,st.uniformsList=null,xe}function sa(w){if(w.uniformsList===null){const J=w.currentProgram.getUniforms();w.uniformsList=Mu.seqWithValue(J.seq,w.uniforms)}return w.uniformsList}function ra(w,J){const ot=nt.get(w);ot.outputColorSpace=J.outputColorSpace,ot.batching=J.batching,ot.batchingColor=J.batchingColor,ot.instancing=J.instancing,ot.instancingColor=J.instancingColor,ot.instancingMorph=J.instancingMorph,ot.skinning=J.skinning,ot.morphTargets=J.morphTargets,ot.morphNormals=J.morphNormals,ot.morphColors=J.morphColors,ot.morphTargetsCount=J.morphTargetsCount,ot.numClippingPlanes=J.numClippingPlanes,ot.numIntersection=J.numClipIntersection,ot.vertexAlphas=J.vertexAlphas,ot.vertexTangents=J.vertexTangents,ot.toneMapping=J.toneMapping}function Es(w,J){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;A.setFromMatrixPosition(J.matrixWorld);for(let ot=0,st=w.length;ot<st;ot++){const rt=w[ot];if(rt.texture!==null&&rt.boundingBox.containsPoint(A))return rt}return null}function Ba(w,J,ot,st,rt){J.isScene!==!0&&(J=Jt),dt.resetTextureUnits();const Vt=J.fog,Yt=st.isMeshStandardMaterial||st.isMeshLambertMaterial||st.isMeshPhongMaterial?J.environment:null,It=tt===null?V.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:Ne.workingColorSpace,Qt=st.isMeshStandardMaterial||st.isMeshLambertMaterial&&!st.envMap||st.isMeshPhongMaterial&&!st.envMap,Kt=Ut.get(st.envMap||Yt,Qt),le=st.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,xe=!!ot.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),se=!!ot.morphAttributes.position,Oe=!!ot.morphAttributes.normal,en=!!ot.morphAttributes.color;let Ke=ta;st.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(Ke=V.toneMapping);const He=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,Ge=He!==void 0?He.length:0,qt=nt.get(st),Pn=O.state.lights;if(wt===!0&&(Rt===!0||w!==St)){const Ie=w===St&&st.id===pt;te.setState(st,w,Ie)}let Ae=!1;st.version===qt.__version?(qt.needsLights&&qt.lightsStateVersion!==Pn.state.version||qt.outputColorSpace!==It||rt.isBatchedMesh&&qt.batching===!1||!rt.isBatchedMesh&&qt.batching===!0||rt.isBatchedMesh&&qt.batchingColor===!0&&rt.colorTexture===null||rt.isBatchedMesh&&qt.batchingColor===!1&&rt.colorTexture!==null||rt.isInstancedMesh&&qt.instancing===!1||!rt.isInstancedMesh&&qt.instancing===!0||rt.isSkinnedMesh&&qt.skinning===!1||!rt.isSkinnedMesh&&qt.skinning===!0||rt.isInstancedMesh&&qt.instancingColor===!0&&rt.instanceColor===null||rt.isInstancedMesh&&qt.instancingColor===!1&&rt.instanceColor!==null||rt.isInstancedMesh&&qt.instancingMorph===!0&&rt.morphTexture===null||rt.isInstancedMesh&&qt.instancingMorph===!1&&rt.morphTexture!==null||qt.envMap!==Kt||st.fog===!0&&qt.fog!==Vt||qt.numClippingPlanes!==void 0&&(qt.numClippingPlanes!==te.numPlanes||qt.numIntersection!==te.numIntersection)||qt.vertexAlphas!==le||qt.vertexTangents!==xe||qt.morphTargets!==se||qt.morphNormals!==Oe||qt.morphColors!==en||qt.toneMapping!==Ke||qt.morphTargetsCount!==Ge||!!qt.lightProbeGrid!=O.state.lightProbeGridArray.length>0)&&(Ae=!0):(Ae=!0,qt.__version=st.version);let Sn=qt.currentProgram;Ae===!0&&(Sn=za(st,J,rt),Z&&st.isNodeMaterial&&Z.onUpdateProgram(st,Sn,qt));let ai=!1,Ci=!1,si=!1;const Ve=Sn.getUniforms(),nn=qt.uniforms;if(b.useProgram(Sn.program)&&(ai=!0,Ci=!0,si=!0),st.id!==pt&&(pt=st.id,Ci=!0),qt.needsLights){const Ie=Es(O.state.lightProbeGridArray,rt);qt.lightProbeGrid!==Ie&&(qt.lightProbeGrid=Ie,Ci=!0)}if(ai||St!==w){b.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Ve.setValue(X,"projectionMatrix",w.projectionMatrix),Ve.setValue(X,"viewMatrix",w.matrixWorldInverse);const Vi=Ve.map.cameraPosition;Vi!==void 0&&Vi.setValue(X,Bt.setFromMatrixPosition(w.matrixWorld)),L.logarithmicDepthBuffer&&Ve.setValue(X,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&Ve.setValue(X,"isOrthographic",w.isOrthographicCamera===!0),St!==w&&(St=w,Ci=!0,si=!0)}if(qt.needsLights&&(Pn.state.directionalShadowMap.length>0&&Ve.setValue(X,"directionalShadowMap",Pn.state.directionalShadowMap,dt),Pn.state.spotShadowMap.length>0&&Ve.setValue(X,"spotShadowMap",Pn.state.spotShadowMap,dt),Pn.state.pointShadowMap.length>0&&Ve.setValue(X,"pointShadowMap",Pn.state.pointShadowMap,dt)),rt.isSkinnedMesh){Ve.setOptional(X,rt,"bindMatrix"),Ve.setOptional(X,rt,"bindMatrixInverse");const Ie=rt.skeleton;Ie&&(Ie.boneTexture===null&&Ie.computeBoneTexture(),Ve.setValue(X,"boneTexture",Ie.boneTexture,dt))}rt.isBatchedMesh&&(Ve.setOptional(X,rt,"batchingTexture"),Ve.setValue(X,"batchingTexture",rt._matricesTexture,dt),Ve.setOptional(X,rt,"batchingIdTexture"),Ve.setValue(X,"batchingIdTexture",rt._indirectTexture,dt),Ve.setOptional(X,rt,"batchingColorTexture"),rt._colorsTexture!==null&&Ve.setValue(X,"batchingColorTexture",rt._colorsTexture,dt));const Di=ot.morphAttributes;if((Di.position!==void 0||Di.normal!==void 0||Di.color!==void 0)&&q.update(rt,ot,Sn),(Ci||qt.receiveShadow!==rt.receiveShadow)&&(qt.receiveShadow=rt.receiveShadow,Ve.setValue(X,"receiveShadow",rt.receiveShadow)),(st.isMeshStandardMaterial||st.isMeshLambertMaterial||st.isMeshPhongMaterial)&&st.envMap===null&&J.environment!==null&&(nn.envMapIntensity.value=J.environmentIntensity),nn.dfgLUT!==void 0&&(nn.dfgLUT.value=M2()),Ci){if(Ve.setValue(X,"toneMappingExposure",V.toneMappingExposure),qt.needsLights&&pn(nn,si),Vt&&st.fog===!0&&Wt.refreshFogUniforms(nn,Vt),Wt.refreshMaterialUniforms(nn,st,yt,vt,O.state.transmissionRenderTarget[w.id]),qt.needsLights&&qt.lightProbeGrid){const Ie=qt.lightProbeGrid;nn.probesSH.value=Ie.texture,nn.probesMin.value.copy(Ie.boundingBox.min),nn.probesMax.value.copy(Ie.boundingBox.max),nn.probesResolution.value.copy(Ie.resolution)}Mu.upload(X,sa(qt),nn,dt)}if(st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(Mu.upload(X,sa(qt),nn,dt),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&Ve.setValue(X,"center",rt.center),Ve.setValue(X,"modelViewMatrix",rt.modelViewMatrix),Ve.setValue(X,"normalMatrix",rt.normalMatrix),Ve.setValue(X,"modelMatrix",rt.matrixWorld),st.uniformsGroups!==void 0){const Ie=st.uniformsGroups;for(let Vi=0,Ia=Ie.length;Vi<Ia;Vi++){const bs=Ie[Vi];Tt.update(bs,Sn),Tt.bind(bs,Sn)}}return Sn}function pn(w,J){w.ambientLightColor.needsUpdate=J,w.lightProbe.needsUpdate=J,w.directionalLights.needsUpdate=J,w.directionalLightShadows.needsUpdate=J,w.pointLights.needsUpdate=J,w.pointLightShadows.needsUpdate=J,w.spotLights.needsUpdate=J,w.spotLightShadows.needsUpdate=J,w.rectAreaLights.needsUpdate=J,w.hemisphereLights.needsUpdate=J}function Dl(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return tt},this.setRenderTargetTextures=function(w,J,ot){const st=nt.get(w);st.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,st.__autoAllocateDepthBuffer===!1&&(st.__useRenderToTexture=!1),nt.get(w.texture).__webglTexture=J,nt.get(w.depthTexture).__webglTexture=st.__autoAllocateDepthBuffer?void 0:ot,st.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,J){const ot=nt.get(w);ot.__webglFramebuffer=J,ot.__useDefaultFramebuffer=J===void 0},this.setRenderTarget=function(w,J=0,ot=0){tt=w,I=J,F=ot;let st=null,rt=!1,Vt=!1;if(w){const It=nt.get(w);if(It.__useDefaultFramebuffer!==void 0){b.bindFramebuffer(X.FRAMEBUFFER,It.__webglFramebuffer),P.copy(w.viewport),Q.copy(w.scissor),xt=w.scissorTest,b.viewport(P),b.scissor(Q),b.setScissorTest(xt),pt=-1;return}else if(It.__webglFramebuffer===void 0)dt.setupRenderTarget(w);else if(It.__hasExternalTextures)dt.rebindTextures(w,nt.get(w.texture).__webglTexture,nt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const le=w.depthTexture;if(It.__boundDepthTexture!==le){if(le!==null&&nt.has(le)&&(w.width!==le.image.width||w.height!==le.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");dt.setupDepthRenderbuffer(w)}}const Qt=w.texture;(Qt.isData3DTexture||Qt.isDataArrayTexture||Qt.isCompressedArrayTexture)&&(Vt=!0);const Kt=nt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Kt[J])?st=Kt[J][ot]:st=Kt[J],rt=!0):w.samples>0&&dt.useMultisampledRTT(w)===!1?st=nt.get(w).__webglMultisampledFramebuffer:Array.isArray(Kt)?st=Kt[ot]:st=Kt,P.copy(w.viewport),Q.copy(w.scissor),xt=w.scissorTest}else P.copy($t).multiplyScalar(yt).floor(),Q.copy(be).multiplyScalar(yt).floor(),xt=oe;if(ot!==0&&(st=et),b.bindFramebuffer(X.FRAMEBUFFER,st)&&b.drawBuffers(w,st),b.viewport(P),b.scissor(Q),b.setScissorTest(xt),rt){const It=nt.get(w.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+J,It.__webglTexture,ot)}else if(Vt){const It=J;for(let Qt=0;Qt<w.textures.length;Qt++){const Kt=nt.get(w.textures[Qt]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+Qt,Kt.__webglTexture,ot,It)}}else if(w!==null&&ot!==0){const It=nt.get(w.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,It.__webglTexture,ot)}pt=-1},this.readRenderTargetPixels=function(w,J,ot,st,rt,Vt,Yt,It=0){if(!(w&&w.isWebGLRenderTarget)){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Qt=nt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Yt!==void 0&&(Qt=Qt[Yt]),Qt){b.bindFramebuffer(X.FRAMEBUFFER,Qt);try{const Kt=w.textures[It],le=Kt.format,xe=Kt.type;if(w.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+It),!L.textureFormatReadable(le)){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!L.textureTypeReadable(xe)){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=w.width-st&&ot>=0&&ot<=w.height-rt&&X.readPixels(J,ot,st,rt,Ct.convert(le),Ct.convert(xe),Vt)}finally{const Kt=tt!==null?nt.get(tt).__webglFramebuffer:null;b.bindFramebuffer(X.FRAMEBUFFER,Kt)}}},this.readRenderTargetPixelsAsync=async function(w,J,ot,st,rt,Vt,Yt,It=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Qt=nt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Yt!==void 0&&(Qt=Qt[Yt]),Qt)if(J>=0&&J<=w.width-st&&ot>=0&&ot<=w.height-rt){b.bindFramebuffer(X.FRAMEBUFFER,Qt);const Kt=w.textures[It],le=Kt.format,xe=Kt.type;if(w.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+It),!L.textureFormatReadable(le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!L.textureTypeReadable(xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const se=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,se),X.bufferData(X.PIXEL_PACK_BUFFER,Vt.byteLength,X.STREAM_READ),X.readPixels(J,ot,st,rt,Ct.convert(le),Ct.convert(xe),0);const Oe=tt!==null?nt.get(tt).__webglFramebuffer:null;b.bindFramebuffer(X.FRAMEBUFFER,Oe);const en=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await qM(X,en,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,se),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Vt),X.deleteBuffer(se),X.deleteSync(en),Vt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,J=null,ot=0){const st=Math.pow(2,-ot),rt=Math.floor(w.image.width*st),Vt=Math.floor(w.image.height*st),Yt=J!==null?J.x:0,It=J!==null?J.y:0;dt.setTexture2D(w,0),X.copyTexSubImage2D(X.TEXTURE_2D,ot,0,0,Yt,It,rt,Vt),b.unbindTexture()},this.copyTextureToTexture=function(w,J,ot=null,st=null,rt=0,Vt=0){let Yt,It,Qt,Kt,le,xe,se,Oe,en;const Ke=w.isCompressedTexture?w.mipmaps[Vt]:w.image;if(ot!==null)Yt=ot.max.x-ot.min.x,It=ot.max.y-ot.min.y,Qt=ot.isBox3?ot.max.z-ot.min.z:1,Kt=ot.min.x,le=ot.min.y,xe=ot.isBox3?ot.min.z:0;else{const nn=Math.pow(2,-rt);Yt=Math.floor(Ke.width*nn),It=Math.floor(Ke.height*nn),w.isDataArrayTexture?Qt=Ke.depth:w.isData3DTexture?Qt=Math.floor(Ke.depth*nn):Qt=1,Kt=0,le=0,xe=0}st!==null?(se=st.x,Oe=st.y,en=st.z):(se=0,Oe=0,en=0);const He=Ct.convert(J.format),Ge=Ct.convert(J.type);let qt;J.isData3DTexture?(dt.setTexture3D(J,0),qt=X.TEXTURE_3D):J.isDataArrayTexture||J.isCompressedArrayTexture?(dt.setTexture2DArray(J,0),qt=X.TEXTURE_2D_ARRAY):(dt.setTexture2D(J,0),qt=X.TEXTURE_2D),b.activeTexture(X.TEXTURE0),b.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,J.flipY),b.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),b.pixelStorei(X.UNPACK_ALIGNMENT,J.unpackAlignment);const Pn=b.getParameter(X.UNPACK_ROW_LENGTH),Ae=b.getParameter(X.UNPACK_IMAGE_HEIGHT),Sn=b.getParameter(X.UNPACK_SKIP_PIXELS),ai=b.getParameter(X.UNPACK_SKIP_ROWS),Ci=b.getParameter(X.UNPACK_SKIP_IMAGES);b.pixelStorei(X.UNPACK_ROW_LENGTH,Ke.width),b.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Ke.height),b.pixelStorei(X.UNPACK_SKIP_PIXELS,Kt),b.pixelStorei(X.UNPACK_SKIP_ROWS,le),b.pixelStorei(X.UNPACK_SKIP_IMAGES,xe);const si=w.isDataArrayTexture||w.isData3DTexture,Ve=J.isDataArrayTexture||J.isData3DTexture;if(w.isDepthTexture){const nn=nt.get(w),Di=nt.get(J),Ie=nt.get(nn.__renderTarget),Vi=nt.get(Di.__renderTarget);b.bindFramebuffer(X.READ_FRAMEBUFFER,Ie.__webglFramebuffer),b.bindFramebuffer(X.DRAW_FRAMEBUFFER,Vi.__webglFramebuffer);for(let Ia=0;Ia<Qt;Ia++)si&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,nt.get(w).__webglTexture,rt,xe+Ia),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,nt.get(J).__webglTexture,Vt,en+Ia)),X.blitFramebuffer(Kt,le,Yt,It,se,Oe,Yt,It,X.DEPTH_BUFFER_BIT,X.NEAREST);b.bindFramebuffer(X.READ_FRAMEBUFFER,null),b.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(rt!==0||w.isRenderTargetTexture||nt.has(w)){const nn=nt.get(w),Di=nt.get(J);b.bindFramebuffer(X.READ_FRAMEBUFFER,ft),b.bindFramebuffer(X.DRAW_FRAMEBUFFER,Y);for(let Ie=0;Ie<Qt;Ie++)si?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,nn.__webglTexture,rt,xe+Ie):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,nn.__webglTexture,rt),Ve?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Di.__webglTexture,Vt,en+Ie):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Di.__webglTexture,Vt),rt!==0?X.blitFramebuffer(Kt,le,Yt,It,se,Oe,Yt,It,X.COLOR_BUFFER_BIT,X.NEAREST):Ve?X.copyTexSubImage3D(qt,Vt,se,Oe,en+Ie,Kt,le,Yt,It):X.copyTexSubImage2D(qt,Vt,se,Oe,Kt,le,Yt,It);b.bindFramebuffer(X.READ_FRAMEBUFFER,null),b.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Ve?w.isDataTexture||w.isData3DTexture?X.texSubImage3D(qt,Vt,se,Oe,en,Yt,It,Qt,He,Ge,Ke.data):J.isCompressedArrayTexture?X.compressedTexSubImage3D(qt,Vt,se,Oe,en,Yt,It,Qt,He,Ke.data):X.texSubImage3D(qt,Vt,se,Oe,en,Yt,It,Qt,He,Ge,Ke):w.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Vt,se,Oe,Yt,It,He,Ge,Ke.data):w.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Vt,se,Oe,Ke.width,Ke.height,He,Ke.data):X.texSubImage2D(X.TEXTURE_2D,Vt,se,Oe,Yt,It,He,Ge,Ke);b.pixelStorei(X.UNPACK_ROW_LENGTH,Pn),b.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Ae),b.pixelStorei(X.UNPACK_SKIP_PIXELS,Sn),b.pixelStorei(X.UNPACK_SKIP_ROWS,ai),b.pixelStorei(X.UNPACK_SKIP_IMAGES,Ci),Vt===0&&J.generateMipmaps&&X.generateMipmap(qt),b.unbindTexture()},this.initRenderTarget=function(w){nt.get(w).__webglFramebuffer===void 0&&dt.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?dt.setTextureCube(w,0):w.isData3DTexture?dt.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?dt.setTexture2DArray(w,0):dt.setTexture2D(w,0),b.unbindTexture()},this.resetState=function(){I=0,F=0,tt=null,b.reset(),Xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=Ne._getDrawingBufferColorSpace(t),n.unpackColorSpace=Ne._getUnpackColorSpace()}}const ll=new k;function Ri(r,t,n,a,l,c){const u=2*Math.PI*l/4,d=Math.max(c-2*l,0),m=Math.PI/4;ll.copy(t),ll[a]=0,ll.normalize();const p=.5*u/(u+d),_=1-ll.angleTo(r)/m;return Math.sign(ll[n])===1?_*p:d/(u+d)+p+p*(1-_)}class Yn extends ro{constructor(t=1,n=1,a=1,l=2,c=.1){const u=l*2+1;if(c=Math.min(t/2,n/2,a/2,c),super(1,1,1,u,u,u),this.type="RoundedBoxGeometry",this.parameters={width:t,height:n,depth:a,segments:l,radius:c},u===1)return;const d=this.toNonIndexed();this.index=null,this.attributes.position=d.attributes.position,this.attributes.normal=d.attributes.normal,this.attributes.uv=d.attributes.uv;const m=new k,p=new k,_=new k(t,n,a).divideScalar(2).subScalar(c),v=this.attributes.position.array,g=this.attributes.normal.array,x=this.attributes.uv.array,E=v.length/6,R=new k,M=.5/u;for(let S=0,B=0;S<v.length;S+=3,B+=2)switch(m.fromArray(v,S),p.copy(m),p.x-=Math.sign(p.x)*M,p.y-=Math.sign(p.y)*M,p.z-=Math.sign(p.z)*M,p.normalize(),v[S+0]=_.x*Math.sign(m.x)+p.x*c,v[S+1]=_.y*Math.sign(m.y)+p.y*c,v[S+2]=_.z*Math.sign(m.z)+p.z*c,g[S+0]=p.x,g[S+1]=p.y,g[S+2]=p.z,Math.floor(S/E)){case 0:R.set(1,0,0),x[B+0]=Ri(R,p,"z","y",c,a),x[B+1]=1-Ri(R,p,"y","z",c,n);break;case 1:R.set(-1,0,0),x[B+0]=1-Ri(R,p,"z","y",c,a),x[B+1]=1-Ri(R,p,"y","z",c,n);break;case 2:R.set(0,1,0),x[B+0]=1-Ri(R,p,"x","z",c,t),x[B+1]=Ri(R,p,"z","x",c,a);break;case 3:R.set(0,-1,0),x[B+0]=1-Ri(R,p,"x","z",c,t),x[B+1]=1-Ri(R,p,"z","x",c,a);break;case 4:R.set(0,0,1),x[B+0]=1-Ri(R,p,"x","y",c,t),x[B+1]=1-Ri(R,p,"y","x",c,n);break;case 5:R.set(0,0,-1),x[B+0]=Ri(R,p,"x","y",c,t),x[B+1]=1-Ri(R,p,"y","x",c,n);break}}static fromJSON(t){return new Yn(t.width,t.height,t.depth,t.segments,t.radius)}}const Ii=4.2,$i=2.8,wp=.06,Uu={cyan:new Me("#45dee7"),clip:new Me("#12c7df"),dim:new Me("#05090b")},Hn={slab:{fill:"#17252b",wire:"#86b7c2"},adhesive:{fill:"#271d36",wire:"#c29bff"},biofaser:{fill:"#4b3414",wire:"#ffc86a"},edgeStrip:{fill:"#073d56",wire:"#67e9ff"},clips:{fill:"#075a70",wire:"#72f3ff"},pipe:{fill:"#081823"},dryScreed:{fill:"#1e3435",wire:"#9be3cf"},finishWood:{fill:"#5d2c1f",wire:"#ff9d66"},finishStone:{fill:"#27313f",wire:"#9aacff"},finishDesign:{fill:"#51542c",wire:"#e7f174"}},cl=[{key:"finish",baseY:.42,explodeOffset:2.05,assemblyOrder:7},{key:"dryScreed",baseY:.17,explodeOffset:1.36,assemblyOrder:6},{key:"pipe",baseY:-.02,explodeOffset:.68,assemblyOrder:5},{key:"clips",baseY:-.02,explodeOffset:.32,assemblyOrder:4},{key:"edgeStrip",baseY:-.238,explodeOffset:-.04,assemblyOrder:3},{key:"biofaser",baseY:-.28,explodeOffset:-.46,assemblyOrder:2},{key:"adhesive",baseY:-.34,explodeOffset:-.98,assemblyOrder:1},{key:"slab",baseY:-.61,explodeOffset:-1.5,assemblyOrder:0}],b2=r=>gs.clamp(r,0,1),Nd=(r,t,n)=>{const a=b2((n-r)/(t-r));return a*a*(3-2*a)},Vn=(r,t,n,a)=>gs.lerp(r,t,1-Math.exp(-n*a));function T2(r=9047){let t=r>>>0;return()=>(t=Math.imul(t,1664525)+1013904223>>>0,t/4294967296)}function na(r,t,{fill:n,wire:a}){const l=new $p({color:n,emissive:"#000000",emissiveIntensity:0,roughness:.64,metalness:.08,flatShading:!0}),c=new On(t,l);c.castShadow=!0,c.receiveShadow=!0,r.add(c);const u=new On(t,new Al({color:a,wireframe:!0,toneMapped:!1}));u.renderOrder=2,c.add(u);const d=new LE(new zE(t,28),new qp({color:a,toneMapped:!1}));return d.renderOrder=3,c.add(d),c}function A2(r,t){const n=new On(r.geometry,t);return n.renderOrder=2,r.add(n),r}function R2(){const r=new Wn;return na(r,new Yn(Ii+.1,.42,$i+.1,4,.07),Hn.slab),r}function w2(){const r=new Wn;na(r,new Yn(Ii,.085,$i,3,.025),Hn.adhesive);for(let t=0;t<12;t+=1)na(r,new Yn(1.62,.035,.022,2,.007),Hn.adhesive).position.set(-1.08,.055,-1.02+t*.17);return r}function C2(){const r=new Wn,t=new Bx,n=Ii/2,a=$i/2;t.moveTo(-n,-a),t.lineTo(n,-a),t.lineTo(n,a),t.lineTo(-n,a),t.lineTo(-n,-a);const l=.35,c=12,u=8,d=.052;for(let _=0;_<c;_+=1)for(let v=0;v<u;v+=1){const g=new Ep,x=(_-(c-1)/2)*l,E=(v-(u-1)/2)*l;g.absarc(x,E,d,0,Math.PI*2,!1),t.holes.push(g)}const m=.035,p=new Qp(t,{depth:m,steps:1,curveSegments:10,bevelEnabled:!0,bevelSegments:2,bevelSize:.004,bevelThickness:.003});return p.rotateX(Math.PI/2),p.translate(0,m/2,0),p.computeVertexNormals(),na(r,p,Hn.biofaser),r.userData={spacingCm:5,thicknessMm:5,holeCount:c*u},r}function D2(){const r=new Wn;return na(r,new Yn(Ii+.08,.48,.06,5,.018),Hn.edgeStrip).position.set(0,.18,-$i/2-.014),na(r,new Yn(.06,.48,$i,5,.018),Hn.edgeStrip).position.set(-Ii/2-.014,.18,0),na(r,new Yn(.07,.485,.07,4,.019),Hn.edgeStrip).position.set(-Ii/2-.014,.18,-$i/2-.014),r.userData={component:"Randdämmstreifen"},r}function U2(){const r=new Wn,t=na(r,new Yn(Ii-.06,.19,1.5,4,.055),Hn.dryScreed);t.position.z=-.63,na(r,new Yn(2.5,.19,1.2,4,.055),Hn.dryScreed).position.set(.78,0,.76);const a=new On(new Yn(.035,.015,1.12,2,.006),new Al({color:Hn.dryScreed.wire,toneMapped:!1}));return a.position.set(-.46,.103,.76),r.add(a),r}function N2(){const r=new Wn;return[{x:-1.28,z:-.58,width:1.35,depth:.62,palette:Hn.finishWood},{x:.12,z:-.1,width:1.28,depth:.65,palette:Hn.finishStone},{x:1.2,z:.61,width:1.42,depth:.58,palette:Hn.finishDesign}].forEach(({x:n,z:a,width:l,depth:c,palette:u})=>{na(r,new Yn(l,.12,c,4,.035),u).position.set(n,0,a)}),r}function L2(){const r=[];for(let m=0;m<7;m+=1){const p=-1.02+.34*m,_=m%2===0?-1.72:1.68,v=m%2===0?1.68:-1.72;for(let g=m===0?0:1;g<=20;g+=1)r.push(new k(gs.lerp(_,v,g/20),0,p));if(m<6){const g=m%2===0?1:-1,x=p+.34/2;for(let E=1;E<=14;E+=1){const R=-Math.PI/2+Math.PI*E/14;r.push(new k(v+g*.17*Math.cos(R),0,x+.17*Math.sin(R)))}}}return new Jp(r,!1,"centripetal",.42)}function O2(){const r=new Wn,t=new $p({color:Hn.clips.fill,emissive:"#000000",emissiveIntensity:0,roughness:.5,metalness:.12,flatShading:!0}),n=new Al({color:Hn.clips.wire,wireframe:!0,toneMapped:!1}),a=v=>{const g=new On(v,t);return g.castShadow=!0,A2(g,n),r.add(g),g},l=[],c=wp+.012;for(let v=0;v<=22;v+=1){const g=gs.degToRad(150+240*v/22);l.push(new k(0,c*Math.sin(g),c*Math.cos(g)))}a(new El(new Jp(l),52,.014,12,!1)),[l[0],l[l.length-1]].forEach(v=>{const g=a(new jp(.019,12,8));g.position.copy(v),g.scale.set(1.15,1.2,1.05)});const u=-c-.015,d=a(new Yn(.11,.028,.205,3,.009));d.position.y=u,[-1,1].forEach(v=>{const g=a(new Yn(.08,.1,.026,3,.008));g.position.set(0,-.025,v*.084),g.rotation.x=v*.18}),a(new Yn(.105,.055,.04,3,.009)).position.set(0,-.018,0);const p=a(new Ou(.022,.027,.095,10));p.position.y=u-.058;const _=a(new Yp(.045,.052,10));return _.rotation.z=Math.PI,_.position.y=u-.122,r}function P2(){return new Hi({uniforms:{uTime:{value:0},uFocus:{value:0},uDim:{value:0}},vertexShader:`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform float uTime;
      uniform float uFocus;
      uniform float uDim;
      varying vec2 vUv;

      void main() {
        float travel = vUv.x * 25.0 - uTime * 4.6;
        float thermal = sin(travel * 0.72) * 0.5 + 0.5;
        float crest = pow(sin(travel) * 0.5 + 0.5, 2.2);
        vec3 cold = vec3(0.04, 0.62, 1.0);
        vec3 hot = vec3(1.0, 0.19, 0.05);
        vec3 thermalColor = mix(cold, hot, thermal);
        float intensity = (mix(0.82, 1.3, crest) + uFocus * 0.32) * mix(1.0, 0.18, uDim);
        gl_FragColor = vec4(thermalColor * intensity, 1.0);
      }
    `,wireframe:!0,transparent:!1,depthWrite:!0,toneMapped:!1})}function z2(){const r=L2(),t=new Wn,n=new Wn,a=new $p({color:Hn.pipe.fill,emissive:"#000000",emissiveIntensity:0,roughness:.42,metalness:.16,flatShading:!0}),l=new On(new El(r,460,wp,18,!1),a);l.castShadow=!0,l.receiveShadow=!0,t.add(l);const c=P2(),u=new On(new El(r,460,wp+.004,18,!1),c);u.renderOrder=3,t.add(u);const d=O2(),m=28;for(let p=0;p<m;p+=1){const _=p/(m-1),v=r.getPointAt(_),g=r.getTangentAt(_),x=d.clone(!0);x.position.copy(v),x.position.y=-.015,x.rotation.y=-Math.atan2(g.z,g.x),n.add(x)}return t.userData={curve:r,pipeMaterial:a,thermalWaveMaterial:c,dimension:"17 × 2 mm"},n.userData={clipCount:m},{pipeGroup:t,clipsGroup:n}}function B2(){const r=new qp({color:Uu.cyan,transparent:!0,opacity:0,depthWrite:!1}),t=new Wn;return[[-Ii/2,-$i/2],[Ii/2,-$i/2],[-Ii/2,$i/2],[Ii/2,$i/2]].forEach(([n,a])=>{const l=new Rn().setFromPoints([new k(n,-2.25,a),new k(n,2.4,a)]);t.add(new wx(l,r))}),t.userData.material=r,t}function I2(){const t=new Float32Array(690),n=T2(777);for(let l=0;l<230;l+=1)t[l*3]=(n()-.5)*11,t[l*3+1]=(n()-.45)*7,t[l*3+2]=(n()-.5)*5;const a=new Rn;return a.setAttribute("position",new Fi(t,3)),new OE(a,new Cx({color:Uu.cyan,size:.017,transparent:!0,opacity:.2,blending:Ld,depthWrite:!1}))}function F2({progressRef:r,exploded:t,activeLayer:n,onFirstInteraction:a,onSceneReady:l}){const c=sn.useRef(null),u=sn.useRef(!1),d=sn.useRef(!1),m=sn.useRef(t),p=sn.useRef(n);return sn.useEffect(()=>{m.current=t},[t]),sn.useEffect(()=>{p.current=n},[n]),sn.useEffect(()=>{const _=c.current;if(!_)return;const v=window.matchMedia("(prefers-reduced-motion: reduce)").matches,g=new EE;g.fog=new kp("#071010",.046);const x=new gi(33,1,.1,100);x.position.set(0,2.25,8.15);const E=new E2({alpha:!0,antialias:!0,powerPreference:"high-performance"});E.setPixelRatio(Math.min(window.devicePixelRatio||1,1.7)),E.setClearColor(0,0),E.outputColorSpace=mi,E.toneMapping=Np,E.toneMappingExposure=1.12,E.shadowMap.enabled=!0,E.shadowMap.type=rx,E.domElement.setAttribute("aria-hidden","true"),_.appendChild(E.domElement);const R=new Wn;R.rotation.set(-.035,-.62,-.025),g.add(R);const{pipeGroup:M,clipsGroup:S}=z2(),B={finish:N2(),dryScreed:U2(),pipe:M,clips:S,edgeStrip:D2(),biofaser:C2(),adhesive:w2(),slab:R2()};Object.values(B).forEach(At=>{const K=new Set;At.traverse(vt=>{Array.isArray(vt.material)?vt.material.forEach(yt=>K.add(yt)):vt.material&&K.add(vt.material)}),At.userData.highlightMaterials=[...K].map(vt=>{var yt,Pt;return{material:vt,amount:0,dimAmount:0,baseColor:((yt=vt.color)==null?void 0:yt.clone())||null,baseEmissive:((Pt=vt.emissive)==null?void 0:Pt.clone())||null,baseEmissiveIntensity:vt.emissiveIntensity||0}})}),cl.forEach(({key:At,baseY:K})=>{B[At].position.y=K,R.add(B[At])});const N=B2();R.add(N);const A=new On(new Rl(7.2,5.6),new pb({color:"#000000",transparent:!0,opacity:.28}));A.rotation.x=-Math.PI/2,A.position.y=-.87,A.receiveShadow=!0,R.add(A);const z=I2();g.add(z);const O=new Mb("#eaf7f7","#171918",.9),D=new Tb("#fffaf1",2.85);D.position.set(4.5,6.2,4.8),D.castShadow=!0,D.shadow.mapSize.set(2048,2048),D.shadow.camera.left=-5,D.shadow.camera.right=5,D.shadow.camera.top=5,D.shadow.camera.bottom=-5,D.shadow.camera.near=.5,D.shadow.camera.far=18,D.shadow.bias=-22e-5,D.shadow.normalBias=.025,D.shadow.radius=3;const T=new Td("#fff7eb",7.2,5.8,3.4);T.position.set(1.8,5.6,3.2),T.lookAt(0,-.1,0);const U=new Td("#7eeaf1",4.4,3.2,4.8);U.position.set(-4.2,1.7,2.1),U.lookAt(0,0,0);const V=new Td("#f0b985",3.2,3.6,2.4);V.position.set(3.4,1.4,-3.1),V.lookAt(0,.25,0);const G=new O_("#45dee7",3.8,10,2);G.position.set(-3.1,.85,2.8);const Z=new O_("#e9ae78",2.4,7,2);Z.position.set(1.7,.1,2.1),g.add(O,D,T,U,V,G,Z);const et=new Ft,ft=new Ft;let Y=0,I=v?.6:0,F=v?6:0;const tt=performance.now();let pt=0,St=performance.now();const P=()=>{u.current||(u.current=!0,a==null||a())},Q=At=>{const K=_.getBoundingClientRect();At.clientX<K.left||At.clientX>K.right||At.clientY<K.top||At.clientY>K.bottom||(ft.x=(At.clientX-K.left)/K.width*2-1,ft.y=-((At.clientY-K.top)/K.height*2-1),Math.abs(ft.x)+Math.abs(ft.y)>.22&&P())},xt=()=>{const At=Math.max(_.clientWidth,1),K=Math.max(_.clientHeight,1);E.setSize(At,K,!1),x.aspect=At/K,x.fov=At<700?42:At<1050?36:33,x.updateProjectionMatrix()},Dt=At=>{var j;const K=Math.min((At-St)/1e3,.05);St=At,F=v?6:(At-tt)/1e3;const vt=v?0:r.current,yt=v?.6:Math.max(Nd(.08,.28,vt),m.current?1:0);Y=Vn(Y,vt,4.8,K),I=Vn(I,yt,v?18:4.8,K),et.x=Vn(et.x,ft.x,4,K),et.y=Vn(et.y,ft.y,4,K);const ie=_.clientWidth>=860,$t=Nd(.25,.38,Y),be=m.current&&Y<.18,oe=(j=cl[p.current])==null?void 0:j.key,Mt=p.current>=0,wt=ie?v?2.25:be?1.62:gs.lerp(1.18,-1.62,$t):0,Rt=ie?v?-.08:gs.lerp(-.1,.04,$t):v?-2.3:gs.lerp(-2.1,2.12,$t),Ht=ie?v?.5:.98:v?.52:.67,Bt=gs.lerp(1,ie?.76:.54,I),re=be?ie?.84:.8:1,Jt=Ht*Bt*re,ue=ie?-.18:.08;R.rotation.x=-.035+et.y*.04+$t*.02,R.rotation.y=-.62+et.x*.085+$t*.14,R.rotation.z=-.025+et.x*.01,R.scale.setScalar(Jt),cl.forEach(({key:nt,baseY:dt,explodeOffset:Ut,assemblyOrder:Ot},ht)=>{const ct=B[nt],Lt=Nd(Ot*.38+.12,Ot*.38+.88,F),Wt=nt==="slab"?-1.45:1.65+Ot*.08,zt=dt+Wt*(1-Lt)+Ut*I,te=oe===nt,ae=p.current>=0,pe=ae&&!te;ct.position.y=Vn(ct.position.y,zt+(te?.06:0),5.4,K),ct.position.x=Vn(ct.position.x,(ht-(cl.length-1)/2)*.018*I+(nt==="edgeStrip"?-.08*I:0),5,K);const q=nt==="edgeStrip"?-.13*I:0;ct.position.z=Vn(ct.position.z,te?.25:ae?q-.02:q,5,K);const Nt=te?1.09:ae?.975:1,gt=Vn(ct.scale.x,Nt,5.4,K);ct.scale.setScalar(gt),ct.userData.highlightMaterials.forEach(Ct=>{Ct.amount=Vn(Ct.amount,te?1:0,7,K),Ct.dimAmount=Vn(Ct.dimAmount,pe?1:0,6.2,K),Ct.baseColor&&Ct.material.color&&Ct.material.color.copy(Ct.baseColor).lerp(Uu.dim,Ct.dimAmount*.76),Ct.baseEmissive&&Ct.material.emissive&&(Ct.material.emissive.copy(Ct.baseEmissive).lerp(Uu.cyan,Ct.amount*.18),Ct.material.emissiveIntensity=Ct.baseEmissiveIntensity+Ct.amount*.22)})});const fe=oe?B[oe]:null,X=fe?(fe.position.x*Math.cos(R.rotation.y)+fe.position.z*Math.sin(R.rotation.y))*Jt:0,me=fe?fe.position.y*Jt:0,_e=Mt?-X:wt,L=Mt?ue-me:Rt;R.position.x=v?_e:Vn(R.position.x,_e,5.6,K),R.position.y=v?L:Vn(R.position.y,L,5.6,K);const b=B.pipe.userData;b.thermalWaveMaterial.uniforms.uTime.value=v?0:At/1e3,b.thermalWaveMaterial.uniforms.uFocus.value=Vn(b.thermalWaveMaterial.uniforms.uFocus.value,oe==="pipe"?1:0,5,K),b.thermalWaveMaterial.uniforms.uDim.value=Vn(b.thermalWaveMaterial.uniforms.uDim.value,p.current>=0&&oe!=="pipe"?1:0,6.2,K),b.pipeMaterial.emissiveIntensity=Vn(b.pipeMaterial.emissiveIntensity,oe==="pipe"?.15:.02,5,K),N.userData.material.opacity=.17*I,A.position.y=B.slab.position.y-.26,A.material.opacity=.28*(1-I*.58),z.rotation.y+=v?0:K*.011,z.material.opacity=.19*(1-$t*.18),x.position.x=et.x*.045,x.position.y=2.25+et.y*.05,x.lookAt(0,ue,0),E.render(g,x),d.current||(d.current=!0,l==null||l({layerCount:cl.length,pipeDimension:"17 × 2 mm",holeGridCm:5,boardThicknessMm:B.biofaser.userData.thicknessMm,clipCount:S.userData.clipCount,edgeStripSeparated:!0,waterAnimation:!1,visualMode:"opaque-wireframe",thermalWave:!0,isolatedFocus:!0,reducedMotion:v,webgl:!!E.getContext()})),pt=requestAnimationFrame(Dt)};return xt(),window.addEventListener("resize",xt),window.addEventListener("pointermove",Q,{passive:!0}),pt=requestAnimationFrame(Dt),()=>{cancelAnimationFrame(pt),window.removeEventListener("resize",xt),window.removeEventListener("pointermove",Q),g.traverse(At=>{At.geometry&&At.geometry.dispose(),Array.isArray(At.material)?At.material.forEach(K=>K.dispose()):At.material&&At.material.dispose()}),E.dispose(),E.domElement.remove()}},[a,l,r]),bt.jsx("div",{className:"thermal-scene",ref:c,"aria-hidden":"true"})}const Cp=(r,t=0,n=1)=>Math.min(n,Math.max(t,r)),Yr=(r,t,n)=>{const a=Cp((n-r)/(t-r));return a*a*(3-2*a)};function Ki(r,t={}){window.dataLayer=window.dataLayer||[],window.__prometoPrototypeEvents=window.__prometoPrototypeEvents||[];const n={event:r,prototype:"seamless-3d-transition",timestamp:new Date().toISOString(),...t};window.dataLayer.push(n),window.__prometoPrototypeEvents.push(n),window.dispatchEvent(new CustomEvent("prometo:prototype-event",{detail:n}))}function gu({children:r,className:t=""}){return bt.jsx("span",{className:`material-symbols-outlined ${t}`,"aria-hidden":"true",children:r})}const ps=[{key:"finish",label:"Oberbelag",tone:"finish",kicker:"01 / 08 · Sichtbarer Abschluss",title:"Oberbelag",description:"Parkett, Stein oder Designbelag bilden den sichtbaren Abschluss. Drei Materialmuster zeigen, wie flexibel der renovierte Boden später gestaltet werden kann.",facts:["Holz · Stein · Design","oberste Schicht"]},{key:"dryScreed",label:"Trockenestrich",tone:"screed",kicker:"02 / 08 · Lastverteilung",title:"Trockenestrich / Lastverteilplatte",description:"Die steife Plattenlage verteilt Nutzlasten und schafft eine ebene Fläche für den Oberbelag. Im 3D-Schnitt bleibt sie teilweise geöffnet, damit die Rohrführung lesbar bleibt.",facts:["trockener Aufbau","ebene Nutzschicht"]},{key:"pipe",label:"Heizrohr 17 × 2 mm",tone:"pipe",kicker:"03 / 08 · Wärmeverteilung",title:"Heizrohr 17 × 2 mm",description:"Das geschlossene Heizrohr besitzt 17 mm Außendurchmesser und 2 mm Wandstärke. Im Wireframe wandert eine Temperaturwelle von Kaltblau zu Heißrot durch den durchgängigen Heizkreis.",facts:["17 mm außen","2 mm Wand","Kaltblau → Heißrot"]},{key:"clips",label:"Türkise Rohrclips",tone:"clip",kicker:"04 / 08 · Sichere Rohrführung",title:"Türkiser Rohrclip",description:"Die U-förmige Aufnahme hält das Rohr formschlüssig. Der Steckfuß rastet in der Lochplatte ein; an Kurven und Übergängen sitzen die Clips dichter.",facts:["U-Aufnahme","Steckfuß","Bögen dichter"],image:"/product/rohrclip-front.png",imageAlt:"Türkiser Rohrclip in Frontansicht",imageWidth:1e3,imageHeight:965},{key:"edgeStrip",label:"Randdämmstreifen",tone:"edge-strip",kicker:"05 / 08 · Sichere Randentkopplung",title:"Randdämmstreifen",description:"Der blaue Randdämmstreifen trennt den Bodenaufbau von angrenzenden Bauteilen. Er nimmt Bewegungen am Rand auf und hilft, starre Kontakt- und Schallbrücken zu vermeiden.",facts:["Randentkopplung","Bewegungsaufnahme","Schallschutz"]},{key:"biofaser",label:"Biofaser-Trägerplatte",tone:"biofaser",kicker:"06 / 08 · Ökologisches Trägermaterial",title:"Biofaser-Trägermaterial",description:"Die rund 5 mm starke Biofaser-Trägerplatte nimmt die Clips im 5-cm-Lochraster auf. Als ökologische Trägerebene macht sie unterschiedliche Verlegewege sichtbar und flexibel.",facts:["Trägermaterial","ca. 5 mm stark","5 cm Lochraster"],image:"/product/biofaser-lochplatte.png",imageAlt:"Braune Biofaser-Lochplatte mit regelmäßigem Lochraster",imageWidth:1400,imageHeight:996},{key:"adhesive",label:"Klebe- / Ausgleichsebene",tone:"adhesive",kicker:"07 / 08 · Vollflächige Verbindung",title:"Klebe- und Ausgleichsebene",description:"Die dünne dunkle Ebene verbindet die Systemplatte mit dem vorbereiteten Bestand und gleicht kleine Unebenheiten aus. Die sichtbaren Zahnriefen erklären den Auftrag.",facts:["dünnschichtig","ausgleichend","vollflächig"]},{key:"slab",label:"Rohdecke / Bestand",tone:"slab",kicker:"08 / 08 · Tragender Bestand",title:"Rohdecke / Bestandsboden",description:"Der vorhandene tragfähige Untergrund ist die Basis der Renovierung. Von hier aus setzt sich der gesamte Aufbau in der realen Montagereihenfolge nach oben zusammen.",facts:["tragfähige Basis","vorbereitet","Bestand"]}];function H2(){const r=sn.useRef(null),t=sn.useRef(0),n=sn.useRef({started:!1,completed:!1}),a=sn.useRef(-1),l=sn.useRef(Date.now()),[c,u]=sn.useState(0),[d,m]=sn.useState(-1),[p,_]=sn.useState(!1),[v,g]=sn.useState(!1),[x,E]=sn.useState(""),R=sn.useCallback(()=>{Ki("three_interacted",{timeToInteractionMs:Date.now()-l.current})},[]),M=sn.useCallback(D=>{Ki("three_scene_ready",D)},[]);sn.useEffect(()=>{window.__prometoPrototypeViewed||(window.__prometoPrototypeViewed=!0,l.current=Date.now(),Ki("prototype_view"));let D=0;const T=()=>{D=0;const V=r.current;if(!V)return;const G=V.offsetTop,Z=Math.max(V.offsetHeight-window.innerHeight,1),et=Cp((window.scrollY-G)/Z),ft=1-Yr(.07,.2,et),Y=Yr(.27,.32,et)*(1-Yr(.965,.995,et)),I=Yr(.08,.13,et)*(1-Yr(.25,.31,et)),F=.3,pt=Cp((et-F)/(.95-F),0,.9999),St=et<F?-1:Math.min(ps.length-1,Math.floor(pt*ps.length));t.current=et,V.style.setProperty("--story-progress",et.toFixed(4)),V.style.setProperty("--hero-opacity",ft.toFixed(4)),V.style.setProperty("--hero-shift",`${Math.round(et*-72)}px`),V.style.setProperty("--bridge-opacity",Y.toFixed(4)),V.style.setProperty("--bridge-shift",`${Math.round((1-Y)*42)}px`),V.style.setProperty("--scene-copy-opacity",I.toFixed(4)),V.style.setProperty("--legend-opacity",Y.toFixed(4)),V.style.setProperty("--legend-shift",`${Math.round((1-Y)*-18)}px`),V.style.setProperty("--veil-opacity",Yr(.9,.99,et).toFixed(4));const P=Math.round(et*100);u(Q=>Q===P?Q:P),St!==a.current&&(a.current=St,m(St),St>=0&&Ki("component_focused",{component:ps[St].key,position:St+1})),et>.1&&!n.current.started&&(n.current.started=!0,Ki("transition_started")),et>.95&&!n.current.completed&&(n.current.completed=!0,Ki("transition_completed"))},U=()=>{D||(D=requestAnimationFrame(T))};return T(),window.addEventListener("scroll",U,{passive:!0}),window.addEventListener("resize",U),()=>{D&&cancelAnimationFrame(D),window.removeEventListener("scroll",U),window.removeEventListener("resize",U)}},[]),sn.useEffect(()=>{if(!x)return;const D=window.setTimeout(()=>E(""),3600);return()=>window.clearTimeout(D)},[x]);const S=D=>{const T=r.current;if(!T)return;const U=Math.max(T.offsetHeight-window.innerHeight,1);window.scrollTo({top:T.offsetTop+U*D,behavior:"smooth"})},B=()=>{Ki("cta_clicked",{cta:"start_3d_story"}),S(.12)},N=()=>{const D=!p;_(D),Ki("three_model_toggled",{state:D?"exploded":"assembled"})},A=()=>{Ki("cta_clicked",{cta:"beta_test",location:"continuation"}),E("Test-CTA erfasst – es wurden keine Daten gesendet.")},z=ps[Math.max(d,0)],O=D=>{const V=.31+D/Math.max(ps.length-1,1)*.62;Ki("component_selected",{component:ps[D].key,position:D+1}),S(V)};return bt.jsxs("div",{className:"app-shell",children:[bt.jsxs("header",{className:"site-header",children:[bt.jsxs("div",{className:"site-nav-shell",children:[bt.jsx("a",{className:"site-brand",href:"#top","aria-label":"Prometo Start",children:bt.jsx("img",{src:"/brand/prometo-wordmark.svg",alt:"Prometo"})}),bt.jsxs("nav",{className:"site-desktop-nav","aria-label":"Testnavigation",children:[bt.jsx("button",{type:"button",onClick:()=>S(.1),children:"Montage"}),bt.jsx("button",{type:"button",onClick:()=>S(.33),children:"Bauteile"}),bt.jsx("a",{href:"#system",children:"Workflow"})]}),bt.jsxs("div",{className:"site-nav-actions",children:[bt.jsxs("span",{className:"test-label",children:[bt.jsx("span",{}),"Konzepttest"]}),bt.jsx("button",{className:"nav-cta",type:"button",onClick:B,children:"Test starten"}),bt.jsxs("button",{className:"mobile-menu-button",type:"button","aria-label":"Menü öffnen","aria-expanded":v,onClick:()=>g(D=>!D),children:[bt.jsx("span",{}),bt.jsx("span",{})]})]})]}),v?bt.jsxs("nav",{className:"mobile-menu","aria-label":"Testnavigation mobil",children:[bt.jsx("button",{type:"button",onClick:()=>{S(.1),g(!1)},children:"Montage"}),bt.jsx("button",{type:"button",onClick:()=>{S(.33),g(!1)},children:"Bauteile"}),bt.jsx("a",{href:"#system",onClick:()=>g(!1),children:"Workflow"})]}):null]}),bt.jsxs("main",{id:"top",children:[bt.jsx("section",{className:`story ${p?"is-manually-exploded":""}`,ref:r,"aria-label":"Interaktiver 3D-Schnitt eines Fußbodenheizungsaufbaus",children:bt.jsxs("div",{className:"story-sticky",children:[bt.jsx(F2,{progressRef:t,exploded:p,activeLayer:d,onFirstInteraction:R,onSceneReady:M}),bt.jsx("div",{className:"ambient-grid","aria-hidden":"true"}),bt.jsx("div",{className:"ambient-bloom ambient-bloom-a","aria-hidden":"true"}),bt.jsx("div",{className:"ambient-bloom ambient-bloom-b","aria-hidden":"true"}),bt.jsxs("div",{className:"story-frame",children:[bt.jsx("p",{className:"sr-only",children:"Das 3D-Modell zeigt einen Renovierungsaufbau mit Oberbelag, Trockenestrich, Heizrohr 17 mal 2 Millimeter, türkisfarbenen Clips, blauem Randdämmstreifen, Biofaser-Trägerplatte im 5-Zentimeter-Raster, Klebeebene und Rohdecke. Das Rohr zeigt eine Heiß-/Kalt-Temperaturwelle. Zuerst montiert sich der Aufbau von unten nach oben. Danach werden die acht Bauteile beim Scrollen von oben nach unten erklärt."}),bt.jsxs("div",{className:"hero-copy",children:[bt.jsxs("div",{className:"eyebrow-row",children:[bt.jsxs("span",{className:"badge",children:[bt.jsx("span",{className:"badge-dot"}),"tempusFLAT Renovierung"]}),bt.jsx("span",{className:"eyebrow-note",children:"Biofaser · 17 × 2 mm · 5-cm-Raster"})]}),bt.jsxs("h1",{children:["Sanieren mit System.",bt.jsx("span",{children:" Bauteil für Bauteil."})]}),bt.jsx("p",{className:"hero-lead",children:"Der Boden setzt sich wie auf der Baustelle von unten nach oben zusammen. Danach öffnet er sich zu einem klaren Wireframe-3D-Schnitt, der jede Schicht einzeln erklärt."}),bt.jsxs("div",{className:"hero-actions",children:[bt.jsxs("button",{className:"button button-primary",type:"button",onClick:B,children:["Montage ansehen",bt.jsx(gu,{children:"arrow_downward"})]}),bt.jsxs("button",{className:"button button-secondary",type:"button",onClick:N,children:[bt.jsx(gu,{children:p?"close_fullscreen":"layers"}),p?"Aufbau schließen":"Aufbau auffächern"]})]}),bt.jsx("p",{className:"prototype-note",children:"Isolierter Konzepttest · die bestehende Website bleibt unverändert"})]}),bt.jsxs("div",{className:"scene-caption",children:[bt.jsx("span",{className:"scene-caption-index",children:"01"}),bt.jsxs("div",{children:[bt.jsx("strong",{children:"Montagefolge"}),bt.jsx("span",{children:"Rohdecke, Kleber, Biofaser-Trägermaterial, Randdämmung, Clips, Rohr und Decklagen."})]})]}),bt.jsxs("aside",{className:"layer-legend","aria-label":"Bauteile des Fußbodenaufbaus",children:[bt.jsx("span",{children:"Von oben nach unten"}),bt.jsx("ol",{children:ps.map((D,T)=>bt.jsx("li",{className:d===T?"is-active":"",children:bt.jsxs("button",{type:"button","aria-current":d===T?"step":void 0,onClick:()=>O(T),children:[bt.jsx("i",{className:`layer-dot layer-dot-${D.tone}`,"aria-hidden":"true"}),bt.jsx("strong",{children:String(T+1).padStart(2,"0")}),bt.jsx("span",{children:D.label})]})},D.key))})]}),bt.jsxs("article",{className:"component-detail","aria-live":"polite","aria-atomic":"true","aria-hidden":d<0,children:[bt.jsxs("div",{className:"component-detail-topline",children:[bt.jsx("span",{className:"section-kicker",children:z.kicker}),bt.jsxs("span",{className:"component-active-marker",children:[bt.jsx("i",{}),"Im Modell markiert"]})]}),bt.jsxs("div",{className:"component-detail-body",children:[bt.jsx("h2",{children:z.title}),bt.jsx("p",{children:z.description}),z.image?bt.jsx("figure",{className:`component-product component-product-${z.key}`,children:bt.jsx("img",{src:z.image,alt:z.imageAlt,width:z.imageWidth,height:z.imageHeight,decoding:"async"})}):null,bt.jsx("ul",{className:"component-facts","aria-label":"Bauteilmerkmale",children:z.facts.map(D=>bt.jsx("li",{children:D},D))})]},z.key)]}),bt.jsxs("div",{className:"scroll-progress","aria-hidden":"true",children:[bt.jsx("span",{children:"Scroll"}),bt.jsx("div",{className:"scroll-track",children:bt.jsx("i",{style:{transform:`scaleY(${Math.max(c/100,.035)})`}})}),bt.jsx("strong",{children:d>=0?`${String(d+1).padStart(2,"0")}/${String(ps.length).padStart(2,"0")}`:String(c).padStart(2,"0")})]})]}),bt.jsx("div",{className:"story-veil","aria-hidden":"true"})]})}),bt.jsxs("section",{className:"continuation",id:"system","aria-labelledby":"continuation-title",children:[bt.jsx("div",{className:"continuation-glow","aria-hidden":"true"}),bt.jsxs("div",{className:"continuation-inner",children:[bt.jsxs("div",{className:"continuation-copy",children:[bt.jsx("span",{className:"section-kicker",children:"Vom Bauteil zum Projekt"}),bt.jsxs("h2",{id:"continuation-title",children:["Was im 3D-Schnitt klar wird,",bt.jsx("span",{children:" wird in Prometo planbar."})]}),bt.jsx("p",{children:"Der physische Aufbau geht nahtlos in Heizlast, Raumdaten und Ergebnisprüfung über – mit derselben visuellen Logik vom Bauteil bis zum prüfbaren Projektstand."}),bt.jsxs("div",{className:"continuation-actions",children:[bt.jsxs("button",{className:"button button-primary",type:"button",onClick:A,children:["Beta-Zugang testen",bt.jsx(gu,{children:"arrow_forward"})]}),bt.jsx("span",{children:"Nur Prototyp · keine Übermittlung"})]})]}),bt.jsxs("div",{className:"product-window",children:[bt.jsxs("div",{className:"product-window-topbar",children:[bt.jsxs("div",{className:"window-dots","aria-hidden":"true",children:[bt.jsx("span",{}),bt.jsx("span",{}),bt.jsx("span",{})]}),bt.jsx("span",{children:"Projekt / MFH / Ergebnisse"}),bt.jsxs("span",{className:"window-status",children:[bt.jsx("i",{}),"Synchron"]})]}),bt.jsxs("div",{className:"product-window-media",children:[bt.jsx("img",{src:"/reference/prometo-project-heatmap.webp",alt:"Prometo Projektergebnisse mit raumweiser Heizlast"}),bt.jsx("div",{className:"product-window-sheen","aria-hidden":"true"})]})]})]}),bt.jsxs("div",{className:"signal-strip","aria-label":"Konzeptmerkmale",children:[bt.jsx("span",{children:"17 × 2 mm Rohr"}),bt.jsx("i",{}),bt.jsx("span",{children:"5 cm Lochraster"}),bt.jsx("i",{}),bt.jsx("span",{children:"Biofaser-Systemplatte"}),bt.jsx("i",{}),bt.jsx("span",{children:"8 Bauteile im 3D-Schnitt"})]})]})]}),bt.jsxs("div",{className:`toast ${x?"toast-visible":""}`,role:"status","aria-live":"polite",children:[bt.jsx(gu,{children:"check_circle"}),x]})]})}hM.createRoot(document.getElementById("root")).render(bt.jsx(sM.StrictMode,{children:bt.jsx(H2,{})}));
