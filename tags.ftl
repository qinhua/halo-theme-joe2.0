<!DOCTYPE html>
<html lang="zh-CN">
<#import "common/header.ftl" as headInfo>
<@headInfo.head title="所有标签" type="tags"/>
<#import "common/tail.ftl" as tailInfo>
<body>
    <div id="Joe">
        <#include "common/navbar.ftl">
        <div class="joe_container joe_main_container">
            <div class="joe_main">
                <div class="joe_index">
                    <div class="joe_index__title">
                        <ul class="joe_index__title-title">
                            <li class="item" data-type="created">全部标签</li>
                            <li class="line"></li>
                        </ul>
                    </div>
                    <div class="joe_index__hot">
                        <ul class="joe_index__hot-list" style="padding-bottom: 10px;">
                            <@tagTag method="list">
                                <#list tags as tag>
                                <li class="item">
                                    <a class="link" href="${tag.fullPath!}" title="${tag.name!}">
                                        <figure class="inner">
                                            <span class="views">${tag.postCount!} ℃</span>
                                            <img width="100%" height="120" class="image lazyload" data-src="https://picsum.photos/id/1${tag_index}/175/90" src="https://cdn.jsdelivr.net/gh/qinhua/cdn_assets/img/lazyload.jpeg" data-src="https://unsplash.it/175/90" alt="${tag.name!}">
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
            <#include "common/aside.ftl">
        </div>
         <#include "common/footer.ftl">
    </div>
    <@tailInfo.tail type="tags"/> 
</body>
</html>