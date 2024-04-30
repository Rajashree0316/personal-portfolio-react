import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback, useMemo } from "react";

const ParticlesComponent = (props) => {
  const { darkModeEnabled } = props;

  const options = useMemo(() => {

    if (darkModeEnabled) {
      return {
        background: {
          color: {
            value: "rgb(33,33,33)",
          },
          image: "linear-gradient(90deg, rgba(50,50,50,1) 0%, rgba(0,0,0,1) 100%)",
        },
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        fpsLimit: 100,
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
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,

            },
          },
        },

        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          move: {
            enable: true,
            speed: { min: 1, max: 5 },
          },
          number: {
            density: {
              enable: true,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "square",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,

      };
    } else {
      return {
        background: {
          color: {
            value: "rgb(154,79,112)",
          },
          image: "linear-gradient(90deg, rgba(154,79,112,1) 0%, rgba(148,187,233,1) 100%)",
        },
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        fpsLimit: 100,
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
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,

            },
          },
        },


        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          move: {
            enable: true,
            speed: { min: 1, max: 5 },
          },
          number: {
            density: {
              enable: true,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "square",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,

      };
    }
  }, [darkModeEnabled]);
  const particlesInit = useCallback((engine) => {
    loadSlim(engine);
  }, []);

  return <Particles id={props.id} init={particlesInit} options={options} />;
};

export default ParticlesComponent;