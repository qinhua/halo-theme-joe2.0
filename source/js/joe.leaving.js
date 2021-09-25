/**留言页逻辑 */
const leavingContext = {
  /* 获取留言板数据 */
  getData() {
    const sheetId = $(".joe_detail__title").attr("data-sheetid");
    $.ajax({
      url: `/api/content/sheets/${sheetId}/comments/top_view`,
      type: "GET",
      dataType: "json",
      success(res) {
        if (res.status === 200 && res.data) {
          const resD = res.data;
          if (resD.total) {
            const str = resD.content.reduce((sum, item) => {
              return (sum += `<li class="item">
              <div class="user">
                  <img class="avatar lazyload" src="${
                    ThemeConfig.lazyload_avatar
                  }" data-src="${
                item.authorUrl || item.avatar
              }" alt="用户头像" />
                  <div class="nickname">${item.author}</div>
                  <div class="date">${new Date(
                    item.createTime
                  ).toLocaleDateString()}</div>
              </div>
              <div class="wrapper">
                  <div class="content">${item.content}</div>
              </div>
          </li>`);
            }, "");
            $(".joe_detail__leaving-list").html(str);
            leavingContext.randomColor();
            $(".joe_detail__leaving-list").show();
            $(".joe_detail__leaving-none").hide();
          } else {
            $(".joe_detail__leaving-list").hide();
            $(".joe_detail__leaving-none").show();
          }
        } else {
          $(".joe_detail__leaving-list").hide();
          $(".joe_detail__leaving-none").show();
        }
      },
    });
  },
  /* 随机样式 */
  randomColor() {
    let _index = 100;
    const colors = [
      "#dcc10c",
      "#299bec",
      "#EA5455",
      "#7367F0",
      "#32CCBC",
      "#F6416C",
      "#28C76F",
      "#9F44D3",
      "#F55555",
      "#736EFE",
      "#E96D71",
      "#DE4313",
      "#D939CD",
      "#4C83FF",
      "#F072B6",
      "#C346C2",
      "#5961F9",
      "#FD6585",
      "#465EFB",
      "#FFC600",
      "#FA742B",
      "#5151E5",
      "#BB4E75",
      "#e255cd",
      "#63c549",
      "#0ECDDE",
      "#F067B4",
      "#F067B4",
      "#ff9a9e",
      "#1dd5de",
      "#4facfe",
      "#f093fb",
      "#6fa3ef",
      "#bc99c4",
      "#46c47c",
      "#f9bb3c",
      "#e8583d",
      "#f68e5f",
    ];
    const random = (min, max) =>
      Math.floor(Math.random() * (max - min + 1)) + min;
    const maxWidth = $(".joe_detail__leaving-list").width();
    const maxHeight = $(".joe_detail__leaving-list").height();
    const radius1 = [
      "20px 300px",
      "20px 400px",
      "20px 500px",
      "30px 300px",
      "30px 400px",
      "30px 500px",
      "40px 300px",
      "40px 400px",
      "40px 500px",
    ];
    const radius2 = [
      "300px 20px",
      "400px 20px",
      "500px 20px",
      "300px 30px",
      "400px 30px",
      "500px 30px",
      "300px 40px",
      "400px 40px",
      "500px 40px",
    ];
    $(".joe_detail__leaving-list .item").each((index, item) => {
      const zIndex = random(1, 99);
      const background = colors[random(0, colors.length - 1)];
      const width = Math.ceil($(item).width());
      const height = Math.ceil($(item).height());
      const top = random(0, maxHeight - height);
      const left = random(0, maxWidth - width);
      $(item).css({
        display: "block",
        zIndex,
        background,
        top,
        left,
        borderTopLeftRadius: radius2[random(0, radius2.length - 1)],
        borderTopRightRadius: radius1[random(0, radius1.length - 1)],
        borderBottomLeftRadius: radius1[random(0, radius1.length - 1)],
        borderBottomRightRadius: radius1[random(0, radius1.length - 1)],
      });
      $(item).draggabilly({ containment: true });
      $(item).on("dragStart", (e) => {
        _index++;
        $(item).css({ zIndex: _index });
      });
    });
  },
};
document.addEventListener("DOMContentLoaded", () => {
  leavingContext.getData();
});

/* 写在load事件里，为了解决图片未加载完成，滚动距离获取会不准确的问题 */
// window.addEventListener("load", function () {
//   /* 判断地址栏是否有锚点链接，有则跳转到对应位置 */
//   {
//     const scroll = new URLSearchParams(location.search).get("scroll");
//     if (scroll) {
//       const height = $(".joe_header").height();
//       let elementEL = null;
//       if ($("#" + scroll).length > 0) {
//         elementEL = $("#" + scroll);
//       } else {
//         elementEL = $("." + scroll);
//       }
//       if (elementEL && elementEL.length > 0) {
//         const top = elementEL.offset().top - height - 15;
//         window.scrollTo({ top, behavior: "smooth" });
//       }
//     }
//   }
// });
