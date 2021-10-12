document.addEventListener('DOMContentLoaded', () => {

  if (!window.SMBarrage) return;

  // 仅在 PC 端开启
  if (window.SMBarrage.switch === 'PC' && /windows phone|iphone|android/gi.test(window.navigator.userAgent)) return;

  // 仅在 WAP 端开启
  if (window.SMBarrage.switch === 'WAP' && !/windows phone|iphone|android/gi.test(window.navigator.userAgent)) return;



  /**
   * 屏幕可见区域宽度与高度
   */
  const clientWidth = document.documentElement.clientWidth;
  const clientHeight = document.documentElement.clientHeight;

  /**
   * 取随机数函数
   */
  const random = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  };

  /**
   * 生成 SMBarrage 内子元素
   */
  window.SMBarrage.list.forEach((item, index) => {

    // 限制弹幕最大数量
    if (index > window.SMBarrage.max) return;

    const itemEl = document.createElement('div');
    itemEl.className = 'SMBarrage';
    itemEl.innerHTML = `
      <img src="${item.avatar}" class="SMBarrage_avatar"></img>
      <span class="SMBarrage_text">${item.text}</span>
    `;

    document.body.appendChild(itemEl);

    // 限制弹幕显示区域
    if (window.SMBarrage.position === 'TOP') {
      itemEl.style.top = `${random(0, clientHeight / 2 - 34)}px`;
    } else if (window.SMBarrage.position === 'BOTTOM') {
      itemEl.style.top = `${random(clientHeight / 2, clientHeight - 34)}px`;
    } else {
      itemEl.style.top = `${random(0, clientHeight - 34)}px`;
    }

    const translateX = (clientWidth + itemEl.offsetWidth) + random(0, itemEl.offsetWidth);
    itemEl.style.transform = `translateX(${translateX}px)`;

    const transition = `transform ${parseInt((translateX / itemEl.offsetWidth)) * Number(window.SMBarrage.step) + random(0, 5)}s ${window.SMBarrage.timing}`;
    itemEl.style.transition = transition;

    // 30毫秒后出发
    const timer = setTimeout(() => {
      itemEl.style.transform = 'translateX(-100%)'
      clearTimeout(timer);
    }, 30);


    // 监听动画结束
    if (window.SMBarrage.continued === 'N') return;
    itemEl.addEventListener('transitionend', () => {
      itemEl.style.transition = '';
      itemEl.style.transform = `translateX(${translateX}px)`;
      // 50秒后出发
      const _timer = setTimeout(() => {
        itemEl.style.transition = transition;
        itemEl.style.transform = 'translateX(-100%)';
        clearTimeout(_timer);
      }, 50);
    });
  })
})