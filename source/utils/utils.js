/**
 * 主题所用工具类
 */
class Emoji {
	constructor(name, description, category, style) {
		this.name = name;
		this.description = description;
		this.category = category;
		this.style = style;
		this.extension = ["tieba"].includes(category) ? "gif" : "png";
	}
}

const hahaEmoji = [
	new Emoji("kuxiao", "哭笑", "haha"),
	new Emoji("heng", "哼", "haha"),
	new Emoji("guzhang", "鼓掌", "haha"),
	new Emoji("haha", "哈哈", "haha"),
	new Emoji("aini", "爱你", "haha"),
	new Emoji("bazhang", "巴掌", "haha"),
	new Emoji("beishang", "悲伤", "haha"),
	new Emoji("han", "汗", "haha"),
	new Emoji("deyi", "得意", "haha"),
	new Emoji("ok", "ok", "haha"),
	new Emoji("touxiao", "偷笑", "haha"),
	new Emoji("wabikong", "挖鼻孔", "haha"),
	new Emoji("weiqu", "委屈", "haha"),
	new Emoji("weixiao", "微笑", "haha"),
	new Emoji("huaixiao", "坏笑", "haha"),
	new Emoji("woshou", "握手", "haha"),
	new Emoji("wulian", "捂脸", "haha"),
	new Emoji("xiaku", "吓哭", "haha"),
	new Emoji("xiaoku", "笑哭", "haha"),
	new Emoji("xixi", "嘻嘻", "haha"),
	new Emoji("qinqin", "亲亲", "haha"),
	new Emoji("qiwang", "期望", "haha"),
	new Emoji("chanzui", "馋嘴", "haha"),
	new Emoji("huaxin", "花心", "haha"),
	new Emoji("hufen", "互粉", "haha"),
	new Emoji("keai", "可爱", "haha"),
	new Emoji("kelian", "可怜", "haha"),
	new Emoji("bishi", "鄙视", "haha"),
	new Emoji("bizui", "闭嘴", "haha"),
	new Emoji("yep", "耶", "haha"),
	new Emoji("zan", "赞", "haha"),
	new Emoji("yihuo", "疑惑", "haha"),
	new Emoji("yinxiao", "阴笑", "haha"),
	new Emoji("yiwen", "疑问", "haha"),
	new Emoji("bujiandan", "不简单", "haha"),
	new Emoji("bye", "拜拜", "haha"),
	new Emoji("chigua", "吃瓜", "haha"),
	new Emoji("chijing", "吃惊", "haha"),
	new Emoji("chuitou", "锤头", "haha"),
	new Emoji("dahaqian", "打哈欠", "haha"),
	new Emoji("fahuo", "发火", "haha"),
	new Emoji("bang", "棒", "haha"),
	new Emoji("gou", "狗", "haha"),
	new Emoji("guolai", "过来", "haha"),
	new Emoji("haixiu", "害羞", "haha"),
	new Emoji("hashiiqi", "哈士奇", "haha"),
	new Emoji("heixian", "黑线", "haha"),
	new Emoji("kouzhao", "口罩", "haha"),
	new Emoji("kulou", "骷髅", "haha"),
	new Emoji("kun", "困", "haha"),
	new Emoji("landelini", "懒得理你", "haha"),
	new Emoji("mao", "猫", "haha"),
	new Emoji("outu", "呕吐", "haha"),
	new Emoji("qian", "钱", "haha"),
	new Emoji("quantou", "拳头", "haha"),
	new Emoji("shaoerbuyi", "少儿不宜", "haha"),
	new Emoji("shayan", "傻眼", "haha"),
	new Emoji("shengbing", "生病", "haha"),
	new Emoji("tushetou", "吐舌头", "haha"),
	new Emoji("shuijiao", "睡觉", "haha"),
	new Emoji("sikao", "思考", "haha"),
	new Emoji("shiwang", "失望", "haha"),
	new Emoji("taikaixin", "太开心", "haha"),
	new Emoji("tear", "流泪", "haha"),
	new Emoji("tianping", "舔屏", "haha"),
	new Emoji("xu", "嘘", "haha"),
	new Emoji("youhengheng", "右哼哼", "haha"),
	new Emoji("yun", "晕", "haha"),
	new Emoji("zhouma", "咒骂", "haha"),
	new Emoji("zhuakuang", "抓狂", "haha"),
	new Emoji("zuohengheng", "左哼哼", "haha"),
	new Emoji("zuoyi", "作揖", "haha"),
];

