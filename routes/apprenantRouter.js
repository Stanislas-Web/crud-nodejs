const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Apprenant = require('../models/apprenantModel');

// route racine pour afficher les apprenants dans un tableaux html
router.get('/',(request, response, next)=>{
    Apprenant.find()
    .exec()
    .then((apprenants)=>{
        if(apprenants){
            response.render('list',{
                title: 'Liste des apprenants',
                apprenants: apprenants
            });
        }
    })
    .catch((error)=>{
        console.log(error);
    })
});
// route qui affiche le formulaire d'ajout
router.get('/add',(request, response, next)=>{
    response.render('add_apprenant',{
        title: 'Ajouter un apprenant',
    });
});
router.post('/add',(request, response, next)=>{
    const apprenant = new Apprenant({
        _id: new mongoose.Types.ObjectId(),
        nom: request.body.nom,
        prenom: request.body.prenom,
        option: request.body.option
    });
    apprenant.save()
    .then((result)=>{
        response.redirect('/');
    })
    .catch((error)=>{
        console.log(error);
    });
});
// route qui supprime un apprenant
router.get('/delete/:apprenantId',(request, response, next)=>{
    const id = request.params.apprenantId;
    Apprenant.deleteOne({_id: id})
    .exec()
    .then((result)=>{
        if(result){
            response.redirect('/');
        }
    })
    .catch((error)=>{
        console.log(error);
    });
});

module.exports = router;