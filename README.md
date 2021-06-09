# CloudIOT
Using AWS, let's make Cloud IOT System!

# Using 
AWS EC2, lambda, iot services

# #1
- AWS EC2 서버 생성 후 MQTT를 이용한 서버 통신   
![image](https://user-images.githubusercontent.com/49470328/119436093-80c28180-bd56-11eb-8915-8105d228df33.png)   
(Left : fileTransfer.js, Right : fileReceiver.js)
```   
node fileReceiver.js를 통해 실행시켜서 Topic assignment1을 구독하고 기다린다.
fileTransfer.js 가 실행되면 메시지가 넘어오게 되고, newTxt가 옳게 전송되었음을 cat newTxt를 통해 확인할 수 있다.
```

# #3
- AWS Lambda & S3 사용   
![image](https://user-images.githubusercontent.com/49470328/119436628-7a80d500-bd57-11eb-926e-ea01a0cba6f4.png)

# #4
- Create two applications for the virtual IoT devices   
<Fire Detector & Fire Sprinkler & Fire Management System>   

![image](https://user-images.githubusercontent.com/49470328/119436290-d860ed00-bd56-11eb-9ae1-f00e69328e9d.png)
![image](https://user-images.githubusercontent.com/49470328/119436292-da2ab080-bd56-11eb-97a8-7b5c842fd51d.png)

- 결과   
![image](https://user-images.githubusercontent.com/49470328/119436330-ef074400-bd56-11eb-9ad6-b601cf21cea6.png)   
(좌측하단 : fireDetector실행, 중앙상단 : ec2서버에서 fireManagementSystem실행, 우측하단 : fireSprinkler실행)
   
```
>> fireDetector : 정상적으로 fire/alarm을 보낸다.

>> fireManagementSystem : 정상적으로 fire/alarm을 구독하여 신호를 받고, 
Fire/alert/sprinkler1, fire/sprinkler 신호를 publish 한다. 

>> fireSprinkler : 정상적으로  fire/alert/sprinkler1, fire/sprinkler를 구독하여 신호를 받고 각각 “Fire!! Be careful” 과 “Sprinkler Activate” 동작을 실행한다.

>> 정상적으로 모두 작동함을 알 수 있다.

```
