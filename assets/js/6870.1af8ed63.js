"use strict";(self.webpackChunkchat_2_db=self.webpackChunkchat_2_db||[]).push([[6870,9044],{66870:(t,a,i)=>{i.r(a),i.d(a,{dyte_plugins:()=>c});var e=i(67503),s=i(82324),r=i(69750),n=i(86466),o=i(61305);i(60804);const c=class{constructor(t){(0,e.r)(this,t),this.stateUpdate=(0,e.c)(this,"dyteStateUpdate",7),this.close=()=>{this.stateUpdate.emit({activeSidebar:!1,sidebar:"none"}),n.s.activeSidebar=!1,n.s.sidebar="none"},this.meeting=void 0,this.config=o.d,this.size=void 0,this.iconPack=s.d,this.t=(0,r.u)(),this.plugins=[],this.canStartPlugins=!1,this.canClosePlugin=!1,this.activatedPluginsId=[]}connectedCallback(){this.meetingChanged(this.meeting)}disconnectedCallback(){var t;null===(t=this.meeting)||void 0===t||t.plugins.all.removeListener("stateUpdate",this.updateActivePlugins)}meetingChanged(t){null!=t&&(this.canStartPlugins=t.self.permissions.plugins.canStart,this.canClosePlugin=t.self.permissions.plugins.canClose,this.plugins=t.plugins.all.toArray().filter((a=>{var i;return!(null===(i=t.self.config.disabledPlugins)||void 0===i?void 0:i.includes(a.id))})),this.updateActivePlugins=()=>{this.activatedPluginsId=t.plugins.active.toArray().map((t=>t.id))},this.updateActivePlugins(),t.plugins.all.addListener("stateUpdate",this.updateActivePlugins))}render(){return(0,e.h)(e.H,null,(0,e.h)("ul",{class:"scrollbar"},this.plugins.map((t=>(0,e.h)("li",{key:t.name,class:"plugin"},(0,e.h)("div",{class:"metadata"},(0,e.h)("img",{src:t.picture}),(0,e.h)("div",{class:"name"},t.name)),!this.activatedPluginsId.includes(t.id)&&this.canStartPlugins&&(0,e.h)("div",{class:"buttons"},(0,e.h)("dyte-button",{kind:"icon",size:"lg",iconPack:this.iconPack,t:this.t,onClick:()=>{t.activate(),this.close()},"aria-label":`${this.t("Activate")} ${t.name}`},(0,e.h)("dyte-icon",{icon:this.iconPack.rocket,tabIndex:-1,"aria-hidden":!0,iconPack:this.iconPack,t:this.t}))),this.activatedPluginsId.includes(t.id)&&this.canClosePlugin&&(0,e.h)("div",{class:"buttons"},(0,e.h)("dyte-button",{kind:"icon",size:"lg",onClick:()=>{t.deactivate()},iconPack:this.iconPack,t:this.t,"aria-label":`${this.t("Close")} ${t.name}`},(0,e.h)("dyte-icon",{icon:this.iconPack.dismiss,tabIndex:-1,"aria-hidden":!0,iconPack:this.iconPack,t:this.t}))))))))}static get watchers(){return{meeting:["meetingChanged"]}}};c.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}.scrollbar{scrollbar-width:thin;scrollbar-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))\n    var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar{height:var(--dyte-space-1\\.5, 6px);width:var(--dyte-space-1\\.5, 6px);border-radius:9999px;background-color:var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar-thumb{border-radius:9999px;background-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))}:host{margin-top:var(--dyte-space-2, 8px);margin-bottom:var(--dyte-space-2, 8px);display:flex;height:100%;width:100%;flex-direction:column;font-size:14px;color:rgb(var(--dyte-colors-text-1000, 255 255 255))}h3{margin-left:var(--dyte-space-0, 0px);margin-right:var(--dyte-space-0, 0px);margin-top:var(--dyte-space-4, 16px);margin-bottom:var(--dyte-space-4, 16px);display:block;padding:var(--dyte-space-0, 0px);font-size:16px;font-weight:400;color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88));text-align:center}ul{overflow-y:auto;padding:var(--dyte-space-0, 0px);flex-grow:1;flex-basis:0}.metadata{display:flex;align-items:center}.metadata img{height:var(--dyte-space-8, 32px);width:var(--dyte-space-8, 32px);border-radius:var(--dyte-border-radius-sm, 4px)}.metadata .name{margin-left:var(--dyte-space-2, 8px);font-weight:500}.plugin{display:flex;align-items:center;justify-content:space-between;padding-left:var(--dyte-space-4, 16px);padding-right:var(--dyte-space-4, 16px);padding-top:var(--dyte-space-2, 8px);padding-bottom:var(--dyte-space-2, 8px)}.plugin .buttons{display:flex;align-items:center}dyte-button:hover{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-opacity:1;--tw-ring-color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-ring-opacity));--tw-ring-offset-width:2px;--tw-ring-offset-color:rgb(var(--dyte-colors-background-1000, 8 8 8))}"}}]);