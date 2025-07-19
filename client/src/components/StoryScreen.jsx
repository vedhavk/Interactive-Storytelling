import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import backgroundImage from "../assets/funnyhorror.jpeg";
import GeneratedStory from "./GeneratedStory";

gsap.registerPlugin(ScrollTrigger);

function StoryScreen({ username }) {
  const scrollRef = useRef(null);
  const [choiceMade, setChoiceMade] = useState(null);
  const [story, setStory] = useState("");
  const [loading, setLoading] = useState(false);
  const [showGeneratedStory, setShowGeneratedStory] = useState(false);

  const handleChoice = async (choice) => {
    console.log("Choice made:", choice);
    setChoiceMade(choice);
    setLoading(true);
    setStory("");
    setShowGeneratedStory(false);

    try {
      console.log("Fetching story from API...");
      const res = await fetch("https://interactive-storytelling-backend.onrender.com/api/story", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ genre: choice }),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      console.log("API response:", data);
      setStory(data.story || "Story generated successfully!");
      
      // Show the generated story after a brief delay
      setTimeout(() => {
        console.log("Showing generated story component");
        setShowGeneratedStory(true);
      }, 1000);
    } catch (error) {
      console.error("Error fetching story:", error);
      setStory("Something went wrong. Please try again later. Make sure the server is running on port 5000.");
      setTimeout(() => {
        setShowGeneratedStory(true);
      }, 1000);
    } finally {
      setLoading(false);
    }
  };

  const handleBackToHome = () => {
    setShowGeneratedStory(false);
    setChoiceMade(null);
    setStory("");
    setLoading(false);
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

  // Show the GeneratedStory component when story is ready
  if (showGeneratedStory) {
    return (
      <GeneratedStory 
        story={story} 
        genre={choiceMade} 
        username={username}
        onBackToHome={handleBackToHome}
      />
    );
  }

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
        <h2 className="text-3xl font-bold mb-4" style={{ color: "white", fontWeight: "900" }}>Welcome, {username}!</h2>
        <p className="text-lg max-w-lg" style={{ color: "white", fontWeight: "bold" }}>
          You wake up in a misty forest. The air is cool. You hear strange
          sounds in the distance...
        </p>
        <div
          ref={scrollRef}
          className="mt-10 font-medium animate-bounce"
          style={{ color: "white", fontWeight: "bold" }}
        >
          ↓ Scroll Down ↓
        </div>
      </section>

      {/* Choice Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-black/60">
        <h3 className="text-3xl font-bold mb-12" style={{ color: "white", fontWeight: "900" }}>Choose Your Story Path</h3>

        <div className="flex gap-20 items-center justify-center">
          <div
            className="cursor-pointer group w-64"
            onClick={() => handleChoice("funny")}
          >
            <div className="bg-yellow-600/80 p-8 rounded-xl shadow-2xl transform transition-all duration-300 group-hover:scale-110">
              <span className="text-6xl mb-6 block" style={{ fontSize: "5rem" }}>😄</span>
              <h4 className="text-2xl font-bold mb-3" style={{ color: "white", fontWeight: "900" }}>Funny Story</h4>
              <p className="text-lg" style={{ color: "white", fontWeight: "bold" }}>Time for some laughs.....</p>
            </div>
          </div>

          <div
            className="cursor-pointer group w-64"
            onClick={() => handleChoice("horror")}
          >
            <div className="bg-red-900/80 p-8 rounded-xl shadow-2xl transform transition-all duration-300 group-hover:scale-110">
              <span className="text-6xl mb-6 block" style={{ fontSize: "5rem" }}>👻</span>
              <h4 className="text-2xl font-bold mb-3" style={{ color: "white", fontWeight: "900" }}>Horror Story</h4>
              <p className="text-lg" style={{ color: "white", fontWeight: "bold" }}>Dare to face your fears...</p>
            </div>
          </div>
        </div>

        {/* Choice Display */}
        {choiceMade && (
          <div className="mt-12 text-2xl font-bold" style={{ color: "white", fontWeight: "900" }}>
            You chose: {choiceMade === "funny" ? "Funny Story" : "Horror Story"}!
          </div>
        )}

        {/* Loading Spinner */}
        {loading && (
          <div className="mt-6 flex flex-col items-center">
            <div className="animate-spin text-4xl mb-4" style={{ fontSize: "4rem" }}>
              {choiceMade === "horror" ? "👻" : "😄"}
            </div>
            <div className="text-lg italic animate-pulse" style={{ color: "white", fontWeight: "bold" }}>
              Generating your {choiceMade} story...
            </div>
            <div className="mt-2 text-sm opacity-75" style={{ color: "white", fontWeight: "bold" }}>
              This may take a few moments
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

export default StoryScreen;
