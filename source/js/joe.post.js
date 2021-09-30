/**文章页逻辑 */
const encryption = (str) => window.btoa(unescape(encodeURIComponent(str)));
const decrypt = (str) => decodeURIComponent(escape(window.atob(str)));
/** Joe上下文对象 */
const JoeContext = {
  // encryption: (str) => window.btoa(unescape(encodeURIComponent(str))),
  // decrypt: (str) => decodeURIComponent(escape(window.atob(str))),
  /* 文章目录 */
  initToc() {
    if (!ThemeConfig.enable_toc || !$(".toc-container").length) return;
    if (document.body.clientWidth <= 1200) return;
    tocbot.init({
      tocSelector: "#js-toc",
      contentSelector: ".joe_detail__article",
      ignoreSelector: ".js-toc-ignore",
      headingSelector: "h1, h2, h3, h4, h5",
      collapseDepth: ThemeConfig.tocDepth || 0,
      hasInnerContainers: false,
      headingsOffset: -80, // 目录高亮的偏移值，和scrollSmoothOffset有关联
      scrollSmoothOffset: -70, // 滚动的偏移值
      positionFixedSelector: ".toc-container", // 固定类添加的容器
      positionFixedClass: "is-position-fixed", // 固定类名称
      fixedSidebarOffset: "auto",
      // scrollEndCallback: function (e) {},
    });
    // toc 菜单收起/展开
    $(".toc-container").show();
    $(".toc-expander i").on("click", function () {
      $(this).parents(".toc-container").toggleClass("hide");
    });
  },
  /* 文章复制 + 版权文字 */
  initCopy() {
    if (!ThemeConfig.enable_copy || !$(".joe_post").length) return;
    const curl = $(".joe_detail").attr("data-curl");
    $(".joe_post .joe_detail").on("copy", function (e) {
      const body_element = document.body;
      const selection = window.getSelection();
      const appendLink = `作者：${ThemeConfig.author}<br>
          链接：${curl}<br>
          来源：${ThemeConfig.blog_title}<br>
          著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。`;
      // const appendLink = ThemeConfig.copy_right_text;
      if (window.clipboardData) {
        const copytext = selection + "\r\n\r\n" + appendLink;
        window.clipboardData.setData("Text", copytext);
        return false;
      } else {
        const copytext = selection + "<br><br>" + appendLink;
        const newdiv = document.createElement("div");
        newdiv.style.position = "absolute";
        newdiv.style.left = "-99999px";
        body_element.appendChild(newdiv);
        newdiv.innerHTML = copytext;
        selection.selectAllChildren(newdiv);
        setTimeout(function () {
          body_element.removeChild(newdiv);
        }, 0);
      }
    });
  },

  /* 获取本篇文章百度收录情况 */
  initBaidu() {
    if (!ThemeConfig.check_baidu_collect || !$("#joe_baidu_record").length)
      return;
    $.ajax({
      url: ThemeConfig.BASE_URL + "/halo-api/bd/iscollect",
      type: "GET",
      dataType: "json",
      data: {
        url: window.location.href,
      },
      success(res) {
        if (res.data && res.data.collected) {
          $("#joe_baidu_record").css("color", "#67c23a").html("已收录");
        } else {
          /* 如果填写了Token，则自动推送给百度 */
          if (ThemeConfig.baidu_token) {
            $("#joe_baidu_record").html(
              '<span style="color: #e6a23c">未收录，推送中...</span>'
            );
            const _timer = setTimeout(function () {
              $.ajax({
                url: ThemeConfig.BASE_URL + "/halo-api/bd/push",
                type: "POST",
                dataType: "json",
                data: {
                  site: ThemeConfig.HOST,
                  token: ThemeConfig.baidu_token,
                  urls: window.location.href,
                },
                success(res) {
                  if (res.data.success === 0) {
                    $("#joe_baidu_record").html(
                      '<span style="color: #f56c6c">推送失败，请检查！</span>'
                    );
                  } else {
                    $("#joe_baidu_record").html(
                      '<span style="color: #67c23a">推送成功！</span>'
                    );
                  }
                },
              });
              clearTimeout(_timer);
            }, 1000);
          } else {
            const url = `https://ziyuan.baidu.com/linksubmit/url?sitename=${encodeURI(
              window.location.href
            )}`;
            $("#joe_baidu_record").html(
              `<a target="_blank" href="${url}" rel="noopener noreferrer nofollow" style="color: #f56c6c">未收录，提交收录</a>`
            );
          }
        }
      },
      error(err) {
        console.log(err);
      },
    });
  },

  /* 初始化代码区域，高亮 + 折叠 +  复制 */
  initCode() {
    if (
      (!ThemeConfig.enable_code_expander && !ThemeConfig.enable_code_copy) ||
      !$("pre[class*='language-']").length
    )
      return;
    $("pre[class*='language-']").each(function (index, item) {
      // 代码折叠
      if (ThemeConfig.enable_code_expander) {
        const $item = $(item);
        const expander = $(
          `<i class="joe-font joe-icon-arrow-downb code-expander" title="折叠/展开"></i>`
        );
        expander.on("click", function () {
          const $parent = expander.parent("pre");
          const $auto_fold = $parent.siblings(".toolbar").find(".autofold-tip");
          $auto_fold && $auto_fold.remove();
          expander.parent("pre").toggleClass("close");
        });
        $item.prepend(expander);

        // 自动折叠长代码
        if (
          ThemeConfig.fold_long_code &&
          location.pathname.includes("archives")
        ) {
          if ($item.height() > (ThemeConfig.long_code_height || 200)) {
            const $title = $item
              .siblings(".toolbar")
              .find(".toolbar-item span")
              .eq(0);
            $title.append(
              `<em class="autofold-tip">\<内容过长，已自动折叠\></em>`
            );
            $item.addClass("close");
          }
        }
      }

      // 代码复制
      if (ThemeConfig.enable_code_copy) {
        const text = $(item).find("code[class*='language-']").text();
        const span = $(
          `<span class="copy-button"><i class="joe-font joe-icon-copy" title="复制代码"></i></span>`
        );
        new ClipboardJS(span[0], {
          text: () => text + "\r\n\r\n" + ThemeConfig.copy_right_text,
        }).on("success", () => Qmsg.success("复制成功！"));
        $(item).addClass("copyable").append(span);
      }
    });
  },

  // 侧边栏切换
  initAside() {
    if (!ThemeConfig.enable_aside && !ThemeConfig.enable_aside_expander) return;
    $(".aside-expander").on("click", function () {
      const $this = $(this);
      if ($this.hasClass("active")) {
        $this.removeClass("active");
        $this.html("隐藏侧边栏");
      } else {
        $this.addClass("active");
        $this.html("显示侧边栏");
      }
      $(".joe_aside").toggleClass("hide");
    });
  },

  /* 图片预览功能 */
  initGallery() {
    $(
      ".joe_detail__article img:not(img.owo_image), .joe_journal_block img"
    ).each(function () {
      $(this).wrap(
        $(
          `<span style="display: block;" data-fancybox="Joe" href="${$(
            this
          ).attr("src")}"></span>`
        )
      );
    });
  },

  /* 初始化文章分享 */
  initPostShare() {
    if (!ThemeConfig.enable_share) return;
    if (ThemeConfig.enable_share_link && $(".icon-share-link").length) {
      new ClipboardJS($(".icon-share-link")[0], {
        text: () => location.href,
      }).on("success", () => Qmsg.success("文章链接已复制"));
    }
    if (ThemeConfig.enable_share_weixin && $("#qrcode_wx").length) {
      $("#qrcode_wx").qrcode({
        width: 140,
        height: 140,
        render: "canvas",
        typeNumber: -1,
        correctLevel: 0,
        background: "#ffffff",
        foreground: "#000000",
        text: location.href,
      });
    }
  },

  /* 设置文章内的链接为新窗口打开 */
  initExternalLink() {
    $(".joe_detail__article a:not(.joe_detail__article-anote)").each(
      function () {
        $(this).attr({
          target: "_blank",
          rel: "noopener noreferrer nofollow",
        });
      }
    );
  },

  /* 文章点赞 */
  initLike() {
    if (!ThemeConfig.enable_like || !$(".joe_detail__agree").length) return;
    const cid = $(".joe_detail").attr("data-cid");
    const clikes = +($(".joe_detail").attr("data-clikes") || 0);
    let agreeArr = localStorage.getItem(encryption("agree"))
      ? JSON.parse(decrypt(localStorage.getItem(encryption("agree"))))
      : [];
    const $icons = $(".joe_detail__agree .icon");
    const $iconLike = $(".joe_detail__agree .icon-like");
    const $iconUnlike = $(".joe_detail__agree .icon-unlike");
    const $likeNum = $(".joe_detail__agree .text");
    if (agreeArr.includes(cid)) {
      $iconUnlike.addClass("active");
    } else {
      $iconLike.addClass("active");
    }
    $likeNum.html(clikes);
    let _loading = false;
    $iconLike.on("click", function () {
      if (_loading) return;
      _loading = true;
      agreeArr = localStorage.getItem(encryption("agree"))
        ? JSON.parse(decrypt(localStorage.getItem(encryption("agree"))))
        : [];
      let flag = agreeArr.includes(cid);
      $.ajax({
        url: "/api/content/posts/" + cid + "/likes",
        type: "POST",
        dataType: "json",
        data: {
          type: flag ? "disagree" : "agree",
        },
        success(res) {
          if (res.status !== 200) {
            return;
          }
          let likes = clikes;
          if (flag) {
            likes--;
            const index = agreeArr.findIndex((_) => _ === cid);
            agreeArr.splice(index, 1);
            $iconUnlike.removeClass("active");
            $iconLike.addClass("active");
            $icons.removeClass("active");
          } else {
            likes++;
            agreeArr.push(cid);
            $iconLike.removeClass("active");
            $iconUnlike.addClass("active");
            $icons.addClass("active");
          }
          const name = encryption("agree");
          const val = encryption(JSON.stringify(agreeArr));
          localStorage.setItem(name, val);
          $likeNum.html(likes);
        },
        error(err) {
          _loading = false;
          return Qmsg.warning(err.responseJSON.message);
        },
        complete() {
          _loading = false;
        },
      });
    });
  },

  /* 密码保护文章，输入密码访问 */
  // initArticleProtect() {
  //   const cid = $(".joe_detail").attr("data-cid");
  //   let isSubmit = false;
  //   $(".joe_detail__article-protected").on("submit", function (e) {
  //     e.preventDefault();
  //     const url = $(this).attr("action") + "&time=" + +new Date();
  //     const protectPassword = $(this).find('input[type="password"]').val();
  //     if (protectPassword.trim() === "") return Qmsg.info("请输入访问密码！");
  //     if (isSubmit) return;
  //     isSubmit = true;
  //     $.ajax({
  //       url,
  //       type: "POST",
  //       data: {
  //         cid,
  //         protectCID: cid,
  //         protectPassword,
  //       },
  //       dataType: "text",
  //       success(res) {
  //         let arr = [],
  //           str = "";
  //         arr = $(res).contents();
  //         Array.from(arr).forEach((_) => {
  //           if (_.parentNode.className === "container") str = _;
  //         });
  //         if (!/Joe/.test(res)) {
  //           Qmsg.warning(str.textContent.trim() || "");
  //           isSubmit = false;
  //           $(".joe_comment__respond-form .foot .submit button").html(
  //             "发表评论"
  //           );
  //         } else {
  //           location.reload();
  //         }
  //       },
  //     });
  //   });
  // },

  /* 文章视频模块 */
  initVideo() {
    if ($(".joe_detail__article-video").length) {
      const player = $(".joe_detail__article-video .play iframe").attr(
        "data-player"
      );
      $(".joe_detail__article-video .episodes .item").on("click", function () {
        $(this).addClass("active").siblings().removeClass("active");
        const url = $(this).attr("data-src");
        $(".joe_detail__article-video .play iframe").attr({
          src: player + url,
        });
      });
      $(".joe_detail__article-video .episodes .item").first().click();
    }
  },

  /* 初始化pjax */
  // initPjax() {},

  /* 初始化日志页 */
  initJournals() {
    // 内容折叠/展开
    $(".journal_content_expander").on("click", function () {
      $(this).parent().toggleClass("open");
    });
    // 点赞
    const $allItems = $(".joe_journal__item");
    if ($allItems.length) {
      $allItems.each(function (_, item) {
        const $this = $(this);
        const cid = $this.attr("data-cid");
        const clikes = +($this.attr("data-clikes") || 0);
        let agreeArr = localStorage.getItem(encryption("agree-journal"))
          ? JSON.parse(
              decrypt(localStorage.getItem(encryption("agree-journal")))
            )
          : [];
        const $iconLike = $this.find(".journal-like");
        const $iconUnlike = $this.find(".journal-unlike");
        const $likeNum = $this.find(".journal-likes-num");
        if (agreeArr.includes(cid)) {
          $iconLike.hide();
          $iconUnlike.show();
        } else {
          $iconLike.show();
          $iconUnlike.hide();
        }
        $likeNum.html(clikes);
        $iconLike.on("click", function () {
          let _loading = false;
          if (_loading) return;
          _loading = true;
          agreeArr = localStorage.getItem(encryption("agree-journal"))
            ? JSON.parse(
                decrypt(localStorage.getItem(encryption("agree-journal")))
              )
            : [];
          let flag = agreeArr.includes(cid);
          $.ajax({
            url: "/api/content/journals/" + cid + "/likes",
            type: "POST",
            dataType: "json",
            data: {
              type: flag ? "disagree" : "agree",
            },
            success(res) {
              if (res.status !== 200) {
                return;
              }
              let likes = clikes;
              if (flag) {
                likes--;
                const index = agreeArr.findIndex((_) => _ === cid);
                agreeArr.splice(index, 1);
                $iconLike.show();
                $iconUnlike.hide();
              } else {
                likes++;
                agreeArr.push(cid);
                $iconLike.hide();
                $iconUnlike.show();
              }
              const name = encryption("agree-journal");
              const val = encryption(JSON.stringify(agreeArr));
              localStorage.setItem(name, val);
              $likeNum.html(likes);
            },
            error(err) {
              _loading = false;
              return Qmsg.warning(err.responseJSON.message);
            },
            complete() {
              _loading = false;
            },
          });
        });
      });
    }
    // 评论及折叠
    if (ThemeConfig.enable_comment_journal) {
      $(".journal_comment_expander,.journal-comment").on("click", function () {
        const $this = $(this);
        const $parent = $this.parents(".footer-wrap");
        if (ThemeConfig.enable_autoload_comment_journal) {
          const compComment = $parent
            .find("halo-comment")[0]
            .shadowRoot.getElementById("halo-comment").__vue__;
          // 展开加载评论
          if (!$parent.hasClass("open") && !compComment.loaded) {
            compComment.loadComments();
          }
        }
        $parent.toggleClass("open");
        $parent
          .find(".journal_comment_expander_txt")
          .html(($parent.hasClass("open") ? "收起" : "查看") + "评论");
      });
    }
  },
  /* 初始化图库 */
  // initGallery(){
  // }

  // 渲染数学公式
  initMathjax() {
    if (ThemeConfig.enable_mathjax && window.katex) {
      renderMathInElement(document.body, {
        delimiters: [
          { left: "$$", right: "$$", display: true },
          { left: "$", right: "$", display: false },
          { left: "\\(", right: "\\)", display: false },
          { left: "\\[", right: "\\]", display: true },
        ],
        throwOnError: false,
      });
    }
  },
};

