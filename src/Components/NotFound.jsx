import React from 'react';

function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen bg-black text-white">
      <div className="text-center">
        {/* <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1> */}
        <img src="https://media.tenor.com/IHdlTRsmcS4AAAAC/404.gif" alt="" />
        <h2 className="text-3xl font-semibold text-gray-400 mb-4">Page not found</h2>
        <p className="text-gray-500 mb-8">The page you are looking for does not exist or has been moved.</p>
        <button className="bg-white text-black rounded-md py-2 px-4 hover:bg-gray-800 hover:text-white font-semibold" to="/">Go back home</button>
      </div>
    </div>
  );
}

export default NotFound;
