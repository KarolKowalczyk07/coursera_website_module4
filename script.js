document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM fully loaded and parsed");

  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  var greetingsDiv = document.getElementById("greetings");

  if (!greetingsDiv) {
      console.error("greetingsDiv is not found");
      return;
  }

  for (var i = 0; i < names.length; i++) {
      var firstLetter = names[i].charAt(0).toLowerCase();
      var greeting;

      if (firstLetter === 'j') {
          greeting = byeSpeaker.speak(names[i]);
      } else {
          greeting = helloSpeaker.speak(names[i]);
      }

      var greetingElement = document.createElement("p");
      greetingElement.textContent = greeting;
      greetingsDiv.appendChild(greetingElement);

      console.log("Appended greeting: ", greeting);
  }
});


