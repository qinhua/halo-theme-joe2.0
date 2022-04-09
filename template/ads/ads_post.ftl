<#macro ads_post type='top'>
  <#if settings.enable_clean_mode != true && post.status != 'DRAFT'>
    <#if (type=='top' && settings.enable_post_ads_top==true) || (type=='bottom' && settings.enable_post_ads_bottom == true)>
      <#assign cover = (type=='top')?then(settings.post_ad_cover_top, settings.post_ad_cover_bottom)>
      <#assign link = (type=='top')?then(settings.post_aside_ad_link_top, settings.post_aside_ad_link_bottom)>
      <#if cover != '' && link != ''>
        <section class="joe_advert-large">
          <a target="_blank" rel="noopener noreferrer nofollow" href="${link}" title="广告">
            <img class="omit" width="100%" src="${cover}" onerror="Joe.errorImg(this)" alt="广告"/>
            <span class="icon">广告</span>
          </a>
        </section>
      </#if>
    </#if>
  </#if>
</#macro>