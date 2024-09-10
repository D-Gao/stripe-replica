import OutlinePhone from "./assets/svg/moduleB/outline/outlinephone.svg";
import PaymentSvg from "./assets/svg/moduleA/payment.svg";
import TerminalSvg from "./assets/svg/moduleA/terminal.svg";
import RadarSvg from "./assets/svg/moduleA/radar.svg";
import TaxSvg from "./assets/svg/moduleA/tax.svg";
import Connector1 from "./assets/svg/moduleB/connector/connector1.svg";
import Connector2 from "./assets/svg/moduleB/connector/connector2.svg";
import Connector3 from "./assets/svg/moduleB/connector/connector3.svg";
import Connector4 from "./assets/svg/moduleB/connector/connector4.svg";

import PhoneFrame from "./assets/svg/moduleB/phone/phone-frame.svg";
import PaySec1 from "./assets/svg/moduleB/phone/pay-sec1.svg";
import PaySec2 from "./assets/svg/moduleB/phone/pay-sec2.svg";
import PaySec3 from "./assets/svg/moduleB/phone/pay-sec3.svg";
import PaySec4 from "./assets/svg/moduleB/phone/pay-sec4.svg";

import { useEffect, useMemo, useRef } from "react";
import gsap from "gsap";

type Props = { show: boolean };

