"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    tsParticles: {
      load: (id: string, options: Record<string, unknown>) => Promise<void>;
    };
  }
}

export const Particles = () => {
  useEffect(() => {
    const initParticles = () => {
      if (typeof window !== "undefined" && window.tsParticles) {
        window.tsParticles.load("tsparticles", {
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: ["#2E6DFF", "#00FFFF"],
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.1,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: true,
              speed: 0.5,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 50,
            },
            opacity: {
              value: 0.2,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: {
                min: 1,
                max: 3,
              },
            },
          },
          detectRetina: true,
        });
      }
    };

    let checkInterval: NodeJS.Timeout | null = null;
    let timeoutId: NodeJS.Timeout | null = null;

    // Check if tsParticles is already loaded
    if (typeof window !== "undefined" && window.tsParticles) {
      initParticles();
    } else {
      // Wait for script to load
      checkInterval = setInterval(() => {
        if (typeof window !== "undefined" && window.tsParticles) {
          if (checkInterval) {
            clearInterval(checkInterval);
          }
          initParticles();
        }
      }, 100);

      // Cleanup interval after 10 seconds
      timeoutId = setTimeout(() => {
        if (checkInterval) {
          clearInterval(checkInterval);
        }
      }, 10000);
    }

    // Cleanup function
    return () => {
      if (checkInterval) {
        clearInterval(checkInterval);
      }
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  return null;
};
