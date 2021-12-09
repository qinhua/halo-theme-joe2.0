/**归档页逻辑 */
const archivesContext = {
	/* 内容折叠/展开 */
	initExpander() {
		$(".joe_archives-timelist .panel").on("click", function (e) {
			e.stopPropagation();
			const $this = $(this);
			const $titleHeight = $this.outerHeight();
			const $conHeight = $this.next(".panel-body").outerHeight();
			const $wrapper = $this.parent();
			if ($this.hasClass("in")) {
				$this.removeClass("in");
				$wrapper.height($titleHeight + "px");
			} else {
				$this.addClass("in");
				$wrapper.height(`${$titleHeight + $conHeight}px`);
			}
		});
	},
};

document.addEventListener("DOMContentLoaded", function () {
	archivesContext.initExpander();
});
