// NOTE
// Please use your own firebase details below. For more details visit: https://pixinvent.com/demo/vuesax-vuejs-admin-dashboard-template/documentation/development/firebaseIntegration.html


import firebase from 'firebase/app'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAqfBu93oT64YTJo7kONMLBX88etmdsAZs",
    authDomain: "my-kp-project-e7724.firebaseapp.com",
    databaseURL: "https://my-kp-project-e7724.firebaseio.com",
    projectId: "my-kp-project-e7724",
    storageBucket: "my-kp-project-e7724.appspot.com",
    messagingSenderId: "754226626648",
    appId: "1:754226626648:web:7301ec11eebdfa7e8fca2d",
    measurementId: "G-MST6SRFFC7"
};

firebase.initializeApp(config);
export {firebase}
