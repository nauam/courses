(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{381:function(e,t,a){"use strict";a.r(t);var l=a(41),o=Object(l.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"key-value-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#key-value-data"}},[e._v("#")]),e._v(" Key-Value Data")]),e._v(" "),a("p",[e._v("The Key Value Data log filter can parse the output of a workflow step with a regular expression to create a key/value data that is exported to the workflow as a context variable for use in later workflow steps.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("This plugin can only capture data values which are logged within a single line of log output.")]),e._v(" "),a("p",[e._v("If you want to capture multiple lines of output, see the "),a("RouterLink",{attrs:{to:"/en/user-guide/log-filters/multi-line-regex.html#usage"}},[e._v("Multiline Regex Capture")]),e._v(" plugin.")],1)]),e._v(" "),a("h2",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),a("p",[e._v("There are only three configuration components:")]),e._v(" "),a("ul",[a("li",[e._v("Pattern")]),e._v(" "),a("li",[e._v("Name Data")]),e._v(" "),a("li",[e._v("Log Data (Checkbox)")])]),e._v(" "),a("p",[e._v("The Pattern field matches a regular expression and looks for one or two Capture Groups. If there are two Capture Groups, the first will be mapped to a QW Control variable key in the data context, while the second will be the value. If there is only one Capture Group, the match will be the value.")]),e._v(" "),a("p",[e._v("The Name Data field is only used when a single Capture Group is defined in the regex statement. The value of that field will be used as the variable key.  The variable value will be the content from the Capture Group.")]),e._v(" "),a("p",[e._v("Log Data is a checkbox that, if checked, will add tabular output of what is captured in the filter to the log output of the job that the filter is attached to.")]),e._v(" "),a("p",[e._v("By default, the pattern field is set to: "),a("code",[e._v("^QWCONTROL:DATA:(.+?)\\s*=\\s*(.+)$")])]),e._v(" "),a("p",[e._v("This will match output of the attached job if there is a line in the log output that begins with "),a("em",[e._v("QWCONTROL:DATA:foo=value1")]),e._v(". The data is available in later job steps as the QW Control variable "),a("code",[e._v("$data.foo")]),e._v(" with a value of everything after the equals sign to the end of the line. So in this case, the value of "),a("code",[e._v("$data.foo")]),e._v(" would be "),a("em",[e._v("value1")]),e._v(".")]),e._v(" "),a("p",[e._v("Under the Advanced section, there is also an Invalid Character Pattern. This is a regular expression that matches unwanted characters in the matched value of the Pattern field. By default, QW Control filters out whitespace and characters typical of QW Control variable calls like "),a("code",[e._v("$, {, }, and \\")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),a("p",[a("img",{attrs:{src:"/assets/img/logfilter-keyvalue-example1.png",alt:"logfilter-keyvalue-example1"}})]),e._v(" "),a("p",[e._v("The log filter in this example is fully default, with the Log Data field checked:")]),e._v(" "),a("p",[a("img",{attrs:{src:"/assets/img/logfilter-keyvalue-example2.png",alt:"logfilter-keyvalue-example2"}})]),e._v(" "),a("p",[e._v("The output when the job runs looks like this:")]),e._v(" "),a("p",[a("img",{attrs:{src:"/assets/img/logfilter-keyvalue-example3.png",alt:"logfilter-keyvalue-example3"}})]),e._v(" "),a("p",[e._v("In later job steps, refer to "),a("code",[e._v("$data.EXIP")]),e._v(" in commands, or "),a("code",[e._v("@data.EXIP@")]),e._v(" in scripts for the "),a("em",[e._v("10.1.1.2")]),e._v(" value.")]),e._v(" "),a("h2",{attrs:{id:"see-also"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#see-also"}},[e._v("#")]),e._v(" See Also")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/en/user-guide/log-filters/multi-line-regex.html#usage"}},[e._v("Multiline Regex Capture")]),e._v(" which can capture multiple lines of log output into a data variable.")],1)])])}),[],!1,null,null,null);t.default=o.exports}}]);