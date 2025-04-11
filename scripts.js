document.addEventListener("DOMContentLoaded", () => {
    const viewMoreButton = document.querySelector(".view-more-button");
    const hiddenGallery = document.querySelector(".hidden-gallery");
    const modal = document.getElementById("image-modal");
    const modalImage = document.getElementById("modal-image");
    const closeModal = document.querySelector(".close");
    const galleryImages = document.querySelectorAll(".gallery-image");

    // Toggle hidden gallery visibility
    viewMoreButton.addEventListener("click", () => {
        if (hiddenGallery.style.display === "none" || !hiddenGallery.style.display) {
            hiddenGallery.style.display = "flex";
            viewMoreButton.textContent = "View Less";
        } else {
            hiddenGallery.style.display = "none";
            viewMoreButton.textContent = "View More";
        }
    });

    // Open modal on image click
    galleryImages.forEach(image => {
        image.addEventListener("click", () => {
            modal.style.display = "block";
            modalImage.src = image.src;
        });
    });

    // Close modal on 'X' click
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Close modal on 'ESC' key press
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            modal.style.display = "none";
        }
    });

    // Close modal on outside click
    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    const closeButtons = document.querySelectorAll(".close");

    // Close modal or overlay on 'X' click
    closeButtons.forEach(button => {
        button.addEventListener("click", () => {
            const modal = button.closest(".modal");
            if (modal) {
                modal.style.display = "none";
            }
        });
    });

    // Ensure all modals close on outside click
    const modals = document.querySelectorAll(".modal");
    modals.forEach(modal => {
        modal.addEventListener("click", (event) => {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    });

    // Example: Update loyalty rewards progress dynamically
    const progressBar = document.querySelector(".progress");
    const points = 120; // Example points
    const maxPoints = 200; // Example max points for next reward
    const progressPercentage = (points / maxPoints) * 100;

    if (progressBar) {
        progressBar.style.width = `${progressPercentage}%`;
    }

    const burgerMenu = document.querySelector(".burger-menu");
    const navLinks = document.querySelector(".nav-links");

    // Toggle burger menu
    burgerMenu.addEventListener("click", () => {
        burgerMenu.classList.toggle("active");
        navLinks.classList.toggle("mobile");
    });

    // Close menu when a link is clicked
    navLinks.addEventListener("click", (event) => {
        if (event.target.tagName === "A") {
            burgerMenu.classList.remove("active");
            navLinks.classList.remove("mobile");
        }
    });
});
