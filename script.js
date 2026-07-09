const images = [
    "images/img1.jpeg",
    "images/img2.jpeg",
    "images/img3.jpeg",
    "images/img4.jpeg"
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
