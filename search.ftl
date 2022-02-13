<!DOCTYPE html>
<html lang="zh-CN">
  <#import "template/common/header.ftl" as headInfo>
  <@headInfo.head title="${keyword!}的搜索结果" type="search"/>
  <#import "template/macro/tail.ftl" as tailInfo>
  <body>
    <div id="Joe">
      <#include "template/common/navbar.ftl">
      <div class="joe_container joe_main_container page-search">
        <div class="joe_main">
          <div class="joe_archive">
            <div class="joe_archive__title">
              <div class="joe_archive__title-title">
                  <i class="joe-font joe-icon-search joe_archive__title-icon"></i>
                  <#if keyword?? && keyword?trim!=''>
                    搜索到<span class="muted ellipsis">${posts.content?size}</span>条与<span class="muted ellipsis">${keyword}</span>
                    <span>相关的文章：</span>
                  <#else>
                    <span>相关搜索结果如下：</span>
                  </#if>
              </div>
            </div>
            <#if posts.content?size gt 0>
              <#include "template/macro/post_item.ftl">
              <ul class="joe_archive__list joe_list" data-wow="off">
                <#list posts.content as post>
                  <@post_item post=post index=post_index type="search"/>
                </#list>
              </ul>
              <#include "template/common/pager.ftl">
              <@pager method="search" postsData=posts keyword="${keyword}" display="${settings.max_pager_number!5}" />
            <#else>
              <#include "template/macro/empty.ftl">
              <@empty type="search" text="未找到相关文章..."/>
            </#if>
          </div>
        </div>
      </div>
      <#include "template/common/actions.ftl">
      <#include "template/common/footer.ftl">
    </div>
    <@tailInfo.tail type="search"/> 
</body>
</html>