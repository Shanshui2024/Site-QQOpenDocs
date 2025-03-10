# QQ机器人文档-重制版

本仓库是 QQ 机器人的非官方重制文档项目，基于[vuepress](https://vuepress.vuejs.org/zh/)构建。对应文档网站是 <https://botqq.shanshui.site/wiki/>。

## 本地开发

通过以下任何一种方式进行本地开发

### 1、Gitpod 在线开发

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/Shanshui2024/Site-QQOpenDocs)

### 2、本地克隆代码开发

```sh
git clone git@github.com:Shanshui2024/Site-QQOpenDocs.git
cd bot-docs
npm i
npm run dev
```

<!-- clone内网API文档 权限添加 -->
## 构建

```sh
npm run sync-api
npm run build
```


## 文档结构参考

```shell
docs
├── .vuepress/   # vuepress相关文件
├── business/    # 运营规范文档
├── develop/     # 开发文档
│   ├── api/     # api文档
│   └── nodesdk/ # nodesdk文档
└── README.md    # 主页文档
```

## 参与共建 [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

- 👏 如果您有针对文档的错误修复，请以分支`fix/xxx`向`main`分支发 PR
- 👏 如果您有新的内容贡献，请以分支`feature/xxx`向`main`分支发起 PR
- 👏 如果您有相关的建议或意见，请提[issues](https://github.com/Shanshui2024/Site-QQOpenDocs/issues)

## 加入官方社区

欢迎加入 [**山水画路社区**](https://qm.qq.com/cgi-bin/qm/qr?k=dtr3ehrAbxpNPlwWRFSxWD0Xi1YhNng0&jump_from=webapi&authKey=DtrSHXcGv8XW+T56PKQ2IcDgvKYCW+AKegdB0+oXTLpbqFnKEBYboHwyKjNMNLtF)。

## 贡献者

<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<a href="https://github.com/Shanshui2024/Site-QQOpenDocs/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Shanshui2024/Site-QQOpenDocs" />
</a>
<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->
