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
    { id: 4, label: 'Skills', to: 'skills' },
    { id: 3, label: 'Projects', to: 'work' },
    { id: 5, label: 'Contact', to: 'footer' },
  ];

  return (
    <header className="  sticky top-[20px]  mt-5 mb-10 z-50 mx-auto bg-[#f7f7f7]/90  font-[lobster two] backdrop-blur-sm rounded-[32px] overflow-hidden p-3 md:p-2 md:max-w-3xl md:rounded-[1000px] w-[calc(100%-32px)]  border border-solid border-[#efefef] transition-all duration-300 hover:scale-[1.01] shadow-md gap-4 md:gap-20 max-w-full">

      <nav className="  px-6  flex justify-between items-center relative w-full md:w-auto">
        {/* Logo */}
        <div className="  flex justify-center py-3 gap-4 items-center flex-row text-primary">
          {/* <img className='md:w-9 w-8 py-1 px-1 my-1   bg-gradient-to-r from-[#ffa585] to-[#ffeda0] rounded-full md:py-2 md:px-2' src={pic} alt="anero" /> */}
          <h2 className='font-[creepster] text-accent'>Aneroscode</h2>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 text-sm text-primary  uppercase tracking-widest">
          {navItems.map(({ id, label, to }) => (
            <li key={id}>
              <Link
                to={to}
                smooth={true}
                activeClass=" underline font-bold"
                spy={true}
                duration={500}
                className="cursor-pointer whitespace-nowrap active:underline text-sm font-semibold justify-center text-primary  hover:underline  "
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
        <div className="md:hidden  bg-white bg-opacity-90 font-[lobster two] backdrop-blur-md shadow-lg rounded-b-3xl text-center py-6">
          <ul className="space-y-6 text-primary uppercase text-base">
            {navItems.map(({ id, label, to }) => (
              <li key={id}>
                <Link
                  to={to}
                  smooth={true}
                  duration={500}
                  onClick={toggleMenu}
                  className="cursor-pointer hover:underline"
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
