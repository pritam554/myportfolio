// Get the Back to Top button
const backToTopButton = document.getElementById("backToTop");

// Show the button when the user scrolls down 100px from the top
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.classList.add("show"); // Show button
    } else {
        backToTopButton.classList.remove("show"); // Hide button
    }
};

// Scroll smoothly to the top when the button is clicked
backToTopButton.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Smooth scroll to top
    });
};
