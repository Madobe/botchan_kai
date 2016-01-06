/*
 * Message object
 *
 * The object that holds all the original data of the message. This is basically where everything
 * starts.
 */
(function() {
  "use strict";

  window.Message = function(data) {
    this.user = data.user;
    this.text = data.text;
    this._auth = data.auth; // Authority is preliminary here; can be changed later
    this.user_list = data.user_list;

    this.weight_cd = 1000 * 60 * 10;
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
  };

  /*
   * Remove all instances of the given text from both ends of the message.
   */
  Message.prototype.remove_trailing = function(remove) {
    var text = this.text.split('');
    while(text[0] == remove) { text.shift(); }
    text.reverse();
    while(text[0] == remove) { text.shift(); }
    this.text = text.reverse().join('');
  };

  /*
   * Removes the first word.
   */
  Message.prototype.shift = function() {
    this.split(' ');
    this.shift();
    this.join(' ');
  };

  /*
   * Returns the text with the puncuation (periods and exclamation marks) gone.
   */
  Object.defineProperty(Message.prototype, 'text_only', {
    get: function() {
      this.remove_trailing('.');
      this.remove_trailing('!');
      this.remove_trailing('?');
      return this.text;
    }
  });

  /*
   * Check the authority level of the user whose message we're processing.
   */
  Object.defineProperty(Message.prototype, 'auth', {
    get: function() {
      if(Data.all_powerful.indexOf(this.user) != -1) return 3;
      else return this._auth;
    }
  });

  /*
   * Sends the given text to the injected script to be said in chat.
   */
  Message._say = function(text) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {
        id:     'extension',
        target: 'injected',
        action: 'say',
        text:   text,
      });
    });
  };
  Message.say = function(text) {
    // To accommodate promises, we need to resolve them right here
    if(typeof(text) == 'object') {
      text[0].done(function(data) {
        Message._say(data[text[1]]);
      });
    } else {
      Message._say(text);
    }
  };
  Message.prototype.say = Message.say;

  /*
   * Sends the given name to the injected script to kick.
   */
  Message.kick = function(name) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {
        id:     'extension',
        target: 'injected',
        action: 'kick',
        text:   name,
      });
    });
  };
  Message.prototype.kick = Message.kick;

  /*
   * Checks if the message is allowed based on the current mode.
   */
  Object.defineProperty(Message.prototype, 'passes_mode_check', {
    get: function() {
      var event_whitelist = [
        '^never give up.?$',
        '^tweets.?$',
        '^twitter.?$',
        '^(staff|dev) (tweets|twitter).?$',
        '^emoticon list.?$',
        '^kc3 kai.?$',
        '^help.?$',
        '^combat.?$',
        '^aa.?$',
        '^los.?$',
        '^connect.?$',
        '^news.?$',
        'air\\s?calc',
        'los\\s?calc',
        'event guide',
        '^arsenal.?$',
        '^suggestion thread',
        '^1-5 guide',
        '^2-5 guide',
        '^3-5 guide',
        '^3-2 leveling',
        '^4-3 leveling',
        'as 1-1|1-1 as',
        'as 1-2|1-2 as',
        'as 1-3|1-3 as',
        'as 1-4|1-4 as',
        'as 1-5|1-5 as',
        'as 1-6|1-6 as',
        'as 2-1|2-1 as',
        'as 2-2|2-2 as',
        'as 2-3|2-3 as',
        'as 2-4|2-4 as',
        'as 2-5|2-5 as',
        'as 3-1|3-1 as',
        'as 3-2|3-2 as',
        'as 3-3|3-3 as',
        'as 3-4|3-4 as',
        'as 3-5|3-5 as',
        'as 4-1|4-1 as',
        'as 4-2|4-2 as',
        'as 4-3|4-3 as',
        'as 4-4|4-4 as',
        'as 4-5|4-5 as',
        'as 5-1|5-1 as',
        'as 5-2|5-2 as',
        'as 5-3|5-3 as',
        'as 5-4|5-4 as',
        'as 5-5|5-5 as',
        'as 6-1|6-1 as',
        'as 6-2|6-2 as',
        'as 6-3|6-3 as',
        '^latest links',
        '^recent links',
        '^kick me',
        'do you want to see my ship\\s?list',
        'i\'?m kuso',
        '^kill me',
        '^sink me',
        '^chat\\s?nuke',
        '^kick',
        '^sink',
        '^terminate',
        '^exterminate',
        '^slap',
        '^punch',
        '^nuke',
        '^rekt',
        '^grate',
        '^torpedo',
        '^cut-in',
        '^silence left',
        '^silence',
        '^add explosion',
        '^remove explosion',
        '^list explosion',
        '^clear explosion',
        '^register',
        '^recall',
      ];

      switch(Data.mode) {
        case 2: // Event
          for(var i = 0; i < event_whitelist.length; i++) {
            var regex = new RegExp(event_whitelist[i], 'gi');
            if(regex.text(this.test)) return true;
            else return false;
          }
        case 3: // Off
          if(this.auth == 3) return true;
          else return false;
        default: // Normal and no cooldowns
          return true;
      }
    }
  });

  /*
   * Checks if the user is still under 3 weights.
   */
  Message.prototype.can_add_weight = function(weight) {
    if((Data.cooldowns[this.user] || []).length + weight > 3) return false;
    else return true;
  };

  /*
   * Process the message as a command.
   */
  Message.prototype.process = function() {
    if(!this.passes_mode_check) return;

    this.strip_calls();
    var command = Commands.search(this.text);
    if(command && this.can_add_weight(command.weight)) {
      Data.add_cooldown(this.user, command.weight, this.weight_cd);
      $.proxy(command.action, this)();
    } else if(this.can_add_weight(3)) {
      this.give_random_response();
    }
  };

  Message.prototype.give_random_response = function() {
    Data.add_cooldown(this.user, 3, this.weight_cd);
    this.say("Random.");
    // TODO: Personality object controls the responses here
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
