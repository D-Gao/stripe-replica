import { useEffect, useState } from "react";
import ModuleA from "../ModuleA";
import useIntersectionObserver from "../hooks/useObserverIntersection";

const mapper: Record<string, number> = {
  "m-0": 0,
  "m-1": 1,
  "m-2": 2,
};

const ModulesContianer = () => {
  const [inViewport, intersectedEl] = useIntersectionObserver();
  const [showA, setShowA] = useState(false);
  const [showB, setShowB] = useState(false);
  const [showc, setShowC] = useState(false);

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
    <div className="relative">
      <div
        className="sticky-el sticky"
        style={{
          top: `calc(50% - 270px)`,
        }}
      >
        <div className={`transition-all duration-1000`}>
          <ModuleA show={showA}></ModuleA>
        </div>
        <ModuleB show={showB}></ModuleB>
        <ModuleC show={showc}></ModuleC>
      </div>
    </div>
  );
};

export default ModulesContianer;

const ModuleB = ({ show }: { show: boolean }) => {
  return (
    <div
      className={`${
        show ? "opacity-100" : "opacity-0"
      } text-rose-300 transition-all duration-1000 absolute  top-[50%]`}
    >
      moduleBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
    </div>
  );
};

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
