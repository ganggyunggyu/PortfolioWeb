'use client';
import React from 'react';
import useRequestAnimationFrame from './useRequestAnimationFrame';
import useIntersectionObserver from './useIntersectionObserver';

const useTyping = (sentence: string, ms_delay = 100) => {
  const [word, setWord] = React.useState('');
  const targetRef = React.useRef<HTMLDivElement | HTMLParagraphElement | HTMLHeadingElement>(null);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const animateTyping = () => {
    if (sentence.length > currentIndex) {
      const newWord = sentence[currentIndex];
      setWord(word + newWord);
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      return;
    }
  };

  const onIntersectHandler = () => {
    setCurrentIndex(0);
    setWord('');
  };

  const offIntersectHandler = () => {
    setWord('');
  };

  useRequestAnimationFrame(animateTyping, ms_delay);

  useIntersectionObserver({
    onIntersect: onIntersectHandler,
    offIntersect: offIntersectHandler,
    target: targetRef,
  });

  return { word, targetRef, setWord };
};

export default useTyping;
