<#--  取出主题配置  -->
<script id="theme-config-getter">
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
      ThemeConfig['HOST'] = '${blog_url}';
      // ThemeConfig['HOST'] = 'https://bbchin.com'; // 当前接口，记得切换
      ThemeConfig['blog_title'] = '${blog_title}';
      ThemeConfig['blog_url'] = '${blog_url}';
      ThemeConfig['author'] = '${user.nickname}';
      ThemeConfig['toc_depth'] = 3;
      ThemeConfig['leaving_sheetid'] = 48; //留言板对于的自定义页面Id
    </#if>
  </#list>
  window.onload = function () {
    document.head.removeChild(document.querySelector('#theme-config-getter'));
  }
</script>
<script>
  console.log('主题配置：',ThemeConfig);
  // 读取本地主题模式
  ThemeConfig.enable_auto_switch_theme && localStorage.removeItem("data-mode");
  var localMode = localStorage.getItem("data-mode") || sessionStorage.getItem("data-mode");
  localMode && document.querySelector("html").setAttribute("data-mode", localMode);
  var meting_api="https://api.mizore.cn/meting/api.php?server=:server&type=:type&id=:id";
  Joe = {
      // BASE_URL: "https://bbchin.com",
      BASE_URL: "http://127.0.0.1:8090",
      LIVE2D: "off",
      DYNAMIC_BACKGROUND: "off",
      WALLPAPER_BACKGROUND_PC: "",
      IS_MOBILE: /windows phone|iphone|android/gi.test(window.navigator.userAgent),
      BAIDU_PUSH: false,
      DOCUMENT_TITLE: ""
  }
</script>