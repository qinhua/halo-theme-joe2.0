<#macro tail type>
  <#-- ===== 引入脚本 start ===== -->
  <script src="${BASE_RES_URL!}/source/lib/wowjs/wow.min.js"></script>
  <script src="${BASE_RES_URL!}/source/lib/qmsg/qmsg.js"></script>
  <script src="${BASE_RES_URL}/source/lib/j-marked/marked.min.js"></script>
  <script src="${BASE_RES_URL}/source/js/min/joe.utils.min.js?v=${theme.version!}"></script>
  <#if type == 'index' && settings.enable_banner == true>
    <!-- banner -->
    <script src="${BASE_RES_URL!}/source/lib/swiper/swiper.min.js"></script>
  </#if>
  <#if type == 'post' && settings.enable_toc == true>
    <!-- tocbot -->
    <script src="${BASE_RES_URL!}/source/lib/tocbot/tocbot.min.js"></script>
  </#if>
  <#if settings.enable_clean_mode!=true>
    <#--  comment  -->
    <script src="${BASE_RES_URL!}/source/lib/vue@2.6.10/vue.min.js"></script>
    <script src="${BASE_RES_URL!}/source/lib/halo-comment/halo-comment.min.js?v=${theme.version!}"></script>
  </#if>
  <script src="${BASE_RES_URL!}/source/lib/lazysizes/lazysizes.min.js"></script>
  <script src="${BASE_RES_URL!}/source/lib/fancybox/jquery.fancybox.min.js"></script>
  <#if settings.show_tag_cloud==true && settings.tag_cloud_type=='3d'>
    <#--  tagcloud  -->
    <script src="${BASE_RES_URL!}/source/lib/3dtag/3dtag.min.js"></script>
  </#if>
  <#if settings.enable_music_player==true && settings.music_id?? && settings.music_id!=''>
    <!-- music player -->
    <link rel="stylesheet" href="${BASE_RES_URL}/source/lib/APlayer/APlayer.min.css"> 
    <script src="${BASE_RES_URL}/source/lib/APlayer/APlayer.min.js"></script>
    <script src="${BASE_RES_URL}/source/lib/meting/meting.min.js"></script>
  </#if>
  <script src="${BASE_RES_URL!}/source/lib/joe.scroll.min.js?v=${theme.version!}"></script>
  <script src="${BASE_RES_URL!}/source/lib/joe.smooth.min.js?v=${theme.version!}"></script>
  <#--  <script src="${BASE_RES_URL!}/source/lib/joe.extend.min.js?v=${theme.version!}"></script>  -->
  <#if type == 'post' || type == 'journals' || type == 'sheet'>
    <script src="${BASE_RES_URL}/source/lib/clipboard/clipboard.min.js"></script>
  </#if>
  <#if settings.enable_mathjax!false>
    <script src="https://cdn.jsdelivr.net/npm/katex@0.13.18/dist/katex.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/katex@0.13.18/dist/contrib/auto-render.min.js"></script>
  </#if>
  <#if settings.favicon??>
    <script src="${BASE_RES_URL}/source/lib/favico/favico.min.js"></script>
  </#if>
  <#if type == 'post' || type == 'journals'>
    <script src="${BASE_RES_URL}/source/lib/jquery-qrcode/jquery.qrcode.min.js"></script>
  </#if>
  <#--  相册  -->
  <#if type == 'photos'>
    <script src="${BASE_RES_URL}/source/lib/justifiedGallery/jquery.justifiedGallery.min.js"></script>
    <#--  <script src="https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.js"></script>  -->
    <#--  <script src="https://unpkg.com/imagesloaded@4/imagesloaded.pkgd.min.js"></script>  -->
  </#if>

  <#-- ===== 引入页面级js start ===== -->
  <script src="${BASE_RES_URL}/source/js/min/joe.common.min.js?v=${theme.version!}"></script>
  <#if type == 'index'>
    <script src="${BASE_RES_URL}/source/js/min/joe.index.min.js?v=${theme.version!}"></script>
  </#if>
  <#if type == 'archives'>
    <script src="${BASE_RES_URL}/source/js/min/joe.archives.min.js?v=${theme.version!}"></script>
  </#if>
  <script src="${BASE_RES_URL}/source/js/min/joe.short.min.js?v=${theme.version!}"></script>
  <#if type == 'post'>
    <script src="${BASE_RES_URL}/source/js/min/joe.post.min.js?v=${theme.version!}"></script>
  </#if>
  <#if type == 'journals'>
    <script src="${BASE_RES_URL}/source/js/min/joe.journals.min.js?v=${theme.version!}"></script>
  </#if>
  <#if type == 'photos'>
    <script src="${BASE_RES_URL}/source/js/min/joe.photos.min.js?v=${theme.version!}"></script>
  </#if>
  <#if type == 'post' || type == 'journals' || type == 'sheet'>
    <script src="${BASE_RES_URL!}/source/lib/prism/prism.js"></script>
  </#if>
  <#if type == 'sheet'>
    <script src="${BASE_RES_URL}/source/lib/draggabilly/draggabilly.pkgd.js"></script>
    <script src="${BASE_RES_URL}/source/js/min/joe.leaving.min.js?v=${theme.version!}"></script>
  </#if>
  <#--  <#if settings.enable_pjax!false>
      <script src="${BASE_RES_URL}/source/lib/jquery-pjax/jquery.pjax.min.js"></script>
      <script src="${BASE_RES_URL}/source/js/min/pjax.js?v=${theme.version!}"></script>
  </#if>   -->
  <#-- ===== 引入页面级js end ===== -->

  <#-- ===== 引入脚本 start ===== -->
  <#if settings.enable_global_music_player!false>
    <#--  <!-- 音乐播放器 -->
    <div id="global-aplayer"></div>
  </#if>
  <#if settings.enable_live2d>
    <!-- live2d -->
    <#include "../../plugins/live2d/ftl/live2d.ftl">
    <@live2d />
  </#if>
  <#-- ===== 引入脚本 end ===== -->

  <#if settings.custom_external_js_body??>
    <!-- 自定义外部js -->
    <script src="${settings.custom_external_js_body!}"></script>
  </#if>
  <#if settings.custom_js_body??>
    <!-- 自定义js -->
    <script type="text/javascript">${settings.custom_js_body!}</script>
  </#if>
</#macro>