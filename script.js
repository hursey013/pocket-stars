waitForElement('reader_pane',function() {
  var pocket = document.querySelector('[data-pocket="0"]');

  if (pocket) {
    document.body.addEventListener('click',function(e) {
      if (e.target && e.target.classList.contains('star_img')) {
        var string = e.target.parentNode.getAttribute('onclick');
        var id = string.match(/\d+/);

        pocket_article(id[0]);
      }
    });
  }
});

function waitForElement(elementId, callBack) {
  window.setTimeout(function() {
    var element = document.getElementById(elementId);

    if (element) {
      callBack(elementId, element);
    } else {
      waitForElement(elementId, callBack);
    }
  },500)
}
