const encryption = (str) => window.btoa(unescape(encodeURIComponent(str)));
const decrypt = (str) => decodeURIComponent(escape(window.atob(str)));

/** Joe上下文对象 */
const JoeContext = {
  /* 初始化评论主题 */
  initCommentTheme() {
    const comments = document.getElementsByTagName("halo-comment");
    const curMode = $("html").attr("data-mode");
    // 黑夜模式下
    for (var i = 0; i < comments.length; i++) {
      var shadowDom = comments[i].shadowRoot.getElementById("halo-comment");
      $(shadowDom)[`${curMode === "light" ? "remove" : "add"}Class`]("dark");
    }
  },

  /* 初始化导航条 */
  initNavbar() {
    /* 导航条高亮 */
    var $nav_menus = $(".joe_header__above-nav a");
    var $nav_side_menus = $(".panel-side-menu .link");
    var activeIndex = 0;
    var curPath = location.pathname;
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

  /* 初始化昼夜模式 */
  initMode() {
    var $html = $("html");
    var $icon_light = $(".mode-light");
    var $icon_dark = $(".mode-dark");
    // 固定模式
    if (ThemeConfig.static_theme) {
      $html.attr("data-mode", ThemeConfig.static_theme);
    } else {
      // 自动切换
      if (ThemeConfig.enable_auto_switch_theme) {
        var local_theme = sessionStorage.getItem("data-mode");
        localStorage.removeItem("data-mode", theme);
        if (local_theme) {
          $html.attr("data-mode", local_theme);
          if (local_theme === "light") {
            $icon_light.removeClass("active");
            $icon_dark.addClass("active");
          } else {
            $icon_light.addClass("active");
            $icon_dark.removeClass("active");
          }
        } else {
          var light_scope = ThemeConfig.dark_time_scope.split("~");
          var now = new Date();
          var today = now.toLocaleString().split(" ")[0];
          var theme =
            now >= new Date(today + " " + light_scope[0]) &&
            now <= new Date(today + " " + light_scope[1])
              ? "light"
              : "dark";
          if (theme === "light") {
            $icon_light.removeClass("active");
            $icon_dark.addClass("active");
          } else {
            $icon_light.addClass("active");
            $icon_dark.removeClass("active");
          }
          $html.attr("data-mode", theme);
          sessionStorage.setItem("data-mode", theme);
        }
      } else {
        var theme = localStorage.getItem("data-mode") || "light";
        $(".mode-" + (theme === "light" ? "dark" : "light")).addClass("active");
        $html.attr("data-mode", theme);
      }
    }
    JoeContext.initCommentTheme();
    // 手动切换
    $(".joe_action_item.mode").on("click", function () {
      var curSource = ThemeConfig.enable_auto_switch_theme
        ? sessionStorage
        : localStorage;
      local_theme = curSource.getItem("data-mode");
      var theme = "";
      if (local_theme) {
        if (local_theme === "light") {
          theme = "dark";
          $icon_dark.removeClass("active");
          $icon_light.addClass("active");
        } else {
          theme = "light";
          $icon_light.removeClass("active");
          $icon_dark.addClass("active");
        }
      } else {
        theme = "dark";
        $icon_light.removeClass("active");
        $icon_dark.addClass("active");
      }
      $html.attr("data-mode", theme);
      curSource.setItem("data-mode", theme);
      initCommentTheme();
    });
  },

  /* 动态背景 */
  dynamicBg() {
    if (
      !Joe.IS_MOBILE &&
      Joe.DYNAMIC_BACKGROUND !== "off" &&
      Joe.DYNAMIC_BACKGROUND &&
      !Joe.WALLPAPER_BACKGROUND_PC
    ) {
      $.getScript(
        window.Joe.THEME_URL + `assets/backdrop/${Joe.DYNAMIC_BACKGROUND}`
      );
    }
  },

  /* 自定义favicon */
  initFavicon() {
    if (ThemeConfig.favicon) {
      var favicon = new Favico();
      var image = new Image();
      image.onload = function () {
        favicon.image(image);
      };
      image.src = ThemeConfig.favicon;
    }
  },

  /* 搜索框弹窗 */
  initSearchPop() {
    $(".joe_header__above-search .input").on("click", function (e) {
      e.stopPropagation();
      $(".joe_header__above-search .result").addClass("active");
    });
    $(document).on("click", function () {
      $(".joe_header__above-search .result").removeClass("active");
    });
  },

  /* 激活全局下拉框功能 */
  initDrop() {
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
  initBack2top() {
    let _debounce = null;
    const handleScroll = () =>
      (document.documentElement.scrollTop || document.body.scrollTop) > 300
        ? $(".joe_action_item.scroll").addClass("active")
        : $(".joe_action_item.scroll").removeClass("active");
    handleScroll();
    $(document).on("scroll", () => {
      clearTimeout(_debounce);
      _debounce = setTimeout(handleScroll, 80);
    });
    $(".joe_action_item.scroll").on("click", () =>
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    );
  },

  /* 激活侧边栏人生倒计时功能 */
  initCountup() {
    if ($(".joe_aside__item.timelife").length) {
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
        let todayStartDate = new Date(
          new Date().toLocaleDateString()
        ).getTime();
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
    }
  },

  /* 激活侧边栏天气功能 */
  initWeather() {
    if ($(".joe_aside__item.weather").length) {
      const key = $(".joe_aside__item.weather").attr("data-key");
      const style = $(".joe_aside__item.weather").attr("data-style");
      const aqiColor = {
        1: "FFFFFF",
        2: "4A4A4A",
        3: "FFFFFF",
      };
      window.WIDGET = {
        CONFIG: {
          layout: 2,
          width: "220",
          height: "270",
          background: style,
          dataColor: aqiColor[style],
          language: "zh",
          key,
        },
      };
      $.getScript(
        "https://widget.qweather.net/standard/static/js/he-standard-common.js?v=2.0"
      );
    }
  },

  /* 初始化3D标签云 */
  init3Dtag() {
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
    if (Joe.LIVE2D !== "off" && Joe.LIVE2D) {
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
    }
  },

  /* 首页离屏提示 */
  offscreenTip() {
    if (ThemeConfig.enable_offscreen_tip) {
      var OriginTitile = document.title,
        titleTime;
      document.addEventListener("visibilitychange", function () {
        if (
          location.href.indexOf(ThemeConfig.blog_url) > 0 ||
          location.pathname !== "/"
        )
          return;
        if (document.hidden) {
          document.title =
            ThemeConfig.offscreen_title_leave || "歪，你去哪里了？";
          clearTimeout(titleTime);
        } else {
          document.title =
            ThemeConfig.offscreen_title_back || "(つェ⊂)咦，又回来了!";
          titleTime = setTimeout(function () {
            document.title = OriginTitile;
          }, 2000);
        }
      });
    }
  },

  /* 小屏幕伸缩侧边栏 */
  mobileSideMenu() {
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
  mobileSearch() {
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
  initSideMenu() {
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
  initRuntime() {
    const getRunTime = () => {
      const birthDay = new Date(ThemeConfig.birthday);
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
      $(".joe_run__day").html(day);
      $(".joe_run__hour").html(hour);
      $(".joe_run__minute").html(minute);
      $(".joe_run__second").html(second);
    };
    if (
      ThemeConfig.birthday &&
      /(\d{4})\/(\d{1,2})\/(\d{1,2}) (\d{1,2})\:(\d{1,2})\:(\d{1,2})/.test(
        ThemeConfig.birthday
      )
    ) {
      getRunTime();
      setInterval(getRunTime, 1000);
    }
  },

  /* 初始化表情功能 */
  initEmoji() {
    if ($(".joe_owo__contain").length && $(".joe_owo__target").length) {
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
              '.joe_owo__contain .box .scroll[data-type="' +
              $(this).attr("data-type") +
              '"]';
            $(scrollIndx).show().siblings(".scroll").hide();
          });
          $(".joe_owo__contain .scroll .item").on("click", function () {
            const text = $(this).attr("data-text");
            $(".joe_owo__target").insertContent(text);
          });
          $(".joe_owo__contain .box .bar .item").first().click();
        },
      });
    }
  },

  /* 头部滚动 */
  headerScroll() {
    if (!window.Joe.IS_MOBILE) {
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
    }
  },

  /* 激活轮播图功能 */
  initSwiper() {
    if ($(".joe_index__banner .swiper-container").length !== 0) {
      new Swiper(".swiper-container", {
        keyboard: false,
        loop: true,
        direction: ThemeConfig.banner_direction,
        autoplay: ThemeConfig.enable_banner_autoplay
          ? {
              delay: ThemeConfig.banner_delay,
              disableOnInteraction: false,
            }
          : false,
        mousewheel: false,
        pagination: {
          el: ".swiper-pagination",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    }
  },

  /* 初始化首页列表功能 */
  initRecommend() {
    const getListMode = (_) => {
      if (_.mode === "default") {
        return `
                    <li class="joe_list__item wow default">
                        <div class="line"></div>
                        <a href="${_.permalink}" class="thumbnail" title="${
          _.title
        }" target="_blank" rel="noopener noreferrer">
                            <img width="100%" height="100%" class="lazyload" src="${
                              _.lazyload
                            }" data-src="${_.image[0]}" alt="${_.title}" />
                            <time datetime="${_.time}">${_.time}</time>
                            <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="M903.93 107.306H115.787c-51.213 0-93.204 42.505-93.204 93.72V825.29c0 51.724 41.99 93.717 93.717 93.717h788.144c51.72 0 93.717-41.993 93.717-93.717V201.025c-.512-51.214-43.017-93.719-94.23-93.719zm-788.144 64.527h788.657c16.385 0 29.704 13.316 29.704 29.704v390.229L760.54 402.285c-12.805-13.828-30.217-21.508-48.14-19.971-17.924 1.02-34.821 10.754-46.602 26.114l-172.582 239.16-87.06-85.52c-12.29-11.783-27.654-17.924-44.039-17.924-16.39.508-31.755 7.676-43.53 20.48L86.595 821.705V202.05c-1.025-17.416 12.804-30.73 29.191-30.217zm788.145 683.674H141.906l222.255-245.82 87.06 86.037c12.8 12.807 30.212 18.95 47.115 17.417 17.41-1.538 33.797-11.266 45.063-26.118l172.584-238.647 216.111 236.088 2.051-1.54V825.8c.509 16.39-13.315 29.706-30.214 29.706zm0 0"/><path d="M318.072 509.827c79.89 0 144.417-65.037 144.417-144.416 0-79.378-64.527-144.925-144.417-144.925-79.891 0-144.416 64.527-144.416 144.412 0 79.892 64.525 144.93 144.416 144.93zm0-225.327c44.553 0 80.912 36.362 80.912 80.91 0 44.557-35.847 81.43-80.912 81.43-45.068 0-80.916-36.36-80.916-80.915 0-44.556 36.872-81.425 80.916-81.425zm0 0"/></svg>
                        </a>
                        <div class="information">
                            <a href="${_.permalink}" class="title" title="${
          _.title
        }" target="_blank" rel="noopener noreferrer">
                                <span class="badge" style="display: ${
                                  _.type === "sticky" ? "inline-block" : "none"
                                }">置顶</span>${_.title}
                            </a>
                            <a class="abstract" href="${
                              _.permalink
                            }" title="文章摘要" target="_blank" rel="noopener noreferrer">${
          _.abstract
        }</a>
                            <div class="meta">
                                <ul class="items">
                                    <li>${_.created}</li>
                                    <li>${_.views} 阅读</li>
                                    <li>${_.commentsNum} 评论</li>
                                    <li>${_.agree} 点赞</li>
                                </ul>
                                <div class="last" style="display: ${
                                  _.category.length ? "flex" : "none"
                                }">
                                    <svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="15" height="15"><path d="M512.2 564.743a76.818 76.818 0 0 1-30.973-6.508L108.224 393.877c-26.105-11.508-42.56-35.755-42.927-63.272-.384-27.44 15.356-52.053 41.042-64.232l373.004-176.74c20.591-9.737 45.16-9.755 65.75.017L917.68 266.39c25.668 12.188 41.39 36.792 41.024 64.231-.384 27.5-16.821 51.73-42.908 63.237l-372.57 164.377a77.18 77.18 0 0 1-31.025 6.508zM139.843 329.592l370.213 163.241c1.291.56 3.018.567 4.345-.009l369.758-163.128-369.706-175.464v-.01c-1.326-.628-3.158-.636-4.502 0l-370.108 175.37zm748.015 1.858h.175-.175zM512.376 941.674c-10.348 0-20.8-2.32-30.537-6.997L121.05 778.624c-18.113-7.834-26.454-28.87-18.62-46.983 7.835-18.112 28.862-26.488 46.993-18.61l362.08 156.629 345.26-156.366c17.939-8.166 39.14-.253 47.324 17.746 8.166 17.964.227 39.157-17.729 47.324l-344.51 156.61c-9.196 4.449-19.281 6.7-29.471 6.7z" fill="#444"/><path d="M871.563 515.449L511.81 671.775 152.358 515.787v73.578a34.248 34.248 0 0 0 20.76 31.48l301.518 129.19c11.806 5.703 24.499 8.546 37.175 8.546s25.367-2.843 37.174-8.546L850.82 620.534a34.248 34.248 0 0 0 20.744-31.474V515.45z" fill="#ff6a18"/></svg>
                                    <a class="link" target="_blank" rel="noopener noreferrer" href="${
                                      _.category.length &&
                                      _.category[0].permalink
                                    }">${
          _.category.length && _.category[0].name
        }</a>
                                </div>
                            </div>
                        </div>
                    </li>
                `;
      } else if (_.mode === "single") {
        return `
                    <li class="joe_list__item wow single">
                        <div class="line"></div>
                        <div class="information">
                            <a href="${_.permalink}" class="title" title="${
          _.title
        }" target="_blank" rel="noopener noreferrer">
                                <span class="badge" style="display: ${
                                  _.type === "sticky" ? "inline-block" : "none"
                                }">置顶</span>${_.title}
                            </a>
                            <div class="meta">
                                <ul class="items">
                                    <li>${_.created}</li>
                                    <li>${_.views} 阅读</li>
                                    <li>${_.commentsNum} 评论</li>
                                    <li>${_.agree} 点赞</li>
                                </ul>
                                <div class="last" style="display: ${
                                  _.category.length ? "flex" : "none"
                                }">
                                    <svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="15" height="15"><path d="M512.2 564.743a76.818 76.818 0 0 1-30.973-6.508L108.224 393.877c-26.105-11.508-42.56-35.755-42.927-63.272-.384-27.44 15.356-52.053 41.042-64.232l373.004-176.74c20.591-9.737 45.16-9.755 65.75.017L917.68 266.39c25.668 12.188 41.39 36.792 41.024 64.231-.384 27.5-16.821 51.73-42.908 63.237l-372.57 164.377a77.18 77.18 0 0 1-31.025 6.508zM139.843 329.592l370.213 163.241c1.291.56 3.018.567 4.345-.009l369.758-163.128-369.706-175.464v-.01c-1.326-.628-3.158-.636-4.502 0l-370.108 175.37zm748.015 1.858h.175-.175zM512.376 941.674c-10.348 0-20.8-2.32-30.537-6.997L121.05 778.624c-18.113-7.834-26.454-28.87-18.62-46.983 7.835-18.112 28.862-26.488 46.993-18.61l362.08 156.629 345.26-156.366c17.939-8.166 39.14-.253 47.324 17.746 8.166 17.964.227 39.157-17.729 47.324l-344.51 156.61c-9.196 4.449-19.281 6.7-29.471 6.7z" fill="#444"/><path d="M871.563 515.449L511.81 671.775 152.358 515.787v73.578a34.248 34.248 0 0 0 20.76 31.48l301.518 129.19c11.806 5.703 24.499 8.546 37.175 8.546s25.367-2.843 37.174-8.546L850.82 620.534a34.248 34.248 0 0 0 20.744-31.474V515.45z" fill="#ff6a18"/></svg>
                                    <a class="link" target="_blank" rel="noopener noreferrer" href="${
                                      _.category.length &&
                                      _.category[0].permalink
                                    }">${
          _.category.length && _.category[0].name
        }</a>
                                </div>
                            </div>
                        </div>
                        <a href="${_.permalink}" class="thumbnail" title="${
          _.title
        }" target="_blank" rel="noopener noreferrer">
                            <img width="100%" height="100%" class="lazyload" src="${
                              _.lazyload
                            }" data-src="${_.image[0]}" alt="${_.title}" />
                            <time datetime="${_.time}">${_.time}</time>
                            <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="M903.93 107.306H115.787c-51.213 0-93.204 42.505-93.204 93.72V825.29c0 51.724 41.99 93.717 93.717 93.717h788.144c51.72 0 93.717-41.993 93.717-93.717V201.025c-.512-51.214-43.017-93.719-94.23-93.719zm-788.144 64.527h788.657c16.385 0 29.704 13.316 29.704 29.704v390.229L760.54 402.285c-12.805-13.828-30.217-21.508-48.14-19.971-17.924 1.02-34.821 10.754-46.602 26.114l-172.582 239.16-87.06-85.52c-12.29-11.783-27.654-17.924-44.039-17.924-16.39.508-31.755 7.676-43.53 20.48L86.595 821.705V202.05c-1.025-17.416 12.804-30.73 29.191-30.217zm788.145 683.674H141.906l222.255-245.82 87.06 86.037c12.8 12.807 30.212 18.95 47.115 17.417 17.41-1.538 33.797-11.266 45.063-26.118l172.584-238.647 216.111 236.088 2.051-1.54V825.8c.509 16.39-13.315 29.706-30.214 29.706zm0 0"/><path d="M318.072 509.827c79.89 0 144.417-65.037 144.417-144.416 0-79.378-64.527-144.925-144.417-144.925-79.891 0-144.416 64.527-144.416 144.412 0 79.892 64.525 144.93 144.416 144.93zm0-225.327c44.553 0 80.912 36.362 80.912 80.91 0 44.557-35.847 81.43-80.912 81.43-45.068 0-80.916-36.36-80.916-80.915 0-44.556 36.872-81.425 80.916-81.425zm0 0"/></svg>
                        </a>
                        <div class="information" style="margin-bottom: 0;">
                            <a class="abstract" href="${
                              _.permalink
                            }" title="文章摘要" target="_blank" rel="noopener noreferrer">${
          _.abstract
        }</a>
                        </div>
                    </li>
                `;
      } else if (_.mode === "multiple") {
        return `
                    <li class="joe_list__item wow multiple">
                        <div class="line"></div>
                        <div class="information">
                            <a href="${_.permalink}" class="title" title="${
          _.title
        }" target="_blank" rel="noopener noreferrer">
                                <span class="badge" style="display: ${
                                  _.type === "sticky" ? "inline-block" : "none"
                                }">置顶</span>${_.title}
                            </a>
                            <a class="abstract" href="${
                              _.permalink
                            }" title="文章摘要" target="_blank" rel="noopener noreferrer">${
          _.abstract
        }</a>
                        </div>
                        <a href="${_.permalink}" class="thumbnail" title="${
          _.title
        }" target="_blank" rel="noopener noreferrer">
                            ${_.image
                              .map((item, index) => {
                                if (index < 3) {
                                  return `<img width="100%" height="100%" class="lazyload" src="${_.lazyload}" data-src="${item}" alt="${_.title}" />`;
                                }
                              })
                              .join("")}
                        </a>
                        <div class="meta">
                            <ul class="items">
                                <li>${_.created}</li>
                                <li>${_.views} 阅读</li>
                                <li>${_.commentsNum} 评论</li>
                                <li>${_.agree} 点赞</li>
                            </ul>
                            <div class="last" style="display: ${
                              _.category.length ? "flex" : "none"
                            }">
                                <svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="15" height="15"><path d="M512.2 564.743a76.818 76.818 0 0 1-30.973-6.508L108.224 393.877c-26.105-11.508-42.56-35.755-42.927-63.272-.384-27.44 15.356-52.053 41.042-64.232l373.004-176.74c20.591-9.737 45.16-9.755 65.75.017L917.68 266.39c25.668 12.188 41.39 36.792 41.024 64.231-.384 27.5-16.821 51.73-42.908 63.237l-372.57 164.377a77.18 77.18 0 0 1-31.025 6.508zM139.843 329.592l370.213 163.241c1.291.56 3.018.567 4.345-.009l369.758-163.128-369.706-175.464v-.01c-1.326-.628-3.158-.636-4.502 0l-370.108 175.37zm748.015 1.858h.175-.175zM512.376 941.674c-10.348 0-20.8-2.32-30.537-6.997L121.05 778.624c-18.113-7.834-26.454-28.87-18.62-46.983 7.835-18.112 28.862-26.488 46.993-18.61l362.08 156.629 345.26-156.366c17.939-8.166 39.14-.253 47.324 17.746 8.166 17.964.227 39.157-17.729 47.324l-344.51 156.61c-9.196 4.449-19.281 6.7-29.471 6.7z" fill="#444"/><path d="M871.563 515.449L511.81 671.775 152.358 515.787v73.578a34.248 34.248 0 0 0 20.76 31.48l301.518 129.19c11.806 5.703 24.499 8.546 37.175 8.546s25.367-2.843 37.174-8.546L850.82 620.534a34.248 34.248 0 0 0 20.744-31.474V515.45z" fill="#ff6a18"/></svg>
                                <a class="link" target="_blank" rel="noopener noreferrer" href="${
                                  _.category.length && _.category[0].permalink
                                }">${
          _.category.length && _.category[0].name
        }</a>
                            </div>
                        </div>
                    </li>
                `;
      } else {
        return `
                    <li class="joe_list__item wow none">
                        <div class="line"></div>
                        <div class="information">
                            <a href="${_.permalink}" class="title" title="${
          _.title
        }" target="_blank" rel="noopener noreferrer">
                                <span class="badge" style="display: ${
                                  _.type === "sticky" ? "inline-block" : "none"
                                }">置顶</span>${_.title}
                            </a>
                            <a class="abstract" href="${
                              _.permalink
                            }" title="文章摘要" target="_blank" rel="noopener noreferrer">${
          _.abstract
        }</a>
                            <div class="meta">
                                <ul class="items">
                                    <li>${_.created}</li>
                                    <li>${_.views} 阅读</li>
                                    <li>${_.commentsNum} 评论</li>
                                    <li>${_.agree} 点赞</li>
                                </ul>
                                <div class="last" style="display: ${
                                  _.category.length ? "flex" : "none"
                                }">
                                    <svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="15" height="15"><path d="M512.2 564.743a76.818 76.818 0 0 1-30.973-6.508L108.224 393.877c-26.105-11.508-42.56-35.755-42.927-63.272-.384-27.44 15.356-52.053 41.042-64.232l373.004-176.74c20.591-9.737 45.16-9.755 65.75.017L917.68 266.39c25.668 12.188 41.39 36.792 41.024 64.231-.384 27.5-16.821 51.73-42.908 63.237l-372.57 164.377a77.18 77.18 0 0 1-31.025 6.508zM139.843 329.592l370.213 163.241c1.291.56 3.018.567 4.345-.009l369.758-163.128-369.706-175.464v-.01c-1.326-.628-3.158-.636-4.502 0l-370.108 175.37zm748.015 1.858h.175-.175zM512.376 941.674c-10.348 0-20.8-2.32-30.537-6.997L121.05 778.624c-18.113-7.834-26.454-28.87-18.62-46.983 7.835-18.112 28.862-26.488 46.993-18.61l362.08 156.629 345.26-156.366c17.939-8.166 39.14-.253 47.324 17.746 8.166 17.964.227 39.157-17.729 47.324l-344.51 156.61c-9.196 4.449-19.281 6.7-29.471 6.7z" fill="#444"/><path d="M871.563 515.449L511.81 671.775 152.358 515.787v73.578a34.248 34.248 0 0 0 20.76 31.48l301.518 129.19c11.806 5.703 24.499 8.546 37.175 8.546s25.367-2.843 37.174-8.546L850.82 620.534a34.248 34.248 0 0 0 20.744-31.474V515.45z" fill="#ff6a18"/></svg>
                                    <a class="link" target="_blank" rel="noopener noreferrer" href="${
                                      _.category.length &&
                                      _.category[0].permalink
                                    }">${
          _.category.length && _.category[0].name
        }</a>
                                </div>
                            </div>
                        </div>
                    </li>
                `;
      }
    };
    let queryData = {
      page: 1,
      pageSize: window.Joe.PAGE_SIZE,
      type: "created",
    };
    const initDom = () => {
      $(".joe_index__list .joe_list").html("");
      $(".joe_load").show();
      let activeItem = $(
        '.joe_index__title-title .item[data-type="' + queryData.type + '"]'
      );
      let activeLine = $(".joe_index__title-title .line");
      activeItem.addClass("active").siblings().removeClass("active");
      activeLine.css({
        left: activeItem.position().left,
        width: activeItem.width(),
      });
    };
    const pushDom = () => {
      return new Promise((reslove, reject) => {
        $(".joe_load").attr("loading", true);
        $(".joe_load").html("loading...");
        $(".joe_index__list .joe_list__loading").show();
        $.ajax({
          url: Joe.BASE_API,
          type: "POST",
          dataType: "json",
          data: {
            routeType: "publish_list",
            page: queryData.page,
            pageSize: queryData.pageSize,
            type: queryData.type,
          },
          success(res) {
            if (res.data.length === 0) {
              $(".joe_load").removeAttr("loading");
              $(".joe_load").html("查看更多");
              $(".joe_load").hide();
              $(".joe_index__list .joe_list__loading").hide();
              return Qmsg.warning("没有更多内容了");
            }
            res.data.forEach((_) =>
              $(".joe_index__list .joe_list").append(getListMode(_))
            );
            $(".joe_load").removeAttr("loading");
            $(".joe_load").html("查看更多");
            $(".joe_index__list .joe_list__loading").hide();
            reslove(res.data.length > 0 ? res.data.length - 1 : 0);
          },
        });
      });
    };
    // initDom();
    // pushDom();
    $(".joe_index__title-title .item").on("click", async function () {
      if ($(this).attr("data-type") === queryData.type) return;
      queryData = {
        page: 1,
        pageSize: window.Joe.PAGE_SIZE,
        type: $(this).attr("data-type"),
      };
      initDom();
      pushDom();
    });
    $(".joe_load").on("click", async function () {
      if ($(this).attr("loading")) return;
      queryData.page++;
      let length = await pushDom();
      length = $(".joe_index__list .joe_list .joe_list__item").length - length;
      const queryElement = `.joe_index__list .joe_list .joe_list__item:nth-child(${length})`;
      const offset = $(queryElement).offset().top - $(".joe_header").height();
      window.scrollTo({
        top: offset - 15,
        behavior: "smooth",
      });
    });
  },

  /* 激活列表特效 */
  initListEffect() {
    const wow = $(".joe_index__list").attr("data-wow");
    if (wow !== "off" && wow)
      new WOW({
        boxClass: "wow",
        animateClass: `animated ${wow}`,
        offset: 0,
        mobile: true,
        live: true,
        scrollContainer: null,
      }).init();
  },

  /* 文章目录 */
  initToc() {
    if (!ThemeConfig.enable_toc || !$(".toc-container").length) return;
    if (document.body.clientWidth <= 1200) return;
    tocbot.init({
      tocSelector: "#js-toc",
      contentSelector: ".joe_detail__article",
      ignoreSelector: ".js-toc-ignore",
      headingSelector: "h1, h2, h3, h4, h5",
      collapseDepth: ThemeConfig.tocDepth || 0,
      hasInnerContainers: false,
      headingsOffset: -80, // 目录高亮的偏移值，和scrollSmoothOffset有关联
      scrollSmoothOffset: -70, // 滚动的偏移值
      positionFixedSelector: ".toc-container", // 固定类添加的容器
      positionFixedClass: "is-position-fixed", // 固定类名称
      fixedSidebarOffset: "auto",
      // scrollEndCallback: function (e) {},
    });
    // toc 菜单收起/展开
    $(".toc-container").show();
    $(".toc-expander i").on("click", function () {
      $(this).parents(".toc-container").toggleClass("hide");
    });
  },

  /* 文章复制 + 版权文字 */
  initCopy() {
    if (!ThemeConfig.enable_copy || !$(".joe_post").length) return;
    const curl = $(".joe_detail").attr("data-curl");
    $(".joe_post").on("copy", function (e) {
      const body_element = document.body;
      const selection = window.getSelection();
      const appendLink = `作者：${ThemeConfig.author}<br>
          链接：${curl}<br>
          来源：${ThemeConfig.blog_title}<br>
          著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。`;
      // const appendLink = ThemeConfig.copy_right_text;
      if (window.clipboardData) {
        const copytext = selection + "\r\n\r\n" + appendLink;
        window.clipboardData.setData("Text", copytext);
        return false;
      } else {
        const copytext = selection + "<br><br>" + appendLink;
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

  /* 获取本篇文章百度收录情况 */
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
              '<span style="color: #e6a23c">未收录，推送中...</span>'
            );
            const _timer = setTimeout(function () {
              $.ajax({
                url: ThemeConfig.BASE_URL + "/halo-api/bd/push",
                type: "POST",
                dataType: "json",
                data: {
                  site: ThemeConfig.HOST,
                  token: ThemeConfig.baidu_token,
                  urls: window.location.href,
                },
                success(res) {
                  if (res.data.success === 0) {
                    $("#joe_baidu_record").html(
                      '<span style="color: #f56c6c">推送失败，请检查！</span>'
                    );
                  } else {
                    $("#joe_baidu_record").html(
                      '<span style="color: #67c23a">推送成功！</span>'
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

  /* 初始化代码区域，高亮 + 折叠 +  复制 */
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
          `<i class="joe-font joe-icon-arrow-downb code-expander" title="折叠/展开"></i>`
        );
        expander.on("click", function () {
          const $parent = expander.parent("pre");
          const $auto_fold = $parent.siblings(".toolbar").find(".autofold-tip");
          $auto_fold && $auto_fold.remove();
          expander.parent("pre").toggleClass("close");
        });
        $item.prepend(expander);

        // 自动折叠长代码
        if (
          ThemeConfig.fold_long_code &&
          location.pathname.includes("archives")
        ) {
          if ($item.height() > (ThemeConfig.long_code_height || 200)) {
            const $title = $item
              .siblings(".toolbar")
              .find(".toolbar-item span")
              .eq(0);
            $title.append(
              `<em class="autofold-tip">\<内容过长，已自动折叠\></em>`
            );
            $item.addClass("close");
          }
        }
      }

      // 代码复制
      if (ThemeConfig.enable_code_copy) {
        const text = $(item).find("code[class*='language-']").text();
        const span = $(
          `<span class="copy-button"><i class="joe-font joe-icon-copy" title="复制代码"></i></span>`
        );
        new ClipboardJS(span[0], {
          text: () => text + "\r\n\r\n" + ThemeConfig.copy_right_text,
        }).on("success", () => Qmsg.success("复制成功！"));
        $(item).addClass("copyable").append(span);
      }
    });
  },

  // 侧边栏切换
  initAside() {
    if (!ThemeConfig.enable_aside && !ThemeConfig.enable_aside_expander) return;
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

  /* 图片预览功能 */
  initGallery() {
    $(
      ".joe_detail__article img:not(img.owo_image), .joe_journal_block img"
    ).each(function () {
      $(this).wrap(
        $(
          `<span style="display: block;" data-fancybox="Joe" href="${$(
            this
          ).attr("src")}"></span>`
        )
      );
    });
  },

  /* 初始化文章分享 */
  initPostShare() {
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

  /* 设置文章内的链接为新窗口打开 */
  initExternalLink() {
    $(".joe_detail__article a:not(.joe_detail__article-anote)").each(
      function () {
        $(this).attr({
          target: "_blank",
          rel: "noopener noreferrer nofollow",
        });
      }
    );
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

  /* 密码保护文章，输入密码访问 */
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

  /* 初始化pjax */
  // initPjax() {},

  /* 初始化日志页 */
  initJournals() {
    // 内容折叠/展开
    $(".journal_content_expander").on("click", function () {
      $(this).parent().toggleClass("open");
    });
    // 点赞
    const $allItems = $(".joe_journal__item");
    if ($allItems.length) {
      $allItems.each(function (_, item) {
        const $this = $(this);
        const cid = $this.attr("data-cid");
        const clikes = +($this.attr("data-clikes") || 0);
        let agreeArr = localStorage.getItem(encryption("agree-journal"))
          ? JSON.parse(
              decrypt(localStorage.getItem(encryption("agree-journal")))
            )
          : [];
        const $iconLike = $this.find(".journal-like");
        const $iconUnlike = $this.find(".journal-unlike");
        const $likeNum = $this.find(".journal-likes-num");
        if (agreeArr.includes(cid)) {
          $iconLike.hide();
          $iconUnlike.show();
        } else {
          $iconLike.show();
          $iconUnlike.hide();
        }
        $likeNum.html(clikes);
        $iconLike.on("click", function () {
          let _loading = false;
          if (_loading) return;
          _loading = true;
          agreeArr = localStorage.getItem(encryption("agree-journal"))
            ? JSON.parse(
                decrypt(localStorage.getItem(encryption("agree-journal")))
              )
            : [];
          let flag = agreeArr.includes(cid);
          $.ajax({
            url: "/api/content/journals/" + cid + "/likes",
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
                $iconLike.show();
                $iconUnlike.hide();
              } else {
                likes++;
                agreeArr.push(cid);
                $iconLike.hide();
                $iconUnlike.show();
              }
              const name = encryption("agree-journal");
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
      });
    }
    // 评论及折叠
    if (ThemeConfig.enable_comment_journal) {
      $(".journal_comment_expander,.journal-comment").on("click", function () {
        const $this = $(this);
        const $parent = $this.parents(".footer-wrap");
        if (ThemeConfig.enable_autoload_comment_journal) {
          const compComment = $parent
            .find("halo-comment")[0]
            .shadowRoot.getElementById("halo-comment").__vue__;
          // 展开加载评论
          if (!$parent.hasClass("open") && !compComment.loaded) {
            compComment.loadComments();
          }
        }
        $parent.toggleClass("open");
        $parent
          .find(".journal_comment_expander_txt")
          .html(($parent.hasClass("open") ? "收起" : "查看") + "评论");
      });
    }
  },

  /* 获取留言板数据 */
  getLeavingData() {
    const sheetId = $(".joe_detail__title").attr("data-sheetid");
    $.ajax({
      url: `/api/content/sheets/${sheetId}/comments/top_view`,
      type: "GET",
      dataType: "json",
      success(res) {
        if (res.status === 200 && res.data) {
          const resD = res.data;
          if (resD.total) {
            const str = resD.content.reduce((sum, item) => {
              return (sum += `<li class="item">
              <div class="user">
                  <img class="avatar lazyload" src="${
                    ThemeConfig.lazyload_avatar
                  }" data-src="${
                item.authorUrl || item.avatar
              }" alt="用户头像" />
                  <div class="nickname">${item.author}</div>
                  <div class="date">${new Date(
                    item.createTime
                  ).toLocaleDateString()}</div>
              </div>
              <div class="wrapper">
                  <div class="content">${item.content}</div>
              </div>
          </li>`);
            }, "");
            $(".joe_detail__leaving-list").html(str);
            leavingContext.randomColor();
            $(".joe_detail__leaving-list").show();
            $(".joe_detail__leaving-none").hide();
          } else {
            $(".joe_detail__leaving-list").hide();
            $(".joe_detail__leaving-none").show();
          }
        } else {
          $(".joe_detail__leaving-list").hide();
          $(".joe_detail__leaving-none").show();
        }
      },
    });
  },

  /* 随机样式 */
  randomColor() {
    let _index = 100;
    const colors = [
      "#dcc10c",
      "#299bec",
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
      "#e255cd",
      "#63c549",
      "#0ECDDE",
      "#F067B4",
      "#F067B4",
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
    const maxWidth = $(".joe_detail__leaving-list").width();
    const maxHeight = $(".joe_detail__leaving-list").height();
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
    $(".joe_detail__leaving-list .item").each((index, item) => {
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

  /* 初始化图库 */
  // initGallery(){
  // }

  // 渲染数学公式
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

  // initStatisticDetail() {
  //   /* 转换字节 */
  //   const bytesToSize = (bytes) => {
  //     if (!bytes) return "0 B";
  //     const k = 1000,
  //       sizes = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
  //       i = Math.floor(Math.log(bytes) / Math.log(k));
  //     return (bytes / Math.pow(k, i)).toPrecision(3) + " " + sizes[i];
  //   };
  //   /* 转换内存 */
  //   const megaknotsToSize = (limit) => {
  //     if (limit < 1024) return parseInt(limit) + " MB";
  //     return parseInt(limit / 1024) + " GB";
  //   };
  //   const categories = [];
  //   const upSeries = [];
  //   const downSeries = [];
  //   const flowDom = document.querySelector("#flow");
  //   const workDom = document.querySelector("#work");
  //   const flowChart = flowDom && echarts.init(flowDom);
  //   const workChart = workDom && echarts.init(workDom);
  //   if (flowDom && workDom) initChart();

  //   function initChart() {
  //     $.ajax({
  //       url: Joe.BASE_API,
  //       type: "POST",
  //       dataType: "json",
  //       data: {
  //         routeType: "server_status",
  //       },
  //       success(res) {
  //         if (!res.status) Qmsg.warning("服务器接口异常！");
  //         {
  //           $(".joe_census__server-item .count .core").html(`${res.cpu[1]} 核`);
  //           $(".joe_census__server-item .count .ram").html(
  //             `${megaknotsToSize(res.memory.memTotal)}`
  //           );
  //           $(".joe_census__server-item .count .up").html(
  //             `总发送：${bytesToSize(res.upTotal)}`
  //           );
  //           $(".joe_census__server-item .count .down").html(
  //             `总接收：${bytesToSize(res.downTotal)}`
  //           );
  //           const stamp = new Date();
  //           const hours = String(stamp.getHours()).padStart(2, 0);
  //           const minutes = String(stamp.getMinutes()).padStart(2, 0);
  //           const seconds = String(stamp.getSeconds()).padStart(2, 0);
  //           const time = `${hours}:${minutes}:${seconds}`;
  //           categories.push(time);
  //           upSeries.push(res.up);
  //           downSeries.push(res.down);
  //           if (categories.length > 5) categories.shift();
  //           if (upSeries.length > 5) upSeries.shift();
  //           if (downSeries.length > 5) downSeries.shift();
  //           flowChart.setOption({
  //             title: {
  //               subtext: "单位 KB/s",
  //             },
  //             grid: {
  //               left: "3%",
  //               right: "4%",
  //               bottom: "3%",
  //               containLabel: true,
  //             },
  //             tooltip: {
  //               trigger: "axis",
  //               axisPointer: {
  //                 type: "cross",
  //                 label: {
  //                   backgroundColor: "#6a7985",
  //                 },
  //               },
  //             },
  //             xAxis: {
  //               axisTick: {
  //                 show: false,
  //               },
  //               type: "category",
  //               boundaryGap: false,
  //               data: categories,
  //             },
  //             yAxis: {
  //               type: "value",
  //             },
  //             series: [
  //               {
  //                 type: "line",
  //                 name: "上行",
  //                 smooth: true,
  //                 showSymbol: false,
  //                 itemStyle: {
  //                   normal: {
  //                     color: "#f39494",
  //                     areaStyle: {
  //                       color: "#f39494",
  //                     },
  //                     lineStyle: {
  //                       width: 2,
  //                       color: "#f39494",
  //                     },
  //                   },
  //                 },
  //                 stack: "总量",
  //                 data: upSeries,
  //               },
  //               {
  //                 type: "line",
  //                 name: "下行",
  //                 smooth: true,
  //                 showSymbol: false,
  //                 itemStyle: {
  //                   normal: {
  //                     color: "#9dd3e8",
  //                     areaStyle: {
  //                       color: "#9dd3e8",
  //                     },
  //                     lineStyle: {
  //                       width: 2,
  //                       color: "#9dd3e8",
  //                     },
  //                   },
  //                 },
  //                 stack: "总量",
  //                 data: downSeries,
  //               },
  //             ],
  //           });
  //         }
  //         {
  //           /* CPU占用 */
  //           const cpuUse = res.cpu[0];
  //           /* 内存占用 */
  //           const memoryRealUse =
  //             Math.round(
  //               (res.memory.memRealUsed / res.memory.memTotal) * 1000
  //             ) / 10;
  //           /* 内存缓冲 */
  //           const memoryCacheUse =
  //             Math.round((res.memory.memCached / res.memory.memTotal) * 1000) /
  //             10;
  //           /* 系统缓冲 */
  //           const memoryBufferUse =
  //             Math.round((res.memory.memBuffers / res.memory.memTotal) * 1000) /
  //             10;
  //           /* 系统负载 */
  //           const systemLoad =
  //             Math.round((res.load.one / res.load.max) * 100) > 100
  //               ? 100
  //               : Math.round((res.load.one / res.load.max) * 100);
  //           workChart.setOption({
  //             title: {
  //               subtext: "单位 百分比",
  //             },
  //             tooltip: {
  //               trigger: "axis",
  //               axisPointer: {
  //                 type: "shadow",
  //               },
  //             },
  //             grid: {
  //               left: "3%",
  //               right: "3%",
  //               bottom: "3%",
  //               containLabel: true,
  //             },
  //             xAxis: {
  //               type: "category",
  //               axisTick: {
  //                 show: false,
  //               },
  //               data: [
  //                 "CPU占用",
  //                 "内存占用",
  //                 "系统缓冲",
  //                 "内存缓冲",
  //                 "系统负载",
  //               ],
  //             },
  //             yAxis: {
  //               type: "value",
  //               max: 100,
  //             },
  //             series: {
  //               data: [
  //                 {
  //                   name: "CPU占用",
  //                   value: cpuUse,
  //                   itemStyle: {
  //                     color: "#b3c25a",
  //                   },
  //                 },
  //                 {
  //                   name: "内存占用",
  //                   value: memoryRealUse,
  //                   itemStyle: {
  //                     color: "#67b580",
  //                   },
  //                 },
  //                 {
  //                   name: "系统缓冲",
  //                   value: memoryBufferUse,
  //                   itemStyle: {
  //                     color: "#86ba71",
  //                   },
  //                 },
  //                 {
  //                   name: "内存缓冲",
  //                   value: memoryCacheUse,
  //                   itemStyle: {
  //                     color: "#feb041",
  //                   },
  //                 },
  //                 {
  //                   name: "系统负载",
  //                   value: systemLoad,
  //                   itemStyle: {
  //                     color: "#fd7e55",
  //                   },
  //                 },
  //               ],
  //               type: "bar",
  //               showBackground: true,
  //               label: {
  //                 show: true,
  //                 color: "#ffffff",
  //                 formatter: (params) => `${params.data.value}%`,
  //               },
  //               backgroundStyle: {
  //                 color: "rgba(180, 180, 180, 0.2)",
  //               },
  //             },
  //           });
  //         }
  //         setTimeout(initChart, 2000);
  //       },
  //     });
  //   }
  // },

  /* 初始化统计 */
  // initStatistic() {
  //   const categoryDom = document.querySelector("#category");
  //   const categoryChart = echarts.init(categoryDom);
  //   const seriesData = [];
  //   $(".joe_census__basic-item.category ul li").each((index, item) => {
  //     seriesData.push({
  //       name: item.getAttribute("data-name"),
  //       value: item.getAttribute("data-value"),
  //     });
  //   });
  //   categoryChart.setOption({
  //     tooltip: {
  //       trigger: "item",
  //     },
  //     series: [
  //       {
  //         type: "pie",
  //         roseType: "area",
  //         itemStyle: {
  //           borderRadius: 8,
  //         },
  //         data: seriesData,
  //       },
  //     ],
  //   });
  // },

  /* 初始化评论统计 */
  // initCommentStatistic() {
  //   const latelyDom = document.querySelector("#lately");
  //   const latelyChart = echarts.init(latelyDom);
  //   $.ajax({
  //     url: Joe.BASE_API,
  //     type: "POST",
  //     dataType: "json",
  //     data: {
  //       routeType: "comment_lately",
  //     },
  //     success(res) {
  //       latelyChart.setOption({
  //         title: {
  //           subtext: "单位 数量",
  //         },
  //         tooltip: {
  //           trigger: "axis",
  //           axisPointer: {
  //             type: "cross",
  //             label: {
  //               backgroundColor: "#6a7985",
  //             },
  //           },
  //         },
  //         grid: {
  //           left: "3%",
  //           right: "3%",
  //           bottom: "3%",
  //           containLabel: true,
  //         },
  //         xAxis: {
  //           type: "category",
  //           axisTick: {
  //             show: false,
  //           },
  //           data: res.categories,
  //         },
  //         yAxis: {
  //           type: "value",
  //         },
  //         series: {
  //           name: "数量",
  //           itemStyle: {
  //             normal: {
  //               color: "#91cc75",
  //               lineStyle: {
  //                 width: 2,
  //                 color: "#91cc75",
  //               },
  //             },
  //           },
  //           data: res.series,
  //           type: "line",
  //           smooth: true,
  //         },
  //       });
  //     },
  //   });
  // },

  /* 初始化归档 */
  initArchive() {
    let page = 0;
    const initFiling = () => {
      if ($(".joe_census__filing .button").html() === "loading...") return;
      $.ajax({
        url: Joe.BASE_API,
        type: "POST",
        dataType: "json",
        data: {
          routeType: "article_filing",
          page: ++page,
        },
        success(res) {
          if (!res.length) {
            $(".joe_census__filing .item.load").remove();
            return Qmsg.warning("没有更多内容了");
          }
          let htmlStr = "";
          res.forEach((item) => {
            htmlStr += `
							<div class="item">
								<div class="tail"></div>
								<div class="head"></div>
								<div class="wrapper">
									<div class="panel">${
                    item.date
                  }<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M21.6 772.8c28.8 28.8 74.4 28.8 103.2 0L512 385.6l387.2 387.2c28.8 28.8 74.4 28.8 103.2 0 28.8-28.8 28.8-74.4 0-103.2L615.2 282.4l-77.6-77.6c-14.4-14.4-37.6-14.4-51.2 0l-77.6 77.6L21.6 669.6c-28.8 28.8-28.8 75.2 0 103.2z" /></svg></div>
									<ol class="panel-body">
										${item.list
                      .map(
                        (_) =>
                          `<li><a rel="noopener noreferrer" target="_blank" href="${_.permalink}">${_.title}</a></li>`
                      )
                      .join("")}
									</ol>
								</div>
							</div>
						`;
          });
          $("#filing").append(htmlStr);
          $(".joe_census__filing .button").html("加载更多");
        },
      });
    };
    initFiling();

    $(".joe_census__filing .content").on("click", ".panel", function () {
      const panelBox = $(this).parents(".content");
      panelBox.find(".panel").not($(this)).removeClass("in");
      panelBox
        .find(".panel-body")
        .not($(this).siblings(".panel-body"))
        .stop()
        .hide("fast");
      $(this).toggleClass("in").siblings(".panel-body").stop().toggle("fast");
    });
    $(".joe_census__filing .button").on("click", function () {
      initFiling();
      $(this).html("loading...");
    });
  },
};

document.addEventListener("DOMContentLoaded", function () {
  Object.values(JoeContext).forEach((item) => item());
});

/* 写在load事件里，为了解决图片未加载完时，滚动距离获取不准确的问题 */
window.addEventListener("load", function () {
  /* 判断地址栏是否有锚点链接，有则跳转到对应位置 */
  {
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
  }
  /* 日记块超长折叠 */
  const $allBlocks = $(".joe_journal_body .content-wrp");
  $allBlocks.each(function () {
    if ($(this)[0].getBoundingClientRect().height > 270) {
      $(this).siblings(".journal_content_expander").show();
    }
  });
});
