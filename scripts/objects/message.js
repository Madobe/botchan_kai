(function() {
  window.Message = function(data) {
    this.user = data.user;
    this.text = data.text;
    this._auth = data.auth; // Authority is preliminary here; can be changed later
  };

  /*
   * Checks if the message is meant to be processed or is just a random message
   */
  Message.prototype.is_addressed_to_bot = function() {
    var plain_text = this.text.split(' ');
    plain_text = plain_text[0].replace(/\W/gi, '').toLowerCase();
    if(plain_text == 'yuki' || plain_text == 'botchan') return true;
    else return false;
  };

  /*
   * Remove the bot name from the front of the text.
   */
  Message.prototype.strip_calls = function() {
    var plain_text = this.text.split(' ');
    plain_text.shift();

    // Strip off any leading punctuation that might happen to be spaced (eg. "yuki , test" will
    // require this)
    for(var i = 0; i < plain_text.length; i++) {
      plain_text[i] = plain_text[i].toLowerCase();
      if(plain_text[i].replace(/\W/gi, '') == '') plain_text.splice(i, 1);
    }

    this.text = plain_text.join(' ');
  }

  Message.prototype.say = function(text) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {
        id:     'extension',
        target: 'injected',
        action: 'say',
        text:   text,
      });
    });
  };

  Message.prototype.kick = function(name) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {
        id:     'extension',
        target: 'injected',
        action: 'kick',
        text:   name,
      });
    });
  };

  Message.prototype.process = function() {
    this.strip_calls();
    var action = Commands.search(this.text);
    if(action) {
      $.proxy(action, this)();
    } else {
      this.say("Random.");
    }
  };

  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if(request.id == 'injected' && request.target == 'message') {
      var message = new Message(request);

      if(message.is_addressed_to_bot()) {
        message.process();
      }
    }
  });
})();
