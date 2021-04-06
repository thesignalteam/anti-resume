const mongoose = require("mongoose")

const studentProfile = mongoose.Schema({
    email: {type: String, required: true, unique:true},
    name: {type: String, required: true},
    profilePicUrl: {type: String}, 
    class: {type: String}, 
    type: {type: String, required: true}, 
    shortBio: {type: String, required: true},
    linkedIn: {type: String},
    personalWebsite: {type: String},
    publicEmail: {type: String},
    companiesRejectedFrom: [{type: String }],
    clubsRejectedFrom: [{type: String }],
    thingIsworeIdFinish:  [{type: String }],
    everydayLs : [{type: String }],
    regretsIHave: [{type: String}],
    memoriesImade : [{type: String}],
    thingsLearnt : [{type: String}],
    booksForFun: [{type: String}],
    thingsProudOf : [{type: String}],
    unconventionalSkills : [{type: String}],
    quirks : [{type: String}],
    comfortZone : [{type: String}],
    endOfTheWorld : [{type: String}],
    leapsOfFaith : [{type: String}],
    obstacles :[{type: String}], 
    lifeEvents : {type: String}, 
    other : [{type: String}]
});

module.exports = mongoose.model('Profile', studentProfile);

studentProfile.methods.standardizeEmail = function() {
    this.email = this.email.toLowerCase();
    return this.email;
}


