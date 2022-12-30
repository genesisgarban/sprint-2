let tarjetaNombre = document.querySelector('.detalle_tarjeta_nombre');
let nombreInput = document.querySelector('#cardholder');
let errorNombreDiv = document.querySelector('.form_cardholder_error');

let tarjetaNumero = document.querySelector('.numero_tarjeta');
let numeroInput = document.querySelector('#numerotarjeta');
let errorNumeroDiv = document.querySelector('.form_number_error');

let tarjetaMes = document.querySelector('.tarjeta_mes');
let mesInput = document.querySelector('#tarjetames');
let errorMesDiv = document.querySelector('.form_input_mm_error');

let tarjetaAño = document.querySelector('.tarjeta_año');
let añoInput = document.querySelector('#tarjetaaño');
let errorAñoDiv = document.querySelector('.form_input_yy_error');

let tarjetaCvc = document.querySelector('.tarjeta_atras_cvc');
let cvcInput = document.querySelector('#tarjetacvc');
let errorCvcDiv = document.querySelector('.form_input_cvc_error');

nombreInput.addEventListener('input', ()=>{
    if(nombreInput.value == ''){
    tarjetaNombre.innerText = 'JANE APPLESEED'
    }else{
        tarjetaNombre.innerText = nombreInput.value;
    }
});

numeroInput.addEventListener('input', ()=>{




    let regExp = /[A-z]/g;
    if(regExp.test(numeroInput.value)){
        showError(numeroInput, errorNumeroDiv, 'wrong format, numbers only');
    }else{
        numeroInput.value = numeroInput.value.replace(/\s/g, '').replace(/([0-9]{4})/g,'$1 ').trim();
        showError(numeroInput, errorNumeroDiv, '', false);
    }

tarjetaNumero.innerText = numeroInput.value;

    if(numeroInput.value == ''){
        tarjetaNumero.innerText = '0000 0000 0000 0000';
    }
});
 

mesInput.addEventListener('input', ()=>{
    mesInput.innerText = mesInput.value;
    validateLetters(mesInput, mesErrorDiv);
 });

 añoInput.addEventListener('input', ()=>{
    tarjetaAño.innerText = añoInput.value;
    validateLetters(añoInput, errorAñoDiv);

 });

 cvcInput.addEventListener('input', ()=>{
    tarjetaCvc.innerText = cvcInput.value;
    validateLetters(cvcInput, errorCvcDiv);
 });



let confirmBtn = document.querySelector('.form_submit');

let nombreValidacion = false;
let numeroValidacion = false;
let mesValidacion = false;
let añoValidacion = false;
let cvcValidacion = false;

let formSection = document.querySelector('.form');
let Thanks = document.querySelector('.thanks');

confirmBtn.addEventListener('click', event=>{
event.preventDefault();

if(verifyIsFilled(nombreInput, nombreErrorDiv)){
 nombreValidacion = true;
}else{
    nombreValidacion = false;
}

if(verifyIsFilled(numeroInput, errorNumeroDiv) == true){
    if(numeroInput.value.length == 19){
        showError(numeroInput, errorNumeroDiv, '', false);
    numeroValidacion = true;
    }else{
        showError(numeroInput, errorNumeroDiv, 'Wrong number');
      numeroValidacion = false;
    }
}

if(verifyIsFilled(mesInput, mesErrorDiv)){
    if(parseInt(mesInput.value)>0 && parseInt(mesInput.value)<=12){
        showError(mesInput, mesErrorDiv, '', false);
        mesValidacion = true;
    }else{
        showError(mesInput, mesErrorDiv, 'Wrong Month');
        mesValidacion = false;
    }

}

    if(verifyIsFilled(añoInput, errorAñoDiv)){
        if(parseInt(añoInput.value)>22 && parseInt(añoInput.value)<=27){
            showError(añoInput, errorAñoDiv, '', false);
            añoValidacion = true;
        }else{
        (añoInput, errorAñoDiv, 'Wrong Year');
        añoValidacion = false;
    }
}

   if(verifyIsFilled(cvcInput, errorCvcDiv)){
    if(cvcInput.value.length == 3 ){
        showError(cvcInput, errorCvcDiv, '', false);
        cvcValidacion = true;

    }else{
        showError(cvcInput, errorCvcDiv, 'Wrong CVC');
        cvcValidacion = false;
    }
   }

   if(nombreValidacion == true && numeroValidacion == true && mesValidacion == true && añoValidacion == true && cvcValidacion == true){
formSection.style.display = 'none';
Thanks.style.display = 'block';
   }
});




function showError(divInput,divError,msgError, show = true){
  if(show){ 
    divError.innerText = msgError; 
    divInput.style.borderColor = '#FF0000';
  
}else{
    divError.innerText = msgError;
    divInput.style.borderColor = 'hsl(270, 3%, 87%)';
   }
}

function verifyIsFilled(divInput, divError){
    if(divInput.value.length> 0){
        showError (divInput, divError, "", false);
        return true;
    }else{
        showError(divInput, divError, "Can't be blank");
        return false;
    }

}

function validateLetters(input, divError){

    let regExp = /[A-z]/g;
    if(regExp.test(input.value)){
        showError(input, divError, 'Wrong format, numbers only');
    }else{
        showError(input, divError, '', false);
    
    }
}


