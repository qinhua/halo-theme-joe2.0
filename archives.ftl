<!DOCTYPE html>
<html lang="zh-CN">
  <#assign title=settings.archives_title!'文章归档'>
  <#import "template/common/header.ftl" as headInfo>
  <@headInfo.head title="${title}" type="archives"/>
  <#import "template/macro/tail.ftl" as tailInfo>
  <body>
    <div id="Joe">
      <#include "template/common/navbar.ftl">
      <div class="joe_container joe_main_container page-archives${settings.enable_show_in_up?then(' animated showInUp','')}${(settings.aside_position=='left')?then(' revert','')}">
        <div class="joe_main">
          <div class="joe_index joe_archives__filing">
            <div class="title">${title}</div>
            <div class="content">
              <#--  <div id="post-calendar" class="card-content">
                <canvas width="100%" height="300"></canvas>
              </div>  -->
              <#if settings.enable_archives_category!true>
                <div class="joe_archives__category animated fadeIn">
                  <div class="joe_archives-title"><i class="joe-font joe-icon-fenlei"></i>分类</div>
                  <ul class="joe_category-list">
                    <@categoryTag method="list">
                      <#list categories as category>
                        <#if category.slug=='default' && category.name=='默认分类'>
                          <li class="item">
                            <a class="link" href="${category.fullPath!}" title="${category.name!}"><span title="${category.name!}">${category.name!}</span><em>${category.postCount!}</em></a>
                          </li>
                        </#if>
                      </#list>
                      <#list categories as category>
                        <#if category.slug!='default'>
                          <li class="item">
                            <a class="link" href="${category.fullPath!}" title="${category.name!}"><span title="${category.name!}">${category.name!}</span><em>${category.postCount!}</em></a>
                          </li>
                        </#if>
                      </#list>
                    </@categoryTag>
                  </ul>
                </div>
              </#if>
              <div class="joe_archives__wrapper animated fadeIn">
                <div class="joe_archives-title">
                  <#if settings.archives_list_type=='timeline'>
                    <#assign metric=settings.archives_timeline_metric!"month">
                    <i class="joe-font joe-icon-timeline"></i>时间轴<em>（${(metric=='year')?then('年','月')}）</em>
                  <#else>
                    <i class="joe-font joe-icon-rili"></i>列表
                  </#if>
                </div>
                <#if settings.archives_list_type=='list'>
                  <#if posts.content?size gt 0>
                    <ul class="joe_archives-list">
                      <#list posts.content?sort_by("createTime")?reverse as post>
                        <li class="item">
                          <a rel="noopener noreferrer" target="_blank" title="${post.title!}" href="${post.fullPath!}">${post.title!}</a>
                          <span>${post.createTime?string('yyyy-MM-dd')}</span>
                        </li>
                      </#list>
                    </ul>
                    <#include "template/common/pager.ftl">
                    <@pager method="archives" postsData=posts display="${settings.max_pager_number!5}" />
                  <#else>
                    <#include "template/macro/empty.ftl">
                    <@empty type="archives" text="${settings.archives_empty_text!'暂无文章数据'}"/>
                  </#if>
                <#else>
                  <ul class="joe_archives-timelist">
                    <@postTag method="archive" type="${metric}">
                      <#list archives as archive>
                        <li class="item">
                          <div class="wrapper">
                            <div class="panel in">${archive.year?c} 年<#if metric == 'month'> ${archive.month?c} 月</#if><i class="joe-font joe-icon-arrow-down"></i></div>
                            <ol class="panel-body">
                              <#list archive.posts?sort_by("createTime")?reverse as post>
                                <li>
                                  <a rel="noopener noreferrer" target="_blank" title="${post.title!}" href="${post.fullPath!}">${post.createTime?string('MM-dd')}：${post.title!}</a>
                                </li>
                              </#list>
                            </ol>
                          </div>
                        </li>
                      </#list>
                    </@postTag>
                  </ul>
                </#if>
              </div>
            </div>
          </div>
        </div>
        <#if settings.enable_archives_aside!false>
          <#include "template/common/aside.ftl">
        </#if>
      </div>
      <#include "template/common/actions.ftl">
      <#include "template/common/footer.ftl">
    </div>
    <@tailInfo.tail type="archives"/> 
  </body>
</html>