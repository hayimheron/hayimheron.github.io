document.addEventListener("DOMContentLoaded", () => {
    // Reference the gallery container where images will be dynamically added
    const galleryContainer = document.getElementById("gallery");

    const images = [
        "photojournalism/36.JPG",
        "photojournalism/11.png",
        "photojournalism/12.png",
        "photojournalism/17.png",
        "photojournalism/75.png",
        "photojournalism/2.png",
        "photojournalism/20.jpg",
        "photojournalism/29.jpg",
        "photojournalism/10.png",


        "photojournalism/10.jpeg",





        "photojournalism/18.jpg",
        "photojournalism/13.png",
        "photojournalism/14.jpg",
        "photojournalism/15.jpg",
        "photojournalism/16.jpg",
        "photojournalism/19.jpg",
        "photojournalism/2.jpg",
        "photojournalism/21.jpg",
        "photojournalism/22.jpg",
        "photojournalism/23.jpg",

        "photojournalism/28.jpg",
        "photojournalism/24.jpg",
        "photojournalism/25.jpg",
        "photojournalism/26.jpg",

        "photojournalism/9.jpeg",
        "photojournalism/0.jpeg",
        "photojournalism/1.jpg", //dance photo two on top each other
        
        "photojournalism/27.jpg",


        "photojournalism/3.jpg",
        "photojournalism/3.png",
        "photojournalism/30.jpg",
        "photojournalism/31.jpg",
        "photojournalism/32.png",
        "photojournalism/33.jpg",
        "photojournalism/34.png",
        "photojournalism/35.jpg",
        "photojournalism/38.JPG",
        "photojournalism/39.JPG",
        "photojournalism/40.JPG",
        "photojournalism/41.JPG",
        "photojournalism/42.JPG",
        "photojournalism/43.JPG",
        "photojournalism/44.JPG",
        "photojournalism/45.jpg",
        "photojournalism/46.jpg",
        "photojournalism/47.jpg",
        "photojournalism/48.jpg",
        "photojournalism/49.jpg",
        "photojournalism/50.jpg",

        
        "photojournalism/4.jpg",
        "photojournalism/4.png",
        "photojournalism/5.jpeg",
        "photojournalism/5.jpg",
        "photojournalism/6.jpg",
        "photojournalism/6.png",
        "photojournalism/69.jpg",
        "photojournalism/7.png",
        "photojournalism/70.jpg",
        "photojournalism/8.png",
        "photojournalism/1.png"


    ];


        images.forEach((src) => {
        const img = document.createElement("img");
        img.src = src;
        img.alt = src.split("/").pop(); // Use the filename as alt text
        img.classList.add("gallery-item");
        galleryContainer.appendChild(img);
    });
});
/*
images.forEach((src) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = src.split("/").pop(); // Use the filename as alt text
    img.classList.add("gallery-item");

    // Debugging: Log errors if an image fails to load
    img.onerror = () => {
        console.error(`Failed to load image: ${src}`);
    };

    galleryContainer.appendChild(img);
    });
}); // <-- Missing closing bracket and parenthesis added here
*/
