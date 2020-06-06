let db; // Firebase Database
let resourceData = [];
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
  db.ref().on("value", function (snapshot) {
    snapshot.val().resources.forEach(resource => {
      resourceData.push(resource);
      let res = resources.find(res => {
        return res.title === resource.title;
      });
      res.favorite_count = resource.favorite_count;
    });
    loadResources();
  }, function (error) {
    console.log("Error: " + error.code);
  });
}

function updateFavCount(title) {
  let resource = resources.find(res => {
    return res.title === title;
  });
  resource.favorite_count++;

  let resData = resourceData.find(res => {
    return res.title === title;
  });
  resData.favorite_count++;
}
