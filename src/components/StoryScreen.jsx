import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import backgroundImage from "../assets/funnyhorror.jpeg";

gsap.registerPlugin(ScrollTrigger);

function StoryScreen({ username }) {
  const scrollRef = useRef(null);
  const choiceRef = useRef(null);
  const [choiceMade, setChoiceMade] = useState(null);

  const handleChoice = (choice) => {
    setChoiceMade(choice);
  };

  useEffect(() => {
    // Scroll Down Text Animation (infinite up-down)
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
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        minHeight: '100vh'
      }}
    >
      {/* Top Story Intro */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <h2
          className="text-3xl font-bold text-white mb-4"
          style={{ color: "white" }}
        >
          Welcome, {username}!
        </h2>
        <p className="text-lg max-w-lg text-white" style={{ color: "white" }}>
          You wake up in a misty forest. The air is cool. You hear strange
          sounds in the distance...
        </p>

        {/* Scroll Down Arrow */}
        <div
          ref={scrollRef}
          className="mt-10 text-white font-medium animate-bounce"
          style={{ color: "white" }}
        >
          ↓ Scroll Down ↓
        </div>
      </section>

      {/* Story Choice Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-black/60">
        <h3
          className="text-3xl font-bold text-white mb-12"
          style={{ color: "white" }}
        >
          Choose Your Story Path
        </h3>

        <div className="flex gap-20 items-center justify-center">
          {/* Funny Story Option - Now on Left */}
          <div
            className="cursor-pointer group w-64"
            onClick={() => handleChoice("funny")}
          >
            <div className="bg-yellow-600/80 p-8 rounded-xl shadow-2xl transform transition-all duration-300 group-hover:scale-110">
              <span className="text-6xl mb-6 block">😄</span>
              <h4
                className="text-2xl font-bold text-white mb-3"
                style={{ color: "white" }}
              >
                Funny Story
              </h4>
              <p className="text-white text-lg" style={{ color: "white" }}>
                Time for some laughs.....
              </p>
            </div>
          </div>

          {/* Horror Story Option - Now on Right */}
          <div
            className="cursor-pointer group w-64"
            onClick={() => handleChoice("horror")}
          >
            <div className="bg-red-900/80 p-8 rounded-xl shadow-2xl transform transition-all duration-300 group-hover:scale-110">
              <span className="text-6xl mb-6 block">👻</span>
              <h4
                className="text-2xl font-bold text-white mb-3"
                style={{ color: "white" }}
              >
                Horror Story
              </h4>
              <p className="text-white text-lg" style={{ color: "white" }}>
                Dare to face your fears...
              </p>
            </div>
          </div>
        </div>

        {choiceMade && (
          <div className="mt-12 text-2xl text-white font-bold animate-fade-in" style={{ color: "white" }}>
            You chose: {choiceMade === "funny" ? "Funny Story" : "Horror Story"}
            !
          </div>
        )}
      </section>
    </div>
  );
}

export default StoryScreen;
