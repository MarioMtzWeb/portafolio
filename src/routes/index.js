const express = require('express');
const router = express.Router();

//Por cada ruta pagina que necesitemos tenemos que agregar una ruta
router.get('/', (req, res) => {
    res.render('index', {title: 'Protafolio'});
});

//Exportamos el modulo router
module.exports = router;

