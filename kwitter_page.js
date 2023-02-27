//YOUR FIREBASE LINKS
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
    var user_name= localStorage.getItem("UserName");
    var room_name= localStorage.getItem("Room");
    function send(){
      var msg= document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like:0
      });
      document.getElementById("msg").value="";
       
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
         console.log(firebase_message_id);
         console.log(message_data);
         var name= message_data["name"];
         var message = message_data["message"];
         var like = message_data["like"];
         var name_with_tag= "<h4>"+name+"<img src='tick.png' class='user_tick'></h4>";
         var message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
         var like_button = "<button class='btn btn-warning' id='"+firebase_message_id+"' value='"+like+"' onclick='update_like(this.id)'>";
         var span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>Likes: "+like+"</span> </button> <hr>";
         var row= name_with_tag+message_with_tag+like_button+span_with_tag;
         document.getElementById("output").innerHTML+=row;
//End code
      } });  }); }
getData();
function  update_like(message_id){
 console.log("message_id"+message_id);
 var like_value=document.getElementById(message_id).value;
 var updated_likes=Number(like_value)+1;
 console.log(updated_likes);
firebase.database().ref(room_name).child(message_id).update({
      like:updated_likes
});

}
function logout(){
      localStorage.removeItem("UserName");
      localStorage.removeItem("Room");
      window.location="index.html";
}
