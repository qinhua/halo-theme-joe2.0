<!DOCTYPE html>
<html lang="zh-CN">
  <#import "template/common/header.ftl" as headInfo>
  <@headInfo.head title="文章分类" type="categorys"/>
  <#import "template/macro/tail.ftl" as tailInfo>
  <body>
    <div id="Joe">
      <#include "template/common/navbar.ftl">
      <div class="joe_container joe_main_container page-categories">
        <div class="joe_main">
          <div class="joe_index">
            <div class="joe_index__title">
              <ul class="joe_index__title-title pl-15">
                <li class="item" data-type="created">全部分类</li>
                <#--  <li class="line"></li>  -->
              </ul>
            </div>
            <div class="joe_index__hot categories">
              <@categoryTag method="list">
                <#if categories?size &gt; 0>
                  <#assign lazy_img=BASE_RES_URL+'/source/img/lazyload.gif'>
                  <ul class="joe_index__hot-list animated fadeIn">
                    <#list categories as category>
                      <li class="item">
                        <a class="link" href="${category.fullPath!}" title="${category.name!}">
                          <figure class="inner">
                            <span class="views">${category.postCount!} ℃</span>
                            <#assign thumbnail=(category.thumbnail?? && category.thumbnail!='')?then(category.thumbnail, 'https://picsum.photos/id/2${category_index}/175/90') >
                            <img width="100%" height="120" class="image lazyload" data-src="${thumbnail}" src="${lazy_img}" alt="${category.name!}">
                            <figcaption class="title">${category.name!}</figcaption>
                          </figure>
                        </a>
                      </li>
                    </#list>
                  </ul>
                <#else>
                  <#include "template/macro/empty.ftl">
                  <@empty type="categories" text="未找到相关文章..."/>
                </#if>
              </@categoryTag>
            </div>
          </div>
        </div>
        <#include "template/common/aside.ftl">
      </div>
      <#include "template/common/actions.ftl">
      <#include "template/common/footer.ftl">
    </div>
    <@tailInfo.tail type="categories"/> 
  </body>
</html>