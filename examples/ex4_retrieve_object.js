

// ------------------------------------------------------------------
// S3 Example code: Create a Bucket
// ------------------------------------------------------------------

var AWS = require('aws-sdk');
var fs = require('fs');
var credentials = new AWS.SharedIniFileCredentials({profile: 'user2'});
AWS.config.credentials = credentials;
AWS.config.region = 'ap-northeast-2';
AWS.config.apiVersions = {
    s3: '2006-03-01',
};

var s3 = new AWS.S3();

function retrieveObject(params) {
    return new Promise(function (resolve, reject) {
        s3.getObject(params, function (err, data) {
            if (err) reject(err);
            else resolve(data);
        });
    });
}

var test = async function () {
    try {
        console.log('-- Retrieve an Object from the Bucket --');
        // Object Retrieval Request Parameters
        const ro_params = {
            Bucket: "cws-lab-s3-v2",
            Key: 'testImg.jpg', //이 object
        };
        var data = await retrieveObject(ro_params);
        // write the obejct to a local file
        fs.writeFile('./data.jpg', data.Body, (e, d) => {
            if (e) console.log(e);
            else console.log('Image is read and written to data.jpg !'); //s3에 있는 파일을 읽어서 local의 data.jpg에 저장하기
        });
    } catch (err) {
        console.log('-- Error --');
        console.log(err);
    }
}

// run the test
test();
