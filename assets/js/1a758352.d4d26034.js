"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[26583],{92483:function(e,t,a){a.r(t),a.d(t,{assets:function(){return h},contentTitle:function(){return d},default:function(){return u},frontMatter:function(){return m},metadata:function(){return p},toc:function(){return c}});var n=a(83117),i=a(80102),r=(a(67294),a(3905)),o=a(13904),l=a(11239),s=["components"],m={title:"Automated Manipulation of Strings (AMOS)",sidebar_label:"AMOS",tags:["Language"]},d=void 0,p={unversionedId:"projects/api/amos",id:"projects/api/amos",title:"Automated Manipulation of Strings (AMOS)",description:"<ProjectSummary",source:"@site/general/projects/api/amos.md",sourceDirName:"projects/api",slug:"/projects/api/amos",permalink:"/devdocs/general/projects/api/amos",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/projects/api/amos.md",tags:[{label:"Language",permalink:"/devdocs/general/tags/language"}],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1655176443,formattedLastUpdatedAt:"14/06/2022",frontMatter:{title:"Automated Manipulation of Strings (AMOS)",sidebar_label:"AMOS",tags:["Language"]},sidebar:"projects",previous:{title:"String deprecation",permalink:"/devdocs/general/projects/api/string-deprecation"}},h={},c=[{value:"AMOS design",id:"amos-design",level:2},{value:"Overall picture",id:"overall-picture",level:3},{value:"AMOS processes",id:"amos-processes",level:3},{value:"Implementation plan",id:"implementation-plan",level:3},{value:"Use cases",id:"use-cases",level:3},{value:"Database structure",id:"database-structure",level:2},{value:"amos_repository",id:"amos_repository",level:3},{value:"Keys",id:"keys",level:4},{value:"Indexes",id:"indexes",level:4},{value:"Features",id:"features",level:2},{value:"Tracking the changes in the English strings",id:"tracking-the-changes-in-the-english-strings",level:3},{value:"AMOS script",id:"amos-script",level:3},{value:"Generating installer files",id:"generating-installer-files",level:3},{value:"Deployment settings",id:"deployment-settings",level:2}],g={toc:c};function u(e){var t=e.components,d=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},g,d,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,(0,n.Z)({frontMatter:m},void 0!==p?{metadata:p}:{},{mdxType:"MoodlePageBanner"})),(0,r.kt)(l.ci,{projectName:"api/amos",mdxType:"ProjectSummary"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"AMOS")," stands for Automated Manipulation of Strings. AMOS is a central repository of Moodle strings and their history. It tracks the addition of English strings into Moodle code, gathers translations, handles common translation tasks and generates language packages to be deployed on Moodle servers."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The name was chosen in honour of ",(0,r.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/John_Amos_Comenius"},"John Amos Comenius"),", the author of ",(0,r.kt)("inlineCode",{parentName:"p"},"Janua linguarum reserata")," (Gate to Languages Unlocked), who may be considered the father of modern education."))),(0,r.kt)("h2",{id:"amos-design"},"AMOS design"),(0,r.kt)("p",null,"This part of the document was the original specification used for development."),(0,r.kt)("h3",{id:"overall-picture"},"Overall picture"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"AMOS workflow",src:a(70544).Z,width:"992",height:"278"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Developers add a new string by adding them into appropriate English $strings array definition file (for example, ",(0,r.kt)("inlineCode",{parentName:"li"},"/mod/workshop/lang/en/workshop.php"),"). This file is committed into Moodle main CVS repository as a part of the code."),(0,r.kt)("li",{parentName:"ol"},"CVS repository is mirrored automatically on the fly in a git repository. This git repository is used for further processing because parsing the strings file and tracking their history is much simpler in this system. The whole history is present in the git clone so there is no need to ask CVS server for anything once it is fetched."),(0,r.kt)("li",{parentName:"ol"},"The Git repository is regularly checked for any changes in string definition files. If any modification is detected then the file is parsed and any addition, modification, or removal of a string is recorded in an English strings database, together with a meta-information about the author of the change, timestamp, branch, commit identification (git commit hash) and so on."),(0,r.kt)("li",{parentName:"ol"},"So called translation stage (or cache) is used during the translation. This is similar to the session cache when working with ",(0,r.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/XMLDB"},"XMLDB"),". Once the translator is happy with the work, they submit the translation into the database of the translated strings."),(0,r.kt)("li",{parentName:"ol"},"The non-English strings database contains the history of the translation of all Moodle strings in all supported languages. This database is used as a source to generate the up-to-date language package in various formats (ZIP to be deployed at the servers, XML to be used by an external translation tools, etc)."),(0,r.kt)("li",{parentName:"ol"},"Moodle site administrators update their installed language packs by downloading the ZIP files generated from the database (or, in the future, they can fetch the pack in other format)")),(0,r.kt)("h3",{id:"amos-processes"},"AMOS processes"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"AMOS workflow",src:a(50818).Z,width:"798",height:"279"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Tracking CVS commits"),". Run as a cron job. Looks for new/modified/removed strings in Moodle source code (core and contrib) and registers these changes in the AMOS database."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Uploading strings"),". Both English and translated strings may be registered from uploaded files. This way, 3rd modules not tracked by AMOS automatically (because they are not in our contrib) can be processed in AMOS."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Translating strings via web"),". AMOS provides an interface for translating stored strings (",(0,r.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-21691"},"MDL-21691"),")."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Staging"),". Strings from various sources end in a ",(0,r.kt)("a",{parentName:"li",href:"http://en.wikipedia.org/wiki/Staging_(data)"},"staging area"),". They are stored here temporarily before they are committed into the main strings table."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Committing"),". A set of strings in the stage is committed into the main strings table.")),(0,r.kt)("p",null,"Thanks to this design, we have a single interface to get data from stage into the main strings repository. For every supported format/way to get strings, just a class implementing 'stageable' interface is needed to convert the input format into the staging area."),(0,r.kt)("p",null,"Hierarchy of classes is expected to be available for input processing. For example, the process that tracks commits history in CVS prepares a PHP file with the checkout. So we have a class that is able to convert ",(0,r.kt)("inlineCode",{parentName:"p"},"array $string[]()")," defined in PHP file into staging area. Once we have such class, it can be used to process PHP files uploaded by developers/translators, too."),(0,r.kt)("h3",{id:"implementation-plan"},"Implementation plan"),(0,r.kt)("p",null,"The implementation proposal evolved from the idea by Petr Skoda ",(0,r.kt)("a",{parentName:"p",href:"http://moodle.org/mod/forum/discuss.php?d=118707#p542197"},"discussed at moodle.org"),". The key point is that translators do not have direct access to the source code repository (CVS) any more. There is a central tool (known as AMOS nowadays) that looks after proper branching and keeping history of the language packs. The current proposal follows."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"There is a separate Moodle site at ",(0,r.kt)("a",{parentName:"li",href:"http://lang.moodle.org"},"http://lang.moodle.org")," MNet'ed with ",(0,r.kt)("a",{parentName:"li",href:"http://moodle.org."},"http://moodle.org.")," This site is intended for our developers, translators and other community members interested in the translation process. Current Languages forum at Using Moodle can be eventually moved into this new languages portal."),(0,r.kt)("li",{parentName:"ol"},"AMOS is implemented as a local plugin ",(0,r.kt)("inlineCode",{parentName:"li"},"/local/amos")," installed at ",(0,r.kt)("a",{parentName:"li",href:"http://lang.moodle.org."},"http://lang.moodle.org.")," Because this is the only Moodle site with this plugin, using /local plugin mechanism is a natural way to implement, develop and maintain it."),(0,r.kt)("li",{parentName:"ol"},'There is a course "Moodle Translation" in this portal containing (among other useful things) a clear link to the ',(0,r.kt)("inlineCode",{parentName:"li"},"/local/amos/view.php")," page."),(0,r.kt)("li",{parentName:"ol"},"During Moodle 2.0 beta period, translator used AMOS portal to prepare the translations of the new Moodle release."),(0,r.kt)("li",{parentName:"ol"},"AMOS installation at ",(0,r.kt)("a",{parentName:"li",href:"http://lang.moodle.org"},"http://lang.moodle.org")," uses its own git clone of our official git mirror to have access to the English strings. Keeping the git mirror up-to-date and synced is a prerequisition for the proper AMOS functionality.")),(0,r.kt)("h3",{id:"use-cases"},"Use cases"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Developers")," write the code and commits it into CVS. They can create or modify English strings as needed in the current way of direct modification of the strings definition file."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Translators")," come to ",(0,r.kt)("a",{parentName:"li",href:"http://lang.moodle.org"},"http://lang.moodle.org")," to translate Moodle. No other way is possible yet.",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Translators can choose the Moodle version (1.8, 1.9 or 2.0) to translate"),(0,r.kt)("li",{parentName:"ol"},"Translators can display the list of missing strings to translate"),(0,r.kt)("li",{parentName:"ol"},"Translators can display the list of English strings that were modified since their last translation so they should be re-checked"),(0,r.kt)("li",{parentName:"ol"},"Translators can display the history of string wording, authors of the change, commit messages explaining the change"),(0,r.kt)("li",{parentName:"ol"},"Other useful tools and filters are available, like displaying all strings containing a given phrase etc. See ",(0,r.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-18797"},"MDL-18797")," for details"),(0,r.kt)("li",{parentName:"ol"},'After providing new or modified translations, translators "commit" their changes through the web interface, providing a commit message'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Administrators")," can download language packages as ZIP files from ",(0,r.kt)("a",{parentName:"li",href:"http://download.moodle.org"},"http://download.moodle.org")," or let them update automatically from the Moodle",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Packages are regenerated automatically as they are at the moment, with the only difference that the database and not CVS is used as their source"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Contributors")," ","[must think about this yet]"," - their plugins in ",(0,r.kt)("inlineCode",{parentName:"li"},"CONTRIB"),' can be mirrored into git (one day this will happen anyway ;-)) and then AMOS can process them easily. Or we could add a feature that the contributor can upload the file with English strings definition manually and "register" the strings this way.')),(0,r.kt)("h2",{id:"database-structure"},"Database structure"),(0,r.kt)("p",null,"The core of the whole AMOS system is a single table containing the history of all changes of all strings from all components in all languages. This one is called amos_repository. All other operations, like committing a translation, getting the current snapshot etc., are based on this table. After an initial import of CVS history, the table contains around 3.6 millions of records."),(0,r.kt)("p",null,"There is yet another table where the permissions to translate a language are stored, which is not so important and is trivial (therefore not documented here)."),(0,r.kt)("h3",{id:"amos_repository"},"amos_repository"),(0,r.kt)("p",null,"Contains all Moodle strings and their history"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"int (10) unsigned not null seq"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"branch"),(0,r.kt)("td",{parentName:"tr",align:null},"int (10) unsigned not null"),(0,r.kt)("td",{parentName:"tr",align:null},"The code of the branch this string is valid for")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lang"),(0,r.kt)("td",{parentName:"tr",align:null},"char (20) not null"),(0,r.kt)("td",{parentName:"tr",align:null},"The code of the language this string belongs to. Like en, cs or es")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"component"),(0,r.kt)("td",{parentName:"tr",align:null},"char (255) not null"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the component this string belongs to. Like ",(0,r.kt)("inlineCode",{parentName:"td"},"moodle")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"workshopform_accumulative"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"stringid"),(0,r.kt)("td",{parentName:"tr",align:null},"char (255) not null"),(0,r.kt)("td",{parentName:"tr",align:null},"The code of the string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"text"),(0,r.kt)("td",{parentName:"tr",align:null},"text (big) not null"),(0,r.kt)("td",{parentName:"tr",align:null},"The localized string text")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"timemodified"),(0,r.kt)("td",{parentName:"tr",align:null},"int (10) unsigned not null"),(0,r.kt)("td",{parentName:"tr",align:null},"The timestamp of the commit")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"commitmsg"),(0,r.kt)("td",{parentName:"tr",align:null},"text (big)"),(0,r.kt)("td",{parentName:"tr",align:null},"Commit message")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"commithash"),(0,r.kt)("td",{parentName:"tr",align:null},"char (40)"),(0,r.kt)("td",{parentName:"tr",align:null},"The git commit hash that introduced this string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"source"),(0,r.kt)("td",{parentName:"tr",align:null},"char (255)"),(0,r.kt)("td",{parentName:"tr",align:null},"The source of this string - git, email etc.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"deleted"),(0,r.kt)("td",{parentName:"tr",align:null},"int (2) unsigned default 0"),(0,r.kt)("td",{parentName:"tr",align:null},"Is the string deleted? If not, it will be generated into the lang packs")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"userid"),(0,r.kt)("td",{parentName:"tr",align:null},"int (10) unsigned"),(0,r.kt)("td",{parentName:"tr",align:null},"If the author is known in the local user table, store their id here")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"userinfo"),(0,r.kt)("td",{parentName:"tr",align:null},"char (255)"),(0,r.kt)("td",{parentName:"tr",align:null},"Helps to identify the author of the change, for example a name from CVS commit")))),(0,r.kt)("h4",{id:"keys"},"Keys"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Field(s)"),(0,r.kt)("th",{parentName:"tr",align:null},"Reference"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"primary"),(0,r.kt)("td",{parentName:"tr",align:null},"primary"),(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fk_user"),(0,r.kt)("td",{parentName:"tr",align:null},"foreign"),(0,r.kt)("td",{parentName:"tr",align:null},"userid"),(0,r.kt)("td",{parentName:"tr",align:null},"user (id)")))),(0,r.kt)("h4",{id:"indexes"},"Indexes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Field(s)"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ix_snapshot"),(0,r.kt)("td",{parentName:"tr",align:null},"Not unique"),(0,r.kt)("td",{parentName:"tr",align:null},"component, lang, branch"),(0,r.kt)("td",{parentName:"tr",align:null},"Optimised for getting a snapshot of all current strings in one component")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ix_lang"),(0,r.kt)("td",{parentName:"tr",align:null},"Not unique"),(0,r.kt)("td",{parentName:"tr",align:null},"lang"),(0,r.kt)("td",{parentName:"tr",align:null},"For getting a list of all known components. In some cases, we need to filter English records only")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ix_timemodified"),(0,r.kt)("td",{parentName:"tr",align:null},"Not unique"),(0,r.kt)("td",{parentName:"tr",align:null},"timemodified"),(0,r.kt)("td",{parentName:"tr",align:null},"This index allows to search for the recent records in the log output")))),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("h3",{id:"tracking-the-changes-in-the-english-strings"},"Tracking the changes in the English strings"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Implemented in"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"/local/amos/cli/parse-core.php")),(0,r.kt)("p",null,"AMOS uses its own git clone of Moodle repository. It runs ",(0,r.kt)("inlineCode",{parentName:"p"},"git whatchanged")," to see what files were affected by every single commit ever. Once it detects a change in a valid English string file, it checks out that revision of the file and compares its content with the current snapshot of the strings database. New record is added into the strings table for every new, modified or removed string in the checked out file. The commit hash of the last fully processed commit is stored in ",(0,r.kt)("inlineCode",{parentName:"p"},"$CFG->dataroot/amos/var/MOODLE_xx.startat")," so that next time AMOS analyzes just new commits."),(0,r.kt)("h3",{id:"amos-script"},"AMOS script"),(0,r.kt)("p",null,"AMOS script allows us to propagate changes in the English language pack into other languages."),(0,r.kt)("p",null,"Sometimes we want to reorganize the English language pack - for example split a component into subcomponents (as happened with auth.php), rename string identifiers, fork a string according the meaning (for example, ",(0,r.kt)("inlineCode",{parentName:"p"},"fullname")," may be different when talking about a human and about a course) etc. Such a change can be easily done in English by direct editing and committing the ",(0,r.kt)("inlineCode",{parentName:"p"},"lang/en/*.php")," files. But the translation would get lost and our poor translators would have to translate such strings again."),(0,r.kt)("p",null,"There is a way to instruct AMOS to propagate a change in the English lang pack into all other languages at the given branch. We call that AMOS script (or ",(0,r.kt)("inlineCode",{parentName:"p"},"amosbler")," for the syntax similarity with the assembly language - assembler). Such a script can be uploaded or pasted into a page at AMOS portal and it will just follow the instructions provided. Or - which is more interesting - such a script can be put directly into the commit message of the commit that does the change in the English language pack. In that case, AMOS will automatically run the script right after it process the commit."),(0,r.kt)("p",null,"Here is an example of a script that instruct AMOS to process a set of bulk operations over language packages:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"AMOS BEGIN\n MOV [description,mod_workshop],[intro,mod_workshop]\n CPY [submission,mod_assignment],[submission,mod_workshop]\n HLP forum/forumtype.html,[forumtype_hlp,mod_forum]\nAMOS END\n")),(0,r.kt)("p",null,"In this example, there are three instuctions to be done. The line with ",(0,r.kt)("inlineCode",{parentName:"p"},"MOV")," ('move') command instructs AMOS to rename the string 'description' defined in workshop to the new identifier 'intro'. The second command ",(0,r.kt)("inlineCode",{parentName:"p"},"CPY")," ('copy') orders to create new string in the workshop module with the identifier 'submission' and the value of that string shall be taken from the ",(0,r.kt)("inlineCode",{parentName:"p"},"$string['submission']")," in the module assignment. If such string already exists in any language, ",(0,r.kt)("inlineCode",{parentName:"p"},"CPY")," will not replace it. The third command is used for migrating legacy HTML help files into ordinary strings. It tells AMOS to add ",(0,r.kt)("inlineCode",{parentName:"p"},"new $string['forumtype_hlp']")," in every language, using the content of the help file ",(0,r.kt)("inlineCode",{parentName:"p"},"forum/forumtype.html")," as the initial value."),(0,r.kt)("p",null,"The script syntax is defined as follows. Note that amosbler keywords are case sensitive so must be upper-case. In pseudo-regexp, the valid AMOS script is defined as:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"^[:blank:]*AMOS BEGIN[:blank:]*$\n^[:blank:]*[A-Z]{3}[:blank:]+(param1),[:blank:]*(param2), ...,[:blank:]*(paramn)[:blank:]$\n...\n^[:blank:]*AMOS END[:blank:]*$\n")),(0,r.kt)("p",null,"In human language, this roughly means: the script is a block of lines starting with ",(0,r.kt)("inlineCode",{parentName:"p"},"AMOS BEGIN")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"AMOS START")," and ending with ",(0,r.kt)("inlineCode",{parentName:"p"},"AMOS END")," lines. Every instruction is on its own line. Instruction has its name (three capital letters like ",(0,r.kt)("inlineCode",{parentName:"p"},"MOV"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"CPY"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"HLP"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"RPL"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"SMS")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"GRR"),") followed by comma-separated parameters."),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Beware")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Every string is referenced as ",(0,r.kt)("inlineCode",{parentName:"p"},"[stringid,component]")," ",(0,r.kt)("strong",{parentName:"p"},"but the component is different from what we use in get_string()"),". All components use fully normalized ",(0,r.kt)("inlineCode",{parentName:"p"},"plugintype_pluginname")," syntax (see ",(0,r.kt)("inlineCode",{parentName:"p"},"normalize_component()")," function in ",(0,r.kt)("inlineCode",{parentName:"p"},"moodlelib"),"). If ",(0,r.kt)("inlineCode",{parentName:"p"},"plugintype === core")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"pluginname is empty (component 'core')"),", the strings are stored in ",(0,r.kt)("inlineCode",{parentName:"p"},"moodle.php"),"."))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"String identification in get_string()"),(0,r.kt)("th",{parentName:"tr",align:null},"String identification in AMOS"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"get_string('edit', 'moodle')"),(0,r.kt)("td",{parentName:"tr",align:null},"[edit,core]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"get_string('submit', 'assignment')"),(0,r.kt)("td",{parentName:"tr",align:null},"[submit,mod_assignment]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"get_string('grade_help', 'grades')"),(0,r.kt)("td",{parentName:"tr",align:null},"[grade_help,core_grades]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"get_string('send', 'message')"),(0,r.kt)("td",{parentName:"tr",align:null},"[send,core_message]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"get_string('hello', 'block_greetings')"),(0,r.kt)("td",{parentName:"tr",align:null},"[hello,block_greetings]")))),(0,r.kt)("p",null,"Currently planned/implemented AMOS script instructions are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"MOV ","[source]",",","[target]"),". Move the string. If the source ",(0,r.kt)("inlineCode",{parentName:"li"},"stringid")," is already defined in the target component, it is not replaced."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"CPY ","[source]",",","[target]"),". Copy the string. Works as ",(0,r.kt)("inlineCode",{parentName:"li"},"MOV")," but the source string is not touched."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"HLP component/helpfile.html,","[string]"),". Convert legacy HTML help file to the string"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"REM text"),". Allows to put a remark (comment), for example to describe a required operation that can't be achieved by current instruction set.")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Ideas for other future instructions: ",(0,r.kt)("inlineCode",{parentName:"p"},"RPL")," for replace (forced MOV), ",(0,r.kt)("inlineCode",{parentName:"p"},"SMS")," for sending a message, ",(0,r.kt)("inlineCode",{parentName:"p"},"GRR")," for something unknown yet but such instruction just must be there ;-)"))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"There are no instructions ",(0,r.kt)("inlineCode",{parentName:"p"},"DEL")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"ADD"),". AMOS automatically recognized new strings as well as their removal from the commit diffs."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Summary of using AMOS script in commit messages:")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Strings can be removed on the master branch easily by removing them from the strings file. No AMOS command is needed. Just make sure the string is not use elsewhere and do not remove the string from stable branches."))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The commit must modify some string file, AMOS would ignore the commit completely otherwise"),(0,r.kt)("li",{parentName:"ol"},"The script must be properly formatted as block of lines"),(0,r.kt)("li",{parentName:"ol"},"The strings must be identified in normalized syntax - the main difference is using core for ",(0,r.kt)("inlineCode",{parentName:"li"},"moodle.php")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"core_*")," prefix for components in ",(0,r.kt)("inlineCode",{parentName:"li"},"lang/en/*.php")),(0,r.kt)("li",{parentName:"ol"},"Note that it may take up to an hour that your commit is mirrored into git and then processed by AMOS")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"More information about commit message format: ",(0,r.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Commit_cheat_sheet#Include_AMOS_script_in_the_commit_if_needed"},"https://docs.moodle.org/dev/Commit_cheat_sheet#Include_AMOS_script_in_the_commit_if_needed")))),(0,r.kt)("h3",{id:"generating-installer-files"},"Generating installer files"),(0,r.kt)("p",null,"Implemented, not automated yet"),(0,r.kt)("p",null,"See ",(0,r.kt)("inlineCode",{parentName:"p"},"cli/export-installer.php"),"."),(0,r.kt)("h2",{id:"deployment-settings"},"Deployment settings"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# crontab -l\n0,30 01-23 * * * /usr/local/bin/amos-update > /tmp/amos-update.log\n0    0     * * * /usr/bin/php /var/www/htdocs/moodle-amos/local/amos/cli/rev-clean.php --full > /tmp/amos-full-rev-clean.log\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"#!/bin/bash\n\n# /usr/local/bin/amos-update\n# Updates AMOS working repositories and registers changes\n# To be run regularly after git sync\n\nAMOSCLIDIR=/var/www/htdocs/moodle-amos/local/amos/cli\nAMOSREPOCORE=/var/www/data/moodle-amos/amos/repos/moodle\nAMOSREPOLANG=/var/www/data/moodle-amos/amos/repos/moodle-lang\nPHP=/usr/bin/php\n\ncd $AMOSREPOCORE && /usr/local/bin/git pull --quiet\ncd $AMOSREPOLANG && /usr/local/bin/git pull --quiet\n\n$PHP $AMOSCLIDIR/parse-core.php && $PHP $AMOSCLIDIR/parse-lang.php && $PHP $AMOSCLIDIR/rev-clean.php\n")))}u.isMDXComponent=!0},11239:function(e,t,a){a.d(t,{ci:function(){return h},e5:function(){return g}});var n=a(67294),i=a(39960),r=a(70891),o=a(18987),l=a(69661),s=a(98181);function m(e){return n.createElement("div",{key:"Person:"+e.name},function(e){return e.githubUsername?n.createElement(r.ZP,{alignItems:"flex-start",key:e.key},n.createElement(o.Z,null,n.createElement(l.Z,{src:"https://avatars.githubusercontent.com/"+e.githubUsername})),n.createElement(i.Z,{to:"https://github.com/"+e.githubUsername},n.createElement(s.Z,{primary:e.name,secondary:e.githubUsername}))):n.createElement(n.Fragment,null,e.name)}(e))}var d="projecttable_Zy3x",p=a(78462);function h(e){return t=g(e.projectName),n.createElement("table",{className:d},n.createElement("tbody",null,n.createElement("tr",null,n.createElement("th",null,"Owners"),n.createElement("td",null,(l=t.owners)?n.createElement(p.Z,null,l):null)),n.createElement("tr",null,n.createElement("th",null,"Status"),n.createElement("td",null,(o=t.status,n.createElement(n.Fragment,null,o)))),(null==(a=t.discussionLinks)?void 0:a.length)>0&&n.createElement("tr",null,n.createElement("th",null,"Links"),n.createElement("td",null,t.discussionLinks.map((function(e){var t=e.link,a=e.title;return n.createElement("div",{key:a},n.createElement(i.Z,{to:t},a))})))),(null==(r=t.issueLinks)?void 0:r.length)>0&&n.createElement("tr",null,n.createElement("th",null,"Issues"),n.createElement("td",null,t.issueLinks.map((function(e){var t=e.link,a=e.title;return n.createElement("div",{key:a},n.createElement(i.Z,{to:t},a))}))))));var t,a,r,o,l}var c=JSON.parse('{"q":{"docs/migration":{"title":"Dev Docs Migration","status":"In Progress","owners":[{"name":"Andrew Lyons","githubUsername":"andrewnicols"},{"name":"Sara Arjona","githubUsername":"sarjona"}],"discussionLinks":[{"link":"https://moodle.org/mod/forum/discuss.php?d=433613","title":"Announcement"}]},"api/string-deprecation":{"title":"String deprecation","status":"Complete","owners":[{"name":"Marina Glancy","githubUsername":"marinaglancy"}],"issueLinks":[{"link":"https://tracker.moodle.org/browse/MDL-46585","title":"MDL-46585"}]},"api/amos":{"title":"Automated Manipulation of Strings (AMOS)","status":"Complete","owners":[{"name":"David Mudrak","githubUsername":"mudrd8mz"}],"discussionLinks":[{"link":"http://moodle.org/mod/forum/discuss.php?d=118707#p542197","title":"Discussion"}],"issueLinks":[{"link":"https://tracker.moodle.org/browse/MDL-18797","title":"MDL-18797"}]}}}'),g=function(e){if(!c.q[e])throw new Error("Unknown project "+e);var t=c.q[e];return{projectName:e,title:t.title,owners:t.owners.map((function(e){return m(e)})),status:t.status,issueLinks:t.issueLinks,discussionLinks:t.discussionLinks}}},70544:function(e,t,a){t.Z=a.p+"assets/images/lang20amosflow-9240549857943e11e784322c3d77e170.png"},50818:function(e,t,a){t.Z=a.p+"assets/images/lang20amosflow2-391fd99d50c5ca4cf2840522c8fa9001.png"}}]);