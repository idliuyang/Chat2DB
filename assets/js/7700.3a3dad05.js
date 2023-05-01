"use strict";(self.webpackChunkchat_2_db=self.webpackChunkchat_2_db||[]).push([[7700,889],{4882:(e,t,n)=>{n.r(t),n.d(t,{default:()=>A});var r=n(67294),o=n(86010),a=n(80681),c=n(65319),l=n(56391),i=n(53964),u=n(27391),s=n(25682),d=n(60155),f=n(92210),m=n(6379),p=n(58010);const b={backToTopButton:"backToTopButton_sjWU",backToTopButtonShow:"backToTopButtonShow_xfvO"};function y(){const{shown:e,scrollToTop:t}=function({threshold:e}){const[t,n]=(0,r.useState)(!1),o=(0,r.useRef)(!1),{startScroll:a,cancelScroll:c}=(0,m.Ct)();return(0,m.RF)((({scrollY:t},r)=>{const a=null==r?void 0:r.scrollY;a&&(o.current?o.current=!1:t>=a?(c(),n(!1)):t<e?n(!1):t+window.innerHeight<document.documentElement.scrollHeight&&n(!0))})),(0,p.S)((e=>{e.location.hash&&(o.current=!0,n(!1))})),{shown:t,scrollToTop:()=>a(0)}}({threshold:300});return r.createElement("button",{"aria-label":(0,f.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,o.Z)("clean-btn",c.k.common.backToTopButton,b.backToTopButton,e&&b.backToTopButtonShow),type:"button",onClick:t})}var h=n(16550),v=n(24683),g=n(87224),_=n(2165);function w(e){const t=(0,v.i)(),n="desktop"===t||"ssr"===t,o="mobile"===t;return r.createElement(r.Fragment,null,n&&r.createElement(g.Z,e),o&&r.createElement(_.Z,e))}var E=n(2807);const O={expandButton:"expandButton_m80_",expandButtonIcon:"expandButtonIcon_BlDH"};function S({toggleSidebar:e}){return r.createElement("div",{className:O.expandButton,title:(0,f.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,f.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:e,onClick:e},r.createElement(E.Z,{className:O.expandButtonIcon}))}const k={docSidebarContainer:"docSidebarContainer_b6E3",docSidebarContainerHidden:"docSidebarContainerHidden_b3ry",sidebarViewport:"sidebarViewport_Xe31"};function j({children:e}){const t=(0,s.V)();var n;return r.createElement(r.Fragment,{key:null!==(n=null==t?void 0:t.name)&&void 0!==n?n:"noSidebar"},e)}function P({sidebar:e,hiddenSidebarContainer:t,setHiddenSidebarContainer:n}){const{pathname:a}=(0,h.TH)(),[l,i]=(0,r.useState)(!1),u=(0,r.useCallback)((()=>{l&&i(!1),n((e=>!e))}),[n,l]);return r.createElement("aside",{className:(0,o.Z)(c.k.docs.docSidebarContainer,k.docSidebarContainer,t&&k.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(k.docSidebarContainer)&&t&&i(!0)}},r.createElement(j,null,r.createElement("div",{className:(0,o.Z)(k.sidebarViewport,l&&k.sidebarViewportHidden)},r.createElement(w,{sidebar:e,path:a,onCollapse:u,isHidden:l}),l&&r.createElement(S,{toggleSidebar:u}))))}const I={docMainContainer:"docMainContainer_gTbr",docMainContainerEnhanced:"docMainContainerEnhanced_Uz_u",docItemWrapperEnhanced:"docItemWrapperEnhanced_czyv"};function x({hiddenSidebarContainer:e,children:t}){const n=(0,s.V)();return r.createElement("main",{className:(0,o.Z)(I.docMainContainer,(e||!n)&&I.docMainContainerEnhanced)},r.createElement("div",{className:(0,o.Z)("container padding-top--md padding-bottom--lg",I.docItemWrapper,e&&I.docItemWrapperEnhanced)},t))}const C={docPage:"docPage__5DB",docsWrapper:"docsWrapper_BCFX"};function T({children:e}){const t=(0,s.V)(),[n,o]=(0,r.useState)(!1);return r.createElement(d.Z,{wrapperClassName:C.docsWrapper},r.createElement(y,null),r.createElement("div",{className:C.docPage},t&&r.createElement(P,{sidebar:t.items,hiddenSidebarContainer:n,setHiddenSidebarContainer:o}),r.createElement(x,{hiddenSidebarContainer:n},e)))}var N=n(30889),Z=n(36894);function B(e){const{versionMetadata:t}=e;return r.createElement(r.Fragment,null,r.createElement(Z.Z,{version:t.version,tag:(0,l.os)(t.pluginId,t.version)}),r.createElement(a.d,null,t.noIndex&&r.createElement("meta",{name:"robots",content:"noindex, nofollow"})))}function A(e){const{versionMetadata:t}=e,n=(0,i.hI)(e);if(!n)return r.createElement(N.default,null);const{docElement:l,sidebarName:d,sidebarItems:f}=n;return r.createElement(r.Fragment,null,r.createElement(B,e),r.createElement(a.FG,{className:(0,o.Z)(c.k.wrapper.docsPages,c.k.page.docsDocPage,e.versionMetadata.className)},r.createElement(u.q,{version:t},r.createElement(s.b,{name:d,items:f},r.createElement(T,null,l)))))}},97213:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),o=n(86010),a=n(92210),c=n(2807);const l={collapseSidebarButton:"collapseSidebarButton_PEFL",collapseSidebarButtonIcon:"collapseSidebarButtonIcon_kv0_"};function i({onClick:e}){return r.createElement("button",{type:"button",title:(0,a.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,a.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,o.Z)("button button--secondary button--outline",l.collapseSidebarButton),onClick:e},r.createElement(c.Z,{className:l.collapseSidebarButtonIcon}))}},99176:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(67294),o=n(86010),a=n(65319),c=n(64738),l=n(6379),i=n(92210),u=n(72642);const s={menu:"menu_SIkG",menuWithAnnouncementBar:"menuWithAnnouncementBar_GW3s"};function d({path:e,sidebar:t,className:n}){const d=function(){const{isActive:e}=(0,c.nT)(),[t,n]=(0,r.useState)(e);return(0,l.RF)((({scrollY:t})=>{e&&n(0===t)}),[e]),e&&t}();return r.createElement("nav",{"aria-label":(0,i.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,o.Z)("menu thin-scrollbar",s.menu,d&&s.menuWithAnnouncementBar,n)},r.createElement("ul",{className:(0,o.Z)(a.k.docs.docSidebarMenu,"menu__list")},r.createElement(u.Z,{items:t,activePath:e,level:1})))}},72642:(e,t,n)=>{n.d(t,{Z:()=>L});var r=n(67294),o=n(37806);const a=Symbol("EmptyContext"),c=r.createContext(a);function l({children:e}){const[t,n]=(0,r.useState)(null),o=(0,r.useMemo)((()=>({expandedItem:t,setExpandedItem:n})),[t]);return r.createElement(c.Provider,{value:o},e)}var i=n(86010),u=n(86016),s=n(52647),d=n(65319),f=n(53964),m=n(87275),p=n(31984),b=n(92210),y=n(30358);function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function g({categoryLabel:e,onClick:t}){return r.createElement("button",{"aria-label":(0,b.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:e}),type:"button",className:"clean-btn menu__caret",onClick:t})}function _(e){var{item:t,onItemClick:n,activePath:l,level:b,index:_}=e,w=v(e,["item","onItemClick","activePath","level","index"]);const{items:E,label:O,collapsible:S,className:k,href:j}=t,{docs:{sidebar:{autoCollapseCategories:P}}}=(0,u.L)(),I=function(e){const t=(0,y.Z)();return(0,r.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,f.Wl)(e):void 0),[e,t])}(t),x=(0,f._F)(t,l),C=(0,m.Mg)(j,l),{collapsed:T,setCollapsed:N}=(0,s.u)({initialState:()=>!!S&&(!x&&t.collapsed)}),{expandedItem:Z,setExpandedItem:B}=function(){const e=(0,r.useContext)(c);if(e===a)throw new o.i6("DocSidebarItemsExpandedStateProvider");return e}(),A=(e=!T)=>{B(e?null:_),N(e)};return function({isActive:e,collapsed:t,updateCollapsed:n}){const a=(0,o.D9)(e);(0,r.useEffect)((()=>{e&&!a&&t&&n(!1)}),[e,a,t,n])}({isActive:x,collapsed:T,updateCollapsed:A}),(0,r.useEffect)((()=>{S&&null!=Z&&Z!==_&&P&&N(!0)}),[S,Z,_,N,P]),r.createElement("li",{className:(0,i.Z)(d.k.docs.docSidebarItemCategory,d.k.docs.docSidebarItemCategoryLevel(b),"menu__list-item",{"menu__list-item--collapsed":T},k)},r.createElement("div",{className:(0,i.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":C})},r.createElement(p.Z,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){h(e,t,n[t])}))}return e}({className:(0,i.Z)("menu__link",{"menu__link--sublist":S,"menu__link--sublist-caret":!j&&S,"menu__link--active":x}),onClick:S?e=>{null==n||n(t),j?A(!1):(e.preventDefault(),A())}:()=>{null==n||n(t)},"aria-current":C?"page":void 0,"aria-expanded":S?!T:void 0,href:S?null!=I?I:"#":I},w),O),j&&S&&r.createElement(g,{categoryLabel:O,onClick:e=>{e.preventDefault(),A()}})),r.createElement(s.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:T},r.createElement(L,{items:E,tabIndex:T?-1:0,onItemClick:n,activePath:l,level:b+1})))}var w=n(47785),E=n(40379);const O={menuExternalLink:"menuExternalLink_NmtK"};function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function k(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function j(e){var{item:t,onItemClick:n,activePath:o,level:a,index:c}=e,l=k(e,["item","onItemClick","activePath","level","index"]);const{href:u,label:s,className:m,autoAddBaseUrl:b}=t,y=(0,f._F)(t,o),h=(0,w.Z)(u);return r.createElement("li",{className:(0,i.Z)(d.k.docs.docSidebarItemLink,d.k.docs.docSidebarItemLinkLevel(a),"menu__list-item",m),key:s},r.createElement(p.Z,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){S(e,t,n[t])}))}return e}({className:(0,i.Z)("menu__link",!h&&O.menuExternalLink,{"menu__link--active":y}),autoAddBaseUrl:b,"aria-current":y?"page":void 0,to:u},h&&{onClick:n?()=>n(t):void 0},l),s,!h&&r.createElement(E.Z,null)))}const P={menuHtmlItem:"menuHtmlItem_M9Kj"};function I({item:e,level:t,index:n}){const{value:o,defaultStyle:a,className:c}=e;return r.createElement("li",{className:(0,i.Z)(d.k.docs.docSidebarItemLink,d.k.docs.docSidebarItemLinkLevel(t),a&&[P.menuHtmlItem,"menu__list-item"],c),key:n,dangerouslySetInnerHTML:{__html:o}})}function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){x(e,t,n[t])}))}return e}function T(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function N(e){var{item:t}=e,n=T(e,["item"]);switch(t.type){case"category":return r.createElement(_,C({item:t},n));case"html":return r.createElement(I,C({item:t},n));default:return r.createElement(j,C({item:t},n))}}function Z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function B(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function A(e){var{items:t}=e,n=B(e,["items"]);return r.createElement(l,null,t.map(((e,t)=>r.createElement(N,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){Z(e,t,n[t])}))}return e}({key:t,item:e,index:t},n)))))}const L=(0,r.memo)(A)},2807:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e){return r.createElement("svg",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({width:"20",height:"20","aria-hidden":"true"},e),r.createElement("g",{fill:"#7a7a7a"},r.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),r.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}},30889:(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});var r=n(67294),o=n(92210),a=n(80681),c=n(60155);function l(){return r.createElement(r.Fragment,null,r.createElement(a.d,{title:(0,o.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),r.createElement(c.Z,null,r.createElement("main",{className:"container margin-vert--xl"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col col--6 col--offset-3"},r.createElement("h1",{className:"hero__title"},r.createElement(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),r.createElement("p",null,r.createElement(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),r.createElement("p",null,r.createElement(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}},27391:(e,t,n)=>{n.d(t,{E:()=>l,q:()=>c});var r=n(67294),o=n(37806);const a=r.createContext(null);function c({children:e,version:t}){return r.createElement(a.Provider,{value:t},e)}function l(){const e=(0,r.useContext)(a);if(null===e)throw new o.i6("DocsVersionProvider");return e}},70655:(e,t,n)=>{n.r(t),n.d(t,{__assign:()=>a,__asyncDelegator:()=>k,__asyncGenerator:()=>S,__asyncValues:()=>j,__await:()=>O,__awaiter:()=>p,__classPrivateFieldGet:()=>T,__classPrivateFieldIn:()=>Z,__classPrivateFieldSet:()=>N,__createBinding:()=>y,__decorate:()=>l,__esDecorate:()=>u,__exportStar:()=>h,__extends:()=>o,__generator:()=>b,__importDefault:()=>C,__importStar:()=>x,__makeTemplateObject:()=>P,__metadata:()=>m,__param:()=>i,__propKey:()=>d,__read:()=>g,__rest:()=>c,__runInitializers:()=>s,__setFunctionName:()=>f,__spread:()=>_,__spreadArray:()=>E,__spreadArrays:()=>w,__values:()=>v});var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)};function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var a=function(){return a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},a.apply(this,arguments)};function c(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}function l(e,t,n,r){var o,a=arguments.length,c=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,r);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(c=(a<3?o(c):a>3?o(t,n,c):o(t,n))||c);return a>3&&c&&Object.defineProperty(t,n,c),c}function i(e,t){return function(n,r){t(n,r,e)}}function u(e,t,n,r,o,a){function c(e){if(void 0!==e&&"function"!=typeof e)throw new TypeError("Function expected");return e}for(var l,i=r.kind,u="getter"===i?"get":"setter"===i?"set":"value",s=!t&&e?r.static?e:e.prototype:null,d=t||(s?Object.getOwnPropertyDescriptor(s,r.name):{}),f=!1,m=n.length-1;m>=0;m--){var p={};for(var b in r)p[b]="access"===b?{}:r[b];for(var b in r.access)p.access[b]=r.access[b];p.addInitializer=function(e){if(f)throw new TypeError("Cannot add initializers after decoration has completed");a.push(c(e||null))};var y=(0,n[m])("accessor"===i?{get:d.get,set:d.set}:d[u],p);if("accessor"===i){if(void 0===y)continue;if(null===y||"object"!=typeof y)throw new TypeError("Object expected");(l=c(y.get))&&(d.get=l),(l=c(y.set))&&(d.set=l),(l=c(y.init))&&o.push(l)}else(l=c(y))&&("field"===i?o.push(l):d[u]=l)}s&&Object.defineProperty(s,r.name,d),f=!0}function s(e,t,n){for(var r=arguments.length>2,o=0;o<t.length;o++)n=r?t[o].call(e,n):t[o].call(e);return r?n:void 0}function d(e){return"symbol"==typeof e?e:"".concat(e)}function f(e,t,n){return"symbol"==typeof t&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:n?"".concat(n," ",t):t})}function m(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function p(e,t,n,r){return new(n||(n=Promise))((function(o,a){function c(e){try{i(r.next(e))}catch(t){a(t)}}function l(e){try{i(r.throw(e))}catch(t){a(t)}}function i(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,l)}i((r=r.apply(e,t||[])).next())}))}function b(e,t){var n,r,o,a,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(l){return function(i){return function(l){if(n)throw new TypeError("Generator is already executing.");for(;a&&(a=0,l[0]&&(c=0)),c;)try{if(n=1,r&&(o=2&l[0]?r.return:l[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,l[1])).done)return o;switch(r=0,o&&(l=[2&l[0],o.value]),l[0]){case 0:case 1:o=l;break;case 4:return c.label++,{value:l[1],done:!1};case 5:c.label++,r=l[1],l=[0];continue;case 7:l=c.ops.pop(),c.trys.pop();continue;default:if(!(o=c.trys,(o=o.length>0&&o[o.length-1])||6!==l[0]&&2!==l[0])){c=0;continue}if(3===l[0]&&(!o||l[1]>o[0]&&l[1]<o[3])){c.label=l[1];break}if(6===l[0]&&c.label<o[1]){c.label=o[1],o=l;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(l);break}o[2]&&c.ops.pop(),c.trys.pop();continue}l=t.call(e,c)}catch(i){l=[6,i],r=0}finally{n=o=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,i])}}}var y=Object.create?function(e,t,n,r){void 0===r&&(r=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]};function h(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||y(t,e,n)}function v(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function g(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,a=n.call(e),c=[];try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)c.push(r.value)}catch(l){o={error:l}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(o)throw o.error}}return c}function _(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(g(arguments[t]));return e}function w(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var a=arguments[t],c=0,l=a.length;c<l;c++,o++)r[o]=a[c];return r}function E(e,t,n){if(n||2===arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}function O(e){return this instanceof O?(this.v=e,this):new O(e)}function S(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,o=n.apply(e,t||[]),a=[];return r={},c("next"),c("throw"),c("return"),r[Symbol.asyncIterator]=function(){return this},r;function c(e){o[e]&&(r[e]=function(t){return new Promise((function(n,r){a.push([e,t,n,r])>1||l(e,t)}))})}function l(e,t){try{(n=o[e](t)).value instanceof O?Promise.resolve(n.value.v).then(i,u):s(a[0][2],n)}catch(r){s(a[0][3],r)}var n}function i(e){l("next",e)}function u(e){l("throw",e)}function s(e,t){e(t),a.shift(),a.length&&l(a[0][0],a[0][1])}}function k(e){var t,n;return t={},r("next"),r("throw",(function(e){throw e})),r("return"),t[Symbol.iterator]=function(){return this},t;function r(r,o){t[r]=e[r]?function(t){return(n=!n)?{value:O(e[r](t)),done:!1}:o?o(t):t}:o}}function j(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,n=e[Symbol.asyncIterator];return n?n.call(e):(e=v(e),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(n){t[n]=e[n]&&function(t){return new Promise((function(r,o){(function(e,t,n,r){Promise.resolve(r).then((function(t){e({value:t,done:n})}),t)})(r,o,(t=e[n](t)).done,t.value)}))}}}function P(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var I=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t};function x(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&y(t,e,n);return I(t,e),t}function C(e){return e&&e.__esModule?e:{default:e}}function T(e,t,n,r){if("a"===n&&!r)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?r:"a"===n?r.call(e):r?r.value:t.get(e)}function N(e,t,n,r,o){if("m"===r)throw new TypeError("Private method is not writable");if("a"===r&&!o)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!o:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?o.call(e,n):o?o.value=n:t.set(e,n),n}function Z(e,t){if(null===t||"object"!=typeof t&&"function"!=typeof t)throw new TypeError("Cannot use 'in' operator on non-object");return"function"==typeof e?t===e:e.has(t)}}}]);