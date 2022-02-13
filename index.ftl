<!DOCTYPE html>
<html lang="zh-CN">
  <#import "template/common/header.ftl" as headInfo>
  <@headInfo.head title="首页" type="index"/>
  <#import "template/macro/tail.ftl" as tailInfo>
  <body>
    <div id="Joe">
      <#include "template/common/navbar.ftl">
      <div class="joe_container joe_main_container page-index${settings.enable_show_in_up?then(' animated showInUp','')}${(settings.aside_position=='left')?then(' revert','')}">
        <div class="joe_main">
          <div class="joe_index">
            <#if settings.enable_banner!true>
              <#import "template/macro/banner.ftl" as h_banner>
              <@h_banner.banner />
            </#if>
            <#if settings.enable_hot_category!true>
              <#import "template/macro/hot_category.ftl" as hp>
              <@hp.hot_category />
            </#if>
            <#import "template/macro/article.ftl" as h_article>
            <@h_article.article posts=posts />
          </div>
          <#if settings.enable_index_list_ajax==false>
            <#include "template/common/pager.ftl">
            <@pager method="index" postsData=posts display="${settings.max_pager_number!5}" />
            <#--  <#include "template/macro/empty.ftl">
            <@empty type="index" text="${settings.home_empty_text!'暂无文章数据'}" isAsync="true"/>  -->
          <#else>
            <div class="joe_load" loading="true">加载中...</div>
          </#if>
        </div>
        <#include "template/common/aside.ftl">
      </div>
      <#include "template/common/actions.ftl">
      <#include "template/common/footer.ftl">
    </div>
    <@tailInfo.tail type="index"/> 
  </body>
</html>