const bilibiliEmoji = [
	new Emoji("baiyan", "白眼", "bilibili", {
		"animation-duration": "1800ms",
		"animation-timing-function": "steps(45)",
		transform: "translateY(-1408px)",
		height: "1440px",
	}),
	new Emoji("fadai", "发呆", "bilibili", {
		"animation-duration": "1080ms",
		"animation-timing-function": "steps(27)",
		transform: "translateY(-832px)",
		height: "864px",
	}),
	new Emoji("koubi", "抠鼻", "bilibili", {
		"animation-duration": "1200ms",
		"animation-timing-function": "steps(30)",
		transform: "translateY(-928px)",
		height: "960px",
	}),
	new Emoji("qinqin", "亲亲", "bilibili", {
		"animation-duration": "280ms",
		"animation-timing-function": "steps(7)",
		transform: "translateY(-192px)",
		height: "224px",
	}),
	new Emoji("weiqu", "委屈", "bilibili", {
		"animation-duration": "800ms",
		"animation-timing-function": "steps(20)",
		transform: "translateY(-608px)",
		height: "640px",
	}),
	new Emoji("bishi", "鄙视", "bilibili", {
		"animation-duration": "360ms",
		"animation-timing-function": "steps(9)",
		transform: "translateY(-256px)",
		height: "288px",
	}),
	new Emoji("fanu", "发怒", "bilibili", {
		"animation-duration": "1320ms",
		"animation-timing-function": "steps(33)",
		transform: "translateY(-1024px)",
		height: "1056px",
	}),
	new Emoji("kun", "困", "bilibili", {
		"animation-duration": "1760ms",
		"animation-timing-function": "steps(44)",
		transform: "translateY(-1376px)",
		height: "1408px",
	}),
	new Emoji("se", "色", "bilibili", {
		"animation-duration": "400ms",
		"animation-timing-function": "steps(10)",
		transform: "translateY(-288px)",
		height: "320px",
	}),
	new Emoji("weixiao", "微笑", "bilibili", {
		"animation-duration": "800ms",
		"animation-timing-function": "steps(20)",
		transform: "translateY(-608px)",
		height: "640px",
	}),
	new Emoji("bizui", "闭嘴", "bilibili", {
		"animation-duration": "1240ms",
		"animation-timing-function": "steps(31)",
		transform: "translateY(-960px)",
		height: "992px",
	}),
	new Emoji("ganga", "尴尬", "bilibili", {
		"animation-duration": "1520ms",
		"animation-timing-function": "steps(38)",
		transform: "translateY(-1184px)",
		height: "1216px",
	}),
	new Emoji("lengmo", "冷漠", "bilibili", {
		"animation-duration": "40ms",
		"animation-timing-function": "steps(1)",
		transform: "translateY(-0px)",
		height: "32px",
	}),
	new Emoji("shengbing", "生病", "bilibili", {
		"animation-duration": "1400ms",
		"animation-timing-function": "steps(35)",
		transform: "translateY(-1088px)",
		height: "1120px",
	}),
	new Emoji("wunai", "无奈", "bilibili", {
		"animation-duration": "920ms",
		"animation-timing-function": "steps(23)",
		transform: "translateY(-704px)",
		height: "736px",
	}),
	new Emoji("chan", "馋", "bilibili", {
		"animation-duration": "1600ms",
		"animation-timing-function": "steps(40)",
		transform: "translateY(-1248px)",
		height: "1280px",
	}),
	new Emoji("guilian", "鬼脸", "bilibili", {
		"animation-duration": "40ms",
		"animation-timing-function": "steps(1)",
		transform: "translateY(-0px)",
		height: "32px",
	}),
	new Emoji("liubixue", "流鼻血", "bilibili", {
		"animation-duration": "1400ms",
		"animation-timing-function": "steps(35)",
		transform: "translateY(-1088px)",
		height: "1120px",
	}),
	new Emoji("shengqi", "生气", "bilibili", {
		"animation-duration": "440ms",
		"animation-timing-function": "steps(11)",
		transform: "translateY(-320px)",
		height: "352px",
	}),
	new Emoji("xiaoku", "笑哭", "bilibili", {
		"animation-duration": "600ms",
		"animation-timing-function": "steps(15)",
		transform: "translateY(-448px)",
		height: "480px",
	}),
	new Emoji("daku", "大哭", "bilibili", {
		"animation-duration": "320ms",
		"animation-timing-function": "steps(8)",
		transform: "translateY(-224px)",
		height: "256px",
	}),
	new Emoji("guzhang", "鼓掌", "bilibili", {
		"animation-duration": "680ms",
		"animation-timing-function": "steps(17)",
		transform: "translateY(-512px)",
		height: "544px",
	}),
	new Emoji("liuhan", "流汗", "bilibili", {
		"animation-duration": "1080ms",
		"animation-timing-function": "steps(27)",
		transform: "translateY(-832px)",
		height: "864px",
	}),
	new Emoji("shuizhao", "睡着", "bilibili", {
		"animation-duration": "960ms",
		"animation-timing-function": "steps(24)",
		transform: "translateY(-736px)",
		height: "768px",
	}),
	new Emoji("xieyanxiao", "斜眼笑", "bilibili", {
		"animation-duration": "320ms",
		"animation-timing-function": "steps(8)",
		transform: "translateY(-224px)",
		height: "256px",
	}),
	new Emoji("dalao", "大佬", "bilibili", {
		"animation-duration": "1320ms",
		"animation-timing-function": "steps(33)",
		transform: "translateY(-1024px)",
		height: "1056px",
	}),
	new Emoji("haixiu", "害羞", "bilibili", {
		"animation-duration": "1240ms",
		"animation-timing-function": "steps(31)",
		transform: "translateY(-960px))",
		height: "992px",
	}),
	new Emoji("liulei", "流泪", "bilibili", {
		"animation-duration": "40ms",
		"animation-timing-function": "steps(1)",
		transform: "translateY(-0px)",
		height: "32px",
	}),
	new Emoji("sikao", "思考", "bilibili", {
		"animation-duration": "1440ms",
		"animation-timing-function": "steps(36)",
		transform: "translateY(-1120px)",
		height: "1152px",
	}),
	new Emoji("yiwen", "疑问", "bilibili", {
		"animation-duration": "840ms",
		"animation-timing-function": "steps(21)",
		transform: "translateY(-640px)",
		height: "672px",
	}),
	new Emoji("dalian", "打脸", "bilibili", {
		"animation-duration": "1480ms",
		"animation-timing-function": "steps(37)",
		transform: "translateY(-1152px)",
		height: "1184px",
	}),
	new Emoji("heirenwenhao", "黑人问号", "bilibili", {
		"animation-duration": "1040ms",
		"animation-timing-function": "steps(26)",
		transform: "translateY(-800px)",
		height: "832px",
	}),
	new Emoji("miantian", "腼腆", "bilibili", {
		"animation-duration": "1120ms",
		"animation-timing-function": "steps(28)",
		transform: "translateY(-864px)",
		height: "896px",
	}),
	new Emoji("tiaokan", "调侃", "bilibili", {
		"animation-duration": "40ms",
		"animation-timing-function": "steps(1)",
		transform: "translateY(-0px)",
		height: "32px",
	}),
	new Emoji("yun", "晕", "bilibili", {
		"animation-duration": "480ms",
		"animation-timing-function": "steps(12)",
		transform: "translateY(-352px)",
		height: "384px",
	}),
	new Emoji("dianzan", "点赞", "bilibili", {
		"animation-duration": "800ms",
		"animation-timing-function": "steps(20)",
		transform: "translateY(-608px)",
		height: "640px",
	}),
	new Emoji("huaixiao", "坏笑", "bilibili", {
		"animation-duration": "1240ms",
		"animation-timing-function": "steps(31)",
		transform: "translateY(-960px)",
		height: "992px",
	}),
	new Emoji("mudengkoudai", "目瞪口呆", "bilibili", {
		"animation-duration": "40ms",
		"animation-timing-function": "steps(1)",
		transform: "translateY(-0px)",
		height: "32px",
	}),
	new Emoji("tiaopi", "调皮", "bilibili", {
		"animation-duration": "2000ms",
		"animation-timing-function": "steps(50)",
		transform: "translateY(-1568px)",
		height: "1600px",
	}),
	new Emoji("zaijian", "再见", "bilibili", {
		"animation-duration": "960ms",
		"animation-timing-function": "steps(24)",
		transform: "translateY(-736px)",
		height: "768px",
	}),
	new Emoji("doge", "狗头", "bilibili", {
		"animation-duration": "800ms",
		"animation-timing-function": "steps(20)",
		transform: "translateY(-608px)",
		height: "640px",
	}),
	new Emoji("jingxia", "惊吓", "bilibili", {
		"animation-duration": "1280ms",
		"animation-timing-function": "steps(32)",
		transform: "translateY(-992px)",
		height: "1024px",
	}),
	new Emoji("nanguo", "难过", "bilibili", {
		"animation-duration": "1120ms",
		"animation-timing-function": "steps(28)",
		transform: "translateY(-864px)",
		height: "896px",
	}),
	new Emoji("touxiao", "偷笑", "bilibili", {
		"animation-duration": "240ms",
		"animation-timing-function": "steps(6)",
		transform: "translateY(-160px)",
		height: "192px",
	}),
	new Emoji("zhoumei", "皱眉", "bilibili", {
		"animation-duration": "40ms",
		"animation-timing-function": "steps(1)",
		transform: "translateY(-0px)",
		height: "32px",
	}),
	new Emoji("facai", "发财", "bilibili", {
		"animation-duration": "1200ms",
		"animation-timing-function": "steps(30)",
		transform: "translateY(-928px)",
		height: "960px",
	}),
	new Emoji("keai", "可爱", "bilibili", {
		"animation-duration": "680ms",
		"animation-timing-function": "steps(17)",
		transform: "translateY(-512px)",
		height: "544px",
	}),
	new Emoji("outu", "呕吐", "bilibili", {
		"animation-duration": "1680ms",
		"animation-timing-function": "steps(42)",
		transform: "translateY(-1312px)",
		height: "1344px",
	}),
	new Emoji("tuxue", "吐血", "bilibili", {
		"animation-duration": "320ms",
		"animation-timing-function": "steps(8)",
		transform: "translateY(-224px)",
		height: "256px",
	}),
	new Emoji("zhuakuang", "抓狂", "bilibili", {
		"animation-duration": "760ms",
		"animation-timing-function": "steps(19)",
		transform: "translateY(-576px)",
		height: "608px",
	}),
];

