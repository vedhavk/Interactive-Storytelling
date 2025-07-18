import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import horrorImg from "../assets/horrorstoryimg.jpg";
import funnyImg from "../assets/funnyimage.png"; 

const GeneratedStory = ({ story, genre, username, onBackToHome }) => {
  const storyRef = useRef(null);
  const containerRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(true);
  
  // Debug logging
  useEffect(() => {
    console.log('GeneratedStory rendered with:', { story, genre, username });
  }, [story, genre, username]);
  
  // Choose background and theme based on genre
  const getThemeConfig = () => {
    if (genre === "horror") {
      return {
        bgImage: horrorImg,
        bgColor: "from-gray-900 via-red-900 to-black",
        cardBg: "bg-gray-100/95",
        textColor: "text-gray-900",
        titleColor: "text-red-600",
        accentColor: "text-red-500",
        buttonBg: "bg-red-600 hover:bg-red-700",
        emoji: "👻",
        fontFamily: "serif",
        titleFont: "'Creepster', cursive",
        textFont: "'Crimson Text', serif"
      };
    } else {
      return {
        bgImage: funnyImg,
        bgColor: "from-yellow-400 via-orange-300 to-pink-400",
        cardBg: "bg-gray-50/98",
        textColor: "text-gray-800",
        titleColor: "text-orange-600",
        accentColor: "text-yellow-600",
        buttonBg: "bg-yellow-500 hover:bg-yellow-600",
        emoji: "😄",
        fontFamily: "sans-serif",
        titleFont: "'Fredoka One', cursive",
        textFont: "'Nunito', sans-serif"
      };
    }
  };

  const theme = getThemeConfig();

  useEffect(() => {
    if (story && storyRef.current) {
      // Initial animation for the story container
      gsap.set(storyRef.current, { opacity: 0, y: 50 });
      
      gsap.to(storyRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.out",
        onComplete: () => setIsAnimating(false)
      });
    }
  }, [story]);

  // Format story text with proper styling
  const formatStoryText = (text) => {
    if (!text || typeof text !== 'string') {
      return <span>No story content available.</span>;
    }
    
    return text.split('\n').map((paragraph, index) => (
      <p key={index} className="mb-4 last:mb-0">
        {paragraph}
      </p>
    ));
  };

  // Handle case where no genre is provided (moved after all hooks)
  if (!genre) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Loading...</h1>
          <p>Preparing your story experience...</p>
        </div>
      </div>
    );
  }

  return (
    <div 
      className={`min-h-screen w-full bg-gradient-to-br ${theme.bgColor} relative overflow-hidden`}
      style={{
        backgroundImage: `url(${theme.bgImage})`,
        backgroundBlendMode: genre === "horror" ? "soft-light" : "overlay",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      {/* Lighter overlay for better text readability */}
      <div 
        className="absolute inset-0" 
        style={{
          background: genre === "horror" 
            ? "linear-gradient(135deg, rgba(100,100,100,0.7), rgba(80,80,80,0.8))" 
            : "linear-gradient(135deg, rgba(200,200,200,0.8), rgba(220,220,220,0.9))"
        }}
      ></div>
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {genre === "horror" ? (
          <>
            <div className="absolute top-10 left-10 text-6xl animate-pulse opacity-20">👻</div>
            <div className="absolute top-40 right-20 text-4xl animate-bounce opacity-30">🦇</div>
            <div className="absolute bottom-20 left-20 text-5xl animate-pulse opacity-25">🕷️</div>
          </>
        ) : (
          <>
            <div className="absolute top-10 left-10 text-6xl animate-bounce opacity-30">🌟</div>
            <div className="absolute top-40 right-20 text-4xl animate-pulse opacity-40">🎉</div>
            <div className="absolute bottom-20 left-20 text-5xl animate-bounce opacity-35">🎈</div>
            <div className="absolute top-60 left-1/2 text-3xl animate-pulse opacity-30">✨</div>
          </>
        )}
      </div>

      <div ref={containerRef} className="relative z-10 min-h-screen flex items-center justify-center p-6">
        <div className={`max-w-5xl w-full ${theme.cardBg} rounded-3xl shadow-2xl p-10 md:p-14 backdrop-blur-sm`}>
          {/* Header */}
          <div className="text-center mb-10">
            <div className="text-8xl mb-6 animate-pulse">{theme.emoji}</div>
            <h1 
              className={`text-4xl md:text-5xl font-bold ${theme.titleColor} mb-3`}
              style={{
                fontFamily: genre === "horror" ? "serif" : "sans-serif",
                fontWeight: genre === "horror" ? "900" : "800",
                letterSpacing: genre === "horror" ? "2px" : "1px",
                textShadow: genre === "horror" 
                  ? "3px 3px 6px rgba(0,0,0,0.7), 0 0 20px rgba(220,38,38,0.5)" 
                  : "2px 2px 4px rgba(0,0,0,0.3), 0 0 15px rgba(255,193,7,0.3)",
                background: genre === "horror" 
                  ? "linear-gradient(135deg, #ef4444, #dc2626, #991b1b)" 
                  : "linear-gradient(135deg, #f59e0b, #d97706, #92400e)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}
            >
              Your {genre === "horror" ? "Horror" : "Funny"} Story
            </h1>
            <p 
              className={`text-xl ${theme.accentColor} font-medium`}
              style={{
                fontFamily: genre === "horror" ? "serif" : "sans-serif",
                fontStyle: genre === "horror" ? "italic" : "normal",
                textShadow: "1px 1px 2px rgba(0,0,0,0.5)"
              }}
            >
              Created specially for {username}
            </p>
          </div>

          {/* Story Content */}
          <div ref={storyRef} className="mb-10">
            <div 
              className={`${theme.textColor} text-lg md:text-xl leading-relaxed font-medium bg-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-sm shadow-inner`}
              style={{
                fontFamily: genre === "horror" ? "serif" : "sans-serif",
                fontSize: genre === "horror" ? "18px" : "17px",
                lineHeight: genre === "horror" ? "1.8" : "1.7",
                letterSpacing: genre === "horror" ? "0.5px" : "0.3px",
                textShadow: genre === "horror" ? "2px 2px 4px rgba(0,0,0,0.8)" : "1px 1px 2px rgba(255,255,255,0.5)",
                background: "transparent",
                color: genre === "horror" ? "white" : "black",
                fontWeight: "bold",
                padding: "40px 50px",
                margin: "20px 0"
              }}
            >
              {story && story.trim() ? formatStoryText(story) : (
                <div className="text-center">
                  <div className="animate-spin text-4xl mb-4">{theme.emoji}</div>
                  <p className="animate-pulse">
                    {story ? "Loading story content..." : "Crafting your story..."}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Story Stats/Info */}
          

          {/* Action Buttons */}
          <div 
            className="flex flex-col sm:flex-row justify-center items-center"
            style={{
              gap: "1rem" 
            }}
          >
            <button
              onClick={onBackToHome}
              className="text-white font-bold text-sm rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-block"
              style={{
                padding: "16px 40px",
                fontFamily: genre === "horror" ? "serif" : "sans-serif",
                fontSize: "14px",
                fontWeight: "800",
                letterSpacing: "1px",
                textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
                background: genre === "horror" 
                  ? "linear-gradient(135deg, #dc2626, #991b1b, #7f1d1d, #450a0a)" 
                  : "linear-gradient(135deg, #f59e0b, #d97706, #b45309, #92400e)",
                boxShadow: genre === "horror" 
                  ? "0 10px 25px rgba(220,38,38,0.6), inset 0 2px 4px rgba(255,255,255,0.2), 0 0 20px rgba(220,38,38,0.3)" 
                  : "0 10px 25px rgba(245,158,11,0.6), inset 0 2px 4px rgba(255,255,255,0.2), 0 0 20px rgba(245,158,11,0.3)",
                cursor: "pointer",
                minWidth: "fit-content",
                whiteSpace: "nowrap",
                border: genre === "horror" 
                  ? "2px solid rgba(220,38,38,0.8)" 
                  : "2px solid rgba(245,158,11,0.8)",
                position: "relative",
                overflow: "hidden"
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "scale(1.08)";
                e.target.style.boxShadow = genre === "horror" 
                  ? "0 15px 35px rgba(220,38,38,0.8), inset 0 2px 4px rgba(255,255,255,0.3), 0 0 30px rgba(220,38,38,0.5)" 
                  : "0 15px 35px rgba(245,158,11,0.8), inset 0 2px 4px rgba(255,255,255,0.3), 0 0 30px rgba(245,158,11,0.5)";
                e.target.style.textShadow = "3px 3px 6px rgba(0,0,0,1)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1)";
                e.target.style.boxShadow = genre === "horror" 
                  ? "0 10px 25px rgba(220,38,38,0.6), inset 0 2px 4px rgba(255,255,255,0.2), 0 0 20px rgba(220,38,38,0.3)" 
                  : "0 10px 25px rgba(245,158,11,0.6), inset 0 2px 4px rgba(255,255,255,0.2), 0 0 20px rgba(245,158,11,0.3)";
                e.target.style.textShadow = "2px 2px 4px rgba(0,0,0,0.8)";
              }}
            >
              ← Create Another Story
            </button>
            
            {story && story.trim() && (
              <button
                onClick={() => {
                  navigator.clipboard.writeText(story);
                  alert("Story copied to clipboard!");
                }}
                className="text-white font-bold text-sm rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-block"
                style={{
                  padding: "16px 40px",
                  fontFamily: genre === "horror" ? "serif" : "sans-serif",
                  fontSize: "14px",
                  fontWeight: "800",
                  letterSpacing: "1px",
                  textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
                  background: genre === "horror" 
                    ? "linear-gradient(135deg, #2563eb, #1d4ed8, #1e40af, #1e3a8a)" 
                    : "linear-gradient(135deg, #2563eb, #1d4ed8, #1e40af, #1e3a8a)",
                  boxShadow: genre === "horror" 
                    ? "0 10px 25px rgba(37,99,235,0.6), inset 0 2px 4px rgba(255,255,255,0.2), 0 0 20px rgba(37,99,235,0.4)" 
                    : "0 10px 25px rgba(37,99,235,0.6), inset 0 2px 4px rgba(255,255,255,0.2), 0 0 20px rgba(37,99,235,0.4)",
                  cursor: "pointer",
                  minWidth: "fit-content",
                  whiteSpace: "nowrap",
                  border: "2px solid rgba(37,99,235,0.8)",
                  position: "relative",
                  overflow: "hidden"
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "scale(1.08)";
                  e.target.style.boxShadow = "0 15px 35px rgba(37,99,235,0.8), inset 0 2px 4px rgba(255,255,255,0.3), 0 0 30px rgba(37,99,235,0.6)";
                  e.target.style.textShadow = "3px 3px 6px rgba(0,0,0,1)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "scale(1)";
                  e.target.style.boxShadow = genre === "horror" 
                    ? "0 10px 25px rgba(37,99,235,0.6), inset 0 2px 4px rgba(255,255,255,0.2), 0 0 20px rgba(37,99,235,0.4)" 
                    : "0 10px 25px rgba(37,99,235,0.6), inset 0 2px 4px rgba(255,255,255,0.2), 0 0 20px rgba(37,99,235,0.4)";
                  e.target.style.textShadow = "2px 2px 4px rgba(0,0,0,0.8)";
                }}
              >
                📋 Copy Story
              </button>
            )}
          </div>

          {/* Decorative elements */}
          <div className="mt-10 text-center">
            <div 
              className={`inline-block px-8 py-3 rounded-full ${theme.accentColor} font-medium backdrop-blur-sm shadow-sm`}
              style={{
                fontFamily: genre === "horror" ? "serif" : "sans-serif",
                fontSize: "14px",
                fontWeight: "600",
                letterSpacing: "0.5px",
                textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
                background: genre === "horror" 
                  ? "linear-gradient(135deg, rgba(220,38,38,0.3), rgba(0,0,0,0.4))" 
                  : "linear-gradient(135deg, rgba(255,193,7,0.3), rgba(255,255,255,0.4))"
              }}
            >            </div>
          </div>
        </div>
      </div>

      {/* Floating animation elements */}
      <div className="absolute bottom-10 right-10 animate-bounce">
        <div 
          className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl shadow-lg backdrop-blur-sm`}
          style={{
            background: genre === "horror" 
              ? "linear-gradient(135deg, rgba(220,38,38,0.4), rgba(0,0,0,0.6))" 
              : "linear-gradient(135deg, rgba(255,193,7,0.4), rgba(255,255,255,0.6))",
            boxShadow: genre === "horror" 
              ? "0 8px 20px rgba(220,38,38,0.3)" 
              : "0 8px 20px rgba(255,193,7,0.3)"
          }}
        >
          {theme.emoji}
        </div>
      </div>
    </div>
  );
};

export default GeneratedStory;
