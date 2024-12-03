document.addEventListener("DOMContentLoaded", () => {
    // Reference the gallery container where images will be dynamically added
    const galleryContainer = document.getElementById("gallery");

    const images = [
        "photojournalism/47.jpg", //musk
        "photojournalism/45.jpg", //dua
        "photojournalism/35.jpg", //cufflinks
        "photojournalism/20.jpg", //girl eye
        "photojournalism/36.JPG", //wild guy faces
        "photojournalism/80.png",
        "photojournalism/81.jpg",
        //"photojournalism/82.jpg", snow dancing jared
        "photojournalism/83.jpg",
        "photojournalism/84.jpg",
        "photojournalism/85.jpg",
        "photojournalism/86.jpg",
        "photojournalism/87.JPG",

        "photojournalism/89.jpg",
        "photojournalism/90.jpg",

        "photojournalism/12.png", //peeing
        "photojournalism/75.png", //chance
        "photojournalism/17.png",  //demi
        "photojournalism/2.png",  //alex honnold

        "photojournalism/29.jpg", //sad dad
        "photojournalism/10.png", //israel flag


        "photojournalism/10.jpeg", //jp slowshutter drag
        "photojournalism/14.jpg", //slow shutter drag 


        "photojournalism/11.png", //women peeing
        "photojournalism/13.png", //shower

        //"photojournalism/18.jpg", //slow shutter drag


        "photojournalism/15.jpg", //andrea boyfriend
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

        //"photojournalism/88.jpg", rebekah hanging lamppost
        "photojournalism/3.jpg",
        "photojournalism/3.png",
        "photojournalism/30.jpg",
        "photojournalism/31.jpg",
        "photojournalism/32.png",
        "photojournalism/33.jpg",
        "photojournalism/34.png",
        "photojournalism/38.JPG",
        "photojournalism/39.png",
        "photojournalism/40.png",
        "photojournalism/41.png",
        "photojournalism/42.png",
        "photojournalism/43.JPG",
        "photojournalism/44.JPG",
        "photojournalism/46.jpg", //dancers
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
