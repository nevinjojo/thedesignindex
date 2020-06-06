let favorites = [];
let primaryKey = 0; // Key of the DB document with the drawings
let db; // Firebase Database
fetchData();

function fetchData() {
  // Initialize Firebase DB
  let config = {
    apiKey: "AIzaSyBi-KP8N-7JsHsWBCD2wxsoJjYmZwaZeS4",
    authDomain: "thedesignindex-84e8e.firebaseapp.com",
    databaseURL: "https://thedesignindex-84e8e.firebaseio.com",
    projectId: "thedesignindex-84e8e",
    storageBucket: "thedesignindex-84e8e.appspot.com",
    messagingSenderId: "898189112545",
    appId: "1:898189112545:web:6b5698e1271a0f4e8db3a0",
    measurementId: "G-K8JMPF0TX1"
  };
  firebase.initializeApp(config);
  db = firebase.database();

  // Fetch data
  let firebaseFavorites = db.ref().child('favorites');
  firebaseFavorites.on('value',function(favorites){
    favorites.forEach(function(firebaseOrderReference){

    });
  });
}
