const mongoose = require ("mongoose")



const {Schema} = mongoose

const userSchema= new Schema(
    {
        firstName: {type: String, required: true},
        lastname: {type: String, required: true},
        email: {type: String, required: true},
        password: {type: String, required: true},
        isAdmin:{type: Boolean, required: true},
        
    }, // las llaves de la coleccion
    {
        versionkey: false,
        timestamps: true


    }  // que deseamos capturar cada que se ingrese un dato
)         //recibe objeto json y obejto jsoon con elementos a capturar


// exportar como un modelo

//module.exports=mongoose.model("nombre colleccion",esquema de la conexion)

module.exports=mongoose.model("user", userSchema)