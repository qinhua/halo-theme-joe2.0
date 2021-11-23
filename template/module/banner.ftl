<#assign source_type = settings.banner_source>
<#assign limit = (settings.banner_amount_limit!=0)?then(settings.banner_amount_limit,10)>
<#if source_type == 'manual'>
<div class="joe_index__banner">
  <#if settings.bannerData?? && settings.bannerData!=''>
    <div class="swiper-container">  
      <div class="swiper-wrapper">
        <#list settings.bannerData?split('=====') as banners>
          <#assign banner = banners?split('-|||-')>
          <div class="swiper-slide">
            <#assign cur_title = (banner[0]?? && banner[0]?trim!='')?then(banner[0]?replace('\n','')?replace('\r','')?trim,'')>
            <#assign cur_img = (banner[1]?? && banner[1]!='')?then(banner[1]?replace('\n','')?replace('\r','')?trim,'')>
            <#assign cur_link = (banner[2]?? && banner[2]!='')?then(banner[2]?replace('\n','')?replace('\r','')?trim,'')>
            <#assign clickable = cur_link!='' && cur_link!='#'>
            <a class="item${clickable?then(' clickable','')}" href="${clickable?then(cur_link,'javascript:;')}" ${clickable?then('target="_blank"','')} rel="noopener noreferrer nofollow">
              <img width="100%" height="100%" class="thumbnail lazyload" data-src="${cur_img!}" src="${settings.banner_lazyload_img}" alt="${cur_title!'banner'}">
              <#if settings.enable_banner_title==true && cur_title!=''>
                <div class="title">${(cur_title?index_of('欢迎使用Joe2.0主题')!=-1)?then('欢迎使用Joe2.0主题 V'+theme.version!,cur_title)}</div>
              </#if>
              <i class="joe-font joe-icon-zhifeiji"></i>
            </a>
          </div>
        </#list>
      </div>
      <#if settings.enable_banner_pagination!true>
        <div class="swiper-pagination"></div>
      </#if>
      <#if settings.enable_banner_handle==true && settings.enable_banner_switch_button==true>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
      </#if>
    </div>
  <#else>
    <div class="joe_index__banner-empty">
      <a href="https://github.com/qinhua/halo-theme-joe2.0#readme" target="_blank" rel="noopener noreferrer nofollow">
        <img width="100%" height="100%" class="thumbnail lazyload" data-src="${BASE_RES_URL+'/source/img/dp/welcome.webp'}" src="${settings.banner_lazyload_img}" alt="欢迎使用halo-theme-joe2.0">
      </a>
    </div>
  </#if>
</div>
<#elseif source_type == 'newest'>
  <#--  <@postTag method="latest" top="5">
      <ul class="list">       
        <#list posts?sort_by("editTime")?reverse as post>
          <a href="${post.fullPath!}">${post.title!}</a>
        </#list>
      </ul>
  </@postTag>  -->
<#else>
</#if>
<#--  最新文章  -->
<#--  <@postTag method="latest" top="${limit}">
  <#if posts?size gt 0>
    <ul class="list">       
      <#list posts?sort_by("editTime")?reverse as post>
        <a href="${post.fullPath!}">${post.title!}</a>
      </#list>
    </ul>
  <#else>
    <#include "empty.ftl">
    <@empty type="newest" showImg="false"/>
  </#if>
</@postTag>  -->
<#--  置顶文章  -->
<#--  <@postTag method="latest" top="${limit}">
  <#list posts?sort_by("priority") as post>
    <a href="${post.fullPath!}">${post.title!}</a>
  </#list>
</@postTag>  -->
<#--  置顶分类文章  -->
<#--  置顶标签文章  -->
<#--  根据分类获取  -->
<#--  <@postTag method="listByCategoryId" top="${settings.banner_specify_keyword?c}">
    <span>分类 ${category.name!} 下的文章：</span>
    <#list posts as post>
        <a href="${post.fullPath!}">${post.title!}</a>
    </#list>
</@postTag>  -->
<#--  根据标签获取  -->
<#--  <@postTag method="listByTagId" tagId="${settings.banner_specify_keyword?c}">
    <span>标签 ${tag.name!} 下的文章：</span>
    <#list posts as post>
        <a href="${post.fullPath!}">${post.title!}</a>
    </#list>
</@postTag>  -->
<#--  置顶文章  -->
