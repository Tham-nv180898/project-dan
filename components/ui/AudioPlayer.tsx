"use client";

import React, { useRef, useState, useEffect } from "react";
import { Volume2, Play, Pause } from "lucide-react";

interface AudioPlayerProps {
  audioSrc?: string;
  durationText?: string;
}

export function AudioPlayer({ audioSrc = "/audio/sample.mp3", durationText = "13:55" }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
    const handleLoadedMetadata = () => setDuration(audio.duration || 0);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    setCurrentTime(time);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
    }
  };

  const formatTime = (seconds: number) => {
    if (isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div className="w-full bg-[#1b2354] border border-[#2b3979] rounded-xl p-3.5 sm:p-5 shadow-lg text-white mb-6">
      <div className="flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4">
        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#2a3775] flex items-center justify-center text-[#e5c158] flex-shrink-0">
          <Volume2 className="w-4 h-4 sm:w-5 sm:h-5" />
        </div>
        <div className="min-w-0">
          <h3 className="font-bold text-[#e5c158] text-xs sm:text-sm uppercase tracking-wide truncate">
            Âm thanh thuyết minh
          </h3>
          <p className="text-[11px] sm:text-xs text-blue-200 truncate">Nhấn phát để nghe bài thuyết minh tự động</p>
        </div>
      </div>

      <audio ref={audioRef} src={audioSrc} preload="metadata" />

      <div className="bg-[#f1f3f4] text-gray-800 rounded-full px-3 sm:px-4 py-2 flex items-center gap-2 sm:gap-3 shadow-inner">
        <button
          onClick={togglePlay}
          className="w-8 h-8 rounded-full bg-blue-600 hover:bg-blue-700 active:scale-95 text-white flex items-center justify-center transition flex-shrink-0 shadow-sm"
          aria-label={isPlaying ? "Tạm dừng" : "Phát"}
        >
          {isPlaying ? <Pause className="w-4 h-4 fill-white" /> : <Play className="w-4 h-4 fill-white ml-0.5" />}
        </button>

        <span className="text-[11px] sm:text-xs font-mono font-medium text-gray-600 flex-shrink-0">
          {formatTime(currentTime)}
        </span>

        <input
          type="range"
          min="0"
          max={duration || 100}
          value={currentTime}
          onChange={handleSeek}
          className="flex-1 min-w-[60px] h-1.5 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-blue-600"
        />

        <span className="text-[11px] sm:text-xs font-mono font-medium text-gray-500 flex-shrink-0">
          {duration ? formatTime(duration) : durationText}
        </span>
      </div>
    </div>
  );
}
