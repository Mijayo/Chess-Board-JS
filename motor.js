//alert("Hola");
onLoad();
function onLoad() {
  for (var i = 0; i <  8; i++) {
    for(var j = 0; j < 8; j++) {
      if (i%2 == j%2) {
        document.write("<div class='container box white'></div>");
      } else {
        document.write("<div class='container box black'></div>")
      }
    }
  }
}
