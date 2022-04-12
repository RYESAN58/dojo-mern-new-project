const PersonController = require('../controllers/person.controller');
const Person = require('../models/person.models')
module.exports = (app) => {
    app.get('/api', PersonController.index);

    app.get('/api/people', PersonController.getAllPeople);
    
    app.post('/api/people', PersonController.createPerson);
}