"use strict";(self.webpackChunkchat_2_db=self.webpackChunkchat_2_db||[]).push([[5838,4327],{84327:(t,e,i)=>{i.r(e),i.d(e,{dyte_plugins_toggle:()=>c});var s=i(67503),n=i(35461),a=i(11810),l=i(86466),r=i(89140);i(60614);const c=class{constructor(t){(0,s.r)(this,t),this.stateUpdate=(0,s.c)(this,"dyteStateUpdate",7),this.updateCanView=()=>{this.canViewPlugins=(0,r.b)(this.meeting)},this.variant="button",this.meeting=void 0,this.states=void 0,this.size=void 0,this.iconPack=n.d,this.t=(0,a.u)(),this.pluginsActive=!1,this.canViewPlugins=!1}disconnectedCallback(){var t,e;null===(e=null===(t=this.meeting)||void 0===t?void 0:t.stage)||void 0===e||e.removeListener("stageStatusUpdate",this.updateCanView)}connectedCallback(){this.statesChanged(this.states),this.meetingChanged(this.meeting),(0,l.o)("sidebar",(()=>this.statesChanged()))}meetingChanged(t){var e;null!=t&&(this.canViewPlugins=(0,r.b)(t),null===(e=null==t?void 0:t.stage)||void 0===e||e.on("stageStatusUpdate",this.updateCanView))}statesChanged(t){const e=t||l.s;null!=e&&(this.pluginsActive=!0===e.activeSidebar&&"plugins"===e.sidebar)}togglePlugins(){const t=this.states||l.s;this.pluginsActive=!((null==t?void 0:t.activeSidebar)&&"plugins"===(null==t?void 0:t.sidebar)),this.stateUpdate.emit({activeSidebar:this.pluginsActive,sidebar:this.pluginsActive?"plugins":"none",activeMoreMenu:!1}),l.s.activeSidebar=this.pluginsActive,l.s.sidebar=this.pluginsActive?"plugins":"none",l.s.activeMoreMenu=!1}render(){if(!this.canViewPlugins)return;const t=this.t("plugins");return(0,s.h)(s.H,{title:t},(0,s.h)("dyte-controlbar-button",{part:"controlbar-button",size:this.size,iconPack:this.iconPack,t:this.t,class:{active:this.pluginsActive},onClick:()=>this.togglePlugins(),icon:this.iconPack.rocket,label:t,variant:this.variant}))}static get watchers(){return{meeting:["meetingChanged"],states:["statesChanged"]}}};c.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);display:block}"},89140:(t,e,i)=>{i.d(e,{a:()=>l,b:()=>r,c:()=>n,d:()=>a});var s=i(60614);const n=t=>{if(t&&!t.chat)return!1;const e=null==t?void 0:t.self.config;if(e&&!e.controlBar.elements.chat)return!1;const{chatPublic:i,chatPrivate:s}=t.self.permissions;return i.canSend||i.text||i.files||s.canSend||s.canReceive||s.files||s.text},a=t=>{if(t&&!t.polls)return!1;const e=null==t?void 0:t.self.config;if(e&&!e.controlBar.elements.polls)return!1;const{polls:i}=t.self.permissions;return i.canCreate||i.canView||i.canVote},l=t=>{var e,i;if((0,s.s)(t)&&!(null===(e=t.self.permissions)||void 0===e?void 0:e.acceptPresentRequests))return!1;if(t&&!t.participants)return!1;if("LIVESTREAM"===t.meta.viewType)return t.self.permissions.acceptPresentRequests||"ON_STAGE"===(null===(i=null==t?void 0:t.stage)||void 0===i?void 0:i.status);const n=null==t?void 0:t.self.config;return!(n&&!n.controlBar.elements.participants)},r=t=>{if((0,s.i)(t))return!1;if(t&&!t.plugins)return!1;if("LIVESTREAM"===t.meta.viewType)return"ON_STAGE"===t.stage.status;const e=null==t?void 0:t.self.config;if(e&&!e.controlBar.elements.plugins)return!1;const{plugins:i}=t.self.permissions;return i.canClose||i.canStart}}}]);