> 🌝 本文主要展示 `halo-theme-joe2.0` 中的各种样式，方便大家写作的时候进行参考，部分样式可能会在迭代过程中有所变更，请及时关注最新信息。

### 文本元素

---

#### 标题

![标题](https://bbchin.com/upload/2022/03/title-58adbce4cb2e4fc5b6107f772e0015b5.png)

#### 下划线

今天天气很好，你拨通了女盆友的电话 ++1300002225++

#### 加粗

她 **气喘吁吁** 的和你说：我在跑步

#### 倾斜

你问她为什么有 _啪啪啪_ 的声音，她和你说：我是穿拖鞋跑步的

#### 删除线

你明白了，此刻自己头上正顶着个 ~~绿帽子~~

#### 引用

> 那女孩对你说：你还不如跳蛋。

#### 超链接

[=== 高清无码套图 50P ===](https://www.baidu.com)

#### 段落缩进

<p class="indent">有些男人就像烤面筋，外表黄黄的，身体圆圆的，说话柔柔的，无害，看上去还非常好吃。可当你吃下去，才知道他绵绵的，并无特别的味道，甚至到你吃完，你都不知道他是用什么做的。 ---- 李七毛《我们都不擅长告别》</p>

```html
<p class="indent">
  有些男人就像烤面筋，外表黄黄的，身体圆圆的，说话柔柔的，无害，看上去还非常好吃。可当你吃下去，才知道他绵绵的，并无特别的味道，甚至到你吃完，你都不知道他是用什么做的。
  ---- 李七毛《我们都不擅长告别》
</p>
```

#### 居中标题

<joe-mtitle title="牛鞭牛鞭"></joe-mtitle>

```html
<joe-mtitle title="牛鞭牛鞭"></joe-mtitle>
```

### 代码元素

---

#### 行内代码

`halo-theme-joe2.0`

#### 代码块

```html
<html>
  <head>
    <title>标题</title>
  </head>
  <body>
    <p>远上寒山石径斜，白云生处有人家。</p>
  </body>
</html>
```

```css|自定义标题
#Joe {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  min-height: 100vh;
}
```

### 列表元素

---

#### 有序列表

杜蕾斯(durex)的优点如下：

1. 耐久（durability）
2. 可靠（reliability）
3. 优良（excellence）

#### 无序列表

- 一个女朋友
- 二个女朋友
- 三个女朋友
- N 个女朋友
- 卒

#### 任务列表

- [x] 早餐
- [x] 上班
- [x] 午餐
- [ ] 锻炼
- [ ] 睡觉

### 表格元素

---

#### 左对齐

| 表头 1 | 表头 2 | 表头 3 |
| :----- | :----- | :----- |
| 内容 1 | 内容 2 | 内容 3 |

```text
| 表头 1 | 表头 2 | 表头 3 |
| :----- | :----- | :----- |
| 内容 1 | 内容 2 | 内容 3 |
```

#### 居中

| 表头 1 | 表头 2 | 表头 3 |
| :----: | :----: | :----: |
| 内容 1 | 内容 2 | 内容 3 |

```text
| 表头 1 | 表头 2 | 表头 3 |
| :----: | :----: | :----: |
| 内容 1 | 内容 2 | 内容 3 |
```

#### 右对齐

| 表头 1 | 表头 2 | 表头 3 |
| -----: | -----: | -----: |
| 内容 1 | 内容 2 | 内容 3 |

```text
| 表头 1 | 表头 2 | 表头 3 |
| -----: | -----: | -----: |
| 内容 1 | 内容 2 | 内容 3 |
```

### 按钮元素

---

#### 多彩按钮

> 自定义自己想要的颜色
> <joe-abtn color="#409eff" content="多彩按钮"></joe-abtn>

```html
<joe-abtn color="#409eff" content="多彩按钮"></joe-abtn>
```

> 自定义图标，达 6000+ 图标任你使用
> <joe-abtn icon="fa-bell" content="带图标按钮"></joe-abtn>

```html
<joe-abtn icon="fa-bell" content="带图标按钮"></joe-abtn>
```

> 自定义圆角度数，最大 18px
> <joe-abtn radius="12px" content="圆角按钮"></joe-abtn>

```html
<joe-abtn radius="12px" content="圆角按钮"></joe-abtn>
```

> 搭配在一起任意使用
> <joe-abtn color="#409eff" icon="fa-bell" radius="3px" content="搭配在一起"></joe-abtn>

```html
<joe-abtn
  color="#409eff"
  icon="fa-bell"
  href="#"
  radius="3px"
  content="搭配在一起"
></joe-abtn>
```

#### 便条按钮

> 便条按钮不能自定义色彩，必须使用一个图标，其他的的和上面的多彩按钮一样

<joe-anote href="#" type="secondary" content="便条按钮"></joe-anote>

<joe-anote icon="fa-bus" href="#" type="success" content="便条按钮"></joe-anote>

<joe-anote icon="fa-bus" href="#" type="warning" content="便条按钮"></joe-anote>

<joe-anote icon="fa-bus" href="#" type="error" content="便条按钮"></joe-anote>

<joe-anote icon="fa-bus" href="#" type="info" content="便条按钮"></joe-anote>

```html
<joe-anote href="#" type="secondary" content="便条按钮"></joe-anote>
<joe-anote icon="fa-bus" href="#" type="success" content="便条按钮"></joe-anote>
<joe-anote icon="fa-bus" href="#" type="warning" content="便条按钮"></joe-anote>
<joe-anote icon="fa-bus" href="#" type="error" content="便条按钮"></joe-anote>
<joe-anote icon="fa-bus" href="#" type="info" content="便条按钮"></joe-anote>
```

#### 复制按钮

<joe-copy title="点击复制" content="这是一段美好的鸡汤文" color="green" bold></joe-copy>

```html
<joe-copy
  title="点击复制"
  content="这是一段美好的鸡汤文"
  color="green"
  bold
></joe-copy>
```

#### 标签按钮

<joe-anote icon="fa-download" href="#" type="success" content="标签按钮"></joe-anote>

```html
<joe-anote
  icon="fa-download"
  href="#"
  type="success"
  content="标签按钮"
></joe-anote>
```

#### 网盘链接

> 支持展示常见的网盘或链接（百度、阿里、微云、360、天翼、城通、蓝奏云、github、gitee），通过传入相关属性来使用：

- `type` 网盘类型（非必须）
- `title` 标题（非必须）
- `url` 跳转链接（非必须）
- `password` 提取码/密码（非必须）
- `width` 宽度（非必须）

<joe-cloud></joe-cloud>
<joe-cloud type="bd" title="《刺杀该死太保》高清无码" url="" password="bn6f">百度网盘</joe-cloud>
<joe-cloud type="ali" title="《刺死比尔》TC枪版" url="" password="xmjw">阿里网盘</joe-cloud>
<joe-cloud type="wy" title="小娜比的童年故事" url="" password="">微云</joe-cloud>
<joe-cloud type="360" title="枕边的书信2" url="" password="">360 网盘</joe-cloud>
<joe-cloud type="ty" title="拖拉机维修与保养.pdf" url="" password="">天翼云</joe-cloud>
<joe-cloud type="ct" title="收割的艺术-柴进" url="" password="">城通网盘</joe-cloud>
<joe-cloud type="lz" title="我当爸爸啦" url="" password="">蓝奏云</joe-cloud>
<joe-cloud type="github" title="Joe2.0 主题" url="https://github.com/qinhua/halo-theme-joe2.0/releases/tag/1.0.10">github</joe-cloud>
<joe-cloud type="gitee" title="Joe2.0 主题" url="https://gitee.com/duider/halo-theme-joe2.0/releases/1.0.10">gitee</joe-cloud>
<joe-cloud title="我宽200px" width="200px"></joe-cloud>

```html
<joe-cloud></joe-cloud>
<joe-cloud type="bd" title="《刺杀该死太保》高清无码" url="" password="bn6f"
  >百度网盘</joe-cloud
>
<joe-cloud type="ali" title="《刺死比尔》TC枪版" url="" password="xmjw"
  >阿里网盘</joe-cloud
>
<joe-cloud type="wy" title="小娜比的童年故事" url="" password=""
  >微云</joe-cloud
>
<joe-cloud type="360" title="枕边的书信2" url="" password=""
  >360 网盘</joe-cloud
>
<joe-cloud type="ty" title="拖拉机维修与保养.pdf" url="" password=""
  >天翼云</joe-cloud
>
<joe-cloud type="ct" title="收割的艺术-柴进" url="" password=""
  >城通网盘</joe-cloud
>
<joe-cloud type="lz" title="我当爸爸啦" url="" password="">蓝奏云</joe-cloud>
<joe-cloud
  type="github"
  title="Joe2.0 主题"
  url="https://github.com/qinhua/halo-theme-joe2.0/releases/tag/1.0.10"
  >github</joe-cloud
>
<joe-cloud
  type="gitee"
  title="Joe2.0 主题"
  url="https://gitee.com/duider/halo-theme-joe2.0/releases/1.0.10"
  >gitee</joe-cloud
>
<joe-cloud title="我宽200px" width="200px"></joe-cloud>
```

### 装饰元素

---

#### 分割线

---

#### 跑马灯

<span class="joe_lamp"></span>

```html
<span class="joe_lamp"></span>
```

#### 进度条

<joe-progress percentage="50%" color="#6ce766"></joe-progress>

```html
<joe-progress percentage="50%" color="#6ce766"></joe-progress>
```

#### 彩色虚线

> 可自定义虚线颜色

<joe-dotted></joe-dotted>
<joe-dotted startcolor="#1772e8" endcolor="#4cd327"></joe-dotted>

```html
<joe-dotted></joe-dotted>
<joe-dotted startcolor="#1772e8" endcolor="#4cd327"></joe-dotted>
```

#### Tabs

<joe-tabs>
 <div class="_tpl">
   {tabs-pane 第一个}单身狗的故事{/tabs-pane}
   {tabs-pane 第二个}小说家的故事{/tabs-pane}
 </div>
</joe-tabs>

```xml
<joe-tabs>
  <div class="_tpl">
    {tabs-pane 第一个}单身狗的故事{/tabs-pane}
    {tabs-pane 第二个}小说家的故事{/tabs-pane}
  </div>
</joe-tabs>
```

#### 卡片（常规）

<joe-card title="卡片标题">
 <div class="_tpl">卡片内容</div>
</joe-card>

```xml
<joe-card title="卡片标题">
 <div class="_tpl">卡片内容</div>
</joe-card>
```

#### 卡片（虚线）

<joe-card-describe title="卡片标题">
 <div class="_tpl">卡片内容</div>
</joe-card-describe>

```xml
<joe-card-describe title="卡片标题">
 <div class="_tpl">卡片内容</div>
</joe-card-describe>
```

#### 卡片列表

<joe-card-list title="卡片标题">
 <div class="_tpl">
  {card-list-item}这是一段内容{/card-list-item}
  {card-list-item}这是一段内容{/card-list-item}
  {card-list-item}这是一段内容{/card-list-item}
 </div>
</joe-card-list>

```xml
<joe-card-list title="卡片标题">
 <div class="_tpl">
  {card-list-item}这是一段内容{/card-list-item}
  {card-list-item}这是一段内容{/card-list-item}
  {card-list-item}这是一段内容{/card-list-item}
 </div>
</joe-card-list>
```

#### 折叠内容

<joe-collapse open>
 <div class="_tpl">
   {collapse-item 标题}这是一段内容{/collapse-item}
 </div>
</joe-collapse>

```xml
<joe-collapse open>
 <div class="_tpl">
   {collapse-item 标题}这是一段内容{/collapse-item}
 </div>
</joe-collapse>
```

#### 时间线

<joe-timeline>
 <div class="_tpl">
   {timeline-item 2020}10元{/timeline-item}
   {timeline-item 2021}20元{/timeline-item}
   {timeline-item 2022}100元{/timeline-item}
 </div>
</joe-timeline>

```xml
<joe-timeline>
 <div class="_tpl">
   {timeline-item 2020}10元{/timeline-item}
   {timeline-item 2021}20元{/timeline-item}
   {timeline-item 2022}100元{/timeline-item}
 </div>
</joe-timeline>
```

#### 渲染原始内容

> 主题默认对常用的 HTML 标签进行了样式美化，但有时候你可能不想应用这些样式。比如你想富文本内容中的样式能够原样展示，那么就需要用到这个标签来承载你的内容，该标签内的内容将 **不会被外部样式和脚本污染**，反之亦然。

<joe-raw-content>
  <div id="_raw">
    <div style="padding: 1px 10px;background: linear-gradient(45deg, #329891, #ffe266);">
      <h3 style="color:blue;font-style:italic">俺是个3级标题，我有自己的样式</h3>
      <p>我是原始内容，可以是任何合法的文本或HTML，我的样式和外界是隔离的</p>
    </div>
  </div>
</joe-raw-content>

```html
<joe-raw-content>
  <div id="_raw">
    <div
      style="padding: 1px 10px;background: linear-gradient(45deg, #329891, #ffe266);"
    >
      <h3 style="color:blue;font-style:italic">
        俺是个3级标题，我有自己的样式
      </h3>
      <p>我是原始内容，可以是任何合法的文本或HTML，我的样式和外界是隔离的</p>
    </div>
  </div>
</joe-raw-content>
```

#### 头像框

> 列出了当前主题包含的头像框，方便大家进行选择

![头像框](https://bbchin.com/upload/2022/03/avatar_frame_sample-34ed1f7e269b4bada82a15cea330fd05.jpg)

#### emoji 表情

> 列出一些通用表情元素，更多请 [参见这里](https://bbchin.com/s/emoji)

<p style="letter-spacing:4px;font-size:20px;">
😀😁😂😃😄😅😆😇😈😉😊😋😌😍😎😏😐😑😒😓😔😕😖😗😘😙😚😛😜😝😞😟😠😡😢😣😤😥😦😧😨😩😪😫😬😭😮😯😰😱😲😳😴😵😶😷🙁🙂🙃🙄🤐🤑🤒🤓🤔🤕🤠🤡🤢🤣🤤🤥🤧🤨🤩🤪🤫🤬🤭🤮🤯🧐😀😁😂😃😄😅😆😇😈😉😊😋😌😍😎😏😐😑😒😓😔😕😖😗😘😙😚😛😜😝😞😟😠😡😢😣😤😥😦😧😨😩😪😫😬😭😮😯😰😱😲😳😴😵😶😷😸😹😺😻😼😽😾😿🙀🙁🙂🙃🙄

### 媒体元素

---

#### 图片预览

<img src="https://bbchin.com/themes/joe2.0/source/img/logo.png" style="padding:10px;max-width:200px!important;" alt="joe2.0">

#### 视频播放器

> `joe-dplayer` 是基于 [Dplayer]() 这个播放插件的，组件支持传递如下属性：

- `src` 视频地址
- `cover` 封面图地址
- `width` 播放器宽度
- `height` 播放器高度

<joe-dplayer src="https://stream7.iqilu.com/10339/upload_transcode/202002/17/20200217101826WjyFCbUXQ2.mp4" cover="https://bbchin.com/upload/2021/10/wallhaven-q2l51d-d16d8a9e49744b32bd266174fd70cf5c.jpeg"></joe-dplyer>

```html
<joe-dplayer src="https://stream7.iqilu.com/10339/upload_transcode/202002/17/20200217101826WjyFCbUXQ2.mp4" cover="https://bbchin.com/upload/2021/10/wallhaven-q2l51d-d16d8a9e49744b32bd266174fd70cf5c.jpeg"></joe-dplyer>
```

#### Bilibili 视频

<joe-bilibili bvid="BV12h411k7vr"></joe-bilibili>

```html
<joe-bilibili bvid="BV12h411k7vr"></joe-bilibili>
```

#### PDF 预览

<joe-pdf src="https://bbchin.com/upload/2022/03/Node%E7%9A%84%E8%AE%BE%E8%AE%A1%E4%B8%8E%E5%AE%9E%E7%8E%B0-0a7b571b1a5b4a0d8f810a253afe7077.pdf"></joe-pdf>

```html
<joe-pdf
  src="https://bbchin.com/upload/2022/03/Node%E7%9A%84%E8%AE%BE%E8%AE%A1%E4%B8%8E%E5%AE%9E%E7%8E%B0-0a7b571b1a5b4a0d8f810a253afe7077.pdf"
></joe-pdf>
```

#### 网易云歌单

<joe-mlist id="6800335663"></joe-mlist>

```html
<joe-mlist id="6800335663"></joe-mlist>
```

#### 网易云单曲

<joe-music id="1303046498"></joe-music>

```html
<joe-music id="1303046498"></joe-music>
```

#### 音频播放器

<joe-mp3 name="天生狂野-柴古唐斯主题曲" url="https://bbchin.com/upload/2022/04/%E5%A4%A9%E7%94%9F%E7%8B%82%E9%87%8E-%E6%9F%B4%E5%8F%A4%E5%94%90%E6%96%AF%E4%B8%BB%E9%A2%98%E6%9B%B2.mp3" theme="red" cover="https://bbchin.com/upload/2022/04/cgts.png" autoplay></joe-mp3>

```html
<joe-mp3
  name="天生狂野-柴古唐斯主题曲"
  url="https://bbchin.com/upload/2022/04/%E5%A4%A9%E7%94%9F%E7%8B%82%E9%87%8E-%E6%9F%B4%E5%8F%A4%E5%94%90%E6%96%AF%E4%B8%BB%E9%A2%98%E6%9B%B2.mp3"
  theme="red"
  cover="https://bbchin.com/upload/2022/04/cgts.png"
  autoplay
></joe-mp3>
```

### 提示元素

---

#### 消息提示

<joe-message type="success" content="成功消息"></joe-message>
<joe-message type="info" content="普通消息"></joe-message>
<joe-message type="warning" content="警告消息"></joe-message>
<joe-message type="error" content="错误消息"></joe-message>

```html
<joe-message type="success" content="成功消息"></joe-message>
<joe-message type="info" content="普通消息"></joe-message>
<joe-message type="warning" content="警告消息"></joe-message>
<joe-message type="error" content="错误消息"></joe-message>
```

### 注意事项！！！

> 以上大部分为 `webcomponents` 组件，且仅在使用 `halo-theme-joe2.0` 主题时才能生效，请根据实际情况使用。<br>
> 组件定义文件见主题目录下的 `source/js/custom.js`。
