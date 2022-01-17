
<#macro relate postData>
  <#if postData.categories?size gt 0>
    <#assign type = 'category'>
    <#assign id = postData.categories[0].id!>
  <#elseif postData.tags?size gt 0>
    <#assign type = 'tag'>
    <#assign id = postData.tags[0].id!>
  </#if>
  <#if type??>
    <#assign curPostId = postData.id>
    <#import "relate_item.ftl" as rm>
    <#if type = 'category'>
      <@postTag method="listByCategoryId" categoryId="${id}">
        <@rm.relate_item posts=posts curPostId=curPostId />
      </@postTag>
    <#else>
      <@postTag method="listByTagId" tagId="${id}">
        <@rm.relate_item posts=posts curPostId=curPostId />
      </@postTag>
    </#if>
  </#if>
</#macro>