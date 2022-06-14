"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[56467],{70068:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return u}});var o=a(83117),r=a(80102),l=(a(67294),a(3905)),n=a(13904),i=["components"],s={title:"Moodle 3.3",tags:["Release notes","Moodle 3.3"],sidebar_position:-303,moodleVersion:"3.3"},p=void 0,m={unversionedId:"releases/3.3",id:"releases/3.3",title:"Moodle 3.3",description:"Release date: 15 May 2017",source:"@site/general/releases/3.3.md",sourceDirName:"releases",slug:"/releases/3.3",permalink:"/devdocs/general/releases/3.3",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/3.3.md",tags:[{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"},{label:"Moodle 3.3",permalink:"/devdocs/general/tags/moodle-3-3"}],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1655176443,formattedLastUpdatedAt:"14/06/2022",sidebarPosition:-303,frontMatter:{title:"Moodle 3.3",tags:["Release notes","Moodle 3.3"],sidebar_position:-303,moodleVersion:"3.3"},sidebar:"releaseNotes",previous:{title:"Moodle 3.4.9",permalink:"/devdocs/general/releases/3.4/3.4.9"},next:{title:"Moodle 3.3.1",permalink:"/devdocs/general/releases/3.3/3.3.1"}},d={},u=[{value:"Server requirements",id:"server-requirements",level:2},{value:"Database requirements",id:"database-requirements",level:3},{value:"Client requirements",id:"client-requirements",level:2},{value:"Browser support",id:"browser-support",level:3},{value:"Major features",id:"major-features",level:2},{value:"Highlights",id:"highlights",level:3},{value:"For teachers",id:"for-teachers",level:3},{value:"Backup and restore",id:"backup-and-restore",level:3},{value:"For administrators",id:"for-administrators",level:3},{value:"Plugins removal and deprecation",id:"plugins-removal-and-deprecation",level:4},{value:"Mobile app support",id:"mobile-app-support",level:3},{value:"Other improvements",id:"other-improvements",level:3},{value:"For developers",id:"for-developers",level:3},{value:"Upgrading plugins",id:"upgrading-plugins",level:4},{value:"Translations",id:"translations",level:2}],h={toc:u};function c(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,o.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(n.Z,(0,o.Z)({frontMatter:s},void 0!==m?{metadata:m}:{},{mdxType:"MoodlePageBanner"})),(0,l.kt)("p",null,"Release date: 15 May 2017"),(0,l.kt)("p",null,"Here is ",(0,l.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=project+%3D+mdl+AND+resolution+%3D+fixed+AND+fixVersion+in+%28%223.3%22%29+ORDER+BY+priority+DESC&runQuery=true&clear=true"},"the full list of fixed issues in 3.3"),"."),(0,l.kt)("p",null,"See our ",(0,l.kt)("a",{parentName:"p",href:"https://docs.moodle.org/33/en/New_features"},"New Features page")," for a more user-friendly introduction to Moodle 3.3 with screenshots."),(0,l.kt)("p",null,"If you are upgrading from previous version, make sure you read the ",(0,l.kt)("a",{parentName:"p",href:"https://docs.moodle.org/33/en/Upgrading"},"Upgrading")," documentation."),(0,l.kt)("h2",{id:"server-requirements"},"Server requirements"),(0,l.kt)("p",null,"These are just the minimum supported versions. We recommend keeping all of your software up-to-date."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Moodle upgrade:  Moodle 2.7 or later (if upgrading from earlier versions, you must upgrade to 2.7.14 as a first step)"),(0,l.kt)("li",{parentName:"ul"},"PHP version: minimum PHP 5.6.5. ",(0,l.kt)("em",{parentName:"li"},"Note: minimum PHP version has increased since Moodle 3.1"),". PHP 7.0.x and 7.1.x are supported but have some ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Moodle_and_PHP7#Can_I_use_PHP7_yet.3F"},"engine limitations"),"."),(0,l.kt)("li",{parentName:"ul"},"PHP extensions ",(0,l.kt)("strong",{parentName:"li"},"openssl")," and ",(0,l.kt)("strong",{parentName:"li"},"fileinfo")," are now required in Moodle 3.3 (they were recommended in 3.2)"),(0,l.kt)("li",{parentName:"ul"},"If you use PostgreSQL the minimum supported version is now 9.3 (was 9.1 in Moodle 3.2)"),(0,l.kt)("li",{parentName:"ul"},"(Recommendation only) If you use MySQL or MariaDB, make sure your database supports full UTF-8 (utf8mb4) if you install a new instance of Moodle. CLI script may be used to convert to utf8mb4 if you're upgrading. You may choose to keep using 'utf8_*', but then a warning will show that the database isn't using full UTF-8 support and suggest moving to 'utf8mb4_unicode_ci'. See ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/MySQL_full_unicode_support"},"MySQL full unicode support")," for details.")),(0,l.kt)("h3",{id:"database-requirements"},"Database requirements"),(0,l.kt)("p",null,"Moodle supports the following database servers. Again, version numbers are just the minimum supported version. We recommend running the latest stable version of any software."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Database"),(0,l.kt)("th",{parentName:"tr",align:null},"Minimum version"),(0,l.kt)("th",{parentName:"tr",align:null},"Recommended"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"http://www.postgresql.org/"},"PostgreSQL")),(0,l.kt)("td",{parentName:"tr",align:null},"9.3"),(0,l.kt)("td",{parentName:"tr",align:null},"Latest")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"http://www.mysql.com/"},"MySQL")),(0,l.kt)("td",{parentName:"tr",align:null},"5.5.31"),(0,l.kt)("td",{parentName:"tr",align:null},"Latest")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://mariadb.org/"},"MariaDB")),(0,l.kt)("td",{parentName:"tr",align:null},"5.5.31"),(0,l.kt)("td",{parentName:"tr",align:null},"Latest")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"http://www.microsoft.com/en-us/server-cloud/products/sql-server/"},"Microsoft SQL Server")),(0,l.kt)("td",{parentName:"tr",align:null},"2008"),(0,l.kt)("td",{parentName:"tr",align:null},"Latest")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"http://www.oracle.com/us/products/database/overview/index.html"},"Oracle Database")),(0,l.kt)("td",{parentName:"tr",align:null},"10.2"),(0,l.kt)("td",{parentName:"tr",align:null},"Latest")))),(0,l.kt)("h2",{id:"client-requirements"},"Client requirements"),(0,l.kt)("h3",{id:"browser-support"},"Browser support"),(0,l.kt)("p",null,"Moodle is compatible with any standards compliant web browser. We regularly test Moodle with the following browsers:"),(0,l.kt)("p",null,"Desktop:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Chrome"),(0,l.kt)("li",{parentName:"ul"},"Firefox"),(0,l.kt)("li",{parentName:"ul"},"Safari"),(0,l.kt)("li",{parentName:"ul"},"Edge"),(0,l.kt)("li",{parentName:"ul"},"Internet Explorer")),(0,l.kt)("p",null,"Mobile:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"MobileSafari"),(0,l.kt)("li",{parentName:"ul"},"Google Chrome")),(0,l.kt)("p",null,"For the best experience and optimum security, we recommend that you keep your browser up to date. ",(0,l.kt)("a",{parentName:"p",href:"https://whatbrowser.org"},"https://whatbrowser.org")),(0,l.kt)("p",null,"Note: Legacy browsers with known compatibility issues with Moodle 3.3:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Internet Explorer 10 and below"),(0,l.kt)("li",{parentName:"ul"},"Safari 7 and below")),(0,l.kt)("h2",{id:"major-features"},"Major features"),(0,l.kt)("h3",{id:"highlights"},"Highlights"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-55611"},"MDL-55611")," - New ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/33/en/Course_overview"},"Course overview")," dashboard block featuring timeline of events"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-58220"},"MDL-58220")," - Make use of ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/33/en/OAuth_2_services"},"OAuth 2 services")," to allow users to ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/33/en/OAuth_2_authentication"},"authenticate with Google G-Suite or Microsoft Office accounts")," and manage files from associated drives"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-39913"},"MDL-39913")," - New ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/33/en/Assignment_settings"},"Assignment setting")," for restricting submission file types"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-4782"},"MDL-4782")," - ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/33/en/Stealth_activities"},'"Stealth mode"')," for resources/activities in a course - not displayed on the course page but available for students"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-40759"},"MDL-40759")," - New Font Awesome icon font for all icons in Moodle")),(0,l.kt)("h3",{id:"for-teachers"},"For teachers"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-58138"},"MDL-58138")," - ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/33/en/Activity_completion_settings"},"Activity completion settings")," for setting activity completion defaults and bulk editing of completion requirements"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-48771"},"MDL-48771")," - ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/33/en/Building_Quiz"},"Quiz activity"),": Option to delete multiple questions"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-53814"},"MDL-53814")," - Quiz activity: Question type icons are displayed in the quiz manual grading overview"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-55459"},"MDL-55459")," - ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/33/en/Assignment_settings"},"Assignment activity"),": Annotated PDF comments are collapsible"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-23919"},"MDL-23919")," - ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/33/en/Database_activity_settings"},"Database activity"),': The setting "Required entries" is now an activity completion condition'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-57769"},"MDL-57769"),' - Topic and weeks course formats: After a course is created, sections can be added and removed only from the course page (it is no longer possible to have "orphaned" activities)'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-46929"},"MDL-46929"),", ",(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-57456"},"MDL-57456"),", ",(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-57457"},"MDL-57457")," - ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/33/en/Using_Forum"},"Forum posts"),", ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/33/en/Using_Glossary"},"glossary entries")," and ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/33/en/Book_settings"},"book chapters")," may be tagged"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-56251"},"MDL-56251")," - For courses in weekly format, a new ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/33/en/Course_settings"},"course setting")," allows for the course end date to be calculated automatically"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-47354"},"MDL-47354")," - Allow the page size in the Single view report to be configurable")),(0,l.kt)("h3",{id:"backup-and-restore"},"Backup and restore"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-34859"},"MDL-34859"),' - Add site defaults for all restore settings, improve UI around "Overwrite course configuration" select'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-40838"},"MDL-40838")," - Allow to restore non-default enrollment methods without restoring users"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-57769"},"MDL-57769")," - When restoring/importing big courses in Weeks and Topics formats into small existing courses ajust the number of sections automatically")),(0,l.kt)("h3",{id:"for-administrators"},"For administrators"),(0,l.kt)("p",null,"Please read carefully: ",(0,l.kt)("a",{parentName:"p",href:"https://docs.moodle.org/33/en/Upgrading#Possible_issues_that_may_affect_you_in_Moodle_3.3"},"Possible issues that may affect you in Moodle 3.3")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-46375"},"MDL-46375")," - Support for storing files not on the local drive (there are no open-source solutions at the moment, developer's help is required to implement custom cloud storage)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-55528"},"MDL-55528"),", ",(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-58280"},"MDL-58280")," - New ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/33/en/Document_converters"},"document converter")," plugin type allows alternatives to unoconv, such as the ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/33/en/Google_Drive_converter"},"Google Drive converter")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-55980"},"MDL-55980")," - Run individual scheduled tasks from web interface"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-57896"},"MDL-57896")," - CLI wrapper for get_config() and set_config() methods"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-57789"},"MDL-57789")," - Use Cache-Control: immutable when serving files"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-37765"},"MDL-37765")," - New capability to bypass access restrictions, separated from capability to view hidden activities"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-57913"},"MDL-57913")," - Convert external database authentication synchronisation to scheduled task")),(0,l.kt)("h4",{id:"plugins-removal-and-deprecation"},"Plugins removal and deprecation"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The repository Skydrive is deprecated; please migrate to the newer ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/33/en/OneDrive_repository"},"OneDrive repository")),(0,l.kt)("li",{parentName:"ul"},"The Dashboard block Course overview is replaced with a new block ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/33/en/Course_overview"},"Course overview")," which is a different plugin. If you want to use the old block, you need to download and install it from ",(0,l.kt)("a",{parentName:"li",href:"https://moodle.org/plugins/block_course_overview"},"https://moodle.org/plugins/block_course_overview"))),(0,l.kt)("h3",{id:"mobile-app-support"},"Mobile app support"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-57410"},"MDL-57410")," - Allow admins to add new external links to pages in the main menu of the Mobile app"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-57408"},"MDL-57408")," - Add new settings for allowing renaming strings in the Mobile app"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-49423"},"MDL-49423")," - Add new settings for disabling Mobile app functionalities"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-57759"},"MDL-57759")," - Allow offline attempts via the Mobile app in the lesson module"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-57162"},"MDL-57162")," - Support Native App install banners for Android as well as iOS for the mobile app")),(0,l.kt)("h3",{id:"other-improvements"},"Other improvements"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-33483"},"MDL-33483")," - Google Docs repository: Save Doc files in different formats to RTF"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-42266"},"MDL-42266")," - Improve the list of maximum file size options for file uploads"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-51853"},"MDL-51853")," - Calendar subscriptions from imported files should be editable"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-41729"},"MDL-41729")," - Add ability to change passwords for users using Shibboleth"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-57572"},"MDL-57572"),", ",(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-57570"},"MDL-57570"),", ",(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-57355"},"MDL-57355")," - Redis and static caches performance improvements if igbinary library is installed"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-56808"},"MDL-56808")," - SCORM module: Performance improvements when running SCORM 1.2 packages"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-57686"},"MDL-57686")," - Add support for PDO databases in external database authentication"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-57638"},"MDL-57638")," - RSS Block: RSS feeds are more heavily cached and correctly respect skip values")),(0,l.kt)("h3",{id:"for-developers"},"For developers"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-55528"},"MDL-55528")," - New plugin type 'fileconverter' for file conversions, unoconv is now a plugin that can be replaced with scalable commercial solutions (see ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/File_Converters"},"File Converters"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-40759"},"MDL-40759")," - Font Awesome icon font is used for all icons in Moodle (see ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Moodle_icons#Font_awesome_icons"},"Moodle icons"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-46375"},"MDL-46375")," - Support for storing files not on the local drive is implemented by allowing to override functionality of file_storage and stored_file classes (see ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/File_System_API"},"File System API"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-12689"},"MDL-12689")," - Convert all authentication plugins to use settings.php (see ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v3.3.0/auth/upgrade.txt"},"upgrade.txt"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-53978"},"MDL-53978")," - Add extra plugin callbacks for every major stage of page render (see ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/commit/5ebd1fb9768969956c9131df4274f9cdff7f0134"},"commit"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-58138"},"MDL-58138")," - Course modules may provide additional callbacks to participate in bulk editing of activities completion rules in a course"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-58220"},"MDL-58220")," - Better office integration"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-45584"},"MDL-45584")," - Multiple caches can be instantiated with the same definition but with different identifiers"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-57769"},"MDL-57769")," - Course formats: Attribute 'numsections' was removed from topics and weeks, other course formats may want to implement similar changes"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-55956"},"MDL-55956")," - Priority field for the calendar events allowing to specify the priority of overrides"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-58566"},"MDL-58566")," - New methods for retrieving calendar events"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-55941"},"MDL-55941")," - New element to select first name of first/last names is implemented in tablelib or can be used by developers elsewhere (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v3.3.0/lib/templates/initials_bar.mustache"},"template"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-56519"},"MDL-56519")," - Lint behat .feature files"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-57273"},"MDL-57273")," - New classes (core\\persistent, core\\form\\persistent, core\\external\\exporter, \\core\\external\\persistent_exporter) used to represent a data-model and export that data in a standard format for webservices (previously was used in competencies) (see ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Persistent_form"},"Persistent form"),", ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Persistent"},"Persistent"),", ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Exporter"},"Exporter"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-57490"},"MDL-57490")," - Removed several legacy JS functions from ",(0,l.kt)("inlineCode",{parentName:"li"},"javascript-static.js")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-57690"},"MDL-57690")," - mcore YUI rollup is no longer included on every single Moodle page (see ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/https///moodle.org/mod/forum/discuss.php?d=346520_forum_post"},"//moodle.org/mod/forum/discuss.php?d=346520 forum post"),")")),(0,l.kt)("h4",{id:"upgrading-plugins"},"Upgrading plugins"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"1. Check for changes in core APIs")),(0,l.kt)("p",null,"Read lib/upgrade.txt to check for the deprecations and core API changes, make sure you applied them to your plugin. Note that entries there are not sorted by priority but rather by integration time. Below is the list of upgrade.txt files that contain information about upgrading from Moodle 3.2 to Moodle 3.3 (note that if you upgrade from earlier versions there may be more files):"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v3.3.0/lib/upgrade.txt"},"lib/upgrade.txt")," changes to various core APIs, deprecations, functions removal"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v3.3.0/admin/upgrade.txt"},"admin/upgrade.txt")," changes to administration-related functions"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v3.3.0/cache/upgrade.txt"},"cache/upgrade.txt")," changes to Cache API"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v3.3.0/calendar/upgrade.txt"},"calendar/upgrade.txt")," changes to Calendar API"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v3.3.0/competency/upgrade.txt"},"competency/upgrade.txt")," changes to Competency API"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v3.3.0/course/upgrade.txt"},"course/upgrade.txt")," changes to course-related functions")),(0,l.kt)("p",null,"For the next releases we are thinking about improving the format of upgrade.txt notes, please have your say on policy issue ",(0,l.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/browse/MDL-58879"},"MDL-58879")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"2. Check for changes in the API of your plugin type")),(0,l.kt)("p",null,"Below is the list of plugin types that had API changes between Moodle 3.2 and 3.3:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v3.3.0/auth/upgrade.txt"},"auth/upgrade.txt")," Authentication plugins"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v3.3.0/blocks/upgrade.txt"},"blocks/upgrade.txt")," Block plugins"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v3.3.0/course/format/upgrade.txt"},"course/format/upgrade.txt")," Course format plugins"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v3.3.0/enrol/upgrade.txt"},"enrol/upgrade.txt")," Enrolment method plugins"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v3.3.0/media/upgrade.txt"},"media/upgrade.txt")," Media player plugins"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v3.3.0/mod/upgrade.txt"},"mod/upgrade.txt")," Activity module plugins"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v3.3.0/question/type/upgrade.txt"},"question/type/upgrade.txt")," Question types plugins"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v3.3.0/repository/upgrade.txt"},"repository/upgrade.txt")," Repository plugins"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v3.3.0/theme/upgrade.txt"},"theme/upgrade.txt")," Themes")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"3. Check for changes in the depended plugins")),(0,l.kt)("p",null,"If your plugin depends on another plugin or calls methods from another plugin, read upgrade.txt in this plugin directory (if it exists). Below is the list of standard plugins that had changes between Moodle 3.2 and 3.3:"),(0,l.kt)("p",null,"Due to changes in Authentication plugins settings all standard auth plugins were updated: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/moodle/moodle/blob/v3.3.0/auth/cas/upgrade.txt"},"auth_cas"),", ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/moodle/moodle/blob/v3.3.0/auth/db/upgrade.txt"},"auth_db"),", ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/moodle/moodle/blob/v3.3.0/auth/email/upgrade.txt"},"auth_email"),", ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/moodle/moodle/blob/v3.3.0/auth/fc/upgrade.txt"},"auth_fc"),", ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/moodle/moodle/blob/v3.3.0/auth/imap/upgrade.txt"},"auth_imap"),", ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/moodle/moodle/blob/v3.3.0/auth/ldap/upgrade.txt"},"auth_ldap"),", ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/moodle/moodle/blob/v3.3.0/auth/manual/upgrade.txt"},"auth_manual"),", ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/moodle/moodle/blob/v3.3.0/auth/mnet/upgrade.txt"},"auth_mnet"),", ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/moodle/moodle/blob/v3.3.0/auth/nntp/upgrade.txt"},"auth_nntp"),", ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/moodle/moodle/blob/v3.3.0/auth/none/upgrade.txt"},"auth_none"),", ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/moodle/moodle/blob/v3.3.0/auth/pam/upgrade.txt"},"auth_pam"),", ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/moodle/moodle/blob/v3.3.0/auth/pop3/upgrade.txt"},"auth_pop3"),", ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/moodle/moodle/blob/v3.3.0/auth/shibboleth/upgrade.txt"},"auth_shibboleth")),(0,l.kt)("p",null,"Other standard plugins that were updated in 3.3: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/moodle/moodle/blob/v3.3.0/admin/tool/lp/upgrade.txt"},"tool_lp"),", ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/moodle/moodle/blob/v3.3.0/admin/tool/mobile/upgrade.txt"},"tool_mobile"),", ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/moodle/moodle/blob/v3.3.0/enrol/ldap/upgrade.txt"},"enrol_ldap"),", ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/moodle/moodle/blob/v3.3.0/mod/assign/upgrade.txt"},"mod_assign"),", ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/moodle/moodle/blob/v3.3.0/mod/data/upgrade.txt"},"mod_data"),", ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/moodle/moodle/blob/v3.3.0/mod/feedback/upgrade.txt"},"mod_feedback"),", ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/moodle/moodle/blob/v3.3.0/mod/forum/upgrade.txt"},"mod_forum"),", ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/moodle/moodle/blob/v3.3.0/mod/lesson/upgrade.txt"},"mod_lesson")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"4. Do a smoke test of your plugin with developer debugging mode")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"5. Run all behat and phpunit tests")),(0,l.kt)("h2",{id:"translations"},"Translations"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_3.3"},"Notes de mise \xe0 jour de Moodle 3.3")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/es/Notas_de_Moodle_3.3"},"Notas de Moodle 3.3"))))}c.isMDXComponent=!0}}]);