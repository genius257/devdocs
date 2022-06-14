"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[23240],{75746:function(e,t,o){o.r(t),o.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return v},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var a=o(83117),i=o(80102),n=(o(67294),o(3905)),r=o(13904),s=["components"],l={title:"Buffer overruns and other platform weaknesses",sidebar_label:"Buffer overruns",sidebar_position:14,tags:["Coding guidelines","Policies","Security"]},d=void 0,u={unversionedId:"development/policies/security/bufferoverruns",id:"development/policies/security/bufferoverruns",title:"Buffer overruns and other platform weaknesses",description:"This page forms part of the Moodle security guidelines.",source:"@site/general/development/policies/security/bufferoverruns.md",sourceDirName:"development/policies/security",slug:"/development/policies/security/bufferoverruns",permalink:"/devdocs/general/development/policies/security/bufferoverruns",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/development/policies/security/bufferoverruns.md",tags:[{label:"Coding guidelines",permalink:"/devdocs/general/tags/coding-guidelines"},{label:"Policies",permalink:"/devdocs/general/tags/policies"},{label:"Security",permalink:"/devdocs/general/tags/security"}],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1655176443,formattedLastUpdatedAt:"14/06/2022",sidebarPosition:14,frontMatter:{title:"Buffer overruns and other platform weaknesses",sidebar_label:"Buffer overruns",sidebar_position:14,tags:["Coding guidelines","Policies","Security"]},sidebar:"coding",previous:{title:"Insecure configuration",permalink:"/devdocs/general/development/policies/security/insecure-config"},next:{title:"Social engineering",permalink:"/devdocs/general/development/policies/security/socialengineering"}},c={},p=[{value:"What is the danger?",id:"what-is-the-danger",level:2},{value:"How Moodle avoids this problem",id:"how-moodle-avoids-this-problem",level:2},{value:"What you need to do in your code",id:"what-you-need-to-do-in-your-code",level:2},{value:"What you need to do as an administrator",id:"what-you-need-to-do-as-an-administrator",level:2},{value:"See also",id:"see-also",level:2}],m={toc:p};function v(e){var t=e.components,o=(0,i.Z)(e,s);return(0,n.kt)("wrapper",(0,a.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(r.Z,(0,a.Z)({frontMatter:l},void 0!==u?{metadata:u}:{},{mdxType:"MoodlePageBanner"})),(0,n.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"This page forms part of the ",(0,n.kt)("a",{parentName:"p",href:"../security"},"Moodle security guidelines"),"."))),(0,n.kt)("h2",{id:"what-is-the-danger"},"What is the danger?"),(0,n.kt)("p",null,"Buffer overruns do not affect PHP code, since PHP is a high-level language that automatically manages memory allocation."),(0,n.kt)("p",null,"However, Moodle runs on a server which runs an operating system, a web server, a database and the PHP interpreter. All these are complex pieces of software, and security problems are often found with them. Thus, a Moodle server can be attacked, even if there are no security problems with Moodle."),(0,n.kt)("h2",{id:"how-moodle-avoids-this-problem"},"How Moodle avoids this problem"),(0,n.kt)("p",null,"There is very little that Moodle can do about this."),(0,n.kt)("h2",{id:"what-you-need-to-do-in-your-code"},"What you need to do in your code"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"There is nothing you can do about this from PHP code.")),(0,n.kt)("h2",{id:"what-you-need-to-do-as-an-administrator"},"What you need to do as an administrator"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Keep all components of your server up-to-date."),(0,n.kt)("li",{parentName:"ul"},"Subscribe to security mailing lists for all the products you use, so you are notified promptly about potential problems, and new versions.")),(0,n.kt)("h2",{id:"see-also"},"See also"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../security"},"Security")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/general/development/policies"},"Coding"))))}v.isMDXComponent=!0}}]);