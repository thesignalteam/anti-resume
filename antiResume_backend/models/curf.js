const mongoose = require("mongoose")

const curfProfile = mongoose.Schema({
    email: {type: String, required: true, unique:true},
    name: {type: String, required: true},
    class: {type: String, required: true},
    profilePicUrl: {type: String}, 
    linkedIn: {type: String},
    personalWebsite: {type: String},
    publicEmail: {type: String},
    shortBio: {type: String, required: true},
    type: {type: String, required: true}, // will be curf 
    companiesRejectedFrom: [{type: String }], 
    thingIsworeIdFinish:  [{type: String }],
    everydayLs : [{type: String }],
    memoriesImade : [{type: String}],
    thingsLearnt : [{type: String}],
    booksForFun: [{type: String}],
    thingsProudOf : [{type: String}],
    unconventionalSkills : [{type: String}],
    thingsIwouldDoInstead: [{type: String}], 
    unexpectedTwists: [{type: String}], 
    quirks : [{type: String}],
    comfortZone : [{type: String}],
    endOfTheWorld : [{type: String}],
    leapsOfFaith : [{type: String}],
    advice: [{type: String}],
    // linkedIn: {type: String},
    // personalWebsite: {type: String},
    // publicEmail: {type: String},
    // clubsRejectedFrom: [{type: String }],
    // regrets: [{type: String}],
    // obstacles :[{type: String}], 
    // lifeEvents : [{type: String}], 
    // other : [{type: String}]
});

module.exports = mongoose.model('Curf', curfProfile);

curfProfile.methods.standardizeEmail = function() {
    this.email = this.email.toLowerCase();
    return this.email;
}


