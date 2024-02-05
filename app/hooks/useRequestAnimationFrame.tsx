import React from 'react';

const useRequestAnimationFrame = (callback: Function = () => {}, ms_delay: number = 0) => {
  const lastTimestamp = React.useRef<number | null>(null);

  React.useEffect(() => {
    let animationFrameId: number;
    const delayAnimation = (timestamp: number) => {
      if (lastTimestamp.current === null) lastTimestamp.current = timestamp;
      const elapsed = timestamp - lastTimestamp.current;

      if (elapsed > ms_delay) {
        lastTimestamp.current = timestamp;
        callback();
      }
      animationFrameId = requestAnimationFrame(delayAnimation);
    };
    animationFrameId = requestAnimationFrame(delayAnimation);
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [callback, ms_delay]);

  return;
};

export default useRequestAnimationFrame;
