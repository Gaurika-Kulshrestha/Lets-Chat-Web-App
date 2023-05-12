
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {

      apiKey: "AIzaSyAD6jWelcp12aJxS8dzCtJHJAzHk5fdDTk",
    
      authDomain: "kwitter-48c1a.firebaseapp.com",
    
      databaseURL: "https://kwitter-48c1a-default-rtdb.firebaseio.com",
    
      projectId: "kwitter-48c1a",
    
      storageBucket: "kwitter-48c1a.appspot.com",
    
      messagingSenderId: "23882657768",
    
      appId: "1:23882657768:web:1fa5e02806aefd477b7e5d"
    
    };
    
    
    // Initialize Firebase
    
    const app = initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
