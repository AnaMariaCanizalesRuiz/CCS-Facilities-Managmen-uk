var numero= 123456789;
var boton2= document.getElementById('botonNumero');


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

const numeroCambio=document.getElementById('text10');
let cantidad=0;
let tiempo=setInterval(() => {
    cantidad+=1
    numeroCambio.textContent="+"+cantidad;
    if(cantidad===10){
        clearInterval(tiempo);
    }
}, 80);

const numeroCambio2=document.getElementById('text50');
let cantidad2=0;
let tiempo2=setInterval(() => {
    cantidad2+=1
    numeroCambio2.textContent=cantidad2;
    if(cantidad2===50){
        clearInterval(tiempo2);
    }
}, 80);


const numeroCambio3=document.getElementById('text1500');
let cantidad3=0;
let tiempo3=setInterval(() => {
    cantidad3+=30
    numeroCambio3.textContent=cantidad3;
    if(cantidad3===1500){
        clearInterval(tiempo3);
    }
}, 80);

const numeroCambio4=document.getElementById('text247');
let cantidad4=0;
let tiempo4=setInterval(() => {
    cantidad4+=1
    numeroCambio4.textContent=cantidad4+"/7";
    if(cantidad4===24){
        clearInterval(tiempo4);
    }
}, 80);

window.addEventListener('scroll', function(){
    let animacion = document.getElementById('Seccion2');
    let posicionObj = animacion.getBoundingClientRect().top;
    console.log(posicionObj);
    let tamañoPantalla = window.innerHeight/3.5;

    if(posicionObj < tamañoPantalla){
        
        const elemento = animacion;
        elemento.classList.add('animate__animated', 'animate__fadeIn');
        elemento.style.setProperty('--animate-duration', '3s');
    }
})

