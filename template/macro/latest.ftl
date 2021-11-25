
<#macro newest>
  <section class="joe_aside__item newest">
    <div class="joe_aside__item-title">
      <i class="joe-font joe-icon-huo"></i>
      <span class="text">最新文章</span>
    </div>
    <div class="joe_aside__item-contain">
      <@postTag method="latest" top="${settings.newest_page_size!5}">
        <#if posts?size gt 0>
          <ul class="list">       
            <#list posts?sort_by("editTime")?reverse as post>
              <li class="item">
                <a class="link" href="${post.fullPath!}" title="${post.title!}">${post.title!}</a>
                <i class="joe-font joe-icon-link"></i>
              </li>
            </#list>
          </ul>
        <#else>
          <#include "empty.ftl">
          <@empty type="newest" showImg="false"/>
        </#if>
      </@postTag>
    </div>
  </section>
</#macro>