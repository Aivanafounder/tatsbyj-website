import React from "react";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sampleImages = [
  "/tattoo1.jpg",
  "/tattoo2.jpg",
  "/tattoo3.jpg",
  "/tattoo4.jpg",
  "/tattoo5.jpg"
];

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-6">
      {/* Hero Section */}
      <div className="w-full max-w-4xl text-center py-12">
        <h1 className="text-4xl font-bold mb-4">Your Body, Your Canvas – Express Yourself Through Art</h1>
        <p className="text-lg mb-6">Transform your vision into ink. Tattoos are more than just art; they are a reflection of your story.</p>
      </div>
      
      {/* Gallery Carousel */}
      <div className="w-full max-w-4xl py-6">
        <h2 className="text-2xl font-bold text-center mb-4">Featured Tattoos</h2>
        <Slider {...settings}>
          {sampleImages.map((src, index) => (
            <div key={index} className="px-2">
              <Image src={src} alt={`Tattoo ${index + 1}`} width={300} height={300} className="rounded-lg" />
            </div>
          ))}
        </Slider>
        <div className="text-center mt-4">
          <Link href="/gallery" className="text-red-500 text-lg underline">View All</Link>
        </div>
      </div>
      
      {/* Navigation Buttons */}
      <div className="w-full max-w-lg flex flex-col gap-4">
        {/* View Gallery */}
        <Link href="/gallery" className="block w-full text-center bg-gray-800 py-3 rounded-lg text-xl">
          View Gallery
        </Link>
        {/* Book an Appointment */}
        <Link href="/book" className="block w-full text-center bg-red-600 py-3 rounded-lg text-xl">
          Book an Appointment
        </Link>
        {/* Follow on Social Media */}
        <Link href="https://www.facebook.com/Julian.Ybarra.Tattoos" target="_blank" className="block w-full text-center bg-blue-600 py-3 rounded-lg text-xl">
          Follow on Social Media
        </Link>
        {/* FAQs */}
        <Link href="/faqs" className="block w-full text-center bg-gray-700 py-3 rounded-lg text-xl">
          FAQs
        </Link>
      </div>
    </div>
  );
}
