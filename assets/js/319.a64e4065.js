"use strict";(self.webpackChunkchat_2_db=self.webpackChunkchat_2_db||[]).push([[319,8915],{78915:(t,e,i)=>{i.r(e),i.d(e,{dyte_participant_count:()=>c});var n=i(65733),s=i(68753),a=i(16619),r=i(24555);const c=class{constructor(t){(0,n.r)(this,t),this.disconnectMeeting=t=>{null!=t&&null!=this.countListener&&(t.participants.joined.removeListener("participantJoined",this.countListener),t.participants.joined.removeListener("participantLeft",this.countListener),(null==t?void 0:t.stage)&&this.stageUpdateListener&&t.stage.removeListener("stageStatusUpdate",this.stageUpdateListener),t.self.removeListener("roomJoined",this.countListener))},this.meeting=void 0,this.iconPack=s.d,this.t=(0,a.u)(),this.participantCount=0,this.isViewer=!1}connectedCallback(){this.meetingChanged(this.meeting)}disconnectedCallback(){this.disconnectMeeting(this.meeting)}meetingChanged(t,e){this.disconnectMeeting(e),null!=t&&(this.countListener=()=>{this.participantCount=t.participants.joined.size+(t.self.roomJoined?1:0)},this.countListener(),this.isViewer=(0,r.a)(this.meeting),t.participants.joined.addListener("participantJoined",this.countListener),t.participants.joined.addListener("participantLeft",this.countListener),(null==t?void 0:t.stage)&&(this.stageUpdateListener=()=>{this.isViewer=(0,r.a)(this.meeting)},null==t||t.stage.addListener("stageStatusUpdate",this.stageUpdateListener)),t.self.addListener("roomJoined",this.countListener))}render(){return this.isViewer?null:(0,n.h)(n.H,{tabIndex:0,role:"log","aria-label":`${this.participantCount} ${this.t("participants")}`},(0,n.h)("dyte-icon",{icon:this.iconPack.people,tabIndex:-1,"aria-hidden":!0,part:"icon",iconPack:this.iconPack,t:this.t}),this.participantCount)}static get watchers(){return{meeting:["meetingChanged"]}}};c.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{margin-left:var(--dyte-space-2, 8px);margin-right:var(--dyte-space-2, 8px);display:inline-flex;height:var(--dyte-space-10, 40px);-webkit-user-select:none;-moz-user-select:none;user-select:none;align-items:center}:host([size='sm']){margin-left:var(--dyte-space-1, 4px);margin-right:var(--dyte-space-1, 4px);font-size:12px}dyte-icon{margin-right:var(--dyte-space-1, 4px);height:var(--dyte-space-5, 20px);width:var(--dyte-space-5, 20px)}:host([size='sm']) dyte-icon{height:var(--dyte-space-4, 16px);width:var(--dyte-space-4, 16px)}"}}]);