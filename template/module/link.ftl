<#macro link type>
  <link rel="shortcut icon" size="32x32" href="${options.blog_favicon!}">
  <link rel="canonical" href="${blog_url!}">
  <#if settings.cdn_type == "custom" && settings.custom_cdn_url != "">
    <link rel="dns-prefetch" href="${settings.custom_cdn_url}">
  </#if>
  <link rel="apple-touch-icon" sizes="180x180" href="${options.blog_favicon!}">
  <#include "key_css.ftl">
  <#if settings.enable_loading_bar!true>
      <!-- 加载条 -->
      <link rel="stylesheet" href="${BASE_RES_URL}/source/lib/nprogress/nprogress.min.css">
      <style>
          #nprogress .bar {
            height: ${settings.loading_bar_height!};
            background: var(--loading-bar);
          }
          #nprogress .peg {
            display: none;
          }
      </style>
      <script src="${BASE_RES_URL}/source/lib/nprogress/nprogress.min.js"></script>
    </#if>
  <link rel="preload stylesheet" as="style" href="${BASE_RES_URL}/source/css/min/normalize.min.css?v=${theme.version!}"> 
  <link rel="preload stylesheet" as="style" href="${BASE_RES_URL}/source/lib/font-awesome/css/font-awesome.min.css?v=${theme.version!}"> 
  <link rel="preload stylesheet" as="style" href="//at.alicdn.com/t/font_2788564_crkap1ed9j5.css">
  <#if settings.iconfont??>
    <link rel="stylesheet" href="${settings.iconfont!}">
  </#if>
  <link rel="preload stylesheet" as="style" href="${BASE_RES_URL}/source/css/min/theme.min.css?v=${theme.version!}">
  <style>
    #Joe .joe_container {
      max-width: ${settings.content_max_width!"1320px"};
    }
  </style>
  <link rel="stylesheet" href="${BASE_RES_URL}/source/lib/qmsg/qmsg.css">
  <link rel="preload stylesheet" as="style" href="${BASE_RES_URL}/source/lib/animate/animate.min.css">
  <#if type == 'index' && settings.enable_banner == true>
    <link rel="stylesheet" href="${BASE_RES_URL}/source/lib/swiper/swiper.min.css">
  </#if>
  <#if type == 'post' || type == 'journals' || type == 'sheet'>
    <link rel="preload stylesheet" as="style" href="${BASE_RES_URL}/source/lib/prism/prism.min.css?v=${theme.version!}">
    <link rel="preload stylesheet" as="style" href="${BASE_RES_URL}/source/lib/prism/themes/prism-${(meta?? && metas.code_theme?? && metas.code_theme?trim!='')?then(metas.code_theme?trim,settings.code_theme)}.css?v=${theme.version!}">
  </#if>
  <link rel="preload stylesheet" as="style" href="${BASE_RES_URL}/source/css/min/global.min.css?v=${theme.version!}">
  <#if type == 'index'>
    <link rel="preload stylesheet" as="style" href="${BASE_RES_URL}/source/css/min/index.min.css?v=${theme.version!}">
  </#if>
  <#if type == 'post'>
    <link rel="preload stylesheet" as="style" href="${BASE_RES_URL}/source/css/min/post.min.css?v=${theme.version!}">
  </#if>
  <#if type == 'journals'>
    <link rel="preload stylesheet" as="style" href="${BASE_RES_URL}/source/css/min/journals.min.css?v=${theme.version!}">
  </#if>
  <#if type == 'archives'>
    <link rel="preload stylesheet" as="style" href="${BASE_RES_URL}/source/css/min/archives.min.css?v=${theme.version!}">
  </#if>
  <#if type == 'photos'>
    <link rel="stylesheet" href="${BASE_RES_URL}/source/lib/justifiedGallery/justifiedGallery.min.css">
    <link rel="preload stylesheet" as="style" href="${BASE_RES_URL}/source/css/min/photos.min.css?v=${theme.version!}">
  </#if>
  <link rel="preload stylesheet" as="style" href="${BASE_RES_URL}/source/css/min/responsive.min.css?v=${theme.version!}">
  <link rel="stylesheet" href="${BASE_RES_URL}/source/lib/fancybox/jquery.fancybox.min.css">
  <#if settings.enable_clean_mode != true && settings.cursor_skin?? && settings.cursor_skin != 'off'>
    <link rel="stylesheet" href="${BASE_RES_URL}/source/cursor/style/min/${settings.cursor_skin!}.min.css?v=${theme.version!}">
  </#if>
</#macro>