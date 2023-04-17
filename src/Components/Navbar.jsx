import React,{useState}from 'react';

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');

  const clickHandler = (search)=>{
    props.fetchNews(search, 'in');
  }
  return (
    <>
    <nav className="bg-gray-800 transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex-shrink-0 text-3xl text-white font-bold">
              NewsBite
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Home
              </a>
              <a href="/categories" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Categories
              </a>
              <a href="/about" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                About
              </a>
              <a href="/contact" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </a>
            </div>
          </div>
            <div className='space-x-3 hidden lg:block sm:block md:block'>
              <input className="w-60 h-8 rounded-md px-2 focus:ring-2 focus:ring-blue-500/50 outline-0" type="search" name="" id="" value={search} onChange={(e)=> {setSearch(e.target.value)}} placeholder='Search'/>
              <button className='bg-blue-600 px-5 rounded-md hover:bg-blue-800 py-1 text-white' onClick={()=> {clickHandler(search)}} >Search</button>
            </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`${isOpen ? 'block' : 'hidden'} md:hidden`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2
        rounded-md text-base font-medium">
        Home
      </a>
      <a href="/categories" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
        Categories
      </a>
      <a href="/about" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
        About
      </a>
      <a href="/contact" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
        Contact
      </a>
      <div className='space-x-3 lg:hidden text-center'>
              <input className="w-60 h-8 rounded-md px-2 focus:ring-2 focus:ring-blue-500/50 outline-0" type="search" name="" id="" placeholder='Search' value={search} onChange={(e)=> {setSearch(e.target.value)}}/>
              <button className='bg-blue-600 px-5 rounded-md hover:bg-blue-800 py-1 text-white' onClick={()=> {clickHandler(search)}}>Search</button>
            </div>
      </div>
  </div>
</nav>
<div>
  <div className="lg:hidden categories flex  bg-black text-white py-3 space-x-5 overflow-x-auto px-2">
    <span className="px-2 rounded hover:bg-white hover:text-black" onClick={()=> {clickHandler(setSearch('Sports')); console.log('sports')}}>Sports</span>
    <span className="px-2 rounded hover:bg-white hover:text-black">Science</span>
    <span className="px-2 rounded hover:bg-white hover:text-black" onClick={()=> {props.fetchNews('space', 'in')}}>Space</span>
    <span className="px-2 rounded hover:bg-white hover:text-black" onClick={()=> {props.fetchNews('technology', 'in')}}>Technology</span>
    <span className="px-2 rounded hover:bg-white hover:text-black" onClick={()=> {props.fetchNews('entertainment', 'in')}}>Entertainment</span>
    <span className="px-2 rounded hover:bg-white hover:text-black" onClick={()=> {props.fetchNews('business', 'in')}}>business</span>
    <span className="px-2 rounded hover:bg-white hover:text-black" onClick={()=> {props.fetchNews('economics', 'in')}} >Economics</span>
    <span className="px-2 rounded hover:bg-white hover:text-black" onClick={()=> {props.fetchNews('health', 'in')}}>health</span>
  </div>
</div>
</>
)
  }
export default Navbar;
