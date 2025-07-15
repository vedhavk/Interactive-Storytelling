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
      className="min-h-screen w-full bg-cover bg-center bg-fixed bg-no-repeat flex items-center justify-center p-6"
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
      {!started ? (
        <div className="bg-white/80 shadow-xl p-8 rounded-xl max-w-md w-full text-center">
          <h1 className="text-4xl font-bold text-indigo-600 mb-4">
            🌟<span className="text-4xl"style={{textShadow: '2px 2px 3px rgba(255, 255, 50, 0.7)'}}>TaleCraft</span> 
          </h1>
               <p style={{
            color: 'black',
            textShadow: '2px 2px 7px rgba(255, 255, 70, 0.7)',
            marginBottom: '24px',
            fontWeight: '800',
            filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1))'
          }}>
            ✨ Enter your name to start your magical story ✨
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
            <input
              type="text"
              placeholder="✨ Your magical name..."
              style={{
                background: 'linear-gradient(to right, rgba(255,255,255,0.95), rgba(224,231,255,0.9))',
                border: '2px solid #a5b4fc',
                borderRadius: '12px',
                padding: '12px 20px',
                width: '280px',
                color: '#1f2937',
                fontWeight: '500',
                fontSize: '16px',
                textAlign: 'center',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                backdropFilter: 'blur(4px)',
                outline: 'none',
                transition: 'all 0.3s ease'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#6366f1';
                e.target.style.boxShadow = '0 0 0 4px rgba(99, 102, 241, 0.25), 0 10px 15px -3px rgba(0, 0, 0, 0.1)';
                e.target.style.transform = 'scale(1.05)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#a5b4fc';
                e.target.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
                e.target.style.transform = 'scale(1)';
              }}
              onMouseEnter={(e) => {
                e.target.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
                e.target.style.borderColor = '#8b5cf6';
              }}
              onMouseLeave={(e) => {
                if (document.activeElement !== e.target) {
                  e.target.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
                  e.target.style.borderColor = '#a5b4fc';
                }
              }}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <button
              style={{
                background: 'linear-gradient(135deg, #ff7f00 0%, #ff4500 30%, #8b0000 70%, #000000 100%)',
                color: 'white',
                fontWeight: 'bold',
                padding: '14px 40px',
                borderRadius: '12px',
                boxShadow: '0 15px 35px rgba(255, 127, 0, 0.4), 0 5px 15px rgba(139, 0, 0, 0.3)',
                border: '1px solid rgba(255, 165, 0, 0.5)',
                backdropFilter: 'blur(8px)',
                outline: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                transform: 'translateY(0)',
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.6)',
                fontSize: '16px'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'linear-gradient(135deg, #ff8c00 0%, #ff6500 30%, #b22222 70%, #2f2f2f 100%)';
                e.target.style.boxShadow = '0 20px 40px rgba(255, 127, 0, 0.6), 0 8px 20px rgba(139, 0, 0, 0.5)';
                e.target.style.transform = 'scale(1.08) translateY(-4px)';
                e.target.style.border = '1px solid rgba(255, 215, 0, 0.8)';
                e.target.style.textShadow = '0 2px 8px rgba(255, 127, 0, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'linear-gradient(135deg, #ff7f00 0%, #ff4500 30%, #8b0000 70%, #000000 100%)';
                e.target.style.boxShadow = '0 15px 35px rgba(255, 127, 0, 0.4), 0 5px 15px rgba(139, 0, 0, 0.3)';
                e.target.style.transform = 'scale(1) translateY(0)';
                e.target.style.border = '1px solid rgba(255, 165, 0, 0.5)';
                e.target.style.textShadow = '0 2px 4px rgba(0, 0, 0, 0.6)';
              }}
              onMouseDown={(e) => {
                e.target.style.transform = 'scale(1.02) translateY(-1px)';
              }}
              onMouseUp={(e) => {
                e.target.style.transform = 'scale(1.08) translateY(-4px)';
              }}
              onFocus={(e) => {
                e.target.style.boxShadow = '0 0 0 4px rgba(255, 165, 0, 0.4), 0 20px 40px rgba(255, 127, 0, 0.6)';
              }}
              onBlur={(e) => {
                e.target.style.boxShadow = '0 15px 35px rgba(255, 127, 0, 0.4), 0 5px 15px rgba(139, 0, 0, 0.3)';
              }}
              onClick={handleStart}
            >
              � Begin Adventure 🌟
            </button>
          </div>
        </div>
      ) : (
        <div style={{
          textAlign: 'center',
          background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)',
          backdropFilter: 'blur(10px)',
          borderRadius: '20px',
          padding: '40px',
          border: '1px solid rgba(255,255,255,0.2)',
          boxShadow: '0 25px 50px rgba(0,0,0,0.15)',
          maxWidth: '500px',
          width: '100%'
        }}>
          <h2 style={{
            fontSize: '32px',
            fontWeight: '600',
            color: '#ffffff',
            marginBottom: '16px',
            textShadow: '0 4px 8px rgba(0,0,0,0.3), 0 0 20px rgba(255,255,255,0.2)',
            background: 'linear-gradient(45deg, #ff7f00, #ff4500, #ffd700)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Welcome, {username}!
          </h2>
          <p style={{
            fontSize: '20px',
            color: '#ffffff',
            marginBottom: '32px',
            textShadow: '0 2px 4px rgba(0,0,0,0.4)',
            fontWeight: '500'
          }}>
            ✨ Let the magical story begin... ✨
          </p>

          <div style={{
            position: 'relative',
            display: 'inline-block',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(0,0,0,0.3), 0 0 30px rgba(255,127,0,0.2)',
            border: '3px solid rgba(255,215,0,0.6)',
            background: 'linear-gradient(45deg, rgba(255,127,0,0.1), rgba(255,215,0,0.1))'
          }}>
            <img
              ref={elephantRef}
              src={popup}
              alt="Curious Elephant"
              style={{ 
                width: "400px", 
                height: "400px",
                objectFit: 'cover',
                borderRadius: '17px',
                transition: 'all 0.3s ease',
                filter: 'brightness(1.1) contrast(1.1) saturate(1.2)'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.02)';
                e.target.style.filter = 'brightness(1.2) contrast(1.2) saturate(1.3)';
                e.target.parentElement.style.boxShadow = '0 25px 50px rgba(0,0,0,0.4), 0 0 40px rgba(255,127,0,0.4)';
                e.target.parentElement.style.border = '3px solid rgba(255,215,0,0.8)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.filter = 'brightness(1.1) contrast(1.1) saturate(1.2)';
                e.target.parentElement.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3), 0 0 30px rgba(255,127,0,0.2)';
                e.target.parentElement.style.border = '3px solid rgba(255,215,0,0.6)';
              }}
            />
            <div style={{
              position: 'absolute',
              top: '0',
              left: '0',
              right: '0',
              bottom: '0',
              background: 'linear-gradient(45deg, transparent 30%, rgba(255,215,0,0.1) 50%, transparent 70%)',
              pointerEvents: 'none',
              borderRadius: '17px'
            }}></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default StartStory;
