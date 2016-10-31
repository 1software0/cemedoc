var i = 0;
$(".Slider").ready(function (){
setTimeout(function(){
  var Imagenes = ["images/galeria/01.jpg","images/galeria/02.jpg","images/galeria/03.jpg"];
  var Slider = $(".Slider");

  if (i > Imagenes.length) {
    i++;
    Slider.css("background-image",Imagenes[i]);
  } else {
    i=0;
    Slider.css("background-image",Imagenes[i]);
  }

}, 1000);
});
