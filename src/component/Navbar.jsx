

import { Link } from 'react-router-dom';
import { useState } from 'react';
import SearchBox from './SearchBox';
// import SearchBox from './SearchBox'
<Link to='/search'></Link>
const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex flex-wrap items-center justify-between bg-white p-3 font-bold ">
      <div>
        {/* <Link href="/"> */}
          <Link to='/'>
            {/* <img src="/Logo.jpg" alt="Brand image" className='w-10 h-10 inline-block bg-white m-1' /> */}
        CarJaipur

          </Link>
         {/* </Link>  */}
      </div>
      <SearchBox/>
      <button   onClick={toggleMenu} className="lg:hidden bg-gray-50">
        Menu
      </button>

      <div className={`lg:flex ${isMenuOpen ? 'flex' : 'hidden'}`}>
        <ul className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-6">
          <li>
          <Link to="/ContactUs">Contact Us</Link>
          </li>
          <li>
        <Link to="/aboutus">About Us</Link>    
          </li>
          <li>
            <Link to="/sell">Sell Car</Link>
          </li>
          <li>
            <a href="tel:9828066706">SellCar:9828066706</a>
           
          </li>
          <li>
        
              <a href="tel:8742068501">Buy Car:8742068501</a>
           
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
