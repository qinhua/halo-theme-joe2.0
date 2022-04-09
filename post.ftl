<!DOCTYPE html>
<html lang="zh-CN">
  <#import "template/common/header.ftl" as headInfo>
  <@headInfo.head title="${post.title!}" type="post"/>
  <#import "template/macro/tail.ftl" as tailInfo>
  <body>
    <div id="Joe">
      <#include "template/common/navbar.ftl">
      <#include "template/module/post_bread.ftl">
      <div class="joe_container joe_main_container page-post${settings.enable_show_in_up?then(' animated fadeIn','')}">
        <div class="joe_main joe_post">
          <div class="joe_detail" data-status="${post.status!}" data-cid="${post.id?c}" data-clikes="${post.likes?c}" data-author="${user.nickname!}">
            <#assign use_raw_content = (metas?? && metas.use_raw_content?? && metas.use_raw_content?trim!='')?then(metas.use_raw_content?trim, 'false')>
            <#include "template/macro/post_status.ftl">
            <@post_status status=post.status />
            <#if post.status=='PUBLISHED' && post.categories?size gt 0>
              <div class="joe_detail__category">
                <#list post.categories as category>
                  <a href="${category.fullPath}" class="item item-0" title="${category.name!}">${category.name!}</a>
                </#list>
              </div>
            </#if>
            <#if use_raw_content=='true'>
              <span class="joe_raw" title="原始内容"></span>
            </#if>
            <div class="joe_detail-wrapper">
              <h1 class="joe_detail__title${settings.enable_title_shadow?string(' txt-shadow', '')}">${post.title!}</h1>
              <#assign enable_page_meta = (metas?? && metas.enable_page_meta?? && metas.enable_page_meta?trim!='')?then(metas.enable_page_meta?trim,'true')>
              <#if settings.enable_page_meta && enable_page_meta=='true'>
                <div class="joe_detail__count">
                  <div class="joe_detail__count-information">
                    <img width="35" height="35" class="avatar lazyload" src="${settings.lazyload_avatar!}" data-src="${USER_AVATAR}" onerror="Joe.errorImg(this)" alt="${user.nickname!}">
                    <div class="meta">
                      <div class="author">
                        <a class="link" href="${blog_url}/s/about" title="${user.nickname!}">${user.nickname!}</a>
                      </div>
                      <div class="item">
                        <span class="text">${post.createTime?string('yyyy-MM-dd')}</span>
                        <span class="line">/</span>
                        <span class="text">${post.commentCount} 评论</span>
                        <span class="line">/</span>
                        <span class="text">${post.likes} 点赞</span>
                        <span class="line">/</span>
                        <span class="text" >${post.visits} 阅读</span>  
                        <span class="line">/</span>
                        <span class="text">${post.wordCount!0} 字</span>
                        <#assign enable_collect_check = (metas?? && metas.enable_collect_check?? && metas.enable_collect_check?trim!='')?then(metas.enable_collect_check?trim,'true')>
                        <#if post.status=='PUBLISHED' && settings.check_baidu_collect==true && enable_collect_check == 'true'>
                          <span class="line">/</span>
                          <#include "template/module/baidu_push.ftl">
                        </#if>
                      </div>
                    </div>
                  </div>
                  <time class="joe_detail__count-created" datetime="${post.createTime?string('MM/dd')}">${post.createTime?string('MM/dd')}</time>
                </div>
              </#if>
              <div class="joe_detail__overdue">
              <#assign enable_passage_tips = (metas?? && metas.enable_passage_tips?? && metas.enable_passage_tips?trim!='')?then(metas.enable_passage_tips?trim,'true')>
                <#if settings.enable_passage_tips && enable_passage_tips == 'true'>
                  <div class="joe_detail__overdue-wrapper">
                    <div class="title">
                      <svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                        <path d="M0 512c0 282.778 229.222 512 512 512s512-229.222 512-512S794.778 0 512 0 0 229.222 0 512z" fill="#FF8C00" fill-opacity=".51" />
                        <path d="M462.473 756.326a45.039 45.039 0 0 0 41.762 28.74 45.039 45.039 0 0 0 41.779-28.74h-83.541zm119.09 0c-7.73 35.909-39.372 62.874-77.311 62.874-37.957 0-69.598-26.965-77.33-62.874H292.404a51.2 51.2 0 0 1-42.564-79.65l23.723-35.498V484.88a234.394 234.394 0 0 1 167.492-224.614c3.635-31.95 30.498-56.815 63.18-56.815 31.984 0 58.386 23.808 62.925 54.733A234.394 234.394 0 0 1 742.093 484.88v155.512l24.15 36.454a51.2 51.2 0 0 1-42.668 79.48H581.564zm-47.957-485.922c.069-.904.12-1.809.12-2.73 0-16.657-13.26-30.089-29.491-30.089-16.214 0-29.474 13.432-29.474 30.089 0 1.245.085 2.491.221 3.703l1.81 15.155-14.849 3.499a200.226 200.226 0 0 0-154.265 194.85v166.656l-29.457 44.1a17.067 17.067 0 0 0 14.182 26.556h431.155a17.067 17.067 0 0 0 14.234-26.487l-29.815-45.04V484.882A200.21 200.21 0 0 0 547.26 288.614l-14.985-2.986 1.331-15.224z" fill="#FFF" />
                        <path d="M612.864 322.697c0 30.378 24.303 55.022 54.272 55.022 30.003 0 54.323-24.644 54.323-55.022 0-30.38-24.32-55.023-54.306-55.023s-54.306 24.644-54.306 55.023z" fill="#FA5252" />
                      </svg>
                      <span class="text">温馨提示：</span>
                    </div>
                    <div class="content">
                      <#if settings.passage_tips_content?? && settings.passage_tips_content!=''>
                        ${settings.passage_tips_content}
                      <#else>
                        本文最后更新于 ${post.updateTime?string('yyyy-MM-dd')}，若内容或图片失效，请留言反馈。部分素材来自网络，若不小心影响到您的利益，请联系我们删除。
                      </#if>
                    </div>
                  </div>
                </#if>
              </div>
              <#import "template/ads/ads_post.ftl" as adpost>
              <@adpost.ads_post type="top" />
              <#assign enable_copy = (metas?? && metas.enable_copy?? && metas.enable_copy?trim!='')?then(metas.enable_copy?trim,'true')>
              <#assign img_align = (metas?? && metas.img_align?? && metas.img_align?trim!='')?then(metas.img_align?trim,settings.post_img_align!'center')>
              <#assign enable_read_limit = (metas?? && metas.enable_read_limit?? && metas.enable_read_limit?trim!='')?then(metas.enable_read_limit?trim,'false')>
              <article class="joe_detail__article animated fadeIn ${img_align+'-img'}${(enable_read_limit=='true')?then(' limited','')}${(enable_copy!='true' || settings.enable_copy!=true)?then(' uncopy', '')}${settings.enable_indent?then(' indent','')}${(settings.enable_code_line_number==true && settings.enable_code_newline!=true)?then(' line-numbers','')}${settings.enable_single_code_select?then(' single_code_select','')}">
                <div id="post-inner">
                  <#if use_raw_content == 'false'>
                    ${post.formatContent!}
                  <#else>
                    <joe-raw-content>
                      <div id="_raw">${post.formatContent!}</div>
                    </joe-raw-content>
                  </#if>
                </div>
                <#if enable_read_limit == 'true'>
                  <joe-read-limited></joe-read-limited>
                </#if>
              </article>
              <#assign enable_like = (metas?? && metas.enable_like?? && metas.enable_like?trim!='')?then(metas.enable_like?trim,'true')>
              <#if enable_like=='true' && settings.enable_like==true && post.status!='DRAFT'>
                <#import "template/module/favorite.ftl" as nsp>
                <@nsp.favorite post=post type="bottom" />
              </#if>
            </div>
            <#include "template/module/post_operate.ftl">
            <#import "template/macro/post_copyright.ftl" as pc>
            <@pc.post_copyright post_url="${post.fullPath}"/>
            <@adpost.ads_post type="bottom" />
          </div>
          <#include "template/module/post_operate_aside.ftl">
          <ul class="joe_post__pagination">
            <#if prevPost??>
              <li class="joe_post__pagination-item prev"><a href="${prevPost.fullPath!}" title="${prevPost.title!}">上一篇</a></li>
            </#if>
            <#if nextPost??>
              <li class="joe_post__pagination-item next"><a href="${nextPost.fullPath!}" title="${nextPost.title!}">下一篇</a></li>
            </#if>
          </ul>
          <#assign enable_comment = (metas?? && metas.enable_comment?? && metas.enable_comment?trim!='')?then(metas.enable_comment?trim,'true')>
          <#if settings.enable_clean_mode!=true && settings.enable_comment==true && post.status!='DRAFT'>
            <div class="joe_comment">
              <#if post.disallowComment == true || enable_comment == 'false'>
                <div class="joe_comment__close">
                  <svg class="joe_comment__close-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="18" height="18">
                    <path d="M512.307.973c282.317 0 511.181 201.267 511.181 449.587a402.842 402.842 0 0 1-39.27 173.26 232.448 232.448 0 0 0-52.634-45.977c16.384-39.782 25.293-82.688 25.293-127.283 0-211.098-199.117-382.157-444.621-382.157-245.555 0-444.57 171.06-444.57 382.157 0 133.427 79.514 250.88 200.039 319.18v107.982l102.041-65.127a510.157 510.157 0 0 0 142.49 20.122l19.405-.359c19.405-.716 38.758-2.508 57.958-5.427l3.584 13.415a230.607 230.607 0 0 0 22.323 50.688l-20.633 3.328a581.478 581.478 0 0 1-227.123-12.288L236.646 982.426c-19.66 15.001-35.635 7.168-35.635-17.664v-157.39C79.411 725.198 1.024 595.969 1.024 450.56 1.024 202.24 229.939.973 512.307.973zm318.464 617.011c97.485 0 176.794 80.435 176.794 179.2S928.256 976.23 830.77 976.23c-97.433 0-176.742-80.281-176.742-179.046 0-98.816 79.309-179.149 176.742-179.149zM727.757 719.002a131.174 131.174 0 0 0-25.754 78.182c0 71.885 57.805 130.406 128.768 130.406 28.877 0 55.552-9.625 77.056-26.01zm103.014-52.327c-19.712 0-39.117 4.557-56.678 13.312L946.33 854.58c8.499-17.305 13.158-36.864 13.158-57.395 0-71.987-57.805-130.509-128.717-130.509zM512.307 383.13l6.861.358a67.072 67.072 0 0 1 59.853 67.072l-.307 6.86a67.072 67.072 0 0 1-66.407 60.57l-6.81-.358a67.072 67.072 0 0 1-59.852-67.072 67.072 67.072 0 0 1 66.662-67.43zm266.752 0l6.861.358a67.072 67.072 0 0 1 59.853 67.072l-.307 6.86a67.072 67.072 0 0 1-66.407 60.57l-6.81-.358a67.072 67.072 0 0 1-59.852-67.072h-.051l.307-6.86a67.072 67.072 0 0 1 66.406-60.57zm-533.504 0l6.861.358a67.072 67.072 0 0 1 59.853 67.072l-.307 6.86a67.072 67.072 0 0 1-66.407 60.57l-6.81-.358a67.072 67.072 0 0 1-59.852-67.072 67.072 67.072 0 0 1 66.662-67.43z" />
                  </svg>
                  <span>博主关闭了当前页面的评论</span>
                </div>
              <#else>
                <#include "template/macro/comment.ftl">
                <@comment target=post type="post"/>
              </#if>
            </div>
          <#else>
            <div class="joe_comment">
              <div class="joe_comment__close">
                <svg class="joe_comment__close-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="18" height="18">
                  <path d="M512.307.973c282.317 0 511.181 201.267 511.181 449.587a402.842 402.842 0 0 1-39.27 173.26 232.448 232.448 0 0 0-52.634-45.977c16.384-39.782 25.293-82.688 25.293-127.283 0-211.098-199.117-382.157-444.621-382.157-245.555 0-444.57 171.06-444.57 382.157 0 133.427 79.514 250.88 200.039 319.18v107.982l102.041-65.127a510.157 510.157 0 0 0 142.49 20.122l19.405-.359c19.405-.716 38.758-2.508 57.958-5.427l3.584 13.415a230.607 230.607 0 0 0 22.323 50.688l-20.633 3.328a581.478 581.478 0 0 1-227.123-12.288L236.646 982.426c-19.66 15.001-35.635 7.168-35.635-17.664v-157.39C79.411 725.198 1.024 595.969 1.024 450.56 1.024 202.24 229.939.973 512.307.973zm318.464 617.011c97.485 0 176.794 80.435 176.794 179.2S928.256 976.23 830.77 976.23c-97.433 0-176.742-80.281-176.742-179.046 0-98.816 79.309-179.149 176.742-179.149zM727.757 719.002a131.174 131.174 0 0 0-25.754 78.182c0 71.885 57.805 130.406 128.768 130.406 28.877 0 55.552-9.625 77.056-26.01zm103.014-52.327c-19.712 0-39.117 4.557-56.678 13.312L946.33 854.58c8.499-17.305 13.158-36.864 13.158-57.395 0-71.987-57.805-130.509-128.717-130.509zM512.307 383.13l6.861.358a67.072 67.072 0 0 1 59.853 67.072l-.307 6.86a67.072 67.072 0 0 1-66.407 60.57l-6.81-.358a67.072 67.072 0 0 1-59.852-67.072 67.072 67.072 0 0 1 66.662-67.43zm266.752 0l6.861.358a67.072 67.072 0 0 1 59.853 67.072l-.307 6.86a67.072 67.072 0 0 1-66.407 60.57l-6.81-.358a67.072 67.072 0 0 1-59.852-67.072h-.051l.307-6.86a67.072 67.072 0 0 1 66.406-60.57zm-533.504 0l6.861.358a67.072 67.072 0 0 1 59.853 67.072l-.307 6.86a67.072 67.072 0 0 1-66.407 60.57l-6.81-.358a67.072 67.072 0 0 1-59.852-67.072 67.072 67.072 0 0 1 66.662-67.43z" />
                </svg>
                <span>${(post.status=='DRAFT')?then('预览状态下不可评论','博主关闭了所有页面的评论')}</span>
              </div>
            </div>
          </#if>
        </div>
        <#assign enable_aside = (metas?? && metas.enable_aside?? && metas.enable_aside?trim!='')?then(metas.enable_aside?trim,'true')>
        <#if settings.enable_post_aside == true && enable_aside == 'true'>
          <#include "template/common/aside_post.ftl">
        </#if>
      </div>
      <#if settings.enable_progress_bar!true>
        <div class="joe_progress_bar" ${(settings.progress_bar_bgc?? && settings.progress_bar_bgc!='')?then('style="background:${settings.progress_bar_bgc}"','')}></div>
      </#if>
      <#include "template/common/actions.ftl">
      <#include "template/common/footer.ftl">
    </div>
    <@tailInfo.tail type="post"/>
  </body>
</html>