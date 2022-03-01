<#if settings.enable_footer!true>
  <footer class="joe_footer${(settings.footer_position=='fixed')?then(' fixed','')}${settings.enable_full_footer?then(' full','')}">
    <#if settings.footer_source=='both' || settings.footer_source=='theme'>
      <div class="joe_container${(settings.enable_rss==false && settings.enable_sitemap==false)?then(' central','')}">
        <div class="item">
          <p>
            ${.now?string("yyyy")} ©<a href="${blog_url!}" target="_blank" rel="noopener noreferrer">${user.nickname!}</a>
            <#if settings.enable_icp && settings.icp?? && settings.icp?trim!=''> - <a class="icp" href="https://beian.miit.gov.cn" target="_blank" rel="noopener noreferrer nofollow">${settings.icp}</a></#if>
          </p>
          <#if settings.enable_powerby!true><p class="site_powered">Powered by<a class="a-powered" href="https://halo.run/" target="_blank" rel="noopener noreferrer">Halo</a>&nbsp;|&nbsp;🌈 Theme by<a class="a-theme" title="当前主题：Joe2.0 V${theme.version!}" href="${theme.repo!}" target="_blank" rel="noopener noreferrer">M酷</a></p></#if>
          <#if settings.driven_by?? && settings.driven_by!='none'>
            <#switch settings.driven_by>  
              <#case 'aliyun'>  
                <#assign driven_url='https://www.aliyun.com'>
                <#break>  
              <#case 'tencent'>  
                <#assign driven_url='https://cloud.tencent.com'>
                <#break>  
              <#case 'upyun'>  
                <#assign driven_url='https://www.upyun.com'>
                <#break>  
              <#case 'qiniu'>  
                <#assign driven_url='https://www.qiniu.com'>
                <#break>  
              <#default>  
                <#assign driven_url=''>
            </#switch> 
            <p class="site_driven">本站点由
              <a href="${driven_url}" target="_blank" rel="noopener noreferrer nofollow">
                <img src="${BASE_RES_URL}/source/img/cloud/${settings.driven_by}.svg"/>
              </a>提供云服务
            </p>
          </#if>
          <#if settings.enable_birthday!false>
            <div class="site_life">
              <i class="joe-font joe-icon-jiasu"></i>已运行&nbsp;<strong class="joe_run__day">00</strong> 天 <strong class="joe_run__hour">00</strong> 时 <strong class="joe_run__minute">00</strong> 分 <strong class="joe_run__second">00</strong> 秒
            </div>
          </#if>
          <#if settings.enable_police && settings.police?? && settings.police?trim!=''>
            <#assign recordcode=settings.police?replace('[^\\d]','','ri')>
            <p class="site_police">
              <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=${recordcode}" target="_blank" rel="noopener noreferrer nofollow">${settings.police}</a>
            </p>
          </#if>
        </div>
        <#if settings.enable_rss==true || settings.enable_sitemap==true>
          <div class="item">
            <#if settings.enable_rss><a class="rss" href="${rss_url!}" target="_blank" rel="noopener noreferrer"><i class="joe-font joe-icon-rss-fill"></i>&nbsp;RSS</a></#if>
            <#if settings.enable_sitemap><a href="${sitemap_xml_url!}" target="_blank" rel="noopener noreferrer">站点地图</a></#if>
            <#--  <#if settings.enable_visit_number><a class="site_visit_number">—&nbsp;总访客：<span id="site-uv">0</span>&nbsp;</a></#if>  -->
          </div>
        </#if>
      </div>
    </#if>
    <#if settings.footer_source=='both' || settings.footer_source=='backend'>
      <@global.footer />
    </#if>
  </footer>
</#if>