

let counter = -1

$(window).on("click", function(event){
    event.preventDefault();
        counter ++

        Img(images[counter])
        .appendTo("body")
        .css("top", event.pageY - 50 +"px")
        .css("left", event.pageX - 200 + "px")  
            
})

var images = [
    'popups/Frauenquote.jpeg',
    'popups/Neue-Jobs.jpeg',
    'popups/Praktisch.jpeg',
    'popups/Vegleichbar.jpeg',
    'popups/success.png',
    'popups/Schaffen.jpeg',
]


function Img (str) {
    return $("<img>")
        .attr("src", str)
        .attr("width", "400")
        .css("position", "absolute")

}
