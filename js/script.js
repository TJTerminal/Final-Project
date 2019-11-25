//Step 1
// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCwb347rAZq_uncg36zHfY-e1QO-oT1Y9o",
    authDomain: "restaurant-site-212ba.firebaseapp.com",
    databaseURL: "https://restaurant-site-212ba.firebaseio.com",
    projectId: "restaurant-site-212ba",
    storageBucket: "restaurant-site-212ba.appspot.com",
    messagingSenderId: "724149213786",
    appId: "1:724149213786:web:9ca9e891b340312f66d663",
    measurementId: "G-N3GJHW7RCZ"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  // Connect to Database
var database = firebase.database();

{
  “rules”: {
    “.read”: true,
    “.write”: true
  }
}

//Step 2
var reservationData = {};

//Step 3
/*add a CLICK EVENT to each of your reservation options,
‘.reservation-day li’. Then, in its corresponding event handler,
define a property ‘DAY’ on your ‘reservationData’ object,
which will have the value of the clicked element's TEXT.*/
$('.reservation-day li').on('click', function() {
  reservationData.day = $(this).text();
});

//Step 4
/*update the ‘name’ property of the
‘reservationData’ object when the user submits the form
Add an event listener for when the user submits the form
Prevent the default action for a form submit so that the page won't refresh
Add the name the user entered to the ‘reservationData’ object*/
$('reservationData').on('submit', function() {
  //get name from input
  reservationData.name = $('.reservation-name').val();
  //prevent page refresh
  event.preventDefault();

});

//Step 5
/*post, or send, this reservation information in our Firebase database
Create a section for reservations data in your database.
POST your ‘reservationData’ object to your Firebase database
using Firebase's push() method.
Navigate to your database on the Firebase app, and make sure that
reservations are added to the database each time you submit the form.*/

//Step 6
/*Create a function ‘getReservations’ after the form-submit event.
Within this ‘getReservations’ function, listen for any changes to the
Firebase database using either the ‘value’ or ‘child_added’ event.
You can find more information about these events in the Firebase documentation here.*/
submit form event handler.on('child_added', funciton(getReservation) {
  //from the html template and store in var source
  var source = $('#reservation-template').html();
  //use Handlebars.compile() to compile template source code
  var template = Handlebars.compile(source);
  //define object... data for the template stored as an object literal
  var makeReservation = $('?').val();
  //pass in data to the template
  var html = template(makeReservation);
  //append new item to html
  $('?').append(html);
});

//Step 7 & 8
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.8054491, lng: -73.9654415},
    zoom: 10,
    scrollwheel: false
  });

  //Step 9: Use the Marker constructor to add a marker to map.
  var marker = new google.maps.Marker({
    position: {lat: 40.8054491, lng: -73.9654415},
    map: map,
    title: 'Monks Café'
  });
}