"use client"
import React from 'react';
import NavbarExample from '@/components/navbar'
import Type from '@../../../src/components/typeWriter';

const BackgroundVideo = () => {
  return (
    <div className='overflow-hidden h-screen'>
    
    <NavbarExample/>
    <div className="relative h-screen  ">
      {/* Video de fondo */}
      <video src={require('../../public/waves.mp4')} 
      autoPlay
      muted
      loop
      className="w-full h-full object-cover"
      />

      {/* Contenido sobre el video */}
      <div className="absolute inset-0 flex items-baseline  pt-60 ml-12  text-4xl font-mono h-full mt-12">
        <Type/>
        <div>
          <h1 className="absolute inset-0 flex items-baseline justify-center pt-5 text-4xl font-mono mt-4 text-slate-800 h-full ">Marcelo A. Diaz</h1>
        </div>
        <div>
        <h3 className="absolute inset-0 flex items-baseline justify-center pt-12 text-lg font-bold mt-6 text-slate-600 ">Desarrollador  Web Full Stack</h3>
        </div>
      </div>
    </div>
    </div>
  );
};

export default BackgroundVideo;
