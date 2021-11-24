<#macro post_status status='PUBLISHED'>
  <#if status!='PUBLISHED'>
    <#if status=='DRAFT'>
      <div class="post-status s_draft">
        <i class="joe-font joe-icon-preview"></i>预览模式
      </div>
    </#if>
    <#if status=='INTIMATE'>
      <div class="post-status s_intimate">
        <i class="joe-font joe-icon-shield"></i>私密文章
      </div>
    </#if>
    <#if status=='RECYCLE'>
      <div class="post-status s_recycle">
        <i class="joe-font joe-icon-trash"></i>已回收的文章
      </div>
    </#if>
  </#if>
</#macro>