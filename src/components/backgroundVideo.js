"use client"
import React from 'react';
import video1 from '@/app/assets/video/videoo.mp4';
const BackgroundVideo = () => {
  return (
    <div className="relative h-screen">
      {/* Video de fondo */}
      <video
        autoPlay
        loop
        muted
        className="object-cover w-full h-full"
      >
        <source src={video1} type="video/mp4" />
      </video>

      {/* Contenido sobre el video */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white">Tu Contenido Aquí</h1>
      </div>
    </div>
  );
};

export default BackgroundVideo;
