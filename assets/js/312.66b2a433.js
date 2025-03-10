(window.webpackJsonp=window.webpackJsonp||[]).push([[312],{789:function(t,a,e){"use strict";e.r(a);var s=e(11),v=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"删除表情表态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除表情表态"}},[t._v("#")]),t._v(" 删除表情表态 "),a("Badge",{attrs:{text:"v2.9.0"}})],1),t._v(" "),a("p",[t._v("删除自己对消息 "),a("code",[t._v("message_id")]),t._v(" 的表情表态。")]),t._v(" "),a("h2",{attrs:{id:"使用示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用示例"}},[t._v("#")]),t._v(" 使用示例")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("demo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" data "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" client"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("reactionApi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("deleteReaction")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("channelId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reactionObj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("h2",{attrs:{id:"参数说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数说明"}},[t._v("#")]),t._v(" 参数说明")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("字段名")]),t._v(" "),a("th",[t._v("必填")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("channelId")]),t._v(" "),a("td",[t._v("是")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/develop/nodesdk/model/channel.html"}},[t._v("子频道 ID")])],1)]),t._v(" "),a("tr",[a("td",[t._v("reactionObj")]),t._v(" "),a("td",[t._v("是")]),t._v(" "),a("td",[a("a",{attrs:{href:"#reactiontodelete"}},[t._v("ReactionToDelete")])]),t._v(" "),a("td",[t._v("表情表态对象")])])])]),t._v(" "),a("h3",{attrs:{id:"reactiontodelete"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reactiontodelete"}},[t._v("#")]),t._v(" ReactionToDelete "),a("Badge",{attrs:{text:"v2.9.1"}})],1),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[a("code",[t._v("v2.9.0")]),t._v(" 版本的"),a("code",[t._v("emojy_type")]),t._v("、"),a("code",[t._v("emojy_id")]),t._v("存在拼写错误（emojy -> emoji），该错误已在 v2.9.1 版本修正，如使用 v2.9.0 版本，请留意升级后修正 "),a("code",[t._v("emoji_type")]),t._v(" 和 "),a("code",[t._v("emoji_id")]),t._v("拼写。")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("字段名")]),t._v(" "),a("th",[t._v("必填")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("message_id")]),t._v(" "),a("td",[t._v("是")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/develop/nodesdk/model/message.html"}},[t._v("消息 ID")])],1)]),t._v(" "),a("tr",[a("td",[t._v("emoji_type")]),t._v(" "),a("td",[t._v("是")]),t._v(" "),a("td",[t._v("number")]),t._v(" "),a("td",[t._v("表情类型，参考"),a("RouterLink",{attrs:{to:"/develop/nodesdk/model/emoji.html#EmojiType"}},[t._v("EmojiType")])],1)]),t._v(" "),a("tr",[a("td",[t._v("emoji_id")]),t._v(" "),a("td",[t._v("是")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("表情 ID，参考 "),a("RouterLink",{attrs:{to:"/develop/nodesdk/model/emoji.html#Emoji-列表"}},[t._v("Emoji 列表")])],1)])])]),t._v(" "),a("h2",{attrs:{id:"返回说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#返回说明"}},[t._v("#")]),t._v(" 返回说明")]),t._v(" "),a("p",[t._v("成功返回空对象。")]),t._v(" "),a("h2",{attrs:{id:"返回示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#返回示例"}},[t._v("#")]),t._v(" 返回示例")]),t._v(" "),a("p",[a("code",[t._v("data")]),t._v("：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])])])}),[],!1,null,null,null);a.default=v.exports}}]);