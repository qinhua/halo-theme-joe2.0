<!DOCTYPE html>
<html lang="zh-CN">
  <#import "template/common/header.ftl" as headInfo>
  <@headInfo.head title="所有标签" type="tags"/>
  <#import "template/macro/tail.ftl" as tailInfo>
  <body>
    <div id="Joe">
      <#include "template/common/navbar.ftl">
      <div class="joe_container joe_main_container page-tags">
        <div class="joe_main">
          <div class="joe_index">
            <div class="joe_index__title">
              <ul class="joe_index__title-title pl-15">
                <li class="item" data-type="created">全部标签</li>
                <#--  <li class="line"></li>  -->
              </ul>
            </div>
            <div class="joe_index__hot">
              <#assign lazy_img=BASE_RES_URL+'/source/img/lazyload.gif'>
              <#assign random_img_ok=settings.enable_random_img_api==true && settings.random_img_api?trim!=''>
              <ul class="joe_index__hot-list animated fadeIn" style="padding-bottom: 10px;">
                <@tagTag method="list">
                  <#list tags as tag>
                    <li class="item">
                      <a class="link" href="${tag.fullPath!}" title="${tag.name!}">
                        <figure class="inner">
                          <span class="views">${tag.postCount!} ℃</span>
                          <#assign thumbnail=(tag.thumbnail?? && tag.thumbnail!='')?then(tag.thumbnail,(random_img_ok==true)?then(settings.random_img_api + ((settings.random_img_api?index_of('?')!=-1)?then('&','?')) + '_r=' + tag.id,'https://picsum.photos/id/1${tag_index}/175/90')) >
                          <img width="100%" height="120" class="image lazyload" data-src="${thumbnail}" src="${lazy_img}" onerror="this.src='${settings.fallback_thumbnail!}'" alt="${tag.name!}">
                          <figcaption class="title">${tag.name!}</figcaption>
                        </figure>
                      </a>
                    </li>
                  </#list>
                </@tagTag>
              </ul>
            </div>
          </div>
        </div>
        <#include "template/common/aside.ftl">
      </div>
      <#include "template/common/actions.ftl">
      <#include "template/common/footer.ftl">
    </div>
    <@tailInfo.tail type="tags"/> 
  </body>
</html>