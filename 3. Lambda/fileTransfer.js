console.log("FILESENDER START");
var mqtt = require('mqtt');
//ec2-3-36-217-73.ap-northeast-2.compute.amazonaws.com
var client = mqtt.connect('mqtt://3.36.217.73');
//var client = mqtt.connect('mqtt://172.31.43.188');
console.log("client - "+mqtt);

var fs = require('fs');

var file = fs.readFileSync('testTxt.txt');
// file = 'testTxt.txt'
// data = fs.readFileSync(file);
// buf = {
//     "name": file,
//     "data": data,
// };

client.on('connect',function(){
    console.log("CONNECTION");
    //console.log('buf==>'+JSON.stringify(buf));
    //client.publish('assignment1', JSON.stringify(buf)); //publish, file transfer
    client.publish('assignment1', file); //publish, file transfer
    client.subscribe('assignment1'); //subscribe
});

client.on('message', function(topic,message){ //when got message from Topic'assignment1'
    console.log("MESSAGE");
    console.log(topic + ' : send');
    client.end(); //close Client
})