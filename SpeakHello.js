// SpeakHello.js
(function (window) {
  var helloSpeaker = {};
  var speakWord = "Hello";

  helloSpeaker.speak = function (name) {
      var greeting = speakWord + " " + name;
      console.log(greeting);
      return greeting;
  }

  window.helloSpeaker = helloSpeaker;
  console.log("SpeakHello.js is loaded");
})(window);

