const f = new Intl.NumberFormat("es-us", {
  style: "currency",
  maximumFractionDigits: 0,
  currency: "USD",
});

var sliderValor = document.getElementById("rangoValor");
var sliderTiempo = document.getElementById("rangoTiempo");
var outputValor = document.getElementById("valor");
var outputValor1 = document.getElementById("valor1");
var outputTiempo = document.getElementById("tiempo");
var outputCuota = document.getElementById("cuota");
var outputIntereses = document.getElementById("intereses");
var outputTotal = document.getElementById("total");
var tasa = 0.03;

outputTiempo.innerHTML = sliderTiempo.value;
outputValor.innerHTML = f.format(sliderValor.value);
outputValor1.innerHTML = f.format(sliderValor.value);

//Evento Cambio de Valor en Spans


sliderValor.oninput = function () {

  outputValor1.innerHTML = f.format(this.value);
  outputCuota.innerHTML = f.format(
    (tasa * sliderValor.value) /
      (1 - Math.pow(1 + tasa, -1 * sliderTiempo.value))
  );
  outputValor.innerHTML = f.format(this.value);
  outputCuota.innerHTML = f.format(
    (tasa * sliderValor.value) /
      (1 - Math.pow(1 + tasa, -1 * sliderTiempo.value))
  );
  outputIntereses.innerHTML = f.format(
    ((tasa * sliderValor.value) /
      (1 - Math.pow(1 + tasa, -1 * sliderTiempo.value))) *
      sliderTiempo.value -
      sliderValor.value
  );
  outputTotal.innerHTML = f.format(
    ((tasa * sliderValor.value) /
      (1 - Math.pow(1 + tasa, -1 * sliderTiempo.value))) *
      sliderTiempo.value
  );
};

sliderTiempo.oninput = function () {
  outputTiempo.innerHTML = this.value;
  outputCuota.innerHTML = f.format(
    (tasa * sliderValor.value) /
      (1 - Math.pow(1 + tasa, -1 * sliderTiempo.value))
  );
  outputIntereses.innerHTML = f.format(
    ((tasa * sliderValor.value) /
      (1 - Math.pow(1 + tasa, -1 * sliderTiempo.value))) *
      sliderTiempo.value -
      sliderValor.value
  );
  outputTotal.innerHTML = f.format(
    ((tasa * sliderValor.value) /
      (1 - Math.pow(1 + tasa, -1 * sliderTiempo.value))) *
      sliderTiempo.value
  );
};

//Evento Cambio Color Slider
sliderValor.addEventListener("mousemove", function () {
  var ejeValor = sliderValor.value / 1000000;
  var colorValor =
    "linear-gradient(90deg, rgb(237,30,121)" +
    ejeValor +
    "%, rgb(214,214,214)" +
    ejeValor +
    "%)";
  sliderValor.style.background = colorValor;
});

sliderTiempo.addEventListener("mousemove", function () {
  var ejeTiempo = sliderTiempo.value * (100 / 48) - 3;
  var colorTiempo =
    "linear-gradient(90deg, rgb(237,30,121)" +
    ejeTiempo +
    "%, rgb(214,214,214)" +
    ejeTiempo +
    "%)";
  sliderTiempo.style.background = colorTiempo;
});

var elInput = document.querySelector('#rangoValor');
if (elInput) {
  var etiqueta = document.querySelector('#etiqueta');
  if (etiqueta) {
    etiqueta.innerHTML = elInput.value;

    elInput.addEventListener('input', function() {
      etiqueta.innerHTML = elInput.value;
    }, false);
  }
}