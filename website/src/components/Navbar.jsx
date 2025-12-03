import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const items = [
    { to: "/", label: "Home" },
    { to: "/classifier", label: "Classifier" },
    { to: "/regional", label: "Cultures" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  const navContainerStyle = { display: "flex", alignItems: "center", gap: "1rem" };
  const linkStyle = { marginRight: "1rem", display: "inline-flex" };

  return (
    <nav className="border-b border-stone-800/50 bg-stone-950/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

{/* LOGO */}
<Link to="/" className="flex items-center gap-4 group logo-link">
  {/* Icon Container */}
  <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg shadow-amber-900/50 transform transition-transform duration-300 group-hover:scale-110 logo-icon">
    {/* Glow behind icon */}
    <div className="absolute inset-0 rounded-2xl bg-amber-400/20 blur-xl"></div>
    {/* Vase SVG Icon */}
    <svg className="w-6 h-6 text-stone-50 relative z-10" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C10 2 9 4 9 4s-2 0-3 3c-1 2-1 5-1 7s1 4 2 5 2 1 3 1 2-1 3-1 2-2 2-5 0-5-1-7c-1-3-3-3-3-3s-1-2-3-2zM12 6a1 1 0 011 1v2a1 1 0 01-2 0V7a1 1 0 011-1z"/>
    </svg>
  </div>

  {/* Text */}
  <div className="flex flex-col">
    <div className="font-serif text-xl font-bold text-stone-50 group-hover:text-amber-500 transition-colors duration-300">
      Artifact
    </div>
    <div className="text-[10px] text-stone-400 uppercase tracking-wider font-medium -mt-1 group-hover:text-amber-400 transition-colors duration-300">
      Classifier
    </div>
  </div>
</Link>




          {/* NAV BUTTONS */}
          <div style={navContainerStyle}>
            {items.map((item, idx) => {
              const active = isActive(item.to);
              const thisLinkStyle = { ...linkStyle, marginRight: idx === items.length - 1 ? "0" : linkStyle.marginRight };

              return (
                <Link
                  key={item.to}
                  to={item.to}
                  style={thisLinkStyle}
                  className={`nav-bubble ${
                    active ? "nav-bubble-active" : ""
                  } px-4 py-2 font-medium text-sm`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

        </div>
      </div>
    </nav>
  );
}
