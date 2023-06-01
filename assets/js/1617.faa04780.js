"use strict";(self.webpackChunkchat_2_db=self.webpackChunkchat_2_db||[]).push([[1617],{72729:(t,e,a)=>{a.d(e,{d:()=>s,e:()=>r,f:()=>i});const s=(t,e)=>{const a=e.getTime()-t.getTime();return Math.round(Math.abs(a/1e3/60))},r=(t,e)=>{const a=s(t,e);if(a<2)return"just now";if(a<60)return`${a}m ago`;const r=Math.round(a/60);if(a<90)return`about ${r}h ago`;if(r<24)return`${r}h ago`;const i=Math.round(r/24);if(i<7)return`${i}d ago`;return`${Math.round(i/7)}w ago`},i=t=>t.toDateString()+" "+t.toLocaleTimeString()},71617:(t,e,a)=>{a.r(e),a.d(e,{dyte_chat_composer_ui:()=>h,dyte_chat_messages_ui:()=>p,dyte_chat_messages_ui_paginated:()=>g,dyte_chat_selector_ui:()=>y});var s=a(67503),r=a(82324),i=a(69750),o=a(62270),c=a(60804),n=a(85114),d=a(72729),l=a(82321);const h=class{constructor(t){(0,s.r)(this,t),this.onNewMessage=(0,s.c)(this,"dyteNewMessage",7),this.handleKeyDown=t=>{if("Enter"===t.key&&t.shiftKey){this.$textArea.clientHeight<200&&(this.$textArea.style.height=this.$textArea.clientHeight+20+"px")}else"Enter"===t.key?(t.preventDefault(),this.handleSendMessage()):"Backspace"===t.key&&(this.$textArea.value.endsWith("\n")?this.$textArea.style.height=this.$textArea.clientHeight-20+"px":""===this.$textArea.value&&(this.$textArea.style.height="auto"))},this.onPaste=t=>{const e=t.clipboardData||t.originalEvent.clipboardData;(0,o.h)(e.items,this.sendFile)},this.sendFile=(t,e)=>{this.canSendFiles&&("image"===t?this.onNewMessage.emit({type:"image",file:e}):this.onNewMessage.emit({type:"file",file:e}))},this.initializeTextField=t=>{this.$textArea=t;const e=c.g.getItem("dyte-text-message")||"";this.$textArea.value=e},this.canSendTextMessage=!1,this.canSendFiles=!1,this.size=void 0,this.iconPack=r.d,this.t=(0,i.u)(),this.disableEmojiPicker=!1,this.emojiPickerActive=!1}handleSendMessage(){if(!this.canSendTextMessage)return;const t=this.$textArea.value.trim();t.length>0&&(this.onNewMessage.emit({type:"text",message:t}),this.$textArea.value="",this.$textArea.style.height="auto",c.g.setItem("dyte-text-message",""))}uploadFile(t){const e=document.createElement("input");e.type="file","image"===t&&(e.accept="image/*"),e.onchange=e=>{const{validity:a,files:[s]}=e.target;a.valid&&this.sendFile(t,s)},e.click()}render(){const t={iconPack:this.iconPack,t:this.t,size:this.size};return(0,s.h)(s.H,null,this.canSendTextMessage&&this.emojiPickerActive&&(0,s.h)("dyte-emoji-picker",{part:"emoji-picker",onDyteEmojiClicked:t=>{this.$textArea.value+=t.detail,this.$textArea.focus()},t:this.t}),(0,s.h)("slot",{name:"chat-addon"}),(0,s.h)("div",{class:"chat-input",part:"chat-input"},this.canSendTextMessage&&(0,s.h)("textarea",{class:"scrollbar",part:"textarea",placeholder:"Message..",ref:this.initializeTextField,autoFocus:!0,onPaste:this.onPaste,onKeyDown:this.handleKeyDown,onInput:t=>{c.g.setItem("dyte-text-message",t.target.value)}}),(0,s.h)("div",{class:"chat-buttons",part:"chat-buttons"},(0,s.h)("div",{class:"left",part:"chat-buttons-left"},this.canSendFiles&&[(0,s.h)("dyte-tooltip",Object.assign({label:this.t("Send a file")},t),(0,s.h)("dyte-button",{variant:"ghost",kind:"icon",onClick:()=>this.uploadFile("file"),title:this.t("Send a file"),iconPack:this.iconPack,t:this.t},(0,s.h)("dyte-icon",{icon:this.iconPack.attach}))),(0,s.h)("dyte-tooltip",Object.assign({label:this.t("Send an image")},t),(0,s.h)("dyte-button",{variant:"ghost",kind:"icon",onClick:()=>this.uploadFile("image"),title:this.t("Send an image"),iconPack:this.iconPack,t:this.t},(0,s.h)("dyte-icon",{icon:this.iconPack.image})))],this.canSendTextMessage&&!this.disableEmojiPicker&&(0,s.h)("dyte-tooltip",Object.assign({label:this.t("Send Emoji")},t),(0,s.h)("dyte-button",{variant:"ghost",kind:"icon",class:{active:this.emojiPickerActive},title:this.t("Send Emoji"),iconPack:this.iconPack,t:this.t,onClick:()=>{this.emojiPickerActive=!this.emojiPickerActive}},(0,s.h)("dyte-icon",{icon:this.iconPack.emoji_multiple})))),this.canSendTextMessage&&(0,s.h)("div",{class:"right",part:"chat-buttons-right"},(0,s.h)("dyte-tooltip",Object.assign({variant:"primary",label:this.t("Send message"),delay:2e3},t),(0,s.h)("dyte-button",{kind:"icon",onClick:()=>this.handleSendMessage(),title:this.t("Send message"),iconPack:this.iconPack,t:this.t},(0,s.h)("dyte-icon",{icon:this.iconPack.send})))))))}};h.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{display:flex;flex-direction:column}.chat-input{z-index:10;box-sizing:border-box;display:flex;flex-direction:column;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity));border-top:var(--dyte-border-width-sm, 1px) solid rgb(var(--dyte-colors-background-600, 60 60 60))}textarea{box-sizing:border-box;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity));padding:var(--dyte-space-3, 12px);color:rgb(var(--dyte-colors-text-1000, 255 255 255))}textarea::-moz-placeholder{color:rgb(var(--dyte-colors-text-800, 255 255 255 / 0.76))}textarea::placeholder{color:rgb(var(--dyte-colors-text-800, 255 255 255 / 0.76))}textarea{font-family:var(--dyte-font-family, sans-serif);outline:2px solid transparent;outline-offset:2px;resize:none;overflow-y:auto;border-width:var(--dyte-border-width-none, 0);border-style:none;min-height:80px;font-size:14px}.chat-buttons{display:flex;align-items:center;justify-content:space-between;padding-left:var(--dyte-space-3, 12px);padding-right:var(--dyte-space-3, 12px);padding-top:var(--dyte-space-2, 8px);padding-bottom:var(--dyte-space-2, 8px)}.chat-buttons .left dyte-button{margin-right:var(--dyte-space-1, 4px)}.chat-buttons .left dyte-button dyte-icon{height:var(--dyte-space-5, 20px);width:var(--dyte-space-5, 20px)}.chat-buttons>div{display:flex;align-items:center}dyte-emoji-picker{z-index:0;border-top:var(--dyte-border-width-sm, 1px) solid rgb(var(--dyte-colors-background-600, 60 60 60));-webkit-animation:0.3s slide-up ease;animation:0.3s slide-up ease}@-webkit-keyframes slide-up{from{transform:translateY(100%)}to{transform:translateY(0%)}}@keyframes slide-up{from{transform:translateY(100%)}to{transform:translateY(0%)}}";const p=class{constructor(t){(0,s.r)(this,t),this.observingEl=[],this.onScroll=t=>{const e=t.target;(0,s.w)((()=>{const{scrollTop:t,clientHeight:a,scrollHeight:s}=e;t+a+10>=s?(this.autoScrollEnabled=!0,this.showLatestMessageButton=!1):this.autoScrollEnabled=!1}))},this.scrollToBottom=()=>{(0,l.s)(this.$chat)},this.observeMessage=t=>{t&&this.observingEl.push(t);try{this.intersectionObserver.observe(t)}catch(e){}},this.selectedGroup=void 0,this.messages=[],this.selfUserId=void 0,this.size=void 0,this.iconPack=r.d,this.t=(0,i.u)(),this.now=new Date,this.showLatestMessageButton=!1}connectedCallback(){var t;this.lastReadTimestamp=null!==(t=n.c.everyone)&&void 0!==t?t:new Date("0001-01-01T00:00:00Z"),this.intersectionObserver=new IntersectionObserver((t=>{document.hasFocus()&&(0,s.w)((()=>{for(const e of t)if(e.isIntersecting){parseInt(e.target.getAttribute("data-timestamp"))>this.lastReadTimestamp.getTime()&&(n.c[this.selectedGroup]=new Date)}}))}));const e=()=>{this.now=new Date,this.timeout=setTimeout((()=>{null!=this.request&&(this.request=requestAnimationFrame(e))}),6e4)};this.request=requestAnimationFrame(e),this.chatChanged(this.messages)}componentDidLoad(){this.$chat.addEventListener("scroll",this.onScroll)}componentDidRender(){this.autoScrollEnabled?(0,l.s)(this.$chat):null==this.autoScrollEnabled&&(0,l.s)(this.$chat,!1)}chatChanged(t){if(null!=this.$chat&&!this.autoScrollEnabled&&this.$chat.clientHeight!==this.$chat.scrollHeight)for(let e=t.length-1;e>=0;e--)if(t[e].message.time>this.lastReadTimestamp&&t[e].message.userId!==this.selfUserId){this.showLatestMessageButton=!0;break}}selectedBucketChanged(){this.autoScrollEnabled=void 0,this.observingEl.forEach((t=>{this.intersectionObserver.unobserve(t)})),this.observingEl=[]}disconnectedCallback(){this.$chat.removeEventListener("scroll",this.onScroll),this.intersectionObserver.disconnect(),clearTimeout(this.timeout),cancelAnimationFrame(this.request)}render(){var t;let e=null,a=!1;return(0,s.h)(s.H,null,(0,s.h)("div",{class:"chat-container scrollbar",ref:t=>this.$chat=t,part:"container"},(0,s.h)("div",{class:"spacer",part:"spacer"}),(0,s.h)("div",{class:"chat",part:"chat"},null===(t=this.messages)||void 0===t?void 0:t.map((t=>{if("chat"===t.type){const{message:r}=t,i=!(r.userId===this.selfUserId)&&!this.autoScrollEnabled&&!a&&r.time>this.lastReadTimestamp;i&&(a=i);const o=!i&&r.userId===(null==e?void 0:e.userId)&&(0,d.d)(r.time,null==e?void 0:e.time)<2;switch(e=r,r.type){case"text":return(0,s.h)("div",{"is-continued":o,key:t.message.id},i&&(0,s.h)("div",{class:"new-chat-marker",part:"new-chat-marker"},this.t("chat.new")),(0,s.h)("dyte-text-message",{message:r,now:this.now,isContinued:o,"data-timestamp":r.time.getTime(),ref:this.observeMessage,iconPack:this.iconPack,t:this.t}));case"image":return(0,s.h)("div",{"is-continued":o,key:t.message.id},i&&(0,s.h)("div",{class:"new-chat-marker",part:"new-chat-marker"},this.t("chat.new")),(0,s.h)("dyte-image-message",{message:r,now:this.now,isContinued:o,iconPack:this.iconPack,"data-timestamp":r.time.getTime(),ref:this.observeMessage,t:this.t}));case"file":return(0,s.h)("div",{"is-continued":o,key:t.message.id},i&&(0,s.h)("div",{class:"new-chat-marker",part:"new-chat-marker"},this.t("chat.new")),(0,s.h)("dyte-file-message",{message:r,now:this.now,isContinued:o,iconPack:this.iconPack,t:this.t,"data-timestamp":r.time.getTime(),ref:this.observeMessage}))}}return null})))),(0,s.h)("div",{class:"show-new-messages-ctr"},(0,s.h)("dyte-button",{class:{"show-new-messages":!0,active:this.showLatestMessageButton},kind:"icon",part:"show-new-messages",onClick:this.scrollToBottom,iconPack:this.iconPack,t:this.t},(0,s.h)("dyte-icon",{icon:this.iconPack.chevron_down,iconPack:this.iconPack,t:this.t}))))}static get watchers(){return{messages:["chatChanged"],selectedGroup:["selectedBucketChanged"]}}};p.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}.scrollbar{scrollbar-width:thin;scrollbar-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))\n    var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar{height:var(--dyte-space-1\\.5, 6px);width:var(--dyte-space-1\\.5, 6px);border-radius:9999px;background-color:var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar-thumb{border-radius:9999px;background-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))}:host{position:relative;display:flex;flex-direction:column}.chat-container{box-sizing:border-box;display:flex;flex-direction:column;padding-top:var(--dyte-space-4, 16px);padding-bottom:var(--dyte-space-4, 16px);flex:1 0 0px;overflow-y:scroll}.chat-container .spacer{flex:1 1 auto}.chat-container .chat{flex:0 0 auto}.file-picker{display:none}.chat *:first-child{margin-top:var(--dyte-space-0, 0px)}.chat .head{display:flex;align-items:center}.chat .head .name{margin-right:var(--dyte-space-4, 16px);font-size:12px;font-weight:700}.chat .head .time{font-size:12px;color:rgb(var(--dyte-colors-text-800, 255 255 255 / 0.76))}.chat .body{margin-top:var(--dyte-space-2, 8px);margin-bottom:var(--dyte-space-2, 8px);overflow-wrap:break-word;font-size:14px;line-height:1.375}.chat .body .emoji{font-size:24px}p{margin-top:var(--dyte-space-0, 0px);margin-bottom:var(--dyte-space-3, 12px)}dyte-text-message,dyte-image-message,dyte-file-message{margin-top:var(--dyte-space-4, 16px);display:block;padding-left:var(--dyte-space-3, 12px);padding-right:var(--dyte-space-3, 12px);color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88));box-sizing:border-box}*[is-continued]{margin-top:var(--dyte-space-3, 12px)}dyte-text-message[is-continued]{margin-top:var(--dyte-space-2, 8px)}.chat .image{position:relative;height:var(--dyte-space-40, 160px);max-width:var(--dyte-space-64, 256px);cursor:pointer}.chat .image img{display:none;height:100%;width:100%;border-radius:var(--dyte-border-radius-sm, 4px);-o-object-fit:cover;object-fit:cover}.chat .image .image-spinner{display:flex;height:100%;width:100%;flex-direction:column;align-items:center;justify-content:center;border-radius:var(--dyte-border-radius-sm, 4px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity))}.chat .image .image-spinner dyte-spinner{--tw-text-opacity:1;color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-text-opacity))}.chat .image .image-errored{display:flex;height:100%;width:100%;flex-direction:column;align-items:center;justify-content:center;border-radius:var(--dyte-border-radius-sm, 4px);background-color:rgba(var(--dyte-colors-danger, 255 45 45) / 0.1);--tw-text-opacity:1;color:rgba(var(--dyte-colors-danger, 255 45 45) / var(--tw-text-opacity))}.chat .image .actions{display:none;height:var(--dyte-space-8, 32px);align-items:center;position:absolute;top:var(--dyte-space-2, 8px);right:var(--dyte-space-2, 8px);border-radius:var(--dyte-border-radius-sm, 4px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-900, 26 26 26) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-1000, 255 255 255));overflow:hidden;--tw-shadow:0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.chat .image .actions .action{height:var(--dyte-space-8, 32px);width:var(--dyte-space-8, 32px);border-radius:var(--dyte-border-radius-none, 0);border-width:var(--dyte-border-width-none, 0);border-style:none;background-color:transparent;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.chat .image .actions .action:hover{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity))}.image.loaded img{display:block}.image.loaded .image-spinner{display:none}.image:hover .actions,.image:focus .actions{display:flex}.chat .file{display:flex;align-items:center;gap:var(--dyte-space-1, 4px);padding-left:var(--dyte-space-2, 8px);padding-right:var(--dyte-space-2, 8px);padding-top:var(--dyte-space-1\\.5, 6px);padding-bottom:var(--dyte-space-1\\.5, 6px);border-radius:var(--dyte-border-radius-sm, 4px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64))}.chat .file .file-data{flex:1 1 0%}.chat .file .file-data .name{word-break:break-all;color:rgb(var(--dyte-colors-text-1000, 255 255 255));overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1}.chat .file .file-data .file-data-split{margin-top:var(--dyte-space-0\\.5, 2px);display:flex;align-items:center;font-size:12px}.chat .file .file-data .file-data-split .ext{margin-right:var(--dyte-space-2, 8px);text-transform:uppercase;overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1}.chat .file .file-data .file-data-split .divider{height:var(--dyte-space-4, 16px);width:var(--dyte-space-0\\.5, 2px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity))}.chat .file .file-data .file-data-split .size{margin-left:var(--dyte-space-2, 8px)}a{--tw-text-opacity:1;color:rgba(var(--dyte-colors-brand-300, 73 124 253) / var(--tw-text-opacity));-webkit-text-decoration-line:none;text-decoration-line:none}a:hover{-webkit-text-decoration-line:underline;text-decoration-line:underline}.new-chat-marker{display:flex;width:100%;align-items:center;gap:var(--dyte-space-2, 8px);--tw-text-opacity:1;color:rgba(var(--dyte-colors-brand-300, 73 124 253) / var(--tw-text-opacity))}.new-chat-marker::before{content:'';height:1px;flex:1 1 0%;background-color:rgba(var(--dyte-colors-brand-300, 73 124 253) / 0.5)}.show-new-messages-ctr{pointer-events:none;display:flex;justify-content:flex-end;padding:var(--dyte-space-3, 12px);z-index:0;margin-top:calc(var(--dyte-space-14, 56px) * -1)}.show-new-messages{pointer-events:auto;--tw-translate-y:calc(var(--dyte-space-6, 24px) * -1);transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));opacity:0;transition-property:color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.show-new-messages.active{--tw-translate-y:var(--dyte-space-0, 0px);transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));opacity:1}";const g=class{constructor(t){(0,s.r)(this,t),this.pageSize=25,this.getChatMessages=async(t,e,a)=>{const{messages:s}=await this.meeting.chat.getMessages(t,e,a);return s},this.createChatNodes=t=>t.map((t=>{const e=void 0===t.userId;return this.createChatNode(t,e)})),this.disconnectMeeting=t=>{var e;null===(e=null==t?void 0:t.chat)||void 0===e||e.removeListener("chatUpdate",this.chatUpdateListener)},this.createChatNode=(t,e)=>(0,s.h)("dyte-chat-message",{messageItem:{type:"chat",message:t},isContinued:e,isUnread:!1,size:this.size,iconPack:this.iconPack,key:t.id}),this.chatUpdateListener=t=>{this.$paginatedListRef.onNewNode(this.createChatNode(t.message,!1))},this.meeting=void 0,this.size=void 0,this.iconPack=r.d,this.t=(0,i.u)()}connectedCallback(){this.meetingChanged(this.meeting)}disconnectedCallback(){this.disconnectMeeting(this.meeting)}meetingChanged(t,e){var a;null!=e&&this.disconnectMeeting(e),t&&!t.chat||null!=t&&(null===(a=t.chat)||void 0===a||a.addListener("chatUpdate",this.chatUpdateListener))}render(){return(0,s.h)(s.H,null,(0,s.h)("dyte-paginated-list",{ref:t=>this.$paginatedListRef=t,pageSize:this.pageSize,pagesAllowed:3,fetchData:this.getChatMessages,createNodes:this.createChatNodes}))}static get watchers(){return{meeting:["meetingChanged"]}}};g.style=":host{display:flex;flex:1 0 0px}";const y=class{constructor(t){(0,s.r)(this,t),this.groupChanged=(0,s.c)(this,"dyteChatGroupChanged",7),this.onScopeClick=t=>{this.showParticipantsPanel=!1,this.groupChanged.emit(t)},this.selfUserId=void 0,this.selectedGroupId=void 0,this.unreadCounts={},this.groups=[],this.iconPack=r.d,this.t=(0,i.u)(),this.showParticipantsPanel=!1,this.query=""}toggleParticipants(){this.showParticipantsPanel=!this.showParticipantsPanel}getGroups(){return this.groups.filter((t=>t.name.toLowerCase().includes(this.query.toLowerCase())))}getName(){if(!this.selectedGroupId||"everyone"===this.selectedGroupId)return this.t("everyone");const t=this.groups.find((t=>t.userId===this.selectedGroupId));return t?t.name:this.t("everyone")}render(){const t=Object.keys(this.unreadCounts).reduce(((t,e)=>t+this.unreadCounts[e]),0);return(0,s.h)(s.H,null,(0,s.h)("div",{class:"chat-scope-selector"},this.showParticipantsPanel&&(0,s.h)("div",{class:"participants-container"},(0,s.h)("div",{class:"search",part:"search"},(0,s.h)("dyte-icon",{icon:this.iconPack.search,part:"search-icon"}),(0,s.h)("input",{type:"search",autocomplete:"off",placeholder:"Search",value:this.query,onInput:t=>{this.query=t.target.value},part:"search-input"})),(0,s.h)("ul",{class:"scope-list scrollbar"},""===this.query&&(0,s.h)("li",{class:"scope scope-special",onClick:()=>this.onScopeClick("everyone")},(0,s.h)("div",{class:"everyone-icon"},(0,s.h)("dyte-icon",{icon:this.iconPack.participants})),"Everyone",this.unreadCounts.everyone>0&&(0,s.h)("div",{class:"unread-count",part:"unread-count"},(0,s.h)("span",null,this.unreadCounts.everyone))),this.getGroups().map((t=>{const e=this.unreadCounts[(0,o.g)([this.selfUserId,t.userId])];return(0,s.h)("li",{class:"scope",onClick:()=>this.onScopeClick(t),key:t.userId},t.name,e>0&&(0,s.h)("div",{class:"unread-count",part:"unread-count"},(0,s.h)("span",null,e)))})))),(0,s.h)("button",{onClick:()=>this.toggleParticipants()},(0,s.h)("span",null,`${this.t("To")} ${this.getName()}`,"  ",t>0&&(0,s.h)("div",{class:"unread-count selector"},(0,s.h)("span",null,t))),(0,s.h)("dyte-icon",{icon:this.showParticipantsPanel?this.iconPack.chevron_up:this.iconPack.chevron_down}))))}};y.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}.scrollbar{scrollbar-width:thin;scrollbar-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))\n    var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar{height:var(--dyte-space-1\\.5, 6px);width:var(--dyte-space-1\\.5, 6px);border-radius:9999px;background-color:var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar-thumb{border-radius:9999px;background-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))}:host{display:flex;flex-direction:column}.chat-scope-selector{position:relative;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity));z-index:10}.chat-scope-selector button{width:100%;border-width:var(--dyte-border-width-none, 0);border-style:none;padding:var(--dyte-space-4, 16px);display:flex;align-items:center;justify-content:space-between;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-1000, 255 255 255));font-size:14px;cursor:pointer;height:var(--dyte-space-12, 48px)}.chat-scope-selector button span{display:flex;align-items:center;justify-content:flex-start}.chat-scope-selector button dyte-icon{height:var(--dyte-space-5, 20px);width:var(--dyte-space-5, 20px)}.chat-scope-selector .search{position:-webkit-sticky;position:sticky;box-sizing:border-box;display:flex;align-items:center;border-radius:var(--dyte-border-radius-sm, 4px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity));margin-left:var(--dyte-space-3, 12px);margin-right:var(--dyte-space-3, 12px);margin-top:var(--dyte-space-3, 12px);margin-bottom:var(--dyte-space-0, 0px)}.chat-scope-selector .search dyte-icon{margin-left:var(--dyte-space-2, 8px);margin-right:var(--dyte-space-2, 8px);height:var(--dyte-space-5, 20px);width:var(--dyte-space-5, 20px);color:rgb(var(--dyte-colors-text-600, 255 255 255 / 0.52))}.chat-scope-selector .search input{box-sizing:border-box;height:var(--dyte-space-9, 36px);width:100%;padding-right:var(--dyte-space-2, 8px);border-width:var(--dyte-border-width-none, 0);border-style:none;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-1000, 255 255 255));outline:2px solid transparent;outline-offset:2px;border-radius:var(--dyte-border-radius-sm, 4px);font-size:14px}.chat-scope-selector .search input::-moz-placeholder{color:rgb(var(--dyte-colors-text-800, 255 255 255 / 0.76))}.chat-scope-selector .search input::placeholder{color:rgb(var(--dyte-colors-text-800, 255 255 255 / 0.76))}.chat-scope-selector .participants-container{position:absolute;width:100%;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity));top:var(--dyte-space-12, 48px);-webkit-animation:0.3s slide-down ease;animation:0.3s slide-down ease}@-webkit-keyframes slide-down{from{transform:translateY(-50px)}to{transform:translateY(0%)}}@keyframes slide-down{from{transform:translateY(-50px)}to{transform:translateY(0%)}}.chat-scope-selector .scope-list{margin-top:var(--dyte-space-0, 0px);margin-bottom:var(--dyte-space-0, 0px);list-style-type:none;padding-left:var(--dyte-space-0, 0px);padding-right:var(--dyte-space-0, 0px);overflow:auto;max-height:375px}.chat-scope-selector .scope-list .scope{position:relative;display:flex;flex-direction:row;align-items:center;padding-left:var(--dyte-space-3, 12px);padding-right:var(--dyte-space-3, 12px);padding-top:var(--dyte-space-4, 16px);padding-bottom:var(--dyte-space-4, 16px)}.chat-scope-selector .scope-list .scope:hover{cursor:pointer;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-900, 26 26 26) / var(--tw-bg-opacity))}.chat-scope-selector .scope-list .scope-special{margin-top:var(--dyte-space-4, 16px);--tw-text-opacity:1;color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-text-opacity))}.chat-scope-selector .scope-list .everyone-icon>dyte-icon{height:var(--dyte-space-6, 24px);width:var(--dyte-space-6, 24px);color:rgb(var(--dyte-colors-text-1000, 255 255 255))}.chat-scope-selector .scope-list .everyone-icon{display:flex;height:100%;width:100%;align-items:center;justify-content:center;margin-right:var(--dyte-space-2, 8px);height:var(--dyte-space-8, 32px);width:var(--dyte-space-8, 32px);border-radius:9999px;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-bg-opacity));font-size:12px}.unread-count.selector{position:unset;margin-left:var(--dyte-space-2, 8px)}.unread-count{position:absolute;right:var(--dyte-space-3, 12px);box-sizing:border-box;padding:var(--dyte-space-0\\.5, 2px);-webkit-user-select:none;-moz-user-select:none;user-select:none;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-bg-opacity));font-size:12px;color:rgb(var(--dyte-colors-text-1000, 255 255 255));display:flex;height:var(--dyte-space-5, 20px);min-width:var(--dyte-space-5, 20px);align-items:center;justify-content:center;border-radius:9999px;z-index:1}dyte-avatar{height:var(--dyte-space-8, 32px);width:var(--dyte-space-8, 32px)}"},82321:(t,e,a)=>{a.d(e,{s:()=>s});const s=(t,e=!0)=>{null!=t&&t.scrollTo({top:t.scrollHeight,behavior:e?"smooth":"auto"})}}}]);