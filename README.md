<br>

<p align="center">
  <a class="logo" href="https://github.com/qinhua/halo-theme-joe2.0">
    <img src="https://cdn.jsdelivr.net/gh/qinhua/halo-theme-joe2.0@master/logo.png" height="80" alt="halo-theme-joe2.0">
  </a>
</p>

<p align="center">Joe 主题 Halo 移植版</p>

<p align="center">
  <a href="https://halo.run" target="_blank">
    <img src="https://img.shields.io/badge/Halo-1.4.11-p" alt="Halo"/>
  </a>
  <a href="https://github.com/qinhua/halo-theme-joe2.0" target="_blank">
    <img src="https://img.shields.io/badge/FreeMarker-2.3.3-blue" alt="Release"/>
  </a>
  <a href="https://github.com/qinhua/halo-theme-joe2.0" target="_blank">
    <img src="https://img.shields.io/badge/Release-1.0.0-green" alt="Release"/>
  </a>
  <a href="https://halo.run" target="_blank">
    <img src="https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-orange" alt="License"/>
  </a>
</p>

> `Joe2.0` 为 [Typecho Themes Joe](https://github.com/HaoOuBa/Joe) 主题的 Halo 版，由于 [社区](https://bbs.halo.run/) 之前有兄弟移植过，这次就叫 `Joe2.0` 吧，此次在原版主题上做了不少修改和适配，由原版的 php 模板调整为 freemarker， 移除了平台无关的特性，同时增加了一些平台特定的配置，保持灵活性的同时最大限度的移植了原版功能，希望大家喜欢 ❤️ <br>
> 🌸 同时也要在此感谢原作者 [Joe](https://github.com/HaoOuBa)。

<br>

#### 👀 [预览主题](https://bbchin.com)

<br>

**首页截图** 👇

![screenshot](https://cdn.jsdelivr.net/gh/qinhua/halo-theme-joe2.0@master/screenshot.png)

<!-- ![screenshot](https://cdn.jsdelivr.net/gh/qinhua/halo-theme-joe2.0@master/source/img/dp/shot_dark.png)
![screenshot](https://cdn.jsdelivr.net/gh/qinhua/halo-theme-joe2.0@master/source/img/dp/shot_light.png) -->

<br>

## 🌈 主题安装

1. 复制主题仓库地址 `https://github.com/qinhua/halo-theme-joe2.0.git`

2. 进入博客后台管理 `外观-主题-安装-在线安装`，贴入仓库地址进行安装。
   如果在线安装失败，可以选择本地安装，到主题 [Release](https://github.com/qinhua/halo-theme-joe2.0/releases) 页面下载指定版本主题包，并以附件形式传上去；

3. 等待提示安装完成即可。

### ⚠️ 注意：

- 安装主题后请务必到 `后台管理 - 博客设置 - 高级选项` 中开启 `API服务` 并配置 `Access key` 为 `joe2.0`，不然部分用到 `Content API` 的页面会请求失败，导致报错。

- 主题升级后配置项变化较大时可能报错，导致页面渲染不出来。只需要进入当前主题的设置界面执行一下保存操作来更新旧的配置，然后再访问页面即可。

- 刷新时记得打开控制台进行强刷，避免潜在缓存的影响，`CDN缓存` 也要及时清除。

<br>

## 🔧 主题配置

> 此次修改对外暴露了大量的设置项，主要是为了最大程度方便用户对博客进行配置，详细设置项请参见主题根目录下的 `settings.yaml` 文件。

![主题配置](https://cdn.jsdelivr.net/gh/qinhua/halo-theme-joe2.0@master/source/img/dp/shot_config.png)

<br>

## ⭐️ 主题功能

> 此次在功能上做了大量移植，在尽量不破坏原主题风格的情况下，加入了 `halo` 主题常见的配置项，也融入了一些自己的改进 🤔。
> 具体功能请在 `后台 -> 外观 -> 主题 -> 设置` 中进行配置，配置项已按不同场景分类，便于快速查找。

- 浅色/暗黑模式
- 三级导航
- 自定义主题色
- 自定义字体
- 轮播图
- 留言页面
- 归档页定制(按年/月统计)
- 日志页面定制
- 文章分享
- Toc 目录<可通过文章设置单独控制>
- 代码高亮 + 行号 + 复制 + 折叠
- 文章和日志页 点赞 + 评论
- 文章页 a 标签新页面打开
- 文章页复制加版权文字
- 网易歌单
- 博主可选头像框
- 博主等级展示
- 全局预载图自定义
- 缺省图片配置
- 每日一句
- 百度收录查询 + 主动推送
- 页面加载条
- 离屏提醒
- 网站公告
- 二维码模块
- 3D 标签云
- 看板娘
- 图库页面定制
- 自定义邮件模板
- 社交账号配置
- 二维码打赏
- 广告配置（侧边栏 + 文章页）
- 自定义 JS/CSS
- 自定义 favicon（支持视频、动图）
- 站点运行时间
- 清洁模式（备案模式）
- 整站变灰（RIP 模式）

<br>

## ✨ 改进点

- meta 标签优化
- ftl 模板格式化
- 导航栏优化
- SEO 优化
- 样式优化
  - 使用 Less 替换了 Scss
  - 降低了部分配色的鲜艳度
- 代码风格
  - Eslint + Prettier
- JS 和 CSS 兼容性处理
  - JS 使用 babel 转换
  - CSS 引入 autoprefixer
  - 移除部分页面 Grid 布局
- 代码优化
  - 优化 z-index 属性
  - 滚动优化
- 页面性能优化
  - 按需引入
  - 图片懒加载
  - DNS 预解析
  - Gzip
- 加载状态优化
  - 加载条
  - 预载图
  - 空白状态
- 404 页面
- 去除无用配置
- 项目目录调整
- 部分缺陷修复
- 解析当前主题配置项

<br>

## 📃 TODO

> 目前仍有部分功能不完善，暂时没时间做，后面继续迭代。

- 博客总访问量
- 归档页统计图标
- 评论组件定制化（皮肤、参数简化、头像保存等）
- 动态背景
- 国际化
- 全站 Pjax
- 欢迎页面
- 视频播放插件
- 相册页优化
- 多种布局切换
- 展示动画优化
- 外链页面评论模块
- 自定义模板引擎
- 文章评论后可见
- 博客自动备份

<br>

## 📚 开发指南

> 1、推荐使用 **VSCode** 开发，首先安装 **EasyLess** 插件来转换并压缩 less 文件，保存时会自动生成 `*.min.css` 文件，配置如下：

```js
"less.compile": {
    "out": "./min/",
    "outExt": ".min.css",
    "compress": true,
    "sourceMap": false,
    "autoprefixer": "> 2%, last 2 versions, not ie 6-9"
  }
```

> 2、安装 **JS & CSS Minifier** 插件来转换并压缩 js 文件，保存时会自动生成 `*.min.js` 文件，配置如下：

```js
  "es6-css-minify.js": {
    "mangle": false,
    "compress": {
      "unused": true
    },
    "output": {
      "quote_style": 0
    },
    "warnings": true
  },
  // 保存时自动生成，no为手动，可点击编辑器底部 Minify 按钮生成
  "es6-css-minify.minifyOnSave": "yes",
  "es6-css-minify.jsMinPath": "/source/js/min"
```

> 3、转换并压缩 `ES6+` 代码（前 2 步里的 js 没有经过 babel 编译，只可用于开发环境）：

- 安装 `nodejs`;
- 主题目录下执行 `npm i` 安装依赖;
- 执行 `npm run build` 即可在相应目录生成可用于生产环境的 js 文件。

<br>

<!-- ## 🔍 代码提交规范

建议全局安装 `commitizen`，使用它来规范我们的 `commit`，后面可以用于生成 `changlog`。

**1、初始化一个空的 `changlog` 文件**

`commitizen init cz-conventional-changelog --save --save-exact` -->

## 🤔 注意点

> 主要是一些使用过程中暴露出来的问题

#### 1、如何自定义导航条图标？

> 主题自身已经引入了部分 `iconfont` 图标，你可以直接用。[全在这里](https://bbchin.com/iconfont-joe2.0/)

- 首先通过 [iconfont](https://www.iconfont.cn/) 获取自己的图标链接，也可以用 [fontawesome](http://www.fontawesome.com.cn/) 的字体，注意要使用 `font-class` 类型，最后这种地址：//at.alicdn.com/t/font_2788564_1f1rnuqwnzj.css

- 通过 `管理后台-外观-主题-Joe2.0-设置-自定义`，将图标地址贴入 `字体图标链接` 中并保存；

- 通过 `管理后台-外观-菜单`，为相关菜单添加图标，也就是字体图标的类名，类似 `iconfont icon-home` 这种（字体名称+图标名称），记得保存；

- 最后，重新进入你的博客即可看到效果。

**tips: 目前主题默认采用 iconfont 字体，也可以使用其它字体服务，相信已经足够灵活了。**

#### 2、如果一个菜单有子菜单，如何禁止父菜单跳转？

- 通过 `管理后台-外观-菜单`，设置相关菜单的地址为 `#`，保存即可，子菜单同理；

- 最后，重新进入你的博客即可看到效果。

**tips: 为了适配和展示效果，不建议添加过多菜单。目前最多可展示 3 级。**

#### 3、子菜单如何设置新页面打开？

- 通过 `管理后台-外观-菜单`，设置菜单的打开方式为 `新页面`，保存即可。

#### 4、如何配置邮件服务？

Halo 已经提供好了邮件服务，我们只需要配置相关参数即可。请参见 [《Halo 博客配置邮件通知服务》](https://www.yuque.com/docs/share/ccd93bac-6265-44a1-b2ec-c1e8fc101cdb)

#### 5、Freemarker 相关小技巧

主要是本人在开发主题过程中积累的一些 `Freemarker` 技能，希望能帮到需要的人。请参见 [FreeMarker 常用技巧](https://www.yuque.com/docs/share/f8a15e0c-3bf2-4c93-b2ef-e3bf2357d09c)

<br>

## 😈 小建议

#### 1、建议大家为站点资源开启防盗链

- 很简单，直接在 nginx 里配一下就可以，不过记得添加白名单，配置如下：

```nginx
# 资源防盗链（指定目录or指定文件类型）
# location ~ .*\.(gif|jpg|jpeg|png|bmp|swf)$ {
location /upload/ {
  access_log off;
  # 域名白名单，去掉则阻止所有非本站请求
  alid_referers none blocked server_names *.bbchin.com 127.0.0.1 localhost ~\.google\. ~\.baidu\. ~\.qq\.;
  if ($invalid_referer) {
    rewrite ^/ https://cdn.jsdelivr.net/gh/qinhua/cdn_assets/img/robber.jpg;
    # return 403;
  }
  proxy_pass http://127.0.0.1:8090; // 代理来源
}
```

#### 2、可以使用 [webp_server_go](https://github.com/webp-sh/webp_server_go) 这个工具对全站图片进行 webp 化，提高加载速度，具体使用请参考 [如何无痛切换网站图片格式到 webp](https://bbchin.com/archives/towebp)。

<br>

<!-- ## 📈 页面性能报告

> 数据来自 `Chrome` 浏览器中的 `Lighthouse` 工具 -->

## 🏭 贡献

如果你想帮助完善 `Joe2.0` 主题，请：

- 点 `star`
- 提 `issues`
- 修 `bugs`
- 推 `pr`

欢迎在 `issue` 中提出好的建议。

<br>

## 🙆‍♂️ 感谢

在此感谢以下项目提供的支持：

- [Halo](https://halo.run)
- [Typecho Themes Joe](https://github.com/HaoOuBa/Joe)
- [halo-comment-sakura](https://github.com/LIlGG/halo-comment-sakura)
- [halo-theme-sagari](https://github.com/cetr/halo-theme-sagiri)
