<#macro search_part>
  <form class="joe_header__above-search" method="get" action="${blog_url!}/search">
    <input maxlength="16" autocomplete="off" placeholder="请输入关键字..." name="keyword" value class="input" type="text">
    <button type="submit" class="submit" aria-label="搜索按钮"><i class="joe-font joe-icon-search"></i></button>
    <span class="icon"></span>
    <@postTag method="latest" top="5">
      <nav class="result">
        <#list posts as post>
          <a href="${post.fullPath!}" title="${post.title!}" class="item">
            <span class="sort">${post_index+1}</span>
            <span class="text">${post.title!}</span>
          </a>
        </#list>
      </nav>
    </@postTag>   
  </form>
</#macro>