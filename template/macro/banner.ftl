<#macro banner>
  <#import "banner_item.ftl" as bitem>
  <#assign source_type = settings.banner_source>
  <#assign limit = (settings.banner_amount_limit!=0)?then(settings.banner_amount_limit,10)>
  <#assign keyword = settings.banner_specify_keyword?trim!>
  <#assign is_empty = true>

  <div class="joe_index__banner">
    <div class="swiper-container">  
      <div class="swiper-wrapper">
        <#if source_type == 'manual'>
          <#if settings.bannerData?? && settings.bannerData != ''>
            <#list settings.bannerData?split('=====') as banners>
              <#if (banners_index + 1) lte limit>
                <#assign banner = banners?split('-|||-')>
                <#assign cur_title = (banner[0]?? && banner[0]?trim!='')?then(banner[0]?replace('\n','')?replace('\r','')?trim,'')>
                <#assign cur_img = (banner[1]?? && banner[1]!='')?then(banner[1]?replace('\n','')?replace('\r','')?trim,'')>
                <#assign cur_link = (banner[2]?? && banner[2]!='')?then(banner[2]?replace('\n','')?replace('\r','')?trim,'')>
                <#assign clickable = cur_link != '' && cur_link != '#'>
                <#if cur_title?index_of('欢迎使用Joe2.0主题') == -1>
                  <div class="swiper-slide">
                    <a class="item${clickable?then(' clickable','')}" href="${clickable?then(cur_link,'javascript:;')}" ${clickable?then('target="_blank"','')} rel="noopener noreferrer nofollow">
                      <img width="100%" height="100%" class="thumbnail lazyload" data-src="${cur_img!}" src="${settings.banner_lazyload_img}" alt="${cur_title!'banner'}">
                      <#if settings.enable_banner_title == true && cur_title!=''>
                        <div class="title">${cur_title}</div>
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
        <#elseif source_type == 'latest'>
          <@postTag method="latest" top="${limit}">
            <#list posts?sort_by("editTime")?reverse as post>
              <@bitem.banner_item post=post index=post_index max=limit />
            </#list>
          </@postTag>
        <#elseif source_type == 'topped'>
          <#list posts.content as post>
            <@bitem.banner_item post=post index=post_index max=limit />
          </#list>
        <#elseif source_type == 'specify_category'>
          <#--  别名或内容为空时显示欢迎图  -->
          <#if keyword != ''>
            <@postTag method="listByCategorySlug" categorySlug="${keyword}">
              <#list posts as post>
                <@bitem.banner_item post=post index=post_index max=limit/>
              </#list>
            </@postTag>
          <#else>
            <#assign is_empty = true>
            <#include "../module/banner_item_default.ftl">
          </#if>
        <#elseif source_type == 'specify_tag'>
          <#--  别名或内容为空时显示欢迎图  -->
          <#if keyword != ''>
            <@postTag method="listByTagSlug" tagSlug="${keyword}">
              <#list posts as post>
                <@bitem.banner_item post=post index=post_index />
              </#list>
            </@postTag>
          <#else>
            <#assign is_empty = true>
            <#include "../module/banner_item_default.ftl">
          </#if>
        </#if>
      </div>
      <#if settings.enable_banner_pagination == true && is_empty == true>
        <div class="swiper-pagination"></div>
      </#if>
      <#if settings.enable_banner_handle == true && settings.enable_banner_switch_button == true && is_empty == true>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
      </#if>
    </div>
  </div>
</#macro>