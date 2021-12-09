<#if settings.post_ad_address?? && settings.post_ad_address != '' && settings.post_ad_image?? && settings.post_ad_image != ''>    
  <section class="joe_advert-large">
    <a target="_blank" rel="noopener noreferrer nofollow" href="${settings.post_ad_address}" title="广告">
      <img width="100%" src="${settings.post_ad_image}" alt="广告"/>
      <span class="icon">广告</span>
    </a>
  </section>
</#if>