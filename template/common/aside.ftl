<#if settings.enable_aside>
  <#import "../macro/newest.ftl" as np>
  <#assign lazy_img=RES_BASE_URL+'/source/img/lazyload.gif'>
  <aside class="joe_aside">
      <#if settings.show_blogger!true>
        <#include "../module/blogger.ftl">
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

      <#if settings.enable_qrcode && settings.qrcode_url?? && settings.qrcode_url!=''>
        <section class="joe_aside__item qrcode">
            <div class="joe_aside__item-title">
                <i class="joe-font joe-icon-qrcode"></i>
                <span class="text">${settings.qrcode_title!'我的二维码'}</span>
            </div>
            <div class="joe_aside__item-contain">
              <img class="qrcode_img lazyload" src="${lazy_img}" data-src="${settings.qrcode_url!}" alt="二维码"/>
              <#if settings.qrcode_description??><p class="qrcode_description">${settings.qrcode_description!}</p></#if>
            </div>
        </section>
      </#if>

      <#if settings.enable_music_player && settings.music_id?? && settings.music_id!=''>
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

      <#if settings.enable_clean_mode!=true && settings.show_newreply==true>
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

      <#if settings.show_tag_cloud!true>
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
                  <#else>
                      <div class="empty">暂无标签</div>
                  </#if>   
                  <#if tags?size gt settings.tag_number?default(17)?number>
                    <a class="tags_more" href="${blog_url!}/tags">更多<i class="joe-font joe-icon-more-right"></i></a>
                  </#if>
                </@tagTag>
            </div>
        </section>
      </#if>

      <#if settings.enable_clean_mode!=true && settings.enable_aside_ads==true>
        <#include "../ads/ads_aside.ftl">
      </#if>
  </aside>
</#if>