"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[47914],{20187:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return n},metadata:function(){return p},toc:function(){return c}});var a=r(83117),o=r(80102),l=(r(67294),r(3905)),s=r(13904),i=["components"],n={title:"Moodle 3.9.5",tags:["Release notes","Moodle 3.9"],sidebar_position:5,moodleVersion:"3.9.5"},d=void 0,p={unversionedId:"releases/3.9/3.9.5",id:"releases/3.9/3.9.5",title:"Moodle 3.9.5",description:"Release date: 8 March 2021",source:"@site/general/releases/3.9/3.9.5.md",sourceDirName:"releases/3.9",slug:"/releases/3.9/3.9.5",permalink:"/devdocs/general/releases/3.9/3.9.5",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/3.9/3.9.5.md",tags:[{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"},{label:"Moodle 3.9",permalink:"/devdocs/general/tags/moodle-3-9"}],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1655176443,formattedLastUpdatedAt:"14/06/2022",sidebarPosition:5,frontMatter:{title:"Moodle 3.9.5",tags:["Release notes","Moodle 3.9"],sidebar_position:5,moodleVersion:"3.9.5"},sidebar:"releaseNotes",previous:{title:"Moodle 3.9.4",permalink:"/devdocs/general/releases/3.9/3.9.4"},next:{title:"Moodle 3.9.6",permalink:"/devdocs/general/releases/3.9/3.9.6"}},m={},c=[{value:"General fixes and improvements",id:"general-fixes-and-improvements",level:2},{value:"Accessibility improvements",id:"accessibility-improvements",level:2},{value:"Security fixes",id:"security-fixes",level:2},{value:"Translations",id:"translations",level:2}],u={toc:c};function h(e){var t=e.components,r=(0,o.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(s.Z,(0,a.Z)({frontMatter:n},void 0!==p?{metadata:p}:{},{mdxType:"MoodlePageBanner"})),(0,l.kt)("p",null,"Release date: 8 March 2021"),(0,l.kt)("p",null,"Here is ",(0,l.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=project+%3D+mdl+AND+resolution+%3D+fixed+AND+fixVersion+in+%28%223.9.5%22%29+ORDER+BY+priority+DESC&runQuery=true&clear=true"},"the full list of fixed issues in 3.9.5"),"."),(0,l.kt)("h2",{id:"general-fixes-and-improvements"},"General fixes and improvements"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-67959"},"MDL-67959")," - The default group icon should not be displayed when there is no group picture"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-67515"},"MDL-67515")," - Uninstalled plugin breaks the custom lang tool if it had some strings customised"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-66979"},"MDL-66979")," - Switch all the Behat testing to the new W3C drivers"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-68970"},"MDL-68970")," - Pages during a quiz attempt should not be cached, so forwards/back do not lead to errors"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-57020"},"MDL-57020")," - Unable to delete scales which are no longer used"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-70268"},"MDL-70268")," - Dropbox repository requires log on to work - which fails"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-46256"},"MDL-46256")," - count_words returns too few words when dealing with html tags"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-70048"},"MDL-70048")," - Dropbox Search API: /files/search is being retired in favor of /files/search_v2"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69867"},"MDL-69867")," - Marking workflow display wrong current grade if using scales"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-70736"},"MDL-70736")," - Unable to load Marking Guide Templates"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-70796"},"MDL-70796")," - Moodle word count does not match other software"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69101"},"MDL-69101"),' - Essay question: "Accepted file types" and other new fields are not supported in Moodle XML file'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-70377"},"MDL-70377")," - When reviewing an attempt as a teacher ",(0,l.kt)("inlineCode",{parentName:"li"},"$string['saved') {$a}")," not replaced"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-43697"},"MDL-43697")," - Archived badges are restored during course restore"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-70528"},"MDL-70528")," - Can't add block to H5P (core) activity"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-70676"},"MDL-70676")," - Workshop assessment aspect with no grade is unusable"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-70631"},"MDL-70631")," - Poor performance of zip_packer::extract_to_pathname()"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-68958"},"MDL-68958")," - Undefined variable: href when creating IMSCP"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-70339"},"MDL-70339")," - Activity chooser does not honour external tool icons"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-56772"},"MDL-56772")," - File picker:Right align table column headers, in RTL mode (theme:boost)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-70513"},"MDL-70513")," - Quiz manual grading page should warn if you try to leave with unsaved data"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-70705"},"MDL-70705")," - Multilang Filters not applied to Recent blog entries block Blog entry titles"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-70552"},"MDL-70552")," - Notification of submissions are not sent for anonymous feedback"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-70574"},"MDL-70574")," - Cloze multianswer question leaks percentage if with decimal"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-66932"},"MDL-66932")," - Grade percentage display in Gradebook should be LTR, in RTL mode"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-70912"},"MDL-70912")," - Cannot access H5P content bank popup in Atto editor within mod_data textarea"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-70264"},"MDL-70264")," - badges/oauth2callback.php should be removed and replaced by admin/oauth2callback.php"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-67974"},"MDL-67974")," - Badge expiry error and missing expired stamp"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-67494"},"MDL-67494")," - Course/activity calendar events are deleted when the teacher who created them requests their data to be deleted"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-70995"},"MDL-70995")," - Group names not formatted in course participants filter"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69883"},"MDL-69883")," - Unable to scroll beyond 50 conversations in Messages tool"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69097"},"MDL-69097"),' - Language filters aren\'t correctly applied in "Whole forum grading"')),(0,l.kt)("h2",{id:"accessibility-improvements"},"Accessibility improvements"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-70169"},"MDL-70169")," - Login page accessibility issues"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-70288"},"MDL-70288")," - Checkbox and advanced checkbox elements can have duplicate labels"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-70173"},"MDL-70173")," - Dashboard accessibility issues"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-65390"},"MDL-65390"),' - Accessibility #11 Content appears above "show more" button'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-59782"},"MDL-59782")," - Question bank highlight of last added question is wrong in boost"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-70172"},"MDL-70172")," - Site home page accessibility issues")),(0,l.kt)("h2",{id:"security-fixes"},"Security fixes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=419650"},"MSA-21-0006")," Stored XSS via ID number user profile field"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=419651"},"MSA-21-0007")," Stored XSS and blind SSRF possible via feedback answer text"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=419652"},"MSA-21-0008")," User full name disclosure within online users block"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=419653"},"MSA-21-0009")," Bypass email verification secret when confirming account registration"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=419654"},"MSA-21-0010")," Fetching a user's enrolled courses via web services did not check profile access in each course"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=419655"},"MSA-21-0011")," JQuery versions below 3.5.0 contain some potential vulnerabilities (upstream)")),(0,l.kt)("h2",{id:"translations"},"Translations"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_3.9.5"},"Notes de mise \xe0 jour de Moodle 3.9.5")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/es/Notas_de_Moodle_3.9.5"},"Notas de Moodle 3.9.5"))))}h.isMDXComponent=!0}}]);