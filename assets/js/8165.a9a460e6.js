"use strict";(self.webpackChunkchat_2_db=self.webpackChunkchat_2_db||[]).push([[8165,4416],{28165:(o,r,t)=>{t.r(r),t.d(r,{dyte_emoji_picker:()=>n});var e=t(67503),i=t(82324),a=t(69750);const n=class{constructor(o){(0,e.r)(this,o),this.emojiClicked=(0,e.c)(this,"dyteEmojiClicked",7),this.iconPack=i.d,this.t=(0,a.u)(),this.emojiList=void 0,this.filterVal="",this.filteredEmojis=[]}componentWillLoad(){(async()=>(await fetch("https://cdn.dyte.in/assets/emojis-data.json")).json())().then((o=>{this.emojiList=o,this.handleInputChange({value:""})}))}handleInputChange(o){this.filterVal=o.value;const r=new RegExp(`([^,]*?${this.filterVal}[^,]*):(\\d+)`,"g");this.filteredEmojis=Array.from(this.emojiList.search.matchAll(r)).map((o=>({name:o[1],emoji:this.emojiList.emojis[o[2]]})))}handleEmojiClick(o){this.emojiClicked.emit(o)}mapEmojiList(){var o;return(null===(o=this.emojiList)||void 0===o?void 0:o.length)>0?(0,e.h)("div",{id:"loader"},(0,e.h)("dyte-spinner",{iconPack:this.iconPack,t:this.t})):(0,e.h)("div",{id:"emoji-grid",class:"scrollbar"},this.filteredEmojis.map((o=>(0,e.h)("dyte-button",{iconPack:this.iconPack,t:this.t,key:`emoji-button-${o.name}`,class:"emoji",variant:"ghost",kind:"icon",title:o.name,onClick:()=>this.handleEmojiClick(o.emoji)},o.emoji))))}render(){return(0,e.h)(e.H,null,(0,e.h)("input",{value:this.filterVal,onInput:o=>this.handleInputChange(o.target),placeholder:this.t("Search")}),this.mapEmojiList())}};n.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}.scrollbar{scrollbar-width:thin;scrollbar-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))\n    var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar{height:var(--dyte-space-1\\.5, 6px);width:var(--dyte-space-1\\.5, 6px);border-radius:9999px;background-color:var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar-thumb{border-radius:9999px;background-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))}:host{box-sizing:border-box;display:inline-flex;height:var(--dyte-space-64, 256px);flex-direction:column;padding:var(--dyte-space-3, 12px);padding-bottom:var(--dyte-space-0, 0px);width:auto;min-width:var(--dyte-space-20, 80px);-webkit-user-select:none;-moz-user-select:none;user-select:none;transition-property:color, background-color, border-color, fill, stroke, -webkit-text-decoration-color;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, -webkit-text-decoration-color;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-1000, 255 255 255))}#emoji-grid{margin-top:var(--dyte-space-2, 8px);box-sizing:border-box;display:grid;grid-template-columns:repeat(7, minmax(0, 1fr));padding-bottom:var(--dyte-space-12, 48px);overflow-x:hidden;overflow-y:scroll;height:100%;grid-auto-rows:minmax(-webkit-min-content, -webkit-max-content);grid-auto-rows:minmax(min-content, max-content)}#loader{display:flex;height:100%;width:100%;align-items:center;justify-content:center}input{display:block;height:var(--dyte-space-8, 32px);padding-left:var(--dyte-space-2, 8px);padding-right:var(--dyte-space-2, 8px);font-size:14px;border-width:var(--dyte-border-width-none, 0);border-style:solid;border-style:none;border-color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64));--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88))}input::-moz-placeholder{color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64))}input::placeholder{color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64))}input{border-radius:var(--dyte-border-radius-sm, 4px);outline:2px solid transparent;outline-offset:2px;transition-property:color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;border:var(--dyte-border-width-sm, 1px) solid rgb(var(--dyte-colors-background-600, 60 60 60))}input:focus{--tw-border-opacity:1;border-color:rgba(var(--dyte-colors-brand-300, 73 124 253) / var(--tw-border-opacity));--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:rgba(var(--dyte-colors-brand-300, 73 124 253) / var(--tw-ring-opacity));--tw-ring-opacity:0.3}.emoji{height:var(--dyte-space-10, 40px);width:var(--dyte-space-10, 40px);font-size:20px;color:rgb(var(--dyte-colors-text-1000, 255 255 255))}"}}]);