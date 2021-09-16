<footer class="joe_footer">
    <div class="joe_container">
        <div class="item">
            ${.now ? string("yyyy")} ©<a href="${blog_url!}" target="_blank" rel="noopener noreferrer">${blog_title!}</a>  
            <#if settings.icp??>
            - <a href="https://beian.miit.gov.cn" rel="noopener noreferrer">${settings.icp!}</a> 
            </#if>
            <#if settings.birthday??>
              <div class="site_life">
                <span>已运行 <strong class="joe_run__day">00</strong> 天 <strong class="joe_run__hour">00</strong> 时 <strong class="joe_run__minute">00</strong> 分 <strong class="joe_run__second">00</strong> 秒</span>
              </div>
            </#if>
        </div>
        <div class="item">
            <a href="${rss_url!}" target="_blank" rel="noopener noreferrer">RSS</a>
            <a href="${sitemap_xml_url!}" target="_blank" rel="noopener noreferrer">站点地图</a>
            <#if settings.qq_group??>${settings.qq_group}</#if>
        </div>
    </div>
    <#--  <p class="footer-sponsor"><a href="#" target="_blank" alt="CDN Sponsor" rel="nofollow"><img src="https://2heng.xin/wp-content/themes/Sakura/images/Tencent_Cloud_logo.svg" alt="CDN Sponsor"></a><a href="http://www.vultr.com/?ref=7196564" target="_blank" alt="Server provider" rel="nofollow"><img src="https://2heng.xin/wp-content/themes/Sakura/images/vultr_logo__on-white.svg" alt="Server provider"></a>&nbsp;&nbsp;&nbsp;<a href="#" target="_blank" alt="Free CDN" rel="nofollow"><img src="https://2heng.xin/wp-content/themes/Sakura/images/baidu_cdn.svg" alt="jsDelivr"></a>&nbsp;&nbsp;&nbsp;<a href="https://www.google.com/intl/ja/analytics/" target="_blank" alt="Analytics solution" rel="nofollow"><img src="https://cdn.jsdelivr.net/gh/moezx/cdn@3.0.8/img/logo/Google.svg" alt="Google Analytics"></a></p>  -->
    <@global.footer />
</footer>