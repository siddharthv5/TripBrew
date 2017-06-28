
  // Initialize Firebase
  
var config = {
      apiKey: "AIzaSyA02ZVtlcLj5Xvhg_0aCRhRX1QK5TBKzQo",
      authDomain: "tripbrew-a1a3d.firebaseapp.com",
      databaseURL: "https://tripbrew-a1a3d.firebaseio.com",
      projectId: "tripbrew-a1a3d",
      storageBucket: "tripbrew-a1a3d.appspot.com",
      messagingSenderId: "95524022857"
    };
    firebase.initializeApp(config);

     firebase.auth().onAuthStateChanged(function(user) {
        
          if (user) {
             //$('#account-details').html(JSON.stringify(user, null, '  '));
          } else{

          }
        });