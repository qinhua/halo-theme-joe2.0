
<#macro relate postData>
  <#if postData.categories?size gt 0>
    <#assign slug = postData.categories[0].slug!>
    <@postTag method="listByCategorySlug" categorySlug="${slug}">
      <section class="joe_aside__item newest">
        <div class="joe_aside__item-title">
          <i class="joe-font joe-icon-huo"></i>
          <span class="text">相关文章</span>
        </div>
        <div class="joe_aside__item-contain"> 
          <#if posts?size gt 0>
            <ul class="list">       
              <#list posts?sort_by("editTime")?reverse as post>
                <#if post_index lt 5>
                  <li class="item">
                    <a class="link" href="${post.fullPath!}" title="${post.title!}">${post.title!}</a>
                    <i class="joe-font joe-icon-link"></i>
                  </li>
                </#if>
              </#list>
            </ul>
          <#else>
            <#include "empty.ftl">
            <@empty type="relate" showImg="false"/>
          </#if>
        </div>
      </section>
    </@postTag>
  </#if>
</#macro>