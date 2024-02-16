"use client"
import React from 'react';
import NavbarExample from '@/components/navbar'


const BackgroundVideo = () => {
  return (
    <>
    <NavbarExample/>
    <div className="relative h-screen ">
      {/* Video de fondo */}
      <video src={require('../../public/waves.mp4')} 
      autoPlay
      muted
      loop
      className="w-full h-full object-cover"
      />

      {/* Contenido sobre el video */}
      <div className="absolute inset-0 flex items-baseline justify-normal pt-44">
        <div>
          <h1 className="text-4xl font-bold text-black ">Marcelo A. Diaz</h1>
        </div>
        <div>
        <h3 className="text-1xl font-bold text-black ">Desarrollador  Web Full Stack</h3>
        </div>
      </div>
    </div>
    </>
  );
};

export default BackgroundVideo;
