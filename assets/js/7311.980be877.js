"use strict";(self.webpackChunkchat_2_db=self.webpackChunkchat_2_db||[]).push([[7311,2026],{37311:(t,e,i)=>{i.r(e),i.d(e,{dyte_avatar:()=>c});var a=i(67503),r=i(82324),o=i(22906),s=i(69750);const c=class{constructor(t){(0,a.r)(this,t),this.getAvatar=()=>{var t;const e=(0,o.f)((null===(t=this.participant)||void 0===t?void 0:t.name)||"");let i;if(null!=this.participant&&"picture"in this.participant&&(i=this.participant.picture),i&&i.length>0&&"errored"!==this.imageState)return(0,a.h)("div",{class:"image-ctr"},"loading"===this.imageState&&(0,a.h)("dyte-spinner",{iconPack:this.iconPack,t:this.t}),(0,a.h)("img",{src:i,class:{loaded:"loaded"===this.imageState},loading:"lazy",title:e,onLoad:()=>this.imageState="loaded",onError:()=>this.imageState="errored",part:"image"}));const r=(0,o.g)(e);return(0,a.h)("div",{class:"initials",title:e,part:"initials"},r)},this.participant=void 0,this.variant="circular",this.size=void 0,this.iconPack=r.d,this.t=(0,s.u)(),this.imageState="loading"}render(){return(0,a.h)(a.H,null,this.getAvatar())}};c.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{display:flex;height:var(--dyte-space-32, 128px);width:var(--dyte-space-32, 128px);align-items:center;justify-content:center;font-size:28px;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-video-bg, 24 24 24) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-on-brand-1000, var(--dyte-colors-text-1000, 255 255 255)));overflow:hidden;border-radius:9999px}dyte-icon{height:50%;width:50%}.image-ctr{display:flex;height:100%;width:100%;align-items:center;justify-content:center;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-600, 255 255 255 / 0.52))}img{height:var(--dyte-space-0, 0px);width:var(--dyte-space-0, 0px);-o-object-fit:cover;object-fit:cover}img.loaded{height:100%;width:100%}.initials{display:flex;height:100%;width:100%;align-items:center;justify-content:center;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-bg-opacity));text-transform:uppercase}.image{display:flex;height:100%;width:100%;align-items:center;justify-content:center}.image img{display:none;height:100%;width:100%;-o-object-fit:cover;object-fit:cover}.image img.loaded{display:block}:host([variant='hexagon']){border-radius:var(--dyte-border-radius-none, 0);-webkit-clip-path:polygon(50% 0, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);clip-path:polygon(50% 0, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%)}:host([size='sm']){height:var(--dyte-space-16, 64px);width:var(--dyte-space-16, 64px);font-size:20px}:host([size='md']){height:var(--dyte-space-28, 112px);width:var(--dyte-space-28, 112px)}:host([size='lg']){height:var(--dyte-space-32, 128px);width:var(--dyte-space-32, 128px)}"}}]);