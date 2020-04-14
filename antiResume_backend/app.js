const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Profile = require('./models/profile.js');


const bodyParser = require("body-parser");
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb', parameterLimit: 50000 }));

mongoose.connect("mongodb+srv://rgemawat:DEvG4exC4PCpDWuT@cluster0-xsvdb.mongodb.net/test?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to mongo db');
    })
    .catch(() => {
        console.log('error in connecting to mongo db');
    });

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Header",
        "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods",
        "GET, POST, PATCH, DELETE, PUT, OPTIONS");
    next();
});

app.get('/api/getResume/:email', (req, res) => {
    var conditions = { email: req.params.email }
    Profile.findOne(conditions,
        function (error, result) {
            if (error) {
                return res.status(400).end();
            } else {
                console.log(result);
                return res.status(200).json(result);
            }
        });
});

app.get('/api/getAllResumes/:type', (req, res) => {
    var conditions = { email: req.params.type }
    Profile.find(conditions,
        function (error, result) {
            if (error) {
                return res.status(400).end();
            } else {
                console.log("all : " + result);
                return res.status(200).json(result);
            }
        });
});

app.post('/api/addNewResume', (req, res) => {
    var newResume = new Profile({
        email: req.body.email,
        name: req.body.name,
        type: req.body.type, 
        shortBio: req.body.shortBio,
        companiesRejectedFrom: req.body.companiesRejectedFrom,
        clubsRejectedFrom: req.body.clubsRejectedFrom,
        thingIsworeIdFinish:  req.body.thingIsworeIdFinish,
        everydayLs : req.body.everydayLs,
        memoriesImade : req.body.memoriesImade,
        thingsLearnt : req.body.thingsLearnt,
        booksForFun: req.body.booksForFun,
        thingsProudOf : req.body.thingsProudOf,
        unconventionalSkills : req.body.unconventionalSkills,
        quirks : req.body.quirks,
        comfortZone : req.body.comfortZone,
        endOfTheWorld : req.body.endOfTheWorld,
        leapsOfFaith : req.body.leapsOfFaith,
        other : req.body.other,
    });

    newResume.save((err) => {
        if (err) {
            res.type('html').status(500);
            res.write('could not add resume ' + err);
            console.log(err);
            return res.status(500).end();
        } else {
            return res.status(201).json({ message: 'resume added successfully' });
        }
    });
});



app.get('*', function (req, res) {
    //res.render('error');
    console.log("not a valid route");
    return res.status(404).end();
});

module.exports = app; 