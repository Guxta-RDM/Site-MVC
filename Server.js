// Requerir os packages
const express = require('express');
const expressEjsLayout = require('express-ejs-layouts');
const app = express();

// Localização da pasta views, a "view engine" (ejs) e um layout
app.set("views", "./views");
app.set("view engine", "ejs");
app.set("layout", "./layout");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(expressEjsLayout);

// Rotas


// Inicar servidor Web
app.listen(5000, function () {
    console.log("Servidor web iniciado com sucesso.")
});
