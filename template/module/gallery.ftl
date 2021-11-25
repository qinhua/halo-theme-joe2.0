<#--  <#if settings.photos_layout == "grid">  -->
  <#include "photos_grid.ftl">
<#--  <#else>
  <#include "photos_waterfall.ftl">
</#if>  -->
<#include "../macro/loading.ftl">
<#include "../macro/empty.ftl">
<@loading type="photos" />
<@empty type="photos" text="该分类下暂无图片" isAsync="true" />