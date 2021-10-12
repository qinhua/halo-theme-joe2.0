<div class="joe_index__banner"> 
    <div class="swiper-container">  
        <div class="swiper-wrapper">
            <#if settings.banner1_img?? && settings.banner1_img != '' && settings.banner1_url?? && settings.banner1_url != ''>
            <div class="swiper-slide">
                <a class="item" href="${settings.banner1_url}" target="_blank" rel="noopener noreferrer nofollow">
                    <img width="100%" height="100%" class="thumbnail lazyload" src="https://cdn.jsdelivr.net/gh/qinhua/halo-theme-joe2.0@master/source/img/lazyload.jpeg" data-src="${settings.banner1_img}">
                    <div class="title">${settings.banner1_title!}</div>
                    <i class="joe-font joe-icon-zhifeiji"></i>
                </a>
            </div>
            </#if>
           <#if settings.banner2_img?? && settings.banner2_img != '' && settings.banner2_url?? && settings.banner2_url != ''>
            <div class="swiper-slide">
                <a class="item" href="${settings.banner2_url}" target="_blank" rel="noopener noreferrer nofollow">
                    <img width="100%" height="100%" class="thumbnail lazyload" src="https://cdn.jsdelivr.net/gh/qinhua/halo-theme-joe2.0@master/source/img/lazyload.jpeg" data-src="${settings.banner2_img}">
                    <div class="title">${settings.banner2_title!}</div>
                    <i class="joe-font joe-icon-zhifeiji"></i>
                </a>
            </div>
            </#if>
            <#if settings.banner3_img?? && settings.banner3_img != '' && settings.banner3_url?? && settings.banner3_url != ''>
            <div class="swiper-slide">
                <a class="item" href="${settings.banner3_url}" target="_blank" rel="noopener noreferrer nofollow">
                    <img width="100%" height="100%" class="thumbnail lazyload" src="https://cdn.jsdelivr.net/gh/qinhua/halo-theme-joe2.0@master/source/img/lazyload.jpeg" data-src="${settings.banner3_img}">
                    <div class="title">${settings.banner3_title!}</div>
                    <i class="joe-font joe-icon-zhifeiji"></i>
                </a>
            </div>
            </#if>
        </div>
        <div class="swiper-pagination"></div>
        <#if settings.enable_banner_handle!true>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </#if>
    </div>
</div>