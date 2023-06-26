<#macro ads_post type='top'>
  <#if settings.enable_clean_mode != true && post.status != 'DRAFT'>
    <#if (type=='top' && settings.enable_post_ads_top==true) || (type=='bottom' && settings.enable_post_ads_bottom == true)>
      <#assign cover = (type=='top')?then(settings.post_ad_cover_top, settings.post_ad_cover_bottom)>
      <#if cover != ''>
        <section class="joe_advert-large">
          ${cover}
        </section>
      </#if>
    </#if>
  </#if>
</#macro>