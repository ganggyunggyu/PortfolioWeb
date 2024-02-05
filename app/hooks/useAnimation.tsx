import React from 'react';
import useIntersectionObserver from './useIntersectionObserver';

interface OptionObject {
  hiddenAdd: boolean;
}

const useAnimation = (
  classNameArray: string[],
  option: OptionObject = {
    hiddenAdd: true,
  },
) => {
  const targetRef = React.useRef<HTMLDivElement | HTMLParagraphElement | HTMLHeadingElement>(null);

  const onIntersectHandler = () => {
    classNameArray.forEach((className) => {
      targetRef.current?.classList.add(className);
    });

    if (option.hiddenAdd) {
      targetRef.current?.classList.remove('invisible');
    }
  };
  const offIntersectHandler = () => {
    classNameArray.forEach((className) => {
      targetRef.current?.classList.remove(className);
    });

    if (option.hiddenAdd) {
      targetRef.current?.classList.add('invisible');
    }
  };
  useIntersectionObserver({
    target: targetRef,
    onIntersect: onIntersectHandler,
    offIntersect: offIntersectHandler,
    threshold: 0.15,
  });

  return [targetRef];
};

export default useAnimation;
