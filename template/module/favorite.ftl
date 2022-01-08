<#macro favorite post type="bottom">
  <#if type="bottom">
    <div class="joe_detail__agree">
      <div class="agree">
        <div class="icon">
          <i class="joe-font joe-icon-like icon-like"></i>
          <i class="joe-font joe-icon-like-fill icon-unlike"></i>
        </div>
        <span class="nums">${post.like!0}</span>
      </div>
    </div>
  <#else>
    <li class="post-operate-like">
      <i class="joe-font joe-icon-dianzan icon-like"></i>
      <i class="joe-font joe-icon-dianzan-fill icon-unlike"></i>
      <#if post.likes gt 0><span class="nums">${post.likes!}</span></#if>
    </li>
  </#if>
</#macro>