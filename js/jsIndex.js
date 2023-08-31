window.addEventListener('scroll', function(){
    let animacion = document.getElementById('Seccion2');
    let posicionObj = animacion.getBoundingClientRect().top;
    console.log(posicionObj);
    let tamañoPantalla = window.innerHeight/1;

    if(posicionObj < tamañoPantalla){
        
        const elemento = animacion;
        elemento.classList.add('animate__animated', 'animate__fadeInRightBig');
        elemento.style.setProperty('--animate-duration', '2s');
    }
})


/* Variable para acceder las secciones con la clase "hidden" */

const seccionesOcultas = document.querySelectorAll('.hidden');
const contadoranimacion = document.querySelectorAll('.counterhidden');


/* El Observer*/

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        entry.target.classList.toggle('mostrar', entry.isIntersecting);
        // if(entry.isIntersecting) observer.unobserve(entry.target);        
    });
},

{threshold: 0.3}


);

const observercounter = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

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
        // if(entry.isIntersecting) observer.unobserve(entry.target);        
    });
},

{threshold: 0.3}


);

seccionesOcultas.forEach((seccion)=>observer.observe(seccion));

contadoranimacion.forEach((seccion)=>observercounter.observe(seccion));