const slides = document.getElementsByClassName("show-slide");
const dots = document.getElementsByClassName("dot");
const slidesCollection = document.getElementsByClassName("show-slide-collection");
const slidesClients = document.getElementsByClassName("show-slide-clients");

let slideIndex = 1;
let collectionIndex = 1;
let clientsIndex = 1;

function nextSlide(n) {
    displaySlides((slideIndex += n));
}

function currentSlide(n) {
    displaySlides((slideIndex = n));
}

function displaySlides(n) {
    if (n > slides.length) {
        slideIndex = 1;
    } else if (n < 1) {
        slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function nextSlideCollection(n) {
    displaySlidesCollection((collectionIndex += n));
}

function currentSlideCollection(n) {
    displaySlidesCollection((collectionIndex = n));
}

function displaySlidesCollection(n) {
    if (n > slidesCollection.length) {
        collectionIndex = 1;
    } else if (n < 1) {
        collectionIndex = slidesCollection.length;
    }

    for (let j = 0; j < slidesCollection.length; j++) {
        slidesCollection[j].style.display = "none";
    }
    slidesCollection[collectionIndex - 1].style.display = "block";
}

function nextSlideClients(n) {
    displaySlidesClients((clientsIndex += n));
}

function currentSlideB(n) {
    displaySlidesClients((clientsIndex = n));
}

function displaySlidesClients(n) {
    if (n > slidesClients.length) {
        clientsIndex = 1;
    } else if (n < 1) {
        clientsIndex = slidesClients.length;
    }

    for (let k = 0; k < slidesClients.length; k++) {
        slidesClients[k].style.display = "none";
    }
    slidesClients[clientsIndex - 1].style.display = "block";
}

displaySlides(slideIndex);
displaySlidesCollection(collectionIndex);
displaySlidesClients(clientsIndex);
