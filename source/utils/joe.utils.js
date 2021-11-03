/**
 * 主题所用工具类
 */
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
          "API-Authorization": ThemeConfig.AccessKey,
        },
        dataType: "json",
        data,
        success(res) {
          if (res.status === 200 && res.data) {
            resolve(res.data);
          } else {
            reject(res);
          }
        },
        failed(err) {
          reject(err || "出错了！");
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
};

window.Utils = Utils;
