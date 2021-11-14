<#if settings.post_ad_address?? && settings.post_ad_address != '' && settings.post_ad_image?? && settings.post_ad_image != ''>    
  <section class="joe_advert-large">
    <a target="_blank" rel="noopener noreferrer nofollow" href="${settings.post_ad_address}" title="广告">
      <img class="lazyload" width="100%" data-src="${settings.post_ad_image}" src="${BASE_RES_URL!}/source/img/lazyload.gif" alt="广告"/>
      <span class="icon">广告</span>
    </a>
  </section>
</#if>