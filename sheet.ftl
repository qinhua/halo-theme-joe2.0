<!DOCTYPE html>
<html lang="zh-CN">
<#import "common/header.ftl" as headInfo>
<@headInfo.head title="${sheet.title}" type="sheet"/>
<body>
    <div id="Joe">
        <#include "common/navbar.ftl">
        <div class="joe_container joe_main_container page-sheet">
            <div class="joe_main">
                <div class="joe_detail">
                    <h1 class="joe_detail__title">${sheet.title}</h1>
                    <div class="joe_detail__count">
                        <div class="joe_detail__count-information">
                            <img width="35" height="35" class="avatar lazyload" src="${settings.lazyload_avatar!}" data-src="${user.avatar!}" alt="${user.nickname!}">
                            <div class="meta">
                                <div class="author">
                                    <a class="link" href="${blog_url}/s/about" title="${user.nickname!}">${user.nickname!}</a>
                                </div>
                                <div class="item">
                                    <span class="text">${sheet.createTime?string('yyyy-MM-dd')}</span>
                                    <span class="line">/</span>
                                    <span class="text">${sheet.commentCount} 评论</span>
                                    <span class="line">/</span>
                                    <span class="text" >${sheet.visits} 阅读</span>    
                                    <span class="line">/</span>
                                    <span class="text" >${sheet.wordCount!0} 字</span>
                                    <#if settings.check_baidu_collect>
                                      <span class="line">/</span>
                                      <span class="text" id="joe_baidu_record">正在检测是否收录...</span>
                                    </#if>
                                </div>
                            </div>
                        </div>
                        <time class="joe_detail__count-created" datetime="${sheet.createTime?string('MM/dd')}">${sheet.createTime?string('MM/dd')}</time>
                    </div>
                    <article class="joe_detail__article${settings.enable_code_line_number?string(' line-numbers', '')}">
                        ${sheet.formatContent!}
                    </article>
                    <#--  <#import "common/post_copyright.ftl" as pc>  -->
                    <#--  <@pc.post_copyright post_url="${sheet.fullPath}"/>  -->
                </div>
                <div class="joe_comment">
                    <#include "common/comment.ftl">
                    <@comment target=sheet type="sheet"/>
                </div>
            </div>
            <#include "common/aside.ftl">
        </div>
        <#include "common/footer.ftl">
    </div>
    <#include "common/tail.ftl">
</body>
</html>