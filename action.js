let pic = document.getElementById("pic");

function changeImage(filename) {
    pic.src = filename;
}

pic.addEventListener("mouseover", function() {
    changeImage("laugh.png");
})

pic.addEventListener("mouseout", function() {
    changeImage("top.png");
})
