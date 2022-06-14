"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[58684],{24651:function(e,t,o){o.r(t),o.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return n},metadata:function(){return p},toc:function(){return u}});var r=o(83117),a=o(80102),s=(o(67294),o(3905)),i=o(13904),l=["components"],n={title:"Moodle 2.0.7",tags:["Release notes","Moodle 2.0"],sidebar_position:7,moodleVersion:"2.0.7"},d=void 0,p={unversionedId:"releases/2.0/2.0.7",id:"releases/2.0/2.0.7",title:"Moodle 2.0.7",description:"Release date: 9 January 2012",source:"@site/general/releases/2.0/2.0.7.md",sourceDirName:"releases/2.0",slug:"/releases/2.0/2.0.7",permalink:"/devdocs/general/releases/2.0/2.0.7",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/2.0/2.0.7.md",tags:[{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"},{label:"Moodle 2.0",permalink:"/devdocs/general/tags/moodle-2-0"}],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1655176443,formattedLastUpdatedAt:"14/06/2022",sidebarPosition:7,frontMatter:{title:"Moodle 2.0.7",tags:["Release notes","Moodle 2.0"],sidebar_position:7,moodleVersion:"2.0.7"},sidebar:"releaseNotes",previous:{title:"Moodle 2.0.6",permalink:"/devdocs/general/releases/2.0/2.0.6"},next:{title:"Moodle 2.0.8",permalink:"/devdocs/general/releases/2.0/2.0.8"}},m={},u=[{value:"Functional changes",id:"functional-changes",level:2},{value:"Security issues",id:"security-issues",level:2},{value:"Fixes and improvements",id:"fixes-and-improvements",level:2},{value:"Translations",id:"translations",level:2}],c={toc:u};function k(e){var t=e.components,o=(0,a.Z)(e,l);return(0,s.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(i.Z,(0,r.Z)({frontMatter:n},void 0!==p?{metadata:p}:{},{mdxType:"MoodlePageBanner"})),(0,s.kt)("p",null,"Release date: 9 January 2012"),(0,s.kt)("p",null,"Here is ",(0,s.kt)("a",{parentName:"p",href:"http://tracker.moodle.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=project+%3D+mdl+AND+resolution+%3D+fixed+AND+fixVersion+in+%28%222.0.7%22%29+ORDER+BY+priority+DESC&runQuery=true&clear=true"},"the full list of fixed issues in 2.0.7"),"."),(0,s.kt)("h2",{id:"functional-changes"},"Functional changes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-19147"},"MDL-19147")," - Single Simple forums are no longer targets for moving (and losing) discussions"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-30273"},"MDL-30273")," - Students and teachers can add additional topics to a simple forum discussion")),(0,s.kt)("h2",{id:"security-issues"},"Security issues"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=194008"},"MSA-12-0001")," - Recaptcha transmission consistency issue"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=194011"},"MSA-12-0003")," - Added password protection"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=194012"},"MSA-12-0004")," - Added profile image security"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=194013"},"MSA-12-0005")," - Encryption enhancement"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=194014"},"MSA-12-0006")," - Additional email address validation"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=194015"},"MSA-12-0007")," - Email injection prevention"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=194016"},"MSA-12-0008")," - Unsynchronised access via tokens"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=194017"},"MSA-12-0009")," - Role access issue"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=194018"},"MSA-12-0010")," - Unauthorised access to session key"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=194019"},"MSA-12-0011")," - Browser autofill password issue"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=194020"},"MSA-12-0012")," - Form validation issue")),(0,s.kt)("h2",{id:"fixes-and-improvements"},"Fixes and improvements"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-28072"},"MDL-28072")," - Undefined function in course activity report"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-30376"},"MDL-30376")," - Glossary RSS feed no longer generates error"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-30378"},"MDL-30378")," - Site page links fixed in Navigation blocks"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-30460"},"MDL-30460")," - Wiki image dropdown includes files with upper case suffixes"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-30466"},"MDL-30466")," - Writing to database fixed for restoring a course with uses course completion"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-28180"},"MDL-28180")," - Duplicating an assignment that has course completion enabled no longer breaks course completion for the course"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-27314"},"MDL-27314")," - It is now possible to delete or regrade quiz attempts in separate groups mode"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-29730"},"MDL-29730")," - Fixed Lesson question shortanswer with regexp option"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-30260"},"MDL-30260")," - Emailstop option fixed")),(0,s.kt)("h2",{id:"translations"},"Translations"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/es/Notas_de_Moodle_2.0.7"},"Notas de Moodle 2.0.7")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_2.0.7"},"Notes de mise \xe0 jour de Moodle 2.0.7"))))}k.isMDXComponent=!0}}]);