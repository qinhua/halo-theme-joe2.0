<div class="joe_index__banner">
  <#if settings.bannerData?? && settings.bannerData!=''>
    <div class="swiper-container">  
      <div class="swiper-wrapper">
        <#list settings.bannerData?split('=====') as banners>
          <#assign banner = banners?split('-|||-')>
          <div class="swiper-slide">
            <#assign cur_link = (banner[2]?? && banner[2]!='')?then(banner[2]?replace('\n',''),'')>
            <#assign clickable = cur_link!='' && cur_link!='#'>
            <a class="item" href="${clickable?then(cur_link,'javascript:;')}" ${clickable?then('target="_blank"','')} rel="noopener noreferrer nofollow">
              <img width="100%" height="100%" class="thumbnail lazyload" data-src="${banner[1]!}" src="${settings.banner_lazyload_img}" alt="${banner[0]!}">
              <#if settings.enable_banner_title==true && banner[0]?? && banner[0]!=''>
                <div class="title">${banner[0]}</div>
              </#if>
              <i class="joe-font joe-icon-zhifeiji"></i>
            </a>
          </div>
        </#list>
      </div>
      <#if settings.enable_banner_pagination!true>
        <div class="swiper-pagination"></div>
      </#if>
      <#if settings.enable_banner_handle==true && settings.enable_banner_switch_button==true>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
      </#if>
    </div>
  <#else>
    <div class="joe_index__banner-empty">
      <a href="https://github.com/qinhua/halo-theme-joe2.0#readme" target="_blank" rel="noopener noreferrer nofollow">
        <img width="100%" height="100%" class="thumbnail lazyload" data-src="${BASE_RES_URL+'/source/img/dp/welcome.webp'}" src="${settings.banner_lazyload_img}" alt="欢迎使用halo-theme-joe2.0">
      </a>
    </div>
  </#if>
</div>