<!DOCTYPE html>
<html lang="zh-CN">
<#import "common/header.ftl" as headInfo>
<@headInfo.head title="友情链接" type="links"/>
<style>
  html[data-mode='dark'] .joe_detail__friends {
    -webkit-filter: brightness(0.7);
    filter: brightness(0.7);
  }
</style>
<body>
    <div id="Joe">
        <#include "common/navbar.ftl">
        <div class="joe_container joe_main_container">
            <div class="joe_main">
                <div class="joe_detail">
                    <h1 class="joe_detail__title">友情链接</h1>
                    <article class="joe_detail__article">
                      <h5>本站友链列表</h5>
                      <ul class="joe_detail__friends">
                          <#assign colors=["#F8D800", "#0396FF", "#EA5455", "#7367F0", "#32CCBC", "#F6416C", "#28C76F", "#9F44D3", "#F55555", "#736EFE", "#E96D71", "#DE4313", "#D939CD", "#4C83FF", "#F072B6", "#C346C2", "#5961F9", "#FD6585", "#465EFB", "#FFC600", "#FA742B", "#5151E5", "#BB4E75", "#FF52E5", "#49C628", "#00EAFF", "#F067B4", "#F067B4", "#ff9a9e", "#00f2fe", "#4facfe", "#f093fb", "#6fa3ef", "#bc99c4", "#46c47c", "#f9bb3c", "#e8583d", "#f68e5f"]>
                          <#assign nextRandom = .now?string["HHmmssSSS"]?number>
                          <@linkTag method="list">
                            <#list links as link>
                                  <li class="joe_detail__friends-item">
                                      <a class="contain" href="${link.url!}" target="_blank" style="background:${colors[nextRandom % colors?size]}" rel="noopener noreferrer">
                                      <span style="font-weight:bold;" class="title">${link.name!}</span>
                                      <div class="content">
                                          <div class="desc" title="${link.description!}">${link.description!}</div>
                                          <#if link.logo?? && link.logo!=''>
                                            <#assign logo=link.logo>
                                          <#else>
                                            <#assign logo="https://cdn.jsdelivr.net/gh/qinhua/cdn_assets/img/icon-qiye.png">
                                          </#if>
                                          <img width="40" height="40" class="avatar lazyload" src="${settings.lazyload_avatar!}" data-src="${logo!}" onerror="this.src='https:\/\/cdn.jsdelivr.net/gh/qinhua/cdn_assets/img/icon-qiye.png'" alt="${link.name!}">
                                      </div>
                                      </a>
                                  </li>
                                  <#assign nextRandom = nextRandom * 10 % 38>
                              </#list>
                          </@linkTag>              
                      </ul>
                    </article>
                    <article class="joe_detail__article">
                        <h5>申请格式</h5>
                        <div class="link-requirement">
                          <p>
                              <joe-message type="info" content="博客名称 + 博客地址 + 博客Logo + 博客介绍，在留言栏目里留言即可。"></joe-message>
                          </p>
                          <blockquote class="joe_link__demo">博客名称：${blog_title!}<br>博客地址：<a href="${blog_url!}">${blog_url!}</a><br>博客介绍：${meta_description!}<br>博客Logo： <a href="${blog_logo!}">${blog_logo!}</a></blockquote>
                        </div>
                    </article>
                </div>
                <#--  <div class="joe_comment">
                  <@global.comment target=links type="links" />
                </div>  -->
            </div>
            <#include "common/aside.ftl">
        </div>
        <#include "common/footer.ftl">
        <#include "common/tail.ftl">
    </div>
</body>
</html>