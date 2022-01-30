<ul class="aside_operations">
  <#assign enable_like = (metas?? && metas.enable_like?? && metas.enable_like?trim!='')?then(metas.enable_like?trim,'true')>
  <#if enable_like=='true' && settings.enable_like==true && post.status!='DRAFT'>
    <#import "favorite.ftl" as nsp>
    <@nsp.favorite post=post type="aside" />
  </#if>
  <#assign enable_comment = (metas?? && metas.enable_comment?? && metas.enable_comment?trim!='')?then(metas.enable_comment?trim,'true')>
  <#if settings.enable_clean_mode!=true && settings.enable_comment==true && post.status!='DRAFT'>
    <li class="post-operate-comment"><i class="joe-font joe-icon-message"></i><#if post.commentCount gt 0><span class="visible">${post.commentCount!}</span></#if></li>
  </#if>
  <#assign post_url = (post.fullPath?starts_with('http'))?then(post.fullPath, blog_url + post.fullPath)>
  <#assign enable_share = (metas?? && metas.enable_share?? && metas.enable_share?trim!='')?then(metas.enable_share?trim,'true')>
  <#if enable_share=='true' && settings.enable_share==true && post.status!='DRAFT'>
    <li class="post-operate-share">
      <i class="joe-font joe-icon-huifu"></i>
      <div class="share-icon-list">
        <#if settings.enable_share_weixin>
          <a id="share_to_weixin" href="javascript:;" title="分享到微信">
            <svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="26" height="26">
              <path d="M334.848 334.336a33.792 33.792 0 0 0-36.352 30.72 33.792 33.792 0 0 0 36.352 30.72 28.672 28.672 0 0 0 30.208-30.72 28.672 28.672 0 0 0-30.208-30.72zM581.12 512a24.576 24.576 0 0 0 0 51.2 27.648 27.648 0 0 0 30.208-24.576 27.648 27.648 0 0 0-30.208-26.624zM502.784 395.776a28.672 28.672 0 0 0 30.208-30.72 28.672 28.672 0 0 0-30.208-30.72 33.792 33.792 0 0 0-35.84 30.72 33.792 33.792 0 0 0 35.84 30.72zM713.216 512a24.576 24.576 0 0 0 0 51.2 27.648 27.648 0 0 0 30.208-24.576 27.648 27.648 0 0 0-30.208-26.624z" fill="#3db214"></path>
              <path d="M512 0a512 512 0 1 0 512 512A512 512 0 0 0 512 0zM412.672 646.656a403.456 403.456 0 0 1-83.968-12.288l-83.968 43.008 24.064-73.728a201.216 201.216 0 0 1-96.256-165.376c0-116.224 108.032-207.872 240.128-207.872a240.128 240.128 0 0 1 242.688 172.032h-23.04a198.144 198.144 0 0 0-204.8 193.536 185.344 185.344 0 0 0 7.168 51.2zM768 732.672l17.92 60.928-66.048-36.864a296.96 296.96 0 0 1-72.192 12.288 191.488 191.488 0 0 1-204.8-177.664 191.488 191.488 0 0 1 204.8-177.664c108.032 0 204.8 79.872 204.8 177.664A185.856 185.856 0 0 1 768 732.672z" fill="#3db214"></path>
            </svg>
            <div class="qrcode_wrapper animated bounceIn">
              <div class="qrcode_wx"></div>
              <p>微信扫一扫</p>
            </div>
          </a>
        </#if>
        <#if settings.enable_share_weibo>
          <a href="http://service.weibo.com/share/share.php?sharesource=weibo&title=分享：${post.title!}，原文链接：${post_url}&pic=${post.thumbnail!}" target="_blank" rel="noopener noreferrer" title="分享到新浪微博">
            <svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="30" height="30">
              <path d="M480.8 457.76a271.04 271.04 0 0 0-37.28 2.72c-96 13.44-166.72 75.04-157.92 137.44s93.6 101.92 189.6 88.48 166.72-75.04 157.92-137.44c-7.68-54.08-73.12-91.04-152.32-91.2zm-23.36 211.52a122.08 122.08 0 0 1-24 2.4c-48 0-88-27.52-96-68.32-9.28-48 29.44-95.2 86.56-106.24s110.88 18.4 120 66.08-29.44 95.04-86.56 106.08z" fill="#F56467" />
              <path d="M512 73.28A438.72 438.72 0 1 0 950.72 512 438.72 438.72 0 0 0 512 73.28zm-43.84 666.88c-150.24 0-272-78.56-272-176S378.56 314.72 448 314.72c29.28 0 86.56 21.76 46.4 90.88a246.24 246.24 0 0 0 34.08-10.08c32-9.12 76.96-18.24 107.68 0 51.04 29.6 0 77.12 0 82.4s102.4 5.28 102.4 87.2c.32 96.48-120.16 175.04-270.4 175.04zm213.76-358.88a56 56 0 0 0-47.2-16 16.96 16.96 0 0 1-17.28-14.4 12.16 12.16 0 0 0 0 2.4v-4.8a12.16 12.16 0 0 0 0 2.4 20.48 20.48 0 0 1 17.28-17.28 77.28 77.28 0 0 1 68.32 18.56c32 28.48 18.72 75.68 18.72 75.68a21.28 21.28 0 0 1-20.48 17.28h-1.76a12.48 12.48 0 0 1-12.8-16.8 49.44 49.44 0 0 0-4.8-47.04zm120.16 60.64A29.6 29.6 0 0 1 776 467.84a22.08 22.08 0 0 1-19.68-25.92A139.2 139.2 0 0 0 736 336c-34.88-50.08-109.92-41.28-109.92-41.28A26.24 26.24 0 0 1 599.84 272v2.88-5.6V272a26.56 26.56 0 0 1 26.24-23.52 188.32 188.32 0 0 1 136.16 47.04c58.08 55.04 39.84 146.4 39.84 146.4z" fill="#F56467" />
              <path d="M459.36 547.04a17.6 17.6 0 1 0 17.6 17.6 17.6 17.6 0 0 0-17.6-17.6zm-44.32 23.2a43.52 43.52 0 0 0-18.4 4.32A32 32 0 0 0 376 613.12a32 32 0 0 0 42.88 9.12 32 32 0 0 0 20.64-38.72 25.76 25.76 0 0 0-24.48-13.28z" fill="#F56467" />
            </svg>
          </a>
        </#if>
        <#if settings.enable_share_qq>
          <a href="https://connect.qq.com/widget/shareqq/index.html?url=${post_url}&title=${post.title!}&pics=${post.thumbnail!}" target="_blank" rel="noopener noreferrer" title="分享到QQ">
            <svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="30" height="30">
              <path d="M512 73.28A438.72 438.72 0 1 0 950.72 512 438.72 438.72 0 0 0 512 73.28zM759.84 646.4c-9.6 8.16-20.8-6.08-29.76-20.32s-14.88-26.72-16-21.76a158.4 158.4 0 0 1-37.44 70.72c-1.28 1.6 28.8 12.48 37.44 35.68s24 57.6-80 68.8a145.76 145.76 0 0 1-80-16c-16.96-8.32-27.52-16-29.6-16a73.6 73.6 0 0 1-13.28 0 108 108 0 0 1-14.4 0c-1.76 0-22.24 32-113.12 32-70.4 0-88.64-44.32-74.4-68.8s37.76-32 34.4-35.36a192 192 0 0 1-34.4-57.6 98.56 98.56 0 0 1-4.16-13.44c-1.28-4.64-6.56 8.64-13.92 21.76s-14.4 22.72-22.88 22.72a11.52 11.52 0 0 1-6.56-2.4c-20.96-16-19.2-55.2-5.44-93.12s48-75.04 48-83.2c1.28-30.24-3.04-35.2 0-43.2 6.56-17.76 14.72-10.88 14.72-20.16 0-116.32 86.4-210.56 192.96-210.56s192.96 94.24 192.96 210.56c0 4.48 11.68 0 17.12 20.16a196.96 196.96 0 0 1 0 43.2c0 11.04 29.44 24.48 44.8 83.2S768 640 759.84 646.4z" fill="#68A5E1" />
            </svg>
          </a>
        </#if>
        <#if settings.enable_share_qzone>
          <a href="https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=${post_url}&sharesource=qzone&title=${post.title!}&pics=${post.thumbnail!}" target="_blank" rel="noopener noreferrer" title="分享到QQ空间">
            <svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="30" height="30">
              <path d="M512 73.28A438.72 438.72 0 1 0 950.72 512 438.72 438.72 0 0 0 512 73.28zM829.92 432c5.6 16-150.24 146.4-150.24 146.4s2.08 12.64 4.16 22.08c0 0-72.64 2.24-132.32 0-32-1.28-69.12-7.04-69.12-7.04L656 470.24a1005.44 1005.44 0 0 0-125.76-13.6A908 908 0 0 0 380 463.36c-6.4 1.76 44.8 1.6 103.04 6.88 40.8 3.68 94.56 13.44 94.56 13.44l-172.8 128s73.92 4.48 140.32 4.16c74.72 0 142.24-9.92 142.72-8 12.96 56.16 36.96 167.52 28 176-12.16 12.32-185.6-97.6-185.6-97.6S368 785.6 345.92 785.6a3.68 3.68 0 0 1-2.08 0c-10.72-8.8 35.52-206.72 35.52-206.72S222.72 448 229.12 432s208-30.24 208-30.24 74.88-188 92.48-188 92.8 188 92.8 188S824.32 416 829.92 432z" fill="#F5BE3F" />
            </svg>
          </a>
        </#if>
        <#if settings.enable_share_link>
          <a class="icon-share-link" href="javascript:;" rel="noopener noreferrer" title="复制文章链接">
            <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3509" width="30" height="30"><path d="M515.2 64c-246.4 0-448 198.4-448 444.8S268.8 953.6 512 953.6c246.4 0 444.8-201.6 444.8-444.8S758.4 64 515.2 64z m-118.4 441.6c-9.6 9.6-28.8 9.6-41.6 0l-22.4-25.6-12.8-9.6c-19.2-22.4-32-48-35.2-76.8 0-28.8 9.6-57.6 28.8-76.8 22.4-19.2 48-28.8 76.8-28.8 28.8 0 60.8 12.8 83.2 35.2l86.4 86.4c22.4 22.4 35.2 51.2 35.2 80 0 25.6-9.6 51.2-28.8 70.4-9.6 9.6-28.8 9.6-41.6 0-9.6-9.6-9.6-28.8 0-38.4 19.2-19.2 16-51.2-3.2-73.6l-86.4-86.4c-12.8-12.8-25.6-19.2-41.6-19.2-9.6 0-22.4 3.2-32 12.8-12.8 12.8-12.8 25.6-12.8 35.2 0 12.8 6.4 28.8 19.2 38.4l12.8 12.8 22.4 22.4c3.2 12.8 3.2 28.8-6.4 41.6z m307.2 201.6c-19.2 19.2-44.8 28.8-73.6 28.8-28.8 0-60.8-12.8-83.2-35.2l-86.4-86.4c-22.4-22.4-35.2-51.2-35.2-80 0-25.6 9.6-51.2 28.8-70.4 9.6-9.6 28.8-9.6 41.6 0 9.6 9.6 9.6 28.8 0 38.4-19.2 19.2-16 51.2 3.2 73.6l86.4 86.4c12.8 12.8 25.6 19.2 41.6 19.2 9.6 0 22.4-3.2 32-12.8 12.8-12.8 12.8-25.6 12.8-35.2 0-12.8-6.4-28.8-19.2-38.4l-25.6-25.6-9.6-9.6c-9.6-9.6-9.6-28.8 0-38.4 9.6-9.6 28.8-9.6 41.6 0l12.8 12.8 19.2 19.2c22.4 19.2 35.2 48 35.2 73.6 9.6 32-3.2 57.6-22.4 80z" fill="#989b9e"></path></svg>
          </a>
        </#if>
      </div>
    </li>
  </#if>
  <#assign enable_donate = (metas?? && metas.enable_donate?? && metas.enable_donate?trim!='')?then(metas.enable_donate?trim,'true')>
  <#if enable_donate=='true' && settings.enable_donate==true && post.status!='DRAFT'>
    <li class="post-operate-donate">
      <i class="joe-font joe-icon-shang"></i>
      <#import "donate.ftl" as nsd>
      <@nsd.donate type="aside" />
    </li>
  </#if>
</ul>