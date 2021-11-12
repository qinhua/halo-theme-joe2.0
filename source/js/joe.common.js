/**通用逻辑 */
window.encryption = (str) => window.btoa(unescape(encodeURIComponent(str)));
window.decrypt = (str) => decodeURIComponent(escape(window.atob(str)));
const commonContext = {
	/* 初始化主题模式（仅用户模式） */
	initMode() {
		if (ThemeConfig.static_mode !== "off") return;
		const $html = $("html");
		const $icon_light = $(".mode-light");
		const $icon_dark = $(".mode-dark");
		let local_theme = localStorage.getItem("data-mode");

		// 图标状态
		$icon_light[`${local_theme === "light" ? "remove" : "add"}Class`]("active");
		$icon_dark[`${local_theme === "light" ? "add" : "remove"}Class`]("active");

		// 手动切换
		$(".joe_action_item.mode").on("click", function () {
			local_theme = localStorage.getItem("data-mode");
			let theme = "";
			if (local_theme) {
				theme = local_theme === "light" ? "dark" : "light";
				$icon_light[`${local_theme === "light" ? "add" : "remove"}Class`](
					"active"
				);
				$icon_dark[`${local_theme === "light" ? "remove" : "add"}Class`](
					"active"
				);
			} else {
				theme = "dark";
				$icon_light.removeClass("active");
				$icon_dark.addClass("active");
			}
			$html.attr("data-mode", theme);
			localStorage.setItem("data-mode", theme);
			commonContext.initCommentTheme();
		});
	},
	/* 加载条 */
	loadingBar: {
		show() {
			if (!ThemeConfig.enable_loading_bar) return;
			NProgress.configure({ easing: "ease", speed: 500, showSpinner: false });
			NProgress.start();
		},
		hide() {
			if (!ThemeConfig.enable_loading_bar) return;
			NProgress.done(true);
		},
	},
	/* 导航条高亮 */
	initNavbar() {
		const $nav_menus = $(".joe_header__above-nav a");
		const $nav_side_menus = $(".panel-side-menu .link");
		let activeIndex = 0;
		const curPath = location.pathname;
		if (curPath && curPath !== "/") {
			$nav_menus.each((index, item) => {
				if (curPath.indexOf(item.getAttribute("href")) > -1) {
					activeIndex = index;
				}
			});
		}
		$nav_menus.eq(activeIndex).addClass("current");
		$nav_side_menus.eq(activeIndex).addClass("current");
	},
	/* 初始化评论主题 */
	initCommentTheme() {
		const comments = document.getElementsByTagName("halo-comment");
		const curMode = localStorage.getItem("data-mode");
		// 黑夜模式下
		for (let i = 0; i < comments.length; i++) {
			const shadowDom = comments[i].shadowRoot.getElementById("halo-comment");
			$(shadowDom)[`${curMode === "light" ? "remove" : "add"}Class`]("dark");
		}
	},
	/* 获取页面百度收录情况 */
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
							"<span style=\"color: #e6a23c\">未收录，推送中...</span>"
						);
						const _timer = setTimeout(function () {
							$.ajax({
								url: ThemeConfig.BASE_URL + "/halo-api/bd/push",
								type: "POST",
								dataType: "json",
								data: {
									site: ThemeConfig.blog_url,
									token: ThemeConfig.baidu_token,
									urls: window.location.href,
								},
								success(res) {
									if (res.data.success === 0) {
										$("#joe_baidu_record").html(
											"<span style=\"color: #f56c6c\">推送失败，请检查！</span>"
										);
									} else {
										$("#joe_baidu_record").html(
											"<span style=\"color: #67c23a\">推送成功！</span>"
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
	/* 音乐播放器 */
	initMusic() {
		if (!ThemeConfig.enable_global_music_player) return;
		$.ajax({
			url: `https://api.i-meto.com/meting/api?server=netease&type=playlist&id=${ThemeConfig.music_id}`,
			type: "GET",
			dataType: "json",
			success(res) {
				new APlayer({
					container: document.getElementById("global-aplayer"),
					fixed: true,
					lrcType: 3,
					theme: "#1989fa",
					autoplay: true,
					audio: res,
				});
			},
			error(err) {
				console.log(err);
			},
		});
	},
	/* 加载鼠标特效 */
	loadMouseEffect() {
		if (Joe.isMobile || ThemeConfig.cursor_effect === "off") return;
		$.getScript(
			`${ThemeConfig.RES_BASE_URL}/source/effect/cursor/${ThemeConfig.cursor_effect}.js`
		);
	},
	/* 加载背景特效 */
	loadBackdropEffect() {
		if (Joe.isMobile || ThemeConfig.backdrop === "off") return;
		$.getScript(
			`${ThemeConfig.RES_BASE_URL}/source/effect/backdrop/${ThemeConfig.backdrop}.js`
		);
	},
	/* 动态背景 */
	initDynamicBg() {
		if (!ThemeConfig.enable_splash) return;
		// $.getScript(
		//   window.Joe.THEME_URL + `assets/backdrop/${Joe.DYNAMIC_BACKGROUND}`
		// );
	},
	/* 自定义favicon */
	setFavicon() {
		if (!ThemeConfig.favicon) return;
		const favicon = new Favico();
		const image = new Image();
		image.onload = function () {
			favicon.image(image);
		};
		image.src = ThemeConfig.favicon;
	},
	/* 搜索框弹窗 */
	searchDialog() {
		const $result = $(".joe_header__above-search .result");
		$(".joe_header__above-search .input").on("click", function (e) {
			e.stopPropagation();
			$result.addClass("active");
		});
		$(document).on("click", function () {
			$result.removeClass("active");
		});
	},
	/* 激活全局下拉框功能 */
	initDropMenu() {
		$(".joe_dropdown").each(function (index, item) {
			const menu = $(this).find(".joe_dropdown__menu");
			const trigger = $(item).attr("trigger") || "click";
			const placement = $(item).attr("placement") || $(this).height() || 0;
			menu.css("top", placement);
			if (trigger === "hover") {
				$(this).hover(
					() => $(this).addClass("active"),
					() => $(this).removeClass("active")
				);
			} else {
				$(this).on("click", function (e) {
					$(this).toggleClass("active");
					$(document).one("click", () => $(this).removeClass("active"));
					e.stopPropagation();
				});
				menu.on("click", (e) => e.stopPropagation());
			}
		});
	},
	/* 激活全局返回顶部功能 */
	back2Top() {
		if (!ThemeConfig.enable_back2top) return;
		let _debounce = null;
		const $el = $(".joe_action_item.back2top");
		const handleScroll = () =>
			(document.documentElement.scrollTop || document.body.scrollTop) > 300
				? $el.addClass("active")
				: $el.removeClass("active");
		handleScroll();
		$(document).on("scroll", () => {
			clearTimeout(_debounce);
			_debounce = setTimeout(handleScroll, 80);
		});
		$el.on("click", () =>
			window.scrollTo({
				top: 0,
				behavior: "smooth",
			})
		);
	},
	/* 激活侧边栏人生倒计时功能 */
	initTimeCount() {
		if (!$(".joe_aside__item.timelife").length) return;
		let timelife = [
			{
				title: "今日已经过去",
				endTitle: "小时",
				num: 0,
				percent: "0%",
			},
			{
				title: "这周已经过去",
				endTitle: "天",
				num: 0,
				percent: "0%",
			},
			{
				title: "本月已经过去",
				endTitle: "天",
				num: 0,
				percent: "0%",
			},
			{
				title: "今年已经过去",
				endTitle: "个月",
				num: 0,
				percent: "0%",
			},
		];
		{
			let nowDate = +new Date();
			let todayStartDate = new Date(new Date().toLocaleDateString()).getTime();
			let todayPassHours = (nowDate - todayStartDate) / 1000 / 60 / 60;
			let todayPassHoursPercent = (todayPassHours / 24) * 100;
			timelife[0].num = parseInt(todayPassHours);
			timelife[0].percent = parseInt(todayPassHoursPercent) + "%";
		}
		{
			let weeks = {
				0: 7,
				1: 1,
				2: 2,
				3: 3,
				4: 4,
				5: 5,
				6: 6,
			};
			let weekDay = weeks[new Date().getDay()];
			let weekDayPassPercent = (weekDay / 7) * 100;
			timelife[1].num = parseInt(weekDay);
			timelife[1].percent = parseInt(weekDayPassPercent) + "%";
		}
		{
			let year = new Date().getFullYear();
			let date = new Date().getDate();
			let month = new Date().getMonth() + 1;
			let monthAll = new Date(year, month, 0).getDate();
			let monthPassPercent = (date / monthAll) * 100;
			timelife[2].num = date;
			timelife[2].percent = parseInt(monthPassPercent) + "%";
		}
		{
			let month = new Date().getMonth() + 1;
			let yearPass = (month / 12) * 100;
			timelife[3].num = month;
			timelife[3].percent = parseInt(yearPass) + "%";
		}
		let htmlStr = "";
		timelife.forEach((item, index) => {
			htmlStr += `
						<div class="item">
							<div class="title">
								${item.title}
								<span class="text">${item.num}</span>
								${item.endTitle}
							</div>
							<div class="progress">
								<div class="progress-bar">
									<div class="progress-bar-inner progress-bar-inner-${index}" style="width: ${item.percent}"></div>
								</div>
								<div class="progress-percentage">${item.percent}</div>
							</div>
						</div>`;
		});
		$(".joe_aside__item.timelife .joe_aside__item-contain").html(htmlStr);
	},
	/* 激活侧边栏天气功能 */
	initWeather() {
		if (!ThemeConfig.enable_weather || !ThemeConfig.weather_key) return;
		window.WIDGET = {
			CONFIG: {
				modules: "120",
				background: "5",
				tmpColor: "FFFFFF",
				tmpSize: "13",
				cityColor: "FFFFFF",
				citySize: "13",
				aqiColor: "FFFFFF",
				aqiSize: "13",
				weatherIconSize: "13",
				alertIconSize: "13",
				padding: "5px 5px 4px 5px",
				shadow: "0",
				language: "auto",
				borderRadius: "4",
				fixed: "true",
				vertical: "top",
				horizontal: "left",
				key: ThemeConfig.weather_key,
			},
		};
		$.getScript(
			"https://widget.qweather.net/simple/static/js/he-simple-common.js?v=2.0"
		);
	},
	/* 全局图片预览功能（文章、日志页等） */
	initGallery() {
		// 只对符合条件的图片开启预览功能
		const $allImgs = $(
			".joe_detail__article img:not(img.owo_image), .joe_journal_block img"
		);
		if (!$allImgs.length) return;
		$allImgs.each(function () {
			$(this).wrap(
				$(
					`<span style="display: block;" data-fancybox="Joe" href="${$(
						this
					).attr("src")}"></span>`
				)
			);
		});
	},
	/* 设置文章/日志页的链接为新窗口打开 */
	initExternalLink() {
		const $allLink = $(
			".page-post .joe_detail__article a[href], .joe_journal_body a[href]"
		);
		if (!$allLink.length) return;
		$allLink.each(function () {
			$(this).attr({
				target: "_blank",
				rel: "noopener noreferrer nofollow",
			});
		});
	},
	/* 初始化3D标签云 */
	init3dTag() {
		if (!ThemeConfig.show_tag_cloud) return;
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
	},
	/* 激活Live2d人物 */
	initLive2d() {
		if (!ThemeConfig.enable_live2d) return;
		$.getScript(
			"https://cdn.jsdelivr.net/npm/live2d-widget@3.1.4/lib/L2Dwidget.min.js",
			() => {
				L2Dwidget.init({
					model: {
						jsonPath: Joe.LIVE2D,
						scale: 1,
					},
					mobile: {
						show: false,
					},
					display: {
						position: "right",
						width: 160,
						height: 200,
						hOffset: 70,
						vOffset: 0,
					},
				});
			}
		);
	},
	/* 首页离屏提示 */
	offscreenTip() {
		if (!ThemeConfig.enable_offscreen_tip) return;
		const OriginTitile = document.title;
		let timer = null;
		document.addEventListener("visibilitychange", function () {
			if (
				location.href.indexOf(ThemeConfig.blog_url) > 0 ||
        location.pathname !== "/"
			)
				return;
			if (document.hidden) {
				document.title =
          ThemeConfig.offscreen_title_leave || "歪，你去哪里了？";
				clearTimeout(timer);
			} else {
				document.title =
          ThemeConfig.offscreen_title_back || "(つェ⊂)咦，又回来了!";
				timer = setTimeout(function () {
					document.title = OriginTitile;
				}, 2000);
			}
		});
	},
	/* 小屏幕伸缩侧边栏 */
	drawerMobile() {
		$(".joe_header__above-slideicon").on("click", function () {
			/* 关闭搜索框 */
			$(".joe_header__searchout").removeClass("active");
			/* 处理开启关闭状态 */
			if ($(".joe_header__slideout").hasClass("active")) {
				$("body").css("overflow", "");
				$(".joe_header__mask").removeClass("active slideout");
				$(".joe_header__slideout").removeClass("active");
			} else {
				$("body").css("overflow", "hidden");
				$(".joe_header__mask").addClass("active slideout");
				$(".joe_header__slideout").addClass("active");
			}
		});
	},
	/* 小屏幕搜索框 */
	searchMobile() {
		$(".joe_header__above-searchicon").on("click", function () {
			/* 关闭侧边栏 */
			$(".joe_header__slideout").removeClass("active");
			/* 处理开启关闭状态 */
			if ($(".joe_header__searchout").hasClass("active")) {
				$("body").css("overflow", "");
				$(".joe_header__mask").removeClass("active slideout");
				$(".joe_header__searchout").removeClass("active");
			} else {
				$("body").css("overflow", "hidden");
				$(".joe_header__mask").addClass("active");
				$(".joe_header__searchout").addClass("active");
			}
		});
	},
	/* 点击遮罩层关闭 */
	maskClose() {
		$(".joe_header__mask").on("click", function () {
			$("body").css("overflow", "");
			$(".joe_header__mask").removeClass("active slideout");
			$(".joe_header__searchout").removeClass("active");
			$(".joe_header__slideout").removeClass("active");
		});
	},
	/* 移动端侧边栏菜单手风琴 */
	sideMenuMobile() {
		$(".joe_header__slideout-menu .current")
			.parents(".panel-body")
			.show()
			.siblings(".panel")
			.addClass("in");
		$(".joe_header__slideout-menu .panel").on("click", function () {
			const panelBox = $(this).parent().parent();
			/* 清除全部内容 */
			panelBox.find(".panel").not($(this)).removeClass("in");
			panelBox
				.find(".panel-body")
				.not($(this).siblings(".panel-body"))
				.stop()
				.hide("fast");
			/* 激活当前的内容 */
			$(this).toggleClass("in").siblings(".panel-body").stop().toggle("fast");
		});
	},
	/* 初始化网站运行时间 */
	initBirthday() {
		if (!ThemeConfig.enable_birthday) return;
		const birthDay = new Date(
			+$(".site_life").attr("data-birthday").replace(/,/g, "")
		);
		const $day = $(".joe_run__day");
		const $hour = $(".joe_run__hour");
		const $minute = $(".joe_run__minute");
		const $second = $(".joe_run__second");
		const getRunTime = () => {
			const today = +new Date();
			const timePast = today - birthDay.getTime();
			let day = timePast / (1000 * 24 * 60 * 60);
			let dayPast = Math.floor(day);
			let hour = (day - dayPast) * 24;
			let hourPast = Math.floor(hour);
			let minute = (hour - hourPast) * 60;
			let minutePast = Math.floor(minute);
			let second = (minute - minutePast) * 60;
			let secondPast = Math.floor(second);
			day = String(dayPast).padStart(2, 0);
			hour = String(hourPast).padStart(2, 0);
			minute = String(minutePast).padStart(2, 0);
			second = String(secondPast).padStart(2, 0);
			$day.html(day);
			$hour.html(hour);
			$minute.html(minute);
			$second.html(second);
		};
		getRunTime();
		setInterval(getRunTime, 1000);
	},
	/* 初始化表情功能 */
	initEmoji() {
		if (!$(".joe_owo__contain").length && !$(".joe_owo__target").length) return;
		$.ajax({
			url: window.Joe.THEME_URL + "assets/json/joe.owo.json",
			dataType: "json",
			success(res) {
				let barStr = "";
				let scrollStr = "";
				for (let key in res) {
					const item = res[key];
					barStr += `<div class="item" data-type="${key}">${key}</div>`;
					scrollStr += `
                            <ul class="scroll" data-type="${key}">
								${item
		.map(
			(_) =>
				`<li class="item" data-text="${_.data}">${
					key === "颜文字"
						? `${_.icon}`
						: `<img src="${window.Joe.THEME_URL + _.icon}" alt="${
							_.data
						}"/>`
				}</li>`
		)
		.join("")}
                            </ul>
                        `;
				}
				$(".joe_owo__contain").html(`
                        <div class="seat">OωO</div>
                        <div class="box">
                            ${scrollStr}
                            <div class="bar">${barStr}</div>
                        </div>
                    `);
				$(document).on("click", function () {
					$(".joe_owo__contain .box").stop().slideUp("fast");
				});
				$(".joe_owo__contain .seat").on("click", function (e) {
					e.stopPropagation();
					$(this).siblings(".box").stop().slideToggle("fast");
				});
				$(".joe_owo__contain .box .bar .item").on("click", function (e) {
					e.stopPropagation();
					$(this).addClass("active").siblings().removeClass("active");
					const scrollIndx =
            ".joe_owo__contain .box .scroll[data-type=\"" +
            $(this).attr("data-type") +
            "\"]";
					$(scrollIndx).show().siblings(".scroll").hide();
				});
				$(".joe_owo__contain .scroll .item").on("click", function () {
					const text = $(this).attr("data-text");
					$(".joe_owo__target").insertContent(text);
				});
				$(".joe_owo__contain .box .bar .item").first().click();
			},
		});
	},
	/* 头部滚动 */
	initHeadScroll() {
		if (window.IS_MOBILE) return;
		let flag = true;
		const handleHeader = (diffY) => {
			if (window.pageYOffset >= $(".joe_header").height() && diffY <= 0) {
				if (flag) return;
				$(".joe_header").addClass("active");
				$(".joe_aside .joe_aside__item:last-child").css(
					"top",
					$(".joe_header").height() - 60 + 15
				);
				flag = true;
			} else {
				if (!flag) return;
				$(".joe_header").removeClass("active");
				$(".joe_aside .joe_aside__item:last-child").css(
					"top",
					$(".joe_header").height() + 15
				);
				flag = false;
			}
		};
		let Y = window.pageYOffset;
		handleHeader(Y);
		let _last = Date.now();
		document.addEventListener("scroll", () => {
			let _now = Date.now();
			if (_now - _last > 15) {
				handleHeader(Y - window.pageYOffset);
				Y = window.pageYOffset;
			}
			_last = _now;
		});
	},
	/* 判断地址栏是否有锚点链接，有则跳转到对应位置 */
	scrollToHash() {
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
	},
	/* 初始化pjax */
	// initPjax() {},

	/* 页面加载耗时（控制台） */
	showLoadedTime() {
		if (!ThemeConfig.show_loaded_time) return;
		const consume_time = performance.now();
		consume_time &&
      console.log(
      	"%c页面加载耗时：" +
          Math.round(consume_time) +
          ` ms | Theme By ${ThemeConfig.author}`,
      	"color:#fff; background: linear-gradient(270deg, #986fee, #8695e6, #68b7dd, #18d7d3); padding: 8px 15px; border-radius: 0 15px 0 15px"
      );
	},
	/* 清理工作 */
	clean() {
		// 移除无用标签
		$("#compatiable-checker").remove();
		$("#theme-config-getter").remove();
		$("#metas-getter").remove();
		$("#theme-config-getter").remove();
	},
};

!(function () {
	const omits = [
		"loadingBar",
		"init3dTag",
		"initLive2d",
		"initEmoji",
		"showLoadedTime",
		"clean",
	];
	document.addEventListener("DOMContentLoaded", function () {
		commonContext.loadingBar.show();
		Object.keys(commonContext).forEach(
			(c) => !omits.includes(c) && commonContext[c]()
		);
	});

	window.addEventListener("load", function () {
		// if (omits.length === 1) {
		//   commonContext[omits[0]]();
		// } else {
		//   omits.forEach((c) => commonContext[c]());
		// }
		commonContext.init3dTag();
		commonContext.initBirthday();
		commonContext.loadingBar.hide();
		commonContext.showLoadedTime();
		commonContext.clean();
	});
})();

window.commonContext = commonContext;
