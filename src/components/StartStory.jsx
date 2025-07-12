import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import popup from "../assets/popup.jpg";
import StoryScreen from "./StoryScreen";
import backgroundImage from "../assets/grandpa.png";

function StartStory() {
  const [username, setUsername] = useState("");
  const [started, setStarted] = useState(false);
  const [showStoryScreen, setShowStoryScreen] = useState(false);
  const elephantRef = useRef(null);

  const handleStart = () => {
    if (username.trim() !== "") {
      setStarted(true);

      setTimeout(() => {
        gsap.fromTo(
          elephantRef.current,
          { scale: 0, rotate: -10 },
          {
            scale: 1,
            rotate: 0,
            duration: 1,
            ease: "bounce.out",
            onComplete: () => {
              setTimeout(() => setShowStoryScreen(true), 1000);
            },
          }
        );
      }, 50);
    }
  };

  if (showStoryScreen) {
    return <StoryScreen username={username} />;
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center p-6"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {!started ? (
        <div className="bg-white/80 shadow-xl p-8 rounded-xl max-w-md w-full text-center">
          <h1 className="text-3xl font-bold text-indigo-600 mb-4">
            🌟 TaleCraft
          </h1>
          <p className="text-white mb-6">Enter your name to start your story</p>

          <input
            type="text"
            placeholder="Your name..."
            className="border border-gray-300 rounded-md p-2 w-32 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <button
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
            onClick={handleStart}
          >
            Start Story
          </button>
        </div>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-4">
            Welcome, {username}!
          </h2>
          <p className="text-lg text-gray-700 mb-6">Let the story begin...</p>

          <img
            ref={elephantRef}
            src={popup}
            alt="Curious Elephant"
            className="mx-auto object-contain"
            style={{ width: "400px", height: "400px" }}
          />
        </div>
      )}
    </div>
  );
}

export default StartStory;
