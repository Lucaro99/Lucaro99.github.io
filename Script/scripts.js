window.onscroll = function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    var links = document.getElementsByClassName("link");
    for (var i = 0; i < links.length; i++) {
      links[i].style.color = "#01686d";
    }
    document.getElementById("navbar").style.background = "#fff";
    document.getElementById("logo-blanco").style.display = "block";
    document.getElementById("logo-blanco").src = "Img/Logos/Logotipo-Original.svg";
  } else {
    var links = document.getElementsByClassName("link");
    for (var i = 0; i < links.length; i++) {
      links[i].style.color = "";
    }
    document.getElementById("navbar").style.background = "";
    document.getElementById("logo-blanco").style.display = "";
    document.getElementById("logo-blanco").src = "Img/Logos/Logotipo-Blanco.svg";
  }
};

function abrirmenu(){
  document.getElementById("full-menu").style.left = "0";
  document.body.style.overflow = 'hidden';
};

function cerrarmenu(){
  document.getElementById("full-menu").style.left = "-110%";
  document.body.style.overflow = 'visible';
};


$(function() {
  $('.link').on('click', function() {
    $('.active-link').removeClass('active-link');
    $(this).addClass('active-link');
  });

  $(".full-menu .navegacion ul li").hover(function() {
    const index = $(this).index();
    $(".Menu-image").eq(index).fadeIn(400);
  }, function() {
    const index = $(this).index();
    $(".Menu-image").eq(index).fadeOut(400);
  });
});

window.addEventListener("load", function(event) {
  const pepito = document.getElementsByClassName("contenedor");
  for (i=0; i< pepito.length; i++) {
    pepito[i].addEventListener('click', function () {
      this.classList.toggle('activa')
    })
  }  
});
$( '#btn-validate' ).click(function(){
  var $captcha = $( '#recaptcha' ),
      response = grecaptcha.getResponse();
    if (response.length === 0) {
    $( '.msg-error').text( "reCAPTCHA is mandatory" );
    if( !$captcha.hasClass( "error" ) ){
      $captcha.addClass( "error" );
    }
  } else {
    $( '.msg-error' ).text('');
    $captcha.removeClass( "error" );
    alert( 'reCAPTCHA marked' );
  }
})

const f = new Intl.NumberFormat('es-us', {
  style: 'currency',
    maximumFractionDigits: 0,
  currency: 'USD'
});

document.addEventListener("DOMContentLoaded", function () {
  const review = [
    { id: 1, img: "Img/Campañas/campana_1.jpg", imgMobile: "Img/Campañas/campana_1_m.jpg", link: "https://www.instagram.com/financiateya/" },
    { id: 2, img: "Img/Campañas/campana_2.jpg", imgMobile: "Img/Campañas/campana_2_m.jpg", link: "https://www.facebook.com/financiateya/" },
    { id: 3, img: "Img/Campañas/campana_3.jpg", imgMobile: "Img/Campañas/campana_3_m.jpg", link: "https://ejemplo.com/3" },
    { id: 4, img: "Img/Campañas/campana_4.jpg", imgMobile: "Img/Campañas/campana_4_m.jpg", link: "https://ejemplo.com/4" }
  ];

  const img = document.getElementById("img");
  const link = document.getElementById("link_carrusel");
  const atras = document.querySelector(".atras");
  const adelante = document.querySelector(".adelante");

  let startItem = 0;

  function actualizarImagen() {
    img.classList.add("fade-out"); // Agrega la clase para la transición
    setTimeout(() => {
      const nuevaImg = window.innerWidth < 900 ? review[startItem].imgMobile : review[startItem].img;
      img.src = nuevaImg;
      link.href = review[startItem].link; // Cambia el enlace
      img.classList.remove("fade-out"); // Quita la clase después del cambio
    }, 300);
  }

  actualizarImagen();

  adelante.addEventListener("click", function () {
    startItem = (startItem + 1) % review.length;
    actualizarImagen();
  });

  atras.addEventListener("click", function () {
    startItem = (startItem - 1 + review.length) % review.length;
    actualizarImagen();
  });

  // Cambiar imagen si la ventana se redimensiona
  window.addEventListener("resize", actualizarImagen);
});
