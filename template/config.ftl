<script id="compatiable-checker">
  // 兼容性检查
  function detectIE() {
    var n = window.navigator.userAgent, e = n.indexOf("MSIE ");
    if (e > 0) {
      return parseInt(n.substring(e + 5, n.indexOf(".", e)), 10);
    }
    if (n.indexOf("Trident/") > 0) {
      var r = n.indexOf("rv:");
      return parseInt(n.substring(r + 3, n.indexOf(".", r)), 10);
    }
    var i = n.indexOf("Edge/");
    return i > 0 && parseInt(n.substring(i + 5, n.indexOf(".", i)), 10);
  };
  detectIE() && (alert('当前站点不支持IE浏览器或您开启了兼容模式，请使用其他浏览器访问或关闭兼容模式。'), (location.href = 'https://www.baidu.com'));
</script>

<#assign mode = (blog_url?index_of("localhost") == -1 && blog_url?index_of("127.0.0.1") == -1)?then('production', 'development')>
<#global BASE_RES_URL = (mode == "production" && settings.enable_cdn == true)?string("https://cdn.jsdelivr.net/gh/qinhua/halo-theme-joe2.0@" + theme.version, theme_base)>
<#--  <#global BASE_RES_URL = (mode == "production" && settings.enable_cdn == true)?string("https://cdn.jsdelivr.net/gh/qinhua/halo-theme-joe2.0@master", theme_base)>  -->
<#--  <#global BASE_RES_URL = (mode == "production" && settings.enable_cdn == true)?string("https://cdn.jsdelivr.net/gh/qinhua/halo-theme-joe2.0@dev", theme_base)>  -->
<#global DEFAULT_LOGO = BASE_RES_URL + "/source/img/logo.png">
<#global LOGO = (blog_logo?? && blog_logo != "")?then(blog_logo, DEFAULT_LOGO)>
<#global USER_AVATAR = (user.avatar?? && user.avatar != '' && user.avatar?index_of("gravatar.com") == -1)?then(user.avatar, settings.default_avatar)>
<#global LAZY_IMG = BASE_RES_URL + "/source/img/lazyload.gif">
<#global EMPTY_IMG = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==">
<script id="theme-config-getter" type="text/javascript">
  // 获取主题配置
  var ThemeConfig = {};
  <#list settings?keys as key>
    <#assign valueString = settings[key]?string>
    <#assign isNeeded = key?index_of('custom_')==-1 && valueString?index_of('<script')==-1 && valueString?index_of('<link')==-1>
    <#if isNeeded>
      var field = '${key}';
      var value = '${valueString?js_string}';
      value = value.replace(/</g,"&lt;").replace(/>/g, "&gt;");
      if(/^(true|false)$/.test(value)) {
        value = JSON.parse(value);
      }
      if(/^\d+$/.test(value)) {
        value = Number(value);
      }
      ThemeConfig[field] = value;
    </#if>
  </#list>
  ThemeConfig['name'] = '${options.theme!"Joe2.0"}';
  ThemeConfig['version'] = '${theme.version!}';
  ThemeConfig['mode'] = '${mode!}';
  ThemeConfig['birthday'] = '${(settings.custom_birthday?? && settings.custom_birthday?trim != "")?then(settings.custom_birthday?trim, options.birthday?replace(",",""))}';
  ThemeConfig['blog_title'] = '${blog_title?js_string!}';
  ThemeConfig['blog_url'] = '${blog_url!}';
  ThemeConfig['developer'] = 'M酷';
  ThemeConfig['BASE_URL'] = 'https://bbchin.com';
  ThemeConfig['BASE_RES_URL'] = '${BASE_RES_URL}';
  ThemeConfig['LAZY_IMG'] = '${LAZY_IMG}';
  ThemeConfig['post_index_page_size'] = '${options.post_index_page_size!15}';
  ThemeConfig['post_index_sort'] = '${options.post_index_sort!}';
  ThemeConfig['gravatar_source_url'] = '${options.gravatar_source!}';
  ThemeConfig['gravatar_type'] = '${options.comment_gravatar_default!"mm"}';
</script>

<script id="metas-getter" type="text/javascript">
  // 获取当前页面元数据，这里不要做解析
  window.PageAttrs = {
    "metas": {
      <#if metas??>
        <#list metas?keys as key>
          "${key}": "${metas['${key}']}",
        </#list>
      </#if>
    }
  };
</script>

<script id="theme-config-getter" type="text/javascript">
  if (ThemeConfig.mode === "development") {
    console.log("Joe2.0主题配置：", ThemeConfig);
    console.log("资源根路径：", ThemeConfig.BASE_RES_URL);
  }
  // 读取主题模式
  var initThemeMode = function() {
    var curMode = "";
    if (ThemeConfig.theme_mode === "auto") {
      var light_scope = ThemeConfig.light_time_scope.split("~");
      var now = new Date();
      var today = now.toLocaleString().split(" ")[0];
      var curMode = now >= new Date(today + " " + light_scope[0]) && now <= new Date(today + " " + light_scope[1]) ? "light" : "dark";
      localStorage.removeItem("data-mode");
    } else if (ThemeConfig.theme_mode === "user") {
      // 用户模式下优先从本地取主题模式，默认为浅色
      curMode = localStorage.getItem("data-mode") || "light";
      localStorage.setItem("data-mode", curMode);
    } else {
      // 非用户模式下直接取后台配置的模式
      curMode = ThemeConfig.theme_mode;
      localStorage.removeItem("data-mode");
    }
    document.querySelector("html").setAttribute("data-mode", curMode);
  }
  initThemeMode();
  window.Joe = {
    isMobile: /windows phone|iphone|android/gi.test(window.navigator.userAgent),
    BASE_API: ""
  }
  var meting_api='https://api.mizore.cn/meting/api.php?server=:server&type=:type&id=:id';
  ThemeConfig.enable_console_theme && console.log("%cTheme By " + ThemeConfig.developer + " | 版本 V" + ThemeConfig.version, "padding: 8px 15px;color:#fff;background: linear-gradient(270deg, #986fee, #8695e6, #68b7dd, #18d7d3);border-radius: 0 15px 0 15px;");
</script>