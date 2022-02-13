<#macro pager method postsData slug="" keyword="" display="8">
  <@paginationTag method="${method}" page="${postsData.number!}" slug="${slug!}" keyword="${keyword!}" total="${postsData.totalPages!}" display="${display}">
    <#if postsData?? && postsData.totalPages gt 1>
      <#assign disabledPrev = pagination.hasPrev == false>
      <#assign disabledNext = pagination.hasNext == false || (pagination.rainbowPages?size == 0)>
      <ul class="joe_pagination">
        <li class="prev${disabledPrev?then(' disabled','')}"><a href="${pagination.prevPageFullPath!}"><i class="joe-font joe-icon-prev"></i></a></li>
        <#list pagination.rainbowPages as number>
          <#if number.isCurrent>
            <li class="active"><a href="${number.fullPath!}">${number.page!}</a></li>
          <#else>
            <li><a href="${number.fullPath!}">${number.page!}</a></li>
          </#if>
        </#list>
        <li class="next${disabledNext?then(' disabled','')}"><a href="${pagination.nextPageFullPath!}"><i class="joe-font joe-icon-next"></i></a></li>
      </ul>
    </#if>
  </@paginationTag>
</#macro>