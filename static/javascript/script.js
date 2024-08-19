function upDate(previewPic) {
    console.log("Hover event triggered for:", previewPic.alt);
    document.getElementById('highlight-text').innerHTML = previewPic.alt;
    document.getElementById('highlight').style.backgroundImage = "url('" + previewPic.src + "')";
}

function undo() {
    document.getElementById('highlight').style.backgroundImage = "none";
    document.getElementById('highlight-text').innerHTML = "Hover over an image below to learn more about French history.";
}
const images = document.querySelectorAll('.preview');
images.forEach(img => {
    img.addEventListener('mouseover', function() { upDate(this); });
    img.addEventListener('mouseout', undo);
});
