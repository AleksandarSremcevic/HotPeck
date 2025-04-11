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
});
