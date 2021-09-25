<!DOCTYPE html>
<html lang="zh-CN">
<#import "common/header.ftl" as headInfo>
<@headInfo.head title="文章归档" type="archive"/>
<#import "common/tail.ftl" as tailInfo>
<body>
    <div id="Joe">
    <#include "common/navbar.ftl">
    <div class="joe_header__mask"></div>
    <div class="joe_container joe_main_container">
            <div class="joe_main">
                <div class="joe_census__filing">
                    <div class="title">文章归档</div>
                    <div class="content">
                        <div id="filing"></div>
                        <@postTag method="archive" type="month">
                        <#list archives as archive>
                            <div class="item">
                                <div class="tail"></div>
                                <div class="head"></div>
                                <div class="wrapper">
                                    <div class="panel in">${archive.year?c} 年 ${archive.month?c} 月</div>
                                    <ol class="panel-body" style="display: block;">
                                    <#list archive.posts?sort_by("createTime")?reverse as post>
                                        <li>
                                            <a rel="noopener noreferrer" target="_blank" href="${post.fullPath!}">${post.createTime?string('MM-dd')}：${post.title!}</a>
                                        </li>
                                    </#list>
                                    </ol>
                                </div>
                            </div>    
                        </#list>
                        </@postTag>
                    </div>
                </div>
            </div>
        </div>
        <#include "common/footer.ftl">
    </div>
    <@tailInfo.tail type="archive"/> 
</body>
</html>