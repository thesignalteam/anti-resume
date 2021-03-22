const mongoose = require("mongoose")

const professorProfile = mongoose.Schema({
    email: {type: String, required: true, unique:true},
    name: {type: String, required: true},
    profilePicUrl: {type: String}, 
    department: {type: String, required: true},
    position: {type: String, required: true},
    shortBio: {type: String, required: true},
    linkedIn: {type: String},
    personalWebsite: {type: String},
    publicEmail: {type: String},
    coursesTaught: [{type: String }], 
    companiesRejectedFrom: [{type: String }],
    thingIsworeIdFinish:  [{type: String }],
    everydayLs : [{type: String }],
    memoriesImade : [{type: String}],
    thingsLearnt : [{type: String}],
    booksForFun: [{type: String}],
    thingsProudOf : [{type: String}],
    unconventionalSkills : [{type: String}], 
    hobbies: [{type: String}],
    unexpectedTwists: [{type: String}], 
    obstacles :[{type: String}], 
    quirks : [{type: String}],
    comfortZone : [{type: String}],
    endOfTheWorld : [{type: String}],
    leapsOfFaith : [{type: String}],
    studentsKnow: [{type: String}],
    advise: [{type: String}],
    other : [{type: String}]
});

module.exports = mongoose.model('Professor', professorProfile);




