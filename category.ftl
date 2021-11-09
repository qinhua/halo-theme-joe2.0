<!DOCTYPE html>
<html lang="zh-CN">
<#import "template/macro/header.ftl" as headInfo>
<@headInfo.head title="${category.name!}" type="category"/>
<#import "template/macro/tail.ftl" as tailInfo>
<body>
    <div id="Joe">
       <#include "template/common/navbar.ftl">
       <div class="joe_container joe_main_container page-category">
            <div class="joe_main">
                <div class="joe_archive">
                    <div class="joe_archive__title">
                        <div class="joe_archive__title-title">
                            <span><i class="joe-font joe-icon-feather joe_archive__title-icon"></i>以下是</span>
                            <span class="muted ellipsis">${category.name!}</span>
                            <span>相关的文章</span>
                        </div>
                    </div>
                    <#if posts.content?size &gt;0>
                      <#assign lazy_img=settings.lazyload_thumbnail!RES_BASE_URL+'/source/img/lazyload.gif'>
                      <ul class="joe_archive__list joe_list animated fadeIn">
                        <#list posts.content as post>
                          <li class="joe_list__item default">
                              <div class="line"></div>
                              <a href="${post.fullPath!}" class="thumbnail" title="${post.title!}" target="_blank" rel="noopener noreferrer">
                                  <#assign thumbnail=(post.thumbnail?? && post.thumbnail!='')?then(post.thumbnail, settings.post_thumbnail)>
                                  <img width="100%" height="100%" class="lazyload" data-src="${thumbnail!}" src="${lazy_img}" onerror="this.src='${settings.fallback_img!}'" alt="${post.title!}">
                                  <time datetime="${post.createTime?string('yyyy-MM-dd')}">${post.createTime?string('yyyy-MM-dd')}</time>
                                  <i class="joe-font joe-icon-picture"></i>
                              </a>
                              <div class="information">
                                  <a href="${post.fullPath!}" class="title" title="${post.title!}" target="_blank" rel="noopener noreferrer">${post.title!}</a>
                                  <a class="abstract" href="${post.fullPath!}" title="文章摘要" target="_blank" rel="noopener noreferrer">${post.summary!}</a>
                                  <div class="meta">
                                      <ul class="items">
                                        <li>${post.createTime?string('yyyy-MM-dd')}</li>
                                        <li>${post.visits!0} 阅读</li>
                                        <li>${post.commentCount!0} 评论</li>
                                        <li>${post.likes!0} 点赞</li>
                                      </ul>
                                  </div>
                              </div>
                          </li>
                        </#list>
                      </ul>
                    <#else>
                      <#include "template/macro/empty.ftl">
                      <@empty type="category" text="未找到相关文章..."/>
                    </#if>
                </div>
                <@paginationTag method="categoryPosts" slug="${category.slug!}" page="${posts.number}" total="${posts.totalPages}" display="10">
                    <#if (posts.totalPages == 0)>
                      <#--  <#include "template/macro/empty.ftl">
                      <@empty type="category" text="未找到相关文章..."/>  -->
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
                            <#if pagination.hasNext && (pagination.rainbowPages?size &gt;0)>
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
            <#--  <#include "template/common/aside.ftl">  -->
        </div>
        <#include "template/common/footer.ftl">
    </div>
    <@tailInfo.tail type="category"/> 
</body>

</html>