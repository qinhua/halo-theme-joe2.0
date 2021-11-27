<#if settings.enable_footer!true>
  <footer class="joe_footer">
    <#if settings.footer_source=='both' || settings.footer_source=='theme'>
      <div class="joe_container${(settings.enable_rss==false && settings.enable_sitemap==false)?then(' central','')}">
        <div class="item">
          <p>
            ${.now ? string("yyyy")} ©<a href="${blog_url!}" target="_blank" rel="noopener noreferrer">${user.nickname!}</a>
            <#if settings.icp??> - <a href="https://beian.miit.gov.cn" rel="noopener noreferrer">${settings.icp!}</a></#if>
          </p>
          <p class="site_powered">Powered by<a class="a-powered" href="https://halo.run/" target="_blank" rel="noopener noreferrer">Halo</a>&nbsp;|&nbsp;🌈 Theme by<a class="a-theme" title="当前主题：Joe2.0 V${theme.version!}" href="${theme.repo!}" target="_blank" rel="noopener noreferrer">M酷</a></p>
          <#if settings.enable_birthday!false>
            <div class="site_life">
          <i class="joe-font joe-icon-clock-fill"></i>已运行&nbsp;<strong class="joe_run__day">00</strong> 天 <strong class="joe_run__hour">00</strong> 时 <strong class="joe_run__minute">00</strong> 分 <strong class="joe_run__second">00</strong> 秒
            </div>
          </#if>
        </div>
        <#if settings.enable_rss==true || settings.enable_sitemap==true>
          <div class="item">
            <#if settings.enable_rss><a class="rss" href="${rss_url!}" target="_blank" rel="noopener noreferrer"><i class="joe-font joe-icon-rss-fill"></i>&nbsp;RSS</a></#if>
            <#if settings.enable_sitemap><a href="${sitemap_xml_url!}" target="_blank" rel="noopener noreferrer">站点地图</a></#if>
          </div>
        </#if>
      </div>
    </#if>
    <#if settings.footer_source=='both' || settings.footer_source=='backend'>
      <@global.footer />
    </#if>
  </footer>
</#if>