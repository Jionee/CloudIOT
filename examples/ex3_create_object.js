
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

function createObject(params) {
    return new Promise(function (resolve, reject) {
        s3.upload(params, function (err, data) { //local에서 S3object로 업로드 하는 function
            if (err) reject(err);
            else resolve(data);
        })
    });
}

var test = async function () {
    try {
        // 1st Object
        const co_params1 = {
            Bucket: "cws-lab-s3-v2",
            Key: 'testImg.jpg', //만들 Object ID
            Body: fs.createReadStream("./testImg.jpg") //현재 디렉토리 여기에 있는 애를 //크니까 stream으로 읽어서 위 ID로 object 생성
        };
        var res2 = await createObject(co_params1);
        console.log(res2);
        
        // // 2nd Object
        // const co_params2 = {
        //     Bucket: "cws-lab-s3-v2",
        //     Key: 'images/lunmeikwai.jpg',
        //     Body: fs.createReadStream("./lunmeikwai.jpg")
        // };
        // var res3 = await createObject(co_params2);
        // console.log(res3);
    } catch (err) {
        console.log('-- Error --');
        console.log(err);
    }
}

// run the test
test();
