import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const items = [
    { to: "/", label: "Home" },
    { to: "/regional", label: "Cultures" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
    { to: "/report", label: "Report"}
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
      <path d="m6.115 5.19.319 1.913A6 6 0 0 0 8.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 0 0 2.288-4.042 1.087 1.087 0 0 0-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 0 1-.98-.314l-.295-.295a1.125 1.125 0 0 1 0-1.591l.13-.132a1.125 1.125 0 0 1 1.3-.21l.603.302a.809.809 0 0 0 1.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 0 0 1.528-1.732l.146-.292M6.115 5.19A9 9 0 1 0 17.18 4.64M6.115 5.19A8.965 8.965 0 0 1 12 3c1.929 0 3.716.607 5.18 1.64"/>
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
