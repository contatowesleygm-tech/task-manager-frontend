(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))l(c);new MutationObserver(c=>{for(const p of c)if(p.type==="childList")for(const f of p.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&l(f)}).observe(document,{childList:!0,subtree:!0});function s(c){const p={};return c.integrity&&(p.integrity=c.integrity),c.referrerPolicy&&(p.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?p.credentials="include":c.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function l(c){if(c.ep)return;c.ep=!0;const p=s(c);fetch(c.href,p)}})();function Ig(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var nu={exports:{}},Rs={},au={exports:{}},Qe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rm;function o0(){if(Rm)return Qe;Rm=1;var r=Symbol.for("react.element"),i=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),p=Symbol.for("react.provider"),f=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),w=Symbol.iterator;function S(E){return E===null||typeof E!="object"?null:(E=w&&E[w]||E["@@iterator"],typeof E=="function"?E:null)}var z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O=Object.assign,R={};function A(E,b,re){this.props=E,this.context=b,this.refs=R,this.updater=re||z}A.prototype.isReactComponent={},A.prototype.setState=function(E,b){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,b,"setState")},A.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function C(){}C.prototype=A.prototype;function $(E,b,re){this.props=E,this.context=b,this.refs=R,this.updater=re||z}var G=$.prototype=new C;G.constructor=$,O(G,A.prototype),G.isPureReactComponent=!0;var I=Array.isArray,J=Object.prototype.hasOwnProperty,Q={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function ae(E,b,re){var ce,T={},ie=null,ve=null;if(b!=null)for(ce in b.ref!==void 0&&(ve=b.ref),b.key!==void 0&&(ie=""+b.key),b)J.call(b,ce)&&!F.hasOwnProperty(ce)&&(T[ce]=b[ce]);var ye=arguments.length-2;if(ye===1)T.children=re;else if(1<ye){for(var U=Array(ye),de=0;de<ye;de++)U[de]=arguments[de+2];T.children=U}if(E&&E.defaultProps)for(ce in ye=E.defaultProps,ye)T[ce]===void 0&&(T[ce]=ye[ce]);return{$$typeof:r,type:E,key:ie,ref:ve,props:T,_owner:Q.current}}function k(E,b){return{$$typeof:r,type:E.type,key:b,ref:E.ref,props:E.props,_owner:E._owner}}function y(E){return typeof E=="object"&&E!==null&&E.$$typeof===r}function B(E){var b={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function(re){return b[re]})}var le=/\/+/g;function je(E,b){return typeof E=="object"&&E!==null&&E.key!=null?B(""+E.key):b.toString(36)}function we(E,b,re,ce,T){var ie=typeof E;(ie==="undefined"||ie==="boolean")&&(E=null);var ve=!1;if(E===null)ve=!0;else switch(ie){case"string":case"number":ve=!0;break;case"object":switch(E.$$typeof){case r:case i:ve=!0}}if(ve)return ve=E,T=T(ve),E=ce===""?"."+je(ve,0):ce,I(T)?(re="",E!=null&&(re=E.replace(le,"$&/")+"/"),we(T,b,re,"",function(de){return de})):T!=null&&(y(T)&&(T=k(T,re+(!T.key||ve&&ve.key===T.key?"":(""+T.key).replace(le,"$&/")+"/")+E)),b.push(T)),1;if(ve=0,ce=ce===""?".":ce+":",I(E))for(var ye=0;ye<E.length;ye++){ie=E[ye];var U=ce+je(ie,ye);ve+=we(ie,b,re,U,T)}else if(U=S(E),typeof U=="function")for(E=U.call(E),ye=0;!(ie=E.next()).done;)ie=ie.value,U=ce+je(ie,ye++),ve+=we(ie,b,re,U,T);else if(ie==="object")throw b=String(E),Error("Objects are not valid as a React child (found: "+(b==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return ve}function Pe(E,b,re){if(E==null)return E;var ce=[],T=0;return we(E,ce,"","",function(ie){return b.call(re,ie,T++)}),ce}function K(E){if(E._status===-1){var b=E._result;b=b(),b.then(function(re){(E._status===0||E._status===-1)&&(E._status=1,E._result=re)},function(re){(E._status===0||E._status===-1)&&(E._status=2,E._result=re)}),E._status===-1&&(E._status=0,E._result=b)}if(E._status===1)return E._result.default;throw E._result}var he={current:null},oe={transition:null},me={ReactCurrentDispatcher:he,ReactCurrentBatchConfig:oe,ReactCurrentOwner:Q};function H(){throw Error("act(...) is not supported in production builds of React.")}return Qe.Children={map:Pe,forEach:function(E,b,re){Pe(E,function(){b.apply(this,arguments)},re)},count:function(E){var b=0;return Pe(E,function(){b++}),b},toArray:function(E){return Pe(E,function(b){return b})||[]},only:function(E){if(!y(E))throw Error("React.Children.only expected to receive a single React element child.");return E}},Qe.Component=A,Qe.Fragment=s,Qe.Profiler=c,Qe.PureComponent=$,Qe.StrictMode=l,Qe.Suspense=x,Qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=me,Qe.act=H,Qe.cloneElement=function(E,b,re){if(E==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+E+".");var ce=O({},E.props),T=E.key,ie=E.ref,ve=E._owner;if(b!=null){if(b.ref!==void 0&&(ie=b.ref,ve=Q.current),b.key!==void 0&&(T=""+b.key),E.type&&E.type.defaultProps)var ye=E.type.defaultProps;for(U in b)J.call(b,U)&&!F.hasOwnProperty(U)&&(ce[U]=b[U]===void 0&&ye!==void 0?ye[U]:b[U])}var U=arguments.length-2;if(U===1)ce.children=re;else if(1<U){ye=Array(U);for(var de=0;de<U;de++)ye[de]=arguments[de+2];ce.children=ye}return{$$typeof:r,type:E.type,key:T,ref:ie,props:ce,_owner:ve}},Qe.createContext=function(E){return E={$$typeof:f,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},E.Provider={$$typeof:p,_context:E},E.Consumer=E},Qe.createElement=ae,Qe.createFactory=function(E){var b=ae.bind(null,E);return b.type=E,b},Qe.createRef=function(){return{current:null}},Qe.forwardRef=function(E){return{$$typeof:m,render:E}},Qe.isValidElement=y,Qe.lazy=function(E){return{$$typeof:j,_payload:{_status:-1,_result:E},_init:K}},Qe.memo=function(E,b){return{$$typeof:_,type:E,compare:b===void 0?null:b}},Qe.startTransition=function(E){var b=oe.transition;oe.transition={};try{E()}finally{oe.transition=b}},Qe.unstable_act=H,Qe.useCallback=function(E,b){return he.current.useCallback(E,b)},Qe.useContext=function(E){return he.current.useContext(E)},Qe.useDebugValue=function(){},Qe.useDeferredValue=function(E){return he.current.useDeferredValue(E)},Qe.useEffect=function(E,b){return he.current.useEffect(E,b)},Qe.useId=function(){return he.current.useId()},Qe.useImperativeHandle=function(E,b,re){return he.current.useImperativeHandle(E,b,re)},Qe.useInsertionEffect=function(E,b){return he.current.useInsertionEffect(E,b)},Qe.useLayoutEffect=function(E,b){return he.current.useLayoutEffect(E,b)},Qe.useMemo=function(E,b){return he.current.useMemo(E,b)},Qe.useReducer=function(E,b,re){return he.current.useReducer(E,b,re)},Qe.useRef=function(E){return he.current.useRef(E)},Qe.useState=function(E){return he.current.useState(E)},Qe.useSyncExternalStore=function(E,b,re){return he.current.useSyncExternalStore(E,b,re)},Qe.useTransition=function(){return he.current.useTransition()},Qe.version="18.3.1",Qe}var Pm;function Ap(){return Pm||(Pm=1,au.exports=o0()),au.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zm;function l0(){if(zm)return Rs;zm=1;var r=Ap(),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function f(m,x,_){var j,w={},S=null,z=null;_!==void 0&&(S=""+_),x.key!==void 0&&(S=""+x.key),x.ref!==void 0&&(z=x.ref);for(j in x)l.call(x,j)&&!p.hasOwnProperty(j)&&(w[j]=x[j]);if(m&&m.defaultProps)for(j in x=m.defaultProps,x)w[j]===void 0&&(w[j]=x[j]);return{$$typeof:i,type:m,key:S,ref:z,props:w,_owner:c.current}}return Rs.Fragment=s,Rs.jsx=f,Rs.jsxs=f,Rs}var Nm;function c0(){return Nm||(Nm=1,nu.exports=l0()),nu.exports}var e=c0(),v=Ap();const dr=Ig(v);var vl={},iu={exports:{}},kr={},su={exports:{}},ou={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mm;function d0(){return Mm||(Mm=1,(function(r){function i(oe,me){var H=oe.length;oe.push(me);e:for(;0<H;){var E=H-1>>>1,b=oe[E];if(0<c(b,me))oe[E]=me,oe[H]=b,H=E;else break e}}function s(oe){return oe.length===0?null:oe[0]}function l(oe){if(oe.length===0)return null;var me=oe[0],H=oe.pop();if(H!==me){oe[0]=H;e:for(var E=0,b=oe.length,re=b>>>1;E<re;){var ce=2*(E+1)-1,T=oe[ce],ie=ce+1,ve=oe[ie];if(0>c(T,H))ie<b&&0>c(ve,T)?(oe[E]=ve,oe[ie]=H,E=ie):(oe[E]=T,oe[ce]=H,E=ce);else if(ie<b&&0>c(ve,H))oe[E]=ve,oe[ie]=H,E=ie;else break e}}return me}function c(oe,me){var H=oe.sortIndex-me.sortIndex;return H!==0?H:oe.id-me.id}if(typeof performance=="object"&&typeof performance.now=="function"){var p=performance;r.unstable_now=function(){return p.now()}}else{var f=Date,m=f.now();r.unstable_now=function(){return f.now()-m}}var x=[],_=[],j=1,w=null,S=3,z=!1,O=!1,R=!1,A=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,$=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function G(oe){for(var me=s(_);me!==null;){if(me.callback===null)l(_);else if(me.startTime<=oe)l(_),me.sortIndex=me.expirationTime,i(x,me);else break;me=s(_)}}function I(oe){if(R=!1,G(oe),!O)if(s(x)!==null)O=!0,K(J);else{var me=s(_);me!==null&&he(I,me.startTime-oe)}}function J(oe,me){O=!1,R&&(R=!1,C(ae),ae=-1),z=!0;var H=S;try{for(G(me),w=s(x);w!==null&&(!(w.expirationTime>me)||oe&&!B());){var E=w.callback;if(typeof E=="function"){w.callback=null,S=w.priorityLevel;var b=E(w.expirationTime<=me);me=r.unstable_now(),typeof b=="function"?w.callback=b:w===s(x)&&l(x),G(me)}else l(x);w=s(x)}if(w!==null)var re=!0;else{var ce=s(_);ce!==null&&he(I,ce.startTime-me),re=!1}return re}finally{w=null,S=H,z=!1}}var Q=!1,F=null,ae=-1,k=5,y=-1;function B(){return!(r.unstable_now()-y<k)}function le(){if(F!==null){var oe=r.unstable_now();y=oe;var me=!0;try{me=F(!0,oe)}finally{me?je():(Q=!1,F=null)}}else Q=!1}var je;if(typeof $=="function")je=function(){$(le)};else if(typeof MessageChannel<"u"){var we=new MessageChannel,Pe=we.port2;we.port1.onmessage=le,je=function(){Pe.postMessage(null)}}else je=function(){A(le,0)};function K(oe){F=oe,Q||(Q=!0,je())}function he(oe,me){ae=A(function(){oe(r.unstable_now())},me)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(oe){oe.callback=null},r.unstable_continueExecution=function(){O||z||(O=!0,K(J))},r.unstable_forceFrameRate=function(oe){0>oe||125<oe?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<oe?Math.floor(1e3/oe):5},r.unstable_getCurrentPriorityLevel=function(){return S},r.unstable_getFirstCallbackNode=function(){return s(x)},r.unstable_next=function(oe){switch(S){case 1:case 2:case 3:var me=3;break;default:me=S}var H=S;S=me;try{return oe()}finally{S=H}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(oe,me){switch(oe){case 1:case 2:case 3:case 4:case 5:break;default:oe=3}var H=S;S=oe;try{return me()}finally{S=H}},r.unstable_scheduleCallback=function(oe,me,H){var E=r.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?E+H:E):H=E,oe){case 1:var b=-1;break;case 2:b=250;break;case 5:b=1073741823;break;case 4:b=1e4;break;default:b=5e3}return b=H+b,oe={id:j++,callback:me,priorityLevel:oe,startTime:H,expirationTime:b,sortIndex:-1},H>E?(oe.sortIndex=H,i(_,oe),s(x)===null&&oe===s(_)&&(R?(C(ae),ae=-1):R=!0,he(I,H-E))):(oe.sortIndex=b,i(x,oe),O||z||(O=!0,K(J))),oe},r.unstable_shouldYield=B,r.unstable_wrapCallback=function(oe){var me=S;return function(){var H=S;S=me;try{return oe.apply(this,arguments)}finally{S=H}}}})(ou)),ou}var Tm;function u0(){return Tm||(Tm=1,su.exports=d0()),su.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Am;function p0(){if(Am)return kr;Am=1;var r=Ap(),i=u0();function s(t){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+t,a=1;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var l=new Set,c={};function p(t,n){f(t,n),f(t+"Capture",n)}function f(t,n){for(c[t]=n,t=0;t<n.length;t++)l.add(n[t])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),x=Object.prototype.hasOwnProperty,_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,j={},w={};function S(t){return x.call(w,t)?!0:x.call(j,t)?!1:_.test(t)?w[t]=!0:(j[t]=!0,!1)}function z(t,n,a,o){if(a!==null&&a.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return o?!1:a!==null?!a.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function O(t,n,a,o){if(n===null||typeof n>"u"||z(t,n,a,o))return!0;if(o)return!1;if(a!==null)switch(a.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function R(t,n,a,o,d,u,g){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=o,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=t,this.type=n,this.sanitizeURL=u,this.removeEmptyString=g}var A={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){A[t]=new R(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var n=t[0];A[n]=new R(n,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){A[t]=new R(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){A[t]=new R(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){A[t]=new R(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){A[t]=new R(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){A[t]=new R(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){A[t]=new R(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){A[t]=new R(t,5,!1,t.toLowerCase(),null,!1,!1)});var C=/[\-:]([a-z])/g;function $(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var n=t.replace(C,$);A[n]=new R(n,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var n=t.replace(C,$);A[n]=new R(n,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var n=t.replace(C,$);A[n]=new R(n,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){A[t]=new R(t,1,!1,t.toLowerCase(),null,!1,!1)}),A.xlinkHref=new R("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){A[t]=new R(t,1,!1,t.toLowerCase(),null,!0,!0)});function G(t,n,a,o){var d=A.hasOwnProperty(n)?A[n]:null;(d!==null?d.type!==0:o||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(O(n,a,d,o)&&(a=null),o||d===null?S(n)&&(a===null?t.removeAttribute(n):t.setAttribute(n,""+a)):d.mustUseProperty?t[d.propertyName]=a===null?d.type===3?!1:"":a:(n=d.attributeName,o=d.attributeNamespace,a===null?t.removeAttribute(n):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,o?t.setAttributeNS(o,n,a):t.setAttribute(n,a))))}var I=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,J=Symbol.for("react.element"),Q=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),ae=Symbol.for("react.strict_mode"),k=Symbol.for("react.profiler"),y=Symbol.for("react.provider"),B=Symbol.for("react.context"),le=Symbol.for("react.forward_ref"),je=Symbol.for("react.suspense"),we=Symbol.for("react.suspense_list"),Pe=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),he=Symbol.for("react.offscreen"),oe=Symbol.iterator;function me(t){return t===null||typeof t!="object"?null:(t=oe&&t[oe]||t["@@iterator"],typeof t=="function"?t:null)}var H=Object.assign,E;function b(t){if(E===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);E=n&&n[1]||""}return`
`+E+t}var re=!1;function ce(t,n){if(!t||re)return"";re=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(te){var o=te}Reflect.construct(t,[],n)}else{try{n.call()}catch(te){o=te}t.call(n.prototype)}else{try{throw Error()}catch(te){o=te}t()}}catch(te){if(te&&o&&typeof te.stack=="string"){for(var d=te.stack.split(`
`),u=o.stack.split(`
`),g=d.length-1,P=u.length-1;1<=g&&0<=P&&d[g]!==u[P];)P--;for(;1<=g&&0<=P;g--,P--)if(d[g]!==u[P]){if(g!==1||P!==1)do if(g--,P--,0>P||d[g]!==u[P]){var N=`
`+d[g].replace(" at new "," at ");return t.displayName&&N.includes("<anonymous>")&&(N=N.replace("<anonymous>",t.displayName)),N}while(1<=g&&0<=P);break}}}finally{re=!1,Error.prepareStackTrace=a}return(t=t?t.displayName||t.name:"")?b(t):""}function T(t){switch(t.tag){case 5:return b(t.type);case 16:return b("Lazy");case 13:return b("Suspense");case 19:return b("SuspenseList");case 0:case 2:case 15:return t=ce(t.type,!1),t;case 11:return t=ce(t.type.render,!1),t;case 1:return t=ce(t.type,!0),t;default:return""}}function ie(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case F:return"Fragment";case Q:return"Portal";case k:return"Profiler";case ae:return"StrictMode";case je:return"Suspense";case we:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case B:return(t.displayName||"Context")+".Consumer";case y:return(t._context.displayName||"Context")+".Provider";case le:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Pe:return n=t.displayName||null,n!==null?n:ie(t.type)||"Memo";case K:n=t._payload,t=t._init;try{return ie(t(n))}catch{}}return null}function ve(t){var n=t.type;switch(t.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=n.render,t=t.displayName||t.name||"",n.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ie(n);case 8:return n===ae?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function ye(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function U(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function de(t){var n=U(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),o=""+t[n];if(!t.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,u=a.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return d.call(this)},set:function(g){o=""+g,u.call(this,g)}}),Object.defineProperty(t,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(g){o=""+g},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function st(t){t._valueTracker||(t._valueTracker=de(t))}function et(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=U(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function ot(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function tt(t,n){var a=n.checked;return H({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??t._wrapperState.initialChecked})}function tr(t,n){var a=n.defaultValue==null?"":n.defaultValue,o=n.checked!=null?n.checked:n.defaultChecked;a=ye(n.value!=null?n.value:a),t._wrapperState={initialChecked:o,initialValue:a,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Mt(t,n){n=n.checked,n!=null&&G(t,"checked",n,!1)}function gt(t,n){Mt(t,n);var a=ye(n.value),o=n.type;if(a!=null)o==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+a):t.value!==""+a&&(t.value=""+a);else if(o==="submit"||o==="reset"){t.removeAttribute("value");return}n.hasOwnProperty("value")?Xe(t,n.type,a):n.hasOwnProperty("defaultValue")&&Xe(t,n.type,ye(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(t.defaultChecked=!!n.defaultChecked)}function Ae(t,n,a){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var o=n.type;if(!(o!=="submit"&&o!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+t._wrapperState.initialValue,a||n===t.value||(t.value=n),t.defaultValue=n}a=t.name,a!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,a!==""&&(t.name=a)}function Xe(t,n,a){(n!=="number"||ot(t.ownerDocument)!==t)&&(a==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+a&&(t.defaultValue=""+a))}var se=Array.isArray;function Be(t,n,a,o){if(t=t.options,n){n={};for(var d=0;d<a.length;d++)n["$"+a[d]]=!0;for(a=0;a<t.length;a++)d=n.hasOwnProperty("$"+t[a].value),t[a].selected!==d&&(t[a].selected=d),d&&o&&(t[a].defaultSelected=!0)}else{for(a=""+ye(a),n=null,d=0;d<t.length;d++){if(t[d].value===a){t[d].selected=!0,o&&(t[d].defaultSelected=!0);return}n!==null||t[d].disabled||(n=t[d])}n!==null&&(n.selected=!0)}}function $t(t,n){if(n.dangerouslySetInnerHTML!=null)throw Error(s(91));return H({},n,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ut(t,n){var a=n.value;if(a==null){if(a=n.children,n=n.defaultValue,a!=null){if(n!=null)throw Error(s(92));if(se(a)){if(1<a.length)throw Error(s(93));a=a[0]}n=a}n==null&&(n=""),a=n}t._wrapperState={initialValue:ye(a)}}function vt(t,n){var a=ye(n.value),o=ye(n.defaultValue);a!=null&&(a=""+a,a!==t.value&&(t.value=a),n.defaultValue==null&&t.defaultValue!==a&&(t.defaultValue=a)),o!=null&&(t.defaultValue=""+o)}function Rt(t){var n=t.textContent;n===t._wrapperState.initialValue&&n!==""&&n!==null&&(t.value=n)}function rt(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function nt(t,n){return t==null||t==="http://www.w3.org/1999/xhtml"?rt(n):t==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var pr,pn=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,a,o,d){MSApp.execUnsafeLocalFunction(function(){return t(n,a,o,d)})}:t})(function(t,n){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=n;else{for(pr=pr||document.createElement("div"),pr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=pr.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;n.firstChild;)t.appendChild(n.firstChild)}});function rr(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var nr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},fn=["Webkit","ms","Moz","O"];Object.keys(nr).forEach(function(t){fn.forEach(function(n){n=n+t.charAt(0).toUpperCase()+t.substring(1),nr[n]=nr[t]})});function M(t,n,a){return n==null||typeof n=="boolean"||n===""?"":a||typeof n!="number"||n===0||nr.hasOwnProperty(t)&&nr[t]?(""+n).trim():n+"px"}function _e(t,n){t=t.style;for(var a in n)if(n.hasOwnProperty(a)){var o=a.indexOf("--")===0,d=M(a,n[a],o);a==="float"&&(a="cssFloat"),o?t.setProperty(a,d):t[a]=d}}var Ge=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function at(t,n){if(n){if(Ge[t]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(s(137,t));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(s(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(s(61))}if(n.style!=null&&typeof n.style!="object")throw Error(s(62))}}function Ke(t,n){if(t.indexOf("-")===-1)return typeof n.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mt=null;function Zr(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Z=null,Ye=null,Ct=null;function Pt(t){if(t=hs(t)){if(typeof Z!="function")throw Error(s(280));var n=t.stateNode;n&&(n=Mo(n),Z(t.stateNode,t.type,n))}}function hn(t){Ye?Ct?Ct.push(t):Ct=[t]:Ye=t}function dt(){if(Ye){var t=Ye,n=Ct;if(Ct=Ye=null,Pt(t),n)for(t=0;t<n.length;t++)Pt(n[t])}}function fo(t,n){return t(n)}function Vi(){}var Wi=!1;function ke(t,n,a){if(Wi)return t(n,a);Wi=!0;try{return fo(t,n,a)}finally{Wi=!1,(Ye!==null||Ct!==null)&&(Vi(),dt())}}function xa(t,n){var a=t.stateNode;if(a===null)return null;var o=Mo(a);if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Fe=!1;if(m)try{var ga={};Object.defineProperty(ga,"passive",{get:function(){Fe=!0}}),window.addEventListener("test",ga,ga),window.removeEventListener("test",ga,ga)}catch{Fe=!1}function Gi(t,n,a,o,d,u,g,P,N){var te=Array.prototype.slice.call(arguments,3);try{n.apply(a,te)}catch(fe){this.onError(fe)}}var Ir=!1,En=null,$n=!1,Ja=null,In={onError:function(t){Ir=!0,En=t}};function Za(t,n,a,o,d,u,g,P,N){Ir=!1,En=null,Gi.apply(In,arguments)}function va(t,n,a,o,d,u,g,P,N){if(Za.apply(this,arguments),Ir){if(Ir){var te=En;Ir=!1,En=null}else throw Error(s(198));$n||($n=!0,Ja=te)}}function mn(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function Tt(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function Br(t){if(mn(t)!==t)throw Error(s(188))}function ho(t){var n=t.alternate;if(!n){if(n=mn(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,o=n;;){var d=a.return;if(d===null)break;var u=d.alternate;if(u===null){if(o=d.return,o!==null){a=o;continue}break}if(d.child===u.child){for(u=d.child;u;){if(u===a)return Br(d),t;if(u===o)return Br(d),n;u=u.sibling}throw Error(s(188))}if(a.return!==o.return)a=d,o=u;else{for(var g=!1,P=d.child;P;){if(P===a){g=!0,a=d,o=u;break}if(P===o){g=!0,o=d,a=u;break}P=P.sibling}if(!g){for(P=u.child;P;){if(P===a){g=!0,a=u,o=d;break}if(P===o){g=!0,o=u,a=d;break}P=P.sibling}if(!g)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function Qi(t){return t=ho(t),t!==null?Ki(t):null}function Ki(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var n=Ki(t);if(n!==null)return n;t=t.sibling}return null}var Yi=i.unstable_scheduleCallback,Xi=i.unstable_cancelCallback,en=i.unstable_shouldYield,vr=i.unstable_requestPaint,yt=i.unstable_now,At=i.unstable_getCurrentPriorityLevel,xn=i.unstable_ImmediatePriority,Ji=i.unstable_UserBlockingPriority,ya=i.unstable_NormalPriority,wc=i.unstable_LowPriority,mo=i.unstable_IdlePriority,ei=null,qr=null;function _c(t){if(qr&&typeof qr.onCommitFiberRoot=="function")try{qr.onCommitFiberRoot(ei,t,void 0,(t.current.flags&128)===128)}catch{}}var Er=Math.clz32?Math.clz32:Sc,Bn=Math.log,kc=Math.LN2;function Sc(t){return t>>>=0,t===0?32:31-(Bn(t)/kc|0)|0}var ti=64,ri=4194304;function ja(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ni(t,n){var a=t.pendingLanes;if(a===0)return 0;var o=0,d=t.suspendedLanes,u=t.pingedLanes,g=a&268435455;if(g!==0){var P=g&~d;P!==0?o=ja(P):(u&=g,u!==0&&(o=ja(u)))}else g=a&~d,g!==0?o=ja(g):u!==0&&(o=ja(u));if(o===0)return 0;if(n!==0&&n!==o&&(n&d)===0&&(d=o&-o,u=n&-n,d>=u||d===16&&(u&4194240)!==0))return n;if((o&4)!==0&&(o|=a&16),n=t.entangledLanes,n!==0)for(t=t.entanglements,n&=o;0<n;)a=31-Er(n),d=1<<a,o|=t[a],n&=~d;return o}function Cc(t,n){switch(t){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ec(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,d=t.expirationTimes,u=t.pendingLanes;0<u;){var g=31-Er(u),P=1<<g,N=d[g];N===-1?((P&a)===0||(P&o)!==0)&&(d[g]=Cc(P,n)):N<=n&&(t.expiredLanes|=P),u&=~P}}function Zi(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function xo(){var t=ti;return ti<<=1,(ti&4194240)===0&&(ti=64),t}function es(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function ba(t,n,a){t.pendingLanes|=n,n!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,n=31-Er(n),t[n]=a}function $c(t,n){var a=t.pendingLanes&~n;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=n,t.mutableReadLanes&=n,t.entangledLanes&=n,n=t.entanglements;var o=t.eventTimes;for(t=t.expirationTimes;0<a;){var d=31-Er(a),u=1<<d;n[d]=0,o[d]=-1,t[d]=-1,a&=~u}}function ts(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Er(a),d=1<<o;d&n|t[o]&n&&(t[o]|=n),a&=~d}}var ut=0;function go(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var vo,qn,wa,rs,yo,Un=!1,ai=[],gn=null,vn=null,ht=null,q=new Map,ee=new Map,X=[],V="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xe(t,n){switch(t){case"focusin":case"focusout":gn=null;break;case"dragenter":case"dragleave":vn=null;break;case"mouseover":case"mouseout":ht=null;break;case"pointerover":case"pointerout":q.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ee.delete(n.pointerId)}}function De(t,n,a,o,d,u){return t===null||t.nativeEvent!==u?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:u,targetContainers:[d]},n!==null&&(n=hs(n),n!==null&&qn(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,d!==null&&n.indexOf(d)===-1&&n.push(d),t)}function Ue(t,n,a,o,d){switch(n){case"focusin":return gn=De(gn,t,n,a,o,d),!0;case"dragenter":return vn=De(vn,t,n,a,o,d),!0;case"mouseover":return ht=De(ht,t,n,a,o,d),!0;case"pointerover":var u=d.pointerId;return q.set(u,De(q.get(u)||null,t,n,a,o,d)),!0;case"gotpointercapture":return u=d.pointerId,ee.set(u,De(ee.get(u)||null,t,n,a,o,d)),!0}return!1}function bt(t){var n=_a(t.target);if(n!==null){var a=mn(n);if(a!==null){if(n=a.tag,n===13){if(n=Tt(a),n!==null){t.blockedOn=n,yo(t.priority,function(){wa(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Lt(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Pc(t.domEventName,t.eventSystemFlags,n[0],t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);mt=o,a.target.dispatchEvent(o),mt=null}else return n=hs(a),n!==null&&qn(n),t.blockedOn=a,!1;n.shift()}return!0}function It(t,n,a){Lt(t)&&a.delete(n)}function Hn(){Un=!1,gn!==null&&Lt(gn)&&(gn=null),vn!==null&&Lt(vn)&&(vn=null),ht!==null&&Lt(ht)&&(ht=null),q.forEach(It),ee.forEach(It)}function Vn(t,n){t.blockedOn===n&&(t.blockedOn=null,Un||(Un=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,Hn)))}function Wn(t){function n(d){return Vn(d,t)}if(0<ai.length){Vn(ai[0],t);for(var a=1;a<ai.length;a++){var o=ai[a];o.blockedOn===t&&(o.blockedOn=null)}}for(gn!==null&&Vn(gn,t),vn!==null&&Vn(vn,t),ht!==null&&Vn(ht,t),q.forEach(n),ee.forEach(n),a=0;a<X.length;a++)o=X[a],o.blockedOn===t&&(o.blockedOn=null);for(;0<X.length&&(a=X[0],a.blockedOn===null);)bt(a),a.blockedOn===null&&X.shift()}var $r=I.ReactCurrentBatchConfig,jo=!0;function N1(t,n,a,o){var d=ut,u=$r.transition;$r.transition=null;try{ut=1,Rc(t,n,a,o)}finally{ut=d,$r.transition=u}}function M1(t,n,a,o){var d=ut,u=$r.transition;$r.transition=null;try{ut=4,Rc(t,n,a,o)}finally{ut=d,$r.transition=u}}function Rc(t,n,a,o){if(jo){var d=Pc(t,n,a,o);if(d===null)Gc(t,n,o,bo,a),xe(t,o);else if(Ue(d,t,n,a,o))o.stopPropagation();else if(xe(t,o),n&4&&-1<V.indexOf(t)){for(;d!==null;){var u=hs(d);if(u!==null&&vo(u),u=Pc(t,n,a,o),u===null&&Gc(t,n,o,bo,a),u===d)break;d=u}d!==null&&o.stopPropagation()}else Gc(t,n,o,null,a)}}var bo=null;function Pc(t,n,a,o){if(bo=null,t=Zr(o),t=_a(t),t!==null)if(n=mn(t),n===null)t=null;else if(a=n.tag,a===13){if(t=Tt(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null);return bo=t,null}function mf(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(At()){case xn:return 1;case Ji:return 4;case ya:case wc:return 16;case mo:return 536870912;default:return 16}default:return 16}}var Gn=null,zc=null,wo=null;function xf(){if(wo)return wo;var t,n=zc,a=n.length,o,d="value"in Gn?Gn.value:Gn.textContent,u=d.length;for(t=0;t<a&&n[t]===d[t];t++);var g=a-t;for(o=1;o<=g&&n[a-o]===d[u-o];o++);return wo=d.slice(t,1<o?1-o:void 0)}function _o(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function ko(){return!0}function gf(){return!1}function Rr(t){function n(a,o,d,u,g){this._reactName=a,this._targetInst=d,this.type=o,this.nativeEvent=u,this.target=g,this.currentTarget=null;for(var P in t)t.hasOwnProperty(P)&&(a=t[P],this[P]=a?a(u):u[P]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?ko:gf,this.isPropagationStopped=gf,this}return H(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ko)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ko)},persist:function(){},isPersistent:ko}),n}var ii={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Nc=Rr(ii),ns=H({},ii,{view:0,detail:0}),T1=Rr(ns),Mc,Tc,as,So=H({},ns,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Dc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==as&&(as&&t.type==="mousemove"?(Mc=t.screenX-as.screenX,Tc=t.screenY-as.screenY):Tc=Mc=0,as=t),Mc)},movementY:function(t){return"movementY"in t?t.movementY:Tc}}),vf=Rr(So),A1=H({},So,{dataTransfer:0}),D1=Rr(A1),F1=H({},ns,{relatedTarget:0}),Ac=Rr(F1),L1=H({},ii,{animationName:0,elapsedTime:0,pseudoElement:0}),O1=Rr(L1),I1=H({},ii,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),B1=Rr(I1),q1=H({},ii,{data:0}),yf=Rr(q1),U1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},H1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},V1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function W1(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=V1[t])?!!n[t]:!1}function Dc(){return W1}var G1=H({},ns,{key:function(t){if(t.key){var n=U1[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=_o(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?H1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Dc,charCode:function(t){return t.type==="keypress"?_o(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?_o(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Q1=Rr(G1),K1=H({},So,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jf=Rr(K1),Y1=H({},ns,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Dc}),X1=Rr(Y1),J1=H({},ii,{propertyName:0,elapsedTime:0,pseudoElement:0}),Z1=Rr(J1),ey=H({},So,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ty=Rr(ey),ry=[9,13,27,32],Fc=m&&"CompositionEvent"in window,is=null;m&&"documentMode"in document&&(is=document.documentMode);var ny=m&&"TextEvent"in window&&!is,bf=m&&(!Fc||is&&8<is&&11>=is),wf=" ",_f=!1;function kf(t,n){switch(t){case"keyup":return ry.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var si=!1;function ay(t,n){switch(t){case"compositionend":return Sf(n);case"keypress":return n.which!==32?null:(_f=!0,wf);case"textInput":return t=n.data,t===wf&&_f?null:t;default:return null}}function iy(t,n){if(si)return t==="compositionend"||!Fc&&kf(t,n)?(t=xf(),wo=zc=Gn=null,si=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return bf&&n.locale!=="ko"?null:n.data;default:return null}}var sy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cf(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!sy[t.type]:n==="textarea"}function Ef(t,n,a,o){hn(o),n=Po(n,"onChange"),0<n.length&&(a=new Nc("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var ss=null,os=null;function oy(t){Vf(t,0)}function Co(t){var n=ui(t);if(et(n))return t}function ly(t,n){if(t==="change")return n}var $f=!1;if(m){var Lc;if(m){var Oc="oninput"in document;if(!Oc){var Rf=document.createElement("div");Rf.setAttribute("oninput","return;"),Oc=typeof Rf.oninput=="function"}Lc=Oc}else Lc=!1;$f=Lc&&(!document.documentMode||9<document.documentMode)}function Pf(){ss&&(ss.detachEvent("onpropertychange",zf),os=ss=null)}function zf(t){if(t.propertyName==="value"&&Co(os)){var n=[];Ef(n,os,t,Zr(t)),ke(oy,n)}}function cy(t,n,a){t==="focusin"?(Pf(),ss=n,os=a,ss.attachEvent("onpropertychange",zf)):t==="focusout"&&Pf()}function dy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Co(os)}function uy(t,n){if(t==="click")return Co(n)}function py(t,n){if(t==="input"||t==="change")return Co(n)}function fy(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var tn=typeof Object.is=="function"?Object.is:fy;function ls(t,n){if(tn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var d=a[o];if(!x.call(n,d)||!tn(t[d],n[d]))return!1}return!0}function Nf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Mf(t,n){var a=Nf(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Nf(a)}}function Tf(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Tf(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Af(){for(var t=window,n=ot();n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=ot(t.document)}return n}function Ic(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}function hy(t){var n=Af(),a=t.focusedElem,o=t.selectionRange;if(n!==a&&a&&a.ownerDocument&&Tf(a.ownerDocument.documentElement,a)){if(o!==null&&Ic(a)){if(n=o.start,t=o.end,t===void 0&&(t=n),"selectionStart"in a)a.selectionStart=n,a.selectionEnd=Math.min(t,a.value.length);else if(t=(n=a.ownerDocument||document)&&n.defaultView||window,t.getSelection){t=t.getSelection();var d=a.textContent.length,u=Math.min(o.start,d);o=o.end===void 0?u:Math.min(o.end,d),!t.extend&&u>o&&(d=o,o=u,u=d),d=Mf(a,u);var g=Mf(a,o);d&&g&&(t.rangeCount!==1||t.anchorNode!==d.node||t.anchorOffset!==d.offset||t.focusNode!==g.node||t.focusOffset!==g.offset)&&(n=n.createRange(),n.setStart(d.node,d.offset),t.removeAllRanges(),u>o?(t.addRange(n),t.extend(g.node,g.offset)):(n.setEnd(g.node,g.offset),t.addRange(n)))}}for(n=[],t=a;t=t.parentNode;)t.nodeType===1&&n.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<n.length;a++)t=n[a],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var my=m&&"documentMode"in document&&11>=document.documentMode,oi=null,Bc=null,cs=null,qc=!1;function Df(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;qc||oi==null||oi!==ot(o)||(o=oi,"selectionStart"in o&&Ic(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),cs&&ls(cs,o)||(cs=o,o=Po(Bc,"onSelect"),0<o.length&&(n=new Nc("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=oi)))}function Eo(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var li={animationend:Eo("Animation","AnimationEnd"),animationiteration:Eo("Animation","AnimationIteration"),animationstart:Eo("Animation","AnimationStart"),transitionend:Eo("Transition","TransitionEnd")},Uc={},Ff={};m&&(Ff=document.createElement("div").style,"AnimationEvent"in window||(delete li.animationend.animation,delete li.animationiteration.animation,delete li.animationstart.animation),"TransitionEvent"in window||delete li.transitionend.transition);function $o(t){if(Uc[t])return Uc[t];if(!li[t])return t;var n=li[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Ff)return Uc[t]=n[a];return t}var Lf=$o("animationend"),Of=$o("animationiteration"),If=$o("animationstart"),Bf=$o("transitionend"),qf=new Map,Uf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qn(t,n){qf.set(t,n),p(n,[t])}for(var Hc=0;Hc<Uf.length;Hc++){var Vc=Uf[Hc],xy=Vc.toLowerCase(),gy=Vc[0].toUpperCase()+Vc.slice(1);Qn(xy,"on"+gy)}Qn(Lf,"onAnimationEnd"),Qn(Of,"onAnimationIteration"),Qn(If,"onAnimationStart"),Qn("dblclick","onDoubleClick"),Qn("focusin","onFocus"),Qn("focusout","onBlur"),Qn(Bf,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),p("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),p("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),p("onBeforeInput",["compositionend","keypress","textInput","paste"]),p("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),p("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),p("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ds="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vy=new Set("cancel close invalid load scroll toggle".split(" ").concat(ds));function Hf(t,n,a){var o=t.type||"unknown-event";t.currentTarget=a,va(o,n,void 0,t),t.currentTarget=null}function Vf(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],d=o.event;o=o.listeners;e:{var u=void 0;if(n)for(var g=o.length-1;0<=g;g--){var P=o[g],N=P.instance,te=P.currentTarget;if(P=P.listener,N!==u&&d.isPropagationStopped())break e;Hf(d,P,te),u=N}else for(g=0;g<o.length;g++){if(P=o[g],N=P.instance,te=P.currentTarget,P=P.listener,N!==u&&d.isPropagationStopped())break e;Hf(d,P,te),u=N}}}if($n)throw t=Ja,$n=!1,Ja=null,t}function wt(t,n){var a=n[Zc];a===void 0&&(a=n[Zc]=new Set);var o=t+"__bubble";a.has(o)||(Wf(n,t,2,!1),a.add(o))}function Wc(t,n,a){var o=0;n&&(o|=4),Wf(a,t,o,n)}var Ro="_reactListening"+Math.random().toString(36).slice(2);function us(t){if(!t[Ro]){t[Ro]=!0,l.forEach(function(a){a!=="selectionchange"&&(vy.has(a)||Wc(a,!1,t),Wc(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Ro]||(n[Ro]=!0,Wc("selectionchange",!1,n))}}function Wf(t,n,a,o){switch(mf(n)){case 1:var d=N1;break;case 4:d=M1;break;default:d=Rc}a=d.bind(null,n,a,t),d=void 0,!Fe||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(d=!0),o?d!==void 0?t.addEventListener(n,a,{capture:!0,passive:d}):t.addEventListener(n,a,!0):d!==void 0?t.addEventListener(n,a,{passive:d}):t.addEventListener(n,a,!1)}function Gc(t,n,a,o,d){var u=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var g=o.tag;if(g===3||g===4){var P=o.stateNode.containerInfo;if(P===d||P.nodeType===8&&P.parentNode===d)break;if(g===4)for(g=o.return;g!==null;){var N=g.tag;if((N===3||N===4)&&(N=g.stateNode.containerInfo,N===d||N.nodeType===8&&N.parentNode===d))return;g=g.return}for(;P!==null;){if(g=_a(P),g===null)return;if(N=g.tag,N===5||N===6){o=u=g;continue e}P=P.parentNode}}o=o.return}ke(function(){var te=u,fe=Zr(a),ge=[];e:{var pe=qf.get(t);if(pe!==void 0){var $e=Nc,ze=t;switch(t){case"keypress":if(_o(a)===0)break e;case"keydown":case"keyup":$e=Q1;break;case"focusin":ze="focus",$e=Ac;break;case"focusout":ze="blur",$e=Ac;break;case"beforeblur":case"afterblur":$e=Ac;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":$e=vf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":$e=D1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":$e=X1;break;case Lf:case Of:case If:$e=O1;break;case Bf:$e=Z1;break;case"scroll":$e=T1;break;case"wheel":$e=ty;break;case"copy":case"cut":case"paste":$e=B1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":$e=jf}var Ne=(n&4)!==0,Ot=!Ne&&t==="scroll",W=Ne?pe!==null?pe+"Capture":null:pe;Ne=[];for(var L=te,Y;L!==null;){Y=L;var be=Y.stateNode;if(Y.tag===5&&be!==null&&(Y=be,W!==null&&(be=xa(L,W),be!=null&&Ne.push(ps(L,be,Y)))),Ot)break;L=L.return}0<Ne.length&&(pe=new $e(pe,ze,null,a,fe),ge.push({event:pe,listeners:Ne}))}}if((n&7)===0){e:{if(pe=t==="mouseover"||t==="pointerover",$e=t==="mouseout"||t==="pointerout",pe&&a!==mt&&(ze=a.relatedTarget||a.fromElement)&&(_a(ze)||ze[Rn]))break e;if(($e||pe)&&(pe=fe.window===fe?fe:(pe=fe.ownerDocument)?pe.defaultView||pe.parentWindow:window,$e?(ze=a.relatedTarget||a.toElement,$e=te,ze=ze?_a(ze):null,ze!==null&&(Ot=mn(ze),ze!==Ot||ze.tag!==5&&ze.tag!==6)&&(ze=null)):($e=null,ze=te),$e!==ze)){if(Ne=vf,be="onMouseLeave",W="onMouseEnter",L="mouse",(t==="pointerout"||t==="pointerover")&&(Ne=jf,be="onPointerLeave",W="onPointerEnter",L="pointer"),Ot=$e==null?pe:ui($e),Y=ze==null?pe:ui(ze),pe=new Ne(be,L+"leave",$e,a,fe),pe.target=Ot,pe.relatedTarget=Y,be=null,_a(fe)===te&&(Ne=new Ne(W,L+"enter",ze,a,fe),Ne.target=Y,Ne.relatedTarget=Ot,be=Ne),Ot=be,$e&&ze)t:{for(Ne=$e,W=ze,L=0,Y=Ne;Y;Y=ci(Y))L++;for(Y=0,be=W;be;be=ci(be))Y++;for(;0<L-Y;)Ne=ci(Ne),L--;for(;0<Y-L;)W=ci(W),Y--;for(;L--;){if(Ne===W||W!==null&&Ne===W.alternate)break t;Ne=ci(Ne),W=ci(W)}Ne=null}else Ne=null;$e!==null&&Gf(ge,pe,$e,Ne,!1),ze!==null&&Ot!==null&&Gf(ge,Ot,ze,Ne,!0)}}e:{if(pe=te?ui(te):window,$e=pe.nodeName&&pe.nodeName.toLowerCase(),$e==="select"||$e==="input"&&pe.type==="file")var Me=ly;else if(Cf(pe))if($f)Me=py;else{Me=dy;var Le=cy}else($e=pe.nodeName)&&$e.toLowerCase()==="input"&&(pe.type==="checkbox"||pe.type==="radio")&&(Me=uy);if(Me&&(Me=Me(t,te))){Ef(ge,Me,a,fe);break e}Le&&Le(t,pe,te),t==="focusout"&&(Le=pe._wrapperState)&&Le.controlled&&pe.type==="number"&&Xe(pe,"number",pe.value)}switch(Le=te?ui(te):window,t){case"focusin":(Cf(Le)||Le.contentEditable==="true")&&(oi=Le,Bc=te,cs=null);break;case"focusout":cs=Bc=oi=null;break;case"mousedown":qc=!0;break;case"contextmenu":case"mouseup":case"dragend":qc=!1,Df(ge,a,fe);break;case"selectionchange":if(my)break;case"keydown":case"keyup":Df(ge,a,fe)}var Oe;if(Fc)e:{switch(t){case"compositionstart":var qe="onCompositionStart";break e;case"compositionend":qe="onCompositionEnd";break e;case"compositionupdate":qe="onCompositionUpdate";break e}qe=void 0}else si?kf(t,a)&&(qe="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(qe="onCompositionStart");qe&&(bf&&a.locale!=="ko"&&(si||qe!=="onCompositionStart"?qe==="onCompositionEnd"&&si&&(Oe=xf()):(Gn=fe,zc="value"in Gn?Gn.value:Gn.textContent,si=!0)),Le=Po(te,qe),0<Le.length&&(qe=new yf(qe,t,null,a,fe),ge.push({event:qe,listeners:Le}),Oe?qe.data=Oe:(Oe=Sf(a),Oe!==null&&(qe.data=Oe)))),(Oe=ny?ay(t,a):iy(t,a))&&(te=Po(te,"onBeforeInput"),0<te.length&&(fe=new yf("onBeforeInput","beforeinput",null,a,fe),ge.push({event:fe,listeners:te}),fe.data=Oe))}Vf(ge,n)})}function ps(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Po(t,n){for(var a=n+"Capture",o=[];t!==null;){var d=t,u=d.stateNode;d.tag===5&&u!==null&&(d=u,u=xa(t,a),u!=null&&o.unshift(ps(t,u,d)),u=xa(t,n),u!=null&&o.push(ps(t,u,d))),t=t.return}return o}function ci(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Gf(t,n,a,o,d){for(var u=n._reactName,g=[];a!==null&&a!==o;){var P=a,N=P.alternate,te=P.stateNode;if(N!==null&&N===o)break;P.tag===5&&te!==null&&(P=te,d?(N=xa(a,u),N!=null&&g.unshift(ps(a,N,P))):d||(N=xa(a,u),N!=null&&g.push(ps(a,N,P)))),a=a.return}g.length!==0&&t.push({event:n,listeners:g})}var yy=/\r\n?/g,jy=/\u0000|\uFFFD/g;function Qf(t){return(typeof t=="string"?t:""+t).replace(yy,`
`).replace(jy,"")}function zo(t,n,a){if(n=Qf(n),Qf(t)!==n&&a)throw Error(s(425))}function No(){}var Qc=null,Kc=null;function Yc(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Xc=typeof setTimeout=="function"?setTimeout:void 0,by=typeof clearTimeout=="function"?clearTimeout:void 0,Kf=typeof Promise=="function"?Promise:void 0,wy=typeof queueMicrotask=="function"?queueMicrotask:typeof Kf<"u"?function(t){return Kf.resolve(null).then(t).catch(_y)}:Xc;function _y(t){setTimeout(function(){throw t})}function Jc(t,n){var a=n,o=0;do{var d=a.nextSibling;if(t.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(o===0){t.removeChild(d),Wn(n);return}o--}else a!=="$"&&a!=="$?"&&a!=="$!"||o++;a=d}while(a);Wn(n)}function Kn(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return t}function Yf(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return t;n--}else a==="/$"&&n++}t=t.previousSibling}return null}var di=Math.random().toString(36).slice(2),yn="__reactFiber$"+di,fs="__reactProps$"+di,Rn="__reactContainer$"+di,Zc="__reactEvents$"+di,ky="__reactListeners$"+di,Sy="__reactHandles$"+di;function _a(t){var n=t[yn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Rn]||a[yn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Yf(t);t!==null;){if(a=t[yn])return a;t=Yf(t)}return n}t=a,a=t.parentNode}return null}function hs(t){return t=t[yn]||t[Rn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ui(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(s(33))}function Mo(t){return t[fs]||null}var ed=[],pi=-1;function Yn(t){return{current:t}}function _t(t){0>pi||(t.current=ed[pi],ed[pi]=null,pi--)}function jt(t,n){pi++,ed[pi]=t.current,t.current=n}var Xn={},ar=Yn(Xn),yr=Yn(!1),ka=Xn;function fi(t,n){var a=t.type.contextTypes;if(!a)return Xn;var o=t.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===n)return o.__reactInternalMemoizedMaskedChildContext;var d={},u;for(u in a)d[u]=n[u];return o&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=n,t.__reactInternalMemoizedMaskedChildContext=d),d}function jr(t){return t=t.childContextTypes,t!=null}function To(){_t(yr),_t(ar)}function Xf(t,n,a){if(ar.current!==Xn)throw Error(s(168));jt(ar,n),jt(yr,a)}function Jf(t,n,a){var o=t.stateNode;if(n=n.childContextTypes,typeof o.getChildContext!="function")return a;o=o.getChildContext();for(var d in o)if(!(d in n))throw Error(s(108,ve(t)||"Unknown",d));return H({},a,o)}function Ao(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Xn,ka=ar.current,jt(ar,t),jt(yr,yr.current),!0}function Zf(t,n,a){var o=t.stateNode;if(!o)throw Error(s(169));a?(t=Jf(t,n,ka),o.__reactInternalMemoizedMergedChildContext=t,_t(yr),_t(ar),jt(ar,t)):_t(yr),jt(yr,a)}var Pn=null,Do=!1,td=!1;function eh(t){Pn===null?Pn=[t]:Pn.push(t)}function Cy(t){Do=!0,eh(t)}function Jn(){if(!td&&Pn!==null){td=!0;var t=0,n=ut;try{var a=Pn;for(ut=1;t<a.length;t++){var o=a[t];do o=o(!0);while(o!==null)}Pn=null,Do=!1}catch(d){throw Pn!==null&&(Pn=Pn.slice(t+1)),Yi(xn,Jn),d}finally{ut=n,td=!1}}return null}var hi=[],mi=0,Fo=null,Lo=0,Ur=[],Hr=0,Sa=null,zn=1,Nn="";function Ca(t,n){hi[mi++]=Lo,hi[mi++]=Fo,Fo=t,Lo=n}function th(t,n,a){Ur[Hr++]=zn,Ur[Hr++]=Nn,Ur[Hr++]=Sa,Sa=t;var o=zn;t=Nn;var d=32-Er(o)-1;o&=~(1<<d),a+=1;var u=32-Er(n)+d;if(30<u){var g=d-d%5;u=(o&(1<<g)-1).toString(32),o>>=g,d-=g,zn=1<<32-Er(n)+d|a<<d|o,Nn=u+t}else zn=1<<u|a<<d|o,Nn=t}function rd(t){t.return!==null&&(Ca(t,1),th(t,1,0))}function nd(t){for(;t===Fo;)Fo=hi[--mi],hi[mi]=null,Lo=hi[--mi],hi[mi]=null;for(;t===Sa;)Sa=Ur[--Hr],Ur[Hr]=null,Nn=Ur[--Hr],Ur[Hr]=null,zn=Ur[--Hr],Ur[Hr]=null}var Pr=null,zr=null,Et=!1,rn=null;function rh(t,n){var a=Qr(5,null,null,0);a.elementType="DELETED",a.stateNode=n,a.return=t,n=t.deletions,n===null?(t.deletions=[a],t.flags|=16):n.push(a)}function nh(t,n){switch(t.tag){case 5:var a=t.type;return n=n.nodeType!==1||a.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(t.stateNode=n,Pr=t,zr=Kn(n.firstChild),!0):!1;case 6:return n=t.pendingProps===""||n.nodeType!==3?null:n,n!==null?(t.stateNode=n,Pr=t,zr=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(a=Sa!==null?{id:zn,overflow:Nn}:null,t.memoizedState={dehydrated:n,treeContext:a,retryLane:1073741824},a=Qr(18,null,null,0),a.stateNode=n,a.return=t,t.child=a,Pr=t,zr=null,!0):!1;default:return!1}}function ad(t){return(t.mode&1)!==0&&(t.flags&128)===0}function id(t){if(Et){var n=zr;if(n){var a=n;if(!nh(t,n)){if(ad(t))throw Error(s(418));n=Kn(a.nextSibling);var o=Pr;n&&nh(t,n)?rh(o,a):(t.flags=t.flags&-4097|2,Et=!1,Pr=t)}}else{if(ad(t))throw Error(s(418));t.flags=t.flags&-4097|2,Et=!1,Pr=t}}}function ah(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Pr=t}function Oo(t){if(t!==Pr)return!1;if(!Et)return ah(t),Et=!0,!1;var n;if((n=t.tag!==3)&&!(n=t.tag!==5)&&(n=t.type,n=n!=="head"&&n!=="body"&&!Yc(t.type,t.memoizedProps)),n&&(n=zr)){if(ad(t))throw ih(),Error(s(418));for(;n;)rh(t,n),n=Kn(n.nextSibling)}if(ah(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));e:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"){if(n===0){zr=Kn(t.nextSibling);break e}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++}t=t.nextSibling}zr=null}}else zr=Pr?Kn(t.stateNode.nextSibling):null;return!0}function ih(){for(var t=zr;t;)t=Kn(t.nextSibling)}function xi(){zr=Pr=null,Et=!1}function sd(t){rn===null?rn=[t]:rn.push(t)}var Ey=I.ReactCurrentBatchConfig;function ms(t,n,a){if(t=a.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(s(309));var o=a.stateNode}if(!o)throw Error(s(147,t));var d=o,u=""+t;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===u?n.ref:(n=function(g){var P=d.refs;g===null?delete P[u]:P[u]=g},n._stringRef=u,n)}if(typeof t!="string")throw Error(s(284));if(!a._owner)throw Error(s(290,t))}return t}function Io(t,n){throw t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t))}function sh(t){var n=t._init;return n(t._payload)}function oh(t){function n(W,L){if(t){var Y=W.deletions;Y===null?(W.deletions=[L],W.flags|=16):Y.push(L)}}function a(W,L){if(!t)return null;for(;L!==null;)n(W,L),L=L.sibling;return null}function o(W,L){for(W=new Map;L!==null;)L.key!==null?W.set(L.key,L):W.set(L.index,L),L=L.sibling;return W}function d(W,L){return W=sa(W,L),W.index=0,W.sibling=null,W}function u(W,L,Y){return W.index=Y,t?(Y=W.alternate,Y!==null?(Y=Y.index,Y<L?(W.flags|=2,L):Y):(W.flags|=2,L)):(W.flags|=1048576,L)}function g(W){return t&&W.alternate===null&&(W.flags|=2),W}function P(W,L,Y,be){return L===null||L.tag!==6?(L=Xd(Y,W.mode,be),L.return=W,L):(L=d(L,Y),L.return=W,L)}function N(W,L,Y,be){var Me=Y.type;return Me===F?fe(W,L,Y.props.children,be,Y.key):L!==null&&(L.elementType===Me||typeof Me=="object"&&Me!==null&&Me.$$typeof===K&&sh(Me)===L.type)?(be=d(L,Y.props),be.ref=ms(W,L,Y),be.return=W,be):(be=dl(Y.type,Y.key,Y.props,null,W.mode,be),be.ref=ms(W,L,Y),be.return=W,be)}function te(W,L,Y,be){return L===null||L.tag!==4||L.stateNode.containerInfo!==Y.containerInfo||L.stateNode.implementation!==Y.implementation?(L=Jd(Y,W.mode,be),L.return=W,L):(L=d(L,Y.children||[]),L.return=W,L)}function fe(W,L,Y,be,Me){return L===null||L.tag!==7?(L=Ta(Y,W.mode,be,Me),L.return=W,L):(L=d(L,Y),L.return=W,L)}function ge(W,L,Y){if(typeof L=="string"&&L!==""||typeof L=="number")return L=Xd(""+L,W.mode,Y),L.return=W,L;if(typeof L=="object"&&L!==null){switch(L.$$typeof){case J:return Y=dl(L.type,L.key,L.props,null,W.mode,Y),Y.ref=ms(W,null,L),Y.return=W,Y;case Q:return L=Jd(L,W.mode,Y),L.return=W,L;case K:var be=L._init;return ge(W,be(L._payload),Y)}if(se(L)||me(L))return L=Ta(L,W.mode,Y,null),L.return=W,L;Io(W,L)}return null}function pe(W,L,Y,be){var Me=L!==null?L.key:null;if(typeof Y=="string"&&Y!==""||typeof Y=="number")return Me!==null?null:P(W,L,""+Y,be);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case J:return Y.key===Me?N(W,L,Y,be):null;case Q:return Y.key===Me?te(W,L,Y,be):null;case K:return Me=Y._init,pe(W,L,Me(Y._payload),be)}if(se(Y)||me(Y))return Me!==null?null:fe(W,L,Y,be,null);Io(W,Y)}return null}function $e(W,L,Y,be,Me){if(typeof be=="string"&&be!==""||typeof be=="number")return W=W.get(Y)||null,P(L,W,""+be,Me);if(typeof be=="object"&&be!==null){switch(be.$$typeof){case J:return W=W.get(be.key===null?Y:be.key)||null,N(L,W,be,Me);case Q:return W=W.get(be.key===null?Y:be.key)||null,te(L,W,be,Me);case K:var Le=be._init;return $e(W,L,Y,Le(be._payload),Me)}if(se(be)||me(be))return W=W.get(Y)||null,fe(L,W,be,Me,null);Io(L,be)}return null}function ze(W,L,Y,be){for(var Me=null,Le=null,Oe=L,qe=L=0,Yt=null;Oe!==null&&qe<Y.length;qe++){Oe.index>qe?(Yt=Oe,Oe=null):Yt=Oe.sibling;var lt=pe(W,Oe,Y[qe],be);if(lt===null){Oe===null&&(Oe=Yt);break}t&&Oe&&lt.alternate===null&&n(W,Oe),L=u(lt,L,qe),Le===null?Me=lt:Le.sibling=lt,Le=lt,Oe=Yt}if(qe===Y.length)return a(W,Oe),Et&&Ca(W,qe),Me;if(Oe===null){for(;qe<Y.length;qe++)Oe=ge(W,Y[qe],be),Oe!==null&&(L=u(Oe,L,qe),Le===null?Me=Oe:Le.sibling=Oe,Le=Oe);return Et&&Ca(W,qe),Me}for(Oe=o(W,Oe);qe<Y.length;qe++)Yt=$e(Oe,W,qe,Y[qe],be),Yt!==null&&(t&&Yt.alternate!==null&&Oe.delete(Yt.key===null?qe:Yt.key),L=u(Yt,L,qe),Le===null?Me=Yt:Le.sibling=Yt,Le=Yt);return t&&Oe.forEach(function(oa){return n(W,oa)}),Et&&Ca(W,qe),Me}function Ne(W,L,Y,be){var Me=me(Y);if(typeof Me!="function")throw Error(s(150));if(Y=Me.call(Y),Y==null)throw Error(s(151));for(var Le=Me=null,Oe=L,qe=L=0,Yt=null,lt=Y.next();Oe!==null&&!lt.done;qe++,lt=Y.next()){Oe.index>qe?(Yt=Oe,Oe=null):Yt=Oe.sibling;var oa=pe(W,Oe,lt.value,be);if(oa===null){Oe===null&&(Oe=Yt);break}t&&Oe&&oa.alternate===null&&n(W,Oe),L=u(oa,L,qe),Le===null?Me=oa:Le.sibling=oa,Le=oa,Oe=Yt}if(lt.done)return a(W,Oe),Et&&Ca(W,qe),Me;if(Oe===null){for(;!lt.done;qe++,lt=Y.next())lt=ge(W,lt.value,be),lt!==null&&(L=u(lt,L,qe),Le===null?Me=lt:Le.sibling=lt,Le=lt);return Et&&Ca(W,qe),Me}for(Oe=o(W,Oe);!lt.done;qe++,lt=Y.next())lt=$e(Oe,W,qe,lt.value,be),lt!==null&&(t&&lt.alternate!==null&&Oe.delete(lt.key===null?qe:lt.key),L=u(lt,L,qe),Le===null?Me=lt:Le.sibling=lt,Le=lt);return t&&Oe.forEach(function(s0){return n(W,s0)}),Et&&Ca(W,qe),Me}function Ot(W,L,Y,be){if(typeof Y=="object"&&Y!==null&&Y.type===F&&Y.key===null&&(Y=Y.props.children),typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case J:e:{for(var Me=Y.key,Le=L;Le!==null;){if(Le.key===Me){if(Me=Y.type,Me===F){if(Le.tag===7){a(W,Le.sibling),L=d(Le,Y.props.children),L.return=W,W=L;break e}}else if(Le.elementType===Me||typeof Me=="object"&&Me!==null&&Me.$$typeof===K&&sh(Me)===Le.type){a(W,Le.sibling),L=d(Le,Y.props),L.ref=ms(W,Le,Y),L.return=W,W=L;break e}a(W,Le);break}else n(W,Le);Le=Le.sibling}Y.type===F?(L=Ta(Y.props.children,W.mode,be,Y.key),L.return=W,W=L):(be=dl(Y.type,Y.key,Y.props,null,W.mode,be),be.ref=ms(W,L,Y),be.return=W,W=be)}return g(W);case Q:e:{for(Le=Y.key;L!==null;){if(L.key===Le)if(L.tag===4&&L.stateNode.containerInfo===Y.containerInfo&&L.stateNode.implementation===Y.implementation){a(W,L.sibling),L=d(L,Y.children||[]),L.return=W,W=L;break e}else{a(W,L);break}else n(W,L);L=L.sibling}L=Jd(Y,W.mode,be),L.return=W,W=L}return g(W);case K:return Le=Y._init,Ot(W,L,Le(Y._payload),be)}if(se(Y))return ze(W,L,Y,be);if(me(Y))return Ne(W,L,Y,be);Io(W,Y)}return typeof Y=="string"&&Y!==""||typeof Y=="number"?(Y=""+Y,L!==null&&L.tag===6?(a(W,L.sibling),L=d(L,Y),L.return=W,W=L):(a(W,L),L=Xd(Y,W.mode,be),L.return=W,W=L),g(W)):a(W,L)}return Ot}var gi=oh(!0),lh=oh(!1),Bo=Yn(null),qo=null,vi=null,od=null;function ld(){od=vi=qo=null}function cd(t){var n=Bo.current;_t(Bo),t._currentValue=n}function dd(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function yi(t,n){qo=t,od=vi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&n)!==0&&(br=!0),t.firstContext=null)}function Vr(t){var n=t._currentValue;if(od!==t)if(t={context:t,memoizedValue:n,next:null},vi===null){if(qo===null)throw Error(s(308));vi=t,qo.dependencies={lanes:0,firstContext:t}}else vi=vi.next=t;return n}var Ea=null;function ud(t){Ea===null?Ea=[t]:Ea.push(t)}function ch(t,n,a,o){var d=n.interleaved;return d===null?(a.next=a,ud(n)):(a.next=d.next,d.next=a),n.interleaved=a,Mn(t,o)}function Mn(t,n){t.lanes|=n;var a=t.alternate;for(a!==null&&(a.lanes|=n),a=t,t=t.return;t!==null;)t.childLanes|=n,a=t.alternate,a!==null&&(a.childLanes|=n),a=t,t=t.return;return a.tag===3?a.stateNode:null}var Zn=!1;function pd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function dh(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Tn(t,n){return{eventTime:t,lane:n,tag:0,payload:null,callback:null,next:null}}function ea(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(it&2)!==0){var d=o.pending;return d===null?n.next=n:(n.next=d.next,d.next=n),o.pending=n,Mn(t,a)}return d=o.interleaved,d===null?(n.next=n,ud(o)):(n.next=d.next,d.next=n),o.interleaved=n,Mn(t,a)}function Uo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194240)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,ts(t,a)}}function uh(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var d=null,u=null;if(a=a.firstBaseUpdate,a!==null){do{var g={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};u===null?d=u=g:u=u.next=g,a=a.next}while(a!==null);u===null?d=u=n:u=u.next=n}else d=u=n;a={baseState:o.baseState,firstBaseUpdate:d,lastBaseUpdate:u,shared:o.shared,effects:o.effects},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}function Ho(t,n,a,o){var d=t.updateQueue;Zn=!1;var u=d.firstBaseUpdate,g=d.lastBaseUpdate,P=d.shared.pending;if(P!==null){d.shared.pending=null;var N=P,te=N.next;N.next=null,g===null?u=te:g.next=te,g=N;var fe=t.alternate;fe!==null&&(fe=fe.updateQueue,P=fe.lastBaseUpdate,P!==g&&(P===null?fe.firstBaseUpdate=te:P.next=te,fe.lastBaseUpdate=N))}if(u!==null){var ge=d.baseState;g=0,fe=te=N=null,P=u;do{var pe=P.lane,$e=P.eventTime;if((o&pe)===pe){fe!==null&&(fe=fe.next={eventTime:$e,lane:0,tag:P.tag,payload:P.payload,callback:P.callback,next:null});e:{var ze=t,Ne=P;switch(pe=n,$e=a,Ne.tag){case 1:if(ze=Ne.payload,typeof ze=="function"){ge=ze.call($e,ge,pe);break e}ge=ze;break e;case 3:ze.flags=ze.flags&-65537|128;case 0:if(ze=Ne.payload,pe=typeof ze=="function"?ze.call($e,ge,pe):ze,pe==null)break e;ge=H({},ge,pe);break e;case 2:Zn=!0}}P.callback!==null&&P.lane!==0&&(t.flags|=64,pe=d.effects,pe===null?d.effects=[P]:pe.push(P))}else $e={eventTime:$e,lane:pe,tag:P.tag,payload:P.payload,callback:P.callback,next:null},fe===null?(te=fe=$e,N=ge):fe=fe.next=$e,g|=pe;if(P=P.next,P===null){if(P=d.shared.pending,P===null)break;pe=P,P=pe.next,pe.next=null,d.lastBaseUpdate=pe,d.shared.pending=null}}while(!0);if(fe===null&&(N=ge),d.baseState=N,d.firstBaseUpdate=te,d.lastBaseUpdate=fe,n=d.shared.interleaved,n!==null){d=n;do g|=d.lane,d=d.next;while(d!==n)}else u===null&&(d.shared.lanes=0);Pa|=g,t.lanes=g,t.memoizedState=ge}}function ph(t,n,a){if(t=n.effects,n.effects=null,t!==null)for(n=0;n<t.length;n++){var o=t[n],d=o.callback;if(d!==null){if(o.callback=null,o=a,typeof d!="function")throw Error(s(191,d));d.call(o)}}}var xs={},jn=Yn(xs),gs=Yn(xs),vs=Yn(xs);function $a(t){if(t===xs)throw Error(s(174));return t}function fd(t,n){switch(jt(vs,n),jt(gs,t),jt(jn,xs),t=n.nodeType,t){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:nt(null,"");break;default:t=t===8?n.parentNode:n,n=t.namespaceURI||null,t=t.tagName,n=nt(n,t)}_t(jn),jt(jn,n)}function ji(){_t(jn),_t(gs),_t(vs)}function fh(t){$a(vs.current);var n=$a(jn.current),a=nt(n,t.type);n!==a&&(jt(gs,t),jt(jn,a))}function hd(t){gs.current===t&&(_t(jn),_t(gs))}var zt=Yn(0);function Vo(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var md=[];function xd(){for(var t=0;t<md.length;t++)md[t]._workInProgressVersionPrimary=null;md.length=0}var Wo=I.ReactCurrentDispatcher,gd=I.ReactCurrentBatchConfig,Ra=0,Nt=null,Ht=null,Qt=null,Go=!1,ys=!1,js=0,$y=0;function ir(){throw Error(s(321))}function vd(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!tn(t[a],n[a]))return!1;return!0}function yd(t,n,a,o,d,u){if(Ra=u,Nt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Wo.current=t===null||t.memoizedState===null?Ny:My,t=a(o,d),ys){u=0;do{if(ys=!1,js=0,25<=u)throw Error(s(301));u+=1,Qt=Ht=null,n.updateQueue=null,Wo.current=Ty,t=a(o,d)}while(ys)}if(Wo.current=Yo,n=Ht!==null&&Ht.next!==null,Ra=0,Qt=Ht=Nt=null,Go=!1,n)throw Error(s(300));return t}function jd(){var t=js!==0;return js=0,t}function bn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qt===null?Nt.memoizedState=Qt=t:Qt=Qt.next=t,Qt}function Wr(){if(Ht===null){var t=Nt.alternate;t=t!==null?t.memoizedState:null}else t=Ht.next;var n=Qt===null?Nt.memoizedState:Qt.next;if(n!==null)Qt=n,Ht=t;else{if(t===null)throw Error(s(310));Ht=t,t={memoizedState:Ht.memoizedState,baseState:Ht.baseState,baseQueue:Ht.baseQueue,queue:Ht.queue,next:null},Qt===null?Nt.memoizedState=Qt=t:Qt=Qt.next=t}return Qt}function bs(t,n){return typeof n=="function"?n(t):n}function bd(t){var n=Wr(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var o=Ht,d=o.baseQueue,u=a.pending;if(u!==null){if(d!==null){var g=d.next;d.next=u.next,u.next=g}o.baseQueue=d=u,a.pending=null}if(d!==null){u=d.next,o=o.baseState;var P=g=null,N=null,te=u;do{var fe=te.lane;if((Ra&fe)===fe)N!==null&&(N=N.next={lane:0,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),o=te.hasEagerState?te.eagerState:t(o,te.action);else{var ge={lane:fe,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null};N===null?(P=N=ge,g=o):N=N.next=ge,Nt.lanes|=fe,Pa|=fe}te=te.next}while(te!==null&&te!==u);N===null?g=o:N.next=P,tn(o,n.memoizedState)||(br=!0),n.memoizedState=o,n.baseState=g,n.baseQueue=N,a.lastRenderedState=o}if(t=a.interleaved,t!==null){d=t;do u=d.lane,Nt.lanes|=u,Pa|=u,d=d.next;while(d!==t)}else d===null&&(a.lanes=0);return[n.memoizedState,a.dispatch]}function wd(t){var n=Wr(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var o=a.dispatch,d=a.pending,u=n.memoizedState;if(d!==null){a.pending=null;var g=d=d.next;do u=t(u,g.action),g=g.next;while(g!==d);tn(u,n.memoizedState)||(br=!0),n.memoizedState=u,n.baseQueue===null&&(n.baseState=u),a.lastRenderedState=u}return[u,o]}function hh(){}function mh(t,n){var a=Nt,o=Wr(),d=n(),u=!tn(o.memoizedState,d);if(u&&(o.memoizedState=d,br=!0),o=o.queue,_d(vh.bind(null,a,o,t),[t]),o.getSnapshot!==n||u||Qt!==null&&Qt.memoizedState.tag&1){if(a.flags|=2048,ws(9,gh.bind(null,a,o,d,n),void 0,null),Kt===null)throw Error(s(349));(Ra&30)!==0||xh(a,n,d)}return d}function xh(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=Nt.updateQueue,n===null?(n={lastEffect:null,stores:null},Nt.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function gh(t,n,a,o){n.value=a,n.getSnapshot=o,yh(n)&&jh(t)}function vh(t,n,a){return a(function(){yh(n)&&jh(t)})}function yh(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!tn(t,a)}catch{return!0}}function jh(t){var n=Mn(t,1);n!==null&&on(n,t,1,-1)}function bh(t){var n=bn();return typeof t=="function"&&(t=t()),n.memoizedState=n.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:bs,lastRenderedState:t},n.queue=t,t=t.dispatch=zy.bind(null,Nt,t),[n.memoizedState,t]}function ws(t,n,a,o){return t={tag:t,create:n,destroy:a,deps:o,next:null},n=Nt.updateQueue,n===null?(n={lastEffect:null,stores:null},Nt.updateQueue=n,n.lastEffect=t.next=t):(a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t)),t}function wh(){return Wr().memoizedState}function Qo(t,n,a,o){var d=bn();Nt.flags|=t,d.memoizedState=ws(1|n,a,void 0,o===void 0?null:o)}function Ko(t,n,a,o){var d=Wr();o=o===void 0?null:o;var u=void 0;if(Ht!==null){var g=Ht.memoizedState;if(u=g.destroy,o!==null&&vd(o,g.deps)){d.memoizedState=ws(n,a,u,o);return}}Nt.flags|=t,d.memoizedState=ws(1|n,a,u,o)}function _h(t,n){return Qo(8390656,8,t,n)}function _d(t,n){return Ko(2048,8,t,n)}function kh(t,n){return Ko(4,2,t,n)}function Sh(t,n){return Ko(4,4,t,n)}function Ch(t,n){if(typeof n=="function")return t=t(),n(t),function(){n(null)};if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Eh(t,n,a){return a=a!=null?a.concat([t]):null,Ko(4,4,Ch.bind(null,n,t),a)}function kd(){}function $h(t,n){var a=Wr();n=n===void 0?null:n;var o=a.memoizedState;return o!==null&&n!==null&&vd(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function Rh(t,n){var a=Wr();n=n===void 0?null:n;var o=a.memoizedState;return o!==null&&n!==null&&vd(n,o[1])?o[0]:(t=t(),a.memoizedState=[t,n],t)}function Ph(t,n,a){return(Ra&21)===0?(t.baseState&&(t.baseState=!1,br=!0),t.memoizedState=a):(tn(a,n)||(a=xo(),Nt.lanes|=a,Pa|=a,t.baseState=!0),n)}function Ry(t,n){var a=ut;ut=a!==0&&4>a?a:4,t(!0);var o=gd.transition;gd.transition={};try{t(!1),n()}finally{ut=a,gd.transition=o}}function zh(){return Wr().memoizedState}function Py(t,n,a){var o=aa(t);if(a={lane:o,action:a,hasEagerState:!1,eagerState:null,next:null},Nh(t))Mh(n,a);else if(a=ch(t,n,a,o),a!==null){var d=hr();on(a,t,o,d),Th(a,n,o)}}function zy(t,n,a){var o=aa(t),d={lane:o,action:a,hasEagerState:!1,eagerState:null,next:null};if(Nh(t))Mh(n,d);else{var u=t.alternate;if(t.lanes===0&&(u===null||u.lanes===0)&&(u=n.lastRenderedReducer,u!==null))try{var g=n.lastRenderedState,P=u(g,a);if(d.hasEagerState=!0,d.eagerState=P,tn(P,g)){var N=n.interleaved;N===null?(d.next=d,ud(n)):(d.next=N.next,N.next=d),n.interleaved=d;return}}catch{}finally{}a=ch(t,n,d,o),a!==null&&(d=hr(),on(a,t,o,d),Th(a,n,o))}}function Nh(t){var n=t.alternate;return t===Nt||n!==null&&n===Nt}function Mh(t,n){ys=Go=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Th(t,n,a){if((a&4194240)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,ts(t,a)}}var Yo={readContext:Vr,useCallback:ir,useContext:ir,useEffect:ir,useImperativeHandle:ir,useInsertionEffect:ir,useLayoutEffect:ir,useMemo:ir,useReducer:ir,useRef:ir,useState:ir,useDebugValue:ir,useDeferredValue:ir,useTransition:ir,useMutableSource:ir,useSyncExternalStore:ir,useId:ir,unstable_isNewReconciler:!1},Ny={readContext:Vr,useCallback:function(t,n){return bn().memoizedState=[t,n===void 0?null:n],t},useContext:Vr,useEffect:_h,useImperativeHandle:function(t,n,a){return a=a!=null?a.concat([t]):null,Qo(4194308,4,Ch.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Qo(4194308,4,t,n)},useInsertionEffect:function(t,n){return Qo(4,2,t,n)},useMemo:function(t,n){var a=bn();return n=n===void 0?null:n,t=t(),a.memoizedState=[t,n],t},useReducer:function(t,n,a){var o=bn();return n=a!==void 0?a(n):n,o.memoizedState=o.baseState=n,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:n},o.queue=t,t=t.dispatch=Py.bind(null,Nt,t),[o.memoizedState,t]},useRef:function(t){var n=bn();return t={current:t},n.memoizedState=t},useState:bh,useDebugValue:kd,useDeferredValue:function(t){return bn().memoizedState=t},useTransition:function(){var t=bh(!1),n=t[0];return t=Ry.bind(null,t[1]),bn().memoizedState=t,[n,t]},useMutableSource:function(){},useSyncExternalStore:function(t,n,a){var o=Nt,d=bn();if(Et){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Kt===null)throw Error(s(349));(Ra&30)!==0||xh(o,n,a)}d.memoizedState=a;var u={value:a,getSnapshot:n};return d.queue=u,_h(vh.bind(null,o,u,t),[t]),o.flags|=2048,ws(9,gh.bind(null,o,u,a,n),void 0,null),a},useId:function(){var t=bn(),n=Kt.identifierPrefix;if(Et){var a=Nn,o=zn;a=(o&~(1<<32-Er(o)-1)).toString(32)+a,n=":"+n+"R"+a,a=js++,0<a&&(n+="H"+a.toString(32)),n+=":"}else a=$y++,n=":"+n+"r"+a.toString(32)+":";return t.memoizedState=n},unstable_isNewReconciler:!1},My={readContext:Vr,useCallback:$h,useContext:Vr,useEffect:_d,useImperativeHandle:Eh,useInsertionEffect:kh,useLayoutEffect:Sh,useMemo:Rh,useReducer:bd,useRef:wh,useState:function(){return bd(bs)},useDebugValue:kd,useDeferredValue:function(t){var n=Wr();return Ph(n,Ht.memoizedState,t)},useTransition:function(){var t=bd(bs)[0],n=Wr().memoizedState;return[t,n]},useMutableSource:hh,useSyncExternalStore:mh,useId:zh,unstable_isNewReconciler:!1},Ty={readContext:Vr,useCallback:$h,useContext:Vr,useEffect:_d,useImperativeHandle:Eh,useInsertionEffect:kh,useLayoutEffect:Sh,useMemo:Rh,useReducer:wd,useRef:wh,useState:function(){return wd(bs)},useDebugValue:kd,useDeferredValue:function(t){var n=Wr();return Ht===null?n.memoizedState=t:Ph(n,Ht.memoizedState,t)},useTransition:function(){var t=wd(bs)[0],n=Wr().memoizedState;return[t,n]},useMutableSource:hh,useSyncExternalStore:mh,useId:zh,unstable_isNewReconciler:!1};function nn(t,n){if(t&&t.defaultProps){n=H({},n),t=t.defaultProps;for(var a in t)n[a]===void 0&&(n[a]=t[a]);return n}return n}function Sd(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:H({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Xo={isMounted:function(t){return(t=t._reactInternals)?mn(t)===t:!1},enqueueSetState:function(t,n,a){t=t._reactInternals;var o=hr(),d=aa(t),u=Tn(o,d);u.payload=n,a!=null&&(u.callback=a),n=ea(t,u,d),n!==null&&(on(n,t,d,o),Uo(n,t,d))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=hr(),d=aa(t),u=Tn(o,d);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=ea(t,u,d),n!==null&&(on(n,t,d,o),Uo(n,t,d))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=hr(),o=aa(t),d=Tn(a,o);d.tag=2,n!=null&&(d.callback=n),n=ea(t,d,o),n!==null&&(on(n,t,o,a),Uo(n,t,o))}};function Ah(t,n,a,o,d,u,g){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,u,g):n.prototype&&n.prototype.isPureReactComponent?!ls(a,o)||!ls(d,u):!0}function Dh(t,n,a){var o=!1,d=Xn,u=n.contextType;return typeof u=="object"&&u!==null?u=Vr(u):(d=jr(n)?ka:ar.current,o=n.contextTypes,u=(o=o!=null)?fi(t,d):Xn),n=new n(a,u),t.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Xo,t.stateNode=n,n._reactInternals=t,o&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=d,t.__reactInternalMemoizedMaskedChildContext=u),n}function Fh(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&Xo.enqueueReplaceState(n,n.state,null)}function Cd(t,n,a,o){var d=t.stateNode;d.props=a,d.state=t.memoizedState,d.refs={},pd(t);var u=n.contextType;typeof u=="object"&&u!==null?d.context=Vr(u):(u=jr(n)?ka:ar.current,d.context=fi(t,u)),d.state=t.memoizedState,u=n.getDerivedStateFromProps,typeof u=="function"&&(Sd(t,n,u,a),d.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(n=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),n!==d.state&&Xo.enqueueReplaceState(d,d.state,null),Ho(t,a,d,o),d.state=t.memoizedState),typeof d.componentDidMount=="function"&&(t.flags|=4194308)}function bi(t,n){try{var a="",o=n;do a+=T(o),o=o.return;while(o);var d=a}catch(u){d=`
Error generating stack: `+u.message+`
`+u.stack}return{value:t,source:n,stack:d,digest:null}}function Ed(t,n,a){return{value:t,source:null,stack:a??null,digest:n??null}}function $d(t,n){try{console.error(n.value)}catch(a){setTimeout(function(){throw a})}}var Ay=typeof WeakMap=="function"?WeakMap:Map;function Lh(t,n,a){a=Tn(-1,a),a.tag=3,a.payload={element:null};var o=n.value;return a.callback=function(){al||(al=!0,Ud=o),$d(t,n)},a}function Oh(t,n,a){a=Tn(-1,a),a.tag=3;var o=t.type.getDerivedStateFromError;if(typeof o=="function"){var d=n.value;a.payload=function(){return o(d)},a.callback=function(){$d(t,n)}}var u=t.stateNode;return u!==null&&typeof u.componentDidCatch=="function"&&(a.callback=function(){$d(t,n),typeof o!="function"&&(ra===null?ra=new Set([this]):ra.add(this));var g=n.stack;this.componentDidCatch(n.value,{componentStack:g!==null?g:""})}),a}function Ih(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new Ay;var d=new Set;o.set(n,d)}else d=o.get(n),d===void 0&&(d=new Set,o.set(n,d));d.has(a)||(d.add(a),t=Ky.bind(null,t,n,a),n.then(t,t))}function Bh(t){do{var n;if((n=t.tag===13)&&(n=t.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return t;t=t.return}while(t!==null);return null}function qh(t,n,a,o,d){return(t.mode&1)===0?(t===n?t.flags|=65536:(t.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(n=Tn(-1,1),n.tag=2,ea(a,n,1))),a.lanes|=1),t):(t.flags|=65536,t.lanes=d,t)}var Dy=I.ReactCurrentOwner,br=!1;function fr(t,n,a,o){n.child=t===null?lh(n,null,a,o):gi(n,t.child,a,o)}function Uh(t,n,a,o,d){a=a.render;var u=n.ref;return yi(n,d),o=yd(t,n,a,o,u,d),a=jd(),t!==null&&!br?(n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~d,An(t,n,d)):(Et&&a&&rd(n),n.flags|=1,fr(t,n,o,d),n.child)}function Hh(t,n,a,o,d){if(t===null){var u=a.type;return typeof u=="function"&&!Yd(u)&&u.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(n.tag=15,n.type=u,Vh(t,n,u,o,d)):(t=dl(a.type,null,o,n,n.mode,d),t.ref=n.ref,t.return=n,n.child=t)}if(u=t.child,(t.lanes&d)===0){var g=u.memoizedProps;if(a=a.compare,a=a!==null?a:ls,a(g,o)&&t.ref===n.ref)return An(t,n,d)}return n.flags|=1,t=sa(u,o),t.ref=n.ref,t.return=n,n.child=t}function Vh(t,n,a,o,d){if(t!==null){var u=t.memoizedProps;if(ls(u,o)&&t.ref===n.ref)if(br=!1,n.pendingProps=o=u,(t.lanes&d)!==0)(t.flags&131072)!==0&&(br=!0);else return n.lanes=t.lanes,An(t,n,d)}return Rd(t,n,a,o,d)}function Wh(t,n,a){var o=n.pendingProps,d=o.children,u=t!==null?t.memoizedState:null;if(o.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null,transitions:null},jt(_i,Nr),Nr|=a;else{if((a&1073741824)===0)return t=u!==null?u.baseLanes|a:a,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:t,cachePool:null,transitions:null},n.updateQueue=null,jt(_i,Nr),Nr|=t,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=u!==null?u.baseLanes:a,jt(_i,Nr),Nr|=o}else u!==null?(o=u.baseLanes|a,n.memoizedState=null):o=a,jt(_i,Nr),Nr|=o;return fr(t,n,d,a),n.child}function Gh(t,n){var a=n.ref;(t===null&&a!==null||t!==null&&t.ref!==a)&&(n.flags|=512,n.flags|=2097152)}function Rd(t,n,a,o,d){var u=jr(a)?ka:ar.current;return u=fi(n,u),yi(n,d),a=yd(t,n,a,o,u,d),o=jd(),t!==null&&!br?(n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~d,An(t,n,d)):(Et&&o&&rd(n),n.flags|=1,fr(t,n,a,d),n.child)}function Qh(t,n,a,o,d){if(jr(a)){var u=!0;Ao(n)}else u=!1;if(yi(n,d),n.stateNode===null)Zo(t,n),Dh(n,a,o),Cd(n,a,o,d),o=!0;else if(t===null){var g=n.stateNode,P=n.memoizedProps;g.props=P;var N=g.context,te=a.contextType;typeof te=="object"&&te!==null?te=Vr(te):(te=jr(a)?ka:ar.current,te=fi(n,te));var fe=a.getDerivedStateFromProps,ge=typeof fe=="function"||typeof g.getSnapshotBeforeUpdate=="function";ge||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(P!==o||N!==te)&&Fh(n,g,o,te),Zn=!1;var pe=n.memoizedState;g.state=pe,Ho(n,o,g,d),N=n.memoizedState,P!==o||pe!==N||yr.current||Zn?(typeof fe=="function"&&(Sd(n,a,fe,o),N=n.memoizedState),(P=Zn||Ah(n,a,P,o,pe,N,te))?(ge||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(n.flags|=4194308)):(typeof g.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=N),g.props=o,g.state=N,g.context=te,o=P):(typeof g.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{g=n.stateNode,dh(t,n),P=n.memoizedProps,te=n.type===n.elementType?P:nn(n.type,P),g.props=te,ge=n.pendingProps,pe=g.context,N=a.contextType,typeof N=="object"&&N!==null?N=Vr(N):(N=jr(a)?ka:ar.current,N=fi(n,N));var $e=a.getDerivedStateFromProps;(fe=typeof $e=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(P!==ge||pe!==N)&&Fh(n,g,o,N),Zn=!1,pe=n.memoizedState,g.state=pe,Ho(n,o,g,d);var ze=n.memoizedState;P!==ge||pe!==ze||yr.current||Zn?(typeof $e=="function"&&(Sd(n,a,$e,o),ze=n.memoizedState),(te=Zn||Ah(n,a,te,o,pe,ze,N)||!1)?(fe||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(o,ze,N),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(o,ze,N)),typeof g.componentDidUpdate=="function"&&(n.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof g.componentDidUpdate!="function"||P===t.memoizedProps&&pe===t.memoizedState||(n.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||P===t.memoizedProps&&pe===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ze),g.props=o,g.state=ze,g.context=N,o=te):(typeof g.componentDidUpdate!="function"||P===t.memoizedProps&&pe===t.memoizedState||(n.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||P===t.memoizedProps&&pe===t.memoizedState||(n.flags|=1024),o=!1)}return Pd(t,n,a,o,u,d)}function Pd(t,n,a,o,d,u){Gh(t,n);var g=(n.flags&128)!==0;if(!o&&!g)return d&&Zf(n,a,!1),An(t,n,u);o=n.stateNode,Dy.current=n;var P=g&&typeof a.getDerivedStateFromError!="function"?null:o.render();return n.flags|=1,t!==null&&g?(n.child=gi(n,t.child,null,u),n.child=gi(n,null,P,u)):fr(t,n,P,u),n.memoizedState=o.state,d&&Zf(n,a,!0),n.child}function Kh(t){var n=t.stateNode;n.pendingContext?Xf(t,n.pendingContext,n.pendingContext!==n.context):n.context&&Xf(t,n.context,!1),fd(t,n.containerInfo)}function Yh(t,n,a,o,d){return xi(),sd(d),n.flags|=256,fr(t,n,a,o),n.child}var zd={dehydrated:null,treeContext:null,retryLane:0};function Nd(t){return{baseLanes:t,cachePool:null,transitions:null}}function Xh(t,n,a){var o=n.pendingProps,d=zt.current,u=!1,g=(n.flags&128)!==0,P;if((P=g)||(P=t!==null&&t.memoizedState===null?!1:(d&2)!==0),P?(u=!0,n.flags&=-129):(t===null||t.memoizedState!==null)&&(d|=1),jt(zt,d&1),t===null)return id(n),t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((n.mode&1)===0?n.lanes=1:t.data==="$!"?n.lanes=8:n.lanes=1073741824,null):(g=o.children,t=o.fallback,u?(o=n.mode,u=n.child,g={mode:"hidden",children:g},(o&1)===0&&u!==null?(u.childLanes=0,u.pendingProps=g):u=ul(g,o,0,null),t=Ta(t,o,a,null),u.return=n,t.return=n,u.sibling=t,n.child=u,n.child.memoizedState=Nd(a),n.memoizedState=zd,t):Md(n,g));if(d=t.memoizedState,d!==null&&(P=d.dehydrated,P!==null))return Fy(t,n,g,o,P,d,a);if(u){u=o.fallback,g=n.mode,d=t.child,P=d.sibling;var N={mode:"hidden",children:o.children};return(g&1)===0&&n.child!==d?(o=n.child,o.childLanes=0,o.pendingProps=N,n.deletions=null):(o=sa(d,N),o.subtreeFlags=d.subtreeFlags&14680064),P!==null?u=sa(P,u):(u=Ta(u,g,a,null),u.flags|=2),u.return=n,o.return=n,o.sibling=u,n.child=o,o=u,u=n.child,g=t.child.memoizedState,g=g===null?Nd(a):{baseLanes:g.baseLanes|a,cachePool:null,transitions:g.transitions},u.memoizedState=g,u.childLanes=t.childLanes&~a,n.memoizedState=zd,o}return u=t.child,t=u.sibling,o=sa(u,{mode:"visible",children:o.children}),(n.mode&1)===0&&(o.lanes=a),o.return=n,o.sibling=null,t!==null&&(a=n.deletions,a===null?(n.deletions=[t],n.flags|=16):a.push(t)),n.child=o,n.memoizedState=null,o}function Md(t,n){return n=ul({mode:"visible",children:n},t.mode,0,null),n.return=t,t.child=n}function Jo(t,n,a,o){return o!==null&&sd(o),gi(n,t.child,null,a),t=Md(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Fy(t,n,a,o,d,u,g){if(a)return n.flags&256?(n.flags&=-257,o=Ed(Error(s(422))),Jo(t,n,g,o)):n.memoizedState!==null?(n.child=t.child,n.flags|=128,null):(u=o.fallback,d=n.mode,o=ul({mode:"visible",children:o.children},d,0,null),u=Ta(u,d,g,null),u.flags|=2,o.return=n,u.return=n,o.sibling=u,n.child=o,(n.mode&1)!==0&&gi(n,t.child,null,g),n.child.memoizedState=Nd(g),n.memoizedState=zd,u);if((n.mode&1)===0)return Jo(t,n,g,null);if(d.data==="$!"){if(o=d.nextSibling&&d.nextSibling.dataset,o)var P=o.dgst;return o=P,u=Error(s(419)),o=Ed(u,o,void 0),Jo(t,n,g,o)}if(P=(g&t.childLanes)!==0,br||P){if(o=Kt,o!==null){switch(g&-g){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(o.suspendedLanes|g))!==0?0:d,d!==0&&d!==u.retryLane&&(u.retryLane=d,Mn(t,d),on(o,t,d,-1))}return Kd(),o=Ed(Error(s(421))),Jo(t,n,g,o)}return d.data==="$?"?(n.flags|=128,n.child=t.child,n=Yy.bind(null,t),d._reactRetry=n,null):(t=u.treeContext,zr=Kn(d.nextSibling),Pr=n,Et=!0,rn=null,t!==null&&(Ur[Hr++]=zn,Ur[Hr++]=Nn,Ur[Hr++]=Sa,zn=t.id,Nn=t.overflow,Sa=n),n=Md(n,o.children),n.flags|=4096,n)}function Jh(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),dd(t.return,n,a)}function Td(t,n,a,o,d){var u=t.memoizedState;u===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:d}:(u.isBackwards=n,u.rendering=null,u.renderingStartTime=0,u.last=o,u.tail=a,u.tailMode=d)}function Zh(t,n,a){var o=n.pendingProps,d=o.revealOrder,u=o.tail;if(fr(t,n,o.children,a),o=zt.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Jh(t,a,n);else if(t.tag===19)Jh(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}o&=1}if(jt(zt,o),(n.mode&1)===0)n.memoizedState=null;else switch(d){case"forwards":for(a=n.child,d=null;a!==null;)t=a.alternate,t!==null&&Vo(t)===null&&(d=a),a=a.sibling;a=d,a===null?(d=n.child,n.child=null):(d=a.sibling,a.sibling=null),Td(n,!1,d,a,u);break;case"backwards":for(a=null,d=n.child,n.child=null;d!==null;){if(t=d.alternate,t!==null&&Vo(t)===null){n.child=d;break}t=d.sibling,d.sibling=a,a=d,d=t}Td(n,!0,a,null,u);break;case"together":Td(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Zo(t,n){(n.mode&1)===0&&t!==null&&(t.alternate=null,n.alternate=null,n.flags|=2)}function An(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Pa|=n.lanes,(a&n.childLanes)===0)return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=sa(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=sa(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Ly(t,n,a){switch(n.tag){case 3:Kh(n),xi();break;case 5:fh(n);break;case 1:jr(n.type)&&Ao(n);break;case 4:fd(n,n.stateNode.containerInfo);break;case 10:var o=n.type._context,d=n.memoizedProps.value;jt(Bo,o._currentValue),o._currentValue=d;break;case 13:if(o=n.memoizedState,o!==null)return o.dehydrated!==null?(jt(zt,zt.current&1),n.flags|=128,null):(a&n.child.childLanes)!==0?Xh(t,n,a):(jt(zt,zt.current&1),t=An(t,n,a),t!==null?t.sibling:null);jt(zt,zt.current&1);break;case 19:if(o=(a&n.childLanes)!==0,(t.flags&128)!==0){if(o)return Zh(t,n,a);n.flags|=128}if(d=n.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),jt(zt,zt.current),o)break;return null;case 22:case 23:return n.lanes=0,Wh(t,n,a)}return An(t,n,a)}var em,Ad,tm,rm;em=function(t,n){for(var a=n.child;a!==null;){if(a.tag===5||a.tag===6)t.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===n)break;for(;a.sibling===null;){if(a.return===null||a.return===n)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Ad=function(){},tm=function(t,n,a,o){var d=t.memoizedProps;if(d!==o){t=n.stateNode,$a(jn.current);var u=null;switch(a){case"input":d=tt(t,d),o=tt(t,o),u=[];break;case"select":d=H({},d,{value:void 0}),o=H({},o,{value:void 0}),u=[];break;case"textarea":d=$t(t,d),o=$t(t,o),u=[];break;default:typeof d.onClick!="function"&&typeof o.onClick=="function"&&(t.onclick=No)}at(a,o);var g;a=null;for(te in d)if(!o.hasOwnProperty(te)&&d.hasOwnProperty(te)&&d[te]!=null)if(te==="style"){var P=d[te];for(g in P)P.hasOwnProperty(g)&&(a||(a={}),a[g]="")}else te!=="dangerouslySetInnerHTML"&&te!=="children"&&te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&te!=="autoFocus"&&(c.hasOwnProperty(te)?u||(u=[]):(u=u||[]).push(te,null));for(te in o){var N=o[te];if(P=d!=null?d[te]:void 0,o.hasOwnProperty(te)&&N!==P&&(N!=null||P!=null))if(te==="style")if(P){for(g in P)!P.hasOwnProperty(g)||N&&N.hasOwnProperty(g)||(a||(a={}),a[g]="");for(g in N)N.hasOwnProperty(g)&&P[g]!==N[g]&&(a||(a={}),a[g]=N[g])}else a||(u||(u=[]),u.push(te,a)),a=N;else te==="dangerouslySetInnerHTML"?(N=N?N.__html:void 0,P=P?P.__html:void 0,N!=null&&P!==N&&(u=u||[]).push(te,N)):te==="children"?typeof N!="string"&&typeof N!="number"||(u=u||[]).push(te,""+N):te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&(c.hasOwnProperty(te)?(N!=null&&te==="onScroll"&&wt("scroll",t),u||P===N||(u=[])):(u=u||[]).push(te,N))}a&&(u=u||[]).push("style",a);var te=u;(n.updateQueue=te)&&(n.flags|=4)}},rm=function(t,n,a,o){a!==o&&(n.flags|=4)};function _s(t,n){if(!Et)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function sr(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var d=t.child;d!==null;)a|=d.lanes|d.childLanes,o|=d.subtreeFlags&14680064,o|=d.flags&14680064,d.return=t,d=d.sibling;else for(d=t.child;d!==null;)a|=d.lanes|d.childLanes,o|=d.subtreeFlags,o|=d.flags,d.return=t,d=d.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function Oy(t,n,a){var o=n.pendingProps;switch(nd(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return sr(n),null;case 1:return jr(n.type)&&To(),sr(n),null;case 3:return o=n.stateNode,ji(),_t(yr),_t(ar),xd(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(t===null||t.child===null)&&(Oo(n)?n.flags|=4:t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,rn!==null&&(Wd(rn),rn=null))),Ad(t,n),sr(n),null;case 5:hd(n);var d=$a(vs.current);if(a=n.type,t!==null&&n.stateNode!=null)tm(t,n,a,o,d),t.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!o){if(n.stateNode===null)throw Error(s(166));return sr(n),null}if(t=$a(jn.current),Oo(n)){o=n.stateNode,a=n.type;var u=n.memoizedProps;switch(o[yn]=n,o[fs]=u,t=(n.mode&1)!==0,a){case"dialog":wt("cancel",o),wt("close",o);break;case"iframe":case"object":case"embed":wt("load",o);break;case"video":case"audio":for(d=0;d<ds.length;d++)wt(ds[d],o);break;case"source":wt("error",o);break;case"img":case"image":case"link":wt("error",o),wt("load",o);break;case"details":wt("toggle",o);break;case"input":tr(o,u),wt("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!u.multiple},wt("invalid",o);break;case"textarea":Ut(o,u),wt("invalid",o)}at(a,u),d=null;for(var g in u)if(u.hasOwnProperty(g)){var P=u[g];g==="children"?typeof P=="string"?o.textContent!==P&&(u.suppressHydrationWarning!==!0&&zo(o.textContent,P,t),d=["children",P]):typeof P=="number"&&o.textContent!==""+P&&(u.suppressHydrationWarning!==!0&&zo(o.textContent,P,t),d=["children",""+P]):c.hasOwnProperty(g)&&P!=null&&g==="onScroll"&&wt("scroll",o)}switch(a){case"input":st(o),Ae(o,u,!0);break;case"textarea":st(o),Rt(o);break;case"select":case"option":break;default:typeof u.onClick=="function"&&(o.onclick=No)}o=d,n.updateQueue=o,o!==null&&(n.flags|=4)}else{g=d.nodeType===9?d:d.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=rt(a)),t==="http://www.w3.org/1999/xhtml"?a==="script"?(t=g.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof o.is=="string"?t=g.createElement(a,{is:o.is}):(t=g.createElement(a),a==="select"&&(g=t,o.multiple?g.multiple=!0:o.size&&(g.size=o.size))):t=g.createElementNS(t,a),t[yn]=n,t[fs]=o,em(t,n,!1,!1),n.stateNode=t;e:{switch(g=Ke(a,o),a){case"dialog":wt("cancel",t),wt("close",t),d=o;break;case"iframe":case"object":case"embed":wt("load",t),d=o;break;case"video":case"audio":for(d=0;d<ds.length;d++)wt(ds[d],t);d=o;break;case"source":wt("error",t),d=o;break;case"img":case"image":case"link":wt("error",t),wt("load",t),d=o;break;case"details":wt("toggle",t),d=o;break;case"input":tr(t,o),d=tt(t,o),wt("invalid",t);break;case"option":d=o;break;case"select":t._wrapperState={wasMultiple:!!o.multiple},d=H({},o,{value:void 0}),wt("invalid",t);break;case"textarea":Ut(t,o),d=$t(t,o),wt("invalid",t);break;default:d=o}at(a,d),P=d;for(u in P)if(P.hasOwnProperty(u)){var N=P[u];u==="style"?_e(t,N):u==="dangerouslySetInnerHTML"?(N=N?N.__html:void 0,N!=null&&pn(t,N)):u==="children"?typeof N=="string"?(a!=="textarea"||N!=="")&&rr(t,N):typeof N=="number"&&rr(t,""+N):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(c.hasOwnProperty(u)?N!=null&&u==="onScroll"&&wt("scroll",t):N!=null&&G(t,u,N,g))}switch(a){case"input":st(t),Ae(t,o,!1);break;case"textarea":st(t),Rt(t);break;case"option":o.value!=null&&t.setAttribute("value",""+ye(o.value));break;case"select":t.multiple=!!o.multiple,u=o.value,u!=null?Be(t,!!o.multiple,u,!1):o.defaultValue!=null&&Be(t,!!o.multiple,o.defaultValue,!0);break;default:typeof d.onClick=="function"&&(t.onclick=No)}switch(a){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return sr(n),null;case 6:if(t&&n.stateNode!=null)rm(t,n,t.memoizedProps,o);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(a=$a(vs.current),$a(jn.current),Oo(n)){if(o=n.stateNode,a=n.memoizedProps,o[yn]=n,(u=o.nodeValue!==a)&&(t=Pr,t!==null))switch(t.tag){case 3:zo(o.nodeValue,a,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&zo(o.nodeValue,a,(t.mode&1)!==0)}u&&(n.flags|=4)}else o=(a.nodeType===9?a:a.ownerDocument).createTextNode(o),o[yn]=n,n.stateNode=o}return sr(n),null;case 13:if(_t(zt),o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Et&&zr!==null&&(n.mode&1)!==0&&(n.flags&128)===0)ih(),xi(),n.flags|=98560,u=!1;else if(u=Oo(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[yn]=n}else xi(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;sr(n),u=!1}else rn!==null&&(Wd(rn),rn=null),u=!0;if(!u)return n.flags&65536?n:null}return(n.flags&128)!==0?(n.lanes=a,n):(o=o!==null,o!==(t!==null&&t.memoizedState!==null)&&o&&(n.child.flags|=8192,(n.mode&1)!==0&&(t===null||(zt.current&1)!==0?Vt===0&&(Vt=3):Kd())),n.updateQueue!==null&&(n.flags|=4),sr(n),null);case 4:return ji(),Ad(t,n),t===null&&us(n.stateNode.containerInfo),sr(n),null;case 10:return cd(n.type._context),sr(n),null;case 17:return jr(n.type)&&To(),sr(n),null;case 19:if(_t(zt),u=n.memoizedState,u===null)return sr(n),null;if(o=(n.flags&128)!==0,g=u.rendering,g===null)if(o)_s(u,!1);else{if(Vt!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(g=Vo(t),g!==null){for(n.flags|=128,_s(u,!1),o=g.updateQueue,o!==null&&(n.updateQueue=o,n.flags|=4),n.subtreeFlags=0,o=a,a=n.child;a!==null;)u=a,t=o,u.flags&=14680066,g=u.alternate,g===null?(u.childLanes=0,u.lanes=t,u.child=null,u.subtreeFlags=0,u.memoizedProps=null,u.memoizedState=null,u.updateQueue=null,u.dependencies=null,u.stateNode=null):(u.childLanes=g.childLanes,u.lanes=g.lanes,u.child=g.child,u.subtreeFlags=0,u.deletions=null,u.memoizedProps=g.memoizedProps,u.memoizedState=g.memoizedState,u.updateQueue=g.updateQueue,u.type=g.type,t=g.dependencies,u.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),a=a.sibling;return jt(zt,zt.current&1|2),n.child}t=t.sibling}u.tail!==null&&yt()>ki&&(n.flags|=128,o=!0,_s(u,!1),n.lanes=4194304)}else{if(!o)if(t=Vo(g),t!==null){if(n.flags|=128,o=!0,a=t.updateQueue,a!==null&&(n.updateQueue=a,n.flags|=4),_s(u,!0),u.tail===null&&u.tailMode==="hidden"&&!g.alternate&&!Et)return sr(n),null}else 2*yt()-u.renderingStartTime>ki&&a!==1073741824&&(n.flags|=128,o=!0,_s(u,!1),n.lanes=4194304);u.isBackwards?(g.sibling=n.child,n.child=g):(a=u.last,a!==null?a.sibling=g:n.child=g,u.last=g)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=yt(),n.sibling=null,a=zt.current,jt(zt,o?a&1|2:a&1),n):(sr(n),null);case 22:case 23:return Qd(),o=n.memoizedState!==null,t!==null&&t.memoizedState!==null!==o&&(n.flags|=8192),o&&(n.mode&1)!==0?(Nr&1073741824)!==0&&(sr(n),n.subtreeFlags&6&&(n.flags|=8192)):sr(n),null;case 24:return null;case 25:return null}throw Error(s(156,n.tag))}function Iy(t,n){switch(nd(n),n.tag){case 1:return jr(n.type)&&To(),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ji(),_t(yr),_t(ar),xd(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 5:return hd(n),null;case 13:if(_t(zt),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));xi()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return _t(zt),null;case 4:return ji(),null;case 10:return cd(n.type._context),null;case 22:case 23:return Qd(),null;case 24:return null;default:return null}}var el=!1,or=!1,By=typeof WeakSet=="function"?WeakSet:Set,Re=null;function wi(t,n){var a=t.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(o){Dt(t,n,o)}else a.current=null}function Dd(t,n,a){try{a()}catch(o){Dt(t,n,o)}}var nm=!1;function qy(t,n){if(Qc=jo,t=Af(),Ic(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var d=o.anchorOffset,u=o.focusNode;o=o.focusOffset;try{a.nodeType,u.nodeType}catch{a=null;break e}var g=0,P=-1,N=-1,te=0,fe=0,ge=t,pe=null;t:for(;;){for(var $e;ge!==a||d!==0&&ge.nodeType!==3||(P=g+d),ge!==u||o!==0&&ge.nodeType!==3||(N=g+o),ge.nodeType===3&&(g+=ge.nodeValue.length),($e=ge.firstChild)!==null;)pe=ge,ge=$e;for(;;){if(ge===t)break t;if(pe===a&&++te===d&&(P=g),pe===u&&++fe===o&&(N=g),($e=ge.nextSibling)!==null)break;ge=pe,pe=ge.parentNode}ge=$e}a=P===-1||N===-1?null:{start:P,end:N}}else a=null}a=a||{start:0,end:0}}else a=null;for(Kc={focusedElem:t,selectionRange:a},jo=!1,Re=n;Re!==null;)if(n=Re,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Re=t;else for(;Re!==null;){n=Re;try{var ze=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if(ze!==null){var Ne=ze.memoizedProps,Ot=ze.memoizedState,W=n.stateNode,L=W.getSnapshotBeforeUpdate(n.elementType===n.type?Ne:nn(n.type,Ne),Ot);W.__reactInternalSnapshotBeforeUpdate=L}break;case 3:var Y=n.stateNode.containerInfo;Y.nodeType===1?Y.textContent="":Y.nodeType===9&&Y.documentElement&&Y.removeChild(Y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(s(163))}}catch(be){Dt(n,n.return,be)}if(t=n.sibling,t!==null){t.return=n.return,Re=t;break}Re=n.return}return ze=nm,nm=!1,ze}function ks(t,n,a){var o=n.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var d=o=o.next;do{if((d.tag&t)===t){var u=d.destroy;d.destroy=void 0,u!==void 0&&Dd(n,a,u)}d=d.next}while(d!==o)}}function tl(t,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var a=n=n.next;do{if((a.tag&t)===t){var o=a.create;a.destroy=o()}a=a.next}while(a!==n)}}function Fd(t){var n=t.ref;if(n!==null){var a=t.stateNode;switch(t.tag){case 5:t=a;break;default:t=a}typeof n=="function"?n(t):n.current=t}}function am(t){var n=t.alternate;n!==null&&(t.alternate=null,am(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&(delete n[yn],delete n[fs],delete n[Zc],delete n[ky],delete n[Sy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function im(t){return t.tag===5||t.tag===3||t.tag===4}function sm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||im(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ld(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.nodeType===8?a.parentNode.insertBefore(t,n):a.insertBefore(t,n):(a.nodeType===8?(n=a.parentNode,n.insertBefore(t,a)):(n=a,n.appendChild(t)),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=No));else if(o!==4&&(t=t.child,t!==null))for(Ld(t,n,a),t=t.sibling;t!==null;)Ld(t,n,a),t=t.sibling}function Od(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(t=t.child,t!==null))for(Od(t,n,a),t=t.sibling;t!==null;)Od(t,n,a),t=t.sibling}var Jt=null,an=!1;function ta(t,n,a){for(a=a.child;a!==null;)om(t,n,a),a=a.sibling}function om(t,n,a){if(qr&&typeof qr.onCommitFiberUnmount=="function")try{qr.onCommitFiberUnmount(ei,a)}catch{}switch(a.tag){case 5:or||wi(a,n);case 6:var o=Jt,d=an;Jt=null,ta(t,n,a),Jt=o,an=d,Jt!==null&&(an?(t=Jt,a=a.stateNode,t.nodeType===8?t.parentNode.removeChild(a):t.removeChild(a)):Jt.removeChild(a.stateNode));break;case 18:Jt!==null&&(an?(t=Jt,a=a.stateNode,t.nodeType===8?Jc(t.parentNode,a):t.nodeType===1&&Jc(t,a),Wn(t)):Jc(Jt,a.stateNode));break;case 4:o=Jt,d=an,Jt=a.stateNode.containerInfo,an=!0,ta(t,n,a),Jt=o,an=d;break;case 0:case 11:case 14:case 15:if(!or&&(o=a.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){d=o=o.next;do{var u=d,g=u.destroy;u=u.tag,g!==void 0&&((u&2)!==0||(u&4)!==0)&&Dd(a,n,g),d=d.next}while(d!==o)}ta(t,n,a);break;case 1:if(!or&&(wi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=a.memoizedProps,o.state=a.memoizedState,o.componentWillUnmount()}catch(P){Dt(a,n,P)}ta(t,n,a);break;case 21:ta(t,n,a);break;case 22:a.mode&1?(or=(o=or)||a.memoizedState!==null,ta(t,n,a),or=o):ta(t,n,a);break;default:ta(t,n,a)}}function lm(t){var n=t.updateQueue;if(n!==null){t.updateQueue=null;var a=t.stateNode;a===null&&(a=t.stateNode=new By),n.forEach(function(o){var d=Xy.bind(null,t,o);a.has(o)||(a.add(o),o.then(d,d))})}}function sn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var d=a[o];try{var u=t,g=n,P=g;e:for(;P!==null;){switch(P.tag){case 5:Jt=P.stateNode,an=!1;break e;case 3:Jt=P.stateNode.containerInfo,an=!0;break e;case 4:Jt=P.stateNode.containerInfo,an=!0;break e}P=P.return}if(Jt===null)throw Error(s(160));om(u,g,d),Jt=null,an=!1;var N=d.alternate;N!==null&&(N.return=null),d.return=null}catch(te){Dt(d,n,te)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)cm(n,t),n=n.sibling}function cm(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(sn(n,t),wn(t),o&4){try{ks(3,t,t.return),tl(3,t)}catch(Ne){Dt(t,t.return,Ne)}try{ks(5,t,t.return)}catch(Ne){Dt(t,t.return,Ne)}}break;case 1:sn(n,t),wn(t),o&512&&a!==null&&wi(a,a.return);break;case 5:if(sn(n,t),wn(t),o&512&&a!==null&&wi(a,a.return),t.flags&32){var d=t.stateNode;try{rr(d,"")}catch(Ne){Dt(t,t.return,Ne)}}if(o&4&&(d=t.stateNode,d!=null)){var u=t.memoizedProps,g=a!==null?a.memoizedProps:u,P=t.type,N=t.updateQueue;if(t.updateQueue=null,N!==null)try{P==="input"&&u.type==="radio"&&u.name!=null&&Mt(d,u),Ke(P,g);var te=Ke(P,u);for(g=0;g<N.length;g+=2){var fe=N[g],ge=N[g+1];fe==="style"?_e(d,ge):fe==="dangerouslySetInnerHTML"?pn(d,ge):fe==="children"?rr(d,ge):G(d,fe,ge,te)}switch(P){case"input":gt(d,u);break;case"textarea":vt(d,u);break;case"select":var pe=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!u.multiple;var $e=u.value;$e!=null?Be(d,!!u.multiple,$e,!1):pe!==!!u.multiple&&(u.defaultValue!=null?Be(d,!!u.multiple,u.defaultValue,!0):Be(d,!!u.multiple,u.multiple?[]:"",!1))}d[fs]=u}catch(Ne){Dt(t,t.return,Ne)}}break;case 6:if(sn(n,t),wn(t),o&4){if(t.stateNode===null)throw Error(s(162));d=t.stateNode,u=t.memoizedProps;try{d.nodeValue=u}catch(Ne){Dt(t,t.return,Ne)}}break;case 3:if(sn(n,t),wn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Wn(n.containerInfo)}catch(Ne){Dt(t,t.return,Ne)}break;case 4:sn(n,t),wn(t);break;case 13:sn(n,t),wn(t),d=t.child,d.flags&8192&&(u=d.memoizedState!==null,d.stateNode.isHidden=u,!u||d.alternate!==null&&d.alternate.memoizedState!==null||(qd=yt())),o&4&&lm(t);break;case 22:if(fe=a!==null&&a.memoizedState!==null,t.mode&1?(or=(te=or)||fe,sn(n,t),or=te):sn(n,t),wn(t),o&8192){if(te=t.memoizedState!==null,(t.stateNode.isHidden=te)&&!fe&&(t.mode&1)!==0)for(Re=t,fe=t.child;fe!==null;){for(ge=Re=fe;Re!==null;){switch(pe=Re,$e=pe.child,pe.tag){case 0:case 11:case 14:case 15:ks(4,pe,pe.return);break;case 1:wi(pe,pe.return);var ze=pe.stateNode;if(typeof ze.componentWillUnmount=="function"){o=pe,a=pe.return;try{n=o,ze.props=n.memoizedProps,ze.state=n.memoizedState,ze.componentWillUnmount()}catch(Ne){Dt(o,a,Ne)}}break;case 5:wi(pe,pe.return);break;case 22:if(pe.memoizedState!==null){pm(ge);continue}}$e!==null?($e.return=pe,Re=$e):pm(ge)}fe=fe.sibling}e:for(fe=null,ge=t;;){if(ge.tag===5){if(fe===null){fe=ge;try{d=ge.stateNode,te?(u=d.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none"):(P=ge.stateNode,N=ge.memoizedProps.style,g=N!=null&&N.hasOwnProperty("display")?N.display:null,P.style.display=M("display",g))}catch(Ne){Dt(t,t.return,Ne)}}}else if(ge.tag===6){if(fe===null)try{ge.stateNode.nodeValue=te?"":ge.memoizedProps}catch(Ne){Dt(t,t.return,Ne)}}else if((ge.tag!==22&&ge.tag!==23||ge.memoizedState===null||ge===t)&&ge.child!==null){ge.child.return=ge,ge=ge.child;continue}if(ge===t)break e;for(;ge.sibling===null;){if(ge.return===null||ge.return===t)break e;fe===ge&&(fe=null),ge=ge.return}fe===ge&&(fe=null),ge.sibling.return=ge.return,ge=ge.sibling}}break;case 19:sn(n,t),wn(t),o&4&&lm(t);break;case 21:break;default:sn(n,t),wn(t)}}function wn(t){var n=t.flags;if(n&2){try{e:{for(var a=t.return;a!==null;){if(im(a)){var o=a;break e}a=a.return}throw Error(s(160))}switch(o.tag){case 5:var d=o.stateNode;o.flags&32&&(rr(d,""),o.flags&=-33);var u=sm(t);Od(t,u,d);break;case 3:case 4:var g=o.stateNode.containerInfo,P=sm(t);Ld(t,P,g);break;default:throw Error(s(161))}}catch(N){Dt(t,t.return,N)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Uy(t,n,a){Re=t,dm(t)}function dm(t,n,a){for(var o=(t.mode&1)!==0;Re!==null;){var d=Re,u=d.child;if(d.tag===22&&o){var g=d.memoizedState!==null||el;if(!g){var P=d.alternate,N=P!==null&&P.memoizedState!==null||or;P=el;var te=or;if(el=g,(or=N)&&!te)for(Re=d;Re!==null;)g=Re,N=g.child,g.tag===22&&g.memoizedState!==null?fm(d):N!==null?(N.return=g,Re=N):fm(d);for(;u!==null;)Re=u,dm(u),u=u.sibling;Re=d,el=P,or=te}um(t)}else(d.subtreeFlags&8772)!==0&&u!==null?(u.return=d,Re=u):um(t)}}function um(t){for(;Re!==null;){var n=Re;if((n.flags&8772)!==0){var a=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:or||tl(5,n);break;case 1:var o=n.stateNode;if(n.flags&4&&!or)if(a===null)o.componentDidMount();else{var d=n.elementType===n.type?a.memoizedProps:nn(n.type,a.memoizedProps);o.componentDidUpdate(d,a.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var u=n.updateQueue;u!==null&&ph(n,u,o);break;case 3:var g=n.updateQueue;if(g!==null){if(a=null,n.child!==null)switch(n.child.tag){case 5:a=n.child.stateNode;break;case 1:a=n.child.stateNode}ph(n,g,a)}break;case 5:var P=n.stateNode;if(a===null&&n.flags&4){a=P;var N=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":N.autoFocus&&a.focus();break;case"img":N.src&&(a.src=N.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var te=n.alternate;if(te!==null){var fe=te.memoizedState;if(fe!==null){var ge=fe.dehydrated;ge!==null&&Wn(ge)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(s(163))}or||n.flags&512&&Fd(n)}catch(pe){Dt(n,n.return,pe)}}if(n===t){Re=null;break}if(a=n.sibling,a!==null){a.return=n.return,Re=a;break}Re=n.return}}function pm(t){for(;Re!==null;){var n=Re;if(n===t){Re=null;break}var a=n.sibling;if(a!==null){a.return=n.return,Re=a;break}Re=n.return}}function fm(t){for(;Re!==null;){var n=Re;try{switch(n.tag){case 0:case 11:case 15:var a=n.return;try{tl(4,n)}catch(N){Dt(n,a,N)}break;case 1:var o=n.stateNode;if(typeof o.componentDidMount=="function"){var d=n.return;try{o.componentDidMount()}catch(N){Dt(n,d,N)}}var u=n.return;try{Fd(n)}catch(N){Dt(n,u,N)}break;case 5:var g=n.return;try{Fd(n)}catch(N){Dt(n,g,N)}}}catch(N){Dt(n,n.return,N)}if(n===t){Re=null;break}var P=n.sibling;if(P!==null){P.return=n.return,Re=P;break}Re=n.return}}var Hy=Math.ceil,rl=I.ReactCurrentDispatcher,Id=I.ReactCurrentOwner,Gr=I.ReactCurrentBatchConfig,it=0,Kt=null,Bt=null,Zt=0,Nr=0,_i=Yn(0),Vt=0,Ss=null,Pa=0,nl=0,Bd=0,Cs=null,wr=null,qd=0,ki=1/0,Dn=null,al=!1,Ud=null,ra=null,il=!1,na=null,sl=0,Es=0,Hd=null,ol=-1,ll=0;function hr(){return(it&6)!==0?yt():ol!==-1?ol:ol=yt()}function aa(t){return(t.mode&1)===0?1:(it&2)!==0&&Zt!==0?Zt&-Zt:Ey.transition!==null?(ll===0&&(ll=xo()),ll):(t=ut,t!==0||(t=window.event,t=t===void 0?16:mf(t.type)),t)}function on(t,n,a,o){if(50<Es)throw Es=0,Hd=null,Error(s(185));ba(t,a,o),((it&2)===0||t!==Kt)&&(t===Kt&&((it&2)===0&&(nl|=a),Vt===4&&ia(t,Zt)),_r(t,o),a===1&&it===0&&(n.mode&1)===0&&(ki=yt()+500,Do&&Jn()))}function _r(t,n){var a=t.callbackNode;Ec(t,n);var o=ni(t,t===Kt?Zt:0);if(o===0)a!==null&&Xi(a),t.callbackNode=null,t.callbackPriority=0;else if(n=o&-o,t.callbackPriority!==n){if(a!=null&&Xi(a),n===1)t.tag===0?Cy(mm.bind(null,t)):eh(mm.bind(null,t)),wy(function(){(it&6)===0&&Jn()}),a=null;else{switch(go(o)){case 1:a=xn;break;case 4:a=Ji;break;case 16:a=ya;break;case 536870912:a=mo;break;default:a=ya}a=_m(a,hm.bind(null,t))}t.callbackPriority=n,t.callbackNode=a}}function hm(t,n){if(ol=-1,ll=0,(it&6)!==0)throw Error(s(327));var a=t.callbackNode;if(Si()&&t.callbackNode!==a)return null;var o=ni(t,t===Kt?Zt:0);if(o===0)return null;if((o&30)!==0||(o&t.expiredLanes)!==0||n)n=cl(t,o);else{n=o;var d=it;it|=2;var u=gm();(Kt!==t||Zt!==n)&&(Dn=null,ki=yt()+500,Na(t,n));do try{Gy();break}catch(P){xm(t,P)}while(!0);ld(),rl.current=u,it=d,Bt!==null?n=0:(Kt=null,Zt=0,n=Vt)}if(n!==0){if(n===2&&(d=Zi(t),d!==0&&(o=d,n=Vd(t,d))),n===1)throw a=Ss,Na(t,0),ia(t,o),_r(t,yt()),a;if(n===6)ia(t,o);else{if(d=t.current.alternate,(o&30)===0&&!Vy(d)&&(n=cl(t,o),n===2&&(u=Zi(t),u!==0&&(o=u,n=Vd(t,u))),n===1))throw a=Ss,Na(t,0),ia(t,o),_r(t,yt()),a;switch(t.finishedWork=d,t.finishedLanes=o,n){case 0:case 1:throw Error(s(345));case 2:Ma(t,wr,Dn);break;case 3:if(ia(t,o),(o&130023424)===o&&(n=qd+500-yt(),10<n)){if(ni(t,0)!==0)break;if(d=t.suspendedLanes,(d&o)!==o){hr(),t.pingedLanes|=t.suspendedLanes&d;break}t.timeoutHandle=Xc(Ma.bind(null,t,wr,Dn),n);break}Ma(t,wr,Dn);break;case 4:if(ia(t,o),(o&4194240)===o)break;for(n=t.eventTimes,d=-1;0<o;){var g=31-Er(o);u=1<<g,g=n[g],g>d&&(d=g),o&=~u}if(o=d,o=yt()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*Hy(o/1960))-o,10<o){t.timeoutHandle=Xc(Ma.bind(null,t,wr,Dn),o);break}Ma(t,wr,Dn);break;case 5:Ma(t,wr,Dn);break;default:throw Error(s(329))}}}return _r(t,yt()),t.callbackNode===a?hm.bind(null,t):null}function Vd(t,n){var a=Cs;return t.current.memoizedState.isDehydrated&&(Na(t,n).flags|=256),t=cl(t,n),t!==2&&(n=wr,wr=a,n!==null&&Wd(n)),t}function Wd(t){wr===null?wr=t:wr.push.apply(wr,t)}function Vy(t){for(var n=t;;){if(n.flags&16384){var a=n.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var o=0;o<a.length;o++){var d=a[o],u=d.getSnapshot;d=d.value;try{if(!tn(u(),d))return!1}catch{return!1}}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ia(t,n){for(n&=~Bd,n&=~nl,t.suspendedLanes|=n,t.pingedLanes&=~n,t=t.expirationTimes;0<n;){var a=31-Er(n),o=1<<a;t[a]=-1,n&=~o}}function mm(t){if((it&6)!==0)throw Error(s(327));Si();var n=ni(t,0);if((n&1)===0)return _r(t,yt()),null;var a=cl(t,n);if(t.tag!==0&&a===2){var o=Zi(t);o!==0&&(n=o,a=Vd(t,o))}if(a===1)throw a=Ss,Na(t,0),ia(t,n),_r(t,yt()),a;if(a===6)throw Error(s(345));return t.finishedWork=t.current.alternate,t.finishedLanes=n,Ma(t,wr,Dn),_r(t,yt()),null}function Gd(t,n){var a=it;it|=1;try{return t(n)}finally{it=a,it===0&&(ki=yt()+500,Do&&Jn())}}function za(t){na!==null&&na.tag===0&&(it&6)===0&&Si();var n=it;it|=1;var a=Gr.transition,o=ut;try{if(Gr.transition=null,ut=1,t)return t()}finally{ut=o,Gr.transition=a,it=n,(it&6)===0&&Jn()}}function Qd(){Nr=_i.current,_t(_i)}function Na(t,n){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;if(a!==-1&&(t.timeoutHandle=-1,by(a)),Bt!==null)for(a=Bt.return;a!==null;){var o=a;switch(nd(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&To();break;case 3:ji(),_t(yr),_t(ar),xd();break;case 5:hd(o);break;case 4:ji();break;case 13:_t(zt);break;case 19:_t(zt);break;case 10:cd(o.type._context);break;case 22:case 23:Qd()}a=a.return}if(Kt=t,Bt=t=sa(t.current,null),Zt=Nr=n,Vt=0,Ss=null,Bd=nl=Pa=0,wr=Cs=null,Ea!==null){for(n=0;n<Ea.length;n++)if(a=Ea[n],o=a.interleaved,o!==null){a.interleaved=null;var d=o.next,u=a.pending;if(u!==null){var g=u.next;u.next=d,o.next=g}a.pending=o}Ea=null}return t}function xm(t,n){do{var a=Bt;try{if(ld(),Wo.current=Yo,Go){for(var o=Nt.memoizedState;o!==null;){var d=o.queue;d!==null&&(d.pending=null),o=o.next}Go=!1}if(Ra=0,Qt=Ht=Nt=null,ys=!1,js=0,Id.current=null,a===null||a.return===null){Vt=1,Ss=n,Bt=null;break}e:{var u=t,g=a.return,P=a,N=n;if(n=Zt,P.flags|=32768,N!==null&&typeof N=="object"&&typeof N.then=="function"){var te=N,fe=P,ge=fe.tag;if((fe.mode&1)===0&&(ge===0||ge===11||ge===15)){var pe=fe.alternate;pe?(fe.updateQueue=pe.updateQueue,fe.memoizedState=pe.memoizedState,fe.lanes=pe.lanes):(fe.updateQueue=null,fe.memoizedState=null)}var $e=Bh(g);if($e!==null){$e.flags&=-257,qh($e,g,P,u,n),$e.mode&1&&Ih(u,te,n),n=$e,N=te;var ze=n.updateQueue;if(ze===null){var Ne=new Set;Ne.add(N),n.updateQueue=Ne}else ze.add(N);break e}else{if((n&1)===0){Ih(u,te,n),Kd();break e}N=Error(s(426))}}else if(Et&&P.mode&1){var Ot=Bh(g);if(Ot!==null){(Ot.flags&65536)===0&&(Ot.flags|=256),qh(Ot,g,P,u,n),sd(bi(N,P));break e}}u=N=bi(N,P),Vt!==4&&(Vt=2),Cs===null?Cs=[u]:Cs.push(u),u=g;do{switch(u.tag){case 3:u.flags|=65536,n&=-n,u.lanes|=n;var W=Lh(u,N,n);uh(u,W);break e;case 1:P=N;var L=u.type,Y=u.stateNode;if((u.flags&128)===0&&(typeof L.getDerivedStateFromError=="function"||Y!==null&&typeof Y.componentDidCatch=="function"&&(ra===null||!ra.has(Y)))){u.flags|=65536,n&=-n,u.lanes|=n;var be=Oh(u,P,n);uh(u,be);break e}}u=u.return}while(u!==null)}ym(a)}catch(Me){n=Me,Bt===a&&a!==null&&(Bt=a=a.return);continue}break}while(!0)}function gm(){var t=rl.current;return rl.current=Yo,t===null?Yo:t}function Kd(){(Vt===0||Vt===3||Vt===2)&&(Vt=4),Kt===null||(Pa&268435455)===0&&(nl&268435455)===0||ia(Kt,Zt)}function cl(t,n){var a=it;it|=2;var o=gm();(Kt!==t||Zt!==n)&&(Dn=null,Na(t,n));do try{Wy();break}catch(d){xm(t,d)}while(!0);if(ld(),it=a,rl.current=o,Bt!==null)throw Error(s(261));return Kt=null,Zt=0,Vt}function Wy(){for(;Bt!==null;)vm(Bt)}function Gy(){for(;Bt!==null&&!en();)vm(Bt)}function vm(t){var n=wm(t.alternate,t,Nr);t.memoizedProps=t.pendingProps,n===null?ym(t):Bt=n,Id.current=null}function ym(t){var n=t;do{var a=n.alternate;if(t=n.return,(n.flags&32768)===0){if(a=Oy(a,n,Nr),a!==null){Bt=a;return}}else{if(a=Iy(a,n),a!==null){a.flags&=32767,Bt=a;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Vt=6,Bt=null;return}}if(n=n.sibling,n!==null){Bt=n;return}Bt=n=t}while(n!==null);Vt===0&&(Vt=5)}function Ma(t,n,a){var o=ut,d=Gr.transition;try{Gr.transition=null,ut=1,Qy(t,n,a,o)}finally{Gr.transition=d,ut=o}return null}function Qy(t,n,a,o){do Si();while(na!==null);if((it&6)!==0)throw Error(s(327));a=t.finishedWork;var d=t.finishedLanes;if(a===null)return null;if(t.finishedWork=null,t.finishedLanes=0,a===t.current)throw Error(s(177));t.callbackNode=null,t.callbackPriority=0;var u=a.lanes|a.childLanes;if($c(t,u),t===Kt&&(Bt=Kt=null,Zt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||il||(il=!0,_m(ya,function(){return Si(),null})),u=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||u){u=Gr.transition,Gr.transition=null;var g=ut;ut=1;var P=it;it|=4,Id.current=null,qy(t,a),cm(a,t),hy(Kc),jo=!!Qc,Kc=Qc=null,t.current=a,Uy(a),vr(),it=P,ut=g,Gr.transition=u}else t.current=a;if(il&&(il=!1,na=t,sl=d),u=t.pendingLanes,u===0&&(ra=null),_c(a.stateNode),_r(t,yt()),n!==null)for(o=t.onRecoverableError,a=0;a<n.length;a++)d=n[a],o(d.value,{componentStack:d.stack,digest:d.digest});if(al)throw al=!1,t=Ud,Ud=null,t;return(sl&1)!==0&&t.tag!==0&&Si(),u=t.pendingLanes,(u&1)!==0?t===Hd?Es++:(Es=0,Hd=t):Es=0,Jn(),null}function Si(){if(na!==null){var t=go(sl),n=Gr.transition,a=ut;try{if(Gr.transition=null,ut=16>t?16:t,na===null)var o=!1;else{if(t=na,na=null,sl=0,(it&6)!==0)throw Error(s(331));var d=it;for(it|=4,Re=t.current;Re!==null;){var u=Re,g=u.child;if((Re.flags&16)!==0){var P=u.deletions;if(P!==null){for(var N=0;N<P.length;N++){var te=P[N];for(Re=te;Re!==null;){var fe=Re;switch(fe.tag){case 0:case 11:case 15:ks(8,fe,u)}var ge=fe.child;if(ge!==null)ge.return=fe,Re=ge;else for(;Re!==null;){fe=Re;var pe=fe.sibling,$e=fe.return;if(am(fe),fe===te){Re=null;break}if(pe!==null){pe.return=$e,Re=pe;break}Re=$e}}}var ze=u.alternate;if(ze!==null){var Ne=ze.child;if(Ne!==null){ze.child=null;do{var Ot=Ne.sibling;Ne.sibling=null,Ne=Ot}while(Ne!==null)}}Re=u}}if((u.subtreeFlags&2064)!==0&&g!==null)g.return=u,Re=g;else e:for(;Re!==null;){if(u=Re,(u.flags&2048)!==0)switch(u.tag){case 0:case 11:case 15:ks(9,u,u.return)}var W=u.sibling;if(W!==null){W.return=u.return,Re=W;break e}Re=u.return}}var L=t.current;for(Re=L;Re!==null;){g=Re;var Y=g.child;if((g.subtreeFlags&2064)!==0&&Y!==null)Y.return=g,Re=Y;else e:for(g=L;Re!==null;){if(P=Re,(P.flags&2048)!==0)try{switch(P.tag){case 0:case 11:case 15:tl(9,P)}}catch(Me){Dt(P,P.return,Me)}if(P===g){Re=null;break e}var be=P.sibling;if(be!==null){be.return=P.return,Re=be;break e}Re=P.return}}if(it=d,Jn(),qr&&typeof qr.onPostCommitFiberRoot=="function")try{qr.onPostCommitFiberRoot(ei,t)}catch{}o=!0}return o}finally{ut=a,Gr.transition=n}}return!1}function jm(t,n,a){n=bi(a,n),n=Lh(t,n,1),t=ea(t,n,1),n=hr(),t!==null&&(ba(t,1,n),_r(t,n))}function Dt(t,n,a){if(t.tag===3)jm(t,t,a);else for(;n!==null;){if(n.tag===3){jm(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(ra===null||!ra.has(o))){t=bi(a,t),t=Oh(n,t,1),n=ea(n,t,1),t=hr(),n!==null&&(ba(n,1,t),_r(n,t));break}}n=n.return}}function Ky(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),n=hr(),t.pingedLanes|=t.suspendedLanes&a,Kt===t&&(Zt&a)===a&&(Vt===4||Vt===3&&(Zt&130023424)===Zt&&500>yt()-qd?Na(t,0):Bd|=a),_r(t,n)}function bm(t,n){n===0&&((t.mode&1)===0?n=1:(n=ri,ri<<=1,(ri&130023424)===0&&(ri=4194304)));var a=hr();t=Mn(t,n),t!==null&&(ba(t,n,a),_r(t,a))}function Yy(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),bm(t,a)}function Xy(t,n){var a=0;switch(t.tag){case 13:var o=t.stateNode,d=t.memoizedState;d!==null&&(a=d.retryLane);break;case 19:o=t.stateNode;break;default:throw Error(s(314))}o!==null&&o.delete(n),bm(t,a)}var wm;wm=function(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps||yr.current)br=!0;else{if((t.lanes&a)===0&&(n.flags&128)===0)return br=!1,Ly(t,n,a);br=(t.flags&131072)!==0}else br=!1,Et&&(n.flags&1048576)!==0&&th(n,Lo,n.index);switch(n.lanes=0,n.tag){case 2:var o=n.type;Zo(t,n),t=n.pendingProps;var d=fi(n,ar.current);yi(n,a),d=yd(null,n,o,t,d,a);var u=jd();return n.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,jr(o)?(u=!0,Ao(n)):u=!1,n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,pd(n),d.updater=Xo,n.stateNode=d,d._reactInternals=n,Cd(n,o,t,a),n=Pd(null,n,o,!0,u,a)):(n.tag=0,Et&&u&&rd(n),fr(null,n,d,a),n=n.child),n;case 16:o=n.elementType;e:{switch(Zo(t,n),t=n.pendingProps,d=o._init,o=d(o._payload),n.type=o,d=n.tag=Zy(o),t=nn(o,t),d){case 0:n=Rd(null,n,o,t,a);break e;case 1:n=Qh(null,n,o,t,a);break e;case 11:n=Uh(null,n,o,t,a);break e;case 14:n=Hh(null,n,o,nn(o.type,t),a);break e}throw Error(s(306,o,""))}return n;case 0:return o=n.type,d=n.pendingProps,d=n.elementType===o?d:nn(o,d),Rd(t,n,o,d,a);case 1:return o=n.type,d=n.pendingProps,d=n.elementType===o?d:nn(o,d),Qh(t,n,o,d,a);case 3:e:{if(Kh(n),t===null)throw Error(s(387));o=n.pendingProps,u=n.memoizedState,d=u.element,dh(t,n),Ho(n,o,null,a);var g=n.memoizedState;if(o=g.element,u.isDehydrated)if(u={element:o,isDehydrated:!1,cache:g.cache,pendingSuspenseBoundaries:g.pendingSuspenseBoundaries,transitions:g.transitions},n.updateQueue.baseState=u,n.memoizedState=u,n.flags&256){d=bi(Error(s(423)),n),n=Yh(t,n,o,a,d);break e}else if(o!==d){d=bi(Error(s(424)),n),n=Yh(t,n,o,a,d);break e}else for(zr=Kn(n.stateNode.containerInfo.firstChild),Pr=n,Et=!0,rn=null,a=lh(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(xi(),o===d){n=An(t,n,a);break e}fr(t,n,o,a)}n=n.child}return n;case 5:return fh(n),t===null&&id(n),o=n.type,d=n.pendingProps,u=t!==null?t.memoizedProps:null,g=d.children,Yc(o,d)?g=null:u!==null&&Yc(o,u)&&(n.flags|=32),Gh(t,n),fr(t,n,g,a),n.child;case 6:return t===null&&id(n),null;case 13:return Xh(t,n,a);case 4:return fd(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=gi(n,null,o,a):fr(t,n,o,a),n.child;case 11:return o=n.type,d=n.pendingProps,d=n.elementType===o?d:nn(o,d),Uh(t,n,o,d,a);case 7:return fr(t,n,n.pendingProps,a),n.child;case 8:return fr(t,n,n.pendingProps.children,a),n.child;case 12:return fr(t,n,n.pendingProps.children,a),n.child;case 10:e:{if(o=n.type._context,d=n.pendingProps,u=n.memoizedProps,g=d.value,jt(Bo,o._currentValue),o._currentValue=g,u!==null)if(tn(u.value,g)){if(u.children===d.children&&!yr.current){n=An(t,n,a);break e}}else for(u=n.child,u!==null&&(u.return=n);u!==null;){var P=u.dependencies;if(P!==null){g=u.child;for(var N=P.firstContext;N!==null;){if(N.context===o){if(u.tag===1){N=Tn(-1,a&-a),N.tag=2;var te=u.updateQueue;if(te!==null){te=te.shared;var fe=te.pending;fe===null?N.next=N:(N.next=fe.next,fe.next=N),te.pending=N}}u.lanes|=a,N=u.alternate,N!==null&&(N.lanes|=a),dd(u.return,a,n),P.lanes|=a;break}N=N.next}}else if(u.tag===10)g=u.type===n.type?null:u.child;else if(u.tag===18){if(g=u.return,g===null)throw Error(s(341));g.lanes|=a,P=g.alternate,P!==null&&(P.lanes|=a),dd(g,a,n),g=u.sibling}else g=u.child;if(g!==null)g.return=u;else for(g=u;g!==null;){if(g===n){g=null;break}if(u=g.sibling,u!==null){u.return=g.return,g=u;break}g=g.return}u=g}fr(t,n,d.children,a),n=n.child}return n;case 9:return d=n.type,o=n.pendingProps.children,yi(n,a),d=Vr(d),o=o(d),n.flags|=1,fr(t,n,o,a),n.child;case 14:return o=n.type,d=nn(o,n.pendingProps),d=nn(o.type,d),Hh(t,n,o,d,a);case 15:return Vh(t,n,n.type,n.pendingProps,a);case 17:return o=n.type,d=n.pendingProps,d=n.elementType===o?d:nn(o,d),Zo(t,n),n.tag=1,jr(o)?(t=!0,Ao(n)):t=!1,yi(n,a),Dh(n,o,d),Cd(n,o,d,a),Pd(null,n,o,!0,t,a);case 19:return Zh(t,n,a);case 22:return Wh(t,n,a)}throw Error(s(156,n.tag))};function _m(t,n){return Yi(t,n)}function Jy(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qr(t,n,a,o){return new Jy(t,n,a,o)}function Yd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Zy(t){if(typeof t=="function")return Yd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===le)return 11;if(t===Pe)return 14}return 2}function sa(t,n){var a=t.alternate;return a===null?(a=Qr(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&14680064,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a}function dl(t,n,a,o,d,u){var g=2;if(o=t,typeof t=="function")Yd(t)&&(g=1);else if(typeof t=="string")g=5;else e:switch(t){case F:return Ta(a.children,d,u,n);case ae:g=8,d|=8;break;case k:return t=Qr(12,a,n,d|2),t.elementType=k,t.lanes=u,t;case je:return t=Qr(13,a,n,d),t.elementType=je,t.lanes=u,t;case we:return t=Qr(19,a,n,d),t.elementType=we,t.lanes=u,t;case he:return ul(a,d,u,n);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case y:g=10;break e;case B:g=9;break e;case le:g=11;break e;case Pe:g=14;break e;case K:g=16,o=null;break e}throw Error(s(130,t==null?t:typeof t,""))}return n=Qr(g,a,n,d),n.elementType=t,n.type=o,n.lanes=u,n}function Ta(t,n,a,o){return t=Qr(7,t,o,n),t.lanes=a,t}function ul(t,n,a,o){return t=Qr(22,t,o,n),t.elementType=he,t.lanes=a,t.stateNode={isHidden:!1},t}function Xd(t,n,a){return t=Qr(6,t,null,n),t.lanes=a,t}function Jd(t,n,a){return n=Qr(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}function e0(t,n,a,o,d){this.tag=n,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=es(0),this.expirationTimes=es(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=es(0),this.identifierPrefix=o,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Zd(t,n,a,o,d,u,g,P,N){return t=new e0(t,n,a,P,N),n===1?(n=1,u===!0&&(n|=8)):n=0,u=Qr(3,null,null,n),t.current=u,u.stateNode=t,u.memoizedState={element:o,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},pd(u),t}function t0(t,n,a){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Q,key:o==null?null:""+o,children:t,containerInfo:n,implementation:a}}function km(t){if(!t)return Xn;t=t._reactInternals;e:{if(mn(t)!==t||t.tag!==1)throw Error(s(170));var n=t;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(jr(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(s(171))}if(t.tag===1){var a=t.type;if(jr(a))return Jf(t,a,n)}return n}function Sm(t,n,a,o,d,u,g,P,N){return t=Zd(a,o,!0,t,d,u,g,P,N),t.context=km(null),a=t.current,o=hr(),d=aa(a),u=Tn(o,d),u.callback=n??null,ea(a,u,d),t.current.lanes=d,ba(t,d,o),_r(t,o),t}function pl(t,n,a,o){var d=n.current,u=hr(),g=aa(d);return a=km(a),n.context===null?n.context=a:n.pendingContext=a,n=Tn(u,g),n.payload={element:t},o=o===void 0?null:o,o!==null&&(n.callback=o),t=ea(d,n,g),t!==null&&(on(t,d,g,u),Uo(t,d,g)),g}function fl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Cm(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function eu(t,n){Cm(t,n),(t=t.alternate)&&Cm(t,n)}function r0(){return null}var Em=typeof reportError=="function"?reportError:function(t){console.error(t)};function tu(t){this._internalRoot=t}hl.prototype.render=tu.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));pl(t,n,null,null)},hl.prototype.unmount=tu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;za(function(){pl(null,t,null,null)}),n[Rn]=null}};function hl(t){this._internalRoot=t}hl.prototype.unstable_scheduleHydration=function(t){if(t){var n=rs();t={blockedOn:null,target:t,priority:n};for(var a=0;a<X.length&&n!==0&&n<X[a].priority;a++);X.splice(a,0,t),a===0&&bt(t)}};function ru(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ml(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function $m(){}function n0(t,n,a,o,d){if(d){if(typeof o=="function"){var u=o;o=function(){var te=fl(g);u.call(te)}}var g=Sm(n,o,t,0,null,!1,!1,"",$m);return t._reactRootContainer=g,t[Rn]=g.current,us(t.nodeType===8?t.parentNode:t),za(),g}for(;d=t.lastChild;)t.removeChild(d);if(typeof o=="function"){var P=o;o=function(){var te=fl(N);P.call(te)}}var N=Zd(t,0,!1,null,null,!1,!1,"",$m);return t._reactRootContainer=N,t[Rn]=N.current,us(t.nodeType===8?t.parentNode:t),za(function(){pl(n,N,a,o)}),N}function xl(t,n,a,o,d){var u=a._reactRootContainer;if(u){var g=u;if(typeof d=="function"){var P=d;d=function(){var N=fl(g);P.call(N)}}pl(n,g,t,d)}else g=n0(a,n,t,d,o);return fl(g)}vo=function(t){switch(t.tag){case 3:var n=t.stateNode;if(n.current.memoizedState.isDehydrated){var a=ja(n.pendingLanes);a!==0&&(ts(n,a|1),_r(n,yt()),(it&6)===0&&(ki=yt()+500,Jn()))}break;case 13:za(function(){var o=Mn(t,1);if(o!==null){var d=hr();on(o,t,1,d)}}),eu(t,1)}},qn=function(t){if(t.tag===13){var n=Mn(t,134217728);if(n!==null){var a=hr();on(n,t,134217728,a)}eu(t,134217728)}},wa=function(t){if(t.tag===13){var n=aa(t),a=Mn(t,n);if(a!==null){var o=hr();on(a,t,n,o)}eu(t,n)}},rs=function(){return ut},yo=function(t,n){var a=ut;try{return ut=t,n()}finally{ut=a}},Z=function(t,n,a){switch(n){case"input":if(gt(t,a),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var d=Mo(o);if(!d)throw Error(s(90));et(o),gt(o,d)}}}break;case"textarea":vt(t,a);break;case"select":n=a.value,n!=null&&Be(t,!!a.multiple,n,!1)}},fo=Gd,Vi=za;var a0={usingClientEntryPoint:!1,Events:[hs,ui,Mo,hn,dt,Gd]},$s={findFiberByHostInstance:_a,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},i0={bundleType:$s.bundleType,version:$s.version,rendererPackageName:$s.rendererPackageName,rendererConfig:$s.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:I.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Qi(t),t===null?null:t.stateNode},findFiberByHostInstance:$s.findFiberByHostInstance||r0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gl.isDisabled&&gl.supportsFiber)try{ei=gl.inject(i0),qr=gl}catch{}}return kr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=a0,kr.createPortal=function(t,n){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ru(n))throw Error(s(200));return t0(t,n,null,a)},kr.createRoot=function(t,n){if(!ru(t))throw Error(s(299));var a=!1,o="",d=Em;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(d=n.onRecoverableError)),n=Zd(t,1,!1,null,null,a,!1,o,d),t[Rn]=n.current,us(t.nodeType===8?t.parentNode:t),new tu(n)},kr.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=Qi(n),t=t===null?null:t.stateNode,t},kr.flushSync=function(t){return za(t)},kr.hydrate=function(t,n,a){if(!ml(n))throw Error(s(200));return xl(null,t,n,!0,a)},kr.hydrateRoot=function(t,n,a){if(!ru(t))throw Error(s(405));var o=a!=null&&a.hydratedSources||null,d=!1,u="",g=Em;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onRecoverableError!==void 0&&(g=a.onRecoverableError)),n=Sm(n,null,t,1,a??null,d,!1,u,g),t[Rn]=n.current,us(t),o)for(t=0;t<o.length;t++)a=o[t],d=a._getVersion,d=d(a._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[a,d]:n.mutableSourceEagerHydrationData.push(a,d);return new hl(n)},kr.render=function(t,n,a){if(!ml(n))throw Error(s(200));return xl(null,t,n,!1,a)},kr.unmountComponentAtNode=function(t){if(!ml(t))throw Error(s(40));return t._reactRootContainer?(za(function(){xl(null,null,t,!1,function(){t._reactRootContainer=null,t[Rn]=null})}),!0):!1},kr.unstable_batchedUpdates=Gd,kr.unstable_renderSubtreeIntoContainer=function(t,n,a,o){if(!ml(a))throw Error(s(200));if(t==null||t._reactInternals===void 0)throw Error(s(38));return xl(t,n,a,!1,o)},kr.version="18.3.1-next-f1338f8080-20240426",kr}var Dm;function Bg(){if(Dm)return iu.exports;Dm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(i){console.error(i)}}return r(),iu.exports=p0(),iu.exports}var Fm;function f0(){if(Fm)return vl;Fm=1;var r=Bg();return vl.createRoot=r.createRoot,vl.hydrateRoot=r.hydrateRoot,vl}var h0=f0();const m0=Ig(h0);var kt="-ms-",Ys="-moz-",pt="-webkit-",qg="comm",lc="rule",Dp="decl",x0="@import",g0="@namespace",Ug="@keyframes",v0="@layer",Hg=Math.abs,Fp=String.fromCharCode,up=Object.assign;function y0(r,i){return Wt(r,0)^45?(((i<<2^Wt(r,0))<<2^Wt(r,1))<<2^Wt(r,2))<<2^Wt(r,3):0}function Vg(r){return r.trim()}function Ln(r,i){return(r=i.exec(r))?r[0]:r}function We(r,i,s){return r.replace(i,s)}function Al(r,i,s){return r.indexOf(i,s)}function Wt(r,i){return r.charCodeAt(i)|0}function Ga(r,i,s){return r.slice(i,s)}function dn(r){return r.length}function Wg(r){return r.length}function Vs(r,i){return i.push(r),r}function j0(r,i){return r.map(i).join("")}function Lm(r,i){return r.filter(function(s){return!Ln(s,i)})}var cc=1,Di=1,Gg=0,Xr=0,qt=0,Bi="";function dc(r,i,s,l,c,p,f,m){return{value:r,root:i,parent:s,type:l,props:c,children:p,line:cc,column:Di,length:f,return:"",siblings:m}}function da(r,i){return up(dc("",null,null,"",null,null,0,r.siblings),r,{length:-r.length},i)}function Ci(r){for(;r.root;)r=da(r.root,{children:[r]});Vs(r,r.siblings)}function b0(){return qt}function w0(){return qt=Xr>0?Wt(Bi,--Xr):0,Di--,qt===10&&(Di=1,cc--),qt}function un(){return qt=Xr<Gg?Wt(Bi,Xr++):0,Di++,qt===10&&(Di=1,cc++),qt}function ua(){return Wt(Bi,Xr)}function Dl(){return Xr}function uc(r,i){return Ga(Bi,r,i)}function eo(r){switch(r){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function _0(r){return cc=Di=1,Gg=dn(Bi=r),Xr=0,[]}function k0(r){return Bi="",r}function lu(r){return Vg(uc(Xr-1,pp(r===91?r+2:r===40?r+1:r)))}function S0(r){for(;(qt=ua())&&qt<33;)un();return eo(r)>2||eo(qt)>3?"":" "}function C0(r,i){for(;--i&&un()&&!(qt<48||qt>102||qt>57&&qt<65||qt>70&&qt<97););return uc(r,Dl()+(i<6&&ua()==32&&un()==32))}function pp(r){for(;un();)switch(qt){case r:return Xr;case 34:case 39:r!==34&&r!==39&&pp(qt);break;case 40:r===41&&pp(r);break;case 92:un();break}return Xr}function E0(r,i){for(;un()&&r+qt!==57;)if(r+qt===84&&ua()===47)break;return"/*"+uc(i,Xr-1)+"*"+Fp(r===47?r:un())}function $0(r){for(;!eo(ua());)un();return uc(r,Xr)}function R0(r){return k0(Fl("",null,null,null,[""],r=_0(r),0,[0],r))}function Fl(r,i,s,l,c,p,f,m,x){for(var _=0,j=0,w=f,S=0,z=0,O=0,R=1,A=1,C=1,$=0,G="",I=c,J=p,Q=l,F=G;A;)switch(O=$,$=un()){case 40:if(O!=108&&Wt(F,w-1)==58){Al(F+=We(lu($),"&","&\f"),"&\f",Hg(_?m[_-1]:0))!=-1&&(C=-1);break}case 34:case 39:case 91:F+=lu($);break;case 9:case 10:case 13:case 32:F+=S0(O);break;case 92:F+=C0(Dl()-1,7);continue;case 47:switch(ua()){case 42:case 47:Vs(P0(E0(un(),Dl()),i,s,x),x),(eo(O||1)==5||eo(ua()||1)==5)&&dn(F)&&Ga(F,-1,void 0)!==" "&&(F+=" ");break;default:F+="/"}break;case 123*R:m[_++]=dn(F)*C;case 125*R:case 59:case 0:switch($){case 0:case 125:A=0;case 59+j:C==-1&&(F=We(F,/\f/g,"")),z>0&&(dn(F)-w||R===0&&O===47)&&Vs(z>32?Im(F+";",l,s,w-1,x):Im(We(F," ","")+";",l,s,w-2,x),x);break;case 59:F+=";";default:if(Vs(Q=Om(F,i,s,_,j,c,m,G,I=[],J=[],w,p),p),$===123)if(j===0)Fl(F,i,Q,Q,I,p,w,m,J);else{switch(S){case 99:if(Wt(F,3)===110)break;case 108:if(Wt(F,2)===97)break;default:j=0;case 100:case 109:case 115:}j?Fl(r,Q,Q,l&&Vs(Om(r,Q,Q,0,0,c,m,G,c,I=[],w,J),J),c,J,w,m,l?I:J):Fl(F,Q,Q,Q,[""],J,0,m,J)}}_=j=z=0,R=C=1,G=F="",w=f;break;case 58:w=1+dn(F),z=O;default:if(R<1){if($==123)--R;else if($==125&&R++==0&&w0()==125)continue}switch(F+=Fp($),$*R){case 38:C=j>0?1:(F+="\f",-1);break;case 44:m[_++]=(dn(F)-1)*C,C=1;break;case 64:ua()===45&&(F+=lu(un())),S=ua(),j=w=dn(G=F+=$0(Dl())),$++;break;case 45:O===45&&dn(F)==2&&(R=0)}}return p}function Om(r,i,s,l,c,p,f,m,x,_,j,w){for(var S=c-1,z=c===0?p:[""],O=Wg(z),R=0,A=0,C=0;R<l;++R)for(var $=0,G=Ga(r,S+1,S=Hg(A=f[R])),I=r;$<O;++$)(I=Vg(A>0?z[$]+" "+G:We(G,/&\f/g,z[$])))&&(x[C++]=I);return dc(r,i,s,c===0?lc:m,x,_,j,w)}function P0(r,i,s,l){return dc(r,i,s,qg,Fp(b0()),Ga(r,2,-2),0,l)}function Im(r,i,s,l,c){return dc(r,i,s,Dp,Ga(r,0,l),Ga(r,l+1,-1),l,c)}function Qg(r,i,s){switch(y0(r,i)){case 5103:return pt+"print-"+r+r;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return pt+r+r;case 4855:return pt+r.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+r;case 4789:return Ys+r+r;case 5349:case 4246:case 4810:case 6968:case 2756:return pt+r+Ys+r+kt+r+r;case 5936:switch(Wt(r,i+11)){case 114:return pt+r+kt+We(r,/[svh]\w+-[tblr]{2}/,"tb")+r;case 108:return pt+r+kt+We(r,/[svh]\w+-[tblr]{2}/,"tb-rl")+r;case 45:return pt+r+kt+We(r,/[svh]\w+-[tblr]{2}/,"lr")+r}case 6828:case 4268:case 2903:return pt+r+kt+r+r;case 6165:return pt+r+kt+"flex-"+r+r;case 5187:return pt+r+We(r,/(\w+).+(:[^]+)/,pt+"box-$1$2"+kt+"flex-$1$2")+r;case 5443:return pt+r+kt+"flex-item-"+We(r,/flex-|-self/g,"")+(Ln(r,/flex-|baseline/)?"":kt+"grid-row-"+We(r,/flex-|-self/g,""))+r;case 4675:return pt+r+kt+"flex-line-pack"+We(r,/align-content|flex-|-self/g,"")+r;case 5548:return pt+r+kt+We(r,"shrink","negative")+r;case 5292:return pt+r+kt+We(r,"basis","preferred-size")+r;case 6060:return pt+"box-"+We(r,"-grow","")+pt+r+kt+We(r,"grow","positive")+r;case 4554:return pt+We(r,/([^-])(transform)/g,"$1"+pt+"$2")+r;case 6187:return We(We(We(r,/(zoom-|grab)/,pt+"$1"),/(image-set)/,pt+"$1"),r,"")+r;case 5495:case 3959:return We(r,/(image-set\([^]*)/,pt+"$1$`$1");case 4968:return We(We(r,/(.+:)(flex-)?(.*)/,pt+"box-pack:$3"+kt+"flex-pack:$3"),/space-between/,"justify")+pt+r+r;case 4200:if(!Ln(r,/flex-|baseline/))return kt+"grid-column-align"+Ga(r,i)+r;break;case 2592:case 3360:return kt+We(r,"template-","")+r;case 4384:case 3616:return s&&s.some(function(l,c){return i=c,Ln(l.props,/grid-\w+-end/)})?~Al(r+(s=s[i].value),"span",0)?r:kt+We(r,"-start","")+r+kt+"grid-row-span:"+(~Al(s,"span",0)?Ln(s,/\d+/):+Ln(s,/\d+/)-+Ln(r,/\d+/))+";":kt+We(r,"-start","")+r;case 4896:case 4128:return s&&s.some(function(l){return Ln(l.props,/grid-\w+-start/)})?r:kt+We(We(r,"-end","-span"),"span ","")+r;case 4095:case 3583:case 4068:case 2532:return We(r,/(.+)-inline(.+)/,pt+"$1$2")+r;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(dn(r)-1-i>6)switch(Wt(r,i+1)){case 109:if(Wt(r,i+4)!==45)break;case 102:return We(r,/(.+:)(.+)-([^]+)/,"$1"+pt+"$2-$3$1"+Ys+(Wt(r,i+3)==108?"$3":"$2-$3"))+r;case 115:return~Al(r,"stretch",0)?Qg(We(r,"stretch","fill-available"),i,s)+r:r}break;case 5152:case 5920:return We(r,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(l,c,p,f,m,x,_){return kt+c+":"+p+_+(f?kt+c+"-span:"+(m?x:+x-+p)+_:"")+r});case 4949:if(Wt(r,i+6)===121)return We(r,":",":"+pt)+r;break;case 6444:switch(Wt(r,Wt(r,14)===45?18:11)){case 120:return We(r,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+pt+(Wt(r,14)===45?"inline-":"")+"box$3$1"+pt+"$2$3$1"+kt+"$2box$3")+r;case 100:return We(r,":",":"+kt)+r}break;case 5719:case 2647:case 2135:case 3927:case 2391:return We(r,"scroll-","scroll-snap-")+r}return r}function Ql(r,i){for(var s="",l=0;l<r.length;l++)s+=i(r[l],l,r,i)||"";return s}function z0(r,i,s,l){switch(r.type){case v0:if(r.children.length)break;case x0:case g0:case Dp:return r.return=r.return||r.value;case qg:return"";case Ug:return r.return=r.value+"{"+Ql(r.children,l)+"}";case lc:if(!dn(r.value=r.props.join(",")))return""}return dn(s=Ql(r.children,l))?r.return=r.value+"{"+s+"}":""}function N0(r){var i=Wg(r);return function(s,l,c,p){for(var f="",m=0;m<i;m++)f+=r[m](s,l,c,p)||"";return f}}function M0(r){return function(i){i.root||(i=i.return)&&r(i)}}function T0(r,i,s,l){if(r.length>-1&&!r.return)switch(r.type){case Dp:r.return=Qg(r.value,r.length,s);return;case Ug:return Ql([da(r,{value:We(r.value,"@","@"+pt)})],l);case lc:if(r.length)return j0(s=r.props,function(c){switch(Ln(c,l=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ci(da(r,{props:[We(c,/:(read-\w+)/,":"+Ys+"$1")]})),Ci(da(r,{props:[c]})),up(r,{props:Lm(s,l)});break;case"::placeholder":Ci(da(r,{props:[We(c,/:(plac\w+)/,":"+pt+"input-$1")]})),Ci(da(r,{props:[We(c,/:(plac\w+)/,":"+Ys+"$1")]})),Ci(da(r,{props:[We(c,/:(plac\w+)/,kt+"input-$1")]})),Ci(da(r,{props:[c]})),up(r,{props:Lm(s,l)});break}return""})}}var Ai={};function On(r,...i){return new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${r} for more information.${i.length>0?` Args: ${i.join(", ")}`:""}`)}var cu,du;const Fi=typeof process<"u"&&Ai!==void 0&&(Ai.REACT_APP_SC_ATTR||Ai.SC_ATTR)||"data-styled",Kg="active",Yg="data-styled-version",pc="6.6.0",Lp=`/*!sc*/
`,Xs=typeof window<"u"&&typeof document<"u";if(!dr.createContext)throw On(19);function Bm(r){if(typeof process<"u"&&Ai!==void 0){const i=Ai[r];if(i!==void 0&&i!=="")return i!=="false"}}const A0=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:(du=(cu=Bm("REACT_APP_SC_DISABLE_SPEEDY"))!==null&&cu!==void 0?cu:Bm("SC_DISABLE_SPEEDY"))!==null&&du!==void 0?du:typeof process<"u"&&Ai!==void 0&&!1),Xg="sc-keyframes-",D0={};let Ll=new Map,Kl=new Map,Ol=1;const Ws=r=>{if(Ll.has(r))return Ll.get(r);for(;Kl.has(Ol);)Ol++;const i=Ol++;return Ll.set(r,i),Kl.set(i,r),i},F0=r=>Kl.get(r),L0=(r,i)=>{Ol=i+1,Ll.set(r,i),Kl.set(i,r)},Op=Object.freeze([]),Li=Object.freeze({});function Jg(r,i,s=Li){return r.theme!==s.theme&&r.theme||i||s.theme}const O0=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,I0=/(^-|-$)/g;function Zg(r){return r.replace(O0,"-").replace(I0,"")}const B0=/(a)(d)/gi,qm=r=>String.fromCharCode(r+(r>25?39:97));function Ip(r){let i,s="";for(i=Math.abs(r);i>52;i=i/52|0)s=qm(i%52)+s;return(qm(i%52)+s).replace(B0,"$1-$2")}const fp=5381,Ua=(r,i)=>{let s=i.length;for(;s;)r=33*r^i.charCodeAt(--s);return r},ev=r=>Ua(fp,r);function Bp(r){return Ip(ev(r)>>>0)}function q0(r){return r.displayName||r.name||"Component"}function hp(r){return typeof r=="string"&&!0}function U0(r){return hp(r)?`styled.${r}`:`Styled(${q0(r)})`}const tv=Symbol.for("react.memo"),H0=Symbol.for("react.forward_ref"),V0={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},W0={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},rv={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},G0={[H0]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[tv]:rv};function Um(r){return("type"in(i=r)&&i.type.$$typeof)===tv?rv:"$$typeof"in r?G0[r.$$typeof]:V0;var i}const Q0=Object.defineProperty,K0=Object.getOwnPropertyNames,Y0=Object.getOwnPropertySymbols,X0=Object.getOwnPropertyDescriptor,J0=Object.getPrototypeOf,Z0=Object.prototype;function nv(r,i,s){if(typeof i!="string"){const l=J0(i);l&&l!==Z0&&nv(r,l,s);const c=K0(i).concat(Y0(i)),p=Um(r),f=Um(i);for(let m=0;m<c.length;++m){const x=c[m];if(!(x in W0||s&&s[x]||f&&x in f||p&&x in p)){const _=X0(i,x);try{Q0(r,x,_)}catch{}}}}return r}function qi(r){return typeof r=="function"}const ej=Symbol.for("react.forward_ref");function qp(r){return r!=null&&(typeof r=="object"||typeof r=="function")&&r.$$typeof===ej&&"styledComponentId"in r}function Gs(r,i){return r&&i?r+" "+i:r||i||""}function Yl(r,i){return r.join("")}function to(r){return r!==null&&typeof r=="object"&&r.constructor.name===Object.name&&!("props"in r&&r.$$typeof)}function mp(r,i,s=!1){if(!s&&!to(r)&&!Array.isArray(r))return i;if(Array.isArray(i))for(let l=0;l<i.length;l++)r[l]=mp(r[l],i[l]);else if(to(i))for(const l in i)r[l]=mp(r[l],i[l]);return r}function Up(r,i){Object.defineProperty(r,"toString",{value:i})}const tj=class{constructor(r){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=r,this._cGroup=0,this._cIndex=0}indexOfGroup(r){if(r===this._cGroup)return this._cIndex;let i=this._cIndex;if(r>this._cGroup)for(let s=this._cGroup;s<r;s++)i+=this.groupSizes[s];else for(let s=this._cGroup-1;s>=r;s--)i-=this.groupSizes[s];return this._cGroup=r,this._cIndex=i,i}insertRules(r,i){if(r>=this.groupSizes.length){const c=this.groupSizes,p=c.length;let f=p;for(;r>=f;)if(f<<=1,f<0)throw On(16,`${r}`);this.groupSizes=new Uint32Array(f),this.groupSizes.set(c),this.length=f;for(let m=p;m<f;m++)this.groupSizes[m]=0}let s=this.indexOfGroup(r+1),l=0;for(let c=0,p=i.length;c<p;c++)this.tag.insertRule(s,i[c])&&(this.groupSizes[r]++,s++,l++);l>0&&this._cGroup>r&&(this._cIndex+=l)}clearGroup(r){if(r<this.length){const i=this.groupSizes[r],s=this.indexOfGroup(r),l=s+i;this.groupSizes[r]=0;for(let c=s;c<l;c++)this.tag.deleteRule(s);i>0&&this._cGroup>r&&(this._cIndex-=i)}}getGroup(r){let i="";if(r>=this.length||this.groupSizes[r]===0)return i;const s=this.groupSizes[r],l=this.indexOfGroup(r),c=l+s;for(let p=l;p<c;p++)i+=this.tag.getRule(p)+Lp;return i}},rj=`style[${Fi}][${Yg}="${pc}"]`,nj=new RegExp(`^${Fi}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),Hm=r=>typeof ShadowRoot<"u"&&r instanceof ShadowRoot||"host"in r&&r.nodeType===11,xp=r=>{if(!r)return document;if(Hm(r))return r;if("getRootNode"in r){const i=r.getRootNode();if(Hm(i))return i}return document},aj=(r,i,s)=>{const l=s.split(",");let c;for(let p=0,f=l.length;p<f;p++)(c=l[p])&&r.registerName(i,c)},ij=(r,i)=>{var s;const l=((s=i.textContent)!==null&&s!==void 0?s:"").split(Lp),c=[];for(let p=0,f=l.length;p<f;p++){const m=l[p].trim();if(!m)continue;const x=m.match(nj);if(x){const _=0|parseInt(x[1],10),j=x[2];_!==0&&(L0(j,_),aj(r,j,x[3]),r.getTag().insertRules(_,c)),c.length=0}else c.push(m)}},uu=r=>{const s=xp(r.options.target).querySelectorAll(rj);for(let l=0,c=s.length;l<c;l++){const p=s[l];p&&p.getAttribute(Fi)!==Kg&&(ij(r,p),p.parentNode&&p.parentNode.removeChild(p))}};let Ps=!1;function sj(){if(Ps!==!1)return Ps;if(typeof document<"u"){const r=document.head.querySelector('meta[property="csp-nonce"]');if(r)return Ps=r.nonce||r.getAttribute("content")||void 0;const i=document.head.querySelector('meta[name="sc-nonce"]');if(i)return Ps=i.getAttribute("content")||void 0}return Ps=typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0}const av=(r,i)=>{if(typeof document>"u")throw On(20);const s=document.head,l=r||s,c=document.createElement("style"),p=(x=>{const _=Array.from(x.querySelectorAll(`style[${Fi}]`));return _[_.length-1]})(l),f=p!==void 0?p.nextSibling:null;c.setAttribute(Fi,Kg),c.setAttribute(Yg,pc);const m=i||sj();return m&&c.setAttribute("nonce",m),l.insertBefore(c,f),c},oj=class{constructor(r,i){this.element=av(r,i),this.element.appendChild(document.createTextNode("")),this.sheet=(s=>{var l;if(s.sheet)return s.sheet;const c=(l=s.getRootNode().styleSheets)!==null&&l!==void 0?l:document.styleSheets;for(let p=0,f=c.length;p<f;p++){const m=c[p];if(m.ownerNode===s)return m}throw On(17)})(this.element),this.length=0}insertRule(r,i){try{return this.sheet.insertRule(i,r),this.length++,!0}catch{return!1}}deleteRule(r){this.sheet.deleteRule(r),this.length--}getRule(r){const i=this.sheet.cssRules[r];return i&&i.cssText?i.cssText:""}},lj=class{constructor(r,i){this.element=av(r,i),this.nodes=this.element.childNodes,this.length=0}insertRule(r,i){if(r<=this.length&&r>=0){const s=document.createTextNode(i);return this.element.insertBefore(s,this.nodes[r]||null),this.length++,!0}return!1}deleteRule(r){this.element.removeChild(this.nodes[r]),this.length--}getRule(r){return r<this.length?this.nodes[r].textContent:""}};let Vm=Xs;const cj={isServer:!Xs,useCSSOMInjection:!A0};class so{static registerId(i){return Ws(i)}constructor(i=Li,s={},l){this.options=Object.assign(Object.assign({},cj),i),this.gs=s,this.keyframeIds=new Set,this.names=new Map(l),this.server=!!i.isServer,!this.server&&Xs&&Vm&&(Vm=!1,uu(this)),Up(this,()=>(c=>{const p=c.getTag(),{length:f}=p;let m="";for(let x=0;x<f;x++){const _=F0(x);if(_===void 0)continue;const j=c.names.get(_);if(j===void 0||!j.size)continue;const w=p.getGroup(x);if(w.length===0)continue;const S=Fi+".g"+x+'[id="'+_+'"]';let z="";for(const O of j)O.length>0&&(z+=O+",");m+=w+S+'{content:"'+z+'"}'+Lp}return m})(this))}rehydrate(){!this.server&&Xs&&uu(this)}reconstructWithOptions(i,s=!0){const l=new so(Object.assign(Object.assign({},this.options),i),this.gs,s&&this.names||void 0);return l.keyframeIds=new Set(this.keyframeIds),!this.server&&Xs&&i.target!==this.options.target&&xp(this.options.target)!==xp(i.target)&&uu(l),l}allocateGSInstance(i){return this.gs[i]=(this.gs[i]||0)+1}getTag(){return this.tag||(this.tag=(i=(({useCSSOMInjection:s,target:l,nonce:c})=>s?new oj(l,c):new lj(l,c))(this.options),new tj(i)));var i}hasNameForId(i,s){var l,c;return(c=(l=this.names.get(i))===null||l===void 0?void 0:l.has(s))!==null&&c!==void 0&&c}registerName(i,s){Ws(i),i.startsWith(Xg)&&this.keyframeIds.add(i);const l=this.names.get(i);l?l.add(s):this.names.set(i,new Set([s]))}insertRules(i,s,l){this.registerName(i,s),this.getTag().insertRules(Ws(i),l)}clearNames(i){this.names.has(i)&&this.names.get(i).clear()}clearRules(i){this.getTag().clearGroup(Ws(i)),this.clearNames(i)}clearTag(){this.tag=void 0}}const iv=new WeakSet,dj={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function uj(r,i){return i==null||typeof i=="boolean"||i===""?"":typeof i!="number"||i===0||r in dj||r.startsWith("--")?String(i).trim():i+"px"}const La=47;function Wm(r){if(r.charCodeAt(0)===45&&r.charCodeAt(1)===45)return r;let i="";for(let s=0;s<r.length;s++){const l=r.charCodeAt(s);i+=l>=65&&l<=90?"-"+String.fromCharCode(l+32):r[s]}return i.startsWith("ms-")?"-"+i:i}const sv=Symbol.for("sc-keyframes");function pj(r){return typeof r=="object"&&r!==null&&sv in r}function ov(r){return qi(r)&&!(r.prototype&&r.prototype.isReactComponent)}const lv=r=>r==null||r===!1||r==="",fj=Symbol.for("react.client.reference");function Gm(r){return r.$$typeof===fj}function cv(r,i){for(const s in r){const l=r[s];r.hasOwnProperty(s)&&!lv(l)&&(Array.isArray(l)&&iv.has(l)||qi(l)?i.push(Wm(s)+":",l,";"):to(l)?(i.push(s+" {"),cv(l,i),i.push("}")):i.push(Wm(s)+": "+uj(s,l)+";"))}}function ha(r,i,s,l,c=[]){if(lv(r))return c;const p=typeof r;if(p==="string")return c.push(r),c;if(p==="function"){if(Gm(r))return c;if(ov(r)&&i){const f=r(i);return ha(f,i,s,l,c)}return c.push(r),c}if(Array.isArray(r)){for(let f=0;f<r.length;f++)ha(r[f],i,s,l,c);return c}return qp(r)?(c.push(`.${r.styledComponentId}`),c):pj(r)?(s?(r.inject(s,l),c.push(r.getName(l))):c.push(r),c):Gm(r)?c:to(r)?r.toString!==Object.prototype.toString?(c.push(r.toString()),c):(cv(r,c),c):(c.push(r.toString()),c)}const hj=ev(pc);class mj{constructor(i,s,l){this.rules=i,this.componentId=s,this.baseHash=Ua(hj,s),this.baseStyle=l,so.registerId(s)}generateAndInjectStyles(i,s,l){let c=this.baseStyle?this.baseStyle.generateAndInjectStyles(i,s,l):"";{let p="";for(let f=0;f<this.rules.length;f++){const m=this.rules[f];if(typeof m=="string")p+=m;else if(m)if(ov(m)){const x=m(i);typeof x=="string"?p+=x:x!=null&&x!==!1&&(p+=Yl(ha(x,i,s,l)))}else p+=Yl(ha(m,i,s,l))}if(p){this.dynamicNameCache||(this.dynamicNameCache=new Map);const f=l.hash?l.hash+p:p;let m=this.dynamicNameCache.get(f);if(!m){if(m=Ip(Ua(Ua(this.baseHash,l.hash),p)>>>0),this.dynamicNameCache.size>=200){const x=this.dynamicNameCache.keys().next().value;x!==void 0&&this.dynamicNameCache.delete(x)}this.dynamicNameCache.set(f,m)}if(!s.hasNameForId(this.componentId,m)){const x=l(p,"."+m,void 0,this.componentId);s.insertRules(this.componentId,m,x)}c=Gs(c,m)}}return c}}const xj=/&/g;function dv(r,i){let s=0;for(;--i>=0&&r.charCodeAt(i)===92;)s++;return!(1&~s)}function pu(r){const i=r.length;let s="",l=0,c=0,p=0,f=!1,m=!1;for(let x=0;x<i;x++){const _=r.charCodeAt(x);if(p!==0||f||_!==La||r.charCodeAt(x+1)!==42)if(f)_===42&&r.charCodeAt(x+1)===La&&(f=!1,x++);else if(_!==34&&_!==39||dv(r,x)){if(p===0)if(_===123)c++;else if(_===125){if(c--,c<0){m=!0;let j=x+1;for(;j<i;){const w=r.charCodeAt(j);if(w===59||w===10)break;j++}j<i&&r.charCodeAt(j)===59&&j++,c=0,x=j-1,l=j;continue}c===0&&(s+=r.substring(l,x+1),l=x+1)}else _===59&&c===0&&(s+=r.substring(l,x+1),l=x+1)}else p===0?p=_:p===_&&(p=0);else f=!0,x++}return m||c!==0||p!==0?(l<i&&c===0&&p===0&&(s+=r.substring(l)),s):r}function uv(r,i){const s=i+" ",l=","+s;for(let c=0;c<r.length;c++){const p=r[c];if(p.type==="rule"){p.value=(s+p.value).replaceAll(",",l);const f=p.props,m=[];for(let x=0;x<f.length;x++)m[x]=s+f[x];p.props=m}Array.isArray(p.children)&&p.type!=="@keyframes"&&uv(p.children,i)}return r}function gj({options:r=Li,plugins:i=Op}=Li){let s,l,c;const p=(S,z,O)=>O.startsWith(l)&&O.endsWith(l)&&O.replaceAll(l,"").length>0?`.${s}`:S,f=i.slice();f.push(S=>{S.type===lc&&S.value.includes("&")&&(c||(c=new RegExp(`\\${l}\\b`,"g")),S.props[0]=S.props[0].replace(xj,l).replace(c,p))}),r.prefix&&f.push(T0),f.push(z0);let m=[];const x=N0(f.concat(M0(S=>m.push(S)))),_=(S,z="",O="",R="&")=>{s=R,l=z,c=void 0;const A=(function($){const G=$.indexOf("//")!==-1,I=$.indexOf("}")!==-1;if(!G&&!I)return $;if(!G)return pu($);const J=$.length;let Q="",F=0,ae=0,k=0,y=0,B=0,le=!1;for(;ae<J;){const je=$.charCodeAt(ae);if(je!==34&&je!==39||dv($,ae))if(k===0)if(je===La&&ae+1<J&&$.charCodeAt(ae+1)===42){for(ae+=2;ae+1<J&&($.charCodeAt(ae)!==42||$.charCodeAt(ae+1)!==La);)ae++;ae+=2}else if(je!==40)if(je!==41)if(y>0)ae++;else if(je===42&&ae+1<J&&$.charCodeAt(ae+1)===La)Q+=$.substring(F,ae),ae+=2,F=ae,le=!0;else if(je===La&&ae+1<J&&$.charCodeAt(ae+1)===La){for(Q+=$.substring(F,ae);ae<J&&$.charCodeAt(ae)!==10;)ae++;F=ae,le=!0}else je===123?B++:je===125&&B--,ae++;else y>0&&y--,ae++;else y++,ae++;else ae++;else k===0?k=je:k===je&&(k=0),ae++}return le?(F<J&&(Q+=$.substring(F)),B===0?Q:pu(Q)):B===0?$:pu($)})(S);let C=R0(O||z?O+" "+z+" { "+A+" }":A);return r.namespace&&(C=uv(C,r.namespace)),m=[],Ql(C,x),m},j=r;let w=fp;for(let S=0;S<i.length;S++)i[S].name||On(15),w=Ua(w,i[S].name);return j!=null&&j.namespace&&(w=Ua(w,j.namespace)),j!=null&&j.prefix&&(w=Ua(w,"p")),_.hash=w!==fp?w.toString():"",_}const vj=new so,gp=gj(),pv=dr.createContext({shouldForwardProp:void 0,styleSheet:vj,stylis:gp,stylisPlugins:void 0});pv.Consumer;function fv(){return dr.useContext(pv)}const ro=dr.createContext(void 0);ro.Consumer;function yj(r){const i=dr.useContext(ro),s=dr.useMemo(()=>(function(l,c){if(!l)throw On(14);if(qi(l))return l(c);if(Array.isArray(l)||typeof l!="object")throw On(8);return c?Object.assign(Object.assign({},c),l):l})(r.theme,i),[r.theme,i]);return r.children?dr.createElement(ro.Provider,{value:s},r.children):null}const fu={};function jj(r,i){const s=typeof r!="string"?"sc":Zg(r);fu[s]=(fu[s]||0)+1;const l=s+"-"+Bp(pc+s+fu[s]);return i?i+"-"+l:l}function bj(r,i,s){const l=qp(r),c=r,p=!hp(r),{attrs:f=Op,componentId:m=jj(i.displayName,i.parentComponentId),displayName:x=U0(r)}=i,_=i.displayName&&i.componentId?Zg(i.displayName)+"-"+i.componentId:i.componentId||m,j=l&&c.attrs?c.attrs.concat(f).filter(Boolean):f;let{shouldForwardProp:w}=i;if(l&&c.shouldForwardProp){const R=c.shouldForwardProp;if(i.shouldForwardProp){const A=i.shouldForwardProp;w=(C,$)=>R(C,$)&&A(C,$)}else w=R}const S=new mj(s,_,l?c.componentStyle:void 0);function z(R,A){return(function(C,$,G){const{attrs:I,componentStyle:J,defaultProps:Q,foldedComponentIds:F,styledComponentId:ae,target:k}=C,y=dr.useContext(ro),B=fv(),le=C.shouldForwardProp||B.shouldForwardProp,je=Jg($,y,Q)||Li,[we,Pe]=(function(E,b,re){const ce=Object.assign(Object.assign({},b),{className:void 0,theme:re});let T=null;const ie=E.length>1;for(let ve=0;ve<E.length;ve++){const ye=E[ve],U=qi(ye)?ye(ie?Object.assign({},ce):ce):ye;for(const de in U)de==="className"?ce.className=Gs(ce.className,U[de]):de==="style"?ce.style=Object.assign(Object.assign({},ce.style),U[de]):U[de]===void 0?de in ce&&(ce[de]!==void 0&&(T||(T=[])).push(de),ce[de]=void 0):ce[de]=U[de]}return"className"in b&&typeof b.className=="string"&&(ce.className=Gs(ce.className,b.className)),[ce,T]})(I,$,je),K=J.generateAndInjectStyles(we,B.styleSheet,B.stylis),he=we.as||k,oe=hp(he),me=(function(E,b,re,ce,T,ie){const ve={};for(const ye in E)ye[0]==="$"||ye==="as"||ye==="theme"&&E.theme===re||(ye==="forwardedAs"?E.forwardedAs!==void 0&&(ve.as=E.forwardedAs):E[ye]===void 0?ye==="className"||T||ie!==null&&ie.indexOf(ye)!==-1||ce&&!ce(ye,b)||(ve[ye]=void 0):ce&&!ce(ye,b)||(ve[ye]=E[ye]));return ve})(we,he,je,le,oe,Pe);let H=Gs(F,ae);return K&&(H+=" "+K),we.className&&(H+=" "+we.className),me[oe&&he.includes("-")?"class":"className"]=H,G&&(me.ref=G),v.createElement(he,me)})(O,R,A)}z.displayName=x;let O=dr.forwardRef(z);return O.attrs=j,O.componentStyle=S,O.displayName=x,O.shouldForwardProp=w,O.foldedComponentIds=l?Gs(c.foldedComponentIds,c.styledComponentId):"",O.styledComponentId=_,O.target=l?c.target:r,Object.defineProperty(O,"defaultProps",{get(){return this._foldedDefaultProps},set(R){this._foldedDefaultProps=l?(function(A,...C){for(const $ of C)mp(A,$,!0);return A})({},c.defaultProps,R):R}}),Up(O,()=>`.${O.styledComponentId}`),p&&nv(O,r,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),O}var wj=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]);function Qm(r,i){const s=[r[0]];for(let l=0,c=i.length;l<c;l+=1)s.push(i[l],r[l+1]);return s}const Km=r=>(iv.add(r),r);function Cn(r,...i){if(qi(r)||to(r))return Km(ha(Qm(Op,[r,...i])));const s=r;return i.length===0&&s.length===1&&typeof s[0]=="string"?ha(s):Km(ha(Qm(s,i)))}function vp(r,i,s=Li){if(!i)throw On(1,i);const l=(c,...p)=>r(i,s,Cn(c,...p));return l.attrs=c=>vp(r,i,Object.assign(Object.assign({},s),{attrs:Array.prototype.concat(s.attrs,c).filter(Boolean)})),l.withConfig=c=>vp(r,i,Object.assign(Object.assign({},s),c)),l}const hv=r=>vp(bj,r),h=hv;wj.forEach(r=>{h[r]=hv(r)});class _j{constructor(i,s){this.instanceRules=new Map,this.rules=i,this.componentId=s,this.isStatic=(function(l){for(let c=0;c<l.length;c+=1){const p=l[c];if(qi(p)&&!qp(p))return!1}return!0})(i),so.registerId(this.componentId)}removeStyles(i,s){this.instanceRules.delete(i),this.rebuildGroup(s)}renderStyles(i,s,l,c){const p=this.componentId;if(this.isStatic){if(l.hasNameForId(p,p+i))this.instanceRules.has(i)||this.computeRules(i,s,l,c);else{const m=this.computeRules(i,s,l,c);l.insertRules(p,m.name,m.rules)}return}const f=this.instanceRules.get(i);if(this.computeRules(i,s,l,c),!l.server&&f){const m=f.rules,x=this.instanceRules.get(i).rules;if(m.length===x.length){let _=!0;for(let j=0;j<m.length;j++)if(m[j]!==x[j]){_=!1;break}if(_)return}}this.rebuildGroup(l)}computeRules(i,s,l,c){const p=Yl(ha(this.rules,s,l,c)),f={name:this.componentId+i,rules:c(p,"")};return this.instanceRules.set(i,f),f}rebuildGroup(i){const s=this.componentId;i.clearRules(s);for(const l of this.instanceRules.values())i.insertRules(s,l.name,l.rules)}}function kj(r,...i){const s=Cn(r,...i),l=`sc-global-${Bp(JSON.stringify(s))}`,c=new _j(s,l),p=m=>{const x=fv(),_=dr.useContext(ro);let j;{const w=dr.useRef(null);w.current===null&&(w.current=x.styleSheet.allocateGSInstance(l)),j=w.current}x.styleSheet.server&&f(j,m,x.styleSheet,_,x.stylis);{const w=c.isStatic?[j,x.styleSheet,c]:[j,m,x.styleSheet,_,x.stylis,c],S=dr.useRef(c);dr.useLayoutEffect(()=>{x.styleSheet.server||(S.current!==c&&(x.styleSheet.clearRules(l),S.current=c),f(j,m,x.styleSheet,_,x.stylis))},w),dr.useLayoutEffect(()=>()=>{x.styleSheet.server||c.removeStyles(j,x.styleSheet)},[j,x.styleSheet,c])}return x.styleSheet.server&&c.instanceRules.delete(j),null};function f(m,x,_,j,w){if(c.isStatic)c.renderStyles(m,D0,_,w);else{const S=Object.assign(Object.assign({},x),{theme:Jg(x,j,p.defaultProps)});c.renderStyles(m,S,_,w)}}return dr.memo(p)}var mv;class Sj{constructor(i,s){this[mv]=!0,this.inject=(l,c=gp)=>{const p=this.getName(c);if(!l.hasNameForId(this.id,p)){const f=c(this.rules,p,"@keyframes");l.insertRules(this.id,p,f)}},this.name=i,this.id=Xg+i,this.rules=s,Ws(this.id),Up(this,()=>{throw On(12,String(this.name))})}getName(i=gp){return i.hash?this.name+Ip(+i.hash>>>0):this.name}}function Xa(r,...i){const s=Yl(Cn(r,...i)),l=Bp(s);return new Sj(l,s)}mv=sv;function xv(r,i){return function(){return r.apply(i,arguments)}}const{toString:Cj}=Object.prototype,{getPrototypeOf:ma}=Object,{iterator:oo,toStringTag:gv}=Symbol,no=(({hasOwnProperty:r})=>(i,s)=>r.call(i,s))(Object.prototype),vv=r=>typeof r=="string"&&(r==="__proto__"||r==="constructor"||r==="prototype"),yv=(r,i,s)=>r===Object.prototype||!s&&i===null,Ej=r=>{if(!Object.isExtensible(r))return!1;const i=Object.getOwnPropertyNames(r);return Object.getOwnPropertySymbols&&i.push(...Object.getOwnPropertySymbols(r)),i.every(s=>{if(vv(s))return!1;const l=Object.getOwnPropertyDescriptor(r,s);return!!l&&l.configurable&&l.writable===!0})},ao=(r,i)=>{let s=r;const l=[];for(;s!=null;){if(l.indexOf(s)!==-1)return!1;l.push(s);const c=ma(s);if(yv(s,c,s===r))return!1;if(no(s,i))return!0;s=c}return!1},$j=(r,i)=>r!=null&&ao(r,i)?r[i]:void 0,Rj=r=>{if(r==null||typeof r!="object"&&typeof r!="function")return r;const i=ma(r);if(i===null&&Ej(r))return r;const s=Object.create(null),l=Object.create(null),c=[];let p=r;for(;p!=null&&c.indexOf(p)===-1;){c.push(p);const f=p===r?i:ma(p);if(yv(p,f,p===r))break;const m=Object.getOwnPropertyNames(p);Object.getOwnPropertySymbols&&m.push(...Object.getOwnPropertySymbols(p));for(const x of m)vv(x)||no(l,x)||(s[x]=r[x],l[x]=!0);p=f}return s},Hp=(r=>i=>{const s=Cj.call(i);return r[s]||(r[s]=s.slice(8,-1).toLowerCase())})(Object.create(null)),Jr=r=>(r=r.toLowerCase(),i=>Hp(i)===r),fc=r=>i=>typeof i===r,{isArray:Qa}=Array,Ka=fc("undefined");function Ui(r){return r!==null&&!Ka(r)&&r.constructor!==null&&!Ka(r.constructor)&&Cr(r.constructor.isBuffer)&&r.constructor.isBuffer(r)}const jv=Jr("ArrayBuffer");function Pj(r){let i;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?i=ArrayBuffer.isView(r):i=r&&r.buffer&&jv(r.buffer),i}const zj=fc("string"),Cr=fc("function"),bv=fc("number"),Hi=r=>r!==null&&typeof r=="object",Nj=r=>r===!0||r===!1,Il=r=>{if(!Hi(r))return!1;const i=ma(r);return(i===null||i===Object.prototype||ma(i)===null)&&!ao(r,gv)&&!ao(r,oo)},Mj=r=>{if(!Hi(r)||Ui(r))return!1;try{return Object.keys(r).length===0&&Object.getPrototypeOf(r)===Object.prototype}catch{return!1}},Tj=Jr("Date"),Aj=Jr("File"),Dj=r=>!!(r&&typeof r.uri<"u"),Fj=r=>r&&typeof r.getParts<"u",Lj=Jr("Blob"),Oj=Jr("FileList"),Ij=Jr("Set"),Bj=r=>Hi(r)&&Cr(r.pipe);function qj(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const Ym=qj(),Xm=typeof Ym.FormData<"u"?Ym.FormData:void 0,Uj=r=>{if(!r)return!1;if(Xm&&r instanceof Xm)return!0;const i=ma(r);if(!i||i===Object.prototype||!Cr(r.append))return!1;const s=Hp(r);return s==="formdata"||s==="object"&&Cr(r.toString)&&r.toString()==="[object FormData]"},Hj=Jr("URLSearchParams"),[Vj,Wj,Gj,Qj]=["ReadableStream","Request","Response","Headers"].map(Jr),Kj=r=>r.trim?r.trim():r.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function lo(r,i,{allOwnKeys:s=!1}={}){if(r===null||typeof r>"u")return;let l,c;if(typeof r!="object"&&(r=[r]),Qa(r))for(l=0,c=r.length;l<c;l++)i.call(null,r[l],l,r);else{if(Ui(r))return;const p=s?Object.getOwnPropertyNames(r):Object.keys(r),f=p.length;let m;for(l=0;l<f;l++)m=p[l],i.call(null,r[m],m,r)}}function wv(r,i){if(Ui(r))return null;i=i.toLowerCase();const s=Object.keys(r);let l=s.length,c;for(;l-- >0;)if(c=s[l],i===c.toLowerCase())return c;return null}const Ia=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,_v=r=>!Ka(r)&&r!==Ia;function yp(...r){const{caseless:i,skipUndefined:s}=_v(this)&&this||{},l={},c=(p,f)=>{if(f==="__proto__"||f==="constructor"||f==="prototype")return;const m=i&&typeof f=="string"&&wv(l,f)||f,x=no(l,m)?l[m]:void 0;Il(x)&&Il(p)?l[m]=yp(x,p):Il(p)?l[m]=yp({},p):Qa(p)?l[m]=p.slice():(!s||!Ka(p))&&(l[m]=p)};for(let p=0,f=r.length;p<f;p++){const m=r[p];if(!m||Ui(m)||(lo(m,c),typeof m!="object"||Qa(m)))continue;const x=Object.getOwnPropertySymbols(m);for(let _=0;_<x.length;_++){const j=x[_];ob.call(m,j)&&c(m[j],j)}}return l}const Yj=(r,i,s,{allOwnKeys:l}={})=>(lo(i,(c,p)=>{s&&Cr(c)?Object.defineProperty(r,p,{__proto__:null,value:xv(c,s),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(r,p,{__proto__:null,value:c,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:l}),r),Xj=r=>(r.charCodeAt(0)===65279&&(r=r.slice(1)),r),Jj=(r,i,s,l)=>{r.prototype=Object.create(i.prototype,l),Object.defineProperty(r.prototype,"constructor",{__proto__:null,value:r,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(r,"super",{__proto__:null,value:i.prototype}),s&&Object.assign(r.prototype,s)},Zj=(r,i,s,l)=>{let c,p,f;const m={};if(i=i||{},r==null)return i;do{for(c=Object.getOwnPropertyNames(r),p=c.length;p-- >0;)f=c[p],(!l||l(f,r,i))&&!m[f]&&(i[f]=r[f],m[f]=!0);r=s!==!1&&ma(r)}while(r&&(!s||s(r,i))&&r!==Object.prototype);return i},eb=(r,i,s)=>{r=String(r),(s===void 0||s>r.length)&&(s=r.length),s-=i.length;const l=r.indexOf(i,s);return l!==-1&&l===s},tb=r=>{if(!r)return null;if(Qa(r))return r;let i=r.length;if(!bv(i))return null;const s=new Array(i);for(;i-- >0;)s[i]=r[i];return s},rb=(r=>i=>r&&i instanceof r)(typeof Uint8Array<"u"&&ma(Uint8Array)),nb=(r,i)=>{const l=(r&&r[oo]).call(r);let c;for(;(c=l.next())&&!c.done;){const p=c.value;i.call(r,p[0],p[1])}},ab=(r,i)=>{let s;const l=[];for(;(s=r.exec(i))!==null;)l.push(s);return l},ib=Jr("HTMLFormElement"),sb=r=>r.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(s,l,c){return l.toUpperCase()+c}),{propertyIsEnumerable:ob}=Object.prototype,lb=Jr("RegExp"),kv=(r,i)=>{const s=Object.getOwnPropertyDescriptors(r),l={};lo(s,(c,p)=>{let f;(f=i(c,p,r))!==!1&&(l[p]=f||c)}),Object.defineProperties(r,l)},cb=r=>{kv(r,(i,s)=>{if(Cr(r)&&["arguments","caller","callee"].includes(s))return!1;const l=r[s];if(Cr(l)){if(i.enumerable=!1,"writable"in i){i.writable=!1;return}i.set||(i.set=()=>{throw Error("Can not rewrite read-only method '"+s+"'")})}})},db=(r,i)=>{const s={},l=c=>{c.forEach(p=>{s[p]=!0})};return Qa(r)?l(r):l(String(r).split(i)),s},ub=()=>{},pb=(r,i)=>r!=null&&Number.isFinite(r=+r)?r:i;function fb(r){return!!(r&&Cr(r.append)&&r[gv]==="FormData"&&r[oo])}const hb=r=>{const i=new WeakSet,s=l=>{if(Hi(l)){if(i.has(l))return;if(Ui(l))return l;if(!("toJSON"in l)){i.add(l);let c;if(Ij(l)){c=[];for(const p of l){const f=s(p);!Ka(f)&&c.push(f)}}else c=Qa(l)?[]:{},lo(l,(p,f)=>{const m=s(p);!Ka(m)&&(c[f]=m)});return i.delete(l),c}}return l};return s(r)},mb=Jr("AsyncFunction"),xb=r=>r&&(Hi(r)||Cr(r))&&Cr(r.then)&&Cr(r.catch),Sv=((r,i)=>r?setImmediate:i?((s,l)=>(Ia.addEventListener("message",({source:c,data:p})=>{c===Ia&&p===s&&l.length&&l.shift()()},!1),c=>{l.push(c),Ia.postMessage(s,"*")}))(`axios@${Math.random()}`,[]):s=>setTimeout(s))(typeof setImmediate=="function",Cr(Ia.postMessage)),gb=typeof queueMicrotask<"u"?queueMicrotask.bind(Ia):typeof process<"u"&&process.nextTick||Sv,Cv=r=>r!=null&&Cr(r[oo]),vb=r=>r!=null&&ao(r,oo)&&Cv(r),D={isArray:Qa,isArrayBuffer:jv,isBuffer:Ui,isFormData:Uj,isArrayBufferView:Pj,isString:zj,isNumber:bv,isBoolean:Nj,isObject:Hi,isPlainObject:Il,isEmptyObject:Mj,isReadableStream:Vj,isRequest:Wj,isResponse:Gj,isHeaders:Qj,isUndefined:Ka,isDate:Tj,isFile:Aj,isReactNativeBlob:Dj,isReactNative:Fj,isBlob:Lj,isRegExp:lb,isFunction:Cr,isStream:Bj,isURLSearchParams:Hj,isTypedArray:rb,isFileList:Oj,forEach:lo,merge:yp,extend:Yj,trim:Kj,stripBOM:Xj,inherits:Jj,toFlatObject:Zj,kindOf:Hp,kindOfTest:Jr,endsWith:eb,toArray:tb,forEachEntry:nb,matchAll:ab,isHTMLForm:ib,hasOwnProperty:no,hasOwnProp:no,hasOwnInPrototypeChain:ao,getSafeProp:$j,toSafeFlatObject:Rj,reduceDescriptors:kv,freezeMethods:cb,toObjectSet:db,toCamelCase:sb,noop:ub,toFiniteNumber:pb,findKey:wv,global:Ia,isContextDefined:_v,isSpecCompliantForm:fb,toJSONObject:hb,isAsyncFn:mb,isThenable:xb,setImmediate:Sv,asap:gb,isIterable:Cv,isSafeIterable:vb},yb=D.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),jb=r=>{const i={};let s,l,c;return r&&r.split(`
`).forEach(function(f){c=f.indexOf(":"),s=f.substring(0,c).trim().toLowerCase(),l=f.substring(c+1).trim();const m=D.hasOwnProp(i,s);!s||m&&D.hasOwnProp(yb,s)||(s==="set-cookie"?m?i[s].push(l):i[s]=[l]:i[s]=m?i[s]+", "+l:l)}),i};function bb(r){let i=0,s=r.length;for(;i<s;){const l=r.charCodeAt(i);if(l!==9&&l!==32)break;i+=1}for(;s>i;){const l=r.charCodeAt(s-1);if(l!==9&&l!==32)break;s-=1}return i===0&&s===r.length?r:r.slice(i,s)}const wb=new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+","g"),_b=new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+","g");function Vp(r,i){return D.isArray(r)?r.map(s=>Vp(s,i)):bb(String(r).replace(i,""))}const kb=r=>Vp(r,wb),Sb=r=>Vp(r,_b);function Ev(r){const i=Object.create(null);return D.forEach(r.toJSON(),(s,l)=>{i[l]=Sb(s)}),i}const Jm=Symbol("internals");function zs(r){return r&&String(r).trim().toLowerCase()}function Bl(r){return r===!1||r==null?r:D.isArray(r)?r.map(Bl):kb(String(r))}function Cb(r){const i=Object.create(null),s=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let l;for(;l=s.exec(r);)i[l[1]]=l[2];return i}const Eb=/^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;function hu(r){let i=0,s=r.length;for(;i<s;){const l=r.charCodeAt(i);if(l!==9&&l!==32)break;i+=1}for(;s>i;){const l=r.charCodeAt(s-1);if(l!==9&&l!==32)break;s-=1}return i===0&&s===r.length?r:r.slice(i,s)}function $b(r){const i=r.length-1;if(i<1||r.charCodeAt(0)!==34||r.charCodeAt(i)!==34)return r;let s="";for(let l=1;l<i;l++){const c=r.charCodeAt(l);if(c===34||c===92&&(l+=1,l>=i))return r;s+=r[l]}return s}function Rb(r){const i=Object.create(null),s=String(r);let l=0,c=!1,p=!1;function f(m){const x=hu(s.slice(l,m)),_=x.indexOf("=");if(_<1)return;const j=hu(x.slice(0,_));if(!Eb.test(j))return;const w=j.toLowerCase();if(w==="__proto__"||w==="constructor"||w==="prototype")return;const S=hu(x.slice(_+1));i[w]=$b(S)}for(let m=0;m<s.length;m++){const x=s.charCodeAt(m);c?p?p=!1:x===92?p=!0:x===34&&(c=!1):x===34?c=!0:(x===44||x===59)&&(f(m),l=m+1)}return f(s.length),i}const Pb=r=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(r.trim());function mu(r,i,s,l,c){if(D.isFunction(l))return l.call(this,i,s);if(c&&(i=s),!!D.isString(i)){if(D.isString(l))return i.indexOf(l)!==-1;if(D.isRegExp(l))return l.test(i)}}function zb(r){return r.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(i,s,l)=>s.toUpperCase()+l)}function Nb(r,i){const s=D.toCamelCase(" "+i);["get","set","has"].forEach(l=>{Object.defineProperty(r,l+s,{__proto__:null,value:function(c,p,f){return this[l].call(this,i,c,p,f)},configurable:!0})})}let ur=class{constructor(i){i&&this.set(i)}set(i,s,l){const c=this;function p(m,x,_){const j=zs(x);if(!j)return;const w=D.findKey(c,j);(!w||c[w]===void 0||_===!0||_===void 0&&c[w]!==!1)&&(c[w||x]=Bl(m))}const f=(m,x)=>D.forEach(m,(_,j)=>p(_,j,x));if(D.isPlainObject(i)||i instanceof this.constructor)f(i,s);else if(D.isString(i)&&(i=i.trim())&&!Pb(i))f(jb(i),s);else if(D.isObject(i)&&D.isSafeIterable(i)){let m=Object.create(null),x,_;for(const j of i){if(!D.isArray(j))throw new TypeError("Object iterator must return a key-value pair");_=j[0],D.hasOwnProp(m,_)?(x=m[_],m[_]=D.isArray(x)?[...x,j[1]]:[x,j[1]]):m[_]=j[1]}f(m,s)}else i!=null&&p(s,i,l);return this}get(i,s){if(i=zs(i),i){const l=D.findKey(this,i);if(l){const c=this[l];if(!s)return c;if(s===!0)return Cb(c);if(D.isFunction(s))return s.call(this,c,l);if(D.isRegExp(s))return s.exec(c);throw new TypeError("parser must be boolean|regexp|function")}}}has(i,s){if(i=zs(i),i){const l=D.findKey(this,i);return!!(l&&this[l]!==void 0&&(!s||mu(this,this[l],l,s)))}return!1}delete(i,s){const l=this;let c=!1;function p(f){if(f=zs(f),f){const m=D.findKey(l,f);m&&(!s||mu(l,l[m],m,s))&&(delete l[m],c=!0)}}return D.isArray(i)?i.forEach(p):p(i),c}clear(i){const s=Object.keys(this);let l=s.length,c=!1;for(;l--;){const p=s[l];(!i||mu(this,this[p],p,i,!0))&&(delete this[p],c=!0)}return c}normalize(i){const s=this,l={};return D.forEach(this,(c,p)=>{const f=D.findKey(l,p);if(f){s[f]=Bl(c),delete s[p];return}const m=i?zb(p):String(p).trim();m!==p&&delete s[p],s[m]=Bl(c),l[m]=!0}),this}concat(...i){return this.constructor.concat(this,...i)}toJSON(i){const s=Object.create(null);return D.forEach(this,(l,c)=>{l!=null&&l!==!1&&(s[c]=i&&D.isArray(l)?l.join(", "):l)}),s}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([i,s])=>i+": "+s).join(`
`)}getSetCookie(){const i=this.get("set-cookie");return D.isArray(i)?i:i==null||i===!1?[]:[i]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(i){return i instanceof this?i:new this(i)}static parseParameters(i){return Rb(i)}static concat(i,...s){const l=new this(i);return s.forEach(c=>l.set(c)),l}static accessor(i){const l=(this[Jm]=this[Jm]={accessors:{}}).accessors,c=this.prototype;function p(f){const m=zs(f);l[m]||(Nb(c,f),l[m]=!0)}return D.isArray(i)?i.forEach(p):p(i),this}};ur.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);D.reduceDescriptors(ur.prototype,({value:r},i)=>{let s=i[0].toUpperCase()+i.slice(1);return{get:()=>r,set(l){this[s]=l}}});D.freezeMethods(ur);const Xl="[REDACTED ****]";function Mb(r){if(D.hasOwnProp(r,"toJSON"))return!0;let i=Object.getPrototypeOf(r);for(;i&&i!==Object.prototype;){if(D.hasOwnProp(i,"toJSON"))return!0;i=Object.getPrototypeOf(i)}return!1}function Tb(r,i){const s=new Set(i.map(p=>String(p).toLowerCase())),l=[],c=p=>{if(p===null||typeof p!="object"||D.isBuffer(p))return p;if(l.indexOf(p)!==-1)return;p instanceof ur&&(p=p.toJSON()),l.push(p);let f;if(D.isArray(p))f=[],p.forEach((m,x)=>{const _=c(m);D.isUndefined(_)||(f[x]=_)});else{if(!D.isPlainObject(p)&&Mb(p))return l.pop(),p;f=Object.create(null);for(const[m,x]of Object.entries(p)){const _=s.has(m.toLowerCase())?Xl:c(x);D.isUndefined(_)||(f[m]=_)}}return l.pop(),f};return c(r)}function Zm(r){try{return String(r)}catch{return""}}function Ab(r){return r.errors.map(s=>{try{return s&&s.message?Zm(s.message):Zm(s)}catch{return""}}).filter(Boolean).join("; ")||r.name||"AggregateError"}let Ce=class $v extends Error{static from(i,s,l,c,p,f){let m=i.message;!m&&D.isArray(i.errors)&&i.errors.length&&(m=Ab(i));const x=new $v(m,s||i.code,l,c,p);return Object.defineProperty(x,"cause",{__proto__:null,value:i,writable:!0,enumerable:!1,configurable:!0}),x.name=i.name,i.status!=null&&x.status==null&&(x.status=i.status),f&&Object.assign(x,f),x}constructor(i,s,l,c,p){super(i),Object.defineProperty(this,"message",{__proto__:null,value:i,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,s&&(this.code=s),l&&(this.config=l),c&&(this.request=c),p&&(this.response=p,this.status=p.status)}toJSON(){const i=this.config,s=i&&D.hasOwnProp(i,"redact")?i.redact:void 0,l=D.isArray(s)&&s.length>0?Tb(i,s):D.toJSONObject(i);return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:l,code:this.code,status:this.status}}};Ce.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";Ce.ERR_BAD_OPTION="ERR_BAD_OPTION";Ce.ECONNABORTED="ECONNABORTED";Ce.ETIMEDOUT="ETIMEDOUT";Ce.ECONNREFUSED="ECONNREFUSED";Ce.ERR_NETWORK="ERR_NETWORK";Ce.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";Ce.ERR_DEPRECATED="ERR_DEPRECATED";Ce.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";Ce.ERR_BAD_REQUEST="ERR_BAD_REQUEST";Ce.ERR_CANCELED="ERR_CANCELED";Ce.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";Ce.ERR_INVALID_URL="ERR_INVALID_URL";Ce.ERR_FORM_DATA_DEPTH_EXCEEDED="ERR_FORM_DATA_DEPTH_EXCEEDED";const Db=null,Rv=100;function jp(r){return D.isPlainObject(r)||D.isArray(r)}function Pv(r){return D.endsWith(r,"[]")?r.slice(0,-2):r}function xu(r,i,s){return r?r.concat(i).map(function(c,p){return c=Pv(c),!s&&p?"["+c+"]":c}).join(s?".":""):i}function Fb(r){return D.isArray(r)&&!r.some(jp)}const Lb=D.toFlatObject(D,{},null,function(i){return/^is[A-Z]/.test(i)});function hc(r,i,s){if(!D.isObject(r))throw new TypeError("target must be an object");i=i||new FormData;const l=($,G)=>{const I=D.getSafeProp(s,$);return D.isUndefined(I)?G:I},c=l("metaTokens",!0),p=l("visitor")||R,f=l("dots",!1),m=l("indexes",!1),x=l("Blob")||typeof Blob<"u"&&Blob,_=l("maxDepth",Rv),j=x&&D.isSpecCompliantForm(i),w=[];if(!D.isFunction(p))throw new TypeError("visitor must be a function");function S($){if($===null)return"";if(D.isDate($))return $.toISOString();if(D.isBoolean($))return $.toString();if(!j&&D.isBlob($))throw new Ce("Blob is not supported. Use a Buffer instead.");if(D.isArrayBuffer($)||D.isTypedArray($)){if(j&&typeof x=="function")return new x([$]);throw new Ce("Blob is not supported. Use a Buffer instead.",Ce.ERR_NOT_SUPPORT)}return $}function z($){if($>_)throw new Ce("Object is too deeply nested ("+$+" levels). Max depth: "+_,Ce.ERR_FORM_DATA_DEPTH_EXCEEDED)}function O($,G){if(_===1/0)return JSON.stringify($);const I=[];return JSON.stringify($,function(Q,F){if(!D.isObject(F))return F;for(;I.length&&I[I.length-1]!==this;)I.pop();return I.push(F),z(G+I.length-1),F})}function R($,G,I){let J=$;if(D.isReactNative(i)&&D.isReactNativeBlob($))return i.append(xu(I,G,f),S($)),!1;if($&&!I&&typeof $=="object"){if(D.endsWith(G,"{}"))G=c?G:G.slice(0,-2),$=O($,1);else if(D.isArray($)&&Fb($)||(D.isFileList($)||D.endsWith(G,"[]"))&&(J=D.toArray($)))return G=Pv(G),J.forEach(function(F,ae){!(D.isUndefined(F)||F===null)&&i.append(m===!0?xu([G],ae,f):m===null?G:G+"[]",S(F))}),!1}return jp($)?!0:(i.append(xu(I,G,f),S($)),!1)}const A=Object.assign(Lb,{defaultVisitor:R,convertValue:S,isVisitable:jp});function C($,G,I=0){if(!D.isUndefined($)){if(z(I),w.indexOf($)!==-1)throw new Error("Circular reference detected in "+G.join("."));w.push($),D.forEach($,function(Q,F){(!(D.isUndefined(Q)||Q===null)&&p.call(i,Q,D.isString(F)?F.trim():F,G,A))===!0&&C(Q,G?G.concat(F):[F],I+1)}),w.pop()}}if(!D.isObject(r))throw new TypeError("data must be an object");return C(r),i}function ex(r){const i={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"};return encodeURIComponent(r).replace(/[!'()~]|%20/g,function(l){return i[l]})}function Wp(r,i){this._pairs=[],r&&hc(r,this,i)}const zv=Wp.prototype;zv.append=function(i,s){this._pairs.push([i,s])};zv.toString=function(i){const s=i?l=>i.call(this,l,ex):ex;return this._pairs.map(function(c){return s(c[0])+"="+s(c[1])},"").join("&")};function Ob(r){return encodeURIComponent(r).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Nv(r,i,s){if(!i)return r;r=r||"";const l=D.isFunction(s)?{serialize:s}:s,c=D.getSafeProp(l,"encode")||Ob,p=D.getSafeProp(l,"serialize");let f;if(p?f=p(i,l):f=D.isURLSearchParams(i)?i.toString():new Wp(i,l).toString(c),f){const m=r.indexOf("#");m!==-1&&(r=r.slice(0,m)),r+=(r.indexOf("?")===-1?"?":"&")+f}return r}const Ns=Symbol("internals");function Mv(r){return r?r.length:0}function tx(r){if(r)for(;r.length&&r[r.length-1]===null;)r.pop()}function Ms(r,i){const s=r.handlers,l=Mv(s);s!==i.handlersRef?(i.handlersRef=s,i.handlerEntries.clear()):l!==i.handlersLength&&(l?i.handlerEntries.forEach(function(p,f){s[p.index]!==p.handler&&i.handlerEntries.delete(f)}):i.handlerEntries.clear()),i.handlersLength=l}class rx{constructor(){this.handlers=[],this[Ns]={handlersRef:this.handlers,handlersLength:this.handlers.length,handlerEntries:new Map,iterationDepth:0,nextId:0}}use(i,s,l){const c={fulfilled:i,rejected:s,synchronous:l?l.synchronous:!1,runWhen:l?l.runWhen:null},p=this[Ns];this.handlers==null&&(this.handlers=[]),Ms(this,p);const f=p.nextId++;return this.handlers.push(c),p.handlerEntries.set(f,{handler:c,index:this.handlers.length-1}),p.handlersLength=this.handlers.length,f}eject(i){const s=this[Ns];Ms(this,s);const l=s.handlerEntries.get(i);if(l){if(s.handlerEntries.delete(i),this.handlers[l.index]!==l.handler)return;this.handlers[l.index]=null,s.iterationDepth||(tx(this.handlers),s.handlersLength=this.handlers.length)}}clear(){this.handlers&&(this.handlers=[],Ms(this,this[Ns]))}forEach(i){const s=this[Ns];Ms(this,s),s.iterationDepth++;try{D.forEach(this.handlers,function(c){c!==null&&i(c)})}finally{--s.iterationDepth||(Ms(this,s),tx(this.handlers),s.handlersLength=Mv(this.handlers))}}}const Gp={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0,advertiseZstdAcceptEncoding:!1,validateStatusUndefinedResolves:!0},Ib=typeof URLSearchParams<"u"?URLSearchParams:Wp,Bb=typeof FormData<"u"?FormData:null,qb=typeof Blob<"u"?Blob:null,Ub={isBrowser:!0,classes:{URLSearchParams:Ib,FormData:Bb,Blob:qb},protocols:["http","https","file","blob","url","data"]},Qp=typeof window<"u"&&typeof document<"u",bp=typeof navigator=="object"&&navigator||void 0,Hb=Qp&&(!bp||["ReactNative","NativeScript","NS"].indexOf(bp.product)<0),Vb=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Wb=Qp&&window.location.href||"http://localhost",Gb=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Qp,hasStandardBrowserEnv:Hb,hasStandardBrowserWebWorkerEnv:Vb,navigator:bp,origin:Wb},Symbol.toStringTag,{value:"Module"})),Xt={...Gb,...Ub};function Qb(r,i){return hc(r,new Xt.classes.URLSearchParams,{visitor:function(s,l,c,p){return Xt.isNode&&D.isBuffer(s)?(this.append(l,s.toString("base64")),!1):p.defaultVisitor.apply(this,arguments)},...i})}const nx=Rv;function Tv(r){if(r>nx)throw new Ce("FormData field is too deeply nested ("+r+" levels). Max depth: "+nx,Ce.ERR_FORM_DATA_DEPTH_EXCEEDED)}function Kb(r){const i=[],s=/[^.[\]]+|\[([^.[\]]*)]/g;let l;for(;(l=s.exec(r))!==null;)Tv(i.length),i.push(l[0]==="[]"?"":l[1]||l[0]);return i}function Yb(r){const i={},s=Object.keys(r);let l;const c=s.length;let p;for(l=0;l<c;l++)p=s[l],i[p]=r[p];return i}function Av(r){function i(s,l,c,p){Tv(p);let f=s[p++];if(f==="__proto__")return!0;const m=Number.isFinite(+f),x=p>=s.length;return f=!f&&D.isArray(c)?c.length:f,x?(D.hasOwnProp(c,f)?c[f]=D.isArray(c[f])?c[f].concat(l):[c[f],l]:c[f]=l,!m):((!D.hasOwnProp(c,f)||!D.isObject(c[f]))&&(c[f]=[]),i(s,l,c[f],p)&&D.isArray(c[f])&&(c[f]=Yb(c[f])),!m)}if(D.isFormData(r)&&D.isFunction(r.entries)){const s={};return D.forEachEntry(r,(l,c)=>{i(Kb(l),c,s,0)}),s}return null}const Dv=Object.freeze(["get","delete","head","options","post","put","patch","purge","link","unlink","query"]),Ei=(r,i)=>r!=null&&D.hasOwnProp(r,i)?r[i]:void 0;function Xb(r,i,s){if(D.isString(r))try{return(i||JSON.parse)(r),D.trim(r)}catch(l){if(l.name!=="SyntaxError")throw l}return(s||JSON.stringify)(r)}const co={transitional:Gp,adapter:["xhr","http","fetch"],transformRequest:[function(i,s){const l=s.getContentType()||"",c=l.indexOf("application/json")>-1,p=D.isObject(i);if(p&&D.isHTMLForm(i)&&(i=new FormData(i)),D.isFormData(i))return c?JSON.stringify(Av(i)):i;if(D.isArrayBuffer(i)||D.isBuffer(i)||D.isStream(i)||D.isFile(i)||D.isBlob(i)||D.isReadableStream(i))return i;if(D.isArrayBufferView(i))return i.buffer;if(D.isURLSearchParams(i))return s.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),i.toString();let m;if(p){const x=Ei(this,"formSerializer");if(l.indexOf("application/x-www-form-urlencoded")>-1)return Qb(i,x).toString();if((m=D.isFileList(i))||l.indexOf("multipart/form-data")>-1){const _=Ei(this,"env"),j=_&&_.FormData;return hc(m?{"files[]":i}:i,j&&new j,x)}}return p||c?(s.setContentType("application/json",!1),Xb(i)):i}],transformResponse:[function(i){const s=Ei(this,"transitional")||co.transitional,l=s&&s.forcedJSONParsing,c=Ei(this,"responseType"),p=c==="json";if(D.isResponse(i)||D.isReadableStream(i))return i;if(i&&D.isString(i)&&(l&&!c||p)){const m=!(s&&s.silentJSONParsing)&&p;try{return JSON.parse(i,Ei(this,"parseReviver"))}catch(x){if(m)throw x.name==="SyntaxError"?Ce.from(x,Ce.ERR_BAD_RESPONSE,this,null,Ei(this,"response")):x}}return i}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Xt.classes.FormData,Blob:Xt.classes.Blob},validateStatus:function(i){return i>=200&&i<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};D.forEach(Dv,r=>{co.headers[r]={}});function gu(r,i){const s=this||co,l=i||s,c=ur.from(l.headers);let p=l.data;return D.forEach(r,function(m){p=m.call(s,p,c.normalize(),i?i.status:void 0)}),c.normalize(),p}function Fv(r){return!!(r&&r.__CANCEL__)}let uo=class extends Ce{constructor(i,s,l){super(i??"canceled",Ce.ERR_CANCELED,s,l),this.name="CanceledError",this.__CANCEL__=!0}};function Lv(r,i,s){const l=s.config.validateStatus;!s.status||!l||l(s.status)?r(s):i(new Ce("Request failed with status code "+s.status,s.status>=400&&s.status<500?Ce.ERR_BAD_REQUEST:Ce.ERR_BAD_RESPONSE,s.config,s.request,s))}const Jb=/[\t\n\r]/g;function Ov(r){if(typeof r!="string")return r;let i=0;for(;i<r.length&&r.charCodeAt(i)<=32;)i++;return r.slice(i).replace(Jb,"")}function vu(r){const i=/^([-+\w]{1,25}):(?:\/\/)?/.exec(r);return i&&i[1]||""}function Zb(r,i){r=r||10;const s=new Array(r),l=new Array(r);let c=0,p=0,f;return i=i!==void 0?i:1e3,function(x){const _=Date.now(),j=l[p];f||(f=_),s[c]=x,l[c]=_;let w=p,S=0;for(;w!==c;)S+=s[w++],w=w%r;if(c=(c+1)%r,c===p&&(p=(p+1)%r),_-f<i)return;const z=j&&_-j;return z?Math.round(S*1e3/z):void 0}}function ew(r,i){let s=0,l=1e3/i,c,p;const f=(j,w=Date.now())=>{s=w,c=null,p&&(clearTimeout(p),p=null),r(...j)};return[(...j)=>{const w=Date.now(),S=w-s;S>=l?f(j,w):(c=j,p||(p=setTimeout(()=>{p=null,f(c)},l-S)))},()=>c&&f(c),(...j)=>f(j)]}const Jl=(r,i,s=3)=>{let l=0;const c=Zb(50,250);return ew(p=>{if(!p||!D.isNumber(p.loaded))return;const f=p.loaded,m=p.lengthComputable?p.total:void 0,x=Math.max(0,m!=null?Math.min(f,m):f),_=Math.max(0,x-l),j=c(_);l=Math.max(l,x);const w={loaded:x,total:m,progress:m?x/m:void 0,bytes:_,rate:j||void 0,estimated:j&&m?(m-x)/j:void 0,event:p,lengthComputable:m!=null,[i?"download":"upload"]:!0};r(w)},s)},ax=(r,i)=>{const s=r!=null;return[l=>i[0]({lengthComputable:s,total:r,loaded:l}),i[1]]},ix=(r,i=D.asap)=>(...s)=>i(()=>r(...s)),tw=Xt.hasStandardBrowserEnv?((r,i)=>s=>(s=new URL(s,Xt.origin),r.protocol===s.protocol&&r.host===s.host&&(i||r.port===s.port)))(new URL(Xt.origin),Xt.navigator&&/(msie|trident)/i.test(Xt.navigator.userAgent)):()=>!0,rw=Xt.hasStandardBrowserEnv?{write(r,i,s,l,c,p,f){if(typeof document>"u")return;const m=[`${r}=${encodeURIComponent(i)}`];D.isNumber(s)&&m.push(`expires=${new Date(s).toUTCString()}`),D.isString(l)&&m.push(`path=${l}`),D.isString(c)&&m.push(`domain=${c}`),p===!0&&m.push("secure"),D.isString(f)&&m.push(`SameSite=${f}`),document.cookie=m.join("; ")},read(r){if(typeof document>"u")return null;const i=document.cookie.split(";");for(let s=0;s<i.length;s++){const l=i[s].replace(/^\s+/,""),c=l.indexOf("=");if(c!==-1&&l.slice(0,c)===r)try{return decodeURIComponent(l.slice(c+1))}catch{return l.slice(c+1)}}return null},remove(r){this.write(r,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function nw(r){return typeof r!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(r)}function aw(r,i){if(!i)return r;let s=r.length;for(;s>0&&r.charCodeAt(s-1)===47;)s--;return r.slice(0,s)+"/"+i.replace(/^\/+/,"")}const iw=/^https?:(?!\/\/)/i;function sw(r){return r&&r.replace(/(^|&)([^=&]*=)?[^&]+/g,(i,s,l="")=>`${s}${l}${Xl}`)}function ow(r){const i=r.replace(/^(https?:\/{0,2})[^/?#]*@/i,`$1${Xl}@`),s=i.indexOf("#"),c=(s===-1?i:i.slice(0,s)).replace(/([?&][^=&#]*=)[^&#]*/g,`$1${Xl}`);return s===-1?c:`${c}#${sw(i.slice(s+1))}`}function sx(r,i){if(typeof r=="string"){const s=Ov(r);if(iw.test(s))throw new Ce(`Invalid URL ${JSON.stringify(ow(s))}: missing "//" after protocol`,Ce.ERR_INVALID_URL,i)}}function Iv(r,i,s,l){sx(i,l);let c=!nw(i);return r&&(c||s===!1)?(sx(r,l),aw(r,i)):i}const ox=r=>r instanceof ur?{...r}:r,lw=r=>Object.getOwnPropertySymbols&&Object.getOwnPropertyDescriptor?Object.keys(r).concat(Object.getOwnPropertySymbols(r).filter(i=>Object.getOwnPropertyDescriptor(r,i).enumerable)):Object.keys(r);function Ya(r,i){r=r||{},i=i||{};const s=Object.create(null);Object.defineProperty(s,"hasOwnProperty",{__proto__:null,value:Object.prototype.hasOwnProperty,enumerable:!1,writable:!0,configurable:!0});function l(j,w,S,z){return D.isPlainObject(j)&&D.isPlainObject(w)?D.merge.call({caseless:z},j,w):D.isPlainObject(w)?D.merge({},w):D.isArray(w)?w.slice():w}function c(j,w,S,z){if(D.isUndefined(w)){if(!D.isUndefined(j))return l(void 0,j,S,z)}else return l(j,w,S,z)}function p(j,w){if(!D.isUndefined(w))return l(void 0,w)}function f(j,w){if(D.isUndefined(w)){if(!D.isUndefined(j))return l(void 0,j)}else return l(void 0,w)}function m(j){const w=D.hasOwnProp(i,"transitional")?i.transitional:void 0;if(!D.isUndefined(w))if(D.isPlainObject(w)){if(D.hasOwnProp(w,j))return w[j]}else return;const S=D.hasOwnProp(r,"transitional")?r.transitional:void 0;if(D.isPlainObject(S)&&D.hasOwnProp(S,j))return S[j]}function x(j,w,S){if(D.hasOwnProp(i,S))return l(j,w);if(D.hasOwnProp(r,S))return l(void 0,j)}const _={url:p,method:p,data:p,baseURL:f,transformRequest:f,transformResponse:f,paramsSerializer:f,timeout:f,timeoutErrorMessage:f,withCredentials:f,withXSRFToken:f,adapter:f,responseType:f,xsrfCookieName:f,xsrfHeaderName:f,onUploadProgress:f,onDownloadProgress:f,decompress:f,maxContentLength:f,maxBodyLength:f,beforeRedirect:f,transport:f,httpAgent:f,httpsAgent:f,cancelToken:f,socketPath:f,allowedSocketPaths:f,responseEncoding:f,validateStatus:x,headers:(j,w,S)=>c(ox(j),ox(w),S,!0)};return D.forEach(lw({...r,...i}),function(w){if(w==="__proto__"||w==="constructor"||w==="prototype")return;const S=D.hasOwnProp(_,w)?_[w]:c,z=D.hasOwnProp(r,w)?r[w]:void 0,O=D.hasOwnProp(i,w)?i[w]:void 0,R=S(z,O,w);D.isUndefined(R)&&S!==x||(s[w]=R)}),D.hasOwnProp(i,"validateStatus")&&D.isUndefined(i.validateStatus)&&m("validateStatusUndefinedResolves")===!1&&(D.hasOwnProp(r,"validateStatus")?s.validateStatus=l(void 0,r.validateStatus):delete s.validateStatus),s}const cw=["content-type","content-length"];function dw(r,i,s){if(s!=="content-only"){r.set(i);return}Object.entries(i||{}).forEach(([l,c])=>{cw.includes(l.toLowerCase())&&r.set(l,c)})}const uw=r=>encodeURIComponent(r).replace(/%([0-9A-F]{2})/gi,(i,s)=>String.fromCharCode(parseInt(s,16)));function Bv(r){const i=Ya({},r),s=S=>D.hasOwnProp(i,S)?i[S]:void 0,l=s("data");let c=s("withXSRFToken");const p=s("xsrfHeaderName"),f=s("xsrfCookieName");let m=s("headers");const x=s("auth"),_=s("baseURL"),j=s("allowAbsoluteUrls"),w=s("url");if(i.headers=m=ur.from(m),i.url=Nv(Iv(_,w,j,i),s("params"),s("paramsSerializer")),x){const S=D.getSafeProp(x,"username")||"",z=D.getSafeProp(x,"password")||"";try{m.set("Authorization","Basic "+btoa(S+":"+(z?uw(z):"")))}catch(O){throw Ce.from(O,Ce.ERR_BAD_OPTION_VALUE,r)}}if(D.isFormData(l)){const S=D.getSafeProp(l,"getHeaders");Xt.hasStandardBrowserEnv||Xt.hasStandardBrowserWebWorkerEnv||D.isReactNative(l)?m.setContentType(void 0):D.isFunction(S)&&dw(m,S.call(l),s("formDataHeaderPolicy"))}if(Xt.hasStandardBrowserEnv&&(D.isFunction(c)&&(c=c(i)),c===!0||c==null&&tw(i.url))){const z=p&&f&&rw.read(f);z&&m.set(p,z)}return i}const pw=typeof XMLHttpRequest<"u",fw=pw&&function(r){return new Promise(function(s,l){const c=Bv(r);let p=c.data;const f=ur.from(c.headers).normalize();let{responseType:m,onUploadProgress:x,onDownloadProgress:_}=c,j,w,S,z,O,R;function A(){z&&z(),O&&O(),c.cancelToken&&c.cancelToken.unsubscribe(j),c.signal&&c.signal.removeEventListener("abort",j)}let C=new XMLHttpRequest;C.open(c.method.toUpperCase(),c.url,!0),C.timeout=c.timeout;function $(I){if(!C)return;if(C.status===0&&(vu(Ov(c.url))||vu(Xt.origin))!=="file"&&!(C.responseURL&&C.responseURL.startsWith("file:"))){l(new Ce("Request aborted",Ce.ECONNABORTED,r,C)),A(),C=null;return}try{I?R&&R(I):O&&O()}catch(ae){setTimeout(()=>{throw ae})}if(!C)return;const J=ur.from("getAllResponseHeaders"in C&&C.getAllResponseHeaders()),F={data:!m||m==="text"||m==="json"?C.responseText:C.response,status:C.status,statusText:C.statusText,headers:J,config:r,request:C};Lv(function(k){s(k),A()},function(k){l(k),A()},F),C=null}"onloadend"in C?C.onloadend=$:C.onreadystatechange=function(){!C||C.readyState!==4||C.status===0&&!(C.responseURL&&C.responseURL.startsWith("file:"))||setTimeout($)},C.onabort=function(){C&&(l(new Ce("Request aborted",Ce.ECONNABORTED,r,C)),A(),C=null)},C.onerror=function(J){const Q=J&&J.message?J.message:"Network Error",F=new Ce(Q,Ce.ERR_NETWORK,r,C);F.event=J||null,l(F),A(),C=null},C.ontimeout=function(){let J=c.timeout?"timeout of "+c.timeout+"ms exceeded":"timeout exceeded";const Q=c.transitional||Gp;c.timeoutErrorMessage&&(J=c.timeoutErrorMessage),l(new Ce(J,Q.clarifyTimeoutError?Ce.ETIMEDOUT:Ce.ECONNABORTED,r,C)),A(),C=null},p===void 0&&f.setContentType(null),"setRequestHeader"in C&&D.forEach(Ev(f),function(J,Q){C.setRequestHeader(Q,J)}),D.isUndefined(c.withCredentials)||(C.withCredentials=!!c.withCredentials),m&&m!=="json"&&(C.responseType=c.responseType),_&&([S,O,R]=Jl(_,!0),C.addEventListener("progress",S)),x&&C.upload&&([w,z]=Jl(x),C.upload.addEventListener("progress",w),C.upload.addEventListener("loadend",z)),(c.cancelToken||c.signal)&&(j=I=>{C&&(l(!I||I.type?new uo(null,r,C):I),C.abort(),A(),C=null)},c.cancelToken&&c.cancelToken.subscribe(j),c.signal&&(c.signal.aborted?j():c.signal.addEventListener("abort",j)));const G=vu(c.url);if(G&&!Xt.protocols.includes(G)){l(new Ce("Unsupported protocol "+G+":",Ce.ERR_BAD_REQUEST,r)),A();return}C.send(p||null)})},hw=(r,i)=>{if(r=r?r.filter(Boolean):[],!i&&!r.length)return;const s=new AbortController;let l=!1;const c=function(x){if(!l){l=!0,f();const _=x instanceof Error?x:this.reason;s.abort(_ instanceof Ce?_:new uo(_ instanceof Error?_.message:_))}};let p=i&&setTimeout(()=>{p=null,c(new Ce(`timeout of ${i}ms exceeded`,Ce.ETIMEDOUT))},i);const f=()=>{r&&(p&&clearTimeout(p),p=null,r.forEach(x=>{x.unsubscribe?x.unsubscribe(c):x.removeEventListener("abort",c)}),r=null)};r.forEach(x=>{if(!l){if(x.aborted){c.call(x);return}x.addEventListener("abort",c,{once:!0})}});const{signal:m}=s;return m.unsubscribe=()=>D.asap(f),m},mw=function*(r,i){let s=r.byteLength;if(s<i){yield r;return}let l=0,c;for(;l<s;)c=l+i,yield r.slice(l,c),l=c},xw=async function*(r,i){for await(const s of gw(r))yield*mw(s,i)},gw=async function*(r){if(r[Symbol.asyncIterator]){yield*r;return}const i=r.getReader();try{for(;;){const{done:s,value:l}=await i.read();if(s)break;yield l}}finally{await i.cancel()}},lx=(r,i,s,l)=>{const c=xw(r,i);let p=0,f,m=x=>{f||(f=!0,l&&l(x))};return new ReadableStream({async pull(x){try{const{done:_,value:j}=await c.next();if(_){m(),x.close();return}let w=j.byteLength;if(s){let S=p+=w;s(S)}x.enqueue(new Uint8Array(j))}catch(_){throw m(_),_}},cancel(x){return m(x),c.return()}},{highWaterMark:2})},cx=r=>r>=48&&r<=57||r>=65&&r<=70||r>=97&&r<=102,qv=(r,i,s)=>i+2<s&&cx(r.charCodeAt(i+1))&&cx(r.charCodeAt(i+2)),dx=r=>r<=57?r-48:(r&223)-55,vw=r=>r>=65&&r<=90||r>=97&&r<=122||r>=48&&r<=57||r===43||r===47||r===45||r===95,yw=r=>r===9||r===10||r===12||r===13||r===32,jw=r=>{const i=Math.floor(r/4),s=r%4;return i*3+(s===2?1:s===3?2:0)},bw=r=>{const i=r.length;let s=0;return i>0&&r.charCodeAt(i-1)===61&&(s++,i>1&&r.charCodeAt(i-2)===61&&s++),Math.floor((i-s)*3/4)},ww=r=>{const i=r.length;let s=0,l=0,c=!1;for(let p=0;p<i;p++){let f=r.charCodeAt(p);if(f===37&&qv(r,p,i)&&(f=dx(r.charCodeAt(p+1))*16+dx(r.charCodeAt(p+2)),p+=2),!yw(f)){if(f===61){l++;continue}if(!vw(f)||l>0){c=!0;continue}s++}}return c||l>2||l>0&&(s+l)%4!==0||s%4===1?bw(r):jw(s)},_w=(r,i)=>{if(!r||typeof r!="string"||!r.startsWith("data:"))return 0;const s=r.indexOf(",");if(s<0)return 0;const l=r.slice(5,s),c=r.slice(s+1);if(/;base64/i.test(l))return i(c);let f=0;for(let m=0,x=c.length;m<x;m++){const _=c.charCodeAt(m);if(_===37&&qv(c,m,x))f+=1,m+=2;else if(_<128)f+=1;else if(_<2048)f+=2;else if(_>=55296&&_<=56319&&m+1<x){const j=c.charCodeAt(m+1);j>=56320&&j<=57343?(f+=4,m++):f+=3}else f+=3}return f};function kw(r){const i=typeof r=="string"?r.indexOf("#"):-1;return _w(i===-1?r:r.slice(0,i),ww)}const Kp="1.20.0",ux=64*1024,Sw={cache:"default",redirect:"follow",referrer:"about:client",referrerPolicy:"",mode:"cors",integrity:"",keepalive:!1,priority:"auto",window:null},{isFunction:yl}=D,Cw=r=>encodeURIComponent(r).replace(/%([0-9A-F]{2})/gi,(i,s)=>String.fromCharCode(parseInt(s,16))),px=r=>{if(!D.isString(r))return r;try{return decodeURIComponent(r)}catch{return r}},fx=(r,...i)=>{try{return!!r(...i)}catch{return!1}},Ew=r=>{const i=r.indexOf("://");let s=r;return i!==-1&&(s=s.slice(i+3)),s.includes("@")||s.includes(":")},$w=r=>{const i=D.global!==void 0&&D.global!==null?D.global:globalThis,{ReadableStream:s,TextEncoder:l}=i;r=D.merge.call({skipUndefined:!0},{Request:i.Request,Response:i.Response},r);const{fetch:c,Request:p,Response:f}=r,m=c?yl(c):typeof fetch=="function",x=yl(p),_=yl(f);if(!m)return!1;const j=m&&yl(s),w=m&&(typeof l=="function"?(C=>$=>C.encode($))(new l):async C=>new Uint8Array(await new p(C).arrayBuffer())),S=x&&j&&fx(()=>{let C=!1;const $=new p(Xt.origin,{body:new s,method:"POST",get duplex(){return C=!0,"half"}}),G=$.headers.has("Content-Type");return $.body!=null&&$.body.cancel(),C&&!G}),z=_&&j&&fx(()=>D.isReadableStream(new f("").body)),O={stream:z&&(C=>C.body)};m&&["text","arrayBuffer","blob","formData","stream"].forEach(C=>{!O[C]&&(O[C]=($,G)=>{let I=$&&$[C];if(I)return I.call($);throw new Ce(`Response type '${C}' is not supported`,Ce.ERR_NOT_SUPPORT,G)})});const R=async C=>{if(C==null)return 0;if(D.isBlob(C))return C.size;if(D.isSpecCompliantForm(C))return(await new p(Xt.origin,{method:"POST",body:C}).arrayBuffer()).byteLength;if(D.isArrayBufferView(C)||D.isArrayBuffer(C))return C.byteLength;if(D.isURLSearchParams(C)&&(C=C+""),D.isString(C))return(await w(C)).byteLength},A=async(C,$)=>{const G=D.toFiniteNumber(C.getContentLength());return G??R($)};return async C=>{let{url:$,method:G,data:I,signal:J,cancelToken:Q,timeout:F,onDownloadProgress:ae,onUploadProgress:k,responseType:y,headers:B,withCredentials:le="same-origin",fetchOptions:je,maxContentLength:we,maxBodyLength:Pe,maxRedirects:K}=Bv(C);const he=D.isNumber(we)&&we>-1,oe=D.isNumber(Pe)&&Pe>-1,me=ve=>D.hasOwnProp(C,ve)?C[ve]:void 0;let H=c||fetch;y=y?(y+"").toLowerCase():"text";let E=hw([J,Q&&Q.toAbortSignal()],F),b=null;const re=E&&E.unsubscribe&&(()=>{E.unsubscribe()});let ce,T=null;const ie=()=>new Ce("Request body larger than maxBodyLength limit",Ce.ERR_BAD_REQUEST,C,b);try{let ve;const ye=me("auth");if(ye){const Ae=D.getSafeProp(ye,"username")||"",Xe=D.getSafeProp(ye,"password")||"";ve={username:Ae,password:Xe}}if(Ew($)){const Ae=new URL($,Xt.origin);if(!ve&&(Ae.username||Ae.password)){const Xe=px(Ae.username),se=px(Ae.password);ve={username:Xe,password:se}}(Ae.username||Ae.password)&&(Ae.username="",Ae.password="",$=Ae.href)}if(ve&&(B.delete("authorization"),B.set("Authorization","Basic "+btoa(Cw((ve.username||"")+":"+(ve.password||""))))),he&&typeof $=="string"&&$.startsWith("data:")&&kw($)>we)throw new Ce("maxContentLength size of "+we+" exceeded",Ce.ERR_BAD_RESPONSE,C,b);if(oe&&G!=="get"&&G!=="head"){const Ae=await R(I);if(typeof Ae=="number"&&isFinite(Ae)&&(ce=Ae,Ae>Pe))throw ie()}const U=oe&&(D.isReadableStream(I)||D.isStream(I)),de=(Ae,Xe,se)=>lx(Ae,ux,Be=>{if(oe&&Be>Pe)throw T=ie();Xe&&Xe(Be)},se);if(S&&G!=="get"&&G!=="head"&&(k||U)){if(ce=ce??await A(B,I),ce!==0||U){let Ae=new p($,{method:"POST",body:I,duplex:"half"}),Xe;if(D.isFormData(I)&&(Xe=Ae.headers.get("content-type"))&&B.setContentType(Xe),Ae.body){const[se,Be]=k&&ax(ce,Jl(ix(k)))||[];I=de(Ae.body,se,Be)}}}else if(U&&!x&&j&&G!=="get"&&G!=="head")I=de(I);else if(U&&x&&!S&&G!=="get"&&G!=="head")throw new Ce("Stream request bodies are not supported by the current fetch implementation",Ce.ERR_NOT_SUPPORT,C,b);D.isString(le)||(le=le?"include":"omit");const st=x&&"credentials"in p.prototype;if(D.isFormData(I)){const Ae=B.getContentType();Ae&&/^multipart\/form-data/i.test(Ae)&&!/boundary=/i.test(Ae)&&B.delete("content-type")}B.set("User-Agent","axios/"+Kp,!1);const et=je==null?je:Object.assign(Object.create(null),je);et&&(delete et.body,delete et.headers,delete et.method,delete et.signal,delete et.duplex,delete et.credentials);const ot=Object.assign(Object.create(null),et,{signal:E,method:G.toUpperCase(),headers:Ev(B.normalize()),body:I,duplex:"half",credentials:st?le:void 0});x&&(D.forEach(Sw,(Ae,Xe)=>{ot[Xe]===void 0&&(ot[Xe]=Ae)}),ot.signal===void 0&&(ot.signal=null),ot.body===void 0&&(ot.body=null)),K===0&&(ot.redirect="manual",et&&(et.redirect="manual")),b=x&&new p($,ot);let tt=await(x?H(b,et):H($,ot));const tr=ur.from(tt.headers);if(he){const Ae=D.toFiniteNumber(tr.getContentLength());if(Ae!=null&&Ae>we)throw new Ce("maxContentLength size of "+we+" exceeded",Ce.ERR_BAD_RESPONSE,C,b)}const Mt=z&&(y==="stream"||y==="response");if(z&&tt.body&&(ae||he||Mt&&re)){const Ae={};["status","statusText","headers"].forEach(vt=>{Ae[vt]=tt[vt]});const Xe=D.toFiniteNumber(tr.getContentLength()),[se,Be]=ae&&ax(Xe,Jl(ix(ae),!0))||[];let $t=0;const Ut=vt=>{if(he&&($t=vt,$t>we))throw new Ce("maxContentLength size of "+we+" exceeded",Ce.ERR_BAD_RESPONSE,C,b);se&&se(vt)};tt=new f(lx(tt.body,ux,Ut,()=>{Be&&Be(),re&&re()}),Ae)}y=y||"text";let gt=await O[D.findKey(O,y)||"text"](tt,C);if(he&&!z&&!Mt){let Ae;if(gt!=null&&(typeof gt.byteLength=="number"?Ae=gt.byteLength:typeof gt.size=="number"?Ae=gt.size:typeof gt=="string"&&(Ae=typeof l=="function"?new l().encode(gt).byteLength:gt.length)),typeof Ae=="number"&&Ae>we)throw new Ce("maxContentLength size of "+we+" exceeded",Ce.ERR_BAD_RESPONSE,C,b)}return!Mt&&re&&re(),await new Promise((Ae,Xe)=>{Lv(Ae,Xe,{data:gt,headers:ur.from(tt.headers),status:tt.status,statusText:tt.statusText,config:C,request:b})})}catch(ve){if(re&&re(),E&&E.aborted&&E.reason instanceof Ce){const ye=E.reason;throw ye.config=C,b&&(ye.request=b),ve!==ye&&Object.defineProperty(ye,"cause",{__proto__:null,value:ve,writable:!0,enumerable:!1,configurable:!0}),ye}if(T)throw b&&!T.request&&(T.request=b),T;if(ve instanceof Ce)throw b&&!ve.request&&(ve.request=b),ve;if(ve&&ve.name==="TypeError"&&/Load failed|fetch/i.test(ve.message)){const ye=new Ce("Network Error",Ce.ERR_NETWORK,C,b,ve&&ve.response);throw Object.defineProperty(ye,"cause",{__proto__:null,value:ve.cause||ve,writable:!0,enumerable:!1,configurable:!0}),ye}throw Ce.from(ve,ve&&ve.code,C,b,ve&&ve.response)}}},Rw=new Map,Uv=r=>{let i=r&&r.env||{};const{fetch:s,Request:l,Response:c}=i,p=[l,c,s];let f=p.length,m=f,x,_,j=Rw;for(;m--;)x=p[m],_=j.get(x),_===void 0&&j.set(x,_=m?new Map:$w(i)),j=_;return _};Uv();const Yp={http:Db,xhr:fw,fetch:{get:Uv}};D.forEach(Yp,(r,i)=>{if(r){try{Object.defineProperty(r,"name",{__proto__:null,value:i})}catch{}Object.defineProperty(r,"adapterName",{__proto__:null,value:i})}});const hx=r=>`- ${r}`,Pw=r=>D.isFunction(r)||r===null||r===!1;function zw(r,i){r=D.isArray(r)?r:[r];const{length:s}=r;let l,c;const p={};for(let f=0;f<s;f++){l=r[f];let m;if(c=l,!Pw(l)&&(c=Yp[(m=String(l)).toLowerCase()],c===void 0))throw new Ce(`Unknown adapter '${m}'`);if(c&&(D.isFunction(c)||(c=c.get(i))))break;p[m||"#"+f]=c}if(!c){const f=Object.entries(p).map(([x,_])=>`adapter ${x} `+(_===!1?"is not supported by the environment":"is not available in the build"));let m=s?f.length>1?`since :
`+f.map(hx).join(`
`):" "+hx(f[0]):"as no adapter specified";throw new Ce("There is no suitable adapter to dispatch the request "+m,Ce.ERR_NOT_SUPPORT)}return c}const Hv={getAdapter:zw,adapters:Yp};function yu(r){if(r.cancelToken&&r.cancelToken.throwIfRequested(),r.signal&&r.signal.aborted)throw new uo(null,r)}function ju(r){const i=D.toSafeFlatObject(r);return yu(i),i.headers=ur.from(D.getSafeProp(i,"headers")),i.data=gu.call(i,i.transformRequest),["post","put","patch"].indexOf(i.method)!==-1&&i.headers.setContentType("application/x-www-form-urlencoded",!1),Hv.getAdapter(i.adapter||co.adapter,i)(i).then(function(c){yu(i),i.response=c;try{c.data=gu.call(i,i.transformResponse,c)}finally{delete i.response}return c.headers=ur.from(c.headers),c},function(c){if(!Fv(c)&&(yu(i),c&&c.response)){i.response=c.response;try{c.response.data=gu.call(i,i.transformResponse,c.response)}finally{delete i.response}c.response.headers=ur.from(c.response.headers)}return Promise.reject(c)})}const mc={};["object","boolean","number","function","string","symbol"].forEach((r,i)=>{mc[r]=function(l){return typeof l===r||"a"+(i<1?"n ":" ")+r}});const mx={};mc.transitional=function(i,s,l){function c(p,f){return"[Axios v"+Kp+"] Transitional option '"+p+"'"+f+(l?". "+l:"")}return(p,f,m)=>{if(i===!1)throw new Ce(c(f," has been removed"+(s?" in "+s:"")),Ce.ERR_DEPRECATED);return s&&!mx[f]&&(mx[f]=!0,console.warn(c(f," has been deprecated since v"+s+" and will be removed in the near future"))),i?i(p,f,m):!0}};mc.spelling=function(i){return(s,l)=>(console.warn(`${l} is likely a misspelling of ${i}`),!0)};function Nw(r,i,s){if(typeof r!="object"||r===null)throw new Ce("options must be an object",Ce.ERR_BAD_OPTION_VALUE);const l=Object.keys(r);let c=l.length;for(;c-- >0;){const p=l[c],f=Object.prototype.hasOwnProperty.call(i,p)?i[p]:void 0;if(f){const m=r[p],x=m===void 0||f(m,p,r);if(x!==!0)throw new Ce("option "+p+" must be "+x,Ce.ERR_BAD_OPTION_VALUE);continue}if(s!==!0)throw new Ce("Unknown option "+p,Ce.ERR_BAD_OPTION)}}const ql={assertOptions:Nw,validators:mc},lr=ql.validators;let Ha=class{constructor(i){this.defaults=i||{},this.interceptors={request:new rx,response:new rx}}async request(i,s){try{return await this._request(i,s)}catch(l){if(l instanceof Error)try{let c={};Error.captureStackTrace?Error.captureStackTrace(c):c=new Error;const p=c.stack;let f="";if(typeof p=="string"){const m=p.indexOf(`
`);f=m===-1?"":p.slice(m+1)}if(!l.stack)l.stack=f;else if(f){const m=f.indexOf(`
`),x=m===-1?-1:f.indexOf(`
`,m+1),_=x===-1?"":f.slice(x+1);String(l.stack).endsWith(_)||(l.stack+=`
`+f)}}catch{}throw l}}_request(i,s){typeof i=="string"?(s=s||{},s.url=i):s=i||{},s=Ya(this.defaults,s);const{transitional:l,paramsSerializer:c,headers:p}=s;l!==void 0&&ql.assertOptions(l,{silentJSONParsing:lr.transitional(lr.boolean),forcedJSONParsing:lr.transitional(lr.boolean),clarifyTimeoutError:lr.transitional(lr.boolean),legacyInterceptorReqResOrdering:lr.transitional(lr.boolean),advertiseZstdAcceptEncoding:lr.transitional(lr.boolean),validateStatusUndefinedResolves:lr.transitional(lr.boolean)},!1),c!=null&&(D.isFunction(c)?s.paramsSerializer={serialize:c}:ql.assertOptions(c,{encode:lr.function,serialize:lr.function},!0)),s.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?s.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:s.allowAbsoluteUrls=!0),ql.assertOptions(s,{baseUrl:lr.spelling("baseURL"),withXsrfToken:lr.spelling("withXSRFToken")},!0),s.method=(D.getSafeProp(s,"method")||D.getSafeProp(this.defaults,"method")||"get").toLowerCase();let f=p&&D.merge(p.common,p[s.method]);p&&D.forEach(Dv.concat("common"),O=>{delete p[O]}),s.headers=ur.concat(f,p);const m=[];let x=!0;this.interceptors.request.forEach(function(R){if(typeof R.runWhen=="function"&&R.runWhen(s)===!1)return;x=x&&R.synchronous;const A=s.transitional||Gp;A&&A.legacyInterceptorReqResOrdering?m.unshift(R.fulfilled,R.rejected):m.push(R.fulfilled,R.rejected)});const _=[];this.interceptors.response.forEach(function(R){_.push(R.fulfilled,R.rejected)});let j,w=0,S;if(!x){const O=[ju.bind(this),void 0];for(O.unshift(...m),O.push(..._),S=O.length,j=Promise.resolve(s);w<S;)j=j.then(O[w++],O[w++]);return j}S=m.length;let z=s;for(;w<S;){const O=m[w++],R=m[w++];try{z=O?O(z):z}catch(A){if(!R){j=Promise.reject(A);break}try{const C=R.call(this,A);D.isThenable(C)&&(j=Promise.resolve(C).then(()=>ju.call(this,z)))}catch(C){j=Promise.reject(C)}break}}if(!j)try{j=ju.call(this,z)}catch(O){j=Promise.reject(O)}for(w=0,S=_.length;w<S;)j=j.then(_[w++],_[w++]);return j}getUri(i){i=Ya(this.defaults,i);const s=Iv(i.baseURL,i.url,i.allowAbsoluteUrls,i);return Nv(s,i.params,i.paramsSerializer)}};D.forEach(["delete","get","head","options"],function(i){Ha.prototype[i]=function(s,l){return this.request(Ya(l||{},{method:i,url:s,data:l&&D.hasOwnProp(l,"data")?l.data:void 0}))}});D.forEach(["post","put","patch","query"],function(i){function s(l){return function(p,f,m){return this.request(Ya(m||{},{method:i,headers:l?{"Content-Type":"multipart/form-data"}:{},url:p,data:f}))}}Ha.prototype[i]=s(),i!=="query"&&(Ha.prototype[i+"Form"]=s(!0))});let Mw=class Vv{constructor(i){if(typeof i!="function")throw new TypeError("executor must be a function.");let s;this.promise=new Promise(function(p){s=p});const l=this;this.promise.then(c=>{if(!l._listeners)return;let p=l._listeners.length;for(;p-- >0;)l._listeners[p](c);l._listeners=null}),this.promise.then=c=>{let p;const f=new Promise(m=>{l.subscribe(m),p=m}).then(c);return f.cancel=function(){l.unsubscribe(p)},f},i(function(p,f,m){l.reason||(l.reason=new uo(p,f,m),s(l.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(i){if(this.reason){i(this.reason);return}this._listeners?this._listeners.push(i):this._listeners=[i]}unsubscribe(i){if(!this._listeners)return;const s=this._listeners.indexOf(i);s!==-1&&this._listeners.splice(s,1)}toAbortSignal(){const i=new AbortController,s=l=>{i.abort(l)};return this.subscribe(s),i.signal.unsubscribe=()=>this.unsubscribe(s),i.signal}static source(){let i;return{token:new Vv(function(c){i=c}),cancel:i}}};function Tw(r){return function(s){return r.apply(null,s)}}function Aw(r){return D.isObject(r)&&r.isAxiosError===!0}const Ul={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,ContentTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,UnprocessableContent:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerReturnsAnUnknownError:520,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(Ul).forEach(([r,i])=>{Ul[i]===void 0&&(Ul[i]=r)});function Wv(r){const i=new Ha(r),s=xv(Ha.prototype.request,i);return D.extend(s,Ha.prototype,i,{allOwnKeys:!0}),D.extend(s,i,null,{allOwnKeys:!0}),s.create=function(c){return Wv(Ya(r,c))},s}const xt=Wv(co);xt.Axios=Ha;xt.CanceledError=uo;xt.CancelToken=Mw;xt.isCancel=Fv;xt.VERSION=Kp;xt.toFormData=hc;xt.AxiosError=Ce;xt.Cancel=xt.CanceledError;xt.all=function(i){return Promise.all(i)};xt.spread=Tw;xt.isAxiosError=Aw;xt.mergeConfig=Ya;xt.AxiosHeaders=ur;xt.formToJSON=r=>Av(D.isHTMLForm(r)?new FormData(r):r);xt.getAdapter=Hv.getAdapter;xt.HttpStatusCode=Ul;xt.default=xt;const{Axios:o$,AxiosError:l$,CanceledError:c$,isCancel:d$,CancelToken:u$,VERSION:p$,all:f$,Cancel:h$,isAxiosError:m$,spread:x$,toFormData:g$,AxiosHeaders:v$,HttpStatusCode:y$,formToJSON:j$,getAdapter:b$,mergeConfig:w$,create:_$}=xt,Ee=xt.create({baseURL:"http://localhost:3333/api",headers:{"Content-Type":"application/json"},withCredentials:!0});function Gv(r){const i=r;return i.user?i.user:i.data&&typeof i.data=="object"&&"user"in i.data&&i.data.user?i.data.user:i.data&&typeof i.data=="object"&&"email"in i.data?i.data:r}async function Dw(r){return(await Ee.post("/auth/register",r)).data.data}async function Fw(r){const i=await Ee.post("/auth/login",r);return Gv(i.data)}async function Lw(){const r=await Ee.get("/auth/me");return Gv(r.data)}async function Ow(){await Ee.post("/auth/logout")}async function Iw(){const i=(await Ee.get("/subscriptions/plans")).data;return i&&typeof i=="object"&&"data"in i&&i.data?i.data:i}async function Bw(r,i=[]){var l;const s=await Ee.post("/assistant/chat",{message:r,history:i});return((l=s.data.data)==null?void 0:l.message)??s.data.message??""}async function qw(r={}){return(await Ee.get("/study-resources",{params:r})).data}async function Uw(){return(await Ee.get("/study-resources/areas")).data.data}async function Hw(r={}){return(await Ee.get("/english-study/sessions",{params:r})).data}async function Vw(r){return(await Ee.post("/english-study/sessions",r)).data.data}async function xx(r,i){return(await Ee.patch(`/english-study/sessions/${encodeURIComponent(String(r))}`,i)).data.data}async function Ww(r){await Ee.delete(`/english-study/sessions/${encodeURIComponent(String(r))}`)}async function Gw(){return(await Ee.get("/english-study/goal")).data.data}async function Qw(r){return(await Ee.put("/english-study/goal",{daily_goal_minutes:r})).data.data}async function Kw(r={}){return(await Ee.get("/english-study/summary",{params:r})).data.data}async function Yw(r={}){return(await Ee.get("/expenses",{params:r})).data}async function Xw(){return(await Ee.get("/expenses/categories")).data.data}async function Jw(r){return(await Ee.get("/expenses/summary",{params:{month:r}})).data.data}async function Zw(r){return(await Ee.post("/expenses",r)).data.data}async function gx(r,i){return(await Ee.patch(`/expenses/${encodeURIComponent(String(r))}`,i)).data.data}async function e2(r){await Ee.delete(`/expenses/${encodeURIComponent(String(r))}`)}async function t2(){return(await Ee.get("/dividends/types")).data.data}async function r2(r={}){return(await Ee.get("/dividends",{params:r})).data}async function n2(){return(await Ee.get("/dividends/portfolio")).data.data}const a2={otimo:!0,bom:!0,neutro:!0,atencao:!0,evitar:!0};function i2(r){return r>=80?"otimo":r>=65?"bom":r>=45?"neutro":r>=30?"atencao":"evitar"}function s2(r,i){const s=Math.min(100,Math.max(0,Number(r.score)||0)),l=String(r.rating??""),c=r.ticker?String(r.ticker):void 0,p=String(r.label??c??r.id??`Item ${i+1}`),f=Array.isArray(r.top_assets)?r.top_assets.map(String):void 0;return{id:String(r.id??c??`${p}-${i}`),label:p,ticker:c,class_id:r.id&&!c?String(r.id):r.asset_class?String(r.asset_class):void 0,score:s,rating:l in a2?l:i2(s),reasons:Array.isArray(r.reasons)?r.reasons.map(String):[],top_assets:f,in_portfolio:r.in_portfolio===!0}}function bu(r){return Array.isArray(r)?r.map((i,s)=>s2(i??{},s)):[]}async function o2(r){const s=(await Ee.get("/market/opportunities",{params:r?{perfil:r}:void 0,timeout:6e4})).data,l=s.suggested_allocation_pct??{};return{profile:s.profile?String(s.profile):void 0,generated_at:s.generated_at?String(s.generated_at):void 0,disclaimer:s.disclaimer?String(s.disclaimer):void 0,warnings:Array.isArray(s.warnings)?s.warnings.map(String):[],classes:bu(s.classes),assets:bu(s.ranking),portfolio:bu(s.portfolio),suggested_allocation:Object.entries(l).map(([c,p])=>({id:c,percent:Number(p)||0}))}}async function l2(r){return(await Ee.get("/market/backtest",{params:{valor:r.valor,anos:r.anos,aporte_mensal:r.aporte_mensal,reajustar_aporte_ipca:r.reajustar_aporte_ipca,perfil:r.perfil},timeout:9e4})).data}async function c2(r){return(await Ee.get("/market/fiis/compare",{params:{...r.tickers.length?{tickers:r.tickers.join(",")}:{},anos:r.anos,valor:r.valor},timeout:12e4})).data}function Qv(r){return{perfil:r.perfil,anos:r.anos,prazo_meses:r.prazo_meses,cdi_percent:r.cdi_percent,lci_percent:r.lci_percent,...r.meta_renda_fixa!==void 0?{meta_renda_fixa:r.meta_renda_fixa}:{}}}async function d2(r){return(await Ee.get("/market/portfolio/fii-analysis",{params:Qv(r),timeout:12e4})).data}async function u2(r,i){return(await Ee.get("/market/portfolio/switch-simulation",{params:{...Qv(r),vender:i.map(l=>`${l.ticker}:${l.sell_pct}`).join(","),meses:"12,24,60"},timeout:12e4})).data}async function p2(){return(await Ee.post("/dividends/refresh-prices",void 0,{timeout:6e4})).data.data}async function f2(r,i,s){return(await Ee.get("/dividends/projection",{params:{from:r,months:i,cdi_rate:s}})).data.data}async function h2(r){return(await Ee.post("/dividends",r)).data.data}async function vx(r,i){return(await Ee.patch(`/dividends/${encodeURIComponent(String(r))}`,i)).data.data}async function m2(r){await Ee.delete(`/dividends/${encodeURIComponent(String(r))}`)}async function x2(r){const s=(await Ee.get(`/study-resources/${encodeURIComponent(String(r))}`)).data;return s&&typeof s=="object"&&"data"in s&&s.data?s.data:s}async function g2(r){await Ee.post("/study-resources",r)}async function v2(r,i){await Ee.patch(`/study-resources/${encodeURIComponent(String(r))}`,i)}async function y2(r){await Ee.delete(`/study-resources/${encodeURIComponent(String(r))}`)}async function j2(){var l;const r=await Ee.get("/finances/summary"),i=((l=r.data)==null?void 0:l.data)??r.data,s=Number((i==null?void 0:i.total_patrimony)??(i==null?void 0:i.total_balance)??(i==null?void 0:i.total)??0);return{total_balance:s,account_count:Number((i==null?void 0:i.account_count)??(i==null?void 0:i.accounts_count)??(i==null?void 0:i.accountCount)??(i==null?void 0:i.count)??0),total_patrimony:s,exchange_rate:(i==null?void 0:i.exchange_rate)==null?null:Number(i.exchange_rate),exchange_rate_date:(i==null?void 0:i.exchange_rate_date)??(i==null?void 0:i.rate_date)??null,asset_count:Number((i==null?void 0:i.asset_count)??(i==null?void 0:i.assetCount)??0),total_assets:Number((i==null?void 0:i.total_assets)??(i==null?void 0:i.assets_total_brl)??0),total_debt:Number((i==null?void 0:i.total_debt)??(i==null?void 0:i.liabilities_total_brl)??0),total_liabilities:Number((i==null?void 0:i.total_liabilities)??(i==null?void 0:i.liabilities_total_brl)??(i==null?void 0:i.total_debt)??0),monthly_payments:Number((i==null?void 0:i.monthly_payments)??(i==null?void 0:i.monthly_liability_payments_brl)??(i==null?void 0:i.monthly_payment_total)??0),assets_total_brl:Number((i==null?void 0:i.assets_total_brl)??(i==null?void 0:i.total_assets)??0),liabilities_total_brl:Number((i==null?void 0:i.liabilities_total_brl)??(i==null?void 0:i.total_liabilities)??(i==null?void 0:i.total_debt)??0),monthly_liability_payments_brl:Number((i==null?void 0:i.monthly_liability_payments_brl)??(i==null?void 0:i.monthly_payments)??0),investment_portfolio_invested_brl:Number((i==null?void 0:i.investment_portfolio_invested_brl)??0),investment_portfolio_value_brl:Number((i==null?void 0:i.investment_portfolio_value_brl)??0),investment_portfolio_profit_loss_brl:Number((i==null?void 0:i.investment_portfolio_profit_loss_brl)??0)}}async function b2(){const r=await Ee.get("/finances/accounts");return(Array.isArray(r.data)?r.data:r.data.data??[]).map(s=>({...s,currency:s.currency??"BRL",balance:Number(s.balance)||0,balance_brl:Number(s.balance_brl??s.balance)||0}))}async function w2(r){const i=await Ee.post("/finances/accounts",r);return"data"in i.data&&i.data.data?i.data.data:i.data}async function _2(r,i){const s=await Ee.patch(`/finances/accounts/${encodeURIComponent(String(r))}`,i);return"data"in s.data&&s.data.data?s.data.data:s.data}async function k2(r){await Ee.delete(`/finances/accounts/${encodeURIComponent(String(r))}`)}function Xp(r){return{...r,currency:r.currency??"BRL",estimated_value:Number(r.estimated_value)||0,monthly_rent:Number(r.monthly_rent)||0,value_brl:r.value_brl==null?void 0:Number(r.value_brl),estimated_value_brl:r.estimated_value_brl==null?void 0:Number(r.estimated_value_brl),debt_brl:r.debt_brl==null?void 0:Number(r.debt_brl),net_value_brl:r.net_value_brl==null?void 0:Number(r.net_value_brl)}}async function S2(){const r=await Ee.get("/finances/assets");return(Array.isArray(r.data)?r.data:r.data.data??[]).map(Xp)}async function C2(r){const i=await Ee.post("/finances/assets",r),s="data"in i.data&&i.data.data?i.data.data:i.data;return Xp(s)}async function E2(r,i){const s=await Ee.patch(`/finances/assets/${encodeURIComponent(String(r))}`,i),l="data"in s.data&&s.data.data?s.data.data:s.data;return Xp(l)}async function $2(r){await Ee.delete(`/finances/assets/${encodeURIComponent(String(r))}`)}function Jp(r){return{...r,currency:r.currency??"BRL",original_amount:Number(r.original_amount)||0,outstanding_balance:Number(r.outstanding_balance)||0,monthly_payment:Number(r.monthly_payment)||0,value_brl:r.value_brl==null?void 0:Number(r.value_brl),outstanding_balance_brl:r.outstanding_balance_brl==null?void 0:Number(r.outstanding_balance_brl),monthly_payment_brl:r.monthly_payment_brl==null?void 0:Number(r.monthly_payment_brl)}}async function R2(){const r=await Ee.get("/finances/liabilities");return(Array.isArray(r.data)?r.data:r.data.data??[]).map(Jp)}async function P2(r){const i=await Ee.post("/finances/liabilities",r),s="data"in i.data&&i.data.data?i.data.data:i.data;return Jp(s)}async function z2(r,i){const s=await Ee.patch(`/finances/liabilities/${encodeURIComponent(String(r))}`,i),l="data"in s.data&&s.data.data?s.data.data:s.data;return Jp(l)}async function N2(r){await Ee.delete(`/finances/liabilities/${encodeURIComponent(String(r))}`)}async function jl(r=1,i=10){return(await Ee.get("/tasks",{params:{page:r,limit:i}})).data}async function Ts(r){return(await Ee.get("/daily",{params:void 0})).data.data}async function M2(r=1,i=10,s){return(await Ee.get("/daily/history",{params:{page:r,limit:i,...s?{date:s}:{}}})).data}async function T2(r){return(await Ee.get(`/daily/history/${encodeURIComponent(r)}`)).data}async function A2(r=1,i=10,s){return(await Ee.get("/daily/history/week",{params:{page:r,limit:i,...s?{date:s}:{}}})).data}async function D2(r=1,i=10,s){return(await Ee.get("/daily/history/month",{params:{page:r,limit:i,...s?{date:s}:{}}})).data}async function F2(){return(await Ee.get("/objectives")).data.data}async function L2(r){return(await Ee.post("/objectives",r)).data.data}async function O2(r,i){return(await Ee.patch(`/objectives/${encodeURIComponent(String(r))}`,i)).data.data}async function I2(r){await Ee.delete(`/objectives/${encodeURIComponent(String(r))}`)}async function B2(r,i){return(await Ee.post(`/objectives/${encodeURIComponent(String(r))}/steps`,{title:i,status:"pendente"})).data.data}async function q2(r,i,s){const l=await Ee.patch(`/objectives/${encodeURIComponent(String(r))}/steps/${encodeURIComponent(String(i))}`,{status:s});return{...l.data.data,activity:l.data.activity,activities:l.data.activities}}async function U2(r,i){await Ee.delete(`/objectives/${encodeURIComponent(String(r))}/steps/${encodeURIComponent(String(i))}`)}async function H2(r,i=1,s=20){const l={page:i,limit:s};return r.mode==="date"?l.date=r.date:r.mode==="range"&&(l.from=r.from,l.to=r.to),(await Ee.get("/schedule",{params:l})).data}async function V2(r=1,i=20){return(await Ee.get("/schedule/alerts",{params:{page:r,limit:i}})).data}async function W2(r){return(await Ee.post("/schedule",r)).data.data}async function G2(r,i){return(await Ee.patch(`/schedule/${encodeURIComponent(String(r))}`,i)).data.data}async function Q2(r){await Ee.delete(`/schedule/${encodeURIComponent(String(r))}`)}async function K2(r){return(await Ee.post("/tasks",r)).data.data}async function Y2(r,i){await Ee.patch(`/tasks/${encodeURIComponent(String(r))}`,i)}async function X2(r){await Ee.delete(`/tasks/${r}`)}async function J2(r,i){const s=await Ee.patch(`/daily/items/${encodeURIComponent(String(r))}`,{is_completed:i});return{...s.data.data,activity:s.data.activity}}async function Z2(r){await Ee.patch(`/tasks/${r}/deactivate`)}async function e_(r){await Ee.patch(`/tasks/${r}/activate`)}/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t_=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Kv=(...r)=>r.filter((i,s,l)=>!!i&&i.trim()!==""&&l.indexOf(i)===s).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var r_={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n_=v.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:l,className:c="",children:p,iconNode:f,...m},x)=>v.createElement("svg",{ref:x,...r_,width:i,height:i,stroke:r,strokeWidth:l?Number(s)*24/Number(i):s,className:Kv("lucide",c),...m},[...f.map(([_,j])=>v.createElement(_,j)),...Array.isArray(p)?p:[p]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Se=(r,i)=>{const s=v.forwardRef(({className:l,...c},p)=>v.createElement(n_,{ref:p,iconNode:i,className:Kv(`lucide-${t_(r)}`,l),...c}));return s.displayName=`${r}`,s};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Js=Se("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yx=Se("ArchiveRestore",[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h2",key:"tvwodi"}],["path",{d:"M20 8v11a2 2 0 0 1-2 2h-2",key:"1gkqxj"}],["path",{d:"m9 15 3-3 3 3",key:"1pd0qc"}],["path",{d:"M12 12v9",key:"192myk"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a_=Se("Archive",[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"M10 12h4",key:"a56b0p"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zl=Se("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i_=Se("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s_=Se("Ban",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.9 4.9 14.2 14.2",key:"1m5liu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zp=Se("Banknote",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M6 12h.01M18 12h.01",key:"113zkx"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hl=Se("BellRing",[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M22 8c0-2.3-.8-4.3-2-6",key:"5bb3ad"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}],["path",{d:"M4 2C2.8 3.7 2 5.7 2 8",key:"tap9e0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fa=Se("Bell",[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o_=Se("Bold",[["path",{d:"M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8",key:"mg9rjx"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tr=Se("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jx=Se("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l_=Se("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bx=Se("Cake",[["path",{d:"M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8",key:"1w3rig"}],["path",{d:"M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1",key:"n2jgmb"}],["path",{d:"M2 21h20",key:"1nyx9w"}],["path",{d:"M7 8v3",key:"1qtyvj"}],["path",{d:"M12 8v3",key:"hwp4zt"}],["path",{d:"M17 8v3",key:"1i6e5u"}],["path",{d:"M7 4h.01",key:"1bh4kh"}],["path",{d:"M12 4h.01",key:"1ujb9j"}],["path",{d:"M17 4h.01",key:"1upcoc"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const He=Se("CalendarDays",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wp=Se("CalendarRange",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M17 14h-6",key:"bkmgh3"}],["path",{d:"M13 18H7",key:"bb0bb7"}],["path",{d:"M7 14h.01",key:"1qa3f1"}],["path",{d:"M17 18h.01",key:"1bdyru"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c_=Se("Car",[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d_=Se("ChartLine",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"m19 9-5 5-4-4-3 3",key:"2osh9i"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dr=Se("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u_=Se("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const io=Se("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oi=Se("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p_=Se("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fr=Se("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f_=Se("CircleHelp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h_=Se("CirclePause",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"10",x2:"10",y1:"15",y2:"9",key:"c1nkhi"}],["line",{x1:"14",x2:"14",y1:"15",y2:"9",key:"h65svq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m_=Se("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kr=Se("Clock3",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16.5 12",key:"1aq6pp"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zi=Se("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ec=Se("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x_=Se("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xc=Se("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g_=Se("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v_=Se("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _p=Se("Flag",[["path",{d:"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z",key:"i9b6wo"}],["line",{x1:"4",x2:"4",y1:"22",y2:"15",key:"1cm3nv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y_=Se("Focus",[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kp=Se("Gauge",[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j_=Se("Heading2",[["path",{d:"M4 12h8",key:"17cfdx"}],["path",{d:"M4 18V6",key:"1rz3zl"}],["path",{d:"M12 18V6",key:"zqpxq5"}],["path",{d:"M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1",key:"9jr5yi"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b_=Se("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vl=Se("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w_=Se("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const __=Se("Italic",[["line",{x1:"19",x2:"10",y1:"4",y2:"4",key:"15jd3p"}],["line",{x1:"14",x2:"5",y1:"20",y2:"20",key:"bu0au3"}],["line",{x1:"15",x2:"9",y1:"4",y2:"20",key:"uljnxc"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ef=Se("Landmark",[["line",{x1:"3",x2:"21",y1:"22",y2:"22",key:"j8o0r"}],["line",{x1:"6",x2:"6",y1:"18",y2:"11",key:"10tf0k"}],["line",{x1:"10",x2:"10",y1:"18",y2:"11",key:"54lgf6"}],["line",{x1:"14",x2:"14",y1:"18",y2:"11",key:"380y"}],["line",{x1:"18",x2:"18",y1:"18",y2:"11",key:"1kevvc"}],["polygon",{points:"12 2 20 7 4 7",key:"jkujk7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sp=Se("Languages",[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yv=Se("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gt=Se("ListChecks",[["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"m3 7 2 2 4-4",key:"1obspn"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k_=Se("ListOrdered",[["path",{d:"M10 12h11",key:"6m4ad9"}],["path",{d:"M10 18h11",key:"11hvi2"}],["path",{d:"M10 6h11",key:"c7qv1k"}],["path",{d:"M4 10h2",key:"16xx2s"}],["path",{d:"M4 6h1v4",key:"cnovpq"}],["path",{d:"M6 18H4c0-1 2-2 2-3s-1-1.5-2-1",key:"m9a95d"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S_=Se("List",[["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 18h.01",key:"1tta3j"}],["path",{d:"M3 6h.01",key:"1rqtza"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 18h13",key:"1lx6n3"}],["path",{d:"M8 6h13",key:"ik3vkj"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Je=Se("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C_=Se("LockKeyhole",[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3",key:"1pqi11"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E_=Se("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $_=Se("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R_=Se("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xv=Se("PackageOpen",[["path",{d:"M12 22v-9",key:"x3hkom"}],["path",{d:"M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.655 1.655 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z",key:"2ntwy6"}],["path",{d:"M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13",key:"1pmm1c"}],["path",{d:"M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.636 1.636 0 0 0 1.63 0z",key:"12ttoo"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jv=Se("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lr=Se("Pencil",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ni=Se("PiggyBank",[["path",{d:"M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2V5z",key:"1ivx2i"}],["path",{d:"M2 9v1c0 1.1.9 2 2 2h1",key:"nm575m"}],["path",{d:"M16 11h.01",key:"xkw8gn"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zv=Se("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ft=Se("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P_=Se("QrCode",[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cp=Se("Receipt",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",key:"1h4pet"}],["path",{d:"M12 17.5v-11",key:"1jc1ny"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e1=Se("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z_=Se("Repeat",[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const po=Se("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t1=Se("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N_=Se("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wx=Se("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M_=Se("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r1=Se("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ep=Se("SquareCheckBig",[["path",{d:"M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5",key:"1uzm8b"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T_=Se("Strikethrough",[["path",{d:"M16 4H9a3 3 0 0 0-2.83 4",key:"43sutm"}],["path",{d:"M14 12a4 4 0 0 1 0 8H6",key:"nlfj13"}],["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A_=Se("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mi=Se("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D_=Se("ThumbsUp",[["path",{d:"M7 10v12",key:"1qc93n"}],["path",{d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z",key:"emmmcr"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mr=Se("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wl=Se("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F_=Se("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L_=Se("Underline",[["path",{d:"M6 4v6a6 6 0 0 0 12 0V4",key:"9kb039"}],["line",{x1:"4",x2:"20",y1:"20",y2:"20",key:"nun2al"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O_=Se("UserRound",[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I_=Se("Video",[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Va=Se("Wallet",[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const er=Se("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),gc=Xa`
  from { opacity: 0; transform: translateY(-6px); }
  to { opacity: 1; transform: translateY(0); }
`,B_=h.div`
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
  animation: ${gc} .2s ease-out;
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
`,q_=h.span`
  display: grid;
  width: 42px;
  height: 42px;
  place-items: center;
  border-radius: var(--radius-lg);
  color: ${({$variant:r})=>r==="error"?"var(--error)":r==="success"?"var(--success)":"var(--info)"};
  background: var(--surface);

  svg { width: 21px; height: 21px; }
  @media (max-width: 639px) { width: 36px; height: 36px; }
`,U_=h.div`
  min-width: 0;
  padding-top: 1px;
  strong { display: block; margin-bottom: 4px; font-size: 14px; line-height: 1.4; }
  p { margin: 0; color: var(--muted); font-size: 13px; line-height: 1.55; overflow-wrap: anywhere; }
`,tf=h.button`
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
`,H_=h.div`
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
  animation: ${gc} .25s ease-out;
  strong { display: block; font-size: 15px; line-height: 1.35; }
  p { margin: 4px 0 0; color: var(--muted); font-size: 13px; line-height: 1.45; }
  @media (max-width: 639px) { grid-template-columns: 40px minmax(0, 1fr) 30px; gap: 10px; padding: 15px; }
`,V_=h.span`
  display: grid; width: 48px; height: 48px; place-items: center; border-radius: var(--radius-xl);
  color: ${({$variant:r})=>r==="success"?"var(--success)":r==="error"?"var(--error)":"var(--info)"};
  background: var(--surface);
  svg { width: 25px; height: 25px; }
  @media (max-width: 639px) { width: 40px; height: 40px; border-radius: var(--radius-lg); }
`,n1={error:p_,success:Fr,info:w_};function a1({variant:r,title:i,message:s,onDismiss:l}){const[c,p]=v.useState(!1);if(c)return null;const f=n1[r];function m(){p(!0),l==null||l()}return e.jsxs(B_,{$variant:r,role:r==="error"?"alert":"status","aria-live":r==="error"?"assertive":"polite",children:[e.jsx(q_,{$variant:r,children:e.jsx(f,{"aria-hidden":"true"})}),e.jsxs(U_,{children:[e.jsx("strong",{children:i}),e.jsx("p",{children:s})]}),l&&e.jsx(tf,{type:"button",onClick:m,"aria-label":"Dispensar aviso",children:e.jsx(er,{"aria-hidden":"true"})})]})}function i1({variant:r,title:i,message:s,onDismiss:l}){const c=n1[r];return e.jsxs(H_,{$variant:r,role:r==="error"?"alert":"status","aria-live":r==="error"?"assertive":"polite",children:[e.jsx(V_,{$variant:r,children:e.jsx(c,{"aria-hidden":"true"})}),e.jsxs("div",{children:[e.jsx("strong",{children:i}),e.jsx("p",{children:s})]}),l&&e.jsx(tf,{type:"button",onClick:l,"aria-label":"Fechar aviso",children:e.jsx(er,{"aria-hidden":"true"})})]})}const W_=h.div`
  position: fixed; z-index: 2100; top: 50%; left: 50%; display: grid; grid-template-columns: 76px minmax(0, 1fr) 30px;
  align-items: center; gap: 15px; width: min(440px, calc(100vw - 32px)); padding: 20px;
  border: 1px solid var(--success-border); border-radius: var(--radius-xl); color: var(--text); background: var(--surface);
  box-shadow: 0 24px 80px var(--shadow); transform: translate(-50%, -50%); animation: ${gc} .3s ease-out;
  strong { display: block; color: var(--success); font-size: 17px; } p { margin: 5px 0 0; color: var(--muted); font-size: 13px; line-height: 1.45; }
  @media (prefers-reduced-motion: reduce) { animation: none; }
`,G_=h.div`
  position: relative; display: grid; width: 76px; height: 76px; place-items: center; color: var(--success);
  border: 5px solid var(--surface); border-radius: 50%; background: var(--success-soft);
  box-shadow: 0 8px 18px var(--shadow); animation: ${gc} .45s ease-out both;
  svg { width: 39px; height: 39px; stroke-width: 2.5; }
`;function Q_({message:r,onDismiss:i}){return e.jsxs(W_,{role:"status","aria-live":"polite",children:[e.jsxs(G_,{children:[e.jsx(r1,{size:18,style:{position:"absolute",top:-12,right:-5}}),e.jsx(D_,{})]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Mandou bem!"}),e.jsx("p",{children:r})]}),i&&e.jsx(tf,{type:"button",onClick:i,"aria-label":"Fechar comemoração",children:e.jsx(er,{"aria-hidden":"true"})})]})}var vc=Bg();const K_=h.div`
  min-height: 100vh; display: flex; background: var(--page-bg); color: var(--text);
  @media (max-width: 639px) { display: block; }
`,Y_=h.aside`
  position: sticky; top: 0;
  width: ${({$collapsed:r})=>r?"84px":"252px"};
  height: 100vh;
  flex: 0 0 ${({$collapsed:r})=>r?"84px":"252px"};
  overflow-x: hidden;
  background: var(--surface); color: var(--text);
  border-right: 1px solid var(--border);
  padding: 24px 14px; display: flex; flex-direction: column; gap: 20px;
  transition: width var(--transition-normal), flex-basis var(--transition-normal), background var(--transition-normal);
  @media (max-width: 639px) { position: static; width: 100%; height: auto; padding: 14px; gap: 12px; }
`,X_=h.div`
  display: flex; align-items: center; gap: 11px; padding: 0 12px; color: var(--text);
  font-weight: 800; font-size: 20px; letter-spacing: -.4px;
  > svg { width: 30px; height: 30px; flex: 0 0 auto; color: var(--primary); }
  .brand-copy { display: grid; gap: 2px; min-width: 0; }
  .brand-copy strong { font: inherit; }
  .brand-copy small { color: var(--muted); font-size: 11px; font-weight: 500; letter-spacing: 0; line-height: 1.35; }
  ${({$collapsed:r})=>r&&Cn`justify-content: center; padding: 0; .brand-copy { display: none; }`}
  @media (max-width: 639px) { padding: 0 8px; .brand-copy { display: grid; } }
`,J_=h.nav`
  display: grid; gap: 7px;
  @media (max-width: 639px) { display: flex; overflow-x: auto; }
`,tc=h.button`
  position: relative; display: flex; align-items: center; gap: 13px; width: 100%; min-height: 44px; border: 0; border-radius: var(--radius-md);
  padding: 11px 14px; color: var(--muted); background: transparent; text-align: left; font-size: 14px; font-weight: 600;
  transition: color .15s ease, background .15s ease, transform .15s ease;
  &:hover { color: var(--primary-strong); background: var(--primary-soft); }
  ${({$active:r})=>r&&Cn`background: var(--primary-soft); color: var(--primary-strong);`}
  svg { width: 20px; height: 20px; flex-shrink: 0; }
  ${({$collapsed:r})=>r&&Cn`justify-content: center; padding: 11px 8px; gap: 0; .nav-label { display: none; }`}
  @media (max-width: 639px) { width: auto; min-height: 42px; flex: 0 0 auto; white-space: nowrap; padding: 10px 12px; ${({$collapsed:r})=>r&&Cn`justify-content: flex-start; gap: 10px; .nav-label { display: inline; }`} }
`,Z_=h.main`flex: 1; min-width: 0;`,ek=h.header`
  position: sticky; top: 0; z-index: 5; height: 70px; background: color-mix(in srgb, var(--surface) 90%, transparent); backdrop-filter: blur(14px); border-bottom: 1px solid var(--border);
  display: flex; align-items: center; justify-content: space-between; padding: 0 30px;
  @media (max-width: 639px) {
    height: auto; min-height: 62px; gap: 8px; padding: 10px 14px;
    > span:first-child { display: none; }
    > strong { min-width: 0; max-width: 40%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  }
`,tk=h.div`max-width: 1440px; margin: 0 auto; padding: 32px;
  @media (max-width: 639px) { padding: 18px 14px; }
`,gr=h.div`
  display: flex; justify-content: space-between; align-items: flex-start; gap: 16px; margin-bottom: 26px;
  h1 { font-size: clamp(26px, 3vw, 32px); line-height: 1.2; margin: 0 0 7px; letter-spacing: -.8px; color: var(--text); }
  p { color: var(--muted); margin: 0; line-height: 1.6; font-size: 14px; }
  @media (max-width: 639px) { flex-direction: column; }
`,yc=h.section`
  display: flex; align-items: flex-end; justify-content: space-between; gap: 20px;
  padding: clamp(20px, 4vw, 32px);
  border: 1px solid var(--border); border-radius: var(--radius-xl);
  background: color-mix(in srgb, var(--primary) 5%, var(--surface));
  box-shadow: var(--shadow-raised);
  > div:first-child > span { display: inline-flex; align-items: center; gap: 7px; color: var(--primary-strong); font-size: 12px; font-weight: 600; }
  h1 { margin: 12px 0 8px; color: var(--text); font-size: clamp(26px, 3vw, 32px); line-height: 1.2; letter-spacing: -.04em; }
  p { max-width: 560px; margin: 0; color: var(--muted); font-size: 14px; line-height: 1.6; }
  @media (max-width: 639px) { align-items: stretch; flex-direction: column; gap: 16px; }
`,rf=h.div`
  display: grid; grid-template-columns: minmax(0, 1.45fr) minmax(300px, .9fr); gap: 20px; align-items: start;
  @media (max-width: 1023px) { grid-template-columns: 1fr; }
`,Ie=h.section`
  background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 24px;
  box-shadow: var(--shadow-raised);
  @media (max-width: 639px) { padding: 17px; }
`,Te=h.h2`font-size: 18px; margin: 0 0 20px; display: flex; align-items: center; gap: 10px; color: var(--text); letter-spacing: -.2px;`,ne=h.label`
  display: grid; gap: 8px; margin-bottom: 18px; font-size: 14px; font-weight: 600; color: var(--text);
  small { color: var(--muted); font-weight: 400; }
  input, textarea, select { width: 100%; min-height: 44px; border: 1px solid var(--border); border-radius: var(--radius-md); padding: 11px 12px; outline: none; color: var(--text); background: var(--surface); font-size: 14px; font-weight: 400; transition: border-color .15s ease, box-shadow .15s ease; }
  input:focus, textarea:focus, select:focus { border-color: var(--primary); box-shadow: 0 0 0 4px var(--focus); }
  textarea { resize: vertical; min-height: 90px; }
`,s1=h.div`display: grid; grid-template-columns: 1fr 1fr; gap: 14px; @media (max-width: 639px) { grid-template-columns: 1fr; gap: 0; }`,nf=h.div`background: var(--surface-raised); padding: 13px; border-radius: var(--radius-md); display: grid; gap: 10px; margin-bottom: 16px;`,af=h.div`display: flex; gap: 9px; align-items: center;`,sf=h.span`width: 30px; height: 30px; display: grid; place-items: center; flex-shrink: 0; border-radius: 50%; background: var(--border); color: var(--text); font-size: 12px; font-weight: 800;`,rc=h.input`min-width: 0; flex: 1; border: 1px solid var(--border); border-radius: var(--radius-md); color: var(--text); background: var(--surface-raised); padding: 11px 12px;`,ue=h.button`
  display: inline-flex; align-items: center; justify-content: center; gap: 8px; min-height: 44px; border-radius: var(--radius-md); padding: 10px 16px; font-size: 14px; font-weight: 600; border: 1px solid transparent; transition: transform var(--transition-fast), box-shadow var(--transition-fast), background var(--transition-fast), border-color var(--transition-fast);
  &:hover:not(:disabled) { transform: translateY(-1px); }
  ${({$variant:r})=>r==="primary"&&Cn`background: var(--primary); color: var(--primary-contrast); &:hover:not(:disabled) { background: var(--primary-strong); }`}
  ${({$variant:r})=>(!r||r==="secondary")&&Cn`background: var(--surface); color: var(--text); border-color: var(--border); &:hover:not(:disabled) { background: var(--surface-raised); }`}
  ${({$variant:r})=>r==="danger"&&Cn`background: var(--error-soft); color: var(--error); border-color: var(--error-border); &:hover:not(:disabled) { filter: brightness(.97); }`}
  svg { width: 17px; height: 17px; }
`,rk=h.div`display: flex; gap: 10px; flex-wrap: wrap;`,of=h.div`display: flex; justify-content: flex-end; gap: 10px; border-top: 1px solid var(--border); padding-top: 18px; margin-top: 22px;`,lf=h.div`background: var(--surface-raised); padding: 17px; border-radius: var(--radius-md); margin-bottom: 22px;`,cf=h.div`display: flex; align-items: center; gap: 12px; font-weight: 800; font-size: 16px; margin-bottom: 14px; svg { color: var(--primary); }`,df=h.div`display: grid; gap: 11px; color: var(--muted); font-size: 13px; margin-top: 15px;`,xr=h.span`
  display: inline-flex; border-radius: var(--radius-full); padding: 5px 9px; font-size: 11px; font-weight: 700;
  color: ${({$done:r})=>r?"var(--success)":"var(--primary-strong)"};
  background: ${({$done:r})=>r?"var(--success-soft)":"color-mix(in srgb, var(--primary) 16%, var(--surface))"};
`,o1=h.div`display: flex; align-items: center; gap: 10px; padding: 13px 0; border-bottom: 1px solid var(--border); &:last-child { border-bottom: 0; }
  input { width: 17px; height: 17px; accent-color: var(--primary); }
  span { flex: 1; font-size: 13px; }
`,nk=h.div`display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 14px; margin-bottom: 20px; @media (max-width: 639px) { grid-template-columns: 1fr; }`,As=h(Ie)`padding: 19px; p { margin: 0 0 10px; color: var(--muted); font-size: 13px; } strong { font-size: 28px; }`,ak=h.div`height: 7px; background: var(--border); border-radius: var(--radius-full); overflow: hidden; margin-top: 13px; div { height: 100%; background: var(--primary); border-radius: inherit; transition: width .2s; }`;h(Ie)`margin-bottom: 15px;`;h.div`display: flex; justify-content: space-between; gap: 12px; align-items: flex-start; h3 { margin: 0 0 6px; font-size: 18px; } p { margin: 0; color: var(--muted); font-size: 13px; line-height: 1.5; }`;h.div`overflow-x: auto;`;h.table`
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
`;const Sn=h.p`color: var(--muted); font-size: 13px;`,Ve=h.div`text-align: center; padding: 38px 18px; color: var(--muted); svg { margin-bottom: 10px; color: var(--primary); } h3 { color: var(--text); margin: 0 0 7px; } p { margin: 0; font-size: 13px; }`,Or=h.select`min-height: 42px; padding: 9px 12px; border: 1px solid var(--border); border-radius: var(--radius-md); background: var(--surface); color: var(--text);`,l1=h.div`
  display: flex; flex-wrap: wrap; gap: 10px; align-items: center;
  @media (max-width: 639px) { width: 100%; }
`;h.span`
  display: inline-flex; align-items: center; border-radius: var(--radius-full); padding: 5px 9px;
  font-size: 11px; font-weight: 700; white-space: nowrap;
  color: ${({$priority:r})=>r==="high"?"var(--error)":r==="medium"?"var(--warning)":"var(--success)"};
  background: ${({$priority:r})=>r==="high"?"var(--error-soft)":r==="medium"?"var(--warning-soft)":"var(--success-soft)"};
`;h.div`display: grid; grid-template-columns: minmax(0,1fr) auto auto; align-items: center; gap: 14px; padding: 15px 0; border-bottom: 1px solid var(--border); &:last-child { border-bottom: 0; } @media (max-width: 639px) { grid-template-columns: 1fr auto; }`;const ik=Xa`
  from { opacity: 0; transform: translateY(8px) scale(.98); }
  to { opacity: 1; transform: translateY(0) scale(1); }
`,sk=h.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: grid;
  place-items: center;
  padding: 20px;
  background: rgba(17, 29, 48, .56);
  backdrop-filter: blur(4px);
`,ok=h.section`
  width: min(100%, 440px);
  padding: 26px;
  border: 1px solid rgba(255, 255, 255, .75);
  border-radius: var(--radius-xl);
  color: var(--text);
  background: var(--surface);
  border-color: var(--border);
  box-shadow: 0 24px 80px var(--shadow);
  animation: ${ik} .18s ease-out;

  @media (prefers-reduced-motion: reduce) { animation: none; }
  @media (max-width: 639px) { padding: 21px; border-radius: var(--radius-lg); }
`,lk=h.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
`,ck=h.div`
  display: grid;
  width: 52px;
  height: 52px;
  flex: 0 0 52px;
  place-items: center;
  border-radius: var(--radius-lg);
  color: var(--error);
  background: var(--error-soft);
  svg { width: 25px; height: 25px; }
`,dk=h.button`
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
`,uk=h.h2`
  margin: 20px 0 8px;
  color: var(--text);
  font-size: 21px;
  letter-spacing: -.35px;
`,pk=h.p`
  margin: 0;
  color: var(--muted);
  font-size: 14px;
  line-height: 1.65;
  overflow-wrap: anywhere;
`,fk=h.div`
  margin-top: 16px;
  padding: 11px 13px;
  border: 1px solid var(--warning-border);
  border-radius: var(--radius-md);
  color: var(--warning);
  background: var(--warning-soft);
  font-size: 12px;
  line-height: 1.5;
`,hk=h.div`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 24px;
`,mk=h(ue)`
  background: var(--error);
  color: var(--error-contrast);
  &:hover:not(:disabled) { filter: brightness(.9); }
`;function jc({open:r,title:i,description:s,confirmLabel:l="Excluir tarefa",busy:c=!1,onCancel:p,onConfirm:f}){const m=v.useRef(null);return v.useEffect(()=>{var w;if(!r)return;const x=document.body.style.overflow,_=document.activeElement instanceof HTMLElement?document.activeElement:null;document.body.style.overflow="hidden",(w=m.current)==null||w.focus();function j(S){var A,C;if(S.key==="Escape"&&!c&&p(),S.key!=="Tab")return;const z=(A=m.current)==null?void 0:A.querySelectorAll('button:not(:disabled), [href], input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])');if(!(z!=null&&z.length)){S.preventDefault(),(C=m.current)==null||C.focus();return}const O=z[0],R=z[z.length-1];S.shiftKey&&(document.activeElement===O||document.activeElement===m.current)?(S.preventDefault(),R.focus()):!S.shiftKey&&document.activeElement===R&&(S.preventDefault(),O.focus())}return window.addEventListener("keydown",j),()=>{document.body.style.overflow=x,window.removeEventListener("keydown",j),_==null||_.focus()}},[r,c,p]),r?vc.createPortal(e.jsx(sk,{onMouseDown:x=>{x.target===x.currentTarget&&!c&&p()},children:e.jsxs(ok,{ref:m,tabIndex:-1,role:"alertdialog","aria-modal":"true","aria-labelledby":"confirm-dialog-title","aria-describedby":"confirm-dialog-description",children:[e.jsxs(lk,{children:[e.jsx(ck,{children:e.jsx(F_,{"aria-hidden":"true"})}),e.jsx(dk,{type:"button",onClick:p,disabled:c,"aria-label":"Fechar confirmação",children:e.jsx(er,{"aria-hidden":"true"})})]}),e.jsx(uk,{id:"confirm-dialog-title",children:i}),e.jsx(pk,{id:"confirm-dialog-description",children:s}),e.jsx(fk,{children:"Essa ação não pode ser desfeita."}),e.jsxs(hk,{children:[e.jsx(ue,{type:"button",onClick:p,disabled:c,children:"Cancelar"}),e.jsxs(mk,{type:"button",onClick:f,disabled:c,children:[c?e.jsx(Je,{className:"spin"}):e.jsx(mr,{}),c?"Excluindo...":l]})]})]})}),document.body):null}const xk=Xa`
  from { opacity: 0; transform: translateY(8px) scale(.99); }
  to { opacity: 1; transform: translateY(0) scale(1); }
`,gk=h.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: grid;
  place-items: center;
  padding: 16px;
  background: rgba(19, 31, 51, .48);
  backdrop-filter: blur(5px);
`,vk=h.section`
  width: min(700px, calc(100vw - 32px));
  max-height: min(88vh, 760px);
  overflow-y: auto;
  padding: 24px;
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  color: var(--text);
  background: var(--surface);
  box-shadow: 0 24px 70px var(--shadow);
  animation: ${xk} var(--transition-normal);
  &:focus { outline: none; }
  @media (prefers-reduced-motion: reduce) { animation: none; }
  @media (max-width: 639px) { width: calc(100vw - 20px); padding: 18px; max-height: 92vh; }
`,yk=h.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 14px;
  h2 { display: flex; align-items: center; gap: 9px; margin: 0; color: var(--text); font-size: 18px; }
`,jk=h.button`
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
`;function Ii({open:r,title:i,icon:s,busy:l=!1,onClose:c,children:p}){const f=v.useId(),m=v.useRef(null);return v.useEffect(()=>{var w;if(!r)return;const x=document.activeElement instanceof HTMLElement?document.activeElement:null,_=S=>{var A,C;if(S.key==="Escape"&&!l&&c(),S.key!=="Tab")return;const z=(A=m.current)==null?void 0:A.querySelectorAll('button:not(:disabled), [href], input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])');if(!(z!=null&&z.length)){S.preventDefault(),(C=m.current)==null||C.focus();return}const O=z[0],R=z[z.length-1];S.shiftKey&&(document.activeElement===O||document.activeElement===m.current)?(S.preventDefault(),R.focus()):!S.shiftKey&&document.activeElement===R&&(S.preventDefault(),O.focus())},j=document.body.style.overflow;return document.addEventListener("keydown",_),document.body.style.overflow="hidden",(w=m.current)==null||w.focus(),()=>{document.removeEventListener("keydown",_),document.body.style.overflow=j,x==null||x.focus()}},[r,l,c]),r?vc.createPortal(e.jsx(gk,{role:"presentation",onMouseDown:x=>{x.target===x.currentTarget&&!l&&c()},children:e.jsxs(vk,{ref:m,tabIndex:-1,role:"dialog","aria-modal":"true","aria-labelledby":f,children:[e.jsxs(yk,{children:[e.jsxs("h2",{id:f,children:[s,i]}),e.jsx(jk,{type:"button","aria-label":"Fechar janela",title:"Fechar (Esc)",onClick:c,disabled:l,children:e.jsx(er,{size:18})})]}),p]})}),document.body):null}const bk=h.div`
  position: fixed;
  right: 24px;
  bottom: 24px;
  z-index: 20;
  @media (max-width: 520px) { right: 14px; bottom: 14px; }
`,wk=h.button`
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
`,_k=h.section`
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
`,kk=h.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 16px 17px;
  color: var(--primary-contrast);
  background: var(--primary);
  h2 { margin: 0; font-size: 15px; }
  p { margin: 3px 0 0; color: color-mix(in srgb, var(--primary-contrast) 76%, var(--primary)); font-size: 11px; }
`,Sk=h.div`
  display: flex;
  align-items: center;
  gap: 10px;
  > span { display: grid; width: 34px; height: 34px; place-items: center; border-radius: 10px; background: rgba(255,255,255,.16); }
  svg { width: 18px; height: 18px; }
`,Ck=h.button`
  display: grid; width: 30px; height: 30px; place-items: center; border: 0; border-radius: 8px; color: var(--primary-contrast); background: color-mix(in srgb, var(--primary-contrast) 14%, var(--primary)); cursor: pointer;
  &:hover { background: color-mix(in srgb, var(--primary-contrast) 22%, var(--primary)); }
  svg { width: 17px; height: 17px; }
`,Ek=h.div`
  display: grid;
  align-content: start;
  gap: 11px;
  overflow-y: auto;
  padding: 16px;
  background: var(--surface-raised);
`,wu=h.div`
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
`,$k=h.div`
  display: flex;
  gap: 6px;
  overflow-x: auto;
  padding: 9px 12px 0;
  button { flex: 0 0 auto; padding: 7px 9px; border: 1px solid var(--border); border-radius: 999px; color: var(--muted); background: var(--surface); font-size: 10px; cursor: pointer; &:hover { color: var(--primary); border-color: var(--primary); background: var(--surface-raised); } }
`,Rk=h.form`
  display: flex;
  align-items: flex-end;
  gap: 8px;
  padding: 12px;
  background: var(--surface);
  textarea { min-height: 42px; max-height: 100px; flex: 1; resize: none; padding: 11px 12px; border: 1px solid var(--border); border-radius: 11px; outline: none; color: var(--text); background: var(--surface-raised); font-size: 12px; &:focus { border-color: var(--primary); box-shadow: 0 0 0 3px var(--focus); } }
  button { display: grid; width: 42px; height: 42px; flex: 0 0 auto; place-items: center; border: 0; border-radius: 11px; color: var(--primary-contrast); background: var(--primary); cursor: pointer; &:disabled { opacity: .55; cursor: not-allowed; } svg { width: 17px; height: 17px; } }
`,Pk=h.div`
  display: grid; place-items: center; gap: 8px; min-height: 100%; padding: 28px; text-align: center; color: var(--muted); font-size: 12px;
  svg { color: var(--primary); }
  strong { color: var(--text); font-size: 14px; }
  p { margin: 0; line-height: 1.5; }
`;function zk(){const[r,i]=v.useState(!1),[s,l]=v.useState(""),[c,p]=v.useState(!1),[f,m]=v.useState(""),[x,_]=v.useState([]);async function j(S){var R,A;S.preventDefault();const z=s.trim();if(!z||c)return;const O=[...x,{role:"user",content:z}];_(O),l(""),m(""),p(!0);try{const C=await Bw(z,x);_([...O,{role:"assistant",content:C||"Não consegui gerar uma resposta agora."}])}catch(C){m(((A=(R=C==null?void 0:C.response)==null?void 0:R.data)==null?void 0:A.error)||"O assistente não está disponível no momento.")}finally{p(!1)}}function w(S){l(S),i(!0)}return e.jsx(bk,{children:r?e.jsxs(_k,{"aria-label":"Assistente de produtividade e estudos",children:[e.jsxs(kk,{children:[e.jsxs(Sk,{children:[e.jsx("span",{children:e.jsx(jx,{})}),e.jsxs("div",{children:[e.jsx("h2",{children:"Assistente inteligente"}),e.jsx("p",{children:"Produtividade e estudos"})]})]}),e.jsx(Ck,{type:"button","aria-label":"Fechar assistente",onClick:()=>i(!1),children:e.jsx(er,{})})]}),e.jsxs(Ek,{"aria-live":"polite",children:[x.length===0?e.jsxs(Pk,{children:[e.jsx(r1,{size:28}),e.jsx("strong",{children:"Como posso ajudar?"}),e.jsx("p",{children:"Posso montar planos de estudo, organizar prioridades, sugerir rotinas e ajudar você a sair da procrastinação."})]}):x.map((S,z)=>e.jsx(wu,{$role:S.role,children:S.content},`${S.role}-${z}`)),c&&e.jsx(wu,{$role:"assistant",children:"Pensando..."}),f&&e.jsx(wu,{$role:"assistant",children:f})]}),e.jsxs($k,{children:[e.jsxs("button",{type:"button",onClick:()=>w("Monte um plano de estudos para esta semana"),children:[e.jsx(Tr,{size:12})," Plano de estudos"]}),e.jsxs("button",{type:"button",onClick:()=>w("Ajude-me a organizar minhas prioridades de hoje"),children:[e.jsx(y_,{size:12})," Prioridades de hoje"]})]}),e.jsxs(Rk,{onSubmit:j,children:[e.jsx("textarea",{"aria-label":"Mensagem para o assistente",placeholder:"Pergunte sobre produtividade ou estudos...",value:s,onChange:S=>l(S.target.value),onKeyDown:S=>{var z;S.key==="Enter"&&!S.shiftKey&&(S.preventDefault(),(z=S.currentTarget.form)==null||z.requestSubmit())}}),e.jsx("button",{type:"submit","aria-label":"Enviar mensagem",disabled:!s.trim()||c,children:e.jsx(N_,{})})]})]}):e.jsxs(wk,{type:"button",onClick:()=>i(!0),children:[e.jsx(jx,{}),"Assistente IA"]})})}const c1=v.createContext(null),_x="task-manager-theme";function Nk({children:r}){const[i,s]=v.useState(()=>localStorage.getItem(_x)==="dark"?"dark":"light");v.useLayoutEffect(()=>{var c;document.documentElement.dataset.theme=i,(c=document.querySelector('meta[name="theme-color"]'))==null||c.setAttribute("content",i==="dark"?"#0B1120":"#F8FAFC"),localStorage.setItem(_x,i)},[i]);function l(){s(c=>c==="light"?"dark":"light")}return e.jsx(c1.Provider,{value:{mode:i,toggleTheme:l},children:r})}function Mk(){const r=v.useContext(c1);if(!r)throw new Error("useAppTheme must be used within AppThemeProvider");return r}const Tk=h.button`
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
`;function $p(){const{mode:r,toggleTheme:i}=Mk(),s=r==="dark"?"Ativar modo claro":"Ativar modo escuro",l=r==="dark"?A_:R_;return e.jsxs(Tk,{type:"button",onClick:i,"aria-label":s,"aria-pressed":r==="dark",title:s,children:[e.jsx(l,{"aria-hidden":"true"}),r==="dark"?"Modo claro":"Modo escuro"]})}const Gl=[{id:"tasks",label:"Tarefas",path:"/tasks",page:"list",icon:Gt},{id:"planning",label:"Planejamento",path:"/planning",page:"planning",icon:wp},{id:"goals",label:"Objetivos",path:"/goals",page:"goals",icon:_p},{id:"schedule",label:"Agenda",path:"/schedule",page:"schedule",icon:Fa},{id:"study-resources",label:"Biblioteca",path:"/study-resources",page:"study-resources",icon:Tr},{id:"finances",label:"Finanças",path:"/finances",page:"finances",icon:Zp},{id:"english-study",label:"Inglês",path:"/english-study",page:"english-study",icon:Sp},{id:"expenses",label:"Despesas",path:"/expenses",page:"expenses",icon:Cp},{id:"dividends",label:"Dividendos",path:"/dividends",page:"dividends",icon:Ni},{id:"fixed-income",label:"Renda fixa",path:"/fixed-income",page:"fixed-income",icon:Ni},{id:"opportunities",label:"Oportunidades",path:"/opportunities",page:"opportunities",icon:kp}],d1="task-manager-menu-order",u1="task-manager-sidebar-collapsed",_u=new Set(["finances","expenses","dividends","fixed-income","opportunities"]),Ak=h.button`
  display: inline-flex; align-items: center; gap: 7px; min-height: 44px; padding: 8px 12px; border: 1px solid var(--error-border); border-radius: var(--radius-md);
  color: var(--error); background: var(--error-soft); font-size: 12px; font-weight: 700; cursor: pointer; transition: background var(--transition-fast), border-color var(--transition-fast), transform var(--transition-fast);
  &:hover { border-color: var(--error); filter: brightness(.97); transform: translateY(-1px); }
  svg { width: 16px; height: 16px; }
  @media (max-width: 639px) { padding: 8px 10px; font-size: 0; svg { width: 17px; height: 17px; } }
`,Dk=h.button`
  display: inline-flex; align-items: center; justify-content: ${({$collapsed:r})=>r?"center":"flex-end"};
  align-self: ${({$collapsed:r})=>r?"stretch":"flex-end"};
  gap: 7px; min-height: 40px; padding: 6px 9px; border: 1px solid var(--border); border-radius: var(--radius-md);
  color: var(--muted); background: var(--surface); font-size: 11px; font-weight: 600;
  transition: color var(--transition-fast), background var(--transition-fast), border-color var(--transition-fast);
  &:hover { color: var(--primary-strong); border-color: var(--primary); background: var(--primary-soft); }
  svg { width: 16px; height: 16px; }
  .collapse-label { display: ${({$collapsed:r})=>r?"none":"inline"}; }
  @media (max-width: 639px) { display: none; }
`,Fk=h.div`
  display: grid;
  position: relative;
  gap: 5px;
  min-width: 0;
`,Lk=h(tc)`
  justify-content: space-between;
  &[aria-expanded='true'] { color: var(--primary-strong); background: var(--primary-soft); }
  .finance-chevron { width: 15px; height: 15px; flex: 0 0 auto; transition: transform .15s ease; }
  ${({$collapsed:r})=>r&&"justify-content: center; .nav-label { display: none; } .finance-chevron { display: none; }"}
  @media (max-width: 639px) { justify-content: space-between; ${({$collapsed:r})=>r&&".nav-label { display: inline-flex; } .finance-chevron { display: block; }"} }
`,Ok=h.div`
  display: grid;
  gap: 4px;
  padding-left: 10px;
  margin-left: 14px;
  border-left: 1px solid var(--border);
  ${({$collapsed:r})=>r&&"padding: 0; margin: 0; border: 0;"}
  @media (max-width: 639px) { position: absolute; z-index: 10; top: calc(100% + 6px); left: 14px; min-width: 190px; padding: 8px; margin: 0; border: 1px solid var(--border); border-radius: var(--radius-md); background: var(--surface); box-shadow: var(--shadow-raised); }
`,Ik=h(tc)`
  gap: 10px;
  padding: 10px 12px;
  border-radius: var(--radius-md);
  font-size: 12px;
  svg { width: 16px; height: 16px; }
`,Bk=h.p`
  margin: 0 0 15px;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.55;
`,qk=h.div`
  display: grid;
  gap: 8px;
`,Uk=h.div`
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
`,Hk=h.span`
  display: grid;
  width: 34px;
  height: 34px;
  place-items: center;
  border-radius: var(--radius-md);
  color: var(--primary-strong);
  background: color-mix(in srgb, var(--primary) 12%, var(--surface));
  svg { width: 17px; height: 17px; }
`,Vk=h.strong`
  min-width: 0;
  color: var(--text);
  font-size: 13px;
  overflow-wrap: anywhere;
`,Wk=h.span`
  padding: 5px 8px;
  border: 1px solid ${({$archived:r})=>r?"var(--border)":"var(--success-border)"};
  border-radius: var(--radius-full);
  color: ${({$archived:r})=>r?"var(--muted)":"var(--success)"};
  background: ${({$archived:r})=>r?"var(--surface)":"var(--success-soft)"};
  font-size: 10px;
  font-weight: 750;
  white-space: nowrap;
`,Gk=h.button`
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
`,Qk=h.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin-top: 14px;
  color: var(--muted);
  font-size: 11px;
  @media (max-width: 639px) { align-items: flex-start; flex-direction: column; }
`;function Kk(){try{const r=JSON.parse(localStorage.getItem(d1)??"[]");return[...r.map(s=>Gl.find(l=>l.id===s)).filter(Boolean),...Gl.filter(s=>!r.includes(s.id))]}catch{return Gl}}function Yk(){try{return localStorage.getItem(u1)==="true"}catch{return!1}}function Rp(r){return`task-manager-archived-pages:${String(r)}`}function kx(r){try{const i=JSON.parse(localStorage.getItem(Rp(r))??"[]");return Array.isArray(i)?[...new Set(i.filter(s=>typeof s=="string"&&Gl.some(l=>l.id===s)))]:[]}catch{return[]}}function Xk({page:r,error:i,notice:s,children:l,onNavigate:c,user:p,onLogout:f,onDismissError:m,onDismissNotice:x,celebration:_,onDismissCelebration:j}){const[w,S]=v.useState(Kk),[z,O]=v.useState(()=>kx(p.id)),[R,A]=v.useState(null),[C,$]=v.useState(!1),[G,I]=v.useState(Yk),[J,Q]=v.useState(()=>_u.has(r)),F=w.filter(K=>!z.includes(K.id)),ae=F.filter(K=>_u.has(K.id)),k=w.filter(K=>K.id==="finances"?ae.length>0:K.id==="expenses"||K.id==="dividends"||K.id==="fixed-income"||K.id==="opportunities"?!1:!z.includes(K.id));v.useEffect(()=>{O(kx(p.id))},[p.id]),v.useEffect(()=>{_u.has(r)&&Q(!0)},[r]);function y(K,he){const oe=w.length-z.length;if(he&&oe<=1)return;const me=he?[...new Set([...z,K.id])]:z.filter(E=>E!==K.id);O(me);try{localStorage.setItem(Rp(p.id),JSON.stringify(me))}catch{}const H=r===K.page||K.page==="study-resources"&&r==="study-resource-edit";if(he&&H){const E=w.find(b=>b.id!==K.id&&!me.includes(b.id));E&&c(E.path)}}function B(){O([]);try{localStorage.removeItem(Rp(p.id))}catch{}}function le(){I(K=>{const he=!K;try{localStorage.setItem(u1,String(he))}catch{}return he})}function je(K,he){A(he),K.dataTransfer.effectAllowed="move",K.dataTransfer.setData("text/plain",he)}function we(K,he){K.preventDefault();const oe=K.dataTransfer.getData("text/plain")||R;!oe||oe===he||(S(me=>{const H=[...me],E=H.findIndex(ce=>ce.id===oe),b=H.findIndex(ce=>ce.id===he);if(E<0||b<0)return me;const[re]=H.splice(E,1);return H.splice(b,0,re),localStorage.setItem(d1,JSON.stringify(H.map(ce=>ce.id))),H}),A(null))}function Pe(K,he=!1){const oe=K.icon,me=he?Ik:tc,H=r===K.page||K.page==="study-resources"&&r==="study-resource-edit";return e.jsxs(me,{$active:H,$collapsed:G,draggable:!0,title:G?K.label:"Arraste para mudar a posição","aria-label":he&&K.id==="finances"?"Finanças — visão geral":K.label,onDragStart:E=>je(E,K.id),onDragOver:E=>E.preventDefault(),onDrop:E=>we(E,K.id),onDragEnd:()=>A(null),style:{opacity:R===K.id?.45:1},"aria-current":r===K.page?"page":void 0,onClick:()=>c(K.path),children:[e.jsx(oe,{}),e.jsx("span",{className:"nav-label",children:he&&K.id==="finances"?"Visão geral":K.label})]},K.id)}return e.jsxs(K_,{children:[e.jsxs(Y_,{$collapsed:G,children:[e.jsxs(X_,{$collapsed:G,children:[e.jsx(Ep,{}),e.jsxs("span",{className:"brand-copy",children:[e.jsx("strong",{children:"Rumo"}),e.jsx("small",{children:"Organize hoje. Avance no seu ritmo."})]})]}),e.jsx(Dk,{type:"button",$collapsed:G,"aria-label":G?"Expandir menu lateral":"Recolher menu lateral","aria-expanded":!G,"aria-controls":"primary-navigation",title:G?"Expandir menu":"Recolher menu",onClick:le,children:G?e.jsx(Oi,{"aria-hidden":"true"}):e.jsxs(e.Fragment,{children:[e.jsx(io,{"aria-hidden":"true"}),e.jsx("span",{className:"collapse-label",children:"Recolher menu"})]})}),e.jsx(J_,{id:"primary-navigation","aria-label":"Navegação principal",children:k.map(K=>K.id!=="finances"?Pe(K):e.jsxs(Fk,{children:[e.jsxs(Lk,{type:"button",$active:!1,$collapsed:G,"aria-expanded":J,"aria-controls":"finance-subnav","aria-label":"Finanças",title:G?"Finanças":void 0,onClick:()=>Q(he=>!he),children:[e.jsx(Zp,{}),e.jsx("span",{className:"nav-label",children:"Finanças"}),e.jsx(u_,{className:"finance-chevron","aria-hidden":"true",style:{transform:J?"rotate(180deg)":void 0}})]}),J&&e.jsx(Ok,{id:"finance-subnav",$collapsed:G,children:ae.map(he=>Pe(he,!0))})]},"finance-group"))}),e.jsx("div",{style:{marginTop:"auto"},children:e.jsxs(tc,{type:"button",$active:C,$collapsed:G,"aria-label":"Configurações",title:G?"Configurações":void 0,onClick:()=>$(!0),children:[e.jsx(wx,{}),e.jsx("span",{className:"nav-label",children:"Configurações"}),!G&&z.length>0&&e.jsx("span",{style:{marginLeft:"auto",fontSize:11},children:z.length})]})})]}),e.jsxs(Z_,{children:[e.jsxs(ek,{children:[e.jsx("span",{style:{color:"var(--muted)",fontSize:13},children:"Seu espaço de produtividade"}),e.jsxs("strong",{style:{fontSize:13},children:["Olá, ",p.name||p.email]}),e.jsx($p,{}),e.jsxs(Ak,{type:"button",onClick:f,title:"Sair da conta","aria-label":"Sair da conta",children:[e.jsx(E_,{}),"Sair"]})]}),e.jsxs(tk,{children:[i&&e.jsx(a1,{variant:"error",title:"Não foi possível concluir",message:i,onDismiss:m},"error"),s&&e.jsx(i1,{variant:"success",title:"Ação concluída",message:s,onDismiss:x},"success"),_&&e.jsx(Q_,{message:_,onDismiss:j}),l,e.jsx(zk,{})]})]}),e.jsxs(Ii,{open:C,title:"Configurações",icon:e.jsx(wx,{size:19}),onClose:()=>$(!1),children:[e.jsx("strong",{style:{display:"block",marginBottom:8,color:"var(--text)",fontSize:14},children:"Páginas do menu"}),e.jsx(Bk,{children:"Escolha quais páginas aparecem no menu lateral. As páginas arquivadas podem ser restauradas a qualquer momento; seus dados continuam preservados."}),e.jsx(qk,{children:w.map(K=>{const{id:he,label:oe,icon:me}=K,H=z.includes(he),E=!H&&F.length<=1;return e.jsxs(Uk,{children:[e.jsx(Hk,{children:e.jsx(me,{"aria-hidden":"true"})}),e.jsx(Vk,{children:oe}),e.jsx(Wk,{$archived:H,children:H?"Arquivada":"Visível"}),e.jsxs(Gk,{type:"button",$restore:H,disabled:E,title:E?"Mantenha pelo menos uma página no menu":void 0,onClick:()=>y(K,!H),children:[H?e.jsx(yx,{}):e.jsx(a_,{}),H?"Restaurar":"Arquivar"]})]},he)})}),e.jsxs(Qk,{children:[e.jsxs("span",{children:[z.length," ",z.length===1?"página arquivada":"páginas arquivadas"]}),z.length>0&&e.jsxs(ue,{type:"button",onClick:B,children:[e.jsx(yx,{}),"Restaurar todas"]})]})]})]})}const Sx=()=>new Date().toISOString().slice(0,10),Cx=r=>r?new Date(`${r.slice(0,10)}T12:00:00`).toLocaleDateString("pt-BR"):"Não definida";function Jk({saving:r,onCreate:i,onValidationError:s}){const[l,c]=v.useState(""),[p,f]=v.useState(""),[m,x]=v.useState("medium"),[_,j]=v.useState("diaria"),[w,S]=v.useState(Sx()),[z,O]=v.useState(""),[R,A]=v.useState(["",""]);function C(I,J){A(Q=>Q.map((F,ae)=>ae===I?J:F))}function $(){c(""),f(""),x("medium"),j("diaria"),S(Sx()),O(""),A(["",""])}async function G(I){I.preventDefault(),s("");const J=R.map(F=>F.trim()).filter(Boolean);if(!l.trim()){s("Informe o título da tarefa.");return}if(!J.length){s("Adicione pelo menos um item à tarefa.");return}if(z&&w&&z<w){s("A data final não pode ser anterior à data inicial.");return}await i({title:l.trim(),description:p.trim()||null,priority:m,frequencia:_,start_date:w||void 0,end_date:z||null,items:J})&&$()}return e.jsxs(e.Fragment,{children:[e.jsx(gr,{children:e.jsxs("div",{children:[e.jsx("h1",{children:"Nova tarefa"}),e.jsx("p",{children:"Organize seu dia adicionando tarefas e atividades."})]})}),e.jsxs(rf,{children:[e.jsxs(Ie,{children:[e.jsxs(Te,{children:[e.jsx(ft,{size:19,color:"var(--primary)"})," Criar tarefa"]}),e.jsxs("form",{onSubmit:I=>void G(I),children:[e.jsxs(ne,{children:["Título da tarefa *",e.jsx("input",{value:l,onChange:I=>c(I.target.value),maxLength:200,placeholder:"Ex.: Estudar programação",required:!0})]}),e.jsxs(ne,{children:["Descrição ",e.jsx("small",{children:"(opcional)"}),e.jsx("textarea",{value:p,onChange:I=>f(I.target.value),maxLength:1e4,placeholder:"Descreva o objetivo desta tarefa..."})]}),e.jsxs(ne,{children:["Prioridade",e.jsxs(Or,{value:m,onChange:I=>x(I.target.value),children:[e.jsx("option",{value:"high",children:"Alta"}),e.jsx("option",{value:"medium",children:"Média"}),e.jsx("option",{value:"low",children:"Baixa"})]})]}),e.jsxs(ne,{children:["Frequência",e.jsxs(Or,{value:_,onChange:I=>j(I.target.value),children:[e.jsx("option",{value:"diaria",children:"Dia"}),e.jsx("option",{value:"semana",children:"Semana"}),e.jsx("option",{value:"mensal",children:"Mês"})]})]}),e.jsxs(s1,{children:[e.jsxs(ne,{children:["Data de início",e.jsx("input",{type:"date",value:w,onChange:I=>S(I.target.value)})]}),e.jsxs(ne,{children:["Data de fim ",e.jsx("small",{children:"(opcional)"}),e.jsx("input",{type:"date",min:w||void 0,value:z,onChange:I=>O(I.target.value)})]})]}),e.jsxs(Te,{style:{marginTop:8,marginBottom:6},children:["Itens da tarefa * ",e.jsx(f_,{size:15,color:"var(--muted)"})]}),e.jsx(Sn,{children:"Adicione as atividades que você quer acompanhar."}),e.jsxs(nf,{children:[R.map((I,J)=>e.jsxs(af,{children:[e.jsx(sf,{children:J+1}),e.jsx(rc,{"aria-label":`Item ${J+1}`,value:I,maxLength:200,onChange:Q=>C(J,Q.target.value),placeholder:"Nome da atividade"}),e.jsx(ue,{type:"button",$variant:"danger","aria-label":"Remover item",disabled:R.length<=1,onClick:()=>A(Q=>Q.filter((F,ae)=>ae!==J)),children:e.jsx(mr,{})})]},J)),e.jsx("div",{children:e.jsxs(ue,{type:"button",onClick:()=>A(I=>I.length<100?[...I,""]:I),disabled:R.length>=100,children:[e.jsx(ft,{}),"Adicionar item"]})})]}),e.jsxs(of,{children:[e.jsxs(ue,{type:"button",onClick:$,children:[e.jsx(er,{}),"Limpar"]}),e.jsxs(ue,{type:"submit",$variant:"primary",disabled:r,children:[r?e.jsx(Je,{className:"spin"}):e.jsx(po,{}),r?"Salvando...":"Salvar tarefa"]})]})]})]}),e.jsxs(Ie,{children:[e.jsx(Te,{children:"Prévia da tarefa"}),e.jsxs(lf,{children:[e.jsxs(cf,{children:[e.jsx(Gt,{size:23}),l.trim()||"Título da tarefa"]}),e.jsx(Sn,{children:p.trim()||"A descrição aparecerá aqui."}),e.jsxs(df,{children:[e.jsxs("span",{children:[e.jsx(He,{size:15,style:{verticalAlign:"middle",marginRight:7}}),"Início: ",Cx(w)]}),e.jsxs("span",{children:[e.jsx(He,{size:15,style:{verticalAlign:"middle",marginRight:7}}),"Fim: ",Cx(z)]}),e.jsxs("span",{children:[e.jsx(Js,{size:15,style:{verticalAlign:"middle",marginRight:7}}),"Frequência: ",_==="diaria"?"Dia":_==="semana"?"Semana":"Mês"]}),e.jsxs("span",{children:[e.jsx(Js,{size:15,style:{verticalAlign:"middle",marginRight:7}}),"Status: Ativa"]})]})]}),e.jsx(Te,{children:"Itens adicionados"}),R.some(I=>I.trim())?R.map((I,J)=>I.trim()&&e.jsxs(o1,{children:[e.jsx("input",{type:"checkbox",disabled:!0}),e.jsx("span",{children:I}),e.jsx(xr,{children:"Pendente"})]},J)):e.jsx(Sn,{children:"Os itens aparecerão aqui enquanto você digita."})]})]})]})}const Zk=h.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
  margin-bottom: 22px;
  @media (max-width: 520px) { grid-template-columns: 1fr; }
`,Ex=h.div`
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
`,$x=h.span`
  display: grid;
  width: 42px;
  height: 42px;
  place-items: center;
  border-radius: 12px;
  color: ${({$tone:r})=>r==="green"?"var(--success)":"var(--primary-strong)"};
  background: ${({$tone:r})=>r==="green"?"var(--success-soft)":"color-mix(in srgb, var(--primary) 13%, var(--surface))"};
  svg { width: 19px; height: 19px; }
`,eS=h.div`
  display: grid;
  gap: 12px;
`,tS=h.article`
  display: grid;
  gap: 10px;
  padding: 17px 18px;
  border: 1px solid var(--success-border);
  border-left: 3px solid var(--success);
  border-radius: var(--radius-lg);
  background: linear-gradient(135deg, color-mix(in srgb, var(--success) 4%, var(--surface)), var(--surface));
  box-shadow: 0 5px 18px var(--shadow);
`,rS=h.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  h2 { margin: 0; color: var(--text); font-size: 14px; line-height: 1.45; overflow-wrap: anywhere; }
`,nS=h.div`
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
`,aS=h.div`
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
`,iS=r=>r?new Date(`${r.slice(0,10)}T12:00:00`).toLocaleDateString("pt-BR",{weekday:"long",day:"numeric",month:"long",year:"numeric"}):"Hoje",sS=r=>r?new Date(r).toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"}):"";function p1({dailyRecords:r,loading:i,onNavigate:s}){var f;const l=v.useMemo(()=>r.map(m=>({...m,items:m.items.filter(x=>x.is_completed)})).filter(m=>m.items.length>0),[r]),c=l.reduce((m,x)=>m+x.items.length,0),p=(f=r[0])==null?void 0:f.record_date;return e.jsxs(e.Fragment,{children:[e.jsxs(gr,{children:[e.jsxs("div",{children:[e.jsx("h1",{children:"Atividades concluídas"}),e.jsx("p",{children:iS(p)})]}),e.jsxs(ue,{onClick:()=>s("/today"),children:[e.jsx(He,{}),"Ver tarefas de hoje"]})]}),e.jsxs(Zk,{"aria-label":"Resumo das atividades concluídas",children:[e.jsxs(Ex,{children:[e.jsx($x,{$tone:"green",children:e.jsx(Fr,{})}),e.jsxs("div",{children:[e.jsx("span",{children:"Atividades concluídas hoje"}),e.jsx("strong",{children:c})]})]}),e.jsxs(Ex,{children:[e.jsx($x,{$tone:"blue",children:e.jsx(Gt,{})}),e.jsxs("div",{children:[e.jsx("span",{children:"Tarefas com conclusão"}),e.jsx("strong",{children:l.length})]})]})]}),e.jsxs(aS,{children:[e.jsx(Kr,{size:16}),e.jsx("span",{children:"Esta página mostra as atividades marcadas como concluídas nos registros reais de hoje."})]}),i?e.jsxs(Ve,{children:[e.jsx(Je,{}),e.jsx("p",{children:"Carregando atividades concluídas..."})]}):l.length===0?e.jsx(Ie,{children:e.jsxs(Ve,{children:[e.jsx(Fr,{size:32}),e.jsx("h3",{children:"Nenhuma atividade concluída hoje"}),e.jsx("p",{children:"Quando marcar atividades como concluídas, elas aparecerão nesta página."}),e.jsx("div",{style:{marginTop:16},children:e.jsx(ue,{$variant:"primary",onClick:()=>s("/today"),children:"Ir para Hoje"})})]})}):e.jsx(eS,{children:l.map(m=>e.jsxs(tS,{children:[e.jsxs(rS,{children:[e.jsx("h2",{children:m.task_title}),e.jsxs(xr,{$done:!0,children:[m.items.length," ",m.items.length===1?"concluída":"concluídas"]})]}),m.items.map(x=>e.jsxs(nS,{children:[e.jsx(Fr,{size:17}),e.jsx("span",{children:x.title}),x.completed_at&&e.jsx("time",{children:sS(x.completed_at)})]},x.id))]},`${m.task_id}-${m.record_date}`))})]})}const oS=h.div`
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
`,lS=h(Ie)`
  margin-bottom: 20px;
`,cS=h.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(210px, 0.45fr);
  gap: 16px;
  @media (max-width: 680px) {
    grid-template-columns: 1fr;
    gap: 0;
  }
`,dS=h.div`
  display: grid;
  gap: 15px;
`,uS=h.article`
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
`,pS=h.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 14px;
  @media (max-width: 560px) {
    flex-direction: column;
  }
`,fS=h.div`
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
`,hS=h.div`
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  @media (max-width: 560px) {
    width: 100%;
  }
`,bl=h(ue)`
  min-height: 34px;
  padding: 7px 10px;
  gap: 6px;
  font-size: 11px;
  svg {
    width: 15px;
    height: 15px;
  }
`,mS=h.div`
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
`,Rx=h.select`
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
`,xS=h.div`
  display: grid;
  gap: 7px;
  padding: 13px 14px;
  border-radius: 10px;
  background: var(--surface-raised);
`,gS=h.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  color: var(--muted);
  font-size: 11px;
  strong {
    color: var(--text);
  }
`,vS=h.div`
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
`,yS=h.div`
  display: grid;
  gap: 8px;
`,jS=h.div`
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
`,bS=h.div`
  display: flex;
  gap: 8px;
  padding-top: 4px;
  border-top: 1px solid var(--border);
  @media (max-width: 520px) {
    flex-direction: column;
  }
`,wS=h.div`
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
`,_S=h.div`
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  gap: 5px;
`,Px=h.button`
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
`,kS=h.form`
  display: flex;
  flex: 1;
  gap: 8px;
  input {
    min-width: 0;
    flex: 1;
  }
`,SS=h(Ie)`
  margin-top: 18px;
`;function zx(){const r=new Date;return r.setFullYear(r.getFullYear()+1),[r.getFullYear(),String(r.getMonth()+1).padStart(2,"0"),String(r.getDate()).padStart(2,"0")].join("-")}function Zs(r){return r.slice(0,10)}function CS(r){return new Date(`${Zs(r)}T12:00:00`).toLocaleDateString("pt-BR")}function ES(r){const i=new Date(`${Zs(r)}T00:00:00`),s=new Date;return s.setHours(0,0,0,0),Math.ceil((i.getTime()-s.getTime())/864e5)}function $S(r){return r<0?`Atrasado há ${Math.abs(r)} ${Math.abs(r)===1?"dia":"dias"}`:r===0?"Prazo hoje":r===1?"Falta 1 dia":`Faltam ${r} dias`}function RS({goals:r,loading:i,saving:s,onCreate:l,onUpdate:c,onDelete:p,onAddStep:f,onToggleStep:m,onDeleteStep:x}){const[_,j]=v.useState(null),[w,S]=v.useState(!1),[z,O]=v.useState(""),[R,A]=v.useState(""),[C,$]=v.useState(zx),[G,I]=v.useState("pendente"),[J,Q]=v.useState([""]),[F,ae]=v.useState({}),[k,y]=v.useState([]),B=v.useMemo(()=>[...r].sort((b,re)=>Zs(b.target_date).localeCompare(Zs(re.target_date))),[r]),le=r.filter(b=>b.status==="concluido").length,je=r.filter(b=>b.status==="em_andamento").length;function we(){j(null),S(!1),O(""),A(""),$(zx()),I("pendente"),Q([""])}function Pe(){we(),S(!0)}function K(b){j(b),S(!0),O(b.title),A(b.description??""),$(Zs(b.target_date)),I(b.status),Q([])}function he(b,re){Q(ce=>ce.map((T,ie)=>ie===b?re:T))}async function oe(b){b.preventDefault();const re=J.map(T=>T.trim()).filter(Boolean);if(!z.trim()||!_&&!re.length)return;(_?await c(_.id,{title:z.trim(),description:R.trim()||null,target_date:C,status:G}):await l({title:z.trim(),description:R.trim()||null,target_date:C,status:G,steps:re.map((T,ie)=>({title:T,status:"pendente",step_order:ie+1}))}))&&we()}async function me(b,re){b.preventDefault();const ce=String(re.id),T=(F[ce]??"").trim();T&&await f(re.id,T)&&ae(ie=>({...ie,[ce]:""}))}async function H(b,re){const ce=String(re.id);y(T=>[...T,ce]);try{await m(b.id,re,re.status!=="concluido")}finally{y(T=>T.filter(ie=>ie!==ce))}}async function E(b,re){if(b.steps.length<=1||!window.confirm(`Remover a etapa “${re.title}” deste objetivo?`))return;const ce=String(re.id);y(T=>[...T,ce]);try{await x(b.id,re)}finally{y(T=>T.filter(ie=>ie!==ce))}}return e.jsxs(e.Fragment,{children:[e.jsxs(gr,{children:[e.jsxs("div",{children:[e.jsx("h1",{children:"Objetivos de vida"}),e.jsx("p",{children:"Transforme seus planos em etapas claras e acompanhe seu progresso."})]}),e.jsxs(ue,{$variant:"primary",onClick:w?we:Pe,children:[w?e.jsx(er,{}):e.jsx(ft,{}),w?"Fechar formulário":"Novo objetivo"]})]}),e.jsxs(oS,{children:[e.jsx(Mi,{size:20}),e.jsxs("span",{children:[e.jsx("strong",{children:"Comece pelo resultado que deseja alcançar."})," Defina uma data realista e divida o caminho em pequenas ações que você possa acompanhar."]})]}),w&&e.jsxs(lS,{children:[e.jsxs(Te,{children:[e.jsx(_p,{size:19,color:"var(--primary-strong)"}),_?"Editar objetivo":"Planejar um objetivo"]}),e.jsxs("form",{onSubmit:b=>{oe(b)},children:[e.jsxs(cS,{children:[e.jsxs(ne,{children:["Qual objetivo você quer alcançar? *",e.jsx("input",{autoFocus:!0,value:z,onChange:b=>O(b.target.value),maxLength:200,placeholder:"Ex.: Comprar minha casa",required:!0})]}),e.jsxs(ne,{children:["Data prevista *",e.jsx("input",{type:"date",value:C,onChange:b=>$(b.target.value),required:!0})]}),e.jsxs(ne,{children:["Status",e.jsxs(Rx,{value:G,onChange:b=>I(b.target.value),children:[e.jsx("option",{value:"pendente",children:"Pendente"}),e.jsx("option",{value:"em_andamento",children:"Em andamento"}),e.jsx("option",{value:"concluido",children:"Concluído"})]})]})]}),e.jsxs(ne,{children:["Por que esse objetivo é importante? ",e.jsx("small",{children:"(opcional)"}),e.jsx("textarea",{value:R,onChange:b=>A(b.target.value),maxLength:5e3,placeholder:"Descreva o que esse objetivo significa para você e como pretende chegar lá."})]}),!_&&e.jsxs(e.Fragment,{children:[e.jsx(Te,{style:{marginTop:8,marginBottom:6},children:"Etapas para chegar lá *"}),e.jsx(Sn,{children:"Escreva ações pequenas, concretas e que você possa concluir uma de cada vez."}),e.jsxs(nf,{style:{marginTop:12},children:[J.map((b,re)=>e.jsxs(af,{children:[e.jsx(sf,{children:re+1}),e.jsx(rc,{"aria-label":`Etapa ${re+1}`,value:b,maxLength:200,onChange:ce=>he(re,ce.target.value),placeholder:re===0?"Ex.: Pesquisar o valor de entrada e os custos":"Próxima ação",required:re===0}),e.jsx(bl,{type:"button",$variant:"danger","aria-label":`Remover etapa ${re+1}`,disabled:J.length<=1,onClick:()=>Q(ce=>ce.filter((T,ie)=>ie!==re)),children:e.jsx(mr,{})})]},re)),e.jsx("div",{children:e.jsxs(ue,{type:"button",onClick:()=>Q(b=>b.length<50?[...b,""]:b),disabled:J.length>=50,children:[e.jsx(ft,{}),"Adicionar etapa"]})})]})]}),_&&e.jsx(Sn,{children:"As etapas existentes continuam no objetivo. Você pode adicionar, concluir ou remover etapas na lista abaixo."}),e.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:9,flexWrap:"wrap",marginTop:16},children:[e.jsx(ue,{type:"button",onClick:we,children:"Cancelar"}),e.jsxs(ue,{type:"submit",$variant:"primary",disabled:s,children:[s?e.jsx(Je,{className:"spin"}):e.jsx(po,{}),s?"Salvando...":_?"Salvar alterações":"Salvar objetivo"]})]})]})]}),e.jsxs(PS,{"aria-label":"Resumo dos objetivos",children:[e.jsxs(ku,{children:[e.jsx(Su,{$tone:"blue",children:e.jsx(Mi,{})}),e.jsxs("div",{children:[e.jsx("span",{children:"Objetivos ativos"}),e.jsx("strong",{children:r.length-le})]})]}),e.jsxs(ku,{children:[e.jsx(Su,{$tone:"green",children:e.jsx(Fr,{})}),e.jsxs("div",{children:[e.jsx("span",{children:"Objetivos alcançados"}),e.jsx("strong",{children:le})]})]}),e.jsxs(ku,{children:[e.jsx(Su,{$tone:"blue",children:e.jsx(_p,{})}),e.jsxs("div",{children:[e.jsx("span",{children:"Em andamento"}),e.jsx("strong",{children:je})]})]})]}),i?e.jsxs(Ve,{children:[e.jsx(Je,{}),e.jsx("p",{children:"Carregando objetivos..."})]}):B.length===0?e.jsx(SS,{children:e.jsxs(Ve,{children:[e.jsx(Mi,{size:34}),e.jsx("h3",{children:"Seus objetivos começam aqui"}),e.jsx("p",{children:"Registre um objetivo, escolha uma data prevista e monte um plano de ação para alcançá-lo."}),e.jsx("div",{style:{marginTop:16},children:e.jsxs(ue,{$variant:"primary",onClick:Pe,children:[e.jsx(ft,{}),"Planejar meu primeiro objetivo"]})})]})}):e.jsx(dS,{children:B.map(b=>{const re=[...b.steps].sort((U,de)=>U.step_order-de.step_order),ce=re.filter(U=>U.status==="concluido").length,T=re.length?Math.round(ce/re.length*100):0,ie=b.status==="concluido",ve=ES(b.target_date),ye=String(b.id);return e.jsxs(uS,{children:[e.jsxs(pS,{children:[e.jsxs(fS,{children:[e.jsx(Mi,{size:20}),e.jsxs("div",{children:[e.jsx("h2",{children:b.title}),b.description&&e.jsx("p",{children:b.description})]})]}),e.jsxs(hS,{children:[e.jsxs(bl,{onClick:()=>K(b),children:[e.jsx(Lr,{}),"Editar"]}),e.jsxs(bl,{$variant:"danger",onClick:()=>{window.confirm(`Excluir o objetivo “${b.title}” e todas as etapas?`)&&p(b)},children:[e.jsx(mr,{}),"Excluir"]})]})]}),e.jsxs(mS,{children:[e.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:6},children:[e.jsx(He,{}),"Previsto para ",CS(b.target_date)]}),e.jsxs(Rx,{"aria-label":`Status do objetivo ${b.title}`,value:b.status,onChange:U=>{c(b.id,{status:U.target.value})},children:[e.jsx("option",{value:"pendente",children:"Pendente"}),e.jsx("option",{value:"em_andamento",children:"Em andamento"}),e.jsx("option",{value:"concluido",children:"Concluído"})]}),!ie&&ve<0&&e.jsx(xr,{$done:!1,children:"Prazo vencido"}),!ie&&ve>=0&&e.jsx("span",{children:$S(ve)})]}),e.jsxs(xS,{children:[e.jsxs(gS,{children:[e.jsx("span",{children:"Progresso do plano"}),e.jsxs("strong",{children:[ce," de ",re.length," etapas ·"," ",T,"%"]})]}),e.jsx(vS,{"aria-label":`${T}% concluído`,children:e.jsx("div",{style:{width:`${T}%`}})})]}),e.jsxs(jS,{children:[e.jsx("span",{children:"Plano de ação"}),e.jsxs("small",{children:[re.length," ",re.length===1?"etapa":"etapas"]})]}),e.jsx(yS,{"aria-label":`Etapas para alcançar ${b.title}`,children:re.map(U=>{const de=k.includes(String(U.id)),st=U.status==="concluido";return e.jsxs(wS,{$completed:st,children:[st?e.jsx(Fr,{size:17}):e.jsx(m_,{size:17}),e.jsx("span",{children:U.title}),e.jsxs(_S,{children:[e.jsx(Px,{type:"button","aria-label":st?`Reabrir etapa ${U.title}`:`Concluir etapa ${U.title}`,title:st?"Reabrir etapa":"Marcar como concluída",disabled:de,onClick:()=>{H(b,U)},children:de?e.jsx(Je,{className:"spin"}):e.jsx(Dr,{})}),e.jsx(Px,{type:"button","aria-label":`Remover etapa ${U.title}`,title:"Remover etapa",disabled:de||re.length<=1,onClick:()=>{E(b,U)},children:e.jsx(er,{})})]})]},U.id)})}),e.jsx(bS,{children:e.jsxs(kS,{onSubmit:U=>{me(U,b)},children:[e.jsx(rc,{"aria-label":`Nova etapa para ${b.title}`,value:F[ye]??"",maxLength:200,placeholder:"Adicionar uma próxima ação...",onChange:U=>ae(de=>({...de,[ye]:U.target.value}))}),e.jsxs(bl,{type:"submit",$variant:"primary",children:[e.jsx(ft,{}),"Adicionar etapa"]})]})})]},b.id)})})]})}const PS=h.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  margin-bottom: 20px;
  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`,ku=h.div`
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
`,Su=h.span`
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
`,zS=h.div`
  display: grid;
  grid-template-columns: minmax(260px, .7fr) minmax(0, 1.5fr);
  align-items: start;
  gap: 18px;
  @media (max-width: 850px) { grid-template-columns: 1fr; }
`,NS=h.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  margin-bottom: 18px;
  @media (max-width: 620px) { grid-template-columns: 1fr; }
`,Cu=h.div`
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
`,Nx=h.div`
  height: 6px;
  margin-top: 9px;
  overflow: hidden;
  border-radius: 999px;
  background: var(--border);
  div { height: 100%; border-radius: inherit; background: linear-gradient(90deg, var(--primary), var(--success)); }
`,Mx=h.h2`
  display: flex;
  align-items: center;
  gap: 9px;
  margin: 0 0 15px;
  color: var(--text);
  font-size: 16px;
  svg { color: var(--primary); }
`,MS=h.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 15px;
  @media (max-width: 520px) { flex-direction: column; }
`,TS=h.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  color: var(--muted);
  font-size: 11px;
`,Tx=h.span`
  display: inline-flex;
  align-items: center;
  padding: 5px 8px;
  border-radius: 999px;
  background: var(--surface-raised);
`,AS=h.div`
  display: grid;
  gap: 9px;
`,Ax=h.button`
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
`,Dx=h.span`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  font-size: 13px;
  font-weight: 750;
  text-transform: capitalize;
`,Fx=h.span`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  color: var(--muted);
  font-size: 11px;
`,DS=h.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-top: 14px;
  color: var(--muted);
  font-size: 11px;
`,FS=h.div`
  display: grid;
  gap: 8px;
`,LS=h.div`
  display: grid;
  grid-template-columns: 20px minmax(0, 1fr) auto;
  align-items: start;
  gap: 9px;
  padding: 11px 12px;
  border: 1px solid ${({$completed:r})=>r?"var(--success-border)":"var(--border)"};
  border-radius: 9px;
  background: ${({$completed:r})=>r?"#f5fbf7":"var(--surface-raised)"};
  > svg { margin-top: 1px; color: ${({$completed:r})=>r?"var(--success)":"var(--text-subtle)"}; }
`,OS=h.div`
  min-width: 0;
  strong { display: block; color: var(--text); font-size: 12px; line-height: 1.45; overflow-wrap: anywhere; }
  span { display: block; margin-top: 3px; color: var(--muted); font-size: 11px; }
`,IS=h.time`
  color: var(--muted);
  font-size: 11px;
  white-space: nowrap;
`;function Mr(r){return r.slice(0,10)}function Aa(r){return new Date(`${Mr(r)}T12:00:00`).toLocaleDateString("pt-BR",{weekday:"long",day:"numeric",month:"long",year:"numeric"})}function BS(r){return r?new Date(r).toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"}):""}function Eu(r,i){return i>0?Math.round(r/i*100):0}function f1({mode:r,days:i,periods:s,selectedDay:l,selectedPeriod:c,selectedDate:p,dayDetails:f,pagination:m,loading:x,detailLoading:_,referenceDate:j,onModeChange:w,onPeriodSearch:S,onSelectDate:z,onSelectPeriod:O,onPageChange:R}){const[A,C]=v.useState(()=>j??Mr(new Date().toISOString())),$=v.useMemo(()=>f.map(k=>({...k,items:k.items})),[f]);v.useEffect(()=>{j&&C(j)},[j]);function G(k){k.preventDefault(),A&&S(A)}const I=r==="daily"?l:c,J=(I==null?void 0:I.completed_items)??0,Q=(I==null?void 0:I.pending_items)??0,F=J+Q,ae=(I==null?void 0:I.completion_percentage)==null?Eu(J,F):Math.round(I.completion_percentage);return e.jsxs(e.Fragment,{children:[e.jsx(gr,{children:e.jsxs("div",{children:[e.jsxs("h1",{children:["Histórico ",r==="week"?"semanal":r==="month"?"mensal":"diário"]}),e.jsx("p",{children:"Consulte o que foi concluído e o que ficou pendente em cada período."})]})}),e.jsx(Ie,{style:{marginBottom:18},children:e.jsxs("div",{style:{display:"flex",alignItems:"flex-end",flexWrap:"wrap",gap:12},children:[e.jsxs(ne,{style:{minWidth:220,marginBottom:0},children:["Visualização",e.jsxs(Or,{value:r,onChange:k=>w(k.target.value),children:[e.jsx("option",{value:"daily",children:"Por dia"}),e.jsx("option",{value:"week",children:"Por semana"}),e.jsx("option",{value:"month",children:"Por mês"})]})]}),e.jsxs("form",{onSubmit:G,style:{display:"flex",alignItems:"flex-end",gap:10,flexWrap:"wrap"},children:[e.jsxs(ne,{style:{minWidth:200,marginBottom:0},children:[r==="daily"?"Data do dia":"Data da semana ou mês",e.jsx("input",{type:"date",value:A,onChange:k=>C(k.target.value),required:!0})]}),e.jsx(ue,{type:"submit",$variant:"primary",disabled:x,children:"Consultar período"}),j&&e.jsx(ue,{type:"button",disabled:x,onClick:()=>S(),children:"Limpar data"})]})]})}),e.jsxs(NS,{"aria-label":"Resumo do histórico",children:[e.jsxs(Cu,{children:[e.jsx("span",{children:e.jsx(He,{})}),e.jsxs("div",{children:[e.jsx("small",{children:r==="daily"?"Dia selecionado":r==="week"?"Semana selecionada":"Mês selecionado"}),e.jsx("strong",{children:I?F:"—"})]})]}),e.jsxs(Cu,{children:[e.jsx("span",{children:e.jsx(Fr,{})}),e.jsxs("div",{children:[e.jsx("small",{children:"Itens concluídos"}),e.jsx("strong",{children:I?J:"—"})]})]}),e.jsxs(Cu,{children:[e.jsx("span",{children:e.jsx(Wl,{})}),e.jsxs("div",{children:[e.jsx("small",{children:"Progresso"}),e.jsx("strong",{children:I?`${ae}%`:"—"})]})]})]}),e.jsxs(zS,{children:[e.jsxs(Ie,{children:[e.jsxs(Mx,{children:[e.jsx(Kr,{size:18}),r==="week"?"Dias da semana":r==="month"?"Dias do mês":"Dias anteriores"]}),x?e.jsxs(Ve,{children:[e.jsx(Je,{}),e.jsx("p",{children:"Carregando histórico..."})]}):(r==="daily"?i.length===0:s.length===0)?e.jsxs(Ve,{children:[e.jsx(b_,{size:30}),e.jsx("h3",{children:r==="daily"?"Sem histórico anterior":"Nenhum período encontrado"}),e.jsx("p",{children:r==="daily"?"Os registros diários anteriores aparecerão aqui.":"Os períodos com registros históricos aparecerão aqui."})]}):e.jsxs(e.Fragment,{children:[e.jsx(AS,{children:r==="daily"?i.map(k=>e.jsxs(Ax,{type:"button",$active:Mr(p)===Mr(k.date),"aria-pressed":Mr(p)===Mr(k.date),onClick:()=>z(Mr(k.date)),children:[e.jsxs(Dx,{children:[e.jsx("span",{children:Aa(k.date)}),e.jsx(He,{size:15})]}),e.jsxs(Fx,{children:[e.jsxs("span",{children:[k.completed_items," concluídas · ",k.pending_items," pendentes"]}),e.jsx("span",{children:k.completion_percentage==null?"—":`${Math.round(k.completion_percentage)}%`})]}),e.jsx(Nx,{children:e.jsx("div",{style:{width:`${k.completion_percentage==null?Eu(k.completed_items,k.completed_items+k.pending_items):Math.round(k.completion_percentage)}%`}})})]},Mr(k.date))):s.map(k=>e.jsxs(Ax,{type:"button",$active:Mr((c==null?void 0:c.start_date)??"")===Mr(k.start_date),"aria-pressed":Mr((c==null?void 0:c.start_date)??"")===Mr(k.start_date),onClick:()=>O(k),children:[e.jsxs(Dx,{children:[e.jsxs("span",{children:[r==="week"?"Semana":"Mês",": ",Aa(k.start_date)," – ",Aa(k.end_date)]}),e.jsx(He,{size:15})]}),e.jsxs(Fx,{children:[e.jsxs("span",{children:[k.completed_items," concluídas · ",k.pending_items," pendentes"]}),e.jsx("span",{children:k.completion_percentage==null?"—":`${Math.round(k.completion_percentage)}%`})]}),e.jsx(Nx,{children:e.jsx("div",{style:{width:`${k.completion_percentage==null?Eu(k.completed_items,k.completed_items+k.pending_items):Math.round(k.completion_percentage)}%`}})})]},Mr(k.start_date)))}),e.jsxs(DS,{children:[e.jsxs("span",{children:[m.total," ",r==="daily"?m.total===1?"dia":"dias":m.total===1?"período":"períodos"," · Página ",m.page," de ",m.totalPages||1]}),e.jsxs("div",{style:{display:"flex",gap:6},children:[e.jsx(ue,{type:"button","aria-label":"Página anterior do histórico",disabled:!m.hasPreviousPage||x,onClick:()=>R(m.page-1),children:e.jsx(io,{})}),e.jsx(ue,{type:"button","aria-label":"Próxima página do histórico",disabled:!m.hasNextPage||x,onClick:()=>R(m.page+1),children:e.jsx(Oi,{})})]})]})]})]}),e.jsxs(Ie,{children:[e.jsxs(MS,{children:[e.jsxs(Mx,{children:[e.jsx(Gt,{size:18}),c?`${r==="week"?"Semana":"Mês"}: ${Aa(c.start_date)} – ${Aa(c.end_date)}`:p?Aa(p):"Detalhes do dia"]}),I&&e.jsxs(TS,{children:[e.jsxs(Tx,{children:[J," concluídas"]}),e.jsxs(Tx,{children:[Q," pendentes"]})]})]}),_?e.jsxs(Ve,{children:[e.jsx(Je,{}),e.jsx("p",{children:"Carregando atividades do dia..."})]}):p?$.length===0?e.jsxs(Ve,{children:[e.jsx(Fr,{size:30}),e.jsx("h3",{children:"Nenhuma atividade registrada"}),e.jsx("p",{children:"Não foram encontrados itens para este dia."})]}):e.jsx("div",{style:{display:"grid",gap:16},children:$.map(k=>e.jsxs("section",{"aria-label":k.task_title,children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:10,marginBottom:8},children:[e.jsx("strong",{style:{color:"var(--text)",fontSize:13},children:k.task_title}),e.jsxs(xr,{$done:k.completed_items===k.total_items&&k.total_items>0,children:[k.completed_items,"/",k.total_items," concluídas"]})]}),e.jsx(FS,{children:k.items.map(y=>e.jsxs(LS,{$completed:y.is_completed,children:[y.is_completed?e.jsx(Fr,{size:17}):e.jsx("span",{"aria-hidden":"true",children:"•"}),e.jsxs(OS,{children:[e.jsx("strong",{children:y.title}),e.jsxs("span",{children:[y.is_completed?"Concluída":"Pendente",y.record_date?` · ${Aa(y.record_date)}`:""]})]}),y.completed_at&&e.jsx(IS,{children:BS(y.completed_at)})]},y.id))})]},String(k.task_id)))}):e.jsxs(Ve,{children:[e.jsx(He,{size:30}),e.jsx("p",{children:"Selecione um dia para ver as atividades."})]})]})]})]})}const $u=[{id:"monthly",label:"Mensal",price:29.9,currency:"BRL",interval:"month",description:"Cobrado todo mês · cancele quando quiser"},{id:"annual",label:"Anual",price:299.9,currency:"BRL",interval:"year",description:"Melhor custo · pagamento único no ano"}],Ds=new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}),Lx=h.main`
  position: relative;
  display: grid;
  min-height: 100vh;
  place-items: center;
  padding: 32px 18px;
  background:
    radial-gradient(ellipse at 16% 14%, rgba(37, 99, 235, .1), transparent 38%),
    radial-gradient(ellipse at 88% 90%, rgba(2, 132, 199, .06), transparent 35%),
    var(--page-bg);
`,Ox=h.div`
  position: absolute;
  top: 20px;
  right: 20px;
`,Ix=h.section`
  width: min(100%, ${({$wide:r})=>r?"560px":"440px"});
  padding: 38px;
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  background: var(--surface);
  box-shadow: 0 24px 70px var(--shadow);
  transition: width .2s ease;
  @media (max-width: 520px) { padding: 28px 22px; border-radius: 18px; }
`,Bx=h.div`
  display: flex;
  align-items: center;
  gap: 11px;
  margin-bottom: 34px;
  color: var(--text);
  font-size: 18px;
  font-weight: 800;
  letter-spacing: -.3px;
`,qx=h.span`
  display: grid;
  width: 42px;
  height: 42px;
  place-items: center;
  border-radius: 13px;
  color: var(--primary-contrast);
  background: var(--primary);
  box-shadow: 0 7px 16px var(--shadow);
  svg { width: 23px; height: 23px; }
`,Ux=h.div`
  margin-bottom: 26px;
  h1 { margin: 0 0 8px; color: var(--text); font-size: 27px; letter-spacing: -.7px; }
  p { margin: 0; color: var(--muted); font-size: 14px; line-height: 1.6; }
`,qS=h.form`
  display: grid;
  gap: 18px;
`,cn=h.label`
  display: grid;
  gap: 8px;
  color: var(--text);
  font-size: 14px;
  font-weight: 700;
`,Ru=h.span`
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
`,US=h.button`
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
`,HS=h.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  color: var(--muted);
  font-size: 12px;
`,VS=h.label`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  input { width: 15px; height: 15px; margin: 0; accent-color: var(--primary); }
`,Hx=h.fieldset`
  margin: 0;
  padding: 0;
  border: 0;
  legend {
    margin-bottom: 10px;
    color: var(--text);
    font-size: 13px;
    font-weight: 700;
  }
`,Vx=h.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  @media (max-width: 520px) { grid-template-columns: 1fr; }
`,h1=h.label`
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
`,WS=h.span`
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
`,Wx=h(h1)`
  strong {
    justify-content: flex-start;
    gap: 8px;
    svg { width: 16px; height: 16px; color: var(--primary-strong); }
  }
`,GS=h.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  padding: 14px;
  border: 1px solid var(--border);
  border-radius: 14px;
  background: var(--surface-raised);
  ${cn}:first-child, ${cn}:nth-child(2) { grid-column: 1 / -1; }
  @media (max-width: 520px) {
    grid-template-columns: 1fr;
    ${cn} { grid-column: auto; }
  }
`,Fs=h.input`
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
`,QS=h.p`
  margin: 0;
  padding: 12px 14px;
  border: 1px solid color-mix(in srgb, var(--primary) 28%, var(--border));
  border-radius: 12px;
  color: var(--muted);
  background: color-mix(in srgb, var(--primary) 8%, var(--surface));
  font-size: 12px;
  line-height: 1.55;
`,KS=h.div`
  display: grid;
  gap: 12px;
  padding: 16px;
  border: 1px solid var(--border);
  border-radius: 14px;
  background: var(--surface-raised);
  h2 { margin: 0; color: var(--text); font-size: 18px; }
  p { margin: 0; color: var(--muted); font-size: 13px; line-height: 1.55; }
  strong { color: var(--text); }
`,Gx=h(ue)`
  width: 100%;
  min-height: 48px;
  margin-top: 3px;
  border-radius: 10px;
  background: var(--primary);
  color: var(--primary-contrast);
  font-size: 14px;
  &:hover:not(:disabled) { background: var(--primary-strong); }
`,YS=h.p`
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
`;function Qs(r){return r.replace(/\D/g,"")}function XS(r){return Qs(r).slice(0,16).replace(/(\d{4})(?=\d)/g,"$1 ").trim()}function Qx(r){return r.interval==="year"||r.id==="annual"?"/ano":"/mês"}function JS({onLogin:r,onRegister:i}){const[s,l]=v.useState("login"),[c,p]=v.useState(""),[f,m]=v.useState(""),[x,_]=v.useState(""),[j,w]=v.useState($u),[S,z]=v.useState({pix:!0,card:!0}),[O,R]=v.useState("annual"),[A,C]=v.useState("pix"),[$,G]=v.useState(""),[I,J]=v.useState(""),[Q,F]=v.useState(""),[ae,k]=v.useState(""),[y,B]=v.useState(""),[le,je]=v.useState(!1),[we,Pe]=v.useState(!1),[K,he]=v.useState(""),[oe,me]=v.useState(null);v.useEffect(()=>{let b=!0;return Iw().then(re=>{var T,ie;if(!b)return;const ce=(T=re.plans)!=null&&T.length?re.plans:$u;w(ce),re.payment_methods&&z(re.payment_methods),ce.some(ve=>ve.id===O)||R(((ie=ce[0])==null?void 0:ie.id)??"annual"),re.payment_methods&&!re.payment_methods.pix&&re.payment_methods.card&&C("card")}).catch(()=>{}),()=>{b=!1}},[]);const H=v.useMemo(()=>j.find(b=>b.id===O)??j[0]??$u[1],[O,j]);async function E(b){var re,ce;b.preventDefault(),he(""),Pe(!0);try{const T={email:c.trim(),password:f};if(s==="register"){if(f.trim().length<8)throw new Error("A senha deve ter no mínimo 8 caracteres.");if(T.name=x.trim(),T.plan=O,T.payment_method=A,A==="card"){const ve=Qs(I),ye=Number(Q),U=Number(ae);if(ve.length<13)throw new Error("Informe um número de cartão válido.");if(!$.trim())throw new Error("Informe o nome impresso no cartão.");if(!Number.isInteger(ye)||ye<1||ye>12)throw new Error("Informe um mês de validade entre 1 e 12.");const de=U>=25&&U<=99||U>=2025&&U<=2099;if(!Number.isInteger(U)||!de)throw new Error("Informe um ano de validade válido (ex.: 30 ou 2030).");if(!/^\d{3,4}$/.test(y))throw new Error("Informe o CVV com 3 ou 4 dígitos.");T.card={holder_name:$.trim(),number:ve,exp_month:ye,exp_year:U,cvv:y}}const ie=await i(T);me(ie)}else await r(T)}catch(T){he((T==null?void 0:T.message)||((ce=(re=T==null?void 0:T.response)==null?void 0:re.data)==null?void 0:ce.error)||(s==="register"?"Não foi possível criar sua conta. Verifique os dados informados.":"E-mail ou senha inválidos."))}finally{Pe(!1)}}if(oe){const b=oe.payment,re=b.pix;return e.jsxs(Lx,{children:[e.jsx(Ox,{children:e.jsx($p,{})}),e.jsxs(Ix,{$wide:!0,children:[e.jsxs(Bx,{children:[e.jsx(qx,{children:e.jsx(Ep,{"aria-hidden":"true"})}),"Rumo"]}),e.jsxs(Ux,{children:[e.jsx("h1",{children:"Conta criada"}),e.jsx("p",{children:"Agora falta confirmar o pagamento da assinatura para liberar o acesso completo."})]}),e.jsxs(KS,{children:[e.jsx("h2",{children:b.payment_method==="pix"?"Pagamento Pix pendente":"Pagamento no cartão pendente"}),e.jsxs("p",{children:["Plano ",e.jsx("strong",{children:oe.subscription.plan==="annual"?"Anual":"Mensal"})," · ",e.jsx("strong",{children:Ds.format(Number(b.amount)||0)})]}),e.jsxs("p",{children:["Status: ",e.jsx("strong",{children:b.status})]}),b.payment_method==="pix"&&e.jsx("p",{children:re!=null&&re.ready&&re.copy_paste?`Pix copia e cola: ${re.copy_paste}`:(re==null?void 0:re.message)||"O Pix ainda será gerado pelo gateway de pagamento."}),b.payment_method==="card"&&b.card&&e.jsxs("p",{children:["Cartão ",b.card.brand||""," final ",b.card.last4||"****",b.card.holder_name?` · ${b.card.holder_name}`:""]}),oe.next_step&&e.jsxs("p",{children:["Próximo passo: ",e.jsx("strong",{children:oe.next_step})]})]}),e.jsx(Gx,{type:"button",$variant:"primary",onClick:()=>{me(null),l("login"),m("")},children:"Ir para o login"})]})]})}return e.jsxs(Lx,{children:[e.jsx(Ox,{children:e.jsx($p,{})}),e.jsxs(Ix,{$wide:s==="register",children:[e.jsxs(Bx,{children:[e.jsx(qx,{children:e.jsx(Ep,{"aria-hidden":"true"})}),"Rumo"]}),e.jsxs(Ux,{children:[e.jsx("h1",{children:s==="login"?"Bem-vindo de volta":"Crie sua conta"}),e.jsx("p",{children:s==="login"?"Entre com seus dados para acessar seu espaço de produtividade.":"Escolha o plano, o pagamento e comece a organizar tarefas, estudos e finanças."})]}),K&&e.jsx(a1,{variant:"error",title:"Não foi possível continuar",message:K,onDismiss:()=>he("")}),e.jsxs(qS,{onSubmit:b=>{E(b)},children:[s==="register"&&e.jsxs(Hx,{children:[e.jsx("legend",{children:"Plano de assinatura"}),e.jsx(Vx,{children:j.map(b=>{const re=O===b.id;return e.jsxs(h1,{$active:re,children:[e.jsx("input",{type:"radio",name:"subscription-plan",value:b.id,checked:re,onChange:()=>R(b.id)}),e.jsxs("strong",{children:[b.label,b.id==="annual"&&e.jsxs(WS,{children:[e.jsx(Dr,{}),"Melhor custo"]})]}),e.jsxs("em",{children:[Ds.format(b.price),e.jsx("span",{children:Qx(b)})]}),e.jsx("p",{children:b.description||(b.id==="annual"?"Pagamento único no ano":"Cobrado todo mês · cancele quando quiser")})]},b.id)})})]}),s==="register"&&e.jsxs(Hx,{children:[e.jsx("legend",{children:"Método de pagamento"}),e.jsxs(Vx,{children:[S.pix&&e.jsxs(Wx,{$active:A==="pix",children:[e.jsx("input",{type:"radio",name:"payment-method",value:"pix",checked:A==="pix",onChange:()=>C("pix")}),e.jsxs("strong",{children:[e.jsx(P_,{}),"Pix"]}),e.jsx("p",{children:"Pagamento instantâneo. O QR Code é gerado após confirmar o cadastro."})]}),S.card&&e.jsxs(Wx,{$active:A==="card",children:[e.jsx("input",{type:"radio",name:"payment-method",value:"card",checked:A==="card",onChange:()=>C("card")}),e.jsxs("strong",{children:[e.jsx(zi,{}),"Cartão"]}),e.jsx("p",{children:"Crédito. Número e CVV não ficam salvos no servidor."})]})]})]}),s==="register"&&A==="pix"&&e.jsxs(QS,{children:["Ao criar a conta no plano ",H.label.toLowerCase()," (",Ds.format(H.price),Qx(H),"), a assinatura fica pendente até a confirmação do Pix."]}),s==="register"&&A==="card"&&e.jsxs(GS,{children:[e.jsxs(cn,{children:["Nome no cartão",e.jsx(Fs,{value:$,onChange:b=>G(b.target.value),autoComplete:"cc-name",placeholder:"Como está impresso",required:!0})]}),e.jsxs(cn,{children:["Número do cartão",e.jsx(Fs,{value:I,onChange:b=>J(XS(b.target.value)),inputMode:"numeric",autoComplete:"cc-number",placeholder:"0000 0000 0000 0000",required:!0})]}),e.jsxs(cn,{children:["Mês",e.jsx(Fs,{value:Q,onChange:b=>F(Qs(b.target.value).slice(0,2)),inputMode:"numeric",autoComplete:"cc-exp-month",placeholder:"MM",required:!0})]}),e.jsxs(cn,{children:["Ano",e.jsx(Fs,{value:ae,onChange:b=>k(Qs(b.target.value).slice(0,4)),inputMode:"numeric",autoComplete:"cc-exp-year",placeholder:"30 ou 2030",required:!0})]}),e.jsxs(cn,{children:["CVV",e.jsx(Fs,{value:y,onChange:b=>B(Qs(b.target.value).slice(0,4)),inputMode:"numeric",autoComplete:"cc-csc",placeholder:"000",required:!0})]})]}),s==="register"&&e.jsxs(cn,{children:["Nome",e.jsxs(Ru,{children:[e.jsx(O_,{"aria-hidden":"true"}),e.jsx("input",{type:"text",autoComplete:"name",placeholder:"Seu nome",value:x,onChange:b=>_(b.target.value),required:!0})]})]}),e.jsxs(cn,{children:["E-mail",e.jsxs(Ru,{children:[e.jsx($_,{"aria-hidden":"true"}),e.jsx("input",{type:"email",autoComplete:"email",placeholder:"voce@exemplo.com",value:c,onChange:b=>p(b.target.value),required:!0})]})]}),e.jsxs(cn,{children:["Senha",e.jsxs(Ru,{children:[e.jsx(C_,{"aria-hidden":"true"}),e.jsx("input",{type:le?"text":"password",autoComplete:s==="register"?"new-password":"current-password",placeholder:s==="register"?"Mínimo de 8 caracteres":"Digite sua senha",minLength:s==="register"?8:void 0,value:f,onChange:b=>m(b.target.value),required:!0}),e.jsx(US,{type:"button",onClick:()=>je(b=>!b),"aria-label":le?"Ocultar senha":"Mostrar senha","aria-pressed":le,children:le?e.jsx(x_,{"aria-hidden":"true"}):e.jsx(xc,{"aria-hidden":"true"})})]})]}),s==="login"&&e.jsxs(HS,{children:[e.jsxs(VS,{children:[e.jsx("input",{type:"checkbox"}),"Manter conectado"]}),e.jsx("span",{children:"Proteja suas credenciais"})]}),e.jsx(Gx,{type:"submit",$variant:"primary",disabled:we,children:we?"Aguarde...":s==="login"?"Entrar":A==="pix"?`Continuar com Pix · ${Ds.format(H.price)}`:`Pagar com cartão · ${Ds.format(H.price)}`})]}),e.jsxs(YS,{children:[s==="login"?"Ainda não tem conta?":"Já possui uma conta?"," ",e.jsx("button",{type:"button",onClick:()=>{l(s==="login"?"register":"login"),he(""),me(null)},children:s==="login"?"Cadastre-se":"Entrar"})]})]})]})}const ZS=r=>r==null?void 0:r.trim().toLocaleLowerCase("pt-BR");function bc(r){const i=ZS(r);if(i==="dia"||i==="diaria"||i==="day"||i==="daily")return"diaria";if(i==="semana"||i==="semanal"||i==="week"||i==="weekly")return"semana";if(i==="mes"||i==="mês"||i==="mensal"||i==="month"||i==="monthly")return"mensal"}function eC(r){return bc(r.frequencia)==="diaria"}function tC(r){return bc(r.frequencia)==="semana"}function rC(r){return bc(r.frequencia)==="mensal"}const nC=h.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
  margin-bottom: 22px;
  @media (max-width: 620px) { gap: 9px; }
  @media (max-width: 420px) { grid-template-columns: 1fr; }
`,Pu=h.div`
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
`,zu=h.span`
  display: grid;
  width: 42px;
  height: 42px;
  place-items: center;
  border-radius: 12px;
  color: ${({$tone:r})=>r==="green"?"var(--success)":r==="gray"?"var(--muted)":"var(--primary-strong)"};
  background: ${({$tone:r})=>r==="green"?"var(--success-soft)":r==="gray"?"var(--surface-raised)":"color-mix(in srgb, var(--primary) 16%, var(--surface))"};
  svg { width: 19px; height: 19px; }
  @media (max-width: 620px) { width: 36px; height: 36px; }
`,aC=h.div`
  display: grid;
  gap: 13px;
`,iC=h.article`
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
`,sC=h.div`
  display: flex;
  min-width: 0;
  align-items: flex-start;
  justify-content: space-between;
  gap: 14px;
  @media (max-width: 520px) { flex-direction: column; }
`,oC=h.div`
  min-width: 0;
  h3 { margin: 0; color: var(--text); font-size: 15px; font-weight: 750; line-height: 1.45; overflow-wrap: anywhere; }
  p { margin: 4px 0 0; color: var(--muted); font-size: 12px; line-height: 1.5; overflow-wrap: anywhere; }
`,lC=h.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px 16px;
  color: var(--muted);
  font-size: 11px;
`,wl=h.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  svg { width: 14px; height: 14px; color: var(--text-subtle); }
`,cC=h.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  color: var(--muted);
  font-size: 11px;
  strong { color: var(--text); font-size: 12px; }
`,dC=h.div`
  height: 6px;
  overflow: hidden;
  border-radius: 999px;
  background: var(--border);
  div { height: 100%; border-radius: inherit; background: var(--primary); transition: width .2s ease; }
`,uC=h.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 240px), 1fr));
  gap: 9px;
`,pC=h.label`
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
`,fC=h.span`
  min-width: 0;
  flex: 1;
  color: ${({$completed:r})=>r?"var(--muted)":"var(--text)"};
  font-size: 12px;
  line-height: 1.45;
  overflow-wrap: anywhere;
  text-decoration: ${({$completed:r})=>r?"line-through":"none"};
`,hC=h.div`
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
`,Kx=r=>r?new Date(`${r.slice(0,10)}T12:00:00`).toLocaleDateString("pt-BR"):"Sem data final";function m1({tasks:r,dailyRecords:i,loading:s,onNavigate:l,onToggleItem:c,onDeactivate:p}){const f=new Date().toLocaleDateString("pt-BR",{month:"long",year:"numeric"}),m=v.useMemo(()=>r.filter(z=>z.is_active&&rC(z)),[r]),x=v.useMemo(()=>m.map(z=>({task:z,record:i.find(O=>String(O.task_id)===String(z.id))})),[m,i]),_=x.flatMap(({record:z})=>(z==null?void 0:z.items)??[]),j=_.filter(z=>z.is_completed).length,w=_.length,S=w?Math.round(j/w*100):0;return e.jsxs(e.Fragment,{children:[e.jsxs(gr,{children:[e.jsxs("div",{children:[e.jsx("h1",{children:"Tarefas do mês"}),e.jsx("p",{children:f.charAt(0).toLocaleUpperCase("pt-BR")+f.slice(1)})]}),e.jsxs(ue,{$variant:"primary",onClick:()=>l("/tasks/new"),children:[e.jsx(ft,{}),"Nova tarefa"]})]}),e.jsxs(nC,{"aria-label":"Resumo do mês",children:[e.jsxs(Pu,{children:[e.jsx(zu,{$tone:"blue",children:e.jsx(He,{})}),e.jsxs("div",{children:[e.jsx("span",{children:"Tarefas mensais"}),e.jsx("strong",{children:m.length})]})]}),e.jsxs(Pu,{children:[e.jsx(zu,{$tone:"green",children:e.jsx(Gt,{})}),e.jsxs("div",{children:[e.jsx("span",{children:"Itens concluídos hoje"}),e.jsxs("strong",{children:[j," / ",w]})]})]}),e.jsxs(Pu,{children:[e.jsx(zu,{$tone:"gray",children:e.jsx(Fr,{})}),e.jsxs("div",{children:[e.jsx("span",{children:"Progresso de hoje"}),e.jsxs("strong",{children:[S,"%"]})]})]})]}),e.jsxs(hC,{children:[e.jsx(Kr,{size:16}),e.jsx("span",{children:"Marque as atividades mensais nesta tela. As marcações usam o registro diário atual e ficam sincronizadas com as abas Hoje e Semana."})]}),s?e.jsxs(Ve,{children:[e.jsx(Je,{}),e.jsx("p",{children:"Carregando tarefas..."})]}):m.length===0?e.jsx(Ie,{children:e.jsxs(Ve,{children:[e.jsx(He,{size:32}),e.jsx("h3",{children:r.length===0?"Nenhuma tarefa cadastrada":"Nenhuma tarefa do tipo mês"}),e.jsx("p",{children:r.length===0?"Crie uma tarefa mensal para organizar seus objetivos.":"Não há tarefas mensais ativas. As tarefas diárias e semanais ficam nas abas Hoje e Semana."}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:9,marginTop:16},children:[e.jsxs(ue,{$variant:"primary",onClick:()=>l("/tasks/new"),children:[e.jsx(ft,{}),"Criar tarefa"]}),e.jsx(ue,{onClick:()=>l("/week"),children:"Ver tarefas da semana"})]})]})}):e.jsx(aC,{children:x.map(({task:z,record:O})=>{const R=(O==null?void 0:O.items)??[],A=R.filter($=>$.is_completed).length,C=R.length?Math.round(A/R.length*100):0;return e.jsxs(iC,{children:[e.jsxs(sC,{children:[e.jsxs(oC,{children:[e.jsx("h3",{children:z.title}),e.jsx("p",{children:z.description||"Sem descrição"})]}),e.jsx(ue,{onClick:()=>l(`/tasks/${encodeURIComponent(String(z.id))}`),children:"Editar tarefa"})]}),e.jsxs(lC,{children:[e.jsxs(wl,{children:[e.jsx(He,{}),"Início ",Kx(z.start_date)]}),e.jsxs(wl,{children:[e.jsx(He,{}),"Fim ",Kx(z.end_date)]}),e.jsxs(wl,{children:[e.jsx(He,{}),"Frequência mensal"]}),e.jsxs(wl,{children:[e.jsx(Gt,{}),R.length," ",R.length===1?"atividade":"atividades"]}),e.jsx(xr,{$done:!0,children:A===R.length&&R.length>0?"Concluída hoje":"Em andamento"})]}),e.jsxs(cC,{children:[e.jsx("span",{children:"Progresso de hoje"}),e.jsxs("strong",{children:[A," de ",R.length," concluídos · ",C,"%"]})]}),e.jsx(dC,{"aria-label":`${C}% concluído`,children:e.jsx("div",{style:{width:`${C}%`}})}),R.length>0?e.jsx(uC,{"aria-label":`Itens da tarefa ${z.title}`,children:R.map($=>e.jsxs(pC,{$completed:$.is_completed,children:[e.jsx("input",{type:"checkbox",checked:$.is_completed,onChange:G=>c($.id,G.target.checked)}),e.jsx(fC,{$completed:$.is_completed,children:$.title}),$.is_completed&&e.jsx(Dr,{size:16,color:"var(--success)","aria-label":"Concluído"})]},$.id))}):e.jsx(Ve,{children:e.jsx("p",{children:O?"Esta tarefa ainda não possui itens para hoje.":"Os itens diários desta tarefa não foram encontrados."})}),e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsx(ue,{$variant:"danger",onClick:()=>p(z.id),children:"Desativar tarefa"})})]},z.id)})})]})}const mC=h.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
  margin-bottom: 22px;
  @media (max-width: 620px) { gap: 9px; }
  @media (max-width: 420px) { grid-template-columns: 1fr; }
`,Nu=h.div`
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
`,Mu=h.span`
  display: grid;
  width: 42px;
  height: 42px;
  place-items: center;
  border-radius: 12px;
  color: ${({$tone:r})=>r==="green"?"var(--success)":r==="gray"?"var(--muted)":"var(--primary-strong)"};
  background: ${({$tone:r})=>r==="green"?"var(--success-soft)":r==="gray"?"var(--surface-raised)":"color-mix(in srgb, var(--primary) 16%, var(--surface))"};
  svg { width: 19px; height: 19px; }
  @media (max-width: 620px) { width: 36px; height: 36px; }
`,xC=h.div`
  display: grid;
  gap: 14px;
`,gC=h.article`
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
`,vC=h.div`
  display: flex;
  min-width: 0;
  align-items: flex-start;
  justify-content: space-between;
  gap: 14px;
  @media (max-width: 520px) { flex-direction: column; }
`,yC=h.div`
  min-width: 0;
  h3 { margin: 0; color: var(--text); font-size: 16px; font-weight: 750; line-height: 1.45; overflow-wrap: anywhere; }
  p { margin: 4px 0 0; color: var(--muted); font-size: 12px; line-height: 1.5; overflow-wrap: anywhere; }
`,jC=h.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px 18px;
  color: var(--muted);
  font-size: 11px;
`,Tu=h.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  svg { width: 14px; height: 14px; color: var(--text-subtle); }
`,bC=h.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  color: var(--muted);
  font-size: 11px;
  strong { color: var(--text); font-size: 12px; }
`,wC=h.div`
  height: 6px;
  overflow: hidden;
  border-radius: 999px;
  background: var(--border);
  div { height: 100%; border-radius: inherit; background: var(--primary); transition: width .2s ease; }
`,_C=h.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 240px), 1fr));
  gap: 9px;
`,kC=h.label`
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
`,SC=h.span`
  min-width: 0;
  flex: 1;
  color: ${({$completed:r})=>r?"var(--muted)":"var(--text)"};
  font-size: 12px;
  line-height: 1.45;
  overflow-wrap: anywhere;
  text-decoration: ${({$completed:r})=>r?"line-through":"none"};
`,CC=h.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 13px;
  border-top: 1px solid var(--border);
`,Yx=r=>r?new Date(`${r.slice(0,10)}T12:00:00`).toLocaleDateString("pt-BR"):"Não definida";function x1({tasks:r,dailyRecords:i,loading:s,onNavigate:l,onToggleItem:c,onDeactivate:p}){const f=r.filter(S=>S.is_active&&eC(S)),m=f.map(S=>({task:S,record:i.find(z=>String(z.task_id)===String(S.id))})),x=m.flatMap(({record:S})=>(S==null?void 0:S.items)??[]),_=x.filter(S=>S.is_completed).length,j=x.length?Math.round(_/x.length*100):0,w=new Date().toLocaleDateString("pt-BR",{weekday:"long",day:"numeric",month:"long",year:"numeric"});return e.jsxs(e.Fragment,{children:[e.jsxs(gr,{children:[e.jsxs("div",{children:[e.jsx("h1",{children:"Tarefas de hoje"}),e.jsx("p",{children:w.charAt(0).toLocaleUpperCase("pt-BR")+w.slice(1)})]}),e.jsxs(ue,{$variant:"primary",onClick:()=>l("/tasks/new"),children:[e.jsx(ft,{}),"Nova tarefa"]})]}),e.jsxs(mC,{"aria-label":"Resumo do dia",children:[e.jsxs(Nu,{children:[e.jsx(Mu,{$tone:"blue",children:e.jsx(Gt,{})}),e.jsxs("div",{children:[e.jsx("span",{children:"Tarefas diárias ativas"}),e.jsx("strong",{children:f.length})]})]}),e.jsxs(Nu,{children:[e.jsx(Mu,{$tone:"green",children:e.jsx(Fr,{})}),e.jsxs("div",{children:[e.jsx("span",{children:"Itens concluídos"}),e.jsxs("strong",{children:[_," / ",x.length]})]})]}),e.jsxs(Nu,{children:[e.jsx(Mu,{$tone:"gray",children:e.jsx(He,{})}),e.jsxs("div",{children:[e.jsx("span",{children:"Progresso do dia"}),e.jsxs("strong",{children:[j,"%"]})]})]})]}),s?e.jsxs(Ve,{children:[e.jsx(Je,{}),e.jsx("p",{children:"Carregando tarefas..."})]}):r.length===0?e.jsx(Ie,{children:e.jsxs(Ve,{children:[e.jsx(Gt,{size:32}),e.jsx("h3",{children:"Nenhuma tarefa cadastrada"}),e.jsx("p",{children:"Crie uma tarefa para começar a organizar seu dia."}),e.jsx("div",{style:{marginTop:16},children:e.jsxs(ue,{$variant:"primary",onClick:()=>l("/tasks/new"),children:[e.jsx(ft,{}),"Criar tarefa"]})})]})}):f.length===0?e.jsx(Ie,{children:e.jsxs(Ve,{children:[e.jsx(Gt,{size:32}),e.jsx("h3",{children:"Nenhuma tarefa do tipo dia"}),e.jsx("p",{children:"Não há tarefas diárias ativas. As tarefas semanais ficam na aba Semana."}),e.jsx("div",{style:{marginTop:16},children:e.jsx(ue,{onClick:()=>l("/week"),children:"Ver tarefas da semana"})})]})}):e.jsx(xC,{children:m.map(({task:S,record:z})=>{const O=(z==null?void 0:z.items)??[],R=O.filter(C=>C.is_completed).length,A=O.length?Math.round(R/O.length*100):0;return e.jsxs(gC,{children:[e.jsxs(vC,{children:[e.jsxs(yC,{children:[e.jsx("h3",{children:S.title}),e.jsx("p",{children:S.description||"Sem descrição"})]}),e.jsxs(ue,{"aria-label":`Ver detalhes e editar ${S.title}`,onClick:()=>l(`/tasks/${encodeURIComponent(String(S.id))}`),children:[e.jsx(xc,{}),"Editar tarefa"]})]}),e.jsxs(jC,{children:[e.jsxs(Tu,{children:[e.jsx(He,{}),"Início ",Yx(S.start_date)]}),e.jsxs(Tu,{children:[e.jsx(He,{}),"Fim ",Yx(S.end_date)]}),e.jsxs(Tu,{children:[e.jsx(Gt,{}),O.length," ",O.length===1?"item":"itens"]}),e.jsx(xr,{$done:!0,children:R===O.length&&O.length>0?"Concluída":"Em andamento"})]}),e.jsxs(bC,{children:[e.jsx("span",{children:"Progresso da tarefa"}),e.jsxs("strong",{children:[R," de ",O.length," concluídos · ",A,"%"]})]}),e.jsx(wC,{"aria-label":`${A}% concluído`,children:e.jsx("div",{style:{width:`${A}%`}})}),O.length>0?e.jsx(_C,{"aria-label":`Itens da tarefa ${S.title}`,children:O.map(C=>e.jsxs(kC,{$completed:C.is_completed,children:[e.jsx("input",{type:"checkbox",checked:C.is_completed,onChange:$=>c(C.id,$.target.checked)}),e.jsx(SC,{$completed:C.is_completed,children:C.title}),C.is_completed&&e.jsx(Dr,{size:16,color:"var(--success)","aria-label":"Concluído"})]},C.id))}):e.jsx(Ve,{children:e.jsx("p",{children:z?"Esta tarefa ainda não possui itens para hoje.":"Os itens diários desta tarefa não foram encontrados."})}),e.jsx(CC,{children:e.jsx(ue,{$variant:"danger",onClick:()=>p(S.id),children:"Desativar tarefa"})})]},S.id)})})]})}const EC=h.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
  margin-bottom: 22px;
  @media (max-width: 620px) { gap: 9px; }
  @media (max-width: 420px) { grid-template-columns: 1fr; }
`,Au=h.div`
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
`,Du=h.span`
  display: grid;
  width: 42px;
  height: 42px;
  place-items: center;
  border-radius: 12px;
  color: ${({$tone:r})=>r==="green"?"var(--success)":r==="gray"?"var(--muted)":"var(--primary-strong)"};
  background: ${({$tone:r})=>r==="green"?"var(--success-soft)":r==="gray"?"var(--surface-raised)":"color-mix(in srgb, var(--primary) 16%, var(--surface))"};
  svg { width: 19px; height: 19px; }
  @media (max-width: 620px) { width: 36px; height: 36px; }
`,$C=h.div`
  display: grid;
  gap: 13px;
`,RC=h.article`
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
`,PC=h.div`
  display: flex;
  min-width: 0;
  align-items: flex-start;
  justify-content: space-between;
  gap: 14px;
  @media (max-width: 520px) { flex-direction: column; }
`,zC=h.div`
  min-width: 0;
  h3 { margin: 0; color: var(--text); font-size: 15px; font-weight: 750; line-height: 1.45; overflow-wrap: anywhere; }
  p { margin: 4px 0 0; color: var(--muted); font-size: 12px; line-height: 1.5; overflow-wrap: anywhere; }
`,NC=h.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px 16px;
  color: var(--muted);
  font-size: 11px;
`,_l=h.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  svg { width: 14px; height: 14px; color: var(--text-subtle); }
`,MC=h.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  color: var(--muted);
  font-size: 11px;
  strong { color: var(--text); font-size: 12px; }
`,TC=h.div`
  height: 6px;
  overflow: hidden;
  border-radius: 999px;
  background: var(--border);
  div { height: 100%; border-radius: inherit; background: var(--primary); transition: width .2s ease; }
`,AC=h.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 240px), 1fr));
  gap: 9px;
`,DC=h.label`
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
`,FC=h.span`
  min-width: 0;
  flex: 1;
  color: ${({$completed:r})=>r?"var(--muted)":"var(--text)"};
  font-size: 12px;
  line-height: 1.45;
  overflow-wrap: anywhere;
  text-decoration: ${({$completed:r})=>r?"line-through":"none"};
`,LC=h.div`
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
`;function OC(r){const i=new Date(r);i.setHours(0,0,0,0);const s=(i.getDay()+6)%7;i.setDate(i.getDate()-s);const l=new Date(i);l.setDate(i.getDate()+6);const c=p=>[p.getFullYear(),String(p.getMonth()+1).padStart(2,"0"),String(p.getDate()).padStart(2,"0")].join("-");return{start:c(i),end:c(l),startDate:i,endDate:l}}const Xx=r=>r?new Date(`${r.slice(0,10)}T12:00:00`).toLocaleDateString("pt-BR"):"Sem data final";function g1({tasks:r,dailyRecords:i,loading:s,onNavigate:l,onToggleItem:c,onDeactivate:p}){const m=OC(new Date),x=v.useMemo(()=>r.filter(R=>R.is_active&&tC(R)),[r]),_=v.useMemo(()=>x.map(R=>({task:R,record:i.find(A=>String(A.task_id)===String(R.id))})),[x,i]),j=_.flatMap(({record:R})=>(R==null?void 0:R.items)??[]),w=j.filter(R=>R.is_completed).length,S=j.length,z=S?Math.round(w/S*100):0,O=`${m.startDate.toLocaleDateString("pt-BR",{day:"numeric",month:"short"})} – ${m.endDate.toLocaleDateString("pt-BR",{day:"numeric",month:"short",year:"numeric"})}`;return e.jsxs(e.Fragment,{children:[e.jsxs(gr,{children:[e.jsxs("div",{children:[e.jsx("h1",{children:"Tarefas da semana"}),e.jsx("p",{children:O})]}),e.jsxs(ue,{$variant:"primary",onClick:()=>l("/tasks/new"),children:[e.jsx(ft,{}),"Nova tarefa"]})]}),e.jsxs(EC,{"aria-label":"Resumo da semana",children:[e.jsxs(Au,{children:[e.jsx(Du,{$tone:"blue",children:e.jsx(He,{})}),e.jsxs("div",{children:[e.jsx("span",{children:"Tarefas semanais ativas"}),e.jsx("strong",{children:x.length})]})]}),e.jsxs(Au,{children:[e.jsx(Du,{$tone:"green",children:e.jsx(Gt,{})}),e.jsxs("div",{children:[e.jsx("span",{children:"Itens concluídos hoje"}),e.jsxs("strong",{children:[w," / ",S]})]})]}),e.jsxs(Au,{children:[e.jsx(Du,{$tone:"gray",children:e.jsx(Fr,{})}),e.jsxs("div",{children:[e.jsx("span",{children:"Progresso de hoje"}),e.jsxs("strong",{children:[z,"%"]})]})]})]}),e.jsxs(LC,{children:[e.jsx(Kr,{size:16}),e.jsx("span",{children:"Marque as atividades semanais nesta tela. As marcações usam o registro diário atual e ficam sincronizadas com a aba Hoje."})]}),s?e.jsxs(Ve,{children:[e.jsx(Je,{}),e.jsx("p",{children:"Carregando tarefas..."})]}):x.length===0?e.jsx(Ie,{children:e.jsxs(Ve,{children:[e.jsx(He,{size:32}),e.jsx("h3",{children:r.length===0?"Nenhuma tarefa cadastrada":"Nenhuma tarefa do tipo semana"}),e.jsx("p",{children:r.length===0?"Crie uma tarefa para organizar o que precisa fazer.":"Não há tarefas semanais ativas. As tarefas diárias ficam na aba Hoje."}),e.jsx("div",{style:{marginTop:16},children:r.length===0?e.jsxs(ue,{$variant:"primary",onClick:()=>l("/tasks/new"),children:[e.jsx(ft,{}),"Criar tarefa"]}):e.jsx(ue,{onClick:()=>l("/today"),children:"Ver tarefas de hoje"})})]})}):e.jsx($C,{children:_.map(({task:R,record:A})=>{const C=(A==null?void 0:A.items)??[],$=C.filter(I=>I.is_completed).length,G=C.length?Math.round($/C.length*100):0;return e.jsxs(RC,{children:[e.jsxs(PC,{children:[e.jsxs(zC,{children:[e.jsx("h3",{children:R.title}),e.jsx("p",{children:R.description||"Sem descrição"})]}),e.jsx(ue,{onClick:()=>l(`/tasks/${encodeURIComponent(String(R.id))}`),children:"Editar tarefa"})]}),e.jsxs(NC,{children:[e.jsxs(_l,{children:[e.jsx(He,{}),"Início ",Xx(R.start_date)]}),e.jsxs(_l,{children:[e.jsx(He,{}),"Fim ",Xx(R.end_date)]}),e.jsxs(_l,{children:[e.jsx(He,{}),"Frequência semanal"]}),e.jsxs(_l,{children:[e.jsx(Gt,{}),C.length," ",C.length===1?"atividade":"atividades"]}),e.jsx(xr,{$done:!0,children:$===C.length&&C.length>0?"Concluída hoje":"Em andamento"})]}),e.jsxs(MC,{children:[e.jsx("span",{children:"Progresso de hoje"}),e.jsxs("strong",{children:[$," de ",C.length," concluídos · ",G,"%"]})]}),e.jsx(TC,{"aria-label":`${G}% concluído`,children:e.jsx("div",{style:{width:`${G}%`}})}),C.length>0?e.jsx(AC,{"aria-label":`Itens da tarefa ${R.title}`,children:C.map(I=>e.jsxs(DC,{$completed:I.is_completed,children:[e.jsx("input",{type:"checkbox",checked:I.is_completed,onChange:J=>c(I.id,J.target.checked)}),e.jsx(FC,{$completed:I.is_completed,children:I.title}),I.is_completed&&e.jsx(Dr,{size:16,color:"var(--success)","aria-label":"Concluído"})]},I.id))}):e.jsx(Ve,{children:e.jsx("p",{children:A?"Esta tarefa ainda não possui itens para hoje.":"Os itens diários desta tarefa não foram encontrados."})}),e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsx(ue,{$variant:"danger",onClick:()=>p(R.id),children:"Desativar tarefa"})})]},R.id)})})]})}const IC=h.nav`
  display: flex; gap: 6px; padding: 5px; margin-bottom: 22px; border: 1px solid var(--border); border-radius: 12px; background: var(--surface-raised);
  @media (max-width: 520px) { width: 100%; overflow-x: auto; }
`,Ks=h.button`
  display: inline-flex; align-items: center; justify-content: center; gap: 8px; flex: 1; min-width: 110px; border: 0; border-radius: 9px; padding: 11px 15px; color: var(--muted); background: transparent; font-weight: 700; cursor: pointer;
  ${({$active:r})=>r&&"color: var(--primary-strong); background: var(--surface); box-shadow: 0 3px 10px var(--shadow);"}
  &:hover { color: var(--primary-strong); }
  svg { width: 17px; height: 17px; }
`,BC=h(Ks)`
  @media (max-width: 620px) { min-width: 125px; }
`;function qC({history:r,...i}){const[s,l]=v.useState("today");return e.jsxs(e.Fragment,{children:[e.jsxs(IC,{"aria-label":"Período do planejamento",children:[e.jsxs(Ks,{type:"button",$active:s==="today",onClick:()=>l("today"),children:[e.jsx(Kr,{}),"Hoje"]}),e.jsxs(Ks,{type:"button",$active:s==="week",onClick:()=>l("week"),children:[e.jsx(wp,{}),"Semana"]}),e.jsxs(Ks,{type:"button",$active:s==="month",onClick:()=>l("month"),children:[e.jsx(He,{}),"Mês"]}),e.jsxs(Ks,{type:"button",$active:s==="completed",onClick:()=>l("completed"),children:[e.jsx(He,{}),"Concluídas"]}),e.jsxs(BC,{type:"button",$active:s==="history",onClick:()=>l("history"),children:[e.jsx(wp,{}),"Histórico"]})]}),s==="today"&&e.jsx(x1,{...i}),s==="week"&&e.jsx(g1,{...i}),s==="month"&&e.jsx(m1,{...i}),s==="completed"&&e.jsx(p1,{dailyRecords:i.dailyRecords,loading:i.loading,onNavigate:i.onNavigate}),s==="history"&&e.jsx(f1,{...r,loading:i.loading})]})}const uf=Xa`
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
`,UC=Xa`
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
`,HC=Xa`
  0%, 100% { transform: scale(.88); opacity: .48; }
  50% { transform: scale(1.08); opacity: 1; }
`,VC=Xa`
  0%, 100% { transform: translateY(0) rotate(-4deg); }
  50% { transform: translateY(-8px) rotate(4deg); }
`,WC=h.div`
  animation: ${uf} .35s ease-out both;
  @media (prefers-reduced-motion: reduce) { animation: none; }
`,GC=h.div`
  display: grid; justify-items: center; gap: 12px; min-height: 150px; place-content: center; color: var(--muted); text-align: center;
  p { margin: 0; font-size: 12px; }
  @media (prefers-reduced-motion: reduce) { &, * { animation: none !important; } }
`,QC=h.div`
  position: relative; display: grid; width: 68px; height: 68px; place-items: center; color: var(--primary);
  background: color-mix(in srgb, var(--primary) 18%, var(--surface)); border-radius: 50%; box-shadow: 0 10px 24px var(--shadow); animation: ${VC} 2.2s ease-in-out infinite;
  svg { position: relative; z-index: 1; width: 27px; height: 27px; }
  &::before, &::after { position: absolute; inset: -8px; border: 1px solid rgba(67,128,238,.28); border-radius: 50%; content: ''; animation: ${HC} 2s ease-out infinite; }
  &::after { inset: -17px; border-color: rgba(67,128,238,.14); animation-delay: .35s; }
`,Jx=h.div`
  display: grid;
  gap: 12px;
  margin-top: 18px;
  & > article { animation: ${UC} .3s ease-out both; }
  & > article:nth-child(2) { animation-delay: 40ms; }
  & > article:nth-child(3) { animation-delay: 80ms; }
  & > article:nth-child(4) { animation-delay: 120ms; }
  & > article:nth-child(n+5) { animation-delay: 160ms; }
  @media (prefers-reduced-motion: reduce) { & > article { animation: none; } }
`,Zx=h.article`
  display: grid;
  grid-template-columns: 52px minmax(0, 1fr) auto;
  gap: 14px;
  align-items: start;
  padding: 16px;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: var(--surface);
  @media (max-width: 620px) { grid-template-columns: 42px minmax(0, 1fr); }
`,eg=h.div`
  display: grid;
  width: 46px;
  height: 46px;
  place-items: center;
  border-radius: 13px;
  color: ${({$type:r})=>r==="aniversario"?"var(--warning)":r==="lembrete"?"var(--info)":"var(--success)"};
  background: ${({$type:r})=>r==="aniversario"?"var(--warning-soft)":r==="lembrete"?"var(--info-soft)":"var(--success-soft)"};
  svg { width: 21px; height: 21px; }
  @media (max-width: 620px) { width: 40px; height: 40px; }
`,tg=h.div`
  min-width: 0;
  h3 { margin: 0; color: var(--text); font-size: 15px; overflow-wrap: anywhere; }
  p { margin: 5px 0 0; color: var(--muted); font-size: 12px; line-height: 1.5; white-space: pre-wrap; overflow-wrap: anywhere; }
`,kl=h.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px 12px;
  margin-top: 9px;
  color: var(--muted);
  font-size: 11px;
  svg { width: 14px; height: 14px; }
`,rg=h.div`
  display: flex;
  gap: 7px;
  @media (max-width: 620px) { grid-column: 2; }
`,ng=h.button`
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
`,KC=h(Ie)`
  width: min(680px, calc(100vw - 32px));
  max-height: min(88vh, 760px);
  overflow-y: auto;
  margin: 0;
  padding: 24px;
  box-shadow: 0 24px 70px rgba(20, 38, 66, .22);
  animation: ${uf} .22s ease-out both;
  @media (max-width: 620px) { width: calc(100vw - 20px); padding: 18px; max-height: 92vh; }
`,YC=h.div`
  position: fixed; z-index: 1000; inset: 0; display: grid; place-items: center; padding: 16px;
  background: rgba(19, 31, 51, .48); backdrop-filter: blur(5px); animation: ${uf} .18s ease-out both;
`,XC=h.div`
  display: flex; align-items: flex-start; justify-content: space-between; gap: 12px; margin-bottom: 14px;
`,JC=h.button`
  display: grid; width: 34px; height: 34px; flex: 0 0 auto; place-items: center;
  border: 1px solid var(--border); border-radius: 9px; color: var(--muted); background: var(--surface); cursor: pointer;
  &:hover { color: var(--primary); background: var(--surface-raised); }
`,ZC=h.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0 16px;
  @media (max-width: 620px) { grid-template-columns: 1fr; }
`,e4=h.div`
  display: flex;
  justify-content: flex-end;
  gap: 9px;
  flex-wrap: wrap;
  margin-top: 18px;
`,t4=h.label`
  display: flex;
  align-items: center;
  gap: 9px;
  margin: 0 0 18px;
  color: var(--text);
  font-size: 13px;
  input { width: 16px; height: 16px; accent-color: var(--primary); }
`,ag=h.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-top: 18px;
  color: var(--muted);
  font-size: 12px;
`,r4=h.span`
  display: inline-flex;
  align-items: center;
  border-radius: 999px;
  padding: 5px 9px;
  color: var(--warning);
  background: var(--warning-soft);
  font-size: 11px;
  font-weight: 700;
`,n4=h(Ie)`
  margin-bottom: 20px;
  border-color: var(--border);
  background: linear-gradient(135deg, var(--surface), var(--surface-raised));
`,$i=h.div`
  position: relative;
  display: flex;
  align-items: center;
  svg { position: absolute; left: 12px; z-index: 1; width: 17px; height: 17px; color: var(--primary); pointer-events: none; }
  input { width: 100%; padding-left: 38px; border-color: var(--border); background: linear-gradient(135deg, var(--surface), var(--surface-raised)); }
  input:hover { border-color: var(--primary); }
  input:focus { border-color: var(--primary); box-shadow: 0 0 0 3px var(--focus); }
  input::-webkit-calendar-picker-indicator { cursor: pointer; opacity: .72; }
`,a4=h.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  margin-bottom: 20px;
  @media (max-width: 620px) { grid-template-columns: 1fr; }
`,Fu=h.div`
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
`,i4=h.div`
  margin: -4px 0 16px;
  padding: 10px 12px;
  border: 1px solid var(--border);
  border-radius: 9px;
  color: var(--muted);
  background: var(--surface-raised);
  font-size: 12px;
`;function Pp(r){return`${r.getFullYear()}-${String(r.getMonth()+1).padStart(2,"0")}-${String(r.getDate()).padStart(2,"0")}`}function s4(){const r=new Date,i=new Date(r);return i.setDate(i.getDate()+30),{from:Pp(r),to:Pp(i)}}function ig(r){return new Date(`${r.slice(0,10)}T12:00:00`).toLocaleDateString("pt-BR",{weekday:"long",day:"numeric",month:"long",year:"numeric"})}function Lu(r){return r?r.slice(0,5):""}function o4(r){if(!r)return"";const i=new Date(r),s=l=>String(l).padStart(2,"0");return`${i.getFullYear()}-${s(i.getMonth()+1)}-${s(i.getDate())}T${s(i.getHours())}:${s(i.getMinutes())}`}function sg(r){return r==="aniversario"?"Aniversário":r==="atividade"?"Atividade":"Lembrete"}function l4(r){return r==="concluido"?"Concluído":r==="cancelado"?"Cancelado":"Pendente"}function c4(r){return r==="lembrete_definido"?"Lembrete agendado":"Nas próximas 24 horas"}function Ls(r){return(r.occurrence_date??r.event_date).slice(0,10)}function og({message:r}){return e.jsxs(GC,{children:[e.jsx(QC,{children:e.jsx(Hl,{})}),e.jsx("p",{children:r})]})}function d4({events:r,alerts:i,loading:s,alertsLoading:l,saving:c,query:p,pagination:f,alertPagination:m,onApplyFilter:x,onPageChange:_,onAlertPageChange:j,onCreate:w,onUpdate:S,onDelete:z}){const O=v.useMemo(s4,[]),[R,A]=v.useState(p.mode),[C,$]=v.useState(O.from),[G,I]=v.useState(O.from),[J,Q]=v.useState(O.to),[F,ae]=v.useState(""),[k,y]=v.useState(!1),[B,le]=v.useState(null),[je,we]=v.useState(""),[Pe,K]=v.useState(""),[he,oe]=v.useState("lembrete"),[me,H]=v.useState(O.from),[E,b]=v.useState(""),[re,ce]=v.useState(""),[T,ie]=v.useState(!1),[ve,ye]=v.useState("pendente"),[U,de]=v.useState(null),st=v.useRef(null),et=v.useMemo(()=>[...r].sort((se,Be)=>Ls(se).localeCompare(Ls(Be))||(se.event_time??"").localeCompare(Be.event_time??"")),[r]);v.useEffect(()=>{A(p.mode),p.mode==="date"&&$(p.date),p.mode==="range"&&(I(p.from),Q(p.to))},[p]),v.useEffect(()=>{if(!k)return;const se=$t=>{$t.key==="Escape"&&!c&&ot()};document.addEventListener("keydown",se);const Be=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.removeEventListener("keydown",se),document.body.style.overflow=Be}},[k,c]);function ot(){y(!1),le(null),we(""),K(""),oe("lembrete"),H(Pp(new Date)),b(""),ce(""),ie(!1),ye("pendente")}function tt(){ot(),y(!0)}function tr(se){le(se),y(!0),we(se.title),K(se.description??""),oe(se.type),H(se.event_date.slice(0,10)),b(Lu(se.event_time)),ce(o4(se.reminder_at)),ie(se.repeat_yearly),ye(se.status)}async function Mt(se){se.preventDefault();try{const Be={title:je.trim(),description:Pe.trim()||null,type:he,event_date:me,event_time:E||null,reminder_at:re?new Date(re).toISOString():null,repeat_yearly:T,status:ve};(B?await S(B.id,Be):await w(Be))?(de({variant:"success",title:B?"Agendamento atualizado":"Agendamento criado",message:B?"As alterações foram salvas com sucesso.":"O novo agendamento já está disponível na sua agenda."}),ot()):de({variant:"error",title:"Não foi possível salvar",message:"Verifique os dados e tente novamente."})}catch{de({variant:"error",title:"Erro ao salvar",message:"Ocorreu um problema ao comunicar com o servidor."})}}async function gt(se,Be){try{const $t=await S(se.id,{status:Be});de($t?{variant:"success",title:Be==="concluido"?"Alerta concluído":"Alerta cancelado",message:`“${se.title}” foi atualizado com sucesso.`}:{variant:"error",title:"Não foi possível atualizar o alerta",message:"Tente novamente em instantes."})}catch{de({variant:"error",title:"Erro ao atualizar o alerta",message:"Ocorreu um problema ao comunicar com o servidor."})}}async function Ae(se){try{const Be=await z(se);de(Be?{variant:"success",title:"Agendamento excluído",message:`“${se.title}” foi removido da agenda.`}:{variant:"error",title:"Não foi possível excluir",message:"O agendamento não foi removido. Tente novamente."})}catch{de({variant:"error",title:"Erro ao excluir",message:"Ocorreu um problema ao comunicar com o servidor."})}}function Xe(se){if(se.preventDefault(),ae(""),R==="all"){x({mode:"all"});return}if(R==="date"){if(!C){ae("Selecione a data que deseja consultar.");return}x({mode:"date",date:C});return}if(!G||!J){ae("Informe as datas inicial e final do intervalo.");return}if(G>J){ae("A data inicial não pode ser posterior à data final.");return}x({mode:"range",from:G,to:J})}return e.jsxs(WC,{children:[U&&e.jsx(i1,{variant:U.variant,title:U.title,message:U.message,onDismiss:()=>de(null)},`${U.variant}-${U.title}-${U.message}`),e.jsxs(gr,{children:[e.jsxs("div",{children:[e.jsx("h1",{children:"Agenda"}),e.jsx("p",{children:"Organize lembretes, atividades e aniversários em um só lugar."})]}),e.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap",justifyContent:"flex-end"},children:[e.jsxs(ue,{type:"button",onClick:()=>{var se;return(se=st.current)==null?void 0:se.scrollIntoView({behavior:"smooth",block:"start"})},children:[e.jsx(Hl,{}),"Alertas ",m.total>0&&`(${m.total})`]}),e.jsxs(ue,{$variant:"primary",onClick:k?ot:tt,children:[k?e.jsx(er,{}):e.jsx(ft,{}),k?"Fechar":"Novo agendamento"]})]})]}),e.jsxs(a4,{"aria-label":"Resumo da agenda",children:[e.jsxs(Fu,{children:[e.jsx("span",{children:e.jsx(He,{})}),e.jsxs("div",{children:[e.jsx("small",{children:"Agendamentos exibidos"}),e.jsx("strong",{children:f.total})]})]}),e.jsxs(Fu,{children:[e.jsx("span",{children:e.jsx(Hl,{})}),e.jsxs("div",{children:[e.jsx("small",{children:"Alertas pendentes"}),e.jsx("strong",{children:m.total})]})]}),e.jsxs(Fu,{children:[e.jsx("span",{children:e.jsx(Dr,{})}),e.jsxs("div",{children:[e.jsx("small",{children:"Período consultado"}),e.jsx("strong",{children:p.mode==="all"?"Todos":p.mode==="date"?"1 dia":"Intervalo"})]})]})]}),e.jsx("div",{ref:st,id:"agenda-alertas",children:e.jsxs(n4,{children:[e.jsxs(Te,{children:[e.jsx(Hl,{size:19,color:"var(--warning)"}),"Alertas ",m.total>0&&`(${m.total})`]}),l?e.jsx(og,{message:"Verificando seus alertas..."}):i.length===0?e.jsxs(Ve,{children:[e.jsx(Fa,{size:30}),e.jsx("h3",{children:"Nenhum alerta pendente"}),e.jsx("p",{children:"Lembretes vencidos e eventos das próximas 24 horas aparecerão aqui."})]}):e.jsxs(e.Fragment,{children:[e.jsx(Jx,{children:i.map(se=>e.jsxs(Zx,{children:[e.jsx(eg,{$type:se.type,children:se.type==="aniversario"?e.jsx(bx,{}):se.type==="lembrete"?e.jsx(Fa,{}):e.jsx(He,{})}),e.jsxs(tg,{children:[e.jsx("h3",{children:se.title}),se.description&&e.jsx("p",{children:se.description}),e.jsxs(kl,{children:[e.jsx("span",{children:sg(se.type)}),e.jsx("span",{children:ig(Ls(se))}),se.event_time&&e.jsxs("span",{children:[e.jsx(Kr,{}),Lu(se.event_time)]}),se.alert_reasons.map(Be=>e.jsx(r4,{children:c4(Be)},Be))]}),se.reminder_at&&e.jsx(kl,{children:e.jsxs("span",{children:[e.jsx(Fa,{}),"Lembrete: ",new Date(se.reminder_at).toLocaleString("pt-BR",{dateStyle:"short",timeStyle:"short"})]})})]}),e.jsxs(rg,{children:[e.jsxs(ue,{type:"button",$variant:"primary","aria-label":`Concluir ${se.title} e remover dos alertas`,title:"Concluir e remover dos alertas",disabled:c,onClick:()=>{gt(se,"concluido")},children:[e.jsx(Dr,{}),"Concluir"]}),e.jsxs(ue,{type:"button",$variant:"danger","aria-label":`Cancelar ${se.title} e remover dos alertas`,title:"Cancelar e remover dos alertas",disabled:c,onClick:()=>{gt(se,"cancelado")},children:[e.jsx(s_,{}),"Cancelar"]})]})]},se.id))}),m.totalPages>1&&e.jsxs(ag,{children:[e.jsxs("span",{children:["Página ",m.page," de ",m.totalPages]}),e.jsxs("div",{style:{display:"flex",gap:7},children:[e.jsx(ue,{type:"button","aria-label":"Alertas página anterior",disabled:!m.hasPreviousPage||l,onClick:()=>j(m.page-1),children:e.jsx(io,{})}),e.jsx(ue,{type:"button","aria-label":"Próxima página de alertas",disabled:!m.hasNextPage||l,onClick:()=>j(m.page+1),children:e.jsx(Oi,{})})]})]})]})]})}),k&&vc.createPortal(e.jsx(YC,{role:"presentation",onMouseDown:se=>{se.target===se.currentTarget&&!c&&ot()},children:e.jsxs(KC,{role:"dialog","aria-modal":"true","aria-labelledby":"schedule-modal-title",onMouseDown:se=>se.stopPropagation(),children:[e.jsxs(XC,{children:[e.jsxs(Te,{id:"schedule-modal-title",children:[B?e.jsx(Lr,{size:19,color:"var(--primary)"}):e.jsx(Fa,{size:19,color:"var(--primary)"}),B?"Editar agendamento":"Criar agendamento"]}),e.jsx(JC,{type:"button","aria-label":"Fechar janela",title:"Fechar (Esc)",onClick:ot,disabled:c,children:e.jsx(er,{size:18})})]}),e.jsx(i4,{children:"Preencha os dados abaixo. Você receberá um aviso de confirmação após salvar ou atualizar o agendamento."}),e.jsxs("form",{onSubmit:se=>{Mt(se)},children:[e.jsxs(ZC,{children:[e.jsxs(ne,{children:["Título *",e.jsx("input",{value:je,onChange:se=>we(se.target.value),maxLength:200,placeholder:"Ex.: Aniversário da Ana",required:!0})]}),e.jsxs(ne,{children:["Tipo *",e.jsxs(Or,{value:he,onChange:se=>{const Be=se.target.value;oe(Be),ie(Be==="aniversario")},children:[e.jsx("option",{value:"lembrete",children:"Lembrete"}),e.jsx("option",{value:"atividade",children:"Atividade"}),e.jsx("option",{value:"aniversario",children:"Aniversário"})]})]}),e.jsxs(ne,{children:["Data *",e.jsxs($i,{children:[e.jsx(He,{size:17,"aria-hidden":"true"}),e.jsx("input",{type:"date",value:me,onChange:se=>H(se.target.value),required:!0})]})]}),e.jsxs(ne,{children:["Horário ",e.jsx("small",{children:"(opcional)"}),e.jsxs($i,{children:[e.jsx(Kr,{size:17,"aria-hidden":"true"}),e.jsx("input",{type:"time",value:E,onChange:se=>b(se.target.value)})]})]}),e.jsxs(ne,{children:["Lembrar em ",e.jsx("small",{children:"(opcional)"}),e.jsxs($i,{children:[e.jsx(Kr,{size:17,"aria-hidden":"true"}),e.jsx("input",{type:"datetime-local",value:re,onChange:se=>ce(se.target.value)})]})]}),e.jsxs(ne,{children:["Status",e.jsxs(Or,{value:ve,onChange:se=>ye(se.target.value),children:[e.jsx("option",{value:"pendente",children:"Pendente"}),e.jsx("option",{value:"concluido",children:"Concluído"}),e.jsx("option",{value:"cancelado",children:"Cancelado"})]})]})]}),e.jsxs(ne,{children:["Descrição ",e.jsx("small",{children:"(opcional)"}),e.jsx("textarea",{value:Pe,onChange:se=>K(se.target.value),placeholder:"Adicione detalhes importantes..."})]}),e.jsxs(t4,{children:[e.jsx("input",{type:"checkbox",checked:T,onChange:se=>ie(se.target.checked)}),"Repetir todos os anos"]}),e.jsxs(e4,{children:[e.jsx(ue,{type:"button",onClick:ot,children:"Cancelar"}),e.jsxs(ue,{type:"submit",$variant:"primary",disabled:c,children:[c?e.jsx(Je,{className:"spin"}):e.jsx(po,{}),c?"Salvando...":B?"Salvar alterações":"Criar agendamento"]})]})]})]})}),document.body),e.jsxs(Ie,{children:[e.jsxs(Te,{children:[e.jsx(He,{size:19,color:"var(--primary)"}),"Consultar agendamentos"]}),e.jsxs("form",{onSubmit:Xe,children:[e.jsxs(l1,{children:[e.jsxs(ne,{children:["Consulta",e.jsxs(Or,{value:R,onChange:se=>{A(se.target.value),ae("")},children:[e.jsx("option",{value:"all",children:"Todos os agendamentos"}),e.jsx("option",{value:"date",children:"Data específica"}),e.jsx("option",{value:"range",children:"Intervalo de datas"})]})]}),R==="date"&&e.jsxs(ne,{children:["Data",e.jsxs($i,{children:[e.jsx(He,{size:17,"aria-hidden":"true"}),e.jsx("input",{type:"date",value:C,onChange:se=>$(se.target.value),required:!0})]})]}),R==="range"&&e.jsxs(e.Fragment,{children:[e.jsxs(ne,{children:["De",e.jsxs($i,{children:[e.jsx(He,{size:17,"aria-hidden":"true"}),e.jsx("input",{type:"date",value:G,onChange:se=>I(se.target.value),required:!0})]})]}),e.jsxs(ne,{children:["Até",e.jsxs($i,{children:[e.jsx(He,{size:17,"aria-hidden":"true"}),e.jsx("input",{type:"date",min:G,value:J,onChange:se=>Q(se.target.value),required:!0})]})]})]}),e.jsxs(ue,{type:"submit",$variant:"primary",disabled:s,children:[s?e.jsx(Je,{className:"spin"}):e.jsx(He,{}),"Consultar"]})]}),F&&e.jsx("p",{role:"alert",style:{marginTop:10,color:"var(--error)",fontSize:12},children:F})]}),s?e.jsx(og,{message:"Organizando sua agenda..."}):et.length===0?e.jsxs(Ve,{children:[e.jsx(He,{size:32}),e.jsx("h3",{children:"Nenhum agendamento neste período"}),e.jsx("p",{children:"Cadastre um lembrete, atividade ou aniversário para organizar sua agenda."})]}):e.jsx(Jx,{children:et.map(se=>e.jsxs(Zx,{children:[e.jsx(eg,{$type:se.type,children:se.type==="aniversario"?e.jsx(bx,{}):se.type==="lembrete"?e.jsx(Fa,{}):e.jsx(He,{})}),e.jsxs(tg,{children:[e.jsx("h3",{children:se.title}),se.description&&e.jsx("p",{children:se.description}),e.jsxs(kl,{children:[e.jsx("span",{children:sg(se.type)}),e.jsx("span",{children:ig(Ls(se))}),se.event_time&&e.jsxs("span",{children:[e.jsx(Kr,{}),Lu(se.event_time)]}),se.repeat_yearly&&e.jsx("span",{children:"Anual"}),e.jsx(xr,{$done:se.status==="concluido",children:l4(se.status)})]}),se.reminder_at&&e.jsx(kl,{children:e.jsxs("span",{children:[e.jsx(Fa,{}),"Lembrete: ",new Date(se.reminder_at).toLocaleString("pt-BR",{dateStyle:"short",timeStyle:"short"})]})})]}),e.jsxs(rg,{children:[e.jsx(ng,{type:"button","aria-label":`Editar ${se.title}`,title:"Editar",onClick:()=>tr(se),children:e.jsx(Lr,{})}),e.jsx(ng,{type:"button","aria-label":`Excluir ${se.title}`,title:"Excluir","data-danger":"true",disabled:c,onClick:()=>{window.confirm(`Excluir o agendamento “${se.title}”?`)&&Ae(se)},children:e.jsx(mr,{})})]})]},`${se.id}-${Ls(se)}`))}),!s&&f.total>0&&e.jsxs(ag,{children:[e.jsxs("span",{children:[f.total," ocorrência(s) · Página ",f.page," de ",f.totalPages]}),e.jsxs("div",{style:{display:"flex",gap:7},children:[e.jsx(ue,{type:"button","aria-label":"Página anterior",disabled:!f.hasPreviousPage,onClick:()=>_(f.page-1),children:e.jsx(io,{})}),e.jsx(ue,{type:"button","aria-label":"Próxima página",disabled:!f.hasNextPage,onClick:()=>_(f.page+1),children:e.jsx(Oi,{})})]})]})]})]})}const u4=h.div`
  overflow: hidden;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: var(--surface-raised);
  &:focus-within { border-color: var(--primary); box-shadow: 0 0 0 4px var(--focus); }
`,p4=h.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding: 8px;
  border-bottom: 1px solid var(--border);
  background: var(--surface);
`,la=h.button`
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
`,f4=h.div`
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
`;function v1({value:r,onChange:i,placeholder:s="Escreva o conteúdo...",minHeight:l=280,ariaLabel:c="Conteúdo"}){const p=v.useRef(null),f=v.useRef(!1);v.useEffect(()=>{const j=p.current;!j||f.current||j.innerHTML!==r&&(j.innerHTML=r)},[r]);function m(){var j;i(((j=p.current)==null?void 0:j.innerHTML)??"")}function x(j,w){var S;(S=p.current)==null||S.focus(),document.execCommand(j,!1,w),m()}function _(){var w;const j=(w=window.prompt("Informe a URL do link"))==null?void 0:w.trim();j&&x("createLink",j)}return e.jsxs(u4,{children:[e.jsxs(p4,{role:"toolbar","aria-label":"Formatador de texto",children:[e.jsx(la,{type:"button",title:"Negrito","aria-label":"Negrito",onMouseDown:j=>j.preventDefault(),onClick:()=>x("bold"),children:e.jsx(o_,{})}),e.jsx(la,{type:"button",title:"Itálico","aria-label":"Itálico",onMouseDown:j=>j.preventDefault(),onClick:()=>x("italic"),children:e.jsx(__,{})}),e.jsx(la,{type:"button",title:"Sublinhado","aria-label":"Sublinhado",onMouseDown:j=>j.preventDefault(),onClick:()=>x("underline"),children:e.jsx(L_,{})}),e.jsx(la,{type:"button",title:"Riscado","aria-label":"Riscado",onMouseDown:j=>j.preventDefault(),onClick:()=>x("strikeThrough"),children:e.jsx(T_,{})}),e.jsx(la,{type:"button",title:"Título","aria-label":"Título",onMouseDown:j=>j.preventDefault(),onClick:()=>x("formatBlock","h2"),children:e.jsx(j_,{})}),e.jsx(la,{type:"button",title:"Lista","aria-label":"Lista",onMouseDown:j=>j.preventDefault(),onClick:()=>x("insertUnorderedList"),children:e.jsx(S_,{})}),e.jsx(la,{type:"button",title:"Lista numerada","aria-label":"Lista numerada",onMouseDown:j=>j.preventDefault(),onClick:()=>x("insertOrderedList"),children:e.jsx(k_,{})}),e.jsx(la,{type:"button",title:"Inserir link","aria-label":"Inserir link",onMouseDown:j=>j.preventDefault(),onClick:_,children:e.jsx(Yv,{})})]}),e.jsx(f4,{ref:p,$minHeight:l,role:"textbox","aria-label":c,contentEditable:!0,suppressContentEditableWarning:!0,"data-placeholder":s,onFocus:()=>{f.current=!0},onBlur:()=>{f.current=!1,m()},onInput:m})]})}const h4=new Set(["P","BR","STRONG","B","EM","I","U","S","STRIKE","H1","H2","H3","UL","OL","LI","A","BLOCKQUOTE","DIV","SPAN"]);function m4(r){return/<\/?[a-z][\s\S]*>/i.test(r)}function x4(r){return r.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Wa(r){if(!r.trim())return"";const i=new DOMParser().parseFromString(r,"text/html");function s(l){var p;const c=[...l.childNodes];for(const f of c){if(f.nodeType===Node.COMMENT_NODE){f.remove();continue}if(f.nodeType!==Node.ELEMENT_NODE)continue;const m=f,x=m.tagName;if(x==="SCRIPT"||x==="STYLE"||x==="IFRAME"||x==="OBJECT"){m.remove();continue}if(!h4.has(x)){const _=m.parentNode;if(_){for(;m.firstChild;)_.insertBefore(m.firstChild,m);m.remove()}continue}for(const _ of[...m.attributes]){const j=_.name.toLowerCase();(j.startsWith("on")||j==="style"||j==="srcdoc")&&m.removeAttribute(_.name)}if(x==="A"){const _=((p=m.getAttribute("href"))==null?void 0:p.trim())??"";/^(https?:|mailto:|#)/i.test(_)?(m.setAttribute("target","_blank"),m.setAttribute("rel","noreferrer noopener")):m.removeAttribute("href")}s(m)}}return s(i.body),i.body.innerHTML}function g4(r){return r.trim()?m4(r)?Wa(r):r.split(/\n{2,}/).map(i=>`<p>${x4(i).replace(/\n/g,"<br>")}</p>`).join(""):""}function v4(r){return r?(new DOMParser().parseFromString(Wa(r),"text/html").body.textContent??"").replace(/\u00a0/g," ").trim():""}function Ba(r){return!v4(r)}function y4(r){var i;try{const s=new URL(r);if(s.hostname.includes("youtu.be"))return s.pathname.slice(1,12);if(s.hostname.includes("youtube.com"))return s.searchParams.get("v")??((i=s.pathname.match(/\/embed\/([a-zA-Z0-9_-]{11})/))==null?void 0:i[1])??null}catch{return null}return null}const j4=h.div`
  display: grid;
  grid-template-columns: 220px minmax(0, 1fr);
  gap: 18px;
  align-items: start;
  @media (max-width: 900px) { grid-template-columns: 1fr; }
`,b4=h.div`
  display: grid; gap: 7px;
  button { display: flex; align-items: center; justify-content: space-between; gap: 8px; width: 100%; padding: 10px 11px; border: 1px solid var(--border); border-radius: 9px; color: var(--muted); background: var(--surface); text-align: left; font-size: 12px; cursor: pointer; &:hover { border-color: var(--primary); background: var(--surface-raised); } }
  button[data-active='true'] { border-color: var(--primary); color: var(--primary-strong); background: color-mix(in srgb, var(--primary) 16%, var(--surface)); font-weight: 700; }
  span { min-width: 22px; padding: 3px 6px; border-radius: 999px; color: var(--muted); background: var(--surface-raised); text-align: center; font-size: 10px; }
`,w4=h.div`
  display: grid; grid-template-columns: repeat(auto-fill, minmax(min(100%, 290px), 1fr)); gap: 13px;
`,_4=h.article`
  display: grid; gap: 13px; padding: 17px; border: 1px solid var(--border); border-radius: 14px; background: var(--surface); box-shadow: 0 4px 14px var(--shadow); transition: .15s ease;
  &:hover { transform: translateY(-2px); border-color: var(--primary); box-shadow: 0 10px 24px var(--shadow); }
`,k4=h.div`
  display: flex; align-items: flex-start; justify-content: space-between; gap: 10px;
  h3 { margin: 0; color: var(--text); font-size: 15px; line-height: 1.4; overflow-wrap: anywhere; }
  p { margin: 4px 0 0; color: var(--muted); font-size: 11px; }
`,S4=h.span`
  display: grid; width: 36px; height: 36px; flex: 0 0 auto; place-items: center; border-radius: 10px; color: var(--primary); background: color-mix(in srgb, var(--primary) 16%, var(--surface)); svg { width: 18px; height: 18px; }
`,C4=h.div`
  display: -webkit-box; max-height: 82px; margin: 0; overflow: hidden; color: var(--muted); font-size: 12px; line-height: 1.55; -webkit-box-orient: vertical; -webkit-line-clamp: 4;
  & > :first-child { margin-top: 0; }
  p, h1, h2, h3, blockquote { margin: 0 0 5px; font-size: inherit; line-height: inherit; }
  ul, ol { margin: 3px 0; padding-left: 18px; }
  strong, b { color: var(--text); }
  a { color: var(--primary-strong); }
`,E4=h.div`
  color: var(--text); font-size: 14px; line-height: 1.75; overflow-wrap: anywhere;
  p, h1, h2, h3, blockquote { margin: 0 0 12px; }
  h1, h2, h3, strong, b { color: var(--text); }
  ul, ol { padding-left: 22px; }
  blockquote { padding: 8px 12px; border-left: 3px solid var(--primary); color: var(--muted); background: var(--surface-raised); }
  a { color: var(--primary-strong); }
`,$4=h.p`
  display: flex; flex-wrap: wrap; gap: 7px; margin: 0 0 14px; color: var(--muted); font-size: 12px;
`,lg=h.div`
  display: flex; flex-wrap: wrap; gap: 5px; span { padding: 4px 7px; border-radius: 999px; color: var(--muted); background: var(--surface-raised); font-size: 10px; }
`,R4=h.div`
  display: flex; align-items: center; justify-content: space-between; gap: 7px; padding-top: 10px; border-top: 1px solid var(--border);
`,P4=h.div`
  display: flex; gap: 7px;
`,cg=h.button`
  display: grid; width: 32px; height: 32px; place-items: center; border: 1px solid var(--border); border-radius: 8px; color: var(--muted); background: var(--surface-raised); cursor: pointer; &:hover { color: var(--primary); background: var(--surface); } &[data-danger='true']:hover { color: var(--error); background: var(--error-soft); } svg { width: 15px; height: 15px; }
`,z4=h(Ie)`
  margin-bottom: 18px;
`,N4=h.div`
  display: grid; grid-template-columns: 1fr 1fr; gap: 0 15px; @media (max-width: 620px) { grid-template-columns: 1fr; }
`,M4=h.div`
  display: flex; justify-content: flex-end; gap: 8px; margin-top: 8px; flex-wrap: wrap;
`,T4=h.div`
  display: flex; flex-wrap: wrap; align-items: flex-end; gap: 10px; margin-bottom: 18px; padding: 14px; border: 1px solid var(--border); border-radius: 12px; background: var(--surface-raised);
  ${ne} { min-width: 170px; flex: 1; margin: 0; }
`,A4=h.div`
  display: flex; justify-content: space-between; align-items: center; gap: 10px; margin-top: 18px; color: var(--muted); font-size: 11px;
`,Sl={link:"Link",texto:"Texto",documento:"Documento",video:"Vídeo",curso:"Curso",livro:"Livro",artigo:"Artigo",outro:"Outro"};function D4(r){return r==="link"?e.jsx(Yv,{}):r==="video"?e.jsx(I_,{}):r==="documento"||r==="artigo"?e.jsx(g_,{}):e.jsx(Tr,{})}function F4({resources:r,areas:i,loading:s,saving:l,pagination:c,filters:p,onFiltersChange:f,onPageChange:m,onCreate:x,onDelete:_,onEdit:j}){const[w,S]=v.useState(!1),[z,O]=v.useState(null),[R,A]=v.useState(""),[C,$]=v.useState(""),[G,I]=v.useState("texto"),[J,Q]=v.useState(""),[F,ae]=v.useState(""),[k,y]=v.useState(""),[B,le]=v.useState(""),je=v.useMemo(()=>i.reduce((K,he)=>K+he.count,0),[i]);function we(){S(!1),A(""),$(""),I("texto"),Q(""),ae(""),y(""),le("")}async function Pe(K){if(K.preventDefault(),le(""),!J.trim()&&Ba(F)){le("Informe uma URL ou escreva o conteúdo do material.");return}const he={title:R.trim(),area:C.trim(),type:G,url:J.trim()||null,content:Ba(F)?null:Wa(F).slice(0,2e4),tags:k.split(",").map(me=>me.trim()).filter(Boolean)};await x(he)&&we()}return e.jsxs(e.Fragment,{children:[e.jsxs(gr,{children:[e.jsxs("div",{children:[e.jsx("h1",{children:"Biblioteca de estudos"}),e.jsx("p",{children:"Guarde links, resumos e materiais para revisar quando precisar."})]}),e.jsxs(ue,{$variant:"primary",onClick:w?we:()=>S(!0),children:[w?e.jsx(er,{}):e.jsx(ft,{}),w?"Fechar":"Novo material"]})]}),w&&e.jsxs(z4,{children:[e.jsxs(Te,{children:[e.jsx(Tr,{size:19,color:"var(--primary)"}),"Adicionar material"]}),e.jsxs("form",{onSubmit:K=>{Pe(K)},children:[e.jsxs(N4,{children:[e.jsxs(ne,{children:["Título *",e.jsx("input",{value:R,onChange:K=>A(K.target.value),maxLength:200,required:!0,placeholder:"Ex.: Anotações de álgebra"})]}),e.jsxs(ne,{children:["Área *",e.jsx("input",{value:C,onChange:K=>$(K.target.value),maxLength:100,required:!0,placeholder:"Ex.: Matemática"})]}),e.jsxs(ne,{children:["Tipo *",e.jsx(Or,{value:G,onChange:K=>I(K.target.value),children:Object.entries(Sl).map(([K,he])=>e.jsx("option",{value:K,children:he},K))})]}),e.jsxs(ne,{children:["Tags ",e.jsx("small",{children:"(separadas por vírgula)"}),e.jsx("input",{value:k,onChange:K=>y(K.target.value),placeholder:"álgebra, revisão"})]})]}),e.jsxs(ne,{children:["URL ",e.jsx("small",{children:"(opcional se houver conteúdo)"}),e.jsx("input",{type:"url",value:J,onChange:K=>Q(K.target.value),placeholder:"https://..."})]}),e.jsxs(ne,{as:"div",children:["Conteúdo ",e.jsx("small",{children:"(opcional se houver URL)"}),e.jsx(v1,{value:F,onChange:ae,minHeight:280,placeholder:"Resumo, anotações ou pontos importantes...",ariaLabel:"Conteúdo do material"})]}),B&&e.jsx("p",{role:"alert",style:{color:"var(--error)",fontSize:12},children:B}),e.jsxs(M4,{children:[e.jsx(ue,{type:"button",onClick:we,children:"Cancelar"}),e.jsxs(ue,{type:"submit",$variant:"primary",disabled:l,children:[l?e.jsx(Je,{className:"spin"}):e.jsx(ft,{}),"Adicionar material"]})]})]})]}),e.jsxs(T4,{children:[e.jsxs(ne,{children:[e.jsx(t1,{size:14}),"Buscar material",e.jsx("input",{value:p.search,onChange:K=>f({...p,search:K.target.value}),placeholder:"Título, conteúdo ou tag"})]}),e.jsxs(ne,{children:["Área",e.jsxs(Or,{value:p.area,onChange:K=>f({...p,area:K.target.value}),children:[e.jsx("option",{value:"",children:"Todas as áreas"}),i.map(K=>e.jsx("option",{value:K.area,children:K.area},K.area))]})]}),e.jsxs(ne,{children:["Tipo",e.jsxs(Or,{value:p.type,onChange:K=>f({...p,type:K.target.value}),children:[e.jsx("option",{value:"",children:"Todos os tipos"}),Object.entries(Sl).map(([K,he])=>e.jsx("option",{value:K,children:he},K))]})]}),e.jsxs(ue,{type:"button",onClick:()=>f({area:"",type:"",search:""}),children:[e.jsx(v_,{}),"Limpar"]})]}),e.jsxs(j4,{children:[e.jsxs(Ie,{children:[e.jsxs(Te,{children:[e.jsx(Tr,{size:18,color:"var(--primary)"}),"Áreas"]}),e.jsxs(b4,{children:[e.jsxs("button",{type:"button","data-active":!p.area,onClick:()=>f({...p,area:""}),children:[e.jsx("span",{children:"Todas as áreas"}),e.jsx("span",{children:je})]}),i.map(K=>e.jsxs("button",{type:"button","data-active":p.area===K.area,onClick:()=>f({...p,area:K.area}),children:[e.jsx("span",{children:K.area}),e.jsx("span",{children:K.count})]},K.area))]})]}),e.jsxs(Ie,{children:[e.jsxs(Te,{children:[e.jsx(Tr,{size:18,color:"var(--primary)"}),"Materiais ",e.jsx(xr,{children:c.total})]}),s?e.jsxs(Ve,{children:[e.jsx(Je,{}),e.jsx("p",{children:"Carregando materiais..."})]}):r.length===0?e.jsxs(Ve,{children:[e.jsx(Tr,{size:32}),e.jsx("h3",{children:"Nenhum material encontrado"}),e.jsx("p",{children:"Adicione um resumo, link ou conteúdo para começar sua biblioteca."})]}):e.jsxs(e.Fragment,{children:[e.jsx(w4,{children:r.map(K=>{const he=K.content&&!Ba(K.content)?Wa(K.content):"";return e.jsxs(_4,{children:[e.jsx(k4,{children:e.jsxs("div",{style:{display:"flex",gap:10,minWidth:0},children:[e.jsx(S4,{children:D4(K.type)}),e.jsxs("div",{children:[e.jsx("h3",{children:K.title}),e.jsxs("p",{children:[K.area," · ",Sl[K.type]]})]})]})}),he&&e.jsx(C4,{dangerouslySetInnerHTML:{__html:he}}),K.url&&e.jsxs("a",{href:K.url,target:"_blank",rel:"noreferrer",style:{color:"var(--primary)",fontSize:12,overflowWrap:"anywhere"},children:[e.jsx(ec,{size:13,style:{verticalAlign:"middle",marginRight:5}}),"Abrir material"]}),K.tags.length>0&&e.jsx(lg,{children:K.tags.map(oe=>e.jsxs("span",{children:["#",oe]},oe))}),e.jsxs(R4,{children:[e.jsxs(ue,{type:"button",onClick:()=>O(K),children:[e.jsx(xc,{}),"Detalhes"]}),e.jsxs(P4,{children:[e.jsx(cg,{type:"button",title:"Editar material","aria-label":`Editar ${K.title}`,onClick:()=>j(K),children:e.jsx(Lr,{})}),e.jsx(cg,{type:"button",title:"Excluir material","aria-label":`Excluir ${K.title}`,"data-danger":"true",onClick:()=>{window.confirm(`Excluir o material “${K.title}”?`)&&_(K)},children:e.jsx(mr,{})})]})]})]},K.id)})}),e.jsxs(A4,{children:[e.jsxs("span",{children:[c.total," materiais · Página ",c.page," de ",c.totalPages||1]}),e.jsxs("div",{style:{display:"flex",gap:7},children:[e.jsx(ue,{type:"button",disabled:!c.hasPreviousPage||s,onClick:()=>m(c.page-1),children:"Anterior"}),e.jsx(ue,{type:"button",disabled:!c.hasNextPage||s,onClick:()=>m(c.page+1),children:"Próxima"})]})]})]})]})]}),e.jsx(Ii,{open:z!==null,title:(z==null?void 0:z.title)??"Detalhes do material",icon:e.jsx(Tr,{size:18}),onClose:()=>O(null),children:z&&e.jsxs(e.Fragment,{children:[e.jsxs($4,{children:[e.jsx("span",{children:z.area}),e.jsx("span",{children:"·"}),e.jsx("span",{children:Sl[z.type]})]}),z.tags.length>0&&e.jsx(lg,{style:{marginBottom:16},children:z.tags.map(K=>e.jsxs("span",{children:["#",K]},K))}),z.url&&e.jsxs("a",{href:z.url,target:"_blank",rel:"noreferrer",style:{display:"inline-flex",alignItems:"center",gap:6,marginBottom:16,color:"var(--primary-strong)",fontSize:13,overflowWrap:"anywhere"},children:[e.jsx(ec,{size:14}),"Abrir material"]}),z.content&&!Ba(z.content)?e.jsx(E4,{dangerouslySetInnerHTML:{__html:Wa(z.content)}}):e.jsx("p",{style:{color:"var(--muted)",fontSize:13},children:"Este material não tem conteúdo adicional."})]})})]})}const L4=h.div`
  display: grid; grid-template-columns: 1fr 1fr; gap: 0 15px;
  @media (max-width: 620px) { grid-template-columns: 1fr; }
`,O4=h.div`
  display: flex; flex-wrap: wrap; gap: 5px;
  span { padding: 4px 7px; border-radius: 999px; color: var(--muted); background: var(--surface-raised); font-size: 10px; }
`,I4=h.div`
  min-height: 220px; padding: 16px; border: 1px solid var(--border); border-radius: 12px;
  background: var(--surface); color: var(--text); font-size: 14px; line-height: 1.7;
  h1, h2, h3 { margin: 0 0 10px; }
  p { margin: 0 0 10px; }
  ul, ol { margin: 0 0 10px; padding-left: 22px; }
  a { color: var(--primary-strong); }
`,dg=h.div`
  overflow: hidden; margin-bottom: 12px; border: 1px solid var(--border); border-radius: 12px; background: #000;
  iframe, img { display: block; width: 100%; aspect-ratio: 16 / 9; border: 0; object-fit: cover; }
`,ug={link:"Link",texto:"Texto",documento:"Documento",video:"Vídeo",curso:"Curso",livro:"Livro",artigo:"Artigo",outro:"Outro"};function B4(r){return/\.(png|jpe?g|gif|webp|svg)(\?.*)?$/i.test(r)}function q4({resource:r,loading:i,saving:s,onBack:l,onSave:c}){const[p,f]=v.useState(""),[m,x]=v.useState(""),[_,j]=v.useState("texto"),[w,S]=v.useState(""),[z,O]=v.useState(""),[R,A]=v.useState(""),[C,$]=v.useState(""),G=v.useMemo(()=>R.split(",").map(F=>F.trim()).filter(Boolean),[R]),I=v.useMemo(()=>Wa(z),[z]),J=v.useMemo(()=>w.trim()?y4(w.trim()):null,[w]);v.useEffect(()=>{r&&(f(r.title),x(r.area),j(r.type),S(r.url??""),O(g4(r.content??"")),A(r.tags.join(", ")),$(""))},[r==null?void 0:r.id]);async function Q(F){if(F.preventDefault(),$(""),!w.trim()&&Ba(z)){$("Informe uma URL ou escreva o conteúdo do material.");return}const ae={title:p.trim(),area:m.trim(),type:_,url:w.trim()||null,content:Ba(z)?null:Wa(z).slice(0,2e4),tags:G};await c(ae)}return i&&!r?e.jsx(Ie,{children:e.jsx("p",{style:{margin:0,color:"var(--muted)"},children:"Carregando material..."})}):r?e.jsxs(e.Fragment,{children:[e.jsxs(gr,{children:[e.jsxs("div",{children:[e.jsx("h1",{children:"Editar material"}),e.jsx("p",{children:"Escreva, formate e visualize o conteúdo em uma página completa."})]}),e.jsxs(ue,{type:"button",onClick:l,children:[e.jsx(Zl,{}),"Voltar"]})]}),e.jsxs(rf,{children:[e.jsxs(Ie,{children:[e.jsxs(Te,{children:[e.jsx(Tr,{size:19,color:"var(--primary)"}),"Dados e conteúdo"]}),e.jsxs("form",{onSubmit:F=>{Q(F)},children:[e.jsxs(L4,{children:[e.jsxs(ne,{children:["Título *",e.jsx("input",{value:p,onChange:F=>f(F.target.value),maxLength:200,required:!0,placeholder:"Ex.: Anotações de álgebra"})]}),e.jsxs(ne,{children:["Área *",e.jsx("input",{value:m,onChange:F=>x(F.target.value),maxLength:100,required:!0,placeholder:"Ex.: Matemática"})]}),e.jsxs(ne,{children:["Tipo *",e.jsx(Or,{value:_,onChange:F=>j(F.target.value),children:Object.entries(ug).map(([F,ae])=>e.jsx("option",{value:F,children:ae},F))})]}),e.jsxs(ne,{children:["Tags ",e.jsx("small",{children:"(separadas por vírgula)"}),e.jsx("input",{value:R,onChange:F=>A(F.target.value),placeholder:"álgebra, revisão"})]})]}),e.jsxs(ne,{children:["URL ",e.jsx("small",{children:"(opcional se houver conteúdo)"}),e.jsx("input",{type:"url",value:w,onChange:F=>S(F.target.value),placeholder:"https://..."})]}),e.jsxs(ne,{as:"div",children:["Conteúdo ",e.jsx("small",{children:"(opcional se houver URL)"}),e.jsx(v1,{value:z,onChange:O,minHeight:420,placeholder:"Resumo, anotações ou pontos importantes...",ariaLabel:"Conteúdo do material"})]}),C&&e.jsx("p",{role:"alert",style:{color:"var(--error)",fontSize:12},children:C}),e.jsxs(of,{children:[e.jsx(ue,{type:"button",onClick:l,children:"Cancelar"}),e.jsxs(ue,{type:"submit",$variant:"primary",disabled:s,children:[s?e.jsx(Je,{className:"spin"}):e.jsx(po,{}),"Salvar alterações"]})]})]})]}),e.jsxs(Ie,{children:[e.jsx(Te,{children:"Visualização"}),e.jsxs(lf,{children:[e.jsxs(cf,{children:[e.jsx(Tr,{size:18}),p.trim()||"Título do material"]}),e.jsxs(df,{children:[e.jsxs("span",{children:["Área: ",m.trim()||"Sem área"]}),e.jsxs("span",{children:["Tipo: ",ug[_]]})]}),G.length>0&&e.jsx(O4,{style:{marginTop:12},children:G.map(F=>e.jsxs("span",{children:["#",F]},F))})]}),w.trim()&&e.jsxs(e.Fragment,{children:[e.jsx(Te,{children:"Material"}),J?e.jsx(dg,{children:e.jsx("iframe",{title:"Visualização do vídeo",src:`https://www.youtube.com/embed/${J}`,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})}):B4(w.trim())?e.jsx(dg,{children:e.jsx("img",{src:w.trim(),alt:p.trim()||"Material"})}):null,e.jsxs("a",{href:w.trim(),target:"_blank",rel:"noreferrer",style:{display:"inline-flex",alignItems:"center",gap:6,marginBottom:18,color:"var(--primary)",fontSize:13,overflowWrap:"anywhere"},children:[e.jsx(ec,{size:14}),"Abrir URL"]})]}),e.jsx(Te,{children:"Conteúdo"}),Ba(z)?e.jsx(Sn,{children:"O conteúdo formatado aparecerá aqui enquanto você escreve."}):e.jsx(I4,{dangerouslySetInnerHTML:{__html:I}})]})]})]}):e.jsxs(e.Fragment,{children:[e.jsx(gr,{children:e.jsxs("div",{children:[e.jsx("h1",{children:"Material não encontrado"}),e.jsx("p",{children:"Não foi possível localizar esse material na biblioteca."})]})}),e.jsxs(ue,{type:"button",onClick:l,children:[e.jsx(Zl,{}),"Voltar para biblioteca"]})]})}const Ou=h.div`display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,280px),1fr));gap:14px;`,Iu=h.article`display:grid;gap:15px;padding:18px;border:1px solid var(--border);border-radius:14px;background:var(--surface);transition:.15s ease;&:hover{transform:translateY(-2px);box-shadow:0 10px 24px var(--shadow);}`,Bu=h.div`display:flex;justify-content:space-between;align-items:flex-start;gap:12px;h3{margin:0 0 5px;color:var(--text);font-size:15px}p{margin:0;color:var(--muted);font-size:12px}`,qu=h.span`display:grid;width:38px;height:38px;place-items:center;border-radius:11px;color:var(--primary);background:color-mix(in srgb,var(--primary) 16%,var(--surface));`,Uu=h.strong`color:${r=>r.$negative?"var(--error)":"var(--success)"};font-size:23px;small{display:block;margin-top:5px;color:var(--muted);font-size:11px;font-weight:500}`,Hu=h.div`display:flex;justify-content:flex-end;gap:7px;padding-top:11px;border-top:1px solid var(--border);`,Ri=h.button`display:grid;width:32px;height:32px;place-items:center;border:1px solid var(--border);border-radius:8px;color:var(--muted);background:var(--surface-raised);cursor:pointer;&:hover{color:var(--primary);background:var(--surface)}&[data-danger=true]:hover{color:var(--error);background:var(--error-soft)}`,Vu=h.div`display:grid;grid-template-columns:1fr 1fr;gap:0 15px;@media(max-width:620px){grid-template-columns:1fr}`,Wu=h.div`display:flex;justify-content:flex-end;gap:8px;margin-top:8px;flex-wrap:wrap;`,Gu=h.span`display:inline-flex;padding:4px 8px;border-radius:999px;color:var(--muted);background:var(--surface-raised);font-size:10px;font-weight:700;`,pg=h.div`display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;color:var(--muted);font-size:11px;strong{display:block;margin-top:3px;color:var(--text);font-size:13px}`,U4=h.div`position:fixed;z-index:1000;inset:0;display:grid;place-items:center;padding:16px;background:rgba(19,31,51,.48);backdrop-filter:blur(5px);`,H4=h(Ie)`width:min(700px,calc(100vw - 32px));max-height:min(88vh,760px);overflow-y:auto;margin:0;padding:24px;box-shadow:0 24px 70px rgba(20,38,66,.22);@media(max-width:620px){width:calc(100vw - 20px);padding:18px;max-height:92vh}`,V4=h.div`display:flex;align-items:flex-start;justify-content:space-between;gap:12px;margin-bottom:14px;`,W4=h.button`display:grid;width:34px;height:34px;place-items:center;border:1px solid var(--border);border-radius:9px;color:var(--muted);background:var(--surface-raised);cursor:pointer;&:hover{color:var(--primary);background:var(--surface)}`,fg={conta_corrente:"Conta corrente",poupanca:"Poupança",investimento:"Investimento",dinheiro:"Dinheiro",outro:"Outro"},hg={carro:"Carro",moto:"Moto",imovel:"Imóvel",outro:"Outro bem"},mg={proprio:"Próprio",financiado:"Financiado",alugado:"Alugado",outro:"Outro"},xg={financiamento:"Financiamento",cartao_credito:"Cartão de crédito",emprestimo:"Empréstimo",aluguel:"Aluguel",conta:"Conta",outro:"Outro"};function kn(r){return new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(r||0)}function G4(r){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(r||0)}function Os(r){const i=r.trim().startsWith("-"),s=r.replace(/\D/g,"");if(!s)return"";const l=(s.slice(0,-2)||"0").replace(/^0+(?=\d)/,"");return`${i?"-":""}${l.replace(/\B(?=(\d{3})+(?!\d))/g,".")},${s.slice(-2).padStart(2,"0")}`}function Da(r){const i=r.trim().replace(/[^\d,.-]/g,"");return i?i.includes(",")?Number(i.replace(/\./g,"").replace(",","."))||0:Number(i)||0:0}function Is(r){return Number.isFinite(r)?new Intl.NumberFormat("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2}).format(r):""}function Cl(r,i){return i==="USD"?G4(r):kn(r)}function Q4(r){return r==="dinheiro"?e.jsx(Va,{size:19}):r==="investimento"?e.jsx(Zp,{size:19}):e.jsx(ef,{size:19})}function K4(r){return r==="imovel"?e.jsx(Vl,{size:19}):r==="carro"?e.jsx(c_,{size:19}):e.jsx(Xv,{size:19})}function Y4(r){return r==="cartao_credito"?e.jsx(zi,{size:19}):e.jsx(ef,{size:19})}function Qu({open:r,title:i,icon:s,saving:l,onClose:c,children:p}){return r?vc.createPortal(e.jsx(U4,{role:"presentation",onMouseDown:f=>{f.target===f.currentTarget&&!l&&c()},children:e.jsxs(H4,{role:"dialog","aria-modal":"true","aria-labelledby":"finance-modal-title",onMouseDown:f=>f.stopPropagation(),children:[e.jsxs(V4,{children:[e.jsxs(Te,{id:"finance-modal-title",children:[s,i]}),e.jsx(W4,{type:"button","aria-label":"Fechar janela",title:"Fechar (Esc)",onClick:c,disabled:l,children:e.jsx(er,{size:18})})]}),p]})}),document.body):null}function X4({accounts:r,assets:i,liabilities:s,summary:l,loading:c,saving:p,onCreate:f,onUpdate:m,onDelete:x,onCreateAsset:_,onUpdateAsset:j,onDeleteAsset:w,onCreateLiability:S,onUpdateLiability:z,onDeleteLiability:O}){const[R,A]=v.useState(!1),[C,$]=v.useState(null),[G,I]=v.useState(""),[J,Q]=v.useState(""),[F,ae]=v.useState("conta_corrente"),[k,y]=v.useState("BRL"),[B,le]=v.useState(""),[je,we]=v.useState(!1),[Pe,K]=v.useState(null),[he,oe]=v.useState(""),[me,H]=v.useState("imovel"),[E,b]=v.useState("BRL"),[re,ce]=v.useState(""),[T,ie]=v.useState("proprio"),[ve,ye]=v.useState(""),[U,de]=v.useState(!0),[st,et]=v.useState(""),[ot,tt]=v.useState(!1),[tr,Mt]=v.useState(null),[gt,Ae]=v.useState(""),[Xe,se]=v.useState("outro"),[Be,$t]=v.useState("BRL"),[Ut,vt]=v.useState(""),[Rt,rt]=v.useState(""),[nt,pr]=v.useState(""),pn=R||je||ot;function rr(){A(!1),$(null),I(""),Q(""),ae("conta_corrente"),y("BRL"),le(""),et("")}function nr(){we(!1),K(null),oe(""),H("imovel"),b("BRL"),ce(""),ie("proprio"),ye(""),de(!0),et("")}function fn(){tt(!1),Mt(null),Ae(""),se("outro"),$t("BRL"),vt(""),rt(""),pr(""),et("")}v.useEffect(()=>{if(!pn)return;const Z=Ct=>{Ct.key==="Escape"&&!p&&(rr(),nr(),fn())};document.addEventListener("keydown",Z);const Ye=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.removeEventListener("keydown",Z),document.body.style.overflow=Ye}},[pn,p]);function M(Z){$(Z),A(!0),I(Z.institution),Q(Z.account_name),ae(Z.account_type),y(Z.currency??"BRL"),le(Is(Z.balance))}function _e(Z){K(Z),we(!0),oe(Z.name),H(Z.asset_type),b(Z.currency??"BRL"),ce(Is(Z.estimated_value)),ie(Z.ownership_status),ye(Is(Z.monthly_rent)),de(Z.include_in_patrimony!==!1)}function Ge(Z){var Ye;Mt(Z),tt(!0),Ae(Z.name),se(Z.liability_type),$t(Z.currency??"BRL"),vt(Is(Z.outstanding_balance)),rt(Is(Z.monthly_payment)),pr(((Ye=Z.due_date)==null?void 0:Ye.slice(0,10))??"")}async function at(Z){Z.preventDefault();const Ye={institution:G.trim(),account_name:J.trim(),account_type:F,currency:k,balance:Da(B)};(C?await m(C.id,Ye):await f(Ye))&&rr()}async function Ke(Z){if(Z.preventDefault(),et(""),!he.trim())return et("Informe o nome do bem.");const Ye={name:he.trim(),asset_type:me,estimated_value:Da(re),currency:E,ownership_status:T,monthly_rent:Da(ve),include_in_patrimony:U};(Pe?await j(Pe.id,Ye):await _(Ye))&&nr()}async function mt(Z){if(Z.preventDefault(),et(""),!gt.trim()||Da(Ut)<=0)return et("Informe o nome e um valor de passivo válido.");const Ye={name:gt.trim(),liability_type:Xe,original_amount:Da(Ut),outstanding_balance:Da(Ut),monthly_payment:Da(Rt),currency:Be,due_date:nt||null};(tr?await z(tr.id,Ye):await S(Ye))&&fn()}const Zr=l.total_patrimony??l.total_balance;return e.jsxs(e.Fragment,{children:[e.jsxs(gr,{children:[e.jsxs("div",{children:[e.jsx("h1",{children:"Finanças"}),e.jsx("p",{children:"Ativos, passivos e patrimônio líquido em uma visão simples."})]}),e.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap",justifyContent:"flex-end"},children:[e.jsxs(ue,{onClick:()=>tt(!0),children:[e.jsx(zi,{}),"Nova dívida"]}),e.jsxs(ue,{onClick:()=>we(!0),children:[e.jsx(Vl,{}),"Novo ativo"]}),e.jsxs(ue,{$variant:"primary",onClick:()=>A(!0),children:[e.jsx(ft,{}),"Nova conta"]})]})]}),e.jsxs(nk,{children:[e.jsxs(As,{children:[e.jsx("p",{children:"Patrimônio líquido em reais"}),e.jsx("strong",{style:{color:Zr<0?"var(--error)":"var(--success)"},children:kn(Zr)})]}),e.jsxs(As,{children:[e.jsx("p",{children:"Total de ativos"}),e.jsx("strong",{children:kn(l.assets_total_brl??l.total_assets??0)})]}),e.jsxs(As,{children:[e.jsx("p",{children:"Total de passivos"}),e.jsx("strong",{style:{color:"var(--error)"},children:kn(l.liabilities_total_brl??l.total_liabilities??0)})]}),e.jsxs(As,{children:[e.jsx("p",{children:"Pagamentos mensais"}),e.jsx("strong",{children:kn(l.monthly_liability_payments_brl??l.monthly_payments??0)})]}),(l.investment_portfolio_value_brl??0)>0&&e.jsxs(As,{children:[e.jsx("p",{children:"Carteira de investimentos"}),e.jsx("strong",{children:kn(l.investment_portfolio_value_brl??0)})]})]}),e.jsx(Qu,{open:R,title:C?"Editar conta":"Adicionar conta",icon:e.jsx(Va,{size:19,color:"var(--primary)"}),saving:p,onClose:rr,children:e.jsxs("form",{onSubmit:Z=>{at(Z)},children:[e.jsxs(Vu,{children:[e.jsxs(ne,{children:["Instituição *",e.jsx("input",{value:G,onChange:Z=>I(Z.target.value),required:!0})]}),e.jsxs(ne,{children:["Nome da conta *",e.jsx("input",{value:J,onChange:Z=>Q(Z.target.value),required:!0})]}),e.jsxs(ne,{children:["Tipo *",e.jsx("select",{value:F,onChange:Z=>ae(Z.target.value),children:Object.entries(fg).map(([Z,Ye])=>e.jsx("option",{value:Z,children:Ye},Z))})]}),e.jsxs(ne,{children:["Moeda *",e.jsxs("select",{value:k,onChange:Z=>y(Z.target.value),children:[e.jsx("option",{value:"BRL",children:"Real (BRL)"}),e.jsx("option",{value:"USD",children:"Dólar (USD)"})]})]}),e.jsxs(ne,{children:["Saldo em ",k," *",e.jsx("input",{inputMode:"decimal",value:B,onChange:Z=>le(Os(Z.target.value)),required:!0})]})]}),e.jsxs(Wu,{children:[e.jsx(ue,{type:"button",onClick:rr,children:"Cancelar"}),e.jsxs(ue,{type:"submit",$variant:"primary",disabled:p,children:[p?e.jsx(Je,{className:"spin"}):e.jsx(ft,{}),"Salvar"]})]})]})}),e.jsx(Qu,{open:je,title:Pe?"Editar ativo":"Adicionar ativo",icon:e.jsx(Vl,{size:19,color:"var(--primary)"}),saving:p,onClose:nr,children:e.jsxs("form",{onSubmit:Z=>{Ke(Z)},children:[e.jsxs(Vu,{children:[e.jsxs(ne,{children:["Nome do ativo *",e.jsx("input",{value:he,onChange:Z=>oe(Z.target.value),required:!0,placeholder:"Casa, Honda Civic..."})]}),e.jsxs(ne,{children:["Tipo *",e.jsx("select",{value:me,onChange:Z=>H(Z.target.value),children:Object.entries(hg).map(([Z,Ye])=>e.jsx("option",{value:Z,children:Ye},Z))})]}),e.jsxs(ne,{children:["Valor estimado (",E,") *",e.jsx("input",{inputMode:"decimal",value:re,onChange:Z=>ce(Os(Z.target.value)),required:!0})]}),e.jsxs(ne,{children:["Moeda *",e.jsxs("select",{value:E,onChange:Z=>b(Z.target.value),children:[e.jsx("option",{value:"BRL",children:"Real (BRL)"}),e.jsx("option",{value:"USD",children:"Dólar (USD)"})]})]}),e.jsxs(ne,{children:["Situação *",e.jsx("select",{value:T,onChange:Z=>ie(Z.target.value),children:Object.entries(mg).map(([Z,Ye])=>e.jsx("option",{value:Z,children:Ye},Z))})]}),e.jsxs(ne,{children:["Aluguel mensal (",E,")",e.jsx("input",{inputMode:"decimal",value:ve,onChange:Z=>ye(Os(Z.target.value))})]})]}),e.jsx("p",{style:{color:"var(--muted)",fontSize:12},children:"Dívidas de um ativo devem ser cadastradas separadamente em passivos."}),e.jsxs("label",{style:{display:"flex",gap:8,alignItems:"center",fontSize:12},children:[e.jsx("input",{type:"checkbox",checked:U,onChange:Z=>de(Z.target.checked)})," Incluir no patrimônio total"]}),e.jsxs(Wu,{children:[e.jsx(ue,{type:"button",onClick:nr,children:"Cancelar"}),e.jsxs(ue,{type:"submit",$variant:"primary",disabled:p,children:[p?e.jsx(Je,{className:"spin"}):e.jsx(ft,{}),"Salvar ativo"]})]})]})}),e.jsx(Qu,{open:ot,title:tr?"Editar passivo":"Adicionar dívida ou obrigação",icon:e.jsx(zi,{size:19,color:"var(--error)"}),saving:p,onClose:fn,children:e.jsxs("form",{onSubmit:Z=>{mt(Z)},children:[e.jsxs(Vu,{children:[e.jsxs(ne,{children:["Nome *",e.jsx("input",{value:gt,onChange:Z=>Ae(Z.target.value),required:!0,placeholder:"Financiamento do carro"})]}),e.jsxs(ne,{children:["Tipo *",e.jsx("select",{value:Xe,onChange:Z=>se(Z.target.value),children:Object.entries(xg).map(([Z,Ye])=>e.jsx("option",{value:Z,children:Ye},Z))})]}),e.jsxs(ne,{children:["Saldo pendente (",Be,") *",e.jsx("input",{inputMode:"decimal",value:Ut,onChange:Z=>vt(Os(Z.target.value)),required:!0})]}),e.jsxs(ne,{children:["Pagamento mensal (",Be,")",e.jsx("input",{inputMode:"decimal",value:Rt,onChange:Z=>rt(Os(Z.target.value))})]}),e.jsxs(ne,{children:["Moeda *",e.jsxs("select",{value:Be,onChange:Z=>$t(Z.target.value),children:[e.jsx("option",{value:"BRL",children:"Real (BRL)"}),e.jsx("option",{value:"USD",children:"Dólar (USD)"})]})]}),e.jsxs(ne,{children:["Vencimento",e.jsx("input",{type:"date",value:nt,onChange:Z=>pr(Z.target.value)})]})]}),st&&e.jsx("p",{role:"alert",style:{color:"var(--error)"},children:st}),e.jsxs(Wu,{children:[e.jsx(ue,{type:"button",onClick:fn,children:"Cancelar"}),e.jsxs(ue,{type:"submit",$variant:"primary",disabled:p,children:[p?e.jsx(Je,{className:"spin"}):e.jsx(ft,{}),"Salvar passivo"]})]})]})}),e.jsxs(Ie,{children:[e.jsxs(Te,{children:[e.jsx(ef,{size:19,color:"var(--primary)"}),"Minhas contas ",e.jsx(xr,{children:r.length})]}),c?e.jsxs(Ve,{children:[e.jsx(Je,{}),e.jsx("p",{children:"Carregando suas contas..."})]}):r.length===0?e.jsxs(Ve,{children:[e.jsx(Va,{size:34}),e.jsx("h3",{children:"Nenhuma conta cadastrada"}),e.jsx("p",{children:"Adicione seu primeiro saldo para começar."})]}):e.jsx(Ou,{children:r.map(Z=>e.jsxs(Iu,{children:[e.jsxs(Bu,{children:[e.jsxs("div",{style:{display:"flex",gap:10},children:[e.jsx(qu,{children:Q4(Z.account_type)}),e.jsxs("div",{children:[e.jsx("h3",{children:Z.institution}),e.jsx("p",{children:Z.account_name})]})]}),e.jsxs(Gu,{children:[Z.currency," · ",fg[Z.account_type]]})]}),e.jsxs(Uu,{$negative:Z.balance_brl<0,children:[Cl(Z.balance,Z.currency),Z.currency==="USD"&&e.jsxs("small",{children:["≈ ",kn(Z.balance_brl)]})]}),e.jsxs(Hu,{children:[e.jsx(Ri,{title:"Editar conta",onClick:()=>M(Z),children:e.jsx(Lr,{size:15})}),e.jsx(Ri,{title:"Excluir conta","data-danger":"true",onClick:()=>{window.confirm(`Excluir a conta “${Z.account_name}”?`)&&x(Z)},children:e.jsx(mr,{size:15})})]})]},Z.id))})]}),e.jsxs(Ie,{style:{marginTop:18},children:[e.jsxs(Te,{children:[e.jsx(Xv,{size:19,color:"var(--primary)"}),"Meus ativos ",e.jsx(xr,{children:i.length})]}),c?e.jsxs(Ve,{children:[e.jsx(Je,{}),e.jsx("p",{children:"Carregando seus ativos..."})]}):i.length===0?e.jsxs(Ve,{children:[e.jsx(Vl,{size:34}),e.jsx("h3",{children:"Nenhum ativo cadastrado"}),e.jsx("p",{children:"Cadastre carros, motos, imóveis ou outros bens."})]}):e.jsx(Ou,{children:i.map(Z=>{const Ye=Z.net_value_brl??Z.estimated_value_brl??(Z.include_in_patrimony===!1?0:Z.estimated_value);return e.jsxs(Iu,{children:[e.jsxs(Bu,{children:[e.jsxs("div",{style:{display:"flex",gap:10},children:[e.jsx(qu,{children:K4(Z.asset_type)}),e.jsxs("div",{children:[e.jsx("h3",{children:Z.name}),e.jsxs("p",{children:[hg[Z.asset_type]," · ",mg[Z.ownership_status]]})]})]}),e.jsx(Gu,{children:Z.currency})]}),e.jsxs(Uu,{$negative:Ye<0,children:[kn(Ye),e.jsxs("small",{children:["Valor líquido",Z.include_in_patrimony===!1?" · fora do patrimônio":""]})]}),e.jsxs(pg,{children:[e.jsxs("span",{children:["Estimado",e.jsx("strong",{children:Cl(Z.estimated_value,Z.currency)})]}),Z.monthly_rent>0&&e.jsxs("span",{children:["Aluguel",e.jsx("strong",{children:Cl(Z.monthly_rent,Z.currency)})]})]}),e.jsxs(Hu,{children:[e.jsx(Ri,{title:"Editar ativo",onClick:()=>_e(Z),children:e.jsx(Lr,{size:15})}),e.jsx(Ri,{title:"Excluir ativo","data-danger":"true",onClick:()=>{window.confirm(`Excluir o ativo “${Z.name}”?`)&&w(Z)},children:e.jsx(mr,{size:15})})]})]},Z.id)})})]}),e.jsxs(Ie,{style:{marginTop:18},children:[e.jsxs(Te,{children:[e.jsx(zi,{size:19,color:"var(--error)"}),"Meus passivos ",e.jsx(xr,{children:s.length})]}),c?e.jsxs(Ve,{children:[e.jsx(Je,{}),e.jsx("p",{children:"Carregando seus passivos..."})]}):s.length===0?e.jsxs(Ve,{children:[e.jsx(zi,{size:34}),e.jsx("h3",{children:"Nenhum passivo cadastrado"}),e.jsx("p",{children:"Cadastre dívidas, financiamentos e obrigações para acompanhar seu patrimônio líquido."})]}):e.jsx(Ou,{children:s.map(Z=>{const Ye=Z.outstanding_balance_brl??Z.outstanding_balance,Ct=Z.monthly_payment_brl??Z.monthly_payment;return e.jsxs(Iu,{children:[e.jsxs(Bu,{children:[e.jsxs("div",{style:{display:"flex",gap:10},children:[e.jsx(qu,{children:Y4(Z.liability_type)}),e.jsxs("div",{children:[e.jsx("h3",{children:Z.name}),e.jsxs("p",{children:[xg[Z.liability_type]??Z.liability_type,Z.due_date?` · vence em ${new Date(Z.due_date).toLocaleDateString("pt-BR")}`:""]})]})]}),e.jsx(Gu,{children:Z.currency})]}),e.jsxs(Uu,{$negative:!0,children:[kn(Ye),e.jsx("small",{children:"Saldo pendente em reais"})]}),e.jsxs(pg,{children:[e.jsxs("span",{children:["Pagamento mensal",e.jsx("strong",{children:Cl(Ct,Z.currency)})]}),e.jsxs("span",{children:["Impacto",e.jsxs("strong",{style:{color:"var(--error)"},children:["− ",kn(Ye)]})]})]}),e.jsxs(Hu,{children:[e.jsx(Ri,{title:"Editar passivo",onClick:()=>Ge(Z),children:e.jsx(Lr,{size:15})}),e.jsx(Ri,{title:"Excluir passivo","data-danger":"true",onClick:()=>{window.confirm(`Excluir o passivo “${Z.name}”?`)&&O(Z)},children:e.jsx(mr,{size:15})})]})]},Z.id)})})]})]})}const J4=h.div`
  display: grid;
  gap: 20px;
`,Z4=h.div`
  max-width: 620px;
`,e3=h.div`
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
`,t3=h.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 13px;
  @media (max-width: 720px) { grid-template-columns: 1fr; }
`,Ku=h(Ie)`
  display: grid;
  grid-template-columns: 44px minmax(0, 1fr);
  align-items: center;
  gap: 13px;
  padding: 18px;
  > span { display: grid; width: 44px; height: 44px; place-items: center; border-radius: 14px; color: var(--primary-strong); background: color-mix(in srgb, var(--primary) 16%, var(--surface)); }
  small { display: block; color: var(--muted); font-size: 11px; }
  strong { display: block; margin-top: 3px; color: var(--text); font-size: 23px; }
  p { margin: 4px 0 0; color: var(--muted); font-size: 11px; }
`,r3=h.div`
  display: grid;
  grid-template-columns: minmax(0, 1.3fr) minmax(270px, .7fr);
  gap: 18px;
  align-items: start;
  @media (max-width: 900px) { grid-template-columns: 1fr; }
`,n3=h.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  align-items: end;
  gap: 10px;
  min-height: 190px;
  padding-top: 18px;
`,a3=h.div`
  display: grid;
  grid-template-rows: 18px 1fr auto;
  justify-items: center;
  gap: 8px;
  height: 170px;
  color: var(--muted);
  font-size: 10px;
`,i3=h.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: flex-end;
  justify-content: center;
  padding: 0 3px;
  border-bottom: 1px solid var(--border);
`,s3=h.div`
  width: min(28px, 70%);
  height: ${({$height:r})=>`${r}%`};
  min-height: 3px;
  border-radius: 8px 8px 3px 3px;
  background: ${({$today:r})=>r?"var(--primary-strong)":"var(--primary)"};
  box-shadow: 0 5px 12px color-mix(in srgb, var(--primary) 18%, transparent);
  transition: height .25s ease;
`,o3=h.span`
  white-space: nowrap;
`,l3=h.form`
  display: grid;
  gap: 8px;
  > div { display: flex; align-items: flex-end; gap: 8px; }
  ${ne} { flex: 1; margin: 0; }
  input { max-width: 180px; }
`,c3=h.form`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) minmax(150px, .8fr) auto;
  align-items: end;
  gap: 10px;
  padding: 15px;
  margin-bottom: 17px;
  border: 1px solid var(--border);
  border-radius: 14px;
  background: var(--surface-raised);
  ${ne} { margin: 0; }
  @media (max-width: 760px) { grid-template-columns: 1fr 1fr; }
  @media (max-width: 480px) { grid-template-columns: 1fr; }
`,d3=h.div`
  display: grid;
  gap: 11px;
`,u3=h.article`
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
`,p3=h.div`
  min-width: 0;
  h3 { margin: 0; color: var(--text); font-size: 15px; line-height: 1.4; overflow-wrap: anywhere; }
  p { margin: 6px 0 0; color: var(--muted); font-size: 12px; line-height: 1.55; white-space: pre-wrap; overflow-wrap: anywhere; }
`,f3=h.div`
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
`,h3=h.div`
  display: grid;
  justify-items: end;
  align-content: space-between;
  gap: 14px;
  @media (max-width: 620px) { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; }
`,m3=h.span`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 6px 9px;
  border-radius: var(--radius-full);
  color: ${({$status:r})=>r==="concluido"?"var(--success)":r==="cancelado"?"var(--error)":"var(--primary-strong)"};
  background: ${({$status:r})=>r==="concluido"?"var(--success-soft)":r==="cancelado"?"var(--error-soft)":"var(--primary-soft)"};
  font-size: 10px;
  font-weight: 800;
`,x3=h.div`
  display: flex;
  justify-content: flex-end;
  gap: 6px;
`,Yu=h.button`
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
`,g3=h.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 14px;
  ${ne}:first-child, ${ne}:last-of-type { grid-column: 1 / -1; }
  @media (max-width: 620px) { grid-template-columns: 1fr; ${ne} { grid-column: auto; } }
`,v3=h.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  grid-column: 1 / -1;
  margin-top: 3px;
`,y3=h.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin-top: 17px;
  color: var(--muted);
  font-size: 11px;
`,gg=()=>({title:"",study_date:y1(new Date),topic:"",study_time:"",duration_minutes:"30",status:"planejado",material_url:"",content:""});function y1(r){return`${r.getFullYear()}-${String(r.getMonth()+1).padStart(2,"0")}-${String(r.getDate()).padStart(2,"0")}`}function Xu(r){return new Date(`${r.slice(0,10)}T12:00:00`).toLocaleDateString("pt-BR",{weekday:"short",day:"numeric",month:"short"})}function zp(r){return r?r.slice(0,5):null}function Bs(r,i){var s,l;return xt.isAxiosError(r)&&((l=(s=r.response)==null?void 0:s.data)==null?void 0:l.error)||i}function j3(r){return{title:r.title,study_date:r.study_date.slice(0,10),topic:r.topic??"",study_time:zp(r.study_time)??"",duration_minutes:String(r.duration_minutes),status:r.status,material_url:r.material_url??"",content:r.content??""}}function b3(r){return{title:r.title.trim(),study_date:r.study_date,topic:r.topic.trim()||null,study_time:r.study_time||null,duration_minutes:Number(r.duration_minutes),status:r.status,material_url:r.material_url.trim()||null,content:r.content.trim()||null}}const w3={planejado:"Planejado",concluido:"Concluído",cancelado:"Cancelado"};function _3({onNavigate:r}){const[i,s]=v.useState(),[l,c]=v.useState(),[p,f]=v.useState(30),[m,x]=v.useState("30"),[_,j]=v.useState({page:1,limit:20}),[w,S]=v.useState({from:"",to:"",status:""}),[z,O]=v.useState(gg),[R,A]=v.useState(null),[C,$]=v.useState(!1),[G,I]=v.useState(null),[J,Q]=v.useState(!0),[F,ae]=v.useState(!1),[k,y]=v.useState(!1),[B,le]=v.useState(""),[je,we]=v.useState(""),[Pe,K]=v.useState(0);v.useEffect(()=>{let U=!0;return Q(!0),le(""),Promise.all([Hw(_),Gw(),Kw()]).then(([de,st,et])=>{U&&(s(de),f(st.daily_goal_minutes),x(String(st.daily_goal_minutes)),c(et))}).catch(de=>{U&&le(Bs(de,"Não foi possível carregar o acompanhamento de inglês."))}).finally(()=>{U&&Q(!1)}),()=>{U=!1}},[_,Pe]);const he=v.useCallback(()=>$(!1),[]);function oe(){A(null),O(gg()),$(!0)}function me(U){A(U),O(j3(U)),$(!0)}async function H(U){U.preventDefault(),le(""),we(""),ae(!0);try{const de=b3(z);R?await xx(R.id,de):await Vw(de),$(!1),A(null),we(R?"Sessão atualizada.":"Sessão de estudo criada."),K(st=>st+1)}catch(de){le(Bs(de,"Não foi possível salvar a sessão de estudo."))}finally{ae(!1)}}async function E(U){U.preventDefault();const de=Number(m);if(!Number.isInteger(de)||de<1||de>1440){le("A meta deve ser um número inteiro entre 1 e 1440 minutos.");return}le(""),we(""),ae(!0);try{const st=await Qw(de);f(st.daily_goal_minutes),x(String(st.daily_goal_minutes)),we("Meta diária atualizada."),K(et=>et+1)}catch(st){le(Bs(st,"Não foi possível atualizar a meta diária."))}finally{ae(!1)}}function b(U){if(U.preventDefault(),w.from&&w.to&&w.from>w.to){le("A data inicial precisa ser anterior ou igual à data final.");return}if(w.from&&w.to&&(Date.parse(`${w.to}T00:00:00Z`)-Date.parse(`${w.from}T00:00:00Z`))/864e5>366){le("O período das sessões não pode ultrapassar 366 dias.");return}le(""),j({from:w.from||void 0,to:w.to||void 0,status:w.status||void 0,page:1,limit:20})}async function re(){if(G){y(!0),le(""),we("");try{await Ww(G.id),I(null),we("Sessão removida."),K(U=>U+1)}catch(U){le(Bs(U,"Não foi possível excluir a sessão.")),I(null)}finally{y(!1)}}}async function ce(U){le(""),we("");try{await xx(U.id,{status:"concluido"}),we("Sessão concluída. Seu progresso foi atualizado."),K(de=>de+1)}catch(de){le(Bs(de,"Não foi possível concluir a sessão."))}}const T=(l==null?void 0:l.daily)??[],ie=Math.max(p,...T.map(U=>U.total_minutes),1),ve=(i==null?void 0:i.data)??[],ye=i==null?void 0:i.pagination;return e.jsxs(J4,{children:[e.jsxs(yc,{children:[e.jsxs(Z4,{children:[e.jsxs("span",{children:[e.jsx(Sp,{size:14})," English study tracker"]}),e.jsx("h1",{children:"Seu inglês, em evolução."}),e.jsx("p",{children:"Planeje sessões, registre o que aprendeu e acompanhe sua consistência dia após dia."})]}),e.jsxs(e3,{children:[e.jsxs(ue,{type:"button",onClick:()=>r("/study-resources"),children:[e.jsx(Tr,{}),"Biblioteca"]}),e.jsxs(ue,{type:"button",$variant:"primary",onClick:oe,children:[e.jsx(ft,{}),"Nova sessão"]})]})]}),B&&e.jsx(Ie,{role:"alert",style:{color:"var(--error)",padding:14},children:B}),je&&e.jsx(Ie,{role:"status",style:{color:"var(--primary-strong)",padding:14},children:je}),e.jsxs(t3,{"aria-label":"Resumo do progresso de inglês",children:[e.jsxs(Ku,{children:[e.jsx("span",{children:e.jsx(Kr,{})}),e.jsxs("div",{children:[e.jsx("small",{children:"Hoje"}),e.jsxs("strong",{children:[(l==null?void 0:l.minutes_today)??0," min"]}),e.jsxs("p",{children:[(l==null?void 0:l.minutes_remaining_today)??p," min para a meta"]})]})]}),e.jsxs(Ku,{children:[e.jsx("span",{children:e.jsx(Mi,{})}),e.jsxs("div",{children:[e.jsx("small",{children:"Meta diária"}),e.jsxs("strong",{children:[p," min"]}),e.jsx(ak,{children:e.jsx("div",{style:{width:`${Math.min((l==null?void 0:l.goal_progress_percent)??0,100)}%`}})})]})]}),e.jsxs(Ku,{children:[e.jsx("span",{children:e.jsx(He,{})}),e.jsxs("div",{children:[e.jsx("small",{children:"Ritmo dos últimos dias"}),e.jsxs("strong",{children:[T.reduce((U,de)=>U+de.sessions,0)," sessões"]}),e.jsxs("p",{children:[T.reduce((U,de)=>U+de.total_minutes,0)," minutos estudados"]})]})]})]}),e.jsxs(r3,{children:[e.jsxs(Ie,{children:[e.jsxs(Te,{children:[e.jsx(He,{size:19}),"Progresso diário"]}),T.length?e.jsx(n3,{"aria-label":"Minutos estudados por dia",children:T.slice(-7).map(U=>{const de=U.study_date.slice(0,10);return e.jsxs(a3,{title:`${Xu(de)}: ${U.total_minutes} minutos`,children:[e.jsx("strong",{children:U.total_minutes}),e.jsx(i3,{children:e.jsx(s3,{$height:Math.max(U.total_minutes?8:3,U.total_minutes/ie*100),$today:de===y1(new Date)})}),e.jsx(o3,{children:Xu(de).split(",")[0]})]},de)})}):e.jsxs(Ve,{children:[e.jsx(He,{}),e.jsx("p",{children:"Seu resumo aparecerá aqui assim que carregar."})]})]}),e.jsxs(Ie,{children:[e.jsxs(Te,{children:[e.jsx(Mi,{size:19}),"Sua meta diária"]}),e.jsx("p",{style:{margin:"0 0 16px",color:"var(--muted)",fontSize:12,lineHeight:1.55},children:"Escolha quantos minutos quer dedicar ao inglês por dia."}),e.jsx(l3,{onSubmit:U=>{E(U)},children:e.jsxs("div",{children:[e.jsxs(ne,{htmlFor:"daily-goal",children:["Minutos por dia",e.jsx("input",{id:"daily-goal",type:"number",min:1,max:1440,step:1,value:m,onChange:U=>x(U.target.value),required:!0})]}),e.jsxs(ue,{type:"submit",$variant:"primary",disabled:F,children:[F?e.jsx(Je,{}):e.jsx(Dr,{}),"Salvar"]})]})})]})]}),e.jsxs(Ie,{children:[e.jsxs(Te,{children:[e.jsx(Tr,{size:19}),"Sessões de estudo"]}),e.jsx(Ii,{open:C,title:R?"Editar sessão":"Planejar sessão",icon:R?e.jsx(Lr,{size:18}):e.jsx(ft,{size:18}),busy:F,onClose:he,children:e.jsxs(g3,{onSubmit:U=>{H(U)},children:[e.jsxs(ne,{htmlFor:"session-title",children:["Título *",e.jsx("input",{id:"session-title",maxLength:200,value:z.title,onChange:U=>O(de=>({...de,title:U.target.value})),placeholder:"Ex.: Prática de listening",required:!0})]}),e.jsxs(ne,{htmlFor:"session-date",children:["Data *",e.jsx("input",{id:"session-date",type:"date",value:z.study_date,onChange:U=>O(de=>({...de,study_date:U.target.value})),required:!0})]}),e.jsxs(ne,{htmlFor:"session-time",children:["Horário",e.jsx("input",{id:"session-time",type:"time",value:z.study_time,onChange:U=>O(de=>({...de,study_time:U.target.value}))})]}),e.jsxs(ne,{htmlFor:"session-duration",children:["Duração (minutos)",e.jsx("input",{id:"session-duration",type:"number",min:1,max:1440,step:1,value:z.duration_minutes,onChange:U=>O(de=>({...de,duration_minutes:U.target.value})),required:!0})]}),e.jsxs(ne,{htmlFor:"session-topic",children:["Tópico",e.jsx("input",{id:"session-topic",maxLength:100,value:z.topic,onChange:U=>O(de=>({...de,topic:U.target.value})),placeholder:"Ex.: Conversação"})]}),e.jsxs(ne,{htmlFor:"session-status",children:["Status",e.jsxs("select",{id:"session-status",value:z.status,onChange:U=>O(de=>({...de,status:U.target.value})),children:[e.jsx("option",{value:"planejado",children:"Planejado"}),e.jsx("option",{value:"concluido",children:"Concluído"}),e.jsx("option",{value:"cancelado",children:"Cancelado"})]})]}),e.jsxs(ne,{htmlFor:"session-material",children:["Link do material",e.jsx("input",{id:"session-material",type:"url",maxLength:2048,value:z.material_url,onChange:U=>O(de=>({...de,material_url:U.target.value})),placeholder:"https://..."})]}),e.jsxs(ne,{htmlFor:"session-content",children:["Anotações",e.jsx("textarea",{id:"session-content",maxLength:5e4,value:z.content,onChange:U=>O(de=>({...de,content:U.target.value})),placeholder:"Registre expressões, dúvidas e aprendizados..."})]}),e.jsxs(v3,{children:[e.jsxs(ue,{type:"button",onClick:he,disabled:F,children:[e.jsx(er,{}),"Cancelar"]}),e.jsxs(ue,{type:"submit",$variant:"primary",disabled:F,children:[F?e.jsx(Je,{}):e.jsx(Dr,{}),R?"Salvar alterações":"Criar sessão"]})]})]})}),e.jsxs(c3,{onSubmit:b,children:[e.jsxs(ne,{htmlFor:"filter-from",children:["De",e.jsx("input",{id:"filter-from",type:"date",value:w.from,onChange:U=>S(de=>({...de,from:U.target.value}))})]}),e.jsxs(ne,{htmlFor:"filter-to",children:["Até",e.jsx("input",{id:"filter-to",type:"date",value:w.to,onChange:U=>S(de=>({...de,to:U.target.value}))})]}),e.jsxs(ne,{htmlFor:"filter-status",children:["Status",e.jsxs("select",{id:"filter-status",value:w.status,onChange:U=>S(de=>({...de,status:U.target.value})),children:[e.jsx("option",{value:"",children:"Todos"}),e.jsx("option",{value:"planejado",children:"Planejado"}),e.jsx("option",{value:"concluido",children:"Concluído"}),e.jsx("option",{value:"cancelado",children:"Cancelado"})]})]}),e.jsxs(ue,{type:"submit",children:[e.jsx(He,{}),"Filtrar"]})]}),J?e.jsxs(Ve,{children:[e.jsx(Je,{}),e.jsx("p",{children:"Carregando sessões..."})]}):ve.length?e.jsx(d3,{children:ve.map(U=>e.jsxs(u3,{children:[e.jsxs(p3,{children:[e.jsx("h3",{children:U.title}),U.content&&e.jsx("p",{children:U.content}),e.jsxs(f3,{children:[e.jsxs("span",{children:[e.jsx(He,{}),Xu(U.study_date)]}),zp(U.study_time)&&e.jsxs("span",{children:[e.jsx(Kr,{}),zp(U.study_time)]}),e.jsxs("span",{children:[e.jsx(Kr,{}),U.duration_minutes," min"]}),U.topic&&e.jsxs("span",{children:[e.jsx(Sp,{}),U.topic]}),U.material_url&&e.jsxs("a",{href:U.material_url,target:"_blank",rel:"noreferrer",children:[e.jsx(ec,{}),"Material"]})]})]}),e.jsxs(h3,{children:[e.jsxs(m3,{$status:U.status,children:[U.status==="concluido"&&e.jsx(Dr,{size:12}),w3[U.status]]}),e.jsxs(x3,{children:[U.status==="planejado"&&e.jsx(Yu,{type:"button","aria-label":`Concluir ${U.title}`,title:"Marcar como concluído",onClick:()=>{ce(U)},children:e.jsx(Dr,{})}),e.jsx(Yu,{type:"button","aria-label":`Editar ${U.title}`,title:"Editar sessão",onClick:()=>me(U),children:e.jsx(Lr,{})}),e.jsx(Yu,{type:"button","data-danger":"true","aria-label":`Excluir ${U.title}`,title:"Excluir sessão",onClick:()=>I(U),children:e.jsx(mr,{})})]})]})]},String(U.id)))}):i?e.jsxs(Ve,{children:[e.jsx(Tr,{size:30}),e.jsx("h3",{children:"Nenhuma sessão encontrada"}),e.jsx("p",{children:"Planeje sua próxima sessão e comece a acompanhar seu progresso."}),e.jsxs(ue,{type:"button",$variant:"primary",onClick:oe,children:[e.jsx(ft,{}),"Nova sessão"]})]}):null,ye&&ye.total>0&&e.jsxs(y3,{children:[e.jsxs("span",{children:[ye.total," sessões · página ",ye.page," de ",Math.max(ye.totalPages,1)]}),e.jsxs("div",{style:{display:"flex",gap:7},children:[e.jsx(ue,{type:"button",disabled:!ye.hasPreviousPage||J,onClick:()=>j(U=>({...U,page:Math.max((U.page??1)-1,1)})),children:"Anterior"}),e.jsxs(ue,{type:"button",disabled:!ye.hasNextPage||J,onClick:()=>j(U=>({...U,page:(U.page??1)+1})),children:["Próxima",e.jsx(i_,{size:14})]})]})]})]}),e.jsx(jc,{open:G!==null,title:"Excluir sessão de estudo?",description:G?`A sessão “${G.title}” será removida permanentemente.`:"",confirmLabel:"Excluir sessão",busy:k,onCancel:()=>{k||I(null)},onConfirm:()=>{re()}})]})}const k3=h.div`
  display: grid;
  gap: 20px;
`,S3=h.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 13px;
  @media (max-width: 720px) { grid-template-columns: 1fr; }
`,qs=h(Ie)`
  padding: 18px;
  small { display: block; color: var(--muted); font-size: 11px; }
  strong { display: block; margin-top: 4px; color: var(--text); font-size: 23px; }
`,C3=h.div`
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) minmax(250px, .6fr);
  gap: 18px;
  align-items: start;
  @media (max-width: 900px) { grid-template-columns: 1fr; }
`,vg=h.div`
  display: grid;
  gap: 6px;
  margin-bottom: 13px;
  > div:first-child { display: flex; justify-content: space-between; gap: 8px; color: var(--text); font-size: 12px; }
  > div:first-child span { color: var(--muted); }
`,yg=h.div`
  height: 8px;
  overflow: hidden;
  border-radius: 999px;
  background: var(--surface-raised);
  > div { height: 100%; border-radius: inherit; background: var(--primary); }
`,E3=h.form`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr)) auto;
  align-items: end;
  gap: 10px;
  padding: 15px;
  margin-bottom: 17px;
  border: 1px solid var(--border);
  border-radius: 14px;
  background: var(--surface-raised);
  ${ne} { margin: 0; }
  @media (max-width: 900px) { grid-template-columns: 1fr 1fr; }
  @media (max-width: 480px) { grid-template-columns: 1fr; }
`,$3=h.div`
  display: grid;
  gap: 11px;
`,R3=h.article`
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
`,P3=h.div`
  display: flex;
  flex-wrap: wrap;
  gap: 7px 14px;
  margin-top: 10px;
  color: var(--muted);
  font-size: 11px;
  span { display: inline-flex; align-items: center; gap: 5px; }
  svg { width: 14px; height: 14px; }
`,z3=h.div`
  display: grid;
  justify-items: end;
  align-content: space-between;
  gap: 12px;
  > strong { color: var(--text); font-size: 18px; }
  @media (max-width: 620px) { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; }
`,N3=h.div`
  display: flex;
  gap: 6px;
`,Ju=h.button`
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
`,M3=h.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 14px;
  ${ne}:first-child, ${ne}:last-of-type { grid-column: 1 / -1; }
  @media (max-width: 620px) { grid-template-columns: 1fr; ${ne} { grid-column: auto; } }
`,T3=h.div`
  grid-column: 1 / -1;
  display: flex;
  justify-content: flex-end;
  gap: 9px;
`,A3=h.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: 16px;
  color: var(--muted);
  font-size: 12px;
`,D3={compra:"Compra",fixa:"Fixa mensal"},F3=new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"});function ca(r){return F3.format(Number(r)||0)}function Np(){const r=new Date;return`${r.getFullYear()}-${String(r.getMonth()+1).padStart(2,"0")}`}function L3(){const r=new Date;return`${Np()}-${String(r.getDate()).padStart(2,"0")}`}function O3(r){return new Date(`${r.slice(0,10)}T12:00:00`).toLocaleDateString("pt-BR")}function jg(){return{name:"",expense_type:"compra",category:"",amount:"",expense_date:L3(),due_day:"",is_active:!0,notes:""}}function I3(r){var i;return{name:r.name,expense_type:r.expense_type,category:r.category,amount:String(Number(r.amount)),expense_date:((i=r.expense_date)==null?void 0:i.slice(0,10))??"",due_day:r.due_day==null?"":String(r.due_day),is_active:r.is_active,notes:r.notes??""}}function B3(r){const i=Number(r.amount.replace(",","."));if(!Number.isFinite(i)||i<=0)throw new Error("Informe um valor maior que zero.");const s={name:r.name.trim(),expense_type:r.expense_type,amount:i,is_active:r.is_active,notes:r.notes.trim()||null};if(r.category.trim()&&(s.category=r.category.trim()),r.expense_type==="compra"){if(!r.expense_date)throw new Error("Informe a data da compra.");s.expense_date=r.expense_date}else{const l=Number(r.due_day);if(!Number.isInteger(l)||l<1||l>31)throw new Error("O dia de vencimento deve ser de 1 a 31.");s.due_day=l}return s}function El(r,i){var s,l;return r instanceof Error&&!xt.isAxiosError(r)?r.message:xt.isAxiosError(r)&&((l=(s=r.response)==null?void 0:s.data)==null?void 0:l.error)||i}function q3(){var ce;const[r,i]=v.useState(),[s,l]=v.useState(),[c,p]=v.useState([]),[f,m]=v.useState(Np()),[x,_]=v.useState({page:1,limit:20}),[j,w]=v.useState({type:"",category:"",active:"",search:""}),[S,z]=v.useState(jg),[O,R]=v.useState(null),[A,C]=v.useState(!1),[$,G]=v.useState(null),[I,J]=v.useState(!0),[Q,F]=v.useState(!1),[ae,k]=v.useState(""),[y,B]=v.useState(""),[le,je]=v.useState(0);v.useEffect(()=>{let T=!0;return J(!0),k(""),Promise.all([Yw({...x,month:f}),Jw(f),Xw()]).then(([ie,ve,ye])=>{T&&(i(ie),l(ve),p(ye))}).catch(ie=>{T&&k(El(ie,"Não foi possível carregar as despesas."))}).finally(()=>{T&&J(!1)}),()=>{T=!1}},[x,f,le]);function we(){R(null),z(jg()),C(!0)}const Pe=v.useCallback(()=>C(!1),[]);function K(T){R(T),z(I3(T)),C(!0)}async function he(T){T.preventDefault(),k(""),B(""),F(!0);try{const ie=B3(S);O?await gx(O.id,ie):await Zw(ie),C(!1),R(null),B(O?"Despesa atualizada.":"Despesa cadastrada."),je(ve=>ve+1)}catch(ie){k(El(ie,"Não foi possível salvar a despesa."))}finally{F(!1)}}async function oe(T){k(""),B("");try{await gx(T.id,{is_active:!T.is_active}),je(ie=>ie+1)}catch(ie){k(El(ie,"Não foi possível alterar a despesa."))}}async function me(){if($){k(""),B("");try{await e2($.id),B("Despesa removida."),je(T=>T+1)}catch(T){k(El(T,"Não foi possível excluir a despesa."))}finally{G(null)}}}function H(T){T.preventDefault(),_({type:j.type||void 0,category:j.category||void 0,active:j.active?j.active==="true":void 0,search:j.search.trim()||void 0,page:1,limit:20})}const E=(r==null?void 0:r.data)??[],b=r==null?void 0:r.pagination,re=Number(s==null?void 0:s.total)||0;return e.jsxs(k3,{children:[e.jsxs(yc,{children:[e.jsxs("div",{children:[e.jsxs("span",{children:[e.jsx(Cp,{size:14})," Controle de despesas"]}),e.jsx("h1",{children:"Para onde vai seu dinheiro."}),e.jsx("p",{children:"Registre compras e contas fixas mensais e veja quanto cada categoria pesa no seu mês."})]}),e.jsxs(ue,{type:"button",$variant:"primary",onClick:we,children:[e.jsx(ft,{}),"Nova despesa"]})]}),ae&&e.jsx(Ie,{role:"alert",style:{color:"var(--error)",padding:14},children:ae}),y&&e.jsx(Ie,{role:"status",style:{color:"var(--primary-strong)",padding:14},children:y}),e.jsxs(S3,{"aria-label":"Resumo das despesas do mês",children:[e.jsxs(qs,{children:[e.jsx("small",{children:"Contas fixas ativas"}),e.jsx("strong",{children:ca(s==null?void 0:s.fixed_total)})]}),e.jsxs(qs,{children:[e.jsx("small",{children:"Compras do mês"}),e.jsx("strong",{children:ca(s==null?void 0:s.purchases_total)})]}),e.jsxs(qs,{children:[e.jsx("small",{children:"Total do mês"}),e.jsx("strong",{children:ca(s==null?void 0:s.total)})]}),(s==null?void 0:s.comparison)&&(()=>{const T=Number(s.comparison.difference)||0,ie=s.comparison.change_percentage;return e.jsxs(qs,{children:[e.jsxs("small",{children:["Vs. mês anterior (",s.comparison.previous_month,")"]}),e.jsxs("strong",{style:{color:T>0?"var(--error)":T<0?"var(--primary-strong)":void 0},children:[T>0?"+":"",ca(T),ie==null?"":` (${Number(ie)>0?"+":""}${Number(ie).toFixed(2)}%)`]})]})})(),(s==null?void 0:s.top_category)&&e.jsxs(qs,{children:[e.jsxs("small",{children:["Maior gasto: ",s.top_category.category]}),e.jsxs("strong",{children:[ca(s.top_category.total)," (",Number(s.top_category.percentage).toFixed(2),"%)"]})]})]}),e.jsxs(C3,{children:[e.jsxs(Ie,{children:[e.jsxs(Te,{children:[e.jsx(Va,{size:19}),"Despesas"]}),e.jsx(Ii,{open:A,title:O?"Editar despesa":"Nova despesa",icon:O?e.jsx(Lr,{size:18}):e.jsx(ft,{size:18}),busy:Q,onClose:Pe,children:e.jsxs(M3,{onSubmit:T=>{he(T)},children:[e.jsxs(ne,{htmlFor:"expense-name",children:["Nome *",e.jsx("input",{id:"expense-name",maxLength:160,value:S.name,onChange:T=>z(ie=>({...ie,name:T.target.value})),placeholder:"Ex.: Aluguel",required:!0})]}),e.jsxs(ne,{htmlFor:"expense-type",children:["Tipo *",e.jsxs("select",{id:"expense-type",value:S.expense_type,onChange:T=>z(ie=>({...ie,expense_type:T.target.value})),children:[e.jsx("option",{value:"compra",children:"Compra (pontual)"}),e.jsx("option",{value:"fixa",children:"Fixa (mensal)"})]})]}),e.jsxs(ne,{htmlFor:"expense-amount",children:["Valor (R$) *",e.jsx("input",{id:"expense-amount",type:"number",min:.01,step:"0.01",value:S.amount,onChange:T=>z(ie=>({...ie,amount:T.target.value})),required:!0})]}),S.expense_type==="compra"?e.jsxs(ne,{htmlFor:"expense-date",children:["Data da compra *",e.jsx("input",{id:"expense-date",type:"date",value:S.expense_date,onChange:T=>z(ie=>({...ie,expense_date:T.target.value})),required:!0})]}):e.jsxs(ne,{htmlFor:"expense-due",children:["Dia do vencimento *",e.jsx("input",{id:"expense-due",type:"number",min:1,max:31,step:1,value:S.due_day,onChange:T=>z(ie=>({...ie,due_day:T.target.value})),required:!0})]}),e.jsxs(ne,{htmlFor:"expense-category",children:["Categoria",e.jsx("input",{id:"expense-category",list:"expense-categories",maxLength:60,value:S.category,onChange:T=>z(ie=>({...ie,category:T.target.value})),placeholder:"Outros"}),e.jsx("datalist",{id:"expense-categories",children:c.map(T=>e.jsx("option",{value:T.category},T.category))})]}),e.jsxs(ne,{htmlFor:"expense-active",children:["Situação",e.jsxs("select",{id:"expense-active",value:String(S.is_active),onChange:T=>z(ie=>({...ie,is_active:T.target.value==="true"})),children:[e.jsx("option",{value:"true",children:"Ativa"}),e.jsx("option",{value:"false",children:"Pausada"})]})]}),e.jsxs(ne,{htmlFor:"expense-notes",children:["Observações",e.jsx("textarea",{id:"expense-notes",maxLength:2e3,value:S.notes,onChange:T=>z(ie=>({...ie,notes:T.target.value}))})]}),e.jsxs(T3,{children:[e.jsxs(ue,{type:"button",onClick:Pe,disabled:Q,children:[e.jsx(er,{}),"Cancelar"]}),e.jsxs(ue,{type:"submit",$variant:"primary",disabled:Q,children:[Q?e.jsx(Je,{}):e.jsx(Dr,{}),O?"Salvar alterações":"Cadastrar"]})]})]})}),e.jsxs(E3,{onSubmit:H,children:[e.jsxs(ne,{htmlFor:"filter-month",children:["Mês das compras",e.jsx("input",{id:"filter-month",type:"month",value:f,onChange:T=>{m(T.target.value||Np()),_(ie=>({...ie,page:1}))}})]}),e.jsxs(ne,{htmlFor:"filter-type",children:["Tipo",e.jsxs("select",{id:"filter-type",value:j.type,onChange:T=>w(ie=>({...ie,type:T.target.value})),children:[e.jsx("option",{value:"",children:"Todos"}),e.jsx("option",{value:"compra",children:"Compras"}),e.jsx("option",{value:"fixa",children:"Fixas"})]})]}),e.jsxs(ne,{htmlFor:"filter-category",children:["Categoria",e.jsxs("select",{id:"filter-category",value:j.category,onChange:T=>w(ie=>({...ie,category:T.target.value})),children:[e.jsx("option",{value:"",children:"Todas"}),c.map(T=>e.jsx("option",{value:T.category,children:T.category},T.category))]})]}),e.jsxs(ne,{htmlFor:"filter-search",children:["Buscar",e.jsx("input",{id:"filter-search",value:j.search,onChange:T=>w(ie=>({...ie,search:T.target.value})),placeholder:"Nome"})]}),e.jsxs(ue,{type:"submit",children:[e.jsx(He,{}),"Filtrar"]})]}),I?e.jsxs(Ve,{children:[e.jsx(Je,{}),e.jsx("p",{children:"Carregando despesas..."})]}):E.length?e.jsx($3,{children:E.map(T=>e.jsxs(R3,{$inactive:!T.is_active,children:[e.jsxs("div",{children:[e.jsx("h3",{children:T.name}),T.notes&&e.jsx("p",{children:T.notes}),e.jsxs(P3,{children:[e.jsxs("span",{children:[T.expense_type==="fixa"?e.jsx(z_,{}):e.jsx(M_,{}),D3[T.expense_type]]}),e.jsx("span",{children:T.category}),T.expense_type==="fixa"&&T.due_day!=null&&e.jsxs("span",{children:[e.jsx(He,{}),"Vence dia ",T.due_day]}),T.expense_type==="compra"&&T.expense_date&&e.jsxs("span",{children:[e.jsx(He,{}),O3(T.expense_date)]}),!T.is_active&&e.jsx("span",{children:"Pausada"})]})]}),e.jsxs(z3,{children:[e.jsx("strong",{children:ca(T.amount)}),e.jsxs(N3,{children:[T.expense_type==="fixa"&&e.jsx(Ju,{type:"button",title:T.is_active?"Pausar":"Reativar","aria-label":`${T.is_active?"Pausar":"Reativar"} ${T.name}`,onClick:()=>{oe(T)},children:T.is_active?e.jsx(Jv,{}):e.jsx(Zv,{})}),e.jsx(Ju,{type:"button",title:"Editar","aria-label":`Editar ${T.name}`,onClick:()=>K(T),children:e.jsx(Lr,{})}),e.jsx(Ju,{type:"button","data-danger":"true",title:"Excluir","aria-label":`Excluir ${T.name}`,onClick:()=>G(T),children:e.jsx(mr,{})})]})]})]},String(T.id)))}):r?e.jsxs(Ve,{children:[e.jsx(Cp,{size:30}),e.jsx("h3",{children:"Nenhuma despesa encontrada"}),e.jsx("p",{children:"Cadastre uma compra ou conta fixa para começar."}),e.jsxs(ue,{type:"button",$variant:"primary",onClick:we,children:[e.jsx(ft,{}),"Nova despesa"]})]}):null,b&&b.total>0&&e.jsxs(A3,{children:[e.jsxs("span",{children:[b.total," despesas · página ",b.page," de ",Math.max(b.totalPages,1)]}),e.jsxs("div",{style:{display:"flex",gap:7},children:[e.jsx(ue,{type:"button",disabled:!b.hasPreviousPage||I,onClick:()=>_(T=>({...T,page:Math.max((T.page??1)-1,1)})),children:"Anterior"}),e.jsx(ue,{type:"button",disabled:!b.hasNextPage||I,onClick:()=>_(T=>({...T,page:(T.page??1)+1})),children:"Próxima"})]})]})]}),e.jsxs(Ie,{children:[e.jsxs(Te,{children:[e.jsx(Va,{size:19}),"Por categoria"]}),s!=null&&s.by_category.length?s.by_category.map(T=>{const ie=Number(T.total)||0;return e.jsxs(vg,{children:[e.jsxs("div",{children:[e.jsx("strong",{children:T.category}),e.jsxs("span",{children:[ca(ie),T.percentage!==void 0?` · ${Number(T.percentage).toFixed(1)}%`:""]})]}),e.jsx(yg,{children:e.jsx("div",{style:{width:`${re>0?Math.min(ie/re*100,100):0}%`}})})]},T.category)}):e.jsx("p",{style:{margin:0,color:"var(--muted)",fontSize:12},children:"Sem despesas neste mês."}),(ce=s==null?void 0:s.daily_spending)!=null&&ce.length?(()=>{const T=Math.max(...s.daily_spending.map(ie=>Number(ie.total)||0),0);return e.jsxs(e.Fragment,{children:[e.jsxs(Te,{style:{marginTop:18},children:[e.jsx(Va,{size:19}),"Compras por dia"]}),s.daily_spending.map(ie=>{const ve=Number(ie.total)||0;return e.jsxs(vg,{children:[e.jsxs("div",{children:[e.jsxs("strong",{children:[ie.date.slice(8,10),"/",ie.date.slice(5,7)]}),e.jsx("span",{children:ca(ve)})]}),e.jsx(yg,{children:e.jsx("div",{style:{width:`${T>0?ve/T*100:0}%`}})})]},ie.date)})]})})():null]})]}),e.jsx(jc,{open:$!==null,title:"Excluir despesa?",description:$?`“${$.name}” será removida permanentemente.`:"",confirmLabel:"Excluir",busy:!1,onConfirm:()=>{me()},onCancel:()=>G(null)})]})}const U3=new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL",maximumFractionDigits:0}),H3=new Intl.NumberFormat("pt-BR",{notation:"compact",maximumFractionDigits:1}),V3=new Intl.NumberFormat("pt-BR",{minimumFractionDigits:1,maximumFractionDigits:1});function ct(r){return U3.format(r)}function pa(r){const i=r.replace(/\D/g,"").replace(/^0+/,"").slice(0,13);if(!i)return"";const s=i.padStart(3,"0");return`R$ ${s.slice(0,-2).replace(/\B(?=(\d{3})+(?!\d))/g,".")},${s.slice(-2)}`}function Ti(r){return pa(String(Math.round(r*100)))}function fa(r){const i=r.replace(/\D/g,"");return i?Number(i)/100:0}function j1(r){return`R$ ${H3.format(r)}`}function Ze(r,i=!1){return`${i&&r>0?"+":""}${V3.format(r)}%`}const bg={carteira:"#0ea5e9",cdi:"#2563eb",poupanca:"#14b8a6",ibovespa:"#16a34a",sp500:"#8b5cf6",dolar:"#d97706",ouro:"#eab308",bitcoin:"#f97316"};function Zu(r){if(bg[r])return bg[r];let i=0;for(const s of r)i=(i*31+s.charCodeAt(0))%360;return`hsl(${i} 60% 50%)`}const W3=h.div`
  display: grid;
  gap: 20px;
`,G3=h.div`
  display: grid;
  grid-template-columns: 1.35fr repeat(3, minmax(0, 1fr));
  gap: 12px;
  @media (max-width: 1100px) { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  @media (max-width: 520px) { grid-template-columns: 1fr; }
`,$l=h(Ie)`
  display: flex;
  min-width: 0;
  min-height: 116px;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
  padding: 17px 19px;
  border-color: ${({$tone:r,$negative:i})=>r==="income"?"color-mix(in srgb, var(--success) 32%, var(--border))":r==="result"?`color-mix(in srgb, ${i?"var(--error)":"var(--success)"} 32%, var(--border))`:"var(--border)"};
  background: ${({$tone:r,$negative:i})=>r==="income"?"color-mix(in srgb, var(--success) 8%, var(--surface))":r==="result"?`color-mix(in srgb, ${i?"var(--error)":"var(--success)"} 6%, var(--surface))`:"var(--surface)"};
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
    color: ${({$tone:r,$negative:i})=>r==="income"?"var(--success)":r==="result"?i?"var(--error)":"var(--success)":"var(--text)"};
    font-size: clamp(18px, 2vw, 25px);
    font-variant-numeric: tabular-nums;
    letter-spacing: -.04em;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`,Rl=h.span`
  display: block;
  margin-top: 3px;
  color: var(--muted);
  font-size: 11px;
  line-height: 1.45;
`,wg=h.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 15px;
  ${Te} { margin: 0; }
  @media (max-width: 520px) {
    align-items: flex-start;
    flex-direction: column;
  }
`,Pl=h.p`
  margin: 6px 0 0;
  color: var(--muted);
  font-size: 12px;
  line-height: 1.5;
`,ep=h.span`
  flex: 0 0 auto;
  padding: 6px 10px;
  border: 1px solid var(--border);
  border-radius: 999px;
  color: var(--muted);
  background: var(--surface-raised);
  font-size: 11px;
  font-weight: 750;
`,Q3=h.div`
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(280px, .75fr);
  gap: 18px;
  align-items: start;
  @media (max-width: 960px) { grid-template-columns: 1fr; }
`,K3=h(Ie)`
  padding: 18px;
`,Y3=h.form`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr)) auto;
  align-items: end;
  gap: 10px;
  padding: 13px;
  margin-bottom: 17px;
  border: 1px solid var(--border);
  border-radius: 13px;
  background: var(--surface-raised);
  ${ne} { margin: 0; }
  @media (max-width: 1100px) { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  @media (max-width: 480px) { grid-template-columns: 1fr; }
`,X3=h.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  @media (max-width: 1100px) { grid-column: 1 / -1; justify-content: flex-end; }
  @media (max-width: 480px) {
    justify-content: stretch;
    button { flex: 1; }
  }
`,J3=h(Ie)`
  min-width: 0;
  padding: 19px;
`,Z3=h.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 10px;
  padding: 13px;
  margin: 14px 0 17px;
  border: 1px solid var(--border);
  border-radius: 13px;
  background: var(--surface-raised);
  ${ne} { margin: 0; }
  @media (max-width: 520px) { grid-template-columns: 1fr; }
`,e5=h.div`
  display: grid;
  gap: 12px;
`,t5=h.article`
  display: grid;
  gap: 14px;
  padding: 16px 17px;
  border: 1px solid var(--border);
  border-radius: 16px;
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
`,r5=h.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 14px;
  @media (max-width: 620px) { flex-direction: column; }
`,n5=h.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  min-width: 0;
`,a5=h.div`
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
`,i5=h.div`
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
`,s5=h.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 9px;
`,Fn=h.span`
  display: inline-flex;
  align-items: center;
  padding: 4px 8px;
  border: 1px solid var(--border);
  border-radius: 999px;
  color: var(--muted);
  background: var(--surface);
  font-size: 10px;
  font-weight: 700;
`,o5=h.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 10px;
  @media (max-width: 820px) { grid-template-columns: repeat(2, minmax(0, 1fr)); }
`,zl=h.div`
  padding: 11px 12px;
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
    color: ${({$accent:r})=>r==="result"?"var(--success)":r==="negative"?"var(--error)":r==="income"?"var(--primary-strong)":"var(--text)"};
    font-size: 14px;
    letter-spacing: -.02em;
  }
`,l5=h.div`
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
`,c5=h.div`
  display: flex;
  gap: 6px;
  margin-left: auto;
`,tp=h.button`
  display: grid;
  width: 34px;
  height: 34px;
  place-items: center;
  border: 1px solid var(--border);
  border-radius: 9px;
  color: var(--muted);
  background: var(--surface);
  cursor: pointer;
  &:hover { color: var(--primary); border-color: var(--primary); }
  &[data-danger='true']:hover { color: var(--error); background: var(--error-soft); }
  svg { width: 15px; height: 15px; }
`,d5=h.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 14px;
  ${ne}:last-of-type { grid-column: 1 / -1; }
  @media (max-width: 620px) { grid-template-columns: 1fr; ${ne} { grid-column: auto; } }
`,u5=h.div`
  grid-column: 1 / -1;
  display: flex;
  justify-content: flex-end;
  gap: 9px;
`,p5=h.p`
  grid-column: 1 / -1;
  margin: 0 0 12px;
  color: var(--muted);
  font-size: 12px;
`,f5=h.button`
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
`,h5=h.div`
  display: grid;
  gap: 12px;
`,m5=h.div`
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
`,x5=h.div`
  display: grid;
  gap: 9px;
  max-height: 52vh;
  overflow-y: auto;
  padding-right: 3px;
`,g5=h.article`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
  gap: 14px;
  padding: 13px 14px;
  border: 1px solid var(--border);
  border-radius: 13px;
  background: var(--surface-raised);
  @media (max-width: 520px) { grid-template-columns: 1fr; gap: 9px; }
`,v5=h.div`
  min-width: 0;
  h3 { margin: 0; color: var(--text); font-size: 14px; }
  p { margin: 4px 0 0; color: var(--muted); font-size: 12px; }
  small { display: block; margin-top: 7px; color: var(--muted); font-size: 11px; }
`,y5=h.div`
  text-align: right;
  strong { display: block; color: var(--primary-strong); font-size: 15px; font-variant-numeric: tabular-nums; white-space: nowrap; }
  small { display: block; margin-top: 3px; color: var(--muted); font-size: 10px; }
  @media (max-width: 520px) { text-align: left; }
`,j5=h.span`
  display: block;
  height: 8px;
  overflow: hidden;
  border-radius: 999px;
  background: var(--surface-raised);
  > span { display: block; height: 100%; border-radius: inherit; background: var(--primary); }
`,b5=h.div`
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
`,nc=[{id:"fii",label:"FII",default_frequency:"mensal",auto_quote:!0,quote_market:"b3",uses_fii_segment:!0},{id:"fiagro",label:"Fiagro",default_frequency:"mensal",auto_quote:!0,quote_market:"b3",uses_fii_segment:!0},{id:"acao",label:"Ação",default_frequency:"trimestral",auto_quote:!0,quote_market:"b3",uses_fii_segment:!1},{id:"bdr",label:"BDR",default_frequency:"trimestral",auto_quote:!0,quote_market:"b3",uses_fii_segment:!1},{id:"etf",label:"ETF",default_frequency:"trimestral",auto_quote:!0,quote_market:"b3",uses_fii_segment:!1},{id:"fundo",label:"Fundo",default_frequency:"mensal",auto_quote:!1,quote_market:null,uses_fii_segment:!1},{id:"tesouro",label:"Tesouro",default_frequency:"semestral",auto_quote:!1,quote_market:null,uses_fii_segment:!1},{id:"cdb",label:"CDB",default_frequency:"mensal",auto_quote:!1,quote_market:null,uses_fii_segment:!1},{id:"lci_lca",label:"LCI/LCA",default_frequency:"mensal",auto_quote:!1,quote_market:null,uses_fii_segment:!1},{id:"debenture",label:"Debênture",default_frequency:"semestral",auto_quote:!1,quote_market:null,uses_fii_segment:!1},{id:"previdencia",label:"Previdência",default_frequency:"mensal",auto_quote:!1,quote_market:null,uses_fii_segment:!1},{id:"cripto",label:"Cripto",default_frequency:"mensal",auto_quote:!0,quote_market:"crypto",uses_fii_segment:!1},{id:"acao_us",label:"Ação EUA",default_frequency:"trimestral",auto_quote:!0,quote_market:"us",uses_fii_segment:!1},{id:"renda_fixa",label:"Renda fixa",default_frequency:"mensal",auto_quote:!1,quote_market:null,uses_fii_segment:!1},{id:"outro",label:"Outro",default_frequency:"mensal",auto_quote:!1,quote_market:null,uses_fii_segment:!1}],Us={papel:"Papel",tijolo:"Tijolo",hibrido:"Híbrido"},rp={mensal:"Mensal",trimestral:"Trimestral",semestral:"Semestral",anual:"Anual"},b1=["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],w5=new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}),_g=new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL",minimumFractionDigits:2,maximumFractionDigits:4});function Sr(r){return w5.format(Number(r)||0)}const w1="dividends-price-refresh-day";function kg(){const r=new Date;return`${r.getFullYear()}-${String(r.getMonth()+1).padStart(2,"0")}`}function _1(){return new Date().toISOString().slice(0,10)}function _5(){try{return localStorage.getItem(w1)!==_1()}catch{return!0}}function k5(){try{localStorage.setItem(w1,_1())}catch{}}function S5(r){if(!r)return null;const i=new Date(r);return Number.isNaN(i.getTime())?null:i.toLocaleString("pt-BR",{dateStyle:"short",timeStyle:"short"})}function np(r){const[i,s,l]=r.slice(0,10).split("-").map(Number),c=new Date(i,s-1,l);return Number.isNaN(c.getTime())?r:c.toLocaleDateString("pt-BR",{dateStyle:"long"})}function C5(r){return new Intl.NumberFormat("pt-BR",{maximumFractionDigits:4}).format(Number(r)||0)}function ap(r){var l;const[i,s]=r.split("-");return`${((l=b1[Number(s)-1])==null?void 0:l.slice(0,3))??s}/${i}`}function Sg(r,i){const l=(i?r.find(c=>c.id===i):r[0])??nc.find(c=>c.id===i)??nc[0];return{ticker:"",name:"",asset_type:l.id,fii_segment:"",quantity:"",applied_amount:"",cdi_percent:"",investment_date:"",average_price:"",current_price:"",dividend_per_share:"",frequency:l.default_frequency,reference_month:"1",payment_day:"15",is_active:!0,notes:""}}function k1(r){var i;return{ticker:r.ticker,name:r.name??"",asset_type:r.asset_type,fii_segment:r.fii_segment??"",quantity:String(Number(r.quantity)),applied_amount:r.applied_amount==null?"":Ti(Number(r.applied_amount)),cdi_percent:r.cdi_percent==null?"":String(Number(r.cdi_percent)),investment_date:((i=r.investment_date)==null?void 0:i.slice(0,10))??"",average_price:Number(r.average_price)?Ti(Number(r.average_price)):"",current_price:r.current_price==null?"":Ti(Number(r.current_price)),dividend_per_share:Number(r.dividend_per_share)?Ti(Number(r.dividend_per_share)):"",frequency:r.frequency,reference_month:String(r.reference_month),payment_day:String(r.payment_day),is_active:r.is_active,notes:r.notes??""}}function E5(r,i=null){if(r.asset_type==="renda_fixa"){const x=fa(r.applied_amount),_=Number(r.cdi_percent.replace(",",".")),j=r.investment_date,w=j.split("-").map(Number),S=new Date(Date.UTC(w[0],w[1]-1,w[2]));if(!Number.isFinite(x)||x<=0)throw new Error("Informe um valor aplicado maior que zero.");if(!Number.isFinite(_)||_<0)throw new Error("O percentual do CDI não pode ser negativo.");if(!/^\d{4}-\d{2}-\d{2}$/.test(j)||Number.isNaN(S.getTime())||S.getUTCFullYear()!==w[0]||S.getUTCMonth()!==w[1]-1||S.getUTCDate()!==w[2])throw new Error("Informe uma data de investimento válida.");if(!r.cdi_percent.trim())throw new Error("Informe o percentual do CDI.");const z=Number(r.payment_day);if(!Number.isInteger(z)||z<1||z>31)throw new Error("O dia do pagamento deve ser de 1 a 31.");return{ticker:r.ticker.trim().toUpperCase(),name:r.name.trim()||null,asset_type:"renda_fixa",applied_amount:x,cdi_percent:_,investment_date:j,payment_day:z,is_active:r.is_active,notes:r.notes.trim()||null}}const s=Number(r.quantity.replace(",","."));if(!Number.isFinite(s)||s<=0)throw new Error("Informe uma quantidade de cotas maior que zero.");const l=fa(r.dividend_per_share);if(!Number.isFinite(l)||l<0)throw new Error("O provento por cota não pode ser negativo.");const c=Number(r.payment_day),p=fa(r.average_price);if(!Number.isFinite(p)||p<0)throw new Error("O preço médio não pode ser negativo.");const f=r.current_price?fa(r.current_price):null;if(f!==null&&(!Number.isFinite(f)||f<0))throw new Error("O preço atual não pode ser negativo.");if(!Number.isInteger(c)||c<1||c>31)throw new Error("O dia de pagamento deve ser de 1 a 31.");const m=!!(i!=null&&i.auto_price)&&r.current_price===k1(i).current_price;return{ticker:r.ticker.trim().toUpperCase(),name:r.name.trim()||null,asset_type:r.asset_type,fii_segment:r.fii_segment||null,quantity:s,average_price:p,...m?{}:{current_price:f},dividend_per_share:l,frequency:r.frequency,reference_month:Number(r.reference_month),payment_day:c,is_active:r.is_active,notes:r.notes.trim()||null}}function Hs(r,i){var s,l,c,p;return xt.isAxiosError(r)?((s=r.response)==null?void 0:s.status)===409?((l=r.response.data)==null?void 0:l.error)||"Você já cadastrou este ativo.":((p=(c=r.response)==null?void 0:c.data)==null?void 0:p.error)||i:r instanceof Error?r.message:i}function Cg({assetType:r}){const i=r==="renda_fixa",[s,l]=v.useState(nc),[c,p]=v.useState(),[f,m]=v.useState(),[x,_]=v.useState(null),[j,w]=v.useState(),[S,z]=v.useState(kg()),[O,R]=v.useState(12),[A,C]=v.useState("13.65"),[$,G]=v.useState(()=>({...r?{asset_type:r}:{},page:1,limit:20})),[I,J]=v.useState({asset_type:r??"",fii_segment:"",active:"",search:""}),[Q,F]=v.useState(()=>Sg(nc)),[ae,k]=v.useState(null),[y,B]=v.useState(!1),[le,je]=v.useState(null),[we,Pe]=v.useState(()=>new Set),[K,he]=v.useState(!0),[oe,me]=v.useState(!1),[H,E]=v.useState(""),[b,re]=v.useState(""),[ce,T]=v.useState(0),[ie,ve]=v.useState(!1),ye=v.useCallback(()=>B(!1),[]),U=v.useMemo(()=>new Map(s.map(M=>[M.id,M])),[s]),de=U.get(Q.asset_type)??s[0],st=!!(de!=null&&de.uses_fii_segment),et=Q.frequency!=="mensal";v.useEffect(()=>{let M=!0;return t2().then(_e=>{!M||!_e.length||l(_e)}).catch(()=>{}),()=>{M=!1}},[]),v.useEffect(()=>{let M=!0;he(!0);const _e=Number(A.replace(",",".")),Ge=!i||A.trim()!==""&&Number.isFinite(_e)&&_e>=0;return E(Ge?"":"Informe uma taxa CDI anual válida para carregar a projeção."),Promise.all([r2($),Ge?f2(S,O,i?_e:void 0):Promise.resolve(void 0),n2()]).then(([at,Ke,mt])=>{M&&(p(at),Ke&&m(Ke),w(mt))}).catch(at=>{M&&E(Hs(at,"Não foi possível carregar os dividendos."))}).finally(()=>{M&&he(!1)}),()=>{M=!1}},[$,S,O,A,i,ce]);const ot=v.useCallback(async M=>{const _e=!!(M!=null&&M.silent);ve(!0),_e||E("");try{const Ge=await p2();k5(),(!_e||Ge.updated_count>0||Ge.failed_count>0)&&re(Ge.failed_count?`${Ge.updated_count} cotação(ões) atualizada(s); ${Ge.failed_count} indisponível(is).`:Ge.updated_count?`${Ge.updated_count} cotação(ões) atualizada(s) automaticamente.`:"Cotações já estavam atualizadas."),T(at=>at+1)}catch(Ge){_e||E(Hs(Ge,"Não foi possível atualizar as cotações."))}finally{ve(!1)}},[]);v.useEffect(()=>{i||!_5()||ot({silent:!0})},[i,ot]);function tt(){k(null),F(Sg(s,r)),B(!0)}function tr(M){k(M),F(k1(M)),B(!0)}function Mt(M){const _e=U.get(M);F(Ge=>({...Ge,asset_type:M,frequency:(_e==null?void 0:_e.default_frequency)??Ge.frequency,fii_segment:_e!=null&&_e.uses_fii_segment?Ge.fii_segment:""}))}async function gt(M){var _e;M.preventDefault(),E(""),re(""),me(!0);try{const Ge=E5(Q,ae),at=ae?await vx(ae.id,Ge):await h2(Ge);if(i){const Ke=fa(Q.applied_amount),mt=Number(Q.cdi_percent.replace(",","."));if(!(Number.isFinite(Number(at.applied_amount))&&Math.abs(Number(at.applied_amount)-Ke)<.01&&Number.isFinite(Number(at.cdi_percent))&&Math.abs(Number(at.cdi_percent)-mt)<.005&&((_e=at.investment_date)==null?void 0:_e.slice(0,10))===Q.investment_date)){B(!1),k(null),T(Z=>Z+1),E("O servidor não confirmou o valor aplicado, o percentual do CDI e a data. Atualize/reinicie o backend antes de cadastrar novamente.");return}}B(!1),k(null),re(ae?"Ativo atualizado.":"Ativo cadastrado."),T(Ke=>Ke+1)}catch(Ge){E(Hs(Ge,"Não foi possível salvar o ativo."))}finally{me(!1)}}async function Ae(M){var Ge,at;const _e=String(M.id);if(!we.has(_e)){Pe(Ke=>new Set(Ke).add(_e)),E(""),re("");try{const Ke=await vx(M.id,{is_active:!M.is_active});if(M.asset_type==="renda_fixa"&&!(Number(Ke.applied_amount)===Number(M.applied_amount)&&Number(Ke.cdi_percent)===Number(M.cdi_percent)&&((Ge=Ke.investment_date)==null?void 0:Ge.slice(0,10))===((at=M.investment_date)==null?void 0:at.slice(0,10)))){T(Zr=>Zr+1),E("O servidor não preservou os dados da renda fixa ao alterar a situação. Atualize/reinicie o backend antes de tentar novamente.");return}T(mt=>mt+1)}catch(Ke){E(Hs(Ke,"Não foi possível alterar o ativo."))}finally{Pe(Ke=>{const mt=new Set(Ke);return mt.delete(_e),mt})}}}async function Xe(){if(le){E(""),re("");try{await m2(le.id),re("Ativo removido."),T(M=>M+1)}catch(M){E(Hs(M,"Não foi possível excluir o ativo."))}finally{je(null)}}}function se(M){M.preventDefault(),G({asset_type:r??(I.asset_type||void 0),fii_segment:I.fii_segment||void 0,active:I.active?I.active==="true":void 0,search:I.search.trim()||void 0,page:1,limit:20})}function Be(){J({asset_type:r??"",fii_segment:"",active:"",search:""}),G({...r?{asset_type:r}:{},page:1,limit:20})}function $t(M){var _e;return((_e=U.get(M))==null?void 0:_e.label)??String(M)}const Ut=(c==null?void 0:c.data)??[],vt=c==null?void 0:c.pagination,Rt=i&&f?(()=>{const M=f.months.map(Ge=>{const at=Ge.items.filter(Ke=>Ke.asset_type===r);return{...Ge,items:at,total:at.reduce((Ke,mt)=>Ke+(Number(mt.amount)||0),0)}}),_e=M.reduce((Ge,at)=>Ge+Number(at.total),0);return{...f,months:M,period_total:_e,monthly_average:f.months_count?_e/f.months_count:0}})():f,rt=j==null?void 0:j.by_asset_type.find(M=>M.key===r),nt=i&&j?{...j,holdings_count:(rt==null?void 0:rt.holdings_count)??0,invested_total:(rt==null?void 0:rt.invested_total)??0,current_total:(rt==null?void 0:rt.current_total)??0,profit_loss:(rt==null?void 0:rt.profit_loss)??0,profit_loss_percent:Number(rt==null?void 0:rt.invested_total)?Number(rt==null?void 0:rt.profit_loss)/Number(rt==null?void 0:rt.invested_total)*100:0}:j,pr=(Rt==null?void 0:Rt.months)??[],pn=Math.max(...pr.map(M=>Number(M.total)||0),1),rr=Number(nt==null?void 0:nt.profit_loss)||0,nr=i?null:S5(j==null?void 0:j.prices_updated_at),fn=!!($.asset_type||$.fii_segment||$.active!==void 0||$.search);return e.jsxs(W3,{children:[e.jsxs(yc,{children:[e.jsxs("div",{children:[e.jsxs("span",{children:[e.jsx(Ni,{size:14}),i?"Renda fixa":"Dividendos"]}),e.jsx("h1",{children:i?"Acompanhe seus investimentos de renda fixa.":"Sua renda passiva, mês a mês."}),e.jsx("p",{children:i?"Cadastre cada produto e acompanhe o capital investido, o valor atual e a estimativa de rendimento mensal.":"Cotações de ativos com auto cotação atualizam sozinhas uma vez por dia. O provento projetado é uma estimativa, não uma garantia de pagamento."}),nr&&e.jsxs("p",{style:{marginTop:8,color:"var(--muted)",fontSize:12},children:["Última atualização de cotações: ",nr]})]}),e.jsxs("div",{style:{display:"flex",gap:10,flexWrap:"wrap"},children:[!i&&e.jsxs(ue,{type:"button",onClick:()=>void ot({force:!0}),disabled:ie,children:[e.jsx(e1,{}),ie?"Atualizando...":"Atualizar cotações"]}),e.jsxs(ue,{type:"button",$variant:"primary",onClick:tt,children:[e.jsx(ft,{}),i?"Novo investimento":"Novo ativo"]})]})]}),H&&e.jsx(Ie,{role:"alert",style:{color:"var(--error)",padding:14},children:H}),b&&e.jsx(Ie,{role:"status",style:{color:"var(--primary-strong)",padding:14},children:b}),e.jsxs(G3,{"aria-label":"Resumo da carteira",children:[e.jsx($l,{$tone:"income",children:e.jsxs("div",{children:[e.jsxs("small",{children:[e.jsx(Ni,{size:14}),"Estimativa mensal"]}),e.jsx("strong",{children:Sr(Rt==null?void 0:Rt.monthly_average)}),e.jsxs(Rl,{children:[Sr(Rt==null?void 0:Rt.period_total)," no período · ",O," meses"]})]})}),e.jsx($l,{children:e.jsxs("div",{children:[e.jsx("small",{children:"Total investido"}),e.jsx("strong",{children:Sr(nt==null?void 0:nt.invested_total)}),e.jsx(Rl,{children:"Capital aplicado"})]})}),e.jsx($l,{children:e.jsxs("div",{children:[e.jsx("small",{children:"Valor atual da carteira"}),e.jsx("strong",{children:Sr(nt==null?void 0:nt.current_total)}),e.jsx(Rl,{children:"Valor de mercado da carteira"})]})}),e.jsx($l,{$tone:"result",$negative:rr<0,children:e.jsxs("div",{children:[e.jsxs("small",{children:[e.jsx(Wl,{size:14}),"Resultado"]}),e.jsx("strong",{children:Sr(nt==null?void 0:nt.profit_loss)}),e.jsx(Rl,{children:(nt==null?void 0:nt.profit_loss_percent)!=null?`${rr<0?"":"+"}${Number(nt.profit_loss_percent).toFixed(2)}% sobre o investido`:"Variação da carteira"})]})})]}),e.jsxs(Q3,{children:[e.jsxs(K3,{children:[e.jsxs(wg,{children:[e.jsxs("div",{children:[e.jsxs(Te,{children:[e.jsx(Ni,{size:19}),"Meus ativos"]}),e.jsx(Pl,{children:"Consulte valores, proventos e situação de cada posição."})]}),e.jsxs(ep,{children:[Number(nt==null?void 0:nt.holdings_count)||(vt==null?void 0:vt.total)||0," ativos"]})]}),e.jsxs(Y3,{onSubmit:se,children:[!i&&e.jsxs(ne,{htmlFor:"div-filter-type",children:["Tipo",e.jsxs("select",{id:"div-filter-type",value:I.asset_type,onChange:M=>J(_e=>({..._e,asset_type:M.target.value})),children:[e.jsx("option",{value:"",children:"Todos"}),s.map(M=>e.jsx("option",{value:M.id,children:M.label},M.id))]})]}),e.jsxs(ne,{htmlFor:"div-filter-segment",children:["Segmento",e.jsxs("select",{id:"div-filter-segment",value:I.fii_segment,onChange:M=>J(_e=>({..._e,fii_segment:M.target.value})),children:[e.jsx("option",{value:"",children:"Todos"}),Object.keys(Us).map(M=>e.jsx("option",{value:M,children:Us[M]},M))]})]}),e.jsxs(ne,{htmlFor:"div-filter-active",children:["Situação",e.jsxs("select",{id:"div-filter-active",value:I.active,onChange:M=>J(_e=>({..._e,active:M.target.value})),children:[e.jsx("option",{value:"",children:"Todos"}),e.jsx("option",{value:"true",children:"Ativos"}),e.jsx("option",{value:"false",children:"Inativos"})]})]}),e.jsxs(ne,{htmlFor:"div-filter-search",children:["Buscar ativo",e.jsx("input",{id:"div-filter-search",type:"search",value:I.search,onChange:M=>J(_e=>({..._e,search:M.target.value})),placeholder:"Ticker ou nome"})]}),e.jsxs(X3,{children:[e.jsx(ue,{type:"submit",children:"Aplicar filtros"}),fn&&e.jsx(ue,{type:"button",onClick:Be,children:"Limpar"})]})]}),K?e.jsxs(Ve,{children:[e.jsx(Je,{}),e.jsx("p",{children:"Carregando ativos..."})]}):Ut.length?e.jsx(e5,{children:Ut.map(M=>{const _e=Number(M.applied_amount??M.invested_amount??0)*(Number(M.cdi_percent)||0)/100*Number(A.replace(",",".")||0)/100/12,Ge=M.asset_type==="renda_fixa"?_e:(Number(M.quantity)||0)*(Number(M.dividend_per_share)||0),Ke=(Number(M.profit_loss)||0)<0,mt=M.ticker.slice(0,4);return e.jsxs(t5,{$inactive:!M.is_active,children:[e.jsxs(r5,{children:[e.jsxs(n5,{children:[e.jsx(a5,{title:M.ticker,children:mt}),e.jsxs(i5,{children:[e.jsx("h3",{children:M.ticker}),e.jsx("p",{children:M.name||$t(M.asset_type)}),e.jsxs(s5,{children:[e.jsx(Fn,{children:$t(M.asset_type)}),M.fii_segment&&e.jsx(Fn,{children:Us[M.fii_segment]}),M.asset_type==="renda_fixa"?e.jsxs(e.Fragment,{children:[e.jsxs(Fn,{children:[Number(M.cdi_percent)||0,"% do CDI"]}),M.investment_date&&e.jsxs(Fn,{children:["Desde ",np(M.investment_date)]})]}):e.jsxs(e.Fragment,{children:[e.jsx(Fn,{children:rp[M.frequency]??M.frequency}),e.jsxs(Fn,{children:["Dia ",M.payment_day]}),M.auto_price?e.jsx(Fn,{children:"Auto cotação"}):e.jsx(Fn,{children:"Preço manual"})]}),!M.is_active&&e.jsx(Fn,{children:"Inativo"})]})]})]}),e.jsxs(c5,{children:[e.jsx(tp,{type:"button",title:M.is_active?"Desativar":"Ativar","aria-label":`${M.is_active?"Desativar":"Ativar"} ${M.ticker}`,disabled:we.has(String(M.id)),onClick:()=>{Ae(M)},children:M.is_active?e.jsx(Jv,{}):e.jsx(Zv,{})}),e.jsx(tp,{type:"button",title:"Editar","aria-label":`Editar ${M.ticker}`,onClick:()=>tr(M),children:e.jsx(Lr,{})}),e.jsx(tp,{type:"button","data-danger":"true",title:"Excluir","aria-label":`Excluir ${M.ticker}`,onClick:()=>je(M),children:e.jsx(mr,{})})]})]}),e.jsxs(o5,{children:[e.jsxs(zl,{children:[e.jsx("small",{children:M.asset_type==="renda_fixa"?"Aplicado":"Investido"}),e.jsx("strong",{children:Sr(M.applied_amount??M.invested_amount)})]}),e.jsxs(zl,{children:[e.jsx("small",{children:"Valor atual"}),e.jsx("strong",{children:Sr(M.current_value)})]}),e.jsxs(zl,{$accent:Ke?"negative":"result",children:[e.jsx("small",{children:"Resultado"}),e.jsx("strong",{children:Sr(M.profit_loss)})]}),e.jsxs(zl,{$accent:"income",children:[e.jsx("small",{children:M.asset_type==="renda_fixa"?"Rendimento mensal estimado":"Por pagamento"}),e.jsx("strong",{children:Sr(Ge)})]})]}),e.jsx(l5,{children:e.jsxs("span",{children:[M.asset_type==="renda_fixa"?`${Sr(M.applied_amount??M.invested_amount)} aplicado · ${Number(M.cdi_percent)||0}% do CDI`:`${Number(M.quantity)} cotas · ${_g.format(Number(M.dividend_per_share)||0)} por cota`,M.notes?` · ${M.notes}`:""]})})]},String(M.id))})}):c?e.jsxs(Ve,{children:[e.jsx(Ni,{size:30}),e.jsx("h3",{children:"Nenhum ativo encontrado"}),e.jsx("p",{children:"Cadastre um ativo para projetar seus dividendos."}),e.jsxs(ue,{type:"button",$variant:"primary",onClick:tt,children:[e.jsx(ft,{}),"Novo ativo"]})]}):null,vt&&vt.total>0&&e.jsxs(b5,{children:[e.jsxs("span",{children:[vt.total," ativos · página ",vt.page," de ",Math.max(vt.totalPages,1)]}),e.jsxs("div",{style:{display:"flex",gap:7},children:[e.jsx(ue,{type:"button",disabled:!vt.hasPreviousPage||K,onClick:()=>G(M=>({...M,page:Math.max((M.page??1)-1,1)})),children:"Anterior"}),e.jsx(ue,{type:"button",disabled:!vt.hasNextPage||K,onClick:()=>G(M=>({...M,page:(M.page??1)+1})),children:"Próxima"})]})]})]}),e.jsxs(J3,{children:[e.jsxs(wg,{children:[e.jsxs("div",{children:[e.jsxs(Te,{children:[e.jsx(Wl,{size:19}),"Projeção mensal"]}),e.jsx(Pl,{children:i?"Informe a taxa CDI anual e selecione um mês para consultar a projeção calculada pela API.":"Selecione um mês para ver a data e o valor de cada provento previsto."})]}),e.jsxs(ep,{children:[O," meses"]})]}),e.jsxs(Z3,{children:[e.jsxs(ne,{htmlFor:"div-from",children:["A partir de",e.jsx("input",{id:"div-from",type:"month",value:S,onChange:M=>z(M.target.value||kg())})]}),e.jsxs(ne,{htmlFor:"div-months",children:["Meses",e.jsx("select",{id:"div-months",value:O,onChange:M=>R(Number(M.target.value)),children:[6,12,24,36].map(M=>e.jsx("option",{value:M,children:M},M))})]}),i&&e.jsxs(ne,{htmlFor:"div-cdi-rate",children:["CDI anual (%)",e.jsx("input",{id:"div-cdi-rate",type:"text",inputMode:"decimal",value:A,onChange:M=>C(M.target.value),"aria-describedby":"div-cdi-rate-hint",required:!0})]})]}),i&&e.jsx(Pl,{id:"div-cdi-rate-hint",children:"Taxa informada para estimar a projeção (exemplo: 13,65%)."}),pr.length?pr.map(M=>{const _e=Number(M.total)||0;return e.jsxs(f5,{type:"button","aria-label":`Ver detalhes dos proventos de ${ap(M.month)}, estimados em ${Sr(_e)}`,onClick:()=>_(M),children:[e.jsxs("span",{children:[e.jsx("strong",{children:ap(M.month)}),e.jsx("span",{children:Sr(_e)}),e.jsx(Oi,{"aria-hidden":"true"})]}),e.jsx(j5,{"aria-hidden":"true",children:e.jsx("span",{style:{width:`${Math.min(_e/pn*100,100)}%`}})}),M.items.length>0&&e.jsx("small",{children:M.items.map(Ge=>Ge.ticker).join(", ")})]},M.month)}):e.jsx("p",{style:{margin:0,color:"var(--muted)",fontSize:12},children:"Cadastre ao menos um ativo para ver a projeção."})]})]}),e.jsx(Ii,{open:x!==null,title:x?`Proventos de ${ap(x.month)}`:"Proventos previstos",icon:e.jsx(Wl,{size:18}),onClose:()=>_(null),children:x&&e.jsxs(h5,{children:[e.jsxs(m5,{children:[e.jsxs("div",{children:[e.jsx("small",{children:"Total estimado no mês"}),e.jsx("strong",{children:Sr(x.total)})]}),e.jsxs(ep,{children:[x.items.length," ",x.items.length===1?"provento":"proventos"]})]}),e.jsx(Pl,{children:"Valores previstos; o pagamento efetivo pode variar."}),x.items.length?e.jsx(x5,{"aria-label":"Detalhes dos proventos previstos",children:x.items.map((M,_e)=>e.jsxs(g5,{children:[e.jsxs(v5,{children:[e.jsx("h3",{children:M.ticker}),e.jsxs("p",{children:[M.name||$t(M.asset_type)," · ",np(M.payment_date)]}),e.jsx("small",{children:M.asset_type==="renda_fixa"?`${Number(M.cdi_percent)||0}% do CDI${M.investment_date?` · aplicado desde ${np(M.investment_date)}`:""}`:`${C5(M.quantity??0)} cotas × ${_g.format(Number(M.dividend_per_share)||0)} por cota`})]}),e.jsxs(y5,{children:[e.jsx("strong",{children:Sr(M.amount)}),e.jsx("small",{children:"Provento previsto"})]})]},`${String(M.holding_id)}-${M.payment_date}-${_e}`))}):e.jsx(Ve,{children:e.jsx("p",{children:"Nenhum provento detalhado para este mês."})})]})}),e.jsx(Ii,{open:y,title:ae?i?"Editar investimento":"Editar ativo":i?"Novo investimento":"Novo ativo",icon:ae?e.jsx(Lr,{size:18}):e.jsx(ft,{size:18}),busy:oe,onClose:ye,children:e.jsxs(d5,{onSubmit:M=>{gt(M)},children:[e.jsx(p5,{children:i?"Informe o valor aplicado, o percentual do CDI e a data; a estimativa mensal usa a taxa CDI da projeção.":de!=null&&de.auto_quote?"Se deixar o preço atual vazio, a API busca a cotação automaticamente para este tipo.":"Informe o preço atual manualmente quando quiser acompanhar o valor da posição."}),e.jsxs(ne,{htmlFor:"div-ticker",children:["Ticker *",e.jsx("input",{id:"div-ticker",maxLength:40,value:Q.ticker,onChange:M=>F(_e=>({..._e,ticker:M.target.value.toUpperCase()})),placeholder:"Ex.: MXRF11",required:!0})]}),e.jsxs(ne,{htmlFor:"div-name",children:["Nome",e.jsx("input",{id:"div-name",maxLength:160,value:Q.name,onChange:M=>F(_e=>({..._e,name:M.target.value})),placeholder:"Ex.: Maxi Renda"})]}),!i&&e.jsxs(ne,{htmlFor:"div-type",children:["Tipo",e.jsx("select",{id:"div-type",value:Q.asset_type,onChange:M=>Mt(M.target.value),children:s.map(M=>e.jsx("option",{value:M.id,children:M.label},M.id))})]}),st&&e.jsxs(ne,{htmlFor:"div-segment",children:["Segmento (FII/Fiagro)",e.jsxs("select",{id:"div-segment",value:Q.fii_segment,onChange:M=>F(_e=>({..._e,fii_segment:M.target.value})),children:[e.jsx("option",{value:"",children:"Não informado"}),Object.keys(Us).map(M=>e.jsx("option",{value:M,children:Us[M]},M))]})]}),i?e.jsxs(e.Fragment,{children:[e.jsxs(ne,{htmlFor:"div-applied-amount",children:["Valor aplicado (R$) *",e.jsx("input",{id:"div-applied-amount",type:"text",inputMode:"numeric",autoComplete:"off",value:Q.applied_amount,onChange:M=>F(_e=>({..._e,applied_amount:pa(M.target.value)})),placeholder:"R$ 10.000,00",required:!0})]}),e.jsxs(ne,{htmlFor:"div-cdi-percent",children:["Percentual do CDI (%) *",e.jsx("input",{id:"div-cdi-percent",type:"text",inputMode:"decimal",value:Q.cdi_percent,onChange:M=>F(_e=>({..._e,cdi_percent:M.target.value})),placeholder:"120",required:!0})]}),e.jsxs(ne,{htmlFor:"div-investment-date",children:["Data do investimento *",e.jsx("input",{id:"div-investment-date",type:"date",value:Q.investment_date,onChange:M=>F(_e=>({..._e,investment_date:M.target.value})),required:!0})]})]}):e.jsxs(e.Fragment,{children:[e.jsxs(ne,{htmlFor:"div-quantity",children:["Quantidade de cotas *",e.jsx("input",{id:"div-quantity",type:"number",min:0,step:"any",value:Q.quantity,onChange:M=>F(_e=>({..._e,quantity:M.target.value})),required:!0})]}),e.jsxs(ne,{htmlFor:"div-average",children:["Preço médio pago (R$)",e.jsx("input",{id:"div-average",type:"text",inputMode:"numeric",autoComplete:"off",value:Q.average_price,onChange:M=>F(_e=>({..._e,average_price:pa(M.target.value)})),placeholder:"R$ 9,80"})]}),e.jsxs(ne,{htmlFor:"div-current",children:["Preço atual (R$)",e.jsx("input",{id:"div-current",type:"text",inputMode:"numeric",autoComplete:"off",value:Q.current_price,onChange:M=>F(_e=>({..._e,current_price:pa(M.target.value)})),placeholder:de!=null&&de.auto_quote?"Vazio = cotação automática":"Opcional"})]}),e.jsxs(ne,{htmlFor:"div-per-share",children:["Provento por cota (R$)",e.jsx("input",{id:"div-per-share",type:"text",inputMode:"numeric",autoComplete:"off",value:Q.dividend_per_share,onChange:M=>F(_e=>({..._e,dividend_per_share:pa(M.target.value)})),placeholder:"R$ 0,10"})]}),e.jsxs(ne,{htmlFor:"div-frequency",children:["Frequência",e.jsx("select",{id:"div-frequency",value:Q.frequency,onChange:M=>F(_e=>({..._e,frequency:M.target.value})),children:Object.keys(rp).map(M=>e.jsx("option",{value:M,children:rp[M]},M))})]}),et&&e.jsxs(ne,{htmlFor:"div-reference",children:["Mês de um pagamento",e.jsx("select",{id:"div-reference",value:Q.reference_month,onChange:M=>F(_e=>({..._e,reference_month:M.target.value})),children:b1.map((M,_e)=>e.jsx("option",{value:_e+1,children:M},M))})]})]}),e.jsxs(ne,{htmlFor:"div-day",children:["Dia do pagamento",e.jsx("input",{id:"div-day",type:"number",min:1,max:31,step:1,value:Q.payment_day,onChange:M=>F(_e=>({..._e,payment_day:M.target.value})),required:!0})]}),e.jsxs(ne,{htmlFor:"div-active",children:["Situação",e.jsxs("select",{id:"div-active",value:String(Q.is_active),onChange:M=>F(_e=>({..._e,is_active:M.target.value==="true"})),children:[e.jsx("option",{value:"true",children:"Ativo (entra na projeção)"}),e.jsx("option",{value:"false",children:"Inativo"})]})]}),e.jsxs(ne,{htmlFor:"div-notes",children:["Observações",e.jsx("textarea",{id:"div-notes",maxLength:2e3,value:Q.notes,onChange:M=>F(_e=>({..._e,notes:M.target.value}))})]}),e.jsxs(u5,{children:[e.jsxs(ue,{type:"button",onClick:ye,disabled:oe,children:[e.jsx(er,{}),"Cancelar"]}),e.jsxs(ue,{type:"submit",$variant:"primary",disabled:oe,children:[oe?e.jsx(Je,{}):e.jsx(Dr,{}),ae?"Salvar alterações":"Cadastrar"]})]})]})}),e.jsx(jc,{open:le!==null,title:"Excluir ativo?",description:le?`${le.ticker} será removido permanentemente.`:"",confirmLabel:"Excluir",busy:!1,onConfirm:()=>{Xe()},onCancel:()=>je(null)})]})}const pf=h.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 20px;
`,St=h(Ie)`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 14px;
  ${Te} { margin: 0; }
`,Ft=h.p`
  margin: 4px 0 0;
  color: var(--muted);
  font-size: 12px;
  line-height: 1.5;
`,$5=h.label`
  display: flex;
  align-items: center;
  gap: 8px;
  min-height: 44px;
  color: var(--text);
  font-size: 13px;
  font-weight: 600;
  input { width: 18px; height: 18px; }
`,ac=h.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
  @media (max-width: 1000px) { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  @media (max-width: 520px) { grid-template-columns: 1fr; }
`,cr=h.div`
  display: grid;
  gap: 4px;
  padding: 14px 16px;
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  background: var(--surface-raised);
  small { color: var(--muted); font-size: 10px; font-weight: 800; letter-spacing: .07em; text-transform: uppercase; }
  strong { color: ${({$tone:r})=>r==="good"?"var(--success)":r==="bad"?"var(--error)":"var(--text)"}; font-size: 20px; font-variant-numeric: tabular-nums; letter-spacing: -.03em; }
  span { color: var(--muted); font-size: 11px; line-height: 1.4; }
`,Mp=h.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  select { min-height: 36px; border: 1px solid var(--border); border-radius: var(--radius-md); padding: 4px 10px; color: var(--text); background: var(--surface); }
`,ic=h.div`
  overflow-x: auto;
  table { width: 100%; border-collapse: collapse; font-size: 12px; }
  th { padding: 8px 10px; color: var(--muted); font-size: 10px; letter-spacing: .06em; text-align: right; text-transform: uppercase; white-space: nowrap; }
  td { padding: 10px; border-top: 1px solid var(--border); color: var(--text); font-variant-numeric: tabular-nums; text-align: right; white-space: nowrap; }
  th:first-child, td:first-child { text-align: left; font-weight: 650; }
`,sc=h.span`
  padding: 3px 9px;
  border-radius: 999px;
  color: ${({$color:r})=>r};
  background: color-mix(in srgb, ${({$color:r})=>r} 14%, transparent);
  font-size: 11px;
  font-weight: 800;
`,Ar=h.p`
  margin: 0;
  color: var(--muted);
  font-size: 11px;
  line-height: 1.5;
`,ff=h.form`
  display: grid;
  grid-template-columns: repeat(${({$columns:r})=>r??4}, minmax(0, 1fr)) auto;
  gap: 12px;
  align-items: end;
  ${ne} { margin-bottom: 0; }
  @media (max-width: 1100px) { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  @media (max-width: 560px) { grid-template-columns: 1fr; }
`;function R5(r){if(r<=0)return 1;const i=10**Math.floor(Math.log10(r)),s=r/i;return(s<=1?1:s<=2?2:s<=2.5?2.5:s<=5?5:10)*i}function S1(){const r=v.useRef(null),[i,s]=v.useState(820);return v.useEffect(()=>{const l=r.current;if(!l)return;const c=()=>s(Math.max(280,Math.round(l.getBoundingClientRect().width)));c();const p=new ResizeObserver(c);return p.observe(l),()=>p.disconnect()},[]),[r,i]}const C1=h.div`
  position: relative;
  width: 100%;
  svg { display: block; width: 100%; height: auto; overflow: visible; }
  text { fill: var(--muted); font-size: 11px; font-variant-numeric: tabular-nums; }
`,P5=h.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 10px;
`,Eg=h.button`
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
`,z5=h.div`
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
`;function N5({labels:r,series:i,formatValue:s,formatAxis:l,referenceLine:c,ariaLabel:p}){const[f,m]=v.useState(new Set),[x,_]=v.useState(null),[j,w]=v.useState(null),[S,z]=S1(),O=z<520?280:320,R={top:14,right:14,bottom:30,left:z<520?54:66},A=i.filter(H=>!f.has(H.id)),C=z-R.left-R.right,$=O-R.top-R.bottom,G=r.length,I=i.map(H=>H.values[H.values.length-1]??1),J=Math.max(...I)/Math.max(Math.min(...I),1)>6,Q=j??J,F=A.flatMap(H=>H.values);c&&F.push(c.value);const ae=Math.max(...F,1),k=Math.max(Math.min(...F),1),y=R5(ae*1.04),B=10**Math.floor(Math.log10(k)),le=y<=B*2?B*10:y,je=H=>R.left+(G>1?H/(G-1)*C:0),we=H=>{if(!Q)return R.top+$-H/y*$;const E=Math.log(Math.max(H,B)/B)/Math.log(le/B);return R.top+$-E*$},Pe=v.useMemo(()=>{if(!Q)return[0,1,2,3,4].map(re=>y/4*re);const E=Math.ceil(Math.log10(le/B))<=2?[1,2,5]:[1],b=[];for(let re=B;re<=le;re*=10)E.forEach(ce=>{re*ce<=le&&b.push(re*ce)});return b},[Q,y,B,le]),K=Math.ceil(G/Math.max(2,Math.floor(C/52)));function he(H){m(E=>{const b=new Set(E);return b.has(H)?b.delete(H):b.size<i.length-1&&b.add(H),b})}function oe(H){const E=H.currentTarget.getBoundingClientRect(),b=(H.clientX-E.left)/E.width*z,re=Math.round((b-R.left)/C*(G-1));_(Math.min(G-1,Math.max(0,re)))}const me=x===null?0:je(x)/z*100;return e.jsxs("div",{children:[e.jsxs(P5,{children:[i.map(H=>e.jsxs(Eg,{type:"button",$color:H.color,$off:f.has(H.id),"aria-pressed":!f.has(H.id),onClick:()=>he(H.id),children:[e.jsx("i",{}),H.label]},H.id)),e.jsxs(Eg,{type:"button",$color:"var(--primary)",$off:!Q,"aria-pressed":Q,onClick:()=>w(!Q),title:"A escala logarítmica mostra variações proporcionais e evita que uma opção muito alta esmague as demais.",children:[e.jsx("i",{}),"Escala logarítmica"]})]}),e.jsxs(C1,{ref:S,onMouseMove:oe,onMouseLeave:()=>_(null),children:[e.jsxs("svg",{viewBox:`0 0 ${z} ${O}`,role:"img","aria-label":p,children:[Pe.map(H=>e.jsxs("g",{children:[e.jsx("line",{x1:R.left,x2:z-R.right,y1:we(H),y2:we(H),stroke:"var(--border)",strokeDasharray:H===0||Q&&H===Pe[0]?void 0:"3 4"}),e.jsx("text",{x:R.left-8,y:we(H)+4,textAnchor:"end",children:l(H)})]},H)),r.map((H,E)=>E%K===0||E===G-1?e.jsx("text",{x:je(E),y:O-8,textAnchor:"middle",children:H},H):null),c&&e.jsxs("g",{children:[e.jsx("line",{x1:R.left,x2:z-R.right,y1:we(c.value),y2:we(c.value),stroke:"var(--error)",strokeDasharray:"6 4",strokeWidth:1.5}),e.jsx("text",{x:R.left+6,y:we(c.value)-6,style:{fill:"var(--error)",fontWeight:700},children:c.label})]}),x!==null&&e.jsx("line",{x1:je(x),x2:je(x),y1:R.top,y2:R.top+$,stroke:"var(--muted)",strokeOpacity:.5}),A.map(H=>e.jsxs("g",{children:[e.jsx("polyline",{fill:"none",stroke:H.color,strokeWidth:H.strong?3.2:2,strokeLinejoin:"round",strokeLinecap:"round",points:H.values.map((E,b)=>`${je(b)},${we(E)}`).join(" ")}),x!==null&&H.values[x]!==void 0&&e.jsx("circle",{cx:je(x),cy:we(H.values[x]),r:4.5,fill:H.color,stroke:"var(--surface)",strokeWidth:2})]},H.id))]}),x!==null&&e.jsxs(z5,{style:me>60?{right:`${100-me+2}%`}:{left:`${me+2}%`},children:[e.jsx("strong",{children:r[x]}),[...A].sort((H,E)=>(E.values[x]??0)-(H.values[x]??0)).map(H=>e.jsxs("div",{children:[e.jsxs("span",{children:[e.jsx("i",{style:{background:H.color}}),H.label]}),e.jsx("b",{children:s(H.values[x]??0)})]},H.id))]})]})]})}const ip=240;function E1({items:r,formatValue:i,ariaLabel:s}){const[l,c]=S1(),p=22,f=26,m=6,x=ip-p-f,_=Math.max(...r.map($=>Math.max($.value,0)),0),j=Math.max(...r.map($=>Math.max(-$.value,0)),0),w=Math.max(_+j,1),S=p+x*(_/w),z=x/w,O=(c-m*2)/Math.max(r.length,1),R=Math.min(36,O*.62),A=O>=46,C=O>=26?1:2;return e.jsx(C1,{ref:l,children:e.jsxs("svg",{viewBox:`0 0 ${c} ${ip}`,role:"img","aria-label":s,children:[e.jsx("line",{x1:m,x2:c-m,y1:S,y2:S,stroke:"var(--border)"}),r.map(($,G)=>{const I=Math.abs($.value)*z,J=m+O*G+O/2,Q=$.value>=0,F=Q?S-I:S;return e.jsxs("g",{children:[e.jsx("rect",{x:J-R/2,y:F,width:R,height:Math.max(I,1),rx:3,style:{fill:Q?"var(--success)":"var(--error)"},children:e.jsx("title",{children:`${$.label}: ${i($.value)}`})}),A&&e.jsx("text",{x:J,y:Q?F-5:F+I+12,textAnchor:"middle",children:i($.value)}),G%C===0&&e.jsx("text",{x:J,y:ip-8,textAnchor:"middle",children:$.label})]},$.id)})]})})}const $1=h.div`
  display: grid;
  gap: 12px;
`,M5=h.div`
  display: grid;
  gap: 5px;
  header { display: flex; align-items: baseline; justify-content: space-between; gap: 10px; font-size: 13px; }
  header span:first-child { color: var(--text); font-weight: 650; }
  header b { color: var(--text); font-variant-numeric: tabular-nums; }
  small { color: var(--muted); font-size: 11px; }
`,T5=h.div`
  position: relative;
  height: 12px;
  overflow: hidden;
  border-radius: 999px;
  background: var(--surface-raised);
`,$g=h.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: ${({$width:r})=>Math.max(0,Math.min(100,r))}%;
  border-radius: 999px;
  background: ${({$color:r})=>r};
  opacity: ${({$opacity:r})=>r??1};
  transition: width .4s ease;
`;function qa({items:r,max:i}){const s=[...r].map(p=>p.value).sort((p,f)=>f-p),l=i===void 0&&s.length>2&&s[0]>s[1]*4,c=Math.max(i??(l?s[1]*1.25:s[0]),1);return e.jsx($1,{children:r.map(p=>{const f=p.value>c;return e.jsxs(M5,{children:[e.jsxs("header",{children:[e.jsx("span",{children:p.label}),e.jsx("b",{children:p.valueLabel})]}),e.jsxs(T5,{role:"img","aria-label":`${p.label}: ${p.valueLabel}`,children:[e.jsx($g,{$width:p.value/c*100,$color:p.color??"var(--primary)"}),p.invested!==void 0&&e.jsx($g,{$width:p.invested/c*100,$color:"var(--text)",$opacity:.35})]}),(p.caption||f)&&e.jsxs("small",{children:[f?"Barra cortada: valor muito acima das demais. ":"",p.caption]})]},p.id)})})}const A5=h.div`
  display: grid;
  grid-template-columns: minmax(110px, 1.1fr) minmax(0, 2fr) 70px;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  @media (max-width: 520px) { grid-template-columns: 90px minmax(0, 1fr) 62px; }
  span:first-child { color: var(--text); font-weight: 600; }
  b { text-align: right; font-variant-numeric: tabular-nums; }
`,D5=h.div`
  position: relative;
  height: 14px;
  background: var(--surface-raised);
  border-radius: 4px;
  &::after { content: ''; position: absolute; top: -2px; bottom: -2px; left: var(--zero); width: 1px; background: var(--muted); opacity: .6; }
`,F5=h.div`
  position: absolute;
  top: 0;
  bottom: 0;
  border-radius: 3px;
  transition: width .4s ease;
`;function oc({items:r,formatValue:i}){const s=Math.max(...r.map(f=>Math.max(f.value,0)),0),l=Math.max(...r.map(f=>Math.max(-f.value,0)),0),c=Math.max(s+l,1),p=l/c*100;return e.jsx($1,{children:r.map(f=>{const m=Math.abs(f.value)/c*100,x=f.value>=0;return e.jsxs(A5,{children:[e.jsx("span",{children:f.label}),e.jsx(D5,{style:{"--zero":`${p}%`},role:"img","aria-label":`${f.label}: ${i(f.value)}`,children:e.jsx(F5,{style:{width:`${m}%`,left:x?`${p}%`:`${p-m}%`,background:x?"var(--success)":"var(--error)"}})}),e.jsx("b",{style:{color:x?"var(--success)":"var(--error)"},children:i(f.value)})]},f.id)})})}const L5=h.div`
  display: flex;
  height: 22px;
  overflow: hidden;
  border-radius: 999px;
  background: var(--surface-raised);
  div { display: grid; place-items: center; min-width: 0; color: #fff; font-size: 11px; font-weight: 800; transition: width .4s ease; }
`,O5=h.ul`
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
`;function R1({items:r,ariaLabel:i}){const s=r.reduce((l,c)=>l+c.value,0)||1;return e.jsxs("div",{children:[e.jsx(L5,{role:"img","aria-label":i,children:r.filter(l=>l.value>0).map(l=>e.jsx("div",{style:{width:`${l.value/s*100}%`,background:l.color},title:`${l.label}: ${l.valueLabel??l.value}`,children:l.value/s*100>=8?`${Math.round(l.value/s*100)}%`:""},l.id))}),e.jsx(O5,{children:r.map(l=>e.jsxs("li",{children:[e.jsx("i",{style:{background:l.color}}),l.label," ",e.jsx("b",{children:l.valueLabel??l.value})]},l.id))})]})}const Yr={otimo:{label:"Ótimo",color:"var(--success)"},bom:{label:"Bom",color:"var(--primary-strong)"},neutro:{label:"Neutro",color:"var(--muted)"},atencao:{label:"Atenção",color:"var(--warning)"},evitar:{label:"Evitar",color:"var(--error)"}},I5=2004,B5=["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"],q5=[{id:"conservador",label:"Conservador"},{id:"moderado",label:"Moderado"},{id:"arrojado",label:"Arrojado"}],U5=h.ul`
  display: grid;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
  li { padding: 10px 14px; border-left: 4px solid var(--primary); border-radius: var(--radius-md); background: color-mix(in srgb, var(--primary) 6%, var(--surface-raised)); color: var(--text); font-size: 13px; line-height: 1.5; }
`,H5=h.div`
  display: inline-flex;
  padding: 3px;
  border: 1px solid var(--border);
  border-radius: 999px;
  background: var(--surface-raised);
`,Rg=h.button`
  min-height: 32px;
  padding: 4px 14px;
  border: 0;
  border-radius: 999px;
  color: ${({$active:r})=>r?"var(--primary-contrast)":"var(--text)"};
  background: ${({$active:r})=>r?"var(--primary)":"transparent"};
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
`,V5=h.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 14px;
`,W5=h.article`
  display: grid;
  gap: 12px;
  align-content: start;
  padding: 14px 16px;
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  background: var(--surface-raised);
  h3 { margin: 0; color: var(--text); font-size: 14px; }
  small { color: var(--muted); font-size: 11px; line-height: 1.5; }
`;function Pi(r){const[i,s]=r.split("-");return`${B5[Number(s)-1]??s}/${i}`}function G5(r){var i,s,l;return xt.isAxiosError(r)?((i=r.response)==null?void 0:i.status)===404?"A simulação histórica ainda não está disponível no servidor.":((l=(s=r.response)==null?void 0:s.data)==null?void 0:l.error)||"Não foi possível executar a simulação.":r instanceof Error?r.message:"Não foi possível executar a simulação."}function Q5(){const r=Math.min(30,new Date().getFullYear()-I5),[i,s]=v.useState({valor:Ti(2e5),anos:String(Math.min(10,r)),aporte:"",ipca:!1,perfil:"moderado"}),[l,c]=v.useState(),[p,f]=v.useState(!0),[m,x]=v.useState(""),[_,j]=v.useState("without"),[w,S]=v.useState("carteira"),[z,O]=v.useState({valor:2e5,anos:Math.min(10,r),aporte_mensal:0,reajustar_aporte_ipca:!1,perfil:"moderado"});v.useEffect(()=>{let y=!0;return f(!0),x(""),l2(z).then(B=>{y&&(c(B),j(B.parameters.monthly_contribution>0?"with":"without"),S("carteira"))}).catch(B=>{y&&x(G5(B))}).finally(()=>{y&&f(!1)}),()=>{y=!1}},[z]);function R(y){y.preventDefault();const B=fa(i.valor),le=Number(i.anos),je=fa(i.aporte);if(!(B>0)){x("Informe um valor inicial maior que zero.");return}if(!Number.isInteger(le)||le<1||le>r){x(`Informe de 1 a ${r} anos.`);return}if(!(je>=0)){x("O aporte mensal não pode ser negativo.");return}O({valor:B,anos:le,aporte_mensal:je,reajustar_aporte_ipca:i.ipca,perfil:i.perfil})}const A=((l==null?void 0:l.parameters.monthly_contribution)??0)>0,C=A?_:"without",$=v.useMemo(()=>l?[l.portfolio,...l.assets]:[],[l]),G=v.useMemo(()=>$.map(y=>({id:y.id,label:y.name,color:Zu(y.id),strong:y.kind==="carteira",values:[l.parameters.initial_amount,...y.yearly.map(B=>C==="with"?B.value_with_contributions:B.value_without_contributions)]})),[$,C,l]),I=v.useMemo(()=>[...$].sort((y,B)=>C==="with"?B.with_contributions.final_value-y.with_contributions.final_value:B.without_contributions.final_value-y.without_contributions.final_value).map(y=>{const B=y.without_contributions,le=y.with_contributions;return C==="with"?{id:y.id,label:y.name,color:Zu(y.id),value:le.final_value,invested:le.total_invested,valueLabel:ct(le.final_value),caption:`Investido ${ct(le.total_invested)} · ganho ${ct(le.gain)} · ${Ze(le.annual_irr_pct)} a.a.`}:{id:y.id,label:y.name,color:Zu(y.id),value:B.final_value,valueLabel:ct(B.final_value),caption:`${B.multiple.toLocaleString("pt-BR")}x · ${Ze(B.cagr_pct)} a.a. (${Ze(B.real_cagr_pct,!0)} acima da inflação)`}}),[$,C]);if(p&&!l)return e.jsxs(Ve,{children:[e.jsx(Je,{}),e.jsx("p",{children:"Simulando décadas de mercado..."})]});const J=$.find(y=>y.id===w)??$[0],Q=(l==null?void 0:l.parameters.initial_amount)??0,F=l==null?void 0:l.portfolio,ae=F?C==="with"?F.with_contributions.final_value:F.without_contributions.final_value:0,k=F?F.preserved_purchasing_power:!0;return e.jsxs(pf,{children:[e.jsxs(St,{children:[e.jsxs("div",{children:[e.jsxs(Te,{children:[e.jsx(d_,{size:19}),"Simulação histórica"]}),e.jsx(Ft,{children:"Veja quanto um valor investido no passado teria hoje em cada opção, com e sem aportes mensais."})]}),e.jsxs(ff,{onSubmit:R,children:[e.jsxs(ne,{htmlFor:"bt-valor",children:["Valor inicial",e.jsx("input",{id:"bt-valor",type:"text",inputMode:"numeric",autoComplete:"off",placeholder:"R$ 0,00",value:i.valor,onChange:y=>s(B=>({...B,valor:pa(y.target.value)}))})]}),e.jsxs(ne,{htmlFor:"bt-anos",children:["Quantos anos atrás",e.jsx("input",{id:"bt-anos",type:"number",min:"1",max:r,step:"1",value:i.anos,onChange:y=>s(B=>({...B,anos:y.target.value}))})]}),e.jsxs(ne,{htmlFor:"bt-aporte",children:["Aporte mensal",e.jsx("input",{id:"bt-aporte",type:"text",inputMode:"numeric",autoComplete:"off",placeholder:"R$ 0,00",value:i.aporte,onChange:y=>s(B=>({...B,aporte:pa(y.target.value)}))})]}),e.jsxs(ne,{htmlFor:"bt-perfil",children:["Perfil da carteira",e.jsx("select",{id:"bt-perfil",value:i.perfil,onChange:y=>s(B=>({...B,perfil:y.target.value})),children:q5.map(y=>e.jsx("option",{value:y.id,children:y.label},y.id))})]}),e.jsx(ue,{type:"submit",$variant:"primary",disabled:p,children:p?"Simulando...":"Simular"}),e.jsxs($5,{children:[e.jsx("input",{type:"checkbox",checked:i.ipca,onChange:y=>s(B=>({...B,ipca:y.target.checked}))}),"Corrigir o aporte pela inflação (IPCA)"]})]}),m&&e.jsx(Ar,{role:"alert",style:{color:"var(--error)",fontSize:12},children:m})]}),l&&F&&e.jsxs(e.Fragment,{children:[e.jsxs(St,{style:{opacity:p?.6:1},children:[e.jsxs(ac,{children:[e.jsxs(cr,{children:[e.jsx("small",{children:"Período"}),e.jsxs("strong",{children:[l.parameters.start_year," → hoje"]}),e.jsxs("span",{children:[Pi(l.parameters.period.start)," a ",Pi(l.parameters.period.end)," · ",l.parameters.period.years.toLocaleString("pt-BR")," anos"]})]}),e.jsxs(cr,{$tone:"bad",children:[e.jsx("small",{children:"Inflação (IPCA)"}),e.jsx("strong",{children:Ze(l.inflation.ipca_accumulated_pct)}),e.jsxs("span",{children:[Ze(l.inflation.ipca_average_annual_pct)," ao ano em média"]})]}),e.jsxs(cr,{children:[e.jsx("small",{children:"Para manter o poder de compra"}),e.jsx("strong",{children:ct(l.inflation.initial_amount_corrected_to_today)}),e.jsxs("span",{children:[ct(Q)," de ",l.parameters.start_year," precisariam valer isso hoje"]})]}),e.jsxs(cr,{$tone:k?"good":"bad",children:[e.jsxs("small",{children:["Carteira ",l.parameters.profile]}),e.jsx("strong",{children:ct(ae)}),e.jsx("span",{children:C==="with"?`${ct(F.with_contributions.total_invested)} investidos`:`${F.without_contributions.multiple.toLocaleString("pt-BR")}x o valor inicial`})]})]}),e.jsx(U5,{children:l.highlights.map(y=>e.jsx("li",{children:y},y))})]}),e.jsxs(St,{style:{opacity:p?.6:1},children:[e.jsxs(Mp,{children:[e.jsxs("div",{children:[e.jsx(Te,{children:"Evolução do patrimônio"}),e.jsx(Ft,{children:"Passe o mouse sobre o gráfico para comparar. Clique na legenda para esconder ou mostrar uma opção."})]}),A&&e.jsxs(H5,{role:"group","aria-label":"Cenário",children:[e.jsx(Rg,{type:"button",$active:C==="without",onClick:()=>j("without"),children:"Sem aportes"}),e.jsx(Rg,{type:"button",$active:C==="with",onClick:()=>j("with"),children:"Com aportes"})]})]}),e.jsx(N5,{labels:["Início",...F.yearly.map(y=>y.partial?`${y.year}*`:String(y.year))],series:G,formatValue:ct,formatAxis:j1,referenceLine:C==="without"?{value:l.inflation.initial_amount_corrected_to_today,label:"Linha da inflação (IPCA)"}:void 0,ariaLabel:"Evolução do patrimônio ao longo dos anos"}),C==="without"&&e.jsx(Ar,{children:"Quem termina abaixo da linha vermelha perdeu poder de compra. * ano parcial."})]}),e.jsxs(St,{style:{opacity:p?.6:1},children:[e.jsxs("div",{children:[e.jsx(Te,{children:"Quanto cada opção rendeu"}),e.jsx(Ft,{children:C==="with"?"A parte escura da barra é o que você aportou; o restante é ganho.":`Resultado final de ${ct(Q)} investidos em ${l.parameters.start_year}, do melhor para o pior.`})]}),e.jsx(qa,{items:I})]}),e.jsxs(St,{style:{opacity:p?.6:1},children:[e.jsxs(Mp,{children:[e.jsxs("div",{children:[e.jsx(Te,{children:"Retorno ano a ano"}),e.jsx(Ft,{children:"Verde: ano positivo. Vermelho: ano negativo."})]}),e.jsx("select",{"aria-label":"Opção",value:J==null?void 0:J.id,onChange:y=>S(y.target.value),children:$.map(y=>e.jsx("option",{value:y.id,children:y.name},y.id))})]}),J&&e.jsx(E1,{items:J.yearly.map(y=>({id:String(y.year),label:`${String(y.year).slice(2)}${y.partial?"*":""}`,value:y.return_pct})),formatValue:y=>Ze(y,!0),ariaLabel:`Retorno anual de ${J.name}`})]}),e.jsxs(St,{style:{opacity:p?.6:1},children:[e.jsxs("div",{children:[e.jsx(Te,{children:"Pior queda de cada opção"}),e.jsx(Ft,{children:"Maior perda do topo até o fundo. Quanto menor a barra vermelha, mais tranquilo foi o caminho."})]}),e.jsx(oc,{items:[...$].sort((y,B)=>y.without_contributions.max_drawdown_pct-B.without_contributions.max_drawdown_pct).map(y=>({id:y.id,label:y.name,value:y.without_contributions.max_drawdown_pct})),formatValue:y=>Ze(y)}),F.without_contributions.peak&&F.without_contributions.trough&&e.jsxs(Ar,{children:["A carteira caiu entre ",Pi(F.without_contributions.peak)," e ",Pi(F.without_contributions.trough),F.without_contributions.months_to_recover!==null?` e levou ${F.without_contributions.months_to_recover} meses para recuperar.`:" e ainda não recuperou o topo anterior."]})]}),l.crises.length>0&&e.jsxs(St,{style:{opacity:p?.6:1},children:[e.jsxs("div",{children:[e.jsx(Te,{children:"Como cada opção se saiu nas crises"}),e.jsx(Ft,{children:"Retorno durante cada período de estresse do mercado."})]}),e.jsx(V5,{children:l.crises.map(y=>e.jsxs(W5,{children:[e.jsxs("div",{children:[e.jsx("h3",{children:y.name}),e.jsxs("small",{children:[Pi(y.period.start)," a ",Pi(y.period.end)," · inflação ",Ze(y.inflation_pct)]})]}),e.jsx(oc,{items:y.results.map(B=>({id:B.id,label:B.name,value:B.return_pct})),formatValue:B=>Ze(B,!0)})]},y.id))})]}),e.jsxs(St,{style:{opacity:p?.6:1},children:[e.jsxs("div",{children:[e.jsx(Te,{children:"Resumo por opção"}),e.jsx(Ft,{children:"A nota considera quanto a opção rendeu acima da inflação."})]}),e.jsx(ic,{children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Opção"}),e.jsx("th",{children:"Nota"}),e.jsx("th",{children:"Ao ano"}),e.jsx("th",{children:"Acima da inflação"}),e.jsx("th",{children:"Oscilação"}),e.jsx("th",{children:"Anos negativos"})]})}),e.jsx("tbody",{children:$.map(y=>e.jsxs("tr",{children:[e.jsx("td",{children:y.name}),e.jsx("td",{children:e.jsx(sc,{$color:Yr[y.rating].color,children:y.rating_label})}),e.jsx("td",{children:Ze(y.without_contributions.cagr_pct)}),e.jsx("td",{style:{color:y.without_contributions.real_cagr_pct>=0?"var(--success)":"var(--error)"},children:Ze(y.without_contributions.real_cagr_pct,!0)}),e.jsx("td",{children:Ze(y.without_contributions.annual_volatility_pct)}),e.jsx("td",{children:y.without_contributions.negative_years})]},y.id))})]})}),l.unavailable.length>0&&e.jsxs(Ar,{children:["Fora da comparação: ",l.unavailable.map(y=>`${y.id} (${y.reason})`).join("; "),"."]}),e.jsx(Ar,{children:l.disclaimer})]})]})]})}function hf(r,i,s){var l,c,p;if(xt.isAxiosError(r)){const f=(c=(l=r.response)==null?void 0:l.data)==null?void 0:c.error;return((p=r.response)==null?void 0:p.status)===404&&(!f||/^rota n/i.test(f))?s:f||i}return r instanceof Error?r.message:i}const K5=/^[A-Z]{4}1[0-9]$/,ln=new Intl.NumberFormat("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2}),Y5=h.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
  li { padding: 8px 12px; border: 1px solid color-mix(in srgb, var(--success) 35%, var(--border)); border-radius: var(--radius-md); background: color-mix(in srgb, var(--success) 7%, var(--surface-raised)); color: var(--text); font-size: 12px; }
  small { display: block; color: var(--muted); font-size: 10px; font-weight: 800; letter-spacing: .06em; text-transform: uppercase; }
  strong { font-size: 14px; }
`,X5=h.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 12px;
`,J5=h.article`
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
`;function _n(r,i){return r==null?"—":i(r)}function Z5(r){return[...new Set(r.split(/[\s,;]+/).map(i=>i.trim().toUpperCase()).filter(Boolean))]}function Pg(r){return r.fund_age_years??r.listed_age_years}function eE(r){return hf(r,"Não foi possível comparar os fundos.","A comparação de FIIs ainda não está disponível no servidor.")}function tE(){const[r,i]=v.useState({tickers:"",anos:"5",valor:Ti(1e5)}),[s,l]=v.useState({tickers:[],anos:5,valor:1e5}),[c,p]=v.useState(),[f,m]=v.useState(!0),[x,_]=v.useState(""),[j,w]=v.useState(""),[S,z]=v.useState("total");v.useEffect(()=>{let k=!0;return m(!0),_(""),c2(s).then(y=>{k&&(p(y),w(B=>{var le;return y.funds.some(je=>je.ticker===B)?B:((le=y.funds[0])==null?void 0:le.ticker)??""}))}).catch(y=>{k&&_(eE(y))}).finally(()=>{k&&m(!1)}),()=>{k=!1}},[s]);function O(k){k.preventDefault();const y=Z5(r.tickers),B=Number(r.anos),le=fa(r.valor),je=y.filter(we=>!K5.test(we));if(je.length){_(`Ticker inválido: ${je.join(", ")}. Use o formato HGLG11.`);return}if(y.length>12){_("Compare no máximo 12 fundos por vez.");return}if(!Number.isInteger(B)||B<1||B>10){_("Informe de 1 a 10 anos.");return}if(!(le>0)){_("Informe um valor maior que zero.");return}l({tickers:y,anos:B,valor:le})}const R=v.useMemo(()=>(c==null?void 0:c.funds)??[],[c]),A=R.find(k=>k.ticker===j)??R[0],C=v.useMemo(()=>R.map(k=>({id:k.ticker,label:k.ticker,value:k.score,color:Yr[k.rating].color,valueLabel:`${k.score}/100 · ${k.rating_label}`,caption:`${k.segment??"Segmento não informado"} · ${ln.format(Pg(k))} anos de história`})),[R]),$=v.useMemo(()=>{var we;const k=R.filter(Pe=>Pe.simulation),y=(we=k[0])==null?void 0:we.simulation;if(!y)return[];const B=y.initial_amount,le=y.cdi_final_value,je=k.map(Pe=>({id:Pe.ticker,label:Pe.ticker,value:Pe.simulation.fii_final_value,color:le===null||Pe.simulation.fii_final_value>=le?"var(--success)":"var(--warning)",valueLabel:ct(Pe.simulation.fii_final_value),caption:`${ln.format(Pe.simulation.fii_final_value/B)}x o valor investido`}));return y.cdi_final_value!==null&&je.push({id:"__cdi",label:"CDI (referência)",value:y.cdi_final_value,color:"#64748b",valueLabel:ct(y.cdi_final_value),caption:"Renda fixa de referência no mesmo período"}),y.inflation_corrected_amount!==null&&je.push({id:"__ipca",label:"Só a inflação (IPCA)",value:y.inflation_corrected_amount,color:"#dc2626",valueLabel:ct(y.inflation_corrected_amount),caption:"Quanto o valor precisaria para manter o poder de compra"}),je.sort((Pe,K)=>K.value-Pe.value)},[R]),G=v.useMemo(()=>[...R].filter(k=>k.distributions.dividend_yield_12m_pct!==null).sort((k,y)=>(y.distributions.dividend_yield_12m_pct??0)-(k.distributions.dividend_yield_12m_pct??0)).map(k=>({id:k.ticker,label:k.ticker,value:k.distributions.dividend_yield_12m_pct??0,color:"var(--primary)",valueLabel:Ze(k.distributions.dividend_yield_12m_pct??0),caption:`Média de 5 anos: ${_n(k.distributions.average_dividend_yield_5y_pct,y=>Ze(y))} · pagou em ${_n(k.distributions.months_paid_pct,y=>`${Math.round(y)}%`)} dos meses · R$ ${ln.format(k.distributions.last_12m_per_share)} por cota`})),[R]),I=v.useMemo(()=>[...R].sort((k,y)=>k.market.p_vp-y.market.p_vp).map(k=>({id:k.ticker,label:k.ticker,value:k.market.p_vp,color:k.market.p_vp<=1?"var(--success)":k.market.p_vp<=1.1?"var(--primary)":"var(--warning)",valueLabel:ln.format(k.market.p_vp),caption:`Mediana de 5 anos: ${_n(k.market.p_vp_median_5y,y=>ln.format(y))}${k.market.p_vp_vs_median_pct===null?"":` · ${k.market.p_vp_vs_median_pct<=0?"desconto":"prêmio"} de ${Ze(Math.abs(k.market.p_vp_vs_median_pct))} sobre a mediana`}`})),[R]),J=v.useMemo(()=>[...R].filter(k=>{var y;return((y=k.common_window)==null?void 0:y.max_drawdown_pct)!==null&&k.common_window!==null}).sort((k,y)=>(k.common_window.max_drawdown_pct??0)-(y.common_window.max_drawdown_pct??0)).map(k=>({id:k.ticker,label:k.ticker,value:k.common_window.max_drawdown_pct??0})),[R]);if(f&&!c)return e.jsxs(Ve,{children:[e.jsx(Je,{}),e.jsx("p",{children:"Analisando os fundos (a primeira consulta pode levar cerca de 10 segundos)..."})]});const Q=c==null?void 0:c.comparison,F=c==null?void 0:c.leaders,ae=F?[{label:"Melhor retorno",ticker:F.best_total_return},{label:"Maior dividend yield",ticker:F.highest_dividend_yield},{label:"Menor queda",ticker:F.lowest_drawdown},{label:"Menor P/VP",ticker:F.cheapest_p_vp}].filter(k=>k.ticker):[];return e.jsxs(pf,{children:[e.jsxs(St,{children:[e.jsxs("div",{children:[e.jsxs(Te,{children:[e.jsx(l_,{size:19}),"Comparar fundos imobiliários"]}),e.jsx(Ft,{children:"Compare FIIs com o mesmo período, com proventos reinvestidos. Deixe os tickers em branco para comparar 8 fundos populares."})]}),e.jsxs(ff,{onSubmit:O,$columns:3,children:[e.jsxs(ne,{htmlFor:"fii-tickers",children:["Tickers (até 12)",e.jsx("input",{id:"fii-tickers",type:"text",autoComplete:"off",placeholder:"HGLG11, KNRI11, MXRF11",value:r.tickers,onChange:k=>i(y=>({...y,tickers:k.target.value}))})]}),e.jsxs(ne,{htmlFor:"fii-anos",children:["Anos de comparação",e.jsx("input",{id:"fii-anos",type:"number",min:"1",max:"10",step:"1",value:r.anos,onChange:k=>i(y=>({...y,anos:k.target.value}))})]}),e.jsxs(ne,{htmlFor:"fii-valor",children:["Valor simulado",e.jsx("input",{id:"fii-valor",type:"text",inputMode:"numeric",autoComplete:"off",placeholder:"R$ 0,00",value:r.valor,onChange:k=>i(y=>({...y,valor:pa(k.target.value)}))})]}),e.jsx(ue,{type:"submit",$variant:"primary",disabled:f,children:f?"Comparando...":"Comparar"})]}),x&&e.jsx(Ar,{role:"alert",style:{color:"var(--error)",fontSize:12},children:x})]}),c&&Q&&A&&e.jsxs(e.Fragment,{children:[e.jsxs(St,{style:{opacity:f?.6:1},children:[e.jsxs(ac,{children:[e.jsxs(cr,{children:[e.jsx("small",{children:"Período comparado"}),e.jsxs("strong",{children:[ln.format(Q.window_years)," anos"]}),e.jsx("span",{children:Q.limited_by_youngest_fund?`Limitado pelo fundo mais novo (${Q.youngest}); pedido: ${Q.requested_years} anos`:"Mesma janela para todos os fundos"})]}),e.jsxs(cr,{children:[e.jsx("small",{children:"Idade média"}),e.jsxs("strong",{children:[ln.format(Q.average_age_years)," anos"]}),e.jsx("span",{children:"Desde o início de cada fundo"})]}),e.jsxs(cr,{children:[e.jsx("small",{children:"Mais antigo"}),e.jsx("strong",{children:Q.oldest??"—"}),e.jsx("span",{children:"Maior tempo de história"})]}),e.jsxs(cr,{children:[e.jsx("small",{children:"Mais novo"}),e.jsx("strong",{children:Q.youngest??"—"}),e.jsx("span",{children:"Menor tempo de história"})]})]}),ae.length>0&&e.jsx(Y5,{children:ae.map(k=>e.jsxs("li",{children:[e.jsx("small",{children:k.label}),e.jsx("strong",{children:k.ticker})]},k.label))})]}),e.jsxs(St,{style:{opacity:f?.6:1},children:[e.jsxs("div",{children:[e.jsx(Te,{children:"Ranking por nota"}),e.jsx(Ft,{children:"Nota de 0 a 100 que combina retorno acima do CDI, queda máxima, regularidade dos proventos, P/VP e tempo de história."})]}),e.jsx(qa,{items:C,max:100})]}),$.length>0&&e.jsxs(St,{style:{opacity:f?.6:1},children:[e.jsxs("div",{children:[e.jsx(Te,{children:"Quanto você teria hoje"}),e.jsxs(Ft,{children:[ct(s.valor)," investidos há ",ln.format(Q.window_years)," anos, com proventos reinvestidos e sem impostos. Verde: ganhou do CDI. Amarelo: perdeu para o CDI. A barra vermelha é só a inflação."]})]}),e.jsx(qa,{items:$})]}),e.jsxs(St,{style:{opacity:f?.6:1},children:[e.jsxs("div",{children:[e.jsx(Te,{children:"Dividend yield (12 meses)"}),e.jsx(Ft,{children:"Proventos pagos nos últimos 12 meses sobre o preço atual da cota."})]}),e.jsx(qa,{items:G})]}),e.jsxs(St,{style:{opacity:f?.6:1},children:[e.jsxs("div",{children:[e.jsx(Te,{children:"P/VP: preço frente ao patrimônio"}),e.jsx(Ft,{children:"Abaixo de 1 a cota custa menos que o patrimônio por cota (verde); bem acima de 1 indica prêmio (amarelo)."})]}),e.jsx(qa,{items:I})]}),J.length>0&&e.jsxs(St,{style:{opacity:f?.6:1},children:[e.jsxs("div",{children:[e.jsx(Te,{children:"Maior queda no período"}),e.jsx(Ft,{children:"Pior perda do topo ao fundo, contando preço e proventos. Barra menor significa caminho mais tranquilo."})]}),e.jsx(oc,{items:J,formatValue:k=>Ze(k)})]}),e.jsxs(St,{style:{opacity:f?.6:1},children:[e.jsxs(Mp,{children:[e.jsxs("div",{children:[e.jsx(Te,{children:"Histórico ano a ano"}),e.jsx(Ft,{children:"Verde: ano positivo. Vermelho: ano negativo. * ano parcial."})]}),e.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:[e.jsx("select",{"aria-label":"Fundo",value:A.ticker,onChange:k=>w(k.target.value),children:R.map(k=>e.jsx("option",{value:k.ticker,children:k.ticker},k.ticker))}),e.jsxs("select",{"aria-label":"Métrica",value:S,onChange:k=>z(k.target.value),children:[e.jsx("option",{value:"total",children:"Retorno total"}),e.jsx("option",{value:"yield",children:"Dividend yield"})]})]})]}),e.jsx(E1,{items:A.yearly_history.map(k=>({id:String(k.year),label:`${String(k.year).slice(2)}${k.partial?"*":""}`,value:(S==="total"?k.total_return_pct:k.dividend_yield_on_start_price_pct)??0})),formatValue:k=>Ze(k,S==="total"),ariaLabel:`${S==="total"?"Retorno total":"Dividend yield"} anual de ${A.ticker}`})]}),e.jsxs(St,{style:{opacity:f?.6:1},children:[e.jsxs("div",{children:[e.jsx(Te,{children:"Comparativo detalhado"}),e.jsx(Ft,{children:"Rentabilidade e oscilação calculadas no período comparado."})]}),e.jsx(ic,{children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Fundo"}),e.jsx("th",{children:"Nota"}),e.jsx("th",{children:"Segmento"}),e.jsx("th",{children:"Idade"}),e.jsx("th",{children:"Yield 12m"}),e.jsx("th",{children:"P/VP"}),e.jsx("th",{children:"Ao ano"}),e.jsx("th",{children:"Vs. CDI"}),e.jsx("th",{children:"Oscilação"}),e.jsx("th",{children:"Meses pagos"}),e.jsx("th",{children:"Patrimônio"}),e.jsx("th",{children:"Cotistas"})]})}),e.jsx("tbody",{children:R.map(k=>{const y=k.common_window;return e.jsxs("tr",{children:[e.jsx("td",{title:k.name,children:k.ticker}),e.jsx("td",{children:e.jsxs(sc,{$color:Yr[k.rating].color,children:[k.score," · ",k.rating_label]})}),e.jsx("td",{children:k.segment??"—"}),e.jsxs("td",{children:[ln.format(Pg(k))," anos"]}),e.jsx("td",{children:_n(k.distributions.dividend_yield_12m_pct,B=>Ze(B))}),e.jsx("td",{children:ln.format(k.market.p_vp)}),e.jsx("td",{children:_n(y==null?void 0:y.total_cagr_pct,B=>Ze(B))}),e.jsx("td",{style:{color:((y==null?void 0:y.excess_over_cdi_pp)??0)>=0?"var(--success)":"var(--error)"},children:_n(y==null?void 0:y.excess_over_cdi_pp,B=>`${B>0?"+":""}${ln.format(B)} p.p.`)}),e.jsx("td",{children:_n(y==null?void 0:y.annual_volatility_pct,B=>Ze(B))}),e.jsx("td",{children:_n(k.distributions.months_paid_pct,B=>`${Math.round(B)}%`)}),e.jsx("td",{children:_n(k.equity.net_assets,B=>j1(B))}),e.jsx("td",{children:_n(k.equity.holders,B=>B.toLocaleString("pt-BR"))})]},k.ticker)})})]})})]}),e.jsxs(St,{style:{opacity:f?.6:1},children:[e.jsxs("div",{children:[e.jsx(Te,{children:"Por que cada nota"}),e.jsx(Ft,{children:"Os principais motivos que pesaram na classificação de cada fundo."})]}),e.jsx(X5,{children:R.map(k=>e.jsxs(J5,{$color:Yr[k.rating].color,children:[e.jsxs("header",{children:[e.jsxs("div",{children:[e.jsx("h3",{children:k.ticker}),e.jsx("small",{children:k.name})]}),e.jsxs(sc,{$color:Yr[k.rating].color,children:[k.score," · ",k.rating_label]})]}),e.jsx("ul",{children:k.reasons.map(y=>e.jsx("li",{children:y},y))})]},k.ticker))}),c.not_found.length>0&&e.jsxs(Ar,{children:["Não analisados: ",c.not_found.map(k=>`${k.ticker} (${k.reason})`).join("; "),"."]}),e.jsx(Ar,{children:c.disclaimer})]})]})]})}const rE=[{id:"conservador",label:"Conservador"},{id:"moderado",label:"Moderado"},{id:"arrojado",label:"Arrojado"}],Tp={vender:{label:"Vender",color:"var(--error)"},reduzir:{label:"Reduzir 50%",color:"var(--warning)"},manter:{label:"Manter",color:"var(--success)"},sem_dados:{label:"Sem dados",color:"var(--muted)"}},zg={renda_fixa:{label:"Renda fixa",color:"#2563eb"},fiis:{label:"FIIs",color:"#d97706"},acoes:{label:"Ações",color:"#16a34a"},outros:{label:"Outros",color:"#8b5cf6"}},Ng={cdb:"CDB",lci_lca:"LCI/LCA",tesouro_selic:"Tesouro Selic"},Oa=new Intl.NumberFormat("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2}),nE=h.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
  gap: 12px;
`,aE=h.article`
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
`,iE=h.div`
  display: grid;
  gap: 4px;
  font-size: 11px;
  color: var(--muted);
  div { height: 6px; overflow: hidden; border-radius: 999px; background: var(--border); }
  div::after { content: ''; display: block; width: ${({$value:r})=>Math.min(100,Math.max(0,r))}%; height: 100%; background: ${({$color:r})=>r}; }
`,sE=h.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
`;function oE(r){return hf(r,"Não foi possível analisar a carteira.","A análise de carteira ainda não está disponível no servidor.")}function Mg(r){return r%12===0?r===12?"1 ano":`${r/12} anos`:`${r} meses`}function lE({position:r,bestRate:i}){const s=Tp[r.recommendation],l=r.dividend_yield_12m_pct===null?null:r.dividend_yield_12m_pct-i;return e.jsxs(aE,{$color:s.color,children:[e.jsxs("header",{children:[e.jsxs("div",{children:[e.jsx("h3",{children:r.ticker}),r.name&&e.jsx("small",{children:r.name})]}),e.jsx(sc,{$color:s.color,children:s.label})]}),r.sell_score!==null&&e.jsxs(iE,{$value:r.sell_score,$color:s.color,children:[e.jsxs("span",{children:["Nota de venda ",r.sell_score,"/100 (quanto maior, mais motivos para vender)"]}),e.jsx("div",{})]}),e.jsxs("dl",{children:[e.jsxs("div",{children:[e.jsx("dt",{children:"Valor na carteira"}),e.jsxs("dd",{children:[ct(r.market_value)," (",Ze(r.weight_pct),")"]})]}),e.jsxs("div",{children:[e.jsx("dt",{children:"Dividend yield 12m"}),e.jsxs("dd",{children:[r.dividend_yield_12m_pct===null?"—":Ze(r.dividend_yield_12m_pct),l!==null&&e.jsxs("small",{style:{color:l>=0?"var(--success)":"var(--error)"},children:[" (",l>=0?"+":"",Oa.format(l)," p.p. vs renda fixa)"]})]})]}),r.p_vp!==void 0&&e.jsxs("div",{children:[e.jsx("dt",{children:"P/VP"}),e.jsx("dd",{children:Oa.format(r.p_vp)})]}),r.quality_score!==null&&e.jsxs("div",{children:[e.jsx("dt",{children:"Nota de qualidade"}),e.jsxs("dd",{children:[r.quality_score,r.quality_rating?` · ${r.quality_rating}`:""]})]}),e.jsxs("div",{children:[e.jsx("dt",{children:"Ganho ou perda"}),e.jsx("dd",{style:{color:r.gain===null?void 0:r.gain>=0?"var(--success)":"var(--error)"},children:r.gain===null?"preço médio não informado":ct(r.gain)})]}),e.jsxs("div",{children:[e.jsx("dt",{children:"Imposto se vender tudo"}),e.jsx("dd",{children:r.cost_basis_missing?"—":ct(r.estimated_sale_tax)})]})]}),e.jsx("ul",{children:r.reasons.map(c=>e.jsx("li",{children:c},c))})]})}function cE(){var k;const[r,i]=v.useState({perfil:"moderado",meta:"",prazo:"24",cdb:"100",lci:"90",anos:"5"}),[s,l]=v.useState({perfil:"moderado",anos:5,prazo_meses:24,cdi_percent:100,lci_percent:90}),[c,p]=v.useState(),[f,m]=v.useState(!0),[x,_]=v.useState(""),[j,w]=v.useState(),[S,z]=v.useState(!1),[O,R]=v.useState("");v.useEffect(()=>{let y=!0;return m(!0),_(""),w(void 0),R(""),d2(s).then(B=>{y&&p(B)}).catch(B=>{y&&(_(oE(B)),p(void 0))}).finally(()=>{y&&m(!1)}),()=>{y=!1}},[s]);function A(y){y.preventDefault();const B=Number(r.anos),le=Number(r.prazo),je=Number(r.cdb),we=Number(r.lci),Pe=r.meta.trim()===""?void 0:Number(r.meta);if(!Number.isInteger(B)||B<1||B>10){_("Informe de 1 a 10 anos de análise.");return}if(!Number.isInteger(le)||le<1||le>120){_("O prazo deve ficar entre 1 e 120 meses.");return}if(!(je>=50&&je<=200)){_("O CDB deve render de 50% a 200% do CDI.");return}if(!(we>=50&&we<=150)){_("A LCI/LCA deve render de 50% a 150% do CDI.");return}if(Pe!==void 0&&!(Pe>=0&&Pe<=100)){_("A meta de renda fixa deve ficar entre 0% e 100%.");return}l({perfil:r.perfil,anos:B,prazo_meses:le,cdi_percent:je,lci_percent:we,meta_renda_fixa:Pe})}async function C(){if(c!=null&&c.sell_plan.sales.length){z(!0),R("");try{w(await u2(s,c.sell_plan.sales.map(y=>({ticker:y.ticker,sell_pct:y.sell_pct}))))}catch(y){R(hf(y,"Não foi possível simular a troca.","A simulação de troca ainda não está disponível no servidor."))}finally{z(!1)}}}const $=c==null?void 0:c.fixed_income.products.find(y=>y.id===c.fixed_income.best_net_option),G=($==null?void 0:$.net_annual_pct)??0,I=v.useMemo(()=>Object.entries((c==null?void 0:c.portfolio.allocation_pct)??{}).filter(([,y])=>y>0).map(([y,B])=>{var le,je;return{id:y,label:((le=zg[y])==null?void 0:le.label)??y,value:B,valueLabel:Ze(B),color:((je=zg[y])==null?void 0:je.color)??"var(--primary)"}}),[c]),J=v.useMemo(()=>{if(!c)return[];const y=c.positions.filter(B=>B.dividend_yield_12m_pct!==null).map(B=>({id:B.ticker,label:B.ticker,value:B.dividend_yield_12m_pct??0,color:Tp[B.recommendation].color,valueLabel:Ze(B.dividend_yield_12m_pct??0),caption:Tp[B.recommendation].label}));return $&&y.push({id:"__rf",label:`Melhor renda fixa: ${$.name}`,value:$.net_annual_pct,color:"#2563eb",valueLabel:Ze($.net_annual_pct),caption:"Rendimento líquido de imposto"}),y.sort((B,le)=>le.value-B.value)},[c,$]),Q=v.useMemo(()=>((c==null?void 0:c.fixed_income.products)??[]).map(y=>({id:y.id,label:y.name,value:y.net_annual_pct,color:y.id===(c==null?void 0:c.fixed_income.best_net_option)?"var(--success)":"#2563eb",valueLabel:`${Ze(y.net_annual_pct)} ao ano`,caption:`Bruto ${Ze(y.gross_annual_pct)} · IR ${Ze(y.income_tax_pct)} · ${y.note}`})),[c]);if(f&&!c&&!x)return e.jsxs(Ve,{children:[e.jsx(Je,{}),e.jsx("p",{children:"Analisando sua carteira (a primeira consulta pode levar cerca de 10 segundos)..."})]});const F=c==null?void 0:c.sell_plan,ae=F==null?void 0:F.totals;return e.jsxs(pf,{children:[e.jsxs(St,{children:[e.jsxs("div",{children:[e.jsxs(Te,{children:[e.jsx(Va,{size:19}),"Minha carteira de FIIs"]}),e.jsx(Ft,{children:"Analisa os FIIs que você cadastrou em Dividendos e mostra o que faz sentido vender para migrar para a renda fixa. Informe uma meta de renda fixa para o plano vender até chegar nela."})]}),e.jsxs(ff,{onSubmit:A,$columns:3,children:[e.jsxs(ne,{htmlFor:"pf-perfil",children:["Perfil de risco",e.jsx("select",{id:"pf-perfil",value:r.perfil,onChange:y=>i(B=>({...B,perfil:y.target.value})),children:rE.map(y=>e.jsx("option",{value:y.id,children:y.label},y.id))})]}),e.jsxs(ne,{htmlFor:"pf-meta",children:["Meta de renda fixa (%)",e.jsx("input",{id:"pf-meta",type:"number",min:"0",max:"100",step:"1",placeholder:"Padrão do perfil",value:r.meta,onChange:y=>i(B=>({...B,meta:y.target.value}))})]}),e.jsxs(ne,{htmlFor:"pf-prazo",children:["Prazo da renda fixa (meses)",e.jsx("input",{id:"pf-prazo",type:"number",min:"1",max:"120",step:"1",value:r.prazo,onChange:y=>i(B=>({...B,prazo:y.target.value}))})]}),e.jsxs(ne,{htmlFor:"pf-cdb",children:["CDB (% do CDI)",e.jsx("input",{id:"pf-cdb",type:"number",min:"50",max:"200",step:"1",value:r.cdb,onChange:y=>i(B=>({...B,cdb:y.target.value}))})]}),e.jsxs(ne,{htmlFor:"pf-lci",children:["LCI/LCA (% do CDI)",e.jsx("input",{id:"pf-lci",type:"number",min:"50",max:"150",step:"1",value:r.lci,onChange:y=>i(B=>({...B,lci:y.target.value}))})]}),e.jsxs(ne,{htmlFor:"pf-anos",children:["Anos de análise dos FIIs",e.jsx("input",{id:"pf-anos",type:"number",min:"1",max:"10",step:"1",value:r.anos,onChange:y=>i(B=>({...B,anos:y.target.value}))})]}),e.jsx(ue,{type:"submit",$variant:"primary",disabled:f,children:f?"Analisando...":"Analisar"})]}),x&&e.jsx(Ar,{role:"alert",style:{color:"var(--error)",fontSize:12},children:x})]}),c&&F&&ae&&e.jsxs(e.Fragment,{children:[e.jsxs(St,{style:{opacity:f?.6:1},children:[e.jsxs(ac,{children:[e.jsxs(cr,{children:[e.jsx("small",{children:"Valor da carteira"}),e.jsx("strong",{children:ct(c.portfolio.total_value)}),e.jsxs("span",{children:[c.portfolio.fiis_count," FIIs analisados"]})]}),e.jsxs(cr,{$tone:(c.portfolio.fixed_income_gap_pct??0)>0?"bad":"good",children:[e.jsx("small",{children:"Renda fixa na carteira"}),e.jsx("strong",{children:Ze(c.portfolio.allocation_pct.renda_fixa??0)}),e.jsxs("span",{children:["Meta: ",Ze(c.portfolio.fixed_income_target_pct),c.portfolio.fixed_income_gap_pct!==null&&c.portfolio.fixed_income_gap_pct>0?` · faltam ${Oa.format(c.portfolio.fixed_income_gap_pct)} p.p.`:" · meta atingida"]})]}),e.jsxs(cr,{children:[e.jsx("small",{children:"Melhor renda fixa hoje"}),e.jsx("strong",{children:$?Ze($.net_annual_pct):"—"}),e.jsxs("span",{children:[$==null?void 0:$.name," · líquido ao ano"]})]}),e.jsxs(cr,{children:[e.jsx("small",{children:"CDI / Selic / IPCA 12m"}),e.jsxs("strong",{children:[Oa.format(c.fixed_income.cdi),"%"]}),e.jsxs("span",{children:["Selic ",Oa.format(c.fixed_income.selic),"% · IPCA ",Oa.format(c.fixed_income.ipca_12m),"%"]})]})]}),e.jsx(R1,{items:I,ariaLabel:"Alocação atual da carteira"})]}),e.jsxs(St,{style:{opacity:f?.6:1},children:[e.jsxs("div",{children:[e.jsx(Te,{children:"Seus FIIs contra a renda fixa"}),e.jsx(Ft,{children:"Dividend yield dos últimos 12 meses de cada fundo comparado ao rendimento líquido da melhor renda fixa. Verde: manter. Amarelo: reduzir. Vermelho: vender."})]}),e.jsx(qa,{items:J})]}),e.jsxs(St,{style:{opacity:f?.6:1},children:[e.jsxs("div",{children:[e.jsx(Te,{children:"Recomendação por fundo"}),e.jsx(Ft,{children:"Ordenado do que tem mais motivos para sair ao que tem menos."})]}),e.jsx(nE,{children:c.positions.map(y=>e.jsx(lE,{position:y,bestRate:G},y.ticker))})]}),e.jsxs(St,{style:{opacity:f?.6:1},children:[e.jsxs("div",{children:[e.jsx(Te,{children:"Plano de venda"}),e.jsxs(Ft,{children:[F.message,F.mode==="meta_renda_fixa"?' Fundos marcados como "mantido" só entram porque a meta exige.':""]})]}),F.sales.length>0&&e.jsxs(e.Fragment,{children:[e.jsxs(ac,{children:[e.jsxs(cr,{children:[e.jsx("small",{children:"Você recebe (líquido)"}),e.jsx("strong",{children:ct(ae.net_proceeds)}),e.jsxs("span",{children:["Bruto ",ct(ae.gross_proceeds)," − imposto ",ct(ae.estimated_tax)]})]}),e.jsxs(cr,{children:[e.jsx("small",{children:"Renda anual que deixa de receber"}),e.jsx("strong",{children:ct(ae.fii_income_lost_per_year)}),e.jsx("span",{children:"Proventos dos FIIs vendidos"})]}),e.jsxs(cr,{$tone:"good",children:[e.jsx("small",{children:"Renda anual na renda fixa"}),e.jsx("strong",{children:ct(ae.fixed_income_income_per_year)}),e.jsx("span",{children:"Líquida de imposto"})]}),e.jsxs(cr,{$tone:ae.income_change_per_year>=0?"good":"bad",children:[e.jsx("small",{children:"Variação da renda por ano"}),e.jsxs("strong",{children:[ae.income_change_per_year>0?"+":"",ct(ae.income_change_per_year)]}),e.jsxs("span",{children:[ae.tax_payback_months!==null?`O imposto se paga em ${Oa.format(ae.tax_payback_months)} meses. `:"",ae.fixed_income_share_after_pct!==null?`Renda fixa passa a ${Ze(ae.fixed_income_share_after_pct)} da carteira.`:""]})]})]}),e.jsx(ic,{children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Fundo"}),e.jsx("th",{children:"Vender"}),e.jsx("th",{children:"Bruto"}),e.jsx("th",{children:"Imposto"}),e.jsx("th",{children:"Líquido"}),e.jsx("th",{children:"Renda perdida/ano"})]})}),e.jsx("tbody",{children:F.sales.map(y=>e.jsxs("tr",{children:[e.jsxs("td",{children:[y.ticker,y.forced?" (mantido, entra pela meta)":""]}),e.jsx("td",{children:Ze(y.sell_pct)}),e.jsx("td",{children:ct(y.gross)}),e.jsx("td",{children:ct(y.tax)}),e.jsx("td",{children:ct(y.net)}),e.jsx("td",{children:ct(y.income_lost)})]},y.ticker))})]})}),e.jsxs(sE,{children:[e.jsx(ue,{type:"button",$variant:"primary",onClick:()=>void C(),disabled:S,children:S?"Simulando...":"Simular a troca (1, 2 e 5 anos)"}),O&&e.jsx(Ar,{role:"alert",style:{color:"var(--error)",fontSize:12},children:O})]})]})]}),j&&e.jsxs(St,{children:[e.jsxs("div",{children:[e.jsx(Te,{children:"Manter os fundos ou trocar?"}),e.jsxs(Ft,{children:["Os fundos vendidos rendem em média ",Ze(j.break_even.weighted_fii_dividend_yield_pct)," em proventos. Para valer a pena mantê-los, eles precisariam valorizar ao menos ",Ze(j.break_even.fii_price_appreciation_needed_per_year_pct)," ao ano além dos proventos."]})]}),e.jsx(ic,{children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Prazo"}),e.jsx("th",{children:"Manter fundos"}),Object.keys(((k=j.projections[0])==null?void 0:k.switch_values)??{}).map(y=>e.jsx("th",{children:Ng[y]??y},y)),e.jsx("th",{children:"Melhor troca vs manter"})]})}),e.jsx("tbody",{children:j.projections.map(y=>e.jsxs("tr",{children:[e.jsx("td",{children:Mg(y.months)}),e.jsx("td",{children:ct(y.keep_funds_value)}),Object.entries(y.switch_values).map(([B,le])=>e.jsx("td",{style:{fontWeight:B===y.best_switch_option?800:400},children:ct(le)},B)),e.jsxs("td",{style:{color:y.difference_best_switch_vs_keep>=0?"var(--success)":"var(--error)"},children:[y.difference_best_switch_vs_keep>0?"+":"",ct(y.difference_best_switch_vs_keep)]})]},y.months))})]})}),e.jsx(oc,{items:j.projections.map(y=>({id:String(y.months),label:`${Mg(y.months)} (${Ng[y.best_switch_option]??y.best_switch_option})`,value:y.difference_best_switch_vs_keep})),formatValue:y=>`${y>0?"+":""}${ct(y)}`}),e.jsx(Ar,{children:"Verde: trocar para a renda fixa termina com mais dinheiro que manter os fundos. Vermelho: manter termina com mais."}),j.assumptions.map(y=>e.jsxs(Ar,{children:["• ",y]},y))]}),e.jsxs(St,{style:{opacity:f?.6:1},children:[e.jsxs("div",{children:[e.jsx(Te,{children:"Opções de renda fixa"}),e.jsxs(Ft,{children:["Rendimento líquido anual para um prazo de ",c.fixed_income.holding_period_months," meses."]})]}),e.jsx(qa,{items:Q,max:Math.max(...Q.map(y=>y.value),1)*1.15}),c.notes.map(y=>e.jsx(Ar,{children:y},y))]})]})]})}const dE={renda_fixa:"#2563eb",acoes_br:"#16a34a",fiis:"#d97706",internacional:"#8b5cf6",cripto:"#f97316"},uE=[{id:"conservador",label:"Conservador"},{id:"moderado",label:"Moderado"},{id:"arrojado",label:"Arrojado"}],pE=h.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 20px;
`,fE=h.div`
  display: inline-flex;
  max-width: 100%;
  gap: 4px;
  padding: 4px;
  overflow-x: auto;
  border: 1px solid var(--border);
  border-radius: 999px;
  background: var(--surface);
`,Nl=h.button`
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
`,hE=h.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  gap: 12px;
  ${ne} { margin-bottom: 0; min-width: 200px; }
`,P1=h(Ie)`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 14px;
  ${Te} { margin: 0; }
`,z1=h.p`
  margin: 0;
  color: var(--muted);
  font-size: 12px;
  line-height: 1.5;
`,mE=h.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 12px;
`,xE=h.article`
  display: grid;
  gap: 10px;
  align-content: start;
  padding: 14px 16px;
  border: 1px solid color-mix(in srgb, ${({$rating:r})=>Yr[r].color} 35%, var(--border));
  border-left: 5px solid ${({$rating:r})=>Yr[r].color};
  border-radius: var(--radius-md);
  background: color-mix(in srgb, ${({$rating:r})=>Yr[r].color} 6%, var(--surface-raised));
  header { display: flex; align-items: flex-start; justify-content: space-between; gap: 8px; }
  h3 { margin: 0; color: var(--text); font-size: 14px; }
  small { color: var(--muted); font-size: 11px; }
  ul { margin: 0; padding-left: 16px; color: var(--muted); font-size: 12px; line-height: 1.5; }
`,gE=h.span`
  flex: 0 0 auto;
  padding: 3px 9px;
  border-radius: 999px;
  color: ${({$rating:r})=>Yr[r].color};
  background: color-mix(in srgb, ${({$rating:r})=>Yr[r].color} 14%, transparent);
  font-size: 11px;
  font-weight: 800;
`,vE=h.div`
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
    background: ${({$rating:r})=>Yr[r].color};
  }
`,yE=h.p`
  margin: 0;
  color: var(--muted);
  font-size: 11px;
  line-height: 1.5;
`;function jE(r){var i,s,l,c,p;return xt.isAxiosError(r)?((i=r.response)==null?void 0:i.status)===404?"O serviço de oportunidades ainda não está disponível no servidor.":((l=(s=r.response)==null?void 0:s.data)==null?void 0:l.error)||((p=(c=r.response)==null?void 0:c.data)==null?void 0:p.message)||"Não foi possível carregar as oportunidades.":r instanceof Error?r.message:"Não foi possível carregar as oportunidades."}function bE(r){if(!r)return"";const i=new Date(r);return Number.isNaN(i.getTime())?r:i.toLocaleString("pt-BR",{dateStyle:"short",timeStyle:"short"})}function wE({item:r}){return e.jsxs(xE,{$rating:r.rating,children:[e.jsxs("header",{children:[e.jsxs("div",{children:[e.jsx("h3",{children:r.label}),r.in_portfolio&&e.jsx("small",{children:"Na sua carteira"})]}),e.jsx(gE,{$rating:r.rating,children:Yr[r.rating].label})]}),e.jsxs(vE,{$rating:r.rating,$score:r.score,"aria-label":`Nota ${Math.round(r.score)} de 100`,children:[e.jsxs("span",{children:["Nota ",Math.round(r.score),"/100"]}),e.jsx("div",{})]}),r.top_assets&&r.top_assets.length>0&&e.jsxs("small",{children:["Destaques: ",r.top_assets.join(", ")]}),r.reasons.length>0&&e.jsx("ul",{children:r.reasons.map(i=>e.jsx("li",{children:i},i))})]})}function sp({title:r,description:i,items:s}){if(!s.length)return null;const l=[...s].sort((c,p)=>p.score-c.score);return e.jsxs(P1,{children:[e.jsxs("div",{children:[e.jsx(Te,{children:r}),e.jsx(z1,{children:i})]}),e.jsx(mE,{children:l.map(c=>e.jsx(wE,{item:c},c.id))})]})}function _E(){const[r,i]=v.useState("oportunidades"),[s,l]=v.useState("moderado"),[c,p]=v.useState(),[f,m]=v.useState(!0),[x,_]=v.useState(""),[j,w]=v.useState(0);v.useEffect(()=>{let R=!0;return m(!0),_(""),o2(s).then(A=>{R&&p(A)}).catch(A=>{R&&_(jE(A))}).finally(()=>{R&&m(!1)}),()=>{R=!1}},[s,j]);const S=bE(c==null?void 0:c.generated_at),z=c&&!c.classes.length&&!c.assets.length,O=new Map(((c==null?void 0:c.classes)??[]).map(R=>[R.id,R.label]));return e.jsxs(pE,{children:[e.jsxs(yc,{children:[e.jsxs("div",{children:[e.jsxs("span",{children:[e.jsx(kp,{size:14})," Oportunidades"]}),e.jsx("h1",{children:"Avaliação de oportunidades."}),e.jsx("p",{children:"Nota de 0 a 100 por classe de ativo e por ativo, e uma simulação histórica para ver o que o passado ensina."}),r==="oportunidades"&&S&&e.jsxs("p",{style:{marginTop:8,fontSize:12},children:["Atualizado em ",S]})]}),e.jsxs(fE,{role:"tablist","aria-label":"Seções",children:[e.jsx(Nl,{type:"button",role:"tab","aria-selected":r==="oportunidades",$active:r==="oportunidades",onClick:()=>i("oportunidades"),children:"Oportunidades"}),e.jsx(Nl,{type:"button",role:"tab","aria-selected":r==="carteira",$active:r==="carteira",onClick:()=>i("carteira"),children:"Minha carteira"}),e.jsx(Nl,{type:"button",role:"tab","aria-selected":r==="simulacao",$active:r==="simulacao",onClick:()=>i("simulacao"),children:"Simulação histórica"}),e.jsx(Nl,{type:"button",role:"tab","aria-selected":r==="fiis",$active:r==="fiis",onClick:()=>i("fiis"),children:"Comparar FIIs"})]})]}),r==="carteira"&&e.jsx(cE,{}),r==="simulacao"&&e.jsx(Q5,{}),r==="fiis"&&e.jsx(tE,{}),r==="oportunidades"&&e.jsxs(e.Fragment,{children:[e.jsxs(hE,{children:[e.jsxs(ne,{htmlFor:"opp-profile",children:["Perfil de risco",e.jsx("select",{id:"opp-profile",value:s,onChange:R=>l(R.target.value),children:uE.map(R=>e.jsx("option",{value:R.id,children:R.label},R.id))})]}),e.jsxs(ue,{type:"button",onClick:()=>w(R=>R+1),disabled:f,children:[e.jsx(e1,{}),f?"Atualizando...":"Atualizar"]})]}),x&&e.jsx(Ie,{role:"alert",style:{color:"var(--error)",padding:14},children:x}),f&&!c?e.jsxs(Ve,{children:[e.jsx(Je,{}),e.jsx("p",{children:"Analisando o mercado..."})]}):c&&e.jsxs(e.Fragment,{children:[c.warnings.length>0&&e.jsx(Ie,{role:"status",style:{color:"var(--warning)",padding:14,fontSize:13},children:c.warnings.map(R=>e.jsx("div",{children:R},R))}),z&&e.jsxs(Ve,{children:[e.jsx(kp,{}),e.jsx("p",{children:"Nenhuma oportunidade disponível no momento."})]}),c.suggested_allocation.length>0&&e.jsxs(P1,{children:[e.jsxs("div",{children:[e.jsx(Te,{children:"Alocação sugerida"}),e.jsxs(z1,{children:["Distribuição de referência para o perfil ",s,", ajustada pelas notas de cada classe."]})]}),e.jsx(R1,{ariaLabel:"Alocação sugerida por classe de ativo",items:[...c.suggested_allocation].sort((R,A)=>A.percent-R.percent).map(R=>({id:R.id,label:O.get(R.id)??R.id,value:R.percent,valueLabel:`${R.percent}%`,color:dE[R.id]??"var(--primary)"}))})]}),e.jsx(sp,{title:"Classes de ativos",description:"Onde o cenário atual está mais favorável.",items:c.classes}),e.jsx(sp,{title:"Minha carteira",description:"Seus ativos ativos em dividendos, avaliados pelo cenário atual.",items:c.portfolio}),e.jsx(sp,{title:"Ranking de ativos",description:"Melhores ativos analisados, do melhor para o pior.",items:c.assets}),e.jsx(yE,{children:c.disclaimer??"Análise quantitativa automatizada baseada em indicadores. Não constitui recomendação de investimento personalizada."})]})]})]})}const Tg=r=>r?new Date(`${r.slice(0,10)}T12:00:00`).toLocaleDateString("pt-BR"):"Não definida";function kE({task:r,loading:i,saving:s,onBack:l,onSave:c,onDelete:p,onSetActive:f,onValidationError:m,statusChanging:x}){const[_,j]=v.useState(""),[w,S]=v.useState(""),[z,O]=v.useState("medium"),[R,A]=v.useState("diaria"),[C,$]=v.useState(""),[G,I]=v.useState(""),[J,Q]=v.useState([]);v.useEffect(()=>{var k;r&&(j(r.title),S(r.description??""),O(r.priority??"medium"),A(bc(r.frequencia)??"diaria"),$(r.start_date.slice(0,10)),I(((k=r.end_date)==null?void 0:k.slice(0,10))??""),Q([...r.items].sort((y,B)=>y.sort_order-B.sort_order).map(y=>y.title)))},[r==null?void 0:r.id]);function F(k,y){Q(B=>B.map((le,je)=>je===k?y:le))}async function ae(k){k.preventDefault(),m("");const y=J.map(le=>le.trim()).filter(Boolean);if(!_.trim()){m("Informe o título da tarefa.");return}if(!y.length){m("Adicione pelo menos um item à tarefa.");return}if(G&&C&&G<C){m("A data final não pode ser anterior à data inicial.");return}const B={title:_.trim(),description:w.trim()||null,priority:z,frequencia:R,start_date:C||void 0,end_date:G||null,items:y};await c(B)}return i&&!r?e.jsx(Ie,{children:e.jsx(Sn,{children:"Carregando tarefa..."})}):r?e.jsxs(e.Fragment,{children:[e.jsxs(gr,{children:[e.jsxs("div",{children:[e.jsx("h1",{children:"Editar tarefa"}),e.jsx("p",{children:"Atualize os mesmos campos disponíveis na criação."})]}),e.jsxs(ue,{onClick:l,children:[e.jsx(Zl,{}),"Voltar para tarefas"]})]}),e.jsxs(rf,{children:[e.jsxs(Ie,{children:[e.jsxs(rk,{style:{alignItems:"center",justifyContent:"space-between",marginBottom:22},children:[e.jsxs("div",{children:[e.jsxs(Te,{style:{marginBottom:8},children:["Tarefa · ID ",r.id]}),e.jsx(xr,{$done:r.is_active,children:r.is_active?"Ativa":"Desativada"})]}),e.jsxs(ue,{type:"button",$variant:r.is_active?"danger":"primary",disabled:x,onClick:()=>{f(r.id,!r.is_active)},children:[x?e.jsx(Je,{className:"spin"}):r.is_active?e.jsx(h_,{}):e.jsx(Fr,{}),x?"Atualizando...":r.is_active?"Desativar tarefa":"Ativar tarefa"]})]}),e.jsxs("form",{onSubmit:k=>void ae(k),children:[e.jsxs(ne,{children:["Título da tarefa *",e.jsx("input",{value:_,onChange:k=>j(k.target.value),maxLength:200,placeholder:"Ex.: Estudar programação",required:!0})]}),e.jsxs(ne,{children:["Descrição ",e.jsx("small",{children:"(opcional)"}),e.jsx("textarea",{value:w,onChange:k=>S(k.target.value),maxLength:1e4,placeholder:"Descreva o objetivo desta tarefa..."})]}),e.jsxs(ne,{children:["Prioridade",e.jsxs(Or,{value:z,onChange:k=>O(k.target.value),children:[e.jsx("option",{value:"high",children:"Alta"}),e.jsx("option",{value:"medium",children:"Média"}),e.jsx("option",{value:"low",children:"Baixa"})]})]}),e.jsxs(ne,{children:["Frequência",e.jsxs(Or,{value:R,onChange:k=>A(k.target.value),children:[e.jsx("option",{value:"diaria",children:"Dia"}),e.jsx("option",{value:"semana",children:"Semana"}),e.jsx("option",{value:"mensal",children:"Mês"})]})]}),e.jsxs(s1,{children:[e.jsxs(ne,{children:["Data de início",e.jsx("input",{type:"date",value:C,onChange:k=>$(k.target.value)})]}),e.jsxs(ne,{children:["Data de fim ",e.jsx("small",{children:"(opcional)"}),e.jsx("input",{type:"date",min:C||void 0,value:G,onChange:k=>I(k.target.value)})]})]}),e.jsxs(Te,{style:{marginTop:8,marginBottom:6},children:["Itens da tarefa * ",e.jsx(Gt,{size:15,color:"var(--muted)"})]}),e.jsx(Sn,{children:"Adicione as atividades que você quer acompanhar."}),e.jsxs(nf,{children:[J.map((k,y)=>e.jsxs(af,{children:[e.jsx(sf,{children:y+1}),e.jsx(rc,{"aria-label":`Item ${y+1}`,value:k,maxLength:200,onChange:B=>F(y,B.target.value),placeholder:"Nome da atividade"}),e.jsx(ue,{type:"button",$variant:"danger","aria-label":`Remover item ${y+1}`,disabled:J.length<=1,onClick:()=>Q(B=>B.filter((le,je)=>je!==y)),children:e.jsx(mr,{})})]},y)),e.jsx("div",{children:e.jsxs(ue,{type:"button",onClick:()=>Q(k=>k.length<100?[...k,""]:k),disabled:J.length>=100,children:[e.jsx(ft,{}),"Adicionar item"]})})]}),e.jsxs(of,{children:[e.jsx(ue,{type:"button",onClick:l,children:"Cancelar"}),e.jsxs(ue,{type:"button",$variant:"danger",onClick:()=>p(r.id),children:[e.jsx(mr,{}),"Excluir tarefa"]}),e.jsxs(ue,{type:"submit",$variant:"primary",disabled:s,children:[s?e.jsx(Je,{className:"spin"}):e.jsx(po,{}),s?"Salvando...":"Salvar alterações"]})]})]})]}),e.jsxs(Ie,{children:[e.jsx(Te,{children:"Prévia da tarefa"}),e.jsxs(lf,{children:[e.jsxs(cf,{children:[e.jsx(Gt,{size:23}),_.trim()||"Título da tarefa"]}),e.jsx(Sn,{children:w.trim()||"A descrição aparecerá aqui."}),e.jsxs(df,{children:[e.jsxs("span",{children:[e.jsx(He,{size:15,style:{verticalAlign:"middle",marginRight:7}}),"Início: ",Tg(C)]}),e.jsxs("span",{children:[e.jsx(He,{size:15,style:{verticalAlign:"middle",marginRight:7}}),"Fim: ",Tg(G)]}),e.jsxs("span",{children:[e.jsx(Js,{size:15,style:{verticalAlign:"middle",marginRight:7}}),"Prioridade: ",{high:"Alta",medium:"Média",low:"Baixa"}[z]]}),e.jsxs("span",{children:[e.jsx(Js,{size:15,style:{verticalAlign:"middle",marginRight:7}}),"Frequência: ",R==="diaria"?"Dia":R==="semana"?"Semana":"Mês"]}),e.jsxs("span",{children:[e.jsx(Js,{size:15,style:{verticalAlign:"middle",marginRight:7}}),"Status: ",r.is_active?"Ativa":"Desativada"]})]})]}),e.jsx(Te,{children:"Itens da tarefa"}),J.some(k=>k.trim())?J.map((k,y)=>k.trim()&&e.jsxs(o1,{children:[e.jsx("input",{type:"checkbox",disabled:!0}),e.jsx("span",{children:k}),e.jsx(xr,{children:"Pendente"})]},y)):e.jsx(Sn,{children:"Os itens aparecerão aqui enquanto você digita."})]})]})]}):e.jsxs(e.Fragment,{children:[e.jsx(gr,{children:e.jsxs("div",{children:[e.jsx("h1",{children:"Tarefa não encontrada"}),e.jsx("p",{children:"Não foi possível localizar essa tarefa na listagem."})]})}),e.jsxs(ue,{onClick:l,children:[e.jsx(Zl,{}),"Voltar para tarefas"]})]})}const SE=h.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
  margin-bottom: 20px;
  @media (max-width: 620px) { gap: 9px; }
  @media (max-width: 420px) { grid-template-columns: 1fr; }
`,op=h.div`
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
`,lp=h.span`
  display: grid;
  width: 42px;
  height: 42px;
  place-items: center;
  border-radius: 12px;
  color: ${({$tone:r})=>r==="green"?"var(--success)":r==="gray"?"var(--muted)":"var(--primary)"};
  background: ${({$tone:r})=>r==="green"?"var(--success-soft)":r==="gray"?"var(--surface-raised)":"var(--primary-soft)"};
  svg { width: 19px; height: 19px; }
  @media (max-width: 620px) { width: 36px; height: 36px; }
`,CE=h.div`
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
`,EE=h.label`
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
`,$E=h(l1)`
  display: flex;
  gap: 8px;
  @media (max-width: 760px) { display: grid; grid-template-columns: 1fr 1fr; }
  @media (max-width: 420px) { grid-template-columns: 1fr; }
  select { min-width: 170px; height: 42px; }
  @media (max-width: 760px) { select { min-width: 0; width: 100%; } }
`,RE=h.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin: 0 0 14px;
  padding: 4px;
  overflow-x: auto;
  border: 1px solid var(--border);
  border-radius: 11px;
  background: var(--surface-raised);
`,cp=h.button`
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
`,PE=h.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  margin: 0 2px 10px;
  h2 { margin: 0; color: var(--text); font-size: 14px; font-weight: 750; }
  span { color: var(--muted); font-size: 11px; }
`,zE=h.div`
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
`,NE=h.span`
  color: var(--muted);
  font-size: 12px;
`,ME=h.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  @media (max-width: 560px) { justify-content: space-between; }
`,TE=h.select`
  min-height: 36px;
  padding: 6px 9px;
  border: 1px solid var(--border);
  border-radius: 8px;
  color: var(--text);
  background: var(--surface-raised);
  font-size: 12px;
`,Ag=h(ue)`
  min-height: 36px;
  padding: 7px 10px;
  &:disabled { opacity: .45; cursor: not-allowed; }
`,AE=h.div`
  display: grid;
  gap: 11px;
`,DE=h.article`
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
`,FE=h.div`
  display: grid;
  min-width: 0;
  gap: 13px;
`,LE=h.div`
  display: flex;
  min-width: 0;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
`,OE=h.div`
  min-width: 0;
  h3 { margin: 0; color: var(--text); font-size: 15px; font-weight: 750; line-height: 1.45; overflow-wrap: anywhere; }
  p { margin: 4px 0 0; color: var(--muted); font-size: 12px; line-height: 1.5; overflow-wrap: anywhere; }
`,IE=h.div`
  display: flex;
  flex: 0 0 auto;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 6px;
  @media (max-width: 520px) { justify-content: flex-start; }
`,BE=h.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px 17px;
  color: var(--muted);
  font-size: 11px;
`,Ml=h.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  svg { width: 14px; height: 14px; color: var(--muted); }
`,qE=h.div`
  display: flex;
  min-width: 0;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px;
`,UE=h.span`
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
`,HE=h.span`
  padding: 5px 7px;
  color: var(--muted);
  font-size: 11px;
  font-weight: 700;
`,VE=h.div`
  display: grid;
  grid-template-columns: minmax(55px, 100px) auto;
  align-items: center;
  gap: 8px;
  margin-left: auto;
  span { color: var(--muted); font-size: 10px; white-space: nowrap; }
  @media (max-width: 720px) { margin-left: 0; }
`,WE=h.div`
  height: 5px;
  overflow: hidden;
  border-radius: 999px;
  background: var(--border);
  div { height: 100%; border-radius: inherit; background: var(--primary); transition: width .2s ease; }
`,GE=h.div`
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
`,QE=h.div`
  display: grid;
  justify-items: end;
  gap: 4px;
  color: var(--muted);
  font-size: 10px;
  text-align: right;
  strong { color: var(--text); font-size: 11px; font-weight: 650; }
  @media (max-width: 720px) { justify-items: start; text-align: left; }
`,KE=h.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 6px;
`,dp=h(ue)`
  min-height: 33px;
  padding: 7px 9px;
  gap: 6px;
  white-space: nowrap;
  font-size: 11px;
  svg { width: 14px; height: 14px; }
`,YE=h.span`
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
`;h(Ie)`
  padding: 0;
  border: 0;
  background: transparent;
  box-shadow: none;
  @media (max-width: 520px) { padding: 0; }
`;const XE={low:"Baixa",medium:"Média",high:"Alta"},Dg=r=>r?new Date(`${r.slice(0,10)}T12:00:00`).toLocaleDateString("pt-BR"):"Não definida",Fg=r=>r?new Date(r).toLocaleString("pt-BR",{dateStyle:"short",timeStyle:"short"}):"Não definida";function JE({tasks:r,loading:i,statusFilter:s,priorityFilter:l,pagination:c,onStatusFilterChange:p,onPriorityFilterChange:f,onPageChange:m,onPageSizeChange:x,onNavigate:_,onDeactivate:j,onDelete:w}){const[S,z]=v.useState(""),O=v.useMemo(()=>r.filter(A=>{const C=S.trim().toLocaleLowerCase("pt-BR"),$=[A.title,A.description??"",String(A.id),...(A.items??[]).map(Q=>Q.title)].join(" ").toLocaleLowerCase("pt-BR"),G=!C||$.includes(C),I=s==="all"||s==="active"&&A.is_active||s==="inactive"&&!A.is_active,J=l==="all"||l==="none"&&!A.priority||A.priority===l;return G&&I&&J}),[r,S,s,l]);function R(){z(""),p("all"),f("all")}return e.jsxs(e.Fragment,{children:[e.jsxs(gr,{children:[e.jsxs("div",{children:[e.jsx("h1",{children:"Minhas tarefas"}),e.jsx("p",{children:"Organize seus compromissos e acompanhe o que precisa ser feito."})]}),e.jsxs(ue,{$variant:"primary",onClick:()=>_("/tasks/new"),children:[e.jsx(ft,{}),"Nova tarefa"]})]}),e.jsxs(SE,{"aria-label":"Resumo das tarefas",children:[e.jsxs(op,{children:[e.jsx(lp,{$tone:"blue",children:e.jsx(Gt,{})}),e.jsxs("div",{children:[e.jsx("span",{children:"Total de tarefas"}),e.jsx("strong",{children:c.total})]})]}),e.jsxs(op,{children:[e.jsx(lp,{$tone:"green",children:e.jsx(Gt,{})}),e.jsxs("div",{children:[e.jsx("span",{children:"Tarefas ativas"}),e.jsx("strong",{children:c.activeTotal})]})]}),e.jsxs(op,{children:[e.jsx(lp,{$tone:"gray",children:e.jsx(Gt,{})}),e.jsxs("div",{children:[e.jsx("span",{children:"Desativadas"}),e.jsx("strong",{children:c.inactiveTotal})]})]})]}),e.jsxs(CE,{children:[e.jsxs(EE,{children:[e.jsx(t1,{"aria-hidden":"true"}),e.jsx("input",{type:"search","aria-label":"Buscar tarefas",placeholder:"Buscar por tarefa, descrição ou item...",value:S,onChange:A=>z(A.target.value)})]}),e.jsx($E,{children:e.jsxs(Or,{"aria-label":"Filtrar por prioridade",value:l,onChange:A=>f(A.target.value),children:[e.jsx("option",{value:"all",children:"Todas as prioridades"}),e.jsx("option",{value:"high",children:"Prioridade alta"}),e.jsx("option",{value:"medium",children:"Prioridade média"}),e.jsx("option",{value:"low",children:"Prioridade baixa"}),e.jsx("option",{value:"none",children:"Sem prioridade"})]})})]}),e.jsxs(RE,{"aria-label":"Filtrar por situação",children:[e.jsxs(cp,{type:"button",$active:s==="all","aria-pressed":s==="all",onClick:()=>p("all"),children:["Todas ",e.jsx("span",{children:c.total})]}),e.jsxs(cp,{type:"button",$active:s==="active","aria-pressed":s==="active",onClick:()=>p("active"),children:["Ativas ",e.jsx("span",{children:c.activeTotal})]}),e.jsxs(cp,{type:"button",$active:s==="inactive","aria-pressed":s==="inactive",onClick:()=>p("inactive"),children:["Desativadas ",e.jsx("span",{children:c.inactiveTotal})]})]}),e.jsxs(PE,{children:[e.jsx("h2",{children:O.length===1?"1 tarefa nesta página":`${O.length} tarefas nesta página`}),e.jsx("span",{children:S||s!=="all"||l!=="all"?"Filtros aplicados nesta página":`Página ${c.page} de ${c.totalPages}`})]}),i?e.jsxs(Ve,{children:[e.jsx(Je,{}),e.jsx("p",{children:"Carregando tarefas..."})]}):O.length===0?e.jsx(Ie,{children:e.jsxs(Ve,{children:[e.jsx(Gt,{size:32}),e.jsx("h3",{children:r.length===0?"Sua lista está pronta para começar":"Nenhuma tarefa encontrada"}),e.jsx("p",{children:r.length===0?"Crie sua primeira tarefa e organize seus próximos passos.":"Tente mudar a busca ou remover alguns filtros."}),e.jsx("div",{style:{marginTop:16},children:r.length===0?e.jsxs(ue,{$variant:"primary",onClick:()=>_("/tasks/new"),children:[e.jsx(ft,{}),"Criar primeira tarefa"]}):e.jsxs(ue,{onClick:R,children:[e.jsx(er,{}),"Limpar filtros"]})})]})}):e.jsx(AE,{children:O.map(A=>{const C=[...A.items??[]].sort((J,Q)=>J.sort_order-Q.sort_order),$=C.filter(J=>!!J.completed).length,G=C.some(J=>J.completed!==void 0),I=C.length?Math.round($/C.length*100):0;return e.jsxs(DE,{$active:A.is_active,children:[e.jsxs(FE,{children:[e.jsxs(LE,{children:[e.jsxs(OE,{children:[e.jsx("h3",{children:A.title}),e.jsx("p",{children:A.description||"Sem descrição"})]}),e.jsxs(IE,{children:[e.jsx(xr,{$done:A.is_active,children:A.is_active?"Ativa":"Desativada"}),A.priority&&e.jsxs(YE,{$priority:A.priority,children:["Prioridade ",XE[A.priority].toLowerCase()]})]})]}),e.jsxs(BE,{children:[e.jsxs(Ml,{children:[e.jsx(He,{}),"Início ",Dg(A.start_date)]}),e.jsxs(Ml,{children:[e.jsx(He,{}),"Fim ",Dg(A.end_date)]}),e.jsxs(Ml,{children:[e.jsx(Gt,{}),C.length," ",C.length===1?"item":"itens"]}),e.jsxs(Ml,{children:["ID ",A.id]})]}),C.length>0&&e.jsxs(qE,{"aria-label":"Itens da tarefa",children:[C.slice(0,3).map(J=>e.jsx(UE,{title:J.title,children:J.title},J.id)),C.length>3&&e.jsxs(HE,{children:["+",C.length-3," itens"]}),G&&e.jsxs(VE,{"aria-label":`${I}% concluído`,children:[e.jsx(WE,{children:e.jsx("div",{style:{width:`${I}%`}})}),e.jsxs("span",{children:[$,"/",C.length," concluídos"]})]})]})]}),e.jsxs(GE,{children:[e.jsxs(QE,{children:[e.jsxs("span",{children:["Criada ",e.jsx("strong",{children:Fg(A.created_at)})]}),e.jsxs("span",{children:["Atualizada ",e.jsx("strong",{children:Fg(A.updated_at)})]})]}),e.jsxs(KE,{children:[e.jsxs(dp,{"aria-label":`Ver detalhes e editar ${A.title}`,title:"Detalhes e edição",onClick:()=>_(`/tasks/${encodeURIComponent(String(A.id))}`),children:[e.jsx(xc,{}),"Editar"]}),A.is_active&&e.jsx(dp,{$variant:"danger",onClick:()=>j(A.id),children:"Desativar"}),e.jsx(dp,{$variant:"danger","aria-label":`Excluir tarefa ${A.title}`,title:"Excluir tarefa",onClick:()=>w(A),children:e.jsx(mr,{})})]})]})]},A.id)})}),c.total>0&&e.jsxs(zE,{"aria-label":"Paginação da lista de tarefas",children:[e.jsxs(NE,{children:["Exibindo ",(c.page-1)*c.limit+1,"–",Math.min(c.page*c.limit,c.total)," de ",c.total," tarefas"]}),e.jsxs(ME,{children:[e.jsxs("label",{children:[e.jsx("span",{style:{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:0},children:"Tarefas por página"}),e.jsxs(TE,{"aria-label":"Tarefas por página",value:c.limit,onChange:A=>x(Number(A.target.value)),children:[e.jsx("option",{value:5,children:"5 por página"}),e.jsx("option",{value:10,children:"10 por página"}),e.jsx("option",{value:20,children:"20 por página"}),e.jsx("option",{value:50,children:"50 por página"}),e.jsx("option",{value:100,children:"100 por página"})]})]}),e.jsxs(Ag,{"aria-label":"Página anterior",disabled:!c.hasPreviousPage||i,onClick:()=>m(c.page-1),children:[e.jsx(io,{}),"Anterior"]}),e.jsxs(Ag,{"aria-label":"Próxima página",disabled:!c.hasNextPage||i,onClick:()=>m(c.page+1),children:["Próxima",e.jsx(Oi,{})]})]})]})]})}const ZE={"/login":"login","/":"today","/tasks":"list","/tasks/new":"create","/planning":"planning","/today":"today","/week":"week","/month":"month","/completed":"completed","/goals":"goals","/history":"history","/schedule":"schedule","/study-resources":"study-resources","/finances":"finances","/english-study":"english-study","/expenses":"expenses","/dividends":"dividends","/fixed-income":"fixed-income","/opportunities":"opportunities"};function Lg(r){const i=ZE[r];if(i)return{page:i};const s=r.match(/^\/tasks\/([^/]+)$/);if(s){const c=decodeURIComponent(s[1]);if(c!=="new")return{page:"details",taskId:c}}const l=r.match(/^\/study-resources\/([^/]+)\/edit$/);if(l)return{page:"study-resource-edit",resourceId:decodeURIComponent(l[1])}}function Tl(r){if(!r)return[];const i=new Map;for(const s of r.items){const l=String(s.task_id),c=i.get(l)??{task_id:s.task_id,record_date:r.date,task_title:s.task_title,items:[],total_items:0,completed_items:0};c.items.push({id:s.id,task_item_id:s.task_item_id,title:s.title,is_completed:s.is_completed,completed_at:s.completed_at,record_date:s.record_date}),c.total_items+=1,s.is_completed&&(c.completed_items+=1),i.set(l,c)}return[...i.values()]}function Og(r){return{date:r.start_date,total_items:r.total_items,completed_items:r.completed_items,pending_items:r.pending_items,completion_percentage:r.completion_percentage,items:r.items.map(i=>({...i,record_date:i.date}))}}function e$(){const[r,i]=v.useState(()=>window.location.pathname),s=Lg(r),l=(s==null?void 0:s.page)??"list",[c,p]=v.useState([]),[f,m]=v.useState([]),[x,_]=v.useState([]),[j,w]=v.useState({mode:"all"}),[S,z]=v.useState(1),[O,R]=v.useState({page:1,limit:20,total:0,totalPages:0,hasNextPage:!1,hasPreviousPage:!1}),[A,C]=v.useState([]),[$,G]=v.useState({page:1,limit:20,total:0,totalPages:0,hasNextPage:!1,hasPreviousPage:!1}),[I,J]=v.useState(!1),[Q,F]=v.useState([]),[ae,k]=v.useState([]),[y,B]=v.useState({area:"",type:"",search:""}),[le,je]=v.useState(1),[we,Pe]=v.useState({page:1,limit:12,total:0,totalPages:0,hasNextPage:!1,hasPreviousPage:!1}),[K,he]=v.useState(null),[oe,me]=v.useState(!1),[H,E]=v.useState([]),[b,re]=v.useState([]),[ce,T]=v.useState([]),[ie,ve]=v.useState({total_balance:0,account_count:0}),[ye,U]=v.useState([]),[de,st]=v.useState([]),[et,ot]=v.useState([]),[tt,tr]=v.useState("daily"),[Mt,gt]=v.useState(),[Ae,Xe]=v.useState(),[se,Be]=v.useState(),[$t,Ut]=v.useState(""),[vt,Rt]=v.useState([]),[rt,nt]=v.useState(1),[pr,pn]=v.useState({page:1,limit:10,total:0,totalPages:0,hasNextPage:!1,hasPreviousPage:!1}),[rr,nr]=v.useState(!1),[fn,M]=v.useState("all"),[_e,Ge]=v.useState("all"),[at,Ke]=v.useState(1),[mt,Zr]=v.useState(10),[Z,Ye]=v.useState({page:1,limit:10,total:0,activeTotal:0,inactiveTotal:0,totalPages:0,hasNextPage:!1,hasPreviousPage:!1}),[Ct,Pt]=v.useState(!1),[hn,dt]=v.useState(!1),[fo,Vi]=v.useState(!1),[Wi,ke]=v.useState(""),[xa,Fe]=v.useState(""),[ga,Gi]=v.useState(""),[Ir,En]=v.useState(null),[$n,Ja]=v.useState(!1),[In,Za]=v.useState(null),[va,mn]=v.useState(!1),Tt=v.useCallback(q=>{window.history.pushState({},"",q),i(q),ke(""),Fe("")},[]);v.useEffect(()=>{Lw().then(q=>Za(q)).catch(()=>{Za(null),window.location.pathname!=="/login"&&Tt("/login")}).finally(()=>mn(!0))},[Tt]),v.useEffect(()=>{const q=()=>{i(window.location.pathname),ke(""),Fe("")};return window.addEventListener("popstate",q),()=>window.removeEventListener("popstate",q)},[]),v.useEffect(()=>{Lg(r)||(window.history.replaceState({},"","/today"),i("/today"))},[r]);const Br=v.useCallback(async(q=1,ee=100)=>{Pt(!0),ke("");try{const X=await jl(q,ee);p(X.data),Ye(X.pagination),X.pagination.page!==q&&Ke(X.pagination.page)}catch{ke("Não foi possível carregar as tarefas. Confira se a API está ligada em http://localhost:3333.")}finally{Pt(!1)}},[]),ho=v.useCallback(async()=>{var q,ee;Pt(!0),ke("");try{const[X,V]=await Promise.all([jl(1,100),Ts()]);p(X.data),U(V)}catch(X){const V=(ee=(q=X==null?void 0:X.response)==null?void 0:q.data)==null?void 0:ee.error;ke(V||"Não foi possível carregar os itens de hoje. Confira a rota GET /api/daily.")}finally{Pt(!1)}},[]),Qi=v.useCallback(async()=>{var q,ee;Pt(!0),ke("");try{const[X,V]=await Promise.all([jl(1,100),Ts()]);p(X.data),U(V)}catch(X){const V=(ee=(q=X==null?void 0:X.response)==null?void 0:q.data)==null?void 0:ee.error;ke(V||"Não foi possível carregar os itens da semana. Confira as rotas GET /api/tasks e GET /api/daily.")}finally{Pt(!1)}},[]),Ki=v.useCallback(async()=>{var q,ee;Pt(!0),ke("");try{const[X,V]=await Promise.all([jl(1,100),Ts()]);p(X.data),U(V)}catch(X){const V=(ee=(q=X==null?void 0:X.response)==null?void 0:q.data)==null?void 0:ee.error;ke(V||"Não foi possível carregar os itens do mês. Confira as rotas GET /api/tasks e GET /api/daily.")}finally{Pt(!1)}},[]),Yi=v.useCallback(async()=>{var q,ee;Pt(!0),ke("");try{U(await Ts())}catch(X){const V=(ee=(q=X==null?void 0:X.response)==null?void 0:q.data)==null?void 0:ee.error;ke(V||"Não foi possível carregar as atividades concluídas. Confira a rota GET /api/daily.")}finally{Pt(!1)}},[]),Xi=v.useCallback(async()=>{var q,ee;Pt(!0),ke("");try{m(await F2())}catch(X){const V=(ee=(q=X==null?void 0:X.response)==null?void 0:q.data)==null?void 0:ee.error;ke(V||"Não foi possível carregar os objetivos. Confira se a API e a migração de objetivos estão configuradas.")}finally{Pt(!1)}},[]),en=v.useCallback(async(q,ee)=>{var X,V;Pt(!0),ke("");try{const xe=await H2(q,ee);_(xe.data),R(xe.pagination)}catch(xe){const De=(V=(X=xe==null?void 0:xe.response)==null?void 0:X.data)==null?void 0:V.error;ke(De||"Não foi possível carregar a agenda. Confira a rota GET /api/schedule.")}finally{Pt(!1)}},[]),vr=v.useCallback(async(q=1)=>{var ee,X;J(!0),ke("");try{const V=await V2(q);return C(V.data),G(V.pagination),V}catch(V){const xe=(X=(ee=V==null?void 0:V.response)==null?void 0:ee.data)==null?void 0:X.error;ke(xe||"Não foi possível carregar os alertas. Confira a rota GET /api/schedule/alerts.");return}finally{J(!1)}},[]),yt=v.useCallback(async(q=le,ee=y)=>{var X,V;Pt(!0),ke("");try{const[xe,De]=await Promise.all([qw({...ee,page:q,limit:12}),Uw()]);F(xe.data),Pe(xe.pagination),k(De)}catch(xe){const De=(V=(X=xe==null?void 0:xe.response)==null?void 0:X.data)==null?void 0:V.error;ke(De||"Não foi possível carregar a biblioteca de estudos. Confira as rotas /api/study-resources.")}finally{Pt(!1)}},[y,le]),At=v.useCallback(async()=>{var q,ee;Pt(!0),ke("");try{const[X,V,xe,De]=await Promise.all([j2(),b2(),S2(),R2()]);ve(X),E(V),re(xe),T(De)}catch(X){const V=(ee=(q=X==null?void 0:X.response)==null?void 0:q.data)==null?void 0:ee.error;ke(V||"NÃ£o foi possÃ­vel carregar as finanÃ§as. Confira as rotas /api/finances.")}finally{Pt(!1)}},[]),xn=v.useCallback(async(q=rt,ee=tt,X=Mt)=>{var V,xe;Pt(!0),ke("");try{if(ee==="daily"){const De=await M2(q,10,X);st(De.data),ot([]),pn(De.pagination),Xe(void 0);const Ue=De.data[0];Ue?(Be(Ue),Ut(Ue.date.slice(0,10)),Rt(Tl(Ue))):(Be(void 0),Ut(""),Rt([]))}else{const De=ee==="week"?await A2(q,10,X):await D2(q,10,X);st([]),ot(De.data),pn(De.pagination);const Ue=De.data[0];if(Xe(Ue),Ue){const bt=Og(Ue);Be(bt),Ut(Ue.start_date.slice(0,10)),Rt(Tl(bt))}else Be(void 0),Ut(""),Rt([])}}catch(De){const Ue=(xe=(V=De==null?void 0:De.response)==null?void 0:V.data)==null?void 0:xe.error;ke(Ue||`Não foi possível carregar o histórico. Confira a rota GET ${ee==="week"?"/api/daily/history/week":ee==="month"?"/api/daily/history/month":"/api/daily/history"}.`)}finally{Pt(!1)}},[tt,rt,Mt]),Ji=v.useCallback(async q=>{var ee,X;Ut(q),Xe(void 0),nr(!0);try{const V=await T2(q),xe={date:V.date,total_items:V.summary.total_items,completed_items:V.summary.completed_items,pending_items:V.summary.pending_items,completion_percentage:V.summary.completion_percentage,items:V.data.map(De=>({id:De.id,task_id:De.task_id,task_title:De.task_title,task_item_id:De.task_item_id,title:De.item_title,is_completed:De.is_completed,completed_at:De.completed_at,record_date:De.date}))};Be(xe),Rt(Tl(xe))}catch(V){Be(void 0),Rt([]),ke(((X=(ee=V==null?void 0:V.response)==null?void 0:ee.data)==null?void 0:X.error)||"Não foi possível carregar os registros desta data.")}finally{nr(!1)}},[]),ya=v.useCallback(q=>{const ee=Og(q);Xe(q),Be(ee),Ut(q.start_date.slice(0,10)),Rt(Tl(ee))},[]);v.useEffect(()=>{!va||!In||(l==="planning"||l==="today"?ho():l==="week"?Qi():l==="month"?Ki():l==="completed"?Yi():l==="goals"?Xi():l==="schedule"?(en(j,S),vr()):l==="study-resources"?yt(le,y):l==="finances"?At():l==="list"?Br(at,mt):l!=="login"&&l!=="english-study"&&l!=="expenses"&&l!=="dividends"&&l!=="fixed-income"&&l!=="opportunities"&&l!=="study-resource-edit"&&Br(1,100))},[va,In,l,at,mt,j,S,le,y,Br,ho,Qi,Ki,Yi,Xi,en,vr,yt,At]),v.useEffect(()=>{if(l!=="study-resource-edit"){he(null),me(!1);return}if(!va||!In||!(s!=null&&s.resourceId))return;const q=s.resourceId;if(K&&String(K.id)===String(q)){me(!1);return}const ee=Q.find(V=>String(V.id)===String(q));if(ee){he(ee),me(!1);return}let X=!1;return me(!0),x2(q).then(V=>{X||he(V)}).catch(()=>{X||he(null)}).finally(()=>{X||me(!1)}),()=>{X=!0}},[va,In,K,l,s==null?void 0:s.resourceId,Q]),v.useEffect(()=>{(l==="history"||l==="planning")&&xn(rt,tt,Mt)},[l,rt,tt,Mt,xn]);const wc=v.useCallback(async q=>{var ee,X;ke(""),Fe(""),dt(!0);try{return await K2(q),Tt("/tasks"),Fe("Tarefa criada com sucesso."),Ke(1),await Br(1,mt),!0}catch(V){const xe=(X=(ee=V==null?void 0:V.response)==null?void 0:ee.data)==null?void 0:X.error;return ke(xe||"Não foi possível salvar. Confira a API, o schema e a função ensure_task_daily_records no PostgreSQL."),!1}finally{dt(!1)}},[Br,Tt,mt]),mo=v.useCallback(async q=>{var ee,X;if(!(s!=null&&s.taskId))return!1;ke(""),Fe(""),dt(!0);try{return await Y2(s.taskId,q),Tt("/tasks"),Fe("Tarefa atualizada com sucesso."),Ke(1),await Br(1,mt),!0}catch(V){const xe=(X=(ee=V==null?void 0:V.response)==null?void 0:ee.data)==null?void 0:X.error;return ke(xe||"Não foi possível atualizar a tarefa. Confira se a API implementa PATCH /api/tasks/:id."),!1}finally{dt(!1)}},[Br,Tt,s==null?void 0:s.taskId,mt]),ei=v.useCallback(async q=>{var ee,X;ke(""),Fe(""),dt(!0);try{const V=await L2(q);return m(xe=>[V,...xe]),Fe("Objetivo criado com sucesso."),!0}catch(V){const xe=(X=(ee=V==null?void 0:V.response)==null?void 0:ee.data)==null?void 0:X.error;return ke(xe||"Não foi possível salvar o objetivo. Confira a rota POST /api/objectives e a migração do banco."),!1}finally{dt(!1)}},[]),qr=v.useCallback(async q=>{var ee,X;ke(""),Fe(""),dt(!0);try{await W2(q),Fe("Agendamento criado com sucesso.");const[,V]=await Promise.all([en(j,S),vr($.page)]);return V&&!V.data.length&&$.page>1&&await vr($.page-1),!0}catch(V){const xe=(X=(ee=V==null?void 0:V.response)==null?void 0:ee.data)==null?void 0:X.error;return ke(xe||"Não foi possível criar o agendamento. Confira a rota POST /api/schedule."),!1}finally{dt(!1)}},[en,vr,$.page,j,S]),_c=v.useCallback(async(q,ee)=>{var X,V;ke(""),Fe(""),dt(!0);try{await G2(q,ee),Fe("Agendamento atualizado com sucesso.");const[,xe]=await Promise.all([en(j,S),vr($.page)]);return xe&&!xe.data.length&&$.page>1&&await vr($.page-1),!0}catch(xe){const De=(V=(X=xe==null?void 0:xe.response)==null?void 0:X.data)==null?void 0:V.error;return ke(De||"Não foi possível atualizar o agendamento. Confira a rota PATCH /api/schedule/:id."),!1}finally{dt(!1)}},[en,vr,$.page,j,S]),Er=v.useCallback(async q=>{var ee,X;ke(""),Fe("");try{await Q2(q.id),Fe("Agendamento excluído com sucesso.");const V=x.length===1&&S>1?S-1:S;z(V);const[,xe]=await Promise.all([en(j,V),vr($.page)]);return xe&&!xe.data.length&&$.page>1&&await vr($.page-1),!0}catch(V){const xe=(X=(ee=V==null?void 0:V.response)==null?void 0:ee.data)==null?void 0:X.error;return ke(xe||"Não foi possível excluir o agendamento. Confira a rota DELETE /api/schedule/:id."),!1}},[en,vr,$.page,x.length,S,j]),Bn=v.useCallback(async(q=le,ee=y)=>{await yt(q,ee)},[yt,y,le]),kc=v.useCallback(async q=>{var ee,X;ke(""),Fe(""),dt(!0);try{return await g2(q),await Bn(1,y),je(1),Fe("Material adicionado à biblioteca."),!0}catch(V){return ke(((X=(ee=V==null?void 0:V.response)==null?void 0:ee.data)==null?void 0:X.error)||"Não foi possível adicionar o material."),!1}finally{dt(!1)}},[Bn,y]),Sc=v.useCallback(async(q,ee)=>{var X,V;ke(""),Fe(""),dt(!0);try{return await v2(q,ee),await Bn(),Fe("Material atualizado com sucesso."),Tt("/study-resources"),!0}catch(xe){return ke(((V=(X=xe==null?void 0:xe.response)==null?void 0:X.data)==null?void 0:V.error)||"Não foi possível atualizar o material."),!1}finally{dt(!1)}},[Tt,Bn]),ti=v.useCallback(async q=>{var ee,X;ke(""),Fe("");try{await y2(q.id);const V=Q.length===1&&le>1?le-1:le;return await Bn(V),je(V),Fe("Material removido da biblioteca."),!0}catch(V){return ke(((X=(ee=V==null?void 0:V.response)==null?void 0:ee.data)==null?void 0:X.error)||"Não foi possível remover o material."),!1}},[Bn,le,Q.length]),ri=v.useCallback(async q=>{var ee,X;ke(""),Fe(""),dt(!0);try{return await w2(q),await At(),Fe("Conta adicionada com sucesso."),!0}catch(V){return ke(((X=(ee=V==null?void 0:V.response)==null?void 0:ee.data)==null?void 0:X.error)||"NÃ£o foi possÃ­vel adicionar a conta."),!1}finally{dt(!1)}},[At]),ja=v.useCallback(async(q,ee)=>{var X,V;ke(""),Fe(""),dt(!0);try{return await _2(q,ee),await At(),Fe("Conta atualizada com sucesso."),!0}catch(xe){return ke(((V=(X=xe==null?void 0:xe.response)==null?void 0:X.data)==null?void 0:V.error)||"NÃ£o foi possÃ­vel atualizar a conta."),!1}finally{dt(!1)}},[At]),ni=v.useCallback(async q=>{var ee,X;ke(""),Fe("");try{return await k2(q.id),await At(),Fe("Conta removida com sucesso."),!0}catch(V){return ke(((X=(ee=V==null?void 0:V.response)==null?void 0:ee.data)==null?void 0:X.error)||"NÃ£o foi possÃ­vel remover a conta."),!1}},[At]),Cc=v.useCallback(async q=>{var ee,X;ke(""),Fe(""),dt(!0);try{return await C2(q),await At(),Fe("Bem adicionado com sucesso."),!0}catch(V){return ke(((X=(ee=V==null?void 0:V.response)==null?void 0:ee.data)==null?void 0:X.error)||"Não foi possível adicionar o bem."),!1}finally{dt(!1)}},[At]),Ec=v.useCallback(async(q,ee)=>{var X,V;ke(""),Fe(""),dt(!0);try{return await E2(q,ee),await At(),Fe("Bem atualizado com sucesso."),!0}catch(xe){return ke(((V=(X=xe==null?void 0:xe.response)==null?void 0:X.data)==null?void 0:V.error)||"Não foi possível atualizar o bem."),!1}finally{dt(!1)}},[At]),Zi=v.useCallback(async q=>{var ee,X;ke(""),Fe("");try{return await $2(q.id),await At(),Fe("Bem removido com sucesso."),!0}catch(V){return ke(((X=(ee=V==null?void 0:V.response)==null?void 0:ee.data)==null?void 0:X.error)||"Não foi possível remover o bem."),!1}},[At]),xo=v.useCallback(async q=>{var ee,X;ke(""),Fe(""),dt(!0);try{return await P2(q),await At(),Fe("Passivo adicionado com sucesso."),!0}catch(V){return ke(((X=(ee=V==null?void 0:V.response)==null?void 0:ee.data)==null?void 0:X.error)||"Não foi possível adicionar o passivo."),!1}finally{dt(!1)}},[At]),es=v.useCallback(async(q,ee)=>{var X,V;ke(""),Fe(""),dt(!0);try{return await z2(q,ee),await At(),Fe("Passivo atualizado com sucesso."),!0}catch(xe){return ke(((V=(X=xe==null?void 0:xe.response)==null?void 0:X.data)==null?void 0:V.error)||"Não foi possível atualizar o passivo."),!1}finally{dt(!1)}},[At]),ba=v.useCallback(async q=>{var ee,X;ke(""),Fe("");try{return await N2(q.id),await At(),Fe("Passivo removido com sucesso."),!0}catch(V){return ke(((X=(ee=V==null?void 0:V.response)==null?void 0:ee.data)==null?void 0:X.error)||"Não foi possível remover o passivo."),!1}},[At]),$c=v.useCallback(async(q,ee)=>{var X,V;ke(""),Fe(""),dt(!0);try{const xe=await O2(q,ee);return m(De=>De.map(Ue=>String(Ue.id)===String(q)?xe:Ue)),Fe("Objetivo atualizado com sucesso."),!0}catch(xe){const De=(V=(X=xe==null?void 0:xe.response)==null?void 0:X.data)==null?void 0:V.error;return ke(De||"Não foi possível atualizar o objetivo. Confira a rota PATCH /api/objectives/:id."),!1}finally{dt(!1)}},[]),ts=v.useCallback(async q=>{var ee,X;ke(""),Fe("");try{return await I2(q.id),m(V=>V.filter(xe=>String(xe.id)!==String(q.id))),Fe("Objetivo excluído com sucesso."),!0}catch(V){const xe=(X=(ee=V==null?void 0:V.response)==null?void 0:ee.data)==null?void 0:X.error;return ke(xe||"Não foi possível excluir o objetivo. Confira a rota DELETE /api/objectives/:id."),!1}},[]),ut=v.useCallback(async(q,ee)=>{var X,V;ke("");try{const xe=await B2(q,ee);return m(De=>De.map(Ue=>String(Ue.id)===String(q)?{...Ue,steps:[...Ue.steps,xe]}:Ue)),!0}catch(xe){const De=(V=(X=xe==null?void 0:xe.response)==null?void 0:X.data)==null?void 0:V.error;return ke(De||"Não foi possível adicionar a etapa. Confira a rota POST /api/objectives/:id/steps."),!1}},[]),go=v.useCallback(async(q,ee,X)=>{var V,xe,De;ke(""),m(Ue=>Ue.map(bt=>String(bt.id)===String(q)?{...bt,steps:bt.steps.map(Lt=>String(Lt.id)===String(ee.id)?{...Lt,status:X?"concluido":"pendente"}:Lt)}:bt));try{const Ue=await q2(q,ee.id,X?"concluido":"pendente");return m(bt=>bt.map(Lt=>String(Lt.id)===String(q)?{...Lt,steps:Lt.steps.map(It=>String(It.id)===String(ee.id)?Ue:It)}:Lt)),(V=Ue.activity)!=null&&V.message&&Fe(Ue.activity.message),!0}catch(Ue){m(Lt=>Lt.map(It=>String(It.id)===String(q)?{...It,steps:It.steps.map(Hn=>String(Hn.id)===String(ee.id)?ee:Hn)}:It));const bt=(De=(xe=Ue==null?void 0:Ue.response)==null?void 0:xe.data)==null?void 0:De.error;return ke(bt||"Não foi possível atualizar a etapa. Confira a rota PATCH /api/objectives/:id/steps/:stepId."),!1}},[]),vo=v.useCallback(async(q,ee)=>{var X,V;ke("");try{return await U2(q,ee.id),m(xe=>xe.map(De=>String(De.id)===String(q)?{...De,steps:De.steps.filter(Ue=>String(Ue.id)!==String(ee.id))}:De)),!0}catch(xe){const De=(V=(X=xe==null?void 0:xe.response)==null?void 0:X.data)==null?void 0:V.error;return ke(De||"Não foi possível remover a etapa. Confira a rota DELETE /api/objectives/:id/steps/:stepId."),!1}},[]),qn=v.useCallback(async(q,ee)=>{var X,V,xe,De;ke(""),Fe(""),Gi(""),U(Ue=>Ue.map(bt=>{const Lt=bt.items.map(It=>String(It.id)===String(q)?{...It,is_completed:ee}:It);return Lt.some((It,Hn)=>It!==bt.items[Hn])?{...bt,items:Lt,completed_items:Lt.filter(It=>It.is_completed).length}:bt}));try{const Ue=await J2(q,ee);ee&&Gi(((X=Ue.activity)==null?void 0:X.message)||"Você concluiu uma atividade da sua rotina."),(V=Ue.activity)!=null&&V.message&&!ee&&Fe(Ue.activity.message);const{item_title:bt,title:Lt,...It}=Ue;U(Hn=>Hn.map(Vn=>{const Wn=Vn.items.map($r=>String($r.id)===String(Ue.id)?{...$r,...It,title:bt??Lt??$r.title}:$r);return{...Vn,items:Wn,completed_items:Wn.filter($r=>$r.is_completed).length}}))}catch(Ue){const bt=(De=(xe=Ue==null?void 0:Ue.response)==null?void 0:xe.data)==null?void 0:De.error;ke(bt||"Não foi possível atualizar a conclusão do item. Confira a rota PATCH /api/daily/items/:id.");try{U(await Ts())}catch{ke(`${bt||"Não foi possível atualizar a conclusão do item."} Não foi possível sincronizar novamente os itens de hoje.`)}}},[]),wa=v.useCallback(async(q,ee)=>{if(!ee&&!window.confirm("Desativar esta tarefa? O histórico será preservado."))return!1;const X=c.find(V=>String(V.id)===String(q));ke(""),Fe(""),Vi(!0);try{return ee?await e_(q):await Z2(q),p(V=>V.map(xe=>String(xe.id)===String(q)?{...xe,is_active:ee}:xe)),X&&X.is_active!==ee&&Ye(V=>({...V,activeTotal:V.activeTotal+(ee?1:-1),inactiveTotal:V.inactiveTotal+(ee?-1:1)})),Fe(ee?"Tarefa ativada.":"Tarefa desativada."),!0}catch{return ke(ee?"Não foi possível ativar a tarefa. Confira se a API implementa PATCH /api/tasks/:id/activate.":"Não foi possível desativar a tarefa. Confira a rota PATCH /api/tasks/:id/deactivate."),!1}finally{Vi(!1)}},[c]),rs=v.useCallback(async q=>{En(q)},[]),yo=v.useCallback(async()=>{var q,ee;if(!(!Ir||$n)){ke(""),Fe(""),Ja(!0);try{await X2(Ir.id);const X=c.length===1&&at>1?at-1:at;Ke(X),await Br(X,mt),En(null),Fe("Tarefa excluída com sucesso.")}catch(X){const V=(ee=(q=X==null?void 0:X.response)==null?void 0:q.data)==null?void 0:ee.error;ke(V||"Não foi possível excluir a tarefa. Confira se a API implementa DELETE /api/tasks/:id."),En(null)}finally{Ja(!1)}}},[$n,Br,mt,at,Ir,c.length]),Un=v.useMemo(()=>({tasks:c,loading:Ct,onNavigate:Tt,onDeactivate:q=>{wa(q,!1)}}),[c,Ct,Tt,wa]);async function ai(q){const ee=await Fw(q);return Za(ee),mn(!0),Tt("/today"),ee}async function gn(q){return await Dw(q)}async function vn(){try{await Ow()}finally{Za(null),Tt("/login")}}if(!va)return null;if(l==="login"||!In)return e.jsx(JS,{onLogin:ai,onRegister:gn});let ht;switch(l){case"planning":ht=e.jsx(qC,{tasks:c,dailyRecords:ye,loading:Ct,onNavigate:Tt,onToggleItem:(q,ee)=>{qn(q,ee)},onDeactivate:q=>{wa(q,!1)},history:{mode:tt,days:de,periods:et,selectedDay:se,selectedPeriod:Ae,selectedDate:$t,dayDetails:vt,pagination:pr,detailLoading:rr,referenceDate:Mt,onModeChange:q=>{tr(q),nt(1),gt(void 0),Xe(void 0),tt===q&&q!=="daily"&&xn(1,q,void 0)},onPeriodSearch:q=>{gt(q),nt(1),Xe(void 0),Mt===q&&xn(1,tt,q)},onSelectDate:Ji,onSelectPeriod:ya,onPageChange:nt}});break;case"create":ht=e.jsx(Jk,{saving:hn,onCreate:wc,onValidationError:ke});break;case"today":ht=e.jsx(x1,{...Un,dailyRecords:ye,onToggleItem:(q,ee)=>{qn(q,ee)}});break;case"week":ht=e.jsx(g1,{...Un,dailyRecords:ye,onToggleItem:(q,ee)=>{qn(q,ee)}});break;case"month":ht=e.jsx(m1,{...Un,dailyRecords:ye,onToggleItem:(q,ee)=>{qn(q,ee)}});break;case"completed":ht=e.jsx(p1,{dailyRecords:ye,loading:Ct,onNavigate:Tt});break;case"goals":ht=e.jsx(RS,{goals:f,loading:Ct,saving:hn,onCreate:ei,onUpdate:$c,onDelete:ts,onAddStep:ut,onToggleStep:go,onDeleteStep:vo});break;case"study-resources":ht=e.jsx(F4,{resources:Q,areas:ae,loading:Ct,saving:hn,pagination:we,filters:y,onFiltersChange:q=>{B(q),je(1)},onPageChange:je,onCreate:kc,onDelete:ti,onEdit:q=>{he(q),me(!1),Tt(`/study-resources/${encodeURIComponent(String(q.id))}/edit`)}});break;case"study-resource-edit":ht=e.jsx(q4,{resource:K,loading:oe,saving:hn,onBack:()=>Tt("/study-resources"),onSave:q=>s!=null&&s.resourceId?Sc(s.resourceId,q):Promise.resolve(!1)});break;case"finances":ht=e.jsx(X4,{accounts:H,assets:b,liabilities:ce,summary:ie,loading:Ct,saving:hn,onCreate:ri,onUpdate:ja,onDelete:ni,onCreateAsset:Cc,onUpdateAsset:Ec,onDeleteAsset:Zi,onCreateLiability:xo,onUpdateLiability:es,onDeleteLiability:ba});break;case"dividends":ht=e.jsx(Cg,{},"dividends");break;case"fixed-income":ht=e.jsx(Cg,{assetType:"renda_fixa"},"fixed-income");break;case"opportunities":ht=e.jsx(_E,{});break;case"expenses":ht=e.jsx(q3,{});break;case"english-study":ht=e.jsx(_3,{onNavigate:q=>{q==="/study-resources"&&(B({area:"Inglês",type:"",search:""}),je(1)),Tt(q)}});break;case"schedule":ht=e.jsx(d4,{events:x,alerts:A,loading:Ct,alertsLoading:I,saving:hn,query:j,pagination:O,alertPagination:$,onApplyFilter:q=>{w(q),z(1),JSON.stringify(j)===JSON.stringify(q)&&S===1&&en(q,1)},onPageChange:z,onAlertPageChange:q=>{vr(q)},onCreate:qr,onUpdate:_c,onDelete:Er});break;case"details":{const q=c.find(ee=>String(ee.id)===String(s==null?void 0:s.taskId));ht=e.jsx(kE,{task:q,loading:Ct,saving:hn,statusChanging:fo,onBack:()=>Tt("/tasks"),onSave:mo,onDelete:ee=>{const X=c.find(V=>String(V.id)===String(ee));X&&rs(X)},onSetActive:wa,onValidationError:ke});break}case"history":ht=e.jsx(f1,{mode:tt,days:de,periods:et,selectedDay:se,selectedPeriod:Ae,selectedDate:$t,dayDetails:vt,pagination:pr,loading:Ct,detailLoading:rr,referenceDate:Mt,onModeChange:q=>{tr(q),nt(1),gt(void 0),Xe(void 0),tt===q&&q!=="daily"&&xn(1,q,void 0)},onPeriodSearch:q=>{gt(q),nt(1),Xe(void 0),Mt===q&&xn(1,tt,q)},onSelectDate:Ji,onSelectPeriod:ya,onPageChange:nt});break;case"list":default:ht=e.jsx(JE,{...Un,statusFilter:fn,priorityFilter:_e,pagination:Z,onPageChange:Ke,onPageSizeChange:q=>{Zr(q),Ke(1)},onStatusFilterChange:q=>{M(q),Ke(1)},onPriorityFilterChange:q=>{Ge(q),Ke(1)},onDelete:q=>{rs(q)}})}return e.jsxs(Xk,{page:l,error:Wi,notice:xa,celebration:ga,onNavigate:Tt,user:In,onLogout:()=>{vn()},onDismissError:()=>ke(""),onDismissNotice:()=>Fe(""),onDismissCelebration:()=>Gi(""),children:[ht,e.jsx(jc,{open:Ir!==null,title:"Deseja excluir esta tarefa?",description:Ir?`A tarefa “${Ir.title}” será removida permanentemente, incluindo seus itens.`:"",busy:$n,onCancel:()=>{$n||En(null)},onConfirm:()=>{yo()}})]})}function t$(){return e.jsx(Nk,{children:e.jsx(e$,{})})}const r$=kj`
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
`,n$={colors:{navy:"#0F172A",blue:"#2563EB",muted:"#64748B",border:"#E2E8F0",background:"#F8FAFC"}};m0.createRoot(document.getElementById("root")).render(e.jsx(dr.StrictMode,{children:e.jsxs(yj,{theme:n$,children:[e.jsx(r$,{}),e.jsx(t$,{})]})}));
