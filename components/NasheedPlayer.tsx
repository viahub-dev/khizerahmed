"use client";

import { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

// Background nasheed player.
//
// This does NOT ship with an audio file (Claude cannot supply or embed
// copyrighted audio). To activate it:
//   1. Get a licensed / permitted nasheed MP3 (vocals-only / soft is a nice fit).
//   2. Save it as: public/audio/nasheed.mp3
//   3. That's it — this button will find and loop it automatically.
//
// To change the track later, just replace that file and redeploy.
export default function NasheedPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [missing, setMissing] = useState(false);

  function toggle() {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio.play().catch(() => setMissing(true));
      setPlaying(true);
    } else {
      audio.pause();
      setPlaying(false);
    }
  }

  return (
    <>
      <audio ref={audioRef} loop preload="none" onPause={() => setPlaying(false)}>
        <source src="/audio/my-dream.mp3" type="audio/mpeg" />
      </audio>
      <button
        onClick={toggle}
        aria-label={playing ? "Pause background nasheed" : "Play background nasheed"}
        title={missing ? "Add public/audio/nasheed.mp3 to enable this" : "Play nasheed"}
        className="fixed bottom-6 right-6 z-50 h-12 w-12 rounded-full bg-accent dark:bg-accent-dark text-white dark:text-bg-dark shadow-lg flex items-center justify-center transition-all hover:-translate-y-0.5"
      >
        {playing ? <Pause size={16} fill="currentColor" /> : <Play size={16} fill="currentColor" />}
      </button>
    </>
  );
}
