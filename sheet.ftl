<!DOCTYPE html>
<html lang="zh-CN">
  <#import "template/common/header.ftl" as headInfo>
  <@headInfo.head title="${sheet.title}" type="sheet" id=sheet.id />
  <#import "template/macro/tail.ftl" as tailInfo>
  <body>
    <div id="Joe">
      <#include "template/common/navbar.ftl">
      <div class="joe_container joe_main_container page-sheet${settings.enable_show_in_up?then(' animated showInUp','')}${(settings.aside_position=='left')?then(' revert','')}">
        <div class="joe_main">
          <div class="joe_detail">
            <#include "template/macro/post_status.ftl">
            <@post_status status=sheet.status />
            <h1 class="joe_detail__title txt-shadow" data-sheetid="${sheet.id?c}">${sheet.title}</h1>
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
                      <span class="text">${sheet.updateTime?string('yyyy-MM-dd')}</span>
                      <span class="line">/</span>
                      <span class="text">${sheet.commentCount} 评论</span>
                      <span class="line">/</span>
                      <span class="text" >${sheet.visits} 阅读</span>
                      <span class="line">/</span>
                      <span class="text" >${sheet.wordCount!0} 字</span>
                      <#assign enable_collect_check = (metas?? && metas.enable_collect_check?? && metas.enable_collect_check?trim!='')?then(metas.enable_collect_check?trim,'true')>
                      <#if post.status=='PUBLISHED' && settings.check_baidu_collect==true && enable_collect_check == 'true'>
                        <span class="line">/</span>
                        <#include "template/module/baidu_push.ftl">
                      </#if>
                    </div>
                  </div>
                </div>
                <time class="joe_detail__count-created" datetime="${sheet.createTime?string('MM/dd')}">${sheet.createTime?string('MM/dd')}</time>
              </div>
            </#if>
            <#--  <#if sheet.thumbnail?? && sheet.thumbnail!=''>
              <img class="lazyload" data-src="${sheet.thumbnail}" src="${LAZY_IMG}" onerror="Joe.errorImg(this)" alt="封面"/>
            </#if>  -->
            <#assign img_align = (metas?? && metas.img_align?? && metas.img_align?trim!='')?then(metas.img_align?trim,settings.post_img_align!'center')>
            <#assign use_raw_content = (metas?? && metas.use_raw_content?? && metas.use_raw_content?trim!='')?then(metas.use_raw_content?trim, 'false')>
            <article class="joe_detail__article animated fadeIn ${img_align+'-img'}${(settings.enable_code_line_number==true && settings.enable_code_newline!=true)?then(' line-numbers','')}${settings.enable_single_code_select?then(' single_code_select','')}">
              <#if use_raw_content == 'false'>
                ${sheet.formatContent!}
              <#else>
                <joe-raw-content>
                  <div id="_raw">${sheet.formatContent!}</div>
                </joe-raw-content>
              </#if>
            </article>
            <#--  <#import "template/common/post_copyright.ftl" as pc>  -->
            <#--  <@pc.post_copyright post_url="${sheet.fullPath}"/>  -->
          </div>
          <#assign enable_comment = (metas?? && metas.enable_comment?? && metas.enable_comment?trim!='')?then(metas.enable_comment?trim,'true')>
          <#if settings.enable_clean_mode!=true && settings.enable_comment==true && sheet.status!='DRAFT'>
            <div class="joe_comment">
              <#if sheet.disallowComment == true || enable_comment == 'false'>
                <div class="joe_comment__close">
                  <svg class="joe_comment__close-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="18" height="18">
                    <path d="M512.307.973c282.317 0 511.181 201.267 511.181 449.587a402.842 402.842 0 0 1-39.27 173.26 232.448 232.448 0 0 0-52.634-45.977c16.384-39.782 25.293-82.688 25.293-127.283 0-211.098-199.117-382.157-444.621-382.157-245.555 0-444.57 171.06-444.57 382.157 0 133.427 79.514 250.88 200.039 319.18v107.982l102.041-65.127a510.157 510.157 0 0 0 142.49 20.122l19.405-.359c19.405-.716 38.758-2.508 57.958-5.427l3.584 13.415a230.607 230.607 0 0 0 22.323 50.688l-20.633 3.328a581.478 581.478 0 0 1-227.123-12.288L236.646 982.426c-19.66 15.001-35.635 7.168-35.635-17.664v-157.39C79.411 725.198 1.024 595.969 1.024 450.56 1.024 202.24 229.939.973 512.307.973zm318.464 617.011c97.485 0 176.794 80.435 176.794 179.2S928.256 976.23 830.77 976.23c-97.433 0-176.742-80.281-176.742-179.046 0-98.816 79.309-179.149 176.742-179.149zM727.757 719.002a131.174 131.174 0 0 0-25.754 78.182c0 71.885 57.805 130.406 128.768 130.406 28.877 0 55.552-9.625 77.056-26.01zm103.014-52.327c-19.712 0-39.117 4.557-56.678 13.312L946.33 854.58c8.499-17.305 13.158-36.864 13.158-57.395 0-71.987-57.805-130.509-128.717-130.509zM512.307 383.13l6.861.358a67.072 67.072 0 0 1 59.853 67.072l-.307 6.86a67.072 67.072 0 0 1-66.407 60.57l-6.81-.358a67.072 67.072 0 0 1-59.852-67.072 67.072 67.072 0 0 1 66.662-67.43zm266.752 0l6.861.358a67.072 67.072 0 0 1 59.853 67.072l-.307 6.86a67.072 67.072 0 0 1-66.407 60.57l-6.81-.358a67.072 67.072 0 0 1-59.852-67.072h-.051l.307-6.86a67.072 67.072 0 0 1 66.406-60.57zm-533.504 0l6.861.358a67.072 67.072 0 0 1 59.853 67.072l-.307 6.86a67.072 67.072 0 0 1-66.407 60.57l-6.81-.358a67.072 67.072 0 0 1-59.852-67.072 67.072 67.072 0 0 1 66.662-67.43z" />
                  </svg>
                  <span>博主关闭了当前页面的评论</span>
                </div>
              <#else>
                <#include "template/macro/comment.ftl">
                <@comment target=sheet type="sheet"/>
              </#if>
            </div>
          <#else>
            <div class="joe_comment">
              <div class="joe_comment__close">
                <svg class="joe_comment__close-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="18" height="18">
                  <path d="M512.307.973c282.317 0 511.181 201.267 511.181 449.587a402.842 402.842 0 0 1-39.27 173.26 232.448 232.448 0 0 0-52.634-45.977c16.384-39.782 25.293-82.688 25.293-127.283 0-211.098-199.117-382.157-444.621-382.157-245.555 0-444.57 171.06-444.57 382.157 0 133.427 79.514 250.88 200.039 319.18v107.982l102.041-65.127a510.157 510.157 0 0 0 142.49 20.122l19.405-.359c19.405-.716 38.758-2.508 57.958-5.427l3.584 13.415a230.607 230.607 0 0 0 22.323 50.688l-20.633 3.328a581.478 581.478 0 0 1-227.123-12.288L236.646 982.426c-19.66 15.001-35.635 7.168-35.635-17.664v-157.39C79.411 725.198 1.024 595.969 1.024 450.56 1.024 202.24 229.939.973 512.307.973zm318.464 617.011c97.485 0 176.794 80.435 176.794 179.2S928.256 976.23 830.77 976.23c-97.433 0-176.742-80.281-176.742-179.046 0-98.816 79.309-179.149 176.742-179.149zM727.757 719.002a131.174 131.174 0 0 0-25.754 78.182c0 71.885 57.805 130.406 128.768 130.406 28.877 0 55.552-9.625 77.056-26.01zm103.014-52.327c-19.712 0-39.117 4.557-56.678 13.312L946.33 854.58c8.499-17.305 13.158-36.864 13.158-57.395 0-71.987-57.805-130.509-128.717-130.509zM512.307 383.13l6.861.358a67.072 67.072 0 0 1 59.853 67.072l-.307 6.86a67.072 67.072 0 0 1-66.407 60.57l-6.81-.358a67.072 67.072 0 0 1-59.852-67.072 67.072 67.072 0 0 1 66.662-67.43zm266.752 0l6.861.358a67.072 67.072 0 0 1 59.853 67.072l-.307 6.86a67.072 67.072 0 0 1-66.407 60.57l-6.81-.358a67.072 67.072 0 0 1-59.852-67.072h-.051l.307-6.86a67.072 67.072 0 0 1 66.406-60.57zm-533.504 0l6.861.358a67.072 67.072 0 0 1 59.853 67.072l-.307 6.86a67.072 67.072 0 0 1-66.407 60.57l-6.81-.358a67.072 67.072 0 0 1-59.852-67.072 67.072 67.072 0 0 1 66.662-67.43z" />
                </svg>
                <span>${(sheet.status=='DRAFT')?then('预览状态下不可评论','博主关闭了所有页面的评论')}</span>
              </div>
            </div>
          </#if>
        </div>
        <#assign enable_aside = (metas?? && metas.enable_aside?? && metas.enable_aside?trim!='')?then(metas.enable_aside?trim,'true')>
        <#if settings.enable_sheet_aside == true && enable_aside == 'true'>
          <#include "template/common/aside.ftl">
        </#if>
      </div>
      <#include "template/common/actions.ftl">
      <#include "template/common/footer.ftl">
    </div>
    <@tailInfo.tail type="sheet"/>
  </body>
</html>