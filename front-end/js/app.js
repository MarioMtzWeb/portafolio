import proyectos from "./data/data.js";
import { buttonMenu } from "./button-header.js";
import { getDataRepo } from "./repositorios-git.js";
import { formSubmit } from "./formSubmit.js";

let hrefPoyectos = "http://localhost:5000/proyectos"
let hrefContacto = "http://localhost:5000/contacto"


buttonMenu('.btn-menu', '.header__nav', '.nav-item');

if(window.location.href === hrefPoyectos){
    getDataRepo(proyectos, '.projects-container');
}

if(window.location.href === hrefContacto){
    let $formulario = document.querySelector('.contact-form');

    $formulario.addEventListener('submit', e => {
        e.preventDefault();
        formSubmit('.contact-form');
        $formulario.reset();
    });
}


