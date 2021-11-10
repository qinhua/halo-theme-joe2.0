<#if settings.enable_footer!true>
  <footer class="joe_footer">
    <div class="joe_container${(settings.enable_rss==false && settings.enable_sitemap==false)?then(' central','')}">
      <div class="item">
        <p>
          ${.now ? string("yyyy")} ©<a href="${blog_url!}" target="_blank" rel="noopener noreferrer">${blog_title!}</a>
          <#if settings.icp??> - <a href="https://beian.miit.gov.cn" rel="noopener noreferrer">${settings.icp!}</a></#if>
        </p>
        <p class="site_powered">@Powered by<a class="a-powered" href="https://halo.run/" target="_blank" rel="noopener noreferrer">Halo</a>&nbsp;|&nbsp;@Theme by<a class="a-theme" href="https://github.com/qinhua/halo-theme-joe2.0" target="_blank" rel="noopener noreferrer">M酷</a></p>
        <#if settings.enable_birthday!false>
          <div class="site_life" data-birthday="${options.birthday?string}">
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
    <#--  <p class="footer-sponsor"><a h"ref=#" target="_blank" alt="CDN Sponsor" rel="nofollow"><img src="https://2heng.xin/wp-content/themes/Sakura/images/Tencent_Cloud_logo.svg" alt="CDN Sponsor"></a></p>  -->
    <@global.footer />
  </footer>
</#if>