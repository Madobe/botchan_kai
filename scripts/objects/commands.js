(function() {
  window.Commands = {
    say: function(text) {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
          id:     'extension',
          target: 'injected',
          action: 'say',
          text:   text,
        });
      });
    },

    kick: function(name) {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
          id:     'extension',
          target: 'injected',
          action: 'kick',
          text:   name,
        });
      });
    },

    search: function(text) {
      for(var i = 0; i < this.database.length; i++) {
        var regex = new RegExp(this.database[i].regex);
        if(regex.test(text)) {
          return this.database[i].action;
        }
      }
      return false;
    },

    database: [
      {
        regex: '^yasen.?$',
        action: function(message) {
          this.say("https://www.youtube.com/watch?v=zvg7hHTnJVk");
        },
      },
    ],
  };
})();
