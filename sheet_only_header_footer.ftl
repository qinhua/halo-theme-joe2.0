<!DOCTYPE html>
<html lang="zh-CN">
  <#import "template/common/header.ftl" as headInfo>
  <@headInfo.head title="${sheet.title}" type="sheet" id=sheet.id />
  <#import "template/macro/tail.ftl" as tailInfo>
  <body>
    <div id="Joe">
      <#include "template/common/navbar.ftl">
      <div class="joe_container joe_main_container page-sheet${settings.enable_show_in_up?then(' animated showInUp','')}">我是一个只有导航和页脚的页面</div>
      <#include "template/common/actions.ftl">
      <#include "template/common/footer.ftl">
    </div>
    <@tailInfo.tail type="sheet" subType="only_header_footer" />
  </body>
</html>