document.addEventListener("DOMContentLoaded", function () {
    const backgrounds = [
        "nv1.svg",
        "nv2.svg",
        "nv3.svg",
        "nv4.svg",
        "nv5.svg",
        "nv6.svg",
        "nv7.svg",
        "nv8.svg",
        "nv9.svg",
        "nv10.svg",
        "nv11.svg",
        "nv12.svg",
        "nv13.svg",
        // Add more image filenames as needed
    ];

    const backgroundElement = document.getElementById("background");
    let currentIndex = 0;

    function setNextBackground() {
        const currentImage = backgrounds[currentIndex];
        const imagePath = `path/to/your/images/${currentImage}`; // Replace with the actual path to your images
        backgroundElement.style.backgroundImage = `url(${imagePath})`;

        // Increment the index or reset to 0 if it reaches the end
        currentIndex = (currentIndex + 1) % backgrounds.length;
    }

    // Set initial background
    setNextBackground();

    // Update background when the window is resized
    window.addEventListener("resize", setNextBackground);
});