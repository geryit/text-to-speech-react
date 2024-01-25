"use client";
import React, { useCallback, useState } from "react";
import useTextToSpeech from "../hooks/useTextToSpeech";

function TextToSpeechApp() {
  const [text, setText] = useState(`123 Street Ln, Small Town, IL 12345 USA
1 Jenny St & Number St, Tutone City, CA 86753
1 Piazza del Fibonacci, 12358 Pisa, Italy`);

  const handleTextChange = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setText(event.target.value);
    },
    []
  );

  const { playPause, isPlaying } = useTextToSpeech(text);

  return (
    <div className="w-full">
      <textarea
        value={text}
        onChange={handleTextChange}
        className="text-black p-4 w-full h-40"
      />
      <button onClick={playPause}>{!isPlaying ? "Play ►" : "Pause ⏸︎"}</button>
    </div>
  );
}

export default TextToSpeechApp;
