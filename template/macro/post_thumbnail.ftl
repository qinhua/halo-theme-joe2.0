<#macro post_thumbnail post>
  <#assign thumbnail = post.thumbnail!?trim>
  <#assign random_img_ok = settings.enable_random_img_api==true && settings.random_img_api?trim!=''>
  <#assign default_img_url = (random_img_ok == true)?then(settings.random_img_api + ((settings.random_img_api?index_of('?') != -1)?then('&', '?')) + '_r=' + post.id, settings.post_thumbnail)>
  <#if thumbnail == ''>
    <#if post.categories?size gt 0>
      <#assign thumbnail = post.categories[0].thumbnail!?trim>
      <#if thumbnail == ''>
        <#if post.tags?size gt 0>
          <#assign thumbnail = post.tags[0].thumbnail!?trim>
          <#if thumbnail == ''>
            <#assign thumbnail = default_img_url>
          </#if>
        <#else>
          <#assign thumbnail = default_img_url>
        </#if>
      </#if>
    <#else>
      <#if post.tags?size gt 0>
        <#assign thumbnail = post.tags[0].thumbnail!?trim>
        <#if thumbnail == ''>
          <#assign thumbnail = default_img_url>
        </#if>
      <#else>
        <#assign thumbnail = default_img_url>
      </#if>
    </#if>
  </#if>
</#macro>