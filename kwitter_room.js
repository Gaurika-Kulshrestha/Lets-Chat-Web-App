
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {

      apiKey: "AIzaSyAD6jWelcp12aJxS8dzCtJHJAzHk5fdDTk",
    
      authDomain: "kwitter-48c1a.firebaseapp.com",
    
      databaseURL: "https://kwitter-48c1a-default-rtdb.firebaseio.com",
    
      projectId: "kwitter-48c1a",
    
      storageBucket: "kwitter-48c1a.appspot.com",
    
      messagingSenderId: "23882657768",
    
      appId: "1:23882657768:web:1fa5e02806aefd477b7e5d"
    
    };
    
    
    // Initialize Firebase
    
   firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function addRoom()
{
      room_name = document.getElementById("room_name").value;


      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
       

        localStorage.setItem("room_name" , room_name);


        window.location = "kwitter_page.html";

}
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
         window.location = "kwitter_page.html";
}
function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name"); 
 window.location = "index.html";      
}