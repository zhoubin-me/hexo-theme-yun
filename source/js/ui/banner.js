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

function randomInteger(max) {
  return Math.floor(Math.random() * max)
}

function isMobile(){
  let info = navigator.userAgent;
  let agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPod", "iPad"];
  for(let i = 0; i < agents.length; i++){
      if(info.indexOf(agents[i]) >= 0) return true;
  }
  return false;
}
/**
 * 生成标语
 * @param {string} title
 */
function generateBanner(title, is_random) {
  var request = new XMLHttpRequest();
  var fname = ''
  if (isMobile()) {
    fname = '../sentence.json'
  } else {
    fname = '../poem.json'
  }
  request.open("GET", fname, false);
  request.send(null)
  var data = JSON.parse(request.responseText);
  idx = randomInteger(data.length)
  var rows = data[idx]['content'].reverse()
  console.log(rows)
  for (let r = 0; r < rows.length; r++){
    row = rows[r].trim();
    const charContainer = document.getElementById("s" + r.toString());
    charContainer.innerHTML = "";
    for (let i = 0; i < row.length; i++) {
      const char = row[i];
      let charBox = document.createElement("div");
      let rn = random(2.5, 3.5);
      if (r==rows.length-1) {
        rn = 1.5;
      }
      charBox.innerHTML = "<span class='char'>" + char + "</span>";
      let charSize = rn + "rem";

      charBox.classList.add("char-box");
      charContainer.appendChild(charBox);

      if (2 % 2 === 0) {
        charBox.classList.add("char-left");
        charBox.style.animationName = "char-move-left";
      } else {
        charBox.classList.add("char-right");
        charBox.style.animationName = "char-move-right";
      }

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
      generateBanner(CONFIG.title, CONFIG.random);
    }, 100);
  }
}

document.addEventListener("DOMContentLoaded", initBanner);
document.addEventListener("pjax:success", initBanner);
