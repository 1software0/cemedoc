
window.addEventListener("scroll", function(event) {

    var top = this.scrollY,
        left = this.scrollX;

    var horizontalScroll = document.querySelector(".horizontalScroll"),
        verticalScroll = document.querySelector(".verticalScroll");

    //horizontalScroll.innerHTML = "Scroll X: " + left + "px";
      //verticalScroll.innerHTML = "Scroll Y: " + top + "px";

      if (top < 380) {
        $("#BT").hide();
        $("#sant").show("slow");
        $("#redes").show("slow");
      } else {
        $("#BT").show("slow");
        $("#sant").hide();
        $("#redes").hide();
      }

}, false);
