// SpeakGoodBye.js
(function (window) {
  var byeSpeaker = {};
  var speakWord = "Good Bye";

  byeSpeaker.speak = function (name) {
      var greeting = speakWord + " " + name;
      console.log(greeting);
      return greeting;
  }

  window.byeSpeaker = byeSpeaker;
  console.log("SpeakGoodBye.js is loaded");
})(window);

