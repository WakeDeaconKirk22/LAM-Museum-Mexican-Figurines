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

  const navContainerStyle = { display: "flex", alignItems: "center", gap: "1rem" }; // 1rem = gap-4
  const linkStyle = { marginRight: "1rem", display: "inline-flex" };

  return (
    <nav className="border-b border-stone-800/50 bg-stone-950/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-600 to-orange-700 flex items-center justify-center shadow-lg shadow-amber-900/30">
              <svg className="w-6 h-6 text-stone-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m6.115 5.19.319 1.913A6 6 0 0 0 8.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 0 0 2.288-4.042 1.087 1.087 0 0 0-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 0 1-.98-.314l-.295-.295a1.125 1.125 0 0 1 0-1.591l.13-.132a1.125 1.125 0 0 1 1.3-.21l.603.302a.809.809 0 0 0 1.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 0 0 1.528-1.732l.146-.292M6.115 5.19A9 9 0 1 0 17.18 4.64M6.115 5.19A8.965 8.965 0 0 1 12 3c1.929 0 3.716.607 5.18 1.64" />
              </svg>
            </div>
            <div>
              <div className="font-serif text-xl font-bold text-stone-50 group-hover:text-amber-500 transition-colors">Artifact</div>
              <div className="text-[10px] text-stone-500 uppercase tracking-wider font-medium -mt-1">Classifier</div>
            </div>
          </Link>

          {/* FORCE spacing */}
          <div style={navContainerStyle}>
            {items.map((item, idx) => {
              const active = isActive(item.to);
              const thisLinkStyle = { ...linkStyle, marginRight: idx === items.length - 1 ? "0" : linkStyle.marginRight };

              return (
                <Link
                  key={item.to}
                  to={item.to}
                  style={thisLinkStyle}
                  className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                    active
                      ? "text-amber-500 bg-amber-500/10 ring-1 ring-amber-500/10"
                      : "text-stone-400 hover:text-stone-200 hover:bg-stone-800/50"
                  }`}
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
