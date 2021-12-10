<#macro list_index>
  <#include "post_item.ftl">
  <ul class="joe_list">
    <#assign lazy_img=settings.lazyload_sthumbnail!LAZY_IMG>
    <#list posts.content as post>
      <@post_item post=post index=post_index type="index" />
    </#list>
  </ul>
</#macro>