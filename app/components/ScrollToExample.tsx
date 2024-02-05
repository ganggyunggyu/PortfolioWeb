'use client';

import React from 'react';
import { scrollTo } from '../utils/scrollTo';
import Button from './Button';
import MainFullPage from '../pages/MainFullPage';
import MyInfo from './MyInfo';

const ScrollToExample = () => {
  const [darkMode, setDarkMode] = React.useState(false);
  const scrollRefs = [
    React.useRef<HTMLDivElement>(null),
    React.useRef<HTMLDivElement>(null),
    React.useRef<HTMLDivElement>(null),
    React.useRef<HTMLDivElement>(null),
    React.useRef<HTMLDivElement>(null),
  ];

  const handleClickScroll = (index: number) => {
    if (scrollRefs[index].current) {
      scrollTo(window, scrollRefs[index].current!.offsetTop);
    }
  };
  const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('opacity-0');
        entry.target.classList.add('opacity-100');
        console.log('on!');
      }
      if (!entry.isIntersecting) {
        entry.target.classList.remove('opacity-100');
        entry.target.classList.add('opacity-0');
        console.log('off!');
      }
    });
  });
  React.useEffect(() => {
    // ref.current가 null이 아닌 경우에만 observe 호출
    scrollRefs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
      // 컴포넌트가 언마운트될 때 정리(clean-up)를 위한 함수
      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    });
  }, [observer, scrollRefs]);

  return (
    <div>
      <div className='fixed right-10 h-screen z-10 flex flex-col gap-5 items-center justify-center'>
        <Button label='1' variant={'red'} size={'rounded'} onClick={() => handleClickScroll(0)} />
        <Button label='2' variant={'red'} size={'rounded'} onClick={() => handleClickScroll(1)} />
        <Button label='3' variant={'red'} size={'rounded'} onClick={() => handleClickScroll(2)} />
        <Button label='4' variant={'red'} size={'rounded'} onClick={() => handleClickScroll(3)} />
        <Button label='5' variant={'red'} size={'rounded'} onClick={() => handleClickScroll(4)} />
        <Button label='다크모드' size={'rounded'} variant={darkMode ? 'white' : 'black'} />
      </div>
      <div className='flex flex-col'>
        <div className='transition-3s' ref={scrollRefs[0]}>
          <MainFullPage children={<MyInfo />} />
        </div>
        <div className='transition-3s' ref={scrollRefs[1]}>
          <MainFullPage children={<MyInfo />} />
        </div>
        <div className='transition-3s' ref={scrollRefs[2]}>
          <MainFullPage children={<MyInfo />} />
        </div>
        <div className='transition-3s' ref={scrollRefs[3]}>
          <MainFullPage children={<MyInfo />} />
        </div>
        <div className='transition-3s' ref={scrollRefs[4]}>
          <MainFullPage children={<MyInfo />} />
        </div>
      </div>
    </div>
  );
};

export default ScrollToExample;
