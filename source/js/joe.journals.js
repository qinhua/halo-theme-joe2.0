/**文章页逻辑 */
const journalContext = {
  /* 初始化日志页 */
  init() {
    /* 激活列表特效 */
    const wow = $(".joe_journals__list").attr("data-wow");
    if (wow !== "off" && wow)
      new WOW({
        boxClass: "wow",
        animateClass: `animated ${wow}`,
        offset: 0,
        mobile: true,
        live: true,
        scrollContainer: null,
      }).init();

    // 内容折叠/展开
    $(".journal_content_expander i").on("click", function () {
      $(this).parents(".joe_journal_body").toggleClass("open");
    });
    // 点赞
    if (ThemeConfig.enable_like_journal) {
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
  /* 日志块超长折叠 */
  foldBlock() {
    const $allBlocks = $(".joe_journal_body .content-wrp");
    $allBlocks.each(function () {
      const $this = $(this);
      if ($this[0].getBoundingClientRect().height > 270) {
        $this.siblings(".journal_content_expander").show();
      }
    });
  },
  /* 日志发布时间格式化 */
  formatTime() {
    const $allJournalTime = $(".joe_journal-posttime");
    $allJournalTime.each(function () {
      const $this = $(this);
      $this.html(Util.timeAgo($this.text()));
    });
  },
};

document.addEventListener("DOMContentLoaded", () => {
  journalContext.init();
});

window.addEventListener("load", function () {
  journalContext.formatTime();
  journalContext.foldBlock();
});
