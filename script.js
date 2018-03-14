document.body.addEventListener('click',function(e) {
  if (e.target && e.target.classList.contains('star_img')) {
    var string = e.target.parentNode.getAttribute('onclick');
    var id = string.match(/\d+/);

    pocket_article(id[0]);

    console.log("Pocket integration triggered.");
  }
});
