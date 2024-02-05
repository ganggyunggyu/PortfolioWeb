import ScrollToExample from '../components/ScrollToExample';
import React from 'react';

export default function Home() {
  return (
    <div>
      <header className='fixed smooth'></header>
      <ScrollToExample />
      <main className='w-screen h-screen'>2번페이지</main>
      <footer>푸터ㅏ</footer>
    </div>
  );
}
