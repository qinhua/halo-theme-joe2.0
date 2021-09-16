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
    
    <#if settings.enable_loading_bar>
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
            NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false });
            NProgress.start();
            window.onload = function(){
              NProgress.done();
            }
          </script>
    </#if>

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
      <script type="text/javascript">
        var meting_api="https://api.mizore.cn/meting/api.php?server=:server&type=:type&id=:id";
      </script>
      <script src="https://cdn.jsdelivr.net/npm/aplayer@1.10.1/dist/APlayer.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/meting@1.2.0/dist/Meting.min.js"></script>
    </#if>

<#-- ===== 引入脚本 start ===== -->
<script src="https://cdn.jsdelivr.net/npm/typecho-joe-next@6.0.0/assets/js/joe.extend.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/typecho-joe-next@6.0.0/plugin/qmsg/qmsg.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.js"></script>
<#if settings.show_tag!true>
<script src="https://cdn.jsdelivr.net/npm/typecho-joe-next@6.2.3/plugin/3dtag/3dtag.min.js"></script>
</#if>
<script src="https://cdn.jsdelivr.net/npm/lazysizes@5.3.0/lazysizes.min.js"></script>
<script src="https://cdn.jsdelivr.net/gh/qinhua/cdn-assets/js/joe.scroll.js"></script>
<#--  <script src="https://cdn.jsdelivr.net/gh/qinhua/cdn-assets/js/joe.sketchpad.js"></script>  -->
<script src="https://cdn.jsdelivr.net/gh/qinhua/cdn-assets/js/joe.extend.min.js"></script>
<script src="https://cdn.jsdelivr.net/gh/qinhua/cdn-assets/js/joe.smooth.js"></script>    
<#-- ===== 引入页面级js start===== -->
<script src="${theme_base!}/source/js/joe.common.min.js"></script>
<script src="${theme_base!}/source/js/joe.short.min.js"></script>
<#--  <#if type?? && type == 'post'>  -->
<script src="https://cdn.jsdelivr.net/npm/clipboard@2.0.6/dist/clipboard.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/jquery.qrcode@1.0.3/jquery.qrcode.min.js"></script>
<script src="https://cdn.jsdelivr.net/gh/qinhua/cdn_assets/lib/prism/prism.js"></script>
<#--  <script src="${theme_base!}/source/js/lib/prism/prism.js"></script>  -->
<script src="${theme_base!}/source/js/joe.post_page.min.js"></script>
<#--  </#if>  -->
<#if type?? && type == 'index'>
  <script src="${theme_base!}/source/js/joe.index.min.js"></script>
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