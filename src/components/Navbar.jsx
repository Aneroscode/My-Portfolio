import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-scroll';
import pic from '../assets/photo.png.png'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navItems = [
    { id: 1, label: 'Home', to: 'hero' },
    { id: 2, label: 'About', to: 'about' },
    { id: 3, label: 'Work', to: 'work' },
    { id: 4, label: 'Skills', to: 'skills' },
    { id: 5, label: 'Contact', to: 'footer' },
  ];

  return (
    <header className="  sticky top-[20px] mt-[20px] z-50 bg-[#f7f7f7]/80 bg-opacity-70 font-[lobster two] backdrop-blur-sm rounded-[32px] overflow-hidden md:p-2 w-[calc(100%-32px)] border border-solid border-[#efefef] transition-all duration-300 hover:scale-[1.01] shadow-md max-w-full">
      <nav className="  px-6  flex justify-between items-center relative w-full md:w-auto">
        {/* Logo */}
        <div className=" font-bold text-primary">
          <img className='md:w-10 w-8 py-1 px-1 my-1 bg-gradient-to-r from-[#80ff72] to-[#7ee8fa] rounded-full md:py-2 md:px-2' src={pic} alt="anero" />
          
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 text-sm text-primary uppercase tracking-widest">
          {navItems.map(({ id, label, to }) => (
            <li key={id}>
              <Link
                to={to}
                smooth={true}
                duration={500}
                className="cursor-pointer whitespace-nowrap text-sm font-medium p-2 transition-colors text-primary shadow h-9 w-full md:w-auto justify-start md:justify-center rounded-[1000px]  hover:border hover:border-solid hover:border-[#efefef] hover:bg-white  "
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Icon */}
        <div className="md:hidden text-primary text-2xl cursor-pointer" onClick={toggleMenu}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden  bg-transparent bg-opacity-70 font-[lobster two] backdrop-blur-sm text-center py-6">
          <ul className="space-y-6 text-primary uppercase text-base">
            {navItems.map(({ id, label, to }) => (
              <li key={id}>
                <Link
                  to={to}
                  smooth={true}
                  duration={500}
                  onClick={toggleMenu}
                  className="cursor-pointer hover:text-primary"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
