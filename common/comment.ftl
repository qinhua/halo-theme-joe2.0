
<div class="joe_comment_box">
  <h2>评论</h2>
  <#if commentType=='post'>
    <@global.comment target=post type="post" />
  <#elseif commentType=='sheet' >
    <@global.comment target=sheet type="sheet" />
  <#else>
    <@global.comment target=journal type="journal" />
  </#if>
</div>