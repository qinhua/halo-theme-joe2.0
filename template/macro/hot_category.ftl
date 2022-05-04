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
      <#if settings.hot_category_source == 'hot'>
        <@categoryTag method="list">
          <#list categories?sort_by("postCount")?reverse as category>
            <#if category_index lt 4>
              <li class="item animated fadeIn">
                <a class="link" target="_blank" href="${category.fullPath!}" title="${category.name!}">
                  <figure class="inner">
                    <#if settings.enabel_category_celcius!true>
                      <#include "post_num.ftl">
                      <@post_num type="category" id="${category.id?c}" suffix="℃" />
                    </#if>
                    <#assign cover=(category.thumbnail?? && category.thumbnail!='')?then(category.thumbnail, BASE_RES_URL+'/source/img/hot_cover${category_index+1}.jpg')>
                    <img width="100%" height="120" class="image lazyload" data-src="${cover}" src="${LAZY_IMG}" onerror="Joe.errorImg(this)" alt="${category.name!}">
                    <figcaption class="title">${category.name!}</figcaption>
                  </figure>
                </a>
              </li>
            </#if>
          </#list>
        </@categoryTag>
      <#else>
        <#if settings.custom_category_data?? && settings.custom_category_data != ''>
          <#list settings.custom_category_data?split('=====') as categorys>
            <#if categorys_index lt 4>
              <#assign category = categorys?split('-|||-')>
              <#assign cur_title = (category[0]?? && category[0]?trim!='')?then(category[0]?replace('\n','')?replace('\r','')?trim,'')>
              <#assign cur_img = (category[1]?? && category[1]!='')?then(category[1]?replace('\n','')?replace('\r','')?trim,'')>
              <#assign cur_link = (category[2]?? && category[2]!='')?then(category[2]?replace('\n','')?replace('\r','')?trim,'')>
              <#assign clickable = cur_link != '' && cur_link != '#'>
              <li class="item animated fadeIn">
                <a class="link${clickable?then(' clickable','')}" href="${clickable?then(cur_link,'javascript:;')}" ${clickable?then('target="_blank"','')} rel="noopener noreferrer nofollow" href="${cur_link!}" title="${cur_title!}">
                  <figure class="inner">
                    <#assign cover=(cur_img!='')?then(cur_img, BASE_RES_URL+'/source/img/hot_cover${categorys_index+1}.jpg')>
                    <img width="100%" height="120" class="image lazyload" data-src="${cover}" src="${LAZY_IMG}" onerror="Joe.errorImg(this)" alt="${cur_title!}">
                    <figcaption class="title">${cur_title!}</figcaption>
                  </figure>
                </a>
              </li>
            </#if>
          </#list> 
        <#else>
          <div class="joe_nodata"><i class="joe-font joe-icon-tips"></i>没有配置分类数据</div>
        </#if>
      </#if>
    </ul>
  </div>
</#macro>
