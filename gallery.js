// pages/gallery.tsx
"use client"; // This is important for using hooks in a client component

import React from "react";
import { FocusCards } from "@/components/FocusCards"; // Adjust the path as needed

const cards = [
    { title: "Random Image 1", src: "https://picsum.photos/300/200?random=1" },
    { title: "Random Image 2", src: "https://picsum.photos/300/200?random=2" },
    { title: "Random Image 3", src: "https://picsum.photos/300/200?random=3" },
    { title: "Random Image 4", src: "https://picsum.photos/300/200?random=4" },
    { title: "Random Image 5", src: "https://picsum.photos/300/200?random=5" },
    { title: "Random Image 6", src: "https://picsum.photos/300/200?random=6" },
    { title: "Random Image 7", src: "https://picsum.photos/300/200?random=7" },
    { title: "Random Image 8", src: "https://picsum.photos/300/200?random=8" },
    { title: "Random Image 9", src: "https://picsum.photos/300/200?random=9" },
    { title: "Random Image 10", src: "https://picsum.photos/300/200?random=10" },
    { title: "Random Image 11", src: "https://picsum.photos/300/200?random=11" },
    { title: "Canary Token", src: "https://via.placeholder.com/300x200.png?text=Canary+Token" },
];

const Gallery = () => {
    return (
        <div>
            <h1 className="text-center my-6 text-3xl font-bold">Animated Responsive Image Gallery</h1>
            <FocusCards cards={cards} />
        </div>
    );
};

export default Gallery;
