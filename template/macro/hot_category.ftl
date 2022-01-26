<#macro hot_category>
  <div class="joe_index__hot">
    <div class="joe_index__title">
      <ul class="joe_index__title-title default">
        <li class="item active" data-type="created">精品分类</li>
        <#--  <li class="line"></li>  -->
      </ul>
      <div class="joe_index__title-notice">
        <a href="${blog_url}/categories" target="_blank" rel="noopener noreferrer nofollow"><i class="joe-font joe-icon-application"></i>全部分类</a>
      </div>
    </div>
    <ul class="joe_index__hot-list hotlist">
      <@categoryTag method="list">
        <#list categories?sort_by("postCount")?reverse as category>
          <#if category_index < 4>
            <li class="item animated fadeIn">
              <a class="link" href="${category.fullPath!}" title="${category.name!}">
                <figure class="inner">
                  <#if settings.enabel_category_celcius!true>
                    <#include "post_num.ftl">
                    <@post_num type="category" id="${category.id?c}" suffix="℃" />
                  </#if>
                  <#escape x as x!"">
                    <#assign cur_cover_url=settings['hot_cover'+(category_index+1)]>
                    <#assign cover=(cur_cover_url?? && cur_cover_url!='')?then(cur_cover_url, (category.thumbnail?? && category.thumbnail!='')?then(category.thumbnail, BASE_RES_URL+'/source/img/hot_cover${category_index+1}.jpg')) >
                    <img width="100%" height="120" class="image lazyload" data-src="${cover}" src="${LAZY_IMG}" onerror="this.src='${settings.fallback_thumbnail!}'" alt="${category.name!}">
                  </#escape>
                  <figcaption class="title">${category.name!}</figcaption>
                </figure>
              </a>
            </li>
          </#if>
        </#list>
      </@categoryTag>
    </ul>
  </div>
</#macro>
