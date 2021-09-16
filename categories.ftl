<!DOCTYPE html>
<html lang="zh-CN">

<#import "common/header.ftl" as headInfo>
<@headInfo.head title="文章分类" type="categorys"/>
<body>
    <div id="Joe">
        <#include "common/navbar.ftl">
        <div class="joe_container joe_main_container">
            <div class="joe_main">
                <div class="joe_index">
                    <div class="joe_index__title">
                        <ul class="joe_index__title-title">
                            <li class="item" data-type="created">全部分类</li>
                            <li class="line"></li>
                        </ul>
                    </div>
                    <div class="joe_index__hot">
                        <ul class="joe_index__hot-list">
                            <@categoryTag method="list">
                                <#list categories as category>
                                <#--  ${category.postCount}  -->
                                <li class="item">
                                    <a class="link" href="${category.fullPath!}" title="${category.name!}">
                                        <figure class="inner">
                                            <span class="views">${category.postCount!} ℃</span>
                                            <img width="100%" height="120" class="image lazyload" src="https://cdn.jsdelivr.net/gh/qinhua/cdn_assets/img/lazyload.jpeg" data-src="${category.thumbnail!}" alt="${category.name!}">
                                            <figcaption class="title">${category.name!}</figcaption>
                                        </figure>
                                    </a>
                                </li>
                                </#list>
                            </@categoryTag>
                        </ul>
                    </div>
                </div>
            </div>
            <#include "common/aside.ftl">
        </div>
    </div>
    <#include "common/footer.ftl">
    <#include "common/tail.ftl">
</body>
</html>