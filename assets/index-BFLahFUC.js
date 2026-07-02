(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function sy(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var b0={exports:{}},Oc={},A0={exports:{}},qe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ao=Symbol.for("react.element"),ay=Symbol.for("react.portal"),oy=Symbol.for("react.fragment"),ly=Symbol.for("react.strict_mode"),cy=Symbol.for("react.profiler"),uy=Symbol.for("react.provider"),fy=Symbol.for("react.context"),dy=Symbol.for("react.forward_ref"),hy=Symbol.for("react.suspense"),py=Symbol.for("react.memo"),my=Symbol.for("react.lazy"),Vp=Symbol.iterator;function gy(t){return t===null||typeof t!="object"?null:(t=Vp&&t[Vp]||t["@@iterator"],typeof t=="function"?t:null)}var C0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R0=Object.assign,P0={};function fa(t,e,n){this.props=t,this.context=e,this.refs=P0,this.updater=n||C0}fa.prototype.isReactComponent={};fa.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};fa.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function N0(){}N0.prototype=fa.prototype;function Sh(t,e,n){this.props=t,this.context=e,this.refs=P0,this.updater=n||C0}var Mh=Sh.prototype=new N0;Mh.constructor=Sh;R0(Mh,fa.prototype);Mh.isPureReactComponent=!0;var Hp=Array.isArray,L0=Object.prototype.hasOwnProperty,Eh={current:null},D0={key:!0,ref:!0,__self:!0,__source:!0};function I0(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)L0.call(e,i)&&!D0.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Ao,type:t,key:s,ref:a,props:r,_owner:Eh.current}}function vy(t,e){return{$$typeof:Ao,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function wh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ao}function _y(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Gp=/\/+/g;function fu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?_y(""+t.key):e.toString(36)}function Fl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Ao:case ay:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+fu(a,0):i,Hp(r)?(n="",t!=null&&(n=t.replace(Gp,"$&/")+"/"),Fl(r,e,n,"",function(c){return c})):r!=null&&(wh(r)&&(r=vy(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Gp,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",Hp(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+fu(s,o);a+=Fl(s,e,n,l,r)}else if(l=gy(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+fu(s,o++),a+=Fl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function jo(t,e,n){if(t==null)return t;var i=[],r=0;return Fl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function xy(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var _n={current:null},Ol={transition:null},yy={ReactCurrentDispatcher:_n,ReactCurrentBatchConfig:Ol,ReactCurrentOwner:Eh};function U0(){throw Error("act(...) is not supported in production builds of React.")}qe.Children={map:jo,forEach:function(t,e,n){jo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return jo(t,function(){e++}),e},toArray:function(t){return jo(t,function(e){return e})||[]},only:function(t){if(!wh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};qe.Component=fa;qe.Fragment=oy;qe.Profiler=cy;qe.PureComponent=Sh;qe.StrictMode=ly;qe.Suspense=hy;qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yy;qe.act=U0;qe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=R0({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=Eh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)L0.call(e,l)&&!D0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:Ao,type:t.type,key:r,ref:s,props:i,_owner:a}};qe.createContext=function(t){return t={$$typeof:fy,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:uy,_context:t},t.Consumer=t};qe.createElement=I0;qe.createFactory=function(t){var e=I0.bind(null,t);return e.type=t,e};qe.createRef=function(){return{current:null}};qe.forwardRef=function(t){return{$$typeof:dy,render:t}};qe.isValidElement=wh;qe.lazy=function(t){return{$$typeof:my,_payload:{_status:-1,_result:t},_init:xy}};qe.memo=function(t,e){return{$$typeof:py,type:t,compare:e===void 0?null:e}};qe.startTransition=function(t){var e=Ol.transition;Ol.transition={};try{t()}finally{Ol.transition=e}};qe.unstable_act=U0;qe.useCallback=function(t,e){return _n.current.useCallback(t,e)};qe.useContext=function(t){return _n.current.useContext(t)};qe.useDebugValue=function(){};qe.useDeferredValue=function(t){return _n.current.useDeferredValue(t)};qe.useEffect=function(t,e){return _n.current.useEffect(t,e)};qe.useId=function(){return _n.current.useId()};qe.useImperativeHandle=function(t,e,n){return _n.current.useImperativeHandle(t,e,n)};qe.useInsertionEffect=function(t,e){return _n.current.useInsertionEffect(t,e)};qe.useLayoutEffect=function(t,e){return _n.current.useLayoutEffect(t,e)};qe.useMemo=function(t,e){return _n.current.useMemo(t,e)};qe.useReducer=function(t,e,n){return _n.current.useReducer(t,e,n)};qe.useRef=function(t){return _n.current.useRef(t)};qe.useState=function(t){return _n.current.useState(t)};qe.useSyncExternalStore=function(t,e,n){return _n.current.useSyncExternalStore(t,e,n)};qe.useTransition=function(){return _n.current.useTransition()};qe.version="18.3.1";A0.exports=qe;var te=A0.exports;const Hs=sy(te);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sy=te,My=Symbol.for("react.element"),Ey=Symbol.for("react.fragment"),wy=Object.prototype.hasOwnProperty,Ty=Sy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,by={key:!0,ref:!0,__self:!0,__source:!0};function F0(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)wy.call(e,i)&&!by.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:My,type:t,key:s,ref:a,props:r,_owner:Ty.current}}Oc.Fragment=Ey;Oc.jsx=F0;Oc.jsxs=F0;b0.exports=Oc;var C=b0.exports,Af={},O0={exports:{}},zn={},k0={exports:{}},B0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,V){var J=U.length;U.push(V);e:for(;0<J;){var ee=J-1>>>1,le=U[ee];if(0<r(le,V))U[ee]=V,U[J]=le,J=ee;else break e}}function n(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var V=U[0],J=U.pop();if(J!==V){U[0]=J;e:for(var ee=0,le=U.length,Ie=le>>>1;ee<Ie;){var we=2*(ee+1)-1,Te=U[we],K=we+1,ue=U[K];if(0>r(Te,J))K<le&&0>r(ue,Te)?(U[ee]=ue,U[K]=J,ee=K):(U[ee]=Te,U[we]=J,ee=we);else if(K<le&&0>r(ue,J))U[ee]=ue,U[K]=J,ee=K;else break e}}return V}function r(U,V){var J=U.sortIndex-V.sortIndex;return J!==0?J:U.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],u=1,h=null,f=3,p=!1,v=!1,E=!1,_=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function M(U){for(var V=n(c);V!==null;){if(V.callback===null)i(c);else if(V.startTime<=U)i(c),V.sortIndex=V.expirationTime,e(l,V);else break;V=n(c)}}function y(U){if(E=!1,M(U),!v)if(n(l)!==null)v=!0,j(b);else{var V=n(c);V!==null&&X(y,V.startTime-U)}}function b(U,V){v=!1,E&&(E=!1,d(x),x=-1),p=!0;var J=f;try{for(M(V),h=n(l);h!==null&&(!(h.expirationTime>V)||U&&!L());){var ee=h.callback;if(typeof ee=="function"){h.callback=null,f=h.priorityLevel;var le=ee(h.expirationTime<=V);V=t.unstable_now(),typeof le=="function"?h.callback=le:h===n(l)&&i(l),M(V)}else i(l);h=n(l)}if(h!==null)var Ie=!0;else{var we=n(c);we!==null&&X(y,we.startTime-V),Ie=!1}return Ie}finally{h=null,f=J,p=!1}}var w=!1,A=null,x=-1,T=5,R=-1;function L(){return!(t.unstable_now()-R<T)}function F(){if(A!==null){var U=t.unstable_now();R=U;var V=!0;try{V=A(!0,U)}finally{V?$():(w=!1,A=null)}}else w=!1}var $;if(typeof g=="function")$=function(){g(F)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,O=Y.port2;Y.port1.onmessage=F,$=function(){O.postMessage(null)}}else $=function(){_(F,0)};function j(U){A=U,w||(w=!0,$())}function X(U,V){x=_(function(){U(t.unstable_now())},V)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){v||p||(v=!0,j(b))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(U){switch(f){case 1:case 2:case 3:var V=3;break;default:V=f}var J=f;f=V;try{return U()}finally{f=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,V){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var J=f;f=U;try{return V()}finally{f=J}},t.unstable_scheduleCallback=function(U,V,J){var ee=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?ee+J:ee):J=ee,U){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=J+le,U={id:u++,callback:V,priorityLevel:U,startTime:J,expirationTime:le,sortIndex:-1},J>ee?(U.sortIndex=J,e(c,U),n(l)===null&&U===n(c)&&(E?(d(x),x=-1):E=!0,X(y,J-ee))):(U.sortIndex=le,e(l,U),v||p||(v=!0,j(b))),U},t.unstable_shouldYield=L,t.unstable_wrapCallback=function(U){var V=f;return function(){var J=f;f=V;try{return U.apply(this,arguments)}finally{f=J}}}})(B0);k0.exports=B0;var Ay=k0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cy=te,Bn=Ay;function de(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var z0=new Set,ro={};function ls(t,e){Qs(t,e),Qs(t+"Capture",e)}function Qs(t,e){for(ro[t]=e,t=0;t<e.length;t++)z0.add(e[t])}var Gi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Cf=Object.prototype.hasOwnProperty,Ry=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Wp={},jp={};function Py(t){return Cf.call(jp,t)?!0:Cf.call(Wp,t)?!1:Ry.test(t)?jp[t]=!0:(Wp[t]=!0,!1)}function Ny(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Ly(t,e,n,i){if(e===null||typeof e>"u"||Ny(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function xn(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var nn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){nn[t]=new xn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];nn[e]=new xn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){nn[t]=new xn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){nn[t]=new xn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){nn[t]=new xn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){nn[t]=new xn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){nn[t]=new xn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){nn[t]=new xn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){nn[t]=new xn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Th=/[\-:]([a-z])/g;function bh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Th,bh);nn[e]=new xn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Th,bh);nn[e]=new xn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Th,bh);nn[e]=new xn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){nn[t]=new xn(t,1,!1,t.toLowerCase(),null,!1,!1)});nn.xlinkHref=new xn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){nn[t]=new xn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ah(t,e,n,i){var r=nn.hasOwnProperty(e)?nn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Ly(e,n,r,i)&&(n=null),i||r===null?Py(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Zi=Cy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Xo=Symbol.for("react.element"),Cs=Symbol.for("react.portal"),Rs=Symbol.for("react.fragment"),Ch=Symbol.for("react.strict_mode"),Rf=Symbol.for("react.profiler"),V0=Symbol.for("react.provider"),H0=Symbol.for("react.context"),Rh=Symbol.for("react.forward_ref"),Pf=Symbol.for("react.suspense"),Nf=Symbol.for("react.suspense_list"),Ph=Symbol.for("react.memo"),lr=Symbol.for("react.lazy"),G0=Symbol.for("react.offscreen"),Xp=Symbol.iterator;function ya(t){return t===null||typeof t!="object"?null:(t=Xp&&t[Xp]||t["@@iterator"],typeof t=="function"?t:null)}var Lt=Object.assign,du;function Ba(t){if(du===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);du=e&&e[1]||""}return`
`+du+t}var hu=!1;function pu(t,e){if(!t||hu)return"";hu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{hu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ba(t):""}function Dy(t){switch(t.tag){case 5:return Ba(t.type);case 16:return Ba("Lazy");case 13:return Ba("Suspense");case 19:return Ba("SuspenseList");case 0:case 2:case 15:return t=pu(t.type,!1),t;case 11:return t=pu(t.type.render,!1),t;case 1:return t=pu(t.type,!0),t;default:return""}}function Lf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Rs:return"Fragment";case Cs:return"Portal";case Rf:return"Profiler";case Ch:return"StrictMode";case Pf:return"Suspense";case Nf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case H0:return(t.displayName||"Context")+".Consumer";case V0:return(t._context.displayName||"Context")+".Provider";case Rh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ph:return e=t.displayName||null,e!==null?e:Lf(t.type)||"Memo";case lr:e=t._payload,t=t._init;try{return Lf(t(e))}catch{}}return null}function Iy(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Lf(e);case 8:return e===Ch?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function br(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function W0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Uy(t){var e=W0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function $o(t){t._valueTracker||(t._valueTracker=Uy(t))}function j0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=W0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function ic(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Df(t,e){var n=e.checked;return Lt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function $p(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=br(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function X0(t,e){e=e.checked,e!=null&&Ah(t,"checked",e,!1)}function If(t,e){X0(t,e);var n=br(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Uf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Uf(t,e.type,br(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function qp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Uf(t,e,n){(e!=="number"||ic(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var za=Array.isArray;function Gs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+br(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Ff(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(de(91));return Lt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Yp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(de(92));if(za(n)){if(1<n.length)throw Error(de(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:br(n)}}function $0(t,e){var n=br(e.value),i=br(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Kp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function q0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Of(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?q0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var qo,Y0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(qo=qo||document.createElement("div"),qo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=qo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function so(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Xa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Fy=["Webkit","ms","Moz","O"];Object.keys(Xa).forEach(function(t){Fy.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Xa[e]=Xa[t]})});function K0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Xa.hasOwnProperty(t)&&Xa[t]?(""+e).trim():e+"px"}function Z0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=K0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Oy=Lt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function kf(t,e){if(e){if(Oy[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(de(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(de(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(de(61))}if(e.style!=null&&typeof e.style!="object")throw Error(de(62))}}function Bf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zf=null;function Nh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Vf=null,Ws=null,js=null;function Zp(t){if(t=Po(t)){if(typeof Vf!="function")throw Error(de(280));var e=t.stateNode;e&&(e=Hc(e),Vf(t.stateNode,t.type,e))}}function J0(t){Ws?js?js.push(t):js=[t]:Ws=t}function Q0(){if(Ws){var t=Ws,e=js;if(js=Ws=null,Zp(t),e)for(t=0;t<e.length;t++)Zp(e[t])}}function ev(t,e){return t(e)}function tv(){}var mu=!1;function nv(t,e,n){if(mu)return t(e,n);mu=!0;try{return ev(t,e,n)}finally{mu=!1,(Ws!==null||js!==null)&&(tv(),Q0())}}function ao(t,e){var n=t.stateNode;if(n===null)return null;var i=Hc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(de(231,e,typeof n));return n}var Hf=!1;if(Gi)try{var Sa={};Object.defineProperty(Sa,"passive",{get:function(){Hf=!0}}),window.addEventListener("test",Sa,Sa),window.removeEventListener("test",Sa,Sa)}catch{Hf=!1}function ky(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var $a=!1,rc=null,sc=!1,Gf=null,By={onError:function(t){$a=!0,rc=t}};function zy(t,e,n,i,r,s,a,o,l){$a=!1,rc=null,ky.apply(By,arguments)}function Vy(t,e,n,i,r,s,a,o,l){if(zy.apply(this,arguments),$a){if($a){var c=rc;$a=!1,rc=null}else throw Error(de(198));sc||(sc=!0,Gf=c)}}function cs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function iv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Jp(t){if(cs(t)!==t)throw Error(de(188))}function Hy(t){var e=t.alternate;if(!e){if(e=cs(t),e===null)throw Error(de(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Jp(r),t;if(s===i)return Jp(r),e;s=s.sibling}throw Error(de(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(de(189))}}if(n.alternate!==i)throw Error(de(190))}if(n.tag!==3)throw Error(de(188));return n.stateNode.current===n?t:e}function rv(t){return t=Hy(t),t!==null?sv(t):null}function sv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=sv(t);if(e!==null)return e;t=t.sibling}return null}var av=Bn.unstable_scheduleCallback,Qp=Bn.unstable_cancelCallback,Gy=Bn.unstable_shouldYield,Wy=Bn.unstable_requestPaint,Ft=Bn.unstable_now,jy=Bn.unstable_getCurrentPriorityLevel,Lh=Bn.unstable_ImmediatePriority,ov=Bn.unstable_UserBlockingPriority,ac=Bn.unstable_NormalPriority,Xy=Bn.unstable_LowPriority,lv=Bn.unstable_IdlePriority,kc=null,xi=null;function $y(t){if(xi&&typeof xi.onCommitFiberRoot=="function")try{xi.onCommitFiberRoot(kc,t,void 0,(t.current.flags&128)===128)}catch{}}var oi=Math.clz32?Math.clz32:Ky,qy=Math.log,Yy=Math.LN2;function Ky(t){return t>>>=0,t===0?32:31-(qy(t)/Yy|0)|0}var Yo=64,Ko=4194304;function Va(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function oc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=Va(o):(s&=a,s!==0&&(i=Va(s)))}else a=n&~r,a!==0?i=Va(a):s!==0&&(i=Va(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-oi(e),r=1<<n,i|=t[n],e&=~r;return i}function Zy(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Jy(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-oi(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=Zy(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function Wf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function cv(){var t=Yo;return Yo<<=1,!(Yo&4194240)&&(Yo=64),t}function gu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Co(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-oi(e),t[e]=n}function Qy(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-oi(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Dh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-oi(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var ut=0;function uv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var fv,Ih,dv,hv,pv,jf=!1,Zo=[],vr=null,_r=null,xr=null,oo=new Map,lo=new Map,fr=[],eS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function em(t,e){switch(t){case"focusin":case"focusout":vr=null;break;case"dragenter":case"dragleave":_r=null;break;case"mouseover":case"mouseout":xr=null;break;case"pointerover":case"pointerout":oo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":lo.delete(e.pointerId)}}function Ma(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Po(e),e!==null&&Ih(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function tS(t,e,n,i,r){switch(e){case"focusin":return vr=Ma(vr,t,e,n,i,r),!0;case"dragenter":return _r=Ma(_r,t,e,n,i,r),!0;case"mouseover":return xr=Ma(xr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return oo.set(s,Ma(oo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,lo.set(s,Ma(lo.get(s)||null,t,e,n,i,r)),!0}return!1}function mv(t){var e=jr(t.target);if(e!==null){var n=cs(e);if(n!==null){if(e=n.tag,e===13){if(e=iv(n),e!==null){t.blockedOn=e,pv(t.priority,function(){dv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function kl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Xf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);zf=i,n.target.dispatchEvent(i),zf=null}else return e=Po(n),e!==null&&Ih(e),t.blockedOn=n,!1;e.shift()}return!0}function tm(t,e,n){kl(t)&&n.delete(e)}function nS(){jf=!1,vr!==null&&kl(vr)&&(vr=null),_r!==null&&kl(_r)&&(_r=null),xr!==null&&kl(xr)&&(xr=null),oo.forEach(tm),lo.forEach(tm)}function Ea(t,e){t.blockedOn===e&&(t.blockedOn=null,jf||(jf=!0,Bn.unstable_scheduleCallback(Bn.unstable_NormalPriority,nS)))}function co(t){function e(r){return Ea(r,t)}if(0<Zo.length){Ea(Zo[0],t);for(var n=1;n<Zo.length;n++){var i=Zo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(vr!==null&&Ea(vr,t),_r!==null&&Ea(_r,t),xr!==null&&Ea(xr,t),oo.forEach(e),lo.forEach(e),n=0;n<fr.length;n++)i=fr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<fr.length&&(n=fr[0],n.blockedOn===null);)mv(n),n.blockedOn===null&&fr.shift()}var Xs=Zi.ReactCurrentBatchConfig,lc=!0;function iS(t,e,n,i){var r=ut,s=Xs.transition;Xs.transition=null;try{ut=1,Uh(t,e,n,i)}finally{ut=r,Xs.transition=s}}function rS(t,e,n,i){var r=ut,s=Xs.transition;Xs.transition=null;try{ut=4,Uh(t,e,n,i)}finally{ut=r,Xs.transition=s}}function Uh(t,e,n,i){if(lc){var r=Xf(t,e,n,i);if(r===null)bu(t,e,i,cc,n),em(t,i);else if(tS(r,t,e,n,i))i.stopPropagation();else if(em(t,i),e&4&&-1<eS.indexOf(t)){for(;r!==null;){var s=Po(r);if(s!==null&&fv(s),s=Xf(t,e,n,i),s===null&&bu(t,e,i,cc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else bu(t,e,i,null,n)}}var cc=null;function Xf(t,e,n,i){if(cc=null,t=Nh(i),t=jr(t),t!==null)if(e=cs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=iv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return cc=t,null}function gv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(jy()){case Lh:return 1;case ov:return 4;case ac:case Xy:return 16;case lv:return 536870912;default:return 16}default:return 16}}var pr=null,Fh=null,Bl=null;function vv(){if(Bl)return Bl;var t,e=Fh,n=e.length,i,r="value"in pr?pr.value:pr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return Bl=r.slice(t,1<i?1-i:void 0)}function zl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Jo(){return!0}function nm(){return!1}function Vn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Jo:nm,this.isPropagationStopped=nm,this}return Lt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Jo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Jo)},persist:function(){},isPersistent:Jo}),e}var da={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Oh=Vn(da),Ro=Lt({},da,{view:0,detail:0}),sS=Vn(Ro),vu,_u,wa,Bc=Lt({},Ro,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:kh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==wa&&(wa&&t.type==="mousemove"?(vu=t.screenX-wa.screenX,_u=t.screenY-wa.screenY):_u=vu=0,wa=t),vu)},movementY:function(t){return"movementY"in t?t.movementY:_u}}),im=Vn(Bc),aS=Lt({},Bc,{dataTransfer:0}),oS=Vn(aS),lS=Lt({},Ro,{relatedTarget:0}),xu=Vn(lS),cS=Lt({},da,{animationName:0,elapsedTime:0,pseudoElement:0}),uS=Vn(cS),fS=Lt({},da,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),dS=Vn(fS),hS=Lt({},da,{data:0}),rm=Vn(hS),pS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=gS[t])?!!e[t]:!1}function kh(){return vS}var _S=Lt({},Ro,{key:function(t){if(t.key){var e=pS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=zl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?mS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:kh,charCode:function(t){return t.type==="keypress"?zl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?zl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),xS=Vn(_S),yS=Lt({},Bc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sm=Vn(yS),SS=Lt({},Ro,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:kh}),MS=Vn(SS),ES=Lt({},da,{propertyName:0,elapsedTime:0,pseudoElement:0}),wS=Vn(ES),TS=Lt({},Bc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),bS=Vn(TS),AS=[9,13,27,32],Bh=Gi&&"CompositionEvent"in window,qa=null;Gi&&"documentMode"in document&&(qa=document.documentMode);var CS=Gi&&"TextEvent"in window&&!qa,_v=Gi&&(!Bh||qa&&8<qa&&11>=qa),am=" ",om=!1;function xv(t,e){switch(t){case"keyup":return AS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function yv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ps=!1;function RS(t,e){switch(t){case"compositionend":return yv(e);case"keypress":return e.which!==32?null:(om=!0,am);case"textInput":return t=e.data,t===am&&om?null:t;default:return null}}function PS(t,e){if(Ps)return t==="compositionend"||!Bh&&xv(t,e)?(t=vv(),Bl=Fh=pr=null,Ps=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return _v&&e.locale!=="ko"?null:e.data;default:return null}}var NS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!NS[t.type]:e==="textarea"}function Sv(t,e,n,i){J0(i),e=uc(e,"onChange"),0<e.length&&(n=new Oh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Ya=null,uo=null;function LS(t){Lv(t,0)}function zc(t){var e=Ds(t);if(j0(e))return t}function DS(t,e){if(t==="change")return e}var Mv=!1;if(Gi){var yu;if(Gi){var Su="oninput"in document;if(!Su){var cm=document.createElement("div");cm.setAttribute("oninput","return;"),Su=typeof cm.oninput=="function"}yu=Su}else yu=!1;Mv=yu&&(!document.documentMode||9<document.documentMode)}function um(){Ya&&(Ya.detachEvent("onpropertychange",Ev),uo=Ya=null)}function Ev(t){if(t.propertyName==="value"&&zc(uo)){var e=[];Sv(e,uo,t,Nh(t)),nv(LS,e)}}function IS(t,e,n){t==="focusin"?(um(),Ya=e,uo=n,Ya.attachEvent("onpropertychange",Ev)):t==="focusout"&&um()}function US(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return zc(uo)}function FS(t,e){if(t==="click")return zc(e)}function OS(t,e){if(t==="input"||t==="change")return zc(e)}function kS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ci=typeof Object.is=="function"?Object.is:kS;function fo(t,e){if(ci(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Cf.call(e,r)||!ci(t[r],e[r]))return!1}return!0}function fm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function dm(t,e){var n=fm(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=fm(n)}}function wv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?wv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Tv(){for(var t=window,e=ic();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ic(t.document)}return e}function zh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function BS(t){var e=Tv(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&wv(n.ownerDocument.documentElement,n)){if(i!==null&&zh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=dm(n,s);var a=dm(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var zS=Gi&&"documentMode"in document&&11>=document.documentMode,Ns=null,$f=null,Ka=null,qf=!1;function hm(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;qf||Ns==null||Ns!==ic(i)||(i=Ns,"selectionStart"in i&&zh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ka&&fo(Ka,i)||(Ka=i,i=uc($f,"onSelect"),0<i.length&&(e=new Oh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Ns)))}function Qo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ls={animationend:Qo("Animation","AnimationEnd"),animationiteration:Qo("Animation","AnimationIteration"),animationstart:Qo("Animation","AnimationStart"),transitionend:Qo("Transition","TransitionEnd")},Mu={},bv={};Gi&&(bv=document.createElement("div").style,"AnimationEvent"in window||(delete Ls.animationend.animation,delete Ls.animationiteration.animation,delete Ls.animationstart.animation),"TransitionEvent"in window||delete Ls.transitionend.transition);function Vc(t){if(Mu[t])return Mu[t];if(!Ls[t])return t;var e=Ls[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in bv)return Mu[t]=e[n];return t}var Av=Vc("animationend"),Cv=Vc("animationiteration"),Rv=Vc("animationstart"),Pv=Vc("transitionend"),Nv=new Map,pm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Nr(t,e){Nv.set(t,e),ls(e,[t])}for(var Eu=0;Eu<pm.length;Eu++){var wu=pm[Eu],VS=wu.toLowerCase(),HS=wu[0].toUpperCase()+wu.slice(1);Nr(VS,"on"+HS)}Nr(Av,"onAnimationEnd");Nr(Cv,"onAnimationIteration");Nr(Rv,"onAnimationStart");Nr("dblclick","onDoubleClick");Nr("focusin","onFocus");Nr("focusout","onBlur");Nr(Pv,"onTransitionEnd");Qs("onMouseEnter",["mouseout","mouseover"]);Qs("onMouseLeave",["mouseout","mouseover"]);Qs("onPointerEnter",["pointerout","pointerover"]);Qs("onPointerLeave",["pointerout","pointerover"]);ls("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ls("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ls("onBeforeInput",["compositionend","keypress","textInput","paste"]);ls("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ls("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ls("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ha="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),GS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ha));function mm(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Vy(i,e,void 0,t),t.currentTarget=null}function Lv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;mm(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;mm(r,o,c),s=l}}}if(sc)throw t=Gf,sc=!1,Gf=null,t}function _t(t,e){var n=e[Qf];n===void 0&&(n=e[Qf]=new Set);var i=t+"__bubble";n.has(i)||(Dv(e,t,2,!1),n.add(i))}function Tu(t,e,n){var i=0;e&&(i|=4),Dv(n,t,i,e)}var el="_reactListening"+Math.random().toString(36).slice(2);function ho(t){if(!t[el]){t[el]=!0,z0.forEach(function(n){n!=="selectionchange"&&(GS.has(n)||Tu(n,!1,t),Tu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[el]||(e[el]=!0,Tu("selectionchange",!1,e))}}function Dv(t,e,n,i){switch(gv(e)){case 1:var r=iS;break;case 4:r=rS;break;default:r=Uh}n=r.bind(null,e,n,t),r=void 0,!Hf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function bu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=jr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}nv(function(){var c=s,u=Nh(n),h=[];e:{var f=Nv.get(t);if(f!==void 0){var p=Oh,v=t;switch(t){case"keypress":if(zl(n)===0)break e;case"keydown":case"keyup":p=xS;break;case"focusin":v="focus",p=xu;break;case"focusout":v="blur",p=xu;break;case"beforeblur":case"afterblur":p=xu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=im;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=oS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=MS;break;case Av:case Cv:case Rv:p=uS;break;case Pv:p=wS;break;case"scroll":p=sS;break;case"wheel":p=bS;break;case"copy":case"cut":case"paste":p=dS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=sm}var E=(e&4)!==0,_=!E&&t==="scroll",d=E?f!==null?f+"Capture":null:f;E=[];for(var g=c,M;g!==null;){M=g;var y=M.stateNode;if(M.tag===5&&y!==null&&(M=y,d!==null&&(y=ao(g,d),y!=null&&E.push(po(g,y,M)))),_)break;g=g.return}0<E.length&&(f=new p(f,v,null,n,u),h.push({event:f,listeners:E}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==zf&&(v=n.relatedTarget||n.fromElement)&&(jr(v)||v[Wi]))break e;if((p||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=c,v=v?jr(v):null,v!==null&&(_=cs(v),v!==_||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=c),p!==v)){if(E=im,y="onMouseLeave",d="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(E=sm,y="onPointerLeave",d="onPointerEnter",g="pointer"),_=p==null?f:Ds(p),M=v==null?f:Ds(v),f=new E(y,g+"leave",p,n,u),f.target=_,f.relatedTarget=M,y=null,jr(u)===c&&(E=new E(d,g+"enter",v,n,u),E.target=M,E.relatedTarget=_,y=E),_=y,p&&v)t:{for(E=p,d=v,g=0,M=E;M;M=hs(M))g++;for(M=0,y=d;y;y=hs(y))M++;for(;0<g-M;)E=hs(E),g--;for(;0<M-g;)d=hs(d),M--;for(;g--;){if(E===d||d!==null&&E===d.alternate)break t;E=hs(E),d=hs(d)}E=null}else E=null;p!==null&&gm(h,f,p,E,!1),v!==null&&_!==null&&gm(h,_,v,E,!0)}}e:{if(f=c?Ds(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var b=DS;else if(lm(f))if(Mv)b=OS;else{b=US;var w=IS}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(b=FS);if(b&&(b=b(t,c))){Sv(h,b,n,u);break e}w&&w(t,f,c),t==="focusout"&&(w=f._wrapperState)&&w.controlled&&f.type==="number"&&Uf(f,"number",f.value)}switch(w=c?Ds(c):window,t){case"focusin":(lm(w)||w.contentEditable==="true")&&(Ns=w,$f=c,Ka=null);break;case"focusout":Ka=$f=Ns=null;break;case"mousedown":qf=!0;break;case"contextmenu":case"mouseup":case"dragend":qf=!1,hm(h,n,u);break;case"selectionchange":if(zS)break;case"keydown":case"keyup":hm(h,n,u)}var A;if(Bh)e:{switch(t){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else Ps?xv(t,n)&&(x="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(_v&&n.locale!=="ko"&&(Ps||x!=="onCompositionStart"?x==="onCompositionEnd"&&Ps&&(A=vv()):(pr=u,Fh="value"in pr?pr.value:pr.textContent,Ps=!0)),w=uc(c,x),0<w.length&&(x=new rm(x,t,null,n,u),h.push({event:x,listeners:w}),A?x.data=A:(A=yv(n),A!==null&&(x.data=A)))),(A=CS?RS(t,n):PS(t,n))&&(c=uc(c,"onBeforeInput"),0<c.length&&(u=new rm("onBeforeInput","beforeinput",null,n,u),h.push({event:u,listeners:c}),u.data=A))}Lv(h,e)})}function po(t,e,n){return{instance:t,listener:e,currentTarget:n}}function uc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ao(t,n),s!=null&&i.unshift(po(t,s,r)),s=ao(t,e),s!=null&&i.push(po(t,s,r))),t=t.return}return i}function hs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function gm(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=ao(n,s),l!=null&&a.unshift(po(n,l,o))):r||(l=ao(n,s),l!=null&&a.push(po(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var WS=/\r\n?/g,jS=/\u0000|\uFFFD/g;function vm(t){return(typeof t=="string"?t:""+t).replace(WS,`
`).replace(jS,"")}function tl(t,e,n){if(e=vm(e),vm(t)!==e&&n)throw Error(de(425))}function fc(){}var Yf=null,Kf=null;function Zf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Jf=typeof setTimeout=="function"?setTimeout:void 0,XS=typeof clearTimeout=="function"?clearTimeout:void 0,_m=typeof Promise=="function"?Promise:void 0,$S=typeof queueMicrotask=="function"?queueMicrotask:typeof _m<"u"?function(t){return _m.resolve(null).then(t).catch(qS)}:Jf;function qS(t){setTimeout(function(){throw t})}function Au(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),co(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);co(e)}function yr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function xm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ha=Math.random().toString(36).slice(2),gi="__reactFiber$"+ha,mo="__reactProps$"+ha,Wi="__reactContainer$"+ha,Qf="__reactEvents$"+ha,YS="__reactListeners$"+ha,KS="__reactHandles$"+ha;function jr(t){var e=t[gi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Wi]||n[gi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=xm(t);t!==null;){if(n=t[gi])return n;t=xm(t)}return e}t=n,n=t.parentNode}return null}function Po(t){return t=t[gi]||t[Wi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ds(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(de(33))}function Hc(t){return t[mo]||null}var ed=[],Is=-1;function Lr(t){return{current:t}}function yt(t){0>Is||(t.current=ed[Is],ed[Is]=null,Is--)}function vt(t,e){Is++,ed[Is]=t.current,t.current=e}var Ar={},dn=Lr(Ar),Tn=Lr(!1),Qr=Ar;function ea(t,e){var n=t.type.contextTypes;if(!n)return Ar;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function bn(t){return t=t.childContextTypes,t!=null}function dc(){yt(Tn),yt(dn)}function ym(t,e,n){if(dn.current!==Ar)throw Error(de(168));vt(dn,e),vt(Tn,n)}function Iv(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(de(108,Iy(t)||"Unknown",r));return Lt({},n,i)}function hc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ar,Qr=dn.current,vt(dn,t),vt(Tn,Tn.current),!0}function Sm(t,e,n){var i=t.stateNode;if(!i)throw Error(de(169));n?(t=Iv(t,e,Qr),i.__reactInternalMemoizedMergedChildContext=t,yt(Tn),yt(dn),vt(dn,t)):yt(Tn),vt(Tn,n)}var Ii=null,Gc=!1,Cu=!1;function Uv(t){Ii===null?Ii=[t]:Ii.push(t)}function ZS(t){Gc=!0,Uv(t)}function Dr(){if(!Cu&&Ii!==null){Cu=!0;var t=0,e=ut;try{var n=Ii;for(ut=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ii=null,Gc=!1}catch(r){throw Ii!==null&&(Ii=Ii.slice(t+1)),av(Lh,Dr),r}finally{ut=e,Cu=!1}}return null}var Us=[],Fs=0,pc=null,mc=0,jn=[],Xn=0,es=null,Fi=1,Oi="";function Vr(t,e){Us[Fs++]=mc,Us[Fs++]=pc,pc=t,mc=e}function Fv(t,e,n){jn[Xn++]=Fi,jn[Xn++]=Oi,jn[Xn++]=es,es=t;var i=Fi;t=Oi;var r=32-oi(i)-1;i&=~(1<<r),n+=1;var s=32-oi(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Fi=1<<32-oi(e)+r|n<<r|i,Oi=s+t}else Fi=1<<s|n<<r|i,Oi=t}function Vh(t){t.return!==null&&(Vr(t,1),Fv(t,1,0))}function Hh(t){for(;t===pc;)pc=Us[--Fs],Us[Fs]=null,mc=Us[--Fs],Us[Fs]=null;for(;t===es;)es=jn[--Xn],jn[Xn]=null,Oi=jn[--Xn],jn[Xn]=null,Fi=jn[--Xn],jn[Xn]=null}var kn=null,Fn=null,wt=!1,ri=null;function Ov(t,e){var n=$n(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Mm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,kn=t,Fn=yr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,kn=t,Fn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=es!==null?{id:Fi,overflow:Oi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=$n(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,kn=t,Fn=null,!0):!1;default:return!1}}function td(t){return(t.mode&1)!==0&&(t.flags&128)===0}function nd(t){if(wt){var e=Fn;if(e){var n=e;if(!Mm(t,e)){if(td(t))throw Error(de(418));e=yr(n.nextSibling);var i=kn;e&&Mm(t,e)?Ov(i,n):(t.flags=t.flags&-4097|2,wt=!1,kn=t)}}else{if(td(t))throw Error(de(418));t.flags=t.flags&-4097|2,wt=!1,kn=t}}}function Em(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;kn=t}function nl(t){if(t!==kn)return!1;if(!wt)return Em(t),wt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Zf(t.type,t.memoizedProps)),e&&(e=Fn)){if(td(t))throw kv(),Error(de(418));for(;e;)Ov(t,e),e=yr(e.nextSibling)}if(Em(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(de(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Fn=yr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Fn=null}}else Fn=kn?yr(t.stateNode.nextSibling):null;return!0}function kv(){for(var t=Fn;t;)t=yr(t.nextSibling)}function ta(){Fn=kn=null,wt=!1}function Gh(t){ri===null?ri=[t]:ri.push(t)}var JS=Zi.ReactCurrentBatchConfig;function Ta(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(de(309));var i=n.stateNode}if(!i)throw Error(de(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(de(284));if(!n._owner)throw Error(de(290,t))}return t}function il(t,e){throw t=Object.prototype.toString.call(e),Error(de(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function wm(t){var e=t._init;return e(t._payload)}function Bv(t){function e(d,g){if(t){var M=d.deletions;M===null?(d.deletions=[g],d.flags|=16):M.push(g)}}function n(d,g){if(!t)return null;for(;g!==null;)e(d,g),g=g.sibling;return null}function i(d,g){for(d=new Map;g!==null;)g.key!==null?d.set(g.key,g):d.set(g.index,g),g=g.sibling;return d}function r(d,g){return d=wr(d,g),d.index=0,d.sibling=null,d}function s(d,g,M){return d.index=M,t?(M=d.alternate,M!==null?(M=M.index,M<g?(d.flags|=2,g):M):(d.flags|=2,g)):(d.flags|=1048576,g)}function a(d){return t&&d.alternate===null&&(d.flags|=2),d}function o(d,g,M,y){return g===null||g.tag!==6?(g=Uu(M,d.mode,y),g.return=d,g):(g=r(g,M),g.return=d,g)}function l(d,g,M,y){var b=M.type;return b===Rs?u(d,g,M.props.children,y,M.key):g!==null&&(g.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===lr&&wm(b)===g.type)?(y=r(g,M.props),y.ref=Ta(d,g,M),y.return=d,y):(y=$l(M.type,M.key,M.props,null,d.mode,y),y.ref=Ta(d,g,M),y.return=d,y)}function c(d,g,M,y){return g===null||g.tag!==4||g.stateNode.containerInfo!==M.containerInfo||g.stateNode.implementation!==M.implementation?(g=Fu(M,d.mode,y),g.return=d,g):(g=r(g,M.children||[]),g.return=d,g)}function u(d,g,M,y,b){return g===null||g.tag!==7?(g=Zr(M,d.mode,y,b),g.return=d,g):(g=r(g,M),g.return=d,g)}function h(d,g,M){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Uu(""+g,d.mode,M),g.return=d,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Xo:return M=$l(g.type,g.key,g.props,null,d.mode,M),M.ref=Ta(d,null,g),M.return=d,M;case Cs:return g=Fu(g,d.mode,M),g.return=d,g;case lr:var y=g._init;return h(d,y(g._payload),M)}if(za(g)||ya(g))return g=Zr(g,d.mode,M,null),g.return=d,g;il(d,g)}return null}function f(d,g,M,y){var b=g!==null?g.key:null;if(typeof M=="string"&&M!==""||typeof M=="number")return b!==null?null:o(d,g,""+M,y);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Xo:return M.key===b?l(d,g,M,y):null;case Cs:return M.key===b?c(d,g,M,y):null;case lr:return b=M._init,f(d,g,b(M._payload),y)}if(za(M)||ya(M))return b!==null?null:u(d,g,M,y,null);il(d,M)}return null}function p(d,g,M,y,b){if(typeof y=="string"&&y!==""||typeof y=="number")return d=d.get(M)||null,o(g,d,""+y,b);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Xo:return d=d.get(y.key===null?M:y.key)||null,l(g,d,y,b);case Cs:return d=d.get(y.key===null?M:y.key)||null,c(g,d,y,b);case lr:var w=y._init;return p(d,g,M,w(y._payload),b)}if(za(y)||ya(y))return d=d.get(M)||null,u(g,d,y,b,null);il(g,y)}return null}function v(d,g,M,y){for(var b=null,w=null,A=g,x=g=0,T=null;A!==null&&x<M.length;x++){A.index>x?(T=A,A=null):T=A.sibling;var R=f(d,A,M[x],y);if(R===null){A===null&&(A=T);break}t&&A&&R.alternate===null&&e(d,A),g=s(R,g,x),w===null?b=R:w.sibling=R,w=R,A=T}if(x===M.length)return n(d,A),wt&&Vr(d,x),b;if(A===null){for(;x<M.length;x++)A=h(d,M[x],y),A!==null&&(g=s(A,g,x),w===null?b=A:w.sibling=A,w=A);return wt&&Vr(d,x),b}for(A=i(d,A);x<M.length;x++)T=p(A,d,x,M[x],y),T!==null&&(t&&T.alternate!==null&&A.delete(T.key===null?x:T.key),g=s(T,g,x),w===null?b=T:w.sibling=T,w=T);return t&&A.forEach(function(L){return e(d,L)}),wt&&Vr(d,x),b}function E(d,g,M,y){var b=ya(M);if(typeof b!="function")throw Error(de(150));if(M=b.call(M),M==null)throw Error(de(151));for(var w=b=null,A=g,x=g=0,T=null,R=M.next();A!==null&&!R.done;x++,R=M.next()){A.index>x?(T=A,A=null):T=A.sibling;var L=f(d,A,R.value,y);if(L===null){A===null&&(A=T);break}t&&A&&L.alternate===null&&e(d,A),g=s(L,g,x),w===null?b=L:w.sibling=L,w=L,A=T}if(R.done)return n(d,A),wt&&Vr(d,x),b;if(A===null){for(;!R.done;x++,R=M.next())R=h(d,R.value,y),R!==null&&(g=s(R,g,x),w===null?b=R:w.sibling=R,w=R);return wt&&Vr(d,x),b}for(A=i(d,A);!R.done;x++,R=M.next())R=p(A,d,x,R.value,y),R!==null&&(t&&R.alternate!==null&&A.delete(R.key===null?x:R.key),g=s(R,g,x),w===null?b=R:w.sibling=R,w=R);return t&&A.forEach(function(F){return e(d,F)}),wt&&Vr(d,x),b}function _(d,g,M,y){if(typeof M=="object"&&M!==null&&M.type===Rs&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case Xo:e:{for(var b=M.key,w=g;w!==null;){if(w.key===b){if(b=M.type,b===Rs){if(w.tag===7){n(d,w.sibling),g=r(w,M.props.children),g.return=d,d=g;break e}}else if(w.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===lr&&wm(b)===w.type){n(d,w.sibling),g=r(w,M.props),g.ref=Ta(d,w,M),g.return=d,d=g;break e}n(d,w);break}else e(d,w);w=w.sibling}M.type===Rs?(g=Zr(M.props.children,d.mode,y,M.key),g.return=d,d=g):(y=$l(M.type,M.key,M.props,null,d.mode,y),y.ref=Ta(d,g,M),y.return=d,d=y)}return a(d);case Cs:e:{for(w=M.key;g!==null;){if(g.key===w)if(g.tag===4&&g.stateNode.containerInfo===M.containerInfo&&g.stateNode.implementation===M.implementation){n(d,g.sibling),g=r(g,M.children||[]),g.return=d,d=g;break e}else{n(d,g);break}else e(d,g);g=g.sibling}g=Fu(M,d.mode,y),g.return=d,d=g}return a(d);case lr:return w=M._init,_(d,g,w(M._payload),y)}if(za(M))return v(d,g,M,y);if(ya(M))return E(d,g,M,y);il(d,M)}return typeof M=="string"&&M!==""||typeof M=="number"?(M=""+M,g!==null&&g.tag===6?(n(d,g.sibling),g=r(g,M),g.return=d,d=g):(n(d,g),g=Uu(M,d.mode,y),g.return=d,d=g),a(d)):n(d,g)}return _}var na=Bv(!0),zv=Bv(!1),gc=Lr(null),vc=null,Os=null,Wh=null;function jh(){Wh=Os=vc=null}function Xh(t){var e=gc.current;yt(gc),t._currentValue=e}function id(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function $s(t,e){vc=t,Wh=Os=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(wn=!0),t.firstContext=null)}function Kn(t){var e=t._currentValue;if(Wh!==t)if(t={context:t,memoizedValue:e,next:null},Os===null){if(vc===null)throw Error(de(308));Os=t,vc.dependencies={lanes:0,firstContext:t}}else Os=Os.next=t;return e}var Xr=null;function $h(t){Xr===null?Xr=[t]:Xr.push(t)}function Vv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,$h(e)):(n.next=r.next,r.next=n),e.interleaved=n,ji(t,i)}function ji(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var cr=!1;function qh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Hv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Bi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Sr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,it&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,ji(t,n)}return r=i.interleaved,r===null?(e.next=e,$h(i)):(e.next=r.next,r.next=e),i.interleaved=e,ji(t,n)}function Vl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Dh(t,n)}}function Tm(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function _c(t,e,n,i){var r=t.updateQueue;cr=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var u=t.alternate;u!==null&&(u=u.updateQueue,o=u.lastBaseUpdate,o!==a&&(o===null?u.firstBaseUpdate=c:o.next=c,u.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;a=0,u=c=l=null,o=s;do{var f=o.lane,p=o.eventTime;if((i&f)===f){u!==null&&(u=u.next={eventTime:p,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var v=t,E=o;switch(f=e,p=n,E.tag){case 1:if(v=E.payload,typeof v=="function"){h=v.call(p,h,f);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=E.payload,f=typeof v=="function"?v.call(p,h,f):v,f==null)break e;h=Lt({},h,f);break e;case 2:cr=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[o]:f.push(o))}else p={eventTime:p,lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},u===null?(c=u=p,l=h):u=u.next=p,a|=f;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;f=o,o=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(u===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);ns|=a,t.lanes=a,t.memoizedState=h}}function bm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(de(191,r));r.call(i)}}}var No={},yi=Lr(No),go=Lr(No),vo=Lr(No);function $r(t){if(t===No)throw Error(de(174));return t}function Yh(t,e){switch(vt(vo,e),vt(go,t),vt(yi,No),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Of(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Of(e,t)}yt(yi),vt(yi,e)}function ia(){yt(yi),yt(go),yt(vo)}function Gv(t){$r(vo.current);var e=$r(yi.current),n=Of(e,t.type);e!==n&&(vt(go,t),vt(yi,n))}function Kh(t){go.current===t&&(yt(yi),yt(go))}var Ct=Lr(0);function xc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ru=[];function Zh(){for(var t=0;t<Ru.length;t++)Ru[t]._workInProgressVersionPrimary=null;Ru.length=0}var Hl=Zi.ReactCurrentDispatcher,Pu=Zi.ReactCurrentBatchConfig,ts=0,Pt=null,Gt=null,qt=null,yc=!1,Za=!1,_o=0,QS=0;function sn(){throw Error(de(321))}function Jh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ci(t[n],e[n]))return!1;return!0}function Qh(t,e,n,i,r,s){if(ts=s,Pt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Hl.current=t===null||t.memoizedState===null?iM:rM,t=n(i,r),Za){s=0;do{if(Za=!1,_o=0,25<=s)throw Error(de(301));s+=1,qt=Gt=null,e.updateQueue=null,Hl.current=sM,t=n(i,r)}while(Za)}if(Hl.current=Sc,e=Gt!==null&&Gt.next!==null,ts=0,qt=Gt=Pt=null,yc=!1,e)throw Error(de(300));return t}function ep(){var t=_o!==0;return _o=0,t}function pi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qt===null?Pt.memoizedState=qt=t:qt=qt.next=t,qt}function Zn(){if(Gt===null){var t=Pt.alternate;t=t!==null?t.memoizedState:null}else t=Gt.next;var e=qt===null?Pt.memoizedState:qt.next;if(e!==null)qt=e,Gt=t;else{if(t===null)throw Error(de(310));Gt=t,t={memoizedState:Gt.memoizedState,baseState:Gt.baseState,baseQueue:Gt.baseQueue,queue:Gt.queue,next:null},qt===null?Pt.memoizedState=qt=t:qt=qt.next=t}return qt}function xo(t,e){return typeof e=="function"?e(t):e}function Nu(t){var e=Zn(),n=e.queue;if(n===null)throw Error(de(311));n.lastRenderedReducer=t;var i=Gt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var u=c.lane;if((ts&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=h,a=i):l=l.next=h,Pt.lanes|=u,ns|=u}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,ci(i,e.memoizedState)||(wn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Pt.lanes|=s,ns|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Lu(t){var e=Zn(),n=e.queue;if(n===null)throw Error(de(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);ci(s,e.memoizedState)||(wn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Wv(){}function jv(t,e){var n=Pt,i=Zn(),r=e(),s=!ci(i.memoizedState,r);if(s&&(i.memoizedState=r,wn=!0),i=i.queue,tp(qv.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||qt!==null&&qt.memoizedState.tag&1){if(n.flags|=2048,yo(9,$v.bind(null,n,i,r,e),void 0,null),Yt===null)throw Error(de(349));ts&30||Xv(n,e,r)}return r}function Xv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Pt.updateQueue,e===null?(e={lastEffect:null,stores:null},Pt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function $v(t,e,n,i){e.value=n,e.getSnapshot=i,Yv(e)&&Kv(t)}function qv(t,e,n){return n(function(){Yv(e)&&Kv(t)})}function Yv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ci(t,n)}catch{return!0}}function Kv(t){var e=ji(t,1);e!==null&&li(e,t,1,-1)}function Am(t){var e=pi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xo,lastRenderedState:t},e.queue=t,t=t.dispatch=nM.bind(null,Pt,t),[e.memoizedState,t]}function yo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Pt.updateQueue,e===null?(e={lastEffect:null,stores:null},Pt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Zv(){return Zn().memoizedState}function Gl(t,e,n,i){var r=pi();Pt.flags|=t,r.memoizedState=yo(1|e,n,void 0,i===void 0?null:i)}function Wc(t,e,n,i){var r=Zn();i=i===void 0?null:i;var s=void 0;if(Gt!==null){var a=Gt.memoizedState;if(s=a.destroy,i!==null&&Jh(i,a.deps)){r.memoizedState=yo(e,n,s,i);return}}Pt.flags|=t,r.memoizedState=yo(1|e,n,s,i)}function Cm(t,e){return Gl(8390656,8,t,e)}function tp(t,e){return Wc(2048,8,t,e)}function Jv(t,e){return Wc(4,2,t,e)}function Qv(t,e){return Wc(4,4,t,e)}function e_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function t_(t,e,n){return n=n!=null?n.concat([t]):null,Wc(4,4,e_.bind(null,e,t),n)}function np(){}function n_(t,e){var n=Zn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Jh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function i_(t,e){var n=Zn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Jh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function r_(t,e,n){return ts&21?(ci(n,e)||(n=cv(),Pt.lanes|=n,ns|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,wn=!0),t.memoizedState=n)}function eM(t,e){var n=ut;ut=n!==0&&4>n?n:4,t(!0);var i=Pu.transition;Pu.transition={};try{t(!1),e()}finally{ut=n,Pu.transition=i}}function s_(){return Zn().memoizedState}function tM(t,e,n){var i=Er(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},a_(t))o_(e,n);else if(n=Vv(t,e,n,i),n!==null){var r=mn();li(n,t,i,r),l_(n,e,i)}}function nM(t,e,n){var i=Er(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(a_(t))o_(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,ci(o,a)){var l=e.interleaved;l===null?(r.next=r,$h(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Vv(t,e,r,i),n!==null&&(r=mn(),li(n,t,i,r),l_(n,e,i))}}function a_(t){var e=t.alternate;return t===Pt||e!==null&&e===Pt}function o_(t,e){Za=yc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function l_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Dh(t,n)}}var Sc={readContext:Kn,useCallback:sn,useContext:sn,useEffect:sn,useImperativeHandle:sn,useInsertionEffect:sn,useLayoutEffect:sn,useMemo:sn,useReducer:sn,useRef:sn,useState:sn,useDebugValue:sn,useDeferredValue:sn,useTransition:sn,useMutableSource:sn,useSyncExternalStore:sn,useId:sn,unstable_isNewReconciler:!1},iM={readContext:Kn,useCallback:function(t,e){return pi().memoizedState=[t,e===void 0?null:e],t},useContext:Kn,useEffect:Cm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Gl(4194308,4,e_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Gl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Gl(4,2,t,e)},useMemo:function(t,e){var n=pi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=pi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=tM.bind(null,Pt,t),[i.memoizedState,t]},useRef:function(t){var e=pi();return t={current:t},e.memoizedState=t},useState:Am,useDebugValue:np,useDeferredValue:function(t){return pi().memoizedState=t},useTransition:function(){var t=Am(!1),e=t[0];return t=eM.bind(null,t[1]),pi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Pt,r=pi();if(wt){if(n===void 0)throw Error(de(407));n=n()}else{if(n=e(),Yt===null)throw Error(de(349));ts&30||Xv(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Cm(qv.bind(null,i,s,t),[t]),i.flags|=2048,yo(9,$v.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=pi(),e=Yt.identifierPrefix;if(wt){var n=Oi,i=Fi;n=(i&~(1<<32-oi(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=_o++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=QS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},rM={readContext:Kn,useCallback:n_,useContext:Kn,useEffect:tp,useImperativeHandle:t_,useInsertionEffect:Jv,useLayoutEffect:Qv,useMemo:i_,useReducer:Nu,useRef:Zv,useState:function(){return Nu(xo)},useDebugValue:np,useDeferredValue:function(t){var e=Zn();return r_(e,Gt.memoizedState,t)},useTransition:function(){var t=Nu(xo)[0],e=Zn().memoizedState;return[t,e]},useMutableSource:Wv,useSyncExternalStore:jv,useId:s_,unstable_isNewReconciler:!1},sM={readContext:Kn,useCallback:n_,useContext:Kn,useEffect:tp,useImperativeHandle:t_,useInsertionEffect:Jv,useLayoutEffect:Qv,useMemo:i_,useReducer:Lu,useRef:Zv,useState:function(){return Lu(xo)},useDebugValue:np,useDeferredValue:function(t){var e=Zn();return Gt===null?e.memoizedState=t:r_(e,Gt.memoizedState,t)},useTransition:function(){var t=Lu(xo)[0],e=Zn().memoizedState;return[t,e]},useMutableSource:Wv,useSyncExternalStore:jv,useId:s_,unstable_isNewReconciler:!1};function ni(t,e){if(t&&t.defaultProps){e=Lt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function rd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Lt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var jc={isMounted:function(t){return(t=t._reactInternals)?cs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=mn(),r=Er(t),s=Bi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Sr(t,s,r),e!==null&&(li(e,t,r,i),Vl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=mn(),r=Er(t),s=Bi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Sr(t,s,r),e!==null&&(li(e,t,r,i),Vl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=mn(),i=Er(t),r=Bi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Sr(t,r,i),e!==null&&(li(e,t,i,n),Vl(e,t,i))}};function Rm(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!fo(n,i)||!fo(r,s):!0}function c_(t,e,n){var i=!1,r=Ar,s=e.contextType;return typeof s=="object"&&s!==null?s=Kn(s):(r=bn(e)?Qr:dn.current,i=e.contextTypes,s=(i=i!=null)?ea(t,r):Ar),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=jc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Pm(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&jc.enqueueReplaceState(e,e.state,null)}function sd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},qh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Kn(s):(s=bn(e)?Qr:dn.current,r.context=ea(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(rd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&jc.enqueueReplaceState(r,r.state,null),_c(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function ra(t,e){try{var n="",i=e;do n+=Dy(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Du(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ad(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var aM=typeof WeakMap=="function"?WeakMap:Map;function u_(t,e,n){n=Bi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Ec||(Ec=!0,gd=i),ad(t,e)},n}function f_(t,e,n){n=Bi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){ad(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ad(t,e),typeof i!="function"&&(Mr===null?Mr=new Set([this]):Mr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function Nm(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new aM;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=yM.bind(null,t,e,n),e.then(t,t))}function Lm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Dm(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Bi(-1,1),e.tag=2,Sr(n,e,1))),n.lanes|=1),t)}var oM=Zi.ReactCurrentOwner,wn=!1;function pn(t,e,n,i){e.child=t===null?zv(e,null,n,i):na(e,t.child,n,i)}function Im(t,e,n,i,r){n=n.render;var s=e.ref;return $s(e,r),i=Qh(t,e,n,i,s,r),n=ep(),t!==null&&!wn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Xi(t,e,r)):(wt&&n&&Vh(e),e.flags|=1,pn(t,e,i,r),e.child)}function Um(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!up(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,d_(t,e,s,i,r)):(t=$l(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:fo,n(a,i)&&t.ref===e.ref)return Xi(t,e,r)}return e.flags|=1,t=wr(s,i),t.ref=e.ref,t.return=e,e.child=t}function d_(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(fo(s,i)&&t.ref===e.ref)if(wn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(wn=!0);else return e.lanes=t.lanes,Xi(t,e,r)}return od(t,e,n,i,r)}function h_(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},vt(Bs,Ln),Ln|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,vt(Bs,Ln),Ln|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,vt(Bs,Ln),Ln|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,vt(Bs,Ln),Ln|=i;return pn(t,e,r,n),e.child}function p_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function od(t,e,n,i,r){var s=bn(n)?Qr:dn.current;return s=ea(e,s),$s(e,r),n=Qh(t,e,n,i,s,r),i=ep(),t!==null&&!wn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Xi(t,e,r)):(wt&&i&&Vh(e),e.flags|=1,pn(t,e,n,r),e.child)}function Fm(t,e,n,i,r){if(bn(n)){var s=!0;hc(e)}else s=!1;if($s(e,r),e.stateNode===null)Wl(t,e),c_(e,n,i),sd(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=Kn(c):(c=bn(n)?Qr:dn.current,c=ea(e,c));var u=n.getDerivedStateFromProps,h=typeof u=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&Pm(e,a,i,c),cr=!1;var f=e.memoizedState;a.state=f,_c(e,i,a,r),l=e.memoizedState,o!==i||f!==l||Tn.current||cr?(typeof u=="function"&&(rd(e,n,u,i),l=e.memoizedState),(o=cr||Rm(e,n,o,i,f,l,c))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,Hv(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:ni(e.type,o),a.props=c,h=e.pendingProps,f=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Kn(l):(l=bn(n)?Qr:dn.current,l=ea(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==h||f!==l)&&Pm(e,a,i,l),cr=!1,f=e.memoizedState,a.state=f,_c(e,i,a,r);var v=e.memoizedState;o!==h||f!==v||Tn.current||cr?(typeof p=="function"&&(rd(e,n,p,i),v=e.memoizedState),(c=cr||Rm(e,n,c,i,f,v,l)||!1)?(u||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,v,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,v,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),a.props=i,a.state=v,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return ld(t,e,n,i,s,r)}function ld(t,e,n,i,r,s){p_(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Sm(e,n,!1),Xi(t,e,s);i=e.stateNode,oM.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=na(e,t.child,null,s),e.child=na(e,null,o,s)):pn(t,e,o,s),e.memoizedState=i.state,r&&Sm(e,n,!0),e.child}function m_(t){var e=t.stateNode;e.pendingContext?ym(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ym(t,e.context,!1),Yh(t,e.containerInfo)}function Om(t,e,n,i,r){return ta(),Gh(r),e.flags|=256,pn(t,e,n,i),e.child}var cd={dehydrated:null,treeContext:null,retryLane:0};function ud(t){return{baseLanes:t,cachePool:null,transitions:null}}function g_(t,e,n){var i=e.pendingProps,r=Ct.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),vt(Ct,r&1),t===null)return nd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=qc(a,i,0,null),t=Zr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=ud(n),e.memoizedState=cd,t):ip(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return lM(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=wr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=wr(o,s):(s=Zr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?ud(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=cd,i}return s=t.child,t=s.sibling,i=wr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function ip(t,e){return e=qc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function rl(t,e,n,i){return i!==null&&Gh(i),na(e,t.child,null,n),t=ip(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function lM(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Du(Error(de(422))),rl(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=qc({mode:"visible",children:i.children},r,0,null),s=Zr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&na(e,t.child,null,a),e.child.memoizedState=ud(a),e.memoizedState=cd,s);if(!(e.mode&1))return rl(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(de(419)),i=Du(s,i,void 0),rl(t,e,a,i)}if(o=(a&t.childLanes)!==0,wn||o){if(i=Yt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,ji(t,r),li(i,t,r,-1))}return cp(),i=Du(Error(de(421))),rl(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=SM.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Fn=yr(r.nextSibling),kn=e,wt=!0,ri=null,t!==null&&(jn[Xn++]=Fi,jn[Xn++]=Oi,jn[Xn++]=es,Fi=t.id,Oi=t.overflow,es=e),e=ip(e,i.children),e.flags|=4096,e)}function km(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),id(t.return,e,n)}function Iu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function v_(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(pn(t,e,i.children,n),i=Ct.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&km(t,n,e);else if(t.tag===19)km(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(vt(Ct,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&xc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Iu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&xc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Iu(e,!0,n,null,s);break;case"together":Iu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Wl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Xi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ns|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(de(153));if(e.child!==null){for(t=e.child,n=wr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=wr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function cM(t,e,n){switch(e.tag){case 3:m_(e),ta();break;case 5:Gv(e);break;case 1:bn(e.type)&&hc(e);break;case 4:Yh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;vt(gc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(vt(Ct,Ct.current&1),e.flags|=128,null):n&e.child.childLanes?g_(t,e,n):(vt(Ct,Ct.current&1),t=Xi(t,e,n),t!==null?t.sibling:null);vt(Ct,Ct.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return v_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),vt(Ct,Ct.current),i)break;return null;case 22:case 23:return e.lanes=0,h_(t,e,n)}return Xi(t,e,n)}var __,fd,x_,y_;__=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};fd=function(){};x_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,$r(yi.current);var s=null;switch(n){case"input":r=Df(t,r),i=Df(t,i),s=[];break;case"select":r=Lt({},r,{value:void 0}),i=Lt({},i,{value:void 0}),s=[];break;case"textarea":r=Ff(t,r),i=Ff(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=fc)}kf(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ro.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r?.[c],i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ro.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&_t("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};y_=function(t,e,n,i){n!==i&&(e.flags|=4)};function ba(t,e){if(!wt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function an(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function uM(t,e,n){var i=e.pendingProps;switch(Hh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return an(e),null;case 1:return bn(e.type)&&dc(),an(e),null;case 3:return i=e.stateNode,ia(),yt(Tn),yt(dn),Zh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(nl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ri!==null&&(xd(ri),ri=null))),fd(t,e),an(e),null;case 5:Kh(e);var r=$r(vo.current);if(n=e.type,t!==null&&e.stateNode!=null)x_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(de(166));return an(e),null}if(t=$r(yi.current),nl(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[gi]=e,i[mo]=s,t=(e.mode&1)!==0,n){case"dialog":_t("cancel",i),_t("close",i);break;case"iframe":case"object":case"embed":_t("load",i);break;case"video":case"audio":for(r=0;r<Ha.length;r++)_t(Ha[r],i);break;case"source":_t("error",i);break;case"img":case"image":case"link":_t("error",i),_t("load",i);break;case"details":_t("toggle",i);break;case"input":$p(i,s),_t("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},_t("invalid",i);break;case"textarea":Yp(i,s),_t("invalid",i)}kf(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&tl(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&tl(i.textContent,o,t),r=["children",""+o]):ro.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&_t("scroll",i)}switch(n){case"input":$o(i),qp(i,s,!0);break;case"textarea":$o(i),Kp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=fc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=q0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[gi]=e,t[mo]=i,__(t,e,!1,!1),e.stateNode=t;e:{switch(a=Bf(n,i),n){case"dialog":_t("cancel",t),_t("close",t),r=i;break;case"iframe":case"object":case"embed":_t("load",t),r=i;break;case"video":case"audio":for(r=0;r<Ha.length;r++)_t(Ha[r],t);r=i;break;case"source":_t("error",t),r=i;break;case"img":case"image":case"link":_t("error",t),_t("load",t),r=i;break;case"details":_t("toggle",t),r=i;break;case"input":$p(t,i),r=Df(t,i),_t("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Lt({},i,{value:void 0}),_t("invalid",t);break;case"textarea":Yp(t,i),r=Ff(t,i),_t("invalid",t);break;default:r=i}kf(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?Z0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Y0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&so(t,l):typeof l=="number"&&so(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ro.hasOwnProperty(s)?l!=null&&s==="onScroll"&&_t("scroll",t):l!=null&&Ah(t,s,l,a))}switch(n){case"input":$o(t),qp(t,i,!1);break;case"textarea":$o(t),Kp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+br(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Gs(t,!!i.multiple,s,!1):i.defaultValue!=null&&Gs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=fc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return an(e),null;case 6:if(t&&e.stateNode!=null)y_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(de(166));if(n=$r(vo.current),$r(yi.current),nl(e)){if(i=e.stateNode,n=e.memoizedProps,i[gi]=e,(s=i.nodeValue!==n)&&(t=kn,t!==null))switch(t.tag){case 3:tl(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&tl(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[gi]=e,e.stateNode=i}return an(e),null;case 13:if(yt(Ct),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(wt&&Fn!==null&&e.mode&1&&!(e.flags&128))kv(),ta(),e.flags|=98560,s=!1;else if(s=nl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(de(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(de(317));s[gi]=e}else ta(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;an(e),s=!1}else ri!==null&&(xd(ri),ri=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Ct.current&1?Wt===0&&(Wt=3):cp())),e.updateQueue!==null&&(e.flags|=4),an(e),null);case 4:return ia(),fd(t,e),t===null&&ho(e.stateNode.containerInfo),an(e),null;case 10:return Xh(e.type._context),an(e),null;case 17:return bn(e.type)&&dc(),an(e),null;case 19:if(yt(Ct),s=e.memoizedState,s===null)return an(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)ba(s,!1);else{if(Wt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=xc(t),a!==null){for(e.flags|=128,ba(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return vt(Ct,Ct.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ft()>sa&&(e.flags|=128,i=!0,ba(s,!1),e.lanes=4194304)}else{if(!i)if(t=xc(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ba(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!wt)return an(e),null}else 2*Ft()-s.renderingStartTime>sa&&n!==1073741824&&(e.flags|=128,i=!0,ba(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ft(),e.sibling=null,n=Ct.current,vt(Ct,i?n&1|2:n&1),e):(an(e),null);case 22:case 23:return lp(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Ln&1073741824&&(an(e),e.subtreeFlags&6&&(e.flags|=8192)):an(e),null;case 24:return null;case 25:return null}throw Error(de(156,e.tag))}function fM(t,e){switch(Hh(e),e.tag){case 1:return bn(e.type)&&dc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ia(),yt(Tn),yt(dn),Zh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Kh(e),null;case 13:if(yt(Ct),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(de(340));ta()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return yt(Ct),null;case 4:return ia(),null;case 10:return Xh(e.type._context),null;case 22:case 23:return lp(),null;case 24:return null;default:return null}}var sl=!1,cn=!1,dM=typeof WeakSet=="function"?WeakSet:Set,be=null;function ks(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Dt(t,e,i)}else n.current=null}function dd(t,e,n){try{n()}catch(i){Dt(t,e,i)}}var Bm=!1;function hM(t,e){if(Yf=lc,t=Tv(),zh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,u=0,h=t,f=null;t:for(;;){for(var p;h!==n||r!==0&&h.nodeType!==3||(o=a+r),h!==s||i!==0&&h.nodeType!==3||(l=a+i),h.nodeType===3&&(a+=h.nodeValue.length),(p=h.firstChild)!==null;)f=h,h=p;for(;;){if(h===t)break t;if(f===n&&++c===r&&(o=a),f===s&&++u===i&&(l=a),(p=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=p}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Kf={focusedElem:t,selectionRange:n},lc=!1,be=e;be!==null;)if(e=be,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,be=t;else for(;be!==null;){e=be;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var E=v.memoizedProps,_=v.memoizedState,d=e.stateNode,g=d.getSnapshotBeforeUpdate(e.elementType===e.type?E:ni(e.type,E),_);d.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var M=e.stateNode.containerInfo;M.nodeType===1?M.textContent="":M.nodeType===9&&M.documentElement&&M.removeChild(M.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(de(163))}}catch(y){Dt(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,be=t;break}be=e.return}return v=Bm,Bm=!1,v}function Ja(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&dd(e,n,s)}r=r.next}while(r!==i)}}function Xc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function hd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function S_(t){var e=t.alternate;e!==null&&(t.alternate=null,S_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[gi],delete e[mo],delete e[Qf],delete e[YS],delete e[KS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function M_(t){return t.tag===5||t.tag===3||t.tag===4}function zm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||M_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function pd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=fc));else if(i!==4&&(t=t.child,t!==null))for(pd(t,e,n),t=t.sibling;t!==null;)pd(t,e,n),t=t.sibling}function md(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(md(t,e,n),t=t.sibling;t!==null;)md(t,e,n),t=t.sibling}var Zt=null,ii=!1;function er(t,e,n){for(n=n.child;n!==null;)E_(t,e,n),n=n.sibling}function E_(t,e,n){if(xi&&typeof xi.onCommitFiberUnmount=="function")try{xi.onCommitFiberUnmount(kc,n)}catch{}switch(n.tag){case 5:cn||ks(n,e);case 6:var i=Zt,r=ii;Zt=null,er(t,e,n),Zt=i,ii=r,Zt!==null&&(ii?(t=Zt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Zt.removeChild(n.stateNode));break;case 18:Zt!==null&&(ii?(t=Zt,n=n.stateNode,t.nodeType===8?Au(t.parentNode,n):t.nodeType===1&&Au(t,n),co(t)):Au(Zt,n.stateNode));break;case 4:i=Zt,r=ii,Zt=n.stateNode.containerInfo,ii=!0,er(t,e,n),Zt=i,ii=r;break;case 0:case 11:case 14:case 15:if(!cn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&dd(n,e,a),r=r.next}while(r!==i)}er(t,e,n);break;case 1:if(!cn&&(ks(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){Dt(n,e,o)}er(t,e,n);break;case 21:er(t,e,n);break;case 22:n.mode&1?(cn=(i=cn)||n.memoizedState!==null,er(t,e,n),cn=i):er(t,e,n);break;default:er(t,e,n)}}function Vm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new dM),e.forEach(function(i){var r=MM.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Jn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Zt=o.stateNode,ii=!1;break e;case 3:Zt=o.stateNode.containerInfo,ii=!0;break e;case 4:Zt=o.stateNode.containerInfo,ii=!0;break e}o=o.return}if(Zt===null)throw Error(de(160));E_(s,a,r),Zt=null,ii=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Dt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)w_(e,t),e=e.sibling}function w_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Jn(e,t),fi(t),i&4){try{Ja(3,t,t.return),Xc(3,t)}catch(E){Dt(t,t.return,E)}try{Ja(5,t,t.return)}catch(E){Dt(t,t.return,E)}}break;case 1:Jn(e,t),fi(t),i&512&&n!==null&&ks(n,n.return);break;case 5:if(Jn(e,t),fi(t),i&512&&n!==null&&ks(n,n.return),t.flags&32){var r=t.stateNode;try{so(r,"")}catch(E){Dt(t,t.return,E)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&X0(r,s),Bf(o,a);var c=Bf(o,s);for(a=0;a<l.length;a+=2){var u=l[a],h=l[a+1];u==="style"?Z0(r,h):u==="dangerouslySetInnerHTML"?Y0(r,h):u==="children"?so(r,h):Ah(r,u,h,c)}switch(o){case"input":If(r,s);break;case"textarea":$0(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Gs(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?Gs(r,!!s.multiple,s.defaultValue,!0):Gs(r,!!s.multiple,s.multiple?[]:"",!1))}r[mo]=s}catch(E){Dt(t,t.return,E)}}break;case 6:if(Jn(e,t),fi(t),i&4){if(t.stateNode===null)throw Error(de(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(E){Dt(t,t.return,E)}}break;case 3:if(Jn(e,t),fi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{co(e.containerInfo)}catch(E){Dt(t,t.return,E)}break;case 4:Jn(e,t),fi(t);break;case 13:Jn(e,t),fi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(ap=Ft())),i&4&&Vm(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(cn=(c=cn)||u,Jn(e,t),cn=c):Jn(e,t),fi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(be=t,u=t.child;u!==null;){for(h=be=u;be!==null;){switch(f=be,p=f.child,f.tag){case 0:case 11:case 14:case 15:Ja(4,f,f.return);break;case 1:ks(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(E){Dt(i,n,E)}}break;case 5:ks(f,f.return);break;case 22:if(f.memoizedState!==null){Gm(h);continue}}p!==null?(p.return=f,be=p):Gm(h)}u=u.sibling}e:for(u=null,h=t;;){if(h.tag===5){if(u===null){u=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=h.stateNode,l=h.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=K0("display",a))}catch(E){Dt(t,t.return,E)}}}else if(h.tag===6){if(u===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(E){Dt(t,t.return,E)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;u===h&&(u=null),h=h.return}u===h&&(u=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Jn(e,t),fi(t),i&4&&Vm(t);break;case 21:break;default:Jn(e,t),fi(t)}}function fi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(M_(n)){var i=n;break e}n=n.return}throw Error(de(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(so(r,""),i.flags&=-33);var s=zm(t);md(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=zm(t);pd(t,o,a);break;default:throw Error(de(161))}}catch(l){Dt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function pM(t,e,n){be=t,T_(t)}function T_(t,e,n){for(var i=(t.mode&1)!==0;be!==null;){var r=be,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||sl;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||cn;o=sl;var c=cn;if(sl=a,(cn=l)&&!c)for(be=r;be!==null;)a=be,l=a.child,a.tag===22&&a.memoizedState!==null?Wm(r):l!==null?(l.return=a,be=l):Wm(r);for(;s!==null;)be=s,T_(s),s=s.sibling;be=r,sl=o,cn=c}Hm(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,be=s):Hm(t)}}function Hm(t){for(;be!==null;){var e=be;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:cn||Xc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!cn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:ni(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&bm(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}bm(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var h=u.dehydrated;h!==null&&co(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(de(163))}cn||e.flags&512&&hd(e)}catch(f){Dt(e,e.return,f)}}if(e===t){be=null;break}if(n=e.sibling,n!==null){n.return=e.return,be=n;break}be=e.return}}function Gm(t){for(;be!==null;){var e=be;if(e===t){be=null;break}var n=e.sibling;if(n!==null){n.return=e.return,be=n;break}be=e.return}}function Wm(t){for(;be!==null;){var e=be;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Xc(4,e)}catch(l){Dt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Dt(e,r,l)}}var s=e.return;try{hd(e)}catch(l){Dt(e,s,l)}break;case 5:var a=e.return;try{hd(e)}catch(l){Dt(e,a,l)}}}catch(l){Dt(e,e.return,l)}if(e===t){be=null;break}var o=e.sibling;if(o!==null){o.return=e.return,be=o;break}be=e.return}}var mM=Math.ceil,Mc=Zi.ReactCurrentDispatcher,rp=Zi.ReactCurrentOwner,qn=Zi.ReactCurrentBatchConfig,it=0,Yt=null,Vt=null,en=0,Ln=0,Bs=Lr(0),Wt=0,So=null,ns=0,$c=0,sp=0,Qa=null,En=null,ap=0,sa=1/0,Di=null,Ec=!1,gd=null,Mr=null,al=!1,mr=null,wc=0,eo=0,vd=null,jl=-1,Xl=0;function mn(){return it&6?Ft():jl!==-1?jl:jl=Ft()}function Er(t){return t.mode&1?it&2&&en!==0?en&-en:JS.transition!==null?(Xl===0&&(Xl=cv()),Xl):(t=ut,t!==0||(t=window.event,t=t===void 0?16:gv(t.type)),t):1}function li(t,e,n,i){if(50<eo)throw eo=0,vd=null,Error(de(185));Co(t,n,i),(!(it&2)||t!==Yt)&&(t===Yt&&(!(it&2)&&($c|=n),Wt===4&&dr(t,en)),An(t,i),n===1&&it===0&&!(e.mode&1)&&(sa=Ft()+500,Gc&&Dr()))}function An(t,e){var n=t.callbackNode;Jy(t,e);var i=oc(t,t===Yt?en:0);if(i===0)n!==null&&Qp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Qp(n),e===1)t.tag===0?ZS(jm.bind(null,t)):Uv(jm.bind(null,t)),$S(function(){!(it&6)&&Dr()}),n=null;else{switch(uv(i)){case 1:n=Lh;break;case 4:n=ov;break;case 16:n=ac;break;case 536870912:n=lv;break;default:n=ac}n=D_(n,b_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function b_(t,e){if(jl=-1,Xl=0,it&6)throw Error(de(327));var n=t.callbackNode;if(qs()&&t.callbackNode!==n)return null;var i=oc(t,t===Yt?en:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Tc(t,i);else{e=i;var r=it;it|=2;var s=C_();(Yt!==t||en!==e)&&(Di=null,sa=Ft()+500,Kr(t,e));do try{_M();break}catch(o){A_(t,o)}while(!0);jh(),Mc.current=s,it=r,Vt!==null?e=0:(Yt=null,en=0,e=Wt)}if(e!==0){if(e===2&&(r=Wf(t),r!==0&&(i=r,e=_d(t,r))),e===1)throw n=So,Kr(t,0),dr(t,i),An(t,Ft()),n;if(e===6)dr(t,i);else{if(r=t.current.alternate,!(i&30)&&!gM(r)&&(e=Tc(t,i),e===2&&(s=Wf(t),s!==0&&(i=s,e=_d(t,s))),e===1))throw n=So,Kr(t,0),dr(t,i),An(t,Ft()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(de(345));case 2:Hr(t,En,Di);break;case 3:if(dr(t,i),(i&130023424)===i&&(e=ap+500-Ft(),10<e)){if(oc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){mn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Jf(Hr.bind(null,t,En,Di),e);break}Hr(t,En,Di);break;case 4:if(dr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-oi(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=Ft()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*mM(i/1960))-i,10<i){t.timeoutHandle=Jf(Hr.bind(null,t,En,Di),i);break}Hr(t,En,Di);break;case 5:Hr(t,En,Di);break;default:throw Error(de(329))}}}return An(t,Ft()),t.callbackNode===n?b_.bind(null,t):null}function _d(t,e){var n=Qa;return t.current.memoizedState.isDehydrated&&(Kr(t,e).flags|=256),t=Tc(t,e),t!==2&&(e=En,En=n,e!==null&&xd(e)),t}function xd(t){En===null?En=t:En.push.apply(En,t)}function gM(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ci(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function dr(t,e){for(e&=~sp,e&=~$c,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-oi(e),i=1<<n;t[n]=-1,e&=~i}}function jm(t){if(it&6)throw Error(de(327));qs();var e=oc(t,0);if(!(e&1))return An(t,Ft()),null;var n=Tc(t,e);if(t.tag!==0&&n===2){var i=Wf(t);i!==0&&(e=i,n=_d(t,i))}if(n===1)throw n=So,Kr(t,0),dr(t,e),An(t,Ft()),n;if(n===6)throw Error(de(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Hr(t,En,Di),An(t,Ft()),null}function op(t,e){var n=it;it|=1;try{return t(e)}finally{it=n,it===0&&(sa=Ft()+500,Gc&&Dr())}}function is(t){mr!==null&&mr.tag===0&&!(it&6)&&qs();var e=it;it|=1;var n=qn.transition,i=ut;try{if(qn.transition=null,ut=1,t)return t()}finally{ut=i,qn.transition=n,it=e,!(it&6)&&Dr()}}function lp(){Ln=Bs.current,yt(Bs)}function Kr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,XS(n)),Vt!==null)for(n=Vt.return;n!==null;){var i=n;switch(Hh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&dc();break;case 3:ia(),yt(Tn),yt(dn),Zh();break;case 5:Kh(i);break;case 4:ia();break;case 13:yt(Ct);break;case 19:yt(Ct);break;case 10:Xh(i.type._context);break;case 22:case 23:lp()}n=n.return}if(Yt=t,Vt=t=wr(t.current,null),en=Ln=e,Wt=0,So=null,sp=$c=ns=0,En=Qa=null,Xr!==null){for(e=0;e<Xr.length;e++)if(n=Xr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}Xr=null}return t}function A_(t,e){do{var n=Vt;try{if(jh(),Hl.current=Sc,yc){for(var i=Pt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}yc=!1}if(ts=0,qt=Gt=Pt=null,Za=!1,_o=0,rp.current=null,n===null||n.return===null){Wt=1,So=e,Vt=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=en,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=o,h=u.tag;if(!(u.mode&1)&&(h===0||h===11||h===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=Lm(a);if(p!==null){p.flags&=-257,Dm(p,a,o,s,e),p.mode&1&&Nm(s,c,e),e=p,l=c;var v=e.updateQueue;if(v===null){var E=new Set;E.add(l),e.updateQueue=E}else v.add(l);break e}else{if(!(e&1)){Nm(s,c,e),cp();break e}l=Error(de(426))}}else if(wt&&o.mode&1){var _=Lm(a);if(_!==null){!(_.flags&65536)&&(_.flags|=256),Dm(_,a,o,s,e),Gh(ra(l,o));break e}}s=l=ra(l,o),Wt!==4&&(Wt=2),Qa===null?Qa=[s]:Qa.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=u_(s,l,e);Tm(s,d);break e;case 1:o=l;var g=s.type,M=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||M!==null&&typeof M.componentDidCatch=="function"&&(Mr===null||!Mr.has(M)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=f_(s,o,e);Tm(s,y);break e}}s=s.return}while(s!==null)}P_(n)}catch(b){e=b,Vt===n&&n!==null&&(Vt=n=n.return);continue}break}while(!0)}function C_(){var t=Mc.current;return Mc.current=Sc,t===null?Sc:t}function cp(){(Wt===0||Wt===3||Wt===2)&&(Wt=4),Yt===null||!(ns&268435455)&&!($c&268435455)||dr(Yt,en)}function Tc(t,e){var n=it;it|=2;var i=C_();(Yt!==t||en!==e)&&(Di=null,Kr(t,e));do try{vM();break}catch(r){A_(t,r)}while(!0);if(jh(),it=n,Mc.current=i,Vt!==null)throw Error(de(261));return Yt=null,en=0,Wt}function vM(){for(;Vt!==null;)R_(Vt)}function _M(){for(;Vt!==null&&!Gy();)R_(Vt)}function R_(t){var e=L_(t.alternate,t,Ln);t.memoizedProps=t.pendingProps,e===null?P_(t):Vt=e,rp.current=null}function P_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=fM(n,e),n!==null){n.flags&=32767,Vt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Wt=6,Vt=null;return}}else if(n=uM(n,e,Ln),n!==null){Vt=n;return}if(e=e.sibling,e!==null){Vt=e;return}Vt=e=t}while(e!==null);Wt===0&&(Wt=5)}function Hr(t,e,n){var i=ut,r=qn.transition;try{qn.transition=null,ut=1,xM(t,e,n,i)}finally{qn.transition=r,ut=i}return null}function xM(t,e,n,i){do qs();while(mr!==null);if(it&6)throw Error(de(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(de(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Qy(t,s),t===Yt&&(Vt=Yt=null,en=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||al||(al=!0,D_(ac,function(){return qs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=qn.transition,qn.transition=null;var a=ut;ut=1;var o=it;it|=4,rp.current=null,hM(t,n),w_(n,t),BS(Kf),lc=!!Yf,Kf=Yf=null,t.current=n,pM(n),Wy(),it=o,ut=a,qn.transition=s}else t.current=n;if(al&&(al=!1,mr=t,wc=r),s=t.pendingLanes,s===0&&(Mr=null),$y(n.stateNode),An(t,Ft()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Ec)throw Ec=!1,t=gd,gd=null,t;return wc&1&&t.tag!==0&&qs(),s=t.pendingLanes,s&1?t===vd?eo++:(eo=0,vd=t):eo=0,Dr(),null}function qs(){if(mr!==null){var t=uv(wc),e=qn.transition,n=ut;try{if(qn.transition=null,ut=16>t?16:t,mr===null)var i=!1;else{if(t=mr,mr=null,wc=0,it&6)throw Error(de(331));var r=it;for(it|=4,be=t.current;be!==null;){var s=be,a=s.child;if(be.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(be=c;be!==null;){var u=be;switch(u.tag){case 0:case 11:case 15:Ja(8,u,s)}var h=u.child;if(h!==null)h.return=u,be=h;else for(;be!==null;){u=be;var f=u.sibling,p=u.return;if(S_(u),u===c){be=null;break}if(f!==null){f.return=p,be=f;break}be=p}}}var v=s.alternate;if(v!==null){var E=v.child;if(E!==null){v.child=null;do{var _=E.sibling;E.sibling=null,E=_}while(E!==null)}}be=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,be=a;else e:for(;be!==null;){if(s=be,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ja(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,be=d;break e}be=s.return}}var g=t.current;for(be=g;be!==null;){a=be;var M=a.child;if(a.subtreeFlags&2064&&M!==null)M.return=a,be=M;else e:for(a=g;be!==null;){if(o=be,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Xc(9,o)}}catch(b){Dt(o,o.return,b)}if(o===a){be=null;break e}var y=o.sibling;if(y!==null){y.return=o.return,be=y;break e}be=o.return}}if(it=r,Dr(),xi&&typeof xi.onPostCommitFiberRoot=="function")try{xi.onPostCommitFiberRoot(kc,t)}catch{}i=!0}return i}finally{ut=n,qn.transition=e}}return!1}function Xm(t,e,n){e=ra(n,e),e=u_(t,e,1),t=Sr(t,e,1),e=mn(),t!==null&&(Co(t,1,e),An(t,e))}function Dt(t,e,n){if(t.tag===3)Xm(t,t,n);else for(;e!==null;){if(e.tag===3){Xm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Mr===null||!Mr.has(i))){t=ra(n,t),t=f_(e,t,1),e=Sr(e,t,1),t=mn(),e!==null&&(Co(e,1,t),An(e,t));break}}e=e.return}}function yM(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=mn(),t.pingedLanes|=t.suspendedLanes&n,Yt===t&&(en&n)===n&&(Wt===4||Wt===3&&(en&130023424)===en&&500>Ft()-ap?Kr(t,0):sp|=n),An(t,e)}function N_(t,e){e===0&&(t.mode&1?(e=Ko,Ko<<=1,!(Ko&130023424)&&(Ko=4194304)):e=1);var n=mn();t=ji(t,e),t!==null&&(Co(t,e,n),An(t,n))}function SM(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),N_(t,n)}function MM(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(de(314))}i!==null&&i.delete(e),N_(t,n)}var L_;L_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Tn.current)wn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return wn=!1,cM(t,e,n);wn=!!(t.flags&131072)}else wn=!1,wt&&e.flags&1048576&&Fv(e,mc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Wl(t,e),t=e.pendingProps;var r=ea(e,dn.current);$s(e,n),r=Qh(null,e,i,t,r,n);var s=ep();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,bn(i)?(s=!0,hc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,qh(e),r.updater=jc,e.stateNode=r,r._reactInternals=e,sd(e,i,t,n),e=ld(null,e,i,!0,s,n)):(e.tag=0,wt&&s&&Vh(e),pn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Wl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=wM(i),t=ni(i,t),r){case 0:e=od(null,e,i,t,n);break e;case 1:e=Fm(null,e,i,t,n);break e;case 11:e=Im(null,e,i,t,n);break e;case 14:e=Um(null,e,i,ni(i.type,t),n);break e}throw Error(de(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ni(i,r),od(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ni(i,r),Fm(t,e,i,r,n);case 3:e:{if(m_(e),t===null)throw Error(de(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Hv(t,e),_c(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=ra(Error(de(423)),e),e=Om(t,e,i,n,r);break e}else if(i!==r){r=ra(Error(de(424)),e),e=Om(t,e,i,n,r);break e}else for(Fn=yr(e.stateNode.containerInfo.firstChild),kn=e,wt=!0,ri=null,n=zv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ta(),i===r){e=Xi(t,e,n);break e}pn(t,e,i,n)}e=e.child}return e;case 5:return Gv(e),t===null&&nd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,Zf(i,r)?a=null:s!==null&&Zf(i,s)&&(e.flags|=32),p_(t,e),pn(t,e,a,n),e.child;case 6:return t===null&&nd(e),null;case 13:return g_(t,e,n);case 4:return Yh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=na(e,null,i,n):pn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ni(i,r),Im(t,e,i,r,n);case 7:return pn(t,e,e.pendingProps,n),e.child;case 8:return pn(t,e,e.pendingProps.children,n),e.child;case 12:return pn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,vt(gc,i._currentValue),i._currentValue=a,s!==null)if(ci(s.value,a)){if(s.children===r.children&&!Tn.current){e=Xi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Bi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),id(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(de(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),id(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}pn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,$s(e,n),r=Kn(r),i=i(r),e.flags|=1,pn(t,e,i,n),e.child;case 14:return i=e.type,r=ni(i,e.pendingProps),r=ni(i.type,r),Um(t,e,i,r,n);case 15:return d_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ni(i,r),Wl(t,e),e.tag=1,bn(i)?(t=!0,hc(e)):t=!1,$s(e,n),c_(e,i,r),sd(e,i,r,n),ld(null,e,i,!0,t,n);case 19:return v_(t,e,n);case 22:return h_(t,e,n)}throw Error(de(156,e.tag))};function D_(t,e){return av(t,e)}function EM(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $n(t,e,n,i){return new EM(t,e,n,i)}function up(t){return t=t.prototype,!(!t||!t.isReactComponent)}function wM(t){if(typeof t=="function")return up(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Rh)return 11;if(t===Ph)return 14}return 2}function wr(t,e){var n=t.alternate;return n===null?(n=$n(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function $l(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")up(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case Rs:return Zr(n.children,r,s,e);case Ch:a=8,r|=8;break;case Rf:return t=$n(12,n,e,r|2),t.elementType=Rf,t.lanes=s,t;case Pf:return t=$n(13,n,e,r),t.elementType=Pf,t.lanes=s,t;case Nf:return t=$n(19,n,e,r),t.elementType=Nf,t.lanes=s,t;case G0:return qc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case V0:a=10;break e;case H0:a=9;break e;case Rh:a=11;break e;case Ph:a=14;break e;case lr:a=16,i=null;break e}throw Error(de(130,t==null?t:typeof t,""))}return e=$n(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Zr(t,e,n,i){return t=$n(7,t,i,e),t.lanes=n,t}function qc(t,e,n,i){return t=$n(22,t,i,e),t.elementType=G0,t.lanes=n,t.stateNode={isHidden:!1},t}function Uu(t,e,n){return t=$n(6,t,null,e),t.lanes=n,t}function Fu(t,e,n){return e=$n(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function TM(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gu(0),this.expirationTimes=gu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function fp(t,e,n,i,r,s,a,o,l){return t=new TM(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=$n(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},qh(s),t}function bM(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Cs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function I_(t){if(!t)return Ar;t=t._reactInternals;e:{if(cs(t)!==t||t.tag!==1)throw Error(de(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(bn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(de(171))}if(t.tag===1){var n=t.type;if(bn(n))return Iv(t,n,e)}return e}function U_(t,e,n,i,r,s,a,o,l){return t=fp(n,i,!0,t,r,s,a,o,l),t.context=I_(null),n=t.current,i=mn(),r=Er(n),s=Bi(i,r),s.callback=e??null,Sr(n,s,r),t.current.lanes=r,Co(t,r,i),An(t,i),t}function Yc(t,e,n,i){var r=e.current,s=mn(),a=Er(r);return n=I_(n),e.context===null?e.context=n:e.pendingContext=n,e=Bi(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Sr(r,e,a),t!==null&&(li(t,r,a,s),Vl(t,r,a)),a}function bc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function $m(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function dp(t,e){$m(t,e),(t=t.alternate)&&$m(t,e)}function AM(){return null}var F_=typeof reportError=="function"?reportError:function(t){console.error(t)};function hp(t){this._internalRoot=t}Kc.prototype.render=hp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(de(409));Yc(t,e,null,null)};Kc.prototype.unmount=hp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;is(function(){Yc(null,t,null,null)}),e[Wi]=null}};function Kc(t){this._internalRoot=t}Kc.prototype.unstable_scheduleHydration=function(t){if(t){var e=hv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<fr.length&&e!==0&&e<fr[n].priority;n++);fr.splice(n,0,t),n===0&&mv(t)}};function pp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Zc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function qm(){}function CM(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=bc(a);s.call(c)}}var a=U_(e,i,t,0,null,!1,!1,"",qm);return t._reactRootContainer=a,t[Wi]=a.current,ho(t.nodeType===8?t.parentNode:t),is(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=bc(l);o.call(c)}}var l=fp(t,0,!1,null,null,!1,!1,"",qm);return t._reactRootContainer=l,t[Wi]=l.current,ho(t.nodeType===8?t.parentNode:t),is(function(){Yc(e,l,n,i)}),l}function Jc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=bc(a);o.call(l)}}Yc(e,a,t,r)}else a=CM(n,e,t,r,i);return bc(a)}fv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Va(e.pendingLanes);n!==0&&(Dh(e,n|1),An(e,Ft()),!(it&6)&&(sa=Ft()+500,Dr()))}break;case 13:is(function(){var i=ji(t,1);if(i!==null){var r=mn();li(i,t,1,r)}}),dp(t,1)}};Ih=function(t){if(t.tag===13){var e=ji(t,134217728);if(e!==null){var n=mn();li(e,t,134217728,n)}dp(t,134217728)}};dv=function(t){if(t.tag===13){var e=Er(t),n=ji(t,e);if(n!==null){var i=mn();li(n,t,e,i)}dp(t,e)}};hv=function(){return ut};pv=function(t,e){var n=ut;try{return ut=t,e()}finally{ut=n}};Vf=function(t,e,n){switch(e){case"input":if(If(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Hc(i);if(!r)throw Error(de(90));j0(i),If(i,r)}}}break;case"textarea":$0(t,n);break;case"select":e=n.value,e!=null&&Gs(t,!!n.multiple,e,!1)}};ev=op;tv=is;var RM={usingClientEntryPoint:!1,Events:[Po,Ds,Hc,J0,Q0,op]},Aa={findFiberByHostInstance:jr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},PM={bundleType:Aa.bundleType,version:Aa.version,rendererPackageName:Aa.rendererPackageName,rendererConfig:Aa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Zi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=rv(t),t===null?null:t.stateNode},findFiberByHostInstance:Aa.findFiberByHostInstance||AM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ol=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ol.isDisabled&&ol.supportsFiber)try{kc=ol.inject(PM),xi=ol}catch{}}zn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=RM;zn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!pp(e))throw Error(de(200));return bM(t,e,null,n)};zn.createRoot=function(t,e){if(!pp(t))throw Error(de(299));var n=!1,i="",r=F_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=fp(t,1,!1,null,null,n,!1,i,r),t[Wi]=e.current,ho(t.nodeType===8?t.parentNode:t),new hp(e)};zn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(de(188)):(t=Object.keys(t).join(","),Error(de(268,t)));return t=rv(e),t=t===null?null:t.stateNode,t};zn.flushSync=function(t){return is(t)};zn.hydrate=function(t,e,n){if(!Zc(e))throw Error(de(200));return Jc(null,t,e,!0,n)};zn.hydrateRoot=function(t,e,n){if(!pp(t))throw Error(de(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=F_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=U_(e,null,t,1,n??null,r,!1,s,a),t[Wi]=e.current,ho(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Kc(e)};zn.render=function(t,e,n){if(!Zc(e))throw Error(de(200));return Jc(null,t,e,!1,n)};zn.unmountComponentAtNode=function(t){if(!Zc(t))throw Error(de(40));return t._reactRootContainer?(is(function(){Jc(null,null,t,!1,function(){t._reactRootContainer=null,t[Wi]=null})}),!0):!1};zn.unstable_batchedUpdates=op;zn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Zc(n))throw Error(de(200));if(t==null||t._reactInternals===void 0)throw Error(de(38));return Jc(t,e,n,!1,i)};zn.version="18.3.1-next-f1338f8080-20240426";function O_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(O_)}catch(t){console.error(t)}}O_(),O0.exports=zn;var NM=O0.exports,Ym=NM;Af.createRoot=Ym.createRoot,Af.hydrateRoot=Ym.hydrateRoot;var vn=Uint8Array,On=Uint16Array,mp=Int32Array,gp=new vn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),vp=new vn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Km=new vn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),k_=function(t,e){for(var n=new On(31),i=0;i<31;++i)n[i]=e+=1<<t[i-1];for(var r=new mp(n[30]),i=1;i<30;++i)for(var s=n[i];s<n[i+1];++s)r[s]=s-n[i]<<5|i;return{b:n,r}},B_=k_(gp,2),LM=B_.b,yd=B_.r;LM[28]=258,yd[258]=28;var DM=k_(vp,0),Zm=DM.r,Sd=new On(32768);for(var xt=0;xt<32768;++xt){var tr=(xt&43690)>>1|(xt&21845)<<1;tr=(tr&52428)>>2|(tr&13107)<<2,tr=(tr&61680)>>4|(tr&3855)<<4,Sd[xt]=((tr&65280)>>8|(tr&255)<<8)>>1}var to=function(t,e,n){for(var i=t.length,r=0,s=new On(e);r<i;++r)t[r]&&++s[t[r]-1];var a=new On(e);for(r=1;r<e;++r)a[r]=a[r-1]+s[r-1]<<1;var o;if(n){o=new On(1<<e);var l=15-e;for(r=0;r<i;++r)if(t[r])for(var c=r<<4|t[r],u=e-t[r],h=a[t[r]-1]++<<u,f=h|(1<<u)-1;h<=f;++h)o[Sd[h]>>l]=c}else for(o=new On(i),r=0;r<i;++r)t[r]&&(o[r]=Sd[a[t[r]-1]++]>>15-t[r]);return o},rs=new vn(288);for(var xt=0;xt<144;++xt)rs[xt]=8;for(var xt=144;xt<256;++xt)rs[xt]=9;for(var xt=256;xt<280;++xt)rs[xt]=7;for(var xt=280;xt<288;++xt)rs[xt]=8;var Ac=new vn(32);for(var xt=0;xt<32;++xt)Ac[xt]=5;var IM=to(rs,9,0),UM=to(Ac,5,0),z_=function(t){return(t+7)/8|0},V_=function(t,e,n){return(n==null||n>t.length)&&(n=t.length),new vn(t.subarray(e,n))},FM=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Qc=function(t,e,n){var i=new Error(e||FM[t]);if(i.code=t,Error.captureStackTrace&&Error.captureStackTrace(i,Qc),!n)throw i;return i},bi=function(t,e,n){n<<=e&7;var i=e/8|0;t[i]|=n,t[i+1]|=n>>8},Ca=function(t,e,n){n<<=e&7;var i=e/8|0;t[i]|=n,t[i+1]|=n>>8,t[i+2]|=n>>16},Ou=function(t,e){for(var n=[],i=0;i<t.length;++i)t[i]&&n.push({s:i,f:t[i]});var r=n.length,s=n.slice();if(!r)return{t:G_,l:0};if(r==1){var a=new vn(n[0].s+1);return a[n[0].s]=1,{t:a,l:1}}n.sort(function(b,w){return b.f-w.f}),n.push({s:-1,f:25001});var o=n[0],l=n[1],c=0,u=1,h=2;for(n[0]={s:-1,f:o.f+l.f,l:o,r:l};u!=r-1;)o=n[n[c].f<n[h].f?c++:h++],l=n[c!=u&&n[c].f<n[h].f?c++:h++],n[u++]={s:-1,f:o.f+l.f,l:o,r:l};for(var f=s[0].s,i=1;i<r;++i)s[i].s>f&&(f=s[i].s);var p=new On(f+1),v=Md(n[u-1],p,0);if(v>e){var i=0,E=0,_=v-e,d=1<<_;for(s.sort(function(w,A){return p[A.s]-p[w.s]||w.f-A.f});i<r;++i){var g=s[i].s;if(p[g]>e)E+=d-(1<<v-p[g]),p[g]=e;else break}for(E>>=_;E>0;){var M=s[i].s;p[M]<e?E-=1<<e-p[M]++-1:++i}for(;i>=0&&E;--i){var y=s[i].s;p[y]==e&&(--p[y],++E)}v=e}return{t:new vn(p),l:v}},Md=function(t,e,n){return t.s==-1?Math.max(Md(t.l,e,n+1),Md(t.r,e,n+1)):e[t.s]=n},Jm=function(t){for(var e=t.length;e&&!t[--e];);for(var n=new On(++e),i=0,r=t[0],s=1,a=function(l){n[i++]=l},o=1;o<=e;++o)if(t[o]==r&&o!=e)++s;else{if(!r&&s>2){for(;s>138;s-=138)a(32754);s>2&&(a(s>10?s-11<<5|28690:s-3<<5|12305),s=0)}else if(s>3){for(a(r),--s;s>6;s-=6)a(8304);s>2&&(a(s-3<<5|8208),s=0)}for(;s--;)a(r);s=1,r=t[o]}return{c:n.subarray(0,i),n:e}},Ra=function(t,e){for(var n=0,i=0;i<e.length;++i)n+=t[i]*e[i];return n},H_=function(t,e,n){var i=n.length,r=z_(e+2);t[r]=i&255,t[r+1]=i>>8,t[r+2]=t[r]^255,t[r+3]=t[r+1]^255;for(var s=0;s<i;++s)t[r+s+4]=n[s];return(r+4+i)*8},Qm=function(t,e,n,i,r,s,a,o,l,c,u){bi(e,u++,n),++r[256];for(var h=Ou(r,15),f=h.t,p=h.l,v=Ou(s,15),E=v.t,_=v.l,d=Jm(f),g=d.c,M=d.n,y=Jm(E),b=y.c,w=y.n,A=new On(19),x=0;x<g.length;++x)++A[g[x]&31];for(var x=0;x<b.length;++x)++A[b[x]&31];for(var T=Ou(A,7),R=T.t,L=T.l,F=19;F>4&&!R[Km[F-1]];--F);var $=c+5<<3,Y=Ra(r,rs)+Ra(s,Ac)+a,O=Ra(r,f)+Ra(s,E)+a+14+3*F+Ra(A,R)+2*A[16]+3*A[17]+7*A[18];if(l>=0&&$<=Y&&$<=O)return H_(e,u,t.subarray(l,l+c));var j,X,U,V;if(bi(e,u,1+(O<Y)),u+=2,O<Y){j=to(f,p,0),X=f,U=to(E,_,0),V=E;var J=to(R,L,0);bi(e,u,M-257),bi(e,u+5,w-1),bi(e,u+10,F-4),u+=14;for(var x=0;x<F;++x)bi(e,u+3*x,R[Km[x]]);u+=3*F;for(var ee=[g,b],le=0;le<2;++le)for(var Ie=ee[le],x=0;x<Ie.length;++x){var we=Ie[x]&31;bi(e,u,J[we]),u+=R[we],we>15&&(bi(e,u,Ie[x]>>5&127),u+=Ie[x]>>12)}}else j=IM,X=rs,U=UM,V=Ac;for(var x=0;x<o;++x){var Te=i[x];if(Te>255){var we=Te>>18&31;Ca(e,u,j[we+257]),u+=X[we+257],we>7&&(bi(e,u,Te>>23&31),u+=gp[we]);var K=Te&31;Ca(e,u,U[K]),u+=V[K],K>3&&(Ca(e,u,Te>>5&8191),u+=vp[K])}else Ca(e,u,j[Te]),u+=X[Te]}return Ca(e,u,j[256]),u+X[256]},OM=new mp([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),G_=new vn(0),kM=function(t,e,n,i,r,s){var a=s.z||t.length,o=new vn(i+a+5*(1+Math.ceil(a/7e3))+r),l=o.subarray(i,o.length-r),c=s.l,u=(s.r||0)&7;if(e){u&&(l[0]=s.r>>3);for(var h=OM[e-1],f=h>>13,p=h&8191,v=(1<<n)-1,E=s.p||new On(32768),_=s.h||new On(v+1),d=Math.ceil(n/3),g=2*d,M=function(Ye){return(t[Ye]^t[Ye+1]<<d^t[Ye+2]<<g)&v},y=new mp(25e3),b=new On(288),w=new On(32),A=0,x=0,T=s.i||0,R=0,L=s.w||0,F=0;T+2<a;++T){var $=M(T),Y=T&32767,O=_[$];if(E[Y]=O,_[$]=Y,L<=T){var j=a-T;if((A>7e3||R>24576)&&(j>423||!c)){u=Qm(t,l,0,y,b,w,x,R,F,T-F,u),R=A=x=0,F=T;for(var X=0;X<286;++X)b[X]=0;for(var X=0;X<30;++X)w[X]=0}var U=2,V=0,J=p,ee=Y-O&32767;if(j>2&&$==M(T-ee))for(var le=Math.min(f,j)-1,Ie=Math.min(32767,T),we=Math.min(258,j);ee<=Ie&&--J&&Y!=O;){if(t[T+U]==t[T+U-ee]){for(var Te=0;Te<we&&t[T+Te]==t[T+Te-ee];++Te);if(Te>U){if(U=Te,V=ee,Te>le)break;for(var K=Math.min(ee,Te-2),ue=0,X=0;X<K;++X){var fe=T-ee+X&32767,Ce=E[fe],ke=fe-Ce&32767;ke>ue&&(ue=ke,O=fe)}}}Y=O,O=E[Y],ee+=Y-O&32767}if(V){y[R++]=268435456|yd[U]<<18|Zm[V];var Ne=yd[U]&31,ht=Zm[V]&31;x+=gp[Ne]+vp[ht],++b[257+Ne],++w[ht],L=T+U,++A}else y[R++]=t[T],++b[t[T]]}}for(T=Math.max(T,L);T<a;++T)y[R++]=t[T],++b[t[T]];u=Qm(t,l,c,y,b,w,x,R,F,T-F,u),c||(s.r=u&7|l[u/8|0]<<3,u-=7,s.h=_,s.p=E,s.i=T,s.w=L)}else{for(var T=s.w||0;T<a+c;T+=65535){var He=T+65535;He>=a&&(l[u/8|0]=c,He=a),u=H_(l,u+1,t.subarray(T,He))}s.i=a}return V_(o,0,i+z_(u)+r)},BM=function(){for(var t=new Int32Array(256),e=0;e<256;++e){for(var n=e,i=9;--i;)n=(n&1&&-306674912)^n>>>1;t[e]=n}return t}(),zM=function(){var t=-1;return{p:function(e){for(var n=t,i=0;i<e.length;++i)n=BM[n&255^e[i]]^n>>>8;t=n},d:function(){return~t}}},VM=function(t,e,n,i,r){if(!r&&(r={l:1},e.dictionary)){var s=e.dictionary.subarray(-32768),a=new vn(s.length+t.length);a.set(s),a.set(t,s.length),t=a,r.w=s.length}return kM(t,e.level==null?6:e.level,e.mem==null?r.l?Math.ceil(Math.max(8,Math.min(13,Math.log(t.length)))*1.5):20:12+e.mem,n,i,r)},W_=function(t,e){var n={};for(var i in t)n[i]=t[i];for(var i in e)n[i]=e[i];return n},Jt=function(t,e,n){for(;n;++e)t[e]=n,n>>>=8};function HM(t,e){return VM(t,e||{},0,0)}var j_=function(t,e,n,i){for(var r in t){var s=t[r],a=e+r,o=i;Array.isArray(s)&&(o=W_(i,s[1]),s=s[0]),ArrayBuffer.isView(s)?n[a]=[s,o]:(n[a+="/"]=[new vn(0),o],j_(s,a,n,i))}},eg=typeof TextEncoder<"u"&&new TextEncoder,GM=typeof TextDecoder<"u"&&new TextDecoder,WM=0;try{GM.decode(G_,{stream:!0}),WM=1}catch{}function Ed(t,e){var n;if(eg)return eg.encode(t);for(var i=t.length,r=new vn(t.length+(t.length>>1)),s=0,a=function(c){r[s++]=c},n=0;n<i;++n){if(s+5>r.length){var o=new vn(s+8+(i-n<<1));o.set(r),r=o}var l=t.charCodeAt(n);l<128||e?a(l):l<2048?(a(192|l>>6),a(128|l&63)):l>55295&&l<57344?(l=65536+(l&1047552)|t.charCodeAt(++n)&1023,a(240|l>>18),a(128|l>>12&63),a(128|l>>6&63),a(128|l&63)):(a(224|l>>12),a(128|l>>6&63),a(128|l&63))}return V_(r,0,s)}var wd=function(t){var e=0;if(t)for(var n in t){var i=t[n].length;i>65535&&Qc(9),e+=i+4}return e},tg=function(t,e,n,i,r,s,a,o){var l=i.length,c=n.extra,u=o&&o.length,h=wd(c);Jt(t,e,a!=null?33639248:67324752),e+=4,a!=null&&(t[e++]=20,t[e++]=n.os),t[e]=20,e+=2,t[e++]=n.flag<<1|(s<0&&8),t[e++]=r&&8,t[e++]=n.compression&255,t[e++]=n.compression>>8;var f=new Date(n.mtime==null?Date.now():n.mtime),p=f.getFullYear()-1980;if((p<0||p>119)&&Qc(10),Jt(t,e,p<<25|f.getMonth()+1<<21|f.getDate()<<16|f.getHours()<<11|f.getMinutes()<<5|f.getSeconds()>>1),e+=4,s!=-1&&(Jt(t,e,n.crc),Jt(t,e+4,s<0?-s-2:s),Jt(t,e+8,n.size)),Jt(t,e+12,l),Jt(t,e+14,h),e+=16,a!=null&&(Jt(t,e,u),Jt(t,e+6,n.attrs),Jt(t,e+10,a),e+=14),t.set(i,e),e+=l,h)for(var v in c){var E=c[v],_=E.length;Jt(t,e,+v),Jt(t,e+2,_),t.set(E,e+4),e+=4+_}return u&&(t.set(o,e),e+=u),e},jM=function(t,e,n,i,r){Jt(t,e,101010256),Jt(t,e+8,n),Jt(t,e+10,n),Jt(t,e+12,i),Jt(t,e+16,r)};function XM(t,e){e||(e={});var n={},i=[];j_(t,"",n,e);var r=0,s=0;for(var a in n){var o=n[a],l=o[0],c=o[1],u=c.level==0?0:8,h=Ed(a),f=h.length,p=c.comment,v=p&&Ed(p),E=v&&v.length,_=wd(c.extra);f>65535&&Qc(11);var d=u?HM(l,c):l,g=d.length,M=zM();M.p(l),i.push(W_(c,{size:l.length,crc:M.d(),c:d,f:h,m:v,u:f!=a.length||v&&p.length!=E,o:r,compression:u})),r+=30+f+_+g,s+=76+2*(f+_)+(E||0)+g}for(var y=new vn(s+22),b=r,w=s-r,A=0;A<i.length;++A){var h=i[A];tg(y,h.o,h,h.f,h.u,h.c.length);var x=30+h.f.length+wd(h.extra);y.set(h.c,h.o+x),tg(y,r,h,h.f,h.u,h.c.length,h.o,h.m),r+=16+x+(h.m?h.m.length:0)}return jM(y,r,i.length,w,b),y}const $M=`<mujoco model="cartpole">
  <option timestep="0.01" gravity="0 0 -9.81"/>
  <worldbody>
    <light pos="0 0 3" dir="0 0 -1"/>
    <geom type="plane" size="5 5 0.1" rgba=".7 .7 .7 1"/>
    <body name="cart" pos="0 0 0.1">
      <joint name="slider" type="slide" axis="1 0 0" limited="true" range="-2 2"/>
      <geom type="box" size="0.2 0.15 0.1" rgba=".2 .4 .9 1"/>
      <body name="pole" pos="0 0 0.1">
        <joint name="hinge" type="hinge" axis="0 1 0"/>
        <geom type="capsule" fromto="0 0 0 0 0 0.6" size="0.04" rgba=".9 .3 .3 1"/>
      </body>
    </body>
  </worldbody>
  <actuator>
    <motor joint="slider" gear="50" ctrlrange="-1 1"/>
  </actuator>
</mujoco>
`,qM=`// Tiny cartpole-style env. The app calls makeEnv() to obtain an object
// with reset() / step(action) / policy(obs). Physics is advanced for you
// between step() calls; write actuator commands into data.ctrl.

class CartpoleEnv {
  xml_path = "scene.xml";

  reset(model, data) {
    for (let i = 0; i < data.qpos.length; i++) data.qpos[i] = 0;
    for (let i = 0; i < data.qvel.length; i++) data.qvel[i] = 0;
    data.qpos[1] = 0.1; // small pole tilt
    return this._obs(data);
  }

  step(model, data, action) {
    data.ctrl[0] = Math.max(-1, Math.min(1, action[0]));
    const obs = this._obs(data);
    // reward: upright pole, centered cart
    const poleAngle = data.qpos[1];
    const reward = Math.cos(poleAngle) - 0.01 * data.qpos[0] * data.qpos[0];
    const done = Math.abs(poleAngle) > 1.2;
    return [obs, reward, done];
  }

  policy(obs) {
    // naive linear feedback so the demo "does something"
    const [x, theta, xdot, thetadot] = obs;
    return [1.5 * theta + 0.2 * thetadot + 0.1 * x + 0.05 * xdot];
  }

  _obs(data) {
    return [data.qpos[0], data.qpos[1], data.qvel[0], data.qvel[1]];
  }
}

function makeEnv() {
  return new CartpoleEnv();
}
`,YM=`<mujoco>
  <worldbody>
    <light pos="0 0 3" dir="0 0 -1"/>
    <geom type="plane" size="5 5 0.1" rgba=".7 .7 .7 1"/>
  </worldbody>
</mujoco>
`,KM=`class Env {
  xml_path = "scene.xml";

  reset(model, data) {
    if (model.nkey > 0) {
      data.qpos.set(model.key_qpos.subarray(0, model.nq));
    }
    for (let i = 0; i < data.qvel.length; i++) data.qvel[i] = 0;
    return this._obs(data);
  }

  step(model, data, action) {
    for (let i = 0; i < model.nu; i++) data.ctrl[i] = action[i] ?? 0;
    return [this._obs(data), 0.0, false];
  }

  policy(obs) {
    return new Array(this._nu ?? 0).fill(0);
  }

  _obs(data) {
    this._nu = data.ctrl.length;
    return [...data.qpos, ...data.qvel];
  }
}

function makeEnv() {
  return new Env();
}
`;function ZM(t){return`// Auto-generated env wrapper for a menagerie import.
// Starts at the model's home keyframe with a zero-action policy — edit
// policy() for a controller and step()'s reward/done for a task.

class MenagerieEnv {
  xml_path = ${JSON.stringify(t)};

  reset(model, data) {
    this._nu = model.nu;
    if (model.nkey > 0) {
      data.qpos.set(model.key_qpos.subarray(0, model.nq));
      if (model.key_qvel.length >= model.nv) {
        data.qvel.set(model.key_qvel.subarray(0, model.nv));
      }
    } else {
      data.qpos.set(model.qpos0.subarray(0, model.nq));
      for (let i = 0; i < data.qvel.length; i++) data.qvel[i] = 0;
    }
    return this._obs(data);
  }

  step(model, data, action) {
    for (let i = 0; i < model.nu; i++) {
      const a = action[i] ?? 0;
      data.ctrl[i] = Math.max(-1, Math.min(1, a));
    }
    // Replace reward/done with the signal you want to iterate against.
    return [this._obs(data), 0.0, false];
  }

  policy(obs) {
    // Default: zero action (no torque). Edit this method for a
    // heuristic / PD controller.
    return new Array(this._nu ?? 0).fill(0);
  }

  _obs(data) {
    return [...data.qpos, ...data.qvel];
  }
}

function makeEnv() {
  return new MenagerieEnv();
}
`}function JM(t){return t==="empty"?[{path:"scene.xml",data:YM},{path:"env.js",data:KM}]:[{path:"scene.xml",data:$M},{path:"env.js",data:qM}]}const QM="tau-sim",eE=1;let ku=null;function tE(){return ku||(ku=new Promise((t,e)=>{const n=indexedDB.open(QM,eE);n.onupgradeneeded=()=>{const i=n.result;i.objectStoreNames.contains("projects")||i.createObjectStore("projects",{keyPath:"id"}),i.objectStoreNames.contains("files")||i.createObjectStore("files",{keyPath:"key"}).createIndex("pid","pid",{unique:!1})},n.onsuccess=()=>t(n.result),n.onerror=()=>e(n.error)})),ku}function $i(t,e,n){return tE().then(i=>new Promise((r,s)=>{const a=i.transaction(t,e);a.onerror=()=>s(a.error);const o=n(a);o instanceof IDBRequest?(o.onsuccess=()=>r(o.result),o.onerror=()=>s(o.error)):o.then(r,s)}))}function _p(t,e){return`${t}\0${e}`}function X_(t){const e=t.replace(/\\/g,"/").split("/").filter(Boolean);if(e.some(n=>n===".."))throw new Error("path escapes project root");return e.join("/")}function nE(){return Math.random().toString(16).slice(2,10)}async function iE(){const t=await $i("projects","readonly",n=>n.objectStore("projects").getAll());t.sort((n,i)=>(n.created??0)-(i.created??0));const e=[];for(const n of t)e.push(await aa(n.id));return e}async function rE(t,e="cartpole"){const n=nE();await $i("projects","readwrite",i=>i.objectStore("projects").add({id:n,name:t,created:Date.now()}));for(const i of JM(e))await no(n,i.path,i.data);return aa(n)}async function aa(t){const e=await $i("projects","readonly",n=>n.objectStore("projects").get(t));if(!e)throw new Error(`project not found: ${t}`);return{id:e.id,name:e.name,files:await xp(t)}}async function sE(t){const e=await xp(t);await $i("files","readwrite",async n=>{const i=n.objectStore("files");for(const r of e)i.delete(_p(t,r))}),await $i("projects","readwrite",n=>n.objectStore("projects").delete(t))}async function xp(t){return(await $i("files","readonly",n=>n.objectStore("files").index("pid").getAll(IDBKeyRange.only(t)))).map(n=>n.path).filter(n=>!n.split("/").some(i=>i.startsWith("."))).sort()}async function $_(t,e){const n=await aE(t,e);return typeof n=="string"?n:new TextDecoder().decode(n)}async function aE(t,e){const n=await $i("files","readonly",i=>i.objectStore("files").get(_p(t,X_(e))));if(!n)throw new Error(`file not found: ${e}`);return n.data}async function yp(t){return(await $i("files","readonly",n=>n.objectStore("files").index("pid").getAll(IDBKeyRange.only(t)))).map(n=>({path:n.path,data:n.data}))}async function no(t,e,n){const i=X_(e);await $i("files","readwrite",r=>r.objectStore("files").put({key:_p(t,i),pid:t,path:i,data:n})),oE(t)}const Td=new Map;function oE(t){Td.set(t,(Td.get(t)??0)+1)}function q_(t){return Td.get(t)??0}async function lE(t){const e=await aa(t),n=await yp(t),i={};for(const c of n)i[c.path]=typeof c.data=="string"?Ed(c.data):c.data;const r=XM(i,{level:6}),s=e.name.replace(/[^A-Za-z0-9-_]+/g,"_").replace(/^_+|_+$/g,"")||e.id,a=new Blob([r.buffer],{type:"application/zip"}),o=URL.createObjectURL(a),l=document.createElement("a");l.href=o,l.download=`${s}.zip`,document.body.appendChild(l),l.click(),document.body.removeChild(l),setTimeout(()=>URL.revokeObjectURL(o),5e3)}const Y_="google-deepmind/mujoco_menagerie",K_="main",cE=`https://api.github.com/repos/${Y_}/git/trees/${K_}?recursive=1`,uE=`https://cdn.jsdelivr.net/gh/${Y_}@${K_}`,ng="tau_menagerie_tree_v1",fE=24*60*60*1e3;async function Z_(){try{const i=localStorage.getItem(ng);if(i){const r=JSON.parse(i);if(Date.now()-r.at<fE)return r.tree}}catch{}const t=await fetch(cE,{headers:{accept:"application/vnd.github+json"}});if(!t.ok)throw t.status===403?new Error("GitHub API rate-limited (60 requests/hour). Please try again later."):new Error(`menagerie listing failed: ${t.status}`);const n=((await t.json()).tree??[]).map(i=>({path:i.path,type:i.type}));try{localStorage.setItem(ng,JSON.stringify({at:Date.now(),tree:n}))}catch{}return n}async function dE(){return(await Z_()).filter(e=>e.type==="tree"&&!e.path.includes("/")&&!e.path.startsWith(".")).map(e=>e.path).sort()}const hE=new Set(["xml","md","txt","yaml","yml","json","csv","urdf"]);function pE(t){const e=t.split(".").pop()?.toLowerCase()??"";return hE.has(e)}function mE(t){if(t.includes("scene.xml"))return"scene.xml";const e=t.filter(i=>i.endsWith(".xml")&&!i.includes("/"));if(e.length)return e.sort()[0];const n=t.filter(i=>i.endsWith(".xml"));return n.length?n.sort()[0]:"scene.xml"}async function gE(t,e=3){let n;for(let i=0;i<e;i++){try{const r=await fetch(t);if(r.ok)return r;n=new Error(`${r.status} for ${t}`)}catch(r){n=r}await new Promise(r=>setTimeout(r,500*(i+1)))}throw n}async function vE(t,e,n){if(!t||t.includes("/")||t.startsWith("."))throw new Error("invalid model name");const i=await Z_(),r=`${t}/`,s=new Set(["LICENSE","LICENSE.md","LICENSE.txt","CHANGELOG.md"]),a=i.filter(h=>h.type==="blob"&&h.path.startsWith(r)).map(h=>h.path.slice(r.length)).filter(h=>h&&!s.has(h.split("/").pop()??""));if(!a.length)throw new Error(`model not found in menagerie: ${t}`);const o=8,l=[...a],c=Array.from({length:o},async()=>{for(;;){const h=l.shift();if(h===void 0)return;const f=await gE(`${uE}/${r}${h}`);pE(h)?await no(e,h,await f.text()):await no(e,h,new Uint8Array(await f.arrayBuffer()))}});await Promise.all(c);const u=mE(a);return await no(e,"env.js",ZM(u)),await aa(e),{model:t,entry_xml:u,file_count:a.length}}class eu extends Error{retryAfter;constructor(e,n){super(n??"rate limited"),this.name="RateLimitError",this.retryAfter=e}}const bd="https://tau-sim-gateway.mumukshtayal29.workers.dev/openai/v1",_E="tau-onboarding-public",xE="llama-3.3-70b-versatile",ig={groq:"llama-3.3-70b-versatile",openai:"gpt-4o-mini",gemini:"gemini-3.5-flash",openrouter:"deepseek/deepseek-v4-flash"},rg={groq:"https://api.groq.com/openai/v1",openai:"https://api.openai.com/v1",openrouter:"https://openrouter.ai/api/v1"};function yE(t){const e=t.match(/in\s+(\d+)m([\d.]+)s/);if(e)return parseInt(e[1])*60+parseFloat(e[2]);const n=t.match(/in\s+([\d.]+)s/);if(n)return parseFloat(n[1]);const i=t.match(/retry.{0,10}?([\d.]+)/i);return i?parseFloat(i[1]):60}function J_(t,e){const n=e.toLowerCase();if(t===429||n.includes("rate_limit")||n.includes("rate limit")||n.includes("resource_exhausted")||n.includes("tokens per minute")&&n.includes("limit")){const i=Math.min(Math.max(yE(e),1),90)+1;throw new eu(i,"Provider rate limit reached (free-tier tokens per minute). Waiting for the limit to reset.")}}function Q_(t,e){try{const n=JSON.parse(t),i=n?.error?.message??n?.message??n?.detail;if(typeof i=="string"&&i)return i}catch{}return`${e}: ${t.slice(0,300)}`}function SE(t,e,n){const i=[{role:"system",content:t}];let r=-1;return e.forEach((s,a)=>{s.role==="user"&&(r=a)}),e.forEach((s,a)=>{a===r&&n?.length?i.push({role:"user",content:[{type:"text",text:s.content},...n.map(o=>({type:"image_url",image_url:{url:`data:${o.media_type};base64,${o.data}`}}))]}):i.push({role:s.role,content:s.content})}),i}async function sg(t,e,n,i){const r=async(o,l)=>{const c={model:t.model,messages:SE(e,n,i),temperature:.2};o>0&&(c.max_tokens=o),l&&(c.response_format={type:"json_object"});const u=await fetch(`${t.baseUrl}/chat/completions`,{method:"POST",headers:{"content-type":"application/json",...t.apiKey?{authorization:`Bearer ${t.apiKey}`}:{},...t.headers??{}},body:JSON.stringify(c)}),h=await u.text();if(!u.ok){J_(u.status,h);const p=new Error(Q_(h,u.status));throw p.status=u.status,p}return JSON.parse(h).choices?.[0]?.message?.content??""},s=t.maxTokens??8192,a=t.jsonMode??!0;try{return await r(s,a)}catch(o){if(o instanceof eu)throw o;const l=String(o.message??o).toLowerCase();if(a&&(l.includes("json")||l.includes("validate")||l.includes("400")))return r(s,!1);throw o}}async function ME(t,e,n,i,r){const s=i.map(u=>({role:u.role==="assistant"?"model":"user",parts:[{text:u.content}]}));if(r?.length&&s.length){const u=s[s.length-1];u.parts=[...u.parts,...r.map(h=>({inline_data:{mime_type:h.media_type,data:h.data}}))]}const a=await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(e)}:generateContent?key=${encodeURIComponent(t)}`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({system_instruction:{parts:[{text:n}]},contents:s,generationConfig:{responseMimeType:"application/json",temperature:.2}})}),o=await a.text();if(!a.ok)throw J_(a.status,o),new Error(Q_(o,a.status));return(JSON.parse(o).candidates?.[0]?.content?.parts??[]).map(u=>u.text??"").join("")}async function ex(t,e,n){const i=(t.provider||"groq").toLowerCase();if(i==="gemini"){if(!t.apiKey)throw new Error("Add a Gemini API key in Settings first.");const r=[t.model||ig.gemini,"gemini-2.5-flash","gemini-2.0-flash"];let s;for(const a of r)try{return await ME(t.apiKey,a,e,n,t.images)}catch(o){if(s=o,o instanceof eu)continue;throw o}throw s}if(i in rg){if(!t.apiKey){if(i==="groq"&&t.allowGateway&&bd)return sg({baseUrl:bd,apiKey:"gateway",model:xE,headers:{"x-app-token":_E},maxTokens:1024},e,n,t.images);throw new Error(`Add a ${i} API key first (click the key button in the chat header).`)}return sg({baseUrl:rg[i],apiKey:t.apiKey,model:t.model||ig[i],headers:i==="openrouter"?{"X-Title":"tau-sim"}:void 0},e,n,t.images)}throw new Error(`unknown provider: ${i}`)}const ag=`You are an expert coding assistant embedded in a browser
IDE for building MuJoCo robotic-simulation environments. You collaborate
with the user on ONE project at a time. The project contains MJCF XML
scenes and a JavaScript entry module (env.js) that defines \`makeEnv()\`.

# Response format

Respond with a single JSON object of EXACTLY this shape and nothing else
(no prose, no markdown fences):

{
  "reply": "<short natural-language explanation for the user>",
  "proposals": [
    {
      "path": "<project-relative file path>",
      "new_content": "<the COMPLETE new contents of that file>",
      "rationale": "<one-sentence why>",
      "patch": null
    }
  ]
}

Rules for \`proposals\`:
- Choose ONE of \`new_content\` or \`patch\`, never both on the same proposal.
- \`new_content\` is the FULL file (never a diff/patch). Use this for small
  files (<2 KB) or when creating a new file.
- \`patch\` is a find-and-replace object: {"find": "<exact lines from the
  CURRENT file>", "replace": "<replacement lines>"}. Prefer this when
  changing a few lines in a file that is >2 KB — it saves tokens.
  - \`find\` MUST match the current file EXACTLY (whitespace-sensitive).
  - \`replace\` is the new text to substitute in place of \`find\`.
  - Use only one \`patch\` per file per proposal.
- Include only files you actually want to change. May be empty.
- Paths are relative to the project root. Use forward slashes.
- Creating a new file inside the current project is allowed when the
  user's request implies it. When creating a new file, always use
  \`new_content\` (not \`patch\`).
- NEVER include text outside the JSON object.

# Act, do not narrate (critical)

When the user asks you to change, add, fix, or make the robot do
something, you MUST implement it by returning the COMPLETE updated
file(s) in \`proposals\`. Describing what "needs to be done" or saying you
"will adjust" something WITHOUT emitting the file is a failure - it does
nothing. Never reply with only an explanation when a change was
requested. \`proposals\` may be empty ONLY when:
  * you are answering a genuine clarifying question, OR
  * the change has already been applied and verified to meet the goal.

You will often be shown rendered frames or measured telemetry of the
simulation after your change. Judge the actual motion honestly. If it
does not yet achieve the goal, return corrected file(s) again - keep
iterating until it works. For robot behaviour, the real work is almost
always in env.js's \`policy(obs)\` method (compute control from
observations); editing only scene.xml colours/geometry will not change
how the robot moves.

# Project scope (very important)

Each project represents ONE simulated system (one robot, one task).
When the user asks for something that does not fit the current project:

- If the request is a *modification* of the existing system (change
  geometry, tune a reward, add a sensor, fix a bug) -> emit proposals.
- If the request is a *different system* (e.g. project is a cartpole and
  the user asks for a quadruped, a manipulator, a drone, etc.) -> do
  NOT replace the existing files. Instead return an empty \`proposals\`
  array and use \`reply\` to tell the user to click the "+ New" button in
  the top bar to create a new project for that system.
- Never silently replace the entry env, the scene XML, or any file with
  code for an unrelated robot or task.

When in doubt, prefer to ASK in \`reply\` rather than guess.

# Importing real robot models

You CANNOT fetch URLs or external files yourself. If the user asks to
import a model from mujoco_menagerie, tell them in \`reply\` to click
**+ New** in the top bar and describe the robot they want - the app
downloads the XML + meshes automatically and writes a stub env.js. You
can then help them edit the env's reward / policy in that new project.

# Env API contract (the runner calls these exact methods)

env.js is plain JavaScript (NOT Python, NOT a module - no import/export
statements). It must define a top-level function \`makeEnv()\` returning
an object with:

    class MyEnv {
      xml_path = "scene.xml";   // any project-relative .xml file

      reset(model, data) {
        // data.qpos / data.qvel are Float64Array views - write in place
        data.qpos[0] = 0;
        return this._obs(data);          // number[] of observations
      }

      step(model, data, action) {
        for (let i = 0; i < model.nu; i++) data.ctrl[i] = action[i];
        const obs = this._obs(data);
        const reward = 0.0;              // your reward
        const done = false;              // your termination
        return [obs, reward, done];
      }

      policy(obs) {                      // called every control step
        return [0];                      // length must match model.nu
      }
    }
    function makeEnv() { return new MyEnv(); }

Useful fields: model.nq/nv/nu (sizes), model.nkey + model.key_qpos
(home keyframe), data.qpos/qvel/ctrl (Float64Array), data.time,
data.xpos (body world positions, 3 per body). Standard JS only -
Math.sin etc. No numpy: use plain arrays and loops.

The runner advances physics (mj_step) between step() calls; do NOT call
mj_step yourself. Rendering is handled for you.

# Style

- Keep MJCF valid (closing tags, valid attribute values).
- Keep JavaScript syntactically valid and self-contained.
- Prefer small, focused diffs. Don't reformat unrelated code.
- Don't add comments unless the user asked for them.
`,Sp=[{name:"Unitree Go1",menagerie_id:"unitree_go1",category:"quadruped",rank:1,description:"Popular small quadruped. Great for locomotion, obstacle courses, and navigation tasks.",tags:["walking","running","obstacles","navigation","outdoor"],has_controller:!1},{name:"Unitree A1",menagerie_id:"unitree_a1",category:"quadruped",rank:2,description:"Compact research quadruped, predecessor to Go1.",tags:["walking","research"],has_controller:!1},{name:"Anymal C",menagerie_id:"anybotics_anymal_c",category:"quadruped",rank:3,description:"Heavy-duty quadruped for industrial environments.",tags:["walking","industrial","rough terrain"],has_controller:!1},{name:"Unitree G1",menagerie_id:"unitree_g1",category:"humanoid",rank:1,description:"Compact humanoid robot. Good for bipedal walking and manipulation tasks.",tags:["walking","humanoid","manipulation"],has_controller:!1},{name:"Unitree H1",menagerie_id:"unitree_h1",category:"humanoid",rank:2,description:"Full-size humanoid robot for walking and gait tasks.",tags:["walking","humanoid","gait"],has_controller:!1},{name:"Robotis OP3",menagerie_id:"robotis_op3",category:"humanoid",rank:3,description:"Small humanoid for research and education.",tags:["walking","humanoid","education","small"],has_controller:!1},{name:"Franka Panda",menagerie_id:"franka_emika_panda",category:"manipulator",rank:1,description:"7-DOF collaborative arm. Best for pick-and-place, assembly, and tabletop tasks.",tags:["pick","place","assembly","tabletop","manipulation"],has_controller:!1},{name:"Universal Robots UR5e",menagerie_id:"universal_robots_ur5e",category:"manipulator",rank:2,description:"Industrial 6-DOF arm. Widely used for packaging and manufacturing.",tags:["industrial","packaging","manipulation"],has_controller:!1},{name:"KUKA iiwa",menagerie_id:"kuka_iiwa_14",category:"manipulator",rank:3,description:"7-DOF lightweight arm for sensitive manipulation tasks.",tags:["manipulation","sensitive","research"],has_controller:!1},{name:"Agilex Piper",menagerie_id:"agilexrobotics_piper",category:"manipulator",rank:4,description:"Low-cost desktop arm for educational and hobbyist use.",tags:["manipulation","education","desktop"],has_controller:!1},{name:"Skydio X2",menagerie_id:"skydio_x2",category:"drone",rank:1,description:"Autonomous drone for aerial inspection and surveying.",tags:["flying","aerial","inspection","survey"],has_controller:!1},{name:"Bitcraze Crazyflie",menagerie_id:"bitcraze_crazyflie_2",category:"drone",rank:2,description:"Nano quadrotor for swarm research and indoor flight.",tags:["flying","indoor","swarm","research"],has_controller:!1},{name:"Google Robot",menagerie_id:"google_robot",category:"mobile_manipulator",rank:1,description:"Mobile base with arm for household and service tasks.",tags:["mobile","manipulation","household","service"],has_controller:!1},{name:"Agilex Ranger Mini",menagerie_id:"agilexrobotics_ranger_mini_v2",category:"mobile_base",rank:1,description:"Compact outdoor mobile base for navigation tasks.",tags:["mobile","navigation","outdoor"],has_controller:!1}],EE=2800,og=3*1024,wE=14*1024;function TE(t){try{const e=new DOMParser().parseFromString(t,"text/xml"),n=(r,s="name")=>Array.from(e.getElementsByTagName(r)).map(a=>a.getAttribute(s)??a.getAttribute("joint")??"?"),i={model:e.documentElement?.getAttribute("model")??"",bodies:n("body").slice(0,60),joints:Array.from(e.getElementsByTagName("joint")).map(r=>({name:r.getAttribute("name")??"?",type:r.getAttribute("type")??"hinge",range:r.getAttribute("range")??void 0})).slice(0,60),geom_count:e.getElementsByTagName("geom").length,actuators:[...n("motor"),...n("position"),...n("velocity"),...n("general")].slice(0,60),sensors:Array.from(e.querySelectorAll("sensor > *")).map(r=>`${r.tagName}:${r.getAttribute("name")??"?"}`).slice(0,40),keyframes:n("key"),includes:Array.from(e.getElementsByTagName("include")).map(r=>r.getAttribute("file")??"?")};return JSON.stringify(i)}catch{return t.slice(0,800)}}const bE=new Set(["assets","meshes","textures","policies"]),AE=new Set([".obj",".stl",".msh",".skn",".bin",".png",".jpg",".jpeg",".gif",".tga",".dds",".mp4",".pkl",".npy",".npz",".zip"]),CE=new Set(["LICENSE","LICENSE.md","LICENSE.txt","CHANGELOG.md"]),lg=new Set(["env.js","scene.xml"]);function RE(t){return t.includes("env.js")?"env.js":t.filter(n=>n.endsWith("_env.js")).sort()[0]??null}async function PE(t,e){const n=await yp(t),i=[];for(const u of n){if(typeof u.data!="string")continue;const h=u.path.split("/").pop()??u.path;if(h.startsWith(".")||CE.has(h)||u.path.split("/").some(v=>bE.has(v)))continue;const f=h.lastIndexOf("."),p=f>=0?h.slice(f).toLowerCase():"";AE.has(p)||u.data.length>64*1024||i.push({path:u.path,content:u.data})}const r=u=>{const h=u.split("/").pop()??u;return[lg.has(h)?0:1,h.endsWith(".js")?0:1,u.split("/").length,u]};i.sort((u,h)=>{const f=r(u.path),p=r(h.path);for(let v=0;v<4;v++){if(f[v]<p[v])return-1;if(f[v]>p[v])return 1}return 0});const s=RE(i.map(u=>u.path)),o=[[`### Project: ${JSON.stringify(e)} (id: ${t})`,`Entry env module: ${s??"(none yet)"}`,"The runner loads this entry module, calls `makeEnv()`, then drives","`env.reset` / `env.step` / `env.policy` per the contract.","All file edits must stay within the scope of this single project.","",`### Current project files (${i.length} files):`,""].join(`
`)],l=[];let c=0;for(const u of i){const h=u.path.split("/").pop()??u.path;if(u.path.endsWith(".xml")&&u.content.length>EE){const p=TE(u.content);l.push(`--- ${u.path} (STRUCTURAL SUMMARY, ${u.content.length} raw chars) ---
${p}`);continue}let f=u.content;!lg.has(h)&&f.length>og&&(f=f.slice(0,og)+`
<!-- ...truncated (${u.content.length} chars); this is robot hardware, edit scene.xml/env.js instead -->
`),!(c+f.length>wE)&&(o.push(`--- ${u.path} ---
${f}
`),c+=f.length)}return l.length&&(o.push(`
# MuJoCo XML structural summaries
# Compact JSON summaries of large scene XML files. When proposing
# edits to an XML file you must still return the COMPLETE updated
# file content — the summary just helps you understand structure.
`),o.push(...l)),o.join(`
`)}function NE(t){const e=[];let n=!1,i=!1;for(const r of t){if(i){e.push(r),i=!1;continue}if(r==="\\"){e.push(r),i=!0;continue}if(r==='"'){n=!n,e.push(r);continue}if(n){if(r===`
`){e.push("\\n");continue}if(r==="	"){e.push("\\t");continue}if(r==="\r"){e.push("\\r");continue}}e.push(r)}return e.join("")}function LE(t){const e=[],n=/"path"\s*:\s*"([^"]+)"[^}]*?"new_content"\s*:\s*"((?:[^"\\]|\\.)*)"[^}]*?"rationale"\s*:\s*"((?:[^"\\]|\\.)*)"/gs;let i;for(;i=n.exec(t);)try{e.push({path:i[1],new_content:JSON.parse(`"${i[2]}"`),rationale:i[3]})}catch{}return e}function tx(t){let e=t.trim();e.startsWith("```")&&(e=e.replace(/^`+/,"").replace(/`+$/,""),e.toLowerCase().startsWith("json")&&(e=e.slice(4)),e=e.trim());try{return JSON.parse(e)}catch{}const n=e.indexOf("{"),i=e.lastIndexOf("}");if(n>=0&&n<i){const o=e.slice(n,i+1);try{return JSON.parse(o)}catch{}try{return JSON.parse(NE(o))}catch{}}const r=e.match(/"reply"\s*:\s*"((?:[^"\\]|\\.)*)"/s);let s="";if(r)try{s=JSON.parse(`"${r[1]}"`)}catch{s=r[1]}const a=LE(e);return s||a.length?{reply:a.length||!s?s||"(could not parse reply)":`${s}

_(note: response wasn't valid JSON, proposals dropped)_`,proposals:a}:{reply:e,proposals:[]}}function DE(...t){return t.reduce((e,n)=>e+Math.floor(n.length/4),0)}async function IE(t){const e=await PE(t.project_id,t.project_name),n=[{role:"user",content:e},...t.messages],i=DE(ag,e,t.messages.map(a=>a.content).join(""));let r={reply:"",proposals:[]};const s=2;for(let a=0;a<s;a++){const o=await ex({provider:t.provider,apiKey:t.api_key,model:t.model,images:t.images??null},ag,n);r=tx(o);const l=[];for(const u of r.proposals??[])u&&typeof u.path=="string"&&(typeof u.new_content=="string"||u.patch)&&l.push({path:u.path,new_content:typeof u.new_content=="string"?u.new_content:"",rationale:typeof u.rationale=="string"?u.rationale:"",patch:u.patch&&typeof u.patch.find=="string"&&typeof u.patch.replace=="string"?{find:u.patch.find,replace:u.patch.replace}:null});const c=String(r.reply??"").trim()||"(no reply)";if(l.length||a===s-1)return{reply:c,proposals:l,tokens_sent:i};if(!c.includes("proposals dropped"))return{reply:c,proposals:l,tokens_sent:i};n.push({role:"user",content:"Your previous response wasn't valid JSON. Please respond with ONLY a valid JSON object as specified in the system prompt. No markdown fences, no prose outside the JSON."})}return{reply:String(r.reply??"").trim()||"(no reply)",proposals:[],tokens_sent:i}}function UE(){return JSON.stringify(Sp.map(t=>({name:t.name,id:t.menagerie_id,cat:t.category,rank:t.rank,desc:t.description.slice(0,100),ctrl:t.has_controller})))}async function FE(t,e,n,i){const r=e.length?e.join(", "):"(none)",s=`You are a friendly robotics assistant helping users pick a robot for their MuJoCo simulation project.

## Available robots:
${UE()}

## Existing project names (avoid duplicates):
${r}

## Your job:
Have a natural conversation to help the user pick the right robot. You can:
- Suggest a robot based on their description
- Answer questions about robots (differences, capabilities, etc.)
- Accept the user's confirmation and provide a unique project name

## Response format (JSON only, no markdown):
{
  "reply": "<your conversational response to the user>",
  "action": "<one of: suggest, question, confirmed>",
  "robot": {"name": "<exact name from catalog>", "category": "<cat>", "menagerie_id": "<id or null>", "has_controller": <bool>} or null,
  "project_name": "<unique kebab-case project name>" or null
}

## Rules for "action":
- "suggest": You're recommending a robot. Set "robot" to your recommendation.
- "question": The user asked a question or said something ambiguous. Set "robot" to the currently discussed robot (or null). Answer helpfully in "reply".
- "confirmed": The user clearly agreed to use a specific robot. Set "robot" and "project_name". The project_name MUST NOT match any name in the existing projects list.

## Important:
- Don't assume "yes" unless the user clearly agrees. Questions like "what's the difference?" or "tell me more" are NOT confirmations.
- If the user says something ambiguous, treat it as "question" and ask for clarification.
- Always include "Would you like to go with this robot?" or similar when suggesting.
- Keep replies concise (2-4 sentences max).
- project_name should be descriptive and unique, e.g. "go1-warehouse-nav" not just "go1-environment".`,a=await ex({provider:n||"groq",apiKey:i,allowGateway:!0},s,t.map(l=>({role:l.role==="assistant"?"assistant":"user",content:l.content}))),o=tx(a);if(o.robot?.name){const l=Sp.find(c=>c.name===o.robot.name);l&&(o.robot.menagerie_id=l.menagerie_id,o.robot.has_controller=l.has_controller,o.robot.category=l.category)}return o.action||(o.action="question"),o.reply||(o.reply="Could you tell me a bit more about what you want to build?"),o}const OE="modulepreload",kE=function(t,e){return new URL(t,e).href},cg={},BE=function(e,n,i){let r=Promise.resolve();if(n&&n.length>0){const a=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),l=o?.nonce||o?.getAttribute("nonce");r=Promise.allSettled(n.map(c=>{if(c=kE(c,i),c in cg)return;cg[c]=!0;const u=c.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(!!i)for(let v=a.length-1;v>=0;v--){const E=a[v];if(E.href===c&&(!u||E.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${h}`))return;const p=document.createElement("link");if(p.rel=u?"stylesheet":OE,u||(p.as="script"),p.crossOrigin="",p.href=c,l&&p.setAttribute("nonce",l),document.head.appendChild(p),u)return new Promise((v,E)=>{p.addEventListener("load",v),p.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return r.then(a=>{for(const o of a||[])o.status==="rejected"&&s(o.reason);return e().catch(s)})};let Bu=null;function zE(){return Bu||(Bu=(async()=>{const t=new URL("vendor/mujoco/",document.baseURI).href,n=(await BE(()=>import(`${t}mujoco.js`),[],import.meta.url)).default;return n({locateFile:i=>i.endsWith(".wasm")?`${t}mujoco.wasm`:`${t}${i}`})})()),Bu}var Li=(t=>(t[t.PLANE=0]="PLANE",t[t.HFIELD=1]="HFIELD",t[t.SPHERE=2]="SPHERE",t[t.CAPSULE=3]="CAPSULE",t[t.ELLIPSOID=4]="ELLIPSOID",t[t.CYLINDER=5]="CYLINDER",t[t.BOX=6]="BOX",t[t.MESH=7]="MESH",t))(Li||{});/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Mp="185",Ys={ROTATE:0,DOLLY:1,PAN:2},zs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},VE=0,ug=1,HE=2,ql=1,nx=2,Ga=3,Cr=0,Cn=1,Ui=2,zi=0,Ks=1,fg=2,dg=3,hg=4,GE=5,Gr=100,WE=101,jE=102,XE=103,$E=104,qE=200,YE=201,KE=202,ZE=203,Ad=204,Cd=205,JE=206,QE=207,ew=208,tw=209,nw=210,iw=211,rw=212,sw=213,aw=214,Rd=0,Pd=1,Nd=2,oa=3,Ld=4,Dd=5,Id=6,Ud=7,ix=0,ow=1,lw=2,Si=0,rx=1,sx=2,ax=3,ox=4,lx=5,cx=6,ux=7,fx=300,ss=301,la=302,zu=303,Vu=304,tu=306,Cc=1e3,ki=1001,Fd=1002,Qt=1003,cw=1004,ll=1005,un=1006,Hu=1007,qr=1008,Un=1009,dx=1010,hx=1011,Mo=1012,Ep=1013,Ei=1014,vi=1015,qi=1016,wp=1017,Tp=1018,Eo=1020,px=35902,mx=35899,gx=1021,vx=1022,ai=1023,Yi=1026,Yr=1027,_x=1028,bp=1029,as=1030,Ap=1031,Cp=1033,Yl=33776,Kl=33777,Zl=33778,Jl=33779,Od=35840,kd=35841,Bd=35842,zd=35843,Vd=36196,Hd=37492,Gd=37496,Wd=37488,jd=37489,Rc=37490,Xd=37491,$d=37808,qd=37809,Yd=37810,Kd=37811,Zd=37812,Jd=37813,Qd=37814,eh=37815,th=37816,nh=37817,ih=37818,rh=37819,sh=37820,ah=37821,oh=36492,lh=36494,ch=36495,uh=36283,fh=36284,Pc=36285,dh=36286,uw=3200,hh=0,fw=1,hr="",Wn="srgb",Nc="srgb-linear",Lc="linear",ct="srgb",ps=7680,pg=519,dw=512,hw=513,pw=514,Rp=515,mw=516,gw=517,Pp=518,vw=519,mg=35044,gg="300 es",_i=2e3,wo=2001;function _w(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Dc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function xw(){const t=Dc("canvas");return t.style.display="block",t}const vg={};function _g(...t){const e="THREE."+t.shift();console.log(e,...t)}function xx(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Be(...t){t=xx(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function nt(...t){t=xx(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Zs(...t){const e=t.join(" ");e in vg||(vg[e]=!0,Be(...t))}function yw(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const Sw={[Rd]:Pd,[Nd]:Id,[Ld]:Ud,[oa]:Dd,[Pd]:Rd,[Id]:Nd,[Ud]:Ld,[Dd]:oa};class Ir{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const on=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ql=Math.PI/180,ph=180/Math.PI;function Lo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(on[t&255]+on[t>>8&255]+on[t>>16&255]+on[t>>24&255]+"-"+on[e&255]+on[e>>8&255]+"-"+on[e>>16&15|64]+on[e>>24&255]+"-"+on[n&63|128]+on[n>>8&255]+"-"+on[n>>16&255]+on[n>>24&255]+on[i&255]+on[i>>8&255]+on[i>>16&255]+on[i>>24&255]).toLowerCase()}function $e(t,e,n){return Math.max(e,Math.min(n,t))}function Mw(t,e){return(t%e+e)%e}function Gu(t,e,n){return(1-n)*t+n*e}function Pa(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Sn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Ew={DEG2RAD:Ql};class Ve{static{Ve.prototype.isVector2=!0}constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=$e(this.x,e.x,n.x),this.y=$e(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=$e(this.x,e,n),this.y=$e(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Rr{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3],f=s[a+0],p=s[a+1],v=s[a+2],E=s[a+3];if(h!==E||l!==f||c!==p||u!==v){let _=l*f+c*p+u*v+h*E;_<0&&(f=-f,p=-p,v=-v,E=-E,_=-_);let d=1-o;if(_<.9995){const g=Math.acos(_),M=Math.sin(g);d=Math.sin(d*g)/M,o=Math.sin(o*g)/M,l=l*d+f*o,c=c*d+p*o,u=u*d+v*o,h=h*d+E*o}else{l=l*d+f*o,c=c*d+p*o,u=u*d+v*o,h=h*d+E*o;const g=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=g,c*=g,u*=g,h*=g}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[a],f=s[a+1],p=s[a+2],v=s[a+3];return e[n]=o*v+u*h+l*p-c*f,e[n+1]=l*v+u*f+c*h-o*p,e[n+2]=c*v+u*p+o*f-l*h,e[n+3]=u*v-o*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),h=o(s/2),f=l(i/2),p=l(r/2),v=l(s/2);switch(a){case"XYZ":this._x=f*u*h+c*p*v,this._y=c*p*h-f*u*v,this._z=c*u*v+f*p*h,this._w=c*u*h-f*p*v;break;case"YXZ":this._x=f*u*h+c*p*v,this._y=c*p*h-f*u*v,this._z=c*u*v-f*p*h,this._w=c*u*h+f*p*v;break;case"ZXY":this._x=f*u*h-c*p*v,this._y=c*p*h+f*u*v,this._z=c*u*v+f*p*h,this._w=c*u*h-f*p*v;break;case"ZYX":this._x=f*u*h-c*p*v,this._y=c*p*h+f*u*v,this._z=c*u*v-f*p*h,this._w=c*u*h+f*p*v;break;case"YZX":this._x=f*u*h+c*p*v,this._y=c*p*h+f*u*v,this._z=c*u*v-f*p*h,this._w=c*u*h-f*p*v;break;case"XZY":this._x=f*u*h-c*p*v,this._y=c*p*h-f*u*v,this._z=c*u*v+f*p*h,this._w=c*u*h+f*p*v;break;default:Be("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],u=n[6],h=n[10],f=i+o+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>h){const p=2*Math.sqrt(1+i-o-h);this._w=(u-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-i-h);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-n;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,n=Math.sin(n*c)/u,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{static{W.prototype.isVector3=!0}constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(xg.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(xg.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*n-s*r),h=2*(s*i-a*n);return this.x=n+l*c+a*h-o*u,this.y=i+l*u+o*c-s*h,this.z=r+l*h+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=$e(this.x,e.x,n.x),this.y=$e(this.y,e.y,n.y),this.z=$e(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=$e(this.x,e,n),this.y=$e(this.y,e,n),this.z=$e(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Wu.copy(this).projectOnVector(e),this.sub(Wu)}reflect(e){return this.sub(Wu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wu=new W,xg=new Rr;class Ge{static{Ge.prototype.isMatrix3=!0}constructor(e,n,i,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],p=i[5],v=i[8],E=r[0],_=r[3],d=r[6],g=r[1],M=r[4],y=r[7],b=r[2],w=r[5],A=r[8];return s[0]=a*E+o*g+l*b,s[3]=a*_+o*M+l*w,s[6]=a*d+o*y+l*A,s[1]=c*E+u*g+h*b,s[4]=c*_+u*M+h*w,s[7]=c*d+u*y+h*A,s[2]=f*E+p*g+v*b,s[5]=f*_+p*M+v*w,s[8]=f*d+p*y+v*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return n*a*u-n*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,f=o*l-u*s,p=c*s-a*l,v=n*h+i*f+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/v;return e[0]=h*E,e[1]=(r*c-u*i)*E,e[2]=(o*i-r*a)*E,e[3]=f*E,e[4]=(u*n-r*l)*E,e[5]=(r*s-o*n)*E,e[6]=p*E,e[7]=(i*l-c*n)*E,e[8]=(a*n-i*s)*E,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return Zs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ju.makeScale(e,n)),this}rotate(e){return Zs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ju.makeRotation(-e)),this}translate(e,n){return Zs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ju.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ju=new Ge,yg=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Sg=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ww(){const t={enabled:!0,workingColorSpace:Nc,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ct&&(r.r=Vi(r.r),r.g=Vi(r.g),r.b=Vi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ct&&(r.r=Js(r.r),r.g=Js(r.g),r.b=Js(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===hr?Lc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Zs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Zs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Nc]:{primaries:e,whitePoint:i,transfer:Lc,toXYZ:yg,fromXYZ:Sg,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Wn},outputColorSpaceConfig:{drawingBufferColorSpace:Wn}},[Wn]:{primaries:e,whitePoint:i,transfer:ct,toXYZ:yg,fromXYZ:Sg,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Wn}}}),t}const Ke=ww();function Vi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Js(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let ms;class Tw{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ms===void 0&&(ms=Dc("canvas")),ms.width=e.width,ms.height=e.height;const r=ms.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=ms}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Dc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Vi(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Vi(n[i]/255)*255):n[i]=Vi(n[i]);return{data:n,width:e.width,height:e.height}}else return Be("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let bw=0;class Np{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bw++}),this.uuid=Lo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Xu(r[a].image)):s.push(Xu(r[a]))}else s=Xu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Xu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Tw.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Be("Texture: Unable to serialize Texture."),{})}let Aw=0;const $u=new W;class fn extends Ir{constructor(e=fn.DEFAULT_IMAGE,n=fn.DEFAULT_MAPPING,i=ki,r=ki,s=un,a=qr,o=ai,l=Un,c=fn.DEFAULT_ANISOTROPY,u=hr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Aw++}),this.uuid=Lo(),this.name="",this.source=new Np(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize($u).x}get height(){return this.source.getSize($u).y}get depth(){return this.source.getSize($u).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Be(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Be(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==fx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Cc:e.x=e.x-Math.floor(e.x);break;case ki:e.x=e.x<0?0:1;break;case Fd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Cc:e.y=e.y-Math.floor(e.y);break;case ki:e.y=e.y<0?0:1;break;case Fd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=fx;fn.DEFAULT_ANISOTROPY=1;class Rt{static{Rt.prototype.isVector4=!0}constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],v=l[9],E=l[2],_=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-E)<.01&&Math.abs(v-_)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+E)<.1&&Math.abs(v+_)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const M=(c+1)/2,y=(p+1)/2,b=(d+1)/2,w=(u+f)/4,A=(h+E)/4,x=(v+_)/4;return M>y&&M>b?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=w/i,s=A/i):y>b?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=w/r,s=x/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=A/s,r=x/s),this.set(i,r,s,n),this}let g=Math.sqrt((_-v)*(_-v)+(h-E)*(h-E)+(f-u)*(f-u));return Math.abs(g)<.001&&(g=1),this.x=(_-v)/g,this.y=(h-E)/g,this.z=(f-u)/g,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=$e(this.x,e.x,n.x),this.y=$e(this.y,e.y,n.y),this.z=$e(this.z,e.z,n.z),this.w=$e(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=$e(this.x,e,n),this.y=$e(this.y,e,n),this.z=$e(this.z,e,n),this.w=$e(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Cw extends Ir{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Rt(0,0,e,n),this.scissorTest=!1,this.viewport=new Rt(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new fn(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:un,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Np(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mi extends Cw{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class yx extends fn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Rw extends fn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Nt{static{Nt.prototype.isMatrix4=!0}constructor(e,n,i,r,s,a,o,l,c,u,h,f,p,v,E,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,u,h,f,p,v,E,_)}set(e,n,i,r,s,a,o,l,c,u,h,f,p,v,E,_){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=v,d[11]=E,d[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Nt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/gs.setFromMatrixColumn(e,0).length(),s=1/gs.setFromMatrixColumn(e,1).length(),a=1/gs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=a*u,p=a*h,v=o*u,E=o*h;n[0]=l*u,n[4]=-l*h,n[8]=c,n[1]=p+v*c,n[5]=f-E*c,n[9]=-o*l,n[2]=E-f*c,n[6]=v+p*c,n[10]=a*l}else if(e.order==="YXZ"){const f=l*u,p=l*h,v=c*u,E=c*h;n[0]=f+E*o,n[4]=v*o-p,n[8]=a*c,n[1]=a*h,n[5]=a*u,n[9]=-o,n[2]=p*o-v,n[6]=E+f*o,n[10]=a*l}else if(e.order==="ZXY"){const f=l*u,p=l*h,v=c*u,E=c*h;n[0]=f-E*o,n[4]=-a*h,n[8]=v+p*o,n[1]=p+v*o,n[5]=a*u,n[9]=E-f*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const f=a*u,p=a*h,v=o*u,E=o*h;n[0]=l*u,n[4]=v*c-p,n[8]=f*c+E,n[1]=l*h,n[5]=E*c+f,n[9]=p*c-v,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const f=a*l,p=a*c,v=o*l,E=o*c;n[0]=l*u,n[4]=E-f*h,n[8]=v*h+p,n[1]=h,n[5]=a*u,n[9]=-o*u,n[2]=-c*u,n[6]=p*h+v,n[10]=f-E*h}else if(e.order==="XZY"){const f=a*l,p=a*c,v=o*l,E=o*c;n[0]=l*u,n[4]=-h,n[8]=c*u,n[1]=f*h+E,n[5]=a*u,n[9]=p*h-v,n[2]=v*h-p,n[6]=o*u,n[10]=E*h+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Pw,e,Nw)}lookAt(e,n,i){const r=this.elements;return Pn.subVectors(e,n),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),nr.crossVectors(i,Pn),nr.lengthSq()===0&&(Math.abs(i.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),nr.crossVectors(i,Pn)),nr.normalize(),cl.crossVectors(Pn,nr),r[0]=nr.x,r[4]=cl.x,r[8]=Pn.x,r[1]=nr.y,r[5]=cl.y,r[9]=Pn.y,r[2]=nr.z,r[6]=cl.z,r[10]=Pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],p=i[13],v=i[2],E=i[6],_=i[10],d=i[14],g=i[3],M=i[7],y=i[11],b=i[15],w=r[0],A=r[4],x=r[8],T=r[12],R=r[1],L=r[5],F=r[9],$=r[13],Y=r[2],O=r[6],j=r[10],X=r[14],U=r[3],V=r[7],J=r[11],ee=r[15];return s[0]=a*w+o*R+l*Y+c*U,s[4]=a*A+o*L+l*O+c*V,s[8]=a*x+o*F+l*j+c*J,s[12]=a*T+o*$+l*X+c*ee,s[1]=u*w+h*R+f*Y+p*U,s[5]=u*A+h*L+f*O+p*V,s[9]=u*x+h*F+f*j+p*J,s[13]=u*T+h*$+f*X+p*ee,s[2]=v*w+E*R+_*Y+d*U,s[6]=v*A+E*L+_*O+d*V,s[10]=v*x+E*F+_*j+d*J,s[14]=v*T+E*$+_*X+d*ee,s[3]=g*w+M*R+y*Y+b*U,s[7]=g*A+M*L+y*O+b*V,s[11]=g*x+M*F+y*j+b*J,s[15]=g*T+M*$+y*X+b*ee,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],p=e[14],v=e[3],E=e[7],_=e[11],d=e[15],g=l*p-c*f,M=o*p-c*h,y=o*f-l*h,b=a*p-c*u,w=a*f-l*u,A=a*h-o*u;return n*(E*g-_*M+d*y)-i*(v*g-_*b+d*w)+r*(v*M-E*b+d*A)-s*(v*y-E*w+_*A)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return n*(a*u-o*c)-i*(s*u-o*l)+r*(s*c-a*l)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],p=e[11],v=e[12],E=e[13],_=e[14],d=e[15],g=n*o-i*a,M=n*l-r*a,y=n*c-s*a,b=i*l-r*o,w=i*c-s*o,A=r*c-s*l,x=u*E-h*v,T=u*_-f*v,R=u*d-p*v,L=h*_-f*E,F=h*d-p*E,$=f*d-p*_,Y=g*$-M*F+y*L+b*R-w*T+A*x;if(Y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/Y;return e[0]=(o*$-l*F+c*L)*O,e[1]=(r*F-i*$-s*L)*O,e[2]=(E*A-_*w+d*b)*O,e[3]=(f*w-h*A-p*b)*O,e[4]=(l*R-a*$-c*T)*O,e[5]=(n*$-r*R+s*T)*O,e[6]=(_*y-v*A-d*M)*O,e[7]=(u*A-f*y+p*M)*O,e[8]=(a*F-o*R+c*x)*O,e[9]=(i*R-n*F-s*x)*O,e[10]=(v*w-E*y+d*g)*O,e[11]=(h*y-u*w-p*g)*O,e[12]=(o*T-a*L-l*x)*O,e[13]=(n*L-i*T+r*x)*O,e[14]=(E*M-v*b-_*g)*O,e[15]=(u*b-h*M+f*g)*O,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,u=a+a,h=o+o,f=s*c,p=s*u,v=s*h,E=a*u,_=a*h,d=o*h,g=l*c,M=l*u,y=l*h,b=i.x,w=i.y,A=i.z;return r[0]=(1-(E+d))*b,r[1]=(p+y)*b,r[2]=(v-M)*b,r[3]=0,r[4]=(p-y)*w,r[5]=(1-(f+d))*w,r[6]=(_+g)*w,r[7]=0,r[8]=(v+M)*A,r[9]=(_-g)*A,r[10]=(1-(f+E))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let a=gs.set(r[0],r[1],r[2]).length();const o=gs.set(r[4],r[5],r[6]).length(),l=gs.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Qn.copy(this);const c=1/a,u=1/o,h=1/l;return Qn.elements[0]*=c,Qn.elements[1]*=c,Qn.elements[2]*=c,Qn.elements[4]*=u,Qn.elements[5]*=u,Qn.elements[6]*=u,Qn.elements[8]*=h,Qn.elements[9]*=h,Qn.elements[10]*=h,n.setFromRotationMatrix(Qn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,n,i,r,s,a,o=_i,l=!1){const c=this.elements,u=2*s/(n-e),h=2*s/(i-r),f=(n+e)/(n-e),p=(i+r)/(i-r);let v,E;if(l)v=s/(a-s),E=a*s/(a-s);else if(o===_i)v=-(a+s)/(a-s),E=-2*a*s/(a-s);else if(o===wo)v=-a/(a-s),E=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=E,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=_i,l=!1){const c=this.elements,u=2/(n-e),h=2/(i-r),f=-(n+e)/(n-e),p=-(i+r)/(i-r);let v,E;if(l)v=1/(a-s),E=a/(a-s);else if(o===_i)v=-2/(a-s),E=-(a+s)/(a-s);else if(o===wo)v=-1/(a-s),E=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=v,c[14]=E,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const gs=new W,Qn=new Nt,Pw=new W(0,0,0),Nw=new W(1,1,1),nr=new W,cl=new W,Pn=new W,Mg=new Nt,Eg=new Rr;class Pr{constructor(e=0,n=0,i=0,r=Pr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin($e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin($e(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-$e(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-$e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Be("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Mg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Mg,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Eg.setFromEuler(this),this.setFromQuaternion(Eg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pr.DEFAULT_ORDER="XYZ";class Sx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Lw=0;const wg=new W,vs=new Rr,Ai=new Nt,ul=new W,Na=new W,Dw=new W,Iw=new Rr,Tg=new W(1,0,0),bg=new W(0,1,0),Ag=new W(0,0,1),Cg={type:"added"},Uw={type:"removed"},_s={type:"childadded",child:null},qu={type:"childremoved",child:null};class tn extends Ir{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lw++}),this.uuid=Lo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=tn.DEFAULT_UP.clone();const e=new W,n=new Pr,i=new Rr,r=new W(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Nt},normalMatrix:{value:new Ge}}),this.matrix=new Nt,this.matrixWorld=new Nt,this.matrixAutoUpdate=tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return vs.setFromAxisAngle(e,n),this.quaternion.multiply(vs),this}rotateOnWorldAxis(e,n){return vs.setFromAxisAngle(e,n),this.quaternion.premultiply(vs),this}rotateX(e){return this.rotateOnAxis(Tg,e)}rotateY(e){return this.rotateOnAxis(bg,e)}rotateZ(e){return this.rotateOnAxis(Ag,e)}translateOnAxis(e,n){return wg.copy(e).applyQuaternion(this.quaternion),this.position.add(wg.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Tg,e)}translateY(e){return this.translateOnAxis(bg,e)}translateZ(e){return this.translateOnAxis(Ag,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ai.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ul.copy(e):ul.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Na.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ai.lookAt(Na,ul,this.up):Ai.lookAt(ul,Na,this.up),this.quaternion.setFromRotationMatrix(Ai),r&&(Ai.extractRotation(r.matrixWorld),vs.setFromRotationMatrix(Ai),this.quaternion.premultiply(vs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(nt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Cg),_s.child=e,this.dispatchEvent(_s),_s.child=null):nt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Uw),qu.child=e,this.dispatchEvent(qu),qu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ai),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Cg),_s.child=e,this.dispatchEvent(_s),_s.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Na,e,Dw),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Na,Iw,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),p=a(e.animations),v=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}tn.DEFAULT_UP=new W(0,1,0);tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class fl extends tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Fw={type:"move"};class Yu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const E of e.hand.values()){const _=n.getJointPose(E,i),d=this._getHandJoint(c,E);_!==null&&(d.matrix.fromArray(_.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=_.radius),d.visible=_!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,v=.005;c.inputState.pinching&&f>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Fw)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new fl;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const Mx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ir={h:0,s:0,l:0},dl={h:0,s:0,l:0};function Ku(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Xe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Wn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Ke.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ke.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Ke.workingColorSpace){if(e=Mw(e,1),n=$e(n,0,1),i=$e(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Ku(a,s,e+1/3),this.g=Ku(a,s,e),this.b=Ku(a,s,e-1/3)}return Ke.colorSpaceToWorking(this,r),this}setStyle(e,n=Wn){function i(s){s!==void 0&&parseFloat(s)<1&&Be("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Be("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);Be("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Wn){const i=Mx[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Be("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vi(e.r),this.g=Vi(e.g),this.b=Vi(e.b),this}copyLinearToSRGB(e){return this.r=Js(e.r),this.g=Js(e.g),this.b=Js(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wn){return Ke.workingToColorSpace(ln.copy(this),e),Math.round($e(ln.r*255,0,255))*65536+Math.round($e(ln.g*255,0,255))*256+Math.round($e(ln.b*255,0,255))}getHexString(e=Wn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ke.workingColorSpace){Ke.workingToColorSpace(ln.copy(this),n);const i=ln.r,r=ln.g,s=ln.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=Ke.workingColorSpace){return Ke.workingToColorSpace(ln.copy(this),n),e.r=ln.r,e.g=ln.g,e.b=ln.b,e}getStyle(e=Wn){Ke.workingToColorSpace(ln.copy(this),e);const n=ln.r,i=ln.g,r=ln.b;return e!==Wn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(ir),this.setHSL(ir.h+e,ir.s+n,ir.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ir),e.getHSL(dl);const i=Gu(ir.h,dl.h,n),r=Gu(ir.s,dl.s,n),s=Gu(ir.l,dl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ln=new Xe;Xe.NAMES=Mx;class Lp{constructor(e,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new Xe(e),this.near=n,this.far=i}clone(){return new Lp(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Ex extends tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pr,this.environmentIntensity=1,this.environmentRotation=new Pr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const ei=new W,Ci=new W,Zu=new W,Ri=new W,xs=new W,ys=new W,Rg=new W,Ju=new W,Qu=new W,ef=new W,tf=new Rt,nf=new Rt,rf=new Rt;class si{constructor(e=new W,n=new W,i=new W){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),ei.subVectors(e,n),r.cross(ei);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){ei.subVectors(r,n),Ci.subVectors(i,n),Zu.subVectors(e,n);const a=ei.dot(ei),o=ei.dot(Ci),l=ei.dot(Zu),c=Ci.dot(Ci),u=Ci.dot(Zu),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const f=1/h,p=(c*l-o*u)*f,v=(a*u-o*l)*f;return s.set(1-p-v,v,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ri)===null?!1:Ri.x>=0&&Ri.y>=0&&Ri.x+Ri.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,Ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ri.x),l.addScaledVector(a,Ri.y),l.addScaledVector(o,Ri.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return tf.setScalar(0),nf.setScalar(0),rf.setScalar(0),tf.fromBufferAttribute(e,n),nf.fromBufferAttribute(e,i),rf.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(tf,s.x),a.addScaledVector(nf,s.y),a.addScaledVector(rf,s.z),a}static isFrontFacing(e,n,i,r){return ei.subVectors(i,n),Ci.subVectors(e,n),ei.cross(Ci).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ei.subVectors(this.c,this.b),Ci.subVectors(this.a,this.b),ei.cross(Ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return si.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return si.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return si.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return si.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return si.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;xs.subVectors(r,i),ys.subVectors(s,i),Ju.subVectors(e,i);const l=xs.dot(Ju),c=ys.dot(Ju);if(l<=0&&c<=0)return n.copy(i);Qu.subVectors(e,r);const u=xs.dot(Qu),h=ys.dot(Qu);if(u>=0&&h<=u)return n.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),n.copy(i).addScaledVector(xs,a);ef.subVectors(e,s);const p=xs.dot(ef),v=ys.dot(ef);if(v>=0&&p<=v)return n.copy(s);const E=p*c-l*v;if(E<=0&&c>=0&&v<=0)return o=c/(c-v),n.copy(i).addScaledVector(ys,o);const _=u*v-p*h;if(_<=0&&h-u>=0&&p-v>=0)return Rg.subVectors(s,r),o=(h-u)/(h-u+(p-v)),n.copy(r).addScaledVector(Rg,o);const d=1/(_+E+f);return a=E*d,o=f*d,n.copy(i).addScaledVector(xs,a).addScaledVector(ys,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Do{constructor(e=new W(1/0,1/0,1/0),n=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(ti.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(ti.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=ti.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ti):ti.fromBufferAttribute(s,a),ti.applyMatrix4(e.matrixWorld),this.expandByPoint(ti);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),hl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),hl.copy(i.boundingBox)),hl.applyMatrix4(e.matrixWorld),this.union(hl)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ti),ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(La),pl.subVectors(this.max,La),Ss.subVectors(e.a,La),Ms.subVectors(e.b,La),Es.subVectors(e.c,La),rr.subVectors(Ms,Ss),sr.subVectors(Es,Ms),Or.subVectors(Ss,Es);let n=[0,-rr.z,rr.y,0,-sr.z,sr.y,0,-Or.z,Or.y,rr.z,0,-rr.x,sr.z,0,-sr.x,Or.z,0,-Or.x,-rr.y,rr.x,0,-sr.y,sr.x,0,-Or.y,Or.x,0];return!sf(n,Ss,Ms,Es,pl)||(n=[1,0,0,0,1,0,0,0,1],!sf(n,Ss,Ms,Es,pl))?!1:(ml.crossVectors(rr,sr),n=[ml.x,ml.y,ml.z],sf(n,Ss,Ms,Es,pl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Pi=[new W,new W,new W,new W,new W,new W,new W,new W],ti=new W,hl=new Do,Ss=new W,Ms=new W,Es=new W,rr=new W,sr=new W,Or=new W,La=new W,pl=new W,ml=new W,kr=new W;function sf(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){kr.fromArray(t,s);const o=r.x*Math.abs(kr.x)+r.y*Math.abs(kr.y)+r.z*Math.abs(kr.z),l=e.dot(kr),c=n.dot(kr),u=i.dot(kr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const zt=new W,gl=new Ve;let Ow=0;class Yn extends Ir{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ow++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=mg,this.updateRanges=[],this.gpuType=vi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)gl.fromBufferAttribute(this,n),gl.applyMatrix3(e),this.setXY(n,gl.x,gl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)zt.fromBufferAttribute(this,n),zt.applyMatrix3(e),this.setXYZ(n,zt.x,zt.y,zt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)zt.fromBufferAttribute(this,n),zt.applyMatrix4(e),this.setXYZ(n,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)zt.fromBufferAttribute(this,n),zt.applyNormalMatrix(e),this.setXYZ(n,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)zt.fromBufferAttribute(this,n),zt.transformDirection(e),this.setXYZ(n,zt.x,zt.y,zt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Pa(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Sn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Pa(n,this.array)),n}setX(e,n){return this.normalized&&(n=Sn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Pa(n,this.array)),n}setY(e,n){return this.normalized&&(n=Sn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Pa(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Sn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Pa(n,this.array)),n}setW(e,n){return this.normalized&&(n=Sn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Sn(n,this.array),i=Sn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Sn(n,this.array),i=Sn(i,this.array),r=Sn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Sn(n,this.array),i=Sn(i,this.array),r=Sn(r,this.array),s=Sn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==mg&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class wx extends Yn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Tx extends Yn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Kt extends Yn{constructor(e,n,i){super(new Float32Array(e),n,i)}}const kw=new Do,Da=new W,af=new W;class Dp{constructor(e=new W,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):kw.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Da.subVectors(e,this.center);const n=Da.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Da,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(af.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Da.copy(e.center).add(af)),this.expandByPoint(Da.copy(e.center).sub(af))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Bw=0;const Gn=new Nt,of=new tn,ws=new W,Nn=new Do,Ia=new Do,$t=new W;class Hn extends Ir{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bw++}),this.uuid=Lo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_w(e)?Tx:wx)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ge().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Gn.makeRotationFromQuaternion(e),this.applyMatrix4(Gn),this}rotateX(e){return Gn.makeRotationX(e),this.applyMatrix4(Gn),this}rotateY(e){return Gn.makeRotationY(e),this.applyMatrix4(Gn),this}rotateZ(e){return Gn.makeRotationZ(e),this.applyMatrix4(Gn),this}translate(e,n,i){return Gn.makeTranslation(e,n,i),this.applyMatrix4(Gn),this}scale(e,n,i){return Gn.makeScale(e,n,i),this.applyMatrix4(Gn),this}lookAt(e){return of.lookAt(e),of.updateMatrix(),this.applyMatrix4(of.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ws).negate(),this.translate(ws.x,ws.y,ws.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Kt(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Be("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Do);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Nn.setFromBufferAttribute(s),this.morphTargetsRelative?($t.addVectors(this.boundingBox.min,Nn.min),this.boundingBox.expandByPoint($t),$t.addVectors(this.boundingBox.max,Nn.max),this.boundingBox.expandByPoint($t)):(this.boundingBox.expandByPoint(Nn.min),this.boundingBox.expandByPoint(Nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&nt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dp);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const i=this.boundingSphere.center;if(Nn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];Ia.setFromBufferAttribute(o),this.morphTargetsRelative?($t.addVectors(Nn.min,Ia.min),Nn.expandByPoint($t),$t.addVectors(Nn.max,Ia.max),Nn.expandByPoint($t)):(Nn.expandByPoint(Ia.min),Nn.expandByPoint(Ia.max))}Nn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)$t.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared($t));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)$t.fromBufferAttribute(o,c),l&&(ws.fromBufferAttribute(e,c),$t.add(ws)),r=Math.max(r,i.distanceToSquared($t))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&nt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){nt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Yn(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let x=0;x<i.count;x++)o[x]=new W,l[x]=new W;const c=new W,u=new W,h=new W,f=new Ve,p=new Ve,v=new Ve,E=new W,_=new W;function d(x,T,R){c.fromBufferAttribute(i,x),u.fromBufferAttribute(i,T),h.fromBufferAttribute(i,R),f.fromBufferAttribute(s,x),p.fromBufferAttribute(s,T),v.fromBufferAttribute(s,R),u.sub(c),h.sub(c),p.sub(f),v.sub(f);const L=1/(p.x*v.y-v.x*p.y);isFinite(L)&&(E.copy(u).multiplyScalar(v.y).addScaledVector(h,-p.y).multiplyScalar(L),_.copy(h).multiplyScalar(p.x).addScaledVector(u,-v.x).multiplyScalar(L),o[x].add(E),o[T].add(E),o[R].add(E),l[x].add(_),l[T].add(_),l[R].add(_))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let x=0,T=g.length;x<T;++x){const R=g[x],L=R.start,F=R.count;for(let $=L,Y=L+F;$<Y;$+=3)d(e.getX($+0),e.getX($+1),e.getX($+2))}const M=new W,y=new W,b=new W,w=new W;function A(x){b.fromBufferAttribute(r,x),w.copy(b);const T=o[x];M.copy(T),M.sub(b.multiplyScalar(b.dot(T))).normalize(),y.crossVectors(w,T);const L=y.dot(l[x])<0?-1:1;a.setXYZW(x,M.x,M.y,M.z,L)}for(let x=0,T=g.length;x<T;++x){const R=g[x],L=R.start,F=R.count;for(let $=L,Y=L+F;$<Y;$+=3)A(e.getX($+0)),A(e.getX($+1)),A(e.getX($+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new Yn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new W,s=new W,a=new W,o=new W,l=new W,c=new W,u=new W,h=new W;if(e)for(let f=0,p=e.count;f<p;f+=3){const v=e.getX(f+0),E=e.getX(f+1),_=e.getX(f+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,E),a.fromBufferAttribute(n,_),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,_),o.add(u),l.add(u),c.add(u),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(E,l.x,l.y,l.z),i.setXYZ(_,c.x,c.y,c.z)}else for(let f=0,p=n.count;f<p;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),a.fromBufferAttribute(n,f+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)$t.fromBufferAttribute(e,n),$t.normalize(),e.setXYZ(n,$t.x,$t.y,$t.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let p=0,v=0;for(let E=0,_=l.length;E<_;E++){o.isInterleavedBufferAttribute?p=l[E]*o.data.stride+o.offset:p=l[E]*u;for(let d=0;d<u;d++)f[v++]=c[p++]}return new Yn(f,u,h)}if(this.index===null)return Be("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Hn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=e(f,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let zw=0;class Io extends Ir{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zw++}),this.uuid=Lo(),this.name="",this.type="Material",this.blending=Ks,this.side=Cr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ad,this.blendDst=Cd,this.blendEquation=Gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=oa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ps,this.stencilZFail=ps,this.stencilZPass=ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Be(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Be(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ks&&(i.blending=this.blending),this.side!==Cr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ad&&(i.blendSrc=this.blendSrc),this.blendDst!==Cd&&(i.blendDst=this.blendDst),this.blendEquation!==Gr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==oa&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==pg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ps&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ps&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ps&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Xe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ve().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ve().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ni=new W,lf=new W,vl=new W,ar=new W,cf=new W,_l=new W,uf=new W;class bx{constructor(e=new W,n=new W(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ni)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ni.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ni.copy(this.origin).addScaledVector(this.direction,n),Ni.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){lf.copy(e).add(n).multiplyScalar(.5),vl.copy(n).sub(e).normalize(),ar.copy(this.origin).sub(lf);const s=e.distanceTo(n)*.5,a=-this.direction.dot(vl),o=ar.dot(this.direction),l=-ar.dot(vl),c=ar.lengthSq(),u=Math.abs(1-a*a);let h,f,p,v;if(u>0)if(h=a*l-o,f=a*o-l,v=s*u,h>=0)if(f>=-v)if(f<=v){const E=1/u;h*=E,f*=E,p=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;else f<=-v?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c):f<=v?(h=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(lf).addScaledVector(vl,f),p}intersectSphere(e,n){Ni.subVectors(e.center,this.origin);const i=Ni.dot(this.direction),r=Ni.dot(Ni)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Ni)!==null}intersectTriangle(e,n,i,r,s){cf.subVectors(n,e),_l.subVectors(i,e),uf.crossVectors(cf,_l);let a=this.direction.dot(uf),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ar.subVectors(this.origin,e);const l=o*this.direction.dot(_l.crossVectors(ar,_l));if(l<0)return null;const c=o*this.direction.dot(cf.cross(ar));if(c<0||l+c>a)return null;const u=-o*ar.dot(uf);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ax extends Io{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pr,this.combine=ix,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Pg=new Nt,Br=new bx,xl=new Dp,Ng=new W,yl=new W,Sl=new W,Ml=new W,ff=new W,El=new W,Lg=new W,wl=new W;class wi extends tn{constructor(e=new Hn,n=new Ax){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){El.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(ff.fromBufferAttribute(h,e),a?El.addScaledVector(ff,u):El.addScaledVector(ff.sub(n),u))}n.add(El)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),xl.copy(i.boundingSphere),xl.applyMatrix4(s),Br.copy(e.ray).recast(e.near),!(xl.containsPoint(Br.origin)===!1&&(Br.intersectSphere(xl,Ng)===null||Br.origin.distanceToSquared(Ng)>(e.far-e.near)**2))&&(Pg.copy(s).invert(),Br.copy(e.ray).applyMatrix4(Pg),!(i.boundingBox!==null&&Br.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Br)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,E=f.length;v<E;v++){const _=f[v],d=a[_.materialIndex],g=Math.max(_.start,p.start),M=Math.min(o.count,Math.min(_.start+_.count,p.start+p.count));for(let y=g,b=M;y<b;y+=3){const w=o.getX(y),A=o.getX(y+1),x=o.getX(y+2);r=Tl(this,d,e,i,c,u,h,w,A,x),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=_.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),E=Math.min(o.count,p.start+p.count);for(let _=v,d=E;_<d;_+=3){const g=o.getX(_),M=o.getX(_+1),y=o.getX(_+2);r=Tl(this,a,e,i,c,u,h,g,M,y),r&&(r.faceIndex=Math.floor(_/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,E=f.length;v<E;v++){const _=f[v],d=a[_.materialIndex],g=Math.max(_.start,p.start),M=Math.min(l.count,Math.min(_.start+_.count,p.start+p.count));for(let y=g,b=M;y<b;y+=3){const w=y,A=y+1,x=y+2;r=Tl(this,d,e,i,c,u,h,w,A,x),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=_.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),E=Math.min(l.count,p.start+p.count);for(let _=v,d=E;_<d;_+=3){const g=_,M=_+1,y=_+2;r=Tl(this,a,e,i,c,u,h,g,M,y),r&&(r.faceIndex=Math.floor(_/3),n.push(r))}}}}function Vw(t,e,n,i,r,s,a,o){let l;if(e.side===Cn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Cr,o),l===null)return null;wl.copy(o),wl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(wl);return c<n.near||c>n.far?null:{distance:c,point:wl.clone(),object:t}}function Tl(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,yl),t.getVertexPosition(l,Sl),t.getVertexPosition(c,Ml);const u=Vw(t,e,n,i,yl,Sl,Ml,Lg);if(u){const h=new W;si.getBarycoord(Lg,yl,Sl,Ml,h),r&&(u.uv=si.getInterpolatedAttribute(r,o,l,c,h,new Ve)),s&&(u.uv1=si.getInterpolatedAttribute(s,o,l,c,h,new Ve)),a&&(u.normal=si.getInterpolatedAttribute(a,o,l,c,h,new W),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new W,materialIndex:0};si.getNormal(yl,Sl,Ml,f.normal),u.face=f,u.barycoord=h}return u}class Hw extends fn{constructor(e=null,n=1,i=1,r,s,a,o,l,c=Qt,u=Qt,h,f){super(null,a,o,l,c,u,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const df=new W,Gw=new W,Ww=new Ge;class ur{constructor(e=new W(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=df.subVectors(i,n).cross(Gw.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(df),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:n.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Ww.getNormalMatrix(e),r=this.coplanarPoint(df).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zr=new Dp,jw=new Ve(.5,.5),bl=new W;class Ip{constructor(e=new ur,n=new ur,i=new ur,r=new ur,s=new ur,a=new ur){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=_i,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],h=s[5],f=s[6],p=s[7],v=s[8],E=s[9],_=s[10],d=s[11],g=s[12],M=s[13],y=s[14],b=s[15];if(r[0].setComponents(c-a,p-u,d-v,b-g).normalize(),r[1].setComponents(c+a,p+u,d+v,b+g).normalize(),r[2].setComponents(c+o,p+h,d+E,b+M).normalize(),r[3].setComponents(c-o,p-h,d-E,b-M).normalize(),i)r[4].setComponents(l,f,_,y).normalize(),r[5].setComponents(c-l,p-f,d-_,b-y).normalize();else if(r[4].setComponents(c-l,p-f,d-_,b-y).normalize(),n===_i)r[5].setComponents(c+l,p+f,d+_,b+y).normalize();else if(n===wo)r[5].setComponents(l,f,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),zr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zr)}intersectsSprite(e){zr.center.set(0,0,0);const n=jw.distanceTo(e.center);return zr.radius=.7071067811865476+n,zr.applyMatrix4(e.matrixWorld),this.intersectsSphere(zr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(bl.x=r.normal.x>0?e.max.x:e.min.x,bl.y=r.normal.y>0?e.max.y:e.min.y,bl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(bl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Cx extends fn{constructor(e=[],n=ss,i,r,s,a,o,l,c,u){super(e,n,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Xw extends fn{constructor(e,n,i,r,s,a,o,l,c){super(e,n,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ca extends fn{constructor(e,n,i=Ei,r,s,a,o=Qt,l=Qt,c,u=Yi,h=1){if(u!==Yi&&u!==Yr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:n,depth:h};super(f,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Np(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class $w extends ca{constructor(e,n=Ei,i=ss,r,s,a=Qt,o=Qt,l,c=Yi){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,n,i,r,s,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Rx extends fn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class pa extends Hn{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,p=0;v("z","y","x",-1,-1,i,n,e,a,s,0),v("z","y","x",1,-1,i,n,-e,a,s,1),v("x","z","y",1,1,e,i,n,r,a,2),v("x","z","y",1,-1,e,i,-n,r,a,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Kt(c,3)),this.setAttribute("normal",new Kt(u,3)),this.setAttribute("uv",new Kt(h,2));function v(E,_,d,g,M,y,b,w,A,x,T){const R=y/A,L=b/x,F=y/2,$=b/2,Y=w/2,O=A+1,j=x+1;let X=0,U=0;const V=new W;for(let J=0;J<j;J++){const ee=J*L-$;for(let le=0;le<O;le++){const Ie=le*R-F;V[E]=Ie*g,V[_]=ee*M,V[d]=Y,c.push(V.x,V.y,V.z),V[E]=0,V[_]=0,V[d]=w>0?1:-1,u.push(V.x,V.y,V.z),h.push(le/A),h.push(1-J/x),X+=1}}for(let J=0;J<x;J++)for(let ee=0;ee<A;ee++){const le=f+ee+O*J,Ie=f+ee+O*(J+1),we=f+(ee+1)+O*(J+1),Te=f+(ee+1)+O*J;l.push(le,Ie,Te),l.push(Ie,we,Te),U+=6}o.addGroup(p,U,T),p+=U,f+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Up extends Hn{constructor(e=1,n=1,i=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:n,capSegments:i,radialSegments:r,heightSegments:s},n=Math.max(0,n),i=Math.max(1,Math.floor(i)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));const a=[],o=[],l=[],c=[],u=n/2,h=Math.PI/2*e,f=n,p=2*h+f,v=i*2+s,E=r+1,_=new W,d=new W;for(let g=0;g<=v;g++){let M=0,y=0,b=0,w=0;if(g<=i){const T=g/i,R=T*Math.PI/2;y=-u-e*Math.cos(R),b=e*Math.sin(R),w=-e*Math.cos(R),M=T*h}else if(g<=i+s){const T=(g-i)/s;y=-u+T*n,b=e,w=0,M=h+T*f}else{const T=(g-i-s)/i,R=T*Math.PI/2;y=u+e*Math.sin(R),b=e*Math.cos(R),w=e*Math.sin(R),M=h+f+T*h}const A=Math.max(0,Math.min(1,M/p));let x=0;g===0?x=.5/r:g===v&&(x=-.5/r);for(let T=0;T<=r;T++){const R=T/r,L=R*Math.PI*2,F=Math.sin(L),$=Math.cos(L);d.x=-b*$,d.y=y,d.z=b*F,o.push(d.x,d.y,d.z),_.set(-b*$,w,b*F),_.normalize(),l.push(_.x,_.y,_.z),c.push(R+x,A)}if(g>0){const T=(g-1)*E;for(let R=0;R<r;R++){const L=T+R,F=T+R+1,$=g*E+R,Y=g*E+R+1;a.push(L,F,$),a.push(F,Y,$)}}}this.setIndex(a),this.setAttribute("position",new Kt(o,3)),this.setAttribute("normal",new Kt(l,3)),this.setAttribute("uv",new Kt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Up(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class Fp extends Hn{constructor(e=1,n=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],f=[],p=[];let v=0;const E=[],_=i/2;let d=0;g(),a===!1&&(e>0&&M(!0),n>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new Kt(h,3)),this.setAttribute("normal",new Kt(f,3)),this.setAttribute("uv",new Kt(p,2));function g(){const y=new W,b=new W;let w=0;const A=(n-e)/i;for(let x=0;x<=s;x++){const T=[],R=x/s,L=R*(n-e)+e;for(let F=0;F<=r;F++){const $=F/r,Y=$*l+o,O=Math.sin(Y),j=Math.cos(Y);b.x=L*O,b.y=-R*i+_,b.z=L*j,h.push(b.x,b.y,b.z),y.set(O,A,j).normalize(),f.push(y.x,y.y,y.z),p.push($,1-R),T.push(v++)}E.push(T)}for(let x=0;x<r;x++)for(let T=0;T<s;T++){const R=E[T][x],L=E[T+1][x],F=E[T+1][x+1],$=E[T][x+1];(e>0||T!==0)&&(u.push(R,L,$),w+=3),(n>0||T!==s-1)&&(u.push(L,F,$),w+=3)}c.addGroup(d,w,0),d+=w}function M(y){const b=v,w=new Ve,A=new W;let x=0;const T=y===!0?e:n,R=y===!0?1:-1;for(let F=1;F<=r;F++)h.push(0,_*R,0),f.push(0,R,0),p.push(.5,.5),v++;const L=v;for(let F=0;F<=r;F++){const Y=F/r*l+o,O=Math.cos(Y),j=Math.sin(Y);A.x=T*j,A.y=_*R,A.z=T*O,h.push(A.x,A.y,A.z),f.push(0,R,0),w.x=O*.5+.5,w.y=j*.5*R+.5,p.push(w.x,w.y),v++}for(let F=0;F<r;F++){const $=b+F,Y=L+F;y===!0?u.push(Y,Y+1,$):u.push(Y+1,Y,$),x+=3}c.addGroup(d,x,y===!0?1:2),d+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fp(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Uo extends Hn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,h=e/o,f=n/l,p=[],v=[],E=[],_=[];for(let d=0;d<u;d++){const g=d*f-a;for(let M=0;M<c;M++){const y=M*h-s;v.push(y,-g,0),E.push(0,0,1),_.push(M/o),_.push(1-d/l)}}for(let d=0;d<l;d++)for(let g=0;g<o;g++){const M=g+c*d,y=g+c*(d+1),b=g+1+c*(d+1),w=g+1+c*d;p.push(M,y,w),p.push(y,b,w)}this.setIndex(p),this.setAttribute("position",new Kt(v,3)),this.setAttribute("normal",new Kt(E,3)),this.setAttribute("uv",new Kt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Uo(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ic extends Hn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new W,f=new W,p=[],v=[],E=[],_=[];for(let d=0;d<=i;d++){const g=[],M=d/i,y=a+M*o,b=e*Math.cos(y),w=Math.sqrt(e*e-b*b);let A=0;d===0&&a===0?A=.5/n:d===i&&l===Math.PI&&(A=-.5/n);for(let x=0;x<=n;x++){const T=x/n,R=r+T*s;h.x=-w*Math.cos(R),h.y=b,h.z=w*Math.sin(R),v.push(h.x,h.y,h.z),f.copy(h).normalize(),E.push(f.x,f.y,f.z),_.push(T+A,1-M),g.push(c++)}u.push(g)}for(let d=0;d<i;d++)for(let g=0;g<n;g++){const M=u[d][g+1],y=u[d][g],b=u[d+1][g],w=u[d+1][g+1];(d!==0||a>0)&&p.push(M,y,w),(d!==i-1||l<Math.PI)&&p.push(y,b,w)}this.setIndex(p),this.setAttribute("position",new Kt(v,3)),this.setAttribute("normal",new Kt(E,3)),this.setAttribute("uv",new Kt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ic(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function ua(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(Dg(r))r.isRenderTargetTexture?(Be("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(Dg(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function hn(t){const e={};for(let n=0;n<t.length;n++){const i=ua(t[n]);for(const r in i)e[r]=i[r]}return e}function Dg(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function qw(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Px(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const Yw={clone:ua,merge:hn};var Kw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ti extends Io{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kw,this.fragmentShader=Zw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ua(e.uniforms),this.uniformsGroups=qw(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new Xe().setHex(r.value);break;case"v2":this.uniforms[i].value=new Ve().fromArray(r.value);break;case"v3":this.uniforms[i].value=new W().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Rt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Ge().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Nt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Jw extends Ti{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Qw extends Io{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hh,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class e1 extends Io{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=uw,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class t1 extends Io{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Nx extends tn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}class n1 extends Nx{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Xe(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}toJSON(e){const n=super.toJSON(e);return n.object.groundColor=this.groundColor.getHex(),n}}const hf=new Nt,Ig=new W,Ug=new W;class i1{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ve(512,512),this.mapType=Un,this.map=null,this.mapPass=null,this.matrix=new Nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ip,this._frameExtents=new Ve(1,1),this._viewportCount=1,this._viewports=[new Rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Ig.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ig),Ug.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Ug),n.updateMatrixWorld(),hf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hf,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===wo||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(hf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Al=new W,Cl=new Rr,di=new W;class Lx extends tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Nt,this.projectionMatrix=new Nt,this.projectionMatrixInverse=new Nt,this.coordinateSystem=_i,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Al,Cl,di),di.x===1&&di.y===1&&di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Al,Cl,di.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(Al,Cl,di),di.x===1&&di.y===1&&di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Al,Cl,di.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const or=new W,Fg=new Ve,Og=new Ve;class In extends Lx{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=ph*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ql*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ph*2*Math.atan(Math.tan(Ql*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){or.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(or.x,or.y).multiplyScalar(-e/or.z),or.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(or.x,or.y).multiplyScalar(-e/or.z)}getViewSize(e,n){return this.getViewBounds(e,Fg,Og),n.subVectors(Og,Fg)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ql*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class Op extends Lx{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class r1 extends i1{constructor(){super(new Op(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class s1 extends Nx{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.target=new tn,this.shadow=new r1}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}const Ts=-90,bs=1;class a1 extends tn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new In(Ts,bs,e,n);r.layers=this.layers,this.add(r);const s=new In(Ts,bs,e,n);s.layers=this.layers,this.add(s);const a=new In(Ts,bs,e,n);a.layers=this.layers,this.add(a);const o=new In(Ts,bs,e,n);o.layers=this.layers,this.add(o);const l=new In(Ts,bs,e,n);l.layers=this.layers,this.add(l);const c=new In(Ts,bs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===_i)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===wo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let _=!1;e.isWebGLRenderer===!0?_=e.state.buffers.depth.getReversed():_=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(h,f,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class o1 extends In{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class kg{constructor(e=1,n=0,i=0){this.radius=e,this.phi=n,this.theta=i}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=$e(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos($e(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Dx{static{Dx.prototype.isMatrix2=!0}constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}}class l1 extends Ir{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Be("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Bg(t,e,n,i){const r=c1(i);switch(n){case gx:return t*e;case _x:return t*e/r.components*r.byteLength;case bp:return t*e/r.components*r.byteLength;case as:return t*e*2/r.components*r.byteLength;case Ap:return t*e*2/r.components*r.byteLength;case vx:return t*e*3/r.components*r.byteLength;case ai:return t*e*4/r.components*r.byteLength;case Cp:return t*e*4/r.components*r.byteLength;case Yl:case Kl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Zl:case Jl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case kd:case zd:return Math.max(t,16)*Math.max(e,8)/4;case Od:case Bd:return Math.max(t,8)*Math.max(e,8)/2;case Vd:case Hd:case Wd:case jd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Gd:case Rc:case Xd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case $d:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case qd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Yd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Kd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Zd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Jd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Qd:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case eh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case th:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case nh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case ih:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case rh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case sh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case ah:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case oh:case lh:case ch:return Math.ceil(t/4)*Math.ceil(e/4)*16;case uh:case fh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Pc:case dh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function c1(t){switch(t){case Un:case dx:return{byteLength:1,components:1};case Mo:case hx:case qi:return{byteLength:2,components:1};case wp:case Tp:return{byteLength:2,components:4};case Ei:case Ep:case vi:return{byteLength:4,components:1};case px:case mx:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Mp}}));typeof window<"u"&&(window.__THREE__?Be("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Mp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ix(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function u1(t){const e=new WeakMap;function n(o,l){const c=o.array,u=o.usage,h=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const u=l.array,h=l.updateRanges;if(t.bindBuffer(c,o),h.length===0)t.bufferSubData(c,0,u);else{h.sort((p,v)=>p.start-v.start);let f=0;for(let p=1;p<h.length;p++){const v=h[f],E=h[p];E.start<=v.start+v.count+1?v.count=Math.max(v.count,E.start+E.count-v.start):(++f,h[f]=E)}h.length=f+1;for(let p=0,v=h.length;p<v;p++){const E=h[p];t.bufferSubData(c,E.start*u.BYTES_PER_ELEMENT,u,E.start,E.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var f1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,d1=`#ifdef USE_ALPHAHASH
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
#endif`,h1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,p1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,m1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,g1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,v1=`#ifdef USE_AOMAP
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
#endif`,_1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,x1=`#ifdef USE_BATCHING
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
#endif`,y1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,S1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,M1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,E1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,w1=`#ifdef USE_IRIDESCENCE
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
#endif`,T1=`#ifdef USE_BUMPMAP
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
#endif`,b1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,A1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,C1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,R1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,P1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,N1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,L1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,D1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,I1=`#define PI 3.141592653589793
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
} // validated`,U1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,F1=`vec3 transformedNormal = objectNormal;
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
#endif`,O1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,k1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,B1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,z1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,V1="gl_FragColor = linearToOutputTexel( gl_FragColor );",H1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,G1=`#ifdef USE_ENVMAP
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
#endif`,W1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,j1=`#ifdef USE_ENVMAP
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
#endif`,X1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$1=`#ifdef USE_ENVMAP
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
#endif`,q1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Y1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,K1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Z1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,J1=`#ifdef USE_GRADIENTMAP
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
}`,Q1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,eT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nT=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,iT=`#ifdef USE_ENVMAP
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
#endif`,rT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,aT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,oT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lT=`PhysicalMaterial material;
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
#endif`,cT=`uniform sampler2D dfgLUT;
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
}`,uT=`
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
#endif`,fT=`#if defined( RE_IndirectDiffuse )
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
#endif`,dT=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hT=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,pT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_T=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ST=`#if defined( USE_POINTS_UV )
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
#endif`,MT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ET=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,TT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,AT=`#ifdef USE_MORPHTARGETS
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
#endif`,CT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,RT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,PT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,NT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,LT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,DT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,IT=`#ifdef USE_NORMALMAP
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
#endif`,UT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,FT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,OT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,BT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,VT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,HT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,GT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,WT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,XT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$T=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,YT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,KT=`float getShadowMask() {
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
}`,ZT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,JT=`#ifdef USE_SKINNING
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
#endif`,QT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,eb=`#ifdef USE_SKINNING
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
#endif`,tb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ib=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,sb=`#ifdef USE_TRANSMISSION
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
#endif`,ab=`#ifdef USE_TRANSMISSION
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
#endif`,ob=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ub=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,db=`uniform sampler2D t2D;
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
}`,hb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,mb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vb=`#include <common>
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
}`,_b=`#if DEPTH_PACKING == 3200
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
}`,xb=`#define DISTANCE
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
}`,yb=`#define DISTANCE
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
}`,Sb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Mb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Eb=`uniform float scale;
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
}`,wb=`uniform vec3 diffuse;
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
}`,Tb=`#include <common>
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
}`,bb=`uniform vec3 diffuse;
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
}`,Ab=`#define LAMBERT
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
}`,Cb=`#define LAMBERT
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
}`,Rb=`#define MATCAP
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
}`,Pb=`#define MATCAP
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
}`,Nb=`#define NORMAL
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
}`,Lb=`#define NORMAL
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
}`,Db=`#define PHONG
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
}`,Ib=`#define PHONG
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
}`,Ub=`#define STANDARD
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
}`,Fb=`#define STANDARD
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
}`,Ob=`#define TOON
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
}`,kb=`#define TOON
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
}`,Bb=`uniform float size;
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
}`,zb=`uniform vec3 diffuse;
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
}`,Vb=`#include <common>
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
}`,Hb=`uniform vec3 color;
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
}`,Gb=`uniform float rotation;
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
}`,Wb=`uniform vec3 diffuse;
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
}`,je={alphahash_fragment:f1,alphahash_pars_fragment:d1,alphamap_fragment:h1,alphamap_pars_fragment:p1,alphatest_fragment:m1,alphatest_pars_fragment:g1,aomap_fragment:v1,aomap_pars_fragment:_1,batching_pars_vertex:x1,batching_vertex:y1,begin_vertex:S1,beginnormal_vertex:M1,bsdfs:E1,iridescence_fragment:w1,bumpmap_pars_fragment:T1,clipping_planes_fragment:b1,clipping_planes_pars_fragment:A1,clipping_planes_pars_vertex:C1,clipping_planes_vertex:R1,color_fragment:P1,color_pars_fragment:N1,color_pars_vertex:L1,color_vertex:D1,common:I1,cube_uv_reflection_fragment:U1,defaultnormal_vertex:F1,displacementmap_pars_vertex:O1,displacementmap_vertex:k1,emissivemap_fragment:B1,emissivemap_pars_fragment:z1,colorspace_fragment:V1,colorspace_pars_fragment:H1,envmap_fragment:G1,envmap_common_pars_fragment:W1,envmap_pars_fragment:j1,envmap_pars_vertex:X1,envmap_physical_pars_fragment:iT,envmap_vertex:$1,fog_vertex:q1,fog_pars_vertex:Y1,fog_fragment:K1,fog_pars_fragment:Z1,gradientmap_pars_fragment:J1,lightmap_pars_fragment:Q1,lights_lambert_fragment:eT,lights_lambert_pars_fragment:tT,lights_pars_begin:nT,lights_toon_fragment:rT,lights_toon_pars_fragment:sT,lights_phong_fragment:aT,lights_phong_pars_fragment:oT,lights_physical_fragment:lT,lights_physical_pars_fragment:cT,lights_fragment_begin:uT,lights_fragment_maps:fT,lights_fragment_end:dT,lightprobes_pars_fragment:hT,logdepthbuf_fragment:pT,logdepthbuf_pars_fragment:mT,logdepthbuf_pars_vertex:gT,logdepthbuf_vertex:vT,map_fragment:_T,map_pars_fragment:xT,map_particle_fragment:yT,map_particle_pars_fragment:ST,metalnessmap_fragment:MT,metalnessmap_pars_fragment:ET,morphinstance_vertex:wT,morphcolor_vertex:TT,morphnormal_vertex:bT,morphtarget_pars_vertex:AT,morphtarget_vertex:CT,normal_fragment_begin:RT,normal_fragment_maps:PT,normal_pars_fragment:NT,normal_pars_vertex:LT,normal_vertex:DT,normalmap_pars_fragment:IT,clearcoat_normal_fragment_begin:UT,clearcoat_normal_fragment_maps:FT,clearcoat_pars_fragment:OT,iridescence_pars_fragment:kT,opaque_fragment:BT,packing:zT,premultiplied_alpha_fragment:VT,project_vertex:HT,dithering_fragment:GT,dithering_pars_fragment:WT,roughnessmap_fragment:jT,roughnessmap_pars_fragment:XT,shadowmap_pars_fragment:$T,shadowmap_pars_vertex:qT,shadowmap_vertex:YT,shadowmask_pars_fragment:KT,skinbase_vertex:ZT,skinning_pars_vertex:JT,skinning_vertex:QT,skinnormal_vertex:eb,specularmap_fragment:tb,specularmap_pars_fragment:nb,tonemapping_fragment:ib,tonemapping_pars_fragment:rb,transmission_fragment:sb,transmission_pars_fragment:ab,uv_pars_fragment:ob,uv_pars_vertex:lb,uv_vertex:cb,worldpos_vertex:ub,background_vert:fb,background_frag:db,backgroundCube_vert:hb,backgroundCube_frag:pb,cube_vert:mb,cube_frag:gb,depth_vert:vb,depth_frag:_b,distance_vert:xb,distance_frag:yb,equirect_vert:Sb,equirect_frag:Mb,linedashed_vert:Eb,linedashed_frag:wb,meshbasic_vert:Tb,meshbasic_frag:bb,meshlambert_vert:Ab,meshlambert_frag:Cb,meshmatcap_vert:Rb,meshmatcap_frag:Pb,meshnormal_vert:Nb,meshnormal_frag:Lb,meshphong_vert:Db,meshphong_frag:Ib,meshphysical_vert:Ub,meshphysical_frag:Fb,meshtoon_vert:Ob,meshtoon_frag:kb,points_vert:Bb,points_frag:zb,shadow_vert:Vb,shadow_frag:Hb,sprite_vert:Gb,sprite_frag:Wb},Ee={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new W},probesMax:{value:new W},probesResolution:{value:new W}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},mi={basic:{uniforms:hn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:hn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Xe(0)},envMapIntensity:{value:1}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:hn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:hn([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:hn([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new Xe(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:hn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:hn([Ee.points,Ee.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:hn([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:hn([Ee.common,Ee.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:hn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:hn([Ee.sprite,Ee.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distance:{uniforms:hn([Ee.common,Ee.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distance_vert,fragmentShader:je.distance_frag},shadow:{uniforms:hn([Ee.lights,Ee.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};mi.physical={uniforms:hn([mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const Rl={r:0,b:0,g:0},jb=new Nt,Ux=new Ge;Ux.set(-1,0,0,0,1,0,0,0,1);function Xb(t,e,n,i,r,s){const a=new Xe(0);let o=r===!0?0:1,l,c,u=null,h=0,f=null;function p(g){let M=g.isScene===!0?g.background:null;if(M&&M.isTexture){const y=g.backgroundBlurriness>0;M=e.get(M,y)}return M}function v(g){let M=!1;const y=p(g);y===null?_(a,o):y&&y.isColor&&(_(y,1),M=!0);const b=t.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,s):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function E(g,M){const y=p(M);y&&(y.isCubeTexture||y.mapping===tu)?(c===void 0&&(c=new wi(new pa(1,1,1),new Ti({name:"BackgroundCubeMaterial",uniforms:ua(mi.backgroundCube.uniforms),vertexShader:mi.backgroundCube.vertexShader,fragmentShader:mi.backgroundCube.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(jb.makeRotationFromEuler(M.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Ux),c.material.toneMapped=Ke.getTransfer(y.colorSpace)!==ct,(u!==y||h!==y.version||f!==t.toneMapping)&&(c.material.needsUpdate=!0,u=y,h=y.version,f=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new wi(new Uo(2,2),new Ti({name:"BackgroundMaterial",uniforms:ua(mi.background.uniforms),vertexShader:mi.background.vertexShader,fragmentShader:mi.background.fragmentShader,side:Cr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=Ke.getTransfer(y.colorSpace)!==ct,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||h!==y.version||f!==t.toneMapping)&&(l.material.needsUpdate=!0,u=y,h=y.version,f=t.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function _(g,M){g.getRGB(Rl,Px(t)),n.buffers.color.setClear(Rl.r,Rl.g,Rl.b,M,s)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(g,M=1){a.set(g),o=M,_(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(g){o=g,_(a,o)},render:v,addToRenderList:E,dispose:d}}function $b(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(L,F,$,Y,O){let j=!1;const X=h(L,Y,$,F);s!==X&&(s=X,c(s.object)),j=p(L,Y,$,O),j&&v(L,Y,$,O),O!==null&&e.update(O,t.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,y(L,F,$,Y),O!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return t.createVertexArray()}function c(L){return t.bindVertexArray(L)}function u(L){return t.deleteVertexArray(L)}function h(L,F,$,Y){const O=Y.wireframe===!0;let j=i[F.id];j===void 0&&(j={},i[F.id]=j);const X=L.isInstancedMesh===!0?L.id:0;let U=j[X];U===void 0&&(U={},j[X]=U);let V=U[$.id];V===void 0&&(V={},U[$.id]=V);let J=V[O];return J===void 0&&(J=f(l()),V[O]=J),J}function f(L){const F=[],$=[],Y=[];for(let O=0;O<n;O++)F[O]=0,$[O]=0,Y[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:$,attributeDivisors:Y,object:L,attributes:{},index:null}}function p(L,F,$,Y){const O=s.attributes,j=F.attributes;let X=0;const U=$.getAttributes();for(const V in U)if(U[V].location>=0){const ee=O[V];let le=j[V];if(le===void 0&&(V==="instanceMatrix"&&L.instanceMatrix&&(le=L.instanceMatrix),V==="instanceColor"&&L.instanceColor&&(le=L.instanceColor)),ee===void 0||ee.attribute!==le||le&&ee.data!==le.data)return!0;X++}return s.attributesNum!==X||s.index!==Y}function v(L,F,$,Y){const O={},j=F.attributes;let X=0;const U=$.getAttributes();for(const V in U)if(U[V].location>=0){let ee=j[V];ee===void 0&&(V==="instanceMatrix"&&L.instanceMatrix&&(ee=L.instanceMatrix),V==="instanceColor"&&L.instanceColor&&(ee=L.instanceColor));const le={};le.attribute=ee,ee&&ee.data&&(le.data=ee.data),O[V]=le,X++}s.attributes=O,s.attributesNum=X,s.index=Y}function E(){const L=s.newAttributes;for(let F=0,$=L.length;F<$;F++)L[F]=0}function _(L){d(L,0)}function d(L,F){const $=s.newAttributes,Y=s.enabledAttributes,O=s.attributeDivisors;$[L]=1,Y[L]===0&&(t.enableVertexAttribArray(L),Y[L]=1),O[L]!==F&&(t.vertexAttribDivisor(L,F),O[L]=F)}function g(){const L=s.newAttributes,F=s.enabledAttributes;for(let $=0,Y=F.length;$<Y;$++)F[$]!==L[$]&&(t.disableVertexAttribArray($),F[$]=0)}function M(L,F,$,Y,O,j,X){X===!0?t.vertexAttribIPointer(L,F,$,O,j):t.vertexAttribPointer(L,F,$,Y,O,j)}function y(L,F,$,Y){E();const O=Y.attributes,j=$.getAttributes(),X=F.defaultAttributeValues;for(const U in j){const V=j[U];if(V.location>=0){let J=O[U];if(J===void 0&&(U==="instanceMatrix"&&L.instanceMatrix&&(J=L.instanceMatrix),U==="instanceColor"&&L.instanceColor&&(J=L.instanceColor)),J!==void 0){const ee=J.normalized,le=J.itemSize,Ie=e.get(J);if(Ie===void 0)continue;const we=Ie.buffer,Te=Ie.type,K=Ie.bytesPerElement,ue=Te===t.INT||Te===t.UNSIGNED_INT||J.gpuType===Ep;if(J.isInterleavedBufferAttribute){const fe=J.data,Ce=fe.stride,ke=J.offset;if(fe.isInstancedInterleavedBuffer){for(let Ne=0;Ne<V.locationSize;Ne++)d(V.location+Ne,fe.meshPerAttribute);L.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Ne=0;Ne<V.locationSize;Ne++)_(V.location+Ne);t.bindBuffer(t.ARRAY_BUFFER,we);for(let Ne=0;Ne<V.locationSize;Ne++)M(V.location+Ne,le/V.locationSize,Te,ee,Ce*K,(ke+le/V.locationSize*Ne)*K,ue)}else{if(J.isInstancedBufferAttribute){for(let fe=0;fe<V.locationSize;fe++)d(V.location+fe,J.meshPerAttribute);L.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let fe=0;fe<V.locationSize;fe++)_(V.location+fe);t.bindBuffer(t.ARRAY_BUFFER,we);for(let fe=0;fe<V.locationSize;fe++)M(V.location+fe,le/V.locationSize,Te,ee,le*K,le/V.locationSize*fe*K,ue)}}else if(X!==void 0){const ee=X[U];if(ee!==void 0)switch(ee.length){case 2:t.vertexAttrib2fv(V.location,ee);break;case 3:t.vertexAttrib3fv(V.location,ee);break;case 4:t.vertexAttrib4fv(V.location,ee);break;default:t.vertexAttrib1fv(V.location,ee)}}}}g()}function b(){T();for(const L in i){const F=i[L];for(const $ in F){const Y=F[$];for(const O in Y){const j=Y[O];for(const X in j)u(j[X].object),delete j[X];delete Y[O]}}delete i[L]}}function w(L){if(i[L.id]===void 0)return;const F=i[L.id];for(const $ in F){const Y=F[$];for(const O in Y){const j=Y[O];for(const X in j)u(j[X].object),delete j[X];delete Y[O]}}delete i[L.id]}function A(L){for(const F in i){const $=i[F];for(const Y in $){const O=$[Y];if(O[L.id]===void 0)continue;const j=O[L.id];for(const X in j)u(j[X].object),delete j[X];delete O[L.id]}}}function x(L){for(const F in i){const $=i[F],Y=L.isInstancedMesh===!0?L.id:0,O=$[Y];if(O!==void 0){for(const j in O){const X=O[j];for(const U in X)u(X[U].object),delete X[U];delete O[j]}delete $[Y],Object.keys($).length===0&&delete i[F]}}}function T(){R(),a=!0,s!==r&&(s=r,c(s.object))}function R(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:T,resetDefaultState:R,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfObject:x,releaseStatesOfProgram:A,initAttributes:E,enableAttribute:_,disableUnusedAttributes:g}}function qb(t,e,n){let i;function r(l){i=l}function s(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function a(l,c,u){u!==0&&(t.drawArraysInstanced(i,l,c,u),n.update(c,i,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let f=0;for(let p=0;p<u;p++)f+=c[p];n.update(f,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function Yb(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(A){return!(A!==ai&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const x=A===qi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Un&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==vi&&!x)}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(Be("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&f===!1&&Be("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),M=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),b=t.getParameter(t.MAX_SAMPLES),w=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:v,maxTextureSize:E,maxCubemapSize:_,maxAttributes:d,maxVertexUniforms:g,maxVaryings:M,maxFragmentUniforms:y,maxSamples:b,samples:w}}function Kb(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new ur,o=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||i!==0||r;return r=f,i=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){n=u(h,f,0)},this.setState=function(h,f,p){const v=h.clippingPlanes,E=h.clipIntersection,_=h.clipShadows,d=t.get(h);if(!r||v===null||v.length===0||s&&!_)s?u(null):c();else{const g=s?0:i,M=g*4;let y=d.clippingState||null;l.value=y,y=u(v,f,M,p);for(let b=0;b!==M;++b)y[b]=n[b];d.clippingState=y,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,p,v){const E=h!==null?h.length:0;let _=null;if(E!==0){if(_=l.value,v!==!0||_===null){const d=p+E*4,g=f.matrixWorldInverse;o.getNormalMatrix(g),(_===null||_.length<d)&&(_=new Float32Array(d));for(let M=0,y=p;M!==E;++M,y+=4)a.copy(h[M]).applyMatrix4(g,o),a.normal.toArray(_,y),_[y+3]=a.constant}l.value=_,l.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,_}}const gr=4,zg=[.125,.215,.35,.446,.526,.582],Wr=20,Zb=256,Ua=new Op,Vg=new Xe;let pf=null,mf=0,gf=0,vf=!1;const Jb=new W;class Hg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=Jb}=s;pf=this._renderer.getRenderTarget(),mf=this._renderer.getActiveCubeFace(),gf=this._renderer.getActiveMipmapLevel(),vf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(pf,mf,gf),this._renderer.xr.enabled=vf,e.scissorTest=!1,As(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ss||e.mapping===la?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),pf=this._renderer.getRenderTarget(),mf=this._renderer.getActiveCubeFace(),gf=this._renderer.getActiveMipmapLevel(),vf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:un,minFilter:un,generateMipmaps:!1,type:qi,format:ai,colorSpace:Nc,depthBuffer:!1},r=Gg(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gg(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Qb(s)),this._blurMaterial=tA(s,e,n),this._ggxMaterial=eA(s,e,n)}return r}_compileMaterial(e){const n=new wi(new Hn,e);this._renderer.compile(n,Ua)}_sceneToCubeUV(e,n,i,r,s){const l=new In(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(Vg),h.toneMapping=Si,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new wi(new pa,new Ax({name:"PMREM.Background",side:Cn,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,_=E.material;let d=!1;const g=e.background;g?g.isColor&&(_.color.copy(g),e.background=null,d=!0):(_.color.copy(Vg),d=!0);for(let M=0;M<6;M++){const y=M%3;y===0?(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[M],s.y,s.z)):y===1?(l.up.set(0,0,c[M]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[M],s.z)):(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[M]));const b=this._cubeSize;As(r,y*b,M>2?b:0,b,b),h.setRenderTarget(r),d&&h.render(E,l),h.render(e,l)}h.toneMapping=p,h.autoClear=f,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ss||e.mapping===la;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=jg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wg());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;As(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,Ua)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),u=n/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),f=0+c*1.25,p=h*f,{_lodMax:v}=this,E=this._sizeLods[i],_=3*E*(i>v-gr?i-v+gr:0),d=4*(this._cubeSize-E);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=v-n,As(s,_,d,3*E,2*E),r.setRenderTarget(s),r.render(o,Ua),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=v-i,As(e,_,d,3*E,2*E),r.setRenderTarget(e),r.render(o,Ua)}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&nt("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[r];h.material=c;const f=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Wr-1),E=s/v,_=isFinite(s)?1+Math.floor(u*E):Wr;_>Wr&&Be(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Wr}`);const d=[];let g=0;for(let A=0;A<Wr;++A){const x=A/E,T=Math.exp(-x*x/2);d.push(T),A===0?g+=T:A<_&&(g+=2*T)}for(let A=0;A<d.length;A++)d[A]=d[A]/g;f.envMap.value=e.texture,f.samples.value=_,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:M}=this;f.dTheta.value=v,f.mipInt.value=M-i;const y=this._sizeLods[r],b=3*y*(r>M-gr?r-M+gr:0),w=4*(this._cubeSize-y);As(n,b,w,3*y,2*y),l.setRenderTarget(n),l.render(h,Ua)}}function Qb(t){const e=[],n=[],i=[];let r=t;const s=t-gr+1+zg.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>t-gr?l=zg[a-t+gr-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,v=6,E=3,_=2,d=1,g=new Float32Array(E*v*p),M=new Float32Array(_*v*p),y=new Float32Array(d*v*p);for(let w=0;w<p;w++){const A=w%3*2/3-1,x=w>2?0:-1,T=[A,x,0,A+2/3,x,0,A+2/3,x+1,0,A,x,0,A+2/3,x+1,0,A,x+1,0];g.set(T,E*v*w),M.set(f,_*v*w);const R=[w,w,w,w,w,w];y.set(R,d*v*w)}const b=new Hn;b.setAttribute("position",new Yn(g,E)),b.setAttribute("uv",new Yn(M,_)),b.setAttribute("faceIndex",new Yn(y,d)),i.push(new wi(b,null)),r>gr&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function Gg(t,e,n){const i=new Mi(t,e,n);return i.texture.mapping=tu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function As(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function eA(t,e,n){return new Ti({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Zb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:nu(),fragmentShader:`

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
		`,blending:zi,depthTest:!1,depthWrite:!1})}function tA(t,e,n){const i=new Float32Array(Wr),r=new W(0,1,0);return new Ti({name:"SphericalGaussianBlur",defines:{n:Wr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:nu(),fragmentShader:`

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
		`,blending:zi,depthTest:!1,depthWrite:!1})}function Wg(){return new Ti({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nu(),fragmentShader:`

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
		`,blending:zi,depthTest:!1,depthWrite:!1})}function jg(){return new Ti({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function nu(){return`

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
	`}class Fx extends Mi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Cx(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new pa(5,5,5),s=new Ti({name:"CubemapFromEquirect",uniforms:ua(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Cn,blending:zi});s.uniforms.tEquirect.value=n;const a=new wi(r,s),o=n.minFilter;return n.minFilter===qr&&(n.minFilter=un),new a1(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}function nA(t){let e=new WeakMap,n=new WeakMap,i=null;function r(f,p=!1){return f==null?null:p?a(f):s(f)}function s(f){if(f&&f.isTexture){const p=f.mapping;if(p===zu||p===Vu)if(e.has(f)){const v=e.get(f).texture;return o(v,f.mapping)}else{const v=f.image;if(v&&v.height>0){const E=new Fx(v.height);return E.fromEquirectangularTexture(t,f),e.set(f,E),f.addEventListener("dispose",c),o(E.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){const p=f.mapping,v=p===zu||p===Vu,E=p===ss||p===la;if(v||E){let _=n.get(f);const d=_!==void 0?_.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==d)return i===null&&(i=new Hg(t)),_=v?i.fromEquirectangular(f,_):i.fromCubemap(f,_),_.texture.pmremVersion=f.pmremVersion,n.set(f,_),_.texture;if(_!==void 0)return _.texture;{const g=f.image;return v&&g&&g.height>0||E&&g&&l(g)?(i===null&&(i=new Hg(t)),_=v?i.fromEquirectangular(f):i.fromCubemap(f),_.texture.pmremVersion=f.pmremVersion,n.set(f,_),f.addEventListener("dispose",u),_.texture):null}}}return f}function o(f,p){return p===zu?f.mapping=ss:p===Vu&&(f.mapping=la),f}function l(f){let p=0;const v=6;for(let E=0;E<v;E++)f[E]!==void 0&&p++;return p===v}function c(f){const p=f.target;p.removeEventListener("dispose",c);const v=e.get(p);v!==void 0&&(e.delete(p),v.dispose())}function u(f){const p=f.target;p.removeEventListener("dispose",u);const v=n.get(p);v!==void 0&&(n.delete(p),v.dispose())}function h(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function iA(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Zs("WebGLRenderer: "+i+" extension not supported."),r}}}function rA(t,e,n,i){const r={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);f.removeEventListener("dispose",a),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(h,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,n.memory.geometries++),f}function l(h){const f=h.attributes;for(const p in f)e.update(f[p],t.ARRAY_BUFFER)}function c(h){const f=[],p=h.index,v=h.attributes.position;let E=0;if(v===void 0)return;if(p!==null){const g=p.array;E=p.version;for(let M=0,y=g.length;M<y;M+=3){const b=g[M+0],w=g[M+1],A=g[M+2];f.push(b,w,w,A,A,b)}}else{const g=v.array;E=v.version;for(let M=0,y=g.length/3-1;M<y;M+=3){const b=M+0,w=M+1,A=M+2;f.push(b,w,w,A,A,b)}}const _=new(v.count>=65535?Tx:wx)(f,1);_.version=E;const d=s.get(h);d&&e.remove(d),s.set(h,_)}function u(h){const f=s.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function sA(t,e,n){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,f){t.drawElements(i,f,s,h*a),n.update(f,i,1)}function c(h,f,p){p!==0&&(t.drawElementsInstanced(i,f,s,h*a,p),n.update(f,i,p))}function u(h,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,h,0,p);let E=0;for(let _=0;_<p;_++)E+=f[_];n.update(E,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function aA(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:nt("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function oA(t,e,n){const i=new WeakMap,r=new Rt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(o);if(f===void 0||f.count!==h){let T=function(){A.dispose(),i.delete(o),o.removeEventListener("dispose",T)};f!==void 0&&f.texture.dispose();const p=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,E=o.morphAttributes.color!==void 0,_=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],g=o.morphAttributes.color||[];let M=0;p===!0&&(M=1),v===!0&&(M=2),E===!0&&(M=3);let y=o.attributes.position.count*M,b=1;y>e.maxTextureSize&&(b=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const w=new Float32Array(y*b*4*h),A=new yx(w,y,b,h);A.type=vi,A.needsUpdate=!0;const x=M*4;for(let R=0;R<h;R++){const L=_[R],F=d[R],$=g[R],Y=y*b*4*R;for(let O=0;O<L.count;O++){const j=O*x;p===!0&&(r.fromBufferAttribute(L,O),w[Y+j+0]=r.x,w[Y+j+1]=r.y,w[Y+j+2]=r.z,w[Y+j+3]=0),v===!0&&(r.fromBufferAttribute(F,O),w[Y+j+4]=r.x,w[Y+j+5]=r.y,w[Y+j+6]=r.z,w[Y+j+7]=0),E===!0&&(r.fromBufferAttribute($,O),w[Y+j+8]=r.x,w[Y+j+9]=r.y,w[Y+j+10]=r.z,w[Y+j+11]=$.itemSize===4?r.w:1)}}f={count:h,texture:A,size:new Ve(y,b)},i.set(o,f),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let p=0;for(let E=0;E<c.length;E++)p+=c[E];const v=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(t,"morphTargetBaseInfluence",v),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function lA(t,e,n,i,r){let s=new WeakMap;function a(c){const u=r.render.frame,h=c.geometry,f=e.get(c,h);if(s.get(f)!==u&&(e.update(f),s.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==u&&(p.update(),s.set(p,u))}return f}function o(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:a,dispose:o}}const cA={[rx]:"LINEAR_TONE_MAPPING",[sx]:"REINHARD_TONE_MAPPING",[ax]:"CINEON_TONE_MAPPING",[ox]:"ACES_FILMIC_TONE_MAPPING",[cx]:"AGX_TONE_MAPPING",[ux]:"NEUTRAL_TONE_MAPPING",[lx]:"CUSTOM_TONE_MAPPING"};function uA(t,e,n,i,r,s){const a=new Mi(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,depthTexture:r?new ca(e,n):void 0}),o=new Mi(e,n,{type:qi,depthBuffer:!1,stencilBuffer:!1}),l=new Hn;l.setAttribute("position",new Kt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Kt([0,2,0,0,2,0],2));const c=new Jw({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new wi(l,c),h=new Op(-1,1,1,-1,0,1);let f=null,p=null,v=!1,E,_=null,d=[],g=!1;this.setSize=function(M,y){a.setSize(M,y),o.setSize(M,y);for(let b=0;b<d.length;b++){const w=d[b];w.setSize&&w.setSize(M,y)}},this.setEffects=function(M){d=M,g=d.length>0&&d[0].isRenderPass===!0;const y=a.width,b=a.height;for(let w=0;w<d.length;w++){const A=d[w];A.setSize&&A.setSize(y,b)}},this.begin=function(M,y){if(v||M.toneMapping===Si&&d.length===0)return!1;if(_=y,y!==null){const b=y.width,w=y.height;(a.width!==b||a.height!==w)&&this.setSize(b,w)}return g===!1&&M.setRenderTarget(a),E=M.toneMapping,M.toneMapping=Si,!0},this.hasRenderPass=function(){return g},this.end=function(M,y){M.toneMapping=E,v=!0;let b=a,w=o;for(let A=0;A<d.length;A++){const x=d[A];if(x.enabled!==!1&&(x.render(M,w,b,y),x.needsSwap!==!1)){const T=b;b=w,w=T}}if(f!==M.outputColorSpace||p!==M.toneMapping){f=M.outputColorSpace,p=M.toneMapping,c.defines={},Ke.getTransfer(f)===ct&&(c.defines.SRGB_TRANSFER="");const A=cA[p];A&&(c.defines[A]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=b.texture,M.setRenderTarget(_),M.render(u,h),_=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),l.dispose(),c.dispose()}}const Ox=new fn,mh=new ca(1,1),kx=new yx,Bx=new Rw,zx=new Cx,Xg=[],$g=[],qg=new Float32Array(16),Yg=new Float32Array(9),Kg=new Float32Array(4);function ma(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Xg[r];if(s===void 0&&(s=new Float32Array(r),Xg[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function jt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Xt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function iu(t,e){let n=$g[e];n===void 0&&(n=new Int32Array(e),$g[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function fA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function dA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(jt(n,e))return;t.uniform2fv(this.addr,e),Xt(n,e)}}function hA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(jt(n,e))return;t.uniform3fv(this.addr,e),Xt(n,e)}}function pA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(jt(n,e))return;t.uniform4fv(this.addr,e),Xt(n,e)}}function mA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(jt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Xt(n,e)}else{if(jt(n,i))return;Kg.set(i),t.uniformMatrix2fv(this.addr,!1,Kg),Xt(n,i)}}function gA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(jt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Xt(n,e)}else{if(jt(n,i))return;Yg.set(i),t.uniformMatrix3fv(this.addr,!1,Yg),Xt(n,i)}}function vA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(jt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Xt(n,e)}else{if(jt(n,i))return;qg.set(i),t.uniformMatrix4fv(this.addr,!1,qg),Xt(n,i)}}function _A(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function xA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(jt(n,e))return;t.uniform2iv(this.addr,e),Xt(n,e)}}function yA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(jt(n,e))return;t.uniform3iv(this.addr,e),Xt(n,e)}}function SA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(jt(n,e))return;t.uniform4iv(this.addr,e),Xt(n,e)}}function MA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function EA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(jt(n,e))return;t.uniform2uiv(this.addr,e),Xt(n,e)}}function wA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(jt(n,e))return;t.uniform3uiv(this.addr,e),Xt(n,e)}}function TA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(jt(n,e))return;t.uniform4uiv(this.addr,e),Xt(n,e)}}function bA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(mh.compareFunction=n.isReversedDepthBuffer()?Pp:Rp,s=mh):s=Ox,n.setTexture2D(e||s,r)}function AA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Bx,r)}function CA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||zx,r)}function RA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||kx,r)}function PA(t){switch(t){case 5126:return fA;case 35664:return dA;case 35665:return hA;case 35666:return pA;case 35674:return mA;case 35675:return gA;case 35676:return vA;case 5124:case 35670:return _A;case 35667:case 35671:return xA;case 35668:case 35672:return yA;case 35669:case 35673:return SA;case 5125:return MA;case 36294:return EA;case 36295:return wA;case 36296:return TA;case 35678:case 36198:case 36298:case 36306:case 35682:return bA;case 35679:case 36299:case 36307:return AA;case 35680:case 36300:case 36308:case 36293:return CA;case 36289:case 36303:case 36311:case 36292:return RA}}function NA(t,e){t.uniform1fv(this.addr,e)}function LA(t,e){const n=ma(e,this.size,2);t.uniform2fv(this.addr,n)}function DA(t,e){const n=ma(e,this.size,3);t.uniform3fv(this.addr,n)}function IA(t,e){const n=ma(e,this.size,4);t.uniform4fv(this.addr,n)}function UA(t,e){const n=ma(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function FA(t,e){const n=ma(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function OA(t,e){const n=ma(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function kA(t,e){t.uniform1iv(this.addr,e)}function BA(t,e){t.uniform2iv(this.addr,e)}function zA(t,e){t.uniform3iv(this.addr,e)}function VA(t,e){t.uniform4iv(this.addr,e)}function HA(t,e){t.uniform1uiv(this.addr,e)}function GA(t,e){t.uniform2uiv(this.addr,e)}function WA(t,e){t.uniform3uiv(this.addr,e)}function jA(t,e){t.uniform4uiv(this.addr,e)}function XA(t,e,n){const i=this.cache,r=e.length,s=iu(n,r);jt(i,s)||(t.uniform1iv(this.addr,s),Xt(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=mh:a=Ox;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function $A(t,e,n){const i=this.cache,r=e.length,s=iu(n,r);jt(i,s)||(t.uniform1iv(this.addr,s),Xt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||Bx,s[a])}function qA(t,e,n){const i=this.cache,r=e.length,s=iu(n,r);jt(i,s)||(t.uniform1iv(this.addr,s),Xt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||zx,s[a])}function YA(t,e,n){const i=this.cache,r=e.length,s=iu(n,r);jt(i,s)||(t.uniform1iv(this.addr,s),Xt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||kx,s[a])}function KA(t){switch(t){case 5126:return NA;case 35664:return LA;case 35665:return DA;case 35666:return IA;case 35674:return UA;case 35675:return FA;case 35676:return OA;case 5124:case 35670:return kA;case 35667:case 35671:return BA;case 35668:case 35672:return zA;case 35669:case 35673:return VA;case 5125:return HA;case 36294:return GA;case 36295:return WA;case 36296:return jA;case 35678:case 36198:case 36298:case 36306:case 35682:return XA;case 35679:case 36299:case 36307:return $A;case 35680:case 36300:case 36308:case 36293:return qA;case 36289:case 36303:case 36311:case 36292:return YA}}class ZA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=PA(n.type)}}class JA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=KA(n.type)}}class QA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const _f=/(\w+)(\])?(\[|\.)?/g;function Zg(t,e){t.seq.push(e),t.map[e.id]=e}function eC(t,e,n){const i=t.name,r=i.length;for(_f.lastIndex=0;;){const s=_f.exec(i),a=_f.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Zg(n,c===void 0?new ZA(o,t,e):new JA(o,t,e));break}else{let h=n.map[o];h===void 0&&(h=new QA(o),Zg(n,h)),n=h}}}class ec{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),l=e.getUniformLocation(n,o.name);eC(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Jg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const tC=37297;let nC=0;function iC(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const Qg=new Ge;function rC(t){Ke._getMatrix(Qg,Ke.workingColorSpace,t);const e=`mat3( ${Qg.elements.map(n=>n.toFixed(4))} )`;switch(Ke.getTransfer(t)){case Lc:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return Be("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function e0(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+iC(t.getShaderSource(e),o)}else return s}function sC(t,e){const n=rC(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const aC={[rx]:"Linear",[sx]:"Reinhard",[ax]:"Cineon",[ox]:"ACESFilmic",[cx]:"AgX",[ux]:"Neutral",[lx]:"Custom"};function oC(t,e){const n=aC[e];return n===void 0?(Be("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Pl=new W;function lC(){Ke.getLuminanceCoefficients(Pl);const t=Pl.x.toFixed(4),e=Pl.y.toFixed(4),n=Pl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cC(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wa).join(`
`)}function uC(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function fC(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function Wa(t){return t!==""}function t0(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function n0(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const dC=/^[ \t]*#include +<([\w\d./]+)>/gm;function gh(t){return t.replace(dC,pC)}const hC=new Map;function pC(t,e){let n=je[e];if(n===void 0){const i=hC.get(e);if(i!==void 0)n=je[i],Be('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return gh(n)}const mC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function i0(t){return t.replace(mC,gC)}function gC(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function r0(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const vC={[ql]:"SHADOWMAP_TYPE_PCF",[Ga]:"SHADOWMAP_TYPE_VSM"};function _C(t){return vC[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const xC={[ss]:"ENVMAP_TYPE_CUBE",[la]:"ENVMAP_TYPE_CUBE",[tu]:"ENVMAP_TYPE_CUBE_UV"};function yC(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":xC[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const SC={[la]:"ENVMAP_MODE_REFRACTION"};function MC(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":SC[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const EC={[ix]:"ENVMAP_BLENDING_MULTIPLY",[ow]:"ENVMAP_BLENDING_MIX",[lw]:"ENVMAP_BLENDING_ADD"};function wC(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":EC[t.combine]||"ENVMAP_BLENDING_NONE"}function TC(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function bC(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=_C(n),c=yC(n),u=MC(n),h=wC(n),f=TC(n),p=cC(n),v=uC(s),E=r.createProgram();let _,d,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Wa).join(`
`),_.length>0&&(_+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Wa).join(`
`),d.length>0&&(d+=`
`)):(_=[r0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wa).join(`
`),d=[r0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Si?"#define TONE_MAPPING":"",n.toneMapping!==Si?je.tonemapping_pars_fragment:"",n.toneMapping!==Si?oC("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,sC("linearToOutputTexel",n.outputColorSpace),lC(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Wa).join(`
`)),a=gh(a),a=t0(a,n),a=n0(a,n),o=gh(o),o=t0(o,n),o=n0(o,n),a=i0(a),o=i0(o),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,_=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,d=["#define varying in",n.glslVersion===gg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===gg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const M=g+_+a,y=g+d+o,b=Jg(r,r.VERTEX_SHADER,M),w=Jg(r,r.FRAGMENT_SHADER,y);r.attachShader(E,b),r.attachShader(E,w),n.index0AttributeName!==void 0?r.bindAttribLocation(E,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(E,0,"position"),r.linkProgram(E);function A(L){if(t.debug.checkShaderErrors){const F=r.getProgramInfoLog(E)||"",$=r.getShaderInfoLog(b)||"",Y=r.getShaderInfoLog(w)||"",O=F.trim(),j=$.trim(),X=Y.trim();let U=!0,V=!0;if(r.getProgramParameter(E,r.LINK_STATUS)===!1)if(U=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,E,b,w);else{const J=e0(r,b,"vertex"),ee=e0(r,w,"fragment");nt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(E,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+O+`
`+J+`
`+ee)}else O!==""?Be("WebGLProgram: Program Info Log:",O):(j===""||X==="")&&(V=!1);V&&(L.diagnostics={runnable:U,programLog:O,vertexShader:{log:j,prefix:_},fragmentShader:{log:X,prefix:d}})}r.deleteShader(b),r.deleteShader(w),x=new ec(r,E),T=fC(r,E)}let x;this.getUniforms=function(){return x===void 0&&A(this),x};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=r.getProgramParameter(E,tC)),R},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(E),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=nC++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=b,this.fragmentShader=w,this}let AC=0;class CC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new RC(e),n.set(e,i)),i}}class RC{constructor(e){this.id=AC++,this.code=e,this.usedTimes=0}}function PC(t){return t===as||t===Rc||t===Pc}function NC(t,e,n,i,r,s){const a=new Sx,o=new CC,l=new Set,c=[],u=new Map,h=i.logarithmicDepthBuffer;let f=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){return l.add(x),x===0?"uv":`uv${x}`}function E(x,T,R,L,F,$){const Y=L.fog,O=F.geometry,j=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?L.environment:null,X=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,U=e.get(x.envMap||j,X),V=U&&U.mapping===tu?U.image.height:null,J=p[x.type];x.precision!==null&&(f=i.getMaxPrecision(x.precision),f!==x.precision&&Be("WebGLProgram.getParameters:",x.precision,"not supported, using",f,"instead."));const ee=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,le=ee!==void 0?ee.length:0;let Ie=0;O.morphAttributes.position!==void 0&&(Ie=1),O.morphAttributes.normal!==void 0&&(Ie=2),O.morphAttributes.color!==void 0&&(Ie=3);let we,Te,K,ue;if(J){const Ae=mi[J];we=Ae.vertexShader,Te=Ae.fragmentShader}else{we=x.vertexShader,Te=x.fragmentShader;const Ae=o.getVertexShaderStage(x),ot=o.getFragmentShaderStage(x);o.update(x,Ae,ot),K=Ae.id,ue=ot.id}const fe=t.getRenderTarget(),Ce=t.state.buffers.depth.getReversed(),ke=F.isInstancedMesh===!0,Ne=F.isBatchedMesh===!0,ht=!!x.map,He=!!x.matcap,Ye=!!U,et=!!x.aoMap,Ze=!!x.lightMap,St=!!x.bumpMap&&x.wireframe===!1,Ot=!!x.normalMap,It=!!x.displacementMap,Tt=!!x.emissiveMap,Mt=!!x.metalnessMap,bt=!!x.roughnessMap,z=x.anisotropy>0,rn=x.clearcoat>0,Je=x.dispersion>0,P=x.iridescence>0,S=x.sheen>0,G=x.transmission>0,q=z&&!!x.anisotropyMap,Z=rn&&!!x.clearcoatMap,he=rn&&!!x.clearcoatNormalMap,xe=rn&&!!x.clearcoatRoughnessMap,Q=P&&!!x.iridescenceMap,ne=P&&!!x.iridescenceThicknessMap,ge=S&&!!x.sheenColorMap,Le=S&&!!x.sheenRoughnessMap,ve=!!x.specularMap,ye=!!x.specularColorMap,De=!!x.specularIntensityMap,Fe=G&&!!x.transmissionMap,ze=G&&!!x.thicknessMap,k=!!x.gradientMap,Se=!!x.alphaMap,ie=x.alphaTest>0,_e=!!x.alphaHash,Me=!!x.extensions;let se=Si;x.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(se=t.toneMapping);const Re={shaderID:J,shaderType:x.type,shaderName:x.name,vertexShader:we,fragmentShader:Te,defines:x.defines,customVertexShaderID:K,customFragmentShaderID:ue,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,batching:Ne,batchingColor:Ne&&F._colorsTexture!==null,instancing:ke,instancingColor:ke&&F.instanceColor!==null,instancingMorph:ke&&F.morphTexture!==null,outputColorSpace:fe===null?t.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:Ke.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:ht,matcap:He,envMap:Ye,envMapMode:Ye&&U.mapping,envMapCubeUVHeight:V,aoMap:et,lightMap:Ze,bumpMap:St,normalMap:Ot,displacementMap:It,emissiveMap:Tt,normalMapObjectSpace:Ot&&x.normalMapType===fw,normalMapTangentSpace:Ot&&x.normalMapType===hh,packedNormalMap:Ot&&x.normalMapType===hh&&PC(x.normalMap.format),metalnessMap:Mt,roughnessMap:bt,anisotropy:z,anisotropyMap:q,clearcoat:rn,clearcoatMap:Z,clearcoatNormalMap:he,clearcoatRoughnessMap:xe,dispersion:Je,iridescence:P,iridescenceMap:Q,iridescenceThicknessMap:ne,sheen:S,sheenColorMap:ge,sheenRoughnessMap:Le,specularMap:ve,specularColorMap:ye,specularIntensityMap:De,transmission:G,transmissionMap:Fe,thicknessMap:ze,gradientMap:k,opaque:x.transparent===!1&&x.blending===Ks&&x.alphaToCoverage===!1,alphaMap:Se,alphaTest:ie,alphaHash:_e,combine:x.combine,mapUv:ht&&v(x.map.channel),aoMapUv:et&&v(x.aoMap.channel),lightMapUv:Ze&&v(x.lightMap.channel),bumpMapUv:St&&v(x.bumpMap.channel),normalMapUv:Ot&&v(x.normalMap.channel),displacementMapUv:It&&v(x.displacementMap.channel),emissiveMapUv:Tt&&v(x.emissiveMap.channel),metalnessMapUv:Mt&&v(x.metalnessMap.channel),roughnessMapUv:bt&&v(x.roughnessMap.channel),anisotropyMapUv:q&&v(x.anisotropyMap.channel),clearcoatMapUv:Z&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:he&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:Le&&v(x.sheenRoughnessMap.channel),specularMapUv:ve&&v(x.specularMap.channel),specularColorMapUv:ye&&v(x.specularColorMap.channel),specularIntensityMapUv:De&&v(x.specularIntensityMap.channel),transmissionMapUv:Fe&&v(x.transmissionMap.channel),thicknessMapUv:ze&&v(x.thicknessMap.channel),alphaMapUv:Se&&v(x.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(Ot||z),vertexNormals:!!O.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!O.attributes.uv&&(ht||Se),fog:!!Y,useFog:x.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||O.attributes.normal===void 0&&Ot===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Ce,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:Ie,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:$.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&R.length>0,shadowMapType:t.shadowMap.type,toneMapping:se,decodeVideoTexture:ht&&x.map.isVideoTexture===!0&&Ke.getTransfer(x.map.colorSpace)===ct,decodeVideoTextureEmissive:Tt&&x.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(x.emissiveMap.colorSpace)===ct,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ui,flipSided:x.side===Cn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Me&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Me&&x.extensions.multiDraw===!0||Ne)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Re.vertexUv1s=l.has(1),Re.vertexUv2s=l.has(2),Re.vertexUv3s=l.has(3),l.clear(),Re}function _(x){const T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(const R in x.defines)T.push(R),T.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(d(T,x),g(T,x),T.push(t.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function d(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function g(x,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function M(x){const T=p[x.type];let R;if(T){const L=mi[T];R=Yw.clone(L.uniforms)}else R=x.uniforms;return R}function y(x,T){let R=u.get(T);return R!==void 0?++R.usedTimes:(R=new bC(t,T,x,r),c.push(R),u.set(T,R)),R}function b(x){if(--x.usedTimes===0){const T=c.indexOf(x);c[T]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function w(x){o.remove(x)}function A(){o.dispose()}return{getParameters:E,getProgramCacheKey:_,getUniforms:M,acquireProgram:y,releaseProgram:b,releaseShaderCache:w,programs:c,dispose:A}}function LC(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function DC(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function s0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function a0(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(f){let p=0;return f.isInstancedMesh&&(p+=2),f.isSkinnedMesh&&(p+=1),p}function o(f,p,v,E,_,d){let g=t[e];return g===void 0?(g={id:f.id,object:f,geometry:p,material:v,materialVariant:a(f),groupOrder:E,renderOrder:f.renderOrder,z:_,group:d},t[e]=g):(g.id=f.id,g.object=f,g.geometry=p,g.material=v,g.materialVariant=a(f),g.groupOrder=E,g.renderOrder=f.renderOrder,g.z=_,g.group=d),e++,g}function l(f,p,v,E,_,d){const g=o(f,p,v,E,_,d);v.transmission>0?i.push(g):v.transparent===!0?r.push(g):n.push(g)}function c(f,p,v,E,_,d){const g=o(f,p,v,E,_,d);v.transmission>0?i.unshift(g):v.transparent===!0?r.unshift(g):n.unshift(g)}function u(f,p,v){n.length>1&&n.sort(f||DC),i.length>1&&i.sort(p||s0),r.length>1&&r.sort(p||s0),v&&(n.reverse(),i.reverse(),r.reverse())}function h(){for(let f=e,p=t.length;f<p;f++){const v=t[f];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:h,sort:u}}function IC(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new a0,t.set(i,[a])):r>=s.length?(a=new a0,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function UC(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new W,color:new Xe};break;case"SpotLight":n={position:new W,direction:new W,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new W,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new W,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":n={color:new Xe,position:new W,halfWidth:new W,halfHeight:new W};break}return t[e.id]=n,n}}}function FC(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let OC=0;function kC(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function BC(t){const e=new UC,n=FC(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new W);const r=new W,s=new Nt,a=new Nt;function o(c){let u=0,h=0,f=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let p=0,v=0,E=0,_=0,d=0,g=0,M=0,y=0,b=0,w=0,A=0;c.sort(kC);for(let T=0,R=c.length;T<R;T++){const L=c[T],F=L.color,$=L.intensity,Y=L.distance;let O=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===as?O=L.shadow.map.texture:O=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)u+=F.r*$,h+=F.g*$,f+=F.b*$;else if(L.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(L.sh.coefficients[j],$);A++}else if(L.isDirectionalLight){const j=e.get(L);if(j.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const X=L.shadow,U=n.get(L);U.shadowIntensity=X.intensity,U.shadowBias=X.bias,U.shadowNormalBias=X.normalBias,U.shadowRadius=X.radius,U.shadowMapSize=X.mapSize,i.directionalShadow[p]=U,i.directionalShadowMap[p]=O,i.directionalShadowMatrix[p]=L.shadow.matrix,g++}i.directional[p]=j,p++}else if(L.isSpotLight){const j=e.get(L);j.position.setFromMatrixPosition(L.matrixWorld),j.color.copy(F).multiplyScalar($),j.distance=Y,j.coneCos=Math.cos(L.angle),j.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),j.decay=L.decay,i.spot[E]=j;const X=L.shadow;if(L.map&&(i.spotLightMap[b]=L.map,b++,X.updateMatrices(L),L.castShadow&&w++),i.spotLightMatrix[E]=X.matrix,L.castShadow){const U=n.get(L);U.shadowIntensity=X.intensity,U.shadowBias=X.bias,U.shadowNormalBias=X.normalBias,U.shadowRadius=X.radius,U.shadowMapSize=X.mapSize,i.spotShadow[E]=U,i.spotShadowMap[E]=O,y++}E++}else if(L.isRectAreaLight){const j=e.get(L);j.color.copy(F).multiplyScalar($),j.halfWidth.set(L.width*.5,0,0),j.halfHeight.set(0,L.height*.5,0),i.rectArea[_]=j,_++}else if(L.isPointLight){const j=e.get(L);if(j.color.copy(L.color).multiplyScalar(L.intensity),j.distance=L.distance,j.decay=L.decay,L.castShadow){const X=L.shadow,U=n.get(L);U.shadowIntensity=X.intensity,U.shadowBias=X.bias,U.shadowNormalBias=X.normalBias,U.shadowRadius=X.radius,U.shadowMapSize=X.mapSize,U.shadowCameraNear=X.camera.near,U.shadowCameraFar=X.camera.far,i.pointShadow[v]=U,i.pointShadowMap[v]=O,i.pointShadowMatrix[v]=L.shadow.matrix,M++}i.point[v]=j,v++}else if(L.isHemisphereLight){const j=e.get(L);j.skyColor.copy(L.color).multiplyScalar($),j.groundColor.copy(L.groundColor).multiplyScalar($),i.hemi[d]=j,d++}}_>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ee.LTC_FLOAT_1,i.rectAreaLTC2=Ee.LTC_FLOAT_2):(i.rectAreaLTC1=Ee.LTC_HALF_1,i.rectAreaLTC2=Ee.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const x=i.hash;(x.directionalLength!==p||x.pointLength!==v||x.spotLength!==E||x.rectAreaLength!==_||x.hemiLength!==d||x.numDirectionalShadows!==g||x.numPointShadows!==M||x.numSpotShadows!==y||x.numSpotMaps!==b||x.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=E,i.rectArea.length=_,i.point.length=v,i.hemi.length=d,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=y+b-w,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=A,x.directionalLength=p,x.pointLength=v,x.spotLength=E,x.rectAreaLength=_,x.hemiLength=d,x.numDirectionalShadows=g,x.numPointShadows=M,x.numSpotShadows=y,x.numSpotMaps=b,x.numLightProbes=A,i.version=OC++)}function l(c,u){let h=0,f=0,p=0,v=0,E=0;const _=u.matrixWorldInverse;for(let d=0,g=c.length;d<g;d++){const M=c[d];if(M.isDirectionalLight){const y=i.directional[h];y.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(_),h++}else if(M.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(_),y.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(_),p++}else if(M.isRectAreaLight){const y=i.rectArea[v];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(_),a.identity(),s.copy(M.matrixWorld),s.premultiply(_),a.extractRotation(s),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),v++}else if(M.isPointLight){const y=i.point[f];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(_),f++}else if(M.isHemisphereLight){const y=i.hemi[E];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(_),E++}}}return{setup:o,setupView:l,state:i}}function o0(t){const e=new BC(t),n=[],i=[],r=[];function s(f){h.camera=f,n.length=0,i.length=0,r.length=0}function a(f){n.push(f)}function o(f){i.push(f)}function l(f){r.push(f)}function c(){e.setup(n)}function u(f){e.setupView(n,f)}const h={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function zC(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new o0(t),e.set(r,[o])):s>=a.length?(o=new o0(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const VC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,HC=`uniform sampler2D shadow_pass;
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
}`,GC=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],WC=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],l0=new Nt,Fa=new W,xf=new W;function jC(t,e,n){let i=new Ip;const r=new Ve,s=new Ve,a=new Rt,o=new e1,l=new t1,c={},u=n.maxTextureSize,h={[Cr]:Cn,[Cn]:Cr,[Ui]:Ui},f=new Ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:VC,fragmentShader:HC}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const v=new Hn;v.setAttribute("position",new Yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new wi(v,f),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ql;let d=this.type;this.render=function(w,A,x){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||w.length===0)return;this.type===nx&&(Be("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ql);const T=t.getRenderTarget(),R=t.getActiveCubeFace(),L=t.getActiveMipmapLevel(),F=t.state;F.setBlending(zi),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const $=d!==this.type;$&&A.traverse(function(Y){Y.material&&(Array.isArray(Y.material)?Y.material.forEach(O=>O.needsUpdate=!0):Y.material.needsUpdate=!0)});for(let Y=0,O=w.length;Y<O;Y++){const j=w[Y],X=j.shadow;if(X===void 0){Be("WebGLShadowMap:",j,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const U=X.getFrameExtents();r.multiply(U),s.copy(X.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/U.x),r.x=s.x*U.x,X.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/U.y),r.y=s.y*U.y,X.mapSize.y=s.y));const V=t.state.buffers.depth.getReversed();if(X.camera._reversedDepth=V,X.map===null||$===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===Ga){if(j.isPointLight){Be("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new Mi(r.x,r.y,{format:as,type:qi,minFilter:un,magFilter:un,generateMipmaps:!1}),X.map.texture.name=j.name+".shadowMap",X.map.depthTexture=new ca(r.x,r.y,vi),X.map.depthTexture.name=j.name+".shadowMapDepth",X.map.depthTexture.format=Yi,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Qt,X.map.depthTexture.magFilter=Qt}else j.isPointLight?(X.map=new Fx(r.x),X.map.depthTexture=new $w(r.x,Ei)):(X.map=new Mi(r.x,r.y),X.map.depthTexture=new ca(r.x,r.y,Ei)),X.map.depthTexture.name=j.name+".shadowMap",X.map.depthTexture.format=Yi,this.type===ql?(X.map.depthTexture.compareFunction=V?Pp:Rp,X.map.depthTexture.minFilter=un,X.map.depthTexture.magFilter=un):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Qt,X.map.depthTexture.magFilter=Qt);X.camera.updateProjectionMatrix()}const J=X.map.isWebGLCubeRenderTarget?6:1;for(let ee=0;ee<J;ee++){if(X.map.isWebGLCubeRenderTarget)t.setRenderTarget(X.map,ee),t.clear();else{ee===0&&(t.setRenderTarget(X.map),t.clear());const le=X.getViewport(ee);a.set(s.x*le.x,s.y*le.y,s.x*le.z,s.y*le.w),F.viewport(a)}if(j.isPointLight){const le=X.camera,Ie=X.matrix,we=j.distance||le.far;we!==le.far&&(le.far=we,le.updateProjectionMatrix()),Fa.setFromMatrixPosition(j.matrixWorld),le.position.copy(Fa),xf.copy(le.position),xf.add(GC[ee]),le.up.copy(WC[ee]),le.lookAt(xf),le.updateMatrixWorld(),Ie.makeTranslation(-Fa.x,-Fa.y,-Fa.z),l0.multiplyMatrices(le.projectionMatrix,le.matrixWorldInverse),X._frustum.setFromProjectionMatrix(l0,le.coordinateSystem,le.reversedDepth)}else X.updateMatrices(j);i=X.getFrustum(),y(A,x,X.camera,j,this.type)}X.isPointLightShadow!==!0&&this.type===Ga&&g(X,x),X.needsUpdate=!1}d=this.type,_.needsUpdate=!1,t.setRenderTarget(T,R,L)};function g(w,A){const x=e.update(E);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Mi(r.x,r.y,{format:as,type:qi})),f.uniforms.shadow_pass.value=w.map.depthTexture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,t.setRenderTarget(w.mapPass),t.clear(),t.renderBufferDirect(A,null,x,f,E,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,t.setRenderTarget(w.map),t.clear(),t.renderBufferDirect(A,null,x,p,E,null)}function M(w,A,x,T){let R=null;const L=x.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)R=L;else if(R=x.isPointLight===!0?l:o,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const F=R.uuid,$=A.uuid;let Y=c[F];Y===void 0&&(Y={},c[F]=Y);let O=Y[$];O===void 0&&(O=R.clone(),Y[$]=O,A.addEventListener("dispose",b)),R=O}if(R.visible=A.visible,R.wireframe=A.wireframe,T===Ga?R.side=A.shadowSide!==null?A.shadowSide:A.side:R.side=A.shadowSide!==null?A.shadowSide:h[A.side],R.alphaMap=A.alphaMap,R.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,R.map=A.map,R.clipShadows=A.clipShadows,R.clippingPlanes=A.clippingPlanes,R.clipIntersection=A.clipIntersection,R.displacementMap=A.displacementMap,R.displacementScale=A.displacementScale,R.displacementBias=A.displacementBias,R.wireframeLinewidth=A.wireframeLinewidth,R.linewidth=A.linewidth,x.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const F=t.properties.get(R);F.light=x}return R}function y(w,A,x,T,R){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&R===Ga)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,w.matrixWorld);const $=e.update(w),Y=w.material;if(Array.isArray(Y)){const O=$.groups;for(let j=0,X=O.length;j<X;j++){const U=O[j],V=Y[U.materialIndex];if(V&&V.visible){const J=M(w,V,T,R);w.onBeforeShadow(t,w,A,x,$,J,U),t.renderBufferDirect(x,null,$,J,w,U),w.onAfterShadow(t,w,A,x,$,J,U)}}}else if(Y.visible){const O=M(w,Y,T,R);w.onBeforeShadow(t,w,A,x,$,O,null),t.renderBufferDirect(x,null,$,O,w,null),w.onAfterShadow(t,w,A,x,$,O,null)}}const F=w.children;for(let $=0,Y=F.length;$<Y;$++)y(F[$],A,x,T,R)}function b(w){w.target.removeEventListener("dispose",b);for(const x in c){const T=c[x],R=w.target.uuid;R in T&&(T[R].dispose(),delete T[R])}}}function XC(t,e){function n(){let k=!1;const Se=new Rt;let ie=null;const _e=new Rt(0,0,0,0);return{setMask:function(Me){ie!==Me&&!k&&(t.colorMask(Me,Me,Me,Me),ie=Me)},setLocked:function(Me){k=Me},setClear:function(Me,se,Re,Ae,ot){ot===!0&&(Me*=Ae,se*=Ae,Re*=Ae),Se.set(Me,se,Re,Ae),_e.equals(Se)===!1&&(t.clearColor(Me,se,Re,Ae),_e.copy(Se))},reset:function(){k=!1,ie=null,_e.set(-1,0,0,0)}}}function i(){let k=!1,Se=!1,ie=null,_e=null,Me=null;return{setReversed:function(se){if(Se!==se){const Re=e.get("EXT_clip_control");se?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),Se=se;const Ae=Me;Me=null,this.setClear(Ae)}},getReversed:function(){return Se},setTest:function(se){se?fe(t.DEPTH_TEST):Ce(t.DEPTH_TEST)},setMask:function(se){ie!==se&&!k&&(t.depthMask(se),ie=se)},setFunc:function(se){if(Se&&(se=Sw[se]),_e!==se){switch(se){case Rd:t.depthFunc(t.NEVER);break;case Pd:t.depthFunc(t.ALWAYS);break;case Nd:t.depthFunc(t.LESS);break;case oa:t.depthFunc(t.LEQUAL);break;case Ld:t.depthFunc(t.EQUAL);break;case Dd:t.depthFunc(t.GEQUAL);break;case Id:t.depthFunc(t.GREATER);break;case Ud:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}_e=se}},setLocked:function(se){k=se},setClear:function(se){Me!==se&&(Me=se,Se&&(se=1-se),t.clearDepth(se))},reset:function(){k=!1,ie=null,_e=null,Me=null,Se=!1}}}function r(){let k=!1,Se=null,ie=null,_e=null,Me=null,se=null,Re=null,Ae=null,ot=null;return{setTest:function(ft){k||(ft?fe(t.STENCIL_TEST):Ce(t.STENCIL_TEST))},setMask:function(ft){Se!==ft&&!k&&(t.stencilMask(ft),Se=ft)},setFunc:function(ft,yn,Ut){(ie!==ft||_e!==yn||Me!==Ut)&&(t.stencilFunc(ft,yn,Ut),ie=ft,_e=yn,Me=Ut)},setOp:function(ft,yn,Ut){(se!==ft||Re!==yn||Ae!==Ut)&&(t.stencilOp(ft,yn,Ut),se=ft,Re=yn,Ae=Ut)},setLocked:function(ft){k=ft},setClear:function(ft){ot!==ft&&(t.clearStencil(ft),ot=ft)},reset:function(){k=!1,Se=null,ie=null,_e=null,Me=null,se=null,Re=null,Ae=null,ot=null}}}const s=new n,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let u={},h={},f={},p=new WeakMap,v=[],E=null,_=!1,d=null,g=null,M=null,y=null,b=null,w=null,A=null,x=new Xe(0,0,0),T=0,R=!1,L=null,F=null,$=null,Y=null,O=null;const j=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,U=0;const V=t.getParameter(t.VERSION);V.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(V)[1]),X=U>=1):V.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),X=U>=2);let J=null,ee={};const le=t.getParameter(t.SCISSOR_BOX),Ie=t.getParameter(t.VIEWPORT),we=new Rt().fromArray(le),Te=new Rt().fromArray(Ie);function K(k,Se,ie,_e){const Me=new Uint8Array(4),se=t.createTexture();t.bindTexture(k,se),t.texParameteri(k,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(k,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Re=0;Re<ie;Re++)k===t.TEXTURE_3D||k===t.TEXTURE_2D_ARRAY?t.texImage3D(Se,0,t.RGBA,1,1,_e,0,t.RGBA,t.UNSIGNED_BYTE,Me):t.texImage2D(Se+Re,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Me);return se}const ue={};ue[t.TEXTURE_2D]=K(t.TEXTURE_2D,t.TEXTURE_2D,1),ue[t.TEXTURE_CUBE_MAP]=K(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[t.TEXTURE_2D_ARRAY]=K(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ue[t.TEXTURE_3D]=K(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),fe(t.DEPTH_TEST),a.setFunc(oa),St(!1),Ot(ug),fe(t.CULL_FACE),et(zi);function fe(k){u[k]!==!0&&(t.enable(k),u[k]=!0)}function Ce(k){u[k]!==!1&&(t.disable(k),u[k]=!1)}function ke(k,Se){return f[k]!==Se?(t.bindFramebuffer(k,Se),f[k]=Se,k===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=Se),k===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=Se),!0):!1}function Ne(k,Se){let ie=v,_e=!1;if(k){ie=p.get(Se),ie===void 0&&(ie=[],p.set(Se,ie));const Me=k.textures;if(ie.length!==Me.length||ie[0]!==t.COLOR_ATTACHMENT0){for(let se=0,Re=Me.length;se<Re;se++)ie[se]=t.COLOR_ATTACHMENT0+se;ie.length=Me.length,_e=!0}}else ie[0]!==t.BACK&&(ie[0]=t.BACK,_e=!0);_e&&t.drawBuffers(ie)}function ht(k){return E!==k?(t.useProgram(k),E=k,!0):!1}const He={[Gr]:t.FUNC_ADD,[WE]:t.FUNC_SUBTRACT,[jE]:t.FUNC_REVERSE_SUBTRACT};He[XE]=t.MIN,He[$E]=t.MAX;const Ye={[qE]:t.ZERO,[YE]:t.ONE,[KE]:t.SRC_COLOR,[Ad]:t.SRC_ALPHA,[nw]:t.SRC_ALPHA_SATURATE,[ew]:t.DST_COLOR,[JE]:t.DST_ALPHA,[ZE]:t.ONE_MINUS_SRC_COLOR,[Cd]:t.ONE_MINUS_SRC_ALPHA,[tw]:t.ONE_MINUS_DST_COLOR,[QE]:t.ONE_MINUS_DST_ALPHA,[iw]:t.CONSTANT_COLOR,[rw]:t.ONE_MINUS_CONSTANT_COLOR,[sw]:t.CONSTANT_ALPHA,[aw]:t.ONE_MINUS_CONSTANT_ALPHA};function et(k,Se,ie,_e,Me,se,Re,Ae,ot,ft){if(k===zi){_===!0&&(Ce(t.BLEND),_=!1);return}if(_===!1&&(fe(t.BLEND),_=!0),k!==GE){if(k!==d||ft!==R){if((g!==Gr||b!==Gr)&&(t.blendEquation(t.FUNC_ADD),g=Gr,b=Gr),ft)switch(k){case Ks:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case fg:t.blendFunc(t.ONE,t.ONE);break;case dg:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case hg:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:nt("WebGLState: Invalid blending: ",k);break}else switch(k){case Ks:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case fg:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case dg:nt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case hg:nt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:nt("WebGLState: Invalid blending: ",k);break}M=null,y=null,w=null,A=null,x.set(0,0,0),T=0,d=k,R=ft}return}Me=Me||Se,se=se||ie,Re=Re||_e,(Se!==g||Me!==b)&&(t.blendEquationSeparate(He[Se],He[Me]),g=Se,b=Me),(ie!==M||_e!==y||se!==w||Re!==A)&&(t.blendFuncSeparate(Ye[ie],Ye[_e],Ye[se],Ye[Re]),M=ie,y=_e,w=se,A=Re),(Ae.equals(x)===!1||ot!==T)&&(t.blendColor(Ae.r,Ae.g,Ae.b,ot),x.copy(Ae),T=ot),d=k,R=!1}function Ze(k,Se){k.side===Ui?Ce(t.CULL_FACE):fe(t.CULL_FACE);let ie=k.side===Cn;Se&&(ie=!ie),St(ie),k.blending===Ks&&k.transparent===!1?et(zi):et(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),a.setFunc(k.depthFunc),a.setTest(k.depthTest),a.setMask(k.depthWrite),s.setMask(k.colorWrite);const _e=k.stencilWrite;o.setTest(_e),_e&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Tt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?fe(t.SAMPLE_ALPHA_TO_COVERAGE):Ce(t.SAMPLE_ALPHA_TO_COVERAGE)}function St(k){L!==k&&(k?t.frontFace(t.CW):t.frontFace(t.CCW),L=k)}function Ot(k){k!==VE?(fe(t.CULL_FACE),k!==F&&(k===ug?t.cullFace(t.BACK):k===HE?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ce(t.CULL_FACE),F=k}function It(k){k!==$&&(X&&t.lineWidth(k),$=k)}function Tt(k,Se,ie){k?(fe(t.POLYGON_OFFSET_FILL),(Y!==Se||O!==ie)&&(Y=Se,O=ie,a.getReversed()&&(Se=-Se),t.polygonOffset(Se,ie))):Ce(t.POLYGON_OFFSET_FILL)}function Mt(k){k?fe(t.SCISSOR_TEST):Ce(t.SCISSOR_TEST)}function bt(k){k===void 0&&(k=t.TEXTURE0+j-1),J!==k&&(t.activeTexture(k),J=k)}function z(k,Se,ie){ie===void 0&&(J===null?ie=t.TEXTURE0+j-1:ie=J);let _e=ee[ie];_e===void 0&&(_e={type:void 0,texture:void 0},ee[ie]=_e),(_e.type!==k||_e.texture!==Se)&&(J!==ie&&(t.activeTexture(ie),J=ie),t.bindTexture(k,Se||ue[k]),_e.type=k,_e.texture=Se)}function rn(){const k=ee[J];k!==void 0&&k.type!==void 0&&(t.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function Je(){try{t.compressedTexImage2D(...arguments)}catch(k){nt("WebGLState:",k)}}function P(){try{t.compressedTexImage3D(...arguments)}catch(k){nt("WebGLState:",k)}}function S(){try{t.texSubImage2D(...arguments)}catch(k){nt("WebGLState:",k)}}function G(){try{t.texSubImage3D(...arguments)}catch(k){nt("WebGLState:",k)}}function q(){try{t.compressedTexSubImage2D(...arguments)}catch(k){nt("WebGLState:",k)}}function Z(){try{t.compressedTexSubImage3D(...arguments)}catch(k){nt("WebGLState:",k)}}function he(){try{t.texStorage2D(...arguments)}catch(k){nt("WebGLState:",k)}}function xe(){try{t.texStorage3D(...arguments)}catch(k){nt("WebGLState:",k)}}function Q(){try{t.texImage2D(...arguments)}catch(k){nt("WebGLState:",k)}}function ne(){try{t.texImage3D(...arguments)}catch(k){nt("WebGLState:",k)}}function ge(k){return h[k]!==void 0?h[k]:t.getParameter(k)}function Le(k,Se){h[k]!==Se&&(t.pixelStorei(k,Se),h[k]=Se)}function ve(k){we.equals(k)===!1&&(t.scissor(k.x,k.y,k.z,k.w),we.copy(k))}function ye(k){Te.equals(k)===!1&&(t.viewport(k.x,k.y,k.z,k.w),Te.copy(k))}function De(k,Se){let ie=c.get(Se);ie===void 0&&(ie=new WeakMap,c.set(Se,ie));let _e=ie.get(k);_e===void 0&&(_e=t.getUniformBlockIndex(Se,k.name),ie.set(k,_e))}function Fe(k,Se){const _e=c.get(Se).get(k);l.get(Se)!==_e&&(t.uniformBlockBinding(Se,_e,k.__bindingPointIndex),l.set(Se,_e))}function ze(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),u={},h={},J=null,ee={},f={},p=new WeakMap,v=[],E=null,_=!1,d=null,g=null,M=null,y=null,b=null,w=null,A=null,x=new Xe(0,0,0),T=0,R=!1,L=null,F=null,$=null,Y=null,O=null,we.set(0,0,t.canvas.width,t.canvas.height),Te.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:fe,disable:Ce,bindFramebuffer:ke,drawBuffers:Ne,useProgram:ht,setBlending:et,setMaterial:Ze,setFlipSided:St,setCullFace:Ot,setLineWidth:It,setPolygonOffset:Tt,setScissorTest:Mt,activeTexture:bt,bindTexture:z,unbindTexture:rn,compressedTexImage2D:Je,compressedTexImage3D:P,texImage2D:Q,texImage3D:ne,pixelStorei:Le,getParameter:ge,updateUBOMapping:De,uniformBlockBinding:Fe,texStorage2D:he,texStorage3D:xe,texSubImage2D:S,texSubImage3D:G,compressedTexSubImage2D:q,compressedTexSubImage3D:Z,scissor:ve,viewport:ye,reset:ze}}function $C(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ve,u=new WeakMap,h=new Set;let f;const p=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(P,S){return v?new OffscreenCanvas(P,S):Dc("canvas")}function _(P,S,G){let q=1;const Z=Je(P);if((Z.width>G||Z.height>G)&&(q=G/Math.max(Z.width,Z.height)),q<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const he=Math.floor(q*Z.width),xe=Math.floor(q*Z.height);f===void 0&&(f=E(he,xe));const Q=S?E(he,xe):f;return Q.width=he,Q.height=xe,Q.getContext("2d").drawImage(P,0,0,he,xe),Be("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+he+"x"+xe+")."),Q}else return"data"in P&&Be("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),P;return P}function d(P){return P.generateMipmaps}function g(P){t.generateMipmap(P)}function M(P){return P.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?t.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function y(P,S,G,q,Z,he=!1){if(P!==null){if(t[P]!==void 0)return t[P];Be("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let xe;q&&(xe=e.get("EXT_texture_norm16"),xe||Be("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=S;if(S===t.RED&&(G===t.FLOAT&&(Q=t.R32F),G===t.HALF_FLOAT&&(Q=t.R16F),G===t.UNSIGNED_BYTE&&(Q=t.R8),G===t.UNSIGNED_SHORT&&xe&&(Q=xe.R16_EXT),G===t.SHORT&&xe&&(Q=xe.R16_SNORM_EXT)),S===t.RED_INTEGER&&(G===t.UNSIGNED_BYTE&&(Q=t.R8UI),G===t.UNSIGNED_SHORT&&(Q=t.R16UI),G===t.UNSIGNED_INT&&(Q=t.R32UI),G===t.BYTE&&(Q=t.R8I),G===t.SHORT&&(Q=t.R16I),G===t.INT&&(Q=t.R32I)),S===t.RG&&(G===t.FLOAT&&(Q=t.RG32F),G===t.HALF_FLOAT&&(Q=t.RG16F),G===t.UNSIGNED_BYTE&&(Q=t.RG8),G===t.UNSIGNED_SHORT&&xe&&(Q=xe.RG16_EXT),G===t.SHORT&&xe&&(Q=xe.RG16_SNORM_EXT)),S===t.RG_INTEGER&&(G===t.UNSIGNED_BYTE&&(Q=t.RG8UI),G===t.UNSIGNED_SHORT&&(Q=t.RG16UI),G===t.UNSIGNED_INT&&(Q=t.RG32UI),G===t.BYTE&&(Q=t.RG8I),G===t.SHORT&&(Q=t.RG16I),G===t.INT&&(Q=t.RG32I)),S===t.RGB_INTEGER&&(G===t.UNSIGNED_BYTE&&(Q=t.RGB8UI),G===t.UNSIGNED_SHORT&&(Q=t.RGB16UI),G===t.UNSIGNED_INT&&(Q=t.RGB32UI),G===t.BYTE&&(Q=t.RGB8I),G===t.SHORT&&(Q=t.RGB16I),G===t.INT&&(Q=t.RGB32I)),S===t.RGBA_INTEGER&&(G===t.UNSIGNED_BYTE&&(Q=t.RGBA8UI),G===t.UNSIGNED_SHORT&&(Q=t.RGBA16UI),G===t.UNSIGNED_INT&&(Q=t.RGBA32UI),G===t.BYTE&&(Q=t.RGBA8I),G===t.SHORT&&(Q=t.RGBA16I),G===t.INT&&(Q=t.RGBA32I)),S===t.RGB&&(G===t.UNSIGNED_SHORT&&xe&&(Q=xe.RGB16_EXT),G===t.SHORT&&xe&&(Q=xe.RGB16_SNORM_EXT),G===t.UNSIGNED_INT_5_9_9_9_REV&&(Q=t.RGB9_E5),G===t.UNSIGNED_INT_10F_11F_11F_REV&&(Q=t.R11F_G11F_B10F)),S===t.RGBA){const ne=he?Lc:Ke.getTransfer(Z);G===t.FLOAT&&(Q=t.RGBA32F),G===t.HALF_FLOAT&&(Q=t.RGBA16F),G===t.UNSIGNED_BYTE&&(Q=ne===ct?t.SRGB8_ALPHA8:t.RGBA8),G===t.UNSIGNED_SHORT&&xe&&(Q=xe.RGBA16_EXT),G===t.SHORT&&xe&&(Q=xe.RGBA16_SNORM_EXT),G===t.UNSIGNED_SHORT_4_4_4_4&&(Q=t.RGBA4),G===t.UNSIGNED_SHORT_5_5_5_1&&(Q=t.RGB5_A1)}return(Q===t.R16F||Q===t.R32F||Q===t.RG16F||Q===t.RG32F||Q===t.RGBA16F||Q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function b(P,S){let G;return P?S===null||S===Ei||S===Eo?G=t.DEPTH24_STENCIL8:S===vi?G=t.DEPTH32F_STENCIL8:S===Mo&&(G=t.DEPTH24_STENCIL8,Be("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ei||S===Eo?G=t.DEPTH_COMPONENT24:S===vi?G=t.DEPTH_COMPONENT32F:S===Mo&&(G=t.DEPTH_COMPONENT16),G}function w(P,S){return d(P)===!0||P.isFramebufferTexture&&P.minFilter!==Qt&&P.minFilter!==un?Math.log2(Math.max(S.width,S.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?S.mipmaps.length:1}function A(P){const S=P.target;S.removeEventListener("dispose",A),T(S),S.isVideoTexture&&u.delete(S),S.isHTMLTexture&&h.delete(S)}function x(P){const S=P.target;S.removeEventListener("dispose",x),L(S)}function T(P){const S=i.get(P);if(S.__webglInit===void 0)return;const G=P.source,q=p.get(G);if(q){const Z=q[S.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&R(P),Object.keys(q).length===0&&p.delete(G)}i.remove(P)}function R(P){const S=i.get(P);t.deleteTexture(S.__webglTexture);const G=P.source,q=p.get(G);delete q[S.__cacheKey],a.memory.textures--}function L(P){const S=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(S.__webglFramebuffer[q]))for(let Z=0;Z<S.__webglFramebuffer[q].length;Z++)t.deleteFramebuffer(S.__webglFramebuffer[q][Z]);else t.deleteFramebuffer(S.__webglFramebuffer[q]);S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer[q])}else{if(Array.isArray(S.__webglFramebuffer))for(let q=0;q<S.__webglFramebuffer.length;q++)t.deleteFramebuffer(S.__webglFramebuffer[q]);else t.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&t.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let q=0;q<S.__webglColorRenderbuffer.length;q++)S.__webglColorRenderbuffer[q]&&t.deleteRenderbuffer(S.__webglColorRenderbuffer[q]);S.__webglDepthRenderbuffer&&t.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const G=P.textures;for(let q=0,Z=G.length;q<Z;q++){const he=i.get(G[q]);he.__webglTexture&&(t.deleteTexture(he.__webglTexture),a.memory.textures--),i.remove(G[q])}i.remove(P)}let F=0;function $(){F=0}function Y(){return F}function O(P){F=P}function j(){const P=F;return P>=r.maxTextures&&Be("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),F+=1,P}function X(P){const S=[];return S.push(P.wrapS),S.push(P.wrapT),S.push(P.wrapR||0),S.push(P.magFilter),S.push(P.minFilter),S.push(P.anisotropy),S.push(P.internalFormat),S.push(P.format),S.push(P.type),S.push(P.generateMipmaps),S.push(P.premultiplyAlpha),S.push(P.flipY),S.push(P.unpackAlignment),S.push(P.colorSpace),S.join()}function U(P,S){const G=i.get(P);if(P.isVideoTexture&&z(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&G.__version!==P.version){const q=P.image;if(q===null)Be("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Be("WebGLRenderer: Texture marked for update but image is incomplete");else{Ce(G,P,S);return}}else P.isExternalTexture&&(G.__webglTexture=P.sourceTexture?P.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,G.__webglTexture,t.TEXTURE0+S)}function V(P,S){const G=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){Ce(G,P,S);return}else P.isExternalTexture&&(G.__webglTexture=P.sourceTexture?P.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,G.__webglTexture,t.TEXTURE0+S)}function J(P,S){const G=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){Ce(G,P,S);return}n.bindTexture(t.TEXTURE_3D,G.__webglTexture,t.TEXTURE0+S)}function ee(P,S){const G=i.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&G.__version!==P.version){ke(G,P,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,G.__webglTexture,t.TEXTURE0+S)}const le={[Cc]:t.REPEAT,[ki]:t.CLAMP_TO_EDGE,[Fd]:t.MIRRORED_REPEAT},Ie={[Qt]:t.NEAREST,[cw]:t.NEAREST_MIPMAP_NEAREST,[ll]:t.NEAREST_MIPMAP_LINEAR,[un]:t.LINEAR,[Hu]:t.LINEAR_MIPMAP_NEAREST,[qr]:t.LINEAR_MIPMAP_LINEAR},we={[dw]:t.NEVER,[vw]:t.ALWAYS,[hw]:t.LESS,[Rp]:t.LEQUAL,[pw]:t.EQUAL,[Pp]:t.GEQUAL,[mw]:t.GREATER,[gw]:t.NOTEQUAL};function Te(P,S){if(S.type===vi&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===un||S.magFilter===Hu||S.magFilter===ll||S.magFilter===qr||S.minFilter===un||S.minFilter===Hu||S.minFilter===ll||S.minFilter===qr)&&Be("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(P,t.TEXTURE_WRAP_S,le[S.wrapS]),t.texParameteri(P,t.TEXTURE_WRAP_T,le[S.wrapT]),(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)&&t.texParameteri(P,t.TEXTURE_WRAP_R,le[S.wrapR]),t.texParameteri(P,t.TEXTURE_MAG_FILTER,Ie[S.magFilter]),t.texParameteri(P,t.TEXTURE_MIN_FILTER,Ie[S.minFilter]),S.compareFunction&&(t.texParameteri(P,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(P,t.TEXTURE_COMPARE_FUNC,we[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Qt||S.minFilter!==ll&&S.minFilter!==qr||S.type===vi&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");t.texParameterf(P,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function K(P,S){let G=!1;P.__webglInit===void 0&&(P.__webglInit=!0,S.addEventListener("dispose",A));const q=S.source;let Z=p.get(q);Z===void 0&&(Z={},p.set(q,Z));const he=X(S);if(he!==P.__cacheKey){Z[he]===void 0&&(Z[he]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,G=!0),Z[he].usedTimes++;const xe=Z[P.__cacheKey];xe!==void 0&&(Z[P.__cacheKey].usedTimes--,xe.usedTimes===0&&R(S)),P.__cacheKey=he,P.__webglTexture=Z[he].texture}return G}function ue(P,S,G){return Math.floor(Math.floor(P/G)/S)}function fe(P,S,G,q){const he=P.updateRanges;if(he.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,S.width,S.height,G,q,S.data);else{he.sort((Le,ve)=>Le.start-ve.start);let xe=0;for(let Le=1;Le<he.length;Le++){const ve=he[xe],ye=he[Le],De=ve.start+ve.count,Fe=ue(ye.start,S.width,4),ze=ue(ve.start,S.width,4);ye.start<=De+1&&Fe===ze&&ue(ye.start+ye.count-1,S.width,4)===Fe?ve.count=Math.max(ve.count,ye.start+ye.count-ve.start):(++xe,he[xe]=ye)}he.length=xe+1;const Q=n.getParameter(t.UNPACK_ROW_LENGTH),ne=n.getParameter(t.UNPACK_SKIP_PIXELS),ge=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,S.width);for(let Le=0,ve=he.length;Le<ve;Le++){const ye=he[Le],De=Math.floor(ye.start/4),Fe=Math.ceil(ye.count/4),ze=De%S.width,k=Math.floor(De/S.width),Se=Fe,ie=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,ze),n.pixelStorei(t.UNPACK_SKIP_ROWS,k),n.texSubImage2D(t.TEXTURE_2D,0,ze,k,Se,ie,G,q,S.data)}P.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,Q),n.pixelStorei(t.UNPACK_SKIP_PIXELS,ne),n.pixelStorei(t.UNPACK_SKIP_ROWS,ge)}}function Ce(P,S,G){let q=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(q=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(q=t.TEXTURE_3D);const Z=K(P,S),he=S.source;n.bindTexture(q,P.__webglTexture,t.TEXTURE0+G);const xe=i.get(he);if(he.version!==xe.__version||Z===!0){if(n.activeTexture(t.TEXTURE0+G),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){const ie=Ke.getPrimaries(Ke.workingColorSpace),_e=S.colorSpace===hr?null:Ke.getPrimaries(S.colorSpace),Me=S.colorSpace===hr||ie===_e?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me)}n.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment);let ne=_(S.image,!1,r.maxTextureSize);ne=rn(S,ne);const ge=s.convert(S.format,S.colorSpace),Le=s.convert(S.type);let ve=y(S.internalFormat,ge,Le,S.normalized,S.colorSpace,S.isVideoTexture);Te(q,S);let ye;const De=S.mipmaps,Fe=S.isVideoTexture!==!0,ze=xe.__version===void 0||Z===!0,k=he.dataReady,Se=w(S,ne);if(S.isDepthTexture)ve=b(S.format===Yr,S.type),ze&&(Fe?n.texStorage2D(t.TEXTURE_2D,1,ve,ne.width,ne.height):n.texImage2D(t.TEXTURE_2D,0,ve,ne.width,ne.height,0,ge,Le,null));else if(S.isDataTexture)if(De.length>0){Fe&&ze&&n.texStorage2D(t.TEXTURE_2D,Se,ve,De[0].width,De[0].height);for(let ie=0,_e=De.length;ie<_e;ie++)ye=De[ie],Fe?k&&n.texSubImage2D(t.TEXTURE_2D,ie,0,0,ye.width,ye.height,ge,Le,ye.data):n.texImage2D(t.TEXTURE_2D,ie,ve,ye.width,ye.height,0,ge,Le,ye.data);S.generateMipmaps=!1}else Fe?(ze&&n.texStorage2D(t.TEXTURE_2D,Se,ve,ne.width,ne.height),k&&fe(S,ne,ge,Le)):n.texImage2D(t.TEXTURE_2D,0,ve,ne.width,ne.height,0,ge,Le,ne.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Fe&&ze&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Se,ve,De[0].width,De[0].height,ne.depth);for(let ie=0,_e=De.length;ie<_e;ie++)if(ye=De[ie],S.format!==ai)if(ge!==null)if(Fe){if(k)if(S.layerUpdates.size>0){const Me=Bg(ye.width,ye.height,S.format,S.type);for(const se of S.layerUpdates){const Re=ye.data.subarray(se*Me/ye.data.BYTES_PER_ELEMENT,(se+1)*Me/ye.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,se,ye.width,ye.height,1,ge,Re)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,0,ye.width,ye.height,ne.depth,ge,ye.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ie,ve,ye.width,ye.height,ne.depth,0,ye.data,0,0);else Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?k&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,0,ye.width,ye.height,ne.depth,ge,Le,ye.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ie,ve,ye.width,ye.height,ne.depth,0,ge,Le,ye.data)}else{Fe&&ze&&n.texStorage2D(t.TEXTURE_2D,Se,ve,De[0].width,De[0].height);for(let ie=0,_e=De.length;ie<_e;ie++)ye=De[ie],S.format!==ai?ge!==null?Fe?k&&n.compressedTexSubImage2D(t.TEXTURE_2D,ie,0,0,ye.width,ye.height,ge,ye.data):n.compressedTexImage2D(t.TEXTURE_2D,ie,ve,ye.width,ye.height,0,ye.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?k&&n.texSubImage2D(t.TEXTURE_2D,ie,0,0,ye.width,ye.height,ge,Le,ye.data):n.texImage2D(t.TEXTURE_2D,ie,ve,ye.width,ye.height,0,ge,Le,ye.data)}else if(S.isDataArrayTexture)if(Fe){if(ze&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Se,ve,ne.width,ne.height,ne.depth),k)if(S.layerUpdates.size>0){const ie=Bg(ne.width,ne.height,S.format,S.type);for(const _e of S.layerUpdates){const Me=ne.data.subarray(_e*ie/ne.data.BYTES_PER_ELEMENT,(_e+1)*ie/ne.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,_e,ne.width,ne.height,1,ge,Le,Me)}S.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,ge,Le,ne.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ve,ne.width,ne.height,ne.depth,0,ge,Le,ne.data);else if(S.isData3DTexture)Fe?(ze&&n.texStorage3D(t.TEXTURE_3D,Se,ve,ne.width,ne.height,ne.depth),k&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,ge,Le,ne.data)):n.texImage3D(t.TEXTURE_3D,0,ve,ne.width,ne.height,ne.depth,0,ge,Le,ne.data);else if(S.isFramebufferTexture){if(ze)if(Fe)n.texStorage2D(t.TEXTURE_2D,Se,ve,ne.width,ne.height);else{let ie=ne.width,_e=ne.height;for(let Me=0;Me<Se;Me++)n.texImage2D(t.TEXTURE_2D,Me,ve,ie,_e,0,ge,Le,null),ie>>=1,_e>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in t){const ie=t.canvas;if(ie.hasAttribute("layoutsubtree")||ie.setAttribute("layoutsubtree","true"),ne.parentNode!==ie){ie.appendChild(ne),h.add(S),ie.onpaint=_e=>{const Me=_e.changedElements;for(const se of h)Me.includes(se.image)&&(se.needsUpdate=!0)},ie.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,ne);else{const Me=t.RGBA,se=t.RGBA,Re=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,Me,se,Re,ne)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(De.length>0){if(Fe&&ze){const ie=Je(De[0]);n.texStorage2D(t.TEXTURE_2D,Se,ve,ie.width,ie.height)}for(let ie=0,_e=De.length;ie<_e;ie++)ye=De[ie],Fe?k&&n.texSubImage2D(t.TEXTURE_2D,ie,0,0,ge,Le,ye):n.texImage2D(t.TEXTURE_2D,ie,ve,ge,Le,ye);S.generateMipmaps=!1}else if(Fe){if(ze){const ie=Je(ne);n.texStorage2D(t.TEXTURE_2D,Se,ve,ie.width,ie.height)}k&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ge,Le,ne)}else n.texImage2D(t.TEXTURE_2D,0,ve,ge,Le,ne);d(S)&&g(q),xe.__version=he.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function ke(P,S,G){if(S.image.length!==6)return;const q=K(P,S),Z=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture,t.TEXTURE0+G);const he=i.get(Z);if(Z.version!==he.__version||q===!0){n.activeTexture(t.TEXTURE0+G);const xe=Ke.getPrimaries(Ke.workingColorSpace),Q=S.colorSpace===hr?null:Ke.getPrimaries(S.colorSpace),ne=S.colorSpace===hr||xe===Q?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);const ge=S.isCompressedTexture||S.image[0].isCompressedTexture,Le=S.image[0]&&S.image[0].isDataTexture,ve=[];for(let se=0;se<6;se++)!ge&&!Le?ve[se]=_(S.image[se],!0,r.maxCubemapSize):ve[se]=Le?S.image[se].image:S.image[se],ve[se]=rn(S,ve[se]);const ye=ve[0],De=s.convert(S.format,S.colorSpace),Fe=s.convert(S.type),ze=y(S.internalFormat,De,Fe,S.normalized,S.colorSpace),k=S.isVideoTexture!==!0,Se=he.__version===void 0||q===!0,ie=Z.dataReady;let _e=w(S,ye);Te(t.TEXTURE_CUBE_MAP,S);let Me;if(ge){k&&Se&&n.texStorage2D(t.TEXTURE_CUBE_MAP,_e,ze,ye.width,ye.height);for(let se=0;se<6;se++){Me=ve[se].mipmaps;for(let Re=0;Re<Me.length;Re++){const Ae=Me[Re];S.format!==ai?De!==null?k?ie&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Re,0,0,Ae.width,Ae.height,De,Ae.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Re,ze,Ae.width,Ae.height,0,Ae.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Re,0,0,Ae.width,Ae.height,De,Fe,Ae.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Re,ze,Ae.width,Ae.height,0,De,Fe,Ae.data)}}}else{if(Me=S.mipmaps,k&&Se){Me.length>0&&_e++;const se=Je(ve[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,_e,ze,se.width,se.height)}for(let se=0;se<6;se++)if(Le){k?ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,ve[se].width,ve[se].height,De,Fe,ve[se].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,ze,ve[se].width,ve[se].height,0,De,Fe,ve[se].data);for(let Re=0;Re<Me.length;Re++){const ot=Me[Re].image[se].image;k?ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Re+1,0,0,ot.width,ot.height,De,Fe,ot.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Re+1,ze,ot.width,ot.height,0,De,Fe,ot.data)}}else{k?ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,De,Fe,ve[se]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,ze,De,Fe,ve[se]);for(let Re=0;Re<Me.length;Re++){const Ae=Me[Re];k?ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Re+1,0,0,De,Fe,Ae.image[se]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Re+1,ze,De,Fe,Ae.image[se])}}}d(S)&&g(t.TEXTURE_CUBE_MAP),he.__version=Z.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function Ne(P,S,G,q,Z,he){const xe=s.convert(G.format,G.colorSpace),Q=s.convert(G.type),ne=y(G.internalFormat,xe,Q,G.normalized,G.colorSpace),ge=i.get(S),Le=i.get(G);if(Le.__renderTarget=S,!ge.__hasExternalTextures){const ve=Math.max(1,S.width>>he),ye=Math.max(1,S.height>>he);Z===t.TEXTURE_3D||Z===t.TEXTURE_2D_ARRAY?n.texImage3D(Z,he,ne,ve,ye,S.depth,0,xe,Q,null):n.texImage2D(Z,he,ne,ve,ye,0,xe,Q,null)}n.bindFramebuffer(t.FRAMEBUFFER,P),bt(S)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,q,Z,Le.__webglTexture,0,Mt(S)):(Z===t.TEXTURE_2D||Z>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,q,Z,Le.__webglTexture,he),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ht(P,S,G){if(t.bindRenderbuffer(t.RENDERBUFFER,P),S.depthBuffer){const q=S.depthTexture,Z=q&&q.isDepthTexture?q.type:null,he=b(S.stencilBuffer,Z),xe=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;bt(S)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Mt(S),he,S.width,S.height):G?t.renderbufferStorageMultisample(t.RENDERBUFFER,Mt(S),he,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,he,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,xe,t.RENDERBUFFER,P)}else{const q=S.textures;for(let Z=0;Z<q.length;Z++){const he=q[Z],xe=s.convert(he.format,he.colorSpace),Q=s.convert(he.type),ne=y(he.internalFormat,xe,Q,he.normalized,he.colorSpace);bt(S)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Mt(S),ne,S.width,S.height):G?t.renderbufferStorageMultisample(t.RENDERBUFFER,Mt(S),ne,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,ne,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function He(P,S,G){const q=S.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,P),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Z=i.get(S.depthTexture);if(Z.__renderTarget=S,(!Z.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),q){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,S.depthTexture.addEventListener("dispose",A)),Z.__webglTexture===void 0){Z.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,Z.__webglTexture),Te(t.TEXTURE_CUBE_MAP,S.depthTexture);const ge=s.convert(S.depthTexture.format),Le=s.convert(S.depthTexture.type);let ve;S.depthTexture.format===Yi?ve=t.DEPTH_COMPONENT24:S.depthTexture.format===Yr&&(ve=t.DEPTH24_STENCIL8);for(let ye=0;ye<6;ye++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,ve,S.width,S.height,0,ge,Le,null)}}else U(S.depthTexture,0);const he=Z.__webglTexture,xe=Mt(S),Q=q?t.TEXTURE_CUBE_MAP_POSITIVE_X+G:t.TEXTURE_2D,ne=S.depthTexture.format===Yr?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(S.depthTexture.format===Yi)bt(S)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ne,Q,he,0,xe):t.framebufferTexture2D(t.FRAMEBUFFER,ne,Q,he,0);else if(S.depthTexture.format===Yr)bt(S)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ne,Q,he,0,xe):t.framebufferTexture2D(t.FRAMEBUFFER,ne,Q,he,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ye(P){const S=i.get(P),G=P.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==P.depthTexture){const q=P.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),q){const Z=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,q.removeEventListener("dispose",Z)};q.addEventListener("dispose",Z),S.__depthDisposeCallback=Z}S.__boundDepthTexture=q}if(P.depthTexture&&!S.__autoAllocateDepthBuffer)if(G)for(let q=0;q<6;q++)He(S.__webglFramebuffer[q],P,q);else{const q=P.texture.mipmaps;q&&q.length>0?He(S.__webglFramebuffer[0],P,0):He(S.__webglFramebuffer,P,0)}else if(G){S.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[q]),S.__webglDepthbuffer[q]===void 0)S.__webglDepthbuffer[q]=t.createRenderbuffer(),ht(S.__webglDepthbuffer[q],P,!1);else{const Z=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,he=S.__webglDepthbuffer[q];t.bindRenderbuffer(t.RENDERBUFFER,he),t.framebufferRenderbuffer(t.FRAMEBUFFER,Z,t.RENDERBUFFER,he)}}else{const q=P.texture.mipmaps;if(q&&q.length>0?n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=t.createRenderbuffer(),ht(S.__webglDepthbuffer,P,!1);else{const Z=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,he=S.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,he),t.framebufferRenderbuffer(t.FRAMEBUFFER,Z,t.RENDERBUFFER,he)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function et(P,S,G){const q=i.get(P);S!==void 0&&Ne(q.__webglFramebuffer,P,P.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),G!==void 0&&Ye(P)}function Ze(P){const S=P.texture,G=i.get(P),q=i.get(S);P.addEventListener("dispose",x);const Z=P.textures,he=P.isWebGLCubeRenderTarget===!0,xe=Z.length>1;if(xe||(q.__webglTexture===void 0&&(q.__webglTexture=t.createTexture()),q.__version=S.version,a.memory.textures++),he){G.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer[Q]=[];for(let ne=0;ne<S.mipmaps.length;ne++)G.__webglFramebuffer[Q][ne]=t.createFramebuffer()}else G.__webglFramebuffer[Q]=t.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer=[];for(let Q=0;Q<S.mipmaps.length;Q++)G.__webglFramebuffer[Q]=t.createFramebuffer()}else G.__webglFramebuffer=t.createFramebuffer();if(xe)for(let Q=0,ne=Z.length;Q<ne;Q++){const ge=i.get(Z[Q]);ge.__webglTexture===void 0&&(ge.__webglTexture=t.createTexture(),a.memory.textures++)}if(P.samples>0&&bt(P)===!1){G.__webglMultisampledFramebuffer=t.createFramebuffer(),G.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let Q=0;Q<Z.length;Q++){const ne=Z[Q];G.__webglColorRenderbuffer[Q]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,G.__webglColorRenderbuffer[Q]);const ge=s.convert(ne.format,ne.colorSpace),Le=s.convert(ne.type),ve=y(ne.internalFormat,ge,Le,ne.normalized,ne.colorSpace,P.isXRRenderTarget===!0),ye=Mt(P);t.renderbufferStorageMultisample(t.RENDERBUFFER,ye,ve,P.width,P.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Q,t.RENDERBUFFER,G.__webglColorRenderbuffer[Q])}t.bindRenderbuffer(t.RENDERBUFFER,null),P.depthBuffer&&(G.__webglDepthRenderbuffer=t.createRenderbuffer(),ht(G.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(he){n.bindTexture(t.TEXTURE_CUBE_MAP,q.__webglTexture),Te(t.TEXTURE_CUBE_MAP,S);for(let Q=0;Q<6;Q++)if(S.mipmaps&&S.mipmaps.length>0)for(let ne=0;ne<S.mipmaps.length;ne++)Ne(G.__webglFramebuffer[Q][ne],P,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ne);else Ne(G.__webglFramebuffer[Q],P,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);d(S)&&g(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(xe){for(let Q=0,ne=Z.length;Q<ne;Q++){const ge=Z[Q],Le=i.get(ge);let ve=t.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ve=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ve,Le.__webglTexture),Te(ve,ge),Ne(G.__webglFramebuffer,P,ge,t.COLOR_ATTACHMENT0+Q,ve,0),d(ge)&&g(ve)}n.unbindTexture()}else{let Q=t.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Q=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Q,q.__webglTexture),Te(Q,S),S.mipmaps&&S.mipmaps.length>0)for(let ne=0;ne<S.mipmaps.length;ne++)Ne(G.__webglFramebuffer[ne],P,S,t.COLOR_ATTACHMENT0,Q,ne);else Ne(G.__webglFramebuffer,P,S,t.COLOR_ATTACHMENT0,Q,0);d(S)&&g(Q),n.unbindTexture()}P.depthBuffer&&Ye(P)}function St(P){const S=P.textures;for(let G=0,q=S.length;G<q;G++){const Z=S[G];if(d(Z)){const he=M(P),xe=i.get(Z).__webglTexture;n.bindTexture(he,xe),g(he),n.unbindTexture()}}}const Ot=[],It=[];function Tt(P){if(P.samples>0){if(bt(P)===!1){const S=P.textures,G=P.width,q=P.height;let Z=t.COLOR_BUFFER_BIT;const he=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,xe=i.get(P),Q=S.length>1;if(Q)for(let ge=0;ge<S.length;ge++)n.bindFramebuffer(t.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,xe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer);const ne=P.texture.mipmaps;ne&&ne.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let ge=0;ge<S.length;ge++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Z|=t.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Z|=t.STENCIL_BUFFER_BIT)),Q){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,xe.__webglColorRenderbuffer[ge]);const Le=i.get(S[ge]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Le,0)}t.blitFramebuffer(0,0,G,q,0,0,G,q,Z,t.NEAREST),l===!0&&(Ot.length=0,It.length=0,Ot.push(t.COLOR_ATTACHMENT0+ge),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Ot.push(he),It.push(he),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,It)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Ot))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Q)for(let ge=0;ge<S.length;ge++){n.bindFramebuffer(t.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,xe.__webglColorRenderbuffer[ge]);const Le=i.get(S[ge]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,xe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,Le,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const S=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[S])}}}function Mt(P){return Math.min(r.maxSamples,P.samples)}function bt(P){const S=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function z(P){const S=a.render.frame;u.get(P)!==S&&(u.set(P,S),P.update())}function rn(P,S){const G=P.colorSpace,q=P.format,Z=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||G!==Nc&&G!==hr&&(Ke.getTransfer(G)===ct?(q!==ai||Z!==Un)&&Be("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):nt("WebGLTextures: Unsupported texture color space:",G)),S}function Je(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=j,this.resetTextureUnits=$,this.getTextureUnits=Y,this.setTextureUnits=O,this.setTexture2D=U,this.setTexture2DArray=V,this.setTexture3D=J,this.setTextureCube=ee,this.rebindTextures=et,this.setupRenderTarget=Ze,this.updateRenderTargetMipmap=St,this.updateMultisampleRenderTarget=Tt,this.setupDepthRenderbuffer=Ye,this.setupFrameBufferTexture=Ne,this.useMultisampledRTT=bt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function qC(t,e){function n(i,r=hr){let s;const a=Ke.getTransfer(r);if(i===Un)return t.UNSIGNED_BYTE;if(i===wp)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Tp)return t.UNSIGNED_SHORT_5_5_5_1;if(i===px)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===mx)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===dx)return t.BYTE;if(i===hx)return t.SHORT;if(i===Mo)return t.UNSIGNED_SHORT;if(i===Ep)return t.INT;if(i===Ei)return t.UNSIGNED_INT;if(i===vi)return t.FLOAT;if(i===qi)return t.HALF_FLOAT;if(i===gx)return t.ALPHA;if(i===vx)return t.RGB;if(i===ai)return t.RGBA;if(i===Yi)return t.DEPTH_COMPONENT;if(i===Yr)return t.DEPTH_STENCIL;if(i===_x)return t.RED;if(i===bp)return t.RED_INTEGER;if(i===as)return t.RG;if(i===Ap)return t.RG_INTEGER;if(i===Cp)return t.RGBA_INTEGER;if(i===Yl||i===Kl||i===Zl||i===Jl)if(a===ct)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Yl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Kl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Zl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Jl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Yl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Kl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Zl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Jl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Od||i===kd||i===Bd||i===zd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Od)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===kd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Bd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===zd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Vd||i===Hd||i===Gd||i===Wd||i===jd||i===Rc||i===Xd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Vd||i===Hd)return a===ct?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Gd)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Wd)return s.COMPRESSED_R11_EAC;if(i===jd)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Rc)return s.COMPRESSED_RG11_EAC;if(i===Xd)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===$d||i===qd||i===Yd||i===Kd||i===Zd||i===Jd||i===Qd||i===eh||i===th||i===nh||i===ih||i===rh||i===sh||i===ah)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===$d)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===qd)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Yd)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Kd)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Zd)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Jd)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Qd)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===eh)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===th)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===nh)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ih)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===rh)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===sh)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ah)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===oh||i===lh||i===ch)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===oh)return a===ct?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===lh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ch)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===uh||i===fh||i===Pc||i===dh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===uh)return s.COMPRESSED_RED_RGTC1_EXT;if(i===fh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Pc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===dh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Eo?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const YC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,KC=`
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

}`;class ZC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new Rx(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Ti({vertexShader:YC,fragmentShader:KC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new wi(new Uo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class JC extends Ir{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,v=null;const E=typeof XRWebGLBinding<"u",_=new ZC,d={},g=n.getContextAttributes();let M=null,y=null;const b=[],w=[],A=new Ve;let x=null;const T=new In;T.viewport=new Rt;const R=new In;R.viewport=new Rt;const L=[T,R],F=new o1;let $=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ue=b[K];return ue===void 0&&(ue=new Yu,b[K]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(K){let ue=b[K];return ue===void 0&&(ue=new Yu,b[K]=ue),ue.getGripSpace()},this.getHand=function(K){let ue=b[K];return ue===void 0&&(ue=new Yu,b[K]=ue),ue.getHandSpace()};function O(K){const ue=w.indexOf(K.inputSource);if(ue===-1)return;const fe=b[ue];fe!==void 0&&(fe.update(K.inputSource,K.frame,c||a),fe.dispatchEvent({type:K.type,data:K.inputSource}))}function j(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",X);for(let K=0;K<b.length;K++){const ue=w[K];ue!==null&&(w[K]=null,b[K].disconnect(ue))}$=null,Y=null,_.reset();for(const K in d)delete d[K];e.setRenderTarget(M),p=null,f=null,h=null,r=null,y=null,Te.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,i.isPresenting===!0&&Be("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,i.isPresenting===!0&&Be("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h===null&&E&&(h=new XRWebGLBinding(r,n)),h},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(M=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",j),r.addEventListener("inputsourceschange",X),g.xrCompatible!==!0&&await n.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(A),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,Ce=null,ke=null;g.depth&&(ke=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,fe=g.stencil?Yr:Yi,Ce=g.stencil?Eo:Ei);const Ne={colorFormat:n.RGBA8,depthFormat:ke,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(Ne),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new Mi(f.textureWidth,f.textureHeight,{format:ai,type:Un,depthTexture:new ca(f.textureWidth,f.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const fe={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,fe),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Mi(p.framebufferWidth,p.framebufferHeight,{format:ai,type:Un,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Te.setContext(r),Te.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function X(K){for(let ue=0;ue<K.removed.length;ue++){const fe=K.removed[ue],Ce=w.indexOf(fe);Ce>=0&&(w[Ce]=null,b[Ce].disconnect(fe))}for(let ue=0;ue<K.added.length;ue++){const fe=K.added[ue];let Ce=w.indexOf(fe);if(Ce===-1){for(let Ne=0;Ne<b.length;Ne++)if(Ne>=w.length){w.push(fe),Ce=Ne;break}else if(w[Ne]===null){w[Ne]=fe,Ce=Ne;break}if(Ce===-1)break}const ke=b[Ce];ke&&ke.connect(fe)}}const U=new W,V=new W;function J(K,ue,fe){U.setFromMatrixPosition(ue.matrixWorld),V.setFromMatrixPosition(fe.matrixWorld);const Ce=U.distanceTo(V),ke=ue.projectionMatrix.elements,Ne=fe.projectionMatrix.elements,ht=ke[14]/(ke[10]-1),He=ke[14]/(ke[10]+1),Ye=(ke[9]+1)/ke[5],et=(ke[9]-1)/ke[5],Ze=(ke[8]-1)/ke[0],St=(Ne[8]+1)/Ne[0],Ot=ht*Ze,It=ht*St,Tt=Ce/(-Ze+St),Mt=Tt*-Ze;if(ue.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Mt),K.translateZ(Tt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),ke[10]===-1)K.projectionMatrix.copy(ue.projectionMatrix),K.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const bt=ht+Tt,z=He+Tt,rn=Ot-Mt,Je=It+(Ce-Mt),P=Ye*He/z*bt,S=et*He/z*bt;K.projectionMatrix.makePerspective(rn,Je,P,S,bt,z),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ee(K,ue){ue===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ue.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let ue=K.near,fe=K.far;_.texture!==null&&(_.depthNear>0&&(ue=_.depthNear),_.depthFar>0&&(fe=_.depthFar)),F.near=R.near=T.near=ue,F.far=R.far=T.far=fe,($!==F.near||Y!==F.far)&&(r.updateRenderState({depthNear:F.near,depthFar:F.far}),$=F.near,Y=F.far),F.layers.mask=K.layers.mask|6,T.layers.mask=F.layers.mask&-5,R.layers.mask=F.layers.mask&-3;const Ce=K.parent,ke=F.cameras;ee(F,Ce);for(let Ne=0;Ne<ke.length;Ne++)ee(ke[Ne],Ce);ke.length===2?J(F,T,R):F.projectionMatrix.copy(T.projectionMatrix),le(K,F,Ce)};function le(K,ue,fe){fe===null?K.matrix.copy(ue.matrixWorld):(K.matrix.copy(fe.matrixWorld),K.matrix.invert(),K.matrix.multiply(ue.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ue.projectionMatrix),K.projectionMatrixInverse.copy(ue.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=ph*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(K){l=K,f!==null&&(f.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(F)},this.getCameraTexture=function(K){return d[K]};let Ie=null;function we(K,ue){if(u=ue.getViewerPose(c||a),v=ue,u!==null){const fe=u.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let Ce=!1;fe.length!==F.cameras.length&&(F.cameras.length=0,Ce=!0);for(let He=0;He<fe.length;He++){const Ye=fe[He];let et=null;if(p!==null)et=p.getViewport(Ye);else{const St=h.getViewSubImage(f,Ye);et=St.viewport,He===0&&(e.setRenderTargetTextures(y,St.colorTexture,St.depthStencilTexture),e.setRenderTarget(y))}let Ze=L[He];Ze===void 0&&(Ze=new In,Ze.layers.enable(He),Ze.viewport=new Rt,L[He]=Ze),Ze.matrix.fromArray(Ye.transform.matrix),Ze.matrix.decompose(Ze.position,Ze.quaternion,Ze.scale),Ze.projectionMatrix.fromArray(Ye.projectionMatrix),Ze.projectionMatrixInverse.copy(Ze.projectionMatrix).invert(),Ze.viewport.set(et.x,et.y,et.width,et.height),He===0&&(F.matrix.copy(Ze.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Ce===!0&&F.cameras.push(Ze)}const ke=r.enabledFeatures;if(ke&&ke.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&E){h=i.getBinding();const He=h.getDepthInformation(fe[0]);He&&He.isValid&&He.texture&&_.init(He,r.renderState)}if(ke&&ke.includes("camera-access")&&E){e.state.unbindTexture(),h=i.getBinding();for(let He=0;He<fe.length;He++){const Ye=fe[He].camera;if(Ye){let et=d[Ye];et||(et=new Rx,d[Ye]=et);const Ze=h.getCameraImage(Ye);et.sourceTexture=Ze}}}}for(let fe=0;fe<b.length;fe++){const Ce=w[fe],ke=b[fe];Ce!==null&&ke!==void 0&&ke.update(Ce,ue,c||a)}Ie&&Ie(K,ue),ue.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ue}),v=null}const Te=new Ix;Te.setAnimationLoop(we),this.setAnimationLoop=function(K){Ie=K},this.dispose=function(){}}}const QC=new Nt,Vx=new Ge;Vx.set(-1,0,0,0,1,0,0,0,1);function eR(t,e){function n(_,d){_.matrixAutoUpdate===!0&&_.updateMatrix(),d.value.copy(_.matrix)}function i(_,d){d.color.getRGB(_.fogColor.value,Px(t)),d.isFog?(_.fogNear.value=d.near,_.fogFar.value=d.far):d.isFogExp2&&(_.fogDensity.value=d.density)}function r(_,d,g,M,y){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?s(_,d):d.isMeshLambertMaterial?(s(_,d),d.envMap&&(_.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(s(_,d),h(_,d)):d.isMeshPhongMaterial?(s(_,d),u(_,d),d.envMap&&(_.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(s(_,d),f(_,d),d.isMeshPhysicalMaterial&&p(_,d,y)):d.isMeshMatcapMaterial?(s(_,d),v(_,d)):d.isMeshDepthMaterial?s(_,d):d.isMeshDistanceMaterial?(s(_,d),E(_,d)):d.isMeshNormalMaterial?s(_,d):d.isLineBasicMaterial?(a(_,d),d.isLineDashedMaterial&&o(_,d)):d.isPointsMaterial?l(_,d,g,M):d.isSpriteMaterial?c(_,d):d.isShadowMaterial?(_.color.value.copy(d.color),_.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(_,d){_.opacity.value=d.opacity,d.color&&_.diffuse.value.copy(d.color),d.emissive&&_.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(_.map.value=d.map,n(d.map,_.mapTransform)),d.alphaMap&&(_.alphaMap.value=d.alphaMap,n(d.alphaMap,_.alphaMapTransform)),d.bumpMap&&(_.bumpMap.value=d.bumpMap,n(d.bumpMap,_.bumpMapTransform),_.bumpScale.value=d.bumpScale,d.side===Cn&&(_.bumpScale.value*=-1)),d.normalMap&&(_.normalMap.value=d.normalMap,n(d.normalMap,_.normalMapTransform),_.normalScale.value.copy(d.normalScale),d.side===Cn&&_.normalScale.value.negate()),d.displacementMap&&(_.displacementMap.value=d.displacementMap,n(d.displacementMap,_.displacementMapTransform),_.displacementScale.value=d.displacementScale,_.displacementBias.value=d.displacementBias),d.emissiveMap&&(_.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,_.emissiveMapTransform)),d.specularMap&&(_.specularMap.value=d.specularMap,n(d.specularMap,_.specularMapTransform)),d.alphaTest>0&&(_.alphaTest.value=d.alphaTest);const g=e.get(d),M=g.envMap,y=g.envMapRotation;M&&(_.envMap.value=M,_.envMapRotation.value.setFromMatrix4(QC.makeRotationFromEuler(y)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&_.envMapRotation.value.premultiply(Vx),_.reflectivity.value=d.reflectivity,_.ior.value=d.ior,_.refractionRatio.value=d.refractionRatio),d.lightMap&&(_.lightMap.value=d.lightMap,_.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,_.lightMapTransform)),d.aoMap&&(_.aoMap.value=d.aoMap,_.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,_.aoMapTransform))}function a(_,d){_.diffuse.value.copy(d.color),_.opacity.value=d.opacity,d.map&&(_.map.value=d.map,n(d.map,_.mapTransform))}function o(_,d){_.dashSize.value=d.dashSize,_.totalSize.value=d.dashSize+d.gapSize,_.scale.value=d.scale}function l(_,d,g,M){_.diffuse.value.copy(d.color),_.opacity.value=d.opacity,_.size.value=d.size*g,_.scale.value=M*.5,d.map&&(_.map.value=d.map,n(d.map,_.uvTransform)),d.alphaMap&&(_.alphaMap.value=d.alphaMap,n(d.alphaMap,_.alphaMapTransform)),d.alphaTest>0&&(_.alphaTest.value=d.alphaTest)}function c(_,d){_.diffuse.value.copy(d.color),_.opacity.value=d.opacity,_.rotation.value=d.rotation,d.map&&(_.map.value=d.map,n(d.map,_.mapTransform)),d.alphaMap&&(_.alphaMap.value=d.alphaMap,n(d.alphaMap,_.alphaMapTransform)),d.alphaTest>0&&(_.alphaTest.value=d.alphaTest)}function u(_,d){_.specular.value.copy(d.specular),_.shininess.value=Math.max(d.shininess,1e-4)}function h(_,d){d.gradientMap&&(_.gradientMap.value=d.gradientMap)}function f(_,d){_.metalness.value=d.metalness,d.metalnessMap&&(_.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,_.metalnessMapTransform)),_.roughness.value=d.roughness,d.roughnessMap&&(_.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,_.roughnessMapTransform)),d.envMap&&(_.envMapIntensity.value=d.envMapIntensity)}function p(_,d,g){_.ior.value=d.ior,d.sheen>0&&(_.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),_.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(_.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,_.sheenColorMapTransform)),d.sheenRoughnessMap&&(_.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,_.sheenRoughnessMapTransform))),d.clearcoat>0&&(_.clearcoat.value=d.clearcoat,_.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(_.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,_.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(_.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Cn&&_.clearcoatNormalScale.value.negate())),d.dispersion>0&&(_.dispersion.value=d.dispersion),d.iridescence>0&&(_.iridescence.value=d.iridescence,_.iridescenceIOR.value=d.iridescenceIOR,_.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(_.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,_.iridescenceMapTransform)),d.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),d.transmission>0&&(_.transmission.value=d.transmission,_.transmissionSamplerMap.value=g.texture,_.transmissionSamplerSize.value.set(g.width,g.height),d.transmissionMap&&(_.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,_.transmissionMapTransform)),_.thickness.value=d.thickness,d.thicknessMap&&(_.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=d.attenuationDistance,_.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(_.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(_.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=d.specularIntensity,_.specularColor.value.copy(d.specularColor),d.specularColorMap&&(_.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,_.specularColorMapTransform)),d.specularIntensityMap&&(_.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,_.specularIntensityMapTransform))}function v(_,d){d.matcap&&(_.matcap.value=d.matcap)}function E(_,d){const g=e.get(d).light;_.referencePosition.value.setFromMatrixPosition(g.matrixWorld),_.nearDistance.value=g.shadow.camera.near,_.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function tR(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,b){const w=b.program;i.uniformBlockBinding(y,w)}function c(y,b){let w=r[y.id];w===void 0&&(_(y),w=u(y),r[y.id]=w,y.addEventListener("dispose",g));const A=b.program;i.updateUBOMapping(y,A);const x=e.render.frame;s[y.id]!==x&&(f(y),s[y.id]=x)}function u(y){const b=h();y.__bindingPointIndex=b;const w=t.createBuffer(),A=y.__size,x=y.usage;return t.bindBuffer(t.UNIFORM_BUFFER,w),t.bufferData(t.UNIFORM_BUFFER,A,x),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,b,w),w}function h(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return nt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const b=r[y.id],w=y.uniforms,A=y.__cache;t.bindBuffer(t.UNIFORM_BUFFER,b);for(let x=0,T=w.length;x<T;x++){const R=w[x];if(Array.isArray(R))for(let L=0,F=R.length;L<F;L++)p(R[L],x,L,A);else p(R,x,0,A)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(y,b,w,A){if(E(y,b,w,A)===!0){const x=y.__offset,T=y.value;if(Array.isArray(T)){let R=0;for(let L=0;L<T.length;L++){const F=T[L],$=d(F);v(F,y.__data,R),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(R+=$.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(T,y.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,x,y.__data)}}function v(y,b,w){typeof y=="number"||typeof y=="boolean"?b[0]=y:y.isMatrix3?(b[0]=y.elements[0],b[1]=y.elements[1],b[2]=y.elements[2],b[3]=0,b[4]=y.elements[3],b[5]=y.elements[4],b[6]=y.elements[5],b[7]=0,b[8]=y.elements[6],b[9]=y.elements[7],b[10]=y.elements[8],b[11]=0):ArrayBuffer.isView(y)?b.set(new y.constructor(y.buffer,y.byteOffset,b.length)):y.toArray(b,w)}function E(y,b,w,A){const x=y.value,T=b+"_"+w;if(A[T]===void 0)return typeof x=="number"||typeof x=="boolean"?A[T]=x:ArrayBuffer.isView(x)?A[T]=x.slice():A[T]=x.clone(),!0;{const R=A[T];if(typeof x=="number"||typeof x=="boolean"){if(R!==x)return A[T]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(R.equals(x)===!1)return R.copy(x),!0}}return!1}function _(y){const b=y.uniforms;let w=0;const A=16;for(let T=0,R=b.length;T<R;T++){const L=Array.isArray(b[T])?b[T]:[b[T]];for(let F=0,$=L.length;F<$;F++){const Y=L[F],O=Array.isArray(Y.value)?Y.value:[Y.value];for(let j=0,X=O.length;j<X;j++){const U=O[j],V=d(U),J=w%A,ee=J%V.boundary,le=J+ee;w+=ee,le!==0&&A-le<V.storage&&(w+=A-le),Y.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=w,w+=V.storage}}}const x=w%A;return x>0&&(w+=A-x),y.__size=w,y.__cache={},this}function d(y){const b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=48,b.storage=48):y.isMatrix4?(b.boundary=64,b.storage=64):y.isTexture?Be("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(b.boundary=16,b.storage=y.byteLength):Be("WebGLRenderer: Unsupported uniform value type.",y),b}function g(y){const b=y.target;b.removeEventListener("dispose",g);const w=a.indexOf(b.__bindingPointIndex);a.splice(w,1),t.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function M(){for(const y in r)t.deleteBuffer(r[y]);a=[],r={},s={}}return{bind:l,update:c,dispose:M}}const nR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let hi=null;function iR(){return hi===null&&(hi=new Hw(nR,16,16,as,qi),hi.name="DFG_LUT",hi.minFilter=un,hi.magFilter=un,hi.wrapS=ki,hi.wrapT=ki,hi.generateMipmaps=!1,hi.needsUpdate=!0),hi}class Hx{constructor(e={}){const{canvas:n=xw(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:p=Un}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=a;const E=p,_=new Set([Cp,Ap,bp]),d=new Set([Un,Ei,Mo,Eo,wp,Tp]),g=new Uint32Array(4),M=new Int32Array(4),y=new W;let b=null,w=null;const A=[],x=[];let T=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Si,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let L=!1,F=null,$=null,Y=null,O=null;this._outputColorSpace=Wn;let j=0,X=0,U=null,V=-1,J=null;const ee=new Rt,le=new Rt;let Ie=null;const we=new Xe(0);let Te=0,K=n.width,ue=n.height,fe=1,Ce=null,ke=null;const Ne=new Rt(0,0,K,ue),ht=new Rt(0,0,K,ue);let He=!1;const Ye=new Ip;let et=!1,Ze=!1;const St=new Nt,Ot=new W,It=new Rt,Tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Mt=!1;function bt(){return U===null?fe:1}let z=i;function rn(m,N){return n.getContext(m,N)}try{const m={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Mp}`),n.addEventListener("webglcontextlost",ot,!1),n.addEventListener("webglcontextrestored",ft,!1),n.addEventListener("webglcontextcreationerror",yn,!1),z===null){const N="webgl2";if(z=rn(N,m),z===null)throw rn(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(m){throw nt("WebGLRenderer: "+m.message),m}let Je,P,S,G,q,Z,he,xe,Q,ne,ge,Le,ve,ye,De,Fe,ze,k,Se,ie,_e,Me,se;function Re(){Je=new iA(z),Je.init(),_e=new qC(z,Je),P=new Yb(z,Je,e,_e),S=new XC(z,Je),P.reversedDepthBuffer&&f&&S.buffers.depth.setReversed(!0),$=z.createFramebuffer(),Y=z.createFramebuffer(),O=z.createFramebuffer(),G=new aA(z),q=new LC,Z=new $C(z,Je,S,q,P,_e,G),he=new nA(R),xe=new u1(z),Me=new $b(z,xe),Q=new rA(z,xe,G,Me),ne=new lA(z,Q,xe,Me,G),k=new oA(z,P,Z),De=new Kb(q),ge=new NC(R,he,Je,P,Me,De),Le=new eR(R,q),ve=new IC,ye=new zC(Je),ze=new Xb(R,he,S,ne,v,l),Fe=new jC(R,ne,P),se=new tR(z,G,P,S),Se=new qb(z,Je,G),ie=new sA(z,Je,G),G.programs=ge.programs,R.capabilities=P,R.extensions=Je,R.properties=q,R.renderLists=ve,R.shadowMap=Fe,R.state=S,R.info=G}Re(),E!==Un&&(T=new uA(E,n.width,n.height,o,r,s));const Ae=new JC(R,z);this.xr=Ae,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const m=Je.get("WEBGL_lose_context");m&&m.loseContext()},this.forceContextRestore=function(){const m=Je.get("WEBGL_lose_context");m&&m.restoreContext()},this.getPixelRatio=function(){return fe},this.setPixelRatio=function(m){m!==void 0&&(fe=m,this.setSize(K,ue,!1))},this.getSize=function(m){return m.set(K,ue)},this.setSize=function(m,N,I=!0){if(Ae.isPresenting){Be("WebGLRenderer: Can't change size while VR device is presenting.");return}K=m,ue=N,n.width=Math.floor(m*fe),n.height=Math.floor(N*fe),I===!0&&(n.style.width=m+"px",n.style.height=N+"px"),T!==null&&T.setSize(n.width,n.height),this.setViewport(0,0,m,N)},this.getDrawingBufferSize=function(m){return m.set(K*fe,ue*fe).floor()},this.setDrawingBufferSize=function(m,N,I){K=m,ue=N,fe=I,n.width=Math.floor(m*I),n.height=Math.floor(N*I),this.setViewport(0,0,m,N)},this.setEffects=function(m){if(E===Un){nt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(m){for(let N=0;N<m.length;N++)if(m[N].isOutputPass===!0){Be("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(m||[])},this.getCurrentViewport=function(m){return m.copy(ee)},this.getViewport=function(m){return m.copy(Ne)},this.setViewport=function(m,N,I,D){m.isVector4?Ne.set(m.x,m.y,m.z,m.w):Ne.set(m,N,I,D),S.viewport(ee.copy(Ne).multiplyScalar(fe).round())},this.getScissor=function(m){return m.copy(ht)},this.setScissor=function(m,N,I,D){m.isVector4?ht.set(m.x,m.y,m.z,m.w):ht.set(m,N,I,D),S.scissor(le.copy(ht).multiplyScalar(fe).round())},this.getScissorTest=function(){return He},this.setScissorTest=function(m){S.setScissorTest(He=m)},this.setOpaqueSort=function(m){Ce=m},this.setTransparentSort=function(m){ke=m},this.getClearColor=function(m){return m.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor(...arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha(...arguments)},this.clear=function(m=!0,N=!0,I=!0){let D=0;if(m){let B=!1;if(U!==null){const re=U.texture.format;B=_.has(re)}if(B){const re=U.texture.type,ce=d.has(re),ae=ze.getClearColor(),oe=ze.getClearAlpha(),pe=ae.r,Ue=ae.g,Oe=ae.b;ce?(g[0]=pe,g[1]=Ue,g[2]=Oe,g[3]=oe,z.clearBufferuiv(z.COLOR,0,g)):(M[0]=pe,M[1]=Ue,M[2]=Oe,M[3]=oe,z.clearBufferiv(z.COLOR,0,M))}else D|=z.COLOR_BUFFER_BIT}N&&(D|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),I&&(D|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D!==0&&z.clear(D)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(m){m.setRenderer(this),F=m},this.dispose=function(){n.removeEventListener("webglcontextlost",ot,!1),n.removeEventListener("webglcontextrestored",ft,!1),n.removeEventListener("webglcontextcreationerror",yn,!1),ze.dispose(),ve.dispose(),ye.dispose(),q.dispose(),he.dispose(),ne.dispose(),Me.dispose(),se.dispose(),ge.dispose(),Ae.dispose(),Ae.removeEventListener("sessionstart",Vo),Ae.removeEventListener("sessionend",va),ui.stop()};function ot(m){m.preventDefault(),_g("WebGLRenderer: Context Lost."),L=!0}function ft(){_g("WebGLRenderer: Context Restored."),L=!1;const m=G.autoReset,N=Fe.enabled,I=Fe.autoUpdate,D=Fe.needsUpdate,B=Fe.type;Re(),G.autoReset=m,Fe.enabled=N,Fe.autoUpdate=I,Fe.needsUpdate=D,Fe.type=B}function yn(m){nt("WebGLRenderer: A WebGL context could not be created. Reason: ",m.statusMessage)}function Ut(m){const N=m.target;N.removeEventListener("dispose",Ut),au(N)}function au(m){Bo(m),q.remove(m)}function Bo(m){const N=q.get(m).programs;N!==void 0&&(N.forEach(function(I){ge.releaseProgram(I)}),m.isShaderMaterial&&ge.releaseShaderCache(m))}this.renderBufferDirect=function(m,N,I,D,B,re){N===null&&(N=Tt);const ce=B.isMesh&&B.matrixWorld.determinantAffine()<0,ae=cu(m,N,I,D,B);S.setMaterial(D,ce);let oe=I.index,pe=1;if(D.wireframe===!0){if(oe=Q.getWireframeAttribute(I),oe===void 0)return;pe=2}const Ue=I.drawRange,Oe=I.attributes.position;let Pe=Ue.start*pe,st=(Ue.start+Ue.count)*pe;re!==null&&(Pe=Math.max(Pe,re.start*pe),st=Math.min(st,(re.start+re.count)*pe)),oe!==null?(Pe=Math.max(Pe,0),st=Math.min(st,oe.count)):Oe!=null&&(Pe=Math.max(Pe,0),st=Math.min(st,Oe.count));const Et=st-Pe;if(Et<0||Et===1/0)return;Me.setup(B,D,ae,I,oe);let pt,at=Se;if(oe!==null&&(pt=xe.get(oe),at=ie,at.setIndex(pt)),B.isMesh)D.wireframe===!0?(S.setLineWidth(D.wireframeLinewidth*bt()),at.setMode(z.LINES)):at.setMode(z.TRIANGLES);else if(B.isLine){let kt=D.linewidth;kt===void 0&&(kt=1),S.setLineWidth(kt*bt()),B.isLineSegments?at.setMode(z.LINES):B.isLineLoop?at.setMode(z.LINE_LOOP):at.setMode(z.LINE_STRIP)}else B.isPoints?at.setMode(z.POINTS):B.isSprite&&at.setMode(z.TRIANGLES);if(B.isBatchedMesh)if(Je.get("WEBGL_multi_draw"))at.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const kt=B._multiDrawStarts,me=B._multiDrawCounts,lt=B._multiDrawCount,We=oe?xe.get(oe).bytesPerElement:1,mt=q.get(D).currentProgram.getUniforms();for(let Bt=0;Bt<lt;Bt++)mt.setValue(z,"_gl_DrawID",Bt),at.render(kt[Bt]/We,me[Bt])}else if(B.isInstancedMesh)at.renderInstances(Pe,Et,B.count);else if(I.isInstancedBufferGeometry){const kt=I._maxInstanceCount!==void 0?I._maxInstanceCount:1/0,me=Math.min(I.instanceCount,kt);at.renderInstances(Pe,Et,me)}else at.render(Pe,Et)};function zo(m,N,I){m.transparent===!0&&m.side===Ui&&m.forceSinglePass===!1?(m.side=Cn,m.needsUpdate=!0,Fr(m,N,I),m.side=Cr,m.needsUpdate=!0,Fr(m,N,I),m.side=Ui):Fr(m,N,I)}this.compile=function(m,N,I=null){I===null&&(I=m),w=ye.get(I),w.init(N),x.push(w),I.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(w.pushLight(B),B.castShadow&&w.pushShadow(B))}),m!==I&&m.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(w.pushLight(B),B.castShadow&&w.pushShadow(B))}),w.setupLights();const D=new Set;return m.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const re=B.material;if(re)if(Array.isArray(re))for(let ce=0;ce<re.length;ce++){const ae=re[ce];zo(ae,I,B),D.add(ae)}else zo(re,I,B),D.add(re)}),w=x.pop(),D},this.compileAsync=function(m,N,I=null){const D=this.compile(m,N,I);return new Promise(B=>{function re(){if(D.forEach(function(ce){q.get(ce).currentProgram.isReady()&&D.delete(ce)}),D.size===0){B(m);return}setTimeout(re,10)}Je.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let ga=null;function ou(m){ga&&ga(m)}function Vo(){ui.stop()}function va(){ui.start()}const ui=new Ix;ui.setAnimationLoop(ou),typeof self<"u"&&ui.setContext(self),this.setAnimationLoop=function(m){ga=m,Ae.setAnimationLoop(m),m===null?ui.stop():ui.start()},Ae.addEventListener("sessionstart",Vo),Ae.addEventListener("sessionend",va),this.render=function(m,N){if(N!==void 0&&N.isCamera!==!0){nt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;F!==null&&F.renderStart(m,N);const I=Ae.enabled===!0&&Ae.isPresenting===!0,D=T!==null&&(U===null||I)&&T.begin(R,U);if(m.matrixWorldAutoUpdate===!0&&m.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Ae.enabled===!0&&Ae.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Ae.cameraAutoUpdate===!0&&Ae.updateCamera(N),N=Ae.getCamera()),m.isScene===!0&&m.onBeforeRender(R,m,N,U),w=ye.get(m,x.length),w.init(N),w.state.textureUnits=Z.getTextureUnits(),x.push(w),St.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Ye.setFromProjectionMatrix(St,_i,N.reversedDepth),Ze=this.localClippingEnabled,et=De.init(this.clippingPlanes,Ze),b=ve.get(m,A.length),b.init(),A.push(b),Ae.enabled===!0&&Ae.isPresenting===!0){const ce=R.xr.getDepthSensingMesh();ce!==null&&_a(ce,N,-1/0,R.sortObjects)}_a(m,N,0,R.sortObjects),b.finish(),R.sortObjects===!0&&b.sort(Ce,ke,N.reversedDepth),Mt=Ae.enabled===!1||Ae.isPresenting===!1||Ae.hasDepthSensing()===!1,Mt&&ze.addToRenderList(b,m),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),et===!0&&De.beginShadows();const B=w.state.shadowsArray;if(Fe.render(B,m,N),et===!0&&De.endShadows(),(D&&T.hasRenderPass())===!1){const ce=b.opaque,ae=b.transmissive;if(w.setupLights(),N.isArrayCamera){const oe=N.cameras;if(ae.length>0)for(let pe=0,Ue=oe.length;pe<Ue;pe++){const Oe=oe[pe];Ho(ce,ae,m,Oe)}Mt&&ze.render(m);for(let pe=0,Ue=oe.length;pe<Ue;pe++){const Oe=oe[pe];xa(b,m,Oe,Oe.viewport)}}else ae.length>0&&Ho(ce,ae,m,N),Mt&&ze.render(m),xa(b,m,N)}U!==null&&X===0&&(Z.updateMultisampleRenderTarget(U),Z.updateRenderTargetMipmap(U)),D&&T.end(R),m.isScene===!0&&m.onAfterRender(R,m,N),Me.resetDefaultState(),V=-1,J=null,x.pop(),x.length>0?(w=x[x.length-1],Z.setTextureUnits(w.state.textureUnits),et===!0&&De.setGlobalState(R.clippingPlanes,w.state.camera)):w=null,A.pop(),A.length>0?b=A[A.length-1]:b=null,F!==null&&F.renderEnd()};function _a(m,N,I,D){if(m.visible===!1)return;if(m.layers.test(N.layers)){if(m.isGroup)I=m.renderOrder;else if(m.isLOD)m.autoUpdate===!0&&m.update(N);else if(m.isLightProbeGrid)w.pushLightProbeGrid(m);else if(m.isLight)w.pushLight(m),m.castShadow&&w.pushShadow(m);else if(m.isSprite){if(!m.frustumCulled||Ye.intersectsSprite(m)){D&&It.setFromMatrixPosition(m.matrixWorld).applyMatrix4(St);const ce=ne.update(m),ae=m.material;ae.visible&&b.push(m,ce,ae,I,It.z,null)}}else if((m.isMesh||m.isLine||m.isPoints)&&(!m.frustumCulled||Ye.intersectsObject(m))){const ce=ne.update(m),ae=m.material;if(D&&(m.boundingSphere!==void 0?(m.boundingSphere===null&&m.computeBoundingSphere(),It.copy(m.boundingSphere.center)):(ce.boundingSphere===null&&ce.computeBoundingSphere(),It.copy(ce.boundingSphere.center)),It.applyMatrix4(m.matrixWorld).applyMatrix4(St)),Array.isArray(ae)){const oe=ce.groups;for(let pe=0,Ue=oe.length;pe<Ue;pe++){const Oe=oe[pe],Pe=ae[Oe.materialIndex];Pe&&Pe.visible&&b.push(m,ce,Pe,I,It.z,Oe)}}else ae.visible&&b.push(m,ce,ae,I,It.z,null)}}const re=m.children;for(let ce=0,ae=re.length;ce<ae;ce++)_a(re[ce],N,I,D)}function xa(m,N,I,D){const{opaque:B,transmissive:re,transparent:ce}=m;w.setupLightsView(I),et===!0&&De.setGlobalState(R.clippingPlanes,I),D&&S.viewport(ee.copy(D)),B.length>0&&us(B,N,I),re.length>0&&us(re,N,I),ce.length>0&&us(ce,N,I),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function Ho(m,N,I,D){if((I.isScene===!0?I.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[D.id]===void 0){const Pe=Je.has("EXT_color_buffer_half_float")||Je.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[D.id]=new Mi(1,1,{generateMipmaps:!0,type:Pe?qi:Un,minFilter:qr,samples:Math.max(4,P.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace})}const re=w.state.transmissionRenderTarget[D.id],ce=D.viewport||ee;re.setSize(ce.z*R.transmissionResolutionScale,ce.w*R.transmissionResolutionScale);const ae=R.getRenderTarget(),oe=R.getActiveCubeFace(),pe=R.getActiveMipmapLevel();R.setRenderTarget(re),R.getClearColor(we),Te=R.getClearAlpha(),Te<1&&R.setClearColor(16777215,.5),R.clear(),Mt&&ze.render(I);const Ue=R.toneMapping;R.toneMapping=Si;const Oe=D.viewport;if(D.viewport!==void 0&&(D.viewport=void 0),w.setupLightsView(D),et===!0&&De.setGlobalState(R.clippingPlanes,D),us(m,I,D),Z.updateMultisampleRenderTarget(re),Z.updateRenderTargetMipmap(re),Je.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let st=0,Et=N.length;st<Et;st++){const pt=N[st],{object:at,geometry:kt,material:me,group:lt}=pt;if(me.side===Ui&&at.layers.test(D.layers)){const We=me.side;me.side=Cn,me.needsUpdate=!0,Go(at,I,D,kt,me,lt),me.side=We,me.needsUpdate=!0,Pe=!0}}Pe===!0&&(Z.updateMultisampleRenderTarget(re),Z.updateRenderTargetMipmap(re))}R.setRenderTarget(ae,oe,pe),R.setClearColor(we,Te),Oe!==void 0&&(D.viewport=Oe),R.toneMapping=Ue}function us(m,N,I){const D=N.isScene===!0?N.overrideMaterial:null;for(let B=0,re=m.length;B<re;B++){const ce=m[B],{object:ae,geometry:oe,group:pe}=ce;let Ue=ce.material;Ue.allowOverride===!0&&D!==null&&(Ue=D),ae.layers.test(I.layers)&&Go(ae,N,I,oe,Ue,pe)}}function Go(m,N,I,D,B,re){m.onBeforeRender(R,N,I,D,B,re),m.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,m.matrixWorld),m.normalMatrix.getNormalMatrix(m.modelViewMatrix),B.onBeforeRender(R,N,I,D,m,re),B.transparent===!0&&B.side===Ui&&B.forceSinglePass===!1?(B.side=Cn,B.needsUpdate=!0,R.renderBufferDirect(I,N,D,B,m,re),B.side=Cr,B.needsUpdate=!0,R.renderBufferDirect(I,N,D,B,m,re),B.side=Ui):R.renderBufferDirect(I,N,D,B,m,re),m.onAfterRender(R,N,I,D,B,re)}function Fr(m,N,I){N.isScene!==!0&&(N=Tt);const D=q.get(m),B=w.state.lights,re=w.state.shadowsArray,ce=B.state.version,ae=ge.getParameters(m,B.state,re,N,I,w.state.lightProbeGridArray),oe=ge.getProgramCacheKey(ae);let pe=D.programs;D.environment=m.isMeshStandardMaterial||m.isMeshLambertMaterial||m.isMeshPhongMaterial?N.environment:null,D.fog=N.fog;const Ue=m.isMeshStandardMaterial||m.isMeshLambertMaterial&&!m.envMap||m.isMeshPhongMaterial&&!m.envMap;D.envMap=he.get(m.envMap||D.environment,Ue),D.envMapRotation=D.environment!==null&&m.envMap===null?N.environmentRotation:m.envMapRotation,pe===void 0&&(m.addEventListener("dispose",Ut),pe=new Map,D.programs=pe);let Oe=pe.get(oe);if(Oe!==void 0){if(D.currentProgram===Oe&&D.lightsStateVersion===ce)return fs(m,ae),Oe}else ae.uniforms=ge.getUniforms(m),F!==null&&m.isNodeMaterial&&F.build(m,I,ae),m.onBeforeCompile(ae,R),Oe=ge.acquireProgram(ae,oe),pe.set(oe,Oe),D.uniforms=ae.uniforms;const Pe=D.uniforms;return(!m.isShaderMaterial&&!m.isRawShaderMaterial||m.clipping===!0)&&(Pe.clippingPlanes=De.uniform),fs(m,ae),D.needsLights=H(m),D.lightsStateVersion=ce,D.needsLights&&(Pe.ambientLightColor.value=B.state.ambient,Pe.lightProbe.value=B.state.probe,Pe.directionalLights.value=B.state.directional,Pe.directionalLightShadows.value=B.state.directionalShadow,Pe.spotLights.value=B.state.spot,Pe.spotLightShadows.value=B.state.spotShadow,Pe.rectAreaLights.value=B.state.rectArea,Pe.ltc_1.value=B.state.rectAreaLTC1,Pe.ltc_2.value=B.state.rectAreaLTC2,Pe.pointLights.value=B.state.point,Pe.pointLightShadows.value=B.state.pointShadow,Pe.hemisphereLights.value=B.state.hemi,Pe.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Pe.spotLightMatrix.value=B.state.spotLightMatrix,Pe.spotLightMap.value=B.state.spotLightMap,Pe.pointShadowMatrix.value=B.state.pointShadowMatrix),D.lightProbeGrid=w.state.lightProbeGridArray.length>0,D.currentProgram=Oe,D.uniformsList=null,Oe}function Wo(m){if(m.uniformsList===null){const N=m.currentProgram.getUniforms();m.uniformsList=ec.seqWithValue(N.seq,m.uniforms)}return m.uniformsList}function fs(m,N){const I=q.get(m);I.outputColorSpace=N.outputColorSpace,I.batching=N.batching,I.batchingColor=N.batchingColor,I.instancing=N.instancing,I.instancingColor=N.instancingColor,I.instancingMorph=N.instancingMorph,I.skinning=N.skinning,I.morphTargets=N.morphTargets,I.morphNormals=N.morphNormals,I.morphColors=N.morphColors,I.morphTargetsCount=N.morphTargetsCount,I.numClippingPlanes=N.numClippingPlanes,I.numIntersection=N.numClipIntersection,I.vertexAlphas=N.vertexAlphas,I.vertexTangents=N.vertexTangents,I.toneMapping=N.toneMapping}function lu(m,N){if(m.length===0)return null;if(m.length===1)return m[0].texture!==null?m[0]:null;y.setFromMatrixPosition(N.matrixWorld);for(let I=0,D=m.length;I<D;I++){const B=m[I];if(B.texture!==null&&B.boundingBox.containsPoint(y))return B}return null}function cu(m,N,I,D,B){N.isScene!==!0&&(N=Tt),Z.resetTextureUnits();const re=N.fog,ce=D.isMeshStandardMaterial||D.isMeshLambertMaterial||D.isMeshPhongMaterial?N.environment:null,ae=U===null?R.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Ke.workingColorSpace,oe=D.isMeshStandardMaterial||D.isMeshLambertMaterial&&!D.envMap||D.isMeshPhongMaterial&&!D.envMap,pe=he.get(D.envMap||ce,oe),Ue=D.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,Oe=!!I.attributes.tangent&&(!!D.normalMap||D.anisotropy>0),Pe=!!I.morphAttributes.position,st=!!I.morphAttributes.normal,Et=!!I.morphAttributes.color;let pt=Si;D.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(pt=R.toneMapping);const at=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,kt=at!==void 0?at.length:0,me=q.get(D),lt=w.state.lights;if(et===!0&&(Ze===!0||m!==J)){const gt=m===J&&D.id===V;De.setState(D,m,gt)}let We=!1;D.version===me.__version?(me.needsLights&&me.lightsStateVersion!==lt.state.version||me.outputColorSpace!==ae||B.isBatchedMesh&&me.batching===!1||!B.isBatchedMesh&&me.batching===!0||B.isBatchedMesh&&me.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&me.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&me.instancing===!1||!B.isInstancedMesh&&me.instancing===!0||B.isSkinnedMesh&&me.skinning===!1||!B.isSkinnedMesh&&me.skinning===!0||B.isInstancedMesh&&me.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&me.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&me.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&me.instancingMorph===!1&&B.morphTexture!==null||me.envMap!==pe||D.fog===!0&&me.fog!==re||me.numClippingPlanes!==void 0&&(me.numClippingPlanes!==De.numPlanes||me.numIntersection!==De.numIntersection)||me.vertexAlphas!==Ue||me.vertexTangents!==Oe||me.morphTargets!==Pe||me.morphNormals!==st||me.morphColors!==Et||me.toneMapping!==pt||me.morphTargetsCount!==kt||!!me.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(We=!0):(We=!0,me.__version=D.version);let mt=me.currentProgram;We===!0&&(mt=Fr(D,N,B),F&&D.isNodeMaterial&&F.onUpdateProgram(D,mt,me));let Bt=!1,rt=!1,Rn=!1;const Qe=mt.getUniforms(),At=me.uniforms;if(S.useProgram(mt.program)&&(Bt=!0,rt=!0,Rn=!0),D.id!==V&&(V=D.id,rt=!0),me.needsLights){const gt=lu(w.state.lightProbeGridArray,B);me.lightProbeGrid!==gt&&(me.lightProbeGrid=gt,rt=!0)}if(Bt||J!==m){S.buffers.depth.getReversed()&&m.reversedDepth!==!0&&(m._reversedDepth=!0,m.updateProjectionMatrix()),Qe.setValue(z,"projectionMatrix",m.projectionMatrix),Qe.setValue(z,"viewMatrix",m.matrixWorldInverse);const Qi=Qe.map.cameraPosition;Qi!==void 0&&Qi.setValue(z,Ot.setFromMatrixPosition(m.matrixWorld)),P.logarithmicDepthBuffer&&Qe.setValue(z,"logDepthBufFC",2/(Math.log(m.far+1)/Math.LN2)),(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial)&&Qe.setValue(z,"isOrthographic",m.isOrthographicCamera===!0),J!==m&&(J=m,rt=!0,Rn=!0)}if(me.needsLights&&(lt.state.directionalShadowMap.length>0&&Qe.setValue(z,"directionalShadowMap",lt.state.directionalShadowMap,Z),lt.state.spotShadowMap.length>0&&Qe.setValue(z,"spotShadowMap",lt.state.spotShadowMap,Z),lt.state.pointShadowMap.length>0&&Qe.setValue(z,"pointShadowMap",lt.state.pointShadowMap,Z)),B.isSkinnedMesh){Qe.setOptional(z,B,"bindMatrix"),Qe.setOptional(z,B,"bindMatrixInverse");const gt=B.skeleton;gt&&(gt.boneTexture===null&&gt.computeBoneTexture(),Qe.setValue(z,"boneTexture",gt.boneTexture,Z))}B.isBatchedMesh&&(Qe.setOptional(z,B,"batchingTexture"),Qe.setValue(z,"batchingTexture",B._matricesTexture,Z),Qe.setOptional(z,B,"batchingIdTexture"),Qe.setValue(z,"batchingIdTexture",B._indirectTexture,Z),Qe.setOptional(z,B,"batchingColorTexture"),B._colorsTexture!==null&&Qe.setValue(z,"batchingColorTexture",B._colorsTexture,Z));const Ji=I.morphAttributes;if((Ji.position!==void 0||Ji.normal!==void 0||Ji.color!==void 0)&&k.update(B,I,mt),(rt||me.receiveShadow!==B.receiveShadow)&&(me.receiveShadow=B.receiveShadow,Qe.setValue(z,"receiveShadow",B.receiveShadow)),(D.isMeshStandardMaterial||D.isMeshLambertMaterial||D.isMeshPhongMaterial)&&D.envMap===null&&N.environment!==null&&(At.envMapIntensity.value=N.environmentIntensity),At.dfgLUT!==void 0&&(At.dfgLUT.value=iR()),rt){if(Qe.setValue(z,"toneMappingExposure",R.toneMappingExposure),me.needsLights&&uu(At,Rn),re&&D.fog===!0&&Le.refreshFogUniforms(At,re),Le.refreshMaterialUniforms(At,D,fe,ue,w.state.transmissionRenderTarget[m.id]),me.needsLights&&me.lightProbeGrid){const gt=me.lightProbeGrid;At.probesSH.value=gt.texture,At.probesMin.value.copy(gt.boundingBox.min),At.probesMax.value.copy(gt.boundingBox.max),At.probesResolution.value.copy(gt.resolution)}ec.upload(z,Wo(me),At,Z)}if(D.isShaderMaterial&&D.uniformsNeedUpdate===!0&&(ec.upload(z,Wo(me),At,Z),D.uniformsNeedUpdate=!1),D.isSpriteMaterial&&Qe.setValue(z,"center",B.center),Qe.setValue(z,"modelViewMatrix",B.modelViewMatrix),Qe.setValue(z,"normalMatrix",B.normalMatrix),Qe.setValue(z,"modelMatrix",B.matrixWorld),D.uniformsGroups!==void 0){const gt=D.uniformsGroups;for(let Qi=0,ds=gt.length;Qi<ds;Qi++){const zp=gt[Qi];se.update(zp,mt),se.bind(zp,mt)}}return mt}function uu(m,N){m.ambientLightColor.needsUpdate=N,m.lightProbe.needsUpdate=N,m.directionalLights.needsUpdate=N,m.directionalLightShadows.needsUpdate=N,m.pointLights.needsUpdate=N,m.pointLightShadows.needsUpdate=N,m.spotLights.needsUpdate=N,m.spotLightShadows.needsUpdate=N,m.rectAreaLights.needsUpdate=N,m.hemisphereLights.needsUpdate=N}function H(m){return m.isMeshLambertMaterial||m.isMeshToonMaterial||m.isMeshPhongMaterial||m.isMeshStandardMaterial||m.isShadowMaterial||m.isShaderMaterial&&m.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(m,N,I){const D=q.get(m);D.__autoAllocateDepthBuffer=m.resolveDepthBuffer===!1,D.__autoAllocateDepthBuffer===!1&&(D.__useRenderToTexture=!1),q.get(m.texture).__webglTexture=N,q.get(m.depthTexture).__webglTexture=D.__autoAllocateDepthBuffer?void 0:I,D.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(m,N){const I=q.get(m);I.__webglFramebuffer=N,I.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(m,N=0,I=0){U=m,j=N,X=I;let D=null,B=!1,re=!1;if(m){const ae=q.get(m);if(ae.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(z.FRAMEBUFFER,ae.__webglFramebuffer),ee.copy(m.viewport),le.copy(m.scissor),Ie=m.scissorTest,S.viewport(ee),S.scissor(le),S.setScissorTest(Ie),V=-1;return}else if(ae.__webglFramebuffer===void 0)Z.setupRenderTarget(m);else if(ae.__hasExternalTextures)Z.rebindTextures(m,q.get(m.texture).__webglTexture,q.get(m.depthTexture).__webglTexture);else if(m.depthBuffer){const Ue=m.depthTexture;if(ae.__boundDepthTexture!==Ue){if(Ue!==null&&q.has(Ue)&&(m.width!==Ue.image.width||m.height!==Ue.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(m)}}const oe=m.texture;(oe.isData3DTexture||oe.isDataArrayTexture||oe.isCompressedArrayTexture)&&(re=!0);const pe=q.get(m).__webglFramebuffer;m.isWebGLCubeRenderTarget?(Array.isArray(pe[N])?D=pe[N][I]:D=pe[N],B=!0):m.samples>0&&Z.useMultisampledRTT(m)===!1?D=q.get(m).__webglMultisampledFramebuffer:Array.isArray(pe)?D=pe[I]:D=pe,ee.copy(m.viewport),le.copy(m.scissor),Ie=m.scissorTest}else ee.copy(Ne).multiplyScalar(fe).floor(),le.copy(ht).multiplyScalar(fe).floor(),Ie=He;if(I!==0&&(D=$),S.bindFramebuffer(z.FRAMEBUFFER,D)&&S.drawBuffers(m,D),S.viewport(ee),S.scissor(le),S.setScissorTest(Ie),B){const ae=q.get(m.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+N,ae.__webglTexture,I)}else if(re){const ae=N;for(let oe=0;oe<m.textures.length;oe++){const pe=q.get(m.textures[oe]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+oe,pe.__webglTexture,I,ae)}}else if(m!==null&&I!==0){const ae=q.get(m.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,ae.__webglTexture,I)}V=-1},this.readRenderTargetPixels=function(m,N,I,D,B,re,ce,ae=0){if(!(m&&m.isWebGLRenderTarget)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let oe=q.get(m).__webglFramebuffer;if(m.isWebGLCubeRenderTarget&&ce!==void 0&&(oe=oe[ce]),oe){S.bindFramebuffer(z.FRAMEBUFFER,oe);try{const pe=m.textures[ae],Ue=pe.format,Oe=pe.type;if(m.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+ae),!P.textureFormatReadable(Ue)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!P.textureTypeReadable(Oe)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=m.width-D&&I>=0&&I<=m.height-B&&z.readPixels(N,I,D,B,_e.convert(Ue),_e.convert(Oe),re)}finally{const pe=U!==null?q.get(U).__webglFramebuffer:null;S.bindFramebuffer(z.FRAMEBUFFER,pe)}}},this.readRenderTargetPixelsAsync=async function(m,N,I,D,B,re,ce,ae=0){if(!(m&&m.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let oe=q.get(m).__webglFramebuffer;if(m.isWebGLCubeRenderTarget&&ce!==void 0&&(oe=oe[ce]),oe)if(N>=0&&N<=m.width-D&&I>=0&&I<=m.height-B){S.bindFramebuffer(z.FRAMEBUFFER,oe);const pe=m.textures[ae],Ue=pe.format,Oe=pe.type;if(m.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+ae),!P.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!P.textureTypeReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Pe=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Pe),z.bufferData(z.PIXEL_PACK_BUFFER,re.byteLength,z.STREAM_READ),z.readPixels(N,I,D,B,_e.convert(Ue),_e.convert(Oe),0);const st=U!==null?q.get(U).__webglFramebuffer:null;S.bindFramebuffer(z.FRAMEBUFFER,st);const Et=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await yw(z,Et,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Pe),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,re),z.deleteBuffer(Pe),z.deleteSync(Et),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(m,N=null,I=0){const D=Math.pow(2,-I),B=Math.floor(m.image.width*D),re=Math.floor(m.image.height*D),ce=N!==null?N.x:0,ae=N!==null?N.y:0;Z.setTexture2D(m,0),z.copyTexSubImage2D(z.TEXTURE_2D,I,0,0,ce,ae,B,re),S.unbindTexture()},this.copyTextureToTexture=function(m,N,I=null,D=null,B=0,re=0){let ce,ae,oe,pe,Ue,Oe,Pe,st,Et;const pt=m.isCompressedTexture?m.mipmaps[re]:m.image;if(I!==null)ce=I.max.x-I.min.x,ae=I.max.y-I.min.y,oe=I.isBox3?I.max.z-I.min.z:1,pe=I.min.x,Ue=I.min.y,Oe=I.isBox3?I.min.z:0;else{const At=Math.pow(2,-B);ce=Math.floor(pt.width*At),ae=Math.floor(pt.height*At),m.isDataArrayTexture?oe=pt.depth:m.isData3DTexture?oe=Math.floor(pt.depth*At):oe=1,pe=0,Ue=0,Oe=0}D!==null?(Pe=D.x,st=D.y,Et=D.z):(Pe=0,st=0,Et=0);const at=_e.convert(N.format),kt=_e.convert(N.type);let me;N.isData3DTexture?(Z.setTexture3D(N,0),me=z.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(Z.setTexture2DArray(N,0),me=z.TEXTURE_2D_ARRAY):(Z.setTexture2D(N,0),me=z.TEXTURE_2D),S.activeTexture(z.TEXTURE0),S.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,N.flipY),S.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),S.pixelStorei(z.UNPACK_ALIGNMENT,N.unpackAlignment);const lt=S.getParameter(z.UNPACK_ROW_LENGTH),We=S.getParameter(z.UNPACK_IMAGE_HEIGHT),mt=S.getParameter(z.UNPACK_SKIP_PIXELS),Bt=S.getParameter(z.UNPACK_SKIP_ROWS),rt=S.getParameter(z.UNPACK_SKIP_IMAGES);S.pixelStorei(z.UNPACK_ROW_LENGTH,pt.width),S.pixelStorei(z.UNPACK_IMAGE_HEIGHT,pt.height),S.pixelStorei(z.UNPACK_SKIP_PIXELS,pe),S.pixelStorei(z.UNPACK_SKIP_ROWS,Ue),S.pixelStorei(z.UNPACK_SKIP_IMAGES,Oe);const Rn=m.isDataArrayTexture||m.isData3DTexture,Qe=N.isDataArrayTexture||N.isData3DTexture;if(m.isDepthTexture){const At=q.get(m),Ji=q.get(N),gt=q.get(At.__renderTarget),Qi=q.get(Ji.__renderTarget);S.bindFramebuffer(z.READ_FRAMEBUFFER,gt.__webglFramebuffer),S.bindFramebuffer(z.DRAW_FRAMEBUFFER,Qi.__webglFramebuffer);for(let ds=0;ds<oe;ds++)Rn&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,q.get(m).__webglTexture,B,Oe+ds),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,q.get(N).__webglTexture,re,Et+ds)),z.blitFramebuffer(pe,Ue,ce,ae,Pe,st,ce,ae,z.DEPTH_BUFFER_BIT,z.NEAREST);S.bindFramebuffer(z.READ_FRAMEBUFFER,null),S.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(B!==0||m.isRenderTargetTexture||q.has(m)){const At=q.get(m),Ji=q.get(N);S.bindFramebuffer(z.READ_FRAMEBUFFER,Y),S.bindFramebuffer(z.DRAW_FRAMEBUFFER,O);for(let gt=0;gt<oe;gt++)Rn?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,At.__webglTexture,B,Oe+gt):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,At.__webglTexture,B),Qe?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ji.__webglTexture,re,Et+gt):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Ji.__webglTexture,re),B!==0?z.blitFramebuffer(pe,Ue,ce,ae,Pe,st,ce,ae,z.COLOR_BUFFER_BIT,z.NEAREST):Qe?z.copyTexSubImage3D(me,re,Pe,st,Et+gt,pe,Ue,ce,ae):z.copyTexSubImage2D(me,re,Pe,st,pe,Ue,ce,ae);S.bindFramebuffer(z.READ_FRAMEBUFFER,null),S.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Qe?m.isDataTexture||m.isData3DTexture?z.texSubImage3D(me,re,Pe,st,Et,ce,ae,oe,at,kt,pt.data):N.isCompressedArrayTexture?z.compressedTexSubImage3D(me,re,Pe,st,Et,ce,ae,oe,at,pt.data):z.texSubImage3D(me,re,Pe,st,Et,ce,ae,oe,at,kt,pt):m.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,re,Pe,st,ce,ae,at,kt,pt.data):m.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,re,Pe,st,pt.width,pt.height,at,pt.data):z.texSubImage2D(z.TEXTURE_2D,re,Pe,st,ce,ae,at,kt,pt);S.pixelStorei(z.UNPACK_ROW_LENGTH,lt),S.pixelStorei(z.UNPACK_IMAGE_HEIGHT,We),S.pixelStorei(z.UNPACK_SKIP_PIXELS,mt),S.pixelStorei(z.UNPACK_SKIP_ROWS,Bt),S.pixelStorei(z.UNPACK_SKIP_IMAGES,rt),re===0&&N.generateMipmaps&&z.generateMipmap(me),S.unbindTexture()},this.initRenderTarget=function(m){q.get(m).__webglFramebuffer===void 0&&Z.setupRenderTarget(m)},this.initTexture=function(m){m.isCubeTexture?Z.setTextureCube(m,0):m.isData3DTexture?Z.setTexture3D(m,0):m.isDataArrayTexture||m.isCompressedArrayTexture?Z.setTexture2DArray(m,0):Z.setTexture2D(m,0),S.unbindTexture()},this.resetState=function(){j=0,X=0,U=null,S.reset(),Me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Ke._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ke._getUnpackColorSpace()}}const c0={type:"change"},kp={type:"start"},Gx={type:"end"},Nl=new bx,u0=new ur,rR=Math.cos(70*Ew.DEG2RAD),Ht=new W,Mn=2*Math.PI,dt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},yf=1e-6;class sR extends l1{constructor(e,n=null){super(e,n),this.state=dt.NONE,this.target=new W,this.cursor=new W,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ys.ROTATE,MIDDLE:Ys.DOLLY,RIGHT:Ys.PAN},this.touches={ONE:zs.ROTATE,TWO:zs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new W,this._lastQuaternion=new Rr,this._lastTargetPosition=new W,this._quat=new Rr().setFromUnitVectors(e.up,new W(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new kg,this._sphericalDelta=new kg,this._scale=1,this._panOffset=new W,this._rotateStart=new Ve,this._rotateEnd=new Ve,this._rotateDelta=new Ve,this._panStart=new Ve,this._panEnd=new Ve,this._panDelta=new Ve,this._dollyStart=new Ve,this._dollyEnd=new Ve,this._dollyDelta=new Ve,this._dollyDirection=new W,this._mouse=new Ve,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=oR.bind(this),this._onPointerDown=aR.bind(this),this._onPointerUp=lR.bind(this),this._onContextMenu=mR.bind(this),this._onMouseWheel=fR.bind(this),this._onKeyDown=dR.bind(this),this._onTouchStart=hR.bind(this),this._onTouchMove=pR.bind(this),this._onMouseDown=cR.bind(this),this._onMouseMove=uR.bind(this),this._interceptControlDown=gR.bind(this),this._interceptControlUp=vR.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(c0),this.update(),this.state=dt.NONE}pan(e,n){this._pan(e,n),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const n=this.object.position;Ht.copy(n).sub(this.target),Ht.applyQuaternion(this._quat),this._spherical.setFromVector3(Ht),this.autoRotate&&this.state===dt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=Mn:i>Math.PI&&(i-=Mn),r<-Math.PI?r+=Mn:r>Math.PI&&(r-=Mn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(Ht.setFromSpherical(this._spherical),Ht.applyQuaternion(this._quatInverse),n.copy(this.target).add(Ht),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Ht.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const o=new W(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new W(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Ht.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Nl.origin.copy(this.object.position),Nl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Nl.direction))<rR?this.object.lookAt(this.target):(u0.setFromNormalAndCoplanarPoint(this.object.up,this.target),Nl.intersectPlane(u0,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>yf||8*(1-this._lastQuaternion.dot(this.object.quaternion))>yf||this._lastTargetPosition.distanceToSquared(this.target)>yf?(this.dispatchEvent(c0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Mn/60*this.autoRotateSpeed*e:Mn/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){Ht.setFromMatrixColumn(n,0),Ht.multiplyScalar(-e),this._panOffset.add(Ht)}_panUp(e,n){this.screenSpacePanning===!0?Ht.setFromMatrixColumn(n,1):(Ht.setFromMatrixColumn(n,0),Ht.crossVectors(this.object.up,Ht)),Ht.multiplyScalar(e),this._panOffset.add(Ht)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Ht.copy(r).sub(this.target);let s=Ht.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*n*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=n-i.top,a=i.width,o=i.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Mn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Mn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Mn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Mn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+n.x)*.5,o=(e.pageY+n.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new Ve,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function aR(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function oR(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function lR(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Gx),this.state=dt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function cR(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ys.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=dt.DOLLY;break;case Ys.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=dt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=dt.ROTATE}break;case Ys.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=dt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=dt.PAN}break;default:this.state=dt.NONE}this.state!==dt.NONE&&this.dispatchEvent(kp)}function uR(t){switch(this.state){case dt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case dt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case dt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function fR(t){this.enabled===!1||this.enableZoom===!1||this.state!==dt.NONE||(t.preventDefault(),this.dispatchEvent(kp),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(Gx))}function dR(t){this.enabled!==!1&&this._handleKeyDown(t)}function hR(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case zs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=dt.TOUCH_ROTATE;break;case zs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=dt.TOUCH_PAN;break;default:this.state=dt.NONE}break;case 2:switch(this.touches.TWO){case zs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=dt.TOUCH_DOLLY_PAN;break;case zs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=dt.TOUCH_DOLLY_ROTATE;break;default:this.state=dt.NONE}break;default:this.state=dt.NONE}this.state!==dt.NONE&&this.dispatchEvent(kp)}function pR(t){switch(this._trackPointer(t),this.state){case dt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case dt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case dt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case dt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=dt.NONE}}function mR(t){this.enabled!==!1&&t.preventDefault()}function gR(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function vR(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function _R(){const t=document.createElement("canvas");t.width=t.height=256;const e=t.getContext("2d");for(let i=0;i<2;i++)for(let r=0;r<2;r++)e.fillStyle=(r+i)%2?"#6b7280":"#7d8590",e.fillRect(r*128,i*128,128,128);const n=new Xw(t);return n.wrapS=n.wrapT=Cc,n.repeat.set(12,12),n}function xR(t,e){const n=t.geom_rgba,i=t.geom_matid[e];let r=n[e*4],s=n[e*4+1],a=n[e*4+2],o=n[e*4+3];if(i>=0&&r===.5&&s===.5&&a===.5){const c=t.mat_rgba;r=c[i*4],s=c[i*4+1],a=c[i*4+2],o=c[i*4+3]}const l=new Xe(r,s,a);return l.alpha=o,l}function yR(t,e){const n=t.mesh_vertadr[e],i=t.mesh_vertnum[e],r=t.mesh_faceadr[e],s=t.mesh_facenum[e],a=t.mesh_vert.subarray(n*3,(n+i)*3),o=t.mesh_face.subarray(r*3,(r+s)*3),l=new Hn;return l.setAttribute("position",new Yn(new Float32Array(a),3)),l.setIndex(new Yn(new Uint32Array(o),1)),l.computeVertexNormals(),l}function SR(t,e,n){const i=t.geom_type[e],r=t.geom_size,s=r[e*3],a=r[e*3+1],o=r[e*3+2],l=xR(t,e),c=l.alpha??1;if(c<=.01)return null;const u=new Qw({color:l,roughness:.7,metalness:.1,transparent:c<1,opacity:c});let h;switch(i){case Li.PLANE:{const p=s>0?s*2:40,v=a>0?a*2:40;h=new Uo(p,v),u.map=n,u.color=new Xe(l.r*1.15,l.g*1.15,l.b*1.15);break}case Li.SPHERE:h=new Ic(s,24,16);break;case Li.CAPSULE:h=new Up(s,a*2,8,16),h.rotateX(Math.PI/2);break;case Li.ELLIPSOID:h=new Ic(1,24,16),h.scale(s,a,o);break;case Li.CYLINDER:h=new Fp(s,s,a*2,24),h.rotateX(Math.PI/2);break;case Li.BOX:h=new pa(s*2,a*2,o*2);break;case Li.MESH:{const p=t.geom_dataid[e];if(p<0)return null;h=yR(t,p),u.flatShading=!1;break}default:return null}const f=new wi(h,u);return f.castShadow=i!==Li.PLANE,f.receiveShadow=!0,f.matrixAutoUpdate=!1,f}function Wx(t,e){t.background=new Xe(1447965),t.fog=new Lp(1447965,25,90);const n=new n1(14542335,3159100,1.1);t.add(n);const i=new s1(16777215,2.2);i.position.set(3,4,8),i.castShadow=!0,i.shadow.mapSize.set(2048,2048);const r=Math.max(e.stat.extent,1);i.shadow.camera.left=-2*r,i.shadow.camera.right=2*r,i.shadow.camera.top=2*r,i.shadow.camera.bottom=-2*r,i.shadow.camera.far=20*r,t.add(i);const s=_R(),a=[],o=e.geom_group;for(let l=0;l<e.ngeom;l++){if(o[l]>2)continue;const c=SR(e,l,s);c&&(t.add(c),a.push({mesh:c,index:l}))}return a}function tc(t,e){const n=e.geom_xpos,i=e.geom_xmat;for(const r of t){const s=r.index,a=s*3,o=s*9;r.mesh.matrix.set(i[o],i[o+1],i[o+2],n[a],i[o+3],i[o+4],i[o+5],n[a+1],i[o+6],i[o+7],i[o+8],n[a+2],0,0,0,1)}}function vh(t){t.traverse(e=>{const n=e;n.geometry&&n.geometry.dispose();const i=n.material;Array.isArray(i)?i.forEach(r=>r.dispose()):i&&i.dispose()}),t.clear()}class MR{renderer;scene=new Ex;camera;controls;bindings=[];data=null;raf=0;resizeObs;container;constructor(e){this.container=e,this.renderer=new Hx({antialias:!0}),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=nx,this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),e.appendChild(this.renderer.domElement),this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.renderer.domElement.style.display="block",this.camera=new In(45,1,.01,500),this.camera.up.set(0,0,1),this.controls=new sR(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.12,this.resizeObs=new ResizeObserver(()=>this.resize()),this.resizeObs.observe(e),this.resize();const n=()=>{this.raf=requestAnimationFrame(n),this.controls.update(),this.data&&tc(this.bindings,this.data),this.renderer.render(this.scene,this.camera)};n()}resize(){const e=Math.max(this.container.clientWidth,1),n=Math.max(this.container.clientHeight,1);this.renderer.setSize(e,n,!1),this.camera.aspect=e/n,this.camera.updateProjectionMatrix()}setModel(e,n,i=!0){vh(this.scene),this.bindings=[],this.data=n,e&&n&&(this.bindings=Wx(this.scene,e),tc(this.bindings,n),i&&this.frameModel(e))}hasModel(){return this.data!==null}frameModel(e){const n=e.stat.center,i=1.6*Math.max(e.stat.extent,.4),r=90*Math.PI/180,s=-25*Math.PI/180,a=new W(n[0],n[1],n[2]);this.camera.position.set(a.x-i*Math.cos(s)*Math.cos(r),a.y-i*Math.cos(s)*Math.sin(r),a.z-i*Math.sin(s)),this.controls.target.copy(a),this.controls.update()}captureJpeg(e=.9){this.controls.update(),this.data&&tc(this.bindings,this.data),this.renderer.render(this.scene,this.camera);const n=this.renderer.domElement.toDataURL("image/jpeg",e);return n.slice(n.indexOf(",")+1)}dispose(){cancelAnimationFrame(this.raf),this.resizeObs.disconnect(),this.controls.dispose(),vh(this.scene),this.renderer.dispose(),this.renderer.domElement.remove()}}function ER(t,e,n,i=1280,r=960,s=.85){const a=document.createElement("canvas");a.width=i,a.height=r;const o=new Hx({canvas:a,antialias:!0});o.shadowMap.enabled=!0;const l=new Ex,c=Wx(l,e);tc(c,n);const u=new In(45,i/r,.01,500);u.up.set(0,0,1);const h=e.stat.center,f=1.6*Math.max(e.stat.extent,.4),p=90*Math.PI/180,v=-25*Math.PI/180;u.position.set(h[0]-f*Math.cos(v)*Math.cos(p),h[1]-f*Math.cos(v)*Math.sin(p),h[2]-f*Math.sin(v)),u.lookAt(h[0],h[1],h[2]),o.render(l,u);const E=a.toDataURL("image/jpeg",s);return vh(l),o.dispose(),E.slice(E.indexOf(",")+1)}function jx(t,e){const n=t.FS;let i;try{i=n.readdir(e)}catch{return}for(const r of i){if(r==="."||r==="..")continue;const s=`${e}/${r}`,a=n.stat(s);n.isDir(a.mode)?(jx(t,s),n.rmdir(s)):n.unlink(s)}}function wR(t){return/\busethread\s*=/.test(t)?t:/<compiler\b/.test(t)?t.replace(/<compiler\b/,'<compiler usethread="false"'):t.replace(/<mujoco([^>]*)>/,`<mujoco$1>
  <compiler usethread="false"/>`)}async function TR(t,e){const n=t.FS,i=`/projects/${e}`;jx(t,i),n.mkdirTree(i);const r=await yp(e);for(const s of r){const a=`${i}/${s.path}`,o=a.slice(0,a.lastIndexOf("/"));o&&n.mkdirTree(o);let l=s.data;typeof l=="string"&&s.path.endsWith(".xml")&&(l=wR(l)),n.writeFile(a,l)}return i}async function bR(t){const e=await xp(t);if(e.includes("env.js"))return"env.js";const n=e.filter(i=>i.endsWith("_env.js")).sort();if(n.length)return n[0];throw new Error("no env entry file found (expected env.js or *_env.js)")}function AR(t,e){return new Function("mj",`"use strict";
${t}
;if (typeof makeEnv !== "function") { throw new Error("env.js must define a top-level function makeEnv()"); }
return makeEnv();`)(e)}function Uc(t){for(let e=0;e<t.length;e++)if(!Number.isFinite(t[e]))return!0;return!1}function os(t){return Array.isArray(t)?t:t instanceof Float64Array||t instanceof Float32Array?Array.from(t):typeof t=="number"?[t]:[]}async function Fo(t){const e=await zE(),n=await TR(e,t),i=await bR(t),r=await $_(t,i),s=AR(r,e),a=s.xml_path??s.xmlPath??"scene.xml";if(a.includes(".."))throw new Error("xml path escapes project");const o=e.MjModel.mj_loadXML(`${n}/${a}`),l=new e.MjData(o);return{mj:e,model:o,data:l,env:s,entryFile:i,entryXml:a}}function Ki(t){if(t){try{t.data.delete()}catch{}try{t.model.delete()}catch{}}}function Oo(t){const{env:e,model:n,data:i}=t,r=e.reset.length>=2?e.reset(n,i):e.reset(i);return os(r)}function ru(t,e){const n=t.env.step(t.model,t.data,e);return Array.isArray(n)&&n.length>=3?[os(n[0]),Number(n[1])||0,!!n[2]]:[os(n),0,!1]}function CR(t,e){const n=Number(t.env.ctrl_dt??t.env.ctrlDt??0),i=t.model.opt.timestep||.002;return n>0?Math.max(1,Math.round(n/i)):Math.max(1,Math.round(1/(i*e)))}async function RR(t){let e=null,n="<unknown>";try{e=await Fo(t),n=e.entryFile;let i=Oo(e);e.mj.mj_forward(e.model,e.data);for(let r=0;r<30;r++){const s=os(e.env.policy(i)),[a]=ru(e,s);if(i=a,e.mj.mj_step(e.model,e.data),Uc(i)||Uc(e.data.qpos))return{ok:!1,entry_file:n,error:`Simulation diverged: non-finite state at step ${r} (NaN/Inf). The dynamics or control are unstable.`}}return{ok:!0,entry_file:n}}catch(i){return{ok:!1,entry_file:n,error:`${i?.name??"Error"}: ${i?.message??String(i)}`,traceback:typeof i?.stack=="string"?i.stack.slice(0,1200):void 0}}finally{Ki(e)}}async function PR(t,e=220){let n=null;try{n=await Fo(t);let i=Oo(n);n.mj.mj_forward(n.model,n.data);const r=()=>{const v=n.data.xpos;if(n.model.nbody>1)return[v[3],v[4],v[5]];const E=n.data.qpos;return[E[0]??0,E[1]??0,E[2]??0]},s=r();let a=s[2],o=s[2],l=0,c=0,u=s,h=0,f=!1;for(let v=0;v<e;v++){const E=os(n.env.policy(i)),[_,d]=ru(n,E);if(i=_,c+=d,Uc(i)){f=!0;break}n.mj.mj_step(n.model,n.data),n.mj.mj_step(n.model,n.data);const g=r();if(!Number.isFinite(g[0])||!Number.isFinite(g[1])||!Number.isFinite(g[2])){f=!0;break}u=g,a=Math.max(a,g[2]),o=Math.min(o,g[2]),l=Math.max(l,Math.hypot(g[0]-s[0],g[1]-s[1])),h=v+1,v%50===49&&await new Promise(M=>setTimeout(M,0))}const p=v=>Math.round(v*1e3)/1e3;return{ok:!0,metrics:{start_height:p(s[2]),end_height:p(u[2]),max_height:p(a),min_height:p(o),max_horizontal_travel:p(l),end_xy:[p(u[0]),p(u[1])],total_reward:Math.round(c*100)/100,steps_run:h,max_steps:e,diverged:f}}}catch(i){return{ok:!1,error:`${i?.name??"Error"}: ${i?.message??String(i)}`,traceback:typeof i?.stack=="string"?i.stack.slice(0,800):void 0}}finally{Ki(n)}}async function NR(t){let e=null;try{e=await Fo(t);let n=Oo(e);e.mj.mj_forward(e.model,e.data);for(let r=0;r<10;r++)try{const s=os(e.env.policy(n)),[a]=ru(e,s);n=a;for(let o=0;o<5;o++)e.mj.mj_step(e.model,e.data)}catch{break}return{ok:!0,jpeg_b64:ER(e.mj,e.model,e.data,1280,960)}}catch(n){return{ok:!1,error:`${n?.name??"Error"}: ${n?.message??String(n)}`}}finally{Ki(e)}}let gn=null,Hi=null,Jr=null,_h=-1,f0=0;function LR(t){return gn?.dispose(),gn=new MR(t),gn}function DR(){gn?.dispose(),gn=null,Ki(Hi),Hi=null,Jr=null}async function IR(t,e=!1){if(!gn)return;const n=q_(t);if(!e&&Jr===t&&_h===n&&Hi)return;const i=++f0,r=await Fo(t);if(i!==f0||!gn){Ki(r);return}try{Oo(r)}catch{}r.mj.mj_forward(r.model,r.data);const s=Jr===t;Ki(Hi),Hi=r,Jr=t,_h=n,gn.setModel(r.model,r.data,!s)}function UR(){gn?.setModel(null,null),Ki(Hi),Hi=null,Jr=null}function d0(){return!gn||!gn.hasModel()?null:gn.captureJpeg()}function FR(t,e,n,i){let r=!1;const s=e.max_steps,a=e.fps,o=e.speed??1;return(async()=>{let l=null,c=0;try{const u=Jr===t&&!!gn?.hasModel();UR();try{l=await Fo(t)}catch(_){n({type:"log",level:"error",message:`setup failed: ${_?.message??String(_)}`}),n({type:"done",reason:"setup_error"});return}if(r)return;gn?.setModel(l.model,l.data,!u),n({type:"log",level:"info",message:`episode started (${l.entryFile})`});let h=Oo(l);l.mj.mj_forward(l.model,l.data);const f=CR(l,a),p=f*(l.model.opt.timestep||.002),v=o>0?p/o*1e3:0;let E=performance.now();for(let _=0;_<s&&!r;_++){let d;try{d=os(l.env.policy(h))}catch(y){n({type:"log",level:"error",message:`policy: ${y?.message??y}`});break}let g=0,M=!1;try{const y=ru(l,d);h=y[0],g=y[1],M=y[2]}catch(y){n({type:"log",level:"error",message:`step: ${y?.message??y}`});break}c+=g;for(let y=0;y<f;y++)l.mj.mj_step(l.model,l.data);if(Uc(l.data.qpos)){n({type:"log",level:"error",message:`simulation diverged (NaN) at step ${_}`});break}if(n({type:"frame",step:_,reward:g,total_reward:c}),v>0){E+=v;const y=E-performance.now();y>0?await new Promise(b=>setTimeout(b,y)):(E=performance.now(),await new Promise(b=>setTimeout(b,0)))}else _%3===2&&await new Promise(y=>setTimeout(y,0));if(M){n({type:"log",level:"info",message:`done at step ${_}`});break}}}catch(u){n({type:"log",level:"error",message:`runtime: ${u?.message??String(u)}`})}finally{n({type:"done",total_reward:c}),l&&gn?(Ki(Hi),Hi=l,Jr=t,_h=q_(t)):Ki(l),i()}})(),{stop:()=>{r=!0}}}const tt={listProjects:()=>iE(),createProject:(t,e="cartpole")=>rE(t,e),getProject:t=>aa(t),deleteProject:async t=>(await sE(t),{ok:!0}),downloadZip:t=>lE(t),readFile:async(t,e)=>({path:e,content:await $_(t,e)}),writeFile:async(t,e,n)=>(await no(t,e,n),{ok:!0}),chat:async t=>{const e=await aa(t.project_id);return IE({project_id:t.project_id,project_name:e.name,provider:t.provider??"groq",model:t.model,api_key:t.api_key,messages:t.messages.map(n=>({role:n.role==="system"?"user":n.role,content:n.content})),images:t.images})},robotCatalog:async()=>Sp,providerStatus:async()=>({gemini:!1,groq:!1,openai:!1,openrouter:!1,default_provider:"groq",onboarding_free:!!bd}),onboardingChat:(t,e,n,i)=>FE(t,e,n,i),listMenagerieModels:()=>dE(),importMenagerie:(t,e)=>vE(e,t),listPresets:async t=>[],createFromPreset:async(t,e)=>{throw new Error("presets are not available in the browser build")},validate:t=>RR(t),snapshot:t=>NR(t),filmstrip:(t,e=220,n=3)=>PR(t,e)},Xx="sim_llm.settings.v2",OR=new Set(["qwen/qwen3.6-27b","qwen/qwen3-32b"]),$x="llama-3.3-70b-versatile",Oa={default_provider:"groq",providers:{openai:{api_key:"",model:"gpt-4o-mini"},gemini:{api_key:"",model:"gemini-3.5-flash"},groq:{api_key:"",model:$x},openrouter:{api_key:"",model:"deepseek/deepseek-v4-flash"},manual:{api_key:"",model:""}},layout:{sidebar:180,chat:340,editorRow:0},vibe_mode:!0};function h0(){try{const t=localStorage.getItem(Xx);if(!t)return Oa;const e=JSON.parse(t),n={...Oa,...e,providers:{...Oa.providers,...e.providers??{}},layout:{...Oa.layout,...e.layout??{}}},i=n.providers.groq?.model;return(!i||OR.has(i))&&(n.providers.groq={...n.providers.groq,model:$x}),n}catch{return Oa}}function Ll(t){localStorage.setItem(Xx,JSON.stringify(t))}function p0(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=Array(e);n<e;n++)i[n]=t[n];return i}function kR(t){if(Array.isArray(t))return t}function BR(t,e,n){return(e=XR(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function zR(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var i,r,s,a,o=[],l=!0,c=!1;try{if(s=(n=n.call(t)).next,e!==0)for(;!(l=(i=s.call(n)).done)&&(o.push(i.value),o.length!==e);l=!0);}catch(u){c=!0,r=u}finally{try{if(!l&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(c)throw r}}return o}}function VR(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function m0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function g0(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?m0(Object(n),!0).forEach(function(i){BR(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):m0(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function HR(t,e){if(t==null)return{};var n,i,r=GR(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)n=s[i],e.indexOf(n)===-1&&{}.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}function GR(t,e){if(t==null)return{};var n={};for(var i in t)if({}.hasOwnProperty.call(t,i)){if(e.indexOf(i)!==-1)continue;n[i]=t[i]}return n}function WR(t,e){return kR(t)||zR(t,e)||$R(t,e)||VR()}function jR(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e);if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function XR(t){var e=jR(t,"string");return typeof e=="symbol"?e:e+""}function $R(t,e){if(t){if(typeof t=="string")return p0(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p0(t,e):void 0}}function qR(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function v0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function _0(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?v0(Object(n),!0).forEach(function(i){qR(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):v0(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function YR(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduceRight(function(r,s){return s(r)},i)}}function ja(t){return function e(){for(var n=this,i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s];return r.length>=t.length?t.apply(this,r):function(){for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return e.apply(n,[].concat(r,o))}}}function Fc(t){return{}.toString.call(t).includes("Object")}function KR(t){return!Object.keys(t).length}function To(t){return typeof t=="function"}function ZR(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function JR(t,e){return Fc(e)||Tr("changeType"),Object.keys(e).some(function(n){return!ZR(t,n)})&&Tr("changeField"),e}function QR(t){To(t)||Tr("selectorType")}function eP(t){To(t)||Fc(t)||Tr("handlerType"),Fc(t)&&Object.values(t).some(function(e){return!To(e)})&&Tr("handlersType")}function tP(t){t||Tr("initialIsRequired"),Fc(t)||Tr("initialType"),KR(t)&&Tr("initialContent")}function nP(t,e){throw new Error(t[e]||t.default)}var iP={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},Tr=ja(nP)(iP),Dl={changes:JR,selector:QR,handler:eP,initial:tP};function rP(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Dl.initial(t),Dl.handler(e);var n={current:t},i=ja(oP)(n,e),r=ja(aP)(n),s=ja(Dl.changes)(t),a=ja(sP)(n);function o(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(u){return u};return Dl.selector(c),c(n.current)}function l(c){YR(i,r,s,a)(c)}return[o,l]}function sP(t,e){return To(e)?e(t.current):e}function aP(t,e){return t.current=_0(_0({},t.current),e),e}function oP(t,e,n){return To(e)?e(t.current):Object.keys(n).forEach(function(i){var r;return(r=e[i])===null||r===void 0?void 0:r.call(e,t.current[i])}),n}var lP={create:rP},cP={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.55.1/min/vs"}};function uP(t){return function e(){for(var n=this,i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s];return r.length>=t.length?t.apply(this,r):function(){for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return e.apply(n,[].concat(r,o))}}}function fP(t){return{}.toString.call(t).includes("Object")}function dP(t){return t||x0("configIsRequired"),fP(t)||x0("configType"),t.urls?(hP(),{paths:{vs:t.urls.monacoBase}}):t}function hP(){console.warn(qx.deprecation)}function pP(t,e){throw new Error(t[e]||t.default)}var qx={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},x0=uP(pP)(qx),mP={config:dP},gP=function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return function(r){return n.reduceRight(function(s,a){return a(s)},r)}};function Yx(t,e){return Object.keys(e).forEach(function(n){e[n]instanceof Object&&t[n]&&Object.assign(e[n],Yx(t[n],e[n]))}),g0(g0({},t),e)}var vP={type:"cancelation",msg:"operation is manually canceled"};function Sf(t){var e=!1,n=new Promise(function(i,r){t.then(function(s){return e?r(vP):i(s)}),t.catch(r)});return n.cancel=function(){return e=!0},n}var _P=["monaco"],xP=lP.create({config:cP,isInitialized:!1,resolve:null,reject:null,monaco:null}),Kx=WR(xP,2),ko=Kx[0],su=Kx[1];function yP(t){var e=mP.config(t),n=e.monaco,i=HR(e,_P);su(function(r){return{config:Yx(r.config,i),monaco:n}})}function SP(){var t=ko(function(e){var n=e.monaco,i=e.isInitialized,r=e.resolve;return{monaco:n,isInitialized:i,resolve:r}});if(!t.isInitialized){if(su({isInitialized:!0}),t.monaco)return t.resolve(t.monaco),Sf(Mf);if(window.monaco&&window.monaco.editor)return Zx(window.monaco),t.resolve(window.monaco),Sf(Mf);gP(MP,wP)(TP)}return Sf(Mf)}function MP(t){return document.body.appendChild(t)}function EP(t){var e=document.createElement("script");return t&&(e.src=t),e}function wP(t){var e=ko(function(i){var r=i.config,s=i.reject;return{config:r,reject:s}}),n=EP("".concat(e.config.paths.vs,"/loader.js"));return n.onload=function(){return t()},n.onerror=e.reject,n}function TP(){var t=ko(function(n){var i=n.config,r=n.resolve,s=n.reject;return{config:i,resolve:r,reject:s}}),e=window.require;e.config(t.config),e(["vs/editor/editor.main"],function(n){var i=n.m||n;Zx(i),t.resolve(i)},function(n){t.reject(n)})}function Zx(t){ko().monaco||su({monaco:t})}function bP(){return ko(function(t){var e=t.monaco;return e})}var Mf=new Promise(function(t,e){return su({resolve:t,reject:e})}),Jx={config:yP,init:SP,__getMonacoInstance:bP},AP={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},Ef=AP,CP={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},RP=CP;function PP({children:t}){return Hs.createElement("div",{style:RP.container},t)}var NP=PP,LP=NP;function DP({width:t,height:e,isEditorReady:n,loading:i,_ref:r,className:s,wrapperProps:a}){return Hs.createElement("section",{style:{...Ef.wrapper,width:t,height:e},...a},!n&&Hs.createElement(LP,null,i),Hs.createElement("div",{ref:r,style:{...Ef.fullWidth,...!n&&Ef.hide},className:s}))}var IP=DP,Qx=te.memo(IP);function UP(t){te.useEffect(t,[])}var ey=UP;function FP(t,e,n=!0){let i=te.useRef(!0);te.useEffect(i.current||!n?()=>{i.current=!1}:t,e)}var Dn=FP;function io(){}function Vs(t,e,n,i){return OP(t,i)||kP(t,e,n,i)}function OP(t,e){return t.editor.getModel(ty(t,e))}function kP(t,e,n,i){return t.editor.createModel(e,n,i?ty(t,i):void 0)}function ty(t,e){return t.Uri.parse(e)}function BP({original:t,modified:e,language:n,originalLanguage:i,modifiedLanguage:r,originalModelPath:s,modifiedModelPath:a,keepCurrentOriginalModel:o=!1,keepCurrentModifiedModel:l=!1,theme:c="light",loading:u="Loading...",options:h={},height:f="100%",width:p="100%",className:v,wrapperProps:E={},beforeMount:_=io,onMount:d=io}){let[g,M]=te.useState(!1),[y,b]=te.useState(!0),w=te.useRef(null),A=te.useRef(null),x=te.useRef(null),T=te.useRef(d),R=te.useRef(_),L=te.useRef(!1);ey(()=>{let O=Jx.init();return O.then(j=>(A.current=j)&&b(!1)).catch(j=>j?.type!=="cancelation"&&console.error("Monaco initialization: error:",j)),()=>w.current?Y():O.cancel()}),Dn(()=>{if(w.current&&A.current){let O=w.current.getOriginalEditor(),j=Vs(A.current,t||"",i||n||"text",s||"");j!==O.getModel()&&O.setModel(j)}},[s],g),Dn(()=>{if(w.current&&A.current){let O=w.current.getModifiedEditor(),j=Vs(A.current,e||"",r||n||"text",a||"");j!==O.getModel()&&O.setModel(j)}},[a],g),Dn(()=>{let O=w.current.getModifiedEditor();O.getOption(A.current.editor.EditorOption.readOnly)?O.setValue(e||""):e!==O.getValue()&&(O.executeEdits("",[{range:O.getModel().getFullModelRange(),text:e||"",forceMoveMarkers:!0}]),O.pushUndoStop())},[e],g),Dn(()=>{w.current?.getModel()?.original.setValue(t||"")},[t],g),Dn(()=>{let{original:O,modified:j}=w.current.getModel();A.current.editor.setModelLanguage(O,i||n||"text"),A.current.editor.setModelLanguage(j,r||n||"text")},[n,i,r],g),Dn(()=>{A.current?.editor.setTheme(c)},[c],g),Dn(()=>{w.current?.updateOptions(h)},[h],g);let F=te.useCallback(()=>{if(!A.current)return;R.current(A.current);let O=Vs(A.current,t||"",i||n||"text",s||""),j=Vs(A.current,e||"",r||n||"text",a||"");w.current?.setModel({original:O,modified:j})},[n,e,r,t,i,s,a]),$=te.useCallback(()=>{!L.current&&x.current&&(w.current=A.current.editor.createDiffEditor(x.current,{automaticLayout:!0,...h}),F(),A.current?.editor.setTheme(c),M(!0),L.current=!0)},[h,c,F]);te.useEffect(()=>{g&&T.current(w.current,A.current)},[g]),te.useEffect(()=>{!y&&!g&&$()},[y,g,$]);function Y(){let O=w.current?.getModel();o||O?.original?.dispose(),l||O?.modified?.dispose(),w.current?.dispose()}return Hs.createElement(Qx,{width:p,height:f,isEditorReady:g,loading:u,_ref:x,className:v,wrapperProps:E})}var zP=BP;te.memo(zP);function VP(t){let e=te.useRef();return te.useEffect(()=>{e.current=t},[t]),e.current}var HP=VP,Il=new Map;function GP({defaultValue:t,defaultLanguage:e,defaultPath:n,value:i,language:r,path:s,theme:a="light",line:o,loading:l="Loading...",options:c={},overrideServices:u={},saveViewState:h=!0,keepCurrentModel:f=!1,width:p="100%",height:v="100%",className:E,wrapperProps:_={},beforeMount:d=io,onMount:g=io,onChange:M,onValidate:y=io}){let[b,w]=te.useState(!1),[A,x]=te.useState(!0),T=te.useRef(null),R=te.useRef(null),L=te.useRef(null),F=te.useRef(g),$=te.useRef(d),Y=te.useRef(),O=te.useRef(i),j=HP(s),X=te.useRef(!1),U=te.useRef(!1);ey(()=>{let ee=Jx.init();return ee.then(le=>(T.current=le)&&x(!1)).catch(le=>le?.type!=="cancelation"&&console.error("Monaco initialization: error:",le)),()=>R.current?J():ee.cancel()}),Dn(()=>{let ee=Vs(T.current,t||i||"",e||r||"",s||n||"");ee!==R.current?.getModel()&&(h&&Il.set(j,R.current?.saveViewState()),R.current?.setModel(ee),h&&R.current?.restoreViewState(Il.get(s)))},[s],b),Dn(()=>{R.current?.updateOptions(c)},[c],b),Dn(()=>{!R.current||i===void 0||(R.current.getOption(T.current.editor.EditorOption.readOnly)?R.current.setValue(i):i!==R.current.getValue()&&(U.current=!0,R.current.executeEdits("",[{range:R.current.getModel().getFullModelRange(),text:i,forceMoveMarkers:!0}]),R.current.pushUndoStop(),U.current=!1))},[i],b),Dn(()=>{let ee=R.current?.getModel();ee&&r&&T.current?.editor.setModelLanguage(ee,r)},[r],b),Dn(()=>{o!==void 0&&R.current?.revealLine(o)},[o],b),Dn(()=>{T.current?.editor.setTheme(a)},[a],b);let V=te.useCallback(()=>{if(!(!L.current||!T.current)&&!X.current){$.current(T.current);let ee=s||n,le=Vs(T.current,i||t||"",e||r||"",ee||"");R.current=T.current?.editor.create(L.current,{model:le,automaticLayout:!0,...c},u),h&&R.current.restoreViewState(Il.get(ee)),T.current.editor.setTheme(a),o!==void 0&&R.current.revealLine(o),w(!0),X.current=!0}},[t,e,n,i,r,s,c,u,h,a,o]);te.useEffect(()=>{b&&F.current(R.current,T.current)},[b]),te.useEffect(()=>{!A&&!b&&V()},[A,b,V]),O.current=i,te.useEffect(()=>{b&&M&&(Y.current?.dispose(),Y.current=R.current?.onDidChangeModelContent(ee=>{U.current||M(R.current.getValue(),ee)}))},[b,M]),te.useEffect(()=>{if(b){let ee=T.current.editor.onDidChangeMarkers(le=>{let Ie=R.current.getModel()?.uri;if(Ie&&le.find(we=>we.path===Ie.path)){let we=T.current.editor.getModelMarkers({resource:Ie});y?.(we)}});return()=>{ee?.dispose()}}return()=>{}},[b,y]);function J(){Y.current?.dispose(),f?h&&Il.set(s,R.current.saveViewState()):R.current.getModel()?.dispose(),R.current.dispose()}return Hs.createElement(Qx,{width:p,height:v,isEditorReady:b,loading:l,_ref:L,className:E,wrapperProps:_})}var WP=GP,jP=te.memo(WP),XP=jP;function $P(t){return t.endsWith(".js")||t.endsWith(".mjs")?"javascript":t.endsWith(".py")?"python":t.endsWith(".xml")?"xml":t.endsWith(".json")?"json":t.endsWith(".md")?"markdown":"plaintext"}function qP({path:t,value:e,onChange:n}){return C.jsx(XP,{height:"100%",theme:"vs-dark",language:$P(t),value:e,onChange:i=>n(i??""),options:{minimap:{enabled:!1},fontSize:13,scrollBeyondLastLine:!1,automaticLayout:!0}},t)}function YP({stats:t,logs:e,connected:n,onAttachFrame:i,projectName:r,projectId:s,projectVersion:a}){const[o,l]=te.useState(!1),[c,u]=te.useState(!1),[h,f]=te.useState(null),p=te.useRef(null);te.useEffect(()=>{if(p.current)return LR(p.current),()=>DR()},[]),te.useEffect(()=>{if(!s||n)return;let d=!1;return f(null),IR(s).then(()=>{d||u(!0)}).catch(g=>{d||(u(!1),f(String(g?.message??g)))}),()=>{d=!0}},[s,n,a]),te.useEffect(()=>{n&&u(!0)},[n]);function v(){const d=d0();if(!d)return;const g=document.createElement("a");g.href=`data:image/jpeg;base64,${d}`,g.download=`${(r??"frame").replace(/\s+/g,"_")}_step${t.step}.jpg`,document.body.appendChild(g),g.click(),document.body.removeChild(g)}function E(){if(!i)return;const d=d0();d&&i(d)}const _=e.some(d=>d.level==="error");return C.jsx("div",{className:"viewer-pane",children:C.jsxs("div",{className:"viewer-canvas",style:{cursor:"grab"},children:[C.jsx("div",{ref:p,className:"viewer-gl-host",style:{position:"absolute",inset:0}}),!c&&C.jsx("div",{className:"placeholder",children:h?`Scene failed to load: ${h}`:s?"Loading scene… drag to rotate, scroll to zoom":"Create or open a project to begin"}),n&&C.jsxs("div",{className:"viewer-stats-badge",children:[C.jsxs("span",{children:["step ",t.step]}),C.jsx("span",{className:"stats-divider",children:"·"}),C.jsxs("span",{children:["reward ",t.total.toFixed(2)]})]}),_&&C.jsxs("button",{className:"viewer-error-badge",onClick:()=>l(!0),title:"Errors occurred - click to view",children:["⚠ ",e.filter(d=>d.level==="error").length," error(s)"]}),o&&C.jsxs("div",{className:"viewer-stats-panel",children:[C.jsxs("div",{className:"viewer-stats-header",children:[C.jsx("span",{children:"Stats & Logs"}),C.jsxs("div",{className:"viewer-stats-header-actions",children:[C.jsx("button",{title:"Copy stats and logs",onClick:()=>{const d=`Step: ${t.step}
Reward: ${t.reward.toFixed(3)}
Total: ${t.total.toFixed(2)}
`+(e.length?`
Logs:
`+e.slice(-20).map(g=>g.message??g.reason??"").join(`
`):"");navigator.clipboard?.writeText(d)},children:"Copy"}),C.jsx("button",{onClick:()=>l(!1),children:"✕"})]})]}),C.jsxs("div",{className:"viewer-stats-body",children:[C.jsxs("div",{className:"stat-row",children:[C.jsx("span",{children:"Step"}),C.jsx("strong",{children:t.step})]}),C.jsxs("div",{className:"stat-row",children:[C.jsx("span",{children:"Reward"}),C.jsx("strong",{children:t.reward.toFixed(3)})]}),C.jsxs("div",{className:"stat-row",children:[C.jsx("span",{children:"Total"}),C.jsx("strong",{children:t.total.toFixed(2)})]}),e.length>0&&C.jsxs(C.Fragment,{children:[C.jsx("div",{className:"stats-log-divider"}),C.jsx("div",{className:"stats-log-list",children:e.slice(-20).map((d,g)=>C.jsx("div",{className:`log-entry${d.level==="error"?" error":""}`,children:d.message??d.reason??""},g))})]})]})]}),C.jsxs("div",{className:"viewer-overlay",children:[C.jsx("button",{className:"viewer-btn","data-tut":"stats",onClick:()=>l(!o),title:"Toggle stats panel",children:o?"Hide Stats":"Stats"}),c&&C.jsxs(C.Fragment,{children:[C.jsx("button",{className:"viewer-btn","data-tut":"save",title:"Save current frame as JPEG",onClick:v,children:"↓ Save"}),i&&C.jsx("button",{className:"viewer-btn","data-tut":"attach",title:"Attach this frame to your next chat message",onClick:()=>E(),children:"Attach"})]})]})]})})}function Ur(){}Ur.prototype={diff:function(e,n){var i,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=r.callback;typeof r=="function"&&(s=r,r={}),this.options=r;var a=this;function o(y){return s?(setTimeout(function(){s(void 0,y)},0),!0):y}e=this.castInput(e),n=this.castInput(n),e=this.removeEmpty(this.tokenize(e)),n=this.removeEmpty(this.tokenize(n));var l=n.length,c=e.length,u=1,h=l+c;r.maxEditLength&&(h=Math.min(h,r.maxEditLength));var f=(i=r.timeout)!==null&&i!==void 0?i:1/0,p=Date.now()+f,v=[{oldPos:-1,lastComponent:void 0}],E=this.extractCommon(v[0],n,e,0);if(v[0].oldPos+1>=c&&E+1>=l)return o([{value:this.join(n),count:n.length}]);var _=-1/0,d=1/0;function g(){for(var y=Math.max(_,-u);y<=Math.min(d,u);y+=2){var b=void 0,w=v[y-1],A=v[y+1];w&&(v[y-1]=void 0);var x=!1;if(A){var T=A.oldPos-y;x=A&&0<=T&&T<l}var R=w&&w.oldPos+1<c;if(!x&&!R){v[y]=void 0;continue}if(!R||x&&w.oldPos+1<A.oldPos?b=a.addToPath(A,!0,void 0,0):b=a.addToPath(w,void 0,!0,1),E=a.extractCommon(b,n,e,y),b.oldPos+1>=c&&E+1>=l)return o(KP(a,b.lastComponent,n,e,a.useLongestToken));v[y]=b,b.oldPos+1>=c&&(d=Math.min(d,y-1)),E+1>=l&&(_=Math.max(_,y+1))}u++}if(s)(function y(){setTimeout(function(){if(u>h||Date.now()>p)return s();g()||y()},0)})();else for(;u<=h&&Date.now()<=p;){var M=g();if(M)return M}},addToPath:function(e,n,i,r){var s=e.lastComponent;return s&&s.added===n&&s.removed===i?{oldPos:e.oldPos+r,lastComponent:{count:s.count+1,added:n,removed:i,previousComponent:s.previousComponent}}:{oldPos:e.oldPos+r,lastComponent:{count:1,added:n,removed:i,previousComponent:s}}},extractCommon:function(e,n,i,r){for(var s=n.length,a=i.length,o=e.oldPos,l=o-r,c=0;l+1<s&&o+1<a&&this.equals(n[l+1],i[o+1]);)l++,o++,c++;return c&&(e.lastComponent={count:c,previousComponent:e.lastComponent}),e.oldPos=o,l},equals:function(e,n){return this.options.comparator?this.options.comparator(e,n):e===n||this.options.ignoreCase&&e.toLowerCase()===n.toLowerCase()},removeEmpty:function(e){for(var n=[],i=0;i<e.length;i++)e[i]&&n.push(e[i]);return n},castInput:function(e){return e},tokenize:function(e){return e.split("")},join:function(e){return e.join("")}};function KP(t,e,n,i,r){for(var s=[],a;e;)s.push(e),a=e.previousComponent,delete e.previousComponent,e=a;s.reverse();for(var o=0,l=s.length,c=0,u=0;o<l;o++){var h=s[o];if(h.removed){if(h.value=t.join(i.slice(u,u+h.count)),u+=h.count,o&&s[o-1].added){var p=s[o-1];s[o-1]=s[o],s[o]=p}}else{if(!h.added&&r){var f=n.slice(c,c+h.count);f=f.map(function(E,_){var d=i[u+_];return d.length>E.length?d:E}),h.value=t.join(f)}else h.value=t.join(n.slice(c,c+h.count));c+=h.count,h.added||(u+=h.count)}}var v=s[l-1];return l>1&&typeof v.value=="string"&&(v.added||v.removed)&&t.equals("",v.value)&&(s[l-2].value+=v.value,s.pop()),s}var y0=/^[A-Za-z\xC0-\u02C6\u02C8-\u02D7\u02DE-\u02FF\u1E00-\u1EFF]+$/,S0=/\S/,ny=new Ur;ny.equals=function(t,e){return this.options.ignoreCase&&(t=t.toLowerCase(),e=e.toLowerCase()),t===e||this.options.ignoreWhitespace&&!S0.test(t)&&!S0.test(e)};ny.tokenize=function(t){for(var e=t.split(/([^\S\r\n]+|[()[\]{}'"\r\n]|\b)/),n=0;n<e.length-1;n++)!e[n+1]&&e[n+2]&&y0.test(e[n])&&y0.test(e[n+2])&&(e[n]+=e[n+2],e.splice(n+1,2),n--);return e};var Bp=new Ur;Bp.tokenize=function(t){this.options.stripTrailingCr&&(t=t.replace(/\r\n/g,`
`));var e=[],n=t.split(/(\n|\r\n)/);n[n.length-1]||n.pop();for(var i=0;i<n.length;i++){var r=n[i];i%2&&!this.options.newlineIsToken?e[e.length-1]+=r:(this.options.ignoreWhitespace&&(r=r.trim()),e.push(r))}return e};function ZP(t,e,n){return Bp.diff(t,e,n)}var JP=new Ur;JP.tokenize=function(t){return t.split(/(\S.+?[.!?])(?=\s+|$)/)};var QP=new Ur;QP.tokenize=function(t){return t.split(/([{}:;,]|\s+)/)};function nc(t){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?nc=function(e){return typeof e}:nc=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},nc(t)}var e3=Object.prototype.toString,bo=new Ur;bo.useLongestToken=!0;bo.tokenize=Bp.tokenize;bo.castInput=function(t){var e=this.options,n=e.undefinedReplacement,i=e.stringifyReplacer,r=i===void 0?function(s,a){return typeof a>"u"?n:a}:i;return typeof t=="string"?t:JSON.stringify(xh(t,null,null,r),r,"  ")};bo.equals=function(t,e){return Ur.prototype.equals.call(bo,t.replace(/,([\r\n])/g,"$1"),e.replace(/,([\r\n])/g,"$1"))};function xh(t,e,n,i,r){e=e||[],n=n||[],i&&(t=i(r,t));var s;for(s=0;s<e.length;s+=1)if(e[s]===t)return n[s];var a;if(e3.call(t)==="[object Array]"){for(e.push(t),a=new Array(t.length),n.push(a),s=0;s<t.length;s+=1)a[s]=xh(t[s],e,n,i,r);return e.pop(),n.pop(),a}if(t&&t.toJSON&&(t=t.toJSON()),nc(t)==="object"&&t!==null){e.push(t),a={},n.push(a);var o=[],l;for(l in t)t.hasOwnProperty(l)&&o.push(l);for(o.sort(),s=0;s<o.length;s+=1)l=o[s],a[l]=xh(t[l],e,n,i,l);e.pop(),n.pop()}else a=t;return a}var yh=new Ur;yh.tokenize=function(t){return t.slice()};yh.join=yh.removeEmpty=function(t){return t};function t3(t,e){const n=ZP(t??"",e??""),i=[];for(const s of n){const a=s.added?"add":s.removed?"del":"ctx",o=s.value.split(`
`);o.length&&o[o.length-1]===""&&o.pop();for(const l of o)i.push({kind:a,text:l})}const r=[];for(let s=0;s<i.length;s++){const a=i[s];if(a.kind!=="ctx"){r.push(a);continue}i.slice(Math.max(0,s-3),s).some(l=>l.kind!=="ctx")||i.slice(s+1,s+4).some(l=>l.kind!=="ctx")?r.push(a):r.length&&r[r.length-1].text!=="…"&&r.push({kind:"ctx",text:"…"})}return r}function n3({proposal:t,currentContent:e,onApply:n,onReject:i}){const r=te.useMemo(()=>t.patch?.find!==void 0?e.includes(t.patch.find)?e.replace(t.patch.find,t.patch.replace):t.new_content||e:t.new_content,[e,t.new_content,t.patch]),s=te.useMemo(()=>t3(e,r),[e,r]);return C.jsxs("div",{className:"proposal",children:[C.jsxs("header",{children:[C.jsx("span",{children:t.path}),C.jsxs("span",{className:"actions",children:[C.jsx("button",{onClick:i,children:"Reject"}),C.jsx("button",{className:"apply",onClick:n,children:"Apply"})]})]}),t.rationale&&C.jsx("div",{className:"rationale",children:t.rationale}),C.jsx("pre",{className:"diff",children:s.map((a,o)=>C.jsxs("span",{className:a.kind,children:[a.kind==="add"?"+ ":a.kind==="del"?"- ":"  ",a.text]},o))})]})}function wf({orientation:t,onResize:e}){const n=te.useRef(0),i=te.useRef(!1),r=s=>{s.preventDefault(),i.current=!0,n.current=t==="vertical"?s.clientX:s.clientY,document.body.style.cursor=t==="vertical"?"col-resize":"row-resize",document.body.style.userSelect="none";const a=l=>{if(!i.current)return;const c=t==="vertical"?l.clientX:l.clientY,u=c-n.current;n.current=c,e(u)},o=()=>{i.current=!1,document.body.style.cursor="",document.body.style.userSelect="",window.removeEventListener("mousemove",a),window.removeEventListener("mouseup",o)};window.addEventListener("mousemove",a),window.addEventListener("mouseup",o)};return C.jsx("div",{className:`splitter splitter-${t}`,onMouseDown:r,role:"separator"})}const i3=[{id:"groq",label:"Groq",help:"Get a key at ",url:"https://console.groq.com/keys",placeholder:"gsk_…"},{id:"openrouter",label:"OpenRouter",help:"Get a key at ",url:"https://openrouter.ai/keys",placeholder:"sk-or-v1-…"},{id:"openai",label:"OpenAI",help:"Get a key at ",url:"https://platform.openai.com/api-keys",placeholder:"sk-…"},{id:"gemini",label:"Gemini",help:"Get a key at ",url:"https://aistudio.google.com/apikey",placeholder:"AIza…"}];function M0({open:t,initial:e,onClose:n,onSave:i}){const[r,s]=te.useState(e);if(!t)return null;const a=(o,l,c)=>s({...r,providers:{...r.providers,[o]:{...r.providers[o],[l]:c}}});return C.jsx("div",{className:"modal-backdrop",onClick:n,children:C.jsxs("div",{className:"modal",onClick:o=>o.stopPropagation(),children:[C.jsxs("header",{children:[C.jsx("h2",{children:"Settings"}),C.jsx("button",{onClick:n,children:"✕"})]}),C.jsxs("section",{children:[C.jsxs("div",{className:"row","data-tut":"set-provider",children:[C.jsx("label",{children:"Default provider"}),C.jsxs("select",{value:r.default_provider,onChange:o=>s({...r,default_provider:o.target.value}),children:[C.jsx("option",{value:"groq",children:"Groq"}),C.jsx("option",{value:"openrouter",children:"OpenRouter"}),C.jsx("option",{value:"openai",children:"OpenAI"}),C.jsx("option",{value:"gemini",children:"Gemini"})]})]}),C.jsxs("div",{className:"row","data-tut":"set-vibe",children:[C.jsx("label",{htmlFor:"vibe-mode",children:"Vibe mode"}),C.jsx("input",{id:"vibe-mode",type:"checkbox",checked:!!r.vibe_mode,onChange:o=>s({...r,vibe_mode:o.target.checked})})]}),C.jsx("div",{className:"hint",children:"Vibe mode hides the code editor and file tree - leaves just the chat panel and the viewer. Good for non-coders who only want to talk to the agent and watch the result."})]}),C.jsxs("section",{"data-tut":"set-keys",children:[C.jsx("h3",{children:"API keys (stored only in this browser)"}),C.jsxs("p",{className:"hint",children:["Keys are kept in ",C.jsx("code",{children:"localStorage"})," and sent directly from your browser to the AI provider you choose. There is no server in between — nothing ever leaves your machine except that call."]}),i3.map(o=>C.jsxs("div",{className:"provider",children:[C.jsxs("div",{className:"row",children:[C.jsxs("label",{children:[o.label," API key"]}),C.jsx("input",{type:"password",autoComplete:"off",spellCheck:!1,placeholder:o.placeholder,value:r.providers[o.id].api_key,onChange:l=>a(o.id,"api_key",l.target.value)})]}),C.jsxs("div",{className:"row",children:[C.jsxs("label",{children:[o.label," model"]}),C.jsx("input",{type:"text",spellCheck:!1,value:r.providers[o.id].model,onChange:l=>a(o.id,"model",l.target.value)})]}),C.jsxs("div",{className:"hint",children:[o.help,C.jsx("span",{className:"key-get-link",onClick:()=>window.open(o.url,"_blank","noopener,noreferrer"),role:"link",tabIndex:0,style:{cursor:"pointer",textDecoration:"underline"},children:o.url})]})]},o.id))]}),C.jsxs("footer",{children:[C.jsx("button",{onClick:n,children:"Cancel"}),C.jsx("button",{className:"primary",onClick:()=>{i(r),n()},children:"Save"})]})]})})}function r3(t){const e={children:[]};for(const i of t){const r=i.split("/").filter(Boolean);let s=e;for(let a=0;a<r.length;a++){const o=r[a],l=a===r.length-1;let c=s.children.find(u=>u.name===o);c||(c={name:o,path:l?i:"",isFile:l,children:[]},s.children.push(c)),s=c}}const n=i=>{i.children.sort((r,s)=>r.isFile!==s.isFile?r.isFile?1:-1:r.name.localeCompare(s.name)),i.children.forEach(n)};return n(e),e.children}function iy({node:t,depth:e,activeFile:n,onOpenFile:i,expanded:r,toggle:s}){const a=t.isFile?`f:${t.path}`:`d:${e}:${t.name}`,o=!!r[a],l=4+e*12;return t.isFile?C.jsx("div",{className:`tree-row file${t.path===n?" active":""}`,style:{paddingLeft:l+12},title:t.path,onClick:()=>i(t.path),children:t.name}):C.jsxs(C.Fragment,{children:[C.jsxs("div",{className:"tree-row dir",style:{paddingLeft:l},onClick:()=>s(a),children:[C.jsx("span",{className:`chevron${o?" open":""}`,children:"▸"}),t.name]}),o&&t.children.map(c=>C.jsx(iy,{node:c,depth:e+1,activeFile:n,onOpenFile:i,expanded:r,toggle:s},c.isFile?c.path:`${e+1}:${c.name}`))]})}function s3({files:t,activeFile:e,onOpenFile:n}){const i=te.useMemo(()=>r3(t),[t]),[r,s]=te.useState({}),a=o=>s(l=>({...l,[o]:!l[o]}));return C.jsx("div",{className:"tree",children:i.map(o=>C.jsx(iy,{node:o,depth:0,activeFile:e,onOpenFile:n,expanded:r,toggle:a},o.isFile?o.path:`0:${o.name}`))})}function ry({text:t}){const e=t.split(/(```[\s\S]*?```)/g);return C.jsx(C.Fragment,{children:e.map((n,i)=>{if(n.startsWith("```")&&n.endsWith("```")){const r=n.slice(3,-3).replace(/^\w*\n/,"");return C.jsx("pre",{className:"md-code-block",children:C.jsx("code",{children:r})},i)}return C.jsx(a3,{text:n},i)})})}function a3({text:t}){const e=[],n=/(\*\*(.+?)\*\*|\*(.+?)\*|`([^`]+?)`)/g;let i=0,r;for(;(r=n.exec(t))!==null;)r.index>i&&e.push(t.slice(i,r.index)),r[2]?e.push(C.jsx("strong",{children:r[2]},r.index)):r[3]?e.push(C.jsx("em",{children:r[3]},r.index)):r[4]&&e.push(C.jsx("code",{className:"md-inline-code",children:r[4]},r.index)),i=r.index+r[0].length;i<t.length&&e.push(t.slice(i));const s=[];return e.forEach((a,o)=>{typeof a=="string"?a.split(`
`).forEach((c,u)=>{u>0&&s.push(C.jsx("br",{},`br-${o}-${u}`)),c&&s.push(c)}):s.push(a)}),C.jsx(te.Fragment,{children:s})}function o3({steps:t,interval:e=1500,auto:n=!0,currentStep:i}){const[r,s]=te.useState(0);te.useEffect(()=>{if(!n||t.length===0)return;s(0);const o=setInterval(()=>{s(l=>l>=t.length-1?l:l+1)},e);return()=>clearInterval(o)},[t,e,n]);const a=i??r;return C.jsx("div",{className:"thinking-steps",children:t.map((o,l)=>{let c="pending";return l<a?c="done":l===a&&(c="active"),C.jsxs("div",{className:`thinking-step ${c}`,children:[C.jsx("span",{className:"thinking-step-icon",children:c==="done"?"✓":c==="active"?"●":"○"}),C.jsx("span",{className:"thinking-step-label",children:o}),c==="active"&&C.jsxs("span",{className:"thinking-dots",children:[C.jsx("span",{}),C.jsx("span",{}),C.jsx("span",{})]})]},l)})})}const Ul=300,ka=16;function l3({steps:t,visible:e,onFinish:n}){const[i,r]=te.useState(0),[s,a]=te.useState(null),[o,l]=te.useState(0),c=te.useRef(-1),u=t[i];if(te.useEffect(()=>{if(!e)return;const w=c.current;w!==i&&(w>=0&&t[w]?.after&&t[w].after(),u?.before&&u.before(),c.current=i)},[i,e,u,t]),te.useEffect(()=>{e&&(r(0),c.current=-1,t[0]?.before&&(t[0].before(),c.current=0))},[e]),te.useEffect(()=>(e?document.body.classList.add("tutorial-active"):document.body.classList.remove("tutorial-active"),()=>document.body.classList.remove("tutorial-active")),[e]),te.useLayoutEffect(()=>{if(!e||!u)return;let w=0;const A=()=>{const R=document.querySelector(`[data-tut="${u.target}"]`);R?(R.scrollIntoView({block:"nearest",inline:"nearest"}),a(R.getBoundingClientRect())):a(null)};A();const x=window.setInterval(()=>l(R=>R+1),400),T=()=>A();return window.addEventListener("resize",T,!0),window.addEventListener("scroll",T,!0),w=requestAnimationFrame(A),()=>{window.clearInterval(x),window.removeEventListener("resize",T,!0),window.removeEventListener("scroll",T,!0),cancelAnimationFrame(w)}},[e,u,o]),!e||!u)return null;const h=()=>{t[i]?.after&&t[i].after(),n()},f=()=>{i>=t.length-1?h():r(w=>w+1)},p=()=>{i>0&&r(w=>w-1)},v=6,E=window.innerWidth,_=window.innerHeight,d=s?{x:s.left-v,y:s.top-v,w:s.width+v*2,h:s.height+v*2}:{x:E/2-80,y:_/2-24,w:160,h:48};let g=u.placement??"bottom";if(s){const w=_-(d.y+d.h),A=d.y,x=E-(d.x+d.w);g==="bottom"&&w<170&&A>w&&(g="top"),g==="top"&&A<170&&w>A&&(g="bottom"),(g==="left"||g==="right")&&x<Ul+ka&&(g=w>A?"bottom":"top")}let M={};const y=d.x+d.w/2;g==="bottom"?M={top:d.y+d.h+ka,left:b(y-Ul/2)}:g==="top"?M={top:d.y-ka,left:b(y-Ul/2),transform:"translateY(-100%)"}:g==="right"?M={top:d.y,left:d.x+d.w+ka}:M={top:d.y,left:d.x-ka,transform:"translateX(-100%)"};function b(w){return Math.max(12,Math.min(w,E-Ul-12))}return C.jsxs("div",{className:"gt-overlay",role:"dialog","aria-modal":"true",children:[C.jsxs("svg",{className:"gt-mask",width:"100%",height:"100%",children:[C.jsx("defs",{children:C.jsxs("mask",{id:"gt-hole",children:[C.jsx("rect",{width:"100%",height:"100%",fill:"white"}),C.jsx("rect",{x:d.x,y:d.y,width:d.w,height:d.h,rx:10,fill:"black"})]})}),C.jsx("rect",{width:"100%",height:"100%",fill:"rgba(4, 8, 14, 0.72)",mask:"url(#gt-hole)"})]}),C.jsx("div",{className:"gt-ring",style:{left:d.x-3,top:d.y-3,width:d.w+6,height:d.h+6}}),C.jsxs("div",{className:`gt-bubble gt-${g}`,style:M,children:[C.jsxs("div",{className:"gt-step-count",children:["Step ",i+1," of ",t.length]}),C.jsx("h4",{children:u.title}),C.jsx("p",{children:u.body}),C.jsxs("div",{className:"gt-actions",children:[C.jsx("button",{className:"gt-skip",onClick:h,children:"Skip tour"}),C.jsxs("div",{className:"gt-nav",children:[i>0&&C.jsx("button",{className:"gt-back",onClick:p,children:"Back"}),C.jsx("button",{className:"gt-next",onClick:f,children:i>=t.length-1?"Finish":"Next"})]})]})]})]})}const c3=["thinking","constructing","building","handholding","spawning","magic happening","conjuring","weaving","assembling","orchestrating","sculpting","materializing","tinkering","calibrating","dreaming up","imagining","crafting","summoning","aligning","computing","wiring it up","bending physics","tuning","composing","brewing","iterating","shaping reality","untangling","polishing"];function u3({override:t}){const[e,n]=te.useState(""),i=te.useRef(null);return te.useEffect(()=>{if(t){i.current&&window.clearTimeout(i.current),n(t);return}const r=[...c3].sort(()=>Math.random()-.5);let s=0,a=0,o=!0;const l=()=>{const c=r[s%r.length];if(o){if(a+=1,n(c.slice(0,a)),a>=c.length){o=!1,i.current=window.setTimeout(l,1200);return}i.current=window.setTimeout(l,55+Math.random()*45)}else{if(a-=1,n(c.slice(0,a)),a<=0){o=!0,s+=1,i.current=window.setTimeout(l,260);return}i.current=window.setTimeout(l,26)}};return i.current=window.setTimeout(l,200),()=>{i.current&&window.clearTimeout(i.current)}},[t]),C.jsxs("div",{className:"ti",role:"status","aria-live":"polite",children:[C.jsx(f3,{}),C.jsxs("span",{className:"ti-text",children:[e,C.jsx("span",{className:"ti-cursor","aria-hidden":"true"})]})]})}function f3(){return C.jsxs("svg",{className:"ti-blocks",width:"26",height:"24",viewBox:"0 0 26 24","aria-hidden":"true",children:[C.jsx("rect",{className:"ti-block ti-blk1",x:"6",y:"17",width:"14",height:"5",rx:"1.5"}),C.jsx("rect",{className:"ti-block ti-blk2",x:"8",y:"10.5",width:"10",height:"5",rx:"1.5"}),C.jsx("rect",{className:"ti-block ti-blk3",x:"10",y:"4",width:"6",height:"5",rx:"1.5"})]})}function E0({height:t=30,className:e=""}){return C.jsx("span",{className:`tau-logo ${e}`.trim(),style:{height:t},"aria-label":"tau-sim",children:C.jsx("img",{src:"/tau-logo.png",alt:"tau-sim"})})}function d3(t){if(!t)return;const e=t.toLowerCase();if(e.includes("busy")||e.includes("capacity")||e.includes("waiting")||e.includes("resuming")||e.includes("reconnect")||e.includes("stopping"))return t}const Tf={groq:{label:"Groq",url:"https://console.groq.com/keys",placeholder:"gsk_…"},openrouter:{label:"OpenRouter",url:"https://openrouter.ai/keys",placeholder:"sk-or-v1-…"},openai:{label:"OpenAI",url:"https://platform.openai.com/api-keys",placeholder:"sk-…"},gemini:{label:"Gemini",url:"https://aistudio.google.com/apikey",placeholder:"AIza…"}};function h3(){const[t,e]=te.useState(()=>h0()),[n,i]=te.useState(!1);te.useEffect(()=>{Ll(t)},[t]);const[r,s]=te.useState("onboarding"),[a,o]=te.useState(""),[l,c]=te.useState([]),[u,h]=te.useState([]),[f,p]=te.useState(null),[v,E]=te.useState(null),[_,d]=te.useState(""),[g,M]=te.useState(!1),[y,b]=te.useState("idle"),w=te.useRef(void 0),[A,x]=te.useState({step:0,reward:0,total:0}),[T,R]=te.useState(1),[L,F]=te.useState([]),[$,Y]=te.useState(!1),O=te.useRef(null),[j,X]=te.useState(0),[U,V]=te.useState([]),[J,ee]=te.useState(""),[le,Ie]=te.useState([]),[we,Te]=te.useState(t.default_provider),[K,ue]=te.useState(!1),[fe,Ce]=te.useState(""),[ke,Ne]=te.useState(null),[ht,He]=te.useState("welcome"),[Ye,et]=te.useState([]),[Ze,St]=te.useState(null),[Ot,It]=te.useState(""),[Tt,Mt]=te.useState(!1),[bt,z]=te.useState({}),[rn,Je]=te.useState(!1),[P,S]=te.useState(!1),[G,q]=te.useState(!1),[Z,he]=te.useState(!1),[xe,Q]=te.useState(!1),[ne,ge]=te.useState(!1),[Le,ve]=te.useState(!1),[ye,De]=te.useState("");te.useEffect(()=>{let H=!1;try{H=localStorage.getItem("tau_tutorial_seen")==="1"}catch{}if(H)ge(!1);else{const m=setTimeout(()=>he(!0),600);return()=>clearTimeout(m)}},[]),te.useEffect(()=>{tt.listProjects().then(h).catch(console.error),tt.robotCatalog().then(et).catch(console.error),tt.providerStatus().then(H=>{if(z({gemini:H.gemini,groq:H.groq,openai:H.openai,openrouter:H.openrouter}),H.groq)Te("groq");else if(H.gemini)Te("gemini");else if(H.openai)Te("openai");else if(H.openrouter)Te("openrouter");else{const m=h0();m.providers.groq.api_key?Te("groq"):m.providers.gemini.api_key?Te("gemini"):m.providers.openai.api_key?Te("openai"):m.providers.openrouter.api_key?Te("openrouter"):Te("groq")}}).catch(console.error)},[]);async function Fe(H){const m=await tt.getProject(H);p(m),V([]),F([]),x({step:0,reward:0,total:0});const N=m.files.find(I=>I.endsWith(".xml"))??m.files[0]??null;N&&await ze(m.id,N),s("workspace")}async function ze(H,m){const N=await tt.readFile(H,m);E(m),d(N.content),M(!1)}async function k(){if(!(!f||!v)){b("saving");try{await tt.writeFile(f.id,v,_),M(!1),b("saved"),X(H=>H+1)}catch{b("idle")}}}te.useEffect(()=>{if(!(!g||!f||!v))return b("saving"),window.clearTimeout(w.current),w.current=window.setTimeout(()=>{k()},500),()=>window.clearTimeout(w.current)},[_,g,f,v]);async function Se(H,m){s("loading"),o(`Setting up ${m.name}`),c(["Creating project workspace","Checking for pretrained controllers","Downloading robot model & meshes","Configuring physics engine","Initializing environment"]);try{let N=[];if(m.menagerie_id)try{N=await tt.listPresets(m.menagerie_id)}catch{}const I=N.find(re=>re.available&&re.editable);let D;if(I){o(`Loading ${m.name} with pretrained controller`),c(["Creating project workspace","Found pretrained controller","Downloading robot model & policy checkpoint","Setting up MJCF scene files","Wiring controller to environment","Almost ready..."]);try{D=await tt.createFromPreset(I.id,H)}catch{if(m.menagerie_id){o(`Importing ${m.name} from MuJoCo Menagerie`),c(["Created project workspace","Preset unavailable - using menagerie import","Downloading robot model","Setting up scene files"]),D=await tt.createProject(H,"empty");const re=await tt.importMenagerie(D.id,m.menagerie_id);D=await tt.getProject(D.id)}else D=await tt.createProject(H,"empty")}V(re=>[...re,{role:"assistant",content:`${m.name} is ready with a pretrained controller!

Press ▶ Run to see it in action. Now, how would you like to set up the environment? Describe the scene - obstacles, terrain, objects - and I'll build it for you.`}])}else if(m.menagerie_id){D=await tt.createProject(H,"empty"),o(`Importing ${m.name} from MuJoCo Menagerie`),c(["Created project workspace","Connecting to MuJoCo Menagerie","Downloading XML definitions","Downloading mesh assets","Patching scene configuration","Writing environment module"]);const re=await tt.importMenagerie(D.id,m.menagerie_id);D=await tt.getProject(D.id),V(ae=>[...ae,{role:"assistant",content:`${m.name} is loaded (${re.file_count} files imported).

How would you like to set up the environment? Describe the scene and I'll build it for you.`}])}else D=await tt.createProject(H,"empty"),V(re=>[...re,{role:"assistant",content:`Created project for ${m.name}. This robot isn't in the menagerie catalog yet, so we'll start with a blank scene.

Describe your environment and I'll help set it up.`}]);h(re=>[...re,D]),p(D);const B=D.files.find(re=>re.endsWith(".xml"))??D.files[0]??null;B&&await ze(D.id,B),setTimeout(()=>{const re=Object.entries(t.providers).some(([ae,oe])=>ae!=="manual"&&oe.api_key),ce=Object.values(bt).some(Boolean);s(re||ce?"workspace":"key_prompt")},800)}catch(N){V(I=>[...I,{role:"assistant",content:`Setup failed: ${N.message??N}`}]),s("onboarding"),He("welcome")}}async function ie(){if(!f||!confirm(`Delete project "${f.name}" and all its files? This cannot be undone.`))return;const m=f.id;try{await tt.deleteProject(m)}catch(N){alert(`Failed to delete: ${N.message??N}`);return}h(N=>N.filter(I=>I.id!==m)),p(null),E(null),d(""),M(!1),Me(),s("onboarding"),He("welcome"),V([])}function _e(){f&&(Me(),F([]),x({step:0,reward:0,total:0}),Y(!0),O.current=FR(f.id,{max_steps:1e3,fps:30,speed:T},H=>{H.type==="frame"?x({step:H.step??0,reward:H.reward??0,total:H.total_reward??0}):(H.type==="log"||H.type==="done")&&F(m=>[...m,H])},()=>Y(!1)))}function Me(){O.current?.stop(),O.current=null,Y(!1)}te.useEffect(()=>()=>Me(),[]),te.useEffect(()=>{const H=m=>{(m.ctrlKey||m.metaKey)&&m.key==="s"&&(m.preventDefault(),k())};return window.addEventListener("keydown",H),()=>window.removeEventListener("keydown",H)});const se=te.useRef(new Set),Re=te.useRef(0),Ae=3,ot=!!t.vibe_mode;te.useEffect(()=>{if(r!=="workspace"||!f||!xe)return;const H=setTimeout(()=>{q(!0),Q(!1)},600);return()=>clearTimeout(H)},[r,f,xe]),te.useEffect(()=>{if(!(ot||K))for(let H=0;H<U.length;H++){const m=U[H];if(m.proposals&&m.proposals.length>0){xa(H,0);return}}},[U,K,ot]),te.useEffect(()=>{if(ot||K)return;const H=U.length-1;if(H<0||se.current.has(H))return;const m=U[H];if(m?.role==="system"&&m.action==="fix"&&m.fixPrompt){if(se.current.add(H),Re.current>=Ae)return;Re.current+=1,Fr(m.fixPrompt)}},[U,K,ot]),te.useEffect(()=>{if(ot||K||$)return;const H=U.length-1;if(H<0||se.current.has(H))return;const m=U[H];m?.role==="system"&&m.action==="run"&&(se.current.add(H),_e())},[U,K,$,ot]);async function ft(){if(!f||!J.trim()||K)return;Re.current=0;const H=J.trim(),m={role:"user",content:H},N=[...U,m];V(N),ee("");const I=le;Ie([]),ue(!0),Ne(null),V(ce=>[...ce,{role:"assistant",content:"Reading project files...",pending:!0}]);const D=["Reading project files...","Understanding your request...","Generating changes..."];let B=0;const re=setInterval(()=>{B++,B<D.length&&V(ce=>{const ae=[...ce];for(let oe=ae.length-1;oe>=0;oe--)if(ae[oe].pending){ae[oe]={...ae[oe],content:D[B]};break}return ae})},2e3);try{const ce=t.providers[we],ae=await tt.chat({project_id:f.id,provider:we,model:ce.model||void 0,api_key:ce.api_key||void 0,messages:N.map(oe=>({role:oe.role,content:oe.content})),images:I.map(({data:oe,media_type:pe})=>({data:oe,media_type:pe}))});clearInterval(re),V(oe=>[...oe.filter(Ue=>!Ue.pending),{role:"assistant",content:ae.reply,proposals:ae.proposals,tokensSent:ae.tokens_sent}]),ue(!1)}catch(ce){clearInterval(re),V(ae=>ae.filter(oe=>!oe.pending&&oe.content!==H)),ee(H),Ne(Bo(ce?.message??String(ce))),ue(!1)}}const yn=te.useRef(!1),Ut=te.useRef(!1);function au(){Ut.current=!0,Ce("Stopping…")}function Bo(H){if(!H)return"Unknown error.";let m=H.trim();m=m.replace(/^\d{3}:\s*/,"");try{const I=m.match(/\{[\s\S]*\}/);if(I){const D=JSON.parse(I[0]),B=D.detail??D;if(typeof B=="string")return B;if(B&&typeof B.message=="string")return B.message;if(typeof D.message=="string")return D.message}}catch{}const N=m.match(/message['"]?\s*[:=]\s*['"]([^'"]{8,400})/i);return N?N[1]:m.length>400?m.slice(0,400)+"…":m}function zo(H){if(!H)return"Done.";let m=H.trim();if(m.startsWith("{")||m.startsWith("```")){const N=m.match(/"reply"\s*:\s*"((?:[^"\\]|\\.)*)"/);if(N)try{m=JSON.parse('"'+N[1]+'"')}catch{m=N[1]}else return"Done - I've updated the environment."}return m=m.replace(/```[\s\S]*?```/g,"").trim(),/[{}();]\s*$/.test(m)||/\b(def |import |class |self\.)/.test(m)?"Done - I've updated the environment.":(m.length>600&&(m=m.slice(0,600).trim()+"…"),m||"Done.")}async function ga(H){if(f){for(const m of H)try{let N;if(m.patch?.find!==void 0){const I=await tt.readFile(f.id,m.path);I.content.includes(m.patch.find)?N=I.content.replace(m.patch.find,m.patch.replace):(console.warn("patch find-string not found in",m.path,"- falling back to new_content"),N=m.new_content||I.content)}else N=m.new_content;await tt.writeFile(f.id,m.path,N),v===m.path&&(d(N),M(!1)),p(I=>I&&!I.files.includes(m.path)?{...I,files:[...I.files,m.path].sort()}:I)}catch{}X(m=>m+1)}}async function ou(H){if(!f||yn.current)return;yn.current=!0,Ut.current=!1;const m=t.providers[we],N=U.map(me=>({role:me.role==="assistant"?"assistant":"user",content:me.content})).filter(me=>me.content);N.push({role:"user",content:H}),V(me=>[...me,{role:"user",content:H}]),ee(""),Ne(null);let I=le.map(({data:me,media_type:lt})=>({data:me,media_type:lt}));Ie([]),ue(!0);let D=0;const B=1,re=18;let ce="";const ae=async()=>{const me=()=>tt.chat({project_id:f.id,provider:we,model:m.model||void 0,api_key:m.api_key||void 0,messages:N.slice(-16),images:I.length?I:void 0}),lt=["Provider is busy right now - your request resumes soon…","Provider is at capacity - your request resumes shortly…","Still waiting on the provider - your request resumes soon…"];for(let We=0;We<6;We++){if(Ut.current)return null;try{return await me()}catch(mt){if(Ut.current)return null;if(mt instanceof eu){if(ce=mt.message||"Provider rate limit reached (free-tier tokens per minute).",D>=B||(D+=1,Math.ceil(mt.retryAfter)>re))return null;const Bt=Math.max(1,Math.min(Math.ceil(mt.retryAfter),re));let rt=0,Rn=0;for(;rt<Bt;){if(Ut.current)return null;Ce(lt[Rn%lt.length]),Rn+=1;for(let Qe=0;Qe<4;Qe++){if(Ut.current)return null;await new Promise(At=>setTimeout(At,1e3))}rt+=4}Ce("Resuming…");continue}if(ce=Bo(mt?.message??String(mt)),We>=2)return null;Ce("Reconnecting…"),await new Promise(Bt=>setTimeout(Bt,3e3*(We+1)))}}return null},oe=12;let pe="",Ue=0,Oe=null,Pe=0;const st=H;let Et=!1,pt=!1,at=0,kt=!1;try{for(let me=1;me<=oe;me++){if(Ut.current){pe="Stopped. Tell me what you'd like to do next.";break}Ce(me===1?"Thinking…":Oe?"Fixing an issue…":"Refining the result…");const lt=await ae();if(lt?.tokens_sent&&(Ue+=lt.tokens_sent),Ut.current){pe="Stopped. Tell me what you'd like to do next.";break}if(!lt){pe=ce?`I couldn't finish that.

**Reason:** ${ce}`:"I couldn't finish that. Please try again or rephrase your request.",kt=!0;break}I=[],pe=lt.reply||pe,N.push({role:"assistant",content:lt.reply||""});const We=lt.proposals??[];if(We.length===0){const rt=(lt.reply||"").trim(),Rn=/\?\s*$/.test(rt);if(!Oe){Ce("Testing the environment…");try{const Qe=await tt.validate(f.id);Qe.ok||(Oe=`${Qe.error}
${Qe.traceback??""}`.trim())}catch{}}if(Oe){if(Pe+=1,Pe>3){pe="I tried several times but couldn't get this fully working. Please try rephrasing your request.";break}Ce("Fixing an issue…"),N.push({role:"user",content:"The project does NOT run - it fails with this error:\n\n```\n"+Oe+"\n```\n\nYou must return the COMPLETE corrected file(s) in the `proposals` array - not just an explanation. Fix the code now."});continue}if(pt||Rn)break;if(!Et&&at<3){at+=1,Ce("Making the changes…"),N.push({role:"user",content:`You described the change but did NOT make it. Do not just explain - actually implement it now. Return the COMPLETE updated file(s) (env.js and/or scene.xml) in the \`proposals\` array so the goal "${st}" is achieved. No prose-only replies.`});continue}break}Pe=0,at=0,Ce("Applying changes…"),await ga(We),Et=!0,pt=!1,Ce("Testing the environment…");let mt;try{mt=await tt.validate(f.id)}catch(rt){mt={ok:!1,entry_file:"?",error:String(rt)}}if(!mt.ok){const rt=mt.traceback??"";Oe=`${mt.error}
${rt}`.trim(),N.push({role:"user",content:`The change broke the project. The runner failed to load \`${mt.entry_file}\` and step the environment with this error:

\`\`\`
`+Oe+"\n```\n\nFix the code so it loads and runs without error. Return the COMPLETE corrected file(s) in the proposals array."});continue}Oe=null,Ce("Watching it run…");let Bt;try{Bt=await tt.filmstrip(f.id,220,3)}catch{Bt=void 0}if(Bt?.ok&&Bt.metrics){const rt=Bt.metrics,Rn=rt.diverged?` The simulation went UNSTABLE (NaN / blew up) after ${rt.steps_run} of ${rt.max_steps} steps - the control is too aggressive and must be made gentler/stable.`:"";Ce("Checking the result…"),pt=!0,N.push({role:"user",content:`I ran the simulation for ${rt.max_steps} steps and measured the robot's main body:
- start height: ${rt.start_height} m
- end height: ${rt.end_height} m
- max height reached: ${rt.max_height} m
- min height: ${rt.min_height} m
- horizontal travel from start: up to ${rt.max_horizontal_travel} m
- final XY position: [${rt.end_xy[0]}, ${rt.end_xy[1]}]
- total reward: ${rt.total_reward}
- steps completed: ${rt.steps_run}/${rt.max_steps}${Rn}

The user's goal was: "${st}".
Judge honestly whether these numbers show the goal is met.
- If YES: reply with an empty \`proposals\` array and a short, friendly one-line confirmation.
- If NO: do NOT just describe - return the COMPLETE corrected file(s) in \`proposals\` (the motion logic lives in env.js's policy method). Keep iterating until the numbers match the goal.`});continue}break}}finally{yn.current=!1;const me=Ut.current;if(Ut.current=!1,ue(!1),Ce(""),Oe&&!me&&(pe="I couldn't get this fully working. The environment still fails:\n\n```\n"+Oe.slice(0,500)+"\n```",kt=!0),pe&&(kt?(Ne(pe.replace(/\n\n\*\*Reason:\*\*.*$/,"")),ee(H),V(lt=>lt.filter(We=>We.content!==H))):V(lt=>[...lt,{role:"assistant",content:zo(pe),tokensSent:Ue}])),!O.current&&!me)try{_e()}catch{}}}function Vo(){const H=J.trim();!H||K||(ot?ou(H):ft())}function va(){he(!1),r==="workspace"&&f?q(!0):(Q(!0),ge(!0))}function ui(){he(!1),ge(!0);try{localStorage.setItem("tau_tutorial_seen","1")}catch{}}const _a=[{target:"provider",title:"Choose your AI provider",body:"This dropdown picks which AI model powers the assistant. Groq is fast and has a free tier - a great default.",placement:"bottom"},{target:"apikey",title:"Add your API key",body:"Click here to paste your API key. If it's missing, this button asks for one and links to where you can generate a free key. The assistant won't work without a key (yours or the server's).",placement:"bottom"},{target:"project-select",title:"Switch projects",body:"Every robot environment is its own project. Use this dropdown to jump between the ones you've created.",placement:"bottom"},{target:"new",title:"Create a new project",body:"Start fresh here. You'll describe the robot you want and the assistant sets up a new environment for you.",placement:"bottom"},{target:"download",title:"Download your project",body:"Export the whole project - scene, code and assets - as a zip you can run locally or share.",placement:"bottom"},{target:"delete",title:"Delete a project",body:"Permanently removes the current project. Use with care - this can't be undone.",placement:"bottom"},{target:"run",title:"Run the simulation",body:"Press Run to play an episode in the viewer and watch your robot move. It becomes a Stop button while running.",placement:"bottom"},{target:"speed",title:"Playback speed",body:"Control how fast the simulation plays - from slow-motion (0.5×) up to MAX for quick previews.",placement:"bottom"},{target:"stats",title:"Stats & logs",body:"Open a panel showing the current step, reward and any log messages or errors from the running episode. The text is selectable and copyable.",placement:"top"},{target:"save",title:"Save a snapshot",body:"Save the current viewer frame as an image to your computer.",placement:"top"},{target:"attach",title:"Attach a frame to chat",body:"Grab the current frame and attach it to your next message, so the assistant can see exactly what you see and act on it.",placement:"top"},{target:"code",title:"Show the code panel",body:"Toggle the file tree and code editor. Hidden by default for a clean no-code experience - open it any time to inspect or hand-edit the generated code.",placement:"bottom"},{target:"settings",title:"Open Settings",body:"All your preferences live here - providers, keys, rendering and more. Let's take a quick look inside.",before:()=>i(!1),placement:"left"},{target:"set-provider",title:"Default provider",body:"Sets which AI provider is selected by default for new sessions.",before:()=>i(!0),placement:"right"},{target:"set-vibe",title:"Vibe mode",body:"When on, the interface hides the code editor and errors and just shows the chat and viewer - perfect for non-coders. Turn it off to see the full developer view.",before:()=>i(!0),placement:"right"},{target:"set-keys",title:"API keys",body:"Paste a key and pick a model for each provider here. Keys stay in your browser only and are never saved on the server. That's the tour - you're ready to build!",before:()=>i(!0),after:()=>i(!1),placement:"right"}];async function xa(H,m){if(!f)return;const N=U[H]?.proposals?.[m];if(!N)return;V(D=>D.map((B,re)=>re===H?{...B,proposals:B.proposals?.filter((ce,ae)=>ae!==m)}:B));let I;if(N.patch?.find!==void 0)try{const D=await tt.readFile(f.id,N.path);D.content.includes(N.patch.find)?I=D.content.replace(N.patch.find,N.patch.replace):(console.warn("patch find-string not found in",N.path,"- falling back to new_content"),I=N.new_content||D.content)}catch{I=N.new_content}else I=N.new_content;v===N.path&&(d(I),M(!1)),f&&!f.files.includes(N.path)&&p({...f,files:[...f.files,N.path].sort()});try{await tt.writeFile(f.id,N.path,I),X(D=>D+1),V(D=>{const B=D[D.length-1];return B&&B.role==="system"&&B.action==="run"?D.map((re,ce)=>ce===D.length-1?{...re,content:`${re.content}, ${N.path}`}:re):[...D,{role:"system",content:`✓ Applied ${N.path}`,action:"run"}]}),Go(f.id,N.path)}catch(D){V(B=>[...B,{role:"assistant",content:`Apply failed: ${D.message??D}`}])}}async function Ho(H,m){V(N=>N.map((I,D)=>D===H?{...I,proposals:I.proposals?.filter((B,re)=>re!==m)}:I))}async function us(H){try{await tt.downloadZip(H.id),V(m=>[...m,{role:"system",content:`Downloaded ${H.name}.zip`}])}catch(m){alert(`Download failed: ${m.message??m}`)}}async function Go(H,m){let N;try{N=await tt.validate(H)}catch(I){N={ok:!1,entry_file:"<unknown>",error:String(I)}}if(!N.ok){const I=N.error??"unknown error",D=N.traceback??"",B=`The change to \`${m}\` broke the project. When the runner tried to load \`${N.entry_file}\` and step the env, it failed with:

\`\`\`
${I}

${D}\`\`\`

Please fix it.`;V(re=>[...re,{role:"system",content:`⚠ Verify failed: ${I}`,action:"fix",fixPrompt:B}]);return}try{const I=await tt.snapshot(H);if(I.ok&&I.jpeg_b64&&(Ie(D=>[...D,{data:I.jpeg_b64,media_type:"image/jpeg",label:"auto-verify"}]),f)){const D={role:"user",content:"I've applied your changes. Here is a screenshot of the current environment. Does it look correct? If not, please fix it.",auto:!0},B=[...U,D];V(B),ue(!0);try{const re=t.providers[we],ce=await tt.chat({project_id:H,provider:we,model:re.model||void 0,api_key:re.api_key||void 0,messages:B.map(ae=>({role:ae.role,content:ae.content})),images:[{data:I.jpeg_b64,media_type:"image/jpeg"}]});V(ae=>[...ae,{role:"assistant",content:ce.reply,proposals:ce.proposals}]),ue(!1)}catch{ue(!1)}Ie([])}}catch{}}async function Fr(H){if(!f)return;const m={role:"user",content:H,auto:!0},N=[...U,m];V(N),ue(!0);try{const I=t.providers[we],D=await tt.chat({project_id:f.id,provider:we,model:I.model||void 0,api_key:I.api_key||void 0,messages:N.map(B=>B.role==="system"?{role:"user",content:B.content}:{role:B.role,content:B.content})});V(B=>[...B,{role:"assistant",content:D.reply,proposals:D.proposals}]),ue(!1)}catch(I){V(D=>[...D,{role:"assistant",content:`Error: ${I.message??I}`,error:!0}]),ue(!1)}}async function Wo(H){if(!f)return"";if(H===v)return _;try{return(await tt.readFile(f.id,H)).content}catch{return""}}async function fs(H){const m={role:"user",content:H},N=[...U,m];V(N),ee(""),V(re=>[...re,{role:"assistant",content:"Thinking...",pending:!0}]);const I=["Analyzing...","Searching catalog...","Evaluating..."];let D=0;const B=setInterval(()=>{D++,D<I.length&&V(re=>{const ce=[...re];for(let ae=ce.length-1;ae>=0;ae--)if(ce[ae].pending){ce[ae]={...ce[ae],content:I[D]};break}return ce})},1200);try{const re=t.providers[we],ce=N.filter(pe=>pe.role==="user"||pe.role==="assistant").filter(pe=>!pe.pending).map(pe=>({role:pe.role,content:pe.content})),ae=u.map(pe=>pe.name),oe=await tt.onboardingChat(ce,ae,we,re.api_key||void 0);if(clearInterval(B),oe.action==="confirmed"&&oe.robot&&oe.project_name){const pe=Ye.find(Ue=>Ue.name===oe.robot.name)??{name:oe.robot.name,menagerie_id:oe.robot.menagerie_id,category:oe.robot.category,rank:1,description:"",tags:[],has_controller:oe.robot.has_controller};St(pe),It(oe.project_name),V(Ue=>[...Ue.filter(Pe=>!Pe.pending),{role:"assistant",content:oe.reply}]),await Se(oe.project_name,pe)}else{if(oe.robot){const pe=Ye.find(Ue=>Ue.name===oe.robot.name)??{name:oe.robot.name,menagerie_id:oe.robot.menagerie_id,category:oe.robot.category,rank:1,description:"",tags:[],has_controller:oe.robot.has_controller};St(pe),oe.project_name&&It(oe.project_name)}V(pe=>[...pe.filter(Oe=>!Oe.pending),{role:"assistant",content:oe.reply}])}}catch{clearInterval(B),V(ce=>[...ce.filter(oe=>!oe.pending),{role:"assistant",content:"I'm having trouble connecting to the AI right now. Please try again in a few seconds."}])}}const lu=H=>e(m=>({...m,layout:{...m.layout,sidebar:bf(m.layout.sidebar+H,80,480)}})),cu=H=>e(m=>({...m,layout:{...m.layout,chat:bf(m.layout.chat-H,240,600)}})),uu=H=>e(m=>{const N=m3(),I=m.layout.editorRow>0?m.layout.editorRow:N/2;return{...m,layout:{...m.layout,editorRow:bf(I+H,80,N-80)}}});return r==="loading"?C.jsx("div",{className:"app",children:C.jsxs("div",{className:"loading-screen",children:[C.jsx("div",{className:"loading-spinner"}),C.jsx("h2",{children:a}),C.jsx("p",{className:"loading-sub",children:"Preparing your environment..."}),l.length>0&&C.jsx("div",{className:"loading-steps",children:C.jsx(o3,{steps:l,interval:1800})})]})}):r==="key_prompt"?C.jsx("div",{className:"app",children:C.jsx("div",{className:"key-prompt-screen",children:C.jsxs("div",{className:"key-prompt-card",children:[C.jsx("div",{className:"key-prompt-icon",children:C.jsx("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:C.jsx("path",{d:"M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"})})}),C.jsx("h2",{children:"One more step - connect your AI"}),C.jsx("p",{className:"key-prompt-sub",children:"To design and modify environments with AI assistance, paste an API key from one of these providers:"}),C.jsxs("div",{className:"key-prompt-providers",children:[C.jsxs("div",{className:"key-provider-option",children:[C.jsx("label",{children:"Gemini"}),C.jsx("input",{type:"password",placeholder:"AIza...",value:t.providers.gemini.api_key,onChange:H=>e(m=>({...m,providers:{...m.providers,gemini:{...m.providers.gemini,api_key:H.target.value}}}))}),C.jsx("span",{className:"key-get-link",onClick:()=>window.open("https://aistudio.google.com/apikey","_blank","noopener,noreferrer"),role:"link",tabIndex:0,style:{cursor:"pointer"},children:"Get free key →"})]}),C.jsxs("div",{className:"key-provider-option",children:[C.jsx("label",{children:"OpenAI"}),C.jsx("input",{type:"password",placeholder:"sk-...",value:t.providers.openai.api_key,onChange:H=>e(m=>({...m,providers:{...m.providers,openai:{...m.providers.openai,api_key:H.target.value}}}))}),C.jsx("span",{className:"key-get-link",onClick:()=>window.open("https://platform.openai.com/api-keys","_blank","noopener,noreferrer"),role:"link",tabIndex:0,style:{cursor:"pointer"},children:"Get key →"})]}),C.jsxs("div",{className:"key-provider-option",children:[C.jsx("label",{children:"OpenRouter"}),C.jsx("input",{type:"password",placeholder:"sk-or-v1-...",value:t.providers.openrouter.api_key,onChange:H=>e(m=>({...m,providers:{...m.providers,openrouter:{...m.providers.openrouter,api_key:H.target.value}}}))}),C.jsx("span",{className:"key-get-link",onClick:()=>window.open("https://openrouter.ai/keys","_blank","noopener,noreferrer"),role:"link",tabIndex:0,style:{cursor:"pointer"},children:"Get key →"})]})]}),C.jsx("div",{className:"key-prompt-actions",children:C.jsx("button",{className:"key-continue-btn",onClick:()=>{const H=Object.entries(t.providers).some(([m,N])=>m!=="manual"&&N.api_key);if(H){for(const m of["gemini","openai","openrouter"])if(t.providers[m].api_key){Te(m);break}}Ll(t),s("workspace"),H||(S(!0),Je(!0),setTimeout(()=>Je(!1),1500))},children:Object.entries(t.providers).some(([H,m])=>H!=="manual"&&m.api_key)?"Continue →":"Skip for now"})}),!Object.entries(t.providers).some(([H,m])=>H!=="manual"&&m.api_key)&&C.jsx("p",{className:"key-prompt-hint",children:"You can add a key later via the Settings button"})]})})}):r==="onboarding"?C.jsxs("div",{className:"app",children:[C.jsxs("div",{className:"topbar",children:[C.jsx("h1",{className:"brand",children:C.jsx(E0,{height:30})}),C.jsx("div",{className:"spacer"}),u.length>0&&C.jsxs("select",{className:"project-select",value:"",onChange:H=>Fe(H.target.value),children:[C.jsx("option",{value:"",disabled:!0,children:"Open existing project..."}),u.map(H=>C.jsx("option",{value:H.id,children:H.name},H.id))]}),C.jsx("button",{className:"icon-btn",title:"Settings",onClick:()=>i(!0),children:C.jsx(T0,{})})]}),C.jsxs("div",{className:"onboarding",children:[C.jsxs("div",{className:"onboarding-hero",children:[C.jsx("h1",{children:"What would you like to build today?"}),C.jsx("p",{children:"Describe the robot environment you have in mind and I'll pick the best robot, set up the scene, and get you running in seconds."})]}),C.jsxs("div",{className:"onboarding-chat",children:[C.jsx("div",{className:"onboarding-messages",children:U.map((H,m)=>C.jsxs("div",{className:`msg ${H.role}`,children:[C.jsx("div",{className:"avatar",children:H.role==="user"?"you":"ai"}),C.jsx("div",{className:"msg-main",children:C.jsx("div",{className:"body",children:C.jsx(ry,{text:H.content})})})]},m))}),C.jsxs("div",{className:"onboarding-composer",children:[C.jsx("textarea",{rows:1,value:J,placeholder:ht==="welcome"?'e.g. "A quadruped robot navigating a warehouse with obstacles"':ht==="confirm_robot"?'Type "yes" to confirm or describe a different robot...':"Describe your requirements...",onChange:H=>ee(H.target.value),onKeyDown:H=>{H.key==="Enter"&&!H.shiftKey&&!H.nativeEvent.isComposing&&J.trim()&&(H.preventDefault(),fs(J.trim()))},autoFocus:!0}),C.jsx("button",{className:"send-btn",onClick:()=>{J.trim()&&fs(J.trim())},disabled:!J.trim(),children:"↑"})]}),U.length===0&&Ye.length>0&&C.jsxs("div",{className:"quick-picks",children:[C.jsx("span",{className:"quick-picks-label",children:"Quick start:"}),[{label:"Quadruped",query:"I want to build an environment with a quadruped robot"},{label:"Humanoid",query:"I want to build an environment with a humanoid robot"},{label:"Robotic Arm",query:"I want to build a pick-and-place environment with a robotic arm"},{label:"Drone",query:"I want to build an environment with a flying drone"}].map(({label:H,query:m})=>C.jsx("button",{className:"quick-pick-btn",onClick:()=>fs(m),children:H},H))]})]})]}),C.jsx(M0,{open:n,initial:t,onClose:()=>i(!1),onSave:H=>{e(H),Te(H.default_provider)}}),Z&&C.jsx(w0,{onStart:va,onLater:ui})]}):C.jsxs("div",{className:"app",children:[C.jsxs("div",{className:"topbar",children:[C.jsx("h1",{className:"brand",children:C.jsx(E0,{height:30})}),C.jsx("div",{className:"topbar-divider"}),C.jsxs("select",{className:"project-select","data-tut":"project-select",value:f?.id??"",onChange:H=>Fe(H.target.value),children:[C.jsx("option",{value:"",disabled:!0,children:u.length?"Select project...":"No projects"}),u.map(H=>C.jsx("option",{value:H.id,children:H.name},H.id))]}),C.jsxs("div",{className:"topbar-actions",children:[C.jsx("button",{className:"topbar-btn new-btn","data-tut":"new",onClick:()=>{s("onboarding"),He("welcome"),V([]),St(null)},title:"New Project",children:"+ New"}),f&&C.jsx("button",{className:"topbar-btn","data-tut":"download",onClick:()=>us(f),title:`Download ${f.name} as zip`,children:"↓ Download"}),f&&C.jsx("button",{className:"topbar-btn delete-btn","data-tut":"delete",onClick:()=>ie(),title:`Delete "${f.name}"`,children:"Delete"})]}),C.jsx("div",{className:"spacer"}),C.jsx("span",{className:"save-indicator",title:v??"",children:y==="saving"?"saving...":g?"modified":v?"saved":""}),C.jsxs("div",{className:"topbar-controls",children:[$?C.jsx("button",{className:"topbar-btn stop-btn","data-tut":"run",onClick:Me,children:"■ Stop"}):C.jsx("button",{className:"run-btn","data-tut":"run",onClick:_e,disabled:!f,children:"▶ Run"}),C.jsxs("select",{className:"speed-select","data-tut":"speed",title:"Playback speed",value:String(T),onChange:H=>R(Number(H.target.value)),disabled:$,children:[C.jsx("option",{value:"0.5",children:"0.5×"}),C.jsx("option",{value:"1",children:"1×"}),C.jsx("option",{value:"2",children:"2×"}),C.jsx("option",{value:"5",children:"5×"}),C.jsx("option",{value:"0",children:"MAX"})]})]}),C.jsx("button",{className:"topbar-btn code-toggle","data-tut":"code",onClick:()=>Mt(!Tt),title:Tt?"Hide code panel":"Show code panel",children:Tt?"Hide Code":"{ } Code"}),C.jsxs("button",{className:`icon-btn help-btn${ne?" help-pulse":""}`,title:"Replay the guided tour",onClick:()=>{ge(!1),i(!1),q(!0)},children:[ne?C.jsx("span",{className:"help-label",children:"Tour"}):null,C.jsx("span",{className:"help-mark",children:"?"})]}),C.jsx("button",{className:`icon-btn${rn?" settings-highlight":""}`,"data-tut":"settings",title:"Settings",onClick:()=>{i(!0),Je(!1),S(!1)},children:C.jsx(T0,{})})]}),C.jsxs("div",{className:"workspace",children:[Tt&&C.jsxs(C.Fragment,{children:[C.jsxs("div",{className:"sidebar",style:{width:t.layout.sidebar},children:[C.jsx("div",{className:"sidebar-header",children:C.jsx("h3",{children:"Files"})}),f&&C.jsx(s3,{files:f.files,activeFile:v,onOpenFile:H=>ze(f.id,H)})]}),C.jsx(wf,{orientation:"vertical",onResize:lu})]}),C.jsxs("div",{className:"center",id:"sim_llm_center",children:[Tt&&C.jsxs(C.Fragment,{children:[C.jsx("div",{className:"editor-pane",style:{height:t.layout.editorRow>0?t.layout.editorRow:void 0,flex:t.layout.editorRow>0?"none":1},children:v?C.jsx(qP,{path:v,value:_,onChange:H=>{d(H),M(!0)}}):C.jsx("div",{className:"editor-placeholder",children:"Select a file to edit"})}),C.jsx(wf,{orientation:"horizontal",onResize:uu})]}),C.jsx(YP,{stats:A,logs:L,connected:$,projectName:f?.name,projectId:f?.id,projectVersion:j,onAttachFrame:H=>Ie(m=>[...m,{data:H,media_type:"image/jpeg",label:`frame@step${A.step}`}])})]}),C.jsx(wf,{orientation:"vertical",onResize:cu}),C.jsxs("div",{className:"chat",style:{width:t.layout.chat},children:[C.jsxs("header",{children:[C.jsx("span",{className:"chat-title",children:"AI Assistant"}),C.jsxs("select",{"data-tut":"provider",value:we,onChange:H=>Te(H.target.value),children:[C.jsx("option",{value:"groq",children:"Groq"}),C.jsx("option",{value:"openrouter",children:"OpenRouter"}),C.jsx("option",{value:"openai",children:"OpenAI"}),C.jsx("option",{value:"gemini",children:"Gemini"})]}),we!=="manual"&&(t.providers[we].api_key?C.jsx("button",{className:"key-chip key-chip-set","data-tut":"apikey",title:"API key set - click to update",onClick:()=>{De(t.providers[we].api_key),ve(H=>!H)},children:"key ✓"}):bt[we]?C.jsx("button",{className:"key-chip key-chip-server","data-tut":"apikey",title:"A server key is configured for this provider",onClick:()=>{De(""),ve(H=>!H)},children:"server key"}):C.jsx("button",{className:"key-chip key-chip-missing","data-tut":"apikey",title:"No API key - click to add one",onClick:()=>{De(""),ve(H=>!H)},children:"+ Add API key"})),Le&&we!=="manual"&&C.jsxs("div",{className:"key-popover",onClick:H=>H.stopPropagation(),children:[C.jsxs("div",{className:"key-popover-title",children:[Tf[we]?.label??we," API key"]}),C.jsx("input",{type:"password",autoComplete:"off",spellCheck:!1,placeholder:Tf[we]?.placeholder??"paste key…",value:ye,onChange:H=>De(H.target.value),onKeyDown:H=>{if(H.key==="Enter"){const m={...t,providers:{...t.providers,[we]:{...t.providers[we],api_key:ye.trim()}}};e(m),Ll(m),ve(!1),S(!1)}},autoFocus:!0}),C.jsx("span",{className:"key-popover-link",onClick:()=>{const H=Tf[we]?.url;H&&window.open(H,"_blank","noopener,noreferrer")},role:"link",tabIndex:0,style:{cursor:"pointer"},children:"Get a free key →"}),C.jsxs("div",{className:"key-popover-actions",children:[C.jsx("button",{onClick:()=>ve(!1),children:"Cancel"}),C.jsx("button",{className:"primary",onClick:()=>{const H={...t,providers:{...t.providers,[we]:{...t.providers[we],api_key:ye.trim()}}};e(H),Ll(H),ve(!1),S(!1)},children:"Save key"})]})]})]}),P&&C.jsx("div",{className:"key-reminder-banner",onClick:()=>{i(!0),Je(!1),S(!1)},children:C.jsx("span",{children:"⚠ No API key configured - click here or the Settings button to add one"})}),C.jsx(g3,{turns:U,sending:K,connected:$,vibe:!!t.vibe_mode,agentStatus:fe,onRun:_e,onFix:Fr,renderProposal:(H,m,N,I)=>C.jsx(p3,{proposal:N,loadCurrent:()=>Wo(N.path),onApply:()=>xa(m,I),onReject:()=>Ho(m,I)},`${m}-${N.path}-${I}`)}),ke&&C.jsxs("div",{className:"error-bubble",children:[C.jsx("span",{className:"error-bubble-text",children:ke}),C.jsx("button",{className:"error-bubble-close",onClick:()=>Ne(null),title:"Dismiss","aria-label":"Dismiss error",children:"×"})]}),C.jsx(x3,{value:J,disabled:K,working:K,onStop:au,onChange:ee,onSend:Vo,attachments:le,onRemoveAttachment:H=>Ie(m=>m.filter((N,I)=>I!==H)),onPasteImage:H=>Ie(m=>[...m,H])})]})]}),C.jsx(M0,{open:n,initial:t,onClose:()=>i(!1),onSave:H=>{e(H),Te(H.default_provider),q(!1),S(!1)}}),C.jsx(l3,{steps:_a,visible:G,onFinish:()=>{q(!1),i(!1),ge(!1);try{localStorage.setItem("tau_tutorial_seen","1")}catch{}}}),Z&&C.jsx(w0,{onStart:va,onLater:ui})]})}function p3(t){const[e,n]=te.useState(null);return te.useEffect(()=>{t.loadCurrent().then(n)},[t.proposal.path]),e===null?null:C.jsx(n3,{proposal:t.proposal,currentContent:e,onApply:t.onApply,onReject:t.onReject})}function bf(t,e,n){return Math.max(e,Math.min(n,t))}function m3(){return document.getElementById("sim_llm_center")?.clientHeight??600}function g3({turns:t,sending:e,connected:n,vibe:i,agentStatus:r,onRun:s,onFix:a,renderProposal:o}){const l=te.useRef(null);te.useLayoutEffect(()=>{const u=l.current;u&&(u.scrollTop=u.scrollHeight)},[t,e]);const c=e&&!t.some(u=>u.role==="assistant"&&u.pending);return C.jsxs("div",{className:"messages",ref:l,children:[t.length===0&&C.jsxs("div",{className:"empty",children:["Describe how you'd like to modify the scene, reward function, or environment. Changes appear as reviewable diffs.",C.jsxs("div",{className:"empty-hint",children:[C.jsx("kbd",{children:"Enter"})," to send · ",C.jsx("kbd",{children:"Shift+Enter"})," for newline"]})]}),t.map((u,h)=>i&&(u.role==="system"||u.auto)?null:u.role==="system"?C.jsxs("div",{className:`msg system${u.action==="fix"?" system-error":""}`,children:[C.jsx("span",{children:u.content}),u.action==="run"&&C.jsx("button",{className:"inline-run",onClick:s,disabled:n,children:n?"running...":"▶ Run"}),u.action==="fix"&&u.fixPrompt&&C.jsx("button",{className:"inline-fix",onClick:()=>a(u.fixPrompt),disabled:e,children:e?"...":"Fix with AI"})]},h):C.jsxs("div",{className:`msg ${u.role}${u.auto?" auto":""}`,children:[C.jsx("div",{className:"avatar",children:u.role==="user"?u.auto?"auto":"you":"ai"}),C.jsxs("div",{className:"msg-main",children:[u.auto&&C.jsx("div",{className:"auto-tag",children:"Automated"}),C.jsxs("div",{className:`body${u.error?" body-error":""}`,children:[C.jsx(ry,{text:u.content}),u.pending&&C.jsx(_3,{})]}),u.role==="assistant"&&u.tokensSent!==void 0&&u.tokensSent>0&&!u.pending&&C.jsxs("div",{className:"token-usage",children:["~",v3(u.tokensSent)]}),!i&&u.proposals?.map((f,p)=>o(u,h,f,p))]})]},h)),c&&C.jsxs("div",{className:"msg assistant",children:[C.jsx("div",{className:"avatar",children:"ai"}),C.jsx("div",{className:"msg-main",children:C.jsx("div",{className:"body thinking-body",children:C.jsx(u3,{override:d3(r)})})})]})]})}function v3(t){return t<1e3?`${t} tok`:`${(t/1e3).toFixed(1)}K tok`}function _3(){return C.jsxs("span",{className:"typing","aria-label":"thinking",children:[C.jsx("span",{}),C.jsx("span",{}),C.jsx("span",{})]})}function w0({onStart:t,onLater:e}){return C.jsx("div",{className:"welcome-overlay",children:C.jsxs("div",{className:"welcome-card",children:[C.jsx("h2",{children:"Welcome to tau-sim"}),C.jsx("p",{children:"Build robot simulation environments just by chatting - no code required. Want a quick 60-second tour of the interface first?"}),C.jsxs("div",{className:"welcome-actions",children:[C.jsx("button",{className:"welcome-later",onClick:e,children:"Maybe later"}),C.jsx("button",{className:"welcome-start",onClick:t,children:"Start the tour"})]}),C.jsxs("p",{className:"welcome-hint",children:["You can replay it anytime from the ",C.jsx("strong",{children:"?"})," button in the top bar."]})]})})}function T0(){return C.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[C.jsx("circle",{cx:"12",cy:"12",r:"3"}),C.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"})]})}function x3({value:t,disabled:e,working:n,onStop:i,onChange:r,onSend:s,attachments:a,onRemoveAttachment:o,onPasteImage:l}){const c=te.useRef(null),u=te.useRef(0);return te.useLayoutEffect(()=>{const h=c.current;if(!h)return;const f=h.scrollHeight;f!==u.current&&(u.current=f,h.style.height="auto",h.style.height=Math.min(h.scrollHeight,220)+"px")},[t]),C.jsxs("div",{className:"composer-wrap",children:[a&&a.length>0&&C.jsx("div",{className:"attachments",children:a.map((h,f)=>C.jsxs("div",{className:"attachment",children:[C.jsx("img",{src:`data:${h.media_type};base64,${h.data}`,alt:h.label??"attached image"}),h.label&&C.jsx("span",{className:"attachment-label",children:h.label}),C.jsx("button",{className:"attachment-x",title:"Remove",onClick:()=>o?.(f),children:"×"})]},f))}),C.jsxs("div",{className:"composer",children:[C.jsx("div",{className:"composer-field",children:C.jsx("textarea",{ref:c,rows:1,value:t,placeholder:"Describe changes - paste images with Ctrl+V",onChange:h=>r(h.target.value),onKeyDown:h=>{h.key==="Enter"&&!h.shiftKey&&!h.nativeEvent.isComposing&&(h.preventDefault(),!e&&t.trim()&&s())},onPaste:h=>{if(!l)return;const f=h.clipboardData?.items;if(f){for(const p of Array.from(f))if(p.kind==="file"&&p.type.startsWith("image/")){const v=p.getAsFile();if(!v)continue;h.preventDefault();const E=new FileReader;E.onload=()=>{const _=E.result,d=_.indexOf(","),g=d>=0?_.slice(d+1):_;l({data:g,media_type:v.type||"image/png",label:"pasted"})},E.readAsDataURL(v)}}}})}),n?C.jsx("button",{className:"composer-stop",onClick:i,title:"Stop the AI","aria-label":"Stop",children:C.jsx("span",{className:"stop-square"})}):C.jsx("button",{onClick:s,disabled:e||!t.trim()&&(!a||a.length===0),title:"Send (Enter)","aria-label":"Send",children:"↑"})]})]})}Af.createRoot(document.getElementById("root")).render(C.jsx(h3,{}));
