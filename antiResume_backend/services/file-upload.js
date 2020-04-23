const aws = require('aws-sdk')
const multer = require('multer')
const multerS3 = require('multer-s3')
 
aws.config.update({
    region: 'us-east-2',
    secretAccessKey: 'removed',
    accessKeyId: 'removed'
});

const s3 = new aws.S3();
console.log("Region: ", s3.config.region);
console.log("secred AccessKey: ", s3.config.secretAccessKey);
console.log("secred AccessKey Id: ", s3.config.accessKeyId);
 
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'anti-resume-files',
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