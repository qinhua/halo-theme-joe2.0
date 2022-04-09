/**留言页逻辑 */
const leavingContext = {
	/* 获取留言板数据 */
	getData() {
		const sheetId = $(".joe_detail__title").attr("data-sheetid");
		const $leavingList = $(".joe_leaving-list");
		const $leavingNone = $(".joe_leaving-none");
		const $leavingLoading = $(".joe_loading");

		Utils.request({
			url: `/api/content/sheets/${sheetId}/comments/top_view`,
			method: "GET",
			data: {
				page: 0,
				// size: ThemeConfig.leaving_card_max,
				sort: "createTime,desc",
			},
		})
			.then((res) => {
				if (res.total) {
					const str = res.content.reduce((sum, item) => {
						if (item.content.trim()) {
							// 渲染留言中的 emoji
							const markedHtml = marked(item.content)
								.replace(/<img\ssrc[^>]*>/gm, "[图片内容]")
								.replace(/bili\//g, "bili/hd/ic_emoji_");
							const emoji = Utils.renderedEmojiHtml(markedHtml);
							item.content = Utils.return2Br(emoji);
						}
						const avatar = `${
							ThemeConfig.gravatar_source || ThemeConfig.gravatar_source_url
						}/${item.gravatarMd5}?s=256&d=${ThemeConfig.gravatar_type}`;
						return (sum += `<li class="item">
            <div class="user">
                <img class="avatar lazyload" src="${
							ThemeConfig.lazyload_avatar
							}" data-src="${avatar}" alt="用户头像" onerror="Joe.errorImg(this,${
								ThemeConfig.comment_avatar_error
							})"/>
                <div class="nickname">${item.author}</div>
                <div class="date">${new Date(
								item.createTime
							).toLocaleDateString()}</div>
            </div>
            <div class="wrapper">
                <div class="content leaving-content">${item.content}</div>
            </div>
        </li>`);
					}, "");
					$leavingList.html(str);
					leavingContext.randomColor();
				} else {
					$leavingList.hide();
					$leavingNone.show();
				}
				$leavingLoading && $leavingLoading.hide();
			})
			.catch((_err) => {
				$leavingLoading && $leavingLoading.hide();
				$leavingList.hide();
				$leavingNone.show();
			});
	},
	// /* 设置标题 */
	// setTitleText() {
	// 	if (
	// 		!ThemeConfig.leaving_title ||
	//     ThemeConfig.leaving_title.trim() === "留言板"
	// 	)
	// 		return;
	// 	$(".joe_detail__title").text(ThemeConfig.leaving_title);
	// },
	/* 设置无数据文案 */
	setEmptyText() {
		if (
			!$(".joe_leaving-none.tpl").length ||
      !ThemeConfig.leaving_empty_text ||
      ThemeConfig.leaving_empty_text.trim() === "暂无留言，期待第一个脚印。"
		)
			return;
		$(".joe_leaving-none").text(ThemeConfig.leaving_empty_text);
	},
	/* 随机样式 */
	randomColor() {
		let _index = 100;
		const colors = [
			"#dcc10c",
			"#299bec",
			"#ea5455",
			"#7367f0",
			"#32ccbb",
			"#f6416c",
			"#28c76f",
			"#9f44d3",
			"#f55555",
			"#736efe",
			"#e96d71",
			"#de4313",
			"#d939cd",
			"#4c83ff",
			"#f072b6",
			"#c346c2",
			"#5961f9",
			"#fd6585",
			"#465efb",
			"#ffc600",
			"#fa742b",
			"#5151e5",
			"#bb4e75",
			"#e255cd",
			"#63c549",
			"#0ecdde",
			"#f067b4",
			"#f067b4",
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
		const $el = $(".joe_leaving-list");
		const maxWidth = $el.width();
		const maxHeight = $el.height();
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
		$(".joe_leaving-list .item").each((index, item) => {
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
	// leavingContext.setTitleText();
	leavingContext.setEmptyText();
	leavingContext.getData();
});
