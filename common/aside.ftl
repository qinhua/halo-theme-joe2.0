<#import "macro/newest.ftl" as np>

<aside class="joe_aside">
    <#if settings.show_blogger!true>
      <#include "blogger.ftl">
    </#if>

    <#if settings.enable_notice && settings.site_notice??>
      <section class="joe_aside__item notice">
          <div class="joe_aside__item-title">
              <i class="joe-font joe-icon-speaker"></i>
              <span class="text">公告信息</span>
          </div>
          <div class="joe_aside__item-contain">
            <p class="notice_description">${settings.site_notice!}</p>
          </div>
      </section>
    </#if>

    <#if settings.qrcode_url??>
      <section class="joe_aside__item qrcode">
          <div class="joe_aside__item-title">
              <i class="joe-font joe-icon-qrcode"></i>
              <span class="text">${settings.qrcode_title!'我的二维码'}</span>
          </div>
          <div class="joe_aside__item-contain">
            <img class="qrcode_img lazyload" src="https://cdn.jsdelivr.net/gh/qinhua/cdn_assets/img/lazyload.jpeg" data-src="${settings.qrcode_url!}" alt="二维码"/>
            <#if settings.qrcode_description??><p class="qrcode_description">${settings.qrcode_description!}</p></#if>
          </div>
      </section>
    </#if>

    <#if settings.music_id??>
      <section class="joe_aside__item timelife">
          <div class="joe_aside__item-title">
              <i class="joe-font joe-icon-yinfu"></i>
              <span class="text">我的歌单</span>
          </div>
          <div id="aplayer" class="aplayer" data-id="${settings.music_id}" list-max-height="20px" data-server="netease" data-type="playlist" data-fixed="false" data-listfolded="true" data-order="random"  data-mode="#f3f3f7"></div>
      </section>
    </#if>

    <#if settings.show_newest_post!true>
        <@np.newest/>
    </#if>

    <#if settings.show_lifetime!true>
      <section class="joe_aside__item timelife">
          <div class="joe_aside__item-title">
              <i class="joe-font joe-icon-shalou"></i>
              <span class="text">人生倒计时</span>
          </div>
          <div class="joe_aside__item-contain"></div>
      </section>
    </#if>

    <#if settings.show_newreply!true>
      <section class="joe_aside__item newreply">
          <div class="joe_aside__item-title">
          <i class="joe-font joe-icon-message"></i>
              <span class="text">最新回复</span>
          </div>
          <@commentTag method="latest" top='${settings.newreply_page_size!5}'>
          <ul class="joe_aside__item-contain">
              <#list comments.content as comment>
                  <li class="item">
                      <div class="user">
                          <div class="info">
                              <div class="author">${comment.author!}</div>
                              <span class="date">${comment.createTime?string("yyyy-MM-dd")}</span>
                          </div>
                      </div>
                      <div class="reply">
                          <a class="link" href="${comment.post.fullPath}/#${comment.id}">${comment.content} </a>
                      </div>
                  </li>
              </#list>
          </ul>
          </@commentTag>
      </section>
    </#if>

    <#if settings.show_tag!true>
      <section class="joe_aside__item tags-cloud">
          <div class="joe_aside__item-title">
              <i class="joe-font joe-icon-tag"></i>
              <span class="text">标签云</span>
          </div>
          <div class="joe_aside__item-contain">
              <@tagTag method="list">
                <#if tags?size gt 0>
                  <ul class="tags-cloud-list" style="display:none;">
                    <#list tags as tag>
                      <#if tag_index lt settings.tag_number?default(17)?number>
                        <#--  <a href="${tag.fullPath!}" title="${tag.name!}">${tag.name!}</a>  -->
                        <li data-url="${tag.fullPath!}" data-label="${tag.name!}">${tag.name!}</li>
                      </#if>
                    </#list>
                  </ul>
                  <div id="tags-3d"></div>
                  <script>
                      const entries = [];
                      const colors = ['#F8D800', '#0396FF', '#EA5455', '#7367F0', '#32CCBC', '#F6416C', '#28C76F', '#9F44D3', '#F55555', '#736EFE', '#E96D71', '#DE4313', '#D939CD', '#4C83FF', '#F072B6', '#C346C2', '#5961F9', '#FD6585', '#465EFB', '#FFC600', '#FA742B', '#5151E5', '#BB4E75', '#FF52E5', '#49C628', '#00EAFF', '#F067B4', '#F067B4', '#ff9a9e', '#00f2fe', '#4facfe', '#f093fb', '#6fa3ef', '#bc99c4', '#46c47c', '#f9bb3c', '#e8583d', '#f68e5f'];
                      const random = (min, max) => {
                        min = Math.ceil(min);
                        max = Math.floor(max);
                        return Math.floor(Math.random() * (max - min + 1)) + min;
                      };
                      $('.tags-cloud-list li').each((i, item) => {
                        entries.push({
                          label: $(item).attr('data-label'),
                          url: $(item).attr('data-url'),
                          target: '_blank',
                          fontColor: colors[random(0, colors.length - 1)],
                          fontSize: 15
                        });
                      });
                      $('#tags-3d').svg3DTagCloud({
                        entries,
                        width: 250,
                        height: 250,
                        radius: '65%',
                        radiusMin: 75,
                        bgDraw: false,
                        fov: 800,
                        speed: 0.5,
                        fontWeight: 500
                     });
                     $('.tags-cloud-list').remove();
                  </script>
                <#else>
                    <div class="empty">暂无标签</div>
                </#if>   
                <#if tags?size gt settings.tag_number?default(17)?number>
                  <a href="${blog_url!}/tags" style="color:orange">更多>></a>
                </#if>
              </@tagTag>
          </div>
      </section>
    </#if>

    <#if settings.ad_address?? && settings.ad_address != '' && settings.ad_image?? && settings.ad_image != ''>    
      <section class="joe_aside__item advert">
        <a class="joe_advert" target="_blank" rel="noopener noreferrer nofollow" href="${settings.ad_address}" title="广告">
            <img class="lazyload" width="100%" src="https://cdn.jsdelivr.net/gh/qinhua/cdn_assets/img/lazyload.jpeg" data-src="${settings.ad_image}" alt="广告"/>
            <span class="icon">广告</span>
        </a>
      </section>
    </#if>
</aside>