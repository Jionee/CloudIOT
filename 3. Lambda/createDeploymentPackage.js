var AWS = require('aws-sdk');
var fs = require('fs');
var credentials = new AWS.SharedIniFileCredentials({profile: 'user2'});
AWS.config.credentials = credentials;
AWS.config.region = 'ap-northeast-2';
AWS.config.apiVersions = {
    s3: '2006-03-01',
};

var s3 = new AWS.S3();

var createDeploymentPackage = async function (dp_params){
    function createBucket(bucket_name){
        var cb_params = {
            Bucket: bucket_name,
        };
        return new Promise(function(resolve,reject){
            s3.createBucket(cb_params,function(err,data){
                if(err) reject(err); //an error occurred
                else resolve(data);
            });
        });
    }
    
    function createObject(bucket_name,zipfile){
        const co_params = {
            Bucket: bucket_name,
            Key:zipfile,
            Body:fs.createReadStream("./"+zipfile),
        };
        return new Promise(function(resolve,reject){
            s3.upload(co_params,function(err,data){
                if(err) reject(err); //an error occurred
                else resolve(data);
            })
        })
    }

    try{
        if(dp_params.newBucketFlag){
            console.log('-- Create Bucket --');
            var res = await createBucket(dp_params.bucket);
            console.log(res)
        }
        console.log('-- Create Object --');
        var res = await createObject(dp_params.bucket,dp_params.zipfile);
        console.log(res);
    }catch(err) {console.log(err)}
}

var dp_params = {
    bucket :'cws-lab-s3-v2',
    newBucketFlag : false,
    zipfile : 'myCalculator.zip'
};

createDeploymentPackage(dp_params)

