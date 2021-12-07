<#macro link type>
  <link rel="shortcut icon" size="32x32" href="${options.blog_favicon!}">
  <link rel="canonical" href="${blog_url!}">
  <link rel="dns-prefetch" href="https://cdn.jsdelivr.net">
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
  <link rel="preload stylesheet" as="style" href="${BASE_RES_URL}/source/css/min/joe.normalize.min.css?v=${theme.version!}"> 
  <link rel="preload stylesheet" as="style" href="//at.alicdn.com/t/font_2788564_2ka3exaxjgw.css">
  <#if settings.iconfont??>
    <link rel="stylesheet" href="${settings.iconfont!}">
  </#if>
  <link rel="preload stylesheet" as="style" href="${BASE_RES_URL}/source/css/min/joe.theme.min.css?v=${theme.version!}">
  <link rel="preload stylesheet" as="style" href="${BASE_RES_URL}/source/css/min/joe.global.min.css?v=${theme.version!}">
  <link rel="stylesheet" href="${BASE_RES_URL}/source/lib/qmsg/qmsg.css">
  <link rel="preload stylesheet" as="style" href="${BASE_RES_URL}/source/lib/animate/animate.min.css">
  <#if type == 'index' && settings.enable_banner == true>
    <link rel="stylesheet" href="${BASE_RES_URL}/source/lib/swiper/swiper.min.css">
  </#if>
  <#if type == 'post' || type == 'journals' || type == 'sheet'>
    <link rel="preload stylesheet" as="style" href="${BASE_RES_URL}/source/lib/prism/prism.min.css?v=${theme.version!}">
    <link rel="preload stylesheet" as="style" href="${BASE_RES_URL}/source/lib/prism/themes/prism-${(meta?? && metas.code_theme?? && metas.code_theme?trim!='')?then(metas.code_theme?trim,settings.code_theme)}.css?v=${theme.version!}">
  </#if>
  <#if type == 'index'>
    <link rel="preload stylesheet" as="style" href="${BASE_RES_URL}/source/css/min/joe.index.min.css?v=${theme.version!}">
  </#if>
  <#if type == 'post'>
    <link rel="preload stylesheet" as="style" href="${BASE_RES_URL}/source/css/min/joe.post.min.css?v=${theme.version!}">
  </#if>
  <#if type == 'journals'>
    <link rel="preload stylesheet" as="style" href="${BASE_RES_URL}/source/css/min/joe.journals.min.css?v=${theme.version!}">
  </#if>
  <#if type == 'archives'>
    <link rel="preload stylesheet" as="style" href="${BASE_RES_URL}/source/css/min/joe.archives.min.css?v=${theme.version!}">
  </#if>
  <#if type == 'search' || type == 'tag' || type == 'category'>
    <link rel="preload stylesheet" as="style" href="${BASE_RES_URL}/source/css/min/joe.search.min.css?v=${theme.version!}">
  </#if>
  <#if type == 'photos'>
    <link rel="stylesheet" href="${BASE_RES_URL}/source/lib/justifiedGallery/justifiedGallery.min.css">
    <link rel="preload stylesheet" as="style" href="${BASE_RES_URL}/source/css/min/joe.photos.min.css?v=${theme.version!}">
  </#if>
  <link rel="preload stylesheet" as="style" href="${BASE_RES_URL}/source/css/min/joe.responsive.min.css?v=${theme.version!}">
  <link rel="stylesheet" href="${BASE_RES_URL}/source/lib/fancybox/jquery.fancybox.min.css">
  <#if settings.enable_clean_mode != true && settings.cursor_skin?? && settings.cursor_skin != 'off'>
    <link rel="stylesheet" href="${BASE_RES_URL}/source/cursor/style/min/${settings.cursor_skin!}.min.css?v=${theme.version!}">
  </#if>
</#macro>