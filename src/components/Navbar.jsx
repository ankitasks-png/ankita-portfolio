
import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("Home");

  const links = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Education", "#education"],
    ["Projects", "#projects"],
    ["Contact", "#contact"],
  ];

  return (
    <nav
      style={{
        position: "absolute",
        top: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 100,
        width: "min(94%, 1050px)",
        padding: "14px 26px",
        borderRadius: "50px",
        background: "rgba(35, 29, 39, 0.88)",
        backdropFilter: "blur(22px)",
        WebkitBackdropFilter: "blur(22px)",
        border: "1px solid rgba(223, 145, 183, 0.22)",
        boxShadow: "0 8px 35px rgba(0,0,0,0.22)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "24px",
        }}
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={() => setActive("Home")}
          style={{
            color: "#df91b7",
            fontSize: "25px",
            fontWeight: "800",
            letterSpacing: "-1px",
            textDecoration: "none",
            flexShrink: 0,
          }}
        >
          AS.
        </a>

        {/* Navigation Links */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: "clamp(12px, 2vw, 25px)",
            flexWrap: "wrap",
          }}
        >
          {links.map(([name, href]) => (
            <a
              key={name}
              href={href}
              onClick={() => setActive(name)}
              style={{
                color:
                  active === name ? "#e8a0c1" : "#e8e1e9",
                fontSize: "13px",
                fontWeight: active === name ? "600" : "400",
                textDecoration: "none",
                transition: "all 0.25s ease",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#e8a0c1";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color =
                  active === name ? "#e8a0c1" : "#e8e1e9";
              }}
            >
              {name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
