const formatCurrency = (value) => {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    maximumFractionDigits: 0,
    currency: 'COP'
  }).format(value);
};

const rangeValor = document.getElementById('rangoValor');
const rangeTiempo = document.getElementById('rangoTiempo');
const rangeVValor = document.getElementById('rangeV');
const rangeVTiempo = document.getElementById('rangeV2');
const valor = document.getElementById('valor');

const setValueValor = () => {
  const newValue = Number((rangeValor.value - rangeValor.min) * 100 / (rangeValor.max - rangeValor.min));
  const newPosition = 10 - (newValue * 0.2);
  rangeVValor.innerHTML = `<span>${formatCurrency(rangeValor.value)}</span>`;
  valor.innerHTML = `<span>${formatCurrency(rangeValor.value)}</span>`;
  rangeVValor.style.left = `calc(${newValue}% + (${newPosition}px))`;
};

const setValueTiempo = () => {
  const newValue = Number((rangeTiempo.value - rangeTiempo.min) * 100 / (rangeTiempo.max - rangeTiempo.min));
  const newPosition = 10 - (newValue * 0.2);
  rangeVTiempo.innerHTML = `<span>${rangeTiempo.value} meses </span>`;
  rangeVTiempo.style.left = `calc(${newValue}% + (${newPosition}px))`;
};

document.addEventListener("DOMContentLoaded", () => {
  setValueValor();
  setValueTiempo();
});

rangeValor.addEventListener('input', setValueValor);
rangeTiempo.addEventListener('input', setValueTiempo);

////

var outputValor = document.getElementById("valor");
var sliderTiempo = document.getElementById("rangeV2");
var sliderValor = document.getElementById("rangeV");
var outputIntereses = document.getElementById("intereses");
var outputAval = document.getElementById("aval");
var outputCuota = document.getElementById("cuota");
var outputTotal = document.getElementById("total");
var tasa = 0.03;


outputValor.innerHTML = f.format(sliderValor.value);
outputTiempo.innerHTML = sliderTiempo.value;

alert ("arepa");
//Evento Cambio de Valor en Spans
sliderValor.oninput = function() {
	outputValor.innerHTML= f.format(this.value);
  outputCuota.innerHTML= f.format((tasa * sliderValor.value) / (1 - Math.pow(1+(tasa), -1 * sliderTiempo.value)));
  outputIntereses.innerHTML= f.format(((tasa * sliderValor.value) / (1 - Math.pow(1+(tasa), -1 * sliderTiempo.value))*sliderTiempo.value) - sliderValor.value);
  outputTotal.innerHTML= f.format(((tasa * sliderValor.value) / (1 - Math.pow(1+(tasa), -1 * sliderTiempo.value))*sliderTiempo.value));
}

sliderTiempo.oninput = function() {
	outputTiempo.innerHTML= this.value;
	outputCuota.innerHTML= f.format((tasa * sliderValor.value) / (1 - Math.pow(1+(tasa), -1 * sliderTiempo.value)));
  outputIntereses.innerHTML= f.format(((tasa * sliderValor.value) / (1 - Math.pow(1+(tasa), -1 * sliderTiempo.value))*sliderTiempo.value) - sliderValor.value);
  outputTotal.innerHTML= f.format(((tasa * sliderValor.value) / (1 - Math.pow(1+(tasa), -1 * sliderTiempo.value))*sliderTiempo.value));
}


