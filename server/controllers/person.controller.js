const Person = require('../models/person.models'); 



module.exports = {
    index: (request, response) => {
        response.json({
            message: "Hello World"
        });
    },
    createPerson: (request, response) => {
        Person.create(request.body)
            .then(person => response.json(person))
            .catch(err => response.json(err));
    },
    getAllPeople: (req, res) => {
        Person.find({})
            .then((allpeople) => {
                console.log(allpeople)
                res.json(allpeople)
            })
            .catch((err) => response.json(err));
    }
}

// module.exports.index = (request, response) => {
//     response.json({
//         message: "Hello World"
//     });
// }


// module.exports.createPerson = (request, response) => {
//     Person.create(request.body)
//         .then(person => response.json(person))
//         .catch(err => response.json(err));
// }

// module.exports.getAllPeople = (req, res) => {
//     Person.find({})
//         .then((allpeople) => {
//             console.log(allpeople)
//             res.json(allpeople)
//         })
//         .catch(err => response.json(err));
// }