(window.webpackJsonp=window.webpackJsonp||[]).push([[211],{686:function(t,s,a){"use strict";a.r(s);var e=a(11),r=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"消息内嵌格式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#消息内嵌格式"}},[t._v("#")]),t._v(" 消息内嵌格式")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),s("ul",[s("li",[t._v("消息不支持 markdown 格式，会自动移除 markdown 格式")]),t._v(" "),s("li",[t._v("内嵌格式仅在 content 中会生效，在 Ark 和 Embed 中不生效")])])]),t._v(" "),s("h2",{attrs:{id:"使用示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用示例"}},[t._v("#")]),t._v(" 使用示例")]),t._v(" "),s("div",{staticClass:"language-go line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[t._v("token "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" token"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("BotToken")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"appid"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"token"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\napi "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" botgo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewOpenAPI")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("token"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("WithTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Second"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nctx "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Background")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nmessage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" api"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("PostMessage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" channelId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("dto"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MessageToCreate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  MsgID"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("   msgId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//如果未空则表示主动消息")]),t._v("\n  Content"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<@!1234>hello world"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  log"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Fatalln")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"调用 PostMessage 接口失败, err = "')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br")])]),s("h2",{attrs:{id:"参数说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参数说明"}},[t._v("#")]),t._v(" 参数说明")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数")]),t._v(" "),s("th",[t._v("必填")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("channelID")]),t._v(" "),s("td",[t._v("是")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("子频道 ID")])]),t._v(" "),s("tr",[s("td",[t._v("MessageToCreate")]),t._v(" "),s("td",[t._v("是")]),t._v(" "),s("td",[s("a",{attrs:{href:"#MessageToCreate"}},[t._v("MessageToCreate")])]),t._v(" "),s("td",[t._v("消息体结构")])])])]),t._v(" "),s("h2",{attrs:{id:"messagetocreate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#messagetocreate"}},[t._v("#")]),t._v(" MessageToCreate")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("字段名")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Content")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("消息内容，文本内容，支持"),s("RouterLink",{attrs:{to:"/develop/gosdk/api/message/message_format.html"}},[t._v("内嵌格式")])],1)]),t._v(" "),s("tr",[s("td",[t._v("Embed")]),t._v(" "),s("td",[s("a",{attrs:{href:"#Embed"}},[t._v("Embed")])]),t._v(" "),s("td",[t._v("embed 消息，一种特殊的 ark")])]),t._v(" "),s("tr",[s("td",[t._v("Ark")]),t._v(" "),s("td",[s("a",{attrs:{href:"#Ark"}},[t._v("Ark")])]),t._v(" "),s("td",[t._v("ark 消息")])]),t._v(" "),s("tr",[s("td",[t._v("Image")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("图片 url 地址")])]),t._v(" "),s("tr",[s("td",[t._v("MsgID")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("要回复的消息 id。"),s("strong",[t._v("带了 msg_id 视为"),s("a",{attrs:{href:"#%E8%A2%AB%E5%8A%A8%E5%9B%9E%E5%A4%8D%E6%B6%88%E6%81%AF"}},[t._v("被动回复消息")]),t._v("，否则视为主动推送消息")])])]),t._v(" "),s("tr",[s("td",[t._v("MessageReference")]),t._v(" "),s("td",[s("a",{attrs:{href:"#MessageReference"}},[t._v("MessageReference")])]),t._v(" "),s("td",[t._v("引用消息对象")])])])]),t._v(" "),s("h2",{attrs:{id:"embed"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#embed"}},[t._v("#")]),t._v(" Embed")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("字段名")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Title")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("标题")])]),t._v(" "),s("tr",[s("td",[t._v("Description")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("描述")])]),t._v(" "),s("tr",[s("td",[t._v("Prompt")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("消息弹窗内容")])]),t._v(" "),s("tr",[s("td",[t._v("Thumbnail")]),t._v(" "),s("td",[s("a",{attrs:{href:"#MessageEmbedThumbnail"}},[t._v("MessageEmbedThumbnail")])]),t._v(" "),s("td",[t._v("消息的缩略图象")])]),t._v(" "),s("tr",[s("td",[t._v("Fields")]),t._v(" "),s("td",[s("a",{attrs:{href:"#EmbedField"}},[t._v("EmbedField[]")])]),t._v(" "),s("td",[t._v("Embed字段描述")])])])]),t._v(" "),s("h2",{attrs:{id:"embedfield"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#embedfield"}},[t._v("#")]),t._v(" EmbedField")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("字段名")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Name")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("字段名")])]),t._v(" "),s("tr",[s("td",[t._v("Value")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("字段值")])])])]),t._v(" "),s("h2",{attrs:{id:"messageembedthumbnail"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#messageembedthumbnail"}},[t._v("#")]),t._v(" MessageEmbedThumbnail")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("字段名")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("URL")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("缩略图url")])])])]),t._v(" "),s("h3",{attrs:{id:"支持的格式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#支持的格式"}},[t._v("#")]),t._v(" 支持的格式")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("结构")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("描述")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("示例")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("@用户")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("<@user_id>")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("解析为 @用户 标签")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("<@1234000000001>")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("@所有人")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("@everyone")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("解析为 @所有人 标签，需要机器人拥有发送 @所有人 消息的权限")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("@everyone")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("#子频道")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("<#channel_id>")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("解析为 #子频道 标签，点击可以跳转至子频道，仅支持当前频道内的子频道")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("<#12345>")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("表情")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("a",{attrs:{href:"emoji:id"}},[t._v("emoji:id")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("解析为系统表情，具体表情 id 参考 Emoji 列表，仅支持 type=1 的系统表情，type=2 的 emoji 表情直接按字符串填写即可")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("a",{attrs:{href:"emoji:4"}},[t._v("emoji:4")]),t._v(" 解析为得意表情")])])])]),t._v(" "),s("h2",{attrs:{id:"返回说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#返回说明"}},[t._v("#")]),t._v(" 返回说明")]),t._v(" "),s("p",[t._v("返回"),s("a",{attrs:{href:"#message"}},[t._v("Message")]),t._v(" 对象。")]),t._v(" "),s("h3",{attrs:{id:"message"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#message"}},[t._v("#")]),t._v(" Message")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("字段名")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("ID")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("消息 ID")])]),t._v(" "),s("tr",[s("td",[t._v("ChannelID")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("子频道 ID")])]),t._v(" "),s("tr",[s("td",[t._v("GuildID")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("频道 ID")])]),t._v(" "),s("tr",[s("td",[t._v("Content")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("消息内容")])]),t._v(" "),s("tr",[s("td",[t._v("Timestamp")]),t._v(" "),s("td",[s("a",{attrs:{href:"#Timestamp"}},[t._v("Timestamp")])]),t._v(" "),s("td",[t._v("消息创建时间，是个 "),s("code",[t._v("iISO8601 timestamp")]),t._v(' 字符串，例："2021-11-23T15:16:48+08:00"')])]),t._v(" "),s("tr",[s("td",[t._v("Author")]),t._v(" "),s("td",[s("a",{attrs:{href:"#user"}},[t._v("User")])]),t._v(" "),s("td",[t._v("消息创建者")])]),t._v(" "),s("tr",[s("td",[t._v("Member")]),t._v(" "),s("td",[s("a",{attrs:{href:"#member"}},[t._v("Member")])]),t._v(" "),s("td",[t._v("消息创建者的 member 信息")])])])]),t._v(" "),s("h3",{attrs:{id:"user"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#user"}},[t._v("#")]),t._v(" User")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("字段名")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("ID")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("用户 ID")])]),t._v(" "),s("tr",[s("td",[t._v("Username")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("用户名")])]),t._v(" "),s("tr",[s("td",[t._v("Avatar")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("用户头像地址")])]),t._v(" "),s("tr",[s("td",[t._v("Bot")]),t._v(" "),s("td",[t._v("bool")]),t._v(" "),s("td",[t._v("是否是机器人")])]),t._v(" "),s("tr",[s("td",[t._v("UnionOpenID")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("特殊关联应用的 openid，需要特殊申请并配置后才会返回。如需申请，请联系平台运营人员。")])]),t._v(" "),s("tr",[s("td",[t._v("UnionUserAccount")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("机器人关联的互联应用的用户信息，与 union_openid 关联的应用是同一个。如需申请，请联系平台运营人员。")])])])]),t._v(" "),s("h3",{attrs:{id:"member"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#member"}},[t._v("#")]),t._v(" Member")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("字段名")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("GuildID")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("频道ID")])]),t._v(" "),s("tr",[s("td",[t._v("User")]),t._v(" "),s("td",[s("a",{attrs:{href:"#user"}},[t._v("User")])]),t._v(" "),s("td",[t._v("用户基础信息，来自 QQ 资料，只有成员相关接口中会填充此信息")])]),t._v(" "),s("tr",[s("td",[t._v("Nick")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("用户在频道内的昵称")])]),t._v(" "),s("tr",[s("td",[t._v("Roles")]),t._v(" "),s("td",[t._v("string[]")]),t._v(" "),s("td",[t._v("用户在频道内的身份组 ID，默认值可参考"),s("RouterLink",{attrs:{to:"/develop/gosdk/api/guild/role_model.html#DefaultRoleIDs"}},[t._v("DefaultRoleIDs")])],1)]),t._v(" "),s("tr",[s("td",[t._v("JoinedAt")]),t._v(" "),s("td",[s("a",{attrs:{href:"#Timestamp"}},[t._v("Timestamp")])]),t._v(" "),s("td",[t._v("用户加入频道的时间，是个 "),s("code",[t._v("ISO8601 timestamp")]),t._v(' 字符串，例："2021-11-23T15:16:48+08:00"')])])])]),t._v(" "),s("h3",{attrs:{id:"defaultroleids"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#defaultroleids"}},[t._v("#")]),t._v(" DefaultRoleIDs")]),t._v(" "),s("p",[t._v("系统默认生成下列身份组 ID。")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("身份组 ID 默认值")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("1")]),t._v(" "),s("td",[t._v("全体成员")])]),t._v(" "),s("tr",[s("td",[t._v("2")]),t._v(" "),s("td",[t._v("管理员")])]),t._v(" "),s("tr",[s("td",[t._v("4")]),t._v(" "),s("td",[t._v("群主/创建者")])]),t._v(" "),s("tr",[s("td",[t._v("5")]),t._v(" "),s("td",[t._v("子频道管理员")])])])]),t._v(" "),s("h3",{attrs:{id:"timestamp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#timestamp"}},[t._v("#")]),t._v(" Timestamp")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("字段名")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Timestamp")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("时间")])])])]),t._v(" "),s("h2",{attrs:{id:"返回示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#返回示例"}},[t._v("#")]),t._v(" 返回示例")]),t._v(" "),s("p",[t._v("以发送文本内容"),s("code",[t._v("<@!1234>hello world")]),t._v("为例，下面是返回示例：")]),t._v(" "),s("p",[s("code",[t._v("data")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxxxxx"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"channel_id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxxxxx"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"guild_id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxxxxx"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"content"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<@!1234>hello world"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"timestamp"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2021-05-13T14:45:45+08:00"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tts"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"mention_everyone"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"author"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxxxxx"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"username"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"abc"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"avatar"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"bot"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"embeds"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pinned"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"flags"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br")])])])}),[],!1,null,null,null);s.default=r.exports}}]);