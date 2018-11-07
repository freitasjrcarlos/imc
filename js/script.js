function IMC() {
  let peso = document.calcularIMC.peso.value;
  let alturaInicial = document.calcularIMC.altura.value;
  let span = document.querySelector('[data-span="resultado"]'); 

  altura = alturaInicial.replace(/,/g, ".");

  let resultado = peso / (altura * 2);

  if(resultado < 18.5){
    span.innerText = `Sinto muito, seu IMC é de ${resultado.toFixed(1)}, você precisa ganhar peso.`;
  }else if(resultado >= 18.5 && resultado < 24.9){
    span.innerText = `Parabéns, seu IMC é de ${resultado.toFixed(1)}, você esta dentro da média do peso ideal`;
  }else if(resultado >= 24.9 && resultado < 30){
    span.innerText = `Sinto muito,  seu IMC é de ${resultado.toFixed(1)}, você esta acima do peso ideal`;
  }else if(resultado >30){
    span.innerText = `Sinto muito,  seu IMC é de ${resultado.toFixed(1)}, você esta acima do peso ideal, obesidade.`;
  }else {
    span.innerText = 'Favor verificar dados digitados.'
  }  
}







