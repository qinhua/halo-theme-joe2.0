<#macro pager method postsData slug="" keyword="" display="8">
  <#include "item.ftl">
  <#if method=="index">
    <@paginationTag method="index" page="${postsData.number!}" total="${postsData.totalPages!}" display="${display}">
      <@pager_item postsData=postsData pagination=pagination />
    </@paginationTag>
  <#elseif method=="search">
    <@paginationTag method="search" page="${postsData.number!}" total="${postsData.totalPages!}" keyword="${keyword!}" display="${display}">
      <@pager_item postsData=postsData pagination=pagination />
    </@paginationTag>
  <#elseif method=="archives">
    <@paginationTag method="archives" page="${postsData.number!}" total="${postsData.totalPages!}" display="${display}">
      <@pager_item postsData=postsData pagination=pagination />
    </@paginationTag>
  <#elseif method=="categoryPosts">
    <@paginationTag method="categoryPosts" slug="${slug!}" page="${postsData.number!}" total="${postsData.totalPages!}" display="${display}">
      <@pager_item postsData=postsData pagination=pagination />
    </@paginationTag>
  <#elseif method=="tagPosts">
    <@paginationTag method="tagPosts" slug="${slug!}" page="${postsData.number!}" total="${postsData.totalPages!}" display="${display}">
      <@pager_item postsData=postsData pagination=pagination />
    </@paginationTag>
  <#elseif method=="journals">
    <@paginationTag method="journals" page="${postsData.number!}" total="${postsData.totalPages!}" display="3">
      <@pager_item postsData=postsData pagination=pagination />
    </@paginationTag>
  <#elseif method=="photos">
    <@paginationTag method="photos" page="${postsData.number!}" total="${postsData.totalPages!}" display="3">
      <@pager_item postsData=postsData pagination=pagination />
    </@paginationTag>
  <#else>
  </#if>
</#macro>