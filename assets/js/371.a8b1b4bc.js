(window.webpackJsonp=window.webpackJsonp||[]).push([[371],{848:function(t,s,a){"use strict";a.r(s);var n=a(11),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"删除日程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#删除日程"}},[t._v("#")]),t._v(" 删除日程")]),t._v(" "),s("p",[t._v("删除"),s("code",[t._v("日程子频道")]),t._v("里的一个日程。")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),s("p",[t._v("要求操作人具有管理频道的权限，如果是机器人，则需要将机器人设置为管理员。")])]),t._v(" "),s("h2",{attrs:{id:"使用示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用示例"}},[t._v("#")]),t._v(" 使用示例")]),t._v(" "),s("div",{staticClass:"language-python line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" botpy\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" botpy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("message "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Message\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyClient")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("botpy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Client"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("on_at_message_create")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("api"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("delete_schedule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("channel_id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"日程子频道ID"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" schedule_id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"日程ID"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nintents "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" botpy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Intents"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("public_guild_messages"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nclient "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" MyClient"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("intents"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("intents"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nclient"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("run"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("appid"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("appid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" token"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("token"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br")])]),s("h2",{attrs:{id:"参数说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参数说明"}},[t._v("#")]),t._v(" 参数说明")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("字段名")]),t._v(" "),s("th",[t._v("必填")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("channel_id")]),t._v(" "),s("td",[t._v("是")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[s("RouterLink",{attrs:{to:"/develop/pythonsdk/model/channel.html"}},[t._v("子频道 ID")])],1)]),t._v(" "),s("tr",[s("td",[t._v("schedule_id")]),t._v(" "),s("td",[t._v("是")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("日程 ID")])])])]),t._v(" "),s("h2",{attrs:{id:"返回说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#返回说明"}},[t._v("#")]),t._v(" 返回说明")]),t._v(" "),s("p",[t._v("返回结果为空。")]),t._v(" "),s("h2",{attrs:{id:"返回示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#返回示例"}},[t._v("#")]),t._v(" 返回示例")]),t._v(" "),s("p",[s("code",[t._v("data")]),t._v("：")]),t._v(" "),s("div",{staticClass:"language-python line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);