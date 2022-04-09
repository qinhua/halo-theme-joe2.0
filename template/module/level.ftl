
<#if settings.show_level!true>
  <@postTag method="count">
    <#if count == 0><#assign level=0></#if>
    <#if count gte 1 && count lt 20><#assign level=1></#if>
    <#if count gte 20 && count lt 50><#assign level=2></#if>
    <#if count gte 50 && count lt 100><#assign level=3></#if>
    <#if count gte 100 && count lt 300><#assign level=4></#if>
    <#if count gte 300 && count lt 500><#assign level=5></#if>
    <#if count gte 500><#assign level=6></#if>
  </@postTag>
  <img class="level" src="${BASE_RES_URL!}/source/svg/level_${level}.svg" onerror="Joe.errorImg(this)" alt="博主等级"/>
</#if>