(function() {
  "use strict";

  window.Personality = {
    database: {},

    /*
     * Gets the line from the current personality. Returns the line. If the line is an array, it
     * returns a random member of the array.
     */
    line: function(id) {
      var self = this;
      if(!this.database[Data.personality]) return [this.load(Data.personality), id];

      if(!this.database[Data.personality][id]) {
        if(!this.database['default']) {
          return [this.load('default'), id];
        } else if(this.database['default'][id]) {
          return self.parse_array(this.database['default'][id]);
        } else {
          return self.parse_array(this.database['default']['randoms']);
        }
      } else {
        return self.parse_array(this.database[Data.personality][id]);
      }
    },

    /*
     * Check if the object is an array. If it's an array, return a random member.
     */
    parse_array: function(input) {
      if(typeof(input) == 'object') {
        var rand = Math.floor(Math.random() * input.length);
        return input[rand];
      } else {
        return input;
      }
    },

    /*
     * Load the related JSON file into memory. Returns the parsed object.
     */
    load: function(name) {
      var self = this;
      var json = $.getJSON('assets/personalities/' + name + '.json')
        .then(function(data) {
          return data;
        })
        .done(function(data) {
          self.database[name] = data;
        });
      return json;
    },
  };

  Personality.load(Data.personality);
})();
