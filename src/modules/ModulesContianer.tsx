import { useEffect, useState } from "react";
import ModuleA from "../ModuleA";
import useIntersectionObserver from "../hooks/useObserverIntersection";
import ModuleB from "../ModuleB";

const mapper: Record<string, number> = {
  "m-0": 0,
  "m-1": 1,
  "m-2": 2,
};

const ModulesContianer = () => {
  const [inViewport, intersectedEl] = useIntersectionObserver();
  const [showA, setShowA] = useState(false);
  const [showB, setShowB] = useState(false);
  const [showC, setShowC] = useState(false);

  useEffect(() => {
    // the logic to determine which module to show up
    if (inViewport === 0) return;

    if (inViewport === 1) {
      setShowA(true);
      setShowB(false);
      setShowC(false);
    } else {
      setShowA(false);
      setShowB(false);
      setShowC(true);
    }

    if (intersectedEl === "") return;
    const key = intersectedEl as string;
    const index = mapper[key];

    setShowA(index === 0);
    setShowB(index === 1);
    setShowC(index === 2);
  }, [inViewport, intersectedEl]);

  return (
    <div className="relative h-full">
      <div
        className="sticky-el sticky aspect-square"
        style={{
          top: `calc(50% - 270px)`,
        }}
      >
        <div className="relative w-full aspect-square">
          <div
            className="absolute inset-0"
            style={{ zIndex: showA ? "10" : "-1" }}
          >
            <ModuleA show={showA}></ModuleA>
          </div>
          <div
            className="absolute inset-0"
            style={{ zIndex: showB ? "10" : "-1" }}
          >
            {" "}
            <ModuleB show={showB}></ModuleB>{" "}
          </div>

          <div
            className="absolute inset-0"
            style={{ zIndex: showC ? "10" : "-1" }}
          >
            {" "}
            <ModuleC show={showC}></ModuleC>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModulesContianer;

const ModuleC = ({ show }: { show: boolean }) => {
  return (
    <div
      className={`${
        show ? "opacity-100" : "opacity-0"
      } text-rose-300 transition-all duration-1000 absolute top-[50%] `}
    >
      moduleCCCCCCCCCCCCCCCCCCCCCCCC
    </div>
  );
};
