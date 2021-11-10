<#import "../macro/searchpart.ftl" as sp>
<header class="joe_header${settings.enable_glass_blur?then(' glass','')}">
  <#assign logo_link=(settings.logo_link?? && settings.logo_link!='')?then((settings.logo_link=='#')?then('javascript:;',settings.logo_link), blog_url)>
  <#--  web菜单  -->
  <div class="joe_header__above">
    <div class="joe_container joe_header_container">
      <i class="joe-font joe-icon-caidan joe_header__above-slideicon"></i>
      <#if settings.show_logo>
        <a title="${blog_title!}" class="joe_header__above-logo" href="${logo_link}">
          <img class="lazyload" style="border-radius:${settings.logo_radius!'2px'}" data-src="${blog_logo!}" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt="${blog_title!}">
        </a>
      </#if>
      <nav class="joe_header__above-nav${settings.enable_active_shadow?then(' active-shadow','')}">
        <@menuTag method="tree">
          <#list menus?sort_by('priority') as menu>
            <#if menu.children?? && menu.children?size gt 0>
              <div class="joe_dropdown" trigger="hover" placement="60px">
                <div class="joe_dropdown__link">
                  <#if menu.url!='#'>
                    <a class="item" href="${menu.url!}" target="${menu.target!}" title="${menu.name!}"><#if menu.icon?? && settings.enable_navbar_icon!true><i class="${menu.icon}"></i></#if>${menu.name!}</a>
                  <#else>
                    <a class="item" style="cursor:default;" href="javascript:;" title="${menu.name!}"><#if menu.icon?? && settings.enable_navbar_icon!true><i class="${menu.icon}"></i></#if>${menu.name!}</a>
                  </#if>
                  <i class="joe-font joe-icon-arrow-down joe_dropdown__link-icon" style="color:var(--main)"></i>
                </div>
                <nav class="joe_dropdown__menu">
                  <#list menu.children as child>
                    <#if child.children?? && child.children?size gt 0>
                      <li class="joe_nav_sub-li">
                        <a class="item" href="${child.url!}" target="${child.target!}" title="${child.name!}"><#if child.icon?? && settings.enable_navbar_icon!true><i class="${child.icon}"></i></#if>${child.name!}</a>
                        <ol class="joe_nav_sub">
                          <#list child.children as child1>
                            <li>
                              <a class="item" href="${child1.url!}" target="${child1.target!}" title="${child1.name!}"><#if child.icon?? && settings.enable_navbar_icon!true><i class="${child1.icon}"></i></#if>${child1.name!}</a>
                            </li>
                          </#list>
                        </ol>
                      </li>
                    <#else> 
                      <li>
                        <a class="item" href="${child.url!}" target="${child.target!}" title="${child.name!}"><#if child.icon?? && settings.enable_navbar_icon!true><i class="${child.icon}"></i></#if>${child.name!}</a>
                      </li>
                    </#if> 
                  </#list>
                </nav>
              </div>
            <#else>
              <a class="item" href="${menu.url!}" target="${menu.target!}" title="${menu.name!}"><#if menu.icon?? && settings.enable_navbar_icon!true><i class="${menu.icon}"></i></#if>${menu.name!}</a>
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
          <svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="15" height="15">
            <path d="M710.698 299a213.572 213.572 0 1 0-213.572 213.954A213.572 213.572 0 0 0 710.698 299zm85.429 0a299.382 299.382 0 1 1-299-299 299 299 0 0 1 299 299z" />
            <path d="M114.223 1024a46.91 46.91 0 0 1-46.91-46.91 465.281 465.281 0 0 1 468.332-460.704 475.197 475.197 0 0 1 228.827 58.35 46.91 46.91 0 1 1-45.384 82.378 381.378 381.378 0 0 0-183.443-46.909 371.08 371.08 0 0 0-374.131 366.886A47.29 47.29 0 0 1 114.223 1024zM944.483 755.129a38.138 38.138 0 0 0-58.733 0l-146.449 152.55-92.675-91.53a38.138 38.138 0 0 0-58.732 0 43.858 43.858 0 0 0 0 61.402l117.083 122.422a14.492 14.492 0 0 0 8.39 4.577c4.196 0 4.196 4.195 8.39 4.195h32.037c4.195 0 4.195-4.195 8.39-4.195s4.195-4.577 8.39-4.577L946.39 816.15a48.054 48.054 0 0 0-1.906-61.02z" />
            <path d="M763.328 776.104L730.53 744.45a79.708 79.708 0 0 0 32.798 31.654" />
          </svg>
          <a href="${blog_url!}/admin" target="_blank" rel="noopener noreferrer nofollow">登录</a>
        </div>
      </div>  -->
    </div>
  </div>

  <#--  mobile菜单  -->
  <div class="joe_header__slideout">
    <img width="100%" height="150" class="joe_header__slideout-image" src="${settings.author_bg!RES_BASE_URL+'/source/img/author_bg.jpg'}" alt="侧边栏壁纸" />
    <div class="joe_header__slideout-author">
      <img width="50" height="50" class="avatar lazyload" src="${settings.lazyload_avatar!}" data-src="${user.avatar!}" onerror="this.src='${settings.default_avatar!}'" alt="博主头像"/>
      <div class="info">
        <a class="link" href="${logo_link}" target="_blank" rel="noopener noreferrer nofollow">${user.nickname!}</a>
        <p class="motto joe_motto">${user.description!}</p>
      </div>
    </div>
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
                <li>
                  <div class="link panel">
                    <a href="${menu.url!}" title="${menu.name!}">${menu.name!}</a>
                    <i class="joe-font joe-icon-arrow-right"></i>
                  </div>
                  <ul class="slides panel-body">
                    <#if menu.children?? && menu.children?size gt 0>
                      <#list menu.children as child>
                        <#if child.children?? && child.children?size gt 0>
                          <li>
                            <div class="link panel">
                              <a href="${child.url!}" title="${child.name!}">${child.name!}</a>
                              <i class="joe-font joe-icon-arrow-right"></i>
                            </div>
                            <ul class="slides panel-body">
                              <#list child.children as child1>
                                <li>
                                  <a class="link" href="${child1.url!}" title="${child1.name!}">${child1.name!}</a>
                                </li>
                              </#list>
                            </ul>
                          </li>
                        <#else>
                          <li>
                            <a class="link" href="${child.url!}" title="${child.name!}">${child.name!}</a>
                          </li>
                        </#if> 
                      </#list>
                    </#if> 
                  </ul>
                </li>
              <#else>
                <li>
                  <a class="link" href="${menu.url!}" title="${menu.name!}">${menu.name!}</a>
                </li>
              </#if>
            </#list>
          </@menuTag>
        </ul>
      </li>
    </ul>
  </div>

  <#--  mobile搜索  -->
  <#if settings.enable_search>
    <div class="joe_header__searchout">
      <div class="joe_container">
        <div class="joe_header__searchout-inner">
          <form class="joe_header__above-search-mobile" method="get" action="${blog_url!}/search">
            <input maxlength="16" autocomplete="off" placeholder="请输入关键字..." name="keyword" value class="input" type="text"/>
            <button type="submit" class="submit">
            <#--  <i class="joe-font joe-icon-search"></i>  -->
            搜索</button>
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

  <div class="joe_header__mask"></div>
</header>