<#macro post_num type id suffix="">
  <#assign count=0>
  <#if type == 'category'>
    <@postTag method="listByCategoryId" categoryId="${id}">
      <#if posts?size gt 0>
        <#list posts as post>
            <#if post.status=='PUBLISHED'>
              <#assign count++>
            </#if>
        </#list>
      </#if>
    </@postTag>
  </#if>
  <#if type=='tag'>
    <@postTag method="listByTagId" tagId="${id}">
      <#if posts?size gt 0>
        <#list posts as post>
          <#if post.status=='PUBLISHED'>
            <#assign count++>
          </#if>
        </#list>
      </#if>
    </@postTag>
  </#if>
  <em class="post-nums">${count}${suffix!}</em>
</#macro>