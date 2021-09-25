<#macro head title type>
<head>
    <title>${title!} - ${blog_title!}</title>
    <#include "meta.ftl">
    <#include "link.ftl">
    <#include "config.ftl">
    <script>
        function detectIE() {
            var n = window.navigator.userAgent,
                e = n.indexOf("MSIE ");
            if (e > 0) {
                return parseInt(n.substring(e + 5, n.indexOf(".", e)), 10)
            }
            if (n.indexOf("Trident/") > 0) {
                var r = n.indexOf("rv:");
                return parseInt(n.substring(r + 3, n.indexOf(".", r)), 10)
            }
            var i = n.indexOf("Edge/");
            return i > 0 && parseInt(n.substring(i + 5, n.indexOf(".", i)), 10)
        };
        detectIE() && (alert('当前站点不支持IE浏览器或您开启了兼容模式，请使用其他浏览器访问或关闭兼容模式。'), (location.href = 'https://www.baidu.com'))
    </script>
     <#--  <#if settings.enable_loading_bar>  -->
      <!-- 加载条 -->
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/nprogress@0.2.0/nprogress.min.css">
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
      <script src="https://cdn.jsdelivr.net/npm/nprogress@0.2.0/nprogress.min.js"></script>
      <script>
            window.onload = function(){
            NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false });
            NProgress.start();
              NProgress.done();
            }
      </script>
    <#--  </#if>  -->
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.min.js"></script>
    <script src="//cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.min.js"></script>

    <#if settings.baidu_statistic??>
      <!-- 百度统计 -->
      ${settings.baidu_statistic!}
    </#if>
    <#--  ===== 自定义区域 ===== -->
    <#if settings.external_css??>
      <!-- 自定义外部css -->
      <link rel="stylesheet" href="${settings.external_css!}">
    </#if>
    <#if settings.custom_css??>
      <!-- 自定义css -->
      <style type="text/css">
        ${settings.custom_css!}
      </style>
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