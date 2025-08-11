import { Link } from "react-router-dom";

interface NavLink {
  label: string;
  path: string;
}

interface NavbarProps {
  brand: string;
  links: NavLink[];
  className?: string;
}

export default function Navbar({ brand, links, className = "" }: NavbarProps) {
  return (
    <nav className={`flex items-center justify-between text-white px-6 py-4 ${className}`}>
      <div className="text-2xl font-bold">
        <Link to="/">{brand}</Link> {/* <-- Klickbar länk till home */}
      </div>
      <ul className="flex uppercase space-x-6 md:space-x-12 lg:space-x-32 justify-center">
        {links.map((link) => (
          <li key={link.path}>
            <Link to={link.path} className="relative tracking-widest pb-1 border-b-1 border-transparent hover:border-white transition-all duration-300">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="w-20" />
    </nav>
  );
}