const ModuleB = ({ show }: Props) => {
  const tlArray = useMemo(() => {
    return Array.from({ length: 4 }, () => gsap.timeline());
  }, []);

  const tlshow = useRef(gsap.timeline());
  const tlhide = useRef(gsap.timeline());

  const masterTimeline = useRef(gsap.timeline());

  function restartCssAnimation() {
    const animatedElement = document.querySelector(".scroll-b-o");

    if (!animatedElement) return;
    // Remove the class to stop the animation
    animatedElement.classList.remove("scroll-b-o");

    // Trigger reflow to force the removal to take effect
    void (animatedElement as HTMLElement).offsetWidth;

    // Re-add the class to restart the animation
    animatedElement.classList.add("scroll-b-o");
  }

  function restartCssAnimationV() {
    const animatedElement2 = document.querySelectorAll(".scroll-b-v");

    if (animatedElement2.length == 0) return;
    animatedElement2.forEach((animatedElement) => {
      // Remove the class to stop the animation
      animatedElement.classList.remove("scroll-b-v");

      // Trigger reflow to force the removal to take effect
      void (animatedElement as HTMLElement).offsetWidth;

      // Re-add the class to restart the animation
      animatedElement.classList.add("scroll-b-v");
    });
  }

  function playAnimation() {
    masterTimeline.current.clear();
    // Customize the start times of each timeline
    masterTimeline.current
      .add(tlArray[0].restart(), 0) // Start first animation immediately
      .add(tlArray[1].restart(), ">") // Start the second animation immediately
      .add(tlArray[2].restart(), ">") // Start the third animation at the time as the second finish
      .add(tlArray[3].restart(), ">"); // Start the fourth animation at the same time as the third
    masterTimeline.current.repeat(-1);
    restartCssAnimation();
    restartCssAnimationV();
    masterTimeline.current.restart();
  }

  useEffect(() => {
    const svgConnectors = document.querySelectorAll(".connectors-b svg");

    const connectorsLength: number[] = [];
    const connectorsId: string[] = [];

    const connectFromTo = [
      { from: "b-1" },
      { from: "b-2" },
      { from: "b-3" },
      { from: "b-4" },
    ];

    svgConnectors.forEach((svg) => {
      const id = (svg as SVGElement).getAttribute("data-js-id");
      const path = (svg as SVGElement).children[1];
      const pathLength = (path as SVGPathElement).getTotalLength();
      connectorsId.push(id!);
      connectorsLength.push(pathLength);
    });

    tlArray.forEach((tl, i) => {
      tl.to(`.connectors-b [data-js-id="${connectorsId[i]}"] path`, {
        keyframes: [
          { strokeDashoffset: connectorsLength[i] * 3 + "px", duration: 0 },
          { strokeDashoffset: connectorsLength[i] * 2 + "px", duration: 0.5 },
          { strokeDashoffset: connectorsLength[i] * 2 + "px", duration: 2 },
          { strokeDashoffset: connectorsLength[i] + "px", duration: 0.5 },
        ],
        ease: "linear",
      })
        .to(
          `.${connectFromTo[i].from} .slot-pure`,
          {
            scale: 0.8,
            backgroundColor: "white",
            duration: 0.2,
            yoyo: true, // Automatically reverse
            repeatDelay: 2,
            repeat: 1, // Repeat the forward and reverse cycle once
            /* onComplete: function () {
            gsap.set(`.${connectFromTo[i].from}.slot`, {
              clearProps: "transform",
            }); // Clears inline styles after animation
          }, */
          },
          "<"
        )
        .to(
          `.${connectFromTo[i].from} .svg-colored`,
          {
            scale: 0.8,
            opacity: 1,
            duration: 0.2,
            repeatDelay: 2,
            yoyo: true, // Automatically reverse
            repeat: 1, // Repeat the forward and reverse cycle once
          },
          "<"
        )
        .to(
          `.${connectFromTo[i].from} .svg-bw`,
          {
            scale: 0.8,
            repeatDelay: 2,
            opacity: 0,
            duration: 0.2,
            yoyo: true, // Automatically reverse
            repeat: 1, // Repeat the forward and reverse cycle once
          },
          "<"
        )
        .pause();
    });

    return () => {
      tlArray.forEach((tl) => {
        tl.clear();
      });
    };
  }, [tlArray]);

  useEffect(() => {
    if (show) {
      tlhide.current.pause();
      const outlineSvg = document.querySelector("#phone-outline") as SVGElement;
      const children = outlineSvg.children;
      const childrenLength = outlineSvg.children.length;
      tlshow.current = gsap.timeline();

      tlshow.current.to(`#phone-container`, {
        opacity: 1,
        duration: 0.3,
        delay: 0,
        scale: 1,
      });

      playAnimation();
      for (let i = 1; i < childrenLength; i++) {
        const pathLength = (children[i] as SVGPathElement).getTotalLength();
        (
          children[i] as SVGPathElement
        ).style.strokeDashoffset = `${pathLength}px`;
        tlshow.current.to(
          children[i],
          {
            keyframes: [
              { strokeDashoffset: pathLength + "px", duration: 0 },
              { strokeDashoffset: 0 + "px", duration: 1 },
            ],
            ease: "linear",
          },
          0.55
        );
      }

      tlshow.current.fromTo(
        `#phone`,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1,
        },
        2
      );
      tlshow.current.play();
    } else {
      tlshow.current.pause();
      tlhide.current = gsap.timeline();
      tlhide.current.to(`#phone-container`, {
        opacity: 0,
        duration: 0.3,
        delay: 0,
        scale: 1.2,
      });
    }
    return () => {};
  }, [show]);

  return (
    <div
      className={`relative flex justify-center ${
        show ? "opacity-100" : "opacity-0"
      } text-rose-300 transition-all duration-1000 absolute  top-[0%] left-[50%] translate-x-[-50%]`}
    >
      <div
        className="w-[55%] flex justify-center relative no-transition"
        id="phone-container"
      >
        <OutlinePhone />
        <div className="absolute inset-0" id="phone">
          <PhoneFrame />

          <div className="absolute inset-0 flex flex-col items-center p-8">
            <picture className=" overflow-hidden rounded-md w-[40%] flex justify-center">
              <source
                srcSet="
            https://images.stripeassets.com/fzn2n1nzq965/6iLtU8qBUtE42tshpmZxY2/ac5b7b7a181524237b942e43620fceef/chair.jpg?q=80&amp;fm=webp&amp;w=264 2x,
            https://images.stripeassets.com/fzn2n1nzq965/6iLtU8qBUtE42tshpmZxY2/ac5b7b7a181524237b942e43620fceef/chair.jpg?q=80&amp;fm=webp&amp;w=132
          "
                type="image/webp"
              />

              <img
                className="Picture__image "
                src="https://images.stripeassets.com/fzn2n1nzq965/6iLtU8qBUtE42tshpmZxY2/ac5b7b7a181524237b942e43620fceef/chair.jpg?q=80&amp;w=264&amp;fm=jpg"
                srcSet="
          https://images.stripeassets.com/fzn2n1nzq965/6iLtU8qBUtE42tshpmZxY2/ac5b7b7a181524237b942e43620fceef/chair.jpg?q=80&amp;w=264&amp;fm=jpg 2x,
          https://images.stripeassets.com/fzn2n1nzq965/6iLtU8qBUtE42tshpmZxY2/ac5b7b7a181524237b942e43620fceef/chair.jpg?q=80&amp;w=132&amp;fm=jpg
        "
                alt=""
                width="88"
                height="88"
                loading="lazy"
              />
            </picture>
            <div className="text-title font-bold text-xs mt-2">
              Wood Chair 001
            </div>
            <div
              className=" overflow-hidden  no-transition h-[32px]"
              style={
                {
                  "--var-offset": "36px",
                } as React.CSSProperties
              }
            >
              <div className="flex flex-col text-black gap-3 scroll-b-v">
                <div>US$149</div>
                <div>€135.00</div>
                <div>¥199.00</div>
                <div>€135.00</div>
                <div>US$149</div>
              </div>
            </div>

            <div className="absolute bottom-[5%] overflow-hidden  no-transition h-[32px]">
              <div
                className=" items-center flex flex-col text-white gap-0 text-s scroll-b-v"
                style={
                  {
                    "--var-offset": "20%",
                  } as React.CSSProperties
                }
              >
                <div>Pay US$149</div>
                <div>€135.00 zahlen</div>
                <div>支付 ¥199.00</div>
                <div>Betaal €135.00</div>
                <div>Pay US$149</div>
              </div>
            </div>
          </div>

          <div className=" overflow-hidden  no-transition absolute top-0 bottom-0">
            <div className="h-full flex scroll-b-o  no-transition">
              <div className="flex-shrink-0 w-full">
                <PaySec1 />
              </div>
              <div className="flex-shrink-0 w-full">
                <PaySec2 />
              </div>
              <div className="flex-shrink-0 w-full">
                <PaySec3 />
              </div>
              <div className="flex-shrink-0 w-full">
                <PaySec4 />
              </div>
              <div className="flex-shrink-0 w-full">
                <PaySec1 />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={"absolute top-[28%] left-5 b-1"}>
        <IconContainer>
          <PaymentSvg />
        </IconContainer>
      </div>
      <div className={"absolute bottom-[31%] left-5 b-2"}>
        <IconContainer>
          <TerminalSvg />
        </IconContainer>
      </div>
      <div className={"absolute top-[35%] right-0 b-3"}>
        <IconContainer>
          <RadarSvg />
        </IconContainer>
      </div>
      <div className={"absolute bottom-[14%] right-0 b-4"}>
        <IconContainer>
          <TaxSvg />
        </IconContainer>
      </div>
      <div className="connectors-b">
        <Connector1 />
        <Connector2 />
        <Connector3 />
        <Connector4 />
      </div>
    </div>
  );
};

export default ModuleB;

export const IconContainer = ({ children }: { children: JSX.Element }) => {
  return (
    <div className="slot-pure w-full h-full relative p-2 border rounded-md z-10">
      <div className="svg-bw custom-svg " style={{ position: "relative" }}>
        {children}
      </div>
      <div className="svg-colored"> {children}</div>
    </div>
  );
};
