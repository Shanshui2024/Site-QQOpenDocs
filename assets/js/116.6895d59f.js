(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{591:function(t,s,a){"use strict";a.r(s);var e=a(11),r=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"修改子频道用户权限"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修改子频道用户权限"}},[t._v("#")]),t._v(" 修改子频道用户权限")]),t._v(" "),s("h2",{attrs:{id:"接口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#接口"}},[t._v("#")]),t._v(" 接口")]),t._v(" "),s("div",{staticClass:"language-http line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-http"}},[s("code",[t._v("PUT /channels/{channel_id}/members/{user_id}/permissions\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h2",{attrs:{id:"功能描述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#功能描述"}},[t._v("#")]),t._v(" 功能描述")]),t._v(" "),s("p",[t._v("用于修改子频道 "),s("code",[t._v("channel_id")]),t._v(" 下用户 "),s("code",[t._v("user_id")]),t._v(" 的权限。")]),t._v(" "),s("ul",[s("li",[t._v("要求操作人具有"),s("code",[t._v("管理子频道")]),t._v("的权限，如果是机器人，则需要将机器人设置为管理员。")]),t._v(" "),s("li",[t._v("参数包括"),s("code",[t._v("add")]),t._v("和"),s("code",[t._v("remove")]),t._v("两个字段，分别表示授予的权限以及删除的权限。要授予用户权限即把"),s("code",[t._v("add")]),t._v("对应位置 1，删除用户权限即把"),s("code",[t._v("remove")]),t._v("对应位置 1。当两个字段同一位都为 1，表现为删除权限。")]),t._v(" "),s("li",[t._v("本接口不支持修改"),s("code",[t._v("可管理子频道")]),t._v("权限。")])]),t._v(" "),s("h2",{attrs:{id:"content-type"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#content-type"}},[t._v("#")]),t._v(" Content-Type")]),t._v(" "),s("div",{staticClass:"language-http line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-http"}},[s("code",[t._v("application/json\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h2",{attrs:{id:"参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[t._v("#")]),t._v(" 参数")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("字段名")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("RouterLink",{attrs:{to:"/develop/api-v2/server-inter/channel/role-group/channel_permissions/model.html#permission"}},[t._v("add")])],1),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("字符串形式的位图表示赋予用户的权限")])]),t._v(" "),s("tr",[s("td",[s("RouterLink",{attrs:{to:"/develop/api-v2/server-inter/channel/role-group/channel_permissions/model.html#permission"}},[t._v("remove")])],1),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("字符串形式的位图表示删除用户的权限")])])])]),t._v(" "),s("h2",{attrs:{id:"返回"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#返回"}},[t._v("#")]),t._v(" 返回")]),t._v(" "),s("p",[t._v("成功返回 HTTP 状态码 "),s("code",[t._v("204")]),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"错误码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#错误码"}},[t._v("#")]),t._v(" 错误码")]),t._v(" "),s("p",[t._v("详见"),s("RouterLink",{attrs:{to:"/develop/api-v2/openapi/error/error.html"}},[t._v("错误码")]),t._v("。")],1),t._v(" "),s("h2",{attrs:{id:"示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),s("p",[t._v("请求数据包")]),t._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"add"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"remove"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"4"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])])])}),[],!1,null,null,null);s.default=r.exports}}]);