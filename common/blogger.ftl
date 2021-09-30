<section class="joe_aside__item author">
        <img width="100%" height="120" class="image lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="${settings.user_bg_pic!'https://cdn.jsdelivr.net/gh/qinhua/halo-theme-joe2.0@master/source/img/aside_author_bg.jpg'}" onerror="this.src='data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='" alt="博主栏壁纸">
        <div class="user">
            <div class="avatar_wrapper${(settings.avatar_type=='2')?string(' rect','')}">
              <img class="avatar lazyload" src="${settings.lazyload_avatar!}" data-src="${user.avatar!}" onerror="this.src='${settings.default_avatar!}'" alt="博主头像"/>
              <#if settings.avatar_frame?? && settings.avatar_frame!="0">
                <img class="avatar_frame ${settings.avatar_frame}" src="https://cdn.jsdelivr.net/gh/qinhua/halo-theme-joe2.0@master/source/frame/${settings.avatar_frame!}.png" onerror="this.src='data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='" alt="挂架"/>
              </#if>
              <#if settings.avatar_widget?? && settings.avatar_widget!="0">
                <img class="avatar_widget ${settings.avatar_widget}" src="https://cdn.jsdelivr.net/gh/qinhua/halo-theme-joe2.0@master/source/widget/${settings.avatar_widget!}.gif" onerror="this.src='data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='" alt="相框"/>
              </#if>
            </div>
            <a class="link" href="${blog_url!}" target="_blank" rel="noopener noreferrer nofollow">
              ${user.nickname!}
              <#if settings.show_level>
                <@postTag method="count">
                  <#if count gte 1 && count lt 20><#assign level=1></#if>
                  <#if count gte 20 && count lt 50><#assign level=2></#if>
                  <#if count gte 50 && count lt 100><#assign level=3></#if>
                  <#if count gte 100 && count lt 300><#assign level=4></#if>
                  <#if count gte 300 && count lt 500><#assign level=5></#if>
                  <#if count gte 500><#assign level=6></#if>
                  <img class="level" src="https://cdn.jsdelivr.net/gh/qinhua/halo-theme-joe2.0@master/source/img/lv${level}.png" onerror="this.src='data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='" alt="等级"/>
                </@postTag>
              </#if>
            </a>
            <#if settings.motto??>
              <p class="motto joe_motto">${settings.motto!}</p>
            <#else>
              <#if settings.enable_day_words>
                <style type="text/css">
                  html[data-mode='dark'] .motto_day_words {
                    -webkit-filter: invert(1);
                    filter: invert(1);
                  }
                </style>
                <img class="motto_day_words" height="14" src="https://v2.jinrishici.com/one.svg?font-size=146&spacing=2&color=grey"/>
              <#else>
                <p class="motto joe_motto">${user.description!}</p>
              </#if>
            </#if>
        </div>
        <div class="count">
            <#--  <@visitTag method="count">
              <div class="item" title="累计访问数 ${count!}">
                  <span class="num">${count!"0"}</span>
                  <span>访问量</span>
              </div>
            </@visitTag>  -->
            <@tagTag method="count">
              <div class="item" title="累计标签数 ${count!}">
                  <span class="num">${count!"0"}</span>
                  <span>标签数</span>
              </div>
            </@tagTag>
            <@postTag method="count">
              <div class="item" title="累计文章数 ${count!}">
                  <span class="num">${count!"0"}</span>
                  <span>文章数</span>
              </div>
            </@postTag>
            <@commentTag method="count">
              <div class="item" title="累计评论数 ${count!}">
                  <span class="num">${count!"0"}</span>
                  <span>评论量</span>
              </div>
            </@commentTag>
        </div>
        <#if settings.show_social>
          <#include "social.ftl">
        </#if>
        <#if settings.enable_strips>
          <canvas id="canvas-strips" width="100%" height="400"></canvas>
          <script src="${theme_base!}/source/effect/bg/strips.js"></script>
        </#if>
    </section>