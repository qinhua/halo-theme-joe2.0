!(function () {
  var canvas1, ctx, W, H;
  var isStart = false;
  if (screen.width >= 988) var mp = 150;
  else mp = 75;
  var deactivationTimerHandler,
    reactivationTimerHandler,
    animationHandler,
    particles = [],
    angle = 0,
    tiltAngle = 0,
    confettiActive = !0,
    animationComplete = !0,
    particleColors = {
      colorOptions: [
        "DodgerBlue",
        "OliveDrab",
        "Gold",
        "pink",
        "SlateBlue",
        "lightblue",
        "Violet",
        "PaleGreen",
        "SteelBlue",
        "SandyBrown",
        "Chocolate",
        "Crimson",
      ],
      colorIndex: 0,
      colorIncrementer: 0,
      colorThreshold: 10,
      getColor: function () {
        return (
          this.colorIncrementer >= 10 &&
            ((this.colorIncrementer = 0),
            this.colorIndex++,
            this.colorIndex >= this.colorOptions.length &&
              (this.colorIndex = 0)),
          this.colorIncrementer++,
          this.colorOptions[this.colorIndex]
        );
      },
    };

  function confettiParticle(t) {
    (this.x = Math.random() * W),
      (this.y = Math.random() * H - H),
      (this.r = RandomFromTo(10, 30)),
      (this.d = Math.random() * mp + 10),
      (this.color = t),
      (this.tilt = Math.floor(10 * Math.random()) - 10),
      (this.tiltAngleIncremental = 0.07 * Math.random() + 0.05),
      (this.tiltAngle = 0),
      (this.draw = function () {
        return (
          ctx.beginPath(),
          (ctx.lineWidth = this.r / 2),
          (ctx.strokeStyle = this.color),
          ctx.moveTo(this.x + this.tilt + this.r / 4, this.y),
          ctx.lineTo(this.x + this.tilt, this.y + this.tilt + this.r / 4),
          ctx.stroke()
        );
      });
  }

  function InitializeButton() {
    // $("#stopButton").click(DeactivateConfetti),
    //   $("#startButton").click(RestartConfetti);
    $(".joe_aside__item.author")
      .on("mouseenter", RestartConfetti)
      .on("mouseleave", DeactivateConfetti);
  }

  function SetGlobals() {
    (canvas1 = document.getElementById("canvas-strips")),
      (ctx = canvas1.getContext("2d")),
      (W = window.innerWidth),
      (H = window.innerHeight);
    // (canvas1.width = W),
    // (canvas1.height = H);
  }

  function InitializeConfetti() {
    (particles = []), (animationComplete = !1);
    for (var t = 0; t < mp; t++) {
      var i = particleColors.getColor();
      particles.push(new confettiParticle(i));
    }
    StartConfetti();
  }

  function Draw() {
    ctx.clearRect(0, 0, W, H);
    for (var t, i = [], n = 0; n < mp; n++)
      (t = n), i.push(particles[t].draw());
    return Update(), i;
  }

  function RandomFromTo(t, i) {
    return Math.floor(Math.random() * (i - t + 1) + t);
  }

  function Update() {
    var t,
      i = 0;
    (angle += 0.01), (tiltAngle += 0.1);
    for (var n = 0; n < mp; n++) {
      if (((t = particles[n]), animationComplete)) return;
      !confettiActive && t.y < -15
        ? (t.y = H + 100)
        : (stepParticle(t, n), t.y <= H && i++, CheckForReposition(t, n));
    }
    0 === i && StopConfetti();
  }

  function CheckForReposition(t, i) {
    (t.x > W + 20 || t.x < -20 || t.y > H) &&
      confettiActive &&
      (i % 5 > 0 || i % 2 == 0
        ? repositionParticle(
            t,
            Math.random() * W,
            -10,
            Math.floor(10 * Math.random()) - 10
          )
        : Math.sin(angle) > 0
        ? repositionParticle(
            t,
            -5,
            Math.random() * H,
            Math.floor(10 * Math.random()) - 10
          )
        : repositionParticle(
            t,
            W + 5,
            Math.random() * H,
            Math.floor(10 * Math.random()) - 10
          ));
  }

  function stepParticle(t, i) {
    (t.tiltAngle += t.tiltAngleIncremental),
      (t.y += (Math.cos(angle + t.d) + 3 + t.r / 2) / 2),
      (t.x += Math.sin(angle)),
      (t.tilt = 15 * Math.sin(t.tiltAngle - i / 3));
  }

  function repositionParticle(t, i, n, e) {
    (t.x = i), (t.y = n), (t.tilt = e);
  }

  function StartConfetti() {
    (W = window.innerWidth),
      (H = window.innerHeight),
      // (canvas1.width = W),
      // (canvas1.height = H),
      (function t() {
        return animationComplete
          ? null
          : ((animationHandler = requestAnimFrame(t)), Draw());
      })();
  }

  function ClearTimers() {
    clearTimeout(reactivationTimerHandler), clearTimeout(animationHandler);
  }

  function DeactivateConfetti() {
    (confettiActive = !1), ClearTimers();
    isStart = false;
  }

  function StopConfetti() {
    (animationComplete = !0), null != ctx && ctx.clearRect(0, 0, W, H);
  }

  function RestartConfetti() {
    if (isStart) return;
    isStart = true;
    ClearTimers(),
      StopConfetti(),
      (reactivationTimerHandler = setTimeout(function () {
        (confettiActive = !0), (animationComplete = !1), InitializeConfetti();
      }, 100));
  }
  $(document).ready(function () {
    SetGlobals(),
      InitializeButton(),
      // InitializeConfetti(),
      $(window).resize(function () {
        (W = window.innerWidth), (H = window.innerHeight);
        // (canvas1.width = W),
        // (canvas1.height = H);
      });
  }),
    (window.requestAnimFrame =
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (t) {
        return window.setTimeout(t, 1e3 / 60);
      });
})();
