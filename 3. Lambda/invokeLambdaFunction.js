var AWS = require('aws-sdk');
var fs = require('fs');
var credentials = new AWS.SharedIniFileCredentials({profile: 'user2'});
AWS.config.credentials = credentials;
AWS.config.region = 'ap-northeast-2';
AWS.config.apiVersions = {
    s3: '2006-03-01',
};

var lambda = new AWS.Lambda();

const exp = {"op":"/", "la":123, "ra":456};
var params = {
    FunctionName : "myCalculator",
    InvocationType : "RequestResponse",
    Payload : JSON.stringify(exp)
};

lambda.invoke(params,function(err,data){
    if(err) console.log(err);
    else console.log(JSON.parse(data.Payload));
});