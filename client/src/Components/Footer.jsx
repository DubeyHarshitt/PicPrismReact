import React from 'react';
import { useLocation } from 'react-router-dom';

const Footer = () => {

  const { pathname } = useLocation();

  return (
    <div className={`flex flex-col mx-3 bg-white rounded-lg mt-5
     ${pathname === "/seller/profile" || pathname === "/buyer/profile" ? "hidden" : ""}`}>
      <div className="w-full draggable">
        <div className="container flex flex-col mx-auto">
          <div className="flex flex-col items-center w-full my-20">
            <span className="mb-8">
              <Logo />
            </span>
            <div className="flex flex-col items-center gap-6 mb-8">
              <NavLinks />
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Logo = () => {
    return (
      <img
        src="/logo.png"
        alt="Logo"
        width="140" 
      />
    );
  };
  

const NavLinks = () => {
  const links = ["About", "Features", "Blog", "Resources", "Partners", "Help", "Terms"];
  return (
    <div className="flex flex-wrap items-center justify-center gap-5 lg:gap-12 gap-y-3 lg:flex-nowrap text-dark-grey-900">
      {links.map((link, index) => (
        <a key={index} href="javascript:void(0)" className="text-gray-600 hover:text-gray-900">
          {link}
        </a>
      ))}
    </div>
  );
};

const SocialLinks = () => {
  return (
    <div className="flex items-center gap-8">
      <a href="/" className="text-grey-700 hover:text-grey-900">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.6348 20.7273V12.766H16.3582L16.7668 9.66246H13.6348V7.68128C13.6348 6.78301 13.8881 6.17085 15.2029 6.17085L16.877 6.17017V3.39424C16.5875 3.35733 15.5937 3.27273 14.437 3.27273C12.0216 3.27273 10.368 4.71881 10.368 7.37391V9.66246H7.63636V12.766H10.368V20.7273H13.6348Z"
            fill="currentColor"
          />
        </svg>
      </a>
      <a href="/" className="text-grey-700 hover:text-grey-900">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21.8182 6.14597C21.1356 6.44842 20.4032 6.65355 19.6337 6.74512C20.4194 6.27461 21.0208 5.5283 21.3059 4.64176C20.5689 5.07748 19.7553 5.39388 18.8885 5.56539C18.1943 4.82488 17.207 4.36364 16.1118 4.36364C14.0108 4.36364 12.3072 6.06718 12.3072 8.16706C12.3072 8.46488 12.3408 8.75576 12.4058 9.03391C9.24436 8.87512 6.44106 7.36048 4.56485 5.05894C4.23688 5.61985 4.0503 6.27342 4.0503 6.97109C4.0503 8.29106 4.72246 9.45573 5.74227 10.1371C5.11879 10.1163 4.53239 9.94476 4.01903 9.65967V9.70718C4.01903 11.5498 5.33088 13.0876 7.07033 13.4376C6.75164 13.5234 6.41558 13.5709 6.06791 13.5709C5.82224 13.5709 5.58467 13.5465 5.35173 13.5002C5.83612 15.0125 7.2407 16.1123 8.90485 16.1424C7.60343 17.1622 5.96246 17.7683 4.18012 17.7683C3.87303 17.7683 3.57055 17.7498 3.27273 17.7162C4.95658 18.7974 6.95564 19.4278 9.10418 19.4278C16.1026 19.4278 19.9281 13.6312 19.9281 8.60397..."
            fill="currentColor"
          />
        </svg>
      </a>
    </div>
  );
};

export default Footer;
