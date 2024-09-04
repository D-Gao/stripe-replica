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
import { useEffect } from "react";
import "./styles.scss";

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
  useEffect(() => {}, []);

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
              </div>
            ))}
          </div>
          <ConnectorPath1 />
        </div>
      </div>
    </>
  );
};

export default App;
