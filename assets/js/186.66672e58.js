(window.webpackJsonp=window.webpackJsonp||[]).push([[186],{660:function(t,s,a){"use strict";a.r(s);var n=a(11),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"创建频道-api-权限授权链接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建频道-api-权限授权链接"}},[t._v("#")]),t._v(" 创建频道 API 权限授权链接")]),t._v(" "),s("p",[t._v("用于创建 API 接口权限授权链接，该链接指向 "),s("code",[t._v("guildID")]),t._v(" 对应的频道 。调用成功后，参数指定的子频道会受到一条”申请授权【xxx】权限“消息，管理员点击可进行机器人 API 权限授予。")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),s("ul",[s("li",[t._v("需要建立 ws 连接。")]),t._v(" "),s("li",[t._v("每天只能在一个频道内发 "),s("code",[t._v("3")]),t._v(" 条（默认值）频道权限授权链接，如需调整，请联系平台申请权限。")])])]),t._v(" "),s("h2",{attrs:{id:"使用示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用示例"}},[t._v("#")]),t._v(" 使用示例")]),t._v(" "),s("div",{staticClass:"language-go line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[t._v("token "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" token"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("BotToken")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"appid"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"token"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\napi "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" botgo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewOpenAPI")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("token"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("WithTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Second"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nctx "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Background")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\npermissionDemand"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" api"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("RequireAPIPermissions")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" guildId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("dto"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("APIPermissionDemandToCreate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  ChannelID"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" channelId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  APIIdentify"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("dto"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("APIPermissionDemandIdentify"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/guilds/{guild_id}"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    Method"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"GET"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  Desc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"机器人申请对应的 API 接口权限后可以使用功能的描述"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  log"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Fatalln")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"调用 RequireAPIPermissions 接口失败, err = "')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br")])]),s("h2",{attrs:{id:"参数说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参数说明"}},[t._v("#")]),t._v(" 参数说明")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("字段名")]),t._v(" "),s("th",[t._v("必填")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("guildId")]),t._v(" "),s("td",[t._v("是")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[s("RouterLink",{attrs:{to:"/develop/gosdk/model/guild.html"}},[t._v("频道 ID")])],1)]),t._v(" "),s("tr",[s("td",[t._v("demand")]),t._v(" "),s("td",[t._v("是")]),t._v(" "),s("td",[s("a",{attrs:{href:"#APIPermissionDemandToCreate"}},[t._v("APIPermissionDemandToCreate")])]),t._v(" "),s("td",[t._v("授权链接对象")])])])]),t._v(" "),s("h3",{attrs:{id:"apipermissiondemandtocreate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#apipermissiondemandtocreate"}},[t._v("#")]),t._v(" APIPermissionDemandToCreate")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("字段名")]),t._v(" "),s("th",[t._v("必填")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("ChannelID")]),t._v(" "),s("td",[t._v("是")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("授权链接发送的"),s("RouterLink",{attrs:{to:"/develop/gosdk/model/channel.html"}},[t._v("子频道 ID")])],1)]),t._v(" "),s("tr",[s("td",[t._v("APIIdentify")]),t._v(" "),s("td",[t._v("是")]),t._v(" "),s("td",[s("a",{attrs:{href:"#APIPermissionDemandIdentify"}},[t._v("APIPermissionDemandIdentify")])]),t._v(" "),s("td",[t._v("API 权限需求标识对象")])]),t._v(" "),s("tr",[s("td",[t._v("Desc")]),t._v(" "),s("td",[t._v("否")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("机器人申请对应的 API 接口权限后可以使用功能的描述")])])])]),t._v(" "),s("h3",{attrs:{id:"apipermissiondemandidentify"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#apipermissiondemandidentify"}},[t._v("#")]),t._v(" APIPermissionDemandIdentify")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("字段名")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Path")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("API 接口名，例如 "),s("code",[t._v("/guilds/{guild_id}/members/{user_id}")])])]),t._v(" "),s("tr",[s("td",[t._v("Method")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("请求方法，例如 "),s("code",[t._v("GET")])])])])]),t._v(" "),s("h2",{attrs:{id:"返回说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#返回说明"}},[t._v("#")]),t._v(" 返回说明")]),t._v(" "),s("p",[t._v("返回 "),s("a",{attrs:{href:"#APIPermissionDemand"}},[t._v("APIPermissionDemand")]),t._v("对象。")]),t._v(" "),s("h3",{attrs:{id:"apipermissiondemand"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#apipermissiondemand"}},[t._v("#")]),t._v(" APIPermissionDemand")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("字段名")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("GuildID")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("申请接口权限的频道 ID")])]),t._v(" "),s("tr",[s("td",[t._v("ChannelID")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("接口权限需求授权链接发送的子频道 ID")])]),t._v(" "),s("tr",[s("td",[t._v("APIIdentify")]),t._v(" "),s("td",[s("a",{attrs:{href:"#APIPermissionDemandIdentify"}},[t._v("APIPermissionDemandIdentify")])]),t._v(" "),s("td",[t._v("权限接口唯一标识")])]),t._v(" "),s("tr",[s("td",[t._v("Title")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("接口权限链接中的接口权限描述信息")])]),t._v(" "),s("tr",[s("td",[t._v("Desc")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("接口权限链接中的机器人可使用功能的描述信息")])])])]),t._v(" "),s("h2",{attrs:{id:"返回示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#返回示例"}},[t._v("#")]),t._v(" 返回示例")]),t._v(" "),s("p",[s("code",[t._v("data")]),t._v("：")]),t._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"guild_id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"123456"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"channel_id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"112233"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"api_identify"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"path"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/guilds/{guild_id}"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"method"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"GET"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"title"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"申请授权【获取频道】权限"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"desc"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"允许授权后才能正常使用机器人「频道权限」功能"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br")])]),s("p",[t._v("此时打开”"),s("strong",[t._v("ChannelID")]),t._v("“对应的频道，可看到一条机器人发出的 API 授权申请消息。")])])}),[],!1,null,null,null);s.default=e.exports}}]);