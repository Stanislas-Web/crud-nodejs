const mongoose = require('mongoose');
const aprennantSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nom: { type: String, required: true},
    prenom: { type: String, required: true},
    option: { type: String, required: true},
});
module.exports = mongoose.model('Apprenant', aprennantSchema);