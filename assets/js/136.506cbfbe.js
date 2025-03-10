(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{612:function(t,s,a){"use strict";a.r(s);var e=a(11),r=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"频道全员禁言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#频道全员禁言"}},[t._v("#")]),t._v(" 频道全员禁言")]),t._v(" "),s("h2",{attrs:{id:"接口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#接口"}},[t._v("#")]),t._v(" 接口")]),t._v(" "),s("div",{staticClass:"language-http line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-http"}},[s("code",[t._v("PATCH /guilds/{guild_id}/mute\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h2",{attrs:{id:"功能描述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#功能描述"}},[t._v("#")]),t._v(" 功能描述")]),t._v(" "),s("p",[t._v("用于将频道的全体成员（非管理员）禁言。")]),t._v(" "),s("ul",[s("li",[t._v("需要使用的 "),s("code",[t._v("token")]),t._v(" 对应的用户具备管理员权限。如果是机器人，要求被添加为管理员。")])]),t._v(" "),s("p",[t._v("该接口同样可用于解除禁言，具体使用见"),s("a",{attrs:{href:"#%E8%A7%A3%E9%99%A4%E7%A6%81%E8%A8%80"}},[t._v("解除全员禁言")]),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"content-type"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#content-type"}},[t._v("#")]),t._v(" Content-Type")]),t._v(" "),s("div",{staticClass:"language-http line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-http"}},[s("code",[t._v("application/json\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h2",{attrs:{id:"参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[t._v("#")]),t._v(" 参数")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("字段名")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("mute_end_timestamp")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("禁言到期时间戳，绝对时间戳，单位：秒（与 mute_seconds 字段同时赋值的话，以该字段为准）")])]),t._v(" "),s("tr",[s("td",[t._v("mute_seconds")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("禁言多少秒（两个字段二选一，默认以 mute_end_timestamp 为准）")])])])]),t._v(" "),s("h3",{attrs:{id:"解除禁言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解除禁言"}},[t._v("#")]),t._v(" 解除禁言")]),t._v(" "),s("p",[t._v("该接口同样支持"),s("strong",[t._v("解除全员禁言")]),t._v("，将"),s("code",[t._v("mute_end_timestamp")]),t._v("或"),s("code",[t._v("mute_seconds")]),t._v("传值为字符串"),s("code",[t._v("'0'")]),t._v("即可。")]),t._v(" "),s("h2",{attrs:{id:"返回"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#返回"}},[t._v("#")]),t._v(" 返回")]),t._v(" "),s("p",[t._v("成功返回 HTTP 状态码 "),s("code",[t._v("204")]),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"错误码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#错误码"}},[t._v("#")]),t._v(" 错误码")]),t._v(" "),s("p",[t._v("详见"),s("RouterLink",{attrs:{to:"/develop/api-v2/openapi/error/error.html"}},[t._v("错误码")]),t._v("。")],1),t._v(" "),s("h2",{attrs:{id:"示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),s("p",[t._v("请求数据包")]),t._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"mute_end_timestamp"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1641916800"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"mute_seconds"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"120"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])])])}),[],!1,null,null,null);s.default=r.exports}}]);