document.addEventListener("DOMContentLoaded", () => {
  Object.keys(JoeContext).forEach((item) => JoeContext[item]());

  /* 初始化3D标签云 */
  if (ThemeConfig.show_tag_cloud) {
    const entries = [];
    const colors = [
      "#F8D800",
      "#0396FF",
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
      "#FF52E5",
      "#49C628",
      "#00EAFF",
      "#F067B4",
      "#F067B4",
      "#ff9a9e",
      "#00f2fe",
      "#4facfe",
      "#f093fb",
      "#6fa3ef",
      "#bc99c4",
      "#46c47c",
      "#f9bb3c",
      "#e8583d",
      "#f68e5f",
    ];
    const random = (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    $(".tags-cloud-list li").each((i, item) => {
      entries.push({
        label: $(item).attr("data-label"),
        url: $(item).attr("data-url"),
        target: "_blank",
        fontColor: colors[random(0, colors.length - 1)],
        fontSize: 15,
      });
    });
    $("#tags-3d").svg3DTagCloud({
      entries,
      width: 250,
      height: 250,
      radius: "65%",
      radiusMin: 75,
      bgDraw: false,
      fov: 800,
      speed: 0.5,
      fontWeight: 500,
    });
    $(".tags-cloud-list").remove();
  }
});

/* 写在load事件里，为了解决图片未加载完时，滚动距离获取不准确的问题 */
window.addEventListener("load", function () {
  /* 判断地址栏是否有锚点链接，有则跳转到对应位置 */
  {
    const scroll = new URLSearchParams(location.search).get("scroll");
    if (scroll) {
      const height = $(".joe_header").height();
      let elementEL = null;
      if ($("#" + scroll).length > 0) {
        elementEL = $("#" + scroll);
      } else {
        elementEL = $("." + scroll);
      }
      if (elementEL && elementEL.length > 0) {
        const top = elementEL.offset().top - height - 15;
        window.scrollTo({
          top,
          behavior: "smooth",
        });
      }
    }
  }
  /* 日记块超长折叠 */
  const $allBlocks = $(".joe_journal_body .content-wrp");
  $allBlocks.each(function () {
    if ($(this)[0].getBoundingClientRect().height > 270) {
      $(this).siblings(".journal_content_expander").show();
    }
  });
});
