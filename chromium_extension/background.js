chrome.commands.onCommand.addListener(function (command) {
  if (command === "api_hotkey") {
    // Make the API request here
    fetch("http://localhost:5000")
      .then(response => response.text())
      .then(data => {
        console.log(data); // Placeholder response
      })
      .catch(error => {
        console.log("Error:", error);
      });
  }
});
