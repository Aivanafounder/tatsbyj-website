import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-6">
      {/* Hero Section */}
      <div className="w-full max-w-4xl text-center py-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to TatsbyJ</h1>
        <p className="text-lg mb-6">Custom Tattoos with Precision & Artistry</p>
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
