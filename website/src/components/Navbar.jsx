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
    { to: "/report", label: "Report"}
  ];

  const navContainerStyle = { display: "flex", alignItems: "center", gap: "1rem" };
  const linkStyle = { marginRight: "1rem", display: "inline-flex" };

  return (
    <nav className="border-b border-stone-800/50 bg-stone-950/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-600 to-orange-700 flex items-center justify-center shadow-lg shadow-amber-900/30">
              <svg className="w-6 h-6 text-stone-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m6.115 5.19..." />
              </svg>
            </div>
            <div>
              <div className="font-serif text-xl font-bold text-stone-50 group-hover:text-amber-500 transition-colors">Artifact</div>
              <div className="text-[10px] text-stone-500 uppercase tracking-wider font-medium -mt-1">Classifier</div>
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
