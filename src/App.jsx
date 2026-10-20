import React from "react";
import "./App.css"; 

const globalReset = `
  html, body, #root {
    margin: 0; padding: 0; height: 100%; width: 100%; overflow: hidden;
  }
  *, *::before, *::after { box-sizing: border-box; }
`;

const APPS = [
    {
        id: "app-a",
        name: "MiMaPwd",
        description: "Simplify your digital Life. A secure, privacy-first password manager that keeps all your credentials safe ONLY on your device.",
        logo: "/mimapwd-logo.png",
        href: "https://mimapwd.com",
        bg: "#ff0000",
        textColor: "#ffffff",
    },
    {
        id: "app-b",
        name: "Dian Huo",
        description: "Inventory management has never been easier. All of your operations in the palm of your hand.",
        logo: "/logo.png",
        href: "https://dianhuo.app",
        bg: "#0096ff",
        textColor: "#ffffff",
    },
];

// Shared pill: 2 rows — (logo + company name) / "Choose Your App"
function TitlePill() {
    return (
        <div
            className="title-pill shadow d-flex flex-column align-items-center justify-content-center px-4 py-2"
            style={{ borderRadius: 20, whiteSpace: "nowrap", minHeight: 64, }}
            onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
            }}
        >
            {/* Row 1: logo + company name */}
            <div className="d-flex align-items-center justify-content-center gap-2">
                <img
                    src="logo.png"
                    alt="10g logo"
                    style={{ width: 24, height: 24, borderRadius: 6, flexShrink: 0, display: "block", objectFit: "contain", }}
                />
                <span className="fw-semibold d-flex align-items-center" style={{ fontSize: "1.5rem" }}>
                    10g Company
                </span>
            </div>

            {/* Row 2: Choose Your App */}
            <h1 className="mb-0 fw-bold d-flex align-items-center"
                style={{ fontSize: "1.2rem", lineHeight: 1.5,  }}>
                [ Choose Your App ]
            </h1>
        </div>
    );
}

function AppPanel({ app }) {
    return (
        <a
            href={app.href}
            className="d-flex flex-column align-items-center justify-content-center text-decoration-none h-100 w-100 p-4"
            style={{
                backgroundColor: app.bg,
                color: app.textColor,
                transition: "filter 0.2s ease",
                minWidth: 0,
                minHeight: 0,
                overflow: "hidden",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.filter = "brightness(1.1)")}
            onMouseLeave={(e) => (e.currentTarget.style.filter = "brightness(1)")}
        >
            <div className="app-header d-flex align-items-center gap-3 mb-3">
                <img
                    src={app.logo}
                    alt={`${app.name} logo`}
                    style={{ width: 80, height: 80, borderRadius: 16, flexShrink: 0 }}
                />
                <h2 className="mb-0 fw-bold">{app.name}</h2>
            </div>
            <p className="text-center mb-4" style={{ maxWidth: 320, opacity: 0.9 }}>
                {app.description}
            </p>
            <span
                className="btn btn-light btn-lg px-5 py-3 fw-semibold"
                style={{ borderRadius: 50 }}
            >
                Visit Site →
            </span>
        </a>
    );
}

export default function App() {
    return (
        <>
            <style>{globalReset}</style>

            <div
                className="position-relative d-flex flex-column flex-md-row"
                style={{ width: "100%", height: "100%", overflow: "hidden" }}
            >
                {/* Desktop pill: top-center, overlays panels */}
                <div
                    className="d-none d-md-block position-absolute top-0 start-50 translate-middle-x mt-4"
                    style={{ zIndex: 30 }}
                >
                    <TitlePill />
                </div>

                {/* Panel A */}
                <div
                    className="flex-fill h-100"
                    style={{ minWidth: 0, minHeight: 0, overflow: "hidden" }}
                >
                    <AppPanel app={APPS[0]} />
                </div>

                {/* Panel B */}
                <div
                    className="flex-fill h-100"
                    style={{ minWidth: 0, minHeight: 0, overflow: "hidden" }}
                >
                    <AppPanel app={APPS[1]} />
                </div>

                {/* Mobile pill: centered at the seam between the stacked panels */}
                <div
                    className="d-md-none position-absolute start-50 translate-middle"
                    style={{ top: "50%", zIndex: 30 }}
                >
                    <TitlePill />
                </div>
            </div>
        </>
    );
}