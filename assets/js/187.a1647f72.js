(window.webpackJsonp=window.webpackJsonp||[]).push([[187],{665:function(t,a,s){"use strict";s.r(a);var n=s(11),r=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"音频控制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#音频控制"}},[t._v("#")]),t._v(" 音频控制")]),t._v(" "),a("h2",{attrs:{id:"使用示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用示例"}},[t._v("#")]),t._v(" 使用示例")]),t._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[t._v("token "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" token"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("BotToken")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"appid"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"token"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\napi "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" botgo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewOpenAPI")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("token"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("WithTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Second"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nctx "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\naudioControl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("PostAudio")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" channelId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("dto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AudioControl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  log"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Fatalln")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"调用 PostAudio 接口失败, err = "')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("h2",{attrs:{id:"参数说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数说明"}},[t._v("#")]),t._v(" 参数说明")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("字段名")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("channelId")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("子频道 id")])]),t._v(" "),a("tr",[a("td",[t._v("AudioControl")]),t._v(" "),a("td",[a("a",{attrs:{href:"#AudioControl"}},[t._v("AudioControl")])]),t._v(" "),a("td",[t._v("audio 控制参数")])])])]),t._v(" "),a("h2",{attrs:{id:"返回说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#返回说明"}},[t._v("#")]),t._v(" 返回说明")]),t._v(" "),a("p",[t._v("字段参见 "),a("a",{attrs:{href:"#AudioControl"}},[t._v("AudioControl")])]),t._v(" "),a("h1",{attrs:{id:"语音对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#语音对象"}},[t._v("#")]),t._v(" 语音对象")]),t._v(" "),a("h2",{attrs:{id:"audiocontrol"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#audiocontrol"}},[t._v("#")]),t._v(" AudioControl")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("字段名")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("URL")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("音频数据的 url status 为 0 时传")])]),t._v(" "),a("tr",[a("td",[t._v("Text")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("状态文本（比如：简单爱-周杰伦），可选，status 为 0 时传，其他操作不传")])]),t._v(" "),a("tr",[a("td",[t._v("Status")]),t._v(" "),a("td",[t._v("STATUS")]),t._v(" "),a("td",[t._v("播放状态，参考 "),a("a",{attrs:{href:"#AudioStatus"}},[t._v("AudioStatus")])])])])]),t._v(" "),a("h3",{attrs:{id:"audiostatus"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#audiostatus"}},[t._v("#")]),t._v(" AudioStatus")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("字段名")]),t._v(" "),a("th",[t._v("值")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("START")]),t._v(" "),a("td",[t._v("0")]),t._v(" "),a("td",[t._v("开始播放操作")])]),t._v(" "),a("tr",[a("td",[t._v("PAUSE")]),t._v(" "),a("td",[t._v("1")]),t._v(" "),a("td",[t._v("暂停播放操作")])]),t._v(" "),a("tr",[a("td",[t._v("RESUME")]),t._v(" "),a("td",[t._v("2")]),t._v(" "),a("td",[t._v("继续播放操作")])]),t._v(" "),a("tr",[a("td",[t._v("STOP")]),t._v(" "),a("td",[t._v("3")]),t._v(" "),a("td",[t._v("停止播放操作")])])])])])}),[],!1,null,null,null);a.default=r.exports}}]);