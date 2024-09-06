import { useState, useEffect, useRef } from "react";

/**
 *
 * @param targetRef
 * @param options
 * @returns
 * return the id or class name of the intersected element
 */
const useIntersectionObserver = () => {
  const [intersectedEl, setIntersectedEl] = useState<string>("");
  //0 not in view port, 1 in viewport coming from top, 2 in viewport coming from bottom
  const [inViewport, setInViewport] = useState<number>(0);
  // the placeholder to track which of the follower div are intersected to display the corresponding module

  const divsOffsetRef = useRef<number[]>([]);

  useEffect(() => {
    const target = document.querySelector(".container-div") as HTMLElement;
    if (!target) return;

    const targets: NodeListOf<HTMLElement> =
      document.querySelectorAll(".follow-div");
    if (!targets || targets.length == 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          if (entries[0].boundingClientRect.y > 0) setInViewport(1);
          else setInViewport(2);
        }
      },
      { threshold: [0] }
    ); // Trigger when the element enters or leaves the viewport

    const observer2 = new IntersectionObserver(
      (entries) => {
        /* console.log(entries); */
        entries.forEach((entry) => {
          if (entry.isIntersecting)
            setIntersectedEl(entry.target.getAttribute("data-id")!);
        });
      },
      {
        root: null,
        rootMargin: "-50% 0px",
        threshold: [0],
      }
    );

    // Observe the html element
    observer.observe(target);
    targets.forEach((target) => {
      observer2.observe(target);
    });

    return () => {
      divsOffsetRef.current = [];
      observer.disconnect();
      observer2.disconnect();
    };
  }, []);

  /*  useEffect(() => {
    console.log(inViewport);
    console.log(intersectedEl);
  }, [inViewport, intersectedEl]); */

  return [inViewport, intersectedEl];
};

export default useIntersectionObserver;
