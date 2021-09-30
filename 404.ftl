<!DOCTYPE html>
<html lang="zh-CN">
<#import "common/header.ftl" as headInfo>
<@headInfo.head title="未找到您要的资源" type="404"/>
<style>
  html, body {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .joe_page_404 {
      position: absolute;
      z-index: 100;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: #fff;
      color: #666;
      text-align: center;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      font-family: sans-serif;
      -ms-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%;
      -webkit-font-smoothing: antialiased;
  }
  .joe_page_404 .error {
    margin-top: -10vh;
  }
  .joe_page_404 img {
    width: 36vh;
  }
  .joe_page_404 .title {
    font-size: 3vh;
    margin-top: 4vh;
    margin-bottom: 4vh;
    -webkit-user-select: none;
    user-select: none;
    font-weight: 300;
    color: #888;
  }
  .joe_page_404 .error_link {
    padding: 6px 20px;
    font-size: 14px;
    text-decoration: none;
    -webkit-user-select: none;
    user-select: none;
    color: #999;
    border: 1px solid #999;
    border-radius: 30px;
    -webkit-transition: color .3s;
    transition: color .3s;
  }
  .joe_page_404 .error_link:hover {
    color: #6c63ff;
    border-color: #6c63ff;
  }
</style>
<body>
    <div class="joe_page_404">
      <div class="error">
        <img src="https://cdn.jsdelivr.net/gh/qinhua/halo-theme-joe2.0@master/source/svg/404.svg" alt="404">
        <h3 class="title">“未找到您要的资源”</h3>
        <a href="/" class="error_link">回到主页</a>
      </div>
    </div>
 </body>
</html>