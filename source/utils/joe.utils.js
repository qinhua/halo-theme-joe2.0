/**
 * 主题所用工具类
 */
class Emoji {
	constructor(name, description, category, style) {
		this.name = name;
		this.description = description;
		this.category = category;
		this.style = style;
	}
}

const bilibiliEmoji = [
	new Emoji("baiyan", "白眼", "bilibili", {"animation-duration": "1800ms", "animation-timing-function": "steps(45)", "transform": "translateY(-1408px)", "height": "1440px"}),
	new Emoji("fadai", "发呆", "bilibili", {"animation-duration": "1080ms", "animation-timing-function": "steps(27)", "transform": "translateY(-832px)", "height": "864px"}),
	new Emoji("koubi", "抠鼻", "bilibili", {"animation-duration": "1200ms", "animation-timing-function": "steps(30)", "transform": "translateY(-928px)", "height": "960px"}),
	new Emoji("qinqin", "亲亲", "bilibili", {"animation-duration": "280ms", "animation-timing-function": "steps(7)", "transform": "translateY(-192px)", "height": "224px"}),
	new Emoji("weiqu", "委屈", "bilibili", {"animation-duration": "800ms", "animation-timing-function": "steps(20)", "transform": "translateY(-608px)", "height": "640px"}),
	new Emoji("bishi", "鄙视", "bilibili", {"animation-duration": "360ms", "animation-timing-function": "steps(9)", "transform": "translateY(-256px)", "height": "288px"}),
	new Emoji("fanu", "发怒", "bilibili", {"animation-duration": "1320ms", "animation-timing-function": "steps(33)", "transform": "translateY(-1024px)", "height": "1056px"}),
	new Emoji("kun", "困", "bilibili", {"animation-duration": "1760ms", "animation-timing-function": "steps(44)", "transform": "translateY(-1376px)", "height": "1408px"}),
	new Emoji("se", "色", "bilibili", {"animation-duration": "400ms", "animation-timing-function": "steps(10)", "transform": "translateY(-288px)", "height": "320px"}),
	new Emoji("weixiao", "微笑", "bilibili", {"animation-duration": "800ms", "animation-timing-function": "steps(20)", "transform": "translateY(-608px)", "height": "640px"}),
	new Emoji("bizui", "闭嘴", "bilibili", {"animation-duration": "1240ms", "animation-timing-function": "steps(31)", "transform": "translateY(-960px)", "height": "992px"}),
	new Emoji("ganga", "尴尬", "bilibili", {"animation-duration": "1520ms", "animation-timing-function": "steps(38)", "transform": "translateY(-1184px)", "height": "1216px"}),
	new Emoji("lengmo", "冷漠", "bilibili", {"animation-duration": "40ms", "animation-timing-function": "steps(1)", "transform": "translateY(-0px)", "height": "32px"}),
	new Emoji("shengbing", "生病", "bilibili", {"animation-duration": "1400ms", "animation-timing-function": "steps(35)", "transform": "translateY(-1088px)", "height": "1120px"}),
	new Emoji("wunai", "无奈", "bilibili", {"animation-duration": "920ms", "animation-timing-function": "steps(23)", "transform": "translateY(-704px)", "height": "736px"}),
	new Emoji("chan", "馋", "bilibili", {"animation-duration": "1600ms", "animation-timing-function": "steps(40)", "transform": "translateY(-1248px)", "height": "1280px"}),
	new Emoji("guilian", "鬼脸", "bilibili", {"animation-duration": "40ms", "animation-timing-function": "steps(1)", "transform": "translateY(-0px)", "height": "32px"}),
	new Emoji("liubixue", "流鼻血", "bilibili", {"animation-duration": "1400ms", "animation-timing-function": "steps(35)", "transform": "translateY(-1088px)", "height": "1120px"}),
	new Emoji("shengqi", "生气", "bilibili", {"animation-duration": "440ms", "animation-timing-function": "steps(11)", "transform": "translateY(-320px)", "height": "352px"}),
	new Emoji("xiaoku", "笑哭", "bilibili", {"animation-duration": "600ms", "animation-timing-function": "steps(15)", "transform": "translateY(-448px)", "height": "480px"}),
	new Emoji("daku", "大哭", "bilibili", {"animation-duration": "320ms", "animation-timing-function": "steps(8)", "transform": "translateY(-224px)", "height": "256px"}),
	new Emoji("guzhang", "鼓掌", "bilibili", {"animation-duration": "680ms", "animation-timing-function": "steps(17)", "transform": "translateY(-512px)", "height": "544px"}),
	new Emoji("liuhan", "流汗", "bilibili", {"animation-duration": "1080ms", "animation-timing-function": "steps(27)", "transform": "translateY(-832px)", "height": "864px"}),
	new Emoji("shuizhao", "睡着", "bilibili", {"animation-duration": "960ms", "animation-timing-function": "steps(24)", "transform": "translateY(-736px)", "height": "768px"}),
	new Emoji("xieyanxiao", "斜眼笑", "bilibili", {"animation-duration": "320ms", "animation-timing-function": "steps(8)", "transform": "translateY(-224px)", "height": "256px"}),
	new Emoji("dalao", "大佬", "bilibili", {"animation-duration": "1320ms", "animation-timing-function": "steps(33)", "transform": "translateY(-1024px)", "height": "1056px"}),
	new Emoji("haixiu", "害羞", "bilibili", {"animation-duration": "1240ms", "animation-timing-function": "steps(31)", "transform": "translateY(-960px))", "height": "992px"}),
	new Emoji("liulei", "流泪", "bilibili", {"animation-duration": "40ms", "animation-timing-function": "steps(1)", "transform": "translateY(-0px)", "height": "32px"}),
	new Emoji("sikao", "思考", "bilibili", {"animation-duration": "1440ms", "animation-timing-function": "steps(36)", "transform": "translateY(-1120px)", "height": "1152px"}),
	new Emoji("yiwen", "疑问", "bilibili", {"animation-duration": "840ms", "animation-timing-function": "steps(21)", "transform": "translateY(-640px)", "height": "672px"}),
	new Emoji("dalian", "打脸", "bilibili", {"animation-duration": "1480ms", "animation-timing-function": "steps(37)", "transform": "translateY(-1152px)", "height": "1184px"}),
	new Emoji("heirenwenhao", "黑人问号", "bilibili", {"animation-duration": "1040ms", "animation-timing-function": "steps(26)", "transform": "translateY(-800px)", "height": "832px"}),
	new Emoji("miantian", "腼腆", "bilibili", {"animation-duration": "1120ms", "animation-timing-function": "steps(28)", "transform": "translateY(-864px)", "height": "896px"}),
	new Emoji("tiaokan", "调侃", "bilibili", {"animation-duration": "40ms", "animation-timing-function": "steps(1)", "transform": "translateY(-0px)", "height": "32px"}),
	new Emoji("yun", "晕", "bilibili", {"animation-duration": "480ms", "animation-timing-function": "steps(12)", "transform": "translateY(-352px)", "height": "384px"}),
	new Emoji("dianzan", "点赞", "bilibili", {"animation-duration": "800ms", "animation-timing-function": "steps(20)", "transform": "translateY(-608px)", "height": "640px"}),
	new Emoji("huaixiao", "坏笑", "bilibili", {"animation-duration": "1240ms", "animation-timing-function": "steps(31)", "transform": "translateY(-960px)", "height": "992px"}),
	new Emoji("mudengkoudai", "目瞪口呆", "bilibili", {"animation-duration": "40ms", "animation-timing-function": "steps(1)", "transform": "translateY(-0px)", "height": "32px"}),
	new Emoji("tiaopi", "调皮", "bilibili", {"animation-duration": "2000ms", "animation-timing-function": "steps(50)", "transform": "translateY(-1568px)", "height": "1600px"}),
	new Emoji("zaijian", "再见", "bilibili", {"animation-duration": "960ms", "animation-timing-function": "steps(24)", "transform": "translateY(-736px)", "height": "768px"}),
	new Emoji("doge", "狗头", "bilibili", {"animation-duration": "800ms", "animation-timing-function": "steps(20)", "transform": "translateY(-608px)", "height": "640px"}),
	new Emoji("jingxia", "惊吓", "bilibili", {"animation-duration": "1280ms", "animation-timing-function": "steps(32)", "transform": "translateY(-992px)", "height": "1024px"}),
	new Emoji("nanguo", "难过", "bilibili", {"animation-duration": "1120ms", "animation-timing-function": "steps(28)", "transform": "translateY(-864px)", "height": "896px"}),
	new Emoji("touxiao", "偷笑", "bilibili", {"animation-duration": "240ms", "animation-timing-function": "steps(6)", "transform": "translateY(-160px)", "height": "192px"}),
	new Emoji("zhoumei", "皱眉", "bilibili", {"animation-duration": "40ms", "animation-timing-function": "steps(1)", "transform": "translateY(-0px)", "height": "32px"}),
	new Emoji("facai", "发财", "bilibili", {"animation-duration": "1200ms", "animation-timing-function": "steps(30)", "transform": "translateY(-928px)", "height": "960px"}),
	new Emoji("keai", "可爱", "bilibili", {"animation-duration": "680ms", "animation-timing-function": "steps(17)", "transform": "translateY(-512px)", "height": "544px"}),
	new Emoji("outu", "呕吐", "bilibili", {"animation-duration": "1680ms", "animation-timing-function": "steps(42)", "transform": "translateY(-1312px)", "height": "1344px"}),
	new Emoji("tuxue", "吐血", "bilibili", {"animation-duration": "320ms", "animation-timing-function": "steps(8)", "transform": "translateY(-224px)", "height": "256px"}),
	new Emoji("zhuakuang", "抓狂", "bilibili", {"animation-duration": "760ms", "animation-timing-function": "steps(19)", "transform": "translateY(-576px)", "height": "608px"}),
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

const tiebaEmoji = [
	new Emoji("tongue", "吐舌", "tieba"),
	new Emoji("theblackline", "尴尬", "tieba"),
	new Emoji("tear", "大哭", "tieba"),
	new Emoji("surprised", "惊哭", "tieba"),
	new Emoji("surprised2", "惊讶", "tieba"),
	new Emoji("spray", "喷", "tieba"),
	new Emoji("spit", "呕吐", "tieba"),
	new Emoji("smilingeyes", "笑眼", "tieba"),
	new Emoji("shui", "睡", "tieba"),
	new Emoji("shame", "羞辱", "tieba"),
	new Emoji("se", "色", "tieba"),
	new Emoji("rmb", "钱", "tieba"),
	new Emoji("reluctantly", "勉强", "tieba"),
	new Emoji("rbq", "观望", "tieba"),
	new Emoji("niconiconit", "niconiconit", "tieba"),
	new Emoji("niconiconi", "niconiconi", "tieba"),
	new Emoji("niconiconi_t", "niconiconi-t", "tieba"),
	new Emoji("naive", "naive", "tieba"),
	new Emoji("ku", "ku", "tieba"),
	new Emoji("huaji", "huaji", "tieba"),
	new Emoji("hu", "hu", "tieba"),
	new Emoji("han", "han", "tieba"),
	new Emoji("haha", "haha", "tieba"),
	new Emoji("good", "good", "tieba"),
	new Emoji("doubt", "doubt", "tieba"),
	new Emoji("britan", "britan", "tieba"),
	new Emoji("bbd", "bbd", "tieba"),
	new Emoji("awesome", "awesome", "tieba"),
	new Emoji("anger", "anger", "tieba"),
	new Emoji("aa", "aa", "tieba"),
	new Emoji("Happy", "Happy", "tieba"),
	new Emoji("Grievance", "Grievance", "tieba"),
];

const emojiData = [...bilibiliEmoji, ...menheraEmoji, ...tiebaEmoji];

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
	/* 请求封装 */
	request(url, method = "GET", data) {
		return new Promise((resolve, reject) => {
			$.ajax({
				url: `${url}?_r=${Date.now()}`,
				type: method.toUpperCase(),
				headers: {
					"API-Authorization": ThemeConfig.access_key || "joe2.0",
				},
				dataType: "json",
				timeout: 10000,
				data,
				success(res) {
					if (res.status === 200 && res.data) {
						resolve(res.data);
					} else {
						reject(res);
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
   * 关键帧搜索
   * @param {*} keyframesIndex 关键帧索引
   * @param {*} milliseconds 秒
   */
	getNearestKeyframe(keyframesIndex, milliseconds) {
		var keyframeIdx = this._search(keyframesIndex.times, milliseconds);

		return {
			index: keyframeIdx,
			milliseconds: table.times[keyframeIdx],
			fileposition: table.filepositions[keyframeIdx],
		};
	},

	/**
   * 字节搜索方式
   * @param {Array} list 需要搜索的字节数组
   * @param {Number} value 当前所处秒
   */
	_search(list, value) {
		var idx = 0;

		var last = list.length - 1;
		var mid = 0;
		var lbound = 0;
		var ubound = last;

		if (value < list[0]) {
			idx = 0;
			lbound = ubound + 1;
		}

		while (lbound <= ubound) {
			mid = lbound + Math.floor((ubound - lbound) / 2);
			if (mid === last || (value >= list[mid] && value < list[mid + 1])) {
				idx = mid;
				break;
			} else if (list[mid] < value) {
				lbound = mid + 1;
			} else {
				ubound = mid - 1;
			}
		}

		return idx;
	},

	/**
   * 删除元素的 class，可根据前缀来删除
   * @param {*} el 需要删除的 dom 元素
   * @param {*} prefix 需要删除的 class，可以仅为前缀
   */
	removeClassByPrefix(el, prefix) {
		var classes = el.className.split(" ").filter(function (c) {
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
		const emotions = doc.getElementsByClassName("emotion-item");
		for (let i = 0; i < emotions.length; i++) {
			const emojiName = emotions[i].getAttribute("data-icon");
			for (let j = 0; j < emojiData.length; j++) {
				if (emojiData[j]["name"] === emojiName) {
					const emoji = emojiData[j];
					const img = emotions[i].getElementsByClassName("img")[0];
					let dataStyle = "";
					Object.keys(emoji.style).forEach(function(item) {
						dataStyle += item + ":" + emoji.style[item] + ";";
					});
					img.style.cssText = dataStyle;
					break;
				}
			}
		}
		return doc.body.innerHTML;
	},
	trimTailBr(str) {
		return str.replace(/((\s|&nbsp;)*\r?\n)+$/g, "");
	},
	limitBr(str) {
		return str.replace(/((\s|&nbsp;)*\r?\n){3,}/g, "\r\n\r\n");
	},
	trimHeadBr(str) {
		return str.replace(/^((\s|&nbsp;)*\r?\n)+/g, "");
	},
	/**
   * 判断需要渲染的 HTML 是否属于表情包，如果不属于，则去除此 HTML，仅保留文字
   * issue#17 https://github.com/LIlGG/halo-comment-joe2.0/issues/17
   */
	removeNotEmoji(doc) {
		let smilies = doc.getElementsByClassName("smilies");
		let skip = true;
  
		for (let i = 0; i < smilies.length; i++) {
			let name = smilies[i].dataset.icon;
  
			if (!Utils.findEmoji("tieba", name)) {
				skip = false;
				break;
			}
		}
  
		if (skip) {
			return doc;
		}
  
		var firstNode = smilies[0];
		var name = firstNode.dataset.icon;
  
		if (!Utils.findEmoji("tieba", name)) {
			removeNode(firstNode);
		}
  
		return Utils.removeNotEmoji(doc);
	},
	removeNode(node) {
		let alt = node.getAttribute("alt");
		let textNode = document.createTextNode(alt);
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
			emojiData.filter(
				(item) => item.category === type && item.name === name
			).length > 0
		);
	},
	return2Br(str) {
		str = Utils.trimHeadBr(str);
		str = Utils.trimTailBr(str);
		str = Utils.limitBr(str);
		return str.replace(/\r?\n/g, "<br />");
	}
};

window.Utils = Utils;
