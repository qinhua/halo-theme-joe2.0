<#import "../macro/search_part.ftl" as sp>
<header class="joe_header">
  <#assign logo_link=(settings.logo_link?? && settings.logo_link!='')?then((settings.logo_link=='#')?then('javascript:;',settings.logo_link), blog_url)>
  <#--  web菜单  -->
  <div class="joe_header__above${settings.enable_show_in_up?then(' topInDown','')}${settings.enable_fixed_header?then(' fixed','')}${(settings.enable_fixed_header && settings.enable_glass_blur)?then(' glass','')}">
    <div class="joe_container joe_header_container${settings.enable_full_header?then(' full','')}">
      <i class="joe-font joe-icon-caidan joe_header__above-slideicon"></i>
      <#if settings.show_logo>
        <a title="${blog_title!}" class="joe_header__above-logo" href="${logo_link}">
          <img style="border-radius:${settings.logo_radius!}" src="${LOGO}" onerror="Joe.errorImg(this)" alt="${blog_title!}">
        </a>
      </#if>
      <nav class="joe_header__above-nav${settings.enable_active_shadow?then(' active-shadow','')}${settings.enable_icon_animate?then(' active-animate','')}">
        <@menuTag method="tree">
          <#list menus?sort_by('priority') as menu>
            <#if menu.children?? && menu.children?size gt 0>
              <#if menu.name?default('')?starts_with('#hide') != true>
                <div class="joe_dropdown" trigger="hover" placement="60px">
                  <div class="joe_dropdown__link">
                    <#if menu.url!='#'>
                      <a class="item" href="${menu.url!}" target="${menu.target!}" title="${menu.name!}"><#if settings.enable_navbar_icon==true && menu.icon?? && menu.icon!=''><i class="m-icon ${menu.icon}"></i></#if>${menu.name!}</a>
                    <#else>
                      <a class="item" style="cursor:default;" href="javascript:;" title="${menu.name!}"><#if settings.enable_navbar_icon==true && menu.icon?? && menu.icon!=''><i class="m-icon ${menu.icon}"></i></#if>${menu.name!}</a>
                    </#if>
                    <i class="joe-font joe-icon-arrow-down joe_dropdown__link-icon" style="color:var(--main)"></i>
                  </div>
                  <nav class="joe_dropdown__menu">
                    <#list menu.children?sort_by('priority') as child>
                      <#if child.children?? && child.children?size gt 0>
                        <#if child.name?default('')?starts_with('#hide') != true>
                          <li class="joe_nav_sub-li">
                            <a class="item" href="${child.url!}" target="${child.target!}" title="${child.name!}"><#if settings.enable_navbar_icon==true && child.icon?? && child.icon!=''><i class="m-icon ${child.icon}"></i></#if>${child.name!}</a>
                            <ol class="joe_nav_sub">
                              <#list child.children?sort_by('priority') as child1>
                                <#if child1.name?default('')?starts_with('#hide') != true>
                                  <li>
                                    <a class="item" href="${child1.url!}" target="${child1.target!}" title="${child1.name!}"><#if settings.enable_navbar_icon==true && child1.icon?? && child1.icon!=''><i class="m-icon ${child1.icon}"></i></#if>${child1.name!}</a>
                                  </li>
                                </#if>
                              </#list>
                            </ol>
                          </li>
                        </#if>
                      <#else>
                        <#if child.name?default('')?starts_with('#hide') != true>
                          <li>
                            <a class="item" href="${child.url!}" target="${child.target!}" title="${child.name!}"><#if settings.enable_navbar_icon==true && child.icon?? && child.icon!=''><i class="m-icon ${child.icon}"></i></#if>${child.name!}</a>
                          </li>
                        </#if>
                      </#if>
                    </#list>
                  </nav>
                </div>
              </#if>
            <#else>
              <#if menu.name?default('')?starts_with('#hide') != true>
                <a class="item" href="${menu.url!}" target="${menu.target!}" title="${menu.name!}"><#if settings.enable_navbar_icon==true && menu.icon?? && menu.icon!=''><i class="m-icon ${menu.icon}"></i></#if>${menu.name!}</a>
              </#if>
            </#if>
          </#list>
        </@menuTag>
      </nav>
      <#if settings.enable_search>
        <@sp.search_part/>
        <i class="joe-font joe-icon-search joe_header__above-searchicon"></i>
      </#if>
      <#--  <div class="joe_header__below-sign">
        <div class="item">
          <a href="${blog_url!}/admin" target="_blank" rel="noopener noreferrer nofollow">登录</a>
        </div>
      </div>  -->
    </div>
  </div>

  <#--  mobile菜单  -->
  <div class="joe_header__slideout">
    <div class="joe_header__slideout-wrap">
      <img width="100%" height="150" class="joe_header__slideout-image" src="${settings.author_bg!BASE_RES_URL+'/source/img/author_bg.jpg'}" onerror="Joe.errorImg(this)" alt="侧边栏壁纸" />
      <div class="joe_header__slideout-author">
        <img width="50" height="50" class="avatar lazyload" data-src="${USER_AVATAR}" src="${settings.lazyload_avatar!}" onerror="Joe.errorImg(this)" alt="博主头像"/>
        <div class="info">
          <a class="link" href="${logo_link}" target="_blank" rel="noopener noreferrer nofollow">${user.nickname!}<#compress><#include "../module/level.ftl"></#compress></a>
          <#if settings.motto??>
            <p class="motto joe_motto">${settings.motto!}</p>
          <#else>
            <p class="motto joe_motto">${user.description!'一句话介绍自己吧！'}</p>
          </#if>
        </div>
      </div>
        <#if settings.enable_mobile_social!false>
          <#include "../module/social.ftl">
        </#if>
      <ul class="joe_header__slideout-count">
        <li class="item">
          <i class="joe-font joe-icon-riji"></i>
          <@postTag method="count"><span>累计撰写 <strong>${count!"0"}</strong> 篇文章</span></@postTag>
        </li>
        <li class="item">
          <i class="joe-font joe-icon-remen"></i>
          <@tagTag method="count"><span>累计创建 <strong>${count!"0"}</strong> 个标签</span></@tagTag>
        </li>
        <li class="item">
          <i class="joe-font joe-icon-message"></i>
          <@commentTag method="count"><span>累计收到 <strong>${count!"0"}</strong> 条评论</span></@commentTag>
        </li>
      </ul>
      <ul class="joe_header__slideout-menu panel-box">
        <#--  <li>
          <a class="link" href="/" title="首页"><span>首页</span></a>
        </li>  -->
        <li>
          <a class="link panel" href="#" rel="nofollow">
          <span>栏目</span>
          <i class="joe-font joe-icon-arrow-right"></i>
          </a>
          <ul class="slides panel-body panel-box panel-side-menu">
            <@menuTag method="tree">
              <#list menus?sort_by('priority') as menu>
                <#if menu.children?? && menu.children?size gt 0>
                  <#if menu.name?default('')?starts_with('#hide') != true>
                    <li>
                      <div class="link panel">
                        <a href="${menu.url!}" title="${menu.name!}">${menu.name!}</a>
                        <i class="joe-font joe-icon-arrow-right"></i>
                      </div>
                      <ul class="slides panel-body">
                        <#if menu.children?? && menu.children?size gt 0>
                          <#list menu.children?sort_by('priority') as child>
                            <#if child.children?? && child.children?size gt 0>
                              <#if child.name?default('')?starts_with('#hide') != true>
                                <li>
                                  <div class="link panel">
                                    <a href="${child.url!}" title="${child.name!}">${child.name!}</a>
                                    <i class="joe-font joe-icon-arrow-right"></i>
                                  </div>
                                  <ul class="slides panel-body">
                                    <#list child.children?sort_by('priority') as child1>
                                      <#if child1.name?default('')?starts_with('#hide') != true>
                                        <li>
                                          <a class="link" href="${child1.url!}" title="${child1.name!}">${child1.name!}</a>
                                        </li>
                                      </#if>
                                    </#list>
                                  </ul>
                                </li>
                              </#if>
                            <#else>
                              <#if child.name?default('')?starts_with('#hide') != true>
                                <li>
                                  <a class="link" href="${child.url!}" title="${child.name!}">${child.name!}</a>
                                </li>
                              </#if>
                            </#if>
                          </#list>
                        </#if> 
                      </ul>
                    </li>
                  </#if>
                <#else>
                  <#if menu.name?default('')?starts_with('#hide') != true> 
                    <li>
                      <a class="link" href="${menu.url!}" title="${menu.name!}">${menu.name!}</a>
                    </li>
                  </#if>
                </#if>
              </#list>
            </@menuTag>
          </ul>
        </li>
      </ul>
    </div>
  </div>

  <#--  mobile搜索  -->
  <#if settings.enable_search>
    <div class="joe_header__searchout">
      <div class="joe_container">
        <div class="joe_header__searchout-inner">
          <form class="joe_header__above-search-mobile" method="get" action="${blog_url!}/search">
            <input maxlength="16" autocomplete="off" placeholder="请输入关键字..." name="keyword" value class="input" type="text"/>
            <button type="submit" class="submit">搜索</button>
          </form>
          <@tagTag method="list">
            <#if tags?size gt 0>
              <div class="title">
                <i class="joe-font joe-icon-cloud"></i>标签搜索
              </div>
              <ul class="cloud">
                <#assign colors=["#F8D800", "#0396FF", "#EA5455", "#7367F0", "#32CCBC", "#F6416C", "#28C76F", "#9F44D3", "#F55555", "#736EFE", "#E96D71", "#DE4313", "#D939CD", "#4C83FF", "#F072B6", "#C346C2", "#5961F9", "#FD6585", "#465EFB", "#FFC600", "#FA742B", "#5151E5", "#BB4E75", "#FF52E5", "#49C628", "#00EAFF", "#F067B4", "#F067B4", "#ff9a9e", "#00f2fe", "#4facfe", "#f093fb", "#6fa3ef", "#bc99c4", "#46c47c", "#f9bb3c", "#e8583d", "#f68e5f"]>
                <#assign nextRandom = .now?string["HHmmssSSS"]?number>
                <#list tags as tag>
                  <li class="item">
                    <a style="background:${colors[nextRandom % colors?size]}" href="${tag.fullPath!}" title="${tag.name!}">${tag.name!}</a>
                  </li>
                  <#assign nextRandom = nextRandom * 10 % 38>
                </#list>
              </ul>
            </#if>
          </@tagTag>
        </div>
      </div>
    </div>
  </#if>

  <#--  mobile TOC  -->
  <div class="joe_header__toc">
    <div class="joe_header__toc-wrap">
      <div class="toc_top">
        <h3>目 录<span>CONTENT</span></h3>      
        <img width="100%" height="150" src="${BASE_RES_URL+'/source/img/context_bg.png'}" onerror="Joe.errorImg(this)" alt="文章目录" />
      </div>
      <div id="js-toc-mobile" class="toc"></div>
    </div>
  </div>

  <div class="joe_header__mask"></div>
</header>