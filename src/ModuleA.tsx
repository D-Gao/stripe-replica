import { useEffect, useMemo } from "react";
import TaxSvg from "./assets/svg/moduleA/tax.svg";
import AtlasSvg from "./assets/svg/moduleA/atlas.svg";
import BillingSvg from "./assets/svg/moduleA/billing.svg";
import CapitalSvg from "./assets/svg/moduleA/capital.svg";
import CheckouSvgt from "./assets/svg/moduleA/checkout.svg";
import ClimateSvg from "./assets/svg/moduleA/climate.svg";
import ConnectSvg from "./assets/svg/moduleA/connect.svg";
import ElementsSvg from "./assets/svg/moduleA/elements.svg";
import IdentitySvg from "./assets/svg/moduleA/identity.svg";
import InvoicingSvg from "./assets/svg/moduleA/invoicing.svg";
import IssuingSvg from "./assets/svg/moduleA/issuing.svg";
import PaymentSvg from "./assets/svg/moduleA/payment.svg";
import RadarSvg from "./assets/svg/moduleA/radar.svg";
import SigmaSvg from "./assets/svg/moduleA/sigma.svg";
import TerminalSvg from "./assets/svg/moduleA/terminal.svg";
import TreasureSvg from "./assets/svg/moduleA/treasure.svg";

import ConnectorPath1 from "./assets/svg/moduleA/connector/connector1.svg";
import ConnectorPath2 from "./assets/svg/moduleA/connector/connector2.svg";
import ConnectorPath3 from "./assets/svg/moduleA/connector/connector3.svg";
import ConnectorPath4 from "./assets/svg/moduleA/connector/connector4.svg";
import ConnectorPath5 from "./assets/svg/moduleA/connector/connector5.svg";
import ConnectorPath6 from "./assets/svg/moduleA/connector/connector6.svg";
import ConnectorPath7 from "./assets/svg/moduleA/connector/connector7.svg";
import ConnectorPath8 from "./assets/svg/moduleA/connector/connector8.svg";

import gsap from "gsap";

//#C4CCD8
const map: Record<string, JSX.Element> = {
  Tax: <TaxSvg></TaxSvg>,
  Atlas: <AtlasSvg></AtlasSvg>,
  Billing: <BillingSvg></BillingSvg>,
  Capital: <CapitalSvg></CapitalSvg>,
  Checkout: <CheckouSvgt></CheckouSvgt>,
  Climate: <ClimateSvg></ClimateSvg>,
  Connect: <ConnectSvg></ConnectSvg>,
  Elements: <ElementsSvg></ElementsSvg>,
  Identity: <IdentitySvg></IdentitySvg>,
  Invoicing: <InvoicingSvg></InvoicingSvg>,
  Issuing: <IssuingSvg></IssuingSvg>,
  Payments: <PaymentSvg></PaymentSvg>,
  Radar: <RadarSvg></RadarSvg>,
  Sigma: <SigmaSvg></SigmaSvg>,
  Terminal: <TerminalSvg></TerminalSvg>,
  Treasury: <TreasureSvg></TreasureSvg>,
};

