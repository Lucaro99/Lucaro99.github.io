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

function abrirmenu(){
  document.getElementById("full-menu").style.left = "0";
  document.body.style.overflow = 'hidden';
}

function cerrarmenu(){
  document.getElementById("full-menu").style.left = "-100%";
  document.body.style.overflow = 'visible';
}

