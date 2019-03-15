//alert("Hola");

var number = 64;
var caja = document.querySelectorAll("div");

/*onLoad();

function onLoad() {
    
}*/

/*document.addEventListener("load", function () {
    alert("Hola");
    
});*/

for (var i = 0; i < number; i++) {
    if (number[i]%2 != 0) {
        caja.classList.add("blanco");
    }
    else {
        caja.classList.add("negro");
    }
}
