/**文章页逻辑 */
let tmpDom = null;
const postContext = {
	/* 初始化评论后可见 */
	initReadLimit() {
		const $content = $(".page-post .joe_detail__article");
		let $hideMark = $("joe-hide");

		if ($hideMark.length) {
			const cid = $(".joe_detail").attr("data-cid");
			// 1.有多个joe-hide标记时移除前面的标记，只处理最后一个
			if ($hideMark.length > 1) {
				const $lastOne = $hideMark.eq($hideMark.length - 1);
				$lastOne.addClass("marker");
				$hideMark = $lastOne;
				$("joe-hide:not(.marker)").parent().remove();
			}
			// 判断是否禁用
			if (!$hideMark.attr("disabled")) {
				// 2.设置data-partial属性
				$content.attr("data-partial", "true");

				// 暂存并移除相关DOM
				const hideDom = () => {
					const $hideDom = $hideMark.parent().nextAll();
					tmpDom = $hideDom;
					$hideDom.remove();

					// 监听评论成功事件（区分首次和后续提交）
					const commentNode = document.getElementsByTagName("halo-comment")[0];
					commentNode.addEventListener("post-success", (_data) => {
						// console.log(_data, "评论成功");
						// 检查是否已经评论过该文章
						checkPartialIds(cid, updateState);
					});
				};

				// 检查本地的 partialIds
				const checkPartialIds = (postId, cb) => {
					const localIds = localStorage.getItem("partialIds");
					if (localIds && localIds.includes(postId)) {
						// console.log("已经评论过了");
						$("joe-hide").parent().remove(); // 移除内容中所有 joe-hide 组件
					} else {
						// console.log("没有评论记录");
						cb && cb(postId);
					}
				};

				// 重新渲染相关内容
				const rerenderContent = () => {
					// console.log("重新渲染内容");
					// 代码块
					commonContext.initCode(true);
					// 图片预览
					commonContext.initGallery();
					// PDF预览
					commonContext.initPDF();
					// TOC
					tocbot.refresh();
				};

				// 更新当前评论状态
				const updateState = async () => {
					const localIds = localStorage.getItem("partialIds");
					const offsetTop = $hideMark.offset().top;

					await Utils.sleep(800);
					tmpDom.replaceAll($hideMark.parent());
					localStorage.setItem(
						"partialIds",
						localIds ? localIds + "," + cid : cid
					);
					tmpDom = null;
					rerenderContent();

					// 滚动到原位置
					const scrollTop = offsetTop - 150;
					$("html").animate(
						{
							scrollTop,
						},
						0
					);
				};

				// 3.检查本地的partialIds
				checkPartialIds(cid, hideDom);
			}
		}

		// 4.显示文章内容
		$content.addClass("show");
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
	initToc() {
		if (
			PageAttrs.metas.enable_toc === "false" ||
      !ThemeConfig.enable_toc ||
      !$(".toc-container").length
		)
			return;
		if (document.body.clientWidth <= 992) return;

		tocbot.init({
			tocSelector: "#js-toc",
			contentSelector: ".joe_detail__article",
			ignoreSelector: ".js-toc-ignore",
			headingSelector: "h1, h2, h3, h4, h5, h6",
			collapseDepth: +(PageAttrs.metas.toc_depth || ThemeConfig.toc_depth || 0),
			scrollSmooth: true,
			// scrollSmoothDuration: 420,
			hasInnerContainers: false,
			headingsOffset: 80, // 目录中高亮的偏移值，和scrollSmoothOffset有关联
			scrollSmoothOffset: -80, // 屏幕滚动的偏移值（这里和导航条固定也有关联）
			positionFixedSelector: ".toc-container", // 固定类添加的容器
			positionFixedClass: "is-position-fixed", // 固定类名称
			fixedSidebarOffset: "auto",
			onClick: function (e) {
				// console.log(e);
				window.tocPhase = true;
			},
			scrollEndCallback: function (e) {
				// console.log(e);
				window.tocPhase = null;
			},
		});

		// toc 菜单收起/展开
		if (!$("#js-toc").children().length) {
			$("#js-toc").html("<div class=\"toc-nodata\">暂无目录</div>");
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
			console.error(error);
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
	document.addEventListener("DOMContentLoaded", function () {
		Object.keys(postContext).forEach((c) => postContext[c]());
	});
})();
