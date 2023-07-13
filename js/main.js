let slide_index = 1;
displaySlides(slide_index);


function nextSlide(n) {
    displaySlides(slide_index += n);
}

function currentSlide(n) {
    displaySlides(slide_index = n);
}


function displaySlides(n) {
    let i;
    const slides = document.getElementsByClassName("show-slide");
    const dots = document.getElementsByClassName("dot")

    if (n > slides.length) {
        slide_index = 1;
    }
    else if (n < 1) {
        slide_index = slides.length;
    }

    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }

    // Show the current slide and dots
    slides[slide_index - 1].style.display = "block";
    dots[slide_index - 1].className += " active";
}

