"use strict";(self.webpackChunkchat_2_db=self.webpackChunkchat_2_db||[]).push([[8158],{13901:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>O,frontMatter:()=>c,metadata:()=>l,toc:()=>p});n(67294);var r=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const c={title:"SQL\u6027\u80fd\u4f18\u5316",sidebar_position:10,description:"Chat2DB\u4e00\u4e2a\u96c6\u6210\u4e86AI\u80fd\u529b\u7684\u3001\u652f\u6301Mysql\u3001Oracle\u7b49\u591a\u79cd\u6570\u636e\u5e93\u7ba1\u7406\u7684\u6570\u636e\u5e93\u5ba2\u6237\u7aef\u5de5\u5177"},a=void 0,l={unversionedId:"ai/sqloptimization",id:"ai/sqloptimization",title:"SQL\u6027\u80fd\u4f18\u5316",description:"Chat2DB\u4e00\u4e2a\u96c6\u6210\u4e86AI\u80fd\u529b\u7684\u3001\u652f\u6301Mysql\u3001Oracle\u7b49\u591a\u79cd\u6570\u636e\u5e93\u7ba1\u7406\u7684\u6570\u636e\u5e93\u5ba2\u6237\u7aef\u5de5\u5177",source:"@site/docs/ai/sqloptimization.md",sourceDirName:"ai",slug:"/ai/sqloptimization",permalink:"/docs/ai/sqloptimization",draft:!1,editUrl:"https://github.com/alibaba-open-source-website/Chat2DB/tree/main/docs/ai/sqloptimization.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"SQL\u6027\u80fd\u4f18\u5316",sidebar_position:10,description:"Chat2DB\u4e00\u4e2a\u96c6\u6210\u4e86AI\u80fd\u529b\u7684\u3001\u652f\u6301Mysql\u3001Oracle\u7b49\u591a\u79cd\u6570\u636e\u5e93\u7ba1\u7406\u7684\u6570\u636e\u5e93\u5ba2\u6237\u7aef\u5de5\u5177"},sidebar:"docSidebar",previous:{title:"SQL\u7ffb\u8bd1\u4e3a\u81ea\u7136\u8bed\u8a00",permalink:"/docs/ai/sql2nl"},next:{title:"SQL\u8bed\u6cd5\u8f6c\u6362",permalink:"/docs/ai/sqlconversion"}},u={},p=[{value:"\u529f\u80fd\u4e09\uff1aSQL\u4f18\u5316",id:"\u529f\u80fd\u4e09sql\u4f18\u5316",level:2}],d={toc:p},b="wrapper";function O(e){var{components:t}=e,n=s(e,["components"]);return(0,r.kt)(b,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},d,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u529f\u80fd\u4e09sql\u4f18\u5316"},"\u529f\u80fd\u4e09\uff1aSQL\u4f18\u5316"),(0,r.kt)("p",null,"\u6709\u7684\u65f6\u5019\u6211\u4eec\u5199\u4e86\u4e00\u6bb5SQL\u6027\u80fd\u4e0d\u597d\uff0cChat2DB\u4e5f\u53ef\u4ee5\u5e2e\u6211\u4eec\u4f18\u5316SQL\uff0c\u63d0\u5347\u67e5\u8be2\u6027\u80fd\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"## ---BEGIN---\n## SELECT score.score \nFROM score \nINNER JOIN student_course ON score.course_id = student_course.course_id \nINNER JOIN student ON student_course.student_id = student.id \nWHERE student.name = '\u5c0f\u660e'\n## ---SQL\u4f18\u5316:---\n\u4f18\u5316\u5efa\u8bae\uff1a\n\n1. \u7d22\u5f15\u4f18\u5316\uff1a\u4e3astudent\u8868\u7684name\u5b57\u6bb5\u521b\u5efa\u7d22\u5f15\uff0c\u53ef\u4ee5\u52a0\u5febWHERE\u6761\u4ef6\u7684\u67e5\u8be2\u901f\u5ea6\u3002\n\n2. JOIN\u4f18\u5316\uff1a\u53ef\u4ee5\u4f7f\u7528\u5b50\u67e5\u8be2\u6216\u8005\u4e34\u65f6\u8868\u7684\u65b9\u5f0f\uff0c\u5c06student\u8868\u4e2dname\u4e3a\u5c0f\u660e\u7684\u8bb0\u5f55\u5148\u7b5b\u9009\u51fa\u6765\uff0c\u518d\u8fdb\u884cJOIN\u64cd\u4f5c\uff0c\u53ef\u4ee5\u51cf\u5c11JOIN\u64cd\u4f5c\u7684\u6570\u636e\u91cf\uff0c\u63d0\u9ad8\u67e5\u8be2\u6548\u7387\u3002\n\n3. \u6570\u636e\u5e93\u8bbe\u8ba1\u4f18\u5316\uff1a\u53ef\u4ee5\u8003\u8651\u5c06student\u8868\u548cstudent_course\u8868\u5408\u5e76\u4e3a\u4e00\u5f20\u8868\uff0c\u907f\u514dJOIN\u64cd\u4f5c\uff0c\u63d0\u9ad8\u67e5\u8be2\u6548\u7387\u3002\n\n4. \u7f13\u5b58\u4f18\u5316\uff1a\u53ef\u4ee5\u5c06\u67e5\u8be2\u7ed3\u679c\u7f13\u5b58\u8d77\u6765\uff0c\u907f\u514d\u91cd\u590d\u67e5\u8be2\uff0c\u63d0\u9ad8\u67e5\u8be2\u6548\u7387\u3002\n## --- END ---\n")))}O.isMDXComponent=!0}}]);