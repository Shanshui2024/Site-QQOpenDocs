(window.webpackJsonp=window.webpackJsonp||[]).push([[375],{852:function(t,s,a){"use strict";a.r(s);var n=a(11),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"修改日程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修改日程"}},[t._v("#")]),t._v(" 修改日程")]),t._v(" "),s("p",[t._v("修改"),s("code",[t._v("日程子频道")]),t._v("里的一个日程。")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),s("p",[t._v("要求操作人具有管理频道的权限，如果是机器人，则需要将机器人设置为管理员。")])]),t._v(" "),s("h2",{attrs:{id:"使用示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用示例"}},[t._v("#")]),t._v(" 使用示例")]),t._v(" "),s("div",{staticClass:"language-python line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" time\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" botpy\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" botpy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("message "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Message\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyClient")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("botpy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Client"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("on_at_message_create")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        delay "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),t._v("\n        start_time "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("round")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" delay\n        end_time "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" start_time "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" delay\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("api"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("update_schedule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            channel_id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"日程子频道ID"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            schedule_id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"日程ID"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            start_timestamp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("start_time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            end_timestamp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("end_time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            jump_channel_id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"日程子频道ID"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            remind_type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nintents "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" botpy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Intents"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("public_guild_messages"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nclient "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" MyClient"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("intents"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("intents"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nclient"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("run"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("appid"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("appid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" token"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("token"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br")])]),s("h2",{attrs:{id:"参数说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参数说明"}},[t._v("#")]),t._v(" 参数说明")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("字段名")]),t._v(" "),s("th",[t._v("必填")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("channel_id")]),t._v(" "),s("td",[t._v("是")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("子频道 ID")])]),t._v(" "),s("tr",[s("td",[t._v("schedule_id")]),t._v(" "),s("td",[t._v("是")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("日程 ID")])]),t._v(" "),s("tr",[s("td",[t._v("name")]),t._v(" "),s("td",[t._v("否")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("日程名称")])]),t._v(" "),s("tr",[s("td",[t._v("description")]),t._v(" "),s("td",[t._v("否")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("日程描述")])]),t._v(" "),s("tr",[s("td",[t._v("start_timestamp")]),t._v(" "),s("td",[t._v("是")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("日程开始时间戳("),s("strong",[s("code",[t._v("ms")])]),t._v(")")])]),t._v(" "),s("tr",[s("td",[t._v("end_timestamp")]),t._v(" "),s("td",[t._v("是")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("日程结束时间戳("),s("strong",[s("code",[t._v("ms")])]),t._v(")")])]),t._v(" "),s("tr",[s("td",[t._v("creator")]),t._v(" "),s("td",[t._v("否")]),t._v(" "),s("td",[s("a",{attrs:{href:"#member"}},[t._v("Member")])]),t._v(" "),s("td",[t._v("创建者")])]),t._v(" "),s("tr",[s("td",[t._v("jump_channel_id")]),t._v(" "),s("td",[t._v("否")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("日程开始时跳转到的子频道 ID")])]),t._v(" "),s("tr",[s("td",[t._v("remind_type")]),t._v(" "),s("td",[t._v("是")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("日程提醒类型，取值参考"),s("a",{attrs:{href:"#remindtype"}},[t._v("RemindType")])])])])]),t._v(" "),s("h2",{attrs:{id:"返回说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#返回说明"}},[t._v("#")]),t._v(" 返回说明")]),t._v(" "),s("p",[t._v("返回 "),s("a",{attrs:{href:"#schedule"}},[t._v("Schedule")]),t._v(" 对象。")]),t._v(" "),s("h3",{attrs:{id:"schedule"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#schedule"}},[t._v("#")]),t._v(" Schedule")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("字段名")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("id")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("日程 ID")])]),t._v(" "),s("tr",[s("td",[t._v("name")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("日程名称")])]),t._v(" "),s("tr",[s("td",[t._v("description")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("日程描述")])]),t._v(" "),s("tr",[s("td",[t._v("start_timestamp")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("日程开始时间戳("),s("strong",[s("code",[t._v("ms")])]),t._v(")")])]),t._v(" "),s("tr",[s("td",[t._v("end_timestamp")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("日程结束时间戳("),s("strong",[s("code",[t._v("ms")])]),t._v(")")])]),t._v(" "),s("tr",[s("td",[t._v("creator")]),t._v(" "),s("td",[s("a",{attrs:{href:"#member"}},[t._v("Member")])]),t._v(" "),s("td",[t._v("创建者")])]),t._v(" "),s("tr",[s("td",[t._v("jump_channel_id")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("日程开始时跳转到的子频道 ID")])]),t._v(" "),s("tr",[s("td",[t._v("remind_type")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("日程提醒类型，取值参考"),s("a",{attrs:{href:"#remindtype"}},[t._v("RemindType")])])])])]),t._v(" "),s("h3",{attrs:{id:"member"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#member"}},[t._v("#")]),t._v(" Member")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("字段名")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("user")]),t._v(" "),s("td",[s("a",{attrs:{href:"#user"}},[t._v("User")])]),t._v(" "),s("td",[t._v("用户的频道基础信息，只有成员相关接口中会填充此信息")])]),t._v(" "),s("tr",[s("td",[t._v("nick")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("用户在频道内的昵称")])]),t._v(" "),s("tr",[s("td",[t._v("joined_at")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("用户加入频道的时间，是个 "),s("code",[t._v("ISO8601 timestamp")]),t._v(' 字符串，例："2021-11-23T15:16:48+08:00"')])])])]),t._v(" "),s("h3",{attrs:{id:"user"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#user"}},[t._v("#")]),t._v(" User")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("字段名")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("id")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("用户 ID")])]),t._v(" "),s("tr",[s("td",[t._v("username")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("用户名")])]),t._v(" "),s("tr",[s("td",[t._v("bot")]),t._v(" "),s("td",[t._v("boolean")]),t._v(" "),s("td",[t._v("是否是机器人")])])])]),t._v(" "),s("h3",{attrs:{id:"remindtype"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#remindtype"}},[t._v("#")]),t._v(" RemindType")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("提醒类型 id")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("0")]),t._v(" "),s("td",[t._v("不提醒")])]),t._v(" "),s("tr",[s("td",[t._v("1")]),t._v(" "),s("td",[t._v("开始时提醒")])]),t._v(" "),s("tr",[s("td",[t._v("2")]),t._v(" "),s("td",[t._v("开始前 5 分钟提醒")])]),t._v(" "),s("tr",[s("td",[t._v("3")]),t._v(" "),s("td",[t._v("开始前 15 分钟提醒")])]),t._v(" "),s("tr",[s("td",[t._v("4")]),t._v(" "),s("td",[t._v("开始前 30 分钟提醒")])]),t._v(" "),s("tr",[s("td",[t._v("5")]),t._v(" "),s("td",[t._v("开始前 60 分钟提醒")])])])]),t._v(" "),s("h2",{attrs:{id:"返回示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#返回示例"}},[t._v("#")]),t._v(" 返回示例")]),t._v(" "),s("p",[s("code",[t._v("data")]),t._v("：")]),t._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxxxxx"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxxxxx"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"description"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxxxxx"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"start_timestamp"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1641913200000"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"end_timestamp"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1641916800000"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"creator"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"user"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxxxxx"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"username"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxxxxx"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"bot"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"nick"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"joined_at"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2021-11-24T16:51:35+08:00"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"jump_channel_id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"remind_type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br")])])])}),[],!1,null,null,null);s.default=r.exports}}]);