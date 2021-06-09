var awsIot = require('aws-iot-device-sdk');

var fire_management=awsIot.device({
    keyPath: "./credentials/FireManagementSystem/555fabd878-private.pem.key",
    certPath: "./credentials/FireManagementSystem/555fabd878-certificate.pem.crt",
    caPath: "./credentials/AmazonRootCA1.pem",
    clientId: "fireManageSys",
    host: "a3323sqgsmclbb-ats.iot.ap-northeast-2.amazonaws.com"
});

fire_management.subscribe('fire/alarm',function(){
    console.log('subscribing to the topic fire/alarm !');
});

fire_management.on('message',function(topic,message){
    console.log("Request : ",message.toString());
    if(topic != 'fire/alarm') {
        console.log('no fire alarm')
        return;
    }
    
    var req = JSON.parse(message.toString());
    var isFire = req.msg;
    if(isFire == "fire!"){
        //publish alert to any device
        var message = {'notify' : 'fire/alert/sprinkler1'};
        console.log('publish to Any Device' + JSON.stringify(message));
        fire_management.publish('fire/alert/sprinkler1', JSON.stringify(message));
    
        // var message = {'notify' : 'fire/alert/sprinkler2'};
        // console.log('publish to Any Device' + JSON.stringify(message));
        // fire_management.publish('fire/alert/sprinkler2', JSON.stringify(message));

        //publish Activation Command to sprinkler
        var message = {'notify' : 'fire/sprinkler', 'activate' : 'true'};
        console.log('publish to Sprinkler' + JSON.stringify(message));
        fire_management.publish('fire/sprinkler', JSON.stringify(message));
    }
    else{
        console.log('It is not fire :)')
    }
})