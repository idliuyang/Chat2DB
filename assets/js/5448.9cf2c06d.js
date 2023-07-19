"use strict";(self.webpackChunkchat_2_db=self.webpackChunkchat_2_db||[]).push([[5448,605],{70605:(t,i,e)=>{e.r(i),e.d(i,{dyte_setup_screen:()=>p});var o=e(65733),a=e(22906),s=e(86020),r=e(85371),n=e(68753),d=e(16619),l=e(60804),c=e(46503);const p=class{constructor(t){(0,o.r)(this,t),this.stateUpdate=(0,o.c)(this,"dyteStateUpdate",7),this.join=async()=>{var t,i,e;""===(null===(t=this.displayName)||void 0===t?void 0:t.trim())||this.isJoining||(this.isJoining=!0,null===(i=this.meeting)||void 0===i||i.self.setName(this.displayName),l.g.setItem("dyte-display-name",this.displayName),await(null===(e=this.meeting)||void 0===e?void 0:e.joinRoom()))},this.meeting=void 0,this.states=c.s,this.size=void 0,this.config=s.d,this.iconPack=n.d,this.t=(0,d.u)(),this.displayName=void 0,this.isJoining=!1,this.canEditName=!0}connectedCallback(){this.meetingChanged(this.meeting)}componentDidLoad(){var t;null===(t=this.inputEl)||void 0===t||t.focus()}meetingChanged(t){var i,e;null!=t&&(this.canEditName=null===(i=t.self.permissions.canEditDisplayName)||void 0===i||i,this.displayName=(null===(e=t.self.name)||void 0===e?void 0:e.trim())||"",c.s.meeting="setup")}render(){var t,i,e,s;const n=""===(null===(t=this.displayName)||void 0===t?void 0:t.trim()),d={meeting:this.meeting,config:this.config,states:this.states||c.s,size:this.size,iconPack:this.iconPack,t:this.t};return(0,o.h)(o.H,null,(0,o.h)("div",{class:"container"},(0,o.h)(r.R,{element:"dyte-participant-tile",defaults:d,props:{participant:null===(i=this.meeting)||void 0===i?void 0:i.self,size:"md"},childProps:{participant:null===(e=this.meeting)||void 0===e?void 0:e.self,size:"md"},deepProps:!0}),(0,o.h)("div",{class:"metadata"},""===(null===(s=this.displayName)||void 0===s?void 0:s.trim())?(0,o.h)("div",{class:"name"},this.t("setup_screen.join_in_as")):(0,o.h)("div",{class:"label"},(0,o.h)("p",null,this.t("setup_screen.joining_as")),(0,o.h)("div",{class:"name"},(0,a.s)(this.displayName,20))),this.canEditName&&(0,o.h)("input",{placeholder:this.t("setup_screen.your_name"),value:this.displayName,autoFocus:!0,ref:t=>{this.inputEl=t},onInput:t=>{this.displayName=t.target.value},onKeyDown:t=>{"Enter"===t.key&&this.join()}}),(0,o.h)("dyte-button",{size:"lg",kind:"wide",onClick:this.join,disabled:n,iconPack:this.iconPack,t:this.t},this.isJoining?(0,o.h)("dyte-spinner",{iconPack:this.iconPack,t:this.t}):this.t("join")))))}static get watchers(){return{meeting:["meetingChanged"]}}};p.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{box-sizing:border-box;padding:var(--dyte-space-4, 16px);height:100%;min-height:100%;width:100%;display:flex;place-items:center;justify-content:center;--dyte-controlbar-button-background-color:rgb(var(--dyte-colors-background-700, 44 44 44))}.container{width:100%;max-width:1080px;display:flex;align-items:center;justify-content:space-evenly}.metadata{width:100%;max-width:var(--dyte-space-80, 320px)}.label{display:flex;flex-direction:column;align-items:center}.label p{margin-top:var(--dyte-space-0, 0px);margin-bottom:var(--dyte-space-2, 8px);font-size:14px}.name{margin:var(--dyte-space-0, 0px);margin-bottom:var(--dyte-space-6, 24px);text-align:center;font-size:28px;font-weight:500;letter-spacing:-0.025em;overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1}input{margin-bottom:var(--dyte-space-6, 24px);display:block;height:var(--dyte-space-10, 40px);width:100%;max-width:var(--dyte-space-80, 320px);border-radius:var(--dyte-border-radius-sm, 4px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-1000, 8 8 8) / var(--tw-bg-opacity));padding-left:var(--dyte-space-3, 12px);padding-right:var(--dyte-space-3, 12px);color:rgb(var(--dyte-colors-text-1000, 255 255 255));box-sizing:border-box;font-size:16px;outline:2px solid transparent;outline-offset:2px;transition-property:color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}input::-moz-placeholder{color:rgb(var(--dyte-colors-text-600, 255 255 255 / 0.52))}input::placeholder{color:rgb(var(--dyte-colors-text-600, 255 255 255 / 0.52))}input{border:var(--dyte-border-width-sm, 1px) solid rgb(var(--dyte-colors-background-600, 60 60 60))}input:focus{--tw-border-opacity:1;border-color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-border-opacity))}dyte-spinner{color:rgb(var(--dyte-colors-text-1000, 255 255 255));--icon-size:var(--dyte-space-8, 32px)}:host([size='sm']) .container,:host([size='md']) .container{height:100%;flex-direction:column;justify-content:space-evenly}dyte-camera-toggle{margin-left:var(--dyte-space-1\\.5, 6px)}dyte-participant-tile{height:auto;width:100%;max-width:var(--dyte-space-96, 384px)}"}}]);