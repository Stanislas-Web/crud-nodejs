const express = require('express');
const router = express.Router();

router.get('/add',(request, response, next)=>{
    response.render('add_apprenant',{
        title: 'Ajouter un apprenant'
    })
});
router.post('/add',(request, response, next)=>{
    console.log(request.body);
});
module.exports = router;