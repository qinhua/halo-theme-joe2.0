<#macro comment target type>
  <div class="joe_comment_box">
    <h2>评论</h2>
    <#--  <script src="//cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.min.js"></script>
    <script src="${options.comment_internal_plugin_js!'//cdn.jsdelivr.net/gh/qinhua/halo-theme-joe2.0@master/source/lib/halo-comment.min.js'}"></script>  -->
    <#--  <script src="//cdn.jsdelivr.net/gh/qinhua/halo-theme-joe2.0@master/source/lib/halo-comment.min.js"></script>  -->
    <#assign configs = '{"autoLoad": true, "showUserAgent": true}'>
    <halo-comment id='${target.id?c}' type='${type}' configs='${configs}'/>
  </div>
</#macro>