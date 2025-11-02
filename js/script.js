let fotoDani = document.querySelector("#fotodani");
let fotoLauti = document.querySelector("#fotolauti");
let c1 = false;
let c2 = false;

fotoDani.addEventListener("mouseover", function(){
    c1 = true;
    setTimeout(function() {
        cambio(c1,false);
    }, 10000);
})

fotoDani.addEventListener("mouseout", function() {
    fotoDani.src = "img/dani.jpeg";
    c1 = false;
});


fotoLauti.addEventListener("mouseover", function(){
    c2 = true;
    setTimeout(function() {
        cambio(false,c2);
    }, 10000);
})

fotoLauti.addEventListener("mouseout", function() {
    fotoLauti.src = "img/lauti.jpeg";
    c2 = false;
});


function cambio(b1,b2){
    if(b1){
        fotoDani.src = "img/dani-smile.png";
    }
    if(b2){
        fotoLauti.src = "img/lauti-smile.png";
    }
}