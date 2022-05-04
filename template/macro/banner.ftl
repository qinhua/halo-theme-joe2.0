<#macro banner>
  <#import "banner_item.ftl" as bitem>
  <#assign source_type = settings.banner_source>
  <#assign limit = (settings.banner_amount_limit!=0)?then(settings.banner_amount_limit,10)>
  <#assign keyword = settings.banner_specify_keyword?trim!>
  <#assign is_empty = false>

  <#--  关键字或数据为空时显示欢迎图  -->
  <div class="joe_index__banner">
    <div class="swiper-container">  
      <div class="swiper-wrapper">
        <#--  手动配置  -->
        <#if source_type == 'manual'>
          <#if settings.banner_data?? && settings.banner_data != ''>
            <#list settings.banner_data?split('=====') as banners>
              <#if (banners_index + 1) lte limit>
                <#assign banner = banners?split('-|||-')>
                <#assign cur_title = (banner[0]?? && banner[0]?trim!='')?then(banner[0]?replace('\n','')?replace('\r','')?trim,'')>
                <#assign cur_subtitle = (banner[1]?? && banner[1]?trim!='')?then(banner[1]?replace('\n','')?replace('\r','')?trim,'')>
                <#assign cur_img = (banner[2]?? && banner[2]!='')?then(banner[2]?replace('\n','')?replace('\r','')?trim,'')>
                <#assign cur_link = (banner[3]?? && banner[3]!='')?then(banner[3]?replace('\n','')?replace('\r','')?trim,'')>
                <#assign clickable = cur_link != '' && cur_link != '#'>
                <#if cur_title?index_of('欢迎使用Joe2.0主题') == -1>
                  <div class="swiper-slide">
                    <a class="item${clickable?then(' clickable','')}" href="${clickable?then(cur_link,'javascript:;')}" ${clickable?then('target="_blank"','')} rel="noopener noreferrer nofollow">
                      <img width="100%" height="100%" class="thumbnail lazyload" data-src="${cur_img!}" src="${settings.banner_lazyload_img}" onerror="Joe.errorImg(this)" alt="${cur_title!'banner'}">
                      <#if settings.enable_banner_title == true && cur_title!=''>
                        <div class="title-row">
                          <h3 class="title">${cur_title}</h3>
                          <#if cur_subtitle!=''>
                            <p class="subtitle">${cur_subtitle}</p>
                          </#if>
                        </div>
                      </#if>
                      <i class="joe-font joe-icon-zhifeiji"></i>
                    </a>
                  </div>
                <#else>
                  <#include "../module/banner_item_default.ftl">
                </#if>
              </#if>
            </#list>
          <#else>
            <#assign is_empty = true>
            <#include "../module/banner_item_default.ftl">
          </#if>
        <#--  最新文章  -->
        <#elseif source_type == 'latest'>
          <@postTag method="latest" top="${limit}">
            <#if posts?size gt 0>
              <#list posts?sort_by("editTime")?reverse as post>
                <@bitem.banner_item post=post index=post_index max=limit />
              </#list>
            <#else>
              <#assign is_empty = true>
              <#include "../module/banner_item_default.ftl">
            </#if>
          </@postTag>
        <#--  置顶文章  -->
        <#elseif source_type == 'topped'>
          <@postTag method="latest" top="${limit}">
            <#if posts?size gt 0>
              <#list posts as post>
                <#if post.topped == true>
                  <@bitem.banner_item post=post index=post_index max=limit />
                </#if>
              </#list>
            <#else>
              <#assign is_empty = true>
              <#include "../module/banner_item_default.ftl">
            </#if>
          </@postTag>
        <#--  阅读量排行文章  -->
        <#elseif source_type == 'visits'>
          <@postTag method="latest" top="${limit}">
            <#if posts?size gt 0>
              <#list posts?sort_by("visits")?reverse as post>
                <@bitem.banner_item post=post index=post_index max=limit />
              </#list>
            <#else>
              <#assign is_empty = true>
              <#include "../module/banner_item_default.ftl">
            </#if>
          </@postTag>
        <#--  点赞排行文章  -->
        <#elseif source_type == 'likes'>
          <@postTag method="latest" top="${limit}">
            <#if posts?size gt 0>
              <#list posts?sort_by("likes")?reverse as post>
                <@bitem.banner_item post=post index=post_index max=limit />
              </#list>
            <#else>
              <#assign is_empty = true>
              <#include "../module/banner_item_default.ftl">
            </#if>
          </@postTag>
        <#--  特定分类文章  -->
        <#elseif source_type == 'specify_category'>
          <#if keyword != ''>
            <@postTag method="listByCategorySlug" categorySlug="${keyword}">
              <#if posts?size gt 0>
                <#list posts as post>
                  <@bitem.banner_item post=post index=post_index max=limit />
                </#list>
              <#else>
                <#assign is_empty = true>
                <#include "../module/banner_item_default.ftl">
              </#if>
            </@postTag>
          <#else>
            <#assign is_empty = true>
            <#include "../module/banner_item_default.ftl">
          </#if>
        <#--  特定标签文章  -->
        <#elseif source_type == 'specify_tag'>
          <#if keyword != ''>
            <@postTag method="listByTagSlug" tagSlug="${keyword}">
              <#if posts?size gt 0>
                <#list posts as post>
                  <@bitem.banner_item post=post index=post_index max=limit />
                </#list>
              <#else>
                <#assign is_empty = true>
                <#include "../module/banner_item_default.ftl">
              </#if>
            </@postTag>
          <#else>
            <#assign is_empty = true>
            <#include "../module/banner_item_default.ftl">
          </#if>
        </#if>
      </div>
      <#if settings.enable_banner_pagination == true && is_empty != true>
        <div class="swiper-pagination"></div>
      </#if>
      <#if settings.enable_banner_handle == true && settings.enable_banner_switch_button == true && is_empty != true>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
      </#if>
    </div>
  </div>
</#macro>