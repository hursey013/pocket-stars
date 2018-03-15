var s = document.createElement('script');
s.src = chrome.extension.getURL('script.js');
(document.body || document.documentElement).appendChild(s);
s.onload = function() {
  s.parentNode.removeChild(s);
};
