import { Link } from "react-router-dom";

interface NavLink {
  label: string;
  path: string;
}

interface NavbarProps {
  logo: string;
  links: NavLink[];
  className?: string;
}

export default function Navbar({ logo, links, className = "" }: NavbarProps) {
  return (
    <header>
      <nav aria-label="Main navigation" className={`flex items-center justify-between text-white text-2xl md:text-5xl px-6 py-4 ${className}`}>
        <div className="w-32">
          <Link to="/">
            <img src={logo} alt="Sky Li homepage" className="max-w-full h-auto" />
          </Link>
        </div>
        <ul className="flex lowercase space-x-6 md:space-x-12 lg:space-x-32 justify-center">
          {links.map((link) => (
            <li key={link.path}>
              <Link to={link.path} className="relative tracking-widest pb-3 wavy-hover">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="w-32" />
      </nav>
    </header>
  );
}
