var ionicPushServer = require('ionic-push-server');

var credentials = {  
    IonicApplicationID : "572f7af0",
    IonicApplicationAPIsecret : "cb2853f6f87b0bbbf2840c6ecc76b879861e12ae4f8df203"
};

var notification = {  
  "tokens":["53c34852-6942-46e7-a2bb-3a389b3fc2ba"],
  "notification":{
    "alert":"Probando notificaciones PUSH con Ionic!",
    "ios":{
      "badge":1,
      "sound":"chime.aiff",
      "expiry": 1423238641,
      "priority": 10,
      "contentAvailable": true,
      "payload":{
        "key1":"value",
        "key2":"value"
      }
    }
  } 
};

ionicPushServer(credentials, notification);