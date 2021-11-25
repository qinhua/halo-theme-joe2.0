<#macro list_index>
  <#include "post_item.ftl">
  <ul class="joe_list">
    <#assign lazy_img=settings.lazyload_thumbnail!BASE_RES_URL+'/source/img/lazyload.gif'>
    <#list posts.content as post>
      <@post_item post=post index=post_index type="index" />
    </#list>
  </ul>
</#macro>