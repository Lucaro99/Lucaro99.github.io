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
  } else {
    var links = document.getElementsByClassName("link");
    for (var i = 0; i < links.length; i++) {
      links[i].style.color = "";
    }
    document.getElementById("navbar").style.background = '';
  }
};

function abrirmenu() {
  document.getElementById("full-menu").style.left = "0";
  document.body.style.overflow = 'hidden';
}

function cerrarmenu() {
  document.getElementById("full-menu").style.left = "-110%";
  document.body.style.overflow = 'visible';
}

document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('.link');
  links.forEach(function(link) {
    link.addEventListener('click', function() {
      const activeLink = document.querySelector('.active-link');
      if (activeLink) {
        activeLink.classList.remove('active-link');
      }
      link.classList.add('active-link');
    });
  });

  const menuItems = document.querySelectorAll('.full-menu .navegacion ul li');
  const menuImages = document.querySelectorAll('.Menu-image');

  menuItems.forEach(function(item, index) {
    item.addEventListener('mouseenter', function() {
      menuImages[index].style.display = 'block';
      menuImages[index].style.transition = 'opacity 0.4s';
      menuImages[index].style.opacity = 1;
    });

    item.addEventListener('mouseleave', function() {
      menuImages[index].style.opacity = 0;
      setTimeout(function() {
        menuImages[index].style.display = 'none';
      }, 400);
    });
  });

  const btnValidate = document.getElementById('btn-validate');
  if (btnValidate) {
    btnValidate.addEventListener('click', function() {
      var captcha = document.getElementById('recaptcha');
      var response = grecaptcha.getResponse();
      var errorMsg = document.querySelector('.msg-error');

      if (response.length === 0) {
        errorMsg.textContent = "reCAPTCHA is mandatory";
        if (!captcha.classList.contains("error")) {
          captcha.classList.add("error");
        }
      } else {
        errorMsg.textContent = '';
        captcha.classList.remove("error");
        alert('reCAPTCHA marked');
      }
    });
  }
});

window.addEventListener("load", function(event) {
  const pepito = document.getElementsByClassName("contenedor");
  for (let i = 0; i < pepito.length; i++) {
    pepito[i].addEventListener('click', function () {
      this.classList.toggle('activa');
    });
  }
});

const formatter = new Intl.NumberFormat('es-US', {
  style: 'currency',
  maximumFractionDigits: 0,
  currency: 'USD'
});

document.addEventListener("DOMContentLoaded", function () {
  const sliders = document.querySelectorAll('.slider');
  const btnNext = document.getElementById('next');
  const btnPrev = document.getElementById('prev');
  let sliderInterval = setInterval(siguienteSlider, 5000);
  let contador = 0;

  sliders.forEach((slider, i) => {
    slider.style.left = `${i * 100}%`;
  });

  if (btnNext) {
    btnNext.addEventListener('click', () => {
      contador++;
      moverSlider();
      reiniciarIntervalo();
    });
  }

  if (btnPrev) {
    btnPrev.addEventListener('click', () => {
      contador--;
      moverSlider();
      reiniciarIntervalo();
    });
  }

  function moverSlider() {
    if (contador < sliders.length && contador >= 0) {
      sliders.forEach((item) => {
        item.style.transform = `translateX(-${contador * 100}%)`;
      });
    } else if (contador < 0) {
      contador = sliders.length - 1;
      sliders.forEach((item) => {
        item.style.transform = `translateX(-${contador * 100}%)`;
      });
    } else {
      contador = 0;
      sliders.forEach((item) => {
        item.style.transform = `translateX(-${contador * 100}%)`;
      });
    }
  }

  function reiniciarIntervalo() {
    clearInterval(sliderInterval);
    sliderInterval = setInterval(siguienteSlider, 5000);
  }

  function siguienteSlider() {
    contador++;
    moverSlider();
  }
});