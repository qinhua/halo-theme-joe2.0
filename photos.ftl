<!DOCTYPE html>
<html lang="zh-CN">
<#assign title=settings.photos_title!'我的图库'>
<#import "template/macro/header.ftl" as headInfo>
<@headInfo.head title="${title}" type="photo"/>
<#import "template/macro/tail.ftl" as tailInfo>
<body> 
    <div id="Joe"> 
    <#include "template/common/navbar.ftl"> 
    <div class="joe_container joe_main_container page-photos"> 
        <div class="joe_main">
            <div class="joe_photos__type"> 
                <div class="joe_photos__type-title"><i class="joe-font joe-icon-tupian"></i>&nbsp;${title}</div>
                <nav class="joe_photos__filter">
                  <ul>
                    <li class="active" data-filter="">
                      <a href="javascript:;">全部</a>
                    </li>
                    <@photoTag method="listTeams">
                      <#list teams as item>
                        <li data-filter="${item.team}">
                          <a href="javascript:;">${((item.team)?length>0)?then((item.team),'默认')}</a>
                        </li>
                      </#list>
                    </@photoTag>
                  </ul>
                </nav>
                <div class="joe_photos__layout-switch">
                  <i class="joe-font joe-icon-grid${(settings.photos_layout=='grid')?string(' active','')}" title="网格布局" data-type="grid"></i>
                  <i class="joe-font joe-icon-waterfall${(settings.photos_layout=='waterfall')?string(' active','')}" title="瀑布流布局" data-type="waterfall"></i>
                </div>
            </div>
            <#include "template/module/gallery.ftl">
            <#--  <@paginationTag method="photos" page="${photos.number}" total="${photos.totalPages}" display="3">
                <#if (photos.totalPages == 0)>
                    <#include "template/macro/empty.ftl">
                    <@empty type="photos" text="${settings.photos_empty_text!'暂无图片数据'}"/>
                <#elseif (photos.totalPages == 1)>
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
            </@paginationTag>                  -->
        </div>
   </div> 
   <#include "template/common/footer.ftl">
  </div>
  <@tailInfo.tail type="photos"/>  
 </body>
</html>