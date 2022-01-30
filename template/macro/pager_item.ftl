<#macro pager_item postsData pagination> 
  <#if postsData?? && postsData.totalPages gt 1>
    <ul class="joe_pagination">
      <#if pagination.hasPrev>
        <li class="prev"><a href="${pagination.prevPageFullPath!}"><i class="joe-font joe-icon-prev"></i></a></li>
      </#if>
      <#list pagination.rainbowPages as number>
        <#if number.isCurrent>
          <li class="active"><a href="${number.fullPath!}">${number.page!}</a></li>
        <#else>
          <li><a href="${number.fullPath!}">${number.page!}</a></li>
        </#if>
      </#list>
      <#if pagination.hasNext && (pagination.rainbowPages?size gt 0)>
        <li class="next"><a href="${pagination.nextPageFullPath!}"><i class="joe-font joe-icon-next"></i></a></li>
      </#if>
    </ul>
  </#if>
</#macro>
