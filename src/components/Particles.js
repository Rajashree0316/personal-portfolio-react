import { useCallback, useMemo } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import Theme from "./theme";

const ParticlesComponent = ({ darkModeEnabled, id }) => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const options = useMemo(() => {
    const themeColors = darkModeEnabled ? Theme.darkMode : Theme.lightMode;

    return {
      background: {
        color: {
          value: themeColors.backgroundPrimary || "#000000",
        },
        image: themeColors.backgroundImage || "none",
      },
      fullScreen: {
        enable: true,
        zIndex: -1,
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
          resize: true,
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 180,
            duration: 0.5,
          },
        },
      },
      particles: {
        color: {
          value: themeColors.accentColor || "#ffffff",
        },
        links: {
          color: themeColors.accentColor || "#ffffff",
          distance: 150,
          enable: true,
          opacity: darkModeEnabled ? 0.3 : 0.5,
          width: 1,
        },
        move: {
          enable: true,
          speed: { min: 1, max: 3 },
          direction: "none",
          outModes: {
            default: "out",
          },
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 80,
        },
        opacity: {
          value: darkModeEnabled ? 0.25 : 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    };
  }, [darkModeEnabled]);

  return <Particles id={id || "tsparticles"} init={particlesInit} options={options} />;
};

export default ParticlesComponent;
