"use strict";

const overlay = document.querySelector(".overlay");
const openMenu = document.querySelector(".desk-navbar");
const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  openMenu.classList.remove("hidden");
  overlay.classList.remove("hidden");
});
overlay.addEventListener("click", function () {
  openMenu.classList.add("hidden");
  overlay.classList.add("hidden");
});

//fetch
fetch(
  "https://padax.github.io/taipei-day-trip-resources/taipei-attractions-assignment.json"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    //把已取資料呈現至畫面
    let spot = data.result.results;
    let lens = spot.length;
    //parent element
    let el1 = document.querySelector(".section1");
    let el2 = document.querySelector(".section2");
    //處理網址的字串
    let firstImg = spot[0].file.toLowerCase().split("jpg")[0] + "jpg";
    let secondImg = spot[1].file.toLowerCase().split("jpg")[0] + "jpg";
    //child element
    let item1 = document.createElement("p");
    let item2 = document.createElement("p");
    let imgItem1 = document.createElement("img");
    let imgItem2 = document.createElement("img");
    //拿取資料裡的東西放進頁面
    //字串部分
    item1.textContent = spot[0].stitle;
    item2.textContent = spot[1].stitle;
    //照片部分
    imgItem1.setAttribute("src", firstImg);
    imgItem2.setAttribute("src", secondImg);
    //append上去
    el1.appendChild(imgItem1);
    el1.appendChild(item1);
    el2.appendChild(imgItem2);
    el2.appendChild(item2);
    //選取class
    let el = document.querySelectorAll(".spot");
    for (let i = 0; i < lens; i++) {
      let imgItem = document.createElement("img");
      imgItem.setAttribute(
        "src",
        spot[i + 2].file.toLowerCase().split("jpg")[0] + "jpg"
      );
      el[i].appendChild(imgItem);

      let item = document.createElement("p");
      item.textContent = spot[i + 2].stitle;
      el[i].appendChild(item);
    }
  });
