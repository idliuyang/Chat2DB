"use strict";(self.webpackChunkchat_2_db=self.webpackChunkchat_2_db||[]).push([[4240,8270],{18270:(e,t,s)=>{s.r(t),s.d(t,{dyte_screen_share_toggle:()=>o});var i=s(67503),r=s(82324),a=s(69750),n=s(86386),h=s(86466);const c=()=>"undefined"!=typeof navigator&&void 0!==navigator.mediaDevices&&"getDisplayMedia"in navigator.mediaDevices,o=class{constructor(e){(0,i.r)(this,e),this.stateUpdate=(0,i.c)(this,"dyteStateUpdate",7),this.dyteAPIError=(0,i.c)(this,"dyteAPIError",7),this.selfScreenShareListener=({screenShareEnabled:e})=>{this.screenShareEnabled=e;const t=this.screenShareCount+(e?1:-1);this.screenShareCount=Math.max(t,0),this.getState(),this.meeting.__internals__.logger.info("dyteScreenShare::screenShareUpdate",{media:{screenshare:{enabled:this.screenShareEnabled,count:this.screenShareCount}}})},this.screenShareListener=({screenShareEnabled:e})=>{const t=this.screenShareCount+(e?1:-1);this.screenShareCount=Math.max(t,0),this.getState(),this.meeting.__internals__.logger.info("dyteScreenShare::screenShareUpdate",{media:{screenshare:{enabled:this.screenShareEnabled,count:this.screenShareCount}}})},this.participantLeftListener=({screenShareEnabled:e})=>{e&&(this.screenShareCount=Math.max(this.screenShareCount-1,0),this.getState(),this.meeting.__internals__.logger.info("dyteScreenShare::screenShareUpdate",{media:{screenshare:{enabled:this.screenShareEnabled,count:this.screenShareCount}}}))},this.selfJoinStateListener=()=>{this.updateCanProduce(this.meeting)},this.selfStageLeftListener=()=>{this.canScreenShare=!1},this.selfJoinStateRejectedListener=()=>{this.updateCanProduce(this.meeting)},this.mediaPermissionUpdateListener=({kind:e,message:t})=>{if("screenshare"===e&&(this.shareScreenPermission=t,this.getState(),"COULD_NOT_START"===t&&this.dyteAPIError.emit({trace:this.t("screenshare.permissions"),message:this.t("An error occured while starting screenshare.")}),this.hasPermissionError())){const e={enabled:!0,kind:"screenshare"};this.stateUpdate.emit({activePermissionsMessage:e}),h.s.activePermissionsMessage=e}},this.reachedMaxScreenShares=()=>this.maxScreenShareCount>0&&this.screenShareCount>=this.maxScreenShareCount,this.toggleScreenShare=async()=>{var e;if(this.screenShareState.disable)return;if(this.hasPermissionError()){const e={enabled:!0,kind:"screenshare"};return this.stateUpdate.emit({activePermissionsMessage:e}),h.s.activePermissionsMessage=e,!1}const t=null===(e=this.meeting)||void 0===e?void 0:e.self;this.screenShareEnabled?t.disableScreenShare():null==t||!this.canScreenShare||this.reachedMaxScreenShares()||this.hasPermissionError()||(this.screenShareState=Object.assign(Object.assign({},this.screenShareState),{disable:!0}),await t.enableScreenShare(),this.screenShareState=Object.assign(Object.assign({},this.screenShareState),{disable:!1}),this.stateUpdate.emit({activeMoreMenu:!1}),h.s.activeMoreMenu=!1)},this.states=void 0,this.variant="button",this.meeting=void 0,this.size=void 0,this.iconPack=r.d,this.t=(0,a.u)(),this.maxScreenShareCount=-1,this.screenShareCount=0,this.screenShareEnabled=!1,this.canScreenShare=!1,this.shareScreenPermission="NOT_REQUESTED",this.screenShareState={tooltipLabel:this.t("share_screen_start"),label:this.t("share_screen_start"),icon:this.iconPack.share_screen_start,classList:{},showWarning:!1,disable:!1}}connectedCallback(){c()?this.meetingChanged(this.meeting):n.l.error("[dyte-screenshare-toggle] Device does not support screensharing.")}disconnectedCallback(){var e,t,s,i,r,a,n,h,c,o,S;null===(e=this.meeting)||void 0===e||e.participants.joined.removeListener("screenShareUpdate",this.screenShareListener),null===(t=this.meeting)||void 0===t||t.participants.joined.removeListener("participantLeft",this.participantLeftListener),null===(s=this.meeting)||void 0===s||s.self.removeListener("screenShareUpdate",this.selfScreenShareListener),null===(i=this.meeting)||void 0===i||i.self.removeListener("mediaPermissionUpdate",this.mediaPermissionUpdateListener),null===(r=this.meeting)||void 0===r||r.self.removeListener("joinStageRequestAccepted",this.selfJoinStateListener),null===(a=this.meeting)||void 0===a||a.self.removeListener("joinStageRequestRejected",this.selfJoinStateRejectedListener),null===(n=this.meeting)||void 0===n||n.self.removeListener("stageJoined",this.selfJoinStateListener),null===(h=this.meeting)||void 0===h||h.self.removeListener("stageLeft",this.selfStageLeftListener),null===(c=this.meeting)||void 0===c||c.self.removeListener("removedFromStage",this.selfJoinStateListener),null===(S=null===(o=this.meeting)||void 0===o?void 0:o.stage)||void 0===S||S.removeListener("stageStatusUpdate",this.selfJoinStateListener)}meetingChanged(e){if(null!=e){const{self:t,stage:s}=e;this.updateCanProduce(e),this.maxScreenShareCount=t.config.maxScreenShareCount,this.screenShareEnabled=t.screenShareEnabled;let i=0;for(const r of e.participants.joined.toArray())r.screenShareEnabled&&i++;this.screenShareCount=i,this.getState(),e.__internals__.logger.info("dyteScreenShare::initialise",{media:{screenshare:{enabled:this.screenShareEnabled,count:this.screenShareCount,maxAllowedCount:this.maxScreenShareCount}}}),e.participants.joined.addListener("screenShareUpdate",this.screenShareListener),e.participants.joined.addListener("participantLeft",this.participantLeftListener),t.addListener("screenShareUpdate",this.selfScreenShareListener),t.addListener("mediaPermissionUpdate",this.mediaPermissionUpdateListener),t.addListener("joinStageRequestAccepted",this.selfJoinStateListener),t.addListener("joinStageRequestRejected",this.selfJoinStateRejectedListener),t.addListener("stageJoined",this.selfJoinStateListener),t.addListener("stageLeft",this.selfStageLeftListener),t.addListener("removedFromStage",this.selfJoinStateListener),null==s||s.addListener("stageStatusUpdate",this.selfJoinStateListener)}}updateCanProduce(e){const{self:t,meta:s,stage:i}=e,r="ALLOWED"===t.permissions.canProduceScreenshare,a="WEBINAR"===s.viewType,n="LIVESTREAM"===s.viewType;if(this.canScreenShare=!1,r&&!n)this.canScreenShare=!0;else if(a||n){r&&"OFF_STAGE"!==i.status&&"REQUESTED_TO_JOIN_STAGE"!==i.status&&(this.canScreenShare=!0);"CAN_REQUEST"===t.permissions.canProduceScreenshare&&(a&&("ON_STAGE"===t.webinarStageStatus||"ACCEPTED_TO_JOIN_STAGE"===t.webinarStageStatus)||n&&("ON_STAGE"===i.status||"ACCEPTED_TO_JOIN_STAGE"===i.status))&&(this.canScreenShare=!0)}}hasPermissionError(){return"SYSTEM_DENIED"===this.shareScreenPermission||"DENIED"===this.shareScreenPermission}getState(){let e="",t="",s="",i={};const r=this.hasPermissionError()&&!this.screenShareEnabled,a=this.reachedMaxScreenShares()&&!this.screenShareEnabled,n="COULD_NOT_START"===this.shareScreenPermission;this.screenShareEnabled&&!r?(t=this.t("share_screen_stop"),s=this.iconPack.share_screen_stop,i["red-icon"]=!0):(t=this.t("share_screen_start"),s=this.iconPack.share_screen_start),"SYSTEM_DENIED"===this.shareScreenPermission?(e=this.t("perm_sys_denied"),i["red-icon"]=!0):e=t,a&&(e=this.t("Maximum screen share limit reached")),n&&(e=this.t("An error occurred while screen sharing, please try again.")),this.screenShareState={tooltipLabel:e,label:t,icon:s,classList:i,disable:r||a,showWarning:r||a||n}}render(){return c()&&this.canScreenShare?(0,i.h)(i.H,{title:this.screenShareState.label},(0,i.h)("dyte-tooltip",{placement:"top",kind:"block",label:this.screenShareState.tooltipLabel,delay:600,part:"tooltip",iconPack:this.iconPack,t:this.t},(0,i.h)("dyte-controlbar-button",{part:"controlbar-button",size:this.size,iconPack:this.iconPack,t:this.t,variant:this.variant,label:this.screenShareState.label,icon:this.screenShareState.icon,class:this.screenShareState.classList,onClick:this.toggleScreenShare,disabled:this.screenShareState.disable,showWarning:this.screenShareState.showWarning}))):null}static get watchers(){return{meeting:["meetingChanged"]}}};o.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{display:block}"}}]);