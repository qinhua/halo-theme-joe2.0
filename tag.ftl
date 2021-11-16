<!DOCTYPE html>
<html lang="zh-CN">
  <#import "template/common/header.ftl" as headInfo>
  <@headInfo.head title="${tag.name!}" type="tag"/>
  <#import "template/macro/tail.ftl" as tailInfo>
  <body>
    <div id="Joe">
      <#include "template/common/navbar.ftl">
      <div class="joe_container joe_main_container page-tag">
        <div class="joe_main">
          <div class="joe_archive">
            <div class="joe_archive__title">
              <div class="joe_archive__title-title">
                <i class="joe-font joe-icon-feather joe_archive__title-icon"></i>以下是
                <span class="muted ellipsis">${tag.name!}</span>
                <span>相关的文章</span>
              </div>
            </div>
            <#if posts.content?size &gt;0>
              <#assign lazy_img=settings.lazyload_thumbnail!BASE_RES_URL+'/source/img/lazyload.gif'>
              <ul class="joe_archive__list joe_list" data-wow="off">
                <#list posts.content as post>
                  <li class="joe_list__item wow default">
                    <div class="line"></div>
                    <a href="${post.fullPath!}" class="thumbnail" title="${post.title!}" target="_blank" rel="noopener noreferrer">
                      <#assign thumbnail=(post.thumbnail?? && post.thumbnail!='')?then(post.thumbnail,settings.post_thumbnail)>
                      <img width="100%" height="100%" class="lazyload" data-src="${thumbnail!}" src="${lazy_img}" onerror="this.src='${settings.fallback_img!}'" alt="${post.title!}">
                      <time datetime="${post.createTime?string('yyyy-MM-dd')}">${post.createTime?string('yyyy-MM-dd')}</time>
                      <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                        <path d="M903.93 107.306H115.787c-51.213 0-93.204 42.505-93.204 93.72V825.29c0 51.724 41.99 93.717 93.717 93.717h788.144c51.72 0 93.717-41.993 93.717-93.717V201.025c-.512-51.214-43.017-93.719-94.23-93.719zm-788.144 64.527h788.657c16.385 0 29.704 13.316 29.704 29.704v390.229L760.54 402.285c-12.805-13.828-30.217-21.508-48.14-19.971-17.924 1.02-34.821 10.754-46.602 26.114l-172.582 239.16-87.06-85.52c-12.29-11.783-27.654-17.924-44.039-17.924-16.39.508-31.755 7.676-43.53 20.48L86.595 821.705V202.05c-1.025-17.416 12.804-30.73 29.191-30.217zm788.145 683.674H141.906l222.255-245.82 87.06 86.037c12.8 12.807 30.212 18.95 47.115 17.417 17.41-1.538 33.797-11.266 45.063-26.118l172.584-238.647 216.111 236.088 2.051-1.54V825.8c.509 16.39-13.315 29.706-30.214 29.706zm0 0"/>
                        <path d="M318.072 509.827c79.89 0 144.417-65.037 144.417-144.416 0-79.378-64.527-144.925-144.417-144.925-79.891 0-144.416 64.527-144.416 144.412 0 79.892 64.525 144.93 144.416 144.93zm0-225.327c44.553 0 80.912 36.362 80.912 80.91 0 44.557-35.847 81.43-80.912 81.43-45.068 0-80.916-36.36-80.916-80.915 0-44.556 36.872-81.425 80.916-81.425zm0 0"/>
                      </svg>
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
              <@empty type="tag" text="未找到相关文章..."/>
            </#if>
          </div>
          <@paginationTag method="tagPosts" slug="${tag.slug!}" page="${posts.number}" total="${posts.totalPages}" display="10">
            <#if (posts.totalPages == 0)>
              <#--  <#include "template/macro/empty.ftl">
              <@empty type="tag" text="未找到相关文章..."/>  -->
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
      <#include "template/common/actions.ftl">
      <#include "template/common/footer.ftl">
    </div>
    <@tailInfo.tail type="tag"/> 
  </body>
</html>