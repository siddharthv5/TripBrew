
  // Initialize Firebase
  
  // Initialize Firebase

  // AIzaSyBmlZg90EbVcpgyqpUaalDkTSQyt3S0cR4
  //382839424607
  
  var config = {
    apiKey: "AIzaSyBmlZg90EbVcpgyqpUaalDkTSQyt3S0cR4",
    authDomain: "test-1-b6e64.firebaseapp.com",
    databaseURL: "https://test-1-b6e64.firebaseio.com",
    projectId: "test-1-b6e64",
    storageBucket: "test-1-b6e64.appspot.com",
    messagingSenderId: "382839424607"
  };
  firebase.initializeApp(config);

  firebase.auth().onAuthStateChanged(function(user) {

    if(user){

      // Signed in

      $('#header_logout').show();
      $('#header_login').hide();
      $('#header_signup').hide();
      $('#login_with_google').hide();
      $('#logout').show();


    }else{

      // Not Signed In

      $('#header_logout').hide();
      $('#header_login').show();
      $('#header_signup').show();
      $('#login_with_google').show();
      $('#logout').hide();

    }


  });


  $('#header_logout').click(function(){

    firebase.auth().signOut().then(function() {
      // Sign-out successful.
    }).catch(function(error) {
      
    });

  });


  $('#logout').click(function(){

    firebase.auth().signOut().then(function() {
      // Sign-out successful.
    }).catch(function(error) {
      
    });

  });


