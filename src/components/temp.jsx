import React, { useState } from 'react';
import bgImage from '../assets/designs/flamebg.gif';

const TechnoVistaEvents = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  
  const handleMouseEnter = (cardId) => {
    setHoveredCard(cardId);
  };
  
  const handleMouseLeave = () => {
    setHoveredCard(null);
  };
  
  return (
    <div 
      className="min-h-screen p-8" 
      style={{ 
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* <div className="mb-12">
        <h1 className="text-4xl font-bold text-left text-white">TechnoVista</h1>
        <h2 className="text-2xl font-semibold text-left text-white mt-1">Events</h2>
      </div>
       */}
       <div className="mb-12">
        <div 
          className="font-bold text-left text-white" 
          style={{ 
            fontFamily: "'Stencil Std', 'Stencil', monospace",
            letterSpacing: "1px",
            fontSize: "70px",
            color: "goldenrod"
          }}
        >
          TechnoVista
        </div>
        <div 
          className="font-semibold text-left text-white mt-1"
          style={{ 
            fontFamily: "'Stencil Std', 'Stencil', monospace",
            letterSpacing: "1px",
            fontSize: "32px",
            color: "whitesmoke"
          }}
        >
          Events
        </div>
      </div>
      <div className="flex justify-center gap-8 w-full px-16">
        {/* Card 1 */}
        <div 
          className={`w-1/4 p-8 rounded-lg border border-white bg-white bg-opacity-15 backdrop-blur-sm shadow-sm transition-all duration-300 ${hoveredCard === 1 ? 'transform scale-105 shadow-lg' : ''}`}
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="mb-6 text-center">
            <h3 className="text-2xl font-bold text-white">DAY 1</h3>
            <p className="text-lg text-white opacity-90 mt-2">April 25th 2025</p>
          </div>
          <div className="flex flex-col gap-6">
            <button 
              className="px-6 py-6 rounded-md bg-white bg-opacity-70 border border-black text-black hover:bg-opacity-90 transition-all duration-200 text-lg font-medium h-32"
              style={{ 
                backgroundImage: "url(ABFGHJKLERTFGYHUJIOKLFCGVHBNRTYU)",
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              Guest Lecture
            </button>
            <button 
              className="px-6 py-6 rounded-md bg-white bg-opacity-70 border border-black text-black hover:bg-opacity-90 transition-all duration-200 text-lg font-medium h-32"
              style={{ 
                backgroundImage: "url(ABFGHJKLERTFGYHUJIOKLFCGVHBNRTYU)",
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              ML challenge
            </button>
          </div>
        </div>
        
        {/* Card 2 */}
        <div 
          className={`w-1/4 p-8 rounded-lg border border-white bg-white bg-opacity-15 backdrop-blur-sm shadow-sm transition-all duration-300 ${hoveredCard === 2 ? 'transform scale-105 shadow-lg' : ''}`}
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="mb-6 text-center">
            <h3 className="text-2xl font-bold text-white">DAY 2</h3>
            <p className="text-lg text-white opacity-90 mt-2">April 26th 2025</p>
          </div>
          <div className="flex flex-col gap-6">
            <button 
              className="px-6 py-6 rounded-md bg-white bg-opacity-70 border border-black text-black hover:bg-opacity-90 transition-all duration-200 text-lg font-medium h-32"
              style={{ 
                backgroundImage: "url(https://th.bing.com/th/id/OIP.24vogiOrwTpZ7na76kUy3wHaDP?w=313&h=153&c=7&r=0&o=5&dpr=1.3&pid=1.7)",
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              Blogathon
            </button>
            <button 
              className="px-6 py-6 rounded-md bg-white bg-opacity-70 border border-black text-black hover:bg-opacity-90 transition-all duration-200 text-lg font-medium h-32"
              style={{ 
                backgroundImage: "url(https://codefest.raoinformationtechnology.com/wp-content/uploads/2022/04/codefest-1.png)",
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              Code Fest
            </button>
            <button 
              className="px-6 py-6 rounded-md bg-white bg-opacity-70 border border-black text-black hover:bg-opacity-90 transition-all duration-200 text-lg font-medium h-32"
              style={{ 
                backgroundImage: "url(https://th.bing.com/th/id/OIP.-WcPmmZvz1hLKPKDfkiTzAHaFb?w=235&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7)",
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              Tech Game
            </button>
          </div>
        </div>
        
        {/* Card 3 */}
        <div 
          className={`w-1/4 p-8 rounded-lg border border-white bg-white bg-opacity-15 backdrop-blur-sm shadow-sm transition-all duration-300 ${hoveredCard === 3 ? 'transform scale-105 shadow-lg' : ''}`}
          onMouseEnter={() => handleMouseEnter(3)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="mb-6 text-center">
            <h3 className="text-2xl font-bold text-white">DAY 3</h3>
            <p className="text-lg text-white opacity-90 mt-2">April 27th 2025</p>
          </div>
          <div className="flex flex-col gap-6">
            <button 
              className="px-6 py-6 rounded-md bg-white bg-opacity-70 border border-black text-black hover:bg-opacity-90 transition-all duration-200 text-lg font-medium h-32"
              style={{ 
                backgroundImage: "url(https://thumbs.dreamstime.com/z/workshop-concept-idea-education-creativity-creative-skill-improvement-art-lessons-isolated-vector-illustration-cartoon-132009609.jpg)",
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              Workshop
            </button>
            <button 
              className="px-6 py-6 rounded-md bg-white bg-opacity-70 border border-black text-black hover:bg-opacity-90 transition-all duration-200 text-lg font-medium h-32"
              style={{ 
                backgroundImage: "url(https://th.bing.com/th/id/OIP.OVTBqTkHFUzsxdK_VoJokwHaEK?w=313&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7)",
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              Hackathon
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnoVistaEvents;