<h1 align="center">Halo-Live2D</h1>
<p align="center"> Halo 版本的看板娘插件，前端源码
</p>
<p align="center">
  <a href="https://lixingyong.com">预览</a> | <a href="#使用">使用</a> | <a href="https://lixingyong.com/s/halo-live2d">关于</a>
  <br />
</p>

## 说明

本版本 Live2D 基于 [live2d_demo](https://github.com/fghrsh/live2d_demo) 改造。在原有的基础上适配了 Halo。

【由于 Halo 目前没有插件功能，因此只能使用硬性约定的方式来执行 live2d，具体操作方式请看 <a href="#使用">使用</a>】

基于 Halo 1.3.x

## 特性

- 基于 API 加载模型，支持定制提示语
- 使用参数定制看板娘，halo 可使用主题设置
- 支持原版本的一言接口
- 支持 Halo 简易部署，开箱即用
- 原生改造，方便扩展

## 使用

### 目录结构

```shell
live2d
    │── css
    │       flat-ui-icons-regular.eot   // Flat UI 字体
    │       flat-ui-icons-regular.svg   // Flat UI 字体
    │       flat-ui-icons-regular.ttf   // Flat UI 字体
    │       flat-ui-icons-regular.woff  // Flat UI 字体
    │       takagi.min.css              // Live2D 看板娘 样式表
    │── ftl
    |       live2d.ftl                  // Halo 自动加载插件
    │── js
    │       live2d.min.js               // Live2D 核心代码
    │       takigi-tips.min.js          // Live2D 扩展代码
    └─── json
            takagi-tips.json            // Live2D 内置提示语
settings.yaml   // 与halo配套的配置信息（可选）
```

### 食用方法

1. 点击[下载](https://github.com/LIlGG/halo-live2d/archive/master.zip)
2. 将压缩包解压至 **Halo 主题根目录/plugins** 下，如没有 plugins 目录，请新建一个。完整路径为 halo 主题根目录/plugins/live2d/\*\*
3. 在 ftl 文件内引入 live2d 插件。推荐在 footer.ftl 内引入

```html
<!-- takagi-tips.js 依赖于 jquery，如已存在则可删除 -->
<script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<!-- 实现拖拽效果需要，如无须拖拽则可删除 -->
<script src="https://cdn.bootcdn.net/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
<!-- live2d start -->
<#if settings.live2d_switch!true>
<#include "plugins/live2d/ftl/live2d.ftl">
<@live2d />
</#if>
<!-- live2d end -->
```

4. 修改配置文件（可选）

   将包中 `settings.yaml` 内的所有配置，复制到主题根目录下同名的文件内。（可以根据自己的需求删减）

5. 定制提示语（可选）
