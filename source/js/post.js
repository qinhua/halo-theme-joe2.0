/**文章页逻辑 */
const postContext = {
	limited: false,
	/* 初始化评论后可见 */
	initReadLimit() {
		if (
			PageAttrs.metas.enable_read_limit &&
      PageAttrs.metas.enable_read_limit.trim() !== "true"
		)
			return;
		postContext.limited = true;
		const $article = $(".page-post .joe_detail__article");
		const $content = $("#post-inner");
		const $hideMark = $(".page-post .joe_read_limited");
		const clientHeight =
      document.documentElement.clientHeight || document.body.clientHeight;
		const cid = $(".joe_detail").attr("data-cid");

		// 移除限制
		const removeLimit = () => {
			postContext.limited = false;
			$hideMark.parent().remove();
			$article.removeClass("limited");
			postContext.initToc(true); // 重新渲染TOC
		};

		// 如果文章内容高度小于等于屏幕高度，则自动忽略限制
		if ($content.height() < clientHeight + 180) {
			removeLimit();
			return;
		}

		// 检查本地的 partialIds
		const checkPartialIds = (postId, cb) => {
			const localIds = localStorage.getItem("partialIds");
			if (localIds && localIds.includes(postId)) {
				// console.log("已经评论过了");
				removeLimit(); // 移除限制
			} else {
				cb && cb();
			}
		};

		// 更新当前评论状态
		const updateState = async () => {
			// console.log("评论成功，更新状态");
			const scrollTop = $hideMark.offset().top - 180;
			const localIds = localStorage.getItem("partialIds");

			await Utils.sleep(800); // 延迟一下
			removeLimit(); // 移除限制
			localStorage.setItem("partialIds", localIds ? localIds + "," + cid : cid); // 记录id
			Qmsg.success("感谢您的支持");

			// 滚动到原位置
			$("html,body").animate(
				{
					scrollTop,
				},
				500
			);
		};

		// 监听评论成功事件（区分首次和后续提交）
		const handleCallback = () => {
			// console.log("没有评论记录");
			const commentNode = document.getElementsByTagName("halo-comment")[0];
			commentNode.addEventListener("post-success", (_data) => {
				// console.log(_data, "评论成功");
				// 检查是否已经评论过该文章
				checkPartialIds(cid, updateState);
			});
		};

		checkPartialIds(cid, handleCallback);
	},
	/* 文章复制 + 版权文字 */
	initCopy() {
		if (PageAttrs.metas.enable_copy === "false" || !ThemeConfig.enable_copy)
			return;
		const curl = location.href;
		const author = $(".joe_detail").attr("data-author");
		$(".joe_detail__article").on("copy", function (e) {
			const selection = window.getSelection();
			const selectionText = selection.toString().replace(/<已自动折叠>/g, "");
			const appendLink = ThemeConfig.enable_copy_right_text
				? ThemeConfig.copy_right_text ||
          `\r\n\r\n====================================\r\n文章作者： ${author}\r\n文章来源： ${ThemeConfig.blog_title}\r\n文章链接： ${curl}\r\n版权声明： 内容遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接及本声明。`
				: "";
			if (window.clipboardData) {
				const copytext = selectionText + appendLink;
				window.clipboardData.setData("Text", copytext);
				return false;
			} else {
				const body_element = document.body;
				const copytext = selectionText + appendLink;
				const newdiv = document.createElement("pre");
				newdiv.style.position = "absolute";
				newdiv.style.left = "-99999px";
				body_element.appendChild(newdiv);
				newdiv.innerText = copytext;
				selection.selectAllChildren(newdiv);
				setTimeout(function () {
					body_element.removeChild(newdiv);
				}, 0);
			}
		});
	},
	/* 初始化文章分享 */
	initShare() {
		if (PageAttrs.metas.enable_share === "false" || !ThemeConfig.enable_share)
			return;
		if (ThemeConfig.enable_share_link && $(".icon-share-link").length) {
			$(".icon-share-link").each((_index, item) => {
				new ClipboardJS($(item)[0], {
					text: () => location.href,
				}).on("success", () => Qmsg.success("文章链接已复制"));
			});
		}
		if (ThemeConfig.enable_share_weixin && $(".qrcode_wx").length) {
			$(".qrcode_wx").qrcode({
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
		if (
			PageAttrs.metas.enable_like === "false" ||
      !ThemeConfig.enable_like ||
      !$(".joe_detail__agree").length
		)
			return;
		const cid = $(".joe_detail").attr("data-cid");
		const clikes = +($(".joe_detail").attr("data-clikes") || 0);
		let agreeArr = localStorage.getItem(encryption("agree"))
			? JSON.parse(decrypt(localStorage.getItem(encryption("agree"))))
			: [];
		let flag = agreeArr.includes(cid);
		const $icons = $(".joe_detail__agree, .post-operate-like");
		const $iconLike = $icons.find(".icon-like");
		const $iconUnlike = $icons.find(".icon-unlike");
		const $likeNum = $icons.find(".nums");
		if (flag) {
			$iconUnlike.addClass("active");
		} else {
			$iconLike.addClass("active");
		}
		$likeNum.html(clikes);
		let _loading = false;
		$iconLike.on("click", function (e) {
			e.stopPropagation();
			if (_loading) return;
			_loading = true;
			agreeArr = localStorage.getItem(encryption("agree"))
				? JSON.parse(decrypt(localStorage.getItem(encryption("agree"))))
				: [];
			flag = agreeArr.includes(cid);

			Utils.request({
				url: "/api/content/posts/" + cid + "/likes",
				method: "POST",
				data: {
					type: flag ? "disagree" : "agree",
				},
			})
				.then((_res) => {
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
					$likeNum.html(likes).show();
				})
				.catch((err) => {
					_loading = false;
				});
		});
	},
	/* 文章目录 */
	initToc(reload) {
		if (
			PageAttrs.metas.enable_toc === "false" ||
      !ThemeConfig.enable_toc ||
      !$(".toc-container").length
		)
			return;

		// 原始内容的文章不支持TOC
		if (PageAttrs.metas.use_raw_content === "true") {
			$("#js-toc").html(
				"<div class=\"toc-nodata\">暂不支持解析原始内容目录</div>"
			);
			$(".toc-container").show();
			return;
		}

		// 回复可见的文章首次不渲染TOC
		if (
			PageAttrs.metas.enable_read_limit === "true" &&
      !reload &&
      postContext.limited
		) {
			$("#js-toc").html(
				"<div class=\"toc-nodata\">文章内容不完整，目录仅评论后可见</div>"
			);
			$(".toc-container").show();
			return;
		}

		// 渲染TOC&处理相关交互
		const $html = $("html");
		const $mask = $(".joe_header__mask");
		const $btn_mobile_toc = $(".joe_action .toc");
		const $mobile_toc = $(".joe_header__toc");
		const $tocContainer = $("#js-toc");
		const $tocMobileContainer = $("#js-toc-mobile");

		// 初始化TOC
		tocbot.init({
			tocSelector: Joe.isMobile ? "#js-toc-mobile" : "#js-toc",
			contentSelector: ".joe_detail__article",
			ignoreSelector: ".js-toc-ignore",
			headingSelector: "h1,h2,h3,h4,h5,h6",
			collapseDepth: +(PageAttrs.metas.toc_depth || ThemeConfig.toc_depth || 0),
			scrollSmooth: true,
			includeTitleTags: true,
			// scrollSmoothDuration: 400,
			hasInnerContainers: false,
			headingsOffset: 80, // 目录中高亮的偏移值，和scrollSmoothOffset有关联
			scrollSmoothOffset: -80, // 屏幕滚动的偏移值（这里和导航条固定也有关联）
			positionFixedSelector: ".toc-container", // 固定类添加的容器
			positionFixedClass: "is-position-fixed", // 固定类名称
			fixedSidebarOffset: "auto",
			// disableTocScrollSync: false,
			onClick: function (e) {
				// console.log(e);
				if (Joe.isMobile) {
					// 更新移动端toc文章滚动位置
					$html.removeClass("disable-scroll");
					$mobile_toc.removeClass("active");
					$mask.removeClass("active slideout");
					// if (location.hash) {
					// 	$("html,body").animate(
					// 		{
					// 			scrollTop: $(decodeURIComponent(location.hash)).offset().top,
					// 		},
					// 		0
					// 	);
					// }
				}

				window.tocPhase = true;
			},
			scrollEndCallback: function (e) {
				// console.log(e);
				window.tocPhase = null;
			},
		});

		// 无菜单数据
		if (Joe.isMobile) {
			!$tocMobileContainer.children().length &&
        $tocMobileContainer.html(
        	"<div class=\"toc-nodata\"><em></em>暂无目录</div>"
        );
		} else {
			!$tocContainer.children().length &&
        $tocContainer.html("<div class=\"toc-nodata\">暂无目录</div>");
		}

		// 移动端toc菜单交互
		if (Joe.isMobile) {
			$btn_mobile_toc.show();
			$btn_mobile_toc.on("click", () => {
				window.sessionStorage.setItem("lastScroll", $html.scrollTop());
				$html.addClass("disable-scroll");
				$mask.addClass("active slideout");
				$mobile_toc.addClass("active");
			});
		}

		$(".toc-container").show();
	},
	/**初始化左侧工具条 */
	initAsideOperate() {
		// 评论
		$(".post-operate-comment").on("click", function (e) {
			const $comment = document.querySelector(".joe_comment");
			const $header = document.querySelector(".joe_header");
			if (!$comment || !$header) return;
			e.stopPropagation();
			if (!document.getElementsByTagName("halo-comment").length) {
				Qmsg.warning("评论功能不可用！");
				return;
			}
			const top = $comment.offsetTop - $header.offsetHeight - 15;
			window.scrollTo({ top });
		});

		// 判断是否需要隐藏菜单
		if (Joe.isMobile) return;
		const $asideEl = $(".aside_operations");
		const $operateEl = $(
			".joe_detail__agree,.joe_detail__operate-share,.joe_detail__operate .joe_donate"
		);
		const toggleAsideMenu = (e) => {
			const offsetLeft = $(".joe_post")[0].getBoundingClientRect().left;
			if (offsetLeft < 75) {
				$asideEl.hide();
				$operateEl.show();
			} else {
				$asideEl.show();
				$operateEl.hide();
			}
		};
		toggleAsideMenu();
		window.addEventListener("resize", Utils.throttle(toggleAsideMenu), 500);
	},
	/* 阅读进度条 */
	initProgress() {
		if (!ThemeConfig.enable_progress_bar) return;
		$(window).off("scroll");
		const progress_bar = $(".joe_progress_bar");
		let win_h, body_h, sHeight;
		const updateProgress = (p) => progress_bar.css("width", p * 100 + "%");
		$(window).on("scroll", function (e) {
			e.stopPropagation();
			win_h = $(window).height();
			body_h = $("body").height();
			sHeight = body_h - win_h;
			window.requestAnimationFrame(function () {
				const perc = Math.max(0, Math.min(1, $(window).scrollTop() / sHeight));
				updateProgress(perc);
			});
		});
	},
	/* 文章视频模块 */
	initVideo() {
		if ($(".joe_detail__article-video").length) {
			const player = $(".joe_detail__article-video .play iframe").attr(
				"data-player"
			);
			$(".joe_detail__article-video .episodes .item").on("click", function (e) {
				e.stopPropagation();
				$(this).addClass("active").siblings().removeClass("active");
				const url = $(this).attr("data-src");
				$(".joe_detail__article-video .play iframe").attr({
					src: player + url,
				});
			});
			$(".joe_detail__article-video .episodes .item").first().click();
		}
	},
	/*跳转到指定评论 */
	async jumpToComment() {
		if (
			ThemeConfig.enable_clean_mode ||
      !ThemeConfig.enable_comment ||
      PageAttrs.metas.enable_comment === "false"
		)
			return;
		const { cid: commentId = "", p: postId = "" } = Utils.getUrlParams();
		if (!commentId) return;
		await Utils.sleep(1000);
		try {
			const commentEl = document.getElementsByTagName("halo-comment");
			if (!commentEl) return;
			const el = $(commentEl[0].shadowRoot.getElementById("halo-comment")).find(
				"#comment-" + commentId
			);
			if (!el) return;
			const offsetTop = el.offset().top - 50;
			// 滚动到指定位置
			window.scrollTo({ top: offsetTop });
			// 高亮该评论元素
			const el_comment = el.find(".markdown-content").eq(0);
			el_comment.addClass("blink");
			await Utils.sleep(2000);
			el_comment.removeClass("blink");
			// 清除url参数
			window.history.replaceState(
				null,
				null,
				postId ? `?p=${postId}` : location.origin + location.pathname
			);
			tocbot.refresh();
		} catch (error) {
			console.info(error);
		}
	},
	/* TODO:密码保护文章，输入密码访问 */
	// initArticleProtect() {
	//   const cid = $(".joe_detail").attr("data-cid");
	//   let isSubmit = false;
	//   $(".joe_detail__article-protected").on("submit", function (e) {
	//     e.preventDefault();
	//     const url = $(this).attr("action") + "&time=" + new Date();
	//     const protectPassword = $(this).find("input[type=\"password\"]").val();
	//     if (protectPassword.trim() === "") return Qmsg.info("请输入访问密码！");
	//     if (isSubmit) return;
	//     isSubmit = true;

	// 		Utils.request({
	// 			url: url,
	// 			method: "POST",
	// 			data: {
	//     			cid,
	//     			protectCID: cid,
	//     			protectPassword,
	//     		}
	// 		})
	// 			.then((_res) => {
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
	//       }).catch(err=>{
	// 				isSubmit = false;
	// 			});
	//   });
	// },
};

!(function () {
	const omits = ["jumpToComment"];
	document.addEventListener("DOMContentLoaded", function () {
		Object.keys(postContext).forEach(
			(c) =>
				!omits.includes(c) &&
        typeof postContext[c] === "function" &&
        postContext[c]()
		);
	});

	window.addEventListener("load", function () {
		if (omits.length === 1) {
			postContext[omits[0]]();
		} else {
			omits.forEach(
				(c) => c !== "loadingBar" && postContext[c] && postContext[c]()
			);
		}
	});
})();
