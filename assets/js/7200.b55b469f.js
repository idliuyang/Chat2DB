"use strict";(self.webpackChunkchat_2_db=self.webpackChunkchat_2_db||[]).push([[7200,4592],{47200:(e,t,a)=>{a.r(t),a.d(t,{dyte_ended_screen:()=>c});var s=a(67503),o=a(69750),n=a(82324),i=a(86466),r=a(61305);a(60804);const c=class{constructor(e){(0,s.r)(this,e),this.config=r.d,this.size=void 0,this.icon=n.d,this.states=void 0,this.t=(0,o.u)(),this.iconPack=n.d,this.message="",this.meeting=void 0}connectedCallback(){this.statesChanged(this.states),(0,i.o)("roomLeftState",(()=>this.statesChanged()))}getBreakoutRoomsMessage(e){var t;let a;return"connected-meeting"===(null==e?void 0:e.roomLeftState)&&(a=(null===(t=i.s.activeBreakoutRoomsManager)||void 0===t?void 0:t.destinationMeetingId)===this.meeting.connectedMeetings.parentMeeting.id?"breakout_rooms.move_reason.switch_main_room":"breakout_rooms.move_reason.switch_room"),a}statesChanged(e){const t=e||i.s;if(null!=t)switch(null==t?void 0:t.roomLeftState){case"left":this.message="You left the meeting";break;case"kicked":this.message="You were removed from the meeting";break;case"disconnected":this.message="The call ended because the connection was lost.";break;case"rejected":this.message="Your request to join the meeting was denied.";break;case"connected-meeting":this.message=this.getBreakoutRoomsMessage(t);break;default:this.message="The meeting ended"}}renderBreakoutRoomScreen(){return(0,s.h)(s.H,null,(0,s.h)("div",{class:"ctr",part:"container"},(0,s.h)("dyte-icon",{icon:this.iconPack.breakout_rooms}),(0,s.h)("p",{part:"message",class:"breakout"},this.t(this.message))))}render(){const e=this.states||i.s;return"connected-meeting"===e.roomLeftState?this.renderBreakoutRoomScreen():(0,s.h)(s.H,null,(0,s.h)("div",{class:"ctr",part:"container"},(0,s.h)("dyte-logo",{meeting:this.meeting,config:this.config,part:"logo",t:this.t}),(0,s.h)("p",{part:"message"},this.t(this.message)),"disconnected"===(null==e?void 0:e.roomLeftState)&&(0,s.h)("span",{part:"description"},this.t("Please check your internet connection and try again."))))}static get watchers(){return{states:["statesChanged"]}}};c.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{height:100%;width:100%;-webkit-user-select:none;-moz-user-select:none;user-select:none;display:flex;flex-direction:column;align-items:center;justify-content:center}.ctr{display:flex;flex-direction:column;align-items:center}dyte-logo{margin-bottom:var(--dyte-space-8, 32px);height:var(--dyte-space-12, 48px)}.rejoin-button{margin-top:var(--dyte-space-4, 16px);margin-bottom:var(--dyte-space-4, 16px);padding-top:var(--dyte-space-6, 24px);padding-bottom:var(--dyte-space-6, 24px);padding-left:var(--dyte-space-16, 64px);padding-right:var(--dyte-space-16, 64px)}.rejoin-icon{margin-right:var(--dyte-space-2, 8px)}p{font-size:16px;border-radius:var(--dyte-border-radius-lg, 12px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity));padding-left:var(--dyte-space-8, 32px);padding-right:var(--dyte-space-8, 32px);padding-top:var(--dyte-space-4, 16px);padding-bottom:var(--dyte-space-4, 16px);color:rgb(var(--dyte-colors-text-1000, 255 255 255))}p.breakout{font-size:20px;display:flex;flex-direction:column;align-items:center}p.breakout span{margin-top:var(--dyte-space-1, 4px);margin-bottom:var(--dyte-space-0, 0px);color:rgb(var(--dyte-colors-text-600, 255 255 255 / 0.52))}span{margin-top:var(--dyte-space-4, 16px);margin-bottom:var(--dyte-space-4, 16px);font-size:14px}"}}]);