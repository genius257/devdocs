"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[87359],{9667:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return n},metadata:function(){return m},toc:function(){return u}});var o=a(83117),r=a(80102),s=(a(67294),a(3905)),l=a(13904),i=["components"],n={title:"Moodle 2.1.2",tags:["Release notes","Moodle 2.1"],sidebar_position:2,moodleVersion:"2.1.2"},d=void 0,m={unversionedId:"releases/2.1/2.1.2",id:"releases/2.1/2.1.2",title:"Moodle 2.1.2",description:"Release date: 10th October, 2011",source:"@site/general/releases/2.1/2.1.2.md",sourceDirName:"releases/2.1",slug:"/releases/2.1/2.1.2",permalink:"/devdocs/general/releases/2.1/2.1.2",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/2.1/2.1.2.md",tags:[{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"},{label:"Moodle 2.1",permalink:"/devdocs/general/tags/moodle-2-1"}],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1655176443,formattedLastUpdatedAt:"14/06/2022",sidebarPosition:2,frontMatter:{title:"Moodle 2.1.2",tags:["Release notes","Moodle 2.1"],sidebar_position:2,moodleVersion:"2.1.2"},sidebar:"releaseNotes",previous:{title:"Moodle 2.1.1",permalink:"/devdocs/general/releases/2.1/2.1.1"},next:{title:"Moodle 2.1.3",permalink:"/devdocs/general/releases/2.1/2.1.3"}},p={},u=[{value:"Highlights",id:"highlights",level:2},{value:"Functional changes",id:"functional-changes",level:2},{value:"Security issues",id:"security-issues",level:2},{value:"Fixes and improvements",id:"fixes-and-improvements",level:2},{value:"Random API changes",id:"random-api-changes",level:2},{value:"Translations",id:"translations",level:2}],h={toc:u};function k(e){var t=e.components,a=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,o.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(l.Z,(0,o.Z)({frontMatter:n},void 0!==m?{metadata:m}:{},{mdxType:"MoodlePageBanner"})),(0,s.kt)("p",null,"Release date: 10th October, 2011"),(0,s.kt)("p",null,"Here is ",(0,s.kt)("a",{parentName:"p",href:"http://tracker.moodle.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=project+%3D+mdl+and+resolution+%3D+fixed+AND+fixVersion+in+%28%222.1.2%22%29"},"the full list of fixed issues in 2.1.2"),"."),(0,s.kt)("h2",{id:"highlights"},"Highlights"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-28729"},"MDL-28729")," - Numerous multi-lang fixes and improvements")),(0,s.kt)("h2",{id:"functional-changes"},"Functional changes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-28410"},"MDL-28410")," - Allow a single option in a Choice activity"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-29394"},"MDL-29394")," - HTML editor format option selector hidden when there is only one option"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-23520"},"MDL-23520")," - Option added to allow deleting of a wiki page")),(0,s.kt)("h2",{id:"security-issues"},"Security issues"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=188309"},"MSA-11-0027")," - Wiki pages reference forgery issue"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=188310"},"MSA-11-0028")," - Wiki comments cross site scripting issue"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=188311"},"MSA-11-0029")," - File visibility issue"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=188312"},"MSA-11-0030")," - Box.net repository integration authentication issue"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=188313"},"MSA-11-0031")," - Forms API constant issue"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=188314"},"MSA-11-0032")," - MNET SSL validation issue"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=188315"},"MSA-11-0033")," - Site-hub registration identity issue"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=188316"},"MSA-11-0034")," - Chat module information leak"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=188317"},"MSA-11-0035")," - Cookie-less session vulnerability"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=188321"},"MSA-11-0039")," - Wiki section vulnerability"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=188322"},"MSA-11-0040")," - Potential personal information leak"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=188323"},"MSA-11-0041")," - Global search authentication issue")),(0,s.kt)("h2",{id:"fixes-and-improvements"},"Fixes and improvements"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-28931"},"MDL-28931")," - Updated timezone info to latest version available"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-29145"},"MDL-29145")," - Problem viewing IMS packages resolved"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-27122"},"MDL-27122")," - The Settings block appears once on the Front Page"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-28569"},"MDL-28569")," - RSS feed autodiscovery works with ampersands in URLs"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-26890"},"MDL-26890")," - Forum file size limit is used if a file is added from private files"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-28424"},"MDL-28424")," - Quiz with browser security enabled shows results"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-28402"},"MDL-28402")," - LDAP configuration allows values stored in lower case"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-25872"},"MDL-25872")," - Teacher listed in assignment grading and in gradebook")),(0,s.kt)("h2",{id:"random-api-changes"},"Random API changes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-22232"},"MDL-22232")," - any code that sends messages had better be aware of this. It relates to the emailstop field, but there is not a clear explanation of the change anywhere.")),(0,s.kt)("h2",{id:"translations"},"Translations"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/es/Notas_de_Moodle_2.1.2"},"Notas de Moodle 2.1.2")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_2.1.2"},"Notes de mise \xe0 jour de Moodle 2.1.2"))))}k.isMDXComponent=!0}}]);