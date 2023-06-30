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

function send() 
{
    var message = document.getElementById("message").value;
    firebase.database().ref().push({
        username: username,
        message: message,
        likes: 0
    });
    document.getElementById("message").value = "";
}


