(function() {
  window.Message = function(data) {
    this.user = data.user;
    this.text = data.text;
    this.auth = data.auth; // Authority is preliminary here; can be changed later
  };

  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if(request.id == 'yuki' && request.target == 'message') {
      var message = new Message(request);
    }
  });
})();
