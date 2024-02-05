'use client';

import useTyping from '@/app/hooks/useTyping';
import { lineBreak } from '@/app/utils/lineBreak';
import { portfoliomain } from '../data';

const MyInfo = () => {
  const { word, targetRef } = useTyping(portfoliomain);

  return (
    <div
      ref={targetRef}
      className=' font-extrabold text-xl mb-[10vh] flex flex-col gap-y-5 text-center'
    >
      {lineBreak(word).map((item, i) => (
        <p className='text-3xl lg:text-4xl lg:tracking-wider leading-10' key={`sentence${i}`}>
          {item}
        </p>
      ))}
    </div>
  );
};
export default MyInfo;
