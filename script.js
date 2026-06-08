const images = [
    "images/1.jpg",
    "images/2.jpg",
    "images/3.jpg",
    "images/4.jpg"
];

let currentIndex = 0;

function nextImage() {
    currentIndex++;
    
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    document.getElementById("galleryImage").src = images[currentIndex];
}

function previousImage() {
    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    document.getElementById("galleryImage").src = images[currentIndex];
}