const tiebaEmoji = [
	new Emoji("tongue", "吐舌", "tieba"),
	new Emoji("theblackline", "尴尬", "tieba"),
	new Emoji("tear", "大哭", "tieba"),
	new Emoji("surprised", "惊哭", "tieba"),
	new Emoji("surprised2", "惊讶", "tieba"),
	new Emoji("spray", "喷", "tieba"),
	new Emoji("spit", "呕吐", "tieba"),
	new Emoji("smilingeyes", "笑眼", "tieba"),
	new Emoji("shui", "睡觉", "tieba"),
	new Emoji("shame", "羞辱", "tieba"),
	new Emoji("se", "色", "tieba"),
	new Emoji("rmb", "钱", "tieba"),
	new Emoji("reluctantly", "勉强", "tieba"),
	new Emoji("rbq", "观望", "tieba"),
	new Emoji("niconiconi", "爱你", "tieba"),
	new Emoji("naive", "天真", "tieba"),
	new Emoji("ku", "酷", "tieba"),
	new Emoji("huaji", "滑稽", "tieba"),
	new Emoji("hu", "呼", "tieba"),
	new Emoji("han", "汗", "tieba"),
	new Emoji("haha", "哈哈", "tieba"),
	new Emoji("good", "棒", "tieba"),
	new Emoji("doubt", "疑惑", "tieba"),
	new Emoji("britan", "茶", "tieba"),
	new Emoji("bbd", "棒棒哒", "tieba"),
	new Emoji("awesome", "强", "tieba"),
	new Emoji("anger", "愤怒", "tieba"),
	new Emoji("aa", "啊啊", "tieba"),
	new Emoji("happy", "高兴", "tieba"),
	new Emoji("grievance", "郁闷", "tieba"),
];

