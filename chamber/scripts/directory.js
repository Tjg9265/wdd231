// directory.js
document.addEventListener("DOMContentLoaded", () => {
    // Example: highlight business spotlight cards on hover
    const spotlightCards = document.querySelectorAll(".spotlight-card");

    spotlightCards.forEach((card) => {
        card.addEventListener("mouseenter", () => {
            card.classList.add("highlight");
        });
        card.addEventListener("mouseleave", () => {
            card.classList.remove("highlight");
        });
    });

    // Add more directory-related JS here if needed
});
