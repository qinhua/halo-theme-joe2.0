<div class="joe_index__article">
  <div class="joe_index__title">
      <ul class="joe_index__title-title">
          <li class="item" data-type="created">推荐文章</li>
          <li class="line"></li>
      </ul>
      <#if settings.qq_group??>
        <div class="joe_index__title-notice">
          <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
            <path d="M656.261 347.208a188.652 188.652 0 1 0 0 324.05v-324.05z" fill="#F4CA1C"></path>
            <path d="M668.35 118.881a73.35 73.35 0 0 0-71.169-4.06l-310.01 148.68a4.608 4.608 0 0 1-2.013.46h-155.11a73.728 73.728 0 0 0-73.728 73.636v349.64a73.728 73.728 0 0 0 73.728 73.636h156.554a4.68 4.68 0 0 1 1.94.43l309.592 143.196a73.702 73.702 0 0 0 104.668-66.82V181.206a73.216 73.216 0 0 0-34.453-62.326zM125.403 687.237v-349.64a4.608 4.608 0 0 1 4.608-4.608h122.035v358.882H130.048a4.608 4.608 0 0 1-4.644-4.634zm508.319 150.441a4.608 4.608 0 0 1-6.564 4.193L321.132 700.32V323.773l305.97-146.723a4.608 4.608 0 0 1 6.62 4.157v656.471zM938.26 478.72H788.01a34.509 34.509 0 1 0 0 69.018H938.26a34.509 34.509 0 1 0 0-69.018zM810.01 360.96a34.447 34.447 0 0 0 24.417-10.102l106.245-106.122a34.524 34.524 0 0 0-48.84-48.809L785.587 302.08a34.509 34.509 0 0 0 24.423 58.88zm24.417 314.609a34.524 34.524 0 1 0-48.84 48.814L891.832 830.52a34.524 34.524 0 0 0 48.84-48.809z" fill="#595BB3"></path>
          </svg>
          <a href="${settings.qq_group}" target="_blank" rel="noopener noreferrer nofollow">欢迎加入QQ交流群</a>
        </div>
      </#if>
  </div>
  <div class="joe_index__list" data-wow="on">
      <ul class="joe_list">
      <#list posts.content as post>
          <li class="joe_list__item wow default animated fadeInUp">
              <div class="line"></div>
                  <a href="${post.fullPath}" class="thumbnail" title="${post.title}" target="_blank" rel="noopener noreferrer">
                      <#if post.thumbnail!=''>
                        <#assign thumbnail=post.thumbnail>
                      <#else>
                        <#assign thumbnail=settings.passage_thumbnail>
                      </#if>
                      <img width="100%" height="100%" class="lazyload" src="${settings.lazyload_thumbnail!'https://cdn.jsdelivr.net/gh/qinhua/halo-theme-joe2.0@master/source/img/lazyload.jpeg'}" data-src="${thumbnail!}" onerror="this.src='${settings.fallback_img!}'" alt="${post.title}">
                      <time datetime="${post.createTime?string('yyyy-MM-dd')}">${post.createTime?string('yyyy-MM-dd')}</time>
                      <i class="joe-font joe-icon-picture"></i>
                  </a>
                  <div class="information">
                      <a href="${post.fullPath}" class="title" title="${post.title}" target="_blank" rel="noopener noreferrer">
                          <#if post.topped==true>
                              <span class="badge" style="display: inline-block">置顶</span>
                          </#if>${post.title}
                      </a>
                  <a class="abstract" href="${post.fullPath}" title="文章摘要" target="_blank" rel="noopener noreferrer">${post.summary!}</a>
                  <div class="meta">
                      <ul class="items">
                          <li>${post.createTime?string('yyyy-MM-dd')}</li>
                          <li>${post.visits!0} 阅读</li>
                          <li>${post.commentCount!0} 评论</li>
                          <li>${post.likes!0} 点赞</li>
                      </ul>
                      <#list post.categories as pcate>
                        <#if pcate_index==0>
                          <div class="last" style="display: flex">
                              <svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="15" height="15"><path d="M512.2 564.743a76.818 76.818 0 0 1-30.973-6.508L108.224 393.877c-26.105-11.508-42.56-35.755-42.927-63.272-.384-27.44 15.356-52.053 41.042-64.232l373.004-176.74c20.591-9.737 45.16-9.755 65.75.017L917.68 266.39c25.668 12.188 41.39 36.792 41.024 64.231-.384 27.5-16.821 51.73-42.908 63.237l-372.57 164.377a77.18 77.18 0 0 1-31.025 6.508zM139.843 329.592l370.213 163.241c1.291.56 3.018.567 4.345-.009l369.758-163.128-369.706-175.464v-.01c-1.326-.628-3.158-.636-4.502 0l-370.108 175.37zm748.015 1.858h.175-.175zM512.376 941.674c-10.348 0-20.8-2.32-30.537-6.997L121.05 778.624c-18.113-7.834-26.454-28.87-18.62-46.983 7.835-18.112 28.862-26.488 46.993-18.61l362.08 156.629 345.26-156.366c17.939-8.166 39.14-.253 47.324 17.746 8.166 17.964.227 39.157-17.729 47.324l-344.51 156.61c-9.196 4.449-19.281 6.7-29.471 6.7z" fill="var(--minor)"></path><path d="M871.563 515.449L511.81 671.775 152.358 515.787v73.578a34.248 34.248 0 0 0 20.76 31.48l301.518 129.19c11.806 5.703 24.499 8.546 37.175 8.546s25.367-2.843 37.174-8.546L850.82 620.534a34.248 34.248 0 0 0 20.744-31.474V515.45z" fill="#ff6a18"></path></svg>
                              <a class="link" target="_blank" rel="noopener noreferrer" href="${pcate.fullPath}">${pcate.name}</a>
                          </div>
                        </#if>
                      </#list>
                  </div>
              </div>
          </li> 
      </#list>
      </ul>
  </div>
</div>