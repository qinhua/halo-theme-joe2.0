/**相册页逻辑 */
const photosContext = {
	/* 激活列表特效 */
	initEffect(type) {
		if (!ThemeConfig.enable_photos_effect) return;
		new WOW({
			boxClass: "wow",
			animateClass: type === "grid" ? "bounceIn" : "fadeIn",
			offset: 0,
			mobile: true,
			live: true,
		}).init();
	},
	/* 初始化 */
	initList() {
		const $domList = $(".joe_photos__gallery");
		const $domEmpty = $(".joe_empty");
		const $domLoading = $(".joe_loading");
		const queryData = {
			page: 0,
			// size: ThemeConfig.photos_page_size,
			size: 10,
			sort: "createTime,desc",
		};
		let isLoading = false;
		let isFirst = true;
		let isEnd = false;
		let listData = [];
		let curLayout = ThemeConfig.photos_layout || "grid";

		// 渲染Grid布局
		const renderGrid = (data) => {
			if (data) {
				const htmlArr = data.reduce((result, item, index) => {
					return result.concat([
						`<a class="item animated wow" data-wow-diration="0.3s" data-wow-delay="0.${index}s" href="${
							item.url
						}" data-fancybox="gallery" data-caption="${item.name || ""}">
        <img width="100%" height="100%" class="lazyloadx" src="${
	item.thumbnail
}" alt="${item.name || ""}"/>
        <span class="team" style="background-color:${Utils.getRandomColor(
		0.2,
		0.5
	)}">${item.team}</span>
        <p class="tit">${item.name}</p>
        <div class="info">
          <p class="animated fadeInRightBig"><i class="joe-font joe-icon-paizhao"></i><span>${
	item.name
}</span></p>
          ${
	item.location
		? `<p class="animated fadeInRightBig"><i class="joe-font joe-icon-dingwei"></i><span>${item.location}</span></p>`
		: ""
}
          <p class="animated fadeInRightBig"><i class="joe-font joe-icon-shijian"></i>${Utils.formatDate(
		item.takeTime
	)}</p>
        </div>
      </a>`,
					]);
				}, []);
				$domList.append(htmlArr.join(""));
			}
			// 文档：http://miromannino.github.io/Justified-Gallery/getting-started/
			$domList
				.justifiedGallery({
					rowHeight: 200,
					maxRowHeight: false,
					maxRowsCount: 0,
					sizeRangeSuffixes: {},
					lastRow: "nojustify",
					captions: false,
					waitThumbnailsLoad: true, //等待图片加载完，这样就可以根据图片比例展示，如果为false，则都是统一比例
					margins: ThemeConfig.photos_gap,
					extension: /\.(jpe?g|png|gif|bmp|webp)$/,
					cssAnimation: false,
				})
				.on("jg.complete", function (e) {
					// console.log("grid layout is complete");
					isFirst = false;
					isLoading = false;
				});
		};

		// 渲染Waterfall布局
		let $masonry_instance;
		const renderWaterfall = (data) => {
			if (!Masonry || !imagesLoaded) return;
			if (data) {
				data.forEach((item, index) => {
					const $item =
            $(`<a class="item masonry-item animated wow" style="margin-bottom:${
            	ThemeConfig.photos_gap || "10"
            }px" data-wow-diration="0.3s" data-wow-delay="0.${index}s" href="${
            	item.url
            }" data-fancybox="gallery" data-caption="${item.name || ""}">
      <img width="100%" height="100%" class="lazyload" rsrc="${
	ThemeConfig.photo_lazyload_img || ThemeConfig.LAZY_IMG
}" src="${item.thumbnail}" alt="${item.name || ""}"/>
      <span class="team" style="background-color:${Utils.getRandomColor(
		0.2,
		0.5
	)}">${item.team}</span>
      <p class="tit">${item.name}</p>
      <div class="info">
        <p class="animated fadeInRightBig"><i class="joe-font joe-icon-paizhao"></i><span>${
	item.name
}</span></p>
        ${
	item.location
		? `<p class="animated fadeInRightBig"><i class="joe-font joe-icon-dingwei"></i><span>${item.location}</span></p>`
		: ""
}
        <p class="animated fadeInRightBig"><i class="joe-font joe-icon-shijian"></i>${Utils.formatDate(
		item.takeTime
	)}</p>
      </div>
    </a>`);
					$domList.append($item);
					// add and layout newly appended items
					$masonry_instance &&
            $masonry_instance.append($item).masonry("appended", $item);
				});
			}
			// 文档：https://masonry.desandro.com/
			$domList.imagesLoaded(function () {
				$masonry_instance = $domList.masonry({
					itemSelector: ".masonry-item",
					columnWidth: ThemeConfig.photos_gap,
					gutter: ThemeConfig.photos_gap,
					horizontalOrder: true,
					percentPosition: true,
					initLayout: true,
					fitWidth: true,
					resize: true,
					transitionDuration: "0.2s",
				});
				$masonry_instance.masonry("on", "layoutComplete", function () {
					console.log("waterfall layout is complete");
					isFirst = false;
					isLoading = false;
				});
				// $masonry_instance.imagesLoaded().progress(function () {
				//   $masonry_instance.masonry("layout");
				// });
			});
		};

		/* 渲染列表 */
		const renderList = (data) => {
			curLayout === "grid" ? renderGrid(data) : renderWaterfall(data);
			isFirst && photosContext.initEffect(curLayout);
		};

		/* 获取相册数据 */
		const getData = (param) => {
			return new Promise((resolve, reject) => {
				isLoading = true;
				$domLoading.show();
				const params = { ...queryData, ...(param || {}) };
				params.team === "" ? delete params.team : null;

				Utils.request({
					url: "/api/content/photos",
					method: "GET",
					data: params,
				})
					.then((res) => {
						const resD = res.content || [];
						if (resD.length === 0) {
							if (params.page === 0) {
								$domList.hide();
								$domEmpty.removeClass("hide");
							}
						} else {
							renderList(resD);
							$domEmpty.addClass("hide");
							$domList.show();
							if (!res.isLast) {
								$domEmpty.addClass("hide");
								// return Qmsg.warning("没有更多内容了");
							} else {
								isEnd = true;
							}
						}
						$domLoading.hide();
						$domList.show();
						listData = params.page > 0 ? listData.concat(resD) : resD;
						resolve(resD);
					})
					.catch((err) => {
						$domLoading.hide();
						$domEmpty.removeClass("hide");
						isLoading = false;
						reject(err);
					});
			});
		};

		// 重置列表
		const reset = (param) => {
			$domList.empty().hide();
			isFirst = true;
			isEnd = false;
			isLoading = false;
			queryData.page = 0;
			getData(param);
		};

		getData();

		// 滚动加载
		window.addEventListener(
			"scroll",
			Utils.throttle(function () {
				if (
					$(window).scrollTop() + $(window).height() >=
          $(".page-photos").height()
				) {
					if (isLoading || isEnd) return;
					// console.log("需要加载了");
					queryData.page++;
					getData({
						team: $(".joe_photos__filter li.active").attr("data-filter"),
						size: 10
					});
				}
			})
		);

		// 加载更多
		$domLoading.on("click", function (e) {
			e.stopPropagation();
			if ($(this).attr("loading")) return;
			queryData.page++;
			getData({
				team: $(".joe_photos__filter li.active").attr("data-filter"),
			});
		});

		// 分组过滤
		$(".joe_photos__filter li").on("click", function (e) {
			e.stopPropagation();
			const $this = $(this);
			if ($this.hasClass("active")) return;
			$this.addClass("active").siblings("li").removeClass("active");
			reset({ team: $this.attr("data-filter") });
		});

		// 布局切换
		$(".joe_photos__layout-switch i").on("click", function (e) {
			e.stopPropagation();
			const $this = $(this);
			if ($this.hasClass("active")) return;
			curLayout = $this.attr("data-type");
			$this.addClass("active").siblings("i").removeClass("active");
			$masonry_instance = null;
			$domList
				.attr({ class: "", style: "" })
				.attr("class", "joe_photos__gallery " + curLayout);
			reset({ team: $(".joe_photos__filter li.active").attr("data-filter") });
		});
	},
};

document.addEventListener("DOMContentLoaded", function () {
	photosContext.initList();
});
