window.onscroll = function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    document.getElementById("navbar").style.background = "#fff";
  } else {
    document.getElementById("navbar").style.background = "";
  }
};

