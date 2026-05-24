"use client";

import { useEffect, useState } from "react";
import Image from "next/image";


const slides = [
    {
        image: "/images/hero1.jpg",
        title: "Upgrade Your Style",
        subtitle: "Discover the latest trends with unbeatable prices",
    },
    {
        image: "/images/hero2.jpg",
        title: "Smart Choices, Better Life",
        subtitle: "Top quality products selected just for you",
    },
    {
        image: "/images/hero3.jpg",
        title: "Everything You Need in One Place",
        subtitle: "Shop now and enjoy fast delivery",
    },
];

export default function Hero() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative h-[70vh]">
            {/* الصورة */}
            <Image
                src={slides[current].image}
                alt="hero section"
                fill
                className="object-cover"
                priority
            />

            {/* overlay */}
            <div className="absolute inset-0 bg-black/20" />

            {/* النص */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 transition-all">
                    {slides[current].title}
                </h1>
                <p className="text-lg md:text-2xl max-w-2xl transition-all">
                    {slides[current].subtitle}
                </p>
            </div>
        </section>
    );
}