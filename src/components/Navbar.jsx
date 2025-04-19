import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-scroll';

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
    <header className="sticky top-0 z-50 bg-[#0a192f] bg-opacity-70 font-[poppins] backdrop-blur-md border-b border-slate-800 shadow-md">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-primary">Anero</div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 text-sm text-light uppercase tracking-widest">
          {navItems.map(({ id, label, to }) => (
            <li key={id}>
              <Link
                to={to}
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-primary transition-colors "
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Icon */}
        <div className="md:hidden text-white text-2xl cursor-pointer" onClick={toggleMenu}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0a192f] text-center py-6">
          <ul className="space-y-6 text-light uppercase text-base">
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
