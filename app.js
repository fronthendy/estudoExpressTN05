const express = require('express');
const app = express();

let usuarios = [
    {nome: "Hendy", sobrenome: "Almeida"}
];

// http://localhost:3000/inicio
app.get("/inicio", (request, response) => {
    return response.send("Alô Alô, Graças a Deus!");
})

// http://localhost:3000/usuarios
app.get("/usuarios", (request, response) => {
    // console.log(request);
    return response.json(usuarios);
})

app.listen(3000, () => {
    console.log("Servidor rodando")
})