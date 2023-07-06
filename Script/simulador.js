const formatCurrency = (value) => {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    maximumFractionDigits: 0,
    currency: 'COP'
  }).format(value);
};


//Input Valor
var inputValor = document.getElementById('rangoValor');
var burbujaValor = document.getElementById('burbujaValor');

//Input Tiempo
var inputTiempo = document.getElementById('rangoTiempo');
var burbujaTiempo = document.getElementById('burbujaTiempo');

//Resumen crédito
var valor = document.getElementById('valor');
var intereses = document.getElementById('intereses');
var aval = document.getElementById('aval');
var cuota = document.getElementById('cuota');
var admi = document.getElementById('admi');
var total = document.getElementById('total');

//Tasas
var tasaFinanciacion = 0.028;
var tasaAval = 0.03;


//Admi
var firma = 8500;
var cuatroxmil = 0.004;
var iva = 0.19;


burbujaValor.innerHTML = `<span>${formatCurrency(inputValor.value)}</span>`;
valor.innerHTML = formatCurrency(inputValor.value);
inputTiempo.innerHTML = `<span>${inputTiempo.value} meses</span>`;
total.innerHTML = formatCurrency(Number(valor.textContent));

const setValueValor = () => {
  const newValue = Number((inputValor.value - inputValor.min) * 100 / (inputValor.max - inputValor.min));
  const newPosition = 10 - (newValue * 0.2);
  burbujaValor.innerHTML = `<span>${formatCurrency(inputValor.value)}</span>`;
  burbujaValor.style.left = `calc(${newValue}% + (${newPosition}px))`;
  
  valor.innerHTML = formatCurrency(inputValor.value);
  intereses.innerHTML = formatCurrency(((tasaFinanciacion * inputValor.value) / (1 - Math.pow(1+(tasaFinanciacion), -1 * inputTiempo.value))*inputTiempo.value) - inputValor.value);
  aval.innerHTML = formatCurrency((tasaAval * ((cuatroxmil * inputValor.value) + (firma) + Number(inputValor.value) +Number((tasaAval * inputValor.value) + ((tasaAval * inputValor.value) * iva)) + Number(((tasaFinanciacion * inputValor.value) / (1 - Math.pow(1+(tasaFinanciacion), -1 * inputTiempo.value))*inputTiempo.value) - inputValor.value))) + ((tasaAval * ((cuatroxmil * inputValor.value) + (firma) + Number(inputValor.value) +Number((tasaAval * inputValor.value) + ((tasaAval * inputValor.value) * iva)) + Number(((tasaFinanciacion * inputValor.value) / (1 - Math.pow(1+(tasaFinanciacion), -1 * inputTiempo.value))*inputTiempo.value) - inputValor.value))) * iva));
  admi.innerHTML = formatCurrency((cuatroxmil * inputValor.value) + (firma));
  cuota.innerHTML = formatCurrency(((cuatroxmil * inputValor.value) + (firma) + Number(inputValor.value) +Number((tasaAval * inputValor.value) + ((tasaAval * inputValor.value) * iva)) + Number(((tasaFinanciacion * inputValor.value) / (1 - Math.pow(1+(tasaFinanciacion), -1 * inputTiempo.value))*inputTiempo.value) - inputValor.value))/inputTiempo.value);
  total.innerHTML = formatCurrency(((cuatroxmil * inputValor.value) + (firma) + Number(inputValor.value) +Number((tasaAval * inputValor.value) + ((tasaAval * inputValor.value) * iva)) + Number(((tasaFinanciacion * inputValor.value) / (1 - Math.pow(1+(tasaFinanciacion), -1 * inputTiempo.value))*inputTiempo.value) - inputValor.value)));
  
};

const setValueTiempo = () => {
  const newValue = Number((inputTiempo.value - inputTiempo.min) * 100 / (inputTiempo.max - inputTiempo.min));
  const newPosition = 10 - (newValue * 0.2);
  burbujaTiempo.innerHTML = `<span>${inputTiempo.value} meses</span>`;
  burbujaTiempo.style.left = `calc(${newValue}% + (${newPosition}px))`;
  
  valor.innerHTML = formatCurrency(inputValor.value);
  intereses.innerHTML = formatCurrency(((tasaFinanciacion * inputValor.value) / (1 - Math.pow(1+(tasaFinanciacion), -1 * inputTiempo.value))*inputTiempo.value) - inputValor.value);
  cuota.innerHTML = formatCurrency(((cuatroxmil * inputValor.value) + (firma) + Number(inputValor.value) +Number((tasaAval * inputValor.value) + ((tasaAval * inputValor.value) * iva)) + Number(((tasaFinanciacion * inputValor.value) / (1 - Math.pow(1+(tasaFinanciacion), -1 * inputTiempo.value))*inputTiempo.value) - inputValor.value))/inputTiempo.value);
  total.innerHTML = formatCurrency(((cuatroxmil * inputValor.value) + (firma) + Number(inputValor.value) +Number((tasaAval * inputValor.value) + ((tasaAval * inputValor.value) * iva)) + Number(((tasaFinanciacion * inputValor.value) / (1 - Math.pow(1+(tasaFinanciacion), -1 * inputTiempo.value))*inputTiempo.value) - inputValor.value)));
  
};

document.addEventListener("DOMContentLoaded", () => {
  setValueValor();
  setValueTiempo();
});

inputValor.addEventListener('input', setValueValor);
inputTiempo.addEventListener('input', setValueTiempo);

if (cuota < 180000) {
  window.alert('Advertencia: La cuota es menor a $180,000');
}
////

