(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))l(c);new MutationObserver(c=>{for(const u of c)if(u.type==="childList")for(const m of u.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&l(m)}).observe(document,{childList:!0,subtree:!0});function s(c){const u={};return c.integrity&&(u.integrity=c.integrity),c.referrerPolicy&&(u.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?u.credentials="include":c.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function l(c){if(c.ep)return;c.ep=!0;const u=s(c);fetch(c.href,u)}})();function Dv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Su={exports:{}},Zs={},Cu={exports:{}},ct={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lx;function ij(){if(lx)return ct;lx=1;var t=Symbol.for("react.element"),a=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),m=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),w=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),S=Symbol.iterator;function _(z){return z===null||typeof z!="object"?null:(z=S&&z[S]||z["@@iterator"],typeof z=="function"?z:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,N={};function V(z,k,se){this.props=z,this.context=k,this.refs=N,this.updater=se||R}V.prototype.isReactComponent={},V.prototype.setState=function(z,k){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,k,"setState")},V.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function $(){}$.prototype=V.prototype;function j(z,k,se){this.props=z,this.context=k,this.refs=N,this.updater=se||R}var A=j.prototype=new $;A.constructor=j,M(A,V.prototype),A.isPureReactComponent=!0;var O=Array.isArray,ae=Object.prototype.hasOwnProperty,J={current:null},I={key:!0,ref:!0,__self:!0,__source:!0};function ce(z,k,se){var ie,D={},de=null,_e=null;if(k!=null)for(ie in k.ref!==void 0&&(_e=k.ref),k.key!==void 0&&(de=""+k.key),k)ae.call(k,ie)&&!I.hasOwnProperty(ie)&&(D[ie]=k[ie]);var ke=arguments.length-2;if(ke===1)D.children=se;else if(1<ke){for(var U=Array(ke),he=0;he<ke;he++)U[he]=arguments[he+2];D.children=U}if(z&&z.defaultProps)for(ie in ke=z.defaultProps,ke)D[ie]===void 0&&(D[ie]=ke[ie]);return{$$typeof:t,type:z,key:de,ref:_e,props:D,_owner:J.current}}function C(z,k){return{$$typeof:t,type:z.type,key:k,ref:z.ref,props:z.props,_owner:z._owner}}function y(z){return typeof z=="object"&&z!==null&&z.$$typeof===t}function q(z){var k={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(se){return k[se]})}var F=/\/+/g;function fe(z,k){return typeof z=="object"&&z!==null&&z.key!=null?q(""+z.key):k.toString(36)}function ge(z,k,se,ie,D){var de=typeof z;(de==="undefined"||de==="boolean")&&(z=null);var _e=!1;if(z===null)_e=!0;else switch(de){case"string":case"number":_e=!0;break;case"object":switch(z.$$typeof){case t:case a:_e=!0}}if(_e)return _e=z,D=D(_e),z=ie===""?"."+fe(_e,0):ie,O(D)?(se="",z!=null&&(se=z.replace(F,"$&/")+"/"),ge(D,k,se,"",function(he){return he})):D!=null&&(y(D)&&(D=C(D,se+(!D.key||_e&&_e.key===D.key?"":(""+D.key).replace(F,"$&/")+"/")+z)),k.push(D)),1;if(_e=0,ie=ie===""?".":ie+":",O(z))for(var ke=0;ke<z.length;ke++){de=z[ke];var U=ie+fe(de,ke);_e+=ge(de,k,se,U,D)}else if(U=_(z),typeof U=="function")for(z=U.call(z),ke=0;!(de=z.next()).done;)de=de.value,U=ie+fe(de,ke++),_e+=ge(de,k,se,U,D);else if(de==="object")throw k=String(z),Error("Objects are not valid as a React child (found: "+(k==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":k)+"). If you meant to render a collection of children, use an array instead.");return _e}function Ne(z,k,se){if(z==null)return z;var ie=[],D=0;return ge(z,ie,"","",function(de){return k.call(se,de,D++)}),ie}function K(z){if(z._status===-1){var k=z._result;k=k(),k.then(function(se){(z._status===0||z._status===-1)&&(z._status=1,z._result=se)},function(se){(z._status===0||z._status===-1)&&(z._status=2,z._result=se)}),z._status===-1&&(z._status=0,z._result=k)}if(z._status===1)return z._result.default;throw z._result}var je={current:null},ue={transition:null},ye={ReactCurrentDispatcher:je,ReactCurrentBatchConfig:ue,ReactCurrentOwner:J};function W(){throw Error("act(...) is not supported in production builds of React.")}return ct.Children={map:Ne,forEach:function(z,k,se){Ne(z,function(){k.apply(this,arguments)},se)},count:function(z){var k=0;return Ne(z,function(){k++}),k},toArray:function(z){return Ne(z,function(k){return k})||[]},only:function(z){if(!y(z))throw Error("React.Children.only expected to receive a single React element child.");return z}},ct.Component=V,ct.Fragment=s,ct.Profiler=c,ct.PureComponent=j,ct.StrictMode=l,ct.Suspense=g,ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ye,ct.act=W,ct.cloneElement=function(z,k,se){if(z==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+z+".");var ie=M({},z.props),D=z.key,de=z.ref,_e=z._owner;if(k!=null){if(k.ref!==void 0&&(de=k.ref,_e=J.current),k.key!==void 0&&(D=""+k.key),z.type&&z.type.defaultProps)var ke=z.type.defaultProps;for(U in k)ae.call(k,U)&&!I.hasOwnProperty(U)&&(ie[U]=k[U]===void 0&&ke!==void 0?ke[U]:k[U])}var U=arguments.length-2;if(U===1)ie.children=se;else if(1<U){ke=Array(U);for(var he=0;he<U;he++)ke[he]=arguments[he+2];ie.children=ke}return{$$typeof:t,type:z.type,key:D,ref:de,props:ie,_owner:_e}},ct.createContext=function(z){return z={$$typeof:m,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},z.Provider={$$typeof:u,_context:z},z.Consumer=z},ct.createElement=ce,ct.createFactory=function(z){var k=ce.bind(null,z);return k.type=z,k},ct.createRef=function(){return{current:null}},ct.forwardRef=function(z){return{$$typeof:f,render:z}},ct.isValidElement=y,ct.lazy=function(z){return{$$typeof:b,_payload:{_status:-1,_result:z},_init:K}},ct.memo=function(z,k){return{$$typeof:w,type:z,compare:k===void 0?null:k}},ct.startTransition=function(z){var k=ue.transition;ue.transition={};try{z()}finally{ue.transition=k}},ct.unstable_act=W,ct.useCallback=function(z,k){return je.current.useCallback(z,k)},ct.useContext=function(z){return je.current.useContext(z)},ct.useDebugValue=function(){},ct.useDeferredValue=function(z){return je.current.useDeferredValue(z)},ct.useEffect=function(z,k){return je.current.useEffect(z,k)},ct.useId=function(){return je.current.useId()},ct.useImperativeHandle=function(z,k,se){return je.current.useImperativeHandle(z,k,se)},ct.useInsertionEffect=function(z,k){return je.current.useInsertionEffect(z,k)},ct.useLayoutEffect=function(z,k){return je.current.useLayoutEffect(z,k)},ct.useMemo=function(z,k){return je.current.useMemo(z,k)},ct.useReducer=function(z,k,se){return je.current.useReducer(z,k,se)},ct.useRef=function(z){return je.current.useRef(z)},ct.useState=function(z){return je.current.useState(z)},ct.useSyncExternalStore=function(z,k,se){return je.current.useSyncExternalStore(z,k,se)},ct.useTransition=function(){return je.current.useTransition()},ct.version="18.3.1",ct}var cx;function ff(){return cx||(cx=1,Cu.exports=ij()),Cu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dx;function sj(){if(dx)return Zs;dx=1;var t=ff(),a=Symbol.for("react.element"),s=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function m(f,g,w){var b,S={},_=null,R=null;w!==void 0&&(_=""+w),g.key!==void 0&&(_=""+g.key),g.ref!==void 0&&(R=g.ref);for(b in g)l.call(g,b)&&!u.hasOwnProperty(b)&&(S[b]=g[b]);if(f&&f.defaultProps)for(b in g=f.defaultProps,g)S[b]===void 0&&(S[b]=g[b]);return{$$typeof:a,type:f,key:_,ref:R,props:S,_owner:c.current}}return Zs.Fragment=s,Zs.jsx=m,Zs.jsxs=m,Zs}var ux;function oj(){return ux||(ux=1,Su.exports=sj()),Su.exports}var e=oj(),x=ff();const Cr=Dv(x);var Il={},Eu={exports:{}},Ur={},$u={exports:{}},Ru={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var px;function lj(){return px||(px=1,(function(t){function a(ue,ye){var W=ue.length;ue.push(ye);e:for(;0<W;){var z=W-1>>>1,k=ue[z];if(0<c(k,ye))ue[z]=ye,ue[W]=k,W=z;else break e}}function s(ue){return ue.length===0?null:ue[0]}function l(ue){if(ue.length===0)return null;var ye=ue[0],W=ue.pop();if(W!==ye){ue[0]=W;e:for(var z=0,k=ue.length,se=k>>>1;z<se;){var ie=2*(z+1)-1,D=ue[ie],de=ie+1,_e=ue[de];if(0>c(D,W))de<k&&0>c(_e,D)?(ue[z]=_e,ue[de]=W,z=de):(ue[z]=D,ue[ie]=W,z=ie);else if(de<k&&0>c(_e,W))ue[z]=_e,ue[de]=W,z=de;else break e}}return ye}function c(ue,ye){var W=ue.sortIndex-ye.sortIndex;return W!==0?W:ue.id-ye.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;t.unstable_now=function(){return u.now()}}else{var m=Date,f=m.now();t.unstable_now=function(){return m.now()-f}}var g=[],w=[],b=1,S=null,_=3,R=!1,M=!1,N=!1,V=typeof setTimeout=="function"?setTimeout:null,$=typeof clearTimeout=="function"?clearTimeout:null,j=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A(ue){for(var ye=s(w);ye!==null;){if(ye.callback===null)l(w);else if(ye.startTime<=ue)l(w),ye.sortIndex=ye.expirationTime,a(g,ye);else break;ye=s(w)}}function O(ue){if(N=!1,A(ue),!M)if(s(g)!==null)M=!0,K(ae);else{var ye=s(w);ye!==null&&je(O,ye.startTime-ue)}}function ae(ue,ye){M=!1,N&&(N=!1,$(ce),ce=-1),R=!0;var W=_;try{for(A(ye),S=s(g);S!==null&&(!(S.expirationTime>ye)||ue&&!q());){var z=S.callback;if(typeof z=="function"){S.callback=null,_=S.priorityLevel;var k=z(S.expirationTime<=ye);ye=t.unstable_now(),typeof k=="function"?S.callback=k:S===s(g)&&l(g),A(ye)}else l(g);S=s(g)}if(S!==null)var se=!0;else{var ie=s(w);ie!==null&&je(O,ie.startTime-ye),se=!1}return se}finally{S=null,_=W,R=!1}}var J=!1,I=null,ce=-1,C=5,y=-1;function q(){return!(t.unstable_now()-y<C)}function F(){if(I!==null){var ue=t.unstable_now();y=ue;var ye=!0;try{ye=I(!0,ue)}finally{ye?fe():(J=!1,I=null)}}else J=!1}var fe;if(typeof j=="function")fe=function(){j(F)};else if(typeof MessageChannel<"u"){var ge=new MessageChannel,Ne=ge.port2;ge.port1.onmessage=F,fe=function(){Ne.postMessage(null)}}else fe=function(){V(F,0)};function K(ue){I=ue,J||(J=!0,fe())}function je(ue,ye){ce=V(function(){ue(t.unstable_now())},ye)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(ue){ue.callback=null},t.unstable_continueExecution=function(){M||R||(M=!0,K(ae))},t.unstable_forceFrameRate=function(ue){0>ue||125<ue?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<ue?Math.floor(1e3/ue):5},t.unstable_getCurrentPriorityLevel=function(){return _},t.unstable_getFirstCallbackNode=function(){return s(g)},t.unstable_next=function(ue){switch(_){case 1:case 2:case 3:var ye=3;break;default:ye=_}var W=_;_=ye;try{return ue()}finally{_=W}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(ue,ye){switch(ue){case 1:case 2:case 3:case 4:case 5:break;default:ue=3}var W=_;_=ue;try{return ye()}finally{_=W}},t.unstable_scheduleCallback=function(ue,ye,W){var z=t.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?z+W:z):W=z,ue){case 1:var k=-1;break;case 2:k=250;break;case 5:k=1073741823;break;case 4:k=1e4;break;default:k=5e3}return k=W+k,ue={id:b++,callback:ye,priorityLevel:ue,startTime:W,expirationTime:k,sortIndex:-1},W>z?(ue.sortIndex=W,a(w,ue),s(g)===null&&ue===s(w)&&(N?($(ce),ce=-1):N=!0,je(O,W-z))):(ue.sortIndex=k,a(g,ue),M||R||(M=!0,K(ae))),ue},t.unstable_shouldYield=q,t.unstable_wrapCallback=function(ue){var ye=_;return function(){var W=_;_=ye;try{return ue.apply(this,arguments)}finally{_=W}}}})(Ru)),Ru}var fx;function cj(){return fx||(fx=1,$u.exports=lj()),$u.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hx;function dj(){if(hx)return Ur;hx=1;var t=ff(),a=cj();function s(r){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+r,i=1;i<arguments.length;i++)n+="&args[]="+encodeURIComponent(arguments[i]);return"Minified React error #"+r+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var l=new Set,c={};function u(r,n){m(r,n),m(r+"Capture",n)}function m(r,n){for(c[r]=n,r=0;r<n.length;r++)l.add(n[r])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,w=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,b={},S={};function _(r){return g.call(S,r)?!0:g.call(b,r)?!1:w.test(r)?S[r]=!0:(b[r]=!0,!1)}function R(r,n,i,o){if(i!==null&&i.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return o?!1:i!==null?!i.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function M(r,n,i,o){if(n===null||typeof n>"u"||R(r,n,i,o))return!0;if(o)return!1;if(i!==null)switch(i.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function N(r,n,i,o,d,p,v){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=o,this.attributeNamespace=d,this.mustUseProperty=i,this.propertyName=r,this.type=n,this.sanitizeURL=p,this.removeEmptyString=v}var V={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){V[r]=new N(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var n=r[0];V[n]=new N(n,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){V[r]=new N(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){V[r]=new N(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){V[r]=new N(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){V[r]=new N(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){V[r]=new N(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){V[r]=new N(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){V[r]=new N(r,5,!1,r.toLowerCase(),null,!1,!1)});var $=/[\-:]([a-z])/g;function j(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var n=r.replace($,j);V[n]=new N(n,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var n=r.replace($,j);V[n]=new N(n,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var n=r.replace($,j);V[n]=new N(n,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){V[r]=new N(r,1,!1,r.toLowerCase(),null,!1,!1)}),V.xlinkHref=new N("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){V[r]=new N(r,1,!1,r.toLowerCase(),null,!0,!0)});function A(r,n,i,o){var d=V.hasOwnProperty(n)?V[n]:null;(d!==null?d.type!==0:o||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(M(n,i,d,o)&&(i=null),o||d===null?_(n)&&(i===null?r.removeAttribute(n):r.setAttribute(n,""+i)):d.mustUseProperty?r[d.propertyName]=i===null?d.type===3?!1:"":i:(n=d.attributeName,o=d.attributeNamespace,i===null?r.removeAttribute(n):(d=d.type,i=d===3||d===4&&i===!0?"":""+i,o?r.setAttributeNS(o,n,i):r.setAttribute(n,i))))}var O=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ae=Symbol.for("react.element"),J=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),ce=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),y=Symbol.for("react.provider"),q=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),fe=Symbol.for("react.suspense"),ge=Symbol.for("react.suspense_list"),Ne=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),je=Symbol.for("react.offscreen"),ue=Symbol.iterator;function ye(r){return r===null||typeof r!="object"?null:(r=ue&&r[ue]||r["@@iterator"],typeof r=="function"?r:null)}var W=Object.assign,z;function k(r){if(z===void 0)try{throw Error()}catch(i){var n=i.stack.trim().match(/\n( *(at )?)/);z=n&&n[1]||""}return`
`+z+r}var se=!1;function ie(r,n){if(!r||se)return"";se=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(ne){var o=ne}Reflect.construct(r,[],n)}else{try{n.call()}catch(ne){o=ne}r.call(n.prototype)}else{try{throw Error()}catch(ne){o=ne}r()}}catch(ne){if(ne&&o&&typeof ne.stack=="string"){for(var d=ne.stack.split(`
`),p=o.stack.split(`
`),v=d.length-1,P=p.length-1;1<=v&&0<=P&&d[v]!==p[P];)P--;for(;1<=v&&0<=P;v--,P--)if(d[v]!==p[P]){if(v!==1||P!==1)do if(v--,P--,0>P||d[v]!==p[P]){var T=`
`+d[v].replace(" at new "," at ");return r.displayName&&T.includes("<anonymous>")&&(T=T.replace("<anonymous>",r.displayName)),T}while(1<=v&&0<=P);break}}}finally{se=!1,Error.prepareStackTrace=i}return(r=r?r.displayName||r.name:"")?k(r):""}function D(r){switch(r.tag){case 5:return k(r.type);case 16:return k("Lazy");case 13:return k("Suspense");case 19:return k("SuspenseList");case 0:case 2:case 15:return r=ie(r.type,!1),r;case 11:return r=ie(r.type.render,!1),r;case 1:return r=ie(r.type,!0),r;default:return""}}function de(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case I:return"Fragment";case J:return"Portal";case C:return"Profiler";case ce:return"StrictMode";case fe:return"Suspense";case ge:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case q:return(r.displayName||"Context")+".Consumer";case y:return(r._context.displayName||"Context")+".Provider";case F:var n=r.render;return r=r.displayName,r||(r=n.displayName||n.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case Ne:return n=r.displayName||null,n!==null?n:de(r.type)||"Memo";case K:n=r._payload,r=r._init;try{return de(r(n))}catch{}}return null}function _e(r){var n=r.type;switch(r.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=n.render,r=r.displayName||r.name||"",n.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return de(n);case 8:return n===ce?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function ke(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function U(r){var n=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function he(r){var n=U(r)?"checked":"value",i=Object.getOwnPropertyDescriptor(r.constructor.prototype,n),o=""+r[n];if(!r.hasOwnProperty(n)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var d=i.get,p=i.set;return Object.defineProperty(r,n,{configurable:!0,get:function(){return d.call(this)},set:function(v){o=""+v,p.call(this,v)}}),Object.defineProperty(r,n,{enumerable:i.enumerable}),{getValue:function(){return o},setValue:function(v){o=""+v},stopTracking:function(){r._valueTracker=null,delete r[n]}}}}function nt(r){r._valueTracker||(r._valueTracker=he(r))}function Ze(r){if(!r)return!1;var n=r._valueTracker;if(!n)return!0;var i=n.getValue(),o="";return r&&(o=U(r)?r.checked?"true":"false":r.value),r=o,r!==i?(n.setValue(r),!0):!1}function pt(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function ht(r,n){var i=n.checked;return W({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:i??r._wrapperState.initialChecked})}function Ot(r,n){var i=n.defaultValue==null?"":n.defaultValue,o=n.checked!=null?n.checked:n.defaultChecked;i=ke(n.value!=null?n.value:i),r._wrapperState={initialChecked:o,initialValue:i,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function oe(r,n){n=n.checked,n!=null&&A(r,"checked",n,!1)}function $e(r,n){oe(r,n);var i=ke(n.value),o=n.type;if(i!=null)o==="number"?(i===0&&r.value===""||r.value!=i)&&(r.value=""+i):r.value!==""+i&&(r.value=""+i);else if(o==="submit"||o==="reset"){r.removeAttribute("value");return}n.hasOwnProperty("value")?Pe(r,n.type,i):n.hasOwnProperty("defaultValue")&&Pe(r,n.type,ke(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(r.defaultChecked=!!n.defaultChecked)}function me(r,n,i){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var o=n.type;if(!(o!=="submit"&&o!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+r._wrapperState.initialValue,i||n===r.value||(r.value=n),r.defaultValue=n}i=r.name,i!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,i!==""&&(r.name=i)}function Pe(r,n,i){(n!=="number"||pt(r.ownerDocument)!==r)&&(i==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+i&&(r.defaultValue=""+i))}var Y=Array.isArray;function Be(r,n,i,o){if(r=r.options,n){n={};for(var d=0;d<i.length;d++)n["$"+i[d]]=!0;for(i=0;i<r.length;i++)d=n.hasOwnProperty("$"+r[i].value),r[i].selected!==d&&(r[i].selected=d),d&&o&&(r[i].defaultSelected=!0)}else{for(i=""+ke(i),n=null,d=0;d<r.length;d++){if(r[d].value===i){r[d].selected=!0,o&&(r[d].defaultSelected=!0);return}n!==null||r[d].disabled||(n=r[d])}n!==null&&(n.selected=!0)}}function _t(r,n){if(n.dangerouslySetInnerHTML!=null)throw Error(s(91));return W({},n,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function ot(r,n){var i=n.value;if(i==null){if(i=n.children,n=n.defaultValue,i!=null){if(n!=null)throw Error(s(92));if(Y(i)){if(1<i.length)throw Error(s(93));i=i[0]}n=i}n==null&&(n=""),i=n}r._wrapperState={initialValue:ke(i)}}function zt(r,n){var i=ke(n.value),o=ke(n.defaultValue);i!=null&&(i=""+i,i!==r.value&&(r.value=i),n.defaultValue==null&&r.defaultValue!==i&&(r.defaultValue=i)),o!=null&&(r.defaultValue=""+o)}function xr(r){var n=r.textContent;n===r._wrapperState.initialValue&&n!==""&&n!==null&&(r.value=n)}function dr(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function gr(r,n){return r==null||r==="http://www.w3.org/1999/xhtml"?dr(n):r==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var zr,on=(function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,i,o,d){MSApp.execUnsafeLocalFunction(function(){return r(n,i,o,d)})}:r})(function(r,n){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=n;else{for(zr=zr||document.createElement("div"),zr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=zr.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;n.firstChild;)r.appendChild(n.firstChild)}});function Nt(r,n){if(n){var i=r.firstChild;if(i&&i===r.lastChild&&i.nodeType===3){i.nodeValue=n;return}}r.textContent=n}var Pr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Tr=["Webkit","ms","Moz","O"];Object.keys(Pr).forEach(function(r){Tr.forEach(function(n){n=n+r.charAt(0).toUpperCase()+r.substring(1),Pr[n]=Pr[r]})});function ta(r,n,i){return n==null||typeof n=="boolean"||n===""?"":i||typeof n!="number"||n===0||Pr.hasOwnProperty(r)&&Pr[r]?(""+n).trim():n+"px"}function Sn(r,n){r=r.style;for(var i in n)if(n.hasOwnProperty(i)){var o=i.indexOf("--")===0,d=ta(i,n[i],o);i==="float"&&(i="cssFloat"),o?r.setProperty(i,d):r[i]=d}}var ja=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function nr(r,n){if(n){if(ja[r]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(s(137,r));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(s(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(s(61))}if(n.style!=null&&typeof n.style!="object")throw Error(s(62))}}function kt(r,n){if(r.indexOf("-")===-1)return typeof n.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gt=null;function ln(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var te=null,Ke=null,St=null;function jt(r){if(r=Ls(r)){if(typeof te!="function")throw Error(s(280));var n=r.stateNode;n&&(n=tl(n),te(r.stateNode,r.type,n))}}function Vr(r){Ke?St?St.push(r):St=[r]:Ke=r}function xt(){if(Ke){var r=Ke,n=St;if(St=Ke=null,jt(r),n)for(r=0;r<n.length;r++)jt(n[r])}}function cn(r,n){return r(n)}function Ln(){}var On=!1;function we(r,n,i){if(On)return r(n,i);On=!0;try{return cn(r,n,i)}finally{On=!1,(Ke!==null||St!==null)&&(Ln(),xt())}}function ra(r,n){var i=r.stateNode;if(i===null)return null;var o=tl(i);if(o===null)return null;i=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(r=r.type,o=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!o;break e;default:r=!1}if(r)return null;if(i&&typeof i!="function")throw Error(s(231,n,typeof i));return i}var qe=!1;if(f)try{var ft={};Object.defineProperty(ft,"passive",{get:function(){qe=!0}}),window.addEventListener("test",ft,ft),window.removeEventListener("test",ft,ft)}catch{qe=!1}function Ka(r,n,i,o,d,p,v,P,T){var ne=Array.prototype.slice.call(arguments,3);try{n.apply(i,ne)}catch(be){this.onError(be)}}var vr=!1,dn=null,Cn=!1,In=null,Bn={onError:function(r){vr=!0,dn=r}};function na(r,n,i,o,d,p,v,P,T){vr=!1,dn=null,Ka.apply(Bn,arguments)}function aa(r,n,i,o,d,p,v,P,T){if(na.apply(this,arguments),vr){if(vr){var ne=dn;vr=!1,dn=null}else throw Error(s(198));Cn||(Cn=!0,In=ne)}}function un(r){var n=r,i=r;if(r.alternate)for(;n.return;)n=n.return;else{r=n;do n=r,(n.flags&4098)!==0&&(i=n.return),r=n.return;while(r)}return n.tag===3?i:null}function Ft(r){if(r.tag===13){var n=r.memoizedState;if(n===null&&(r=r.alternate,r!==null&&(n=r.memoizedState)),n!==null)return n.dehydrated}return null}function ur(r){if(un(r)!==r)throw Error(s(188))}function Ri(r){var n=r.alternate;if(!n){if(n=un(r),n===null)throw Error(s(188));return n!==r?null:r}for(var i=r,o=n;;){var d=i.return;if(d===null)break;var p=d.alternate;if(p===null){if(o=d.return,o!==null){i=o;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===i)return ur(d),r;if(p===o)return ur(d),n;p=p.sibling}throw Error(s(188))}if(i.return!==o.return)i=d,o=p;else{for(var v=!1,P=d.child;P;){if(P===i){v=!0,i=d,o=p;break}if(P===o){v=!0,o=d,i=p;break}P=P.sibling}if(!v){for(P=p.child;P;){if(P===i){v=!0,i=p,o=d;break}if(P===o){v=!0,o=p,i=d;break}P=P.sibling}if(!v)throw Error(s(189))}}if(i.alternate!==o)throw Error(s(190))}if(i.tag!==3)throw Error(s(188));return i.stateNode.current===i?r:n}function Qa(r){return r=Ri(r),r!==null?Ya(r):null}function Ya(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var n=Ya(r);if(n!==null)return n;r=r.sibling}return null}var ia=a.unstable_scheduleCallback,ba=a.unstable_cancelCallback,qt=a.unstable_shouldYield,st=a.unstable_requestPaint,Qe=a.unstable_now,tt=a.unstable_getCurrentPriorityLevel,pr=a.unstable_ImmediatePriority,Ja=a.unstable_UserBlockingPriority,qn=a.unstable_NormalPriority,zi=a.unstable_LowPriority,Pi=a.unstable_IdlePriority,E=null,le=null;function De(r){if(le&&typeof le.onCommitFiberRoot=="function")try{le.onCommitFiberRoot(E,r,void 0,(r.current.flags&128)===128)}catch{}}var He=Math.clz32?Math.clz32:Jt,lt=Math.log,Ct=Math.LN2;function Jt(r){return r>>>=0,r===0?32:31-(lt(r)/Ct|0)|0}var Kt=64,mt=4194304;function Et(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function et(r,n){var i=r.pendingLanes;if(i===0)return 0;var o=0,d=r.suspendedLanes,p=r.pingedLanes,v=i&268435455;if(v!==0){var P=v&~d;P!==0?o=Et(P):(p&=v,p!==0&&(o=Et(p)))}else v=i&~d,v!==0?o=Et(v):p!==0&&(o=Et(p));if(o===0)return 0;if(n!==0&&n!==o&&(n&d)===0&&(d=o&-o,p=n&-n,d>=p||d===16&&(p&4194240)!==0))return n;if((o&4)!==0&&(o|=i&16),n=r.entangledLanes,n!==0)for(r=r.entanglements,n&=o;0<n;)i=31-He(n),d=1<<i,o|=r[i],n&=~d;return o}function ar(r,n){switch(r){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ir(r,n){for(var i=r.suspendedLanes,o=r.pingedLanes,d=r.expirationTimes,p=r.pendingLanes;0<p;){var v=31-He(p),P=1<<v,T=d[v];T===-1?((P&i)===0||(P&o)!==0)&&(d[v]=ar(P,n)):T<=n&&(r.expiredLanes|=P),p&=~P}}function Wr(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function Un(){var r=Kt;return Kt<<=1,(Kt&4194240)===0&&(Kt=64),r}function Fr(r){for(var n=[],i=0;31>i;i++)n.push(r);return n}function sa(r,n,i){r.pendingLanes|=n,n!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,n=31-He(n),r[n]=i}function Yc(r,n){var i=r.pendingLanes&~n;r.pendingLanes=n,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=n,r.mutableReadLanes&=n,r.entangledLanes&=n,n=r.entanglements;var o=r.eventTimes;for(r=r.expirationTimes;0<i;){var d=31-He(i),p=1<<d;n[d]=0,o[d]=-1,r[d]=-1,i&=~p}}function ks(r,n){var i=r.entangledLanes|=n;for(r=r.entanglements;i;){var o=31-He(i),d=1<<o;d&n|r[o]&n&&(r[o]|=n),i&=~d}}var bt=0;function Io(r){return r&=-r,1<r?4<r?(r&268435455)!==0?16:536870912:4:1}var Bo,wa,Xa,qo,Ss,Cs=!1,oa=[],Hn=null,Vn=null,Wn=null,Rt=new Map,H=new Map,Z=[],re="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function G(r,n){switch(r){case"focusin":case"focusout":Hn=null;break;case"dragenter":case"dragleave":Vn=null;break;case"mouseover":case"mouseout":Wn=null;break;case"pointerover":case"pointerout":Rt.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":H.delete(n.pointerId)}}function xe(r,n,i,o,d,p){return r===null||r.nativeEvent!==p?(r={blockedOn:n,domEventName:i,eventSystemFlags:o,nativeEvent:p,targetContainers:[d]},n!==null&&(n=Ls(n),n!==null&&wa(n)),r):(r.eventSystemFlags|=o,n=r.targetContainers,d!==null&&n.indexOf(d)===-1&&n.push(d),r)}function Oe(r,n,i,o,d){switch(n){case"focusin":return Hn=xe(Hn,r,n,i,o,d),!0;case"dragenter":return Vn=xe(Vn,r,n,i,o,d),!0;case"mouseover":return Wn=xe(Wn,r,n,i,o,d),!0;case"pointerover":var p=d.pointerId;return Rt.set(p,xe(Rt.get(p)||null,r,n,i,o,d)),!0;case"gotpointercapture":return p=d.pointerId,H.set(p,xe(H.get(p)||null,r,n,i,o,d)),!0}return!1}function Ge(r){var n=Za(r.target);if(n!==null){var i=un(n);if(i!==null){if(n=i.tag,n===13){if(n=Ft(i),n!==null){r.blockedOn=n,Ss(r.priority,function(){Xa(i)});return}}else if(n===3&&i.stateNode.current.memoizedState.isDehydrated){r.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}r.blockedOn=null}function ut(r){if(r.blockedOn!==null)return!1;for(var n=r.targetContainers;0<n.length;){var i=Xc(r.domEventName,r.eventSystemFlags,n[0],r.nativeEvent);if(i===null){i=r.nativeEvent;var o=new i.constructor(i.type,i);Gt=o,i.target.dispatchEvent(o),Gt=null}else return n=Ls(i),n!==null&&wa(n),r.blockedOn=i,!1;n.shift()}return!0}function Vt(r,n,i){ut(r)&&i.delete(n)}function Xt(){Cs=!1,Hn!==null&&ut(Hn)&&(Hn=null),Vn!==null&&ut(Vn)&&(Vn=null),Wn!==null&&ut(Wn)&&(Wn=null),Rt.forEach(Vt),H.forEach(Vt)}function pn(r,n){r.blockedOn===n&&(r.blockedOn=null,Cs||(Cs=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Xt)))}function _a(r){function n(d){return pn(d,r)}if(0<oa.length){pn(oa[0],r);for(var i=1;i<oa.length;i++){var o=oa[i];o.blockedOn===r&&(o.blockedOn=null)}}for(Hn!==null&&pn(Hn,r),Vn!==null&&pn(Vn,r),Wn!==null&&pn(Wn,r),Rt.forEach(n),H.forEach(n),i=0;i<Z.length;i++)o=Z[i],o.blockedOn===r&&(o.blockedOn=null);for(;0<Z.length&&(i=Z[0],i.blockedOn===null);)Ge(i),i.blockedOn===null&&Z.shift()}var la=O.ReactCurrentBatchConfig,En=!0;function zy(r,n,i,o){var d=bt,p=la.transition;la.transition=null;try{bt=1,Jc(r,n,i,o)}finally{bt=d,la.transition=p}}function Py(r,n,i,o){var d=bt,p=la.transition;la.transition=null;try{bt=4,Jc(r,n,i,o)}finally{bt=d,la.transition=p}}function Jc(r,n,i,o){if(En){var d=Xc(r,n,i,o);if(d===null)md(r,n,o,Uo,i),G(r,o);else if(Oe(d,r,n,i,o))o.stopPropagation();else if(G(r,o),n&4&&-1<re.indexOf(r)){for(;d!==null;){var p=Ls(d);if(p!==null&&Bo(p),p=Xc(r,n,i,o),p===null&&md(r,n,o,Uo,i),p===d)break;d=p}d!==null&&o.stopPropagation()}else md(r,n,o,null,i)}}var Uo=null;function Xc(r,n,i,o){if(Uo=null,r=ln(o),r=Za(r),r!==null)if(n=un(r),n===null)r=null;else if(i=n.tag,i===13){if(r=Ft(n),r!==null)return r;r=null}else if(i===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;r=null}else n!==r&&(r=null);return Uo=r,null}function Kf(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(tt()){case pr:return 1;case Ja:return 4;case qn:case zi:return 16;case Pi:return 536870912;default:return 16}default:return 16}}var ka=null,Zc=null,Ho=null;function Qf(){if(Ho)return Ho;var r,n=Zc,i=n.length,o,d="value"in ka?ka.value:ka.textContent,p=d.length;for(r=0;r<i&&n[r]===d[r];r++);var v=i-r;for(o=1;o<=v&&n[i-o]===d[p-o];o++);return Ho=d.slice(r,1<o?1-o:void 0)}function Vo(r){var n=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&n===13&&(r=13)):r=n,r===10&&(r=13),32<=r||r===13?r:0}function Wo(){return!0}function Yf(){return!1}function Gr(r){function n(i,o,d,p,v){this._reactName=i,this._targetInst=d,this.type=o,this.nativeEvent=p,this.target=v,this.currentTarget=null;for(var P in r)r.hasOwnProperty(P)&&(i=r[P],this[P]=i?i(p):p[P]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Wo:Yf,this.isPropagationStopped=Yf,this}return W(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=Wo)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=Wo)},persist:function(){},isPersistent:Wo}),n}var Ni={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ed=Gr(Ni),Es=W({},Ni,{view:0,detail:0}),Ny=Gr(Es),td,rd,$s,Go=W({},Es,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ad,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==$s&&($s&&r.type==="mousemove"?(td=r.screenX-$s.screenX,rd=r.screenY-$s.screenY):rd=td=0,$s=r),td)},movementY:function(r){return"movementY"in r?r.movementY:rd}}),Jf=Gr(Go),Ay=W({},Go,{dataTransfer:0}),Dy=Gr(Ay),My=W({},Es,{relatedTarget:0}),nd=Gr(My),Ty=W({},Ni,{animationName:0,elapsedTime:0,pseudoElement:0}),Fy=Gr(Ty),Ly=W({},Ni,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),Oy=Gr(Ly),Iy=W({},Ni,{data:0}),Xf=Gr(Iy),By={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Uy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Hy(r){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(r):(r=Uy[r])?!!n[r]:!1}function ad(){return Hy}var Vy=W({},Es,{key:function(r){if(r.key){var n=By[r.key]||r.key;if(n!=="Unidentified")return n}return r.type==="keypress"?(r=Vo(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?qy[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ad,charCode:function(r){return r.type==="keypress"?Vo(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?Vo(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),Wy=Gr(Vy),Gy=W({},Go,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zf=Gr(Gy),Ky=W({},Es,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ad}),Qy=Gr(Ky),Yy=W({},Ni,{propertyName:0,elapsedTime:0,pseudoElement:0}),Jy=Gr(Yy),Xy=W({},Go,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),Zy=Gr(Xy),e0=[9,13,27,32],id=f&&"CompositionEvent"in window,Rs=null;f&&"documentMode"in document&&(Rs=document.documentMode);var t0=f&&"TextEvent"in window&&!Rs,eh=f&&(!id||Rs&&8<Rs&&11>=Rs),th=" ",rh=!1;function nh(r,n){switch(r){case"keyup":return e0.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ah(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var Ai=!1;function r0(r,n){switch(r){case"compositionend":return ah(n);case"keypress":return n.which!==32?null:(rh=!0,th);case"textInput":return r=n.data,r===th&&rh?null:r;default:return null}}function n0(r,n){if(Ai)return r==="compositionend"||!id&&nh(r,n)?(r=Qf(),Ho=Zc=ka=null,Ai=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return eh&&n.locale!=="ko"?null:n.data;default:return null}}var a0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ih(r){var n=r&&r.nodeName&&r.nodeName.toLowerCase();return n==="input"?!!a0[r.type]:n==="textarea"}function sh(r,n,i,o){Vr(o),n=Xo(n,"onChange"),0<n.length&&(i=new ed("onChange","change",null,i,o),r.push({event:i,listeners:n}))}var zs=null,Ps=null;function i0(r){kh(r,0)}function Ko(r){var n=Li(r);if(Ze(n))return r}function s0(r,n){if(r==="change")return n}var oh=!1;if(f){var sd;if(f){var od="oninput"in document;if(!od){var lh=document.createElement("div");lh.setAttribute("oninput","return;"),od=typeof lh.oninput=="function"}sd=od}else sd=!1;oh=sd&&(!document.documentMode||9<document.documentMode)}function ch(){zs&&(zs.detachEvent("onpropertychange",dh),Ps=zs=null)}function dh(r){if(r.propertyName==="value"&&Ko(Ps)){var n=[];sh(n,Ps,r,ln(r)),we(i0,n)}}function o0(r,n,i){r==="focusin"?(ch(),zs=n,Ps=i,zs.attachEvent("onpropertychange",dh)):r==="focusout"&&ch()}function l0(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return Ko(Ps)}function c0(r,n){if(r==="click")return Ko(n)}function d0(r,n){if(r==="input"||r==="change")return Ko(n)}function u0(r,n){return r===n&&(r!==0||1/r===1/n)||r!==r&&n!==n}var $n=typeof Object.is=="function"?Object.is:u0;function Ns(r,n){if($n(r,n))return!0;if(typeof r!="object"||r===null||typeof n!="object"||n===null)return!1;var i=Object.keys(r),o=Object.keys(n);if(i.length!==o.length)return!1;for(o=0;o<i.length;o++){var d=i[o];if(!g.call(n,d)||!$n(r[d],n[d]))return!1}return!0}function uh(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function ph(r,n){var i=uh(r);r=0;for(var o;i;){if(i.nodeType===3){if(o=r+i.textContent.length,r<=n&&o>=n)return{node:i,offset:n-r};r=o}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=uh(i)}}function fh(r,n){return r&&n?r===n?!0:r&&r.nodeType===3?!1:n&&n.nodeType===3?fh(r,n.parentNode):"contains"in r?r.contains(n):r.compareDocumentPosition?!!(r.compareDocumentPosition(n)&16):!1:!1}function hh(){for(var r=window,n=pt();n instanceof r.HTMLIFrameElement;){try{var i=typeof n.contentWindow.location.href=="string"}catch{i=!1}if(i)r=n.contentWindow;else break;n=pt(r.document)}return n}function ld(r){var n=r&&r.nodeName&&r.nodeName.toLowerCase();return n&&(n==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||n==="textarea"||r.contentEditable==="true")}function p0(r){var n=hh(),i=r.focusedElem,o=r.selectionRange;if(n!==i&&i&&i.ownerDocument&&fh(i.ownerDocument.documentElement,i)){if(o!==null&&ld(i)){if(n=o.start,r=o.end,r===void 0&&(r=n),"selectionStart"in i)i.selectionStart=n,i.selectionEnd=Math.min(r,i.value.length);else if(r=(n=i.ownerDocument||document)&&n.defaultView||window,r.getSelection){r=r.getSelection();var d=i.textContent.length,p=Math.min(o.start,d);o=o.end===void 0?p:Math.min(o.end,d),!r.extend&&p>o&&(d=o,o=p,p=d),d=ph(i,p);var v=ph(i,o);d&&v&&(r.rangeCount!==1||r.anchorNode!==d.node||r.anchorOffset!==d.offset||r.focusNode!==v.node||r.focusOffset!==v.offset)&&(n=n.createRange(),n.setStart(d.node,d.offset),r.removeAllRanges(),p>o?(r.addRange(n),r.extend(v.node,v.offset)):(n.setEnd(v.node,v.offset),r.addRange(n)))}}for(n=[],r=i;r=r.parentNode;)r.nodeType===1&&n.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<n.length;i++)r=n[i],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var f0=f&&"documentMode"in document&&11>=document.documentMode,Di=null,cd=null,As=null,dd=!1;function mh(r,n,i){var o=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;dd||Di==null||Di!==pt(o)||(o=Di,"selectionStart"in o&&ld(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),As&&Ns(As,o)||(As=o,o=Xo(cd,"onSelect"),0<o.length&&(n=new ed("onSelect","select",null,n,i),r.push({event:n,listeners:o}),n.target=Di)))}function Qo(r,n){var i={};return i[r.toLowerCase()]=n.toLowerCase(),i["Webkit"+r]="webkit"+n,i["Moz"+r]="moz"+n,i}var Mi={animationend:Qo("Animation","AnimationEnd"),animationiteration:Qo("Animation","AnimationIteration"),animationstart:Qo("Animation","AnimationStart"),transitionend:Qo("Transition","TransitionEnd")},ud={},xh={};f&&(xh=document.createElement("div").style,"AnimationEvent"in window||(delete Mi.animationend.animation,delete Mi.animationiteration.animation,delete Mi.animationstart.animation),"TransitionEvent"in window||delete Mi.transitionend.transition);function Yo(r){if(ud[r])return ud[r];if(!Mi[r])return r;var n=Mi[r],i;for(i in n)if(n.hasOwnProperty(i)&&i in xh)return ud[r]=n[i];return r}var gh=Yo("animationend"),vh=Yo("animationiteration"),yh=Yo("animationstart"),jh=Yo("transitionend"),bh=new Map,wh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Sa(r,n){bh.set(r,n),u(n,[r])}for(var pd=0;pd<wh.length;pd++){var fd=wh[pd],h0=fd.toLowerCase(),m0=fd[0].toUpperCase()+fd.slice(1);Sa(h0,"on"+m0)}Sa(gh,"onAnimationEnd"),Sa(vh,"onAnimationIteration"),Sa(yh,"onAnimationStart"),Sa("dblclick","onDoubleClick"),Sa("focusin","onFocus"),Sa("focusout","onBlur"),Sa(jh,"onTransitionEnd"),m("onMouseEnter",["mouseout","mouseover"]),m("onMouseLeave",["mouseout","mouseover"]),m("onPointerEnter",["pointerout","pointerover"]),m("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ds="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),x0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ds));function _h(r,n,i){var o=r.type||"unknown-event";r.currentTarget=i,aa(o,n,void 0,r),r.currentTarget=null}function kh(r,n){n=(n&4)!==0;for(var i=0;i<r.length;i++){var o=r[i],d=o.event;o=o.listeners;e:{var p=void 0;if(n)for(var v=o.length-1;0<=v;v--){var P=o[v],T=P.instance,ne=P.currentTarget;if(P=P.listener,T!==p&&d.isPropagationStopped())break e;_h(d,P,ne),p=T}else for(v=0;v<o.length;v++){if(P=o[v],T=P.instance,ne=P.currentTarget,P=P.listener,T!==p&&d.isPropagationStopped())break e;_h(d,P,ne),p=T}}}if(Cn)throw r=In,Cn=!1,In=null,r}function At(r,n){var i=n[bd];i===void 0&&(i=n[bd]=new Set);var o=r+"__bubble";i.has(o)||(Sh(n,r,2,!1),i.add(o))}function hd(r,n,i){var o=0;n&&(o|=4),Sh(i,r,o,n)}var Jo="_reactListening"+Math.random().toString(36).slice(2);function Ms(r){if(!r[Jo]){r[Jo]=!0,l.forEach(function(i){i!=="selectionchange"&&(x0.has(i)||hd(i,!1,r),hd(i,!0,r))});var n=r.nodeType===9?r:r.ownerDocument;n===null||n[Jo]||(n[Jo]=!0,hd("selectionchange",!1,n))}}function Sh(r,n,i,o){switch(Kf(n)){case 1:var d=zy;break;case 4:d=Py;break;default:d=Jc}i=d.bind(null,n,i,r),d=void 0,!qe||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(d=!0),o?d!==void 0?r.addEventListener(n,i,{capture:!0,passive:d}):r.addEventListener(n,i,!0):d!==void 0?r.addEventListener(n,i,{passive:d}):r.addEventListener(n,i,!1)}function md(r,n,i,o,d){var p=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var v=o.tag;if(v===3||v===4){var P=o.stateNode.containerInfo;if(P===d||P.nodeType===8&&P.parentNode===d)break;if(v===4)for(v=o.return;v!==null;){var T=v.tag;if((T===3||T===4)&&(T=v.stateNode.containerInfo,T===d||T.nodeType===8&&T.parentNode===d))return;v=v.return}for(;P!==null;){if(v=Za(P),v===null)return;if(T=v.tag,T===5||T===6){o=p=v;continue e}P=P.parentNode}}o=o.return}we(function(){var ne=p,be=ln(i),Se=[];e:{var ve=bh.get(r);if(ve!==void 0){var Ae=ed,Te=r;switch(r){case"keypress":if(Vo(i)===0)break e;case"keydown":case"keyup":Ae=Wy;break;case"focusin":Te="focus",Ae=nd;break;case"focusout":Te="blur",Ae=nd;break;case"beforeblur":case"afterblur":Ae=nd;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ae=Jf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ae=Dy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ae=Qy;break;case gh:case vh:case yh:Ae=Fy;break;case jh:Ae=Jy;break;case"scroll":Ae=Ny;break;case"wheel":Ae=Zy;break;case"copy":case"cut":case"paste":Ae=Oy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ae=Zf}var Le=(n&4)!==0,Wt=!Le&&r==="scroll",Q=Le?ve!==null?ve+"Capture":null:ve;Le=[];for(var B=ne,ee;B!==null;){ee=B;var Ce=ee.stateNode;if(ee.tag===5&&Ce!==null&&(ee=Ce,Q!==null&&(Ce=ra(B,Q),Ce!=null&&Le.push(Ts(B,Ce,ee)))),Wt)break;B=B.return}0<Le.length&&(ve=new Ae(ve,Te,null,i,be),Se.push({event:ve,listeners:Le}))}}if((n&7)===0){e:{if(ve=r==="mouseover"||r==="pointerover",Ae=r==="mouseout"||r==="pointerout",ve&&i!==Gt&&(Te=i.relatedTarget||i.fromElement)&&(Za(Te)||Te[ca]))break e;if((Ae||ve)&&(ve=be.window===be?be:(ve=be.ownerDocument)?ve.defaultView||ve.parentWindow:window,Ae?(Te=i.relatedTarget||i.toElement,Ae=ne,Te=Te?Za(Te):null,Te!==null&&(Wt=un(Te),Te!==Wt||Te.tag!==5&&Te.tag!==6)&&(Te=null)):(Ae=null,Te=ne),Ae!==Te)){if(Le=Jf,Ce="onMouseLeave",Q="onMouseEnter",B="mouse",(r==="pointerout"||r==="pointerover")&&(Le=Zf,Ce="onPointerLeave",Q="onPointerEnter",B="pointer"),Wt=Ae==null?ve:Li(Ae),ee=Te==null?ve:Li(Te),ve=new Le(Ce,B+"leave",Ae,i,be),ve.target=Wt,ve.relatedTarget=ee,Ce=null,Za(be)===ne&&(Le=new Le(Q,B+"enter",Te,i,be),Le.target=ee,Le.relatedTarget=Wt,Ce=Le),Wt=Ce,Ae&&Te)t:{for(Le=Ae,Q=Te,B=0,ee=Le;ee;ee=Ti(ee))B++;for(ee=0,Ce=Q;Ce;Ce=Ti(Ce))ee++;for(;0<B-ee;)Le=Ti(Le),B--;for(;0<ee-B;)Q=Ti(Q),ee--;for(;B--;){if(Le===Q||Q!==null&&Le===Q.alternate)break t;Le=Ti(Le),Q=Ti(Q)}Le=null}else Le=null;Ae!==null&&Ch(Se,ve,Ae,Le,!1),Te!==null&&Wt!==null&&Ch(Se,Wt,Te,Le,!0)}}e:{if(ve=ne?Li(ne):window,Ae=ve.nodeName&&ve.nodeName.toLowerCase(),Ae==="select"||Ae==="input"&&ve.type==="file")var Ie=s0;else if(ih(ve))if(oh)Ie=d0;else{Ie=l0;var Ve=o0}else(Ae=ve.nodeName)&&Ae.toLowerCase()==="input"&&(ve.type==="checkbox"||ve.type==="radio")&&(Ie=c0);if(Ie&&(Ie=Ie(r,ne))){sh(Se,Ie,i,be);break e}Ve&&Ve(r,ve,ne),r==="focusout"&&(Ve=ve._wrapperState)&&Ve.controlled&&ve.type==="number"&&Pe(ve,"number",ve.value)}switch(Ve=ne?Li(ne):window,r){case"focusin":(ih(Ve)||Ve.contentEditable==="true")&&(Di=Ve,cd=ne,As=null);break;case"focusout":As=cd=Di=null;break;case"mousedown":dd=!0;break;case"contextmenu":case"mouseup":case"dragend":dd=!1,mh(Se,i,be);break;case"selectionchange":if(f0)break;case"keydown":case"keyup":mh(Se,i,be)}var We;if(id)e:{switch(r){case"compositionstart":var Ye="onCompositionStart";break e;case"compositionend":Ye="onCompositionEnd";break e;case"compositionupdate":Ye="onCompositionUpdate";break e}Ye=void 0}else Ai?nh(r,i)&&(Ye="onCompositionEnd"):r==="keydown"&&i.keyCode===229&&(Ye="onCompositionStart");Ye&&(eh&&i.locale!=="ko"&&(Ai||Ye!=="onCompositionStart"?Ye==="onCompositionEnd"&&Ai&&(We=Qf()):(ka=be,Zc="value"in ka?ka.value:ka.textContent,Ai=!0)),Ve=Xo(ne,Ye),0<Ve.length&&(Ye=new Xf(Ye,r,null,i,be),Se.push({event:Ye,listeners:Ve}),We?Ye.data=We:(We=ah(i),We!==null&&(Ye.data=We)))),(We=t0?r0(r,i):n0(r,i))&&(ne=Xo(ne,"onBeforeInput"),0<ne.length&&(be=new Xf("onBeforeInput","beforeinput",null,i,be),Se.push({event:be,listeners:ne}),be.data=We))}kh(Se,n)})}function Ts(r,n,i){return{instance:r,listener:n,currentTarget:i}}function Xo(r,n){for(var i=n+"Capture",o=[];r!==null;){var d=r,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=ra(r,i),p!=null&&o.unshift(Ts(r,p,d)),p=ra(r,n),p!=null&&o.push(Ts(r,p,d))),r=r.return}return o}function Ti(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function Ch(r,n,i,o,d){for(var p=n._reactName,v=[];i!==null&&i!==o;){var P=i,T=P.alternate,ne=P.stateNode;if(T!==null&&T===o)break;P.tag===5&&ne!==null&&(P=ne,d?(T=ra(i,p),T!=null&&v.unshift(Ts(i,T,P))):d||(T=ra(i,p),T!=null&&v.push(Ts(i,T,P)))),i=i.return}v.length!==0&&r.push({event:n,listeners:v})}var g0=/\r\n?/g,v0=/\u0000|\uFFFD/g;function Eh(r){return(typeof r=="string"?r:""+r).replace(g0,`
`).replace(v0,"")}function Zo(r,n,i){if(n=Eh(n),Eh(r)!==n&&i)throw Error(s(425))}function el(){}var xd=null,gd=null;function vd(r,n){return r==="textarea"||r==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var yd=typeof setTimeout=="function"?setTimeout:void 0,y0=typeof clearTimeout=="function"?clearTimeout:void 0,$h=typeof Promise=="function"?Promise:void 0,j0=typeof queueMicrotask=="function"?queueMicrotask:typeof $h<"u"?function(r){return $h.resolve(null).then(r).catch(b0)}:yd;function b0(r){setTimeout(function(){throw r})}function jd(r,n){var i=n,o=0;do{var d=i.nextSibling;if(r.removeChild(i),d&&d.nodeType===8)if(i=d.data,i==="/$"){if(o===0){r.removeChild(d),_a(n);return}o--}else i!=="$"&&i!=="$?"&&i!=="$!"||o++;i=d}while(i);_a(n)}function Ca(r){for(;r!=null;r=r.nextSibling){var n=r.nodeType;if(n===1||n===3)break;if(n===8){if(n=r.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return r}function Rh(r){r=r.previousSibling;for(var n=0;r;){if(r.nodeType===8){var i=r.data;if(i==="$"||i==="$!"||i==="$?"){if(n===0)return r;n--}else i==="/$"&&n++}r=r.previousSibling}return null}var Fi=Math.random().toString(36).slice(2),Gn="__reactFiber$"+Fi,Fs="__reactProps$"+Fi,ca="__reactContainer$"+Fi,bd="__reactEvents$"+Fi,w0="__reactListeners$"+Fi,_0="__reactHandles$"+Fi;function Za(r){var n=r[Gn];if(n)return n;for(var i=r.parentNode;i;){if(n=i[ca]||i[Gn]){if(i=n.alternate,n.child!==null||i!==null&&i.child!==null)for(r=Rh(r);r!==null;){if(i=r[Gn])return i;r=Rh(r)}return n}r=i,i=r.parentNode}return null}function Ls(r){return r=r[Gn]||r[ca],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function Li(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(s(33))}function tl(r){return r[Fs]||null}var wd=[],Oi=-1;function Ea(r){return{current:r}}function Dt(r){0>Oi||(r.current=wd[Oi],wd[Oi]=null,Oi--)}function Pt(r,n){Oi++,wd[Oi]=r.current,r.current=n}var $a={},yr=Ea($a),Lr=Ea(!1),ei=$a;function Ii(r,n){var i=r.type.contextTypes;if(!i)return $a;var o=r.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===n)return o.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in i)d[p]=n[p];return o&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=n,r.__reactInternalMemoizedMaskedChildContext=d),d}function Or(r){return r=r.childContextTypes,r!=null}function rl(){Dt(Lr),Dt(yr)}function zh(r,n,i){if(yr.current!==$a)throw Error(s(168));Pt(yr,n),Pt(Lr,i)}function Ph(r,n,i){var o=r.stateNode;if(n=n.childContextTypes,typeof o.getChildContext!="function")return i;o=o.getChildContext();for(var d in o)if(!(d in n))throw Error(s(108,_e(r)||"Unknown",d));return W({},i,o)}function nl(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||$a,ei=yr.current,Pt(yr,r),Pt(Lr,Lr.current),!0}function Nh(r,n,i){var o=r.stateNode;if(!o)throw Error(s(169));i?(r=Ph(r,n,ei),o.__reactInternalMemoizedMergedChildContext=r,Dt(Lr),Dt(yr),Pt(yr,r)):Dt(Lr),Pt(Lr,i)}var da=null,al=!1,_d=!1;function Ah(r){da===null?da=[r]:da.push(r)}function k0(r){al=!0,Ah(r)}function Ra(){if(!_d&&da!==null){_d=!0;var r=0,n=bt;try{var i=da;for(bt=1;r<i.length;r++){var o=i[r];do o=o(!0);while(o!==null)}da=null,al=!1}catch(d){throw da!==null&&(da=da.slice(r+1)),ia(pr,Ra),d}finally{bt=n,_d=!1}}return null}var Bi=[],qi=0,il=null,sl=0,fn=[],hn=0,ti=null,ua=1,pa="";function ri(r,n){Bi[qi++]=sl,Bi[qi++]=il,il=r,sl=n}function Dh(r,n,i){fn[hn++]=ua,fn[hn++]=pa,fn[hn++]=ti,ti=r;var o=ua;r=pa;var d=32-He(o)-1;o&=~(1<<d),i+=1;var p=32-He(n)+d;if(30<p){var v=d-d%5;p=(o&(1<<v)-1).toString(32),o>>=v,d-=v,ua=1<<32-He(n)+d|i<<d|o,pa=p+r}else ua=1<<p|i<<d|o,pa=r}function kd(r){r.return!==null&&(ri(r,1),Dh(r,1,0))}function Sd(r){for(;r===il;)il=Bi[--qi],Bi[qi]=null,sl=Bi[--qi],Bi[qi]=null;for(;r===ti;)ti=fn[--hn],fn[hn]=null,pa=fn[--hn],fn[hn]=null,ua=fn[--hn],fn[hn]=null}var Kr=null,Qr=null,Lt=!1,Rn=null;function Mh(r,n){var i=vn(5,null,null,0);i.elementType="DELETED",i.stateNode=n,i.return=r,n=r.deletions,n===null?(r.deletions=[i],r.flags|=16):n.push(i)}function Th(r,n){switch(r.tag){case 5:var i=r.type;return n=n.nodeType!==1||i.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(r.stateNode=n,Kr=r,Qr=Ca(n.firstChild),!0):!1;case 6:return n=r.pendingProps===""||n.nodeType!==3?null:n,n!==null?(r.stateNode=n,Kr=r,Qr=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(i=ti!==null?{id:ua,overflow:pa}:null,r.memoizedState={dehydrated:n,treeContext:i,retryLane:1073741824},i=vn(18,null,null,0),i.stateNode=n,i.return=r,r.child=i,Kr=r,Qr=null,!0):!1;default:return!1}}function Cd(r){return(r.mode&1)!==0&&(r.flags&128)===0}function Ed(r){if(Lt){var n=Qr;if(n){var i=n;if(!Th(r,n)){if(Cd(r))throw Error(s(418));n=Ca(i.nextSibling);var o=Kr;n&&Th(r,n)?Mh(o,i):(r.flags=r.flags&-4097|2,Lt=!1,Kr=r)}}else{if(Cd(r))throw Error(s(418));r.flags=r.flags&-4097|2,Lt=!1,Kr=r}}}function Fh(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;Kr=r}function ol(r){if(r!==Kr)return!1;if(!Lt)return Fh(r),Lt=!0,!1;var n;if((n=r.tag!==3)&&!(n=r.tag!==5)&&(n=r.type,n=n!=="head"&&n!=="body"&&!vd(r.type,r.memoizedProps)),n&&(n=Qr)){if(Cd(r))throw Lh(),Error(s(418));for(;n;)Mh(r,n),n=Ca(n.nextSibling)}if(Fh(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(s(317));e:{for(r=r.nextSibling,n=0;r;){if(r.nodeType===8){var i=r.data;if(i==="/$"){if(n===0){Qr=Ca(r.nextSibling);break e}n--}else i!=="$"&&i!=="$!"&&i!=="$?"||n++}r=r.nextSibling}Qr=null}}else Qr=Kr?Ca(r.stateNode.nextSibling):null;return!0}function Lh(){for(var r=Qr;r;)r=Ca(r.nextSibling)}function Ui(){Qr=Kr=null,Lt=!1}function $d(r){Rn===null?Rn=[r]:Rn.push(r)}var S0=O.ReactCurrentBatchConfig;function Os(r,n,i){if(r=i.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(i._owner){if(i=i._owner,i){if(i.tag!==1)throw Error(s(309));var o=i.stateNode}if(!o)throw Error(s(147,r));var d=o,p=""+r;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===p?n.ref:(n=function(v){var P=d.refs;v===null?delete P[p]:P[p]=v},n._stringRef=p,n)}if(typeof r!="string")throw Error(s(284));if(!i._owner)throw Error(s(290,r))}return r}function ll(r,n){throw r=Object.prototype.toString.call(n),Error(s(31,r==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":r))}function Oh(r){var n=r._init;return n(r._payload)}function Ih(r){function n(Q,B){if(r){var ee=Q.deletions;ee===null?(Q.deletions=[B],Q.flags|=16):ee.push(B)}}function i(Q,B){if(!r)return null;for(;B!==null;)n(Q,B),B=B.sibling;return null}function o(Q,B){for(Q=new Map;B!==null;)B.key!==null?Q.set(B.key,B):Q.set(B.index,B),B=B.sibling;return Q}function d(Q,B){return Q=Fa(Q,B),Q.index=0,Q.sibling=null,Q}function p(Q,B,ee){return Q.index=ee,r?(ee=Q.alternate,ee!==null?(ee=ee.index,ee<B?(Q.flags|=2,B):ee):(Q.flags|=2,B)):(Q.flags|=1048576,B)}function v(Q){return r&&Q.alternate===null&&(Q.flags|=2),Q}function P(Q,B,ee,Ce){return B===null||B.tag!==6?(B=yu(ee,Q.mode,Ce),B.return=Q,B):(B=d(B,ee),B.return=Q,B)}function T(Q,B,ee,Ce){var Ie=ee.type;return Ie===I?be(Q,B,ee.props.children,Ce,ee.key):B!==null&&(B.elementType===Ie||typeof Ie=="object"&&Ie!==null&&Ie.$$typeof===K&&Oh(Ie)===B.type)?(Ce=d(B,ee.props),Ce.ref=Os(Q,B,ee),Ce.return=Q,Ce):(Ce=Nl(ee.type,ee.key,ee.props,null,Q.mode,Ce),Ce.ref=Os(Q,B,ee),Ce.return=Q,Ce)}function ne(Q,B,ee,Ce){return B===null||B.tag!==4||B.stateNode.containerInfo!==ee.containerInfo||B.stateNode.implementation!==ee.implementation?(B=ju(ee,Q.mode,Ce),B.return=Q,B):(B=d(B,ee.children||[]),B.return=Q,B)}function be(Q,B,ee,Ce,Ie){return B===null||B.tag!==7?(B=di(ee,Q.mode,Ce,Ie),B.return=Q,B):(B=d(B,ee),B.return=Q,B)}function Se(Q,B,ee){if(typeof B=="string"&&B!==""||typeof B=="number")return B=yu(""+B,Q.mode,ee),B.return=Q,B;if(typeof B=="object"&&B!==null){switch(B.$$typeof){case ae:return ee=Nl(B.type,B.key,B.props,null,Q.mode,ee),ee.ref=Os(Q,null,B),ee.return=Q,ee;case J:return B=ju(B,Q.mode,ee),B.return=Q,B;case K:var Ce=B._init;return Se(Q,Ce(B._payload),ee)}if(Y(B)||ye(B))return B=di(B,Q.mode,ee,null),B.return=Q,B;ll(Q,B)}return null}function ve(Q,B,ee,Ce){var Ie=B!==null?B.key:null;if(typeof ee=="string"&&ee!==""||typeof ee=="number")return Ie!==null?null:P(Q,B,""+ee,Ce);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case ae:return ee.key===Ie?T(Q,B,ee,Ce):null;case J:return ee.key===Ie?ne(Q,B,ee,Ce):null;case K:return Ie=ee._init,ve(Q,B,Ie(ee._payload),Ce)}if(Y(ee)||ye(ee))return Ie!==null?null:be(Q,B,ee,Ce,null);ll(Q,ee)}return null}function Ae(Q,B,ee,Ce,Ie){if(typeof Ce=="string"&&Ce!==""||typeof Ce=="number")return Q=Q.get(ee)||null,P(B,Q,""+Ce,Ie);if(typeof Ce=="object"&&Ce!==null){switch(Ce.$$typeof){case ae:return Q=Q.get(Ce.key===null?ee:Ce.key)||null,T(B,Q,Ce,Ie);case J:return Q=Q.get(Ce.key===null?ee:Ce.key)||null,ne(B,Q,Ce,Ie);case K:var Ve=Ce._init;return Ae(Q,B,ee,Ve(Ce._payload),Ie)}if(Y(Ce)||ye(Ce))return Q=Q.get(ee)||null,be(B,Q,Ce,Ie,null);ll(B,Ce)}return null}function Te(Q,B,ee,Ce){for(var Ie=null,Ve=null,We=B,Ye=B=0,lr=null;We!==null&&Ye<ee.length;Ye++){We.index>Ye?(lr=We,We=null):lr=We.sibling;var vt=ve(Q,We,ee[Ye],Ce);if(vt===null){We===null&&(We=lr);break}r&&We&&vt.alternate===null&&n(Q,We),B=p(vt,B,Ye),Ve===null?Ie=vt:Ve.sibling=vt,Ve=vt,We=lr}if(Ye===ee.length)return i(Q,We),Lt&&ri(Q,Ye),Ie;if(We===null){for(;Ye<ee.length;Ye++)We=Se(Q,ee[Ye],Ce),We!==null&&(B=p(We,B,Ye),Ve===null?Ie=We:Ve.sibling=We,Ve=We);return Lt&&ri(Q,Ye),Ie}for(We=o(Q,We);Ye<ee.length;Ye++)lr=Ae(We,Q,Ye,ee[Ye],Ce),lr!==null&&(r&&lr.alternate!==null&&We.delete(lr.key===null?Ye:lr.key),B=p(lr,B,Ye),Ve===null?Ie=lr:Ve.sibling=lr,Ve=lr);return r&&We.forEach(function(La){return n(Q,La)}),Lt&&ri(Q,Ye),Ie}function Le(Q,B,ee,Ce){var Ie=ye(ee);if(typeof Ie!="function")throw Error(s(150));if(ee=Ie.call(ee),ee==null)throw Error(s(151));for(var Ve=Ie=null,We=B,Ye=B=0,lr=null,vt=ee.next();We!==null&&!vt.done;Ye++,vt=ee.next()){We.index>Ye?(lr=We,We=null):lr=We.sibling;var La=ve(Q,We,vt.value,Ce);if(La===null){We===null&&(We=lr);break}r&&We&&La.alternate===null&&n(Q,We),B=p(La,B,Ye),Ve===null?Ie=La:Ve.sibling=La,Ve=La,We=lr}if(vt.done)return i(Q,We),Lt&&ri(Q,Ye),Ie;if(We===null){for(;!vt.done;Ye++,vt=ee.next())vt=Se(Q,vt.value,Ce),vt!==null&&(B=p(vt,B,Ye),Ve===null?Ie=vt:Ve.sibling=vt,Ve=vt);return Lt&&ri(Q,Ye),Ie}for(We=o(Q,We);!vt.done;Ye++,vt=ee.next())vt=Ae(We,Q,Ye,vt.value,Ce),vt!==null&&(r&&vt.alternate!==null&&We.delete(vt.key===null?Ye:vt.key),B=p(vt,B,Ye),Ve===null?Ie=vt:Ve.sibling=vt,Ve=vt);return r&&We.forEach(function(aj){return n(Q,aj)}),Lt&&ri(Q,Ye),Ie}function Wt(Q,B,ee,Ce){if(typeof ee=="object"&&ee!==null&&ee.type===I&&ee.key===null&&(ee=ee.props.children),typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case ae:e:{for(var Ie=ee.key,Ve=B;Ve!==null;){if(Ve.key===Ie){if(Ie=ee.type,Ie===I){if(Ve.tag===7){i(Q,Ve.sibling),B=d(Ve,ee.props.children),B.return=Q,Q=B;break e}}else if(Ve.elementType===Ie||typeof Ie=="object"&&Ie!==null&&Ie.$$typeof===K&&Oh(Ie)===Ve.type){i(Q,Ve.sibling),B=d(Ve,ee.props),B.ref=Os(Q,Ve,ee),B.return=Q,Q=B;break e}i(Q,Ve);break}else n(Q,Ve);Ve=Ve.sibling}ee.type===I?(B=di(ee.props.children,Q.mode,Ce,ee.key),B.return=Q,Q=B):(Ce=Nl(ee.type,ee.key,ee.props,null,Q.mode,Ce),Ce.ref=Os(Q,B,ee),Ce.return=Q,Q=Ce)}return v(Q);case J:e:{for(Ve=ee.key;B!==null;){if(B.key===Ve)if(B.tag===4&&B.stateNode.containerInfo===ee.containerInfo&&B.stateNode.implementation===ee.implementation){i(Q,B.sibling),B=d(B,ee.children||[]),B.return=Q,Q=B;break e}else{i(Q,B);break}else n(Q,B);B=B.sibling}B=ju(ee,Q.mode,Ce),B.return=Q,Q=B}return v(Q);case K:return Ve=ee._init,Wt(Q,B,Ve(ee._payload),Ce)}if(Y(ee))return Te(Q,B,ee,Ce);if(ye(ee))return Le(Q,B,ee,Ce);ll(Q,ee)}return typeof ee=="string"&&ee!==""||typeof ee=="number"?(ee=""+ee,B!==null&&B.tag===6?(i(Q,B.sibling),B=d(B,ee),B.return=Q,Q=B):(i(Q,B),B=yu(ee,Q.mode,Ce),B.return=Q,Q=B),v(Q)):i(Q,B)}return Wt}var Hi=Ih(!0),Bh=Ih(!1),cl=Ea(null),dl=null,Vi=null,Rd=null;function zd(){Rd=Vi=dl=null}function Pd(r){var n=cl.current;Dt(cl),r._currentValue=n}function Nd(r,n,i){for(;r!==null;){var o=r.alternate;if((r.childLanes&n)!==n?(r.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),r===i)break;r=r.return}}function Wi(r,n){dl=r,Rd=Vi=null,r=r.dependencies,r!==null&&r.firstContext!==null&&((r.lanes&n)!==0&&(Ir=!0),r.firstContext=null)}function mn(r){var n=r._currentValue;if(Rd!==r)if(r={context:r,memoizedValue:n,next:null},Vi===null){if(dl===null)throw Error(s(308));Vi=r,dl.dependencies={lanes:0,firstContext:r}}else Vi=Vi.next=r;return n}var ni=null;function Ad(r){ni===null?ni=[r]:ni.push(r)}function qh(r,n,i,o){var d=n.interleaved;return d===null?(i.next=i,Ad(n)):(i.next=d.next,d.next=i),n.interleaved=i,fa(r,o)}function fa(r,n){r.lanes|=n;var i=r.alternate;for(i!==null&&(i.lanes|=n),i=r,r=r.return;r!==null;)r.childLanes|=n,i=r.alternate,i!==null&&(i.childLanes|=n),i=r,r=r.return;return i.tag===3?i.stateNode:null}var za=!1;function Dd(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Uh(r,n){r=r.updateQueue,n.updateQueue===r&&(n.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function ha(r,n){return{eventTime:r,lane:n,tag:0,payload:null,callback:null,next:null}}function Pa(r,n,i){var o=r.updateQueue;if(o===null)return null;if(o=o.shared,(gt&2)!==0){var d=o.pending;return d===null?n.next=n:(n.next=d.next,d.next=n),o.pending=n,fa(r,i)}return d=o.interleaved,d===null?(n.next=n,Ad(o)):(n.next=d.next,d.next=n),o.interleaved=n,fa(r,i)}function ul(r,n,i){if(n=n.updateQueue,n!==null&&(n=n.shared,(i&4194240)!==0)){var o=n.lanes;o&=r.pendingLanes,i|=o,n.lanes=i,ks(r,i)}}function Hh(r,n){var i=r.updateQueue,o=r.alternate;if(o!==null&&(o=o.updateQueue,i===o)){var d=null,p=null;if(i=i.firstBaseUpdate,i!==null){do{var v={eventTime:i.eventTime,lane:i.lane,tag:i.tag,payload:i.payload,callback:i.callback,next:null};p===null?d=p=v:p=p.next=v,i=i.next}while(i!==null);p===null?d=p=n:p=p.next=n}else d=p=n;i={baseState:o.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:o.shared,effects:o.effects},r.updateQueue=i;return}r=i.lastBaseUpdate,r===null?i.firstBaseUpdate=n:r.next=n,i.lastBaseUpdate=n}function pl(r,n,i,o){var d=r.updateQueue;za=!1;var p=d.firstBaseUpdate,v=d.lastBaseUpdate,P=d.shared.pending;if(P!==null){d.shared.pending=null;var T=P,ne=T.next;T.next=null,v===null?p=ne:v.next=ne,v=T;var be=r.alternate;be!==null&&(be=be.updateQueue,P=be.lastBaseUpdate,P!==v&&(P===null?be.firstBaseUpdate=ne:P.next=ne,be.lastBaseUpdate=T))}if(p!==null){var Se=d.baseState;v=0,be=ne=T=null,P=p;do{var ve=P.lane,Ae=P.eventTime;if((o&ve)===ve){be!==null&&(be=be.next={eventTime:Ae,lane:0,tag:P.tag,payload:P.payload,callback:P.callback,next:null});e:{var Te=r,Le=P;switch(ve=n,Ae=i,Le.tag){case 1:if(Te=Le.payload,typeof Te=="function"){Se=Te.call(Ae,Se,ve);break e}Se=Te;break e;case 3:Te.flags=Te.flags&-65537|128;case 0:if(Te=Le.payload,ve=typeof Te=="function"?Te.call(Ae,Se,ve):Te,ve==null)break e;Se=W({},Se,ve);break e;case 2:za=!0}}P.callback!==null&&P.lane!==0&&(r.flags|=64,ve=d.effects,ve===null?d.effects=[P]:ve.push(P))}else Ae={eventTime:Ae,lane:ve,tag:P.tag,payload:P.payload,callback:P.callback,next:null},be===null?(ne=be=Ae,T=Se):be=be.next=Ae,v|=ve;if(P=P.next,P===null){if(P=d.shared.pending,P===null)break;ve=P,P=ve.next,ve.next=null,d.lastBaseUpdate=ve,d.shared.pending=null}}while(!0);if(be===null&&(T=Se),d.baseState=T,d.firstBaseUpdate=ne,d.lastBaseUpdate=be,n=d.shared.interleaved,n!==null){d=n;do v|=d.lane,d=d.next;while(d!==n)}else p===null&&(d.shared.lanes=0);si|=v,r.lanes=v,r.memoizedState=Se}}function Vh(r,n,i){if(r=n.effects,n.effects=null,r!==null)for(n=0;n<r.length;n++){var o=r[n],d=o.callback;if(d!==null){if(o.callback=null,o=i,typeof d!="function")throw Error(s(191,d));d.call(o)}}}var Is={},Kn=Ea(Is),Bs=Ea(Is),qs=Ea(Is);function ai(r){if(r===Is)throw Error(s(174));return r}function Md(r,n){switch(Pt(qs,n),Pt(Bs,r),Pt(Kn,Is),r=n.nodeType,r){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:gr(null,"");break;default:r=r===8?n.parentNode:n,n=r.namespaceURI||null,r=r.tagName,n=gr(n,r)}Dt(Kn),Pt(Kn,n)}function Gi(){Dt(Kn),Dt(Bs),Dt(qs)}function Wh(r){ai(qs.current);var n=ai(Kn.current),i=gr(n,r.type);n!==i&&(Pt(Bs,r),Pt(Kn,i))}function Td(r){Bs.current===r&&(Dt(Kn),Dt(Bs))}var It=Ea(0);function fl(r){for(var n=r;n!==null;){if(n.tag===13){var i=n.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||i.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break;for(;n.sibling===null;){if(n.return===null||n.return===r)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Fd=[];function Ld(){for(var r=0;r<Fd.length;r++)Fd[r]._workInProgressVersionPrimary=null;Fd.length=0}var hl=O.ReactCurrentDispatcher,Od=O.ReactCurrentBatchConfig,ii=0,Bt=null,Zt=null,sr=null,ml=!1,Us=!1,Hs=0,C0=0;function jr(){throw Error(s(321))}function Id(r,n){if(n===null)return!1;for(var i=0;i<n.length&&i<r.length;i++)if(!$n(r[i],n[i]))return!1;return!0}function Bd(r,n,i,o,d,p){if(ii=p,Bt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,hl.current=r===null||r.memoizedState===null?z0:P0,r=i(o,d),Us){p=0;do{if(Us=!1,Hs=0,25<=p)throw Error(s(301));p+=1,sr=Zt=null,n.updateQueue=null,hl.current=N0,r=i(o,d)}while(Us)}if(hl.current=vl,n=Zt!==null&&Zt.next!==null,ii=0,sr=Zt=Bt=null,ml=!1,n)throw Error(s(300));return r}function qd(){var r=Hs!==0;return Hs=0,r}function Qn(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return sr===null?Bt.memoizedState=sr=r:sr=sr.next=r,sr}function xn(){if(Zt===null){var r=Bt.alternate;r=r!==null?r.memoizedState:null}else r=Zt.next;var n=sr===null?Bt.memoizedState:sr.next;if(n!==null)sr=n,Zt=r;else{if(r===null)throw Error(s(310));Zt=r,r={memoizedState:Zt.memoizedState,baseState:Zt.baseState,baseQueue:Zt.baseQueue,queue:Zt.queue,next:null},sr===null?Bt.memoizedState=sr=r:sr=sr.next=r}return sr}function Vs(r,n){return typeof n=="function"?n(r):n}function Ud(r){var n=xn(),i=n.queue;if(i===null)throw Error(s(311));i.lastRenderedReducer=r;var o=Zt,d=o.baseQueue,p=i.pending;if(p!==null){if(d!==null){var v=d.next;d.next=p.next,p.next=v}o.baseQueue=d=p,i.pending=null}if(d!==null){p=d.next,o=o.baseState;var P=v=null,T=null,ne=p;do{var be=ne.lane;if((ii&be)===be)T!==null&&(T=T.next={lane:0,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null}),o=ne.hasEagerState?ne.eagerState:r(o,ne.action);else{var Se={lane:be,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null};T===null?(P=T=Se,v=o):T=T.next=Se,Bt.lanes|=be,si|=be}ne=ne.next}while(ne!==null&&ne!==p);T===null?v=o:T.next=P,$n(o,n.memoizedState)||(Ir=!0),n.memoizedState=o,n.baseState=v,n.baseQueue=T,i.lastRenderedState=o}if(r=i.interleaved,r!==null){d=r;do p=d.lane,Bt.lanes|=p,si|=p,d=d.next;while(d!==r)}else d===null&&(i.lanes=0);return[n.memoizedState,i.dispatch]}function Hd(r){var n=xn(),i=n.queue;if(i===null)throw Error(s(311));i.lastRenderedReducer=r;var o=i.dispatch,d=i.pending,p=n.memoizedState;if(d!==null){i.pending=null;var v=d=d.next;do p=r(p,v.action),v=v.next;while(v!==d);$n(p,n.memoizedState)||(Ir=!0),n.memoizedState=p,n.baseQueue===null&&(n.baseState=p),i.lastRenderedState=p}return[p,o]}function Gh(){}function Kh(r,n){var i=Bt,o=xn(),d=n(),p=!$n(o.memoizedState,d);if(p&&(o.memoizedState=d,Ir=!0),o=o.queue,Vd(Jh.bind(null,i,o,r),[r]),o.getSnapshot!==n||p||sr!==null&&sr.memoizedState.tag&1){if(i.flags|=2048,Ws(9,Yh.bind(null,i,o,d,n),void 0,null),or===null)throw Error(s(349));(ii&30)!==0||Qh(i,n,d)}return d}function Qh(r,n,i){r.flags|=16384,r={getSnapshot:n,value:i},n=Bt.updateQueue,n===null?(n={lastEffect:null,stores:null},Bt.updateQueue=n,n.stores=[r]):(i=n.stores,i===null?n.stores=[r]:i.push(r))}function Yh(r,n,i,o){n.value=i,n.getSnapshot=o,Xh(n)&&Zh(r)}function Jh(r,n,i){return i(function(){Xh(n)&&Zh(r)})}function Xh(r){var n=r.getSnapshot;r=r.value;try{var i=n();return!$n(r,i)}catch{return!0}}function Zh(r){var n=fa(r,1);n!==null&&An(n,r,1,-1)}function em(r){var n=Qn();return typeof r=="function"&&(r=r()),n.memoizedState=n.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vs,lastRenderedState:r},n.queue=r,r=r.dispatch=R0.bind(null,Bt,r),[n.memoizedState,r]}function Ws(r,n,i,o){return r={tag:r,create:n,destroy:i,deps:o,next:null},n=Bt.updateQueue,n===null?(n={lastEffect:null,stores:null},Bt.updateQueue=n,n.lastEffect=r.next=r):(i=n.lastEffect,i===null?n.lastEffect=r.next=r:(o=i.next,i.next=r,r.next=o,n.lastEffect=r)),r}function tm(){return xn().memoizedState}function xl(r,n,i,o){var d=Qn();Bt.flags|=r,d.memoizedState=Ws(1|n,i,void 0,o===void 0?null:o)}function gl(r,n,i,o){var d=xn();o=o===void 0?null:o;var p=void 0;if(Zt!==null){var v=Zt.memoizedState;if(p=v.destroy,o!==null&&Id(o,v.deps)){d.memoizedState=Ws(n,i,p,o);return}}Bt.flags|=r,d.memoizedState=Ws(1|n,i,p,o)}function rm(r,n){return xl(8390656,8,r,n)}function Vd(r,n){return gl(2048,8,r,n)}function nm(r,n){return gl(4,2,r,n)}function am(r,n){return gl(4,4,r,n)}function im(r,n){if(typeof n=="function")return r=r(),n(r),function(){n(null)};if(n!=null)return r=r(),n.current=r,function(){n.current=null}}function sm(r,n,i){return i=i!=null?i.concat([r]):null,gl(4,4,im.bind(null,n,r),i)}function Wd(){}function om(r,n){var i=xn();n=n===void 0?null:n;var o=i.memoizedState;return o!==null&&n!==null&&Id(n,o[1])?o[0]:(i.memoizedState=[r,n],r)}function lm(r,n){var i=xn();n=n===void 0?null:n;var o=i.memoizedState;return o!==null&&n!==null&&Id(n,o[1])?o[0]:(r=r(),i.memoizedState=[r,n],r)}function cm(r,n,i){return(ii&21)===0?(r.baseState&&(r.baseState=!1,Ir=!0),r.memoizedState=i):($n(i,n)||(i=Un(),Bt.lanes|=i,si|=i,r.baseState=!0),n)}function E0(r,n){var i=bt;bt=i!==0&&4>i?i:4,r(!0);var o=Od.transition;Od.transition={};try{r(!1),n()}finally{bt=i,Od.transition=o}}function dm(){return xn().memoizedState}function $0(r,n,i){var o=Ma(r);if(i={lane:o,action:i,hasEagerState:!1,eagerState:null,next:null},um(r))pm(n,i);else if(i=qh(r,n,i,o),i!==null){var d=Ar();An(i,r,o,d),fm(i,n,o)}}function R0(r,n,i){var o=Ma(r),d={lane:o,action:i,hasEagerState:!1,eagerState:null,next:null};if(um(r))pm(n,d);else{var p=r.alternate;if(r.lanes===0&&(p===null||p.lanes===0)&&(p=n.lastRenderedReducer,p!==null))try{var v=n.lastRenderedState,P=p(v,i);if(d.hasEagerState=!0,d.eagerState=P,$n(P,v)){var T=n.interleaved;T===null?(d.next=d,Ad(n)):(d.next=T.next,T.next=d),n.interleaved=d;return}}catch{}finally{}i=qh(r,n,d,o),i!==null&&(d=Ar(),An(i,r,o,d),fm(i,n,o))}}function um(r){var n=r.alternate;return r===Bt||n!==null&&n===Bt}function pm(r,n){Us=ml=!0;var i=r.pending;i===null?n.next=n:(n.next=i.next,i.next=n),r.pending=n}function fm(r,n,i){if((i&4194240)!==0){var o=n.lanes;o&=r.pendingLanes,i|=o,n.lanes=i,ks(r,i)}}var vl={readContext:mn,useCallback:jr,useContext:jr,useEffect:jr,useImperativeHandle:jr,useInsertionEffect:jr,useLayoutEffect:jr,useMemo:jr,useReducer:jr,useRef:jr,useState:jr,useDebugValue:jr,useDeferredValue:jr,useTransition:jr,useMutableSource:jr,useSyncExternalStore:jr,useId:jr,unstable_isNewReconciler:!1},z0={readContext:mn,useCallback:function(r,n){return Qn().memoizedState=[r,n===void 0?null:n],r},useContext:mn,useEffect:rm,useImperativeHandle:function(r,n,i){return i=i!=null?i.concat([r]):null,xl(4194308,4,im.bind(null,n,r),i)},useLayoutEffect:function(r,n){return xl(4194308,4,r,n)},useInsertionEffect:function(r,n){return xl(4,2,r,n)},useMemo:function(r,n){var i=Qn();return n=n===void 0?null:n,r=r(),i.memoizedState=[r,n],r},useReducer:function(r,n,i){var o=Qn();return n=i!==void 0?i(n):n,o.memoizedState=o.baseState=n,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:n},o.queue=r,r=r.dispatch=$0.bind(null,Bt,r),[o.memoizedState,r]},useRef:function(r){var n=Qn();return r={current:r},n.memoizedState=r},useState:em,useDebugValue:Wd,useDeferredValue:function(r){return Qn().memoizedState=r},useTransition:function(){var r=em(!1),n=r[0];return r=E0.bind(null,r[1]),Qn().memoizedState=r,[n,r]},useMutableSource:function(){},useSyncExternalStore:function(r,n,i){var o=Bt,d=Qn();if(Lt){if(i===void 0)throw Error(s(407));i=i()}else{if(i=n(),or===null)throw Error(s(349));(ii&30)!==0||Qh(o,n,i)}d.memoizedState=i;var p={value:i,getSnapshot:n};return d.queue=p,rm(Jh.bind(null,o,p,r),[r]),o.flags|=2048,Ws(9,Yh.bind(null,o,p,i,n),void 0,null),i},useId:function(){var r=Qn(),n=or.identifierPrefix;if(Lt){var i=pa,o=ua;i=(o&~(1<<32-He(o)-1)).toString(32)+i,n=":"+n+"R"+i,i=Hs++,0<i&&(n+="H"+i.toString(32)),n+=":"}else i=C0++,n=":"+n+"r"+i.toString(32)+":";return r.memoizedState=n},unstable_isNewReconciler:!1},P0={readContext:mn,useCallback:om,useContext:mn,useEffect:Vd,useImperativeHandle:sm,useInsertionEffect:nm,useLayoutEffect:am,useMemo:lm,useReducer:Ud,useRef:tm,useState:function(){return Ud(Vs)},useDebugValue:Wd,useDeferredValue:function(r){var n=xn();return cm(n,Zt.memoizedState,r)},useTransition:function(){var r=Ud(Vs)[0],n=xn().memoizedState;return[r,n]},useMutableSource:Gh,useSyncExternalStore:Kh,useId:dm,unstable_isNewReconciler:!1},N0={readContext:mn,useCallback:om,useContext:mn,useEffect:Vd,useImperativeHandle:sm,useInsertionEffect:nm,useLayoutEffect:am,useMemo:lm,useReducer:Hd,useRef:tm,useState:function(){return Hd(Vs)},useDebugValue:Wd,useDeferredValue:function(r){var n=xn();return Zt===null?n.memoizedState=r:cm(n,Zt.memoizedState,r)},useTransition:function(){var r=Hd(Vs)[0],n=xn().memoizedState;return[r,n]},useMutableSource:Gh,useSyncExternalStore:Kh,useId:dm,unstable_isNewReconciler:!1};function zn(r,n){if(r&&r.defaultProps){n=W({},n),r=r.defaultProps;for(var i in r)n[i]===void 0&&(n[i]=r[i]);return n}return n}function Gd(r,n,i,o){n=r.memoizedState,i=i(o,n),i=i==null?n:W({},n,i),r.memoizedState=i,r.lanes===0&&(r.updateQueue.baseState=i)}var yl={isMounted:function(r){return(r=r._reactInternals)?un(r)===r:!1},enqueueSetState:function(r,n,i){r=r._reactInternals;var o=Ar(),d=Ma(r),p=ha(o,d);p.payload=n,i!=null&&(p.callback=i),n=Pa(r,p,d),n!==null&&(An(n,r,d,o),ul(n,r,d))},enqueueReplaceState:function(r,n,i){r=r._reactInternals;var o=Ar(),d=Ma(r),p=ha(o,d);p.tag=1,p.payload=n,i!=null&&(p.callback=i),n=Pa(r,p,d),n!==null&&(An(n,r,d,o),ul(n,r,d))},enqueueForceUpdate:function(r,n){r=r._reactInternals;var i=Ar(),o=Ma(r),d=ha(i,o);d.tag=2,n!=null&&(d.callback=n),n=Pa(r,d,o),n!==null&&(An(n,r,o,i),ul(n,r,o))}};function hm(r,n,i,o,d,p,v){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(o,p,v):n.prototype&&n.prototype.isPureReactComponent?!Ns(i,o)||!Ns(d,p):!0}function mm(r,n,i){var o=!1,d=$a,p=n.contextType;return typeof p=="object"&&p!==null?p=mn(p):(d=Or(n)?ei:yr.current,o=n.contextTypes,p=(o=o!=null)?Ii(r,d):$a),n=new n(i,p),r.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=yl,r.stateNode=n,n._reactInternals=r,o&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=d,r.__reactInternalMemoizedMaskedChildContext=p),n}function xm(r,n,i,o){r=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(i,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(i,o),n.state!==r&&yl.enqueueReplaceState(n,n.state,null)}function Kd(r,n,i,o){var d=r.stateNode;d.props=i,d.state=r.memoizedState,d.refs={},Dd(r);var p=n.contextType;typeof p=="object"&&p!==null?d.context=mn(p):(p=Or(n)?ei:yr.current,d.context=Ii(r,p)),d.state=r.memoizedState,p=n.getDerivedStateFromProps,typeof p=="function"&&(Gd(r,n,p,i),d.state=r.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(n=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),n!==d.state&&yl.enqueueReplaceState(d,d.state,null),pl(r,i,d,o),d.state=r.memoizedState),typeof d.componentDidMount=="function"&&(r.flags|=4194308)}function Ki(r,n){try{var i="",o=n;do i+=D(o),o=o.return;while(o);var d=i}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:r,source:n,stack:d,digest:null}}function Qd(r,n,i){return{value:r,source:null,stack:i??null,digest:n??null}}function Yd(r,n){try{console.error(n.value)}catch(i){setTimeout(function(){throw i})}}var A0=typeof WeakMap=="function"?WeakMap:Map;function gm(r,n,i){i=ha(-1,i),i.tag=3,i.payload={element:null};var o=n.value;return i.callback=function(){Cl||(Cl=!0,uu=o),Yd(r,n)},i}function vm(r,n,i){i=ha(-1,i),i.tag=3;var o=r.type.getDerivedStateFromError;if(typeof o=="function"){var d=n.value;i.payload=function(){return o(d)},i.callback=function(){Yd(r,n)}}var p=r.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(i.callback=function(){Yd(r,n),typeof o!="function"&&(Aa===null?Aa=new Set([this]):Aa.add(this));var v=n.stack;this.componentDidCatch(n.value,{componentStack:v!==null?v:""})}),i}function ym(r,n,i){var o=r.pingCache;if(o===null){o=r.pingCache=new A0;var d=new Set;o.set(n,d)}else d=o.get(n),d===void 0&&(d=new Set,o.set(n,d));d.has(i)||(d.add(i),r=G0.bind(null,r,n,i),n.then(r,r))}function jm(r){do{var n;if((n=r.tag===13)&&(n=r.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return r;r=r.return}while(r!==null);return null}function bm(r,n,i,o,d){return(r.mode&1)===0?(r===n?r.flags|=65536:(r.flags|=128,i.flags|=131072,i.flags&=-52805,i.tag===1&&(i.alternate===null?i.tag=17:(n=ha(-1,1),n.tag=2,Pa(i,n,1))),i.lanes|=1),r):(r.flags|=65536,r.lanes=d,r)}var D0=O.ReactCurrentOwner,Ir=!1;function Nr(r,n,i,o){n.child=r===null?Bh(n,null,i,o):Hi(n,r.child,i,o)}function wm(r,n,i,o,d){i=i.render;var p=n.ref;return Wi(n,d),o=Bd(r,n,i,o,p,d),i=qd(),r!==null&&!Ir?(n.updateQueue=r.updateQueue,n.flags&=-2053,r.lanes&=~d,ma(r,n,d)):(Lt&&i&&kd(n),n.flags|=1,Nr(r,n,o,d),n.child)}function _m(r,n,i,o,d){if(r===null){var p=i.type;return typeof p=="function"&&!vu(p)&&p.defaultProps===void 0&&i.compare===null&&i.defaultProps===void 0?(n.tag=15,n.type=p,km(r,n,p,o,d)):(r=Nl(i.type,null,o,n,n.mode,d),r.ref=n.ref,r.return=n,n.child=r)}if(p=r.child,(r.lanes&d)===0){var v=p.memoizedProps;if(i=i.compare,i=i!==null?i:Ns,i(v,o)&&r.ref===n.ref)return ma(r,n,d)}return n.flags|=1,r=Fa(p,o),r.ref=n.ref,r.return=n,n.child=r}function km(r,n,i,o,d){if(r!==null){var p=r.memoizedProps;if(Ns(p,o)&&r.ref===n.ref)if(Ir=!1,n.pendingProps=o=p,(r.lanes&d)!==0)(r.flags&131072)!==0&&(Ir=!0);else return n.lanes=r.lanes,ma(r,n,d)}return Jd(r,n,i,o,d)}function Sm(r,n,i){var o=n.pendingProps,d=o.children,p=r!==null?r.memoizedState:null;if(o.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null,transitions:null},Pt(Yi,Yr),Yr|=i;else{if((i&1073741824)===0)return r=p!==null?p.baseLanes|i:i,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:r,cachePool:null,transitions:null},n.updateQueue=null,Pt(Yi,Yr),Yr|=r,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=p!==null?p.baseLanes:i,Pt(Yi,Yr),Yr|=o}else p!==null?(o=p.baseLanes|i,n.memoizedState=null):o=i,Pt(Yi,Yr),Yr|=o;return Nr(r,n,d,i),n.child}function Cm(r,n){var i=n.ref;(r===null&&i!==null||r!==null&&r.ref!==i)&&(n.flags|=512,n.flags|=2097152)}function Jd(r,n,i,o,d){var p=Or(i)?ei:yr.current;return p=Ii(n,p),Wi(n,d),i=Bd(r,n,i,o,p,d),o=qd(),r!==null&&!Ir?(n.updateQueue=r.updateQueue,n.flags&=-2053,r.lanes&=~d,ma(r,n,d)):(Lt&&o&&kd(n),n.flags|=1,Nr(r,n,i,d),n.child)}function Em(r,n,i,o,d){if(Or(i)){var p=!0;nl(n)}else p=!1;if(Wi(n,d),n.stateNode===null)bl(r,n),mm(n,i,o),Kd(n,i,o,d),o=!0;else if(r===null){var v=n.stateNode,P=n.memoizedProps;v.props=P;var T=v.context,ne=i.contextType;typeof ne=="object"&&ne!==null?ne=mn(ne):(ne=Or(i)?ei:yr.current,ne=Ii(n,ne));var be=i.getDerivedStateFromProps,Se=typeof be=="function"||typeof v.getSnapshotBeforeUpdate=="function";Se||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(P!==o||T!==ne)&&xm(n,v,o,ne),za=!1;var ve=n.memoizedState;v.state=ve,pl(n,o,v,d),T=n.memoizedState,P!==o||ve!==T||Lr.current||za?(typeof be=="function"&&(Gd(n,i,be,o),T=n.memoizedState),(P=za||hm(n,i,P,o,ve,T,ne))?(Se||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(n.flags|=4194308)):(typeof v.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=T),v.props=o,v.state=T,v.context=ne,o=P):(typeof v.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{v=n.stateNode,Uh(r,n),P=n.memoizedProps,ne=n.type===n.elementType?P:zn(n.type,P),v.props=ne,Se=n.pendingProps,ve=v.context,T=i.contextType,typeof T=="object"&&T!==null?T=mn(T):(T=Or(i)?ei:yr.current,T=Ii(n,T));var Ae=i.getDerivedStateFromProps;(be=typeof Ae=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(P!==Se||ve!==T)&&xm(n,v,o,T),za=!1,ve=n.memoizedState,v.state=ve,pl(n,o,v,d);var Te=n.memoizedState;P!==Se||ve!==Te||Lr.current||za?(typeof Ae=="function"&&(Gd(n,i,Ae,o),Te=n.memoizedState),(ne=za||hm(n,i,ne,o,ve,Te,T)||!1)?(be||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(o,Te,T),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(o,Te,T)),typeof v.componentDidUpdate=="function"&&(n.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof v.componentDidUpdate!="function"||P===r.memoizedProps&&ve===r.memoizedState||(n.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||P===r.memoizedProps&&ve===r.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=Te),v.props=o,v.state=Te,v.context=T,o=ne):(typeof v.componentDidUpdate!="function"||P===r.memoizedProps&&ve===r.memoizedState||(n.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||P===r.memoizedProps&&ve===r.memoizedState||(n.flags|=1024),o=!1)}return Xd(r,n,i,o,p,d)}function Xd(r,n,i,o,d,p){Cm(r,n);var v=(n.flags&128)!==0;if(!o&&!v)return d&&Nh(n,i,!1),ma(r,n,p);o=n.stateNode,D0.current=n;var P=v&&typeof i.getDerivedStateFromError!="function"?null:o.render();return n.flags|=1,r!==null&&v?(n.child=Hi(n,r.child,null,p),n.child=Hi(n,null,P,p)):Nr(r,n,P,p),n.memoizedState=o.state,d&&Nh(n,i,!0),n.child}function $m(r){var n=r.stateNode;n.pendingContext?zh(r,n.pendingContext,n.pendingContext!==n.context):n.context&&zh(r,n.context,!1),Md(r,n.containerInfo)}function Rm(r,n,i,o,d){return Ui(),$d(d),n.flags|=256,Nr(r,n,i,o),n.child}var Zd={dehydrated:null,treeContext:null,retryLane:0};function eu(r){return{baseLanes:r,cachePool:null,transitions:null}}function zm(r,n,i){var o=n.pendingProps,d=It.current,p=!1,v=(n.flags&128)!==0,P;if((P=v)||(P=r!==null&&r.memoizedState===null?!1:(d&2)!==0),P?(p=!0,n.flags&=-129):(r===null||r.memoizedState!==null)&&(d|=1),Pt(It,d&1),r===null)return Ed(n),r=n.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?((n.mode&1)===0?n.lanes=1:r.data==="$!"?n.lanes=8:n.lanes=1073741824,null):(v=o.children,r=o.fallback,p?(o=n.mode,p=n.child,v={mode:"hidden",children:v},(o&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=v):p=Al(v,o,0,null),r=di(r,o,i,null),p.return=n,r.return=n,p.sibling=r,n.child=p,n.child.memoizedState=eu(i),n.memoizedState=Zd,r):tu(n,v));if(d=r.memoizedState,d!==null&&(P=d.dehydrated,P!==null))return M0(r,n,v,o,P,d,i);if(p){p=o.fallback,v=n.mode,d=r.child,P=d.sibling;var T={mode:"hidden",children:o.children};return(v&1)===0&&n.child!==d?(o=n.child,o.childLanes=0,o.pendingProps=T,n.deletions=null):(o=Fa(d,T),o.subtreeFlags=d.subtreeFlags&14680064),P!==null?p=Fa(P,p):(p=di(p,v,i,null),p.flags|=2),p.return=n,o.return=n,o.sibling=p,n.child=o,o=p,p=n.child,v=r.child.memoizedState,v=v===null?eu(i):{baseLanes:v.baseLanes|i,cachePool:null,transitions:v.transitions},p.memoizedState=v,p.childLanes=r.childLanes&~i,n.memoizedState=Zd,o}return p=r.child,r=p.sibling,o=Fa(p,{mode:"visible",children:o.children}),(n.mode&1)===0&&(o.lanes=i),o.return=n,o.sibling=null,r!==null&&(i=n.deletions,i===null?(n.deletions=[r],n.flags|=16):i.push(r)),n.child=o,n.memoizedState=null,o}function tu(r,n){return n=Al({mode:"visible",children:n},r.mode,0,null),n.return=r,r.child=n}function jl(r,n,i,o){return o!==null&&$d(o),Hi(n,r.child,null,i),r=tu(n,n.pendingProps.children),r.flags|=2,n.memoizedState=null,r}function M0(r,n,i,o,d,p,v){if(i)return n.flags&256?(n.flags&=-257,o=Qd(Error(s(422))),jl(r,n,v,o)):n.memoizedState!==null?(n.child=r.child,n.flags|=128,null):(p=o.fallback,d=n.mode,o=Al({mode:"visible",children:o.children},d,0,null),p=di(p,d,v,null),p.flags|=2,o.return=n,p.return=n,o.sibling=p,n.child=o,(n.mode&1)!==0&&Hi(n,r.child,null,v),n.child.memoizedState=eu(v),n.memoizedState=Zd,p);if((n.mode&1)===0)return jl(r,n,v,null);if(d.data==="$!"){if(o=d.nextSibling&&d.nextSibling.dataset,o)var P=o.dgst;return o=P,p=Error(s(419)),o=Qd(p,o,void 0),jl(r,n,v,o)}if(P=(v&r.childLanes)!==0,Ir||P){if(o=or,o!==null){switch(v&-v){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(o.suspendedLanes|v))!==0?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,fa(r,d),An(o,r,d,-1))}return gu(),o=Qd(Error(s(421))),jl(r,n,v,o)}return d.data==="$?"?(n.flags|=128,n.child=r.child,n=K0.bind(null,r),d._reactRetry=n,null):(r=p.treeContext,Qr=Ca(d.nextSibling),Kr=n,Lt=!0,Rn=null,r!==null&&(fn[hn++]=ua,fn[hn++]=pa,fn[hn++]=ti,ua=r.id,pa=r.overflow,ti=n),n=tu(n,o.children),n.flags|=4096,n)}function Pm(r,n,i){r.lanes|=n;var o=r.alternate;o!==null&&(o.lanes|=n),Nd(r.return,n,i)}function ru(r,n,i,o,d){var p=r.memoizedState;p===null?r.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:i,tailMode:d}:(p.isBackwards=n,p.rendering=null,p.renderingStartTime=0,p.last=o,p.tail=i,p.tailMode=d)}function Nm(r,n,i){var o=n.pendingProps,d=o.revealOrder,p=o.tail;if(Nr(r,n,o.children,i),o=It.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=n.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&Pm(r,i,n);else if(r.tag===19)Pm(r,i,n);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break e;for(;r.sibling===null;){if(r.return===null||r.return===n)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}o&=1}if(Pt(It,o),(n.mode&1)===0)n.memoizedState=null;else switch(d){case"forwards":for(i=n.child,d=null;i!==null;)r=i.alternate,r!==null&&fl(r)===null&&(d=i),i=i.sibling;i=d,i===null?(d=n.child,n.child=null):(d=i.sibling,i.sibling=null),ru(n,!1,d,i,p);break;case"backwards":for(i=null,d=n.child,n.child=null;d!==null;){if(r=d.alternate,r!==null&&fl(r)===null){n.child=d;break}r=d.sibling,d.sibling=i,i=d,d=r}ru(n,!0,i,null,p);break;case"together":ru(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function bl(r,n){(n.mode&1)===0&&r!==null&&(r.alternate=null,n.alternate=null,n.flags|=2)}function ma(r,n,i){if(r!==null&&(n.dependencies=r.dependencies),si|=n.lanes,(i&n.childLanes)===0)return null;if(r!==null&&n.child!==r.child)throw Error(s(153));if(n.child!==null){for(r=n.child,i=Fa(r,r.pendingProps),n.child=i,i.return=n;r.sibling!==null;)r=r.sibling,i=i.sibling=Fa(r,r.pendingProps),i.return=n;i.sibling=null}return n.child}function T0(r,n,i){switch(n.tag){case 3:$m(n),Ui();break;case 5:Wh(n);break;case 1:Or(n.type)&&nl(n);break;case 4:Md(n,n.stateNode.containerInfo);break;case 10:var o=n.type._context,d=n.memoizedProps.value;Pt(cl,o._currentValue),o._currentValue=d;break;case 13:if(o=n.memoizedState,o!==null)return o.dehydrated!==null?(Pt(It,It.current&1),n.flags|=128,null):(i&n.child.childLanes)!==0?zm(r,n,i):(Pt(It,It.current&1),r=ma(r,n,i),r!==null?r.sibling:null);Pt(It,It.current&1);break;case 19:if(o=(i&n.childLanes)!==0,(r.flags&128)!==0){if(o)return Nm(r,n,i);n.flags|=128}if(d=n.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Pt(It,It.current),o)break;return null;case 22:case 23:return n.lanes=0,Sm(r,n,i)}return ma(r,n,i)}var Am,nu,Dm,Mm;Am=function(r,n){for(var i=n.child;i!==null;){if(i.tag===5||i.tag===6)r.appendChild(i.stateNode);else if(i.tag!==4&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return;i=i.return}i.sibling.return=i.return,i=i.sibling}},nu=function(){},Dm=function(r,n,i,o){var d=r.memoizedProps;if(d!==o){r=n.stateNode,ai(Kn.current);var p=null;switch(i){case"input":d=ht(r,d),o=ht(r,o),p=[];break;case"select":d=W({},d,{value:void 0}),o=W({},o,{value:void 0}),p=[];break;case"textarea":d=_t(r,d),o=_t(r,o),p=[];break;default:typeof d.onClick!="function"&&typeof o.onClick=="function"&&(r.onclick=el)}nr(i,o);var v;i=null;for(ne in d)if(!o.hasOwnProperty(ne)&&d.hasOwnProperty(ne)&&d[ne]!=null)if(ne==="style"){var P=d[ne];for(v in P)P.hasOwnProperty(v)&&(i||(i={}),i[v]="")}else ne!=="dangerouslySetInnerHTML"&&ne!=="children"&&ne!=="suppressContentEditableWarning"&&ne!=="suppressHydrationWarning"&&ne!=="autoFocus"&&(c.hasOwnProperty(ne)?p||(p=[]):(p=p||[]).push(ne,null));for(ne in o){var T=o[ne];if(P=d!=null?d[ne]:void 0,o.hasOwnProperty(ne)&&T!==P&&(T!=null||P!=null))if(ne==="style")if(P){for(v in P)!P.hasOwnProperty(v)||T&&T.hasOwnProperty(v)||(i||(i={}),i[v]="");for(v in T)T.hasOwnProperty(v)&&P[v]!==T[v]&&(i||(i={}),i[v]=T[v])}else i||(p||(p=[]),p.push(ne,i)),i=T;else ne==="dangerouslySetInnerHTML"?(T=T?T.__html:void 0,P=P?P.__html:void 0,T!=null&&P!==T&&(p=p||[]).push(ne,T)):ne==="children"?typeof T!="string"&&typeof T!="number"||(p=p||[]).push(ne,""+T):ne!=="suppressContentEditableWarning"&&ne!=="suppressHydrationWarning"&&(c.hasOwnProperty(ne)?(T!=null&&ne==="onScroll"&&At("scroll",r),p||P===T||(p=[])):(p=p||[]).push(ne,T))}i&&(p=p||[]).push("style",i);var ne=p;(n.updateQueue=ne)&&(n.flags|=4)}},Mm=function(r,n,i,o){i!==o&&(n.flags|=4)};function Gs(r,n){if(!Lt)switch(r.tailMode){case"hidden":n=r.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?r.tail=null:i.sibling=null;break;case"collapsed":i=r.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?n||r.tail===null?r.tail=null:r.tail.sibling=null:o.sibling=null}}function br(r){var n=r.alternate!==null&&r.alternate.child===r.child,i=0,o=0;if(n)for(var d=r.child;d!==null;)i|=d.lanes|d.childLanes,o|=d.subtreeFlags&14680064,o|=d.flags&14680064,d.return=r,d=d.sibling;else for(d=r.child;d!==null;)i|=d.lanes|d.childLanes,o|=d.subtreeFlags,o|=d.flags,d.return=r,d=d.sibling;return r.subtreeFlags|=o,r.childLanes=i,n}function F0(r,n,i){var o=n.pendingProps;switch(Sd(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return br(n),null;case 1:return Or(n.type)&&rl(),br(n),null;case 3:return o=n.stateNode,Gi(),Dt(Lr),Dt(yr),Ld(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(r===null||r.child===null)&&(ol(n)?n.flags|=4:r===null||r.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Rn!==null&&(hu(Rn),Rn=null))),nu(r,n),br(n),null;case 5:Td(n);var d=ai(qs.current);if(i=n.type,r!==null&&n.stateNode!=null)Dm(r,n,i,o,d),r.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!o){if(n.stateNode===null)throw Error(s(166));return br(n),null}if(r=ai(Kn.current),ol(n)){o=n.stateNode,i=n.type;var p=n.memoizedProps;switch(o[Gn]=n,o[Fs]=p,r=(n.mode&1)!==0,i){case"dialog":At("cancel",o),At("close",o);break;case"iframe":case"object":case"embed":At("load",o);break;case"video":case"audio":for(d=0;d<Ds.length;d++)At(Ds[d],o);break;case"source":At("error",o);break;case"img":case"image":case"link":At("error",o),At("load",o);break;case"details":At("toggle",o);break;case"input":Ot(o,p),At("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!p.multiple},At("invalid",o);break;case"textarea":ot(o,p),At("invalid",o)}nr(i,p),d=null;for(var v in p)if(p.hasOwnProperty(v)){var P=p[v];v==="children"?typeof P=="string"?o.textContent!==P&&(p.suppressHydrationWarning!==!0&&Zo(o.textContent,P,r),d=["children",P]):typeof P=="number"&&o.textContent!==""+P&&(p.suppressHydrationWarning!==!0&&Zo(o.textContent,P,r),d=["children",""+P]):c.hasOwnProperty(v)&&P!=null&&v==="onScroll"&&At("scroll",o)}switch(i){case"input":nt(o),me(o,p,!0);break;case"textarea":nt(o),xr(o);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(o.onclick=el)}o=d,n.updateQueue=o,o!==null&&(n.flags|=4)}else{v=d.nodeType===9?d:d.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=dr(i)),r==="http://www.w3.org/1999/xhtml"?i==="script"?(r=v.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof o.is=="string"?r=v.createElement(i,{is:o.is}):(r=v.createElement(i),i==="select"&&(v=r,o.multiple?v.multiple=!0:o.size&&(v.size=o.size))):r=v.createElementNS(r,i),r[Gn]=n,r[Fs]=o,Am(r,n,!1,!1),n.stateNode=r;e:{switch(v=kt(i,o),i){case"dialog":At("cancel",r),At("close",r),d=o;break;case"iframe":case"object":case"embed":At("load",r),d=o;break;case"video":case"audio":for(d=0;d<Ds.length;d++)At(Ds[d],r);d=o;break;case"source":At("error",r),d=o;break;case"img":case"image":case"link":At("error",r),At("load",r),d=o;break;case"details":At("toggle",r),d=o;break;case"input":Ot(r,o),d=ht(r,o),At("invalid",r);break;case"option":d=o;break;case"select":r._wrapperState={wasMultiple:!!o.multiple},d=W({},o,{value:void 0}),At("invalid",r);break;case"textarea":ot(r,o),d=_t(r,o),At("invalid",r);break;default:d=o}nr(i,d),P=d;for(p in P)if(P.hasOwnProperty(p)){var T=P[p];p==="style"?Sn(r,T):p==="dangerouslySetInnerHTML"?(T=T?T.__html:void 0,T!=null&&on(r,T)):p==="children"?typeof T=="string"?(i!=="textarea"||T!=="")&&Nt(r,T):typeof T=="number"&&Nt(r,""+T):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(c.hasOwnProperty(p)?T!=null&&p==="onScroll"&&At("scroll",r):T!=null&&A(r,p,T,v))}switch(i){case"input":nt(r),me(r,o,!1);break;case"textarea":nt(r),xr(r);break;case"option":o.value!=null&&r.setAttribute("value",""+ke(o.value));break;case"select":r.multiple=!!o.multiple,p=o.value,p!=null?Be(r,!!o.multiple,p,!1):o.defaultValue!=null&&Be(r,!!o.multiple,o.defaultValue,!0);break;default:typeof d.onClick=="function"&&(r.onclick=el)}switch(i){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return br(n),null;case 6:if(r&&n.stateNode!=null)Mm(r,n,r.memoizedProps,o);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(i=ai(qs.current),ai(Kn.current),ol(n)){if(o=n.stateNode,i=n.memoizedProps,o[Gn]=n,(p=o.nodeValue!==i)&&(r=Kr,r!==null))switch(r.tag){case 3:Zo(o.nodeValue,i,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&Zo(o.nodeValue,i,(r.mode&1)!==0)}p&&(n.flags|=4)}else o=(i.nodeType===9?i:i.ownerDocument).createTextNode(o),o[Gn]=n,n.stateNode=o}return br(n),null;case 13:if(Dt(It),o=n.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(Lt&&Qr!==null&&(n.mode&1)!==0&&(n.flags&128)===0)Lh(),Ui(),n.flags|=98560,p=!1;else if(p=ol(n),o!==null&&o.dehydrated!==null){if(r===null){if(!p)throw Error(s(318));if(p=n.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(s(317));p[Gn]=n}else Ui(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;br(n),p=!1}else Rn!==null&&(hu(Rn),Rn=null),p=!0;if(!p)return n.flags&65536?n:null}return(n.flags&128)!==0?(n.lanes=i,n):(o=o!==null,o!==(r!==null&&r.memoizedState!==null)&&o&&(n.child.flags|=8192,(n.mode&1)!==0&&(r===null||(It.current&1)!==0?er===0&&(er=3):gu())),n.updateQueue!==null&&(n.flags|=4),br(n),null);case 4:return Gi(),nu(r,n),r===null&&Ms(n.stateNode.containerInfo),br(n),null;case 10:return Pd(n.type._context),br(n),null;case 17:return Or(n.type)&&rl(),br(n),null;case 19:if(Dt(It),p=n.memoizedState,p===null)return br(n),null;if(o=(n.flags&128)!==0,v=p.rendering,v===null)if(o)Gs(p,!1);else{if(er!==0||r!==null&&(r.flags&128)!==0)for(r=n.child;r!==null;){if(v=fl(r),v!==null){for(n.flags|=128,Gs(p,!1),o=v.updateQueue,o!==null&&(n.updateQueue=o,n.flags|=4),n.subtreeFlags=0,o=i,i=n.child;i!==null;)p=i,r=o,p.flags&=14680066,v=p.alternate,v===null?(p.childLanes=0,p.lanes=r,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=v.childLanes,p.lanes=v.lanes,p.child=v.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=v.memoizedProps,p.memoizedState=v.memoizedState,p.updateQueue=v.updateQueue,p.type=v.type,r=v.dependencies,p.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),i=i.sibling;return Pt(It,It.current&1|2),n.child}r=r.sibling}p.tail!==null&&Qe()>Ji&&(n.flags|=128,o=!0,Gs(p,!1),n.lanes=4194304)}else{if(!o)if(r=fl(v),r!==null){if(n.flags|=128,o=!0,i=r.updateQueue,i!==null&&(n.updateQueue=i,n.flags|=4),Gs(p,!0),p.tail===null&&p.tailMode==="hidden"&&!v.alternate&&!Lt)return br(n),null}else 2*Qe()-p.renderingStartTime>Ji&&i!==1073741824&&(n.flags|=128,o=!0,Gs(p,!1),n.lanes=4194304);p.isBackwards?(v.sibling=n.child,n.child=v):(i=p.last,i!==null?i.sibling=v:n.child=v,p.last=v)}return p.tail!==null?(n=p.tail,p.rendering=n,p.tail=n.sibling,p.renderingStartTime=Qe(),n.sibling=null,i=It.current,Pt(It,o?i&1|2:i&1),n):(br(n),null);case 22:case 23:return xu(),o=n.memoizedState!==null,r!==null&&r.memoizedState!==null!==o&&(n.flags|=8192),o&&(n.mode&1)!==0?(Yr&1073741824)!==0&&(br(n),n.subtreeFlags&6&&(n.flags|=8192)):br(n),null;case 24:return null;case 25:return null}throw Error(s(156,n.tag))}function L0(r,n){switch(Sd(n),n.tag){case 1:return Or(n.type)&&rl(),r=n.flags,r&65536?(n.flags=r&-65537|128,n):null;case 3:return Gi(),Dt(Lr),Dt(yr),Ld(),r=n.flags,(r&65536)!==0&&(r&128)===0?(n.flags=r&-65537|128,n):null;case 5:return Td(n),null;case 13:if(Dt(It),r=n.memoizedState,r!==null&&r.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Ui()}return r=n.flags,r&65536?(n.flags=r&-65537|128,n):null;case 19:return Dt(It),null;case 4:return Gi(),null;case 10:return Pd(n.type._context),null;case 22:case 23:return xu(),null;case 24:return null;default:return null}}var wl=!1,wr=!1,O0=typeof WeakSet=="function"?WeakSet:Set,Me=null;function Qi(r,n){var i=r.ref;if(i!==null)if(typeof i=="function")try{i(null)}catch(o){Ut(r,n,o)}else i.current=null}function au(r,n,i){try{i()}catch(o){Ut(r,n,o)}}var Tm=!1;function I0(r,n){if(xd=En,r=hh(),ld(r)){if("selectionStart"in r)var i={start:r.selectionStart,end:r.selectionEnd};else e:{i=(i=r.ownerDocument)&&i.defaultView||window;var o=i.getSelection&&i.getSelection();if(o&&o.rangeCount!==0){i=o.anchorNode;var d=o.anchorOffset,p=o.focusNode;o=o.focusOffset;try{i.nodeType,p.nodeType}catch{i=null;break e}var v=0,P=-1,T=-1,ne=0,be=0,Se=r,ve=null;t:for(;;){for(var Ae;Se!==i||d!==0&&Se.nodeType!==3||(P=v+d),Se!==p||o!==0&&Se.nodeType!==3||(T=v+o),Se.nodeType===3&&(v+=Se.nodeValue.length),(Ae=Se.firstChild)!==null;)ve=Se,Se=Ae;for(;;){if(Se===r)break t;if(ve===i&&++ne===d&&(P=v),ve===p&&++be===o&&(T=v),(Ae=Se.nextSibling)!==null)break;Se=ve,ve=Se.parentNode}Se=Ae}i=P===-1||T===-1?null:{start:P,end:T}}else i=null}i=i||{start:0,end:0}}else i=null;for(gd={focusedElem:r,selectionRange:i},En=!1,Me=n;Me!==null;)if(n=Me,r=n.child,(n.subtreeFlags&1028)!==0&&r!==null)r.return=n,Me=r;else for(;Me!==null;){n=Me;try{var Te=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if(Te!==null){var Le=Te.memoizedProps,Wt=Te.memoizedState,Q=n.stateNode,B=Q.getSnapshotBeforeUpdate(n.elementType===n.type?Le:zn(n.type,Le),Wt);Q.__reactInternalSnapshotBeforeUpdate=B}break;case 3:var ee=n.stateNode.containerInfo;ee.nodeType===1?ee.textContent="":ee.nodeType===9&&ee.documentElement&&ee.removeChild(ee.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(s(163))}}catch(Ce){Ut(n,n.return,Ce)}if(r=n.sibling,r!==null){r.return=n.return,Me=r;break}Me=n.return}return Te=Tm,Tm=!1,Te}function Ks(r,n,i){var o=n.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var d=o=o.next;do{if((d.tag&r)===r){var p=d.destroy;d.destroy=void 0,p!==void 0&&au(n,i,p)}d=d.next}while(d!==o)}}function _l(r,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&r)===r){var o=i.create;i.destroy=o()}i=i.next}while(i!==n)}}function iu(r){var n=r.ref;if(n!==null){var i=r.stateNode;switch(r.tag){case 5:r=i;break;default:r=i}typeof n=="function"?n(r):n.current=r}}function Fm(r){var n=r.alternate;n!==null&&(r.alternate=null,Fm(n)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(n=r.stateNode,n!==null&&(delete n[Gn],delete n[Fs],delete n[bd],delete n[w0],delete n[_0])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function Lm(r){return r.tag===5||r.tag===3||r.tag===4}function Om(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||Lm(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function su(r,n,i){var o=r.tag;if(o===5||o===6)r=r.stateNode,n?i.nodeType===8?i.parentNode.insertBefore(r,n):i.insertBefore(r,n):(i.nodeType===8?(n=i.parentNode,n.insertBefore(r,i)):(n=i,n.appendChild(r)),i=i._reactRootContainer,i!=null||n.onclick!==null||(n.onclick=el));else if(o!==4&&(r=r.child,r!==null))for(su(r,n,i),r=r.sibling;r!==null;)su(r,n,i),r=r.sibling}function ou(r,n,i){var o=r.tag;if(o===5||o===6)r=r.stateNode,n?i.insertBefore(r,n):i.appendChild(r);else if(o!==4&&(r=r.child,r!==null))for(ou(r,n,i),r=r.sibling;r!==null;)ou(r,n,i),r=r.sibling}var fr=null,Pn=!1;function Na(r,n,i){for(i=i.child;i!==null;)Im(r,n,i),i=i.sibling}function Im(r,n,i){if(le&&typeof le.onCommitFiberUnmount=="function")try{le.onCommitFiberUnmount(E,i)}catch{}switch(i.tag){case 5:wr||Qi(i,n);case 6:var o=fr,d=Pn;fr=null,Na(r,n,i),fr=o,Pn=d,fr!==null&&(Pn?(r=fr,i=i.stateNode,r.nodeType===8?r.parentNode.removeChild(i):r.removeChild(i)):fr.removeChild(i.stateNode));break;case 18:fr!==null&&(Pn?(r=fr,i=i.stateNode,r.nodeType===8?jd(r.parentNode,i):r.nodeType===1&&jd(r,i),_a(r)):jd(fr,i.stateNode));break;case 4:o=fr,d=Pn,fr=i.stateNode.containerInfo,Pn=!0,Na(r,n,i),fr=o,Pn=d;break;case 0:case 11:case 14:case 15:if(!wr&&(o=i.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){d=o=o.next;do{var p=d,v=p.destroy;p=p.tag,v!==void 0&&((p&2)!==0||(p&4)!==0)&&au(i,n,v),d=d.next}while(d!==o)}Na(r,n,i);break;case 1:if(!wr&&(Qi(i,n),o=i.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=i.memoizedProps,o.state=i.memoizedState,o.componentWillUnmount()}catch(P){Ut(i,n,P)}Na(r,n,i);break;case 21:Na(r,n,i);break;case 22:i.mode&1?(wr=(o=wr)||i.memoizedState!==null,Na(r,n,i),wr=o):Na(r,n,i);break;default:Na(r,n,i)}}function Bm(r){var n=r.updateQueue;if(n!==null){r.updateQueue=null;var i=r.stateNode;i===null&&(i=r.stateNode=new O0),n.forEach(function(o){var d=Q0.bind(null,r,o);i.has(o)||(i.add(o),o.then(d,d))})}}function Nn(r,n){var i=n.deletions;if(i!==null)for(var o=0;o<i.length;o++){var d=i[o];try{var p=r,v=n,P=v;e:for(;P!==null;){switch(P.tag){case 5:fr=P.stateNode,Pn=!1;break e;case 3:fr=P.stateNode.containerInfo,Pn=!0;break e;case 4:fr=P.stateNode.containerInfo,Pn=!0;break e}P=P.return}if(fr===null)throw Error(s(160));Im(p,v,d),fr=null,Pn=!1;var T=d.alternate;T!==null&&(T.return=null),d.return=null}catch(ne){Ut(d,n,ne)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)qm(n,r),n=n.sibling}function qm(r,n){var i=r.alternate,o=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(Nn(n,r),Yn(r),o&4){try{Ks(3,r,r.return),_l(3,r)}catch(Le){Ut(r,r.return,Le)}try{Ks(5,r,r.return)}catch(Le){Ut(r,r.return,Le)}}break;case 1:Nn(n,r),Yn(r),o&512&&i!==null&&Qi(i,i.return);break;case 5:if(Nn(n,r),Yn(r),o&512&&i!==null&&Qi(i,i.return),r.flags&32){var d=r.stateNode;try{Nt(d,"")}catch(Le){Ut(r,r.return,Le)}}if(o&4&&(d=r.stateNode,d!=null)){var p=r.memoizedProps,v=i!==null?i.memoizedProps:p,P=r.type,T=r.updateQueue;if(r.updateQueue=null,T!==null)try{P==="input"&&p.type==="radio"&&p.name!=null&&oe(d,p),kt(P,v);var ne=kt(P,p);for(v=0;v<T.length;v+=2){var be=T[v],Se=T[v+1];be==="style"?Sn(d,Se):be==="dangerouslySetInnerHTML"?on(d,Se):be==="children"?Nt(d,Se):A(d,be,Se,ne)}switch(P){case"input":$e(d,p);break;case"textarea":zt(d,p);break;case"select":var ve=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var Ae=p.value;Ae!=null?Be(d,!!p.multiple,Ae,!1):ve!==!!p.multiple&&(p.defaultValue!=null?Be(d,!!p.multiple,p.defaultValue,!0):Be(d,!!p.multiple,p.multiple?[]:"",!1))}d[Fs]=p}catch(Le){Ut(r,r.return,Le)}}break;case 6:if(Nn(n,r),Yn(r),o&4){if(r.stateNode===null)throw Error(s(162));d=r.stateNode,p=r.memoizedProps;try{d.nodeValue=p}catch(Le){Ut(r,r.return,Le)}}break;case 3:if(Nn(n,r),Yn(r),o&4&&i!==null&&i.memoizedState.isDehydrated)try{_a(n.containerInfo)}catch(Le){Ut(r,r.return,Le)}break;case 4:Nn(n,r),Yn(r);break;case 13:Nn(n,r),Yn(r),d=r.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(du=Qe())),o&4&&Bm(r);break;case 22:if(be=i!==null&&i.memoizedState!==null,r.mode&1?(wr=(ne=wr)||be,Nn(n,r),wr=ne):Nn(n,r),Yn(r),o&8192){if(ne=r.memoizedState!==null,(r.stateNode.isHidden=ne)&&!be&&(r.mode&1)!==0)for(Me=r,be=r.child;be!==null;){for(Se=Me=be;Me!==null;){switch(ve=Me,Ae=ve.child,ve.tag){case 0:case 11:case 14:case 15:Ks(4,ve,ve.return);break;case 1:Qi(ve,ve.return);var Te=ve.stateNode;if(typeof Te.componentWillUnmount=="function"){o=ve,i=ve.return;try{n=o,Te.props=n.memoizedProps,Te.state=n.memoizedState,Te.componentWillUnmount()}catch(Le){Ut(o,i,Le)}}break;case 5:Qi(ve,ve.return);break;case 22:if(ve.memoizedState!==null){Vm(Se);continue}}Ae!==null?(Ae.return=ve,Me=Ae):Vm(Se)}be=be.sibling}e:for(be=null,Se=r;;){if(Se.tag===5){if(be===null){be=Se;try{d=Se.stateNode,ne?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(P=Se.stateNode,T=Se.memoizedProps.style,v=T!=null&&T.hasOwnProperty("display")?T.display:null,P.style.display=ta("display",v))}catch(Le){Ut(r,r.return,Le)}}}else if(Se.tag===6){if(be===null)try{Se.stateNode.nodeValue=ne?"":Se.memoizedProps}catch(Le){Ut(r,r.return,Le)}}else if((Se.tag!==22&&Se.tag!==23||Se.memoizedState===null||Se===r)&&Se.child!==null){Se.child.return=Se,Se=Se.child;continue}if(Se===r)break e;for(;Se.sibling===null;){if(Se.return===null||Se.return===r)break e;be===Se&&(be=null),Se=Se.return}be===Se&&(be=null),Se.sibling.return=Se.return,Se=Se.sibling}}break;case 19:Nn(n,r),Yn(r),o&4&&Bm(r);break;case 21:break;default:Nn(n,r),Yn(r)}}function Yn(r){var n=r.flags;if(n&2){try{e:{for(var i=r.return;i!==null;){if(Lm(i)){var o=i;break e}i=i.return}throw Error(s(160))}switch(o.tag){case 5:var d=o.stateNode;o.flags&32&&(Nt(d,""),o.flags&=-33);var p=Om(r);ou(r,p,d);break;case 3:case 4:var v=o.stateNode.containerInfo,P=Om(r);su(r,P,v);break;default:throw Error(s(161))}}catch(T){Ut(r,r.return,T)}r.flags&=-3}n&4096&&(r.flags&=-4097)}function B0(r,n,i){Me=r,Um(r)}function Um(r,n,i){for(var o=(r.mode&1)!==0;Me!==null;){var d=Me,p=d.child;if(d.tag===22&&o){var v=d.memoizedState!==null||wl;if(!v){var P=d.alternate,T=P!==null&&P.memoizedState!==null||wr;P=wl;var ne=wr;if(wl=v,(wr=T)&&!ne)for(Me=d;Me!==null;)v=Me,T=v.child,v.tag===22&&v.memoizedState!==null?Wm(d):T!==null?(T.return=v,Me=T):Wm(d);for(;p!==null;)Me=p,Um(p),p=p.sibling;Me=d,wl=P,wr=ne}Hm(r)}else(d.subtreeFlags&8772)!==0&&p!==null?(p.return=d,Me=p):Hm(r)}}function Hm(r){for(;Me!==null;){var n=Me;if((n.flags&8772)!==0){var i=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:wr||_l(5,n);break;case 1:var o=n.stateNode;if(n.flags&4&&!wr)if(i===null)o.componentDidMount();else{var d=n.elementType===n.type?i.memoizedProps:zn(n.type,i.memoizedProps);o.componentDidUpdate(d,i.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var p=n.updateQueue;p!==null&&Vh(n,p,o);break;case 3:var v=n.updateQueue;if(v!==null){if(i=null,n.child!==null)switch(n.child.tag){case 5:i=n.child.stateNode;break;case 1:i=n.child.stateNode}Vh(n,v,i)}break;case 5:var P=n.stateNode;if(i===null&&n.flags&4){i=P;var T=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":T.autoFocus&&i.focus();break;case"img":T.src&&(i.src=T.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var ne=n.alternate;if(ne!==null){var be=ne.memoizedState;if(be!==null){var Se=be.dehydrated;Se!==null&&_a(Se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(s(163))}wr||n.flags&512&&iu(n)}catch(ve){Ut(n,n.return,ve)}}if(n===r){Me=null;break}if(i=n.sibling,i!==null){i.return=n.return,Me=i;break}Me=n.return}}function Vm(r){for(;Me!==null;){var n=Me;if(n===r){Me=null;break}var i=n.sibling;if(i!==null){i.return=n.return,Me=i;break}Me=n.return}}function Wm(r){for(;Me!==null;){var n=Me;try{switch(n.tag){case 0:case 11:case 15:var i=n.return;try{_l(4,n)}catch(T){Ut(n,i,T)}break;case 1:var o=n.stateNode;if(typeof o.componentDidMount=="function"){var d=n.return;try{o.componentDidMount()}catch(T){Ut(n,d,T)}}var p=n.return;try{iu(n)}catch(T){Ut(n,p,T)}break;case 5:var v=n.return;try{iu(n)}catch(T){Ut(n,v,T)}}}catch(T){Ut(n,n.return,T)}if(n===r){Me=null;break}var P=n.sibling;if(P!==null){P.return=n.return,Me=P;break}Me=n.return}}var q0=Math.ceil,kl=O.ReactCurrentDispatcher,lu=O.ReactCurrentOwner,gn=O.ReactCurrentBatchConfig,gt=0,or=null,Qt=null,hr=0,Yr=0,Yi=Ea(0),er=0,Qs=null,si=0,Sl=0,cu=0,Ys=null,Br=null,du=0,Ji=1/0,xa=null,Cl=!1,uu=null,Aa=null,El=!1,Da=null,$l=0,Js=0,pu=null,Rl=-1,zl=0;function Ar(){return(gt&6)!==0?Qe():Rl!==-1?Rl:Rl=Qe()}function Ma(r){return(r.mode&1)===0?1:(gt&2)!==0&&hr!==0?hr&-hr:S0.transition!==null?(zl===0&&(zl=Un()),zl):(r=bt,r!==0||(r=window.event,r=r===void 0?16:Kf(r.type)),r)}function An(r,n,i,o){if(50<Js)throw Js=0,pu=null,Error(s(185));sa(r,i,o),((gt&2)===0||r!==or)&&(r===or&&((gt&2)===0&&(Sl|=i),er===4&&Ta(r,hr)),qr(r,o),i===1&&gt===0&&(n.mode&1)===0&&(Ji=Qe()+500,al&&Ra()))}function qr(r,n){var i=r.callbackNode;ir(r,n);var o=et(r,r===or?hr:0);if(o===0)i!==null&&ba(i),r.callbackNode=null,r.callbackPriority=0;else if(n=o&-o,r.callbackPriority!==n){if(i!=null&&ba(i),n===1)r.tag===0?k0(Km.bind(null,r)):Ah(Km.bind(null,r)),j0(function(){(gt&6)===0&&Ra()}),i=null;else{switch(Io(o)){case 1:i=pr;break;case 4:i=Ja;break;case 16:i=qn;break;case 536870912:i=Pi;break;default:i=qn}i=rx(i,Gm.bind(null,r))}r.callbackPriority=n,r.callbackNode=i}}function Gm(r,n){if(Rl=-1,zl=0,(gt&6)!==0)throw Error(s(327));var i=r.callbackNode;if(Xi()&&r.callbackNode!==i)return null;var o=et(r,r===or?hr:0);if(o===0)return null;if((o&30)!==0||(o&r.expiredLanes)!==0||n)n=Pl(r,o);else{n=o;var d=gt;gt|=2;var p=Ym();(or!==r||hr!==n)&&(xa=null,Ji=Qe()+500,li(r,n));do try{V0();break}catch(P){Qm(r,P)}while(!0);zd(),kl.current=p,gt=d,Qt!==null?n=0:(or=null,hr=0,n=er)}if(n!==0){if(n===2&&(d=Wr(r),d!==0&&(o=d,n=fu(r,d))),n===1)throw i=Qs,li(r,0),Ta(r,o),qr(r,Qe()),i;if(n===6)Ta(r,o);else{if(d=r.current.alternate,(o&30)===0&&!U0(d)&&(n=Pl(r,o),n===2&&(p=Wr(r),p!==0&&(o=p,n=fu(r,p))),n===1))throw i=Qs,li(r,0),Ta(r,o),qr(r,Qe()),i;switch(r.finishedWork=d,r.finishedLanes=o,n){case 0:case 1:throw Error(s(345));case 2:ci(r,Br,xa);break;case 3:if(Ta(r,o),(o&130023424)===o&&(n=du+500-Qe(),10<n)){if(et(r,0)!==0)break;if(d=r.suspendedLanes,(d&o)!==o){Ar(),r.pingedLanes|=r.suspendedLanes&d;break}r.timeoutHandle=yd(ci.bind(null,r,Br,xa),n);break}ci(r,Br,xa);break;case 4:if(Ta(r,o),(o&4194240)===o)break;for(n=r.eventTimes,d=-1;0<o;){var v=31-He(o);p=1<<v,v=n[v],v>d&&(d=v),o&=~p}if(o=d,o=Qe()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*q0(o/1960))-o,10<o){r.timeoutHandle=yd(ci.bind(null,r,Br,xa),o);break}ci(r,Br,xa);break;case 5:ci(r,Br,xa);break;default:throw Error(s(329))}}}return qr(r,Qe()),r.callbackNode===i?Gm.bind(null,r):null}function fu(r,n){var i=Ys;return r.current.memoizedState.isDehydrated&&(li(r,n).flags|=256),r=Pl(r,n),r!==2&&(n=Br,Br=i,n!==null&&hu(n)),r}function hu(r){Br===null?Br=r:Br.push.apply(Br,r)}function U0(r){for(var n=r;;){if(n.flags&16384){var i=n.updateQueue;if(i!==null&&(i=i.stores,i!==null))for(var o=0;o<i.length;o++){var d=i[o],p=d.getSnapshot;d=d.value;try{if(!$n(p(),d))return!1}catch{return!1}}}if(i=n.child,n.subtreeFlags&16384&&i!==null)i.return=n,n=i;else{if(n===r)break;for(;n.sibling===null;){if(n.return===null||n.return===r)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ta(r,n){for(n&=~cu,n&=~Sl,r.suspendedLanes|=n,r.pingedLanes&=~n,r=r.expirationTimes;0<n;){var i=31-He(n),o=1<<i;r[i]=-1,n&=~o}}function Km(r){if((gt&6)!==0)throw Error(s(327));Xi();var n=et(r,0);if((n&1)===0)return qr(r,Qe()),null;var i=Pl(r,n);if(r.tag!==0&&i===2){var o=Wr(r);o!==0&&(n=o,i=fu(r,o))}if(i===1)throw i=Qs,li(r,0),Ta(r,n),qr(r,Qe()),i;if(i===6)throw Error(s(345));return r.finishedWork=r.current.alternate,r.finishedLanes=n,ci(r,Br,xa),qr(r,Qe()),null}function mu(r,n){var i=gt;gt|=1;try{return r(n)}finally{gt=i,gt===0&&(Ji=Qe()+500,al&&Ra())}}function oi(r){Da!==null&&Da.tag===0&&(gt&6)===0&&Xi();var n=gt;gt|=1;var i=gn.transition,o=bt;try{if(gn.transition=null,bt=1,r)return r()}finally{bt=o,gn.transition=i,gt=n,(gt&6)===0&&Ra()}}function xu(){Yr=Yi.current,Dt(Yi)}function li(r,n){r.finishedWork=null,r.finishedLanes=0;var i=r.timeoutHandle;if(i!==-1&&(r.timeoutHandle=-1,y0(i)),Qt!==null)for(i=Qt.return;i!==null;){var o=i;switch(Sd(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&rl();break;case 3:Gi(),Dt(Lr),Dt(yr),Ld();break;case 5:Td(o);break;case 4:Gi();break;case 13:Dt(It);break;case 19:Dt(It);break;case 10:Pd(o.type._context);break;case 22:case 23:xu()}i=i.return}if(or=r,Qt=r=Fa(r.current,null),hr=Yr=n,er=0,Qs=null,cu=Sl=si=0,Br=Ys=null,ni!==null){for(n=0;n<ni.length;n++)if(i=ni[n],o=i.interleaved,o!==null){i.interleaved=null;var d=o.next,p=i.pending;if(p!==null){var v=p.next;p.next=d,o.next=v}i.pending=o}ni=null}return r}function Qm(r,n){do{var i=Qt;try{if(zd(),hl.current=vl,ml){for(var o=Bt.memoizedState;o!==null;){var d=o.queue;d!==null&&(d.pending=null),o=o.next}ml=!1}if(ii=0,sr=Zt=Bt=null,Us=!1,Hs=0,lu.current=null,i===null||i.return===null){er=1,Qs=n,Qt=null;break}e:{var p=r,v=i.return,P=i,T=n;if(n=hr,P.flags|=32768,T!==null&&typeof T=="object"&&typeof T.then=="function"){var ne=T,be=P,Se=be.tag;if((be.mode&1)===0&&(Se===0||Se===11||Se===15)){var ve=be.alternate;ve?(be.updateQueue=ve.updateQueue,be.memoizedState=ve.memoizedState,be.lanes=ve.lanes):(be.updateQueue=null,be.memoizedState=null)}var Ae=jm(v);if(Ae!==null){Ae.flags&=-257,bm(Ae,v,P,p,n),Ae.mode&1&&ym(p,ne,n),n=Ae,T=ne;var Te=n.updateQueue;if(Te===null){var Le=new Set;Le.add(T),n.updateQueue=Le}else Te.add(T);break e}else{if((n&1)===0){ym(p,ne,n),gu();break e}T=Error(s(426))}}else if(Lt&&P.mode&1){var Wt=jm(v);if(Wt!==null){(Wt.flags&65536)===0&&(Wt.flags|=256),bm(Wt,v,P,p,n),$d(Ki(T,P));break e}}p=T=Ki(T,P),er!==4&&(er=2),Ys===null?Ys=[p]:Ys.push(p),p=v;do{switch(p.tag){case 3:p.flags|=65536,n&=-n,p.lanes|=n;var Q=gm(p,T,n);Hh(p,Q);break e;case 1:P=T;var B=p.type,ee=p.stateNode;if((p.flags&128)===0&&(typeof B.getDerivedStateFromError=="function"||ee!==null&&typeof ee.componentDidCatch=="function"&&(Aa===null||!Aa.has(ee)))){p.flags|=65536,n&=-n,p.lanes|=n;var Ce=vm(p,P,n);Hh(p,Ce);break e}}p=p.return}while(p!==null)}Xm(i)}catch(Ie){n=Ie,Qt===i&&i!==null&&(Qt=i=i.return);continue}break}while(!0)}function Ym(){var r=kl.current;return kl.current=vl,r===null?vl:r}function gu(){(er===0||er===3||er===2)&&(er=4),or===null||(si&268435455)===0&&(Sl&268435455)===0||Ta(or,hr)}function Pl(r,n){var i=gt;gt|=2;var o=Ym();(or!==r||hr!==n)&&(xa=null,li(r,n));do try{H0();break}catch(d){Qm(r,d)}while(!0);if(zd(),gt=i,kl.current=o,Qt!==null)throw Error(s(261));return or=null,hr=0,er}function H0(){for(;Qt!==null;)Jm(Qt)}function V0(){for(;Qt!==null&&!qt();)Jm(Qt)}function Jm(r){var n=tx(r.alternate,r,Yr);r.memoizedProps=r.pendingProps,n===null?Xm(r):Qt=n,lu.current=null}function Xm(r){var n=r;do{var i=n.alternate;if(r=n.return,(n.flags&32768)===0){if(i=F0(i,n,Yr),i!==null){Qt=i;return}}else{if(i=L0(i,n),i!==null){i.flags&=32767,Qt=i;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{er=6,Qt=null;return}}if(n=n.sibling,n!==null){Qt=n;return}Qt=n=r}while(n!==null);er===0&&(er=5)}function ci(r,n,i){var o=bt,d=gn.transition;try{gn.transition=null,bt=1,W0(r,n,i,o)}finally{gn.transition=d,bt=o}return null}function W0(r,n,i,o){do Xi();while(Da!==null);if((gt&6)!==0)throw Error(s(327));i=r.finishedWork;var d=r.finishedLanes;if(i===null)return null;if(r.finishedWork=null,r.finishedLanes=0,i===r.current)throw Error(s(177));r.callbackNode=null,r.callbackPriority=0;var p=i.lanes|i.childLanes;if(Yc(r,p),r===or&&(Qt=or=null,hr=0),(i.subtreeFlags&2064)===0&&(i.flags&2064)===0||El||(El=!0,rx(qn,function(){return Xi(),null})),p=(i.flags&15990)!==0,(i.subtreeFlags&15990)!==0||p){p=gn.transition,gn.transition=null;var v=bt;bt=1;var P=gt;gt|=4,lu.current=null,I0(r,i),qm(i,r),p0(gd),En=!!xd,gd=xd=null,r.current=i,B0(i),st(),gt=P,bt=v,gn.transition=p}else r.current=i;if(El&&(El=!1,Da=r,$l=d),p=r.pendingLanes,p===0&&(Aa=null),De(i.stateNode),qr(r,Qe()),n!==null)for(o=r.onRecoverableError,i=0;i<n.length;i++)d=n[i],o(d.value,{componentStack:d.stack,digest:d.digest});if(Cl)throw Cl=!1,r=uu,uu=null,r;return($l&1)!==0&&r.tag!==0&&Xi(),p=r.pendingLanes,(p&1)!==0?r===pu?Js++:(Js=0,pu=r):Js=0,Ra(),null}function Xi(){if(Da!==null){var r=Io($l),n=gn.transition,i=bt;try{if(gn.transition=null,bt=16>r?16:r,Da===null)var o=!1;else{if(r=Da,Da=null,$l=0,(gt&6)!==0)throw Error(s(331));var d=gt;for(gt|=4,Me=r.current;Me!==null;){var p=Me,v=p.child;if((Me.flags&16)!==0){var P=p.deletions;if(P!==null){for(var T=0;T<P.length;T++){var ne=P[T];for(Me=ne;Me!==null;){var be=Me;switch(be.tag){case 0:case 11:case 15:Ks(8,be,p)}var Se=be.child;if(Se!==null)Se.return=be,Me=Se;else for(;Me!==null;){be=Me;var ve=be.sibling,Ae=be.return;if(Fm(be),be===ne){Me=null;break}if(ve!==null){ve.return=Ae,Me=ve;break}Me=Ae}}}var Te=p.alternate;if(Te!==null){var Le=Te.child;if(Le!==null){Te.child=null;do{var Wt=Le.sibling;Le.sibling=null,Le=Wt}while(Le!==null)}}Me=p}}if((p.subtreeFlags&2064)!==0&&v!==null)v.return=p,Me=v;else e:for(;Me!==null;){if(p=Me,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:Ks(9,p,p.return)}var Q=p.sibling;if(Q!==null){Q.return=p.return,Me=Q;break e}Me=p.return}}var B=r.current;for(Me=B;Me!==null;){v=Me;var ee=v.child;if((v.subtreeFlags&2064)!==0&&ee!==null)ee.return=v,Me=ee;else e:for(v=B;Me!==null;){if(P=Me,(P.flags&2048)!==0)try{switch(P.tag){case 0:case 11:case 15:_l(9,P)}}catch(Ie){Ut(P,P.return,Ie)}if(P===v){Me=null;break e}var Ce=P.sibling;if(Ce!==null){Ce.return=P.return,Me=Ce;break e}Me=P.return}}if(gt=d,Ra(),le&&typeof le.onPostCommitFiberRoot=="function")try{le.onPostCommitFiberRoot(E,r)}catch{}o=!0}return o}finally{bt=i,gn.transition=n}}return!1}function Zm(r,n,i){n=Ki(i,n),n=gm(r,n,1),r=Pa(r,n,1),n=Ar(),r!==null&&(sa(r,1,n),qr(r,n))}function Ut(r,n,i){if(r.tag===3)Zm(r,r,i);else for(;n!==null;){if(n.tag===3){Zm(n,r,i);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Aa===null||!Aa.has(o))){r=Ki(i,r),r=vm(n,r,1),n=Pa(n,r,1),r=Ar(),n!==null&&(sa(n,1,r),qr(n,r));break}}n=n.return}}function G0(r,n,i){var o=r.pingCache;o!==null&&o.delete(n),n=Ar(),r.pingedLanes|=r.suspendedLanes&i,or===r&&(hr&i)===i&&(er===4||er===3&&(hr&130023424)===hr&&500>Qe()-du?li(r,0):cu|=i),qr(r,n)}function ex(r,n){n===0&&((r.mode&1)===0?n=1:(n=mt,mt<<=1,(mt&130023424)===0&&(mt=4194304)));var i=Ar();r=fa(r,n),r!==null&&(sa(r,n,i),qr(r,i))}function K0(r){var n=r.memoizedState,i=0;n!==null&&(i=n.retryLane),ex(r,i)}function Q0(r,n){var i=0;switch(r.tag){case 13:var o=r.stateNode,d=r.memoizedState;d!==null&&(i=d.retryLane);break;case 19:o=r.stateNode;break;default:throw Error(s(314))}o!==null&&o.delete(n),ex(r,i)}var tx;tx=function(r,n,i){if(r!==null)if(r.memoizedProps!==n.pendingProps||Lr.current)Ir=!0;else{if((r.lanes&i)===0&&(n.flags&128)===0)return Ir=!1,T0(r,n,i);Ir=(r.flags&131072)!==0}else Ir=!1,Lt&&(n.flags&1048576)!==0&&Dh(n,sl,n.index);switch(n.lanes=0,n.tag){case 2:var o=n.type;bl(r,n),r=n.pendingProps;var d=Ii(n,yr.current);Wi(n,i),d=Bd(null,n,o,r,d,i);var p=qd();return n.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Or(o)?(p=!0,nl(n)):p=!1,n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Dd(n),d.updater=yl,n.stateNode=d,d._reactInternals=n,Kd(n,o,r,i),n=Xd(null,n,o,!0,p,i)):(n.tag=0,Lt&&p&&kd(n),Nr(null,n,d,i),n=n.child),n;case 16:o=n.elementType;e:{switch(bl(r,n),r=n.pendingProps,d=o._init,o=d(o._payload),n.type=o,d=n.tag=J0(o),r=zn(o,r),d){case 0:n=Jd(null,n,o,r,i);break e;case 1:n=Em(null,n,o,r,i);break e;case 11:n=wm(null,n,o,r,i);break e;case 14:n=_m(null,n,o,zn(o.type,r),i);break e}throw Error(s(306,o,""))}return n;case 0:return o=n.type,d=n.pendingProps,d=n.elementType===o?d:zn(o,d),Jd(r,n,o,d,i);case 1:return o=n.type,d=n.pendingProps,d=n.elementType===o?d:zn(o,d),Em(r,n,o,d,i);case 3:e:{if($m(n),r===null)throw Error(s(387));o=n.pendingProps,p=n.memoizedState,d=p.element,Uh(r,n),pl(n,o,null,i);var v=n.memoizedState;if(o=v.element,p.isDehydrated)if(p={element:o,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},n.updateQueue.baseState=p,n.memoizedState=p,n.flags&256){d=Ki(Error(s(423)),n),n=Rm(r,n,o,i,d);break e}else if(o!==d){d=Ki(Error(s(424)),n),n=Rm(r,n,o,i,d);break e}else for(Qr=Ca(n.stateNode.containerInfo.firstChild),Kr=n,Lt=!0,Rn=null,i=Bh(n,null,o,i),n.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling;else{if(Ui(),o===d){n=ma(r,n,i);break e}Nr(r,n,o,i)}n=n.child}return n;case 5:return Wh(n),r===null&&Ed(n),o=n.type,d=n.pendingProps,p=r!==null?r.memoizedProps:null,v=d.children,vd(o,d)?v=null:p!==null&&vd(o,p)&&(n.flags|=32),Cm(r,n),Nr(r,n,v,i),n.child;case 6:return r===null&&Ed(n),null;case 13:return zm(r,n,i);case 4:return Md(n,n.stateNode.containerInfo),o=n.pendingProps,r===null?n.child=Hi(n,null,o,i):Nr(r,n,o,i),n.child;case 11:return o=n.type,d=n.pendingProps,d=n.elementType===o?d:zn(o,d),wm(r,n,o,d,i);case 7:return Nr(r,n,n.pendingProps,i),n.child;case 8:return Nr(r,n,n.pendingProps.children,i),n.child;case 12:return Nr(r,n,n.pendingProps.children,i),n.child;case 10:e:{if(o=n.type._context,d=n.pendingProps,p=n.memoizedProps,v=d.value,Pt(cl,o._currentValue),o._currentValue=v,p!==null)if($n(p.value,v)){if(p.children===d.children&&!Lr.current){n=ma(r,n,i);break e}}else for(p=n.child,p!==null&&(p.return=n);p!==null;){var P=p.dependencies;if(P!==null){v=p.child;for(var T=P.firstContext;T!==null;){if(T.context===o){if(p.tag===1){T=ha(-1,i&-i),T.tag=2;var ne=p.updateQueue;if(ne!==null){ne=ne.shared;var be=ne.pending;be===null?T.next=T:(T.next=be.next,be.next=T),ne.pending=T}}p.lanes|=i,T=p.alternate,T!==null&&(T.lanes|=i),Nd(p.return,i,n),P.lanes|=i;break}T=T.next}}else if(p.tag===10)v=p.type===n.type?null:p.child;else if(p.tag===18){if(v=p.return,v===null)throw Error(s(341));v.lanes|=i,P=v.alternate,P!==null&&(P.lanes|=i),Nd(v,i,n),v=p.sibling}else v=p.child;if(v!==null)v.return=p;else for(v=p;v!==null;){if(v===n){v=null;break}if(p=v.sibling,p!==null){p.return=v.return,v=p;break}v=v.return}p=v}Nr(r,n,d.children,i),n=n.child}return n;case 9:return d=n.type,o=n.pendingProps.children,Wi(n,i),d=mn(d),o=o(d),n.flags|=1,Nr(r,n,o,i),n.child;case 14:return o=n.type,d=zn(o,n.pendingProps),d=zn(o.type,d),_m(r,n,o,d,i);case 15:return km(r,n,n.type,n.pendingProps,i);case 17:return o=n.type,d=n.pendingProps,d=n.elementType===o?d:zn(o,d),bl(r,n),n.tag=1,Or(o)?(r=!0,nl(n)):r=!1,Wi(n,i),mm(n,o,d),Kd(n,o,d,i),Xd(null,n,o,!0,r,i);case 19:return Nm(r,n,i);case 22:return Sm(r,n,i)}throw Error(s(156,n.tag))};function rx(r,n){return ia(r,n)}function Y0(r,n,i,o){this.tag=r,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vn(r,n,i,o){return new Y0(r,n,i,o)}function vu(r){return r=r.prototype,!(!r||!r.isReactComponent)}function J0(r){if(typeof r=="function")return vu(r)?1:0;if(r!=null){if(r=r.$$typeof,r===F)return 11;if(r===Ne)return 14}return 2}function Fa(r,n){var i=r.alternate;return i===null?(i=vn(r.tag,n,r.key,r.mode),i.elementType=r.elementType,i.type=r.type,i.stateNode=r.stateNode,i.alternate=r,r.alternate=i):(i.pendingProps=n,i.type=r.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=r.flags&14680064,i.childLanes=r.childLanes,i.lanes=r.lanes,i.child=r.child,i.memoizedProps=r.memoizedProps,i.memoizedState=r.memoizedState,i.updateQueue=r.updateQueue,n=r.dependencies,i.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},i.sibling=r.sibling,i.index=r.index,i.ref=r.ref,i}function Nl(r,n,i,o,d,p){var v=2;if(o=r,typeof r=="function")vu(r)&&(v=1);else if(typeof r=="string")v=5;else e:switch(r){case I:return di(i.children,d,p,n);case ce:v=8,d|=8;break;case C:return r=vn(12,i,n,d|2),r.elementType=C,r.lanes=p,r;case fe:return r=vn(13,i,n,d),r.elementType=fe,r.lanes=p,r;case ge:return r=vn(19,i,n,d),r.elementType=ge,r.lanes=p,r;case je:return Al(i,d,p,n);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case y:v=10;break e;case q:v=9;break e;case F:v=11;break e;case Ne:v=14;break e;case K:v=16,o=null;break e}throw Error(s(130,r==null?r:typeof r,""))}return n=vn(v,i,n,d),n.elementType=r,n.type=o,n.lanes=p,n}function di(r,n,i,o){return r=vn(7,r,o,n),r.lanes=i,r}function Al(r,n,i,o){return r=vn(22,r,o,n),r.elementType=je,r.lanes=i,r.stateNode={isHidden:!1},r}function yu(r,n,i){return r=vn(6,r,null,n),r.lanes=i,r}function ju(r,n,i){return n=vn(4,r.children!==null?r.children:[],r.key,n),n.lanes=i,n.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},n}function X0(r,n,i,o,d){this.tag=n,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Fr(0),this.expirationTimes=Fr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fr(0),this.identifierPrefix=o,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function bu(r,n,i,o,d,p,v,P,T){return r=new X0(r,n,i,P,T),n===1?(n=1,p===!0&&(n|=8)):n=0,p=vn(3,null,null,n),r.current=p,p.stateNode=r,p.memoizedState={element:o,isDehydrated:i,cache:null,transitions:null,pendingSuspenseBoundaries:null},Dd(p),r}function Z0(r,n,i){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:J,key:o==null?null:""+o,children:r,containerInfo:n,implementation:i}}function nx(r){if(!r)return $a;r=r._reactInternals;e:{if(un(r)!==r||r.tag!==1)throw Error(s(170));var n=r;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Or(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(s(171))}if(r.tag===1){var i=r.type;if(Or(i))return Ph(r,i,n)}return n}function ax(r,n,i,o,d,p,v,P,T){return r=bu(i,o,!0,r,d,p,v,P,T),r.context=nx(null),i=r.current,o=Ar(),d=Ma(i),p=ha(o,d),p.callback=n??null,Pa(i,p,d),r.current.lanes=d,sa(r,d,o),qr(r,o),r}function Dl(r,n,i,o){var d=n.current,p=Ar(),v=Ma(d);return i=nx(i),n.context===null?n.context=i:n.pendingContext=i,n=ha(p,v),n.payload={element:r},o=o===void 0?null:o,o!==null&&(n.callback=o),r=Pa(d,n,v),r!==null&&(An(r,d,v,p),ul(r,d,v)),v}function Ml(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function ix(r,n){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var i=r.retryLane;r.retryLane=i!==0&&i<n?i:n}}function wu(r,n){ix(r,n),(r=r.alternate)&&ix(r,n)}function ej(){return null}var sx=typeof reportError=="function"?reportError:function(r){console.error(r)};function _u(r){this._internalRoot=r}Tl.prototype.render=_u.prototype.render=function(r){var n=this._internalRoot;if(n===null)throw Error(s(409));Dl(r,n,null,null)},Tl.prototype.unmount=_u.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var n=r.containerInfo;oi(function(){Dl(null,r,null,null)}),n[ca]=null}};function Tl(r){this._internalRoot=r}Tl.prototype.unstable_scheduleHydration=function(r){if(r){var n=qo();r={blockedOn:null,target:r,priority:n};for(var i=0;i<Z.length&&n!==0&&n<Z[i].priority;i++);Z.splice(i,0,r),i===0&&Ge(r)}};function ku(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function Fl(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function ox(){}function tj(r,n,i,o,d){if(d){if(typeof o=="function"){var p=o;o=function(){var ne=Ml(v);p.call(ne)}}var v=ax(n,o,r,0,null,!1,!1,"",ox);return r._reactRootContainer=v,r[ca]=v.current,Ms(r.nodeType===8?r.parentNode:r),oi(),v}for(;d=r.lastChild;)r.removeChild(d);if(typeof o=="function"){var P=o;o=function(){var ne=Ml(T);P.call(ne)}}var T=bu(r,0,!1,null,null,!1,!1,"",ox);return r._reactRootContainer=T,r[ca]=T.current,Ms(r.nodeType===8?r.parentNode:r),oi(function(){Dl(n,T,i,o)}),T}function Ll(r,n,i,o,d){var p=i._reactRootContainer;if(p){var v=p;if(typeof d=="function"){var P=d;d=function(){var T=Ml(v);P.call(T)}}Dl(n,v,r,d)}else v=tj(i,n,r,d,o);return Ml(v)}Bo=function(r){switch(r.tag){case 3:var n=r.stateNode;if(n.current.memoizedState.isDehydrated){var i=Et(n.pendingLanes);i!==0&&(ks(n,i|1),qr(n,Qe()),(gt&6)===0&&(Ji=Qe()+500,Ra()))}break;case 13:oi(function(){var o=fa(r,1);if(o!==null){var d=Ar();An(o,r,1,d)}}),wu(r,1)}},wa=function(r){if(r.tag===13){var n=fa(r,134217728);if(n!==null){var i=Ar();An(n,r,134217728,i)}wu(r,134217728)}},Xa=function(r){if(r.tag===13){var n=Ma(r),i=fa(r,n);if(i!==null){var o=Ar();An(i,r,n,o)}wu(r,n)}},qo=function(){return bt},Ss=function(r,n){var i=bt;try{return bt=r,n()}finally{bt=i}},te=function(r,n,i){switch(n){case"input":if($e(r,i),n=i.name,i.type==="radio"&&n!=null){for(i=r;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<i.length;n++){var o=i[n];if(o!==r&&o.form===r.form){var d=tl(o);if(!d)throw Error(s(90));Ze(o),$e(o,d)}}}break;case"textarea":zt(r,i);break;case"select":n=i.value,n!=null&&Be(r,!!i.multiple,n,!1)}},cn=mu,Ln=oi;var rj={usingClientEntryPoint:!1,Events:[Ls,Li,tl,Vr,xt,mu]},Xs={findFiberByHostInstance:Za,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nj={bundleType:Xs.bundleType,version:Xs.version,rendererPackageName:Xs.rendererPackageName,rendererConfig:Xs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:O.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=Qa(r),r===null?null:r.stateNode},findFiberByHostInstance:Xs.findFiberByHostInstance||ej,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ol=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ol.isDisabled&&Ol.supportsFiber)try{E=Ol.inject(nj),le=Ol}catch{}}return Ur.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rj,Ur.createPortal=function(r,n){var i=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ku(n))throw Error(s(200));return Z0(r,n,null,i)},Ur.createRoot=function(r,n){if(!ku(r))throw Error(s(299));var i=!1,o="",d=sx;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(d=n.onRecoverableError)),n=bu(r,1,!1,null,null,i,!1,o,d),r[ca]=n.current,Ms(r.nodeType===8?r.parentNode:r),new _u(n)},Ur.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var n=r._reactInternals;if(n===void 0)throw typeof r.render=="function"?Error(s(188)):(r=Object.keys(r).join(","),Error(s(268,r)));return r=Qa(n),r=r===null?null:r.stateNode,r},Ur.flushSync=function(r){return oi(r)},Ur.hydrate=function(r,n,i){if(!Fl(n))throw Error(s(200));return Ll(null,r,n,!0,i)},Ur.hydrateRoot=function(r,n,i){if(!ku(r))throw Error(s(405));var o=i!=null&&i.hydratedSources||null,d=!1,p="",v=sx;if(i!=null&&(i.unstable_strictMode===!0&&(d=!0),i.identifierPrefix!==void 0&&(p=i.identifierPrefix),i.onRecoverableError!==void 0&&(v=i.onRecoverableError)),n=ax(n,null,r,1,i??null,d,!1,p,v),r[ca]=n.current,Ms(r),o)for(r=0;r<o.length;r++)i=o[r],d=i._getVersion,d=d(i._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[i,d]:n.mutableSourceEagerHydrationData.push(i,d);return new Tl(n)},Ur.render=function(r,n,i){if(!Fl(n))throw Error(s(200));return Ll(null,r,n,!1,i)},Ur.unmountComponentAtNode=function(r){if(!Fl(r))throw Error(s(40));return r._reactRootContainer?(oi(function(){Ll(null,null,r,!1,function(){r._reactRootContainer=null,r[ca]=null})}),!0):!1},Ur.unstable_batchedUpdates=mu,Ur.unstable_renderSubtreeIntoContainer=function(r,n,i,o){if(!Fl(i))throw Error(s(200));if(r==null||r._reactInternals===void 0)throw Error(s(38));return Ll(r,n,i,!1,o)},Ur.version="18.3.1-next-f1338f8080-20240426",Ur}var mx;function Mv(){if(mx)return Eu.exports;mx=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(a){console.error(a)}}return t(),Eu.exports=dj(),Eu.exports}var xx;function uj(){if(xx)return Il;xx=1;var t=Mv();return Il.createRoot=t.createRoot,Il.hydrateRoot=t.hydrateRoot,Il}var pj=uj();const fj=Dv(pj);var Mt="-ms-",_o="-moz-",wt="-webkit-",Tv="comm",Lc="rule",hf="decl",hj="@import",mj="@namespace",Fv="@keyframes",xj="@layer",Lv=Math.abs,mf=String.fromCharCode,Ip=Object.assign;function gj(t,a){return tr(t,0)^45?(((a<<2^tr(t,0))<<2^tr(t,1))<<2^tr(t,2))<<2^tr(t,3):0}function Ov(t){return t.trim()}function ga(t,a){return(t=a.exec(t))?t[0]:t}function it(t,a,s){return t.replace(a,s)}function sc(t,a,s){return t.indexOf(a,s)}function tr(t,a){return t.charCodeAt(a)|0}function ki(t,a,s){return t.slice(a,s)}function Tn(t){return t.length}function Iv(t){return t.length}function vo(t,a){return a.push(t),t}function vj(t,a){return t.map(a).join("")}function gx(t,a){return t.filter(function(s){return!ga(s,a)})}var Oc=1,ps=1,Bv=0,_n=0,Yt=0,vs="";function Ic(t,a,s,l,c,u,m,f){return{value:t,root:a,parent:s,type:l,props:c,children:u,line:Oc,column:ps,length:m,return:"",siblings:f}}function Ba(t,a){return Ip(Ic("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},a)}function Zi(t){for(;t.root;)t=Ba(t.root,{children:[t]});vo(t,t.siblings)}function yj(){return Yt}function jj(){return Yt=_n>0?tr(vs,--_n):0,ps--,Yt===10&&(ps=1,Oc--),Yt}function Fn(){return Yt=_n<Bv?tr(vs,_n++):0,ps++,Yt===10&&(ps=1,Oc++),Yt}function qa(){return tr(vs,_n)}function oc(){return _n}function Bc(t,a){return ki(vs,t,a)}function $o(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function bj(t){return Oc=ps=1,Bv=Tn(vs=t),_n=0,[]}function wj(t){return vs="",t}function zu(t){return Ov(Bc(_n-1,Bp(t===91?t+2:t===40?t+1:t)))}function _j(t){for(;(Yt=qa())&&Yt<33;)Fn();return $o(t)>2||$o(Yt)>3?"":" "}function kj(t,a){for(;--a&&Fn()&&!(Yt<48||Yt>102||Yt>57&&Yt<65||Yt>70&&Yt<97););return Bc(t,oc()+(a<6&&qa()==32&&Fn()==32))}function Bp(t){for(;Fn();)switch(Yt){case t:return _n;case 34:case 39:t!==34&&t!==39&&Bp(Yt);break;case 40:t===41&&Bp(t);break;case 92:Fn();break}return _n}function Sj(t,a){for(;Fn()&&t+Yt!==57;)if(t+Yt===84&&qa()===47)break;return"/*"+Bc(a,_n-1)+"*"+mf(t===47?t:Fn())}function Cj(t){for(;!$o(qa());)Fn();return Bc(t,_n)}function Ej(t){return wj(lc("",null,null,null,[""],t=bj(t),0,[0],t))}function lc(t,a,s,l,c,u,m,f,g){for(var w=0,b=0,S=m,_=0,R=0,M=0,N=1,V=1,$=1,j=0,A="",O=c,ae=u,J=l,I=A;V;)switch(M=j,j=Fn()){case 40:if(M!=108&&tr(I,S-1)==58){sc(I+=it(zu(j),"&","&\f"),"&\f",Lv(w?f[w-1]:0))!=-1&&($=-1);break}case 34:case 39:case 91:I+=zu(j);break;case 9:case 10:case 13:case 32:I+=_j(M);break;case 92:I+=kj(oc()-1,7);continue;case 47:switch(qa()){case 42:case 47:vo($j(Sj(Fn(),oc()),a,s,g),g),($o(M||1)==5||$o(qa()||1)==5)&&Tn(I)&&ki(I,-1,void 0)!==" "&&(I+=" ");break;default:I+="/"}break;case 123*N:f[w++]=Tn(I)*$;case 125*N:case 59:case 0:switch(j){case 0:case 125:V=0;case 59+b:$==-1&&(I=it(I,/\f/g,"")),R>0&&(Tn(I)-S||N===0&&M===47)&&vo(R>32?yx(I+";",l,s,S-1,g):yx(it(I," ","")+";",l,s,S-2,g),g);break;case 59:I+=";";default:if(vo(J=vx(I,a,s,w,b,c,f,A,O=[],ae=[],S,u),u),j===123)if(b===0)lc(I,a,J,J,O,u,S,f,ae);else{switch(_){case 99:if(tr(I,3)===110)break;case 108:if(tr(I,2)===97)break;default:b=0;case 100:case 109:case 115:}b?lc(t,J,J,l&&vo(vx(t,J,J,0,0,c,f,A,c,O=[],S,ae),ae),c,ae,S,f,l?O:ae):lc(I,J,J,J,[""],ae,0,f,ae)}}w=b=R=0,N=$=1,A=I="",S=m;break;case 58:S=1+Tn(I),R=M;default:if(N<1){if(j==123)--N;else if(j==125&&N++==0&&jj()==125)continue}switch(I+=mf(j),j*N){case 38:$=b>0?1:(I+="\f",-1);break;case 44:f[w++]=(Tn(I)-1)*$,$=1;break;case 64:qa()===45&&(I+=zu(Fn())),_=qa(),b=S=Tn(A=I+=Cj(oc())),j++;break;case 45:M===45&&Tn(I)==2&&(N=0)}}return u}function vx(t,a,s,l,c,u,m,f,g,w,b,S){for(var _=c-1,R=c===0?u:[""],M=Iv(R),N=0,V=0,$=0;N<l;++N)for(var j=0,A=ki(t,_+1,_=Lv(V=m[N])),O=t;j<M;++j)(O=Ov(V>0?R[j]+" "+A:it(A,/&\f/g,R[j])))&&(g[$++]=O);return Ic(t,a,s,c===0?Lc:f,g,w,b,S)}function $j(t,a,s,l){return Ic(t,a,s,Tv,mf(yj()),ki(t,2,-2),0,l)}function yx(t,a,s,l,c){return Ic(t,a,s,hf,ki(t,0,l),ki(t,l+1,-1),l,c)}function qv(t,a,s){switch(gj(t,a)){case 5103:return wt+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return wt+t+t;case 4855:return wt+t.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+t;case 4789:return _o+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return wt+t+_o+t+Mt+t+t;case 5936:switch(tr(t,a+11)){case 114:return wt+t+Mt+it(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return wt+t+Mt+it(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return wt+t+Mt+it(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return wt+t+Mt+t+t;case 6165:return wt+t+Mt+"flex-"+t+t;case 5187:return wt+t+it(t,/(\w+).+(:[^]+)/,wt+"box-$1$2"+Mt+"flex-$1$2")+t;case 5443:return wt+t+Mt+"flex-item-"+it(t,/flex-|-self/g,"")+(ga(t,/flex-|baseline/)?"":Mt+"grid-row-"+it(t,/flex-|-self/g,""))+t;case 4675:return wt+t+Mt+"flex-line-pack"+it(t,/align-content|flex-|-self/g,"")+t;case 5548:return wt+t+Mt+it(t,"shrink","negative")+t;case 5292:return wt+t+Mt+it(t,"basis","preferred-size")+t;case 6060:return wt+"box-"+it(t,"-grow","")+wt+t+Mt+it(t,"grow","positive")+t;case 4554:return wt+it(t,/([^-])(transform)/g,"$1"+wt+"$2")+t;case 6187:return it(it(it(t,/(zoom-|grab)/,wt+"$1"),/(image-set)/,wt+"$1"),t,"")+t;case 5495:case 3959:return it(t,/(image-set\([^]*)/,wt+"$1$`$1");case 4968:return it(it(t,/(.+:)(flex-)?(.*)/,wt+"box-pack:$3"+Mt+"flex-pack:$3"),/space-between/,"justify")+wt+t+t;case 4200:if(!ga(t,/flex-|baseline/))return Mt+"grid-column-align"+ki(t,a)+t;break;case 2592:case 3360:return Mt+it(t,"template-","")+t;case 4384:case 3616:return s&&s.some(function(l,c){return a=c,ga(l.props,/grid-\w+-end/)})?~sc(t+(s=s[a].value),"span",0)?t:Mt+it(t,"-start","")+t+Mt+"grid-row-span:"+(~sc(s,"span",0)?ga(s,/\d+/):+ga(s,/\d+/)-+ga(t,/\d+/))+";":Mt+it(t,"-start","")+t;case 4896:case 4128:return s&&s.some(function(l){return ga(l.props,/grid-\w+-start/)})?t:Mt+it(it(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return it(t,/(.+)-inline(.+)/,wt+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Tn(t)-1-a>6)switch(tr(t,a+1)){case 109:if(tr(t,a+4)!==45)break;case 102:return it(t,/(.+:)(.+)-([^]+)/,"$1"+wt+"$2-$3$1"+_o+(tr(t,a+3)==108?"$3":"$2-$3"))+t;case 115:return~sc(t,"stretch",0)?qv(it(t,"stretch","fill-available"),a,s)+t:t}break;case 5152:case 5920:return it(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(l,c,u,m,f,g,w){return Mt+c+":"+u+w+(m?Mt+c+"-span:"+(f?g:+g-+u)+w:"")+t});case 4949:if(tr(t,a+6)===121)return it(t,":",":"+wt)+t;break;case 6444:switch(tr(t,tr(t,14)===45?18:11)){case 120:return it(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+wt+(tr(t,14)===45?"inline-":"")+"box$3$1"+wt+"$2$3$1"+Mt+"$2box$3")+t;case 100:return it(t,":",":"+Mt)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return it(t,"scroll-","scroll-snap-")+t}return t}function bc(t,a){for(var s="",l=0;l<t.length;l++)s+=a(t[l],l,t,a)||"";return s}function Rj(t,a,s,l){switch(t.type){case xj:if(t.children.length)break;case hj:case mj:case hf:return t.return=t.return||t.value;case Tv:return"";case Fv:return t.return=t.value+"{"+bc(t.children,l)+"}";case Lc:if(!Tn(t.value=t.props.join(",")))return""}return Tn(s=bc(t.children,l))?t.return=t.value+"{"+s+"}":""}function zj(t){var a=Iv(t);return function(s,l,c,u){for(var m="",f=0;f<a;f++)m+=t[f](s,l,c,u)||"";return m}}function Pj(t){return function(a){a.root||(a=a.return)&&t(a)}}function Nj(t,a,s,l){if(t.length>-1&&!t.return)switch(t.type){case hf:t.return=qv(t.value,t.length,s);return;case Fv:return bc([Ba(t,{value:it(t.value,"@","@"+wt)})],l);case Lc:if(t.length)return vj(s=t.props,function(c){switch(ga(c,l=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Zi(Ba(t,{props:[it(c,/:(read-\w+)/,":"+_o+"$1")]})),Zi(Ba(t,{props:[c]})),Ip(t,{props:gx(s,l)});break;case"::placeholder":Zi(Ba(t,{props:[it(c,/:(plac\w+)/,":"+wt+"input-$1")]})),Zi(Ba(t,{props:[it(c,/:(plac\w+)/,":"+_o+"$1")]})),Zi(Ba(t,{props:[it(c,/:(plac\w+)/,Mt+"input-$1")]})),Zi(Ba(t,{props:[c]})),Ip(t,{props:gx(s,l)});break}return""})}}var ds={};function ya(t,...a){return new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${t} for more information.${a.length>0?` Args: ${a.join(", ")}`:""}`)}var Pu,Nu;const fs=typeof process<"u"&&ds!==void 0&&(ds.REACT_APP_SC_ATTR||ds.SC_ATTR)||"data-styled",Uv="active",Hv="data-styled-version",qc="6.6.0",xf=`/*!sc*/
`,ko=typeof window<"u"&&typeof document<"u";if(!Cr.createContext)throw ya(19);function jx(t){if(typeof process<"u"&&ds!==void 0){const a=ds[t];if(a!==void 0&&a!=="")return a!=="false"}}const Aj=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:(Nu=(Pu=jx("REACT_APP_SC_DISABLE_SPEEDY"))!==null&&Pu!==void 0?Pu:jx("SC_DISABLE_SPEEDY"))!==null&&Nu!==void 0?Nu:typeof process<"u"&&ds!==void 0&&!1),Vv="sc-keyframes-",Dj={};let cc=new Map,wc=new Map,dc=1;const yo=t=>{if(cc.has(t))return cc.get(t);for(;wc.has(dc);)dc++;const a=dc++;return cc.set(t,a),wc.set(a,t),a},Mj=t=>wc.get(t),Tj=(t,a)=>{dc=a+1,cc.set(t,a),wc.set(a,t)},gf=Object.freeze([]),hs=Object.freeze({});function Wv(t,a,s=hs){return t.theme!==s.theme&&t.theme||a||s.theme}const Fj=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Lj=/(^-|-$)/g;function Gv(t){return t.replace(Fj,"-").replace(Lj,"")}const Oj=/(a)(d)/gi,bx=t=>String.fromCharCode(t+(t>25?39:97));function vf(t){let a,s="";for(a=Math.abs(t);a>52;a=a/52|0)s=bx(a%52)+s;return(bx(a%52)+s).replace(Oj,"$1-$2")}const qp=5381,yi=(t,a)=>{let s=a.length;for(;s;)t=33*t^a.charCodeAt(--s);return t},Kv=t=>yi(qp,t);function yf(t){return vf(Kv(t)>>>0)}function Ij(t){return t.displayName||t.name||"Component"}function Up(t){return typeof t=="string"&&!0}function Bj(t){return Up(t)?`styled.${t}`:`Styled(${Ij(t)})`}const Qv=Symbol.for("react.memo"),qj=Symbol.for("react.forward_ref"),Uj={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},Hj={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Yv={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Vj={[qj]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[Qv]:Yv};function wx(t){return("type"in(a=t)&&a.type.$$typeof)===Qv?Yv:"$$typeof"in t?Vj[t.$$typeof]:Uj;var a}const Wj=Object.defineProperty,Gj=Object.getOwnPropertyNames,Kj=Object.getOwnPropertySymbols,Qj=Object.getOwnPropertyDescriptor,Yj=Object.getPrototypeOf,Jj=Object.prototype;function Jv(t,a,s){if(typeof a!="string"){const l=Yj(a);l&&l!==Jj&&Jv(t,l,s);const c=Gj(a).concat(Kj(a)),u=wx(t),m=wx(a);for(let f=0;f<c.length;++f){const g=c[f];if(!(g in Hj||s&&s[g]||m&&g in m||u&&g in u)){const w=Qj(a,g);try{Wj(t,g,w)}catch{}}}}return t}function ys(t){return typeof t=="function"}const Xj=Symbol.for("react.forward_ref");function jf(t){return t!=null&&(typeof t=="object"||typeof t=="function")&&t.$$typeof===Xj&&"styledComponentId"in t}function jo(t,a){return t&&a?t+" "+a:t||a||""}function _c(t,a){return t.join("")}function Ro(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function Hp(t,a,s=!1){if(!s&&!Ro(t)&&!Array.isArray(t))return a;if(Array.isArray(a))for(let l=0;l<a.length;l++)t[l]=Hp(t[l],a[l]);else if(Ro(a))for(const l in a)t[l]=Hp(t[l],a[l]);return t}function bf(t,a){Object.defineProperty(t,"toString",{value:a})}const Zj=class{constructor(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t,this._cGroup=0,this._cIndex=0}indexOfGroup(t){if(t===this._cGroup)return this._cIndex;let a=this._cIndex;if(t>this._cGroup)for(let s=this._cGroup;s<t;s++)a+=this.groupSizes[s];else for(let s=this._cGroup-1;s>=t;s--)a-=this.groupSizes[s];return this._cGroup=t,this._cIndex=a,a}insertRules(t,a){if(t>=this.groupSizes.length){const c=this.groupSizes,u=c.length;let m=u;for(;t>=m;)if(m<<=1,m<0)throw ya(16,`${t}`);this.groupSizes=new Uint32Array(m),this.groupSizes.set(c),this.length=m;for(let f=u;f<m;f++)this.groupSizes[f]=0}let s=this.indexOfGroup(t+1),l=0;for(let c=0,u=a.length;c<u;c++)this.tag.insertRule(s,a[c])&&(this.groupSizes[t]++,s++,l++);l>0&&this._cGroup>t&&(this._cIndex+=l)}clearGroup(t){if(t<this.length){const a=this.groupSizes[t],s=this.indexOfGroup(t),l=s+a;this.groupSizes[t]=0;for(let c=s;c<l;c++)this.tag.deleteRule(s);a>0&&this._cGroup>t&&(this._cIndex-=a)}}getGroup(t){let a="";if(t>=this.length||this.groupSizes[t]===0)return a;const s=this.groupSizes[t],l=this.indexOfGroup(t),c=l+s;for(let u=l;u<c;u++)a+=this.tag.getRule(u)+xf;return a}},eb=`style[${fs}][${Hv}="${qc}"]`,tb=new RegExp(`^${fs}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),_x=t=>typeof ShadowRoot<"u"&&t instanceof ShadowRoot||"host"in t&&t.nodeType===11,Vp=t=>{if(!t)return document;if(_x(t))return t;if("getRootNode"in t){const a=t.getRootNode();if(_x(a))return a}return document},rb=(t,a,s)=>{const l=s.split(",");let c;for(let u=0,m=l.length;u<m;u++)(c=l[u])&&t.registerName(a,c)},nb=(t,a)=>{var s;const l=((s=a.textContent)!==null&&s!==void 0?s:"").split(xf),c=[];for(let u=0,m=l.length;u<m;u++){const f=l[u].trim();if(!f)continue;const g=f.match(tb);if(g){const w=0|parseInt(g[1],10),b=g[2];w!==0&&(Tj(b,w),rb(t,b,g[3]),t.getTag().insertRules(w,c)),c.length=0}else c.push(f)}},Au=t=>{const s=Vp(t.options.target).querySelectorAll(eb);for(let l=0,c=s.length;l<c;l++){const u=s[l];u&&u.getAttribute(fs)!==Uv&&(nb(t,u),u.parentNode&&u.parentNode.removeChild(u))}};let eo=!1;function ab(){if(eo!==!1)return eo;if(typeof document<"u"){const t=document.head.querySelector('meta[property="csp-nonce"]');if(t)return eo=t.nonce||t.getAttribute("content")||void 0;const a=document.head.querySelector('meta[name="sc-nonce"]');if(a)return eo=a.getAttribute("content")||void 0}return eo=typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0}const Xv=(t,a)=>{if(typeof document>"u")throw ya(20);const s=document.head,l=t||s,c=document.createElement("style"),u=(g=>{const w=Array.from(g.querySelectorAll(`style[${fs}]`));return w[w.length-1]})(l),m=u!==void 0?u.nextSibling:null;c.setAttribute(fs,Uv),c.setAttribute(Hv,qc);const f=a||ab();return f&&c.setAttribute("nonce",f),l.insertBefore(c,m),c},ib=class{constructor(t,a){this.element=Xv(t,a),this.element.appendChild(document.createTextNode("")),this.sheet=(s=>{var l;if(s.sheet)return s.sheet;const c=(l=s.getRootNode().styleSheets)!==null&&l!==void 0?l:document.styleSheets;for(let u=0,m=c.length;u<m;u++){const f=c[u];if(f.ownerNode===s)return f}throw ya(17)})(this.element),this.length=0}insertRule(t,a){try{return this.sheet.insertRule(a,t),this.length++,!0}catch{return!1}}deleteRule(t){this.sheet.deleteRule(t),this.length--}getRule(t){const a=this.sheet.cssRules[t];return a&&a.cssText?a.cssText:""}},sb=class{constructor(t,a){this.element=Xv(t,a),this.nodes=this.element.childNodes,this.length=0}insertRule(t,a){if(t<=this.length&&t>=0){const s=document.createTextNode(a);return this.element.insertBefore(s,this.nodes[t]||null),this.length++,!0}return!1}deleteRule(t){this.element.removeChild(this.nodes[t]),this.length--}getRule(t){return t<this.length?this.nodes[t].textContent:""}};let kx=ko;const ob={isServer:!ko,useCSSOMInjection:!Aj};class Do{static registerId(a){return yo(a)}constructor(a=hs,s={},l){this.options=Object.assign(Object.assign({},ob),a),this.gs=s,this.keyframeIds=new Set,this.names=new Map(l),this.server=!!a.isServer,!this.server&&ko&&kx&&(kx=!1,Au(this)),bf(this,()=>(c=>{const u=c.getTag(),{length:m}=u;let f="";for(let g=0;g<m;g++){const w=Mj(g);if(w===void 0)continue;const b=c.names.get(w);if(b===void 0||!b.size)continue;const S=u.getGroup(g);if(S.length===0)continue;const _=fs+".g"+g+'[id="'+w+'"]';let R="";for(const M of b)M.length>0&&(R+=M+",");f+=S+_+'{content:"'+R+'"}'+xf}return f})(this))}rehydrate(){!this.server&&ko&&Au(this)}reconstructWithOptions(a,s=!0){const l=new Do(Object.assign(Object.assign({},this.options),a),this.gs,s&&this.names||void 0);return l.keyframeIds=new Set(this.keyframeIds),!this.server&&ko&&a.target!==this.options.target&&Vp(this.options.target)!==Vp(a.target)&&Au(l),l}allocateGSInstance(a){return this.gs[a]=(this.gs[a]||0)+1}getTag(){return this.tag||(this.tag=(a=(({useCSSOMInjection:s,target:l,nonce:c})=>s?new ib(l,c):new sb(l,c))(this.options),new Zj(a)));var a}hasNameForId(a,s){var l,c;return(c=(l=this.names.get(a))===null||l===void 0?void 0:l.has(s))!==null&&c!==void 0&&c}registerName(a,s){yo(a),a.startsWith(Vv)&&this.keyframeIds.add(a);const l=this.names.get(a);l?l.add(s):this.names.set(a,new Set([s]))}insertRules(a,s,l){this.registerName(a,s),this.getTag().insertRules(yo(a),l)}clearNames(a){this.names.has(a)&&this.names.get(a).clear()}clearRules(a){this.getTag().clearGroup(yo(a)),this.clearNames(a)}clearTag(){this.tag=void 0}}const Zv=new WeakSet,lb={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function cb(t,a){return a==null||typeof a=="boolean"||a===""?"":typeof a!="number"||a===0||t in lb||t.startsWith("--")?String(a).trim():a+"px"}const mi=47;function Sx(t){if(t.charCodeAt(0)===45&&t.charCodeAt(1)===45)return t;let a="";for(let s=0;s<t.length;s++){const l=t.charCodeAt(s);a+=l>=65&&l<=90?"-"+String.fromCharCode(l+32):t[s]}return a.startsWith("ms-")?"-"+a:a}const e1=Symbol.for("sc-keyframes");function db(t){return typeof t=="object"&&t!==null&&e1 in t}function t1(t){return ys(t)&&!(t.prototype&&t.prototype.isReactComponent)}const r1=t=>t==null||t===!1||t==="",ub=Symbol.for("react.client.reference");function Cx(t){return t.$$typeof===ub}function n1(t,a){for(const s in t){const l=t[s];t.hasOwnProperty(s)&&!r1(l)&&(Array.isArray(l)&&Zv.has(l)||ys(l)?a.push(Sx(s)+":",l,";"):Ro(l)?(a.push(s+" {"),n1(l,a),a.push("}")):a.push(Sx(s)+": "+cb(s,l)+";"))}}function Wa(t,a,s,l,c=[]){if(r1(t))return c;const u=typeof t;if(u==="string")return c.push(t),c;if(u==="function"){if(Cx(t))return c;if(t1(t)&&a){const m=t(a);return Wa(m,a,s,l,c)}return c.push(t),c}if(Array.isArray(t)){for(let m=0;m<t.length;m++)Wa(t[m],a,s,l,c);return c}return jf(t)?(c.push(`.${t.styledComponentId}`),c):db(t)?(s?(t.inject(s,l),c.push(t.getName(l))):c.push(t),c):Cx(t)?c:Ro(t)?t.toString!==Object.prototype.toString?(c.push(t.toString()),c):(n1(t,c),c):(c.push(t.toString()),c)}const pb=Kv(qc);class fb{constructor(a,s,l){this.rules=a,this.componentId=s,this.baseHash=yi(pb,s),this.baseStyle=l,Do.registerId(s)}generateAndInjectStyles(a,s,l){let c=this.baseStyle?this.baseStyle.generateAndInjectStyles(a,s,l):"";{let u="";for(let m=0;m<this.rules.length;m++){const f=this.rules[m];if(typeof f=="string")u+=f;else if(f)if(t1(f)){const g=f(a);typeof g=="string"?u+=g:g!=null&&g!==!1&&(u+=_c(Wa(g,a,s,l)))}else u+=_c(Wa(f,a,s,l))}if(u){this.dynamicNameCache||(this.dynamicNameCache=new Map);const m=l.hash?l.hash+u:u;let f=this.dynamicNameCache.get(m);if(!f){if(f=vf(yi(yi(this.baseHash,l.hash),u)>>>0),this.dynamicNameCache.size>=200){const g=this.dynamicNameCache.keys().next().value;g!==void 0&&this.dynamicNameCache.delete(g)}this.dynamicNameCache.set(m,f)}if(!s.hasNameForId(this.componentId,f)){const g=l(u,"."+f,void 0,this.componentId);s.insertRules(this.componentId,f,g)}c=jo(c,f)}}return c}}const hb=/&/g;function a1(t,a){let s=0;for(;--a>=0&&t.charCodeAt(a)===92;)s++;return!(1&~s)}function Du(t){const a=t.length;let s="",l=0,c=0,u=0,m=!1,f=!1;for(let g=0;g<a;g++){const w=t.charCodeAt(g);if(u!==0||m||w!==mi||t.charCodeAt(g+1)!==42)if(m)w===42&&t.charCodeAt(g+1)===mi&&(m=!1,g++);else if(w!==34&&w!==39||a1(t,g)){if(u===0)if(w===123)c++;else if(w===125){if(c--,c<0){f=!0;let b=g+1;for(;b<a;){const S=t.charCodeAt(b);if(S===59||S===10)break;b++}b<a&&t.charCodeAt(b)===59&&b++,c=0,g=b-1,l=b;continue}c===0&&(s+=t.substring(l,g+1),l=g+1)}else w===59&&c===0&&(s+=t.substring(l,g+1),l=g+1)}else u===0?u=w:u===w&&(u=0);else m=!0,g++}return f||c!==0||u!==0?(l<a&&c===0&&u===0&&(s+=t.substring(l)),s):t}function i1(t,a){const s=a+" ",l=","+s;for(let c=0;c<t.length;c++){const u=t[c];if(u.type==="rule"){u.value=(s+u.value).replaceAll(",",l);const m=u.props,f=[];for(let g=0;g<m.length;g++)f[g]=s+m[g];u.props=f}Array.isArray(u.children)&&u.type!=="@keyframes"&&i1(u.children,a)}return t}function mb({options:t=hs,plugins:a=gf}=hs){let s,l,c;const u=(_,R,M)=>M.startsWith(l)&&M.endsWith(l)&&M.replaceAll(l,"").length>0?`.${s}`:_,m=a.slice();m.push(_=>{_.type===Lc&&_.value.includes("&")&&(c||(c=new RegExp(`\\${l}\\b`,"g")),_.props[0]=_.props[0].replace(hb,l).replace(c,u))}),t.prefix&&m.push(Nj),m.push(Rj);let f=[];const g=zj(m.concat(Pj(_=>f.push(_)))),w=(_,R="",M="",N="&")=>{s=N,l=R,c=void 0;const V=(function(j){const A=j.indexOf("//")!==-1,O=j.indexOf("}")!==-1;if(!A&&!O)return j;if(!A)return Du(j);const ae=j.length;let J="",I=0,ce=0,C=0,y=0,q=0,F=!1;for(;ce<ae;){const fe=j.charCodeAt(ce);if(fe!==34&&fe!==39||a1(j,ce))if(C===0)if(fe===mi&&ce+1<ae&&j.charCodeAt(ce+1)===42){for(ce+=2;ce+1<ae&&(j.charCodeAt(ce)!==42||j.charCodeAt(ce+1)!==mi);)ce++;ce+=2}else if(fe!==40)if(fe!==41)if(y>0)ce++;else if(fe===42&&ce+1<ae&&j.charCodeAt(ce+1)===mi)J+=j.substring(I,ce),ce+=2,I=ce,F=!0;else if(fe===mi&&ce+1<ae&&j.charCodeAt(ce+1)===mi){for(J+=j.substring(I,ce);ce<ae&&j.charCodeAt(ce)!==10;)ce++;I=ce,F=!0}else fe===123?q++:fe===125&&q--,ce++;else y>0&&y--,ce++;else y++,ce++;else ce++;else C===0?C=fe:C===fe&&(C=0),ce++}return F?(I<ae&&(J+=j.substring(I)),q===0?J:Du(J)):q===0?j:Du(j)})(_);let $=Ej(M||R?M+" "+R+" { "+V+" }":V);return t.namespace&&($=i1($,t.namespace)),f=[],bc($,g),f},b=t;let S=qp;for(let _=0;_<a.length;_++)a[_].name||ya(15),S=yi(S,a[_].name);return b!=null&&b.namespace&&(S=yi(S,b.namespace)),b!=null&&b.prefix&&(S=yi(S,"p")),w.hash=S!==qp?S.toString():"",w}const xb=new Do,Wp=mb(),s1=Cr.createContext({shouldForwardProp:void 0,styleSheet:xb,stylis:Wp,stylisPlugins:void 0});s1.Consumer;function o1(){return Cr.useContext(s1)}const zo=Cr.createContext(void 0);zo.Consumer;function gb(t){const a=Cr.useContext(zo),s=Cr.useMemo(()=>(function(l,c){if(!l)throw ya(14);if(ys(l))return l(c);if(Array.isArray(l)||typeof l!="object")throw ya(8);return c?Object.assign(Object.assign({},c),l):l})(t.theme,a),[t.theme,a]);return t.children?Cr.createElement(zo.Provider,{value:s},t.children):null}const Mu={};function vb(t,a){const s=typeof t!="string"?"sc":Gv(t);Mu[s]=(Mu[s]||0)+1;const l=s+"-"+yf(qc+s+Mu[s]);return a?a+"-"+l:l}function yb(t,a,s){const l=jf(t),c=t,u=!Up(t),{attrs:m=gf,componentId:f=vb(a.displayName,a.parentComponentId),displayName:g=Bj(t)}=a,w=a.displayName&&a.componentId?Gv(a.displayName)+"-"+a.componentId:a.componentId||f,b=l&&c.attrs?c.attrs.concat(m).filter(Boolean):m;let{shouldForwardProp:S}=a;if(l&&c.shouldForwardProp){const N=c.shouldForwardProp;if(a.shouldForwardProp){const V=a.shouldForwardProp;S=($,j)=>N($,j)&&V($,j)}else S=N}const _=new fb(s,w,l?c.componentStyle:void 0);function R(N,V){return(function($,j,A){const{attrs:O,componentStyle:ae,defaultProps:J,foldedComponentIds:I,styledComponentId:ce,target:C}=$,y=Cr.useContext(zo),q=o1(),F=$.shouldForwardProp||q.shouldForwardProp,fe=Wv(j,y,J)||hs,[ge,Ne]=(function(z,k,se){const ie=Object.assign(Object.assign({},k),{className:void 0,theme:se});let D=null;const de=z.length>1;for(let _e=0;_e<z.length;_e++){const ke=z[_e],U=ys(ke)?ke(de?Object.assign({},ie):ie):ke;for(const he in U)he==="className"?ie.className=jo(ie.className,U[he]):he==="style"?ie.style=Object.assign(Object.assign({},ie.style),U[he]):U[he]===void 0?he in ie&&(ie[he]!==void 0&&(D||(D=[])).push(he),ie[he]=void 0):ie[he]=U[he]}return"className"in k&&typeof k.className=="string"&&(ie.className=jo(ie.className,k.className)),[ie,D]})(O,j,fe),K=ae.generateAndInjectStyles(ge,q.styleSheet,q.stylis),je=ge.as||C,ue=Up(je),ye=(function(z,k,se,ie,D,de){const _e={};for(const ke in z)ke[0]==="$"||ke==="as"||ke==="theme"&&z.theme===se||(ke==="forwardedAs"?z.forwardedAs!==void 0&&(_e.as=z.forwardedAs):z[ke]===void 0?ke==="className"||D||de!==null&&de.indexOf(ke)!==-1||ie&&!ie(ke,k)||(_e[ke]=void 0):ie&&!ie(ke,k)||(_e[ke]=z[ke]));return _e})(ge,je,fe,F,ue,Ne);let W=jo(I,ce);return K&&(W+=" "+K),ge.className&&(W+=" "+ge.className),ye[ue&&je.includes("-")?"class":"className"]=W,A&&(ye.ref=A),x.createElement(je,ye)})(M,N,V)}R.displayName=g;let M=Cr.forwardRef(R);return M.attrs=b,M.componentStyle=_,M.displayName=g,M.shouldForwardProp=S,M.foldedComponentIds=l?jo(c.foldedComponentIds,c.styledComponentId):"",M.styledComponentId=w,M.target=l?c.target:t,Object.defineProperty(M,"defaultProps",{get(){return this._foldedDefaultProps},set(N){this._foldedDefaultProps=l?(function(V,...$){for(const j of $)Hp(V,j,!0);return V})({},c.defaultProps,N):N}}),bf(M,()=>`.${M.styledComponentId}`),u&&Jv(M,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),M}var jb=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]);function Ex(t,a){const s=[t[0]];for(let l=0,c=a.length;l<c;l+=1)s.push(a[l],t[l+1]);return s}const $x=t=>(Zv.add(t),t);function ea(t,...a){if(ys(t)||Ro(t))return $x(Wa(Ex(gf,[t,...a])));const s=t;return a.length===0&&s.length===1&&typeof s[0]=="string"?Wa(s):$x(Wa(Ex(s,a)))}function Gp(t,a,s=hs){if(!a)throw ya(1,a);const l=(c,...u)=>t(a,s,ea(c,...u));return l.attrs=c=>Gp(t,a,Object.assign(Object.assign({},s),{attrs:Array.prototype.concat(s.attrs,c).filter(Boolean)})),l.withConfig=c=>Gp(t,a,Object.assign(Object.assign({},s),c)),l}const l1=t=>Gp(yb,t),h=l1;jb.forEach(t=>{h[t]=l1(t)});class bb{constructor(a,s){this.instanceRules=new Map,this.rules=a,this.componentId=s,this.isStatic=(function(l){for(let c=0;c<l.length;c+=1){const u=l[c];if(ys(u)&&!jf(u))return!1}return!0})(a),Do.registerId(this.componentId)}removeStyles(a,s){this.instanceRules.delete(a),this.rebuildGroup(s)}renderStyles(a,s,l,c){const u=this.componentId;if(this.isStatic){if(l.hasNameForId(u,u+a))this.instanceRules.has(a)||this.computeRules(a,s,l,c);else{const f=this.computeRules(a,s,l,c);l.insertRules(u,f.name,f.rules)}return}const m=this.instanceRules.get(a);if(this.computeRules(a,s,l,c),!l.server&&m){const f=m.rules,g=this.instanceRules.get(a).rules;if(f.length===g.length){let w=!0;for(let b=0;b<f.length;b++)if(f[b]!==g[b]){w=!1;break}if(w)return}}this.rebuildGroup(l)}computeRules(a,s,l,c){const u=_c(Wa(this.rules,s,l,c)),m={name:this.componentId+a,rules:c(u,"")};return this.instanceRules.set(a,m),m}rebuildGroup(a){const s=this.componentId;a.clearRules(s);for(const l of this.instanceRules.values())a.insertRules(s,l.name,l.rules)}}function wb(t,...a){const s=ea(t,...a),l=`sc-global-${yf(JSON.stringify(s))}`,c=new bb(s,l),u=f=>{const g=o1(),w=Cr.useContext(zo);let b;{const S=Cr.useRef(null);S.current===null&&(S.current=g.styleSheet.allocateGSInstance(l)),b=S.current}g.styleSheet.server&&m(b,f,g.styleSheet,w,g.stylis);{const S=c.isStatic?[b,g.styleSheet,c]:[b,f,g.styleSheet,w,g.stylis,c],_=Cr.useRef(c);Cr.useLayoutEffect(()=>{g.styleSheet.server||(_.current!==c&&(g.styleSheet.clearRules(l),_.current=c),m(b,f,g.styleSheet,w,g.stylis))},S),Cr.useLayoutEffect(()=>()=>{g.styleSheet.server||c.removeStyles(b,g.styleSheet)},[b,g.styleSheet,c])}return g.styleSheet.server&&c.instanceRules.delete(b),null};function m(f,g,w,b,S){if(c.isStatic)c.renderStyles(f,Dj,w,S);else{const _=Object.assign(Object.assign({},g),{theme:Wv(g,b,u.defaultProps)});c.renderStyles(f,_,w,S)}}return Cr.memo(u)}var c1;class _b{constructor(a,s){this[c1]=!0,this.inject=(l,c=Wp)=>{const u=this.getName(c);if(!l.hasNameForId(this.id,u)){const m=c(this.rules,u,"@keyframes");l.insertRules(this.id,u,m)}},this.name=a,this.id=Vv+a,this.rules=s,yo(this.id),bf(this,()=>{throw ya(12,String(this.name))})}getName(a=Wp){return a.hash?this.name+vf(+a.hash>>>0):this.name}}function $i(t,...a){const s=_c(ea(t,...a)),l=yf(s);return new _b(l,s)}c1=e1;function d1(t,a){return function(){return t.apply(a,arguments)}}const{toString:kb}=Object.prototype,{getPrototypeOf:Ga}=Object,{iterator:Mo,toStringTag:u1}=Symbol,Po=(({hasOwnProperty:t})=>(a,s)=>t.call(a,s))(Object.prototype),p1=t=>typeof t=="string"&&(t==="__proto__"||t==="constructor"||t==="prototype"),f1=(t,a,s)=>t===Object.prototype||!s&&a===null,Sb=t=>{if(!Object.isExtensible(t))return!1;const a=Object.getOwnPropertyNames(t);return Object.getOwnPropertySymbols&&a.push(...Object.getOwnPropertySymbols(t)),a.every(s=>{if(p1(s))return!1;const l=Object.getOwnPropertyDescriptor(t,s);return!!l&&l.configurable&&l.writable===!0})},No=(t,a)=>{let s=t;const l=[];for(;s!=null;){if(l.indexOf(s)!==-1)return!1;l.push(s);const c=Ga(s);if(f1(s,c,s===t))return!1;if(Po(s,a))return!0;s=c}return!1},Cb=(t,a)=>t!=null&&No(t,a)?t[a]:void 0,Eb=t=>{if(t==null||typeof t!="object"&&typeof t!="function")return t;const a=Ga(t);if(a===null&&Sb(t))return t;const s=Object.create(null),l=Object.create(null),c=[];let u=t;for(;u!=null&&c.indexOf(u)===-1;){c.push(u);const m=u===t?a:Ga(u);if(f1(u,m,u===t))break;const f=Object.getOwnPropertyNames(u);Object.getOwnPropertySymbols&&f.push(...Object.getOwnPropertySymbols(u));for(const g of f)p1(g)||Po(l,g)||(s[g]=t[g],l[g]=!0);u=m}return s},wf=(t=>a=>{const s=kb.call(a);return t[s]||(t[s]=s.slice(8,-1).toLowerCase())})(Object.create(null)),kn=t=>(t=t.toLowerCase(),a=>wf(a)===t),Uc=t=>a=>typeof a===t,{isArray:Si}=Array,Ci=Uc("undefined");function js(t){return t!==null&&!Ci(t)&&t.constructor!==null&&!Ci(t.constructor)&&Hr(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const h1=kn("ArrayBuffer");function $b(t){let a;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?a=ArrayBuffer.isView(t):a=t&&t.buffer&&h1(t.buffer),a}const Rb=Uc("string"),Hr=Uc("function"),m1=Uc("number"),bs=t=>t!==null&&typeof t=="object",zb=t=>t===!0||t===!1,uc=t=>{if(!bs(t))return!1;const a=Ga(t);return(a===null||a===Object.prototype||Ga(a)===null)&&!No(t,u1)&&!No(t,Mo)},Pb=t=>{if(!bs(t)||js(t))return!1;try{return Object.keys(t).length===0&&Object.getPrototypeOf(t)===Object.prototype}catch{return!1}},Nb=kn("Date"),Ab=kn("File"),Db=t=>!!(t&&typeof t.uri<"u"),Mb=t=>t&&typeof t.getParts<"u",Tb=kn("Blob"),Fb=kn("FileList"),Lb=kn("Set"),Ob=t=>bs(t)&&Hr(t.pipe);function Ib(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const Rx=Ib(),zx=typeof Rx.FormData<"u"?Rx.FormData:void 0,Bb=t=>{if(!t)return!1;if(zx&&t instanceof zx)return!0;const a=Ga(t);if(!a||a===Object.prototype||!Hr(t.append))return!1;const s=wf(t);return s==="formdata"||s==="object"&&Hr(t.toString)&&t.toString()==="[object FormData]"},qb=kn("URLSearchParams"),[Ub,Hb,Vb,Wb]=["ReadableStream","Request","Response","Headers"].map(kn),Gb=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function To(t,a,{allOwnKeys:s=!1}={}){if(t===null||typeof t>"u")return;let l,c;if(typeof t!="object"&&(t=[t]),Si(t))for(l=0,c=t.length;l<c;l++)a.call(null,t[l],l,t);else{if(js(t))return;const u=s?Object.getOwnPropertyNames(t):Object.keys(t),m=u.length;let f;for(l=0;l<m;l++)f=u[l],a.call(null,t[f],f,t)}}function x1(t,a){if(js(t))return null;a=a.toLowerCase();const s=Object.keys(t);let l=s.length,c;for(;l-- >0;)if(c=s[l],a===c.toLowerCase())return c;return null}const xi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,g1=t=>!Ci(t)&&t!==xi;function Kp(...t){const{caseless:a,skipUndefined:s}=g1(this)&&this||{},l={},c=(u,m)=>{if(m==="__proto__"||m==="constructor"||m==="prototype")return;const f=a&&typeof m=="string"&&x1(l,m)||m,g=Po(l,f)?l[f]:void 0;uc(g)&&uc(u)?l[f]=Kp(g,u):uc(u)?l[f]=Kp({},u):Si(u)?l[f]=u.slice():(!s||!Ci(u))&&(l[f]=u)};for(let u=0,m=t.length;u<m;u++){const f=t[u];if(!f||js(f)||(To(f,c),typeof f!="object"||Si(f)))continue;const g=Object.getOwnPropertySymbols(f);for(let w=0;w<g.length;w++){const b=g[w];iw.call(f,b)&&c(f[b],b)}}return l}const Kb=(t,a,s,{allOwnKeys:l}={})=>(To(a,(c,u)=>{s&&Hr(c)?Object.defineProperty(t,u,{__proto__:null,value:d1(c,s),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(t,u,{__proto__:null,value:c,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:l}),t),Qb=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),Yb=(t,a,s,l)=>{t.prototype=Object.create(a.prototype,l),Object.defineProperty(t.prototype,"constructor",{__proto__:null,value:t,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(t,"super",{__proto__:null,value:a.prototype}),s&&Object.assign(t.prototype,s)},Jb=(t,a,s,l)=>{let c,u,m;const f={};if(a=a||{},t==null)return a;do{for(c=Object.getOwnPropertyNames(t),u=c.length;u-- >0;)m=c[u],(!l||l(m,t,a))&&!f[m]&&(a[m]=t[m],f[m]=!0);t=s!==!1&&Ga(t)}while(t&&(!s||s(t,a))&&t!==Object.prototype);return a},Xb=(t,a,s)=>{t=String(t),(s===void 0||s>t.length)&&(s=t.length),s-=a.length;const l=t.indexOf(a,s);return l!==-1&&l===s},Zb=t=>{if(!t)return null;if(Si(t))return t;let a=t.length;if(!m1(a))return null;const s=new Array(a);for(;a-- >0;)s[a]=t[a];return s},ew=(t=>a=>t&&a instanceof t)(typeof Uint8Array<"u"&&Ga(Uint8Array)),tw=(t,a)=>{const l=(t&&t[Mo]).call(t);let c;for(;(c=l.next())&&!c.done;){const u=c.value;a.call(t,u[0],u[1])}},rw=(t,a)=>{let s;const l=[];for(;(s=t.exec(a))!==null;)l.push(s);return l},nw=kn("HTMLFormElement"),aw=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(s,l,c){return l.toUpperCase()+c}),{propertyIsEnumerable:iw}=Object.prototype,sw=kn("RegExp"),v1=(t,a)=>{const s=Object.getOwnPropertyDescriptors(t),l={};To(s,(c,u)=>{let m;(m=a(c,u,t))!==!1&&(l[u]=m||c)}),Object.defineProperties(t,l)},ow=t=>{v1(t,(a,s)=>{if(Hr(t)&&["arguments","caller","callee"].includes(s))return!1;const l=t[s];if(Hr(l)){if(a.enumerable=!1,"writable"in a){a.writable=!1;return}a.set||(a.set=()=>{throw Error("Can not rewrite read-only method '"+s+"'")})}})},lw=(t,a)=>{const s={},l=c=>{c.forEach(u=>{s[u]=!0})};return Si(t)?l(t):l(String(t).split(a)),s},cw=()=>{},dw=(t,a)=>t!=null&&Number.isFinite(t=+t)?t:a;function uw(t){return!!(t&&Hr(t.append)&&t[u1]==="FormData"&&t[Mo])}const pw=t=>{const a=new WeakSet,s=l=>{if(bs(l)){if(a.has(l))return;if(js(l))return l;if(!("toJSON"in l)){a.add(l);let c;if(Lb(l)){c=[];for(const u of l){const m=s(u);!Ci(m)&&c.push(m)}}else c=Si(l)?[]:{},To(l,(u,m)=>{const f=s(u);!Ci(f)&&(c[m]=f)});return a.delete(l),c}}return l};return s(t)},fw=kn("AsyncFunction"),hw=t=>t&&(bs(t)||Hr(t))&&Hr(t.then)&&Hr(t.catch),y1=((t,a)=>t?setImmediate:a?((s,l)=>(xi.addEventListener("message",({source:c,data:u})=>{c===xi&&u===s&&l.length&&l.shift()()},!1),c=>{l.push(c),xi.postMessage(s,"*")}))(`axios@${Math.random()}`,[]):s=>setTimeout(s))(typeof setImmediate=="function",Hr(xi.postMessage)),mw=typeof queueMicrotask<"u"?queueMicrotask.bind(xi):typeof process<"u"&&process.nextTick||y1,j1=t=>t!=null&&Hr(t[Mo]),xw=t=>t!=null&&No(t,Mo)&&j1(t),L={isArray:Si,isArrayBuffer:h1,isBuffer:js,isFormData:Bb,isArrayBufferView:$b,isString:Rb,isNumber:m1,isBoolean:zb,isObject:bs,isPlainObject:uc,isEmptyObject:Pb,isReadableStream:Ub,isRequest:Hb,isResponse:Vb,isHeaders:Wb,isUndefined:Ci,isDate:Nb,isFile:Ab,isReactNativeBlob:Db,isReactNative:Mb,isBlob:Tb,isRegExp:sw,isFunction:Hr,isStream:Ob,isURLSearchParams:qb,isTypedArray:ew,isFileList:Fb,forEach:To,merge:Kp,extend:Kb,trim:Gb,stripBOM:Qb,inherits:Yb,toFlatObject:Jb,kindOf:wf,kindOfTest:kn,endsWith:Xb,toArray:Zb,forEachEntry:tw,matchAll:rw,isHTMLForm:nw,hasOwnProperty:Po,hasOwnProp:Po,hasOwnInPrototypeChain:No,getSafeProp:Cb,toSafeFlatObject:Eb,reduceDescriptors:v1,freezeMethods:ow,toObjectSet:lw,toCamelCase:aw,noop:cw,toFiniteNumber:dw,findKey:x1,global:xi,isContextDefined:g1,isSpecCompliantForm:uw,toJSONObject:pw,isAsyncFn:fw,isThenable:hw,setImmediate:y1,asap:mw,isIterable:j1,isSafeIterable:xw},gw=L.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),vw=t=>{const a={};let s,l,c;return t&&t.split(`
`).forEach(function(m){c=m.indexOf(":"),s=m.substring(0,c).trim().toLowerCase(),l=m.substring(c+1).trim();const f=L.hasOwnProp(a,s);!s||f&&L.hasOwnProp(gw,s)||(s==="set-cookie"?f?a[s].push(l):a[s]=[l]:a[s]=f?a[s]+", "+l:l)}),a};function yw(t){let a=0,s=t.length;for(;a<s;){const l=t.charCodeAt(a);if(l!==9&&l!==32)break;a+=1}for(;s>a;){const l=t.charCodeAt(s-1);if(l!==9&&l!==32)break;s-=1}return a===0&&s===t.length?t:t.slice(a,s)}const jw=new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+","g"),bw=new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+","g");function _f(t,a){return L.isArray(t)?t.map(s=>_f(s,a)):yw(String(t).replace(a,""))}const ww=t=>_f(t,jw),_w=t=>_f(t,bw);function b1(t){const a=Object.create(null);return L.forEach(t.toJSON(),(s,l)=>{a[l]=_w(s)}),a}const Px=Symbol("internals");function to(t){return t&&String(t).trim().toLowerCase()}function pc(t){return t===!1||t==null?t:L.isArray(t)?t.map(pc):ww(String(t))}function kw(t){const a=Object.create(null),s=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let l;for(;l=s.exec(t);)a[l[1]]=l[2];return a}const Sw=/^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;function Tu(t){let a=0,s=t.length;for(;a<s;){const l=t.charCodeAt(a);if(l!==9&&l!==32)break;a+=1}for(;s>a;){const l=t.charCodeAt(s-1);if(l!==9&&l!==32)break;s-=1}return a===0&&s===t.length?t:t.slice(a,s)}function Cw(t){const a=t.length-1;if(a<1||t.charCodeAt(0)!==34||t.charCodeAt(a)!==34)return t;let s="";for(let l=1;l<a;l++){const c=t.charCodeAt(l);if(c===34||c===92&&(l+=1,l>=a))return t;s+=t[l]}return s}function Ew(t){const a=Object.create(null),s=String(t);let l=0,c=!1,u=!1;function m(f){const g=Tu(s.slice(l,f)),w=g.indexOf("=");if(w<1)return;const b=Tu(g.slice(0,w));if(!Sw.test(b))return;const S=b.toLowerCase();if(S==="__proto__"||S==="constructor"||S==="prototype")return;const _=Tu(g.slice(w+1));a[S]=Cw(_)}for(let f=0;f<s.length;f++){const g=s.charCodeAt(f);c?u?u=!1:g===92?u=!0:g===34&&(c=!1):g===34?c=!0:(g===44||g===59)&&(m(f),l=f+1)}return m(s.length),a}const $w=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function Fu(t,a,s,l,c){if(L.isFunction(l))return l.call(this,a,s);if(c&&(a=s),!!L.isString(a)){if(L.isString(l))return a.indexOf(l)!==-1;if(L.isRegExp(l))return l.test(a)}}function Rw(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(a,s,l)=>s.toUpperCase()+l)}function zw(t,a){const s=L.toCamelCase(" "+a);["get","set","has"].forEach(l=>{Object.defineProperty(t,l+s,{__proto__:null,value:function(c,u,m){return this[l].call(this,a,c,u,m)},configurable:!0})})}let $r=class{constructor(a){a&&this.set(a)}set(a,s,l){const c=this;function u(f,g,w){const b=to(g);if(!b)return;const S=L.findKey(c,b);(!S||c[S]===void 0||w===!0||w===void 0&&c[S]!==!1)&&(c[S||g]=pc(f))}const m=(f,g)=>L.forEach(f,(w,b)=>u(w,b,g));if(L.isPlainObject(a)||a instanceof this.constructor)m(a,s);else if(L.isString(a)&&(a=a.trim())&&!$w(a))m(vw(a),s);else if(L.isObject(a)&&L.isSafeIterable(a)){let f=Object.create(null),g,w;for(const b of a){if(!L.isArray(b))throw new TypeError("Object iterator must return a key-value pair");w=b[0],L.hasOwnProp(f,w)?(g=f[w],f[w]=L.isArray(g)?[...g,b[1]]:[g,b[1]]):f[w]=b[1]}m(f,s)}else a!=null&&u(s,a,l);return this}get(a,s){if(a=to(a),a){const l=L.findKey(this,a);if(l){const c=this[l];if(!s)return c;if(s===!0)return kw(c);if(L.isFunction(s))return s.call(this,c,l);if(L.isRegExp(s))return s.exec(c);throw new TypeError("parser must be boolean|regexp|function")}}}has(a,s){if(a=to(a),a){const l=L.findKey(this,a);return!!(l&&this[l]!==void 0&&(!s||Fu(this,this[l],l,s)))}return!1}delete(a,s){const l=this;let c=!1;function u(m){if(m=to(m),m){const f=L.findKey(l,m);f&&(!s||Fu(l,l[f],f,s))&&(delete l[f],c=!0)}}return L.isArray(a)?a.forEach(u):u(a),c}clear(a){const s=Object.keys(this);let l=s.length,c=!1;for(;l--;){const u=s[l];(!a||Fu(this,this[u],u,a,!0))&&(delete this[u],c=!0)}return c}normalize(a){const s=this,l={};return L.forEach(this,(c,u)=>{const m=L.findKey(l,u);if(m){s[m]=pc(c),delete s[u];return}const f=a?Rw(u):String(u).trim();f!==u&&delete s[u],s[f]=pc(c),l[f]=!0}),this}concat(...a){return this.constructor.concat(this,...a)}toJSON(a){const s=Object.create(null);return L.forEach(this,(l,c)=>{l!=null&&l!==!1&&(s[c]=a&&L.isArray(l)?l.join(", "):l)}),s}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([a,s])=>a+": "+s).join(`
`)}getSetCookie(){const a=this.get("set-cookie");return L.isArray(a)?a:a==null||a===!1?[]:[a]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(a){return a instanceof this?a:new this(a)}static parseParameters(a){return Ew(a)}static concat(a,...s){const l=new this(a);return s.forEach(c=>l.set(c)),l}static accessor(a){const l=(this[Px]=this[Px]={accessors:{}}).accessors,c=this.prototype;function u(m){const f=to(m);l[f]||(zw(c,m),l[f]=!0)}return L.isArray(a)?a.forEach(u):u(a),this}};$r.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);L.reduceDescriptors($r.prototype,({value:t},a)=>{let s=a[0].toUpperCase()+a.slice(1);return{get:()=>t,set(l){this[s]=l}}});L.freezeMethods($r);const kc="[REDACTED ****]";function Pw(t){if(L.hasOwnProp(t,"toJSON"))return!0;let a=Object.getPrototypeOf(t);for(;a&&a!==Object.prototype;){if(L.hasOwnProp(a,"toJSON"))return!0;a=Object.getPrototypeOf(a)}return!1}function Nw(t,a){const s=new Set(a.map(u=>String(u).toLowerCase())),l=[],c=u=>{if(u===null||typeof u!="object"||L.isBuffer(u))return u;if(l.indexOf(u)!==-1)return;u instanceof $r&&(u=u.toJSON()),l.push(u);let m;if(L.isArray(u))m=[],u.forEach((f,g)=>{const w=c(f);L.isUndefined(w)||(m[g]=w)});else{if(!L.isPlainObject(u)&&Pw(u))return l.pop(),u;m=Object.create(null);for(const[f,g]of Object.entries(u)){const w=s.has(f.toLowerCase())?kc:c(g);L.isUndefined(w)||(m[f]=w)}}return l.pop(),m};return c(t)}function Nx(t){try{return String(t)}catch{return""}}function Aw(t){return t.errors.map(s=>{try{return s&&s.message?Nx(s.message):Nx(s)}catch{return""}}).filter(Boolean).join("; ")||t.name||"AggregateError"}let ze=class w1 extends Error{static from(a,s,l,c,u,m){let f=a.message;!f&&L.isArray(a.errors)&&a.errors.length&&(f=Aw(a));const g=new w1(f,s||a.code,l,c,u);return Object.defineProperty(g,"cause",{__proto__:null,value:a,writable:!0,enumerable:!1,configurable:!0}),g.name=a.name,a.status!=null&&g.status==null&&(g.status=a.status),m&&Object.assign(g,m),g}constructor(a,s,l,c,u){super(a),Object.defineProperty(this,"message",{__proto__:null,value:a,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,s&&(this.code=s),l&&(this.config=l),c&&(this.request=c),u&&(this.response=u,this.status=u.status)}toJSON(){const a=this.config,s=a&&L.hasOwnProp(a,"redact")?a.redact:void 0,l=L.isArray(s)&&s.length>0?Nw(a,s):L.toJSONObject(a);return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:l,code:this.code,status:this.status}}};ze.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";ze.ERR_BAD_OPTION="ERR_BAD_OPTION";ze.ECONNABORTED="ECONNABORTED";ze.ETIMEDOUT="ETIMEDOUT";ze.ECONNREFUSED="ECONNREFUSED";ze.ERR_NETWORK="ERR_NETWORK";ze.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";ze.ERR_DEPRECATED="ERR_DEPRECATED";ze.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";ze.ERR_BAD_REQUEST="ERR_BAD_REQUEST";ze.ERR_CANCELED="ERR_CANCELED";ze.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";ze.ERR_INVALID_URL="ERR_INVALID_URL";ze.ERR_FORM_DATA_DEPTH_EXCEEDED="ERR_FORM_DATA_DEPTH_EXCEEDED";const Dw=null,_1=100;function Qp(t){return L.isPlainObject(t)||L.isArray(t)}function k1(t){return L.endsWith(t,"[]")?t.slice(0,-2):t}function Lu(t,a,s){return t?t.concat(a).map(function(c,u){return c=k1(c),!s&&u?"["+c+"]":c}).join(s?".":""):a}function Mw(t){return L.isArray(t)&&!t.some(Qp)}const Tw=L.toFlatObject(L,{},null,function(a){return/^is[A-Z]/.test(a)});function Hc(t,a,s){if(!L.isObject(t))throw new TypeError("target must be an object");a=a||new FormData;const l=(j,A)=>{const O=L.getSafeProp(s,j);return L.isUndefined(O)?A:O},c=l("metaTokens",!0),u=l("visitor")||N,m=l("dots",!1),f=l("indexes",!1),g=l("Blob")||typeof Blob<"u"&&Blob,w=l("maxDepth",_1),b=g&&L.isSpecCompliantForm(a),S=[];if(!L.isFunction(u))throw new TypeError("visitor must be a function");function _(j){if(j===null)return"";if(L.isDate(j))return j.toISOString();if(L.isBoolean(j))return j.toString();if(!b&&L.isBlob(j))throw new ze("Blob is not supported. Use a Buffer instead.");if(L.isArrayBuffer(j)||L.isTypedArray(j)){if(b&&typeof g=="function")return new g([j]);throw new ze("Blob is not supported. Use a Buffer instead.",ze.ERR_NOT_SUPPORT)}return j}function R(j){if(j>w)throw new ze("Object is too deeply nested ("+j+" levels). Max depth: "+w,ze.ERR_FORM_DATA_DEPTH_EXCEEDED)}function M(j,A){if(w===1/0)return JSON.stringify(j);const O=[];return JSON.stringify(j,function(J,I){if(!L.isObject(I))return I;for(;O.length&&O[O.length-1]!==this;)O.pop();return O.push(I),R(A+O.length-1),I})}function N(j,A,O){let ae=j;if(L.isReactNative(a)&&L.isReactNativeBlob(j))return a.append(Lu(O,A,m),_(j)),!1;if(j&&!O&&typeof j=="object"){if(L.endsWith(A,"{}"))A=c?A:A.slice(0,-2),j=M(j,1);else if(L.isArray(j)&&Mw(j)||(L.isFileList(j)||L.endsWith(A,"[]"))&&(ae=L.toArray(j)))return A=k1(A),ae.forEach(function(I,ce){!(L.isUndefined(I)||I===null)&&a.append(f===!0?Lu([A],ce,m):f===null?A:A+"[]",_(I))}),!1}return Qp(j)?!0:(a.append(Lu(O,A,m),_(j)),!1)}const V=Object.assign(Tw,{defaultVisitor:N,convertValue:_,isVisitable:Qp});function $(j,A,O=0){if(!L.isUndefined(j)){if(R(O),S.indexOf(j)!==-1)throw new Error("Circular reference detected in "+A.join("."));S.push(j),L.forEach(j,function(J,I){(!(L.isUndefined(J)||J===null)&&u.call(a,J,L.isString(I)?I.trim():I,A,V))===!0&&$(J,A?A.concat(I):[I],O+1)}),S.pop()}}if(!L.isObject(t))throw new TypeError("data must be an object");return $(t),a}function Ax(t){const a={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"};return encodeURIComponent(t).replace(/[!'()~]|%20/g,function(l){return a[l]})}function kf(t,a){this._pairs=[],t&&Hc(t,this,a)}const S1=kf.prototype;S1.append=function(a,s){this._pairs.push([a,s])};S1.toString=function(a){const s=a?l=>a.call(this,l,Ax):Ax;return this._pairs.map(function(c){return s(c[0])+"="+s(c[1])},"").join("&")};function Fw(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function C1(t,a,s){if(!a)return t;t=t||"";const l=L.isFunction(s)?{serialize:s}:s,c=L.getSafeProp(l,"encode")||Fw,u=L.getSafeProp(l,"serialize");let m;if(u?m=u(a,l):m=L.isURLSearchParams(a)?a.toString():new kf(a,l).toString(c),m){const f=t.indexOf("#");f!==-1&&(t=t.slice(0,f)),t+=(t.indexOf("?")===-1?"?":"&")+m}return t}const ro=Symbol("internals");function E1(t){return t?t.length:0}function Dx(t){if(t)for(;t.length&&t[t.length-1]===null;)t.pop()}function no(t,a){const s=t.handlers,l=E1(s);s!==a.handlersRef?(a.handlersRef=s,a.handlerEntries.clear()):l!==a.handlersLength&&(l?a.handlerEntries.forEach(function(u,m){s[u.index]!==u.handler&&a.handlerEntries.delete(m)}):a.handlerEntries.clear()),a.handlersLength=l}class Mx{constructor(){this.handlers=[],this[ro]={handlersRef:this.handlers,handlersLength:this.handlers.length,handlerEntries:new Map,iterationDepth:0,nextId:0}}use(a,s,l){const c={fulfilled:a,rejected:s,synchronous:l?l.synchronous:!1,runWhen:l?l.runWhen:null},u=this[ro];this.handlers==null&&(this.handlers=[]),no(this,u);const m=u.nextId++;return this.handlers.push(c),u.handlerEntries.set(m,{handler:c,index:this.handlers.length-1}),u.handlersLength=this.handlers.length,m}eject(a){const s=this[ro];no(this,s);const l=s.handlerEntries.get(a);if(l){if(s.handlerEntries.delete(a),this.handlers[l.index]!==l.handler)return;this.handlers[l.index]=null,s.iterationDepth||(Dx(this.handlers),s.handlersLength=this.handlers.length)}}clear(){this.handlers&&(this.handlers=[],no(this,this[ro]))}forEach(a){const s=this[ro];no(this,s),s.iterationDepth++;try{L.forEach(this.handlers,function(c){c!==null&&a(c)})}finally{--s.iterationDepth||(no(this,s),Dx(this.handlers),s.handlersLength=E1(this.handlers))}}}const Sf={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0,advertiseZstdAcceptEncoding:!1,validateStatusUndefinedResolves:!0},Lw=typeof URLSearchParams<"u"?URLSearchParams:kf,Ow=typeof FormData<"u"?FormData:null,Iw=typeof Blob<"u"?Blob:null,Bw={isBrowser:!0,classes:{URLSearchParams:Lw,FormData:Ow,Blob:Iw},protocols:["http","https","file","blob","url","data"]},Cf=typeof window<"u"&&typeof document<"u",Yp=typeof navigator=="object"&&navigator||void 0,qw=Cf&&(!Yp||["ReactNative","NativeScript","NS"].indexOf(Yp.product)<0),Uw=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Hw=Cf&&window.location.href||"http://localhost",Vw=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Cf,hasStandardBrowserEnv:qw,hasStandardBrowserWebWorkerEnv:Uw,navigator:Yp,origin:Hw},Symbol.toStringTag,{value:"Module"})),cr={...Vw,...Bw};function Ww(t,a){return Hc(t,new cr.classes.URLSearchParams,{visitor:function(s,l,c,u){return cr.isNode&&L.isBuffer(s)?(this.append(l,s.toString("base64")),!1):u.defaultVisitor.apply(this,arguments)},...a})}const Tx=_1;function $1(t){if(t>Tx)throw new ze("FormData field is too deeply nested ("+t+" levels). Max depth: "+Tx,ze.ERR_FORM_DATA_DEPTH_EXCEEDED)}function Gw(t){const a=[],s=/[^.[\]]+|\[([^.[\]]*)]/g;let l;for(;(l=s.exec(t))!==null;)$1(a.length),a.push(l[0]==="[]"?"":l[1]||l[0]);return a}function Kw(t){const a={},s=Object.keys(t);let l;const c=s.length;let u;for(l=0;l<c;l++)u=s[l],a[u]=t[u];return a}function R1(t){function a(s,l,c,u){$1(u);let m=s[u++];if(m==="__proto__")return!0;const f=Number.isFinite(+m),g=u>=s.length;return m=!m&&L.isArray(c)?c.length:m,g?(L.hasOwnProp(c,m)?c[m]=L.isArray(c[m])?c[m].concat(l):[c[m],l]:c[m]=l,!f):((!L.hasOwnProp(c,m)||!L.isObject(c[m]))&&(c[m]=[]),a(s,l,c[m],u)&&L.isArray(c[m])&&(c[m]=Kw(c[m])),!f)}if(L.isFormData(t)&&L.isFunction(t.entries)){const s={};return L.forEachEntry(t,(l,c)=>{a(Gw(l),c,s,0)}),s}return null}const z1=Object.freeze(["get","delete","head","options","post","put","patch","purge","link","unlink","query"]),es=(t,a)=>t!=null&&L.hasOwnProp(t,a)?t[a]:void 0;function Qw(t,a,s){if(L.isString(t))try{return(a||JSON.parse)(t),L.trim(t)}catch(l){if(l.name!=="SyntaxError")throw l}return(s||JSON.stringify)(t)}const Fo={transitional:Sf,adapter:["xhr","http","fetch"],transformRequest:[function(a,s){const l=s.getContentType()||"",c=l.indexOf("application/json")>-1,u=L.isObject(a);if(u&&L.isHTMLForm(a)&&(a=new FormData(a)),L.isFormData(a))return c?JSON.stringify(R1(a)):a;if(L.isArrayBuffer(a)||L.isBuffer(a)||L.isStream(a)||L.isFile(a)||L.isBlob(a)||L.isReadableStream(a))return a;if(L.isArrayBufferView(a))return a.buffer;if(L.isURLSearchParams(a))return s.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),a.toString();let f;if(u){const g=es(this,"formSerializer");if(l.indexOf("application/x-www-form-urlencoded")>-1)return Ww(a,g).toString();if((f=L.isFileList(a))||l.indexOf("multipart/form-data")>-1){const w=es(this,"env"),b=w&&w.FormData;return Hc(f?{"files[]":a}:a,b&&new b,g)}}return u||c?(s.setContentType("application/json",!1),Qw(a)):a}],transformResponse:[function(a){const s=es(this,"transitional")||Fo.transitional,l=s&&s.forcedJSONParsing,c=es(this,"responseType"),u=c==="json";if(L.isResponse(a)||L.isReadableStream(a))return a;if(a&&L.isString(a)&&(l&&!c||u)){const f=!(s&&s.silentJSONParsing)&&u;try{return JSON.parse(a,es(this,"parseReviver"))}catch(g){if(f)throw g.name==="SyntaxError"?ze.from(g,ze.ERR_BAD_RESPONSE,this,null,es(this,"response")):g}}return a}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:cr.classes.FormData,Blob:cr.classes.Blob},validateStatus:function(a){return a>=200&&a<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};L.forEach(z1,t=>{Fo.headers[t]={}});function Ou(t,a){const s=this||Fo,l=a||s,c=$r.from(l.headers);let u=l.data;return L.forEach(t,function(f){u=f.call(s,u,c.normalize(),a?a.status:void 0)}),c.normalize(),u}function P1(t){return!!(t&&t.__CANCEL__)}let Lo=class extends ze{constructor(a,s,l){super(a??"canceled",ze.ERR_CANCELED,s,l),this.name="CanceledError",this.__CANCEL__=!0}};function N1(t,a,s){const l=s.config.validateStatus;!s.status||!l||l(s.status)?t(s):a(new ze("Request failed with status code "+s.status,s.status>=400&&s.status<500?ze.ERR_BAD_REQUEST:ze.ERR_BAD_RESPONSE,s.config,s.request,s))}const Yw=/[\t\n\r]/g;function A1(t){if(typeof t!="string")return t;let a=0;for(;a<t.length&&t.charCodeAt(a)<=32;)a++;return t.slice(a).replace(Yw,"")}function Iu(t){const a=/^([-+\w]{1,25}):(?:\/\/)?/.exec(t);return a&&a[1]||""}function Jw(t,a){t=t||10;const s=new Array(t),l=new Array(t);let c=0,u=0,m;return a=a!==void 0?a:1e3,function(g){const w=Date.now(),b=l[u];m||(m=w),s[c]=g,l[c]=w;let S=u,_=0;for(;S!==c;)_+=s[S++],S=S%t;if(c=(c+1)%t,c===u&&(u=(u+1)%t),w-m<a)return;const R=b&&w-b;return R?Math.round(_*1e3/R):void 0}}function Xw(t,a){let s=0,l=1e3/a,c,u;const m=(b,S=Date.now())=>{s=S,c=null,u&&(clearTimeout(u),u=null),t(...b)};return[(...b)=>{const S=Date.now(),_=S-s;_>=l?m(b,S):(c=b,u||(u=setTimeout(()=>{u=null,m(c)},l-_)))},()=>c&&m(c),(...b)=>m(b)]}const Sc=(t,a,s=3)=>{let l=0;const c=Jw(50,250);return Xw(u=>{if(!u||!L.isNumber(u.loaded))return;const m=u.loaded,f=u.lengthComputable?u.total:void 0,g=Math.max(0,f!=null?Math.min(m,f):m),w=Math.max(0,g-l),b=c(w);l=Math.max(l,g);const S={loaded:g,total:f,progress:f?g/f:void 0,bytes:w,rate:b||void 0,estimated:b&&f?(f-g)/b:void 0,event:u,lengthComputable:f!=null,[a?"download":"upload"]:!0};t(S)},s)},Fx=(t,a)=>{const s=t!=null;return[l=>a[0]({lengthComputable:s,total:t,loaded:l}),a[1]]},Lx=(t,a=L.asap)=>(...s)=>a(()=>t(...s)),Zw=cr.hasStandardBrowserEnv?((t,a)=>s=>(s=new URL(s,cr.origin),t.protocol===s.protocol&&t.host===s.host&&(a||t.port===s.port)))(new URL(cr.origin),cr.navigator&&/(msie|trident)/i.test(cr.navigator.userAgent)):()=>!0,e_=cr.hasStandardBrowserEnv?{write(t,a,s,l,c,u,m){if(typeof document>"u")return;const f=[`${t}=${encodeURIComponent(a)}`];L.isNumber(s)&&f.push(`expires=${new Date(s).toUTCString()}`),L.isString(l)&&f.push(`path=${l}`),L.isString(c)&&f.push(`domain=${c}`),u===!0&&f.push("secure"),L.isString(m)&&f.push(`SameSite=${m}`),document.cookie=f.join("; ")},read(t){if(typeof document>"u")return null;const a=document.cookie.split(";");for(let s=0;s<a.length;s++){const l=a[s].replace(/^\s+/,""),c=l.indexOf("=");if(c!==-1&&l.slice(0,c)===t)try{return decodeURIComponent(l.slice(c+1))}catch{return l.slice(c+1)}}return null},remove(t){this.write(t,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function t_(t){return typeof t!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function r_(t,a){if(!a)return t;let s=t.length;for(;s>0&&t.charCodeAt(s-1)===47;)s--;return t.slice(0,s)+"/"+a.replace(/^\/+/,"")}const n_=/^https?:(?!\/\/)/i;function a_(t){return t&&t.replace(/(^|&)([^=&]*=)?[^&]+/g,(a,s,l="")=>`${s}${l}${kc}`)}function i_(t){const a=t.replace(/^(https?:\/{0,2})[^/?#]*@/i,`$1${kc}@`),s=a.indexOf("#"),c=(s===-1?a:a.slice(0,s)).replace(/([?&][^=&#]*=)[^&#]*/g,`$1${kc}`);return s===-1?c:`${c}#${a_(a.slice(s+1))}`}function Ox(t,a){if(typeof t=="string"){const s=A1(t);if(n_.test(s))throw new ze(`Invalid URL ${JSON.stringify(i_(s))}: missing "//" after protocol`,ze.ERR_INVALID_URL,a)}}function D1(t,a,s,l){Ox(a,l);let c=!t_(a);return t&&(c||s===!1)?(Ox(t,l),r_(t,a)):a}const Ix=t=>t instanceof $r?{...t}:t,s_=t=>Object.getOwnPropertySymbols&&Object.getOwnPropertyDescriptor?Object.keys(t).concat(Object.getOwnPropertySymbols(t).filter(a=>Object.getOwnPropertyDescriptor(t,a).enumerable)):Object.keys(t);function Ei(t,a){t=t||{},a=a||{};const s=Object.create(null);Object.defineProperty(s,"hasOwnProperty",{__proto__:null,value:Object.prototype.hasOwnProperty,enumerable:!1,writable:!0,configurable:!0});function l(b,S,_,R){return L.isPlainObject(b)&&L.isPlainObject(S)?L.merge.call({caseless:R},b,S):L.isPlainObject(S)?L.merge({},S):L.isArray(S)?S.slice():S}function c(b,S,_,R){if(L.isUndefined(S)){if(!L.isUndefined(b))return l(void 0,b,_,R)}else return l(b,S,_,R)}function u(b,S){if(!L.isUndefined(S))return l(void 0,S)}function m(b,S){if(L.isUndefined(S)){if(!L.isUndefined(b))return l(void 0,b)}else return l(void 0,S)}function f(b){const S=L.hasOwnProp(a,"transitional")?a.transitional:void 0;if(!L.isUndefined(S))if(L.isPlainObject(S)){if(L.hasOwnProp(S,b))return S[b]}else return;const _=L.hasOwnProp(t,"transitional")?t.transitional:void 0;if(L.isPlainObject(_)&&L.hasOwnProp(_,b))return _[b]}function g(b,S,_){if(L.hasOwnProp(a,_))return l(b,S);if(L.hasOwnProp(t,_))return l(void 0,b)}const w={url:u,method:u,data:u,baseURL:m,transformRequest:m,transformResponse:m,paramsSerializer:m,timeout:m,timeoutErrorMessage:m,withCredentials:m,withXSRFToken:m,adapter:m,responseType:m,xsrfCookieName:m,xsrfHeaderName:m,onUploadProgress:m,onDownloadProgress:m,decompress:m,maxContentLength:m,maxBodyLength:m,beforeRedirect:m,transport:m,httpAgent:m,httpsAgent:m,cancelToken:m,socketPath:m,allowedSocketPaths:m,responseEncoding:m,validateStatus:g,headers:(b,S,_)=>c(Ix(b),Ix(S),_,!0)};return L.forEach(s_({...t,...a}),function(S){if(S==="__proto__"||S==="constructor"||S==="prototype")return;const _=L.hasOwnProp(w,S)?w[S]:c,R=L.hasOwnProp(t,S)?t[S]:void 0,M=L.hasOwnProp(a,S)?a[S]:void 0,N=_(R,M,S);L.isUndefined(N)&&_!==g||(s[S]=N)}),L.hasOwnProp(a,"validateStatus")&&L.isUndefined(a.validateStatus)&&f("validateStatusUndefinedResolves")===!1&&(L.hasOwnProp(t,"validateStatus")?s.validateStatus=l(void 0,t.validateStatus):delete s.validateStatus),s}const o_=["content-type","content-length"];function l_(t,a,s){if(s!=="content-only"){t.set(a);return}Object.entries(a||{}).forEach(([l,c])=>{o_.includes(l.toLowerCase())&&t.set(l,c)})}const c_=t=>encodeURIComponent(t).replace(/%([0-9A-F]{2})/gi,(a,s)=>String.fromCharCode(parseInt(s,16)));function M1(t){const a=Ei({},t),s=_=>L.hasOwnProp(a,_)?a[_]:void 0,l=s("data");let c=s("withXSRFToken");const u=s("xsrfHeaderName"),m=s("xsrfCookieName");let f=s("headers");const g=s("auth"),w=s("baseURL"),b=s("allowAbsoluteUrls"),S=s("url");if(a.headers=f=$r.from(f),a.url=C1(D1(w,S,b,a),s("params"),s("paramsSerializer")),g){const _=L.getSafeProp(g,"username")||"",R=L.getSafeProp(g,"password")||"";try{f.set("Authorization","Basic "+btoa(_+":"+(R?c_(R):"")))}catch(M){throw ze.from(M,ze.ERR_BAD_OPTION_VALUE,t)}}if(L.isFormData(l)){const _=L.getSafeProp(l,"getHeaders");cr.hasStandardBrowserEnv||cr.hasStandardBrowserWebWorkerEnv||L.isReactNative(l)?f.setContentType(void 0):L.isFunction(_)&&l_(f,_.call(l),s("formDataHeaderPolicy"))}if(cr.hasStandardBrowserEnv&&(L.isFunction(c)&&(c=c(a)),c===!0||c==null&&Zw(a.url))){const R=u&&m&&e_.read(m);R&&f.set(u,R)}return a}const d_=typeof XMLHttpRequest<"u",u_=d_&&function(t){return new Promise(function(s,l){const c=M1(t);let u=c.data;const m=$r.from(c.headers).normalize();let{responseType:f,onUploadProgress:g,onDownloadProgress:w}=c,b,S,_,R,M,N;function V(){R&&R(),M&&M(),c.cancelToken&&c.cancelToken.unsubscribe(b),c.signal&&c.signal.removeEventListener("abort",b)}let $=new XMLHttpRequest;$.open(c.method.toUpperCase(),c.url,!0),$.timeout=c.timeout;function j(O){if(!$)return;if($.status===0&&(Iu(A1(c.url))||Iu(cr.origin))!=="file"&&!($.responseURL&&$.responseURL.startsWith("file:"))){l(new ze("Request aborted",ze.ECONNABORTED,t,$)),V(),$=null;return}try{O?N&&N(O):M&&M()}catch(ce){setTimeout(()=>{throw ce})}if(!$)return;const ae=$r.from("getAllResponseHeaders"in $&&$.getAllResponseHeaders()),I={data:!f||f==="text"||f==="json"?$.responseText:$.response,status:$.status,statusText:$.statusText,headers:ae,config:t,request:$};N1(function(C){s(C),V()},function(C){l(C),V()},I),$=null}"onloadend"in $?$.onloadend=j:$.onreadystatechange=function(){!$||$.readyState!==4||$.status===0&&!($.responseURL&&$.responseURL.startsWith("file:"))||setTimeout(j)},$.onabort=function(){$&&(l(new ze("Request aborted",ze.ECONNABORTED,t,$)),V(),$=null)},$.onerror=function(ae){const J=ae&&ae.message?ae.message:"Network Error",I=new ze(J,ze.ERR_NETWORK,t,$);I.event=ae||null,l(I),V(),$=null},$.ontimeout=function(){let ae=c.timeout?"timeout of "+c.timeout+"ms exceeded":"timeout exceeded";const J=c.transitional||Sf;c.timeoutErrorMessage&&(ae=c.timeoutErrorMessage),l(new ze(ae,J.clarifyTimeoutError?ze.ETIMEDOUT:ze.ECONNABORTED,t,$)),V(),$=null},u===void 0&&m.setContentType(null),"setRequestHeader"in $&&L.forEach(b1(m),function(ae,J){$.setRequestHeader(J,ae)}),L.isUndefined(c.withCredentials)||($.withCredentials=!!c.withCredentials),f&&f!=="json"&&($.responseType=c.responseType),w&&([_,M,N]=Sc(w,!0),$.addEventListener("progress",_)),g&&$.upload&&([S,R]=Sc(g),$.upload.addEventListener("progress",S),$.upload.addEventListener("loadend",R)),(c.cancelToken||c.signal)&&(b=O=>{$&&(l(!O||O.type?new Lo(null,t,$):O),$.abort(),V(),$=null)},c.cancelToken&&c.cancelToken.subscribe(b),c.signal&&(c.signal.aborted?b():c.signal.addEventListener("abort",b)));const A=Iu(c.url);if(A&&!cr.protocols.includes(A)){l(new ze("Unsupported protocol "+A+":",ze.ERR_BAD_REQUEST,t)),V();return}$.send(u||null)})},p_=(t,a)=>{if(t=t?t.filter(Boolean):[],!a&&!t.length)return;const s=new AbortController;let l=!1;const c=function(g){if(!l){l=!0,m();const w=g instanceof Error?g:this.reason;s.abort(w instanceof ze?w:new Lo(w instanceof Error?w.message:w))}};let u=a&&setTimeout(()=>{u=null,c(new ze(`timeout of ${a}ms exceeded`,ze.ETIMEDOUT))},a);const m=()=>{t&&(u&&clearTimeout(u),u=null,t.forEach(g=>{g.unsubscribe?g.unsubscribe(c):g.removeEventListener("abort",c)}),t=null)};t.forEach(g=>{if(!l){if(g.aborted){c.call(g);return}g.addEventListener("abort",c,{once:!0})}});const{signal:f}=s;return f.unsubscribe=()=>L.asap(m),f},f_=function*(t,a){let s=t.byteLength;if(s<a){yield t;return}let l=0,c;for(;l<s;)c=l+a,yield t.slice(l,c),l=c},h_=async function*(t,a){for await(const s of m_(t))yield*f_(s,a)},m_=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const a=t.getReader();try{for(;;){const{done:s,value:l}=await a.read();if(s)break;yield l}}finally{await a.cancel()}},Bx=(t,a,s,l)=>{const c=h_(t,a);let u=0,m,f=g=>{m||(m=!0,l&&l(g))};return new ReadableStream({async pull(g){try{const{done:w,value:b}=await c.next();if(w){f(),g.close();return}let S=b.byteLength;if(s){let _=u+=S;s(_)}g.enqueue(new Uint8Array(b))}catch(w){throw f(w),w}},cancel(g){return f(g),c.return()}},{highWaterMark:2})},qx=t=>t>=48&&t<=57||t>=65&&t<=70||t>=97&&t<=102,T1=(t,a,s)=>a+2<s&&qx(t.charCodeAt(a+1))&&qx(t.charCodeAt(a+2)),Ux=t=>t<=57?t-48:(t&223)-55,x_=t=>t>=65&&t<=90||t>=97&&t<=122||t>=48&&t<=57||t===43||t===47||t===45||t===95,g_=t=>t===9||t===10||t===12||t===13||t===32,v_=t=>{const a=Math.floor(t/4),s=t%4;return a*3+(s===2?1:s===3?2:0)},y_=t=>{const a=t.length;let s=0;return a>0&&t.charCodeAt(a-1)===61&&(s++,a>1&&t.charCodeAt(a-2)===61&&s++),Math.floor((a-s)*3/4)},j_=t=>{const a=t.length;let s=0,l=0,c=!1;for(let u=0;u<a;u++){let m=t.charCodeAt(u);if(m===37&&T1(t,u,a)&&(m=Ux(t.charCodeAt(u+1))*16+Ux(t.charCodeAt(u+2)),u+=2),!g_(m)){if(m===61){l++;continue}if(!x_(m)||l>0){c=!0;continue}s++}}return c||l>2||l>0&&(s+l)%4!==0||s%4===1?y_(t):v_(s)},b_=(t,a)=>{if(!t||typeof t!="string"||!t.startsWith("data:"))return 0;const s=t.indexOf(",");if(s<0)return 0;const l=t.slice(5,s),c=t.slice(s+1);if(/;base64/i.test(l))return a(c);let m=0;for(let f=0,g=c.length;f<g;f++){const w=c.charCodeAt(f);if(w===37&&T1(c,f,g))m+=1,f+=2;else if(w<128)m+=1;else if(w<2048)m+=2;else if(w>=55296&&w<=56319&&f+1<g){const b=c.charCodeAt(f+1);b>=56320&&b<=57343?(m+=4,f++):m+=3}else m+=3}return m};function w_(t){const a=typeof t=="string"?t.indexOf("#"):-1;return b_(a===-1?t:t.slice(0,a),j_)}const Ef="1.20.0",Hx=64*1024,__={cache:"default",redirect:"follow",referrer:"about:client",referrerPolicy:"",mode:"cors",integrity:"",keepalive:!1,priority:"auto",window:null},{isFunction:Bl}=L,k_=t=>encodeURIComponent(t).replace(/%([0-9A-F]{2})/gi,(a,s)=>String.fromCharCode(parseInt(s,16))),Vx=t=>{if(!L.isString(t))return t;try{return decodeURIComponent(t)}catch{return t}},Wx=(t,...a)=>{try{return!!t(...a)}catch{return!1}},S_=t=>{const a=t.indexOf("://");let s=t;return a!==-1&&(s=s.slice(a+3)),s.includes("@")||s.includes(":")},C_=t=>{const a=L.global!==void 0&&L.global!==null?L.global:globalThis,{ReadableStream:s,TextEncoder:l}=a;t=L.merge.call({skipUndefined:!0},{Request:a.Request,Response:a.Response},t);const{fetch:c,Request:u,Response:m}=t,f=c?Bl(c):typeof fetch=="function",g=Bl(u),w=Bl(m);if(!f)return!1;const b=f&&Bl(s),S=f&&(typeof l=="function"?($=>j=>$.encode(j))(new l):async $=>new Uint8Array(await new u($).arrayBuffer())),_=g&&b&&Wx(()=>{let $=!1;const j=new u(cr.origin,{body:new s,method:"POST",get duplex(){return $=!0,"half"}}),A=j.headers.has("Content-Type");return j.body!=null&&j.body.cancel(),$&&!A}),R=w&&b&&Wx(()=>L.isReadableStream(new m("").body)),M={stream:R&&($=>$.body)};f&&["text","arrayBuffer","blob","formData","stream"].forEach($=>{!M[$]&&(M[$]=(j,A)=>{let O=j&&j[$];if(O)return O.call(j);throw new ze(`Response type '${$}' is not supported`,ze.ERR_NOT_SUPPORT,A)})});const N=async $=>{if($==null)return 0;if(L.isBlob($))return $.size;if(L.isSpecCompliantForm($))return(await new u(cr.origin,{method:"POST",body:$}).arrayBuffer()).byteLength;if(L.isArrayBufferView($)||L.isArrayBuffer($))return $.byteLength;if(L.isURLSearchParams($)&&($=$+""),L.isString($))return(await S($)).byteLength},V=async($,j)=>{const A=L.toFiniteNumber($.getContentLength());return A??N(j)};return async $=>{let{url:j,method:A,data:O,signal:ae,cancelToken:J,timeout:I,onDownloadProgress:ce,onUploadProgress:C,responseType:y,headers:q,withCredentials:F="same-origin",fetchOptions:fe,maxContentLength:ge,maxBodyLength:Ne,maxRedirects:K}=M1($);const je=L.isNumber(ge)&&ge>-1,ue=L.isNumber(Ne)&&Ne>-1,ye=_e=>L.hasOwnProp($,_e)?$[_e]:void 0;let W=c||fetch;y=y?(y+"").toLowerCase():"text";let z=p_([ae,J&&J.toAbortSignal()],I),k=null;const se=z&&z.unsubscribe&&(()=>{z.unsubscribe()});let ie,D=null;const de=()=>new ze("Request body larger than maxBodyLength limit",ze.ERR_BAD_REQUEST,$,k);try{let _e;const ke=ye("auth");if(ke){const me=L.getSafeProp(ke,"username")||"",Pe=L.getSafeProp(ke,"password")||"";_e={username:me,password:Pe}}if(S_(j)){const me=new URL(j,cr.origin);if(!_e&&(me.username||me.password)){const Pe=Vx(me.username),Y=Vx(me.password);_e={username:Pe,password:Y}}(me.username||me.password)&&(me.username="",me.password="",j=me.href)}if(_e&&(q.delete("authorization"),q.set("Authorization","Basic "+btoa(k_((_e.username||"")+":"+(_e.password||""))))),je&&typeof j=="string"&&j.startsWith("data:")&&w_(j)>ge)throw new ze("maxContentLength size of "+ge+" exceeded",ze.ERR_BAD_RESPONSE,$,k);if(ue&&A!=="get"&&A!=="head"){const me=await N(O);if(typeof me=="number"&&isFinite(me)&&(ie=me,me>Ne))throw de()}const U=ue&&(L.isReadableStream(O)||L.isStream(O)),he=(me,Pe,Y)=>Bx(me,Hx,Be=>{if(ue&&Be>Ne)throw D=de();Pe&&Pe(Be)},Y);if(_&&A!=="get"&&A!=="head"&&(C||U)){if(ie=ie??await V(q,O),ie!==0||U){let me=new u(j,{method:"POST",body:O,duplex:"half"}),Pe;if(L.isFormData(O)&&(Pe=me.headers.get("content-type"))&&q.setContentType(Pe),me.body){const[Y,Be]=C&&Fx(ie,Sc(Lx(C)))||[];O=he(me.body,Y,Be)}}}else if(U&&!g&&b&&A!=="get"&&A!=="head")O=he(O);else if(U&&g&&!_&&A!=="get"&&A!=="head")throw new ze("Stream request bodies are not supported by the current fetch implementation",ze.ERR_NOT_SUPPORT,$,k);L.isString(F)||(F=F?"include":"omit");const nt=g&&"credentials"in u.prototype;if(L.isFormData(O)){const me=q.getContentType();me&&/^multipart\/form-data/i.test(me)&&!/boundary=/i.test(me)&&q.delete("content-type")}q.set("User-Agent","axios/"+Ef,!1);const Ze=fe==null?fe:Object.assign(Object.create(null),fe);Ze&&(delete Ze.body,delete Ze.headers,delete Ze.method,delete Ze.signal,delete Ze.duplex,delete Ze.credentials);const pt=Object.assign(Object.create(null),Ze,{signal:z,method:A.toUpperCase(),headers:b1(q.normalize()),body:O,duplex:"half",credentials:nt?F:void 0});g&&(L.forEach(__,(me,Pe)=>{pt[Pe]===void 0&&(pt[Pe]=me)}),pt.signal===void 0&&(pt.signal=null),pt.body===void 0&&(pt.body=null)),K===0&&(pt.redirect="manual",Ze&&(Ze.redirect="manual")),k=g&&new u(j,pt);let ht=await(g?W(k,Ze):W(j,pt));const Ot=$r.from(ht.headers);if(je){const me=L.toFiniteNumber(Ot.getContentLength());if(me!=null&&me>ge)throw new ze("maxContentLength size of "+ge+" exceeded",ze.ERR_BAD_RESPONSE,$,k)}const oe=R&&(y==="stream"||y==="response");if(R&&ht.body&&(ce||je||oe&&se)){const me={};["status","statusText","headers"].forEach(zt=>{me[zt]=ht[zt]});const Pe=L.toFiniteNumber(Ot.getContentLength()),[Y,Be]=ce&&Fx(Pe,Sc(Lx(ce),!0))||[];let _t=0;const ot=zt=>{if(je&&(_t=zt,_t>ge))throw new ze("maxContentLength size of "+ge+" exceeded",ze.ERR_BAD_RESPONSE,$,k);Y&&Y(zt)};ht=new m(Bx(ht.body,Hx,ot,()=>{Be&&Be(),se&&se()}),me)}y=y||"text";let $e=await M[L.findKey(M,y)||"text"](ht,$);if(je&&!R&&!oe){let me;if($e!=null&&(typeof $e.byteLength=="number"?me=$e.byteLength:typeof $e.size=="number"?me=$e.size:typeof $e=="string"&&(me=typeof l=="function"?new l().encode($e).byteLength:$e.length)),typeof me=="number"&&me>ge)throw new ze("maxContentLength size of "+ge+" exceeded",ze.ERR_BAD_RESPONSE,$,k)}return!oe&&se&&se(),await new Promise((me,Pe)=>{N1(me,Pe,{data:$e,headers:$r.from(ht.headers),status:ht.status,statusText:ht.statusText,config:$,request:k})})}catch(_e){if(se&&se(),z&&z.aborted&&z.reason instanceof ze){const ke=z.reason;throw ke.config=$,k&&(ke.request=k),_e!==ke&&Object.defineProperty(ke,"cause",{__proto__:null,value:_e,writable:!0,enumerable:!1,configurable:!0}),ke}if(D)throw k&&!D.request&&(D.request=k),D;if(_e instanceof ze)throw k&&!_e.request&&(_e.request=k),_e;if(_e&&_e.name==="TypeError"&&/Load failed|fetch/i.test(_e.message)){const ke=new ze("Network Error",ze.ERR_NETWORK,$,k,_e&&_e.response);throw Object.defineProperty(ke,"cause",{__proto__:null,value:_e.cause||_e,writable:!0,enumerable:!1,configurable:!0}),ke}throw ze.from(_e,_e&&_e.code,$,k,_e&&_e.response)}}},E_=new Map,F1=t=>{let a=t&&t.env||{};const{fetch:s,Request:l,Response:c}=a,u=[l,c,s];let m=u.length,f=m,g,w,b=E_;for(;f--;)g=u[f],w=b.get(g),w===void 0&&b.set(g,w=f?new Map:C_(a)),b=w;return w};F1();const $f={http:Dw,xhr:u_,fetch:{get:F1}};L.forEach($f,(t,a)=>{if(t){try{Object.defineProperty(t,"name",{__proto__:null,value:a})}catch{}Object.defineProperty(t,"adapterName",{__proto__:null,value:a})}});const Gx=t=>`- ${t}`,$_=t=>L.isFunction(t)||t===null||t===!1;function R_(t,a){t=L.isArray(t)?t:[t];const{length:s}=t;let l,c;const u={};for(let m=0;m<s;m++){l=t[m];let f;if(c=l,!$_(l)&&(c=$f[(f=String(l)).toLowerCase()],c===void 0))throw new ze(`Unknown adapter '${f}'`);if(c&&(L.isFunction(c)||(c=c.get(a))))break;u[f||"#"+m]=c}if(!c){const m=Object.entries(u).map(([g,w])=>`adapter ${g} `+(w===!1?"is not supported by the environment":"is not available in the build"));let f=s?m.length>1?`since :
`+m.map(Gx).join(`
`):" "+Gx(m[0]):"as no adapter specified";throw new ze("There is no suitable adapter to dispatch the request "+f,ze.ERR_NOT_SUPPORT)}return c}const L1={getAdapter:R_,adapters:$f};function Bu(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Lo(null,t)}function qu(t){const a=L.toSafeFlatObject(t);return Bu(a),a.headers=$r.from(L.getSafeProp(a,"headers")),a.data=Ou.call(a,a.transformRequest),["post","put","patch"].indexOf(a.method)!==-1&&a.headers.setContentType("application/x-www-form-urlencoded",!1),L1.getAdapter(a.adapter||Fo.adapter,a)(a).then(function(c){Bu(a),a.response=c;try{c.data=Ou.call(a,a.transformResponse,c)}finally{delete a.response}return c.headers=$r.from(c.headers),c},function(c){if(!P1(c)&&(Bu(a),c&&c.response)){a.response=c.response;try{c.response.data=Ou.call(a,a.transformResponse,c.response)}finally{delete a.response}c.response.headers=$r.from(c.response.headers)}return Promise.reject(c)})}const Vc={};["object","boolean","number","function","string","symbol"].forEach((t,a)=>{Vc[t]=function(l){return typeof l===t||"a"+(a<1?"n ":" ")+t}});const Kx={};Vc.transitional=function(a,s,l){function c(u,m){return"[Axios v"+Ef+"] Transitional option '"+u+"'"+m+(l?". "+l:"")}return(u,m,f)=>{if(a===!1)throw new ze(c(m," has been removed"+(s?" in "+s:"")),ze.ERR_DEPRECATED);return s&&!Kx[m]&&(Kx[m]=!0,console.warn(c(m," has been deprecated since v"+s+" and will be removed in the near future"))),a?a(u,m,f):!0}};Vc.spelling=function(a){return(s,l)=>(console.warn(`${l} is likely a misspelling of ${a}`),!0)};function z_(t,a,s){if(typeof t!="object"||t===null)throw new ze("options must be an object",ze.ERR_BAD_OPTION_VALUE);const l=Object.keys(t);let c=l.length;for(;c-- >0;){const u=l[c],m=Object.prototype.hasOwnProperty.call(a,u)?a[u]:void 0;if(m){const f=t[u],g=f===void 0||m(f,u,t);if(g!==!0)throw new ze("option "+u+" must be "+g,ze.ERR_BAD_OPTION_VALUE);continue}if(s!==!0)throw new ze("Unknown option "+u,ze.ERR_BAD_OPTION)}}const fc={assertOptions:z_,validators:Vc},_r=fc.validators;let ji=class{constructor(a){this.defaults=a||{},this.interceptors={request:new Mx,response:new Mx}}async request(a,s){try{return await this._request(a,s)}catch(l){if(l instanceof Error)try{let c={};Error.captureStackTrace?Error.captureStackTrace(c):c=new Error;const u=c.stack;let m="";if(typeof u=="string"){const f=u.indexOf(`
`);m=f===-1?"":u.slice(f+1)}if(!l.stack)l.stack=m;else if(m){const f=m.indexOf(`
`),g=f===-1?-1:m.indexOf(`
`,f+1),w=g===-1?"":m.slice(g+1);String(l.stack).endsWith(w)||(l.stack+=`
`+m)}}catch{}throw l}}_request(a,s){typeof a=="string"?(s=s||{},s.url=a):s=a||{},s=Ei(this.defaults,s);const{transitional:l,paramsSerializer:c,headers:u}=s;l!==void 0&&fc.assertOptions(l,{silentJSONParsing:_r.transitional(_r.boolean),forcedJSONParsing:_r.transitional(_r.boolean),clarifyTimeoutError:_r.transitional(_r.boolean),legacyInterceptorReqResOrdering:_r.transitional(_r.boolean),advertiseZstdAcceptEncoding:_r.transitional(_r.boolean),validateStatusUndefinedResolves:_r.transitional(_r.boolean)},!1),c!=null&&(L.isFunction(c)?s.paramsSerializer={serialize:c}:fc.assertOptions(c,{encode:_r.function,serialize:_r.function},!0)),s.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?s.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:s.allowAbsoluteUrls=!0),fc.assertOptions(s,{baseUrl:_r.spelling("baseURL"),withXsrfToken:_r.spelling("withXSRFToken")},!0),s.method=(L.getSafeProp(s,"method")||L.getSafeProp(this.defaults,"method")||"get").toLowerCase();let m=u&&L.merge(u.common,u[s.method]);u&&L.forEach(z1.concat("common"),M=>{delete u[M]}),s.headers=$r.concat(m,u);const f=[];let g=!0;this.interceptors.request.forEach(function(N){if(typeof N.runWhen=="function"&&N.runWhen(s)===!1)return;g=g&&N.synchronous;const V=s.transitional||Sf;V&&V.legacyInterceptorReqResOrdering?f.unshift(N.fulfilled,N.rejected):f.push(N.fulfilled,N.rejected)});const w=[];this.interceptors.response.forEach(function(N){w.push(N.fulfilled,N.rejected)});let b,S=0,_;if(!g){const M=[qu.bind(this),void 0];for(M.unshift(...f),M.push(...w),_=M.length,b=Promise.resolve(s);S<_;)b=b.then(M[S++],M[S++]);return b}_=f.length;let R=s;for(;S<_;){const M=f[S++],N=f[S++];try{R=M?M(R):R}catch(V){if(!N){b=Promise.reject(V);break}try{const $=N.call(this,V);L.isThenable($)&&(b=Promise.resolve($).then(()=>qu.call(this,R)))}catch($){b=Promise.reject($)}break}}if(!b)try{b=qu.call(this,R)}catch(M){b=Promise.reject(M)}for(S=0,_=w.length;S<_;)b=b.then(w[S++],w[S++]);return b}getUri(a){a=Ei(this.defaults,a);const s=D1(a.baseURL,a.url,a.allowAbsoluteUrls,a);return C1(s,a.params,a.paramsSerializer)}};L.forEach(["delete","get","head","options"],function(a){ji.prototype[a]=function(s,l){return this.request(Ei(l||{},{method:a,url:s,data:l&&L.hasOwnProp(l,"data")?l.data:void 0}))}});L.forEach(["post","put","patch","query"],function(a){function s(l){return function(u,m,f){return this.request(Ei(f||{},{method:a,headers:l?{"Content-Type":"multipart/form-data"}:{},url:u,data:m}))}}ji.prototype[a]=s(),a!=="query"&&(ji.prototype[a+"Form"]=s(!0))});let P_=class O1{constructor(a){if(typeof a!="function")throw new TypeError("executor must be a function.");let s;this.promise=new Promise(function(u){s=u});const l=this;this.promise.then(c=>{if(!l._listeners)return;let u=l._listeners.length;for(;u-- >0;)l._listeners[u](c);l._listeners=null}),this.promise.then=c=>{let u;const m=new Promise(f=>{l.subscribe(f),u=f}).then(c);return m.cancel=function(){l.unsubscribe(u)},m},a(function(u,m,f){l.reason||(l.reason=new Lo(u,m,f),s(l.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(a){if(this.reason){a(this.reason);return}this._listeners?this._listeners.push(a):this._listeners=[a]}unsubscribe(a){if(!this._listeners)return;const s=this._listeners.indexOf(a);s!==-1&&this._listeners.splice(s,1)}toAbortSignal(){const a=new AbortController,s=l=>{a.abort(l)};return this.subscribe(s),a.signal.unsubscribe=()=>this.unsubscribe(s),a.signal}static source(){let a;return{token:new O1(function(c){a=c}),cancel:a}}};function N_(t){return function(s){return t.apply(null,s)}}function A_(t){return L.isObject(t)&&t.isAxiosError===!0}const hc={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,ContentTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,UnprocessableContent:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerReturnsAnUnknownError:520,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(hc).forEach(([t,a])=>{hc[a]===void 0&&(hc[a]=t)});function I1(t){const a=new ji(t),s=d1(ji.prototype.request,a);return L.extend(s,ji.prototype,a,{allOwnKeys:!0}),L.extend(s,a,null,{allOwnKeys:!0}),s.create=function(c){return I1(Ei(t,c))},s}const $t=I1(Fo);$t.Axios=ji;$t.CanceledError=Lo;$t.CancelToken=P_;$t.isCancel=P1;$t.VERSION=Ef;$t.toFormData=Hc;$t.AxiosError=ze;$t.Cancel=$t.CanceledError;$t.all=function(a){return Promise.all(a)};$t.spread=N_;$t.isAxiosError=A_;$t.mergeConfig=Ei;$t.AxiosHeaders=$r;$t.formToJSON=t=>R1(L.isHTMLForm(t)?new FormData(t):t);$t.getAdapter=L1.getAdapter;$t.HttpStatusCode=hc;$t.default=$t;const{Axios:kR,AxiosError:SR,CanceledError:CR,isCancel:ER,CancelToken:$R,VERSION:RR,all:zR,Cancel:PR,isAxiosError:NR,spread:AR,toFormData:DR,AxiosHeaders:MR,HttpStatusCode:TR,formToJSON:FR,getAdapter:LR,mergeConfig:OR,create:IR}=$t,Re=$t.create({baseURL:"http://localhost:3333/api",headers:{"Content-Type":"application/json"},withCredentials:!0});function B1(t){const a=t;return a.user?a.user:a.data&&typeof a.data=="object"&&"user"in a.data&&a.data.user?a.data.user:a.data&&typeof a.data=="object"&&"email"in a.data?a.data:t}async function D_(t){return(await Re.post("/auth/register",t)).data.data}async function M_(t){const a=await Re.post("/auth/login",t);return B1(a.data)}async function T_(){const t=await Re.get("/auth/me");return B1(t.data)}async function F_(){await Re.post("/auth/logout")}async function L_(){const a=(await Re.get("/subscriptions/plans")).data;return a&&typeof a=="object"&&"data"in a&&a.data?a.data:a}async function O_(t,a=[]){var l;const s=await Re.post("/assistant/chat",{message:t,history:a});return((l=s.data.data)==null?void 0:l.message)??s.data.message??""}async function I_(t={}){return(await Re.get("/study-resources",{params:t})).data}async function B_(){return(await Re.get("/study-resources/areas")).data.data}async function q_(t={}){return(await Re.get("/english-study/sessions",{params:t})).data}async function U_(t){return(await Re.post("/english-study/sessions",t)).data.data}async function Qx(t,a){return(await Re.patch(`/english-study/sessions/${encodeURIComponent(String(t))}`,a)).data.data}async function H_(t){await Re.delete(`/english-study/sessions/${encodeURIComponent(String(t))}`)}async function V_(){return(await Re.get("/english-study/goal")).data.data}async function W_(t){return(await Re.put("/english-study/goal",{daily_goal_minutes:t})).data.data}async function G_(t={}){return(await Re.get("/english-study/summary",{params:t})).data.data}async function K_(t={}){return(await Re.get("/expenses",{params:t})).data}async function Q_(){return(await Re.get("/expenses/categories")).data.data}async function Y_(t){return(await Re.get("/expenses/summary",{params:{month:t}})).data.data}function Xn(t){return typeof t=="object"&&t!==null}function Ua(t){return t===null||typeof t=="number"&&Number.isFinite(t)}function Uu(t){return Xn(t)&&Ua(t.liters)&&Ua(t.cost)&&Ua(t.cost_per_km)}function J_(t){if(!Xn(t)||!Xn(t.vehicle)||!Xn(t.fuel_prices)||!Xn(t.comparison)||!Xn(t.estimates))return!1;const{comparison:a,estimates:s,fuel_prices:l,vehicle:c}=t;return typeof c.model=="string"&&(c.type==="carro"||c.type==="moto")&&(t.analysis_method==="consumo_informado"||t.analysis_method==="regra_dos_70_por_cento")&&(t.selected_fuel==="gasolina"||t.selected_fuel==="alcool")&&typeof l.gasolina=="number"&&typeof l.alcool=="number"&&Ua(a.ethanol_price_as_percentage_of_gasoline)&&Ua(a.ethanol_break_even_price)&&(a.recommended_fuel==="gasolina"||a.recommended_fuel==="alcool")&&typeof a.selected_fuel_is_cheaper=="boolean"&&Ua(a.estimated_savings_for_distance)&&Ua(s.distance_km)&&Uu(s.gasolina)&&Uu(s.alcool)&&Uu(s.selected_fuel_cost)&&Array.isArray(t.notes)&&t.notes.every(u=>typeof u=="string")}function X_(t){if(!Xn(t))return["resposta deve ser um objeto"];const a=[],s=(w,b,S)=>{const _=w[b];if(!Xn(_)){a.push(`${S}: ausente ou não é um objeto`);return}return _},l=(w,b,S)=>{typeof w[b]!="string"&&a.push(`${S}: ausente ou inválido`)},c=(w,b,S)=>{Ua(w[b])||a.push(`${S}: ausente ou deve ser número ou null`)},u=s(t,"vehicle","vehicle");u&&(l(u,"model","vehicle.model"),u.type!=="carro"&&u.type!=="moto"&&a.push('vehicle.type: ausente ou deve ser "carro" ou "moto"')),t.analysis_method!=="consumo_informado"&&t.analysis_method!=="regra_dos_70_por_cento"&&a.push("analysis_method: ausente ou inválido"),t.selected_fuel!=="gasolina"&&t.selected_fuel!=="alcool"&&a.push("selected_fuel: ausente ou inválido");const m=s(t,"fuel_prices","fuel_prices");m&&(typeof m.gasolina!="number"&&a.push("fuel_prices.gasolina: ausente ou inválido"),typeof m.alcool!="number"&&a.push("fuel_prices.alcool: ausente ou inválido"));const f=s(t,"comparison","comparison");f&&(c(f,"ethanol_price_as_percentage_of_gasoline","comparison.ethanol_price_as_percentage_of_gasoline"),c(f,"ethanol_break_even_price","comparison.ethanol_break_even_price"),f.recommended_fuel!=="gasolina"&&f.recommended_fuel!=="alcool"&&a.push("comparison.recommended_fuel: ausente ou inválido"),typeof f.selected_fuel_is_cheaper!="boolean"&&a.push("comparison.selected_fuel_is_cheaper: ausente ou inválido"),c(f,"estimated_savings_for_distance","comparison.estimated_savings_for_distance"));const g=s(t,"estimates","estimates");if(g){c(g,"distance_km","estimates.distance_km");for(const w of["gasolina","alcool","selected_fuel_cost"]){const b=s(g,w,`estimates.${w}`);b&&(c(b,"liters",`estimates.${w}.liters`),c(b,"cost",`estimates.${w}.cost`),c(b,"cost_per_km",`estimates.${w}.cost_per_km`))}}return t.notes!==void 0&&(!Array.isArray(t.notes)||!t.notes.every(w=>typeof w=="string"))&&a.push("notes: formato inválido; esperado uma lista de textos"),a}async function Z_(t){const s=(await Re.post("/expenses/fuel-calculator",t)).data,l=Xn(s)&&"data"in s?s.data:s,c=Xn(l)&&l.notes===void 0?{...l,notes:[]}:l;if(!J_(c)){const u=X_(c);throw new Error(`Resposta do calculador incompleta. Campos ausentes ou inválidos: ${u.join("; ")||"formato inesperado"}.`)}return c}async function e2(t=1,a=20){return(await Re.get("/expenses/daily-routes",{params:{page:t,limit:a}})).data}async function t2(t,a){return(await Re.put(`/expenses/daily-routes/${encodeURIComponent(t)}`,a)).data.data}async function r2(t){return(await Re.post("/expenses",t)).data.data}async function Yx(t,a){return(await Re.patch(`/expenses/${encodeURIComponent(String(t))}`,a)).data.data}async function n2(t){await Re.delete(`/expenses/${encodeURIComponent(String(t))}`)}async function a2(){return(await Re.get("/dividends/types")).data.data}async function i2(t,a){const l=(await Re.get(`/dividends/lookup/${encodeURIComponent(t)}`,{params:{asset_type:a}})).data;return"data"in l&&l.data?l.data:l}async function ql(t={}){return(await Re.get("/dividends",{params:t})).data}async function s2(){return(await Re.get("/dividends/portfolio")).data.data}const o2={otimo:!0,bom:!0,neutro:!0,atencao:!0,evitar:!0};function q1(t){return t>=80?"otimo":t>=65?"bom":t>=45?"neutro":t>=30?"atencao":"evitar"}function l2(t,a){const s=Math.min(100,Math.max(0,Number(t.score)||0)),l=String(t.rating??""),c=t.ticker?String(t.ticker):void 0,u=String(t.label??c??t.id??`Item ${a+1}`),m=Array.isArray(t.top_assets)?t.top_assets.map(String):void 0;return{id:String(t.id??c??`${u}-${a}`),label:u,ticker:c,class_id:t.id&&!c?String(t.id):t.asset_class?String(t.asset_class):void 0,score:s,rating:l in o2?l:q1(s),reasons:Array.isArray(t.reasons)?t.reasons.map(String):[],top_assets:m,in_portfolio:t.in_portfolio===!0,analysis_type:t.analysis_type==="fii_fundamentals"||t.analysis_type==="equity_market_history"||t.analysis_type==="short_term_market"?t.analysis_type:void 0,analysis_factors:Array.isArray(t.analysis_factors)?t.analysis_factors.map(String):void 0}}function Hu(t){return Array.isArray(t)?t.map((a,s)=>l2(a??{},s)):[]}async function U1(t){const s=(await Re.get("/market/opportunities",{params:t?{perfil:t}:void 0,timeout:6e4})).data,l=s.suggested_allocation_pct??{};return{profile:s.profile?String(s.profile):void 0,generated_at:s.generated_at?String(s.generated_at):void 0,disclaimer:s.disclaimer?String(s.disclaimer):void 0,warnings:Array.isArray(s.warnings)?s.warnings.map(String):[],classes:Hu(s.classes),assets:Hu(s.ranking),portfolio:Hu(s.portfolio),suggested_allocation:Object.entries(l).map(([c,u])=>({id:c,percent:Number(u)||0}))}}async function c2(t=!1){return(await Re.get("/market/news",{params:t?{refresh:!0}:void 0,timeout:2e4})).data}async function d2(t){return(await Re.get("/market/backtest",{params:{valor:t.valor,anos:t.anos,aporte_mensal:t.aporte_mensal,reajustar_aporte_ipca:t.reajustar_aporte_ipca,perfil:t.perfil},timeout:9e4})).data}async function u2(t){return(await Re.get("/market/fiis/compare",{params:{...t.tickers.length?{tickers:t.tickers.join(",")}:{},anos:t.anos,valor:t.valor},timeout:12e4})).data}function H1(t){return{perfil:t.perfil,anos:t.anos,prazo_meses:t.prazo_meses,cdi_percent:t.cdi_percent,lci_percent:t.lci_percent,...t.meta_renda_fixa!==void 0?{meta_renda_fixa:t.meta_renda_fixa}:{}}}async function V1(t){return(await Re.get("/market/portfolio/fii-analysis",{params:H1(t),timeout:12e4})).data}async function p2(t,a){return(await Re.get("/market/portfolio/switch-simulation",{params:{...H1(t),vender:a.map(l=>`${l.ticker}:${l.sell_pct}`).join(","),meses:"12,24,60"},timeout:12e4})).data}async function f2(){return(await Re.post("/dividends/refresh-prices",void 0,{timeout:6e4})).data.data}async function h2(t,a,s){return(await Re.get("/dividends/projection",{params:{from:t,months:a,cdi_rate:s}})).data.data}async function m2(){return(await Re.get("/dividends/cdi-rate")).data.data}async function x2(t){return(await Re.get(`/dividends/${encodeURIComponent(String(t))}/fixed-income-history`,{timeout:2e4})).data.data}async function g2(t){return(await Re.post("/dividends",t)).data.data}async function Vu(t,a){return(await Re.patch(`/dividends/${encodeURIComponent(String(t))}`,a)).data.data}async function v2(t){await Re.delete(`/dividends/${encodeURIComponent(String(t))}`)}async function y2(t){const s=(await Re.get(`/study-resources/${encodeURIComponent(String(t))}`)).data;return s&&typeof s=="object"&&"data"in s&&s.data?s.data:s}async function j2(t){await Re.post("/study-resources",t)}async function b2(t,a){await Re.patch(`/study-resources/${encodeURIComponent(String(t))}`,a)}async function w2(t){await Re.delete(`/study-resources/${encodeURIComponent(String(t))}`)}async function _2(){var l;const t=await Re.get("/finances/summary"),a=((l=t.data)==null?void 0:l.data)??t.data,s=Number((a==null?void 0:a.total_patrimony)??(a==null?void 0:a.total_balance)??(a==null?void 0:a.total)??0);return{total_balance:s,account_count:Number((a==null?void 0:a.account_count)??(a==null?void 0:a.accounts_count)??(a==null?void 0:a.accountCount)??(a==null?void 0:a.count)??0),total_patrimony:s,exchange_rate:(a==null?void 0:a.exchange_rate)==null?null:Number(a.exchange_rate),exchange_rate_date:(a==null?void 0:a.exchange_rate_date)??(a==null?void 0:a.rate_date)??null,asset_count:Number((a==null?void 0:a.asset_count)??(a==null?void 0:a.assetCount)??0),total_assets:Number((a==null?void 0:a.total_assets)??(a==null?void 0:a.assets_total_brl)??0),total_debt:Number((a==null?void 0:a.total_debt)??(a==null?void 0:a.liabilities_total_brl)??0),total_liabilities:Number((a==null?void 0:a.total_liabilities)??(a==null?void 0:a.liabilities_total_brl)??(a==null?void 0:a.total_debt)??0),monthly_payments:Number((a==null?void 0:a.monthly_payments)??(a==null?void 0:a.monthly_liability_payments_brl)??(a==null?void 0:a.monthly_payment_total)??0),assets_total_brl:Number((a==null?void 0:a.assets_total_brl)??(a==null?void 0:a.total_assets)??0),liabilities_total_brl:Number((a==null?void 0:a.liabilities_total_brl)??(a==null?void 0:a.total_liabilities)??(a==null?void 0:a.total_debt)??0),monthly_liability_payments_brl:Number((a==null?void 0:a.monthly_liability_payments_brl)??(a==null?void 0:a.monthly_payments)??0),investment_portfolio_invested_brl:Number((a==null?void 0:a.investment_portfolio_invested_brl)??0),investment_portfolio_value_brl:Number((a==null?void 0:a.investment_portfolio_value_brl)??0),investment_portfolio_total_value_brl:Number((a==null?void 0:a.investment_portfolio_total_value_brl)??(a==null?void 0:a.investment_portfolio_value_brl)??0),investment_portfolio_profit_loss_brl:Number((a==null?void 0:a.investment_portfolio_profit_loss_brl)??0)}}async function k2(){const t=await Re.get("/finances/accounts");return(Array.isArray(t.data)?t.data:t.data.data??[]).map(s=>({...s,currency:s.currency??"BRL",balance:Number(s.balance)||0,balance_brl:Number(s.balance_brl??s.balance)||0,is_active:s.is_active??!0}))}async function S2(t){const a=await Re.post("/finances/accounts",t);return"data"in a.data&&a.data.data?a.data.data:a.data}async function C2(t,a){const s=await Re.patch(`/finances/accounts/${encodeURIComponent(String(t))}`,a);return"data"in s.data&&s.data.data?s.data.data:s.data}async function E2(t){await Re.delete(`/finances/accounts/${encodeURIComponent(String(t))}`)}function Rf(t){return{...t,currency:t.currency??"BRL",estimated_value:Number(t.estimated_value)||0,monthly_rent:Number(t.monthly_rent)||0,value_brl:t.value_brl==null?void 0:Number(t.value_brl),estimated_value_brl:t.estimated_value_brl==null?void 0:Number(t.estimated_value_brl),debt_brl:t.debt_brl==null?void 0:Number(t.debt_brl),net_value_brl:t.net_value_brl==null?void 0:Number(t.net_value_brl)}}async function $2(){const t=await Re.get("/finances/assets");return(Array.isArray(t.data)?t.data:t.data.data??[]).map(Rf)}async function R2(t){const a=await Re.post("/finances/assets",t),s="data"in a.data&&a.data.data?a.data.data:a.data;return Rf(s)}async function z2(t,a){const s=await Re.patch(`/finances/assets/${encodeURIComponent(String(t))}`,a),l="data"in s.data&&s.data.data?s.data.data:s.data;return Rf(l)}async function P2(t){await Re.delete(`/finances/assets/${encodeURIComponent(String(t))}`)}function zf(t){return{...t,currency:t.currency??"BRL",original_amount:Number(t.original_amount)||0,outstanding_balance:Number(t.outstanding_balance)||0,monthly_payment:Number(t.monthly_payment)||0,value_brl:t.value_brl==null?void 0:Number(t.value_brl),outstanding_balance_brl:t.outstanding_balance_brl==null?void 0:Number(t.outstanding_balance_brl),monthly_payment_brl:t.monthly_payment_brl==null?void 0:Number(t.monthly_payment_brl)}}async function N2(){const t=await Re.get("/finances/liabilities");return(Array.isArray(t.data)?t.data:t.data.data??[]).map(zf)}async function A2(t){const a=await Re.post("/finances/liabilities",t),s="data"in a.data&&a.data.data?a.data.data:a.data;return zf(s)}async function D2(t,a){const s=await Re.patch(`/finances/liabilities/${encodeURIComponent(String(t))}`,a),l="data"in s.data&&s.data.data?s.data.data:s.data;return zf(l)}async function M2(t){await Re.delete(`/finances/liabilities/${encodeURIComponent(String(t))}`)}async function ts(t=1,a=10){return(await Re.get("/tasks",{params:{page:t,limit:a}})).data}async function ao(t){return(await Re.get("/daily",{params:void 0})).data.data}async function T2(t=1,a=10,s){return(await Re.get("/daily/history",{params:{page:t,limit:a,...s?{date:s}:{}}})).data}async function F2(t){return(await Re.get(`/daily/history/${encodeURIComponent(t)}`)).data}async function L2(t=1,a=10,s){return(await Re.get("/daily/history/week",{params:{page:t,limit:a,...s?{date:s}:{}}})).data}async function O2(t=1,a=10,s){return(await Re.get("/daily/history/month",{params:{page:t,limit:a,...s?{date:s}:{}}})).data}async function I2(){return(await Re.get("/objectives")).data.data}async function B2(t){return(await Re.post("/objectives",t)).data.data}async function q2(t,a){return(await Re.patch(`/objectives/${encodeURIComponent(String(t))}`,a)).data.data}async function U2(t){await Re.delete(`/objectives/${encodeURIComponent(String(t))}`)}async function H2(t,a){return(await Re.post(`/objectives/${encodeURIComponent(String(t))}/steps`,{title:a,status:"pendente"})).data.data}async function V2(t,a,s){const l=await Re.patch(`/objectives/${encodeURIComponent(String(t))}/steps/${encodeURIComponent(String(a))}`,{status:s});return{...l.data.data,activity:l.data.activity,activities:l.data.activities}}async function W2(t,a){await Re.delete(`/objectives/${encodeURIComponent(String(t))}/steps/${encodeURIComponent(String(a))}`)}async function G2(t,a=1,s=20){const l={page:a,limit:s};return t.mode==="date"?l.date=t.date:t.mode==="range"&&(l.from=t.from,l.to=t.to),(await Re.get("/schedule",{params:l})).data}async function K2(t=1,a=20){return(await Re.get("/schedule/alerts",{params:{page:t,limit:a}})).data}async function Q2(t){return(await Re.post("/schedule",t)).data.data}async function Y2(t,a){return(await Re.patch(`/schedule/${encodeURIComponent(String(t))}`,a)).data.data}async function J2(t){await Re.delete(`/schedule/${encodeURIComponent(String(t))}`)}async function X2(t){return(await Re.post("/tasks",t)).data.data}async function Z2(t,a){await Re.patch(`/tasks/${encodeURIComponent(String(t))}`,a)}async function ek(t){await Re.delete(`/tasks/${t}`)}async function tk(t,a){const s=await Re.patch(`/daily/items/${encodeURIComponent(String(t))}`,{is_completed:a});return{...s.data.data,activity:s.data.activity}}async function Jx(t){await Re.patch(`/tasks/${t}/deactivate`)}async function rk(t){await Re.patch(`/tasks/${t}/activate`)}/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nk=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),W1=(...t)=>t.filter((a,s,l)=>!!a&&a.trim()!==""&&l.indexOf(a)===s).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ak={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ik=x.forwardRef(({color:t="currentColor",size:a=24,strokeWidth:s=2,absoluteStrokeWidth:l,className:c="",children:u,iconNode:m,...f},g)=>x.createElement("svg",{ref:g,...ak,width:a,height:a,stroke:t,strokeWidth:l?Number(s)*24/Number(a):s,className:W1("lucide",c),...f},[...m.map(([w,b])=>x.createElement(w,b)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ee=(t,a)=>{const s=x.forwardRef(({className:l,...c},u)=>x.createElement(ik,{ref:u,iconNode:a,className:W1(`lucide-${nk(t)}`,l),...c}));return s.displayName=`${t}`,s};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const So=Ee("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xx=Ee("ArchiveRestore",[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h2",key:"tvwodi"}],["path",{d:"M20 8v11a2 2 0 0 1-2 2h-2",key:"1gkqxj"}],["path",{d:"m9 15 3-3 3 3",key:"1pd0qc"}],["path",{d:"M12 12v9",key:"192myk"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sk=Ee("Archive",[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"M10 12h4",key:"a56b0p"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cc=Ee("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ok=Ee("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lk=Ee("Ban",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.9 4.9 14.2 14.2",key:"1m5liu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pf=Ee("Banknote",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M6 12h.01M18 12h.01",key:"113zkx"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mc=Ee("BellRing",[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M22 8c0-2.3-.8-4.3-2-6",key:"5bb3ad"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}],["path",{d:"M4 2C2.8 3.7 2 5.7 2 8",key:"tap9e0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hi=Ee("Bell",[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ck=Ee("Bold",[["path",{d:"M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8",key:"mg9rjx"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zr=Ee("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zx=Ee("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dk=Ee("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eg=Ee("Cake",[["path",{d:"M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8",key:"1w3rig"}],["path",{d:"M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1",key:"n2jgmb"}],["path",{d:"M2 21h20",key:"1nyx9w"}],["path",{d:"M7 8v3",key:"1qtyvj"}],["path",{d:"M12 8v3",key:"hwp4zt"}],["path",{d:"M17 8v3",key:"1i6e5u"}],["path",{d:"M7 4h.01",key:"1bh4kh"}],["path",{d:"M12 4h.01",key:"1ujb9j"}],["path",{d:"M17 4h.01",key:"1upcoc"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Je=Ee("CalendarDays",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jp=Ee("CalendarRange",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M17 14h-6",key:"bkmgh3"}],["path",{d:"M13 18H7",key:"bb0bb7"}],["path",{d:"M7 14h.01",key:"1qa3f1"}],["path",{d:"M17 18h.01",key:"1bdyru"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uk=Ee("Car",[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pk=Ee("ChartLine",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"m19 9-5 5-4-4-3 3",key:"2osh9i"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tn=Ee("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fk=Ee("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ao=Ee("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ms=Ee("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hk=Ee("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nn=Ee("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mk=Ee("CircleHelp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xk=Ee("CirclePause",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"10",x2:"10",y1:"15",y2:"9",key:"c1nkhi"}],["line",{x1:"14",x2:"14",y1:"15",y2:"9",key:"h65svq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gk=Ee("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rn=Ee("Clock3",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16.5 12",key:"1aq6pp"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const os=Ee("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ec=Ee("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G1=Ee("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oo=Ee("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vk=Ee("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yk=Ee("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xp=Ee("Flag",[["path",{d:"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z",key:"i9b6wo"}],["line",{x1:"4",x2:"4",y1:"22",y2:"15",key:"1cm3nv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jk=Ee("Focus",[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $c=Ee("Fuel",[["line",{x1:"3",x2:"15",y1:"22",y2:"22",key:"xegly4"}],["line",{x1:"4",x2:"14",y1:"9",y2:"9",key:"xcnuvu"}],["path",{d:"M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18",key:"16j0yd"}],["path",{d:"M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5",key:"7cu91f"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zp=Ee("Gauge",[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bk=Ee("Heading2",[["path",{d:"M4 12h8",key:"17cfdx"}],["path",{d:"M4 18V6",key:"1rz3zl"}],["path",{d:"M12 18V6",key:"zqpxq5"}],["path",{d:"M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1",key:"9jr5yi"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wk=Ee("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xc=Ee("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _k=Ee("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kk=Ee("Italic",[["line",{x1:"19",x2:"10",y1:"4",y2:"4",key:"15jd3p"}],["line",{x1:"14",x2:"5",y1:"20",y2:"20",key:"bu0au3"}],["line",{x1:"15",x2:"9",y1:"4",y2:"20",key:"uljnxc"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nf=Ee("Landmark",[["line",{x1:"3",x2:"21",y1:"22",y2:"22",key:"j8o0r"}],["line",{x1:"6",x2:"6",y1:"18",y2:"11",key:"10tf0k"}],["line",{x1:"10",x2:"10",y1:"18",y2:"11",key:"54lgf6"}],["line",{x1:"14",x2:"14",y1:"18",y2:"11",key:"380y"}],["line",{x1:"18",x2:"18",y1:"18",y2:"11",key:"1kevvc"}],["polygon",{points:"12 2 20 7 4 7",key:"jkujk7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ef=Ee("Languages",[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K1=Ee("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rr=Ee("ListChecks",[["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"m3 7 2 2 4-4",key:"1obspn"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sk=Ee("ListOrdered",[["path",{d:"M10 12h11",key:"6m4ad9"}],["path",{d:"M10 18h11",key:"11hvi2"}],["path",{d:"M10 6h11",key:"c7qv1k"}],["path",{d:"M4 10h2",key:"16xx2s"}],["path",{d:"M4 6h1v4",key:"cnovpq"}],["path",{d:"M6 18H4c0-1 2-2 2-3s-1-1.5-2-1",key:"m9a95d"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ck=Ee("List",[["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 18h.01",key:"1tta3j"}],["path",{d:"M3 6h.01",key:"1rqtza"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 18h13",key:"1lx6n3"}],["path",{d:"M8 6h13",key:"ik3vkj"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rt=Ee("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ek=Ee("LockKeyhole",[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3",key:"1pqi11"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $k=Ee("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rk=Ee("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q1=Ee("MapPinned",[["path",{d:"M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0",key:"11u0oz"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["path",{d:"M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712",key:"q8zwxj"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zk=Ee("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wu=Ee("Newspaper",[["path",{d:"M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2",key:"7pis2x"}],["path",{d:"M18 14h-8",key:"sponae"}],["path",{d:"M15 18h-5",key:"95g1m2"}],["path",{d:"M10 6h8v4h-8V6Z",key:"smlsk5"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y1=Ee("PackageOpen",[["path",{d:"M12 22v-9",key:"x3hkom"}],["path",{d:"M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.655 1.655 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z",key:"2ntwy6"}],["path",{d:"M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13",key:"1pmm1c"}],["path",{d:"M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.636 1.636 0 0 0 1.63 0z",key:"12ttoo"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rc=Ee("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const an=Ee("Pencil",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ls=Ee("PiggyBank",[["path",{d:"M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2V5z",key:"1ivx2i"}],["path",{d:"M2 9v1c0 1.1.9 2 2 2h1",key:"nm575m"}],["path",{d:"M16 11h.01",key:"xkw8gn"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zc=Ee("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yt=Ee("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pk=Ee("PowerOff",[["path",{d:"M18.36 6.64A9 9 0 0 1 20.77 15",key:"dxknvb"}],["path",{d:"M6.16 6.16a9 9 0 1 0 12.68 12.68",key:"1x7qb5"}],["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nk=Ee("QrCode",[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pc=Ee("Receipt",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",key:"1h4pet"}],["path",{d:"M12 17.5v-11",key:"1jc1ny"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tf=Ee("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ak=Ee("Repeat",[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dk=Ee("Route",[["circle",{cx:"6",cy:"19",r:"3",key:"1kj8tv"}],["path",{d:"M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15",key:"1d8sl"}],["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ws=Ee("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J1=Ee("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mk=Ee("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg=Ee("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tk=Ee("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X1=Ee("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rf=Ee("SquareCheckBig",[["path",{d:"M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5",key:"1uzm8b"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fk=Ee("Strikethrough",[["path",{d:"M16 4H9a3 3 0 0 0-2.83 4",key:"43sutm"}],["path",{d:"M14 12a4 4 0 0 1 0 8H6",key:"nlfj13"}],["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lk=Ee("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cs=Ee("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ok=Ee("ThumbsUp",[["path",{d:"M7 10v12",key:"1qc93n"}],["path",{d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z",key:"emmmcr"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rr=Ee("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const us=Ee("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ik=Ee("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bk=Ee("Underline",[["path",{d:"M6 4v6a6 6 0 0 0 12 0V4",key:"9kb039"}],["line",{x1:"4",x2:"20",y1:"20",y2:"20",key:"nun2al"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qk=Ee("UserRound",[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uk=Ee("Video",[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bi=Ee("Wallet",[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mr=Ee("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Wc=$i`
  from { opacity: 0; transform: translateY(-6px); }
  to { opacity: 1; transform: translateY(0); }
`,Hk=h.div`
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
  animation: ${Wc} .2s ease-out;
  color: var(--text);
  background: ${({$variant:t})=>t==="error"?"var(--error-soft)":t==="success"?"var(--success-soft)":"var(--info-soft)"};
  border-color: ${({$variant:t})=>t==="error"?"var(--error-border)":t==="success"?"var(--success-border)":"var(--info-border)"};

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
  @media (max-width: 639px) {
    grid-template-columns: 36px minmax(0, 1fr) 30px;
    gap: 10px;
    padding: 13px;
  }
`,Vk=h.span`
  display: grid;
  width: 42px;
  height: 42px;
  place-items: center;
  border-radius: var(--radius-lg);
  color: ${({$variant:t})=>t==="error"?"var(--error)":t==="success"?"var(--success)":"var(--info)"};
  background: var(--surface);

  svg { width: 21px; height: 21px; }
  @media (max-width: 639px) { width: 36px; height: 36px; }
`,Wk=h.div`
  min-width: 0;
  padding-top: 1px;
  strong { display: block; margin-bottom: 4px; font-size: 14px; line-height: 1.4; }
  p { margin: 0; color: var(--muted); font-size: 13px; line-height: 1.55; overflow-wrap: anywhere; }
`,Af=h.button`
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
`,Gk=h.div`
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
  border: 1px solid ${({$variant:t})=>t==="success"?"var(--success-border)":t==="error"?"var(--error-border)":"var(--info-border)"};
  border-radius: var(--radius-xl);
  color: var(--text);
  background: ${({$variant:t})=>t==="success"?"var(--success-soft)":t==="error"?"var(--error-soft)":"var(--info-soft)"};
  box-shadow: 0 22px 70px rgba(20, 38, 66, .25);
  transform: translateX(-50%);
  animation: ${Wc} .25s ease-out;
  strong { display: block; font-size: 15px; line-height: 1.35; }
  p { margin: 4px 0 0; color: var(--muted); font-size: 13px; line-height: 1.45; }
  @media (max-width: 639px) { grid-template-columns: 40px minmax(0, 1fr) 30px; gap: 10px; padding: 15px; }
`,Kk=h.span`
  display: grid; width: 48px; height: 48px; place-items: center; border-radius: var(--radius-xl);
  color: ${({$variant:t})=>t==="success"?"var(--success)":t==="error"?"var(--error)":"var(--info)"};
  background: var(--surface);
  svg { width: 25px; height: 25px; }
  @media (max-width: 639px) { width: 40px; height: 40px; border-radius: var(--radius-lg); }
`,Z1={error:hk,success:nn,info:_k};function ey({variant:t,title:a,message:s,onDismiss:l}){const[c,u]=x.useState(!1);if(c)return null;const m=Z1[t];function f(){u(!0),l==null||l()}return e.jsxs(Hk,{$variant:t,role:t==="error"?"alert":"status","aria-live":t==="error"?"assertive":"polite",children:[e.jsx(Vk,{$variant:t,children:e.jsx(m,{"aria-hidden":"true"})}),e.jsxs(Wk,{children:[e.jsx("strong",{children:a}),e.jsx("p",{children:s})]}),l&&e.jsx(Af,{type:"button",onClick:f,"aria-label":"Dispensar aviso",children:e.jsx(mr,{"aria-hidden":"true"})})]})}function ty({variant:t,title:a,message:s,onDismiss:l}){const c=Z1[t];return e.jsxs(Gk,{$variant:t,role:t==="error"?"alert":"status","aria-live":t==="error"?"assertive":"polite",children:[e.jsx(Kk,{$variant:t,children:e.jsx(c,{"aria-hidden":"true"})}),e.jsxs("div",{children:[e.jsx("strong",{children:a}),e.jsx("p",{children:s})]}),l&&e.jsx(Af,{type:"button",onClick:l,"aria-label":"Fechar aviso",children:e.jsx(mr,{"aria-hidden":"true"})})]})}const Qk=h.div`
  position: fixed; z-index: 2100; top: 50%; left: 50%; display: grid; grid-template-columns: 76px minmax(0, 1fr) 30px;
  align-items: center; gap: 15px; width: min(440px, calc(100vw - 32px)); padding: 20px;
  border: 1px solid var(--success-border); border-radius: var(--radius-xl); color: var(--text); background: var(--surface);
  box-shadow: 0 24px 80px var(--shadow); transform: translate(-50%, -50%); animation: ${Wc} .3s ease-out;
  strong { display: block; color: var(--success); font-size: 17px; } p { margin: 5px 0 0; color: var(--muted); font-size: 13px; line-height: 1.45; }
  @media (prefers-reduced-motion: reduce) { animation: none; }
`,Yk=h.div`
  position: relative; display: grid; width: 76px; height: 76px; place-items: center; color: var(--success);
  border: 5px solid var(--surface); border-radius: 50%; background: var(--success-soft);
  box-shadow: 0 8px 18px var(--shadow); animation: ${Wc} .45s ease-out both;
  svg { width: 39px; height: 39px; stroke-width: 2.5; }
`;function Jk({message:t,onDismiss:a}){return e.jsxs(Qk,{role:"status","aria-live":"polite",children:[e.jsxs(Yk,{children:[e.jsx(X1,{size:18,style:{position:"absolute",top:-12,right:-5}}),e.jsx(Ok,{})]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Mandou bem!"}),e.jsx("p",{children:t})]}),a&&e.jsx(Af,{type:"button",onClick:a,"aria-label":"Fechar comemoração",children:e.jsx(mr,{"aria-hidden":"true"})})]})}var Gc=Mv();const Xk=h.div`
  min-height: 100vh; min-height: 100dvh; display: flex; background: var(--page-bg); color: var(--text);
  @media (max-width: 639px) { display: block; }
`,Zk=h.aside`
  position: sticky; top: 0;
  width: ${({$collapsed:t})=>t?"84px":"252px"};
  height: 100vh; height: 100dvh;
  flex: 0 0 ${({$collapsed:t})=>t?"84px":"252px"};
  overflow-x: hidden; overflow-y: auto; overscroll-behavior: contain;
  scrollbar-width: thin; scrollbar-color: var(--scroll-thumb) transparent;
  background: var(--surface); color: var(--text);
  border-right: 1px solid var(--border);
  padding: 24px 14px; display: flex; flex-direction: column; gap: 20px;
  transition: width var(--transition-normal), flex-basis var(--transition-normal), background var(--transition-normal);
  @media (max-width: 639px) { position: static; width: 100%; height: auto; padding: 14px; gap: 12px; }
`,eS=h.div`
  display: flex; align-items: center; gap: 11px; padding: 0 12px; color: var(--text);
  font-weight: 800; font-size: 20px; letter-spacing: -.4px;
  > svg { width: 30px; height: 30px; flex: 0 0 auto; color: var(--primary); }
  .brand-copy { display: grid; gap: 2px; min-width: 0; }
  .brand-copy strong { font: inherit; }
  .brand-copy small { color: var(--muted); font-size: 11px; font-weight: 500; letter-spacing: 0; line-height: 1.35; }
  ${({$collapsed:t})=>t&&ea`justify-content: center; padding: 0; .brand-copy { display: none; }`}
  @media (max-width: 639px) { padding: 0 8px; .brand-copy { display: grid; } }
`,tS=h.nav`
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
`,Nc=h.button`
  position: relative; display: flex; align-items: center; gap: 13px; width: 100%; min-height: 44px; border: 0; border-radius: var(--radius-md);
  padding: 11px 14px; color: var(--muted); background: transparent; text-align: left; font-size: 14px; font-weight: 600;
  transition: color .15s ease, background .15s ease, transform .15s ease;
  &::before { position: absolute; top: 10px; bottom: 10px; left: 0; width: 3px; border-radius: 0 3px 3px 0; background: transparent; content: ''; }
  &:hover { color: var(--primary-strong); background: var(--primary-soft); }
  ${({$active:t})=>t&&ea`background: var(--primary-soft); color: var(--primary-strong); &::before { background: var(--primary); }`}
  svg { width: 20px; height: 20px; flex-shrink: 0; }
  ${({$collapsed:t})=>t&&ea`justify-content: center; padding: 11px 8px; gap: 0; .nav-label { display: none; }`}
  @media (max-width: 639px) {
    width: auto;
    min-height: 44px;
    flex: 0 0 auto;
    scroll-snap-align: start;
    white-space: nowrap;
    padding: 10px 12px;
    ${({$collapsed:t})=>t&&ea`justify-content: flex-start; gap: 10px; .nav-label { display: inline; }`}
  }
`,rS=h.main`flex: 1; min-width: 0; min-height: 100vh;`,nS=h.header`
  position: sticky; top: 0; z-index: 5; height: 70px; background: color-mix(in srgb, var(--surface) 90%, transparent); backdrop-filter: blur(14px); border-bottom: 1px solid var(--border);
  display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, auto) auto auto; align-items: center; gap: clamp(10px, 1.5vw, 20px); padding: 0 clamp(18px, 2.4vw, 36px);
  > strong { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  @media (max-width: 639px) {
    height: auto; min-height: 58px; grid-template-columns: minmax(0, 1fr) auto auto; gap: 8px; padding: 8px 14px;
    > span:first-child { display: none; }
  }
`,aS=h.div`width: 100%; max-width: 1600px; margin: 0 auto; padding: clamp(20px, 2.4vw, 36px);
  @media (max-width: 1023px) { padding: 24px; }
  @media (max-width: 639px) { padding: 18px 14px 28px; }
`,Mr=h.div`
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
`,_s=h.section`
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
`,Df=h.div`
  display: grid; grid-template-columns: minmax(0, 1.45fr) minmax(300px, .9fr); gap: 20px; align-items: start;
  @media (max-width: 1023px) { grid-template-columns: 1fr; }
`,Ue=h.section`
  min-width: 0; background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 24px;
  box-shadow: var(--shadow-raised);
  @media (max-width: 639px) { padding: 17px; }
`,Fe=h.h2`font-size: 18px; line-height: 1.35; margin: 0 0 20px; display: flex; align-items: center; gap: 10px; color: var(--text); letter-spacing: -.2px;`,X=h.label`
  display: grid; gap: 8px; margin-bottom: 18px; font-size: 14px; font-weight: 600; color: var(--text);
  small { color: var(--muted); font-weight: 400; }
  input, textarea, select { width: 100%; min-height: 44px; border: 1px solid var(--border); border-radius: var(--radius-md); padding: 11px 12px; outline: none; color: var(--text); background: var(--surface); font-size: 14px; font-weight: 400; transition: border-color .15s ease, box-shadow .15s ease; }
  input:focus, textarea:focus, select:focus { border-color: var(--primary); box-shadow: 0 0 0 4px var(--focus); }
  textarea { resize: vertical; min-height: 90px; }
`,ry=h.div`display: grid; grid-template-columns: 1fr 1fr; gap: 14px; @media (max-width: 639px) { grid-template-columns: 1fr; gap: 0; }`,Mf=h.div`background: var(--surface-raised); padding: 13px; border-radius: var(--radius-md); display: grid; gap: 10px; margin-bottom: 16px;`,Tf=h.div`display: flex; gap: 9px; align-items: center;`,Ff=h.span`width: 30px; height: 30px; display: grid; place-items: center; flex-shrink: 0; border-radius: 50%; background: var(--border); color: var(--text); font-size: 12px; font-weight: 800;`,Ac=h.input`min-width: 0; flex: 1; border: 1px solid var(--border); border-radius: var(--radius-md); color: var(--text); background: var(--surface-raised); padding: 11px 12px;`,pe=h.button`
  display: inline-flex; align-items: center; justify-content: center; gap: 8px; min-height: 44px; border-radius: var(--radius-md); padding: 10px 16px; font-size: 14px; line-height: 1.3; font-weight: 600; border: 1px solid transparent; transition: transform var(--transition-fast), box-shadow var(--transition-fast), background var(--transition-fast), border-color var(--transition-fast);
  &:hover:not(:disabled) { transform: translateY(-1px); }
  ${({$variant:t})=>t==="primary"&&ea`background: var(--primary); color: var(--primary-contrast); &:hover:not(:disabled) { background: var(--primary-strong); }`}
  ${({$variant:t})=>(!t||t==="secondary")&&ea`background: var(--surface); color: var(--text); border-color: var(--border); &:hover:not(:disabled) { background: var(--surface-raised); }`}
  ${({$variant:t})=>t==="danger"&&ea`background: var(--error-soft); color: var(--error); border-color: var(--error-border); &:hover:not(:disabled) { filter: brightness(.97); }`}
  svg { width: 17px; height: 17px; }
`,iS=h.div`display: flex; gap: 10px; flex-wrap: wrap;`,Lf=h.div`display: flex; justify-content: flex-end; gap: 10px; border-top: 1px solid var(--border); padding-top: 18px; margin-top: 22px;`,Of=h.div`background: var(--surface-raised); padding: 17px; border-radius: var(--radius-md); margin-bottom: 22px;`,If=h.div`display: flex; align-items: center; gap: 12px; font-weight: 800; font-size: 16px; margin-bottom: 14px; svg { color: var(--primary); }`,Bf=h.div`display: grid; gap: 11px; color: var(--muted); font-size: 13px; margin-top: 15px;`,Dr=h.span`
  display: inline-flex; border-radius: var(--radius-full); padding: 5px 9px; font-size: 11px; font-weight: 700;
  color: ${({$done:t})=>t?"var(--success)":"var(--primary-strong)"};
  background: ${({$done:t})=>t?"var(--success-soft)":"color-mix(in srgb, var(--primary) 16%, var(--surface))"};
`,ny=h.div`display: flex; align-items: center; gap: 10px; padding: 13px 0; border-bottom: 1px solid var(--border); &:last-child { border-bottom: 0; }
  input { width: 17px; height: 17px; accent-color: var(--primary); }
  span { flex: 1; font-size: 13px; }
`,sS=h.div`display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 14px; margin-bottom: 20px; @media (max-width: 639px) { grid-template-columns: 1fr; }`,io=h(Ue)`padding: 19px; p { margin: 0 0 10px; color: var(--muted); font-size: 13px; } strong { font-size: 28px; }`,oS=h.div`height: 7px; background: var(--border); border-radius: var(--radius-full); overflow: hidden; margin-top: 13px; div { height: 100%; background: var(--primary); border-radius: inherit; transition: width .2s; }`;h(Ue)`margin-bottom: 15px;`;h.div`display: flex; justify-content: space-between; gap: 12px; align-items: flex-start; h3 { margin: 0 0 6px; font-size: 18px; } p { margin: 0; color: var(--muted); font-size: 13px; line-height: 1.5; }`;h.div`min-width: 0; overflow-x: auto; overscroll-behavior-x: contain; scrollbar-width: thin;`;h.table`
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
`;const Zn=h.p`color: var(--muted); font-size: 13px;`,Xe=h.div`text-align: center; padding: 38px 18px; color: var(--muted); svg { margin-bottom: 10px; color: var(--primary); } h3 { color: var(--text); margin: 0 0 7px; } p { margin: 0; font-size: 13px; }`,sn=h.select`min-height: 42px; padding: 9px 12px; border: 1px solid var(--border); border-radius: var(--radius-md); background: var(--surface); color: var(--text);`,ay=h.div`
  display: flex; flex-wrap: wrap; gap: 10px; align-items: center;
  @media (max-width: 639px) { width: 100%; }
`;h.span`
  display: inline-flex; align-items: center; border-radius: var(--radius-full); padding: 5px 9px;
  font-size: 11px; font-weight: 700; white-space: nowrap;
  color: ${({$priority:t})=>t==="high"?"var(--error)":t==="medium"?"var(--warning)":"var(--success)"};
  background: ${({$priority:t})=>t==="high"?"var(--error-soft)":t==="medium"?"var(--warning-soft)":"var(--success-soft)"};
`;h.div`display: grid; grid-template-columns: minmax(0,1fr) auto auto; align-items: center; gap: 14px; padding: 15px 0; border-bottom: 1px solid var(--border); &:last-child { border-bottom: 0; } @media (max-width: 639px) { grid-template-columns: 1fr auto; }`;const lS=$i`
  from { opacity: 0; transform: translateY(8px) scale(.98); }
  to { opacity: 1; transform: translateY(0) scale(1); }
`,cS=h.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: grid;
  place-items: center;
  padding: 20px;
  background: rgba(17, 29, 48, .56);
  backdrop-filter: blur(4px);
`,dS=h.section`
  width: min(100%, 440px);
  padding: 26px;
  border: 1px solid rgba(255, 255, 255, .75);
  border-radius: var(--radius-xl);
  color: var(--text);
  background: var(--surface);
  border-color: var(--border);
  box-shadow: 0 24px 80px var(--shadow);
  animation: ${lS} .18s ease-out;

  @media (prefers-reduced-motion: reduce) { animation: none; }
  @media (max-width: 639px) { padding: 21px; border-radius: var(--radius-lg); }
`,uS=h.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
`,pS=h.div`
  display: grid;
  width: 52px;
  height: 52px;
  flex: 0 0 52px;
  place-items: center;
  border-radius: var(--radius-lg);
  color: var(--error);
  background: var(--error-soft);
  svg { width: 25px; height: 25px; }
`,fS=h.button`
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
`,hS=h.h2`
  margin: 20px 0 8px;
  color: var(--text);
  font-size: 21px;
  letter-spacing: -.35px;
`,mS=h.p`
  margin: 0;
  color: var(--muted);
  font-size: 14px;
  line-height: 1.65;
  overflow-wrap: anywhere;
`,xS=h.div`
  margin-top: 16px;
  padding: 11px 13px;
  border: 1px solid var(--warning-border);
  border-radius: var(--radius-md);
  color: var(--warning);
  background: var(--warning-soft);
  font-size: 12px;
  line-height: 1.5;
`,gS=h.div`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 24px;
`,vS=h(pe)`
  background: var(--error);
  color: var(--error-contrast);
  &:hover:not(:disabled) { filter: brightness(.9); }
`;function Kc({open:t,title:a,description:s,confirmLabel:l="Excluir tarefa",busy:c=!1,onCancel:u,onConfirm:m}){const f=x.useRef(null);return x.useEffect(()=>{var S;if(!t)return;const g=document.body.style.overflow,w=document.activeElement instanceof HTMLElement?document.activeElement:null;document.body.style.overflow="hidden",(S=f.current)==null||S.focus();function b(_){var V,$;if(_.key==="Escape"&&!c&&u(),_.key!=="Tab")return;const R=(V=f.current)==null?void 0:V.querySelectorAll('button:not(:disabled), [href], input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])');if(!(R!=null&&R.length)){_.preventDefault(),($=f.current)==null||$.focus();return}const M=R[0],N=R[R.length-1];_.shiftKey&&(document.activeElement===M||document.activeElement===f.current)?(_.preventDefault(),N.focus()):!_.shiftKey&&document.activeElement===N&&(_.preventDefault(),M.focus())}return window.addEventListener("keydown",b),()=>{document.body.style.overflow=g,window.removeEventListener("keydown",b),w==null||w.focus()}},[t,c,u]),t?Gc.createPortal(e.jsx(cS,{onMouseDown:g=>{g.target===g.currentTarget&&!c&&u()},children:e.jsxs(dS,{ref:f,tabIndex:-1,role:"alertdialog","aria-modal":"true","aria-labelledby":"confirm-dialog-title","aria-describedby":"confirm-dialog-description",children:[e.jsxs(uS,{children:[e.jsx(pS,{children:e.jsx(Ik,{"aria-hidden":"true"})}),e.jsx(fS,{type:"button",onClick:u,disabled:c,"aria-label":"Fechar confirmação",children:e.jsx(mr,{"aria-hidden":"true"})})]}),e.jsx(hS,{id:"confirm-dialog-title",children:a}),e.jsx(mS,{id:"confirm-dialog-description",children:s}),e.jsx(xS,{children:"Essa ação não pode ser desfeita."}),e.jsxs(gS,{children:[e.jsx(pe,{type:"button",onClick:u,disabled:c,children:"Cancelar"}),e.jsxs(vS,{type:"button",onClick:m,disabled:c,children:[c?e.jsx(rt,{className:"spin"}):e.jsx(Rr,{}),c?"Excluindo...":l]})]})]})}),document.body):null}const yS=$i`
  from { opacity: 0; transform: translateY(8px) scale(.99); }
  to { opacity: 1; transform: translateY(0) scale(1); }
`,jS=h.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: grid;
  place-items: center;
  padding: 16px;
  background: rgba(19, 31, 51, .48);
  backdrop-filter: blur(5px);
`,bS=h.section`
  width: min(700px, calc(100vw - 32px));
  max-height: min(88vh, 760px);
  overflow-y: auto;
  padding: 24px;
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  color: var(--text);
  background: var(--surface);
  box-shadow: 0 24px 70px var(--shadow);
  animation: ${yS} var(--transition-normal);
  &:focus { outline: none; }
  @media (prefers-reduced-motion: reduce) { animation: none; }
  @media (max-width: 639px) { width: calc(100vw - 20px); padding: 18px; max-height: 92vh; }
`,wS=h.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 14px;
  h2 { display: flex; align-items: center; gap: 9px; margin: 0; color: var(--text); font-size: 18px; }
`,_S=h.button`
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
`;function xs({open:t,title:a,icon:s,busy:l=!1,onClose:c,children:u}){const m=x.useId(),f=x.useRef(null);return x.useEffect(()=>{var S;if(!t)return;const g=document.activeElement instanceof HTMLElement?document.activeElement:null,w=_=>{var V,$;if(_.key==="Escape"&&!l&&c(),_.key!=="Tab")return;const R=(V=f.current)==null?void 0:V.querySelectorAll('button:not(:disabled), [href], input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])');if(!(R!=null&&R.length)){_.preventDefault(),($=f.current)==null||$.focus();return}const M=R[0],N=R[R.length-1];_.shiftKey&&(document.activeElement===M||document.activeElement===f.current)?(_.preventDefault(),N.focus()):!_.shiftKey&&document.activeElement===N&&(_.preventDefault(),M.focus())},b=document.body.style.overflow;return document.addEventListener("keydown",w),document.body.style.overflow="hidden",(S=f.current)==null||S.focus(),()=>{document.removeEventListener("keydown",w),document.body.style.overflow=b,g==null||g.focus()}},[t,l,c]),t?Gc.createPortal(e.jsx(jS,{role:"presentation",onMouseDown:g=>{g.target===g.currentTarget&&!l&&c()},children:e.jsxs(bS,{ref:f,tabIndex:-1,role:"dialog","aria-modal":"true","aria-labelledby":m,children:[e.jsxs(wS,{children:[e.jsxs("h2",{id:m,children:[s,a]}),e.jsx(_S,{type:"button","aria-label":"Fechar janela",title:"Fechar (Esc)",onClick:c,disabled:l,children:e.jsx(mr,{size:18})})]}),u]})}),document.body):null}const kS=h.div`
  position: fixed;
  right: 24px;
  bottom: 24px;
  z-index: 20;
  @media (max-width: 520px) { right: 14px; bottom: 14px; }
`,SS=h.button`
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
`,CS=h.section`
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
`,ES=h.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 16px 17px;
  color: var(--primary-contrast);
  background: var(--primary);
  h2 { margin: 0; font-size: 15px; }
  p { margin: 3px 0 0; color: color-mix(in srgb, var(--primary-contrast) 76%, var(--primary)); font-size: 11px; }
`,$S=h.div`
  display: flex;
  align-items: center;
  gap: 10px;
  > span { display: grid; width: 34px; height: 34px; place-items: center; border-radius: 10px; background: rgba(255,255,255,.16); }
  svg { width: 18px; height: 18px; }
`,RS=h.button`
  display: grid; width: 30px; height: 30px; place-items: center; border: 0; border-radius: 8px; color: var(--primary-contrast); background: color-mix(in srgb, var(--primary-contrast) 14%, var(--primary)); cursor: pointer;
  &:hover { background: color-mix(in srgb, var(--primary-contrast) 22%, var(--primary)); }
  svg { width: 17px; height: 17px; }
`,zS=h.div`
  display: grid;
  align-content: start;
  gap: 11px;
  overflow-y: auto;
  padding: 16px;
  background: var(--surface-raised);
`,Gu=h.div`
  max-width: 88%;
  justify-self: ${({$role:t})=>t==="user"?"end":"start"};
  padding: 10px 12px;
  border: 1px solid ${({$role:t})=>t==="user"?"color-mix(in srgb, var(--primary) 36%, var(--border))":"var(--border)"};
  border-radius: ${({$role:t})=>t==="user"?"14px 14px 4px 14px":"14px 14px 14px 4px"};
  color: ${({$role:t})=>t==="user"?"var(--primary-strong)":"var(--text)"};
  background: ${({$role:t})=>t==="user"?"color-mix(in srgb, var(--primary) 16%, var(--surface))":"var(--surface)"};
  font-size: 12px;
  line-height: 1.55;
  white-space: pre-wrap;
`,PS=h.div`
  display: flex;
  gap: 6px;
  overflow-x: auto;
  padding: 9px 12px 0;
  button { flex: 0 0 auto; padding: 7px 9px; border: 1px solid var(--border); border-radius: 999px; color: var(--muted); background: var(--surface); font-size: 10px; cursor: pointer; &:hover { color: var(--primary); border-color: var(--primary); background: var(--surface-raised); } }
`,NS=h.form`
  display: flex;
  align-items: flex-end;
  gap: 8px;
  padding: 12px;
  background: var(--surface);
  textarea { min-height: 42px; max-height: 100px; flex: 1; resize: none; padding: 11px 12px; border: 1px solid var(--border); border-radius: 11px; outline: none; color: var(--text); background: var(--surface-raised); font-size: 12px; &:focus { border-color: var(--primary); box-shadow: 0 0 0 3px var(--focus); } }
  button { display: grid; width: 42px; height: 42px; flex: 0 0 auto; place-items: center; border: 0; border-radius: 11px; color: var(--primary-contrast); background: var(--primary); cursor: pointer; &:disabled { opacity: .55; cursor: not-allowed; } svg { width: 17px; height: 17px; } }
`,AS=h.div`
  display: grid; place-items: center; gap: 8px; min-height: 100%; padding: 28px; text-align: center; color: var(--muted); font-size: 12px;
  svg { color: var(--primary); }
  strong { color: var(--text); font-size: 14px; }
  p { margin: 0; line-height: 1.5; }
`;function DS(){const[t,a]=x.useState(!1),[s,l]=x.useState(""),[c,u]=x.useState(!1),[m,f]=x.useState(""),[g,w]=x.useState([]);async function b(_){var N,V;_.preventDefault();const R=s.trim();if(!R||c)return;const M=[...g,{role:"user",content:R}];w(M),l(""),f(""),u(!0);try{const $=await O_(R,g);w([...M,{role:"assistant",content:$||"Não consegui gerar uma resposta agora."}])}catch($){f(((V=(N=$==null?void 0:$.response)==null?void 0:N.data)==null?void 0:V.error)||"O assistente não está disponível no momento.")}finally{u(!1)}}function S(_){l(_),a(!0)}return e.jsx(kS,{children:t?e.jsxs(CS,{"aria-label":"Assistente de produtividade e estudos",children:[e.jsxs(ES,{children:[e.jsxs($S,{children:[e.jsx("span",{children:e.jsx(Zx,{})}),e.jsxs("div",{children:[e.jsx("h2",{children:"Assistente inteligente"}),e.jsx("p",{children:"Produtividade e estudos"})]})]}),e.jsx(RS,{type:"button","aria-label":"Fechar assistente",onClick:()=>a(!1),children:e.jsx(mr,{})})]}),e.jsxs(zS,{"aria-live":"polite",children:[g.length===0?e.jsxs(AS,{children:[e.jsx(X1,{size:28}),e.jsx("strong",{children:"Como posso ajudar?"}),e.jsx("p",{children:"Posso montar planos de estudo, organizar prioridades, sugerir rotinas e ajudar você a sair da procrastinação."})]}):g.map((_,R)=>e.jsx(Gu,{$role:_.role,children:_.content},`${_.role}-${R}`)),c&&e.jsx(Gu,{$role:"assistant",children:"Pensando..."}),m&&e.jsx(Gu,{$role:"assistant",children:m})]}),e.jsxs(PS,{children:[e.jsxs("button",{type:"button",onClick:()=>S("Monte um plano de estudos para esta semana"),children:[e.jsx(Zr,{size:12})," Plano de estudos"]}),e.jsxs("button",{type:"button",onClick:()=>S("Ajude-me a organizar minhas prioridades de hoje"),children:[e.jsx(jk,{size:12})," Prioridades de hoje"]})]}),e.jsxs(NS,{onSubmit:b,children:[e.jsx("textarea",{"aria-label":"Mensagem para o assistente",placeholder:"Pergunte sobre produtividade ou estudos...",value:s,onChange:_=>l(_.target.value),onKeyDown:_=>{var R;_.key==="Enter"&&!_.shiftKey&&(_.preventDefault(),(R=_.currentTarget.form)==null||R.requestSubmit())}}),e.jsx("button",{type:"submit","aria-label":"Enviar mensagem",disabled:!s.trim()||c,children:e.jsx(Mk,{})})]})]}):e.jsxs(SS,{type:"button",onClick:()=>a(!0),children:[e.jsx(Zx,{}),"Assistente IA"]})})}const iy=x.createContext(null),rg="task-manager-theme";function MS({children:t}){const[a,s]=x.useState(()=>localStorage.getItem(rg)==="dark"?"dark":"light");x.useLayoutEffect(()=>{var c;document.documentElement.dataset.theme=a,(c=document.querySelector('meta[name="theme-color"]'))==null||c.setAttribute("content",a==="dark"?"#0B1120":"#F8FAFC"),localStorage.setItem(rg,a)},[a]);function l(){s(c=>c==="light"?"dark":"light")}return e.jsx(iy.Provider,{value:{mode:a,toggleTheme:l},children:t})}function TS(){const t=x.useContext(iy);if(!t)throw new Error("useAppTheme must be used within AppThemeProvider");return t}const FS=h.button`
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
`;function nf(){const{mode:t,toggleTheme:a}=TS(),s=t==="dark"?"Ativar modo claro":"Ativar modo escuro",l=t==="dark"?Lk:zk;return e.jsxs(FS,{type:"button",onClick:a,"aria-label":s,"aria-pressed":t==="dark",title:s,children:[e.jsx(l,{"aria-hidden":"true"}),t==="dark"?"Modo claro":"Modo escuro"]})}const gc=[{id:"tasks",label:"Tarefas",path:"/tasks",page:"list",icon:rr},{id:"planning",label:"Planejamento",path:"/planning",page:"planning",icon:Jp},{id:"goals",label:"Objetivos",path:"/goals",page:"goals",icon:Xp},{id:"schedule",label:"Agenda",path:"/schedule",page:"schedule",icon:hi},{id:"study-resources",label:"Biblioteca",path:"/study-resources",page:"study-resources",icon:Zr},{id:"finances",label:"Finanças",path:"/finances",page:"finances",icon:Pf},{id:"english-study",label:"Inglês",path:"/english-study",page:"english-study",icon:ef},{id:"expenses",label:"Despesas",path:"/expenses",page:"expenses",icon:Pc},{id:"fuel-calculator",label:"Calculadora de combustível",path:"/fuel-calculator",page:"fuel-calculator",icon:$c},{id:"daily-routes",label:"Percursos do dia",path:"/daily-routes",page:"daily-routes",icon:Q1},{id:"dividends",label:"Dividendos",path:"/dividends",page:"dividends",icon:ls},{id:"fixed-income",label:"Renda fixa",path:"/fixed-income",page:"fixed-income",icon:ls},{id:"opportunities",label:"Mercado e notícias",path:"/opportunities",page:"opportunities",icon:Zp}],sy="task-manager-menu-order",oy="task-manager-sidebar-collapsed",Ku=new Set(["finances","expenses","dividends","fixed-income","opportunities"]),LS=h.span`
  color: var(--muted);
  font-size: 13px;
`,OS=h.strong`
  color: var(--text);
  font-size: 13px;
  font-weight: 700;
`,IS=h.button`
  display: inline-flex; align-items: center; gap: 7px; min-height: 44px; padding: 8px 12px; border: 1px solid var(--error-border); border-radius: var(--radius-md);
  color: var(--error); background: var(--error-soft); font-size: 12px; font-weight: 700; cursor: pointer; transition: background var(--transition-fast), border-color var(--transition-fast), transform var(--transition-fast);
  &:hover { border-color: var(--error); filter: brightness(.97); transform: translateY(-1px); }
  svg { width: 16px; height: 16px; }
  @media (max-width: 639px) { padding: 8px 10px; font-size: 0; svg { width: 17px; height: 17px; } }
`,BS=h.button`
  display: inline-flex; align-items: center; justify-content: ${({$collapsed:t})=>t?"center":"flex-end"};
  align-self: ${({$collapsed:t})=>t?"stretch":"flex-end"};
  gap: 7px; min-height: 40px; padding: 6px 9px; border: 1px solid var(--border); border-radius: var(--radius-md);
  color: var(--muted); background: var(--surface); font-size: 11px; font-weight: 600;
  transition: color var(--transition-fast), background var(--transition-fast), border-color var(--transition-fast);
  &:hover { color: var(--primary-strong); border-color: var(--primary); background: var(--primary-soft); }
  svg { width: 16px; height: 16px; }
  .collapse-label { display: ${({$collapsed:t})=>t?"none":"inline"}; }
  @media (max-width: 639px) { display: none; }
`,qS=h.div`
  display: grid;
  position: relative;
  gap: 5px;
  min-width: 0;
`,US=h(Nc)`
  justify-content: space-between;
  &[aria-expanded='true'] { color: var(--primary-strong); background: var(--primary-soft); }
  .finance-chevron { width: 15px; height: 15px; flex: 0 0 auto; transition: transform .15s ease; }
  ${({$collapsed:t})=>t&&"justify-content: center; .nav-label { display: none; } .finance-chevron { display: none; }"}
  @media (max-width: 639px) { justify-content: space-between; ${({$collapsed:t})=>t&&".nav-label { display: inline-flex; } .finance-chevron { display: block; }"} }
`,HS=h.div`
  display: grid;
  gap: 4px;
  padding-left: 10px;
  margin-left: 14px;
  border-left: 1px solid var(--border);
  ${({$collapsed:t})=>t&&"padding: 0; margin: 0; border: 0;"}
  @media (max-width: 639px) { position: absolute; z-index: 10; top: calc(100% + 6px); left: 14px; min-width: 190px; padding: 8px; margin: 0; border: 1px solid var(--border); border-radius: var(--radius-md); background: var(--surface); box-shadow: var(--shadow-raised); }
`,VS=h(Nc)`
  gap: 10px;
  padding: 10px 12px;
  border-radius: var(--radius-md);
  font-size: 12px;
  svg { width: 16px; height: 16px; }
`,WS=h.p`
  margin: 0 0 15px;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.55;
`,GS=h.div`
  display: grid;
  gap: 8px;
`,KS=h.div`
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
`,QS=h.span`
  display: grid;
  width: 34px;
  height: 34px;
  place-items: center;
  border-radius: var(--radius-md);
  color: var(--primary-strong);
  background: color-mix(in srgb, var(--primary) 12%, var(--surface));
  svg { width: 17px; height: 17px; }
`,YS=h.strong`
  min-width: 0;
  color: var(--text);
  font-size: 13px;
  overflow-wrap: anywhere;
`,JS=h.span`
  padding: 5px 8px;
  border: 1px solid ${({$archived:t})=>t?"var(--border)":"var(--success-border)"};
  border-radius: var(--radius-full);
  color: ${({$archived:t})=>t?"var(--muted)":"var(--success)"};
  background: ${({$archived:t})=>t?"var(--surface)":"var(--success-soft)"};
  font-size: 10px;
  font-weight: 750;
  white-space: nowrap;
`,XS=h.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  min-height: 34px;
  padding: 6px 9px;
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  color: ${({$restore:t})=>t?"var(--primary-strong)":"var(--muted)"};
  background: var(--surface);
  font-size: 11px;
  font-weight: 750;
  cursor: pointer;
  &:hover:not(:disabled) {
    border-color: ${({$restore:t})=>t?"var(--primary)":"var(--success)"};
    color: ${({$restore:t})=>t?"var(--primary-strong)":"var(--success)"};
    background: ${({$restore:t})=>t?"color-mix(in srgb, var(--primary) 8%, var(--surface))":"var(--success-soft)"};
  }
  &:disabled { opacity: .5; cursor: not-allowed; }
  svg { width: 14px; height: 14px; }
`,ZS=h.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin-top: 14px;
  color: var(--muted);
  font-size: 11px;
  @media (max-width: 639px) { align-items: flex-start; flex-direction: column; }
`;function eC(){try{const t=JSON.parse(localStorage.getItem(sy)??"[]");return[...t.map(s=>gc.find(l=>l.id===s)).filter(Boolean),...gc.filter(s=>!t.includes(s.id))]}catch{return gc}}function tC(){try{return localStorage.getItem(oy)==="true"}catch{return!1}}function af(t){return`task-manager-archived-pages:${String(t)}`}function ng(t){try{const a=JSON.parse(localStorage.getItem(af(t))??"[]");return Array.isArray(a)?[...new Set(a.filter(s=>typeof s=="string"&&gc.some(l=>l.id===s)))]:[]}catch{return[]}}function rC({page:t,error:a,notice:s,children:l,onNavigate:c,user:u,onLogout:m,onDismissError:f,onDismissNotice:g,celebration:w,onDismissCelebration:b}){const[S,_]=x.useState(eC),[R,M]=x.useState(()=>ng(u.id)),[N,V]=x.useState(null),[$,j]=x.useState(!1),[A,O]=x.useState(tC),[ae,J]=x.useState(()=>Ku.has(t)),I=S.filter(K=>!R.includes(K.id)),ce=I.filter(K=>Ku.has(K.id)),C=S.filter(K=>K.id==="finances"?ce.length>0:K.id==="expenses"||K.id==="dividends"||K.id==="fixed-income"||K.id==="opportunities"?!1:!R.includes(K.id));x.useEffect(()=>{M(ng(u.id))},[u.id]),x.useEffect(()=>{Ku.has(t)&&J(!0)},[t]);function y(K,je){const ue=S.length-R.length;if(je&&ue<=1)return;const ye=je?[...new Set([...R,K.id])]:R.filter(z=>z!==K.id);M(ye);try{localStorage.setItem(af(u.id),JSON.stringify(ye))}catch{}const W=t===K.page||K.page==="study-resources"&&t==="study-resource-edit";if(je&&W){const z=S.find(k=>k.id!==K.id&&!ye.includes(k.id));z&&c(z.path)}}function q(){M([]);try{localStorage.removeItem(af(u.id))}catch{}}function F(){O(K=>{const je=!K;try{localStorage.setItem(oy,String(je))}catch{}return je})}function fe(K,je){V(je),K.dataTransfer.effectAllowed="move",K.dataTransfer.setData("text/plain",je)}function ge(K,je){K.preventDefault();const ue=K.dataTransfer.getData("text/plain")||N;!ue||ue===je||(_(ye=>{const W=[...ye],z=W.findIndex(ie=>ie.id===ue),k=W.findIndex(ie=>ie.id===je);if(z<0||k<0)return ye;const[se]=W.splice(z,1);return W.splice(k,0,se),localStorage.setItem(sy,JSON.stringify(W.map(ie=>ie.id))),W}),V(null))}function Ne(K,je=!1){const ue=K.icon,ye=je?VS:Nc,W=t===K.page||K.page==="study-resources"&&t==="study-resource-edit";return e.jsxs(ye,{$active:W,$collapsed:A,draggable:!0,title:A?K.label:"Arraste para mudar a posição","aria-label":je&&K.id==="finances"?"Finanças — visão geral":K.label,onDragStart:z=>fe(z,K.id),onDragOver:z=>z.preventDefault(),onDrop:z=>ge(z,K.id),onDragEnd:()=>V(null),style:{opacity:N===K.id?.45:1},"aria-current":t===K.page?"page":void 0,onClick:()=>c(K.path),children:[e.jsx(ue,{}),e.jsx("span",{className:"nav-label",children:je&&K.id==="finances"?"Visão geral":K.label})]},K.id)}return e.jsxs(Xk,{children:[e.jsxs(Zk,{$collapsed:A,children:[e.jsxs(eS,{$collapsed:A,children:[e.jsx(rf,{}),e.jsxs("span",{className:"brand-copy",children:[e.jsx("strong",{children:"Rumo"}),e.jsx("small",{children:"Organize hoje. Avance no seu ritmo."})]})]}),e.jsx(BS,{type:"button",$collapsed:A,"aria-label":A?"Expandir menu lateral":"Recolher menu lateral","aria-expanded":!A,"aria-controls":"primary-navigation",title:A?"Expandir menu":"Recolher menu",onClick:F,children:A?e.jsx(ms,{"aria-hidden":"true"}):e.jsxs(e.Fragment,{children:[e.jsx(Ao,{"aria-hidden":"true"}),e.jsx("span",{className:"collapse-label",children:"Recolher menu"})]})}),e.jsx(tS,{id:"primary-navigation","aria-label":"Navegação principal",children:C.map(K=>K.id!=="finances"?Ne(K):e.jsxs(qS,{children:[e.jsxs(US,{type:"button",$active:!1,$collapsed:A,"aria-expanded":ae,"aria-controls":"finance-subnav","aria-label":"Finanças",title:A?"Finanças":void 0,onClick:()=>J(je=>!je),children:[e.jsx(Pf,{}),e.jsx("span",{className:"nav-label",children:"Finanças"}),e.jsx(fk,{className:"finance-chevron","aria-hidden":"true",style:{transform:ae?"rotate(180deg)":void 0}})]}),ae&&e.jsx(HS,{id:"finance-subnav",$collapsed:A,children:ce.map(je=>Ne(je,!0))})]},"finance-group"))}),e.jsx("div",{style:{marginTop:"auto"},children:e.jsxs(Nc,{type:"button",$active:$,$collapsed:A,"aria-label":"Configurações",title:A?"Configurações":void 0,onClick:()=>j(!0),children:[e.jsx(tg,{}),e.jsx("span",{className:"nav-label",children:"Configurações"}),!A&&R.length>0&&e.jsx("span",{style:{marginLeft:"auto",fontSize:11},children:R.length})]})})]}),e.jsxs(rS,{children:[e.jsxs(nS,{children:[e.jsx(LS,{children:"Seu espaço de produtividade"}),e.jsxs(OS,{title:u.name||u.email,children:["Olá, ",u.name||u.email]}),e.jsx(nf,{}),e.jsxs(IS,{type:"button",onClick:m,title:"Sair da conta","aria-label":"Sair da conta",children:[e.jsx($k,{}),"Sair"]})]}),e.jsxs(aS,{children:[a&&e.jsx(ey,{variant:"error",title:"Não foi possível concluir",message:a,onDismiss:f},"error"),s&&e.jsx(ty,{variant:"success",title:"Ação concluída",message:s,onDismiss:g},"success"),w&&e.jsx(Jk,{message:w,onDismiss:b}),l,e.jsx(DS,{})]})]}),e.jsxs(xs,{open:$,title:"Configurações",icon:e.jsx(tg,{size:19}),onClose:()=>j(!1),children:[e.jsx("strong",{style:{display:"block",marginBottom:8,color:"var(--text)",fontSize:14},children:"Páginas do menu"}),e.jsx(WS,{children:"Escolha quais páginas aparecem no menu lateral. As páginas arquivadas podem ser restauradas a qualquer momento; seus dados continuam preservados."}),e.jsx(GS,{children:S.map(K=>{const{id:je,label:ue,icon:ye}=K,W=R.includes(je),z=!W&&I.length<=1;return e.jsxs(KS,{children:[e.jsx(QS,{children:e.jsx(ye,{"aria-hidden":"true"})}),e.jsx(YS,{children:ue}),e.jsx(JS,{$archived:W,children:W?"Arquivada":"Visível"}),e.jsxs(XS,{type:"button",$restore:W,disabled:z,title:z?"Mantenha pelo menos uma página no menu":void 0,onClick:()=>y(K,!W),children:[W?e.jsx(Xx,{}):e.jsx(sk,{}),W?"Restaurar":"Arquivar"]})]},je)})}),e.jsxs(ZS,{children:[e.jsxs("span",{children:[R.length," ",R.length===1?"página arquivada":"páginas arquivadas"]}),R.length>0&&e.jsxs(pe,{type:"button",onClick:q,children:[e.jsx(Xx,{}),"Restaurar todas"]})]})]})]})}const ag=()=>new Date().toISOString().slice(0,10),ig=t=>t?new Date(`${t.slice(0,10)}T12:00:00`).toLocaleDateString("pt-BR"):"Não definida";function nC({saving:t,onCreate:a,onValidationError:s}){const[l,c]=x.useState(""),[u,m]=x.useState(""),[f,g]=x.useState("medium"),[w,b]=x.useState("diaria"),[S,_]=x.useState(ag()),[R,M]=x.useState(""),[N,V]=x.useState(["",""]);function $(O,ae){V(J=>J.map((I,ce)=>ce===O?ae:I))}function j(){c(""),m(""),g("medium"),b("diaria"),_(ag()),M(""),V(["",""])}async function A(O){O.preventDefault(),s("");const ae=N.map(I=>I.trim()).filter(Boolean);if(!l.trim()){s("Informe o título da tarefa.");return}if(!ae.length){s("Adicione pelo menos um item à tarefa.");return}if(R&&S&&R<S){s("A data final não pode ser anterior à data inicial.");return}await a({title:l.trim(),description:u.trim()||null,priority:f,frequencia:w,start_date:S||void 0,end_date:R||null,items:ae})&&j()}return e.jsxs(e.Fragment,{children:[e.jsx(Mr,{children:e.jsxs("div",{children:[e.jsx("h1",{children:"Nova tarefa"}),e.jsx("p",{children:"Organize seu dia adicionando tarefas e atividades."})]})}),e.jsxs(Df,{children:[e.jsxs(Ue,{children:[e.jsxs(Fe,{children:[e.jsx(yt,{size:19,color:"var(--primary)"})," Criar tarefa"]}),e.jsxs("form",{onSubmit:O=>void A(O),children:[e.jsxs(X,{children:["Título da tarefa *",e.jsx("input",{value:l,onChange:O=>c(O.target.value),maxLength:200,placeholder:"Ex.: Estudar programação",required:!0})]}),e.jsxs(X,{children:["Descrição ",e.jsx("small",{children:"(opcional)"}),e.jsx("textarea",{value:u,onChange:O=>m(O.target.value),maxLength:1e4,placeholder:"Descreva o objetivo desta tarefa..."})]}),e.jsxs(X,{children:["Prioridade",e.jsxs(sn,{value:f,onChange:O=>g(O.target.value),children:[e.jsx("option",{value:"high",children:"Alta"}),e.jsx("option",{value:"medium",children:"Média"}),e.jsx("option",{value:"low",children:"Baixa"})]})]}),e.jsxs(X,{children:["Frequência",e.jsxs(sn,{value:w,onChange:O=>b(O.target.value),children:[e.jsx("option",{value:"diaria",children:"Dia"}),e.jsx("option",{value:"semana",children:"Semana"}),e.jsx("option",{value:"mensal",children:"Mês"})]})]}),e.jsxs(ry,{children:[e.jsxs(X,{children:["Data de início",e.jsx("input",{type:"date",value:S,onChange:O=>_(O.target.value)})]}),e.jsxs(X,{children:["Data de fim ",e.jsx("small",{children:"(opcional)"}),e.jsx("input",{type:"date",min:S||void 0,value:R,onChange:O=>M(O.target.value)})]})]}),e.jsxs(Fe,{style:{marginTop:8,marginBottom:6},children:["Itens da tarefa * ",e.jsx(mk,{size:15,color:"var(--muted)"})]}),e.jsx(Zn,{children:"Adicione as atividades que você quer acompanhar."}),e.jsxs(Mf,{children:[N.map((O,ae)=>e.jsxs(Tf,{children:[e.jsx(Ff,{children:ae+1}),e.jsx(Ac,{"aria-label":`Item ${ae+1}`,value:O,maxLength:200,onChange:J=>$(ae,J.target.value),placeholder:"Nome da atividade"}),e.jsx(pe,{type:"button",$variant:"danger","aria-label":"Remover item",disabled:N.length<=1,onClick:()=>V(J=>J.filter((I,ce)=>ce!==ae)),children:e.jsx(Rr,{})})]},ae)),e.jsx("div",{children:e.jsxs(pe,{type:"button",onClick:()=>V(O=>O.length<100?[...O,""]:O),disabled:N.length>=100,children:[e.jsx(yt,{}),"Adicionar item"]})})]}),e.jsxs(Lf,{children:[e.jsxs(pe,{type:"button",onClick:j,children:[e.jsx(mr,{}),"Limpar"]}),e.jsxs(pe,{type:"submit",$variant:"primary",disabled:t,children:[t?e.jsx(rt,{className:"spin"}):e.jsx(ws,{}),t?"Salvando...":"Salvar tarefa"]})]})]})]}),e.jsxs(Ue,{children:[e.jsx(Fe,{children:"Prévia da tarefa"}),e.jsxs(Of,{children:[e.jsxs(If,{children:[e.jsx(rr,{size:23}),l.trim()||"Título da tarefa"]}),e.jsx(Zn,{children:u.trim()||"A descrição aparecerá aqui."}),e.jsxs(Bf,{children:[e.jsxs("span",{children:[e.jsx(Je,{size:15,style:{verticalAlign:"middle",marginRight:7}}),"Início: ",ig(S)]}),e.jsxs("span",{children:[e.jsx(Je,{size:15,style:{verticalAlign:"middle",marginRight:7}}),"Fim: ",ig(R)]}),e.jsxs("span",{children:[e.jsx(So,{size:15,style:{verticalAlign:"middle",marginRight:7}}),"Frequência: ",w==="diaria"?"Dia":w==="semana"?"Semana":"Mês"]}),e.jsxs("span",{children:[e.jsx(So,{size:15,style:{verticalAlign:"middle",marginRight:7}}),"Status: Ativa"]})]})]}),e.jsx(Fe,{children:"Itens adicionados"}),N.some(O=>O.trim())?N.map((O,ae)=>O.trim()&&e.jsxs(ny,{children:[e.jsx("input",{type:"checkbox",disabled:!0}),e.jsx("span",{children:O}),e.jsx(Dr,{children:"Pendente"})]},ae)):e.jsx(Zn,{children:"Os itens aparecerão aqui enquanto você digita."})]})]})]})}const aC=h.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
  margin-bottom: 22px;
  @media (max-width: 520px) { grid-template-columns: 1fr; }
`,sg=h.div`
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
`,og=h.span`
  display: grid;
  width: 42px;
  height: 42px;
  place-items: center;
  border-radius: 12px;
  color: ${({$tone:t})=>t==="green"?"var(--success)":"var(--primary-strong)"};
  background: ${({$tone:t})=>t==="green"?"var(--success-soft)":"color-mix(in srgb, var(--primary) 13%, var(--surface))"};
  svg { width: 19px; height: 19px; }
`,iC=h.div`
  display: grid;
  gap: 12px;
`,sC=h.article`
  display: grid;
  gap: 10px;
  padding: 17px 18px;
  border: 1px solid var(--success-border);
  border-left: 3px solid var(--success);
  border-radius: var(--radius-lg);
  background: linear-gradient(135deg, color-mix(in srgb, var(--success) 4%, var(--surface)), var(--surface));
  box-shadow: 0 5px 18px var(--shadow);
`,oC=h.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  h2 { margin: 0; color: var(--text); font-size: 14px; line-height: 1.45; overflow-wrap: anywhere; }
`,lC=h.div`
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
`,cC=h.div`
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
`,dC=t=>t?new Date(`${t.slice(0,10)}T12:00:00`).toLocaleDateString("pt-BR",{weekday:"long",day:"numeric",month:"long",year:"numeric"}):"Hoje",uC=t=>t?new Date(t).toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"}):"";function ly({dailyRecords:t,loading:a,onNavigate:s}){var m;const l=x.useMemo(()=>t.map(f=>({...f,items:f.items.filter(g=>g.is_completed)})).filter(f=>f.items.length>0),[t]),c=l.reduce((f,g)=>f+g.items.length,0),u=(m=t[0])==null?void 0:m.record_date;return e.jsxs(e.Fragment,{children:[e.jsxs(Mr,{children:[e.jsxs("div",{children:[e.jsx("h1",{children:"Atividades concluídas"}),e.jsx("p",{children:dC(u)})]}),e.jsxs(pe,{onClick:()=>s("/today"),children:[e.jsx(Je,{}),"Ver tarefas de hoje"]})]}),e.jsxs(aC,{"aria-label":"Resumo das atividades concluídas",children:[e.jsxs(sg,{children:[e.jsx(og,{$tone:"green",children:e.jsx(nn,{})}),e.jsxs("div",{children:[e.jsx("span",{children:"Atividades concluídas hoje"}),e.jsx("strong",{children:c})]})]}),e.jsxs(sg,{children:[e.jsx(og,{$tone:"blue",children:e.jsx(rr,{})}),e.jsxs("div",{children:[e.jsx("span",{children:"Tarefas com conclusão"}),e.jsx("strong",{children:l.length})]})]})]}),e.jsxs(cC,{children:[e.jsx(rn,{size:16}),e.jsx("span",{children:"Esta página mostra as atividades marcadas como concluídas nos registros reais de hoje."})]}),a?e.jsxs(Xe,{children:[e.jsx(rt,{}),e.jsx("p",{children:"Carregando atividades concluídas..."})]}):l.length===0?e.jsx(Ue,{children:e.jsxs(Xe,{children:[e.jsx(nn,{size:32}),e.jsx("h3",{children:"Nenhuma atividade concluída hoje"}),e.jsx("p",{children:"Quando marcar atividades como concluídas, elas aparecerão nesta página."}),e.jsx("div",{style:{marginTop:16},children:e.jsx(pe,{$variant:"primary",onClick:()=>s("/today"),children:"Ir para Hoje"})})]})}):e.jsx(iC,{children:l.map(f=>e.jsxs(sC,{children:[e.jsxs(oC,{children:[e.jsx("h2",{children:f.task_title}),e.jsxs(Dr,{$done:!0,children:[f.items.length," ",f.items.length===1?"concluída":"concluídas"]})]}),f.items.map(g=>e.jsxs(lC,{children:[e.jsx(nn,{size:17}),e.jsx("span",{children:g.title}),g.completed_at&&e.jsx("time",{children:uC(g.completed_at)})]},g.id))]},`${f.task_id}-${f.record_date}`))})]})}const pC=h.div`
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
`,fC=h(Ue)`
  margin-bottom: 20px;
`,hC=h.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(210px, 0.45fr);
  gap: 16px;
  @media (max-width: 680px) {
    grid-template-columns: 1fr;
    gap: 0;
  }
`,mC=h.div`
  display: grid;
  gap: 15px;
`,xC=h.article`
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
`,gC=h.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 14px;
  @media (max-width: 560px) {
    flex-direction: column;
  }
`,vC=h.div`
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
`,yC=h.div`
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  @media (max-width: 560px) {
    width: 100%;
  }
`,Ul=h(pe)`
  min-height: 34px;
  padding: 7px 10px;
  gap: 6px;
  font-size: 11px;
  svg {
    width: 15px;
    height: 15px;
  }
`,jC=h.div`
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
`,lg=h.select`
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
`,bC=h.div`
  display: grid;
  gap: 7px;
  padding: 13px 14px;
  border-radius: 10px;
  background: var(--surface-raised);
`,wC=h.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  color: var(--muted);
  font-size: 11px;
  strong {
    color: var(--text);
  }
`,_C=h.div`
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
`,kC=h.div`
  display: grid;
  gap: 8px;
`,SC=h.div`
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
`,CC=h.div`
  display: flex;
  gap: 8px;
  padding-top: 4px;
  border-top: 1px solid var(--border);
  @media (max-width: 520px) {
    flex-direction: column;
  }
`,EC=h.div`
  display: flex;
  min-width: 0;
  align-items: center;
  gap: 10px;
  padding: 10px 11px;
  border: 1px solid ${({$completed:t})=>t?"var(--success-border)":"var(--border)"};
  border-radius: 9px;
  color: ${({$completed:t})=>t?"var(--muted)":"var(--text)"};
  background: ${({$completed:t})=>t?"var(--success-soft)":"var(--surface-raised)"};
  font-size: 12px;
  span {
    min-width: 0;
    flex: 1;
    overflow-wrap: anywhere;
    text-decoration: ${({$completed:t})=>t?"line-through":"none"};
  }
  > svg {
    flex: 0 0 auto;
    color: ${({$completed:t})=>t?"var(--success)":"var(--muted)"};
  }
`,$C=h.div`
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  gap: 5px;
`,cg=h.button`
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
`,RC=h.form`
  display: flex;
  flex: 1;
  gap: 8px;
  input {
    min-width: 0;
    flex: 1;
  }
`,zC=h(Ue)`
  margin-top: 18px;
`;function dg(){const t=new Date;return t.setFullYear(t.getFullYear()+1),[t.getFullYear(),String(t.getMonth()+1).padStart(2,"0"),String(t.getDate()).padStart(2,"0")].join("-")}function Co(t){return t.slice(0,10)}function PC(t){return new Date(`${Co(t)}T12:00:00`).toLocaleDateString("pt-BR")}function NC(t){const a=new Date(`${Co(t)}T00:00:00`),s=new Date;return s.setHours(0,0,0,0),Math.ceil((a.getTime()-s.getTime())/864e5)}function AC(t){return t<0?`Atrasado há ${Math.abs(t)} ${Math.abs(t)===1?"dia":"dias"}`:t===0?"Prazo hoje":t===1?"Falta 1 dia":`Faltam ${t} dias`}function DC({goals:t,loading:a,saving:s,onCreate:l,onUpdate:c,onDelete:u,onAddStep:m,onToggleStep:f,onDeleteStep:g}){const[w,b]=x.useState(null),[S,_]=x.useState(!1),[R,M]=x.useState(""),[N,V]=x.useState(""),[$,j]=x.useState(dg),[A,O]=x.useState("pendente"),[ae,J]=x.useState([""]),[I,ce]=x.useState({}),[C,y]=x.useState([]),q=x.useMemo(()=>[...t].sort((k,se)=>Co(k.target_date).localeCompare(Co(se.target_date))),[t]),F=t.filter(k=>k.status==="concluido").length,fe=t.filter(k=>k.status==="em_andamento").length;function ge(){b(null),_(!1),M(""),V(""),j(dg()),O("pendente"),J([""])}function Ne(){ge(),_(!0)}function K(k){b(k),_(!0),M(k.title),V(k.description??""),j(Co(k.target_date)),O(k.status),J([])}function je(k,se){J(ie=>ie.map((D,de)=>de===k?se:D))}async function ue(k){k.preventDefault();const se=ae.map(D=>D.trim()).filter(Boolean);if(!R.trim()||!w&&!se.length)return;(w?await c(w.id,{title:R.trim(),description:N.trim()||null,target_date:$,status:A}):await l({title:R.trim(),description:N.trim()||null,target_date:$,status:A,steps:se.map((D,de)=>({title:D,status:"pendente",step_order:de+1}))}))&&ge()}async function ye(k,se){k.preventDefault();const ie=String(se.id),D=(I[ie]??"").trim();D&&await m(se.id,D)&&ce(de=>({...de,[ie]:""}))}async function W(k,se){const ie=String(se.id);y(D=>[...D,ie]);try{await f(k.id,se,se.status!=="concluido")}finally{y(D=>D.filter(de=>de!==ie))}}async function z(k,se){if(k.steps.length<=1||!window.confirm(`Remover a etapa “${se.title}” deste objetivo?`))return;const ie=String(se.id);y(D=>[...D,ie]);try{await g(k.id,se)}finally{y(D=>D.filter(de=>de!==ie))}}return e.jsxs(e.Fragment,{children:[e.jsxs(Mr,{children:[e.jsxs("div",{children:[e.jsx("h1",{children:"Objetivos de vida"}),e.jsx("p",{children:"Transforme seus planos em etapas claras e acompanhe seu progresso."})]}),e.jsxs(pe,{$variant:"primary",onClick:S?ge:Ne,children:[S?e.jsx(mr,{}):e.jsx(yt,{}),S?"Fechar formulário":"Novo objetivo"]})]}),e.jsxs(pC,{children:[e.jsx(cs,{size:20}),e.jsxs("span",{children:[e.jsx("strong",{children:"Comece pelo resultado que deseja alcançar."})," Defina uma data realista e divida o caminho em pequenas ações que você possa acompanhar."]})]}),S&&e.jsxs(fC,{children:[e.jsxs(Fe,{children:[e.jsx(Xp,{size:19,color:"var(--primary-strong)"}),w?"Editar objetivo":"Planejar um objetivo"]}),e.jsxs("form",{onSubmit:k=>{ue(k)},children:[e.jsxs(hC,{children:[e.jsxs(X,{children:["Qual objetivo você quer alcançar? *",e.jsx("input",{autoFocus:!0,value:R,onChange:k=>M(k.target.value),maxLength:200,placeholder:"Ex.: Comprar minha casa",required:!0})]}),e.jsxs(X,{children:["Data prevista *",e.jsx("input",{type:"date",value:$,onChange:k=>j(k.target.value),required:!0})]}),e.jsxs(X,{children:["Status",e.jsxs(lg,{value:A,onChange:k=>O(k.target.value),children:[e.jsx("option",{value:"pendente",children:"Pendente"}),e.jsx("option",{value:"em_andamento",children:"Em andamento"}),e.jsx("option",{value:"concluido",children:"Concluído"})]})]})]}),e.jsxs(X,{children:["Por que esse objetivo é importante? ",e.jsx("small",{children:"(opcional)"}),e.jsx("textarea",{value:N,onChange:k=>V(k.target.value),maxLength:5e3,placeholder:"Descreva o que esse objetivo significa para você e como pretende chegar lá."})]}),!w&&e.jsxs(e.Fragment,{children:[e.jsx(Fe,{style:{marginTop:8,marginBottom:6},children:"Etapas para chegar lá *"}),e.jsx(Zn,{children:"Escreva ações pequenas, concretas e que você possa concluir uma de cada vez."}),e.jsxs(Mf,{style:{marginTop:12},children:[ae.map((k,se)=>e.jsxs(Tf,{children:[e.jsx(Ff,{children:se+1}),e.jsx(Ac,{"aria-label":`Etapa ${se+1}`,value:k,maxLength:200,onChange:ie=>je(se,ie.target.value),placeholder:se===0?"Ex.: Pesquisar o valor de entrada e os custos":"Próxima ação",required:se===0}),e.jsx(Ul,{type:"button",$variant:"danger","aria-label":`Remover etapa ${se+1}`,disabled:ae.length<=1,onClick:()=>J(ie=>ie.filter((D,de)=>de!==se)),children:e.jsx(Rr,{})})]},se)),e.jsx("div",{children:e.jsxs(pe,{type:"button",onClick:()=>J(k=>k.length<50?[...k,""]:k),disabled:ae.length>=50,children:[e.jsx(yt,{}),"Adicionar etapa"]})})]})]}),w&&e.jsx(Zn,{children:"As etapas existentes continuam no objetivo. Você pode adicionar, concluir ou remover etapas na lista abaixo."}),e.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:9,flexWrap:"wrap",marginTop:16},children:[e.jsx(pe,{type:"button",onClick:ge,children:"Cancelar"}),e.jsxs(pe,{type:"submit",$variant:"primary",disabled:s,children:[s?e.jsx(rt,{className:"spin"}):e.jsx(ws,{}),s?"Salvando...":w?"Salvar alterações":"Salvar objetivo"]})]})]})]}),e.jsxs(MC,{"aria-label":"Resumo dos objetivos",children:[e.jsxs(Qu,{children:[e.jsx(Yu,{$tone:"blue",children:e.jsx(cs,{})}),e.jsxs("div",{children:[e.jsx("span",{children:"Objetivos ativos"}),e.jsx("strong",{children:t.length-F})]})]}),e.jsxs(Qu,{children:[e.jsx(Yu,{$tone:"green",children:e.jsx(nn,{})}),e.jsxs("div",{children:[e.jsx("span",{children:"Objetivos alcançados"}),e.jsx("strong",{children:F})]})]}),e.jsxs(Qu,{children:[e.jsx(Yu,{$tone:"blue",children:e.jsx(Xp,{})}),e.jsxs("div",{children:[e.jsx("span",{children:"Em andamento"}),e.jsx("strong",{children:fe})]})]})]}),a?e.jsxs(Xe,{children:[e.jsx(rt,{}),e.jsx("p",{children:"Carregando objetivos..."})]}):q.length===0?e.jsx(zC,{children:e.jsxs(Xe,{children:[e.jsx(cs,{size:34}),e.jsx("h3",{children:"Seus objetivos começam aqui"}),e.jsx("p",{children:"Registre um objetivo, escolha uma data prevista e monte um plano de ação para alcançá-lo."}),e.jsx("div",{style:{marginTop:16},children:e.jsxs(pe,{$variant:"primary",onClick:Ne,children:[e.jsx(yt,{}),"Planejar meu primeiro objetivo"]})})]})}):e.jsx(mC,{children:q.map(k=>{const se=[...k.steps].sort((U,he)=>U.step_order-he.step_order),ie=se.filter(U=>U.status==="concluido").length,D=se.length?Math.round(ie/se.length*100):0,de=k.status==="concluido",_e=NC(k.target_date),ke=String(k.id);return e.jsxs(xC,{children:[e.jsxs(gC,{children:[e.jsxs(vC,{children:[e.jsx(cs,{size:20}),e.jsxs("div",{children:[e.jsx("h2",{children:k.title}),k.description&&e.jsx("p",{children:k.description})]})]}),e.jsxs(yC,{children:[e.jsxs(Ul,{onClick:()=>K(k),children:[e.jsx(an,{}),"Editar"]}),e.jsxs(Ul,{$variant:"danger",onClick:()=>{window.confirm(`Excluir o objetivo “${k.title}” e todas as etapas?`)&&u(k)},children:[e.jsx(Rr,{}),"Excluir"]})]})]}),e.jsxs(jC,{children:[e.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:6},children:[e.jsx(Je,{}),"Previsto para ",PC(k.target_date)]}),e.jsxs(lg,{"aria-label":`Status do objetivo ${k.title}`,value:k.status,onChange:U=>{c(k.id,{status:U.target.value})},children:[e.jsx("option",{value:"pendente",children:"Pendente"}),e.jsx("option",{value:"em_andamento",children:"Em andamento"}),e.jsx("option",{value:"concluido",children:"Concluído"})]}),!de&&_e<0&&e.jsx(Dr,{$done:!1,children:"Prazo vencido"}),!de&&_e>=0&&e.jsx("span",{children:AC(_e)})]}),e.jsxs(bC,{children:[e.jsxs(wC,{children:[e.jsx("span",{children:"Progresso do plano"}),e.jsxs("strong",{children:[ie," de ",se.length," etapas ·"," ",D,"%"]})]}),e.jsx(_C,{"aria-label":`${D}% concluído`,children:e.jsx("div",{style:{width:`${D}%`}})})]}),e.jsxs(SC,{children:[e.jsx("span",{children:"Plano de ação"}),e.jsxs("small",{children:[se.length," ",se.length===1?"etapa":"etapas"]})]}),e.jsx(kC,{"aria-label":`Etapas para alcançar ${k.title}`,children:se.map(U=>{const he=C.includes(String(U.id)),nt=U.status==="concluido";return e.jsxs(EC,{$completed:nt,children:[nt?e.jsx(nn,{size:17}):e.jsx(gk,{size:17}),e.jsx("span",{children:U.title}),e.jsxs($C,{children:[e.jsx(cg,{type:"button","aria-label":nt?`Reabrir etapa ${U.title}`:`Concluir etapa ${U.title}`,title:nt?"Reabrir etapa":"Marcar como concluída",disabled:he,onClick:()=>{W(k,U)},children:he?e.jsx(rt,{className:"spin"}):e.jsx(tn,{})}),e.jsx(cg,{type:"button","aria-label":`Remover etapa ${U.title}`,title:"Remover etapa",disabled:he||se.length<=1,onClick:()=>{z(k,U)},children:e.jsx(mr,{})})]})]},U.id)})}),e.jsx(CC,{children:e.jsxs(RC,{onSubmit:U=>{ye(U,k)},children:[e.jsx(Ac,{"aria-label":`Nova etapa para ${k.title}`,value:I[ke]??"",maxLength:200,placeholder:"Adicionar uma próxima ação...",onChange:U=>ce(he=>({...he,[ke]:U.target.value}))}),e.jsxs(Ul,{type:"submit",$variant:"primary",children:[e.jsx(yt,{}),"Adicionar etapa"]})]})})]},k.id)})})]})}const MC=h.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  margin-bottom: 20px;
  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`,Qu=h.div`
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
`,Yu=h.span`
  display: grid;
  width: 42px;
  height: 42px;
  place-items: center;
  border-radius: 12px;
  background: ${({$tone:t})=>t==="green"?"var(--success-soft)":"color-mix(in srgb, var(--primary) 13%, var(--surface))"};
  color: ${({$tone:t})=>t==="green"?"var(--success)":"var(--primary-strong)"};
  svg {
    width: 19px;
    height: 19px;
  }
`,TC=h.div`
  display: grid;
  grid-template-columns: minmax(260px, .7fr) minmax(0, 1.5fr);
  align-items: start;
  gap: 18px;
  @media (max-width: 850px) { grid-template-columns: 1fr; }
`,FC=h.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  margin-bottom: 18px;
  @media (max-width: 620px) { grid-template-columns: 1fr; }
`,Ju=h.div`
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
`,ug=h.div`
  height: 6px;
  margin-top: 9px;
  overflow: hidden;
  border-radius: 999px;
  background: var(--border);
  div { height: 100%; border-radius: inherit; background: linear-gradient(90deg, var(--primary), var(--success)); }
`,pg=h.h2`
  display: flex;
  align-items: center;
  gap: 9px;
  margin: 0 0 15px;
  color: var(--text);
  font-size: 16px;
  svg { color: var(--primary); }
`,LC=h.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 15px;
  @media (max-width: 520px) { flex-direction: column; }
`,OC=h.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  color: var(--muted);
  font-size: 11px;
`,fg=h.span`
  display: inline-flex;
  align-items: center;
  padding: 5px 8px;
  border-radius: 999px;
  background: var(--surface-raised);
`,IC=h.div`
  display: grid;
  gap: 9px;
`,hg=h.button`
  display: grid;
  width: 100%;
  gap: 7px;
  padding: 13px;
  border: 1px solid ${({$active:t})=>t?"var(--primary)":"var(--border)"};
  border-radius: 10px;
  color: var(--text);
  background: ${({$active:t})=>t?"color-mix(in srgb, var(--primary) 14%, var(--surface))":"var(--surface)"};
  text-align: left;
  cursor: pointer;
  &:hover { border-color: var(--primary); }
  &:focus-visible { outline: 3px solid var(--primary-soft); outline-offset: 1px; }
`,mg=h.span`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  font-size: 13px;
  font-weight: 750;
  text-transform: capitalize;
`,xg=h.span`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  color: var(--muted);
  font-size: 11px;
`,BC=h.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-top: 14px;
  color: var(--muted);
  font-size: 11px;
`,qC=h.div`
  display: grid;
  gap: 8px;
`,UC=h.div`
  display: grid;
  grid-template-columns: 20px minmax(0, 1fr) auto;
  align-items: start;
  gap: 9px;
  padding: 11px 12px;
  border: 1px solid ${({$completed:t})=>t?"var(--success-border)":"var(--border)"};
  border-radius: 9px;
  background: ${({$completed:t})=>t?"#f5fbf7":"var(--surface-raised)"};
  > svg { margin-top: 1px; color: ${({$completed:t})=>t?"var(--success)":"var(--text-subtle)"}; }
`,HC=h.div`
  min-width: 0;
  strong { display: block; color: var(--text); font-size: 12px; line-height: 1.45; overflow-wrap: anywhere; }
  span { display: block; margin-top: 3px; color: var(--muted); font-size: 11px; }
`,VC=h.time`
  color: var(--muted);
  font-size: 11px;
  white-space: nowrap;
`;function Xr(t){return t.slice(0,10)}function ui(t){return new Date(`${Xr(t)}T12:00:00`).toLocaleDateString("pt-BR",{weekday:"long",day:"numeric",month:"long",year:"numeric"})}function WC(t){return t?new Date(t).toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"}):""}function Xu(t,a){return a>0?Math.round(t/a*100):0}function cy({mode:t,days:a,periods:s,selectedDay:l,selectedPeriod:c,selectedDate:u,dayDetails:m,pagination:f,loading:g,detailLoading:w,referenceDate:b,onModeChange:S,onPeriodSearch:_,onSelectDate:R,onSelectPeriod:M,onPageChange:N}){const[V,$]=x.useState(()=>b??Xr(new Date().toISOString())),j=x.useMemo(()=>m.map(C=>({...C,items:C.items})),[m]);x.useEffect(()=>{b&&$(b)},[b]);function A(C){C.preventDefault(),V&&_(V)}const O=t==="daily"?l:c,ae=(O==null?void 0:O.completed_items)??0,J=(O==null?void 0:O.pending_items)??0,I=ae+J,ce=(O==null?void 0:O.completion_percentage)==null?Xu(ae,I):Math.round(O.completion_percentage);return e.jsxs(e.Fragment,{children:[e.jsx(Mr,{children:e.jsxs("div",{children:[e.jsxs("h1",{children:["Histórico ",t==="week"?"semanal":t==="month"?"mensal":"diário"]}),e.jsx("p",{children:"Consulte o que foi concluído e o que ficou pendente em cada período."})]})}),e.jsx(Ue,{style:{marginBottom:18},children:e.jsxs("div",{style:{display:"flex",alignItems:"flex-end",flexWrap:"wrap",gap:12},children:[e.jsxs(X,{style:{minWidth:220,marginBottom:0},children:["Visualização",e.jsxs(sn,{value:t,onChange:C=>S(C.target.value),children:[e.jsx("option",{value:"daily",children:"Por dia"}),e.jsx("option",{value:"week",children:"Por semana"}),e.jsx("option",{value:"month",children:"Por mês"})]})]}),e.jsxs("form",{onSubmit:A,style:{display:"flex",alignItems:"flex-end",gap:10,flexWrap:"wrap"},children:[e.jsxs(X,{style:{minWidth:200,marginBottom:0},children:[t==="daily"?"Data do dia":"Data da semana ou mês",e.jsx("input",{type:"date",value:V,onChange:C=>$(C.target.value),required:!0})]}),e.jsx(pe,{type:"submit",$variant:"primary",disabled:g,children:"Consultar período"}),b&&e.jsx(pe,{type:"button",disabled:g,onClick:()=>_(),children:"Limpar data"})]})]})}),e.jsxs(FC,{"aria-label":"Resumo do histórico",children:[e.jsxs(Ju,{children:[e.jsx("span",{children:e.jsx(Je,{})}),e.jsxs("div",{children:[e.jsx("small",{children:t==="daily"?"Dia selecionado":t==="week"?"Semana selecionada":"Mês selecionado"}),e.jsx("strong",{children:O?I:"—"})]})]}),e.jsxs(Ju,{children:[e.jsx("span",{children:e.jsx(nn,{})}),e.jsxs("div",{children:[e.jsx("small",{children:"Itens concluídos"}),e.jsx("strong",{children:O?ae:"—"})]})]}),e.jsxs(Ju,{children:[e.jsx("span",{children:e.jsx(us,{})}),e.jsxs("div",{children:[e.jsx("small",{children:"Progresso"}),e.jsx("strong",{children:O?`${ce}%`:"—"})]})]})]}),e.jsxs(TC,{children:[e.jsxs(Ue,{children:[e.jsxs(pg,{children:[e.jsx(rn,{size:18}),t==="week"?"Dias da semana":t==="month"?"Dias do mês":"Dias anteriores"]}),g?e.jsxs(Xe,{children:[e.jsx(rt,{}),e.jsx("p",{children:"Carregando histórico..."})]}):(t==="daily"?a.length===0:s.length===0)?e.jsxs(Xe,{children:[e.jsx(wk,{size:30}),e.jsx("h3",{children:t==="daily"?"Sem histórico anterior":"Nenhum período encontrado"}),e.jsx("p",{children:t==="daily"?"Os registros diários anteriores aparecerão aqui.":"Os períodos com registros históricos aparecerão aqui."})]}):e.jsxs(e.Fragment,{children:[e.jsx(IC,{children:t==="daily"?a.map(C=>e.jsxs(hg,{type:"button",$active:Xr(u)===Xr(C.date),"aria-pressed":Xr(u)===Xr(C.date),onClick:()=>R(Xr(C.date)),children:[e.jsxs(mg,{children:[e.jsx("span",{children:ui(C.date)}),e.jsx(Je,{size:15})]}),e.jsxs(xg,{children:[e.jsxs("span",{children:[C.completed_items," concluídas · ",C.pending_items," pendentes"]}),e.jsx("span",{children:C.completion_percentage==null?"—":`${Math.round(C.completion_percentage)}%`})]}),e.jsx(ug,{children:e.jsx("div",{style:{width:`${C.completion_percentage==null?Xu(C.completed_items,C.completed_items+C.pending_items):Math.round(C.completion_percentage)}%`}})})]},Xr(C.date))):s.map(C=>e.jsxs(hg,{type:"button",$active:Xr((c==null?void 0:c.start_date)??"")===Xr(C.start_date),"aria-pressed":Xr((c==null?void 0:c.start_date)??"")===Xr(C.start_date),onClick:()=>M(C),children:[e.jsxs(mg,{children:[e.jsxs("span",{children:[t==="week"?"Semana":"Mês",": ",ui(C.start_date)," – ",ui(C.end_date)]}),e.jsx(Je,{size:15})]}),e.jsxs(xg,{children:[e.jsxs("span",{children:[C.completed_items," concluídas · ",C.pending_items," pendentes"]}),e.jsx("span",{children:C.completion_percentage==null?"—":`${Math.round(C.completion_percentage)}%`})]}),e.jsx(ug,{children:e.jsx("div",{style:{width:`${C.completion_percentage==null?Xu(C.completed_items,C.completed_items+C.pending_items):Math.round(C.completion_percentage)}%`}})})]},Xr(C.start_date)))}),e.jsxs(BC,{children:[e.jsxs("span",{children:[f.total," ",t==="daily"?f.total===1?"dia":"dias":f.total===1?"período":"períodos"," · Página ",f.page," de ",f.totalPages||1]}),e.jsxs("div",{style:{display:"flex",gap:6},children:[e.jsx(pe,{type:"button","aria-label":"Página anterior do histórico",disabled:!f.hasPreviousPage||g,onClick:()=>N(f.page-1),children:e.jsx(Ao,{})}),e.jsx(pe,{type:"button","aria-label":"Próxima página do histórico",disabled:!f.hasNextPage||g,onClick:()=>N(f.page+1),children:e.jsx(ms,{})})]})]})]})]}),e.jsxs(Ue,{children:[e.jsxs(LC,{children:[e.jsxs(pg,{children:[e.jsx(rr,{size:18}),c?`${t==="week"?"Semana":"Mês"}: ${ui(c.start_date)} – ${ui(c.end_date)}`:u?ui(u):"Detalhes do dia"]}),O&&e.jsxs(OC,{children:[e.jsxs(fg,{children:[ae," concluídas"]}),e.jsxs(fg,{children:[J," pendentes"]})]})]}),w?e.jsxs(Xe,{children:[e.jsx(rt,{}),e.jsx("p",{children:"Carregando atividades do dia..."})]}):u?j.length===0?e.jsxs(Xe,{children:[e.jsx(nn,{size:30}),e.jsx("h3",{children:"Nenhuma atividade registrada"}),e.jsx("p",{children:"Não foram encontrados itens para este dia."})]}):e.jsx("div",{style:{display:"grid",gap:16},children:j.map(C=>e.jsxs("section",{"aria-label":C.task_title,children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:10,marginBottom:8},children:[e.jsx("strong",{style:{color:"var(--text)",fontSize:13},children:C.task_title}),e.jsxs(Dr,{$done:C.completed_items===C.total_items&&C.total_items>0,children:[C.completed_items,"/",C.total_items," concluídas"]})]}),e.jsx(qC,{children:C.items.map(y=>e.jsxs(UC,{$completed:y.is_completed,children:[y.is_completed?e.jsx(nn,{size:17}):e.jsx("span",{"aria-hidden":"true",children:"•"}),e.jsxs(HC,{children:[e.jsx("strong",{children:y.title}),e.jsxs("span",{children:[y.is_completed?"Concluída":"Pendente",y.record_date?` · ${ui(y.record_date)}`:""]})]}),y.completed_at&&e.jsx(VC,{children:WC(y.completed_at)})]},y.id))})]},String(C.task_id)))}):e.jsxs(Xe,{children:[e.jsx(Je,{size:30}),e.jsx("p",{children:"Selecione um dia para ver as atividades."})]})]})]})]})}const Zu=[{id:"monthly",label:"Mensal",price:29.9,currency:"BRL",interval:"month",description:"Cobrado todo mês · cancele quando quiser"},{id:"annual",label:"Anual",price:299.9,currency:"BRL",interval:"year",description:"Melhor custo · pagamento único no ano"}],so=new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}),gg=h.main`
  position: relative;
  display: grid;
  min-height: 100vh;
  place-items: center;
  padding: 32px 18px;
  background:
    radial-gradient(ellipse at 16% 14%, rgba(37, 99, 235, .1), transparent 38%),
    radial-gradient(ellipse at 88% 90%, rgba(2, 132, 199, .06), transparent 35%),
    var(--page-bg);
`,vg=h.div`
  position: absolute;
  top: 20px;
  right: 20px;
`,yg=h.section`
  width: min(100%, ${({$wide:t})=>t?"560px":"440px"});
  padding: 38px;
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  background: var(--surface);
  box-shadow: 0 24px 70px var(--shadow);
  transition: width .2s ease;
  @media (max-width: 520px) { padding: 28px 22px; border-radius: 18px; }
`,jg=h.div`
  display: flex;
  align-items: center;
  gap: 11px;
  margin-bottom: 34px;
  color: var(--text);
  font-size: 18px;
  font-weight: 800;
  letter-spacing: -.3px;
`,bg=h.span`
  display: grid;
  width: 42px;
  height: 42px;
  place-items: center;
  border-radius: 13px;
  color: var(--primary-contrast);
  background: var(--primary);
  box-shadow: 0 7px 16px var(--shadow);
  svg { width: 23px; height: 23px; }
`,wg=h.div`
  margin-bottom: 26px;
  h1 { margin: 0 0 8px; color: var(--text); font-size: 27px; letter-spacing: -.7px; }
  p { margin: 0; color: var(--muted); font-size: 14px; line-height: 1.6; }
`,GC=h.form`
  display: grid;
  gap: 18px;
`,Mn=h.label`
  display: grid;
  gap: 8px;
  color: var(--text);
  font-size: 14px;
  font-weight: 700;
`,ep=h.span`
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
`,KC=h.button`
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
`,QC=h.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  color: var(--muted);
  font-size: 12px;
`,YC=h.label`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  input { width: 15px; height: 15px; margin: 0; accent-color: var(--primary); }
`,_g=h.fieldset`
  margin: 0;
  padding: 0;
  border: 0;
  legend {
    margin-bottom: 10px;
    color: var(--text);
    font-size: 13px;
    font-weight: 700;
  }
`,kg=h.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  @media (max-width: 520px) { grid-template-columns: 1fr; }
`,dy=h.label`
  position: relative;
  display: grid;
  gap: 6px;
  padding: 14px 14px 13px;
  border: 1.5px solid ${({$active:t})=>t?"var(--primary)":"var(--border)"};
  border-radius: 14px;
  background: ${({$active:t})=>t?"color-mix(in srgb, var(--primary) 12%, var(--surface))":"var(--surface-raised)"};
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
`,JC=h.span`
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
`,Sg=h(dy)`
  strong {
    justify-content: flex-start;
    gap: 8px;
    svg { width: 16px; height: 16px; color: var(--primary-strong); }
  }
`,XC=h.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  padding: 14px;
  border: 1px solid var(--border);
  border-radius: 14px;
  background: var(--surface-raised);
  ${Mn}:first-child, ${Mn}:nth-child(2) { grid-column: 1 / -1; }
  @media (max-width: 520px) {
    grid-template-columns: 1fr;
    ${Mn} { grid-column: auto; }
  }
`,oo=h.input`
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
`,ZC=h.p`
  margin: 0;
  padding: 12px 14px;
  border: 1px solid color-mix(in srgb, var(--primary) 28%, var(--border));
  border-radius: 12px;
  color: var(--muted);
  background: color-mix(in srgb, var(--primary) 8%, var(--surface));
  font-size: 12px;
  line-height: 1.55;
`,e4=h.div`
  display: grid;
  gap: 12px;
  padding: 16px;
  border: 1px solid var(--border);
  border-radius: 14px;
  background: var(--surface-raised);
  h2 { margin: 0; color: var(--text); font-size: 18px; }
  p { margin: 0; color: var(--muted); font-size: 13px; line-height: 1.55; }
  strong { color: var(--text); }
`,Cg=h(pe)`
  width: 100%;
  min-height: 48px;
  margin-top: 3px;
  border-radius: 10px;
  background: var(--primary);
  color: var(--primary-contrast);
  font-size: 14px;
  &:hover:not(:disabled) { background: var(--primary-strong); }
`,t4=h.p`
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
`;function bo(t){return t.replace(/\D/g,"")}function r4(t){return bo(t).slice(0,16).replace(/(\d{4})(?=\d)/g,"$1 ").trim()}function Eg(t){return t.interval==="year"||t.id==="annual"?"/ano":"/mês"}function n4({onLogin:t,onRegister:a}){const[s,l]=x.useState("login"),[c,u]=x.useState(""),[m,f]=x.useState(""),[g,w]=x.useState(""),[b,S]=x.useState(Zu),[_,R]=x.useState({pix:!0,card:!0}),[M,N]=x.useState("annual"),[V,$]=x.useState("pix"),[j,A]=x.useState(""),[O,ae]=x.useState(""),[J,I]=x.useState(""),[ce,C]=x.useState(""),[y,q]=x.useState(""),[F,fe]=x.useState(!1),[ge,Ne]=x.useState(!1),[K,je]=x.useState(""),[ue,ye]=x.useState(null);x.useEffect(()=>{let k=!0;return L_().then(se=>{var D,de;if(!k)return;const ie=(D=se.plans)!=null&&D.length?se.plans:Zu;S(ie),se.payment_methods&&R(se.payment_methods),ie.some(_e=>_e.id===M)||N(((de=ie[0])==null?void 0:de.id)??"annual"),se.payment_methods&&!se.payment_methods.pix&&se.payment_methods.card&&$("card")}).catch(()=>{}),()=>{k=!1}},[]);const W=x.useMemo(()=>b.find(k=>k.id===M)??b[0]??Zu[1],[M,b]);async function z(k){var se,ie;k.preventDefault(),je(""),Ne(!0);try{const D={email:c.trim(),password:m};if(s==="register"){if(m.trim().length<8)throw new Error("A senha deve ter no mínimo 8 caracteres.");if(D.name=g.trim(),D.plan=M,D.payment_method=V,V==="card"){const _e=bo(O),ke=Number(J),U=Number(ce);if(_e.length<13)throw new Error("Informe um número de cartão válido.");if(!j.trim())throw new Error("Informe o nome impresso no cartão.");if(!Number.isInteger(ke)||ke<1||ke>12)throw new Error("Informe um mês de validade entre 1 e 12.");const he=U>=25&&U<=99||U>=2025&&U<=2099;if(!Number.isInteger(U)||!he)throw new Error("Informe um ano de validade válido (ex.: 30 ou 2030).");if(!/^\d{3,4}$/.test(y))throw new Error("Informe o CVV com 3 ou 4 dígitos.");D.card={holder_name:j.trim(),number:_e,exp_month:ke,exp_year:U,cvv:y}}const de=await a(D);ye(de)}else await t(D)}catch(D){je((D==null?void 0:D.message)||((ie=(se=D==null?void 0:D.response)==null?void 0:se.data)==null?void 0:ie.error)||(s==="register"?"Não foi possível criar sua conta. Verifique os dados informados.":"E-mail ou senha inválidos."))}finally{Ne(!1)}}if(ue){const k=ue.payment,se=k.pix;return e.jsxs(gg,{children:[e.jsx(vg,{children:e.jsx(nf,{})}),e.jsxs(yg,{$wide:!0,children:[e.jsxs(jg,{children:[e.jsx(bg,{children:e.jsx(rf,{"aria-hidden":"true"})}),"Rumo"]}),e.jsxs(wg,{children:[e.jsx("h1",{children:"Conta criada"}),e.jsx("p",{children:"Agora falta confirmar o pagamento da assinatura para liberar o acesso completo."})]}),e.jsxs(e4,{children:[e.jsx("h2",{children:k.payment_method==="pix"?"Pagamento Pix pendente":"Pagamento no cartão pendente"}),e.jsxs("p",{children:["Plano ",e.jsx("strong",{children:ue.subscription.plan==="annual"?"Anual":"Mensal"})," · ",e.jsx("strong",{children:so.format(Number(k.amount)||0)})]}),e.jsxs("p",{children:["Status: ",e.jsx("strong",{children:k.status})]}),k.payment_method==="pix"&&e.jsx("p",{children:se!=null&&se.ready&&se.copy_paste?`Pix copia e cola: ${se.copy_paste}`:(se==null?void 0:se.message)||"O Pix ainda será gerado pelo gateway de pagamento."}),k.payment_method==="card"&&k.card&&e.jsxs("p",{children:["Cartão ",k.card.brand||""," final ",k.card.last4||"****",k.card.holder_name?` · ${k.card.holder_name}`:""]}),ue.next_step&&e.jsxs("p",{children:["Próximo passo: ",e.jsx("strong",{children:ue.next_step})]})]}),e.jsx(Cg,{type:"button",$variant:"primary",onClick:()=>{ye(null),l("login"),f("")},children:"Ir para o login"})]})]})}return e.jsxs(gg,{children:[e.jsx(vg,{children:e.jsx(nf,{})}),e.jsxs(yg,{$wide:s==="register",children:[e.jsxs(jg,{children:[e.jsx(bg,{children:e.jsx(rf,{"aria-hidden":"true"})}),"Rumo"]}),e.jsxs(wg,{children:[e.jsx("h1",{children:s==="login"?"Bem-vindo de volta":"Crie sua conta"}),e.jsx("p",{children:s==="login"?"Entre com seus dados para acessar seu espaço de produtividade.":"Escolha o plano, o pagamento e comece a organizar tarefas, estudos e finanças."})]}),K&&e.jsx(ey,{variant:"error",title:"Não foi possível continuar",message:K,onDismiss:()=>je("")}),e.jsxs(GC,{onSubmit:k=>{z(k)},children:[s==="register"&&e.jsxs(_g,{children:[e.jsx("legend",{children:"Plano de assinatura"}),e.jsx(kg,{children:b.map(k=>{const se=M===k.id;return e.jsxs(dy,{$active:se,children:[e.jsx("input",{type:"radio",name:"subscription-plan",value:k.id,checked:se,onChange:()=>N(k.id)}),e.jsxs("strong",{children:[k.label,k.id==="annual"&&e.jsxs(JC,{children:[e.jsx(tn,{}),"Melhor custo"]})]}),e.jsxs("em",{children:[so.format(k.price),e.jsx("span",{children:Eg(k)})]}),e.jsx("p",{children:k.description||(k.id==="annual"?"Pagamento único no ano":"Cobrado todo mês · cancele quando quiser")})]},k.id)})})]}),s==="register"&&e.jsxs(_g,{children:[e.jsx("legend",{children:"Método de pagamento"}),e.jsxs(kg,{children:[_.pix&&e.jsxs(Sg,{$active:V==="pix",children:[e.jsx("input",{type:"radio",name:"payment-method",value:"pix",checked:V==="pix",onChange:()=>$("pix")}),e.jsxs("strong",{children:[e.jsx(Nk,{}),"Pix"]}),e.jsx("p",{children:"Pagamento instantâneo. O QR Code é gerado após confirmar o cadastro."})]}),_.card&&e.jsxs(Sg,{$active:V==="card",children:[e.jsx("input",{type:"radio",name:"payment-method",value:"card",checked:V==="card",onChange:()=>$("card")}),e.jsxs("strong",{children:[e.jsx(os,{}),"Cartão"]}),e.jsx("p",{children:"Crédito. Número e CVV não ficam salvos no servidor."})]})]})]}),s==="register"&&V==="pix"&&e.jsxs(ZC,{children:["Ao criar a conta no plano ",W.label.toLowerCase()," (",so.format(W.price),Eg(W),"), a assinatura fica pendente até a confirmação do Pix."]}),s==="register"&&V==="card"&&e.jsxs(XC,{children:[e.jsxs(Mn,{children:["Nome no cartão",e.jsx(oo,{value:j,onChange:k=>A(k.target.value),autoComplete:"cc-name",placeholder:"Como está impresso",required:!0})]}),e.jsxs(Mn,{children:["Número do cartão",e.jsx(oo,{value:O,onChange:k=>ae(r4(k.target.value)),inputMode:"numeric",autoComplete:"cc-number",placeholder:"0000 0000 0000 0000",required:!0})]}),e.jsxs(Mn,{children:["Mês",e.jsx(oo,{value:J,onChange:k=>I(bo(k.target.value).slice(0,2)),inputMode:"numeric",autoComplete:"cc-exp-month",placeholder:"MM",required:!0})]}),e.jsxs(Mn,{children:["Ano",e.jsx(oo,{value:ce,onChange:k=>C(bo(k.target.value).slice(0,4)),inputMode:"numeric",autoComplete:"cc-exp-year",placeholder:"30 ou 2030",required:!0})]}),e.jsxs(Mn,{children:["CVV",e.jsx(oo,{value:y,onChange:k=>q(bo(k.target.value).slice(0,4)),inputMode:"numeric",autoComplete:"cc-csc",placeholder:"000",required:!0})]})]}),s==="register"&&e.jsxs(Mn,{children:["Nome",e.jsxs(ep,{children:[e.jsx(qk,{"aria-hidden":"true"}),e.jsx("input",{type:"text",autoComplete:"name",placeholder:"Seu nome",value:g,onChange:k=>w(k.target.value),required:!0})]})]}),e.jsxs(Mn,{children:["E-mail",e.jsxs(ep,{children:[e.jsx(Rk,{"aria-hidden":"true"}),e.jsx("input",{type:"email",autoComplete:"email",placeholder:"voce@exemplo.com",value:c,onChange:k=>u(k.target.value),required:!0})]})]}),e.jsxs(Mn,{children:["Senha",e.jsxs(ep,{children:[e.jsx(Ek,{"aria-hidden":"true"}),e.jsx("input",{type:F?"text":"password",autoComplete:s==="register"?"new-password":"current-password",placeholder:s==="register"?"Mínimo de 8 caracteres":"Digite sua senha",minLength:s==="register"?8:void 0,value:m,onChange:k=>f(k.target.value),required:!0}),e.jsx(KC,{type:"button",onClick:()=>fe(k=>!k),"aria-label":F?"Ocultar senha":"Mostrar senha","aria-pressed":F,children:F?e.jsx(G1,{"aria-hidden":"true"}):e.jsx(Oo,{"aria-hidden":"true"})})]})]}),s==="login"&&e.jsxs(QC,{children:[e.jsxs(YC,{children:[e.jsx("input",{type:"checkbox"}),"Manter conectado"]}),e.jsx("span",{children:"Proteja suas credenciais"})]}),e.jsx(Cg,{type:"submit",$variant:"primary",disabled:ge,children:ge?"Aguarde...":s==="login"?"Entrar":V==="pix"?`Continuar com Pix · ${so.format(W.price)}`:`Pagar com cartão · ${so.format(W.price)}`})]}),e.jsxs(t4,{children:[s==="login"?"Ainda não tem conta?":"Já possui uma conta?"," ",e.jsx("button",{type:"button",onClick:()=>{l(s==="login"?"register":"login"),je(""),ye(null)},children:s==="login"?"Cadastre-se":"Entrar"})]})]})]})}const a4=t=>t==null?void 0:t.trim().toLocaleLowerCase("pt-BR");function Qc(t){const a=a4(t);if(a==="dia"||a==="diaria"||a==="day"||a==="daily")return"diaria";if(a==="semana"||a==="semanal"||a==="week"||a==="weekly")return"semana";if(a==="mes"||a==="mês"||a==="mensal"||a==="month"||a==="monthly")return"mensal"}function i4(t){return Qc(t.frequencia)==="diaria"}function s4(t){return Qc(t.frequencia)==="semana"}function o4(t){return Qc(t.frequencia)==="mensal"}const l4=h.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
  margin-bottom: 22px;
  @media (max-width: 620px) { gap: 9px; }
  @media (max-width: 420px) { grid-template-columns: 1fr; }
`,tp=h.div`
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
`,rp=h.span`
  display: grid;
  width: 42px;
  height: 42px;
  place-items: center;
  border-radius: 12px;
  color: ${({$tone:t})=>t==="green"?"var(--success)":t==="gray"?"var(--muted)":"var(--primary-strong)"};
  background: ${({$tone:t})=>t==="green"?"var(--success-soft)":t==="gray"?"var(--surface-raised)":"color-mix(in srgb, var(--primary) 16%, var(--surface))"};
  svg { width: 19px; height: 19px; }
  @media (max-width: 620px) { width: 36px; height: 36px; }
`,c4=h.div`
  display: grid;
  gap: 13px;
`,d4=h.article`
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
`,u4=h.div`
  display: flex;
  min-width: 0;
  align-items: flex-start;
  justify-content: space-between;
  gap: 14px;
  @media (max-width: 520px) { flex-direction: column; }
`,p4=h.div`
  min-width: 0;
  h3 { margin: 0; color: var(--text); font-size: 15px; font-weight: 750; line-height: 1.45; overflow-wrap: anywhere; }
  p { margin: 4px 0 0; color: var(--muted); font-size: 12px; line-height: 1.5; overflow-wrap: anywhere; }
`,f4=h.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px 16px;
  color: var(--muted);
  font-size: 11px;
`,Hl=h.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  svg { width: 14px; height: 14px; color: var(--text-subtle); }
`,h4=h.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  color: var(--muted);
  font-size: 11px;
  strong { color: var(--text); font-size: 12px; }
`,m4=h.div`
  height: 6px;
  overflow: hidden;
  border-radius: 999px;
  background: var(--border);
  div { height: 100%; border-radius: inherit; background: var(--primary); transition: width .2s ease; }
`,x4=h.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 240px), 1fr));
  gap: 9px;
`,g4=h.label`
  display: flex;
  min-width: 0;
  min-height: 56px;
  align-items: center;
  gap: 10px;
  padding: 11px 12px;
  border: 1px solid ${({$completed:t})=>t?"var(--success-border)":"var(--border)"};
  border-radius: 10px;
  background: ${({$completed:t})=>t?"var(--success-soft)":"var(--surface-raised)"};
  cursor: pointer;
  transition: border-color .15s ease, background .15s ease;
  &:hover { border-color: ${({$completed:t})=>t?"var(--success-hover)":"var(--primary)"}; }
  input { width: 17px; height: 17px; flex: 0 0 auto; margin: 0; accent-color: ${({$completed:t})=>t?"var(--success)":"var(--primary)"}; cursor: pointer; }
`,v4=h.span`
  min-width: 0;
  flex: 1;
  color: ${({$completed:t})=>t?"var(--muted)":"var(--text)"};
  font-size: 12px;
  line-height: 1.45;
  overflow-wrap: anywhere;
  text-decoration: ${({$completed:t})=>t?"line-through":"none"};
`,y4=h.div`
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
`,$g=t=>t?new Date(`${t.slice(0,10)}T12:00:00`).toLocaleDateString("pt-BR"):"Sem data final";function uy({tasks:t,dailyRecords:a,loading:s,onNavigate:l,onToggleItem:c,onDeactivate:u}){const m=new Date().toLocaleDateString("pt-BR",{month:"long",year:"numeric"}),f=x.useMemo(()=>t.filter(R=>R.is_active&&o4(R)),[t]),g=x.useMemo(()=>f.map(R=>({task:R,record:a.find(M=>String(M.task_id)===String(R.id))})),[f,a]),w=g.flatMap(({record:R})=>(R==null?void 0:R.items)??[]),b=w.filter(R=>R.is_completed).length,S=w.length,_=S?Math.round(b/S*100):0;return e.jsxs(e.Fragment,{children:[e.jsxs(Mr,{children:[e.jsxs("div",{children:[e.jsx("h1",{children:"Tarefas do mês"}),e.jsx("p",{children:m.charAt(0).toLocaleUpperCase("pt-BR")+m.slice(1)})]}),e.jsxs(pe,{$variant:"primary",onClick:()=>l("/tasks/new"),children:[e.jsx(yt,{}),"Nova tarefa"]})]}),e.jsxs(l4,{"aria-label":"Resumo do mês",children:[e.jsxs(tp,{children:[e.jsx(rp,{$tone:"blue",children:e.jsx(Je,{})}),e.jsxs("div",{children:[e.jsx("span",{children:"Tarefas mensais"}),e.jsx("strong",{children:f.length})]})]}),e.jsxs(tp,{children:[e.jsx(rp,{$tone:"green",children:e.jsx(rr,{})}),e.jsxs("div",{children:[e.jsx("span",{children:"Itens concluídos hoje"}),e.jsxs("strong",{children:[b," / ",S]})]})]}),e.jsxs(tp,{children:[e.jsx(rp,{$tone:"gray",children:e.jsx(nn,{})}),e.jsxs("div",{children:[e.jsx("span",{children:"Progresso de hoje"}),e.jsxs("strong",{children:[_,"%"]})]})]})]}),e.jsxs(y4,{children:[e.jsx(rn,{size:16}),e.jsx("span",{children:"Marque as atividades mensais nesta tela. As marcações usam o registro diário atual e ficam sincronizadas com as abas Hoje e Semana."})]}),s?e.jsxs(Xe,{children:[e.jsx(rt,{}),e.jsx("p",{children:"Carregando tarefas..."})]}):f.length===0?e.jsx(Ue,{children:e.jsxs(Xe,{children:[e.jsx(Je,{size:32}),e.jsx("h3",{children:t.length===0?"Nenhuma tarefa cadastrada":"Nenhuma tarefa do tipo mês"}),e.jsx("p",{children:t.length===0?"Crie uma tarefa mensal para organizar seus objetivos.":"Não há tarefas mensais ativas. As tarefas diárias e semanais ficam nas abas Hoje e Semana."}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:9,marginTop:16},children:[e.jsxs(pe,{$variant:"primary",onClick:()=>l("/tasks/new"),children:[e.jsx(yt,{}),"Criar tarefa"]}),e.jsx(pe,{onClick:()=>l("/week"),children:"Ver tarefas da semana"})]})]})}):e.jsx(c4,{children:g.map(({task:R,record:M})=>{const N=(M==null?void 0:M.items)??[],V=N.filter(j=>j.is_completed).length,$=N.length?Math.round(V/N.length*100):0;return e.jsxs(d4,{children:[e.jsxs(u4,{children:[e.jsxs(p4,{children:[e.jsx("h3",{children:R.title}),e.jsx("p",{children:R.description||"Sem descrição"})]}),e.jsx(pe,{onClick:()=>l(`/tasks/${encodeURIComponent(String(R.id))}`),children:"Editar tarefa"})]}),e.jsxs(f4,{children:[e.jsxs(Hl,{children:[e.jsx(Je,{}),"Início ",$g(R.start_date)]}),e.jsxs(Hl,{children:[e.jsx(Je,{}),"Fim ",$g(R.end_date)]}),e.jsxs(Hl,{children:[e.jsx(Je,{}),"Frequência mensal"]}),e.jsxs(Hl,{children:[e.jsx(rr,{}),N.length," ",N.length===1?"atividade":"atividades"]}),e.jsx(Dr,{$done:!0,children:V===N.length&&N.length>0?"Concluída hoje":"Em andamento"})]}),e.jsxs(h4,{children:[e.jsx("span",{children:"Progresso de hoje"}),e.jsxs("strong",{children:[V," de ",N.length," concluídos · ",$,"%"]})]}),e.jsx(m4,{"aria-label":`${$}% concluído`,children:e.jsx("div",{style:{width:`${$}%`}})}),N.length>0?e.jsx(x4,{"aria-label":`Itens da tarefa ${R.title}`,children:N.map(j=>e.jsxs(g4,{$completed:j.is_completed,children:[e.jsx("input",{type:"checkbox",checked:j.is_completed,onChange:A=>c(j.id,A.target.checked)}),e.jsx(v4,{$completed:j.is_completed,children:j.title}),j.is_completed&&e.jsx(tn,{size:16,color:"var(--success)","aria-label":"Concluído"})]},j.id))}):e.jsx(Xe,{children:e.jsx("p",{children:M?"Esta tarefa ainda não possui itens para hoje.":"Os itens diários desta tarefa não foram encontrados."})}),e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsx(pe,{$variant:"danger",onClick:()=>u(R.id),children:"Desativar tarefa"})})]},R.id)})})]})}const j4=h.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
  margin-bottom: 22px;
  @media (max-width: 620px) { gap: 9px; }
  @media (max-width: 420px) { grid-template-columns: 1fr; }
`,np=h.div`
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
`,ap=h.span`
  display: grid;
  width: 42px;
  height: 42px;
  place-items: center;
  border-radius: 12px;
  color: ${({$tone:t})=>t==="green"?"var(--success)":t==="gray"?"var(--muted)":"var(--primary-strong)"};
  background: ${({$tone:t})=>t==="green"?"var(--success-soft)":t==="gray"?"var(--surface-raised)":"color-mix(in srgb, var(--primary) 16%, var(--surface))"};
  svg { width: 19px; height: 19px; }
  @media (max-width: 620px) { width: 36px; height: 36px; }
`,b4=h.div`
  display: grid;
  gap: 14px;
`,w4=h.article`
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
`,_4=h.div`
  display: flex;
  min-width: 0;
  align-items: flex-start;
  justify-content: space-between;
  gap: 14px;
  @media (max-width: 520px) { flex-direction: column; }
`,k4=h.div`
  min-width: 0;
  h3 { margin: 0; color: var(--text); font-size: 16px; font-weight: 750; line-height: 1.45; overflow-wrap: anywhere; }
  p { margin: 4px 0 0; color: var(--muted); font-size: 12px; line-height: 1.5; overflow-wrap: anywhere; }
`,S4=h.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px 18px;
  color: var(--muted);
  font-size: 11px;
`,ip=h.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  svg { width: 14px; height: 14px; color: var(--text-subtle); }
`,C4=h.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  color: var(--muted);
  font-size: 11px;
  strong { color: var(--text); font-size: 12px; }
`,E4=h.div`
  height: 6px;
  overflow: hidden;
  border-radius: 999px;
  background: var(--border);
  div { height: 100%; border-radius: inherit; background: var(--primary); transition: width .2s ease; }
`,$4=h.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 240px), 1fr));
  gap: 9px;
`,R4=h.label`
  display: flex;
  min-width: 0;
  min-height: 56px;
  align-items: center;
  gap: 10px;
  padding: 11px 12px;
  border: 1px solid ${({$completed:t})=>t?"var(--success-border)":"var(--border)"};
  border-radius: 10px;
  background: ${({$completed:t})=>t?"var(--success-soft)":"var(--surface-raised)"};
  cursor: pointer;
  transition: border-color .15s ease, background .15s ease;
  &:hover { border-color: ${({$completed:t})=>t?"var(--success-hover)":"var(--primary)"}; }
  input { width: 17px; height: 17px; flex: 0 0 auto; margin: 0; accent-color: ${({$completed:t})=>t?"var(--success)":"var(--primary)"}; cursor: pointer; }
`,z4=h.span`
  min-width: 0;
  flex: 1;
  color: ${({$completed:t})=>t?"var(--muted)":"var(--text)"};
  font-size: 12px;
  line-height: 1.45;
  overflow-wrap: anywhere;
  text-decoration: ${({$completed:t})=>t?"line-through":"none"};
`,P4=h.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 13px;
  border-top: 1px solid var(--border);
`,Rg=t=>t?new Date(`${t.slice(0,10)}T12:00:00`).toLocaleDateString("pt-BR"):"Não definida";function py({tasks:t,dailyRecords:a,loading:s,onNavigate:l,onToggleItem:c,onDeactivate:u}){const m=t.filter(_=>_.is_active&&i4(_)),f=m.map(_=>({task:_,record:a.find(R=>String(R.task_id)===String(_.id))})),g=f.flatMap(({record:_})=>(_==null?void 0:_.items)??[]),w=g.filter(_=>_.is_completed).length,b=g.length?Math.round(w/g.length*100):0,S=new Date().toLocaleDateString("pt-BR",{weekday:"long",day:"numeric",month:"long",year:"numeric"});return e.jsxs(e.Fragment,{children:[e.jsxs(Mr,{children:[e.jsxs("div",{children:[e.jsx("h1",{children:"Tarefas de hoje"}),e.jsx("p",{children:S.charAt(0).toLocaleUpperCase("pt-BR")+S.slice(1)})]}),e.jsxs(pe,{$variant:"primary",onClick:()=>l("/tasks/new"),children:[e.jsx(yt,{}),"Nova tarefa"]})]}),e.jsxs(j4,{"aria-label":"Resumo do dia",children:[e.jsxs(np,{children:[e.jsx(ap,{$tone:"blue",children:e.jsx(rr,{})}),e.jsxs("div",{children:[e.jsx("span",{children:"Tarefas diárias ativas"}),e.jsx("strong",{children:m.length})]})]}),e.jsxs(np,{children:[e.jsx(ap,{$tone:"green",children:e.jsx(nn,{})}),e.jsxs("div",{children:[e.jsx("span",{children:"Itens concluídos"}),e.jsxs("strong",{children:[w," / ",g.length]})]})]}),e.jsxs(np,{children:[e.jsx(ap,{$tone:"gray",children:e.jsx(Je,{})}),e.jsxs("div",{children:[e.jsx("span",{children:"Progresso do dia"}),e.jsxs("strong",{children:[b,"%"]})]})]})]}),s?e.jsxs(Xe,{children:[e.jsx(rt,{}),e.jsx("p",{children:"Carregando tarefas..."})]}):t.length===0?e.jsx(Ue,{children:e.jsxs(Xe,{children:[e.jsx(rr,{size:32}),e.jsx("h3",{children:"Nenhuma tarefa cadastrada"}),e.jsx("p",{children:"Crie uma tarefa para começar a organizar seu dia."}),e.jsx("div",{style:{marginTop:16},children:e.jsxs(pe,{$variant:"primary",onClick:()=>l("/tasks/new"),children:[e.jsx(yt,{}),"Criar tarefa"]})})]})}):m.length===0?e.jsx(Ue,{children:e.jsxs(Xe,{children:[e.jsx(rr,{size:32}),e.jsx("h3",{children:"Nenhuma tarefa do tipo dia"}),e.jsx("p",{children:"Não há tarefas diárias ativas. As tarefas semanais ficam na aba Semana."}),e.jsx("div",{style:{marginTop:16},children:e.jsx(pe,{onClick:()=>l("/week"),children:"Ver tarefas da semana"})})]})}):e.jsx(b4,{children:f.map(({task:_,record:R})=>{const M=(R==null?void 0:R.items)??[],N=M.filter($=>$.is_completed).length,V=M.length?Math.round(N/M.length*100):0;return e.jsxs(w4,{children:[e.jsxs(_4,{children:[e.jsxs(k4,{children:[e.jsx("h3",{children:_.title}),e.jsx("p",{children:_.description||"Sem descrição"})]}),e.jsxs(pe,{"aria-label":`Ver detalhes e editar ${_.title}`,onClick:()=>l(`/tasks/${encodeURIComponent(String(_.id))}`),children:[e.jsx(Oo,{}),"Editar tarefa"]})]}),e.jsxs(S4,{children:[e.jsxs(ip,{children:[e.jsx(Je,{}),"Início ",Rg(_.start_date)]}),e.jsxs(ip,{children:[e.jsx(Je,{}),"Fim ",Rg(_.end_date)]}),e.jsxs(ip,{children:[e.jsx(rr,{}),M.length," ",M.length===1?"item":"itens"]}),e.jsx(Dr,{$done:!0,children:N===M.length&&M.length>0?"Concluída":"Em andamento"})]}),e.jsxs(C4,{children:[e.jsx("span",{children:"Progresso da tarefa"}),e.jsxs("strong",{children:[N," de ",M.length," concluídos · ",V,"%"]})]}),e.jsx(E4,{"aria-label":`${V}% concluído`,children:e.jsx("div",{style:{width:`${V}%`}})}),M.length>0?e.jsx($4,{"aria-label":`Itens da tarefa ${_.title}`,children:M.map($=>e.jsxs(R4,{$completed:$.is_completed,children:[e.jsx("input",{type:"checkbox",checked:$.is_completed,onChange:j=>c($.id,j.target.checked)}),e.jsx(z4,{$completed:$.is_completed,children:$.title}),$.is_completed&&e.jsx(tn,{size:16,color:"var(--success)","aria-label":"Concluído"})]},$.id))}):e.jsx(Xe,{children:e.jsx("p",{children:R?"Esta tarefa ainda não possui itens para hoje.":"Os itens diários desta tarefa não foram encontrados."})}),e.jsx(P4,{children:e.jsx(pe,{$variant:"danger",onClick:()=>u(_.id),children:"Desativar tarefa"})})]},_.id)})})]})}const N4=h.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
  margin-bottom: 22px;
  @media (max-width: 620px) { gap: 9px; }
  @media (max-width: 420px) { grid-template-columns: 1fr; }
`,sp=h.div`
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
`,op=h.span`
  display: grid;
  width: 42px;
  height: 42px;
  place-items: center;
  border-radius: 12px;
  color: ${({$tone:t})=>t==="green"?"var(--success)":t==="gray"?"var(--muted)":"var(--primary-strong)"};
  background: ${({$tone:t})=>t==="green"?"var(--success-soft)":t==="gray"?"var(--surface-raised)":"color-mix(in srgb, var(--primary) 16%, var(--surface))"};
  svg { width: 19px; height: 19px; }
  @media (max-width: 620px) { width: 36px; height: 36px; }
`,A4=h.div`
  display: grid;
  gap: 13px;
`,D4=h.article`
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
`,M4=h.div`
  display: flex;
  min-width: 0;
  align-items: flex-start;
  justify-content: space-between;
  gap: 14px;
  @media (max-width: 520px) { flex-direction: column; }
`,T4=h.div`
  min-width: 0;
  h3 { margin: 0; color: var(--text); font-size: 15px; font-weight: 750; line-height: 1.45; overflow-wrap: anywhere; }
  p { margin: 4px 0 0; color: var(--muted); font-size: 12px; line-height: 1.5; overflow-wrap: anywhere; }
`,F4=h.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px 16px;
  color: var(--muted);
  font-size: 11px;
`,Vl=h.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  svg { width: 14px; height: 14px; color: var(--text-subtle); }
`,L4=h.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  color: var(--muted);
  font-size: 11px;
  strong { color: var(--text); font-size: 12px; }
`,O4=h.div`
  height: 6px;
  overflow: hidden;
  border-radius: 999px;
  background: var(--border);
  div { height: 100%; border-radius: inherit; background: var(--primary); transition: width .2s ease; }
`,I4=h.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 240px), 1fr));
  gap: 9px;
`,B4=h.label`
  display: flex;
  min-width: 0;
  min-height: 56px;
  align-items: center;
  gap: 10px;
  padding: 11px 12px;
  border: 1px solid ${({$completed:t})=>t?"var(--success-border)":"var(--border)"};
  border-radius: 10px;
  background: ${({$completed:t})=>t?"var(--success-soft)":"var(--surface-raised)"};
  cursor: pointer;
  transition: border-color .15s ease, background .15s ease;
  &:hover { border-color: ${({$completed:t})=>t?"var(--success-hover)":"var(--primary)"}; }
  input { width: 17px; height: 17px; flex: 0 0 auto; margin: 0; accent-color: ${({$completed:t})=>t?"var(--success)":"var(--primary)"}; cursor: pointer; }
`,q4=h.span`
  min-width: 0;
  flex: 1;
  color: ${({$completed:t})=>t?"var(--muted)":"var(--text)"};
  font-size: 12px;
  line-height: 1.45;
  overflow-wrap: anywhere;
  text-decoration: ${({$completed:t})=>t?"line-through":"none"};
`,U4=h.div`
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
`;function H4(t){const a=new Date(t);a.setHours(0,0,0,0);const s=(a.getDay()+6)%7;a.setDate(a.getDate()-s);const l=new Date(a);l.setDate(a.getDate()+6);const c=u=>[u.getFullYear(),String(u.getMonth()+1).padStart(2,"0"),String(u.getDate()).padStart(2,"0")].join("-");return{start:c(a),end:c(l),startDate:a,endDate:l}}const zg=t=>t?new Date(`${t.slice(0,10)}T12:00:00`).toLocaleDateString("pt-BR"):"Sem data final";function fy({tasks:t,dailyRecords:a,loading:s,onNavigate:l,onToggleItem:c,onDeactivate:u}){const f=H4(new Date),g=x.useMemo(()=>t.filter(N=>N.is_active&&s4(N)),[t]),w=x.useMemo(()=>g.map(N=>({task:N,record:a.find(V=>String(V.task_id)===String(N.id))})),[g,a]),b=w.flatMap(({record:N})=>(N==null?void 0:N.items)??[]),S=b.filter(N=>N.is_completed).length,_=b.length,R=_?Math.round(S/_*100):0,M=`${f.startDate.toLocaleDateString("pt-BR",{day:"numeric",month:"short"})} – ${f.endDate.toLocaleDateString("pt-BR",{day:"numeric",month:"short",year:"numeric"})}`;return e.jsxs(e.Fragment,{children:[e.jsxs(Mr,{children:[e.jsxs("div",{children:[e.jsx("h1",{children:"Tarefas da semana"}),e.jsx("p",{children:M})]}),e.jsxs(pe,{$variant:"primary",onClick:()=>l("/tasks/new"),children:[e.jsx(yt,{}),"Nova tarefa"]})]}),e.jsxs(N4,{"aria-label":"Resumo da semana",children:[e.jsxs(sp,{children:[e.jsx(op,{$tone:"blue",children:e.jsx(Je,{})}),e.jsxs("div",{children:[e.jsx("span",{children:"Tarefas semanais ativas"}),e.jsx("strong",{children:g.length})]})]}),e.jsxs(sp,{children:[e.jsx(op,{$tone:"green",children:e.jsx(rr,{})}),e.jsxs("div",{children:[e.jsx("span",{children:"Itens concluídos hoje"}),e.jsxs("strong",{children:[S," / ",_]})]})]}),e.jsxs(sp,{children:[e.jsx(op,{$tone:"gray",children:e.jsx(nn,{})}),e.jsxs("div",{children:[e.jsx("span",{children:"Progresso de hoje"}),e.jsxs("strong",{children:[R,"%"]})]})]})]}),e.jsxs(U4,{children:[e.jsx(rn,{size:16}),e.jsx("span",{children:"Marque as atividades semanais nesta tela. As marcações usam o registro diário atual e ficam sincronizadas com a aba Hoje."})]}),s?e.jsxs(Xe,{children:[e.jsx(rt,{}),e.jsx("p",{children:"Carregando tarefas..."})]}):g.length===0?e.jsx(Ue,{children:e.jsxs(Xe,{children:[e.jsx(Je,{size:32}),e.jsx("h3",{children:t.length===0?"Nenhuma tarefa cadastrada":"Nenhuma tarefa do tipo semana"}),e.jsx("p",{children:t.length===0?"Crie uma tarefa para organizar o que precisa fazer.":"Não há tarefas semanais ativas. As tarefas diárias ficam na aba Hoje."}),e.jsx("div",{style:{marginTop:16},children:t.length===0?e.jsxs(pe,{$variant:"primary",onClick:()=>l("/tasks/new"),children:[e.jsx(yt,{}),"Criar tarefa"]}):e.jsx(pe,{onClick:()=>l("/today"),children:"Ver tarefas de hoje"})})]})}):e.jsx(A4,{children:w.map(({task:N,record:V})=>{const $=(V==null?void 0:V.items)??[],j=$.filter(O=>O.is_completed).length,A=$.length?Math.round(j/$.length*100):0;return e.jsxs(D4,{children:[e.jsxs(M4,{children:[e.jsxs(T4,{children:[e.jsx("h3",{children:N.title}),e.jsx("p",{children:N.description||"Sem descrição"})]}),e.jsx(pe,{onClick:()=>l(`/tasks/${encodeURIComponent(String(N.id))}`),children:"Editar tarefa"})]}),e.jsxs(F4,{children:[e.jsxs(Vl,{children:[e.jsx(Je,{}),"Início ",zg(N.start_date)]}),e.jsxs(Vl,{children:[e.jsx(Je,{}),"Fim ",zg(N.end_date)]}),e.jsxs(Vl,{children:[e.jsx(Je,{}),"Frequência semanal"]}),e.jsxs(Vl,{children:[e.jsx(rr,{}),$.length," ",$.length===1?"atividade":"atividades"]}),e.jsx(Dr,{$done:!0,children:j===$.length&&$.length>0?"Concluída hoje":"Em andamento"})]}),e.jsxs(L4,{children:[e.jsx("span",{children:"Progresso de hoje"}),e.jsxs("strong",{children:[j," de ",$.length," concluídos · ",A,"%"]})]}),e.jsx(O4,{"aria-label":`${A}% concluído`,children:e.jsx("div",{style:{width:`${A}%`}})}),$.length>0?e.jsx(I4,{"aria-label":`Itens da tarefa ${N.title}`,children:$.map(O=>e.jsxs(B4,{$completed:O.is_completed,children:[e.jsx("input",{type:"checkbox",checked:O.is_completed,onChange:ae=>c(O.id,ae.target.checked)}),e.jsx(q4,{$completed:O.is_completed,children:O.title}),O.is_completed&&e.jsx(tn,{size:16,color:"var(--success)","aria-label":"Concluído"})]},O.id))}):e.jsx(Xe,{children:e.jsx("p",{children:V?"Esta tarefa ainda não possui itens para hoje.":"Os itens diários desta tarefa não foram encontrados."})}),e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsx(pe,{$variant:"danger",onClick:()=>u(N.id),children:"Desativar tarefa"})})]},N.id)})})]})}const V4=h.nav`
  display: flex; gap: 6px; padding: 5px; margin-bottom: 22px; border: 1px solid var(--border); border-radius: 12px; background: var(--surface-raised);
  @media (max-width: 520px) { width: 100%; overflow-x: auto; }
`,wo=h.button`
  display: inline-flex; align-items: center; justify-content: center; gap: 8px; flex: 1; min-width: 110px; border: 0; border-radius: 9px; padding: 11px 15px; color: var(--muted); background: transparent; font-weight: 700; cursor: pointer;
  ${({$active:t})=>t&&"color: var(--primary-strong); background: var(--surface); box-shadow: 0 3px 10px var(--shadow);"}
  &:hover { color: var(--primary-strong); }
  svg { width: 17px; height: 17px; }
`,W4=h(wo)`
  @media (max-width: 620px) { min-width: 125px; }
`;function G4({history:t,...a}){const[s,l]=x.useState("today");return e.jsxs(e.Fragment,{children:[e.jsxs(V4,{"aria-label":"Período do planejamento",children:[e.jsxs(wo,{type:"button",$active:s==="today",onClick:()=>l("today"),children:[e.jsx(rn,{}),"Hoje"]}),e.jsxs(wo,{type:"button",$active:s==="week",onClick:()=>l("week"),children:[e.jsx(Jp,{}),"Semana"]}),e.jsxs(wo,{type:"button",$active:s==="month",onClick:()=>l("month"),children:[e.jsx(Je,{}),"Mês"]}),e.jsxs(wo,{type:"button",$active:s==="completed",onClick:()=>l("completed"),children:[e.jsx(Je,{}),"Concluídas"]}),e.jsxs(W4,{type:"button",$active:s==="history",onClick:()=>l("history"),children:[e.jsx(Jp,{}),"Histórico"]})]}),s==="today"&&e.jsx(py,{...a}),s==="week"&&e.jsx(fy,{...a}),s==="month"&&e.jsx(uy,{...a}),s==="completed"&&e.jsx(ly,{dailyRecords:a.dailyRecords,loading:a.loading,onNavigate:a.onNavigate}),s==="history"&&e.jsx(cy,{...t,loading:a.loading})]})}const qf=$i`
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
`,K4=$i`
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
`,Q4=$i`
  0%, 100% { transform: scale(.88); opacity: .48; }
  50% { transform: scale(1.08); opacity: 1; }
`,Y4=$i`
  0%, 100% { transform: translateY(0) rotate(-4deg); }
  50% { transform: translateY(-8px) rotate(4deg); }
`,J4=h.div`
  animation: ${qf} .35s ease-out both;
  @media (prefers-reduced-motion: reduce) { animation: none; }
`,X4=h.div`
  display: grid; justify-items: center; gap: 12px; min-height: 150px; place-content: center; color: var(--muted); text-align: center;
  p { margin: 0; font-size: 12px; }
  @media (prefers-reduced-motion: reduce) { &, * { animation: none !important; } }
`,Z4=h.div`
  position: relative; display: grid; width: 68px; height: 68px; place-items: center; color: var(--primary);
  background: color-mix(in srgb, var(--primary) 18%, var(--surface)); border-radius: 50%; box-shadow: 0 10px 24px var(--shadow); animation: ${Y4} 2.2s ease-in-out infinite;
  svg { position: relative; z-index: 1; width: 27px; height: 27px; }
  &::before, &::after { position: absolute; inset: -8px; border: 1px solid rgba(67,128,238,.28); border-radius: 50%; content: ''; animation: ${Q4} 2s ease-out infinite; }
  &::after { inset: -17px; border-color: rgba(67,128,238,.14); animation-delay: .35s; }
`,Pg=h.div`
  display: grid;
  gap: 12px;
  margin-top: 18px;
  & > article { animation: ${K4} .3s ease-out both; }
  & > article:nth-child(2) { animation-delay: 40ms; }
  & > article:nth-child(3) { animation-delay: 80ms; }
  & > article:nth-child(4) { animation-delay: 120ms; }
  & > article:nth-child(n+5) { animation-delay: 160ms; }
  @media (prefers-reduced-motion: reduce) { & > article { animation: none; } }
`,Ng=h.article`
  display: grid;
  grid-template-columns: 52px minmax(0, 1fr) auto;
  gap: 14px;
  align-items: start;
  padding: 16px;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: var(--surface);
  @media (max-width: 620px) { grid-template-columns: 42px minmax(0, 1fr); }
`,Ag=h.div`
  display: grid;
  width: 46px;
  height: 46px;
  place-items: center;
  border-radius: 13px;
  color: ${({$type:t})=>t==="aniversario"?"var(--warning)":t==="lembrete"?"var(--info)":"var(--success)"};
  background: ${({$type:t})=>t==="aniversario"?"var(--warning-soft)":t==="lembrete"?"var(--info-soft)":"var(--success-soft)"};
  svg { width: 21px; height: 21px; }
  @media (max-width: 620px) { width: 40px; height: 40px; }
`,Dg=h.div`
  min-width: 0;
  h3 { margin: 0; color: var(--text); font-size: 15px; overflow-wrap: anywhere; }
  p { margin: 5px 0 0; color: var(--muted); font-size: 12px; line-height: 1.5; white-space: pre-wrap; overflow-wrap: anywhere; }
`,Wl=h.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px 12px;
  margin-top: 9px;
  color: var(--muted);
  font-size: 11px;
  svg { width: 14px; height: 14px; }
`,Mg=h.div`
  display: flex;
  gap: 7px;
  @media (max-width: 620px) { grid-column: 2; }
`,Tg=h.button`
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
`,e3=h(Ue)`
  width: min(680px, calc(100vw - 32px));
  max-height: min(88vh, 760px);
  overflow-y: auto;
  margin: 0;
  padding: 24px;
  box-shadow: 0 24px 70px rgba(20, 38, 66, .22);
  animation: ${qf} .22s ease-out both;
  @media (max-width: 620px) { width: calc(100vw - 20px); padding: 18px; max-height: 92vh; }
`,t3=h.div`
  position: fixed; z-index: 1000; inset: 0; display: grid; place-items: center; padding: 16px;
  background: rgba(19, 31, 51, .48); backdrop-filter: blur(5px); animation: ${qf} .18s ease-out both;
`,r3=h.div`
  display: flex; align-items: flex-start; justify-content: space-between; gap: 12px; margin-bottom: 14px;
`,n3=h.button`
  display: grid; width: 34px; height: 34px; flex: 0 0 auto; place-items: center;
  border: 1px solid var(--border); border-radius: 9px; color: var(--muted); background: var(--surface); cursor: pointer;
  &:hover { color: var(--primary); background: var(--surface-raised); }
`,a3=h.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0 16px;
  @media (max-width: 620px) { grid-template-columns: 1fr; }
`,i3=h.div`
  display: flex;
  justify-content: flex-end;
  gap: 9px;
  flex-wrap: wrap;
  margin-top: 18px;
`,s3=h.label`
  display: flex;
  align-items: center;
  gap: 9px;
  margin: 0 0 18px;
  color: var(--text);
  font-size: 13px;
  input { width: 16px; height: 16px; accent-color: var(--primary); }
`,Fg=h.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-top: 18px;
  color: var(--muted);
  font-size: 12px;
`,o3=h.span`
  display: inline-flex;
  align-items: center;
  border-radius: 999px;
  padding: 5px 9px;
  color: var(--warning);
  background: var(--warning-soft);
  font-size: 11px;
  font-weight: 700;
`,l3=h(Ue)`
  margin-bottom: 20px;
  border-color: var(--border);
  background: linear-gradient(135deg, var(--surface), var(--surface-raised));
`,rs=h.div`
  position: relative;
  display: flex;
  align-items: center;
  svg { position: absolute; left: 12px; z-index: 1; width: 17px; height: 17px; color: var(--primary); pointer-events: none; }
  input { width: 100%; padding-left: 38px; border-color: var(--border); background: linear-gradient(135deg, var(--surface), var(--surface-raised)); }
  input:hover { border-color: var(--primary); }
  input:focus { border-color: var(--primary); box-shadow: 0 0 0 3px var(--focus); }
  input::-webkit-calendar-picker-indicator { cursor: pointer; opacity: .72; }
`,c3=h.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  margin-bottom: 20px;
  @media (max-width: 620px) { grid-template-columns: 1fr; }
`,lp=h.div`
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
`,d3=h.div`
  margin: -4px 0 16px;
  padding: 10px 12px;
  border: 1px solid var(--border);
  border-radius: 9px;
  color: var(--muted);
  background: var(--surface-raised);
  font-size: 12px;
`;function sf(t){return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`}function u3(){const t=new Date,a=new Date(t);return a.setDate(a.getDate()+30),{from:sf(t),to:sf(a)}}function Lg(t){return new Date(`${t.slice(0,10)}T12:00:00`).toLocaleDateString("pt-BR",{weekday:"long",day:"numeric",month:"long",year:"numeric"})}function cp(t){return t?t.slice(0,5):""}function p3(t){if(!t)return"";const a=new Date(t),s=l=>String(l).padStart(2,"0");return`${a.getFullYear()}-${s(a.getMonth()+1)}-${s(a.getDate())}T${s(a.getHours())}:${s(a.getMinutes())}`}function Og(t){return t==="aniversario"?"Aniversário":t==="atividade"?"Atividade":"Lembrete"}function f3(t){return t==="concluido"?"Concluído":t==="cancelado"?"Cancelado":"Pendente"}function h3(t){return t==="lembrete_definido"?"Lembrete agendado":"Nas próximas 24 horas"}function lo(t){return(t.occurrence_date??t.event_date).slice(0,10)}function Ig({message:t}){return e.jsxs(X4,{children:[e.jsx(Z4,{children:e.jsx(mc,{})}),e.jsx("p",{children:t})]})}function m3({events:t,alerts:a,loading:s,alertsLoading:l,saving:c,query:u,pagination:m,alertPagination:f,onApplyFilter:g,onPageChange:w,onAlertPageChange:b,onCreate:S,onUpdate:_,onDelete:R}){const M=x.useMemo(u3,[]),[N,V]=x.useState(u.mode),[$,j]=x.useState(M.from),[A,O]=x.useState(M.from),[ae,J]=x.useState(M.to),[I,ce]=x.useState(""),[C,y]=x.useState(!1),[q,F]=x.useState(null),[fe,ge]=x.useState(""),[Ne,K]=x.useState(""),[je,ue]=x.useState("lembrete"),[ye,W]=x.useState(M.from),[z,k]=x.useState(""),[se,ie]=x.useState(""),[D,de]=x.useState(!1),[_e,ke]=x.useState("pendente"),[U,he]=x.useState(null),nt=x.useRef(null),Ze=x.useMemo(()=>[...t].sort((Y,Be)=>lo(Y).localeCompare(lo(Be))||(Y.event_time??"").localeCompare(Be.event_time??"")),[t]);x.useEffect(()=>{V(u.mode),u.mode==="date"&&j(u.date),u.mode==="range"&&(O(u.from),J(u.to))},[u]),x.useEffect(()=>{if(!C)return;const Y=_t=>{_t.key==="Escape"&&!c&&pt()};document.addEventListener("keydown",Y);const Be=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.removeEventListener("keydown",Y),document.body.style.overflow=Be}},[C,c]);function pt(){y(!1),F(null),ge(""),K(""),ue("lembrete"),W(sf(new Date)),k(""),ie(""),de(!1),ke("pendente")}function ht(){pt(),y(!0)}function Ot(Y){F(Y),y(!0),ge(Y.title),K(Y.description??""),ue(Y.type),W(Y.event_date.slice(0,10)),k(cp(Y.event_time)),ie(p3(Y.reminder_at)),de(Y.repeat_yearly),ke(Y.status)}async function oe(Y){Y.preventDefault();try{const Be={title:fe.trim(),description:Ne.trim()||null,type:je,event_date:ye,event_time:z||null,reminder_at:se?new Date(se).toISOString():null,repeat_yearly:D,status:_e};(q?await _(q.id,Be):await S(Be))?(he({variant:"success",title:q?"Agendamento atualizado":"Agendamento criado",message:q?"As alterações foram salvas com sucesso.":"O novo agendamento já está disponível na sua agenda."}),pt()):he({variant:"error",title:"Não foi possível salvar",message:"Verifique os dados e tente novamente."})}catch{he({variant:"error",title:"Erro ao salvar",message:"Ocorreu um problema ao comunicar com o servidor."})}}async function $e(Y,Be){try{const _t=await _(Y.id,{status:Be});he(_t?{variant:"success",title:Be==="concluido"?"Alerta concluído":"Alerta cancelado",message:`“${Y.title}” foi atualizado com sucesso.`}:{variant:"error",title:"Não foi possível atualizar o alerta",message:"Tente novamente em instantes."})}catch{he({variant:"error",title:"Erro ao atualizar o alerta",message:"Ocorreu um problema ao comunicar com o servidor."})}}async function me(Y){try{const Be=await R(Y);he(Be?{variant:"success",title:"Agendamento excluído",message:`“${Y.title}” foi removido da agenda.`}:{variant:"error",title:"Não foi possível excluir",message:"O agendamento não foi removido. Tente novamente."})}catch{he({variant:"error",title:"Erro ao excluir",message:"Ocorreu um problema ao comunicar com o servidor."})}}function Pe(Y){if(Y.preventDefault(),ce(""),N==="all"){g({mode:"all"});return}if(N==="date"){if(!$){ce("Selecione a data que deseja consultar.");return}g({mode:"date",date:$});return}if(!A||!ae){ce("Informe as datas inicial e final do intervalo.");return}if(A>ae){ce("A data inicial não pode ser posterior à data final.");return}g({mode:"range",from:A,to:ae})}return e.jsxs(J4,{children:[U&&e.jsx(ty,{variant:U.variant,title:U.title,message:U.message,onDismiss:()=>he(null)},`${U.variant}-${U.title}-${U.message}`),e.jsxs(Mr,{children:[e.jsxs("div",{children:[e.jsx("h1",{children:"Agenda"}),e.jsx("p",{children:"Organize lembretes, atividades e aniversários em um só lugar."})]}),e.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap",justifyContent:"flex-end"},children:[e.jsxs(pe,{type:"button",onClick:()=>{var Y;return(Y=nt.current)==null?void 0:Y.scrollIntoView({behavior:"smooth",block:"start"})},children:[e.jsx(mc,{}),"Alertas ",f.total>0&&`(${f.total})`]}),e.jsxs(pe,{$variant:"primary",onClick:C?pt:ht,children:[C?e.jsx(mr,{}):e.jsx(yt,{}),C?"Fechar":"Novo agendamento"]})]})]}),e.jsxs(c3,{"aria-label":"Resumo da agenda",children:[e.jsxs(lp,{children:[e.jsx("span",{children:e.jsx(Je,{})}),e.jsxs("div",{children:[e.jsx("small",{children:"Agendamentos exibidos"}),e.jsx("strong",{children:m.total})]})]}),e.jsxs(lp,{children:[e.jsx("span",{children:e.jsx(mc,{})}),e.jsxs("div",{children:[e.jsx("small",{children:"Alertas pendentes"}),e.jsx("strong",{children:f.total})]})]}),e.jsxs(lp,{children:[e.jsx("span",{children:e.jsx(tn,{})}),e.jsxs("div",{children:[e.jsx("small",{children:"Período consultado"}),e.jsx("strong",{children:u.mode==="all"?"Todos":u.mode==="date"?"1 dia":"Intervalo"})]})]})]}),e.jsx("div",{ref:nt,id:"agenda-alertas",children:e.jsxs(l3,{children:[e.jsxs(Fe,{children:[e.jsx(mc,{size:19,color:"var(--warning)"}),"Alertas ",f.total>0&&`(${f.total})`]}),l?e.jsx(Ig,{message:"Verificando seus alertas..."}):a.length===0?e.jsxs(Xe,{children:[e.jsx(hi,{size:30}),e.jsx("h3",{children:"Nenhum alerta pendente"}),e.jsx("p",{children:"Lembretes vencidos e eventos das próximas 24 horas aparecerão aqui."})]}):e.jsxs(e.Fragment,{children:[e.jsx(Pg,{children:a.map(Y=>e.jsxs(Ng,{children:[e.jsx(Ag,{$type:Y.type,children:Y.type==="aniversario"?e.jsx(eg,{}):Y.type==="lembrete"?e.jsx(hi,{}):e.jsx(Je,{})}),e.jsxs(Dg,{children:[e.jsx("h3",{children:Y.title}),Y.description&&e.jsx("p",{children:Y.description}),e.jsxs(Wl,{children:[e.jsx("span",{children:Og(Y.type)}),e.jsx("span",{children:Lg(lo(Y))}),Y.event_time&&e.jsxs("span",{children:[e.jsx(rn,{}),cp(Y.event_time)]}),Y.alert_reasons.map(Be=>e.jsx(o3,{children:h3(Be)},Be))]}),Y.reminder_at&&e.jsx(Wl,{children:e.jsxs("span",{children:[e.jsx(hi,{}),"Lembrete: ",new Date(Y.reminder_at).toLocaleString("pt-BR",{dateStyle:"short",timeStyle:"short"})]})})]}),e.jsxs(Mg,{children:[e.jsxs(pe,{type:"button",$variant:"primary","aria-label":`Concluir ${Y.title} e remover dos alertas`,title:"Concluir e remover dos alertas",disabled:c,onClick:()=>{$e(Y,"concluido")},children:[e.jsx(tn,{}),"Concluir"]}),e.jsxs(pe,{type:"button",$variant:"danger","aria-label":`Cancelar ${Y.title} e remover dos alertas`,title:"Cancelar e remover dos alertas",disabled:c,onClick:()=>{$e(Y,"cancelado")},children:[e.jsx(lk,{}),"Cancelar"]})]})]},Y.id))}),f.totalPages>1&&e.jsxs(Fg,{children:[e.jsxs("span",{children:["Página ",f.page," de ",f.totalPages]}),e.jsxs("div",{style:{display:"flex",gap:7},children:[e.jsx(pe,{type:"button","aria-label":"Alertas página anterior",disabled:!f.hasPreviousPage||l,onClick:()=>b(f.page-1),children:e.jsx(Ao,{})}),e.jsx(pe,{type:"button","aria-label":"Próxima página de alertas",disabled:!f.hasNextPage||l,onClick:()=>b(f.page+1),children:e.jsx(ms,{})})]})]})]})]})}),C&&Gc.createPortal(e.jsx(t3,{role:"presentation",onMouseDown:Y=>{Y.target===Y.currentTarget&&!c&&pt()},children:e.jsxs(e3,{role:"dialog","aria-modal":"true","aria-labelledby":"schedule-modal-title",onMouseDown:Y=>Y.stopPropagation(),children:[e.jsxs(r3,{children:[e.jsxs(Fe,{id:"schedule-modal-title",children:[q?e.jsx(an,{size:19,color:"var(--primary)"}):e.jsx(hi,{size:19,color:"var(--primary)"}),q?"Editar agendamento":"Criar agendamento"]}),e.jsx(n3,{type:"button","aria-label":"Fechar janela",title:"Fechar (Esc)",onClick:pt,disabled:c,children:e.jsx(mr,{size:18})})]}),e.jsx(d3,{children:"Preencha os dados abaixo. Você receberá um aviso de confirmação após salvar ou atualizar o agendamento."}),e.jsxs("form",{onSubmit:Y=>{oe(Y)},children:[e.jsxs(a3,{children:[e.jsxs(X,{children:["Título *",e.jsx("input",{value:fe,onChange:Y=>ge(Y.target.value),maxLength:200,placeholder:"Ex.: Aniversário da Ana",required:!0})]}),e.jsxs(X,{children:["Tipo *",e.jsxs(sn,{value:je,onChange:Y=>{const Be=Y.target.value;ue(Be),de(Be==="aniversario")},children:[e.jsx("option",{value:"lembrete",children:"Lembrete"}),e.jsx("option",{value:"atividade",children:"Atividade"}),e.jsx("option",{value:"aniversario",children:"Aniversário"})]})]}),e.jsxs(X,{children:["Data *",e.jsxs(rs,{children:[e.jsx(Je,{size:17,"aria-hidden":"true"}),e.jsx("input",{type:"date",value:ye,onChange:Y=>W(Y.target.value),required:!0})]})]}),e.jsxs(X,{children:["Horário ",e.jsx("small",{children:"(opcional)"}),e.jsxs(rs,{children:[e.jsx(rn,{size:17,"aria-hidden":"true"}),e.jsx("input",{type:"time",value:z,onChange:Y=>k(Y.target.value)})]})]}),e.jsxs(X,{children:["Lembrar em ",e.jsx("small",{children:"(opcional)"}),e.jsxs(rs,{children:[e.jsx(rn,{size:17,"aria-hidden":"true"}),e.jsx("input",{type:"datetime-local",value:se,onChange:Y=>ie(Y.target.value)})]})]}),e.jsxs(X,{children:["Status",e.jsxs(sn,{value:_e,onChange:Y=>ke(Y.target.value),children:[e.jsx("option",{value:"pendente",children:"Pendente"}),e.jsx("option",{value:"concluido",children:"Concluído"}),e.jsx("option",{value:"cancelado",children:"Cancelado"})]})]})]}),e.jsxs(X,{children:["Descrição ",e.jsx("small",{children:"(opcional)"}),e.jsx("textarea",{value:Ne,onChange:Y=>K(Y.target.value),placeholder:"Adicione detalhes importantes..."})]}),e.jsxs(s3,{children:[e.jsx("input",{type:"checkbox",checked:D,onChange:Y=>de(Y.target.checked)}),"Repetir todos os anos"]}),e.jsxs(i3,{children:[e.jsx(pe,{type:"button",onClick:pt,children:"Cancelar"}),e.jsxs(pe,{type:"submit",$variant:"primary",disabled:c,children:[c?e.jsx(rt,{className:"spin"}):e.jsx(ws,{}),c?"Salvando...":q?"Salvar alterações":"Criar agendamento"]})]})]})]})}),document.body),e.jsxs(Ue,{children:[e.jsxs(Fe,{children:[e.jsx(Je,{size:19,color:"var(--primary)"}),"Consultar agendamentos"]}),e.jsxs("form",{onSubmit:Pe,children:[e.jsxs(ay,{children:[e.jsxs(X,{children:["Consulta",e.jsxs(sn,{value:N,onChange:Y=>{V(Y.target.value),ce("")},children:[e.jsx("option",{value:"all",children:"Todos os agendamentos"}),e.jsx("option",{value:"date",children:"Data específica"}),e.jsx("option",{value:"range",children:"Intervalo de datas"})]})]}),N==="date"&&e.jsxs(X,{children:["Data",e.jsxs(rs,{children:[e.jsx(Je,{size:17,"aria-hidden":"true"}),e.jsx("input",{type:"date",value:$,onChange:Y=>j(Y.target.value),required:!0})]})]}),N==="range"&&e.jsxs(e.Fragment,{children:[e.jsxs(X,{children:["De",e.jsxs(rs,{children:[e.jsx(Je,{size:17,"aria-hidden":"true"}),e.jsx("input",{type:"date",value:A,onChange:Y=>O(Y.target.value),required:!0})]})]}),e.jsxs(X,{children:["Até",e.jsxs(rs,{children:[e.jsx(Je,{size:17,"aria-hidden":"true"}),e.jsx("input",{type:"date",min:A,value:ae,onChange:Y=>J(Y.target.value),required:!0})]})]})]}),e.jsxs(pe,{type:"submit",$variant:"primary",disabled:s,children:[s?e.jsx(rt,{className:"spin"}):e.jsx(Je,{}),"Consultar"]})]}),I&&e.jsx("p",{role:"alert",style:{marginTop:10,color:"var(--error)",fontSize:12},children:I})]}),s?e.jsx(Ig,{message:"Organizando sua agenda..."}):Ze.length===0?e.jsxs(Xe,{children:[e.jsx(Je,{size:32}),e.jsx("h3",{children:"Nenhum agendamento neste período"}),e.jsx("p",{children:"Cadastre um lembrete, atividade ou aniversário para organizar sua agenda."})]}):e.jsx(Pg,{children:Ze.map(Y=>e.jsxs(Ng,{children:[e.jsx(Ag,{$type:Y.type,children:Y.type==="aniversario"?e.jsx(eg,{}):Y.type==="lembrete"?e.jsx(hi,{}):e.jsx(Je,{})}),e.jsxs(Dg,{children:[e.jsx("h3",{children:Y.title}),Y.description&&e.jsx("p",{children:Y.description}),e.jsxs(Wl,{children:[e.jsx("span",{children:Og(Y.type)}),e.jsx("span",{children:Lg(lo(Y))}),Y.event_time&&e.jsxs("span",{children:[e.jsx(rn,{}),cp(Y.event_time)]}),Y.repeat_yearly&&e.jsx("span",{children:"Anual"}),e.jsx(Dr,{$done:Y.status==="concluido",children:f3(Y.status)})]}),Y.reminder_at&&e.jsx(Wl,{children:e.jsxs("span",{children:[e.jsx(hi,{}),"Lembrete: ",new Date(Y.reminder_at).toLocaleString("pt-BR",{dateStyle:"short",timeStyle:"short"})]})})]}),e.jsxs(Mg,{children:[e.jsx(Tg,{type:"button","aria-label":`Editar ${Y.title}`,title:"Editar",onClick:()=>Ot(Y),children:e.jsx(an,{})}),e.jsx(Tg,{type:"button","aria-label":`Excluir ${Y.title}`,title:"Excluir","data-danger":"true",disabled:c,onClick:()=>{window.confirm(`Excluir o agendamento “${Y.title}”?`)&&me(Y)},children:e.jsx(Rr,{})})]})]},`${Y.id}-${lo(Y)}`))}),!s&&m.total>0&&e.jsxs(Fg,{children:[e.jsxs("span",{children:[m.total," ocorrência(s) · Página ",m.page," de ",m.totalPages]}),e.jsxs("div",{style:{display:"flex",gap:7},children:[e.jsx(pe,{type:"button","aria-label":"Página anterior",disabled:!m.hasPreviousPage,onClick:()=>w(m.page-1),children:e.jsx(Ao,{})}),e.jsx(pe,{type:"button","aria-label":"Próxima página",disabled:!m.hasNextPage,onClick:()=>w(m.page+1),children:e.jsx(ms,{})})]})]})]})]})}const x3=h.div`
  overflow: hidden;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: var(--surface-raised);
  &:focus-within { border-color: var(--primary); box-shadow: 0 0 0 4px var(--focus); }
`,g3=h.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding: 8px;
  border-bottom: 1px solid var(--border);
  background: var(--surface);
`,Oa=h.button`
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
`,v3=h.div`
  min-height: ${({$minHeight:t})=>`${t}px`};
  max-height: ${({$minHeight:t})=>`${Math.max(560,t+180)}px`};
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
`;function hy({value:t,onChange:a,placeholder:s="Escreva o conteúdo...",minHeight:l=280,ariaLabel:c="Conteúdo"}){const u=x.useRef(null),m=x.useRef(!1);x.useEffect(()=>{const b=u.current;!b||m.current||b.innerHTML!==t&&(b.innerHTML=t)},[t]);function f(){var b;a(((b=u.current)==null?void 0:b.innerHTML)??"")}function g(b,S){var _;(_=u.current)==null||_.focus(),document.execCommand(b,!1,S),f()}function w(){var S;const b=(S=window.prompt("Informe a URL do link"))==null?void 0:S.trim();b&&g("createLink",b)}return e.jsxs(x3,{children:[e.jsxs(g3,{role:"toolbar","aria-label":"Formatador de texto",children:[e.jsx(Oa,{type:"button",title:"Negrito","aria-label":"Negrito",onMouseDown:b=>b.preventDefault(),onClick:()=>g("bold"),children:e.jsx(ck,{})}),e.jsx(Oa,{type:"button",title:"Itálico","aria-label":"Itálico",onMouseDown:b=>b.preventDefault(),onClick:()=>g("italic"),children:e.jsx(kk,{})}),e.jsx(Oa,{type:"button",title:"Sublinhado","aria-label":"Sublinhado",onMouseDown:b=>b.preventDefault(),onClick:()=>g("underline"),children:e.jsx(Bk,{})}),e.jsx(Oa,{type:"button",title:"Riscado","aria-label":"Riscado",onMouseDown:b=>b.preventDefault(),onClick:()=>g("strikeThrough"),children:e.jsx(Fk,{})}),e.jsx(Oa,{type:"button",title:"Título","aria-label":"Título",onMouseDown:b=>b.preventDefault(),onClick:()=>g("formatBlock","h2"),children:e.jsx(bk,{})}),e.jsx(Oa,{type:"button",title:"Lista","aria-label":"Lista",onMouseDown:b=>b.preventDefault(),onClick:()=>g("insertUnorderedList"),children:e.jsx(Ck,{})}),e.jsx(Oa,{type:"button",title:"Lista numerada","aria-label":"Lista numerada",onMouseDown:b=>b.preventDefault(),onClick:()=>g("insertOrderedList"),children:e.jsx(Sk,{})}),e.jsx(Oa,{type:"button",title:"Inserir link","aria-label":"Inserir link",onMouseDown:b=>b.preventDefault(),onClick:w,children:e.jsx(K1,{})})]}),e.jsx(v3,{ref:u,$minHeight:l,role:"textbox","aria-label":c,contentEditable:!0,suppressContentEditableWarning:!0,"data-placeholder":s,onFocus:()=>{m.current=!0},onBlur:()=>{m.current=!1,f()},onInput:f})]})}const y3=new Set(["P","BR","STRONG","B","EM","I","U","S","STRIKE","H1","H2","H3","UL","OL","LI","A","BLOCKQUOTE","DIV","SPAN"]);function j3(t){return/<\/?[a-z][\s\S]*>/i.test(t)}function b3(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function wi(t){if(!t.trim())return"";const a=new DOMParser().parseFromString(t,"text/html");function s(l){var u;const c=[...l.childNodes];for(const m of c){if(m.nodeType===Node.COMMENT_NODE){m.remove();continue}if(m.nodeType!==Node.ELEMENT_NODE)continue;const f=m,g=f.tagName;if(g==="SCRIPT"||g==="STYLE"||g==="IFRAME"||g==="OBJECT"){f.remove();continue}if(!y3.has(g)){const w=f.parentNode;if(w){for(;f.firstChild;)w.insertBefore(f.firstChild,f);f.remove()}continue}for(const w of[...f.attributes]){const b=w.name.toLowerCase();(b.startsWith("on")||b==="style"||b==="srcdoc")&&f.removeAttribute(w.name)}if(g==="A"){const w=((u=f.getAttribute("href"))==null?void 0:u.trim())??"";/^(https?:|mailto:|#)/i.test(w)?(f.setAttribute("target","_blank"),f.setAttribute("rel","noreferrer noopener")):f.removeAttribute("href")}s(f)}}return s(a.body),a.body.innerHTML}function w3(t){return t.trim()?j3(t)?wi(t):t.split(/\n{2,}/).map(a=>`<p>${b3(a).replace(/\n/g,"<br>")}</p>`).join(""):""}function _3(t){return t?(new DOMParser().parseFromString(wi(t),"text/html").body.textContent??"").replace(/\u00a0/g," ").trim():""}function gi(t){return!_3(t)}function k3(t){var a;try{const s=new URL(t);if(s.hostname.includes("youtu.be"))return s.pathname.slice(1,12);if(s.hostname.includes("youtube.com"))return s.searchParams.get("v")??((a=s.pathname.match(/\/embed\/([a-zA-Z0-9_-]{11})/))==null?void 0:a[1])??null}catch{return null}return null}const S3=h.div`
  display: grid;
  grid-template-columns: 220px minmax(0, 1fr);
  gap: 18px;
  align-items: start;
  @media (max-width: 900px) { grid-template-columns: 1fr; }
`,C3=h.div`
  display: grid; gap: 7px;
  button { display: flex; align-items: center; justify-content: space-between; gap: 8px; width: 100%; padding: 10px 11px; border: 1px solid var(--border); border-radius: 9px; color: var(--muted); background: var(--surface); text-align: left; font-size: 12px; cursor: pointer; &:hover { border-color: var(--primary); background: var(--surface-raised); } }
  button[data-active='true'] { border-color: var(--primary); color: var(--primary-strong); background: color-mix(in srgb, var(--primary) 16%, var(--surface)); font-weight: 700; }
  span { min-width: 22px; padding: 3px 6px; border-radius: 999px; color: var(--muted); background: var(--surface-raised); text-align: center; font-size: 10px; }
`,E3=h.div`
  display: grid; grid-template-columns: repeat(auto-fill, minmax(min(100%, 290px), 1fr)); gap: 13px;
`,$3=h.article`
  display: grid; gap: 13px; padding: 17px; border: 1px solid var(--border); border-radius: 14px; background: var(--surface); box-shadow: 0 4px 14px var(--shadow); transition: .15s ease;
  &:hover { transform: translateY(-2px); border-color: var(--primary); box-shadow: 0 10px 24px var(--shadow); }
`,R3=h.div`
  display: flex; align-items: flex-start; justify-content: space-between; gap: 10px;
  h3 { margin: 0; color: var(--text); font-size: 15px; line-height: 1.4; overflow-wrap: anywhere; }
  p { margin: 4px 0 0; color: var(--muted); font-size: 11px; }
`,z3=h.span`
  display: grid; width: 36px; height: 36px; flex: 0 0 auto; place-items: center; border-radius: 10px; color: var(--primary); background: color-mix(in srgb, var(--primary) 16%, var(--surface)); svg { width: 18px; height: 18px; }
`,P3=h.div`
  display: -webkit-box; max-height: 82px; margin: 0; overflow: hidden; color: var(--muted); font-size: 12px; line-height: 1.55; -webkit-box-orient: vertical; -webkit-line-clamp: 4;
  & > :first-child { margin-top: 0; }
  p, h1, h2, h3, blockquote { margin: 0 0 5px; font-size: inherit; line-height: inherit; }
  ul, ol { margin: 3px 0; padding-left: 18px; }
  strong, b { color: var(--text); }
  a { color: var(--primary-strong); }
`,N3=h.div`
  color: var(--text); font-size: 14px; line-height: 1.75; overflow-wrap: anywhere;
  p, h1, h2, h3, blockquote { margin: 0 0 12px; }
  h1, h2, h3, strong, b { color: var(--text); }
  ul, ol { padding-left: 22px; }
  blockquote { padding: 8px 12px; border-left: 3px solid var(--primary); color: var(--muted); background: var(--surface-raised); }
  a { color: var(--primary-strong); }
`,A3=h.p`
  display: flex; flex-wrap: wrap; gap: 7px; margin: 0 0 14px; color: var(--muted); font-size: 12px;
`,Bg=h.div`
  display: flex; flex-wrap: wrap; gap: 5px; span { padding: 4px 7px; border-radius: 999px; color: var(--muted); background: var(--surface-raised); font-size: 10px; }
`,D3=h.div`
  display: flex; align-items: center; justify-content: space-between; gap: 7px; padding-top: 10px; border-top: 1px solid var(--border);
`,M3=h.div`
  display: flex; gap: 7px;
`,qg=h.button`
  display: grid; width: 32px; height: 32px; place-items: center; border: 1px solid var(--border); border-radius: 8px; color: var(--muted); background: var(--surface-raised); cursor: pointer; &:hover { color: var(--primary); background: var(--surface); } &[data-danger='true']:hover { color: var(--error); background: var(--error-soft); } svg { width: 15px; height: 15px; }
`,T3=h(Ue)`
  margin-bottom: 18px;
`,F3=h.div`
  display: grid; grid-template-columns: 1fr 1fr; gap: 0 15px; @media (max-width: 620px) { grid-template-columns: 1fr; }
`,L3=h.div`
  display: flex; justify-content: flex-end; gap: 8px; margin-top: 8px; flex-wrap: wrap;
`,O3=h.div`
  display: flex; flex-wrap: wrap; align-items: flex-end; gap: 10px; margin-bottom: 18px; padding: 14px; border: 1px solid var(--border); border-radius: 12px; background: var(--surface-raised);
  ${X} { min-width: 170px; flex: 1; margin: 0; }
`,I3=h.div`
  display: flex; justify-content: space-between; align-items: center; gap: 10px; margin-top: 18px; color: var(--muted); font-size: 11px;
`,Gl={link:"Link",texto:"Texto",documento:"Documento",video:"Vídeo",curso:"Curso",livro:"Livro",artigo:"Artigo",outro:"Outro"};function B3(t){return t==="link"?e.jsx(K1,{}):t==="video"?e.jsx(Uk,{}):t==="documento"||t==="artigo"?e.jsx(vk,{}):e.jsx(Zr,{})}function q3({resources:t,areas:a,loading:s,saving:l,pagination:c,filters:u,onFiltersChange:m,onPageChange:f,onCreate:g,onDelete:w,onEdit:b}){const[S,_]=x.useState(!1),[R,M]=x.useState(null),[N,V]=x.useState(""),[$,j]=x.useState(""),[A,O]=x.useState("texto"),[ae,J]=x.useState(""),[I,ce]=x.useState(""),[C,y]=x.useState(""),[q,F]=x.useState(""),fe=x.useMemo(()=>a.reduce((K,je)=>K+je.count,0),[a]);function ge(){_(!1),V(""),j(""),O("texto"),J(""),ce(""),y(""),F("")}async function Ne(K){if(K.preventDefault(),F(""),!ae.trim()&&gi(I)){F("Informe uma URL ou escreva o conteúdo do material.");return}const je={title:N.trim(),area:$.trim(),type:A,url:ae.trim()||null,content:gi(I)?null:wi(I).slice(0,2e4),tags:C.split(",").map(ye=>ye.trim()).filter(Boolean)};await g(je)&&ge()}return e.jsxs(e.Fragment,{children:[e.jsxs(Mr,{children:[e.jsxs("div",{children:[e.jsx("h1",{children:"Biblioteca de estudos"}),e.jsx("p",{children:"Guarde links, resumos e materiais para revisar quando precisar."})]}),e.jsxs(pe,{$variant:"primary",onClick:S?ge:()=>_(!0),children:[S?e.jsx(mr,{}):e.jsx(yt,{}),S?"Fechar":"Novo material"]})]}),S&&e.jsxs(T3,{children:[e.jsxs(Fe,{children:[e.jsx(Zr,{size:19,color:"var(--primary)"}),"Adicionar material"]}),e.jsxs("form",{onSubmit:K=>{Ne(K)},children:[e.jsxs(F3,{children:[e.jsxs(X,{children:["Título *",e.jsx("input",{value:N,onChange:K=>V(K.target.value),maxLength:200,required:!0,placeholder:"Ex.: Anotações de álgebra"})]}),e.jsxs(X,{children:["Área *",e.jsx("input",{value:$,onChange:K=>j(K.target.value),maxLength:100,required:!0,placeholder:"Ex.: Matemática"})]}),e.jsxs(X,{children:["Tipo *",e.jsx(sn,{value:A,onChange:K=>O(K.target.value),children:Object.entries(Gl).map(([K,je])=>e.jsx("option",{value:K,children:je},K))})]}),e.jsxs(X,{children:["Tags ",e.jsx("small",{children:"(separadas por vírgula)"}),e.jsx("input",{value:C,onChange:K=>y(K.target.value),placeholder:"álgebra, revisão"})]})]}),e.jsxs(X,{children:["URL ",e.jsx("small",{children:"(opcional se houver conteúdo)"}),e.jsx("input",{type:"url",value:ae,onChange:K=>J(K.target.value),placeholder:"https://..."})]}),e.jsxs(X,{as:"div",children:["Conteúdo ",e.jsx("small",{children:"(opcional se houver URL)"}),e.jsx(hy,{value:I,onChange:ce,minHeight:280,placeholder:"Resumo, anotações ou pontos importantes...",ariaLabel:"Conteúdo do material"})]}),q&&e.jsx("p",{role:"alert",style:{color:"var(--error)",fontSize:12},children:q}),e.jsxs(L3,{children:[e.jsx(pe,{type:"button",onClick:ge,children:"Cancelar"}),e.jsxs(pe,{type:"submit",$variant:"primary",disabled:l,children:[l?e.jsx(rt,{className:"spin"}):e.jsx(yt,{}),"Adicionar material"]})]})]})]}),e.jsxs(O3,{children:[e.jsxs(X,{children:[e.jsx(J1,{size:14}),"Buscar material",e.jsx("input",{value:u.search,onChange:K=>m({...u,search:K.target.value}),placeholder:"Título, conteúdo ou tag"})]}),e.jsxs(X,{children:["Área",e.jsxs(sn,{value:u.area,onChange:K=>m({...u,area:K.target.value}),children:[e.jsx("option",{value:"",children:"Todas as áreas"}),a.map(K=>e.jsx("option",{value:K.area,children:K.area},K.area))]})]}),e.jsxs(X,{children:["Tipo",e.jsxs(sn,{value:u.type,onChange:K=>m({...u,type:K.target.value}),children:[e.jsx("option",{value:"",children:"Todos os tipos"}),Object.entries(Gl).map(([K,je])=>e.jsx("option",{value:K,children:je},K))]})]}),e.jsxs(pe,{type:"button",onClick:()=>m({area:"",type:"",search:""}),children:[e.jsx(yk,{}),"Limpar"]})]}),e.jsxs(S3,{children:[e.jsxs(Ue,{children:[e.jsxs(Fe,{children:[e.jsx(Zr,{size:18,color:"var(--primary)"}),"Áreas"]}),e.jsxs(C3,{children:[e.jsxs("button",{type:"button","data-active":!u.area,onClick:()=>m({...u,area:""}),children:[e.jsx("span",{children:"Todas as áreas"}),e.jsx("span",{children:fe})]}),a.map(K=>e.jsxs("button",{type:"button","data-active":u.area===K.area,onClick:()=>m({...u,area:K.area}),children:[e.jsx("span",{children:K.area}),e.jsx("span",{children:K.count})]},K.area))]})]}),e.jsxs(Ue,{children:[e.jsxs(Fe,{children:[e.jsx(Zr,{size:18,color:"var(--primary)"}),"Materiais ",e.jsx(Dr,{children:c.total})]}),s?e.jsxs(Xe,{children:[e.jsx(rt,{}),e.jsx("p",{children:"Carregando materiais..."})]}):t.length===0?e.jsxs(Xe,{children:[e.jsx(Zr,{size:32}),e.jsx("h3",{children:"Nenhum material encontrado"}),e.jsx("p",{children:"Adicione um resumo, link ou conteúdo para começar sua biblioteca."})]}):e.jsxs(e.Fragment,{children:[e.jsx(E3,{children:t.map(K=>{const je=K.content&&!gi(K.content)?wi(K.content):"";return e.jsxs($3,{children:[e.jsx(R3,{children:e.jsxs("div",{style:{display:"flex",gap:10,minWidth:0},children:[e.jsx(z3,{children:B3(K.type)}),e.jsxs("div",{children:[e.jsx("h3",{children:K.title}),e.jsxs("p",{children:[K.area," · ",Gl[K.type]]})]})]})}),je&&e.jsx(P3,{dangerouslySetInnerHTML:{__html:je}}),K.url&&e.jsxs("a",{href:K.url,target:"_blank",rel:"noreferrer",style:{color:"var(--primary)",fontSize:12,overflowWrap:"anywhere"},children:[e.jsx(Ec,{size:13,style:{verticalAlign:"middle",marginRight:5}}),"Abrir material"]}),K.tags.length>0&&e.jsx(Bg,{children:K.tags.map(ue=>e.jsxs("span",{children:["#",ue]},ue))}),e.jsxs(D3,{children:[e.jsxs(pe,{type:"button",onClick:()=>M(K),children:[e.jsx(Oo,{}),"Detalhes"]}),e.jsxs(M3,{children:[e.jsx(qg,{type:"button",title:"Editar material","aria-label":`Editar ${K.title}`,onClick:()=>b(K),children:e.jsx(an,{})}),e.jsx(qg,{type:"button",title:"Excluir material","aria-label":`Excluir ${K.title}`,"data-danger":"true",onClick:()=>{window.confirm(`Excluir o material “${K.title}”?`)&&w(K)},children:e.jsx(Rr,{})})]})]})]},K.id)})}),e.jsxs(I3,{children:[e.jsxs("span",{children:[c.total," materiais · Página ",c.page," de ",c.totalPages||1]}),e.jsxs("div",{style:{display:"flex",gap:7},children:[e.jsx(pe,{type:"button",disabled:!c.hasPreviousPage||s,onClick:()=>f(c.page-1),children:"Anterior"}),e.jsx(pe,{type:"button",disabled:!c.hasNextPage||s,onClick:()=>f(c.page+1),children:"Próxima"})]})]})]})]})]}),e.jsx(xs,{open:R!==null,title:(R==null?void 0:R.title)??"Detalhes do material",icon:e.jsx(Zr,{size:18}),onClose:()=>M(null),children:R&&e.jsxs(e.Fragment,{children:[e.jsxs(A3,{children:[e.jsx("span",{children:R.area}),e.jsx("span",{children:"·"}),e.jsx("span",{children:Gl[R.type]})]}),R.tags.length>0&&e.jsx(Bg,{style:{marginBottom:16},children:R.tags.map(K=>e.jsxs("span",{children:["#",K]},K))}),R.url&&e.jsxs("a",{href:R.url,target:"_blank",rel:"noreferrer",style:{display:"inline-flex",alignItems:"center",gap:6,marginBottom:16,color:"var(--primary-strong)",fontSize:13,overflowWrap:"anywhere"},children:[e.jsx(Ec,{size:14}),"Abrir material"]}),R.content&&!gi(R.content)?e.jsx(N3,{dangerouslySetInnerHTML:{__html:wi(R.content)}}):e.jsx("p",{style:{color:"var(--muted)",fontSize:13},children:"Este material não tem conteúdo adicional."})]})})]})}const U3=h.div`
  display: grid; grid-template-columns: 1fr 1fr; gap: 0 15px;
  @media (max-width: 620px) { grid-template-columns: 1fr; }
`,H3=h.div`
  display: flex; flex-wrap: wrap; gap: 5px;
  span { padding: 4px 7px; border-radius: 999px; color: var(--muted); background: var(--surface-raised); font-size: 10px; }
`,V3=h.div`
  min-height: 220px; padding: 16px; border: 1px solid var(--border); border-radius: 12px;
  background: var(--surface); color: var(--text); font-size: 14px; line-height: 1.7;
  h1, h2, h3 { margin: 0 0 10px; }
  p { margin: 0 0 10px; }
  ul, ol { margin: 0 0 10px; padding-left: 22px; }
  a { color: var(--primary-strong); }
`,Ug=h.div`
  overflow: hidden; margin-bottom: 12px; border: 1px solid var(--border); border-radius: 12px; background: #000;
  iframe, img { display: block; width: 100%; aspect-ratio: 16 / 9; border: 0; object-fit: cover; }
`,Hg={link:"Link",texto:"Texto",documento:"Documento",video:"Vídeo",curso:"Curso",livro:"Livro",artigo:"Artigo",outro:"Outro"};function W3(t){return/\.(png|jpe?g|gif|webp|svg)(\?.*)?$/i.test(t)}function G3({resource:t,loading:a,saving:s,onBack:l,onSave:c}){const[u,m]=x.useState(""),[f,g]=x.useState(""),[w,b]=x.useState("texto"),[S,_]=x.useState(""),[R,M]=x.useState(""),[N,V]=x.useState(""),[$,j]=x.useState(""),A=x.useMemo(()=>N.split(",").map(I=>I.trim()).filter(Boolean),[N]),O=x.useMemo(()=>wi(R),[R]),ae=x.useMemo(()=>S.trim()?k3(S.trim()):null,[S]);x.useEffect(()=>{t&&(m(t.title),g(t.area),b(t.type),_(t.url??""),M(w3(t.content??"")),V(t.tags.join(", ")),j(""))},[t==null?void 0:t.id]);async function J(I){if(I.preventDefault(),j(""),!S.trim()&&gi(R)){j("Informe uma URL ou escreva o conteúdo do material.");return}const ce={title:u.trim(),area:f.trim(),type:w,url:S.trim()||null,content:gi(R)?null:wi(R).slice(0,2e4),tags:A};await c(ce)}return a&&!t?e.jsx(Ue,{children:e.jsx("p",{style:{margin:0,color:"var(--muted)"},children:"Carregando material..."})}):t?e.jsxs(e.Fragment,{children:[e.jsxs(Mr,{children:[e.jsxs("div",{children:[e.jsx("h1",{children:"Editar material"}),e.jsx("p",{children:"Escreva, formate e visualize o conteúdo em uma página completa."})]}),e.jsxs(pe,{type:"button",onClick:l,children:[e.jsx(Cc,{}),"Voltar"]})]}),e.jsxs(Df,{children:[e.jsxs(Ue,{children:[e.jsxs(Fe,{children:[e.jsx(Zr,{size:19,color:"var(--primary)"}),"Dados e conteúdo"]}),e.jsxs("form",{onSubmit:I=>{J(I)},children:[e.jsxs(U3,{children:[e.jsxs(X,{children:["Título *",e.jsx("input",{value:u,onChange:I=>m(I.target.value),maxLength:200,required:!0,placeholder:"Ex.: Anotações de álgebra"})]}),e.jsxs(X,{children:["Área *",e.jsx("input",{value:f,onChange:I=>g(I.target.value),maxLength:100,required:!0,placeholder:"Ex.: Matemática"})]}),e.jsxs(X,{children:["Tipo *",e.jsx(sn,{value:w,onChange:I=>b(I.target.value),children:Object.entries(Hg).map(([I,ce])=>e.jsx("option",{value:I,children:ce},I))})]}),e.jsxs(X,{children:["Tags ",e.jsx("small",{children:"(separadas por vírgula)"}),e.jsx("input",{value:N,onChange:I=>V(I.target.value),placeholder:"álgebra, revisão"})]})]}),e.jsxs(X,{children:["URL ",e.jsx("small",{children:"(opcional se houver conteúdo)"}),e.jsx("input",{type:"url",value:S,onChange:I=>_(I.target.value),placeholder:"https://..."})]}),e.jsxs(X,{as:"div",children:["Conteúdo ",e.jsx("small",{children:"(opcional se houver URL)"}),e.jsx(hy,{value:R,onChange:M,minHeight:420,placeholder:"Resumo, anotações ou pontos importantes...",ariaLabel:"Conteúdo do material"})]}),$&&e.jsx("p",{role:"alert",style:{color:"var(--error)",fontSize:12},children:$}),e.jsxs(Lf,{children:[e.jsx(pe,{type:"button",onClick:l,children:"Cancelar"}),e.jsxs(pe,{type:"submit",$variant:"primary",disabled:s,children:[s?e.jsx(rt,{className:"spin"}):e.jsx(ws,{}),"Salvar alterações"]})]})]})]}),e.jsxs(Ue,{children:[e.jsx(Fe,{children:"Visualização"}),e.jsxs(Of,{children:[e.jsxs(If,{children:[e.jsx(Zr,{size:18}),u.trim()||"Título do material"]}),e.jsxs(Bf,{children:[e.jsxs("span",{children:["Área: ",f.trim()||"Sem área"]}),e.jsxs("span",{children:["Tipo: ",Hg[w]]})]}),A.length>0&&e.jsx(H3,{style:{marginTop:12},children:A.map(I=>e.jsxs("span",{children:["#",I]},I))})]}),S.trim()&&e.jsxs(e.Fragment,{children:[e.jsx(Fe,{children:"Material"}),ae?e.jsx(Ug,{children:e.jsx("iframe",{title:"Visualização do vídeo",src:`https://www.youtube.com/embed/${ae}`,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})}):W3(S.trim())?e.jsx(Ug,{children:e.jsx("img",{src:S.trim(),alt:u.trim()||"Material"})}):null,e.jsxs("a",{href:S.trim(),target:"_blank",rel:"noreferrer",style:{display:"inline-flex",alignItems:"center",gap:6,marginBottom:18,color:"var(--primary)",fontSize:13,overflowWrap:"anywhere"},children:[e.jsx(Ec,{size:14}),"Abrir URL"]})]}),e.jsx(Fe,{children:"Conteúdo"}),gi(R)?e.jsx(Zn,{children:"O conteúdo formatado aparecerá aqui enquanto você escreve."}):e.jsx(V3,{dangerouslySetInnerHTML:{__html:O}})]})]})]}):e.jsxs(e.Fragment,{children:[e.jsx(Mr,{children:e.jsxs("div",{children:[e.jsx("h1",{children:"Material não encontrado"}),e.jsx("p",{children:"Não foi possível localizar esse material na biblioteca."})]})}),e.jsxs(pe,{type:"button",onClick:l,children:[e.jsx(Cc,{}),"Voltar para biblioteca"]})]})}const dp=h.div`display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,280px),1fr));gap:14px;`,up=h.article`display:grid;gap:15px;padding:18px;border:1px solid var(--border);border-radius:14px;background:var(--surface);transition:.15s ease;&:hover{transform:translateY(-2px);box-shadow:0 10px 24px var(--shadow);}`,pp=h.div`display:flex;justify-content:space-between;align-items:flex-start;gap:12px;h3{margin:0 0 5px;color:var(--text);font-size:15px}p{margin:0;color:var(--muted);font-size:12px}`,fp=h.span`display:grid;width:38px;height:38px;place-items:center;border-radius:11px;color:var(--primary);background:color-mix(in srgb,var(--primary) 16%,var(--surface));`,hp=h.strong`color:${t=>t.$negative?"var(--error)":"var(--success)"};font-size:23px;small{display:block;margin-top:5px;color:var(--muted);font-size:11px;font-weight:500}`,mp=h.div`display:flex;justify-content:flex-end;gap:7px;padding-top:11px;border-top:1px solid var(--border);`,pi=h.button`display:grid;width:32px;height:32px;place-items:center;border:1px solid var(--border);border-radius:8px;color:var(--muted);background:var(--surface-raised);cursor:pointer;&:hover{color:var(--primary);background:var(--surface)}&[data-danger=true]:hover{color:var(--error);background:var(--error-soft)}`,xp=h.div`display:grid;grid-template-columns:1fr 1fr;gap:0 15px;@media(max-width:620px){grid-template-columns:1fr}`,gp=h.div`display:flex;justify-content:flex-end;gap:8px;margin-top:8px;flex-wrap:wrap;`,Kl=h.span`display:inline-flex;padding:4px 8px;border-radius:999px;color:var(--muted);background:var(--surface-raised);font-size:10px;font-weight:700;`,Vg=h.div`display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;color:var(--muted);font-size:11px;strong{display:block;margin-top:3px;color:var(--text);font-size:13px}`,K3=h.div`position:fixed;z-index:1000;inset:0;display:grid;place-items:center;padding:16px;background:rgba(19,31,51,.48);backdrop-filter:blur(5px);`,Q3=h(Ue)`width:min(700px,calc(100vw - 32px));max-height:min(88vh,760px);overflow-y:auto;margin:0;padding:24px;box-shadow:0 24px 70px rgba(20,38,66,.22);@media(max-width:620px){width:calc(100vw - 20px);padding:18px;max-height:92vh}`,Y3=h.div`display:flex;align-items:flex-start;justify-content:space-between;gap:12px;margin-bottom:14px;`,J3=h.button`display:grid;width:34px;height:34px;place-items:center;border:1px solid var(--border);border-radius:9px;color:var(--muted);background:var(--surface-raised);cursor:pointer;&:hover{color:var(--primary);background:var(--surface)}`,Wg={conta_corrente:"Conta corrente",poupanca:"Poupança",investimento:"Investimento",dinheiro:"Dinheiro",outro:"Outro"},Gg={carro:"Carro",moto:"Moto",imovel:"Imóvel",outro:"Outro bem"},Kg={proprio:"Próprio",financiado:"Financiado",alugado:"Alugado",outro:"Outro"},Qg={financiamento:"Financiamento",cartao_credito:"Cartão de crédito",emprestimo:"Empréstimo",aluguel:"Aluguel",conta:"Conta",outro:"Outro"};function Dn(t){return new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(t||0)}function X3(t){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(t||0)}function co(t){const a=t.trim().startsWith("-"),s=t.replace(/\D/g,"");if(!s)return"";const l=(s.slice(0,-2)||"0").replace(/^0+(?=\d)/,"");return`${a?"-":""}${l.replace(/\B(?=(\d{3})+(?!\d))/g,".")},${s.slice(-2).padStart(2,"0")}`}function fi(t){const a=t.trim().replace(/[^\d,.-]/g,"");return a?a.includes(",")?Number(a.replace(/\./g,"").replace(",","."))||0:Number(a)||0:0}function uo(t){return Number.isFinite(t)?new Intl.NumberFormat("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2}).format(t):""}function Ql(t,a){return a==="USD"?X3(t):Dn(t)}function Z3(t){return t==="dinheiro"?e.jsx(bi,{size:19}):t==="investimento"?e.jsx(Pf,{size:19}):e.jsx(Nf,{size:19})}function e5(t){return t==="imovel"?e.jsx(xc,{size:19}):t==="carro"?e.jsx(uk,{size:19}):e.jsx(Y1,{size:19})}function t5(t){return t==="cartao_credito"?e.jsx(os,{size:19}):e.jsx(Nf,{size:19})}function vp({open:t,title:a,icon:s,saving:l,onClose:c,children:u}){return t?Gc.createPortal(e.jsx(K3,{role:"presentation",onMouseDown:m=>{m.target===m.currentTarget&&!l&&c()},children:e.jsxs(Q3,{role:"dialog","aria-modal":"true","aria-labelledby":"finance-modal-title",onMouseDown:m=>m.stopPropagation(),children:[e.jsxs(Y3,{children:[e.jsxs(Fe,{id:"finance-modal-title",children:[s,a]}),e.jsx(J3,{type:"button","aria-label":"Fechar janela",title:"Fechar (Esc)",onClick:c,disabled:l,children:e.jsx(mr,{size:18})})]}),u]})}),document.body):null}function r5({accounts:t,assets:a,liabilities:s,summary:l,loading:c,saving:u,onCreate:m,onUpdate:f,onDelete:g,onCreateAsset:w,onUpdateAsset:b,onDeleteAsset:S,onCreateLiability:_,onUpdateLiability:R,onDeleteLiability:M}){const[N,V]=x.useState(!1),[$,j]=x.useState(null),[A,O]=x.useState(""),[ae,J]=x.useState(""),[I,ce]=x.useState("conta_corrente"),[C,y]=x.useState("BRL"),[q,F]=x.useState(""),[fe,ge]=x.useState(!1),[Ne,K]=x.useState(null),[je,ue]=x.useState(""),[ye,W]=x.useState("imovel"),[z,k]=x.useState("BRL"),[se,ie]=x.useState(""),[D,de]=x.useState("proprio"),[_e,ke]=x.useState(""),[U,he]=x.useState(!0),[nt,Ze]=x.useState(""),[pt,ht]=x.useState(!1),[Ot,oe]=x.useState(null),[$e,me]=x.useState(""),[Pe,Y]=x.useState("outro"),[Be,_t]=x.useState("BRL"),[ot,zt]=x.useState(""),[xr,dr]=x.useState(""),[gr,zr]=x.useState(""),on=N||fe||pt;function Nt(){V(!1),j(null),O(""),J(""),ce("conta_corrente"),y("BRL"),F(""),Ze("")}function Pr(){ge(!1),K(null),ue(""),W("imovel"),k("BRL"),ie(""),de("proprio"),ke(""),he(!0),Ze("")}function Tr(){ht(!1),oe(null),me(""),Y("outro"),_t("BRL"),zt(""),dr(""),zr(""),Ze("")}x.useEffect(()=>{if(!on)return;const te=St=>{St.key==="Escape"&&!u&&(Nt(),Pr(),Tr())};document.addEventListener("keydown",te);const Ke=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.removeEventListener("keydown",te),document.body.style.overflow=Ke}},[on,u]);function ta(te){j(te),V(!0),O(te.institution),J(te.account_name),ce(te.account_type),y(te.currency??"BRL"),F(uo(te.balance))}function Sn(te){K(te),ge(!0),ue(te.name),W(te.asset_type),k(te.currency??"BRL"),ie(uo(te.estimated_value)),de(te.ownership_status),ke(uo(te.monthly_rent)),he(te.include_in_patrimony!==!1)}function ja(te){var Ke;oe(te),ht(!0),me(te.name),Y(te.liability_type),_t(te.currency??"BRL"),zt(uo(te.outstanding_balance)),dr(uo(te.monthly_payment)),zr(((Ke=te.due_date)==null?void 0:Ke.slice(0,10))??"")}async function nr(te){te.preventDefault();const Ke={institution:A.trim(),account_name:ae.trim(),account_type:I,currency:C,balance:fi(q)};($?await f($.id,Ke):await m(Ke))&&Nt()}async function kt(te){if(te.preventDefault(),Ze(""),!je.trim())return Ze("Informe o nome do bem.");const Ke={name:je.trim(),asset_type:ye,estimated_value:fi(se),currency:z,ownership_status:D,monthly_rent:fi(_e),include_in_patrimony:U};(Ne?await b(Ne.id,Ke):await w(Ke))&&Pr()}async function Gt(te){if(te.preventDefault(),Ze(""),!$e.trim()||fi(ot)<=0)return Ze("Informe o nome e um valor de passivo válido.");const Ke={name:$e.trim(),liability_type:Pe,original_amount:fi(ot),outstanding_balance:fi(ot),monthly_payment:fi(xr),currency:Be,due_date:gr||null};(Ot?await R(Ot.id,Ke):await _(Ke))&&Tr()}const ln=l.total_patrimony??l.total_balance;return e.jsxs(e.Fragment,{children:[e.jsxs(Mr,{children:[e.jsxs("div",{children:[e.jsx("h1",{children:"Finanças"}),e.jsx("p",{children:"Ativos, passivos e patrimônio líquido em uma visão simples."})]}),e.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap",justifyContent:"flex-end"},children:[e.jsxs(pe,{onClick:()=>ht(!0),children:[e.jsx(os,{}),"Nova dívida"]}),e.jsxs(pe,{onClick:()=>ge(!0),children:[e.jsx(xc,{}),"Novo ativo"]}),e.jsxs(pe,{$variant:"primary",onClick:()=>V(!0),children:[e.jsx(yt,{}),"Nova conta"]})]})]}),e.jsxs(sS,{children:[e.jsxs(io,{children:[e.jsx("p",{children:"Patrimônio líquido em reais"}),e.jsx("strong",{style:{color:ln<0?"var(--error)":"var(--success)"},children:Dn(ln)})]}),e.jsxs(io,{children:[e.jsx("p",{children:"Total de ativos"}),e.jsx("strong",{children:Dn(l.assets_total_brl??l.total_assets??0)})]}),e.jsxs(io,{children:[e.jsx("p",{children:"Total de passivos"}),e.jsx("strong",{style:{color:"var(--error)"},children:Dn(l.liabilities_total_brl??l.total_liabilities??0)})]}),e.jsxs(io,{children:[e.jsx("p",{children:"Pagamentos mensais"}),e.jsx("strong",{children:Dn(l.monthly_liability_payments_brl??l.monthly_payments??0)})]}),(l.investment_portfolio_total_value_brl??l.investment_portfolio_value_brl??0)>0&&e.jsxs(io,{children:[e.jsx("p",{children:"Carteira ativa"}),e.jsx("strong",{children:Dn(l.investment_portfolio_value_brl??0)}),(l.investment_portfolio_total_value_brl??0)!==(l.investment_portfolio_value_brl??0)&&e.jsxs("small",{style:{color:"var(--muted)"},children:["Total incluindo inativos: ",Dn(l.investment_portfolio_total_value_brl??0)]})]})]}),e.jsx(vp,{open:N,title:$?"Editar conta":"Adicionar conta",icon:e.jsx(bi,{size:19,color:"var(--primary)"}),saving:u,onClose:Nt,children:e.jsxs("form",{onSubmit:te=>{nr(te)},children:[e.jsxs(xp,{children:[e.jsxs(X,{children:["Instituição *",e.jsx("input",{value:A,onChange:te=>O(te.target.value),required:!0})]}),e.jsxs(X,{children:["Nome da conta *",e.jsx("input",{value:ae,onChange:te=>J(te.target.value),required:!0})]}),e.jsxs(X,{children:["Tipo *",e.jsx("select",{value:I,onChange:te=>ce(te.target.value),children:Object.entries(Wg).map(([te,Ke])=>e.jsx("option",{value:te,children:Ke},te))})]}),e.jsxs(X,{children:["Moeda *",e.jsxs("select",{value:C,onChange:te=>y(te.target.value),children:[e.jsx("option",{value:"BRL",children:"Real (BRL)"}),e.jsx("option",{value:"USD",children:"Dólar (USD)"})]})]}),e.jsxs(X,{children:["Saldo em ",C," *",e.jsx("input",{inputMode:"decimal",value:q,onChange:te=>F(co(te.target.value)),required:!0})]})]}),e.jsxs(gp,{children:[e.jsx(pe,{type:"button",onClick:Nt,children:"Cancelar"}),e.jsxs(pe,{type:"submit",$variant:"primary",disabled:u,children:[u?e.jsx(rt,{className:"spin"}):e.jsx(yt,{}),"Salvar"]})]})]})}),e.jsx(vp,{open:fe,title:Ne?"Editar ativo":"Adicionar ativo",icon:e.jsx(xc,{size:19,color:"var(--primary)"}),saving:u,onClose:Pr,children:e.jsxs("form",{onSubmit:te=>{kt(te)},children:[e.jsxs(xp,{children:[e.jsxs(X,{children:["Nome do ativo *",e.jsx("input",{value:je,onChange:te=>ue(te.target.value),required:!0,placeholder:"Casa, Honda Civic..."})]}),e.jsxs(X,{children:["Tipo *",e.jsx("select",{value:ye,onChange:te=>W(te.target.value),children:Object.entries(Gg).map(([te,Ke])=>e.jsx("option",{value:te,children:Ke},te))})]}),e.jsxs(X,{children:["Valor estimado (",z,") *",e.jsx("input",{inputMode:"decimal",value:se,onChange:te=>ie(co(te.target.value)),required:!0})]}),e.jsxs(X,{children:["Moeda *",e.jsxs("select",{value:z,onChange:te=>k(te.target.value),children:[e.jsx("option",{value:"BRL",children:"Real (BRL)"}),e.jsx("option",{value:"USD",children:"Dólar (USD)"})]})]}),e.jsxs(X,{children:["Situação *",e.jsx("select",{value:D,onChange:te=>de(te.target.value),children:Object.entries(Kg).map(([te,Ke])=>e.jsx("option",{value:te,children:Ke},te))})]}),e.jsxs(X,{children:["Aluguel mensal (",z,")",e.jsx("input",{inputMode:"decimal",value:_e,onChange:te=>ke(co(te.target.value))})]})]}),e.jsx("p",{style:{color:"var(--muted)",fontSize:12},children:"Dívidas de um ativo devem ser cadastradas separadamente em passivos."}),e.jsxs("label",{style:{display:"flex",gap:8,alignItems:"center",fontSize:12},children:[e.jsx("input",{type:"checkbox",checked:U,onChange:te=>he(te.target.checked)})," Incluir no patrimônio total"]}),e.jsxs(gp,{children:[e.jsx(pe,{type:"button",onClick:Pr,children:"Cancelar"}),e.jsxs(pe,{type:"submit",$variant:"primary",disabled:u,children:[u?e.jsx(rt,{className:"spin"}):e.jsx(yt,{}),"Salvar ativo"]})]})]})}),e.jsx(vp,{open:pt,title:Ot?"Editar passivo":"Adicionar dívida ou obrigação",icon:e.jsx(os,{size:19,color:"var(--error)"}),saving:u,onClose:Tr,children:e.jsxs("form",{onSubmit:te=>{Gt(te)},children:[e.jsxs(xp,{children:[e.jsxs(X,{children:["Nome *",e.jsx("input",{value:$e,onChange:te=>me(te.target.value),required:!0,placeholder:"Financiamento do carro"})]}),e.jsxs(X,{children:["Tipo *",e.jsx("select",{value:Pe,onChange:te=>Y(te.target.value),children:Object.entries(Qg).map(([te,Ke])=>e.jsx("option",{value:te,children:Ke},te))})]}),e.jsxs(X,{children:["Saldo pendente (",Be,") *",e.jsx("input",{inputMode:"decimal",value:ot,onChange:te=>zt(co(te.target.value)),required:!0})]}),e.jsxs(X,{children:["Pagamento mensal (",Be,")",e.jsx("input",{inputMode:"decimal",value:xr,onChange:te=>dr(co(te.target.value))})]}),e.jsxs(X,{children:["Moeda *",e.jsxs("select",{value:Be,onChange:te=>_t(te.target.value),children:[e.jsx("option",{value:"BRL",children:"Real (BRL)"}),e.jsx("option",{value:"USD",children:"Dólar (USD)"})]})]}),e.jsxs(X,{children:["Vencimento",e.jsx("input",{type:"date",value:gr,onChange:te=>zr(te.target.value)})]})]}),nt&&e.jsx("p",{role:"alert",style:{color:"var(--error)"},children:nt}),e.jsxs(gp,{children:[e.jsx(pe,{type:"button",onClick:Tr,children:"Cancelar"}),e.jsxs(pe,{type:"submit",$variant:"primary",disabled:u,children:[u?e.jsx(rt,{className:"spin"}):e.jsx(yt,{}),"Salvar passivo"]})]})]})}),e.jsxs(Ue,{children:[e.jsxs(Fe,{children:[e.jsx(Nf,{size:19,color:"var(--primary)"}),"Minhas contas ",e.jsx(Dr,{children:t.length})]}),c?e.jsxs(Xe,{children:[e.jsx(rt,{}),e.jsx("p",{children:"Carregando suas contas..."})]}):t.length===0?e.jsxs(Xe,{children:[e.jsx(bi,{size:34}),e.jsx("h3",{children:"Nenhuma conta cadastrada"}),e.jsx("p",{children:"Adicione seu primeiro saldo para começar."})]}):e.jsx(dp,{children:t.map(te=>e.jsxs(up,{children:[e.jsxs(pp,{children:[e.jsxs("div",{style:{display:"flex",gap:10},children:[e.jsx(fp,{children:Z3(te.account_type)}),e.jsxs("div",{children:[e.jsx("h3",{children:te.institution}),e.jsx("p",{children:te.account_name})]})]}),e.jsxs("div",{style:{display:"grid",justifyItems:"end",gap:5},children:[e.jsxs(Kl,{children:[te.currency," · ",Wg[te.account_type]]}),e.jsx(Kl,{children:te.is_active?"Ativa":"Inativa"})]})]}),e.jsxs(hp,{$negative:te.balance_brl<0,children:[Ql(te.balance,te.currency),te.currency==="USD"&&e.jsxs("small",{children:["≈ ",Dn(te.balance_brl)]})]}),e.jsxs(mp,{children:[e.jsx(pi,{type:"button",title:te.is_active?"Desativar conta":"Ativar conta","aria-label":te.is_active?"Desativar conta":"Ativar conta",disabled:u,onClick:()=>void f(te.id,{is_active:!te.is_active}),children:te.is_active?e.jsx(Rc,{size:15}):e.jsx(zc,{size:15})}),e.jsx(pi,{type:"button",title:"Editar conta","aria-label":"Editar conta",onClick:()=>ta(te),children:e.jsx(an,{size:15})}),e.jsx(pi,{type:"button",title:"Excluir conta","aria-label":"Excluir conta","data-danger":"true",onClick:()=>{window.confirm(`Excluir a conta “${te.account_name}”?`)&&g(te)},children:e.jsx(Rr,{size:15})})]})]},te.id))})]}),e.jsxs(Ue,{style:{marginTop:18},children:[e.jsxs(Fe,{children:[e.jsx(Y1,{size:19,color:"var(--primary)"}),"Meus ativos ",e.jsx(Dr,{children:a.length})]}),c?e.jsxs(Xe,{children:[e.jsx(rt,{}),e.jsx("p",{children:"Carregando seus ativos..."})]}):a.length===0?e.jsxs(Xe,{children:[e.jsx(xc,{size:34}),e.jsx("h3",{children:"Nenhum ativo cadastrado"}),e.jsx("p",{children:"Cadastre carros, motos, imóveis ou outros bens."})]}):e.jsx(dp,{children:a.map(te=>{const Ke=te.net_value_brl??te.estimated_value_brl??(te.include_in_patrimony===!1?0:te.estimated_value);return e.jsxs(up,{children:[e.jsxs(pp,{children:[e.jsxs("div",{style:{display:"flex",gap:10},children:[e.jsx(fp,{children:e5(te.asset_type)}),e.jsxs("div",{children:[e.jsx("h3",{children:te.name}),e.jsxs("p",{children:[Gg[te.asset_type]," · ",Kg[te.ownership_status]]})]})]}),e.jsx(Kl,{children:te.currency})]}),e.jsxs(hp,{$negative:Ke<0,children:[Dn(Ke),e.jsxs("small",{children:["Valor líquido",te.include_in_patrimony===!1?" · fora do patrimônio":""]})]}),e.jsxs(Vg,{children:[e.jsxs("span",{children:["Estimado",e.jsx("strong",{children:Ql(te.estimated_value,te.currency)})]}),te.monthly_rent>0&&e.jsxs("span",{children:["Aluguel",e.jsx("strong",{children:Ql(te.monthly_rent,te.currency)})]})]}),e.jsxs(mp,{children:[e.jsx(pi,{title:"Editar ativo",onClick:()=>Sn(te),children:e.jsx(an,{size:15})}),e.jsx(pi,{title:"Excluir ativo","data-danger":"true",onClick:()=>{window.confirm(`Excluir o ativo “${te.name}”?`)&&S(te)},children:e.jsx(Rr,{size:15})})]})]},te.id)})})]}),e.jsxs(Ue,{style:{marginTop:18},children:[e.jsxs(Fe,{children:[e.jsx(os,{size:19,color:"var(--error)"}),"Meus passivos ",e.jsx(Dr,{children:s.length})]}),c?e.jsxs(Xe,{children:[e.jsx(rt,{}),e.jsx("p",{children:"Carregando seus passivos..."})]}):s.length===0?e.jsxs(Xe,{children:[e.jsx(os,{size:34}),e.jsx("h3",{children:"Nenhum passivo cadastrado"}),e.jsx("p",{children:"Cadastre dívidas, financiamentos e obrigações para acompanhar seu patrimônio líquido."})]}):e.jsx(dp,{children:s.map(te=>{const Ke=te.outstanding_balance_brl??te.outstanding_balance,St=te.monthly_payment_brl??te.monthly_payment;return e.jsxs(up,{children:[e.jsxs(pp,{children:[e.jsxs("div",{style:{display:"flex",gap:10},children:[e.jsx(fp,{children:t5(te.liability_type)}),e.jsxs("div",{children:[e.jsx("h3",{children:te.name}),e.jsxs("p",{children:[Qg[te.liability_type]??te.liability_type,te.due_date?` · vence em ${new Date(te.due_date).toLocaleDateString("pt-BR")}`:""]})]})]}),e.jsx(Kl,{children:te.currency})]}),e.jsxs(hp,{$negative:!0,children:[Dn(Ke),e.jsx("small",{children:"Saldo pendente em reais"})]}),e.jsxs(Vg,{children:[e.jsxs("span",{children:["Pagamento mensal",e.jsx("strong",{children:Ql(St,te.currency)})]}),e.jsxs("span",{children:["Impacto",e.jsxs("strong",{style:{color:"var(--error)"},children:["− ",Dn(Ke)]})]})]}),e.jsxs(mp,{children:[e.jsx(pi,{title:"Editar passivo",onClick:()=>ja(te),children:e.jsx(an,{size:15})}),e.jsx(pi,{title:"Excluir passivo","data-danger":"true",onClick:()=>{window.confirm(`Excluir o passivo “${te.name}”?`)&&M(te)},children:e.jsx(Rr,{size:15})})]})]},te.id)})})]})]})}const n5=h.div`
  display: grid;
  gap: 20px;
`,a5=h.div`
  max-width: 620px;
`,i5=h.div`
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
`,s5=h.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 13px;
  @media (max-width: 720px) { grid-template-columns: 1fr; }
`,yp=h(Ue)`
  display: grid;
  grid-template-columns: 44px minmax(0, 1fr);
  align-items: center;
  gap: 13px;
  padding: 18px;
  > span { display: grid; width: 44px; height: 44px; place-items: center; border-radius: 14px; color: var(--primary-strong); background: color-mix(in srgb, var(--primary) 16%, var(--surface)); }
  small { display: block; color: var(--muted); font-size: 11px; }
  strong { display: block; margin-top: 3px; color: var(--text); font-size: 23px; }
  p { margin: 4px 0 0; color: var(--muted); font-size: 11px; }
`,o5=h.div`
  display: grid;
  grid-template-columns: minmax(0, 1.3fr) minmax(270px, .7fr);
  gap: 18px;
  align-items: start;
  @media (max-width: 900px) { grid-template-columns: 1fr; }
`,l5=h.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  align-items: end;
  gap: 10px;
  min-height: 190px;
  padding-top: 18px;
`,c5=h.div`
  display: grid;
  grid-template-rows: 18px 1fr auto;
  justify-items: center;
  gap: 8px;
  height: 170px;
  color: var(--muted);
  font-size: 10px;
`,d5=h.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: flex-end;
  justify-content: center;
  padding: 0 3px;
  border-bottom: 1px solid var(--border);
`,u5=h.div`
  width: min(28px, 70%);
  height: ${({$height:t})=>`${t}%`};
  min-height: 3px;
  border-radius: 8px 8px 3px 3px;
  background: ${({$today:t})=>t?"var(--primary-strong)":"var(--primary)"};
  box-shadow: 0 5px 12px color-mix(in srgb, var(--primary) 18%, transparent);
  transition: height .25s ease;
`,p5=h.span`
  white-space: nowrap;
`,f5=h.form`
  display: grid;
  gap: 8px;
  > div { display: flex; align-items: flex-end; gap: 8px; }
  ${X} { flex: 1; margin: 0; }
  input { max-width: 180px; }
`,h5=h.form`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) minmax(150px, .8fr) auto;
  align-items: end;
  gap: 10px;
  padding: 15px;
  margin-bottom: 17px;
  border: 1px solid var(--border);
  border-radius: 14px;
  background: var(--surface-raised);
  ${X} { margin: 0; }
  @media (max-width: 760px) { grid-template-columns: 1fr 1fr; }
  @media (max-width: 480px) { grid-template-columns: 1fr; }
`,m5=h.div`
  display: grid;
  gap: 11px;
`,x5=h.article`
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
`,g5=h.div`
  min-width: 0;
  h3 { margin: 0; color: var(--text); font-size: 15px; line-height: 1.4; overflow-wrap: anywhere; }
  p { margin: 6px 0 0; color: var(--muted); font-size: 12px; line-height: 1.55; white-space: pre-wrap; overflow-wrap: anywhere; }
`,v5=h.div`
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
`,y5=h.div`
  display: grid;
  justify-items: end;
  align-content: space-between;
  gap: 14px;
  @media (max-width: 620px) { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; }
`,j5=h.span`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 6px 9px;
  border-radius: var(--radius-full);
  color: ${({$status:t})=>t==="concluido"?"var(--success)":t==="cancelado"?"var(--error)":"var(--primary-strong)"};
  background: ${({$status:t})=>t==="concluido"?"var(--success-soft)":t==="cancelado"?"var(--error-soft)":"var(--primary-soft)"};
  font-size: 10px;
  font-weight: 800;
`,b5=h.div`
  display: flex;
  justify-content: flex-end;
  gap: 6px;
`,jp=h.button`
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
`,w5=h.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 14px;
  ${X}:first-child, ${X}:last-of-type { grid-column: 1 / -1; }
  @media (max-width: 620px) { grid-template-columns: 1fr; ${X} { grid-column: auto; } }
`,_5=h.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  grid-column: 1 / -1;
  margin-top: 3px;
`,k5=h.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin-top: 17px;
  color: var(--muted);
  font-size: 11px;
`,Yg=()=>({title:"",study_date:my(new Date),topic:"",study_time:"",duration_minutes:"30",status:"planejado",material_url:"",content:""});function my(t){return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`}function bp(t){return new Date(`${t.slice(0,10)}T12:00:00`).toLocaleDateString("pt-BR",{weekday:"short",day:"numeric",month:"short"})}function of(t){return t?t.slice(0,5):null}function po(t,a){var s,l;return $t.isAxiosError(t)&&((l=(s=t.response)==null?void 0:s.data)==null?void 0:l.error)||a}function S5(t){return{title:t.title,study_date:t.study_date.slice(0,10),topic:t.topic??"",study_time:of(t.study_time)??"",duration_minutes:String(t.duration_minutes),status:t.status,material_url:t.material_url??"",content:t.content??""}}function C5(t){return{title:t.title.trim(),study_date:t.study_date,topic:t.topic.trim()||null,study_time:t.study_time||null,duration_minutes:Number(t.duration_minutes),status:t.status,material_url:t.material_url.trim()||null,content:t.content.trim()||null}}const E5={planejado:"Planejado",concluido:"Concluído",cancelado:"Cancelado"};function $5({onNavigate:t}){const[a,s]=x.useState(),[l,c]=x.useState(),[u,m]=x.useState(30),[f,g]=x.useState("30"),[w,b]=x.useState({page:1,limit:20}),[S,_]=x.useState({from:"",to:"",status:""}),[R,M]=x.useState(Yg),[N,V]=x.useState(null),[$,j]=x.useState(!1),[A,O]=x.useState(null),[ae,J]=x.useState(!0),[I,ce]=x.useState(!1),[C,y]=x.useState(!1),[q,F]=x.useState(""),[fe,ge]=x.useState(""),[Ne,K]=x.useState(0);x.useEffect(()=>{let U=!0;return J(!0),F(""),Promise.all([q_(w),V_(),G_()]).then(([he,nt,Ze])=>{U&&(s(he),m(nt.daily_goal_minutes),g(String(nt.daily_goal_minutes)),c(Ze))}).catch(he=>{U&&F(po(he,"Não foi possível carregar o acompanhamento de inglês."))}).finally(()=>{U&&J(!1)}),()=>{U=!1}},[w,Ne]);const je=x.useCallback(()=>j(!1),[]);function ue(){V(null),M(Yg()),j(!0)}function ye(U){V(U),M(S5(U)),j(!0)}async function W(U){U.preventDefault(),F(""),ge(""),ce(!0);try{const he=C5(R);N?await Qx(N.id,he):await U_(he),j(!1),V(null),ge(N?"Sessão atualizada.":"Sessão de estudo criada."),K(nt=>nt+1)}catch(he){F(po(he,"Não foi possível salvar a sessão de estudo."))}finally{ce(!1)}}async function z(U){U.preventDefault();const he=Number(f);if(!Number.isInteger(he)||he<1||he>1440){F("A meta deve ser um número inteiro entre 1 e 1440 minutos.");return}F(""),ge(""),ce(!0);try{const nt=await W_(he);m(nt.daily_goal_minutes),g(String(nt.daily_goal_minutes)),ge("Meta diária atualizada."),K(Ze=>Ze+1)}catch(nt){F(po(nt,"Não foi possível atualizar a meta diária."))}finally{ce(!1)}}function k(U){if(U.preventDefault(),S.from&&S.to&&S.from>S.to){F("A data inicial precisa ser anterior ou igual à data final.");return}if(S.from&&S.to&&(Date.parse(`${S.to}T00:00:00Z`)-Date.parse(`${S.from}T00:00:00Z`))/864e5>366){F("O período das sessões não pode ultrapassar 366 dias.");return}F(""),b({from:S.from||void 0,to:S.to||void 0,status:S.status||void 0,page:1,limit:20})}async function se(){if(A){y(!0),F(""),ge("");try{await H_(A.id),O(null),ge("Sessão removida."),K(U=>U+1)}catch(U){F(po(U,"Não foi possível excluir a sessão.")),O(null)}finally{y(!1)}}}async function ie(U){F(""),ge("");try{await Qx(U.id,{status:"concluido"}),ge("Sessão concluída. Seu progresso foi atualizado."),K(he=>he+1)}catch(he){F(po(he,"Não foi possível concluir a sessão."))}}const D=(l==null?void 0:l.daily)??[],de=Math.max(u,...D.map(U=>U.total_minutes),1),_e=(a==null?void 0:a.data)??[],ke=a==null?void 0:a.pagination;return e.jsxs(n5,{children:[e.jsxs(_s,{children:[e.jsxs(a5,{children:[e.jsxs("span",{children:[e.jsx(ef,{size:14})," English study tracker"]}),e.jsx("h1",{children:"Seu inglês, em evolução."}),e.jsx("p",{children:"Planeje sessões, registre o que aprendeu e acompanhe sua consistência dia após dia."})]}),e.jsxs(i5,{children:[e.jsxs(pe,{type:"button",onClick:()=>t("/study-resources"),children:[e.jsx(Zr,{}),"Biblioteca"]}),e.jsxs(pe,{type:"button",$variant:"primary",onClick:ue,children:[e.jsx(yt,{}),"Nova sessão"]})]})]}),q&&e.jsx(Ue,{role:"alert",style:{color:"var(--error)",padding:14},children:q}),fe&&e.jsx(Ue,{role:"status",style:{color:"var(--primary-strong)",padding:14},children:fe}),e.jsxs(s5,{"aria-label":"Resumo do progresso de inglês",children:[e.jsxs(yp,{children:[e.jsx("span",{children:e.jsx(rn,{})}),e.jsxs("div",{children:[e.jsx("small",{children:"Hoje"}),e.jsxs("strong",{children:[(l==null?void 0:l.minutes_today)??0," min"]}),e.jsxs("p",{children:[(l==null?void 0:l.minutes_remaining_today)??u," min para a meta"]})]})]}),e.jsxs(yp,{children:[e.jsx("span",{children:e.jsx(cs,{})}),e.jsxs("div",{children:[e.jsx("small",{children:"Meta diária"}),e.jsxs("strong",{children:[u," min"]}),e.jsx(oS,{children:e.jsx("div",{style:{width:`${Math.min((l==null?void 0:l.goal_progress_percent)??0,100)}%`}})})]})]}),e.jsxs(yp,{children:[e.jsx("span",{children:e.jsx(Je,{})}),e.jsxs("div",{children:[e.jsx("small",{children:"Ritmo dos últimos dias"}),e.jsxs("strong",{children:[D.reduce((U,he)=>U+he.sessions,0)," sessões"]}),e.jsxs("p",{children:[D.reduce((U,he)=>U+he.total_minutes,0)," minutos estudados"]})]})]})]}),e.jsxs(o5,{children:[e.jsxs(Ue,{children:[e.jsxs(Fe,{children:[e.jsx(Je,{size:19}),"Progresso diário"]}),D.length?e.jsx(l5,{"aria-label":"Minutos estudados por dia",children:D.slice(-7).map(U=>{const he=U.study_date.slice(0,10);return e.jsxs(c5,{title:`${bp(he)}: ${U.total_minutes} minutos`,children:[e.jsx("strong",{children:U.total_minutes}),e.jsx(d5,{children:e.jsx(u5,{$height:Math.max(U.total_minutes?8:3,U.total_minutes/de*100),$today:he===my(new Date)})}),e.jsx(p5,{children:bp(he).split(",")[0]})]},he)})}):e.jsxs(Xe,{children:[e.jsx(Je,{}),e.jsx("p",{children:"Seu resumo aparecerá aqui assim que carregar."})]})]}),e.jsxs(Ue,{children:[e.jsxs(Fe,{children:[e.jsx(cs,{size:19}),"Sua meta diária"]}),e.jsx("p",{style:{margin:"0 0 16px",color:"var(--muted)",fontSize:12,lineHeight:1.55},children:"Escolha quantos minutos quer dedicar ao inglês por dia."}),e.jsx(f5,{onSubmit:U=>{z(U)},children:e.jsxs("div",{children:[e.jsxs(X,{htmlFor:"daily-goal",children:["Minutos por dia",e.jsx("input",{id:"daily-goal",type:"number",min:1,max:1440,step:1,value:f,onChange:U=>g(U.target.value),required:!0})]}),e.jsxs(pe,{type:"submit",$variant:"primary",disabled:I,children:[I?e.jsx(rt,{}):e.jsx(tn,{}),"Salvar"]})]})})]})]}),e.jsxs(Ue,{children:[e.jsxs(Fe,{children:[e.jsx(Zr,{size:19}),"Sessões de estudo"]}),e.jsx(xs,{open:$,title:N?"Editar sessão":"Planejar sessão",icon:N?e.jsx(an,{size:18}):e.jsx(yt,{size:18}),busy:I,onClose:je,children:e.jsxs(w5,{onSubmit:U=>{W(U)},children:[e.jsxs(X,{htmlFor:"session-title",children:["Título *",e.jsx("input",{id:"session-title",maxLength:200,value:R.title,onChange:U=>M(he=>({...he,title:U.target.value})),placeholder:"Ex.: Prática de listening",required:!0})]}),e.jsxs(X,{htmlFor:"session-date",children:["Data *",e.jsx("input",{id:"session-date",type:"date",value:R.study_date,onChange:U=>M(he=>({...he,study_date:U.target.value})),required:!0})]}),e.jsxs(X,{htmlFor:"session-time",children:["Horário",e.jsx("input",{id:"session-time",type:"time",value:R.study_time,onChange:U=>M(he=>({...he,study_time:U.target.value}))})]}),e.jsxs(X,{htmlFor:"session-duration",children:["Duração (minutos)",e.jsx("input",{id:"session-duration",type:"number",min:1,max:1440,step:1,value:R.duration_minutes,onChange:U=>M(he=>({...he,duration_minutes:U.target.value})),required:!0})]}),e.jsxs(X,{htmlFor:"session-topic",children:["Tópico",e.jsx("input",{id:"session-topic",maxLength:100,value:R.topic,onChange:U=>M(he=>({...he,topic:U.target.value})),placeholder:"Ex.: Conversação"})]}),e.jsxs(X,{htmlFor:"session-status",children:["Status",e.jsxs("select",{id:"session-status",value:R.status,onChange:U=>M(he=>({...he,status:U.target.value})),children:[e.jsx("option",{value:"planejado",children:"Planejado"}),e.jsx("option",{value:"concluido",children:"Concluído"}),e.jsx("option",{value:"cancelado",children:"Cancelado"})]})]}),e.jsxs(X,{htmlFor:"session-material",children:["Link do material",e.jsx("input",{id:"session-material",type:"url",maxLength:2048,value:R.material_url,onChange:U=>M(he=>({...he,material_url:U.target.value})),placeholder:"https://..."})]}),e.jsxs(X,{htmlFor:"session-content",children:["Anotações",e.jsx("textarea",{id:"session-content",maxLength:5e4,value:R.content,onChange:U=>M(he=>({...he,content:U.target.value})),placeholder:"Registre expressões, dúvidas e aprendizados..."})]}),e.jsxs(_5,{children:[e.jsxs(pe,{type:"button",onClick:je,disabled:I,children:[e.jsx(mr,{}),"Cancelar"]}),e.jsxs(pe,{type:"submit",$variant:"primary",disabled:I,children:[I?e.jsx(rt,{}):e.jsx(tn,{}),N?"Salvar alterações":"Criar sessão"]})]})]})}),e.jsxs(h5,{onSubmit:k,children:[e.jsxs(X,{htmlFor:"filter-from",children:["De",e.jsx("input",{id:"filter-from",type:"date",value:S.from,onChange:U=>_(he=>({...he,from:U.target.value}))})]}),e.jsxs(X,{htmlFor:"filter-to",children:["Até",e.jsx("input",{id:"filter-to",type:"date",value:S.to,onChange:U=>_(he=>({...he,to:U.target.value}))})]}),e.jsxs(X,{htmlFor:"filter-status",children:["Status",e.jsxs("select",{id:"filter-status",value:S.status,onChange:U=>_(he=>({...he,status:U.target.value})),children:[e.jsx("option",{value:"",children:"Todos"}),e.jsx("option",{value:"planejado",children:"Planejado"}),e.jsx("option",{value:"concluido",children:"Concluído"}),e.jsx("option",{value:"cancelado",children:"Cancelado"})]})]}),e.jsxs(pe,{type:"submit",children:[e.jsx(Je,{}),"Filtrar"]})]}),ae?e.jsxs(Xe,{children:[e.jsx(rt,{}),e.jsx("p",{children:"Carregando sessões..."})]}):_e.length?e.jsx(m5,{children:_e.map(U=>e.jsxs(x5,{children:[e.jsxs(g5,{children:[e.jsx("h3",{children:U.title}),U.content&&e.jsx("p",{children:U.content}),e.jsxs(v5,{children:[e.jsxs("span",{children:[e.jsx(Je,{}),bp(U.study_date)]}),of(U.study_time)&&e.jsxs("span",{children:[e.jsx(rn,{}),of(U.study_time)]}),e.jsxs("span",{children:[e.jsx(rn,{}),U.duration_minutes," min"]}),U.topic&&e.jsxs("span",{children:[e.jsx(ef,{}),U.topic]}),U.material_url&&e.jsxs("a",{href:U.material_url,target:"_blank",rel:"noreferrer",children:[e.jsx(Ec,{}),"Material"]})]})]}),e.jsxs(y5,{children:[e.jsxs(j5,{$status:U.status,children:[U.status==="concluido"&&e.jsx(tn,{size:12}),E5[U.status]]}),e.jsxs(b5,{children:[U.status==="planejado"&&e.jsx(jp,{type:"button","aria-label":`Concluir ${U.title}`,title:"Marcar como concluído",onClick:()=>{ie(U)},children:e.jsx(tn,{})}),e.jsx(jp,{type:"button","aria-label":`Editar ${U.title}`,title:"Editar sessão",onClick:()=>ye(U),children:e.jsx(an,{})}),e.jsx(jp,{type:"button","data-danger":"true","aria-label":`Excluir ${U.title}`,title:"Excluir sessão",onClick:()=>O(U),children:e.jsx(Rr,{})})]})]})]},String(U.id)))}):a?e.jsxs(Xe,{children:[e.jsx(Zr,{size:30}),e.jsx("h3",{children:"Nenhuma sessão encontrada"}),e.jsx("p",{children:"Planeje sua próxima sessão e comece a acompanhar seu progresso."}),e.jsxs(pe,{type:"button",$variant:"primary",onClick:ue,children:[e.jsx(yt,{}),"Nova sessão"]})]}):null,ke&&ke.total>0&&e.jsxs(k5,{children:[e.jsxs("span",{children:[ke.total," sessões · página ",ke.page," de ",Math.max(ke.totalPages,1)]}),e.jsxs("div",{style:{display:"flex",gap:7},children:[e.jsx(pe,{type:"button",disabled:!ke.hasPreviousPage||ae,onClick:()=>b(U=>({...U,page:Math.max((U.page??1)-1,1)})),children:"Anterior"}),e.jsxs(pe,{type:"button",disabled:!ke.hasNextPage||ae,onClick:()=>b(U=>({...U,page:(U.page??1)+1})),children:["Próxima",e.jsx(ok,{size:14})]})]})]})]}),e.jsx(Kc,{open:A!==null,title:"Excluir sessão de estudo?",description:A?`A sessão “${A.title}” será removida permanentemente.`:"",confirmLabel:"Excluir sessão",busy:C,onCancel:()=>{C||O(null)},onConfirm:()=>{se()}})]})}const R5=h.div`
  display: grid;
  gap: 20px;
`,z5=h.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 13px;
  @media (max-width: 720px) { grid-template-columns: 1fr; }
`,fo=h(Ue)`
  padding: 18px;
  small { display: block; color: var(--muted); font-size: 11px; }
  strong { display: block; margin-top: 4px; color: var(--text); font-size: 23px; }
`,P5=h.div`
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) minmax(250px, .6fr);
  gap: 18px;
  align-items: start;
  @media (max-width: 900px) { grid-template-columns: 1fr; }
`,Jg=h.div`
  display: grid;
  gap: 6px;
  margin-bottom: 13px;
  > div:first-child { display: flex; justify-content: space-between; gap: 8px; color: var(--text); font-size: 12px; }
  > div:first-child span { color: var(--muted); }
`,Xg=h.div`
  height: 8px;
  overflow: hidden;
  border-radius: 999px;
  background: var(--surface-raised);
  > div { height: 100%; border-radius: inherit; background: var(--primary); }
`,N5=h.form`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr)) auto;
  align-items: end;
  gap: 10px;
  padding: 15px;
  margin-bottom: 17px;
  border: 1px solid var(--border);
  border-radius: 14px;
  background: var(--surface-raised);
  ${X} { margin: 0; }
  @media (max-width: 900px) { grid-template-columns: 1fr 1fr; }
  @media (max-width: 480px) { grid-template-columns: 1fr; }
`,A5=h.div`
  display: grid;
  gap: 11px;
`,D5=h.article`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 15px;
  padding: 16px;
  border: 1px solid var(--border);
  border-left: 3px solid var(--primary);
  border-radius: 15px;
  background: var(--surface);
  box-shadow: 0 5px 16px var(--shadow);
  opacity: ${({$inactive:t})=>t?.6:1};
  h3 { margin: 0; color: var(--text); font-size: 15px; overflow-wrap: anywhere; }
  p { margin: 6px 0 0; color: var(--muted); font-size: 12px; line-height: 1.55; white-space: pre-wrap; overflow-wrap: anywhere; }
  @media (max-width: 620px) { grid-template-columns: 1fr; }
`,M5=h.div`
  display: flex;
  flex-wrap: wrap;
  gap: 7px 14px;
  margin-top: 10px;
  color: var(--muted);
  font-size: 11px;
  span { display: inline-flex; align-items: center; gap: 5px; }
  svg { width: 14px; height: 14px; }
`,T5=h.div`
  display: grid;
  justify-items: end;
  align-content: space-between;
  gap: 12px;
  > strong { color: var(--text); font-size: 18px; }
  @media (max-width: 620px) { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; }
`,F5=h.div`
  display: flex;
  gap: 6px;
`,wp=h.button`
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
`,L5=h.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 14px;
  ${X}:first-child, ${X}:last-of-type { grid-column: 1 / -1; }
  @media (max-width: 620px) { grid-template-columns: 1fr; ${X} { grid-column: auto; } }
`,O5=h.div`
  grid-column: 1 / -1;
  display: flex;
  justify-content: flex-end;
  gap: 9px;
`,I5=h.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: 16px;
  color: var(--muted);
  font-size: 12px;
`,B5={compra:"Compra",fixa:"Fixa mensal"},q5=new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"});function Ia(t){return q5.format(Number(t)||0)}function lf(){const t=new Date;return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}`}function U5(){const t=new Date;return`${lf()}-${String(t.getDate()).padStart(2,"0")}`}function H5(t){return new Date(`${t.slice(0,10)}T12:00:00`).toLocaleDateString("pt-BR")}function Zg(){return{name:"",expense_type:"compra",category:"",amount:"",expense_date:U5(),due_day:"",is_active:!0,notes:""}}function V5(t){var a;return{name:t.name,expense_type:t.expense_type,category:t.category,amount:String(Number(t.amount)),expense_date:((a=t.expense_date)==null?void 0:a.slice(0,10))??"",due_day:t.due_day==null?"":String(t.due_day),is_active:t.is_active,notes:t.notes??""}}function W5(t){const a=Number(t.amount.replace(",","."));if(!Number.isFinite(a)||a<=0)throw new Error("Informe um valor maior que zero.");const s={name:t.name.trim(),expense_type:t.expense_type,amount:a,is_active:t.is_active,notes:t.notes.trim()||null};if(t.category.trim()&&(s.category=t.category.trim()),t.expense_type==="compra"){if(!t.expense_date)throw new Error("Informe a data da compra.");s.expense_date=t.expense_date}else{const l=Number(t.due_day);if(!Number.isInteger(l)||l<1||l>31)throw new Error("O dia de vencimento deve ser de 1 a 31.");s.due_day=l}return s}function Yl(t,a){var s,l;return t instanceof Error&&!$t.isAxiosError(t)?t.message:$t.isAxiosError(t)&&((l=(s=t.response)==null?void 0:s.data)==null?void 0:l.error)||a}function G5(){var ie;const[t,a]=x.useState(),[s,l]=x.useState(),[c,u]=x.useState([]),[m,f]=x.useState(lf()),[g,w]=x.useState({page:1,limit:20}),[b,S]=x.useState({type:"",category:"",active:"",search:""}),[_,R]=x.useState(Zg),[M,N]=x.useState(null),[V,$]=x.useState(!1),[j,A]=x.useState(null),[O,ae]=x.useState(!0),[J,I]=x.useState(!1),[ce,C]=x.useState(""),[y,q]=x.useState(""),[F,fe]=x.useState(0);x.useEffect(()=>{let D=!0;return ae(!0),C(""),Promise.all([K_({...g,month:m}),Y_(m),Q_()]).then(([de,_e,ke])=>{D&&(a(de),l(_e),u(ke))}).catch(de=>{D&&C(Yl(de,"Não foi possível carregar as despesas."))}).finally(()=>{D&&ae(!1)}),()=>{D=!1}},[g,m,F]);function ge(){N(null),R(Zg()),$(!0)}const Ne=x.useCallback(()=>$(!1),[]);function K(D){N(D),R(V5(D)),$(!0)}async function je(D){D.preventDefault(),C(""),q(""),I(!0);try{const de=W5(_);M?await Yx(M.id,de):await r2(de),$(!1),N(null),q(M?"Despesa atualizada.":"Despesa cadastrada."),fe(_e=>_e+1)}catch(de){C(Yl(de,"Não foi possível salvar a despesa."))}finally{I(!1)}}async function ue(D){C(""),q("");try{await Yx(D.id,{is_active:!D.is_active}),fe(de=>de+1)}catch(de){C(Yl(de,"Não foi possível alterar a despesa."))}}async function ye(){if(j){C(""),q("");try{await n2(j.id),q("Despesa removida."),fe(D=>D+1)}catch(D){C(Yl(D,"Não foi possível excluir a despesa."))}finally{A(null)}}}function W(D){D.preventDefault(),w({type:b.type||void 0,category:b.category||void 0,active:b.active?b.active==="true":void 0,search:b.search.trim()||void 0,page:1,limit:20})}const z=(t==null?void 0:t.data)??[],k=t==null?void 0:t.pagination,se=Number(s==null?void 0:s.total)||0;return e.jsxs(R5,{children:[e.jsxs(_s,{children:[e.jsxs("div",{children:[e.jsxs("span",{children:[e.jsx(Pc,{size:14})," Controle de despesas"]}),e.jsx("h1",{children:"Para onde vai seu dinheiro."}),e.jsx("p",{children:"Registre compras e contas fixas mensais e veja quanto cada categoria pesa no seu mês."})]}),e.jsxs(pe,{type:"button",$variant:"primary",onClick:ge,children:[e.jsx(yt,{}),"Nova despesa"]})]}),ce&&e.jsx(Ue,{role:"alert",style:{color:"var(--error)",padding:14},children:ce}),y&&e.jsx(Ue,{role:"status",style:{color:"var(--primary-strong)",padding:14},children:y}),e.jsxs(z5,{"aria-label":"Resumo das despesas do mês",children:[e.jsxs(fo,{children:[e.jsx("small",{children:"Contas fixas ativas"}),e.jsx("strong",{children:Ia(s==null?void 0:s.fixed_total)})]}),e.jsxs(fo,{children:[e.jsx("small",{children:"Compras do mês"}),e.jsx("strong",{children:Ia(s==null?void 0:s.purchases_total)})]}),e.jsxs(fo,{children:[e.jsx("small",{children:"Total do mês"}),e.jsx("strong",{children:Ia(s==null?void 0:s.total)})]}),(s==null?void 0:s.comparison)&&(()=>{const D=Number(s.comparison.difference)||0,de=s.comparison.change_percentage;return e.jsxs(fo,{children:[e.jsxs("small",{children:["Vs. mês anterior (",s.comparison.previous_month,")"]}),e.jsxs("strong",{style:{color:D>0?"var(--error)":D<0?"var(--primary-strong)":void 0},children:[D>0?"+":"",Ia(D),de==null?"":` (${Number(de)>0?"+":""}${Number(de).toFixed(2)}%)`]})]})})(),(s==null?void 0:s.top_category)&&e.jsxs(fo,{children:[e.jsxs("small",{children:["Maior gasto: ",s.top_category.category]}),e.jsxs("strong",{children:[Ia(s.top_category.total)," (",Number(s.top_category.percentage).toFixed(2),"%)"]})]})]}),e.jsxs(P5,{children:[e.jsxs(Ue,{children:[e.jsxs(Fe,{children:[e.jsx(bi,{size:19}),"Despesas"]}),e.jsx(xs,{open:V,title:M?"Editar despesa":"Nova despesa",icon:M?e.jsx(an,{size:18}):e.jsx(yt,{size:18}),busy:J,onClose:Ne,children:e.jsxs(L5,{onSubmit:D=>{je(D)},children:[e.jsxs(X,{htmlFor:"expense-name",children:["Nome *",e.jsx("input",{id:"expense-name",maxLength:160,value:_.name,onChange:D=>R(de=>({...de,name:D.target.value})),placeholder:"Ex.: Aluguel",required:!0})]}),e.jsxs(X,{htmlFor:"expense-type",children:["Tipo *",e.jsxs("select",{id:"expense-type",value:_.expense_type,onChange:D=>R(de=>({...de,expense_type:D.target.value})),children:[e.jsx("option",{value:"compra",children:"Compra (pontual)"}),e.jsx("option",{value:"fixa",children:"Fixa (mensal)"})]})]}),e.jsxs(X,{htmlFor:"expense-amount",children:["Valor (R$) *",e.jsx("input",{id:"expense-amount",type:"number",min:.01,step:"0.01",value:_.amount,onChange:D=>R(de=>({...de,amount:D.target.value})),required:!0})]}),_.expense_type==="compra"?e.jsxs(X,{htmlFor:"expense-date",children:["Data da compra *",e.jsx("input",{id:"expense-date",type:"date",value:_.expense_date,onChange:D=>R(de=>({...de,expense_date:D.target.value})),required:!0})]}):e.jsxs(X,{htmlFor:"expense-due",children:["Dia do vencimento *",e.jsx("input",{id:"expense-due",type:"number",min:1,max:31,step:1,value:_.due_day,onChange:D=>R(de=>({...de,due_day:D.target.value})),required:!0})]}),e.jsxs(X,{htmlFor:"expense-category",children:["Categoria",e.jsx("input",{id:"expense-category",list:"expense-categories",maxLength:60,value:_.category,onChange:D=>R(de=>({...de,category:D.target.value})),placeholder:"Outros"}),e.jsx("datalist",{id:"expense-categories",children:c.map(D=>e.jsx("option",{value:D.category},D.category))})]}),e.jsxs(X,{htmlFor:"expense-active",children:["Situação",e.jsxs("select",{id:"expense-active",value:String(_.is_active),onChange:D=>R(de=>({...de,is_active:D.target.value==="true"})),children:[e.jsx("option",{value:"true",children:"Ativa"}),e.jsx("option",{value:"false",children:"Pausada"})]})]}),e.jsxs(X,{htmlFor:"expense-notes",children:["Observações",e.jsx("textarea",{id:"expense-notes",maxLength:2e3,value:_.notes,onChange:D=>R(de=>({...de,notes:D.target.value}))})]}),e.jsxs(O5,{children:[e.jsxs(pe,{type:"button",onClick:Ne,disabled:J,children:[e.jsx(mr,{}),"Cancelar"]}),e.jsxs(pe,{type:"submit",$variant:"primary",disabled:J,children:[J?e.jsx(rt,{}):e.jsx(tn,{}),M?"Salvar alterações":"Cadastrar"]})]})]})}),e.jsxs(N5,{onSubmit:W,children:[e.jsxs(X,{htmlFor:"filter-month",children:["Mês das compras",e.jsx("input",{id:"filter-month",type:"month",value:m,onChange:D=>{f(D.target.value||lf()),w(de=>({...de,page:1}))}})]}),e.jsxs(X,{htmlFor:"filter-type",children:["Tipo",e.jsxs("select",{id:"filter-type",value:b.type,onChange:D=>S(de=>({...de,type:D.target.value})),children:[e.jsx("option",{value:"",children:"Todos"}),e.jsx("option",{value:"compra",children:"Compras"}),e.jsx("option",{value:"fixa",children:"Fixas"})]})]}),e.jsxs(X,{htmlFor:"filter-category",children:["Categoria",e.jsxs("select",{id:"filter-category",value:b.category,onChange:D=>S(de=>({...de,category:D.target.value})),children:[e.jsx("option",{value:"",children:"Todas"}),c.map(D=>e.jsx("option",{value:D.category,children:D.category},D.category))]})]}),e.jsxs(X,{htmlFor:"filter-search",children:["Buscar",e.jsx("input",{id:"filter-search",value:b.search,onChange:D=>S(de=>({...de,search:D.target.value})),placeholder:"Nome"})]}),e.jsxs(pe,{type:"submit",children:[e.jsx(Je,{}),"Filtrar"]})]}),O?e.jsxs(Xe,{children:[e.jsx(rt,{}),e.jsx("p",{children:"Carregando despesas..."})]}):z.length?e.jsx(A5,{children:z.map(D=>e.jsxs(D5,{$inactive:!D.is_active,children:[e.jsxs("div",{children:[e.jsx("h3",{children:D.name}),D.notes&&e.jsx("p",{children:D.notes}),e.jsxs(M5,{children:[e.jsxs("span",{children:[D.expense_type==="fixa"?e.jsx(Ak,{}):e.jsx(Tk,{}),B5[D.expense_type]]}),e.jsx("span",{children:D.category}),D.expense_type==="fixa"&&D.due_day!=null&&e.jsxs("span",{children:[e.jsx(Je,{}),"Vence dia ",D.due_day]}),D.expense_type==="compra"&&D.expense_date&&e.jsxs("span",{children:[e.jsx(Je,{}),H5(D.expense_date)]}),!D.is_active&&e.jsx("span",{children:"Pausada"})]})]}),e.jsxs(T5,{children:[e.jsx("strong",{children:Ia(D.amount)}),e.jsxs(F5,{children:[D.expense_type==="fixa"&&e.jsx(wp,{type:"button",title:D.is_active?"Pausar":"Reativar","aria-label":`${D.is_active?"Pausar":"Reativar"} ${D.name}`,onClick:()=>{ue(D)},children:D.is_active?e.jsx(Rc,{}):e.jsx(zc,{})}),e.jsx(wp,{type:"button",title:"Editar","aria-label":`Editar ${D.name}`,onClick:()=>K(D),children:e.jsx(an,{})}),e.jsx(wp,{type:"button","data-danger":"true",title:"Excluir","aria-label":`Excluir ${D.name}`,onClick:()=>A(D),children:e.jsx(Rr,{})})]})]})]},String(D.id)))}):t?e.jsxs(Xe,{children:[e.jsx(Pc,{size:30}),e.jsx("h3",{children:"Nenhuma despesa encontrada"}),e.jsx("p",{children:"Cadastre uma compra ou conta fixa para começar."}),e.jsxs(pe,{type:"button",$variant:"primary",onClick:ge,children:[e.jsx(yt,{}),"Nova despesa"]})]}):null,k&&k.total>0&&e.jsxs(I5,{children:[e.jsxs("span",{children:[k.total," despesas · página ",k.page," de ",Math.max(k.totalPages,1)]}),e.jsxs("div",{style:{display:"flex",gap:7},children:[e.jsx(pe,{type:"button",disabled:!k.hasPreviousPage||O,onClick:()=>w(D=>({...D,page:Math.max((D.page??1)-1,1)})),children:"Anterior"}),e.jsx(pe,{type:"button",disabled:!k.hasNextPage||O,onClick:()=>w(D=>({...D,page:(D.page??1)+1})),children:"Próxima"})]})]})]}),e.jsxs(Ue,{children:[e.jsxs(Fe,{children:[e.jsx(bi,{size:19}),"Por categoria"]}),s!=null&&s.by_category.length?s.by_category.map(D=>{const de=Number(D.total)||0;return e.jsxs(Jg,{children:[e.jsxs("div",{children:[e.jsx("strong",{children:D.category}),e.jsxs("span",{children:[Ia(de),D.percentage!==void 0?` · ${Number(D.percentage).toFixed(1)}%`:""]})]}),e.jsx(Xg,{children:e.jsx("div",{style:{width:`${se>0?Math.min(de/se*100,100):0}%`}})})]},D.category)}):e.jsx("p",{style:{margin:0,color:"var(--muted)",fontSize:12},children:"Sem despesas neste mês."}),(ie=s==null?void 0:s.daily_spending)!=null&&ie.length?(()=>{const D=Math.max(...s.daily_spending.map(de=>Number(de.total)||0),0);return e.jsxs(e.Fragment,{children:[e.jsxs(Fe,{style:{marginTop:18},children:[e.jsx(bi,{size:19}),"Compras por dia"]}),s.daily_spending.map(de=>{const _e=Number(de.total)||0;return e.jsxs(Jg,{children:[e.jsxs("div",{children:[e.jsxs("strong",{children:[de.date.slice(8,10),"/",de.date.slice(5,7)]}),e.jsx("span",{children:Ia(_e)})]}),e.jsx(Xg,{children:e.jsx("div",{style:{width:`${D>0?_e/D*100:0}%`}})})]},de.date)})]})})():null]})]}),e.jsx(Kc,{open:j!==null,title:"Excluir despesa?",description:j?`“${j.name}” será removida permanentemente.`:"",confirmLabel:"Excluir",busy:!1,onConfirm:()=>{ye()},onCancel:()=>A(null)})]})}const K5=h.div`
  display: grid;
  gap: 20px;
`,Q5=h(Ue)`
  padding: 20px;
`,Y5=h.form`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  align-items: end;
  gap: 12px;
  ${X} { margin: 0; }
  @media (max-width: 760px) { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  @media (max-width: 520px) { grid-template-columns: 1fr; }
`,J5=h.div`
  grid-column: 1 / -1;
  display: flex;
  justify-content: flex-end;
  padding-top: 3px;
`,X5=h.div`
  display: grid;
  gap: 13px;
  margin-top: 20px;
  padding-top: 18px;
  border-top: 1px solid var(--border);
`,Z5=h.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 10px;
  h3 { margin: 0; color: var(--text); font-size: 16px; }
  p { margin: 4px 0 0; color: var(--muted); font-size: 12px; }
`,eE=h.span`
  display: inline-flex;
  align-items: center;
  padding: 5px 9px;
  border-radius: 999px;
  color: var(--primary-strong);
  background: var(--primary-soft);
  font-size: 11px;
  font-weight: 700;
`,tE=h.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 10px;
  @media (max-width: 760px) { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  @media (max-width: 520px) { grid-template-columns: 1fr; }
`,ho=h.div`
  min-width: 0;
  padding: 13px;
  border: 1px solid ${({$highlight:t})=>t?"var(--primary)":"var(--border)"};
  border-radius: 12px;
  background: ${({$highlight:t})=>t?"var(--primary-soft)":"var(--surface-raised)"};
  small { display: block; color: var(--muted); font-size: 11px; }
  strong { display: block; margin-top: 5px; color: ${({$highlight:t})=>t?"var(--primary-strong)":"var(--text)"}; font-size: 17px; overflow-wrap: anywhere; }
`,rE=h.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;
  @media (max-width: 760px) { grid-template-columns: 1fr; }
`,nE=h.div`
  padding: 13px;
  border: 1px solid var(--border);
  border-radius: 12px;
  h4 { margin: 0 0 9px; color: var(--text); font-size: 13px; }
  p { display: flex; justify-content: space-between; gap: 10px; margin: 6px 0 0; color: var(--muted); font-size: 12px; }
  strong { color: var(--text); text-align: right; }
`,aE=h.ul`
  margin: 0;
  padding-left: 19px;
  color: var(--muted);
  font-size: 12px;
  line-height: 1.55;
`,Jl={gasolina:"Gasolina",alcool:"Álcool"},iE=new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}),xy="task-manager-fuel-calculator-form-v1";function ns(t){return iE.format(t)}function _p(t,a=2){return new Intl.NumberFormat("pt-BR",{maximumFractionDigits:a}).format(t)}function sE(t){return typeof t=="string"?t?[t]:[]:Array.isArray(t)?t.map(a=>typeof a=="string"?a:JSON.stringify(a)??String(a)):t&&typeof t=="object"?[JSON.stringify(t)??String(t)]:[]}function oE(t){var a;if($t.isAxiosError(t)){const s=(a=t.response)==null?void 0:a.data;return{message:typeof(s==null?void 0:s.error)=="string"?s.error:"Não foi possível calcular os custos de combustível.",details:sE(s==null?void 0:s.details)}}return{message:t instanceof Error?t.message:"Não foi possível calcular os custos de combustível.",details:[]}}function lE(){return{vehicle_model:"Hyundai HB20 2016 1.0",vehicle_type:"carro",fuel_type:"gasolina",gasoline_price:"6.19",alcohol_price:"4.29",gasoline_consumption:"",alcohol_consumption:"",distance_km:"1000"}}function cE(t){return typeof t=="object"&&t!==null}function dE(){const t=lE();try{const a=localStorage.getItem(xy);if(!a)return{form:t,warning:null};const s=JSON.parse(a);if(!cE(s))return{form:t,warning:null};const l=s.vehicle_model==="Honda CG 160"&&s.vehicle_type==="moto";return{form:{vehicle_model:l?t.vehicle_model:typeof s.vehicle_model=="string"?s.vehicle_model:t.vehicle_model,vehicle_type:l?t.vehicle_type:s.vehicle_type==="carro"||s.vehicle_type==="moto"?s.vehicle_type:t.vehicle_type,fuel_type:s.fuel_type==="gasolina"||s.fuel_type==="alcool"?s.fuel_type:t.fuel_type,gasoline_price:typeof s.gasoline_price=="string"?s.gasoline_price:t.gasoline_price,alcohol_price:typeof s.alcohol_price=="string"?s.alcohol_price:t.alcohol_price,gasoline_consumption:l&&s.gasoline_consumption==="40"?t.gasoline_consumption:typeof s.gasoline_consumption=="string"?s.gasoline_consumption:t.gasoline_consumption,alcohol_consumption:l&&s.alcohol_consumption==="30"?t.alcohol_consumption:typeof s.alcohol_consumption=="string"?s.alcohol_consumption:t.alcohol_consumption,distance_km:typeof s.distance_km=="string"&&s.distance_km.trim()?s.distance_km:t.distance_km},warning:null}}catch{return{form:t,warning:"Não foi possível acessar os dados salvos neste navegador."}}}function vc(t,a,s=!1){if(!t.trim()&&s)return;const l=Number(t.replace(",","."));if(!Number.isFinite(l)||l<=0)throw new Error(`${a} deve ser maior que zero.`);return l}function ev(t,a){const s=vc(t,a);if(s===void 0)throw new Error(`${a} deve ser maior que zero.`);return s}function kp(t){return t==="Hyundai HB20 2016 1.0"?"hb20-2016":t==="Honda CG 160"?"cg-160":t==="Honda NXR 150 Bros 2012"?"bros-150-2012":"custom"}function uE(){const[t]=x.useState(dE),[a,s]=x.useState(t.form),[l,c]=x.useState(t.warning),[u,m]=x.useState(null),[f,g]=x.useState(null),[w,b]=x.useState(null),[S,_]=x.useState(!1);x.useEffect(()=>{try{localStorage.setItem(xy,JSON.stringify(a)),c(null)}catch{c("Não foi possível salvar os dados do veículo neste navegador.")}},[a]);function R(j){if(j==="hb20-2016"){s(A=>({...A,vehicle_model:"Hyundai HB20 2016 1.0",vehicle_type:"carro",gasoline_consumption:"",alcohol_consumption:""}));return}if(j==="cg-160"){s(A=>({...A,vehicle_model:"Honda CG 160",vehicle_type:"moto",gasoline_consumption:"40",alcohol_consumption:"30"}));return}if(j==="bros-150-2012"){s(A=>({...A,vehicle_model:"Honda NXR 150 Bros 2012",vehicle_type:"moto",gasoline_consumption:"30",alcohol_consumption:"25"}));return}s(A=>({...A,vehicle_model:"",gasoline_consumption:"",alcohol_consumption:""}))}async function M(j){j.preventDefault(),b(null),g(null),_(!0);try{const A=a.vehicle_model.trim();if(A.length<1||A.length>100)throw new Error("O modelo do veículo deve ter entre 1 e 100 caracteres.");const O=vc(a.gasoline_consumption,"Consumo com gasolina",!0),ae=vc(a.alcohol_consumption,"Consumo com álcool",!0),J=vc(a.distance_km,"Distância",!0),I={vehicle_model:A,vehicle_type:a.vehicle_type,fuel_type:a.fuel_type,fuel_prices:{gasolina:ev(a.gasoline_price,"Preço da gasolina"),alcool:ev(a.alcohol_price,"Preço do álcool")},consumption_km_per_l:{...O===void 0?{}:{gasolina:O},...ae===void 0?{}:{alcool:ae}},...J===void 0?{}:{distance_km:J}};m(I),g(await Z_(I))}catch(A){b(oE(A))}finally{_(!1)}}const N=f&&u?u.consumption_km_per_l[f.selected_fuel]:void 0,V=(f==null?void 0:f.estimates.distance_km)??(u==null?void 0:u.distance_km),$=f&&u?f.estimates.selected_fuel_cost.cost??(V!==void 0&&N!==void 0?V/N*f.fuel_prices[f.selected_fuel]:null):null;return e.jsxs(K5,{children:[e.jsx(_s,{children:e.jsxs("div",{children:[e.jsxs("span",{children:[e.jsx(Pc,{size:14})," Despesas e transporte"]}),e.jsx("h1",{children:"Calculadora de combustível."}),e.jsx("p",{children:"Compare o custo por combustível e descubra qual compensa para o seu veículo."})]})}),e.jsxs(Q5,{children:[e.jsxs(Fe,{children:[e.jsx($c,{size:19}),"Comparar custos de combustível"]}),e.jsx("p",{style:{margin:"-6px 0 16px",color:"var(--muted)",fontSize:12},children:"Os dados do veículo ficam salvos neste navegador. Ajuste os valores para o seu veículo e informe quantos quilômetros roda por semana para estimar o gasto semanal."}),l&&e.jsx("p",{role:"status",style:{margin:"-8px 0 14px",color:"var(--error)",fontSize:12},children:l}),e.jsxs(Y5,{onSubmit:j=>{M(j)},children:[e.jsxs(X,{htmlFor:"fuel-vehicle-preset",children:["Veículo cadastrado",e.jsxs("select",{id:"fuel-vehicle-preset",value:kp(a.vehicle_model),onChange:j=>R(j.target.value),children:[e.jsx("option",{value:"hb20-2016",children:"Hyundai HB20 2016 1.0"}),e.jsx("option",{value:"cg-160",children:"Honda CG 160"}),e.jsx("option",{value:"bros-150-2012",children:"Honda NXR 150 Bros 2012"}),e.jsx("option",{value:"custom",children:"Outro veículo"})]})]}),kp(a.vehicle_model)==="bros-150-2012"&&e.jsx("p",{style:{gridColumn:"1 / -1",margin:"-8px 0 2px",color:"var(--muted)",fontSize:12,lineHeight:1.5},children:"Consumos iniciais aproximados para a Bros 150: 30 km/L na gasolina e 25 km/L no álcool. Ajuste para a média real da sua moto."}),kp(a.vehicle_model)==="custom"&&e.jsxs(X,{htmlFor:"fuel-vehicle-model",children:["Modelo do veículo *",e.jsx("input",{id:"fuel-vehicle-model",maxLength:100,value:a.vehicle_model,onChange:j=>s(A=>({...A,vehicle_model:j.target.value})),placeholder:"Digite o modelo",required:!0})]}),e.jsxs(X,{htmlFor:"fuel-vehicle-type",children:["Tipo de veículo *",e.jsxs("select",{id:"fuel-vehicle-type",value:a.vehicle_type,onChange:j=>s(A=>({...A,vehicle_type:j.target.value})),children:[e.jsx("option",{value:"carro",children:"Carro"}),e.jsx("option",{value:"moto",children:"Moto"})]})]}),e.jsxs(X,{htmlFor:"fuel-selected-type",children:["Combustível usado atualmente *",e.jsxs("select",{id:"fuel-selected-type",value:a.fuel_type,onChange:j=>s(A=>({...A,fuel_type:j.target.value})),children:[e.jsx("option",{value:"gasolina",children:"Gasolina"}),e.jsx("option",{value:"alcool",children:"Álcool"})]})]}),e.jsxs(X,{htmlFor:"fuel-gasoline-price",children:["Preço da gasolina (R$/L) *",e.jsx("input",{id:"fuel-gasoline-price",type:"number",min:"0.01",step:"any",value:a.gasoline_price,onChange:j=>s(A=>({...A,gasoline_price:j.target.value})),placeholder:"6,19",required:!0})]}),e.jsxs(X,{htmlFor:"fuel-alcohol-price",children:["Preço do álcool (R$/L) *",e.jsx("input",{id:"fuel-alcohol-price",type:"number",min:"0.01",step:"any",value:a.alcohol_price,onChange:j=>s(A=>({...A,alcohol_price:j.target.value})),placeholder:"4,29",required:!0})]}),e.jsxs(X,{htmlFor:"fuel-distance",children:["Quantos quilômetros roda por semana? (km) *",e.jsx("input",{id:"fuel-distance",type:"number",min:"0.01",step:"any",value:a.distance_km,onChange:j=>s(A=>({...A,distance_km:j.target.value})),placeholder:"Ex.: 250",required:!0})]}),e.jsxs(X,{htmlFor:"fuel-gasoline-consumption",children:["Consumo com gasolina (km/L)",e.jsx("input",{id:"fuel-gasoline-consumption",type:"number",min:"0.01",step:"any",value:a.gasoline_consumption,onChange:j=>s(A=>({...A,gasoline_consumption:j.target.value})),placeholder:"Opcional"})]}),e.jsxs(X,{htmlFor:"fuel-alcohol-consumption",children:["Consumo com álcool (km/L)",e.jsx("input",{id:"fuel-alcohol-consumption",type:"number",min:"0.01",step:"any",value:a.alcohol_consumption,onChange:j=>s(A=>({...A,alcohol_consumption:j.target.value})),placeholder:"Opcional"})]}),e.jsx(J5,{children:e.jsxs(pe,{type:"submit",$variant:"primary",disabled:S,children:[S?e.jsx(rt,{}):e.jsx($c,{}),S?"Calculando...":"Comparar combustíveis"]})})]}),w&&e.jsxs(Ue,{role:"alert",style:{marginTop:16,padding:14,color:"var(--error)"},children:[e.jsx("strong",{children:w.message}),w.details.length>0&&e.jsx("ul",{style:{margin:"6px 0 0",paddingLeft:19},children:w.details.map((j,A)=>e.jsx("li",{children:j},`${A}-${j}`))})]}),f&&e.jsxs(X5,{"aria-live":"polite",children:[e.jsxs(Z5,{children:[e.jsxs("div",{children:[e.jsxs("h3",{children:["Resultado para ",f.vehicle.model]}),e.jsxs("p",{children:[f.vehicle.type==="moto"?"Moto":"Carro",f.estimates.distance_km===null?"":` · ${_p(f.estimates.distance_km)} km por semana`]})]}),e.jsx(eE,{children:f.analysis_method==="regra_dos_70_por_cento"?"Regra aproximada dos 70%":"Consumo informado"})]}),e.jsxs(tE,{children:[e.jsxs(ho,{children:[e.jsx("small",{children:"Combustível recomendado"}),e.jsx("strong",{children:Jl[f.comparison.recommended_fuel]})]}),e.jsxs(ho,{children:[e.jsx("small",{children:"Preço de equilíbrio do álcool"}),e.jsx("strong",{children:f.comparison.ethanol_break_even_price===null?"Não disponível":ns(f.comparison.ethanol_break_even_price)})]}),e.jsxs(ho,{children:[e.jsx("small",{children:"Álcool em relação à gasolina"}),e.jsx("strong",{children:f.comparison.ethanol_price_as_percentage_of_gasoline===null?"Não disponível":`${_p(f.comparison.ethanol_price_as_percentage_of_gasoline)}%`})]}),e.jsxs(ho,{children:[e.jsx("small",{children:"Economia estimada na semana"}),e.jsx("strong",{children:f.comparison.estimated_savings_for_distance===null?"Informe consumos e distância":ns(f.comparison.estimated_savings_for_distance)})]}),e.jsxs(ho,{$highlight:!0,children:[e.jsxs("small",{children:["Você gastaria por semana com ",Jl[f.selected_fuel].toLowerCase()]}),e.jsx("strong",{children:$===null?"Informe o consumo do combustível atual":ns($)})]})]}),e.jsxs("p",{style:{margin:0,color:f.comparison.selected_fuel_is_cheaper?"var(--primary-strong)":"var(--muted)",fontSize:12},children:["O combustível atual (",Jl[f.selected_fuel],") ",f.comparison.selected_fuel_is_cheaper?"é o mais econômico.":"não é o mais econômico nesta comparação."]}),e.jsx(rE,{children:["gasolina","alcool"].map(j=>{const A=f.estimates[j];return e.jsxs(nE,{children:[e.jsxs("h4",{children:[Jl[j]," · ",ns(f.fuel_prices[j]),"/L"]}),e.jsxs("p",{children:[e.jsx("span",{children:"Litros estimados"}),e.jsx("strong",{children:A.liters===null?"Não disponível":`${_p(A.liters,3)} L`})]}),e.jsxs("p",{children:[e.jsx("span",{children:"Gasto por semana"}),e.jsx("strong",{children:A.cost===null?"Informe o consumo para estimar":ns(A.cost)})]}),e.jsxs("p",{children:[e.jsx("span",{children:"Custo por km"}),e.jsx("strong",{children:A.cost_per_km===null?"Não disponível":`${ns(A.cost_per_km)}/km`})]})]},j)})}),f.notes.length>0&&e.jsx(aE,{children:f.notes.map((j,A)=>e.jsx("li",{children:j},`${A}-${j}`))})]})]})]})}const Xl={"hb20-2016":{model:"Hyundai HB20 2016 1.0",vehicleType:"carro",consumptions:{gasolina:null,alcool:null}},"cg-160":{model:"Honda CG 160",vehicleType:"moto",consumptions:{gasolina:40,alcool:30}},"bros-150-2012":{model:"Honda NXR 150 Bros 2012",vehicleType:"moto",consumptions:{gasolina:30,alcool:25}}},pE=[{value:"hb20-2016",label:"Hyundai HB20 2016 1.0"},{value:"cg-160",label:"Honda CG 160"},{value:"bros-150-2012",label:"Honda NXR 150 Bros 2012"}],gy="task-manager-daily-routes-v1",fE="task-manager-fuel-calculator-form-v1",Sp=new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}),Zl=new Intl.NumberFormat("pt-BR",{maximumFractionDigits:2}),tv={gasolina:"Gasolina",alcool:"Álcool"},hE=h.div`
  display: grid;
  gap: 18px;
`,vy=h(Ue)`
  padding: 20px;
`,rv=h.p`
  margin: -7px 0 17px;
  color: var(--muted);
  font-size: 12px;
  line-height: 1.55;
`,mE=h.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 18px;
  ${X} { min-width: 190px; margin: 0; }
`,xE=h.div`
  display: grid;
  gap: 4px;
  padding: 11px 13px;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: var(--surface-raised);
  color: var(--muted);
  font-size: 12px;
  strong { color: var(--text); }
  a { color: var(--primary-strong); font-weight: 700; }
`,gE=h.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 11px;
  margin-bottom: 18px;
  @media (max-width: 680px) { grid-template-columns: 1fr; }
`,Cp=h.div`
  min-width: 0;
  padding: 14px;
  border: 1px solid var(--border);
  border-radius: 13px;
  background: var(--surface-raised);
  small { display: block; color: var(--muted); font-size: 11px; }
  strong { display: block; margin-top: 5px; color: var(--text); font-size: 20px; overflow-wrap: anywhere; }
`,vE=h.div`
  display: grid;
  gap: 10px;
`,yE=h.article`
  display: grid;
  grid-template-columns: 30px minmax(0, 1.2fr) minmax(0, 1.2fr) minmax(110px, .75fr) minmax(105px, .7fr) minmax(95px, auto) auto 36px;
  align-items: end;
  gap: 10px;
  padding: 13px;
  border: 1px solid var(--border);
  border-radius: 13px;
  background: var(--surface);
  ${X} { min-width: 0; margin: 0; }
  > div { min-width: 0; }
  @media (max-width: 1050px) { grid-template-columns: 30px 1fr 1fr 1fr; }
  @media (max-width: 580px) { grid-template-columns: 1fr 1fr; }
`,jE=h.div`
  position: relative;
  min-width: 0;
`,bE=h.div`
  position: absolute;
  z-index: 20;
  top: calc(100% + 4px);
  right: 0;
  left: 0;
  display: grid;
  max-height: 220px;
  overflow: auto;
  padding: 4px;
  border: 1px solid var(--border);
  border-radius: 10px;
  background: var(--surface);
  box-shadow: var(--shadow-raised);
`,wE=h.button`
  padding: 9px 10px;
  border: 0;
  border-radius: 7px;
  color: var(--text);
  background: transparent;
  font: inherit;
  font-size: 12px;
  text-align: left;
  cursor: pointer;
  &:hover, &:focus-visible { background: var(--primary-soft); outline: none; }
`,cf=h.div`
  padding: 8px 10px;
  color: var(--muted);
  font-size: 11px;
`,_E=h.span`
  display: grid;
  width: 28px;
  height: 28px;
  place-items: center;
  align-self: center;
  border-radius: 9px;
  color: var(--primary-strong);
  background: var(--primary-soft);
  font-size: 12px;
  font-weight: 800;
  @media (max-width: 580px) { display: none; }
`,kE=h.div`
  min-width: 0;
  padding-bottom: 8px;
  color: var(--muted);
  font-size: 11px;
  strong { display: block; margin-top: 4px; color: var(--text); font-size: 13px; }
  @media (max-width: 1050px) { grid-column: 2; }
  @media (max-width: 580px) { grid-column: 1; }
`,SE=h(pe)`
  min-height: 38px;
  white-space: nowrap;
  @media (max-width: 1050px) { grid-column: 3 / span 2; }
  @media (max-width: 580px) { grid-column: 1 / -1; justify-self: start; }
`,CE=h.button`
  display: grid;
  width: 36px;
  height: 36px;
  place-items: center;
  border: 1px solid var(--border);
  border-radius: 10px;
  color: var(--muted);
  background: var(--surface-raised);
  cursor: pointer;
  &:hover { color: var(--error); border-color: var(--error); background: var(--error-soft); }
  svg { width: 15px; height: 15px; }
  @media (max-width: 1050px) { grid-column: 4; grid-row: 3; }
  @media (max-width: 580px) { grid-column: 2; grid-row: 3; justify-self: end; }
`,EE=h.p`
  grid-column: 2 / -1;
  margin: -2px 0 0;
  color: var(--muted);
  font-size: 11px;
  line-height: 1.45;
  @media (max-width: 580px) { grid-column: 1 / -1; }
`,$E=h.fieldset`
  grid-column: 2 / -1;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 8px;
  min-width: 0;
  margin: 0;
  padding: 10px;
  border: 1px solid var(--border);
  border-radius: 10px;
  legend { padding: 0 5px; color: var(--muted); font-size: 11px; font-weight: 700; }
  @media (max-width: 580px) { grid-column: 1 / -1; }
`,RE=h.label`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  min-width: 0;
  padding: 9px;
  border: 1px solid ${({$selected:t})=>t?"var(--primary)":"var(--border)"};
  border-radius: 9px;
  color: var(--text);
  background: ${({$selected:t})=>t?"var(--primary-soft)":"var(--surface)"};
  cursor: pointer;
  input { margin-top: 2px; accent-color: var(--primary); }
  span { display: grid; gap: 3px; min-width: 0; font-size: 11px; }
  strong { font-size: 12px; }
`,zE=h.p`
  margin: 14px 0 0;
  color: var(--muted);
  font-size: 11px;
  a { color: var(--primary-strong); }
`,PE=h.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 13px;
`,NE=h(vy)`
  display: grid;
  gap: 14px;
`,AE=h.div`
  display: grid;
  gap: 8px;
`,DE=h.button`
  display: grid;
  grid-template-columns: minmax(0, 1fr) repeat(2, minmax(110px, auto)) auto;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 12px 14px;
  border: 1px solid var(--border);
  border-radius: 11px;
  color: var(--text);
  background: var(--surface);
  text-align: left;
  cursor: pointer;
  &:hover { border-color: var(--primary); background: var(--primary-soft); }
  strong { display: block; font-size: 13px; }
  small { display: block; margin-top: 3px; color: var(--muted); font-size: 11px; }
  @media (max-width: 640px) {
    grid-template-columns: 1fr 1fr;
    > span:first-child { grid-column: 1 / -1; }
  }
`,ME=h.div`
  display: flex;
  justify-content: center;
  padding-top: 3px;
`,nv=h.p`
  margin: 0;
  padding: 20px;
  border: 1px dashed var(--border);
  border-radius: 12px;
  color: var(--muted);
  font-size: 13px;
  text-align: center;
`;function TE(){const t=new Date;return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`}function wn(t){return typeof t=="object"&&t!==null}function FE(){try{const t=localStorage.getItem(gy);if(!t)return{days:{},warning:null};const a=JSON.parse(t);if(!wn(a))throw new Error("Formato inválido");const s={};for(const[l,c]of Object.entries(a)){if(!/^\d{4}-\d{2}-\d{2}$/.test(l)||!Array.isArray(c))throw new Error("Formato inválido");if(!c.every(u=>wn(u)&&typeof u.id=="number"&&typeof u.origin=="string"&&typeof u.destination=="string"&&typeof u.distanceKm=="string"&&(u.fuelType===void 0||u.fuelType==="gasolina"||u.fuelType==="alcool")&&(u.routeDescription===void 0||typeof u.routeDescription=="string")&&(u.routeOptions===void 0||Array.isArray(u.routeOptions)&&u.routeOptions.every(IE))&&(u.selectedRouteIndex===void 0||typeof u.selectedRouteIndex=="number"&&Number.isInteger(u.selectedRouteIndex)&&u.selectedRouteIndex>=0)&&(u.manualDistance===void 0||typeof u.manualDistance=="boolean")&&(u.originPlace===void 0||av(u.originPlace))&&(u.destinationPlace===void 0||av(u.destinationPlace))))throw new Error("Formato inválido");s[l]=c}return{days:s,warning:null}}catch{return{days:{},warning:"Não foi possível ler os percursos salvos. Os dados não serão substituídos automaticamente."}}}function ec(t){if(typeof t!="string"&&typeof t!="number"||typeof t=="string"&&!t.trim())return null;const a=Number(String(t).replace(",","."));return Number.isFinite(a)&&a>0?a:null}function LE(){const t={model:"Veículo não configurado",vehicleType:"carro",fuelType:"gasolina",prices:{gasolina:null,alcool:null},consumptions:{gasolina:null,alcool:null}};try{const a=localStorage.getItem(fE);if(!a)return t;const s=JSON.parse(a);if(!wn(s))return t;const l=s.fuel_type==="alcool"?"alcool":"gasolina";return{model:typeof s.vehicle_model=="string"&&s.vehicle_model.trim()?s.vehicle_model:t.model,vehicleType:s.vehicle_type==="moto"?"moto":"carro",fuelType:l,prices:{gasolina:ec(s.gasoline_price),alcool:ec(s.alcohol_price)},consumptions:{gasolina:ec(s.gasoline_consumption),alcool:ec(s.alcohol_consumption)}}}catch{return t}}function Ep(t){const[a,s,l]=t.split("-").map(Number);return new Intl.DateTimeFormat("pt-BR",{dateStyle:"long"}).format(new Date(a,s-1,l))}function OE(t){return t.legs.map(a=>{var s;return{id:a.id,origin:a.origin,destination:a.destination,distanceKm:String(a.distance_km),fuelType:a.fuel_type,routeDescription:a.route_description??void 0,routeOptions:(s=a.route_options)==null?void 0:s.map(l=>({distanceKm:l.distance_km,durationSeconds:l.duration_seconds})),selectedRouteIndex:a.selected_route_index??void 0}})}function tc(t){const a=Number(t.replace(",","."));return Number.isFinite(a)&&a>0?a:0}function IE(t){return wn(t)&&typeof t.distanceKm=="number"&&Number.isFinite(t.distanceKm)&&t.distanceKm>0&&typeof t.durationSeconds=="number"&&Number.isFinite(t.durationSeconds)&&t.durationSeconds>=0}function av(t){return wn(t)&&typeof t.label=="string"&&wn(t.coordinates)&&typeof t.coordinates.longitude=="number"&&Number.isFinite(t.coordinates.longitude)&&typeof t.coordinates.latitude=="number"&&Number.isFinite(t.coordinates.latitude)}function BE(t){return Array.isArray(t)&&typeof t[0]=="number"&&Number.isFinite(t[0])&&typeof t[1]=="number"&&Number.isFinite(t[1])}function qE(t,a){const s=typeof t.name=="string"?t.name:"",l=["street","city","state","country"].map(c=>t[c]).filter(c=>typeof c=="string"&&!!c.trim()).filter(c=>c!==s);return[s||a,...l].join(", ")}function UE(t,a){if(!wn(t)||!wn(t.geometry)||!wn(t.properties)||!BE(t.geometry.coordinates))return null;const[s,l]=t.geometry.coordinates;return{label:qE(t.properties,a),coordinates:{longitude:s,latitude:l}}}async function yy(t){const a=new AbortController,s=window.setTimeout(()=>a.abort(),15e3);try{const l=await fetch(t,{headers:{Accept:"application/json"},signal:a.signal});if(!l.ok)throw new Error(`O serviço de mapas respondeu com erro (${l.status}).`);return await l.json()}catch(l){throw l instanceof DOMException&&l.name==="AbortError"?new Error("A consulta ao serviço de mapas demorou demais. Tente novamente."):l}finally{window.clearTimeout(s)}}async function jy(t){const a=new URLSearchParams({q:t,limit:"5"}),s=await yy(`https://photon.komoot.io/api/?${a.toString()}`);if(!wn(s)||!Array.isArray(s.features))throw new Error("A busca de endereços retornou uma resposta inválida.");return s.features.map(l=>UE(l,t)).filter(l=>l!==null)}async function iv(t){const a=await jy(t);if(a.length===0)throw new Error(`Não encontrei o local "${t}". Inclua cidade e estado e tente novamente.`);return a[0]}async function HE(t,a,s,l){const c=s??await iv(t),u=l??await iv(a),m=[`${c.coordinates.longitude},${c.coordinates.latitude}`,`${u.coordinates.longitude},${u.coordinates.latitude}`].join(";"),f=await yy(`https://router.project-osrm.org/route/v1/driving/${m}?overview=false&alternatives=true`);if(!wn(f)||f.code!=="Ok"||!Array.isArray(f.routes))throw new Error("Não foi possível calcular a rota de carro entre esses locais.");const g=f.routes.map(w=>!wn(w)||typeof w.distance!="number"||!Number.isFinite(w.distance)||w.distance<=0||typeof w.duration!="number"||!Number.isFinite(w.duration)?null:{distanceKm:w.distance/1e3,durationSeconds:w.duration}).filter(w=>w!==null);if(g.length===0)throw new Error("O serviço de mapas não retornou uma distância válida para essa rota.");return{options:g,description:`${c.label} → ${u.label}`}}function VE(t){const a=Math.round(t/60),s=Math.floor(a/60),l=a%60;return s===0?`${l} min`:l===0?`${s} h`:`${s} h ${l} min`}function sv({id:t,label:a,value:s,placeholder:l,selectedPlace:c,onChange:u,onSelect:m}){const[f,g]=x.useState([]),[w,b]=x.useState(!1),[S,_]=x.useState(null);x.useEffect(()=>{const M=s.trim();if(M.length<3||(c==null?void 0:c.label)===s){g([]),b(!1),_(null);return}let N=!0;const V=window.setTimeout(()=>{b(!0),_(null),jy(M).then($=>{N&&(g($),_($.length?null:"Nenhum endereço encontrado. Tente incluir cidade e estado."))}).catch($=>{N&&(g([]),_($ instanceof Error?$.message:"Não foi possível buscar endereços."))}).finally(()=>{N&&b(!1)})},350);return()=>{N=!1,window.clearTimeout(V)}},[c,s]);const R=w||f.length>0||S!==null;return e.jsxs(jE,{children:[e.jsxs(X,{htmlFor:t,children:[a,e.jsx("input",{id:t,role:"combobox","aria-autocomplete":"list","aria-expanded":f.length>0,"aria-controls":`${t}-suggestions`,autoComplete:"off",value:s,onChange:M=>u(M.target.value),placeholder:l})]}),R&&e.jsxs(bE,{id:`${t}-suggestions`,role:"listbox",children:[w&&e.jsx(cf,{role:"status",children:"Buscando endereços..."}),!w&&S&&e.jsx(cf,{role:"status",children:S}),!w&&f.map((M,N)=>e.jsx(wE,{type:"button",role:"option","aria-selected":"false",onClick:()=>{m(M),g([]),_(null)},children:M.label||`Resultado ${N+1}`},`${M.label}-${M.coordinates.longitude}-${M.coordinates.latitude}`))]})]})}function WE(){var Ze,pt,ht,Ot;const[t]=x.useState(FE),[a,s]=x.useState(t.days),[l,c]=x.useState(TE),[u]=x.useState(LE),[m,f]=x.useState("saved"),[g,w]=x.useState(t.warning),[b,S]=x.useState(null),[_,R]=x.useState(null),[M,N]=x.useState(null),[V,$]=x.useState([]),[j,A]=x.useState(1),[O,ae]=x.useState(!1),[J,I]=x.useState(!0),[ce,C]=x.useState(!1),[y,q]=x.useState(null),F=x.useRef(!!t.warning),fe=V.find(oe=>oe.route_date===l),ge=m==="saved"&&fe?{model:fe.vehicle_model,vehicleType:fe.vehicle_type,fuelType:fe.selected_fuel,prices:fe.fuel_prices,consumptions:fe.consumption_km_per_l}:m==="calculator"||m==="saved"?u:{...u,...Xl[m],consumptions:u.model===Xl[m].model?u.consumptions:Xl[m].consumptions},Ne=a[l]??[],K=Ne.reduce((oe,$e)=>{const me=tc($e.distanceKm),Pe=$e.fuelType??ge.fuelType,Y=ge.consumptions[Pe],Be=ge.prices[Pe];return{distance:oe.distance+me,liters:oe.liters+(Y?me/Y:0),cost:oe.cost+(Y&&Be?me/Y*Be:0),hasDistance:oe.hasDistance||me>0,missingConsumption:oe.missingConsumption||me>0&&!Y,missingPriceOrConsumption:oe.missingPriceOrConsumption||me>0&&(!Y||!Be)}},{distance:0,liters:0,cost:0,hasDistance:!1,missingConsumption:!1,missingPriceOrConsumption:!1}),je=K.hasDistance&&!K.missingConsumption?K.liters:null,ue=K.hasDistance&&!K.missingPriceOrConsumption?K.cost:null;x.useEffect(()=>{if(F.current){F.current=!1;return}try{localStorage.setItem(gy,JSON.stringify(a)),w(null)}catch{w("Não foi possível salvar os percursos neste navegador.")}},[t.warning,a]);async function ye(oe,$e=!1){I(!0),R(null);try{const me=await e2(oe,10);$(Pe=>{const Y=$e?[...Pe,...me.data]:me.data;return[...new Map(Y.map(_t=>[_t.route_date,_t])).values()].sort((_t,ot)=>ot.route_date.localeCompare(_t.route_date))}),A(me.pagination.page),ae(me.pagination.hasNextPage)}catch(me){R(me instanceof Error?`Não foi possível carregar o histórico: ${me.message}`:"Não foi possível carregar o histórico do banco de dados.")}finally{I(!1)}}x.useEffect(()=>{ye(1)},[]);function W(oe){s($e=>({...$e,[l]:oe($e[l]??[])}))}function z(){W(oe=>{const $e=oe[oe.length-1],me=oe.reduce((Pe,Y)=>Math.max(Pe,Y.id),0)+1;return[...oe,{id:me,origin:($e==null?void 0:$e.destination)??"",destination:"",distanceKm:"",fuelType:ge.fuelType}]})}function k(oe,$e,me){W(Pe=>Pe.map(Y=>Y.id!==oe?Y:$e==="origin"?{...Y,origin:me,originPlace:void 0,distanceKm:"",routeDescription:void 0,routeOptions:void 0,selectedRouteIndex:void 0,manualDistance:!1}:$e==="destination"?{...Y,destination:me,destinationPlace:void 0,distanceKm:"",routeDescription:void 0,routeOptions:void 0,selectedRouteIndex:void 0,manualDistance:!1}:$e==="distanceKm"?{...Y,distanceKm:me,routeDescription:void 0,routeOptions:void 0,selectedRouteIndex:void 0,manualDistance:!!me.trim()}:$e==="fuelType"?{...Y,fuelType:me==="alcool"?"alcool":"gasolina"}:Y))}function se(oe,$e,me){W(Pe=>Pe.map(Y=>Y.id===oe?{...Y,[$e]:me.label,[$e==="origin"?"originPlace":"destinationPlace"]:me,distanceKm:"",routeDescription:void 0,routeOptions:void 0,selectedRouteIndex:void 0,manualDistance:!1}:Y))}function ie(oe,$e){W(me=>me.map(Pe=>Pe.id!==oe||!Pe.routeOptions||!Pe.routeOptions[$e]?Pe:{...Pe,selectedRouteIndex:$e,distanceKm:Pe.routeOptions[$e].distanceKm.toFixed(2),manualDistance:!1}))}function D(oe){W($e=>$e.filter(me=>me.id!==oe))}async function de(){if(R(null),N(null),Ne.length===0){R("Adicione ao menos um trecho antes de salvar o dia.");return}if(Ne.some(oe=>!oe.origin.trim()||!oe.destination.trim()||tc(oe.distanceKm)<=0)){R("Preencha origem, destino e uma distância válida em todos os trechos antes de salvar.");return}C(!0);try{const oe=await t2(l,{vehicle_model:ge.model,vehicle_type:ge.vehicleType,selected_fuel:ge.fuelType,fuel_prices:ge.prices,consumption_km_per_l:ge.consumptions,legs:Ne.map($e=>({id:$e.id,origin:$e.origin.trim(),destination:$e.destination.trim(),distance_km:tc($e.distanceKm),fuel_type:$e.fuelType??u.fuelType,...$e.routeDescription?{route_description:$e.routeDescription}:{},...$e.routeOptions?{route_options:$e.routeOptions.map(me=>({distance_km:me.distanceKm,duration_seconds:me.durationSeconds}))}:{},...$e.selectedRouteIndex===void 0?{}:{selected_route_index:$e.selectedRouteIndex}}))});$($e=>[oe,...$e.filter(me=>me.route_date!==oe.route_date)].sort((me,Pe)=>Pe.route_date.localeCompare(me.route_date))),N(`Percurso de ${Ep(oe.route_date)} salvo no histórico.`)}catch(oe){R(oe instanceof Error?`Não foi possível salvar o percurso: ${oe.message}`:"Não foi possível salvar o percurso no banco de dados.")}finally{C(!1)}}function _e(oe){c(oe.route_date),f("saved"),s($e=>({...$e,[oe.route_date]:OE(oe)})),N(`Exibindo o percurso salvo de ${Ep(oe.route_date)}.`),R(null)}async function ke(oe){if(!oe.origin.trim()||!oe.destination.trim()){S("Informe a origem e o destino antes de calcular a rota.");return}S(null),q(oe.id);const $e=l;try{const me=await HE(oe.origin.trim(),oe.destination.trim(),oe.originPlace,oe.destinationPlace);s(Pe=>({...Pe,[$e]:(Pe[$e]??[]).map(Y=>Y.id===oe.id?{...Y,distanceKm:me.options[0].distanceKm.toFixed(2),routeDescription:me.description,routeOptions:me.options,selectedRouteIndex:0,manualDistance:!1}:Y)}))}catch(me){const Pe=me instanceof Error?me.message:"";S(Pe==="Failed to fetch"?"Não foi possível acessar o serviço de mapas. Confira sua conexão e tente novamente.":Pe||"Não foi possível calcular a rota. Confira os locais e tente novamente.")}finally{q(null)}}const U=Ne.find(oe=>oe.originPlace&&oe.destinationPlace&&!oe.routeOptions&&!oe.manualDistance),he=U?`${l}:${U.id}:${(Ze=U.originPlace)==null?void 0:Ze.coordinates.longitude},${(pt=U.originPlace)==null?void 0:pt.coordinates.latitude}:${(ht=U.destinationPlace)==null?void 0:ht.coordinates.longitude},${(Ot=U.destinationPlace)==null?void 0:Ot.coordinates.latitude}`:null,nt=x.useRef(null);return x.useEffect(()=>{!U||!he||y!==null||nt.current===he||(nt.current=he,ke(U))},[he,y,U]),e.jsxs(hE,{children:[e.jsx(_s,{children:e.jsxs("div",{children:[e.jsxs("span",{children:[e.jsx(Q1,{size:14})," Despesas e transporte"]}),e.jsx("h1",{children:"Percursos do dia."}),e.jsx("p",{children:"Calcule automaticamente os quilômetros entre paradas e acompanhe o gasto com combustível."})]})}),e.jsxs(vy,{children:[e.jsxs(Fe,{children:[e.jsx(Je,{size:19})," Registro de deslocamentos"]}),e.jsx(rv,{children:"Escolha uma sugestão para a origem e o destino: as opções de rota serão calculadas automaticamente. Você também pode calcular novamente ou corrigir a distância manualmente. Os registros ficam salvos neste navegador por data."}),g&&e.jsx("p",{role:"status",style:{margin:"-8px 0 14px",color:"var(--error)",fontSize:12},children:g}),b&&e.jsx("p",{role:"alert",style:{margin:"-8px 0 14px",color:"var(--error)",fontSize:12},children:b}),e.jsxs(mE,{children:[e.jsxs(X,{htmlFor:"daily-route-date",children:["Data do percurso",e.jsx("input",{id:"daily-route-date",type:"date",value:l,onChange:oe=>c(oe.target.value)})]}),e.jsxs(X,{htmlFor:"daily-route-vehicle",children:["Veículo deste percurso",e.jsxs("select",{id:"daily-route-vehicle",value:m==="saved"&&!fe?"calculator":m,onChange:oe=>f(oe.target.value),children:[fe&&e.jsxs("option",{value:"saved",children:["Veículo do dia salvo: ",fe.vehicle_model]}),e.jsxs("option",{value:"calculator",children:["Veículo da calculadora: ",u.model]}),pE.filter(oe=>Xl[oe.value].model!==u.model).map(oe=>e.jsx("option",{value:oe.value,children:oe.label},oe.value))]})]}),e.jsxs(xE,{children:[e.jsxs("strong",{children:[e.jsx($c,{size:14,style:{verticalAlign:"text-bottom"}})," ",ge.model]}),e.jsxs("span",{children:["Combustível padrão: ",tv[ge.fuelType],". O veículo escolhido será salvo no histórico."]}),(!ge.prices.gasolina||!ge.prices.alcool||!ge.consumptions.gasolina||!ge.consumptions.alcool)&&e.jsx("a",{href:"/fuel-calculator",children:"Configure preços e consumos dos combustíveis"})]})]}),e.jsxs(gE,{"aria-live":"polite",children:[e.jsxs(Cp,{children:[e.jsx("small",{children:"Distância total"}),e.jsxs("strong",{children:[Zl.format(K.distance)," km"]})]}),e.jsxs(Cp,{children:[e.jsx("small",{children:"Combustível estimado"}),e.jsx("strong",{children:je===null?"—":`${Zl.format(je)} L`})]}),e.jsxs(Cp,{children:[e.jsx("small",{children:"Gasto estimado"}),e.jsx("strong",{children:ue===null?"—":Sp.format(ue)})]})]}),Ne.length===0?e.jsx(nv,{children:"Nenhum trecho registrado para esta data. Adicione a primeira parada para começar."}):e.jsx(vE,{children:Ne.map((oe,$e)=>{const me=tc(oe.distanceKm),Pe=oe.fuelType??ge.fuelType,Y=ge.consumptions[Pe],Be=ge.prices[Pe],_t=Y&&Be&&me?me/Y*Be:null;return e.jsxs(yE,{children:[e.jsx(_E,{"aria-label":`Trecho ${$e+1}`,children:$e+1}),e.jsx(sv,{id:`route-origin-${oe.id}`,label:"Origem",value:oe.origin,placeholder:"Ex.: Mata Escura, Salvador - BA",selectedPlace:oe.originPlace,onChange:ot=>k(oe.id,"origin",ot),onSelect:ot=>se(oe.id,"origin",ot)}),e.jsx(sv,{id:`route-destination-${oe.id}`,label:"Destino",value:oe.destination,placeholder:"Ex.: Shopping Salvador, Salvador - BA",selectedPlace:oe.destinationPlace,onChange:ot=>k(oe.id,"destination",ot),onSelect:ot=>se(oe.id,"destination",ot)}),e.jsxs(X,{htmlFor:`route-fuel-${oe.id}`,children:["Combustível usado",e.jsxs("select",{id:`route-fuel-${oe.id}`,value:Pe,onChange:ot=>k(oe.id,"fuelType",ot.target.value),children:[e.jsx("option",{value:"gasolina",children:"Gasolina"}),e.jsx("option",{value:"alcool",children:"Álcool"})]})]}),e.jsxs(X,{htmlFor:`route-distance-${oe.id}`,children:["Distância (km)",e.jsx("input",{id:`route-distance-${oe.id}`,type:"number",min:"0",step:"any",value:oe.distanceKm,onChange:ot=>k(oe.id,"distanceKm",ot.target.value),placeholder:"Ex.: 12,5"})]}),e.jsxs(kE,{children:["Gasto do trecho",e.jsx("strong",{children:_t===null?"—":Sp.format(_t)})]}),e.jsxs(SE,{type:"button",disabled:y!==null,onClick:()=>{ke(oe)},children:[y===oe.id?e.jsx(rt,{size:15}):e.jsx(Dk,{size:15}),y===oe.id?"Calculando...":"Calcular opções de rota"]}),e.jsx(CE,{type:"button","aria-label":`Remover trecho ${$e+1}`,title:"Remover trecho",onClick:()=>D(oe.id),children:e.jsx(Rr,{})}),oe.routeDescription&&e.jsxs(EE,{children:["Rota calculada: ",oe.routeDescription]}),oe.routeOptions&&oe.routeOptions.length>0&&e.jsxs($E,{children:[e.jsx("legend",{children:oe.routeOptions.length>1?"Escolha uma opção de rota":"Rota encontrada"}),oe.routeOptions.map((ot,zt)=>e.jsxs(RE,{$selected:(oe.selectedRouteIndex??0)===zt,children:[e.jsx("input",{type:"radio",name:`route-option-${oe.id}`,checked:(oe.selectedRouteIndex??0)===zt,onChange:()=>ie(oe.id,zt)}),e.jsxs("span",{children:[e.jsxs("strong",{children:["Opção ",zt+1," · ",Zl.format(ot.distanceKm)," km"]}),e.jsxs("span",{children:["Duração estimada: ",VE(ot.durationSeconds)]})]})]},`${ot.distanceKm}-${ot.durationSeconds}`))]})]},oe.id)})}),e.jsxs(zE,{children:["Cálculo de rotas de carro via Photon e OSRM, com dados do ",e.jsx("a",{href:"https://www.openstreetmap.org/copyright",target:"_blank",rel:"noreferrer",children:"OpenStreetMap"}),". Os locais informados são enviados a esses serviços para buscar a rota."]}),e.jsxs(PE,{children:[e.jsxs(pe,{type:"button",onClick:z,children:[e.jsx(yt,{size:16})," Adicionar trecho"]}),e.jsxs(pe,{type:"button",$variant:"primary",onClick:()=>{de()},disabled:ce||Ne.length===0,children:[ce?e.jsx(rt,{size:16}):e.jsx(ws,{size:16}),ce?"Salvando...":"Salvar dia no histórico"]})]})]}),e.jsxs(NE,{children:[e.jsxs(Fe,{children:[e.jsx(rn,{size:19})," Histórico de percursos"]}),e.jsx(rv,{children:"Compare os quilômetros e o gasto por dia. Salvar novamente uma data atualiza o registro daquele dia."}),M&&e.jsx("p",{role:"status",style:{margin:0,color:"var(--primary-strong)",fontSize:12},children:M}),_&&e.jsx("p",{role:"alert",style:{margin:0,color:"var(--error)",fontSize:12},children:_}),J&&V.length===0?e.jsx(cf,{role:"status",children:"Carregando histórico do banco de dados..."}):V.length===0?e.jsx(nv,{children:"Nenhum dia salvo ainda. Registre um percurso e escolha “Salvar dia no histórico”."}):e.jsx(AE,{children:V.map(oe=>e.jsxs(DE,{type:"button",onClick:()=>_e(oe),children:[e.jsxs("span",{children:[e.jsx("strong",{children:Ep(oe.route_date)}),e.jsxs("small",{children:[oe.vehicle_model," · ",oe.legs.length," ",oe.legs.length===1?"trecho":"trechos"," · ",tv[oe.selected_fuel]]})]}),e.jsxs("span",{children:[e.jsxs("strong",{children:[Zl.format(oe.total_distance_km)," km"]}),e.jsx("small",{children:"Distância total"})]}),e.jsxs("span",{children:[e.jsx("strong",{children:oe.total_fuel_cost===null?"Não calculado":Sp.format(oe.total_fuel_cost)}),e.jsx("small",{children:"Gasto estimado"})]}),e.jsx("span",{"aria-hidden":"true",children:"Abrir"})]},oe.route_date))}),O&&e.jsx(ME,{children:e.jsx(pe,{type:"button",onClick:()=>{ye(j+1,!0)},disabled:J,children:J?"Carregando...":"Carregar mais dias"})})]})]})}const GE=h.button`
  position: relative;
  flex: 0 0 auto;
  padding: 3px 9px;
  border: 0;
  border-radius: 999px;
  color: ${({$color:t})=>t};
  background: color-mix(in srgb, ${({$color:t})=>t} 14%, transparent);
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
    outline: 2px solid ${({$color:t})=>t};
    outline-offset: 2px;
  }
`;function gs({label:t,color:a,details:s}){const l=s.filter(Boolean).join(`
`);return e.jsx(GE,{type:"button",$color:a,"data-tooltip":l,title:l,"aria-label":`${t}. Critérios da análise: ${l.replace(/\n/g,". ")}`,children:t})}const KE=new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL",maximumFractionDigits:0}),QE=new Intl.NumberFormat("pt-BR",{notation:"compact",maximumFractionDigits:1}),YE=new Intl.NumberFormat("pt-BR",{minimumFractionDigits:1,maximumFractionDigits:1});function dt(t){return KE.format(t)}function _i(t){const a=t.replace(/\D/g,"").replace(/^0+/,"").slice(0,13);if(!a)return"";const s=a.padStart(3,"0");return`R$ ${s.slice(0,-2).replace(/\B(?=(\d{3})+(?!\d))/g,".")},${s.slice(-2)}`}function Ha(t){return _i(String(Math.round(t*100)))}function Va(t){const a=t.replace(/\D/g,"");return a?Number(a)/100:0}function yc(t){return`R$ ${QE.format(t)}`}function at(t,a=!1){return`${a&&t>0?"+":""}${YE.format(t)}%`}const ov={carteira:"#0ea5e9",cdi:"#2563eb",poupanca:"#14b8a6",ibovespa:"#16a34a",sp500:"#8b5cf6",dolar:"#d97706",ouro:"#eab308",bitcoin:"#f97316"};function $p(t){if(ov[t])return ov[t];let a=0;for(const s of t)a=(a*31+s.charCodeAt(0))%360;return`hsl(${a} 60% 50%)`}const Er={otimo:{label:"Ótimo",color:"var(--success)"},bom:{label:"Bom",color:"var(--primary-strong)"},neutro:{label:"Neutro",color:"var(--muted)"},atencao:{label:"Atenção",color:"var(--warning)"},evitar:{label:"Evitar",color:"var(--error)"}};function Uf(t,a,s){if(!(t!=="fiis"&&t!=="acoes_br"))return!s||s==="short_term_market"?{label:"Análise limitada",color:"var(--muted)"}:a==="otimo"||a==="bom"?{label:t==="fiis"&&s==="fii_fundamentals"?"FII com indicadores favoráveis":t==="acoes_br"&&s==="equity_market_history"?"Histórico de mercado favorável":"Cenário favorável",color:"var(--success)"}:a==="neutro"?{label:"Neutro",color:"var(--muted)"}:a==="evitar"?{label:"Evitar",color:"var(--error)"}:{label:"Merece atenção",color:"var(--warning)"}}const JE=h.div`
  display: grid;
  gap: 22px;
`,XE=h.div`
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) repeat(3, minmax(0, 1fr));
  gap: 14px;
  @media (max-width: 1100px) { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  @media (max-width: 520px) { grid-template-columns: 1fr; }
`,rc=h(Ue)`
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
    background: ${({$tone:t,$negative:a})=>t==="income"?"var(--success)":t==="result"?a?"var(--error)":"var(--success)":"var(--border)"};
    content: '';
  }
  border-color: ${({$tone:t,$negative:a})=>t==="income"?"color-mix(in srgb, var(--success) 32%, var(--border))":t==="result"?`color-mix(in srgb, ${a?"var(--error)":"var(--success)"} 32%, var(--border))`:"var(--border)"};
  background: ${({$tone:t,$negative:a})=>t==="income"?"color-mix(in srgb, var(--success) 8%, var(--surface))":t==="result"?`color-mix(in srgb, ${a?"var(--error)":"var(--success)"} 6%, var(--surface))`:"var(--surface)"};
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
    color: ${({$tone:t,$negative:a})=>t==="income"?"var(--success)":t==="result"?a?"var(--error)":"var(--success)":"var(--text)"};
    font-size: clamp(18px, 2vw, 25px);
    font-variant-numeric: tabular-nums;
    letter-spacing: -.04em;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`,mo=h.span`
  display: block;
  margin-top: 3px;
  color: var(--muted);
  font-size: 11px;
  line-height: 1.45;
`,ZE=h.div`
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
`,lv=h.div`
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
`,e$=h.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  @media (max-width: 520px) { justify-content: flex-start; }
`,as=h.p`
  margin: 6px 0 0;
  color: var(--muted);
  font-size: 12px;
  line-height: 1.5;
`,Rp=h.span`
  flex: 0 0 auto;
  padding: 6px 10px;
  border: 1px solid var(--border);
  border-radius: 999px;
  color: var(--muted);
  background: var(--surface-raised);
  font-size: 11px;
  font-weight: 750;
`,t$=h.div`
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(320px, .8fr);
  gap: 16px;
  align-items: start;
  @media (max-width: 1040px) { grid-template-columns: 1fr; }
`,r$=h(Ue)`
  min-width: 0;
  padding: 21px;
`,n$=h.form`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(155px, 1fr));
  align-items: end;
  gap: 10px;
  padding: 14px;
  margin-bottom: 18px;
  border: 1px solid var(--border);
  border-radius: 15px;
  background: var(--surface-raised);
  ${X} { margin: 0; }
  @media (max-width: 700px) { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  @media (max-width: 480px) { grid-template-columns: 1fr; }
`,a$=h.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  @media (max-width: 1100px) { grid-column: 1 / -1; justify-content: flex-end; }
  @media (max-width: 480px) {
    justify-content: stretch;
    button { flex: 1; }
  }
`,i$=h(Ue)`
  min-width: 0;
  padding: 21px;
`,s$=h.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 10px;
  padding: 13px;
  margin: 14px 0 17px;
  border: 1px solid var(--border);
  border-radius: 13px;
  background: var(--surface-raised);
  ${X} { margin: 0; }
  @media (max-width: 520px) { grid-template-columns: 1fr; }
`,o$=h.div`
  display: grid;
  gap: 12px;
`,zp=h.div`
  display: grid;
  gap: 12px;
  padding: 14px;
  border: 1px solid var(--border);
  border-radius: 13px;
  background: var(--surface-raised);
`,cv=h.div`
  max-width: 100%;
  overflow: auto;
  border: 1px solid var(--border);
  border-radius: 10px;
`,dv=h.table`
  width: 100%;
  min-width: 680px;
  border-collapse: collapse;
  font-size: 11px;
  th, td { padding: 9px 10px; border-bottom: 1px solid var(--border); text-align: right; white-space: nowrap; }
  th { position: sticky; top: 0; color: var(--muted); background: var(--surface); font-weight: 750; }
  th:first-child, td:first-child { text-align: left; }
  tr:last-child td { border-bottom: 0; }
`,uv=h.p`
  margin: 0;
  color: var(--muted);
  font-size: 11px;
  line-height: 1.5;
`,l$=h.article`
  display: grid;
  gap: 14px;
  padding: 17px;
  border: 1px solid var(--border);
  border-radius: 17px;
  background:
    linear-gradient(180deg, color-mix(in srgb, var(--surface-raised) 70%, var(--surface)), var(--surface));
  box-shadow: 0 6px 18px var(--shadow);
  opacity: ${({$inactive:t})=>t?.62:1};
  transition: border-color .15s ease, transform .15s ease, box-shadow .15s ease;
  &:hover {
    border-color: color-mix(in srgb, var(--primary) 40%, var(--border));
    transform: translateY(-1px);
    box-shadow: 0 10px 24px var(--shadow);
  }
`,c$=h.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 14px;
  @media (max-width: 440px) { gap: 8px; }
`,d$=h.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  min-width: 0;
`,u$=h.div`
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
`,p$=h.div`
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
`,f$=h.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 9px;
`,jn=h.span`
  display: inline-flex;
  align-items: center;
  padding: 4px 8px;
  border: 1px solid var(--border);
  border-radius: 999px;
  color: var(--muted);
  background: var(--surface);
  font-size: 10px;
  font-weight: 700;
`,h$=h(jn)`
  border-color: ${({$active:t})=>t?"color-mix(in srgb, var(--success) 35%, var(--border))":"color-mix(in srgb, var(--error) 30%, var(--border))"};
  color: ${({$active:t})=>t?"var(--success)":"var(--error)"};
  background: ${({$active:t})=>t?"var(--success-soft)":"var(--error-soft)"};
`,m$=h.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 9px;
  @media (max-width: 820px) { grid-template-columns: repeat(2, minmax(0, 1fr)); }
`,nc=h.div`
  min-width: 0;
  padding: 12px;
  border: 1px solid ${({$accent:t})=>t==="result"?"color-mix(in srgb, var(--success) 35%, var(--border))":t==="negative"?"color-mix(in srgb, var(--error) 35%, var(--border))":t==="income"?"color-mix(in srgb, var(--primary) 35%, var(--border))":"var(--border)"};
  border-radius: 12px;
  background: ${({$accent:t})=>t==="result"?"color-mix(in srgb, var(--success) 8%, var(--surface))":t==="negative"?"color-mix(in srgb, var(--error) 8%, var(--surface))":t==="income"?"color-mix(in srgb, var(--primary) 8%, var(--surface))":"var(--surface)"};
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
    color: ${({$accent:t})=>t==="result"?"var(--success)":t==="negative"?"var(--error)":t==="income"?"var(--primary-strong)":"var(--text)"};
    font-size: clamp(13px, 1.25vw, 15px);
    font-variant-numeric: tabular-nums;
    letter-spacing: -.02em;
  }
`,x$=h.div`
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
`,g$=h.div`
  display: flex;
  gap: 6px;
  margin-left: auto;
`,Pp=h.button`
  display: grid;
  width: 34px;
  height: 34px;
  place-items: center;
  border: 1px solid ${({$active:t})=>t?"color-mix(in srgb, var(--success) 35%, var(--border))":"color-mix(in srgb, var(--error) 30%, var(--border))"};
  border-radius: 9px;
  color: ${({$active:t})=>t?"var(--success)":"var(--error)"};
  background: ${({$active:t})=>t?"var(--success-soft)":"var(--error-soft)"};
  cursor: pointer;
  &:hover { border-color: ${({$active:t})=>t?"var(--success)":"var(--error)"}; }
  &:disabled { opacity: .55; cursor: not-allowed; }
  &[data-danger='true']:hover { color: var(--error); background: var(--error-soft); }
  svg { width: 15px; height: 15px; }
`,v$=h.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 14px;
  ${X}:last-of-type { grid-column: 1 / -1; }
  @media (max-width: 620px) { grid-template-columns: 1fr; ${X} { grid-column: auto; } }
`,y$=h.div`
  grid-column: 1 / -1;
  display: flex;
  justify-content: flex-end;
  gap: 9px;
`,j$=h.p`
  grid-column: 1 / -1;
  margin: 0 0 12px;
  color: var(--muted);
  font-size: 12px;
`,b$=h.p`
  grid-column: 1 / -1;
  margin: -5px 0 12px;
  color: ${({$error:t})=>t?"var(--error)":"var(--muted)"};
  font-size: 12px;
`,w$=h.button`
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
`,_$=h.div`
  display: grid;
  gap: 12px;
`,k$=h.div`
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
`,S$=h.div`
  display: grid;
  gap: 9px;
  max-height: 52vh;
  overflow-y: auto;
  padding-right: 3px;
`,C$=h.article`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
  gap: 14px;
  padding: 13px 14px;
  border: 1px solid var(--border);
  border-radius: 13px;
  background: var(--surface-raised);
  @media (max-width: 520px) { grid-template-columns: 1fr; gap: 9px; }
`,E$=h.div`
  min-width: 0;
  h3 { margin: 0; color: var(--text); font-size: 14px; }
  p { margin: 4px 0 0; color: var(--muted); font-size: 12px; }
  small { display: block; margin-top: 7px; color: var(--muted); font-size: 11px; }
`,$$=h.div`
  text-align: right;
  strong { display: block; color: var(--primary-strong); font-size: 15px; font-variant-numeric: tabular-nums; white-space: nowrap; }
  small { display: block; margin-top: 3px; color: var(--muted); font-size: 10px; }
  @media (max-width: 520px) { text-align: left; }
`,R$=h.span`
  display: block;
  height: 8px;
  overflow: hidden;
  border-radius: 999px;
  background: var(--surface-raised);
  > span { display: block; height: 100%; border-radius: inherit; background: var(--primary); }
`,z$=h.div`
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
`,Dc=[{id:"fii",label:"FII",default_frequency:"mensal",auto_quote:!0,quote_market:"b3",uses_fii_segment:!0},{id:"fiagro",label:"Fiagro",default_frequency:"mensal",auto_quote:!0,quote_market:"b3",uses_fii_segment:!0},{id:"acao",label:"Ação",default_frequency:"trimestral",auto_quote:!0,quote_market:"b3",uses_fii_segment:!1},{id:"bdr",label:"BDR",default_frequency:"trimestral",auto_quote:!0,quote_market:"b3",uses_fii_segment:!1},{id:"etf",label:"ETF",default_frequency:"trimestral",auto_quote:!0,quote_market:"b3",uses_fii_segment:!1},{id:"fundo",label:"Fundo",default_frequency:"mensal",auto_quote:!1,quote_market:null,uses_fii_segment:!1},{id:"tesouro",label:"Tesouro",default_frequency:"semestral",auto_quote:!1,quote_market:null,uses_fii_segment:!1},{id:"cdb",label:"CDB",default_frequency:"mensal",auto_quote:!1,quote_market:null,uses_fii_segment:!1},{id:"lci_lca",label:"LCI/LCA",default_frequency:"mensal",auto_quote:!1,quote_market:null,uses_fii_segment:!1},{id:"debenture",label:"Debênture",default_frequency:"semestral",auto_quote:!1,quote_market:null,uses_fii_segment:!1},{id:"previdencia",label:"Previdência",default_frequency:"mensal",auto_quote:!1,quote_market:null,uses_fii_segment:!1},{id:"cripto",label:"Cripto",default_frequency:"mensal",auto_quote:!0,quote_market:"crypto",uses_fii_segment:!1},{id:"acao_us",label:"Ação EUA",default_frequency:"trimestral",auto_quote:!0,quote_market:"us",uses_fii_segment:!1},{id:"renda_fixa",label:"Renda fixa",default_frequency:"mensal",auto_quote:!1,quote_market:null,uses_fii_segment:!1},{id:"outro",label:"Outro",default_frequency:"mensal",auto_quote:!1,quote_market:null,uses_fii_segment:!1}],xo={papel:"Papel",tijolo:"Tijolo",hibrido:"Híbrido"},Np={mensal:"Mensal",trimestral:"Trimestral",semestral:"Semestral",anual:"Anual"},by=["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],P$=new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}),pv=new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL",minimumFractionDigits:2,maximumFractionDigits:4});function kr(t){return P$.format(Number(t)||0)}function N$(t){switch(t.recommendation){case"vender":return{label:"Avaliar venda · 100%",color:"var(--warning)"};case"reduzir":return{label:"Avaliar redução · 50%",color:"var(--warning)"};case"manter":return{label:"Sinal: manter",color:"var(--success)"};case"sem_dados":return{label:"Análise indisponível",color:"var(--muted)"}}}const wy="dividends-price-refresh-day",fv="dividend-values-hidden";function hv(){const t=new Date;return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}`}function _y(){return new Date().toISOString().slice(0,10)}function A$(){try{return localStorage.getItem(wy)!==_y()}catch{return!0}}function D$(){try{localStorage.setItem(wy,_y())}catch{}}function M$(t){if(!t)return null;const a=new Date(t);return Number.isNaN(a.getTime())?null:a.toLocaleString("pt-BR",{dateStyle:"short",timeStyle:"short"})}function Eo(t){const[a,s,l]=t.slice(0,10).split("-").map(Number),c=new Date(a,s-1,l);return Number.isNaN(c.getTime())?t:c.toLocaleDateString("pt-BR",{dateStyle:"long"})}function T$(t){return new Intl.NumberFormat("pt-BR",{maximumFractionDigits:4}).format(Number(t)||0)}function go(t){var l;const[a,s]=t.split("-");return`${((l=by[Number(s)-1])==null?void 0:l.slice(0,3))??s}/${a}`}function mv(t,a){const l=(a?t.find(c=>c.id===a):t[0])??Dc.find(c=>c.id===a)??Dc[0];return{ticker:"",name:"",asset_type:l.id,fii_segment:"",quantity:"",applied_amount:"",cdi_percent:"",investment_date:"",income_tax_exempt:!1,average_price:"",current_price:"",dividend_per_share:"",frequency:l.default_frequency,reference_month:"1",payment_day:"15",is_active:!0,notes:""}}function ky(t){var a;return{ticker:t.ticker,name:t.name??"",asset_type:t.asset_type,fii_segment:t.fii_segment??"",quantity:String(Number(t.quantity)),applied_amount:t.applied_amount==null?"":Ha(Number(t.applied_amount)),cdi_percent:t.cdi_percent==null?"":String(Number(t.cdi_percent)),investment_date:((a=t.investment_date)==null?void 0:a.slice(0,10))??"",income_tax_exempt:!!t.income_tax_exempt,average_price:Number(t.average_price)?Ha(Number(t.average_price)):"",current_price:t.current_price==null?"":Ha(Number(t.current_price)),dividend_per_share:Number(t.dividend_per_share)?Ha(Number(t.dividend_per_share)):"",frequency:t.frequency,reference_month:String(t.reference_month),payment_day:String(t.payment_day),is_active:t.is_active,notes:t.notes??""}}function F$(t,a=null){var g,w,b;if(t.asset_type==="renda_fixa"){const S=Va(t.applied_amount),_=Number(t.cdi_percent.replace(",",".")),R=t.investment_date,M=R.split("-").map(Number),N=new Date(Date.UTC(M[0],M[1]-1,M[2]));if(!Number.isFinite(S)||S<=0)throw new Error("Informe um valor aplicado maior que zero.");if(!Number.isFinite(_)||_<0)throw new Error("O percentual do CDI não pode ser negativo.");if(!/^\d{4}-\d{2}-\d{2}$/.test(R)||Number.isNaN(N.getTime())||N.getUTCFullYear()!==M[0]||N.getUTCMonth()!==M[1]-1||N.getUTCDate()!==M[2])throw new Error("Informe uma data de investimento válida.");const V=new Intl.DateTimeFormat("en-US",{timeZone:"America/Sao_Paulo",year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(new Date),$=`${(g=V.find(A=>A.type==="year"))==null?void 0:g.value}-${(w=V.find(A=>A.type==="month"))==null?void 0:w.value}-${(b=V.find(A=>A.type==="day"))==null?void 0:b.value}`;if(R>$)throw new Error("A data do investimento não pode estar no futuro.");if(!t.cdi_percent.trim())throw new Error("Informe o percentual do CDI.");const j=Number(t.payment_day);if(!Number.isInteger(j)||j<1||j>31)throw new Error("O dia do pagamento deve ser de 1 a 31.");return{ticker:t.ticker.trim().toUpperCase(),name:t.name.trim()||null,asset_type:"renda_fixa",applied_amount:S,cdi_percent:_,investment_date:R,income_tax_exempt:t.income_tax_exempt,payment_day:j,is_active:t.is_active,notes:t.notes.trim()||null}}const s=Number(t.quantity.replace(",","."));if(!Number.isFinite(s)||s<=0)throw new Error("Informe uma quantidade de cotas maior que zero.");const l=Va(t.dividend_per_share);if(!Number.isFinite(l)||l<0)throw new Error("O provento por cota não pode ser negativo.");const c=Number(t.payment_day),u=Va(t.average_price);if(!Number.isFinite(u)||u<0)throw new Error("O preço médio não pode ser negativo.");const m=t.current_price?Va(t.current_price):null;if(m!==null&&(!Number.isFinite(m)||m<0))throw new Error("O preço atual não pode ser negativo.");if(!Number.isInteger(c)||c<1||c>31)throw new Error("O dia de pagamento deve ser de 1 a 31.");const f=!!(a!=null&&a.auto_price)&&t.current_price===ky(a).current_price;return{ticker:t.ticker.trim().toUpperCase(),name:t.name.trim()||null,asset_type:t.asset_type,fii_segment:t.fii_segment||null,quantity:s,average_price:u,...f?{}:{current_price:m},dividend_per_share:l,frequency:t.frequency,reference_month:Number(t.reference_month),payment_day:c,is_active:t.is_active,notes:t.notes.trim()||null}}function bn(t,a){var s,l,c,u;return $t.isAxiosError(t)?((s=t.response)==null?void 0:s.status)===409?((l=t.response.data)==null?void 0:l.error)||"Você já cadastrou este ativo.":((u=(c=t.response)==null?void 0:c.data)==null?void 0:u.error)||a:t instanceof Error?t.message:a}function L$(t){const[a,s]=t.split("-").map(Number);return new Date(Date.UTC(a,s-1,1)).toLocaleDateString("pt-BR",{month:"short",year:"numeric",timeZone:"UTC"})}function O$({holdingId:t}){const[a,s]=x.useState(!1),[l,c]=x.useState(),[u,m]=x.useState(!1),[f,g]=x.useState(""),[w,b]=x.useState(0);if(x.useEffect(()=>{if(!a)return;let _=!0;return m(!0),g(""),x2(t).then(R=>{_&&c(R)}).catch(R=>{_&&g(bn(R,"Não foi possível carregar o histórico do investimento."))}).finally(()=>{_&&m(!1)}),()=>{_=!1}},[a,t,w]),!a)return e.jsxs(pe,{type:"button",onClick:()=>s(!0),children:[e.jsx(us,{size:15})," Ver histórico de rendimento"]});if(u)return e.jsx(zp,{role:"status",children:"Calculando o histórico com as taxas diárias do CDI..."});if(f)return e.jsxs("div",{style:{display:"grid",gap:8},children:[e.jsx(zp,{role:"alert",style:{color:"var(--error)"},children:f}),e.jsx(pe,{type:"button",onClick:()=>s(!1),children:"Fechar histórico"}),e.jsx(pe,{type:"button",onClick:()=>{g(""),b(_=>_+1)},children:"Tentar novamente"})]});if(!l)return null;const S=l.current;return e.jsxs(zp,{children:[e.jsxs("div",{children:[e.jsxs("strong",{children:["Acumulado até ",Eo(l.as_of_date),": ",kr(S.net_balance)," líquidos"]}),e.jsxs(uv,{children:["Saldo bruto ",kr(S.gross_balance)," · ganho ",kr(S.accumulated_gain)," · IR estimado no resgate ",kr(S.estimated_tax)," · ","CDI do Banco Central até ",Eo(l.cdi_reference_date)," × ",l.cdi_percent,"%."]})]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Resumo por ano"}),e.jsx(cv,{children:e.jsxs(dv,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Ano"}),e.jsx("th",{children:"Rendimento no ano"}),e.jsx("th",{children:"Acumulado bruto"}),e.jsx("th",{children:"IR no resgate*"}),e.jsx("th",{children:"Saldo líquido*"})]})}),e.jsx("tbody",{children:l.years.map(_=>e.jsxs("tr",{children:[e.jsx("td",{children:_.year}),e.jsx("td",{children:kr(_.gain_in_year)}),e.jsx("td",{children:kr(_.end_balance)}),e.jsx("td",{children:l.income_tax_exempt?"Isento":`${(_.income_tax_rate*100).toLocaleString("pt-BR")}% · ${kr(_.estimated_tax)}`}),e.jsx("td",{children:kr(_.net_balance)})]},_.year))})]})})]}),e.jsxs("details",{children:[e.jsx("summary",{style:{cursor:"pointer",color:"var(--primary-strong)",fontSize:12,fontWeight:750},children:"Ver evolução mês a mês"}),e.jsx(cv,{style:{marginTop:8,maxHeight:340},children:e.jsxs(dv,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Mês"}),e.jsx("th",{children:"Saldo bruto"}),e.jsx("th",{children:"Ganho acumulado"}),e.jsx("th",{children:"IR no resgate*"}),e.jsx("th",{children:"Saldo líquido*"})]})}),e.jsx("tbody",{children:l.months.map(_=>e.jsxs("tr",{children:[e.jsx("td",{children:L$(_.month)}),e.jsx("td",{children:kr(_.gross_balance)}),e.jsx("td",{children:kr(_.accumulated_gain)}),e.jsx("td",{children:l.income_tax_exempt?"Isento":`${(_.income_tax_rate*100).toLocaleString("pt-BR")}% · ${kr(_.estimated_tax)}`}),e.jsx("td",{children:kr(_.net_balance)})]},_.month))})]})})]}),e.jsxs(uv,{children:["* IR estimado sobre o ganho acumulado caso o resgate ocorresse naquela data: 22,5% até 180 dias, 20% de 181 a 360, 17,5% de 361 a 720 e 15% após 720 dias. Não inclui IOF, taxas, carência nem regras específicas do emissor; valores históricos não garantem rentabilidade futura. Fonte: ",l.cdi_source,"."]}),e.jsx(pe,{type:"button",onClick:()=>s(!1),children:"Fechar histórico"})]})}function xv({assetType:t}){const a=t==="renda_fixa",[s,l]=x.useState(Dc),[c,u]=x.useState(),[m,f]=x.useState(()=>new Map),[g,w]=x.useState(""),[b,S]=x.useState(!1),[_,R]=x.useState(),[M,N]=x.useState(""),[V,$]=x.useState(!1),[j,A]=x.useState(),[O,ae]=x.useState(null),[J,I]=x.useState(),[ce,C]=x.useState(hv()),[y,q]=x.useState(12),[F,fe]=x.useState(""),[ge,Ne]=x.useState(""),[K,je]=x.useState(a),[ue,ye]=x.useState(""),[W,z]=x.useState(()=>({...t?{asset_type:t}:{},page:1,limit:20})),[k,se]=x.useState({asset_type:t??"",fii_segment:"",active:"",search:""}),[ie,D]=x.useState(()=>mv(Dc)),[de,_e]=x.useState(!1),[ke,U]=x.useState(""),[he,nt]=x.useState(!1),[Ze,pt]=x.useState(null),[ht,Ot]=x.useState(!1),oe=x.useRef(0),$e=x.useRef(null),me=x.useRef(""),Pe=x.useRef({current_price:"",dividend_per_share:""}),[Y,Be]=x.useState(null),[_t,ot]=x.useState(()=>new Set),[zt,xr]=x.useState(!1),[dr,gr]=x.useState(null),[zr,on]=x.useState(!0),[Nt,Pr]=x.useState(()=>{try{return localStorage.getItem(fv)==="true"}catch{return!1}});x.useEffect(()=>{try{localStorage.setItem(fv,String(Nt))}catch{}},[Nt]);const[Tr,ta]=x.useState(!0),[Sn,ja]=x.useState(!1),[nr,kt]=x.useState(""),[Gt,ln]=x.useState(""),[te,Ke]=x.useState(""),[St,jt]=x.useState(0),[Vr,xt]=x.useState(!1),cn=x.useCallback(()=>{oe.current+=1,$e.current&&clearTimeout($e.current),$e.current=null,_e(!1)},[]),Ln=x.useCallback(()=>{cn(),Ot(!1)},[cn]),On=x.useMemo(()=>new Map(s.map(E=>[E.id,E])),[s]),we=On.get(ie.asset_type)??s[0],ra=!!(we!=null&&we.uses_fii_segment),qe=ie.frequency!=="mensal",ft=E=>Nt?"••••••":kr(E);x.useEffect(()=>()=>{$e.current&&clearTimeout($e.current),oe.current+=1},[]);function Ka(){Pr(E=>!E)}x.useEffect(()=>{let E=!0;return a2().then(le=>{!E||!le.length||l(le)}).catch(()=>{}),()=>{E=!1}},[]),x.useEffect(()=>{if(!a)return;let E=!0;return je(!0),ye(""),m2().then(le=>{E&&(fe(le.rate.toString()),Ne(le.reference_date))}).catch(le=>{E&&ye(bn(le,"Não foi possível carregar o CDI do Banco Central. Informe a taxa manualmente."))}).finally(()=>{E&&je(!1)}),()=>{E=!1}},[a]),x.useEffect(()=>{if(a)return;let E=!0;return f(new Map),w(""),S(!1),U1("moderado").then(le=>{if(!E)return;const De=new Map;[...le.assets,...le.portfolio].forEach(He=>{He.ticker&&He.class_id&&De.set(`${He.class_id}:${He.ticker.toUpperCase()}`,He)}),f(De),S(!0)}).catch(le=>{E&&(w(bn(le,"Não foi possível carregar as etiquetas de análise de mercado.")),S(!0))}),()=>{E=!1}},[a,St]),x.useEffect(()=>{if(a)return;let E=!0;const le={perfil:"moderado",anos:5,prazo_meses:12,cdi_percent:100,lci_percent:90};return R(void 0),N(""),$(!1),V1(le).then(De=>{E&&R(De)}).catch(De=>{E&&N(bn(De,"Não foi possível comparar os FIIs com a renda fixa."))}).finally(()=>{E&&$(!0)}),()=>{E=!1}},[a,St]),x.useEffect(()=>{let E=!0;ta(!0);const le=Number(F.replace(",",".")),De=!a||F.trim()!==""&&Number.isFinite(le)&&le>=0;return kt(ue||(K||De?"":"Informe uma taxa CDI anual válida para carregar a projeção.")),Promise.all([ql(W),De&&!K?h2(ce,y,a?le:void 0):Promise.resolve(void 0),s2()]).then(([He,lt,Ct])=>{E&&(u(He),lt&&A(lt),I(Ct))}).catch(He=>{E&&kt(bn(He,"Não foi possível carregar os dividendos."))}).finally(()=>{E&&ta(!1)}),()=>{E=!1}},[W,ce,y,F,a,K,ue,St]);const vr=x.useCallback(async E=>{const le=!!(E!=null&&E.silent);xt(!0),le||kt("");try{const De=await f2();D$(),(!le||De.updated_count>0||De.failed_count>0)&&Ke(De.failed_count?`${De.updated_count} cotação(ões) atualizada(s); ${De.failed_count} indisponível(is).`:De.updated_count?`${De.updated_count} cotação(ões) atualizada(s) automaticamente.`:"Cotações já estavam atualizadas."),jt(He=>He+1)}catch(De){le||kt(bn(De,"Não foi possível atualizar as cotações."))}finally{xt(!1)}},[]);x.useEffect(()=>{a||!A$()||vr({silent:!0})},[a,vr]),x.useEffect(()=>{let E=!0;return on(!0),ql({...a?{asset_type:"renda_fixa"}:{},active:!0,page:1,limit:1}).then(le=>{E&&gr(le.pagination.total>0)}).catch(le=>{E&&(gr(null),ln(bn(le,"Não foi possível verificar a situação dos ativos.")))}).finally(()=>{E&&on(!1)}),()=>{E=!1}},[a,St]);function dn(){cn(),me.current="",Pe.current={current_price:"",dividend_per_share:""},U(""),nt(!1),pt(null),D(mv(s,t)),Ot(!0)}function Cn(E){cn(),me.current="",Pe.current={current_price:"",dividend_per_share:""},U(""),nt(!1),pt(E),D(ky(E)),Ot(!0)}async function In(E,le){var Ct;const De=E.trim().toUpperCase();if(!De||!((Ct=On.get(le))!=null&&Ct.auto_quote))return;$e.current&&clearTimeout($e.current),$e.current=null;const He=`${le}:${De}`;if(me.current===He)return;const lt=++oe.current;_e(!0),nt(!1),U("Buscando preço e último provento...");try{const Jt=await i2(De,le);if(lt!==oe.current)return;const Kt=Number(Jt.current_price),mt=Jt.dividend_per_share==null?null:Number(Jt.dividend_per_share);if(!Number.isFinite(Kt)||Kt<0)throw new Error("A consulta não retornou um preço atual válido.");if(mt!==null&&(!Number.isFinite(mt)||mt<0))throw new Error("A consulta não retornou um provento por cota válido.");let Et=!1,et=!1;D(ar=>{if(ar.ticker.trim().toUpperCase()!==De||ar.asset_type!==le)return ar;const ir=!ar.current_price||ar.current_price===Pe.current.current_price,Wr=!ar.dividend_per_share||ar.dividend_per_share===Pe.current.dividend_per_share,Un=ir?Ha(Kt):ar.current_price,Fr=Wr&&mt!==null?Ha(mt):ar.dividend_per_share;return ir&&(Pe.current.current_price=Un,Et=!0),Wr&&mt!==null&&(Pe.current.dividend_per_share=Fr,et=!0),{...ar,current_price:Un,dividend_per_share:Fr}}),me.current=He,U([Et?"Preço atual preenchido":"Preço atual manual mantido",et?"último provento preenchido":mt===null?"não há provento recente disponível":"provento manual mantido"].join("; ")+".")}catch(Jt){lt===oe.current&&(U(bn(Jt,"Não foi possível consultar os dados deste ticker.")),nt(!0))}finally{lt===oe.current&&_e(!1)}}function Bn(E){cn(),me.current="",Pe.current={current_price:"",dividend_per_share:""},U(""),nt(!1);const le=E.toUpperCase();D(De=>({...De,ticker:le,current_price:"",dividend_per_share:""})),le.trim()&&(we!=null&&we.auto_quote)&&($e.current=setTimeout(()=>{$e.current=null,In(le,ie.asset_type)},500))}function na(E,le){Pe.current[E]="",me.current="",nt(!1),D(De=>({...De,[E]:_i(le)}))}function aa(E){const le=On.get(E);cn(),me.current="",Pe.current={current_price:"",dividend_per_share:""},U(""),nt(!1),D(De=>({...De,asset_type:E,current_price:"",dividend_per_share:"",frequency:(le==null?void 0:le.default_frequency)??De.frequency,fii_segment:le!=null&&le.uses_fii_segment?De.fii_segment:""})),ie.ticker.trim()&&(le!=null&&le.auto_quote)&&In(ie.ticker,E)}async function un(E){var le;E.preventDefault(),kt(""),Ke(""),ja(!0);try{const De=F$(ie,Ze),He=Ze?await Vu(Ze.id,De):await g2(De);if(a){const lt=Va(ie.applied_amount),Ct=Number(ie.cdi_percent.replace(",","."));if(!(Number.isFinite(Number(He.applied_amount))&&Math.abs(Number(He.applied_amount)-lt)<.01&&Number.isFinite(Number(He.cdi_percent))&&Math.abs(Number(He.cdi_percent)-Ct)<.005&&((le=He.investment_date)==null?void 0:le.slice(0,10))===ie.investment_date)){Ot(!1),pt(null),jt(Kt=>Kt+1),kt("O servidor não confirmou o valor aplicado, o percentual do CDI e a data. Atualize/reinicie o backend antes de cadastrar novamente.");return}}Ot(!1),pt(null),Ke(Ze?"Ativo atualizado.":"Ativo cadastrado."),jt(lt=>lt+1)}catch(De){kt(bn(De,"Não foi possível salvar o ativo."))}finally{ja(!1)}}async function Ft(E){const le=String(E.id);if(!_t.has(le)){ot(De=>new Set(De).add(le)),kt(""),Ke("");try{const De=await Vu(E.id,{is_active:!E.is_active});if(!(De.is_active===!E.is_active&&Number(De.invested_amount)===Number(E.invested_amount)&&Number(De.current_value)===Number(E.current_value))){jt(lt=>lt+1),kt("O servidor não preservou os valores do ativo ao alterar a situação. Atualize/reinicie o backend antes de tentar novamente.");return}jt(lt=>lt+1)}catch(De){kt(bn(De,"Não foi possível alterar o ativo."))}finally{ot(De=>{const He=new Set(De);return He.delete(le),He})}}}async function ur(){if(zt||Tr)return;const E=a?"investimentos de renda fixa":"ativos de dividendos";xr(!0),kt(""),ln(""),Ke("");let le=0,De=!1;try{const He={...a?{asset_type:"renda_fixa"}:{},page:1,limit:100},lt=await ql(He),Ct=[...lt.data];for(let mt=2;mt<=lt.pagination.totalPages;mt+=1){const Et=await ql({...He,page:mt});Ct.push(...Et.data)}const Jt=Ct.filter(mt=>a?mt.asset_type==="renda_fixa":mt.asset_type!=="renda_fixa");if(!Jt.length){Ke(`Nenhum ${a?"investimento de renda fixa":"ativo de dividendos"} cadastrado.`);return}De=!Jt.some(mt=>mt.is_active);const Kt=Jt.filter(mt=>mt.is_active!==De);if(!Kt.length){Ke(`Todos os ${E} já estão ${De?"ativos":"desativados"}.`);return}for(const mt of Kt){const Et=await Vu(mt.id,{is_active:De});if(!(Et.is_active===De&&Number(Et.invested_amount)===Number(mt.invested_amount)&&Number(Et.current_value)===Number(mt.current_value)))throw new Error(`O servidor não confirmou a situação ou preservou os valores de ${mt.ticker}.`);le+=1}Ke(`${le} ${E} ${De?"ativados":"desativados"} com sucesso.`)}catch(He){const Ct=bn(He,`Não foi possível ${De?"ativar":"desativar"} todos os ${E}.`);ln(le?`Ação parcial: ${le} ${E} foram ${De?"ativados":"desativados"} antes da falha. ${Ct}`:Ct)}finally{le>0&&(on(!0),jt(He=>He+1)),xr(!1)}}async function Ri(){if(Y){kt(""),Ke("");try{await v2(Y.id),Ke("Ativo removido."),jt(E=>E+1)}catch(E){kt(bn(E,"Não foi possível excluir o ativo."))}finally{Be(null)}}}function Qa(E){E.preventDefault(),z({asset_type:t??(k.asset_type||void 0),fii_segment:k.fii_segment||void 0,active:k.active?k.active==="true":void 0,search:k.search.trim()||void 0,page:1,limit:20})}function Ya(){se({asset_type:t??"",fii_segment:"",active:"",search:""}),z({...t?{asset_type:t}:{},page:1,limit:20})}function ia(E){var le;return((le=On.get(E))==null?void 0:le.label)??String(E)}const ba=(c==null?void 0:c.data)??[],qt=c==null?void 0:c.pagination,st=a&&j?(()=>{const E=j.months.map(lt=>{const Ct=lt.items.filter(Et=>Et.asset_type===t),Jt=Ct.reduce((Et,et)=>Et+(Number(et.gross_amount??et.amount)||0),0),Kt=Ct.reduce((Et,et)=>Et+(Number(et.tax_amount)||0),0),mt=Ct.reduce((Et,et)=>Et+(Number(et.net_amount??et.amount)||0),0);return{...lt,items:Ct,gross_total:Jt,tax_total:Kt,income_tax_rate:Jt?Kt/Jt:0,net_total:mt,total:mt}}),le=E.reduce((lt,Ct)=>lt+Number(Ct.gross_total),0),De=E.reduce((lt,Ct)=>lt+Number(Ct.tax_total),0),He=E.reduce((lt,Ct)=>lt+Number(Ct.net_total),0);return{...j,months:E,gross_total:le,tax_total:De,income_tax_rate:le?De/le:0,total:He,net_total:He,period_total:He,monthly_average:j.months_count?He/j.months_count:0,monthly_average_gross:j.months_count?le/j.months_count:0,monthly_average_tax:j.months_count?De/j.months_count:0}})():j,Qe=J==null?void 0:J.by_asset_type.find(E=>E.key===t),tt=a&&J?{...J,holdings_count:(Qe==null?void 0:Qe.holdings_count)??0,invested_total:(Qe==null?void 0:Qe.invested_total)??0,current_total:(Qe==null?void 0:Qe.current_total)??0,profit_loss:(Qe==null?void 0:Qe.profit_loss)??0,profit_loss_percent:Number(Qe==null?void 0:Qe.invested_total)?Number(Qe==null?void 0:Qe.profit_loss)/Number(Qe==null?void 0:Qe.invested_total)*100:0}:J,pr=(st==null?void 0:st.months)??[],Ja=Math.max(...pr.map(E=>Number(E.total)||0),1),qn=Number(tt==null?void 0:tt.profit_loss)||0,zi=a?null:M$(J==null?void 0:J.prices_updated_at),Pi=!!(W.asset_type||W.fii_segment||W.active!==void 0||W.search);return e.jsxs(JE,{children:[e.jsxs(_s,{children:[e.jsxs("div",{children:[e.jsxs("span",{children:[e.jsx(ls,{size:14}),a?"Renda fixa":"Dividendos"]}),e.jsx("h1",{children:a?"Acompanhe seus investimentos de renda fixa.":"Sua renda passiva, mês a mês."}),e.jsx("p",{children:a?"Cadastre cada produto e acompanhe o capital investido, o valor atual e a estimativa de rendimento mensal.":"Cotações de ativos com auto cotação atualizam sozinhas uma vez por dia. O provento projetado é uma estimativa, não uma garantia de pagamento."}),zi&&e.jsxs("p",{style:{marginTop:8,color:"var(--muted)",fontSize:12},children:["Última atualização de cotações: ",zi]})]}),e.jsxs("div",{style:{display:"flex",gap:10,flexWrap:"wrap"},children:[e.jsxs(pe,{type:"button","aria-label":Nt?"Mostrar valores financeiros":"Ocultar valores financeiros","aria-pressed":Nt,title:Nt?"Mostrar valores financeiros":"Ocultar valores financeiros",onClick:Ka,children:[Nt?e.jsx(Oo,{}):e.jsx(G1,{}),Nt?"Mostrar valores":"Ocultar valores"]}),!a&&e.jsxs(pe,{type:"button",onClick:()=>void vr({force:!0}),disabled:Vr,children:[e.jsx(tf,{}),Vr?"Atualizando...":"Atualizar cotações"]}),e.jsxs(pe,{type:"button",$variant:"primary",onClick:dn,children:[e.jsx(yt,{}),a?"Novo investimento":"Novo ativo"]})]})]}),nr&&e.jsx(Ue,{role:"alert",style:{color:"var(--error)",padding:14},children:nr}),Gt&&e.jsx(Ue,{role:"alert",style:{color:"var(--error)",padding:14},children:Gt}),te&&e.jsx(Ue,{role:"status",style:{color:"var(--primary-strong)",padding:14},children:te}),e.jsxs(XE,{"aria-label":"Resumo da carteira",children:[e.jsx(rc,{$tone:"income",children:e.jsxs("div",{children:[e.jsxs("small",{children:[e.jsx(ls,{size:14}),"Estimativa mensal"]}),a?e.jsxs(e.Fragment,{children:[e.jsxs(ZE,{"aria-label":"Comparação de rendimento bruto e líquido",children:[e.jsxs("div",{children:[e.jsx("small",{children:"Bruto"}),e.jsx("strong",{children:ft(st==null?void 0:st.monthly_average_gross)})]}),e.jsxs("div",{children:[e.jsx("small",{children:"Líquido"}),e.jsx("strong",{children:ft(st==null?void 0:st.monthly_average)})]})]}),e.jsxs(mo,{children:["No período: bruto ",ft(st==null?void 0:st.gross_total)," − IR ",ft(st==null?void 0:st.tax_total)," = líquido ",ft(st==null?void 0:st.period_total)," · ",y," meses"]})]}):e.jsxs(e.Fragment,{children:[e.jsx("strong",{children:ft(st==null?void 0:st.monthly_average)}),e.jsxs(mo,{children:[ft(st==null?void 0:st.period_total)," no período · ",y," meses"]})]})]})}),e.jsx(rc,{children:e.jsxs("div",{children:[e.jsx("small",{children:"Total investido"}),e.jsx("strong",{children:ft(tt==null?void 0:tt.invested_total)}),e.jsx(mo,{children:"Capital aplicado"})]})}),e.jsx(rc,{children:e.jsxs("div",{children:[e.jsx("small",{children:"Valor atual da carteira"}),e.jsx("strong",{children:ft(tt==null?void 0:tt.current_total)}),e.jsx(mo,{children:"Valor de mercado da carteira"})]})}),e.jsx(rc,{$tone:"result",$negative:qn<0,children:e.jsxs("div",{children:[e.jsxs("small",{children:[e.jsx(us,{size:14}),"Resultado"]}),e.jsx("strong",{children:ft(tt==null?void 0:tt.profit_loss)}),e.jsx(mo,{children:(tt==null?void 0:tt.profit_loss_percent)!=null?`${qn<0?"":"+"}${Number(tt.profit_loss_percent).toFixed(2)}% sobre o investido`:"Variação da carteira"})]})})]}),e.jsxs(t$,{children:[e.jsxs(r$,{children:[e.jsxs(lv,{children:[e.jsxs("div",{children:[e.jsxs(Fe,{children:[e.jsx(ls,{size:19}),"Meus ativos"]}),e.jsx(as,{children:"Consulte valores, proventos e situação de cada posição."})]}),e.jsxs(e$,{children:[e.jsxs(Rp,{children:[Number(tt==null?void 0:tt.holdings_count)||(qt==null?void 0:qt.total)||0," ativos"]}),e.jsxs(pe,{type:"button",$variant:dr?"danger":"primary",title:dr?"Desativar todos os ativos desta lista.":"Ativar todos os ativos desta lista.",disabled:Tr||zr||dr===null||zt,onClick:()=>void ur(),children:[zt||zr?e.jsx(rt,{className:"spin"}):dr?e.jsx(Rc,{}):e.jsx(zc,{}),zt?"Atualizando situação...":zr?"Verificando situação...":dr?"Desativar todos":"Ativar todos"]})]})]}),e.jsxs(n$,{onSubmit:Qa,children:[!a&&e.jsxs(X,{htmlFor:"div-filter-type",children:["Tipo",e.jsxs("select",{id:"div-filter-type",value:k.asset_type,onChange:E=>se(le=>({...le,asset_type:E.target.value})),children:[e.jsx("option",{value:"",children:"Todos"}),s.map(E=>e.jsx("option",{value:E.id,children:E.label},E.id))]})]}),e.jsxs(X,{htmlFor:"div-filter-segment",children:["Segmento",e.jsxs("select",{id:"div-filter-segment",value:k.fii_segment,onChange:E=>se(le=>({...le,fii_segment:E.target.value})),children:[e.jsx("option",{value:"",children:"Todos"}),Object.keys(xo).map(E=>e.jsx("option",{value:E,children:xo[E]},E))]})]}),e.jsxs(X,{htmlFor:"div-filter-active",children:["Situação",e.jsxs("select",{id:"div-filter-active",value:k.active,onChange:E=>se(le=>({...le,active:E.target.value})),children:[e.jsx("option",{value:"",children:"Todos"}),e.jsx("option",{value:"true",children:"Ativos"}),e.jsx("option",{value:"false",children:"Inativos"})]})]}),e.jsxs(X,{htmlFor:"div-filter-search",children:["Buscar ativo",e.jsx("input",{id:"div-filter-search",type:"search",value:k.search,onChange:E=>se(le=>({...le,search:E.target.value})),placeholder:"Ticker ou nome"})]}),e.jsxs(a$,{children:[e.jsx(pe,{type:"submit",children:"Aplicar filtros"}),Pi&&e.jsx(pe,{type:"button",onClick:Ya,children:"Limpar"})]})]}),!a&&e.jsx(as,{role:g?"alert":"note",style:{marginTop:-8},children:g?`${g} As etiquetas de análise podem não estar disponíveis.`:"Perfil moderado. FIIs: patrimônio, idade, P/VP, regularidade dos proventos, retorno e risco histórico; vacância não disponível em fonte padronizada. Ações: retorno ajustado por proventos, CDI, volatilidade e queda máxima; sem balanços, lucro ou dívida. Nota 65+ favorável; 45–64 neutra; 30–44 atenção; abaixo de 30 evitar."}),!a&&e.jsx(as,{role:M?"alert":"note",style:{marginTop:-10},children:M?`A comparação de FIIs com renda fixa não está disponível: ${M}`:V?"Sinais de venda para FIIs/Fiagros com base em renda fixa líquida, qualidade e histórico de até 5 anos (prazo de renda fixa: 12 meses). São estimativas, não ordens de venda; o resultado atual, inclusive prejuízo, não determina o sinal sozinho.":"Comparação de FIIs com renda fixa em andamento..."}),Tr?e.jsxs(Xe,{children:[e.jsx(rt,{}),e.jsx("p",{children:"Carregando ativos..."})]}):ba.length?e.jsx(o$,{children:ba.map(E=>{var Un;const le=E.asset_type==="renda_fixa"?(Un=pr[0])==null?void 0:Un.items.find(Fr=>String(Fr.holding_id)===String(E.id)):void 0,De=Number((le==null?void 0:le.gross_amount)??(le==null?void 0:le.amount)??0),He=Number((le==null?void 0:le.net_amount)??(le==null?void 0:le.amount)??0),lt=Number((le==null?void 0:le.tax_amount)??Math.max(De-He,0)),Ct=E.asset_type==="renda_fixa"?He:(Number(E.quantity)||0)*(Number(E.dividend_per_share)||0),Kt=(Number(E.profit_loss)||0)<0,mt=E.ticker.slice(0,4),Et=E.asset_type==="fii"||E.asset_type==="fiagro"?"fiis":["acao","bdr","etf"].includes(E.asset_type)?"acoes_br":void 0,et=Et?m.get(`${Et}:${E.ticker.toUpperCase()}`):void 0,ar=et?Uf(Et,et.rating,et.analysis_type):void 0,ir=E.is_active&&(E.asset_type==="fii"||E.asset_type==="fiagro")?_==null?void 0:_.positions.find(Fr=>Fr.ticker.toUpperCase()===E.ticker.toUpperCase()):void 0,Wr=ir?N$(ir):void 0;return e.jsxs(l$,{$inactive:!E.is_active,children:[e.jsxs(c$,{children:[e.jsxs(d$,{children:[e.jsx(u$,{title:E.ticker,children:mt}),e.jsxs(p$,{children:[e.jsx("h3",{children:E.ticker}),e.jsx("p",{children:E.name||ia(E.asset_type)}),e.jsxs(f$,{children:[e.jsx(jn,{children:ia(E.asset_type)}),E.fii_segment&&e.jsx(jn,{children:xo[E.fii_segment]}),ar&&e.jsx(gs,{label:ar.label,color:ar.color,details:[`Nota ${et==null?void 0:et.score}/100 · perfil moderado · classificação: ${et?Er[et.rating].label:"indisponível"}.`,...(et==null?void 0:et.analysis_factors)??["Análise detalhada não disponível para este ativo."],...(et==null?void 0:et.analysis_type)==="fii_fundamentals"?["Vacância: não disponível nos dados padronizados consultados; não foi estimada nem pontuada."]:(et==null?void 0:et.analysis_type)==="equity_market_history"?["Não avalia lucro, dívida, ROE ou valuation fundamentalista da empresa."]:[]]}),Wr&&ir&&e.jsx(gs,{label:Wr.label,color:Wr.color,details:[`Sinal quantitativo: ${Wr.label}${ir.sell_score===null?"":` · nota ${ir.sell_score}/100`}.`,`Resultado estimado nesta análise: ${ir.gain===null?"preço médio indisponível":ir.gain<0?`prejuízo de ${kr(Math.abs(ir.gain))}`:`lucro de ${kr(ir.gain)}`}.`,...ir.reasons,"A recomendação não é garantia de retorno. O prejuízo passado, isoladamente, não define se manter ou vender; considere objetivos, impostos, liquidez e sua avaliação do ativo."]}),E.is_active&&(E.asset_type==="fii"||E.asset_type==="fiagro")&&V&&!M&&!ir&&e.jsx(jn,{children:"Sem sinal de renda fixa"}),Et&&b&&!g&&!et&&e.jsx(jn,{children:"Sem análise de mercado"}),E.asset_type==="renda_fixa"?e.jsxs(e.Fragment,{children:[e.jsxs(jn,{children:[Number(E.cdi_percent)||0,"% do CDI"]}),e.jsx(jn,{children:E.income_tax_exempt?"Isento de IR":"IR regressivo"}),E.investment_date&&e.jsxs(jn,{children:["Desde ",Eo(E.investment_date)]})]}):e.jsxs(e.Fragment,{children:[e.jsx(jn,{children:Np[E.frequency]??E.frequency}),e.jsxs(jn,{children:["Dia ",E.payment_day]}),E.auto_price?e.jsx(jn,{children:"Auto cotação"}):e.jsx(jn,{children:"Preço manual"})]}),e.jsx(h$,{$active:E.is_active,children:E.is_active?"Ativo":"Desativado"})]}),(et==null?void 0:et.analysis_factors)&&et.analysis_factors.length>0&&e.jsxs("details",{children:[e.jsxs("summary",{children:["Ver critérios da análise · nota ",et.score,"/100"]}),e.jsx("ul",{children:et.analysis_factors.map((Fr,sa)=>e.jsx("li",{children:Fr},`${E.ticker}-${sa}`))})]})]})]}),e.jsxs(g$,{children:[e.jsx(Pp,{$active:E.is_active,type:"button",title:E.is_active?"Desativar":"Ativar","aria-label":`${E.is_active?"Desativar":"Ativar"} ${E.ticker}`,disabled:zt||_t.has(String(E.id)),onClick:()=>{Ft(E)},children:E.is_active?e.jsx(Rc,{}):e.jsx(zc,{})}),e.jsx(Pp,{type:"button",title:"Editar","aria-label":`Editar ${E.ticker}`,onClick:()=>Cn(E),children:e.jsx(an,{})}),e.jsx(Pp,{type:"button","data-danger":"true",title:"Excluir","aria-label":`Excluir ${E.ticker}`,onClick:()=>Be(E),children:e.jsx(Rr,{})})]})]}),e.jsxs(m$,{children:[e.jsxs(nc,{children:[e.jsx("small",{children:E.asset_type==="renda_fixa"?"Aplicado":"Investido"}),e.jsx("strong",{children:ft(E.applied_amount??E.invested_amount)})]}),e.jsxs(nc,{children:[e.jsx("small",{children:"Valor atual"}),e.jsx("strong",{children:ft(E.current_value)})]}),e.jsxs(nc,{$accent:Kt?"negative":"result",children:[e.jsx("small",{children:"Resultado"}),e.jsx("strong",{children:ft(E.profit_loss)})]}),e.jsxs(nc,{$accent:"income",children:[e.jsx("small",{children:E.asset_type==="renda_fixa"?"Rendimento líquido no mês projetado":"Por pagamento"}),e.jsx("strong",{children:ft(Ct)})]})]}),e.jsx(x$,{children:e.jsxs("span",{children:[E.asset_type==="renda_fixa"?`${ft(E.applied_amount??E.invested_amount)} aplicado · ${Number(E.cdi_percent)||0}% do CDI · bruto ${ft(De)} · IR ${ft(lt)} · líquido conforme ${pr[0]?go(pr[0].month):"projeção"}`:`${Number(E.quantity)} cotas · ${Nt?"••••••":pv.format(Number(E.dividend_per_share)||0)} por cota`,E.notes?` · ${E.notes}`:""]})}),E.asset_type==="renda_fixa"&&e.jsx(O$,{holdingId:E.id})]},String(E.id))})}):c?e.jsxs(Xe,{children:[e.jsx(ls,{size:30}),e.jsx("h3",{children:"Nenhum ativo encontrado"}),e.jsx("p",{children:"Cadastre um ativo para projetar seus dividendos."}),e.jsxs(pe,{type:"button",$variant:"primary",onClick:dn,children:[e.jsx(yt,{}),"Novo ativo"]})]}):null,qt&&qt.total>0&&e.jsxs(z$,{children:[e.jsxs("span",{children:[qt.total," ativos · página ",qt.page," de ",Math.max(qt.totalPages,1)]}),e.jsxs("div",{style:{display:"flex",gap:7},children:[e.jsx(pe,{type:"button",disabled:!qt.hasPreviousPage||Tr,onClick:()=>z(E=>({...E,page:Math.max((E.page??1)-1,1)})),children:"Anterior"}),e.jsx(pe,{type:"button",disabled:!qt.hasNextPage||Tr,onClick:()=>z(E=>({...E,page:(E.page??1)+1})),children:"Próxima"})]})]})]}),e.jsxs(i$,{children:[e.jsxs(lv,{children:[e.jsxs("div",{children:[e.jsxs(Fe,{children:[e.jsx(us,{size:19}),"Projeção mensal"]}),e.jsx(as,{children:a?"Informe a taxa CDI anual e selecione um mês para consultar a projeção calculada pela API.":"Selecione um mês para ver a data e o valor de cada provento previsto."})]}),e.jsxs(Rp,{children:[y," meses"]})]}),e.jsxs(s$,{children:[e.jsxs(X,{htmlFor:"div-from",children:["A partir de",e.jsx("input",{id:"div-from",type:"month",value:ce,onChange:E=>C(E.target.value||hv())})]}),e.jsxs(X,{htmlFor:"div-months",children:["Meses",e.jsx("select",{id:"div-months",value:y,onChange:E=>q(Number(E.target.value)),children:[6,12,24,36].map(E=>e.jsx("option",{value:E,children:E},E))})]}),a&&e.jsxs(X,{htmlFor:"div-cdi-rate",children:["CDI anual (%)",e.jsx("input",{id:"div-cdi-rate",type:"text",inputMode:"decimal",value:F,onChange:E=>{fe(E.target.value),Ne(""),ye("")},"aria-describedby":"div-cdi-rate-hint",disabled:K,required:!0})]})]}),a&&e.jsx(as,{id:"div-cdi-rate-hint",children:K?"Buscando CDI anualizado atual no Banco Central...":ue||(ge?`Taxa anualizada do Banco Central (SGS), referência ${ge}. Você pode editar para simular outros cenários.`:"Taxa anual para simulação manual (exemplo: 13,65%).")}),pr.length?pr.map(E=>{const le=Number(E.total)||0;return e.jsxs(w$,{type:"button","aria-label":Nt?`Ver detalhes dos proventos de ${go(E.month)}`:`Ver detalhes dos proventos de ${go(E.month)}, estimados em ${kr(le)} líquidos`,onClick:()=>ae(E),children:[e.jsxs("span",{children:[e.jsx("strong",{children:go(E.month)}),e.jsx("span",{children:ft(le)}),e.jsx(ms,{"aria-hidden":"true"})]}),e.jsx(R$,{"aria-hidden":"true",children:e.jsx("span",{style:{width:`${Math.min(le/Ja*100,100)}%`}})}),E.items.length>0&&e.jsx("small",{children:E.items.map(De=>De.ticker).join(", ")}),a&&E.items.length>0&&e.jsxs("small",{children:["Bruto ",ft(E.gross_total)," · IR ",((Number(E.income_tax_rate)||0)*100).toLocaleString("pt-BR"),"% (",ft(E.tax_total),") · Líquido ",ft(E.net_total)]})]},E.month)}):e.jsx("p",{style:{margin:0,color:"var(--muted)",fontSize:12},children:"Cadastre ao menos um ativo para ver a projeção."})]})]}),e.jsx(xs,{open:O!==null,title:O?`Proventos de ${go(O.month)}`:"Proventos previstos",icon:e.jsx(us,{size:18}),onClose:()=>ae(null),children:O&&e.jsxs(_$,{children:[e.jsxs(k$,{children:[e.jsxs("div",{children:[e.jsx("small",{children:a?"Total líquido estimado no mês":"Total estimado no mês"}),e.jsx("strong",{children:ft(O.total)}),a&&e.jsxs("small",{style:{display:"block",marginTop:6,color:"var(--muted)"},children:["Bruto ",ft(O.gross_total)," · IR ",ft(O.tax_total)]})]}),e.jsxs(Rp,{children:[O.items.length," ",O.items.length===1?"provento":"proventos"]})]}),e.jsx(as,{children:a?`IR estimado de ${((Number(O.income_tax_rate)||0)*100).toLocaleString("pt-BR")}% conforme o prazo do investimento até o pagamento; os valores podem variar.`:"Valores previstos; o pagamento efetivo pode variar."}),O.items.length?e.jsx(S$,{"aria-label":"Detalhes dos proventos previstos",children:O.items.map((E,le)=>e.jsxs(C$,{children:[e.jsxs(E$,{children:[e.jsx("h3",{children:E.ticker}),e.jsxs("p",{children:[E.name||ia(E.asset_type)," · ",Eo(E.payment_date)]}),e.jsx("small",{children:E.asset_type==="renda_fixa"?`${Number(E.cdi_percent)||0}% do CDI${E.investment_date?` · aplicado desde ${Eo(E.investment_date)}`:""}`:`${T$(E.quantity??0)} cotas × ${Nt?"••••••":pv.format(Number(E.dividend_per_share)||0)} por cota`}),a&&e.jsxs("small",{style:{display:"block",marginTop:5},children:["Bruto ",ft(E.gross_amount)," · IR ",((Number(E.income_tax_rate)||0)*100).toLocaleString("pt-BR"),"% (",ft(E.tax_amount),") · Líquido ",ft(E.net_amount??E.amount)]})]}),e.jsxs($$,{children:[e.jsx("strong",{children:ft(E.amount)}),e.jsx("small",{children:a?"Valor líquido a receber":"Provento previsto"})]})]},`${String(E.holding_id)}-${E.payment_date}-${le}`))}):e.jsx(Xe,{children:e.jsx("p",{children:"Nenhum provento detalhado para este mês."})})]})}),e.jsx(xs,{open:ht,title:Ze?a?"Editar investimento":"Editar ativo":a?"Novo investimento":"Novo ativo",icon:Ze?e.jsx(an,{size:18}):e.jsx(yt,{size:18}),busy:Sn,onClose:Ln,children:e.jsxs(v$,{onSubmit:E=>{un(E)},children:[e.jsx(j$,{children:a?"Informe o valor aplicado, o percentual do CDI e a data; a estimativa mensal usa a taxa CDI da projeção.":we!=null&&we.auto_quote?"Se deixar o preço atual vazio, a API busca a cotação automaticamente para este tipo.":"Informe o preço atual manualmente quando quiser acompanhar o valor da posição."}),e.jsxs(X,{htmlFor:"div-ticker",children:["Ticker *",e.jsx("input",{id:"div-ticker",maxLength:40,value:ie.ticker,onChange:E=>Bn(E.target.value),onBlur:()=>{In(ie.ticker,ie.asset_type)},placeholder:"Ex.: MXRF11",required:!0})]}),(de||ke)&&e.jsx(b$,{role:"status","aria-live":"polite",$error:he,children:de?"Buscando preço e último provento...":ke}),e.jsxs(X,{htmlFor:"div-name",children:["Nome",e.jsx("input",{id:"div-name",maxLength:160,value:ie.name,onChange:E=>D(le=>({...le,name:E.target.value})),placeholder:"Ex.: Maxi Renda"})]}),!a&&e.jsxs(X,{htmlFor:"div-type",children:["Tipo",e.jsx("select",{id:"div-type",value:ie.asset_type,onChange:E=>aa(E.target.value),children:s.map(E=>e.jsx("option",{value:E.id,children:E.label},E.id))})]}),ra&&e.jsxs(X,{htmlFor:"div-segment",children:["Segmento (FII/Fiagro)",e.jsxs("select",{id:"div-segment",value:ie.fii_segment,onChange:E=>D(le=>({...le,fii_segment:E.target.value})),children:[e.jsx("option",{value:"",children:"Não informado"}),Object.keys(xo).map(E=>e.jsx("option",{value:E,children:xo[E]},E))]})]}),a?e.jsxs(e.Fragment,{children:[e.jsxs(X,{htmlFor:"div-applied-amount",children:["Valor aplicado (R$) *",e.jsx("input",{id:"div-applied-amount",type:"text",inputMode:"numeric",autoComplete:"off",value:ie.applied_amount,onChange:E=>D(le=>({...le,applied_amount:_i(E.target.value)})),placeholder:"R$ 10.000,00",required:!0})]}),e.jsxs(X,{htmlFor:"div-cdi-percent",children:["Percentual do CDI (%) *",e.jsx("input",{id:"div-cdi-percent",type:"text",inputMode:"decimal",value:ie.cdi_percent,onChange:E=>D(le=>({...le,cdi_percent:E.target.value})),placeholder:"120",required:!0})]}),e.jsxs(X,{htmlFor:"div-investment-date",children:["Data do investimento *",e.jsx("input",{id:"div-investment-date",type:"date",value:ie.investment_date,onChange:E=>D(le=>({...le,investment_date:E.target.value})),required:!0})]}),e.jsxs(X,{htmlFor:"div-income-tax-exempt",children:["Tributação do investimento",e.jsxs("select",{id:"div-income-tax-exempt",value:String(ie.income_tax_exempt),onChange:E=>D(le=>({...le,income_tax_exempt:E.target.value==="true"})),children:[e.jsx("option",{value:"false",children:"Tributável · IR regressivo"}),e.jsx("option",{value:"true",children:"Isento de IR · ex.: LCI/LCA"})]})]})]}):e.jsxs(e.Fragment,{children:[e.jsxs(X,{htmlFor:"div-quantity",children:["Quantidade de cotas *",e.jsx("input",{id:"div-quantity",type:"number",min:0,step:"any",value:ie.quantity,onChange:E=>D(le=>({...le,quantity:E.target.value})),required:!0})]}),e.jsxs(X,{htmlFor:"div-average",children:["Preço médio pago (R$)",e.jsx("input",{id:"div-average",type:"text",inputMode:"numeric",autoComplete:"off",value:ie.average_price,onChange:E=>D(le=>({...le,average_price:_i(E.target.value)})),placeholder:"R$ 9,80"})]}),e.jsxs(X,{htmlFor:"div-current",children:["Preço atual (R$)",e.jsx("input",{id:"div-current",type:"text",inputMode:"numeric",autoComplete:"off",value:ie.current_price,onChange:E=>na("current_price",E.target.value),placeholder:we!=null&&we.auto_quote?"Vazio = cotação automática":"Opcional"})]}),e.jsxs(X,{htmlFor:"div-per-share",children:["Provento por cota (R$)",e.jsx("input",{id:"div-per-share",type:"text",inputMode:"numeric",autoComplete:"off",value:ie.dividend_per_share,onChange:E=>na("dividend_per_share",E.target.value),placeholder:"R$ 0,10"})]}),e.jsxs(X,{htmlFor:"div-frequency",children:["Frequência",e.jsx("select",{id:"div-frequency",value:ie.frequency,onChange:E=>D(le=>({...le,frequency:E.target.value})),children:Object.keys(Np).map(E=>e.jsx("option",{value:E,children:Np[E]},E))})]}),qe&&e.jsxs(X,{htmlFor:"div-reference",children:["Mês de um pagamento",e.jsx("select",{id:"div-reference",value:ie.reference_month,onChange:E=>D(le=>({...le,reference_month:E.target.value})),children:by.map((E,le)=>e.jsx("option",{value:le+1,children:E},E))})]})]}),e.jsxs(X,{htmlFor:"div-day",children:["Dia do pagamento",e.jsx("input",{id:"div-day",type:"number",min:1,max:31,step:1,value:ie.payment_day,onChange:E=>D(le=>({...le,payment_day:E.target.value})),required:!0})]}),e.jsxs(X,{htmlFor:"div-active",children:["Situação",e.jsxs("select",{id:"div-active",value:String(ie.is_active),onChange:E=>D(le=>({...le,is_active:E.target.value==="true"})),children:[e.jsx("option",{value:"true",children:"Ativo (entra na projeção)"}),e.jsx("option",{value:"false",children:"Inativo"})]})]}),e.jsxs(X,{htmlFor:"div-notes",children:["Observações",e.jsx("textarea",{id:"div-notes",maxLength:2e3,value:ie.notes,onChange:E=>D(le=>({...le,notes:E.target.value}))})]}),e.jsxs(y$,{children:[e.jsxs(pe,{type:"button",onClick:Ln,disabled:Sn,children:[e.jsx(mr,{}),"Cancelar"]}),e.jsxs(pe,{type:"submit",$variant:"primary",disabled:Sn,children:[Sn?e.jsx(rt,{}):e.jsx(tn,{}),Ze?"Salvar alterações":"Cadastrar"]})]})]})}),e.jsx(Kc,{open:Y!==null,title:"Excluir ativo?",description:Y?`${Y.ticker} será removido permanentemente.`:"",confirmLabel:"Excluir",busy:!1,onConfirm:()=>{Ri()},onCancel:()=>Be(null)})]})}const Hf=h.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 20px;
`,Tt=h(Ue)`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 14px;
  ${Fe} { margin: 0; }
`,Ht=h.p`
  margin: 4px 0 0;
  color: var(--muted);
  font-size: 12px;
  line-height: 1.5;
`,I$=h.label`
  display: flex;
  align-items: center;
  gap: 8px;
  min-height: 44px;
  color: var(--text);
  font-size: 13px;
  font-weight: 600;
  input { width: 18px; height: 18px; }
`,Mc=h.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
  @media (max-width: 1000px) { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  @media (max-width: 520px) { grid-template-columns: 1fr; }
`,Sr=h.div`
  display: grid;
  gap: 4px;
  padding: 14px 16px;
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  background: var(--surface-raised);
  small { color: var(--muted); font-size: 10px; font-weight: 800; letter-spacing: .07em; text-transform: uppercase; }
  strong { color: ${({$tone:t})=>t==="good"?"var(--success)":t==="bad"?"var(--error)":"var(--text)"}; font-size: 20px; font-variant-numeric: tabular-nums; letter-spacing: -.03em; }
  span { color: var(--muted); font-size: 11px; line-height: 1.4; }
`,df=h.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  select { min-height: 36px; border: 1px solid var(--border); border-radius: var(--radius-md); padding: 4px 10px; color: var(--text); background: var(--surface); }
`,Tc=h.div`
  overflow-x: auto;
  table { width: 100%; border-collapse: collapse; font-size: 12px; }
  th { padding: 8px 10px; color: var(--muted); font-size: 10px; letter-spacing: .06em; text-align: right; text-transform: uppercase; white-space: nowrap; }
  td { padding: 10px; border-top: 1px solid var(--border); color: var(--text); font-variant-numeric: tabular-nums; text-align: right; white-space: nowrap; }
  th:first-child, td:first-child { text-align: left; font-weight: 650; }
`,Sy=h.span`
  padding: 3px 9px;
  border-radius: 999px;
  color: ${({$color:t})=>t};
  background: color-mix(in srgb, ${({$color:t})=>t} 14%, transparent);
  font-size: 11px;
  font-weight: 800;
`,en=h.p`
  margin: 0;
  color: var(--muted);
  font-size: 11px;
  line-height: 1.5;
`,Vf=h.form`
  display: grid;
  grid-template-columns: repeat(${({$columns:t})=>t??4}, minmax(0, 1fr)) auto;
  gap: 12px;
  align-items: end;
  ${X} { margin-bottom: 0; }
  @media (max-width: 1100px) { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  @media (max-width: 560px) { grid-template-columns: 1fr; }
`;function B$(t){if(t<=0)return 1;const a=10**Math.floor(Math.log10(t)),s=t/a;return(s<=1?1:s<=2?2:s<=2.5?2.5:s<=5?5:10)*a}function Cy(){const t=x.useRef(null),[a,s]=x.useState(820);return x.useEffect(()=>{const l=t.current;if(!l)return;const c=()=>s(Math.max(280,Math.round(l.getBoundingClientRect().width)));c();const u=new ResizeObserver(c);return u.observe(l),()=>u.disconnect()},[]),[t,a]}const Ey=h.div`
  position: relative;
  width: 100%;
  svg { display: block; width: 100%; height: auto; overflow: visible; }
  text { fill: var(--muted); font-size: 11px; font-variant-numeric: tabular-nums; }
`,q$=h.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 10px;
`,gv=h.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  min-height: 30px;
  padding: 4px 10px;
  border: 1px solid var(--border);
  border-radius: 999px;
  color: ${({$off:t})=>t?"var(--muted)":"var(--text)"};
  background: ${({$off:t})=>t?"transparent":"var(--surface-raised)"};
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  opacity: ${({$off:t})=>t?.55:1};
  i { width: 10px; height: 10px; border-radius: 50%; background: ${({$color:t})=>t}; }
`,U$=h.div`
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
`;function H$({labels:t,series:a,formatValue:s,formatAxis:l,referenceLine:c,ariaLabel:u}){const[m,f]=x.useState(new Set),[g,w]=x.useState(null),[b,S]=x.useState(null),[_,R]=Cy(),M=R<520?280:320,N={top:14,right:14,bottom:30,left:R<520?54:66},V=a.filter(W=>!m.has(W.id)),$=R-N.left-N.right,j=M-N.top-N.bottom,A=t.length,O=a.map(W=>W.values[W.values.length-1]??1),ae=Math.max(...O)/Math.max(Math.min(...O),1)>6,J=b??ae,I=V.flatMap(W=>W.values);c&&I.push(c.value);const ce=Math.max(...I,1),C=Math.max(Math.min(...I),1),y=B$(ce*1.04),q=10**Math.floor(Math.log10(C)),F=y<=q*2?q*10:y,fe=W=>N.left+(A>1?W/(A-1)*$:0),ge=W=>{if(!J)return N.top+j-W/y*j;const z=Math.log(Math.max(W,q)/q)/Math.log(F/q);return N.top+j-z*j},Ne=x.useMemo(()=>{if(!J)return[0,1,2,3,4].map(se=>y/4*se);const z=Math.ceil(Math.log10(F/q))<=2?[1,2,5]:[1],k=[];for(let se=q;se<=F;se*=10)z.forEach(ie=>{se*ie<=F&&k.push(se*ie)});return k},[J,y,q,F]),K=Math.ceil(A/Math.max(2,Math.floor($/52)));function je(W){f(z=>{const k=new Set(z);return k.has(W)?k.delete(W):k.size<a.length-1&&k.add(W),k})}function ue(W){const z=W.currentTarget.getBoundingClientRect(),k=(W.clientX-z.left)/z.width*R,se=Math.round((k-N.left)/$*(A-1));w(Math.min(A-1,Math.max(0,se)))}const ye=g===null?0:fe(g)/R*100;return e.jsxs("div",{children:[e.jsxs(q$,{children:[a.map(W=>e.jsxs(gv,{type:"button",$color:W.color,$off:m.has(W.id),"aria-pressed":!m.has(W.id),onClick:()=>je(W.id),children:[e.jsx("i",{}),W.label]},W.id)),e.jsxs(gv,{type:"button",$color:"var(--primary)",$off:!J,"aria-pressed":J,onClick:()=>S(!J),title:"A escala logarítmica mostra variações proporcionais e evita que uma opção muito alta esmague as demais.",children:[e.jsx("i",{}),"Escala logarítmica"]})]}),e.jsxs(Ey,{ref:_,onMouseMove:ue,onMouseLeave:()=>w(null),children:[e.jsxs("svg",{viewBox:`0 0 ${R} ${M}`,role:"img","aria-label":u,children:[Ne.map(W=>e.jsxs("g",{children:[e.jsx("line",{x1:N.left,x2:R-N.right,y1:ge(W),y2:ge(W),stroke:"var(--border)",strokeDasharray:W===0||J&&W===Ne[0]?void 0:"3 4"}),e.jsx("text",{x:N.left-8,y:ge(W)+4,textAnchor:"end",children:l(W)})]},W)),t.map((W,z)=>z%K===0||z===A-1?e.jsx("text",{x:fe(z),y:M-8,textAnchor:"middle",children:W},W):null),c&&e.jsxs("g",{children:[e.jsx("line",{x1:N.left,x2:R-N.right,y1:ge(c.value),y2:ge(c.value),stroke:"var(--error)",strokeDasharray:"6 4",strokeWidth:1.5}),e.jsx("text",{x:N.left+6,y:ge(c.value)-6,style:{fill:"var(--error)",fontWeight:700},children:c.label})]}),g!==null&&e.jsx("line",{x1:fe(g),x2:fe(g),y1:N.top,y2:N.top+j,stroke:"var(--muted)",strokeOpacity:.5}),V.map(W=>e.jsxs("g",{children:[e.jsx("polyline",{fill:"none",stroke:W.color,strokeWidth:W.strong?3.2:2,strokeLinejoin:"round",strokeLinecap:"round",points:W.values.map((z,k)=>`${fe(k)},${ge(z)}`).join(" ")}),g!==null&&W.values[g]!==void 0&&e.jsx("circle",{cx:fe(g),cy:ge(W.values[g]),r:4.5,fill:W.color,stroke:"var(--surface)",strokeWidth:2})]},W.id))]}),g!==null&&e.jsxs(U$,{style:ye>60?{right:`${100-ye+2}%`}:{left:`${ye+2}%`},children:[e.jsx("strong",{children:t[g]}),[...V].sort((W,z)=>(z.values[g]??0)-(W.values[g]??0)).map(W=>e.jsxs("div",{children:[e.jsxs("span",{children:[e.jsx("i",{style:{background:W.color}}),W.label]}),e.jsx("b",{children:s(W.values[g]??0)})]},W.id))]})]})]})}const Ap=240;function Wf({items:t,formatValue:a,ariaLabel:s}){const[l,c]=Cy(),u=22,m=26,f=6,g=Ap-u-m,w=Math.max(...t.map(j=>Math.max(j.value,0)),0),b=Math.max(...t.map(j=>Math.max(-j.value,0)),0),S=Math.max(w+b,1),_=u+g*(w/S),R=g/S,M=(c-f*2)/Math.max(t.length,1),N=Math.min(36,M*.62),V=M>=46,$=M>=26?1:2;return e.jsx(Ey,{ref:l,children:e.jsxs("svg",{viewBox:`0 0 ${c} ${Ap}`,role:"img","aria-label":s,children:[e.jsx("line",{x1:f,x2:c-f,y1:_,y2:_,stroke:"var(--border)"}),t.map((j,A)=>{const O=Math.abs(j.value)*R,ae=f+M*A+M/2,J=j.value>=0,I=J?_-O:_;return e.jsxs("g",{children:[e.jsx("rect",{x:ae-N/2,y:I,width:N,height:Math.max(O,1),rx:3,style:{fill:J?"var(--success)":"var(--error)"},children:e.jsx("title",{children:`${j.label}: ${a(j.value)}`})}),V&&e.jsx("text",{x:ae,y:J?I-5:I+O+12,textAnchor:"middle",children:a(j.value)}),A%$===0&&e.jsx("text",{x:ae,y:Ap-8,textAnchor:"middle",children:j.label})]},j.id)})]})})}const $y=h.div`
  display: grid;
  gap: 12px;
`,V$=h.div`
  display: grid;
  gap: 5px;
  header { display: flex; align-items: baseline; justify-content: space-between; gap: 10px; font-size: 13px; }
  header span:first-child { color: var(--text); font-weight: 650; }
  header b { color: var(--text); font-variant-numeric: tabular-nums; }
  small { color: var(--muted); font-size: 11px; }
`,W$=h.div`
  position: relative;
  height: 12px;
  overflow: hidden;
  border-radius: 999px;
  background: var(--surface-raised);
`,vv=h.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: ${({$width:t})=>Math.max(0,Math.min(100,t))}%;
  border-radius: 999px;
  background: ${({$color:t})=>t};
  opacity: ${({$opacity:t})=>t??1};
  transition: width .4s ease;
`;function vi({items:t,max:a}){const s=[...t].map(u=>u.value).sort((u,m)=>m-u),l=a===void 0&&s.length>2&&s[0]>s[1]*4,c=Math.max(a??(l?s[1]*1.25:s[0]),1);return e.jsx($y,{children:t.map(u=>{const m=u.value>c;return e.jsxs(V$,{children:[e.jsxs("header",{children:[e.jsx("span",{children:u.label}),e.jsx("b",{children:u.valueLabel})]}),e.jsxs(W$,{role:"img","aria-label":`${u.label}: ${u.valueLabel}`,children:[e.jsx(vv,{$width:u.value/c*100,$color:u.color??"var(--primary)"}),u.invested!==void 0&&e.jsx(vv,{$width:u.invested/c*100,$color:"var(--text)",$opacity:.35})]}),(u.caption||m)&&e.jsxs("small",{children:[m?"Barra cortada: valor muito acima das demais. ":"",u.caption]})]},u.id)})})}const G$=h.div`
  display: grid;
  grid-template-columns: minmax(110px, 1.1fr) minmax(0, 2fr) 70px;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  @media (max-width: 520px) { grid-template-columns: 90px minmax(0, 1fr) 62px; }
  span:first-child { color: var(--text); font-weight: 600; }
  b { text-align: right; font-variant-numeric: tabular-nums; }
`,K$=h.div`
  position: relative;
  height: 14px;
  background: var(--surface-raised);
  border-radius: 4px;
  &::after { content: ''; position: absolute; top: -2px; bottom: -2px; left: var(--zero); width: 1px; background: var(--muted); opacity: .6; }
`,Q$=h.div`
  position: absolute;
  top: 0;
  bottom: 0;
  border-radius: 3px;
  transition: width .4s ease;
`;function Fc({items:t,formatValue:a}){const s=Math.max(...t.map(m=>Math.max(m.value,0)),0),l=Math.max(...t.map(m=>Math.max(-m.value,0)),0),c=Math.max(s+l,1),u=l/c*100;return e.jsx($y,{children:t.map(m=>{const f=Math.abs(m.value)/c*100,g=m.value>=0;return e.jsxs(G$,{children:[e.jsx("span",{children:m.label}),e.jsx(K$,{style:{"--zero":`${u}%`},role:"img","aria-label":`${m.label}: ${a(m.value)}`,children:e.jsx(Q$,{style:{width:`${f}%`,left:g?`${u}%`:`${u-f}%`,background:g?"var(--success)":"var(--error)"}})}),e.jsx("b",{style:{color:g?"var(--success)":"var(--error)"},children:a(m.value)})]},m.id)})})}const Y$=h.div`
  display: flex;
  height: 22px;
  overflow: hidden;
  border-radius: 999px;
  background: var(--surface-raised);
  div { display: grid; place-items: center; min-width: 0; color: #fff; font-size: 11px; font-weight: 800; transition: width .4s ease; }
`,J$=h.ul`
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
`;function Ry({items:t,ariaLabel:a}){const s=t.reduce((l,c)=>l+c.value,0)||1;return e.jsxs("div",{children:[e.jsx(Y$,{role:"img","aria-label":a,children:t.filter(l=>l.value>0).map(l=>e.jsx("div",{style:{width:`${l.value/s*100}%`,background:l.color},title:`${l.label}: ${l.valueLabel??l.value}`,children:l.value/s*100>=8?`${Math.round(l.value/s*100)}%`:""},l.id))}),e.jsx(J$,{children:t.map(l=>e.jsxs("li",{children:[e.jsx("i",{style:{background:l.color}}),l.label," ",e.jsx("b",{children:l.valueLabel??l.value})]},l.id))})]})}const X$=2004,Z$=["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"],e6=[{id:"conservador",label:"Conservador"},{id:"moderado",label:"Moderado"},{id:"arrojado",label:"Arrojado"}],t6=h.ul`
  display: grid;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
  li { padding: 10px 14px; border-left: 4px solid var(--primary); border-radius: var(--radius-md); background: color-mix(in srgb, var(--primary) 6%, var(--surface-raised)); color: var(--text); font-size: 13px; line-height: 1.5; }
`,r6=h.div`
  display: inline-flex;
  padding: 3px;
  border: 1px solid var(--border);
  border-radius: 999px;
  background: var(--surface-raised);
`,yv=h.button`
  min-height: 32px;
  padding: 4px 14px;
  border: 0;
  border-radius: 999px;
  color: ${({$active:t})=>t?"var(--primary-contrast)":"var(--text)"};
  background: ${({$active:t})=>t?"var(--primary)":"transparent"};
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
`,n6=h.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 14px;
`,a6=h.article`
  display: grid;
  gap: 12px;
  align-content: start;
  padding: 14px 16px;
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  background: var(--surface-raised);
  h3 { margin: 0; color: var(--text); font-size: 14px; }
  small { color: var(--muted); font-size: 11px; line-height: 1.5; }
`;function is(t){const[a,s]=t.split("-");return`${Z$[Number(s)-1]??s}/${a}`}function i6(t){var a,s,l;return $t.isAxiosError(t)?((a=t.response)==null?void 0:a.status)===404?"A simulação histórica ainda não está disponível no servidor.":((l=(s=t.response)==null?void 0:s.data)==null?void 0:l.error)||"Não foi possível executar a simulação.":t instanceof Error?t.message:"Não foi possível executar a simulação."}function s6(){const t=Math.min(30,new Date().getFullYear()-X$),[a,s]=x.useState({valor:Ha(2e5),anos:String(Math.min(10,t)),aporte:"",ipca:!1,perfil:"moderado"}),[l,c]=x.useState(),[u,m]=x.useState(!0),[f,g]=x.useState(""),[w,b]=x.useState("without"),[S,_]=x.useState("carteira"),[R,M]=x.useState({valor:2e5,anos:Math.min(10,t),aporte_mensal:0,reajustar_aporte_ipca:!1,perfil:"moderado"});x.useEffect(()=>{let y=!0;return m(!0),g(""),d2(R).then(q=>{y&&(c(q),b(q.parameters.monthly_contribution>0?"with":"without"),_("carteira"))}).catch(q=>{y&&g(i6(q))}).finally(()=>{y&&m(!1)}),()=>{y=!1}},[R]);function N(y){y.preventDefault();const q=Va(a.valor),F=Number(a.anos),fe=Va(a.aporte);if(!(q>0)){g("Informe um valor inicial maior que zero.");return}if(!Number.isInteger(F)||F<1||F>t){g(`Informe de 1 a ${t} anos.`);return}if(!(fe>=0)){g("O aporte mensal não pode ser negativo.");return}M({valor:q,anos:F,aporte_mensal:fe,reajustar_aporte_ipca:a.ipca,perfil:a.perfil})}const V=((l==null?void 0:l.parameters.monthly_contribution)??0)>0,$=V?w:"without",j=x.useMemo(()=>l?[l.portfolio,...l.assets]:[],[l]),A=x.useMemo(()=>j.map(y=>({id:y.id,label:y.name,color:$p(y.id),strong:y.kind==="carteira",values:[l.parameters.initial_amount,...y.yearly.map(q=>$==="with"?q.value_with_contributions:q.value_without_contributions)]})),[j,$,l]),O=x.useMemo(()=>[...j].sort((y,q)=>$==="with"?q.with_contributions.final_value-y.with_contributions.final_value:q.without_contributions.final_value-y.without_contributions.final_value).map(y=>{const q=y.without_contributions,F=y.with_contributions;return $==="with"?{id:y.id,label:y.name,color:$p(y.id),value:F.final_value,invested:F.total_invested,valueLabel:dt(F.final_value),caption:`Investido ${dt(F.total_invested)} · ganho ${dt(F.gain)} · ${at(F.annual_irr_pct)} a.a.`}:{id:y.id,label:y.name,color:$p(y.id),value:q.final_value,valueLabel:dt(q.final_value),caption:`${q.multiple.toLocaleString("pt-BR")}x · ${at(q.cagr_pct)} a.a. (${at(q.real_cagr_pct,!0)} acima da inflação)`}}),[j,$]);if(u&&!l)return e.jsxs(Xe,{children:[e.jsx(rt,{}),e.jsx("p",{children:"Simulando décadas de mercado..."})]});const ae=j.find(y=>y.id===S)??j[0],J=(l==null?void 0:l.parameters.initial_amount)??0,I=l==null?void 0:l.portfolio,ce=I?$==="with"?I.with_contributions.final_value:I.without_contributions.final_value:0,C=I?I.preserved_purchasing_power:!0;return e.jsxs(Hf,{children:[e.jsxs(Tt,{children:[e.jsxs("div",{children:[e.jsxs(Fe,{children:[e.jsx(pk,{size:19}),"Simulação histórica"]}),e.jsx(Ht,{children:"Veja quanto um valor investido no passado teria hoje em cada opção, com e sem aportes mensais."})]}),e.jsxs(Vf,{onSubmit:N,children:[e.jsxs(X,{htmlFor:"bt-valor",children:["Valor inicial",e.jsx("input",{id:"bt-valor",type:"text",inputMode:"numeric",autoComplete:"off",placeholder:"R$ 0,00",value:a.valor,onChange:y=>s(q=>({...q,valor:_i(y.target.value)}))})]}),e.jsxs(X,{htmlFor:"bt-anos",children:["Quantos anos atrás",e.jsx("input",{id:"bt-anos",type:"number",min:"1",max:t,step:"1",value:a.anos,onChange:y=>s(q=>({...q,anos:y.target.value}))})]}),e.jsxs(X,{htmlFor:"bt-aporte",children:["Aporte mensal",e.jsx("input",{id:"bt-aporte",type:"text",inputMode:"numeric",autoComplete:"off",placeholder:"R$ 0,00",value:a.aporte,onChange:y=>s(q=>({...q,aporte:_i(y.target.value)}))})]}),e.jsxs(X,{htmlFor:"bt-perfil",children:["Perfil da carteira",e.jsx("select",{id:"bt-perfil",value:a.perfil,onChange:y=>s(q=>({...q,perfil:y.target.value})),children:e6.map(y=>e.jsx("option",{value:y.id,children:y.label},y.id))})]}),e.jsx(pe,{type:"submit",$variant:"primary",disabled:u,children:u?"Simulando...":"Simular"}),e.jsxs(I$,{children:[e.jsx("input",{type:"checkbox",checked:a.ipca,onChange:y=>s(q=>({...q,ipca:y.target.checked}))}),"Corrigir o aporte pela inflação (IPCA)"]})]}),f&&e.jsx(en,{role:"alert",style:{color:"var(--error)",fontSize:12},children:f})]}),l&&I&&e.jsxs(e.Fragment,{children:[e.jsxs(Tt,{style:{opacity:u?.6:1},children:[e.jsxs(Mc,{children:[e.jsxs(Sr,{children:[e.jsx("small",{children:"Período"}),e.jsxs("strong",{children:[l.parameters.start_year," → hoje"]}),e.jsxs("span",{children:[is(l.parameters.period.start)," a ",is(l.parameters.period.end)," · ",l.parameters.period.years.toLocaleString("pt-BR")," anos"]})]}),e.jsxs(Sr,{$tone:"bad",children:[e.jsx("small",{children:"Inflação (IPCA)"}),e.jsx("strong",{children:at(l.inflation.ipca_accumulated_pct)}),e.jsxs("span",{children:[at(l.inflation.ipca_average_annual_pct)," ao ano em média"]})]}),e.jsxs(Sr,{children:[e.jsx("small",{children:"Para manter o poder de compra"}),e.jsx("strong",{children:dt(l.inflation.initial_amount_corrected_to_today)}),e.jsxs("span",{children:[dt(J)," de ",l.parameters.start_year," precisariam valer isso hoje"]})]}),e.jsxs(Sr,{$tone:C?"good":"bad",children:[e.jsxs("small",{children:["Carteira ",l.parameters.profile]}),e.jsx("strong",{children:dt(ce)}),e.jsx("span",{children:$==="with"?`${dt(I.with_contributions.total_invested)} investidos`:`${I.without_contributions.multiple.toLocaleString("pt-BR")}x o valor inicial`})]})]}),e.jsx(t6,{children:l.highlights.map(y=>e.jsx("li",{children:y},y))})]}),e.jsxs(Tt,{style:{opacity:u?.6:1},children:[e.jsxs(df,{children:[e.jsxs("div",{children:[e.jsx(Fe,{children:"Evolução do patrimônio"}),e.jsx(Ht,{children:"Passe o mouse sobre o gráfico para comparar. Clique na legenda para esconder ou mostrar uma opção."})]}),V&&e.jsxs(r6,{role:"group","aria-label":"Cenário",children:[e.jsx(yv,{type:"button",$active:$==="without",onClick:()=>b("without"),children:"Sem aportes"}),e.jsx(yv,{type:"button",$active:$==="with",onClick:()=>b("with"),children:"Com aportes"})]})]}),e.jsx(H$,{labels:["Início",...I.yearly.map(y=>y.partial?`${y.year}*`:String(y.year))],series:A,formatValue:dt,formatAxis:yc,referenceLine:$==="without"?{value:l.inflation.initial_amount_corrected_to_today,label:"Linha da inflação (IPCA)"}:void 0,ariaLabel:"Evolução do patrimônio ao longo dos anos"}),$==="without"&&e.jsx(en,{children:"Quem termina abaixo da linha vermelha perdeu poder de compra. * ano parcial."})]}),e.jsxs(Tt,{style:{opacity:u?.6:1},children:[e.jsxs("div",{children:[e.jsx(Fe,{children:"Quanto cada opção rendeu"}),e.jsx(Ht,{children:$==="with"?"A parte escura da barra é o que você aportou; o restante é ganho.":`Resultado final de ${dt(J)} investidos em ${l.parameters.start_year}, do melhor para o pior.`})]}),e.jsx(vi,{items:O})]}),e.jsxs(Tt,{style:{opacity:u?.6:1},children:[e.jsxs(df,{children:[e.jsxs("div",{children:[e.jsx(Fe,{children:"Retorno ano a ano"}),e.jsx(Ht,{children:"Verde: ano positivo. Vermelho: ano negativo."})]}),e.jsx("select",{"aria-label":"Opção",value:ae==null?void 0:ae.id,onChange:y=>_(y.target.value),children:j.map(y=>e.jsx("option",{value:y.id,children:y.name},y.id))})]}),ae&&e.jsx(Wf,{items:ae.yearly.map(y=>({id:String(y.year),label:`${String(y.year).slice(2)}${y.partial?"*":""}`,value:y.return_pct})),formatValue:y=>at(y,!0),ariaLabel:`Retorno anual de ${ae.name}`})]}),e.jsxs(Tt,{style:{opacity:u?.6:1},children:[e.jsxs("div",{children:[e.jsx(Fe,{children:"Pior queda de cada opção"}),e.jsx(Ht,{children:"Maior perda do topo até o fundo. Quanto menor a barra vermelha, mais tranquilo foi o caminho."})]}),e.jsx(Fc,{items:[...j].sort((y,q)=>y.without_contributions.max_drawdown_pct-q.without_contributions.max_drawdown_pct).map(y=>({id:y.id,label:y.name,value:y.without_contributions.max_drawdown_pct})),formatValue:y=>at(y)}),I.without_contributions.peak&&I.without_contributions.trough&&e.jsxs(en,{children:["A carteira caiu entre ",is(I.without_contributions.peak)," e ",is(I.without_contributions.trough),I.without_contributions.months_to_recover!==null?` e levou ${I.without_contributions.months_to_recover} meses para recuperar.`:" e ainda não recuperou o topo anterior."]})]}),l.crises.length>0&&e.jsxs(Tt,{style:{opacity:u?.6:1},children:[e.jsxs("div",{children:[e.jsx(Fe,{children:"Como cada opção se saiu nas crises"}),e.jsx(Ht,{children:"Retorno durante cada período de estresse do mercado."})]}),e.jsx(n6,{children:l.crises.map(y=>e.jsxs(a6,{children:[e.jsxs("div",{children:[e.jsx("h3",{children:y.name}),e.jsxs("small",{children:[is(y.period.start)," a ",is(y.period.end)," · inflação ",at(y.inflation_pct)]})]}),e.jsx(Fc,{items:y.results.map(q=>({id:q.id,label:q.name,value:q.return_pct})),formatValue:q=>at(q,!0)})]},y.id))})]}),e.jsxs(Tt,{style:{opacity:u?.6:1},children:[e.jsxs("div",{children:[e.jsx(Fe,{children:"Resumo por opção"}),e.jsx(Ht,{children:"A nota considera quanto a opção rendeu acima da inflação."})]}),e.jsx(Tc,{children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Opção"}),e.jsx("th",{children:"Nota"}),e.jsx("th",{children:"Ao ano"}),e.jsx("th",{children:"Acima da inflação"}),e.jsx("th",{children:"Oscilação"}),e.jsx("th",{children:"Anos negativos"})]})}),e.jsx("tbody",{children:j.map(y=>e.jsxs("tr",{children:[e.jsx("td",{children:y.name}),e.jsx("td",{children:e.jsx(Sy,{$color:Er[y.rating].color,children:y.rating_label})}),e.jsx("td",{children:at(y.without_contributions.cagr_pct)}),e.jsx("td",{style:{color:y.without_contributions.real_cagr_pct>=0?"var(--success)":"var(--error)"},children:at(y.without_contributions.real_cagr_pct,!0)}),e.jsx("td",{children:at(y.without_contributions.annual_volatility_pct)}),e.jsx("td",{children:y.without_contributions.negative_years})]},y.id))})]})}),l.unavailable.length>0&&e.jsxs(en,{children:["Fora da comparação: ",l.unavailable.map(y=>`${y.id} (${y.reason})`).join("; "),"."]}),e.jsx(en,{children:l.disclaimer})]})]})]})}function Gf(t,a,s){var l,c,u;if($t.isAxiosError(t)){const m=(c=(l=t.response)==null?void 0:l.data)==null?void 0:c.error;return((u=t.response)==null?void 0:u.status)===404&&(!m||/^rota n/i.test(m))?s:m||a}return t instanceof Error?t.message:a}const o6=/^[A-Z]{4}1[0-9]$/,Jr=new Intl.NumberFormat("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2}),l6=h.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
  li { padding: 8px 12px; border: 1px solid color-mix(in srgb, var(--success) 35%, var(--border)); border-radius: var(--radius-md); background: color-mix(in srgb, var(--success) 7%, var(--surface-raised)); color: var(--text); font-size: 12px; }
  small { display: block; color: var(--muted); font-size: 10px; font-weight: 800; letter-spacing: .06em; text-transform: uppercase; }
  strong { font-size: 14px; }
`,c6=h.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 12px;
`,d6=h.article`
  display: grid;
  gap: 8px;
  align-content: start;
  padding: 14px 16px;
  border: 1px solid color-mix(in srgb, ${({$color:t})=>t} 35%, var(--border));
  border-left: 5px solid ${({$color:t})=>t};
  border-radius: var(--radius-md);
  background: color-mix(in srgb, ${({$color:t})=>t} 6%, var(--surface-raised));
  header { display: flex; align-items: flex-start; justify-content: space-between; gap: 8px; }
  h3 { margin: 0; color: var(--text); font-size: 14px; }
  small { color: var(--muted); font-size: 11px; }
  ul { margin: 0; padding-left: 16px; color: var(--muted); font-size: 12px; line-height: 1.5; }
`;function yn(t,a){return t==null?"—":a(t)}function u6(t){return[...new Set(t.split(/[\s,;]+/).map(a=>a.trim().toUpperCase()).filter(Boolean))]}function jv(t){return t.fund_age_years??t.listed_age_years}function p6(t){return Gf(t,"Não foi possível comparar os fundos.","A comparação de FIIs ainda não está disponível no servidor.")}function f6(){const[t,a]=x.useState({tickers:"",anos:"5",valor:Ha(1e5)}),[s,l]=x.useState({tickers:[],anos:5,valor:1e5}),[c,u]=x.useState(),[m,f]=x.useState(!0),[g,w]=x.useState(""),[b,S]=x.useState(""),[_,R]=x.useState("total");x.useEffect(()=>{let C=!0;return f(!0),w(""),u2(s).then(y=>{C&&(u(y),S(q=>{var F;return y.funds.some(fe=>fe.ticker===q)?q:((F=y.funds[0])==null?void 0:F.ticker)??""}))}).catch(y=>{C&&w(p6(y))}).finally(()=>{C&&f(!1)}),()=>{C=!1}},[s]);function M(C){C.preventDefault();const y=u6(t.tickers),q=Number(t.anos),F=Va(t.valor),fe=y.filter(ge=>!o6.test(ge));if(fe.length){w(`Ticker inválido: ${fe.join(", ")}. Use o formato HGLG11.`);return}if(y.length>12){w("Compare no máximo 12 fundos por vez.");return}if(!Number.isInteger(q)||q<1||q>10){w("Informe de 1 a 10 anos.");return}if(!(F>0)){w("Informe um valor maior que zero.");return}l({tickers:y,anos:q,valor:F})}const N=x.useMemo(()=>(c==null?void 0:c.funds)??[],[c]),V=N.find(C=>C.ticker===b)??N[0],$=x.useMemo(()=>N.map(C=>({id:C.ticker,label:C.ticker,value:C.score,color:Er[C.rating].color,valueLabel:`${C.score}/100 · ${C.rating_label}`,caption:`${C.segment??"Segmento não informado"} · ${Jr.format(jv(C))} anos de história`})),[N]),j=x.useMemo(()=>{var ge;const C=N.filter(Ne=>Ne.simulation),y=(ge=C[0])==null?void 0:ge.simulation;if(!y)return[];const q=y.initial_amount,F=y.cdi_final_value,fe=C.map(Ne=>({id:Ne.ticker,label:Ne.ticker,value:Ne.simulation.fii_final_value,color:F===null||Ne.simulation.fii_final_value>=F?"var(--success)":"var(--warning)",valueLabel:dt(Ne.simulation.fii_final_value),caption:`${Jr.format(Ne.simulation.fii_final_value/q)}x o valor investido`}));return y.cdi_final_value!==null&&fe.push({id:"__cdi",label:"CDI (referência)",value:y.cdi_final_value,color:"#64748b",valueLabel:dt(y.cdi_final_value),caption:"Renda fixa de referência no mesmo período"}),y.inflation_corrected_amount!==null&&fe.push({id:"__ipca",label:"Só a inflação (IPCA)",value:y.inflation_corrected_amount,color:"#dc2626",valueLabel:dt(y.inflation_corrected_amount),caption:"Quanto o valor precisaria para manter o poder de compra"}),fe.sort((Ne,K)=>K.value-Ne.value)},[N]),A=x.useMemo(()=>[...N].filter(C=>C.distributions.dividend_yield_12m_pct!==null).sort((C,y)=>(y.distributions.dividend_yield_12m_pct??0)-(C.distributions.dividend_yield_12m_pct??0)).map(C=>({id:C.ticker,label:C.ticker,value:C.distributions.dividend_yield_12m_pct??0,color:"var(--primary)",valueLabel:at(C.distributions.dividend_yield_12m_pct??0),caption:`Média de 5 anos: ${yn(C.distributions.average_dividend_yield_5y_pct,y=>at(y))} · pagou em ${yn(C.distributions.months_paid_pct,y=>`${Math.round(y)}%`)} dos meses · R$ ${Jr.format(C.distributions.last_12m_per_share)} por cota`})),[N]),O=x.useMemo(()=>[...N].sort((C,y)=>C.market.p_vp-y.market.p_vp).map(C=>({id:C.ticker,label:C.ticker,value:C.market.p_vp,color:C.market.p_vp<=1?"var(--success)":C.market.p_vp<=1.1?"var(--primary)":"var(--warning)",valueLabel:Jr.format(C.market.p_vp),caption:`Mediana de 5 anos: ${yn(C.market.p_vp_median_5y,y=>Jr.format(y))}${C.market.p_vp_vs_median_pct===null?"":` · ${C.market.p_vp_vs_median_pct<=0?"desconto":"prêmio"} de ${at(Math.abs(C.market.p_vp_vs_median_pct))} sobre a mediana`}`})),[N]),ae=x.useMemo(()=>[...N].filter(C=>{var y;return((y=C.common_window)==null?void 0:y.max_drawdown_pct)!==null&&C.common_window!==null}).sort((C,y)=>(C.common_window.max_drawdown_pct??0)-(y.common_window.max_drawdown_pct??0)).map(C=>({id:C.ticker,label:C.ticker,value:C.common_window.max_drawdown_pct??0})),[N]);if(m&&!c)return e.jsxs(Xe,{children:[e.jsx(rt,{}),e.jsx("p",{children:"Analisando os fundos (a primeira consulta pode levar cerca de 10 segundos)..."})]});const J=c==null?void 0:c.comparison,I=c==null?void 0:c.leaders,ce=I?[{label:"Melhor retorno",ticker:I.best_total_return},{label:"Maior dividend yield",ticker:I.highest_dividend_yield},{label:"Menor queda",ticker:I.lowest_drawdown},{label:"Menor P/VP",ticker:I.cheapest_p_vp}].filter(C=>C.ticker):[];return e.jsxs(Hf,{children:[e.jsxs(Tt,{children:[e.jsxs("div",{children:[e.jsxs(Fe,{children:[e.jsx(dk,{size:19}),"Comparar fundos imobiliários"]}),e.jsx(Ht,{children:"Compare FIIs com o mesmo período, com proventos reinvestidos. Deixe os tickers em branco para comparar 8 fundos populares."})]}),e.jsxs(Vf,{onSubmit:M,$columns:3,children:[e.jsxs(X,{htmlFor:"fii-tickers",children:["Tickers (até 12)",e.jsx("input",{id:"fii-tickers",type:"text",autoComplete:"off",placeholder:"HGLG11, KNRI11, MXRF11",value:t.tickers,onChange:C=>a(y=>({...y,tickers:C.target.value}))})]}),e.jsxs(X,{htmlFor:"fii-anos",children:["Anos de comparação",e.jsx("input",{id:"fii-anos",type:"number",min:"1",max:"10",step:"1",value:t.anos,onChange:C=>a(y=>({...y,anos:C.target.value}))})]}),e.jsxs(X,{htmlFor:"fii-valor",children:["Valor simulado",e.jsx("input",{id:"fii-valor",type:"text",inputMode:"numeric",autoComplete:"off",placeholder:"R$ 0,00",value:t.valor,onChange:C=>a(y=>({...y,valor:_i(C.target.value)}))})]}),e.jsx(pe,{type:"submit",$variant:"primary",disabled:m,children:m?"Comparando...":"Comparar"})]}),g&&e.jsx(en,{role:"alert",style:{color:"var(--error)",fontSize:12},children:g})]}),c&&J&&V&&e.jsxs(e.Fragment,{children:[e.jsxs(Tt,{style:{opacity:m?.6:1},children:[e.jsxs(Mc,{children:[e.jsxs(Sr,{children:[e.jsx("small",{children:"Período comparado"}),e.jsxs("strong",{children:[Jr.format(J.window_years)," anos"]}),e.jsx("span",{children:J.limited_by_youngest_fund?`Limitado pelo fundo mais novo (${J.youngest}); pedido: ${J.requested_years} anos`:"Mesma janela para todos os fundos"})]}),e.jsxs(Sr,{children:[e.jsx("small",{children:"Idade média"}),e.jsxs("strong",{children:[Jr.format(J.average_age_years)," anos"]}),e.jsx("span",{children:"Desde o início de cada fundo"})]}),e.jsxs(Sr,{children:[e.jsx("small",{children:"Mais antigo"}),e.jsx("strong",{children:J.oldest??"—"}),e.jsx("span",{children:"Maior tempo de história"})]}),e.jsxs(Sr,{children:[e.jsx("small",{children:"Mais novo"}),e.jsx("strong",{children:J.youngest??"—"}),e.jsx("span",{children:"Menor tempo de história"})]})]}),ce.length>0&&e.jsx(l6,{children:ce.map(C=>e.jsxs("li",{children:[e.jsx("small",{children:C.label}),e.jsx("strong",{children:C.ticker})]},C.label))})]}),e.jsxs(Tt,{style:{opacity:m?.6:1},children:[e.jsxs("div",{children:[e.jsx(Fe,{children:"Ranking por nota"}),e.jsx(Ht,{children:"Nota de 0 a 100 que combina retorno acima do CDI, queda máxima, regularidade dos proventos, P/VP e tempo de história."})]}),e.jsx(vi,{items:$,max:100})]}),j.length>0&&e.jsxs(Tt,{style:{opacity:m?.6:1},children:[e.jsxs("div",{children:[e.jsx(Fe,{children:"Quanto você teria hoje"}),e.jsxs(Ht,{children:[dt(s.valor)," investidos há ",Jr.format(J.window_years)," anos, com proventos reinvestidos e sem impostos. Verde: ganhou do CDI. Amarelo: perdeu para o CDI. A barra vermelha é só a inflação."]})]}),e.jsx(vi,{items:j})]}),e.jsxs(Tt,{style:{opacity:m?.6:1},children:[e.jsxs("div",{children:[e.jsx(Fe,{children:"Dividend yield (12 meses)"}),e.jsx(Ht,{children:"Proventos pagos nos últimos 12 meses sobre o preço atual da cota."})]}),e.jsx(vi,{items:A})]}),e.jsxs(Tt,{style:{opacity:m?.6:1},children:[e.jsxs("div",{children:[e.jsx(Fe,{children:"P/VP: preço frente ao patrimônio"}),e.jsx(Ht,{children:"Abaixo de 1 a cota custa menos que o patrimônio por cota (verde); bem acima de 1 indica prêmio (amarelo)."})]}),e.jsx(vi,{items:O})]}),ae.length>0&&e.jsxs(Tt,{style:{opacity:m?.6:1},children:[e.jsxs("div",{children:[e.jsx(Fe,{children:"Maior queda no período"}),e.jsx(Ht,{children:"Pior perda do topo ao fundo, contando preço e proventos. Barra menor significa caminho mais tranquilo."})]}),e.jsx(Fc,{items:ae,formatValue:C=>at(C)})]}),e.jsxs(Tt,{style:{opacity:m?.6:1},children:[e.jsxs(df,{children:[e.jsxs("div",{children:[e.jsx(Fe,{children:"Histórico ano a ano"}),e.jsx(Ht,{children:"Verde: ano positivo. Vermelho: ano negativo. * ano parcial."})]}),e.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:[e.jsx("select",{"aria-label":"Fundo",value:V.ticker,onChange:C=>S(C.target.value),children:N.map(C=>e.jsx("option",{value:C.ticker,children:C.ticker},C.ticker))}),e.jsxs("select",{"aria-label":"Métrica",value:_,onChange:C=>R(C.target.value),children:[e.jsx("option",{value:"total",children:"Retorno total"}),e.jsx("option",{value:"yield",children:"Dividend yield"})]})]})]}),e.jsx(Wf,{items:V.yearly_history.map(C=>({id:String(C.year),label:`${String(C.year).slice(2)}${C.partial?"*":""}`,value:(_==="total"?C.total_return_pct:C.dividend_yield_on_start_price_pct)??0})),formatValue:C=>at(C,_==="total"),ariaLabel:`${_==="total"?"Retorno total":"Dividend yield"} anual de ${V.ticker}`})]}),e.jsxs(Tt,{style:{opacity:m?.6:1},children:[e.jsxs("div",{children:[e.jsx(Fe,{children:"Comparativo detalhado"}),e.jsx(Ht,{children:"Rentabilidade, risco, idade, patrimônio e proventos calculados no período. A vacância não está disponível na base padronizada consultada e não entra na nota."})]}),e.jsx(Tc,{children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Fundo"}),e.jsx("th",{children:"Nota"}),e.jsx("th",{children:"Segmento"}),e.jsx("th",{children:"Idade"}),e.jsx("th",{children:"Yield 12m"}),e.jsx("th",{children:"P/VP"}),e.jsx("th",{children:"Ao ano"}),e.jsx("th",{children:"Vs. CDI"}),e.jsx("th",{children:"Oscilação"}),e.jsx("th",{children:"Queda máx."}),e.jsx("th",{children:"Meses pagos"}),e.jsx("th",{children:"Variação proventos"}),e.jsx("th",{children:"Patrimônio"}),e.jsx("th",{children:"Cotistas"})]})}),e.jsx("tbody",{children:N.map(C=>{const y=C.common_window;return e.jsxs("tr",{children:[e.jsx("td",{title:C.name,children:C.ticker}),e.jsx("td",{children:e.jsx(gs,{label:`${C.score} · ${C.rating_label}`,color:Er[C.rating].color,details:[...C.reasons,`Valor patrimonial por cota: ${dt(C.market.vp_per_share)}.`,`P/VP atual: ${Jr.format(C.market.p_vp)}.`,`Patrimônio líquido atual: ${C.equity.net_assets===null?"indisponível":yc(C.equity.net_assets)}.`,"Vacância: não disponível nos dados padronizados consultados; não foi estimada nem pontuada."]})}),e.jsx("td",{children:C.segment??"—"}),e.jsxs("td",{children:[Jr.format(jv(C))," anos"]}),e.jsx("td",{children:yn(C.distributions.dividend_yield_12m_pct,q=>at(q))}),e.jsx("td",{children:Jr.format(C.market.p_vp)}),e.jsx("td",{children:yn(y==null?void 0:y.total_cagr_pct,q=>at(q))}),e.jsx("td",{style:{color:((y==null?void 0:y.excess_over_cdi_pp)??0)>=0?"var(--success)":"var(--error)"},children:yn(y==null?void 0:y.excess_over_cdi_pp,q=>`${q>0?"+":""}${Jr.format(q)} p.p.`)}),e.jsx("td",{children:yn(y==null?void 0:y.annual_volatility_pct,q=>at(q))}),e.jsx("td",{children:yn(y==null?void 0:y.max_drawdown_pct,q=>at(q))}),e.jsx("td",{children:yn(C.distributions.months_paid_pct,q=>`${Math.round(q)}%`)}),e.jsx("td",{children:yn(C.distributions.variation_coefficient_24m,q=>at(q*100))}),e.jsx("td",{children:yn(C.equity.net_assets,q=>yc(q))}),e.jsx("td",{children:yn(C.equity.holders,q=>q.toLocaleString("pt-BR"))})]},C.ticker)})})]})})]}),e.jsxs(Tt,{style:{opacity:m?.6:1},children:[e.jsxs("div",{children:[e.jsx(Fe,{children:"Por que cada nota"}),e.jsx(Ht,{children:"Nota baseada em retorno total contra CDI (até 25 pontos), queda máxima (10), volatilidade (5), regularidade dos pagamentos (até ±8), variação dos proventos em 24 meses (±4), crescimento dos proventos em 3 anos (até +6), P/VP (até 0,90: +6; até 1,05: +3; acima de 1,15: -6), idade (menos de 3 anos: -6; 5 anos ou mais: +3; 10 anos ou mais: +6) e patrimônio líquido (de -8 a +5: abaixo de R$ 100 mi = -8; R$ 100–300 mi = -3; R$ 300 mi a menos de R$ 1 bi = +2; R$ 1 bi ou mais = +5). Vacância não está disponível na base padronizada consultada e não é pontuada."})]}),e.jsx(c6,{children:N.map(C=>e.jsxs(d6,{$color:Er[C.rating].color,children:[e.jsxs("header",{children:[e.jsxs("div",{children:[e.jsx("h3",{children:C.ticker}),e.jsx("small",{children:C.name})]}),e.jsx(gs,{label:`${C.score} · ${C.rating_label}`,color:Er[C.rating].color,details:[...C.reasons,`Valor patrimonial por cota: ${dt(C.market.vp_per_share)}.`,`P/VP atual: ${Jr.format(C.market.p_vp)}.`,`Patrimônio líquido atual: ${C.equity.net_assets===null?"indisponível":yc(C.equity.net_assets)}.`,"Vacância: não disponível nos dados padronizados consultados; não foi estimada nem pontuada."]})]}),e.jsx("ul",{children:C.reasons.map(y=>e.jsx("li",{children:y},y))})]},C.ticker))}),c.not_found.length>0&&e.jsxs(en,{children:["Não analisados: ",c.not_found.map(C=>`${C.ticker} (${C.reason})`).join("; "),"."]}),e.jsx(en,{children:c.disclaimer})]})]})]})}const h6=[{id:"conservador",label:"Conservador"},{id:"moderado",label:"Moderado"},{id:"arrojado",label:"Arrojado"}],uf={vender:{label:"Vender",color:"var(--error)"},reduzir:{label:"Reduzir 50%",color:"var(--warning)"},manter:{label:"Manter",color:"var(--success)"},sem_dados:{label:"Sem dados",color:"var(--muted)"}},bv={renda_fixa:{label:"Renda fixa",color:"#2563eb"},fiis:{label:"FIIs",color:"#d97706"},acoes:{label:"Ações",color:"#16a34a"},outros:{label:"Outros",color:"#8b5cf6"}},wv={cdb:"CDB",lci_lca:"LCI/LCA",tesouro_selic:"Tesouro Selic"},va=new Intl.NumberFormat("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2}),m6=h.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
  gap: 12px;
`,x6=h.article`
  display: grid;
  gap: 10px;
  align-content: start;
  padding: 14px 16px;
  border: 1px solid color-mix(in srgb, ${({$color:t})=>t} 35%, var(--border));
  border-left: 5px solid ${({$color:t})=>t};
  border-radius: var(--radius-md);
  background: color-mix(in srgb, ${({$color:t})=>t} 6%, var(--surface-raised));
  header { display: flex; align-items: flex-start; justify-content: space-between; gap: 8px; }
  h3 { margin: 0; color: var(--text); font-size: 15px; }
  small { color: var(--muted); font-size: 11px; }
  dl { display: grid; gap: 5px; margin: 0; }
  dl > div { display: flex; justify-content: space-between; gap: 8px; font-size: 12px; }
  dt { color: var(--muted); }
  dd { margin: 0; color: var(--text); font-variant-numeric: tabular-nums; font-weight: 650; text-align: right; }
  ul { margin: 0; padding-left: 16px; color: var(--muted); font-size: 12px; line-height: 1.5; }
`,g6=h.div`
  display: grid;
  gap: 4px;
  font-size: 11px;
  color: var(--muted);
  div { height: 6px; overflow: hidden; border-radius: 999px; background: var(--border); }
  div::after { content: ''; display: block; width: ${({$value:t})=>Math.min(100,Math.max(0,t))}%; height: 100%; background: ${({$color:t})=>t}; }
`,v6=h.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
`;function y6(t){return Gf(t,"Não foi possível analisar a carteira.","A análise de carteira ainda não está disponível no servidor.")}function _v(t){return t%12===0?t===12?"1 ano":`${t/12} anos`:`${t} meses`}function j6({position:t,bestRate:a}){const s=uf[t.recommendation],l=t.quality_score===null?void 0:q1(t.quality_score),c=l?Uf("fiis",l,"fii_fundamentals"):void 0,u=t.dividend_yield_12m_pct===null?null:t.dividend_yield_12m_pct-a;return e.jsxs(x6,{$color:s.color,children:[e.jsxs("header",{children:[e.jsxs("div",{children:[e.jsx("h3",{children:t.ticker}),t.name&&e.jsx("small",{children:t.name})]}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"flex-end",gap:6},children:[e.jsx(Sy,{$color:s.color,children:s.label}),c&&e.jsx(gs,{label:c.label,color:c.color,details:[`Nota ${t.quality_score}/100 · classificação: ${l?Er[l].label:"indisponível"}.`,...t.quality_reasons??["Fatores detalhados não disponíveis."],`Patrimônio líquido: ${t.net_assets==null?"indisponível":dt(t.net_assets)}.`,`Valor patrimonial por cota: ${t.vp_per_share==null?"indisponível":dt(t.vp_per_share)}.`,"Vacância: não disponível nos dados padronizados consultados; não foi estimada nem pontuada."]})]})]}),t.sell_score!==null&&e.jsxs(g6,{$value:t.sell_score,$color:s.color,children:[e.jsxs("span",{children:["Nota de venda ",t.sell_score,"/100 (quanto maior, mais motivos para vender)"]}),e.jsx("div",{})]}),e.jsxs("dl",{children:[e.jsxs("div",{children:[e.jsx("dt",{children:"Valor na carteira"}),e.jsxs("dd",{children:[dt(t.market_value)," (",at(t.weight_pct),")"]})]}),e.jsxs("div",{children:[e.jsx("dt",{children:"Dividend yield 12m"}),e.jsxs("dd",{children:[t.dividend_yield_12m_pct===null?"—":at(t.dividend_yield_12m_pct),u!==null&&e.jsxs("small",{style:{color:u>=0?"var(--success)":"var(--error)"},children:[" (",u>=0?"+":"",va.format(u)," p.p. vs renda fixa)"]})]})]}),t.p_vp!==void 0&&e.jsxs("div",{children:[e.jsx("dt",{children:"P/VP"}),e.jsx("dd",{children:va.format(t.p_vp)})]}),t.quality_score!==null&&e.jsxs("div",{children:[e.jsx("dt",{children:"Indicadores do FII"}),e.jsxs("dd",{children:[t.quality_score,"/100 · ",l?Er[l].label:t.quality_rating]})]}),t.fund_age_years!=null&&e.jsxs("div",{children:[e.jsx("dt",{children:"Idade do fundo"}),e.jsxs("dd",{children:[va.format(t.fund_age_years)," anos"]})]}),t.net_assets!=null&&e.jsxs("div",{children:[e.jsx("dt",{children:"Patrimônio líquido"}),e.jsx("dd",{children:dt(t.net_assets)})]}),t.vp_per_share!=null&&e.jsxs("div",{children:[e.jsx("dt",{children:"Valor patrimonial por cota"}),e.jsx("dd",{children:dt(t.vp_per_share)})]}),t.months_paid_pct!=null&&e.jsxs("div",{children:[e.jsx("dt",{children:"Meses com proventos"}),e.jsx("dd",{children:at(t.months_paid_pct)})]}),t.variation_coefficient_24m!=null&&e.jsxs("div",{children:[e.jsx("dt",{children:"Variação dos proventos (24m)"}),e.jsx("dd",{children:at(t.variation_coefficient_24m*100)})]}),t.excess_over_cdi_pp!=null&&e.jsxs("div",{children:[e.jsx("dt",{children:"Retorno vs. CDI"}),e.jsxs("dd",{children:[t.excess_over_cdi_pp>0?"+":"",va.format(t.excess_over_cdi_pp)," p.p."]})]}),t.annual_volatility_pct!=null&&e.jsxs("div",{children:[e.jsx("dt",{children:"Volatilidade anual"}),e.jsx("dd",{children:at(t.annual_volatility_pct)})]}),t.max_drawdown_pct!=null&&e.jsxs("div",{children:[e.jsx("dt",{children:"Queda máxima histórica"}),e.jsx("dd",{children:at(t.max_drawdown_pct)})]}),e.jsxs("div",{children:[e.jsx("dt",{children:"Vacância"}),e.jsx("dd",{children:"Sem dado padronizado"})]}),e.jsxs("div",{children:[e.jsx("dt",{children:"Ganho ou perda"}),e.jsx("dd",{style:{color:t.gain===null?void 0:t.gain>=0?"var(--success)":"var(--error)"},children:t.gain===null?"preço médio não informado":dt(t.gain)})]}),e.jsxs("div",{children:[e.jsx("dt",{children:"Imposto se vender tudo"}),e.jsx("dd",{children:t.cost_basis_missing?"—":dt(t.estimated_sale_tax)})]})]}),t.quality_reasons&&t.quality_reasons.length>0&&e.jsx("ul",{children:t.quality_reasons.map((m,f)=>e.jsx("li",{children:m},`quality-${f}`))}),e.jsx("ul",{children:t.reasons.map((m,f)=>e.jsx("li",{children:m},`recommendation-${f}`))})]})}function b6(){var C;const[t,a]=x.useState({perfil:"moderado",meta:"",prazo:"24",cdb:"100",lci:"90",anos:"5"}),[s,l]=x.useState({perfil:"moderado",anos:5,prazo_meses:24,cdi_percent:100,lci_percent:90}),[c,u]=x.useState(),[m,f]=x.useState(!0),[g,w]=x.useState(""),[b,S]=x.useState(),[_,R]=x.useState(!1),[M,N]=x.useState("");x.useEffect(()=>{let y=!0;return f(!0),w(""),S(void 0),N(""),V1(s).then(q=>{y&&u(q)}).catch(q=>{y&&(w(y6(q)),u(void 0))}).finally(()=>{y&&f(!1)}),()=>{y=!1}},[s]);function V(y){y.preventDefault();const q=Number(t.anos),F=Number(t.prazo),fe=Number(t.cdb),ge=Number(t.lci),Ne=t.meta.trim()===""?void 0:Number(t.meta);if(!Number.isInteger(q)||q<1||q>10){w("Informe de 1 a 10 anos de análise.");return}if(!Number.isInteger(F)||F<1||F>120){w("O prazo deve ficar entre 1 e 120 meses.");return}if(!(fe>=50&&fe<=200)){w("O CDB deve render de 50% a 200% do CDI.");return}if(!(ge>=50&&ge<=150)){w("A LCI/LCA deve render de 50% a 150% do CDI.");return}if(Ne!==void 0&&!(Ne>=0&&Ne<=100)){w("A meta de renda fixa deve ficar entre 0% e 100%.");return}l({perfil:t.perfil,anos:q,prazo_meses:F,cdi_percent:fe,lci_percent:ge,meta_renda_fixa:Ne})}async function $(){if(c!=null&&c.sell_plan.sales.length){R(!0),N("");try{S(await p2(s,c.sell_plan.sales.map(y=>({ticker:y.ticker,sell_pct:y.sell_pct}))))}catch(y){N(Gf(y,"Não foi possível simular a troca.","A simulação de troca ainda não está disponível no servidor."))}finally{R(!1)}}}const j=c==null?void 0:c.fixed_income.products.find(y=>y.id===c.fixed_income.best_net_option),A=(j==null?void 0:j.net_annual_pct)??0,O=x.useMemo(()=>Object.entries((c==null?void 0:c.portfolio.allocation_pct)??{}).filter(([,y])=>y>0).map(([y,q])=>{var F,fe;return{id:y,label:((F=bv[y])==null?void 0:F.label)??y,value:q,valueLabel:at(q),color:((fe=bv[y])==null?void 0:fe.color)??"var(--primary)"}}),[c]),ae=x.useMemo(()=>{if(!c)return[];const y=c.positions.filter(q=>q.dividend_yield_12m_pct!==null).map(q=>({id:q.ticker,label:q.ticker,value:q.dividend_yield_12m_pct??0,color:uf[q.recommendation].color,valueLabel:at(q.dividend_yield_12m_pct??0),caption:uf[q.recommendation].label}));return j&&y.push({id:"__rf",label:`Melhor renda fixa: ${j.name}`,value:j.net_annual_pct,color:"#2563eb",valueLabel:at(j.net_annual_pct),caption:"Rendimento líquido de imposto"}),y.sort((q,F)=>F.value-q.value)},[c,j]),J=x.useMemo(()=>((c==null?void 0:c.fixed_income.products)??[]).map(y=>({id:y.id,label:y.name,value:y.net_annual_pct,color:y.id===(c==null?void 0:c.fixed_income.best_net_option)?"var(--success)":"#2563eb",valueLabel:`${at(y.net_annual_pct)} ao ano`,caption:`Bruto ${at(y.gross_annual_pct)} · IR ${at(y.income_tax_pct)} · ${y.note}`})),[c]);if(m&&!c&&!g)return e.jsxs(Xe,{children:[e.jsx(rt,{}),e.jsx("p",{children:"Analisando sua carteira (a primeira consulta pode levar cerca de 10 segundos)..."})]});const I=c==null?void 0:c.sell_plan,ce=I==null?void 0:I.totals;return e.jsxs(Hf,{children:[e.jsxs(Tt,{children:[e.jsxs("div",{children:[e.jsxs(Fe,{children:[e.jsx(bi,{size:19}),"Minha carteira de FIIs"]}),e.jsx(Ht,{children:"Analisa os FIIs que você cadastrou em Dividendos e mostra o que faz sentido vender para migrar para a renda fixa. Informe uma meta de renda fixa para o plano vender até chegar nela."})]}),e.jsxs(Vf,{onSubmit:V,$columns:3,children:[e.jsxs(X,{htmlFor:"pf-perfil",children:["Perfil de risco",e.jsx("select",{id:"pf-perfil",value:t.perfil,onChange:y=>a(q=>({...q,perfil:y.target.value})),children:h6.map(y=>e.jsx("option",{value:y.id,children:y.label},y.id))})]}),e.jsxs(X,{htmlFor:"pf-meta",children:["Meta de renda fixa (%)",e.jsx("input",{id:"pf-meta",type:"number",min:"0",max:"100",step:"1",placeholder:"Padrão do perfil",value:t.meta,onChange:y=>a(q=>({...q,meta:y.target.value}))})]}),e.jsxs(X,{htmlFor:"pf-prazo",children:["Prazo da renda fixa (meses)",e.jsx("input",{id:"pf-prazo",type:"number",min:"1",max:"120",step:"1",value:t.prazo,onChange:y=>a(q=>({...q,prazo:y.target.value}))})]}),e.jsxs(X,{htmlFor:"pf-cdb",children:["CDB (% do CDI)",e.jsx("input",{id:"pf-cdb",type:"number",min:"50",max:"200",step:"1",value:t.cdb,onChange:y=>a(q=>({...q,cdb:y.target.value}))})]}),e.jsxs(X,{htmlFor:"pf-lci",children:["LCI/LCA (% do CDI)",e.jsx("input",{id:"pf-lci",type:"number",min:"50",max:"150",step:"1",value:t.lci,onChange:y=>a(q=>({...q,lci:y.target.value}))})]}),e.jsxs(X,{htmlFor:"pf-anos",children:["Anos de análise dos FIIs",e.jsx("input",{id:"pf-anos",type:"number",min:"1",max:"10",step:"1",value:t.anos,onChange:y=>a(q=>({...q,anos:y.target.value}))})]}),e.jsx(pe,{type:"submit",$variant:"primary",disabled:m,children:m?"Analisando...":"Analisar"})]}),g&&e.jsx(en,{role:"alert",style:{color:"var(--error)",fontSize:12},children:g})]}),c&&I&&ce&&e.jsxs(e.Fragment,{children:[e.jsxs(Tt,{style:{opacity:m?.6:1},children:[e.jsxs(Mc,{children:[e.jsxs(Sr,{children:[e.jsx("small",{children:"Valor da carteira"}),e.jsx("strong",{children:dt(c.portfolio.total_value)}),e.jsxs("span",{children:[c.portfolio.fiis_count," FIIs analisados"]})]}),e.jsxs(Sr,{$tone:(c.portfolio.fixed_income_gap_pct??0)>0?"bad":"good",children:[e.jsx("small",{children:"Renda fixa na carteira"}),e.jsx("strong",{children:at(c.portfolio.allocation_pct.renda_fixa??0)}),e.jsxs("span",{children:["Meta: ",at(c.portfolio.fixed_income_target_pct),c.portfolio.fixed_income_gap_pct!==null&&c.portfolio.fixed_income_gap_pct>0?` · faltam ${va.format(c.portfolio.fixed_income_gap_pct)} p.p.`:" · meta atingida"]})]}),e.jsxs(Sr,{children:[e.jsx("small",{children:"Melhor renda fixa hoje"}),e.jsx("strong",{children:j?at(j.net_annual_pct):"—"}),e.jsxs("span",{children:[j==null?void 0:j.name," · líquido ao ano"]})]}),e.jsxs(Sr,{children:[e.jsx("small",{children:"CDI / Selic / IPCA 12m"}),e.jsxs("strong",{children:[va.format(c.fixed_income.cdi),"%"]}),e.jsxs("span",{children:["Selic ",va.format(c.fixed_income.selic),"% · IPCA ",va.format(c.fixed_income.ipca_12m),"%"]})]})]}),e.jsx(Ry,{items:O,ariaLabel:"Alocação atual da carteira"})]}),e.jsxs(Tt,{style:{opacity:m?.6:1},children:[e.jsxs("div",{children:[e.jsx(Fe,{children:"Seus FIIs contra a renda fixa"}),e.jsx(Ht,{children:"Dividend yield dos últimos 12 meses de cada fundo comparado ao rendimento líquido da melhor renda fixa. Verde: manter. Amarelo: reduzir. Vermelho: vender."})]}),e.jsx(vi,{items:ae})]}),e.jsxs(Tt,{style:{opacity:m?.6:1},children:[e.jsxs("div",{children:[e.jsx(Fe,{children:"Recomendação por fundo"}),e.jsx(Ht,{children:"Ordenado do que tem mais motivos para sair ao que tem menos."})]}),e.jsx(m6,{children:c.positions.map(y=>e.jsx(j6,{position:y,bestRate:A},y.ticker))})]}),e.jsxs(Tt,{style:{opacity:m?.6:1},children:[e.jsxs("div",{children:[e.jsx(Fe,{children:"Plano de venda"}),e.jsxs(Ht,{children:[I.message,I.mode==="meta_renda_fixa"?' Fundos marcados como "mantido" só entram porque a meta exige.':""]})]}),I.sales.length>0&&e.jsxs(e.Fragment,{children:[e.jsxs(Mc,{children:[e.jsxs(Sr,{children:[e.jsx("small",{children:"Você recebe (líquido)"}),e.jsx("strong",{children:dt(ce.net_proceeds)}),e.jsxs("span",{children:["Bruto ",dt(ce.gross_proceeds)," − imposto ",dt(ce.estimated_tax)]})]}),e.jsxs(Sr,{children:[e.jsx("small",{children:"Renda anual que deixa de receber"}),e.jsx("strong",{children:dt(ce.fii_income_lost_per_year)}),e.jsx("span",{children:"Proventos dos FIIs vendidos"})]}),e.jsxs(Sr,{$tone:"good",children:[e.jsx("small",{children:"Renda anual na renda fixa"}),e.jsx("strong",{children:dt(ce.fixed_income_income_per_year)}),e.jsx("span",{children:"Líquida de imposto"})]}),e.jsxs(Sr,{$tone:ce.income_change_per_year>=0?"good":"bad",children:[e.jsx("small",{children:"Variação da renda por ano"}),e.jsxs("strong",{children:[ce.income_change_per_year>0?"+":"",dt(ce.income_change_per_year)]}),e.jsxs("span",{children:[ce.tax_payback_months!==null?`O imposto se paga em ${va.format(ce.tax_payback_months)} meses. `:"",ce.fixed_income_share_after_pct!==null?`Renda fixa passa a ${at(ce.fixed_income_share_after_pct)} da carteira.`:""]})]})]}),e.jsx(Tc,{children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Fundo"}),e.jsx("th",{children:"Vender"}),e.jsx("th",{children:"Bruto"}),e.jsx("th",{children:"Imposto"}),e.jsx("th",{children:"Líquido"}),e.jsx("th",{children:"Renda perdida/ano"})]})}),e.jsx("tbody",{children:I.sales.map(y=>e.jsxs("tr",{children:[e.jsxs("td",{children:[y.ticker,y.forced?" (mantido, entra pela meta)":""]}),e.jsx("td",{children:at(y.sell_pct)}),e.jsx("td",{children:dt(y.gross)}),e.jsx("td",{children:dt(y.tax)}),e.jsx("td",{children:dt(y.net)}),e.jsx("td",{children:dt(y.income_lost)})]},y.ticker))})]})}),e.jsxs(v6,{children:[e.jsx(pe,{type:"button",$variant:"primary",onClick:()=>void $(),disabled:_,children:_?"Simulando...":"Simular a troca (1, 2 e 5 anos)"}),M&&e.jsx(en,{role:"alert",style:{color:"var(--error)",fontSize:12},children:M})]})]})]}),b&&e.jsxs(Tt,{children:[e.jsxs("div",{children:[e.jsx(Fe,{children:"Manter os fundos ou trocar?"}),e.jsxs(Ht,{children:["Os fundos vendidos rendem em média ",at(b.break_even.weighted_fii_dividend_yield_pct)," em proventos. Para valer a pena mantê-los, eles precisariam valorizar ao menos ",at(b.break_even.fii_price_appreciation_needed_per_year_pct)," ao ano além dos proventos."]})]}),e.jsx(Tc,{children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Prazo"}),e.jsx("th",{children:"Manter fundos"}),Object.keys(((C=b.projections[0])==null?void 0:C.switch_values)??{}).map(y=>e.jsx("th",{children:wv[y]??y},y)),e.jsx("th",{children:"Melhor troca vs manter"})]})}),e.jsx("tbody",{children:b.projections.map(y=>e.jsxs("tr",{children:[e.jsx("td",{children:_v(y.months)}),e.jsx("td",{children:dt(y.keep_funds_value)}),Object.entries(y.switch_values).map(([q,F])=>e.jsx("td",{style:{fontWeight:q===y.best_switch_option?800:400},children:dt(F)},q)),e.jsxs("td",{style:{color:y.difference_best_switch_vs_keep>=0?"var(--success)":"var(--error)"},children:[y.difference_best_switch_vs_keep>0?"+":"",dt(y.difference_best_switch_vs_keep)]})]},y.months))})]})}),e.jsx(Fc,{items:b.projections.map(y=>({id:String(y.months),label:`${_v(y.months)} (${wv[y.best_switch_option]??y.best_switch_option})`,value:y.difference_best_switch_vs_keep})),formatValue:y=>`${y>0?"+":""}${dt(y)}`}),e.jsx(en,{children:"Verde: trocar para a renda fixa termina com mais dinheiro que manter os fundos. Vermelho: manter termina com mais."}),b.assumptions.map(y=>e.jsxs(en,{children:["• ",y]},y))]}),e.jsxs(Tt,{style:{opacity:m?.6:1},children:[e.jsxs("div",{children:[e.jsx(Fe,{children:"Opções de renda fixa"}),e.jsxs(Ht,{children:["Rendimento líquido anual para um prazo de ",c.fixed_income.holding_period_months," meses."]})]}),e.jsx(vi,{items:J,max:Math.max(...J.map(y=>y.value),1)*1.15}),c.notes.map(y=>e.jsx(en,{children:y},y))]})]})]})}const kv={renda_fixa:"#2563eb",acoes_br:"#16a34a",fiis:"#d97706",internacional:"#8b5cf6",cripto:"#f97316"},w6=[{id:"todas",label:"Todas"},{id:"renda_fixa",label:"Renda fixa"},{id:"acoes_br",label:"Ações"},{id:"fiis",label:"FIIs"},{id:"internacional",label:"ETFs e exterior"},{id:"cripto",label:"Cripto"}],_6={acoes_br:"Ações Brasil",fiis:"FIIs",renda_fixa:"Renda fixa",internacional:"ETFs e exterior",cripto:"Cripto"},Sv=[{id:"conservador",label:"Conservador"},{id:"moderado",label:"Moderado"},{id:"arrojado",label:"Arrojado"}],k6=h.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 20px;
`,S6=h.div`
  display: inline-flex;
  max-width: 100%;
  gap: 4px;
  padding: 4px;
  overflow-x: auto;
  border: 1px solid var(--border);
  border-radius: 999px;
  background: var(--surface);
`,ss=h.button`
  flex: 0 0 auto;
  min-height: 38px;
  padding: 6px 16px;
  white-space: nowrap;
  border: 0;
  border-radius: 999px;
  color: ${({$active:t})=>t?"var(--primary-contrast)":"var(--text)"};
  background: ${({$active:t})=>t?"var(--primary)":"transparent"};
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
`,Cv=h.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  gap: 12px;
  ${X} { margin-bottom: 0; min-width: 200px; }
`,jc=h(Ue)`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 14px;
  ${Fe} { margin: 0; }
`,Jn=h.p`
  margin: 0;
  color: var(--muted);
  font-size: 12px;
  line-height: 1.5;
`,C6=h.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 12px;
`,E6=h.article`
  display: grid;
  gap: 10px;
  align-content: start;
  padding: 14px 16px;
  border: 1px solid color-mix(in srgb, ${({$rating:t})=>Er[t].color} 35%, var(--border));
  border-left: 5px solid ${({$rating:t})=>Er[t].color};
  border-radius: var(--radius-md);
  background: color-mix(in srgb, ${({$rating:t})=>Er[t].color} 6%, var(--surface-raised));
  header { display: flex; align-items: flex-start; justify-content: space-between; gap: 8px; }
  h3 { margin: 0; color: var(--text); font-size: 14px; }
  small { color: var(--muted); font-size: 11px; }
  ul { margin: 0; padding-left: 16px; color: var(--muted); font-size: 12px; line-height: 1.5; }
`,$6=h.span`
  flex: 0 0 auto;
  padding: 3px 9px;
  border-radius: 999px;
  color: ${({$rating:t})=>Er[t].color};
  background: color-mix(in srgb, ${({$rating:t})=>Er[t].color} 14%, transparent);
  font-size: 11px;
  font-weight: 800;
`,R6=h.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 6px;
`,z6=h.div`
  display: grid;
  gap: 4px;
  font-size: 11px;
  color: var(--muted);
  span { font-variant-numeric: tabular-nums; }
  div { height: 6px; overflow: hidden; border-radius: 999px; background: var(--border); }
  div::after {
    content: '';
    display: block;
    width: ${({$score:t})=>t}%;
    height: 100%;
    background: ${({$rating:t})=>Er[t].color};
  }
`,Dp=h.p`
  margin: 0;
  color: var(--muted);
  font-size: 11px;
  line-height: 1.5;
`,P6=h.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  gap: 12px;
`,N6=h.article`
  display: grid;
  align-content: start;
  gap: 9px;
  padding: 14px;
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  background: var(--surface);
  h3 { margin: 0; color: var(--text); font-size: 14px; line-height: 1.45; }
  p { margin: 0; color: var(--muted); font-size: 12px; line-height: 1.5; }
  small { color: var(--muted); font-size: 11px; }
  a { color: var(--primary-strong); font-size: 12px; font-weight: 700; text-decoration: none; }
  a:hover { text-decoration: underline; }
`,A6=h.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 10px;
`,D6=h.article`
  display: grid;
  gap: 7px;
  padding: 12px 14px;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: var(--surface-raised);
  small { color: var(--muted); font-size: 11px; }
  strong { color: var(--text); font-size: 13px; }
  span { color: var(--muted); font-size: 12px; line-height: 1.45; }
`,M6=h.div`
  display: flex;
  gap: 7px;
  overflow-x: auto;
  padding-bottom: 3px;
`;function Ev(t){var a,s,l,c,u;return $t.isAxiosError(t)?((a=t.response)==null?void 0:a.status)===404?"O serviço de oportunidades ainda não está disponível no servidor.":((l=(s=t.response)==null?void 0:s.data)==null?void 0:l.error)||((u=(c=t.response)==null?void 0:c.data)==null?void 0:u.message)||"Não foi possível carregar as oportunidades.":t instanceof Error?t.message:"Não foi possível carregar as oportunidades."}function pf(t){if(!t)return"";const a=new Date(t);return Number.isNaN(a.getTime())?t:a.toLocaleString("pt-BR",{dateStyle:"short",timeStyle:"short"})}function T6(t){return t.rating==="otimo"?{title:"Cenário favorável para estudar",detail:"Indicadores históricos estão relativamente favoráveis; avalie preço, risco e seus objetivos antes de decidir."}:t.rating==="bom"?{title:"Acompanhar possível entrada",detail:"O cenário está acima da faixa neutra, mas não confirma que este seja o melhor momento para comprar."}:t.rating==="atencao"?{title:"Reavaliar riscos e exposição",detail:"Os indicadores pedem cautela e revisão da tese; não significam que seja necessário vender agora."}:t.rating==="evitar"?{title:"Alerta para revisar a posição",detail:"A pontuação está fraca frente aos critérios analisados; compare fundamentos, custos e seu horizonte antes de qualquer saída."}:{title:"Manter em observação",detail:"Os indicadores estão em faixa neutra, sem sinal forte de entrada ou de saída."}}function F6({article:t}){return e.jsxs(N6,{children:[e.jsxs("small",{children:[t.categories.map(a=>_6[a]).join(" · ")," · ",t.source]}),e.jsx("h3",{children:t.title}),t.summary&&e.jsx("p",{children:t.summary}),e.jsx("small",{children:t.published_at?pf(t.published_at):"Data não informada"}),e.jsx("a",{href:t.url,target:"_blank",rel:"noreferrer",children:"Ler notícia na fonte ↗"})]})}function L6({item:t}){var s;const a=t.ticker?Uf(t.class_id,t.rating,t.analysis_type):void 0;return e.jsxs(E6,{$rating:t.rating,children:[e.jsxs("header",{children:[e.jsxs("div",{children:[e.jsx("h3",{children:t.label}),t.in_portfolio&&e.jsx("small",{children:"Na sua carteira"})]}),e.jsxs(R6,{children:[e.jsx($6,{$rating:t.rating,children:Er[t.rating].label}),a&&e.jsx(gs,{label:a.label,color:a.color,details:[`Nota ${t.score}/100 · classificação: ${Er[t.rating].label}.`,...(s=t.analysis_factors)!=null&&s.length?t.analysis_factors:t.analysis_type==="short_term_market"?["Histórico insuficiente para análise completa; etiqueta baseada apenas nos indicadores de curto prazo disponíveis."]:["Critérios: retorno ajustado por proventos, comparação com CDI, volatilidade e queda máxima."],...t.analysis_type==="fii_fundamentals"?["Vacância: não disponível nos dados padronizados consultados; não foi estimada nem pontuada."]:t.analysis_type==="equity_market_history"?["Não avalia lucro, dívida, ROE ou valuation fundamentalista da empresa."]:[]]})]})]}),e.jsxs(z6,{$rating:t.rating,$score:t.score,"aria-label":`Nota ${Math.round(t.score)} de 100`,children:[e.jsxs("span",{children:["Nota ",Math.round(t.score),"/100"]}),e.jsx("div",{})]}),t.top_assets&&t.top_assets.length>0&&e.jsxs("small",{children:["Destaques: ",t.top_assets.join(", ")]}),t.reasons.length>0&&e.jsx("ul",{children:t.reasons.map(l=>e.jsx("li",{children:l},l))})]})}function Mp({title:t,description:a,items:s}){if(!s.length)return null;const l=[...s].sort((c,u)=>u.score-c.score);return e.jsxs(jc,{children:[e.jsxs("div",{children:[e.jsx(Fe,{children:t}),e.jsx(Jn,{children:a})]}),e.jsx(C6,{children:l.map(c=>e.jsx(L6,{item:c},c.id))})]})}function O6(){const[t,a]=x.useState("oportunidades"),[s,l]=x.useState("moderado"),[c,u]=x.useState(),[m,f]=x.useState(),[g,w]=x.useState(!0),[b,S]=x.useState(!0),[_,R]=x.useState(""),[M,N]=x.useState(""),[V,$]=x.useState("todas"),[j,A]=x.useState(0),[O,ae]=x.useState(0);x.useEffect(()=>{let F=!0;return w(!0),R(""),U1(s).then(fe=>{F&&u(fe)}).catch(fe=>{F&&R(Ev(fe))}).finally(()=>{F&&w(!1)}),()=>{F=!1}},[s,j]),x.useEffect(()=>{let F=!0;return S(!0),N(""),c2(O>0).then(fe=>{F&&f(fe)}).catch(fe=>{F&&N(Ev(fe))}).finally(()=>{F&&S(!1)}),()=>{F=!1}},[O]),x.useEffect(()=>{const F=window.setInterval(()=>{A(fe=>fe+1),ae(fe=>fe+1)},9e5);return()=>window.clearInterval(F)},[]);const J=pf(c==null?void 0:c.generated_at),I=pf(m==null?void 0:m.generated_at),ce=c&&!c.classes.length&&!c.assets.length,C=new Map(((c==null?void 0:c.classes)??[]).map(F=>[F.id,F.label])),y=((m==null?void 0:m.articles)??[]).filter(F=>V==="todas"||F.categories.includes(V)),q=[...new Map([...(c==null?void 0:c.classes)??[],...(c==null?void 0:c.assets.slice(0,5))??[],...(c==null?void 0:c.portfolio)??[]].map(F=>[F.ticker?`ticker:${F.ticker}`:`class:${F.id}`,F])).values()].sort((F,fe)=>fe.score-F.score);return e.jsxs(k6,{children:[e.jsxs(_s,{children:[e.jsxs("div",{children:[e.jsxs("span",{children:[e.jsx(Zp,{size:14})," Oportunidades"]}),e.jsx("h1",{children:"Avaliação de oportunidades."}),e.jsx("p",{children:"Nota de 0 a 100 por classe de ativo e por ativo, e uma simulação histórica para ver o que o passado ensina."}),t==="oportunidades"&&J&&e.jsxs("p",{style:{marginTop:8,fontSize:12},children:["Atualizado em ",J]})]}),e.jsxs(S6,{role:"tablist","aria-label":"Seções",children:[e.jsx(ss,{type:"button",role:"tab","aria-selected":t==="oportunidades",$active:t==="oportunidades",onClick:()=>a("oportunidades"),children:"Oportunidades"}),e.jsxs(ss,{type:"button",role:"tab","aria-selected":t==="noticias",$active:t==="noticias",onClick:()=>a("noticias"),children:[e.jsx(Wu,{size:15})," Notícias e sinais"]}),e.jsx(ss,{type:"button",role:"tab","aria-selected":t==="carteira",$active:t==="carteira",onClick:()=>a("carteira"),children:"Minha carteira"}),e.jsx(ss,{type:"button",role:"tab","aria-selected":t==="simulacao",$active:t==="simulacao",onClick:()=>a("simulacao"),children:"Simulação histórica"}),e.jsx(ss,{type:"button",role:"tab","aria-selected":t==="fiis",$active:t==="fiis",onClick:()=>a("fiis"),children:"Comparar FIIs"})]})]}),t==="carteira"&&e.jsx(b6,{}),t==="simulacao"&&e.jsx(s6,{}),t==="fiis"&&e.jsx(f6,{}),t==="noticias"&&e.jsxs(e.Fragment,{children:[e.jsxs(Cv,{children:[e.jsxs(Jn,{children:["Varredura automática de notícias financeiras públicas, renovada a cada 15 minutos enquanto a API estiver disponível.",I&&e.jsxs(e.Fragment,{children:[" Última busca: ",I,"."]})]}),e.jsxs(pe,{type:"button",onClick:()=>ae(F=>F+1),disabled:b,children:[e.jsx(tf,{}),b?"Buscando...":"Atualizar notícias"]})]}),e.jsxs(jc,{children:[e.jsxs("div",{children:[e.jsxs(Fe,{children:[e.jsx(us,{size:18})," Indicadores e sinais de acompanhamento"]}),e.jsx(Jn,{children:"Sinais derivados das notas de mercado e do perfil selecionado. Eles ajudam a priorizar o que pesquisar; não identificam um horário certo para comprar ou vender."})]}),e.jsxs(X,{htmlFor:"news-profile",children:["Perfil usado na análise",e.jsx("select",{id:"news-profile",value:s,onChange:F=>l(F.target.value),children:Sv.map(F=>e.jsx("option",{value:F.id,children:F.label},F.id))})]}),c!=null&&c.classes.length?e.jsxs(e.Fragment,{children:[e.jsx(Wf,{ariaLabel:"Notas atuais de cenário por classe de investimento, de zero a cem",items:c.classes.map(F=>({id:F.id,label:F.label,value:F.score,color:kv[F.id]})),formatValue:F=>`${Math.round(F)}/100`}),e.jsx(A6,{children:q.map(F=>{const fe=T6(F);return e.jsxs(D6,{children:[e.jsx("small",{children:F.ticker?`${F.label} · ${F.ticker}`:F.label}),e.jsxs("strong",{children:[fe.title," · Nota ",Math.round(F.score),"/100"]}),e.jsx("span",{children:fe.detail})]},`signal-${F.id}`)})})]}):g?e.jsx(Jn,{role:"status",children:"Calculando indicadores de mercado..."}):e.jsx(Jn,{children:"Os indicadores estão indisponíveis. Atualize para tentar novamente."}),c==null?void 0:c.warnings.map(F=>e.jsx(Jn,{role:"status",children:F},F)),e.jsx(Dp,{children:"As notas refletem dados históricos e critérios quantitativos, não uma previsão. Rentabilidade passada não garante retorno futuro. Avalie diversificação, liquidez, custos, impostos e seu perfil; não opere apenas com base em manchetes ou sinais automáticos."})]}),e.jsxs(jc,{children:[e.jsxs("div",{children:[e.jsxs(Fe,{children:[e.jsx(Wu,{size:18})," Notícias do mercado"]}),e.jsx(Jn,{children:"Fontes agregadas pelo Google Notícias. Abra cada matéria para conferir o conteúdo completo e o contexto original."})]}),e.jsx(M6,{"aria-label":"Filtrar notícias por tipo de investimento",children:w6.map(F=>e.jsx(ss,{type:"button",$active:V===F.id,"aria-pressed":V===F.id,onClick:()=>$(F.id),children:F.label},F.id))}),M&&e.jsx(Jn,{role:"alert",style:{color:"var(--error)"},children:M}),m==null?void 0:m.warnings.map(F=>e.jsx(Jn,{role:"status",children:F},F)),b&&!m?e.jsxs(Xe,{children:[e.jsx(rt,{}),e.jsx("p",{children:"Buscando notícias financeiras..."})]}):y.length?e.jsx(P6,{children:y.map(F=>e.jsx(F6,{article:F},F.id))}):e.jsxs(Xe,{children:[e.jsx(Wu,{}),e.jsx("p",{children:"Nenhuma notícia disponível neste filtro."})]}),e.jsxs(Dp,{children:["Notícias são informações de terceiros e podem estar incompletas, atrasadas ou conter opiniões. A página não faz recomendação personalizada nem promete momento ideal de compra ou venda.",(m==null?void 0:m.source)&&e.jsxs(e.Fragment,{children:[" Fonte agregadora: ",m.source,"."]})]})]})]}),t==="oportunidades"&&e.jsxs(e.Fragment,{children:[e.jsxs(Cv,{children:[e.jsxs(X,{htmlFor:"opp-profile",children:["Perfil de risco",e.jsx("select",{id:"opp-profile",value:s,onChange:F=>l(F.target.value),children:Sv.map(F=>e.jsx("option",{value:F.id,children:F.label},F.id))})]}),e.jsxs(pe,{type:"button",onClick:()=>A(F=>F+1),disabled:g,children:[e.jsx(tf,{}),g?"Atualizando...":"Atualizar"]})]}),_&&e.jsx(Ue,{role:"alert",style:{color:"var(--error)",padding:14},children:_}),g&&!c?e.jsxs(Xe,{children:[e.jsx(rt,{}),e.jsx("p",{children:"Analisando o mercado..."})]}):c&&e.jsxs(e.Fragment,{children:[c.warnings.length>0&&e.jsx(Ue,{role:"status",style:{color:"var(--warning)",padding:14,fontSize:13},children:c.warnings.map(F=>e.jsx("div",{children:F},F))}),ce&&e.jsxs(Xe,{children:[e.jsx(Zp,{}),e.jsx("p",{children:"Nenhuma oportunidade disponível no momento."})]}),c.suggested_allocation.length>0&&e.jsxs(jc,{children:[e.jsxs("div",{children:[e.jsx(Fe,{children:"Alocação sugerida"}),e.jsxs(Jn,{children:["Distribuição de referência para o perfil ",s,", ajustada pelas notas de cada classe."]})]}),e.jsx(Ry,{ariaLabel:"Alocação sugerida por classe de ativo",items:[...c.suggested_allocation].sort((F,fe)=>fe.percent-F.percent).map(F=>({id:F.id,label:C.get(F.id)??F.id,value:F.percent,valueLabel:`${F.percent}%`,color:kv[F.id]??"var(--primary)"}))})]}),e.jsx(Mp,{title:"Classes de ativos",description:"Onde o cenário atual está mais favorável.",items:c.classes}),e.jsx(Mp,{title:"Minha carteira",description:"Seus ativos ativos em dividendos, avaliados pelo cenário atual.",items:c.portfolio}),e.jsx(Mp,{title:"Ranking de ativos",description:"Melhores ativos analisados, do melhor para o pior.",items:c.assets}),e.jsxs(Dp,{children:["A nota vai de 0 a 100: 65 ou mais indica cenário favorável; 45 a 64, neutro; 30 a 44, merece atenção; abaixo de 30, evitar. FIIs: retorno vs. CDI (até 25 pontos), queda máxima (10), volatilidade (5), regularidade/variação e crescimento de proventos (até 18), P/VP (até 6), idade (até 6) e patrimônio líquido (de -8 a +5); a vacância não está disponível de forma padronizada. Ações: 40% da nota técnica de 1 ano e 60% do histórico de até 5 anos (retorno vs. CDI, volatilidade e queda máxima); sem dados de lucro, dívida, ROE ou valuation. Não constitui recomendação personalizada. ",c.disclaimer??""]})]})]})]})}const $v=t=>t?new Date(`${t.slice(0,10)}T12:00:00`).toLocaleDateString("pt-BR"):"Não definida";function I6({task:t,loading:a,saving:s,onBack:l,onSave:c,onDelete:u,onSetActive:m,onValidationError:f,statusChanging:g}){const[w,b]=x.useState(""),[S,_]=x.useState(""),[R,M]=x.useState("medium"),[N,V]=x.useState("diaria"),[$,j]=x.useState(""),[A,O]=x.useState(""),[ae,J]=x.useState([]);x.useEffect(()=>{var C;t&&(b(t.title),_(t.description??""),M(t.priority??"medium"),V(Qc(t.frequencia)??"diaria"),j(t.start_date.slice(0,10)),O(((C=t.end_date)==null?void 0:C.slice(0,10))??""),J([...t.items].sort((y,q)=>y.sort_order-q.sort_order).map(y=>y.title)))},[t==null?void 0:t.id]);function I(C,y){J(q=>q.map((F,fe)=>fe===C?y:F))}async function ce(C){C.preventDefault(),f("");const y=ae.map(F=>F.trim()).filter(Boolean);if(!w.trim()){f("Informe o título da tarefa.");return}if(!y.length){f("Adicione pelo menos um item à tarefa.");return}if(A&&$&&A<$){f("A data final não pode ser anterior à data inicial.");return}const q={title:w.trim(),description:S.trim()||null,priority:R,frequencia:N,start_date:$||void 0,end_date:A||null,items:y};await c(q)}return a&&!t?e.jsx(Ue,{children:e.jsx(Zn,{children:"Carregando tarefa..."})}):t?e.jsxs(e.Fragment,{children:[e.jsxs(Mr,{children:[e.jsxs("div",{children:[e.jsx("h1",{children:"Editar tarefa"}),e.jsx("p",{children:"Atualize os mesmos campos disponíveis na criação."})]}),e.jsxs(pe,{onClick:l,children:[e.jsx(Cc,{}),"Voltar para tarefas"]})]}),e.jsxs(Df,{children:[e.jsxs(Ue,{children:[e.jsxs(iS,{style:{alignItems:"center",justifyContent:"space-between",marginBottom:22},children:[e.jsxs("div",{children:[e.jsxs(Fe,{style:{marginBottom:8},children:["Tarefa · ID ",t.id]}),e.jsx(Dr,{$done:t.is_active,children:t.is_active?"Ativa":"Desativada"})]}),e.jsxs(pe,{type:"button",$variant:t.is_active?"danger":"primary",disabled:g,onClick:()=>{m(t.id,!t.is_active)},children:[g?e.jsx(rt,{className:"spin"}):t.is_active?e.jsx(xk,{}):e.jsx(nn,{}),g?"Atualizando...":t.is_active?"Desativar tarefa":"Ativar tarefa"]})]}),e.jsxs("form",{onSubmit:C=>void ce(C),children:[e.jsxs(X,{children:["Título da tarefa *",e.jsx("input",{value:w,onChange:C=>b(C.target.value),maxLength:200,placeholder:"Ex.: Estudar programação",required:!0})]}),e.jsxs(X,{children:["Descrição ",e.jsx("small",{children:"(opcional)"}),e.jsx("textarea",{value:S,onChange:C=>_(C.target.value),maxLength:1e4,placeholder:"Descreva o objetivo desta tarefa..."})]}),e.jsxs(X,{children:["Prioridade",e.jsxs(sn,{value:R,onChange:C=>M(C.target.value),children:[e.jsx("option",{value:"high",children:"Alta"}),e.jsx("option",{value:"medium",children:"Média"}),e.jsx("option",{value:"low",children:"Baixa"})]})]}),e.jsxs(X,{children:["Frequência",e.jsxs(sn,{value:N,onChange:C=>V(C.target.value),children:[e.jsx("option",{value:"diaria",children:"Dia"}),e.jsx("option",{value:"semana",children:"Semana"}),e.jsx("option",{value:"mensal",children:"Mês"})]})]}),e.jsxs(ry,{children:[e.jsxs(X,{children:["Data de início",e.jsx("input",{type:"date",value:$,onChange:C=>j(C.target.value)})]}),e.jsxs(X,{children:["Data de fim ",e.jsx("small",{children:"(opcional)"}),e.jsx("input",{type:"date",min:$||void 0,value:A,onChange:C=>O(C.target.value)})]})]}),e.jsxs(Fe,{style:{marginTop:8,marginBottom:6},children:["Itens da tarefa * ",e.jsx(rr,{size:15,color:"var(--muted)"})]}),e.jsx(Zn,{children:"Adicione as atividades que você quer acompanhar."}),e.jsxs(Mf,{children:[ae.map((C,y)=>e.jsxs(Tf,{children:[e.jsx(Ff,{children:y+1}),e.jsx(Ac,{"aria-label":`Item ${y+1}`,value:C,maxLength:200,onChange:q=>I(y,q.target.value),placeholder:"Nome da atividade"}),e.jsx(pe,{type:"button",$variant:"danger","aria-label":`Remover item ${y+1}`,disabled:ae.length<=1,onClick:()=>J(q=>q.filter((F,fe)=>fe!==y)),children:e.jsx(Rr,{})})]},y)),e.jsx("div",{children:e.jsxs(pe,{type:"button",onClick:()=>J(C=>C.length<100?[...C,""]:C),disabled:ae.length>=100,children:[e.jsx(yt,{}),"Adicionar item"]})})]}),e.jsxs(Lf,{children:[e.jsx(pe,{type:"button",onClick:l,children:"Cancelar"}),e.jsxs(pe,{type:"button",$variant:"danger",onClick:()=>u(t.id),children:[e.jsx(Rr,{}),"Excluir tarefa"]}),e.jsxs(pe,{type:"submit",$variant:"primary",disabled:s,children:[s?e.jsx(rt,{className:"spin"}):e.jsx(ws,{}),s?"Salvando...":"Salvar alterações"]})]})]})]}),e.jsxs(Ue,{children:[e.jsx(Fe,{children:"Prévia da tarefa"}),e.jsxs(Of,{children:[e.jsxs(If,{children:[e.jsx(rr,{size:23}),w.trim()||"Título da tarefa"]}),e.jsx(Zn,{children:S.trim()||"A descrição aparecerá aqui."}),e.jsxs(Bf,{children:[e.jsxs("span",{children:[e.jsx(Je,{size:15,style:{verticalAlign:"middle",marginRight:7}}),"Início: ",$v($)]}),e.jsxs("span",{children:[e.jsx(Je,{size:15,style:{verticalAlign:"middle",marginRight:7}}),"Fim: ",$v(A)]}),e.jsxs("span",{children:[e.jsx(So,{size:15,style:{verticalAlign:"middle",marginRight:7}}),"Prioridade: ",{high:"Alta",medium:"Média",low:"Baixa"}[R]]}),e.jsxs("span",{children:[e.jsx(So,{size:15,style:{verticalAlign:"middle",marginRight:7}}),"Frequência: ",N==="diaria"?"Dia":N==="semana"?"Semana":"Mês"]}),e.jsxs("span",{children:[e.jsx(So,{size:15,style:{verticalAlign:"middle",marginRight:7}}),"Status: ",t.is_active?"Ativa":"Desativada"]})]})]}),e.jsx(Fe,{children:"Itens da tarefa"}),ae.some(C=>C.trim())?ae.map((C,y)=>C.trim()&&e.jsxs(ny,{children:[e.jsx("input",{type:"checkbox",disabled:!0}),e.jsx("span",{children:C}),e.jsx(Dr,{children:"Pendente"})]},y)):e.jsx(Zn,{children:"Os itens aparecerão aqui enquanto você digita."})]})]})]}):e.jsxs(e.Fragment,{children:[e.jsx(Mr,{children:e.jsxs("div",{children:[e.jsx("h1",{children:"Tarefa não encontrada"}),e.jsx("p",{children:"Não foi possível localizar essa tarefa na listagem."})]})}),e.jsxs(pe,{onClick:l,children:[e.jsx(Cc,{}),"Voltar para tarefas"]})]})}const B6=h.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
  margin-bottom: 20px;
  @media (max-width: 620px) { gap: 9px; }
  @media (max-width: 420px) { grid-template-columns: 1fr; }
`,Tp=h.div`
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
`,Fp=h.span`
  display: grid;
  width: 42px;
  height: 42px;
  place-items: center;
  border-radius: 12px;
  color: ${({$tone:t})=>t==="green"?"var(--success)":t==="gray"?"var(--muted)":"var(--primary)"};
  background: ${({$tone:t})=>t==="green"?"var(--success-soft)":t==="gray"?"var(--surface-raised)":"var(--primary-soft)"};
  svg { width: 19px; height: 19px; }
  @media (max-width: 620px) { width: 36px; height: 36px; }
`,q6=h.div`
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
`,U6=h.label`
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
`,H6=h(ay)`
  display: flex;
  gap: 8px;
  @media (max-width: 760px) { display: grid; grid-template-columns: 1fr 1fr; }
  @media (max-width: 420px) { grid-template-columns: 1fr; }
  select { min-width: 170px; height: 42px; }
  @media (max-width: 760px) { select { min-width: 0; width: 100%; } }
`,V6=h.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin: 0 0 14px;
  padding: 4px;
  overflow-x: auto;
  border: 1px solid var(--border);
  border-radius: 11px;
  background: var(--surface-raised);
`,Lp=h.button`
  display: inline-flex;
  min-height: 34px;
  align-items: center;
  justify-content: center;
  gap: 7px;
  padding: 6px 11px;
  border: 0;
  border-radius: 8px;
  color: ${({$active:t})=>t?"var(--primary-strong)":"var(--muted)"};
  background: ${({$active:t})=>t?"var(--surface)":"transparent"};
  box-shadow: ${({$active:t})=>t?"0 1px 4px var(--shadow)":"none"};
  font-size: 12px;
  font-weight: 700;
  white-space: nowrap;
  cursor: pointer;
  &:hover { color: var(--primary); }
  &:focus-visible { outline: 3px solid var(--focus); outline-offset: 1px; }
  span { display: inline-grid; min-width: 20px; height: 20px; place-items: center; padding: 0 5px; border-radius: 6px; color: inherit; background: ${({$active:t})=>t?"color-mix(in srgb, var(--primary) 16%, var(--surface))":"var(--border)"}; font-size: 10px; }
`,W6=h.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  margin: 0 2px 10px;
  h2 { margin: 0; color: var(--text); font-size: 14px; font-weight: 750; }
  span { color: var(--muted); font-size: 11px; }
`,G6=h.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 8px;
  @media (max-width: 639px) { width: 100%; }
`,K6=h.div`
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
`,Q6=h.span`
  color: var(--muted);
  font-size: 12px;
`,Y6=h.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  @media (max-width: 560px) { justify-content: space-between; }
`,J6=h.select`
  min-height: 36px;
  padding: 6px 9px;
  border: 1px solid var(--border);
  border-radius: 8px;
  color: var(--text);
  background: var(--surface-raised);
  font-size: 12px;
`,Rv=h(pe)`
  min-height: 36px;
  padding: 7px 10px;
  &:disabled { opacity: .45; cursor: not-allowed; }
`,X6=h.div`
  display: grid;
  gap: 11px;
`,Z6=h.article`
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 18px;
  padding: 18px 19px;
  border: 1px solid var(--border);
  border-left: 3px solid ${({$active:t})=>t?"var(--primary)":"var(--muted)"};
  border-radius: 13px;
  background: var(--surface);
  box-shadow: 0 4px 14px var(--shadow);
  transition: border-color .15s ease, box-shadow .15s ease, transform .15s ease;
  &:hover { border-color: var(--primary); border-left-color: ${({$active:t})=>t?"var(--primary)":"var(--muted)"}; box-shadow: 0 8px 22px var(--shadow); transform: translateY(-1px); }
  @media (max-width: 720px) { grid-template-columns: 1fr; gap: 14px; padding: 16px; }
`,eR=h.div`
  display: grid;
  min-width: 0;
  gap: 13px;
`,tR=h.div`
  display: flex;
  min-width: 0;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
`,rR=h.div`
  min-width: 0;
  h3 { margin: 0; color: var(--text); font-size: 15px; font-weight: 750; line-height: 1.45; overflow-wrap: anywhere; }
  p { margin: 4px 0 0; color: var(--muted); font-size: 12px; line-height: 1.5; overflow-wrap: anywhere; }
`,nR=h.div`
  display: flex;
  flex: 0 0 auto;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 6px;
  @media (max-width: 520px) { justify-content: flex-start; }
`,aR=h.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px 17px;
  color: var(--muted);
  font-size: 11px;
`,ac=h.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  svg { width: 14px; height: 14px; color: var(--muted); }
`,iR=h.div`
  display: flex;
  min-width: 0;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px;
`,sR=h.span`
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
`,oR=h.span`
  padding: 5px 7px;
  color: var(--muted);
  font-size: 11px;
  font-weight: 700;
`,lR=h.div`
  display: grid;
  grid-template-columns: minmax(55px, 100px) auto;
  align-items: center;
  gap: 8px;
  margin-left: auto;
  span { color: var(--muted); font-size: 10px; white-space: nowrap; }
  @media (max-width: 720px) { margin-left: 0; }
`,cR=h.div`
  height: 5px;
  overflow: hidden;
  border-radius: 999px;
  background: var(--border);
  div { height: 100%; border-radius: inherit; background: var(--primary); transition: width .2s ease; }
`,dR=h.div`
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
`,uR=h.div`
  display: grid;
  justify-items: end;
  gap: 4px;
  color: var(--muted);
  font-size: 10px;
  text-align: right;
  strong { color: var(--text); font-size: 11px; font-weight: 650; }
  @media (max-width: 720px) { justify-items: start; text-align: left; }
`,pR=h.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 6px;
`,Op=h(pe)`
  min-height: 33px;
  padding: 7px 9px;
  gap: 6px;
  white-space: nowrap;
  font-size: 11px;
  svg { width: 14px; height: 14px; }
`,fR=h.span`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 5px 8px;
  border-radius: var(--radius-full);
  color: ${({$priority:t})=>t==="high"?"var(--error)":t==="medium"?"var(--warning)":"var(--success)"};
  background: ${({$priority:t})=>t==="high"?"var(--error-soft)":t==="medium"?"var(--warning-soft)":"var(--success-soft)"};
  font-size: 10px;
  font-weight: 700;
  white-space: nowrap;
`;h(Ue)`
  padding: 0;
  border: 0;
  background: transparent;
  box-shadow: none;
  @media (max-width: 520px) { padding: 0; }
`;const hR={low:"Baixa",medium:"Média",high:"Alta"},zv=t=>t?new Date(`${t.slice(0,10)}T12:00:00`).toLocaleDateString("pt-BR"):"Não definida",Pv=t=>t?new Date(t).toLocaleString("pt-BR",{dateStyle:"short",timeStyle:"short"}):"Não definida";function mR({tasks:t,loading:a,statusFilter:s,priorityFilter:l,pagination:c,onStatusFilterChange:u,onPriorityFilterChange:m,onPageChange:f,onPageSizeChange:g,onNavigate:w,onDeactivate:b,onDeactivateAll:S,statusChanging:_,onDelete:R}){const[M,N]=x.useState(""),V=x.useMemo(()=>t.filter(j=>{const A=M.trim().toLocaleLowerCase("pt-BR"),O=[j.title,j.description??"",String(j.id),...(j.items??[]).map(ce=>ce.title)].join(" ").toLocaleLowerCase("pt-BR"),ae=!A||O.includes(A),J=s==="all"||s==="active"&&j.is_active||s==="inactive"&&!j.is_active,I=l==="all"||l==="none"&&!j.priority||j.priority===l;return ae&&J&&I}),[t,M,s,l]);function $(){N(""),u("all"),m("all")}return e.jsxs(e.Fragment,{children:[e.jsxs(Mr,{children:[e.jsxs("div",{children:[e.jsx("h1",{children:"Minhas tarefas"}),e.jsx("p",{children:"Organize seus compromissos e acompanhe o que precisa ser feito."})]}),e.jsxs(G6,{children:[e.jsxs(pe,{type:"button",$variant:"danger",onClick:S,disabled:a||_||c.activeTotal===0,children:[_?e.jsx(rt,{className:"spin"}):e.jsx(Pk,{}),"Desativar todas"]}),e.jsxs(pe,{$variant:"primary",onClick:()=>w("/tasks/new"),children:[e.jsx(yt,{}),"Nova tarefa"]})]})]}),e.jsxs(B6,{"aria-label":"Resumo das tarefas",children:[e.jsxs(Tp,{children:[e.jsx(Fp,{$tone:"blue",children:e.jsx(rr,{})}),e.jsxs("div",{children:[e.jsx("span",{children:"Total de tarefas"}),e.jsx("strong",{children:c.total})]})]}),e.jsxs(Tp,{children:[e.jsx(Fp,{$tone:"green",children:e.jsx(rr,{})}),e.jsxs("div",{children:[e.jsx("span",{children:"Tarefas ativas"}),e.jsx("strong",{children:c.activeTotal})]})]}),e.jsxs(Tp,{children:[e.jsx(Fp,{$tone:"gray",children:e.jsx(rr,{})}),e.jsxs("div",{children:[e.jsx("span",{children:"Desativadas"}),e.jsx("strong",{children:c.inactiveTotal})]})]})]}),e.jsxs(q6,{children:[e.jsxs(U6,{children:[e.jsx(J1,{"aria-hidden":"true"}),e.jsx("input",{type:"search","aria-label":"Buscar tarefas",placeholder:"Buscar por tarefa, descrição ou item...",value:M,onChange:j=>N(j.target.value)})]}),e.jsx(H6,{children:e.jsxs(sn,{"aria-label":"Filtrar por prioridade",value:l,onChange:j=>m(j.target.value),children:[e.jsx("option",{value:"all",children:"Todas as prioridades"}),e.jsx("option",{value:"high",children:"Prioridade alta"}),e.jsx("option",{value:"medium",children:"Prioridade média"}),e.jsx("option",{value:"low",children:"Prioridade baixa"}),e.jsx("option",{value:"none",children:"Sem prioridade"})]})})]}),e.jsxs(V6,{"aria-label":"Filtrar por situação",children:[e.jsxs(Lp,{type:"button",$active:s==="all","aria-pressed":s==="all",onClick:()=>u("all"),children:["Todas ",e.jsx("span",{children:c.total})]}),e.jsxs(Lp,{type:"button",$active:s==="active","aria-pressed":s==="active",onClick:()=>u("active"),children:["Ativas ",e.jsx("span",{children:c.activeTotal})]}),e.jsxs(Lp,{type:"button",$active:s==="inactive","aria-pressed":s==="inactive",onClick:()=>u("inactive"),children:["Desativadas ",e.jsx("span",{children:c.inactiveTotal})]})]}),e.jsxs(W6,{children:[e.jsx("h2",{children:V.length===1?"1 tarefa nesta página":`${V.length} tarefas nesta página`}),e.jsx("span",{children:M||s!=="all"||l!=="all"?"Filtros aplicados nesta página":`Página ${c.page} de ${c.totalPages}`})]}),a?e.jsxs(Xe,{children:[e.jsx(rt,{}),e.jsx("p",{children:"Carregando tarefas..."})]}):V.length===0?e.jsx(Ue,{children:e.jsxs(Xe,{children:[e.jsx(rr,{size:32}),e.jsx("h3",{children:t.length===0?"Sua lista está pronta para começar":"Nenhuma tarefa encontrada"}),e.jsx("p",{children:t.length===0?"Crie sua primeira tarefa e organize seus próximos passos.":"Tente mudar a busca ou remover alguns filtros."}),e.jsx("div",{style:{marginTop:16},children:t.length===0?e.jsxs(pe,{$variant:"primary",onClick:()=>w("/tasks/new"),children:[e.jsx(yt,{}),"Criar primeira tarefa"]}):e.jsxs(pe,{onClick:$,children:[e.jsx(mr,{}),"Limpar filtros"]})})]})}):e.jsx(X6,{children:V.map(j=>{const A=[...j.items??[]].sort((I,ce)=>I.sort_order-ce.sort_order),O=A.filter(I=>!!I.completed).length,ae=A.some(I=>I.completed!==void 0),J=A.length?Math.round(O/A.length*100):0;return e.jsxs(Z6,{$active:j.is_active,children:[e.jsxs(eR,{children:[e.jsxs(tR,{children:[e.jsxs(rR,{children:[e.jsx("h3",{children:j.title}),e.jsx("p",{children:j.description||"Sem descrição"})]}),e.jsxs(nR,{children:[e.jsx(Dr,{$done:j.is_active,children:j.is_active?"Ativa":"Desativada"}),j.priority&&e.jsxs(fR,{$priority:j.priority,children:["Prioridade ",hR[j.priority].toLowerCase()]})]})]}),e.jsxs(aR,{children:[e.jsxs(ac,{children:[e.jsx(Je,{}),"Início ",zv(j.start_date)]}),e.jsxs(ac,{children:[e.jsx(Je,{}),"Fim ",zv(j.end_date)]}),e.jsxs(ac,{children:[e.jsx(rr,{}),A.length," ",A.length===1?"item":"itens"]}),e.jsxs(ac,{children:["ID ",j.id]})]}),A.length>0&&e.jsxs(iR,{"aria-label":"Itens da tarefa",children:[A.slice(0,3).map(I=>e.jsx(sR,{title:I.title,children:I.title},I.id)),A.length>3&&e.jsxs(oR,{children:["+",A.length-3," itens"]}),ae&&e.jsxs(lR,{"aria-label":`${J}% concluído`,children:[e.jsx(cR,{children:e.jsx("div",{style:{width:`${J}%`}})}),e.jsxs("span",{children:[O,"/",A.length," concluídos"]})]})]})]}),e.jsxs(dR,{children:[e.jsxs(uR,{children:[e.jsxs("span",{children:["Criada ",e.jsx("strong",{children:Pv(j.created_at)})]}),e.jsxs("span",{children:["Atualizada ",e.jsx("strong",{children:Pv(j.updated_at)})]})]}),e.jsxs(pR,{children:[e.jsxs(Op,{"aria-label":`Ver detalhes e editar ${j.title}`,title:"Detalhes e edição",onClick:()=>w(`/tasks/${encodeURIComponent(String(j.id))}`),children:[e.jsx(Oo,{}),"Editar"]}),j.is_active&&e.jsx(Op,{$variant:"danger",onClick:()=>b(j.id),disabled:_,children:"Desativar"}),e.jsx(Op,{$variant:"danger","aria-label":`Excluir tarefa ${j.title}`,title:"Excluir tarefa",onClick:()=>R(j),children:e.jsx(Rr,{})})]})]})]},j.id)})}),c.total>0&&e.jsxs(K6,{"aria-label":"Paginação da lista de tarefas",children:[e.jsxs(Q6,{children:["Exibindo ",(c.page-1)*c.limit+1,"–",Math.min(c.page*c.limit,c.total)," de ",c.total," tarefas"]}),e.jsxs(Y6,{children:[e.jsxs("label",{children:[e.jsx("span",{style:{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:0},children:"Tarefas por página"}),e.jsxs(J6,{"aria-label":"Tarefas por página",value:c.limit,onChange:j=>g(Number(j.target.value)),children:[e.jsx("option",{value:5,children:"5 por página"}),e.jsx("option",{value:10,children:"10 por página"}),e.jsx("option",{value:20,children:"20 por página"}),e.jsx("option",{value:50,children:"50 por página"}),e.jsx("option",{value:100,children:"100 por página"})]})]}),e.jsxs(Rv,{"aria-label":"Página anterior",disabled:!c.hasPreviousPage||a,onClick:()=>f(c.page-1),children:[e.jsx(Ao,{}),"Anterior"]}),e.jsxs(Rv,{"aria-label":"Próxima página",disabled:!c.hasNextPage||a,onClick:()=>f(c.page+1),children:["Próxima",e.jsx(ms,{})]})]})]})]})}const xR={"/login":"login","/":"today","/tasks":"list","/tasks/new":"create","/planning":"planning","/today":"today","/week":"week","/month":"month","/completed":"completed","/goals":"goals","/history":"history","/schedule":"schedule","/study-resources":"study-resources","/finances":"finances","/english-study":"english-study","/expenses":"expenses","/fuel-calculator":"fuel-calculator","/daily-routes":"daily-routes","/dividends":"dividends","/fixed-income":"fixed-income","/opportunities":"opportunities"};function Nv(t){const a=xR[t];if(a)return{page:a};const s=t.match(/^\/tasks\/([^/]+)$/);if(s){const c=decodeURIComponent(s[1]);if(c!=="new")return{page:"details",taskId:c}}const l=t.match(/^\/study-resources\/([^/]+)\/edit$/);if(l)return{page:"study-resource-edit",resourceId:decodeURIComponent(l[1])}}function ic(t){if(!t)return[];const a=new Map;for(const s of t.items){const l=String(s.task_id),c=a.get(l)??{task_id:s.task_id,record_date:t.date,task_title:s.task_title,items:[],total_items:0,completed_items:0};c.items.push({id:s.id,task_item_id:s.task_item_id,title:s.title,is_completed:s.is_completed,completed_at:s.completed_at,record_date:s.record_date}),c.total_items+=1,s.is_completed&&(c.completed_items+=1),a.set(l,c)}return[...a.values()]}function Av(t){return{date:t.start_date,total_items:t.total_items,completed_items:t.completed_items,pending_items:t.pending_items,completion_percentage:t.completion_percentage,items:t.items.map(a=>({...a,record_date:a.date}))}}function gR(){const[t,a]=x.useState(()=>window.location.pathname),s=Nv(t),l=(s==null?void 0:s.page)??"list",[c,u]=x.useState([]),[m,f]=x.useState([]),[g,w]=x.useState([]),[b,S]=x.useState({mode:"all"}),[_,R]=x.useState(1),[M,N]=x.useState({page:1,limit:20,total:0,totalPages:0,hasNextPage:!1,hasPreviousPage:!1}),[V,$]=x.useState([]),[j,A]=x.useState({page:1,limit:20,total:0,totalPages:0,hasNextPage:!1,hasPreviousPage:!1}),[O,ae]=x.useState(!1),[J,I]=x.useState([]),[ce,C]=x.useState([]),[y,q]=x.useState({area:"",type:"",search:""}),[F,fe]=x.useState(1),[ge,Ne]=x.useState({page:1,limit:12,total:0,totalPages:0,hasNextPage:!1,hasPreviousPage:!1}),[K,je]=x.useState(null),[ue,ye]=x.useState(!1),[W,z]=x.useState([]),[k,se]=x.useState([]),[ie,D]=x.useState([]),[de,_e]=x.useState({total_balance:0,account_count:0}),[ke,U]=x.useState([]),[he,nt]=x.useState([]),[Ze,pt]=x.useState([]),[ht,Ot]=x.useState("daily"),[oe,$e]=x.useState(),[me,Pe]=x.useState(),[Y,Be]=x.useState(),[_t,ot]=x.useState(""),[zt,xr]=x.useState([]),[dr,gr]=x.useState(1),[zr,on]=x.useState({page:1,limit:10,total:0,totalPages:0,hasNextPage:!1,hasPreviousPage:!1}),[Nt,Pr]=x.useState(!1),[Tr,ta]=x.useState("all"),[Sn,ja]=x.useState("all"),[nr,kt]=x.useState(1),[Gt,ln]=x.useState(10),[te,Ke]=x.useState({page:1,limit:10,total:0,activeTotal:0,inactiveTotal:0,totalPages:0,hasNextPage:!1,hasPreviousPage:!1}),[St,jt]=x.useState(!1),[Vr,xt]=x.useState(!1),[cn,Ln]=x.useState(!1),[On,we]=x.useState(""),[ra,qe]=x.useState(""),[ft,Ka]=x.useState(""),[vr,dn]=x.useState(null),[Cn,In]=x.useState(!1),[Bn,na]=x.useState(null),[aa,un]=x.useState(!1),Ft=x.useCallback(H=>{window.history.pushState({},"",H),a(H),we(""),qe("")},[]);x.useEffect(()=>{T_().then(H=>na(H)).catch(()=>{na(null),window.location.pathname!=="/login"&&Ft("/login")}).finally(()=>un(!0))},[Ft]),x.useEffect(()=>{const H=()=>{a(window.location.pathname),we(""),qe("")};return window.addEventListener("popstate",H),()=>window.removeEventListener("popstate",H)},[]),x.useEffect(()=>{Nv(t)||(window.history.replaceState({},"","/today"),a("/today"))},[t]);const ur=x.useCallback(async(H=1,Z=100)=>{jt(!0),we("");try{const re=await ts(H,Z);return u(re.data),Ke(re.pagination),re.pagination.page!==H&&kt(re.pagination.page),!0}catch{return we("Não foi possível carregar as tarefas. Confira se a API está ligada em http://localhost:3333."),!1}finally{jt(!1)}},[]),Ri=x.useCallback(async()=>{var H,Z;jt(!0),we("");try{const[re,G]=await Promise.all([ts(1,100),ao()]);u(re.data),U(G)}catch(re){const G=(Z=(H=re==null?void 0:re.response)==null?void 0:H.data)==null?void 0:Z.error;we(G||"Não foi possível carregar os itens de hoje. Confira a rota GET /api/daily.")}finally{jt(!1)}},[]),Qa=x.useCallback(async()=>{var H,Z;jt(!0),we("");try{const[re,G]=await Promise.all([ts(1,100),ao()]);u(re.data),U(G)}catch(re){const G=(Z=(H=re==null?void 0:re.response)==null?void 0:H.data)==null?void 0:Z.error;we(G||"Não foi possível carregar os itens da semana. Confira as rotas GET /api/tasks e GET /api/daily.")}finally{jt(!1)}},[]),Ya=x.useCallback(async()=>{var H,Z;jt(!0),we("");try{const[re,G]=await Promise.all([ts(1,100),ao()]);u(re.data),U(G)}catch(re){const G=(Z=(H=re==null?void 0:re.response)==null?void 0:H.data)==null?void 0:Z.error;we(G||"Não foi possível carregar os itens do mês. Confira as rotas GET /api/tasks e GET /api/daily.")}finally{jt(!1)}},[]),ia=x.useCallback(async()=>{var H,Z;jt(!0),we("");try{U(await ao())}catch(re){const G=(Z=(H=re==null?void 0:re.response)==null?void 0:H.data)==null?void 0:Z.error;we(G||"Não foi possível carregar as atividades concluídas. Confira a rota GET /api/daily.")}finally{jt(!1)}},[]),ba=x.useCallback(async()=>{var H,Z;jt(!0),we("");try{f(await I2())}catch(re){const G=(Z=(H=re==null?void 0:re.response)==null?void 0:H.data)==null?void 0:Z.error;we(G||"Não foi possível carregar os objetivos. Confira se a API e a migração de objetivos estão configuradas.")}finally{jt(!1)}},[]),qt=x.useCallback(async(H,Z)=>{var re,G;jt(!0),we("");try{const xe=await G2(H,Z);w(xe.data),N(xe.pagination)}catch(xe){const Oe=(G=(re=xe==null?void 0:xe.response)==null?void 0:re.data)==null?void 0:G.error;we(Oe||"Não foi possível carregar a agenda. Confira a rota GET /api/schedule.")}finally{jt(!1)}},[]),st=x.useCallback(async(H=1)=>{var Z,re;ae(!0),we("");try{const G=await K2(H);return $(G.data),A(G.pagination),G}catch(G){const xe=(re=(Z=G==null?void 0:G.response)==null?void 0:Z.data)==null?void 0:re.error;we(xe||"Não foi possível carregar os alertas. Confira a rota GET /api/schedule/alerts.");return}finally{ae(!1)}},[]),Qe=x.useCallback(async(H=F,Z=y)=>{var re,G;jt(!0),we("");try{const[xe,Oe]=await Promise.all([I_({...Z,page:H,limit:12}),B_()]);I(xe.data),Ne(xe.pagination),C(Oe)}catch(xe){const Oe=(G=(re=xe==null?void 0:xe.response)==null?void 0:re.data)==null?void 0:G.error;we(Oe||"Não foi possível carregar a biblioteca de estudos. Confira as rotas /api/study-resources.")}finally{jt(!1)}},[y,F]),tt=x.useCallback(async()=>{var H,Z;jt(!0),we("");try{const[re,G,xe,Oe]=await Promise.all([_2(),k2(),$2(),N2()]);_e(re),z(G),se(xe),D(Oe)}catch(re){const G=(Z=(H=re==null?void 0:re.response)==null?void 0:H.data)==null?void 0:Z.error;we(G||"NÃ£o foi possÃ­vel carregar as finanÃ§as. Confira as rotas /api/finances.")}finally{jt(!1)}},[]),pr=x.useCallback(async(H=dr,Z=ht,re=oe)=>{var G,xe;jt(!0),we("");try{if(Z==="daily"){const Oe=await T2(H,10,re);nt(Oe.data),pt([]),on(Oe.pagination),Pe(void 0);const Ge=Oe.data[0];Ge?(Be(Ge),ot(Ge.date.slice(0,10)),xr(ic(Ge))):(Be(void 0),ot(""),xr([]))}else{const Oe=Z==="week"?await L2(H,10,re):await O2(H,10,re);nt([]),pt(Oe.data),on(Oe.pagination);const Ge=Oe.data[0];if(Pe(Ge),Ge){const ut=Av(Ge);Be(ut),ot(Ge.start_date.slice(0,10)),xr(ic(ut))}else Be(void 0),ot(""),xr([])}}catch(Oe){const Ge=(xe=(G=Oe==null?void 0:Oe.response)==null?void 0:G.data)==null?void 0:xe.error;we(Ge||`Não foi possível carregar o histórico. Confira a rota GET ${Z==="week"?"/api/daily/history/week":Z==="month"?"/api/daily/history/month":"/api/daily/history"}.`)}finally{jt(!1)}},[ht,dr,oe]),Ja=x.useCallback(async H=>{var Z,re;ot(H),Pe(void 0),Pr(!0);try{const G=await F2(H),xe={date:G.date,total_items:G.summary.total_items,completed_items:G.summary.completed_items,pending_items:G.summary.pending_items,completion_percentage:G.summary.completion_percentage,items:G.data.map(Oe=>({id:Oe.id,task_id:Oe.task_id,task_title:Oe.task_title,task_item_id:Oe.task_item_id,title:Oe.item_title,is_completed:Oe.is_completed,completed_at:Oe.completed_at,record_date:Oe.date}))};Be(xe),xr(ic(xe))}catch(G){Be(void 0),xr([]),we(((re=(Z=G==null?void 0:G.response)==null?void 0:Z.data)==null?void 0:re.error)||"Não foi possível carregar os registros desta data.")}finally{Pr(!1)}},[]),qn=x.useCallback(H=>{const Z=Av(H);Pe(H),Be(Z),ot(H.start_date.slice(0,10)),xr(ic(Z))},[]);x.useEffect(()=>{!aa||!Bn||(l==="planning"||l==="today"?Ri():l==="week"?Qa():l==="month"?Ya():l==="completed"?ia():l==="goals"?ba():l==="schedule"?(qt(b,_),st()):l==="study-resources"?Qe(F,y):l==="finances"?tt():l==="list"?ur(nr,Gt):l!=="login"&&l!=="english-study"&&l!=="expenses"&&l!=="dividends"&&l!=="fixed-income"&&l!=="opportunities"&&l!=="study-resource-edit"&&ur(1,100))},[aa,Bn,l,nr,Gt,b,_,F,y,ur,Ri,Qa,Ya,ia,ba,qt,st,Qe,tt]),x.useEffect(()=>{if(l!=="study-resource-edit"){je(null),ye(!1);return}if(!aa||!Bn||!(s!=null&&s.resourceId))return;const H=s.resourceId;if(K&&String(K.id)===String(H)){ye(!1);return}const Z=J.find(G=>String(G.id)===String(H));if(Z){je(Z),ye(!1);return}let re=!1;return ye(!0),y2(H).then(G=>{re||je(G)}).catch(()=>{re||je(null)}).finally(()=>{re||ye(!1)}),()=>{re=!0}},[aa,Bn,K,l,s==null?void 0:s.resourceId,J]),x.useEffect(()=>{(l==="history"||l==="planning")&&pr(dr,ht,oe)},[l,dr,ht,oe,pr]);const zi=x.useCallback(async H=>{var Z,re;we(""),qe(""),xt(!0);try{return await X2(H),Ft("/tasks"),qe("Tarefa criada com sucesso."),kt(1),await ur(1,Gt),!0}catch(G){const xe=(re=(Z=G==null?void 0:G.response)==null?void 0:Z.data)==null?void 0:re.error;return we(xe||"Não foi possível salvar. Confira a API, o schema e a função ensure_task_daily_records no PostgreSQL."),!1}finally{xt(!1)}},[ur,Ft,Gt]),Pi=x.useCallback(async H=>{var Z,re;if(!(s!=null&&s.taskId))return!1;we(""),qe(""),xt(!0);try{return await Z2(s.taskId,H),Ft("/tasks"),qe("Tarefa atualizada com sucesso."),kt(1),await ur(1,Gt),!0}catch(G){const xe=(re=(Z=G==null?void 0:G.response)==null?void 0:Z.data)==null?void 0:re.error;return we(xe||"Não foi possível atualizar a tarefa. Confira se a API implementa PATCH /api/tasks/:id."),!1}finally{xt(!1)}},[ur,Ft,s==null?void 0:s.taskId,Gt]),E=x.useCallback(async H=>{var Z,re;we(""),qe(""),xt(!0);try{const G=await B2(H);return f(xe=>[G,...xe]),qe("Objetivo criado com sucesso."),!0}catch(G){const xe=(re=(Z=G==null?void 0:G.response)==null?void 0:Z.data)==null?void 0:re.error;return we(xe||"Não foi possível salvar o objetivo. Confira a rota POST /api/objectives e a migração do banco."),!1}finally{xt(!1)}},[]),le=x.useCallback(async H=>{var Z,re;we(""),qe(""),xt(!0);try{await Q2(H),qe("Agendamento criado com sucesso.");const[,G]=await Promise.all([qt(b,_),st(j.page)]);return G&&!G.data.length&&j.page>1&&await st(j.page-1),!0}catch(G){const xe=(re=(Z=G==null?void 0:G.response)==null?void 0:Z.data)==null?void 0:re.error;return we(xe||"Não foi possível criar o agendamento. Confira a rota POST /api/schedule."),!1}finally{xt(!1)}},[qt,st,j.page,b,_]),De=x.useCallback(async(H,Z)=>{var re,G;we(""),qe(""),xt(!0);try{await Y2(H,Z),qe("Agendamento atualizado com sucesso.");const[,xe]=await Promise.all([qt(b,_),st(j.page)]);return xe&&!xe.data.length&&j.page>1&&await st(j.page-1),!0}catch(xe){const Oe=(G=(re=xe==null?void 0:xe.response)==null?void 0:re.data)==null?void 0:G.error;return we(Oe||"Não foi possível atualizar o agendamento. Confira a rota PATCH /api/schedule/:id."),!1}finally{xt(!1)}},[qt,st,j.page,b,_]),He=x.useCallback(async H=>{var Z,re;we(""),qe("");try{await J2(H.id),qe("Agendamento excluído com sucesso.");const G=g.length===1&&_>1?_-1:_;R(G);const[,xe]=await Promise.all([qt(b,G),st(j.page)]);return xe&&!xe.data.length&&j.page>1&&await st(j.page-1),!0}catch(G){const xe=(re=(Z=G==null?void 0:G.response)==null?void 0:Z.data)==null?void 0:re.error;return we(xe||"Não foi possível excluir o agendamento. Confira a rota DELETE /api/schedule/:id."),!1}},[qt,st,j.page,g.length,_,b]),lt=x.useCallback(async(H=F,Z=y)=>{await Qe(H,Z)},[Qe,y,F]),Ct=x.useCallback(async H=>{var Z,re;we(""),qe(""),xt(!0);try{return await j2(H),await lt(1,y),fe(1),qe("Material adicionado à biblioteca."),!0}catch(G){return we(((re=(Z=G==null?void 0:G.response)==null?void 0:Z.data)==null?void 0:re.error)||"Não foi possível adicionar o material."),!1}finally{xt(!1)}},[lt,y]),Jt=x.useCallback(async(H,Z)=>{var re,G;we(""),qe(""),xt(!0);try{return await b2(H,Z),await lt(),qe("Material atualizado com sucesso."),Ft("/study-resources"),!0}catch(xe){return we(((G=(re=xe==null?void 0:xe.response)==null?void 0:re.data)==null?void 0:G.error)||"Não foi possível atualizar o material."),!1}finally{xt(!1)}},[Ft,lt]),Kt=x.useCallback(async H=>{var Z,re;we(""),qe("");try{await w2(H.id);const G=J.length===1&&F>1?F-1:F;return await lt(G),fe(G),qe("Material removido da biblioteca."),!0}catch(G){return we(((re=(Z=G==null?void 0:G.response)==null?void 0:Z.data)==null?void 0:re.error)||"Não foi possível remover o material."),!1}},[lt,F,J.length]),mt=x.useCallback(async H=>{var Z,re;we(""),qe(""),xt(!0);try{return await S2(H),await tt(),qe("Conta adicionada com sucesso."),!0}catch(G){return we(((re=(Z=G==null?void 0:G.response)==null?void 0:Z.data)==null?void 0:re.error)||"NÃ£o foi possÃ­vel adicionar a conta."),!1}finally{xt(!1)}},[tt]),Et=x.useCallback(async(H,Z)=>{var re,G;we(""),qe(""),xt(!0);try{return await C2(H,Z),await tt(),qe("Conta atualizada com sucesso."),!0}catch(xe){return we(((G=(re=xe==null?void 0:xe.response)==null?void 0:re.data)==null?void 0:G.error)||"NÃ£o foi possÃ­vel atualizar a conta."),!1}finally{xt(!1)}},[tt]),et=x.useCallback(async H=>{var Z,re;we(""),qe("");try{return await E2(H.id),await tt(),qe("Conta removida com sucesso."),!0}catch(G){return we(((re=(Z=G==null?void 0:G.response)==null?void 0:Z.data)==null?void 0:re.error)||"NÃ£o foi possÃ­vel remover a conta."),!1}},[tt]),ar=x.useCallback(async H=>{var Z,re;we(""),qe(""),xt(!0);try{return await R2(H),await tt(),qe("Bem adicionado com sucesso."),!0}catch(G){return we(((re=(Z=G==null?void 0:G.response)==null?void 0:Z.data)==null?void 0:re.error)||"Não foi possível adicionar o bem."),!1}finally{xt(!1)}},[tt]),ir=x.useCallback(async(H,Z)=>{var re,G;we(""),qe(""),xt(!0);try{return await z2(H,Z),await tt(),qe("Bem atualizado com sucesso."),!0}catch(xe){return we(((G=(re=xe==null?void 0:xe.response)==null?void 0:re.data)==null?void 0:G.error)||"Não foi possível atualizar o bem."),!1}finally{xt(!1)}},[tt]),Wr=x.useCallback(async H=>{var Z,re;we(""),qe("");try{return await P2(H.id),await tt(),qe("Bem removido com sucesso."),!0}catch(G){return we(((re=(Z=G==null?void 0:G.response)==null?void 0:Z.data)==null?void 0:re.error)||"Não foi possível remover o bem."),!1}},[tt]),Un=x.useCallback(async H=>{var Z,re;we(""),qe(""),xt(!0);try{return await A2(H),await tt(),qe("Passivo adicionado com sucesso."),!0}catch(G){return we(((re=(Z=G==null?void 0:G.response)==null?void 0:Z.data)==null?void 0:re.error)||"Não foi possível adicionar o passivo."),!1}finally{xt(!1)}},[tt]),Fr=x.useCallback(async(H,Z)=>{var re,G;we(""),qe(""),xt(!0);try{return await D2(H,Z),await tt(),qe("Passivo atualizado com sucesso."),!0}catch(xe){return we(((G=(re=xe==null?void 0:xe.response)==null?void 0:re.data)==null?void 0:G.error)||"Não foi possível atualizar o passivo."),!1}finally{xt(!1)}},[tt]),sa=x.useCallback(async H=>{var Z,re;we(""),qe("");try{return await M2(H.id),await tt(),qe("Passivo removido com sucesso."),!0}catch(G){return we(((re=(Z=G==null?void 0:G.response)==null?void 0:Z.data)==null?void 0:re.error)||"Não foi possível remover o passivo."),!1}},[tt]),Yc=x.useCallback(async(H,Z)=>{var re,G;we(""),qe(""),xt(!0);try{const xe=await q2(H,Z);return f(Oe=>Oe.map(Ge=>String(Ge.id)===String(H)?xe:Ge)),qe("Objetivo atualizado com sucesso."),!0}catch(xe){const Oe=(G=(re=xe==null?void 0:xe.response)==null?void 0:re.data)==null?void 0:G.error;return we(Oe||"Não foi possível atualizar o objetivo. Confira a rota PATCH /api/objectives/:id."),!1}finally{xt(!1)}},[]),ks=x.useCallback(async H=>{var Z,re;we(""),qe("");try{return await U2(H.id),f(G=>G.filter(xe=>String(xe.id)!==String(H.id))),qe("Objetivo excluído com sucesso."),!0}catch(G){const xe=(re=(Z=G==null?void 0:G.response)==null?void 0:Z.data)==null?void 0:re.error;return we(xe||"Não foi possível excluir o objetivo. Confira a rota DELETE /api/objectives/:id."),!1}},[]),bt=x.useCallback(async(H,Z)=>{var re,G;we("");try{const xe=await H2(H,Z);return f(Oe=>Oe.map(Ge=>String(Ge.id)===String(H)?{...Ge,steps:[...Ge.steps,xe]}:Ge)),!0}catch(xe){const Oe=(G=(re=xe==null?void 0:xe.response)==null?void 0:re.data)==null?void 0:G.error;return we(Oe||"Não foi possível adicionar a etapa. Confira a rota POST /api/objectives/:id/steps."),!1}},[]),Io=x.useCallback(async(H,Z,re)=>{var G,xe,Oe;we(""),f(Ge=>Ge.map(ut=>String(ut.id)===String(H)?{...ut,steps:ut.steps.map(Vt=>String(Vt.id)===String(Z.id)?{...Vt,status:re?"concluido":"pendente"}:Vt)}:ut));try{const Ge=await V2(H,Z.id,re?"concluido":"pendente");return f(ut=>ut.map(Vt=>String(Vt.id)===String(H)?{...Vt,steps:Vt.steps.map(Xt=>String(Xt.id)===String(Z.id)?Ge:Xt)}:Vt)),(G=Ge.activity)!=null&&G.message&&qe(Ge.activity.message),!0}catch(Ge){f(Vt=>Vt.map(Xt=>String(Xt.id)===String(H)?{...Xt,steps:Xt.steps.map(pn=>String(pn.id)===String(Z.id)?Z:pn)}:Xt));const ut=(Oe=(xe=Ge==null?void 0:Ge.response)==null?void 0:xe.data)==null?void 0:Oe.error;return we(ut||"Não foi possível atualizar a etapa. Confira a rota PATCH /api/objectives/:id/steps/:stepId."),!1}},[]),Bo=x.useCallback(async(H,Z)=>{var re,G;we("");try{return await W2(H,Z.id),f(xe=>xe.map(Oe=>String(Oe.id)===String(H)?{...Oe,steps:Oe.steps.filter(Ge=>String(Ge.id)!==String(Z.id))}:Oe)),!0}catch(xe){const Oe=(G=(re=xe==null?void 0:xe.response)==null?void 0:re.data)==null?void 0:G.error;return we(Oe||"Não foi possível remover a etapa. Confira a rota DELETE /api/objectives/:id/steps/:stepId."),!1}},[]),wa=x.useCallback(async(H,Z)=>{var re,G,xe,Oe;we(""),qe(""),Ka(""),U(Ge=>Ge.map(ut=>{const Vt=ut.items.map(Xt=>String(Xt.id)===String(H)?{...Xt,is_completed:Z}:Xt);return Vt.some((Xt,pn)=>Xt!==ut.items[pn])?{...ut,items:Vt,completed_items:Vt.filter(Xt=>Xt.is_completed).length}:ut}));try{const Ge=await tk(H,Z);Z&&Ka(((re=Ge.activity)==null?void 0:re.message)||"Você concluiu uma atividade da sua rotina."),(G=Ge.activity)!=null&&G.message&&!Z&&qe(Ge.activity.message);const{item_title:ut,title:Vt,...Xt}=Ge;U(pn=>pn.map(_a=>{const la=_a.items.map(En=>String(En.id)===String(Ge.id)?{...En,...Xt,title:ut??Vt??En.title}:En);return{..._a,items:la,completed_items:la.filter(En=>En.is_completed).length}}))}catch(Ge){const ut=(Oe=(xe=Ge==null?void 0:Ge.response)==null?void 0:xe.data)==null?void 0:Oe.error;we(ut||"Não foi possível atualizar a conclusão do item. Confira a rota PATCH /api/daily/items/:id.");try{U(await ao())}catch{we(`${ut||"Não foi possível atualizar a conclusão do item."} Não foi possível sincronizar novamente os itens de hoje.`)}}},[]),Xa=x.useCallback(async(H,Z)=>{if(!Z&&!window.confirm("Desativar esta tarefa? O histórico será preservado."))return!1;const re=c.find(G=>String(G.id)===String(H));we(""),qe(""),Ln(!0);try{return Z?await rk(H):await Jx(H),u(G=>G.map(xe=>String(xe.id)===String(H)?{...xe,is_active:Z}:xe)),re&&re.is_active!==Z&&Ke(G=>({...G,activeTotal:G.activeTotal+(Z?1:-1),inactiveTotal:G.inactiveTotal+(Z?-1:1)})),qe(Z?"Tarefa ativada.":"Tarefa desativada."),!0}catch{return we(Z?"Não foi possível ativar a tarefa. Confira se a API implementa PATCH /api/tasks/:id/activate.":"Não foi possível desativar a tarefa. Confira a rota PATCH /api/tasks/:id/deactivate."),!1}finally{Ln(!1)}},[c]),qo=x.useCallback(async()=>{var re,G;const H=te.activeTotal;if(H===0||!window.confirm(`Desativar todas as ${H} tarefas ativas? O histórico será preservado.`))return;we(""),qe(""),Ln(!0);let Z=0;try{const xe=await ts(1,100),Oe=[...xe.data];for(let ut=2;ut<=xe.pagination.totalPages;ut+=1){const Vt=await ts(ut,100);Oe.push(...Vt.data)}for(const ut of Oe)ut.is_active&&(await Jx(ut.id),Z+=1);if(!await ur(nr,Gt)){we("Todas as tarefas foram desativadas, mas não foi possível atualizar a lista.");return}qe(Z===0?"Todas as tarefas já estavam desativadas.":`${Z} ${Z===1?"tarefa desativada":"tarefas desativadas"}. O histórico foi preservado.`)}catch(xe){const Oe=(G=(re=xe==null?void 0:xe.response)==null?void 0:re.data)==null?void 0:G.error,Ge=await ur(nr,Gt),ut=Z>0?`Desativação parcial: ${Z} tarefas foram desativadas antes da falha.${Oe?` Erro: ${Oe}`:""}`:Oe||"Não foi possível desativar todas as tarefas.";we(Ge?ut:`${ut} Também não foi possível atualizar a lista.`)}finally{Ln(!1)}},[ur,Gt,nr,te.activeTotal]),Ss=x.useCallback(async H=>{dn(H)},[]),Cs=x.useCallback(async()=>{var H,Z;if(!(!vr||Cn)){we(""),qe(""),In(!0);try{await ek(vr.id);const re=c.length===1&&nr>1?nr-1:nr;kt(re),await ur(re,Gt),dn(null),qe("Tarefa excluída com sucesso.")}catch(re){const G=(Z=(H=re==null?void 0:re.response)==null?void 0:H.data)==null?void 0:Z.error;we(G||"Não foi possível excluir a tarefa. Confira se a API implementa DELETE /api/tasks/:id."),dn(null)}finally{In(!1)}}},[Cn,ur,Gt,nr,vr,c.length]),oa=x.useMemo(()=>({tasks:c,loading:St,onNavigate:Ft,onDeactivate:H=>{Xa(H,!1)}}),[c,St,Ft,Xa]);async function Hn(H){const Z=await M_(H);return na(Z),un(!0),Ft("/today"),Z}async function Vn(H){return await D_(H)}async function Wn(){try{await F_()}finally{na(null),Ft("/login")}}if(!aa)return null;if(l==="login"||!Bn)return e.jsx(n4,{onLogin:Hn,onRegister:Vn});let Rt;switch(l){case"planning":Rt=e.jsx(G4,{tasks:c,dailyRecords:ke,loading:St,onNavigate:Ft,onToggleItem:(H,Z)=>{wa(H,Z)},onDeactivate:H=>{Xa(H,!1)},history:{mode:ht,days:he,periods:Ze,selectedDay:Y,selectedPeriod:me,selectedDate:_t,dayDetails:zt,pagination:zr,detailLoading:Nt,referenceDate:oe,onModeChange:H=>{Ot(H),gr(1),$e(void 0),Pe(void 0),ht===H&&H!=="daily"&&pr(1,H,void 0)},onPeriodSearch:H=>{$e(H),gr(1),Pe(void 0),oe===H&&pr(1,ht,H)},onSelectDate:Ja,onSelectPeriod:qn,onPageChange:gr}});break;case"create":Rt=e.jsx(nC,{saving:Vr,onCreate:zi,onValidationError:we});break;case"today":Rt=e.jsx(py,{...oa,dailyRecords:ke,onToggleItem:(H,Z)=>{wa(H,Z)}});break;case"week":Rt=e.jsx(fy,{...oa,dailyRecords:ke,onToggleItem:(H,Z)=>{wa(H,Z)}});break;case"month":Rt=e.jsx(uy,{...oa,dailyRecords:ke,onToggleItem:(H,Z)=>{wa(H,Z)}});break;case"completed":Rt=e.jsx(ly,{dailyRecords:ke,loading:St,onNavigate:Ft});break;case"goals":Rt=e.jsx(DC,{goals:m,loading:St,saving:Vr,onCreate:E,onUpdate:Yc,onDelete:ks,onAddStep:bt,onToggleStep:Io,onDeleteStep:Bo});break;case"study-resources":Rt=e.jsx(q3,{resources:J,areas:ce,loading:St,saving:Vr,pagination:ge,filters:y,onFiltersChange:H=>{q(H),fe(1)},onPageChange:fe,onCreate:Ct,onDelete:Kt,onEdit:H=>{je(H),ye(!1),Ft(`/study-resources/${encodeURIComponent(String(H.id))}/edit`)}});break;case"study-resource-edit":Rt=e.jsx(G3,{resource:K,loading:ue,saving:Vr,onBack:()=>Ft("/study-resources"),onSave:H=>s!=null&&s.resourceId?Jt(s.resourceId,H):Promise.resolve(!1)});break;case"finances":Rt=e.jsx(r5,{accounts:W,assets:k,liabilities:ie,summary:de,loading:St,saving:Vr,onCreate:mt,onUpdate:Et,onDelete:et,onCreateAsset:ar,onUpdateAsset:ir,onDeleteAsset:Wr,onCreateLiability:Un,onUpdateLiability:Fr,onDeleteLiability:sa});break;case"dividends":Rt=e.jsx(xv,{},"dividends");break;case"fixed-income":Rt=e.jsx(xv,{assetType:"renda_fixa"},"fixed-income");break;case"opportunities":Rt=e.jsx(O6,{});break;case"expenses":Rt=e.jsx(G5,{});break;case"fuel-calculator":Rt=e.jsx(uE,{});break;case"daily-routes":Rt=e.jsx(WE,{});break;case"english-study":Rt=e.jsx($5,{onNavigate:H=>{H==="/study-resources"&&(q({area:"Inglês",type:"",search:""}),fe(1)),Ft(H)}});break;case"schedule":Rt=e.jsx(m3,{events:g,alerts:V,loading:St,alertsLoading:O,saving:Vr,query:b,pagination:M,alertPagination:j,onApplyFilter:H=>{S(H),R(1),JSON.stringify(b)===JSON.stringify(H)&&_===1&&qt(H,1)},onPageChange:R,onAlertPageChange:H=>{st(H)},onCreate:le,onUpdate:De,onDelete:He});break;case"details":{const H=c.find(Z=>String(Z.id)===String(s==null?void 0:s.taskId));Rt=e.jsx(I6,{task:H,loading:St,saving:Vr,statusChanging:cn,onBack:()=>Ft("/tasks"),onSave:Pi,onDelete:Z=>{const re=c.find(G=>String(G.id)===String(Z));re&&Ss(re)},onSetActive:Xa,onValidationError:we});break}case"history":Rt=e.jsx(cy,{mode:ht,days:he,periods:Ze,selectedDay:Y,selectedPeriod:me,selectedDate:_t,dayDetails:zt,pagination:zr,loading:St,detailLoading:Nt,referenceDate:oe,onModeChange:H=>{Ot(H),gr(1),$e(void 0),Pe(void 0),ht===H&&H!=="daily"&&pr(1,H,void 0)},onPeriodSearch:H=>{$e(H),gr(1),Pe(void 0),oe===H&&pr(1,ht,H)},onSelectDate:Ja,onSelectPeriod:qn,onPageChange:gr});break;case"list":default:Rt=e.jsx(mR,{...oa,statusFilter:Tr,priorityFilter:Sn,pagination:te,onPageChange:kt,onPageSizeChange:H=>{ln(H),kt(1)},onStatusFilterChange:H=>{ta(H),kt(1)},onPriorityFilterChange:H=>{ja(H),kt(1)},onDeactivateAll:()=>{qo()},statusChanging:cn,onDelete:H=>{Ss(H)}})}return e.jsxs(rC,{page:l,error:On,notice:ra,celebration:ft,onNavigate:Ft,user:Bn,onLogout:()=>{Wn()},onDismissError:()=>we(""),onDismissNotice:()=>qe(""),onDismissCelebration:()=>Ka(""),children:[Rt,e.jsx(Kc,{open:vr!==null,title:"Deseja excluir esta tarefa?",description:vr?`A tarefa “${vr.title}” será removida permanentemente, incluindo seus itens.`:"",busy:Cn,onCancel:()=>{Cn||dn(null)},onConfirm:()=>{Cs()}})]})}function vR(){return e.jsx(MS,{children:e.jsx(gR,{})})}const yR=wb`
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
`,jR={colors:{navy:"#0F172A",blue:"#2563EB",muted:"#64748B",border:"#E2E8F0",background:"#F8FAFC"}};fj.createRoot(document.getElementById("root")).render(e.jsx(Cr.StrictMode,{children:e.jsxs(gb,{theme:jR,children:[e.jsx(yR,{}),e.jsx(vR,{})]})}));
