(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{602:function(t,s,a){"use strict";a.r(s);var e=a(11),r=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"删除频道成员"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#删除频道成员"}},[t._v("#")]),t._v(" 删除频道成员")]),t._v(" "),s("h2",{attrs:{id:"接口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#接口"}},[t._v("#")]),t._v(" 接口")]),t._v(" "),s("div",{staticClass:"language-http line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-http"}},[s("code",[t._v("DELETE /guilds/{guild_id}/members/{user_id}\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h2",{attrs:{id:"功能描述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#功能描述"}},[t._v("#")]),t._v(" 功能描述")]),t._v(" "),s("p",[t._v("用于删除 "),s("code",[t._v("guild_id")]),t._v(" 指定的频道下的成员 "),s("code",[t._v("user_id")]),t._v("。")]),t._v(" "),s("ul",[s("li",[t._v("需要使用的 "),s("code",[t._v("token")]),t._v(" 对应的用户具备踢人权限。如果是机器人，要求被添加为管理员。")]),t._v(" "),s("li",[t._v("操作成功后，会触发"),s("strong",[t._v("频道成员删除事件")]),t._v("。")]),t._v(" "),s("li",[t._v("无法移除身份为管理员的成员")])]),t._v(" "),s("PrivateDomain"),t._v(" "),s("h2",{attrs:{id:"content-type"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#content-type"}},[t._v("#")]),t._v(" Content-Type")]),t._v(" "),s("div",{staticClass:"language-http line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-http"}},[s("code",[t._v("application/json\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h2",{attrs:{id:"参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[t._v("#")]),t._v(" 参数")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("字段名")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("add_blacklist")]),t._v(" "),s("td",[t._v("bool")]),t._v(" "),s("td",[t._v("删除成员的同时，将该用户添加到频道黑名单中")])]),t._v(" "),s("tr",[s("td",[t._v("delete_history_msg_days")]),t._v(" "),s("td",[t._v("int")]),t._v(" "),s("td",[t._v("删除成员的同时，撤回该成员的消息，可以指定撤回消息的时间范围")])])])]),t._v(" "),s("p",[t._v("注：消息撤回时间范围仅支持固定的天数："),s("code",[t._v("3")]),t._v("，"),s("code",[t._v("7")]),t._v("，"),s("code",[t._v("15")]),t._v("，"),s("code",[t._v("30")]),t._v("。 特殊的时间范围："),s("code",[t._v("-1: 撤回全部消息")]),t._v("。默认值为"),s("code",[t._v("0")]),t._v("不撤回任何消息。")]),t._v(" "),s("h2",{attrs:{id:"返回"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#返回"}},[t._v("#")]),t._v(" 返回")]),t._v(" "),s("p",[t._v("成功返回 HTTP 状态码 "),s("code",[t._v("204")]),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"错误码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#错误码"}},[t._v("#")]),t._v(" 错误码")]),t._v(" "),s("p",[t._v("详见"),s("RouterLink",{attrs:{to:"/develop/api-v2/openapi/error/error.html"}},[t._v("错误码")]),t._v("。")],1),t._v(" "),s("h2",{attrs:{id:"示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),s("p",[t._v("请求数据包")]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("DELETE /guilds/123456/members/112233\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"add_blacklist"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" true,\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"delete_history_msg_days"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])])],1)}),[],!1,null,null,null);s.default=r.exports}}]);