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
    <nav className={`flex items-center justify-between text-white text-5xl px-6 py-4 ${className}`}>
      <div className="w-32">
        <Link to="/">
          <img src={logo} alt="homepage" />
        </Link>{" "}
        {/* <-- Klickbar länk till home */}
      </div>
      <ul className="flex lowercase space-x-6 md:space-x-12 lg:space-x-32 justify-center">
        {links.map((link) => (
          <li key={link.path}>
            <Link to={link.path} className="relative tracking-widest pb-3 wavy-hover font-size-[90px]">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="w-20" />
    </nav>
  );
}
