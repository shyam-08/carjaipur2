

import { Link } from 'react-router-dom';
import { useState } from 'react';
// import SearchBox from './SearchBox'

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex flex-wrap items-center justify-between bg-white p-3 font-bold ">
      <div>
        {/* <Link href="/"> */}
          <a href='/'>
        The Car Jaipur

          </a>
         {/* </Link>  */}
      </div>
{/* <SearchBox/> */}
      <button   onClick={toggleMenu} className="lg:hidden">
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
            <a href="tel:8742068501">SellCar:874206801</a>
           
          </li>
          <li>
        
              <a href="tel:76237908435">Buy Car:768604392</a>
           
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
