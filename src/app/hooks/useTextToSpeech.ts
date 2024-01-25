import { useCallback, useEffect, useMemo, useState } from "react";

function textToSsml(inputText: string): string {
  const specialCharacters: { [key: string]: string } = {
    "&": "&amp;",
    '"': "&quot;",
    "<": "&lt;",
    ">": "&gt;",
  };

  const escapedLines = inputText.replace(
    /[&"<>]/g,
    (match) => specialCharacters[match]
  );

  return `<speak>${escapedLines.replace(
    /\n/g,
    '\n<break time="2s"/>'
  )}</speak>`;
}

const useTextToSpeech = (inputText: string) => {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!inputText) return;
    fetch("https://texttospeech.googleapis.com/v1/text:synthesize", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({
        input: { ssml: textToSsml(inputText) },
        voice: { languageCode: "en-US", name: "en-US-Wavenet-F" },
        audioConfig: { audioEncoding: "MP3" },
      }),
    })
      .then((res) => res.json())
      .then((data) =>
        setAudio(new Audio(`data:audio/mp3;base64,${data.audioContent}`))
      );
  }, [inputText]);

  const playPause = useCallback(async () => {
    if (audio) {
      if (!isPlaying) {
        await audio.play();
      } else {
        audio.pause();
      }

      setIsPlaying((prev) => !prev);
    }
  }, [audio, isPlaying]);

  return { playPause, isPlaying };
};

export default useTextToSpeech;
