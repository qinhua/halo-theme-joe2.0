<#macro link type>
  <link rel="shortcut icon" size="32x32" href="${options.blog_favicon!}">
  <link rel="canonical" href="${blog_url!}"/>
  <link rel="dns-prefetch" href="https://cdn.jsdelivr.net">
  <link rel="apple-touch-icon" sizes="180x180" href="${options.blog_favicon!}">
  <#--  global css  -->
  <style type="text/css">
    <#if settings.rip_mode>
      :root {
        -webkit-filter: grayscale(100%);
        -moz-filter: grayscale(100%);
        -ms-filter: grayscale(100%);
        -o-filter: grayscale(100%);
        filter: grayscale(100%);
        filter: progid:DXImageTransform.Microsoft.BasicImage(grayscale=1);
      } 
    </#if>
    @font-face {
      font-family: "Joe Font";
      font-weight: 400;
      font-style: normal;
      font-display: swap;
      src: url('https://cdn.jsdelivr.net/gh/uxiaohan/GitImgTypecho/usr/uploads/2021/05/www.vvhan.com.woff2');
      src: url('https://cdn.jsdelivr.net/gh/uxiaohan/GitImgTypecho/usr/uploads/2021/05/www.vvhan.com.woff2') format('woff2');
    }
    html body {
      --theme: ${settings.theme_color_day!'#54b5db'};
      font-family: "Joe Font", "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, "sans-serif";
    }
    html[data-mode='dark'] body {
      --theme: ${settings.theme_color_night!'#9999ff'};
    }
    body:after {
      background: #e2e2e2;
      background-position: center 0;
      background-repeat: no-repeat;
      background-size: cover;
    }
    body:after {
      background-image: -webkit-linear-gradient(90deg, rgba(60, 10, 30, .04) 3%, transparent 0), -webkit-linear-gradient(1turn, rgba(60, 10, 30, .04) 3%, transparent 0);
      background-image: linear-gradient(90deg, rgba(60, 10, 30, .04) 3%, transparent 0), linear-gradient(1turn, rgba(60, 10, 30, .04) 3%, transparent 0);
      background-size: 20px 20px;
      background-position: 50%;
      background-repeat: repeat;
    }
    #Joe .joe_container {
      max-width: ${settings.content_max_width!'1320px'}!important;
    }
    #Joe .joe_header.active {
      top: ${settings.enable_fixed_header?string('0px', '-60px')}!important;
    }
  </style>
  <link rel="preload stylesheet" as="style" href="${theme_base!}/source/css/min/joe.normalize.min.css?v=${theme.version!}"> 
  <link rel="preload stylesheet" as="style" href="//at.alicdn.com/t/font_2788564_jgzca6pzpef.css">
  <#if settings.iconfont??>
    <link rel="stylesheet" href="${settings.iconfont!}">
  </#if>
  <link rel="preload stylesheet" as="style" href="${theme_base!}/source/css/min/joe.theme.min.css?v=${theme.version!}">
  <link rel="preload stylesheet" as="style" href="${theme_base!}/source/css/min/joe.global.min.css?v=${theme.version!}">
  <#if type == 'post' || type == 'journals'>
    <link rel="preload stylesheet" as="style" href="https://cdn.jsdelivr.net/gh/qinhua/halo-theme-joe2.0@master/source/lib/prism/prism.css?v=${theme.version!}">
    <link rel="preload stylesheet" as="style" href="https://cdn.jsdelivr.net/gh/qinhua/halo-theme-joe2.0@master/source/lib/prism/themes/prism-${settings.code_theme!'dark'}.css?v=${theme.version!}">
  </#if>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/typecho-joe-next@6.0.0/plugin/qmsg/qmsg.css">
  <link rel="preload stylesheet" as="style" href="https://cdn.jsdelivr.net/npm/animate.css@3.7.2/animate.min.css" />
  <#if settings.enable_mathjax==true && (type == 'post' || type == 'journals')>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.13.18/dist/katex.min.css">
  </#if>
  <#if settings.cursor_skin?? && settings.cursor_skin!='none'>
    <link rel="stylesheet" href="${theme_base!}/source/css/min/joe.cursor.min.css?v=${theme.version!}">
  </#if>
  <#if type == 'index'>
    <link rel="preload stylesheet" as="style" href="${theme_base!}/source/css/min/joe.index.min.css?v=${theme.version!}">
  </#if>
  <#--  <#if type == 'links'>
    <#--  <link rel="preload stylesheet" as="style" href="${theme_base!}/source/css/min/joe.links.min.css?v=${theme.version!}">  -->
  </#if>  -->
  <#if type == 'post'>
    <link rel="preload stylesheet" as="style" href="${theme_base!}/source/css/min/joe.post.min.css?v=${theme.version!}">
  </#if>
  <#if type == 'journals'>
    <link rel="preload stylesheet" as="style" href="${theme_base!}/source/css/min/joe.journals.min.css?v=${theme.version!}">
  </#if>
  <#if type == 'archive'>
    <link rel="preload stylesheet" as="style" href="${theme_base!}/source/css/min/joe.census.min.css?v=${theme.version!}">
  </#if>
  <#if type == 'search' || type == 'tag' || type == 'category'>
    <link rel="preload stylesheet" as="style" href="${theme_base!}/source/css/min/joe.archive.min.css?v=${theme.version!}">
  </#if>
  <#if type == 'photo'>
    <link rel="preload stylesheet" as="style" href="${theme_base!}/source/css/min/joe.photos.min.css?v=${theme.version!}">
  </#if>
  <link rel="preload stylesheet" as="style" href="${theme_base!}/source/css/min/joe.responsive.min.css?v=${theme.version!}">
  <link rel="stylesheet" href="${theme_base!}/source/css/min/jquery.fancybox.min.css" />
</#macro>