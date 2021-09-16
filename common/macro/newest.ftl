
<#macro newest>
<section class="joe_aside__item newest">
    <div class="joe_aside__item-title">
        <i class="joe-font joe-icon-huo"></i>
        <span class="text">最新文章</span>
    </div>
    <div class="joe_aside__item-contain">
        <ul class="list">       
         <@postTag method="latest" top="${settings.newest_page_size!5}">
            <#list posts?sort_by("editTime")?reverse as post>
            <li class="item">
                <a class="link" href="${post.fullPath!}" title="${post.title!}">${post.title!}</a>
                <i class="joe-font joe-icon-link"></i>
            </li>
            </#list>
        </@postTag>
        </ul>
    </div>
</section>
</#macro>