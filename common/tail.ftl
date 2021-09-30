<#macro tail type>
<#--  悬浮按钮  -->
<div class="joe_action">
    <div class="joe_action_item scroll">
        <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="25" height="25">
            <path d="M725.902 498.916c18.205-251.45-93.298-410.738-205.369-475.592l-6.257-3.982-6.258 3.414c-111.502 64.853-224.711 224.142-204.8 475.59-55.751 53.476-80.214 116.623-80.214 204.8v15.36l179.2-35.27c11.378 40.39 58.596 69.973 113.21 69.973 54.613 0 101.262-29.582 112.64-68.836l180.337 36.41v-15.36c-.569-89.885-25.031-153.6-82.489-206.507zM571.733 392.533c-33.564 31.29-87.04 28.445-118.329-5.12s-28.444-87.04 5.12-117.76c33.565-31.289 87.04-28.444 118.33 5.12s28.444 86.471-5.12 117.76zm-56.32 368.64c-35.84 0-64.284 29.014-64.284 64.285 0 35.84 54.044 182.613 64.284 182.613s64.285-146.773 64.285-182.613c0-35.271-29.014-64.285-64.285-64.285z" />
        </svg>
    </div>
    <#if settings.static_theme?default('')?trim?length lt 1>
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

<#-- ===== 引入脚本 start ===== -->
<script src="https://cdn.jsdelivr.net/npm/wowjs@1.1.3/dist/wow.min.js"></script> 
<script src="https://cdn.jsdelivr.net/npm/typecho-joe-next@6.0.0/assets/js/joe.extend.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/typecho-joe-next@6.0.0/plugin/qmsg/qmsg.js"></script> 
<#--  <script src="${theme_base!}/source/utils/index.js"></script>  -->

<#if settings.favicon??>
  <!-- favicon -->
  <script src="https://cdn.jsdelivr.net/npm/favico.js@0.3.10/favico.min.js"></script>
</#if>
<#if settings.enable_banner>
  <!-- banner -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@5.4.5/css/swiper.min.css">
  <script src="https://cdn.jsdelivr.net/npm/swiper@5.4.5/js/swiper.min.js"></script>
</#if>
<#if settings.enable_toc!true>
  <!-- tocbot -->
  <script src="https://cdn.jsdelivr.net/npm/tocbot@4.10.0/dist/tocbot.min.js"></script>
</#if>
<script src="${options.comment_internal_plugin_js!'//cdn.jsdelivr.net/gh/qinhua/halo-theme-joe2.0@master/source/lib/halo-comment.min.js'}"></script>
<script src="https://cdn.jsdelivr.net/npm/lazysizes@5.3.0/lazysizes.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.js"></script>
<#if settings.show_tag_cloud!true>
  <script src="https://cdn.jsdelivr.net/npm/typecho-joe-next@6.2.3/plugin/3dtag/3dtag.min.js"></script>
</#if>
<#if settings.music_id??>
  <!-- 音乐播放器 -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css"> 
  <script src="https://cdn.jsdelivr.net/npm/aplayer@1.10.1/dist/APlayer.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/meting@1.2.0/dist/Meting.min.js"></script>
</#if>
<script src="https://cdn.jsdelivr.net/gh/qinhua/halo-theme-joe2.0@master/source/js/min/joe.scroll.min.js"></script>
<#--  <script src="https://cdn.jsdelivr.net/gh/qinhua/halo-theme-joe2.0@master/source/js/min/joe.sketchpad.min.js"></script>  -->
<script src="https://cdn.jsdelivr.net/gh/qinhua/halo-theme-joe2.0@master/source/js/min/joe.extend.min.js"></script>
<script src="https://cdn.jsdelivr.net/gh/qinhua/halo-theme-joe2.0@master/source/js/min/joe.smooth.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/clipboard@2.0.6/dist/clipboard.min.js"></script>
<#if settings.enable_pjax!false>
    <script src="https://cdn.jsdelivr.net/npm/jquery-pjax@2.0.1/jquery.pjax.min.js"></script>
    <script src="${theme_base!}/source/js/min/pjax.js?v=${theme.version!}"></script>
</#if> 
<#if settings.enable_mathjax!false>
  <script src="https://cdn.jsdelivr.net/npm/katex@0.13.18/dist/katex.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/katex@0.13.18/dist/contrib/auto-render.min.js"></script>
</#if> 

<#-- ===== 引入页面级js start===== -->
<script src="${theme_base!}/source/js/min/joe.common.min.js"></script>
<#--  <script src="${theme_base!}/source/js/min/joe.app.min.js"></script>  -->
<#if type == 'index'>
  <script src="${theme_base!}/source/js/min/joe.index.min.js"></script>
</#if>
<#if type == 'post' || type == 'journals'>
  <script src="https://cdn.jsdelivr.net/gh/qinhua/halo-theme-joe2.0@master/source/lib/prism/prism.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/jquery.qrcode@1.0.3/jquery.qrcode.min.js"></script>
</#if>
<script src="${theme_base!}/source/js/min/joe.short.min.js"></script>
<script src="${theme_base!}/source/js/min/joe.post.min.js"></script>
<#if type == 'sheet'>
  <script src="https://cdn.jsdelivr.net/npm/draggabilly@2.3.0/dist/draggabilly.pkgd.js"></script>
  <script src="${theme_base!}/source/js/min/joe.leaving.min.js"></script>
</#if>
<#-- ===== 引入页面级js end===== -->

<#--  粒子背景  -->
<#if settings.bg_particle_rain!false>
  <canvas id="canvas-rain" width="1920" height="1080" style="position:fixed;left:0;top:0;z-index:100;"></canvas>
  <script src="${theme_base!}/source/effect/bg/canvas-rain.js"></script>
</#if>
<!-- 鼠标特效 -->
<#if settings.click_effect!='none'>
  <script src="${theme_base!}/source/effect/click/${settings.click_effect}.js"></script>
</#if>
<!-- 音乐播放器 -->
<#if settings.enable_music_player!false>
  <div id="global-aplayer"></div>
</#if>
<!-- live2d -->
<#if settings.enable_live2d>
  <#include "../plugins/live2d/ftl/live2d.ftl">
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
<#--  页面加载耗时  -->
<script>
  $(function(){
    var cosume_time=performance.now();
    cosume_time && console.log("%c页面加载耗时："+Math.round(cosume_time)+" ms | Theme By ${user.nickname}", "color:#fff; background: linear-gradient(270deg, #986fee, #8695e6, #68b7dd, #18d7d3); padding: 8px 15px; border-radius: 0 15px 0 15px");
  })
</script>
</#macro>