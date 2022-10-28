const express = require("express")
const router = express.Router()


//importar modelo
const User = require ("../models/user.models")

//router.get("ruta", () => {})


router.post("/new-user", async (req, res) => {

    const newUser = new User (req.body)
/* 
    let email = new Client.email.value

    for(let email of dbName){
        if(email === new Client.email){
            return alert("el usuario ya existe")
        }
    } */
    
    await newUser.save()

    return res.status(201).json({msg: "Usuario guardado exitosamente"})
})
router.get("/get-user", async (req, res) => {

    const user = await User.find()
    return res.status(200).json({data: user})

})



/* router.delete("/delete-product", async(req,res)=>{

    await Product.findByIdAndDelete(req.query.id)
    return res.status(200).json({msg: "producto eliminado", id: req.query.id})
})


router.put("/update-product", async (req,res)=>{
    await Product.findByIdAndUpdate(req.query.id, {$set: req.body})

    res.status(200).json({msg:"Elemento fue actualizado", id: req.query.id})
}) */





//exportar las rutas
module.exports = router


