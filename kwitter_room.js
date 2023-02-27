
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyC_-Y0xIY6yRnZFU2274w63uqRZ5GeyCXQ",
      authDomain: "kwitter-c573d.firebaseapp.com",
      databaseURL: "https://kwitter-c573d-default-rtdb.firebaseio.com",
      projectId: "kwitter-c573d",
      storageBucket: "kwitter-c573d.appspot.com",
      messagingSenderId: "916113798558",
      appId: "1:916113798558:web:b3d9c8278a86aa691c128f"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    var user_name = localStorage.getItem("UserName");
    document.getElementById("welcome").innerHTML="Welcome "+user_name+" !";

    function room(){
      var Room= document.getElementById("room_name").value;
      firebase.database().ref("/").child(Room).update({
            purpose : "Adding room name"
      });
      localStorage.setItem("Room",Room);
      window.location="kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log(Room_names);
      var row ="<div class='room_name' id='"+Room_names+"' onclick='redirecttoroomname(this.id)'>#"+Room_names+"</div> <hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirecttoroomname(name){
      console.log(name);
      localStorage.setItem("Room",name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("UserName");
      localStorage.removeItem("Room");
      window.location="index.html";
}