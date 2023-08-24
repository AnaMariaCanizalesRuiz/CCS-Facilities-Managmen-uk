var numero= 123456789;
var boton2= document.getElementById('botonNumero');


console.log( "Hola soy index" );


const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


function btnOnClick(){
    
    var aux = document.createElement("input");
    aux.setAttribute("value", numero);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);

    const tooltip = bootstrap.Tooltip.getInstance('#botonNumero1') // Returns a Bootstrap tooltip instance
    // setContent example
    tooltip.setContent({ '.tooltip-inner': 'copied number' })
    
}


function btnOnClick2(){
    console.log( "Hola soy btnOnClick2" );
    var aux = document.createElement("input");
    aux.setAttribute("value", numero);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);

    const tooltip2 = bootstrap.Tooltip.getInstance('#botonNumero2') // Returns a Bootstrap tooltip instance
    // setContent example
    tooltip2.setContent({ '.tooltip-inner': 'copied number' })
    
}


const numeroCambio=document.getElementById('textoseccion6');
let cantidad=0;

let tiempo=setInterval(() => {
    cantidad+=1
    numeroCambio.textContent="+"+cantidad;

    if(cantidad===10){
        clearInterval(tiempo);
    }

}, 80);


const numeroCambio2=document.getElementById('textoseccion650');
let cantidad2=0;

let tiempo2=setInterval(() => {
    cantidad2+=1
    numeroCambio2.textContent=cantidad2;

    if(cantidad2===50){
        clearInterval(tiempo2);
    }

}, 80);


const numeroCambio3=document.getElementById('textoseccion61500');
let cantidad3=0;

let tiempo3=setInterval(() => {
    cantidad3+=50
    numeroCambio3.textContent=cantidad3;

    if(cantidad3===1500){
        clearInterval(tiempo3);
    }

}, 80);



const numeroCambio4=document.getElementById('textoseccion6247');
let cantidad4=0;

let tiempo4=setInterval(() => {
    cantidad4+=1
    numeroCambio4.textContent=cantidad4+"/7";

    if(cantidad4===24){
        clearInterval(tiempo4);
    }

}, 80);

  

