/**通用逻辑 */
!(function () {
  /* 初始化评论主题 */
  const initCommentTheme = () => {
    const comments = document.getElementsByTagName("halo-comment");
    const curMode = $("html").attr("data-mode");
    // 黑夜模式下
    for (var i = 0; i < comments.length; i++) {
      var shadowDom = comments[i].shadowRoot.getElementById("halo-comment");
      $(shadowDom)[`${curMode === "light" ? "remove" : "add"}Class`]("dark");
    }
  };
  document.addEventListener("DOMContentLoaded", function () {
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

    /* 初始化昼夜模式 */
    {
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
          $(".mode-" + (theme === "light" ? "dark" : "light")).addClass(
            "active"
          );
          $html.attr("data-mode", theme);
        }
      }
      initCommentTheme();
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
    }

    /* 动态背景 */
    {
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
    }

    /* 自定义favicon */
    {
      if (ThemeConfig.favicon) {
        var favicon = new Favico();
        var image = new Image();
        image.onload = function () {
          favicon.image(image);
        };
        image.src = ThemeConfig.favicon;
      }
    }

    /* 搜索框弹窗 */
    {
      $(".joe_header__above-search .input").on("click", function (e) {
        e.stopPropagation();
        $(".joe_header__above-search .result").addClass("active");
      });
      $(document).on("click", function () {
        $(".joe_header__above-search .result").removeClass("active");
      });
    }

    /* 激活全局下拉框功能 */
    {
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
    }

    /* 激活全局返回顶部功能 */
    {
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
    }

    /* 激活侧边栏人生倒计时功能 */
    {
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
    }

    /* 激活侧边栏天气功能 */
    {
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
    }

    /* 3d云标签 */
    {
      if ($(".joe_aside__item.tags").length) {
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
        $(".joe_aside__item-contain .list li").each((i, item) => {
          entries.push({
            label: $(item).attr("data-label"),
            url: $(item).attr("data-url"),
            target: "_blank",
            fontColor: colors[random(0, colors.length - 1)],
            fontSize: 15,
          });
        });
        $(".joe_aside__item-contain .tag").svg3DTagCloud({
          entries,
          width: 220,
          height: 220,
          radius: "65%",
          radiusMin: 75,
          bgDraw: false,
          fov: 800,
          speed: 0.5,
          fontWeight: 500,
        });
      }
    }

    /* 激活Live2d人物 */
    {
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
    }

    /* 首页离屏提示 */
    {
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
    }

    /* 小屏幕伸缩侧边栏 */
    {
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
    }

    /* 小屏幕搜索框 */
    {
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
    }

    /* 点击遮罩层关闭 */
    {
      $(".joe_header__mask").on("click", function () {
        $("body").css("overflow", "");
        $(".joe_header__mask").removeClass("active slideout");
        $(".joe_header__searchout").removeClass("active");
        $(".joe_header__slideout").removeClass("active");
      });
    }

    /* 移动端侧边栏菜单手风琴 */
    {
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
    }

    /* 初始化网站运行时间 */
    {
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
    }

    /* 初始化表情功能 */
    {
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
    }

    /* 头部滚动 */
    {
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
    }
  });
})();
