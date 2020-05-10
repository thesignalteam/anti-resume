const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const Profile = require('../models/profile.js');

const upload = require('../services/file-upload.js');
const singleUpload = upload.single('image');

router.post('/image-upload', function(req, res){
    console.log('in image upload');
    //get req.body.email 
    profilePic = ""; 
    singleUpload(req, res, function(err) {
        if (err) {
            console.log(err)
            return res.status(422).send({errors: [{title: 'File Upload Error', detail: err.message}] });
        }

        if(res) {
            profilePic = req.file.location;
            var conditions = { email: req.body.email }
            console.log("req.email " + req.body.email);
            console.log("req.profile pic url " + profilePic);
            var update = {profilePicUrl: profilePic}
            console.log('here'); 
            Profile.findOneAndUpdate(conditions, update, {new:true}, 
                function (error, result) {
                    if (error) {
                        console.log(error);
                        return res.status(400).end();
                    } else {
                        console.log(result);
                        return res.status(200).json(result);
                    }
                });
        }
        //return res.json({"imageUrl" : req.file.location});
    });  
});

module.exports = router; 