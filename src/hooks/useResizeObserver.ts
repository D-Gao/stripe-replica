import React, { useEffect, useState } from "react";

type Props = { ref: React.RefObject<HTMLElement> };

const useResizeObserver = ({ ref }: Props) => {
  const [height, setHeight] = useState<number>(540);

  useEffect(() => {
    const target = ref.current;

    // Ensure target is defined
    if (!target) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setHeight(entry.contentRect.height);
      }
    });
    resizeObserver.observe(target);
    // Clean up observer on unmount
    return () => {
      resizeObserver.unobserve(target);
    };
  }, [ref]);

  return height;
};

export default useResizeObserver;
