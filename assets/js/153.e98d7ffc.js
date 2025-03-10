(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{629:function(t,s,a){"use strict";a.r(s);var n=a(11),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"事件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事件"}},[t._v("#")]),t._v(" 事件")]),t._v(" "),s("h2",{attrs:{id:"单聊消息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#单聊消息"}},[t._v("#")]),t._v(" 单聊消息")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("说明")]),t._v(" "),s("p",[t._v("用户在单聊发送消息给机器人")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("基本概况")])])]),t._v(" "),s("table",[s("tr",[s("th",{attrs:{colspan:"2"}},[t._v("基本")])]),t._v(" "),s("tr",[s("td",[t._v("intents")]),t._v(" "),s("td",[t._v("1<<25")])]),t._v(" "),s("tr",[s("td",[t._v("事件类型")]),t._v(" "),s("td",[t._v("C2C_MESSAGE_CREATE")])]),t._v(" "),s("tr",[s("td",[t._v("触发场景")]),t._v(" "),s("td",[t._v("用户在单聊发送消息给机器人")])]),t._v(" "),s("tr",[s("td",[t._v("权限要求")]),t._v(" "),s("td",[t._v("无特殊要求")])]),t._v(" "),s("tr",[s("td",[t._v("推送方式")]),t._v(" "),s("td",[t._v("Websocket")])])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("事件字段")])])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[s("strong",[t._v("属性")])]),t._v(" "),s("th",[s("strong",[t._v("类型")])]),t._v(" "),s("th",[s("strong",[t._v("说明")])])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("id")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("平台方消息ID，可以用于被动消息发送")])]),t._v(" "),s("tr",[s("td",[t._v("author")]),t._v(" "),s("td",[t._v("object")]),t._v(" "),s("td",[t._v("发送者")])]),t._v(" "),s("tr",[s("td",[t._v("content")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("文本消息内容")])]),t._v(" "),s("tr",[s("td",[t._v("timestamp")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("消息生产时间（RFC3339）")])]),t._v(" "),s("tr",[s("td",[t._v("attachments")]),t._v(" "),s("td",[t._v("object[]")]),t._v(" "),s("td",[t._v('富媒体文件附件，文件类型："图片，语音，视频，文件"')])])])]),t._v(" "),s("p",[t._v("author对象")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[s("strong",[t._v("属性")])]),t._v(" "),s("th",[s("strong",[t._v("类型")])]),t._v(" "),s("th",[s("strong",[t._v("说明")])])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("user_openid")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("用户 openid")])])])]),t._v(" "),s("p",[t._v("attachment对象")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[s("strong",[t._v("属性")])]),t._v(" "),s("th",[s("strong",[t._v("类型")])]),t._v(" "),s("th",[s("strong",[t._v("说明")])])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("content_type")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v('文件类型，"image/jpeg","image/png","image/gif"，"file"，"video/mp4"，"voice"')])]),t._v(" "),s("tr",[s("td",[t._v("filename")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("文件名称")])]),t._v(" "),s("tr",[s("td",[t._v("height")]),t._v(" "),s("td",[t._v("int")]),t._v(" "),s("td",[t._v("图片高度")])]),t._v(" "),s("tr",[s("td",[t._v("width")]),t._v(" "),s("td",[t._v("int")]),t._v(" "),s("td",[t._v("图片宽度")])]),t._v(" "),s("tr",[s("td",[t._v("size")]),t._v(" "),s("td",[t._v("int")]),t._v(" "),s("td",[t._v("文件大小")])]),t._v(" "),s("tr",[s("td",[t._v("url")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("文件链接")])])])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("事件示例")])])]),t._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"author"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"user_openid"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"E4F4AEA33253A2797FB897C50B81D7ED"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"content"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"123"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ROBOT1.0_.b6nx.CVryAO0nR58RXuU6SC.m92gc19j02qKqdm8ek!"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"timestamp"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2023-11-06T13:37:18+08:00"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("ul",[s("li",[s("strong",[t._v("其他说明")])])]),t._v(" "),s("p",[t._v("为了确保消息可到达，极端情况下，相同的 msg_id 的消息会有概率重复推送，当开发者在做“被动回复消息”响应业务的时候，如果开发者不对 msg_id 的回复做存储排重后的回复逻辑，很可能会回复了两条相同的消息给用户，这里我们引入了一个 "),s("code",[t._v("msg_seq")]),t._v(" 的字段，便于过滤重复消息响应，可参考消息发送接口 msg_seq 的用法。")]),t._v(" "),s("h2",{attrs:{id:"群聊-机器人"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#群聊-机器人"}},[t._v("#")]),t._v(" 群聊@机器人")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("说明")]),t._v(" "),s("p",[t._v("用户在群内@机器人发动的消息")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("基本概况")])])]),t._v(" "),s("table",[s("tr",[s("th",{attrs:{colspan:"2"}},[t._v("基本")])]),t._v(" "),s("tr",[s("td",[t._v("intents")]),t._v(" "),s("td",[t._v("1<<25")])]),t._v(" "),s("tr",[s("td",[t._v("事件类型")]),t._v(" "),s("td",[t._v("GROUP_AT_MESSAGE_CREATE")])]),t._v(" "),s("tr",[s("td",[t._v("触发场景")]),t._v(" "),s("td",[t._v("用户在群聊@机器人发送消息")])]),t._v(" "),s("tr",[s("td",[t._v("权限要求")]),t._v(" "),s("td",[t._v("无特殊要求")])]),t._v(" "),s("tr",[s("td",[t._v("推送方式")]),t._v(" "),s("td",[t._v("Websocket")])])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("事件字段")])])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[s("strong",[t._v("属性")])]),t._v(" "),s("th",[s("strong",[t._v("类型")])]),t._v(" "),s("th",[s("strong",[t._v("说明")])])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("id")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("平台方消息 ID，可以用于被动消息发送")])]),t._v(" "),s("tr",[s("td",[t._v("author")]),t._v(" "),s("td",[t._v("object")]),t._v(" "),s("td",[t._v("发送者")])]),t._v(" "),s("tr",[s("td",[t._v("content")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("消息内容")])]),t._v(" "),s("tr",[s("td",[t._v("timestamp")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("消息生产时间（RFC3339）")])]),t._v(" "),s("tr",[s("td",[t._v("group_openid")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("群聊的 openid")])]),t._v(" "),s("tr",[s("td",[t._v("attachments")]),t._v(" "),s("td",[t._v("object[]")]),t._v(" "),s("td",[t._v('富媒体文件附件，文件类型："图片，语音，视频，文件"')])])])]),t._v(" "),s("p",[t._v("author对象")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[s("strong",[t._v("属性")])]),t._v(" "),s("th",[s("strong",[t._v("类型")])]),t._v(" "),s("th",[s("strong",[t._v("说明")])])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("member_openid")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("用户在本群的 member_openid")])])])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("事件示例")])])]),t._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Websocket")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"author"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"member_openid"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"E4F4AEA33253A2797FB897C50B81D7ED"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"content"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('" 123"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"group_openid"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"C9F778FE6ADF9D1D1DBE395BF744A33A"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ROBOT1.0_eBIyWnxpmSu6uLQ7u7fU0eGloKGYg4eEa737vRyKnMCgyZjKi7JLYkQ9B0VapbiY"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"timestamp"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2023-11-06T13:37:18+08:00"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br")])]),s("ul",[s("li",[s("strong",[t._v("其他说明")])])]),t._v(" "),s("p",[t._v("为了确保消息可到达，极端情况下，相同的 msg_id 的消息会有概率重复推送，当开发者在做“被动回复消息”响应业务的时候，如果开发者不对 msg_id 的回复做存储排重后的回复逻辑，很可能会回复了两条相同的消息给用户，这里我们引入了一个 "),s("code",[t._v("msg_seq")]),t._v(" 的字段，便于过滤重复消息响应，可参考消息发送接口 msg_seq 的用法。")]),t._v(" "),s("h2",{attrs:{id:"频道私信消息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#频道私信消息"}},[t._v("#")]),t._v(" 频道私信消息")]),t._v(" "),s("p",[t._v("用户在频道私信给机器人发送的消息")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("基本概况")])])]),t._v(" "),s("table",[s("tr",[s("th",{attrs:{colspan:"2"}},[t._v("基本")])]),t._v(" "),s("tr",[s("td",[t._v("事件类型")]),t._v(" "),s("td",[t._v("DIRECT_MESSAGE_CREATE")])]),t._v(" "),s("tr",[s("td",[t._v("触发场景")]),t._v(" "),s("td",[t._v("用户在频道私信内发送消息给机器人")])]),t._v(" "),s("tr",[s("td",[t._v("权限要求")]),t._v(" "),s("td",[t._v("无特殊要求")])]),t._v(" "),s("tr",[s("td",[t._v("推送方式")]),t._v(" "),s("td",[t._v("Websocket")])])]),t._v(" "),s("h3",{attrs:{id:"发送时机"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#发送时机"}},[t._v("#")]),t._v(" 发送时机")]),t._v(" "),s("ul",[s("li",[t._v("用户通过私信发消息给机器人时")]),t._v(" "),s("li",[t._v("由于私信场景无法设置沙箱频道，目前私信事件不支持沙箱环境，开发者可以通过用户 id 白名单的方式来调试私信")])]),t._v(" "),s("h3",{attrs:{id:"内容"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内容"}},[t._v("#")]),t._v(" 内容")]),t._v(" "),s("p",[t._v("内容为 "),s("RouterLink",{attrs:{to:"/develop/api-v2/server-inter/message/template/model.html#message"}},[t._v("Message")]),t._v(" 对象")],1),t._v(" "),s("h3",{attrs:{id:"示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"author"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"avatar"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://thirdqq.qlogo.cn/0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"bot"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1234"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"username"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"abc"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"channel_id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"100010"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"content"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ndnnd"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"guild_id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"18700000000001"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0812345677890abcdef"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"member"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"joined_at"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2021-04-12T16:34:42+08:00"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"roles"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"timestamp"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2021-05-20T15:14:58+08:00"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br")])]),s("h2",{attrs:{id:"文字子频道-机器人"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文字子频道-机器人"}},[t._v("#")]),t._v(" 文字子频道@机器人")]),t._v(" "),s("p",[t._v("用户在文字子频道内@机器人发送的消息")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("基本概况")])])]),t._v(" "),s("table",[s("tr",[s("th",{attrs:{colspan:"2"}},[t._v("基本")])]),t._v(" "),s("tr",[s("td",[t._v("事件类型")]),t._v(" "),s("td",[t._v("AT_MESSAGE_CREATE")])]),t._v(" "),s("tr",[s("td",[t._v("触发场景")]),t._v(" "),s("td",[t._v("用户在频道私信内发送消息给机器人")])]),t._v(" "),s("tr",[s("td",[t._v("权限要求")]),t._v(" "),s("td",[t._v("无特殊要求")])]),t._v(" "),s("tr",[s("td",[t._v("推送方式")]),t._v(" "),s("td",[t._v("Websocket")])])]),t._v(" "),s("h3",{attrs:{id:"发送时机-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#发送时机-2"}},[t._v("#")]),t._v(" 发送时机")]),t._v(" "),s("ul",[s("li",[t._v("用户发送消息，@当前机器人或回复机器人消息时")]),t._v(" "),s("li",[t._v("为保障消息投递的速度，消息顺序我们虽然会尽量有序，但是并不保证是严格有序的，如开发者对消息顺序有严格有序的需求，可以自行缓冲消息事件之后，基于 Message.seq 进行排序")])]),t._v(" "),s("h3",{attrs:{id:"内容-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内容-2"}},[t._v("#")]),t._v(" 内容")]),t._v(" "),s("p",[t._v("内容为 "),s("RouterLink",{attrs:{to:"/develop/api-v2/server-inter/message/template/model.html#message"}},[t._v("Message")]),t._v(" 对象")],1),t._v(" "),s("h3",{attrs:{id:"示例-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例-2"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"author"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"avatar"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://thirdqq.qlogo.cn/0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"bot"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1234"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"username"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"abc"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"channel_id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"100010"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"content"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ndnnd"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"guild_id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"18700000000001"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0812345677890abcdef"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"member"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"joined_at"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2021-04-12T16:34:42+08:00"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"roles"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"timestamp"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2021-05-20T15:14:58+08:00"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"seq"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("101")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br")])]),s("h2",{attrs:{id:"文字子频道全量消息-私域"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文字子频道全量消息-私域"}},[t._v("#")]),t._v(" 文字子频道全量消息（私域）")]),t._v(" "),s("p",[t._v("用户在文字子频道内发送的所有聊天消息（私域）")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("基本概况")])])]),t._v(" "),s("table",[s("tr",[s("th",{attrs:{colspan:"2"}},[t._v("基本")])]),t._v(" "),s("tr",[s("td",[t._v("事件类型")]),t._v(" "),s("td",[t._v("MESSAGE_CREATE")])]),t._v(" "),s("tr",[s("td",[t._v("触发场景")]),t._v(" "),s("td",[t._v("用户在频道私信内发送消息给机器人")])]),t._v(" "),s("tr",[s("td",[t._v("权限要求")]),t._v(" "),s("td",[t._v("无特殊要求")])]),t._v(" "),s("tr",[s("td",[t._v("推送方式")]),t._v(" "),s("td",[t._v("Websocket")])])]),t._v(" "),s("h3",{attrs:{id:"发送时机-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#发送时机-3"}},[t._v("#")]),t._v(" 发送时机")]),t._v(" "),s("ul",[s("li",[t._v("用户发送消息，@当前机器人或回复机器人消息时")]),t._v(" "),s("li",[t._v("为保障消息投递的速度，消息顺序我们虽然会尽量有序，但是并不保证是严格有序的，如开发者对消息顺序有严格有序的需求，可以自行缓冲消息事件之后，基于 Message.seq 进行排序")])]),t._v(" "),s("h3",{attrs:{id:"内容-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内容-3"}},[t._v("#")]),t._v(" 内容")]),t._v(" "),s("p",[t._v("内容为 "),s("RouterLink",{attrs:{to:"/develop/api-v2/server-inter/message/template/model.html#message"}},[t._v("Message")]),t._v(" 对象")],1),t._v(" "),s("h3",{attrs:{id:"示例-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例-3"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"author"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"avatar"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://thirdqq.qlogo.cn/0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"bot"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1234"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"username"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"abc"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"channel_id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"100010"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"content"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ndnnd"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"guild_id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"18700000000001"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0812345677890abcdef"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"member"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"joined_at"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2021-04-12T16:34:42+08:00"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"roles"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"timestamp"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2021-05-20T15:14:58+08:00"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"seq"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("101")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br")])])])}),[],!1,null,null,null);s.default=r.exports}}]);