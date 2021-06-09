var awsIot = require('aws-iot-device-sdk');

var fire_sprinkler=awsIot.device({
    keyPath: "./credentials/FireSprinkler/3cca6d2c47-private.pem.key",
    certPath: "./credentials/FireSprinkler/3cca6d2c47-certificate.pem.crt",
    caPath: "./credentials/AmazonRootCA1.pem",
    clientId: "fireSprinklerSys",
    host: "a3323sqgsmclbb-ats.iot.ap-northeast-2.amazonaws.com"
});

fire_sprinkler.subscribe('fire/sprinkler',function(){
    console.log('subscribing to the topic fire/sprinkler !');
});
fire_sprinkler.subscribe('fire/alert/sprinkler1',function(){
    console.log('subscribing to the topic fire/alert/sprinkler1 !');
});

fire_sprinkler.on('message',function(topic,message){    
    //console.log("Request : ",message.toString());
    var req = JSON.parse(message.toString());

    if(topic == 'fire/sprinkler') {
        var isActivate = req.activate;
        if(isActivate =='true')   
            console.log('Sprinkler Activate')
    }
    if(topic == 'fire/alert/sprinkler1') {
        console.log('Fire!! Be careful')
        return;
    }
})