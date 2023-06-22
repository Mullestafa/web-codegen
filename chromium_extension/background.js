chrome.commands.onCommand.addListener(function(command) {
  if (command === "api_hotkey") {
    chrome.tabs.executeScript({ code: 'document.activeElement.tagName' }, function(result) {
      if (result && result[0] === "INPUT") {
        chrome.tabs.executeScript({ file: 'content.js' });
      }
    });
  }
});
