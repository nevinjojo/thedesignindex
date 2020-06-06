let db; // Firebase Database
let resourceData = [];
let favourited = [];
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
    resourceData = snapshot.val().resources;
    for (let [title, fields] of Object.entries(snapshot.val().resources)) {
      let resource = resources.find(res => {
        return res.title === title;
      });
      resource.favorite_count = fields.favorite_count;
    }
    loadResources()
  }, function (error) {
    console.log("Error: " + error.code);
  });
}

function updateFavCount(title) {
  let resource = resources.find(res => {
    return res.title === title;
  });

  if (!favourited.includes(title)) {
    favourited.push(title);
    resource.favorite_count++;
    resourceData[title].favorite_count++;
  } else {
    const index = favourited.indexOf(title);
    if (index > -1)
      favourited.splice(index, 1);
    resource.favorite_count--;
    resourceData[title].favorite_count--;
  }

  let resourceRef = firebase.database().ref("resources/" + title);
  resourceRef.update({
    favorite_count: resourceData[title].favorite_count
  });
  // toggleFavColor(title + '-fav-btn');
}

function updateVisitCount(title) {
  let resource = resources.find(res => {
    return res.title === title;
  });

  resource.visit_count++;
  resourceData[title].visit_count++;

  let resourceRef = firebase.database().ref("resources/" + title);
  resourceRef.update({
    visit_count: resourceData[title].visit_count
  });
}

function toggleFavColor(id) {
  document.getElementById(id).classList.toggle("favourited");
}
