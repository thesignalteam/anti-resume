const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const Profile = require('../models/profile.js');

/**
 * @route POST antiResume_backend/routes/resume/resumeInfo
 * @desc returns all resumes in array
 */
router.post("/resumeInfo", (req, res) => {
    Profile.find().then(profiles => {
        return res.json(profiles)
      })
  });

module.exports = router; 