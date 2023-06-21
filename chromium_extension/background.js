chrome.commands.onCommand.addListener(function (command) {
  if (command === "api_hotkey") {
    fetch("http://localhost:5000")
      .then(response => response.text())
      .then(data => {
        showPopup(data); // Show the API response in a popup
      })
      .catch(error => {
        console.log("Error:", error);
      });
  }
});

function showPopup(response) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { response: response });
  });
}
