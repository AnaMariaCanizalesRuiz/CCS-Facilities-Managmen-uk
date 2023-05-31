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



