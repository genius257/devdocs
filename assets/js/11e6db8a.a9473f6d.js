"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[11563],{26513:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return d},default:function(){return c},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return m}});var n=a(83117),r=a(80102),s=(a(67294),a(3905)),i=a(13904),l=["components"],o={title:"Tracker issue labels",sidebar_label:"Issue labels",tags:["Tracker"]},d=void 0,p={unversionedId:"development/tracker/labels",id:"development/tracker/labels",title:"Tracker issue labels",description:"The Moodle Tracker allows issues to be labelled with tags. This page lists common labels that we use to flag aspects about our MDL issues (bugs and feature requests about Moodle itself).",source:"@site/general/development/tracker/labels.md",sourceDirName:"development/tracker",slug:"/development/tracker/labels",permalink:"/devdocs/general/development/tracker/labels",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/development/tracker/labels.md",tags:[{label:"Tracker",permalink:"/devdocs/general/tags/tracker"}],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1655176443,formattedLastUpdatedAt:"14/06/2022",frontMatter:{title:"Tracker issue labels",sidebar_label:"Issue labels",tags:["Tracker"]},sidebar:"process",previous:{title:"Guide",permalink:"/devdocs/general/development/tracker/guide"},next:{title:"Tips & tricks",permalink:"/devdocs/general/development/tracker/tips/"}},u={},m=[{value:"Labels",id:"labels",level:2},{value:"See also",id:"see-also",level:2}],h={toc:m};function c(e){var t=e.components,a=(0,r.Z)(e,l);return(0,s.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(i.Z,(0,n.Z)({frontMatter:o},void 0!==p?{metadata:p}:{},{mdxType:"MoodlePageBanner"})),(0,s.kt)("p",null,"The Moodle Tracker allows issues to be ",(0,s.kt)("strong",{parentName:"p"},"labelled with tags"),". This page lists common labels that we use to flag aspects about our MDL issues (bugs and feature requests about Moodle itself)."),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Labels can only be added by a user with permission to edit an issue, that is the issue reporter, members of the developers group, or members of certain other groups."))),(0,s.kt)("h2",{id:"labels"},"Labels"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"triaged"),(0,s.kt)("br",null),"\nThis is set after a bug has been ",(0,s.kt)("a",{parentName:"p",href:"/general/development/process/triage"},"triaged"),' by component lead or HQ developer. It indicates that the issue has been confirmed, with basic fields like "Priority" checked, and is now ready for a developer to look at.')),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/issues/?jql=labels%20in%20(triaging_in_progress)"},(0,s.kt)("inlineCode",{parentName:"a"},"triaging_in_progress")),(0,s.kt)("br",null),"\nUsed to flag issues that are being triaged (sometimes an ongoing process for days or weeks). When the issue has been triaged the label should be removed and a ",(0,s.kt)("inlineCode",{parentName:"p"},"triaged")," label should be added or when the issue is closed.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"mdlqa"),(0,s.kt)("br",null),"\nUsed to flag that an issue is a direct result of a ",(0,s.kt)("a",{parentName:"p",href:"/general/development/process/testing/qa"},"Moodle QA test"),", conducted just before major releases. The bug should also be linked to the original MDLQA test, so that developers/integrators can reset the original MDLQA test (for re-testing) when the MDL issue is fixed. Once all the related MDLQA tests are passing the label can be deleted.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"mdlqa_conversion"),(0,s.kt)("br",null),"\nUsed to flag MDL issues that are converting MDLQA issues to behat features. The bug should also be linked to the MDLQA test being converted. Useful to know what's going and exclude some issues from manual QA. Once the MDL issue has been closed and the MDLQA has been moved to ",(0,s.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/browse/MDLQA-5249"},"MDLQA-5249"),", the label can be deleted.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/issues/?jql=labels%20%3D%20unit_test_required"},(0,s.kt)("inlineCode",{parentName:"a"},"unit_test_required")),(0,s.kt)("br",null),"\nUsed to flag issues that should have their own unit tests.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/issues/?jql=labels%20%3D%20acceptance_test_required"},(0,s.kt)("inlineCode",{parentName:"a"},"acceptance_test_required")),(0,s.kt)("br",null),"\nUsed to flag issues that should be regularly tested using the behat framework ",(0,s.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Acceptance_testing"},"Acceptance testing"),". Before a major release these issues will be reviewed and new feature files will be added.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/issues/?jql=labels%20%3D%20qa_test_required"},(0,s.kt)("inlineCode",{parentName:"a"},"qa_test_required")),(0,s.kt)("br",null),'\nUsed to flag issues that cannot be covered by automated tests. When adding the label, a comment should be also added advising exactly what needs covering in the QA test, for example "steps 6-10 in testing instructions".')),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/issues/?jql=labels%20%3D%20qa_identified"},(0,s.kt)("inlineCode",{parentName:"a"},"qa_identified")),(0,s.kt)("br",null),"\nUsed to flag issues identified in QA testing which we were not able to fix before the release. Hopefully such issues can be worked on shortly after release, removing the label once the issue is fixed.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/issues/?jql=labels%20%3D%20docs_required"},(0,s.kt)("inlineCode",{parentName:"a"},"docs_required")),(0,s.kt)("br",null),"\nUsed to flag issues that have created a need for documentation work, such as new pages, changes, or even being added to upcoming release notes. Docs people will look for these issues periodically when working on documentation, removing the label once documentation has been written. For new features in the upcoming version of Moodle, please add documentation to the dev docs (adding a link to it from the tracker issue) or in a comment in the issue, then when the new version wiki is set up (3 weeks prior to release), the info can be transferred.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"cl_docs_required")," (",(0,s.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/issues/?jql=labels%20in%20(cl_docs_required)"},"all")," | ",(0,s.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/issues/?jql=labels%20in%20(cl_docs_required)%20AND%20assignee%20%3D%20currentUser()"},"yours"),")",(0,s.kt)("br",null),"\nUsed to flag issues that contain features which need to be documented in the ",(0,s.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Component_Library"},"Component Library"),". The responsibility of creating/updating Component Library documentation falls to the developer assigned to each relevant issue. Normally the relevant documentation should be included in the issue, but in some cases this will not be the case. When the issue is resolved and component library documentation was not included, a new issue should be created for the Component Library changes, linking using the ",(0,s.kt)("strong",{parentName:"p"},"Documents")," and ",(0,s.kt)("strong",{parentName:"p"},"is documented by")," issue links, and the ",(0,s.kt)("inlineCode",{parentName:"p"},"cl_docs_required")," label should be removed from the issue.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"dev_docs_required")," (",(0,s.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/issues/?jql=labels%20in%20(dev_docs_required)"},"all")," | ",(0,s.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/issues/?jql=labels%20in%20(dev_docs_required)%20AND%20assignee%20%3D%20currentUser()"},"yours"),")",(0,s.kt)("br",null),"\nUsed to flag issues that need to be noted in the dev docs. The responsibility of creating/updating Dev docs falls to the developer assigned to each relevant issue. When the issue is resolved, documentation should be created/updated, an appropriate URL should be added to the ",(0,s.kt)("strong",{parentName:"p"},"Documentation link")," field of the issue and the ",(0,s.kt)("inlineCode",{parentName:"p"},"dev_docs_required")," label should be removed from the issue.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"integration_held"),(0,s.kt)("br",null),"\nUsed to flag issues already sent to integration that, for any cause, have been postponed to next cycles. Used only by integrators when there is some dependency or time-period causing one issue not being immediately integrable. Must be cleaned when the held is over.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"unhold_requested"),(0,s.kt)("br",null),"\nUsed to ask for an issue (having the ",(0,s.kt)("inlineCode",{parentName:"p"},"integration_held")," label) to become unblocked, this flag must be coupled with a reasoned comment. Anybody can use it as far as repeated requests are avoided. Development managers will decide ASAP about giving the issue an integration opportunity or keeping it held. See ",(0,s.kt)("a",{parentName:"p",href:"../process/integration-review#during-continuous-integrationfreezeqa-period"},"During continuous integration.2FFreeze.2FQA period"),".")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"security_held"),(0,s.kt)("br",null),"\nUsed to flag security issues that have been reviewed by integrators already but held from integration repository. These issues must be cleared during point releases.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"security_benefit"),(0,s.kt)("br",null),"\nUsed to flag issues which help to improve the security of Moodle, but are not directly exploitable security bugs (and therefore do not have a security level assigned). For example, ",(0,s.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/browse/MDL-66775"},"MDL-66775")," and ",(0,s.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/browse/MDL-65443"},"MDL-65443"),".")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"partner"),(0,s.kt)("br",null),"\nMoodle Partners apply this label to flag issues that are important to their clients. The Moodle HQ dev team takes this label into consideration when setting roadmap and bug fixing priorities.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"patch"),(0,s.kt)("br",null),"\nThis label indicates that a solution (patch) has been attached to the issue. However, if you can, it may be better to submit the issue for peer review, rather than using this label. This is useful to component leads and Moodle HQ when deciding what to work on next.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"cime"),(0,s.kt)("br",null),"\nA developer can add the ",(0,s.kt)("inlineCode",{parentName:"p"},"cime")," label to an issue to request that CiBot perform an ",(0,s.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Automated_code_review"},"Automated code review"),".")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/issues/?jql=labels%20%3D%20performance%20AND%20project%20%3D%20MDL"},(0,s.kt)("inlineCode",{parentName:"a"},"performance")),(0,s.kt)("br",null),"\nUsed to flag any issues that developers think may affect Moodle's performance in some way (positively or negatively).")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/issues/?jql=labels%20%3D%20ui_change"},(0,s.kt)("inlineCode",{parentName:"a"},"ui_change")),(0,s.kt)("br",null),"\nUsed to identify issues that affect the interface presented to users. This label will usually be added together with the ",(0,s.kt)("inlineCode",{parentName:"p"},"docs_required")," label, but the ",(0,s.kt)("inlineCode",{parentName:"p"},"ui_change")," will remain permanently with the issue, while the ",(0,s.kt)("inlineCode",{parentName:"p"},"docs_required")," label is removed after docs are created. This label is searched for during the preparation of release notes.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/issues/?jql=labels%20%3D%20%22ux_review_required%22"},(0,s.kt)("inlineCode",{parentName:"a"},"ux_review_required")),(0,s.kt)("br",null),"\nUsed to identify issues that require review by Moodle HQ UX designers. This label will usually be added to issues that involve more than a trivial UI or workflow change, to ensure UX best practice is applied, with a consistent and human centered design approach. Adding this label will ensure the issue is placed on the UX backlog for review and input.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"api_change"),(0,s.kt)("br",null),"\nUsed to identify API changes. This label will usually be added together with the ",(0,s.kt)("inlineCode",{parentName:"p"},"dev_docs_required")," label, but the ",(0,s.kt)("inlineCode",{parentName:"p"},"api_change")," will remain permanently with the issue, while the ",(0,s.kt)("inlineCode",{parentName:"p"},"dev_docs_required")," label is removed after docs are created. This label is searched for during the preparation of release notes.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/issues/?jql=labels%20%3D%20release_notes"},(0,s.kt)("inlineCode",{parentName:"a"},"release_notes")),(0,s.kt)("br",null),"\nUsed to identify all issues to be listed in the release notes (minor or major).")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/issues/?jql=labels%20%3D%20upgrade_notes"},(0,s.kt)("inlineCode",{parentName:"a"},"upgrade_notes")),(0,s.kt)("br",null),"\nIssues that need to be mentioned in the user documentation [under 'Possible issues that may affect you in Moodle X.0' (major versions).")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"lost_functionality"),(0,s.kt)("br",null),"\nUsed to identify issues describing functionality which was available in an earlier version but which is no longer available in the latest version.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/issues/?jql=labels%20%3D%20%20test_server_required"},(0,s.kt)("inlineCode",{parentName:"a"},"test_server_required")),(0,s.kt)("br",null),"\nUsed to identify QA tests which can't be tested on the ",(0,s.kt)("a",{parentName:"p",href:"http://qa.moodle.net"},"QA testing site")," such as upgrade testing.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/issues/?jql=labels%20%3D%20credentials_required"},(0,s.kt)("inlineCode",{parentName:"a"},"credentials_required")),(0,s.kt)("br",null),"\nUsed to identify QA tests which require the tester to enter credentials such as a client ID and secret for configuring OAuth 2.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"new"),(0,s.kt)("br",null),"\nUsed to identify new tests in the current QA cycle for volunteers from the community to use as a basis for exploratory testing.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/issues/?jql=labels%20%3D%20addon_candidate"},(0,s.kt)("inlineCode",{parentName:"a"},"addon_candidate")),(0,s.kt)("br",null),"\nUsed to identify suggestions for improvements/new features as possible candidates for add-on development. New and willing developers can be directed to these issues for projects.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"affects_mobileapp"),(0,s.kt)("br",null),"\nUsed to identify MDL issues that may affect the mobile app. It should be used when adding new features to functionalities supported by the app or when doing changes in existing ones. Examples are: ",(0,s.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/browse/MDL-372"},"MDL-372")," and ",(0,s.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/browse/MDL-38158"},"MDL-38158"),".")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"affects_moodlecloud"),(0,s.kt)("br",null),"\nUsed to identify MDL issues that may affect Moodlecloud.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"affects_workplace"),(0,s.kt)("br",null),"\nUsed to identify MDL issues that may affect Moodle Workplace.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"needs_user_stories"),(0,s.kt)("br",null),"\nUsed to identify issues that require further clarification of the requirements through adding user stories.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/issues/?filter=21824"},(0,s.kt)("inlineCode",{parentName:"a"},"ready_for_integration")),(0,s.kt)("br",null),"\nUsed to identify issues that already have been peer-reviewed but the user lacks permissions (pull-requester) to send the issue to integration. Any pull-requester can, on peer-reviewer's behalf, proceed with the transition. The label is removed once the issue has been transitioned.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"contribfriendly"),(0,s.kt)("br",null),"\nUsed to identify MOBILE issues that are a good starting point for developers that want to start contributing to the Moodle app."))),(0,s.kt)("h2",{id:"see-also"},"See also"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"../tracker"},"Tracker")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"../process/triage"},"Bug triage"))))}c.isMDXComponent=!0}}]);