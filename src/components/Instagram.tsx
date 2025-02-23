'use client';

import React from 'react';

interface InstagramProps {
  instagramHandle?: string;
  imageUrl?: string;
  caption?: string;
  backgroundImageUrl?: string; // Optional background image URL
}

const Instagram: React.FC<InstagramProps> = ({
  instagramHandle = '@athlon.app',
  imageUrl = '/images/contact.png',
  caption = '🌟 Join us on our journey! Follow for daily inspiration and updates.',
  backgroundImageUrl = '/images/bg.png', // Default background image
}) => {
  const handleFollow = () => {
    const instagramUrl = `https://www.instagram.com/athlon.app?igsh=aXZscTU1eG53cW9k/${instagramHandle.replace('@', '')}`;
    window.open(instagramUrl, '_blank');
  };

  return (
    <div 
      className="w-full py-16 bg-gradient-to-b from-slate-50 to-white" 
      style={{ backgroundImage: `url(${backgroundImageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }} 
    >
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="w-12 h-12 mx-auto mb-4 text-[#272728]">
            {/* Simple Instagram icon */}
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </div>
          <h2 className="text-3xl font-bold mb-4 text-[#020d30]">Follow Us on Instagram</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Stay connected with us on Instagram for the latest updates, behind-the-scenes content, and more!
          </p>
        </div>

        {/* Instagram Post Preview */}
        <div className="max-w-xl mx-auto mb-8 justify-center"> {/* Changed from max-w-md to max-w-2xl */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Post Header */}
            <div className="p-4 border-b">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <span className="ml-3 font-medium">{instagramHandle}</span>
              </div>
            </div>

            {/* Post Image */}
            <div className="lex justify-center items-center h-[510px] w-full"> {/* Changed from aspect-square to fixed height */}
              <img
                src={imageUrl}
                alt="Instagram post"
                className="max-w-full max-h-full object-cover rounded-lg ml-8"
              />
            </div>

            {/* Post Caption */}
            <div className="p-4">
              <p className="text-sm">
                <span className="font-medium mr-2">{instagramHandle}</span>
                {caption}
              </p>
            </div>
          </div>
        </div>

        {/* Follow Button */}
        <div className="text-center">
          <button
            onClick={handleFollow}
            className="px-6 py-3 bg-gradient-to-r from-[#020d30] to-[#272728] hover:from-[#272728] hover:to-[#020d30] text-white rounded-lg font-medium flex items-center justify-center mx-auto"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
            </svg>
            Follow on Instagram
          </button>
        </div>
      </div>
    </div>
  );
};

export default Instagram;
