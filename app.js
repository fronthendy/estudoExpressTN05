const express = require('express');
const app = express();

//indica para express que usaremos os dados em JSON
app.use(express.json());

let usuarios = [
    {nome: "Hendy", sobrenome: "Almeida"}
];

// http://localhost:3000/inicio
app.get("/inicio", (request, response) => {
    return response.send("Alô Alô, Graças a Deus!");
})

// http://localhost:3000/usuarios
app.get("/usuarios", (request, response) => {
    return response.json(usuarios);
})

// http://localhost:3000/usuarios
app.post("/usuarios", (request, response) => {
    const { nome, sobrenome } = request.body;

    usuarios.push({ nome, sobrenome });

    return response.json({ nome, sobrenome });
})

// http://localhost:3000/usuarios/hendy
app.put("/usuarios/:nome", (request, response) => {
    const { nome } = request.params;

    const { sobrenome } = request.body;



})

app.listen(3000, (req, res) => {
    console.log("Servidor rodando")
})