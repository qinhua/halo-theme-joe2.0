<section class="joe_aside__item author">
  <img width="100%" height="120" class="image lazyload" data-src="${(settings.author_bg!='')?then(settings.author_bg,BASE_RES_URL+'/source/img/author_bg.jpg')}" src="${EMPTY_IMG!}" onerror="Joe.errorImg(this)" alt="博主栏壁纸">
  <div class="user">
    <div class="avatar_wrapper ${settings.avatar_type!}">
      <img class="avatar lazyload" data-src="${USER_AVATAR}" src="${settings.lazyload_avatar!}" onerror="Joe.errorImg(this)" alt="博主头像"/>
      <#if settings.avatar_frame?? && settings.avatar_frame!="0">
        <img class="avatar_frame ${settings.avatar_frame}" src="${BASE_RES_URL!}/source/frame/${settings.avatar_frame!}.png" onerror="Joe.errorImg(this)" alt="挂架"/>
      </#if>
      <#if settings.avatar_widget?? && settings.avatar_widget!="0">
        <img class="avatar_widget ${settings.avatar_widget}" src="${BASE_RES_URL!}/source/widget/${settings.avatar_widget!}.gif" onerror="Joe.errorImg(this)" alt="相框"/>
      </#if>
    </div>
    <a class="link" href="${blog_url!}" target="_blank" rel="noopener noreferrer nofollow">
      ${user.nickname!}<#compress><#include "level.ftl"></#compress>
    </a>
    <#if settings.motto??>
      <p class="motto joe_motto">${settings.motto!}</p>
    <#else>
      <#if settings.enable_day_words!false>
        <img class="motto_day_words" height="14" src="https://v2.jinrishici.com/one.svg?font-size=146&spacing=2&color=grey" onerror="Joe.errorImg(this)"/>
      <#else>
        <p class="motto joe_motto">${user.description!'一句话介绍自己吧！'}</p>
      </#if>
    </#if>
  </div>
  <div class="count">
    <#--  <@visitTag method="count">
      <div class="item" title="累计访问数 ${count!'0'}">
        <span class="num">${count!'0'}</span>
        <span>访问量</span>
      </div>
    </@visitTag>  -->
    <#if settings.overview_type == 'A'>
      <@categoryTag method="count">
        <div class="item" title="累计分类数 ${count!'0'}">
          <span class="num">${count!'0'}</span>
          <span>分类数</span>
        </div>
      </@categoryTag>
      <@tagTag method="count">
        <div class="item" title="累计标签数 ${count!'0'}">
          <span class="num">${count!'0'}</span>
          <span>标签数</span>
        </div>
      </@tagTag>
      <@postTag method="count">
        <div class="item" title="累计文章数 ${count!'0'}">
          <span class="num">${count!'0'}</span>
          <span>文章数</span>
        </div>
      </@postTag>
    <#elseif settings.overview_type == 'B'>
      <@categoryTag method="count">
        <div class="item" title="累计分类数 ${count!'0'}">
          <span class="num">${count!'0'}</span>
          <span>分类数</span>
        </div>
      </@categoryTag>
      <@tagTag method="count">
        <div class="item" title="累计标签数 ${count!'0'}">
          <span class="num">${count!'0'}</span>
          <span>标签数</span>
        </div>
      </@tagTag>
      <@commentTag method="count">
        <div class="item" title="累计评论数 ${count!'0'}">
          <span class="num">${count!'0'}</span>
          <span>评论数</span>
        </div>
      </@commentTag>
    <#elseif settings.overview_type == 'C'>
      <@categoryTag method="count">
        <div class="item" title="累计分类数 ${count!'0'}">
          <span class="num">${count!'0'}</span>
          <span>分类数</span>
        </div>
      </@categoryTag>
      <@postTag method="count">
        <div class="item" title="累计文章数 ${count!'0'}">
          <span class="num">${count!'0'}</span>
          <span>文章数</span>
        </div>
      </@postTag>
      <@commentTag method="count">
        <div class="item" title="累计评论数 ${count!'0'}">
          <span class="num">${count!'0'}</span>
          <span>评论数</span>
        </div>
      </@commentTag>
    <#elseif settings.overview_type == 'D'>
      <@tagTag method="count">
        <div class="item" title="累计标签数 ${count!'0'}">
          <span class="num">${count!'0'}</span>
          <span>标签数</span>
        </div>
      </@tagTag>
      <@postTag method="count">
        <div class="item" title="累计文章数 ${count!'0'}">
          <span class="num">${count!'0'}</span>
          <span>文章数</span>
        </div>
      </@postTag>
      <@commentTag method="count">
        <div class="item" title="累计评论数 ${count!'0'}">
          <span class="num">${count!'0'}</span>
          <span>评论数</span>
        </div>
      </@commentTag>
    <#else>
    </#if>
  </div>
  <#if settings.enable_weather==true && settings.weather_key?? && settings.weather_key!=''>
    <div id="he-plugin-simple"></div>
  </#if>
  <#if settings.enable_social!false>
    <#include "social.ftl">
  </#if>
  <#if settings.enable_strips!false>
    <canvas id="canvas-strips" width="300" height="340"></canvas>
    <script src="${BASE_RES_URL}/source/effect/bg/strips.js"></script>
  </#if>
</section>