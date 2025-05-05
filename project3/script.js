let lastScrollTop = 0;
  const navbar = document.getElementById("mainNav");

  window.addEventListener("scroll", function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop < lastScrollTop) {
      // Scrolling up
      navbar.style.top = "0";
    } else {
      // Scrolling down
      navbar.style.top = "-100px";
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });


  