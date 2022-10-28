const mongoose = require("mongoose");


const dbName="user-clientes"
const url = `mongodb+srv://Victor911704:Victor9117@atlascluster.cifxokm.mongodb.net/${dbName}?retryWrites=true&w=majority`;

mongoose
  .connect(url)
  .then((db) => console.log("Conexion con BD exitosa"))
  .catch((err) => console.log(err))

module.exports = mongoose; 