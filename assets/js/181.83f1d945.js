(window.webpackJsonp=window.webpackJsonp||[]).push([[181],{655:function(t,s,a){"use strict";a.r(s);var n=a(11),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"创建频道全局公告"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建频道全局公告"}},[t._v("#")]),t._v(" 创建频道全局公告")]),t._v(" "),s("p",[t._v("将某个子频道的某条消息创建为频道全局公告。")]),t._v(" "),s("h2",{attrs:{id:"使用示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用示例"}},[t._v("#")]),t._v(" 使用示例")]),t._v(" "),s("div",{staticClass:"language-go line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[t._v("token "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" token"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("BotToken")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"appid"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"token"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\napi "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" botgo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewOpenAPI")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("token"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("WithTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Second"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nctx "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Background")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nannounces"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" api"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("CreateGuildAnnounces")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" guildId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("dto"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("GuildAnnouncesToCreate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    MessageID"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" msgId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    ChannelID"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" channelId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    log"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Fatalln")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"调用 CreateGuildAnnounces 接口失败, err = "')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br")])]),s("h2",{attrs:{id:"参数说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参数说明"}},[t._v("#")]),t._v(" 参数说明")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("字段名")]),t._v(" "),s("th",[t._v("必填")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("guildId")]),t._v(" "),s("td",[t._v("是")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("频道 ID")])]),t._v(" "),s("tr",[s("td",[t._v("GuildAnnouncesToCreate")]),t._v(" "),s("td",[t._v("是")]),t._v(" "),s("td",[s("a",{attrs:{href:"#GuildAnnouncesToCreate"}},[t._v("GuildAnnouncesToCreate")])]),t._v(" "),s("td",[t._v("创建频道公告请求参数")])])])]),t._v(" "),s("h3",{attrs:{id:"guildannouncestocreate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#guildannouncestocreate"}},[t._v("#")]),t._v(" GuildAnnouncesToCreate")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("字段名")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("ChannelID")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("子频道ID")])]),t._v(" "),s("tr",[s("td",[t._v("MessageID")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("消息 ID")])])])]),t._v(" "),s("h2",{attrs:{id:"返回说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#返回说明"}},[t._v("#")]),t._v(" 返回说明")]),t._v(" "),s("p",[t._v("返回 "),s("a",{attrs:{href:"#Announces"}},[t._v("Announces")]),t._v(" 对象。")]),t._v(" "),s("h3",{attrs:{id:"announces"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#announces"}},[t._v("#")]),t._v(" Announces")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("字段名")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("GuildID")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("频道 ID")])]),t._v(" "),s("tr",[s("td",[t._v("ChannelID")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("子频道 ID")])]),t._v(" "),s("tr",[s("td",[t._v("MessageID")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("消息 ID")])])])]),t._v(" "),s("h2",{attrs:{id:"返回示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#返回示例"}},[t._v("#")]),t._v(" 返回示例")]),t._v(" "),s("p",[s("code",[t._v("data")]),t._v("：")]),t._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"guild_id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"guild_id"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"channel_id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"channel_id"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"message_id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"message_id"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);