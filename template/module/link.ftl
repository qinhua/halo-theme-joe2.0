<#macro link type>
  <link rel="shortcut icon" size="32x32" href="${options.blog_favicon!}">
  <link rel="canonical" href="${blog_url!}">
  <link rel="dns-prefetch" href="https://cdn.jsdelivr.net">
  <link rel="apple-touch-icon" sizes="180x180" href="${options.blog_favicon!}">
  <#include "key_css.ftl">
  <link rel="preload stylesheet" as="style" href="${RES_BASE_URL}/source/css/min/joe.normalize.min.css?v=${theme.version!}"> 
  <link rel="preload stylesheet" as="style" href="//at.alicdn.com/t/font_2788564_8hyfv6s7l1b.css">
  <#if settings.iconfont??>
    <link rel="stylesheet" href="${settings.iconfont!}">
  </#if>
  <link rel="preload stylesheet" as="style" href="${RES_BASE_URL}/source/css/min/joe.theme.min.css?v=${theme.version!}">
  <link rel="preload stylesheet" as="style" href="${RES_BASE_URL}/source/css/min/joe.global.min.css?v=${theme.version!}">
  <#if type == 'index' && settings.enable_banner == true>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@5.4.5/css/swiper.min.css">
  </#if>
  <#if type == 'post' || type == 'journals'>
    <link rel="preload stylesheet" as="style" href="https://cdn.jsdelivr.net/gh/qinhua/halo-theme-joe2.0@master/source/lib/prism/prism.css?v=${theme.version!}">
    <link rel="preload stylesheet" as="style" href="https://cdn.jsdelivr.net/gh/qinhua/halo-theme-joe2.0@master/source/lib/prism/themes/prism-${settings.code_theme!'dark'}.css?v=${theme.version!}">
  </#if>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/typecho-joe-next@6.0.0/plugin/qmsg/qmsg.css">
  <link rel="preload stylesheet" as="style" href="https://cdn.jsdelivr.net/npm/animate.css@3.7.2/animate.min.css">
  <#if settings.enable_mathjax==true && (type == 'post' || type == 'journals')>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.13.18/dist/katex.min.css">
  </#if>
  <#if settings.cursor_skin?? && settings.cursor_skin!='off'>
    <link rel="stylesheet" href="${RES_BASE_URL}/source/css/min/joe.cursor.min.css?v=${theme.version!}">
  </#if>
  <#if type == 'index'>
    <link rel="preload stylesheet" as="style" href="${RES_BASE_URL}/source/css/min/joe.index.min.css?v=${theme.version!}">
  </#if>
  <#--  <#if type == 'links'>
    <link rel="preload stylesheet" as="style" href="${RES_BASE_URL}/source/css/min/joe.links.min.css?v=${theme.version!}">
  </#if>  -->
  <#if type == 'post'>
    <link rel="preload stylesheet" as="style" href="${RES_BASE_URL}/source/css/min/joe.post.min.css?v=${theme.version!}">
  </#if>
  <#if type == 'journals'>
    <link rel="preload stylesheet" as="style" href="${RES_BASE_URL}/source/css/min/joe.journals.min.css?v=${theme.version!}">
  </#if>
  <#if type == 'archives'>
    <link rel="preload stylesheet" as="style" href="${RES_BASE_URL}/source/css/min/joe.archives.min.css?v=${theme.version!}">
  </#if>
  <#if type == 'search' || type == 'tag' || type == 'category'>
    <link rel="preload stylesheet" as="style" href="${RES_BASE_URL}/source/css/min/joe.search.min.css?v=${theme.version!}">
  </#if>
  <#if type == 'photo'>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/justifiedGallery@3.8.1/dist/css/justifiedGallery.css">
    <link rel="preload stylesheet" as="style" href="${RES_BASE_URL}/source/css/min/joe.photos.min.css?v=${theme.version!}">
  </#if>
  <link rel="preload stylesheet" as="style" href="${RES_BASE_URL}/source/css/min/joe.responsive.min.css?v=${theme.version!}">
  <link rel="stylesheet" href="${RES_BASE_URL}/source/css/min/jquery.fancybox.min.css">
</#macro>