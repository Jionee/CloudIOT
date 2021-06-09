var AWS = require('aws-sdk');
var fs = require('fs');
var credentials = new AWS.SharedIniFileCredentials({profile: 'user2'});
AWS.config.credentials = credentials;
AWS.config.region = 'ap-northeast-2';
AWS.config.apiVersions = {
    s3: '2006-03-01',
};

var lambda = new AWS.Lambda();

var params = {
    Code: {
        S3Bucket : 'cws-lab-s3-v2',
        S3Key : 'myCalculator.zip'
    },
    FunctionName : 'myCalculator',
    Handler : 'index.handler',
    Role : 'arn:aws:iam::317157821698:role/myCalculator',
    Runtime : 'nodejs14.x',//Node.js 14.x
    Description:""
};

lambda.createFunction(params,function(err,data){
    if(err) console.log(err);
    else console.log(data);
});