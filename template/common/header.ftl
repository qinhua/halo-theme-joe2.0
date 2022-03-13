<#--  header 宏，接收参数 title:标题,type:来源页类型,id:自定义页面id  -->
<#macro head title type id=0>
  <head>
    <title>${(type == 'index')?then(blog_title!, title! + '-' + blog_title!)}</title>
    <#include "../config.ftl">
    <#include "../module/meta.ftl">
    <#include "../module/link.ftl">
    <@link type="${type}"/>
    <script src="${BASE_RES_URL}/source/lib/jquery@3.5.1/jquery.min.js"></script>
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
    <@global.head />
  </head>
</#macro>