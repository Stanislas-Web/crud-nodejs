const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Apprenant = require('../models/apprenantModel');

router.get('/add',(request, response, next)=>{
    response.render('add_apprenant',{
        title: 'Ajouter un apprenant'
    })
});
router.get('/list',(request, response, next)=>{
    Apprenant.find()
    .exec()
    .then((documents)=>{
        response.render('list',{
            apprenants : documents,
            title: 'Liste des apprenants'
        })
    })
    .catch((error)=>{
        console.log(error);
    })
});
router.post('/add',(request, response, next)=>{
   const apprenant = new Apprenant({
    _id: new mongoose.Types.ObjectId(),
    nom: request.body.nom,
    prenom: request.body.prenom,
    option: request.body.option,
   });
   apprenant.save()
   .then((result)=>{
       if(result){
           response.render('list');
       }
   })
   .catch((error)=>{
       console.log(error);
   });
});
router.get('/list/:apprenantId',(request, response, next)=>{
    const id = request.params.apprenantId;
    Apprenant.deleteOne({_id: id})
    .exec()
    .then((result)=>{
        if(result){
           Apprenant.find()
           .exec()
           .then((documents)=>{
                response.render('list',{
                    apprenants : documents,
                    title: 'Liste des apprenants'
                });
           })
           .catch((error)=>{
               console.log(error);
           })
        }
    })
    .catch((error)=>{
        console.log(error);
    });
 });
module.exports = router;