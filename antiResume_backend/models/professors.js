const mongoose = require("mongoose")

const professorProfile = mongoose.Schema({
    email: {type: String, required: true, unique:true},
    name: {type: String, required: true},
    department: {type: String},
    shortBio: {type: String, required: true},
    thingsLearnt : [{type: String}],
    booksForFun: [{type: String}],
    thingsProudOf : [{type: String}],
    unconventionalSkills : [{type: String}],
    quirks : [{type: String}],
    comfortZone : [{type: String}],
    endOfTheWorld : [{type: String}],
    leapsOfFaith : [{type: String}],
    other : [{type: String}]
});

module.exports = mongoose.model('Professor', professorProfile);




