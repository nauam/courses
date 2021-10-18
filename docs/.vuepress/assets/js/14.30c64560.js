(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{376:function(e,t,o){"use strict";o.r(t);var a=o(41),v=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"job-workflows"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#job-workflows"}},[e._v("#")]),e._v(" "),o("em",[e._v("Job")]),e._v(" Workflows")]),e._v(" "),o("p",[e._v("The "),o("em",[e._v("Job")]),e._v("'s most basic feature is its ability to execute one or more\n"),o("em",[e._v("steps")]),e._v(". This sequence of "),o("em",[e._v("steps")]),e._v(" is called a "),o("em",[e._v("workflow")]),e._v(".")]),e._v(" "),o("p",[e._v("The "),o("em",[e._v("steps")]),e._v(" of the "),o("em",[e._v("Job")]),e._v(" workflow are displayed when viewing a "),o("em",[e._v("Job")]),e._v("'s\ndetail from a "),o("em",[e._v("Job")]),e._v(" listing or within the "),o("em",[e._v("Job")]),e._v(" editor form.")]),e._v(" "),o("h2",{attrs:{id:"workflow-definition"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#workflow-definition"}},[e._v("#")]),e._v(" Workflow definition")]),e._v(" "),o("p",[e._v("Workflows can be defined within the QW Control graphical console or as an\nXML or YAML document that is loaded to the server.")]),e._v(" "),o("p",[e._v("The graphical console provides an authoring environment where "),o("em",[e._v("steps")]),e._v("\ncan be added, edited, removed or reordered.")]),e._v(" "),o("p",[e._v("Users preferring to define "),o("em",[e._v("Jobs")]),e._v(" in a text format should refer to the two format definitions:")]),e._v(" "),o("ul",[o("li",[e._v("XML: "),o("RouterLink",{attrs:{to:"/en/user-guide/document-format-reference/job-v20.html"}},[e._v("job-xml")])],1),e._v(" "),o("li",[e._v("YAML: "),o("RouterLink",{attrs:{to:"/en/user-guide/document-format-reference/job-yaml-v12.html"}},[e._v("job-yaml")])],1)]),e._v(" "),o("p",[e._v("It is also possible to author "),o("em",[e._v("Jobs")]),e._v(" inside the graphical console\nand then export the definition as a file using the\n"),o("code",[e._v("rd")]),e._v(" CLI tool ("),o("a",{attrs:{href:"https://qwsoftware.github.io/qwcontrol-cli/",target:"_blank",rel:"noopener noreferrer"}},[e._v("rd"),o("OutboundLink")],1),e._v("), or via the API.")]),e._v(" "),o("p",[e._v("See "),o("a",{attrs:{href:"#command-line-tools-and-api-access"}},[e._v("Command Line Tools and API Acccess")]),e._v(".")]),e._v(" "),o("h2",{attrs:{id:"workflow-control-settings"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#workflow-control-settings"}},[e._v("#")]),e._v(" Workflow control settings")]),e._v(" "),o("p",[e._v("Workflow execution is controlled by two important settings: "),o("em",[e._v("Handling a\nstep failure")]),e._v(" and "),o("em",[e._v("Strategy")]),e._v(".")]),e._v(" "),o("p",[o("img",{attrs:{src:"/assets/img/fig0401.png",alt:"Workflow controls"}})]),e._v(" "),o("p",[o("em",[e._v("If a step fails")]),e._v(": This manages what to do if a "),o("em",[e._v("step")]),e._v(" incurs an error:")]),e._v(" "),o("ul",[o("li",[e._v("Stop at the failed "),o("em",[e._v("step")]),e._v(": Fail immediately (default).")]),e._v(" "),o("li",[e._v("Run remaining "),o("em",[e._v("steps")]),e._v(" before failing: Continue to next "),o("em",[e._v("steps")]),e._v(" and fail the "),o("em",[e._v("job")]),e._v(" at the end.")])]),e._v(" "),o("p",[e._v("The default is to fail immediately but depending on the procedure at\nhand you can choose to have the execution continue.")]),e._v(" "),o("p",[o("em",[e._v("Strategy")]),e._v(": Controls the order of execution of "),o("em",[e._v("steps")]),e._v(" and command\ndispatch to "),o("em",[e._v("nodes")]),e._v(": "),o("em",[e._v("Node-oriented")]),e._v(" and "),o("em",[e._v("Step-oriented")]),e._v(".")]),e._v(" "),o("ul",[o("li",[o("em",[e._v("Node First")]),e._v(": Executes the full workflow on each "),o("em",[e._v("node")]),e._v(" before the\nnext "),o("em",[e._v("node")]),e._v(". (default)")]),e._v(" "),o("li",[o("em",[e._v("Sequential")]),e._v(": Executes each "),o("em",[e._v("step")]),e._v(" on all "),o("em",[e._v("nodes")]),e._v(" before the next\n"),o("em",[e._v("step")]),e._v(".")]),e._v(" "),o("li",[o("em",[e._v("Parallel")]),e._v(": Run all "),o("em",[e._v("steps")]),e._v(" in parallel.")])]),e._v(" "),o("p",[e._v("The following illustrations contrast the strategies showing how three\n"),o("em",[e._v("steps")]),e._v(" proceed across two "),o("em",[e._v("nodes")]),e._v(".")]),e._v(" "),o("p",[o("em",[e._v("Node")]),e._v(" First flow illustrated:")]),e._v(" "),o("div",{staticClass:"language-sh extra-class"},[o("pre",{pre:!0,attrs:{class:"language-sh"}},[o("code",[o("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(".   NodeA    step"),o("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#1")]),e._v("\n"),o("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v(".     "),o("span",{pre:!0,attrs:{class:"token string"}},[e._v('"      step#2\n3.     "')]),e._v("      step"),o("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#3")]),e._v("\n"),o("span",{pre:!0,attrs:{class:"token number"}},[e._v("4")]),e._v(".   NodeB    step"),o("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#1")]),e._v("\n"),o("span",{pre:!0,attrs:{class:"token number"}},[e._v("5")]),e._v(".     "),o("span",{pre:!0,attrs:{class:"token string"}},[e._v('"      step#2\n6.     "')]),e._v("      step"),o("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#3")]),e._v("\n")])])]),o("p",[e._v("Sequential flow illustrated:")]),e._v(" "),o("div",{staticClass:"language-sh extra-class"},[o("pre",{pre:!0,attrs:{class:"language-sh"}},[o("code",[o("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(".   NodeA    step"),o("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#1")]),e._v("\n"),o("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v(".   NodeB      "),o("span",{pre:!0,attrs:{class:"token string"}},[e._v('"\n3.   NodeA    step#2\n4.   NodeB      "')]),e._v("\n"),o("span",{pre:!0,attrs:{class:"token number"}},[e._v("5")]),e._v(".   NodeA    step"),o("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#3")]),e._v("\n"),o("span",{pre:!0,attrs:{class:"token number"}},[e._v("6")]),e._v('.   NodeB      "\n')])])]),o("p",[e._v("The process you are automating will determine which strategy is\ncorrect, though the "),o("em",[e._v("node")]),e._v("-oriented flow is more commonplace.")]),e._v(" "),o("p",[e._v("For more complex workflow strategy rules, see "),o("RouterLink",{attrs:{to:"/en/user-guide/workflow-strategies/ruleset.html"}},[e._v("Ruleset Workflow Strategy Plugin")])],1),e._v(" "),o("h2",{attrs:{id:"workflow-steps"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#workflow-steps"}},[e._v("#")]),e._v(" Workflow "),o("em",[e._v("steps")])]),e._v(" "),o("p",[e._v("The following sections describe how to construct a workflow as a set\nof "),o("em",[e._v("steps")]),e._v(" of different types.")]),e._v(" "),o("p",[e._v("When creating a new "),o("em",[e._v("Job")]),e._v(" definition, the Workflow form will be set with\ndefaults and have no workflow "),o("em",[e._v("steps")]),e._v(" defined. The workflow editor will\nhave a form open asking to choose a "),o("em",[e._v("step")]),e._v(" type to add.")]),e._v(" "),o("p",[o("img",{attrs:{src:"/assets/img/fig0402.png",alt:"Add a step"}})]),e._v(" "),o("p",[e._v("To add new "),o("em",[e._v("steps")]),e._v(' simply press the "Add a '),o("em",[e._v("step")]),e._v('" link inside the workflow\neditor form. This will prompt you with a dialog asking which kind of\n'),o("em",[e._v("step")]),e._v(" you would like to add. Each kind of "),o("em",[e._v("step")]),e._v(' has its own\nform. When you are done filling out the form, press "Save" to add it\nto the sequence. Pressing "Cancel" will close the form and leave the\nsequence unchanged.')]),e._v(" "),o("p",[o("img",{attrs:{src:"/assets/img/fig0403.png",alt:"Add a step form"}})]),e._v(" "),o("p",[e._v("New "),o("em",[e._v("steps")]),e._v(" are always added to the end of the sequence. See\n"),o("RouterLink",{attrs:{to:"/en/#reordering-_steps_"}},[e._v("Reordering "),o("em",[e._v("steps")])]),e._v("\nfor directions on moving "),o("em",[e._v("steps")]),e._v(" into a new order.")],1),e._v(" "),o("p",[e._v("Each "),o("em",[e._v("step")]),e._v(' can have a "Description" to give it a more logical name or description to be displayed in the QW Control GUI.')]),e._v(" "),o("p",[e._v("The next several sections describe the specification of each kind of\nworkflow "),o("em",[e._v("step")]),e._v(".")]),e._v(" "),o("h3",{attrs:{id:"types-of-steps"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#types-of-steps"}},[e._v("#")]),e._v(" Types of "),o("em",[e._v("Steps")])]),e._v(" "),o("p",[o("em",[e._v("Steps")]),e._v(" in a workflow can be either "),o("em",[e._v("Node Steps")]),e._v(" or "),o("em",[e._v("Workflow Steps")]),e._v(".")]),e._v(" "),o("ul",[o("li",[o("em",[e._v("Node")]),e._v(" "),o("em",[e._v("Steps")]),e._v(" operate once on each "),o("em",[e._v("Node")]),e._v(", which could be multiple times within a workflow. For a full list of "),o("em",[e._v("Node")]),e._v(" "),o("em",[e._v("Steps")]),e._v(", see "),o("RouterLink",{attrs:{to:"/en/user-guide/job-plugins.html#_node_-_steps_"}},[o("em",[e._v("Job")]),e._v(" Plugins - "),o("em",[e._v("Node")]),e._v(" "),o("em",[e._v("Steps")])])],1),e._v(" "),o("li",[e._v("Workflow "),o("em",[e._v("Steps")]),e._v(" operate only once in the workflow. For a full list of Workflow "),o("em",[e._v("Steps")]),e._v(", see "),o("RouterLink",{attrs:{to:"/en/user-guide/job-plugins.html#workflow-_steps_"}},[e._v("Workflow "),o("em",[e._v("Steps")])])],1)]),e._v(" "),o("h2",{attrs:{id:"reordering-steps"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#reordering-steps"}},[e._v("#")]),e._v(" Reordering "),o("em",[e._v("steps")])]),e._v(" "),o("p",[e._v("The order of the Workflow "),o("em",[e._v("steps")]),e._v(" can be modified by hovering over any\n"),o("em",[e._v("step")]),e._v(" and then clicking and dragging the double arrow icon to the\ndesired position.")]),e._v(" "),o("p",[o("img",{attrs:{src:"/assets/img/fig0408.png",alt:"Job step reorder"}})]),e._v(" "),o("p",[e._v("A blue horizontal bar helps highlight the position\nwhere the "),o("em",[e._v("Job")]),e._v(" will land.")]),e._v(" "),o("p",[o("img",{attrs:{src:"/assets/img/fig0408a.png",alt:"Job step reorder"}})]),e._v(" "),o("p",[e._v("After releasing the select "),o("em",[e._v("Job")]),e._v(", it will land in the desired position\nand the "),o("em",[e._v("step")]),e._v(" order will be updated.")]),e._v(" "),o("p",[e._v("If you wish to Undo the "),o("em",[e._v("step")]),e._v(' reordering, press the "Undo" link above\nthe '),o("em",[e._v("steps")]),e._v(".")]),e._v(" "),o("p",[e._v('The "Redo" button can be pressed to reapply the last undone change.')]),e._v(" "),o("p",[e._v('Press the "Revert All Changes" button to go back to the original '),o("em",[e._v("step")]),e._v(" order.")]),e._v(" "),o("h2",{attrs:{id:"error-handlers"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#error-handlers"}},[e._v("#")]),e._v(" Error Handlers")]),e._v(" "),o("p",[e._v("Each "),o("em",[e._v("step")]),e._v(' in a Workflow can have an associated "Error Handler" action. This handler\nis a secondary '),o("em",[e._v("step")]),e._v(" of any of the available types that will execute if the Workflow\n"),o("em",[e._v("step")]),e._v(" fails. Error Handler "),o("em",[e._v("steps")]),e._v(" can be used to recover the workflow from failure, or\nsimply to execute a secondary action.")]),e._v(" "),o("p",[e._v("This provides a few different ways to deal with a "),o("em",[e._v("step")]),e._v("'s failure:")]),e._v(" "),o("ul",[o("li",[e._v("Print additional information about a failure")]),e._v(" "),o("li",[e._v("Roll back a change")]),e._v(" "),o("li",[e._v("Recover the workflow from failure, and continue normally")])]),e._v(" "),o("p",[e._v("When a Workflow "),o("em",[e._v("step")]),e._v(' has a failure, the behavior depends on whether it has an Error Handler or not,\nand the value of the "keepgoing" setting for the Workflow, and the value of the "keepgoingOnSuccess" for the Error Handler.')]),e._v(" "),o("ul",[o("li",[e._v("When a "),o("em",[e._v("step")]),e._v(" fails "),o("strong",[e._v("without an Error Handler")]),e._v(" "),o("ol",[o("li",[e._v('the Workflow is marked as "failed"')]),e._v(" "),o("li",[e._v("If "),o("code",[e._v('keepgoing="false"')]),e._v(" "),o("ol",[o("li",[e._v("then the entire Workflow stops")])])]),e._v(" "),o("li",[e._v("Otherwise, the remaining Workflow "),o("em",[e._v("steps")]),e._v(" are executed in order")]),e._v(" "),o("li",[e._v('the Workflow ends with a "failed" result status')])])])]),e._v(" "),o("p",[e._v("If you define an Error Handler for a "),o("em",[e._v("step")]),e._v(", then the behavior changes. The handler can recover the "),o("em",[e._v("step")]),e._v('\'s failure by executing successfully, and a secondary option "keepgoingOnSuccess" will\nlet you override the Workflow\'s "keepgoing" value if it is false.')]),e._v(" "),o("ul",[o("li",[e._v("When a "),o("em",[e._v("step")]),e._v(" fails "),o("strong",[e._v("with an Error Handler")]),e._v(" "),o("ol",[o("li",[e._v("The Error Handler is executed")]),e._v(" "),o("li",[e._v("If the Error Handler was successful and has "),o("code",[e._v('keepgoingOnSuccess="true"')]),e._v(" "),o("ol",[o("li",[e._v("The workflow "),o("code",[e._v("keepgoing")]),e._v(" is ignored,")]),e._v(" "),o("li",[e._v("The Workflow failure status is "),o("em",[e._v("not")]),e._v(" marked, and it will continue to the next "),o("em",[e._v("step")])])])]),e._v(" "),o("li",[e._v("Else if "),o("code",[e._v('keepgoing="false"')]),e._v(" "),o("ol",[o("li",[e._v('The Workflow is marked as "failed"')]),e._v(" "),o("li",[e._v("Then the entire Workflow stops")])])]),e._v(" "),o("li",[e._v("Else if "),o("code",[e._v('keepgoing="true"')]),e._v(" "),o("ol",[o("li",[e._v('If the Error Handler failed then the Workflow is marked as "failed"')]),e._v(" "),o("li",[e._v("Otherwise, the Workflow is "),o("em",[e._v("not")]),e._v(" additionally marked")])])]),e._v(" "),o("li",[e._v("the remaining Workflow "),o("em",[e._v("steps")]),e._v(" are executed in order (including other triggered Error Handlers)")]),e._v(" "),o("li",[e._v("when the Workflow ends, its status depends on if it is marked")])])])]),e._v(" "),o("p",[e._v("Essentially, the result status of the Error Handler becomes the result status of its "),o("em",[e._v("Step")]),e._v(", if the Workflow\nhas "),o("code",[e._v('keepgoing="true"')]),e._v(" or if the Error Handler overrides it with "),o("code",[e._v('keepgoingOnSuccess="true"')]),e._v(". If the Error Handler succeeds, then the "),o("em",[e._v("step")]),e._v(" is not considered to have failed. This\nincludes scripts, commands, "),o("em",[e._v("job")]),e._v(" references, etc. (Scripts and commands must have an exit status of "),o("code",[e._v("0")]),e._v(" to\nreturn success.)")]),e._v(" "),o("p",[e._v("It is a good practice, when you are defining Error Handlers, to "),o("strong",[e._v("always")]),e._v(" have them fail (e.g. scripts/commands return a non-zero exit-code), unless you specifically want them to be used for Recovery.")]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),o("p",[e._v("Error-handlers can be attached to either "),o("em",[e._v("Node")]),e._v(" "),o("em",[e._v("Steps")]),e._v(" or Workflow "),o("em",[e._v("Steps")]),e._v(", and the type of "),o("em",[e._v("step")]),e._v(" and the Strategy of the Workflow determines what type of Error-handler "),o("em",[e._v("steps")]),e._v(" can be attached to a "),o("em",[e._v("step")]),e._v('. The only restriction is in the case that the Workflow is "'),o("em",[e._v("Node")]),e._v('-oriented", which means that the workflow is executed independently for each '),o("em",[e._v("node")]),e._v(". In this case, "),o("em",[e._v("Node")]),e._v(" "),o("em",[e._v("Steps")]),e._v(" can only have other "),o("em",[e._v("Node")]),e._v(" "),o("em",[e._v("steps")]),e._v(" as Error Handlers. In other cases, the Error Handler can be other Workflow "),o("em",[e._v("steps")]),e._v(".")])]),e._v(" "),o("p",[e._v('To add an error handler press the "settings" button on the '),o("em",[e._v("step")]),e._v(" you want to handle.")]),e._v(" "),o("p",[o("img",{attrs:{src:"/assets/img/fig0410.png",alt:"Adding an error handler"}})]),e._v(" "),o("p",[e._v("The form presented includes the normal set of "),o("em",[e._v("steps")]),e._v(" you can add to a workflow.")]),e._v(" "),o("p",[o("img",{attrs:{src:"/assets/img/fig0410a.png",alt:"Adding an error handler"}})]),e._v(" "),o("p",[e._v("The example below shows an error handler that calls a script by URL.")]),e._v(" "),o("p",[o("img",{attrs:{src:"/assets/img/fig0411.png",alt:"Example error handler"}})]),e._v(" "),o("h3",{attrs:{id:"context-information"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#context-information"}},[e._v("#")]),e._v(" Context information")]),e._v(" "),o("p",[e._v("When the Error-handler "),o("em",[e._v("step")]),e._v(" is executed, its execution context will contain some information about the nature\nof the failure that occurred for the original "),o("em",[e._v("step")]),e._v(".")]),e._v(" "),o("p",[e._v("In the case where a "),o("em",[e._v("Node")]),e._v(" "),o("em",[e._v("Step")]),e._v(" has a Workflow "),o("em",[e._v("Step")]),e._v(" as an Error Handler, then the failure data for multiple "),o("em",[e._v("nodes")]),e._v(" is rolled up into a single failure reason to be used by the Workflow "),o("em",[e._v("Step")]),e._v(".")]),e._v(" "),o("p",[e._v("See the section on "),o("RouterLink",{attrs:{to:"/en/user-guide/job-workflows.html#context-variables"}},[e._v("Context Variables")]),e._v(" for more information.")],1),e._v(" "),o("h2",{attrs:{id:"save-the-changes"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#save-the-changes"}},[e._v("#")]),e._v(" Save the changes")]),e._v(" "),o("p",[e._v("Once the Workflow "),o("em",[e._v("steps")]),e._v(' have been defined and order, changes are\npermanently saved after pressing the "Create" button if new or the\n"Update" button if the '),o("em",[e._v("Job")]),e._v(" is being modified.")]),e._v(" "),o("h2",{attrs:{id:"context-variables"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#context-variables"}},[e._v("#")]),e._v(" Context Variables")]),e._v(" "),o("p",[e._v("When a "),o("em",[e._v("Job")]),e._v(" "),o("em",[e._v("step")]),e._v(' is executed, it has a set of "context" variables that you can access in the '),o("em",[e._v("Job")]),e._v(" "),o("em",[e._v("step")]),e._v(". There are several sets of context variables, including: the "),o("em",[e._v("Job")]),e._v(" context "),o("code",[e._v("job")]),e._v(", the "),o("em",[e._v("Node")]),e._v(" context "),o("code",[e._v("node")]),e._v(", and the Option context "),o("code",[e._v("option")]),e._v(".")]),e._v(" "),o("p",[o("em",[e._v("Job")]),e._v(" context variables (Global scope):")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("job.name")]),e._v(": Name of the "),o("em",[e._v("Job")])]),e._v(" "),o("li",[o("code",[e._v("job.group")]),e._v(": Group of the "),o("em",[e._v("Job")])]),e._v(" "),o("li",[o("code",[e._v("job.id")]),e._v(": ID of the "),o("em",[e._v("Job")])]),e._v(" "),o("li",[o("code",[e._v("job.execid")]),e._v(": ID of the current Execution")]),e._v(" "),o("li",[o("code",[e._v("job.executionType")]),e._v(" : Execution type, can be "),o("code",[e._v("user")]),e._v(", "),o("code",[e._v("scheduled")]),e._v(" or "),o("code",[e._v("user-scheduled")]),e._v(" for "),o("code",[e._v("Run _Job_ Later")]),e._v(" executions")]),e._v(" "),o("li",[o("code",[e._v("job.username")]),e._v(": Username of the user executing the "),o("em",[e._v("Job")])]),e._v(" "),o("li",[o("code",[e._v("job.project")]),e._v(": Project name")]),e._v(" "),o("li",[o("code",[e._v("job.loglevel")]),e._v(": Logging level, one of: 'ERROR','WARN','INFO','VERBOSE','DEBUG'")]),e._v(" "),o("li",[o("code",[e._v("job.user.email")]),e._v(": Executing user's email address set in "),o("RouterLink",{attrs:{to:"/en/user-guide/10-user.html"}},[e._v("User profile")]),e._v(".")],1),e._v(" "),o("li",[o("code",[e._v("job.retryAttempt")]),e._v(": A number indicating the attempt, if this execution is a "),o("RouterLink",{attrs:{to:"/en/#retry"}},[e._v("retry")]),e._v(".")],1),e._v(" "),o("li",[o("code",[e._v("job.wasRetry")]),e._v(": "),o("code",[e._v("true")]),e._v(" if this execution is a retry, otherwise "),o("code",[e._v("false")]),e._v(". See: "),o("RouterLink",{attrs:{to:"/en/#retry"}},[e._v("retry")]),e._v(".")],1),e._v(" "),o("li",[o("code",[e._v("job.threadcount")]),e._v(": Threadcount (number of "),o("em",[e._v("nodes")]),e._v(" run at once) of the "),o("em",[e._v("Job")])]),e._v(" "),o("li",[o("code",[e._v("job.filter")]),e._v(": The filter used to select the "),o("em",[e._v("nodes")]),e._v(" for this "),o("em",[e._v("job")]),e._v(" (if applicable)")])]),e._v(" "),o("p",[o("em",[e._v("Node")]),e._v(" context variables ("),o("em",[e._v("Node")]),e._v(" scope):")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("node.name")]),e._v(": Name of the "),o("em",[e._v("Node")]),e._v(" being executed on")]),e._v(" "),o("li",[o("code",[e._v("node.hostname")]),e._v(": Hostname of the "),o("em",[e._v("Node")])]),e._v(" "),o("li",[o("code",[e._v("node.username")]),e._v(": Username of the remote user")]),e._v(" "),o("li",[o("code",[e._v("node.description")]),e._v(": Description of the "),o("em",[e._v("node")])]),e._v(" "),o("li",[o("code",[e._v("node.tags")]),e._v(": Comma-separated list of tags")]),e._v(" "),o("li",[o("code",[e._v("node.os-*")]),e._v(": OS properties of the "),o("em",[e._v("Node")]),e._v(": "),o("code",[e._v("name")]),e._v(","),o("code",[e._v("version")]),e._v(","),o("code",[e._v("arch")]),e._v(","),o("code",[e._v("family")])]),e._v(" "),o("li",[o("code",[e._v("node.*")]),e._v(": All "),o("em",[e._v("Node")]),e._v(" attributes defined on the "),o("em",[e._v("Node")]),e._v(".")])]),e._v(" "),o("p",[e._v("Execution context variables (Global scope):")]),e._v(" "),o("p",[e._v("The execution data is included as a Map called execution containing the following keys and values:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("execution.id")]),e._v(": ID of the execution")]),e._v(" "),o("li",[o("code",[e._v("execution.href")]),e._v(": URL to the execution output view")]),e._v(" "),o("li",[o("code",[e._v("execution.status")]),e._v(": Execution state ('running','failed','aborted','succeeded')")]),e._v(" "),o("li",[o("code",[e._v("execution.user")]),e._v(": User who started the "),o("em",[e._v("job")])]),e._v(" "),o("li",[o("code",[e._v("execution.dateStarted")]),e._v(": Start time (java.util.Date)")]),e._v(" "),o("li",[o("code",[e._v("execution.dateStartedUnixtime")]),e._v(": Start time as milliseconds since epoch (long)")]),e._v(" "),o("li",[o("code",[e._v("execution.dateStartedW3c")]),e._v(": Start time as a W3C formatted String")]),e._v(" "),o("li",[o("code",[e._v("execution.description")]),e._v(": Summary string for the execution")]),e._v(" "),o("li",[o("code",[e._v("execution.argstring")]),e._v(": Argument string for any "),o("em",[e._v("job")]),e._v(" options")]),e._v(" "),o("li",[o("code",[e._v("execution.project")]),e._v(": Project name")]),e._v(" "),o("li",[o("code",[e._v("execution.loglevel")]),e._v(": Loglevel string ('ERROR','WARN','INFO','VERBOSE','DEBUG')\nThe following values may be available after the "),o("em",[e._v("job")]),e._v(" is finished (not available for onstart trigger):")]),e._v(" "),o("li",[o("code",[e._v("execution.failedNodeListString")]),e._v(": Comma-separated list of any "),o("em",[e._v("nodes")]),e._v(" that failed, if present")]),e._v(" "),o("li",[o("code",[e._v("execution.failedNodeList")]),e._v(": Java List of any "),o("em",[e._v("node")]),e._v(" names that failed, if present")]),e._v(" "),o("li",[o("code",[e._v("execution.succeededNodeListString")]),e._v(": Comma-separated list of any "),o("em",[e._v("nodes")]),e._v(" that succeeded, if present")]),e._v(" "),o("li",[o("code",[e._v("execution.succeededNodeList")]),e._v(": Java List of any "),o("em",[e._v("node")]),e._v(" names that succeeded, if present")]),e._v(" "),o("li",[o("code",[e._v("execution.nodestatus")]),e._v(": Java Map containing summary counts of "),o("em",[e._v("node")]),e._v(" success/failure/total, in the form: [succeeded: int, failed: int, total: int]")]),e._v(" "),o("li",[o("code",[e._v("execution.dateEnded")]),e._v(": End time (java.util.Date)")]),e._v(" "),o("li",[o("code",[e._v("execution.dateEndedUnixtime")]),e._v(": End time as milliseconds since epoch (long)")]),e._v(" "),o("li",[o("code",[e._v("execution.dateEndedW3c")]),e._v(": End time as W3C formatted string")]),e._v(" "),o("li",[o("code",[e._v("execution.abortedby")]),e._v(": User who aborted the execution")])]),e._v(" "),o("p",[e._v("Additional Error-handler context variables (Global scope):")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("result.reason")]),e._v(": A code indicating the reason the "),o("em",[e._v("step")]),e._v(" failed\n"),o("ul",[o("li",[e._v("Common reason code strings used by "),o("em",[e._v("node")]),e._v(" execution of commands or scripts:\n"),o("ul",[o("li",[o("code",[e._v("NonZeroResultCode")]),e._v(" - the execution returned a non-zero code")]),e._v(" "),o("li",[o("code",[e._v("SSHProtocolFailure")]),e._v(" - SSH protocol failure")]),e._v(" "),o("li",[o("code",[e._v("HostNotFound")]),e._v(" - host not found")]),e._v(" "),o("li",[o("code",[e._v("ConnectionTimeout")]),e._v(" - connection timeout")]),e._v(" "),o("li",[o("code",[e._v("ConnectionFailure")]),e._v(" - connection failure (e.g. refused)")]),e._v(" "),o("li",[o("code",[e._v("IOFailure")]),e._v(" - IO error")]),e._v(" "),o("li",[o("code",[e._v("AuthenticationFailure")]),e._v(" - authentication was refused or incorrect")])])]),e._v(" "),o("li",[e._v("Reason code strings used by "),o("em",[e._v("Job")]),e._v(" references\n"),o("ul",[o("li",[o("code",[e._v("JobFailed")]),e._v(" - referenced "),o("em",[e._v("Job")]),e._v(" workflow failed")]),e._v(" "),o("li",[o("code",[e._v("NotFound")]),e._v(" - referenced "),o("em",[e._v("Job")]),e._v(" not found")]),e._v(" "),o("li",[o("code",[e._v("Unauthorized")]),e._v(" - referenced "),o("em",[e._v("Job")]),e._v(" not authorized")]),e._v(" "),o("li",[o("code",[e._v("InvalidOptions")]),e._v(" - referenced "),o("em",[e._v("Job")]),e._v(" input options invalid")]),e._v(" "),o("li",[o("code",[e._v("NoMatchedNodes")]),e._v(" - referenced "),o("em",[e._v("Job")]),e._v(" "),o("em",[e._v("node")]),e._v(" dispatch filters had no match")])])]),e._v(" "),o("li",[e._v("Reason code used from a failed "),o("em",[e._v("Node")]),e._v(" "),o("em",[e._v("Step")]),e._v(" if the handler is a Workflow "),o("em",[e._v("Step")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("NodeDispatchFailure")]),e._v(" - one or more "),o("em",[e._v("nodes")]),e._v(" failed the "),o("em",[e._v("step")])])])])])]),e._v(" "),o("li",[o("code",[e._v("result.message")]),e._v(": A string describing the failure")]),e._v(" "),o("li",[o("code",[e._v("result.resultCode")]),e._v(": Exit code from an execution (if available)")]),e._v(" "),o("li",[o("code",[e._v("result.failedNodes")]),e._v(": Comma-separated list of "),o("em",[e._v("node")]),e._v(" names that failed for a "),o("code",[e._v("NodeDispatchFailure")])])]),e._v(" "),o("p",[e._v("Option context variables are referred to as "),o("code",[e._v("option.NAME")]),e._v(" (more about "),o("RouterLink",{attrs:{to:"/en/user-guide/job-options.html"}},[o("em",[e._v("Job")]),e._v(" Options")]),e._v(".)")],1),e._v(" "),o("p",[e._v("There may be additional context variables available, such as "),o("code",[e._v("data.*")]),e._v(" values when using the "),o("RouterLink",{attrs:{to:"/en/user-guide/job-workflows.html#data-capture-log-filter-plugins"}},[e._v("Data Capture Log Filter Plugins")]),e._v(".")],1),e._v(" "),o("h3",{attrs:{id:"context-variable-usage"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#context-variable-usage"}},[e._v("#")]),e._v(" Context Variable Usage")]),e._v(" "),o("p",[e._v("Context variables can be used in a few ways in a "),o("em",[e._v("Job")]),e._v(" "),o("em",[e._v("step")]),e._v(", with slightly different syntaxes:")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Commands, Script Arguments and "),o("em",[e._v("Job")]),e._v(" Reference Arguments")]),e._v(" "),o("p",[e._v(": "),o("code",[e._v("${ctx.name}")])])]),e._v(" "),o("li",[o("p",[e._v("Inline Script Content ("),o("em",[e._v("see note")]),e._v(")")]),e._v(" "),o("p",[e._v(": "),o("code",[e._v("@ctx.name@")])])])]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),o("p",[e._v('The "Inline Script Content" variable expansion is '),o("strong",[e._v("not")]),e._v(' available for "Script File" '),o("em",[e._v("steps")]),e._v(". The Script File is not rewritten at all when used for execution.")])]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),o("p",[e._v("This can be disabled, see "),o("RouterLink",{attrs:{to:"/en/administration/configuration/config-file-reference.html#framework-properties"}},[e._v("Administrator Guide > Configuration File Reference > framework.properties")]),e._v(".")],1)]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Environment Variables ("),o("em",[e._v("see note")]),e._v(")")]),e._v(" "),o("p",[e._v(": "),o("code",[e._v("$RD_CTX_NAME")])]),e._v(" "),o("p",[e._v("The syntax for Environment variables is that all letters become uppercase, punctuation is replaced with underscore, and the name is prefixed with "),o("code",[e._v("RD")]),e._v(".")])])]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),o("p",[e._v("See the chapter "),o("RouterLink",{attrs:{to:"/en/administration/projects/_node_-execution/ssh.html#configuring-remote-machine-for-ssh"}},[e._v("Configuring Remote Machine for SSH")]),e._v(" for information about requirements of the SSH server.")],1)]),e._v(" "),o("ul",[o("li",[e._v("Special syntax for different Scopes (see below)")])]),e._v(" "),o("h3",{attrs:{id:"about-context-variable-scopes"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#about-context-variable-scopes"}},[e._v("#")]),e._v(" About Context Variable Scopes")]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("job.*")]),e._v(", and "),o("code",[e._v("execution.*")]),e._v(" variables mentioned above exist in the Global scope.")]),e._v(" "),o("p",[e._v("Global Scope variables are available to all types of Workflow "),o("em",[e._v("steps")]),e._v(".")]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("node.*")]),e._v(" values are available within a "),o("em",[e._v("Node")]),e._v(" scope.  There can be multiple "),o("em",[e._v("Node")]),e._v(" Scopes, and each "),o("em",[e._v("Node")]),e._v(" Scope is bound to a particular "),o("em",[e._v("Node")]),e._v(" Name.")]),e._v(" "),o("p",[o("em",[e._v("Node")]),e._v(" Scope values for a particular "),o("em",[e._v("Node")]),e._v(" name, are available within the same Scope for the same "),o("em",[e._v("Node")]),e._v(".")]),e._v(" "),o("p",[e._v("Variables that are added to the Context while the workflow is executing, such as "),o("code",[e._v("data.*")]),e._v(" variables, get added to either the Global Scope or a "),o("em",[e._v("Node")]),e._v(" Scope.")]),e._v(" "),o("p",[e._v("If the variable is added within a "),o("em",[e._v("Node")]),e._v(" "),o("em",[e._v("Step")]),e._v(", then the data values are stored within the "),o("em",[e._v("Node")]),e._v(" Scope for that "),o("em",[e._v("node")]),e._v(". This allows multiple values to be added by different "),o("em",[e._v("nodes")]),e._v(" with the same variable name.")]),e._v(" "),o("p",[e._v("Any variables within the same Scope can be referenced without special syntax.  For example, within a "),o("em",[e._v("Node")]),e._v(" "),o("em",[e._v("Step")]),e._v(" other variables\nadded to the Context within the same "),o("em",[e._v("Node")]),e._v(" Scope for the same "),o("em",[e._v("node")]),e._v(" can be referenced using "),o("code",[e._v("${data.MyKey}")]),e._v(".")]),e._v(" "),o("p",[e._v('If a value is not found for the variable reference within the current scope, the scope is "widened" to find it at a higher scope. So all Globally Scoped variable\nvalues can be referenced using the normal syntax.')]),e._v(" "),o("p",[o("em",[e._v("Node")]),e._v(" Scope values can be referenced either from the Global scope or a different "),o("em",[e._v("Node")]),e._v("'s scope by using a special syntax:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("${data.MyKey@MyNodeName}")]),e._v(" - reference the variable within the "),o("em",[e._v("Node")]),e._v(" scope for the "),o("code",[e._v("MyNodeName")]),e._v(" "),o("em",[e._v("node")]),e._v(".")]),e._v(" "),o("li",[o("code",[e._v("${data.MyKey*}")]),e._v(" - collects all variable values from all "),o("em",[e._v("Node")]),e._v(" Scopes, and produces a single value using a "),o("code",[e._v(",")]),e._v(" (comma) to delimit the values.")]),e._v(" "),o("li",[o("code",[e._v("${data.MyKey*;}")]),e._v(" - specifies a different delimiter for the values")])]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),o("p",[e._v("If a variable reference does not produce the value that is expected, make sure the Scope of the value and the Scope of the reference point (i.e where the context variable reference is being evaluated) correspond.")]),e._v(" "),o("p",[e._v("The "),o("strong",[e._v("Log Data")]),e._v(" Workflow "),o("em",[e._v("Step")]),e._v(" will log all scoped context variables, to visualize what values are available at a certain point in a workflow.")]),e._v(" "),o("p",[e._v("The Workflow Strategy used in the Workflow governs when "),o("em",[e._v("steps")]),e._v(" execute: A sequential strategy means each "),o("em",[e._v("step")]),e._v(" will be processed before subsequent "),o("em",[e._v("steps")]),e._v(", which allows (for example) "),o("em",[e._v("Step")]),e._v(" 2 to reference any value stored in "),o("em",[e._v("Step")]),e._v(" 1, even from different "),o("em",[e._v("Nodes")]),e._v(".  However, a "),o("em",[e._v("Node")]),e._v("-first, Parallel or Ruleset Strategy will have different behavior, so depending on the order in which "),o("em",[e._v("Steps")]),e._v(" are executed, some captured values may or may not be present.")])]),e._v(" "),o("h3",{attrs:{id:"data-capture-log-filter-plugins"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#data-capture-log-filter-plugins"}},[e._v("#")]),e._v(" Data Capture Log Filter Plugins")]),e._v(" "),o("p",[e._v("QW Control offers two different data capture Log Filter plugins. The first, Key Value Data, captures simple Key/Value data using a simple text format. The second, Multiline Regex Data Capture, captures multiline regex key/value data using a simple text format. The data capture Log Filter plugins allow users to define and utilize data variables across numerous "),o("em",[e._v("job")]),e._v(" "),o("em",[e._v("steps")]),e._v(".")]),e._v(" "),o("p",[e._v("For more information on Key Value data, see "),o("RouterLink",{attrs:{to:"/en/user-guide/log-filters/key-value-data.html"}},[e._v("Key Value Data")]),e._v(".")],1),e._v(" "),o("p",[e._v("For more information on Key Value data, see "),o("RouterLink",{attrs:{to:"/en/user-guide/log-filters/multi-line-regex.html"}},[e._v("Multiline Regex Capture")]),e._v(".")],1),e._v(" "),o("h3",{attrs:{id:"command-line-tools-and-api-access"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#command-line-tools-and-api-access"}},[e._v("#")]),e._v(" Command Line Tools and API access")]),e._v(" "),o("p",[o("em",[e._v("Jobs")]),e._v(" can be exported or imported in XML or Yaml format using the API or the "),o("code",[e._v("rd")]),e._v(" CLI tool.")]),e._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/en/api/qwcontrol-api.html#exporting-_jobs_"}},[e._v("Exporting "),o("em",[e._v("Jobs")])])],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/en/api/qwcontrol-api.html#importing-_jobs_"}},[e._v("Importing "),o("em",[e._v("Jobs")])])],1),e._v(" "),o("li",[o("a",{attrs:{href:"https://qwsoftware.github.io/qwcontrol-cli/",target:"_blank",rel:"noopener noreferrer"}},[e._v("RD CLI Tool"),o("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=v.exports}}]);