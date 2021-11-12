<#if post.status!='PUBLISHED'>
  <#if post.status=='DRAFT'>
    <div class="post-status s_draft">
      <i class="joe-font joe-icon-preview"></i>预览模式
    </div>
  </#if>
  <#if post.status=='INTIMATE'>
    <div class="post-status s_intimate">
      <i class="joe-font joe-icon-shield"></i>私密文章
    </div>
  </#if>
  <#if post.status=='RECYCLE'>
    <div class="post-status s_recycle">
      <i class="joe-font joe-icon-trash"></i>已回收的文章
    </div>
  </#if>
</#if>