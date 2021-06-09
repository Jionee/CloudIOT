var awsIot = require('aws-iot-device-sdk');

var fire_detector=awsIot.device({
    keyPath: "./credentials/FireDetector/f8c746fc26-private.pem.key",
    certPath: "./credentials/FireDetector/f8c746fc26-certificate.pem.crt",
    caPath: "./credentials/AmazonRootCA1.pem",
    clientId: "fireDetectSys",
    host: "a3323sqgsmclbb-ats.iot.ap-northeast-2.amazonaws.com"
});

fire_detector.on('connect', function(){
    console.log('Fire Detector connected');

    setInterval(function(){
        var message = {'notify' : 'fire/alarm', 'msg' : 'fire!'};
        console.log('publish to FMS' + JSON.stringify(message));
        fire_detector.publish('fire/alarm', JSON.stringify(message));
    }, 5000);
});