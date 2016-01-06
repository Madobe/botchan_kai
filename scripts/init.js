/*
 * Content script
 * 
 * This script puts the injected scripts on the page and acts as a relay between the background and
 * injected scripts.
 */
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
    if(typeof(data) == 'object' && data.id == 'injected') {
      chrome.runtime.sendMessage(data);
    }
  });

  // Listen for messages from the background scripts
  // Messages heading out from here have two options, "say" or "kick"
  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if(request.id == 'extension' && request.target == 'injected') {
      window.postMessage(request, '*');
    }
  });
})();
