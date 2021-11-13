/**
 * @file 生成首页标语动画
 * @author YunYouJun <me@yunyoujun.cn>
 * @description https://github.com/YunYouJun/hexo-theme-yun
 */

/**
 * 生成介于 min 与 max 之间的随机数
 * @param {number} min
 * @param {number} max
 * @returns
 */
function random(min, max) {
  return Math.random() * (max - min) + min;
}

/**
 * 生成标语
 * @param {string} title
 */
function generateBanner(title) {
  let sumH = 0;

  // const charContainer = document.querySelector(".banner-char-container");
  let rows = title.split('|')
  for (let r = 0; r < rows.length; r++){
    row = rows[r]
    const charContainer = document.getElementById("s" + r.toString());
    charContainer.innerHTML = "";
    for (let i = 0; i < row.length; i++) {
      const char = row[i];
      let charBox = document.createElement("div");
      let rn = random(3.5, 4.5);
      charBox.innerHTML = "<span class='char'>" + char + "</span>";
      let charSize = rn + "rem";

      charBox.classList.add("char-box");
      charContainer.appendChild(charBox);
      charBox.style.setProperty("--banner-char-size", charSize);

      const width = window
        .getComputedStyle(document.getElementsByClassName("char-box")[i])
        .getPropertyValue("height");
      charBox.style.setProperty("--banner-empty-border-size", width);

    }
  }
}


/**
 * 初始化 banner
 */
function initBanner() {
  if (window.banner) {
    setTimeout(() => {
      generateBanner(CONFIG.title);
      // typedBanner(CONFIG.title)
    }, 100);
  }
}

document.addEventListener("DOMContentLoaded", initBanner);
document.addEventListener("pjax:success", initBanner);
