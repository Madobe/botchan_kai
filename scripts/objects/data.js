/*
 * Data object
 *
 * Keeps the working data. Saves to localStorage of the background page (unlimited storage).
 */
(function() {
  "use strict";

  window.Data = {
    defaults: function() {
      return {
        all_powerful: [],
        personality : 'sendai',
        mode        : 1,

        event_end   : 0,

        game_cds    : {},
        flags       : { rps: false },
        players     : [],
        rps_players : { rock: [], paper: [], scissors: [] },
        cooldowns   : {},
        epeen       : {},
        silence     : 0,
        explosions  : [],
        links       : [],
        infobits    : {},
      };
    },

    save: function() {
      localStorage.botchan_data = JSON.stringify(this);
    },

    load: function() {
      $.extend(this, this.defaults(), JSON.parse(localStorage.botchan_data || '{}'));
    },

    set_mode: function(text) {
      if(parseInt(text)) this.mode = parseInt(text);
      else if(text == 'event') this.mode = 2;
      else if(text == 'off') this.mode = 3;
      else if(text == 'nocd') this.mode = 4;
      else this.mode = 1;

      Message.say("Mode changed to " + this.mode + "!");
    },

    set_event_end: function(time) {
      time = time.split(':');
      
      var date = new Date();
      date.setUTCHours(time[0]);
      date.setUTCMinutes(time[1]);
      date.setUTCSeconds(0);
      date = date.getTime();

      var current_time = new Date().getTime();
      if(date < current_time) date += 1000 * 60 * 60 * 24;
      this.event_end = date;

      this.say("Next event set to " + new Date(date).toUTCString());
    },

    reset_games: function() {
      this.game_cds = {};
      this.reset_rps_players();
    },

    add_player: function(name) {
      if(this.players.indexOf(name) != -1) {
        Message.say('You already registered, ' + name + '.');
      } else {
        this.players.push(name);
        Message.say(name + ' has registered to play!');
      }
    },

    remove_player: function(name) {
      var index = this.players.indexOf(name);
      if(index != -1) this.players.splice(index, 1);
    },

    quit_player: function(name) {
      var index = this.players.indexOf(name);
      if(index != -1) {
        this.players.splice(index, 1);
        Message.say(name + ' has quit!');
      } else {
        Message.say(name + ', you were never playing!');
      }
    },

    add_rps_player: function(hand, name) {
      if(this.rps_players[hand].indexOf(name) == -1) this.rps_players[hand].push(name);
    },

    remove_rps_player: function(hand, name) {
      var index = this.rps_players[hand].indexOf(name);
      if(index != -1) this.rps_players[hand].splice(index, 1);
    },

    reset_rps_players: function() {
      this.rps_players = { rock: [], paper: [], scissors: [] };
    },

    set_game_cd: function(game, time) {
      this.game_cds[game] = time;
    },

    set_flag: function(game, value) {
      this.flags[game] = value;
    },

    add_epeen: function(name, amount) {
      if(!this.epeen[name]) this.epeen[name] = 0;
      this.epeen[name] += amount;
    },

    add_cooldown: function(name, weight, time) {
      if(!this.cooldowns[name]) this.cooldowns[name] = [];
      time += new Date().getTime();
      for(var i = 0; i < weight; i++) {
        this.cooldowns[name].push(time);
      }
    },

    reset_cooldown: function(name) {
      this.cooldowns[name] = [];
    },

    update_cooldown: function(name) {
      var current_time = new Date().getTime();
      var valid_cds = [];
      for(var i = 0; i < this.cooldowns[name].length; i++) {
        if(this.cooldowns[name][i] > current_time) valid_cds.push(this.cooldowns[name][i]);
      }
      this.cooldowns[name] = valid_cds;
    },

    reset_cooldowns: function() {
      this.cooldowns = {};
    },

    set_silence: function(time) {
      this.silence = time;
    },

    add_explosion: function(name) {
      this.explosions.push(name);
    },

    remove_explosion: function(name) {
      var index = this.explosions.indexOf(name);
      if(name == 'Akios') {
        Message.say('Akios can\'t be removed from the list.');
      } else if(index != -1) {
        this.explosions.splice(index, 1);
        Message.say(name + ' has been removed from the list of explosion targets!');
      } else {
        Message.say(name + ' wasn\'t in the list!');
      }
    },

    reset_explosion: function() {
      this.explosions = ["Akios"];
    },

    add_link: function(link) {
      this.links.push(link);
      this.links = this.links.slice(-5);
    },

    add_infobit: function(key, value) {
      if(this.infobits.hasOwnProperty(key)) Message.say("Replacing old value: " + this.infobits[key]);
      this.infobits[key] = value;
    },

    remove_infobit: function(key) {
      delete this.infobits[key];
    },
  };

  window.addEventListener('beforeunload', function(e) {
    Data.save();
  });

  Data.load();
})();
