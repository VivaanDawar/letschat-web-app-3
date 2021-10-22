// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDMa2j3w6vnuRkjC8gCDt5mp9aGsBEoiXI",
  authDomain: "tictactoe-f2907.firebaseapp.com",
  databaseURL: "https://tictactoe-f2907.firebaseio.com",
  projectId: "tictactoe-f2907",
  storageBucket: "tictactoe-f2907.appspot.com",
  messagingSenderId: "903673281238",
  appId: "1:903673281238:web:49f6c5bb8f08ef8d8c6777",
  measurementId: "G-ENF31JSWRG"
};
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("Username");
    document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

    function addroom() {
           room_name = document.getElementById("room_name").value;

           firebase.database().ref("/").child(room_name).update({
                purpose: "Adding Room Name"
          });
  
          localStorage.setItem("Roomname",room_name);
      
          window.location = "kwitter_room.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
          console.log("room_name - " + Room_names);
          row = "<div class='room_name' id="+Room_names+" onclick='redirectToroomname(this.id)'>#"+Room_names+"</div><hr>";
          document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();
function redirectToroomname(name){
    console.log(name);
    localStorage.setItem("Roomname",name);
    window.location = "kwitter_room.html";
}
function logout() {
    localStorage.removeItem("Username");
    localStorage.removeItem("Roomname");
    window.location = "index.html";
}