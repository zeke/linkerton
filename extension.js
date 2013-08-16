appAPI.ready(function($) {

  var links = Array.prototype.slice.call(document.querySelectorAll('a[href^="http"]'))

  console.log("links on page: ", links.length)

  links = links.sort(function(a,b) {
    a = a.href
    b= b.href
    return (a < b) ? -1 : (a > b) ? 1 : 0;
  })

  $('body').append('<link rel="stylesheet" type="text/css" href="http://localhost:8000/linkerton.css">');

  var el = document.createElement("ul")
  el.className = "linkerton"
  el.id = "linkerton"

  el.innerHTML = links.map(function(link) {
    return "<li><a href='" + link.href + "'>" + link.href.replace(/https?:\/\//, '').slice(0, 40) + "</li>";
  }).join("\n")

  document.body.appendChild(el);

});
