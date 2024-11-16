document.addEventListener("DOMContentLoaded", () => {
    // Reference the gallery container where images will be dynamically added
    const galleryContainer = document.getElementById("gallery");

    const images = [
        "photojournalism/0.jpeg",
        "photojournalism/01.png",
        "photojournalism/1.jpg",
        "photojournalism/1.png",
        "photojournalism/10.jpeg",
        "photojournalism/10.png",
        "photojournalism/11.png",
        "photojournalism/12.png",
        "photojournalism/13.png",
        "visualmedia/photojournalism/14.jpg",
        "visualmedia/photojournalism/15.jpg",
        "visualmedia/photojournalism/16.jpg",
        "visualmedia/photojournalism/17.png",
        "visualmedia/photojournalism/18.jpg",
        "visualmedia/photojournalism/19.jpg",
        "visualmedia/photojournalism/2.jpg",
        "visualmedia/photojournalism/2.png",
        "visualmedia/photojournalism/20.jpg",
        "visualmedia/photojournalism/21.jpg",
        "visualmedia/photojournalism/22.jpg",
        "visualmedia/photojournalism/23.jpg",
        "visualmedia/photojournalism/24.jpg",
        "visualmedia/photojournalism/25.jpg",
        "visualmedia/photojournalism/26.jpg",
        "visualmedia/photojournalism/27.jpg",
        "visualmedia/photojournalism/28.jpg",
        "visualmedia/photojournalism/29.jpg",
        "visualmedia/photojournalism/3.jpg",
        "visualmedia/photojournalism/3.png",
        "visualmedia/photojournalism/30.jpg",
        "visualmedia/photojournalism/31.jpg",
        "visualmedia/photojournalism/32.png",
        "visualmedia/photojournalism/33.jpg",
        "visualmedia/photojournalism/34.png",
        "visualmedia/photojournalism/35.jpg",
        "visualmedia/photojournalism/36.JPG",
        "visualmedia/photojournalism/4.jpg",
        "visualmedia/photojournalism/4.png",
        "visualmedia/photojournalism/5.jpeg",
        "visualmedia/photojournalism/5.jpg",
        "visualmedia/photojournalism/6.jpg",
        "visualmedia/photojournalism/6.png",
        "visualmedia/photojournalism/69.jpg",
        "visualmedia/photojournalism/7.png",
        "visualmedia/photojournalism/70.jpg",
        "visualmedia/photojournalism/8.png",
        "visualmedia/photojournalism/9.jpeg"


    ];

    images.forEach((src) => {
        const img = document.createElement("img");
        img.src = src;
        img.alt = src.split("/").pop(); // Use the filename as alt text
        img.classList.add("gallery-item");
        galleryContainer.appendChild(img);
    });
});





        
        
    
