<!DOCTYPE html>
<html lang="zh-CN">
  <#assign title=settings.links_title!'友情链接'>
  <#import "template/common/header.ftl" as headInfo>
  <@headInfo.head title="${title}" type="links"/>
  <#import "template/macro/tail.ftl" as tailInfo>
  <body>
    <div id="Joe">
      <#include "template/common/navbar.ftl">
      <div class="joe_container joe_main_container page-links${(settings.aside_position=='left')?then(' revert','')}">
        <div class="joe_main">
          <div class="joe_detail">
            <h1 class="joe_detail__title txt-shadow">${title}</h1>
            <#include "template/macro/links_item.ftl">
            <#assign logo_default=(settings.links_logo_default?? && settings.links_logo_default!='')?then(settings.links_logo_default, BASE_RES_URL+'/source/img/icon_qiye.png')>
            <#assign colors=["#F8D800", "#0396FF", "#EA5455", "#7367F0", "#32CCBC", "#F6416C", "#32B76E", "#9F44D3", "#F55555", "#736EFE", "#E96D71", "#DE4313", "#D939CD", "#4C83FF", "#F072B6", "#C346C2", "#5961F9", "#FD6585", "#5569E8", "#FFC600", "#FA742B", "#5151E5", "#BB4E75", "#FF52E5", "#4DA037", "#15D1E2", "#F067B4", "#F067B4", "#ff9a9e", "#00f2fe", "#4facfe", "#f093fb", "#6fa3ef", "#bc99c4", "#46c47c", "#f9bb3c", "#e8583d", "#f68e5f"]>
            <#assign omits=settings.links_omit?trim!''>
            <article class="joe_detail__article animated fadeIn">
              <h5>友链列表<#if omits == ''><@linkTag method="count"><span class="totals">${count!0} 条</span></@linkTag></#if></h5>
              <#if settings.links_type == 'group'>
                <@linkTag method="listTeams">
                    <#assign flag = 0>
                    <#list teams?reverse as team>
                      <#if omits?index_of(team.team) == -1>
                        <div class="links-group">
                          <h1>${team.team!}</h1>
                          <@links_item links=team.links />
                        </div>
                      <#else>
                        <#assign flag++>
                      </#if>
                    </#list>
                  <#if teams?size == 0 || flag == teams?size>
                    <div class="joe_nodata">${settings.links_empty_text!}</div>
                  </#if>
                </@linkTag>
              <#else>
                <@linkTag method="${(settings.links_type == 'list')?then('list', 'listByRandom')}">
                  <#assign nextRandom = .now?string["HHmmssSSS"]?number>
                  <@links_item links=links />
                </@linkTag>
              </#if>
            </article>
            <article class="joe_detail__article animated fadeIn">
              <h5>申请格式</h5>
              <div class="link-requirement">
                <p>
                  <joe-message type="info" content='<em style="font-style:normal;font-weight:bold;">< 博客名称 + 博客地址 + 博客Logo + 博客简介 ></em><br>补充：Halo 博客用户可直接用短链接形式：<br>- 博客地址/logo<br>- 博客地址/avatar<br>(大家在留言栏目里留言即可)'></joe-message>
                </p>
                <#assign logo_url = blog_url + '/logo'>
                <blockquote class="joe_link__demo">博客名称：${blog_title!}<br>博客地址：<a href="${blog_url!}">${blog_url!}</a><br>博客Logo：<a href="${logo_url!!}">${logo_url!}</a><br>博客简介：${meta_description!'这是一个非常牛逼的博客'}</blockquote>
              </div>
            </article>
          </div>
          <#--  目前友链页无法评论  -->
          <#--  <div class="joe_comment">
            <@global.comment target=links type="links" />
          </div>  -->
        </div>
        <#if settings.enable_links_aside!false>
          <#include "template/common/aside.ftl">
        </#if>
      </div>
      <#include "template/common/actions.ftl">
      <#include "template/common/footer.ftl">
    </div>
    <@tailInfo.tail type="links"/> 
  </body>
</html>