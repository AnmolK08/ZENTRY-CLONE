import React from "react";
import Button from "./Button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const Page5contact = () => {
  useGSAP(() => {
    gsap.set("#contact-1", {
      clipPath: "polygon(0 2%, 100% 0, 87% 82%, 10% 92%)",
    });

    gsap.set("#contact-2", {
      clipPath: "polygon(0% 0%, 100% 50%, 100% 100%, 0% 100%)",
    });

    gsap.set("#swordman", {
      clipPath: "polygon(87% 0, 100% 71%, 0 100%, 0 23%)",
    });

    gsap.from(".happy h1", {
      opacity: 0,
      y: 100,
      duration: 3,
      scrollTrigger: {
        trigger: ".happy",
        start: "top 60%",
        end: "top 30%",
        scrub: true,
      },
    });
  });
  return (
    <div className="h-[90vh] w-screen p-[3vw] bg-[#DFDFF2] text-white">
      <div className="happy w-full h-full bg-black relative rounded-2xl flex flex-col justify-center items-center gap-[1.5vw]">
        <p className="font-general text-[0.8vw] text-[#DFDFF2]">JOIN ZENTRY</p>
        <h1 className="special-font font-zentry text-[6vw] text-[#DFDFF2] text-center leading-[5vw] tracking-normal">
          let’s b<b>u</b>ild the <br />
          new era of g<b>a</b>ming <br />t<b>o</b>gether.
        </h1>

        <Button
          title="Contact us"
          containerClass="bg-[#DFDFF2] text-black px-5 py-1"
        />

        <img
          src="/img/contact-1.webp"
          id="contact-1"
          className="absolute top-[0] left-[10%] h-[10vw] w-[10vw]"
        />

        <img
          src="/img/contact-2.webp"
          id="contact-2"
          className="absolute bottom-[0] left-[20%] h-[10vw] w-[10vw]"
        />

        <img
          src="/img/swordman.webp"
          id="swordman"
          className="absolute top-[0] right-[5%] h-[25vw] w-[20vw]"
        />
      </div>
    </div>
  );
};

export default Page5contact;
