<!DOCTYPE html>
<html lang="zh-CN">
  <#assign title=settings.archive_title!'文章归档'>
  <#import "template/common/header.ftl" as headInfo>
  <@headInfo.head title="${title}" type="archives"/>
  <#import "template/macro/tail.ftl" as tailInfo>
  <body>
    <div id="Joe">
      <#include "template/common/navbar.ftl">
      <div class="joe_container joe_main_container page-archives">
        <div class="joe_main">
          <div class="joe_index joe_archives__filing">
            <div class="title">${title}</div>
            <div class="content">
              <#--  <div id="post-calendar" class="card-content">
                <canvas width="100%" height="300"></canvas>
              </div>  -->
              <#if settings.enable_archive_category!true>
                <div class="joe_archives__category${(settings.enable_archive_effect==true)?string(' animated fadeIn','')}">
                  <div class="joe_archives-title"><i class="joe-font joe-icon-fenlei"></i>分类</div>
                  <ul class="joe_category-list">
                    <@categoryTag method="list">
                      <#list categories as category>
                        <#if category.slug=='default' && category.name=='默认分类'>
                          <li class="item">
                            <a class="link" href="${category.fullPath!}" title="${category.name!}">${category.name!}</a>
                          </li>
                        </#if>
                      </#list>
                      <#list categories as category>
                        <#if category.slug!='default'>
                          <li class="item">
                            <a class="link" href="${category.fullPath!}" title="${category.name!}">${category.name!}</a>
                          </li>
                        </#if>
                      </#list>
                    </@categoryTag>
                  </ul>
                </div>
              </#if>
              <div class="joe_archives__timeline${(settings.enable_archive_effect==true)?string(' animated fadeIn','')}">
                <#assign metric='${settings.archive_timeline_metric!"month"}'>
                <div class="joe_archives-title"><i class="joe-font joe-icon-timeline"></i>时间轴<em>（${(metric=='year')?then('年','月')}）</em></div>
                  <ul class="joe_archives-timelist animated fadeIn">
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
                </div>  
              </div>
            </div>
          </div>
        </div>
      </div>
      <#include "template/common/actions.ftl">
      <#include "template/common/footer.ftl">
    </div>
    <@tailInfo.tail type="archives"/> 
  </body>
</html>