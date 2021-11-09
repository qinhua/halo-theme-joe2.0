/**文章页逻辑 */
const postContext = {
	/* 文章目录 */
	initToc() {
		if (!ThemeConfig.enable_toc || !$(".toc-container").length) return;
		if (document.body.clientWidth <= 1200) return;
		tocbot.init({
			tocSelector: "#js-toc",
			contentSelector: ".joe_detail__article",
			ignoreSelector: ".js-toc-ignore",
			headingSelector: "h1, h2, h3, h4, h5",
			collapseDepth: ThemeConfig.toc_depth || 0,
			hasInnerContainers: false,
			headingsOffset: -80, // 目录高亮的偏移值，和scrollSmoothOffset有关联
			scrollSmoothOffset: -70, // 滚动的偏移值
			positionFixedSelector: ".toc-container", // 固定类添加的容器
			positionFixedClass: "is-position-fixed", // 固定类名称
			fixedSidebarOffset: "auto",
			// scrollEndCallback: function (e) {},
		});
		// toc 菜单收起/展开
		if (!$("#js-toc").children().length) {
			$("#js-toc").html("<div class=\"toc-nodata\">暂无目录</div>");
			$(".toc-container").addClass("hide"); // 无目录时默认折叠
		}
		$(".toc-container").show();
		$(".toc-expander i").on("click", function () {
			$(this).parents(".toc-container").toggleClass("hide");
		});
	},
	/* 阅读进度条 */
	initProgress() {
		if (!ThemeConfig.enable_progress_bar) return;
		$(window).off("scroll");
		const progress_bar = $(".joe_progress_bar");
		let win_h, body_h, sHeight;
		const updateProgress = (p) => progress_bar.css("width", p * 100 + "%");
		$(window).on("scroll", function () {
			win_h = $(window).height();
			body_h = $("body").height();
			sHeight = body_h - win_h;
			window.requestAnimationFrame(function () {
				const perc = Math.max(0, Math.min(1, $(window).scrollTop() / sHeight));
				updateProgress(perc);
			});
		});
	},
	/* 文章复制 + 版权文字 */
	initCopy() {
		if (!ThemeConfig.enable_copy) return;
		const curl = $(".joe_detail").attr("data-curl") || location.href;
		$(".joe_detail__article").on("copy", function (e) {
			const body_element = document.body;
			const selection = window.getSelection();
			const appendLink = ThemeConfig.enable_copy_right_text
				? ThemeConfig.copy_right_text ||
          `\r\n\r\n====================================<br>
          作者：${ThemeConfig.author}<br>
          来源：${ThemeConfig.blog_title}<br>
          链接：${curl}<br>
          版权声明：内容遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接及本声明。`
				: "";
			if (window.clipboardData) {
				const copytext = selection + appendLink;
				window.clipboardData.setData("Text", copytext);
				return false;
			} else {
				const copytext = selection + appendLink;
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
	/* 初始化代码区域，高亮 + 折叠 + 复制 */
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
					"<i class=\"joe-font joe-icon-arrow-downb code-expander\" title=\"折叠/展开\"></i>"
				);
				expander.on("click", function () {
					const $parent = expander.parent("pre");
					const $auto_fold = $parent.siblings(".toolbar").find(".autofold-tip");
					$auto_fold && $auto_fold.remove();
					expander.parent("pre").toggleClass("close");
				});
				$item.prepend(expander);
			}
			// 代码复制
			if (ThemeConfig.enable_code_copy) {
				const text = $(item).find("code[class*='language-']").text();
				const span = $(
					"<span class=\"copy-button\"><i class=\"joe-font joe-icon-copy\" title=\"复制代码\"></i></span>"
				);
				new ClipboardJS(span[0], {
					// text: () => text + "\r\n\r\n" + ThemeConfig.copy_right_text,
					text: () => text,
				}).on("success", () => Qmsg.success("复制成功！"));
				$(item).addClass("copyable").append(span);
			}
		});
	},
	/*自动折叠长代码*/
	foldCode() {
		if (ThemeConfig.enable_code_expander && ThemeConfig.fold_long_code) {
			$("pre[class*='language-']").each(function (index, item) {
				const $item = $(item);
				if ($item.height() > 200) {
					const $title = $item
						.siblings(".toolbar")
						.find(".toolbar-item span")
						.eq(0);
					$title.append(
						"<em class=\"autofold-tip\">\<内容过长，已自动折叠\></em>"
					);
					$item.addClass("close");
				}
			});
		}
	},
	/* 侧边栏切换 */
	initAside() {
		if (!ThemeConfig.enable_post_aside || !ThemeConfig.enable_aside_expander)
			return;
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
	/* 初始化文章分享 */
	initShare() {
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
	/* 渲染数学公式 */
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
	/* TODO:密码保护文章，输入密码访问 */
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
};

!(function () {
	const omits = ["initToc", "foldCode"];
	document.addEventListener("DOMContentLoaded", function () {
		Object.keys(postContext).forEach(
			(c) => !omits.includes(c) && postContext[c]()
		);
	});

	window.addEventListener("load", function () {
		if (omits.length === 1) {
			postContext[omits[0]]();
		} else {
			omits.forEach((c) => postContext[c]());
		}
		// commonContext.scrollToHash();
	});
})();
