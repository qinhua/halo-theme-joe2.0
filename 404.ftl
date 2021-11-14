<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8">
    <title>未找到您要的资源</title>
    <meta name="renderer" content="webkit">
    <meta name="format-detection" content="email=no">
    <meta name="format-detection" content="telephone=no">
    <meta http-equiv="Cache-Control" content="no-siteapp">
    <meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, shrink-to-fit=no, viewport-fit=cover">
    <meta name="keywords" content="${meta_keywords!}">
    <meta name="description" content="${meta_description!}">
    <meta name="author" content="${user.nickname!}">
    <meta name="site" content="${blog_url!}">
    <link rel="shortcut icon" size="32x32" href="${options.blog_favicon!}">
    <#include "template/config.ftl">
    <style>
      html, body {
        width: 100%;
        height: 100%;
        overflow: hidden;
      }
      .joe_page_404 {
          position: absolute;
          z-index: 10;
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
        width: 60%;
        max-width: 700px;
      }
      .joe_page_404 .title {
        font-size: 30px;
        margin-top: 20px;
        margin-bottom: 40px;
        -webkit-user-select: none;
        user-select: none;
        font-weight: 300;
        color: #888;
      }
      .joe_page_404 .error_link {
        padding: 12px 36px;
        font-size: 14px;
        text-decoration: none;
        -webkit-user-select: none;
        user-select: none;
        color: #999;
        border: 1px solid #999;
        border-radius: 100px;
        -webkit-transition: color .3s;
        transition: color .3s;
      }
      .joe_page_404 .error_link:hover {
        color: #6c63ff;
        border-color: #6c63ff;
      }
      @media screen and (max-width:500px) {
        .joe_page_404 .title {
          font-size: 20px;
        }
        .joe_page_404 .error_link {
          padding: 10px 30px;
        }
      }
      @media screen and (max-height:500px) {
        .joe_page_404 .title {
          font-size: 20px;
        }
        .joe_page_404 img {
          width: 30%;
        }
        .joe_page_404 .error_link {
          padding: 10px 30px;
        }
      }
    </style>
  <head>
  <body>
    <div class="joe_page_404">
      <div class="error">
        <img src="${BASE_RES_URL!}/source/svg/404.svg" alt="404">
        <h3 class="title">“未找到您要的资源”</h3>
        <a href="/" class="error_link">回到主页</a>
      </div>
    </div>
  </body>
</html>