"use strict";(self.webpackChunkchat_2_db=self.webpackChunkchat_2_db||[]).push([[6897,9103],{16897:(t,e,i)=>{i.r(e),i.d(e,{dyte_tooltip:()=>n});var s=i(67503),o=i(17775),a=i(82324),r=i(69750);const n=class{constructor(t){(0,s.r)(this,t),this.dyteOpenChange=(0,s.c)(this,"dyteOpenChange",7),this.showMenu=()=>{this.disabled||(this.isInFocus=!0,setTimeout((()=>{this.isInFocus&&(this.tooltipEl.style.display="block",this.update(),this.dyteOpenChange.emit(!0),"sm"===this.size&&setTimeout((()=>{this.isInFocus&&this.hideMenu()}),1e3))}),this.delay))},this.hideMenu=()=>{this.open||this.disabled||(this.isInFocus=!1,this.tooltipEl.style.display="none",this.dyteOpenChange.emit(!1))},this.label="",this.variant="secondary",this.disabled=!1,this.open=!1,this.kind="inline",this.size=void 0,this.placement="top",this.delay=0,this.iconPack=a.d,this.t=(0,r.u)(),this.isInFocus=!1}componentDidLoad(){this.triggerEl.addEventListener("focusin",this.showMenu),this.triggerEl.addEventListener("mouseenter",this.showMenu),this.triggerEl.addEventListener("focusout",this.hideMenu),this.triggerEl.addEventListener("mouseleave",this.hideMenu),(0,s.w)((()=>{this.openChanged(this.open)}))}openChanged(t){t?this.showMenu():this.hideMenu()}update(){(0,o.c)(this.triggerEl,this.tooltipEl,{placement:this.placement,middleware:[(0,o.o)(8),(0,o.f)(),(0,o.s)({padding:5}),(0,o.a)({element:this.arrowEl})]}).then((({x:t,y:e,placement:i,middlewareData:s})=>{Object.assign(this.tooltipEl.style,{left:`${t}px`,top:`${e}px`});const{x:o,y:a}=s.arrow,r={top:"bottom",right:"left",bottom:"top",left:"right"}[i.split("-")[0]];Object.assign(this.arrowEl.style,{left:null!=o?`${o}px`:"",top:null!=a?`${a}px`:"",right:"",bottom:"",[r]:"-4px"})}))}render(){return(0,s.h)(s.H,null,(0,s.h)("span",{part:"trigger",id:"trigger",ref:t=>this.triggerEl=t},(0,s.h)("slot",null)),(0,s.h)("div",{part:"tooltip",class:"tooltip",id:"tooltip",role:"tooltip",ref:t=>this.tooltipEl=t},(0,s.h)("div",{id:"arrow",ref:t=>this.arrowEl=t,part:"arrow"}),this.label,(0,s.h)("slot",{name:"tooltip"})))}static get watchers(){return{open:["openChanged"]}}};n.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{--background-color:var(--dyte-tooltip-background-color, rgb(var(--dyte-colors-background-600, 60 60 60)));display:inline-flex}#trigger{display:block;width:100%;flex:1 1 0%}.tooltip,#arrow{position:absolute;background-color:var(--background-color)}.tooltip{max-width:var(--dyte-space-64, 256px);position:fixed;z-index:20;display:none;width:-webkit-max-content;width:-moz-max-content;width:max-content;padding-left:var(--dyte-space-2, 8px);padding-right:var(--dyte-space-2, 8px);padding-top:var(--dyte-space-1, 4px);padding-bottom:var(--dyte-space-1, 4px);border-radius:var(--dyte-border-radius-sm, 4px);color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88));--tw-shadow:0 1px 2px 0 rgb(0 0 0 / 0.05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);font-size:12px}#arrow{position:absolute;height:var(--dyte-space-2, 8px);width:var(--dyte-space-2, 8px);transform:rotate(45deg)}:host([variant='primary']){--background-color:rgb(var(--dyte-colors-brand-500, 33 96 253))}:host([kind='block']){display:block}"}}]);