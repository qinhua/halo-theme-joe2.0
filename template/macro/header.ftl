<#macro head title type>
  <head>
    <title>${title!} - ${blog_title!}</title>
    <#include "../config.ftl">
    <#include "../module/meta.ftl">
    <#include "../module/link.ftl">
    <@link type="${type}"/>
    <#if settings.enable_loading_bar!true>
      <!-- 加载条 -->
      <link rel="stylesheet" href="${RES_BASE_URL}/source/lib/nprogress/nprogress.min.css">
      <style>
          #nprogress .bar {
            background: var(--theme);
          }
          #nprogress .bar {
            height: ${settings.loading_bar_height!};
            background: ${settings.loading_bar_color!};
          }
          #nprogress .peg {
            display: none;
          }
      </style>
      <script src="${RES_BASE_URL}/source/lib/nprogress/nprogress.min.js"></script>
    </#if>
    <script src="${RES_BASE_URL}/source/lib/jquery@3.5.1/jquery.min.js"></script>
    <#--  ===== 自定义区域 ===== -->
    <#if settings.external_css??>
      <!-- 自定义外部css -->
      <link rel="stylesheet" href="${settings.external_css!}">
    </#if>
    <#if settings.custom_css??>
      <!-- 自定义css -->
      <style type="text/css">${settings.custom_css!}</style>
    </#if>
    <#if settings.custom_external_js_head??>
      <!-- 自定义外部js -->
      ${settings.custom_external_js_head!}
    </#if>
    <#if settings.custom_js_head??>
      <!-- 自定义js -->
      <script type="text/javascript">
        ${settings.custom_js_head!}
      </script>
    </#if>
    <#if settings.baidu_statistic??>
      <!-- 百度统计 -->
      ${settings.baidu_statistic!}
    </#if>
    <@global.head />
  </head>
</#macro>