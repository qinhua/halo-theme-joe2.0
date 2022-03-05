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

#### 居中

| 表头 1 | 表头 2 | 表头 3 |
| :----: | :----: | :----: |
| 内容 1 | 内容 2 | 内容 3 |

#### 右对齐

| 表头 1 | 表头 2 | 表头 3 |
| -----: | -----: | -----: |
| 内容 1 | 内容 2 | 内容 3 |

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

#### 网盘按钮

<joe-cloud type="default" url="" password=""></joe-cloud>
<joe-cloud type="360" url="" password=""></joe-cloud>
<joe-cloud type="bd" url="" password="bn6f"></joe-cloud>
<joe-cloud type="ty" url="" password=""></joe-cloud>
<joe-cloud type="ct" url="" password=""></joe-cloud>
<joe-cloud type="wy" url="" password=""></joe-cloud>
<joe-cloud type="github" url="" password=""></joe-cloud>
<joe-cloud type="lz" url="" password=""></joe-cloud>

```html
<joe-cloud type="default" url="" password=""></joe-cloud>
<joe-cloud type="360" url="" password=""></joe-cloud>
<joe-cloud type="bd" url="" password="bn6f"></joe-cloud>
<joe-cloud type="ty" url="" password=""></joe-cloud>
<joe-cloud type="ct" url="" password=""></joe-cloud>
<joe-cloud type="wy" url="" password=""></joe-cloud>
<joe-cloud type="github" url="" password=""></joe-cloud>
<joe-cloud type="lz" url="" password=""></joe-cloud>
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

#### 评论后可见

<joe-hide disabled></joe-hide>

```html
<joe-hide></joe-hide>
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

<joe-dplayer src="https://stream7.iqilu.com/10339/upload_transcode/202002/17/20200217101826WjyFCbUXQ2.mp4"></joe-dplyer>

```html
<joe-dplayer src="https://stream7.iqilu.com/10339/upload_transcode/202002/17/20200217101826WjyFCbUXQ2.mp4"></joe-dplyer>
```

#### bilibili 视频

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

以上大部分为 `webcomponents` 组件，且仅在使用 `halo-theme-joe2.0` 主题时才能生效，请根据实际情况使用。
