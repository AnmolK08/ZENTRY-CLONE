import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

const Page2 = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from("#para h1", {
      y: 100,
      opacity: 0,
      duration: 5,
      stagger: 0.1,
      scrollTrigger: {
        trigger: "#para",
        start: "top 90%",
        end: "bottom center",
        scrub: true,
      },
    });

    gsap.to("#simg", {
      width: "100vw",
      height: "100vh",
      duration: 20,
      scrollTrigger: {
        trigger: "#simg",
        start: "top 50%",
        end: "bottom center",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="relative flex flex-col justify-between items-center gap-10 w-screen min-h-screen px-[10vw] mb-[5vw] mt-[6vw]">
      <div className="flex justify-center items-center flex-col mt-8">
        <p className="font-general text-[4vw] uppercase md:text-[10px] mb-8">
          Welcome to Zentry
        </p>

        <div
          id="para"
          className="special-font font-zentry text-[7vw] tracking-tight text-center leading-none"
        >
          <h1>
            Disc<b>o</b>ver the world's
          </h1>
          <h1>
            largest shared <b>a</b>dventure
          </h1>
        </div>
      </div>

      <div className="w-[30vw] h-[70vh] rounded-[1vw]" id="simg">
        <img
          src="/img/about.webp"
          alt=""
          className="object-cover h-full w-full rounded-[1vw]"
        />
      </div>

      <div className="w-full flex flex-col justify-center items-center font-circular-web">
        <p>The Game of Games begins—your life, now an epic MMORPG</p>
        <p className="text-gray-500 text-center">
          Zentry unites every player from countless games and platforms,
          <br /> both digital and physical, into a unified Play Economy
        </p>
      </div>
    </div>
  );
};

export default Page2;
