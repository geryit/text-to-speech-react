"use client";

const parser = new DOMParser();

import React, { useCallback, useEffect, useState } from "react";
import useTextToSpeech from "../hooks/useTextToSpeech";

function Ssml() {
  //   const [text, setText] = useState(`123 Street Ln, Small Town, IL 12345 USA
  // 1 Jenny St & Number St, Tutone City, CA 86753
  // 1 Piazza del Fibonacci, 12358 Pisa, Italy`);

  //   const handleTextChange = useCallback(
  //     (event: React.ChangeEvent<HTMLTextAreaElement>) => {
  //       setText(event.target.value);
  //     },
  //     []
  //   );

  //   const { playPause, isPlaying } = useTextToSpeech(text);

  // useEffect(() => {
  //   const headerElement = document.getElementById("myHeader");
  //   if (headerElement) {
  //     headerElement.textContent = "Changed Header";
  //   }

  //   var newElement = document.createElement("p");
  //   newElement.textContent = "This is a new paragraph.";
  //   document.getElementById("myDiv")?.appendChild(newElement);

  //   document.getElementById("myButton")?.addEventListener("click", () => {
  //     alert("Hello World!");
  //   });
  // }, []);

  // const speakText = useCallback(() => {
  //   const text = (document.getElementById("textToSpeak") as HTMLTextAreaElement)
  //     ?.value;
  //
  //   const msg = new SpeechSynthesisUtterance(text);
  //   window.speechSynthesis.speak(msg);
  // }, []);

  useEffect(() => {
    //     const container = document.querySelector("#container");
    //     container!.innerHTML = "";
    //     const ul = document.createElement("ul");
    //     const browsers = ["Chrome", "Firefox", "Edge", "Safari", "Opera"];
    //     const fragment = new DocumentFragment();
    //     browsers.map((browser, i) => {
    //       const li = document.createElement("li");
    //       li.textContent = browser;
    //       if (i === 1) li.setAttribute("style", "color: red;");
    //       fragment.appendChild(li);
    //     });
    //     container?.appendChild(fragment);
    //     console.log(document.querySelector("ul>li:nth-child(2)")?.textContent);
    //     const parser = new DOMParser();
    //     const xmlString = `
    // <root>
    //     <phrase>Hello world, this is a test phrase.</phrase>
    // </root>
    // `;
    //     const xmlDoc = parser.parseFromString(xmlString, "text/xml");
    //     const phrase = xmlDoc.getElementsByTagName("root")[0].childNodes[1];

    const htmlString = document.getElementById("container")?.innerHTML || "";
    const doc = parser.parseFromString(htmlString, "text/html");

    const textContent = doc.body.textContent?.trim();

    console.log({
      textContent,
      b: document.getElementById("container")?.textContent,
    });

    const text = document.getElementById("container")?.textContent;

    console.log(
      text
        ?.split(".")
        .map((s) => s.trim())
        .join(".\n")
    );

    const msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
  }, []);

  return (
    <div className="w-full" id="container">
      <p>To the Aimo team,</p>
      <p>
        I have lived in Finland for seven years and have a permanent residence
        permit. I am a Front-end Developer with over 10 years of specialized
        experience in web and mobile app development.
      </p>

      <p>
        Previously, I worked with Udemy (Onsite for 2 years in San Francisco and
        2 years in Dublin) and Carbon Health San Francisco (7 years remote). I
        am currently searching for a contractor or a permanent position.
      </p>

      {/* <textarea
        value={text}
        onChange={handleTextChange}
        className="text-black p-4 w-full h-40"
      />
      <button onClick={playPause}>{!isPlaying ? "Play ►" : "Pause ⏸︎"}</button> */}

      {/*<textarea*/}
      {/*  id="textToSpeak"*/}
      {/*  rows={4}*/}
      {/*  cols={50}*/}
      {/*  placeholder="Text here..."*/}
      {/*  className="text-black"*/}
      {/*/>*/}
      {/*<button onClick={speakText}>Speak</button>*/}
    </div>
  );
}

export default Ssml;
