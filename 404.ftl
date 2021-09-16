<!DOCTYPE html>
<html lang="zh-CN" style="width: 100%; height: 100%; overflow:hidden;">
<#import "common/header.ftl" as headInfo>
<@headInfo.head title="未找到您要的资源" type="404"/>
<style>
.joe_page_404 {
    position: absolute;
    z-index: 100;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--background);
    color: var(--classF);
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
.joe_page_404 svg {
  width: 20vh
}
.joe_page_404 .title {
  font-size: 3vh;
  margin-top: 1vh;
  margin-bottom: 4vh;
  -webkit-user-select: none;
  user-select: none;
  font-weight: 300;
  color: var(--classF);
}
.joe_page_404 .error_link {
  padding: 6px 20px;
  font-size: 14px;
  text-decoration: none;
  -webkit-user-select: none;
  user-select: none;
  color: var(--classF);
  border: 1px solid var(--classF);
  border-radius: 30px;
  -webkit-transition: background .3s;
  transition: background .3s;
}
.joe_page_404 .error_link:hover {
  background: rgba(255,255,255,.1)
}
</style>
<body style="width: 100%; height: 100%">
    <div class="joe_page_404">
      <div class="error">
        <svg version="1.1" id="OBJECTS" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100">
          <g>
            <rect fill="#EBFBF1" width="100" height="90"></rect>
            <circle fill="#3BD671" cx="74.1" cy="36.7" r="24.6"></circle>
            <g>
              <g>
                <path fill="#131A26" d="M48.2,37c-6,0-10.8,4.8-10.8,10.8v13.5c0,6,4.8,10.8,10.8,10.8c6,0,10.8-4.8,10.8-10.8V47.8
                  C59.1,41.8,54.2,37,48.2,37z M51.3,61.3c0,1.7-1.4,3.1-3.1,3.1s-3.1-1.4-3.1-3.1V47.8c0-1.7,1.4-3.1,3.1-3.1s3.1,1.4,3.1,3.1
                  V61.3z"></path>
              </g>
            </g>
            <g>
              <g>
                <path fill="#131A26" d="M27.2,37c-2.1,0-3.9,1.7-3.9,3.9v9.8h-6.1v-9.8c0-2.1-1.7-3.9-3.9-3.9s-3.9,1.7-3.9,3.9v13.7
                  c0,2.1,1.7,3.9,3.9,3.9h10v9.8c0,2.1,1.7,3.9,3.9,3.9c2.1,0,3.9-1.7,3.9-3.9V40.8C31,38.7,29.3,37,27.2,37z"></path>
              </g>
            </g>
            <g>
              <g>
                <path fill="#131A26" d="M83.2,37c-2.1,0-3.9,1.7-3.9,3.9v9.8h-6.1v-9.8c0-2.1-1.7-3.9-3.9-3.9s-3.9,1.7-3.9,3.9v13.7
                  c0,2.1,1.7,3.9,3.9,3.9h10v9.8c0,2.1,1.7,3.9,3.9,3.9c2.1,0,3.9-1.7,3.9-3.9V40.8C87.1,38.7,85.4,37,83.2,37z"></path>
              </g>
            </g>
          </g>
        </svg>
        <div class="title">“未找到您要的资源”</div>
        <p>
          <a href="/" class="error_link">回到主页</a>
        </p>
      </div>
    </div>
 </body>
</html>