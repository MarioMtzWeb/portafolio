const express = require('express');
//Para restableser las rutas en tanto como en windows & linux
const path = require('path');
const app = express();

//settings
app.set('port', 5000);
//Obtenemos la ruta de los archivos views
app.set('views', path.join(__dirname, 'views'));

app.engine('html', require('ejs').renderFile);
app.set('view engine','ejs');

//middlewares

//routers
//Usamos las rutas del archivo routes/index
app.use(require('./routes/index'));

//static files
app.use(express.static('front-end'));

//listening the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});