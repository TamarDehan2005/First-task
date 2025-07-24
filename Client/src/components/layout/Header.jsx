import React from 'react';
import profileImage from '../../assets/profile.png'; 
const Header = () => (
  <header className="ml-60 h-16 flex items-center justify-between px-8">
    <div className="flex items-center bg-red-50 border border-red-300 text-red-700 px-4 py-2 rounded-full text-sm">
      <span>3 clients haven’t completed payment – estimated ₪2,500</span>
      <span className="ml-2">💰</span>
    </div>
    <div className="flex items-center">
      <div className="text-right">
        <p className="font-semibold">Hello Ofek!</p>
        <p className="text-sm text-gray-500">Ofeksolus17@gmail.co</p>
      </div>
      <img
        className="w-10 h-10 rounded-full ml-4 object-cover"
        src={profileImage}
        alt="User"
      />
    </div>
  </header>
);

export default Header;