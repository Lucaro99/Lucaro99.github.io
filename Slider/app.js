const sliders = document.querySelectorAll('.slider');
const btnNext = document.getElementById('next');
const btnPrev = document.getElementById('prev');
let sliderInterval = setInterval(siguienteSlider, 5000);
let contador = 0;

sliders.forEach((slider, i) => {
    slider.style.left = `${i * 100}%`;
});

btnNext.addEventListener('click', () => {
    contador++;
    moverSlider();
    reiniciarIntervalo();
});

btnPrev.addEventListener('click', () => {
    contador--;
    moverSlider();
    reiniciarIntervalo();
});

function moverSlider() {
    if(contador < sliders.length && contador >= 0){
        sliders.forEach((item) => {
            item.style.transform = `translateX(-${contador * 100}%)`;
        });
    }else if(contador < 0){
        contador = sliders.length - 1;
        sliders.forEach((item) => {
            item.style.transform = `translateX(-${contador * 100}%)`;
        });
    }else{
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
