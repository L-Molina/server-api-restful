# Server API RESTful

cd src
nodemon server.js

- GET '/api/productos' => devuelve todos los productos.
- GET '/api/productos/:id' => devuelve un producto según su id.
- POST '/api/productos' => recibe y agrega un producto, y lo devuelve con su id asignado.
- PUT '/api/productos/:id' => recibe y actualiza un producto según su id.
- DELETE '/api/productos/:id' => elimina un producto según su id.
