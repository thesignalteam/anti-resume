const aws = require('aws-sdk')
const multer = require('multer')
const multerS3 = require('multer-s3')
const configuration = require("../config.json")["production"];
console.log(configuration.s3_cred); 

aws.config.update({
    region: 'us-east-2',
    secretAccessKey: configuration.s3_cred.secretAccessKey,
    accessKeyId: configuration.s3_cred.accessKeyId
});

const s3 = new aws.S3();
console.log("Region: ", s3.config.region);
console.log("secred AccessKey: ", s3.config.credentials.secretAccessKey);
console.log("secred AccessKey Id: ", s3.config.credentials.accessKeyId);
 
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'anti-resume-photos',
    acl: 'public-read', 
    metadata: function (req, file, cb) {
      //cb(null, {fieldName: file.fieldname});
      cb(null, {fieldName: "testing meta data"});
    },
    key: function (req, file, cb) {
      cb(null, file.originalname);
    }
  }) 
})

module.exports = upload;