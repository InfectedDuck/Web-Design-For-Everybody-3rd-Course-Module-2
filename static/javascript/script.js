function upDate(previewPic) {
    // Log the event and image information
    console.log("Hover event triggered for:", previewPic.alt);

    // Update the text in the #highlight-text element
    document.getElementById('highlight-text').innerHTML = previewPic.alt;

    // Change the background image of the #highlight section
    document.getElementById('highlight').style.backgroundImage = "url('" + previewPic.src + "')";
}

function undo() {
    // Reset the background image and text when the mouse leaves
    document.getElementById('highlight').style.backgroundImage = "none";
    document.getElementById('highlight-text').innerHTML = "Hover over an image below to learn more about French history.";
}

// Attach event listeners to all images with the class 'preview'
const images = document.querySelectorAll('.preview');
images.forEach(img => {
    img.addEventListener('mouseover', function() { upDate(this); });
    img.addEventListener('mouseout', undo);
});
