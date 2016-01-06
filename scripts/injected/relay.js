/*
 * Injected script relay point
 *
 * This sends chat data up to the extension and performs the says and kicks when told to.
 */
(function() {
  "use strict";

  window.Relay = {
    user: "",
    text: "",
    auth: 0, // 0 = normal, 1 = mod, 2 = admin

    // This stuff is so we don't end up processing other script's messages
    id: "injected",
    target: "message",

    pack: function(chat) {
      this.user = chat.attributes.name;
      this.text = chat.attributes.text;

      var user = mainRoom.model.users.findByName(chat.attributes.name);
      if(user == undefined) return;
      else if(user.attributes.isCanGiveChatMod) this.auth = 2;
      else if(user.attributes.isModerator) this.auth = 1;
      else this.auth = 0;

      // We can't actually access this list later, so we'll send the list up
      this.user_list = mainRoom.model.users.models.map(function(x) { return x.attributes.name; });

      this.send();
    },

    send: function() {
      window.postMessage(JSON.parse(JSON.stringify(this)), '*');
    },
  };

  mainRoom.model.chats.bind('afteradd', $.proxy(Relay.pack, Relay));

  window.addEventListener('message', function(e) {
    var data = e.data;
    if(data.id == 'extension' && data.target == 'injected') {
      if(data.action == 'say') {
        var chatEntry = new models.ChatEntry({roomId: mainRoom.roomId, name: wgUserName, text: data.text});
        mainRoom.socket.send(chatEntry.xport());
      } else if(data.action == 'kick') {
        var kickCommand = new models.KickCommand({userToKick: data.text});
        mainRoom.socket.send(kickCommand.xport());
      }
    }
  });
})();
