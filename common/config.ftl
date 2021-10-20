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
  const version = "1.0.0";
  ThemeConfig['isProd'] = location.host.indexOf('localhost') < 0 && location.host.indexOf('127.0.0.1') < 0;
  ThemeConfig['blog_title'] = '${blog_title}';
  ThemeConfig['blog_url'] = '${blog_url}';
  ThemeConfig['author'] = '${user.nickname}';
  ThemeConfig['HOST'] = '${blog_url}';
  ThemeConfig['BASE_URL'] = '${blog_url}';
  ThemeConfig['CDN_URL'] = ThemeConfig.isProd ? "https://cdn.jsdelivr.net/gh/qinhua/halo-theme-joe2.0@" + version : '${theme_base!}';
  ThemeConfig['comment_plugin']='${options.comment_internal_plugin_js}'
</script>
<script id="metas-getter" type="text/javascript">
    // 获取页面元数据
    var PageAttrs = {
        "metas": {
			<#if metas??>
				<#list metas?keys as key>
					"${key}": "${metas['${key}']}",
				</#list>
			</#if>
        }
    }
  window.onload = function () {
    document.head.removeChild(document.querySelector('#theme-config-getter'));
    document.head.removeChild(document.querySelector('#metas-getter'));
  }
</script>

<script type="text/javascript">
  if(!ThemeConfig.isProd){
    console.log('主题配置：',ThemeConfig);
  }
  // 读取本地主题模式
  ThemeConfig.enable_auto_switch_theme && localStorage.removeItem("data-mode");
  var localMode = localStorage.getItem("data-mode") || sessionStorage.getItem("data-mode");
  localMode && document.querySelector("html").setAttribute("data-mode", localMode);
  var meting_api="https://api.mizore.cn/meting/api.php?server=:server&type=:type&id=:id";
  Joe = {
      LIVE2D: "off",
      DYNAMIC_BACKGROUND: "off",
      WALLPAPER_BACKGROUND_PC: "",
      IS_MOBILE: /windows phone|iphone|android/gi.test(window.navigator.userAgent),
      BAIDU_PUSH: false,
      DOCUMENT_TITLE: ""
  }
</script>