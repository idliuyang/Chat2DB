"use strict";(self.webpackChunkchat_2_db=self.webpackChunkchat_2_db||[]).push([[3953],{64172:(e,t,n)=>{n.d(t,{VY:()=>mt,ZA:()=>gt,JO:()=>vt,ck:()=>wt,wU:()=>Et,eT:()=>yt,fC:()=>dt,$G:()=>St,u_:()=>bt,xz:()=>ft,B4:()=>pt,l_:()=>ht});var r=n(70655),o=n(67294),c=n.t(o,2),l="right-scroll-bar-position",a="width-before-scroll-bar";function i(e,t){return n=t||null,r=function(t){return e.forEach((function(e){return function(e,t){return"function"==typeof e?e(t):e&&(e.current=t),e}(e,t)}))},(c=(0,o.useState)((function(){return{value:n,callback:r,facade:{get current(){return c.value},set current(e){var t=c.value;t!==e&&(c.value=e,c.callback(e,t))}}}}))[0]).callback=r,c.facade;var n,r,c}function u(e){return e}function s(e,t){void 0===t&&(t=u);var n=[],r=!1;return{read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(e){var o=t(e,r);return n.push(o),function(){n=n.filter((function(e){return e!==o}))}},assignSyncMedium:function(e){for(r=!0;n.length;){var t=n;n=[],t.forEach(e)}n={push:function(t){return e(t)},filter:function(){return n}}},assignMedium:function(e){r=!0;var t=[];if(n.length){var o=n;n=[],o.forEach(e),t=n}var c=function(){var n=t;t=[],n.forEach(e)},l=function(){return Promise.resolve().then(c)};l(),n={push:function(e){t.push(e),l()},filter:function(e){return t=t.filter(e),n}}}}}var d=function(e){void 0===e&&(e={});var t=s(null);return t.options=(0,r.__assign)({async:!0,ssr:!1},e),t}(),f=function(){},p=o.forwardRef((function(e,t){var n=o.useRef(null),c=o.useState({onScrollCapture:f,onWheelCapture:f,onTouchMoveCapture:f}),l=c[0],a=c[1],u=e.forwardProps,s=e.children,p=e.className,v=e.removeScrollBar,m=e.enabled,h=e.shards,g=e.sideCar,w=e.noIsolation,y=e.inert,E=e.allowPinchZoom,b=e.as,S=void 0===b?"div":b,C=e.gapMode,x=(0,r.__rest)(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),R=g,T=i([n,t]),k=(0,r.__assign)((0,r.__assign)({},x),l);return o.createElement(o.Fragment,null,m&&o.createElement(R,{sideCar:d,removeScrollBar:v,shards:h,noIsolation:w,inert:y,setCallbacks:a,allowPinchZoom:!!E,lockRef:n,gapMode:C}),u?o.cloneElement(o.Children.only(s),(0,r.__assign)((0,r.__assign)({},k),{ref:T})):o.createElement(S,(0,r.__assign)({},k,{className:p,ref:T}),s))}));p.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},p.classNames={fullWidth:a,zeroRight:l};var v,m=function(e){var t=e.sideCar,n=(0,r.__rest)(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var c=t.read();if(!c)throw new Error("Sidecar medium not found");return o.createElement(c,(0,r.__assign)({},n))};m.isSideCarExport=!0;function h(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=v||n.nc;return t&&e.setAttribute("nonce",t),e}var g=function(){var e=0,t=null;return{add:function(n){var r,o;0==e&&(t=h())&&(o=n,(r=t).styleSheet?r.styleSheet.cssText=o:r.appendChild(document.createTextNode(o)),function(e){(document.head||document.getElementsByTagName("head")[0]).appendChild(e)}(t)),e++},remove:function(){!--e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},w=function(){var e,t=(e=g(),function(t,n){o.useEffect((function(){return e.add(t),function(){e.remove()}}),[t&&n])});return function(e){var n=e.styles,r=e.dynamic;return t(n,r),null}},y={left:0,top:0,right:0,gap:0},E=function(e){return parseInt(e||"",10)||0},b=function(e){if(void 0===e&&(e="margin"),"undefined"==typeof window)return y;var t=function(e){var t=window.getComputedStyle(document.body),n=t["padding"===e?"paddingLeft":"marginLeft"],r=t["padding"===e?"paddingTop":"marginTop"],o=t["padding"===e?"paddingRight":"marginRight"];return[E(n),E(r),E(o)]}(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},S=w(),C=function(e,t,n,r){var o=e.left,c=e.top,i=e.right,u=e.gap;return void 0===n&&(n="margin"),"\n  .".concat("with-scroll-bars-hidden"," {\n   overflow: hidden ").concat(r,";\n   padding-right: ").concat(u,"px ").concat(r,";\n  }\n  body {\n    overflow: hidden ").concat(r,";\n    overscroll-behavior: contain;\n    ").concat([t&&"position: relative ".concat(r,";"),"margin"===n&&"\n    padding-left: ".concat(o,"px;\n    padding-top: ").concat(c,"px;\n    padding-right: ").concat(i,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(u,"px ").concat(r,";\n    "),"padding"===n&&"padding-right: ".concat(u,"px ").concat(r,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat(l," {\n    right: ").concat(u,"px ").concat(r,";\n  }\n  \n  .").concat(a," {\n    margin-right: ").concat(u,"px ").concat(r,";\n  }\n  \n  .").concat(l," .").concat(l," {\n    right: 0 ").concat(r,";\n  }\n  \n  .").concat(a," .").concat(a," {\n    margin-right: 0 ").concat(r,";\n  }\n  \n  body {\n    ").concat("--removed-body-scroll-bar-size",": ").concat(u,"px;\n  }\n")},x=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,c=void 0===r?"margin":r,l=o.useMemo((function(){return b(c)}),[c]);return o.createElement(S,{styles:C(l,!t,c,n?"":"!important")})},R=!1;if("undefined"!=typeof window)try{var T=Object.defineProperty({},"passive",{get:function(){return R=!0,!0}});window.addEventListener("test",T,T),window.removeEventListener("test",T,T)}catch(Ct){R=!1}var k=!!R&&{passive:!1},P=function(e,t){var n=window.getComputedStyle(e);return"hidden"!==n[t]&&!(n.overflowY===n.overflowX&&!function(e){return"TEXTAREA"===e.tagName}(e)&&"visible"===n[t])},L=function(e,t){var n=t.ownerDocument,r=t;do{if("undefined"!=typeof ShadowRoot&&r instanceof ShadowRoot&&(r=r.host),O(e,r)){var o=_(e,r);if(o[1]>o[2])return!0}r=r.parentNode}while(r&&r!==n.body);return!1},O=function(e,t){return"v"===e?function(e){return P(e,"overflowY")}(t):function(e){return P(e,"overflowX")}(t)},_=function(e,t){return"v"===e?[(n=t).scrollTop,n.scrollHeight,n.clientHeight]:function(e){return[e.scrollLeft,e.scrollWidth,e.clientWidth]}(t);var n},M=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},I=function(e){return[e.deltaX,e.deltaY]},N=function(e){return e&&"current"in e?e.current:e},D=function(e){return"\n  .block-interactivity-".concat(e," {pointer-events: none;}\n  .allow-interactivity-").concat(e," {pointer-events: all;}\n")},A=0,F=[];const B=(W=function(e){var t=o.useRef([]),n=o.useRef([0,0]),c=o.useRef(),l=o.useState(A++)[0],a=o.useState(w)[0],i=o.useRef(e);o.useEffect((function(){i.current=e}),[e]),o.useEffect((function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(l));var t=(0,r.__spreadArray)([e.lockRef.current],(e.shards||[]).map(N),!0).filter(Boolean);return t.forEach((function(e){return e.classList.add("allow-interactivity-".concat(l))})),function(){document.body.classList.remove("block-interactivity-".concat(l)),t.forEach((function(e){return e.classList.remove("allow-interactivity-".concat(l))}))}}}),[e.inert,e.lockRef.current,e.shards]);var u=o.useCallback((function(e,t){if("touches"in e&&2===e.touches.length)return!i.current.allowPinchZoom;var r,o=M(e),l=n.current,a="deltaX"in e?e.deltaX:l[0]-o[0],u="deltaY"in e?e.deltaY:l[1]-o[1],s=e.target,d=Math.abs(a)>Math.abs(u)?"h":"v";if("touches"in e&&"h"===d&&"range"===s.type)return!1;var f=L(d,s);if(!f)return!0;if(f?r=d:(r="v"===d?"h":"v",f=L(d,s)),!f)return!1;if(!c.current&&"changedTouches"in e&&(a||u)&&(c.current=r),!r)return!0;var p=c.current||r;return function(e,t,n,r,o){var c=function(e,t){return"h"===e&&"rtl"===t?-1:1}(e,window.getComputedStyle(t).direction),l=c*r,a=n.target,i=t.contains(a),u=!1,s=l>0,d=0,f=0;do{var p=_(e,a),v=p[0],m=p[1]-p[2]-c*v;(v||m)&&O(e,a)&&(d+=m,f+=v),a=a.parentNode}while(!i&&a!==document.body||i&&(t.contains(a)||t===a));return(s&&(o&&0===d||!o&&l>d)||!s&&(o&&0===f||!o&&-l>f))&&(u=!0),u}(p,t,e,"h"===p?a:u,!0)}),[]),s=o.useCallback((function(e){var n=e;if(F.length&&F[F.length-1]===a){var r="deltaY"in n?I(n):M(n),o=t.current.filter((function(e){return e.name===n.type&&e.target===n.target&&function(e,t){return e[0]===t[0]&&e[1]===t[1]}(e.delta,r)}))[0];if(o&&o.should)n.cancelable&&n.preventDefault();else if(!o){var c=(i.current.shards||[]).map(N).filter(Boolean).filter((function(e){return e.contains(n.target)}));(c.length>0?u(n,c[0]):!i.current.noIsolation)&&n.cancelable&&n.preventDefault()}}}),[]),d=o.useCallback((function(e,n,r,o){var c={name:e,delta:n,target:r,should:o};t.current.push(c),setTimeout((function(){t.current=t.current.filter((function(e){return e!==c}))}),1)}),[]),f=o.useCallback((function(e){n.current=M(e),c.current=void 0}),[]),p=o.useCallback((function(t){d(t.type,I(t),t.target,u(t,e.lockRef.current))}),[]),v=o.useCallback((function(t){d(t.type,M(t),t.target,u(t,e.lockRef.current))}),[]);o.useEffect((function(){return F.push(a),e.setCallbacks({onScrollCapture:p,onWheelCapture:p,onTouchMoveCapture:v}),document.addEventListener("wheel",s,k),document.addEventListener("touchmove",s,k),document.addEventListener("touchstart",f,k),function(){F=F.filter((function(e){return e!==a})),document.removeEventListener("wheel",s,k),document.removeEventListener("touchmove",s,k),document.removeEventListener("touchstart",f,k)}}),[]);var m=e.removeScrollBar,h=e.inert;return o.createElement(o.Fragment,null,h?o.createElement(a,{styles:D(l)}):null,m?o.createElement(x,{gapMode:e.gapMode}):null)},d.useMedium(W),m);var W,Z=o.forwardRef((function(e,t){return o.createElement(p,(0,r.__assign)({},e,{ref:t,sideCar:B}))}));Z.classNames=p.classNames;const j=Z;var H=function(e){return"undefined"==typeof document?null:(Array.isArray(e)?e[0]:e).ownerDocument.body},K=new WeakMap,V=new WeakMap,z={},U=0,Y=function(e){return e&&(e.host||Y(e.parentNode))},$=function(e,t,n,r){var o=function(e,t){return t.map((function(t){if(e.contains(t))return t;var n=Y(t);return n&&e.contains(n)?n:(console.error("aria-hidden",t,"in not contained inside",e,". Doing nothing"),null)})).filter((function(e){return Boolean(e)}))}(t,Array.isArray(e)?e:[e]);z[n]||(z[n]=new WeakMap);var c=z[n],l=[],a=new Set,i=new Set(o),u=function(e){e&&!a.has(e)&&(a.add(e),u(e.parentNode))};o.forEach(u);var s=function(e){e&&!i.has(e)&&Array.prototype.forEach.call(e.children,(function(e){if(a.has(e))s(e);else{var t=e.getAttribute(r),o=null!==t&&"false"!==t,i=(K.get(e)||0)+1,u=(c.get(e)||0)+1;K.set(e,i),c.set(e,u),l.push(e),1===i&&o&&V.set(e,!0),1===u&&e.setAttribute(n,"true"),o||e.setAttribute(r,"true")}}))};return s(t),a.clear(),U++,function(){l.forEach((function(e){var t=K.get(e)-1,o=c.get(e)-1;K.set(e,t),c.set(e,o),t||(V.has(e)||e.removeAttribute(r),V.delete(e)),o||e.removeAttribute(n)})),--U||(K=new WeakMap,K=new WeakMap,V=new WeakMap,z={})}},X=function(e,t,n){void 0===n&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),o=t||H(e);return o?(r.push.apply(r,Array.from(o.querySelectorAll("[aria-live]"))),$(r,o,n,"aria-hidden")):function(){return null}};function q(...e){return t=>e.forEach((e=>function(e,t){"function"==typeof e?e(t):null!=e&&(e.current=t)}(e,t)))}function G(...e){return o.useCallback(q(...e),e)}var J=n(87462);const Q=o.forwardRef(((e,t)=>{const{children:n,...r}=e;return o.Children.toArray(n).some(ne)?o.createElement(o.Fragment,null,o.Children.map(n,(e=>ne(e)?o.createElement(ee,(0,J.Z)({},r,{ref:t}),e.props.children):e))):o.createElement(ee,(0,J.Z)({},r,{ref:t}),n)}));Q.displayName="Slot";const ee=o.forwardRef(((e,t)=>{const{children:n,...r}=e;return o.isValidElement(n)?o.cloneElement(n,{...re(r,n.props),ref:q(t,n.ref)}):o.Children.count(n)>1?o.Children.only(null):null}));ee.displayName="SlotClone";const te=({children:e})=>o.createElement(o.Fragment,null,e);function ne(e){return o.isValidElement(e)&&e.type===te}function re(e,t){const n={...t};for(const r in t){const o=e[r],c=t[r];/^on[A-Z]/.test(r)?n[r]=(...e)=>{null==c||c(...e),null==o||o(...e)}:"style"===r?n[r]={...o,...c}:"className"===r&&(n[r]=[o,c].filter(Boolean).join(" "))}return{...e,...n}}const oe=["a","button","div","h2","h3","img","li","nav","ol","p","span","svg","ul"].reduce(((e,t)=>({...e,[t]:o.forwardRef(((e,n)=>{const{asChild:r,...c}=e,l=r?Q:t;return o.useEffect((()=>{window[Symbol.for("radix-ui")]=!0}),[]),o.createElement(l,(0,J.Z)({},c,{ref:n}))}))})),{}),ce=o.forwardRef(((e,t)=>o.createElement(oe.span,(0,J.Z)({},e,{ref:t,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}))));const le=Boolean(null===globalThis||void 0===globalThis?void 0:globalThis.document)?o.useLayoutEffect:()=>{};function ae(e){const t=o.useRef(e);return o.useEffect((()=>{t.current=e})),o.useMemo((()=>(...e)=>{var n;return null===(n=t.current)||void 0===n?void 0:n.call(t,...e)}),[])}function ie({prop:e,defaultProp:t,onChange:n=(()=>{})}){const[r,c]=function({defaultProp:e,onChange:t}){const n=o.useState(e),[r]=n,c=o.useRef(r),l=ae(t);return o.useEffect((()=>{c.current!==r&&(l(r),c.current=r)}),[r,c,l]),n}({defaultProp:t,onChange:n}),l=void 0!==e,a=l?e:r,i=ae(n);return[a,o.useCallback((t=>{if(l){const n="function"==typeof t?t(e):t;n!==e&&i(n)}else c(t)}),[l,e,c,i])]}var ue=n(73935);const se=o.forwardRef(((e,t)=>{var n,r;const{containerRef:c,style:l,...a}=e,i=null!==(n=null==c?void 0:c.current)&&void 0!==n?n:null===globalThis||void 0===globalThis||null===(r=globalThis.document)||void 0===r?void 0:r.body,[,u]=o.useState({});return le((()=>{u({})}),[]),i?ue.createPortal(o.createElement(oe.div,(0,J.Z)({"data-radix-portal":""},a,{ref:t,style:i===document.body?{position:"absolute",top:0,left:0,zIndex:2147483647,...l}:void 0})),i):null}));function de(e,t=[]){let n=[];const r=()=>{const t=n.map((e=>o.createContext(e)));return function(n){const r=(null==n?void 0:n[e])||t;return o.useMemo((()=>({[`__scope${e}`]:{...n,[e]:r}})),[n,r])}};return r.scopeName=e,[function(t,r){const c=o.createContext(r),l=n.length;function a(t){const{scope:n,children:r,...a}=t,i=(null==n?void 0:n[e][l])||c,u=o.useMemo((()=>a),Object.values(a));return o.createElement(i.Provider,{value:u},r)}return n=[...n,r],a.displayName=t+"Provider",[a,function(n,a){const i=(null==a?void 0:a[e][l])||c,u=o.useContext(i);if(u)return u;if(void 0!==r)return r;throw new Error(`\`${n}\` must be used within \`${t}\``)}]},fe(r,...t)]}function fe(...e){const t=e[0];if(1===e.length)return t;const n=()=>{const n=e.map((e=>({useScope:e(),scopeName:e.scopeName})));return function(e){const r=n.reduce(((t,{useScope:n,scopeName:r})=>({...t,...n(e)[`__scope${r}`]})),{});return o.useMemo((()=>({[`__scope${t.scopeName}`]:r})),[r])}};return n.scopeName=t.scopeName,n}const[pe,ve]=function(e,t){const n=o.createContext(t);function r(e){const{children:t,...r}=e,c=o.useMemo((()=>r),Object.values(r));return o.createElement(n.Provider,{value:c},t)}return r.displayName=e+"Provider",[r,function(r){const c=o.useContext(n);if(c)return c;if(void 0!==t)return t;throw new Error(`\`${r}\` must be used within \`${e}\``)}]}("Label",{id:void 0,controlRef:{current:null}}),me=c["useId".toString()]||(()=>{});let he=0;function ge(e){const[t,n]=o.useState(me());return le((()=>{e||n((e=>null!=e?e:String(he++)))}),[e]),e||(t?`radix-${t}`:"")}const we={bubbles:!1,cancelable:!0},ye=o.forwardRef(((e,t)=>{const{loop:n=!1,trapped:r=!1,onMountAutoFocus:c,onUnmountAutoFocus:l,...a}=e,[i,u]=o.useState(null),s=ae(c),d=ae(l),f=o.useRef(null),p=G(t,(e=>u(e))),v=o.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;o.useEffect((()=>{if(r){function e(e){if(v.paused||!i)return;const t=e.target;i.contains(t)?f.current=t:Ce(f.current,{select:!0})}function t(e){!v.paused&&i&&(i.contains(e.relatedTarget)||Ce(f.current,{select:!0}))}return document.addEventListener("focusin",e),document.addEventListener("focusout",t),()=>{document.removeEventListener("focusin",e),document.removeEventListener("focusout",t)}}}),[r,i,v.paused]),o.useEffect((()=>{if(i){xe.add(v);const e=document.activeElement;if(!i.contains(e)){const t=new Event("focusScope.autoFocusOnMount",we);i.addEventListener("focusScope.autoFocusOnMount",s),i.dispatchEvent(t),t.defaultPrevented||(function(e,{select:t=!1}={}){const n=document.activeElement;for(const r of e)if(Ce(r,{select:t}),document.activeElement!==n)return}(Ee(i).filter((e=>"A"!==e.tagName)),{select:!0}),document.activeElement===e&&Ce(i))}return()=>{i.removeEventListener("focusScope.autoFocusOnMount",s),setTimeout((()=>{const t=new Event("focusScope.autoFocusOnUnmount",we);i.addEventListener("focusScope.autoFocusOnUnmount",d),i.dispatchEvent(t),t.defaultPrevented||Ce(null!=e?e:document.body,{select:!0}),i.removeEventListener("focusScope.autoFocusOnUnmount",d),xe.remove(v)}),0)}}}),[i,s,d,v]);const m=o.useCallback((e=>{if(!n&&!r)return;if(v.paused)return;const t="Tab"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,o=document.activeElement;if(t&&o){const t=e.currentTarget,[r,c]=function(e){const t=Ee(e);return[be(t,e),be(t.reverse(),e)]}(t);r&&c?e.shiftKey||o!==c?e.shiftKey&&o===r&&(e.preventDefault(),n&&Ce(c,{select:!0})):(e.preventDefault(),n&&Ce(r,{select:!0})):o===t&&e.preventDefault()}}),[n,r,v.paused]);return o.createElement(oe.div,(0,J.Z)({tabIndex:-1},a,{ref:p,onKeyDown:m}))}));function Ee(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{const t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function be(e,t){for(const n of e)if(!Se(n,{upTo:t}))return n}function Se(e,{upTo:t}){if("hidden"===getComputedStyle(e).visibility)return!0;for(;e;){if(void 0!==t&&e===t)return!1;if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}function Ce(e,{select:t=!1}={}){if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&function(e){return e instanceof HTMLInputElement&&"select"in e}(e)&&t&&e.select()}}const xe=function(){let e=[];return{add(t){const n=e[0];t!==n&&(null==n||n.pause()),e=Re(e,t),e.unshift(t)},remove(t){var n;e=Re(e,t),null===(n=e[0])||void 0===n||n.resume()}}}();function Re(e,t){const n=[...e],r=n.indexOf(t);return-1!==r&&n.splice(r,1),n}let Te,ke=0;function Pe(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(null==e||e(r),!1===n||!r.defaultPrevented)return null==t?void 0:t(r)}}const Le=o.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),Oe=o.forwardRef(((e,t)=>{const{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:r,onPointerDownOutside:c,onFocusOutside:l,onInteractOutside:a,onDismiss:i,...u}=e,s=o.useContext(Le),[d,f]=o.useState(null),[,p]=o.useState({}),v=G(t,(e=>f(e))),m=Array.from(s.layers),[h]=[...s.layersWithOutsidePointerEventsDisabled].slice(-1),g=m.indexOf(h),w=d?m.indexOf(d):-1,y=s.layersWithOutsidePointerEventsDisabled.size>0,E=w>=g,b=function(e){const t=ae((e=>{const t=e.target,n=[...s.branches].some((e=>e.contains(t)));E&&!n&&(null==c||c(e),null==a||a(e),e.defaultPrevented||null==i||i())})),n=o.useRef(!1);return o.useEffect((()=>{const e=e=>{e.target&&!n.current&&Me("dismissableLayer.pointerDownOutside",t,{originalEvent:e}),n.current=!1},r=window.setTimeout((()=>{document.addEventListener("pointerdown",e)}),0);return()=>{window.clearTimeout(r),document.removeEventListener("pointerdown",e)}}),[t]),{onPointerDownCapture:()=>n.current=!0}}(),S=function(e){const t=ae((e=>{const t=e.target;[...s.branches].some((e=>e.contains(t)))||(null==l||l(e),null==a||a(e),e.defaultPrevented||null==i||i())})),n=o.useRef(!1);return o.useEffect((()=>{const e=e=>{e.target&&!n.current&&Me("dismissableLayer.focusOutside",t,{originalEvent:e})};return document.addEventListener("focusin",e),()=>document.removeEventListener("focusin",e)}),[t]),{onFocusCapture:()=>n.current=!0,onBlurCapture:()=>n.current=!1}}();return function(e){const t=ae(e);o.useEffect((()=>{const e=e=>{"Escape"===e.key&&t(e)};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)}),[t])}((e=>{w===s.layers.size-1&&(null==r||r(e),e.defaultPrevented||null==i||i())})),function({disabled:e}){const t=o.useRef(!1);le((()=>{if(e){function n(){ke--,0===ke&&(document.body.style.pointerEvents=Te)}function r(e){t.current="mouse"!==e.pointerType}return 0===ke&&(Te=document.body.style.pointerEvents),document.body.style.pointerEvents="none",ke++,document.addEventListener("pointerup",r),()=>{t.current?document.addEventListener("click",n,{once:!0}):n(),document.removeEventListener("pointerup",r)}}}),[e])}({disabled:n}),o.useEffect((()=>{d&&(n&&s.layersWithOutsidePointerEventsDisabled.add(d),s.layers.add(d),_e())}),[d,n,s]),o.useEffect((()=>()=>{d&&(s.layers.delete(d),s.layersWithOutsidePointerEventsDisabled.delete(d),_e())}),[d,s]),o.useEffect((()=>{const e=()=>p({});return document.addEventListener("dismissableLayer.update",e),()=>document.removeEventListener("dismissableLayer.update",e)}),[]),o.createElement(oe.div,(0,J.Z)({},u,{ref:v,style:{pointerEvents:y?E?"auto":"none":void 0,...e.style},onFocusCapture:Pe(e.onFocusCapture,S.onFocusCapture),onBlurCapture:Pe(e.onBlurCapture,S.onBlurCapture),onPointerDownCapture:Pe(e.onPointerDownCapture,b.onPointerDownCapture)}))}));function _e(){const e=new Event("dismissableLayer.update");document.dispatchEvent(e)}function Me(e,t,n){const r=n.originalEvent.target,o=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});return t&&r.addEventListener(e,t,{once:!0}),!r.dispatchEvent(o)}function Ie(e,[t,n]){return Math.min(n,Math.max(t,e))}const Ne=[" ","Enter","ArrowUp","ArrowDown"],De=[" ","Enter"],[Ae,Fe,Be]=function(e){const t=e+"CollectionProvider",[n,r]=de(t),[c,l]=n(t,{collectionRef:{current:null},itemMap:new Map}),a=e+"CollectionSlot",i=o.forwardRef(((e,t)=>{const{scope:n,children:r}=e,c=G(t,l(a,n).collectionRef);return o.createElement(Q,{ref:c},r)})),u=e+"CollectionItemSlot",s="data-radix-collection-item",d=o.forwardRef(((e,t)=>{const{scope:n,children:r,...c}=e,a=o.useRef(null),i=G(t,a),d=l(u,n);return o.useEffect((()=>(d.itemMap.set(a,{ref:a,...c}),()=>{d.itemMap.delete(a)}))),o.createElement(Q,{[s]:"",ref:i},r)}));return[{Provider:e=>{const{scope:t,children:n}=e,r=o.useRef(null),l=o.useRef(new Map).current;return o.createElement(c,{scope:t,itemMap:l,collectionRef:r},n)},Slot:i,ItemSlot:d},function(t){const n=l(e+"CollectionConsumer",t);return o.useCallback((()=>{const e=n.collectionRef.current;if(!e)return[];const t=Array.from(e.querySelectorAll(`[${s}]`));return Array.from(n.itemMap.values()).sort(((e,n)=>t.indexOf(e.ref.current)-t.indexOf(n.ref.current)))}),[n.collectionRef,n.itemMap])},r]}("Select"),[We,Ze]=de("Select",[Be]),[je,He]=We("Select"),Ke=o.forwardRef(((e,t)=>{const{__scopeSelect:n,disabled:r=!1,"aria-labelledby":c,...l}=e,a=He("SelectTrigger",n),i=G(t,a.onTriggerChange),u=Fe(n),s=(e=>{const t=ve("LabelConsumer"),{controlRef:n}=t;return o.useEffect((()=>{e&&(n.current=e)}),[e,n]),t.id})(a.trigger),d=c||s,[f,p,v]=ut((e=>{const t=u().filter((e=>!e.disabled)),n=t.find((e=>e.value===a.value)),r=st(t,e,n);void 0!==r&&a.onValueChange(r.value)})),m=()=>{r||(a.onOpenChange(!0),v())};return o.createElement(oe.button,(0,J.Z)({type:"button",role:"combobox","aria-controls":a.contentId,"aria-expanded":a.open,"aria-autocomplete":"none","aria-labelledby":d,dir:a.dir,disabled:r,"data-disabled":r?"":void 0},l,{ref:i,onPointerDown:Pe(l.onPointerDown,(e=>{e.target.releasePointerCapture(e.pointerId),0===e.button&&!1===e.ctrlKey&&(m(),a.triggerPointerDownPosRef.current={x:Math.round(e.pageX),y:Math.round(e.pageY)},e.preventDefault())})),onKeyDown:Pe(l.onKeyDown,(e=>{const t=""!==f.current;e.ctrlKey||e.altKey||e.metaKey||1!==e.key.length||p(e.key),t&&" "===e.key||Ne.includes(e.key)&&(m(),e.preventDefault())}))}))})),Ve=o.forwardRef(((e,t)=>{const{__scopeSelect:n,className:r,style:c,...l}=e,a=He("SelectValue",n),{onValueNodeHasChildrenChange:i}=a,u=void 0!==e.children,s=G(t,a.onValueNodeChange);return o.useEffect((()=>{i(u)}),[i,u]),o.createElement(oe.span,(0,J.Z)({},l,{ref:s,style:{pointerEvents:"none"}}))})),ze=o.forwardRef(((e,t)=>{const{__scopeSelect:n,children:r,...c}=e;return o.createElement(oe.span,(0,J.Z)({"aria-hidden":!0},c,{ref:t}),r||"\u25bc")})),Ue=o.forwardRef(((e,t)=>{const n=He("SelectContent",e.__scopeSelect),[r,c]=o.useState();return le((()=>{c(new DocumentFragment)}),[]),n.open?o.createElement(Xe,(0,J.Z)({},e,{ref:t})):r?ue.createPortal(o.createElement(Ye,{scope:e.__scopeSelect},o.createElement(Ae.Slot,{scope:e.__scopeSelect},o.createElement("div",null,e.children))),r):null})),[Ye,$e]=We("SelectContent"),Xe=o.forwardRef(((e,t)=>{const{__scopeSelect:n,onCloseAutoFocus:r,children:c,...l}=e,a=He("SelectContent",n),[i,u]=o.useState(null),[s,d]=o.useState(null),[f,p]=o.useState(null),v=G(t,(e=>d(e))),[m,h]=o.useState(null),[g,w]=o.useState(null),y=Fe(n),[E,b]=o.useState(!1),S=o.useRef(!0),C=o.useRef(!1);o.useEffect((()=>{if(s)return X(s)}),[s]);const x=o.useCallback((e=>{const[t,...n]=y().map((e=>e.ref.current)),[r]=n.slice(-1),o=document.activeElement;for(const c of e){if(c===o)return;if(null==c||c.scrollIntoView({block:"nearest"}),c===t&&f&&(f.scrollTop=0),c===r&&f&&(f.scrollTop=f.scrollHeight),null==c||c.focus(),document.activeElement!==o)return}}),[y,f]),R=o.useCallback((()=>{if(a.trigger&&a.valueNode&&i&&s&&f&&m&&g){const e=a.trigger.getBoundingClientRect(),t=s.getBoundingClientRect(),n=a.valueNode.getBoundingClientRect(),r=g.getBoundingClientRect();if("rtl"!==a.dir){const o=r.left-t.left,c=n.left-o,l=e.left-c,a=e.width+l,u=Math.max(a,t.width),s=Ie(c,[10,window.innerWidth-10-u]);i.style.minWidth=a+"px",i.style.left=s+"px"}else{const o=t.right-r.right,c=window.innerWidth-n.right-o,l=window.innerWidth-e.right-c,a=e.width+l,u=Math.max(a,t.width),s=Ie(c,[10,window.innerWidth-10-u]);i.style.minWidth=a+"px",i.style.right=s+"px"}const o=window.innerHeight-20,c=5*m.offsetHeight,l=f.scrollHeight,u=window.getComputedStyle(s),d=parseInt(u.borderTopWidth,10),p=parseInt(u.paddingTop,10),v=parseInt(u.borderBottomWidth,10),h=d+p+l+parseInt(u.paddingBottom,10)+v,w=e.top+e.height/2-10,y=o-w,E=m.offsetHeight/2,S=d+(m.offsetTop+E),x=h-S;if(S<=w){i.style.bottom="0px";const e=s.clientHeight-f.offsetTop-f.offsetHeight,t=S+Math.max(y,E+e+v);i.style.height=t+"px"}else{i.style.top="0px";const e=Math.max(w,d+f.offsetTop+E)+x;i.style.height=e+"px",f.scrollTop=S-w+f.offsetTop}i.style.margin="10px 0",i.style.minHeight=c+"px",i.style.maxHeight=o+"px",b(!0),requestAnimationFrame((()=>C.current=!0))}}),[a.trigger,a.valueNode,i,s,f,m,g,a.dir]);le((()=>R()),[R]);const T=o.useCallback((()=>x([m,s])),[x,m,s]);o.useEffect((()=>{E&&T()}),[E,T]);const k=o.useCallback((e=>{e&&!0===S.current&&(R(),T(),S.current=!1)}),[R,T]),{onOpenChange:P,triggerPointerDownPosRef:L}=a;o.useEffect((()=>{if(s){let e={x:0,y:0};const t=t=>{var n,r,o,c;e={x:Math.abs(Math.round(t.pageX)-(null!==(n=null===(r=L.current)||void 0===r?void 0:r.x)&&void 0!==n?n:0)),y:Math.abs(Math.round(t.pageY)-(null!==(o=null===(c=L.current)||void 0===c?void 0:c.y)&&void 0!==o?o:0))}},n=n=>{e.x<=10&&e.y<=10?n.preventDefault():s.contains(n.target)||P(!1),document.removeEventListener("pointermove",t),L.current=null};return null!==L.current&&(document.addEventListener("pointermove",t),document.addEventListener("pointerup",n,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",t),document.removeEventListener("pointerup",n,{capture:!0})}}}),[s,P,L]),o.useEffect((()=>{const e=()=>P(!1);return window.addEventListener("blur",e),window.addEventListener("resize",e),()=>{window.removeEventListener("blur",e),window.removeEventListener("resize",e)}}),[P]);const[O,_]=ut((e=>{const t=y().filter((e=>!e.disabled)),n=t.find((e=>e.ref.current===document.activeElement)),r=st(t,e,n);r&&setTimeout((()=>r.ref.current.focus()))})),M=o.useCallback((()=>null==s?void 0:s.focus()),[s]);return o.createElement(se,null,o.createElement(j,null,o.createElement("div",{ref:u,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:0}},o.createElement(ye,{asChild:!0,trapped:a.open,onMountAutoFocus:e=>{e.preventDefault()},onUnmountAutoFocus:Pe(r,(e=>{var t;null===(t=a.trigger)||void 0===t||t.focus({preventScroll:!0}),e.preventDefault()}))},o.createElement(Oe,(0,J.Z)({role:"listbox",id:a.contentId,"data-state":a.open?"open":"closed",dir:a.dir,onContextMenu:e=>e.preventDefault()},l,{ref:v,style:{display:"flex",flexDirection:"column",boxSizing:"border-box",maxHeight:"100%",outline:"none",...l.style},disableOutsidePointerEvents:!0,onFocusOutside:e=>e.preventDefault(),onDismiss:()=>a.onOpenChange(!1),onKeyDown:Pe(l.onKeyDown,(e=>{const t=e.ctrlKey||e.altKey||e.metaKey;if("Tab"===e.key&&e.preventDefault(),t||1!==e.key.length||_(e.key),["ArrowUp","ArrowDown","Home","End"].includes(e.key)){let t=y().filter((e=>!e.disabled)).map((e=>e.ref.current));if(["ArrowUp","End"].includes(e.key)&&(t=t.slice().reverse()),["ArrowUp","ArrowDown"].includes(e.key)){const n=e.target,r=t.indexOf(n);t=t.slice(r+1)}setTimeout((()=>x(t))),e.preventDefault()}}))}),o.createElement(Ye,{scope:n,contentWrapper:i,content:s,viewport:f,onViewportChange:p,selectedItem:m,onSelectedItemChange:h,selectedItemText:g,onSelectedItemTextChange:w,onScrollButtonChange:k,onItemLeave:M,isPositioned:E,shouldExpandOnScrollRef:C,searchRef:O},c))))))})),qe=o.forwardRef(((e,t)=>{const{__scopeSelect:n,...r}=e,c=$e("SelectViewport",n),l=G(t,c.onViewportChange),a=o.useRef(0);return o.createElement(o.Fragment,null,o.createElement("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"}}),o.createElement(Ae.Slot,{scope:n},o.createElement(oe.div,(0,J.Z)({"data-radix-select-viewport":"",role:"presentation"},r,{ref:l,style:{position:"relative",flex:1,overflow:"auto",...r.style},onScroll:Pe(r.onScroll,(e=>{const t=e.currentTarget,{contentWrapper:n,shouldExpandOnScrollRef:r}=c;if(r.current&&n){const e=Math.abs(a.current-t.scrollTop);if(e>0){const r=window.innerHeight-20,o=parseFloat(n.style.minHeight),c=parseFloat(n.style.height),l=Math.max(o,c);if(l<r){const o=l+e,c=Math.min(r,o),a=o-c;n.style.height=c+"px","0px"===n.style.bottom&&(t.scrollTop=a>0?a:0,n.style.justifyContent="flex-end")}}}a.current=t.scrollTop}))}))))})),[Ge,Je]=We("SelectGroup"),Qe=o.forwardRef(((e,t)=>{const{__scopeSelect:n,...r}=e,c=ge();return o.createElement(Ge,{scope:n,id:c},o.createElement(oe.div,(0,J.Z)({role:"group","aria-labelledby":c},r,{ref:t})))})),[et,tt]=We("SelectItem"),nt=o.forwardRef(((e,t)=>{const{__scopeSelect:n,value:r,disabled:c=!1,textValue:l,...a}=e,i=He("SelectItem",n),u=$e("SelectItem",n),s=i.value===r,[d,f]=o.useState(null!=l?l:""),[p,v]=o.useState(!1),m=G(t,s?u.onSelectedItemChange:void 0),h=ge(),g=()=>{c||(i.onValueChange(r),i.onOpenChange(!1))};return o.createElement(et,{scope:n,value:r,textId:h,isSelected:s,onItemTextChange:o.useCallback((e=>{f((t=>{var n;return t||(null!==(n=null==e?void 0:e.textContent)&&void 0!==n?n:"").trim()}))}),[])},o.createElement(Ae.ItemSlot,{scope:n,value:r,disabled:c,textValue:d},o.createElement(oe.div,(0,J.Z)({role:"option","aria-labelledby":h,"aria-selected":s&&p,"data-state":s?"active":"inactive","aria-disabled":c||void 0,"data-disabled":c?"":void 0,tabIndex:c?void 0:-1},a,{ref:m,onFocus:Pe(a.onFocus,(()=>v(!0))),onBlur:Pe(a.onBlur,(()=>v(!1))),onPointerUp:Pe(a.onPointerUp,g),onPointerMove:Pe(a.onPointerMove,(e=>{c?u.onItemLeave():e.currentTarget.focus({preventScroll:!0})})),onPointerLeave:Pe(a.onPointerLeave,(e=>{e.currentTarget===document.activeElement&&u.onItemLeave()})),onKeyDown:Pe(a.onKeyDown,(e=>{""!==u.searchRef.current&&" "===e.key||(De.includes(e.key)&&g()," "===e.key&&e.preventDefault())}))}))))})),rt=o.forwardRef(((e,t)=>{var n;const{__scopeSelect:r,className:c,style:l,...a}=e,i=He("SelectItemText",r),u=$e("SelectItemText",r),s=tt("SelectItemText",r),d=o.useRef(null),f=G(t,d,s.onItemTextChange,s.isSelected?u.onSelectedItemTextChange:void 0);return o.createElement(o.Fragment,null,o.createElement(oe.span,(0,J.Z)({id:s.textId},a,{ref:f})),s.isSelected&&i.valueNode&&!i.valueNodeHasChildren?ue.createPortal(a.children,i.valueNode):null,i.bubbleSelect?ue.createPortal(o.createElement("option",{value:s.value},null===(n=d.current)||void 0===n?void 0:n.textContent),i.bubbleSelect):null)})),ot=o.forwardRef(((e,t)=>{const{__scopeSelect:n,...r}=e;return tt("SelectItemIndicator",n).isSelected?o.createElement(oe.span,(0,J.Z)({"aria-hidden":!0},r,{ref:t})):null})),ct=o.forwardRef(((e,t)=>{const n=$e("SelectScrollUpButton",e.__scopeSelect),[r,c]=o.useState(!1),l=G(t,n.onScrollButtonChange);return o.useEffect((()=>{if(n.viewport&&n.isPositioned){const e=n.viewport;function t(){const t=e.scrollTop>0;c(t)}return t(),e.addEventListener("scroll",t),()=>e.removeEventListener("scroll",t)}}),[n.viewport,n.isPositioned]),r?o.createElement(at,(0,J.Z)({},e,{ref:l,onAutoScroll:()=>{const{viewport:e,selectedItem:t}=n;e&&t&&(e.scrollTop=e.scrollTop-t.offsetHeight)}})):null})),lt=o.forwardRef(((e,t)=>{const n=$e("SelectScrollDownButton",e.__scopeSelect),[r,c]=o.useState(!1),l=G(t,n.onScrollButtonChange);return o.useEffect((()=>{if(n.viewport&&n.isPositioned){const e=n.viewport;function t(){const t=e.scrollHeight-e.clientHeight,n=Math.ceil(e.scrollTop)<t;c(n)}return t(),e.addEventListener("scroll",t),()=>e.removeEventListener("scroll",t)}}),[n.viewport,n.isPositioned]),r?o.createElement(at,(0,J.Z)({},e,{ref:l,onAutoScroll:()=>{const{viewport:e,selectedItem:t}=n;e&&t&&(e.scrollTop=e.scrollTop+t.offsetHeight)}})):null})),at=o.forwardRef(((e,t)=>{const{__scopeSelect:n,onAutoScroll:r,...c}=e,l=$e("SelectScrollButton",n),a=o.useRef(null),i=Fe(n),u=o.useCallback((()=>{null!==a.current&&(window.clearInterval(a.current),a.current=null)}),[]);return o.useEffect((()=>()=>u()),[u]),le((()=>{var e;const t=i().find((e=>e.ref.current===document.activeElement));null==t||null===(e=t.ref.current)||void 0===e||e.scrollIntoView({block:"nearest"})}),[i]),o.createElement(oe.div,(0,J.Z)({"aria-hidden":!0},c,{ref:t,style:{flexShrink:0,...c.style},onPointerMove:Pe(c.onPointerMove,(()=>{l.onItemLeave(),null===a.current&&(a.current=window.setInterval(r,50))})),onPointerLeave:Pe(c.onPointerLeave,(()=>{u()}))}))})),it=o.forwardRef(((e,t)=>{const{value:n,...r}=e,c=o.useRef(null),l=G(t,c),a=function(e){const t=o.useRef({value:e,previous:e});return o.useMemo((()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous)),[e])}(n);return o.useEffect((()=>{const e=c.current,t=window.HTMLSelectElement.prototype,r=Object.getOwnPropertyDescriptor(t,"value").set;if(a!==n&&r){const t=new Event("change",{bubbles:!0});r.call(e,n),e.dispatchEvent(t)}}),[a,n]),o.createElement(ce,{asChild:!0},o.createElement("select",(0,J.Z)({},r,{ref:l,defaultValue:n})))}));function ut(e){const t=ae(e),n=o.useRef(""),r=o.useRef(0),c=o.useCallback((e=>{const o=n.current+e;t(o),function e(t){n.current=t,window.clearTimeout(r.current),""!==t&&(r.current=window.setTimeout((()=>e("")),1e3))}(o)}),[t]),l=o.useCallback((()=>{n.current="",window.clearTimeout(r.current)}),[]);return o.useEffect((()=>()=>window.clearTimeout(r.current)),[]),[n,c,l]}function st(e,t,n){const r=t.length>1&&Array.from(t).every((e=>e===t[0]))?t[0]:t,o=n?e.indexOf(n):-1;let c=(l=e,a=Math.max(o,0),l.map(((e,t)=>l[(a+t)%l.length])));var l,a;1===r.length&&(c=c.filter((e=>e!==n)));const i=c.find((e=>e.textValue.toLowerCase().startsWith(r.toLowerCase())));return i!==n?i:void 0}const dt=e=>{const{__scopeSelect:t,children:n,open:r,defaultOpen:c,onOpenChange:l,value:a,defaultValue:i,onValueChange:u,dir:s,name:d,autoComplete:f}=e,[p,v]=o.useState(null),[m,h]=o.useState(null),[g,w]=o.useState(!1),[y=!1,E]=ie({prop:r,defaultProp:c,onChange:l}),[b="",S]=ie({prop:a,defaultProp:i,onChange:u}),C=!p||Boolean(p.closest("form")),[x,R]=o.useState(null),T=o.useRef(null);return o.createElement(je,{scope:t,trigger:p,onTriggerChange:v,valueNode:m,onValueNodeChange:h,valueNodeHasChildren:g,onValueNodeHasChildrenChange:w,contentId:ge(),value:b,onValueChange:S,open:y,onOpenChange:E,dir:s,bubbleSelect:x,triggerPointerDownPosRef:T},o.createElement(Ae.Provider,{scope:t},n),C?o.createElement(it,{ref:R,"aria-hidden":!0,tabIndex:-1,name:d,autoComplete:f,value:b,onChange:e=>S(e.target.value)}):null)},ft=Ke,pt=Ve,vt=ze,mt=Ue,ht=qe,gt=Qe,wt=nt,yt=rt,Et=ot,bt=ct,St=lt},46445:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(67294),o=n(45697),c=n.n(o);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=(0,r.forwardRef)((function(e,t){var n=e.color,o=void 0===n?"currentColor":n,c=e.size,i=void 0===c?24:c,u=a(e,["color","size"]);return r.createElement("svg",l({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},u),r.createElement("polyline",{points:"20 6 9 17 4 12"}))}));i.propTypes={color:c().string,size:c().oneOfType([c().string,c().number])},i.displayName="Check";const u=i},27434:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(67294),o=n(45697),c=n.n(o);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=(0,r.forwardRef)((function(e,t){var n=e.color,o=void 0===n?"currentColor":n,c=e.size,i=void 0===c?24:c,u=a(e,["color","size"]);return r.createElement("svg",l({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},u),r.createElement("polyline",{points:"6 9 12 15 18 9"}))}));i.propTypes={color:c().string,size:c().oneOfType([c().string,c().number])},i.displayName="ChevronDown";const u=i},82802:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(67294),o=n(45697),c=n.n(o);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=(0,r.forwardRef)((function(e,t){var n=e.color,o=void 0===n?"currentColor":n,c=e.size,i=void 0===c?24:c,u=a(e,["color","size"]);return r.createElement("svg",l({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},u),r.createElement("polyline",{points:"18 15 12 9 6 15"}))}));i.propTypes={color:c().string,size:c().oneOfType([c().string,c().number])},i.displayName="ChevronUp";const u=i}}]);