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
                  <i class="joe-font joe-icon-feather joe_archive__title-icon"></i>
                  <#if keyword?? && keyword?trim!=''>
                    搜索到<span class="muted ellipsis">${posts.content?size}</span>条与<span class="muted ellipsis">${keyword}</span>
                    <span>相关的文章：</span>
                  <#else>
                    <span>相关搜索结果如下：</span>
                  </#if>
              </div>
            </div>
            <#if posts.content?size &gt; 0>
              <#include "template/macro/post_item.ftl">
              <ul class="joe_archive__list joe_list" data-wow="off">
                <#list posts.content as post>
                  <@post_item post=post type="search"/>
                </#list>
              </ul>
            <#else>
              <#include "template/macro/empty.ftl">
              <@empty type="search" text="未找到相关文章..."/>
            </#if>
          </div>
          <@paginationTag method="search" page="${posts.number}" total="${posts.totalPages}" keyword="${keyword}" display="3">
            <#if (posts.totalPages == 0)>
              <#--  <#include "template/macro/empty.ftl">
              <@empty type="search" text="未找到相关文章..."/>  -->
            <#elseif (posts.totalPages == 1)>
            <#else>
              <ul class="joe_pagination">
                <#if pagination.hasPrev>
                  <li class="prev">
                    <a href="${pagination.prevPageFullPath!}">
                      <i class="joe-font joe-icon-prev"></i>
                    </a>
                  </li>
                </#if>
                <#list pagination.rainbowPages as number>
                  <#if number.isCurrent>
                    <li class="active">
                      <a href="${number.fullPath!}">${number.page!}</a>
                    </li>
                  <#else>
                    <li>
                      <a href="${number.fullPath!}">${number.page!}</a>
                    </li>
                  </#if>
                </#list>
                <#if pagination.hasNext && (pagination.rainbowPages?size &gt; 0)>
                  <li class="next">
                    <a href="${pagination.nextPageFullPath!}">
                      <i class="joe-font joe-icon-next"></i>
                    </a>
                  </li>
                </#if>
              </ul>
            </#if>    
          </@paginationTag> 
        </div>
      </div>
      <#include "template/common/actions.ftl">
      <#include "template/common/footer.ftl">
    </div>
    <@tailInfo.tail type="search"/> 
</body>
</html>