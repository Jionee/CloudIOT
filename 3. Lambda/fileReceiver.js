console.log("RECEIVER START");

var mqtt = require('mqtt');
//var client = mqtt.connect('mqtt://172.31.43.188');
var client = mqtt.connect('mqtt://3.36.217.73');
var fs = require('fs');

client.on('connect', function(){
    console.log("CONNECTION");
    client.subscribe('assignment1');
});

client.on('message', function(topic,message){
    console.log("MESSAGE!!"+message);
    //data = JSON.parse(message);
    //console.log("NAME : "+data.name);
    //console.log("DATA : "+data.data);
    //fs.writeFileSync('newTxt',data.data);
    fs.writeFileSync('newTxt',message);
    client.end();
});