const menheraEmoji = [
	new Emoji("(⌒▽⌒)", "(⌒▽⌒)", "menhera"),
	new Emoji("(￣▽￣)", "(￣▽￣)", "menhera"),
	new Emoji("(=・ω・=)", "(=・ω・=)", "menhera"),
	new Emoji("(｀・ω・´)", "(｀・ω・´)", "menhera"),
	new Emoji("(〜￣△￣)〜", "(〜￣△￣)〜", "menhera"),
	new Emoji("(･∀･)", "(･∀･)", "menhera"),
	new Emoji("(°∀°)ﾉ", "(°∀°)ﾉ", "menhera"),
	new Emoji("(￣3￣)", "(￣3￣)", "menhera"),
	new Emoji("╮(￣▽￣)╭", "╮(￣▽￣)╭", "menhera"),
	new Emoji("(´_ゝ｀)", "(´_ゝ｀)", "menhera"),
	new Emoji("←_←", "←_←", "menhera"),
	new Emoji("→_→", "→_→", "menhera"),
	new Emoji("(<_<)", "(<_<)", "menhera"),
	new Emoji("(>_>)", "(>_>)", "menhera"),
	new Emoji("(;¬_¬)", "(;¬_¬)", "menhera"),
	new Emoji("(▔□▔)/", "(▔□▔)/", "menhera"),
	new Emoji("(ﾟДﾟ≡ﾟдﾟ)!?", "(ﾟДﾟ≡ﾟдﾟ)!?", "menhera"),
	new Emoji("Σ(ﾟдﾟ;)", "Σ(ﾟдﾟ;)", "menhera"),
	new Emoji("Σ(￣□￣||)", "Σ(￣□￣||)", "menhera"),
	new Emoji("(’；ω；‘)", "(’；ω；‘)", "menhera"),
	new Emoji("（/TДT)/", "（/TДT)/", "menhera"),
	new Emoji("(^・ω・^ )", "(^・ω・^ )", "menhera"),
	new Emoji("(｡･ω･｡)", "(｡･ω･｡)", "menhera"),
	new Emoji("(●￣(ｴ)￣●)", "(●￣(ｴ)￣●)", "menhera"),
	new Emoji("ε=ε=(ノ≧∇≦)ノ", "ε=ε=(ノ≧∇≦)ノ", "menhera"),
	new Emoji("(’･_･‘)", "(’･_･‘)", "menhera"),
	new Emoji("(-_-#)", "(-_-#)", "menhera"),
	new Emoji("（￣へ￣）", "（￣へ￣）", "menhera"),
	new Emoji("(￣ε(#￣)Σ", "(￣ε(#￣)Σ", "menhera"),
	new Emoji("ヽ(‘Д’)ﾉ", "ヽ(‘Д’)ﾉ", "menhera"),
	new Emoji("（#-_-)┯━┯", "（#-_-)┯━┯", "menhera"),
	new Emoji("(╯°口°)╯(┴—┴", "(╯°口°)╯(┴—┴", "menhera"),
	new Emoji("←◡←", "←◡←", "menhera"),
	new Emoji("( ♥д♥)", "( ♥д♥)", "menhera"),
	new Emoji("_(:3」∠)_", "_(:3」∠)_", "menhera"),
	new Emoji("Σ>―(〃°ω°〃)♡→", "Σ>―(〃°ω°〃)♡→", "menhera"),
	new Emoji("⁄(⁄ ⁄•⁄ω⁄•⁄ ⁄)⁄", "⁄(⁄ ⁄•⁄ω⁄•⁄ ⁄)⁄", "menhera"),
	new Emoji("(╬ﾟдﾟ)▄︻┻┳═一", "(╬ﾟдﾟ)▄︻┻┳═一", "menhera"),
	new Emoji("･*･:≡(　ε:)", "･*･:≡(　ε:)", "menhera"),
	new Emoji("(笑)", "(笑)", "menhera"),
	new Emoji("(汗)", "(汗)", "menhera"),
	new Emoji("(泣)", "(泣)", "menhera"),
	new Emoji("(苦笑)", "(苦笑)", "menhera"),
];

