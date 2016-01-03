(function() {
  "use strict";

  window.Relay = {
    user: "",
    text: "",
    auth: 0, // 0 = normal, 1 = mod, 2 = admin

    // This stuff is so we don't end up processing other script's messages
    id: "yuki",
    target: "extension",

    pack: function(chat) {
      this.user = chat.attributes.name;
      this.text = chat.attributes.text;

      var user = mainRoom.model.users.findByName(chat.attributes.name);
      if(user == undefined) return;
      else if(user.attributes.isCanGiveChatMod) this.auth = 2;
      else if(user.attributes.isModerator) this.auth = 1;
      else this.auth = 0;

      this.send();
    },

    send: function() {
      window.postMessage(JSON.parse(JSON.stringify(this)), '*');
    },
  };

  mainRoom.model.chats.bind('afteradd', $.proxy(Relay.pack, Relay));
})();
