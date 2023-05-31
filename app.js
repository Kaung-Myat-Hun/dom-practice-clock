let s = new Date().getSeconds();
let m = new Date().getMinutes();
let h = new Date().getHours();
(function time() {
  setTimeout(function () {
    if (s > 58) {
      m += 1;
      s = 0;
      time();
      if (h < 10) {
        hour.innerHTML = "0" + h;
      } else {
        hour.innerHTML = h;
      }
      if (m < 10) {
        minute.innerHTML = ":" + "0" + m;
      } else {
        minute.innerHTML = ":" + m;
      }
      if (s < 10) {
        second.innerHTML = ":" + "0" + s;
      } else {
        second.innerHTML = ":" + s;
      }
      if (m > 58) {
        m = 0;
        h += 1;
        time();
        if (h < 10) {
          hour.innerHTML = "0" + h;
        } else {
          hour.innerHTML = h;
        }
        if (m < 10) {
          minute.innerHTML = ":" + "0" + m;
        } else {
          minute.innerHTML = ":" + m;
        }
        if (s < 10) {
          second.innerHTML = ":" + "0" + s;
        } else {
          second.innerHTML = ":" + s;
        }
      }
    } else {
      s += 1;
      time();
      if (h < 10) {
        hour.innerHTML = "0" + h;
      } else {
        hour.innerHTML = h;
      }
      if (m < 10) {
        minute.innerHTML = ":" + "0" + m;
      } else {
        minute.innerHTML = ":" + m;
      }
      if (s < 10) {
        second.innerHTML = ":" + "0" + s;
      } else {
        second.innerHTML = ":" + s;
      }
    }
  }, 1000);
})();

let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");

let ampmBtn = document.getElementById("ampm");
let hr24 = document.getElementById("hr24");
let ampmD = document.getElementById("ampmD");

ampm.addEventListener("click", () => {
  ampm.setAttribute("class", "active");
  hr24.setAttribute("class", "");
  if (h > 12) {
    h -= 12;
    ampmD.innerHTML = "PM";
    ampm.setAttribute("disabled");
  } else {
    h = h;
  }
});

hr24.addEventListener("click", () => {
  if (h < 12) {
    h += 12;
    ampmD.innerHTML = "";
  } else {
    h = h;
    ampmD.innerHTML = "";
  }
  ampm.setAttribute("class", "");
  hr24.setAttribute("class", "active");
});