const emojiData = [
	...hahaEmoji,
	...bilibiliEmoji,
	...tiebaEmoji,
	...menheraEmoji,
];

var Utils = {
	_version: "1.0.0",
	/**
   * 是否移动设备
   */
	isMobile() {
		if (
			navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/webOS/i) ||
      navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/iPad/i) ||
      navigator.userAgent.match(/iPod/i) ||
      navigator.userAgent.match(/BlackBerry/i) ||
      navigator.userAgent.match(/Windows Phone/i)
		)
			return true;
		return false;
	},
	/**
   * time ago
   * @param {*} time
   */
	timeAgo(time) {
		if (!time) return "未知时间";
		time = new Date(time).getTime();
		var currentTime = new Date().getTime();
		var between = currentTime - time;
		var days = Math.floor(between / (24 * 3600 * 1000));
		if (days === 0) {
			var leave1 = between % (24 * 3600 * 1000);
			var hours = Math.floor(leave1 / (3600 * 1000));
			if (hours === 0) {
				var leave2 = leave1 % (3600 * 1000);
				var minutes = Math.floor(leave2 / (60 * 1000));
				if (minutes === 0) {
					var leave3 = leave2 % (60 * 1000);
					var seconds = Math.round(leave3 / 1000);
					if (seconds < 1) return "刚刚";
					return seconds + " 秒前";
				}
				return minutes + " 分钟前";
			}
			// return Utils.formatDate(time, "今天 hh:mm");
			return hours + " 小时前";
		}
		if (days < 0) return "刚刚";
		// if (days < 1) {
		//   return days + " 天前";
		// } else {
		//   return Utils.formatDate(time, "yyyy年MM月dd日 hh:mm");
		// }
		if (days === 1) {
			return "昨天";
		} else {
			return Utils.formatDate(time, "yyyy年MM月dd日 hh:mm");
		}
	},
	/**
   * 时间格式化
   * @param {*} time
   */
	formatDate(date, fmt = "yyyy-MM-dd") {
		date = new Date(date);
		if (/(y+)/.test(fmt)) {
			fmt = fmt.replace(
				RegExp.$1,
				(date.getFullYear() + "").substr(4 - RegExp.$1.length)
			);
		}
		let o = {
			"M+": date.getMonth() + 1,
			"d+": date.getDate(),
			"h+": date.getHours(),
			"m+": date.getMinutes(),
			"s+": date.getSeconds(),
		};
		for (let k in o) {
			if (new RegExp(`(${k})`).test(fmt)) {
				let str = o[k] + "";
				fmt = fmt.replace(
					RegExp.$1,
					RegExp.$1.length === 1 ? str : str.padStart(2, "0")
				);
			}
		}
		return fmt;
	},
	/**
   * 获取当前浏览器语言
   * 使用当前方法，只会得到语言前两个字符
   * @return zh、cn 等
   */
	getNavLangSub() {
		var currentLang = navigator.language;
		// 只获取前两个字符
		currentLang = currentLang.substr(0, 2);
		//判断IE浏览器使用语言
		if (!currentLang) {
			currentLang = navigator.browserLanguage;
		}
		return currentLang;
	},
	/* 获取URL中带的链接参数
   * @param search 链接后缀
   * @return {{}} 对象
   */
	getUrlParams() {
		var search = location.search;

		// 判断是否为字符串类型
		if (typeof search !== "string") {
			search = search.toString();
		}

		var paramsSplit = search.replace(/^[^\?]*\?/i, "").split(/&/);
		var params = {};

		// 数据为空
		if (paramsSplit.length < 1) {
			return params;
		}

		if (Array.isArray(paramsSplit)) {
			paramsSplit.forEach(function (item) {
				// 数据为空, 退出方法
				if (!item) {
					return false;
				}
				var itemSplit = item.split(/=/);

				// 判断字符串中是否有多个=
				if (itemSplit.length >= 2) {
					// 是
					var key = itemSplit.splice(0, 1);
					params[key] = itemSplit.join("=");
				}
			});
		}
		return params;
	},
	/* 请求封装 */
	request({
		url = "",
		method = "GET",
		data,
		headers = {},
		timeout = 10000,
		returnRaw = false,
	}) {
		return new Promise((resolve, reject) => {
			method = method.toUpperCase();
			$.ajax({
				url: `${url}${method === "GET" ? `${url.indexOf("?")===-1?"?":"&"}_r=${Date.now()}` : ""}`,
				type: method,
				headers: {
					"API-Authorization": ThemeConfig.access_key || "joe2.0",
					...headers,
				},
				async: true,
				dataType: "json",
				timeout,
				data,
				success(res) {
					if (returnRaw) {
						resolve(res);
					} else {
						if (res.status === 200) {
							resolve(res.data || "");
						} else {
							reject(res);
						}
					}
				},
				error(err) {
					const errMsg = err
						? err.responseJSON
							? err.responseJSON.message
							: "出错了！"
						: "出错了！";
					Qmsg.error(errMsg);
					reject(errMsg);
				},
			});
		});
	},
	/* throttle */
	throttle(fn, threshold = 250) {
		let timer;
		let last;
		return function () {
			const context = this;
			const args = [...arguments];
			const now = Date.now();
			if (last && last + threshold > now) {
				clearTimeout(timer);
				timer = null;
				timer = setTimeout(() => {
					last = now;
					fn.apply(context, args);
				}, threshold);
			} else {
				last = now;
				fn.apply(context, args);
			}
		};
	},
	/* sleep */
	sleep(ms = 250) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	},
	/**
   * 存储数据到浏览器的 cookie 内
   * 不建议向 cookie 内存入大量数据，如果有大数据需求的话
   * 或许可以考虑 {@link Util#setLocalStorageByJSON}
   * @param {String} key 需要存储的 key
   * @param {String} value 需要存储在 cookie 内的值
   * @param {Number} days 存储时间。单位/天。不输入则为永久存储
   */
	setCookie(key, value, days) {
		var keyVE = key + Utils._version,
			expires = "";
		if (days) {
			var date = new Date();
			date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
			expires = "; expires=" + date.toUTCString();
		}
		document.cookie = keyVE + "=" + (value || "") + expires + "; path=/";
	},

	/**
   * 获取存储在浏览器 cookie 内的数据
   * @param {String} key
   * @return 如果没能获取到数据，则返回 null。否则，返回目标数据字符串
   */
	getCookie(key) {
		var keyVE = key + Utils._version + "=";
		var ca = document.cookie.split(";");

		for (var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == " ") c = c.substring(1, c.length);
			if (c.indexOf(keyVE) == 0) return c.substring(keyVE.length, c.length);
		}

		return null;
	},

	/**
   * 删除存储在浏览器 cookie 内的数据
   * @param {String} key 需要删除的 key
   */
	removeCookie(key) {
		var keyVE = key + Utils._version + "=";

		document.cookie = keyVE + "=; Max-Age=-99999999;";
	},

	/**
   * 存储 JSON 数据到浏览器的 localstorage 里
   * 当前方法不支持永久存储
   * @param {String} key 需要存储的 key
   * @param {JSON} value 需要存储的JSON数据
   * @param {Number} expires 存储时间。单位/秒。【默认 3600秒（一小时）】
   */
	setLocalStorage(key, value, expires = 3600) {
		var keyVE = key + Utils._version;
		var date = new Date();

		try {
			localStorage.setItem(
				keyVE,
				JSON.stringify({
					expires: date.valueOf() + expires * 1000,
					data: value,
				})
			);
		} catch (e) {
			if (e.name === "QuotaExceededError") {
				console.log("数据已满，自动清空");
				localStorage.clear();
				setLocalStorage(key, value, expires);
			}
		}
	},

	/**
   * 根据 key 获取存储在 localstorage 内的 JSON 数据【KEY 会自动加上 util 的版本号】
   * @param {String} key 需要读取数据的 key
   * @return 返回 JSON 格式的数据，如果不存在或者过期了，则返回 null
   */
	getLocalStorage(key) {
		var keyVE = key + Utils._version;

		var result = JSON.parse(localStorage.getItem(keyVE));
		var date = new Date();
		if (result && result.expires > date) {
			return result.data;
		} else {
			localStorage.removeItem(keyVE);
			return null;
		}
	},

	/**
   * 删除保存在 localStorage 中的数据
   * @param {*} key 需要删除的 key【会自动加上 util 的版本号】
   */
	removeLocalStorage(key) {
		var keyVE = key + Utils._version;

		localStorage.removeItem(keyVE);
	},

	/**
   * 异步加载 JS
   * @param {*} url 需要加载 JS 地址
   * @param {*} callback 加载完成回调
   */
	loadJS(url, callback) {
		Utils._loadRes("script", url, callback);
	},

	/**
   * 异步加载 CSS
   * @param {*} url 需要加载的 CSS 地址
   * @param {*} callback 加载完成回调
   */
	loadCSS(url, callback) {
		Utils._loadRes("link", url, callback);
	},

	/**
   * 异步加载资源 *私有方法（不建议直接调用）*
   * @param {*} type 当前需要加载的资源类型
   * @param {*} url 资源 链接地址
   * @param {*} callback 加载完成回调函数
   */
	_loadRes(type, url, callback) {
		var dom,
			fn = callback || function () {};
		switch (type) {
		case "script":
			dom = document.createElement(type);
			dom.type = "text/javascript";
			dom.src = url;
			break;
		case "link":
			dom = document.createElement(type);
			dom.type = "text/css";
			dom.type = "stylesheet";
			dom.href = url;
			break;
		default:
			console.warn("暂不支持：" + type + " 类型");
			return;
		}
		//IE
		if (dom.readyState) {
			dom.onreadystatechange = function () {
				if (dom.readyState == "loaded" || dom.readyState == "complete") {
					dom.onreadystatechange = null;
					fn();
				}
			};
		} else {
			//其他浏览器
			dom.onload = function () {
				fn();
			};
		}

		var head = document.getElementsByTagName("head")[0];
		head.appendChild(dom);
	},

	/**
   * 获取随机颜色值
   * 当获取的值越小，色调越偏冷
   * @param {Number} min 色调值，0 - 1 之间的值
   * @param {Number} max 色调值，需要大于min且为0 - 1之间的值
   */
	getRandomColor(min = 0, max = 1) {
		if (!min) {
			min = 0;
		}
		if (!max) {
			max = 0;
		}
		min = isNaN(min) ? 0 : Number(min);
		max = isNaN(max) ? 1 : Number(max);
		min = Math.min(Math.max(Math.abs(min), 0), 1);
		max = Math.min(Math.max(Math.abs(max), 0), 1);
		max = max < min ? 1 : max;
		return (
			"#" +
      (function (h) {
      	return new Array(7 - h.length).join("0") + h;
      })((((Math.random() * (max - min) + min) * 0x1000000) << 0).toString(16))
		);
	},
	/**
   * 删除元素的 class，可根据前缀来删除
   * @param {*} el 需要删除的 dom 元素
   * @param {*} prefix 需要删除的 class，可以仅为前缀
   */
	removeClassByPrefix(el, prefix) {
		const classes = el.className.split(" ").filter(function (c) {
			return c.lastIndexOf(prefix, 0) !== 0;
		});

		el.className = classes.join(" ").trim();
	},
	/**
   * 渲染表情包
   */
	renderedEmojiHtml(html) {
		const parser = new DOMParser();
		const doc = Utils.removeNotEmoji(parser.parseFromString(html, "text/html"));
		// const emotions = doc.getElementsByClassName("emoji-animate");
		// for (let i = 0; i < emotions.length; i++) {
		// 	const emojiName = emotions[i].getAttribute("data-icon");
		// 	for (let j = 0; j < emojiData.length; j++) {
		// 		const emoji = emojiData[j];
		// 		if (emoji.style && emoji.name === emojiName) {
		// 			const emoji = emojiData[j];
		// 			const img = emotions[i].getElementsByClassName("img")[0];
		// 			let dataStyle = "";
		// 			Object.keys(emoji.style).forEach(function (item) {
		// 				dataStyle += item + ":" + emoji.style[item] + ";";
		// 			});
		// 			img.style.cssText = dataStyle;
		// 			break;
		// 		}
		// 	}
		// }
		return doc.body.innerHTML;
	},
	trimTailBr(str) {
		return str.replace(/((\s|&nbsp;)*\r?\n)+$/g, "");
	},
	limitBr(str) {
		// return str.replace(/((\s|&nbsp;)*\r?\n){3,}/g, "\r\n\r\n");
		return str.replace(/((\s|&nbsp;)*\r?\n){3,}/g, "");
	},
	trimHeadBr(str) {
		return str.replace(/^((\s|&nbsp;)*\r?\n)+/g, "");
	},
	/**
   * 判断需要渲染的 HTML 是否属于表情包，如果不属于，则去除此 HTML，仅保留文字
   */
	removeNotEmoji(doc) {
		const smilies = doc.getElementsByClassName("emoji-img");
		let skip = true;

		for (let i = 0; i < smilies.length; i++) {
			const name = smilies[i].dataset.icon;

			if (!Utils.findEmoji("tieba", name) && !Utils.findEmoji("haha", name)) {
				skip = false;
				break;
			}
		}

		if (skip) {
			return doc;
		}

		const firstNode = smilies[0];
		const name = firstNode.dataset.icon;

		if (!Utils.findEmoji("tieba", name) && !Utils.findEmoji("haha", name)) {
			Utils.removeNode(firstNode);
		}

		return Utils.removeNotEmoji(doc);
	},
	removeNode(node) {
		const alt = node.getAttribute("alt");
		const textNode = document.createTextNode(alt);
		node.parentNode.replaceChild(textNode, node);
	},
	/**
   * 根据条件查找表情
   * @param {*} type
   * @param {*} name
   * @returns 返回 true 则表示表情存在，返回 false 则表示不存在
   */
	findEmoji(type, name) {
		return (
			emojiData.filter((item) => item.category === type && item.name === name)
				.length > 0
		);
	},
	return2Br(str) {
		str = Utils.trimHeadBr(str);
		str = Utils.trimTailBr(str);
		str = Utils.limitBr(str);
		// return str.replace(/\r?\n/g, "<br />");
		return str;
	},
};

window.Utils = Utils;
