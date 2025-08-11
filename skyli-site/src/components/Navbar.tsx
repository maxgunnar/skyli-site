import { Link } from "react-router-dom";
import type { FC } from "react";

interface NavLink {
  label: string;
  path: string;
}

interface NavbarProps {
  brand: string;
  links: NavLink[];
}

const Navbar: FC<NavbarProps> = ({ brand, links }) => {
  const linkStyle = "relative pb-1 border-b-2 border-transparent hover:border-white transition-all duration-300";

  return (
    <nav className="flex items-center justify-between text-white px-6 py-4">
      {/* Logo */}
      <div className="text-2xl font-bold">
        <Link to="/">{brand}</Link>
      </div>

      {/* Links */}
      <ul className="flex uppercase space-x-6 md:space-x-12 lg:space-x-32 justify-center tracking-widest">
        {links.map((link) => (
          <li key={link.path}>
            <Link to={link.path} className={linkStyle}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Placeholder right */}
      <div className="w-20"></div>
    </nav>
  );
};

export default Navbar;
