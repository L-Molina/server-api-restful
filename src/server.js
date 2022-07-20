const express = require("express");
const router = require("./routes.js");
const app = express;
const PORT = 8080;

//middleware

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/productos", router);

//server running

const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});

//server error

server.on("error", (err) => {
    console.log(`Error en el servidor: ${error}`)
});