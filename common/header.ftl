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
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/wowjs@1.1.3/dist/wow.min.js"></script>  
    <script src="${theme_base!}/source/utils/index.js"></script>
    
    <#--  <#if settings.enable_loading_bar>  -->
      <!-- 加载条 -->
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/nprogress@0.2.0/nprogress.min.css">
      <script src="https://cdn.jsdelivr.net/npm/nprogress@0.2.0/nprogress.min.js"></script>
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
      <script>
            window.onload = function(){
            NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false });
            NProgress.start();
              NProgress.done();
            }
          </script>
    <#--  </#if>  -->

    <#-- ===== 引入脚本 start ===== -->
    <#if settings.favicon??>
      <!-- favicon -->
      <script src="https://cdn.jsdelivr.net/npm/favico.js@0.3.10/favico.min.js"></script>
    </#if>
    <#if settings.enable_toc!true>
      <!-- tocbot -->
      <script src="https://cdn.jsdelivr.net/npm/tocbot@4.10.0/dist/tocbot.min.js"></script>
    </#if>
    <#if settings.enable_banner>
      <!-- banner -->
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@5.4.5/css/swiper.min.css">
      <script src="https://cdn.jsdelivr.net/npm/swiper@5.4.5/js/swiper.min.js"></script>
    </#if>
    <#if settings.music_id??>
      <!-- 音乐播放器 -->
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css"> 
      <script src="https://cdn.jsdelivr.net/npm/aplayer@1.10.1/dist/APlayer.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/meting@1.2.0/dist/Meting.min.js"></script>
    </#if>

<#-- ===== 引入脚本 start ===== -->
<script src="https://cdn.jsdelivr.net/npm/typecho-joe-next@6.0.0/assets/js/joe.extend.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/typecho-joe-next@6.0.0/plugin/qmsg/qmsg.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.js" defer></script>
<#if settings.show_tag!true>
<script src="https://cdn.jsdelivr.net/npm/typecho-joe-next@6.2.3/plugin/3dtag/3dtag.min.js"></script>
</#if>
<script src="https://cdn.jsdelivr.net/npm/lazysizes@5.3.0/lazysizes.min.js"></script>
<script src="https://cdn.jsdelivr.net/gh/qinhua/cdn_assets/js/joe.scroll.js"></script>
<#--  <script src="https://cdn.jsdelivr.net/gh/qinhua/cdn_assets/js/joe.sketchpad.js"></script>  -->
<script src="https://cdn.jsdelivr.net/gh/qinhua/cdn_assets/js/joe.extend.min.js"></script>
<script src="https://cdn.jsdelivr.net/gh/qinhua/cdn_assets/js/joe.smooth.js"></script>  
<#--  <#if type?? && type == 'post'>  -->
<script src="https://cdn.jsdelivr.net/npm/clipboard@2.0.6/dist/clipboard.min.js"></script>
<script src="https://cdn.jsdelivr.net/gh/qinhua/cdn_assets/lib/prism/prism.js"></script>
<script src="https://cdn.jsdelivr.net/npm/jquery.qrcode@1.0.3/jquery.qrcode.min.js" defer></script>
<#if settings.enable_pjax!false>
    <script src="https://cdn.jsdelivr.net/npm/jquery-pjax@2.0.1/jquery.pjax.min.js" type="text/javascript"></script>
    <script src="${theme_base!}/source/js/min/pjax.js?v=${theme.version!}" type="text/javascript"></script>
</#if> 
<#if settings.enable_mathjax!false>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.13.18/dist/katex.min.css">
  <script src="https://cdn.jsdelivr.net/npm/katex@0.13.18/dist/katex.min.js" defer></script>
  <script src="https://cdn.jsdelivr.net/npm/katex@0.13.18/dist/contrib/auto-render.min.js" defer></script>
</#if> 

<#-- ===== 引入页面级js start===== -->
<script src="${theme_base!}/source/js/min/joe.common.min.js"></script>
<script src="${theme_base!}/source/js/min/joe.short.min.js"></script>
<script src="${theme_base!}/source/js/min/joe.post_page.min.js"></script>
<#--  </#if>  -->
<#if type?? && type == 'index'>
  <script src="${theme_base!}/source/js/min/joe.index.min.js"></script>
</#if>

<#--  <script src="//cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.min.js"></script>  -->
<#--  <script src="${options.comment_internal_plugin_js!'//cdn.jsdelivr.net/npm/halo-comment-normal@1.1.1/dist/halo-comment.min.js'}"></script>
<#local configs = '{"autoLoad": true, "showUserAgent": true}'>  -->
<#if type?? && type == 'sheet'>
<script src="https://cdn.jsdelivr.net/npm/draggabilly@2.3.0/dist/draggabilly.pkgd.js" defer></script>
<script src="${theme_base!}/source/js/min/joe.leaving.min.js"></script>
</#if>

<#-- ===== 引入脚本 end ===== -->

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