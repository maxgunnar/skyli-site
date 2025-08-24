import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface NavLink {
  label: string;
  path: string;
}

interface NavbarProps {
  /** Brand/logo image URL */
  logo: string;
  /** Center navigation links */
  links: NavLink[];
  /** Mobile menu icon image URL (SVG/PNG) */
  menuIcon: string;
  /** Optional extra classes for the <nav> wrapper */
  className?: string;
}

/**
 * Responsive navigation bar:
 * - Left: brand logo (always visible)
 * - Center: nav links (visible from `sm` and up)
 * - Right: circular mobile menu button (visible below `sm`)
 * - Modal-like mobile menu when open
 *
 * Notes:
 * - Scrolling is locked when the mobile menu is open.
 * - ESC closes the mobile menu.
 * - Clicking the backdrop closes the mobile menu.
 */

export default function Navbar({ logo, links, menuIcon, className = "" }: NavbarProps) {
  const [open, setOpen] = useState(false);

  // Lock body scroll & enable ESC to close when the menu is open
  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header>
      <nav
        aria-label="Main navigation"
        className={`
          relative flex items-center text-white
          px-4 md:px-8 py-3 sm:py-4
          ${className}
        `}
      >
        {/* Left: compact brand on small screens */}
        <div className="shrink-0 w-16 sm:w-20">
          <Link to="/" className="block" aria-label="Go to homepage">
            <img src={logo} alt="" className="h-6 md:h-10 lg:h-12" />
          </Link>
        </div>

        {/* Center: primary links (visible from `sm` and up) */}
        <ul
          className="
            hidden sm:flex flex-1 justify-center items-center
            gap-4 md:gap-8 lg:gap-20 py-4
            lowercase
            lg:text-4xl md:text-3xl
          "
        >
          {links.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className="relative tracking-wide md:tracking-widest pb-2 md:pb-3 wavy-hover"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right: mobile menu button (hidden from `sm` and up) + spacer for true centering */}
        <div className="ml-auto sm:ml-0">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="
              sm:hidden h-14 w-14 rounded-full bg-center bg-no-repeat overflow-hidden
              focus:outline-none focus:ring-2 focus:ring-white/80 cursor-pointer
              bg-[length:200%_200%]
            "
            style={{ backgroundImage: `url(${menuIcon})` }}
            aria-label="Open menu"
            aria-controls="mobile-popover"
            aria-expanded={open}
          />
          {/* Spacer to balance the logo width for perfect centering on ≥ sm */}
          <div className="hidden sm:block w-16 sm:w-20" aria-hidden="true" />
        </div>
      </nav>

      {/* Mobile popover (modal-like) */}
      {open && (
        <div
          id="mobile-popover"
          role="dialog"
          aria-modal="true"
          className="
            fixed inset-0 z-50
            flex items-center justify-center
            bg-black/70 backdrop-blur-sm
            animate-in fade-in duration-150
          "
          onClick={(e) => {
            // Close when clicking backdrop (but not the panel itself)
            if (e.target === e.currentTarget) setOpen(false);
          }}
        >
          <div
            className="
              mx-6 w-full max-w-sm
              rounded-2xl border border-white/10
              bg-black/90 text-white
              p-6
              shadow-2xl
              transition duration-200
              data-[enter]:opacity-0 data-[enter]:scale-95
              data-[enter]:animate-[none]
            "
          >
            {/* Header row in the popover: logo + close button */}
            <div className="flex items-center justify-between">
              <img src={logo} alt="" className="h-6" />
              <button
                onClick={() => setOpen(false)}
                className="h-9 w-9 rounded-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/80"
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            {/* Popover nav list */}
            <nav className="mt-6">
              <ul className="space-y-3 text-2xl lowercase text-white">
                {links.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      onClick={() => setOpen(false)}
                      className="block px-3 py-2 hover:bg-white/10 tracking-wide border-b border-white/10 last:border-none"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
