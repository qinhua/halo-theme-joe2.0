<#macro tail type>
  <#if settings.enable_back2top!=false || settings.enable_auto_switch_mode!=true>
    <#--  悬浮按钮  -->
    <div class="joe_action">
      <#if settings.enable_back2top!true>
        <div class="joe_action_item back2top">
          <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="25" height="25">
            <path d="M725.902 498.916c18.205-251.45-93.298-410.738-205.369-475.592l-6.257-3.982-6.258 3.414c-111.502 64.853-224.711 224.142-204.8 475.59-55.751 53.476-80.214 116.623-80.214 204.8v15.36l179.2-35.27c11.378 40.39 58.596 69.973 113.21 69.973 54.613 0 101.262-29.582 112.64-68.836l180.337 36.41v-15.36c-.569-89.885-25.031-153.6-82.489-206.507zM571.733 392.533c-33.564 31.29-87.04 28.445-118.329-5.12s-28.444-87.04 5.12-117.76c33.565-31.289 87.04-28.444 118.33 5.12s28.444 86.471-5.12 117.76zm-56.32 368.64c-35.84 0-64.284 29.014-64.284 64.285 0 35.84 54.044 182.613 64.284 182.613s64.285-146.773 64.285-182.613c0-35.271-29.014-64.285-64.285-64.285z" />
          </svg>
        </div>
      </#if>
      <#if settings.enable_auto_switch_mode!=true>
        <div class="joe_action_item mode">
          <svg class="mode-light" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="25" height="25">
            <path d="M234.24 512a277.76 277.76 0 1 0 555.52 0 277.76 277.76 0 1 0-555.52 0zM512 187.733a42.667 42.667 0 0 1-42.667-42.666v-102.4a42.667 42.667 0 0 1 85.334 0v102.826A42.667 42.667 0 0 1 512 187.733zm-258.987 107.52a42.667 42.667 0 0 1-29.866-12.373l-72.96-73.387a42.667 42.667 0 0 1 59.306-59.306l73.387 72.96a42.667 42.667 0 0 1 0 59.733 42.667 42.667 0 0 1-29.867 12.373zm-107.52 259.414H42.667a42.667 42.667 0 0 1 0-85.334h102.826a42.667 42.667 0 0 1 0 85.334zm34.134 331.946a42.667 42.667 0 0 1-29.44-72.106l72.96-73.387a42.667 42.667 0 0 1 59.733 59.733l-73.387 73.387a42.667 42.667 0 0 1-29.866 12.373zM512 1024a42.667 42.667 0 0 1-42.667-42.667V878.507a42.667 42.667 0 0 1 85.334 0v102.826A42.667 42.667 0 0 1 512 1024zm332.373-137.387a42.667 42.667 0 0 1-29.866-12.373l-73.387-73.387a42.667 42.667 0 0 1 0-59.733 42.667 42.667 0 0 1 59.733 0l72.96 73.387a42.667 42.667 0 0 1-29.44 72.106zm136.96-331.946H878.507a42.667 42.667 0 1 1 0-85.334h102.826a42.667 42.667 0 0 1 0 85.334zM770.987 295.253a42.667 42.667 0 0 1-29.867-12.373 42.667 42.667 0 0 1 0-59.733l73.387-72.96a42.667 42.667 0 1 1 59.306 59.306l-72.96 73.387a42.667 42.667 0 0 1-29.866 12.373z" />
          </svg>
          <svg class="mode-dark" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="25" height="25">
            <path d="M587.264 104.96c33.28 57.856 52.224 124.928 52.224 196.608 0 218.112-176.128 394.752-393.728 394.752-29.696 0-58.368-3.584-86.528-9.728C223.744 832.512 369.152 934.4 538.624 934.4c229.376 0 414.72-186.368 414.72-416.256 1.024-212.992-159.744-389.12-366.08-413.184z" />
            <path d="M340.48 567.808l-23.552-70.144-70.144-23.552 70.144-23.552 23.552-70.144 23.552 70.144 70.144 23.552-70.144 23.552-23.552 70.144zM168.96 361.472l-30.208-91.136-91.648-30.208 91.136-30.208 30.72-91.648 30.208 91.136 91.136 30.208-91.136 30.208-30.208 91.648z" />
          </svg>
        </div>
      </#if>
    </div>
  </#if>

  <#-- ===== 引入脚本 start ===== -->
  <script src="${RES_BASE_URL!}/source/lib/wowjs/wow.min.js"></script> 
  <script src="${RES_BASE_URL!}/source/lib/typecho-joe-next@6.0.0/qmsg/qmsg.js"></script> 
  <script src="${RES_BASE_URL}/source/js/min/joe.utils.min.js?v=${theme.version!}"></script>

  <#if type == 'index' && settings.enable_banner == true>
    <!-- banner -->
    <script src="${RES_BASE_URL!}/source/lib/swiper/swiper.min.js"></script>
  </#if>
  <#if type == 'post' && settings.enable_toc == true>
    <!-- tocbot -->
    <script src="${RES_BASE_URL!}/source/lib/tocbot/tocbot.min.js"></script>
  </#if>
  <#if settings.enable_clean_mode!=true>
    <#--  comment  -->
    <script src="${RES_BASE_URL!}/source/lib/vue@2.6.10/vue.min.js"></script>
    <script src="${RES_BASE_URL!}/source/lib/halo-comment/halo-comment.min.js?v=${theme.version!}"></script>
  </#if>
  <script src="${RES_BASE_URL!}/source/lib/lazysizes/lazysizes.min.js"></script>
  <script src="${RES_BASE_URL!}/source/lib/fancybox/jquery.fancybox.min.js"></script>
  <#if settings.show_tag_cloud!true>
    <#--  tagcloud  -->
    <script src="${RES_BASE_URL!}/source/lib/typecho-joe-next@6.2.3/3dtag/3dtag.min.js"></script>
  </#if>
  <#if settings.enable_music_player && settings.music_id?? && settings.music_id!=''>
    <!-- music player -->
    <link rel="stylesheet" href="${RES_BASE_URL}/source/lib/APlayer/APlayer.min.css"> 
    <script src="${RES_BASE_URL}/source/lib/APlayer/APlayer.min.js"></script>
    <script src="${RES_BASE_URL}/source/lib/meting/meting.min.js"></script>
  </#if>
  <script src="${RES_BASE_URL!}/source/lib/joe.scroll.min.js?v=${theme.version!}"></script>
  <script src="${RES_BASE_URL!}/source/lib/joe.extend.min.js?v=${theme.version!}"></script>
  <script src="${RES_BASE_URL!}/source/lib/joe.smooth.min.js?v=${theme.version!}"></script>
  <#if type == 'post' || type == 'journals'>
    <script src="${RES_BASE_URL}/source/lib/clipboard/clipboard.min.js"></script>
  </#if>
  <#--  <#if settings.enable_pjax!false>
      <script src="${RES_BASE_URL}/source/lib/jquery-pjax/jquery.pjax.min.js"></script>
      <script src="${RES_BASE_URL}/source/js/min/pjax.js?v=${theme.version!}"></script>
  </#if>   -->
  <#if settings.favicon??>
    <script src="${RES_BASE_URL}/source/lib/favico/favico.min.js"></script>
  </#if>
  <#if settings.enable_mathjax!false>
    <script src="https://cdn.jsdelivr.net/npm/katex@0.13.18/dist/katex.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/katex@0.13.18/dist/contrib/auto-render.min.js"></script>
  </#if>
  <#if type == 'post' || type == 'journals'>
    <script src="${RES_BASE_URL!}/source/lib/prism/prism.js"></script>
    <script src="${RES_BASE_URL}/source/lib/jquery-qrcode/jquery.qrcode.min.js"></script>
  </#if>
  <#--  相册  -->
  <#if type == 'photos'>
    <script src="${RES_BASE_URL}/source/lib/justifiedGallery/jquery.justifiedGallery.min.js"></script>
    <#--  <script src="https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.js"></script>  -->
    <#--  <script src="https://unpkg.com/imagesloaded@4/imagesloaded.pkgd.min.js"></script>  -->
  </#if>

  <#-- ===== 引入页面级js start ===== -->
  <script src="${RES_BASE_URL}/source/js/min/joe.common.min.js?v=${theme.version!}"></script>
  <#if type == 'index'>
    <script src="${RES_BASE_URL}/source/js/min/joe.index.min.js?v=${theme.version!}"></script>
  </#if>
  <#if type == 'archives'>
    <script src="${RES_BASE_URL}/source/js/min/joe.archives.min.js?v=${theme.version!}"></script>
  </#if>
  <script src="${RES_BASE_URL}/source/js/min/joe.short.min.js?v=${theme.version!}"></script>
  <#if type == 'post'>
    <script src="${RES_BASE_URL}/source/js/min/joe.post.min.js?v=${theme.version!}"></script>
  </#if>
  <#if type == 'journals'>
    <script src="${RES_BASE_URL}/source/js/min/joe.journals.min.js?v=${theme.version!}"></script>
  </#if>
  <#if type == 'photos'>
    <script src="${RES_BASE_URL}/source/js/min/joe.photos.min.js?v=${theme.version!}"></script>
  </#if>
  <#if type == 'sheet'>
    <script src="${RES_BASE_URL}/source/lib/draggabilly/draggabilly.pkgd.js"></script>
    <script src="${RES_BASE_URL}/source/js/min/joe.leaving.min.js?v=${theme.version!}"></script>
  </#if>
  <#-- ===== 引入页面级js end ===== -->

  <#-- ===== 引入脚本 start ===== -->
  <#--  <#if settings.enable_global_music_player!false>  -->
    <#--  <!-- 音乐播放器 -->
    <#--  <div id="global-aplayer"></div>  -->
  <#--  </#if>  -->
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