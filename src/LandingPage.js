import React from 'react';
import logo1 from './icons/SA_White_2x-transformed.png';
import logoB from './icons/contact_Blk.svg';
import logo from './icons/slogan_Wht.svg';

function LandingPage() {
  return (
    <div className="bg-transparent min-h-screen flex flex-col justify-between">
      <header className="flex z-[10020] justify-between items-center px-4 py-8 bg-transparent">
        <p className="px-4 left-[8.5%] w-[12.5rem] text-3xl font-extrabold">Reckon</p>
        <img src={logoB} alt="ReckonKE Logo" className="h-12 right-[5.5%] w-[12.5rem]" />
      </header>
      <main className="relative flex flex-col items-center justify-center flex-grow">
        <img src={logo1} alt="ReckonKE Logo" className="w-[65%]" />
        {/* overlay */}
        <div className="absolute"></div>
      </main>
      <footer className="flex justify-between items-center px-4 py-3">
        <img src={logo} alt="ReckonKE Logo" className="px-4" />
        <p className="text-white px-4">© 2023 ReckonKE.</p>
      </footer>
    </div>
  );
}

export default LandingPage;
