(window.webpackJsonp=window.webpackJsonp||[]).push([[253],{729:function(t,s,a){"use strict";a.r(s);var n=a(11),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"创建频道公告推荐子频道"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建频道公告推荐子频道"}},[t._v("#")]),t._v(" 创建频道公告推荐子频道 "),s("Badge",{attrs:{text:"v2.9.0"}})],1),t._v(" "),s("p",[t._v("用于将指定子频道设置为当前频道的推荐子频道，并以全局公告形式展示。")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),s("ul",[s("li",[t._v("同频道内推荐子频道最多只能创建 "),s("code",[t._v("3")]),t._v(" 条。")]),t._v(" "),s("li",[t._v("推荐子频道和全局公告"),s("strong",[t._v("不能同时存在")]),t._v("，会互相顶替设置。")]),t._v(" "),s("li",[t._v("只有子频道权限为全体成员可见才可设置为推荐子频道。")]),t._v(" "),s("li",[s("strong",[t._v("删除频道公告")]),t._v("推荐子频道请使用 "),s("RouterLink",{attrs:{to:"/develop/nodesdk/announce/delete_channel_announce.html"}},[t._v("删除频道公告")]),t._v(",并将 "),s("code",[t._v("messageId")]),t._v(" 设置为 "),s("code",[t._v("all")]),t._v("。")],1)])]),t._v(" "),s("h2",{attrs:{id:"使用示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用示例"}},[t._v("#")]),t._v(" 使用示例")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("demo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" data "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" client"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("announceApi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("postGuildRecommend")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("guildId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" recommendObj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("h2",{attrs:{id:"参数说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参数说明"}},[t._v("#")]),t._v(" 参数说明")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("字段名")]),t._v(" "),s("th",[t._v("必填")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("guildId")]),t._v(" "),s("td",[t._v("是")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[s("RouterLink",{attrs:{to:"/develop/nodesdk/model/guild.html"}},[t._v("频道 ID")])],1)]),t._v(" "),s("tr",[s("td",[t._v("recommendObj")]),t._v(" "),s("td",[t._v("是")]),t._v(" "),s("td",[s("a",{attrs:{href:"#recommendobj"}},[t._v("RecommendObj")])]),t._v(" "),s("td",[t._v("推荐子频道设置对象")])])])]),t._v(" "),s("h3",{attrs:{id:"recommendobj"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#recommendobj"}},[t._v("#")]),t._v(" RecommendObj")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("字段名")]),t._v(" "),s("th",[t._v("必填")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("announces_type")]),t._v(" "),s("td",[t._v("否")]),t._v(" "),s("td",[t._v("number")]),t._v(" "),s("td",[t._v("公告类别 0:成员公告，1:欢迎公告，默认为成员公告")])]),t._v(" "),s("tr",[s("td",[t._v("recommend_channels")]),t._v(" "),s("td",[t._v("是")]),t._v(" "),s("td",[s("a",{attrs:{href:"#recommendchannel"}},[t._v("RecommendChannel[]")])]),t._v(" "),s("td",[t._v("推荐子频道列表")])])])]),t._v(" "),s("h3",{attrs:{id:"recommendchannel"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#recommendchannel"}},[t._v("#")]),t._v(" RecommendChannel")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("字段名")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("channel_id")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[s("RouterLink",{attrs:{to:"/develop/nodesdk/announce/channel.html"}},[t._v("子频道 ID")])],1)]),t._v(" "),s("tr",[s("td",[t._v("introduce")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("推荐语")])])])]),t._v(" "),s("h2",{attrs:{id:"返回说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#返回说明"}},[t._v("#")]),t._v(" 返回说明")]),t._v(" "),s("p",[t._v("返回 "),s("a",{attrs:{href:"#announce"}},[t._v("Announce")]),t._v(" 对象。")]),t._v(" "),s("h3",{attrs:{id:"announce"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#announce"}},[t._v("#")]),t._v(" Announce")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("字段名")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("guild_id")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[s("RouterLink",{attrs:{to:"/develop/nodesdk/model/guild.html"}},[t._v("频道 ID")])],1)]),t._v(" "),s("tr",[s("td",[t._v("channel_id")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[s("RouterLink",{attrs:{to:"/develop/nodesdk/model/channel.html"}},[t._v("子频道 ID")])],1)]),t._v(" "),s("tr",[s("td",[t._v("message_id")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[s("RouterLink",{attrs:{to:"/develop/nodesdk/model/message.html"}},[t._v("消息 ID")])],1)]),t._v(" "),s("tr",[s("td",[t._v("announce_type")]),t._v(" "),s("td",[t._v("number")]),t._v(" "),s("td",[t._v("推荐类别 0:成员公告; 1:欢迎公告")])]),t._v(" "),s("tr",[s("td",[t._v("recommend_channels")]),t._v(" "),s("td",[s("a",{attrs:{href:"#recommendchannel"}},[t._v("RecommendChannel[]")]),t._v(" 数组")]),t._v(" "),s("td",[t._v("推荐子频道详情列表")])])])]),t._v(" "),s("h2",{attrs:{id:"返回示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#返回示例"}},[t._v("#")]),t._v(" 返回示例")]),t._v(" "),s("p",[s("code",[t._v("data")]),t._v("：")]),t._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"guild_id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxxxxx"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"channel_id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxxxx"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"message_id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"announces_type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"recommend_channels"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"channel_id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxxx"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"introduce"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"推荐语"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"channel_id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxxx"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"introduce"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"推荐语"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);