<#macro list_index_async>
  <ul class="joe_list"></ul>
  <ul class="joe_list__loading">
    <li class="item">
      <#if settings.enable_post_thumbnail!true>
        <div class="thumbnail"></div>
      </#if>
      <div class="information">
        <div class="title"></div>
        <div class="abstract">
          <p></p>
          <p></p>
        </div>
      </div>
    </li>
    <li class="item">
      <#if settings.enable_post_thumbnail!true>
        <div class="thumbnail"></div>
      </#if>
      <div class="information">
        <div class="title"></div>
        <div class="abstract">
          <p></p>
          <p></p>
        </div>
      </div>
    </li>
  </ul>
  <#include "empty.ftl">
  <@empty type="index" text="${settings.home_empty_text!'暂无文章数据'}" isAsync="true"/>
</#macro>
