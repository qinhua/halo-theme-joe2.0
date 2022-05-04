<#if settings.aside_ad_link?? && settings.aside_ad_link != '' && settings.aside_ad_cover?? && settings.aside_ad_cover != ''>    
  <section class="joe_aside__item advert">
    <a class="joe_advert" target="_blank" rel="noopener noreferrer nofollow" href="${settings.aside_ad_link}" title="广告">
      <img class="omit lazyload" width="100%" data-src="${settings.aside_ad_cover}" src="${LAZY_IMG}" onerror="Joe.errorImg(this)" alt="广告"/>
      <span class="icon">广告</span>
    </a>
  </section>
</#if>