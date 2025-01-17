import React from "react";
import Cards from "./Cards";
import { TiLocationArrow } from "react-icons/ti";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

const Page3 = () => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    const cards = document.querySelectorAll(".cards");
    cards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          scale: 0.95,
          duration: 0.3,
        });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          scale: 1,
          duration: 0.3,
        });
      });

      gsap.from(card, {
        opacity: 0,
        y: 100,
        duration: 1,
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
        },
      });
    });
  });

  return (
    <div className="page-4 min-h-screen w-screen bg-black p-20">
      <div className="text-2xl text-white h-[20%] mt-[2vw]">
        <h5>Dive into the 'Game of Games' Universe</h5>
        <p className="text-sm text-gray-500">
          Immerse yourself in a rich and ever-expanding <br /> ecosystem where a
          vibrant array of products converge <br />
          into an interconnected universe.
        </p>
      </div>

      <div className="w-full h-[250vh] px-[5vw] grid grid-rows-5 grid-cols-2 gap-7 mt-[6vw]">
        <Cards
          className="cards"
          containerClass="relative row-start-1 row-end-3 col-start-1 col-end-3"
          title="RANDIE<b>N</b>T"
          description="A cross-platform metagame app,turning your activities across Web2 and Web3 games into a rewarding adventure."
          video="/videos/feature-1.mp4"
        />

        <Cards
          className="cards"
          containerClass="relative row-start-3 row-end-5 col-start-1 col-end-2 w-full h-full"
          title="Zig <b>m</b> a"
          description="An anime and gaming-inspired NFT collection - the IP primed for expansion"
          video="/videos/feature-2.mp4"
        />

        <Cards
          className="cards"
          containerClass="relative row-start-3 row-end-4 col-start-2 col-end-3 w-full h-full"
          title="N<b>E</b>XUS"
          description="A gamified social hub, adding a new dimension of play to your identity, Web3 engagement and social interaction"
          video="/videos/feature-3.mp4"
        />

        <Cards
          className="cards"
          containerClass="relative row-start-4 row-end-5 col-start-2 col-end-3 w-full h-full"
          title="AZ <b>U</b> L"
          description="A cross-world AI Agent - elevating your gameplay to be more fun and productive. "
          video="/videos/feature-4.mp4"
        />

        <div className="cards bg-[#5724FF] relative special-font font-zentry text-[4vw] text-black row-start-5 row-end-6 col-start-1 col-end-2 w-full h-full p-6 rounded-xl">
          <div className="flex flex-col leading-[3.3vw]">
            <span>
              M<b>O</b>RE
            </span>
            <span>
              co<b>m</b>ing
            </span>
            <span>
              S<b>O</b>ON
            </span>
          </div>
          <br />

          <TiLocationArrow className="absolute bottom-4 right-4 text-[5vw]" />
        </div>

        <Cards
          className="cards"
          containerClass="relative bg-row-start-5 row-end-6 col-start-2 col-end-3 w-full h-full"
          title=""
          description=""
          video="/videos/feature-5.mp4"
        />
      </div>
    </div>
  );
};

export default Page3;
