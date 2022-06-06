const express = require('express');
const router = express.Router();

//Por cada ruta pagina que necesitemos tenemos que agregar una ruta

//Ruta principal
router.get('/', (req, res) => {
    res.render('index.html', {title: 'Protafolio'});
});
//Ruta de Blog
router.get('/blog', (req, res) => {
    res.render('blog.html', {title: 'Blog'});
});
//Proyectos
router.get('/proyectos', (req, res) => {
    res.render('proyectos.html', {title: 'Proyectos'});
});
//Ruta de contacto
router.get('/contacto', (req, res) => {
    res.render('contacto.html', {title: 'Contacto'});
});

//Exportamos el modulo router
module.exports = router;

