"use strict";(self.webpackChunkchat_2_db=self.webpackChunkchat_2_db||[]).push([[5703,573],{70573:(t,e,s)=>{s.r(e),s.d(e,{dyte_chat_toggle:()=>h});var a=s(67503),i=s(82324),n=s(69750),r=s(86466),o=s(77347),c=s(43114);s(50528);const h=class{constructor(t){(0,a.r)(this,t),this.stateUpdate=(0,a.c)(this,"dyteStateUpdate",7),this.onChatUpdate=({action:t,message:e})=>{var s;this.chatActive||"add"===t&&e.userId!==(null===(s=this.meeting)||void 0===s?void 0:s.self.userId)&&(this.hasNewMessages=!0,this.unreadMessageCount+=1)},this.toggleChat=()=>{const t=this.states||r.s;this.chatActive=!((null==t?void 0:t.activeSidebar)&&"chat"===(null==t?void 0:t.sidebar)),this.chatActive&&(this.unreadMessageCount=0,this.hasNewMessages=!1),r.s.activeSidebar=this.chatActive,r.s.activeMoreMenu=!1,r.s.sidebar=this.chatActive?"chat":"none",this.stateUpdate.emit({activeSidebar:this.chatActive,sidebar:this.chatActive?"chat":"none",activeMoreMenu:!1,activeAI:!1})},this.updateCanView=()=>{this.canViewChat=(0,c.c)(this.meeting)},this.unreadMessageCount=0,this.variant="button",this.meeting=void 0,this.states=void 0,this.size=void 0,this.iconPack=i.d,this.t=(0,n.u)(),this.chatActive=!1,this.canViewChat=!1,this.hasNewMessages=!1}connectedCallback(){this.meetingChanged(this.meeting),this.statesChanged(this.states),(0,r.o)("sidebar",(()=>this.statesChanged()))}disconnectedCallback(){var t,e,s,a;null===(e=null===(t=this.meeting)||void 0===t?void 0:t.chat)||void 0===e||e.removeListener("chatUpdate",this.onChatUpdate),null===(a=null===(s=this.meeting)||void 0===s?void 0:s.stage)||void 0===a||a.removeListener("stageStatusUpdate",this.updateCanView)}meetingChanged(t){var e,s,a,i;null!=t&&((0,o.u)(t)&&(null===(e=t.chat)||void 0===e||e.getMessages((new Date).getTime(),1,!0).then((t=>{var e;(null===(e=null==t?void 0:t.messages)||void 0===e?void 0:e.length)&&(this.hasNewMessages=!0)}))),this.unreadMessageCount=(null===(s=t.chat)||void 0===s?void 0:s.messages.length)||0,null===(a=t.chat)||void 0===a||a.addListener("chatUpdate",this.onChatUpdate),this.canViewChat=(0,c.c)(t),null===(i=null==t?void 0:t.stage)||void 0===i||i.on("stageStatusUpdate",this.updateCanView))}statesChanged(t){const e=t||r.s;null!=e&&(this.chatActive=!0===e.activeSidebar&&"chat"===e.sidebar)}render(){if(this.canViewChat)return(0,a.h)(a.H,{title:this.t("chat")},(0,o.u)(this.meeting)?this.hasNewMessages&&(0,a.h)("div",{class:"unread-count-dot",part:"unread-count-dot"}):0!==this.unreadMessageCount&&!this.chatActive&&(0,a.h)("div",{class:"unread-count",part:"unread-count"},(0,a.h)("span",null,this.unreadMessageCount<=100?this.unreadMessageCount:"99+")),(0,a.h)("dyte-controlbar-button",{part:"controlbar-button",size:this.size,iconPack:this.iconPack,t:this.t,class:{active:this.chatActive},onClick:this.toggleChat,icon:this.iconPack.chat,label:this.t("chat"),variant:this.variant}))}static get watchers(){return{meeting:["meetingChanged"],states:["statesChanged"]}}};h.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{position:relative;display:block}.unread-count{position:absolute;right:var(--dyte-space-3, 12px);box-sizing:border-box;padding:var(--dyte-space-0\\.5, 2px);-webkit-user-select:none;-moz-user-select:none;user-select:none;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-bg-opacity));font-size:12px;display:flex;height:var(--dyte-space-5, 20px);min-width:var(--dyte-space-5, 20px);align-items:center;justify-content:center;border-radius:9999px;z-index:1}.unread-count-dot{position:absolute;right:var(--dyte-space-3, 12px);z-index:10;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-bg-opacity));border-radius:50%;display:flex;height:var(--dyte-space-4, 16px);width:var(--dyte-space-4, 16px);align-items:center;justify-content:center}:host([variant='horizontal']){display:flex;flex-direction:row-reverse;align-items:center}:host([variant='horizontal']) .unread-count{right:var(--dyte-space-4, 16px);top:auto}"},77347:(t,e,s)=>{s.d(e,{F:()=>i,i:()=>n,u:()=>r});var a=s(50528);const i={PLAY_PARTICIPANT_TILE_VIDEO_ON_PAUSE:"play_participant_tile_video_on_pause",DISABLE_EMOJI_PICKER:"disable_emoji_picker",FEAT_PAGINATED_CHAT:"feat_paginated_chat",LOG_PLAYING_FAILURES:"log_playing_failures"},n=t=>t.connectedMeetings.supportsConnectedMeetings,r=t=>{var e;return(0,a.s)(t)||(null===(e=null==t?void 0:t.__internals__)||void 0===e?void 0:e.features.hasFeature("feat_paginated_chat"))}},43114:(t,e,s)=>{s.d(e,{a:()=>r,b:()=>o,c:()=>i,d:()=>n});var a=s(50528);const i=t=>{if(t&&!t.chat)return!1;const e=null==t?void 0:t.self.config;if(e&&!e.controlBar.elements.chat)return!1;const{chatPublic:s,chatPrivate:a}=t.self.permissions;return s.canSend||s.text||s.files||a.canSend||a.canReceive||a.files||a.text},n=t=>{if(t&&!t.polls)return!1;const e=null==t?void 0:t.self.config;if(e&&!e.controlBar.elements.polls)return!1;const{polls:s}=t.self.permissions;return s.canCreate||s.canView||s.canVote},r=t=>{var e,s;if((0,a.s)(t)&&!(null===(e=t.self.permissions)||void 0===e?void 0:e.acceptPresentRequests))return!1;if(t&&!t.participants)return!1;if("LIVESTREAM"===t.meta.viewType)return t.self.permissions.acceptPresentRequests||"ON_STAGE"===(null===(s=null==t?void 0:t.stage)||void 0===s?void 0:s.status);const i=null==t?void 0:t.self.config;return!(i&&!i.controlBar.elements.participants)},o=t=>{if((0,a.i)(t))return!1;if(t&&!t.plugins)return!1;if("LIVESTREAM"===t.meta.viewType)return"ON_STAGE"===t.stage.status;const e=null==t?void 0:t.self.config;if(e&&!e.controlBar.elements.plugins)return!1;const{plugins:s}=t.self.permissions;return s.canClose||s.canStart}}}]);