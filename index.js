(function ($) {
  $(function () {
    "use strict";
    /* cursor init */
    const crsr = document.getElementById("cursor__conn");
    var msStppd;
    /* cursor mousemove */
    document.addEventListener("mousemove", function (e) {
      const y = e.pageY;
      const x = e.pageX;
      crsr.style.top = y + "px";
      crsr.style.left = x + "px";
      crsr.style.display = "block";
      /* crsr mouse stop */
      function mouseStopped() {
        crsr.style.display = "none";
      }
      /* crsr stop time */
      clearTimeout(msStppd);
      msStppd = setTimeout(mouseStopped, 10000);
    });
    document.addEventListener("mouseout", function () {
      crsr.style.display = "none";
    });
    /* increment and decrement */
    const cntElem = document.getElementById("cntElem");
    const incre = document.getElementById("incre");
    const decre = document.getElementById("decre");
    let cnt = 0;
    /* increment */
    incre.addEventListener("click", function (e) {
      let x = cnt >= 0 ? (cnt += 1) : cnt;
      cntElem.innerText = x;
    });
    /* decrement */
    decre.addEventListener("click", function () {
      let x = cnt > 0 ? (cnt -= 1) : cnt;
      cntElem.innerText = x;
    });
  });
})(jQuery);
