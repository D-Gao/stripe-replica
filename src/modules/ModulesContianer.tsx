import { useEffect } from "react";
import ModuleA from "../ModuleA";
import useIntersectionObserver from "../hooks/useObserverIntersection";

const ModulesContianer = () => {
  const [inViewport, intersectedEl] = useIntersectionObserver();

  useEffect(() => {
    console.log(inViewport);
    console.log(intersectedEl);
  }, [inViewport, intersectedEl]);

  return (
    <div className="relative">
      <div
        className="sticky-el sticky"
        style={{
          top: `calc(50% - 270px)`,
        }}
      >
        <ModuleA></ModuleA>
      </div>
    </div>
  );
};

export default ModulesContianer;
