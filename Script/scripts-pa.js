window.onscroll = function scrollFunction() {
  if (
    document.body.scrollTop > 10 ||
    document.documentElement.scrollTop > 10
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
    document.getElementById("navbar").style.background = '';
    document.getElementById("logo-blanco").style.display = '';
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
