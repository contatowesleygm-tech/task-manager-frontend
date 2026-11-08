(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))l(c);new MutationObserver(c=>{for(const p of c)if(p.type==="childList")for(const h of p.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&l(h)}).observe(document,{childList:!0,subtree:!0});function s(c){const p={};return c.integrity&&(p.integrity=c.integrity),c.referrerPolicy&&(p.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?p.credentials="include":c.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function l(c){if(c.ep)return;c.ep=!0;const p=s(c);fetch(c.href,p)}})();function av(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var xu={exports:{}},Bs={},gu={exports:{}},tt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hm;function $0(){if(Hm)return tt;Hm=1;var r=Symbol.for("react.element"),a=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),p=Symbol.for("react.provider"),h=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),k=Symbol.iterator;function C(z){return z===null||typeof z!="object"?null:(z=k&&z[k]||z["@@iterator"],typeof z=="function"?z:null)}var N={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O=Object.assign,$={};function V(z,w,re){this.props=z,this.context=w,this.refs=$,this.updater=re||N}V.prototype.isReactComponent={},V.prototype.setState=function(z,w){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,w,"setState")},V.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function R(){}R.prototype=V.prototype;function j(z,w,re){this.props=z,this.context=w,this.refs=$,this.updater=re||N}var T=j.prototype=new R;T.constructor=j,O(T,V.prototype),T.isPureReactComponent=!0;var F=Array.isArray,ne=Object.prototype.hasOwnProperty,X={current:null},L={key:!0,ref:!0,__self:!0,__source:!0};function oe(z,w,re){var ae,M={},se=null,ve=null;if(w!=null)for(ae in w.ref!==void 0&&(ve=w.ref),w.key!==void 0&&(se=""+w.key),w)ne.call(w,ae)&&!L.hasOwnProperty(ae)&&(M[ae]=w[ae]);var je=arguments.length-2;if(je===1)M.children=re;else if(1<je){for(var U=Array(je),pe=0;pe<je;pe++)U[pe]=arguments[pe+2];M.children=U}if(z&&z.defaultProps)for(ae in je=z.defaultProps,je)M[ae]===void 0&&(M[ae]=je[ae]);return{$$typeof:r,type:z,key:se,ref:ve,props:M,_owner:X.current}}function S(z,w){return{$$typeof:r,type:z.type,key:w,ref:z.ref,props:z.props,_owner:z._owner}}function y(z){return typeof z=="object"&&z!==null&&z.$$typeof===r}function q(z){var w={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(re){return w[re]})}var de=/\/+/g;function be(z,w){return typeof z=="object"&&z!==null&&z.key!=null?q(""+z.key):w.toString(36)}function ke(z,w,re,ae,M){var se=typeof z;(se==="undefined"||se==="boolean")&&(z=null);var ve=!1;if(z===null)ve=!0;else switch(se){case"string":case"number":ve=!0;break;case"object":switch(z.$$typeof){case r:case a:ve=!0}}if(ve)return ve=z,M=M(ve),z=ae===""?"."+be(ve,0):ae,F(M)?(re="",z!=null&&(re=z.replace(de,"$&/")+"/"),ke(M,w,re,"",function(pe){return pe})):M!=null&&(y(M)&&(M=S(M,re+(!M.key||ve&&ve.key===M.key?"":(""+M.key).replace(de,"$&/")+"/")+z)),w.push(M)),1;if(ve=0,ae=ae===""?".":ae+":",F(z))for(var je=0;je<z.length;je++){se=z[je];var U=ae+be(se,je);ve+=ke(se,w,re,U,M)}else if(U=C(z),typeof U=="function")for(z=U.call(z),je=0;!(se=z.next()).done;)se=se.value,U=ae+be(se,je++),ve+=ke(se,w,re,U,M);else if(se==="object")throw w=String(z),Error("Objects are not valid as a React child (found: "+(w==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":w)+"). If you meant to render a collection of children, use an array instead.");return ve}function ze(z,w,re){if(z==null)return z;var ae=[],M=0;return ke(z,ae,"","",function(se){return w.call(re,se,M++)}),ae}function Q(z){if(z._status===-1){var w=z._result;w=w(),w.then(function(re){(z._status===0||z._status===-1)&&(z._status=1,z._result=re)},function(re){(z._status===0||z._status===-1)&&(z._status=2,z._result=re)}),z._status===-1&&(z._status=0,z._result=w)}if(z._status===1)return z._result.default;throw z._result}var ge={current:null},le={transition:null},xe={ReactCurrentDispatcher:ge,ReactCurrentBatchConfig:le,ReactCurrentOwner:X};function H(){throw Error("act(...) is not supported in production builds of React.")}return tt.Children={map:ze,forEach:function(z,w,re){ze(z,function(){w.apply(this,arguments)},re)},count:function(z){var w=0;return ze(z,function(){w++}),w},toArray:function(z){return ze(z,function(w){return w})||[]},only:function(z){if(!y(z))throw Error("React.Children.only expected to receive a single React element child.");return z}},tt.Component=V,tt.Fragment=s,tt.Profiler=c,tt.PureComponent=j,tt.StrictMode=l,tt.Suspense=g,tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xe,tt.act=H,tt.cloneElement=function(z,w,re){if(z==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+z+".");var ae=O({},z.props),M=z.key,se=z.ref,ve=z._owner;if(w!=null){if(w.ref!==void 0&&(se=w.ref,ve=X.current),w.key!==void 0&&(M=""+w.key),z.type&&z.type.defaultProps)var je=z.type.defaultProps;for(U in w)ne.call(w,U)&&!L.hasOwnProperty(U)&&(ae[U]=w[U]===void 0&&je!==void 0?je[U]:w[U])}var U=arguments.length-2;if(U===1)ae.children=re;else if(1<U){je=Array(U);for(var pe=0;pe<U;pe++)je[pe]=arguments[pe+2];ae.children=je}return{$$typeof:r,type:z.type,key:M,ref:se,props:ae,_owner:ve}},tt.createContext=function(z){return z={$$typeof:h,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},z.Provider={$$typeof:p,_context:z},z.Consumer=z},tt.createElement=oe,tt.createFactory=function(z){var w=oe.bind(null,z);return w.type=z,w},tt.createRef=function(){return{current:null}},tt.forwardRef=function(z){return{$$typeof:f,render:z}},tt.isValidElement=y,tt.lazy=function(z){return{$$typeof:b,_payload:{_status:-1,_result:z},_init:Q}},tt.memo=function(z,w){return{$$typeof:_,type:z,compare:w===void 0?null:w}},tt.startTransition=function(z){var w=le.transition;le.transition={};try{z()}finally{le.transition=w}},tt.unstable_act=H,tt.useCallback=function(z,w){return ge.current.useCallback(z,w)},tt.useContext=function(z){return ge.current.useContext(z)},tt.useDebugValue=function(){},tt.useDeferredValue=function(z){return ge.current.useDeferredValue(z)},tt.useEffect=function(z,w){return ge.current.useEffect(z,w)},tt.useId=function(){return ge.current.useId()},tt.useImperativeHandle=function(z,w,re){return ge.current.useImperativeHandle(z,w,re)},tt.useInsertionEffect=function(z,w){return ge.current.useInsertionEffect(z,w)},tt.useLayoutEffect=function(z,w){return ge.current.useLayoutEffect(z,w)},tt.useMemo=function(z,w){return ge.current.useMemo(z,w)},tt.useReducer=function(z,w,re){return ge.current.useReducer(z,w,re)},tt.useRef=function(z){return ge.current.useRef(z)},tt.useState=function(z){return ge.current.useState(z)},tt.useSyncExternalStore=function(z,w,re){return ge.current.useSyncExternalStore(z,w,re)},tt.useTransition=function(){return ge.current.useTransition()},tt.version="18.3.1",tt}var Vm;function Kp(){return Vm||(Vm=1,gu.exports=$0()),gu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wm;function R0(){if(Wm)return Bs;Wm=1;var r=Kp(),a=Symbol.for("react.element"),s=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function h(f,g,_){var b,k={},C=null,N=null;_!==void 0&&(C=""+_),g.key!==void 0&&(C=""+g.key),g.ref!==void 0&&(N=g.ref);for(b in g)l.call(g,b)&&!p.hasOwnProperty(b)&&(k[b]=g[b]);if(f&&f.defaultProps)for(b in g=f.defaultProps,g)k[b]===void 0&&(k[b]=g[b]);return{$$typeof:a,type:f,key:C,ref:N,props:k,_owner:c.current}}return Bs.Fragment=s,Bs.jsx=h,Bs.jsxs=h,Bs}var Gm;function P0(){return Gm||(Gm=1,xu.exports=R0()),xu.exports}var e=P0(),x=Kp();const br=av(x);var Pl={},vu={exports:{}},Or={},yu={exports:{}},ju={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qm;function z0(){return Qm||(Qm=1,(function(r){function a(le,xe){var H=le.length;le.push(xe);e:for(;0<H;){var z=H-1>>>1,w=le[z];if(0<c(w,xe))le[z]=xe,le[H]=w,H=z;else break e}}function s(le){return le.length===0?null:le[0]}function l(le){if(le.length===0)return null;var xe=le[0],H=le.pop();if(H!==xe){le[0]=H;e:for(var z=0,w=le.length,re=w>>>1;z<re;){var ae=2*(z+1)-1,M=le[ae],se=ae+1,ve=le[se];if(0>c(M,H))se<w&&0>c(ve,M)?(le[z]=ve,le[se]=H,z=se):(le[z]=M,le[ae]=H,z=ae);else if(se<w&&0>c(ve,H))le[z]=ve,le[se]=H,z=se;else break e}}return xe}function c(le,xe){var H=le.sortIndex-xe.sortIndex;return H!==0?H:le.id-xe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var p=performance;r.unstable_now=function(){return p.now()}}else{var h=Date,f=h.now();r.unstable_now=function(){return h.now()-f}}var g=[],_=[],b=1,k=null,C=3,N=!1,O=!1,$=!1,V=typeof setTimeout=="function"?setTimeout:null,R=typeof clearTimeout=="function"?clearTimeout:null,j=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function T(le){for(var xe=s(_);xe!==null;){if(xe.callback===null)l(_);else if(xe.startTime<=le)l(_),xe.sortIndex=xe.expirationTime,a(g,xe);else break;xe=s(_)}}function F(le){if($=!1,T(le),!O)if(s(g)!==null)O=!0,Q(ne);else{var xe=s(_);xe!==null&&ge(F,xe.startTime-le)}}function ne(le,xe){O=!1,$&&($=!1,R(oe),oe=-1),N=!0;var H=C;try{for(T(xe),k=s(g);k!==null&&(!(k.expirationTime>xe)||le&&!q());){var z=k.callback;if(typeof z=="function"){k.callback=null,C=k.priorityLevel;var w=z(k.expirationTime<=xe);xe=r.unstable_now(),typeof w=="function"?k.callback=w:k===s(g)&&l(g),T(xe)}else l(g);k=s(g)}if(k!==null)var re=!0;else{var ae=s(_);ae!==null&&ge(F,ae.startTime-xe),re=!1}return re}finally{k=null,C=H,N=!1}}var X=!1,L=null,oe=-1,S=5,y=-1;function q(){return!(r.unstable_now()-y<S)}function de(){if(L!==null){var le=r.unstable_now();y=le;var xe=!0;try{xe=L(!0,le)}finally{xe?be():(X=!1,L=null)}}else X=!1}var be;if(typeof j=="function")be=function(){j(de)};else if(typeof MessageChannel<"u"){var ke=new MessageChannel,ze=ke.port2;ke.port1.onmessage=de,be=function(){ze.postMessage(null)}}else be=function(){V(de,0)};function Q(le){L=le,X||(X=!0,be())}function ge(le,xe){oe=V(function(){le(r.unstable_now())},xe)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(le){le.callback=null},r.unstable_continueExecution=function(){O||N||(O=!0,Q(ne))},r.unstable_forceFrameRate=function(le){0>le||125<le?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<le?Math.floor(1e3/le):5},r.unstable_getCurrentPriorityLevel=function(){return C},r.unstable_getFirstCallbackNode=function(){return s(g)},r.unstable_next=function(le){switch(C){case 1:case 2:case 3:var xe=3;break;default:xe=C}var H=C;C=xe;try{return le()}finally{C=H}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(le,xe){switch(le){case 1:case 2:case 3:case 4:case 5:break;default:le=3}var H=C;C=le;try{return xe()}finally{C=H}},r.unstable_scheduleCallback=function(le,xe,H){var z=r.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?z+H:z):H=z,le){case 1:var w=-1;break;case 2:w=250;break;case 5:w=1073741823;break;case 4:w=1e4;break;default:w=5e3}return w=H+w,le={id:b++,callback:xe,priorityLevel:le,startTime:H,expirationTime:w,sortIndex:-1},H>z?(le.sortIndex=H,a(_,le),s(g)===null&&le===s(_)&&($?(R(oe),oe=-1):$=!0,ge(F,H-z))):(le.sortIndex=w,a(g,le),O||N||(O=!0,Q(ne))),le},r.unstable_shouldYield=q,r.unstable_wrapCallback=function(le){var xe=C;return function(){var H=C;C=xe;try{return le.apply(this,arguments)}finally{C=H}}}})(ju)),ju}var Km;function N0(){return Km||(Km=1,yu.exports=z0()),yu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ym;function M0(){if(Ym)return Or;Ym=1;var r=Kp(),a=N0();function s(t){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+t,i=1;i<arguments.length;i++)n+="&args[]="+encodeURIComponent(arguments[i]);return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var l=new Set,c={};function p(t,n){h(t,n),h(t+"Capture",n)}function h(t,n){for(c[t]=n,t=0;t<n.length;t++)l.add(n[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,b={},k={};function C(t){return g.call(k,t)?!0:g.call(b,t)?!1:_.test(t)?k[t]=!0:(b[t]=!0,!1)}function N(t,n,i,o){if(i!==null&&i.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return o?!1:i!==null?!i.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function O(t,n,i,o){if(n===null||typeof n>"u"||N(t,n,i,o))return!0;if(o)return!1;if(i!==null)switch(i.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function $(t,n,i,o,d,u,v){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=o,this.attributeNamespace=d,this.mustUseProperty=i,this.propertyName=t,this.type=n,this.sanitizeURL=u,this.removeEmptyString=v}var V={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){V[t]=new $(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var n=t[0];V[n]=new $(n,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){V[t]=new $(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){V[t]=new $(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){V[t]=new $(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){V[t]=new $(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){V[t]=new $(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){V[t]=new $(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){V[t]=new $(t,5,!1,t.toLowerCase(),null,!1,!1)});var R=/[\-:]([a-z])/g;function j(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var n=t.replace(R,j);V[n]=new $(n,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var n=t.replace(R,j);V[n]=new $(n,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var n=t.replace(R,j);V[n]=new $(n,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){V[t]=new $(t,1,!1,t.toLowerCase(),null,!1,!1)}),V.xlinkHref=new $("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){V[t]=new $(t,1,!1,t.toLowerCase(),null,!0,!0)});function T(t,n,i,o){var d=V.hasOwnProperty(n)?V[n]:null;(d!==null?d.type!==0:o||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(O(n,i,d,o)&&(i=null),o||d===null?C(n)&&(i===null?t.removeAttribute(n):t.setAttribute(n,""+i)):d.mustUseProperty?t[d.propertyName]=i===null?d.type===3?!1:"":i:(n=d.attributeName,o=d.attributeNamespace,i===null?t.removeAttribute(n):(d=d.type,i=d===3||d===4&&i===!0?"":""+i,o?t.setAttributeNS(o,n,i):t.setAttribute(n,i))))}var F=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ne=Symbol.for("react.element"),X=Symbol.for("react.portal"),L=Symbol.for("react.fragment"),oe=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),y=Symbol.for("react.provider"),q=Symbol.for("react.context"),de=Symbol.for("react.forward_ref"),be=Symbol.for("react.suspense"),ke=Symbol.for("react.suspense_list"),ze=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),ge=Symbol.for("react.offscreen"),le=Symbol.iterator;function xe(t){return t===null||typeof t!="object"?null:(t=le&&t[le]||t["@@iterator"],typeof t=="function"?t:null)}var H=Object.assign,z;function w(t){if(z===void 0)try{throw Error()}catch(i){var n=i.stack.trim().match(/\n( *(at )?)/);z=n&&n[1]||""}return`
`+z+t}var re=!1;function ae(t,n){if(!t||re)return"";re=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(te){var o=te}Reflect.construct(t,[],n)}else{try{n.call()}catch(te){o=te}t.call(n.prototype)}else{try{throw Error()}catch(te){o=te}t()}}catch(te){if(te&&o&&typeof te.stack=="string"){for(var d=te.stack.split(`
`),u=o.stack.split(`
`),v=d.length-1,P=u.length-1;1<=v&&0<=P&&d[v]!==u[P];)P--;for(;1<=v&&0<=P;v--,P--)if(d[v]!==u[P]){if(v!==1||P!==1)do if(v--,P--,0>P||d[v]!==u[P]){var A=`
`+d[v].replace(" at new "," at ");return t.displayName&&A.includes("<anonymous>")&&(A=A.replace("<anonymous>",t.displayName)),A}while(1<=v&&0<=P);break}}}finally{re=!1,Error.prepareStackTrace=i}return(t=t?t.displayName||t.name:"")?w(t):""}function M(t){switch(t.tag){case 5:return w(t.type);case 16:return w("Lazy");case 13:return w("Suspense");case 19:return w("SuspenseList");case 0:case 2:case 15:return t=ae(t.type,!1),t;case 11:return t=ae(t.type.render,!1),t;case 1:return t=ae(t.type,!0),t;default:return""}}function se(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case L:return"Fragment";case X:return"Portal";case S:return"Profiler";case oe:return"StrictMode";case be:return"Suspense";case ke:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case q:return(t.displayName||"Context")+".Consumer";case y:return(t._context.displayName||"Context")+".Provider";case de:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ze:return n=t.displayName||null,n!==null?n:se(t.type)||"Memo";case Q:n=t._payload,t=t._init;try{return se(t(n))}catch{}}return null}function ve(t){var n=t.type;switch(t.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=n.render,t=t.displayName||t.name||"",n.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return se(n);case 8:return n===oe?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function je(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function U(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function pe(t){var n=U(t)?"checked":"value",i=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),o=""+t[n];if(!t.hasOwnProperty(n)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var d=i.get,u=i.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return d.call(this)},set:function(v){o=""+v,u.call(this,v)}}),Object.defineProperty(t,n,{enumerable:i.enumerable}),{getValue:function(){return o},setValue:function(v){o=""+v},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function ot(t){t._valueTracker||(t._valueTracker=pe(t))}function st(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var i=n.getValue(),o="";return t&&(o=U(t)?t.checked?"true":"false":t.value),t=o,t!==i?(n.setValue(t),!0):!1}function ft(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function at(t,n){var i=n.checked;return H({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:i??t._wrapperState.initialChecked})}function lr(t,n){var i=n.defaultValue==null?"":n.defaultValue,o=n.checked!=null?n.checked:n.defaultChecked;i=je(n.value!=null?n.value:i),t._wrapperState={initialChecked:o,initialValue:i,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Et(t,n){n=n.checked,n!=null&&T(t,"checked",n,!1)}function bt(t,n){Et(t,n);var i=je(n.value),o=n.type;if(i!=null)o==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+i):t.value!==""+i&&(t.value=""+i);else if(o==="submit"||o==="reset"){t.removeAttribute("value");return}n.hasOwnProperty("value")?et(t,n.type,i):n.hasOwnProperty("defaultValue")&&et(t,n.type,je(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(t.defaultChecked=!!n.defaultChecked)}function Le(t,n,i){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var o=n.type;if(!(o!=="submit"&&o!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+t._wrapperState.initialValue,i||n===t.value||(t.value=n),t.defaultValue=n}i=t.name,i!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,i!==""&&(t.name=i)}function et(t,n,i){(n!=="number"||ft(t.ownerDocument)!==t)&&(i==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+i&&(t.defaultValue=""+i))}var ie=Array.isArray;function He(t,n,i,o){if(t=t.options,n){n={};for(var d=0;d<i.length;d++)n["$"+i[d]]=!0;for(i=0;i<t.length;i++)d=n.hasOwnProperty("$"+t[i].value),t[i].selected!==d&&(t[i].selected=d),d&&o&&(t[i].defaultSelected=!0)}else{for(i=""+je(i),n=null,d=0;d<t.length;d++){if(t[d].value===i){t[d].selected=!0,o&&(t[d].defaultSelected=!0);return}n!==null||t[d].disabled||(n=t[d])}n!==null&&(n.selected=!0)}}function Pt(t,n){if(n.dangerouslySetInnerHTML!=null)throw Error(s(91));return H({},n,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Kt(t,n){var i=n.value;if(i==null){if(i=n.children,n=n.defaultValue,i!=null){if(n!=null)throw Error(s(92));if(ie(i)){if(1<i.length)throw Error(s(93));i=i[0]}n=i}n==null&&(n=""),i=n}t._wrapperState={initialValue:je(i)}}function Vt(t,n){var i=je(n.value),o=je(n.defaultValue);i!=null&&(i=""+i,i!==t.value&&(t.value=i),n.defaultValue==null&&t.defaultValue!==i&&(t.defaultValue=i)),o!=null&&(t.defaultValue=""+o)}function fr(t){var n=t.textContent;n===t._wrapperState.initialValue&&n!==""&&n!==null&&(t.value=n)}function zr(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function vt(t,n){return t==null||t==="http://www.w3.org/1999/xhtml"?zr(n):t==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Nr,an=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,i,o,d){MSApp.execUnsafeLocalFunction(function(){return t(n,i,o,d)})}:t})(function(t,n){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=n;else{for(Nr=Nr||document.createElement("div"),Nr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Nr.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;n.firstChild;)t.appendChild(n.firstChild)}});function hr(t,n){if(n){var i=t.firstChild;if(i&&i===t.lastChild&&i.nodeType===3){i.nodeValue=n;return}}t.textContent=n}var Dt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Br=["Webkit","ms","Moz","O"];Object.keys(Dt).forEach(function(t){Br.forEach(function(n){n=n+t.charAt(0).toUpperCase()+t.substring(1),Dt[n]=Dt[t]})});function Mr(t,n,i){return n==null||typeof n=="boolean"||n===""?"":i||typeof n!="number"||n===0||Dt.hasOwnProperty(t)&&Dt[t]?(""+n).trim():n+"px"}function qn(t,n){t=t.style;for(var i in n)if(n.hasOwnProperty(i)){var o=i.indexOf("--")===0,d=Mr(i,n[i],o);i==="float"&&(i="cssFloat"),o?t.setProperty(i,d):t[i]=d}}var ca=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function tr(t,n){if(n){if(ca[t]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(s(137,t));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(s(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(s(61))}if(n.style!=null&&typeof n.style!="object")throw Error(s(62))}}function rr(t,n){if(t.indexOf("-")===-1)return typeof n.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var kt=null;function Pn(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var J=null,Re=null,$t=null;function St(t){if(t=Cs(t)){if(typeof J!="function")throw Error(s(280));var n=t.stateNode;n&&(n=Vo(n),J(t.stateNode,t.type,n))}}function qr(t){Re?$t?$t.push(t):$t=[t]:Re=t}function dt(){if(Re){var t=Re,n=$t;if($t=Re=null,St(t),n)for(t=0;t<n.length;t++)St(n[t])}}function Fa(t,n){return t(n)}function Un(){}var La=!1;function we(t,n,i){if(La)return t(n,i);La=!0;try{return Fa(t,n,i)}finally{La=!1,(Re!==null||$t!==null)&&(Un(),dt())}}function Hn(t,n){var i=t.stateNode;if(i===null)return null;var o=Vo(i);if(o===null)return null;i=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(i&&typeof i!="function")throw Error(s(231,n,typeof i));return i}var Oe=!1;if(f)try{var Vn={};Object.defineProperty(Vn,"passive",{get:function(){Oe=!0}}),window.addEventListener("test",Vn,Vn),window.removeEventListener("test",Vn,Vn)}catch{Oe=!1}function Wn(t,n,i,o,d,u,v,P,A){var te=Array.prototype.slice.call(arguments,3);try{n.apply(i,te)}catch(me){this.onError(me)}}var kr=!1,Wt=null,lt=!1,wt=null,_t={onError:function(t){kr=!0,Wt=t}};function Ur(t,n,i,o,d,u,v,P,A){kr=!1,Wt=null,Wn.apply(_t,arguments)}function Gn(t,n,i,o,d,u,v,P,A){if(Ur.apply(this,arguments),kr){if(kr){var te=Wt;kr=!1,Wt=null}else throw Error(s(198));lt||(lt=!0,wt=te)}}function Hr(t){var n=t,i=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(i=n.return),t=n.return;while(t)}return n.tag===3?i:null}function zt(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function cr(t){if(Hr(t)!==t)throw Error(s(188))}function E(t){var n=t.alternate;if(!n){if(n=Hr(t),n===null)throw Error(s(188));return n!==t?null:t}for(var i=t,o=n;;){var d=i.return;if(d===null)break;var u=d.alternate;if(u===null){if(o=d.return,o!==null){i=o;continue}break}if(d.child===u.child){for(u=d.child;u;){if(u===i)return cr(d),t;if(u===o)return cr(d),n;u=u.sibling}throw Error(s(188))}if(i.return!==o.return)i=d,o=u;else{for(var v=!1,P=d.child;P;){if(P===i){v=!0,i=d,o=u;break}if(P===o){v=!0,o=d,i=u;break}P=P.sibling}if(!v){for(P=u.child;P;){if(P===i){v=!0,i=u,o=d;break}if(P===o){v=!0,o=u,i=d;break}P=P.sibling}if(!v)throw Error(s(189))}}if(i.alternate!==o)throw Error(s(190))}if(i.tag!==3)throw Error(s(188));return i.stateNode.current===i?t:n}function ce(t){return t=E(t),t!==null?Me(t):null}function Me(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var n=Me(t);if(n!==null)return n;t=t.sibling}return null}var Ke=a.unstable_scheduleCallback,ht=a.unstable_cancelCallback,ct=a.unstable_shouldYield,Ft=a.unstable_requestPaint,it=a.unstable_now,Qe=a.unstable_getCurrentPriorityLevel,yt=a.unstable_ImmediatePriority,Xe=a.unstable_UserBlockingPriority,gn=a.unstable_NormalPriority,Sr=a.unstable_LowPriority,Qn=a.unstable_IdlePriority,Kn=null,nr=null;function cs(t){if(nr&&typeof nr.onCommitFiberRoot=="function")try{nr.onCommitFiberRoot(Kn,t,void 0,(t.current.flags&128)===128)}catch{}}var Vr=Math.clz32?Math.clz32:Lc,da=Math.log,Fc=Math.LN2;function Lc(t){return t>>>=0,t===0?32:31-(da(t)/Fc|0)|0}var gi=64,vi=4194304;function Oa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function yi(t,n){var i=t.pendingLanes;if(i===0)return 0;var o=0,d=t.suspendedLanes,u=t.pingedLanes,v=i&268435455;if(v!==0){var P=v&~d;P!==0?o=Oa(P):(u&=v,u!==0&&(o=Oa(u)))}else v=i&~d,v!==0?o=Oa(v):u!==0&&(o=Oa(u));if(o===0)return 0;if(n!==0&&n!==o&&(n&d)===0&&(d=o&-o,u=n&-n,d>=u||d===16&&(u&4194240)!==0))return n;if((o&4)!==0&&(o|=i&16),n=t.entangledLanes,n!==0)for(t=t.entanglements,n&=o;0<n;)i=31-Vr(n),d=1<<i,o|=t[i],n&=~d;return o}function Oc(t,n){switch(t){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ic(t,n){for(var i=t.suspendedLanes,o=t.pingedLanes,d=t.expirationTimes,u=t.pendingLanes;0<u;){var v=31-Vr(u),P=1<<v,A=d[v];A===-1?((P&i)===0||(P&o)!==0)&&(d[v]=Oc(P,n)):A<=n&&(t.expiredLanes|=P),u&=~P}}function ds(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ro(){var t=gi;return gi<<=1,(gi&4194240)===0&&(gi=64),t}function us(t){for(var n=[],i=0;31>i;i++)n.push(t);return n}function Ia(t,n,i){t.pendingLanes|=n,n!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,n=31-Vr(n),t[n]=i}function Bc(t,n){var i=t.pendingLanes&~n;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=n,t.mutableReadLanes&=n,t.entangledLanes&=n,n=t.entanglements;var o=t.eventTimes;for(t=t.expirationTimes;0<i;){var d=31-Vr(i),u=1<<d;n[d]=0,o[d]=-1,t[d]=-1,i&=~u}}function ps(t,n){var i=t.entangledLanes|=n;for(t=t.entanglements;i;){var o=31-Vr(i),d=1<<o;d&n|t[o]&n&&(t[o]|=n),i&=~d}}var mt=0;function Po(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var zo,ua,Ba,No,fs,hs=!1,Yn=[],zn=null,Nn=null,Mn=null,Ct=new Map,B=new Map,K=[],ee="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function W(t,n){switch(t){case"focusin":case"focusout":zn=null;break;case"dragenter":case"dragleave":Nn=null;break;case"mouseover":case"mouseout":Mn=null;break;case"pointerover":case"pointerout":Ct.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":B.delete(n.pointerId)}}function fe(t,n,i,o,d,u){return t===null||t.nativeEvent!==u?(t={blockedOn:n,domEventName:i,eventSystemFlags:o,nativeEvent:u,targetContainers:[d]},n!==null&&(n=Cs(n),n!==null&&ua(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,d!==null&&n.indexOf(d)===-1&&n.push(d),t)}function Te(t,n,i,o,d){switch(n){case"focusin":return zn=fe(zn,t,n,i,o,d),!0;case"dragenter":return Nn=fe(Nn,t,n,i,o,d),!0;case"mouseover":return Mn=fe(Mn,t,n,i,o,d),!0;case"pointerover":var u=d.pointerId;return Ct.set(u,fe(Ct.get(u)||null,t,n,i,o,d)),!0;case"gotpointercapture":return u=d.pointerId,B.set(u,fe(B.get(u)||null,t,n,i,o,d)),!0}return!1}function Ue(t){var n=qa(t.target);if(n!==null){var i=Hr(n);if(i!==null){if(n=i.tag,n===13){if(n=zt(i),n!==null){t.blockedOn=n,fs(t.priority,function(){Ba(i)});return}}else if(n===3&&i.stateNode.current.memoizedState.isDehydrated){t.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}t.blockedOn=null}function nt(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var i=Uc(t.domEventName,t.eventSystemFlags,n[0],t.nativeEvent);if(i===null){i=t.nativeEvent;var o=new i.constructor(i.type,i);kt=o,i.target.dispatchEvent(o),kt=null}else return n=Cs(i),n!==null&&ua(n),t.blockedOn=i,!1;n.shift()}return!0}function Ut(t,n,i){nt(t)&&i.delete(n)}function Yt(){hs=!1,zn!==null&&nt(zn)&&(zn=null),Nn!==null&&nt(Nn)&&(Nn=null),Mn!==null&&nt(Mn)&&(Mn=null),Ct.forEach(Ut),B.forEach(Ut)}function sn(t,n){t.blockedOn===n&&(t.blockedOn=null,hs||(hs=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Yt)))}function pa(t){function n(d){return sn(d,t)}if(0<Yn.length){sn(Yn[0],t);for(var i=1;i<Yn.length;i++){var o=Yn[i];o.blockedOn===t&&(o.blockedOn=null)}}for(zn!==null&&sn(zn,t),Nn!==null&&sn(Nn,t),Mn!==null&&sn(Mn,t),Ct.forEach(n),B.forEach(n),i=0;i<K.length;i++)o=K[i],o.blockedOn===t&&(o.blockedOn=null);for(;0<K.length&&(i=K[0],i.blockedOn===null);)Ue(i),i.blockedOn===null&&K.shift()}var Jn=F.ReactCurrentBatchConfig,vn=!0;function Z1(t,n,i,o){var d=mt,u=Jn.transition;Jn.transition=null;try{mt=1,qc(t,n,i,o)}finally{mt=d,Jn.transition=u}}function ey(t,n,i,o){var d=mt,u=Jn.transition;Jn.transition=null;try{mt=4,qc(t,n,i,o)}finally{mt=d,Jn.transition=u}}function qc(t,n,i,o){if(vn){var d=Uc(t,n,i,o);if(d===null)sd(t,n,o,Mo,i),W(t,o);else if(Te(d,t,n,i,o))o.stopPropagation();else if(W(t,o),n&4&&-1<ee.indexOf(t)){for(;d!==null;){var u=Cs(d);if(u!==null&&zo(u),u=Uc(t,n,i,o),u===null&&sd(t,n,o,Mo,i),u===d)break;d=u}d!==null&&o.stopPropagation()}else sd(t,n,o,null,i)}}var Mo=null;function Uc(t,n,i,o){if(Mo=null,t=Pn(o),t=qa(t),t!==null)if(n=Hr(t),n===null)t=null;else if(i=n.tag,i===13){if(t=zt(n),t!==null)return t;t=null}else if(i===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null);return Mo=t,null}function Pf(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Qe()){case yt:return 1;case Xe:return 4;case gn:case Sr:return 16;case Qn:return 536870912;default:return 16}default:return 16}}var fa=null,Hc=null,Ao=null;function zf(){if(Ao)return Ao;var t,n=Hc,i=n.length,o,d="value"in fa?fa.value:fa.textContent,u=d.length;for(t=0;t<i&&n[t]===d[t];t++);var v=i-t;for(o=1;o<=v&&n[i-o]===d[u-o];o++);return Ao=d.slice(t,1<o?1-o:void 0)}function To(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Do(){return!0}function Nf(){return!1}function Wr(t){function n(i,o,d,u,v){this._reactName=i,this._targetInst=d,this.type=o,this.nativeEvent=u,this.target=v,this.currentTarget=null;for(var P in t)t.hasOwnProperty(P)&&(i=t[P],this[P]=i?i(u):u[P]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Do:Nf,this.isPropagationStopped=Nf,this}return H(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=Do)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=Do)},persist:function(){},isPersistent:Do}),n}var ji={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vc=Wr(ji),ms=H({},ji,{view:0,detail:0}),ty=Wr(ms),Wc,Gc,xs,Fo=H({},ms,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==xs&&(xs&&t.type==="mousemove"?(Wc=t.screenX-xs.screenX,Gc=t.screenY-xs.screenY):Gc=Wc=0,xs=t),Wc)},movementY:function(t){return"movementY"in t?t.movementY:Gc}}),Mf=Wr(Fo),ry=H({},Fo,{dataTransfer:0}),ny=Wr(ry),ay=H({},ms,{relatedTarget:0}),Qc=Wr(ay),iy=H({},ji,{animationName:0,elapsedTime:0,pseudoElement:0}),sy=Wr(iy),oy=H({},ji,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ly=Wr(oy),cy=H({},ji,{data:0}),Af=Wr(cy),dy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},uy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},py={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fy(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=py[t])?!!n[t]:!1}function Kc(){return fy}var hy=H({},ms,{key:function(t){if(t.key){var n=dy[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=To(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?uy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kc,charCode:function(t){return t.type==="keypress"?To(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?To(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),my=Wr(hy),xy=H({},Fo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Tf=Wr(xy),gy=H({},ms,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kc}),vy=Wr(gy),yy=H({},ji,{propertyName:0,elapsedTime:0,pseudoElement:0}),jy=Wr(yy),by=H({},Fo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),wy=Wr(by),_y=[9,13,27,32],Yc=f&&"CompositionEvent"in window,gs=null;f&&"documentMode"in document&&(gs=document.documentMode);var ky=f&&"TextEvent"in window&&!gs,Df=f&&(!Yc||gs&&8<gs&&11>=gs),Ff=" ",Lf=!1;function Of(t,n){switch(t){case"keyup":return _y.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function If(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var bi=!1;function Sy(t,n){switch(t){case"compositionend":return If(n);case"keypress":return n.which!==32?null:(Lf=!0,Ff);case"textInput":return t=n.data,t===Ff&&Lf?null:t;default:return null}}function Cy(t,n){if(bi)return t==="compositionend"||!Yc&&Of(t,n)?(t=zf(),Ao=Hc=fa=null,bi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Df&&n.locale!=="ko"?null:n.data;default:return null}}var Ey={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bf(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Ey[t.type]:n==="textarea"}function qf(t,n,i,o){qr(o),n=qo(n,"onChange"),0<n.length&&(i=new Vc("onChange","change",null,i,o),t.push({event:i,listeners:n}))}var vs=null,ys=null;function $y(t){sh(t,0)}function Lo(t){var n=Ci(t);if(st(n))return t}function Ry(t,n){if(t==="change")return n}var Uf=!1;if(f){var Jc;if(f){var Xc="oninput"in document;if(!Xc){var Hf=document.createElement("div");Hf.setAttribute("oninput","return;"),Xc=typeof Hf.oninput=="function"}Jc=Xc}else Jc=!1;Uf=Jc&&(!document.documentMode||9<document.documentMode)}function Vf(){vs&&(vs.detachEvent("onpropertychange",Wf),ys=vs=null)}function Wf(t){if(t.propertyName==="value"&&Lo(ys)){var n=[];qf(n,ys,t,Pn(t)),we($y,n)}}function Py(t,n,i){t==="focusin"?(Vf(),vs=n,ys=i,vs.attachEvent("onpropertychange",Wf)):t==="focusout"&&Vf()}function zy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Lo(ys)}function Ny(t,n){if(t==="click")return Lo(n)}function My(t,n){if(t==="input"||t==="change")return Lo(n)}function Ay(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var yn=typeof Object.is=="function"?Object.is:Ay;function js(t,n){if(yn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var i=Object.keys(t),o=Object.keys(n);if(i.length!==o.length)return!1;for(o=0;o<i.length;o++){var d=i[o];if(!g.call(n,d)||!yn(t[d],n[d]))return!1}return!0}function Gf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Qf(t,n){var i=Gf(t);t=0;for(var o;i;){if(i.nodeType===3){if(o=t+i.textContent.length,t<=n&&o>=n)return{node:i,offset:n-t};t=o}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=Gf(i)}}function Kf(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Kf(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Yf(){for(var t=window,n=ft();n instanceof t.HTMLIFrameElement;){try{var i=typeof n.contentWindow.location.href=="string"}catch{i=!1}if(i)t=n.contentWindow;else break;n=ft(t.document)}return n}function Zc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}function Ty(t){var n=Yf(),i=t.focusedElem,o=t.selectionRange;if(n!==i&&i&&i.ownerDocument&&Kf(i.ownerDocument.documentElement,i)){if(o!==null&&Zc(i)){if(n=o.start,t=o.end,t===void 0&&(t=n),"selectionStart"in i)i.selectionStart=n,i.selectionEnd=Math.min(t,i.value.length);else if(t=(n=i.ownerDocument||document)&&n.defaultView||window,t.getSelection){t=t.getSelection();var d=i.textContent.length,u=Math.min(o.start,d);o=o.end===void 0?u:Math.min(o.end,d),!t.extend&&u>o&&(d=o,o=u,u=d),d=Qf(i,u);var v=Qf(i,o);d&&v&&(t.rangeCount!==1||t.anchorNode!==d.node||t.anchorOffset!==d.offset||t.focusNode!==v.node||t.focusOffset!==v.offset)&&(n=n.createRange(),n.setStart(d.node,d.offset),t.removeAllRanges(),u>o?(t.addRange(n),t.extend(v.node,v.offset)):(n.setEnd(v.node,v.offset),t.addRange(n)))}}for(n=[],t=i;t=t.parentNode;)t.nodeType===1&&n.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<n.length;i++)t=n[i],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Dy=f&&"documentMode"in document&&11>=document.documentMode,wi=null,ed=null,bs=null,td=!1;function Jf(t,n,i){var o=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;td||wi==null||wi!==ft(o)||(o=wi,"selectionStart"in o&&Zc(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),bs&&js(bs,o)||(bs=o,o=qo(ed,"onSelect"),0<o.length&&(n=new Vc("onSelect","select",null,n,i),t.push({event:n,listeners:o}),n.target=wi)))}function Oo(t,n){var i={};return i[t.toLowerCase()]=n.toLowerCase(),i["Webkit"+t]="webkit"+n,i["Moz"+t]="moz"+n,i}var _i={animationend:Oo("Animation","AnimationEnd"),animationiteration:Oo("Animation","AnimationIteration"),animationstart:Oo("Animation","AnimationStart"),transitionend:Oo("Transition","TransitionEnd")},rd={},Xf={};f&&(Xf=document.createElement("div").style,"AnimationEvent"in window||(delete _i.animationend.animation,delete _i.animationiteration.animation,delete _i.animationstart.animation),"TransitionEvent"in window||delete _i.transitionend.transition);function Io(t){if(rd[t])return rd[t];if(!_i[t])return t;var n=_i[t],i;for(i in n)if(n.hasOwnProperty(i)&&i in Xf)return rd[t]=n[i];return t}var Zf=Io("animationend"),eh=Io("animationiteration"),th=Io("animationstart"),rh=Io("transitionend"),nh=new Map,ah="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ha(t,n){nh.set(t,n),p(n,[t])}for(var nd=0;nd<ah.length;nd++){var ad=ah[nd],Fy=ad.toLowerCase(),Ly=ad[0].toUpperCase()+ad.slice(1);ha(Fy,"on"+Ly)}ha(Zf,"onAnimationEnd"),ha(eh,"onAnimationIteration"),ha(th,"onAnimationStart"),ha("dblclick","onDoubleClick"),ha("focusin","onFocus"),ha("focusout","onBlur"),ha(rh,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),p("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),p("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),p("onBeforeInput",["compositionend","keypress","textInput","paste"]),p("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),p("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),p("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ws="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Oy=new Set("cancel close invalid load scroll toggle".split(" ").concat(ws));function ih(t,n,i){var o=t.type||"unknown-event";t.currentTarget=i,Gn(o,n,void 0,t),t.currentTarget=null}function sh(t,n){n=(n&4)!==0;for(var i=0;i<t.length;i++){var o=t[i],d=o.event;o=o.listeners;e:{var u=void 0;if(n)for(var v=o.length-1;0<=v;v--){var P=o[v],A=P.instance,te=P.currentTarget;if(P=P.listener,A!==u&&d.isPropagationStopped())break e;ih(d,P,te),u=A}else for(v=0;v<o.length;v++){if(P=o[v],A=P.instance,te=P.currentTarget,P=P.listener,A!==u&&d.isPropagationStopped())break e;ih(d,P,te),u=A}}}if(lt)throw t=wt,lt=!1,wt=null,t}function Nt(t,n){var i=n[pd];i===void 0&&(i=n[pd]=new Set);var o=t+"__bubble";i.has(o)||(oh(n,t,2,!1),i.add(o))}function id(t,n,i){var o=0;n&&(o|=4),oh(i,t,o,n)}var Bo="_reactListening"+Math.random().toString(36).slice(2);function _s(t){if(!t[Bo]){t[Bo]=!0,l.forEach(function(i){i!=="selectionchange"&&(Oy.has(i)||id(i,!1,t),id(i,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Bo]||(n[Bo]=!0,id("selectionchange",!1,n))}}function oh(t,n,i,o){switch(Pf(n)){case 1:var d=Z1;break;case 4:d=ey;break;default:d=qc}i=d.bind(null,n,i,t),d=void 0,!Oe||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(d=!0),o?d!==void 0?t.addEventListener(n,i,{capture:!0,passive:d}):t.addEventListener(n,i,!0):d!==void 0?t.addEventListener(n,i,{passive:d}):t.addEventListener(n,i,!1)}function sd(t,n,i,o,d){var u=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var v=o.tag;if(v===3||v===4){var P=o.stateNode.containerInfo;if(P===d||P.nodeType===8&&P.parentNode===d)break;if(v===4)for(v=o.return;v!==null;){var A=v.tag;if((A===3||A===4)&&(A=v.stateNode.containerInfo,A===d||A.nodeType===8&&A.parentNode===d))return;v=v.return}for(;P!==null;){if(v=qa(P),v===null)return;if(A=v.tag,A===5||A===6){o=u=v;continue e}P=P.parentNode}}o=o.return}we(function(){var te=u,me=Pn(i),ye=[];e:{var he=nh.get(t);if(he!==void 0){var $e=Vc,Ne=t;switch(t){case"keypress":if(To(i)===0)break e;case"keydown":case"keyup":$e=my;break;case"focusin":Ne="focus",$e=Qc;break;case"focusout":Ne="blur",$e=Qc;break;case"beforeblur":case"afterblur":$e=Qc;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":$e=Mf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":$e=ny;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":$e=vy;break;case Zf:case eh:case th:$e=sy;break;case rh:$e=jy;break;case"scroll":$e=ty;break;case"wheel":$e=wy;break;case"copy":case"cut":case"paste":$e=ly;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":$e=Tf}var Ae=(n&4)!==0,Ht=!Ae&&t==="scroll",G=Ae?he!==null?he+"Capture":null:he;Ae=[];for(var I=te,Y;I!==null;){Y=I;var _e=Y.stateNode;if(Y.tag===5&&_e!==null&&(Y=_e,G!==null&&(_e=Hn(I,G),_e!=null&&Ae.push(ks(I,_e,Y)))),Ht)break;I=I.return}0<Ae.length&&(he=new $e(he,Ne,null,i,me),ye.push({event:he,listeners:Ae}))}}if((n&7)===0){e:{if(he=t==="mouseover"||t==="pointerover",$e=t==="mouseout"||t==="pointerout",he&&i!==kt&&(Ne=i.relatedTarget||i.fromElement)&&(qa(Ne)||Ne[Xn]))break e;if(($e||he)&&(he=me.window===me?me:(he=me.ownerDocument)?he.defaultView||he.parentWindow:window,$e?(Ne=i.relatedTarget||i.toElement,$e=te,Ne=Ne?qa(Ne):null,Ne!==null&&(Ht=Hr(Ne),Ne!==Ht||Ne.tag!==5&&Ne.tag!==6)&&(Ne=null)):($e=null,Ne=te),$e!==Ne)){if(Ae=Mf,_e="onMouseLeave",G="onMouseEnter",I="mouse",(t==="pointerout"||t==="pointerover")&&(Ae=Tf,_e="onPointerLeave",G="onPointerEnter",I="pointer"),Ht=$e==null?he:Ci($e),Y=Ne==null?he:Ci(Ne),he=new Ae(_e,I+"leave",$e,i,me),he.target=Ht,he.relatedTarget=Y,_e=null,qa(me)===te&&(Ae=new Ae(G,I+"enter",Ne,i,me),Ae.target=Y,Ae.relatedTarget=Ht,_e=Ae),Ht=_e,$e&&Ne)t:{for(Ae=$e,G=Ne,I=0,Y=Ae;Y;Y=ki(Y))I++;for(Y=0,_e=G;_e;_e=ki(_e))Y++;for(;0<I-Y;)Ae=ki(Ae),I--;for(;0<Y-I;)G=ki(G),Y--;for(;I--;){if(Ae===G||G!==null&&Ae===G.alternate)break t;Ae=ki(Ae),G=ki(G)}Ae=null}else Ae=null;$e!==null&&lh(ye,he,$e,Ae,!1),Ne!==null&&Ht!==null&&lh(ye,Ht,Ne,Ae,!0)}}e:{if(he=te?Ci(te):window,$e=he.nodeName&&he.nodeName.toLowerCase(),$e==="select"||$e==="input"&&he.type==="file")var De=Ry;else if(Bf(he))if(Uf)De=My;else{De=zy;var Be=Py}else($e=he.nodeName)&&$e.toLowerCase()==="input"&&(he.type==="checkbox"||he.type==="radio")&&(De=Ny);if(De&&(De=De(t,te))){qf(ye,De,i,me);break e}Be&&Be(t,he,te),t==="focusout"&&(Be=he._wrapperState)&&Be.controlled&&he.type==="number"&&et(he,"number",he.value)}switch(Be=te?Ci(te):window,t){case"focusin":(Bf(Be)||Be.contentEditable==="true")&&(wi=Be,ed=te,bs=null);break;case"focusout":bs=ed=wi=null;break;case"mousedown":td=!0;break;case"contextmenu":case"mouseup":case"dragend":td=!1,Jf(ye,i,me);break;case"selectionchange":if(Dy)break;case"keydown":case"keyup":Jf(ye,i,me)}var qe;if(Yc)e:{switch(t){case"compositionstart":var Ve="onCompositionStart";break e;case"compositionend":Ve="onCompositionEnd";break e;case"compositionupdate":Ve="onCompositionUpdate";break e}Ve=void 0}else bi?Of(t,i)&&(Ve="onCompositionEnd"):t==="keydown"&&i.keyCode===229&&(Ve="onCompositionStart");Ve&&(Df&&i.locale!=="ko"&&(bi||Ve!=="onCompositionStart"?Ve==="onCompositionEnd"&&bi&&(qe=zf()):(fa=me,Hc="value"in fa?fa.value:fa.textContent,bi=!0)),Be=qo(te,Ve),0<Be.length&&(Ve=new Af(Ve,t,null,i,me),ye.push({event:Ve,listeners:Be}),qe?Ve.data=qe:(qe=If(i),qe!==null&&(Ve.data=qe)))),(qe=ky?Sy(t,i):Cy(t,i))&&(te=qo(te,"onBeforeInput"),0<te.length&&(me=new Af("onBeforeInput","beforeinput",null,i,me),ye.push({event:me,listeners:te}),me.data=qe))}sh(ye,n)})}function ks(t,n,i){return{instance:t,listener:n,currentTarget:i}}function qo(t,n){for(var i=n+"Capture",o=[];t!==null;){var d=t,u=d.stateNode;d.tag===5&&u!==null&&(d=u,u=Hn(t,i),u!=null&&o.unshift(ks(t,u,d)),u=Hn(t,n),u!=null&&o.push(ks(t,u,d))),t=t.return}return o}function ki(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function lh(t,n,i,o,d){for(var u=n._reactName,v=[];i!==null&&i!==o;){var P=i,A=P.alternate,te=P.stateNode;if(A!==null&&A===o)break;P.tag===5&&te!==null&&(P=te,d?(A=Hn(i,u),A!=null&&v.unshift(ks(i,A,P))):d||(A=Hn(i,u),A!=null&&v.push(ks(i,A,P)))),i=i.return}v.length!==0&&t.push({event:n,listeners:v})}var Iy=/\r\n?/g,By=/\u0000|\uFFFD/g;function ch(t){return(typeof t=="string"?t:""+t).replace(Iy,`
`).replace(By,"")}function Uo(t,n,i){if(n=ch(n),ch(t)!==n&&i)throw Error(s(425))}function Ho(){}var od=null,ld=null;function cd(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var dd=typeof setTimeout=="function"?setTimeout:void 0,qy=typeof clearTimeout=="function"?clearTimeout:void 0,dh=typeof Promise=="function"?Promise:void 0,Uy=typeof queueMicrotask=="function"?queueMicrotask:typeof dh<"u"?function(t){return dh.resolve(null).then(t).catch(Hy)}:dd;function Hy(t){setTimeout(function(){throw t})}function ud(t,n){var i=n,o=0;do{var d=i.nextSibling;if(t.removeChild(i),d&&d.nodeType===8)if(i=d.data,i==="/$"){if(o===0){t.removeChild(d),pa(n);return}o--}else i!=="$"&&i!=="$?"&&i!=="$!"||o++;i=d}while(i);pa(n)}function ma(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return t}function uh(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var i=t.data;if(i==="$"||i==="$!"||i==="$?"){if(n===0)return t;n--}else i==="/$"&&n++}t=t.previousSibling}return null}var Si=Math.random().toString(36).slice(2),An="__reactFiber$"+Si,Ss="__reactProps$"+Si,Xn="__reactContainer$"+Si,pd="__reactEvents$"+Si,Vy="__reactListeners$"+Si,Wy="__reactHandles$"+Si;function qa(t){var n=t[An];if(n)return n;for(var i=t.parentNode;i;){if(n=i[Xn]||i[An]){if(i=n.alternate,n.child!==null||i!==null&&i.child!==null)for(t=uh(t);t!==null;){if(i=t[An])return i;t=uh(t)}return n}t=i,i=t.parentNode}return null}function Cs(t){return t=t[An]||t[Xn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ci(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(s(33))}function Vo(t){return t[Ss]||null}var fd=[],Ei=-1;function xa(t){return{current:t}}function Mt(t){0>Ei||(t.current=fd[Ei],fd[Ei]=null,Ei--)}function Rt(t,n){Ei++,fd[Ei]=t.current,t.current=n}var ga={},mr=xa(ga),Ar=xa(!1),Ua=ga;function $i(t,n){var i=t.type.contextTypes;if(!i)return ga;var o=t.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===n)return o.__reactInternalMemoizedMaskedChildContext;var d={},u;for(u in i)d[u]=n[u];return o&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=n,t.__reactInternalMemoizedMaskedChildContext=d),d}function Tr(t){return t=t.childContextTypes,t!=null}function Wo(){Mt(Ar),Mt(mr)}function ph(t,n,i){if(mr.current!==ga)throw Error(s(168));Rt(mr,n),Rt(Ar,i)}function fh(t,n,i){var o=t.stateNode;if(n=n.childContextTypes,typeof o.getChildContext!="function")return i;o=o.getChildContext();for(var d in o)if(!(d in n))throw Error(s(108,ve(t)||"Unknown",d));return H({},i,o)}function Go(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ga,Ua=mr.current,Rt(mr,t),Rt(Ar,Ar.current),!0}function hh(t,n,i){var o=t.stateNode;if(!o)throw Error(s(169));i?(t=fh(t,n,Ua),o.__reactInternalMemoizedMergedChildContext=t,Mt(Ar),Mt(mr),Rt(mr,t)):Mt(Ar),Rt(Ar,i)}var Zn=null,Qo=!1,hd=!1;function mh(t){Zn===null?Zn=[t]:Zn.push(t)}function Gy(t){Qo=!0,mh(t)}function va(){if(!hd&&Zn!==null){hd=!0;var t=0,n=mt;try{var i=Zn;for(mt=1;t<i.length;t++){var o=i[t];do o=o(!0);while(o!==null)}Zn=null,Qo=!1}catch(d){throw Zn!==null&&(Zn=Zn.slice(t+1)),Ke(yt,va),d}finally{mt=n,hd=!1}}return null}var Ri=[],Pi=0,Ko=null,Yo=0,on=[],ln=0,Ha=null,ea=1,ta="";function Va(t,n){Ri[Pi++]=Yo,Ri[Pi++]=Ko,Ko=t,Yo=n}function xh(t,n,i){on[ln++]=ea,on[ln++]=ta,on[ln++]=Ha,Ha=t;var o=ea;t=ta;var d=32-Vr(o)-1;o&=~(1<<d),i+=1;var u=32-Vr(n)+d;if(30<u){var v=d-d%5;u=(o&(1<<v)-1).toString(32),o>>=v,d-=v,ea=1<<32-Vr(n)+d|i<<d|o,ta=u+t}else ea=1<<u|i<<d|o,ta=t}function md(t){t.return!==null&&(Va(t,1),xh(t,1,0))}function xd(t){for(;t===Ko;)Ko=Ri[--Pi],Ri[Pi]=null,Yo=Ri[--Pi],Ri[Pi]=null;for(;t===Ha;)Ha=on[--ln],on[ln]=null,ta=on[--ln],on[ln]=null,ea=on[--ln],on[ln]=null}var Gr=null,Qr=null,Lt=!1,jn=null;function gh(t,n){var i=pn(5,null,null,0);i.elementType="DELETED",i.stateNode=n,i.return=t,n=t.deletions,n===null?(t.deletions=[i],t.flags|=16):n.push(i)}function vh(t,n){switch(t.tag){case 5:var i=t.type;return n=n.nodeType!==1||i.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(t.stateNode=n,Gr=t,Qr=ma(n.firstChild),!0):!1;case 6:return n=t.pendingProps===""||n.nodeType!==3?null:n,n!==null?(t.stateNode=n,Gr=t,Qr=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(i=Ha!==null?{id:ea,overflow:ta}:null,t.memoizedState={dehydrated:n,treeContext:i,retryLane:1073741824},i=pn(18,null,null,0),i.stateNode=n,i.return=t,t.child=i,Gr=t,Qr=null,!0):!1;default:return!1}}function gd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function vd(t){if(Lt){var n=Qr;if(n){var i=n;if(!vh(t,n)){if(gd(t))throw Error(s(418));n=ma(i.nextSibling);var o=Gr;n&&vh(t,n)?gh(o,i):(t.flags=t.flags&-4097|2,Lt=!1,Gr=t)}}else{if(gd(t))throw Error(s(418));t.flags=t.flags&-4097|2,Lt=!1,Gr=t}}}function yh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Gr=t}function Jo(t){if(t!==Gr)return!1;if(!Lt)return yh(t),Lt=!0,!1;var n;if((n=t.tag!==3)&&!(n=t.tag!==5)&&(n=t.type,n=n!=="head"&&n!=="body"&&!cd(t.type,t.memoizedProps)),n&&(n=Qr)){if(gd(t))throw jh(),Error(s(418));for(;n;)gh(t,n),n=ma(n.nextSibling)}if(yh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));e:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8){var i=t.data;if(i==="/$"){if(n===0){Qr=ma(t.nextSibling);break e}n--}else i!=="$"&&i!=="$!"&&i!=="$?"||n++}t=t.nextSibling}Qr=null}}else Qr=Gr?ma(t.stateNode.nextSibling):null;return!0}function jh(){for(var t=Qr;t;)t=ma(t.nextSibling)}function zi(){Qr=Gr=null,Lt=!1}function yd(t){jn===null?jn=[t]:jn.push(t)}var Qy=F.ReactCurrentBatchConfig;function Es(t,n,i){if(t=i.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(i._owner){if(i=i._owner,i){if(i.tag!==1)throw Error(s(309));var o=i.stateNode}if(!o)throw Error(s(147,t));var d=o,u=""+t;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===u?n.ref:(n=function(v){var P=d.refs;v===null?delete P[u]:P[u]=v},n._stringRef=u,n)}if(typeof t!="string")throw Error(s(284));if(!i._owner)throw Error(s(290,t))}return t}function Xo(t,n){throw t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t))}function bh(t){var n=t._init;return n(t._payload)}function wh(t){function n(G,I){if(t){var Y=G.deletions;Y===null?(G.deletions=[I],G.flags|=16):Y.push(I)}}function i(G,I){if(!t)return null;for(;I!==null;)n(G,I),I=I.sibling;return null}function o(G,I){for(G=new Map;I!==null;)I.key!==null?G.set(I.key,I):G.set(I.index,I),I=I.sibling;return G}function d(G,I){return G=Ca(G,I),G.index=0,G.sibling=null,G}function u(G,I,Y){return G.index=Y,t?(Y=G.alternate,Y!==null?(Y=Y.index,Y<I?(G.flags|=2,I):Y):(G.flags|=2,I)):(G.flags|=1048576,I)}function v(G){return t&&G.alternate===null&&(G.flags|=2),G}function P(G,I,Y,_e){return I===null||I.tag!==6?(I=du(Y,G.mode,_e),I.return=G,I):(I=d(I,Y),I.return=G,I)}function A(G,I,Y,_e){var De=Y.type;return De===L?me(G,I,Y.props.children,_e,Y.key):I!==null&&(I.elementType===De||typeof De=="object"&&De!==null&&De.$$typeof===Q&&bh(De)===I.type)?(_e=d(I,Y.props),_e.ref=Es(G,I,Y),_e.return=G,_e):(_e=wl(Y.type,Y.key,Y.props,null,G.mode,_e),_e.ref=Es(G,I,Y),_e.return=G,_e)}function te(G,I,Y,_e){return I===null||I.tag!==4||I.stateNode.containerInfo!==Y.containerInfo||I.stateNode.implementation!==Y.implementation?(I=uu(Y,G.mode,_e),I.return=G,I):(I=d(I,Y.children||[]),I.return=G,I)}function me(G,I,Y,_e,De){return I===null||I.tag!==7?(I=Za(Y,G.mode,_e,De),I.return=G,I):(I=d(I,Y),I.return=G,I)}function ye(G,I,Y){if(typeof I=="string"&&I!==""||typeof I=="number")return I=du(""+I,G.mode,Y),I.return=G,I;if(typeof I=="object"&&I!==null){switch(I.$$typeof){case ne:return Y=wl(I.type,I.key,I.props,null,G.mode,Y),Y.ref=Es(G,null,I),Y.return=G,Y;case X:return I=uu(I,G.mode,Y),I.return=G,I;case Q:var _e=I._init;return ye(G,_e(I._payload),Y)}if(ie(I)||xe(I))return I=Za(I,G.mode,Y,null),I.return=G,I;Xo(G,I)}return null}function he(G,I,Y,_e){var De=I!==null?I.key:null;if(typeof Y=="string"&&Y!==""||typeof Y=="number")return De!==null?null:P(G,I,""+Y,_e);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case ne:return Y.key===De?A(G,I,Y,_e):null;case X:return Y.key===De?te(G,I,Y,_e):null;case Q:return De=Y._init,he(G,I,De(Y._payload),_e)}if(ie(Y)||xe(Y))return De!==null?null:me(G,I,Y,_e,null);Xo(G,Y)}return null}function $e(G,I,Y,_e,De){if(typeof _e=="string"&&_e!==""||typeof _e=="number")return G=G.get(Y)||null,P(I,G,""+_e,De);if(typeof _e=="object"&&_e!==null){switch(_e.$$typeof){case ne:return G=G.get(_e.key===null?Y:_e.key)||null,A(I,G,_e,De);case X:return G=G.get(_e.key===null?Y:_e.key)||null,te(I,G,_e,De);case Q:var Be=_e._init;return $e(G,I,Y,Be(_e._payload),De)}if(ie(_e)||xe(_e))return G=G.get(Y)||null,me(I,G,_e,De,null);Xo(I,_e)}return null}function Ne(G,I,Y,_e){for(var De=null,Be=null,qe=I,Ve=I=0,sr=null;qe!==null&&Ve<Y.length;Ve++){qe.index>Ve?(sr=qe,qe=null):sr=qe.sibling;var pt=he(G,qe,Y[Ve],_e);if(pt===null){qe===null&&(qe=sr);break}t&&qe&&pt.alternate===null&&n(G,qe),I=u(pt,I,Ve),Be===null?De=pt:Be.sibling=pt,Be=pt,qe=sr}if(Ve===Y.length)return i(G,qe),Lt&&Va(G,Ve),De;if(qe===null){for(;Ve<Y.length;Ve++)qe=ye(G,Y[Ve],_e),qe!==null&&(I=u(qe,I,Ve),Be===null?De=qe:Be.sibling=qe,Be=qe);return Lt&&Va(G,Ve),De}for(qe=o(G,qe);Ve<Y.length;Ve++)sr=$e(qe,G,Ve,Y[Ve],_e),sr!==null&&(t&&sr.alternate!==null&&qe.delete(sr.key===null?Ve:sr.key),I=u(sr,I,Ve),Be===null?De=sr:Be.sibling=sr,Be=sr);return t&&qe.forEach(function(Ea){return n(G,Ea)}),Lt&&Va(G,Ve),De}function Ae(G,I,Y,_e){var De=xe(Y);if(typeof De!="function")throw Error(s(150));if(Y=De.call(Y),Y==null)throw Error(s(151));for(var Be=De=null,qe=I,Ve=I=0,sr=null,pt=Y.next();qe!==null&&!pt.done;Ve++,pt=Y.next()){qe.index>Ve?(sr=qe,qe=null):sr=qe.sibling;var Ea=he(G,qe,pt.value,_e);if(Ea===null){qe===null&&(qe=sr);break}t&&qe&&Ea.alternate===null&&n(G,qe),I=u(Ea,I,Ve),Be===null?De=Ea:Be.sibling=Ea,Be=Ea,qe=sr}if(pt.done)return i(G,qe),Lt&&Va(G,Ve),De;if(qe===null){for(;!pt.done;Ve++,pt=Y.next())pt=ye(G,pt.value,_e),pt!==null&&(I=u(pt,I,Ve),Be===null?De=pt:Be.sibling=pt,Be=pt);return Lt&&Va(G,Ve),De}for(qe=o(G,qe);!pt.done;Ve++,pt=Y.next())pt=$e(qe,G,Ve,pt.value,_e),pt!==null&&(t&&pt.alternate!==null&&qe.delete(pt.key===null?Ve:pt.key),I=u(pt,I,Ve),Be===null?De=pt:Be.sibling=pt,Be=pt);return t&&qe.forEach(function(E0){return n(G,E0)}),Lt&&Va(G,Ve),De}function Ht(G,I,Y,_e){if(typeof Y=="object"&&Y!==null&&Y.type===L&&Y.key===null&&(Y=Y.props.children),typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case ne:e:{for(var De=Y.key,Be=I;Be!==null;){if(Be.key===De){if(De=Y.type,De===L){if(Be.tag===7){i(G,Be.sibling),I=d(Be,Y.props.children),I.return=G,G=I;break e}}else if(Be.elementType===De||typeof De=="object"&&De!==null&&De.$$typeof===Q&&bh(De)===Be.type){i(G,Be.sibling),I=d(Be,Y.props),I.ref=Es(G,Be,Y),I.return=G,G=I;break e}i(G,Be);break}else n(G,Be);Be=Be.sibling}Y.type===L?(I=Za(Y.props.children,G.mode,_e,Y.key),I.return=G,G=I):(_e=wl(Y.type,Y.key,Y.props,null,G.mode,_e),_e.ref=Es(G,I,Y),_e.return=G,G=_e)}return v(G);case X:e:{for(Be=Y.key;I!==null;){if(I.key===Be)if(I.tag===4&&I.stateNode.containerInfo===Y.containerInfo&&I.stateNode.implementation===Y.implementation){i(G,I.sibling),I=d(I,Y.children||[]),I.return=G,G=I;break e}else{i(G,I);break}else n(G,I);I=I.sibling}I=uu(Y,G.mode,_e),I.return=G,G=I}return v(G);case Q:return Be=Y._init,Ht(G,I,Be(Y._payload),_e)}if(ie(Y))return Ne(G,I,Y,_e);if(xe(Y))return Ae(G,I,Y,_e);Xo(G,Y)}return typeof Y=="string"&&Y!==""||typeof Y=="number"?(Y=""+Y,I!==null&&I.tag===6?(i(G,I.sibling),I=d(I,Y),I.return=G,G=I):(i(G,I),I=du(Y,G.mode,_e),I.return=G,G=I),v(G)):i(G,I)}return Ht}var Ni=wh(!0),_h=wh(!1),Zo=xa(null),el=null,Mi=null,jd=null;function bd(){jd=Mi=el=null}function wd(t){var n=Zo.current;Mt(Zo),t._currentValue=n}function _d(t,n,i){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===i)break;t=t.return}}function Ai(t,n){el=t,jd=Mi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&n)!==0&&(Dr=!0),t.firstContext=null)}function cn(t){var n=t._currentValue;if(jd!==t)if(t={context:t,memoizedValue:n,next:null},Mi===null){if(el===null)throw Error(s(308));Mi=t,el.dependencies={lanes:0,firstContext:t}}else Mi=Mi.next=t;return n}var Wa=null;function kd(t){Wa===null?Wa=[t]:Wa.push(t)}function kh(t,n,i,o){var d=n.interleaved;return d===null?(i.next=i,kd(n)):(i.next=d.next,d.next=i),n.interleaved=i,ra(t,o)}function ra(t,n){t.lanes|=n;var i=t.alternate;for(i!==null&&(i.lanes|=n),i=t,t=t.return;t!==null;)t.childLanes|=n,i=t.alternate,i!==null&&(i.childLanes|=n),i=t,t=t.return;return i.tag===3?i.stateNode:null}var ya=!1;function Sd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Sh(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function na(t,n){return{eventTime:t,lane:n,tag:0,payload:null,callback:null,next:null}}function ja(t,n,i){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(ut&2)!==0){var d=o.pending;return d===null?n.next=n:(n.next=d.next,d.next=n),o.pending=n,ra(t,i)}return d=o.interleaved,d===null?(n.next=n,kd(o)):(n.next=d.next,d.next=n),o.interleaved=n,ra(t,i)}function tl(t,n,i){if(n=n.updateQueue,n!==null&&(n=n.shared,(i&4194240)!==0)){var o=n.lanes;o&=t.pendingLanes,i|=o,n.lanes=i,ps(t,i)}}function Ch(t,n){var i=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,i===o)){var d=null,u=null;if(i=i.firstBaseUpdate,i!==null){do{var v={eventTime:i.eventTime,lane:i.lane,tag:i.tag,payload:i.payload,callback:i.callback,next:null};u===null?d=u=v:u=u.next=v,i=i.next}while(i!==null);u===null?d=u=n:u=u.next=n}else d=u=n;i={baseState:o.baseState,firstBaseUpdate:d,lastBaseUpdate:u,shared:o.shared,effects:o.effects},t.updateQueue=i;return}t=i.lastBaseUpdate,t===null?i.firstBaseUpdate=n:t.next=n,i.lastBaseUpdate=n}function rl(t,n,i,o){var d=t.updateQueue;ya=!1;var u=d.firstBaseUpdate,v=d.lastBaseUpdate,P=d.shared.pending;if(P!==null){d.shared.pending=null;var A=P,te=A.next;A.next=null,v===null?u=te:v.next=te,v=A;var me=t.alternate;me!==null&&(me=me.updateQueue,P=me.lastBaseUpdate,P!==v&&(P===null?me.firstBaseUpdate=te:P.next=te,me.lastBaseUpdate=A))}if(u!==null){var ye=d.baseState;v=0,me=te=A=null,P=u;do{var he=P.lane,$e=P.eventTime;if((o&he)===he){me!==null&&(me=me.next={eventTime:$e,lane:0,tag:P.tag,payload:P.payload,callback:P.callback,next:null});e:{var Ne=t,Ae=P;switch(he=n,$e=i,Ae.tag){case 1:if(Ne=Ae.payload,typeof Ne=="function"){ye=Ne.call($e,ye,he);break e}ye=Ne;break e;case 3:Ne.flags=Ne.flags&-65537|128;case 0:if(Ne=Ae.payload,he=typeof Ne=="function"?Ne.call($e,ye,he):Ne,he==null)break e;ye=H({},ye,he);break e;case 2:ya=!0}}P.callback!==null&&P.lane!==0&&(t.flags|=64,he=d.effects,he===null?d.effects=[P]:he.push(P))}else $e={eventTime:$e,lane:he,tag:P.tag,payload:P.payload,callback:P.callback,next:null},me===null?(te=me=$e,A=ye):me=me.next=$e,v|=he;if(P=P.next,P===null){if(P=d.shared.pending,P===null)break;he=P,P=he.next,he.next=null,d.lastBaseUpdate=he,d.shared.pending=null}}while(!0);if(me===null&&(A=ye),d.baseState=A,d.firstBaseUpdate=te,d.lastBaseUpdate=me,n=d.shared.interleaved,n!==null){d=n;do v|=d.lane,d=d.next;while(d!==n)}else u===null&&(d.shared.lanes=0);Ka|=v,t.lanes=v,t.memoizedState=ye}}function Eh(t,n,i){if(t=n.effects,n.effects=null,t!==null)for(n=0;n<t.length;n++){var o=t[n],d=o.callback;if(d!==null){if(o.callback=null,o=i,typeof d!="function")throw Error(s(191,d));d.call(o)}}}var $s={},Tn=xa($s),Rs=xa($s),Ps=xa($s);function Ga(t){if(t===$s)throw Error(s(174));return t}function Cd(t,n){switch(Rt(Ps,n),Rt(Rs,t),Rt(Tn,$s),t=n.nodeType,t){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:vt(null,"");break;default:t=t===8?n.parentNode:n,n=t.namespaceURI||null,t=t.tagName,n=vt(n,t)}Mt(Tn),Rt(Tn,n)}function Ti(){Mt(Tn),Mt(Rs),Mt(Ps)}function $h(t){Ga(Ps.current);var n=Ga(Tn.current),i=vt(n,t.type);n!==i&&(Rt(Rs,t),Rt(Tn,i))}function Ed(t){Rs.current===t&&(Mt(Tn),Mt(Rs))}var Ot=xa(0);function nl(t){for(var n=t;n!==null;){if(n.tag===13){var i=n.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||i.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var $d=[];function Rd(){for(var t=0;t<$d.length;t++)$d[t]._workInProgressVersionPrimary=null;$d.length=0}var al=F.ReactCurrentDispatcher,Pd=F.ReactCurrentBatchConfig,Qa=0,It=null,Jt=null,ar=null,il=!1,zs=!1,Ns=0,Ky=0;function xr(){throw Error(s(321))}function zd(t,n){if(n===null)return!1;for(var i=0;i<n.length&&i<t.length;i++)if(!yn(t[i],n[i]))return!1;return!0}function Nd(t,n,i,o,d,u){if(Qa=u,It=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,al.current=t===null||t.memoizedState===null?Zy:e0,t=i(o,d),zs){u=0;do{if(zs=!1,Ns=0,25<=u)throw Error(s(301));u+=1,ar=Jt=null,n.updateQueue=null,al.current=t0,t=i(o,d)}while(zs)}if(al.current=ll,n=Jt!==null&&Jt.next!==null,Qa=0,ar=Jt=It=null,il=!1,n)throw Error(s(300));return t}function Md(){var t=Ns!==0;return Ns=0,t}function Dn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ar===null?It.memoizedState=ar=t:ar=ar.next=t,ar}function dn(){if(Jt===null){var t=It.alternate;t=t!==null?t.memoizedState:null}else t=Jt.next;var n=ar===null?It.memoizedState:ar.next;if(n!==null)ar=n,Jt=t;else{if(t===null)throw Error(s(310));Jt=t,t={memoizedState:Jt.memoizedState,baseState:Jt.baseState,baseQueue:Jt.baseQueue,queue:Jt.queue,next:null},ar===null?It.memoizedState=ar=t:ar=ar.next=t}return ar}function Ms(t,n){return typeof n=="function"?n(t):n}function Ad(t){var n=dn(),i=n.queue;if(i===null)throw Error(s(311));i.lastRenderedReducer=t;var o=Jt,d=o.baseQueue,u=i.pending;if(u!==null){if(d!==null){var v=d.next;d.next=u.next,u.next=v}o.baseQueue=d=u,i.pending=null}if(d!==null){u=d.next,o=o.baseState;var P=v=null,A=null,te=u;do{var me=te.lane;if((Qa&me)===me)A!==null&&(A=A.next={lane:0,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),o=te.hasEagerState?te.eagerState:t(o,te.action);else{var ye={lane:me,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null};A===null?(P=A=ye,v=o):A=A.next=ye,It.lanes|=me,Ka|=me}te=te.next}while(te!==null&&te!==u);A===null?v=o:A.next=P,yn(o,n.memoizedState)||(Dr=!0),n.memoizedState=o,n.baseState=v,n.baseQueue=A,i.lastRenderedState=o}if(t=i.interleaved,t!==null){d=t;do u=d.lane,It.lanes|=u,Ka|=u,d=d.next;while(d!==t)}else d===null&&(i.lanes=0);return[n.memoizedState,i.dispatch]}function Td(t){var n=dn(),i=n.queue;if(i===null)throw Error(s(311));i.lastRenderedReducer=t;var o=i.dispatch,d=i.pending,u=n.memoizedState;if(d!==null){i.pending=null;var v=d=d.next;do u=t(u,v.action),v=v.next;while(v!==d);yn(u,n.memoizedState)||(Dr=!0),n.memoizedState=u,n.baseQueue===null&&(n.baseState=u),i.lastRenderedState=u}return[u,o]}function Rh(){}function Ph(t,n){var i=It,o=dn(),d=n(),u=!yn(o.memoizedState,d);if(u&&(o.memoizedState=d,Dr=!0),o=o.queue,Dd(Mh.bind(null,i,o,t),[t]),o.getSnapshot!==n||u||ar!==null&&ar.memoizedState.tag&1){if(i.flags|=2048,As(9,Nh.bind(null,i,o,d,n),void 0,null),ir===null)throw Error(s(349));(Qa&30)!==0||zh(i,n,d)}return d}function zh(t,n,i){t.flags|=16384,t={getSnapshot:n,value:i},n=It.updateQueue,n===null?(n={lastEffect:null,stores:null},It.updateQueue=n,n.stores=[t]):(i=n.stores,i===null?n.stores=[t]:i.push(t))}function Nh(t,n,i,o){n.value=i,n.getSnapshot=o,Ah(n)&&Th(t)}function Mh(t,n,i){return i(function(){Ah(n)&&Th(t)})}function Ah(t){var n=t.getSnapshot;t=t.value;try{var i=n();return!yn(t,i)}catch{return!0}}function Th(t){var n=ra(t,1);n!==null&&kn(n,t,1,-1)}function Dh(t){var n=Dn();return typeof t=="function"&&(t=t()),n.memoizedState=n.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ms,lastRenderedState:t},n.queue=t,t=t.dispatch=Xy.bind(null,It,t),[n.memoizedState,t]}function As(t,n,i,o){return t={tag:t,create:n,destroy:i,deps:o,next:null},n=It.updateQueue,n===null?(n={lastEffect:null,stores:null},It.updateQueue=n,n.lastEffect=t.next=t):(i=n.lastEffect,i===null?n.lastEffect=t.next=t:(o=i.next,i.next=t,t.next=o,n.lastEffect=t)),t}function Fh(){return dn().memoizedState}function sl(t,n,i,o){var d=Dn();It.flags|=t,d.memoizedState=As(1|n,i,void 0,o===void 0?null:o)}function ol(t,n,i,o){var d=dn();o=o===void 0?null:o;var u=void 0;if(Jt!==null){var v=Jt.memoizedState;if(u=v.destroy,o!==null&&zd(o,v.deps)){d.memoizedState=As(n,i,u,o);return}}It.flags|=t,d.memoizedState=As(1|n,i,u,o)}function Lh(t,n){return sl(8390656,8,t,n)}function Dd(t,n){return ol(2048,8,t,n)}function Oh(t,n){return ol(4,2,t,n)}function Ih(t,n){return ol(4,4,t,n)}function Bh(t,n){if(typeof n=="function")return t=t(),n(t),function(){n(null)};if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function qh(t,n,i){return i=i!=null?i.concat([t]):null,ol(4,4,Bh.bind(null,n,t),i)}function Fd(){}function Uh(t,n){var i=dn();n=n===void 0?null:n;var o=i.memoizedState;return o!==null&&n!==null&&zd(n,o[1])?o[0]:(i.memoizedState=[t,n],t)}function Hh(t,n){var i=dn();n=n===void 0?null:n;var o=i.memoizedState;return o!==null&&n!==null&&zd(n,o[1])?o[0]:(t=t(),i.memoizedState=[t,n],t)}function Vh(t,n,i){return(Qa&21)===0?(t.baseState&&(t.baseState=!1,Dr=!0),t.memoizedState=i):(yn(i,n)||(i=Ro(),It.lanes|=i,Ka|=i,t.baseState=!0),n)}function Yy(t,n){var i=mt;mt=i!==0&&4>i?i:4,t(!0);var o=Pd.transition;Pd.transition={};try{t(!1),n()}finally{mt=i,Pd.transition=o}}function Wh(){return dn().memoizedState}function Jy(t,n,i){var o=ka(t);if(i={lane:o,action:i,hasEagerState:!1,eagerState:null,next:null},Gh(t))Qh(n,i);else if(i=kh(t,n,i,o),i!==null){var d=Er();kn(i,t,o,d),Kh(i,n,o)}}function Xy(t,n,i){var o=ka(t),d={lane:o,action:i,hasEagerState:!1,eagerState:null,next:null};if(Gh(t))Qh(n,d);else{var u=t.alternate;if(t.lanes===0&&(u===null||u.lanes===0)&&(u=n.lastRenderedReducer,u!==null))try{var v=n.lastRenderedState,P=u(v,i);if(d.hasEagerState=!0,d.eagerState=P,yn(P,v)){var A=n.interleaved;A===null?(d.next=d,kd(n)):(d.next=A.next,A.next=d),n.interleaved=d;return}}catch{}finally{}i=kh(t,n,d,o),i!==null&&(d=Er(),kn(i,t,o,d),Kh(i,n,o))}}function Gh(t){var n=t.alternate;return t===It||n!==null&&n===It}function Qh(t,n){zs=il=!0;var i=t.pending;i===null?n.next=n:(n.next=i.next,i.next=n),t.pending=n}function Kh(t,n,i){if((i&4194240)!==0){var o=n.lanes;o&=t.pendingLanes,i|=o,n.lanes=i,ps(t,i)}}var ll={readContext:cn,useCallback:xr,useContext:xr,useEffect:xr,useImperativeHandle:xr,useInsertionEffect:xr,useLayoutEffect:xr,useMemo:xr,useReducer:xr,useRef:xr,useState:xr,useDebugValue:xr,useDeferredValue:xr,useTransition:xr,useMutableSource:xr,useSyncExternalStore:xr,useId:xr,unstable_isNewReconciler:!1},Zy={readContext:cn,useCallback:function(t,n){return Dn().memoizedState=[t,n===void 0?null:n],t},useContext:cn,useEffect:Lh,useImperativeHandle:function(t,n,i){return i=i!=null?i.concat([t]):null,sl(4194308,4,Bh.bind(null,n,t),i)},useLayoutEffect:function(t,n){return sl(4194308,4,t,n)},useInsertionEffect:function(t,n){return sl(4,2,t,n)},useMemo:function(t,n){var i=Dn();return n=n===void 0?null:n,t=t(),i.memoizedState=[t,n],t},useReducer:function(t,n,i){var o=Dn();return n=i!==void 0?i(n):n,o.memoizedState=o.baseState=n,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:n},o.queue=t,t=t.dispatch=Jy.bind(null,It,t),[o.memoizedState,t]},useRef:function(t){var n=Dn();return t={current:t},n.memoizedState=t},useState:Dh,useDebugValue:Fd,useDeferredValue:function(t){return Dn().memoizedState=t},useTransition:function(){var t=Dh(!1),n=t[0];return t=Yy.bind(null,t[1]),Dn().memoizedState=t,[n,t]},useMutableSource:function(){},useSyncExternalStore:function(t,n,i){var o=It,d=Dn();if(Lt){if(i===void 0)throw Error(s(407));i=i()}else{if(i=n(),ir===null)throw Error(s(349));(Qa&30)!==0||zh(o,n,i)}d.memoizedState=i;var u={value:i,getSnapshot:n};return d.queue=u,Lh(Mh.bind(null,o,u,t),[t]),o.flags|=2048,As(9,Nh.bind(null,o,u,i,n),void 0,null),i},useId:function(){var t=Dn(),n=ir.identifierPrefix;if(Lt){var i=ta,o=ea;i=(o&~(1<<32-Vr(o)-1)).toString(32)+i,n=":"+n+"R"+i,i=Ns++,0<i&&(n+="H"+i.toString(32)),n+=":"}else i=Ky++,n=":"+n+"r"+i.toString(32)+":";return t.memoizedState=n},unstable_isNewReconciler:!1},e0={readContext:cn,useCallback:Uh,useContext:cn,useEffect:Dd,useImperativeHandle:qh,useInsertionEffect:Oh,useLayoutEffect:Ih,useMemo:Hh,useReducer:Ad,useRef:Fh,useState:function(){return Ad(Ms)},useDebugValue:Fd,useDeferredValue:function(t){var n=dn();return Vh(n,Jt.memoizedState,t)},useTransition:function(){var t=Ad(Ms)[0],n=dn().memoizedState;return[t,n]},useMutableSource:Rh,useSyncExternalStore:Ph,useId:Wh,unstable_isNewReconciler:!1},t0={readContext:cn,useCallback:Uh,useContext:cn,useEffect:Dd,useImperativeHandle:qh,useInsertionEffect:Oh,useLayoutEffect:Ih,useMemo:Hh,useReducer:Td,useRef:Fh,useState:function(){return Td(Ms)},useDebugValue:Fd,useDeferredValue:function(t){var n=dn();return Jt===null?n.memoizedState=t:Vh(n,Jt.memoizedState,t)},useTransition:function(){var t=Td(Ms)[0],n=dn().memoizedState;return[t,n]},useMutableSource:Rh,useSyncExternalStore:Ph,useId:Wh,unstable_isNewReconciler:!1};function bn(t,n){if(t&&t.defaultProps){n=H({},n),t=t.defaultProps;for(var i in t)n[i]===void 0&&(n[i]=t[i]);return n}return n}function Ld(t,n,i,o){n=t.memoizedState,i=i(o,n),i=i==null?n:H({},n,i),t.memoizedState=i,t.lanes===0&&(t.updateQueue.baseState=i)}var cl={isMounted:function(t){return(t=t._reactInternals)?Hr(t)===t:!1},enqueueSetState:function(t,n,i){t=t._reactInternals;var o=Er(),d=ka(t),u=na(o,d);u.payload=n,i!=null&&(u.callback=i),n=ja(t,u,d),n!==null&&(kn(n,t,d,o),tl(n,t,d))},enqueueReplaceState:function(t,n,i){t=t._reactInternals;var o=Er(),d=ka(t),u=na(o,d);u.tag=1,u.payload=n,i!=null&&(u.callback=i),n=ja(t,u,d),n!==null&&(kn(n,t,d,o),tl(n,t,d))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var i=Er(),o=ka(t),d=na(i,o);d.tag=2,n!=null&&(d.callback=n),n=ja(t,d,o),n!==null&&(kn(n,t,o,i),tl(n,t,o))}};function Yh(t,n,i,o,d,u,v){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,u,v):n.prototype&&n.prototype.isPureReactComponent?!js(i,o)||!js(d,u):!0}function Jh(t,n,i){var o=!1,d=ga,u=n.contextType;return typeof u=="object"&&u!==null?u=cn(u):(d=Tr(n)?Ua:mr.current,o=n.contextTypes,u=(o=o!=null)?$i(t,d):ga),n=new n(i,u),t.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=cl,t.stateNode=n,n._reactInternals=t,o&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=d,t.__reactInternalMemoizedMaskedChildContext=u),n}function Xh(t,n,i,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(i,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(i,o),n.state!==t&&cl.enqueueReplaceState(n,n.state,null)}function Od(t,n,i,o){var d=t.stateNode;d.props=i,d.state=t.memoizedState,d.refs={},Sd(t);var u=n.contextType;typeof u=="object"&&u!==null?d.context=cn(u):(u=Tr(n)?Ua:mr.current,d.context=$i(t,u)),d.state=t.memoizedState,u=n.getDerivedStateFromProps,typeof u=="function"&&(Ld(t,n,u,i),d.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(n=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),n!==d.state&&cl.enqueueReplaceState(d,d.state,null),rl(t,i,d,o),d.state=t.memoizedState),typeof d.componentDidMount=="function"&&(t.flags|=4194308)}function Di(t,n){try{var i="",o=n;do i+=M(o),o=o.return;while(o);var d=i}catch(u){d=`
Error generating stack: `+u.message+`
`+u.stack}return{value:t,source:n,stack:d,digest:null}}function Id(t,n,i){return{value:t,source:null,stack:i??null,digest:n??null}}function Bd(t,n){try{console.error(n.value)}catch(i){setTimeout(function(){throw i})}}var r0=typeof WeakMap=="function"?WeakMap:Map;function Zh(t,n,i){i=na(-1,i),i.tag=3,i.payload={element:null};var o=n.value;return i.callback=function(){xl||(xl=!0,ru=o),Bd(t,n)},i}function em(t,n,i){i=na(-1,i),i.tag=3;var o=t.type.getDerivedStateFromError;if(typeof o=="function"){var d=n.value;i.payload=function(){return o(d)},i.callback=function(){Bd(t,n)}}var u=t.stateNode;return u!==null&&typeof u.componentDidCatch=="function"&&(i.callback=function(){Bd(t,n),typeof o!="function"&&(wa===null?wa=new Set([this]):wa.add(this));var v=n.stack;this.componentDidCatch(n.value,{componentStack:v!==null?v:""})}),i}function tm(t,n,i){var o=t.pingCache;if(o===null){o=t.pingCache=new r0;var d=new Set;o.set(n,d)}else d=o.get(n),d===void 0&&(d=new Set,o.set(n,d));d.has(i)||(d.add(i),t=x0.bind(null,t,n,i),n.then(t,t))}function rm(t){do{var n;if((n=t.tag===13)&&(n=t.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return t;t=t.return}while(t!==null);return null}function nm(t,n,i,o,d){return(t.mode&1)===0?(t===n?t.flags|=65536:(t.flags|=128,i.flags|=131072,i.flags&=-52805,i.tag===1&&(i.alternate===null?i.tag=17:(n=na(-1,1),n.tag=2,ja(i,n,1))),i.lanes|=1),t):(t.flags|=65536,t.lanes=d,t)}var n0=F.ReactCurrentOwner,Dr=!1;function Cr(t,n,i,o){n.child=t===null?_h(n,null,i,o):Ni(n,t.child,i,o)}function am(t,n,i,o,d){i=i.render;var u=n.ref;return Ai(n,d),o=Nd(t,n,i,o,u,d),i=Md(),t!==null&&!Dr?(n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~d,aa(t,n,d)):(Lt&&i&&md(n),n.flags|=1,Cr(t,n,o,d),n.child)}function im(t,n,i,o,d){if(t===null){var u=i.type;return typeof u=="function"&&!cu(u)&&u.defaultProps===void 0&&i.compare===null&&i.defaultProps===void 0?(n.tag=15,n.type=u,sm(t,n,u,o,d)):(t=wl(i.type,null,o,n,n.mode,d),t.ref=n.ref,t.return=n,n.child=t)}if(u=t.child,(t.lanes&d)===0){var v=u.memoizedProps;if(i=i.compare,i=i!==null?i:js,i(v,o)&&t.ref===n.ref)return aa(t,n,d)}return n.flags|=1,t=Ca(u,o),t.ref=n.ref,t.return=n,n.child=t}function sm(t,n,i,o,d){if(t!==null){var u=t.memoizedProps;if(js(u,o)&&t.ref===n.ref)if(Dr=!1,n.pendingProps=o=u,(t.lanes&d)!==0)(t.flags&131072)!==0&&(Dr=!0);else return n.lanes=t.lanes,aa(t,n,d)}return qd(t,n,i,o,d)}function om(t,n,i){var o=n.pendingProps,d=o.children,u=t!==null?t.memoizedState:null;if(o.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null,transitions:null},Rt(Li,Kr),Kr|=i;else{if((i&1073741824)===0)return t=u!==null?u.baseLanes|i:i,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:t,cachePool:null,transitions:null},n.updateQueue=null,Rt(Li,Kr),Kr|=t,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=u!==null?u.baseLanes:i,Rt(Li,Kr),Kr|=o}else u!==null?(o=u.baseLanes|i,n.memoizedState=null):o=i,Rt(Li,Kr),Kr|=o;return Cr(t,n,d,i),n.child}function lm(t,n){var i=n.ref;(t===null&&i!==null||t!==null&&t.ref!==i)&&(n.flags|=512,n.flags|=2097152)}function qd(t,n,i,o,d){var u=Tr(i)?Ua:mr.current;return u=$i(n,u),Ai(n,d),i=Nd(t,n,i,o,u,d),o=Md(),t!==null&&!Dr?(n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~d,aa(t,n,d)):(Lt&&o&&md(n),n.flags|=1,Cr(t,n,i,d),n.child)}function cm(t,n,i,o,d){if(Tr(i)){var u=!0;Go(n)}else u=!1;if(Ai(n,d),n.stateNode===null)ul(t,n),Jh(n,i,o),Od(n,i,o,d),o=!0;else if(t===null){var v=n.stateNode,P=n.memoizedProps;v.props=P;var A=v.context,te=i.contextType;typeof te=="object"&&te!==null?te=cn(te):(te=Tr(i)?Ua:mr.current,te=$i(n,te));var me=i.getDerivedStateFromProps,ye=typeof me=="function"||typeof v.getSnapshotBeforeUpdate=="function";ye||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(P!==o||A!==te)&&Xh(n,v,o,te),ya=!1;var he=n.memoizedState;v.state=he,rl(n,o,v,d),A=n.memoizedState,P!==o||he!==A||Ar.current||ya?(typeof me=="function"&&(Ld(n,i,me,o),A=n.memoizedState),(P=ya||Yh(n,i,P,o,he,A,te))?(ye||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(n.flags|=4194308)):(typeof v.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=A),v.props=o,v.state=A,v.context=te,o=P):(typeof v.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{v=n.stateNode,Sh(t,n),P=n.memoizedProps,te=n.type===n.elementType?P:bn(n.type,P),v.props=te,ye=n.pendingProps,he=v.context,A=i.contextType,typeof A=="object"&&A!==null?A=cn(A):(A=Tr(i)?Ua:mr.current,A=$i(n,A));var $e=i.getDerivedStateFromProps;(me=typeof $e=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(P!==ye||he!==A)&&Xh(n,v,o,A),ya=!1,he=n.memoizedState,v.state=he,rl(n,o,v,d);var Ne=n.memoizedState;P!==ye||he!==Ne||Ar.current||ya?(typeof $e=="function"&&(Ld(n,i,$e,o),Ne=n.memoizedState),(te=ya||Yh(n,i,te,o,he,Ne,A)||!1)?(me||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(o,Ne,A),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(o,Ne,A)),typeof v.componentDidUpdate=="function"&&(n.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof v.componentDidUpdate!="function"||P===t.memoizedProps&&he===t.memoizedState||(n.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||P===t.memoizedProps&&he===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=Ne),v.props=o,v.state=Ne,v.context=A,o=te):(typeof v.componentDidUpdate!="function"||P===t.memoizedProps&&he===t.memoizedState||(n.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||P===t.memoizedProps&&he===t.memoizedState||(n.flags|=1024),o=!1)}return Ud(t,n,i,o,u,d)}function Ud(t,n,i,o,d,u){lm(t,n);var v=(n.flags&128)!==0;if(!o&&!v)return d&&hh(n,i,!1),aa(t,n,u);o=n.stateNode,n0.current=n;var P=v&&typeof i.getDerivedStateFromError!="function"?null:o.render();return n.flags|=1,t!==null&&v?(n.child=Ni(n,t.child,null,u),n.child=Ni(n,null,P,u)):Cr(t,n,P,u),n.memoizedState=o.state,d&&hh(n,i,!0),n.child}function dm(t){var n=t.stateNode;n.pendingContext?ph(t,n.pendingContext,n.pendingContext!==n.context):n.context&&ph(t,n.context,!1),Cd(t,n.containerInfo)}function um(t,n,i,o,d){return zi(),yd(d),n.flags|=256,Cr(t,n,i,o),n.child}var Hd={dehydrated:null,treeContext:null,retryLane:0};function Vd(t){return{baseLanes:t,cachePool:null,transitions:null}}function pm(t,n,i){var o=n.pendingProps,d=Ot.current,u=!1,v=(n.flags&128)!==0,P;if((P=v)||(P=t!==null&&t.memoizedState===null?!1:(d&2)!==0),P?(u=!0,n.flags&=-129):(t===null||t.memoizedState!==null)&&(d|=1),Rt(Ot,d&1),t===null)return vd(n),t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((n.mode&1)===0?n.lanes=1:t.data==="$!"?n.lanes=8:n.lanes=1073741824,null):(v=o.children,t=o.fallback,u?(o=n.mode,u=n.child,v={mode:"hidden",children:v},(o&1)===0&&u!==null?(u.childLanes=0,u.pendingProps=v):u=_l(v,o,0,null),t=Za(t,o,i,null),u.return=n,t.return=n,u.sibling=t,n.child=u,n.child.memoizedState=Vd(i),n.memoizedState=Hd,t):Wd(n,v));if(d=t.memoizedState,d!==null&&(P=d.dehydrated,P!==null))return a0(t,n,v,o,P,d,i);if(u){u=o.fallback,v=n.mode,d=t.child,P=d.sibling;var A={mode:"hidden",children:o.children};return(v&1)===0&&n.child!==d?(o=n.child,o.childLanes=0,o.pendingProps=A,n.deletions=null):(o=Ca(d,A),o.subtreeFlags=d.subtreeFlags&14680064),P!==null?u=Ca(P,u):(u=Za(u,v,i,null),u.flags|=2),u.return=n,o.return=n,o.sibling=u,n.child=o,o=u,u=n.child,v=t.child.memoizedState,v=v===null?Vd(i):{baseLanes:v.baseLanes|i,cachePool:null,transitions:v.transitions},u.memoizedState=v,u.childLanes=t.childLanes&~i,n.memoizedState=Hd,o}return u=t.child,t=u.sibling,o=Ca(u,{mode:"visible",children:o.children}),(n.mode&1)===0&&(o.lanes=i),o.return=n,o.sibling=null,t!==null&&(i=n.deletions,i===null?(n.deletions=[t],n.flags|=16):i.push(t)),n.child=o,n.memoizedState=null,o}function Wd(t,n){return n=_l({mode:"visible",children:n},t.mode,0,null),n.return=t,t.child=n}function dl(t,n,i,o){return o!==null&&yd(o),Ni(n,t.child,null,i),t=Wd(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function a0(t,n,i,o,d,u,v){if(i)return n.flags&256?(n.flags&=-257,o=Id(Error(s(422))),dl(t,n,v,o)):n.memoizedState!==null?(n.child=t.child,n.flags|=128,null):(u=o.fallback,d=n.mode,o=_l({mode:"visible",children:o.children},d,0,null),u=Za(u,d,v,null),u.flags|=2,o.return=n,u.return=n,o.sibling=u,n.child=o,(n.mode&1)!==0&&Ni(n,t.child,null,v),n.child.memoizedState=Vd(v),n.memoizedState=Hd,u);if((n.mode&1)===0)return dl(t,n,v,null);if(d.data==="$!"){if(o=d.nextSibling&&d.nextSibling.dataset,o)var P=o.dgst;return o=P,u=Error(s(419)),o=Id(u,o,void 0),dl(t,n,v,o)}if(P=(v&t.childLanes)!==0,Dr||P){if(o=ir,o!==null){switch(v&-v){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(o.suspendedLanes|v))!==0?0:d,d!==0&&d!==u.retryLane&&(u.retryLane=d,ra(t,d),kn(o,t,d,-1))}return lu(),o=Id(Error(s(421))),dl(t,n,v,o)}return d.data==="$?"?(n.flags|=128,n.child=t.child,n=g0.bind(null,t),d._reactRetry=n,null):(t=u.treeContext,Qr=ma(d.nextSibling),Gr=n,Lt=!0,jn=null,t!==null&&(on[ln++]=ea,on[ln++]=ta,on[ln++]=Ha,ea=t.id,ta=t.overflow,Ha=n),n=Wd(n,o.children),n.flags|=4096,n)}function fm(t,n,i){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),_d(t.return,n,i)}function Gd(t,n,i,o,d){var u=t.memoizedState;u===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:i,tailMode:d}:(u.isBackwards=n,u.rendering=null,u.renderingStartTime=0,u.last=o,u.tail=i,u.tailMode=d)}function hm(t,n,i){var o=n.pendingProps,d=o.revealOrder,u=o.tail;if(Cr(t,n,o.children,i),o=Ot.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&fm(t,i,n);else if(t.tag===19)fm(t,i,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}o&=1}if(Rt(Ot,o),(n.mode&1)===0)n.memoizedState=null;else switch(d){case"forwards":for(i=n.child,d=null;i!==null;)t=i.alternate,t!==null&&nl(t)===null&&(d=i),i=i.sibling;i=d,i===null?(d=n.child,n.child=null):(d=i.sibling,i.sibling=null),Gd(n,!1,d,i,u);break;case"backwards":for(i=null,d=n.child,n.child=null;d!==null;){if(t=d.alternate,t!==null&&nl(t)===null){n.child=d;break}t=d.sibling,d.sibling=i,i=d,d=t}Gd(n,!0,i,null,u);break;case"together":Gd(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function ul(t,n){(n.mode&1)===0&&t!==null&&(t.alternate=null,n.alternate=null,n.flags|=2)}function aa(t,n,i){if(t!==null&&(n.dependencies=t.dependencies),Ka|=n.lanes,(i&n.childLanes)===0)return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,i=Ca(t,t.pendingProps),n.child=i,i.return=n;t.sibling!==null;)t=t.sibling,i=i.sibling=Ca(t,t.pendingProps),i.return=n;i.sibling=null}return n.child}function i0(t,n,i){switch(n.tag){case 3:dm(n),zi();break;case 5:$h(n);break;case 1:Tr(n.type)&&Go(n);break;case 4:Cd(n,n.stateNode.containerInfo);break;case 10:var o=n.type._context,d=n.memoizedProps.value;Rt(Zo,o._currentValue),o._currentValue=d;break;case 13:if(o=n.memoizedState,o!==null)return o.dehydrated!==null?(Rt(Ot,Ot.current&1),n.flags|=128,null):(i&n.child.childLanes)!==0?pm(t,n,i):(Rt(Ot,Ot.current&1),t=aa(t,n,i),t!==null?t.sibling:null);Rt(Ot,Ot.current&1);break;case 19:if(o=(i&n.childLanes)!==0,(t.flags&128)!==0){if(o)return hm(t,n,i);n.flags|=128}if(d=n.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Rt(Ot,Ot.current),o)break;return null;case 22:case 23:return n.lanes=0,om(t,n,i)}return aa(t,n,i)}var mm,Qd,xm,gm;mm=function(t,n){for(var i=n.child;i!==null;){if(i.tag===5||i.tag===6)t.appendChild(i.stateNode);else if(i.tag!==4&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return;i=i.return}i.sibling.return=i.return,i=i.sibling}},Qd=function(){},xm=function(t,n,i,o){var d=t.memoizedProps;if(d!==o){t=n.stateNode,Ga(Tn.current);var u=null;switch(i){case"input":d=at(t,d),o=at(t,o),u=[];break;case"select":d=H({},d,{value:void 0}),o=H({},o,{value:void 0}),u=[];break;case"textarea":d=Pt(t,d),o=Pt(t,o),u=[];break;default:typeof d.onClick!="function"&&typeof o.onClick=="function"&&(t.onclick=Ho)}tr(i,o);var v;i=null;for(te in d)if(!o.hasOwnProperty(te)&&d.hasOwnProperty(te)&&d[te]!=null)if(te==="style"){var P=d[te];for(v in P)P.hasOwnProperty(v)&&(i||(i={}),i[v]="")}else te!=="dangerouslySetInnerHTML"&&te!=="children"&&te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&te!=="autoFocus"&&(c.hasOwnProperty(te)?u||(u=[]):(u=u||[]).push(te,null));for(te in o){var A=o[te];if(P=d!=null?d[te]:void 0,o.hasOwnProperty(te)&&A!==P&&(A!=null||P!=null))if(te==="style")if(P){for(v in P)!P.hasOwnProperty(v)||A&&A.hasOwnProperty(v)||(i||(i={}),i[v]="");for(v in A)A.hasOwnProperty(v)&&P[v]!==A[v]&&(i||(i={}),i[v]=A[v])}else i||(u||(u=[]),u.push(te,i)),i=A;else te==="dangerouslySetInnerHTML"?(A=A?A.__html:void 0,P=P?P.__html:void 0,A!=null&&P!==A&&(u=u||[]).push(te,A)):te==="children"?typeof A!="string"&&typeof A!="number"||(u=u||[]).push(te,""+A):te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&(c.hasOwnProperty(te)?(A!=null&&te==="onScroll"&&Nt("scroll",t),u||P===A||(u=[])):(u=u||[]).push(te,A))}i&&(u=u||[]).push("style",i);var te=u;(n.updateQueue=te)&&(n.flags|=4)}},gm=function(t,n,i,o){i!==o&&(n.flags|=4)};function Ts(t,n){if(!Lt)switch(t.tailMode){case"hidden":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t.tail=null:i.sibling=null;break;case"collapsed":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function gr(t){var n=t.alternate!==null&&t.alternate.child===t.child,i=0,o=0;if(n)for(var d=t.child;d!==null;)i|=d.lanes|d.childLanes,o|=d.subtreeFlags&14680064,o|=d.flags&14680064,d.return=t,d=d.sibling;else for(d=t.child;d!==null;)i|=d.lanes|d.childLanes,o|=d.subtreeFlags,o|=d.flags,d.return=t,d=d.sibling;return t.subtreeFlags|=o,t.childLanes=i,n}function s0(t,n,i){var o=n.pendingProps;switch(xd(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return gr(n),null;case 1:return Tr(n.type)&&Wo(),gr(n),null;case 3:return o=n.stateNode,Ti(),Mt(Ar),Mt(mr),Rd(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(t===null||t.child===null)&&(Jo(n)?n.flags|=4:t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,jn!==null&&(iu(jn),jn=null))),Qd(t,n),gr(n),null;case 5:Ed(n);var d=Ga(Ps.current);if(i=n.type,t!==null&&n.stateNode!=null)xm(t,n,i,o,d),t.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!o){if(n.stateNode===null)throw Error(s(166));return gr(n),null}if(t=Ga(Tn.current),Jo(n)){o=n.stateNode,i=n.type;var u=n.memoizedProps;switch(o[An]=n,o[Ss]=u,t=(n.mode&1)!==0,i){case"dialog":Nt("cancel",o),Nt("close",o);break;case"iframe":case"object":case"embed":Nt("load",o);break;case"video":case"audio":for(d=0;d<ws.length;d++)Nt(ws[d],o);break;case"source":Nt("error",o);break;case"img":case"image":case"link":Nt("error",o),Nt("load",o);break;case"details":Nt("toggle",o);break;case"input":lr(o,u),Nt("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!u.multiple},Nt("invalid",o);break;case"textarea":Kt(o,u),Nt("invalid",o)}tr(i,u),d=null;for(var v in u)if(u.hasOwnProperty(v)){var P=u[v];v==="children"?typeof P=="string"?o.textContent!==P&&(u.suppressHydrationWarning!==!0&&Uo(o.textContent,P,t),d=["children",P]):typeof P=="number"&&o.textContent!==""+P&&(u.suppressHydrationWarning!==!0&&Uo(o.textContent,P,t),d=["children",""+P]):c.hasOwnProperty(v)&&P!=null&&v==="onScroll"&&Nt("scroll",o)}switch(i){case"input":ot(o),Le(o,u,!0);break;case"textarea":ot(o),fr(o);break;case"select":case"option":break;default:typeof u.onClick=="function"&&(o.onclick=Ho)}o=d,n.updateQueue=o,o!==null&&(n.flags|=4)}else{v=d.nodeType===9?d:d.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=zr(i)),t==="http://www.w3.org/1999/xhtml"?i==="script"?(t=v.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof o.is=="string"?t=v.createElement(i,{is:o.is}):(t=v.createElement(i),i==="select"&&(v=t,o.multiple?v.multiple=!0:o.size&&(v.size=o.size))):t=v.createElementNS(t,i),t[An]=n,t[Ss]=o,mm(t,n,!1,!1),n.stateNode=t;e:{switch(v=rr(i,o),i){case"dialog":Nt("cancel",t),Nt("close",t),d=o;break;case"iframe":case"object":case"embed":Nt("load",t),d=o;break;case"video":case"audio":for(d=0;d<ws.length;d++)Nt(ws[d],t);d=o;break;case"source":Nt("error",t),d=o;break;case"img":case"image":case"link":Nt("error",t),Nt("load",t),d=o;break;case"details":Nt("toggle",t),d=o;break;case"input":lr(t,o),d=at(t,o),Nt("invalid",t);break;case"option":d=o;break;case"select":t._wrapperState={wasMultiple:!!o.multiple},d=H({},o,{value:void 0}),Nt("invalid",t);break;case"textarea":Kt(t,o),d=Pt(t,o),Nt("invalid",t);break;default:d=o}tr(i,d),P=d;for(u in P)if(P.hasOwnProperty(u)){var A=P[u];u==="style"?qn(t,A):u==="dangerouslySetInnerHTML"?(A=A?A.__html:void 0,A!=null&&an(t,A)):u==="children"?typeof A=="string"?(i!=="textarea"||A!=="")&&hr(t,A):typeof A=="number"&&hr(t,""+A):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(c.hasOwnProperty(u)?A!=null&&u==="onScroll"&&Nt("scroll",t):A!=null&&T(t,u,A,v))}switch(i){case"input":ot(t),Le(t,o,!1);break;case"textarea":ot(t),fr(t);break;case"option":o.value!=null&&t.setAttribute("value",""+je(o.value));break;case"select":t.multiple=!!o.multiple,u=o.value,u!=null?He(t,!!o.multiple,u,!1):o.defaultValue!=null&&He(t,!!o.multiple,o.defaultValue,!0);break;default:typeof d.onClick=="function"&&(t.onclick=Ho)}switch(i){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return gr(n),null;case 6:if(t&&n.stateNode!=null)gm(t,n,t.memoizedProps,o);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(i=Ga(Ps.current),Ga(Tn.current),Jo(n)){if(o=n.stateNode,i=n.memoizedProps,o[An]=n,(u=o.nodeValue!==i)&&(t=Gr,t!==null))switch(t.tag){case 3:Uo(o.nodeValue,i,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Uo(o.nodeValue,i,(t.mode&1)!==0)}u&&(n.flags|=4)}else o=(i.nodeType===9?i:i.ownerDocument).createTextNode(o),o[An]=n,n.stateNode=o}return gr(n),null;case 13:if(Mt(Ot),o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Lt&&Qr!==null&&(n.mode&1)!==0&&(n.flags&128)===0)jh(),zi(),n.flags|=98560,u=!1;else if(u=Jo(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[An]=n}else zi(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;gr(n),u=!1}else jn!==null&&(iu(jn),jn=null),u=!0;if(!u)return n.flags&65536?n:null}return(n.flags&128)!==0?(n.lanes=i,n):(o=o!==null,o!==(t!==null&&t.memoizedState!==null)&&o&&(n.child.flags|=8192,(n.mode&1)!==0&&(t===null||(Ot.current&1)!==0?Xt===0&&(Xt=3):lu())),n.updateQueue!==null&&(n.flags|=4),gr(n),null);case 4:return Ti(),Qd(t,n),t===null&&_s(n.stateNode.containerInfo),gr(n),null;case 10:return wd(n.type._context),gr(n),null;case 17:return Tr(n.type)&&Wo(),gr(n),null;case 19:if(Mt(Ot),u=n.memoizedState,u===null)return gr(n),null;if(o=(n.flags&128)!==0,v=u.rendering,v===null)if(o)Ts(u,!1);else{if(Xt!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(v=nl(t),v!==null){for(n.flags|=128,Ts(u,!1),o=v.updateQueue,o!==null&&(n.updateQueue=o,n.flags|=4),n.subtreeFlags=0,o=i,i=n.child;i!==null;)u=i,t=o,u.flags&=14680066,v=u.alternate,v===null?(u.childLanes=0,u.lanes=t,u.child=null,u.subtreeFlags=0,u.memoizedProps=null,u.memoizedState=null,u.updateQueue=null,u.dependencies=null,u.stateNode=null):(u.childLanes=v.childLanes,u.lanes=v.lanes,u.child=v.child,u.subtreeFlags=0,u.deletions=null,u.memoizedProps=v.memoizedProps,u.memoizedState=v.memoizedState,u.updateQueue=v.updateQueue,u.type=v.type,t=v.dependencies,u.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),i=i.sibling;return Rt(Ot,Ot.current&1|2),n.child}t=t.sibling}u.tail!==null&&it()>Oi&&(n.flags|=128,o=!0,Ts(u,!1),n.lanes=4194304)}else{if(!o)if(t=nl(v),t!==null){if(n.flags|=128,o=!0,i=t.updateQueue,i!==null&&(n.updateQueue=i,n.flags|=4),Ts(u,!0),u.tail===null&&u.tailMode==="hidden"&&!v.alternate&&!Lt)return gr(n),null}else 2*it()-u.renderingStartTime>Oi&&i!==1073741824&&(n.flags|=128,o=!0,Ts(u,!1),n.lanes=4194304);u.isBackwards?(v.sibling=n.child,n.child=v):(i=u.last,i!==null?i.sibling=v:n.child=v,u.last=v)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=it(),n.sibling=null,i=Ot.current,Rt(Ot,o?i&1|2:i&1),n):(gr(n),null);case 22:case 23:return ou(),o=n.memoizedState!==null,t!==null&&t.memoizedState!==null!==o&&(n.flags|=8192),o&&(n.mode&1)!==0?(Kr&1073741824)!==0&&(gr(n),n.subtreeFlags&6&&(n.flags|=8192)):gr(n),null;case 24:return null;case 25:return null}throw Error(s(156,n.tag))}function o0(t,n){switch(xd(n),n.tag){case 1:return Tr(n.type)&&Wo(),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Ti(),Mt(Ar),Mt(mr),Rd(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 5:return Ed(n),null;case 13:if(Mt(Ot),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));zi()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Mt(Ot),null;case 4:return Ti(),null;case 10:return wd(n.type._context),null;case 22:case 23:return ou(),null;case 24:return null;default:return null}}var pl=!1,vr=!1,l0=typeof WeakSet=="function"?WeakSet:Set,Pe=null;function Fi(t,n){var i=t.ref;if(i!==null)if(typeof i=="function")try{i(null)}catch(o){Bt(t,n,o)}else i.current=null}function Kd(t,n,i){try{i()}catch(o){Bt(t,n,o)}}var vm=!1;function c0(t,n){if(od=vn,t=Yf(),Zc(t)){if("selectionStart"in t)var i={start:t.selectionStart,end:t.selectionEnd};else e:{i=(i=t.ownerDocument)&&i.defaultView||window;var o=i.getSelection&&i.getSelection();if(o&&o.rangeCount!==0){i=o.anchorNode;var d=o.anchorOffset,u=o.focusNode;o=o.focusOffset;try{i.nodeType,u.nodeType}catch{i=null;break e}var v=0,P=-1,A=-1,te=0,me=0,ye=t,he=null;t:for(;;){for(var $e;ye!==i||d!==0&&ye.nodeType!==3||(P=v+d),ye!==u||o!==0&&ye.nodeType!==3||(A=v+o),ye.nodeType===3&&(v+=ye.nodeValue.length),($e=ye.firstChild)!==null;)he=ye,ye=$e;for(;;){if(ye===t)break t;if(he===i&&++te===d&&(P=v),he===u&&++me===o&&(A=v),($e=ye.nextSibling)!==null)break;ye=he,he=ye.parentNode}ye=$e}i=P===-1||A===-1?null:{start:P,end:A}}else i=null}i=i||{start:0,end:0}}else i=null;for(ld={focusedElem:t,selectionRange:i},vn=!1,Pe=n;Pe!==null;)if(n=Pe,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Pe=t;else for(;Pe!==null;){n=Pe;try{var Ne=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if(Ne!==null){var Ae=Ne.memoizedProps,Ht=Ne.memoizedState,G=n.stateNode,I=G.getSnapshotBeforeUpdate(n.elementType===n.type?Ae:bn(n.type,Ae),Ht);G.__reactInternalSnapshotBeforeUpdate=I}break;case 3:var Y=n.stateNode.containerInfo;Y.nodeType===1?Y.textContent="":Y.nodeType===9&&Y.documentElement&&Y.removeChild(Y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(s(163))}}catch(_e){Bt(n,n.return,_e)}if(t=n.sibling,t!==null){t.return=n.return,Pe=t;break}Pe=n.return}return Ne=vm,vm=!1,Ne}function Ds(t,n,i){var o=n.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var d=o=o.next;do{if((d.tag&t)===t){var u=d.destroy;d.destroy=void 0,u!==void 0&&Kd(n,i,u)}d=d.next}while(d!==o)}}function fl(t,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&t)===t){var o=i.create;i.destroy=o()}i=i.next}while(i!==n)}}function Yd(t){var n=t.ref;if(n!==null){var i=t.stateNode;switch(t.tag){case 5:t=i;break;default:t=i}typeof n=="function"?n(t):n.current=t}}function ym(t){var n=t.alternate;n!==null&&(t.alternate=null,ym(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&(delete n[An],delete n[Ss],delete n[pd],delete n[Vy],delete n[Wy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function jm(t){return t.tag===5||t.tag===3||t.tag===4}function bm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||jm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Jd(t,n,i){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?i.nodeType===8?i.parentNode.insertBefore(t,n):i.insertBefore(t,n):(i.nodeType===8?(n=i.parentNode,n.insertBefore(t,i)):(n=i,n.appendChild(t)),i=i._reactRootContainer,i!=null||n.onclick!==null||(n.onclick=Ho));else if(o!==4&&(t=t.child,t!==null))for(Jd(t,n,i),t=t.sibling;t!==null;)Jd(t,n,i),t=t.sibling}function Xd(t,n,i){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?i.insertBefore(t,n):i.appendChild(t);else if(o!==4&&(t=t.child,t!==null))for(Xd(t,n,i),t=t.sibling;t!==null;)Xd(t,n,i),t=t.sibling}var dr=null,wn=!1;function ba(t,n,i){for(i=i.child;i!==null;)wm(t,n,i),i=i.sibling}function wm(t,n,i){if(nr&&typeof nr.onCommitFiberUnmount=="function")try{nr.onCommitFiberUnmount(Kn,i)}catch{}switch(i.tag){case 5:vr||Fi(i,n);case 6:var o=dr,d=wn;dr=null,ba(t,n,i),dr=o,wn=d,dr!==null&&(wn?(t=dr,i=i.stateNode,t.nodeType===8?t.parentNode.removeChild(i):t.removeChild(i)):dr.removeChild(i.stateNode));break;case 18:dr!==null&&(wn?(t=dr,i=i.stateNode,t.nodeType===8?ud(t.parentNode,i):t.nodeType===1&&ud(t,i),pa(t)):ud(dr,i.stateNode));break;case 4:o=dr,d=wn,dr=i.stateNode.containerInfo,wn=!0,ba(t,n,i),dr=o,wn=d;break;case 0:case 11:case 14:case 15:if(!vr&&(o=i.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){d=o=o.next;do{var u=d,v=u.destroy;u=u.tag,v!==void 0&&((u&2)!==0||(u&4)!==0)&&Kd(i,n,v),d=d.next}while(d!==o)}ba(t,n,i);break;case 1:if(!vr&&(Fi(i,n),o=i.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=i.memoizedProps,o.state=i.memoizedState,o.componentWillUnmount()}catch(P){Bt(i,n,P)}ba(t,n,i);break;case 21:ba(t,n,i);break;case 22:i.mode&1?(vr=(o=vr)||i.memoizedState!==null,ba(t,n,i),vr=o):ba(t,n,i);break;default:ba(t,n,i)}}function _m(t){var n=t.updateQueue;if(n!==null){t.updateQueue=null;var i=t.stateNode;i===null&&(i=t.stateNode=new l0),n.forEach(function(o){var d=v0.bind(null,t,o);i.has(o)||(i.add(o),o.then(d,d))})}}function _n(t,n){var i=n.deletions;if(i!==null)for(var o=0;o<i.length;o++){var d=i[o];try{var u=t,v=n,P=v;e:for(;P!==null;){switch(P.tag){case 5:dr=P.stateNode,wn=!1;break e;case 3:dr=P.stateNode.containerInfo,wn=!0;break e;case 4:dr=P.stateNode.containerInfo,wn=!0;break e}P=P.return}if(dr===null)throw Error(s(160));wm(u,v,d),dr=null,wn=!1;var A=d.alternate;A!==null&&(A.return=null),d.return=null}catch(te){Bt(d,n,te)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)km(n,t),n=n.sibling}function km(t,n){var i=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(_n(n,t),Fn(t),o&4){try{Ds(3,t,t.return),fl(3,t)}catch(Ae){Bt(t,t.return,Ae)}try{Ds(5,t,t.return)}catch(Ae){Bt(t,t.return,Ae)}}break;case 1:_n(n,t),Fn(t),o&512&&i!==null&&Fi(i,i.return);break;case 5:if(_n(n,t),Fn(t),o&512&&i!==null&&Fi(i,i.return),t.flags&32){var d=t.stateNode;try{hr(d,"")}catch(Ae){Bt(t,t.return,Ae)}}if(o&4&&(d=t.stateNode,d!=null)){var u=t.memoizedProps,v=i!==null?i.memoizedProps:u,P=t.type,A=t.updateQueue;if(t.updateQueue=null,A!==null)try{P==="input"&&u.type==="radio"&&u.name!=null&&Et(d,u),rr(P,v);var te=rr(P,u);for(v=0;v<A.length;v+=2){var me=A[v],ye=A[v+1];me==="style"?qn(d,ye):me==="dangerouslySetInnerHTML"?an(d,ye):me==="children"?hr(d,ye):T(d,me,ye,te)}switch(P){case"input":bt(d,u);break;case"textarea":Vt(d,u);break;case"select":var he=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!u.multiple;var $e=u.value;$e!=null?He(d,!!u.multiple,$e,!1):he!==!!u.multiple&&(u.defaultValue!=null?He(d,!!u.multiple,u.defaultValue,!0):He(d,!!u.multiple,u.multiple?[]:"",!1))}d[Ss]=u}catch(Ae){Bt(t,t.return,Ae)}}break;case 6:if(_n(n,t),Fn(t),o&4){if(t.stateNode===null)throw Error(s(162));d=t.stateNode,u=t.memoizedProps;try{d.nodeValue=u}catch(Ae){Bt(t,t.return,Ae)}}break;case 3:if(_n(n,t),Fn(t),o&4&&i!==null&&i.memoizedState.isDehydrated)try{pa(n.containerInfo)}catch(Ae){Bt(t,t.return,Ae)}break;case 4:_n(n,t),Fn(t);break;case 13:_n(n,t),Fn(t),d=t.child,d.flags&8192&&(u=d.memoizedState!==null,d.stateNode.isHidden=u,!u||d.alternate!==null&&d.alternate.memoizedState!==null||(tu=it())),o&4&&_m(t);break;case 22:if(me=i!==null&&i.memoizedState!==null,t.mode&1?(vr=(te=vr)||me,_n(n,t),vr=te):_n(n,t),Fn(t),o&8192){if(te=t.memoizedState!==null,(t.stateNode.isHidden=te)&&!me&&(t.mode&1)!==0)for(Pe=t,me=t.child;me!==null;){for(ye=Pe=me;Pe!==null;){switch(he=Pe,$e=he.child,he.tag){case 0:case 11:case 14:case 15:Ds(4,he,he.return);break;case 1:Fi(he,he.return);var Ne=he.stateNode;if(typeof Ne.componentWillUnmount=="function"){o=he,i=he.return;try{n=o,Ne.props=n.memoizedProps,Ne.state=n.memoizedState,Ne.componentWillUnmount()}catch(Ae){Bt(o,i,Ae)}}break;case 5:Fi(he,he.return);break;case 22:if(he.memoizedState!==null){Em(ye);continue}}$e!==null?($e.return=he,Pe=$e):Em(ye)}me=me.sibling}e:for(me=null,ye=t;;){if(ye.tag===5){if(me===null){me=ye;try{d=ye.stateNode,te?(u=d.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none"):(P=ye.stateNode,A=ye.memoizedProps.style,v=A!=null&&A.hasOwnProperty("display")?A.display:null,P.style.display=Mr("display",v))}catch(Ae){Bt(t,t.return,Ae)}}}else if(ye.tag===6){if(me===null)try{ye.stateNode.nodeValue=te?"":ye.memoizedProps}catch(Ae){Bt(t,t.return,Ae)}}else if((ye.tag!==22&&ye.tag!==23||ye.memoizedState===null||ye===t)&&ye.child!==null){ye.child.return=ye,ye=ye.child;continue}if(ye===t)break e;for(;ye.sibling===null;){if(ye.return===null||ye.return===t)break e;me===ye&&(me=null),ye=ye.return}me===ye&&(me=null),ye.sibling.return=ye.return,ye=ye.sibling}}break;case 19:_n(n,t),Fn(t),o&4&&_m(t);break;case 21:break;default:_n(n,t),Fn(t)}}function Fn(t){var n=t.flags;if(n&2){try{e:{for(var i=t.return;i!==null;){if(jm(i)){var o=i;break e}i=i.return}throw Error(s(160))}switch(o.tag){case 5:var d=o.stateNode;o.flags&32&&(hr(d,""),o.flags&=-33);var u=bm(t);Xd(t,u,d);break;case 3:case 4:var v=o.stateNode.containerInfo,P=bm(t);Jd(t,P,v);break;default:throw Error(s(161))}}catch(A){Bt(t,t.return,A)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function d0(t,n,i){Pe=t,Sm(t)}function Sm(t,n,i){for(var o=(t.mode&1)!==0;Pe!==null;){var d=Pe,u=d.child;if(d.tag===22&&o){var v=d.memoizedState!==null||pl;if(!v){var P=d.alternate,A=P!==null&&P.memoizedState!==null||vr;P=pl;var te=vr;if(pl=v,(vr=A)&&!te)for(Pe=d;Pe!==null;)v=Pe,A=v.child,v.tag===22&&v.memoizedState!==null?$m(d):A!==null?(A.return=v,Pe=A):$m(d);for(;u!==null;)Pe=u,Sm(u),u=u.sibling;Pe=d,pl=P,vr=te}Cm(t)}else(d.subtreeFlags&8772)!==0&&u!==null?(u.return=d,Pe=u):Cm(t)}}function Cm(t){for(;Pe!==null;){var n=Pe;if((n.flags&8772)!==0){var i=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:vr||fl(5,n);break;case 1:var o=n.stateNode;if(n.flags&4&&!vr)if(i===null)o.componentDidMount();else{var d=n.elementType===n.type?i.memoizedProps:bn(n.type,i.memoizedProps);o.componentDidUpdate(d,i.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var u=n.updateQueue;u!==null&&Eh(n,u,o);break;case 3:var v=n.updateQueue;if(v!==null){if(i=null,n.child!==null)switch(n.child.tag){case 5:i=n.child.stateNode;break;case 1:i=n.child.stateNode}Eh(n,v,i)}break;case 5:var P=n.stateNode;if(i===null&&n.flags&4){i=P;var A=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":A.autoFocus&&i.focus();break;case"img":A.src&&(i.src=A.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var te=n.alternate;if(te!==null){var me=te.memoizedState;if(me!==null){var ye=me.dehydrated;ye!==null&&pa(ye)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(s(163))}vr||n.flags&512&&Yd(n)}catch(he){Bt(n,n.return,he)}}if(n===t){Pe=null;break}if(i=n.sibling,i!==null){i.return=n.return,Pe=i;break}Pe=n.return}}function Em(t){for(;Pe!==null;){var n=Pe;if(n===t){Pe=null;break}var i=n.sibling;if(i!==null){i.return=n.return,Pe=i;break}Pe=n.return}}function $m(t){for(;Pe!==null;){var n=Pe;try{switch(n.tag){case 0:case 11:case 15:var i=n.return;try{fl(4,n)}catch(A){Bt(n,i,A)}break;case 1:var o=n.stateNode;if(typeof o.componentDidMount=="function"){var d=n.return;try{o.componentDidMount()}catch(A){Bt(n,d,A)}}var u=n.return;try{Yd(n)}catch(A){Bt(n,u,A)}break;case 5:var v=n.return;try{Yd(n)}catch(A){Bt(n,v,A)}}}catch(A){Bt(n,n.return,A)}if(n===t){Pe=null;break}var P=n.sibling;if(P!==null){P.return=n.return,Pe=P;break}Pe=n.return}}var u0=Math.ceil,hl=F.ReactCurrentDispatcher,Zd=F.ReactCurrentOwner,un=F.ReactCurrentBatchConfig,ut=0,ir=null,Gt=null,ur=0,Kr=0,Li=xa(0),Xt=0,Fs=null,Ka=0,ml=0,eu=0,Ls=null,Fr=null,tu=0,Oi=1/0,ia=null,xl=!1,ru=null,wa=null,gl=!1,_a=null,vl=0,Os=0,nu=null,yl=-1,jl=0;function Er(){return(ut&6)!==0?it():yl!==-1?yl:yl=it()}function ka(t){return(t.mode&1)===0?1:(ut&2)!==0&&ur!==0?ur&-ur:Qy.transition!==null?(jl===0&&(jl=Ro()),jl):(t=mt,t!==0||(t=window.event,t=t===void 0?16:Pf(t.type)),t)}function kn(t,n,i,o){if(50<Os)throw Os=0,nu=null,Error(s(185));Ia(t,i,o),((ut&2)===0||t!==ir)&&(t===ir&&((ut&2)===0&&(ml|=i),Xt===4&&Sa(t,ur)),Lr(t,o),i===1&&ut===0&&(n.mode&1)===0&&(Oi=it()+500,Qo&&va()))}function Lr(t,n){var i=t.callbackNode;Ic(t,n);var o=yi(t,t===ir?ur:0);if(o===0)i!==null&&ht(i),t.callbackNode=null,t.callbackPriority=0;else if(n=o&-o,t.callbackPriority!==n){if(i!=null&&ht(i),n===1)t.tag===0?Gy(Pm.bind(null,t)):mh(Pm.bind(null,t)),Uy(function(){(ut&6)===0&&va()}),i=null;else{switch(Po(o)){case 1:i=yt;break;case 4:i=Xe;break;case 16:i=gn;break;case 536870912:i=Qn;break;default:i=gn}i=Lm(i,Rm.bind(null,t))}t.callbackPriority=n,t.callbackNode=i}}function Rm(t,n){if(yl=-1,jl=0,(ut&6)!==0)throw Error(s(327));var i=t.callbackNode;if(Ii()&&t.callbackNode!==i)return null;var o=yi(t,t===ir?ur:0);if(o===0)return null;if((o&30)!==0||(o&t.expiredLanes)!==0||n)n=bl(t,o);else{n=o;var d=ut;ut|=2;var u=Nm();(ir!==t||ur!==n)&&(ia=null,Oi=it()+500,Ja(t,n));do try{h0();break}catch(P){zm(t,P)}while(!0);bd(),hl.current=u,ut=d,Gt!==null?n=0:(ir=null,ur=0,n=Xt)}if(n!==0){if(n===2&&(d=ds(t),d!==0&&(o=d,n=au(t,d))),n===1)throw i=Fs,Ja(t,0),Sa(t,o),Lr(t,it()),i;if(n===6)Sa(t,o);else{if(d=t.current.alternate,(o&30)===0&&!p0(d)&&(n=bl(t,o),n===2&&(u=ds(t),u!==0&&(o=u,n=au(t,u))),n===1))throw i=Fs,Ja(t,0),Sa(t,o),Lr(t,it()),i;switch(t.finishedWork=d,t.finishedLanes=o,n){case 0:case 1:throw Error(s(345));case 2:Xa(t,Fr,ia);break;case 3:if(Sa(t,o),(o&130023424)===o&&(n=tu+500-it(),10<n)){if(yi(t,0)!==0)break;if(d=t.suspendedLanes,(d&o)!==o){Er(),t.pingedLanes|=t.suspendedLanes&d;break}t.timeoutHandle=dd(Xa.bind(null,t,Fr,ia),n);break}Xa(t,Fr,ia);break;case 4:if(Sa(t,o),(o&4194240)===o)break;for(n=t.eventTimes,d=-1;0<o;){var v=31-Vr(o);u=1<<v,v=n[v],v>d&&(d=v),o&=~u}if(o=d,o=it()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*u0(o/1960))-o,10<o){t.timeoutHandle=dd(Xa.bind(null,t,Fr,ia),o);break}Xa(t,Fr,ia);break;case 5:Xa(t,Fr,ia);break;default:throw Error(s(329))}}}return Lr(t,it()),t.callbackNode===i?Rm.bind(null,t):null}function au(t,n){var i=Ls;return t.current.memoizedState.isDehydrated&&(Ja(t,n).flags|=256),t=bl(t,n),t!==2&&(n=Fr,Fr=i,n!==null&&iu(n)),t}function iu(t){Fr===null?Fr=t:Fr.push.apply(Fr,t)}function p0(t){for(var n=t;;){if(n.flags&16384){var i=n.updateQueue;if(i!==null&&(i=i.stores,i!==null))for(var o=0;o<i.length;o++){var d=i[o],u=d.getSnapshot;d=d.value;try{if(!yn(u(),d))return!1}catch{return!1}}}if(i=n.child,n.subtreeFlags&16384&&i!==null)i.return=n,n=i;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Sa(t,n){for(n&=~eu,n&=~ml,t.suspendedLanes|=n,t.pingedLanes&=~n,t=t.expirationTimes;0<n;){var i=31-Vr(n),o=1<<i;t[i]=-1,n&=~o}}function Pm(t){if((ut&6)!==0)throw Error(s(327));Ii();var n=yi(t,0);if((n&1)===0)return Lr(t,it()),null;var i=bl(t,n);if(t.tag!==0&&i===2){var o=ds(t);o!==0&&(n=o,i=au(t,o))}if(i===1)throw i=Fs,Ja(t,0),Sa(t,n),Lr(t,it()),i;if(i===6)throw Error(s(345));return t.finishedWork=t.current.alternate,t.finishedLanes=n,Xa(t,Fr,ia),Lr(t,it()),null}function su(t,n){var i=ut;ut|=1;try{return t(n)}finally{ut=i,ut===0&&(Oi=it()+500,Qo&&va())}}function Ya(t){_a!==null&&_a.tag===0&&(ut&6)===0&&Ii();var n=ut;ut|=1;var i=un.transition,o=mt;try{if(un.transition=null,mt=1,t)return t()}finally{mt=o,un.transition=i,ut=n,(ut&6)===0&&va()}}function ou(){Kr=Li.current,Mt(Li)}function Ja(t,n){t.finishedWork=null,t.finishedLanes=0;var i=t.timeoutHandle;if(i!==-1&&(t.timeoutHandle=-1,qy(i)),Gt!==null)for(i=Gt.return;i!==null;){var o=i;switch(xd(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&Wo();break;case 3:Ti(),Mt(Ar),Mt(mr),Rd();break;case 5:Ed(o);break;case 4:Ti();break;case 13:Mt(Ot);break;case 19:Mt(Ot);break;case 10:wd(o.type._context);break;case 22:case 23:ou()}i=i.return}if(ir=t,Gt=t=Ca(t.current,null),ur=Kr=n,Xt=0,Fs=null,eu=ml=Ka=0,Fr=Ls=null,Wa!==null){for(n=0;n<Wa.length;n++)if(i=Wa[n],o=i.interleaved,o!==null){i.interleaved=null;var d=o.next,u=i.pending;if(u!==null){var v=u.next;u.next=d,o.next=v}i.pending=o}Wa=null}return t}function zm(t,n){do{var i=Gt;try{if(bd(),al.current=ll,il){for(var o=It.memoizedState;o!==null;){var d=o.queue;d!==null&&(d.pending=null),o=o.next}il=!1}if(Qa=0,ar=Jt=It=null,zs=!1,Ns=0,Zd.current=null,i===null||i.return===null){Xt=1,Fs=n,Gt=null;break}e:{var u=t,v=i.return,P=i,A=n;if(n=ur,P.flags|=32768,A!==null&&typeof A=="object"&&typeof A.then=="function"){var te=A,me=P,ye=me.tag;if((me.mode&1)===0&&(ye===0||ye===11||ye===15)){var he=me.alternate;he?(me.updateQueue=he.updateQueue,me.memoizedState=he.memoizedState,me.lanes=he.lanes):(me.updateQueue=null,me.memoizedState=null)}var $e=rm(v);if($e!==null){$e.flags&=-257,nm($e,v,P,u,n),$e.mode&1&&tm(u,te,n),n=$e,A=te;var Ne=n.updateQueue;if(Ne===null){var Ae=new Set;Ae.add(A),n.updateQueue=Ae}else Ne.add(A);break e}else{if((n&1)===0){tm(u,te,n),lu();break e}A=Error(s(426))}}else if(Lt&&P.mode&1){var Ht=rm(v);if(Ht!==null){(Ht.flags&65536)===0&&(Ht.flags|=256),nm(Ht,v,P,u,n),yd(Di(A,P));break e}}u=A=Di(A,P),Xt!==4&&(Xt=2),Ls===null?Ls=[u]:Ls.push(u),u=v;do{switch(u.tag){case 3:u.flags|=65536,n&=-n,u.lanes|=n;var G=Zh(u,A,n);Ch(u,G);break e;case 1:P=A;var I=u.type,Y=u.stateNode;if((u.flags&128)===0&&(typeof I.getDerivedStateFromError=="function"||Y!==null&&typeof Y.componentDidCatch=="function"&&(wa===null||!wa.has(Y)))){u.flags|=65536,n&=-n,u.lanes|=n;var _e=em(u,P,n);Ch(u,_e);break e}}u=u.return}while(u!==null)}Am(i)}catch(De){n=De,Gt===i&&i!==null&&(Gt=i=i.return);continue}break}while(!0)}function Nm(){var t=hl.current;return hl.current=ll,t===null?ll:t}function lu(){(Xt===0||Xt===3||Xt===2)&&(Xt=4),ir===null||(Ka&268435455)===0&&(ml&268435455)===0||Sa(ir,ur)}function bl(t,n){var i=ut;ut|=2;var o=Nm();(ir!==t||ur!==n)&&(ia=null,Ja(t,n));do try{f0();break}catch(d){zm(t,d)}while(!0);if(bd(),ut=i,hl.current=o,Gt!==null)throw Error(s(261));return ir=null,ur=0,Xt}function f0(){for(;Gt!==null;)Mm(Gt)}function h0(){for(;Gt!==null&&!ct();)Mm(Gt)}function Mm(t){var n=Fm(t.alternate,t,Kr);t.memoizedProps=t.pendingProps,n===null?Am(t):Gt=n,Zd.current=null}function Am(t){var n=t;do{var i=n.alternate;if(t=n.return,(n.flags&32768)===0){if(i=s0(i,n,Kr),i!==null){Gt=i;return}}else{if(i=o0(i,n),i!==null){i.flags&=32767,Gt=i;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Xt=6,Gt=null;return}}if(n=n.sibling,n!==null){Gt=n;return}Gt=n=t}while(n!==null);Xt===0&&(Xt=5)}function Xa(t,n,i){var o=mt,d=un.transition;try{un.transition=null,mt=1,m0(t,n,i,o)}finally{un.transition=d,mt=o}return null}function m0(t,n,i,o){do Ii();while(_a!==null);if((ut&6)!==0)throw Error(s(327));i=t.finishedWork;var d=t.finishedLanes;if(i===null)return null;if(t.finishedWork=null,t.finishedLanes=0,i===t.current)throw Error(s(177));t.callbackNode=null,t.callbackPriority=0;var u=i.lanes|i.childLanes;if(Bc(t,u),t===ir&&(Gt=ir=null,ur=0),(i.subtreeFlags&2064)===0&&(i.flags&2064)===0||gl||(gl=!0,Lm(gn,function(){return Ii(),null})),u=(i.flags&15990)!==0,(i.subtreeFlags&15990)!==0||u){u=un.transition,un.transition=null;var v=mt;mt=1;var P=ut;ut|=4,Zd.current=null,c0(t,i),km(i,t),Ty(ld),vn=!!od,ld=od=null,t.current=i,d0(i),Ft(),ut=P,mt=v,un.transition=u}else t.current=i;if(gl&&(gl=!1,_a=t,vl=d),u=t.pendingLanes,u===0&&(wa=null),cs(i.stateNode),Lr(t,it()),n!==null)for(o=t.onRecoverableError,i=0;i<n.length;i++)d=n[i],o(d.value,{componentStack:d.stack,digest:d.digest});if(xl)throw xl=!1,t=ru,ru=null,t;return(vl&1)!==0&&t.tag!==0&&Ii(),u=t.pendingLanes,(u&1)!==0?t===nu?Os++:(Os=0,nu=t):Os=0,va(),null}function Ii(){if(_a!==null){var t=Po(vl),n=un.transition,i=mt;try{if(un.transition=null,mt=16>t?16:t,_a===null)var o=!1;else{if(t=_a,_a=null,vl=0,(ut&6)!==0)throw Error(s(331));var d=ut;for(ut|=4,Pe=t.current;Pe!==null;){var u=Pe,v=u.child;if((Pe.flags&16)!==0){var P=u.deletions;if(P!==null){for(var A=0;A<P.length;A++){var te=P[A];for(Pe=te;Pe!==null;){var me=Pe;switch(me.tag){case 0:case 11:case 15:Ds(8,me,u)}var ye=me.child;if(ye!==null)ye.return=me,Pe=ye;else for(;Pe!==null;){me=Pe;var he=me.sibling,$e=me.return;if(ym(me),me===te){Pe=null;break}if(he!==null){he.return=$e,Pe=he;break}Pe=$e}}}var Ne=u.alternate;if(Ne!==null){var Ae=Ne.child;if(Ae!==null){Ne.child=null;do{var Ht=Ae.sibling;Ae.sibling=null,Ae=Ht}while(Ae!==null)}}Pe=u}}if((u.subtreeFlags&2064)!==0&&v!==null)v.return=u,Pe=v;else e:for(;Pe!==null;){if(u=Pe,(u.flags&2048)!==0)switch(u.tag){case 0:case 11:case 15:Ds(9,u,u.return)}var G=u.sibling;if(G!==null){G.return=u.return,Pe=G;break e}Pe=u.return}}var I=t.current;for(Pe=I;Pe!==null;){v=Pe;var Y=v.child;if((v.subtreeFlags&2064)!==0&&Y!==null)Y.return=v,Pe=Y;else e:for(v=I;Pe!==null;){if(P=Pe,(P.flags&2048)!==0)try{switch(P.tag){case 0:case 11:case 15:fl(9,P)}}catch(De){Bt(P,P.return,De)}if(P===v){Pe=null;break e}var _e=P.sibling;if(_e!==null){_e.return=P.return,Pe=_e;break e}Pe=P.return}}if(ut=d,va(),nr&&typeof nr.onPostCommitFiberRoot=="function")try{nr.onPostCommitFiberRoot(Kn,t)}catch{}o=!0}return o}finally{mt=i,un.transition=n}}return!1}function Tm(t,n,i){n=Di(i,n),n=Zh(t,n,1),t=ja(t,n,1),n=Er(),t!==null&&(Ia(t,1,n),Lr(t,n))}function Bt(t,n,i){if(t.tag===3)Tm(t,t,i);else for(;n!==null;){if(n.tag===3){Tm(n,t,i);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(wa===null||!wa.has(o))){t=Di(i,t),t=em(n,t,1),n=ja(n,t,1),t=Er(),n!==null&&(Ia(n,1,t),Lr(n,t));break}}n=n.return}}function x0(t,n,i){var o=t.pingCache;o!==null&&o.delete(n),n=Er(),t.pingedLanes|=t.suspendedLanes&i,ir===t&&(ur&i)===i&&(Xt===4||Xt===3&&(ur&130023424)===ur&&500>it()-tu?Ja(t,0):eu|=i),Lr(t,n)}function Dm(t,n){n===0&&((t.mode&1)===0?n=1:(n=vi,vi<<=1,(vi&130023424)===0&&(vi=4194304)));var i=Er();t=ra(t,n),t!==null&&(Ia(t,n,i),Lr(t,i))}function g0(t){var n=t.memoizedState,i=0;n!==null&&(i=n.retryLane),Dm(t,i)}function v0(t,n){var i=0;switch(t.tag){case 13:var o=t.stateNode,d=t.memoizedState;d!==null&&(i=d.retryLane);break;case 19:o=t.stateNode;break;default:throw Error(s(314))}o!==null&&o.delete(n),Dm(t,i)}var Fm;Fm=function(t,n,i){if(t!==null)if(t.memoizedProps!==n.pendingProps||Ar.current)Dr=!0;else{if((t.lanes&i)===0&&(n.flags&128)===0)return Dr=!1,i0(t,n,i);Dr=(t.flags&131072)!==0}else Dr=!1,Lt&&(n.flags&1048576)!==0&&xh(n,Yo,n.index);switch(n.lanes=0,n.tag){case 2:var o=n.type;ul(t,n),t=n.pendingProps;var d=$i(n,mr.current);Ai(n,i),d=Nd(null,n,o,t,d,i);var u=Md();return n.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Tr(o)?(u=!0,Go(n)):u=!1,n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Sd(n),d.updater=cl,n.stateNode=d,d._reactInternals=n,Od(n,o,t,i),n=Ud(null,n,o,!0,u,i)):(n.tag=0,Lt&&u&&md(n),Cr(null,n,d,i),n=n.child),n;case 16:o=n.elementType;e:{switch(ul(t,n),t=n.pendingProps,d=o._init,o=d(o._payload),n.type=o,d=n.tag=j0(o),t=bn(o,t),d){case 0:n=qd(null,n,o,t,i);break e;case 1:n=cm(null,n,o,t,i);break e;case 11:n=am(null,n,o,t,i);break e;case 14:n=im(null,n,o,bn(o.type,t),i);break e}throw Error(s(306,o,""))}return n;case 0:return o=n.type,d=n.pendingProps,d=n.elementType===o?d:bn(o,d),qd(t,n,o,d,i);case 1:return o=n.type,d=n.pendingProps,d=n.elementType===o?d:bn(o,d),cm(t,n,o,d,i);case 3:e:{if(dm(n),t===null)throw Error(s(387));o=n.pendingProps,u=n.memoizedState,d=u.element,Sh(t,n),rl(n,o,null,i);var v=n.memoizedState;if(o=v.element,u.isDehydrated)if(u={element:o,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},n.updateQueue.baseState=u,n.memoizedState=u,n.flags&256){d=Di(Error(s(423)),n),n=um(t,n,o,i,d);break e}else if(o!==d){d=Di(Error(s(424)),n),n=um(t,n,o,i,d);break e}else for(Qr=ma(n.stateNode.containerInfo.firstChild),Gr=n,Lt=!0,jn=null,i=_h(n,null,o,i),n.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling;else{if(zi(),o===d){n=aa(t,n,i);break e}Cr(t,n,o,i)}n=n.child}return n;case 5:return $h(n),t===null&&vd(n),o=n.type,d=n.pendingProps,u=t!==null?t.memoizedProps:null,v=d.children,cd(o,d)?v=null:u!==null&&cd(o,u)&&(n.flags|=32),lm(t,n),Cr(t,n,v,i),n.child;case 6:return t===null&&vd(n),null;case 13:return pm(t,n,i);case 4:return Cd(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=Ni(n,null,o,i):Cr(t,n,o,i),n.child;case 11:return o=n.type,d=n.pendingProps,d=n.elementType===o?d:bn(o,d),am(t,n,o,d,i);case 7:return Cr(t,n,n.pendingProps,i),n.child;case 8:return Cr(t,n,n.pendingProps.children,i),n.child;case 12:return Cr(t,n,n.pendingProps.children,i),n.child;case 10:e:{if(o=n.type._context,d=n.pendingProps,u=n.memoizedProps,v=d.value,Rt(Zo,o._currentValue),o._currentValue=v,u!==null)if(yn(u.value,v)){if(u.children===d.children&&!Ar.current){n=aa(t,n,i);break e}}else for(u=n.child,u!==null&&(u.return=n);u!==null;){var P=u.dependencies;if(P!==null){v=u.child;for(var A=P.firstContext;A!==null;){if(A.context===o){if(u.tag===1){A=na(-1,i&-i),A.tag=2;var te=u.updateQueue;if(te!==null){te=te.shared;var me=te.pending;me===null?A.next=A:(A.next=me.next,me.next=A),te.pending=A}}u.lanes|=i,A=u.alternate,A!==null&&(A.lanes|=i),_d(u.return,i,n),P.lanes|=i;break}A=A.next}}else if(u.tag===10)v=u.type===n.type?null:u.child;else if(u.tag===18){if(v=u.return,v===null)throw Error(s(341));v.lanes|=i,P=v.alternate,P!==null&&(P.lanes|=i),_d(v,i,n),v=u.sibling}else v=u.child;if(v!==null)v.return=u;else for(v=u;v!==null;){if(v===n){v=null;break}if(u=v.sibling,u!==null){u.return=v.return,v=u;break}v=v.return}u=v}Cr(t,n,d.children,i),n=n.child}return n;case 9:return d=n.type,o=n.pendingProps.children,Ai(n,i),d=cn(d),o=o(d),n.flags|=1,Cr(t,n,o,i),n.child;case 14:return o=n.type,d=bn(o,n.pendingProps),d=bn(o.type,d),im(t,n,o,d,i);case 15:return sm(t,n,n.type,n.pendingProps,i);case 17:return o=n.type,d=n.pendingProps,d=n.elementType===o?d:bn(o,d),ul(t,n),n.tag=1,Tr(o)?(t=!0,Go(n)):t=!1,Ai(n,i),Jh(n,o,d),Od(n,o,d,i),Ud(null,n,o,!0,t,i);case 19:return hm(t,n,i);case 22:return om(t,n,i)}throw Error(s(156,n.tag))};function Lm(t,n){return Ke(t,n)}function y0(t,n,i,o){this.tag=t,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pn(t,n,i,o){return new y0(t,n,i,o)}function cu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function j0(t){if(typeof t=="function")return cu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===de)return 11;if(t===ze)return 14}return 2}function Ca(t,n){var i=t.alternate;return i===null?(i=pn(t.tag,n,t.key,t.mode),i.elementType=t.elementType,i.type=t.type,i.stateNode=t.stateNode,i.alternate=t,t.alternate=i):(i.pendingProps=n,i.type=t.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=t.flags&14680064,i.childLanes=t.childLanes,i.lanes=t.lanes,i.child=t.child,i.memoizedProps=t.memoizedProps,i.memoizedState=t.memoizedState,i.updateQueue=t.updateQueue,n=t.dependencies,i.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},i.sibling=t.sibling,i.index=t.index,i.ref=t.ref,i}function wl(t,n,i,o,d,u){var v=2;if(o=t,typeof t=="function")cu(t)&&(v=1);else if(typeof t=="string")v=5;else e:switch(t){case L:return Za(i.children,d,u,n);case oe:v=8,d|=8;break;case S:return t=pn(12,i,n,d|2),t.elementType=S,t.lanes=u,t;case be:return t=pn(13,i,n,d),t.elementType=be,t.lanes=u,t;case ke:return t=pn(19,i,n,d),t.elementType=ke,t.lanes=u,t;case ge:return _l(i,d,u,n);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case y:v=10;break e;case q:v=9;break e;case de:v=11;break e;case ze:v=14;break e;case Q:v=16,o=null;break e}throw Error(s(130,t==null?t:typeof t,""))}return n=pn(v,i,n,d),n.elementType=t,n.type=o,n.lanes=u,n}function Za(t,n,i,o){return t=pn(7,t,o,n),t.lanes=i,t}function _l(t,n,i,o){return t=pn(22,t,o,n),t.elementType=ge,t.lanes=i,t.stateNode={isHidden:!1},t}function du(t,n,i){return t=pn(6,t,null,n),t.lanes=i,t}function uu(t,n,i){return n=pn(4,t.children!==null?t.children:[],t.key,n),n.lanes=i,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}function b0(t,n,i,o,d){this.tag=n,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=us(0),this.expirationTimes=us(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=us(0),this.identifierPrefix=o,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function pu(t,n,i,o,d,u,v,P,A){return t=new b0(t,n,i,P,A),n===1?(n=1,u===!0&&(n|=8)):n=0,u=pn(3,null,null,n),t.current=u,u.stateNode=t,u.memoizedState={element:o,isDehydrated:i,cache:null,transitions:null,pendingSuspenseBoundaries:null},Sd(u),t}function w0(t,n,i){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:X,key:o==null?null:""+o,children:t,containerInfo:n,implementation:i}}function Om(t){if(!t)return ga;t=t._reactInternals;e:{if(Hr(t)!==t||t.tag!==1)throw Error(s(170));var n=t;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Tr(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(s(171))}if(t.tag===1){var i=t.type;if(Tr(i))return fh(t,i,n)}return n}function Im(t,n,i,o,d,u,v,P,A){return t=pu(i,o,!0,t,d,u,v,P,A),t.context=Om(null),i=t.current,o=Er(),d=ka(i),u=na(o,d),u.callback=n??null,ja(i,u,d),t.current.lanes=d,Ia(t,d,o),Lr(t,o),t}function kl(t,n,i,o){var d=n.current,u=Er(),v=ka(d);return i=Om(i),n.context===null?n.context=i:n.pendingContext=i,n=na(u,v),n.payload={element:t},o=o===void 0?null:o,o!==null&&(n.callback=o),t=ja(d,n,v),t!==null&&(kn(t,d,v,u),tl(t,d,v)),v}function Sl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Bm(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var i=t.retryLane;t.retryLane=i!==0&&i<n?i:n}}function fu(t,n){Bm(t,n),(t=t.alternate)&&Bm(t,n)}function _0(){return null}var qm=typeof reportError=="function"?reportError:function(t){console.error(t)};function hu(t){this._internalRoot=t}Cl.prototype.render=hu.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));kl(t,n,null,null)},Cl.prototype.unmount=hu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Ya(function(){kl(null,t,null,null)}),n[Xn]=null}};function Cl(t){this._internalRoot=t}Cl.prototype.unstable_scheduleHydration=function(t){if(t){var n=No();t={blockedOn:null,target:t,priority:n};for(var i=0;i<K.length&&n!==0&&n<K[i].priority;i++);K.splice(i,0,t),i===0&&Ue(t)}};function mu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function El(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Um(){}function k0(t,n,i,o,d){if(d){if(typeof o=="function"){var u=o;o=function(){var te=Sl(v);u.call(te)}}var v=Im(n,o,t,0,null,!1,!1,"",Um);return t._reactRootContainer=v,t[Xn]=v.current,_s(t.nodeType===8?t.parentNode:t),Ya(),v}for(;d=t.lastChild;)t.removeChild(d);if(typeof o=="function"){var P=o;o=function(){var te=Sl(A);P.call(te)}}var A=pu(t,0,!1,null,null,!1,!1,"",Um);return t._reactRootContainer=A,t[Xn]=A.current,_s(t.nodeType===8?t.parentNode:t),Ya(function(){kl(n,A,i,o)}),A}function $l(t,n,i,o,d){var u=i._reactRootContainer;if(u){var v=u;if(typeof d=="function"){var P=d;d=function(){var A=Sl(v);P.call(A)}}kl(n,v,t,d)}else v=k0(i,n,t,d,o);return Sl(v)}zo=function(t){switch(t.tag){case 3:var n=t.stateNode;if(n.current.memoizedState.isDehydrated){var i=Oa(n.pendingLanes);i!==0&&(ps(n,i|1),Lr(n,it()),(ut&6)===0&&(Oi=it()+500,va()))}break;case 13:Ya(function(){var o=ra(t,1);if(o!==null){var d=Er();kn(o,t,1,d)}}),fu(t,1)}},ua=function(t){if(t.tag===13){var n=ra(t,134217728);if(n!==null){var i=Er();kn(n,t,134217728,i)}fu(t,134217728)}},Ba=function(t){if(t.tag===13){var n=ka(t),i=ra(t,n);if(i!==null){var o=Er();kn(i,t,n,o)}fu(t,n)}},No=function(){return mt},fs=function(t,n){var i=mt;try{return mt=t,n()}finally{mt=i}},J=function(t,n,i){switch(n){case"input":if(bt(t,i),n=i.name,i.type==="radio"&&n!=null){for(i=t;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<i.length;n++){var o=i[n];if(o!==t&&o.form===t.form){var d=Vo(o);if(!d)throw Error(s(90));st(o),bt(o,d)}}}break;case"textarea":Vt(t,i);break;case"select":n=i.value,n!=null&&He(t,!!i.multiple,n,!1)}},Fa=su,Un=Ya;var S0={usingClientEntryPoint:!1,Events:[Cs,Ci,Vo,qr,dt,su]},Is={findFiberByHostInstance:qa,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},C0={bundleType:Is.bundleType,version:Is.version,rendererPackageName:Is.rendererPackageName,rendererConfig:Is.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:F.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ce(t),t===null?null:t.stateNode},findFiberByHostInstance:Is.findFiberByHostInstance||_0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Rl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Rl.isDisabled&&Rl.supportsFiber)try{Kn=Rl.inject(C0),nr=Rl}catch{}}return Or.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=S0,Or.createPortal=function(t,n){var i=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!mu(n))throw Error(s(200));return w0(t,n,null,i)},Or.createRoot=function(t,n){if(!mu(t))throw Error(s(299));var i=!1,o="",d=qm;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(d=n.onRecoverableError)),n=pu(t,1,!1,null,null,i,!1,o,d),t[Xn]=n.current,_s(t.nodeType===8?t.parentNode:t),new hu(n)},Or.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=ce(n),t=t===null?null:t.stateNode,t},Or.flushSync=function(t){return Ya(t)},Or.hydrate=function(t,n,i){if(!El(n))throw Error(s(200));return $l(null,t,n,!0,i)},Or.hydrateRoot=function(t,n,i){if(!mu(t))throw Error(s(405));var o=i!=null&&i.hydratedSources||null,d=!1,u="",v=qm;if(i!=null&&(i.unstable_strictMode===!0&&(d=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(v=i.onRecoverableError)),n=Im(n,null,t,1,i??null,d,!1,u,v),t[Xn]=n.current,_s(t),o)for(t=0;t<o.length;t++)i=o[t],d=i._getVersion,d=d(i._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[i,d]:n.mutableSourceEagerHydrationData.push(i,d);return new Cl(n)},Or.render=function(t,n,i){if(!El(n))throw Error(s(200));return $l(null,t,n,!1,i)},Or.unmountComponentAtNode=function(t){if(!El(t))throw Error(s(40));return t._reactRootContainer?(Ya(function(){$l(null,null,t,!1,function(){t._reactRootContainer=null,t[Xn]=null})}),!0):!1},Or.unstable_batchedUpdates=su,Or.unstable_renderSubtreeIntoContainer=function(t,n,i,o){if(!El(i))throw Error(s(200));if(t==null||t._reactInternals===void 0)throw Error(s(38));return $l(t,n,i,!1,o)},Or.version="18.3.1-next-f1338f8080-20240426",Or}var Jm;function iv(){if(Jm)return vu.exports;Jm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(a){console.error(a)}}return r(),vu.exports=M0(),vu.exports}var Xm;function A0(){if(Xm)return Pl;Xm=1;var r=iv();return Pl.createRoot=r.createRoot,Pl.hydrateRoot=r.hydrateRoot,Pl}var T0=A0();const D0=av(T0);var At="-ms-",uo="-moz-",xt="-webkit-",sv="comm",Sc="rule",Yp="decl",F0="@import",L0="@namespace",ov="@keyframes",O0="@layer",lv=Math.abs,Jp=String.fromCharCode,Sp=Object.assign;function I0(r,a){return Zt(r,0)^45?(((a<<2^Zt(r,0))<<2^Zt(r,1))<<2^Zt(r,2))<<2^Zt(r,3):0}function cv(r){return r.trim()}function sa(r,a){return(r=a.exec(r))?r[0]:r}function Je(r,a,s){return r.replace(a,s)}function Ql(r,a,s){return r.indexOf(a,s)}function Zt(r,a){return r.charCodeAt(a)|0}function pi(r,a,s){return r.slice(a,s)}function $n(r){return r.length}function dv(r){return r.length}function io(r,a){return a.push(r),r}function B0(r,a){return r.map(a).join("")}function Zm(r,a){return r.filter(function(s){return!sa(s,a)})}var Cc=1,Zi=1,uv=0,mn=0,Qt=0,is="";function Ec(r,a,s,l,c,p,h,f){return{value:r,root:a,parent:s,type:l,props:c,children:p,line:Cc,column:Zi,length:h,return:"",siblings:f}}function Pa(r,a){return Sp(Ec("",null,null,"",null,null,0,r.siblings),r,{length:-r.length},a)}function Bi(r){for(;r.root;)r=Pa(r.root,{children:[r]});io(r,r.siblings)}function q0(){return Qt}function U0(){return Qt=mn>0?Zt(is,--mn):0,Zi--,Qt===10&&(Zi=1,Cc--),Qt}function Rn(){return Qt=mn<uv?Zt(is,mn++):0,Zi++,Qt===10&&(Zi=1,Cc++),Qt}function za(){return Zt(is,mn)}function Kl(){return mn}function $c(r,a){return pi(is,r,a)}function mo(r){switch(r){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function H0(r){return Cc=Zi=1,uv=$n(is=r),mn=0,[]}function V0(r){return is="",r}function bu(r){return cv($c(mn-1,Cp(r===91?r+2:r===40?r+1:r)))}function W0(r){for(;(Qt=za())&&Qt<33;)Rn();return mo(r)>2||mo(Qt)>3?"":" "}function G0(r,a){for(;--a&&Rn()&&!(Qt<48||Qt>102||Qt>57&&Qt<65||Qt>70&&Qt<97););return $c(r,Kl()+(a<6&&za()==32&&Rn()==32))}function Cp(r){for(;Rn();)switch(Qt){case r:return mn;case 34:case 39:r!==34&&r!==39&&Cp(Qt);break;case 40:r===41&&Cp(r);break;case 92:Rn();break}return mn}function Q0(r,a){for(;Rn()&&r+Qt!==57;)if(r+Qt===84&&za()===47)break;return"/*"+$c(a,mn-1)+"*"+Jp(r===47?r:Rn())}function K0(r){for(;!mo(za());)Rn();return $c(r,mn)}function Y0(r){return V0(Yl("",null,null,null,[""],r=H0(r),0,[0],r))}function Yl(r,a,s,l,c,p,h,f,g){for(var _=0,b=0,k=h,C=0,N=0,O=0,$=1,V=1,R=1,j=0,T="",F=c,ne=p,X=l,L=T;V;)switch(O=j,j=Rn()){case 40:if(O!=108&&Zt(L,k-1)==58){Ql(L+=Je(bu(j),"&","&\f"),"&\f",lv(_?f[_-1]:0))!=-1&&(R=-1);break}case 34:case 39:case 91:L+=bu(j);break;case 9:case 10:case 13:case 32:L+=W0(O);break;case 92:L+=G0(Kl()-1,7);continue;case 47:switch(za()){case 42:case 47:io(J0(Q0(Rn(),Kl()),a,s,g),g),(mo(O||1)==5||mo(za()||1)==5)&&$n(L)&&pi(L,-1,void 0)!==" "&&(L+=" ");break;default:L+="/"}break;case 123*$:f[_++]=$n(L)*R;case 125*$:case 59:case 0:switch(j){case 0:case 125:V=0;case 59+b:R==-1&&(L=Je(L,/\f/g,"")),N>0&&($n(L)-k||$===0&&O===47)&&io(N>32?tx(L+";",l,s,k-1,g):tx(Je(L," ","")+";",l,s,k-2,g),g);break;case 59:L+=";";default:if(io(X=ex(L,a,s,_,b,c,f,T,F=[],ne=[],k,p),p),j===123)if(b===0)Yl(L,a,X,X,F,p,k,f,ne);else{switch(C){case 99:if(Zt(L,3)===110)break;case 108:if(Zt(L,2)===97)break;default:b=0;case 100:case 109:case 115:}b?Yl(r,X,X,l&&io(ex(r,X,X,0,0,c,f,T,c,F=[],k,ne),ne),c,ne,k,f,l?F:ne):Yl(L,X,X,X,[""],ne,0,f,ne)}}_=b=N=0,$=R=1,T=L="",k=h;break;case 58:k=1+$n(L),N=O;default:if($<1){if(j==123)--$;else if(j==125&&$++==0&&U0()==125)continue}switch(L+=Jp(j),j*$){case 38:R=b>0?1:(L+="\f",-1);break;case 44:f[_++]=($n(L)-1)*R,R=1;break;case 64:za()===45&&(L+=bu(Rn())),C=za(),b=k=$n(T=L+=K0(Kl())),j++;break;case 45:O===45&&$n(L)==2&&($=0)}}return p}function ex(r,a,s,l,c,p,h,f,g,_,b,k){for(var C=c-1,N=c===0?p:[""],O=dv(N),$=0,V=0,R=0;$<l;++$)for(var j=0,T=pi(r,C+1,C=lv(V=h[$])),F=r;j<O;++j)(F=cv(V>0?N[j]+" "+T:Je(T,/&\f/g,N[j])))&&(g[R++]=F);return Ec(r,a,s,c===0?Sc:f,g,_,b,k)}function J0(r,a,s,l){return Ec(r,a,s,sv,Jp(q0()),pi(r,2,-2),0,l)}function tx(r,a,s,l,c){return Ec(r,a,s,Yp,pi(r,0,l),pi(r,l+1,-1),l,c)}function pv(r,a,s){switch(I0(r,a)){case 5103:return xt+"print-"+r+r;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return xt+r+r;case 4855:return xt+r.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+r;case 4789:return uo+r+r;case 5349:case 4246:case 4810:case 6968:case 2756:return xt+r+uo+r+At+r+r;case 5936:switch(Zt(r,a+11)){case 114:return xt+r+At+Je(r,/[svh]\w+-[tblr]{2}/,"tb")+r;case 108:return xt+r+At+Je(r,/[svh]\w+-[tblr]{2}/,"tb-rl")+r;case 45:return xt+r+At+Je(r,/[svh]\w+-[tblr]{2}/,"lr")+r}case 6828:case 4268:case 2903:return xt+r+At+r+r;case 6165:return xt+r+At+"flex-"+r+r;case 5187:return xt+r+Je(r,/(\w+).+(:[^]+)/,xt+"box-$1$2"+At+"flex-$1$2")+r;case 5443:return xt+r+At+"flex-item-"+Je(r,/flex-|-self/g,"")+(sa(r,/flex-|baseline/)?"":At+"grid-row-"+Je(r,/flex-|-self/g,""))+r;case 4675:return xt+r+At+"flex-line-pack"+Je(r,/align-content|flex-|-self/g,"")+r;case 5548:return xt+r+At+Je(r,"shrink","negative")+r;case 5292:return xt+r+At+Je(r,"basis","preferred-size")+r;case 6060:return xt+"box-"+Je(r,"-grow","")+xt+r+At+Je(r,"grow","positive")+r;case 4554:return xt+Je(r,/([^-])(transform)/g,"$1"+xt+"$2")+r;case 6187:return Je(Je(Je(r,/(zoom-|grab)/,xt+"$1"),/(image-set)/,xt+"$1"),r,"")+r;case 5495:case 3959:return Je(r,/(image-set\([^]*)/,xt+"$1$`$1");case 4968:return Je(Je(r,/(.+:)(flex-)?(.*)/,xt+"box-pack:$3"+At+"flex-pack:$3"),/space-between/,"justify")+xt+r+r;case 4200:if(!sa(r,/flex-|baseline/))return At+"grid-column-align"+pi(r,a)+r;break;case 2592:case 3360:return At+Je(r,"template-","")+r;case 4384:case 3616:return s&&s.some(function(l,c){return a=c,sa(l.props,/grid-\w+-end/)})?~Ql(r+(s=s[a].value),"span",0)?r:At+Je(r,"-start","")+r+At+"grid-row-span:"+(~Ql(s,"span",0)?sa(s,/\d+/):+sa(s,/\d+/)-+sa(r,/\d+/))+";":At+Je(r,"-start","")+r;case 4896:case 4128:return s&&s.some(function(l){return sa(l.props,/grid-\w+-start/)})?r:At+Je(Je(r,"-end","-span"),"span ","")+r;case 4095:case 3583:case 4068:case 2532:return Je(r,/(.+)-inline(.+)/,xt+"$1$2")+r;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if($n(r)-1-a>6)switch(Zt(r,a+1)){case 109:if(Zt(r,a+4)!==45)break;case 102:return Je(r,/(.+:)(.+)-([^]+)/,"$1"+xt+"$2-$3$1"+uo+(Zt(r,a+3)==108?"$3":"$2-$3"))+r;case 115:return~Ql(r,"stretch",0)?pv(Je(r,"stretch","fill-available"),a,s)+r:r}break;case 5152:case 5920:return Je(r,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(l,c,p,h,f,g,_){return At+c+":"+p+_+(h?At+c+"-span:"+(f?g:+g-+p)+_:"")+r});case 4949:if(Zt(r,a+6)===121)return Je(r,":",":"+xt)+r;break;case 6444:switch(Zt(r,Zt(r,14)===45?18:11)){case 120:return Je(r,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+xt+(Zt(r,14)===45?"inline-":"")+"box$3$1"+xt+"$2$3$1"+At+"$2box$3")+r;case 100:return Je(r,":",":"+At)+r}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Je(r,"scroll-","scroll-snap-")+r}return r}function cc(r,a){for(var s="",l=0;l<r.length;l++)s+=a(r[l],l,r,a)||"";return s}function X0(r,a,s,l){switch(r.type){case O0:if(r.children.length)break;case F0:case L0:case Yp:return r.return=r.return||r.value;case sv:return"";case ov:return r.return=r.value+"{"+cc(r.children,l)+"}";case Sc:if(!$n(r.value=r.props.join(",")))return""}return $n(s=cc(r.children,l))?r.return=r.value+"{"+s+"}":""}function Z0(r){var a=dv(r);return function(s,l,c,p){for(var h="",f=0;f<a;f++)h+=r[f](s,l,c,p)||"";return h}}function ej(r){return function(a){a.root||(a=a.return)&&r(a)}}function tj(r,a,s,l){if(r.length>-1&&!r.return)switch(r.type){case Yp:r.return=pv(r.value,r.length,s);return;case ov:return cc([Pa(r,{value:Je(r.value,"@","@"+xt)})],l);case Sc:if(r.length)return B0(s=r.props,function(c){switch(sa(c,l=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Bi(Pa(r,{props:[Je(c,/:(read-\w+)/,":"+uo+"$1")]})),Bi(Pa(r,{props:[c]})),Sp(r,{props:Zm(s,l)});break;case"::placeholder":Bi(Pa(r,{props:[Je(c,/:(plac\w+)/,":"+xt+"input-$1")]})),Bi(Pa(r,{props:[Je(c,/:(plac\w+)/,":"+uo+"$1")]})),Bi(Pa(r,{props:[Je(c,/:(plac\w+)/,At+"input-$1")]})),Bi(Pa(r,{props:[c]})),Sp(r,{props:Zm(s,l)});break}return""})}}var Xi={};function la(r,...a){return new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${r} for more information.${a.length>0?` Args: ${a.join(", ")}`:""}`)}var wu,_u;const es=typeof process<"u"&&Xi!==void 0&&(Xi.REACT_APP_SC_ATTR||Xi.SC_ATTR)||"data-styled",fv="active",hv="data-styled-version",Rc="6.6.0",Xp=`/*!sc*/
`,po=typeof window<"u"&&typeof document<"u";if(!br.createContext)throw la(19);function rx(r){if(typeof process<"u"&&Xi!==void 0){const a=Xi[r];if(a!==void 0&&a!=="")return a!=="false"}}const rj=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:(_u=(wu=rx("REACT_APP_SC_DISABLE_SPEEDY"))!==null&&wu!==void 0?wu:rx("SC_DISABLE_SPEEDY"))!==null&&_u!==void 0?_u:typeof process<"u"&&Xi!==void 0&&!1),mv="sc-keyframes-",nj={};let Jl=new Map,dc=new Map,Xl=1;const so=r=>{if(Jl.has(r))return Jl.get(r);for(;dc.has(Xl);)Xl++;const a=Xl++;return Jl.set(r,a),dc.set(a,r),a},aj=r=>dc.get(r),ij=(r,a)=>{Xl=a+1,Jl.set(r,a),dc.set(a,r)},Zp=Object.freeze([]),ts=Object.freeze({});function xv(r,a,s=ts){return r.theme!==s.theme&&r.theme||a||s.theme}const sj=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,oj=/(^-|-$)/g;function gv(r){return r.replace(sj,"-").replace(oj,"")}const lj=/(a)(d)/gi,nx=r=>String.fromCharCode(r+(r>25?39:97));function ef(r){let a,s="";for(a=Math.abs(r);a>52;a=a/52|0)s=nx(a%52)+s;return(nx(a%52)+s).replace(lj,"$1-$2")}const Ep=5381,li=(r,a)=>{let s=a.length;for(;s;)r=33*r^a.charCodeAt(--s);return r},vv=r=>li(Ep,r);function tf(r){return ef(vv(r)>>>0)}function cj(r){return r.displayName||r.name||"Component"}function $p(r){return typeof r=="string"&&!0}function dj(r){return $p(r)?`styled.${r}`:`Styled(${cj(r)})`}const yv=Symbol.for("react.memo"),uj=Symbol.for("react.forward_ref"),pj={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},fj={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},jv={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},hj={[uj]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[yv]:jv};function ax(r){return("type"in(a=r)&&a.type.$$typeof)===yv?jv:"$$typeof"in r?hj[r.$$typeof]:pj;var a}const mj=Object.defineProperty,xj=Object.getOwnPropertyNames,gj=Object.getOwnPropertySymbols,vj=Object.getOwnPropertyDescriptor,yj=Object.getPrototypeOf,jj=Object.prototype;function bv(r,a,s){if(typeof a!="string"){const l=yj(a);l&&l!==jj&&bv(r,l,s);const c=xj(a).concat(gj(a)),p=ax(r),h=ax(a);for(let f=0;f<c.length;++f){const g=c[f];if(!(g in fj||s&&s[g]||h&&g in h||p&&g in p)){const _=vj(a,g);try{mj(r,g,_)}catch{}}}}return r}function ss(r){return typeof r=="function"}const bj=Symbol.for("react.forward_ref");function rf(r){return r!=null&&(typeof r=="object"||typeof r=="function")&&r.$$typeof===bj&&"styledComponentId"in r}function oo(r,a){return r&&a?r+" "+a:r||a||""}function uc(r,a){return r.join("")}function xo(r){return r!==null&&typeof r=="object"&&r.constructor.name===Object.name&&!("props"in r&&r.$$typeof)}function Rp(r,a,s=!1){if(!s&&!xo(r)&&!Array.isArray(r))return a;if(Array.isArray(a))for(let l=0;l<a.length;l++)r[l]=Rp(r[l],a[l]);else if(xo(a))for(const l in a)r[l]=Rp(r[l],a[l]);return r}function nf(r,a){Object.defineProperty(r,"toString",{value:a})}const wj=class{constructor(r){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=r,this._cGroup=0,this._cIndex=0}indexOfGroup(r){if(r===this._cGroup)return this._cIndex;let a=this._cIndex;if(r>this._cGroup)for(let s=this._cGroup;s<r;s++)a+=this.groupSizes[s];else for(let s=this._cGroup-1;s>=r;s--)a-=this.groupSizes[s];return this._cGroup=r,this._cIndex=a,a}insertRules(r,a){if(r>=this.groupSizes.length){const c=this.groupSizes,p=c.length;let h=p;for(;r>=h;)if(h<<=1,h<0)throw la(16,`${r}`);this.groupSizes=new Uint32Array(h),this.groupSizes.set(c),this.length=h;for(let f=p;f<h;f++)this.groupSizes[f]=0}let s=this.indexOfGroup(r+1),l=0;for(let c=0,p=a.length;c<p;c++)this.tag.insertRule(s,a[c])&&(this.groupSizes[r]++,s++,l++);l>0&&this._cGroup>r&&(this._cIndex+=l)}clearGroup(r){if(r<this.length){const a=this.groupSizes[r],s=this.indexOfGroup(r),l=s+a;this.groupSizes[r]=0;for(let c=s;c<l;c++)this.tag.deleteRule(s);a>0&&this._cGroup>r&&(this._cIndex-=a)}}getGroup(r){let a="";if(r>=this.length||this.groupSizes[r]===0)return a;const s=this.groupSizes[r],l=this.indexOfGroup(r),c=l+s;for(let p=l;p<c;p++)a+=this.tag.getRule(p)+Xp;return a}},_j=`style[${es}][${hv}="${Rc}"]`,kj=new RegExp(`^${es}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),ix=r=>typeof ShadowRoot<"u"&&r instanceof ShadowRoot||"host"in r&&r.nodeType===11,Pp=r=>{if(!r)return document;if(ix(r))return r;if("getRootNode"in r){const a=r.getRootNode();if(ix(a))return a}return document},Sj=(r,a,s)=>{const l=s.split(",");let c;for(let p=0,h=l.length;p<h;p++)(c=l[p])&&r.registerName(a,c)},Cj=(r,a)=>{var s;const l=((s=a.textContent)!==null&&s!==void 0?s:"").split(Xp),c=[];for(let p=0,h=l.length;p<h;p++){const f=l[p].trim();if(!f)continue;const g=f.match(kj);if(g){const _=0|parseInt(g[1],10),b=g[2];_!==0&&(ij(b,_),Sj(r,b,g[3]),r.getTag().insertRules(_,c)),c.length=0}else c.push(f)}},ku=r=>{const s=Pp(r.options.target).querySelectorAll(_j);for(let l=0,c=s.length;l<c;l++){const p=s[l];p&&p.getAttribute(es)!==fv&&(Cj(r,p),p.parentNode&&p.parentNode.removeChild(p))}};let qs=!1;function Ej(){if(qs!==!1)return qs;if(typeof document<"u"){const r=document.head.querySelector('meta[property="csp-nonce"]');if(r)return qs=r.nonce||r.getAttribute("content")||void 0;const a=document.head.querySelector('meta[name="sc-nonce"]');if(a)return qs=a.getAttribute("content")||void 0}return qs=typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0}const wv=(r,a)=>{if(typeof document>"u")throw la(20);const s=document.head,l=r||s,c=document.createElement("style"),p=(g=>{const _=Array.from(g.querySelectorAll(`style[${es}]`));return _[_.length-1]})(l),h=p!==void 0?p.nextSibling:null;c.setAttribute(es,fv),c.setAttribute(hv,Rc);const f=a||Ej();return f&&c.setAttribute("nonce",f),l.insertBefore(c,h),c},$j=class{constructor(r,a){this.element=wv(r,a),this.element.appendChild(document.createTextNode("")),this.sheet=(s=>{var l;if(s.sheet)return s.sheet;const c=(l=s.getRootNode().styleSheets)!==null&&l!==void 0?l:document.styleSheets;for(let p=0,h=c.length;p<h;p++){const f=c[p];if(f.ownerNode===s)return f}throw la(17)})(this.element),this.length=0}insertRule(r,a){try{return this.sheet.insertRule(a,r),this.length++,!0}catch{return!1}}deleteRule(r){this.sheet.deleteRule(r),this.length--}getRule(r){const a=this.sheet.cssRules[r];return a&&a.cssText?a.cssText:""}},Rj=class{constructor(r,a){this.element=wv(r,a),this.nodes=this.element.childNodes,this.length=0}insertRule(r,a){if(r<=this.length&&r>=0){const s=document.createTextNode(a);return this.element.insertBefore(s,this.nodes[r]||null),this.length++,!0}return!1}deleteRule(r){this.element.removeChild(this.nodes[r]),this.length--}getRule(r){return r<this.length?this.nodes[r].textContent:""}};let sx=po;const Pj={isServer:!po,useCSSOMInjection:!rj};class bo{static registerId(a){return so(a)}constructor(a=ts,s={},l){this.options=Object.assign(Object.assign({},Pj),a),this.gs=s,this.keyframeIds=new Set,this.names=new Map(l),this.server=!!a.isServer,!this.server&&po&&sx&&(sx=!1,ku(this)),nf(this,()=>(c=>{const p=c.getTag(),{length:h}=p;let f="";for(let g=0;g<h;g++){const _=aj(g);if(_===void 0)continue;const b=c.names.get(_);if(b===void 0||!b.size)continue;const k=p.getGroup(g);if(k.length===0)continue;const C=es+".g"+g+'[id="'+_+'"]';let N="";for(const O of b)O.length>0&&(N+=O+",");f+=k+C+'{content:"'+N+'"}'+Xp}return f})(this))}rehydrate(){!this.server&&po&&ku(this)}reconstructWithOptions(a,s=!0){const l=new bo(Object.assign(Object.assign({},this.options),a),this.gs,s&&this.names||void 0);return l.keyframeIds=new Set(this.keyframeIds),!this.server&&po&&a.target!==this.options.target&&Pp(this.options.target)!==Pp(a.target)&&ku(l),l}allocateGSInstance(a){return this.gs[a]=(this.gs[a]||0)+1}getTag(){return this.tag||(this.tag=(a=(({useCSSOMInjection:s,target:l,nonce:c})=>s?new $j(l,c):new Rj(l,c))(this.options),new wj(a)));var a}hasNameForId(a,s){var l,c;return(c=(l=this.names.get(a))===null||l===void 0?void 0:l.has(s))!==null&&c!==void 0&&c}registerName(a,s){so(a),a.startsWith(mv)&&this.keyframeIds.add(a);const l=this.names.get(a);l?l.add(s):this.names.set(a,new Set([s]))}insertRules(a,s,l){this.registerName(a,s),this.getTag().insertRules(so(a),l)}clearNames(a){this.names.has(a)&&this.names.get(a).clear()}clearRules(a){this.getTag().clearGroup(so(a)),this.clearNames(a)}clearTag(){this.tag=void 0}}const _v=new WeakSet,zj={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Nj(r,a){return a==null||typeof a=="boolean"||a===""?"":typeof a!="number"||a===0||r in zj||r.startsWith("--")?String(a).trim():a+"px"}const ai=47;function ox(r){if(r.charCodeAt(0)===45&&r.charCodeAt(1)===45)return r;let a="";for(let s=0;s<r.length;s++){const l=r.charCodeAt(s);a+=l>=65&&l<=90?"-"+String.fromCharCode(l+32):r[s]}return a.startsWith("ms-")?"-"+a:a}const kv=Symbol.for("sc-keyframes");function Mj(r){return typeof r=="object"&&r!==null&&kv in r}function Sv(r){return ss(r)&&!(r.prototype&&r.prototype.isReactComponent)}const Cv=r=>r==null||r===!1||r==="",Aj=Symbol.for("react.client.reference");function lx(r){return r.$$typeof===Aj}function Ev(r,a){for(const s in r){const l=r[s];r.hasOwnProperty(s)&&!Cv(l)&&(Array.isArray(l)&&_v.has(l)||ss(l)?a.push(ox(s)+":",l,";"):xo(l)?(a.push(s+" {"),Ev(l,a),a.push("}")):a.push(ox(s)+": "+Nj(s,l)+";"))}}function Ta(r,a,s,l,c=[]){if(Cv(r))return c;const p=typeof r;if(p==="string")return c.push(r),c;if(p==="function"){if(lx(r))return c;if(Sv(r)&&a){const h=r(a);return Ta(h,a,s,l,c)}return c.push(r),c}if(Array.isArray(r)){for(let h=0;h<r.length;h++)Ta(r[h],a,s,l,c);return c}return rf(r)?(c.push(`.${r.styledComponentId}`),c):Mj(r)?(s?(r.inject(s,l),c.push(r.getName(l))):c.push(r),c):lx(r)?c:xo(r)?r.toString!==Object.prototype.toString?(c.push(r.toString()),c):(Ev(r,c),c):(c.push(r.toString()),c)}const Tj=vv(Rc);class Dj{constructor(a,s,l){this.rules=a,this.componentId=s,this.baseHash=li(Tj,s),this.baseStyle=l,bo.registerId(s)}generateAndInjectStyles(a,s,l){let c=this.baseStyle?this.baseStyle.generateAndInjectStyles(a,s,l):"";{let p="";for(let h=0;h<this.rules.length;h++){const f=this.rules[h];if(typeof f=="string")p+=f;else if(f)if(Sv(f)){const g=f(a);typeof g=="string"?p+=g:g!=null&&g!==!1&&(p+=uc(Ta(g,a,s,l)))}else p+=uc(Ta(f,a,s,l))}if(p){this.dynamicNameCache||(this.dynamicNameCache=new Map);const h=l.hash?l.hash+p:p;let f=this.dynamicNameCache.get(h);if(!f){if(f=ef(li(li(this.baseHash,l.hash),p)>>>0),this.dynamicNameCache.size>=200){const g=this.dynamicNameCache.keys().next().value;g!==void 0&&this.dynamicNameCache.delete(g)}this.dynamicNameCache.set(h,f)}if(!s.hasNameForId(this.componentId,f)){const g=l(p,"."+f,void 0,this.componentId);s.insertRules(this.componentId,f,g)}c=oo(c,f)}}return c}}const Fj=/&/g;function $v(r,a){let s=0;for(;--a>=0&&r.charCodeAt(a)===92;)s++;return!(1&~s)}function Su(r){const a=r.length;let s="",l=0,c=0,p=0,h=!1,f=!1;for(let g=0;g<a;g++){const _=r.charCodeAt(g);if(p!==0||h||_!==ai||r.charCodeAt(g+1)!==42)if(h)_===42&&r.charCodeAt(g+1)===ai&&(h=!1,g++);else if(_!==34&&_!==39||$v(r,g)){if(p===0)if(_===123)c++;else if(_===125){if(c--,c<0){f=!0;let b=g+1;for(;b<a;){const k=r.charCodeAt(b);if(k===59||k===10)break;b++}b<a&&r.charCodeAt(b)===59&&b++,c=0,g=b-1,l=b;continue}c===0&&(s+=r.substring(l,g+1),l=g+1)}else _===59&&c===0&&(s+=r.substring(l,g+1),l=g+1)}else p===0?p=_:p===_&&(p=0);else h=!0,g++}return f||c!==0||p!==0?(l<a&&c===0&&p===0&&(s+=r.substring(l)),s):r}function Rv(r,a){const s=a+" ",l=","+s;for(let c=0;c<r.length;c++){const p=r[c];if(p.type==="rule"){p.value=(s+p.value).replaceAll(",",l);const h=p.props,f=[];for(let g=0;g<h.length;g++)f[g]=s+h[g];p.props=f}Array.isArray(p.children)&&p.type!=="@keyframes"&&Rv(p.children,a)}return r}function Lj({options:r=ts,plugins:a=Zp}=ts){let s,l,c;const p=(C,N,O)=>O.startsWith(l)&&O.endsWith(l)&&O.replaceAll(l,"").length>0?`.${s}`:C,h=a.slice();h.push(C=>{C.type===Sc&&C.value.includes("&")&&(c||(c=new RegExp(`\\${l}\\b`,"g")),C.props[0]=C.props[0].replace(Fj,l).replace(c,p))}),r.prefix&&h.push(tj),h.push(X0);let f=[];const g=Z0(h.concat(ej(C=>f.push(C)))),_=(C,N="",O="",$="&")=>{s=$,l=N,c=void 0;const V=(function(j){const T=j.indexOf("//")!==-1,F=j.indexOf("}")!==-1;if(!T&&!F)return j;if(!T)return Su(j);const ne=j.length;let X="",L=0,oe=0,S=0,y=0,q=0,de=!1;for(;oe<ne;){const be=j.charCodeAt(oe);if(be!==34&&be!==39||$v(j,oe))if(S===0)if(be===ai&&oe+1<ne&&j.charCodeAt(oe+1)===42){for(oe+=2;oe+1<ne&&(j.charCodeAt(oe)!==42||j.charCodeAt(oe+1)!==ai);)oe++;oe+=2}else if(be!==40)if(be!==41)if(y>0)oe++;else if(be===42&&oe+1<ne&&j.charCodeAt(oe+1)===ai)X+=j.substring(L,oe),oe+=2,L=oe,de=!0;else if(be===ai&&oe+1<ne&&j.charCodeAt(oe+1)===ai){for(X+=j.substring(L,oe);oe<ne&&j.charCodeAt(oe)!==10;)oe++;L=oe,de=!0}else be===123?q++:be===125&&q--,oe++;else y>0&&y--,oe++;else y++,oe++;else oe++;else S===0?S=be:S===be&&(S=0),oe++}return de?(L<ne&&(X+=j.substring(L)),q===0?X:Su(X)):q===0?j:Su(j)})(C);let R=Y0(O||N?O+" "+N+" { "+V+" }":V);return r.namespace&&(R=Rv(R,r.namespace)),f=[],cc(R,g),f},b=r;let k=Ep;for(let C=0;C<a.length;C++)a[C].name||la(15),k=li(k,a[C].name);return b!=null&&b.namespace&&(k=li(k,b.namespace)),b!=null&&b.prefix&&(k=li(k,"p")),_.hash=k!==Ep?k.toString():"",_}const Oj=new bo,zp=Lj(),Pv=br.createContext({shouldForwardProp:void 0,styleSheet:Oj,stylis:zp,stylisPlugins:void 0});Pv.Consumer;function zv(){return br.useContext(Pv)}const go=br.createContext(void 0);go.Consumer;function Ij(r){const a=br.useContext(go),s=br.useMemo(()=>(function(l,c){if(!l)throw la(14);if(ss(l))return l(c);if(Array.isArray(l)||typeof l!="object")throw la(8);return c?Object.assign(Object.assign({},c),l):l})(r.theme,a),[r.theme,a]);return r.children?br.createElement(go.Provider,{value:s},r.children):null}const Cu={};function Bj(r,a){const s=typeof r!="string"?"sc":gv(r);Cu[s]=(Cu[s]||0)+1;const l=s+"-"+tf(Rc+s+Cu[s]);return a?a+"-"+l:l}function qj(r,a,s){const l=rf(r),c=r,p=!$p(r),{attrs:h=Zp,componentId:f=Bj(a.displayName,a.parentComponentId),displayName:g=dj(r)}=a,_=a.displayName&&a.componentId?gv(a.displayName)+"-"+a.componentId:a.componentId||f,b=l&&c.attrs?c.attrs.concat(h).filter(Boolean):h;let{shouldForwardProp:k}=a;if(l&&c.shouldForwardProp){const $=c.shouldForwardProp;if(a.shouldForwardProp){const V=a.shouldForwardProp;k=(R,j)=>$(R,j)&&V(R,j)}else k=$}const C=new Dj(s,_,l?c.componentStyle:void 0);function N($,V){return(function(R,j,T){const{attrs:F,componentStyle:ne,defaultProps:X,foldedComponentIds:L,styledComponentId:oe,target:S}=R,y=br.useContext(go),q=zv(),de=R.shouldForwardProp||q.shouldForwardProp,be=xv(j,y,X)||ts,[ke,ze]=(function(z,w,re){const ae=Object.assign(Object.assign({},w),{className:void 0,theme:re});let M=null;const se=z.length>1;for(let ve=0;ve<z.length;ve++){const je=z[ve],U=ss(je)?je(se?Object.assign({},ae):ae):je;for(const pe in U)pe==="className"?ae.className=oo(ae.className,U[pe]):pe==="style"?ae.style=Object.assign(Object.assign({},ae.style),U[pe]):U[pe]===void 0?pe in ae&&(ae[pe]!==void 0&&(M||(M=[])).push(pe),ae[pe]=void 0):ae[pe]=U[pe]}return"className"in w&&typeof w.className=="string"&&(ae.className=oo(ae.className,w.className)),[ae,M]})(F,j,be),Q=ne.generateAndInjectStyles(ke,q.styleSheet,q.stylis),ge=ke.as||S,le=$p(ge),xe=(function(z,w,re,ae,M,se){const ve={};for(const je in z)je[0]==="$"||je==="as"||je==="theme"&&z.theme===re||(je==="forwardedAs"?z.forwardedAs!==void 0&&(ve.as=z.forwardedAs):z[je]===void 0?je==="className"||M||se!==null&&se.indexOf(je)!==-1||ae&&!ae(je,w)||(ve[je]=void 0):ae&&!ae(je,w)||(ve[je]=z[je]));return ve})(ke,ge,be,de,le,ze);let H=oo(L,oe);return Q&&(H+=" "+Q),ke.className&&(H+=" "+ke.className),xe[le&&ge.includes("-")?"class":"className"]=H,T&&(xe.ref=T),x.createElement(ge,xe)})(O,$,V)}N.displayName=g;let O=br.forwardRef(N);return O.attrs=b,O.componentStyle=C,O.displayName=g,O.shouldForwardProp=k,O.foldedComponentIds=l?oo(c.foldedComponentIds,c.styledComponentId):"",O.styledComponentId=_,O.target=l?c.target:r,Object.defineProperty(O,"defaultProps",{get(){return this._foldedDefaultProps},set($){this._foldedDefaultProps=l?(function(V,...R){for(const j of R)Rp(V,j,!0);return V})({},c.defaultProps,$):$}}),nf(O,()=>`.${O.styledComponentId}`),p&&bv(O,r,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),O}var Uj=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]);function cx(r,a){const s=[r[0]];for(let l=0,c=a.length;l<c;l+=1)s.push(a[l],r[l+1]);return s}const dx=r=>(_v.add(r),r);function Bn(r,...a){if(ss(r)||xo(r))return dx(Ta(cx(Zp,[r,...a])));const s=r;return a.length===0&&s.length===1&&typeof s[0]=="string"?Ta(s):dx(Ta(cx(s,a)))}function Np(r,a,s=ts){if(!a)throw la(1,a);const l=(c,...p)=>r(a,s,Bn(c,...p));return l.attrs=c=>Np(r,a,Object.assign(Object.assign({},s),{attrs:Array.prototype.concat(s.attrs,c).filter(Boolean)})),l.withConfig=c=>Np(r,a,Object.assign(Object.assign({},s),c)),l}const Nv=r=>Np(qj,r),m=Nv;Uj.forEach(r=>{m[r]=Nv(r)});class Hj{constructor(a,s){this.instanceRules=new Map,this.rules=a,this.componentId=s,this.isStatic=(function(l){for(let c=0;c<l.length;c+=1){const p=l[c];if(ss(p)&&!rf(p))return!1}return!0})(a),bo.registerId(this.componentId)}removeStyles(a,s){this.instanceRules.delete(a),this.rebuildGroup(s)}renderStyles(a,s,l,c){const p=this.componentId;if(this.isStatic){if(l.hasNameForId(p,p+a))this.instanceRules.has(a)||this.computeRules(a,s,l,c);else{const f=this.computeRules(a,s,l,c);l.insertRules(p,f.name,f.rules)}return}const h=this.instanceRules.get(a);if(this.computeRules(a,s,l,c),!l.server&&h){const f=h.rules,g=this.instanceRules.get(a).rules;if(f.length===g.length){let _=!0;for(let b=0;b<f.length;b++)if(f[b]!==g[b]){_=!1;break}if(_)return}}this.rebuildGroup(l)}computeRules(a,s,l,c){const p=uc(Ta(this.rules,s,l,c)),h={name:this.componentId+a,rules:c(p,"")};return this.instanceRules.set(a,h),h}rebuildGroup(a){const s=this.componentId;a.clearRules(s);for(const l of this.instanceRules.values())a.insertRules(s,l.name,l.rules)}}function Vj(r,...a){const s=Bn(r,...a),l=`sc-global-${tf(JSON.stringify(s))}`,c=new Hj(s,l),p=f=>{const g=zv(),_=br.useContext(go);let b;{const k=br.useRef(null);k.current===null&&(k.current=g.styleSheet.allocateGSInstance(l)),b=k.current}g.styleSheet.server&&h(b,f,g.styleSheet,_,g.stylis);{const k=c.isStatic?[b,g.styleSheet,c]:[b,f,g.styleSheet,_,g.stylis,c],C=br.useRef(c);br.useLayoutEffect(()=>{g.styleSheet.server||(C.current!==c&&(g.styleSheet.clearRules(l),C.current=c),h(b,f,g.styleSheet,_,g.stylis))},k),br.useLayoutEffect(()=>()=>{g.styleSheet.server||c.removeStyles(b,g.styleSheet)},[b,g.styleSheet,c])}return g.styleSheet.server&&c.instanceRules.delete(b),null};function h(f,g,_,b,k){if(c.isStatic)c.renderStyles(f,nj,_,k);else{const C=Object.assign(Object.assign({},g),{theme:xv(g,b,p.defaultProps)});c.renderStyles(f,C,_,k)}}return br.memo(p)}var Mv;class Wj{constructor(a,s){this[Mv]=!0,this.inject=(l,c=zp)=>{const p=this.getName(c);if(!l.hasNameForId(this.id,p)){const h=c(this.rules,p,"@keyframes");l.insertRules(this.id,p,h)}},this.name=a,this.id=mv+a,this.rules=s,so(this.id),nf(this,()=>{throw la(12,String(this.name))})}getName(a=zp){return a.hash?this.name+ef(+a.hash>>>0):this.name}}function xi(r,...a){const s=uc(Bn(r,...a)),l=tf(s);return new Wj(l,s)}Mv=kv;function Av(r,a){return function(){return r.apply(a,arguments)}}const{toString:Gj}=Object.prototype,{getPrototypeOf:Da}=Object,{iterator:wo,toStringTag:Tv}=Symbol,vo=(({hasOwnProperty:r})=>(a,s)=>r.call(a,s))(Object.prototype),Dv=r=>typeof r=="string"&&(r==="__proto__"||r==="constructor"||r==="prototype"),Fv=(r,a,s)=>r===Object.prototype||!s&&a===null,Qj=r=>{if(!Object.isExtensible(r))return!1;const a=Object.getOwnPropertyNames(r);return Object.getOwnPropertySymbols&&a.push(...Object.getOwnPropertySymbols(r)),a.every(s=>{if(Dv(s))return!1;const l=Object.getOwnPropertyDescriptor(r,s);return!!l&&l.configurable&&l.writable===!0})},yo=(r,a)=>{let s=r;const l=[];for(;s!=null;){if(l.indexOf(s)!==-1)return!1;l.push(s);const c=Da(s);if(Fv(s,c,s===r))return!1;if(vo(s,a))return!0;s=c}return!1},Kj=(r,a)=>r!=null&&yo(r,a)?r[a]:void 0,Yj=r=>{if(r==null||typeof r!="object"&&typeof r!="function")return r;const a=Da(r);if(a===null&&Qj(r))return r;const s=Object.create(null),l=Object.create(null),c=[];let p=r;for(;p!=null&&c.indexOf(p)===-1;){c.push(p);const h=p===r?a:Da(p);if(Fv(p,h,p===r))break;const f=Object.getOwnPropertyNames(p);Object.getOwnPropertySymbols&&f.push(...Object.getOwnPropertySymbols(p));for(const g of f)Dv(g)||vo(l,g)||(s[g]=r[g],l[g]=!0);p=h}return s},af=(r=>a=>{const s=Gj.call(a);return r[s]||(r[s]=s.slice(8,-1).toLowerCase())})(Object.create(null)),xn=r=>(r=r.toLowerCase(),a=>af(a)===r),Pc=r=>a=>typeof a===r,{isArray:fi}=Array,hi=Pc("undefined");function os(r){return r!==null&&!hi(r)&&r.constructor!==null&&!hi(r.constructor)&&Ir(r.constructor.isBuffer)&&r.constructor.isBuffer(r)}const Lv=xn("ArrayBuffer");function Jj(r){let a;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?a=ArrayBuffer.isView(r):a=r&&r.buffer&&Lv(r.buffer),a}const Xj=Pc("string"),Ir=Pc("function"),Ov=Pc("number"),ls=r=>r!==null&&typeof r=="object",Zj=r=>r===!0||r===!1,Zl=r=>{if(!ls(r))return!1;const a=Da(r);return(a===null||a===Object.prototype||Da(a)===null)&&!yo(r,Tv)&&!yo(r,wo)},eb=r=>{if(!ls(r)||os(r))return!1;try{return Object.keys(r).length===0&&Object.getPrototypeOf(r)===Object.prototype}catch{return!1}},tb=xn("Date"),rb=xn("File"),nb=r=>!!(r&&typeof r.uri<"u"),ab=r=>r&&typeof r.getParts<"u",ib=xn("Blob"),sb=xn("FileList"),ob=xn("Set"),lb=r=>ls(r)&&Ir(r.pipe);function cb(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const ux=cb(),px=typeof ux.FormData<"u"?ux.FormData:void 0,db=r=>{if(!r)return!1;if(px&&r instanceof px)return!0;const a=Da(r);if(!a||a===Object.prototype||!Ir(r.append))return!1;const s=af(r);return s==="formdata"||s==="object"&&Ir(r.toString)&&r.toString()==="[object FormData]"},ub=xn("URLSearchParams"),[pb,fb,hb,mb]=["ReadableStream","Request","Response","Headers"].map(xn),xb=r=>r.trim?r.trim():r.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function _o(r,a,{allOwnKeys:s=!1}={}){if(r===null||typeof r>"u")return;let l,c;if(typeof r!="object"&&(r=[r]),fi(r))for(l=0,c=r.length;l<c;l++)a.call(null,r[l],l,r);else{if(os(r))return;const p=s?Object.getOwnPropertyNames(r):Object.keys(r),h=p.length;let f;for(l=0;l<h;l++)f=p[l],a.call(null,r[f],f,r)}}function Iv(r,a){if(os(r))return null;a=a.toLowerCase();const s=Object.keys(r);let l=s.length,c;for(;l-- >0;)if(c=s[l],a===c.toLowerCase())return c;return null}const ii=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Bv=r=>!hi(r)&&r!==ii;function Mp(...r){const{caseless:a,skipUndefined:s}=Bv(this)&&this||{},l={},c=(p,h)=>{if(h==="__proto__"||h==="constructor"||h==="prototype")return;const f=a&&typeof h=="string"&&Iv(l,h)||h,g=vo(l,f)?l[f]:void 0;Zl(g)&&Zl(p)?l[f]=Mp(g,p):Zl(p)?l[f]=Mp({},p):fi(p)?l[f]=p.slice():(!s||!hi(p))&&(l[f]=p)};for(let p=0,h=r.length;p<h;p++){const f=r[p];if(!f||os(f)||(_o(f,c),typeof f!="object"||fi(f)))continue;const g=Object.getOwnPropertySymbols(f);for(let _=0;_<g.length;_++){const b=g[_];$b.call(f,b)&&c(f[b],b)}}return l}const gb=(r,a,s,{allOwnKeys:l}={})=>(_o(a,(c,p)=>{s&&Ir(c)?Object.defineProperty(r,p,{__proto__:null,value:Av(c,s),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(r,p,{__proto__:null,value:c,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:l}),r),vb=r=>(r.charCodeAt(0)===65279&&(r=r.slice(1)),r),yb=(r,a,s,l)=>{r.prototype=Object.create(a.prototype,l),Object.defineProperty(r.prototype,"constructor",{__proto__:null,value:r,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(r,"super",{__proto__:null,value:a.prototype}),s&&Object.assign(r.prototype,s)},jb=(r,a,s,l)=>{let c,p,h;const f={};if(a=a||{},r==null)return a;do{for(c=Object.getOwnPropertyNames(r),p=c.length;p-- >0;)h=c[p],(!l||l(h,r,a))&&!f[h]&&(a[h]=r[h],f[h]=!0);r=s!==!1&&Da(r)}while(r&&(!s||s(r,a))&&r!==Object.prototype);return a},bb=(r,a,s)=>{r=String(r),(s===void 0||s>r.length)&&(s=r.length),s-=a.length;const l=r.indexOf(a,s);return l!==-1&&l===s},wb=r=>{if(!r)return null;if(fi(r))return r;let a=r.length;if(!Ov(a))return null;const s=new Array(a);for(;a-- >0;)s[a]=r[a];return s},_b=(r=>a=>r&&a instanceof r)(typeof Uint8Array<"u"&&Da(Uint8Array)),kb=(r,a)=>{const l=(r&&r[wo]).call(r);let c;for(;(c=l.next())&&!c.done;){const p=c.value;a.call(r,p[0],p[1])}},Sb=(r,a)=>{let s;const l=[];for(;(s=r.exec(a))!==null;)l.push(s);return l},Cb=xn("HTMLFormElement"),Eb=r=>r.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(s,l,c){return l.toUpperCase()+c}),{propertyIsEnumerable:$b}=Object.prototype,Rb=xn("RegExp"),qv=(r,a)=>{const s=Object.getOwnPropertyDescriptors(r),l={};_o(s,(c,p)=>{let h;(h=a(c,p,r))!==!1&&(l[p]=h||c)}),Object.defineProperties(r,l)},Pb=r=>{qv(r,(a,s)=>{if(Ir(r)&&["arguments","caller","callee"].includes(s))return!1;const l=r[s];if(Ir(l)){if(a.enumerable=!1,"writable"in a){a.writable=!1;return}a.set||(a.set=()=>{throw Error("Can not rewrite read-only method '"+s+"'")})}})},zb=(r,a)=>{const s={},l=c=>{c.forEach(p=>{s[p]=!0})};return fi(r)?l(r):l(String(r).split(a)),s},Nb=()=>{},Mb=(r,a)=>r!=null&&Number.isFinite(r=+r)?r:a;function Ab(r){return!!(r&&Ir(r.append)&&r[Tv]==="FormData"&&r[wo])}const Tb=r=>{const a=new WeakSet,s=l=>{if(ls(l)){if(a.has(l))return;if(os(l))return l;if(!("toJSON"in l)){a.add(l);let c;if(ob(l)){c=[];for(const p of l){const h=s(p);!hi(h)&&c.push(h)}}else c=fi(l)?[]:{},_o(l,(p,h)=>{const f=s(p);!hi(f)&&(c[h]=f)});return a.delete(l),c}}return l};return s(r)},Db=xn("AsyncFunction"),Fb=r=>r&&(ls(r)||Ir(r))&&Ir(r.then)&&Ir(r.catch),Uv=((r,a)=>r?setImmediate:a?((s,l)=>(ii.addEventListener("message",({source:c,data:p})=>{c===ii&&p===s&&l.length&&l.shift()()},!1),c=>{l.push(c),ii.postMessage(s,"*")}))(`axios@${Math.random()}`,[]):s=>setTimeout(s))(typeof setImmediate=="function",Ir(ii.postMessage)),Lb=typeof queueMicrotask<"u"?queueMicrotask.bind(ii):typeof process<"u"&&process.nextTick||Uv,Hv=r=>r!=null&&Ir(r[wo]),Ob=r=>r!=null&&yo(r,wo)&&Hv(r),D={isArray:fi,isArrayBuffer:Lv,isBuffer:os,isFormData:db,isArrayBufferView:Jj,isString:Xj,isNumber:Ov,isBoolean:Zj,isObject:ls,isPlainObject:Zl,isEmptyObject:eb,isReadableStream:pb,isRequest:fb,isResponse:hb,isHeaders:mb,isUndefined:hi,isDate:tb,isFile:rb,isReactNativeBlob:nb,isReactNative:ab,isBlob:ib,isRegExp:Rb,isFunction:Ir,isStream:lb,isURLSearchParams:ub,isTypedArray:_b,isFileList:sb,forEach:_o,merge:Mp,extend:gb,trim:xb,stripBOM:vb,inherits:yb,toFlatObject:jb,kindOf:af,kindOfTest:xn,endsWith:bb,toArray:wb,forEachEntry:kb,matchAll:Sb,isHTMLForm:Cb,hasOwnProperty:vo,hasOwnProp:vo,hasOwnInPrototypeChain:yo,getSafeProp:Kj,toSafeFlatObject:Yj,reduceDescriptors:qv,freezeMethods:Pb,toObjectSet:zb,toCamelCase:Eb,noop:Nb,toFiniteNumber:Mb,findKey:Iv,global:ii,isContextDefined:Bv,isSpecCompliantForm:Ab,toJSONObject:Tb,isAsyncFn:Db,isThenable:Fb,setImmediate:Uv,asap:Lb,isIterable:Hv,isSafeIterable:Ob},Ib=D.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Bb=r=>{const a={};let s,l,c;return r&&r.split(`
`).forEach(function(h){c=h.indexOf(":"),s=h.substring(0,c).trim().toLowerCase(),l=h.substring(c+1).trim();const f=D.hasOwnProp(a,s);!s||f&&D.hasOwnProp(Ib,s)||(s==="set-cookie"?f?a[s].push(l):a[s]=[l]:a[s]=f?a[s]+", "+l:l)}),a};function qb(r){let a=0,s=r.length;for(;a<s;){const l=r.charCodeAt(a);if(l!==9&&l!==32)break;a+=1}for(;s>a;){const l=r.charCodeAt(s-1);if(l!==9&&l!==32)break;s-=1}return a===0&&s===r.length?r:r.slice(a,s)}const Ub=new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+","g"),Hb=new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+","g");function sf(r,a){return D.isArray(r)?r.map(s=>sf(s,a)):qb(String(r).replace(a,""))}const Vb=r=>sf(r,Ub),Wb=r=>sf(r,Hb);function Vv(r){const a=Object.create(null);return D.forEach(r.toJSON(),(s,l)=>{a[l]=Wb(s)}),a}const fx=Symbol("internals");function Us(r){return r&&String(r).trim().toLowerCase()}function ec(r){return r===!1||r==null?r:D.isArray(r)?r.map(ec):Vb(String(r))}function Gb(r){const a=Object.create(null),s=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let l;for(;l=s.exec(r);)a[l[1]]=l[2];return a}const Qb=/^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;function Eu(r){let a=0,s=r.length;for(;a<s;){const l=r.charCodeAt(a);if(l!==9&&l!==32)break;a+=1}for(;s>a;){const l=r.charCodeAt(s-1);if(l!==9&&l!==32)break;s-=1}return a===0&&s===r.length?r:r.slice(a,s)}function Kb(r){const a=r.length-1;if(a<1||r.charCodeAt(0)!==34||r.charCodeAt(a)!==34)return r;let s="";for(let l=1;l<a;l++){const c=r.charCodeAt(l);if(c===34||c===92&&(l+=1,l>=a))return r;s+=r[l]}return s}function Yb(r){const a=Object.create(null),s=String(r);let l=0,c=!1,p=!1;function h(f){const g=Eu(s.slice(l,f)),_=g.indexOf("=");if(_<1)return;const b=Eu(g.slice(0,_));if(!Qb.test(b))return;const k=b.toLowerCase();if(k==="__proto__"||k==="constructor"||k==="prototype")return;const C=Eu(g.slice(_+1));a[k]=Kb(C)}for(let f=0;f<s.length;f++){const g=s.charCodeAt(f);c?p?p=!1:g===92?p=!0:g===34&&(c=!1):g===34?c=!0:(g===44||g===59)&&(h(f),l=f+1)}return h(s.length),a}const Jb=r=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(r.trim());function $u(r,a,s,l,c){if(D.isFunction(l))return l.call(this,a,s);if(c&&(a=s),!!D.isString(a)){if(D.isString(l))return a.indexOf(l)!==-1;if(D.isRegExp(l))return l.test(a)}}function Xb(r){return r.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(a,s,l)=>s.toUpperCase()+l)}function Zb(r,a){const s=D.toCamelCase(" "+a);["get","set","has"].forEach(l=>{Object.defineProperty(r,l+s,{__proto__:null,value:function(c,p,h){return this[l].call(this,a,c,p,h)},configurable:!0})})}let _r=class{constructor(a){a&&this.set(a)}set(a,s,l){const c=this;function p(f,g,_){const b=Us(g);if(!b)return;const k=D.findKey(c,b);(!k||c[k]===void 0||_===!0||_===void 0&&c[k]!==!1)&&(c[k||g]=ec(f))}const h=(f,g)=>D.forEach(f,(_,b)=>p(_,b,g));if(D.isPlainObject(a)||a instanceof this.constructor)h(a,s);else if(D.isString(a)&&(a=a.trim())&&!Jb(a))h(Bb(a),s);else if(D.isObject(a)&&D.isSafeIterable(a)){let f=Object.create(null),g,_;for(const b of a){if(!D.isArray(b))throw new TypeError("Object iterator must return a key-value pair");_=b[0],D.hasOwnProp(f,_)?(g=f[_],f[_]=D.isArray(g)?[...g,b[1]]:[g,b[1]]):f[_]=b[1]}h(f,s)}else a!=null&&p(s,a,l);return this}get(a,s){if(a=Us(a),a){const l=D.findKey(this,a);if(l){const c=this[l];if(!s)return c;if(s===!0)return Gb(c);if(D.isFunction(s))return s.call(this,c,l);if(D.isRegExp(s))return s.exec(c);throw new TypeError("parser must be boolean|regexp|function")}}}has(a,s){if(a=Us(a),a){const l=D.findKey(this,a);return!!(l&&this[l]!==void 0&&(!s||$u(this,this[l],l,s)))}return!1}delete(a,s){const l=this;let c=!1;function p(h){if(h=Us(h),h){const f=D.findKey(l,h);f&&(!s||$u(l,l[f],f,s))&&(delete l[f],c=!0)}}return D.isArray(a)?a.forEach(p):p(a),c}clear(a){const s=Object.keys(this);let l=s.length,c=!1;for(;l--;){const p=s[l];(!a||$u(this,this[p],p,a,!0))&&(delete this[p],c=!0)}return c}normalize(a){const s=this,l={};return D.forEach(this,(c,p)=>{const h=D.findKey(l,p);if(h){s[h]=ec(c),delete s[p];return}const f=a?Xb(p):String(p).trim();f!==p&&delete s[p],s[f]=ec(c),l[f]=!0}),this}concat(...a){return this.constructor.concat(this,...a)}toJSON(a){const s=Object.create(null);return D.forEach(this,(l,c)=>{l!=null&&l!==!1&&(s[c]=a&&D.isArray(l)?l.join(", "):l)}),s}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([a,s])=>a+": "+s).join(`
`)}getSetCookie(){const a=this.get("set-cookie");return D.isArray(a)?a:a==null||a===!1?[]:[a]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(a){return a instanceof this?a:new this(a)}static parseParameters(a){return Yb(a)}static concat(a,...s){const l=new this(a);return s.forEach(c=>l.set(c)),l}static accessor(a){const l=(this[fx]=this[fx]={accessors:{}}).accessors,c=this.prototype;function p(h){const f=Us(h);l[f]||(Zb(c,h),l[f]=!0)}return D.isArray(a)?a.forEach(p):p(a),this}};_r.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);D.reduceDescriptors(_r.prototype,({value:r},a)=>{let s=a[0].toUpperCase()+a.slice(1);return{get:()=>r,set(l){this[s]=l}}});D.freezeMethods(_r);const pc="[REDACTED ****]";function ew(r){if(D.hasOwnProp(r,"toJSON"))return!0;let a=Object.getPrototypeOf(r);for(;a&&a!==Object.prototype;){if(D.hasOwnProp(a,"toJSON"))return!0;a=Object.getPrototypeOf(a)}return!1}function tw(r,a){const s=new Set(a.map(p=>String(p).toLowerCase())),l=[],c=p=>{if(p===null||typeof p!="object"||D.isBuffer(p))return p;if(l.indexOf(p)!==-1)return;p instanceof _r&&(p=p.toJSON()),l.push(p);let h;if(D.isArray(p))h=[],p.forEach((f,g)=>{const _=c(f);D.isUndefined(_)||(h[g]=_)});else{if(!D.isPlainObject(p)&&ew(p))return l.pop(),p;h=Object.create(null);for(const[f,g]of Object.entries(p)){const _=s.has(f.toLowerCase())?pc:c(g);D.isUndefined(_)||(h[f]=_)}}return l.pop(),h};return c(r)}function hx(r){try{return String(r)}catch{return""}}function rw(r){return r.errors.map(s=>{try{return s&&s.message?hx(s.message):hx(s)}catch{return""}}).filter(Boolean).join("; ")||r.name||"AggregateError"}let Ce=class Wv extends Error{static from(a,s,l,c,p,h){let f=a.message;!f&&D.isArray(a.errors)&&a.errors.length&&(f=rw(a));const g=new Wv(f,s||a.code,l,c,p);return Object.defineProperty(g,"cause",{__proto__:null,value:a,writable:!0,enumerable:!1,configurable:!0}),g.name=a.name,a.status!=null&&g.status==null&&(g.status=a.status),h&&Object.assign(g,h),g}constructor(a,s,l,c,p){super(a),Object.defineProperty(this,"message",{__proto__:null,value:a,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,s&&(this.code=s),l&&(this.config=l),c&&(this.request=c),p&&(this.response=p,this.status=p.status)}toJSON(){const a=this.config,s=a&&D.hasOwnProp(a,"redact")?a.redact:void 0,l=D.isArray(s)&&s.length>0?tw(a,s):D.toJSONObject(a);return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:l,code:this.code,status:this.status}}};Ce.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";Ce.ERR_BAD_OPTION="ERR_BAD_OPTION";Ce.ECONNABORTED="ECONNABORTED";Ce.ETIMEDOUT="ETIMEDOUT";Ce.ECONNREFUSED="ECONNREFUSED";Ce.ERR_NETWORK="ERR_NETWORK";Ce.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";Ce.ERR_DEPRECATED="ERR_DEPRECATED";Ce.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";Ce.ERR_BAD_REQUEST="ERR_BAD_REQUEST";Ce.ERR_CANCELED="ERR_CANCELED";Ce.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";Ce.ERR_INVALID_URL="ERR_INVALID_URL";Ce.ERR_FORM_DATA_DEPTH_EXCEEDED="ERR_FORM_DATA_DEPTH_EXCEEDED";const nw=null,Gv=100;function Ap(r){return D.isPlainObject(r)||D.isArray(r)}function Qv(r){return D.endsWith(r,"[]")?r.slice(0,-2):r}function Ru(r,a,s){return r?r.concat(a).map(function(c,p){return c=Qv(c),!s&&p?"["+c+"]":c}).join(s?".":""):a}function aw(r){return D.isArray(r)&&!r.some(Ap)}const iw=D.toFlatObject(D,{},null,function(a){return/^is[A-Z]/.test(a)});function zc(r,a,s){if(!D.isObject(r))throw new TypeError("target must be an object");a=a||new FormData;const l=(j,T)=>{const F=D.getSafeProp(s,j);return D.isUndefined(F)?T:F},c=l("metaTokens",!0),p=l("visitor")||$,h=l("dots",!1),f=l("indexes",!1),g=l("Blob")||typeof Blob<"u"&&Blob,_=l("maxDepth",Gv),b=g&&D.isSpecCompliantForm(a),k=[];if(!D.isFunction(p))throw new TypeError("visitor must be a function");function C(j){if(j===null)return"";if(D.isDate(j))return j.toISOString();if(D.isBoolean(j))return j.toString();if(!b&&D.isBlob(j))throw new Ce("Blob is not supported. Use a Buffer instead.");if(D.isArrayBuffer(j)||D.isTypedArray(j)){if(b&&typeof g=="function")return new g([j]);throw new Ce("Blob is not supported. Use a Buffer instead.",Ce.ERR_NOT_SUPPORT)}return j}function N(j){if(j>_)throw new Ce("Object is too deeply nested ("+j+" levels). Max depth: "+_,Ce.ERR_FORM_DATA_DEPTH_EXCEEDED)}function O(j,T){if(_===1/0)return JSON.stringify(j);const F=[];return JSON.stringify(j,function(X,L){if(!D.isObject(L))return L;for(;F.length&&F[F.length-1]!==this;)F.pop();return F.push(L),N(T+F.length-1),L})}function $(j,T,F){let ne=j;if(D.isReactNative(a)&&D.isReactNativeBlob(j))return a.append(Ru(F,T,h),C(j)),!1;if(j&&!F&&typeof j=="object"){if(D.endsWith(T,"{}"))T=c?T:T.slice(0,-2),j=O(j,1);else if(D.isArray(j)&&aw(j)||(D.isFileList(j)||D.endsWith(T,"[]"))&&(ne=D.toArray(j)))return T=Qv(T),ne.forEach(function(L,oe){!(D.isUndefined(L)||L===null)&&a.append(f===!0?Ru([T],oe,h):f===null?T:T+"[]",C(L))}),!1}return Ap(j)?!0:(a.append(Ru(F,T,h),C(j)),!1)}const V=Object.assign(iw,{defaultVisitor:$,convertValue:C,isVisitable:Ap});function R(j,T,F=0){if(!D.isUndefined(j)){if(N(F),k.indexOf(j)!==-1)throw new Error("Circular reference detected in "+T.join("."));k.push(j),D.forEach(j,function(X,L){(!(D.isUndefined(X)||X===null)&&p.call(a,X,D.isString(L)?L.trim():L,T,V))===!0&&R(X,T?T.concat(L):[L],F+1)}),k.pop()}}if(!D.isObject(r))throw new TypeError("data must be an object");return R(r),a}function mx(r){const a={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"};return encodeURIComponent(r).replace(/[!'()~]|%20/g,function(l){return a[l]})}function of(r,a){this._pairs=[],r&&zc(r,this,a)}const Kv=of.prototype;Kv.append=function(a,s){this._pairs.push([a,s])};Kv.toString=function(a){const s=a?l=>a.call(this,l,mx):mx;return this._pairs.map(function(c){return s(c[0])+"="+s(c[1])},"").join("&")};function sw(r){return encodeURIComponent(r).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Yv(r,a,s){if(!a)return r;r=r||"";const l=D.isFunction(s)?{serialize:s}:s,c=D.getSafeProp(l,"encode")||sw,p=D.getSafeProp(l,"serialize");let h;if(p?h=p(a,l):h=D.isURLSearchParams(a)?a.toString():new of(a,l).toString(c),h){const f=r.indexOf("#");f!==-1&&(r=r.slice(0,f)),r+=(r.indexOf("?")===-1?"?":"&")+h}return r}const Hs=Symbol("internals");function Jv(r){return r?r.length:0}function xx(r){if(r)for(;r.length&&r[r.length-1]===null;)r.pop()}function Vs(r,a){const s=r.handlers,l=Jv(s);s!==a.handlersRef?(a.handlersRef=s,a.handlerEntries.clear()):l!==a.handlersLength&&(l?a.handlerEntries.forEach(function(p,h){s[p.index]!==p.handler&&a.handlerEntries.delete(h)}):a.handlerEntries.clear()),a.handlersLength=l}class gx{constructor(){this.handlers=[],this[Hs]={handlersRef:this.handlers,handlersLength:this.handlers.length,handlerEntries:new Map,iterationDepth:0,nextId:0}}use(a,s,l){const c={fulfilled:a,rejected:s,synchronous:l?l.synchronous:!1,runWhen:l?l.runWhen:null},p=this[Hs];this.handlers==null&&(this.handlers=[]),Vs(this,p);const h=p.nextId++;return this.handlers.push(c),p.handlerEntries.set(h,{handler:c,index:this.handlers.length-1}),p.handlersLength=this.handlers.length,h}eject(a){const s=this[Hs];Vs(this,s);const l=s.handlerEntries.get(a);if(l){if(s.handlerEntries.delete(a),this.handlers[l.index]!==l.handler)return;this.handlers[l.index]=null,s.iterationDepth||(xx(this.handlers),s.handlersLength=this.handlers.length)}}clear(){this.handlers&&(this.handlers=[],Vs(this,this[Hs]))}forEach(a){const s=this[Hs];Vs(this,s),s.iterationDepth++;try{D.forEach(this.handlers,function(c){c!==null&&a(c)})}finally{--s.iterationDepth||(Vs(this,s),xx(this.handlers),s.handlersLength=Jv(this.handlers))}}}const lf={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0,advertiseZstdAcceptEncoding:!1,validateStatusUndefinedResolves:!0},ow=typeof URLSearchParams<"u"?URLSearchParams:of,lw=typeof FormData<"u"?FormData:null,cw=typeof Blob<"u"?Blob:null,dw={isBrowser:!0,classes:{URLSearchParams:ow,FormData:lw,Blob:cw},protocols:["http","https","file","blob","url","data"]},cf=typeof window<"u"&&typeof document<"u",Tp=typeof navigator=="object"&&navigator||void 0,uw=cf&&(!Tp||["ReactNative","NativeScript","NS"].indexOf(Tp.product)<0),pw=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",fw=cf&&window.location.href||"http://localhost",hw=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:cf,hasStandardBrowserEnv:uw,hasStandardBrowserWebWorkerEnv:pw,navigator:Tp,origin:fw},Symbol.toStringTag,{value:"Module"})),or={...hw,...dw};function mw(r,a){return zc(r,new or.classes.URLSearchParams,{visitor:function(s,l,c,p){return or.isNode&&D.isBuffer(s)?(this.append(l,s.toString("base64")),!1):p.defaultVisitor.apply(this,arguments)},...a})}const vx=Gv;function Xv(r){if(r>vx)throw new Ce("FormData field is too deeply nested ("+r+" levels). Max depth: "+vx,Ce.ERR_FORM_DATA_DEPTH_EXCEEDED)}function xw(r){const a=[],s=/[^.[\]]+|\[([^.[\]]*)]/g;let l;for(;(l=s.exec(r))!==null;)Xv(a.length),a.push(l[0]==="[]"?"":l[1]||l[0]);return a}function gw(r){const a={},s=Object.keys(r);let l;const c=s.length;let p;for(l=0;l<c;l++)p=s[l],a[p]=r[p];return a}function Zv(r){function a(s,l,c,p){Xv(p);let h=s[p++];if(h==="__proto__")return!0;const f=Number.isFinite(+h),g=p>=s.length;return h=!h&&D.isArray(c)?c.length:h,g?(D.hasOwnProp(c,h)?c[h]=D.isArray(c[h])?c[h].concat(l):[c[h],l]:c[h]=l,!f):((!D.hasOwnProp(c,h)||!D.isObject(c[h]))&&(c[h]=[]),a(s,l,c[h],p)&&D.isArray(c[h])&&(c[h]=gw(c[h])),!f)}if(D.isFormData(r)&&D.isFunction(r.entries)){const s={};return D.forEachEntry(r,(l,c)=>{a(xw(l),c,s,0)}),s}return null}const e1=Object.freeze(["get","delete","head","options","post","put","patch","purge","link","unlink","query"]),qi=(r,a)=>r!=null&&D.hasOwnProp(r,a)?r[a]:void 0;function vw(r,a,s){if(D.isString(r))try{return(a||JSON.parse)(r),D.trim(r)}catch(l){if(l.name!=="SyntaxError")throw l}return(s||JSON.stringify)(r)}const ko={transitional:lf,adapter:["xhr","http","fetch"],transformRequest:[function(a,s){const l=s.getContentType()||"",c=l.indexOf("application/json")>-1,p=D.isObject(a);if(p&&D.isHTMLForm(a)&&(a=new FormData(a)),D.isFormData(a))return c?JSON.stringify(Zv(a)):a;if(D.isArrayBuffer(a)||D.isBuffer(a)||D.isStream(a)||D.isFile(a)||D.isBlob(a)||D.isReadableStream(a))return a;if(D.isArrayBufferView(a))return a.buffer;if(D.isURLSearchParams(a))return s.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),a.toString();let f;if(p){const g=qi(this,"formSerializer");if(l.indexOf("application/x-www-form-urlencoded")>-1)return mw(a,g).toString();if((f=D.isFileList(a))||l.indexOf("multipart/form-data")>-1){const _=qi(this,"env"),b=_&&_.FormData;return zc(f?{"files[]":a}:a,b&&new b,g)}}return p||c?(s.setContentType("application/json",!1),vw(a)):a}],transformResponse:[function(a){const s=qi(this,"transitional")||ko.transitional,l=s&&s.forcedJSONParsing,c=qi(this,"responseType"),p=c==="json";if(D.isResponse(a)||D.isReadableStream(a))return a;if(a&&D.isString(a)&&(l&&!c||p)){const f=!(s&&s.silentJSONParsing)&&p;try{return JSON.parse(a,qi(this,"parseReviver"))}catch(g){if(f)throw g.name==="SyntaxError"?Ce.from(g,Ce.ERR_BAD_RESPONSE,this,null,qi(this,"response")):g}}return a}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:or.classes.FormData,Blob:or.classes.Blob},validateStatus:function(a){return a>=200&&a<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};D.forEach(e1,r=>{ko.headers[r]={}});function Pu(r,a){const s=this||ko,l=a||s,c=_r.from(l.headers);let p=l.data;return D.forEach(r,function(f){p=f.call(s,p,c.normalize(),a?a.status:void 0)}),c.normalize(),p}function t1(r){return!!(r&&r.__CANCEL__)}let So=class extends Ce{constructor(a,s,l){super(a??"canceled",Ce.ERR_CANCELED,s,l),this.name="CanceledError",this.__CANCEL__=!0}};function r1(r,a,s){const l=s.config.validateStatus;!s.status||!l||l(s.status)?r(s):a(new Ce("Request failed with status code "+s.status,s.status>=400&&s.status<500?Ce.ERR_BAD_REQUEST:Ce.ERR_BAD_RESPONSE,s.config,s.request,s))}const yw=/[\t\n\r]/g;function n1(r){if(typeof r!="string")return r;let a=0;for(;a<r.length&&r.charCodeAt(a)<=32;)a++;return r.slice(a).replace(yw,"")}function zu(r){const a=/^([-+\w]{1,25}):(?:\/\/)?/.exec(r);return a&&a[1]||""}function jw(r,a){r=r||10;const s=new Array(r),l=new Array(r);let c=0,p=0,h;return a=a!==void 0?a:1e3,function(g){const _=Date.now(),b=l[p];h||(h=_),s[c]=g,l[c]=_;let k=p,C=0;for(;k!==c;)C+=s[k++],k=k%r;if(c=(c+1)%r,c===p&&(p=(p+1)%r),_-h<a)return;const N=b&&_-b;return N?Math.round(C*1e3/N):void 0}}function bw(r,a){let s=0,l=1e3/a,c,p;const h=(b,k=Date.now())=>{s=k,c=null,p&&(clearTimeout(p),p=null),r(...b)};return[(...b)=>{const k=Date.now(),C=k-s;C>=l?h(b,k):(c=b,p||(p=setTimeout(()=>{p=null,h(c)},l-C)))},()=>c&&h(c),(...b)=>h(b)]}const fc=(r,a,s=3)=>{let l=0;const c=jw(50,250);return bw(p=>{if(!p||!D.isNumber(p.loaded))return;const h=p.loaded,f=p.lengthComputable?p.total:void 0,g=Math.max(0,f!=null?Math.min(h,f):h),_=Math.max(0,g-l),b=c(_);l=Math.max(l,g);const k={loaded:g,total:f,progress:f?g/f:void 0,bytes:_,rate:b||void 0,estimated:b&&f?(f-g)/b:void 0,event:p,lengthComputable:f!=null,[a?"download":"upload"]:!0};r(k)},s)},yx=(r,a)=>{const s=r!=null;return[l=>a[0]({lengthComputable:s,total:r,loaded:l}),a[1]]},jx=(r,a=D.asap)=>(...s)=>a(()=>r(...s)),ww=or.hasStandardBrowserEnv?((r,a)=>s=>(s=new URL(s,or.origin),r.protocol===s.protocol&&r.host===s.host&&(a||r.port===s.port)))(new URL(or.origin),or.navigator&&/(msie|trident)/i.test(or.navigator.userAgent)):()=>!0,_w=or.hasStandardBrowserEnv?{write(r,a,s,l,c,p,h){if(typeof document>"u")return;const f=[`${r}=${encodeURIComponent(a)}`];D.isNumber(s)&&f.push(`expires=${new Date(s).toUTCString()}`),D.isString(l)&&f.push(`path=${l}`),D.isString(c)&&f.push(`domain=${c}`),p===!0&&f.push("secure"),D.isString(h)&&f.push(`SameSite=${h}`),document.cookie=f.join("; ")},read(r){if(typeof document>"u")return null;const a=document.cookie.split(";");for(let s=0;s<a.length;s++){const l=a[s].replace(/^\s+/,""),c=l.indexOf("=");if(c!==-1&&l.slice(0,c)===r)try{return decodeURIComponent(l.slice(c+1))}catch{return l.slice(c+1)}}return null},remove(r){this.write(r,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function kw(r){return typeof r!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(r)}function Sw(r,a){if(!a)return r;let s=r.length;for(;s>0&&r.charCodeAt(s-1)===47;)s--;return r.slice(0,s)+"/"+a.replace(/^\/+/,"")}const Cw=/^https?:(?!\/\/)/i;function Ew(r){return r&&r.replace(/(^|&)([^=&]*=)?[^&]+/g,(a,s,l="")=>`${s}${l}${pc}`)}function $w(r){const a=r.replace(/^(https?:\/{0,2})[^/?#]*@/i,`$1${pc}@`),s=a.indexOf("#"),c=(s===-1?a:a.slice(0,s)).replace(/([?&][^=&#]*=)[^&#]*/g,`$1${pc}`);return s===-1?c:`${c}#${Ew(a.slice(s+1))}`}function bx(r,a){if(typeof r=="string"){const s=n1(r);if(Cw.test(s))throw new Ce(`Invalid URL ${JSON.stringify($w(s))}: missing "//" after protocol`,Ce.ERR_INVALID_URL,a)}}function a1(r,a,s,l){bx(a,l);let c=!kw(a);return r&&(c||s===!1)?(bx(r,l),Sw(r,a)):a}const wx=r=>r instanceof _r?{...r}:r,Rw=r=>Object.getOwnPropertySymbols&&Object.getOwnPropertyDescriptor?Object.keys(r).concat(Object.getOwnPropertySymbols(r).filter(a=>Object.getOwnPropertyDescriptor(r,a).enumerable)):Object.keys(r);function mi(r,a){r=r||{},a=a||{};const s=Object.create(null);Object.defineProperty(s,"hasOwnProperty",{__proto__:null,value:Object.prototype.hasOwnProperty,enumerable:!1,writable:!0,configurable:!0});function l(b,k,C,N){return D.isPlainObject(b)&&D.isPlainObject(k)?D.merge.call({caseless:N},b,k):D.isPlainObject(k)?D.merge({},k):D.isArray(k)?k.slice():k}function c(b,k,C,N){if(D.isUndefined(k)){if(!D.isUndefined(b))return l(void 0,b,C,N)}else return l(b,k,C,N)}function p(b,k){if(!D.isUndefined(k))return l(void 0,k)}function h(b,k){if(D.isUndefined(k)){if(!D.isUndefined(b))return l(void 0,b)}else return l(void 0,k)}function f(b){const k=D.hasOwnProp(a,"transitional")?a.transitional:void 0;if(!D.isUndefined(k))if(D.isPlainObject(k)){if(D.hasOwnProp(k,b))return k[b]}else return;const C=D.hasOwnProp(r,"transitional")?r.transitional:void 0;if(D.isPlainObject(C)&&D.hasOwnProp(C,b))return C[b]}function g(b,k,C){if(D.hasOwnProp(a,C))return l(b,k);if(D.hasOwnProp(r,C))return l(void 0,b)}const _={url:p,method:p,data:p,baseURL:h,transformRequest:h,transformResponse:h,paramsSerializer:h,timeout:h,timeoutErrorMessage:h,withCredentials:h,withXSRFToken:h,adapter:h,responseType:h,xsrfCookieName:h,xsrfHeaderName:h,onUploadProgress:h,onDownloadProgress:h,decompress:h,maxContentLength:h,maxBodyLength:h,beforeRedirect:h,transport:h,httpAgent:h,httpsAgent:h,cancelToken:h,socketPath:h,allowedSocketPaths:h,responseEncoding:h,validateStatus:g,headers:(b,k,C)=>c(wx(b),wx(k),C,!0)};return D.forEach(Rw({...r,...a}),function(k){if(k==="__proto__"||k==="constructor"||k==="prototype")return;const C=D.hasOwnProp(_,k)?_[k]:c,N=D.hasOwnProp(r,k)?r[k]:void 0,O=D.hasOwnProp(a,k)?a[k]:void 0,$=C(N,O,k);D.isUndefined($)&&C!==g||(s[k]=$)}),D.hasOwnProp(a,"validateStatus")&&D.isUndefined(a.validateStatus)&&f("validateStatusUndefinedResolves")===!1&&(D.hasOwnProp(r,"validateStatus")?s.validateStatus=l(void 0,r.validateStatus):delete s.validateStatus),s}const Pw=["content-type","content-length"];function zw(r,a,s){if(s!=="content-only"){r.set(a);return}Object.entries(a||{}).forEach(([l,c])=>{Pw.includes(l.toLowerCase())&&r.set(l,c)})}const Nw=r=>encodeURIComponent(r).replace(/%([0-9A-F]{2})/gi,(a,s)=>String.fromCharCode(parseInt(s,16)));function i1(r){const a=mi({},r),s=C=>D.hasOwnProp(a,C)?a[C]:void 0,l=s("data");let c=s("withXSRFToken");const p=s("xsrfHeaderName"),h=s("xsrfCookieName");let f=s("headers");const g=s("auth"),_=s("baseURL"),b=s("allowAbsoluteUrls"),k=s("url");if(a.headers=f=_r.from(f),a.url=Yv(a1(_,k,b,a),s("params"),s("paramsSerializer")),g){const C=D.getSafeProp(g,"username")||"",N=D.getSafeProp(g,"password")||"";try{f.set("Authorization","Basic "+btoa(C+":"+(N?Nw(N):"")))}catch(O){throw Ce.from(O,Ce.ERR_BAD_OPTION_VALUE,r)}}if(D.isFormData(l)){const C=D.getSafeProp(l,"getHeaders");or.hasStandardBrowserEnv||or.hasStandardBrowserWebWorkerEnv||D.isReactNative(l)?f.setContentType(void 0):D.isFunction(C)&&zw(f,C.call(l),s("formDataHeaderPolicy"))}if(or.hasStandardBrowserEnv&&(D.isFunction(c)&&(c=c(a)),c===!0||c==null&&ww(a.url))){const N=p&&h&&_w.read(h);N&&f.set(p,N)}return a}const Mw=typeof XMLHttpRequest<"u",Aw=Mw&&function(r){return new Promise(function(s,l){const c=i1(r);let p=c.data;const h=_r.from(c.headers).normalize();let{responseType:f,onUploadProgress:g,onDownloadProgress:_}=c,b,k,C,N,O,$;function V(){N&&N(),O&&O(),c.cancelToken&&c.cancelToken.unsubscribe(b),c.signal&&c.signal.removeEventListener("abort",b)}let R=new XMLHttpRequest;R.open(c.method.toUpperCase(),c.url,!0),R.timeout=c.timeout;function j(F){if(!R)return;if(R.status===0&&(zu(n1(c.url))||zu(or.origin))!=="file"&&!(R.responseURL&&R.responseURL.startsWith("file:"))){l(new Ce("Request aborted",Ce.ECONNABORTED,r,R)),V(),R=null;return}try{F?$&&$(F):O&&O()}catch(oe){setTimeout(()=>{throw oe})}if(!R)return;const ne=_r.from("getAllResponseHeaders"in R&&R.getAllResponseHeaders()),L={data:!f||f==="text"||f==="json"?R.responseText:R.response,status:R.status,statusText:R.statusText,headers:ne,config:r,request:R};r1(function(S){s(S),V()},function(S){l(S),V()},L),R=null}"onloadend"in R?R.onloadend=j:R.onreadystatechange=function(){!R||R.readyState!==4||R.status===0&&!(R.responseURL&&R.responseURL.startsWith("file:"))||setTimeout(j)},R.onabort=function(){R&&(l(new Ce("Request aborted",Ce.ECONNABORTED,r,R)),V(),R=null)},R.onerror=function(ne){const X=ne&&ne.message?ne.message:"Network Error",L=new Ce(X,Ce.ERR_NETWORK,r,R);L.event=ne||null,l(L),V(),R=null},R.ontimeout=function(){let ne=c.timeout?"timeout of "+c.timeout+"ms exceeded":"timeout exceeded";const X=c.transitional||lf;c.timeoutErrorMessage&&(ne=c.timeoutErrorMessage),l(new Ce(ne,X.clarifyTimeoutError?Ce.ETIMEDOUT:Ce.ECONNABORTED,r,R)),V(),R=null},p===void 0&&h.setContentType(null),"setRequestHeader"in R&&D.forEach(Vv(h),function(ne,X){R.setRequestHeader(X,ne)}),D.isUndefined(c.withCredentials)||(R.withCredentials=!!c.withCredentials),f&&f!=="json"&&(R.responseType=c.responseType),_&&([C,O,$]=fc(_,!0),R.addEventListener("progress",C)),g&&R.upload&&([k,N]=fc(g),R.upload.addEventListener("progress",k),R.upload.addEventListener("loadend",N)),(c.cancelToken||c.signal)&&(b=F=>{R&&(l(!F||F.type?new So(null,r,R):F),R.abort(),V(),R=null)},c.cancelToken&&c.cancelToken.subscribe(b),c.signal&&(c.signal.aborted?b():c.signal.addEventListener("abort",b)));const T=zu(c.url);if(T&&!or.protocols.includes(T)){l(new Ce("Unsupported protocol "+T+":",Ce.ERR_BAD_REQUEST,r)),V();return}R.send(p||null)})},Tw=(r,a)=>{if(r=r?r.filter(Boolean):[],!a&&!r.length)return;const s=new AbortController;let l=!1;const c=function(g){if(!l){l=!0,h();const _=g instanceof Error?g:this.reason;s.abort(_ instanceof Ce?_:new So(_ instanceof Error?_.message:_))}};let p=a&&setTimeout(()=>{p=null,c(new Ce(`timeout of ${a}ms exceeded`,Ce.ETIMEDOUT))},a);const h=()=>{r&&(p&&clearTimeout(p),p=null,r.forEach(g=>{g.unsubscribe?g.unsubscribe(c):g.removeEventListener("abort",c)}),r=null)};r.forEach(g=>{if(!l){if(g.aborted){c.call(g);return}g.addEventListener("abort",c,{once:!0})}});const{signal:f}=s;return f.unsubscribe=()=>D.asap(h),f},Dw=function*(r,a){let s=r.byteLength;if(s<a){yield r;return}let l=0,c;for(;l<s;)c=l+a,yield r.slice(l,c),l=c},Fw=async function*(r,a){for await(const s of Lw(r))yield*Dw(s,a)},Lw=async function*(r){if(r[Symbol.asyncIterator]){yield*r;return}const a=r.getReader();try{for(;;){const{done:s,value:l}=await a.read();if(s)break;yield l}}finally{await a.cancel()}},_x=(r,a,s,l)=>{const c=Fw(r,a);let p=0,h,f=g=>{h||(h=!0,l&&l(g))};return new ReadableStream({async pull(g){try{const{done:_,value:b}=await c.next();if(_){f(),g.close();return}let k=b.byteLength;if(s){let C=p+=k;s(C)}g.enqueue(new Uint8Array(b))}catch(_){throw f(_),_}},cancel(g){return f(g),c.return()}},{highWaterMark:2})},kx=r=>r>=48&&r<=57||r>=65&&r<=70||r>=97&&r<=102,s1=(r,a,s)=>a+2<s&&kx(r.charCodeAt(a+1))&&kx(r.charCodeAt(a+2)),Sx=r=>r<=57?r-48:(r&223)-55,Ow=r=>r>=65&&r<=90||r>=97&&r<=122||r>=48&&r<=57||r===43||r===47||r===45||r===95,Iw=r=>r===9||r===10||r===12||r===13||r===32,Bw=r=>{const a=Math.floor(r/4),s=r%4;return a*3+(s===2?1:s===3?2:0)},qw=r=>{const a=r.length;let s=0;return a>0&&r.charCodeAt(a-1)===61&&(s++,a>1&&r.charCodeAt(a-2)===61&&s++),Math.floor((a-s)*3/4)},Uw=r=>{const a=r.length;let s=0,l=0,c=!1;for(let p=0;p<a;p++){let h=r.charCodeAt(p);if(h===37&&s1(r,p,a)&&(h=Sx(r.charCodeAt(p+1))*16+Sx(r.charCodeAt(p+2)),p+=2),!Iw(h)){if(h===61){l++;continue}if(!Ow(h)||l>0){c=!0;continue}s++}}return c||l>2||l>0&&(s+l)%4!==0||s%4===1?qw(r):Bw(s)},Hw=(r,a)=>{if(!r||typeof r!="string"||!r.startsWith("data:"))return 0;const s=r.indexOf(",");if(s<0)return 0;const l=r.slice(5,s),c=r.slice(s+1);if(/;base64/i.test(l))return a(c);let h=0;for(let f=0,g=c.length;f<g;f++){const _=c.charCodeAt(f);if(_===37&&s1(c,f,g))h+=1,f+=2;else if(_<128)h+=1;else if(_<2048)h+=2;else if(_>=55296&&_<=56319&&f+1<g){const b=c.charCodeAt(f+1);b>=56320&&b<=57343?(h+=4,f++):h+=3}else h+=3}return h};function Vw(r){const a=typeof r=="string"?r.indexOf("#"):-1;return Hw(a===-1?r:r.slice(0,a),Uw)}const df="1.20.0",Cx=64*1024,Ww={cache:"default",redirect:"follow",referrer:"about:client",referrerPolicy:"",mode:"cors",integrity:"",keepalive:!1,priority:"auto",window:null},{isFunction:zl}=D,Gw=r=>encodeURIComponent(r).replace(/%([0-9A-F]{2})/gi,(a,s)=>String.fromCharCode(parseInt(s,16))),Ex=r=>{if(!D.isString(r))return r;try{return decodeURIComponent(r)}catch{return r}},$x=(r,...a)=>{try{return!!r(...a)}catch{return!1}},Qw=r=>{const a=r.indexOf("://");let s=r;return a!==-1&&(s=s.slice(a+3)),s.includes("@")||s.includes(":")},Kw=r=>{const a=D.global!==void 0&&D.global!==null?D.global:globalThis,{ReadableStream:s,TextEncoder:l}=a;r=D.merge.call({skipUndefined:!0},{Request:a.Request,Response:a.Response},r);const{fetch:c,Request:p,Response:h}=r,f=c?zl(c):typeof fetch=="function",g=zl(p),_=zl(h);if(!f)return!1;const b=f&&zl(s),k=f&&(typeof l=="function"?(R=>j=>R.encode(j))(new l):async R=>new Uint8Array(await new p(R).arrayBuffer())),C=g&&b&&$x(()=>{let R=!1;const j=new p(or.origin,{body:new s,method:"POST",get duplex(){return R=!0,"half"}}),T=j.headers.has("Content-Type");return j.body!=null&&j.body.cancel(),R&&!T}),N=_&&b&&$x(()=>D.isReadableStream(new h("").body)),O={stream:N&&(R=>R.body)};f&&["text","arrayBuffer","blob","formData","stream"].forEach(R=>{!O[R]&&(O[R]=(j,T)=>{let F=j&&j[R];if(F)return F.call(j);throw new Ce(`Response type '${R}' is not supported`,Ce.ERR_NOT_SUPPORT,T)})});const $=async R=>{if(R==null)return 0;if(D.isBlob(R))return R.size;if(D.isSpecCompliantForm(R))return(await new p(or.origin,{method:"POST",body:R}).arrayBuffer()).byteLength;if(D.isArrayBufferView(R)||D.isArrayBuffer(R))return R.byteLength;if(D.isURLSearchParams(R)&&(R=R+""),D.isString(R))return(await k(R)).byteLength},V=async(R,j)=>{const T=D.toFiniteNumber(R.getContentLength());return T??$(j)};return async R=>{let{url:j,method:T,data:F,signal:ne,cancelToken:X,timeout:L,onDownloadProgress:oe,onUploadProgress:S,responseType:y,headers:q,withCredentials:de="same-origin",fetchOptions:be,maxContentLength:ke,maxBodyLength:ze,maxRedirects:Q}=i1(R);const ge=D.isNumber(ke)&&ke>-1,le=D.isNumber(ze)&&ze>-1,xe=ve=>D.hasOwnProp(R,ve)?R[ve]:void 0;let H=c||fetch;y=y?(y+"").toLowerCase():"text";let z=Tw([ne,X&&X.toAbortSignal()],L),w=null;const re=z&&z.unsubscribe&&(()=>{z.unsubscribe()});let ae,M=null;const se=()=>new Ce("Request body larger than maxBodyLength limit",Ce.ERR_BAD_REQUEST,R,w);try{let ve;const je=xe("auth");if(je){const Le=D.getSafeProp(je,"username")||"",et=D.getSafeProp(je,"password")||"";ve={username:Le,password:et}}if(Qw(j)){const Le=new URL(j,or.origin);if(!ve&&(Le.username||Le.password)){const et=Ex(Le.username),ie=Ex(Le.password);ve={username:et,password:ie}}(Le.username||Le.password)&&(Le.username="",Le.password="",j=Le.href)}if(ve&&(q.delete("authorization"),q.set("Authorization","Basic "+btoa(Gw((ve.username||"")+":"+(ve.password||""))))),ge&&typeof j=="string"&&j.startsWith("data:")&&Vw(j)>ke)throw new Ce("maxContentLength size of "+ke+" exceeded",Ce.ERR_BAD_RESPONSE,R,w);if(le&&T!=="get"&&T!=="head"){const Le=await $(F);if(typeof Le=="number"&&isFinite(Le)&&(ae=Le,Le>ze))throw se()}const U=le&&(D.isReadableStream(F)||D.isStream(F)),pe=(Le,et,ie)=>_x(Le,Cx,He=>{if(le&&He>ze)throw M=se();et&&et(He)},ie);if(C&&T!=="get"&&T!=="head"&&(S||U)){if(ae=ae??await V(q,F),ae!==0||U){let Le=new p(j,{method:"POST",body:F,duplex:"half"}),et;if(D.isFormData(F)&&(et=Le.headers.get("content-type"))&&q.setContentType(et),Le.body){const[ie,He]=S&&yx(ae,fc(jx(S)))||[];F=pe(Le.body,ie,He)}}}else if(U&&!g&&b&&T!=="get"&&T!=="head")F=pe(F);else if(U&&g&&!C&&T!=="get"&&T!=="head")throw new Ce("Stream request bodies are not supported by the current fetch implementation",Ce.ERR_NOT_SUPPORT,R,w);D.isString(de)||(de=de?"include":"omit");const ot=g&&"credentials"in p.prototype;if(D.isFormData(F)){const Le=q.getContentType();Le&&/^multipart\/form-data/i.test(Le)&&!/boundary=/i.test(Le)&&q.delete("content-type")}q.set("User-Agent","axios/"+df,!1);const st=be==null?be:Object.assign(Object.create(null),be);st&&(delete st.body,delete st.headers,delete st.method,delete st.signal,delete st.duplex,delete st.credentials);const ft=Object.assign(Object.create(null),st,{signal:z,method:T.toUpperCase(),headers:Vv(q.normalize()),body:F,duplex:"half",credentials:ot?de:void 0});g&&(D.forEach(Ww,(Le,et)=>{ft[et]===void 0&&(ft[et]=Le)}),ft.signal===void 0&&(ft.signal=null),ft.body===void 0&&(ft.body=null)),Q===0&&(ft.redirect="manual",st&&(st.redirect="manual")),w=g&&new p(j,ft);let at=await(g?H(w,st):H(j,ft));const lr=_r.from(at.headers);if(ge){const Le=D.toFiniteNumber(lr.getContentLength());if(Le!=null&&Le>ke)throw new Ce("maxContentLength size of "+ke+" exceeded",Ce.ERR_BAD_RESPONSE,R,w)}const Et=N&&(y==="stream"||y==="response");if(N&&at.body&&(oe||ge||Et&&re)){const Le={};["status","statusText","headers"].forEach(Vt=>{Le[Vt]=at[Vt]});const et=D.toFiniteNumber(lr.getContentLength()),[ie,He]=oe&&yx(et,fc(jx(oe),!0))||[];let Pt=0;const Kt=Vt=>{if(ge&&(Pt=Vt,Pt>ke))throw new Ce("maxContentLength size of "+ke+" exceeded",Ce.ERR_BAD_RESPONSE,R,w);ie&&ie(Vt)};at=new h(_x(at.body,Cx,Kt,()=>{He&&He(),re&&re()}),Le)}y=y||"text";let bt=await O[D.findKey(O,y)||"text"](at,R);if(ge&&!N&&!Et){let Le;if(bt!=null&&(typeof bt.byteLength=="number"?Le=bt.byteLength:typeof bt.size=="number"?Le=bt.size:typeof bt=="string"&&(Le=typeof l=="function"?new l().encode(bt).byteLength:bt.length)),typeof Le=="number"&&Le>ke)throw new Ce("maxContentLength size of "+ke+" exceeded",Ce.ERR_BAD_RESPONSE,R,w)}return!Et&&re&&re(),await new Promise((Le,et)=>{r1(Le,et,{data:bt,headers:_r.from(at.headers),status:at.status,statusText:at.statusText,config:R,request:w})})}catch(ve){if(re&&re(),z&&z.aborted&&z.reason instanceof Ce){const je=z.reason;throw je.config=R,w&&(je.request=w),ve!==je&&Object.defineProperty(je,"cause",{__proto__:null,value:ve,writable:!0,enumerable:!1,configurable:!0}),je}if(M)throw w&&!M.request&&(M.request=w),M;if(ve instanceof Ce)throw w&&!ve.request&&(ve.request=w),ve;if(ve&&ve.name==="TypeError"&&/Load failed|fetch/i.test(ve.message)){const je=new Ce("Network Error",Ce.ERR_NETWORK,R,w,ve&&ve.response);throw Object.defineProperty(je,"cause",{__proto__:null,value:ve.cause||ve,writable:!0,enumerable:!1,configurable:!0}),je}throw Ce.from(ve,ve&&ve.code,R,w,ve&&ve.response)}}},Yw=new Map,o1=r=>{let a=r&&r.env||{};const{fetch:s,Request:l,Response:c}=a,p=[l,c,s];let h=p.length,f=h,g,_,b=Yw;for(;f--;)g=p[f],_=b.get(g),_===void 0&&b.set(g,_=f?new Map:Kw(a)),b=_;return _};o1();const uf={http:nw,xhr:Aw,fetch:{get:o1}};D.forEach(uf,(r,a)=>{if(r){try{Object.defineProperty(r,"name",{__proto__:null,value:a})}catch{}Object.defineProperty(r,"adapterName",{__proto__:null,value:a})}});const Rx=r=>`- ${r}`,Jw=r=>D.isFunction(r)||r===null||r===!1;function Xw(r,a){r=D.isArray(r)?r:[r];const{length:s}=r;let l,c;const p={};for(let h=0;h<s;h++){l=r[h];let f;if(c=l,!Jw(l)&&(c=uf[(f=String(l)).toLowerCase()],c===void 0))throw new Ce(`Unknown adapter '${f}'`);if(c&&(D.isFunction(c)||(c=c.get(a))))break;p[f||"#"+h]=c}if(!c){const h=Object.entries(p).map(([g,_])=>`adapter ${g} `+(_===!1?"is not supported by the environment":"is not available in the build"));let f=s?h.length>1?`since :
`+h.map(Rx).join(`
`):" "+Rx(h[0]):"as no adapter specified";throw new Ce("There is no suitable adapter to dispatch the request "+f,Ce.ERR_NOT_SUPPORT)}return c}const l1={getAdapter:Xw,adapters:uf};function Nu(r){if(r.cancelToken&&r.cancelToken.throwIfRequested(),r.signal&&r.signal.aborted)throw new So(null,r)}function Mu(r){const a=D.toSafeFlatObject(r);return Nu(a),a.headers=_r.from(D.getSafeProp(a,"headers")),a.data=Pu.call(a,a.transformRequest),["post","put","patch"].indexOf(a.method)!==-1&&a.headers.setContentType("application/x-www-form-urlencoded",!1),l1.getAdapter(a.adapter||ko.adapter,a)(a).then(function(c){Nu(a),a.response=c;try{c.data=Pu.call(a,a.transformResponse,c)}finally{delete a.response}return c.headers=_r.from(c.headers),c},function(c){if(!t1(c)&&(Nu(a),c&&c.response)){a.response=c.response;try{c.response.data=Pu.call(a,a.transformResponse,c.response)}finally{delete a.response}c.response.headers=_r.from(c.response.headers)}return Promise.reject(c)})}const Nc={};["object","boolean","number","function","string","symbol"].forEach((r,a)=>{Nc[r]=function(l){return typeof l===r||"a"+(a<1?"n ":" ")+r}});const Px={};Nc.transitional=function(a,s,l){function c(p,h){return"[Axios v"+df+"] Transitional option '"+p+"'"+h+(l?". "+l:"")}return(p,h,f)=>{if(a===!1)throw new Ce(c(h," has been removed"+(s?" in "+s:"")),Ce.ERR_DEPRECATED);return s&&!Px[h]&&(Px[h]=!0,console.warn(c(h," has been deprecated since v"+s+" and will be removed in the near future"))),a?a(p,h,f):!0}};Nc.spelling=function(a){return(s,l)=>(console.warn(`${l} is likely a misspelling of ${a}`),!0)};function Zw(r,a,s){if(typeof r!="object"||r===null)throw new Ce("options must be an object",Ce.ERR_BAD_OPTION_VALUE);const l=Object.keys(r);let c=l.length;for(;c-- >0;){const p=l[c],h=Object.prototype.hasOwnProperty.call(a,p)?a[p]:void 0;if(h){const f=r[p],g=f===void 0||h(f,p,r);if(g!==!0)throw new Ce("option "+p+" must be "+g,Ce.ERR_BAD_OPTION_VALUE);continue}if(s!==!0)throw new Ce("Unknown option "+p,Ce.ERR_BAD_OPTION)}}const tc={assertOptions:Zw,validators:Nc},yr=tc.validators;let ci=class{constructor(a){this.defaults=a||{},this.interceptors={request:new gx,response:new gx}}async request(a,s){try{return await this._request(a,s)}catch(l){if(l instanceof Error)try{let c={};Error.captureStackTrace?Error.captureStackTrace(c):c=new Error;const p=c.stack;let h="";if(typeof p=="string"){const f=p.indexOf(`
`);h=f===-1?"":p.slice(f+1)}if(!l.stack)l.stack=h;else if(h){const f=h.indexOf(`
`),g=f===-1?-1:h.indexOf(`
`,f+1),_=g===-1?"":h.slice(g+1);String(l.stack).endsWith(_)||(l.stack+=`
`+h)}}catch{}throw l}}_request(a,s){typeof a=="string"?(s=s||{},s.url=a):s=a||{},s=mi(this.defaults,s);const{transitional:l,paramsSerializer:c,headers:p}=s;l!==void 0&&tc.assertOptions(l,{silentJSONParsing:yr.transitional(yr.boolean),forcedJSONParsing:yr.transitional(yr.boolean),clarifyTimeoutError:yr.transitional(yr.boolean),legacyInterceptorReqResOrdering:yr.transitional(yr.boolean),advertiseZstdAcceptEncoding:yr.transitional(yr.boolean),validateStatusUndefinedResolves:yr.transitional(yr.boolean)},!1),c!=null&&(D.isFunction(c)?s.paramsSerializer={serialize:c}:tc.assertOptions(c,{encode:yr.function,serialize:yr.function},!0)),s.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?s.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:s.allowAbsoluteUrls=!0),tc.assertOptions(s,{baseUrl:yr.spelling("baseURL"),withXsrfToken:yr.spelling("withXSRFToken")},!0),s.method=(D.getSafeProp(s,"method")||D.getSafeProp(this.defaults,"method")||"get").toLowerCase();let h=p&&D.merge(p.common,p[s.method]);p&&D.forEach(e1.concat("common"),O=>{delete p[O]}),s.headers=_r.concat(h,p);const f=[];let g=!0;this.interceptors.request.forEach(function($){if(typeof $.runWhen=="function"&&$.runWhen(s)===!1)return;g=g&&$.synchronous;const V=s.transitional||lf;V&&V.legacyInterceptorReqResOrdering?f.unshift($.fulfilled,$.rejected):f.push($.fulfilled,$.rejected)});const _=[];this.interceptors.response.forEach(function($){_.push($.fulfilled,$.rejected)});let b,k=0,C;if(!g){const O=[Mu.bind(this),void 0];for(O.unshift(...f),O.push(..._),C=O.length,b=Promise.resolve(s);k<C;)b=b.then(O[k++],O[k++]);return b}C=f.length;let N=s;for(;k<C;){const O=f[k++],$=f[k++];try{N=O?O(N):N}catch(V){if(!$){b=Promise.reject(V);break}try{const R=$.call(this,V);D.isThenable(R)&&(b=Promise.resolve(R).then(()=>Mu.call(this,N)))}catch(R){b=Promise.reject(R)}break}}if(!b)try{b=Mu.call(this,N)}catch(O){b=Promise.reject(O)}for(k=0,C=_.length;k<C;)b=b.then(_[k++],_[k++]);return b}getUri(a){a=mi(this.defaults,a);const s=a1(a.baseURL,a.url,a.allowAbsoluteUrls,a);return Yv(s,a.params,a.paramsSerializer)}};D.forEach(["delete","get","head","options"],function(a){ci.prototype[a]=function(s,l){return this.request(mi(l||{},{method:a,url:s,data:l&&D.hasOwnProp(l,"data")?l.data:void 0}))}});D.forEach(["post","put","patch","query"],function(a){function s(l){return function(p,h,f){return this.request(mi(f||{},{method:a,headers:l?{"Content-Type":"multipart/form-data"}:{},url:p,data:h}))}}ci.prototype[a]=s(),a!=="query"&&(ci.prototype[a+"Form"]=s(!0))});let e_=class c1{constructor(a){if(typeof a!="function")throw new TypeError("executor must be a function.");let s;this.promise=new Promise(function(p){s=p});const l=this;this.promise.then(c=>{if(!l._listeners)return;let p=l._listeners.length;for(;p-- >0;)l._listeners[p](c);l._listeners=null}),this.promise.then=c=>{let p;const h=new Promise(f=>{l.subscribe(f),p=f}).then(c);return h.cancel=function(){l.unsubscribe(p)},h},a(function(p,h,f){l.reason||(l.reason=new So(p,h,f),s(l.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(a){if(this.reason){a(this.reason);return}this._listeners?this._listeners.push(a):this._listeners=[a]}unsubscribe(a){if(!this._listeners)return;const s=this._listeners.indexOf(a);s!==-1&&this._listeners.splice(s,1)}toAbortSignal(){const a=new AbortController,s=l=>{a.abort(l)};return this.subscribe(s),a.signal.unsubscribe=()=>this.unsubscribe(s),a.signal}static source(){let a;return{token:new c1(function(c){a=c}),cancel:a}}};function t_(r){return function(s){return r.apply(null,s)}}function r_(r){return D.isObject(r)&&r.isAxiosError===!0}const rc={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,ContentTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,UnprocessableContent:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerReturnsAnUnknownError:520,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(rc).forEach(([r,a])=>{rc[a]===void 0&&(rc[a]=r)});function d1(r){const a=new ci(r),s=Av(ci.prototype.request,a);return D.extend(s,ci.prototype,a,{allOwnKeys:!0}),D.extend(s,a,null,{allOwnKeys:!0}),s.create=function(c){return d1(mi(r,c))},s}const jt=d1(ko);jt.Axios=ci;jt.CanceledError=So;jt.CancelToken=e_;jt.isCancel=t1;jt.VERSION=df;jt.toFormData=zc;jt.AxiosError=Ce;jt.Cancel=jt.CanceledError;jt.all=function(a){return Promise.all(a)};jt.spread=t_;jt.isAxiosError=r_;jt.mergeConfig=mi;jt.AxiosHeaders=_r;jt.formToJSON=r=>Zv(D.isHTMLForm(r)?new FormData(r):r);jt.getAdapter=l1.getAdapter;jt.HttpStatusCode=rc;jt.default=jt;const{Axios:e6,AxiosError:t6,CanceledError:r6,isCancel:n6,CancelToken:a6,VERSION:i6,all:s6,Cancel:o6,isAxiosError:l6,spread:c6,toFormData:d6,AxiosHeaders:u6,HttpStatusCode:p6,formToJSON:f6,getAdapter:h6,mergeConfig:m6,create:x6}=jt,Ee=jt.create({baseURL:"http://localhost:3333/api",headers:{"Content-Type":"application/json"},withCredentials:!0});function u1(r){const a=r;return a.user?a.user:a.data&&typeof a.data=="object"&&"user"in a.data&&a.data.user?a.data.user:a.data&&typeof a.data=="object"&&"email"in a.data?a.data:r}async function n_(r){return(await Ee.post("/auth/register",r)).data.data}async function a_(r){const a=await Ee.post("/auth/login",r);return u1(a.data)}async function i_(){const r=await Ee.get("/auth/me");return u1(r.data)}async function s_(){await Ee.post("/auth/logout")}async function o_(){const a=(await Ee.get("/subscriptions/plans")).data;return a&&typeof a=="object"&&"data"in a&&a.data?a.data:a}async function l_(r,a=[]){var l;const s=await Ee.post("/assistant/chat",{message:r,history:a});return((l=s.data.data)==null?void 0:l.message)??s.data.message??""}async function c_(r={}){return(await Ee.get("/study-resources",{params:r})).data}async function d_(){return(await Ee.get("/study-resources/areas")).data.data}async function u_(r={}){return(await Ee.get("/english-study/sessions",{params:r})).data}async function p_(r){return(await Ee.post("/english-study/sessions",r)).data.data}async function zx(r,a){return(await Ee.patch(`/english-study/sessions/${encodeURIComponent(String(r))}`,a)).data.data}async function f_(r){await Ee.delete(`/english-study/sessions/${encodeURIComponent(String(r))}`)}async function h_(){return(await Ee.get("/english-study/goal")).data.data}async function m_(r){return(await Ee.put("/english-study/goal",{daily_goal_minutes:r})).data.data}async function x_(r={}){return(await Ee.get("/english-study/summary",{params:r})).data.data}async function g_(r={}){return(await Ee.get("/expenses",{params:r})).data}async function v_(){return(await Ee.get("/expenses/categories")).data.data}async function y_(r){return(await Ee.get("/expenses/summary",{params:{month:r}})).data.data}function On(r){return typeof r=="object"&&r!==null}function Na(r){return r===null||typeof r=="number"&&Number.isFinite(r)}function Au(r){return On(r)&&Na(r.liters)&&Na(r.cost)&&Na(r.cost_per_km)}function j_(r){if(!On(r)||!On(r.vehicle)||!On(r.fuel_prices)||!On(r.comparison)||!On(r.estimates))return!1;const{comparison:a,estimates:s,fuel_prices:l,vehicle:c}=r;return typeof c.model=="string"&&(c.type==="carro"||c.type==="moto")&&(r.analysis_method==="consumo_informado"||r.analysis_method==="regra_dos_70_por_cento")&&(r.selected_fuel==="gasolina"||r.selected_fuel==="alcool")&&typeof l.gasolina=="number"&&typeof l.alcool=="number"&&Na(a.ethanol_price_as_percentage_of_gasoline)&&Na(a.ethanol_break_even_price)&&(a.recommended_fuel==="gasolina"||a.recommended_fuel==="alcool")&&typeof a.selected_fuel_is_cheaper=="boolean"&&Na(a.estimated_savings_for_distance)&&Na(s.distance_km)&&Au(s.gasolina)&&Au(s.alcool)&&Au(s.selected_fuel_cost)&&Array.isArray(r.notes)&&r.notes.every(p=>typeof p=="string")}function b_(r){if(!On(r))return["resposta deve ser um objeto"];const a=[],s=(_,b,k)=>{const C=_[b];if(!On(C)){a.push(`${k}: ausente ou não é um objeto`);return}return C},l=(_,b,k)=>{typeof _[b]!="string"&&a.push(`${k}: ausente ou inválido`)},c=(_,b,k)=>{Na(_[b])||a.push(`${k}: ausente ou deve ser número ou null`)},p=s(r,"vehicle","vehicle");p&&(l(p,"model","vehicle.model"),p.type!=="carro"&&p.type!=="moto"&&a.push('vehicle.type: ausente ou deve ser "carro" ou "moto"')),r.analysis_method!=="consumo_informado"&&r.analysis_method!=="regra_dos_70_por_cento"&&a.push("analysis_method: ausente ou inválido"),r.selected_fuel!=="gasolina"&&r.selected_fuel!=="alcool"&&a.push("selected_fuel: ausente ou inválido");const h=s(r,"fuel_prices","fuel_prices");h&&(typeof h.gasolina!="number"&&a.push("fuel_prices.gasolina: ausente ou inválido"),typeof h.alcool!="number"&&a.push("fuel_prices.alcool: ausente ou inválido"));const f=s(r,"comparison","comparison");f&&(c(f,"ethanol_price_as_percentage_of_gasoline","comparison.ethanol_price_as_percentage_of_gasoline"),c(f,"ethanol_break_even_price","comparison.ethanol_break_even_price"),f.recommended_fuel!=="gasolina"&&f.recommended_fuel!=="alcool"&&a.push("comparison.recommended_fuel: ausente ou inválido"),typeof f.selected_fuel_is_cheaper!="boolean"&&a.push("comparison.selected_fuel_is_cheaper: ausente ou inválido"),c(f,"estimated_savings_for_distance","comparison.estimated_savings_for_distance"));const g=s(r,"estimates","estimates");if(g){c(g,"distance_km","estimates.distance_km");for(const _ of["gasolina","alcool","selected_fuel_cost"]){const b=s(g,_,`estimates.${_}`);b&&(c(b,"liters",`estimates.${_}.liters`),c(b,"cost",`estimates.${_}.cost`),c(b,"cost_per_km",`estimates.${_}.cost_per_km`))}}return r.notes!==void 0&&(!Array.isArray(r.notes)||!r.notes.every(_=>typeof _=="string"))&&a.push("notes: formato inválido; esperado uma lista de textos"),a}async function w_(r){const s=(await Ee.post("/expenses/fuel-calculator",r)).data,l=On(s)&&"data"in s?s.data:s,c=On(l)&&l.notes===void 0?{...l,notes:[]}:l;if(!j_(c)){const p=b_(c);throw new Error(`Resposta do calculador incompleta. Campos ausentes ou inválidos: ${p.join("; ")||"formato inesperado"}.`)}return c}async function __(r){return(await Ee.post("/expenses",r)).data.data}async function Nx(r,a){return(await Ee.patch(`/expenses/${encodeURIComponent(String(r))}`,a)).data.data}async function k_(r){await Ee.delete(`/expenses/${encodeURIComponent(String(r))}`)}async function S_(){return(await Ee.get("/dividends/types")).data.data}async function Nl(r={}){return(await Ee.get("/dividends",{params:r})).data}async function C_(){return(await Ee.get("/dividends/portfolio")).data.data}const E_={otimo:!0,bom:!0,neutro:!0,atencao:!0,evitar:!0};function p1(r){return r>=80?"otimo":r>=65?"bom":r>=45?"neutro":r>=30?"atencao":"evitar"}function $_(r,a){const s=Math.min(100,Math.max(0,Number(r.score)||0)),l=String(r.rating??""),c=r.ticker?String(r.ticker):void 0,p=String(r.label??c??r.id??`Item ${a+1}`),h=Array.isArray(r.top_assets)?r.top_assets.map(String):void 0;return{id:String(r.id??c??`${p}-${a}`),label:p,ticker:c,class_id:r.id&&!c?String(r.id):r.asset_class?String(r.asset_class):void 0,score:s,rating:l in E_?l:p1(s),reasons:Array.isArray(r.reasons)?r.reasons.map(String):[],top_assets:h,in_portfolio:r.in_portfolio===!0,analysis_type:r.analysis_type==="fii_fundamentals"||r.analysis_type==="equity_market_history"||r.analysis_type==="short_term_market"?r.analysis_type:void 0,analysis_factors:Array.isArray(r.analysis_factors)?r.analysis_factors.map(String):void 0}}function Tu(r){return Array.isArray(r)?r.map((a,s)=>$_(a??{},s)):[]}async function f1(r){const s=(await Ee.get("/market/opportunities",{params:r?{perfil:r}:void 0,timeout:6e4})).data,l=s.suggested_allocation_pct??{};return{profile:s.profile?String(s.profile):void 0,generated_at:s.generated_at?String(s.generated_at):void 0,disclaimer:s.disclaimer?String(s.disclaimer):void 0,warnings:Array.isArray(s.warnings)?s.warnings.map(String):[],classes:Tu(s.classes),assets:Tu(s.ranking),portfolio:Tu(s.portfolio),suggested_allocation:Object.entries(l).map(([c,p])=>({id:c,percent:Number(p)||0}))}}async function R_(r){return(await Ee.get("/market/backtest",{params:{valor:r.valor,anos:r.anos,aporte_mensal:r.aporte_mensal,reajustar_aporte_ipca:r.reajustar_aporte_ipca,perfil:r.perfil},timeout:9e4})).data}async function P_(r){return(await Ee.get("/market/fiis/compare",{params:{...r.tickers.length?{tickers:r.tickers.join(",")}:{},anos:r.anos,valor:r.valor},timeout:12e4})).data}function h1(r){return{perfil:r.perfil,anos:r.anos,prazo_meses:r.prazo_meses,cdi_percent:r.cdi_percent,lci_percent:r.lci_percent,...r.meta_renda_fixa!==void 0?{meta_renda_fixa:r.meta_renda_fixa}:{}}}async function m1(r){return(await Ee.get("/market/portfolio/fii-analysis",{params:h1(r),timeout:12e4})).data}async function z_(r,a){return(await Ee.get("/market/portfolio/switch-simulation",{params:{...h1(r),vender:a.map(l=>`${l.ticker}:${l.sell_pct}`).join(","),meses:"12,24,60"},timeout:12e4})).data}async function N_(){return(await Ee.post("/dividends/refresh-prices",void 0,{timeout:6e4})).data.data}async function M_(r,a,s){return(await Ee.get("/dividends/projection",{params:{from:r,months:a,cdi_rate:s}})).data.data}async function A_(){return(await Ee.get("/dividends/cdi-rate")).data.data}async function T_(r){return(await Ee.post("/dividends",r)).data.data}async function Du(r,a){return(await Ee.patch(`/dividends/${encodeURIComponent(String(r))}`,a)).data.data}async function D_(r){await Ee.delete(`/dividends/${encodeURIComponent(String(r))}`)}async function F_(r){const s=(await Ee.get(`/study-resources/${encodeURIComponent(String(r))}`)).data;return s&&typeof s=="object"&&"data"in s&&s.data?s.data:s}async function L_(r){await Ee.post("/study-resources",r)}async function O_(r,a){await Ee.patch(`/study-resources/${encodeURIComponent(String(r))}`,a)}async function I_(r){await Ee.delete(`/study-resources/${encodeURIComponent(String(r))}`)}async function B_(){var l;const r=await Ee.get("/finances/summary"),a=((l=r.data)==null?void 0:l.data)??r.data,s=Number((a==null?void 0:a.total_patrimony)??(a==null?void 0:a.total_balance)??(a==null?void 0:a.total)??0);return{total_balance:s,account_count:Number((a==null?void 0:a.account_count)??(a==null?void 0:a.accounts_count)??(a==null?void 0:a.accountCount)??(a==null?void 0:a.count)??0),total_patrimony:s,exchange_rate:(a==null?void 0:a.exchange_rate)==null?null:Number(a.exchange_rate),exchange_rate_date:(a==null?void 0:a.exchange_rate_date)??(a==null?void 0:a.rate_date)??null,asset_count:Number((a==null?void 0:a.asset_count)??(a==null?void 0:a.assetCount)??0),total_assets:Number((a==null?void 0:a.total_assets)??(a==null?void 0:a.assets_total_brl)??0),total_debt:Number((a==null?void 0:a.total_debt)??(a==null?void 0:a.liabilities_total_brl)??0),total_liabilities:Number((a==null?void 0:a.total_liabilities)??(a==null?void 0:a.liabilities_total_brl)??(a==null?void 0:a.total_debt)??0),monthly_payments:Number((a==null?void 0:a.monthly_payments)??(a==null?void 0:a.monthly_liability_payments_brl)??(a==null?void 0:a.monthly_payment_total)??0),assets_total_brl:Number((a==null?void 0:a.assets_total_brl)??(a==null?void 0:a.total_assets)??0),liabilities_total_brl:Number((a==null?void 0:a.liabilities_total_brl)??(a==null?void 0:a.total_liabilities)??(a==null?void 0:a.total_debt)??0),monthly_liability_payments_brl:Number((a==null?void 0:a.monthly_liability_payments_brl)??(a==null?void 0:a.monthly_payments)??0),investment_portfolio_invested_brl:Number((a==null?void 0:a.investment_portfolio_invested_brl)??0),investment_portfolio_value_brl:Number((a==null?void 0:a.investment_portfolio_value_brl)??0),investment_portfolio_total_value_brl:Number((a==null?void 0:a.investment_portfolio_total_value_brl)??(a==null?void 0:a.investment_portfolio_value_brl)??0),investment_portfolio_profit_loss_brl:Number((a==null?void 0:a.investment_portfolio_profit_loss_brl)??0)}}async function q_(){const r=await Ee.get("/finances/accounts");return(Array.isArray(r.data)?r.data:r.data.data??[]).map(s=>({...s,currency:s.currency??"BRL",balance:Number(s.balance)||0,balance_brl:Number(s.balance_brl??s.balance)||0,is_active:s.is_active??!0}))}async function U_(r){const a=await Ee.post("/finances/accounts",r);return"data"in a.data&&a.data.data?a.data.data:a.data}async function H_(r,a){const s=await Ee.patch(`/finances/accounts/${encodeURIComponent(String(r))}`,a);return"data"in s.data&&s.data.data?s.data.data:s.data}async function V_(r){await Ee.delete(`/finances/accounts/${encodeURIComponent(String(r))}`)}function pf(r){return{...r,currency:r.currency??"BRL",estimated_value:Number(r.estimated_value)||0,monthly_rent:Number(r.monthly_rent)||0,value_brl:r.value_brl==null?void 0:Number(r.value_brl),estimated_value_brl:r.estimated_value_brl==null?void 0:Number(r.estimated_value_brl),debt_brl:r.debt_brl==null?void 0:Number(r.debt_brl),net_value_brl:r.net_value_brl==null?void 0:Number(r.net_value_brl)}}async function W_(){const r=await Ee.get("/finances/assets");return(Array.isArray(r.data)?r.data:r.data.data??[]).map(pf)}async function G_(r){const a=await Ee.post("/finances/assets",r),s="data"in a.data&&a.data.data?a.data.data:a.data;return pf(s)}async function Q_(r,a){const s=await Ee.patch(`/finances/assets/${encodeURIComponent(String(r))}`,a),l="data"in s.data&&s.data.data?s.data.data:s.data;return pf(l)}async function K_(r){await Ee.delete(`/finances/assets/${encodeURIComponent(String(r))}`)}function ff(r){return{...r,currency:r.currency??"BRL",original_amount:Number(r.original_amount)||0,outstanding_balance:Number(r.outstanding_balance)||0,monthly_payment:Number(r.monthly_payment)||0,value_brl:r.value_brl==null?void 0:Number(r.value_brl),outstanding_balance_brl:r.outstanding_balance_brl==null?void 0:Number(r.outstanding_balance_brl),monthly_payment_brl:r.monthly_payment_brl==null?void 0:Number(r.monthly_payment_brl)}}async function Y_(){const r=await Ee.get("/finances/liabilities");return(Array.isArray(r.data)?r.data:r.data.data??[]).map(ff)}async function J_(r){const a=await Ee.post("/finances/liabilities",r),s="data"in a.data&&a.data.data?a.data.data:a.data;return ff(s)}async function X_(r,a){const s=await Ee.patch(`/finances/liabilities/${encodeURIComponent(String(r))}`,a),l="data"in s.data&&s.data.data?s.data.data:s.data;return ff(l)}async function Z_(r){await Ee.delete(`/finances/liabilities/${encodeURIComponent(String(r))}`)}async function Ui(r=1,a=10){return(await Ee.get("/tasks",{params:{page:r,limit:a}})).data}async function Ws(r){return(await Ee.get("/daily",{params:void 0})).data.data}async function e2(r=1,a=10,s){return(await Ee.get("/daily/history",{params:{page:r,limit:a,...s?{date:s}:{}}})).data}async function t2(r){return(await Ee.get(`/daily/history/${encodeURIComponent(r)}`)).data}async function r2(r=1,a=10,s){return(await Ee.get("/daily/history/week",{params:{page:r,limit:a,...s?{date:s}:{}}})).data}async function n2(r=1,a=10,s){return(await Ee.get("/daily/history/month",{params:{page:r,limit:a,...s?{date:s}:{}}})).data}async function a2(){return(await Ee.get("/objectives")).data.data}async function i2(r){return(await Ee.post("/objectives",r)).data.data}async function s2(r,a){return(await Ee.patch(`/objectives/${encodeURIComponent(String(r))}`,a)).data.data}async function o2(r){await Ee.delete(`/objectives/${encodeURIComponent(String(r))}`)}async function l2(r,a){return(await Ee.post(`/objectives/${encodeURIComponent(String(r))}/steps`,{title:a,status:"pendente"})).data.data}async function c2(r,a,s){const l=await Ee.patch(`/objectives/${encodeURIComponent(String(r))}/steps/${encodeURIComponent(String(a))}`,{status:s});return{...l.data.data,activity:l.data.activity,activities:l.data.activities}}async function d2(r,a){await Ee.delete(`/objectives/${encodeURIComponent(String(r))}/steps/${encodeURIComponent(String(a))}`)}async function u2(r,a=1,s=20){const l={page:a,limit:s};return r.mode==="date"?l.date=r.date:r.mode==="range"&&(l.from=r.from,l.to=r.to),(await Ee.get("/schedule",{params:l})).data}async function p2(r=1,a=20){return(await Ee.get("/schedule/alerts",{params:{page:r,limit:a}})).data}async function f2(r){return(await Ee.post("/schedule",r)).data.data}async function h2(r,a){return(await Ee.patch(`/schedule/${encodeURIComponent(String(r))}`,a)).data.data}async function m2(r){await Ee.delete(`/schedule/${encodeURIComponent(String(r))}`)}async function x2(r){return(await Ee.post("/tasks",r)).data.data}async function g2(r,a){await Ee.patch(`/tasks/${encodeURIComponent(String(r))}`,a)}async function v2(r){await Ee.delete(`/tasks/${r}`)}async function y2(r,a){const s=await Ee.patch(`/daily/items/${encodeURIComponent(String(r))}`,{is_completed:a});return{...s.data.data,activity:s.data.activity}}async function Mx(r){await Ee.patch(`/tasks/${r}/deactivate`)}async function j2(r){await Ee.patch(`/tasks/${r}/activate`)}/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b2=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),x1=(...r)=>r.filter((a,s,l)=>!!a&&a.trim()!==""&&l.indexOf(a)===s).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var w2={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _2=x.forwardRef(({color:r="currentColor",size:a=24,strokeWidth:s=2,absoluteStrokeWidth:l,className:c="",children:p,iconNode:h,...f},g)=>x.createElement("svg",{ref:g,...w2,width:a,height:a,stroke:r,strokeWidth:l?Number(s)*24/Number(a):s,className:x1("lucide",c),...f},[...h.map(([_,b])=>x.createElement(_,b)),...Array.isArray(p)?p:[p]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Se=(r,a)=>{const s=x.forwardRef(({className:l,...c},p)=>x.createElement(_2,{ref:p,iconNode:a,className:x1(`lucide-${b2(r)}`,l),...c}));return s.displayName=`${r}`,s};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fo=Se("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ax=Se("ArchiveRestore",[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h2",key:"tvwodi"}],["path",{d:"M20 8v11a2 2 0 0 1-2 2h-2",key:"1gkqxj"}],["path",{d:"m9 15 3-3 3 3",key:"1pd0qc"}],["path",{d:"M12 12v9",key:"192myk"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k2=Se("Archive",[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"M10 12h4",key:"a56b0p"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hc=Se("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S2=Se("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C2=Se("Ban",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.9 4.9 14.2 14.2",key:"1m5liu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hf=Se("Banknote",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M6 12h.01M18 12h.01",key:"113zkx"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nc=Se("BellRing",[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M22 8c0-2.3-.8-4.3-2-6",key:"5bb3ad"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}],["path",{d:"M4 2C2.8 3.7 2 5.7 2 8",key:"tap9e0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ni=Se("Bell",[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E2=Se("Bold",[["path",{d:"M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8",key:"mg9rjx"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xr=Se("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tx=Se("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $2=Se("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dx=Se("Cake",[["path",{d:"M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8",key:"1w3rig"}],["path",{d:"M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1",key:"n2jgmb"}],["path",{d:"M2 21h20",key:"1nyx9w"}],["path",{d:"M7 8v3",key:"1qtyvj"}],["path",{d:"M12 8v3",key:"hwp4zt"}],["path",{d:"M17 8v3",key:"1i6e5u"}],["path",{d:"M7 4h.01",key:"1bh4kh"}],["path",{d:"M12 4h.01",key:"1ujb9j"}],["path",{d:"M17 4h.01",key:"1upcoc"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const We=Se("CalendarDays",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dp=Se("CalendarRange",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M17 14h-6",key:"bkmgh3"}],["path",{d:"M13 18H7",key:"bb0bb7"}],["path",{d:"M7 14h.01",key:"1qa3f1"}],["path",{d:"M17 18h.01",key:"1bdyru"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R2=Se("Car",[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P2=Se("ChartLine",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"m19 9-5 5-4-4-3 3",key:"2osh9i"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const en=Se("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z2=Se("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jo=Se("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rs=Se("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N2=Se("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tn=Se("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M2=Se("CircleHelp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A2=Se("CirclePause",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"10",x2:"10",y1:"15",y2:"9",key:"c1nkhi"}],["line",{x1:"14",x2:"14",y1:"15",y2:"9",key:"h65svq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T2=Se("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hn=Se("Clock3",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16.5 12",key:"1aq6pp"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qi=Se("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mc=Se("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g1=Se("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Co=Se("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D2=Se("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F2=Se("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fp=Se("Flag",[["path",{d:"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z",key:"i9b6wo"}],["line",{x1:"4",x2:"4",y1:"22",y2:"15",key:"1cm3nv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L2=Se("Focus",[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lp=Se("Fuel",[["line",{x1:"3",x2:"15",y1:"22",y2:"22",key:"xegly4"}],["line",{x1:"4",x2:"14",y1:"9",y2:"9",key:"xcnuvu"}],["path",{d:"M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18",key:"16j0yd"}],["path",{d:"M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5",key:"7cu91f"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Op=Se("Gauge",[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O2=Se("Heading2",[["path",{d:"M4 12h8",key:"17cfdx"}],["path",{d:"M4 18V6",key:"1rz3zl"}],["path",{d:"M12 18V6",key:"zqpxq5"}],["path",{d:"M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1",key:"9jr5yi"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I2=Se("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ac=Se("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B2=Se("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q2=Se("Italic",[["line",{x1:"19",x2:"10",y1:"4",y2:"4",key:"15jd3p"}],["line",{x1:"14",x2:"5",y1:"20",y2:"20",key:"bu0au3"}],["line",{x1:"15",x2:"9",y1:"4",y2:"20",key:"uljnxc"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mf=Se("Landmark",[["line",{x1:"3",x2:"21",y1:"22",y2:"22",key:"j8o0r"}],["line",{x1:"6",x2:"6",y1:"18",y2:"11",key:"10tf0k"}],["line",{x1:"10",x2:"10",y1:"18",y2:"11",key:"54lgf6"}],["line",{x1:"14",x2:"14",y1:"18",y2:"11",key:"380y"}],["line",{x1:"18",x2:"18",y1:"18",y2:"11",key:"1kevvc"}],["polygon",{points:"12 2 20 7 4 7",key:"jkujk7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ip=Se("Languages",[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v1=Se("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const er=Se("ListChecks",[["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"m3 7 2 2 4-4",key:"1obspn"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U2=Se("ListOrdered",[["path",{d:"M10 12h11",key:"6m4ad9"}],["path",{d:"M10 18h11",key:"11hvi2"}],["path",{d:"M10 6h11",key:"c7qv1k"}],["path",{d:"M4 10h2",key:"16xx2s"}],["path",{d:"M4 6h1v4",key:"cnovpq"}],["path",{d:"M6 18H4c0-1 2-2 2-3s-1-1.5-2-1",key:"m9a95d"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H2=Se("List",[["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 18h.01",key:"1tta3j"}],["path",{d:"M3 6h.01",key:"1rqtza"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 18h13",key:"1lx6n3"}],["path",{d:"M8 6h13",key:"ik3vkj"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ze=Se("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V2=Se("LockKeyhole",[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3",key:"1pqi11"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W2=Se("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G2=Se("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q2=Se("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y1=Se("PackageOpen",[["path",{d:"M12 22v-9",key:"x3hkom"}],["path",{d:"M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.655 1.655 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z",key:"2ntwy6"}],["path",{d:"M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13",key:"1pmm1c"}],["path",{d:"M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.636 1.636 0 0 0 1.63 0z",key:"12ttoo"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xc=Se("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rn=Se("Pencil",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ki=Se("PiggyBank",[["path",{d:"M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2V5z",key:"1ivx2i"}],["path",{d:"M2 9v1c0 1.1.9 2 2 2h1",key:"nm575m"}],["path",{d:"M16 11h.01",key:"xkw8gn"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gc=Se("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gt=Se("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K2=Se("PowerOff",[["path",{d:"M18.36 6.64A9 9 0 0 1 20.77 15",key:"dxknvb"}],["path",{d:"M6.16 6.16a9 9 0 1 0 12.68 12.68",key:"1x7qb5"}],["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y2=Se("QrCode",[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vc=Se("Receipt",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",key:"1h4pet"}],["path",{d:"M12 17.5v-11",key:"1jc1ny"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j1=Se("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J2=Se("Repeat",[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eo=Se("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b1=Se("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X2=Se("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fx=Se("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z2=Se("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w1=Se("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bp=Se("SquareCheckBig",[["path",{d:"M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5",key:"1uzm8b"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ek=Se("Strikethrough",[["path",{d:"M16 4H9a3 3 0 0 0-2.83 4",key:"43sutm"}],["path",{d:"M14 12a4 4 0 0 1 0 8H6",key:"nlfj13"}],["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tk=Se("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yi=Se("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rk=Se("ThumbsUp",[["path",{d:"M7 10v12",key:"1qc93n"}],["path",{d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z",key:"emmmcr"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $r=Se("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ic=Se("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nk=Se("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ak=Se("Underline",[["path",{d:"M6 4v6a6 6 0 0 0 12 0V4",key:"9kb039"}],["line",{x1:"4",x2:"20",y1:"20",y2:"20",key:"nun2al"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ik=Se("UserRound",[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sk=Se("Video",[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const di=Se("Wallet",[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pr=Se("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Mc=xi`
  from { opacity: 0; transform: translateY(-6px); }
  to { opacity: 1; transform: translateY(0); }
`,ok=m.div`
  position: relative;
  display: grid;
  grid-template-columns: 42px minmax(0, 1fr) 32px;
  align-items: start;
  gap: 13px;
  padding: 16px;
  margin-bottom: 16px;
  border: 1px solid;
  border-radius: var(--radius-lg);
  box-shadow: 0 8px 24px rgba(23, 38, 61, .06);
  animation: ${Mc} .2s ease-out;
  color: var(--text);
  background: ${({$variant:r})=>r==="error"?"var(--error-soft)":r==="success"?"var(--success-soft)":"var(--info-soft)"};
  border-color: ${({$variant:r})=>r==="error"?"var(--error-border)":r==="success"?"var(--success-border)":"var(--info-border)"};

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
  @media (max-width: 639px) {
    grid-template-columns: 36px minmax(0, 1fr) 30px;
    gap: 10px;
    padding: 13px;
  }
`,lk=m.span`
  display: grid;
  width: 42px;
  height: 42px;
  place-items: center;
  border-radius: var(--radius-lg);
  color: ${({$variant:r})=>r==="error"?"var(--error)":r==="success"?"var(--success)":"var(--info)"};
  background: var(--surface);

  svg { width: 21px; height: 21px; }
  @media (max-width: 639px) { width: 36px; height: 36px; }
`,ck=m.div`
  min-width: 0;
  padding-top: 1px;
  strong { display: block; margin-bottom: 4px; font-size: 14px; line-height: 1.4; }
  p { margin: 0; color: var(--muted); font-size: 13px; line-height: 1.55; overflow-wrap: anywhere; }
`,xf=m.button`
  display: grid;
  width: 30px;
  height: 30px;
  place-items: center;
  border: 0;
  border-radius: var(--radius-sm);
  color: var(--muted);
  background: transparent;
  transition: background .15s ease, color .15s ease;
  &:hover { color: var(--text); background: var(--surface); }
  &:focus-visible { outline: 3px solid var(--focus); outline-offset: 1px; }
  svg { width: 17px; height: 17px; }
`,dk=m.div`
  position: fixed;
  z-index: 2000;
  top: 24px;
  left: 50%;
  display: grid;
  grid-template-columns: 48px minmax(0, 1fr) 32px;
  align-items: center;
  gap: 14px;
  width: min(460px, calc(100vw - 32px));
  padding: 18px 18px 18px 20px;
  border: 1px solid ${({$variant:r})=>r==="success"?"var(--success-border)":r==="error"?"var(--error-border)":"var(--info-border)"};
  border-radius: var(--radius-xl);
  color: var(--text);
  background: ${({$variant:r})=>r==="success"?"var(--success-soft)":r==="error"?"var(--error-soft)":"var(--info-soft)"};
  box-shadow: 0 22px 70px rgba(20, 38, 66, .25);
  transform: translateX(-50%);
  animation: ${Mc} .25s ease-out;
  strong { display: block; font-size: 15px; line-height: 1.35; }
  p { margin: 4px 0 0; color: var(--muted); font-size: 13px; line-height: 1.45; }
  @media (max-width: 639px) { grid-template-columns: 40px minmax(0, 1fr) 30px; gap: 10px; padding: 15px; }
`,uk=m.span`
  display: grid; width: 48px; height: 48px; place-items: center; border-radius: var(--radius-xl);
  color: ${({$variant:r})=>r==="success"?"var(--success)":r==="error"?"var(--error)":"var(--info)"};
  background: var(--surface);
  svg { width: 25px; height: 25px; }
  @media (max-width: 639px) { width: 40px; height: 40px; border-radius: var(--radius-lg); }
`,_1={error:N2,success:tn,info:B2};function k1({variant:r,title:a,message:s,onDismiss:l}){const[c,p]=x.useState(!1);if(c)return null;const h=_1[r];function f(){p(!0),l==null||l()}return e.jsxs(ok,{$variant:r,role:r==="error"?"alert":"status","aria-live":r==="error"?"assertive":"polite",children:[e.jsx(lk,{$variant:r,children:e.jsx(h,{"aria-hidden":"true"})}),e.jsxs(ck,{children:[e.jsx("strong",{children:a}),e.jsx("p",{children:s})]}),l&&e.jsx(xf,{type:"button",onClick:f,"aria-label":"Dispensar aviso",children:e.jsx(pr,{"aria-hidden":"true"})})]})}function S1({variant:r,title:a,message:s,onDismiss:l}){const c=_1[r];return e.jsxs(dk,{$variant:r,role:r==="error"?"alert":"status","aria-live":r==="error"?"assertive":"polite",children:[e.jsx(uk,{$variant:r,children:e.jsx(c,{"aria-hidden":"true"})}),e.jsxs("div",{children:[e.jsx("strong",{children:a}),e.jsx("p",{children:s})]}),l&&e.jsx(xf,{type:"button",onClick:l,"aria-label":"Fechar aviso",children:e.jsx(pr,{"aria-hidden":"true"})})]})}const pk=m.div`
  position: fixed; z-index: 2100; top: 50%; left: 50%; display: grid; grid-template-columns: 76px minmax(0, 1fr) 30px;
  align-items: center; gap: 15px; width: min(440px, calc(100vw - 32px)); padding: 20px;
  border: 1px solid var(--success-border); border-radius: var(--radius-xl); color: var(--text); background: var(--surface);
  box-shadow: 0 24px 80px var(--shadow); transform: translate(-50%, -50%); animation: ${Mc} .3s ease-out;
  strong { display: block; color: var(--success); font-size: 17px; } p { margin: 5px 0 0; color: var(--muted); font-size: 13px; line-height: 1.45; }
  @media (prefers-reduced-motion: reduce) { animation: none; }
`,fk=m.div`
  position: relative; display: grid; width: 76px; height: 76px; place-items: center; color: var(--success);
  border: 5px solid var(--surface); border-radius: 50%; background: var(--success-soft);
  box-shadow: 0 8px 18px var(--shadow); animation: ${Mc} .45s ease-out both;
  svg { width: 39px; height: 39px; stroke-width: 2.5; }
`;function hk({message:r,onDismiss:a}){return e.jsxs(pk,{role:"status","aria-live":"polite",children:[e.jsxs(fk,{children:[e.jsx(w1,{size:18,style:{position:"absolute",top:-12,right:-5}}),e.jsx(rk,{})]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Mandou bem!"}),e.jsx("p",{children:r})]}),a&&e.jsx(xf,{type:"button",onClick:a,"aria-label":"Fechar comemoração",children:e.jsx(pr,{"aria-hidden":"true"})})]})}var Ac=iv();const mk=m.div`
  min-height: 100vh; min-height: 100dvh; display: flex; background: var(--page-bg); color: var(--text);
  @media (max-width: 639px) { display: block; }
`,xk=m.aside`
  position: sticky; top: 0;
  width: ${({$collapsed:r})=>r?"84px":"252px"};
  height: 100vh; height: 100dvh;
  flex: 0 0 ${({$collapsed:r})=>r?"84px":"252px"};
  overflow-x: hidden; overflow-y: auto; overscroll-behavior: contain;
  scrollbar-width: thin; scrollbar-color: var(--scroll-thumb) transparent;
  background: var(--surface); color: var(--text);
  border-right: 1px solid var(--border);
  padding: 24px 14px; display: flex; flex-direction: column; gap: 20px;
  transition: width var(--transition-normal), flex-basis var(--transition-normal), background var(--transition-normal);
  @media (max-width: 639px) { position: static; width: 100%; height: auto; padding: 14px; gap: 12px; }
`,gk=m.div`
  display: flex; align-items: center; gap: 11px; padding: 0 12px; color: var(--text);
  font-weight: 800; font-size: 20px; letter-spacing: -.4px;
  > svg { width: 30px; height: 30px; flex: 0 0 auto; color: var(--primary); }
  .brand-copy { display: grid; gap: 2px; min-width: 0; }
  .brand-copy strong { font: inherit; }
  .brand-copy small { color: var(--muted); font-size: 11px; font-weight: 500; letter-spacing: 0; line-height: 1.35; }
  ${({$collapsed:r})=>r&&Bn`justify-content: center; padding: 0; .brand-copy { display: none; }`}
  @media (max-width: 639px) { padding: 0 8px; .brand-copy { display: grid; } }
`,vk=m.nav`
  display: grid; gap: 7px;
  @media (max-width: 639px) {
    display: flex;
    gap: 6px;
    overflow-x: auto;
    overscroll-behavior-x: contain;
    scroll-snap-type: x proximity;
    padding: 2px 14px 7px;
    margin: 0 -14px;
    scrollbar-width: thin;
    scrollbar-color: var(--scroll-thumb) transparent;
    -webkit-overflow-scrolling: touch;
  }
`,yc=m.button`
  position: relative; display: flex; align-items: center; gap: 13px; width: 100%; min-height: 44px; border: 0; border-radius: var(--radius-md);
  padding: 11px 14px; color: var(--muted); background: transparent; text-align: left; font-size: 14px; font-weight: 600;
  transition: color .15s ease, background .15s ease, transform .15s ease;
  &::before { position: absolute; top: 10px; bottom: 10px; left: 0; width: 3px; border-radius: 0 3px 3px 0; background: transparent; content: ''; }
  &:hover { color: var(--primary-strong); background: var(--primary-soft); }
  ${({$active:r})=>r&&Bn`background: var(--primary-soft); color: var(--primary-strong); &::before { background: var(--primary); }`}
  svg { width: 20px; height: 20px; flex-shrink: 0; }
  ${({$collapsed:r})=>r&&Bn`justify-content: center; padding: 11px 8px; gap: 0; .nav-label { display: none; }`}
  @media (max-width: 639px) {
    width: auto;
    min-height: 44px;
    flex: 0 0 auto;
    scroll-snap-align: start;
    white-space: nowrap;
    padding: 10px 12px;
    ${({$collapsed:r})=>r&&Bn`justify-content: flex-start; gap: 10px; .nav-label { display: inline; }`}
  }
`,yk=m.main`flex: 1; min-width: 0; min-height: 100vh;`,jk=m.header`
  position: sticky; top: 0; z-index: 5; height: 70px; background: color-mix(in srgb, var(--surface) 90%, transparent); backdrop-filter: blur(14px); border-bottom: 1px solid var(--border);
  display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, auto) auto auto; align-items: center; gap: clamp(10px, 1.5vw, 20px); padding: 0 clamp(18px, 2.4vw, 36px);
  > strong { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  @media (max-width: 639px) {
    height: auto; min-height: 58px; grid-template-columns: minmax(0, 1fr) auto auto; gap: 8px; padding: 8px 14px;
    > span:first-child { display: none; }
  }
`,bk=m.div`width: 100%; max-width: 1600px; margin: 0 auto; padding: clamp(20px, 2.4vw, 36px);
  @media (max-width: 1023px) { padding: 24px; }
  @media (max-width: 639px) { padding: 18px 14px 28px; }
`,Pr=m.div`
  display: flex; justify-content: space-between; align-items: flex-start; gap: 16px; margin-bottom: 26px;
  > div:first-child { min-width: 0; }
  h1 { font-size: clamp(26px, 3vw, 32px); line-height: 1.2; margin: 0 0 7px; letter-spacing: -.8px; color: var(--text); }
  p { color: var(--muted); margin: 0; line-height: 1.6; font-size: 14px; }
  @media (max-width: 639px) {
    flex-direction: column;
    gap: 12px;
    margin-bottom: 22px;
    > div + div { display: flex; width: 100%; flex-wrap: wrap; gap: 8px; }
    > div + div > button { flex: 1 1 150px; }
  }
`,$o=m.section`
  display: flex; align-items: flex-end; justify-content: space-between; gap: 20px;
  padding: clamp(20px, 4vw, 32px);
  border: 1px solid var(--border); border-radius: var(--radius-xl);
  background: color-mix(in srgb, var(--primary) 5%, var(--surface));
  box-shadow: var(--shadow-raised);
  > div:first-child > span { display: inline-flex; align-items: center; gap: 7px; color: var(--primary-strong); font-size: 12px; font-weight: 600; }
  h1 { margin: 12px 0 8px; color: var(--text); font-size: clamp(26px, 3vw, 32px); line-height: 1.2; letter-spacing: -.04em; }
  p { max-width: 560px; margin: 0; color: var(--muted); font-size: 14px; line-height: 1.6; }
  @media (max-width: 639px) {
    align-items: stretch; flex-direction: column; gap: 16px;
    > div:last-child { width: 100%; }
    > div:last-child > button { flex: 1 1 150px; }
  }
`,gf=m.div`
  display: grid; grid-template-columns: minmax(0, 1.45fr) minmax(300px, .9fr); gap: 20px; align-items: start;
  @media (max-width: 1023px) { grid-template-columns: 1fr; }
`,Ie=m.section`
  min-width: 0; background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 24px;
  box-shadow: var(--shadow-raised);
  @media (max-width: 639px) { padding: 17px; }
`,Fe=m.h2`font-size: 18px; line-height: 1.35; margin: 0 0 20px; display: flex; align-items: center; gap: 10px; color: var(--text); letter-spacing: -.2px;`,Z=m.label`
  display: grid; gap: 8px; margin-bottom: 18px; font-size: 14px; font-weight: 600; color: var(--text);
  small { color: var(--muted); font-weight: 400; }
  input, textarea, select { width: 100%; min-height: 44px; border: 1px solid var(--border); border-radius: var(--radius-md); padding: 11px 12px; outline: none; color: var(--text); background: var(--surface); font-size: 14px; font-weight: 400; transition: border-color .15s ease, box-shadow .15s ease; }
  input:focus, textarea:focus, select:focus { border-color: var(--primary); box-shadow: 0 0 0 4px var(--focus); }
  textarea { resize: vertical; min-height: 90px; }
`,C1=m.div`display: grid; grid-template-columns: 1fr 1fr; gap: 14px; @media (max-width: 639px) { grid-template-columns: 1fr; gap: 0; }`,vf=m.div`background: var(--surface-raised); padding: 13px; border-radius: var(--radius-md); display: grid; gap: 10px; margin-bottom: 16px;`,yf=m.div`display: flex; gap: 9px; align-items: center;`,jf=m.span`width: 30px; height: 30px; display: grid; place-items: center; flex-shrink: 0; border-radius: 50%; background: var(--border); color: var(--text); font-size: 12px; font-weight: 800;`,jc=m.input`min-width: 0; flex: 1; border: 1px solid var(--border); border-radius: var(--radius-md); color: var(--text); background: var(--surface-raised); padding: 11px 12px;`,ue=m.button`
  display: inline-flex; align-items: center; justify-content: center; gap: 8px; min-height: 44px; border-radius: var(--radius-md); padding: 10px 16px; font-size: 14px; line-height: 1.3; font-weight: 600; border: 1px solid transparent; transition: transform var(--transition-fast), box-shadow var(--transition-fast), background var(--transition-fast), border-color var(--transition-fast);
  &:hover:not(:disabled) { transform: translateY(-1px); }
  ${({$variant:r})=>r==="primary"&&Bn`background: var(--primary); color: var(--primary-contrast); &:hover:not(:disabled) { background: var(--primary-strong); }`}
  ${({$variant:r})=>(!r||r==="secondary")&&Bn`background: var(--surface); color: var(--text); border-color: var(--border); &:hover:not(:disabled) { background: var(--surface-raised); }`}
  ${({$variant:r})=>r==="danger"&&Bn`background: var(--error-soft); color: var(--error); border-color: var(--error-border); &:hover:not(:disabled) { filter: brightness(.97); }`}
  svg { width: 17px; height: 17px; }
`,wk=m.div`display: flex; gap: 10px; flex-wrap: wrap;`,bf=m.div`display: flex; justify-content: flex-end; gap: 10px; border-top: 1px solid var(--border); padding-top: 18px; margin-top: 22px;`,wf=m.div`background: var(--surface-raised); padding: 17px; border-radius: var(--radius-md); margin-bottom: 22px;`,_f=m.div`display: flex; align-items: center; gap: 12px; font-weight: 800; font-size: 16px; margin-bottom: 14px; svg { color: var(--primary); }`,kf=m.div`display: grid; gap: 11px; color: var(--muted); font-size: 13px; margin-top: 15px;`,Rr=m.span`
  display: inline-flex; border-radius: var(--radius-full); padding: 5px 9px; font-size: 11px; font-weight: 700;
  color: ${({$done:r})=>r?"var(--success)":"var(--primary-strong)"};
  background: ${({$done:r})=>r?"var(--success-soft)":"color-mix(in srgb, var(--primary) 16%, var(--surface))"};
`,E1=m.div`display: flex; align-items: center; gap: 10px; padding: 13px 0; border-bottom: 1px solid var(--border); &:last-child { border-bottom: 0; }
  input { width: 17px; height: 17px; accent-color: var(--primary); }
  span { flex: 1; font-size: 13px; }
`,_k=m.div`display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 14px; margin-bottom: 20px; @media (max-width: 639px) { grid-template-columns: 1fr; }`,Gs=m(Ie)`padding: 19px; p { margin: 0 0 10px; color: var(--muted); font-size: 13px; } strong { font-size: 28px; }`,kk=m.div`height: 7px; background: var(--border); border-radius: var(--radius-full); overflow: hidden; margin-top: 13px; div { height: 100%; background: var(--primary); border-radius: inherit; transition: width .2s; }`;m(Ie)`margin-bottom: 15px;`;m.div`display: flex; justify-content: space-between; gap: 12px; align-items: flex-start; h3 { margin: 0 0 6px; font-size: 18px; } p { margin: 0; color: var(--muted); font-size: 13px; line-height: 1.5; }`;m.div`min-width: 0; overflow-x: auto; overscroll-behavior-x: contain; scrollbar-width: thin;`;m.table`
  width: 100%; min-width: 1120px; table-layout: fixed; border-collapse: collapse; text-align: left; font-size: 13px;
  thead { border-bottom: 1px solid var(--border); }
  th { padding: 13px 12px; color: var(--muted); background: var(--surface-raised); font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: .055em; white-space: nowrap; }
  td { padding: 15px 12px; border-bottom: 1px solid var(--border); vertical-align: middle; color: var(--text); }
  tbody tr { transition: background .15s ease; }
  tbody tr:hover { background: var(--surface-raised); }
  tbody tr:last-child td { border-bottom: 0; }
  td strong, td small { display: block; }
  td strong { color: var(--text); }
  td small { margin-top: 5px; color: var(--muted); line-height: 1.45; }
  td > small { margin-top: 0; }
`;const In=m.p`color: var(--muted); font-size: 13px;`,Ge=m.div`text-align: center; padding: 38px 18px; color: var(--muted); svg { margin-bottom: 10px; color: var(--primary); } h3 { color: var(--text); margin: 0 0 7px; } p { margin: 0; font-size: 13px; }`,nn=m.select`min-height: 42px; padding: 9px 12px; border: 1px solid var(--border); border-radius: var(--radius-md); background: var(--surface); color: var(--text);`,$1=m.div`
  display: flex; flex-wrap: wrap; gap: 10px; align-items: center;
  @media (max-width: 639px) { width: 100%; }
`;m.span`
  display: inline-flex; align-items: center; border-radius: var(--radius-full); padding: 5px 9px;
  font-size: 11px; font-weight: 700; white-space: nowrap;
  color: ${({$priority:r})=>r==="high"?"var(--error)":r==="medium"?"var(--warning)":"var(--success)"};
  background: ${({$priority:r})=>r==="high"?"var(--error-soft)":r==="medium"?"var(--warning-soft)":"var(--success-soft)"};
`;m.div`display: grid; grid-template-columns: minmax(0,1fr) auto auto; align-items: center; gap: 14px; padding: 15px 0; border-bottom: 1px solid var(--border); &:last-child { border-bottom: 0; } @media (max-width: 639px) { grid-template-columns: 1fr auto; }`;const Sk=xi`
  from { opacity: 0; transform: translateY(8px) scale(.98); }
  to { opacity: 1; transform: translateY(0) scale(1); }
`,Ck=m.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: grid;
  place-items: center;
  padding: 20px;
  background: rgba(17, 29, 48, .56);
  backdrop-filter: blur(4px);
`,Ek=m.section`
  width: min(100%, 440px);
  padding: 26px;
  border: 1px solid rgba(255, 255, 255, .75);
  border-radius: var(--radius-xl);
  color: var(--text);
  background: var(--surface);
  border-color: var(--border);
  box-shadow: 0 24px 80px var(--shadow);
  animation: ${Sk} .18s ease-out;

  @media (prefers-reduced-motion: reduce) { animation: none; }
  @media (max-width: 639px) { padding: 21px; border-radius: var(--radius-lg); }
`,$k=m.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
`,Rk=m.div`
  display: grid;
  width: 52px;
  height: 52px;
  flex: 0 0 52px;
  place-items: center;
  border-radius: var(--radius-lg);
  color: var(--error);
  background: var(--error-soft);
  svg { width: 25px; height: 25px; }
`,Pk=m.button`
  display: grid;
  width: 34px;
  height: 34px;
  place-items: center;
  border: 0;
  border-radius: var(--radius-md);
  color: var(--muted);
  background: transparent;
  &:hover { color: var(--text); background: var(--surface-raised); }
  &:focus-visible { outline: 3px solid var(--focus); outline-offset: 1px; }
  svg { width: 18px; height: 18px; }
`,zk=m.h2`
  margin: 20px 0 8px;
  color: var(--text);
  font-size: 21px;
  letter-spacing: -.35px;
`,Nk=m.p`
  margin: 0;
  color: var(--muted);
  font-size: 14px;
  line-height: 1.65;
  overflow-wrap: anywhere;
`,Mk=m.div`
  margin-top: 16px;
  padding: 11px 13px;
  border: 1px solid var(--warning-border);
  border-radius: var(--radius-md);
  color: var(--warning);
  background: var(--warning-soft);
  font-size: 12px;
  line-height: 1.5;
`,Ak=m.div`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 24px;
`,Tk=m(ue)`
  background: var(--error);
  color: var(--error-contrast);
  &:hover:not(:disabled) { filter: brightness(.9); }
`;function Tc({open:r,title:a,description:s,confirmLabel:l="Excluir tarefa",busy:c=!1,onCancel:p,onConfirm:h}){const f=x.useRef(null);return x.useEffect(()=>{var k;if(!r)return;const g=document.body.style.overflow,_=document.activeElement instanceof HTMLElement?document.activeElement:null;document.body.style.overflow="hidden",(k=f.current)==null||k.focus();function b(C){var V,R;if(C.key==="Escape"&&!c&&p(),C.key!=="Tab")return;const N=(V=f.current)==null?void 0:V.querySelectorAll('button:not(:disabled), [href], input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])');if(!(N!=null&&N.length)){C.preventDefault(),(R=f.current)==null||R.focus();return}const O=N[0],$=N[N.length-1];C.shiftKey&&(document.activeElement===O||document.activeElement===f.current)?(C.preventDefault(),$.focus()):!C.shiftKey&&document.activeElement===$&&(C.preventDefault(),O.focus())}return window.addEventListener("keydown",b),()=>{document.body.style.overflow=g,window.removeEventListener("keydown",b),_==null||_.focus()}},[r,c,p]),r?Ac.createPortal(e.jsx(Ck,{onMouseDown:g=>{g.target===g.currentTarget&&!c&&p()},children:e.jsxs(Ek,{ref:f,tabIndex:-1,role:"alertdialog","aria-modal":"true","aria-labelledby":"confirm-dialog-title","aria-describedby":"confirm-dialog-description",children:[e.jsxs($k,{children:[e.jsx(Rk,{children:e.jsx(nk,{"aria-hidden":"true"})}),e.jsx(Pk,{type:"button",onClick:p,disabled:c,"aria-label":"Fechar confirmação",children:e.jsx(pr,{"aria-hidden":"true"})})]}),e.jsx(zk,{id:"confirm-dialog-title",children:a}),e.jsx(Nk,{id:"confirm-dialog-description",children:s}),e.jsx(Mk,{children:"Essa ação não pode ser desfeita."}),e.jsxs(Ak,{children:[e.jsx(ue,{type:"button",onClick:p,disabled:c,children:"Cancelar"}),e.jsxs(Tk,{type:"button",onClick:h,disabled:c,children:[c?e.jsx(Ze,{className:"spin"}):e.jsx($r,{}),c?"Excluindo...":l]})]})]})}),document.body):null}const Dk=xi`
  from { opacity: 0; transform: translateY(8px) scale(.99); }
  to { opacity: 1; transform: translateY(0) scale(1); }
`,Fk=m.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: grid;
  place-items: center;
  padding: 16px;
  background: rgba(19, 31, 51, .48);
  backdrop-filter: blur(5px);
`,Lk=m.section`
  width: min(700px, calc(100vw - 32px));
  max-height: min(88vh, 760px);
  overflow-y: auto;
  padding: 24px;
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  color: var(--text);
  background: var(--surface);
  box-shadow: 0 24px 70px var(--shadow);
  animation: ${Dk} var(--transition-normal);
  &:focus { outline: none; }
  @media (prefers-reduced-motion: reduce) { animation: none; }
  @media (max-width: 639px) { width: calc(100vw - 20px); padding: 18px; max-height: 92vh; }
`,Ok=m.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 14px;
  h2 { display: flex; align-items: center; gap: 9px; margin: 0; color: var(--text); font-size: 18px; }
`,Ik=m.button`
  display: grid;
  width: 34px;
  height: 34px;
  flex: 0 0 auto;
  place-items: center;
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  color: var(--muted);
  background: var(--surface-raised);
  cursor: pointer;
  &:hover { color: var(--primary); background: var(--surface); }
`;function ns({open:r,title:a,icon:s,busy:l=!1,onClose:c,children:p}){const h=x.useId(),f=x.useRef(null);return x.useEffect(()=>{var k;if(!r)return;const g=document.activeElement instanceof HTMLElement?document.activeElement:null,_=C=>{var V,R;if(C.key==="Escape"&&!l&&c(),C.key!=="Tab")return;const N=(V=f.current)==null?void 0:V.querySelectorAll('button:not(:disabled), [href], input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])');if(!(N!=null&&N.length)){C.preventDefault(),(R=f.current)==null||R.focus();return}const O=N[0],$=N[N.length-1];C.shiftKey&&(document.activeElement===O||document.activeElement===f.current)?(C.preventDefault(),$.focus()):!C.shiftKey&&document.activeElement===$&&(C.preventDefault(),O.focus())},b=document.body.style.overflow;return document.addEventListener("keydown",_),document.body.style.overflow="hidden",(k=f.current)==null||k.focus(),()=>{document.removeEventListener("keydown",_),document.body.style.overflow=b,g==null||g.focus()}},[r,l,c]),r?Ac.createPortal(e.jsx(Fk,{role:"presentation",onMouseDown:g=>{g.target===g.currentTarget&&!l&&c()},children:e.jsxs(Lk,{ref:f,tabIndex:-1,role:"dialog","aria-modal":"true","aria-labelledby":h,children:[e.jsxs(Ok,{children:[e.jsxs("h2",{id:h,children:[s,a]}),e.jsx(Ik,{type:"button","aria-label":"Fechar janela",title:"Fechar (Esc)",onClick:c,disabled:l,children:e.jsx(pr,{size:18})})]}),p]})}),document.body):null}const Bk=m.div`
  position: fixed;
  right: 24px;
  bottom: 24px;
  z-index: 20;
  @media (max-width: 520px) { right: 14px; bottom: 14px; }
`,qk=m.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-height: 48px;
  padding: 0 17px;
  border: 0;
  border-radius: 999px;
  color: var(--primary-contrast);
  background: var(--primary);
  box-shadow: 0 10px 26px var(--shadow);
  font-weight: 800;
  cursor: pointer;
  transition: transform var(--transition-fast), box-shadow var(--transition-fast), background var(--transition-fast);
  &:hover { background: var(--primary-strong); transform: translateY(-1px); box-shadow: 0 14px 30px var(--shadow); }
  svg { width: 19px; height: 19px; }
`,Uk=m.section`
  display: grid;
  grid-template-rows: auto 1fr auto auto;
  width: min(390px, calc(100vw - 28px));
  height: min(620px, calc(100vh - 100px));
  overflow: hidden;
  border: 1px solid var(--border);
  border-radius: 18px;
  color: var(--text);
  background: var(--surface);
  box-shadow: 0 18px 48px var(--shadow);
`,Hk=m.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 16px 17px;
  color: var(--primary-contrast);
  background: var(--primary);
  h2 { margin: 0; font-size: 15px; }
  p { margin: 3px 0 0; color: color-mix(in srgb, var(--primary-contrast) 76%, var(--primary)); font-size: 11px; }
`,Vk=m.div`
  display: flex;
  align-items: center;
  gap: 10px;
  > span { display: grid; width: 34px; height: 34px; place-items: center; border-radius: 10px; background: rgba(255,255,255,.16); }
  svg { width: 18px; height: 18px; }
`,Wk=m.button`
  display: grid; width: 30px; height: 30px; place-items: center; border: 0; border-radius: 8px; color: var(--primary-contrast); background: color-mix(in srgb, var(--primary-contrast) 14%, var(--primary)); cursor: pointer;
  &:hover { background: color-mix(in srgb, var(--primary-contrast) 22%, var(--primary)); }
  svg { width: 17px; height: 17px; }
`,Gk=m.div`
  display: grid;
  align-content: start;
  gap: 11px;
  overflow-y: auto;
  padding: 16px;
  background: var(--surface-raised);
`,Fu=m.div`
  max-width: 88%;
  justify-self: ${({$role:r})=>r==="user"?"end":"start"};
  padding: 10px 12px;
  border: 1px solid ${({$role:r})=>r==="user"?"color-mix(in srgb, var(--primary) 36%, var(--border))":"var(--border)"};
  border-radius: ${({$role:r})=>r==="user"?"14px 14px 4px 14px":"14px 14px 14px 4px"};
  color: ${({$role:r})=>r==="user"?"var(--primary-strong)":"var(--text)"};
  background: ${({$role:r})=>r==="user"?"color-mix(in srgb, var(--primary) 16%, var(--surface))":"var(--surface)"};
  font-size: 12px;
  line-height: 1.55;
  white-space: pre-wrap;
`,Qk=m.div`
  display: flex;
  gap: 6px;
  overflow-x: auto;
  padding: 9px 12px 0;
  button { flex: 0 0 auto; padding: 7px 9px; border: 1px solid var(--border); border-radius: 999px; color: var(--muted); background: var(--surface); font-size: 10px; cursor: pointer; &:hover { color: var(--primary); border-color: var(--primary); background: var(--surface-raised); } }
`,Kk=m.form`
  display: flex;
  align-items: flex-end;
  gap: 8px;
  padding: 12px;
  background: var(--surface);
  textarea { min-height: 42px; max-height: 100px; flex: 1; resize: none; padding: 11px 12px; border: 1px solid var(--border); border-radius: 11px; outline: none; color: var(--text); background: var(--surface-raised); font-size: 12px; &:focus { border-color: var(--primary); box-shadow: 0 0 0 3px var(--focus); } }
  button { display: grid; width: 42px; height: 42px; flex: 0 0 auto; place-items: center; border: 0; border-radius: 11px; color: var(--primary-contrast); background: var(--primary); cursor: pointer; &:disabled { opacity: .55; cursor: not-allowed; } svg { width: 17px; height: 17px; } }
`,Yk=m.div`
  display: grid; place-items: center; gap: 8px; min-height: 100%; padding: 28px; text-align: center; color: var(--muted); font-size: 12px;
  svg { color: var(--primary); }
  strong { color: var(--text); font-size: 14px; }
  p { margin: 0; line-height: 1.5; }
`;function Jk(){const[r,a]=x.useState(!1),[s,l]=x.useState(""),[c,p]=x.useState(!1),[h,f]=x.useState(""),[g,_]=x.useState([]);async function b(C){var $,V;C.preventDefault();const N=s.trim();if(!N||c)return;const O=[...g,{role:"user",content:N}];_(O),l(""),f(""),p(!0);try{const R=await l_(N,g);_([...O,{role:"assistant",content:R||"Não consegui gerar uma resposta agora."}])}catch(R){f(((V=($=R==null?void 0:R.response)==null?void 0:$.data)==null?void 0:V.error)||"O assistente não está disponível no momento.")}finally{p(!1)}}function k(C){l(C),a(!0)}return e.jsx(Bk,{children:r?e.jsxs(Uk,{"aria-label":"Assistente de produtividade e estudos",children:[e.jsxs(Hk,{children:[e.jsxs(Vk,{children:[e.jsx("span",{children:e.jsx(Tx,{})}),e.jsxs("div",{children:[e.jsx("h2",{children:"Assistente inteligente"}),e.jsx("p",{children:"Produtividade e estudos"})]})]}),e.jsx(Wk,{type:"button","aria-label":"Fechar assistente",onClick:()=>a(!1),children:e.jsx(pr,{})})]}),e.jsxs(Gk,{"aria-live":"polite",children:[g.length===0?e.jsxs(Yk,{children:[e.jsx(w1,{size:28}),e.jsx("strong",{children:"Como posso ajudar?"}),e.jsx("p",{children:"Posso montar planos de estudo, organizar prioridades, sugerir rotinas e ajudar você a sair da procrastinação."})]}):g.map((C,N)=>e.jsx(Fu,{$role:C.role,children:C.content},`${C.role}-${N}`)),c&&e.jsx(Fu,{$role:"assistant",children:"Pensando..."}),h&&e.jsx(Fu,{$role:"assistant",children:h})]}),e.jsxs(Qk,{children:[e.jsxs("button",{type:"button",onClick:()=>k("Monte um plano de estudos para esta semana"),children:[e.jsx(Xr,{size:12})," Plano de estudos"]}),e.jsxs("button",{type:"button",onClick:()=>k("Ajude-me a organizar minhas prioridades de hoje"),children:[e.jsx(L2,{size:12})," Prioridades de hoje"]})]}),e.jsxs(Kk,{onSubmit:b,children:[e.jsx("textarea",{"aria-label":"Mensagem para o assistente",placeholder:"Pergunte sobre produtividade ou estudos...",value:s,onChange:C=>l(C.target.value),onKeyDown:C=>{var N;C.key==="Enter"&&!C.shiftKey&&(C.preventDefault(),(N=C.currentTarget.form)==null||N.requestSubmit())}}),e.jsx("button",{type:"submit","aria-label":"Enviar mensagem",disabled:!s.trim()||c,children:e.jsx(X2,{})})]})]}):e.jsxs(qk,{type:"button",onClick:()=>a(!0),children:[e.jsx(Tx,{}),"Assistente IA"]})})}const R1=x.createContext(null),Lx="task-manager-theme";function Xk({children:r}){const[a,s]=x.useState(()=>localStorage.getItem(Lx)==="dark"?"dark":"light");x.useLayoutEffect(()=>{var c;document.documentElement.dataset.theme=a,(c=document.querySelector('meta[name="theme-color"]'))==null||c.setAttribute("content",a==="dark"?"#0B1120":"#F8FAFC"),localStorage.setItem(Lx,a)},[a]);function l(){s(c=>c==="light"?"dark":"light")}return e.jsx(R1.Provider,{value:{mode:a,toggleTheme:l},children:r})}function Zk(){const r=x.useContext(R1);if(!r)throw new Error("useAppTheme must be used within AppThemeProvider");return r}const eS=m.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 44px;
  padding: 8px 12px;
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  color: var(--text);
  background: var(--surface);
  font-size: 12px;
  font-weight: 750;
  white-space: nowrap;
  transition: background .18s ease, border-color .18s ease, transform .18s ease;
  &:hover { background: var(--surface-raised); border-color: var(--primary); transform: translateY(-1px); }
  svg { width: 16px; height: 16px; color: var(--primary); }
  @media (max-width: 639px) { gap: 0; width: 44px; padding: 8px; font-size: 0; }
`;function qp(){const{mode:r,toggleTheme:a}=Zk(),s=r==="dark"?"Ativar modo claro":"Ativar modo escuro",l=r==="dark"?tk:Q2;return e.jsxs(eS,{type:"button",onClick:a,"aria-label":s,"aria-pressed":r==="dark",title:s,children:[e.jsx(l,{"aria-hidden":"true"}),r==="dark"?"Modo claro":"Modo escuro"]})}const sc=[{id:"tasks",label:"Tarefas",path:"/tasks",page:"list",icon:er},{id:"planning",label:"Planejamento",path:"/planning",page:"planning",icon:Dp},{id:"goals",label:"Objetivos",path:"/goals",page:"goals",icon:Fp},{id:"schedule",label:"Agenda",path:"/schedule",page:"schedule",icon:ni},{id:"study-resources",label:"Biblioteca",path:"/study-resources",page:"study-resources",icon:Xr},{id:"finances",label:"Finanças",path:"/finances",page:"finances",icon:hf},{id:"english-study",label:"Inglês",path:"/english-study",page:"english-study",icon:Ip},{id:"expenses",label:"Despesas",path:"/expenses",page:"expenses",icon:vc},{id:"fuel-calculator",label:"Calculadora de combustível",path:"/fuel-calculator",page:"fuel-calculator",icon:Lp},{id:"dividends",label:"Dividendos",path:"/dividends",page:"dividends",icon:Ki},{id:"fixed-income",label:"Renda fixa",path:"/fixed-income",page:"fixed-income",icon:Ki},{id:"opportunities",label:"Oportunidades",path:"/opportunities",page:"opportunities",icon:Op}],P1="task-manager-menu-order",z1="task-manager-sidebar-collapsed",Lu=new Set(["finances","expenses","dividends","fixed-income","opportunities"]),tS=m.span`
  color: var(--muted);
  font-size: 13px;
`,rS=m.strong`
  color: var(--text);
  font-size: 13px;
  font-weight: 700;
`,nS=m.button`
  display: inline-flex; align-items: center; gap: 7px; min-height: 44px; padding: 8px 12px; border: 1px solid var(--error-border); border-radius: var(--radius-md);
  color: var(--error); background: var(--error-soft); font-size: 12px; font-weight: 700; cursor: pointer; transition: background var(--transition-fast), border-color var(--transition-fast), transform var(--transition-fast);
  &:hover { border-color: var(--error); filter: brightness(.97); transform: translateY(-1px); }
  svg { width: 16px; height: 16px; }
  @media (max-width: 639px) { padding: 8px 10px; font-size: 0; svg { width: 17px; height: 17px; } }
`,aS=m.button`
  display: inline-flex; align-items: center; justify-content: ${({$collapsed:r})=>r?"center":"flex-end"};
  align-self: ${({$collapsed:r})=>r?"stretch":"flex-end"};
  gap: 7px; min-height: 40px; padding: 6px 9px; border: 1px solid var(--border); border-radius: var(--radius-md);
  color: var(--muted); background: var(--surface); font-size: 11px; font-weight: 600;
  transition: color var(--transition-fast), background var(--transition-fast), border-color var(--transition-fast);
  &:hover { color: var(--primary-strong); border-color: var(--primary); background: var(--primary-soft); }
  svg { width: 16px; height: 16px; }
  .collapse-label { display: ${({$collapsed:r})=>r?"none":"inline"}; }
  @media (max-width: 639px) { display: none; }
`,iS=m.div`
  display: grid;
  position: relative;
  gap: 5px;
  min-width: 0;
`,sS=m(yc)`
  justify-content: space-between;
  &[aria-expanded='true'] { color: var(--primary-strong); background: var(--primary-soft); }
  .finance-chevron { width: 15px; height: 15px; flex: 0 0 auto; transition: transform .15s ease; }
  ${({$collapsed:r})=>r&&"justify-content: center; .nav-label { display: none; } .finance-chevron { display: none; }"}
  @media (max-width: 639px) { justify-content: space-between; ${({$collapsed:r})=>r&&".nav-label { display: inline-flex; } .finance-chevron { display: block; }"} }
`,oS=m.div`
  display: grid;
  gap: 4px;
  padding-left: 10px;
  margin-left: 14px;
  border-left: 1px solid var(--border);
  ${({$collapsed:r})=>r&&"padding: 0; margin: 0; border: 0;"}
  @media (max-width: 639px) { position: absolute; z-index: 10; top: calc(100% + 6px); left: 14px; min-width: 190px; padding: 8px; margin: 0; border: 1px solid var(--border); border-radius: var(--radius-md); background: var(--surface); box-shadow: var(--shadow-raised); }
`,lS=m(yc)`
  gap: 10px;
  padding: 10px 12px;
  border-radius: var(--radius-md);
  font-size: 12px;
  svg { width: 16px; height: 16px; }
`,cS=m.p`
  margin: 0 0 15px;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.55;
`,dS=m.div`
  display: grid;
  gap: 8px;
`,uS=m.div`
  display: grid;
  grid-template-columns: 34px minmax(0, 1fr) auto auto;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  background: var(--surface-raised);
  @media (max-width: 639px) {
    grid-template-columns: 34px minmax(0, 1fr) auto;
    > button { grid-column: 2 / -1; justify-self: end; }
  }
`,pS=m.span`
  display: grid;
  width: 34px;
  height: 34px;
  place-items: center;
  border-radius: var(--radius-md);
  color: var(--primary-strong);
  background: color-mix(in srgb, var(--primary) 12%, var(--surface));
  svg { width: 17px; height: 17px; }
`,fS=m.strong`
  min-width: 0;
  color: var(--text);
  font-size: 13px;
  overflow-wrap: anywhere;
`,hS=m.span`
  padding: 5px 8px;
  border: 1px solid ${({$archived:r})=>r?"var(--border)":"var(--success-border)"};
  border-radius: var(--radius-full);
  color: ${({$archived:r})=>r?"var(--muted)":"var(--success)"};
  background: ${({$archived:r})=>r?"var(--surface)":"var(--success-soft)"};
  font-size: 10px;
  font-weight: 750;
  white-space: nowrap;
`,mS=m.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  min-height: 34px;
  padding: 6px 9px;
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  color: ${({$restore:r})=>r?"var(--primary-strong)":"var(--muted)"};
  background: var(--surface);
  font-size: 11px;
  font-weight: 750;
  cursor: pointer;
  &:hover:not(:disabled) {
    border-color: ${({$restore:r})=>r?"var(--primary)":"var(--success)"};
    color: ${({$restore:r})=>r?"var(--primary-strong)":"var(--success)"};
    background: ${({$restore:r})=>r?"color-mix(in srgb, var(--primary) 8%, var(--surface))":"var(--success-soft)"};
  }
  &:disabled { opacity: .5; cursor: not-allowed; }
  svg { width: 14px; height: 14px; }
`,xS=m.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin-top: 14px;
  color: var(--muted);
  font-size: 11px;
  @media (max-width: 639px) { align-items: flex-start; flex-direction: column; }
`;function gS(){try{const r=JSON.parse(localStorage.getItem(P1)??"[]");return[...r.map(s=>sc.find(l=>l.id===s)).filter(Boolean),...sc.filter(s=>!r.includes(s.id))]}catch{return sc}}function vS(){try{return localStorage.getItem(z1)==="true"}catch{return!1}}function Up(r){return`task-manager-archived-pages:${String(r)}`}function Ox(r){try{const a=JSON.parse(localStorage.getItem(Up(r))??"[]");return Array.isArray(a)?[...new Set(a.filter(s=>typeof s=="string"&&sc.some(l=>l.id===s)))]:[]}catch{return[]}}function yS({page:r,error:a,notice:s,children:l,onNavigate:c,user:p,onLogout:h,onDismissError:f,onDismissNotice:g,celebration:_,onDismissCelebration:b}){const[k,C]=x.useState(gS),[N,O]=x.useState(()=>Ox(p.id)),[$,V]=x.useState(null),[R,j]=x.useState(!1),[T,F]=x.useState(vS),[ne,X]=x.useState(()=>Lu.has(r)),L=k.filter(Q=>!N.includes(Q.id)),oe=L.filter(Q=>Lu.has(Q.id)),S=k.filter(Q=>Q.id==="finances"?oe.length>0:Q.id==="expenses"||Q.id==="dividends"||Q.id==="fixed-income"||Q.id==="opportunities"?!1:!N.includes(Q.id));x.useEffect(()=>{O(Ox(p.id))},[p.id]),x.useEffect(()=>{Lu.has(r)&&X(!0)},[r]);function y(Q,ge){const le=k.length-N.length;if(ge&&le<=1)return;const xe=ge?[...new Set([...N,Q.id])]:N.filter(z=>z!==Q.id);O(xe);try{localStorage.setItem(Up(p.id),JSON.stringify(xe))}catch{}const H=r===Q.page||Q.page==="study-resources"&&r==="study-resource-edit";if(ge&&H){const z=k.find(w=>w.id!==Q.id&&!xe.includes(w.id));z&&c(z.path)}}function q(){O([]);try{localStorage.removeItem(Up(p.id))}catch{}}function de(){F(Q=>{const ge=!Q;try{localStorage.setItem(z1,String(ge))}catch{}return ge})}function be(Q,ge){V(ge),Q.dataTransfer.effectAllowed="move",Q.dataTransfer.setData("text/plain",ge)}function ke(Q,ge){Q.preventDefault();const le=Q.dataTransfer.getData("text/plain")||$;!le||le===ge||(C(xe=>{const H=[...xe],z=H.findIndex(ae=>ae.id===le),w=H.findIndex(ae=>ae.id===ge);if(z<0||w<0)return xe;const[re]=H.splice(z,1);return H.splice(w,0,re),localStorage.setItem(P1,JSON.stringify(H.map(ae=>ae.id))),H}),V(null))}function ze(Q,ge=!1){const le=Q.icon,xe=ge?lS:yc,H=r===Q.page||Q.page==="study-resources"&&r==="study-resource-edit";return e.jsxs(xe,{$active:H,$collapsed:T,draggable:!0,title:T?Q.label:"Arraste para mudar a posição","aria-label":ge&&Q.id==="finances"?"Finanças — visão geral":Q.label,onDragStart:z=>be(z,Q.id),onDragOver:z=>z.preventDefault(),onDrop:z=>ke(z,Q.id),onDragEnd:()=>V(null),style:{opacity:$===Q.id?.45:1},"aria-current":r===Q.page?"page":void 0,onClick:()=>c(Q.path),children:[e.jsx(le,{}),e.jsx("span",{className:"nav-label",children:ge&&Q.id==="finances"?"Visão geral":Q.label})]},Q.id)}return e.jsxs(mk,{children:[e.jsxs(xk,{$collapsed:T,children:[e.jsxs(gk,{$collapsed:T,children:[e.jsx(Bp,{}),e.jsxs("span",{className:"brand-copy",children:[e.jsx("strong",{children:"Rumo"}),e.jsx("small",{children:"Organize hoje. Avance no seu ritmo."})]})]}),e.jsx(aS,{type:"button",$collapsed:T,"aria-label":T?"Expandir menu lateral":"Recolher menu lateral","aria-expanded":!T,"aria-controls":"primary-navigation",title:T?"Expandir menu":"Recolher menu",onClick:de,children:T?e.jsx(rs,{"aria-hidden":"true"}):e.jsxs(e.Fragment,{children:[e.jsx(jo,{"aria-hidden":"true"}),e.jsx("span",{className:"collapse-label",children:"Recolher menu"})]})}),e.jsx(vk,{id:"primary-navigation","aria-label":"Navegação principal",children:S.map(Q=>Q.id!=="finances"?ze(Q):e.jsxs(iS,{children:[e.jsxs(sS,{type:"button",$active:!1,$collapsed:T,"aria-expanded":ne,"aria-controls":"finance-subnav","aria-label":"Finanças",title:T?"Finanças":void 0,onClick:()=>X(ge=>!ge),children:[e.jsx(hf,{}),e.jsx("span",{className:"nav-label",children:"Finanças"}),e.jsx(z2,{className:"finance-chevron","aria-hidden":"true",style:{transform:ne?"rotate(180deg)":void 0}})]}),ne&&e.jsx(oS,{id:"finance-subnav",$collapsed:T,children:oe.map(ge=>ze(ge,!0))})]},"finance-group"))}),e.jsx("div",{style:{marginTop:"auto"},children:e.jsxs(yc,{type:"button",$active:R,$collapsed:T,"aria-label":"Configurações",title:T?"Configurações":void 0,onClick:()=>j(!0),children:[e.jsx(Fx,{}),e.jsx("span",{className:"nav-label",children:"Configurações"}),!T&&N.length>0&&e.jsx("span",{style:{marginLeft:"auto",fontSize:11},children:N.length})]})})]}),e.jsxs(yk,{children:[e.jsxs(jk,{children:[e.jsx(tS,{children:"Seu espaço de produtividade"}),e.jsxs(rS,{title:p.name||p.email,children:["Olá, ",p.name||p.email]}),e.jsx(qp,{}),e.jsxs(nS,{type:"button",onClick:h,title:"Sair da conta","aria-label":"Sair da conta",children:[e.jsx(W2,{}),"Sair"]})]}),e.jsxs(bk,{children:[a&&e.jsx(k1,{variant:"error",title:"Não foi possível concluir",message:a,onDismiss:f},"error"),s&&e.jsx(S1,{variant:"success",title:"Ação concluída",message:s,onDismiss:g},"success"),_&&e.jsx(hk,{message:_,onDismiss:b}),l,e.jsx(Jk,{})]})]}),e.jsxs(ns,{open:R,title:"Configurações",icon:e.jsx(Fx,{size:19}),onClose:()=>j(!1),children:[e.jsx("strong",{style:{display:"block",marginBottom:8,color:"var(--text)",fontSize:14},children:"Páginas do menu"}),e.jsx(cS,{children:"Escolha quais páginas aparecem no menu lateral. As páginas arquivadas podem ser restauradas a qualquer momento; seus dados continuam preservados."}),e.jsx(dS,{children:k.map(Q=>{const{id:ge,label:le,icon:xe}=Q,H=N.includes(ge),z=!H&&L.length<=1;return e.jsxs(uS,{children:[e.jsx(pS,{children:e.jsx(xe,{"aria-hidden":"true"})}),e.jsx(fS,{children:le}),e.jsx(hS,{$archived:H,children:H?"Arquivada":"Visível"}),e.jsxs(mS,{type:"button",$restore:H,disabled:z,title:z?"Mantenha pelo menos uma página no menu":void 0,onClick:()=>y(Q,!H),children:[H?e.jsx(Ax,{}):e.jsx(k2,{}),H?"Restaurar":"Arquivar"]})]},ge)})}),e.jsxs(xS,{children:[e.jsxs("span",{children:[N.length," ",N.length===1?"página arquivada":"páginas arquivadas"]}),N.length>0&&e.jsxs(ue,{type:"button",onClick:q,children:[e.jsx(Ax,{}),"Restaurar todas"]})]})]})]})}const Ix=()=>new Date().toISOString().slice(0,10),Bx=r=>r?new Date(`${r.slice(0,10)}T12:00:00`).toLocaleDateString("pt-BR"):"Não definida";function jS({saving:r,onCreate:a,onValidationError:s}){const[l,c]=x.useState(""),[p,h]=x.useState(""),[f,g]=x.useState("medium"),[_,b]=x.useState("diaria"),[k,C]=x.useState(Ix()),[N,O]=x.useState(""),[$,V]=x.useState(["",""]);function R(F,ne){V(X=>X.map((L,oe)=>oe===F?ne:L))}function j(){c(""),h(""),g("medium"),b("diaria"),C(Ix()),O(""),V(["",""])}async function T(F){F.preventDefault(),s("");const ne=$.map(L=>L.trim()).filter(Boolean);if(!l.trim()){s("Informe o título da tarefa.");return}if(!ne.length){s("Adicione pelo menos um item à tarefa.");return}if(N&&k&&N<k){s("A data final não pode ser anterior à data inicial.");return}await a({title:l.trim(),description:p.trim()||null,priority:f,frequencia:_,start_date:k||void 0,end_date:N||null,items:ne})&&j()}return e.jsxs(e.Fragment,{children:[e.jsx(Pr,{children:e.jsxs("div",{children:[e.jsx("h1",{children:"Nova tarefa"}),e.jsx("p",{children:"Organize seu dia adicionando tarefas e atividades."})]})}),e.jsxs(gf,{children:[e.jsxs(Ie,{children:[e.jsxs(Fe,{children:[e.jsx(gt,{size:19,color:"var(--primary)"})," Criar tarefa"]}),e.jsxs("form",{onSubmit:F=>void T(F),children:[e.jsxs(Z,{children:["Título da tarefa *",e.jsx("input",{value:l,onChange:F=>c(F.target.value),maxLength:200,placeholder:"Ex.: Estudar programação",required:!0})]}),e.jsxs(Z,{children:["Descrição ",e.jsx("small",{children:"(opcional)"}),e.jsx("textarea",{value:p,onChange:F=>h(F.target.value),maxLength:1e4,placeholder:"Descreva o objetivo desta tarefa..."})]}),e.jsxs(Z,{children:["Prioridade",e.jsxs(nn,{value:f,onChange:F=>g(F.target.value),children:[e.jsx("option",{value:"high",children:"Alta"}),e.jsx("option",{value:"medium",children:"Média"}),e.jsx("option",{value:"low",children:"Baixa"})]})]}),e.jsxs(Z,{children:["Frequência",e.jsxs(nn,{value:_,onChange:F=>b(F.target.value),children:[e.jsx("option",{value:"diaria",children:"Dia"}),e.jsx("option",{value:"semana",children:"Semana"}),e.jsx("option",{value:"mensal",children:"Mês"})]})]}),e.jsxs(C1,{children:[e.jsxs(Z,{children:["Data de início",e.jsx("input",{type:"date",value:k,onChange:F=>C(F.target.value)})]}),e.jsxs(Z,{children:["Data de fim ",e.jsx("small",{children:"(opcional)"}),e.jsx("input",{type:"date",min:k||void 0,value:N,onChange:F=>O(F.target.value)})]})]}),e.jsxs(Fe,{style:{marginTop:8,marginBottom:6},children:["Itens da tarefa * ",e.jsx(M2,{size:15,color:"var(--muted)"})]}),e.jsx(In,{children:"Adicione as atividades que você quer acompanhar."}),e.jsxs(vf,{children:[$.map((F,ne)=>e.jsxs(yf,{children:[e.jsx(jf,{children:ne+1}),e.jsx(jc,{"aria-label":`Item ${ne+1}`,value:F,maxLength:200,onChange:X=>R(ne,X.target.value),placeholder:"Nome da atividade"}),e.jsx(ue,{type:"button",$variant:"danger","aria-label":"Remover item",disabled:$.length<=1,onClick:()=>V(X=>X.filter((L,oe)=>oe!==ne)),children:e.jsx($r,{})})]},ne)),e.jsx("div",{children:e.jsxs(ue,{type:"button",onClick:()=>V(F=>F.length<100?[...F,""]:F),disabled:$.length>=100,children:[e.jsx(gt,{}),"Adicionar item"]})})]}),e.jsxs(bf,{children:[e.jsxs(ue,{type:"button",onClick:j,children:[e.jsx(pr,{}),"Limpar"]}),e.jsxs(ue,{type:"submit",$variant:"primary",disabled:r,children:[r?e.jsx(Ze,{className:"spin"}):e.jsx(Eo,{}),r?"Salvando...":"Salvar tarefa"]})]})]})]}),e.jsxs(Ie,{children:[e.jsx(Fe,{children:"Prévia da tarefa"}),e.jsxs(wf,{children:[e.jsxs(_f,{children:[e.jsx(er,{size:23}),l.trim()||"Título da tarefa"]}),e.jsx(In,{children:p.trim()||"A descrição aparecerá aqui."}),e.jsxs(kf,{children:[e.jsxs("span",{children:[e.jsx(We,{size:15,style:{verticalAlign:"middle",marginRight:7}}),"Início: ",Bx(k)]}),e.jsxs("span",{children:[e.jsx(We,{size:15,style:{verticalAlign:"middle",marginRight:7}}),"Fim: ",Bx(N)]}),e.jsxs("span",{children:[e.jsx(fo,{size:15,style:{verticalAlign:"middle",marginRight:7}}),"Frequência: ",_==="diaria"?"Dia":_==="semana"?"Semana":"Mês"]}),e.jsxs("span",{children:[e.jsx(fo,{size:15,style:{verticalAlign:"middle",marginRight:7}}),"Status: Ativa"]})]})]}),e.jsx(Fe,{children:"Itens adicionados"}),$.some(F=>F.trim())?$.map((F,ne)=>F.trim()&&e.jsxs(E1,{children:[e.jsx("input",{type:"checkbox",disabled:!0}),e.jsx("span",{children:F}),e.jsx(Rr,{children:"Pendente"})]},ne)):e.jsx(In,{children:"Os itens aparecerão aqui enquanto você digita."})]})]})]})}const bS=m.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
  margin-bottom: 22px;
  @media (max-width: 520px) { grid-template-columns: 1fr; }
`,qx=m.div`
  display: grid;
  grid-template-columns: 42px minmax(0, 1fr);
  align-items: center;
  gap: 12px;
  padding: 16px 18px;
  border: 1px solid var(--border);
  border-radius: 14px;
  background: linear-gradient(135deg, var(--surface), var(--surface-raised));
  box-shadow: 0 5px 18px var(--shadow);
  > div > span { display: block; color: var(--muted); font-size: 12px; }
  > div > strong { display: block; margin-top: 3px; color: var(--text); font-size: 25px; line-height: 1.2; font-variant-numeric: tabular-nums; }
`,Ux=m.span`
  display: grid;
  width: 42px;
  height: 42px;
  place-items: center;
  border-radius: 12px;
  color: ${({$tone:r})=>r==="green"?"var(--success)":"var(--primary-strong)"};
  background: ${({$tone:r})=>r==="green"?"var(--success-soft)":"color-mix(in srgb, var(--primary) 13%, var(--surface))"};
  svg { width: 19px; height: 19px; }
`,wS=m.div`
  display: grid;
  gap: 12px;
`,_S=m.article`
  display: grid;
  gap: 10px;
  padding: 17px 18px;
  border: 1px solid var(--success-border);
  border-left: 3px solid var(--success);
  border-radius: var(--radius-lg);
  background: linear-gradient(135deg, color-mix(in srgb, var(--success) 4%, var(--surface)), var(--surface));
  box-shadow: 0 5px 18px var(--shadow);
`,kS=m.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  h2 { margin: 0; color: var(--text); font-size: 14px; line-height: 1.45; overflow-wrap: anywhere; }
`,SS=m.div`
  display: flex;
  min-width: 0;
  align-items: flex-start;
  gap: 10px;
  padding: 10px 11px;
  border: 1px solid var(--success-border);
  border-radius: 9px;
  color: var(--text);
  background: color-mix(in srgb, var(--success) 5%, var(--surface-raised));
  font-size: 12px;
  line-height: 1.45;
  svg { flex: 0 0 auto; color: var(--success); }
  span { min-width: 0; flex: 1; overflow-wrap: anywhere; }
  time { color: var(--muted); font-size: 11px; white-space: nowrap; }
  @media (max-width: 500px) { flex-wrap: wrap; }
`,CS=m.div`
  display: flex;
  align-items: flex-start;
  gap: 9px;
  padding: 13px 15px;
  margin-bottom: 16px;
  border: 1px solid color-mix(in srgb, var(--primary) 24%, var(--border));
  border-radius: 10px;
  color: var(--muted);
  background: color-mix(in srgb, var(--primary) 6%, var(--surface-raised));
  font-size: 12px;
  line-height: 1.5;
  svg { flex: 0 0 auto; color: var(--primary-strong); }
`,ES=r=>r?new Date(`${r.slice(0,10)}T12:00:00`).toLocaleDateString("pt-BR",{weekday:"long",day:"numeric",month:"long",year:"numeric"}):"Hoje",$S=r=>r?new Date(r).toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"}):"";function N1({dailyRecords:r,loading:a,onNavigate:s}){var h;const l=x.useMemo(()=>r.map(f=>({...f,items:f.items.filter(g=>g.is_completed)})).filter(f=>f.items.length>0),[r]),c=l.reduce((f,g)=>f+g.items.length,0),p=(h=r[0])==null?void 0:h.record_date;return e.jsxs(e.Fragment,{children:[e.jsxs(Pr,{children:[e.jsxs("div",{children:[e.jsx("h1",{children:"Atividades concluídas"}),e.jsx("p",{children:ES(p)})]}),e.jsxs(ue,{onClick:()=>s("/today"),children:[e.jsx(We,{}),"Ver tarefas de hoje"]})]}),e.jsxs(bS,{"aria-label":"Resumo das atividades concluídas",children:[e.jsxs(qx,{children:[e.jsx(Ux,{$tone:"green",children:e.jsx(tn,{})}),e.jsxs("div",{children:[e.jsx("span",{children:"Atividades concluídas hoje"}),e.jsx("strong",{children:c})]})]}),e.jsxs(qx,{children:[e.jsx(Ux,{$tone:"blue",children:e.jsx(er,{})}),e.jsxs("div",{children:[e.jsx("span",{children:"Tarefas com conclusão"}),e.jsx("strong",{children:l.length})]})]})]}),e.jsxs(CS,{children:[e.jsx(hn,{size:16}),e.jsx("span",{children:"Esta página mostra as atividades marcadas como concluídas nos registros reais de hoje."})]}),a?e.jsxs(Ge,{children:[e.jsx(Ze,{}),e.jsx("p",{children:"Carregando atividades concluídas..."})]}):l.length===0?e.jsx(Ie,{children:e.jsxs(Ge,{children:[e.jsx(tn,{size:32}),e.jsx("h3",{children:"Nenhuma atividade concluída hoje"}),e.jsx("p",{children:"Quando marcar atividades como concluídas, elas aparecerão nesta página."}),e.jsx("div",{style:{marginTop:16},children:e.jsx(ue,{$variant:"primary",onClick:()=>s("/today"),children:"Ir para Hoje"})})]})}):e.jsx(wS,{children:l.map(f=>e.jsxs(_S,{children:[e.jsxs(kS,{children:[e.jsx("h2",{children:f.task_title}),e.jsxs(Rr,{$done:!0,children:[f.items.length," ",f.items.length===1?"concluída":"concluídas"]})]}),f.items.map(g=>e.jsxs(SS,{children:[e.jsx(tn,{size:17}),e.jsx("span",{children:g.title}),g.completed_at&&e.jsx("time",{children:$S(g.completed_at)})]},g.id))]},`${f.task_id}-${f.record_date}`))})]})}const RS=m.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 16px 18px;
  margin-bottom: 20px;
  border: 1px solid var(--border);
  border-radius: 12px;
  color: var(--muted);
  background: var(--surface-raised);
  font-size: 13px;
  line-height: 1.55;
  svg {
    flex: 0 0 auto;
    color: var(--primary);
  }
  strong {
    color: var(--text);
  }
`,PS=m(Ie)`
  margin-bottom: 20px;
`,zS=m.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(210px, 0.45fr);
  gap: 16px;
  @media (max-width: 680px) {
    grid-template-columns: 1fr;
    gap: 0;
  }
`,NS=m.div`
  display: grid;
  gap: 15px;
`,MS=m.article`
  display: grid;
  gap: 16px;
  padding: 22px;
  border: 1px solid var(--border);
  border-left: 3px solid var(--primary);
  border-radius: 14px;
  background: var(--surface);
  box-shadow: 0 4px 14px var(--shadow);
  transition:
    border-color 0.15s ease,
    box-shadow 0.15s ease,
    transform 0.15s ease;
  &:hover {
    border-color: color-mix(in srgb, var(--primary) 38%, var(--border));
    box-shadow: 0 10px 26px var(--shadow);
    transform: translateY(-1px);
  }
  @media (max-width: 520px) {
    padding: 17px;
  }
`,AS=m.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 14px;
  @media (max-width: 560px) {
    flex-direction: column;
  }
`,TS=m.div`
  display: flex;
  min-width: 0;
  align-items: flex-start;
  gap: 11px;
  > svg {
    flex: 0 0 auto;
    margin-top: 1px;
    color: var(--primary-strong);
  }
  h2 {
    margin: 0;
    color: var(--text);
    font-size: 17px;
    line-height: 1.4;
    overflow-wrap: anywhere;
  }
  p {
    margin: 5px 0 0;
    color: var(--muted);
    font-size: 12px;
    line-height: 1.55;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
  }
`,DS=m.div`
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  @media (max-width: 560px) {
    width: 100%;
  }
`,Ml=m(ue)`
  min-height: 34px;
  padding: 7px 10px;
  gap: 6px;
  font-size: 11px;
  svg {
    width: 15px;
    height: 15px;
  }
`,FS=m.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px 14px;
  color: var(--muted);
  font-size: 11px;
  svg {
    width: 14px;
    height: 14px;
    color: var(--muted);
  }
  border-top: 1px solid var(--border);
  padding-top: 14px;
`,Hx=m.select`
  min-height: 32px;
  padding: 5px 9px;
  border: 1px solid var(--border);
  border-radius: 8px;
  color: var(--text);
  background: var(--surface-raised);
  font: inherit;
  &:focus-visible {
    outline: 3px solid var(--focus);
    outline-offset: 1px;
  }
`,LS=m.div`
  display: grid;
  gap: 7px;
  padding: 13px 14px;
  border-radius: 10px;
  background: var(--surface-raised);
`,OS=m.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  color: var(--muted);
  font-size: 11px;
  strong {
    color: var(--text);
  }
`,IS=m.div`
  height: 7px;
  overflow: hidden;
  border-radius: 999px;
  background: var(--border);
  div {
    height: 100%;
    border-radius: inherit;
    background: var(--primary);
    transition: width 0.2s ease;
  }
`,BS=m.div`
  display: grid;
  gap: 8px;
`,qS=m.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  color: var(--text);
  font-size: 13px;
  font-weight: 800;
  small {
    color: var(--muted);
    font-size: 11px;
    font-weight: 500;
  }
`,US=m.div`
  display: flex;
  gap: 8px;
  padding-top: 4px;
  border-top: 1px solid var(--border);
  @media (max-width: 520px) {
    flex-direction: column;
  }
`,HS=m.div`
  display: flex;
  min-width: 0;
  align-items: center;
  gap: 10px;
  padding: 10px 11px;
  border: 1px solid ${({$completed:r})=>r?"var(--success-border)":"var(--border)"};
  border-radius: 9px;
  color: ${({$completed:r})=>r?"var(--muted)":"var(--text)"};
  background: ${({$completed:r})=>r?"var(--success-soft)":"var(--surface-raised)"};
  font-size: 12px;
  span {
    min-width: 0;
    flex: 1;
    overflow-wrap: anywhere;
    text-decoration: ${({$completed:r})=>r?"line-through":"none"};
  }
  > svg {
    flex: 0 0 auto;
    color: ${({$completed:r})=>r?"var(--success)":"var(--muted)"};
  }
`,VS=m.div`
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  gap: 5px;
`,Vx=m.button`
  display: grid;
  width: 30px;
  height: 30px;
  place-items: center;
  border: 1px solid var(--border);
  border-radius: 7px;
  color: var(--muted);
  background: var(--surface);
  cursor: pointer;
  &:hover:not(:disabled) {
    color: var(--primary);
    background: var(--surface-raised);
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  svg {
    width: 15px;
    height: 15px;
  }
`,WS=m.form`
  display: flex;
  flex: 1;
  gap: 8px;
  input {
    min-width: 0;
    flex: 1;
  }
`,GS=m(Ie)`
  margin-top: 18px;
`;function Wx(){const r=new Date;return r.setFullYear(r.getFullYear()+1),[r.getFullYear(),String(r.getMonth()+1).padStart(2,"0"),String(r.getDate()).padStart(2,"0")].join("-")}function ho(r){return r.slice(0,10)}function QS(r){return new Date(`${ho(r)}T12:00:00`).toLocaleDateString("pt-BR")}function KS(r){const a=new Date(`${ho(r)}T00:00:00`),s=new Date;return s.setHours(0,0,0,0),Math.ceil((a.getTime()-s.getTime())/864e5)}function YS(r){return r<0?`Atrasado há ${Math.abs(r)} ${Math.abs(r)===1?"dia":"dias"}`:r===0?"Prazo hoje":r===1?"Falta 1 dia":`Faltam ${r} dias`}function JS({goals:r,loading:a,saving:s,onCreate:l,onUpdate:c,onDelete:p,onAddStep:h,onToggleStep:f,onDeleteStep:g}){const[_,b]=x.useState(null),[k,C]=x.useState(!1),[N,O]=x.useState(""),[$,V]=x.useState(""),[R,j]=x.useState(Wx),[T,F]=x.useState("pendente"),[ne,X]=x.useState([""]),[L,oe]=x.useState({}),[S,y]=x.useState([]),q=x.useMemo(()=>[...r].sort((w,re)=>ho(w.target_date).localeCompare(ho(re.target_date))),[r]),de=r.filter(w=>w.status==="concluido").length,be=r.filter(w=>w.status==="em_andamento").length;function ke(){b(null),C(!1),O(""),V(""),j(Wx()),F("pendente"),X([""])}function ze(){ke(),C(!0)}function Q(w){b(w),C(!0),O(w.title),V(w.description??""),j(ho(w.target_date)),F(w.status),X([])}function ge(w,re){X(ae=>ae.map((M,se)=>se===w?re:M))}async function le(w){w.preventDefault();const re=ne.map(M=>M.trim()).filter(Boolean);if(!N.trim()||!_&&!re.length)return;(_?await c(_.id,{title:N.trim(),description:$.trim()||null,target_date:R,status:T}):await l({title:N.trim(),description:$.trim()||null,target_date:R,status:T,steps:re.map((M,se)=>({title:M,status:"pendente",step_order:se+1}))}))&&ke()}async function xe(w,re){w.preventDefault();const ae=String(re.id),M=(L[ae]??"").trim();M&&await h(re.id,M)&&oe(se=>({...se,[ae]:""}))}async function H(w,re){const ae=String(re.id);y(M=>[...M,ae]);try{await f(w.id,re,re.status!=="concluido")}finally{y(M=>M.filter(se=>se!==ae))}}async function z(w,re){if(w.steps.length<=1||!window.confirm(`Remover a etapa “${re.title}” deste objetivo?`))return;const ae=String(re.id);y(M=>[...M,ae]);try{await g(w.id,re)}finally{y(M=>M.filter(se=>se!==ae))}}return e.jsxs(e.Fragment,{children:[e.jsxs(Pr,{children:[e.jsxs("div",{children:[e.jsx("h1",{children:"Objetivos de vida"}),e.jsx("p",{children:"Transforme seus planos em etapas claras e acompanhe seu progresso."})]}),e.jsxs(ue,{$variant:"primary",onClick:k?ke:ze,children:[k?e.jsx(pr,{}):e.jsx(gt,{}),k?"Fechar formulário":"Novo objetivo"]})]}),e.jsxs(RS,{children:[e.jsx(Yi,{size:20}),e.jsxs("span",{children:[e.jsx("strong",{children:"Comece pelo resultado que deseja alcançar."})," Defina uma data realista e divida o caminho em pequenas ações que você possa acompanhar."]})]}),k&&e.jsxs(PS,{children:[e.jsxs(Fe,{children:[e.jsx(Fp,{size:19,color:"var(--primary-strong)"}),_?"Editar objetivo":"Planejar um objetivo"]}),e.jsxs("form",{onSubmit:w=>{le(w)},children:[e.jsxs(zS,{children:[e.jsxs(Z,{children:["Qual objetivo você quer alcançar? *",e.jsx("input",{autoFocus:!0,value:N,onChange:w=>O(w.target.value),maxLength:200,placeholder:"Ex.: Comprar minha casa",required:!0})]}),e.jsxs(Z,{children:["Data prevista *",e.jsx("input",{type:"date",value:R,onChange:w=>j(w.target.value),required:!0})]}),e.jsxs(Z,{children:["Status",e.jsxs(Hx,{value:T,onChange:w=>F(w.target.value),children:[e.jsx("option",{value:"pendente",children:"Pendente"}),e.jsx("option",{value:"em_andamento",children:"Em andamento"}),e.jsx("option",{value:"concluido",children:"Concluído"})]})]})]}),e.jsxs(Z,{children:["Por que esse objetivo é importante? ",e.jsx("small",{children:"(opcional)"}),e.jsx("textarea",{value:$,onChange:w=>V(w.target.value),maxLength:5e3,placeholder:"Descreva o que esse objetivo significa para você e como pretende chegar lá."})]}),!_&&e.jsxs(e.Fragment,{children:[e.jsx(Fe,{style:{marginTop:8,marginBottom:6},children:"Etapas para chegar lá *"}),e.jsx(In,{children:"Escreva ações pequenas, concretas e que você possa concluir uma de cada vez."}),e.jsxs(vf,{style:{marginTop:12},children:[ne.map((w,re)=>e.jsxs(yf,{children:[e.jsx(jf,{children:re+1}),e.jsx(jc,{"aria-label":`Etapa ${re+1}`,value:w,maxLength:200,onChange:ae=>ge(re,ae.target.value),placeholder:re===0?"Ex.: Pesquisar o valor de entrada e os custos":"Próxima ação",required:re===0}),e.jsx(Ml,{type:"button",$variant:"danger","aria-label":`Remover etapa ${re+1}`,disabled:ne.length<=1,onClick:()=>X(ae=>ae.filter((M,se)=>se!==re)),children:e.jsx($r,{})})]},re)),e.jsx("div",{children:e.jsxs(ue,{type:"button",onClick:()=>X(w=>w.length<50?[...w,""]:w),disabled:ne.length>=50,children:[e.jsx(gt,{}),"Adicionar etapa"]})})]})]}),_&&e.jsx(In,{children:"As etapas existentes continuam no objetivo. Você pode adicionar, concluir ou remover etapas na lista abaixo."}),e.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:9,flexWrap:"wrap",marginTop:16},children:[e.jsx(ue,{type:"button",onClick:ke,children:"Cancelar"}),e.jsxs(ue,{type:"submit",$variant:"primary",disabled:s,children:[s?e.jsx(Ze,{className:"spin"}):e.jsx(Eo,{}),s?"Salvando...":_?"Salvar alterações":"Salvar objetivo"]})]})]})]}),e.jsxs(XS,{"aria-label":"Resumo dos objetivos",children:[e.jsxs(Ou,{children:[e.jsx(Iu,{$tone:"blue",children:e.jsx(Yi,{})}),e.jsxs("div",{children:[e.jsx("span",{children:"Objetivos ativos"}),e.jsx("strong",{children:r.length-de})]})]}),e.jsxs(Ou,{children:[e.jsx(Iu,{$tone:"green",children:e.jsx(tn,{})}),e.jsxs("div",{children:[e.jsx("span",{children:"Objetivos alcançados"}),e.jsx("strong",{children:de})]})]}),e.jsxs(Ou,{children:[e.jsx(Iu,{$tone:"blue",children:e.jsx(Fp,{})}),e.jsxs("div",{children:[e.jsx("span",{children:"Em andamento"}),e.jsx("strong",{children:be})]})]})]}),a?e.jsxs(Ge,{children:[e.jsx(Ze,{}),e.jsx("p",{children:"Carregando objetivos..."})]}):q.length===0?e.jsx(GS,{children:e.jsxs(Ge,{children:[e.jsx(Yi,{size:34}),e.jsx("h3",{children:"Seus objetivos começam aqui"}),e.jsx("p",{children:"Registre um objetivo, escolha uma data prevista e monte um plano de ação para alcançá-lo."}),e.jsx("div",{style:{marginTop:16},children:e.jsxs(ue,{$variant:"primary",onClick:ze,children:[e.jsx(gt,{}),"Planejar meu primeiro objetivo"]})})]})}):e.jsx(NS,{children:q.map(w=>{const re=[...w.steps].sort((U,pe)=>U.step_order-pe.step_order),ae=re.filter(U=>U.status==="concluido").length,M=re.length?Math.round(ae/re.length*100):0,se=w.status==="concluido",ve=KS(w.target_date),je=String(w.id);return e.jsxs(MS,{children:[e.jsxs(AS,{children:[e.jsxs(TS,{children:[e.jsx(Yi,{size:20}),e.jsxs("div",{children:[e.jsx("h2",{children:w.title}),w.description&&e.jsx("p",{children:w.description})]})]}),e.jsxs(DS,{children:[e.jsxs(Ml,{onClick:()=>Q(w),children:[e.jsx(rn,{}),"Editar"]}),e.jsxs(Ml,{$variant:"danger",onClick:()=>{window.confirm(`Excluir o objetivo “${w.title}” e todas as etapas?`)&&p(w)},children:[e.jsx($r,{}),"Excluir"]})]})]}),e.jsxs(FS,{children:[e.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:6},children:[e.jsx(We,{}),"Previsto para ",QS(w.target_date)]}),e.jsxs(Hx,{"aria-label":`Status do objetivo ${w.title}`,value:w.status,onChange:U=>{c(w.id,{status:U.target.value})},children:[e.jsx("option",{value:"pendente",children:"Pendente"}),e.jsx("option",{value:"em_andamento",children:"Em andamento"}),e.jsx("option",{value:"concluido",children:"Concluído"})]}),!se&&ve<0&&e.jsx(Rr,{$done:!1,children:"Prazo vencido"}),!se&&ve>=0&&e.jsx("span",{children:YS(ve)})]}),e.jsxs(LS,{children:[e.jsxs(OS,{children:[e.jsx("span",{children:"Progresso do plano"}),e.jsxs("strong",{children:[ae," de ",re.length," etapas ·"," ",M,"%"]})]}),e.jsx(IS,{"aria-label":`${M}% concluído`,children:e.jsx("div",{style:{width:`${M}%`}})})]}),e.jsxs(qS,{children:[e.jsx("span",{children:"Plano de ação"}),e.jsxs("small",{children:[re.length," ",re.length===1?"etapa":"etapas"]})]}),e.jsx(BS,{"aria-label":`Etapas para alcançar ${w.title}`,children:re.map(U=>{const pe=S.includes(String(U.id)),ot=U.status==="concluido";return e.jsxs(HS,{$completed:ot,children:[ot?e.jsx(tn,{size:17}):e.jsx(T2,{size:17}),e.jsx("span",{children:U.title}),e.jsxs(VS,{children:[e.jsx(Vx,{type:"button","aria-label":ot?`Reabrir etapa ${U.title}`:`Concluir etapa ${U.title}`,title:ot?"Reabrir etapa":"Marcar como concluída",disabled:pe,onClick:()=>{H(w,U)},children:pe?e.jsx(Ze,{className:"spin"}):e.jsx(en,{})}),e.jsx(Vx,{type:"button","aria-label":`Remover etapa ${U.title}`,title:"Remover etapa",disabled:pe||re.length<=1,onClick:()=>{z(w,U)},children:e.jsx(pr,{})})]})]},U.id)})}),e.jsx(US,{children:e.jsxs(WS,{onSubmit:U=>{xe(U,w)},children:[e.jsx(jc,{"aria-label":`Nova etapa para ${w.title}`,value:L[je]??"",maxLength:200,placeholder:"Adicionar uma próxima ação...",onChange:U=>oe(pe=>({...pe,[je]:U.target.value}))}),e.jsxs(Ml,{type:"submit",$variant:"primary",children:[e.jsx(gt,{}),"Adicionar etapa"]})]})})]},w.id)})})]})}const XS=m.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  margin-bottom: 20px;
  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`,Ou=m.div`
  display: grid;
  grid-template-columns: 42px minmax(0, 1fr);
  align-items: center;
  gap: 12px;
  padding: 15px 17px;
  border: 1px solid var(--border);
  border-radius: 13px;
  background: linear-gradient(135deg, var(--surface), var(--surface-raised));
  box-shadow: 0 4px 14px var(--shadow);
  > div > span {
    display: block;
    color: var(--muted);
    font-size: 12px;
  }
  > div > strong {
    display: block;
    margin-top: 3px;
    color: var(--text);
    font-size: 24px;
  }
`,Iu=m.span`
  display: grid;
  width: 42px;
  height: 42px;
  place-items: center;
  border-radius: 12px;
  background: ${({$tone:r})=>r==="green"?"var(--success-soft)":"color-mix(in srgb, var(--primary) 13%, var(--surface))"};
  color: ${({$tone:r})=>r==="green"?"var(--success)":"var(--primary-strong)"};
  svg {
    width: 19px;
    height: 19px;
  }
`,ZS=m.div`
  display: grid;
  grid-template-columns: minmax(260px, .7fr) minmax(0, 1.5fr);
  align-items: start;
  gap: 18px;
  @media (max-width: 850px) { grid-template-columns: 1fr; }
`,eC=m.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  margin-bottom: 18px;
  @media (max-width: 620px) { grid-template-columns: 1fr; }
`,Bu=m.div`
  display: grid;
  grid-template-columns: 38px minmax(0, 1fr);
  align-items: center;
  gap: 11px;
  padding: 14px 15px;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: linear-gradient(135deg, var(--surface), var(--surface-raised));
  box-shadow: 0 4px 14px rgba(23, 38, 61, .03);
  svg { width: 18px; height: 18px; color: var(--primary); }
  > span { display: grid; width: 38px; height: 38px; place-items: center; border-radius: 11px; background: color-mix(in srgb, var(--primary) 16%, var(--surface)); }
  small { display: block; color: var(--muted); font-size: 11px; }
  strong { display: block; margin-top: 2px; color: var(--text); font-size: 20px; }
`,Gx=m.div`
  height: 6px;
  margin-top: 9px;
  overflow: hidden;
  border-radius: 999px;
  background: var(--border);
  div { height: 100%; border-radius: inherit; background: linear-gradient(90deg, var(--primary), var(--success)); }
`,Qx=m.h2`
  display: flex;
  align-items: center;
  gap: 9px;
  margin: 0 0 15px;
  color: var(--text);
  font-size: 16px;
  svg { color: var(--primary); }
`,tC=m.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 15px;
  @media (max-width: 520px) { flex-direction: column; }
`,rC=m.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  color: var(--muted);
  font-size: 11px;
`,Kx=m.span`
  display: inline-flex;
  align-items: center;
  padding: 5px 8px;
  border-radius: 999px;
  background: var(--surface-raised);
`,nC=m.div`
  display: grid;
  gap: 9px;
`,Yx=m.button`
  display: grid;
  width: 100%;
  gap: 7px;
  padding: 13px;
  border: 1px solid ${({$active:r})=>r?"var(--primary)":"var(--border)"};
  border-radius: 10px;
  color: var(--text);
  background: ${({$active:r})=>r?"color-mix(in srgb, var(--primary) 14%, var(--surface))":"var(--surface)"};
  text-align: left;
  cursor: pointer;
  &:hover { border-color: var(--primary); }
  &:focus-visible { outline: 3px solid var(--primary-soft); outline-offset: 1px; }
`,Jx=m.span`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  font-size: 13px;
  font-weight: 750;
  text-transform: capitalize;
`,Xx=m.span`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  color: var(--muted);
  font-size: 11px;
`,aC=m.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-top: 14px;
  color: var(--muted);
  font-size: 11px;
`,iC=m.div`
  display: grid;
  gap: 8px;
`,sC=m.div`
  display: grid;
  grid-template-columns: 20px minmax(0, 1fr) auto;
  align-items: start;
  gap: 9px;
  padding: 11px 12px;
  border: 1px solid ${({$completed:r})=>r?"var(--success-border)":"var(--border)"};
  border-radius: 9px;
  background: ${({$completed:r})=>r?"#f5fbf7":"var(--surface-raised)"};
  > svg { margin-top: 1px; color: ${({$completed:r})=>r?"var(--success)":"var(--text-subtle)"}; }
`,oC=m.div`
  min-width: 0;
  strong { display: block; color: var(--text); font-size: 12px; line-height: 1.45; overflow-wrap: anywhere; }
  span { display: block; margin-top: 3px; color: var(--muted); font-size: 11px; }
`,lC=m.time`
  color: var(--muted);
  font-size: 11px;
  white-space: nowrap;
`;function Jr(r){return r.slice(0,10)}function ei(r){return new Date(`${Jr(r)}T12:00:00`).toLocaleDateString("pt-BR",{weekday:"long",day:"numeric",month:"long",year:"numeric"})}function cC(r){return r?new Date(r).toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"}):""}function qu(r,a){return a>0?Math.round(r/a*100):0}function M1({mode:r,days:a,periods:s,selectedDay:l,selectedPeriod:c,selectedDate:p,dayDetails:h,pagination:f,loading:g,detailLoading:_,referenceDate:b,onModeChange:k,onPeriodSearch:C,onSelectDate:N,onSelectPeriod:O,onPageChange:$}){const[V,R]=x.useState(()=>b??Jr(new Date().toISOString())),j=x.useMemo(()=>h.map(S=>({...S,items:S.items})),[h]);x.useEffect(()=>{b&&R(b)},[b]);function T(S){S.preventDefault(),V&&C(V)}const F=r==="daily"?l:c,ne=(F==null?void 0:F.completed_items)??0,X=(F==null?void 0:F.pending_items)??0,L=ne+X,oe=(F==null?void 0:F.completion_percentage)==null?qu(ne,L):Math.round(F.completion_percentage);return e.jsxs(e.Fragment,{children:[e.jsx(Pr,{children:e.jsxs("div",{children:[e.jsxs("h1",{children:["Histórico ",r==="week"?"semanal":r==="month"?"mensal":"diário"]}),e.jsx("p",{children:"Consulte o que foi concluído e o que ficou pendente em cada período."})]})}),e.jsx(Ie,{style:{marginBottom:18},children:e.jsxs("div",{style:{display:"flex",alignItems:"flex-end",flexWrap:"wrap",gap:12},children:[e.jsxs(Z,{style:{minWidth:220,marginBottom:0},children:["Visualização",e.jsxs(nn,{value:r,onChange:S=>k(S.target.value),children:[e.jsx("option",{value:"daily",children:"Por dia"}),e.jsx("option",{value:"week",children:"Por semana"}),e.jsx("option",{value:"month",children:"Por mês"})]})]}),e.jsxs("form",{onSubmit:T,style:{display:"flex",alignItems:"flex-end",gap:10,flexWrap:"wrap"},children:[e.jsxs(Z,{style:{minWidth:200,marginBottom:0},children:[r==="daily"?"Data do dia":"Data da semana ou mês",e.jsx("input",{type:"date",value:V,onChange:S=>R(S.target.value),required:!0})]}),e.jsx(ue,{type:"submit",$variant:"primary",disabled:g,children:"Consultar período"}),b&&e.jsx(ue,{type:"button",disabled:g,onClick:()=>C(),children:"Limpar data"})]})]})}),e.jsxs(eC,{"aria-label":"Resumo do histórico",children:[e.jsxs(Bu,{children:[e.jsx("span",{children:e.jsx(We,{})}),e.jsxs("div",{children:[e.jsx("small",{children:r==="daily"?"Dia selecionado":r==="week"?"Semana selecionada":"Mês selecionado"}),e.jsx("strong",{children:F?L:"—"})]})]}),e.jsxs(Bu,{children:[e.jsx("span",{children:e.jsx(tn,{})}),e.jsxs("div",{children:[e.jsx("small",{children:"Itens concluídos"}),e.jsx("strong",{children:F?ne:"—"})]})]}),e.jsxs(Bu,{children:[e.jsx("span",{children:e.jsx(ic,{})}),e.jsxs("div",{children:[e.jsx("small",{children:"Progresso"}),e.jsx("strong",{children:F?`${oe}%`:"—"})]})]})]}),e.jsxs(ZS,{children:[e.jsxs(Ie,{children:[e.jsxs(Qx,{children:[e.jsx(hn,{size:18}),r==="week"?"Dias da semana":r==="month"?"Dias do mês":"Dias anteriores"]}),g?e.jsxs(Ge,{children:[e.jsx(Ze,{}),e.jsx("p",{children:"Carregando histórico..."})]}):(r==="daily"?a.length===0:s.length===0)?e.jsxs(Ge,{children:[e.jsx(I2,{size:30}),e.jsx("h3",{children:r==="daily"?"Sem histórico anterior":"Nenhum período encontrado"}),e.jsx("p",{children:r==="daily"?"Os registros diários anteriores aparecerão aqui.":"Os períodos com registros históricos aparecerão aqui."})]}):e.jsxs(e.Fragment,{children:[e.jsx(nC,{children:r==="daily"?a.map(S=>e.jsxs(Yx,{type:"button",$active:Jr(p)===Jr(S.date),"aria-pressed":Jr(p)===Jr(S.date),onClick:()=>N(Jr(S.date)),children:[e.jsxs(Jx,{children:[e.jsx("span",{children:ei(S.date)}),e.jsx(We,{size:15})]}),e.jsxs(Xx,{children:[e.jsxs("span",{children:[S.completed_items," concluídas · ",S.pending_items," pendentes"]}),e.jsx("span",{children:S.completion_percentage==null?"—":`${Math.round(S.completion_percentage)}%`})]}),e.jsx(Gx,{children:e.jsx("div",{style:{width:`${S.completion_percentage==null?qu(S.completed_items,S.completed_items+S.pending_items):Math.round(S.completion_percentage)}%`}})})]},Jr(S.date))):s.map(S=>e.jsxs(Yx,{type:"button",$active:Jr((c==null?void 0:c.start_date)??"")===Jr(S.start_date),"aria-pressed":Jr((c==null?void 0:c.start_date)??"")===Jr(S.start_date),onClick:()=>O(S),children:[e.jsxs(Jx,{children:[e.jsxs("span",{children:[r==="week"?"Semana":"Mês",": ",ei(S.start_date)," – ",ei(S.end_date)]}),e.jsx(We,{size:15})]}),e.jsxs(Xx,{children:[e.jsxs("span",{children:[S.completed_items," concluídas · ",S.pending_items," pendentes"]}),e.jsx("span",{children:S.completion_percentage==null?"—":`${Math.round(S.completion_percentage)}%`})]}),e.jsx(Gx,{children:e.jsx("div",{style:{width:`${S.completion_percentage==null?qu(S.completed_items,S.completed_items+S.pending_items):Math.round(S.completion_percentage)}%`}})})]},Jr(S.start_date)))}),e.jsxs(aC,{children:[e.jsxs("span",{children:[f.total," ",r==="daily"?f.total===1?"dia":"dias":f.total===1?"período":"períodos"," · Página ",f.page," de ",f.totalPages||1]}),e.jsxs("div",{style:{display:"flex",gap:6},children:[e.jsx(ue,{type:"button","aria-label":"Página anterior do histórico",disabled:!f.hasPreviousPage||g,onClick:()=>$(f.page-1),children:e.jsx(jo,{})}),e.jsx(ue,{type:"button","aria-label":"Próxima página do histórico",disabled:!f.hasNextPage||g,onClick:()=>$(f.page+1),children:e.jsx(rs,{})})]})]})]})]}),e.jsxs(Ie,{children:[e.jsxs(tC,{children:[e.jsxs(Qx,{children:[e.jsx(er,{size:18}),c?`${r==="week"?"Semana":"Mês"}: ${ei(c.start_date)} – ${ei(c.end_date)}`:p?ei(p):"Detalhes do dia"]}),F&&e.jsxs(rC,{children:[e.jsxs(Kx,{children:[ne," concluídas"]}),e.jsxs(Kx,{children:[X," pendentes"]})]})]}),_?e.jsxs(Ge,{children:[e.jsx(Ze,{}),e.jsx("p",{children:"Carregando atividades do dia..."})]}):p?j.length===0?e.jsxs(Ge,{children:[e.jsx(tn,{size:30}),e.jsx("h3",{children:"Nenhuma atividade registrada"}),e.jsx("p",{children:"Não foram encontrados itens para este dia."})]}):e.jsx("div",{style:{display:"grid",gap:16},children:j.map(S=>e.jsxs("section",{"aria-label":S.task_title,children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:10,marginBottom:8},children:[e.jsx("strong",{style:{color:"var(--text)",fontSize:13},children:S.task_title}),e.jsxs(Rr,{$done:S.completed_items===S.total_items&&S.total_items>0,children:[S.completed_items,"/",S.total_items," concluídas"]})]}),e.jsx(iC,{children:S.items.map(y=>e.jsxs(sC,{$completed:y.is_completed,children:[y.is_completed?e.jsx(tn,{size:17}):e.jsx("span",{"aria-hidden":"true",children:"•"}),e.jsxs(oC,{children:[e.jsx("strong",{children:y.title}),e.jsxs("span",{children:[y.is_completed?"Concluída":"Pendente",y.record_date?` · ${ei(y.record_date)}`:""]})]}),y.completed_at&&e.jsx(lC,{children:cC(y.completed_at)})]},y.id))})]},String(S.task_id)))}):e.jsxs(Ge,{children:[e.jsx(We,{size:30}),e.jsx("p",{children:"Selecione um dia para ver as atividades."})]})]})]})]})}const Uu=[{id:"monthly",label:"Mensal",price:29.9,currency:"BRL",interval:"month",description:"Cobrado todo mês · cancele quando quiser"},{id:"annual",label:"Anual",price:299.9,currency:"BRL",interval:"year",description:"Melhor custo · pagamento único no ano"}],Qs=new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}),Zx=m.main`
  position: relative;
  display: grid;
  min-height: 100vh;
  place-items: center;
  padding: 32px 18px;
  background:
    radial-gradient(ellipse at 16% 14%, rgba(37, 99, 235, .1), transparent 38%),
    radial-gradient(ellipse at 88% 90%, rgba(2, 132, 199, .06), transparent 35%),
    var(--page-bg);
`,eg=m.div`
  position: absolute;
  top: 20px;
  right: 20px;
`,tg=m.section`
  width: min(100%, ${({$wide:r})=>r?"560px":"440px"});
  padding: 38px;
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  background: var(--surface);
  box-shadow: 0 24px 70px var(--shadow);
  transition: width .2s ease;
  @media (max-width: 520px) { padding: 28px 22px; border-radius: 18px; }
`,rg=m.div`
  display: flex;
  align-items: center;
  gap: 11px;
  margin-bottom: 34px;
  color: var(--text);
  font-size: 18px;
  font-weight: 800;
  letter-spacing: -.3px;
`,ng=m.span`
  display: grid;
  width: 42px;
  height: 42px;
  place-items: center;
  border-radius: 13px;
  color: var(--primary-contrast);
  background: var(--primary);
  box-shadow: 0 7px 16px var(--shadow);
  svg { width: 23px; height: 23px; }
`,ag=m.div`
  margin-bottom: 26px;
  h1 { margin: 0 0 8px; color: var(--text); font-size: 27px; letter-spacing: -.7px; }
  p { margin: 0; color: var(--muted); font-size: 14px; line-height: 1.6; }
`,dC=m.form`
  display: grid;
  gap: 18px;
`,En=m.label`
  display: grid;
  gap: 8px;
  color: var(--text);
  font-size: 14px;
  font-weight: 700;
`,Hu=m.span`
  position: relative;
  display: flex;
  align-items: center;
  color: var(--muted);
  > svg { position: absolute; left: 14px; width: 18px; height: 18px; pointer-events: none; }
  input {
    width: 100%;
    height: 48px;
    padding: 0 44px;
    border: 1px solid var(--border);
    border-radius: 10px;
    outline: none;
    color: var(--text);
    background: var(--surface-raised);
    font-size: 14px;
    font-weight: 400;
    transition: border-color .15s ease, box-shadow .15s ease;
  }
  input::placeholder { color: var(--muted); }
  input:focus { border-color: var(--primary); box-shadow: 0 0 0 3px var(--focus); }
`,uC=m.button`
  position: absolute;
  right: 8px;
  display: grid;
  width: 34px;
  height: 34px;
  place-items: center;
  border: 0;
  border-radius: 8px;
  color: var(--muted);
  background: transparent;
  &:hover { color: var(--text); background: var(--surface-raised); }
  &:focus-visible { outline: 3px solid var(--focus); }
  svg { width: 18px; height: 18px; }
`,pC=m.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  color: var(--muted);
  font-size: 12px;
`,fC=m.label`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  input { width: 15px; height: 15px; margin: 0; accent-color: var(--primary); }
`,ig=m.fieldset`
  margin: 0;
  padding: 0;
  border: 0;
  legend {
    margin-bottom: 10px;
    color: var(--text);
    font-size: 13px;
    font-weight: 700;
  }
`,sg=m.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  @media (max-width: 520px) { grid-template-columns: 1fr; }
`,A1=m.label`
  position: relative;
  display: grid;
  gap: 6px;
  padding: 14px 14px 13px;
  border: 1.5px solid ${({$active:r})=>r?"var(--primary)":"var(--border)"};
  border-radius: 14px;
  background: ${({$active:r})=>r?"color-mix(in srgb, var(--primary) 12%, var(--surface))":"var(--surface-raised)"};
  cursor: pointer;
  transition: border-color .15s ease, background .15s ease, transform .15s ease;
  &:hover { transform: translateY(-1px); border-color: var(--primary); }
  input { position: absolute; opacity: 0; pointer-events: none; }
  strong {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    color: var(--text);
    font-size: 14px;
  }
  em {
    color: var(--text);
    font-size: 22px;
    font-style: normal;
    font-weight: 850;
    letter-spacing: -.04em;
    span { margin-left: 3px; color: var(--muted); font-size: 12px; font-weight: 600; }
  }
  p {
    margin: 0;
    color: var(--muted);
    font-size: 11px;
    line-height: 1.45;
  }
`,hC=m.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 3px 7px;
  border-radius: var(--radius-full);
  color: var(--primary-strong);
  background: var(--primary-soft);
  font-size: 10px;
  font-weight: 800;
  svg { width: 11px; height: 11px; }
`,og=m(A1)`
  strong {
    justify-content: flex-start;
    gap: 8px;
    svg { width: 16px; height: 16px; color: var(--primary-strong); }
  }
`,mC=m.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  padding: 14px;
  border: 1px solid var(--border);
  border-radius: 14px;
  background: var(--surface-raised);
  ${En}:first-child, ${En}:nth-child(2) { grid-column: 1 / -1; }
  @media (max-width: 520px) {
    grid-template-columns: 1fr;
    ${En} { grid-column: auto; }
  }
`,Ks=m.input`
  width: 100%;
  height: 44px;
  padding: 0 12px;
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  outline: none;
  color: var(--text);
  background: var(--surface);
  font-size: 14px;
  &:focus { border-color: var(--primary); box-shadow: 0 0 0 3px var(--focus); }
`,xC=m.p`
  margin: 0;
  padding: 12px 14px;
  border: 1px solid color-mix(in srgb, var(--primary) 28%, var(--border));
  border-radius: 12px;
  color: var(--muted);
  background: color-mix(in srgb, var(--primary) 8%, var(--surface));
  font-size: 12px;
  line-height: 1.55;
`,gC=m.div`
  display: grid;
  gap: 12px;
  padding: 16px;
  border: 1px solid var(--border);
  border-radius: 14px;
  background: var(--surface-raised);
  h2 { margin: 0; color: var(--text); font-size: 18px; }
  p { margin: 0; color: var(--muted); font-size: 13px; line-height: 1.55; }
  strong { color: var(--text); }
`,lg=m(ue)`
  width: 100%;
  min-height: 48px;
  margin-top: 3px;
  border-radius: 10px;
  background: var(--primary);
  color: var(--primary-contrast);
  font-size: 14px;
  &:hover:not(:disabled) { background: var(--primary-strong); }
`,vC=m.p`
  margin: 23px 0 0;
  color: var(--muted);
  font-size: 12px;
  line-height: 1.6;
  text-align: center;
  button {
    padding: 0;
    border: 0;
    color: var(--primary-strong);
    background: transparent;
    font: inherit;
    font-weight: 700;
  }
  button:hover { text-decoration: underline; }
  button:focus-visible { outline: 3px solid var(--focus); outline-offset: 3px; border-radius: 2px; }
`;function lo(r){return r.replace(/\D/g,"")}function yC(r){return lo(r).slice(0,16).replace(/(\d{4})(?=\d)/g,"$1 ").trim()}function cg(r){return r.interval==="year"||r.id==="annual"?"/ano":"/mês"}function jC({onLogin:r,onRegister:a}){const[s,l]=x.useState("login"),[c,p]=x.useState(""),[h,f]=x.useState(""),[g,_]=x.useState(""),[b,k]=x.useState(Uu),[C,N]=x.useState({pix:!0,card:!0}),[O,$]=x.useState("annual"),[V,R]=x.useState("pix"),[j,T]=x.useState(""),[F,ne]=x.useState(""),[X,L]=x.useState(""),[oe,S]=x.useState(""),[y,q]=x.useState(""),[de,be]=x.useState(!1),[ke,ze]=x.useState(!1),[Q,ge]=x.useState(""),[le,xe]=x.useState(null);x.useEffect(()=>{let w=!0;return o_().then(re=>{var M,se;if(!w)return;const ae=(M=re.plans)!=null&&M.length?re.plans:Uu;k(ae),re.payment_methods&&N(re.payment_methods),ae.some(ve=>ve.id===O)||$(((se=ae[0])==null?void 0:se.id)??"annual"),re.payment_methods&&!re.payment_methods.pix&&re.payment_methods.card&&R("card")}).catch(()=>{}),()=>{w=!1}},[]);const H=x.useMemo(()=>b.find(w=>w.id===O)??b[0]??Uu[1],[O,b]);async function z(w){var re,ae;w.preventDefault(),ge(""),ze(!0);try{const M={email:c.trim(),password:h};if(s==="register"){if(h.trim().length<8)throw new Error("A senha deve ter no mínimo 8 caracteres.");if(M.name=g.trim(),M.plan=O,M.payment_method=V,V==="card"){const ve=lo(F),je=Number(X),U=Number(oe);if(ve.length<13)throw new Error("Informe um número de cartão válido.");if(!j.trim())throw new Error("Informe o nome impresso no cartão.");if(!Number.isInteger(je)||je<1||je>12)throw new Error("Informe um mês de validade entre 1 e 12.");const pe=U>=25&&U<=99||U>=2025&&U<=2099;if(!Number.isInteger(U)||!pe)throw new Error("Informe um ano de validade válido (ex.: 30 ou 2030).");if(!/^\d{3,4}$/.test(y))throw new Error("Informe o CVV com 3 ou 4 dígitos.");M.card={holder_name:j.trim(),number:ve,exp_month:je,exp_year:U,cvv:y}}const se=await a(M);xe(se)}else await r(M)}catch(M){ge((M==null?void 0:M.message)||((ae=(re=M==null?void 0:M.response)==null?void 0:re.data)==null?void 0:ae.error)||(s==="register"?"Não foi possível criar sua conta. Verifique os dados informados.":"E-mail ou senha inválidos."))}finally{ze(!1)}}if(le){const w=le.payment,re=w.pix;return e.jsxs(Zx,{children:[e.jsx(eg,{children:e.jsx(qp,{})}),e.jsxs(tg,{$wide:!0,children:[e.jsxs(rg,{children:[e.jsx(ng,{children:e.jsx(Bp,{"aria-hidden":"true"})}),"Rumo"]}),e.jsxs(ag,{children:[e.jsx("h1",{children:"Conta criada"}),e.jsx("p",{children:"Agora falta confirmar o pagamento da assinatura para liberar o acesso completo."})]}),e.jsxs(gC,{children:[e.jsx("h2",{children:w.payment_method==="pix"?"Pagamento Pix pendente":"Pagamento no cartão pendente"}),e.jsxs("p",{children:["Plano ",e.jsx("strong",{children:le.subscription.plan==="annual"?"Anual":"Mensal"})," · ",e.jsx("strong",{children:Qs.format(Number(w.amount)||0)})]}),e.jsxs("p",{children:["Status: ",e.jsx("strong",{children:w.status})]}),w.payment_method==="pix"&&e.jsx("p",{children:re!=null&&re.ready&&re.copy_paste?`Pix copia e cola: ${re.copy_paste}`:(re==null?void 0:re.message)||"O Pix ainda será gerado pelo gateway de pagamento."}),w.payment_method==="card"&&w.card&&e.jsxs("p",{children:["Cartão ",w.card.brand||""," final ",w.card.last4||"****",w.card.holder_name?` · ${w.card.holder_name}`:""]}),le.next_step&&e.jsxs("p",{children:["Próximo passo: ",e.jsx("strong",{children:le.next_step})]})]}),e.jsx(lg,{type:"button",$variant:"primary",onClick:()=>{xe(null),l("login"),f("")},children:"Ir para o login"})]})]})}return e.jsxs(Zx,{children:[e.jsx(eg,{children:e.jsx(qp,{})}),e.jsxs(tg,{$wide:s==="register",children:[e.jsxs(rg,{children:[e.jsx(ng,{children:e.jsx(Bp,{"aria-hidden":"true"})}),"Rumo"]}),e.jsxs(ag,{children:[e.jsx("h1",{children:s==="login"?"Bem-vindo de volta":"Crie sua conta"}),e.jsx("p",{children:s==="login"?"Entre com seus dados para acessar seu espaço de produtividade.":"Escolha o plano, o pagamento e comece a organizar tarefas, estudos e finanças."})]}),Q&&e.jsx(k1,{variant:"error",title:"Não foi possível continuar",message:Q,onDismiss:()=>ge("")}),e.jsxs(dC,{onSubmit:w=>{z(w)},children:[s==="register"&&e.jsxs(ig,{children:[e.jsx("legend",{children:"Plano de assinatura"}),e.jsx(sg,{children:b.map(w=>{const re=O===w.id;return e.jsxs(A1,{$active:re,children:[e.jsx("input",{type:"radio",name:"subscription-plan",value:w.id,checked:re,onChange:()=>$(w.id)}),e.jsxs("strong",{children:[w.label,w.id==="annual"&&e.jsxs(hC,{children:[e.jsx(en,{}),"Melhor custo"]})]}),e.jsxs("em",{children:[Qs.format(w.price),e.jsx("span",{children:cg(w)})]}),e.jsx("p",{children:w.description||(w.id==="annual"?"Pagamento único no ano":"Cobrado todo mês · cancele quando quiser")})]},w.id)})})]}),s==="register"&&e.jsxs(ig,{children:[e.jsx("legend",{children:"Método de pagamento"}),e.jsxs(sg,{children:[C.pix&&e.jsxs(og,{$active:V==="pix",children:[e.jsx("input",{type:"radio",name:"payment-method",value:"pix",checked:V==="pix",onChange:()=>R("pix")}),e.jsxs("strong",{children:[e.jsx(Y2,{}),"Pix"]}),e.jsx("p",{children:"Pagamento instantâneo. O QR Code é gerado após confirmar o cadastro."})]}),C.card&&e.jsxs(og,{$active:V==="card",children:[e.jsx("input",{type:"radio",name:"payment-method",value:"card",checked:V==="card",onChange:()=>R("card")}),e.jsxs("strong",{children:[e.jsx(Qi,{}),"Cartão"]}),e.jsx("p",{children:"Crédito. Número e CVV não ficam salvos no servidor."})]})]})]}),s==="register"&&V==="pix"&&e.jsxs(xC,{children:["Ao criar a conta no plano ",H.label.toLowerCase()," (",Qs.format(H.price),cg(H),"), a assinatura fica pendente até a confirmação do Pix."]}),s==="register"&&V==="card"&&e.jsxs(mC,{children:[e.jsxs(En,{children:["Nome no cartão",e.jsx(Ks,{value:j,onChange:w=>T(w.target.value),autoComplete:"cc-name",placeholder:"Como está impresso",required:!0})]}),e.jsxs(En,{children:["Número do cartão",e.jsx(Ks,{value:F,onChange:w=>ne(yC(w.target.value)),inputMode:"numeric",autoComplete:"cc-number",placeholder:"0000 0000 0000 0000",required:!0})]}),e.jsxs(En,{children:["Mês",e.jsx(Ks,{value:X,onChange:w=>L(lo(w.target.value).slice(0,2)),inputMode:"numeric",autoComplete:"cc-exp-month",placeholder:"MM",required:!0})]}),e.jsxs(En,{children:["Ano",e.jsx(Ks,{value:oe,onChange:w=>S(lo(w.target.value).slice(0,4)),inputMode:"numeric",autoComplete:"cc-exp-year",placeholder:"30 ou 2030",required:!0})]}),e.jsxs(En,{children:["CVV",e.jsx(Ks,{value:y,onChange:w=>q(lo(w.target.value).slice(0,4)),inputMode:"numeric",autoComplete:"cc-csc",placeholder:"000",required:!0})]})]}),s==="register"&&e.jsxs(En,{children:["Nome",e.jsxs(Hu,{children:[e.jsx(ik,{"aria-hidden":"true"}),e.jsx("input",{type:"text",autoComplete:"name",placeholder:"Seu nome",value:g,onChange:w=>_(w.target.value),required:!0})]})]}),e.jsxs(En,{children:["E-mail",e.jsxs(Hu,{children:[e.jsx(G2,{"aria-hidden":"true"}),e.jsx("input",{type:"email",autoComplete:"email",placeholder:"voce@exemplo.com",value:c,onChange:w=>p(w.target.value),required:!0})]})]}),e.jsxs(En,{children:["Senha",e.jsxs(Hu,{children:[e.jsx(V2,{"aria-hidden":"true"}),e.jsx("input",{type:de?"text":"password",autoComplete:s==="register"?"new-password":"current-password",placeholder:s==="register"?"Mínimo de 8 caracteres":"Digite sua senha",minLength:s==="register"?8:void 0,value:h,onChange:w=>f(w.target.value),required:!0}),e.jsx(uC,{type:"button",onClick:()=>be(w=>!w),"aria-label":de?"Ocultar senha":"Mostrar senha","aria-pressed":de,children:de?e.jsx(g1,{"aria-hidden":"true"}):e.jsx(Co,{"aria-hidden":"true"})})]})]}),s==="login"&&e.jsxs(pC,{children:[e.jsxs(fC,{children:[e.jsx("input",{type:"checkbox"}),"Manter conectado"]}),e.jsx("span",{children:"Proteja suas credenciais"})]}),e.jsx(lg,{type:"submit",$variant:"primary",disabled:ke,children:ke?"Aguarde...":s==="login"?"Entrar":V==="pix"?`Continuar com Pix · ${Qs.format(H.price)}`:`Pagar com cartão · ${Qs.format(H.price)}`})]}),e.jsxs(vC,{children:[s==="login"?"Ainda não tem conta?":"Já possui uma conta?"," ",e.jsx("button",{type:"button",onClick:()=>{l(s==="login"?"register":"login"),ge(""),xe(null)},children:s==="login"?"Cadastre-se":"Entrar"})]})]})]})}const bC=r=>r==null?void 0:r.trim().toLocaleLowerCase("pt-BR");function Dc(r){const a=bC(r);if(a==="dia"||a==="diaria"||a==="day"||a==="daily")return"diaria";if(a==="semana"||a==="semanal"||a==="week"||a==="weekly")return"semana";if(a==="mes"||a==="mês"||a==="mensal"||a==="month"||a==="monthly")return"mensal"}function wC(r){return Dc(r.frequencia)==="diaria"}function _C(r){return Dc(r.frequencia)==="semana"}function kC(r){return Dc(r.frequencia)==="mensal"}const SC=m.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
  margin-bottom: 22px;
  @media (max-width: 620px) { gap: 9px; }
  @media (max-width: 420px) { grid-template-columns: 1fr; }
`,Vu=m.div`
  display: grid;
  grid-template-columns: 42px minmax(0, 1fr);
  align-items: center;
  gap: 12px;
  padding: 16px 18px;
  border: 1px solid var(--border);
  border-radius: 14px;
  background: linear-gradient(135deg, var(--surface), var(--surface-raised));
  box-shadow: 0 5px 18px rgba(23, 38, 61, .035);
  @media (max-width: 620px) { padding: 13px; grid-template-columns: 36px minmax(0, 1fr); gap: 9px; }
  > div > span { display: block; color: var(--muted); font-size: 12px; }
  > div > strong { display: block; margin-top: 3px; color: var(--text); font-size: 25px; line-height: 1.2; }
`,Wu=m.span`
  display: grid;
  width: 42px;
  height: 42px;
  place-items: center;
  border-radius: 12px;
  color: ${({$tone:r})=>r==="green"?"var(--success)":r==="gray"?"var(--muted)":"var(--primary-strong)"};
  background: ${({$tone:r})=>r==="green"?"var(--success-soft)":r==="gray"?"var(--surface-raised)":"color-mix(in srgb, var(--primary) 16%, var(--surface))"};
  svg { width: 19px; height: 19px; }
  @media (max-width: 620px) { width: 36px; height: 36px; }
`,CC=m.div`
  display: grid;
  gap: 13px;
`,EC=m.article`
  display: grid;
  gap: 14px;
  padding: 18px 19px;
  border: 1px solid var(--border);
  border-left: 3px solid var(--primary);
  border-radius: 13px;
  background: var(--surface);
  box-shadow: 0 4px 14px rgba(23, 38, 61, .025);
  transition: border-color .15s ease, box-shadow .15s ease, transform .15s ease;
  &:hover { border-color: var(--primary); border-left-color: var(--primary); box-shadow: 0 8px 22px var(--shadow); transform: translateY(-1px); }
`,$C=m.div`
  display: flex;
  min-width: 0;
  align-items: flex-start;
  justify-content: space-between;
  gap: 14px;
  @media (max-width: 520px) { flex-direction: column; }
`,RC=m.div`
  min-width: 0;
  h3 { margin: 0; color: var(--text); font-size: 15px; font-weight: 750; line-height: 1.45; overflow-wrap: anywhere; }
  p { margin: 4px 0 0; color: var(--muted); font-size: 12px; line-height: 1.5; overflow-wrap: anywhere; }
`,PC=m.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px 16px;
  color: var(--muted);
  font-size: 11px;
`,Al=m.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  svg { width: 14px; height: 14px; color: var(--text-subtle); }
`,zC=m.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  color: var(--muted);
  font-size: 11px;
  strong { color: var(--text); font-size: 12px; }
`,NC=m.div`
  height: 6px;
  overflow: hidden;
  border-radius: 999px;
  background: var(--border);
  div { height: 100%; border-radius: inherit; background: var(--primary); transition: width .2s ease; }
`,MC=m.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 240px), 1fr));
  gap: 9px;
`,AC=m.label`
  display: flex;
  min-width: 0;
  min-height: 56px;
  align-items: center;
  gap: 10px;
  padding: 11px 12px;
  border: 1px solid ${({$completed:r})=>r?"var(--success-border)":"var(--border)"};
  border-radius: 10px;
  background: ${({$completed:r})=>r?"var(--success-soft)":"var(--surface-raised)"};
  cursor: pointer;
  transition: border-color .15s ease, background .15s ease;
  &:hover { border-color: ${({$completed:r})=>r?"var(--success-hover)":"var(--primary)"}; }
  input { width: 17px; height: 17px; flex: 0 0 auto; margin: 0; accent-color: ${({$completed:r})=>r?"var(--success)":"var(--primary)"}; cursor: pointer; }
`,TC=m.span`
  min-width: 0;
  flex: 1;
  color: ${({$completed:r})=>r?"var(--muted)":"var(--text)"};
  font-size: 12px;
  line-height: 1.45;
  overflow-wrap: anywhere;
  text-decoration: ${({$completed:r})=>r?"line-through":"none"};
`,DC=m.div`
  display: flex;
  align-items: flex-start;
  gap: 9px;
  padding: 13px 15px;
  margin-bottom: 16px;
  border: 1px solid var(--border);
  border-radius: 10px;
  color: var(--muted);
  background: var(--surface-raised);
  font-size: 12px;
  line-height: 1.5;
  svg { flex: 0 0 auto; color: var(--primary); }
`,dg=r=>r?new Date(`${r.slice(0,10)}T12:00:00`).toLocaleDateString("pt-BR"):"Sem data final";function T1({tasks:r,dailyRecords:a,loading:s,onNavigate:l,onToggleItem:c,onDeactivate:p}){const h=new Date().toLocaleDateString("pt-BR",{month:"long",year:"numeric"}),f=x.useMemo(()=>r.filter(N=>N.is_active&&kC(N)),[r]),g=x.useMemo(()=>f.map(N=>({task:N,record:a.find(O=>String(O.task_id)===String(N.id))})),[f,a]),_=g.flatMap(({record:N})=>(N==null?void 0:N.items)??[]),b=_.filter(N=>N.is_completed).length,k=_.length,C=k?Math.round(b/k*100):0;return e.jsxs(e.Fragment,{children:[e.jsxs(Pr,{children:[e.jsxs("div",{children:[e.jsx("h1",{children:"Tarefas do mês"}),e.jsx("p",{children:h.charAt(0).toLocaleUpperCase("pt-BR")+h.slice(1)})]}),e.jsxs(ue,{$variant:"primary",onClick:()=>l("/tasks/new"),children:[e.jsx(gt,{}),"Nova tarefa"]})]}),e.jsxs(SC,{"aria-label":"Resumo do mês",children:[e.jsxs(Vu,{children:[e.jsx(Wu,{$tone:"blue",children:e.jsx(We,{})}),e.jsxs("div",{children:[e.jsx("span",{children:"Tarefas mensais"}),e.jsx("strong",{children:f.length})]})]}),e.jsxs(Vu,{children:[e.jsx(Wu,{$tone:"green",children:e.jsx(er,{})}),e.jsxs("div",{children:[e.jsx("span",{children:"Itens concluídos hoje"}),e.jsxs("strong",{children:[b," / ",k]})]})]}),e.jsxs(Vu,{children:[e.jsx(Wu,{$tone:"gray",children:e.jsx(tn,{})}),e.jsxs("div",{children:[e.jsx("span",{children:"Progresso de hoje"}),e.jsxs("strong",{children:[C,"%"]})]})]})]}),e.jsxs(DC,{children:[e.jsx(hn,{size:16}),e.jsx("span",{children:"Marque as atividades mensais nesta tela. As marcações usam o registro diário atual e ficam sincronizadas com as abas Hoje e Semana."})]}),s?e.jsxs(Ge,{children:[e.jsx(Ze,{}),e.jsx("p",{children:"Carregando tarefas..."})]}):f.length===0?e.jsx(Ie,{children:e.jsxs(Ge,{children:[e.jsx(We,{size:32}),e.jsx("h3",{children:r.length===0?"Nenhuma tarefa cadastrada":"Nenhuma tarefa do tipo mês"}),e.jsx("p",{children:r.length===0?"Crie uma tarefa mensal para organizar seus objetivos.":"Não há tarefas mensais ativas. As tarefas diárias e semanais ficam nas abas Hoje e Semana."}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:9,marginTop:16},children:[e.jsxs(ue,{$variant:"primary",onClick:()=>l("/tasks/new"),children:[e.jsx(gt,{}),"Criar tarefa"]}),e.jsx(ue,{onClick:()=>l("/week"),children:"Ver tarefas da semana"})]})]})}):e.jsx(CC,{children:g.map(({task:N,record:O})=>{const $=(O==null?void 0:O.items)??[],V=$.filter(j=>j.is_completed).length,R=$.length?Math.round(V/$.length*100):0;return e.jsxs(EC,{children:[e.jsxs($C,{children:[e.jsxs(RC,{children:[e.jsx("h3",{children:N.title}),e.jsx("p",{children:N.description||"Sem descrição"})]}),e.jsx(ue,{onClick:()=>l(`/tasks/${encodeURIComponent(String(N.id))}`),children:"Editar tarefa"})]}),e.jsxs(PC,{children:[e.jsxs(Al,{children:[e.jsx(We,{}),"Início ",dg(N.start_date)]}),e.jsxs(Al,{children:[e.jsx(We,{}),"Fim ",dg(N.end_date)]}),e.jsxs(Al,{children:[e.jsx(We,{}),"Frequência mensal"]}),e.jsxs(Al,{children:[e.jsx(er,{}),$.length," ",$.length===1?"atividade":"atividades"]}),e.jsx(Rr,{$done:!0,children:V===$.length&&$.length>0?"Concluída hoje":"Em andamento"})]}),e.jsxs(zC,{children:[e.jsx("span",{children:"Progresso de hoje"}),e.jsxs("strong",{children:[V," de ",$.length," concluídos · ",R,"%"]})]}),e.jsx(NC,{"aria-label":`${R}% concluído`,children:e.jsx("div",{style:{width:`${R}%`}})}),$.length>0?e.jsx(MC,{"aria-label":`Itens da tarefa ${N.title}`,children:$.map(j=>e.jsxs(AC,{$completed:j.is_completed,children:[e.jsx("input",{type:"checkbox",checked:j.is_completed,onChange:T=>c(j.id,T.target.checked)}),e.jsx(TC,{$completed:j.is_completed,children:j.title}),j.is_completed&&e.jsx(en,{size:16,color:"var(--success)","aria-label":"Concluído"})]},j.id))}):e.jsx(Ge,{children:e.jsx("p",{children:O?"Esta tarefa ainda não possui itens para hoje.":"Os itens diários desta tarefa não foram encontrados."})}),e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsx(ue,{$variant:"danger",onClick:()=>p(N.id),children:"Desativar tarefa"})})]},N.id)})})]})}const FC=m.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
  margin-bottom: 22px;
  @media (max-width: 620px) { gap: 9px; }
  @media (max-width: 420px) { grid-template-columns: 1fr; }
`,Gu=m.div`
  position: relative;
  display: grid;
  grid-template-columns: 42px minmax(0, 1fr);
  align-items: center;
  gap: 12px;
  padding: 16px 18px;
  overflow: hidden;
  border: 1px solid var(--border);
  border-radius: 14px;
  background: linear-gradient(135deg, var(--surface), var(--surface-raised));
  box-shadow: 0 5px 18px rgba(23, 38, 61, .035);
  &::after { position: absolute; right: -20px; bottom: -38px; width: 92px; height: 92px; border-radius: 50%; background: color-mix(in srgb, var(--primary) 8%, transparent); content: ''; }
  @media (max-width: 620px) { padding: 13px; grid-template-columns: 36px minmax(0, 1fr); gap: 9px; }
  > div > span { display: block; color: var(--muted); font-size: 12px; }
  > div > strong { display: block; margin-top: 3px; color: var(--text); font-size: 25px; line-height: 1.2; }
`,Qu=m.span`
  display: grid;
  width: 42px;
  height: 42px;
  place-items: center;
  border-radius: 12px;
  color: ${({$tone:r})=>r==="green"?"var(--success)":r==="gray"?"var(--muted)":"var(--primary-strong)"};
  background: ${({$tone:r})=>r==="green"?"var(--success-soft)":r==="gray"?"var(--surface-raised)":"color-mix(in srgb, var(--primary) 16%, var(--surface))"};
  svg { width: 19px; height: 19px; }
  @media (max-width: 620px) { width: 36px; height: 36px; }
`,LC=m.div`
  display: grid;
  gap: 14px;
`,OC=m.article`
  display: grid;
  gap: 17px;
  padding: 19px 20px;
  border: 1px solid var(--border);
  border-left: 3px solid var(--primary);
  border-radius: 13px;
  background: var(--surface);
  box-shadow: 0 4px 14px rgba(23, 38, 61, .025);
  transition: border-color .15s ease, box-shadow .15s ease, transform .15s ease;
  &:hover { border-color: var(--primary); border-left-color: var(--primary); box-shadow: 0 8px 22px var(--shadow); transform: translateY(-1px); }
  @media (max-width: 520px) { gap: 14px; padding: 16px; }
`,IC=m.div`
  display: flex;
  min-width: 0;
  align-items: flex-start;
  justify-content: space-between;
  gap: 14px;
  @media (max-width: 520px) { flex-direction: column; }
`,BC=m.div`
  min-width: 0;
  h3 { margin: 0; color: var(--text); font-size: 16px; font-weight: 750; line-height: 1.45; overflow-wrap: anywhere; }
  p { margin: 4px 0 0; color: var(--muted); font-size: 12px; line-height: 1.5; overflow-wrap: anywhere; }
`,qC=m.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px 18px;
  color: var(--muted);
  font-size: 11px;
`,Ku=m.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  svg { width: 14px; height: 14px; color: var(--text-subtle); }
`,UC=m.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  color: var(--muted);
  font-size: 11px;
  strong { color: var(--text); font-size: 12px; }
`,HC=m.div`
  height: 6px;
  overflow: hidden;
  border-radius: 999px;
  background: var(--border);
  div { height: 100%; border-radius: inherit; background: var(--primary); transition: width .2s ease; }
`,VC=m.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 240px), 1fr));
  gap: 9px;
`,WC=m.label`
  display: flex;
  min-width: 0;
  min-height: 56px;
  align-items: center;
  gap: 10px;
  padding: 11px 12px;
  border: 1px solid ${({$completed:r})=>r?"var(--success-border)":"var(--border)"};
  border-radius: 10px;
  background: ${({$completed:r})=>r?"var(--success-soft)":"var(--surface-raised)"};
  cursor: pointer;
  transition: border-color .15s ease, background .15s ease;
  &:hover { border-color: ${({$completed:r})=>r?"var(--success-hover)":"var(--primary)"}; }
  input { width: 17px; height: 17px; flex: 0 0 auto; margin: 0; accent-color: ${({$completed:r})=>r?"var(--success)":"var(--primary)"}; cursor: pointer; }
`,GC=m.span`
  min-width: 0;
  flex: 1;
  color: ${({$completed:r})=>r?"var(--muted)":"var(--text)"};
  font-size: 12px;
  line-height: 1.45;
  overflow-wrap: anywhere;
  text-decoration: ${({$completed:r})=>r?"line-through":"none"};
`,QC=m.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 13px;
  border-top: 1px solid var(--border);
`,ug=r=>r?new Date(`${r.slice(0,10)}T12:00:00`).toLocaleDateString("pt-BR"):"Não definida";function D1({tasks:r,dailyRecords:a,loading:s,onNavigate:l,onToggleItem:c,onDeactivate:p}){const h=r.filter(C=>C.is_active&&wC(C)),f=h.map(C=>({task:C,record:a.find(N=>String(N.task_id)===String(C.id))})),g=f.flatMap(({record:C})=>(C==null?void 0:C.items)??[]),_=g.filter(C=>C.is_completed).length,b=g.length?Math.round(_/g.length*100):0,k=new Date().toLocaleDateString("pt-BR",{weekday:"long",day:"numeric",month:"long",year:"numeric"});return e.jsxs(e.Fragment,{children:[e.jsxs(Pr,{children:[e.jsxs("div",{children:[e.jsx("h1",{children:"Tarefas de hoje"}),e.jsx("p",{children:k.charAt(0).toLocaleUpperCase("pt-BR")+k.slice(1)})]}),e.jsxs(ue,{$variant:"primary",onClick:()=>l("/tasks/new"),children:[e.jsx(gt,{}),"Nova tarefa"]})]}),e.jsxs(FC,{"aria-label":"Resumo do dia",children:[e.jsxs(Gu,{children:[e.jsx(Qu,{$tone:"blue",children:e.jsx(er,{})}),e.jsxs("div",{children:[e.jsx("span",{children:"Tarefas diárias ativas"}),e.jsx("strong",{children:h.length})]})]}),e.jsxs(Gu,{children:[e.jsx(Qu,{$tone:"green",children:e.jsx(tn,{})}),e.jsxs("div",{children:[e.jsx("span",{children:"Itens concluídos"}),e.jsxs("strong",{children:[_," / ",g.length]})]})]}),e.jsxs(Gu,{children:[e.jsx(Qu,{$tone:"gray",children:e.jsx(We,{})}),e.jsxs("div",{children:[e.jsx("span",{children:"Progresso do dia"}),e.jsxs("strong",{children:[b,"%"]})]})]})]}),s?e.jsxs(Ge,{children:[e.jsx(Ze,{}),e.jsx("p",{children:"Carregando tarefas..."})]}):r.length===0?e.jsx(Ie,{children:e.jsxs(Ge,{children:[e.jsx(er,{size:32}),e.jsx("h3",{children:"Nenhuma tarefa cadastrada"}),e.jsx("p",{children:"Crie uma tarefa para começar a organizar seu dia."}),e.jsx("div",{style:{marginTop:16},children:e.jsxs(ue,{$variant:"primary",onClick:()=>l("/tasks/new"),children:[e.jsx(gt,{}),"Criar tarefa"]})})]})}):h.length===0?e.jsx(Ie,{children:e.jsxs(Ge,{children:[e.jsx(er,{size:32}),e.jsx("h3",{children:"Nenhuma tarefa do tipo dia"}),e.jsx("p",{children:"Não há tarefas diárias ativas. As tarefas semanais ficam na aba Semana."}),e.jsx("div",{style:{marginTop:16},children:e.jsx(ue,{onClick:()=>l("/week"),children:"Ver tarefas da semana"})})]})}):e.jsx(LC,{children:f.map(({task:C,record:N})=>{const O=(N==null?void 0:N.items)??[],$=O.filter(R=>R.is_completed).length,V=O.length?Math.round($/O.length*100):0;return e.jsxs(OC,{children:[e.jsxs(IC,{children:[e.jsxs(BC,{children:[e.jsx("h3",{children:C.title}),e.jsx("p",{children:C.description||"Sem descrição"})]}),e.jsxs(ue,{"aria-label":`Ver detalhes e editar ${C.title}`,onClick:()=>l(`/tasks/${encodeURIComponent(String(C.id))}`),children:[e.jsx(Co,{}),"Editar tarefa"]})]}),e.jsxs(qC,{children:[e.jsxs(Ku,{children:[e.jsx(We,{}),"Início ",ug(C.start_date)]}),e.jsxs(Ku,{children:[e.jsx(We,{}),"Fim ",ug(C.end_date)]}),e.jsxs(Ku,{children:[e.jsx(er,{}),O.length," ",O.length===1?"item":"itens"]}),e.jsx(Rr,{$done:!0,children:$===O.length&&O.length>0?"Concluída":"Em andamento"})]}),e.jsxs(UC,{children:[e.jsx("span",{children:"Progresso da tarefa"}),e.jsxs("strong",{children:[$," de ",O.length," concluídos · ",V,"%"]})]}),e.jsx(HC,{"aria-label":`${V}% concluído`,children:e.jsx("div",{style:{width:`${V}%`}})}),O.length>0?e.jsx(VC,{"aria-label":`Itens da tarefa ${C.title}`,children:O.map(R=>e.jsxs(WC,{$completed:R.is_completed,children:[e.jsx("input",{type:"checkbox",checked:R.is_completed,onChange:j=>c(R.id,j.target.checked)}),e.jsx(GC,{$completed:R.is_completed,children:R.title}),R.is_completed&&e.jsx(en,{size:16,color:"var(--success)","aria-label":"Concluído"})]},R.id))}):e.jsx(Ge,{children:e.jsx("p",{children:N?"Esta tarefa ainda não possui itens para hoje.":"Os itens diários desta tarefa não foram encontrados."})}),e.jsx(QC,{children:e.jsx(ue,{$variant:"danger",onClick:()=>p(C.id),children:"Desativar tarefa"})})]},C.id)})})]})}const KC=m.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
  margin-bottom: 22px;
  @media (max-width: 620px) { gap: 9px; }
  @media (max-width: 420px) { grid-template-columns: 1fr; }
`,Yu=m.div`
  position: relative;
  display: grid;
  grid-template-columns: 42px minmax(0, 1fr);
  align-items: center;
  gap: 12px;
  padding: 16px 18px;
  overflow: hidden;
  border: 1px solid var(--border);
  border-radius: 14px;
  background: linear-gradient(135deg, var(--surface), var(--surface-raised));
  box-shadow: 0 5px 18px rgba(23, 38, 61, .035);
  &::after { position: absolute; right: -20px; bottom: -38px; width: 92px; height: 92px; border-radius: 50%; background: color-mix(in srgb, var(--primary) 8%, transparent); content: ''; }
  @media (max-width: 620px) { padding: 13px; grid-template-columns: 36px minmax(0, 1fr); gap: 9px; }
  > div > span { display: block; color: var(--muted); font-size: 12px; }
  > div > strong { display: block; margin-top: 3px; color: var(--text); font-size: 25px; line-height: 1.2; }
`,Ju=m.span`
  display: grid;
  width: 42px;
  height: 42px;
  place-items: center;
  border-radius: 12px;
  color: ${({$tone:r})=>r==="green"?"var(--success)":r==="gray"?"var(--muted)":"var(--primary-strong)"};
  background: ${({$tone:r})=>r==="green"?"var(--success-soft)":r==="gray"?"var(--surface-raised)":"color-mix(in srgb, var(--primary) 16%, var(--surface))"};
  svg { width: 19px; height: 19px; }
  @media (max-width: 620px) { width: 36px; height: 36px; }
`,YC=m.div`
  display: grid;
  gap: 13px;
`,JC=m.article`
  display: grid;
  gap: 14px;
  padding: 18px 19px;
  border: 1px solid var(--border);
  border-left: 3px solid var(--primary);
  border-radius: 13px;
  background: var(--surface);
  box-shadow: 0 4px 14px rgba(23, 38, 61, .025);
  transition: border-color .15s ease, box-shadow .15s ease, transform .15s ease;
  &:hover { border-color: var(--primary); border-left-color: var(--primary); box-shadow: 0 8px 22px var(--shadow); transform: translateY(-1px); }
`,XC=m.div`
  display: flex;
  min-width: 0;
  align-items: flex-start;
  justify-content: space-between;
  gap: 14px;
  @media (max-width: 520px) { flex-direction: column; }
`,ZC=m.div`
  min-width: 0;
  h3 { margin: 0; color: var(--text); font-size: 15px; font-weight: 750; line-height: 1.45; overflow-wrap: anywhere; }
  p { margin: 4px 0 0; color: var(--muted); font-size: 12px; line-height: 1.5; overflow-wrap: anywhere; }
`,e4=m.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px 16px;
  color: var(--muted);
  font-size: 11px;
`,Tl=m.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  svg { width: 14px; height: 14px; color: var(--text-subtle); }
`,t4=m.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  color: var(--muted);
  font-size: 11px;
  strong { color: var(--text); font-size: 12px; }
`,r4=m.div`
  height: 6px;
  overflow: hidden;
  border-radius: 999px;
  background: var(--border);
  div { height: 100%; border-radius: inherit; background: var(--primary); transition: width .2s ease; }
`,n4=m.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 240px), 1fr));
  gap: 9px;
`,a4=m.label`
  display: flex;
  min-width: 0;
  min-height: 56px;
  align-items: center;
  gap: 10px;
  padding: 11px 12px;
  border: 1px solid ${({$completed:r})=>r?"var(--success-border)":"var(--border)"};
  border-radius: 10px;
  background: ${({$completed:r})=>r?"var(--success-soft)":"var(--surface-raised)"};
  cursor: pointer;
  transition: border-color .15s ease, background .15s ease;
  &:hover { border-color: ${({$completed:r})=>r?"var(--success-hover)":"var(--primary)"}; }
  input { width: 17px; height: 17px; flex: 0 0 auto; margin: 0; accent-color: ${({$completed:r})=>r?"var(--success)":"var(--primary)"}; cursor: pointer; }
`,i4=m.span`
  min-width: 0;
  flex: 1;
  color: ${({$completed:r})=>r?"var(--muted)":"var(--text)"};
  font-size: 12px;
  line-height: 1.45;
  overflow-wrap: anywhere;
  text-decoration: ${({$completed:r})=>r?"line-through":"none"};
`,s4=m.div`
  display: flex;
  align-items: flex-start;
  gap: 9px;
  padding: 13px 15px;
  margin-bottom: 16px;
  border: 1px solid var(--border);
  border-radius: 10px;
  color: var(--muted);
  background: var(--surface-raised);
  font-size: 12px;
  line-height: 1.5;
  svg { flex: 0 0 auto; color: var(--primary); }
`;function o4(r){const a=new Date(r);a.setHours(0,0,0,0);const s=(a.getDay()+6)%7;a.setDate(a.getDate()-s);const l=new Date(a);l.setDate(a.getDate()+6);const c=p=>[p.getFullYear(),String(p.getMonth()+1).padStart(2,"0"),String(p.getDate()).padStart(2,"0")].join("-");return{start:c(a),end:c(l),startDate:a,endDate:l}}const pg=r=>r?new Date(`${r.slice(0,10)}T12:00:00`).toLocaleDateString("pt-BR"):"Sem data final";function F1({tasks:r,dailyRecords:a,loading:s,onNavigate:l,onToggleItem:c,onDeactivate:p}){const f=o4(new Date),g=x.useMemo(()=>r.filter($=>$.is_active&&_C($)),[r]),_=x.useMemo(()=>g.map($=>({task:$,record:a.find(V=>String(V.task_id)===String($.id))})),[g,a]),b=_.flatMap(({record:$})=>($==null?void 0:$.items)??[]),k=b.filter($=>$.is_completed).length,C=b.length,N=C?Math.round(k/C*100):0,O=`${f.startDate.toLocaleDateString("pt-BR",{day:"numeric",month:"short"})} – ${f.endDate.toLocaleDateString("pt-BR",{day:"numeric",month:"short",year:"numeric"})}`;return e.jsxs(e.Fragment,{children:[e.jsxs(Pr,{children:[e.jsxs("div",{children:[e.jsx("h1",{children:"Tarefas da semana"}),e.jsx("p",{children:O})]}),e.jsxs(ue,{$variant:"primary",onClick:()=>l("/tasks/new"),children:[e.jsx(gt,{}),"Nova tarefa"]})]}),e.jsxs(KC,{"aria-label":"Resumo da semana",children:[e.jsxs(Yu,{children:[e.jsx(Ju,{$tone:"blue",children:e.jsx(We,{})}),e.jsxs("div",{children:[e.jsx("span",{children:"Tarefas semanais ativas"}),e.jsx("strong",{children:g.length})]})]}),e.jsxs(Yu,{children:[e.jsx(Ju,{$tone:"green",children:e.jsx(er,{})}),e.jsxs("div",{children:[e.jsx("span",{children:"Itens concluídos hoje"}),e.jsxs("strong",{children:[k," / ",C]})]})]}),e.jsxs(Yu,{children:[e.jsx(Ju,{$tone:"gray",children:e.jsx(tn,{})}),e.jsxs("div",{children:[e.jsx("span",{children:"Progresso de hoje"}),e.jsxs("strong",{children:[N,"%"]})]})]})]}),e.jsxs(s4,{children:[e.jsx(hn,{size:16}),e.jsx("span",{children:"Marque as atividades semanais nesta tela. As marcações usam o registro diário atual e ficam sincronizadas com a aba Hoje."})]}),s?e.jsxs(Ge,{children:[e.jsx(Ze,{}),e.jsx("p",{children:"Carregando tarefas..."})]}):g.length===0?e.jsx(Ie,{children:e.jsxs(Ge,{children:[e.jsx(We,{size:32}),e.jsx("h3",{children:r.length===0?"Nenhuma tarefa cadastrada":"Nenhuma tarefa do tipo semana"}),e.jsx("p",{children:r.length===0?"Crie uma tarefa para organizar o que precisa fazer.":"Não há tarefas semanais ativas. As tarefas diárias ficam na aba Hoje."}),e.jsx("div",{style:{marginTop:16},children:r.length===0?e.jsxs(ue,{$variant:"primary",onClick:()=>l("/tasks/new"),children:[e.jsx(gt,{}),"Criar tarefa"]}):e.jsx(ue,{onClick:()=>l("/today"),children:"Ver tarefas de hoje"})})]})}):e.jsx(YC,{children:_.map(({task:$,record:V})=>{const R=(V==null?void 0:V.items)??[],j=R.filter(F=>F.is_completed).length,T=R.length?Math.round(j/R.length*100):0;return e.jsxs(JC,{children:[e.jsxs(XC,{children:[e.jsxs(ZC,{children:[e.jsx("h3",{children:$.title}),e.jsx("p",{children:$.description||"Sem descrição"})]}),e.jsx(ue,{onClick:()=>l(`/tasks/${encodeURIComponent(String($.id))}`),children:"Editar tarefa"})]}),e.jsxs(e4,{children:[e.jsxs(Tl,{children:[e.jsx(We,{}),"Início ",pg($.start_date)]}),e.jsxs(Tl,{children:[e.jsx(We,{}),"Fim ",pg($.end_date)]}),e.jsxs(Tl,{children:[e.jsx(We,{}),"Frequência semanal"]}),e.jsxs(Tl,{children:[e.jsx(er,{}),R.length," ",R.length===1?"atividade":"atividades"]}),e.jsx(Rr,{$done:!0,children:j===R.length&&R.length>0?"Concluída hoje":"Em andamento"})]}),e.jsxs(t4,{children:[e.jsx("span",{children:"Progresso de hoje"}),e.jsxs("strong",{children:[j," de ",R.length," concluídos · ",T,"%"]})]}),e.jsx(r4,{"aria-label":`${T}% concluído`,children:e.jsx("div",{style:{width:`${T}%`}})}),R.length>0?e.jsx(n4,{"aria-label":`Itens da tarefa ${$.title}`,children:R.map(F=>e.jsxs(a4,{$completed:F.is_completed,children:[e.jsx("input",{type:"checkbox",checked:F.is_completed,onChange:ne=>c(F.id,ne.target.checked)}),e.jsx(i4,{$completed:F.is_completed,children:F.title}),F.is_completed&&e.jsx(en,{size:16,color:"var(--success)","aria-label":"Concluído"})]},F.id))}):e.jsx(Ge,{children:e.jsx("p",{children:V?"Esta tarefa ainda não possui itens para hoje.":"Os itens diários desta tarefa não foram encontrados."})}),e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsx(ue,{$variant:"danger",onClick:()=>p($.id),children:"Desativar tarefa"})})]},$.id)})})]})}const l4=m.nav`
  display: flex; gap: 6px; padding: 5px; margin-bottom: 22px; border: 1px solid var(--border); border-radius: 12px; background: var(--surface-raised);
  @media (max-width: 520px) { width: 100%; overflow-x: auto; }
`,co=m.button`
  display: inline-flex; align-items: center; justify-content: center; gap: 8px; flex: 1; min-width: 110px; border: 0; border-radius: 9px; padding: 11px 15px; color: var(--muted); background: transparent; font-weight: 700; cursor: pointer;
  ${({$active:r})=>r&&"color: var(--primary-strong); background: var(--surface); box-shadow: 0 3px 10px var(--shadow);"}
  &:hover { color: var(--primary-strong); }
  svg { width: 17px; height: 17px; }
`,c4=m(co)`
  @media (max-width: 620px) { min-width: 125px; }
`;function d4({history:r,...a}){const[s,l]=x.useState("today");return e.jsxs(e.Fragment,{children:[e.jsxs(l4,{"aria-label":"Período do planejamento",children:[e.jsxs(co,{type:"button",$active:s==="today",onClick:()=>l("today"),children:[e.jsx(hn,{}),"Hoje"]}),e.jsxs(co,{type:"button",$active:s==="week",onClick:()=>l("week"),children:[e.jsx(Dp,{}),"Semana"]}),e.jsxs(co,{type:"button",$active:s==="month",onClick:()=>l("month"),children:[e.jsx(We,{}),"Mês"]}),e.jsxs(co,{type:"button",$active:s==="completed",onClick:()=>l("completed"),children:[e.jsx(We,{}),"Concluídas"]}),e.jsxs(c4,{type:"button",$active:s==="history",onClick:()=>l("history"),children:[e.jsx(Dp,{}),"Histórico"]})]}),s==="today"&&e.jsx(D1,{...a}),s==="week"&&e.jsx(F1,{...a}),s==="month"&&e.jsx(T1,{...a}),s==="completed"&&e.jsx(N1,{dailyRecords:a.dailyRecords,loading:a.loading,onNavigate:a.onNavigate}),s==="history"&&e.jsx(M1,{...r,loading:a.loading})]})}const Sf=xi`
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
`,u4=xi`
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
`,p4=xi`
  0%, 100% { transform: scale(.88); opacity: .48; }
  50% { transform: scale(1.08); opacity: 1; }
`,f4=xi`
  0%, 100% { transform: translateY(0) rotate(-4deg); }
  50% { transform: translateY(-8px) rotate(4deg); }
`,h4=m.div`
  animation: ${Sf} .35s ease-out both;
  @media (prefers-reduced-motion: reduce) { animation: none; }
`,m4=m.div`
  display: grid; justify-items: center; gap: 12px; min-height: 150px; place-content: center; color: var(--muted); text-align: center;
  p { margin: 0; font-size: 12px; }
  @media (prefers-reduced-motion: reduce) { &, * { animation: none !important; } }
`,x4=m.div`
  position: relative; display: grid; width: 68px; height: 68px; place-items: center; color: var(--primary);
  background: color-mix(in srgb, var(--primary) 18%, var(--surface)); border-radius: 50%; box-shadow: 0 10px 24px var(--shadow); animation: ${f4} 2.2s ease-in-out infinite;
  svg { position: relative; z-index: 1; width: 27px; height: 27px; }
  &::before, &::after { position: absolute; inset: -8px; border: 1px solid rgba(67,128,238,.28); border-radius: 50%; content: ''; animation: ${p4} 2s ease-out infinite; }
  &::after { inset: -17px; border-color: rgba(67,128,238,.14); animation-delay: .35s; }
`,fg=m.div`
  display: grid;
  gap: 12px;
  margin-top: 18px;
  & > article { animation: ${u4} .3s ease-out both; }
  & > article:nth-child(2) { animation-delay: 40ms; }
  & > article:nth-child(3) { animation-delay: 80ms; }
  & > article:nth-child(4) { animation-delay: 120ms; }
  & > article:nth-child(n+5) { animation-delay: 160ms; }
  @media (prefers-reduced-motion: reduce) { & > article { animation: none; } }
`,hg=m.article`
  display: grid;
  grid-template-columns: 52px minmax(0, 1fr) auto;
  gap: 14px;
  align-items: start;
  padding: 16px;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: var(--surface);
  @media (max-width: 620px) { grid-template-columns: 42px minmax(0, 1fr); }
`,mg=m.div`
  display: grid;
  width: 46px;
  height: 46px;
  place-items: center;
  border-radius: 13px;
  color: ${({$type:r})=>r==="aniversario"?"var(--warning)":r==="lembrete"?"var(--info)":"var(--success)"};
  background: ${({$type:r})=>r==="aniversario"?"var(--warning-soft)":r==="lembrete"?"var(--info-soft)":"var(--success-soft)"};
  svg { width: 21px; height: 21px; }
  @media (max-width: 620px) { width: 40px; height: 40px; }
`,xg=m.div`
  min-width: 0;
  h3 { margin: 0; color: var(--text); font-size: 15px; overflow-wrap: anywhere; }
  p { margin: 5px 0 0; color: var(--muted); font-size: 12px; line-height: 1.5; white-space: pre-wrap; overflow-wrap: anywhere; }
`,Dl=m.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px 12px;
  margin-top: 9px;
  color: var(--muted);
  font-size: 11px;
  svg { width: 14px; height: 14px; }
`,gg=m.div`
  display: flex;
  gap: 7px;
  @media (max-width: 620px) { grid-column: 2; }
`,vg=m.button`
  display: grid;
  width: 34px;
  height: 34px;
  place-items: center;
  border: 1px solid var(--border);
  border-radius: 8px;
  color: var(--muted);
  background: var(--surface-raised);
  cursor: pointer;
  &:disabled { opacity: .55; cursor: not-allowed; }
  &:hover { color: var(--primary); background: var(--surface); }
  &[data-danger='true']:hover { color: var(--error); background: var(--error-soft); }
  svg { width: 16px; height: 16px; }
`,g4=m(Ie)`
  width: min(680px, calc(100vw - 32px));
  max-height: min(88vh, 760px);
  overflow-y: auto;
  margin: 0;
  padding: 24px;
  box-shadow: 0 24px 70px rgba(20, 38, 66, .22);
  animation: ${Sf} .22s ease-out both;
  @media (max-width: 620px) { width: calc(100vw - 20px); padding: 18px; max-height: 92vh; }
`,v4=m.div`
  position: fixed; z-index: 1000; inset: 0; display: grid; place-items: center; padding: 16px;
  background: rgba(19, 31, 51, .48); backdrop-filter: blur(5px); animation: ${Sf} .18s ease-out both;
`,y4=m.div`
  display: flex; align-items: flex-start; justify-content: space-between; gap: 12px; margin-bottom: 14px;
`,j4=m.button`
  display: grid; width: 34px; height: 34px; flex: 0 0 auto; place-items: center;
  border: 1px solid var(--border); border-radius: 9px; color: var(--muted); background: var(--surface); cursor: pointer;
  &:hover { color: var(--primary); background: var(--surface-raised); }
`,b4=m.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0 16px;
  @media (max-width: 620px) { grid-template-columns: 1fr; }
`,w4=m.div`
  display: flex;
  justify-content: flex-end;
  gap: 9px;
  flex-wrap: wrap;
  margin-top: 18px;
`,_4=m.label`
  display: flex;
  align-items: center;
  gap: 9px;
  margin: 0 0 18px;
  color: var(--text);
  font-size: 13px;
  input { width: 16px; height: 16px; accent-color: var(--primary); }
`,yg=m.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-top: 18px;
  color: var(--muted);
  font-size: 12px;
`,k4=m.span`
  display: inline-flex;
  align-items: center;
  border-radius: 999px;
  padding: 5px 9px;
  color: var(--warning);
  background: var(--warning-soft);
  font-size: 11px;
  font-weight: 700;
`,S4=m(Ie)`
  margin-bottom: 20px;
  border-color: var(--border);
  background: linear-gradient(135deg, var(--surface), var(--surface-raised));
`,Hi=m.div`
  position: relative;
  display: flex;
  align-items: center;
  svg { position: absolute; left: 12px; z-index: 1; width: 17px; height: 17px; color: var(--primary); pointer-events: none; }
  input { width: 100%; padding-left: 38px; border-color: var(--border); background: linear-gradient(135deg, var(--surface), var(--surface-raised)); }
  input:hover { border-color: var(--primary); }
  input:focus { border-color: var(--primary); box-shadow: 0 0 0 3px var(--focus); }
  input::-webkit-calendar-picker-indicator { cursor: pointer; opacity: .72; }
`,C4=m.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  margin-bottom: 20px;
  @media (max-width: 620px) { grid-template-columns: 1fr; }
`,Xu=m.div`
  display: grid;
  grid-template-columns: 38px minmax(0, 1fr);
  align-items: center;
  gap: 11px;
  padding: 14px 15px;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: linear-gradient(135deg, var(--surface), var(--surface-raised));
  box-shadow: 0 4px 14px rgba(23, 38, 61, .03);
  > span { display: grid; width: 38px; height: 38px; place-items: center; border-radius: 11px; color: var(--primary); background: color-mix(in srgb, var(--primary) 16%, var(--surface)); }
  small { display: block; color: var(--muted); font-size: 11px; }
  strong { display: block; margin-top: 2px; color: var(--text); font-size: 20px; }
  svg { width: 18px; height: 18px; }
`,E4=m.div`
  margin: -4px 0 16px;
  padding: 10px 12px;
  border: 1px solid var(--border);
  border-radius: 9px;
  color: var(--muted);
  background: var(--surface-raised);
  font-size: 12px;
`;function Hp(r){return`${r.getFullYear()}-${String(r.getMonth()+1).padStart(2,"0")}-${String(r.getDate()).padStart(2,"0")}`}function $4(){const r=new Date,a=new Date(r);return a.setDate(a.getDate()+30),{from:Hp(r),to:Hp(a)}}function jg(r){return new Date(`${r.slice(0,10)}T12:00:00`).toLocaleDateString("pt-BR",{weekday:"long",day:"numeric",month:"long",year:"numeric"})}function Zu(r){return r?r.slice(0,5):""}function R4(r){if(!r)return"";const a=new Date(r),s=l=>String(l).padStart(2,"0");return`${a.getFullYear()}-${s(a.getMonth()+1)}-${s(a.getDate())}T${s(a.getHours())}:${s(a.getMinutes())}`}function bg(r){return r==="aniversario"?"Aniversário":r==="atividade"?"Atividade":"Lembrete"}function P4(r){return r==="concluido"?"Concluído":r==="cancelado"?"Cancelado":"Pendente"}function z4(r){return r==="lembrete_definido"?"Lembrete agendado":"Nas próximas 24 horas"}function Ys(r){return(r.occurrence_date??r.event_date).slice(0,10)}function wg({message:r}){return e.jsxs(m4,{children:[e.jsx(x4,{children:e.jsx(nc,{})}),e.jsx("p",{children:r})]})}function N4({events:r,alerts:a,loading:s,alertsLoading:l,saving:c,query:p,pagination:h,alertPagination:f,onApplyFilter:g,onPageChange:_,onAlertPageChange:b,onCreate:k,onUpdate:C,onDelete:N}){const O=x.useMemo($4,[]),[$,V]=x.useState(p.mode),[R,j]=x.useState(O.from),[T,F]=x.useState(O.from),[ne,X]=x.useState(O.to),[L,oe]=x.useState(""),[S,y]=x.useState(!1),[q,de]=x.useState(null),[be,ke]=x.useState(""),[ze,Q]=x.useState(""),[ge,le]=x.useState("lembrete"),[xe,H]=x.useState(O.from),[z,w]=x.useState(""),[re,ae]=x.useState(""),[M,se]=x.useState(!1),[ve,je]=x.useState("pendente"),[U,pe]=x.useState(null),ot=x.useRef(null),st=x.useMemo(()=>[...r].sort((ie,He)=>Ys(ie).localeCompare(Ys(He))||(ie.event_time??"").localeCompare(He.event_time??"")),[r]);x.useEffect(()=>{V(p.mode),p.mode==="date"&&j(p.date),p.mode==="range"&&(F(p.from),X(p.to))},[p]),x.useEffect(()=>{if(!S)return;const ie=Pt=>{Pt.key==="Escape"&&!c&&ft()};document.addEventListener("keydown",ie);const He=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.removeEventListener("keydown",ie),document.body.style.overflow=He}},[S,c]);function ft(){y(!1),de(null),ke(""),Q(""),le("lembrete"),H(Hp(new Date)),w(""),ae(""),se(!1),je("pendente")}function at(){ft(),y(!0)}function lr(ie){de(ie),y(!0),ke(ie.title),Q(ie.description??""),le(ie.type),H(ie.event_date.slice(0,10)),w(Zu(ie.event_time)),ae(R4(ie.reminder_at)),se(ie.repeat_yearly),je(ie.status)}async function Et(ie){ie.preventDefault();try{const He={title:be.trim(),description:ze.trim()||null,type:ge,event_date:xe,event_time:z||null,reminder_at:re?new Date(re).toISOString():null,repeat_yearly:M,status:ve};(q?await C(q.id,He):await k(He))?(pe({variant:"success",title:q?"Agendamento atualizado":"Agendamento criado",message:q?"As alterações foram salvas com sucesso.":"O novo agendamento já está disponível na sua agenda."}),ft()):pe({variant:"error",title:"Não foi possível salvar",message:"Verifique os dados e tente novamente."})}catch{pe({variant:"error",title:"Erro ao salvar",message:"Ocorreu um problema ao comunicar com o servidor."})}}async function bt(ie,He){try{const Pt=await C(ie.id,{status:He});pe(Pt?{variant:"success",title:He==="concluido"?"Alerta concluído":"Alerta cancelado",message:`“${ie.title}” foi atualizado com sucesso.`}:{variant:"error",title:"Não foi possível atualizar o alerta",message:"Tente novamente em instantes."})}catch{pe({variant:"error",title:"Erro ao atualizar o alerta",message:"Ocorreu um problema ao comunicar com o servidor."})}}async function Le(ie){try{const He=await N(ie);pe(He?{variant:"success",title:"Agendamento excluído",message:`“${ie.title}” foi removido da agenda.`}:{variant:"error",title:"Não foi possível excluir",message:"O agendamento não foi removido. Tente novamente."})}catch{pe({variant:"error",title:"Erro ao excluir",message:"Ocorreu um problema ao comunicar com o servidor."})}}function et(ie){if(ie.preventDefault(),oe(""),$==="all"){g({mode:"all"});return}if($==="date"){if(!R){oe("Selecione a data que deseja consultar.");return}g({mode:"date",date:R});return}if(!T||!ne){oe("Informe as datas inicial e final do intervalo.");return}if(T>ne){oe("A data inicial não pode ser posterior à data final.");return}g({mode:"range",from:T,to:ne})}return e.jsxs(h4,{children:[U&&e.jsx(S1,{variant:U.variant,title:U.title,message:U.message,onDismiss:()=>pe(null)},`${U.variant}-${U.title}-${U.message}`),e.jsxs(Pr,{children:[e.jsxs("div",{children:[e.jsx("h1",{children:"Agenda"}),e.jsx("p",{children:"Organize lembretes, atividades e aniversários em um só lugar."})]}),e.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap",justifyContent:"flex-end"},children:[e.jsxs(ue,{type:"button",onClick:()=>{var ie;return(ie=ot.current)==null?void 0:ie.scrollIntoView({behavior:"smooth",block:"start"})},children:[e.jsx(nc,{}),"Alertas ",f.total>0&&`(${f.total})`]}),e.jsxs(ue,{$variant:"primary",onClick:S?ft:at,children:[S?e.jsx(pr,{}):e.jsx(gt,{}),S?"Fechar":"Novo agendamento"]})]})]}),e.jsxs(C4,{"aria-label":"Resumo da agenda",children:[e.jsxs(Xu,{children:[e.jsx("span",{children:e.jsx(We,{})}),e.jsxs("div",{children:[e.jsx("small",{children:"Agendamentos exibidos"}),e.jsx("strong",{children:h.total})]})]}),e.jsxs(Xu,{children:[e.jsx("span",{children:e.jsx(nc,{})}),e.jsxs("div",{children:[e.jsx("small",{children:"Alertas pendentes"}),e.jsx("strong",{children:f.total})]})]}),e.jsxs(Xu,{children:[e.jsx("span",{children:e.jsx(en,{})}),e.jsxs("div",{children:[e.jsx("small",{children:"Período consultado"}),e.jsx("strong",{children:p.mode==="all"?"Todos":p.mode==="date"?"1 dia":"Intervalo"})]})]})]}),e.jsx("div",{ref:ot,id:"agenda-alertas",children:e.jsxs(S4,{children:[e.jsxs(Fe,{children:[e.jsx(nc,{size:19,color:"var(--warning)"}),"Alertas ",f.total>0&&`(${f.total})`]}),l?e.jsx(wg,{message:"Verificando seus alertas..."}):a.length===0?e.jsxs(Ge,{children:[e.jsx(ni,{size:30}),e.jsx("h3",{children:"Nenhum alerta pendente"}),e.jsx("p",{children:"Lembretes vencidos e eventos das próximas 24 horas aparecerão aqui."})]}):e.jsxs(e.Fragment,{children:[e.jsx(fg,{children:a.map(ie=>e.jsxs(hg,{children:[e.jsx(mg,{$type:ie.type,children:ie.type==="aniversario"?e.jsx(Dx,{}):ie.type==="lembrete"?e.jsx(ni,{}):e.jsx(We,{})}),e.jsxs(xg,{children:[e.jsx("h3",{children:ie.title}),ie.description&&e.jsx("p",{children:ie.description}),e.jsxs(Dl,{children:[e.jsx("span",{children:bg(ie.type)}),e.jsx("span",{children:jg(Ys(ie))}),ie.event_time&&e.jsxs("span",{children:[e.jsx(hn,{}),Zu(ie.event_time)]}),ie.alert_reasons.map(He=>e.jsx(k4,{children:z4(He)},He))]}),ie.reminder_at&&e.jsx(Dl,{children:e.jsxs("span",{children:[e.jsx(ni,{}),"Lembrete: ",new Date(ie.reminder_at).toLocaleString("pt-BR",{dateStyle:"short",timeStyle:"short"})]})})]}),e.jsxs(gg,{children:[e.jsxs(ue,{type:"button",$variant:"primary","aria-label":`Concluir ${ie.title} e remover dos alertas`,title:"Concluir e remover dos alertas",disabled:c,onClick:()=>{bt(ie,"concluido")},children:[e.jsx(en,{}),"Concluir"]}),e.jsxs(ue,{type:"button",$variant:"danger","aria-label":`Cancelar ${ie.title} e remover dos alertas`,title:"Cancelar e remover dos alertas",disabled:c,onClick:()=>{bt(ie,"cancelado")},children:[e.jsx(C2,{}),"Cancelar"]})]})]},ie.id))}),f.totalPages>1&&e.jsxs(yg,{children:[e.jsxs("span",{children:["Página ",f.page," de ",f.totalPages]}),e.jsxs("div",{style:{display:"flex",gap:7},children:[e.jsx(ue,{type:"button","aria-label":"Alertas página anterior",disabled:!f.hasPreviousPage||l,onClick:()=>b(f.page-1),children:e.jsx(jo,{})}),e.jsx(ue,{type:"button","aria-label":"Próxima página de alertas",disabled:!f.hasNextPage||l,onClick:()=>b(f.page+1),children:e.jsx(rs,{})})]})]})]})]})}),S&&Ac.createPortal(e.jsx(v4,{role:"presentation",onMouseDown:ie=>{ie.target===ie.currentTarget&&!c&&ft()},children:e.jsxs(g4,{role:"dialog","aria-modal":"true","aria-labelledby":"schedule-modal-title",onMouseDown:ie=>ie.stopPropagation(),children:[e.jsxs(y4,{children:[e.jsxs(Fe,{id:"schedule-modal-title",children:[q?e.jsx(rn,{size:19,color:"var(--primary)"}):e.jsx(ni,{size:19,color:"var(--primary)"}),q?"Editar agendamento":"Criar agendamento"]}),e.jsx(j4,{type:"button","aria-label":"Fechar janela",title:"Fechar (Esc)",onClick:ft,disabled:c,children:e.jsx(pr,{size:18})})]}),e.jsx(E4,{children:"Preencha os dados abaixo. Você receberá um aviso de confirmação após salvar ou atualizar o agendamento."}),e.jsxs("form",{onSubmit:ie=>{Et(ie)},children:[e.jsxs(b4,{children:[e.jsxs(Z,{children:["Título *",e.jsx("input",{value:be,onChange:ie=>ke(ie.target.value),maxLength:200,placeholder:"Ex.: Aniversário da Ana",required:!0})]}),e.jsxs(Z,{children:["Tipo *",e.jsxs(nn,{value:ge,onChange:ie=>{const He=ie.target.value;le(He),se(He==="aniversario")},children:[e.jsx("option",{value:"lembrete",children:"Lembrete"}),e.jsx("option",{value:"atividade",children:"Atividade"}),e.jsx("option",{value:"aniversario",children:"Aniversário"})]})]}),e.jsxs(Z,{children:["Data *",e.jsxs(Hi,{children:[e.jsx(We,{size:17,"aria-hidden":"true"}),e.jsx("input",{type:"date",value:xe,onChange:ie=>H(ie.target.value),required:!0})]})]}),e.jsxs(Z,{children:["Horário ",e.jsx("small",{children:"(opcional)"}),e.jsxs(Hi,{children:[e.jsx(hn,{size:17,"aria-hidden":"true"}),e.jsx("input",{type:"time",value:z,onChange:ie=>w(ie.target.value)})]})]}),e.jsxs(Z,{children:["Lembrar em ",e.jsx("small",{children:"(opcional)"}),e.jsxs(Hi,{children:[e.jsx(hn,{size:17,"aria-hidden":"true"}),e.jsx("input",{type:"datetime-local",value:re,onChange:ie=>ae(ie.target.value)})]})]}),e.jsxs(Z,{children:["Status",e.jsxs(nn,{value:ve,onChange:ie=>je(ie.target.value),children:[e.jsx("option",{value:"pendente",children:"Pendente"}),e.jsx("option",{value:"concluido",children:"Concluído"}),e.jsx("option",{value:"cancelado",children:"Cancelado"})]})]})]}),e.jsxs(Z,{children:["Descrição ",e.jsx("small",{children:"(opcional)"}),e.jsx("textarea",{value:ze,onChange:ie=>Q(ie.target.value),placeholder:"Adicione detalhes importantes..."})]}),e.jsxs(_4,{children:[e.jsx("input",{type:"checkbox",checked:M,onChange:ie=>se(ie.target.checked)}),"Repetir todos os anos"]}),e.jsxs(w4,{children:[e.jsx(ue,{type:"button",onClick:ft,children:"Cancelar"}),e.jsxs(ue,{type:"submit",$variant:"primary",disabled:c,children:[c?e.jsx(Ze,{className:"spin"}):e.jsx(Eo,{}),c?"Salvando...":q?"Salvar alterações":"Criar agendamento"]})]})]})]})}),document.body),e.jsxs(Ie,{children:[e.jsxs(Fe,{children:[e.jsx(We,{size:19,color:"var(--primary)"}),"Consultar agendamentos"]}),e.jsxs("form",{onSubmit:et,children:[e.jsxs($1,{children:[e.jsxs(Z,{children:["Consulta",e.jsxs(nn,{value:$,onChange:ie=>{V(ie.target.value),oe("")},children:[e.jsx("option",{value:"all",children:"Todos os agendamentos"}),e.jsx("option",{value:"date",children:"Data específica"}),e.jsx("option",{value:"range",children:"Intervalo de datas"})]})]}),$==="date"&&e.jsxs(Z,{children:["Data",e.jsxs(Hi,{children:[e.jsx(We,{size:17,"aria-hidden":"true"}),e.jsx("input",{type:"date",value:R,onChange:ie=>j(ie.target.value),required:!0})]})]}),$==="range"&&e.jsxs(e.Fragment,{children:[e.jsxs(Z,{children:["De",e.jsxs(Hi,{children:[e.jsx(We,{size:17,"aria-hidden":"true"}),e.jsx("input",{type:"date",value:T,onChange:ie=>F(ie.target.value),required:!0})]})]}),e.jsxs(Z,{children:["Até",e.jsxs(Hi,{children:[e.jsx(We,{size:17,"aria-hidden":"true"}),e.jsx("input",{type:"date",min:T,value:ne,onChange:ie=>X(ie.target.value),required:!0})]})]})]}),e.jsxs(ue,{type:"submit",$variant:"primary",disabled:s,children:[s?e.jsx(Ze,{className:"spin"}):e.jsx(We,{}),"Consultar"]})]}),L&&e.jsx("p",{role:"alert",style:{marginTop:10,color:"var(--error)",fontSize:12},children:L})]}),s?e.jsx(wg,{message:"Organizando sua agenda..."}):st.length===0?e.jsxs(Ge,{children:[e.jsx(We,{size:32}),e.jsx("h3",{children:"Nenhum agendamento neste período"}),e.jsx("p",{children:"Cadastre um lembrete, atividade ou aniversário para organizar sua agenda."})]}):e.jsx(fg,{children:st.map(ie=>e.jsxs(hg,{children:[e.jsx(mg,{$type:ie.type,children:ie.type==="aniversario"?e.jsx(Dx,{}):ie.type==="lembrete"?e.jsx(ni,{}):e.jsx(We,{})}),e.jsxs(xg,{children:[e.jsx("h3",{children:ie.title}),ie.description&&e.jsx("p",{children:ie.description}),e.jsxs(Dl,{children:[e.jsx("span",{children:bg(ie.type)}),e.jsx("span",{children:jg(Ys(ie))}),ie.event_time&&e.jsxs("span",{children:[e.jsx(hn,{}),Zu(ie.event_time)]}),ie.repeat_yearly&&e.jsx("span",{children:"Anual"}),e.jsx(Rr,{$done:ie.status==="concluido",children:P4(ie.status)})]}),ie.reminder_at&&e.jsx(Dl,{children:e.jsxs("span",{children:[e.jsx(ni,{}),"Lembrete: ",new Date(ie.reminder_at).toLocaleString("pt-BR",{dateStyle:"short",timeStyle:"short"})]})})]}),e.jsxs(gg,{children:[e.jsx(vg,{type:"button","aria-label":`Editar ${ie.title}`,title:"Editar",onClick:()=>lr(ie),children:e.jsx(rn,{})}),e.jsx(vg,{type:"button","aria-label":`Excluir ${ie.title}`,title:"Excluir","data-danger":"true",disabled:c,onClick:()=>{window.confirm(`Excluir o agendamento “${ie.title}”?`)&&Le(ie)},children:e.jsx($r,{})})]})]},`${ie.id}-${Ys(ie)}`))}),!s&&h.total>0&&e.jsxs(yg,{children:[e.jsxs("span",{children:[h.total," ocorrência(s) · Página ",h.page," de ",h.totalPages]}),e.jsxs("div",{style:{display:"flex",gap:7},children:[e.jsx(ue,{type:"button","aria-label":"Página anterior",disabled:!h.hasPreviousPage,onClick:()=>_(h.page-1),children:e.jsx(jo,{})}),e.jsx(ue,{type:"button","aria-label":"Próxima página",disabled:!h.hasNextPage,onClick:()=>_(h.page+1),children:e.jsx(rs,{})})]})]})]})]})}const M4=m.div`
  overflow: hidden;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: var(--surface-raised);
  &:focus-within { border-color: var(--primary); box-shadow: 0 0 0 4px var(--focus); }
`,A4=m.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding: 8px;
  border-bottom: 1px solid var(--border);
  background: var(--surface);
`,$a=m.button`
  display: grid;
  width: 34px;
  height: 34px;
  place-items: center;
  border: 1px solid transparent;
  border-radius: 8px;
  color: var(--text);
  background: transparent;
  cursor: pointer;
  &:hover { border-color: var(--border); background: var(--surface-raised); }
  svg { width: 16px; height: 16px; }
`,T4=m.div`
  min-height: ${({$minHeight:r})=>`${r}px`};
  max-height: ${({$minHeight:r})=>`${Math.max(560,r+180)}px`};
  overflow: auto;
  padding: 14px 16px;
  color: var(--text);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.65;
  outline: none;
  &:empty::before { color: var(--muted); content: attr(data-placeholder); pointer-events: none; }
  h1, h2, h3 { margin: 0 0 10px; }
  p { margin: 0 0 10px; }
  ul, ol { margin: 0 0 10px; padding-left: 22px; }
  a { color: var(--primary-strong); }
`;function L1({value:r,onChange:a,placeholder:s="Escreva o conteúdo...",minHeight:l=280,ariaLabel:c="Conteúdo"}){const p=x.useRef(null),h=x.useRef(!1);x.useEffect(()=>{const b=p.current;!b||h.current||b.innerHTML!==r&&(b.innerHTML=r)},[r]);function f(){var b;a(((b=p.current)==null?void 0:b.innerHTML)??"")}function g(b,k){var C;(C=p.current)==null||C.focus(),document.execCommand(b,!1,k),f()}function _(){var k;const b=(k=window.prompt("Informe a URL do link"))==null?void 0:k.trim();b&&g("createLink",b)}return e.jsxs(M4,{children:[e.jsxs(A4,{role:"toolbar","aria-label":"Formatador de texto",children:[e.jsx($a,{type:"button",title:"Negrito","aria-label":"Negrito",onMouseDown:b=>b.preventDefault(),onClick:()=>g("bold"),children:e.jsx(E2,{})}),e.jsx($a,{type:"button",title:"Itálico","aria-label":"Itálico",onMouseDown:b=>b.preventDefault(),onClick:()=>g("italic"),children:e.jsx(q2,{})}),e.jsx($a,{type:"button",title:"Sublinhado","aria-label":"Sublinhado",onMouseDown:b=>b.preventDefault(),onClick:()=>g("underline"),children:e.jsx(ak,{})}),e.jsx($a,{type:"button",title:"Riscado","aria-label":"Riscado",onMouseDown:b=>b.preventDefault(),onClick:()=>g("strikeThrough"),children:e.jsx(ek,{})}),e.jsx($a,{type:"button",title:"Título","aria-label":"Título",onMouseDown:b=>b.preventDefault(),onClick:()=>g("formatBlock","h2"),children:e.jsx(O2,{})}),e.jsx($a,{type:"button",title:"Lista","aria-label":"Lista",onMouseDown:b=>b.preventDefault(),onClick:()=>g("insertUnorderedList"),children:e.jsx(H2,{})}),e.jsx($a,{type:"button",title:"Lista numerada","aria-label":"Lista numerada",onMouseDown:b=>b.preventDefault(),onClick:()=>g("insertOrderedList"),children:e.jsx(U2,{})}),e.jsx($a,{type:"button",title:"Inserir link","aria-label":"Inserir link",onMouseDown:b=>b.preventDefault(),onClick:_,children:e.jsx(v1,{})})]}),e.jsx(T4,{ref:p,$minHeight:l,role:"textbox","aria-label":c,contentEditable:!0,suppressContentEditableWarning:!0,"data-placeholder":s,onFocus:()=>{h.current=!0},onBlur:()=>{h.current=!1,f()},onInput:f})]})}const D4=new Set(["P","BR","STRONG","B","EM","I","U","S","STRIKE","H1","H2","H3","UL","OL","LI","A","BLOCKQUOTE","DIV","SPAN"]);function F4(r){return/<\/?[a-z][\s\S]*>/i.test(r)}function L4(r){return r.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ui(r){if(!r.trim())return"";const a=new DOMParser().parseFromString(r,"text/html");function s(l){var p;const c=[...l.childNodes];for(const h of c){if(h.nodeType===Node.COMMENT_NODE){h.remove();continue}if(h.nodeType!==Node.ELEMENT_NODE)continue;const f=h,g=f.tagName;if(g==="SCRIPT"||g==="STYLE"||g==="IFRAME"||g==="OBJECT"){f.remove();continue}if(!D4.has(g)){const _=f.parentNode;if(_){for(;f.firstChild;)_.insertBefore(f.firstChild,f);f.remove()}continue}for(const _ of[...f.attributes]){const b=_.name.toLowerCase();(b.startsWith("on")||b==="style"||b==="srcdoc")&&f.removeAttribute(_.name)}if(g==="A"){const _=((p=f.getAttribute("href"))==null?void 0:p.trim())??"";/^(https?:|mailto:|#)/i.test(_)?(f.setAttribute("target","_blank"),f.setAttribute("rel","noreferrer noopener")):f.removeAttribute("href")}s(f)}}return s(a.body),a.body.innerHTML}function O4(r){return r.trim()?F4(r)?ui(r):r.split(/\n{2,}/).map(a=>`<p>${L4(a).replace(/\n/g,"<br>")}</p>`).join(""):""}function I4(r){return r?(new DOMParser().parseFromString(ui(r),"text/html").body.textContent??"").replace(/\u00a0/g," ").trim():""}function si(r){return!I4(r)}function B4(r){var a;try{const s=new URL(r);if(s.hostname.includes("youtu.be"))return s.pathname.slice(1,12);if(s.hostname.includes("youtube.com"))return s.searchParams.get("v")??((a=s.pathname.match(/\/embed\/([a-zA-Z0-9_-]{11})/))==null?void 0:a[1])??null}catch{return null}return null}const q4=m.div`
  display: grid;
  grid-template-columns: 220px minmax(0, 1fr);
  gap: 18px;
  align-items: start;
  @media (max-width: 900px) { grid-template-columns: 1fr; }
`,U4=m.div`
  display: grid; gap: 7px;
  button { display: flex; align-items: center; justify-content: space-between; gap: 8px; width: 100%; padding: 10px 11px; border: 1px solid var(--border); border-radius: 9px; color: var(--muted); background: var(--surface); text-align: left; font-size: 12px; cursor: pointer; &:hover { border-color: var(--primary); background: var(--surface-raised); } }
  button[data-active='true'] { border-color: var(--primary); color: var(--primary-strong); background: color-mix(in srgb, var(--primary) 16%, var(--surface)); font-weight: 700; }
  span { min-width: 22px; padding: 3px 6px; border-radius: 999px; color: var(--muted); background: var(--surface-raised); text-align: center; font-size: 10px; }
`,H4=m.div`
  display: grid; grid-template-columns: repeat(auto-fill, minmax(min(100%, 290px), 1fr)); gap: 13px;
`,V4=m.article`
  display: grid; gap: 13px; padding: 17px; border: 1px solid var(--border); border-radius: 14px; background: var(--surface); box-shadow: 0 4px 14px var(--shadow); transition: .15s ease;
  &:hover { transform: translateY(-2px); border-color: var(--primary); box-shadow: 0 10px 24px var(--shadow); }
`,W4=m.div`
  display: flex; align-items: flex-start; justify-content: space-between; gap: 10px;
  h3 { margin: 0; color: var(--text); font-size: 15px; line-height: 1.4; overflow-wrap: anywhere; }
  p { margin: 4px 0 0; color: var(--muted); font-size: 11px; }
`,G4=m.span`
  display: grid; width: 36px; height: 36px; flex: 0 0 auto; place-items: center; border-radius: 10px; color: var(--primary); background: color-mix(in srgb, var(--primary) 16%, var(--surface)); svg { width: 18px; height: 18px; }
`,Q4=m.div`
  display: -webkit-box; max-height: 82px; margin: 0; overflow: hidden; color: var(--muted); font-size: 12px; line-height: 1.55; -webkit-box-orient: vertical; -webkit-line-clamp: 4;
  & > :first-child { margin-top: 0; }
  p, h1, h2, h3, blockquote { margin: 0 0 5px; font-size: inherit; line-height: inherit; }
  ul, ol { margin: 3px 0; padding-left: 18px; }
  strong, b { color: var(--text); }
  a { color: var(--primary-strong); }
`,K4=m.div`
  color: var(--text); font-size: 14px; line-height: 1.75; overflow-wrap: anywhere;
  p, h1, h2, h3, blockquote { margin: 0 0 12px; }
  h1, h2, h3, strong, b { color: var(--text); }
  ul, ol { padding-left: 22px; }
  blockquote { padding: 8px 12px; border-left: 3px solid var(--primary); color: var(--muted); background: var(--surface-raised); }
  a { color: var(--primary-strong); }
`,Y4=m.p`
  display: flex; flex-wrap: wrap; gap: 7px; margin: 0 0 14px; color: var(--muted); font-size: 12px;
`,_g=m.div`
  display: flex; flex-wrap: wrap; gap: 5px; span { padding: 4px 7px; border-radius: 999px; color: var(--muted); background: var(--surface-raised); font-size: 10px; }
`,J4=m.div`
  display: flex; align-items: center; justify-content: space-between; gap: 7px; padding-top: 10px; border-top: 1px solid var(--border);
`,X4=m.div`
  display: flex; gap: 7px;
`,kg=m.button`
  display: grid; width: 32px; height: 32px; place-items: center; border: 1px solid var(--border); border-radius: 8px; color: var(--muted); background: var(--surface-raised); cursor: pointer; &:hover { color: var(--primary); background: var(--surface); } &[data-danger='true']:hover { color: var(--error); background: var(--error-soft); } svg { width: 15px; height: 15px; }
`,Z4=m(Ie)`
  margin-bottom: 18px;
`,e3=m.div`
  display: grid; grid-template-columns: 1fr 1fr; gap: 0 15px; @media (max-width: 620px) { grid-template-columns: 1fr; }
`,t3=m.div`
  display: flex; justify-content: flex-end; gap: 8px; margin-top: 8px; flex-wrap: wrap;
`,r3=m.div`
  display: flex; flex-wrap: wrap; align-items: flex-end; gap: 10px; margin-bottom: 18px; padding: 14px; border: 1px solid var(--border); border-radius: 12px; background: var(--surface-raised);
  ${Z} { min-width: 170px; flex: 1; margin: 0; }
`,n3=m.div`
  display: flex; justify-content: space-between; align-items: center; gap: 10px; margin-top: 18px; color: var(--muted); font-size: 11px;
`,Fl={link:"Link",texto:"Texto",documento:"Documento",video:"Vídeo",curso:"Curso",livro:"Livro",artigo:"Artigo",outro:"Outro"};function a3(r){return r==="link"?e.jsx(v1,{}):r==="video"?e.jsx(sk,{}):r==="documento"||r==="artigo"?e.jsx(D2,{}):e.jsx(Xr,{})}function i3({resources:r,areas:a,loading:s,saving:l,pagination:c,filters:p,onFiltersChange:h,onPageChange:f,onCreate:g,onDelete:_,onEdit:b}){const[k,C]=x.useState(!1),[N,O]=x.useState(null),[$,V]=x.useState(""),[R,j]=x.useState(""),[T,F]=x.useState("texto"),[ne,X]=x.useState(""),[L,oe]=x.useState(""),[S,y]=x.useState(""),[q,de]=x.useState(""),be=x.useMemo(()=>a.reduce((Q,ge)=>Q+ge.count,0),[a]);function ke(){C(!1),V(""),j(""),F("texto"),X(""),oe(""),y(""),de("")}async function ze(Q){if(Q.preventDefault(),de(""),!ne.trim()&&si(L)){de("Informe uma URL ou escreva o conteúdo do material.");return}const ge={title:$.trim(),area:R.trim(),type:T,url:ne.trim()||null,content:si(L)?null:ui(L).slice(0,2e4),tags:S.split(",").map(xe=>xe.trim()).filter(Boolean)};await g(ge)&&ke()}return e.jsxs(e.Fragment,{children:[e.jsxs(Pr,{children:[e.jsxs("div",{children:[e.jsx("h1",{children:"Biblioteca de estudos"}),e.jsx("p",{children:"Guarde links, resumos e materiais para revisar quando precisar."})]}),e.jsxs(ue,{$variant:"primary",onClick:k?ke:()=>C(!0),children:[k?e.jsx(pr,{}):e.jsx(gt,{}),k?"Fechar":"Novo material"]})]}),k&&e.jsxs(Z4,{children:[e.jsxs(Fe,{children:[e.jsx(Xr,{size:19,color:"var(--primary)"}),"Adicionar material"]}),e.jsxs("form",{onSubmit:Q=>{ze(Q)},children:[e.jsxs(e3,{children:[e.jsxs(Z,{children:["Título *",e.jsx("input",{value:$,onChange:Q=>V(Q.target.value),maxLength:200,required:!0,placeholder:"Ex.: Anotações de álgebra"})]}),e.jsxs(Z,{children:["Área *",e.jsx("input",{value:R,onChange:Q=>j(Q.target.value),maxLength:100,required:!0,placeholder:"Ex.: Matemática"})]}),e.jsxs(Z,{children:["Tipo *",e.jsx(nn,{value:T,onChange:Q=>F(Q.target.value),children:Object.entries(Fl).map(([Q,ge])=>e.jsx("option",{value:Q,children:ge},Q))})]}),e.jsxs(Z,{children:["Tags ",e.jsx("small",{children:"(separadas por vírgula)"}),e.jsx("input",{value:S,onChange:Q=>y(Q.target.value),placeholder:"álgebra, revisão"})]})]}),e.jsxs(Z,{children:["URL ",e.jsx("small",{children:"(opcional se houver conteúdo)"}),e.jsx("input",{type:"url",value:ne,onChange:Q=>X(Q.target.value),placeholder:"https://..."})]}),e.jsxs(Z,{as:"div",children:["Conteúdo ",e.jsx("small",{children:"(opcional se houver URL)"}),e.jsx(L1,{value:L,onChange:oe,minHeight:280,placeholder:"Resumo, anotações ou pontos importantes...",ariaLabel:"Conteúdo do material"})]}),q&&e.jsx("p",{role:"alert",style:{color:"var(--error)",fontSize:12},children:q}),e.jsxs(t3,{children:[e.jsx(ue,{type:"button",onClick:ke,children:"Cancelar"}),e.jsxs(ue,{type:"submit",$variant:"primary",disabled:l,children:[l?e.jsx(Ze,{className:"spin"}):e.jsx(gt,{}),"Adicionar material"]})]})]})]}),e.jsxs(r3,{children:[e.jsxs(Z,{children:[e.jsx(b1,{size:14}),"Buscar material",e.jsx("input",{value:p.search,onChange:Q=>h({...p,search:Q.target.value}),placeholder:"Título, conteúdo ou tag"})]}),e.jsxs(Z,{children:["Área",e.jsxs(nn,{value:p.area,onChange:Q=>h({...p,area:Q.target.value}),children:[e.jsx("option",{value:"",children:"Todas as áreas"}),a.map(Q=>e.jsx("option",{value:Q.area,children:Q.area},Q.area))]})]}),e.jsxs(Z,{children:["Tipo",e.jsxs(nn,{value:p.type,onChange:Q=>h({...p,type:Q.target.value}),children:[e.jsx("option",{value:"",children:"Todos os tipos"}),Object.entries(Fl).map(([Q,ge])=>e.jsx("option",{value:Q,children:ge},Q))]})]}),e.jsxs(ue,{type:"button",onClick:()=>h({area:"",type:"",search:""}),children:[e.jsx(F2,{}),"Limpar"]})]}),e.jsxs(q4,{children:[e.jsxs(Ie,{children:[e.jsxs(Fe,{children:[e.jsx(Xr,{size:18,color:"var(--primary)"}),"Áreas"]}),e.jsxs(U4,{children:[e.jsxs("button",{type:"button","data-active":!p.area,onClick:()=>h({...p,area:""}),children:[e.jsx("span",{children:"Todas as áreas"}),e.jsx("span",{children:be})]}),a.map(Q=>e.jsxs("button",{type:"button","data-active":p.area===Q.area,onClick:()=>h({...p,area:Q.area}),children:[e.jsx("span",{children:Q.area}),e.jsx("span",{children:Q.count})]},Q.area))]})]}),e.jsxs(Ie,{children:[e.jsxs(Fe,{children:[e.jsx(Xr,{size:18,color:"var(--primary)"}),"Materiais ",e.jsx(Rr,{children:c.total})]}),s?e.jsxs(Ge,{children:[e.jsx(Ze,{}),e.jsx("p",{children:"Carregando materiais..."})]}):r.length===0?e.jsxs(Ge,{children:[e.jsx(Xr,{size:32}),e.jsx("h3",{children:"Nenhum material encontrado"}),e.jsx("p",{children:"Adicione um resumo, link ou conteúdo para começar sua biblioteca."})]}):e.jsxs(e.Fragment,{children:[e.jsx(H4,{children:r.map(Q=>{const ge=Q.content&&!si(Q.content)?ui(Q.content):"";return e.jsxs(V4,{children:[e.jsx(W4,{children:e.jsxs("div",{style:{display:"flex",gap:10,minWidth:0},children:[e.jsx(G4,{children:a3(Q.type)}),e.jsxs("div",{children:[e.jsx("h3",{children:Q.title}),e.jsxs("p",{children:[Q.area," · ",Fl[Q.type]]})]})]})}),ge&&e.jsx(Q4,{dangerouslySetInnerHTML:{__html:ge}}),Q.url&&e.jsxs("a",{href:Q.url,target:"_blank",rel:"noreferrer",style:{color:"var(--primary)",fontSize:12,overflowWrap:"anywhere"},children:[e.jsx(mc,{size:13,style:{verticalAlign:"middle",marginRight:5}}),"Abrir material"]}),Q.tags.length>0&&e.jsx(_g,{children:Q.tags.map(le=>e.jsxs("span",{children:["#",le]},le))}),e.jsxs(J4,{children:[e.jsxs(ue,{type:"button",onClick:()=>O(Q),children:[e.jsx(Co,{}),"Detalhes"]}),e.jsxs(X4,{children:[e.jsx(kg,{type:"button",title:"Editar material","aria-label":`Editar ${Q.title}`,onClick:()=>b(Q),children:e.jsx(rn,{})}),e.jsx(kg,{type:"button",title:"Excluir material","aria-label":`Excluir ${Q.title}`,"data-danger":"true",onClick:()=>{window.confirm(`Excluir o material “${Q.title}”?`)&&_(Q)},children:e.jsx($r,{})})]})]})]},Q.id)})}),e.jsxs(n3,{children:[e.jsxs("span",{children:[c.total," materiais · Página ",c.page," de ",c.totalPages||1]}),e.jsxs("div",{style:{display:"flex",gap:7},children:[e.jsx(ue,{type:"button",disabled:!c.hasPreviousPage||s,onClick:()=>f(c.page-1),children:"Anterior"}),e.jsx(ue,{type:"button",disabled:!c.hasNextPage||s,onClick:()=>f(c.page+1),children:"Próxima"})]})]})]})]})]}),e.jsx(ns,{open:N!==null,title:(N==null?void 0:N.title)??"Detalhes do material",icon:e.jsx(Xr,{size:18}),onClose:()=>O(null),children:N&&e.jsxs(e.Fragment,{children:[e.jsxs(Y4,{children:[e.jsx("span",{children:N.area}),e.jsx("span",{children:"·"}),e.jsx("span",{children:Fl[N.type]})]}),N.tags.length>0&&e.jsx(_g,{style:{marginBottom:16},children:N.tags.map(Q=>e.jsxs("span",{children:["#",Q]},Q))}),N.url&&e.jsxs("a",{href:N.url,target:"_blank",rel:"noreferrer",style:{display:"inline-flex",alignItems:"center",gap:6,marginBottom:16,color:"var(--primary-strong)",fontSize:13,overflowWrap:"anywhere"},children:[e.jsx(mc,{size:14}),"Abrir material"]}),N.content&&!si(N.content)?e.jsx(K4,{dangerouslySetInnerHTML:{__html:ui(N.content)}}):e.jsx("p",{style:{color:"var(--muted)",fontSize:13},children:"Este material não tem conteúdo adicional."})]})})]})}const s3=m.div`
  display: grid; grid-template-columns: 1fr 1fr; gap: 0 15px;
  @media (max-width: 620px) { grid-template-columns: 1fr; }
`,o3=m.div`
  display: flex; flex-wrap: wrap; gap: 5px;
  span { padding: 4px 7px; border-radius: 999px; color: var(--muted); background: var(--surface-raised); font-size: 10px; }
`,l3=m.div`
  min-height: 220px; padding: 16px; border: 1px solid var(--border); border-radius: 12px;
  background: var(--surface); color: var(--text); font-size: 14px; line-height: 1.7;
  h1, h2, h3 { margin: 0 0 10px; }
  p { margin: 0 0 10px; }
  ul, ol { margin: 0 0 10px; padding-left: 22px; }
  a { color: var(--primary-strong); }
`,Sg=m.div`
  overflow: hidden; margin-bottom: 12px; border: 1px solid var(--border); border-radius: 12px; background: #000;
  iframe, img { display: block; width: 100%; aspect-ratio: 16 / 9; border: 0; object-fit: cover; }
`,Cg={link:"Link",texto:"Texto",documento:"Documento",video:"Vídeo",curso:"Curso",livro:"Livro",artigo:"Artigo",outro:"Outro"};function c3(r){return/\.(png|jpe?g|gif|webp|svg)(\?.*)?$/i.test(r)}function d3({resource:r,loading:a,saving:s,onBack:l,onSave:c}){const[p,h]=x.useState(""),[f,g]=x.useState(""),[_,b]=x.useState("texto"),[k,C]=x.useState(""),[N,O]=x.useState(""),[$,V]=x.useState(""),[R,j]=x.useState(""),T=x.useMemo(()=>$.split(",").map(L=>L.trim()).filter(Boolean),[$]),F=x.useMemo(()=>ui(N),[N]),ne=x.useMemo(()=>k.trim()?B4(k.trim()):null,[k]);x.useEffect(()=>{r&&(h(r.title),g(r.area),b(r.type),C(r.url??""),O(O4(r.content??"")),V(r.tags.join(", ")),j(""))},[r==null?void 0:r.id]);async function X(L){if(L.preventDefault(),j(""),!k.trim()&&si(N)){j("Informe uma URL ou escreva o conteúdo do material.");return}const oe={title:p.trim(),area:f.trim(),type:_,url:k.trim()||null,content:si(N)?null:ui(N).slice(0,2e4),tags:T};await c(oe)}return a&&!r?e.jsx(Ie,{children:e.jsx("p",{style:{margin:0,color:"var(--muted)"},children:"Carregando material..."})}):r?e.jsxs(e.Fragment,{children:[e.jsxs(Pr,{children:[e.jsxs("div",{children:[e.jsx("h1",{children:"Editar material"}),e.jsx("p",{children:"Escreva, formate e visualize o conteúdo em uma página completa."})]}),e.jsxs(ue,{type:"button",onClick:l,children:[e.jsx(hc,{}),"Voltar"]})]}),e.jsxs(gf,{children:[e.jsxs(Ie,{children:[e.jsxs(Fe,{children:[e.jsx(Xr,{size:19,color:"var(--primary)"}),"Dados e conteúdo"]}),e.jsxs("form",{onSubmit:L=>{X(L)},children:[e.jsxs(s3,{children:[e.jsxs(Z,{children:["Título *",e.jsx("input",{value:p,onChange:L=>h(L.target.value),maxLength:200,required:!0,placeholder:"Ex.: Anotações de álgebra"})]}),e.jsxs(Z,{children:["Área *",e.jsx("input",{value:f,onChange:L=>g(L.target.value),maxLength:100,required:!0,placeholder:"Ex.: Matemática"})]}),e.jsxs(Z,{children:["Tipo *",e.jsx(nn,{value:_,onChange:L=>b(L.target.value),children:Object.entries(Cg).map(([L,oe])=>e.jsx("option",{value:L,children:oe},L))})]}),e.jsxs(Z,{children:["Tags ",e.jsx("small",{children:"(separadas por vírgula)"}),e.jsx("input",{value:$,onChange:L=>V(L.target.value),placeholder:"álgebra, revisão"})]})]}),e.jsxs(Z,{children:["URL ",e.jsx("small",{children:"(opcional se houver conteúdo)"}),e.jsx("input",{type:"url",value:k,onChange:L=>C(L.target.value),placeholder:"https://..."})]}),e.jsxs(Z,{as:"div",children:["Conteúdo ",e.jsx("small",{children:"(opcional se houver URL)"}),e.jsx(L1,{value:N,onChange:O,minHeight:420,placeholder:"Resumo, anotações ou pontos importantes...",ariaLabel:"Conteúdo do material"})]}),R&&e.jsx("p",{role:"alert",style:{color:"var(--error)",fontSize:12},children:R}),e.jsxs(bf,{children:[e.jsx(ue,{type:"button",onClick:l,children:"Cancelar"}),e.jsxs(ue,{type:"submit",$variant:"primary",disabled:s,children:[s?e.jsx(Ze,{className:"spin"}):e.jsx(Eo,{}),"Salvar alterações"]})]})]})]}),e.jsxs(Ie,{children:[e.jsx(Fe,{children:"Visualização"}),e.jsxs(wf,{children:[e.jsxs(_f,{children:[e.jsx(Xr,{size:18}),p.trim()||"Título do material"]}),e.jsxs(kf,{children:[e.jsxs("span",{children:["Área: ",f.trim()||"Sem área"]}),e.jsxs("span",{children:["Tipo: ",Cg[_]]})]}),T.length>0&&e.jsx(o3,{style:{marginTop:12},children:T.map(L=>e.jsxs("span",{children:["#",L]},L))})]}),k.trim()&&e.jsxs(e.Fragment,{children:[e.jsx(Fe,{children:"Material"}),ne?e.jsx(Sg,{children:e.jsx("iframe",{title:"Visualização do vídeo",src:`https://www.youtube.com/embed/${ne}`,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})}):c3(k.trim())?e.jsx(Sg,{children:e.jsx("img",{src:k.trim(),alt:p.trim()||"Material"})}):null,e.jsxs("a",{href:k.trim(),target:"_blank",rel:"noreferrer",style:{display:"inline-flex",alignItems:"center",gap:6,marginBottom:18,color:"var(--primary)",fontSize:13,overflowWrap:"anywhere"},children:[e.jsx(mc,{size:14}),"Abrir URL"]})]}),e.jsx(Fe,{children:"Conteúdo"}),si(N)?e.jsx(In,{children:"O conteúdo formatado aparecerá aqui enquanto você escreve."}):e.jsx(l3,{dangerouslySetInnerHTML:{__html:F}})]})]})]}):e.jsxs(e.Fragment,{children:[e.jsx(Pr,{children:e.jsxs("div",{children:[e.jsx("h1",{children:"Material não encontrado"}),e.jsx("p",{children:"Não foi possível localizar esse material na biblioteca."})]})}),e.jsxs(ue,{type:"button",onClick:l,children:[e.jsx(hc,{}),"Voltar para biblioteca"]})]})}const ep=m.div`display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,280px),1fr));gap:14px;`,tp=m.article`display:grid;gap:15px;padding:18px;border:1px solid var(--border);border-radius:14px;background:var(--surface);transition:.15s ease;&:hover{transform:translateY(-2px);box-shadow:0 10px 24px var(--shadow);}`,rp=m.div`display:flex;justify-content:space-between;align-items:flex-start;gap:12px;h3{margin:0 0 5px;color:var(--text);font-size:15px}p{margin:0;color:var(--muted);font-size:12px}`,np=m.span`display:grid;width:38px;height:38px;place-items:center;border-radius:11px;color:var(--primary);background:color-mix(in srgb,var(--primary) 16%,var(--surface));`,ap=m.strong`color:${r=>r.$negative?"var(--error)":"var(--success)"};font-size:23px;small{display:block;margin-top:5px;color:var(--muted);font-size:11px;font-weight:500}`,ip=m.div`display:flex;justify-content:flex-end;gap:7px;padding-top:11px;border-top:1px solid var(--border);`,ti=m.button`display:grid;width:32px;height:32px;place-items:center;border:1px solid var(--border);border-radius:8px;color:var(--muted);background:var(--surface-raised);cursor:pointer;&:hover{color:var(--primary);background:var(--surface)}&[data-danger=true]:hover{color:var(--error);background:var(--error-soft)}`,sp=m.div`display:grid;grid-template-columns:1fr 1fr;gap:0 15px;@media(max-width:620px){grid-template-columns:1fr}`,op=m.div`display:flex;justify-content:flex-end;gap:8px;margin-top:8px;flex-wrap:wrap;`,Ll=m.span`display:inline-flex;padding:4px 8px;border-radius:999px;color:var(--muted);background:var(--surface-raised);font-size:10px;font-weight:700;`,Eg=m.div`display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;color:var(--muted);font-size:11px;strong{display:block;margin-top:3px;color:var(--text);font-size:13px}`,u3=m.div`position:fixed;z-index:1000;inset:0;display:grid;place-items:center;padding:16px;background:rgba(19,31,51,.48);backdrop-filter:blur(5px);`,p3=m(Ie)`width:min(700px,calc(100vw - 32px));max-height:min(88vh,760px);overflow-y:auto;margin:0;padding:24px;box-shadow:0 24px 70px rgba(20,38,66,.22);@media(max-width:620px){width:calc(100vw - 20px);padding:18px;max-height:92vh}`,f3=m.div`display:flex;align-items:flex-start;justify-content:space-between;gap:12px;margin-bottom:14px;`,h3=m.button`display:grid;width:34px;height:34px;place-items:center;border:1px solid var(--border);border-radius:9px;color:var(--muted);background:var(--surface-raised);cursor:pointer;&:hover{color:var(--primary);background:var(--surface)}`,$g={conta_corrente:"Conta corrente",poupanca:"Poupança",investimento:"Investimento",dinheiro:"Dinheiro",outro:"Outro"},Rg={carro:"Carro",moto:"Moto",imovel:"Imóvel",outro:"Outro bem"},Pg={proprio:"Próprio",financiado:"Financiado",alugado:"Alugado",outro:"Outro"},zg={financiamento:"Financiamento",cartao_credito:"Cartão de crédito",emprestimo:"Empréstimo",aluguel:"Aluguel",conta:"Conta",outro:"Outro"};function Sn(r){return new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(r||0)}function m3(r){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(r||0)}function Js(r){const a=r.trim().startsWith("-"),s=r.replace(/\D/g,"");if(!s)return"";const l=(s.slice(0,-2)||"0").replace(/^0+(?=\d)/,"");return`${a?"-":""}${l.replace(/\B(?=(\d{3})+(?!\d))/g,".")},${s.slice(-2).padStart(2,"0")}`}function ri(r){const a=r.trim().replace(/[^\d,.-]/g,"");return a?a.includes(",")?Number(a.replace(/\./g,"").replace(",","."))||0:Number(a)||0:0}function Xs(r){return Number.isFinite(r)?new Intl.NumberFormat("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2}).format(r):""}function Ol(r,a){return a==="USD"?m3(r):Sn(r)}function x3(r){return r==="dinheiro"?e.jsx(di,{size:19}):r==="investimento"?e.jsx(hf,{size:19}):e.jsx(mf,{size:19})}function g3(r){return r==="imovel"?e.jsx(ac,{size:19}):r==="carro"?e.jsx(R2,{size:19}):e.jsx(y1,{size:19})}function v3(r){return r==="cartao_credito"?e.jsx(Qi,{size:19}):e.jsx(mf,{size:19})}function lp({open:r,title:a,icon:s,saving:l,onClose:c,children:p}){return r?Ac.createPortal(e.jsx(u3,{role:"presentation",onMouseDown:h=>{h.target===h.currentTarget&&!l&&c()},children:e.jsxs(p3,{role:"dialog","aria-modal":"true","aria-labelledby":"finance-modal-title",onMouseDown:h=>h.stopPropagation(),children:[e.jsxs(f3,{children:[e.jsxs(Fe,{id:"finance-modal-title",children:[s,a]}),e.jsx(h3,{type:"button","aria-label":"Fechar janela",title:"Fechar (Esc)",onClick:c,disabled:l,children:e.jsx(pr,{size:18})})]}),p]})}),document.body):null}function y3({accounts:r,assets:a,liabilities:s,summary:l,loading:c,saving:p,onCreate:h,onUpdate:f,onDelete:g,onCreateAsset:_,onUpdateAsset:b,onDeleteAsset:k,onCreateLiability:C,onUpdateLiability:N,onDeleteLiability:O}){const[$,V]=x.useState(!1),[R,j]=x.useState(null),[T,F]=x.useState(""),[ne,X]=x.useState(""),[L,oe]=x.useState("conta_corrente"),[S,y]=x.useState("BRL"),[q,de]=x.useState(""),[be,ke]=x.useState(!1),[ze,Q]=x.useState(null),[ge,le]=x.useState(""),[xe,H]=x.useState("imovel"),[z,w]=x.useState("BRL"),[re,ae]=x.useState(""),[M,se]=x.useState("proprio"),[ve,je]=x.useState(""),[U,pe]=x.useState(!0),[ot,st]=x.useState(""),[ft,at]=x.useState(!1),[lr,Et]=x.useState(null),[bt,Le]=x.useState(""),[et,ie]=x.useState("outro"),[He,Pt]=x.useState("BRL"),[Kt,Vt]=x.useState(""),[fr,zr]=x.useState(""),[vt,Nr]=x.useState(""),an=$||be||ft;function hr(){V(!1),j(null),F(""),X(""),oe("conta_corrente"),y("BRL"),de(""),st("")}function Dt(){ke(!1),Q(null),le(""),H("imovel"),w("BRL"),ae(""),se("proprio"),je(""),pe(!0),st("")}function Br(){at(!1),Et(null),Le(""),ie("outro"),Pt("BRL"),Vt(""),zr(""),Nr(""),st("")}x.useEffect(()=>{if(!an)return;const J=$t=>{$t.key==="Escape"&&!p&&(hr(),Dt(),Br())};document.addEventListener("keydown",J);const Re=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.removeEventListener("keydown",J),document.body.style.overflow=Re}},[an,p]);function Mr(J){j(J),V(!0),F(J.institution),X(J.account_name),oe(J.account_type),y(J.currency??"BRL"),de(Xs(J.balance))}function qn(J){Q(J),ke(!0),le(J.name),H(J.asset_type),w(J.currency??"BRL"),ae(Xs(J.estimated_value)),se(J.ownership_status),je(Xs(J.monthly_rent)),pe(J.include_in_patrimony!==!1)}function ca(J){var Re;Et(J),at(!0),Le(J.name),ie(J.liability_type),Pt(J.currency??"BRL"),Vt(Xs(J.outstanding_balance)),zr(Xs(J.monthly_payment)),Nr(((Re=J.due_date)==null?void 0:Re.slice(0,10))??"")}async function tr(J){J.preventDefault();const Re={institution:T.trim(),account_name:ne.trim(),account_type:L,currency:S,balance:ri(q)};(R?await f(R.id,Re):await h(Re))&&hr()}async function rr(J){if(J.preventDefault(),st(""),!ge.trim())return st("Informe o nome do bem.");const Re={name:ge.trim(),asset_type:xe,estimated_value:ri(re),currency:z,ownership_status:M,monthly_rent:ri(ve),include_in_patrimony:U};(ze?await b(ze.id,Re):await _(Re))&&Dt()}async function kt(J){if(J.preventDefault(),st(""),!bt.trim()||ri(Kt)<=0)return st("Informe o nome e um valor de passivo válido.");const Re={name:bt.trim(),liability_type:et,original_amount:ri(Kt),outstanding_balance:ri(Kt),monthly_payment:ri(fr),currency:He,due_date:vt||null};(lr?await N(lr.id,Re):await C(Re))&&Br()}const Pn=l.total_patrimony??l.total_balance;return e.jsxs(e.Fragment,{children:[e.jsxs(Pr,{children:[e.jsxs("div",{children:[e.jsx("h1",{children:"Finanças"}),e.jsx("p",{children:"Ativos, passivos e patrimônio líquido em uma visão simples."})]}),e.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap",justifyContent:"flex-end"},children:[e.jsxs(ue,{onClick:()=>at(!0),children:[e.jsx(Qi,{}),"Nova dívida"]}),e.jsxs(ue,{onClick:()=>ke(!0),children:[e.jsx(ac,{}),"Novo ativo"]}),e.jsxs(ue,{$variant:"primary",onClick:()=>V(!0),children:[e.jsx(gt,{}),"Nova conta"]})]})]}),e.jsxs(_k,{children:[e.jsxs(Gs,{children:[e.jsx("p",{children:"Patrimônio líquido em reais"}),e.jsx("strong",{style:{color:Pn<0?"var(--error)":"var(--success)"},children:Sn(Pn)})]}),e.jsxs(Gs,{children:[e.jsx("p",{children:"Total de ativos"}),e.jsx("strong",{children:Sn(l.assets_total_brl??l.total_assets??0)})]}),e.jsxs(Gs,{children:[e.jsx("p",{children:"Total de passivos"}),e.jsx("strong",{style:{color:"var(--error)"},children:Sn(l.liabilities_total_brl??l.total_liabilities??0)})]}),e.jsxs(Gs,{children:[e.jsx("p",{children:"Pagamentos mensais"}),e.jsx("strong",{children:Sn(l.monthly_liability_payments_brl??l.monthly_payments??0)})]}),(l.investment_portfolio_total_value_brl??l.investment_portfolio_value_brl??0)>0&&e.jsxs(Gs,{children:[e.jsx("p",{children:"Carteira ativa"}),e.jsx("strong",{children:Sn(l.investment_portfolio_value_brl??0)}),(l.investment_portfolio_total_value_brl??0)!==(l.investment_portfolio_value_brl??0)&&e.jsxs("small",{style:{color:"var(--muted)"},children:["Total incluindo inativos: ",Sn(l.investment_portfolio_total_value_brl??0)]})]})]}),e.jsx(lp,{open:$,title:R?"Editar conta":"Adicionar conta",icon:e.jsx(di,{size:19,color:"var(--primary)"}),saving:p,onClose:hr,children:e.jsxs("form",{onSubmit:J=>{tr(J)},children:[e.jsxs(sp,{children:[e.jsxs(Z,{children:["Instituição *",e.jsx("input",{value:T,onChange:J=>F(J.target.value),required:!0})]}),e.jsxs(Z,{children:["Nome da conta *",e.jsx("input",{value:ne,onChange:J=>X(J.target.value),required:!0})]}),e.jsxs(Z,{children:["Tipo *",e.jsx("select",{value:L,onChange:J=>oe(J.target.value),children:Object.entries($g).map(([J,Re])=>e.jsx("option",{value:J,children:Re},J))})]}),e.jsxs(Z,{children:["Moeda *",e.jsxs("select",{value:S,onChange:J=>y(J.target.value),children:[e.jsx("option",{value:"BRL",children:"Real (BRL)"}),e.jsx("option",{value:"USD",children:"Dólar (USD)"})]})]}),e.jsxs(Z,{children:["Saldo em ",S," *",e.jsx("input",{inputMode:"decimal",value:q,onChange:J=>de(Js(J.target.value)),required:!0})]})]}),e.jsxs(op,{children:[e.jsx(ue,{type:"button",onClick:hr,children:"Cancelar"}),e.jsxs(ue,{type:"submit",$variant:"primary",disabled:p,children:[p?e.jsx(Ze,{className:"spin"}):e.jsx(gt,{}),"Salvar"]})]})]})}),e.jsx(lp,{open:be,title:ze?"Editar ativo":"Adicionar ativo",icon:e.jsx(ac,{size:19,color:"var(--primary)"}),saving:p,onClose:Dt,children:e.jsxs("form",{onSubmit:J=>{rr(J)},children:[e.jsxs(sp,{children:[e.jsxs(Z,{children:["Nome do ativo *",e.jsx("input",{value:ge,onChange:J=>le(J.target.value),required:!0,placeholder:"Casa, Honda Civic..."})]}),e.jsxs(Z,{children:["Tipo *",e.jsx("select",{value:xe,onChange:J=>H(J.target.value),children:Object.entries(Rg).map(([J,Re])=>e.jsx("option",{value:J,children:Re},J))})]}),e.jsxs(Z,{children:["Valor estimado (",z,") *",e.jsx("input",{inputMode:"decimal",value:re,onChange:J=>ae(Js(J.target.value)),required:!0})]}),e.jsxs(Z,{children:["Moeda *",e.jsxs("select",{value:z,onChange:J=>w(J.target.value),children:[e.jsx("option",{value:"BRL",children:"Real (BRL)"}),e.jsx("option",{value:"USD",children:"Dólar (USD)"})]})]}),e.jsxs(Z,{children:["Situação *",e.jsx("select",{value:M,onChange:J=>se(J.target.value),children:Object.entries(Pg).map(([J,Re])=>e.jsx("option",{value:J,children:Re},J))})]}),e.jsxs(Z,{children:["Aluguel mensal (",z,")",e.jsx("input",{inputMode:"decimal",value:ve,onChange:J=>je(Js(J.target.value))})]})]}),e.jsx("p",{style:{color:"var(--muted)",fontSize:12},children:"Dívidas de um ativo devem ser cadastradas separadamente em passivos."}),e.jsxs("label",{style:{display:"flex",gap:8,alignItems:"center",fontSize:12},children:[e.jsx("input",{type:"checkbox",checked:U,onChange:J=>pe(J.target.checked)})," Incluir no patrimônio total"]}),e.jsxs(op,{children:[e.jsx(ue,{type:"button",onClick:Dt,children:"Cancelar"}),e.jsxs(ue,{type:"submit",$variant:"primary",disabled:p,children:[p?e.jsx(Ze,{className:"spin"}):e.jsx(gt,{}),"Salvar ativo"]})]})]})}),e.jsx(lp,{open:ft,title:lr?"Editar passivo":"Adicionar dívida ou obrigação",icon:e.jsx(Qi,{size:19,color:"var(--error)"}),saving:p,onClose:Br,children:e.jsxs("form",{onSubmit:J=>{kt(J)},children:[e.jsxs(sp,{children:[e.jsxs(Z,{children:["Nome *",e.jsx("input",{value:bt,onChange:J=>Le(J.target.value),required:!0,placeholder:"Financiamento do carro"})]}),e.jsxs(Z,{children:["Tipo *",e.jsx("select",{value:et,onChange:J=>ie(J.target.value),children:Object.entries(zg).map(([J,Re])=>e.jsx("option",{value:J,children:Re},J))})]}),e.jsxs(Z,{children:["Saldo pendente (",He,") *",e.jsx("input",{inputMode:"decimal",value:Kt,onChange:J=>Vt(Js(J.target.value)),required:!0})]}),e.jsxs(Z,{children:["Pagamento mensal (",He,")",e.jsx("input",{inputMode:"decimal",value:fr,onChange:J=>zr(Js(J.target.value))})]}),e.jsxs(Z,{children:["Moeda *",e.jsxs("select",{value:He,onChange:J=>Pt(J.target.value),children:[e.jsx("option",{value:"BRL",children:"Real (BRL)"}),e.jsx("option",{value:"USD",children:"Dólar (USD)"})]})]}),e.jsxs(Z,{children:["Vencimento",e.jsx("input",{type:"date",value:vt,onChange:J=>Nr(J.target.value)})]})]}),ot&&e.jsx("p",{role:"alert",style:{color:"var(--error)"},children:ot}),e.jsxs(op,{children:[e.jsx(ue,{type:"button",onClick:Br,children:"Cancelar"}),e.jsxs(ue,{type:"submit",$variant:"primary",disabled:p,children:[p?e.jsx(Ze,{className:"spin"}):e.jsx(gt,{}),"Salvar passivo"]})]})]})}),e.jsxs(Ie,{children:[e.jsxs(Fe,{children:[e.jsx(mf,{size:19,color:"var(--primary)"}),"Minhas contas ",e.jsx(Rr,{children:r.length})]}),c?e.jsxs(Ge,{children:[e.jsx(Ze,{}),e.jsx("p",{children:"Carregando suas contas..."})]}):r.length===0?e.jsxs(Ge,{children:[e.jsx(di,{size:34}),e.jsx("h3",{children:"Nenhuma conta cadastrada"}),e.jsx("p",{children:"Adicione seu primeiro saldo para começar."})]}):e.jsx(ep,{children:r.map(J=>e.jsxs(tp,{children:[e.jsxs(rp,{children:[e.jsxs("div",{style:{display:"flex",gap:10},children:[e.jsx(np,{children:x3(J.account_type)}),e.jsxs("div",{children:[e.jsx("h3",{children:J.institution}),e.jsx("p",{children:J.account_name})]})]}),e.jsxs("div",{style:{display:"grid",justifyItems:"end",gap:5},children:[e.jsxs(Ll,{children:[J.currency," · ",$g[J.account_type]]}),e.jsx(Ll,{children:J.is_active?"Ativa":"Inativa"})]})]}),e.jsxs(ap,{$negative:J.balance_brl<0,children:[Ol(J.balance,J.currency),J.currency==="USD"&&e.jsxs("small",{children:["≈ ",Sn(J.balance_brl)]})]}),e.jsxs(ip,{children:[e.jsx(ti,{type:"button",title:J.is_active?"Desativar conta":"Ativar conta","aria-label":J.is_active?"Desativar conta":"Ativar conta",disabled:p,onClick:()=>void f(J.id,{is_active:!J.is_active}),children:J.is_active?e.jsx(xc,{size:15}):e.jsx(gc,{size:15})}),e.jsx(ti,{type:"button",title:"Editar conta","aria-label":"Editar conta",onClick:()=>Mr(J),children:e.jsx(rn,{size:15})}),e.jsx(ti,{type:"button",title:"Excluir conta","aria-label":"Excluir conta","data-danger":"true",onClick:()=>{window.confirm(`Excluir a conta “${J.account_name}”?`)&&g(J)},children:e.jsx($r,{size:15})})]})]},J.id))})]}),e.jsxs(Ie,{style:{marginTop:18},children:[e.jsxs(Fe,{children:[e.jsx(y1,{size:19,color:"var(--primary)"}),"Meus ativos ",e.jsx(Rr,{children:a.length})]}),c?e.jsxs(Ge,{children:[e.jsx(Ze,{}),e.jsx("p",{children:"Carregando seus ativos..."})]}):a.length===0?e.jsxs(Ge,{children:[e.jsx(ac,{size:34}),e.jsx("h3",{children:"Nenhum ativo cadastrado"}),e.jsx("p",{children:"Cadastre carros, motos, imóveis ou outros bens."})]}):e.jsx(ep,{children:a.map(J=>{const Re=J.net_value_brl??J.estimated_value_brl??(J.include_in_patrimony===!1?0:J.estimated_value);return e.jsxs(tp,{children:[e.jsxs(rp,{children:[e.jsxs("div",{style:{display:"flex",gap:10},children:[e.jsx(np,{children:g3(J.asset_type)}),e.jsxs("div",{children:[e.jsx("h3",{children:J.name}),e.jsxs("p",{children:[Rg[J.asset_type]," · ",Pg[J.ownership_status]]})]})]}),e.jsx(Ll,{children:J.currency})]}),e.jsxs(ap,{$negative:Re<0,children:[Sn(Re),e.jsxs("small",{children:["Valor líquido",J.include_in_patrimony===!1?" · fora do patrimônio":""]})]}),e.jsxs(Eg,{children:[e.jsxs("span",{children:["Estimado",e.jsx("strong",{children:Ol(J.estimated_value,J.currency)})]}),J.monthly_rent>0&&e.jsxs("span",{children:["Aluguel",e.jsx("strong",{children:Ol(J.monthly_rent,J.currency)})]})]}),e.jsxs(ip,{children:[e.jsx(ti,{title:"Editar ativo",onClick:()=>qn(J),children:e.jsx(rn,{size:15})}),e.jsx(ti,{title:"Excluir ativo","data-danger":"true",onClick:()=>{window.confirm(`Excluir o ativo “${J.name}”?`)&&k(J)},children:e.jsx($r,{size:15})})]})]},J.id)})})]}),e.jsxs(Ie,{style:{marginTop:18},children:[e.jsxs(Fe,{children:[e.jsx(Qi,{size:19,color:"var(--error)"}),"Meus passivos ",e.jsx(Rr,{children:s.length})]}),c?e.jsxs(Ge,{children:[e.jsx(Ze,{}),e.jsx("p",{children:"Carregando seus passivos..."})]}):s.length===0?e.jsxs(Ge,{children:[e.jsx(Qi,{size:34}),e.jsx("h3",{children:"Nenhum passivo cadastrado"}),e.jsx("p",{children:"Cadastre dívidas, financiamentos e obrigações para acompanhar seu patrimônio líquido."})]}):e.jsx(ep,{children:s.map(J=>{const Re=J.outstanding_balance_brl??J.outstanding_balance,$t=J.monthly_payment_brl??J.monthly_payment;return e.jsxs(tp,{children:[e.jsxs(rp,{children:[e.jsxs("div",{style:{display:"flex",gap:10},children:[e.jsx(np,{children:v3(J.liability_type)}),e.jsxs("div",{children:[e.jsx("h3",{children:J.name}),e.jsxs("p",{children:[zg[J.liability_type]??J.liability_type,J.due_date?` · vence em ${new Date(J.due_date).toLocaleDateString("pt-BR")}`:""]})]})]}),e.jsx(Ll,{children:J.currency})]}),e.jsxs(ap,{$negative:!0,children:[Sn(Re),e.jsx("small",{children:"Saldo pendente em reais"})]}),e.jsxs(Eg,{children:[e.jsxs("span",{children:["Pagamento mensal",e.jsx("strong",{children:Ol($t,J.currency)})]}),e.jsxs("span",{children:["Impacto",e.jsxs("strong",{style:{color:"var(--error)"},children:["− ",Sn(Re)]})]})]}),e.jsxs(ip,{children:[e.jsx(ti,{title:"Editar passivo",onClick:()=>ca(J),children:e.jsx(rn,{size:15})}),e.jsx(ti,{title:"Excluir passivo","data-danger":"true",onClick:()=>{window.confirm(`Excluir o passivo “${J.name}”?`)&&O(J)},children:e.jsx($r,{size:15})})]})]},J.id)})})]})]})}const j3=m.div`
  display: grid;
  gap: 20px;
`,b3=m.div`
  max-width: 620px;
`,w3=m.div`
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
`,_3=m.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 13px;
  @media (max-width: 720px) { grid-template-columns: 1fr; }
`,cp=m(Ie)`
  display: grid;
  grid-template-columns: 44px minmax(0, 1fr);
  align-items: center;
  gap: 13px;
  padding: 18px;
  > span { display: grid; width: 44px; height: 44px; place-items: center; border-radius: 14px; color: var(--primary-strong); background: color-mix(in srgb, var(--primary) 16%, var(--surface)); }
  small { display: block; color: var(--muted); font-size: 11px; }
  strong { display: block; margin-top: 3px; color: var(--text); font-size: 23px; }
  p { margin: 4px 0 0; color: var(--muted); font-size: 11px; }
`,k3=m.div`
  display: grid;
  grid-template-columns: minmax(0, 1.3fr) minmax(270px, .7fr);
  gap: 18px;
  align-items: start;
  @media (max-width: 900px) { grid-template-columns: 1fr; }
`,S3=m.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  align-items: end;
  gap: 10px;
  min-height: 190px;
  padding-top: 18px;
`,C3=m.div`
  display: grid;
  grid-template-rows: 18px 1fr auto;
  justify-items: center;
  gap: 8px;
  height: 170px;
  color: var(--muted);
  font-size: 10px;
`,E3=m.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: flex-end;
  justify-content: center;
  padding: 0 3px;
  border-bottom: 1px solid var(--border);
`,$3=m.div`
  width: min(28px, 70%);
  height: ${({$height:r})=>`${r}%`};
  min-height: 3px;
  border-radius: 8px 8px 3px 3px;
  background: ${({$today:r})=>r?"var(--primary-strong)":"var(--primary)"};
  box-shadow: 0 5px 12px color-mix(in srgb, var(--primary) 18%, transparent);
  transition: height .25s ease;
`,R3=m.span`
  white-space: nowrap;
`,P3=m.form`
  display: grid;
  gap: 8px;
  > div { display: flex; align-items: flex-end; gap: 8px; }
  ${Z} { flex: 1; margin: 0; }
  input { max-width: 180px; }
`,z3=m.form`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) minmax(150px, .8fr) auto;
  align-items: end;
  gap: 10px;
  padding: 15px;
  margin-bottom: 17px;
  border: 1px solid var(--border);
  border-radius: 14px;
  background: var(--surface-raised);
  ${Z} { margin: 0; }
  @media (max-width: 760px) { grid-template-columns: 1fr 1fr; }
  @media (max-width: 480px) { grid-template-columns: 1fr; }
`,N3=m.div`
  display: grid;
  gap: 11px;
`,M3=m.article`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 15px;
  padding: 17px;
  border: 1px solid var(--border);
  border-left: 3px solid var(--primary);
  border-radius: 15px;
  background: var(--surface);
  box-shadow: 0 5px 16px var(--shadow);
  @media (max-width: 620px) { grid-template-columns: 1fr; }
`,A3=m.div`
  min-width: 0;
  h3 { margin: 0; color: var(--text); font-size: 15px; line-height: 1.4; overflow-wrap: anywhere; }
  p { margin: 6px 0 0; color: var(--muted); font-size: 12px; line-height: 1.55; white-space: pre-wrap; overflow-wrap: anywhere; }
`,T3=m.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 7px 14px;
  margin-top: 11px;
  color: var(--muted);
  font-size: 11px;
  span, a { display: inline-flex; align-items: center; gap: 5px; }
  svg { width: 14px; height: 14px; }
  a { color: var(--primary-strong); text-decoration: none; }
  a:hover { text-decoration: underline; }
`,D3=m.div`
  display: grid;
  justify-items: end;
  align-content: space-between;
  gap: 14px;
  @media (max-width: 620px) { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; }
`,F3=m.span`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 6px 9px;
  border-radius: var(--radius-full);
  color: ${({$status:r})=>r==="concluido"?"var(--success)":r==="cancelado"?"var(--error)":"var(--primary-strong)"};
  background: ${({$status:r})=>r==="concluido"?"var(--success-soft)":r==="cancelado"?"var(--error-soft)":"var(--primary-soft)"};
  font-size: 10px;
  font-weight: 800;
`,L3=m.div`
  display: flex;
  justify-content: flex-end;
  gap: 6px;
`,dp=m.button`
  display: grid;
  width: 34px;
  height: 34px;
  place-items: center;
  border: 1px solid var(--border);
  border-radius: 9px;
  color: var(--muted);
  background: var(--surface-raised);
  &:hover { color: var(--primary); border-color: var(--primary); }
  &[data-danger='true']:hover { color: var(--error); background: var(--error-soft); }
  svg { width: 15px; height: 15px; }
`,O3=m.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 14px;
  ${Z}:first-child, ${Z}:last-of-type { grid-column: 1 / -1; }
  @media (max-width: 620px) { grid-template-columns: 1fr; ${Z} { grid-column: auto; } }
`,I3=m.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  grid-column: 1 / -1;
  margin-top: 3px;
`,B3=m.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin-top: 17px;
  color: var(--muted);
  font-size: 11px;
`,Ng=()=>({title:"",study_date:O1(new Date),topic:"",study_time:"",duration_minutes:"30",status:"planejado",material_url:"",content:""});function O1(r){return`${r.getFullYear()}-${String(r.getMonth()+1).padStart(2,"0")}-${String(r.getDate()).padStart(2,"0")}`}function up(r){return new Date(`${r.slice(0,10)}T12:00:00`).toLocaleDateString("pt-BR",{weekday:"short",day:"numeric",month:"short"})}function Vp(r){return r?r.slice(0,5):null}function Zs(r,a){var s,l;return jt.isAxiosError(r)&&((l=(s=r.response)==null?void 0:s.data)==null?void 0:l.error)||a}function q3(r){return{title:r.title,study_date:r.study_date.slice(0,10),topic:r.topic??"",study_time:Vp(r.study_time)??"",duration_minutes:String(r.duration_minutes),status:r.status,material_url:r.material_url??"",content:r.content??""}}function U3(r){return{title:r.title.trim(),study_date:r.study_date,topic:r.topic.trim()||null,study_time:r.study_time||null,duration_minutes:Number(r.duration_minutes),status:r.status,material_url:r.material_url.trim()||null,content:r.content.trim()||null}}const H3={planejado:"Planejado",concluido:"Concluído",cancelado:"Cancelado"};function V3({onNavigate:r}){const[a,s]=x.useState(),[l,c]=x.useState(),[p,h]=x.useState(30),[f,g]=x.useState("30"),[_,b]=x.useState({page:1,limit:20}),[k,C]=x.useState({from:"",to:"",status:""}),[N,O]=x.useState(Ng),[$,V]=x.useState(null),[R,j]=x.useState(!1),[T,F]=x.useState(null),[ne,X]=x.useState(!0),[L,oe]=x.useState(!1),[S,y]=x.useState(!1),[q,de]=x.useState(""),[be,ke]=x.useState(""),[ze,Q]=x.useState(0);x.useEffect(()=>{let U=!0;return X(!0),de(""),Promise.all([u_(_),h_(),x_()]).then(([pe,ot,st])=>{U&&(s(pe),h(ot.daily_goal_minutes),g(String(ot.daily_goal_minutes)),c(st))}).catch(pe=>{U&&de(Zs(pe,"Não foi possível carregar o acompanhamento de inglês."))}).finally(()=>{U&&X(!1)}),()=>{U=!1}},[_,ze]);const ge=x.useCallback(()=>j(!1),[]);function le(){V(null),O(Ng()),j(!0)}function xe(U){V(U),O(q3(U)),j(!0)}async function H(U){U.preventDefault(),de(""),ke(""),oe(!0);try{const pe=U3(N);$?await zx($.id,pe):await p_(pe),j(!1),V(null),ke($?"Sessão atualizada.":"Sessão de estudo criada."),Q(ot=>ot+1)}catch(pe){de(Zs(pe,"Não foi possível salvar a sessão de estudo."))}finally{oe(!1)}}async function z(U){U.preventDefault();const pe=Number(f);if(!Number.isInteger(pe)||pe<1||pe>1440){de("A meta deve ser um número inteiro entre 1 e 1440 minutos.");return}de(""),ke(""),oe(!0);try{const ot=await m_(pe);h(ot.daily_goal_minutes),g(String(ot.daily_goal_minutes)),ke("Meta diária atualizada."),Q(st=>st+1)}catch(ot){de(Zs(ot,"Não foi possível atualizar a meta diária."))}finally{oe(!1)}}function w(U){if(U.preventDefault(),k.from&&k.to&&k.from>k.to){de("A data inicial precisa ser anterior ou igual à data final.");return}if(k.from&&k.to&&(Date.parse(`${k.to}T00:00:00Z`)-Date.parse(`${k.from}T00:00:00Z`))/864e5>366){de("O período das sessões não pode ultrapassar 366 dias.");return}de(""),b({from:k.from||void 0,to:k.to||void 0,status:k.status||void 0,page:1,limit:20})}async function re(){if(T){y(!0),de(""),ke("");try{await f_(T.id),F(null),ke("Sessão removida."),Q(U=>U+1)}catch(U){de(Zs(U,"Não foi possível excluir a sessão.")),F(null)}finally{y(!1)}}}async function ae(U){de(""),ke("");try{await zx(U.id,{status:"concluido"}),ke("Sessão concluída. Seu progresso foi atualizado."),Q(pe=>pe+1)}catch(pe){de(Zs(pe,"Não foi possível concluir a sessão."))}}const M=(l==null?void 0:l.daily)??[],se=Math.max(p,...M.map(U=>U.total_minutes),1),ve=(a==null?void 0:a.data)??[],je=a==null?void 0:a.pagination;return e.jsxs(j3,{children:[e.jsxs($o,{children:[e.jsxs(b3,{children:[e.jsxs("span",{children:[e.jsx(Ip,{size:14})," English study tracker"]}),e.jsx("h1",{children:"Seu inglês, em evolução."}),e.jsx("p",{children:"Planeje sessões, registre o que aprendeu e acompanhe sua consistência dia após dia."})]}),e.jsxs(w3,{children:[e.jsxs(ue,{type:"button",onClick:()=>r("/study-resources"),children:[e.jsx(Xr,{}),"Biblioteca"]}),e.jsxs(ue,{type:"button",$variant:"primary",onClick:le,children:[e.jsx(gt,{}),"Nova sessão"]})]})]}),q&&e.jsx(Ie,{role:"alert",style:{color:"var(--error)",padding:14},children:q}),be&&e.jsx(Ie,{role:"status",style:{color:"var(--primary-strong)",padding:14},children:be}),e.jsxs(_3,{"aria-label":"Resumo do progresso de inglês",children:[e.jsxs(cp,{children:[e.jsx("span",{children:e.jsx(hn,{})}),e.jsxs("div",{children:[e.jsx("small",{children:"Hoje"}),e.jsxs("strong",{children:[(l==null?void 0:l.minutes_today)??0," min"]}),e.jsxs("p",{children:[(l==null?void 0:l.minutes_remaining_today)??p," min para a meta"]})]})]}),e.jsxs(cp,{children:[e.jsx("span",{children:e.jsx(Yi,{})}),e.jsxs("div",{children:[e.jsx("small",{children:"Meta diária"}),e.jsxs("strong",{children:[p," min"]}),e.jsx(kk,{children:e.jsx("div",{style:{width:`${Math.min((l==null?void 0:l.goal_progress_percent)??0,100)}%`}})})]})]}),e.jsxs(cp,{children:[e.jsx("span",{children:e.jsx(We,{})}),e.jsxs("div",{children:[e.jsx("small",{children:"Ritmo dos últimos dias"}),e.jsxs("strong",{children:[M.reduce((U,pe)=>U+pe.sessions,0)," sessões"]}),e.jsxs("p",{children:[M.reduce((U,pe)=>U+pe.total_minutes,0)," minutos estudados"]})]})]})]}),e.jsxs(k3,{children:[e.jsxs(Ie,{children:[e.jsxs(Fe,{children:[e.jsx(We,{size:19}),"Progresso diário"]}),M.length?e.jsx(S3,{"aria-label":"Minutos estudados por dia",children:M.slice(-7).map(U=>{const pe=U.study_date.slice(0,10);return e.jsxs(C3,{title:`${up(pe)}: ${U.total_minutes} minutos`,children:[e.jsx("strong",{children:U.total_minutes}),e.jsx(E3,{children:e.jsx($3,{$height:Math.max(U.total_minutes?8:3,U.total_minutes/se*100),$today:pe===O1(new Date)})}),e.jsx(R3,{children:up(pe).split(",")[0]})]},pe)})}):e.jsxs(Ge,{children:[e.jsx(We,{}),e.jsx("p",{children:"Seu resumo aparecerá aqui assim que carregar."})]})]}),e.jsxs(Ie,{children:[e.jsxs(Fe,{children:[e.jsx(Yi,{size:19}),"Sua meta diária"]}),e.jsx("p",{style:{margin:"0 0 16px",color:"var(--muted)",fontSize:12,lineHeight:1.55},children:"Escolha quantos minutos quer dedicar ao inglês por dia."}),e.jsx(P3,{onSubmit:U=>{z(U)},children:e.jsxs("div",{children:[e.jsxs(Z,{htmlFor:"daily-goal",children:["Minutos por dia",e.jsx("input",{id:"daily-goal",type:"number",min:1,max:1440,step:1,value:f,onChange:U=>g(U.target.value),required:!0})]}),e.jsxs(ue,{type:"submit",$variant:"primary",disabled:L,children:[L?e.jsx(Ze,{}):e.jsx(en,{}),"Salvar"]})]})})]})]}),e.jsxs(Ie,{children:[e.jsxs(Fe,{children:[e.jsx(Xr,{size:19}),"Sessões de estudo"]}),e.jsx(ns,{open:R,title:$?"Editar sessão":"Planejar sessão",icon:$?e.jsx(rn,{size:18}):e.jsx(gt,{size:18}),busy:L,onClose:ge,children:e.jsxs(O3,{onSubmit:U=>{H(U)},children:[e.jsxs(Z,{htmlFor:"session-title",children:["Título *",e.jsx("input",{id:"session-title",maxLength:200,value:N.title,onChange:U=>O(pe=>({...pe,title:U.target.value})),placeholder:"Ex.: Prática de listening",required:!0})]}),e.jsxs(Z,{htmlFor:"session-date",children:["Data *",e.jsx("input",{id:"session-date",type:"date",value:N.study_date,onChange:U=>O(pe=>({...pe,study_date:U.target.value})),required:!0})]}),e.jsxs(Z,{htmlFor:"session-time",children:["Horário",e.jsx("input",{id:"session-time",type:"time",value:N.study_time,onChange:U=>O(pe=>({...pe,study_time:U.target.value}))})]}),e.jsxs(Z,{htmlFor:"session-duration",children:["Duração (minutos)",e.jsx("input",{id:"session-duration",type:"number",min:1,max:1440,step:1,value:N.duration_minutes,onChange:U=>O(pe=>({...pe,duration_minutes:U.target.value})),required:!0})]}),e.jsxs(Z,{htmlFor:"session-topic",children:["Tópico",e.jsx("input",{id:"session-topic",maxLength:100,value:N.topic,onChange:U=>O(pe=>({...pe,topic:U.target.value})),placeholder:"Ex.: Conversação"})]}),e.jsxs(Z,{htmlFor:"session-status",children:["Status",e.jsxs("select",{id:"session-status",value:N.status,onChange:U=>O(pe=>({...pe,status:U.target.value})),children:[e.jsx("option",{value:"planejado",children:"Planejado"}),e.jsx("option",{value:"concluido",children:"Concluído"}),e.jsx("option",{value:"cancelado",children:"Cancelado"})]})]}),e.jsxs(Z,{htmlFor:"session-material",children:["Link do material",e.jsx("input",{id:"session-material",type:"url",maxLength:2048,value:N.material_url,onChange:U=>O(pe=>({...pe,material_url:U.target.value})),placeholder:"https://..."})]}),e.jsxs(Z,{htmlFor:"session-content",children:["Anotações",e.jsx("textarea",{id:"session-content",maxLength:5e4,value:N.content,onChange:U=>O(pe=>({...pe,content:U.target.value})),placeholder:"Registre expressões, dúvidas e aprendizados..."})]}),e.jsxs(I3,{children:[e.jsxs(ue,{type:"button",onClick:ge,disabled:L,children:[e.jsx(pr,{}),"Cancelar"]}),e.jsxs(ue,{type:"submit",$variant:"primary",disabled:L,children:[L?e.jsx(Ze,{}):e.jsx(en,{}),$?"Salvar alterações":"Criar sessão"]})]})]})}),e.jsxs(z3,{onSubmit:w,children:[e.jsxs(Z,{htmlFor:"filter-from",children:["De",e.jsx("input",{id:"filter-from",type:"date",value:k.from,onChange:U=>C(pe=>({...pe,from:U.target.value}))})]}),e.jsxs(Z,{htmlFor:"filter-to",children:["Até",e.jsx("input",{id:"filter-to",type:"date",value:k.to,onChange:U=>C(pe=>({...pe,to:U.target.value}))})]}),e.jsxs(Z,{htmlFor:"filter-status",children:["Status",e.jsxs("select",{id:"filter-status",value:k.status,onChange:U=>C(pe=>({...pe,status:U.target.value})),children:[e.jsx("option",{value:"",children:"Todos"}),e.jsx("option",{value:"planejado",children:"Planejado"}),e.jsx("option",{value:"concluido",children:"Concluído"}),e.jsx("option",{value:"cancelado",children:"Cancelado"})]})]}),e.jsxs(ue,{type:"submit",children:[e.jsx(We,{}),"Filtrar"]})]}),ne?e.jsxs(Ge,{children:[e.jsx(Ze,{}),e.jsx("p",{children:"Carregando sessões..."})]}):ve.length?e.jsx(N3,{children:ve.map(U=>e.jsxs(M3,{children:[e.jsxs(A3,{children:[e.jsx("h3",{children:U.title}),U.content&&e.jsx("p",{children:U.content}),e.jsxs(T3,{children:[e.jsxs("span",{children:[e.jsx(We,{}),up(U.study_date)]}),Vp(U.study_time)&&e.jsxs("span",{children:[e.jsx(hn,{}),Vp(U.study_time)]}),e.jsxs("span",{children:[e.jsx(hn,{}),U.duration_minutes," min"]}),U.topic&&e.jsxs("span",{children:[e.jsx(Ip,{}),U.topic]}),U.material_url&&e.jsxs("a",{href:U.material_url,target:"_blank",rel:"noreferrer",children:[e.jsx(mc,{}),"Material"]})]})]}),e.jsxs(D3,{children:[e.jsxs(F3,{$status:U.status,children:[U.status==="concluido"&&e.jsx(en,{size:12}),H3[U.status]]}),e.jsxs(L3,{children:[U.status==="planejado"&&e.jsx(dp,{type:"button","aria-label":`Concluir ${U.title}`,title:"Marcar como concluído",onClick:()=>{ae(U)},children:e.jsx(en,{})}),e.jsx(dp,{type:"button","aria-label":`Editar ${U.title}`,title:"Editar sessão",onClick:()=>xe(U),children:e.jsx(rn,{})}),e.jsx(dp,{type:"button","data-danger":"true","aria-label":`Excluir ${U.title}`,title:"Excluir sessão",onClick:()=>F(U),children:e.jsx($r,{})})]})]})]},String(U.id)))}):a?e.jsxs(Ge,{children:[e.jsx(Xr,{size:30}),e.jsx("h3",{children:"Nenhuma sessão encontrada"}),e.jsx("p",{children:"Planeje sua próxima sessão e comece a acompanhar seu progresso."}),e.jsxs(ue,{type:"button",$variant:"primary",onClick:le,children:[e.jsx(gt,{}),"Nova sessão"]})]}):null,je&&je.total>0&&e.jsxs(B3,{children:[e.jsxs("span",{children:[je.total," sessões · página ",je.page," de ",Math.max(je.totalPages,1)]}),e.jsxs("div",{style:{display:"flex",gap:7},children:[e.jsx(ue,{type:"button",disabled:!je.hasPreviousPage||ne,onClick:()=>b(U=>({...U,page:Math.max((U.page??1)-1,1)})),children:"Anterior"}),e.jsxs(ue,{type:"button",disabled:!je.hasNextPage||ne,onClick:()=>b(U=>({...U,page:(U.page??1)+1})),children:["Próxima",e.jsx(S2,{size:14})]})]})]})]}),e.jsx(Tc,{open:T!==null,title:"Excluir sessão de estudo?",description:T?`A sessão “${T.title}” será removida permanentemente.`:"",confirmLabel:"Excluir sessão",busy:S,onCancel:()=>{S||F(null)},onConfirm:()=>{re()}})]})}const W3=m.div`
  display: grid;
  gap: 20px;
`,G3=m.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 13px;
  @media (max-width: 720px) { grid-template-columns: 1fr; }
`,eo=m(Ie)`
  padding: 18px;
  small { display: block; color: var(--muted); font-size: 11px; }
  strong { display: block; margin-top: 4px; color: var(--text); font-size: 23px; }
`,Q3=m.div`
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) minmax(250px, .6fr);
  gap: 18px;
  align-items: start;
  @media (max-width: 900px) { grid-template-columns: 1fr; }
`,Mg=m.div`
  display: grid;
  gap: 6px;
  margin-bottom: 13px;
  > div:first-child { display: flex; justify-content: space-between; gap: 8px; color: var(--text); font-size: 12px; }
  > div:first-child span { color: var(--muted); }
`,Ag=m.div`
  height: 8px;
  overflow: hidden;
  border-radius: 999px;
  background: var(--surface-raised);
  > div { height: 100%; border-radius: inherit; background: var(--primary); }
`,K3=m.form`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr)) auto;
  align-items: end;
  gap: 10px;
  padding: 15px;
  margin-bottom: 17px;
  border: 1px solid var(--border);
  border-radius: 14px;
  background: var(--surface-raised);
  ${Z} { margin: 0; }
  @media (max-width: 900px) { grid-template-columns: 1fr 1fr; }
  @media (max-width: 480px) { grid-template-columns: 1fr; }
`,Y3=m.div`
  display: grid;
  gap: 11px;
`,J3=m.article`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 15px;
  padding: 16px;
  border: 1px solid var(--border);
  border-left: 3px solid var(--primary);
  border-radius: 15px;
  background: var(--surface);
  box-shadow: 0 5px 16px var(--shadow);
  opacity: ${({$inactive:r})=>r?.6:1};
  h3 { margin: 0; color: var(--text); font-size: 15px; overflow-wrap: anywhere; }
  p { margin: 6px 0 0; color: var(--muted); font-size: 12px; line-height: 1.55; white-space: pre-wrap; overflow-wrap: anywhere; }
  @media (max-width: 620px) { grid-template-columns: 1fr; }
`,X3=m.div`
  display: flex;
  flex-wrap: wrap;
  gap: 7px 14px;
  margin-top: 10px;
  color: var(--muted);
  font-size: 11px;
  span { display: inline-flex; align-items: center; gap: 5px; }
  svg { width: 14px; height: 14px; }
`,Z3=m.div`
  display: grid;
  justify-items: end;
  align-content: space-between;
  gap: 12px;
  > strong { color: var(--text); font-size: 18px; }
  @media (max-width: 620px) { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; }
`,e5=m.div`
  display: flex;
  gap: 6px;
`,pp=m.button`
  display: grid;
  width: 34px;
  height: 34px;
  place-items: center;
  border: 1px solid var(--border);
  border-radius: 9px;
  color: var(--muted);
  background: var(--surface-raised);
  cursor: pointer;
  &:hover { color: var(--primary); border-color: var(--primary); }
  &[data-danger='true']:hover { color: var(--error); background: var(--error-soft); }
  svg { width: 15px; height: 15px; }
`,t5=m.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 14px;
  ${Z}:first-child, ${Z}:last-of-type { grid-column: 1 / -1; }
  @media (max-width: 620px) { grid-template-columns: 1fr; ${Z} { grid-column: auto; } }
`,r5=m.div`
  grid-column: 1 / -1;
  display: flex;
  justify-content: flex-end;
  gap: 9px;
`,n5=m.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: 16px;
  color: var(--muted);
  font-size: 12px;
`,a5={compra:"Compra",fixa:"Fixa mensal"},i5=new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"});function Ra(r){return i5.format(Number(r)||0)}function Wp(){const r=new Date;return`${r.getFullYear()}-${String(r.getMonth()+1).padStart(2,"0")}`}function s5(){const r=new Date;return`${Wp()}-${String(r.getDate()).padStart(2,"0")}`}function o5(r){return new Date(`${r.slice(0,10)}T12:00:00`).toLocaleDateString("pt-BR")}function Tg(){return{name:"",expense_type:"compra",category:"",amount:"",expense_date:s5(),due_day:"",is_active:!0,notes:""}}function l5(r){var a;return{name:r.name,expense_type:r.expense_type,category:r.category,amount:String(Number(r.amount)),expense_date:((a=r.expense_date)==null?void 0:a.slice(0,10))??"",due_day:r.due_day==null?"":String(r.due_day),is_active:r.is_active,notes:r.notes??""}}function c5(r){const a=Number(r.amount.replace(",","."));if(!Number.isFinite(a)||a<=0)throw new Error("Informe um valor maior que zero.");const s={name:r.name.trim(),expense_type:r.expense_type,amount:a,is_active:r.is_active,notes:r.notes.trim()||null};if(r.category.trim()&&(s.category=r.category.trim()),r.expense_type==="compra"){if(!r.expense_date)throw new Error("Informe a data da compra.");s.expense_date=r.expense_date}else{const l=Number(r.due_day);if(!Number.isInteger(l)||l<1||l>31)throw new Error("O dia de vencimento deve ser de 1 a 31.");s.due_day=l}return s}function Il(r,a){var s,l;return r instanceof Error&&!jt.isAxiosError(r)?r.message:jt.isAxiosError(r)&&((l=(s=r.response)==null?void 0:s.data)==null?void 0:l.error)||a}function d5(){var ae;const[r,a]=x.useState(),[s,l]=x.useState(),[c,p]=x.useState([]),[h,f]=x.useState(Wp()),[g,_]=x.useState({page:1,limit:20}),[b,k]=x.useState({type:"",category:"",active:"",search:""}),[C,N]=x.useState(Tg),[O,$]=x.useState(null),[V,R]=x.useState(!1),[j,T]=x.useState(null),[F,ne]=x.useState(!0),[X,L]=x.useState(!1),[oe,S]=x.useState(""),[y,q]=x.useState(""),[de,be]=x.useState(0);x.useEffect(()=>{let M=!0;return ne(!0),S(""),Promise.all([g_({...g,month:h}),y_(h),v_()]).then(([se,ve,je])=>{M&&(a(se),l(ve),p(je))}).catch(se=>{M&&S(Il(se,"Não foi possível carregar as despesas."))}).finally(()=>{M&&ne(!1)}),()=>{M=!1}},[g,h,de]);function ke(){$(null),N(Tg()),R(!0)}const ze=x.useCallback(()=>R(!1),[]);function Q(M){$(M),N(l5(M)),R(!0)}async function ge(M){M.preventDefault(),S(""),q(""),L(!0);try{const se=c5(C);O?await Nx(O.id,se):await __(se),R(!1),$(null),q(O?"Despesa atualizada.":"Despesa cadastrada."),be(ve=>ve+1)}catch(se){S(Il(se,"Não foi possível salvar a despesa."))}finally{L(!1)}}async function le(M){S(""),q("");try{await Nx(M.id,{is_active:!M.is_active}),be(se=>se+1)}catch(se){S(Il(se,"Não foi possível alterar a despesa."))}}async function xe(){if(j){S(""),q("");try{await k_(j.id),q("Despesa removida."),be(M=>M+1)}catch(M){S(Il(M,"Não foi possível excluir a despesa."))}finally{T(null)}}}function H(M){M.preventDefault(),_({type:b.type||void 0,category:b.category||void 0,active:b.active?b.active==="true":void 0,search:b.search.trim()||void 0,page:1,limit:20})}const z=(r==null?void 0:r.data)??[],w=r==null?void 0:r.pagination,re=Number(s==null?void 0:s.total)||0;return e.jsxs(W3,{children:[e.jsxs($o,{children:[e.jsxs("div",{children:[e.jsxs("span",{children:[e.jsx(vc,{size:14})," Controle de despesas"]}),e.jsx("h1",{children:"Para onde vai seu dinheiro."}),e.jsx("p",{children:"Registre compras e contas fixas mensais e veja quanto cada categoria pesa no seu mês."})]}),e.jsxs(ue,{type:"button",$variant:"primary",onClick:ke,children:[e.jsx(gt,{}),"Nova despesa"]})]}),oe&&e.jsx(Ie,{role:"alert",style:{color:"var(--error)",padding:14},children:oe}),y&&e.jsx(Ie,{role:"status",style:{color:"var(--primary-strong)",padding:14},children:y}),e.jsxs(G3,{"aria-label":"Resumo das despesas do mês",children:[e.jsxs(eo,{children:[e.jsx("small",{children:"Contas fixas ativas"}),e.jsx("strong",{children:Ra(s==null?void 0:s.fixed_total)})]}),e.jsxs(eo,{children:[e.jsx("small",{children:"Compras do mês"}),e.jsx("strong",{children:Ra(s==null?void 0:s.purchases_total)})]}),e.jsxs(eo,{children:[e.jsx("small",{children:"Total do mês"}),e.jsx("strong",{children:Ra(s==null?void 0:s.total)})]}),(s==null?void 0:s.comparison)&&(()=>{const M=Number(s.comparison.difference)||0,se=s.comparison.change_percentage;return e.jsxs(eo,{children:[e.jsxs("small",{children:["Vs. mês anterior (",s.comparison.previous_month,")"]}),e.jsxs("strong",{style:{color:M>0?"var(--error)":M<0?"var(--primary-strong)":void 0},children:[M>0?"+":"",Ra(M),se==null?"":` (${Number(se)>0?"+":""}${Number(se).toFixed(2)}%)`]})]})})(),(s==null?void 0:s.top_category)&&e.jsxs(eo,{children:[e.jsxs("small",{children:["Maior gasto: ",s.top_category.category]}),e.jsxs("strong",{children:[Ra(s.top_category.total)," (",Number(s.top_category.percentage).toFixed(2),"%)"]})]})]}),e.jsxs(Q3,{children:[e.jsxs(Ie,{children:[e.jsxs(Fe,{children:[e.jsx(di,{size:19}),"Despesas"]}),e.jsx(ns,{open:V,title:O?"Editar despesa":"Nova despesa",icon:O?e.jsx(rn,{size:18}):e.jsx(gt,{size:18}),busy:X,onClose:ze,children:e.jsxs(t5,{onSubmit:M=>{ge(M)},children:[e.jsxs(Z,{htmlFor:"expense-name",children:["Nome *",e.jsx("input",{id:"expense-name",maxLength:160,value:C.name,onChange:M=>N(se=>({...se,name:M.target.value})),placeholder:"Ex.: Aluguel",required:!0})]}),e.jsxs(Z,{htmlFor:"expense-type",children:["Tipo *",e.jsxs("select",{id:"expense-type",value:C.expense_type,onChange:M=>N(se=>({...se,expense_type:M.target.value})),children:[e.jsx("option",{value:"compra",children:"Compra (pontual)"}),e.jsx("option",{value:"fixa",children:"Fixa (mensal)"})]})]}),e.jsxs(Z,{htmlFor:"expense-amount",children:["Valor (R$) *",e.jsx("input",{id:"expense-amount",type:"number",min:.01,step:"0.01",value:C.amount,onChange:M=>N(se=>({...se,amount:M.target.value})),required:!0})]}),C.expense_type==="compra"?e.jsxs(Z,{htmlFor:"expense-date",children:["Data da compra *",e.jsx("input",{id:"expense-date",type:"date",value:C.expense_date,onChange:M=>N(se=>({...se,expense_date:M.target.value})),required:!0})]}):e.jsxs(Z,{htmlFor:"expense-due",children:["Dia do vencimento *",e.jsx("input",{id:"expense-due",type:"number",min:1,max:31,step:1,value:C.due_day,onChange:M=>N(se=>({...se,due_day:M.target.value})),required:!0})]}),e.jsxs(Z,{htmlFor:"expense-category",children:["Categoria",e.jsx("input",{id:"expense-category",list:"expense-categories",maxLength:60,value:C.category,onChange:M=>N(se=>({...se,category:M.target.value})),placeholder:"Outros"}),e.jsx("datalist",{id:"expense-categories",children:c.map(M=>e.jsx("option",{value:M.category},M.category))})]}),e.jsxs(Z,{htmlFor:"expense-active",children:["Situação",e.jsxs("select",{id:"expense-active",value:String(C.is_active),onChange:M=>N(se=>({...se,is_active:M.target.value==="true"})),children:[e.jsx("option",{value:"true",children:"Ativa"}),e.jsx("option",{value:"false",children:"Pausada"})]})]}),e.jsxs(Z,{htmlFor:"expense-notes",children:["Observações",e.jsx("textarea",{id:"expense-notes",maxLength:2e3,value:C.notes,onChange:M=>N(se=>({...se,notes:M.target.value}))})]}),e.jsxs(r5,{children:[e.jsxs(ue,{type:"button",onClick:ze,disabled:X,children:[e.jsx(pr,{}),"Cancelar"]}),e.jsxs(ue,{type:"submit",$variant:"primary",disabled:X,children:[X?e.jsx(Ze,{}):e.jsx(en,{}),O?"Salvar alterações":"Cadastrar"]})]})]})}),e.jsxs(K3,{onSubmit:H,children:[e.jsxs(Z,{htmlFor:"filter-month",children:["Mês das compras",e.jsx("input",{id:"filter-month",type:"month",value:h,onChange:M=>{f(M.target.value||Wp()),_(se=>({...se,page:1}))}})]}),e.jsxs(Z,{htmlFor:"filter-type",children:["Tipo",e.jsxs("select",{id:"filter-type",value:b.type,onChange:M=>k(se=>({...se,type:M.target.value})),children:[e.jsx("option",{value:"",children:"Todos"}),e.jsx("option",{value:"compra",children:"Compras"}),e.jsx("option",{value:"fixa",children:"Fixas"})]})]}),e.jsxs(Z,{htmlFor:"filter-category",children:["Categoria",e.jsxs("select",{id:"filter-category",value:b.category,onChange:M=>k(se=>({...se,category:M.target.value})),children:[e.jsx("option",{value:"",children:"Todas"}),c.map(M=>e.jsx("option",{value:M.category,children:M.category},M.category))]})]}),e.jsxs(Z,{htmlFor:"filter-search",children:["Buscar",e.jsx("input",{id:"filter-search",value:b.search,onChange:M=>k(se=>({...se,search:M.target.value})),placeholder:"Nome"})]}),e.jsxs(ue,{type:"submit",children:[e.jsx(We,{}),"Filtrar"]})]}),F?e.jsxs(Ge,{children:[e.jsx(Ze,{}),e.jsx("p",{children:"Carregando despesas..."})]}):z.length?e.jsx(Y3,{children:z.map(M=>e.jsxs(J3,{$inactive:!M.is_active,children:[e.jsxs("div",{children:[e.jsx("h3",{children:M.name}),M.notes&&e.jsx("p",{children:M.notes}),e.jsxs(X3,{children:[e.jsxs("span",{children:[M.expense_type==="fixa"?e.jsx(J2,{}):e.jsx(Z2,{}),a5[M.expense_type]]}),e.jsx("span",{children:M.category}),M.expense_type==="fixa"&&M.due_day!=null&&e.jsxs("span",{children:[e.jsx(We,{}),"Vence dia ",M.due_day]}),M.expense_type==="compra"&&M.expense_date&&e.jsxs("span",{children:[e.jsx(We,{}),o5(M.expense_date)]}),!M.is_active&&e.jsx("span",{children:"Pausada"})]})]}),e.jsxs(Z3,{children:[e.jsx("strong",{children:Ra(M.amount)}),e.jsxs(e5,{children:[M.expense_type==="fixa"&&e.jsx(pp,{type:"button",title:M.is_active?"Pausar":"Reativar","aria-label":`${M.is_active?"Pausar":"Reativar"} ${M.name}`,onClick:()=>{le(M)},children:M.is_active?e.jsx(xc,{}):e.jsx(gc,{})}),e.jsx(pp,{type:"button",title:"Editar","aria-label":`Editar ${M.name}`,onClick:()=>Q(M),children:e.jsx(rn,{})}),e.jsx(pp,{type:"button","data-danger":"true",title:"Excluir","aria-label":`Excluir ${M.name}`,onClick:()=>T(M),children:e.jsx($r,{})})]})]})]},String(M.id)))}):r?e.jsxs(Ge,{children:[e.jsx(vc,{size:30}),e.jsx("h3",{children:"Nenhuma despesa encontrada"}),e.jsx("p",{children:"Cadastre uma compra ou conta fixa para começar."}),e.jsxs(ue,{type:"button",$variant:"primary",onClick:ke,children:[e.jsx(gt,{}),"Nova despesa"]})]}):null,w&&w.total>0&&e.jsxs(n5,{children:[e.jsxs("span",{children:[w.total," despesas · página ",w.page," de ",Math.max(w.totalPages,1)]}),e.jsxs("div",{style:{display:"flex",gap:7},children:[e.jsx(ue,{type:"button",disabled:!w.hasPreviousPage||F,onClick:()=>_(M=>({...M,page:Math.max((M.page??1)-1,1)})),children:"Anterior"}),e.jsx(ue,{type:"button",disabled:!w.hasNextPage||F,onClick:()=>_(M=>({...M,page:(M.page??1)+1})),children:"Próxima"})]})]})]}),e.jsxs(Ie,{children:[e.jsxs(Fe,{children:[e.jsx(di,{size:19}),"Por categoria"]}),s!=null&&s.by_category.length?s.by_category.map(M=>{const se=Number(M.total)||0;return e.jsxs(Mg,{children:[e.jsxs("div",{children:[e.jsx("strong",{children:M.category}),e.jsxs("span",{children:[Ra(se),M.percentage!==void 0?` · ${Number(M.percentage).toFixed(1)}%`:""]})]}),e.jsx(Ag,{children:e.jsx("div",{style:{width:`${re>0?Math.min(se/re*100,100):0}%`}})})]},M.category)}):e.jsx("p",{style:{margin:0,color:"var(--muted)",fontSize:12},children:"Sem despesas neste mês."}),(ae=s==null?void 0:s.daily_spending)!=null&&ae.length?(()=>{const M=Math.max(...s.daily_spending.map(se=>Number(se.total)||0),0);return e.jsxs(e.Fragment,{children:[e.jsxs(Fe,{style:{marginTop:18},children:[e.jsx(di,{size:19}),"Compras por dia"]}),s.daily_spending.map(se=>{const ve=Number(se.total)||0;return e.jsxs(Mg,{children:[e.jsxs("div",{children:[e.jsxs("strong",{children:[se.date.slice(8,10),"/",se.date.slice(5,7)]}),e.jsx("span",{children:Ra(ve)})]}),e.jsx(Ag,{children:e.jsx("div",{style:{width:`${M>0?ve/M*100:0}%`}})})]},se.date)})]})})():null]})]}),e.jsx(Tc,{open:j!==null,title:"Excluir despesa?",description:j?`“${j.name}” será removida permanentemente.`:"",confirmLabel:"Excluir",busy:!1,onConfirm:()=>{xe()},onCancel:()=>T(null)})]})}const u5=m.div`
  display: grid;
  gap: 20px;
`,p5=m(Ie)`
  padding: 20px;
`,f5=m.form`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  align-items: end;
  gap: 12px;
  ${Z} { margin: 0; }
  @media (max-width: 760px) { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  @media (max-width: 520px) { grid-template-columns: 1fr; }
`,h5=m.div`
  grid-column: 1 / -1;
  display: flex;
  justify-content: flex-end;
  padding-top: 3px;
`,m5=m.div`
  display: grid;
  gap: 13px;
  margin-top: 20px;
  padding-top: 18px;
  border-top: 1px solid var(--border);
`,x5=m.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 10px;
  h3 { margin: 0; color: var(--text); font-size: 16px; }
  p { margin: 4px 0 0; color: var(--muted); font-size: 12px; }
`,g5=m.span`
  display: inline-flex;
  align-items: center;
  padding: 5px 9px;
  border-radius: 999px;
  color: var(--primary-strong);
  background: var(--primary-soft);
  font-size: 11px;
  font-weight: 700;
`,v5=m.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 10px;
  @media (max-width: 760px) { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  @media (max-width: 520px) { grid-template-columns: 1fr; }
`,to=m.div`
  min-width: 0;
  padding: 13px;
  border: 1px solid ${({$highlight:r})=>r?"var(--primary)":"var(--border)"};
  border-radius: 12px;
  background: ${({$highlight:r})=>r?"var(--primary-soft)":"var(--surface-raised)"};
  small { display: block; color: var(--muted); font-size: 11px; }
  strong { display: block; margin-top: 5px; color: ${({$highlight:r})=>r?"var(--primary-strong)":"var(--text)"}; font-size: 17px; overflow-wrap: anywhere; }
`,y5=m.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;
  @media (max-width: 760px) { grid-template-columns: 1fr; }
`,j5=m.div`
  padding: 13px;
  border: 1px solid var(--border);
  border-radius: 12px;
  h4 { margin: 0 0 9px; color: var(--text); font-size: 13px; }
  p { display: flex; justify-content: space-between; gap: 10px; margin: 6px 0 0; color: var(--muted); font-size: 12px; }
  strong { color: var(--text); text-align: right; }
`,b5=m.ul`
  margin: 0;
  padding-left: 19px;
  color: var(--muted);
  font-size: 12px;
  line-height: 1.55;
`,Bl={gasolina:"Gasolina",alcool:"Álcool"},w5=new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}),I1="task-manager-fuel-calculator-form-v1";function Vi(r){return w5.format(r)}function fp(r,a=2){return new Intl.NumberFormat("pt-BR",{maximumFractionDigits:a}).format(r)}function _5(r){return typeof r=="string"?r?[r]:[]:Array.isArray(r)?r.map(a=>typeof a=="string"?a:JSON.stringify(a)??String(a)):r&&typeof r=="object"?[JSON.stringify(r)??String(r)]:[]}function k5(r){var a;if(jt.isAxiosError(r)){const s=(a=r.response)==null?void 0:a.data;return{message:typeof(s==null?void 0:s.error)=="string"?s.error:"Não foi possível calcular os custos de combustível.",details:_5(s==null?void 0:s.details)}}return{message:r instanceof Error?r.message:"Não foi possível calcular os custos de combustível.",details:[]}}function S5(){return{vehicle_model:"Hyundai HB20 2016 1.0",vehicle_type:"carro",fuel_type:"gasolina",gasoline_price:"6.19",alcohol_price:"4.29",gasoline_consumption:"",alcohol_consumption:"",distance_km:"1000"}}function C5(r){return typeof r=="object"&&r!==null}function E5(){const r=S5();try{const a=localStorage.getItem(I1);if(!a)return{form:r,warning:null};const s=JSON.parse(a);if(!C5(s))return{form:r,warning:null};const l=s.vehicle_model==="Honda CG 160"&&s.vehicle_type==="moto";return{form:{vehicle_model:l?r.vehicle_model:typeof s.vehicle_model=="string"?s.vehicle_model:r.vehicle_model,vehicle_type:l?r.vehicle_type:s.vehicle_type==="carro"||s.vehicle_type==="moto"?s.vehicle_type:r.vehicle_type,fuel_type:s.fuel_type==="gasolina"||s.fuel_type==="alcool"?s.fuel_type:r.fuel_type,gasoline_price:typeof s.gasoline_price=="string"?s.gasoline_price:r.gasoline_price,alcohol_price:typeof s.alcohol_price=="string"?s.alcohol_price:r.alcohol_price,gasoline_consumption:l&&s.gasoline_consumption==="40"?r.gasoline_consumption:typeof s.gasoline_consumption=="string"?s.gasoline_consumption:r.gasoline_consumption,alcohol_consumption:l&&s.alcohol_consumption==="30"?r.alcohol_consumption:typeof s.alcohol_consumption=="string"?s.alcohol_consumption:r.alcohol_consumption,distance_km:typeof s.distance_km=="string"&&s.distance_km.trim()?s.distance_km:r.distance_km},warning:null}}catch{return{form:r,warning:"Não foi possível acessar os dados salvos neste navegador."}}}function oc(r,a,s=!1){if(!r.trim()&&s)return;const l=Number(r.replace(",","."));if(!Number.isFinite(l)||l<=0)throw new Error(`${a} deve ser maior que zero.`);return l}function Dg(r,a){const s=oc(r,a);if(s===void 0)throw new Error(`${a} deve ser maior que zero.`);return s}function Fg(r){return r==="Hyundai HB20 2016 1.0"?"hb20-2016":r==="Honda CG 160"?"cg-160":"custom"}function $5(){const[r]=x.useState(E5),[a,s]=x.useState(r.form),[l,c]=x.useState(r.warning),[p,h]=x.useState(null),[f,g]=x.useState(null),[_,b]=x.useState(null),[k,C]=x.useState(!1);x.useEffect(()=>{try{localStorage.setItem(I1,JSON.stringify(a)),c(null)}catch{c("Não foi possível salvar os dados do veículo neste navegador.")}},[a]);function N(j){if(j==="hb20-2016"){s(T=>({...T,vehicle_model:"Hyundai HB20 2016 1.0",vehicle_type:"carro",gasoline_consumption:"",alcohol_consumption:""}));return}if(j==="cg-160"){s(T=>({...T,vehicle_model:"Honda CG 160",vehicle_type:"moto",gasoline_consumption:"40",alcohol_consumption:"30"}));return}s(T=>({...T,vehicle_model:"",gasoline_consumption:"",alcohol_consumption:""}))}async function O(j){j.preventDefault(),b(null),g(null),C(!0);try{const T=a.vehicle_model.trim();if(T.length<1||T.length>100)throw new Error("O modelo do veículo deve ter entre 1 e 100 caracteres.");const F=oc(a.gasoline_consumption,"Consumo com gasolina",!0),ne=oc(a.alcohol_consumption,"Consumo com álcool",!0),X=oc(a.distance_km,"Distância",!0),L={vehicle_model:T,vehicle_type:a.vehicle_type,fuel_type:a.fuel_type,fuel_prices:{gasolina:Dg(a.gasoline_price,"Preço da gasolina"),alcool:Dg(a.alcohol_price,"Preço do álcool")},consumption_km_per_l:{...F===void 0?{}:{gasolina:F},...ne===void 0?{}:{alcool:ne}},...X===void 0?{}:{distance_km:X}};h(L),g(await w_(L))}catch(T){b(k5(T))}finally{C(!1)}}const $=f&&p?p.consumption_km_per_l[f.selected_fuel]:void 0,V=(f==null?void 0:f.estimates.distance_km)??(p==null?void 0:p.distance_km),R=f&&p?f.estimates.selected_fuel_cost.cost??(V!==void 0&&$!==void 0?V/$*f.fuel_prices[f.selected_fuel]:null):null;return e.jsxs(u5,{children:[e.jsx($o,{children:e.jsxs("div",{children:[e.jsxs("span",{children:[e.jsx(vc,{size:14})," Despesas e transporte"]}),e.jsx("h1",{children:"Calculadora de combustível."}),e.jsx("p",{children:"Compare o custo por combustível e descubra qual compensa para o seu veículo."})]})}),e.jsxs(p5,{children:[e.jsxs(Fe,{children:[e.jsx(Lp,{size:19}),"Comparar custos de combustível"]}),e.jsx("p",{style:{margin:"-6px 0 16px",color:"var(--muted)",fontSize:12},children:"Os dados do veículo ficam salvos neste navegador. Ajuste os valores para o seu veículo e informe quantos quilômetros roda por semana para estimar o gasto semanal."}),l&&e.jsx("p",{role:"status",style:{margin:"-8px 0 14px",color:"var(--error)",fontSize:12},children:l}),e.jsxs(f5,{onSubmit:j=>{O(j)},children:[e.jsxs(Z,{htmlFor:"fuel-vehicle-preset",children:["Veículo cadastrado",e.jsxs("select",{id:"fuel-vehicle-preset",value:Fg(a.vehicle_model),onChange:j=>N(j.target.value),children:[e.jsx("option",{value:"hb20-2016",children:"Hyundai HB20 2016 1.0"}),e.jsx("option",{value:"cg-160",children:"Honda CG 160"}),e.jsx("option",{value:"custom",children:"Outro veículo"})]})]}),Fg(a.vehicle_model)==="custom"&&e.jsxs(Z,{htmlFor:"fuel-vehicle-model",children:["Modelo do veículo *",e.jsx("input",{id:"fuel-vehicle-model",maxLength:100,value:a.vehicle_model,onChange:j=>s(T=>({...T,vehicle_model:j.target.value})),placeholder:"Digite o modelo",required:!0})]}),e.jsxs(Z,{htmlFor:"fuel-vehicle-type",children:["Tipo de veículo *",e.jsxs("select",{id:"fuel-vehicle-type",value:a.vehicle_type,onChange:j=>s(T=>({...T,vehicle_type:j.target.value})),children:[e.jsx("option",{value:"carro",children:"Carro"}),e.jsx("option",{value:"moto",children:"Moto"})]})]}),e.jsxs(Z,{htmlFor:"fuel-selected-type",children:["Combustível usado atualmente *",e.jsxs("select",{id:"fuel-selected-type",value:a.fuel_type,onChange:j=>s(T=>({...T,fuel_type:j.target.value})),children:[e.jsx("option",{value:"gasolina",children:"Gasolina"}),e.jsx("option",{value:"alcool",children:"Álcool"})]})]}),e.jsxs(Z,{htmlFor:"fuel-gasoline-price",children:["Preço da gasolina (R$/L) *",e.jsx("input",{id:"fuel-gasoline-price",type:"number",min:"0.01",step:"any",value:a.gasoline_price,onChange:j=>s(T=>({...T,gasoline_price:j.target.value})),placeholder:"6,19",required:!0})]}),e.jsxs(Z,{htmlFor:"fuel-alcohol-price",children:["Preço do álcool (R$/L) *",e.jsx("input",{id:"fuel-alcohol-price",type:"number",min:"0.01",step:"any",value:a.alcohol_price,onChange:j=>s(T=>({...T,alcohol_price:j.target.value})),placeholder:"4,29",required:!0})]}),e.jsxs(Z,{htmlFor:"fuel-distance",children:["Quantos quilômetros roda por semana? (km) *",e.jsx("input",{id:"fuel-distance",type:"number",min:"0.01",step:"any",value:a.distance_km,onChange:j=>s(T=>({...T,distance_km:j.target.value})),placeholder:"Ex.: 250",required:!0})]}),e.jsxs(Z,{htmlFor:"fuel-gasoline-consumption",children:["Consumo com gasolina (km/L)",e.jsx("input",{id:"fuel-gasoline-consumption",type:"number",min:"0.01",step:"any",value:a.gasoline_consumption,onChange:j=>s(T=>({...T,gasoline_consumption:j.target.value})),placeholder:"Opcional"})]}),e.jsxs(Z,{htmlFor:"fuel-alcohol-consumption",children:["Consumo com álcool (km/L)",e.jsx("input",{id:"fuel-alcohol-consumption",type:"number",min:"0.01",step:"any",value:a.alcohol_consumption,onChange:j=>s(T=>({...T,alcohol_consumption:j.target.value})),placeholder:"Opcional"})]}),e.jsx(h5,{children:e.jsxs(ue,{type:"submit",$variant:"primary",disabled:k,children:[k?e.jsx(Ze,{}):e.jsx(Lp,{}),k?"Calculando...":"Comparar combustíveis"]})})]}),_&&e.jsxs(Ie,{role:"alert",style:{marginTop:16,padding:14,color:"var(--error)"},children:[e.jsx("strong",{children:_.message}),_.details.length>0&&e.jsx("ul",{style:{margin:"6px 0 0",paddingLeft:19},children:_.details.map((j,T)=>e.jsx("li",{children:j},`${T}-${j}`))})]}),f&&e.jsxs(m5,{"aria-live":"polite",children:[e.jsxs(x5,{children:[e.jsxs("div",{children:[e.jsxs("h3",{children:["Resultado para ",f.vehicle.model]}),e.jsxs("p",{children:[f.vehicle.type==="moto"?"Moto":"Carro",f.estimates.distance_km===null?"":` · ${fp(f.estimates.distance_km)} km por semana`]})]}),e.jsx(g5,{children:f.analysis_method==="regra_dos_70_por_cento"?"Regra aproximada dos 70%":"Consumo informado"})]}),e.jsxs(v5,{children:[e.jsxs(to,{children:[e.jsx("small",{children:"Combustível recomendado"}),e.jsx("strong",{children:Bl[f.comparison.recommended_fuel]})]}),e.jsxs(to,{children:[e.jsx("small",{children:"Preço de equilíbrio do álcool"}),e.jsx("strong",{children:f.comparison.ethanol_break_even_price===null?"Não disponível":Vi(f.comparison.ethanol_break_even_price)})]}),e.jsxs(to,{children:[e.jsx("small",{children:"Álcool em relação à gasolina"}),e.jsx("strong",{children:f.comparison.ethanol_price_as_percentage_of_gasoline===null?"Não disponível":`${fp(f.comparison.ethanol_price_as_percentage_of_gasoline)}%`})]}),e.jsxs(to,{children:[e.jsx("small",{children:"Economia estimada na semana"}),e.jsx("strong",{children:f.comparison.estimated_savings_for_distance===null?"Informe consumos e distância":Vi(f.comparison.estimated_savings_for_distance)})]}),e.jsxs(to,{$highlight:!0,children:[e.jsxs("small",{children:["Você gastaria por semana com ",Bl[f.selected_fuel].toLowerCase()]}),e.jsx("strong",{children:R===null?"Informe o consumo do combustível atual":Vi(R)})]})]}),e.jsxs("p",{style:{margin:0,color:f.comparison.selected_fuel_is_cheaper?"var(--primary-strong)":"var(--muted)",fontSize:12},children:["O combustível atual (",Bl[f.selected_fuel],") ",f.comparison.selected_fuel_is_cheaper?"é o mais econômico.":"não é o mais econômico nesta comparação."]}),e.jsx(y5,{children:["gasolina","alcool"].map(j=>{const T=f.estimates[j];return e.jsxs(j5,{children:[e.jsxs("h4",{children:[Bl[j]," · ",Vi(f.fuel_prices[j]),"/L"]}),e.jsxs("p",{children:[e.jsx("span",{children:"Litros estimados"}),e.jsx("strong",{children:T.liters===null?"Não disponível":`${fp(T.liters,3)} L`})]}),e.jsxs("p",{children:[e.jsx("span",{children:"Gasto por semana"}),e.jsx("strong",{children:T.cost===null?"Informe o consumo para estimar":Vi(T.cost)})]}),e.jsxs("p",{children:[e.jsx("span",{children:"Custo por km"}),e.jsx("strong",{children:T.cost_per_km===null?"Não disponível":`${Vi(T.cost_per_km)}/km`})]})]},j)})}),f.notes.length>0&&e.jsx(b5,{children:f.notes.map((j,T)=>e.jsx("li",{children:j},`${T}-${j}`))})]})]})]})}const R5=m.button`
  position: relative;
  flex: 0 0 auto;
  padding: 3px 9px;
  border: 0;
  border-radius: 999px;
  color: ${({$color:r})=>r};
  background: color-mix(in srgb, ${({$color:r})=>r} 14%, transparent);
  font: inherit;
  font-size: 11px;
  font-weight: 800;
  cursor: help;

  &::after {
    position: absolute;
    z-index: 20;
    bottom: 100%;
    left: 50%;
    width: max-content;
    max-width: min(340px, calc(100vw - 32px));
    max-height: min(60vh, 360px);
    padding: 10px 12px;
    border: 1px solid var(--border);
    border-radius: var(--radius-md);
    color: var(--text);
    background: var(--surface-raised);
    box-shadow: 0 8px 24px var(--shadow);
    content: attr(data-tooltip);
    font-size: 12px;
    font-weight: 500;
    line-height: 1.5;
    text-align: left;
    white-space: pre-line;
    overflow-wrap: anywhere;
    overflow-y: auto;
    opacity: 0;
    pointer-events: auto;
    transform: translate(-50%, 4px);
    transition: opacity .12s ease, transform .12s ease;
    visibility: hidden;
  }

  &:hover::after, &:focus-visible::after {
    opacity: 1;
    transform: translate(-50%, 0);
    visibility: visible;
  }

  &:focus-visible {
    outline: 2px solid ${({$color:r})=>r};
    outline-offset: 2px;
  }
`;function as({label:r,color:a,details:s}){const l=s.filter(Boolean).join(`
`);return e.jsx(R5,{type:"button",$color:a,"data-tooltip":l,title:l,"aria-label":`${r}. Critérios da análise: ${l.replace(/\n/g,". ")}`,children:r})}const P5=new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL",maximumFractionDigits:0}),z5=new Intl.NumberFormat("pt-BR",{notation:"compact",maximumFractionDigits:1}),N5=new Intl.NumberFormat("pt-BR",{minimumFractionDigits:1,maximumFractionDigits:1});function rt(r){return P5.format(r)}function Ma(r){const a=r.replace(/\D/g,"").replace(/^0+/,"").slice(0,13);if(!a)return"";const s=a.padStart(3,"0");return`R$ ${s.slice(0,-2).replace(/\B(?=(\d{3})+(?!\d))/g,".")},${s.slice(-2)}`}function Ji(r){return Ma(String(Math.round(r*100)))}function Aa(r){const a=r.replace(/\D/g,"");return a?Number(a)/100:0}function lc(r){return`R$ ${z5.format(r)}`}function Ye(r,a=!1){return`${a&&r>0?"+":""}${N5.format(r)}%`}const Lg={carteira:"#0ea5e9",cdi:"#2563eb",poupanca:"#14b8a6",ibovespa:"#16a34a",sp500:"#8b5cf6",dolar:"#d97706",ouro:"#eab308",bitcoin:"#f97316"};function hp(r){if(Lg[r])return Lg[r];let a=0;for(const s of r)a=(a*31+s.charCodeAt(0))%360;return`hsl(${a} 60% 50%)`}const wr={otimo:{label:"Ótimo",color:"var(--success)"},bom:{label:"Bom",color:"var(--primary-strong)"},neutro:{label:"Neutro",color:"var(--muted)"},atencao:{label:"Atenção",color:"var(--warning)"},evitar:{label:"Evitar",color:"var(--error)"}};function Cf(r,a,s){if(!(r!=="fiis"&&r!=="acoes_br"))return!s||s==="short_term_market"?{label:"Análise limitada",color:"var(--muted)"}:a==="otimo"||a==="bom"?{label:r==="fiis"&&s==="fii_fundamentals"?"FII com indicadores favoráveis":r==="acoes_br"&&s==="equity_market_history"?"Histórico de mercado favorável":"Cenário favorável",color:"var(--success)"}:a==="neutro"?{label:"Neutro",color:"var(--muted)"}:a==="evitar"?{label:"Evitar",color:"var(--error)"}:{label:"Merece atenção",color:"var(--warning)"}}const M5=m.div`
  display: grid;
  gap: 22px;
`,A5=m.div`
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) repeat(3, minmax(0, 1fr));
  gap: 14px;
  @media (max-width: 1100px) { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  @media (max-width: 520px) { grid-template-columns: 1fr; }
`,ql=m(Ie)`
  display: flex;
  min-width: 0;
  min-height: 116px;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
  padding: 19px 20px;
  overflow: hidden;
  position: relative;
  &::before {
    position: absolute;
    inset: 0 auto 0 0;
    width: 3px;
    background: ${({$tone:r,$negative:a})=>r==="income"?"var(--success)":r==="result"?a?"var(--error)":"var(--success)":"var(--border)"};
    content: '';
  }
  border-color: ${({$tone:r,$negative:a})=>r==="income"?"color-mix(in srgb, var(--success) 32%, var(--border))":r==="result"?`color-mix(in srgb, ${a?"var(--error)":"var(--success)"} 32%, var(--border))`:"var(--border)"};
  background: ${({$tone:r,$negative:a})=>r==="income"?"color-mix(in srgb, var(--success) 8%, var(--surface))":r==="result"?`color-mix(in srgb, ${a?"var(--error)":"var(--success)"} 6%, var(--surface))`:"var(--surface)"};
  small {
    display: flex;
    align-items: center;
    gap: 7px;
    color: var(--muted);
    font-size: 10px;
    font-weight: 800;
    letter-spacing: .07em;
    text-transform: uppercase;
  }
  small svg { width: 14px; height: 14px; color: var(--primary-strong); }
  strong {
    display: block;
    margin-top: 7px;
    overflow: hidden;
    color: ${({$tone:r,$negative:a})=>r==="income"?"var(--success)":r==="result"?a?"var(--error)":"var(--success)":"var(--text)"};
    font-size: clamp(18px, 2vw, 25px);
    font-variant-numeric: tabular-nums;
    letter-spacing: -.04em;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`,ro=m.span`
  display: block;
  margin-top: 3px;
  color: var(--muted);
  font-size: 11px;
  line-height: 1.45;
`,T5=m.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
  margin-top: 7px;
  > div + div {
    padding-left: 12px;
    border-left: 1px solid var(--border);
  }
  small {
    font-size: 10px;
  }
  strong {
    font-size: clamp(16px, 1.8vw, 22px);
  }
`,Og=m.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  padding-bottom: 14px;
  margin-bottom: 17px;
  border-bottom: 1px solid var(--border);
  ${Fe} { margin: 0; }
  @media (max-width: 520px) {
    align-items: flex-start;
    flex-direction: column;
  }
`,D5=m.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  @media (max-width: 520px) { justify-content: flex-start; }
`,Wi=m.p`
  margin: 6px 0 0;
  color: var(--muted);
  font-size: 12px;
  line-height: 1.5;
`,mp=m.span`
  flex: 0 0 auto;
  padding: 6px 10px;
  border: 1px solid var(--border);
  border-radius: 999px;
  color: var(--muted);
  background: var(--surface-raised);
  font-size: 11px;
  font-weight: 750;
`,F5=m.div`
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(320px, .8fr);
  gap: 16px;
  align-items: start;
  @media (max-width: 1040px) { grid-template-columns: 1fr; }
`,L5=m(Ie)`
  min-width: 0;
  padding: 21px;
`,O5=m.form`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(155px, 1fr));
  align-items: end;
  gap: 10px;
  padding: 14px;
  margin-bottom: 18px;
  border: 1px solid var(--border);
  border-radius: 15px;
  background: var(--surface-raised);
  ${Z} { margin: 0; }
  @media (max-width: 700px) { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  @media (max-width: 480px) { grid-template-columns: 1fr; }
`,I5=m.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  @media (max-width: 1100px) { grid-column: 1 / -1; justify-content: flex-end; }
  @media (max-width: 480px) {
    justify-content: stretch;
    button { flex: 1; }
  }
`,B5=m(Ie)`
  min-width: 0;
  padding: 21px;
`,q5=m.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 10px;
  padding: 13px;
  margin: 14px 0 17px;
  border: 1px solid var(--border);
  border-radius: 13px;
  background: var(--surface-raised);
  ${Z} { margin: 0; }
  @media (max-width: 520px) { grid-template-columns: 1fr; }
`,U5=m.div`
  display: grid;
  gap: 12px;
`,H5=m.article`
  display: grid;
  gap: 14px;
  padding: 17px;
  border: 1px solid var(--border);
  border-radius: 17px;
  background:
    linear-gradient(180deg, color-mix(in srgb, var(--surface-raised) 70%, var(--surface)), var(--surface));
  box-shadow: 0 6px 18px var(--shadow);
  opacity: ${({$inactive:r})=>r?.62:1};
  transition: border-color .15s ease, transform .15s ease, box-shadow .15s ease;
  &:hover {
    border-color: color-mix(in srgb, var(--primary) 40%, var(--border));
    transform: translateY(-1px);
    box-shadow: 0 10px 24px var(--shadow);
  }
`,V5=m.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 14px;
  @media (max-width: 440px) { gap: 8px; }
`,W5=m.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  min-width: 0;
`,G5=m.div`
  display: grid;
  width: 44px;
  height: 44px;
  flex: 0 0 auto;
  place-items: center;
  border-radius: 12px;
  color: var(--primary-strong);
  background: color-mix(in srgb, var(--primary) 16%, var(--surface));
  font-size: 11px;
  font-weight: 850;
  letter-spacing: .02em;
`,Q5=m.div`
  min-width: 0;
  h3 {
    margin: 0;
    color: var(--text);
    font-size: 16px;
    letter-spacing: -.02em;
    overflow-wrap: anywhere;
  }
  p {
    margin: 4px 0 0;
    color: var(--muted);
    font-size: 12px;
    line-height: 1.45;
  }
  details {
    margin-top: 8px;
    color: var(--muted);
    font-size: 11px;
  }
  summary {
    width: fit-content;
    color: var(--primary-strong);
    font-weight: 750;
    cursor: pointer;
  }
  details ul {
    display: grid;
    gap: 4px;
    margin: 6px 0 0;
    padding-left: 17px;
    line-height: 1.45;
  }
`,K5=m.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 9px;
`,Cn=m.span`
  display: inline-flex;
  align-items: center;
  padding: 4px 8px;
  border: 1px solid var(--border);
  border-radius: 999px;
  color: var(--muted);
  background: var(--surface);
  font-size: 10px;
  font-weight: 700;
`,Y5=m(Cn)`
  border-color: ${({$active:r})=>r?"color-mix(in srgb, var(--success) 35%, var(--border))":"color-mix(in srgb, var(--error) 30%, var(--border))"};
  color: ${({$active:r})=>r?"var(--success)":"var(--error)"};
  background: ${({$active:r})=>r?"var(--success-soft)":"var(--error-soft)"};
`,J5=m.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 9px;
  @media (max-width: 820px) { grid-template-columns: repeat(2, minmax(0, 1fr)); }
`,Ul=m.div`
  min-width: 0;
  padding: 12px;
  border: 1px solid ${({$accent:r})=>r==="result"?"color-mix(in srgb, var(--success) 35%, var(--border))":r==="negative"?"color-mix(in srgb, var(--error) 35%, var(--border))":r==="income"?"color-mix(in srgb, var(--primary) 35%, var(--border))":"var(--border)"};
  border-radius: 12px;
  background: ${({$accent:r})=>r==="result"?"color-mix(in srgb, var(--success) 8%, var(--surface))":r==="negative"?"color-mix(in srgb, var(--error) 8%, var(--surface))":r==="income"?"color-mix(in srgb, var(--primary) 8%, var(--surface))":"var(--surface)"};
  small {
    display: block;
    color: var(--muted);
    font-size: 10px;
    font-weight: 700;
    letter-spacing: .04em;
    text-transform: uppercase;
  }
  strong {
    display: block;
    margin-top: 5px;
    overflow-wrap: anywhere;
    color: ${({$accent:r})=>r==="result"?"var(--success)":r==="negative"?"var(--error)":r==="income"?"var(--primary-strong)":"var(--text)"};
    font-size: clamp(13px, 1.25vw, 15px);
    font-variant-numeric: tabular-nums;
    letter-spacing: -.02em;
  }
`,X5=m.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding-top: 2px;
  color: var(--muted);
  font-size: 11px;
  @media (max-width: 620px) {
    align-items: stretch;
    flex-direction: column;
  }
`,Z5=m.div`
  display: flex;
  gap: 6px;
  margin-left: auto;
`,xp=m.button`
  display: grid;
  width: 34px;
  height: 34px;
  place-items: center;
  border: 1px solid ${({$active:r})=>r?"color-mix(in srgb, var(--success) 35%, var(--border))":"color-mix(in srgb, var(--error) 30%, var(--border))"};
  border-radius: 9px;
  color: ${({$active:r})=>r?"var(--success)":"var(--error)"};
  background: ${({$active:r})=>r?"var(--success-soft)":"var(--error-soft)"};
  cursor: pointer;
  &:hover { border-color: ${({$active:r})=>r?"var(--success)":"var(--error)"}; }
  &:disabled { opacity: .55; cursor: not-allowed; }
  &[data-danger='true']:hover { color: var(--error); background: var(--error-soft); }
  svg { width: 15px; height: 15px; }
`,eE=m.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 14px;
  ${Z}:last-of-type { grid-column: 1 / -1; }
  @media (max-width: 620px) { grid-template-columns: 1fr; ${Z} { grid-column: auto; } }
`,tE=m.div`
  grid-column: 1 / -1;
  display: flex;
  justify-content: flex-end;
  gap: 9px;
`,rE=m.p`
  grid-column: 1 / -1;
  margin: 0 0 12px;
  color: var(--muted);
  font-size: 12px;
`,nE=m.button`
  display: grid;
  width: 100%;
  gap: 8px;
  padding: 11px 0;
  border: 0;
  border-bottom: 1px solid var(--border);
  color: var(--text);
  background: transparent;
  font: inherit;
  text-align: left;
  cursor: pointer;
  transition: background .15s ease, padding .15s ease;
  &:hover { background: color-mix(in srgb, var(--primary) 5%, transparent); }
  &:focus-visible { outline: 3px solid var(--focus); outline-offset: 3px; border-radius: 8px; }
  &:first-of-type { padding-top: 0; }
  &:last-child { padding-bottom: 0; border-bottom: 0; }
  > span:first-child { display: grid; grid-template-columns: minmax(0, 1fr) auto auto; align-items: center; gap: 8px; color: var(--text); font-size: 12px; }
  > span:first-child strong { font-weight: 750; }
  > span:first-child > span { color: var(--text); font-weight: 750; font-variant-numeric: tabular-nums; }
  > span:first-child svg { width: 15px; height: 15px; color: var(--muted); transition: color .15s ease, transform .15s ease; }
  &:hover > span:first-child svg { color: var(--primary); transform: translateX(2px); }
  small { overflow: hidden; color: var(--muted); font-size: 10px; text-overflow: ellipsis; white-space: nowrap; }
`,aE=m.div`
  display: grid;
  gap: 12px;
`,iE=m.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 15px 16px;
  border: 1px solid color-mix(in srgb, var(--success) 30%, var(--border));
  border-radius: 14px;
  background: color-mix(in srgb, var(--success) 8%, var(--surface));
  small { display: block; color: var(--muted); font-size: 11px; }
  strong { display: block; margin-top: 3px; color: var(--success); font-size: 22px; font-variant-numeric: tabular-nums; letter-spacing: -.03em; }
  @media (max-width: 520px) { align-items: flex-start; flex-direction: column; }
`,sE=m.div`
  display: grid;
  gap: 9px;
  max-height: 52vh;
  overflow-y: auto;
  padding-right: 3px;
`,oE=m.article`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
  gap: 14px;
  padding: 13px 14px;
  border: 1px solid var(--border);
  border-radius: 13px;
  background: var(--surface-raised);
  @media (max-width: 520px) { grid-template-columns: 1fr; gap: 9px; }
`,lE=m.div`
  min-width: 0;
  h3 { margin: 0; color: var(--text); font-size: 14px; }
  p { margin: 4px 0 0; color: var(--muted); font-size: 12px; }
  small { display: block; margin-top: 7px; color: var(--muted); font-size: 11px; }
`,cE=m.div`
  text-align: right;
  strong { display: block; color: var(--primary-strong); font-size: 15px; font-variant-numeric: tabular-nums; white-space: nowrap; }
  small { display: block; margin-top: 3px; color: var(--muted); font-size: 10px; }
  @media (max-width: 520px) { text-align: left; }
`,dE=m.span`
  display: block;
  height: 8px;
  overflow: hidden;
  border-radius: 999px;
  background: var(--surface-raised);
  > span { display: block; height: 100%; border-radius: inherit; background: var(--primary); }
`,uE=m.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: 16px;
  color: var(--muted);
  font-size: 12px;
  @media (max-width: 520px) {
    align-items: stretch;
    flex-direction: column;
    > div { justify-content: space-between; }
  }
`,bc=[{id:"fii",label:"FII",default_frequency:"mensal",auto_quote:!0,quote_market:"b3",uses_fii_segment:!0},{id:"fiagro",label:"Fiagro",default_frequency:"mensal",auto_quote:!0,quote_market:"b3",uses_fii_segment:!0},{id:"acao",label:"Ação",default_frequency:"trimestral",auto_quote:!0,quote_market:"b3",uses_fii_segment:!1},{id:"bdr",label:"BDR",default_frequency:"trimestral",auto_quote:!0,quote_market:"b3",uses_fii_segment:!1},{id:"etf",label:"ETF",default_frequency:"trimestral",auto_quote:!0,quote_market:"b3",uses_fii_segment:!1},{id:"fundo",label:"Fundo",default_frequency:"mensal",auto_quote:!1,quote_market:null,uses_fii_segment:!1},{id:"tesouro",label:"Tesouro",default_frequency:"semestral",auto_quote:!1,quote_market:null,uses_fii_segment:!1},{id:"cdb",label:"CDB",default_frequency:"mensal",auto_quote:!1,quote_market:null,uses_fii_segment:!1},{id:"lci_lca",label:"LCI/LCA",default_frequency:"mensal",auto_quote:!1,quote_market:null,uses_fii_segment:!1},{id:"debenture",label:"Debênture",default_frequency:"semestral",auto_quote:!1,quote_market:null,uses_fii_segment:!1},{id:"previdencia",label:"Previdência",default_frequency:"mensal",auto_quote:!1,quote_market:null,uses_fii_segment:!1},{id:"cripto",label:"Cripto",default_frequency:"mensal",auto_quote:!0,quote_market:"crypto",uses_fii_segment:!1},{id:"acao_us",label:"Ação EUA",default_frequency:"trimestral",auto_quote:!0,quote_market:"us",uses_fii_segment:!1},{id:"renda_fixa",label:"Renda fixa",default_frequency:"mensal",auto_quote:!1,quote_market:null,uses_fii_segment:!1},{id:"outro",label:"Outro",default_frequency:"mensal",auto_quote:!1,quote_market:null,uses_fii_segment:!1}],no={papel:"Papel",tijolo:"Tijolo",hibrido:"Híbrido"},gp={mensal:"Mensal",trimestral:"Trimestral",semestral:"Semestral",anual:"Anual"},B1=["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],pE=new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}),Ig=new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL",minimumFractionDigits:2,maximumFractionDigits:4});function Hl(r){return pE.format(Number(r)||0)}function fE(r){switch(r.recommendation){case"vender":return{label:"Avaliar venda · 100%",color:"var(--warning)"};case"reduzir":return{label:"Avaliar redução · 50%",color:"var(--warning)"};case"manter":return{label:"Sinal: manter",color:"var(--success)"};case"sem_dados":return{label:"Análise indisponível",color:"var(--muted)"}}}const q1="dividends-price-refresh-day",Bg="dividend-values-hidden";function qg(){const r=new Date;return`${r.getFullYear()}-${String(r.getMonth()+1).padStart(2,"0")}`}function U1(){return new Date().toISOString().slice(0,10)}function hE(){try{return localStorage.getItem(q1)!==U1()}catch{return!0}}function mE(){try{localStorage.setItem(q1,U1())}catch{}}function xE(r){if(!r)return null;const a=new Date(r);return Number.isNaN(a.getTime())?null:a.toLocaleString("pt-BR",{dateStyle:"short",timeStyle:"short"})}function vp(r){const[a,s,l]=r.slice(0,10).split("-").map(Number),c=new Date(a,s-1,l);return Number.isNaN(c.getTime())?r:c.toLocaleDateString("pt-BR",{dateStyle:"long"})}function gE(r){return new Intl.NumberFormat("pt-BR",{maximumFractionDigits:4}).format(Number(r)||0)}function ao(r){var l;const[a,s]=r.split("-");return`${((l=B1[Number(s)-1])==null?void 0:l.slice(0,3))??s}/${a}`}function Ug(r,a){const l=(a?r.find(c=>c.id===a):r[0])??bc.find(c=>c.id===a)??bc[0];return{ticker:"",name:"",asset_type:l.id,fii_segment:"",quantity:"",applied_amount:"",cdi_percent:"",investment_date:"",average_price:"",current_price:"",dividend_per_share:"",frequency:l.default_frequency,reference_month:"1",payment_day:"15",is_active:!0,notes:""}}function H1(r){var a;return{ticker:r.ticker,name:r.name??"",asset_type:r.asset_type,fii_segment:r.fii_segment??"",quantity:String(Number(r.quantity)),applied_amount:r.applied_amount==null?"":Ji(Number(r.applied_amount)),cdi_percent:r.cdi_percent==null?"":String(Number(r.cdi_percent)),investment_date:((a=r.investment_date)==null?void 0:a.slice(0,10))??"",average_price:Number(r.average_price)?Ji(Number(r.average_price)):"",current_price:r.current_price==null?"":Ji(Number(r.current_price)),dividend_per_share:Number(r.dividend_per_share)?Ji(Number(r.dividend_per_share)):"",frequency:r.frequency,reference_month:String(r.reference_month),payment_day:String(r.payment_day),is_active:r.is_active,notes:r.notes??""}}function vE(r,a=null){if(r.asset_type==="renda_fixa"){const g=Aa(r.applied_amount),_=Number(r.cdi_percent.replace(",",".")),b=r.investment_date,k=b.split("-").map(Number),C=new Date(Date.UTC(k[0],k[1]-1,k[2]));if(!Number.isFinite(g)||g<=0)throw new Error("Informe um valor aplicado maior que zero.");if(!Number.isFinite(_)||_<0)throw new Error("O percentual do CDI não pode ser negativo.");if(!/^\d{4}-\d{2}-\d{2}$/.test(b)||Number.isNaN(C.getTime())||C.getUTCFullYear()!==k[0]||C.getUTCMonth()!==k[1]-1||C.getUTCDate()!==k[2])throw new Error("Informe uma data de investimento válida.");if(!r.cdi_percent.trim())throw new Error("Informe o percentual do CDI.");const N=Number(r.payment_day);if(!Number.isInteger(N)||N<1||N>31)throw new Error("O dia do pagamento deve ser de 1 a 31.");return{ticker:r.ticker.trim().toUpperCase(),name:r.name.trim()||null,asset_type:"renda_fixa",applied_amount:g,cdi_percent:_,investment_date:b,payment_day:N,is_active:r.is_active,notes:r.notes.trim()||null}}const s=Number(r.quantity.replace(",","."));if(!Number.isFinite(s)||s<=0)throw new Error("Informe uma quantidade de cotas maior que zero.");const l=Aa(r.dividend_per_share);if(!Number.isFinite(l)||l<0)throw new Error("O provento por cota não pode ser negativo.");const c=Number(r.payment_day),p=Aa(r.average_price);if(!Number.isFinite(p)||p<0)throw new Error("O preço médio não pode ser negativo.");const h=r.current_price?Aa(r.current_price):null;if(h!==null&&(!Number.isFinite(h)||h<0))throw new Error("O preço atual não pode ser negativo.");if(!Number.isInteger(c)||c<1||c>31)throw new Error("O dia de pagamento deve ser de 1 a 31.");const f=!!(a!=null&&a.auto_price)&&r.current_price===H1(a).current_price;return{ticker:r.ticker.trim().toUpperCase(),name:r.name.trim()||null,asset_type:r.asset_type,fii_segment:r.fii_segment||null,quantity:s,average_price:p,...f?{}:{current_price:h},dividend_per_share:l,frequency:r.frequency,reference_month:Number(r.reference_month),payment_day:c,is_active:r.is_active,notes:r.notes.trim()||null}}function Ln(r,a){var s,l,c,p;return jt.isAxiosError(r)?((s=r.response)==null?void 0:s.status)===409?((l=r.response.data)==null?void 0:l.error)||"Você já cadastrou este ativo.":((p=(c=r.response)==null?void 0:c.data)==null?void 0:p.error)||a:r instanceof Error?r.message:a}function Hg({assetType:r}){const a=r==="renda_fixa",[s,l]=x.useState(bc),[c,p]=x.useState(),[h,f]=x.useState(()=>new Map),[g,_]=x.useState(""),[b,k]=x.useState(!1),[C,N]=x.useState(),[O,$]=x.useState(""),[V,R]=x.useState(!1),[j,T]=x.useState(),[F,ne]=x.useState(null),[X,L]=x.useState(),[oe,S]=x.useState(qg()),[y,q]=x.useState(12),[de,be]=x.useState(""),[ke,ze]=x.useState(""),[Q,ge]=x.useState(a),[le,xe]=x.useState(""),[H,z]=x.useState(()=>({...r?{asset_type:r}:{},page:1,limit:20})),[w,re]=x.useState({asset_type:r??"",fii_segment:"",active:"",search:""}),[ae,M]=x.useState(()=>Ug(bc)),[se,ve]=x.useState(null),[je,U]=x.useState(!1),[pe,ot]=x.useState(null),[st,ft]=x.useState(()=>new Set),[at,lr]=x.useState(!1),[Et,bt]=x.useState(null),[Le,et]=x.useState(!0),[ie,He]=x.useState(()=>{try{return localStorage.getItem(Bg)==="true"}catch{return!1}});x.useEffect(()=>{try{localStorage.setItem(Bg,String(ie))}catch{}},[ie]);const[Pt,Kt]=x.useState(!0),[Vt,fr]=x.useState(!1),[zr,vt]=x.useState(""),[Nr,an]=x.useState(""),[hr,Dt]=x.useState(""),[Br,Mr]=x.useState(0),[qn,ca]=x.useState(!1),tr=x.useCallback(()=>U(!1),[]),rr=x.useMemo(()=>new Map(s.map(E=>[E.id,E])),[s]),kt=rr.get(ae.asset_type)??s[0],Pn=!!(kt!=null&&kt.uses_fii_segment),J=ae.frequency!=="mensal",Re=E=>ie?"••••••":Hl(E);function $t(){He(E=>!E)}x.useEffect(()=>{let E=!0;return S_().then(ce=>{!E||!ce.length||l(ce)}).catch(()=>{}),()=>{E=!1}},[]),x.useEffect(()=>{if(!a)return;let E=!0;return ge(!0),xe(""),A_().then(ce=>{E&&(be(ce.rate.toString()),ze(ce.reference_date))}).catch(ce=>{E&&xe(Ln(ce,"Não foi possível carregar o CDI do Banco Central. Informe a taxa manualmente."))}).finally(()=>{E&&ge(!1)}),()=>{E=!1}},[a]),x.useEffect(()=>{if(a)return;let E=!0;return f(new Map),_(""),k(!1),f1("moderado").then(ce=>{if(!E)return;const Me=new Map;[...ce.assets,...ce.portfolio].forEach(Ke=>{Ke.ticker&&Ke.class_id&&Me.set(`${Ke.class_id}:${Ke.ticker.toUpperCase()}`,Ke)}),f(Me),k(!0)}).catch(ce=>{E&&(_(Ln(ce,"Não foi possível carregar as etiquetas de análise de mercado.")),k(!0))}),()=>{E=!1}},[a,Br]),x.useEffect(()=>{if(a)return;let E=!0;const ce={perfil:"moderado",anos:5,prazo_meses:12,cdi_percent:100,lci_percent:90};return N(void 0),$(""),R(!1),m1(ce).then(Me=>{E&&N(Me)}).catch(Me=>{E&&$(Ln(Me,"Não foi possível comparar os FIIs com a renda fixa."))}).finally(()=>{E&&R(!0)}),()=>{E=!1}},[a,Br]),x.useEffect(()=>{let E=!0;Kt(!0);const ce=Number(de.replace(",",".")),Me=!a||de.trim()!==""&&Number.isFinite(ce)&&ce>=0;return vt(le||(Q||Me?"":"Informe uma taxa CDI anual válida para carregar a projeção.")),Promise.all([Nl(H),Me&&!Q?M_(oe,y,a?ce:void 0):Promise.resolve(void 0),C_()]).then(([Ke,ht,ct])=>{E&&(p(Ke),ht&&T(ht),L(ct))}).catch(Ke=>{E&&vt(Ln(Ke,"Não foi possível carregar os dividendos."))}).finally(()=>{E&&Kt(!1)}),()=>{E=!1}},[H,oe,y,de,a,Q,le,Br]);const St=x.useCallback(async E=>{const ce=!!(E!=null&&E.silent);ca(!0),ce||vt("");try{const Me=await N_();mE(),(!ce||Me.updated_count>0||Me.failed_count>0)&&Dt(Me.failed_count?`${Me.updated_count} cotação(ões) atualizada(s); ${Me.failed_count} indisponível(is).`:Me.updated_count?`${Me.updated_count} cotação(ões) atualizada(s) automaticamente.`:"Cotações já estavam atualizadas."),Mr(Ke=>Ke+1)}catch(Me){ce||vt(Ln(Me,"Não foi possível atualizar as cotações."))}finally{ca(!1)}},[]);x.useEffect(()=>{a||!hE()||St({silent:!0})},[a,St]),x.useEffect(()=>{let E=!0;return et(!0),Nl({...a?{asset_type:"renda_fixa"}:{},active:!0,page:1,limit:1}).then(ce=>{E&&bt(ce.pagination.total>0)}).catch(ce=>{E&&(bt(null),an(Ln(ce,"Não foi possível verificar a situação dos ativos.")))}).finally(()=>{E&&et(!1)}),()=>{E=!1}},[a,Br]);function qr(){ve(null),M(Ug(s,r)),U(!0)}function dt(E){ve(E),M(H1(E)),U(!0)}function Fa(E){const ce=rr.get(E);M(Me=>({...Me,asset_type:E,frequency:(ce==null?void 0:ce.default_frequency)??Me.frequency,fii_segment:ce!=null&&ce.uses_fii_segment?Me.fii_segment:""}))}async function Un(E){var ce;E.preventDefault(),vt(""),Dt(""),fr(!0);try{const Me=vE(ae,se),Ke=se?await Du(se.id,Me):await T_(Me);if(a){const ht=Aa(ae.applied_amount),ct=Number(ae.cdi_percent.replace(",","."));if(!(Number.isFinite(Number(Ke.applied_amount))&&Math.abs(Number(Ke.applied_amount)-ht)<.01&&Number.isFinite(Number(Ke.cdi_percent))&&Math.abs(Number(Ke.cdi_percent)-ct)<.005&&((ce=Ke.investment_date)==null?void 0:ce.slice(0,10))===ae.investment_date)){U(!1),ve(null),Mr(it=>it+1),vt("O servidor não confirmou o valor aplicado, o percentual do CDI e a data. Atualize/reinicie o backend antes de cadastrar novamente.");return}}U(!1),ve(null),Dt(se?"Ativo atualizado.":"Ativo cadastrado."),Mr(ht=>ht+1)}catch(Me){vt(Ln(Me,"Não foi possível salvar o ativo."))}finally{fr(!1)}}async function La(E){const ce=String(E.id);if(!st.has(ce)){ft(Me=>new Set(Me).add(ce)),vt(""),Dt("");try{const Me=await Du(E.id,{is_active:!E.is_active});if(!(Me.is_active===!E.is_active&&Number(Me.invested_amount)===Number(E.invested_amount)&&Number(Me.current_value)===Number(E.current_value))){Mr(ht=>ht+1),vt("O servidor não preservou os valores do ativo ao alterar a situação. Atualize/reinicie o backend antes de tentar novamente.");return}Mr(ht=>ht+1)}catch(Me){vt(Ln(Me,"Não foi possível alterar o ativo."))}finally{ft(Me=>{const Ke=new Set(Me);return Ke.delete(ce),Ke})}}}async function we(){if(at||Pt)return;const E=a?"investimentos de renda fixa":"ativos de dividendos";lr(!0),vt(""),an(""),Dt("");let ce=0,Me=!1;try{const Ke={...a?{asset_type:"renda_fixa"}:{},page:1,limit:100},ht=await Nl(Ke),ct=[...ht.data];for(let Qe=2;Qe<=ht.pagination.totalPages;Qe+=1){const yt=await Nl({...Ke,page:Qe});ct.push(...yt.data)}const Ft=ct.filter(Qe=>a?Qe.asset_type==="renda_fixa":Qe.asset_type!=="renda_fixa");if(!Ft.length){Dt(`Nenhum ${a?"investimento de renda fixa":"ativo de dividendos"} cadastrado.`);return}Me=!Ft.some(Qe=>Qe.is_active);const it=Ft.filter(Qe=>Qe.is_active!==Me);if(!it.length){Dt(`Todos os ${E} já estão ${Me?"ativos":"desativados"}.`);return}for(const Qe of it){const yt=await Du(Qe.id,{is_active:Me});if(!(yt.is_active===Me&&Number(yt.invested_amount)===Number(Qe.invested_amount)&&Number(yt.current_value)===Number(Qe.current_value)))throw new Error(`O servidor não confirmou a situação ou preservou os valores de ${Qe.ticker}.`);ce+=1}Dt(`${ce} ${E} ${Me?"ativados":"desativados"} com sucesso.`)}catch(Ke){const ct=Ln(Ke,`Não foi possível ${Me?"ativar":"desativar"} todos os ${E}.`);an(ce?`Ação parcial: ${ce} ${E} foram ${Me?"ativados":"desativados"} antes da falha. ${ct}`:ct)}finally{ce>0&&(et(!0),Mr(Ke=>Ke+1)),lr(!1)}}async function Hn(){if(pe){vt(""),Dt("");try{await D_(pe.id),Dt("Ativo removido."),Mr(E=>E+1)}catch(E){vt(Ln(E,"Não foi possível excluir o ativo."))}finally{ot(null)}}}function Oe(E){E.preventDefault(),z({asset_type:r??(w.asset_type||void 0),fii_segment:w.fii_segment||void 0,active:w.active?w.active==="true":void 0,search:w.search.trim()||void 0,page:1,limit:20})}function Vn(){re({asset_type:r??"",fii_segment:"",active:"",search:""}),z({...r?{asset_type:r}:{},page:1,limit:20})}function Wn(E){var ce;return((ce=rr.get(E))==null?void 0:ce.label)??String(E)}const kr=(c==null?void 0:c.data)??[],Wt=c==null?void 0:c.pagination,lt=a&&j?(()=>{const E=j.months.map(ht=>{const ct=ht.items.filter(yt=>yt.asset_type===r),Ft=ct.reduce((yt,Xe)=>yt+(Number(Xe.gross_amount??Xe.amount)||0),0),it=ct.reduce((yt,Xe)=>yt+(Number(Xe.tax_amount)||0),0),Qe=ct.reduce((yt,Xe)=>yt+(Number(Xe.net_amount??Xe.amount)||0),0);return{...ht,items:ct,gross_total:Ft,tax_total:it,income_tax_rate:Ft?it/Ft:0,net_total:Qe,total:Qe}}),ce=E.reduce((ht,ct)=>ht+Number(ct.gross_total),0),Me=E.reduce((ht,ct)=>ht+Number(ct.tax_total),0),Ke=E.reduce((ht,ct)=>ht+Number(ct.net_total),0);return{...j,months:E,gross_total:ce,tax_total:Me,income_tax_rate:ce?Me/ce:0,total:Ke,net_total:Ke,period_total:Ke,monthly_average:j.months_count?Ke/j.months_count:0,monthly_average_gross:j.months_count?ce/j.months_count:0,monthly_average_tax:j.months_count?Me/j.months_count:0}})():j,wt=X==null?void 0:X.by_asset_type.find(E=>E.key===r),_t=a&&X?{...X,holdings_count:(wt==null?void 0:wt.holdings_count)??0,invested_total:(wt==null?void 0:wt.invested_total)??0,current_total:(wt==null?void 0:wt.current_total)??0,profit_loss:(wt==null?void 0:wt.profit_loss)??0,profit_loss_percent:Number(wt==null?void 0:wt.invested_total)?Number(wt==null?void 0:wt.profit_loss)/Number(wt==null?void 0:wt.invested_total)*100:0}:X,Ur=(lt==null?void 0:lt.months)??[],Gn=Math.max(...Ur.map(E=>Number(E.total)||0),1),Hr=Number(_t==null?void 0:_t.profit_loss)||0,zt=a?null:xE(X==null?void 0:X.prices_updated_at),cr=!!(H.asset_type||H.fii_segment||H.active!==void 0||H.search);return e.jsxs(M5,{children:[e.jsxs($o,{children:[e.jsxs("div",{children:[e.jsxs("span",{children:[e.jsx(Ki,{size:14}),a?"Renda fixa":"Dividendos"]}),e.jsx("h1",{children:a?"Acompanhe seus investimentos de renda fixa.":"Sua renda passiva, mês a mês."}),e.jsx("p",{children:a?"Cadastre cada produto e acompanhe o capital investido, o valor atual e a estimativa de rendimento mensal.":"Cotações de ativos com auto cotação atualizam sozinhas uma vez por dia. O provento projetado é uma estimativa, não uma garantia de pagamento."}),zt&&e.jsxs("p",{style:{marginTop:8,color:"var(--muted)",fontSize:12},children:["Última atualização de cotações: ",zt]})]}),e.jsxs("div",{style:{display:"flex",gap:10,flexWrap:"wrap"},children:[e.jsxs(ue,{type:"button","aria-label":ie?"Mostrar valores financeiros":"Ocultar valores financeiros","aria-pressed":ie,title:ie?"Mostrar valores financeiros":"Ocultar valores financeiros",onClick:$t,children:[ie?e.jsx(Co,{}):e.jsx(g1,{}),ie?"Mostrar valores":"Ocultar valores"]}),!a&&e.jsxs(ue,{type:"button",onClick:()=>void St({force:!0}),disabled:qn,children:[e.jsx(j1,{}),qn?"Atualizando...":"Atualizar cotações"]}),e.jsxs(ue,{type:"button",$variant:"primary",onClick:qr,children:[e.jsx(gt,{}),a?"Novo investimento":"Novo ativo"]})]})]}),zr&&e.jsx(Ie,{role:"alert",style:{color:"var(--error)",padding:14},children:zr}),Nr&&e.jsx(Ie,{role:"alert",style:{color:"var(--error)",padding:14},children:Nr}),hr&&e.jsx(Ie,{role:"status",style:{color:"var(--primary-strong)",padding:14},children:hr}),e.jsxs(A5,{"aria-label":"Resumo da carteira",children:[e.jsx(ql,{$tone:"income",children:e.jsxs("div",{children:[e.jsxs("small",{children:[e.jsx(Ki,{size:14}),"Estimativa mensal"]}),a?e.jsxs(e.Fragment,{children:[e.jsxs(T5,{"aria-label":"Comparação de rendimento bruto e líquido",children:[e.jsxs("div",{children:[e.jsx("small",{children:"Bruto"}),e.jsx("strong",{children:Re(lt==null?void 0:lt.monthly_average_gross)})]}),e.jsxs("div",{children:[e.jsx("small",{children:"Líquido"}),e.jsx("strong",{children:Re(lt==null?void 0:lt.monthly_average)})]})]}),e.jsxs(ro,{children:["No período: bruto ",Re(lt==null?void 0:lt.gross_total)," − IR ",Re(lt==null?void 0:lt.tax_total)," = líquido ",Re(lt==null?void 0:lt.period_total)," · ",y," meses"]})]}):e.jsxs(e.Fragment,{children:[e.jsx("strong",{children:Re(lt==null?void 0:lt.monthly_average)}),e.jsxs(ro,{children:[Re(lt==null?void 0:lt.period_total)," no período · ",y," meses"]})]})]})}),e.jsx(ql,{children:e.jsxs("div",{children:[e.jsx("small",{children:"Total investido"}),e.jsx("strong",{children:Re(_t==null?void 0:_t.invested_total)}),e.jsx(ro,{children:"Capital aplicado"})]})}),e.jsx(ql,{children:e.jsxs("div",{children:[e.jsx("small",{children:"Valor atual da carteira"}),e.jsx("strong",{children:Re(_t==null?void 0:_t.current_total)}),e.jsx(ro,{children:"Valor de mercado da carteira"})]})}),e.jsx(ql,{$tone:"result",$negative:Hr<0,children:e.jsxs("div",{children:[e.jsxs("small",{children:[e.jsx(ic,{size:14}),"Resultado"]}),e.jsx("strong",{children:Re(_t==null?void 0:_t.profit_loss)}),e.jsx(ro,{children:(_t==null?void 0:_t.profit_loss_percent)!=null?`${Hr<0?"":"+"}${Number(_t.profit_loss_percent).toFixed(2)}% sobre o investido`:"Variação da carteira"})]})})]}),e.jsxs(F5,{children:[e.jsxs(L5,{children:[e.jsxs(Og,{children:[e.jsxs("div",{children:[e.jsxs(Fe,{children:[e.jsx(Ki,{size:19}),"Meus ativos"]}),e.jsx(Wi,{children:"Consulte valores, proventos e situação de cada posição."})]}),e.jsxs(D5,{children:[e.jsxs(mp,{children:[Number(_t==null?void 0:_t.holdings_count)||(Wt==null?void 0:Wt.total)||0," ativos"]}),e.jsxs(ue,{type:"button",$variant:Et?"danger":"primary",title:Et?"Desativar todos os ativos desta lista.":"Ativar todos os ativos desta lista.",disabled:Pt||Le||Et===null||at,onClick:()=>void we(),children:[at||Le?e.jsx(Ze,{className:"spin"}):Et?e.jsx(xc,{}):e.jsx(gc,{}),at?"Atualizando situação...":Le?"Verificando situação...":Et?"Desativar todos":"Ativar todos"]})]})]}),e.jsxs(O5,{onSubmit:Oe,children:[!a&&e.jsxs(Z,{htmlFor:"div-filter-type",children:["Tipo",e.jsxs("select",{id:"div-filter-type",value:w.asset_type,onChange:E=>re(ce=>({...ce,asset_type:E.target.value})),children:[e.jsx("option",{value:"",children:"Todos"}),s.map(E=>e.jsx("option",{value:E.id,children:E.label},E.id))]})]}),e.jsxs(Z,{htmlFor:"div-filter-segment",children:["Segmento",e.jsxs("select",{id:"div-filter-segment",value:w.fii_segment,onChange:E=>re(ce=>({...ce,fii_segment:E.target.value})),children:[e.jsx("option",{value:"",children:"Todos"}),Object.keys(no).map(E=>e.jsx("option",{value:E,children:no[E]},E))]})]}),e.jsxs(Z,{htmlFor:"div-filter-active",children:["Situação",e.jsxs("select",{id:"div-filter-active",value:w.active,onChange:E=>re(ce=>({...ce,active:E.target.value})),children:[e.jsx("option",{value:"",children:"Todos"}),e.jsx("option",{value:"true",children:"Ativos"}),e.jsx("option",{value:"false",children:"Inativos"})]})]}),e.jsxs(Z,{htmlFor:"div-filter-search",children:["Buscar ativo",e.jsx("input",{id:"div-filter-search",type:"search",value:w.search,onChange:E=>re(ce=>({...ce,search:E.target.value})),placeholder:"Ticker ou nome"})]}),e.jsxs(I5,{children:[e.jsx(ue,{type:"submit",children:"Aplicar filtros"}),cr&&e.jsx(ue,{type:"button",onClick:Vn,children:"Limpar"})]})]}),!a&&e.jsx(Wi,{role:g?"alert":"note",style:{marginTop:-8},children:g?`${g} As etiquetas de análise podem não estar disponíveis.`:"Perfil moderado. FIIs: patrimônio, idade, P/VP, regularidade dos proventos, retorno e risco histórico; vacância não disponível em fonte padronizada. Ações: retorno ajustado por proventos, CDI, volatilidade e queda máxima; sem balanços, lucro ou dívida. Nota 65+ favorável; 45–64 neutra; 30–44 atenção; abaixo de 30 evitar."}),!a&&e.jsx(Wi,{role:O?"alert":"note",style:{marginTop:-10},children:O?`A comparação de FIIs com renda fixa não está disponível: ${O}`:V?"Sinais de venda para FIIs/Fiagros com base em renda fixa líquida, qualidade e histórico de até 5 anos (prazo de renda fixa: 12 meses). São estimativas, não ordens de venda; o resultado atual, inclusive prejuízo, não determina o sinal sozinho.":"Comparação de FIIs com renda fixa em andamento..."}),Pt?e.jsxs(Ge,{children:[e.jsx(Ze,{}),e.jsx("p",{children:"Carregando ativos..."})]}):kr.length?e.jsx(U5,{children:kr.map(E=>{var Kn;const ce=E.asset_type==="renda_fixa"?(Kn=Ur[0])==null?void 0:Kn.items.find(nr=>String(nr.holding_id)===String(E.id)):void 0,Me=Number((ce==null?void 0:ce.gross_amount)??(ce==null?void 0:ce.amount)??0),Ke=Number((ce==null?void 0:ce.net_amount)??(ce==null?void 0:ce.amount)??0),ht=Number((ce==null?void 0:ce.tax_amount)??Math.max(Me-Ke,0)),ct=E.asset_type==="renda_fixa"?Ke:(Number(E.quantity)||0)*(Number(E.dividend_per_share)||0),it=(Number(E.profit_loss)||0)<0,Qe=E.ticker.slice(0,4),yt=E.asset_type==="fii"||E.asset_type==="fiagro"?"fiis":["acao","bdr","etf"].includes(E.asset_type)?"acoes_br":void 0,Xe=yt?h.get(`${yt}:${E.ticker.toUpperCase()}`):void 0,gn=Xe?Cf(yt,Xe.rating,Xe.analysis_type):void 0,Sr=E.is_active&&(E.asset_type==="fii"||E.asset_type==="fiagro")?C==null?void 0:C.positions.find(nr=>nr.ticker.toUpperCase()===E.ticker.toUpperCase()):void 0,Qn=Sr?fE(Sr):void 0;return e.jsxs(H5,{$inactive:!E.is_active,children:[e.jsxs(V5,{children:[e.jsxs(W5,{children:[e.jsx(G5,{title:E.ticker,children:Qe}),e.jsxs(Q5,{children:[e.jsx("h3",{children:E.ticker}),e.jsx("p",{children:E.name||Wn(E.asset_type)}),e.jsxs(K5,{children:[e.jsx(Cn,{children:Wn(E.asset_type)}),E.fii_segment&&e.jsx(Cn,{children:no[E.fii_segment]}),gn&&e.jsx(as,{label:gn.label,color:gn.color,details:[`Nota ${Xe==null?void 0:Xe.score}/100 · perfil moderado · classificação: ${Xe?wr[Xe.rating].label:"indisponível"}.`,...(Xe==null?void 0:Xe.analysis_factors)??["Análise detalhada não disponível para este ativo."],...(Xe==null?void 0:Xe.analysis_type)==="fii_fundamentals"?["Vacância: não disponível nos dados padronizados consultados; não foi estimada nem pontuada."]:(Xe==null?void 0:Xe.analysis_type)==="equity_market_history"?["Não avalia lucro, dívida, ROE ou valuation fundamentalista da empresa."]:[]]}),Qn&&Sr&&e.jsx(as,{label:Qn.label,color:Qn.color,details:[`Sinal quantitativo: ${Qn.label}${Sr.sell_score===null?"":` · nota ${Sr.sell_score}/100`}.`,`Resultado estimado nesta análise: ${Sr.gain===null?"preço médio indisponível":Sr.gain<0?`prejuízo de ${Hl(Math.abs(Sr.gain))}`:`lucro de ${Hl(Sr.gain)}`}.`,...Sr.reasons,"A recomendação não é garantia de retorno. O prejuízo passado, isoladamente, não define se manter ou vender; considere objetivos, impostos, liquidez e sua avaliação do ativo."]}),E.is_active&&(E.asset_type==="fii"||E.asset_type==="fiagro")&&V&&!O&&!Sr&&e.jsx(Cn,{children:"Sem sinal de renda fixa"}),yt&&b&&!g&&!Xe&&e.jsx(Cn,{children:"Sem análise de mercado"}),E.asset_type==="renda_fixa"?e.jsxs(e.Fragment,{children:[e.jsxs(Cn,{children:[Number(E.cdi_percent)||0,"% do CDI"]}),E.investment_date&&e.jsxs(Cn,{children:["Desde ",vp(E.investment_date)]})]}):e.jsxs(e.Fragment,{children:[e.jsx(Cn,{children:gp[E.frequency]??E.frequency}),e.jsxs(Cn,{children:["Dia ",E.payment_day]}),E.auto_price?e.jsx(Cn,{children:"Auto cotação"}):e.jsx(Cn,{children:"Preço manual"})]}),e.jsx(Y5,{$active:E.is_active,children:E.is_active?"Ativo":"Desativado"})]}),(Xe==null?void 0:Xe.analysis_factors)&&Xe.analysis_factors.length>0&&e.jsxs("details",{children:[e.jsxs("summary",{children:["Ver critérios da análise · nota ",Xe.score,"/100"]}),e.jsx("ul",{children:Xe.analysis_factors.map((nr,cs)=>e.jsx("li",{children:nr},`${E.ticker}-${cs}`))})]})]})]}),e.jsxs(Z5,{children:[e.jsx(xp,{$active:E.is_active,type:"button",title:E.is_active?"Desativar":"Ativar","aria-label":`${E.is_active?"Desativar":"Ativar"} ${E.ticker}`,disabled:at||st.has(String(E.id)),onClick:()=>{La(E)},children:E.is_active?e.jsx(xc,{}):e.jsx(gc,{})}),e.jsx(xp,{type:"button",title:"Editar","aria-label":`Editar ${E.ticker}`,onClick:()=>dt(E),children:e.jsx(rn,{})}),e.jsx(xp,{type:"button","data-danger":"true",title:"Excluir","aria-label":`Excluir ${E.ticker}`,onClick:()=>ot(E),children:e.jsx($r,{})})]})]}),e.jsxs(J5,{children:[e.jsxs(Ul,{children:[e.jsx("small",{children:E.asset_type==="renda_fixa"?"Aplicado":"Investido"}),e.jsx("strong",{children:Re(E.applied_amount??E.invested_amount)})]}),e.jsxs(Ul,{children:[e.jsx("small",{children:"Valor atual"}),e.jsx("strong",{children:Re(E.current_value)})]}),e.jsxs(Ul,{$accent:it?"negative":"result",children:[e.jsx("small",{children:"Resultado"}),e.jsx("strong",{children:Re(E.profit_loss)})]}),e.jsxs(Ul,{$accent:"income",children:[e.jsx("small",{children:E.asset_type==="renda_fixa"?"Rendimento líquido no mês projetado":"Por pagamento"}),e.jsx("strong",{children:Re(ct)})]})]}),e.jsx(X5,{children:e.jsxs("span",{children:[E.asset_type==="renda_fixa"?`${Re(E.applied_amount??E.invested_amount)} aplicado · ${Number(E.cdi_percent)||0}% do CDI · bruto ${Re(Me)} · IR ${Re(ht)} · líquido conforme ${Ur[0]?ao(Ur[0].month):"projeção"}`:`${Number(E.quantity)} cotas · ${ie?"••••••":Ig.format(Number(E.dividend_per_share)||0)} por cota`,E.notes?` · ${E.notes}`:""]})})]},String(E.id))})}):c?e.jsxs(Ge,{children:[e.jsx(Ki,{size:30}),e.jsx("h3",{children:"Nenhum ativo encontrado"}),e.jsx("p",{children:"Cadastre um ativo para projetar seus dividendos."}),e.jsxs(ue,{type:"button",$variant:"primary",onClick:qr,children:[e.jsx(gt,{}),"Novo ativo"]})]}):null,Wt&&Wt.total>0&&e.jsxs(uE,{children:[e.jsxs("span",{children:[Wt.total," ativos · página ",Wt.page," de ",Math.max(Wt.totalPages,1)]}),e.jsxs("div",{style:{display:"flex",gap:7},children:[e.jsx(ue,{type:"button",disabled:!Wt.hasPreviousPage||Pt,onClick:()=>z(E=>({...E,page:Math.max((E.page??1)-1,1)})),children:"Anterior"}),e.jsx(ue,{type:"button",disabled:!Wt.hasNextPage||Pt,onClick:()=>z(E=>({...E,page:(E.page??1)+1})),children:"Próxima"})]})]})]}),e.jsxs(B5,{children:[e.jsxs(Og,{children:[e.jsxs("div",{children:[e.jsxs(Fe,{children:[e.jsx(ic,{size:19}),"Projeção mensal"]}),e.jsx(Wi,{children:a?"Informe a taxa CDI anual e selecione um mês para consultar a projeção calculada pela API.":"Selecione um mês para ver a data e o valor de cada provento previsto."})]}),e.jsxs(mp,{children:[y," meses"]})]}),e.jsxs(q5,{children:[e.jsxs(Z,{htmlFor:"div-from",children:["A partir de",e.jsx("input",{id:"div-from",type:"month",value:oe,onChange:E=>S(E.target.value||qg())})]}),e.jsxs(Z,{htmlFor:"div-months",children:["Meses",e.jsx("select",{id:"div-months",value:y,onChange:E=>q(Number(E.target.value)),children:[6,12,24,36].map(E=>e.jsx("option",{value:E,children:E},E))})]}),a&&e.jsxs(Z,{htmlFor:"div-cdi-rate",children:["CDI anual (%)",e.jsx("input",{id:"div-cdi-rate",type:"text",inputMode:"decimal",value:de,onChange:E=>{be(E.target.value),ze(""),xe("")},"aria-describedby":"div-cdi-rate-hint",disabled:Q,required:!0})]})]}),a&&e.jsx(Wi,{id:"div-cdi-rate-hint",children:Q?"Buscando CDI anualizado atual no Banco Central...":le||(ke?`Taxa anualizada do Banco Central (SGS), referência ${ke}. Você pode editar para simular outros cenários.`:"Taxa anual para simulação manual (exemplo: 13,65%).")}),Ur.length?Ur.map(E=>{const ce=Number(E.total)||0;return e.jsxs(nE,{type:"button","aria-label":ie?`Ver detalhes dos proventos de ${ao(E.month)}`:`Ver detalhes dos proventos de ${ao(E.month)}, estimados em ${Hl(ce)} líquidos`,onClick:()=>ne(E),children:[e.jsxs("span",{children:[e.jsx("strong",{children:ao(E.month)}),e.jsx("span",{children:Re(ce)}),e.jsx(rs,{"aria-hidden":"true"})]}),e.jsx(dE,{"aria-hidden":"true",children:e.jsx("span",{style:{width:`${Math.min(ce/Gn*100,100)}%`}})}),E.items.length>0&&e.jsx("small",{children:E.items.map(Me=>Me.ticker).join(", ")}),a&&E.items.length>0&&e.jsxs("small",{children:["Bruto ",Re(E.gross_total)," · IR ",((Number(E.income_tax_rate)||0)*100).toLocaleString("pt-BR"),"% (",Re(E.tax_total),") · Líquido ",Re(E.net_total)]})]},E.month)}):e.jsx("p",{style:{margin:0,color:"var(--muted)",fontSize:12},children:"Cadastre ao menos um ativo para ver a projeção."})]})]}),e.jsx(ns,{open:F!==null,title:F?`Proventos de ${ao(F.month)}`:"Proventos previstos",icon:e.jsx(ic,{size:18}),onClose:()=>ne(null),children:F&&e.jsxs(aE,{children:[e.jsxs(iE,{children:[e.jsxs("div",{children:[e.jsx("small",{children:a?"Total líquido estimado no mês":"Total estimado no mês"}),e.jsx("strong",{children:Re(F.total)}),a&&e.jsxs("small",{style:{display:"block",marginTop:6,color:"var(--muted)"},children:["Bruto ",Re(F.gross_total)," · IR ",Re(F.tax_total)]})]}),e.jsxs(mp,{children:[F.items.length," ",F.items.length===1?"provento":"proventos"]})]}),e.jsx(Wi,{children:a?`IR estimado de ${((Number(F.income_tax_rate)||0)*100).toLocaleString("pt-BR")}% conforme o prazo do investimento até o pagamento; os valores podem variar.`:"Valores previstos; o pagamento efetivo pode variar."}),F.items.length?e.jsx(sE,{"aria-label":"Detalhes dos proventos previstos",children:F.items.map((E,ce)=>e.jsxs(oE,{children:[e.jsxs(lE,{children:[e.jsx("h3",{children:E.ticker}),e.jsxs("p",{children:[E.name||Wn(E.asset_type)," · ",vp(E.payment_date)]}),e.jsx("small",{children:E.asset_type==="renda_fixa"?`${Number(E.cdi_percent)||0}% do CDI${E.investment_date?` · aplicado desde ${vp(E.investment_date)}`:""}`:`${gE(E.quantity??0)} cotas × ${ie?"••••••":Ig.format(Number(E.dividend_per_share)||0)} por cota`}),a&&e.jsxs("small",{style:{display:"block",marginTop:5},children:["Bruto ",Re(E.gross_amount)," · IR ",((Number(E.income_tax_rate)||0)*100).toLocaleString("pt-BR"),"% (",Re(E.tax_amount),") · Líquido ",Re(E.net_amount??E.amount)]})]}),e.jsxs(cE,{children:[e.jsx("strong",{children:Re(E.amount)}),e.jsx("small",{children:a?"Valor líquido a receber":"Provento previsto"})]})]},`${String(E.holding_id)}-${E.payment_date}-${ce}`))}):e.jsx(Ge,{children:e.jsx("p",{children:"Nenhum provento detalhado para este mês."})})]})}),e.jsx(ns,{open:je,title:se?a?"Editar investimento":"Editar ativo":a?"Novo investimento":"Novo ativo",icon:se?e.jsx(rn,{size:18}):e.jsx(gt,{size:18}),busy:Vt,onClose:tr,children:e.jsxs(eE,{onSubmit:E=>{Un(E)},children:[e.jsx(rE,{children:a?"Informe o valor aplicado, o percentual do CDI e a data; a estimativa mensal usa a taxa CDI da projeção.":kt!=null&&kt.auto_quote?"Se deixar o preço atual vazio, a API busca a cotação automaticamente para este tipo.":"Informe o preço atual manualmente quando quiser acompanhar o valor da posição."}),e.jsxs(Z,{htmlFor:"div-ticker",children:["Ticker *",e.jsx("input",{id:"div-ticker",maxLength:40,value:ae.ticker,onChange:E=>M(ce=>({...ce,ticker:E.target.value.toUpperCase()})),placeholder:"Ex.: MXRF11",required:!0})]}),e.jsxs(Z,{htmlFor:"div-name",children:["Nome",e.jsx("input",{id:"div-name",maxLength:160,value:ae.name,onChange:E=>M(ce=>({...ce,name:E.target.value})),placeholder:"Ex.: Maxi Renda"})]}),!a&&e.jsxs(Z,{htmlFor:"div-type",children:["Tipo",e.jsx("select",{id:"div-type",value:ae.asset_type,onChange:E=>Fa(E.target.value),children:s.map(E=>e.jsx("option",{value:E.id,children:E.label},E.id))})]}),Pn&&e.jsxs(Z,{htmlFor:"div-segment",children:["Segmento (FII/Fiagro)",e.jsxs("select",{id:"div-segment",value:ae.fii_segment,onChange:E=>M(ce=>({...ce,fii_segment:E.target.value})),children:[e.jsx("option",{value:"",children:"Não informado"}),Object.keys(no).map(E=>e.jsx("option",{value:E,children:no[E]},E))]})]}),a?e.jsxs(e.Fragment,{children:[e.jsxs(Z,{htmlFor:"div-applied-amount",children:["Valor aplicado (R$) *",e.jsx("input",{id:"div-applied-amount",type:"text",inputMode:"numeric",autoComplete:"off",value:ae.applied_amount,onChange:E=>M(ce=>({...ce,applied_amount:Ma(E.target.value)})),placeholder:"R$ 10.000,00",required:!0})]}),e.jsxs(Z,{htmlFor:"div-cdi-percent",children:["Percentual do CDI (%) *",e.jsx("input",{id:"div-cdi-percent",type:"text",inputMode:"decimal",value:ae.cdi_percent,onChange:E=>M(ce=>({...ce,cdi_percent:E.target.value})),placeholder:"120",required:!0})]}),e.jsxs(Z,{htmlFor:"div-investment-date",children:["Data do investimento *",e.jsx("input",{id:"div-investment-date",type:"date",value:ae.investment_date,onChange:E=>M(ce=>({...ce,investment_date:E.target.value})),required:!0})]})]}):e.jsxs(e.Fragment,{children:[e.jsxs(Z,{htmlFor:"div-quantity",children:["Quantidade de cotas *",e.jsx("input",{id:"div-quantity",type:"number",min:0,step:"any",value:ae.quantity,onChange:E=>M(ce=>({...ce,quantity:E.target.value})),required:!0})]}),e.jsxs(Z,{htmlFor:"div-average",children:["Preço médio pago (R$)",e.jsx("input",{id:"div-average",type:"text",inputMode:"numeric",autoComplete:"off",value:ae.average_price,onChange:E=>M(ce=>({...ce,average_price:Ma(E.target.value)})),placeholder:"R$ 9,80"})]}),e.jsxs(Z,{htmlFor:"div-current",children:["Preço atual (R$)",e.jsx("input",{id:"div-current",type:"text",inputMode:"numeric",autoComplete:"off",value:ae.current_price,onChange:E=>M(ce=>({...ce,current_price:Ma(E.target.value)})),placeholder:kt!=null&&kt.auto_quote?"Vazio = cotação automática":"Opcional"})]}),e.jsxs(Z,{htmlFor:"div-per-share",children:["Provento por cota (R$)",e.jsx("input",{id:"div-per-share",type:"text",inputMode:"numeric",autoComplete:"off",value:ae.dividend_per_share,onChange:E=>M(ce=>({...ce,dividend_per_share:Ma(E.target.value)})),placeholder:"R$ 0,10"})]}),e.jsxs(Z,{htmlFor:"div-frequency",children:["Frequência",e.jsx("select",{id:"div-frequency",value:ae.frequency,onChange:E=>M(ce=>({...ce,frequency:E.target.value})),children:Object.keys(gp).map(E=>e.jsx("option",{value:E,children:gp[E]},E))})]}),J&&e.jsxs(Z,{htmlFor:"div-reference",children:["Mês de um pagamento",e.jsx("select",{id:"div-reference",value:ae.reference_month,onChange:E=>M(ce=>({...ce,reference_month:E.target.value})),children:B1.map((E,ce)=>e.jsx("option",{value:ce+1,children:E},E))})]})]}),e.jsxs(Z,{htmlFor:"div-day",children:["Dia do pagamento",e.jsx("input",{id:"div-day",type:"number",min:1,max:31,step:1,value:ae.payment_day,onChange:E=>M(ce=>({...ce,payment_day:E.target.value})),required:!0})]}),e.jsxs(Z,{htmlFor:"div-active",children:["Situação",e.jsxs("select",{id:"div-active",value:String(ae.is_active),onChange:E=>M(ce=>({...ce,is_active:E.target.value==="true"})),children:[e.jsx("option",{value:"true",children:"Ativo (entra na projeção)"}),e.jsx("option",{value:"false",children:"Inativo"})]})]}),e.jsxs(Z,{htmlFor:"div-notes",children:["Observações",e.jsx("textarea",{id:"div-notes",maxLength:2e3,value:ae.notes,onChange:E=>M(ce=>({...ce,notes:E.target.value}))})]}),e.jsxs(tE,{children:[e.jsxs(ue,{type:"button",onClick:tr,disabled:Vt,children:[e.jsx(pr,{}),"Cancelar"]}),e.jsxs(ue,{type:"submit",$variant:"primary",disabled:Vt,children:[Vt?e.jsx(Ze,{}):e.jsx(en,{}),se?"Salvar alterações":"Cadastrar"]})]})]})}),e.jsx(Tc,{open:pe!==null,title:"Excluir ativo?",description:pe?`${pe.ticker} será removido permanentemente.`:"",confirmLabel:"Excluir",busy:!1,onConfirm:()=>{Hn()},onCancel:()=>ot(null)})]})}const Ef=m.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 20px;
`,Tt=m(Ie)`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 14px;
  ${Fe} { margin: 0; }
`,qt=m.p`
  margin: 4px 0 0;
  color: var(--muted);
  font-size: 12px;
  line-height: 1.5;
`,yE=m.label`
  display: flex;
  align-items: center;
  gap: 8px;
  min-height: 44px;
  color: var(--text);
  font-size: 13px;
  font-weight: 600;
  input { width: 18px; height: 18px; }
`,wc=m.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
  @media (max-width: 1000px) { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  @media (max-width: 520px) { grid-template-columns: 1fr; }
`,jr=m.div`
  display: grid;
  gap: 4px;
  padding: 14px 16px;
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  background: var(--surface-raised);
  small { color: var(--muted); font-size: 10px; font-weight: 800; letter-spacing: .07em; text-transform: uppercase; }
  strong { color: ${({$tone:r})=>r==="good"?"var(--success)":r==="bad"?"var(--error)":"var(--text)"}; font-size: 20px; font-variant-numeric: tabular-nums; letter-spacing: -.03em; }
  span { color: var(--muted); font-size: 11px; line-height: 1.4; }
`,Gp=m.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  select { min-height: 36px; border: 1px solid var(--border); border-radius: var(--radius-md); padding: 4px 10px; color: var(--text); background: var(--surface); }
`,_c=m.div`
  overflow-x: auto;
  table { width: 100%; border-collapse: collapse; font-size: 12px; }
  th { padding: 8px 10px; color: var(--muted); font-size: 10px; letter-spacing: .06em; text-align: right; text-transform: uppercase; white-space: nowrap; }
  td { padding: 10px; border-top: 1px solid var(--border); color: var(--text); font-variant-numeric: tabular-nums; text-align: right; white-space: nowrap; }
  th:first-child, td:first-child { text-align: left; font-weight: 650; }
`,V1=m.span`
  padding: 3px 9px;
  border-radius: 999px;
  color: ${({$color:r})=>r};
  background: color-mix(in srgb, ${({$color:r})=>r} 14%, transparent);
  font-size: 11px;
  font-weight: 800;
`,Zr=m.p`
  margin: 0;
  color: var(--muted);
  font-size: 11px;
  line-height: 1.5;
`,$f=m.form`
  display: grid;
  grid-template-columns: repeat(${({$columns:r})=>r??4}, minmax(0, 1fr)) auto;
  gap: 12px;
  align-items: end;
  ${Z} { margin-bottom: 0; }
  @media (max-width: 1100px) { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  @media (max-width: 560px) { grid-template-columns: 1fr; }
`;function jE(r){if(r<=0)return 1;const a=10**Math.floor(Math.log10(r)),s=r/a;return(s<=1?1:s<=2?2:s<=2.5?2.5:s<=5?5:10)*a}function W1(){const r=x.useRef(null),[a,s]=x.useState(820);return x.useEffect(()=>{const l=r.current;if(!l)return;const c=()=>s(Math.max(280,Math.round(l.getBoundingClientRect().width)));c();const p=new ResizeObserver(c);return p.observe(l),()=>p.disconnect()},[]),[r,a]}const G1=m.div`
  position: relative;
  width: 100%;
  svg { display: block; width: 100%; height: auto; overflow: visible; }
  text { fill: var(--muted); font-size: 11px; font-variant-numeric: tabular-nums; }
`,bE=m.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 10px;
`,Vg=m.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  min-height: 30px;
  padding: 4px 10px;
  border: 1px solid var(--border);
  border-radius: 999px;
  color: ${({$off:r})=>r?"var(--muted)":"var(--text)"};
  background: ${({$off:r})=>r?"transparent":"var(--surface-raised)"};
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  opacity: ${({$off:r})=>r?.55:1};
  i { width: 10px; height: 10px; border-radius: 50%; background: ${({$color:r})=>r}; }
`,wE=m.div`
  position: absolute;
  top: 8px;
  z-index: 2;
  min-width: 190px;
  padding: 10px 12px;
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  background: var(--surface);
  box-shadow: var(--shadow-raised);
  pointer-events: none;
  font-size: 12px;
  strong { display: block; margin-bottom: 6px; color: var(--text); }
  div { display: flex; align-items: center; justify-content: space-between; gap: 12px; color: var(--muted); }
  div span:first-child { display: inline-flex; align-items: center; gap: 6px; }
  i { width: 8px; height: 8px; border-radius: 50%; }
  b { color: var(--text); font-variant-numeric: tabular-nums; }
`;function _E({labels:r,series:a,formatValue:s,formatAxis:l,referenceLine:c,ariaLabel:p}){const[h,f]=x.useState(new Set),[g,_]=x.useState(null),[b,k]=x.useState(null),[C,N]=W1(),O=N<520?280:320,$={top:14,right:14,bottom:30,left:N<520?54:66},V=a.filter(H=>!h.has(H.id)),R=N-$.left-$.right,j=O-$.top-$.bottom,T=r.length,F=a.map(H=>H.values[H.values.length-1]??1),ne=Math.max(...F)/Math.max(Math.min(...F),1)>6,X=b??ne,L=V.flatMap(H=>H.values);c&&L.push(c.value);const oe=Math.max(...L,1),S=Math.max(Math.min(...L),1),y=jE(oe*1.04),q=10**Math.floor(Math.log10(S)),de=y<=q*2?q*10:y,be=H=>$.left+(T>1?H/(T-1)*R:0),ke=H=>{if(!X)return $.top+j-H/y*j;const z=Math.log(Math.max(H,q)/q)/Math.log(de/q);return $.top+j-z*j},ze=x.useMemo(()=>{if(!X)return[0,1,2,3,4].map(re=>y/4*re);const z=Math.ceil(Math.log10(de/q))<=2?[1,2,5]:[1],w=[];for(let re=q;re<=de;re*=10)z.forEach(ae=>{re*ae<=de&&w.push(re*ae)});return w},[X,y,q,de]),Q=Math.ceil(T/Math.max(2,Math.floor(R/52)));function ge(H){f(z=>{const w=new Set(z);return w.has(H)?w.delete(H):w.size<a.length-1&&w.add(H),w})}function le(H){const z=H.currentTarget.getBoundingClientRect(),w=(H.clientX-z.left)/z.width*N,re=Math.round((w-$.left)/R*(T-1));_(Math.min(T-1,Math.max(0,re)))}const xe=g===null?0:be(g)/N*100;return e.jsxs("div",{children:[e.jsxs(bE,{children:[a.map(H=>e.jsxs(Vg,{type:"button",$color:H.color,$off:h.has(H.id),"aria-pressed":!h.has(H.id),onClick:()=>ge(H.id),children:[e.jsx("i",{}),H.label]},H.id)),e.jsxs(Vg,{type:"button",$color:"var(--primary)",$off:!X,"aria-pressed":X,onClick:()=>k(!X),title:"A escala logarítmica mostra variações proporcionais e evita que uma opção muito alta esmague as demais.",children:[e.jsx("i",{}),"Escala logarítmica"]})]}),e.jsxs(G1,{ref:C,onMouseMove:le,onMouseLeave:()=>_(null),children:[e.jsxs("svg",{viewBox:`0 0 ${N} ${O}`,role:"img","aria-label":p,children:[ze.map(H=>e.jsxs("g",{children:[e.jsx("line",{x1:$.left,x2:N-$.right,y1:ke(H),y2:ke(H),stroke:"var(--border)",strokeDasharray:H===0||X&&H===ze[0]?void 0:"3 4"}),e.jsx("text",{x:$.left-8,y:ke(H)+4,textAnchor:"end",children:l(H)})]},H)),r.map((H,z)=>z%Q===0||z===T-1?e.jsx("text",{x:be(z),y:O-8,textAnchor:"middle",children:H},H):null),c&&e.jsxs("g",{children:[e.jsx("line",{x1:$.left,x2:N-$.right,y1:ke(c.value),y2:ke(c.value),stroke:"var(--error)",strokeDasharray:"6 4",strokeWidth:1.5}),e.jsx("text",{x:$.left+6,y:ke(c.value)-6,style:{fill:"var(--error)",fontWeight:700},children:c.label})]}),g!==null&&e.jsx("line",{x1:be(g),x2:be(g),y1:$.top,y2:$.top+j,stroke:"var(--muted)",strokeOpacity:.5}),V.map(H=>e.jsxs("g",{children:[e.jsx("polyline",{fill:"none",stroke:H.color,strokeWidth:H.strong?3.2:2,strokeLinejoin:"round",strokeLinecap:"round",points:H.values.map((z,w)=>`${be(w)},${ke(z)}`).join(" ")}),g!==null&&H.values[g]!==void 0&&e.jsx("circle",{cx:be(g),cy:ke(H.values[g]),r:4.5,fill:H.color,stroke:"var(--surface)",strokeWidth:2})]},H.id))]}),g!==null&&e.jsxs(wE,{style:xe>60?{right:`${100-xe+2}%`}:{left:`${xe+2}%`},children:[e.jsx("strong",{children:r[g]}),[...V].sort((H,z)=>(z.values[g]??0)-(H.values[g]??0)).map(H=>e.jsxs("div",{children:[e.jsxs("span",{children:[e.jsx("i",{style:{background:H.color}}),H.label]}),e.jsx("b",{children:s(H.values[g]??0)})]},H.id))]})]})]})}const yp=240;function Q1({items:r,formatValue:a,ariaLabel:s}){const[l,c]=W1(),p=22,h=26,f=6,g=yp-p-h,_=Math.max(...r.map(j=>Math.max(j.value,0)),0),b=Math.max(...r.map(j=>Math.max(-j.value,0)),0),k=Math.max(_+b,1),C=p+g*(_/k),N=g/k,O=(c-f*2)/Math.max(r.length,1),$=Math.min(36,O*.62),V=O>=46,R=O>=26?1:2;return e.jsx(G1,{ref:l,children:e.jsxs("svg",{viewBox:`0 0 ${c} ${yp}`,role:"img","aria-label":s,children:[e.jsx("line",{x1:f,x2:c-f,y1:C,y2:C,stroke:"var(--border)"}),r.map((j,T)=>{const F=Math.abs(j.value)*N,ne=f+O*T+O/2,X=j.value>=0,L=X?C-F:C;return e.jsxs("g",{children:[e.jsx("rect",{x:ne-$/2,y:L,width:$,height:Math.max(F,1),rx:3,style:{fill:X?"var(--success)":"var(--error)"},children:e.jsx("title",{children:`${j.label}: ${a(j.value)}`})}),V&&e.jsx("text",{x:ne,y:X?L-5:L+F+12,textAnchor:"middle",children:a(j.value)}),T%R===0&&e.jsx("text",{x:ne,y:yp-8,textAnchor:"middle",children:j.label})]},j.id)})]})})}const K1=m.div`
  display: grid;
  gap: 12px;
`,kE=m.div`
  display: grid;
  gap: 5px;
  header { display: flex; align-items: baseline; justify-content: space-between; gap: 10px; font-size: 13px; }
  header span:first-child { color: var(--text); font-weight: 650; }
  header b { color: var(--text); font-variant-numeric: tabular-nums; }
  small { color: var(--muted); font-size: 11px; }
`,SE=m.div`
  position: relative;
  height: 12px;
  overflow: hidden;
  border-radius: 999px;
  background: var(--surface-raised);
`,Wg=m.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: ${({$width:r})=>Math.max(0,Math.min(100,r))}%;
  border-radius: 999px;
  background: ${({$color:r})=>r};
  opacity: ${({$opacity:r})=>r??1};
  transition: width .4s ease;
`;function oi({items:r,max:a}){const s=[...r].map(p=>p.value).sort((p,h)=>h-p),l=a===void 0&&s.length>2&&s[0]>s[1]*4,c=Math.max(a??(l?s[1]*1.25:s[0]),1);return e.jsx(K1,{children:r.map(p=>{const h=p.value>c;return e.jsxs(kE,{children:[e.jsxs("header",{children:[e.jsx("span",{children:p.label}),e.jsx("b",{children:p.valueLabel})]}),e.jsxs(SE,{role:"img","aria-label":`${p.label}: ${p.valueLabel}`,children:[e.jsx(Wg,{$width:p.value/c*100,$color:p.color??"var(--primary)"}),p.invested!==void 0&&e.jsx(Wg,{$width:p.invested/c*100,$color:"var(--text)",$opacity:.35})]}),(p.caption||h)&&e.jsxs("small",{children:[h?"Barra cortada: valor muito acima das demais. ":"",p.caption]})]},p.id)})})}const CE=m.div`
  display: grid;
  grid-template-columns: minmax(110px, 1.1fr) minmax(0, 2fr) 70px;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  @media (max-width: 520px) { grid-template-columns: 90px minmax(0, 1fr) 62px; }
  span:first-child { color: var(--text); font-weight: 600; }
  b { text-align: right; font-variant-numeric: tabular-nums; }
`,EE=m.div`
  position: relative;
  height: 14px;
  background: var(--surface-raised);
  border-radius: 4px;
  &::after { content: ''; position: absolute; top: -2px; bottom: -2px; left: var(--zero); width: 1px; background: var(--muted); opacity: .6; }
`,$E=m.div`
  position: absolute;
  top: 0;
  bottom: 0;
  border-radius: 3px;
  transition: width .4s ease;
`;function kc({items:r,formatValue:a}){const s=Math.max(...r.map(h=>Math.max(h.value,0)),0),l=Math.max(...r.map(h=>Math.max(-h.value,0)),0),c=Math.max(s+l,1),p=l/c*100;return e.jsx(K1,{children:r.map(h=>{const f=Math.abs(h.value)/c*100,g=h.value>=0;return e.jsxs(CE,{children:[e.jsx("span",{children:h.label}),e.jsx(EE,{style:{"--zero":`${p}%`},role:"img","aria-label":`${h.label}: ${a(h.value)}`,children:e.jsx($E,{style:{width:`${f}%`,left:g?`${p}%`:`${p-f}%`,background:g?"var(--success)":"var(--error)"}})}),e.jsx("b",{style:{color:g?"var(--success)":"var(--error)"},children:a(h.value)})]},h.id)})})}const RE=m.div`
  display: flex;
  height: 22px;
  overflow: hidden;
  border-radius: 999px;
  background: var(--surface-raised);
  div { display: grid; place-items: center; min-width: 0; color: #fff; font-size: 11px; font-weight: 800; transition: width .4s ease; }
`,PE=m.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 16px;
  margin: 12px 0 0;
  padding: 0;
  list-style: none;
  font-size: 12px;
  color: var(--text);
  li { display: inline-flex; align-items: center; gap: 6px; }
  i { width: 10px; height: 10px; border-radius: 50%; }
  b { font-variant-numeric: tabular-nums; }
`;function Y1({items:r,ariaLabel:a}){const s=r.reduce((l,c)=>l+c.value,0)||1;return e.jsxs("div",{children:[e.jsx(RE,{role:"img","aria-label":a,children:r.filter(l=>l.value>0).map(l=>e.jsx("div",{style:{width:`${l.value/s*100}%`,background:l.color},title:`${l.label}: ${l.valueLabel??l.value}`,children:l.value/s*100>=8?`${Math.round(l.value/s*100)}%`:""},l.id))}),e.jsx(PE,{children:r.map(l=>e.jsxs("li",{children:[e.jsx("i",{style:{background:l.color}}),l.label," ",e.jsx("b",{children:l.valueLabel??l.value})]},l.id))})]})}const zE=2004,NE=["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"],ME=[{id:"conservador",label:"Conservador"},{id:"moderado",label:"Moderado"},{id:"arrojado",label:"Arrojado"}],AE=m.ul`
  display: grid;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
  li { padding: 10px 14px; border-left: 4px solid var(--primary); border-radius: var(--radius-md); background: color-mix(in srgb, var(--primary) 6%, var(--surface-raised)); color: var(--text); font-size: 13px; line-height: 1.5; }
`,TE=m.div`
  display: inline-flex;
  padding: 3px;
  border: 1px solid var(--border);
  border-radius: 999px;
  background: var(--surface-raised);
`,Gg=m.button`
  min-height: 32px;
  padding: 4px 14px;
  border: 0;
  border-radius: 999px;
  color: ${({$active:r})=>r?"var(--primary-contrast)":"var(--text)"};
  background: ${({$active:r})=>r?"var(--primary)":"transparent"};
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
`,DE=m.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 14px;
`,FE=m.article`
  display: grid;
  gap: 12px;
  align-content: start;
  padding: 14px 16px;
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  background: var(--surface-raised);
  h3 { margin: 0; color: var(--text); font-size: 14px; }
  small { color: var(--muted); font-size: 11px; line-height: 1.5; }
`;function Gi(r){const[a,s]=r.split("-");return`${NE[Number(s)-1]??s}/${a}`}function LE(r){var a,s,l;return jt.isAxiosError(r)?((a=r.response)==null?void 0:a.status)===404?"A simulação histórica ainda não está disponível no servidor.":((l=(s=r.response)==null?void 0:s.data)==null?void 0:l.error)||"Não foi possível executar a simulação.":r instanceof Error?r.message:"Não foi possível executar a simulação."}function OE(){const r=Math.min(30,new Date().getFullYear()-zE),[a,s]=x.useState({valor:Ji(2e5),anos:String(Math.min(10,r)),aporte:"",ipca:!1,perfil:"moderado"}),[l,c]=x.useState(),[p,h]=x.useState(!0),[f,g]=x.useState(""),[_,b]=x.useState("without"),[k,C]=x.useState("carteira"),[N,O]=x.useState({valor:2e5,anos:Math.min(10,r),aporte_mensal:0,reajustar_aporte_ipca:!1,perfil:"moderado"});x.useEffect(()=>{let y=!0;return h(!0),g(""),R_(N).then(q=>{y&&(c(q),b(q.parameters.monthly_contribution>0?"with":"without"),C("carteira"))}).catch(q=>{y&&g(LE(q))}).finally(()=>{y&&h(!1)}),()=>{y=!1}},[N]);function $(y){y.preventDefault();const q=Aa(a.valor),de=Number(a.anos),be=Aa(a.aporte);if(!(q>0)){g("Informe um valor inicial maior que zero.");return}if(!Number.isInteger(de)||de<1||de>r){g(`Informe de 1 a ${r} anos.`);return}if(!(be>=0)){g("O aporte mensal não pode ser negativo.");return}O({valor:q,anos:de,aporte_mensal:be,reajustar_aporte_ipca:a.ipca,perfil:a.perfil})}const V=((l==null?void 0:l.parameters.monthly_contribution)??0)>0,R=V?_:"without",j=x.useMemo(()=>l?[l.portfolio,...l.assets]:[],[l]),T=x.useMemo(()=>j.map(y=>({id:y.id,label:y.name,color:hp(y.id),strong:y.kind==="carteira",values:[l.parameters.initial_amount,...y.yearly.map(q=>R==="with"?q.value_with_contributions:q.value_without_contributions)]})),[j,R,l]),F=x.useMemo(()=>[...j].sort((y,q)=>R==="with"?q.with_contributions.final_value-y.with_contributions.final_value:q.without_contributions.final_value-y.without_contributions.final_value).map(y=>{const q=y.without_contributions,de=y.with_contributions;return R==="with"?{id:y.id,label:y.name,color:hp(y.id),value:de.final_value,invested:de.total_invested,valueLabel:rt(de.final_value),caption:`Investido ${rt(de.total_invested)} · ganho ${rt(de.gain)} · ${Ye(de.annual_irr_pct)} a.a.`}:{id:y.id,label:y.name,color:hp(y.id),value:q.final_value,valueLabel:rt(q.final_value),caption:`${q.multiple.toLocaleString("pt-BR")}x · ${Ye(q.cagr_pct)} a.a. (${Ye(q.real_cagr_pct,!0)} acima da inflação)`}}),[j,R]);if(p&&!l)return e.jsxs(Ge,{children:[e.jsx(Ze,{}),e.jsx("p",{children:"Simulando décadas de mercado..."})]});const ne=j.find(y=>y.id===k)??j[0],X=(l==null?void 0:l.parameters.initial_amount)??0,L=l==null?void 0:l.portfolio,oe=L?R==="with"?L.with_contributions.final_value:L.without_contributions.final_value:0,S=L?L.preserved_purchasing_power:!0;return e.jsxs(Ef,{children:[e.jsxs(Tt,{children:[e.jsxs("div",{children:[e.jsxs(Fe,{children:[e.jsx(P2,{size:19}),"Simulação histórica"]}),e.jsx(qt,{children:"Veja quanto um valor investido no passado teria hoje em cada opção, com e sem aportes mensais."})]}),e.jsxs($f,{onSubmit:$,children:[e.jsxs(Z,{htmlFor:"bt-valor",children:["Valor inicial",e.jsx("input",{id:"bt-valor",type:"text",inputMode:"numeric",autoComplete:"off",placeholder:"R$ 0,00",value:a.valor,onChange:y=>s(q=>({...q,valor:Ma(y.target.value)}))})]}),e.jsxs(Z,{htmlFor:"bt-anos",children:["Quantos anos atrás",e.jsx("input",{id:"bt-anos",type:"number",min:"1",max:r,step:"1",value:a.anos,onChange:y=>s(q=>({...q,anos:y.target.value}))})]}),e.jsxs(Z,{htmlFor:"bt-aporte",children:["Aporte mensal",e.jsx("input",{id:"bt-aporte",type:"text",inputMode:"numeric",autoComplete:"off",placeholder:"R$ 0,00",value:a.aporte,onChange:y=>s(q=>({...q,aporte:Ma(y.target.value)}))})]}),e.jsxs(Z,{htmlFor:"bt-perfil",children:["Perfil da carteira",e.jsx("select",{id:"bt-perfil",value:a.perfil,onChange:y=>s(q=>({...q,perfil:y.target.value})),children:ME.map(y=>e.jsx("option",{value:y.id,children:y.label},y.id))})]}),e.jsx(ue,{type:"submit",$variant:"primary",disabled:p,children:p?"Simulando...":"Simular"}),e.jsxs(yE,{children:[e.jsx("input",{type:"checkbox",checked:a.ipca,onChange:y=>s(q=>({...q,ipca:y.target.checked}))}),"Corrigir o aporte pela inflação (IPCA)"]})]}),f&&e.jsx(Zr,{role:"alert",style:{color:"var(--error)",fontSize:12},children:f})]}),l&&L&&e.jsxs(e.Fragment,{children:[e.jsxs(Tt,{style:{opacity:p?.6:1},children:[e.jsxs(wc,{children:[e.jsxs(jr,{children:[e.jsx("small",{children:"Período"}),e.jsxs("strong",{children:[l.parameters.start_year," → hoje"]}),e.jsxs("span",{children:[Gi(l.parameters.period.start)," a ",Gi(l.parameters.period.end)," · ",l.parameters.period.years.toLocaleString("pt-BR")," anos"]})]}),e.jsxs(jr,{$tone:"bad",children:[e.jsx("small",{children:"Inflação (IPCA)"}),e.jsx("strong",{children:Ye(l.inflation.ipca_accumulated_pct)}),e.jsxs("span",{children:[Ye(l.inflation.ipca_average_annual_pct)," ao ano em média"]})]}),e.jsxs(jr,{children:[e.jsx("small",{children:"Para manter o poder de compra"}),e.jsx("strong",{children:rt(l.inflation.initial_amount_corrected_to_today)}),e.jsxs("span",{children:[rt(X)," de ",l.parameters.start_year," precisariam valer isso hoje"]})]}),e.jsxs(jr,{$tone:S?"good":"bad",children:[e.jsxs("small",{children:["Carteira ",l.parameters.profile]}),e.jsx("strong",{children:rt(oe)}),e.jsx("span",{children:R==="with"?`${rt(L.with_contributions.total_invested)} investidos`:`${L.without_contributions.multiple.toLocaleString("pt-BR")}x o valor inicial`})]})]}),e.jsx(AE,{children:l.highlights.map(y=>e.jsx("li",{children:y},y))})]}),e.jsxs(Tt,{style:{opacity:p?.6:1},children:[e.jsxs(Gp,{children:[e.jsxs("div",{children:[e.jsx(Fe,{children:"Evolução do patrimônio"}),e.jsx(qt,{children:"Passe o mouse sobre o gráfico para comparar. Clique na legenda para esconder ou mostrar uma opção."})]}),V&&e.jsxs(TE,{role:"group","aria-label":"Cenário",children:[e.jsx(Gg,{type:"button",$active:R==="without",onClick:()=>b("without"),children:"Sem aportes"}),e.jsx(Gg,{type:"button",$active:R==="with",onClick:()=>b("with"),children:"Com aportes"})]})]}),e.jsx(_E,{labels:["Início",...L.yearly.map(y=>y.partial?`${y.year}*`:String(y.year))],series:T,formatValue:rt,formatAxis:lc,referenceLine:R==="without"?{value:l.inflation.initial_amount_corrected_to_today,label:"Linha da inflação (IPCA)"}:void 0,ariaLabel:"Evolução do patrimônio ao longo dos anos"}),R==="without"&&e.jsx(Zr,{children:"Quem termina abaixo da linha vermelha perdeu poder de compra. * ano parcial."})]}),e.jsxs(Tt,{style:{opacity:p?.6:1},children:[e.jsxs("div",{children:[e.jsx(Fe,{children:"Quanto cada opção rendeu"}),e.jsx(qt,{children:R==="with"?"A parte escura da barra é o que você aportou; o restante é ganho.":`Resultado final de ${rt(X)} investidos em ${l.parameters.start_year}, do melhor para o pior.`})]}),e.jsx(oi,{items:F})]}),e.jsxs(Tt,{style:{opacity:p?.6:1},children:[e.jsxs(Gp,{children:[e.jsxs("div",{children:[e.jsx(Fe,{children:"Retorno ano a ano"}),e.jsx(qt,{children:"Verde: ano positivo. Vermelho: ano negativo."})]}),e.jsx("select",{"aria-label":"Opção",value:ne==null?void 0:ne.id,onChange:y=>C(y.target.value),children:j.map(y=>e.jsx("option",{value:y.id,children:y.name},y.id))})]}),ne&&e.jsx(Q1,{items:ne.yearly.map(y=>({id:String(y.year),label:`${String(y.year).slice(2)}${y.partial?"*":""}`,value:y.return_pct})),formatValue:y=>Ye(y,!0),ariaLabel:`Retorno anual de ${ne.name}`})]}),e.jsxs(Tt,{style:{opacity:p?.6:1},children:[e.jsxs("div",{children:[e.jsx(Fe,{children:"Pior queda de cada opção"}),e.jsx(qt,{children:"Maior perda do topo até o fundo. Quanto menor a barra vermelha, mais tranquilo foi o caminho."})]}),e.jsx(kc,{items:[...j].sort((y,q)=>y.without_contributions.max_drawdown_pct-q.without_contributions.max_drawdown_pct).map(y=>({id:y.id,label:y.name,value:y.without_contributions.max_drawdown_pct})),formatValue:y=>Ye(y)}),L.without_contributions.peak&&L.without_contributions.trough&&e.jsxs(Zr,{children:["A carteira caiu entre ",Gi(L.without_contributions.peak)," e ",Gi(L.without_contributions.trough),L.without_contributions.months_to_recover!==null?` e levou ${L.without_contributions.months_to_recover} meses para recuperar.`:" e ainda não recuperou o topo anterior."]})]}),l.crises.length>0&&e.jsxs(Tt,{style:{opacity:p?.6:1},children:[e.jsxs("div",{children:[e.jsx(Fe,{children:"Como cada opção se saiu nas crises"}),e.jsx(qt,{children:"Retorno durante cada período de estresse do mercado."})]}),e.jsx(DE,{children:l.crises.map(y=>e.jsxs(FE,{children:[e.jsxs("div",{children:[e.jsx("h3",{children:y.name}),e.jsxs("small",{children:[Gi(y.period.start)," a ",Gi(y.period.end)," · inflação ",Ye(y.inflation_pct)]})]}),e.jsx(kc,{items:y.results.map(q=>({id:q.id,label:q.name,value:q.return_pct})),formatValue:q=>Ye(q,!0)})]},y.id))})]}),e.jsxs(Tt,{style:{opacity:p?.6:1},children:[e.jsxs("div",{children:[e.jsx(Fe,{children:"Resumo por opção"}),e.jsx(qt,{children:"A nota considera quanto a opção rendeu acima da inflação."})]}),e.jsx(_c,{children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Opção"}),e.jsx("th",{children:"Nota"}),e.jsx("th",{children:"Ao ano"}),e.jsx("th",{children:"Acima da inflação"}),e.jsx("th",{children:"Oscilação"}),e.jsx("th",{children:"Anos negativos"})]})}),e.jsx("tbody",{children:j.map(y=>e.jsxs("tr",{children:[e.jsx("td",{children:y.name}),e.jsx("td",{children:e.jsx(V1,{$color:wr[y.rating].color,children:y.rating_label})}),e.jsx("td",{children:Ye(y.without_contributions.cagr_pct)}),e.jsx("td",{style:{color:y.without_contributions.real_cagr_pct>=0?"var(--success)":"var(--error)"},children:Ye(y.without_contributions.real_cagr_pct,!0)}),e.jsx("td",{children:Ye(y.without_contributions.annual_volatility_pct)}),e.jsx("td",{children:y.without_contributions.negative_years})]},y.id))})]})}),l.unavailable.length>0&&e.jsxs(Zr,{children:["Fora da comparação: ",l.unavailable.map(y=>`${y.id} (${y.reason})`).join("; "),"."]}),e.jsx(Zr,{children:l.disclaimer})]})]})]})}function Rf(r,a,s){var l,c,p;if(jt.isAxiosError(r)){const h=(c=(l=r.response)==null?void 0:l.data)==null?void 0:c.error;return((p=r.response)==null?void 0:p.status)===404&&(!h||/^rota n/i.test(h))?s:h||a}return r instanceof Error?r.message:a}const IE=/^[A-Z]{4}1[0-9]$/,Yr=new Intl.NumberFormat("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2}),BE=m.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
  li { padding: 8px 12px; border: 1px solid color-mix(in srgb, var(--success) 35%, var(--border)); border-radius: var(--radius-md); background: color-mix(in srgb, var(--success) 7%, var(--surface-raised)); color: var(--text); font-size: 12px; }
  small { display: block; color: var(--muted); font-size: 10px; font-weight: 800; letter-spacing: .06em; text-transform: uppercase; }
  strong { font-size: 14px; }
`,qE=m.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 12px;
`,UE=m.article`
  display: grid;
  gap: 8px;
  align-content: start;
  padding: 14px 16px;
  border: 1px solid color-mix(in srgb, ${({$color:r})=>r} 35%, var(--border));
  border-left: 5px solid ${({$color:r})=>r};
  border-radius: var(--radius-md);
  background: color-mix(in srgb, ${({$color:r})=>r} 6%, var(--surface-raised));
  header { display: flex; align-items: flex-start; justify-content: space-between; gap: 8px; }
  h3 { margin: 0; color: var(--text); font-size: 14px; }
  small { color: var(--muted); font-size: 11px; }
  ul { margin: 0; padding-left: 16px; color: var(--muted); font-size: 12px; line-height: 1.5; }
`;function fn(r,a){return r==null?"—":a(r)}function HE(r){return[...new Set(r.split(/[\s,;]+/).map(a=>a.trim().toUpperCase()).filter(Boolean))]}function Qg(r){return r.fund_age_years??r.listed_age_years}function VE(r){return Rf(r,"Não foi possível comparar os fundos.","A comparação de FIIs ainda não está disponível no servidor.")}function WE(){const[r,a]=x.useState({tickers:"",anos:"5",valor:Ji(1e5)}),[s,l]=x.useState({tickers:[],anos:5,valor:1e5}),[c,p]=x.useState(),[h,f]=x.useState(!0),[g,_]=x.useState(""),[b,k]=x.useState(""),[C,N]=x.useState("total");x.useEffect(()=>{let S=!0;return f(!0),_(""),P_(s).then(y=>{S&&(p(y),k(q=>{var de;return y.funds.some(be=>be.ticker===q)?q:((de=y.funds[0])==null?void 0:de.ticker)??""}))}).catch(y=>{S&&_(VE(y))}).finally(()=>{S&&f(!1)}),()=>{S=!1}},[s]);function O(S){S.preventDefault();const y=HE(r.tickers),q=Number(r.anos),de=Aa(r.valor),be=y.filter(ke=>!IE.test(ke));if(be.length){_(`Ticker inválido: ${be.join(", ")}. Use o formato HGLG11.`);return}if(y.length>12){_("Compare no máximo 12 fundos por vez.");return}if(!Number.isInteger(q)||q<1||q>10){_("Informe de 1 a 10 anos.");return}if(!(de>0)){_("Informe um valor maior que zero.");return}l({tickers:y,anos:q,valor:de})}const $=x.useMemo(()=>(c==null?void 0:c.funds)??[],[c]),V=$.find(S=>S.ticker===b)??$[0],R=x.useMemo(()=>$.map(S=>({id:S.ticker,label:S.ticker,value:S.score,color:wr[S.rating].color,valueLabel:`${S.score}/100 · ${S.rating_label}`,caption:`${S.segment??"Segmento não informado"} · ${Yr.format(Qg(S))} anos de história`})),[$]),j=x.useMemo(()=>{var ke;const S=$.filter(ze=>ze.simulation),y=(ke=S[0])==null?void 0:ke.simulation;if(!y)return[];const q=y.initial_amount,de=y.cdi_final_value,be=S.map(ze=>({id:ze.ticker,label:ze.ticker,value:ze.simulation.fii_final_value,color:de===null||ze.simulation.fii_final_value>=de?"var(--success)":"var(--warning)",valueLabel:rt(ze.simulation.fii_final_value),caption:`${Yr.format(ze.simulation.fii_final_value/q)}x o valor investido`}));return y.cdi_final_value!==null&&be.push({id:"__cdi",label:"CDI (referência)",value:y.cdi_final_value,color:"#64748b",valueLabel:rt(y.cdi_final_value),caption:"Renda fixa de referência no mesmo período"}),y.inflation_corrected_amount!==null&&be.push({id:"__ipca",label:"Só a inflação (IPCA)",value:y.inflation_corrected_amount,color:"#dc2626",valueLabel:rt(y.inflation_corrected_amount),caption:"Quanto o valor precisaria para manter o poder de compra"}),be.sort((ze,Q)=>Q.value-ze.value)},[$]),T=x.useMemo(()=>[...$].filter(S=>S.distributions.dividend_yield_12m_pct!==null).sort((S,y)=>(y.distributions.dividend_yield_12m_pct??0)-(S.distributions.dividend_yield_12m_pct??0)).map(S=>({id:S.ticker,label:S.ticker,value:S.distributions.dividend_yield_12m_pct??0,color:"var(--primary)",valueLabel:Ye(S.distributions.dividend_yield_12m_pct??0),caption:`Média de 5 anos: ${fn(S.distributions.average_dividend_yield_5y_pct,y=>Ye(y))} · pagou em ${fn(S.distributions.months_paid_pct,y=>`${Math.round(y)}%`)} dos meses · R$ ${Yr.format(S.distributions.last_12m_per_share)} por cota`})),[$]),F=x.useMemo(()=>[...$].sort((S,y)=>S.market.p_vp-y.market.p_vp).map(S=>({id:S.ticker,label:S.ticker,value:S.market.p_vp,color:S.market.p_vp<=1?"var(--success)":S.market.p_vp<=1.1?"var(--primary)":"var(--warning)",valueLabel:Yr.format(S.market.p_vp),caption:`Mediana de 5 anos: ${fn(S.market.p_vp_median_5y,y=>Yr.format(y))}${S.market.p_vp_vs_median_pct===null?"":` · ${S.market.p_vp_vs_median_pct<=0?"desconto":"prêmio"} de ${Ye(Math.abs(S.market.p_vp_vs_median_pct))} sobre a mediana`}`})),[$]),ne=x.useMemo(()=>[...$].filter(S=>{var y;return((y=S.common_window)==null?void 0:y.max_drawdown_pct)!==null&&S.common_window!==null}).sort((S,y)=>(S.common_window.max_drawdown_pct??0)-(y.common_window.max_drawdown_pct??0)).map(S=>({id:S.ticker,label:S.ticker,value:S.common_window.max_drawdown_pct??0})),[$]);if(h&&!c)return e.jsxs(Ge,{children:[e.jsx(Ze,{}),e.jsx("p",{children:"Analisando os fundos (a primeira consulta pode levar cerca de 10 segundos)..."})]});const X=c==null?void 0:c.comparison,L=c==null?void 0:c.leaders,oe=L?[{label:"Melhor retorno",ticker:L.best_total_return},{label:"Maior dividend yield",ticker:L.highest_dividend_yield},{label:"Menor queda",ticker:L.lowest_drawdown},{label:"Menor P/VP",ticker:L.cheapest_p_vp}].filter(S=>S.ticker):[];return e.jsxs(Ef,{children:[e.jsxs(Tt,{children:[e.jsxs("div",{children:[e.jsxs(Fe,{children:[e.jsx($2,{size:19}),"Comparar fundos imobiliários"]}),e.jsx(qt,{children:"Compare FIIs com o mesmo período, com proventos reinvestidos. Deixe os tickers em branco para comparar 8 fundos populares."})]}),e.jsxs($f,{onSubmit:O,$columns:3,children:[e.jsxs(Z,{htmlFor:"fii-tickers",children:["Tickers (até 12)",e.jsx("input",{id:"fii-tickers",type:"text",autoComplete:"off",placeholder:"HGLG11, KNRI11, MXRF11",value:r.tickers,onChange:S=>a(y=>({...y,tickers:S.target.value}))})]}),e.jsxs(Z,{htmlFor:"fii-anos",children:["Anos de comparação",e.jsx("input",{id:"fii-anos",type:"number",min:"1",max:"10",step:"1",value:r.anos,onChange:S=>a(y=>({...y,anos:S.target.value}))})]}),e.jsxs(Z,{htmlFor:"fii-valor",children:["Valor simulado",e.jsx("input",{id:"fii-valor",type:"text",inputMode:"numeric",autoComplete:"off",placeholder:"R$ 0,00",value:r.valor,onChange:S=>a(y=>({...y,valor:Ma(S.target.value)}))})]}),e.jsx(ue,{type:"submit",$variant:"primary",disabled:h,children:h?"Comparando...":"Comparar"})]}),g&&e.jsx(Zr,{role:"alert",style:{color:"var(--error)",fontSize:12},children:g})]}),c&&X&&V&&e.jsxs(e.Fragment,{children:[e.jsxs(Tt,{style:{opacity:h?.6:1},children:[e.jsxs(wc,{children:[e.jsxs(jr,{children:[e.jsx("small",{children:"Período comparado"}),e.jsxs("strong",{children:[Yr.format(X.window_years)," anos"]}),e.jsx("span",{children:X.limited_by_youngest_fund?`Limitado pelo fundo mais novo (${X.youngest}); pedido: ${X.requested_years} anos`:"Mesma janela para todos os fundos"})]}),e.jsxs(jr,{children:[e.jsx("small",{children:"Idade média"}),e.jsxs("strong",{children:[Yr.format(X.average_age_years)," anos"]}),e.jsx("span",{children:"Desde o início de cada fundo"})]}),e.jsxs(jr,{children:[e.jsx("small",{children:"Mais antigo"}),e.jsx("strong",{children:X.oldest??"—"}),e.jsx("span",{children:"Maior tempo de história"})]}),e.jsxs(jr,{children:[e.jsx("small",{children:"Mais novo"}),e.jsx("strong",{children:X.youngest??"—"}),e.jsx("span",{children:"Menor tempo de história"})]})]}),oe.length>0&&e.jsx(BE,{children:oe.map(S=>e.jsxs("li",{children:[e.jsx("small",{children:S.label}),e.jsx("strong",{children:S.ticker})]},S.label))})]}),e.jsxs(Tt,{style:{opacity:h?.6:1},children:[e.jsxs("div",{children:[e.jsx(Fe,{children:"Ranking por nota"}),e.jsx(qt,{children:"Nota de 0 a 100 que combina retorno acima do CDI, queda máxima, regularidade dos proventos, P/VP e tempo de história."})]}),e.jsx(oi,{items:R,max:100})]}),j.length>0&&e.jsxs(Tt,{style:{opacity:h?.6:1},children:[e.jsxs("div",{children:[e.jsx(Fe,{children:"Quanto você teria hoje"}),e.jsxs(qt,{children:[rt(s.valor)," investidos há ",Yr.format(X.window_years)," anos, com proventos reinvestidos e sem impostos. Verde: ganhou do CDI. Amarelo: perdeu para o CDI. A barra vermelha é só a inflação."]})]}),e.jsx(oi,{items:j})]}),e.jsxs(Tt,{style:{opacity:h?.6:1},children:[e.jsxs("div",{children:[e.jsx(Fe,{children:"Dividend yield (12 meses)"}),e.jsx(qt,{children:"Proventos pagos nos últimos 12 meses sobre o preço atual da cota."})]}),e.jsx(oi,{items:T})]}),e.jsxs(Tt,{style:{opacity:h?.6:1},children:[e.jsxs("div",{children:[e.jsx(Fe,{children:"P/VP: preço frente ao patrimônio"}),e.jsx(qt,{children:"Abaixo de 1 a cota custa menos que o patrimônio por cota (verde); bem acima de 1 indica prêmio (amarelo)."})]}),e.jsx(oi,{items:F})]}),ne.length>0&&e.jsxs(Tt,{style:{opacity:h?.6:1},children:[e.jsxs("div",{children:[e.jsx(Fe,{children:"Maior queda no período"}),e.jsx(qt,{children:"Pior perda do topo ao fundo, contando preço e proventos. Barra menor significa caminho mais tranquilo."})]}),e.jsx(kc,{items:ne,formatValue:S=>Ye(S)})]}),e.jsxs(Tt,{style:{opacity:h?.6:1},children:[e.jsxs(Gp,{children:[e.jsxs("div",{children:[e.jsx(Fe,{children:"Histórico ano a ano"}),e.jsx(qt,{children:"Verde: ano positivo. Vermelho: ano negativo. * ano parcial."})]}),e.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:[e.jsx("select",{"aria-label":"Fundo",value:V.ticker,onChange:S=>k(S.target.value),children:$.map(S=>e.jsx("option",{value:S.ticker,children:S.ticker},S.ticker))}),e.jsxs("select",{"aria-label":"Métrica",value:C,onChange:S=>N(S.target.value),children:[e.jsx("option",{value:"total",children:"Retorno total"}),e.jsx("option",{value:"yield",children:"Dividend yield"})]})]})]}),e.jsx(Q1,{items:V.yearly_history.map(S=>({id:String(S.year),label:`${String(S.year).slice(2)}${S.partial?"*":""}`,value:(C==="total"?S.total_return_pct:S.dividend_yield_on_start_price_pct)??0})),formatValue:S=>Ye(S,C==="total"),ariaLabel:`${C==="total"?"Retorno total":"Dividend yield"} anual de ${V.ticker}`})]}),e.jsxs(Tt,{style:{opacity:h?.6:1},children:[e.jsxs("div",{children:[e.jsx(Fe,{children:"Comparativo detalhado"}),e.jsx(qt,{children:"Rentabilidade, risco, idade, patrimônio e proventos calculados no período. A vacância não está disponível na base padronizada consultada e não entra na nota."})]}),e.jsx(_c,{children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Fundo"}),e.jsx("th",{children:"Nota"}),e.jsx("th",{children:"Segmento"}),e.jsx("th",{children:"Idade"}),e.jsx("th",{children:"Yield 12m"}),e.jsx("th",{children:"P/VP"}),e.jsx("th",{children:"Ao ano"}),e.jsx("th",{children:"Vs. CDI"}),e.jsx("th",{children:"Oscilação"}),e.jsx("th",{children:"Queda máx."}),e.jsx("th",{children:"Meses pagos"}),e.jsx("th",{children:"Variação proventos"}),e.jsx("th",{children:"Patrimônio"}),e.jsx("th",{children:"Cotistas"})]})}),e.jsx("tbody",{children:$.map(S=>{const y=S.common_window;return e.jsxs("tr",{children:[e.jsx("td",{title:S.name,children:S.ticker}),e.jsx("td",{children:e.jsx(as,{label:`${S.score} · ${S.rating_label}`,color:wr[S.rating].color,details:[...S.reasons,`Valor patrimonial por cota: ${rt(S.market.vp_per_share)}.`,`P/VP atual: ${Yr.format(S.market.p_vp)}.`,`Patrimônio líquido atual: ${S.equity.net_assets===null?"indisponível":lc(S.equity.net_assets)}.`,"Vacância: não disponível nos dados padronizados consultados; não foi estimada nem pontuada."]})}),e.jsx("td",{children:S.segment??"—"}),e.jsxs("td",{children:[Yr.format(Qg(S))," anos"]}),e.jsx("td",{children:fn(S.distributions.dividend_yield_12m_pct,q=>Ye(q))}),e.jsx("td",{children:Yr.format(S.market.p_vp)}),e.jsx("td",{children:fn(y==null?void 0:y.total_cagr_pct,q=>Ye(q))}),e.jsx("td",{style:{color:((y==null?void 0:y.excess_over_cdi_pp)??0)>=0?"var(--success)":"var(--error)"},children:fn(y==null?void 0:y.excess_over_cdi_pp,q=>`${q>0?"+":""}${Yr.format(q)} p.p.`)}),e.jsx("td",{children:fn(y==null?void 0:y.annual_volatility_pct,q=>Ye(q))}),e.jsx("td",{children:fn(y==null?void 0:y.max_drawdown_pct,q=>Ye(q))}),e.jsx("td",{children:fn(S.distributions.months_paid_pct,q=>`${Math.round(q)}%`)}),e.jsx("td",{children:fn(S.distributions.variation_coefficient_24m,q=>Ye(q*100))}),e.jsx("td",{children:fn(S.equity.net_assets,q=>lc(q))}),e.jsx("td",{children:fn(S.equity.holders,q=>q.toLocaleString("pt-BR"))})]},S.ticker)})})]})})]}),e.jsxs(Tt,{style:{opacity:h?.6:1},children:[e.jsxs("div",{children:[e.jsx(Fe,{children:"Por que cada nota"}),e.jsx(qt,{children:"Nota baseada em retorno total contra CDI (até 25 pontos), queda máxima (10), volatilidade (5), regularidade dos pagamentos (até ±8), variação dos proventos em 24 meses (±4), crescimento dos proventos em 3 anos (até +6), P/VP (até 0,90: +6; até 1,05: +3; acima de 1,15: -6), idade (menos de 3 anos: -6; 5 anos ou mais: +3; 10 anos ou mais: +6) e patrimônio líquido (de -8 a +5: abaixo de R$ 100 mi = -8; R$ 100–300 mi = -3; R$ 300 mi a menos de R$ 1 bi = +2; R$ 1 bi ou mais = +5). Vacância não está disponível na base padronizada consultada e não é pontuada."})]}),e.jsx(qE,{children:$.map(S=>e.jsxs(UE,{$color:wr[S.rating].color,children:[e.jsxs("header",{children:[e.jsxs("div",{children:[e.jsx("h3",{children:S.ticker}),e.jsx("small",{children:S.name})]}),e.jsx(as,{label:`${S.score} · ${S.rating_label}`,color:wr[S.rating].color,details:[...S.reasons,`Valor patrimonial por cota: ${rt(S.market.vp_per_share)}.`,`P/VP atual: ${Yr.format(S.market.p_vp)}.`,`Patrimônio líquido atual: ${S.equity.net_assets===null?"indisponível":lc(S.equity.net_assets)}.`,"Vacância: não disponível nos dados padronizados consultados; não foi estimada nem pontuada."]})]}),e.jsx("ul",{children:S.reasons.map(y=>e.jsx("li",{children:y},y))})]},S.ticker))}),c.not_found.length>0&&e.jsxs(Zr,{children:["Não analisados: ",c.not_found.map(S=>`${S.ticker} (${S.reason})`).join("; "),"."]}),e.jsx(Zr,{children:c.disclaimer})]})]})]})}const GE=[{id:"conservador",label:"Conservador"},{id:"moderado",label:"Moderado"},{id:"arrojado",label:"Arrojado"}],Qp={vender:{label:"Vender",color:"var(--error)"},reduzir:{label:"Reduzir 50%",color:"var(--warning)"},manter:{label:"Manter",color:"var(--success)"},sem_dados:{label:"Sem dados",color:"var(--muted)"}},Kg={renda_fixa:{label:"Renda fixa",color:"#2563eb"},fiis:{label:"FIIs",color:"#d97706"},acoes:{label:"Ações",color:"#16a34a"},outros:{label:"Outros",color:"#8b5cf6"}},Yg={cdb:"CDB",lci_lca:"LCI/LCA",tesouro_selic:"Tesouro Selic"},oa=new Intl.NumberFormat("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2}),QE=m.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
  gap: 12px;
`,KE=m.article`
  display: grid;
  gap: 10px;
  align-content: start;
  padding: 14px 16px;
  border: 1px solid color-mix(in srgb, ${({$color:r})=>r} 35%, var(--border));
  border-left: 5px solid ${({$color:r})=>r};
  border-radius: var(--radius-md);
  background: color-mix(in srgb, ${({$color:r})=>r} 6%, var(--surface-raised));
  header { display: flex; align-items: flex-start; justify-content: space-between; gap: 8px; }
  h3 { margin: 0; color: var(--text); font-size: 15px; }
  small { color: var(--muted); font-size: 11px; }
  dl { display: grid; gap: 5px; margin: 0; }
  dl > div { display: flex; justify-content: space-between; gap: 8px; font-size: 12px; }
  dt { color: var(--muted); }
  dd { margin: 0; color: var(--text); font-variant-numeric: tabular-nums; font-weight: 650; text-align: right; }
  ul { margin: 0; padding-left: 16px; color: var(--muted); font-size: 12px; line-height: 1.5; }
`,YE=m.div`
  display: grid;
  gap: 4px;
  font-size: 11px;
  color: var(--muted);
  div { height: 6px; overflow: hidden; border-radius: 999px; background: var(--border); }
  div::after { content: ''; display: block; width: ${({$value:r})=>Math.min(100,Math.max(0,r))}%; height: 100%; background: ${({$color:r})=>r}; }
`,JE=m.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
`;function XE(r){return Rf(r,"Não foi possível analisar a carteira.","A análise de carteira ainda não está disponível no servidor.")}function Jg(r){return r%12===0?r===12?"1 ano":`${r/12} anos`:`${r} meses`}function ZE({position:r,bestRate:a}){const s=Qp[r.recommendation],l=r.quality_score===null?void 0:p1(r.quality_score),c=l?Cf("fiis",l,"fii_fundamentals"):void 0,p=r.dividend_yield_12m_pct===null?null:r.dividend_yield_12m_pct-a;return e.jsxs(KE,{$color:s.color,children:[e.jsxs("header",{children:[e.jsxs("div",{children:[e.jsx("h3",{children:r.ticker}),r.name&&e.jsx("small",{children:r.name})]}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"flex-end",gap:6},children:[e.jsx(V1,{$color:s.color,children:s.label}),c&&e.jsx(as,{label:c.label,color:c.color,details:[`Nota ${r.quality_score}/100 · classificação: ${l?wr[l].label:"indisponível"}.`,...r.quality_reasons??["Fatores detalhados não disponíveis."],`Patrimônio líquido: ${r.net_assets==null?"indisponível":rt(r.net_assets)}.`,`Valor patrimonial por cota: ${r.vp_per_share==null?"indisponível":rt(r.vp_per_share)}.`,"Vacância: não disponível nos dados padronizados consultados; não foi estimada nem pontuada."]})]})]}),r.sell_score!==null&&e.jsxs(YE,{$value:r.sell_score,$color:s.color,children:[e.jsxs("span",{children:["Nota de venda ",r.sell_score,"/100 (quanto maior, mais motivos para vender)"]}),e.jsx("div",{})]}),e.jsxs("dl",{children:[e.jsxs("div",{children:[e.jsx("dt",{children:"Valor na carteira"}),e.jsxs("dd",{children:[rt(r.market_value)," (",Ye(r.weight_pct),")"]})]}),e.jsxs("div",{children:[e.jsx("dt",{children:"Dividend yield 12m"}),e.jsxs("dd",{children:[r.dividend_yield_12m_pct===null?"—":Ye(r.dividend_yield_12m_pct),p!==null&&e.jsxs("small",{style:{color:p>=0?"var(--success)":"var(--error)"},children:[" (",p>=0?"+":"",oa.format(p)," p.p. vs renda fixa)"]})]})]}),r.p_vp!==void 0&&e.jsxs("div",{children:[e.jsx("dt",{children:"P/VP"}),e.jsx("dd",{children:oa.format(r.p_vp)})]}),r.quality_score!==null&&e.jsxs("div",{children:[e.jsx("dt",{children:"Indicadores do FII"}),e.jsxs("dd",{children:[r.quality_score,"/100 · ",l?wr[l].label:r.quality_rating]})]}),r.fund_age_years!=null&&e.jsxs("div",{children:[e.jsx("dt",{children:"Idade do fundo"}),e.jsxs("dd",{children:[oa.format(r.fund_age_years)," anos"]})]}),r.net_assets!=null&&e.jsxs("div",{children:[e.jsx("dt",{children:"Patrimônio líquido"}),e.jsx("dd",{children:rt(r.net_assets)})]}),r.vp_per_share!=null&&e.jsxs("div",{children:[e.jsx("dt",{children:"Valor patrimonial por cota"}),e.jsx("dd",{children:rt(r.vp_per_share)})]}),r.months_paid_pct!=null&&e.jsxs("div",{children:[e.jsx("dt",{children:"Meses com proventos"}),e.jsx("dd",{children:Ye(r.months_paid_pct)})]}),r.variation_coefficient_24m!=null&&e.jsxs("div",{children:[e.jsx("dt",{children:"Variação dos proventos (24m)"}),e.jsx("dd",{children:Ye(r.variation_coefficient_24m*100)})]}),r.excess_over_cdi_pp!=null&&e.jsxs("div",{children:[e.jsx("dt",{children:"Retorno vs. CDI"}),e.jsxs("dd",{children:[r.excess_over_cdi_pp>0?"+":"",oa.format(r.excess_over_cdi_pp)," p.p."]})]}),r.annual_volatility_pct!=null&&e.jsxs("div",{children:[e.jsx("dt",{children:"Volatilidade anual"}),e.jsx("dd",{children:Ye(r.annual_volatility_pct)})]}),r.max_drawdown_pct!=null&&e.jsxs("div",{children:[e.jsx("dt",{children:"Queda máxima histórica"}),e.jsx("dd",{children:Ye(r.max_drawdown_pct)})]}),e.jsxs("div",{children:[e.jsx("dt",{children:"Vacância"}),e.jsx("dd",{children:"Sem dado padronizado"})]}),e.jsxs("div",{children:[e.jsx("dt",{children:"Ganho ou perda"}),e.jsx("dd",{style:{color:r.gain===null?void 0:r.gain>=0?"var(--success)":"var(--error)"},children:r.gain===null?"preço médio não informado":rt(r.gain)})]}),e.jsxs("div",{children:[e.jsx("dt",{children:"Imposto se vender tudo"}),e.jsx("dd",{children:r.cost_basis_missing?"—":rt(r.estimated_sale_tax)})]})]}),r.quality_reasons&&r.quality_reasons.length>0&&e.jsx("ul",{children:r.quality_reasons.map((h,f)=>e.jsx("li",{children:h},`quality-${f}`))}),e.jsx("ul",{children:r.reasons.map((h,f)=>e.jsx("li",{children:h},`recommendation-${f}`))})]})}function e$(){var S;const[r,a]=x.useState({perfil:"moderado",meta:"",prazo:"24",cdb:"100",lci:"90",anos:"5"}),[s,l]=x.useState({perfil:"moderado",anos:5,prazo_meses:24,cdi_percent:100,lci_percent:90}),[c,p]=x.useState(),[h,f]=x.useState(!0),[g,_]=x.useState(""),[b,k]=x.useState(),[C,N]=x.useState(!1),[O,$]=x.useState("");x.useEffect(()=>{let y=!0;return f(!0),_(""),k(void 0),$(""),m1(s).then(q=>{y&&p(q)}).catch(q=>{y&&(_(XE(q)),p(void 0))}).finally(()=>{y&&f(!1)}),()=>{y=!1}},[s]);function V(y){y.preventDefault();const q=Number(r.anos),de=Number(r.prazo),be=Number(r.cdb),ke=Number(r.lci),ze=r.meta.trim()===""?void 0:Number(r.meta);if(!Number.isInteger(q)||q<1||q>10){_("Informe de 1 a 10 anos de análise.");return}if(!Number.isInteger(de)||de<1||de>120){_("O prazo deve ficar entre 1 e 120 meses.");return}if(!(be>=50&&be<=200)){_("O CDB deve render de 50% a 200% do CDI.");return}if(!(ke>=50&&ke<=150)){_("A LCI/LCA deve render de 50% a 150% do CDI.");return}if(ze!==void 0&&!(ze>=0&&ze<=100)){_("A meta de renda fixa deve ficar entre 0% e 100%.");return}l({perfil:r.perfil,anos:q,prazo_meses:de,cdi_percent:be,lci_percent:ke,meta_renda_fixa:ze})}async function R(){if(c!=null&&c.sell_plan.sales.length){N(!0),$("");try{k(await z_(s,c.sell_plan.sales.map(y=>({ticker:y.ticker,sell_pct:y.sell_pct}))))}catch(y){$(Rf(y,"Não foi possível simular a troca.","A simulação de troca ainda não está disponível no servidor."))}finally{N(!1)}}}const j=c==null?void 0:c.fixed_income.products.find(y=>y.id===c.fixed_income.best_net_option),T=(j==null?void 0:j.net_annual_pct)??0,F=x.useMemo(()=>Object.entries((c==null?void 0:c.portfolio.allocation_pct)??{}).filter(([,y])=>y>0).map(([y,q])=>{var de,be;return{id:y,label:((de=Kg[y])==null?void 0:de.label)??y,value:q,valueLabel:Ye(q),color:((be=Kg[y])==null?void 0:be.color)??"var(--primary)"}}),[c]),ne=x.useMemo(()=>{if(!c)return[];const y=c.positions.filter(q=>q.dividend_yield_12m_pct!==null).map(q=>({id:q.ticker,label:q.ticker,value:q.dividend_yield_12m_pct??0,color:Qp[q.recommendation].color,valueLabel:Ye(q.dividend_yield_12m_pct??0),caption:Qp[q.recommendation].label}));return j&&y.push({id:"__rf",label:`Melhor renda fixa: ${j.name}`,value:j.net_annual_pct,color:"#2563eb",valueLabel:Ye(j.net_annual_pct),caption:"Rendimento líquido de imposto"}),y.sort((q,de)=>de.value-q.value)},[c,j]),X=x.useMemo(()=>((c==null?void 0:c.fixed_income.products)??[]).map(y=>({id:y.id,label:y.name,value:y.net_annual_pct,color:y.id===(c==null?void 0:c.fixed_income.best_net_option)?"var(--success)":"#2563eb",valueLabel:`${Ye(y.net_annual_pct)} ao ano`,caption:`Bruto ${Ye(y.gross_annual_pct)} · IR ${Ye(y.income_tax_pct)} · ${y.note}`})),[c]);if(h&&!c&&!g)return e.jsxs(Ge,{children:[e.jsx(Ze,{}),e.jsx("p",{children:"Analisando sua carteira (a primeira consulta pode levar cerca de 10 segundos)..."})]});const L=c==null?void 0:c.sell_plan,oe=L==null?void 0:L.totals;return e.jsxs(Ef,{children:[e.jsxs(Tt,{children:[e.jsxs("div",{children:[e.jsxs(Fe,{children:[e.jsx(di,{size:19}),"Minha carteira de FIIs"]}),e.jsx(qt,{children:"Analisa os FIIs que você cadastrou em Dividendos e mostra o que faz sentido vender para migrar para a renda fixa. Informe uma meta de renda fixa para o plano vender até chegar nela."})]}),e.jsxs($f,{onSubmit:V,$columns:3,children:[e.jsxs(Z,{htmlFor:"pf-perfil",children:["Perfil de risco",e.jsx("select",{id:"pf-perfil",value:r.perfil,onChange:y=>a(q=>({...q,perfil:y.target.value})),children:GE.map(y=>e.jsx("option",{value:y.id,children:y.label},y.id))})]}),e.jsxs(Z,{htmlFor:"pf-meta",children:["Meta de renda fixa (%)",e.jsx("input",{id:"pf-meta",type:"number",min:"0",max:"100",step:"1",placeholder:"Padrão do perfil",value:r.meta,onChange:y=>a(q=>({...q,meta:y.target.value}))})]}),e.jsxs(Z,{htmlFor:"pf-prazo",children:["Prazo da renda fixa (meses)",e.jsx("input",{id:"pf-prazo",type:"number",min:"1",max:"120",step:"1",value:r.prazo,onChange:y=>a(q=>({...q,prazo:y.target.value}))})]}),e.jsxs(Z,{htmlFor:"pf-cdb",children:["CDB (% do CDI)",e.jsx("input",{id:"pf-cdb",type:"number",min:"50",max:"200",step:"1",value:r.cdb,onChange:y=>a(q=>({...q,cdb:y.target.value}))})]}),e.jsxs(Z,{htmlFor:"pf-lci",children:["LCI/LCA (% do CDI)",e.jsx("input",{id:"pf-lci",type:"number",min:"50",max:"150",step:"1",value:r.lci,onChange:y=>a(q=>({...q,lci:y.target.value}))})]}),e.jsxs(Z,{htmlFor:"pf-anos",children:["Anos de análise dos FIIs",e.jsx("input",{id:"pf-anos",type:"number",min:"1",max:"10",step:"1",value:r.anos,onChange:y=>a(q=>({...q,anos:y.target.value}))})]}),e.jsx(ue,{type:"submit",$variant:"primary",disabled:h,children:h?"Analisando...":"Analisar"})]}),g&&e.jsx(Zr,{role:"alert",style:{color:"var(--error)",fontSize:12},children:g})]}),c&&L&&oe&&e.jsxs(e.Fragment,{children:[e.jsxs(Tt,{style:{opacity:h?.6:1},children:[e.jsxs(wc,{children:[e.jsxs(jr,{children:[e.jsx("small",{children:"Valor da carteira"}),e.jsx("strong",{children:rt(c.portfolio.total_value)}),e.jsxs("span",{children:[c.portfolio.fiis_count," FIIs analisados"]})]}),e.jsxs(jr,{$tone:(c.portfolio.fixed_income_gap_pct??0)>0?"bad":"good",children:[e.jsx("small",{children:"Renda fixa na carteira"}),e.jsx("strong",{children:Ye(c.portfolio.allocation_pct.renda_fixa??0)}),e.jsxs("span",{children:["Meta: ",Ye(c.portfolio.fixed_income_target_pct),c.portfolio.fixed_income_gap_pct!==null&&c.portfolio.fixed_income_gap_pct>0?` · faltam ${oa.format(c.portfolio.fixed_income_gap_pct)} p.p.`:" · meta atingida"]})]}),e.jsxs(jr,{children:[e.jsx("small",{children:"Melhor renda fixa hoje"}),e.jsx("strong",{children:j?Ye(j.net_annual_pct):"—"}),e.jsxs("span",{children:[j==null?void 0:j.name," · líquido ao ano"]})]}),e.jsxs(jr,{children:[e.jsx("small",{children:"CDI / Selic / IPCA 12m"}),e.jsxs("strong",{children:[oa.format(c.fixed_income.cdi),"%"]}),e.jsxs("span",{children:["Selic ",oa.format(c.fixed_income.selic),"% · IPCA ",oa.format(c.fixed_income.ipca_12m),"%"]})]})]}),e.jsx(Y1,{items:F,ariaLabel:"Alocação atual da carteira"})]}),e.jsxs(Tt,{style:{opacity:h?.6:1},children:[e.jsxs("div",{children:[e.jsx(Fe,{children:"Seus FIIs contra a renda fixa"}),e.jsx(qt,{children:"Dividend yield dos últimos 12 meses de cada fundo comparado ao rendimento líquido da melhor renda fixa. Verde: manter. Amarelo: reduzir. Vermelho: vender."})]}),e.jsx(oi,{items:ne})]}),e.jsxs(Tt,{style:{opacity:h?.6:1},children:[e.jsxs("div",{children:[e.jsx(Fe,{children:"Recomendação por fundo"}),e.jsx(qt,{children:"Ordenado do que tem mais motivos para sair ao que tem menos."})]}),e.jsx(QE,{children:c.positions.map(y=>e.jsx(ZE,{position:y,bestRate:T},y.ticker))})]}),e.jsxs(Tt,{style:{opacity:h?.6:1},children:[e.jsxs("div",{children:[e.jsx(Fe,{children:"Plano de venda"}),e.jsxs(qt,{children:[L.message,L.mode==="meta_renda_fixa"?' Fundos marcados como "mantido" só entram porque a meta exige.':""]})]}),L.sales.length>0&&e.jsxs(e.Fragment,{children:[e.jsxs(wc,{children:[e.jsxs(jr,{children:[e.jsx("small",{children:"Você recebe (líquido)"}),e.jsx("strong",{children:rt(oe.net_proceeds)}),e.jsxs("span",{children:["Bruto ",rt(oe.gross_proceeds)," − imposto ",rt(oe.estimated_tax)]})]}),e.jsxs(jr,{children:[e.jsx("small",{children:"Renda anual que deixa de receber"}),e.jsx("strong",{children:rt(oe.fii_income_lost_per_year)}),e.jsx("span",{children:"Proventos dos FIIs vendidos"})]}),e.jsxs(jr,{$tone:"good",children:[e.jsx("small",{children:"Renda anual na renda fixa"}),e.jsx("strong",{children:rt(oe.fixed_income_income_per_year)}),e.jsx("span",{children:"Líquida de imposto"})]}),e.jsxs(jr,{$tone:oe.income_change_per_year>=0?"good":"bad",children:[e.jsx("small",{children:"Variação da renda por ano"}),e.jsxs("strong",{children:[oe.income_change_per_year>0?"+":"",rt(oe.income_change_per_year)]}),e.jsxs("span",{children:[oe.tax_payback_months!==null?`O imposto se paga em ${oa.format(oe.tax_payback_months)} meses. `:"",oe.fixed_income_share_after_pct!==null?`Renda fixa passa a ${Ye(oe.fixed_income_share_after_pct)} da carteira.`:""]})]})]}),e.jsx(_c,{children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Fundo"}),e.jsx("th",{children:"Vender"}),e.jsx("th",{children:"Bruto"}),e.jsx("th",{children:"Imposto"}),e.jsx("th",{children:"Líquido"}),e.jsx("th",{children:"Renda perdida/ano"})]})}),e.jsx("tbody",{children:L.sales.map(y=>e.jsxs("tr",{children:[e.jsxs("td",{children:[y.ticker,y.forced?" (mantido, entra pela meta)":""]}),e.jsx("td",{children:Ye(y.sell_pct)}),e.jsx("td",{children:rt(y.gross)}),e.jsx("td",{children:rt(y.tax)}),e.jsx("td",{children:rt(y.net)}),e.jsx("td",{children:rt(y.income_lost)})]},y.ticker))})]})}),e.jsxs(JE,{children:[e.jsx(ue,{type:"button",$variant:"primary",onClick:()=>void R(),disabled:C,children:C?"Simulando...":"Simular a troca (1, 2 e 5 anos)"}),O&&e.jsx(Zr,{role:"alert",style:{color:"var(--error)",fontSize:12},children:O})]})]})]}),b&&e.jsxs(Tt,{children:[e.jsxs("div",{children:[e.jsx(Fe,{children:"Manter os fundos ou trocar?"}),e.jsxs(qt,{children:["Os fundos vendidos rendem em média ",Ye(b.break_even.weighted_fii_dividend_yield_pct)," em proventos. Para valer a pena mantê-los, eles precisariam valorizar ao menos ",Ye(b.break_even.fii_price_appreciation_needed_per_year_pct)," ao ano além dos proventos."]})]}),e.jsx(_c,{children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Prazo"}),e.jsx("th",{children:"Manter fundos"}),Object.keys(((S=b.projections[0])==null?void 0:S.switch_values)??{}).map(y=>e.jsx("th",{children:Yg[y]??y},y)),e.jsx("th",{children:"Melhor troca vs manter"})]})}),e.jsx("tbody",{children:b.projections.map(y=>e.jsxs("tr",{children:[e.jsx("td",{children:Jg(y.months)}),e.jsx("td",{children:rt(y.keep_funds_value)}),Object.entries(y.switch_values).map(([q,de])=>e.jsx("td",{style:{fontWeight:q===y.best_switch_option?800:400},children:rt(de)},q)),e.jsxs("td",{style:{color:y.difference_best_switch_vs_keep>=0?"var(--success)":"var(--error)"},children:[y.difference_best_switch_vs_keep>0?"+":"",rt(y.difference_best_switch_vs_keep)]})]},y.months))})]})}),e.jsx(kc,{items:b.projections.map(y=>({id:String(y.months),label:`${Jg(y.months)} (${Yg[y.best_switch_option]??y.best_switch_option})`,value:y.difference_best_switch_vs_keep})),formatValue:y=>`${y>0?"+":""}${rt(y)}`}),e.jsx(Zr,{children:"Verde: trocar para a renda fixa termina com mais dinheiro que manter os fundos. Vermelho: manter termina com mais."}),b.assumptions.map(y=>e.jsxs(Zr,{children:["• ",y]},y))]}),e.jsxs(Tt,{style:{opacity:h?.6:1},children:[e.jsxs("div",{children:[e.jsx(Fe,{children:"Opções de renda fixa"}),e.jsxs(qt,{children:["Rendimento líquido anual para um prazo de ",c.fixed_income.holding_period_months," meses."]})]}),e.jsx(oi,{items:X,max:Math.max(...X.map(y=>y.value),1)*1.15}),c.notes.map(y=>e.jsx(Zr,{children:y},y))]})]})]})}const t$={renda_fixa:"#2563eb",acoes_br:"#16a34a",fiis:"#d97706",internacional:"#8b5cf6",cripto:"#f97316"},r$=[{id:"conservador",label:"Conservador"},{id:"moderado",label:"Moderado"},{id:"arrojado",label:"Arrojado"}],n$=m.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 20px;
`,a$=m.div`
  display: inline-flex;
  max-width: 100%;
  gap: 4px;
  padding: 4px;
  overflow-x: auto;
  border: 1px solid var(--border);
  border-radius: 999px;
  background: var(--surface);
`,Vl=m.button`
  flex: 0 0 auto;
  min-height: 38px;
  padding: 6px 16px;
  white-space: nowrap;
  border: 0;
  border-radius: 999px;
  color: ${({$active:r})=>r?"var(--primary-contrast)":"var(--text)"};
  background: ${({$active:r})=>r?"var(--primary)":"transparent"};
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
`,i$=m.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  gap: 12px;
  ${Z} { margin-bottom: 0; min-width: 200px; }
`,J1=m(Ie)`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 14px;
  ${Fe} { margin: 0; }
`,X1=m.p`
  margin: 0;
  color: var(--muted);
  font-size: 12px;
  line-height: 1.5;
`,s$=m.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 12px;
`,o$=m.article`
  display: grid;
  gap: 10px;
  align-content: start;
  padding: 14px 16px;
  border: 1px solid color-mix(in srgb, ${({$rating:r})=>wr[r].color} 35%, var(--border));
  border-left: 5px solid ${({$rating:r})=>wr[r].color};
  border-radius: var(--radius-md);
  background: color-mix(in srgb, ${({$rating:r})=>wr[r].color} 6%, var(--surface-raised));
  header { display: flex; align-items: flex-start; justify-content: space-between; gap: 8px; }
  h3 { margin: 0; color: var(--text); font-size: 14px; }
  small { color: var(--muted); font-size: 11px; }
  ul { margin: 0; padding-left: 16px; color: var(--muted); font-size: 12px; line-height: 1.5; }
`,l$=m.span`
  flex: 0 0 auto;
  padding: 3px 9px;
  border-radius: 999px;
  color: ${({$rating:r})=>wr[r].color};
  background: color-mix(in srgb, ${({$rating:r})=>wr[r].color} 14%, transparent);
  font-size: 11px;
  font-weight: 800;
`,c$=m.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 6px;
`,d$=m.div`
  display: grid;
  gap: 4px;
  font-size: 11px;
  color: var(--muted);
  span { font-variant-numeric: tabular-nums; }
  div { height: 6px; overflow: hidden; border-radius: 999px; background: var(--border); }
  div::after {
    content: '';
    display: block;
    width: ${({$score:r})=>r}%;
    height: 100%;
    background: ${({$rating:r})=>wr[r].color};
  }
`,u$=m.p`
  margin: 0;
  color: var(--muted);
  font-size: 11px;
  line-height: 1.5;
`;function p$(r){var a,s,l,c,p;return jt.isAxiosError(r)?((a=r.response)==null?void 0:a.status)===404?"O serviço de oportunidades ainda não está disponível no servidor.":((l=(s=r.response)==null?void 0:s.data)==null?void 0:l.error)||((p=(c=r.response)==null?void 0:c.data)==null?void 0:p.message)||"Não foi possível carregar as oportunidades.":r instanceof Error?r.message:"Não foi possível carregar as oportunidades."}function f$(r){if(!r)return"";const a=new Date(r);return Number.isNaN(a.getTime())?r:a.toLocaleString("pt-BR",{dateStyle:"short",timeStyle:"short"})}function h$({item:r}){var s;const a=r.ticker?Cf(r.class_id,r.rating,r.analysis_type):void 0;return e.jsxs(o$,{$rating:r.rating,children:[e.jsxs("header",{children:[e.jsxs("div",{children:[e.jsx("h3",{children:r.label}),r.in_portfolio&&e.jsx("small",{children:"Na sua carteira"})]}),e.jsxs(c$,{children:[e.jsx(l$,{$rating:r.rating,children:wr[r.rating].label}),a&&e.jsx(as,{label:a.label,color:a.color,details:[`Nota ${r.score}/100 · classificação: ${wr[r.rating].label}.`,...(s=r.analysis_factors)!=null&&s.length?r.analysis_factors:r.analysis_type==="short_term_market"?["Histórico insuficiente para análise completa; etiqueta baseada apenas nos indicadores de curto prazo disponíveis."]:["Critérios: retorno ajustado por proventos, comparação com CDI, volatilidade e queda máxima."],...r.analysis_type==="fii_fundamentals"?["Vacância: não disponível nos dados padronizados consultados; não foi estimada nem pontuada."]:r.analysis_type==="equity_market_history"?["Não avalia lucro, dívida, ROE ou valuation fundamentalista da empresa."]:[]]})]})]}),e.jsxs(d$,{$rating:r.rating,$score:r.score,"aria-label":`Nota ${Math.round(r.score)} de 100`,children:[e.jsxs("span",{children:["Nota ",Math.round(r.score),"/100"]}),e.jsx("div",{})]}),r.top_assets&&r.top_assets.length>0&&e.jsxs("small",{children:["Destaques: ",r.top_assets.join(", ")]}),r.reasons.length>0&&e.jsx("ul",{children:r.reasons.map(l=>e.jsx("li",{children:l},l))})]})}function jp({title:r,description:a,items:s}){if(!s.length)return null;const l=[...s].sort((c,p)=>p.score-c.score);return e.jsxs(J1,{children:[e.jsxs("div",{children:[e.jsx(Fe,{children:r}),e.jsx(X1,{children:a})]}),e.jsx(s$,{children:l.map(c=>e.jsx(h$,{item:c},c.id))})]})}function m$(){const[r,a]=x.useState("oportunidades"),[s,l]=x.useState("moderado"),[c,p]=x.useState(),[h,f]=x.useState(!0),[g,_]=x.useState(""),[b,k]=x.useState(0);x.useEffect(()=>{let $=!0;return f(!0),_(""),f1(s).then(V=>{$&&p(V)}).catch(V=>{$&&_(p$(V))}).finally(()=>{$&&f(!1)}),()=>{$=!1}},[s,b]);const C=f$(c==null?void 0:c.generated_at),N=c&&!c.classes.length&&!c.assets.length,O=new Map(((c==null?void 0:c.classes)??[]).map($=>[$.id,$.label]));return e.jsxs(n$,{children:[e.jsxs($o,{children:[e.jsxs("div",{children:[e.jsxs("span",{children:[e.jsx(Op,{size:14})," Oportunidades"]}),e.jsx("h1",{children:"Avaliação de oportunidades."}),e.jsx("p",{children:"Nota de 0 a 100 por classe de ativo e por ativo, e uma simulação histórica para ver o que o passado ensina."}),r==="oportunidades"&&C&&e.jsxs("p",{style:{marginTop:8,fontSize:12},children:["Atualizado em ",C]})]}),e.jsxs(a$,{role:"tablist","aria-label":"Seções",children:[e.jsx(Vl,{type:"button",role:"tab","aria-selected":r==="oportunidades",$active:r==="oportunidades",onClick:()=>a("oportunidades"),children:"Oportunidades"}),e.jsx(Vl,{type:"button",role:"tab","aria-selected":r==="carteira",$active:r==="carteira",onClick:()=>a("carteira"),children:"Minha carteira"}),e.jsx(Vl,{type:"button",role:"tab","aria-selected":r==="simulacao",$active:r==="simulacao",onClick:()=>a("simulacao"),children:"Simulação histórica"}),e.jsx(Vl,{type:"button",role:"tab","aria-selected":r==="fiis",$active:r==="fiis",onClick:()=>a("fiis"),children:"Comparar FIIs"})]})]}),r==="carteira"&&e.jsx(e$,{}),r==="simulacao"&&e.jsx(OE,{}),r==="fiis"&&e.jsx(WE,{}),r==="oportunidades"&&e.jsxs(e.Fragment,{children:[e.jsxs(i$,{children:[e.jsxs(Z,{htmlFor:"opp-profile",children:["Perfil de risco",e.jsx("select",{id:"opp-profile",value:s,onChange:$=>l($.target.value),children:r$.map($=>e.jsx("option",{value:$.id,children:$.label},$.id))})]}),e.jsxs(ue,{type:"button",onClick:()=>k($=>$+1),disabled:h,children:[e.jsx(j1,{}),h?"Atualizando...":"Atualizar"]})]}),g&&e.jsx(Ie,{role:"alert",style:{color:"var(--error)",padding:14},children:g}),h&&!c?e.jsxs(Ge,{children:[e.jsx(Ze,{}),e.jsx("p",{children:"Analisando o mercado..."})]}):c&&e.jsxs(e.Fragment,{children:[c.warnings.length>0&&e.jsx(Ie,{role:"status",style:{color:"var(--warning)",padding:14,fontSize:13},children:c.warnings.map($=>e.jsx("div",{children:$},$))}),N&&e.jsxs(Ge,{children:[e.jsx(Op,{}),e.jsx("p",{children:"Nenhuma oportunidade disponível no momento."})]}),c.suggested_allocation.length>0&&e.jsxs(J1,{children:[e.jsxs("div",{children:[e.jsx(Fe,{children:"Alocação sugerida"}),e.jsxs(X1,{children:["Distribuição de referência para o perfil ",s,", ajustada pelas notas de cada classe."]})]}),e.jsx(Y1,{ariaLabel:"Alocação sugerida por classe de ativo",items:[...c.suggested_allocation].sort(($,V)=>V.percent-$.percent).map($=>({id:$.id,label:O.get($.id)??$.id,value:$.percent,valueLabel:`${$.percent}%`,color:t$[$.id]??"var(--primary)"}))})]}),e.jsx(jp,{title:"Classes de ativos",description:"Onde o cenário atual está mais favorável.",items:c.classes}),e.jsx(jp,{title:"Minha carteira",description:"Seus ativos ativos em dividendos, avaliados pelo cenário atual.",items:c.portfolio}),e.jsx(jp,{title:"Ranking de ativos",description:"Melhores ativos analisados, do melhor para o pior.",items:c.assets}),e.jsxs(u$,{children:["A nota vai de 0 a 100: 65 ou mais indica cenário favorável; 45 a 64, neutro; 30 a 44, merece atenção; abaixo de 30, evitar. FIIs: retorno vs. CDI (até 25 pontos), queda máxima (10), volatilidade (5), regularidade/variação e crescimento de proventos (até 18), P/VP (até 6), idade (até 6) e patrimônio líquido (de -8 a +5); a vacância não está disponível de forma padronizada. Ações: 40% da nota técnica de 1 ano e 60% do histórico de até 5 anos (retorno vs. CDI, volatilidade e queda máxima); sem dados de lucro, dívida, ROE ou valuation. Não constitui recomendação personalizada. ",c.disclaimer??""]})]})]})]})}const Xg=r=>r?new Date(`${r.slice(0,10)}T12:00:00`).toLocaleDateString("pt-BR"):"Não definida";function x$({task:r,loading:a,saving:s,onBack:l,onSave:c,onDelete:p,onSetActive:h,onValidationError:f,statusChanging:g}){const[_,b]=x.useState(""),[k,C]=x.useState(""),[N,O]=x.useState("medium"),[$,V]=x.useState("diaria"),[R,j]=x.useState(""),[T,F]=x.useState(""),[ne,X]=x.useState([]);x.useEffect(()=>{var S;r&&(b(r.title),C(r.description??""),O(r.priority??"medium"),V(Dc(r.frequencia)??"diaria"),j(r.start_date.slice(0,10)),F(((S=r.end_date)==null?void 0:S.slice(0,10))??""),X([...r.items].sort((y,q)=>y.sort_order-q.sort_order).map(y=>y.title)))},[r==null?void 0:r.id]);function L(S,y){X(q=>q.map((de,be)=>be===S?y:de))}async function oe(S){S.preventDefault(),f("");const y=ne.map(de=>de.trim()).filter(Boolean);if(!_.trim()){f("Informe o título da tarefa.");return}if(!y.length){f("Adicione pelo menos um item à tarefa.");return}if(T&&R&&T<R){f("A data final não pode ser anterior à data inicial.");return}const q={title:_.trim(),description:k.trim()||null,priority:N,frequencia:$,start_date:R||void 0,end_date:T||null,items:y};await c(q)}return a&&!r?e.jsx(Ie,{children:e.jsx(In,{children:"Carregando tarefa..."})}):r?e.jsxs(e.Fragment,{children:[e.jsxs(Pr,{children:[e.jsxs("div",{children:[e.jsx("h1",{children:"Editar tarefa"}),e.jsx("p",{children:"Atualize os mesmos campos disponíveis na criação."})]}),e.jsxs(ue,{onClick:l,children:[e.jsx(hc,{}),"Voltar para tarefas"]})]}),e.jsxs(gf,{children:[e.jsxs(Ie,{children:[e.jsxs(wk,{style:{alignItems:"center",justifyContent:"space-between",marginBottom:22},children:[e.jsxs("div",{children:[e.jsxs(Fe,{style:{marginBottom:8},children:["Tarefa · ID ",r.id]}),e.jsx(Rr,{$done:r.is_active,children:r.is_active?"Ativa":"Desativada"})]}),e.jsxs(ue,{type:"button",$variant:r.is_active?"danger":"primary",disabled:g,onClick:()=>{h(r.id,!r.is_active)},children:[g?e.jsx(Ze,{className:"spin"}):r.is_active?e.jsx(A2,{}):e.jsx(tn,{}),g?"Atualizando...":r.is_active?"Desativar tarefa":"Ativar tarefa"]})]}),e.jsxs("form",{onSubmit:S=>void oe(S),children:[e.jsxs(Z,{children:["Título da tarefa *",e.jsx("input",{value:_,onChange:S=>b(S.target.value),maxLength:200,placeholder:"Ex.: Estudar programação",required:!0})]}),e.jsxs(Z,{children:["Descrição ",e.jsx("small",{children:"(opcional)"}),e.jsx("textarea",{value:k,onChange:S=>C(S.target.value),maxLength:1e4,placeholder:"Descreva o objetivo desta tarefa..."})]}),e.jsxs(Z,{children:["Prioridade",e.jsxs(nn,{value:N,onChange:S=>O(S.target.value),children:[e.jsx("option",{value:"high",children:"Alta"}),e.jsx("option",{value:"medium",children:"Média"}),e.jsx("option",{value:"low",children:"Baixa"})]})]}),e.jsxs(Z,{children:["Frequência",e.jsxs(nn,{value:$,onChange:S=>V(S.target.value),children:[e.jsx("option",{value:"diaria",children:"Dia"}),e.jsx("option",{value:"semana",children:"Semana"}),e.jsx("option",{value:"mensal",children:"Mês"})]})]}),e.jsxs(C1,{children:[e.jsxs(Z,{children:["Data de início",e.jsx("input",{type:"date",value:R,onChange:S=>j(S.target.value)})]}),e.jsxs(Z,{children:["Data de fim ",e.jsx("small",{children:"(opcional)"}),e.jsx("input",{type:"date",min:R||void 0,value:T,onChange:S=>F(S.target.value)})]})]}),e.jsxs(Fe,{style:{marginTop:8,marginBottom:6},children:["Itens da tarefa * ",e.jsx(er,{size:15,color:"var(--muted)"})]}),e.jsx(In,{children:"Adicione as atividades que você quer acompanhar."}),e.jsxs(vf,{children:[ne.map((S,y)=>e.jsxs(yf,{children:[e.jsx(jf,{children:y+1}),e.jsx(jc,{"aria-label":`Item ${y+1}`,value:S,maxLength:200,onChange:q=>L(y,q.target.value),placeholder:"Nome da atividade"}),e.jsx(ue,{type:"button",$variant:"danger","aria-label":`Remover item ${y+1}`,disabled:ne.length<=1,onClick:()=>X(q=>q.filter((de,be)=>be!==y)),children:e.jsx($r,{})})]},y)),e.jsx("div",{children:e.jsxs(ue,{type:"button",onClick:()=>X(S=>S.length<100?[...S,""]:S),disabled:ne.length>=100,children:[e.jsx(gt,{}),"Adicionar item"]})})]}),e.jsxs(bf,{children:[e.jsx(ue,{type:"button",onClick:l,children:"Cancelar"}),e.jsxs(ue,{type:"button",$variant:"danger",onClick:()=>p(r.id),children:[e.jsx($r,{}),"Excluir tarefa"]}),e.jsxs(ue,{type:"submit",$variant:"primary",disabled:s,children:[s?e.jsx(Ze,{className:"spin"}):e.jsx(Eo,{}),s?"Salvando...":"Salvar alterações"]})]})]})]}),e.jsxs(Ie,{children:[e.jsx(Fe,{children:"Prévia da tarefa"}),e.jsxs(wf,{children:[e.jsxs(_f,{children:[e.jsx(er,{size:23}),_.trim()||"Título da tarefa"]}),e.jsx(In,{children:k.trim()||"A descrição aparecerá aqui."}),e.jsxs(kf,{children:[e.jsxs("span",{children:[e.jsx(We,{size:15,style:{verticalAlign:"middle",marginRight:7}}),"Início: ",Xg(R)]}),e.jsxs("span",{children:[e.jsx(We,{size:15,style:{verticalAlign:"middle",marginRight:7}}),"Fim: ",Xg(T)]}),e.jsxs("span",{children:[e.jsx(fo,{size:15,style:{verticalAlign:"middle",marginRight:7}}),"Prioridade: ",{high:"Alta",medium:"Média",low:"Baixa"}[N]]}),e.jsxs("span",{children:[e.jsx(fo,{size:15,style:{verticalAlign:"middle",marginRight:7}}),"Frequência: ",$==="diaria"?"Dia":$==="semana"?"Semana":"Mês"]}),e.jsxs("span",{children:[e.jsx(fo,{size:15,style:{verticalAlign:"middle",marginRight:7}}),"Status: ",r.is_active?"Ativa":"Desativada"]})]})]}),e.jsx(Fe,{children:"Itens da tarefa"}),ne.some(S=>S.trim())?ne.map((S,y)=>S.trim()&&e.jsxs(E1,{children:[e.jsx("input",{type:"checkbox",disabled:!0}),e.jsx("span",{children:S}),e.jsx(Rr,{children:"Pendente"})]},y)):e.jsx(In,{children:"Os itens aparecerão aqui enquanto você digita."})]})]})]}):e.jsxs(e.Fragment,{children:[e.jsx(Pr,{children:e.jsxs("div",{children:[e.jsx("h1",{children:"Tarefa não encontrada"}),e.jsx("p",{children:"Não foi possível localizar essa tarefa na listagem."})]})}),e.jsxs(ue,{onClick:l,children:[e.jsx(hc,{}),"Voltar para tarefas"]})]})}const g$=m.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
  margin-bottom: 20px;
  @media (max-width: 620px) { gap: 9px; }
  @media (max-width: 420px) { grid-template-columns: 1fr; }
`,bp=m.div`
  position: relative;
  display: grid;
  grid-template-columns: 42px minmax(0, 1fr);
  align-items: center;
  gap: 12px;
  padding: 16px 18px;
  overflow: hidden;
  border: 1px solid var(--border);
  border-radius: 14px;
  background: linear-gradient(135deg, var(--surface), var(--surface-raised));
  box-shadow: 0 5px 18px var(--shadow);
  &::after { position: absolute; right: -20px; bottom: -38px; width: 92px; height: 92px; border-radius: 50%; background: color-mix(in srgb, var(--primary) 8%, transparent); content: ''; }
  @media (max-width: 620px) { padding: 13px; grid-template-columns: 36px minmax(0, 1fr); gap: 9px; }
  > div > span { display: block; color: var(--muted); font-size: 12px; }
  > div > strong { display: block; margin-top: 3px; color: var(--text); font-size: 25px; line-height: 1.2; }
`,wp=m.span`
  display: grid;
  width: 42px;
  height: 42px;
  place-items: center;
  border-radius: 12px;
  color: ${({$tone:r})=>r==="green"?"var(--success)":r==="gray"?"var(--muted)":"var(--primary)"};
  background: ${({$tone:r})=>r==="green"?"var(--success-soft)":r==="gray"?"var(--surface-raised)":"var(--primary-soft)"};
  svg { width: 19px; height: 19px; }
  @media (max-width: 620px) { width: 36px; height: 36px; }
`,v$=m.div`
  display: grid;
  grid-template-columns: minmax(220px, 1fr) auto;
  align-items: center;
  gap: 12px;
  padding: 12px;
  margin-bottom: 14px;
  border: 1px solid var(--border);
  border-radius: 14px;
  background: var(--surface);
  box-shadow: 0 4px 14px var(--shadow);
  @media (max-width: 760px) { grid-template-columns: 1fr; }
`,y$=m.label`
  display: flex;
  min-width: 0;
  height: 42px;
  align-items: center;
  gap: 9px;
  padding: 0 12px;
  border: 1px solid var(--border);
  border-radius: 10px;
  color: var(--muted);
  background: var(--surface-raised);
  transition: border-color .15s ease, box-shadow .15s ease, background .15s ease;
  &:focus-within { border-color: var(--primary); background: var(--surface); box-shadow: 0 0 0 3px var(--focus); }
  > svg { width: 17px; height: 17px; flex: 0 0 auto; }
  input { width: 100%; min-width: 0; padding: 0; border: 0; outline: 0; color: var(--text); background: transparent; font: inherit; font-size: 13px; }
  input::placeholder { color: var(--muted); }
`,j$=m($1)`
  display: flex;
  gap: 8px;
  @media (max-width: 760px) { display: grid; grid-template-columns: 1fr 1fr; }
  @media (max-width: 420px) { grid-template-columns: 1fr; }
  select { min-width: 170px; height: 42px; }
  @media (max-width: 760px) { select { min-width: 0; width: 100%; } }
`,b$=m.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin: 0 0 14px;
  padding: 4px;
  overflow-x: auto;
  border: 1px solid var(--border);
  border-radius: 11px;
  background: var(--surface-raised);
`,_p=m.button`
  display: inline-flex;
  min-height: 34px;
  align-items: center;
  justify-content: center;
  gap: 7px;
  padding: 6px 11px;
  border: 0;
  border-radius: 8px;
  color: ${({$active:r})=>r?"var(--primary-strong)":"var(--muted)"};
  background: ${({$active:r})=>r?"var(--surface)":"transparent"};
  box-shadow: ${({$active:r})=>r?"0 1px 4px var(--shadow)":"none"};
  font-size: 12px;
  font-weight: 700;
  white-space: nowrap;
  cursor: pointer;
  &:hover { color: var(--primary); }
  &:focus-visible { outline: 3px solid var(--focus); outline-offset: 1px; }
  span { display: inline-grid; min-width: 20px; height: 20px; place-items: center; padding: 0 5px; border-radius: 6px; color: inherit; background: ${({$active:r})=>r?"color-mix(in srgb, var(--primary) 16%, var(--surface))":"var(--border)"}; font-size: 10px; }
`,w$=m.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  margin: 0 2px 10px;
  h2 { margin: 0; color: var(--text); font-size: 14px; font-weight: 750; }
  span { color: var(--muted); font-size: 11px; }
`,_$=m.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 8px;
  @media (max-width: 639px) { width: 100%; }
`,k$=m.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 13px 14px;
  margin-top: 14px;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: var(--surface);
  @media (max-width: 560px) { align-items: stretch; flex-direction: column; }
`,S$=m.span`
  color: var(--muted);
  font-size: 12px;
`,C$=m.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  @media (max-width: 560px) { justify-content: space-between; }
`,E$=m.select`
  min-height: 36px;
  padding: 6px 9px;
  border: 1px solid var(--border);
  border-radius: 8px;
  color: var(--text);
  background: var(--surface-raised);
  font-size: 12px;
`,Zg=m(ue)`
  min-height: 36px;
  padding: 7px 10px;
  &:disabled { opacity: .45; cursor: not-allowed; }
`,$$=m.div`
  display: grid;
  gap: 11px;
`,R$=m.article`
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 18px;
  padding: 18px 19px;
  border: 1px solid var(--border);
  border-left: 3px solid ${({$active:r})=>r?"var(--primary)":"var(--muted)"};
  border-radius: 13px;
  background: var(--surface);
  box-shadow: 0 4px 14px var(--shadow);
  transition: border-color .15s ease, box-shadow .15s ease, transform .15s ease;
  &:hover { border-color: var(--primary); border-left-color: ${({$active:r})=>r?"var(--primary)":"var(--muted)"}; box-shadow: 0 8px 22px var(--shadow); transform: translateY(-1px); }
  @media (max-width: 720px) { grid-template-columns: 1fr; gap: 14px; padding: 16px; }
`,P$=m.div`
  display: grid;
  min-width: 0;
  gap: 13px;
`,z$=m.div`
  display: flex;
  min-width: 0;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
`,N$=m.div`
  min-width: 0;
  h3 { margin: 0; color: var(--text); font-size: 15px; font-weight: 750; line-height: 1.45; overflow-wrap: anywhere; }
  p { margin: 4px 0 0; color: var(--muted); font-size: 12px; line-height: 1.5; overflow-wrap: anywhere; }
`,M$=m.div`
  display: flex;
  flex: 0 0 auto;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 6px;
  @media (max-width: 520px) { justify-content: flex-start; }
`,A$=m.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px 17px;
  color: var(--muted);
  font-size: 11px;
`,Wl=m.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  svg { width: 14px; height: 14px; color: var(--muted); }
`,T$=m.div`
  display: flex;
  min-width: 0;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px;
`,D$=m.span`
  display: inline-flex;
  max-width: min(230px, 100%);
  align-items: center;
  gap: 5px;
  padding: 5px 8px;
  border: 1px solid var(--border);
  border-radius: 7px;
  color: var(--muted);
  background: var(--surface-raised);
  font-size: 11px;
  line-height: 1.3;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,F$=m.span`
  padding: 5px 7px;
  color: var(--muted);
  font-size: 11px;
  font-weight: 700;
`,L$=m.div`
  display: grid;
  grid-template-columns: minmax(55px, 100px) auto;
  align-items: center;
  gap: 8px;
  margin-left: auto;
  span { color: var(--muted); font-size: 10px; white-space: nowrap; }
  @media (max-width: 720px) { margin-left: 0; }
`,O$=m.div`
  height: 5px;
  overflow: hidden;
  border-radius: 999px;
  background: var(--border);
  div { height: 100%; border-radius: inherit; background: var(--primary); transition: width .2s ease; }
`,I$=m.div`
  display: grid;
  min-width: 178px;
  align-content: space-between;
  justify-items: end;
  gap: 16px;
  padding-left: 17px;
  border-left: 1px solid var(--border);
  @media (max-width: 720px) {
    display: flex;
    min-width: 0;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;
    padding: 12px 0 0;
    border-top: 1px solid var(--border);
    border-left: 0;
  }
`,B$=m.div`
  display: grid;
  justify-items: end;
  gap: 4px;
  color: var(--muted);
  font-size: 10px;
  text-align: right;
  strong { color: var(--text); font-size: 11px; font-weight: 650; }
  @media (max-width: 720px) { justify-items: start; text-align: left; }
`,q$=m.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 6px;
`,kp=m(ue)`
  min-height: 33px;
  padding: 7px 9px;
  gap: 6px;
  white-space: nowrap;
  font-size: 11px;
  svg { width: 14px; height: 14px; }
`,U$=m.span`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 5px 8px;
  border-radius: var(--radius-full);
  color: ${({$priority:r})=>r==="high"?"var(--error)":r==="medium"?"var(--warning)":"var(--success)"};
  background: ${({$priority:r})=>r==="high"?"var(--error-soft)":r==="medium"?"var(--warning-soft)":"var(--success-soft)"};
  font-size: 10px;
  font-weight: 700;
  white-space: nowrap;
`;m(Ie)`
  padding: 0;
  border: 0;
  background: transparent;
  box-shadow: none;
  @media (max-width: 520px) { padding: 0; }
`;const H$={low:"Baixa",medium:"Média",high:"Alta"},ev=r=>r?new Date(`${r.slice(0,10)}T12:00:00`).toLocaleDateString("pt-BR"):"Não definida",tv=r=>r?new Date(r).toLocaleString("pt-BR",{dateStyle:"short",timeStyle:"short"}):"Não definida";function V$({tasks:r,loading:a,statusFilter:s,priorityFilter:l,pagination:c,onStatusFilterChange:p,onPriorityFilterChange:h,onPageChange:f,onPageSizeChange:g,onNavigate:_,onDeactivate:b,onDeactivateAll:k,statusChanging:C,onDelete:N}){const[O,$]=x.useState(""),V=x.useMemo(()=>r.filter(j=>{const T=O.trim().toLocaleLowerCase("pt-BR"),F=[j.title,j.description??"",String(j.id),...(j.items??[]).map(oe=>oe.title)].join(" ").toLocaleLowerCase("pt-BR"),ne=!T||F.includes(T),X=s==="all"||s==="active"&&j.is_active||s==="inactive"&&!j.is_active,L=l==="all"||l==="none"&&!j.priority||j.priority===l;return ne&&X&&L}),[r,O,s,l]);function R(){$(""),p("all"),h("all")}return e.jsxs(e.Fragment,{children:[e.jsxs(Pr,{children:[e.jsxs("div",{children:[e.jsx("h1",{children:"Minhas tarefas"}),e.jsx("p",{children:"Organize seus compromissos e acompanhe o que precisa ser feito."})]}),e.jsxs(_$,{children:[e.jsxs(ue,{type:"button",$variant:"danger",onClick:k,disabled:a||C||c.activeTotal===0,children:[C?e.jsx(Ze,{className:"spin"}):e.jsx(K2,{}),"Desativar todas"]}),e.jsxs(ue,{$variant:"primary",onClick:()=>_("/tasks/new"),children:[e.jsx(gt,{}),"Nova tarefa"]})]})]}),e.jsxs(g$,{"aria-label":"Resumo das tarefas",children:[e.jsxs(bp,{children:[e.jsx(wp,{$tone:"blue",children:e.jsx(er,{})}),e.jsxs("div",{children:[e.jsx("span",{children:"Total de tarefas"}),e.jsx("strong",{children:c.total})]})]}),e.jsxs(bp,{children:[e.jsx(wp,{$tone:"green",children:e.jsx(er,{})}),e.jsxs("div",{children:[e.jsx("span",{children:"Tarefas ativas"}),e.jsx("strong",{children:c.activeTotal})]})]}),e.jsxs(bp,{children:[e.jsx(wp,{$tone:"gray",children:e.jsx(er,{})}),e.jsxs("div",{children:[e.jsx("span",{children:"Desativadas"}),e.jsx("strong",{children:c.inactiveTotal})]})]})]}),e.jsxs(v$,{children:[e.jsxs(y$,{children:[e.jsx(b1,{"aria-hidden":"true"}),e.jsx("input",{type:"search","aria-label":"Buscar tarefas",placeholder:"Buscar por tarefa, descrição ou item...",value:O,onChange:j=>$(j.target.value)})]}),e.jsx(j$,{children:e.jsxs(nn,{"aria-label":"Filtrar por prioridade",value:l,onChange:j=>h(j.target.value),children:[e.jsx("option",{value:"all",children:"Todas as prioridades"}),e.jsx("option",{value:"high",children:"Prioridade alta"}),e.jsx("option",{value:"medium",children:"Prioridade média"}),e.jsx("option",{value:"low",children:"Prioridade baixa"}),e.jsx("option",{value:"none",children:"Sem prioridade"})]})})]}),e.jsxs(b$,{"aria-label":"Filtrar por situação",children:[e.jsxs(_p,{type:"button",$active:s==="all","aria-pressed":s==="all",onClick:()=>p("all"),children:["Todas ",e.jsx("span",{children:c.total})]}),e.jsxs(_p,{type:"button",$active:s==="active","aria-pressed":s==="active",onClick:()=>p("active"),children:["Ativas ",e.jsx("span",{children:c.activeTotal})]}),e.jsxs(_p,{type:"button",$active:s==="inactive","aria-pressed":s==="inactive",onClick:()=>p("inactive"),children:["Desativadas ",e.jsx("span",{children:c.inactiveTotal})]})]}),e.jsxs(w$,{children:[e.jsx("h2",{children:V.length===1?"1 tarefa nesta página":`${V.length} tarefas nesta página`}),e.jsx("span",{children:O||s!=="all"||l!=="all"?"Filtros aplicados nesta página":`Página ${c.page} de ${c.totalPages}`})]}),a?e.jsxs(Ge,{children:[e.jsx(Ze,{}),e.jsx("p",{children:"Carregando tarefas..."})]}):V.length===0?e.jsx(Ie,{children:e.jsxs(Ge,{children:[e.jsx(er,{size:32}),e.jsx("h3",{children:r.length===0?"Sua lista está pronta para começar":"Nenhuma tarefa encontrada"}),e.jsx("p",{children:r.length===0?"Crie sua primeira tarefa e organize seus próximos passos.":"Tente mudar a busca ou remover alguns filtros."}),e.jsx("div",{style:{marginTop:16},children:r.length===0?e.jsxs(ue,{$variant:"primary",onClick:()=>_("/tasks/new"),children:[e.jsx(gt,{}),"Criar primeira tarefa"]}):e.jsxs(ue,{onClick:R,children:[e.jsx(pr,{}),"Limpar filtros"]})})]})}):e.jsx($$,{children:V.map(j=>{const T=[...j.items??[]].sort((L,oe)=>L.sort_order-oe.sort_order),F=T.filter(L=>!!L.completed).length,ne=T.some(L=>L.completed!==void 0),X=T.length?Math.round(F/T.length*100):0;return e.jsxs(R$,{$active:j.is_active,children:[e.jsxs(P$,{children:[e.jsxs(z$,{children:[e.jsxs(N$,{children:[e.jsx("h3",{children:j.title}),e.jsx("p",{children:j.description||"Sem descrição"})]}),e.jsxs(M$,{children:[e.jsx(Rr,{$done:j.is_active,children:j.is_active?"Ativa":"Desativada"}),j.priority&&e.jsxs(U$,{$priority:j.priority,children:["Prioridade ",H$[j.priority].toLowerCase()]})]})]}),e.jsxs(A$,{children:[e.jsxs(Wl,{children:[e.jsx(We,{}),"Início ",ev(j.start_date)]}),e.jsxs(Wl,{children:[e.jsx(We,{}),"Fim ",ev(j.end_date)]}),e.jsxs(Wl,{children:[e.jsx(er,{}),T.length," ",T.length===1?"item":"itens"]}),e.jsxs(Wl,{children:["ID ",j.id]})]}),T.length>0&&e.jsxs(T$,{"aria-label":"Itens da tarefa",children:[T.slice(0,3).map(L=>e.jsx(D$,{title:L.title,children:L.title},L.id)),T.length>3&&e.jsxs(F$,{children:["+",T.length-3," itens"]}),ne&&e.jsxs(L$,{"aria-label":`${X}% concluído`,children:[e.jsx(O$,{children:e.jsx("div",{style:{width:`${X}%`}})}),e.jsxs("span",{children:[F,"/",T.length," concluídos"]})]})]})]}),e.jsxs(I$,{children:[e.jsxs(B$,{children:[e.jsxs("span",{children:["Criada ",e.jsx("strong",{children:tv(j.created_at)})]}),e.jsxs("span",{children:["Atualizada ",e.jsx("strong",{children:tv(j.updated_at)})]})]}),e.jsxs(q$,{children:[e.jsxs(kp,{"aria-label":`Ver detalhes e editar ${j.title}`,title:"Detalhes e edição",onClick:()=>_(`/tasks/${encodeURIComponent(String(j.id))}`),children:[e.jsx(Co,{}),"Editar"]}),j.is_active&&e.jsx(kp,{$variant:"danger",onClick:()=>b(j.id),disabled:C,children:"Desativar"}),e.jsx(kp,{$variant:"danger","aria-label":`Excluir tarefa ${j.title}`,title:"Excluir tarefa",onClick:()=>N(j),children:e.jsx($r,{})})]})]})]},j.id)})}),c.total>0&&e.jsxs(k$,{"aria-label":"Paginação da lista de tarefas",children:[e.jsxs(S$,{children:["Exibindo ",(c.page-1)*c.limit+1,"–",Math.min(c.page*c.limit,c.total)," de ",c.total," tarefas"]}),e.jsxs(C$,{children:[e.jsxs("label",{children:[e.jsx("span",{style:{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:0},children:"Tarefas por página"}),e.jsxs(E$,{"aria-label":"Tarefas por página",value:c.limit,onChange:j=>g(Number(j.target.value)),children:[e.jsx("option",{value:5,children:"5 por página"}),e.jsx("option",{value:10,children:"10 por página"}),e.jsx("option",{value:20,children:"20 por página"}),e.jsx("option",{value:50,children:"50 por página"}),e.jsx("option",{value:100,children:"100 por página"})]})]}),e.jsxs(Zg,{"aria-label":"Página anterior",disabled:!c.hasPreviousPage||a,onClick:()=>f(c.page-1),children:[e.jsx(jo,{}),"Anterior"]}),e.jsxs(Zg,{"aria-label":"Próxima página",disabled:!c.hasNextPage||a,onClick:()=>f(c.page+1),children:["Próxima",e.jsx(rs,{})]})]})]})]})}const W$={"/login":"login","/":"today","/tasks":"list","/tasks/new":"create","/planning":"planning","/today":"today","/week":"week","/month":"month","/completed":"completed","/goals":"goals","/history":"history","/schedule":"schedule","/study-resources":"study-resources","/finances":"finances","/english-study":"english-study","/expenses":"expenses","/fuel-calculator":"fuel-calculator","/dividends":"dividends","/fixed-income":"fixed-income","/opportunities":"opportunities"};function rv(r){const a=W$[r];if(a)return{page:a};const s=r.match(/^\/tasks\/([^/]+)$/);if(s){const c=decodeURIComponent(s[1]);if(c!=="new")return{page:"details",taskId:c}}const l=r.match(/^\/study-resources\/([^/]+)\/edit$/);if(l)return{page:"study-resource-edit",resourceId:decodeURIComponent(l[1])}}function Gl(r){if(!r)return[];const a=new Map;for(const s of r.items){const l=String(s.task_id),c=a.get(l)??{task_id:s.task_id,record_date:r.date,task_title:s.task_title,items:[],total_items:0,completed_items:0};c.items.push({id:s.id,task_item_id:s.task_item_id,title:s.title,is_completed:s.is_completed,completed_at:s.completed_at,record_date:s.record_date}),c.total_items+=1,s.is_completed&&(c.completed_items+=1),a.set(l,c)}return[...a.values()]}function nv(r){return{date:r.start_date,total_items:r.total_items,completed_items:r.completed_items,pending_items:r.pending_items,completion_percentage:r.completion_percentage,items:r.items.map(a=>({...a,record_date:a.date}))}}function G$(){const[r,a]=x.useState(()=>window.location.pathname),s=rv(r),l=(s==null?void 0:s.page)??"list",[c,p]=x.useState([]),[h,f]=x.useState([]),[g,_]=x.useState([]),[b,k]=x.useState({mode:"all"}),[C,N]=x.useState(1),[O,$]=x.useState({page:1,limit:20,total:0,totalPages:0,hasNextPage:!1,hasPreviousPage:!1}),[V,R]=x.useState([]),[j,T]=x.useState({page:1,limit:20,total:0,totalPages:0,hasNextPage:!1,hasPreviousPage:!1}),[F,ne]=x.useState(!1),[X,L]=x.useState([]),[oe,S]=x.useState([]),[y,q]=x.useState({area:"",type:"",search:""}),[de,be]=x.useState(1),[ke,ze]=x.useState({page:1,limit:12,total:0,totalPages:0,hasNextPage:!1,hasPreviousPage:!1}),[Q,ge]=x.useState(null),[le,xe]=x.useState(!1),[H,z]=x.useState([]),[w,re]=x.useState([]),[ae,M]=x.useState([]),[se,ve]=x.useState({total_balance:0,account_count:0}),[je,U]=x.useState([]),[pe,ot]=x.useState([]),[st,ft]=x.useState([]),[at,lr]=x.useState("daily"),[Et,bt]=x.useState(),[Le,et]=x.useState(),[ie,He]=x.useState(),[Pt,Kt]=x.useState(""),[Vt,fr]=x.useState([]),[zr,vt]=x.useState(1),[Nr,an]=x.useState({page:1,limit:10,total:0,totalPages:0,hasNextPage:!1,hasPreviousPage:!1}),[hr,Dt]=x.useState(!1),[Br,Mr]=x.useState("all"),[qn,ca]=x.useState("all"),[tr,rr]=x.useState(1),[kt,Pn]=x.useState(10),[J,Re]=x.useState({page:1,limit:10,total:0,activeTotal:0,inactiveTotal:0,totalPages:0,hasNextPage:!1,hasPreviousPage:!1}),[$t,St]=x.useState(!1),[qr,dt]=x.useState(!1),[Fa,Un]=x.useState(!1),[La,we]=x.useState(""),[Hn,Oe]=x.useState(""),[Vn,Wn]=x.useState(""),[kr,Wt]=x.useState(null),[lt,wt]=x.useState(!1),[_t,Ur]=x.useState(null),[Gn,Hr]=x.useState(!1),zt=x.useCallback(B=>{window.history.pushState({},"",B),a(B),we(""),Oe("")},[]);x.useEffect(()=>{i_().then(B=>Ur(B)).catch(()=>{Ur(null),window.location.pathname!=="/login"&&zt("/login")}).finally(()=>Hr(!0))},[zt]),x.useEffect(()=>{const B=()=>{a(window.location.pathname),we(""),Oe("")};return window.addEventListener("popstate",B),()=>window.removeEventListener("popstate",B)},[]),x.useEffect(()=>{rv(r)||(window.history.replaceState({},"","/today"),a("/today"))},[r]);const cr=x.useCallback(async(B=1,K=100)=>{St(!0),we("");try{const ee=await Ui(B,K);return p(ee.data),Re(ee.pagination),ee.pagination.page!==B&&rr(ee.pagination.page),!0}catch{return we("Não foi possível carregar as tarefas. Confira se a API está ligada em http://localhost:3333."),!1}finally{St(!1)}},[]),E=x.useCallback(async()=>{var B,K;St(!0),we("");try{const[ee,W]=await Promise.all([Ui(1,100),Ws()]);p(ee.data),U(W)}catch(ee){const W=(K=(B=ee==null?void 0:ee.response)==null?void 0:B.data)==null?void 0:K.error;we(W||"Não foi possível carregar os itens de hoje. Confira a rota GET /api/daily.")}finally{St(!1)}},[]),ce=x.useCallback(async()=>{var B,K;St(!0),we("");try{const[ee,W]=await Promise.all([Ui(1,100),Ws()]);p(ee.data),U(W)}catch(ee){const W=(K=(B=ee==null?void 0:ee.response)==null?void 0:B.data)==null?void 0:K.error;we(W||"Não foi possível carregar os itens da semana. Confira as rotas GET /api/tasks e GET /api/daily.")}finally{St(!1)}},[]),Me=x.useCallback(async()=>{var B,K;St(!0),we("");try{const[ee,W]=await Promise.all([Ui(1,100),Ws()]);p(ee.data),U(W)}catch(ee){const W=(K=(B=ee==null?void 0:ee.response)==null?void 0:B.data)==null?void 0:K.error;we(W||"Não foi possível carregar os itens do mês. Confira as rotas GET /api/tasks e GET /api/daily.")}finally{St(!1)}},[]),Ke=x.useCallback(async()=>{var B,K;St(!0),we("");try{U(await Ws())}catch(ee){const W=(K=(B=ee==null?void 0:ee.response)==null?void 0:B.data)==null?void 0:K.error;we(W||"Não foi possível carregar as atividades concluídas. Confira a rota GET /api/daily.")}finally{St(!1)}},[]),ht=x.useCallback(async()=>{var B,K;St(!0),we("");try{f(await a2())}catch(ee){const W=(K=(B=ee==null?void 0:ee.response)==null?void 0:B.data)==null?void 0:K.error;we(W||"Não foi possível carregar os objetivos. Confira se a API e a migração de objetivos estão configuradas.")}finally{St(!1)}},[]),ct=x.useCallback(async(B,K)=>{var ee,W;St(!0),we("");try{const fe=await u2(B,K);_(fe.data),$(fe.pagination)}catch(fe){const Te=(W=(ee=fe==null?void 0:fe.response)==null?void 0:ee.data)==null?void 0:W.error;we(Te||"Não foi possível carregar a agenda. Confira a rota GET /api/schedule.")}finally{St(!1)}},[]),Ft=x.useCallback(async(B=1)=>{var K,ee;ne(!0),we("");try{const W=await p2(B);return R(W.data),T(W.pagination),W}catch(W){const fe=(ee=(K=W==null?void 0:W.response)==null?void 0:K.data)==null?void 0:ee.error;we(fe||"Não foi possível carregar os alertas. Confira a rota GET /api/schedule/alerts.");return}finally{ne(!1)}},[]),it=x.useCallback(async(B=de,K=y)=>{var ee,W;St(!0),we("");try{const[fe,Te]=await Promise.all([c_({...K,page:B,limit:12}),d_()]);L(fe.data),ze(fe.pagination),S(Te)}catch(fe){const Te=(W=(ee=fe==null?void 0:fe.response)==null?void 0:ee.data)==null?void 0:W.error;we(Te||"Não foi possível carregar a biblioteca de estudos. Confira as rotas /api/study-resources.")}finally{St(!1)}},[y,de]),Qe=x.useCallback(async()=>{var B,K;St(!0),we("");try{const[ee,W,fe,Te]=await Promise.all([B_(),q_(),W_(),Y_()]);ve(ee),z(W),re(fe),M(Te)}catch(ee){const W=(K=(B=ee==null?void 0:ee.response)==null?void 0:B.data)==null?void 0:K.error;we(W||"NÃ£o foi possÃ­vel carregar as finanÃ§as. Confira as rotas /api/finances.")}finally{St(!1)}},[]),yt=x.useCallback(async(B=zr,K=at,ee=Et)=>{var W,fe;St(!0),we("");try{if(K==="daily"){const Te=await e2(B,10,ee);ot(Te.data),ft([]),an(Te.pagination),et(void 0);const Ue=Te.data[0];Ue?(He(Ue),Kt(Ue.date.slice(0,10)),fr(Gl(Ue))):(He(void 0),Kt(""),fr([]))}else{const Te=K==="week"?await r2(B,10,ee):await n2(B,10,ee);ot([]),ft(Te.data),an(Te.pagination);const Ue=Te.data[0];if(et(Ue),Ue){const nt=nv(Ue);He(nt),Kt(Ue.start_date.slice(0,10)),fr(Gl(nt))}else He(void 0),Kt(""),fr([])}}catch(Te){const Ue=(fe=(W=Te==null?void 0:Te.response)==null?void 0:W.data)==null?void 0:fe.error;we(Ue||`Não foi possível carregar o histórico. Confira a rota GET ${K==="week"?"/api/daily/history/week":K==="month"?"/api/daily/history/month":"/api/daily/history"}.`)}finally{St(!1)}},[at,zr,Et]),Xe=x.useCallback(async B=>{var K,ee;Kt(B),et(void 0),Dt(!0);try{const W=await t2(B),fe={date:W.date,total_items:W.summary.total_items,completed_items:W.summary.completed_items,pending_items:W.summary.pending_items,completion_percentage:W.summary.completion_percentage,items:W.data.map(Te=>({id:Te.id,task_id:Te.task_id,task_title:Te.task_title,task_item_id:Te.task_item_id,title:Te.item_title,is_completed:Te.is_completed,completed_at:Te.completed_at,record_date:Te.date}))};He(fe),fr(Gl(fe))}catch(W){He(void 0),fr([]),we(((ee=(K=W==null?void 0:W.response)==null?void 0:K.data)==null?void 0:ee.error)||"Não foi possível carregar os registros desta data.")}finally{Dt(!1)}},[]),gn=x.useCallback(B=>{const K=nv(B);et(B),He(K),Kt(B.start_date.slice(0,10)),fr(Gl(K))},[]);x.useEffect(()=>{!Gn||!_t||(l==="planning"||l==="today"?E():l==="week"?ce():l==="month"?Me():l==="completed"?Ke():l==="goals"?ht():l==="schedule"?(ct(b,C),Ft()):l==="study-resources"?it(de,y):l==="finances"?Qe():l==="list"?cr(tr,kt):l!=="login"&&l!=="english-study"&&l!=="expenses"&&l!=="dividends"&&l!=="fixed-income"&&l!=="opportunities"&&l!=="study-resource-edit"&&cr(1,100))},[Gn,_t,l,tr,kt,b,C,de,y,cr,E,ce,Me,Ke,ht,ct,Ft,it,Qe]),x.useEffect(()=>{if(l!=="study-resource-edit"){ge(null),xe(!1);return}if(!Gn||!_t||!(s!=null&&s.resourceId))return;const B=s.resourceId;if(Q&&String(Q.id)===String(B)){xe(!1);return}const K=X.find(W=>String(W.id)===String(B));if(K){ge(K),xe(!1);return}let ee=!1;return xe(!0),F_(B).then(W=>{ee||ge(W)}).catch(()=>{ee||ge(null)}).finally(()=>{ee||xe(!1)}),()=>{ee=!0}},[Gn,_t,Q,l,s==null?void 0:s.resourceId,X]),x.useEffect(()=>{(l==="history"||l==="planning")&&yt(zr,at,Et)},[l,zr,at,Et,yt]);const Sr=x.useCallback(async B=>{var K,ee;we(""),Oe(""),dt(!0);try{return await x2(B),zt("/tasks"),Oe("Tarefa criada com sucesso."),rr(1),await cr(1,kt),!0}catch(W){const fe=(ee=(K=W==null?void 0:W.response)==null?void 0:K.data)==null?void 0:ee.error;return we(fe||"Não foi possível salvar. Confira a API, o schema e a função ensure_task_daily_records no PostgreSQL."),!1}finally{dt(!1)}},[cr,zt,kt]),Qn=x.useCallback(async B=>{var K,ee;if(!(s!=null&&s.taskId))return!1;we(""),Oe(""),dt(!0);try{return await g2(s.taskId,B),zt("/tasks"),Oe("Tarefa atualizada com sucesso."),rr(1),await cr(1,kt),!0}catch(W){const fe=(ee=(K=W==null?void 0:W.response)==null?void 0:K.data)==null?void 0:ee.error;return we(fe||"Não foi possível atualizar a tarefa. Confira se a API implementa PATCH /api/tasks/:id."),!1}finally{dt(!1)}},[cr,zt,s==null?void 0:s.taskId,kt]),Kn=x.useCallback(async B=>{var K,ee;we(""),Oe(""),dt(!0);try{const W=await i2(B);return f(fe=>[W,...fe]),Oe("Objetivo criado com sucesso."),!0}catch(W){const fe=(ee=(K=W==null?void 0:W.response)==null?void 0:K.data)==null?void 0:ee.error;return we(fe||"Não foi possível salvar o objetivo. Confira a rota POST /api/objectives e a migração do banco."),!1}finally{dt(!1)}},[]),nr=x.useCallback(async B=>{var K,ee;we(""),Oe(""),dt(!0);try{await f2(B),Oe("Agendamento criado com sucesso.");const[,W]=await Promise.all([ct(b,C),Ft(j.page)]);return W&&!W.data.length&&j.page>1&&await Ft(j.page-1),!0}catch(W){const fe=(ee=(K=W==null?void 0:W.response)==null?void 0:K.data)==null?void 0:ee.error;return we(fe||"Não foi possível criar o agendamento. Confira a rota POST /api/schedule."),!1}finally{dt(!1)}},[ct,Ft,j.page,b,C]),cs=x.useCallback(async(B,K)=>{var ee,W;we(""),Oe(""),dt(!0);try{await h2(B,K),Oe("Agendamento atualizado com sucesso.");const[,fe]=await Promise.all([ct(b,C),Ft(j.page)]);return fe&&!fe.data.length&&j.page>1&&await Ft(j.page-1),!0}catch(fe){const Te=(W=(ee=fe==null?void 0:fe.response)==null?void 0:ee.data)==null?void 0:W.error;return we(Te||"Não foi possível atualizar o agendamento. Confira a rota PATCH /api/schedule/:id."),!1}finally{dt(!1)}},[ct,Ft,j.page,b,C]),Vr=x.useCallback(async B=>{var K,ee;we(""),Oe("");try{await m2(B.id),Oe("Agendamento excluído com sucesso.");const W=g.length===1&&C>1?C-1:C;N(W);const[,fe]=await Promise.all([ct(b,W),Ft(j.page)]);return fe&&!fe.data.length&&j.page>1&&await Ft(j.page-1),!0}catch(W){const fe=(ee=(K=W==null?void 0:W.response)==null?void 0:K.data)==null?void 0:ee.error;return we(fe||"Não foi possível excluir o agendamento. Confira a rota DELETE /api/schedule/:id."),!1}},[ct,Ft,j.page,g.length,C,b]),da=x.useCallback(async(B=de,K=y)=>{await it(B,K)},[it,y,de]),Fc=x.useCallback(async B=>{var K,ee;we(""),Oe(""),dt(!0);try{return await L_(B),await da(1,y),be(1),Oe("Material adicionado à biblioteca."),!0}catch(W){return we(((ee=(K=W==null?void 0:W.response)==null?void 0:K.data)==null?void 0:ee.error)||"Não foi possível adicionar o material."),!1}finally{dt(!1)}},[da,y]),Lc=x.useCallback(async(B,K)=>{var ee,W;we(""),Oe(""),dt(!0);try{return await O_(B,K),await da(),Oe("Material atualizado com sucesso."),zt("/study-resources"),!0}catch(fe){return we(((W=(ee=fe==null?void 0:fe.response)==null?void 0:ee.data)==null?void 0:W.error)||"Não foi possível atualizar o material."),!1}finally{dt(!1)}},[zt,da]),gi=x.useCallback(async B=>{var K,ee;we(""),Oe("");try{await I_(B.id);const W=X.length===1&&de>1?de-1:de;return await da(W),be(W),Oe("Material removido da biblioteca."),!0}catch(W){return we(((ee=(K=W==null?void 0:W.response)==null?void 0:K.data)==null?void 0:ee.error)||"Não foi possível remover o material."),!1}},[da,de,X.length]),vi=x.useCallback(async B=>{var K,ee;we(""),Oe(""),dt(!0);try{return await U_(B),await Qe(),Oe("Conta adicionada com sucesso."),!0}catch(W){return we(((ee=(K=W==null?void 0:W.response)==null?void 0:K.data)==null?void 0:ee.error)||"NÃ£o foi possÃ­vel adicionar a conta."),!1}finally{dt(!1)}},[Qe]),Oa=x.useCallback(async(B,K)=>{var ee,W;we(""),Oe(""),dt(!0);try{return await H_(B,K),await Qe(),Oe("Conta atualizada com sucesso."),!0}catch(fe){return we(((W=(ee=fe==null?void 0:fe.response)==null?void 0:ee.data)==null?void 0:W.error)||"NÃ£o foi possÃ­vel atualizar a conta."),!1}finally{dt(!1)}},[Qe]),yi=x.useCallback(async B=>{var K,ee;we(""),Oe("");try{return await V_(B.id),await Qe(),Oe("Conta removida com sucesso."),!0}catch(W){return we(((ee=(K=W==null?void 0:W.response)==null?void 0:K.data)==null?void 0:ee.error)||"NÃ£o foi possÃ­vel remover a conta."),!1}},[Qe]),Oc=x.useCallback(async B=>{var K,ee;we(""),Oe(""),dt(!0);try{return await G_(B),await Qe(),Oe("Bem adicionado com sucesso."),!0}catch(W){return we(((ee=(K=W==null?void 0:W.response)==null?void 0:K.data)==null?void 0:ee.error)||"Não foi possível adicionar o bem."),!1}finally{dt(!1)}},[Qe]),Ic=x.useCallback(async(B,K)=>{var ee,W;we(""),Oe(""),dt(!0);try{return await Q_(B,K),await Qe(),Oe("Bem atualizado com sucesso."),!0}catch(fe){return we(((W=(ee=fe==null?void 0:fe.response)==null?void 0:ee.data)==null?void 0:W.error)||"Não foi possível atualizar o bem."),!1}finally{dt(!1)}},[Qe]),ds=x.useCallback(async B=>{var K,ee;we(""),Oe("");try{return await K_(B.id),await Qe(),Oe("Bem removido com sucesso."),!0}catch(W){return we(((ee=(K=W==null?void 0:W.response)==null?void 0:K.data)==null?void 0:ee.error)||"Não foi possível remover o bem."),!1}},[Qe]),Ro=x.useCallback(async B=>{var K,ee;we(""),Oe(""),dt(!0);try{return await J_(B),await Qe(),Oe("Passivo adicionado com sucesso."),!0}catch(W){return we(((ee=(K=W==null?void 0:W.response)==null?void 0:K.data)==null?void 0:ee.error)||"Não foi possível adicionar o passivo."),!1}finally{dt(!1)}},[Qe]),us=x.useCallback(async(B,K)=>{var ee,W;we(""),Oe(""),dt(!0);try{return await X_(B,K),await Qe(),Oe("Passivo atualizado com sucesso."),!0}catch(fe){return we(((W=(ee=fe==null?void 0:fe.response)==null?void 0:ee.data)==null?void 0:W.error)||"Não foi possível atualizar o passivo."),!1}finally{dt(!1)}},[Qe]),Ia=x.useCallback(async B=>{var K,ee;we(""),Oe("");try{return await Z_(B.id),await Qe(),Oe("Passivo removido com sucesso."),!0}catch(W){return we(((ee=(K=W==null?void 0:W.response)==null?void 0:K.data)==null?void 0:ee.error)||"Não foi possível remover o passivo."),!1}},[Qe]),Bc=x.useCallback(async(B,K)=>{var ee,W;we(""),Oe(""),dt(!0);try{const fe=await s2(B,K);return f(Te=>Te.map(Ue=>String(Ue.id)===String(B)?fe:Ue)),Oe("Objetivo atualizado com sucesso."),!0}catch(fe){const Te=(W=(ee=fe==null?void 0:fe.response)==null?void 0:ee.data)==null?void 0:W.error;return we(Te||"Não foi possível atualizar o objetivo. Confira a rota PATCH /api/objectives/:id."),!1}finally{dt(!1)}},[]),ps=x.useCallback(async B=>{var K,ee;we(""),Oe("");try{return await o2(B.id),f(W=>W.filter(fe=>String(fe.id)!==String(B.id))),Oe("Objetivo excluído com sucesso."),!0}catch(W){const fe=(ee=(K=W==null?void 0:W.response)==null?void 0:K.data)==null?void 0:ee.error;return we(fe||"Não foi possível excluir o objetivo. Confira a rota DELETE /api/objectives/:id."),!1}},[]),mt=x.useCallback(async(B,K)=>{var ee,W;we("");try{const fe=await l2(B,K);return f(Te=>Te.map(Ue=>String(Ue.id)===String(B)?{...Ue,steps:[...Ue.steps,fe]}:Ue)),!0}catch(fe){const Te=(W=(ee=fe==null?void 0:fe.response)==null?void 0:ee.data)==null?void 0:W.error;return we(Te||"Não foi possível adicionar a etapa. Confira a rota POST /api/objectives/:id/steps."),!1}},[]),Po=x.useCallback(async(B,K,ee)=>{var W,fe,Te;we(""),f(Ue=>Ue.map(nt=>String(nt.id)===String(B)?{...nt,steps:nt.steps.map(Ut=>String(Ut.id)===String(K.id)?{...Ut,status:ee?"concluido":"pendente"}:Ut)}:nt));try{const Ue=await c2(B,K.id,ee?"concluido":"pendente");return f(nt=>nt.map(Ut=>String(Ut.id)===String(B)?{...Ut,steps:Ut.steps.map(Yt=>String(Yt.id)===String(K.id)?Ue:Yt)}:Ut)),(W=Ue.activity)!=null&&W.message&&Oe(Ue.activity.message),!0}catch(Ue){f(Ut=>Ut.map(Yt=>String(Yt.id)===String(B)?{...Yt,steps:Yt.steps.map(sn=>String(sn.id)===String(K.id)?K:sn)}:Yt));const nt=(Te=(fe=Ue==null?void 0:Ue.response)==null?void 0:fe.data)==null?void 0:Te.error;return we(nt||"Não foi possível atualizar a etapa. Confira a rota PATCH /api/objectives/:id/steps/:stepId."),!1}},[]),zo=x.useCallback(async(B,K)=>{var ee,W;we("");try{return await d2(B,K.id),f(fe=>fe.map(Te=>String(Te.id)===String(B)?{...Te,steps:Te.steps.filter(Ue=>String(Ue.id)!==String(K.id))}:Te)),!0}catch(fe){const Te=(W=(ee=fe==null?void 0:fe.response)==null?void 0:ee.data)==null?void 0:W.error;return we(Te||"Não foi possível remover a etapa. Confira a rota DELETE /api/objectives/:id/steps/:stepId."),!1}},[]),ua=x.useCallback(async(B,K)=>{var ee,W,fe,Te;we(""),Oe(""),Wn(""),U(Ue=>Ue.map(nt=>{const Ut=nt.items.map(Yt=>String(Yt.id)===String(B)?{...Yt,is_completed:K}:Yt);return Ut.some((Yt,sn)=>Yt!==nt.items[sn])?{...nt,items:Ut,completed_items:Ut.filter(Yt=>Yt.is_completed).length}:nt}));try{const Ue=await y2(B,K);K&&Wn(((ee=Ue.activity)==null?void 0:ee.message)||"Você concluiu uma atividade da sua rotina."),(W=Ue.activity)!=null&&W.message&&!K&&Oe(Ue.activity.message);const{item_title:nt,title:Ut,...Yt}=Ue;U(sn=>sn.map(pa=>{const Jn=pa.items.map(vn=>String(vn.id)===String(Ue.id)?{...vn,...Yt,title:nt??Ut??vn.title}:vn);return{...pa,items:Jn,completed_items:Jn.filter(vn=>vn.is_completed).length}}))}catch(Ue){const nt=(Te=(fe=Ue==null?void 0:Ue.response)==null?void 0:fe.data)==null?void 0:Te.error;we(nt||"Não foi possível atualizar a conclusão do item. Confira a rota PATCH /api/daily/items/:id.");try{U(await Ws())}catch{we(`${nt||"Não foi possível atualizar a conclusão do item."} Não foi possível sincronizar novamente os itens de hoje.`)}}},[]),Ba=x.useCallback(async(B,K)=>{if(!K&&!window.confirm("Desativar esta tarefa? O histórico será preservado."))return!1;const ee=c.find(W=>String(W.id)===String(B));we(""),Oe(""),Un(!0);try{return K?await j2(B):await Mx(B),p(W=>W.map(fe=>String(fe.id)===String(B)?{...fe,is_active:K}:fe)),ee&&ee.is_active!==K&&Re(W=>({...W,activeTotal:W.activeTotal+(K?1:-1),inactiveTotal:W.inactiveTotal+(K?-1:1)})),Oe(K?"Tarefa ativada.":"Tarefa desativada."),!0}catch{return we(K?"Não foi possível ativar a tarefa. Confira se a API implementa PATCH /api/tasks/:id/activate.":"Não foi possível desativar a tarefa. Confira a rota PATCH /api/tasks/:id/deactivate."),!1}finally{Un(!1)}},[c]),No=x.useCallback(async()=>{var ee,W;const B=J.activeTotal;if(B===0||!window.confirm(`Desativar todas as ${B} tarefas ativas? O histórico será preservado.`))return;we(""),Oe(""),Un(!0);let K=0;try{const fe=await Ui(1,100),Te=[...fe.data];for(let nt=2;nt<=fe.pagination.totalPages;nt+=1){const Ut=await Ui(nt,100);Te.push(...Ut.data)}for(const nt of Te)nt.is_active&&(await Mx(nt.id),K+=1);if(!await cr(tr,kt)){we("Todas as tarefas foram desativadas, mas não foi possível atualizar a lista.");return}Oe(K===0?"Todas as tarefas já estavam desativadas.":`${K} ${K===1?"tarefa desativada":"tarefas desativadas"}. O histórico foi preservado.`)}catch(fe){const Te=(W=(ee=fe==null?void 0:fe.response)==null?void 0:ee.data)==null?void 0:W.error,Ue=await cr(tr,kt),nt=K>0?`Desativação parcial: ${K} tarefas foram desativadas antes da falha.${Te?` Erro: ${Te}`:""}`:Te||"Não foi possível desativar todas as tarefas.";we(Ue?nt:`${nt} Também não foi possível atualizar a lista.`)}finally{Un(!1)}},[cr,kt,tr,J.activeTotal]),fs=x.useCallback(async B=>{Wt(B)},[]),hs=x.useCallback(async()=>{var B,K;if(!(!kr||lt)){we(""),Oe(""),wt(!0);try{await v2(kr.id);const ee=c.length===1&&tr>1?tr-1:tr;rr(ee),await cr(ee,kt),Wt(null),Oe("Tarefa excluída com sucesso.")}catch(ee){const W=(K=(B=ee==null?void 0:ee.response)==null?void 0:B.data)==null?void 0:K.error;we(W||"Não foi possível excluir a tarefa. Confira se a API implementa DELETE /api/tasks/:id."),Wt(null)}finally{wt(!1)}}},[lt,cr,kt,tr,kr,c.length]),Yn=x.useMemo(()=>({tasks:c,loading:$t,onNavigate:zt,onDeactivate:B=>{Ba(B,!1)}}),[c,$t,zt,Ba]);async function zn(B){const K=await a_(B);return Ur(K),Hr(!0),zt("/today"),K}async function Nn(B){return await n_(B)}async function Mn(){try{await s_()}finally{Ur(null),zt("/login")}}if(!Gn)return null;if(l==="login"||!_t)return e.jsx(jC,{onLogin:zn,onRegister:Nn});let Ct;switch(l){case"planning":Ct=e.jsx(d4,{tasks:c,dailyRecords:je,loading:$t,onNavigate:zt,onToggleItem:(B,K)=>{ua(B,K)},onDeactivate:B=>{Ba(B,!1)},history:{mode:at,days:pe,periods:st,selectedDay:ie,selectedPeriod:Le,selectedDate:Pt,dayDetails:Vt,pagination:Nr,detailLoading:hr,referenceDate:Et,onModeChange:B=>{lr(B),vt(1),bt(void 0),et(void 0),at===B&&B!=="daily"&&yt(1,B,void 0)},onPeriodSearch:B=>{bt(B),vt(1),et(void 0),Et===B&&yt(1,at,B)},onSelectDate:Xe,onSelectPeriod:gn,onPageChange:vt}});break;case"create":Ct=e.jsx(jS,{saving:qr,onCreate:Sr,onValidationError:we});break;case"today":Ct=e.jsx(D1,{...Yn,dailyRecords:je,onToggleItem:(B,K)=>{ua(B,K)}});break;case"week":Ct=e.jsx(F1,{...Yn,dailyRecords:je,onToggleItem:(B,K)=>{ua(B,K)}});break;case"month":Ct=e.jsx(T1,{...Yn,dailyRecords:je,onToggleItem:(B,K)=>{ua(B,K)}});break;case"completed":Ct=e.jsx(N1,{dailyRecords:je,loading:$t,onNavigate:zt});break;case"goals":Ct=e.jsx(JS,{goals:h,loading:$t,saving:qr,onCreate:Kn,onUpdate:Bc,onDelete:ps,onAddStep:mt,onToggleStep:Po,onDeleteStep:zo});break;case"study-resources":Ct=e.jsx(i3,{resources:X,areas:oe,loading:$t,saving:qr,pagination:ke,filters:y,onFiltersChange:B=>{q(B),be(1)},onPageChange:be,onCreate:Fc,onDelete:gi,onEdit:B=>{ge(B),xe(!1),zt(`/study-resources/${encodeURIComponent(String(B.id))}/edit`)}});break;case"study-resource-edit":Ct=e.jsx(d3,{resource:Q,loading:le,saving:qr,onBack:()=>zt("/study-resources"),onSave:B=>s!=null&&s.resourceId?Lc(s.resourceId,B):Promise.resolve(!1)});break;case"finances":Ct=e.jsx(y3,{accounts:H,assets:w,liabilities:ae,summary:se,loading:$t,saving:qr,onCreate:vi,onUpdate:Oa,onDelete:yi,onCreateAsset:Oc,onUpdateAsset:Ic,onDeleteAsset:ds,onCreateLiability:Ro,onUpdateLiability:us,onDeleteLiability:Ia});break;case"dividends":Ct=e.jsx(Hg,{},"dividends");break;case"fixed-income":Ct=e.jsx(Hg,{assetType:"renda_fixa"},"fixed-income");break;case"opportunities":Ct=e.jsx(m$,{});break;case"expenses":Ct=e.jsx(d5,{});break;case"fuel-calculator":Ct=e.jsx($5,{});break;case"english-study":Ct=e.jsx(V3,{onNavigate:B=>{B==="/study-resources"&&(q({area:"Inglês",type:"",search:""}),be(1)),zt(B)}});break;case"schedule":Ct=e.jsx(N4,{events:g,alerts:V,loading:$t,alertsLoading:F,saving:qr,query:b,pagination:O,alertPagination:j,onApplyFilter:B=>{k(B),N(1),JSON.stringify(b)===JSON.stringify(B)&&C===1&&ct(B,1)},onPageChange:N,onAlertPageChange:B=>{Ft(B)},onCreate:nr,onUpdate:cs,onDelete:Vr});break;case"details":{const B=c.find(K=>String(K.id)===String(s==null?void 0:s.taskId));Ct=e.jsx(x$,{task:B,loading:$t,saving:qr,statusChanging:Fa,onBack:()=>zt("/tasks"),onSave:Qn,onDelete:K=>{const ee=c.find(W=>String(W.id)===String(K));ee&&fs(ee)},onSetActive:Ba,onValidationError:we});break}case"history":Ct=e.jsx(M1,{mode:at,days:pe,periods:st,selectedDay:ie,selectedPeriod:Le,selectedDate:Pt,dayDetails:Vt,pagination:Nr,loading:$t,detailLoading:hr,referenceDate:Et,onModeChange:B=>{lr(B),vt(1),bt(void 0),et(void 0),at===B&&B!=="daily"&&yt(1,B,void 0)},onPeriodSearch:B=>{bt(B),vt(1),et(void 0),Et===B&&yt(1,at,B)},onSelectDate:Xe,onSelectPeriod:gn,onPageChange:vt});break;case"list":default:Ct=e.jsx(V$,{...Yn,statusFilter:Br,priorityFilter:qn,pagination:J,onPageChange:rr,onPageSizeChange:B=>{Pn(B),rr(1)},onStatusFilterChange:B=>{Mr(B),rr(1)},onPriorityFilterChange:B=>{ca(B),rr(1)},onDeactivateAll:()=>{No()},statusChanging:Fa,onDelete:B=>{fs(B)}})}return e.jsxs(yS,{page:l,error:La,notice:Hn,celebration:Vn,onNavigate:zt,user:_t,onLogout:()=>{Mn()},onDismissError:()=>we(""),onDismissNotice:()=>Oe(""),onDismissCelebration:()=>Wn(""),children:[Ct,e.jsx(Tc,{open:kr!==null,title:"Deseja excluir esta tarefa?",description:kr?`A tarefa “${kr.title}” será removida permanentemente, incluindo seus itens.`:"",busy:lt,onCancel:()=>{lt||Wt(null)},onConfirm:()=>{hs()}})]})}function Q$(){return e.jsx(Xk,{children:e.jsx(G$,{})})}const K$=Vj`
  * { box-sizing: border-box; }

  :root {
    color-scheme: light;
    --page-bg: #F8FAFC;
    --surface: #FFFFFF;
    --surface-raised: #F1F5F9;
    --text: #0F172A;
    --muted: #64748B;
    --text-subtle: #94A3B8;
    --border: #E2E8F0;
    --primary: #2563EB;
    --primary-strong: #1D4ED8;
    --primary-soft: #DBEAFE;
    --primary-contrast: #FFFFFF;
    --focus: rgba(37, 99, 235, .28);
    --success: #16A34A;
    --success-soft: #DCFCE7;
    --success-border: #BBF7D0;
    --success-hover: #15803D;
    --warning: #D97706;
    --warning-soft: #FEF3C7;
    --warning-border: #FDE68A;
    --error: #DC2626;
    --error-soft: #FEF2F2;
    --error-border: #FECACA;
    --error-contrast: #FFFFFF;
    --info: #0284C7;
    --info-soft: #E0F2FE;
    --info-border: #BAE6FD;
    --scroll-track: #F1F5F9;
    --scroll-thumb: #CBD5E1;
    --shadow: rgba(15, 23, 42, .08);
    --shadow-raised: 0 8px 24px var(--shadow);
    --space-1: 4px;
    --space-2: 8px;
    --space-3: 12px;
    --space-4: 16px;
    --space-5: 20px;
    --space-6: 24px;
    --space-8: 32px;
    --space-10: 40px;
    --space-12: 48px;
    --radius-sm: 6px;
    --radius-md: 10px;
    --radius-lg: 14px;
    --radius-xl: 18px;
    --radius-full: 999px;
    --transition-fast: 150ms ease;
    --transition-normal: 200ms ease;
  }

  html[data-theme='dark'] {
    color-scheme: dark;
    --page-bg: #0B1120;
    --surface: #111827;
    --surface-raised: #1E293B;
    --text: #F8FAFC;
    --muted: #CBD5E1;
    --text-subtle: #94A3B8;
    --border: #334155;
    --primary: #60A5FA;
    --primary-strong: #93C5FD;
    --primary-soft: #172554;
    --primary-contrast: #0B1120;
    --focus: rgba(96, 165, 250, .38);
    --success: #4ADE80;
    --success-soft: #142D21;
    --success-border: #166534;
    --success-hover: #86EFAC;
    --warning: #FBBF24;
    --warning-soft: #3A2A12;
    --warning-border: #854D0E;
    --error: #F87171;
    --error-soft: #3B1D25;
    --error-border: #7F1D1D;
    --error-contrast: #0B1120;
    --info: #38BDF8;
    --info-soft: #102C40;
    --info-border: #075985;
    --scroll-track: #111827;
    --scroll-thumb: #475569;
    --shadow: rgba(0, 0, 0, .24);
  }

  html { scroll-behavior: smooth; }
  body {
    min-width: 320px;
    margin: 0;
    color: var(--text);
    background: var(--page-bg);
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    font-size: 14px;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    transition: background var(--transition-normal), color var(--transition-normal);
  }

  button, input, textarea, select { font: inherit; }
  button { cursor: pointer; }
  button:disabled { cursor: not-allowed; opacity: .6; }
  input, textarea, select { accent-color: var(--primary); }
  :focus-visible { outline: 3px solid var(--focus); outline-offset: 2px; }
  ::selection { color: var(--primary-contrast); background: var(--primary); }
  ::-webkit-scrollbar { width: 10px; height: 10px; }
  ::-webkit-scrollbar-track { background: var(--scroll-track); }
  ::-webkit-scrollbar-thumb { border: 2px solid var(--scroll-track); border-radius: var(--radius-full); background: var(--scroll-thumb); }

  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
    *, *::before, *::after { animation-duration: .01ms !important; transition-duration: .01ms !important; }
  }
`,Y$={colors:{navy:"#0F172A",blue:"#2563EB",muted:"#64748B",border:"#E2E8F0",background:"#F8FAFC"}};D0.createRoot(document.getElementById("root")).render(e.jsx(br.StrictMode,{children:e.jsxs(Ij,{theme:Y$,children:[e.jsx(K$,{}),e.jsx(Q$,{})]})}));
