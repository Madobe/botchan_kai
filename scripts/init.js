(function() {
  "use strict";

  function loadScript(url) {
    var script = document.createElement('script');
    script.src = chrome.extension.getURL(url);
    (document.head || document.documentElement).appendChild(script);
  }

  // Load injected scripts onto the page
  $(document).on('ready', function() {
    loadScript('scripts/injected/relay.js');
  });

  // Listen for messages from the injected scripts
  window.addEventListener('message', function(e) {
    var data = e.data;
    if(typeof(data) == 'object' && data.id == 'yuki' && data.target == 'extension') {
      data.target = 'message';
      chrome.runtime.sendMessage(data);
    }
  });
})();
