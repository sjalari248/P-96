
const firebaseConfig = {
      apiKey: "AIzaSyB0mgkre0gEn5pLljU2Y-6wccB-Eytn3CU",
      authDomain: "kwitterapp-636c0.firebaseapp.com",
      databaseURL: "https://kwitterapp-636c0-default-rtdb.firebaseio.com",
      projectId: "kwitterapp-636c0",
      storageBucket: "kwitterapp-636c0.appspot.com",
      messagingSenderId: "373605979350",
      appId: "1:373605979350:web:2afb4559a5b9857b7b6577",
      measurementId: "G-55YTZYVDPX"
    };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);    

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
       purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function getData() 
{firebase.database().ref("/").on('value',

function(snapshot) 
{document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;

row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";

redirectToRoomName() 
{
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";  
}

});});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      windows.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
            window.location = "kwitter.html";
}
 

