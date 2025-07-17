import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import backgroundImage from "../assets/funnyhorror.jpeg";

gsap.registerPlugin(ScrollTrigger);

function StoryScreen({ username }) {
  const scrollRef = useRef(null);
  const [choiceMade, setChoiceMade] = useState(null);
  const [story, setStory] = useState("");         // NEW: For displaying story
  const [loading, setLoading] = useState(false);  // NEW: To show loading state

  const handleChoice = async (choice) => {
    setChoiceMade(choice);
    setLoading(true);
    setStory("");

    try {
      const res = await fetch("http://localhost:5000/api/story", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ genre: choice }),
      });

      const data = await res.json();
      setStory(data.story);
    } catch (error) {
      console.error("Error fetching story:", error);
      setStory("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    gsap.fromTo(
      scrollRef.current,
      { y: 10, opacity: 0.5 },
      {
        y: -10,
        opacity: 1,
        repeat: -1,
        yoyo: true,
        duration: 1,
        ease: "power1.inOut",
      }
    );
  }, []);

  return (
    <div
      className="bg-cover bg-no-repeat bg-center bg-fixed min-h-screen w-full font-sans text-white"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        minHeight: "100vh",
      }}
    >
      {/* Top Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-3xl font-bold mb-4">Welcome, {username}!</h2>
        <p className="text-lg max-w-lg">
          You wake up in a misty forest. The air is cool. You hear strange
          sounds in the distance...
        </p>
        <div
          ref={scrollRef}
          className="mt-10 font-medium animate-bounce"
        >
          ↓ Scroll Down ↓
        </div>
      </section>

      {/* Choice Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-black/60">
        <h3 className="text-3xl font-bold mb-12">Choose Your Story Path</h3>

        <div className="flex gap-20 items-center justify-center">
          <div
            className="cursor-pointer group w-64"
            onClick={() => handleChoice("funny")}
          >
            <div className="bg-yellow-600/80 p-8 rounded-xl shadow-2xl transform transition-all duration-300 group-hover:scale-110">
              <span className="text-6xl mb-6 block">😄</span>
              <h4 className="text-2xl font-bold mb-3">Funny Story</h4>
              <p className="text-lg">Time for some laughs.....</p>
            </div>
          </div>

          <div
            className="cursor-pointer group w-64"
            onClick={() => handleChoice("horror")}
          >
            <div className="bg-red-900/80 p-8 rounded-xl shadow-2xl transform transition-all duration-300 group-hover:scale-110">
              <span className="text-6xl mb-6 block">👻</span>
              <h4 className="text-2xl font-bold mb-3">Horror Story</h4>
              <p className="text-lg">Dare to face your fears...</p>
            </div>
          </div>
        </div>

        {/* Choice Display */}
        {choiceMade && (
          <div className="mt-12 text-2xl font-bold">
            You chose: {choiceMade === "funny" ? "Funny Story" : "Horror Story"}!
          </div>
        )}

        {/* Loading Spinner */}
        {loading && (
          <div className="mt-6 text-lg italic animate-pulse">Generating your story...</div>
        )}

        {/* Display Story */}
        {story && !loading && (
          <div className="mt-12 max-w-2xl bg-white/10 p-6 rounded-xl text-lg leading-relaxed">
            {story}
          </div>
        )}
      </section>
    </div>
  );
}

export default StoryScreen;
