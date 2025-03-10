(window.webpackJsonp=window.webpackJsonp||[]).push([[240],{715:function(t,e,_){"use strict";_.r(e);var v=_(11),a=Object(v.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"消息对象-message"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#消息对象-message"}},[t._v("#")]),t._v(" 消息对象(Message)")]),t._v(" "),e("h2",{attrs:{id:"message"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#message"}},[t._v("#")]),t._v(" Message")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("字段名")]),t._v(" "),e("th",[t._v("类型")]),t._v(" "),e("th",[t._v("描述")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("id")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("消息 id")])]),t._v(" "),e("tr",[e("td",[t._v("channel_id")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("子频道 ID")])]),t._v(" "),e("tr",[e("td",[t._v("guild_id")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("频道 ID")])]),t._v(" "),e("tr",[e("td",[t._v("content")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("消息内容")])]),t._v(" "),e("tr",[e("td",[t._v("timestamp")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("消息创建时间，是个 "),e("code",[t._v("iISO8601 timestamp")]),t._v(' 字符串，例："2021-11-23T15:16:48+08:00"')])]),t._v(" "),e("tr",[e("td",[t._v("edited_timestamp")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("消息编辑时间，是个 "),e("code",[t._v("iISO8601 timestamp")]),t._v(' 字符串，例："2021-11-23T15:16:48+08:00"')])]),t._v(" "),e("tr",[e("td",[t._v("mention_everyone")]),t._v(" "),e("td",[t._v("boolean")]),t._v(" "),e("td",[t._v("是否是@全员消息")])]),t._v(" "),e("tr",[e("td",[t._v("author")]),t._v(" "),e("td",[e("a",{attrs:{href:"/user#user"}},[t._v("User")])]),t._v(" "),e("td",[t._v("消息创建者")])]),t._v(" "),e("tr",[e("td",[t._v("attachments")]),t._v(" "),e("td",[e("a",{attrs:{href:"#messageattachment"}},[t._v("MessageAttachment[]")])]),t._v(" "),e("td",[t._v("附件")])]),t._v(" "),e("tr",[e("td",[t._v("embeds")]),t._v(" "),e("td",[e("a",{attrs:{href:"#messageembed"}},[t._v("MessageEmbed[]")])]),t._v(" "),e("td",[t._v("embed")])]),t._v(" "),e("tr",[e("td",[t._v("mentions")]),t._v(" "),e("td",[e("a",{attrs:{href:"/user#user"}},[t._v("User")])]),t._v(" "),e("td",[t._v("消息中@的人")])]),t._v(" "),e("tr",[e("td",[t._v("member")]),t._v(" "),e("td",[e("a",{attrs:{href:"d#member"}},[t._v("Member")])]),t._v(" "),e("td",[t._v("消息创建者的 member 信息")])]),t._v(" "),e("tr",[e("td",[t._v("ark")]),t._v(" "),e("td",[e("a",{attrs:{href:"#messageark"}},[t._v("MessageArk")])]),t._v(" "),e("td",[t._v("ark 消息")])]),t._v(" "),e("tr",[e("td",[t._v("seq")]),t._v(" "),e("td",[t._v("number")]),t._v(" "),e("td",[t._v("用于消息间的排序，seq 在同一子频道中按从先到后的顺序递增，不同的子频道之前消息无法排序。(目前只在消息事件中有值，后续废弃)")])]),t._v(" "),e("tr",[e("td",[t._v("seq_in_channel")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("子频道消息 seq，用于消息间的排序，seq 在同一子频道中按从先到后的顺序递增，不同的子频道之前消息无法排序")])]),t._v(" "),e("tr",[e("td",[t._v("message_reference")]),t._v(" "),e("td",[e("a",{attrs:{href:"#messagereference"}},[t._v("MessageReference")])]),t._v(" "),e("td",[t._v("引用消息对象")])])])]),t._v(" "),e("h2",{attrs:{id:"messagesendrequest"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#messagesendrequest"}},[t._v("#")]),t._v(" MessageSendRequest")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("字段名")]),t._v(" "),e("th",[t._v("类型")]),t._v(" "),e("th",[t._v("描述")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("content")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("消息内容，文本内容，支持"),e("RouterLink",{attrs:{to:"/develop/gosdk/model/message_format.html"}},[t._v("内嵌格式")])],1)]),t._v(" "),e("tr",[e("td",[t._v("embed")]),t._v(" "),e("td",[e("a",{attrs:{href:"#messageembed"}},[t._v("MessageEmbed")])]),t._v(" "),e("td",[t._v("embed 消息，一种特殊的 ark")])]),t._v(" "),e("tr",[e("td",[t._v("ark")]),t._v(" "),e("td",[e("a",{attrs:{href:"#messageark"}},[t._v("MessageArk")])]),t._v(" "),e("td",[t._v("ark 消息")])]),t._v(" "),e("tr",[e("td",[t._v("image")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("图片 url 地址")])]),t._v(" "),e("tr",[e("td",[t._v("msg_id")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("要回复的消息 id。"),e("strong",[t._v("带了 msg_id 视为被动回复消息，否则视为主动推送消息")])])]),t._v(" "),e("tr",[e("td",[t._v("message_reference")]),t._v(" "),e("td",[e("a",{attrs:{href:"#messagereference"}},[t._v("MessageReference")])]),t._v(" "),e("td",[t._v("引用消息对象")])])])]),t._v(" "),e("h2",{attrs:{id:"messageembed"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#messageembed"}},[t._v("#")]),t._v(" MessageEmbed")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("字段名")]),t._v(" "),e("th",[t._v("类型")]),t._v(" "),e("th",[t._v("描述")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("title")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("标题")])]),t._v(" "),e("tr",[e("td",[t._v("description")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("描述")])]),t._v(" "),e("tr",[e("td",[t._v("prompt")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("消息弹窗内容")])]),t._v(" "),e("tr",[e("td",[t._v("timestamp")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("消息创建时间，是个 "),e("code",[t._v("ISO8601 timestamp")]),t._v(' 字符串，例："2021-11-23T15:16:48+08:00"')])]),t._v(" "),e("tr",[e("td",[t._v("fields")]),t._v(" "),e("td",[e("a",{attrs:{href:"#messageembedfield"}},[t._v("MessageEmbedField[]")])]),t._v(" "),e("td",[t._v("消息体")])])])]),t._v(" "),e("h2",{attrs:{id:"messageembedfield"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#messageembedfield"}},[t._v("#")]),t._v(" MessageEmbedField")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("字段名")]),t._v(" "),e("th",[t._v("类型")]),t._v(" "),e("th",[t._v("描述")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("name")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("字段名")])]),t._v(" "),e("tr",[e("td",[t._v("value")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("字段值")])])])]),t._v(" "),e("h2",{attrs:{id:"messageattachment"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#messageattachment"}},[t._v("#")]),t._v(" MessageAttachment")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("字段名")]),t._v(" "),e("th",[t._v("类型")]),t._v(" "),e("th",[t._v("描述")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("url")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("下载地址")])])])]),t._v(" "),e("h2",{attrs:{id:"messageark"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#messageark"}},[t._v("#")]),t._v(" MessageArk")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("字段名")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("template_id")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("number")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("ark 模板 id（需要先申请）")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("kv")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("a",{attrs:{href:"#messagearkkv"}},[t._v("MessageAkrKv[]")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("kv 值列表")])])])]),t._v(" "),e("h2",{attrs:{id:"messagearkkv"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#messagearkkv"}},[t._v("#")]),t._v(" MessageArkKv")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("字段名")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("key")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("key")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("value")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("value")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("obj")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("a",{attrs:{href:"#messagearkobj"}},[t._v("MessageArkObj[]")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("ark obj 类型的列表")])])])]),t._v(" "),e("h2",{attrs:{id:"messagearkobj"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#messagearkobj"}},[t._v("#")]),t._v(" MessageArkObj")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("字段名")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("obj_kv")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("a",{attrs:{href:"#messageobjkv"}},[t._v("MessageArkObjKv[]")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("ark objkv 列表")])])])]),t._v(" "),e("h2",{attrs:{id:"messagearkobjkv"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#messagearkobjkv"}},[t._v("#")]),t._v(" MessageArkObjKv")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("字段名")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("key")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("key")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("value")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("value")])])])]),t._v(" "),e("h2",{attrs:{id:"messagereference"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#messagereference"}},[t._v("#")]),t._v(" MessageReference")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("字段名")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("必填 ｜描述")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("message_id")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("是 ｜ 需要引用回复的消息 ID")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("ignore_get_message_error")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("boolean")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("否 ｜ 是否忽略获取引用消息详情错误，默认否")])])])]),t._v(" "),e("h2",{attrs:{id:"messageaudited"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#messageaudited"}},[t._v("#")]),t._v(" MessageAudited")]),t._v(" "),e("p",[t._v("消息审核对象")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("字段名")]),t._v(" "),e("th",[t._v("类型")]),t._v(" "),e("th",[t._v("描述")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("audit_id")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("消息审核 ID")])]),t._v(" "),e("tr",[e("td",[t._v("message_id")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("消息 ID，只有审核通过事件才会有值")])]),t._v(" "),e("tr",[e("td",[t._v("guild_id")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("频道 ID")])]),t._v(" "),e("tr",[e("td",[t._v("channel_id")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("子频道 ID")])]),t._v(" "),e("tr",[e("td",[t._v("audit_time")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("消息审核时间，是个 "),e("code",[t._v("ISO8601 timestamp")]),t._v(' 字符串，例："2021-11-23T15:16:48+08:00"')])]),t._v(" "),e("tr",[e("td",[t._v("create_time")]),t._v(" "),e("td",[t._v("string timestamp")]),t._v(" "),e("td",[t._v("消息创建时间，是个 "),e("code",[t._v("ISO8601 timestamp")]),t._v(' 字符串，例："2021-11-23T15:16:48+08:00"')])]),t._v(" "),e("tr",[e("td",[t._v("seq_in_channel")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("子频道消息 seq，用于消息间的排序，seq 在同一子频道中按从先到后的顺序递增，不同的子频道之前消息无法排序")])])])])])}),[],!1,null,null,null);e.default=a.exports}}]);