const ModuleA = ({ show = false }: { show: boolean }) => {
  const tlArray = useMemo(() => {
    return Array.from({ length: 8 }, () => gsap.timeline());
  }, []);

  useEffect(() => {
    const svgConnectors = document.querySelectorAll(".connectors svg");
    const connectorsLength: number[] = [];
    const connectorsId: string[] = [];
    const connectFromTo = [
      { from: "Payments", to: "Connect" },
      { from: "Payments", to: "Terminal" },
      { from: "Issuing", to: "Capital" },
      { from: "Issuing", to: "Treasury" },
      { from: "Connect", to: "Terminal" },
      { from: "Payments", to: "Tax" },
      { from: "Payments", to: "Radar" },
      { from: "Billing", to: "Invoicing" },
    ];
    svgConnectors.forEach((svg) => {
      const id = (svg as SVGElement).getAttribute("data-js-id");
      const path = (svg as SVGElement).children[1];
      const pathLength = (path as SVGPathElement).getTotalLength();
      connectorsId.push(id!);
      connectorsLength.push(pathLength);
    });
    tlArray.forEach((tl, i) => {
      tl.to(`.connectors [data-js-id="${connectorsId[i]}"] path`, {
        keyframes: [
          { strokeDashoffset: 0 + "px", duration: 0.5 },
          { strokeDashoffset: 0 + "px", duration: 2 },
          { strokeDashoffset: -connectorsLength[i] + "px", duration: 0.5 },
        ],
        ease: "linear",
      })
        .to(
          `.${connectFromTo[i].from}.slot`,
          {
            scale: 1,
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
            scale: 0.7,
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
            scale: 0.7,
            opacity: 0,
            duration: 0.2,
            repeatDelay: 2,
            yoyo: true, // Automatically reverse
            repeat: 1, // Repeat the forward and reverse cycle once
          },
          "<"
        )
        .to(
          `.${connectFromTo[i].from} .svg-cap`,
          {
            opacity: 1,
            y: "-80%",
            duration: 0.2,
            repeatDelay: 2,
            yoyo: true, // Automatically reverse
            repeat: 1, // Repeat the forward and reverse cycle once
          },
          "<"
        )
        .to(
          `.${connectFromTo[i].to}.slot`,
          {
            scale: 1,
            backgroundColor: "white",
            repeatDelay: 2,
            duration: 0.2,
            yoyo: true, // Automatically reverse
            repeat: 1, // Repeat the forward and reverse cycle once
          },
          "0.5"
        )
        .to(
          `.${connectFromTo[i].to} .svg-colored`,
          {
            scale: 0.7,
            opacity: 1,
            duration: 0.2,
            repeatDelay: 2,
            yoyo: true, // Automatically reverse
            repeat: 1, // Repeat the forward and reverse cycle once
          },
          "<"
        )
        .to(
          `.${connectFromTo[i].to} .svg-bw`,
          {
            scale: 0.7,
            repeatDelay: 2,
            opacity: 0,
            duration: 0.2,
            yoyo: true, // Automatically reverse
            repeat: 1, // Repeat the forward and reverse cycle once
          },
          "<"
        )
        .to(
          `.${connectFromTo[i].to} .svg-cap`,
          {
            opacity: 1,
            y: "-80%",
            repeatDelay: 2,
            duration: 0.2,
            yoyo: true, // Automatically reverse
            repeat: 1, // Repeat the forward and reverse cycle once
          },
          "<"
        )
        .pause();
    });

    function playAnimation() {
      const masterTimeline = gsap.timeline();
      // Customize the start times of each timeline
      masterTimeline
        .add(tlArray[0].restart(), 0) // Start first animation immediately
        .add(tlArray[1].restart(), 0) // Start the second animation immediately
        .add(tlArray[2].restart(), ">") // Start the third animation at the time as the second finish
        .add(tlArray[3].restart(), "<") // Start the fourth animation at the same time as the third
        .add(tlArray[4].restart(), ">")
        .add(tlArray[5].restart(), ">")
        .add(tlArray[6].restart(), "<")
        .add(tlArray[7].restart(), ">");
      masterTimeline.repeat(-1);
    }

    playAnimation();

    return () => {
      tlArray.forEach((tl) => {
        tl.clear();
      });
    };
  }, [tlArray]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (show) {
        gsap.from(`.slot-wrapper`, {
          scale: 0,
          opacity: 0,
          duration: 1,

          stagger: {
            each: Math.random() / 10,
          },
        });
        gsap.from(`.connectors .HomepageFrontdoorConnection`, {
          opacity: 0,
          duration: 2,
        });
      } else {
        gsap.to(`.slot-wrapper`, {
          scale: 0,
          opacity: 0,
          duration: 0.5,
          stagger: {
            each: Math.random() / 30,
          },
        });

        gsap.to(`.connectors .HomepageFrontdoorConnection`, {
          opacity: 0,
          duration: 0.3,
        });
      }
    });
    return () => {
      ctx.revert();
    };
  }, [show]);

  return (
    <>
      <div className="stripe-grid min-w-[540px] aspect-square ">
        {Object.entries(map).map(([key, SvgComponent]) => (
          <div
            key={key}
            className="slot-wrapper"
            style={{
              gridArea: key,
              transition: "none",
              zIndex: 1,
            }}
          >
            <div className={"relative border rounded-md p-2 z-10  slot " + key}>
              <div className="svg-bw custom-svg">{SvgComponent}</div>
              <div className="svg-colored"> {SvgComponent}</div>
              <span className="svg-cap">{key}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="connectors">
        <ConnectorPath1 />
        <ConnectorPath2 />
        <ConnectorPath3 />
        <ConnectorPath4 />
        <ConnectorPath5 />
        <ConnectorPath6 />
        <ConnectorPath7 />
        <ConnectorPath8 />
      </div>
    </>
  );
};

export default ModuleA;
