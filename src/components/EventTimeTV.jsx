import React from 'react';

const TechnoVistaEvents = () => {
  const days = [
    {
      title: "Day 1",
      date: "April 25th 2025",
      events: [
        {
          name: "",
          description: "Learn from industry experts about cutting-edge technologies",
          backgroundLink: "https://www.trentu.ca/education/sites/trentu.ca.education/files/images/banners/guestlecturerbanner.jpeg",
          navigationLink: "123456789012345678901234567890-guestlecture"
        },
        {
          name: "ML challenge",
          description: "Solve real-world problems using machine learning algorithms",
          backgroundLink: "https://files.oaiusercontent.com/file-Sbu9ud5nvGMsFSwuTCSHhc?se=2025-04-05T08%3A51%3A47Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dd62f85bd-dbf2-4faf-bfcc-f6856a73d255.webp&sig=UQruiUoY3cMIcyY9RYPOAzdOsmZscS7x64Oq4v8q%2Bz4%3D",
          navigationLink: "123456789012345678901234567890-mlchallenge"
        }
      ]
    },
    {
      title: "Day 2",
      date: "April 26th 2025",
      events: [
        {
          name: "",
          description: "Showcase your technical writing skills in this competition",
          backgroundLink: "https://assets.grok.com/users/d94efb31-6285-4299-894e-f8bf5bee4d30/generated/pXy97Gsp4I8qrSpX/image.jpg",
          navigationLink: "123456789012345678901234567890-blogathon"
        },
        {
          name: "",
          description: "Race against time to solve complex coding challenges",
          backgroundLink: "https://mir-s3-cdn-cf.behance.net/projects/404/3cb3e9179121687.Y3JvcCwxMzgwLDEwODAsMjcwLDA.png",
          navigationLink: "123456789012345678901234567890-codefest"
        },
        {
          name: "Debug or Die",
          description: "Have fun with technology-themed interactive games",
          backgroundLink: "https://assets.grok.com/users/d94efb31-6285-4299-894e-f8bf5bee4d30/generated/7kL3jcFogy9EWYrm/image.jpg",
          navigationLink: "123456789012345678901234567890-techgame"
        }
      ]
    },
    {
      title: "Day 3",
      date: "April 27th 2025",
      events: [
        {
          name: "",
          description: "Hands-on session with the latest tools and frameworks",
          backgroundLink: "https://thumbs.dreamstime.com/z/workshop-concept-idea-education-creativity-creative-skill-improvement-art-lessons-isolated-vector-illustration-cartoon-132009609.jpg",
          navigationLink: "123456789012345678901234567890-workshop"
        },
        {
          name: "",
          description: "24-hour coding marathon to build innovative solutions",
          backgroundLink: "https://th.bing.com/th/id/OIP.OVTBqTkHFUzsxdK_VoJokwHaEK?w=313&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
          navigationLink: "123456789012345678901234567890-hackathon"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8" style={{
      backgroundImage: `url('zsdfvbnm,wertyuiosdfghjk345rtyui')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <div className="mb-12">
        <h1 className="text-5xl font-bold tracking-wide text-yellow-600 mb-0" 
            style={{ fontFamily: "'Stencil Std', monospace" }}>
          TechnoVista
        </h1>
        <h2 className="text-2xl font-semibold tracking-wide text-gray-100 mt-2" 
            style={{ fontFamily: "'Stencil Std', monospace" }}>
          Events
        </h2>
      </div>
      
      <div className="flex flex-wrap justify-center gap-8">
        {days.map((day, index) => (
          <DayCard key={index} day={day} />
        ))}
      </div>
    </div>
  );
};

const DayCard = ({ day }) => {
  return (
    <div className="relative w-72 bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-md transition-transform duration-300 hover:-translate-y-2 group"
         style={{
           clipPath: 'polygon(10% 0%, 90% 0%, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0% 90%, 0% 10%)',
           boxShadow: '0 0 0 2px rgba(255, 255, 255, 0.2), 0 0 0 4px rgba(255, 255, 255, 0.1), 0 0 20px rgba(255, 215, 0, 0.3), 0 0 40px rgba(255, 215, 0, 0.2)',
           border: '1px solid rgba(255, 255, 255, 0.3)',
           backgroundColor: 'rgba(255, 255, 255, 0.05)'
         }}>
      
      {/* Frosted frame effect */}
      <div className="absolute inset-0 rounded-lg opacity-50"
           style={{
             background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 50%, rgba(0,0,0,0.05) 100%)',
             clipPath: 'polygon(10% 0%, 90% 0%, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0% 90%, 0% 10%)',
             zIndex: -1
           }}></div>
      
      {/* Shadow outline */}
      <div className="absolute -inset-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
           style={{
             background: 'linear-gradient(45deg, rgba(255,215,0,0.2), rgba(255,255,255,0.3), rgba(255,215,0,0.2))',
             filter: 'blur(8px)',
             clipPath: 'polygon(10% 0%, 90% 0%, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0% 90%, 0% 10%)',
             zIndex: -2
           }}></div>
           
      <h3 className="text-4xl font-bold text-center" style={{ fontFamily: "'Stencil Std', monospace" }}>{day.title}</h3>
      <p className="text-3xl opacity-90 text-center mt-2 mb-6" style={{ fontFamily: "'Stencil Std', monospace" }}>{day.date}</p>
      
      <div className="flex flex-col gap-4">
        {day.events.map((event, index) => (
          <div key={index} className="mb-4">
            <a href={event.navigationLink} className="block">
              <div className="h-24 bg-white bg-opacity-70 border border-black rounded-xl flex items-center justify-center text-black text-lg font-medium text-center p-4 bg-cover bg-center transition-transform duration-200 hover:scale-105 relative"
                  style={{ 
                    backgroundImage: `url('${event.backgroundLink}')`
                  }}>
                {event.name === "Guest Lecture" ? (
                  <span className="absolute top-1/3 transform -translate-y-1/2 text-xl font-bold" 
                        style={{ 
                          fontFamily: "'Luxurious Roman', serif",
                          textShadow: "0 0 2px white, 0 0 2px white, 0 0 2px white, 0 0 2px white",
                          WebkitTextStroke: "1px white",
                          color: "black"
                        }}>
                    {event.name}
                  </span>
                ) : event.name === "Debug or Die" ? (
                  <span className="text-xl font-bold" 
                        style={{ 
                          fontFamily: "'Luxurious Roman', serif",
                          textShadow: "0 0 2px white, 0 0 2px white, 0 0 2px white, 0 0 2px white",
                          WebkitTextStroke: "1px white",
                          color: "black"
                        }}>
                    {event.name}
                  </span>
                ) : (
                  <span className="text-lg font-medium">{event.name}</span>
                )}
              </div>
            </a>
            <p className="text-sm text-center mt-2 opacity-80">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnoVistaEvents;