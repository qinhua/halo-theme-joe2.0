<#macro hot_category>
<div class="joe_index__hot">
        <div class="joe_index__title">
            <ul class="joe_index__title-title">
                <li class="item" data-type="created">精品分类</li>
                <li class="line"></li>
            </ul>
        <div class="joe_index__title-notice">
				<a href="${blog_url}/categories" target="_blank" rel="noopener noreferrer nofollow"><i class="joe-font joe-icon-application"></i>全部分类</a>
			</div>
        </div>
        <ul class="joe_index__hot-list hotlist">
            <@categoryTag method="list">
            <#assign lazyimg=RES_BASE_URL+'/source/img/lazyload.gif'>
            <#list categories?sort_by("postCount")?reverse as category>
                <#if category_index < 4>
                <li class="item animated fadeIn">
                    <a class="link" href="${category.fullPath!}" title="${category.name!}">
                        <figure class="inner">
                            <span class="views">${category.postCount!} ℃</span>
                            <#escape x as x!"">
                              <#assign cover=settings['hot_cover'+(category_index+1)]>
                            </#escape>
                            <#if cover?? && cover!=''>
                              <img width="100%" height="120" class="image lazyload" data-src="${cover}" src="${lazyimg}" onerror="this.src='${settings.fallback_img!}'" alt="${category.name!}">
                            <#else>
                              <img width="100%" height="120" class="image lazyload" data-src="https://picsum.photos/id/100${category_index}/175/90" src="${lazyimg}" onerror="this.src='${settings.fallback_img!}'" alt="${category.name!}">
                            </#if>
                            <figcaption class="title">${category.name!}</figcaption>
                        </figure>
                    </a>
                </li>
                </#if>
            </#list>
            </@categoryTag>
        </ul>
</div>
</#macro>
