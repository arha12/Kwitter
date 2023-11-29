var firebaseConfig = {
  apiKey: "AIzaSyDTsV4XQYZM_z1lr0dnZ8xFQQT7DBX4S8c",
  authDomain: "kwitter-36119.firebaseapp.com",
  databaseURL: "https://kwitter-36119-default-rtdb.firebaseio.com",
  projectId: "kwitter-36119",
  storageBucket: "kwitter-36119.appspot.com",
  messagingSenderId: "46906105709",
  appId: "1:46906105709:web:ce9739c3973243b0bf8464",
  measurementId: "G-KMKP60RW9V"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//ADD YOUR FIREBASE LINE
user_name = localStorage.getItem("user_name");
function addRoom()
{
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
   purpose : "adding room name"
  });
  localStorage.setItem("room_name",room_name);
   
  window.location = "kwitter_page.html";
}
function getData() { firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = "";
 snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key;
   Room_names = childKey;

    //Start code
    console.log("Room Name-"+Room_names);
    row = "<div class= 'room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+ Room_names+"</div><hr>";
    document.getElementById("output").innerHTML +=row;
     //End code 
    }); }); }
     getData();

     function redirectToRoomName(name)
     {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
     }
     function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";}