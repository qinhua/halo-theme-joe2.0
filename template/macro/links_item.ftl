<#macro links_item links>
  <#if links?size gt 0>
    <#assign nextRandom = .now?string["HHmmssSSS"]?number>
    <ul class="joe_detail__friends">
      <#assign final_links = settings.links_type?starts_with('random-')?then(links, links?sort_by('priority'))>
      <#list final_links as link>
        <li class="joe_detail__friends-item">
          <a class="contain" href="${link.url!}" target="_blank" style="background:${colors[nextRandom % colors?size]}" rel="noopener noreferrer">
            <span class="title">${link.name!}</span>
            <div class="content">
              <div class="desc" title="${link.description!}">${(link.description?? && link.description?trim!='')?then(link.description,'这位博主啥也没说')}</div>
              <#assign logo=(link.logo?? && link.logo!='')?then(link.logo,logo_default)>
              <img width="40" height="40" class="avatar lazyload" data-src="${logo!}" src="${BASE_RES_URL+'/source/svg/spinner-preloader.svg'}" onerror="Joe.errorImg(this)" alt="${link.name!}">
            </div>
          </a>
        </li>
        <#assign nextRandom = nextRandom * 10 % 38>
      </#list>           
    </ul>
  <#else>
    <div class="joe_nodata">${settings.links_empty_text!}</div>
  </#if>
</#macro>