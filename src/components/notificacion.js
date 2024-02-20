import React, { useState, useRef } from 'react';
import musica from "@/app/assets/sound/introMusic.mp3"

const Notification = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const playPauseMusic = () => {
    const audioElement = audioRef.current;

    if (audioElement) {
      if (isPlaying) {
        audioElement.pause();
      } else {
        audioElement.play();
      }

      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed top-0 right-0 bg-slate-500 -500 text-white p-4 m-4 rounded-md shadow-md transition-transform transform">
      <p>Musica</p>
      <audio ref={audioRef} src={musica} />
      <button
        onClick={() => {
          playPauseMusic();
        }}
        className="ml-4 text-white hover:text-gray-200 focus:outline-none text-xs"
      >
        {isPlaying ? '||' : '>'}
      </button>
    </div>
  );
};

export default Notification;



