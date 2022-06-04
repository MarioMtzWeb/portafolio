import proyectos from "./data/data.js";
import { buttonMenu } from "./button-header.js";
import { getDataRepo } from "./repositorios-git.js";
let hrefPoyectos = "http://localhost:5000/proyectos"

buttonMenu('.btn-menu', '.header__nav', '.nav-item');

if(window.location.href === hrefPoyectos){
    getDataRepo(proyectos, '.projects-container');
}
