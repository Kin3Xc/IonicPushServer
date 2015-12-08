var ionicPushServer = require('ionic-push-server');

var credentials = {
    IonicApplicationID : "572f7af0",
    IonicApplicationAPIsecret : "0e7cfcfa7d9ad4815cc4d8c07c0cfd218e779bccb950e88a"
};

var notification = {
  "tokens":["438b49c8-38c0-41c7-9e1e-7526a064acfd"],
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
