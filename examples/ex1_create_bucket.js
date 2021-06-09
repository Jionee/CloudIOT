

// ------------------------------------------------------------------
// S3 Example code: Create a Bucket
// ------------------------------------------------------------------

//버킷 만들기
var AWS = require('aws-sdk'); //object 만들어짐
var fs = require('fs'); //file 시스템
var credentials = new AWS.SharedIniFileCredentials({profile: 'user2'});
AWS.config.credentials = credentials;
AWS.config.region = 'ap-northeast-2';
AWS.config.apiVersions = {
    s3: '2006-03-01',
};
var s3 = new AWS.S3();

// Bucket Creation Function
function createBucket(params) {//promise 사용, standrard한 코드 스타일
    return new Promise(function (resolve, reject) {
        s3.createBucket(params, function (err, data) {
            if (err) reject(err); // an error occurred
            else resolve(data);
        });
    });
}

var test = async function () {
    try {
        console.log("Region: ", AWS.config);
        console.log("env, ", process.env.AWS_CONFIG)
        console.log('-- Create Bucket --');
        // Bucket Creation Request Parameters
        var cb_params = {
            Bucket: "cws-lab-s3-v2", //만들 버킷 이름 
        };
        var res1 = await createBucket(cb_params);
        console.log(res1);
    } catch (err) {
        console.log('-- Error --');
        console.log(err);
    }
}

// run the test
test();
