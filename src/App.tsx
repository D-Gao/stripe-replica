import { useEffect } from "react";
import "./styles.scss";

import TaxSvg from "./assets/svg/tax.svg";
import AtlasSvg from "./assets/svg/atlas.svg";
import BillingSvg from "./assets/svg/billing.svg";
import CapitalSvg from "./assets/svg/capital.svg";
import CheckouSvgt from "./assets/svg/checkout.svg";
import ClimateSvg from "./assets/svg/climate.svg";
import ConnectSvg from "./assets/svg/connect.svg";
import ElementsSvg from "./assets/svg/elements.svg";
import IdentitySvg from "./assets/svg/identity.svg";
import InvoicingSvg from "./assets/svg/invoicing.svg";
import IssuingSvg from "./assets/svg/issuing.svg";
import PaymentSvg from "./assets/svg/payment.svg";
import RadarSvg from "./assets/svg/radar.svg";
import SigmaSvg from "./assets/svg/sigma.svg";
import TerminalSvg from "./assets/svg/terminal.svg";
import TreasureSvg from "./assets/svg/treasure.svg";

import ConnectorPath1 from "./assets/svg/connector/connector1.svg";
import ConnectorPath2 from "./assets/svg/connector/connector2.svg";
import ConnectorPath3 from "./assets/svg/connector/connector3.svg";
import ConnectorPath4 from "./assets/svg/connector/connector4.svg";
import ConnectorPath5 from "./assets/svg/connector/connector5.svg";
import ConnectorPath6 from "./assets/svg/connector/connector6.svg";
import ConnectorPath7 from "./assets/svg/connector/connector7.svg";
import ConnectorPath8 from "./assets/svg/connector/connector8.svg";

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

//custom-svg
const App = () => {
  useEffect(() => {
    const svgConnectors = document.querySelectorAll(".connectors svg");

    svgConnectors.forEach((svg) => {
      const id = (svg as SVGElement).getAttribute("data-js-id");

      const suffix = id?.split("-")[1];

      const path = (svg as SVGElement).children[1];
      console.log(path);

      const pathLength = (path as SVGPathElement).getTotalLength();
      document.documentElement.style.setProperty(
        `--starting-dashoffset-${suffix}`,
        pathLength + "px"
      );
    });
  }, []);

  return (
    <>
      <div className="w-vw h-vh relative"></div>
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="relative">
          <div className="stripe-grid min-w-[540px] aspect-square ">
            {Object.entries(map).map(([key, SvgComponent]) => (
              <div
                className="relative border rounded-md p-2 z-10  slot"
                style={{ gridArea: key }}
              >
                <div className="svg-bw custom-svg">{SvgComponent}</div>
                <div className="svg-colored"> {SvgComponent}</div>
                <span className="svg-cap">{key}</span>
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
        </div>
      </div>
    </>
  );
};

export default App;
