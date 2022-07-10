(function ($) {
  /* smthscrll with ovrscrll */
  const cntnt = document.getElementById("main");
  Scrollbar.use(OverscrollPlugin);
  const options = {
    damping: 0.11,
    renderByPixels: !("ontouchstart" in document),
  };
  const overscrollOptions = {
    enable: true,
    effect: navigator.userAgent.match(/Android/) ? "glow" : "bounce",
    damping: 0.11,
    maxOverscroll: navigator.userAgent.match(/Android/) ? 150 : 100,
    glowColor: cntnt.dataset.glowColor,
  };
  const scrollbar = [
    Scrollbar.init(cntnt, {
      ...options,
      delegateTo: document,
      plugins: {
        overscroll: { ...overscrollOptions },
      },
    }),
  ];
  /* header init */
  const hdr = document.getElementById("header");
  const scrllbr = Scrollbar.init(document.getElementById("main"));
  scrllbr.addListener(function (status) {
    let offset = status.offset;
    hdr.style.top = offset.y + "px";
    hdr.style.left = offset.x + "px";
  });
  $(function () {
    "use strict";
    /* crsr init */
    const crsr = document.getElementById("crsr");
    var msStppd;
    /* crsr mousemove */
    document.addEventListener("mousemove", function (e) {
      const y = e.pageY;
      const x = e.pageX;
      crsr.style.top = y + "px";
      crsr.style.left = x + "px";
      crsr.style.display = "block";
      /* crsr mouse stop */
      function msStp() {
        crsr.style.display = "none";
      }
      /* crsr stop time */
      clearTimeout(msStppd);
      msStppd = setTimeout(msStp, 10000);
    });
    document.addEventListener("mouseout", function () {
      crsr.style.display = "none";
    });
    /* incre and decre */
    const cntElem = document.getElementById("cntElem");
    const incre = document.getElementById("incre");
    const decre = document.getElementById("decre");
    let cnt = 0;
    /* incre */
    incre.addEventListener("click", function (e) {
      let x = cnt >= 0 ? (cnt += 1) : cnt;
      cntElem.innerText = x;
    });
    /* decre */
    decre.addEventListener("click", function () {
      let x = cnt > 0 ? (cnt -= 1) : cnt;
      cntElem.innerText = x;
    });
    /* hdr */
    window.onscroll = () => {
      const k = document.getElementById("header");
      k.classList.toggle("s", window.scrollY >= 600);
    };
  });
})(jQuery);
