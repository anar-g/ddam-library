"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, FolderKanban, FlaskConical, Settings, Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const NAV = [
  { href: "/", label: "Dashboard", icon: LayoutDashboard },
  { href: "/projects", label: "Projects", icon: FolderKanban },
  { href: "/rd", label: "R&D Hub", icon: FlaskConical },
];

export function Sidebar() {
  const pathname = usePathname();
  const { theme, toggle } = useTheme();

  return (
    <aside
      className="w-56 flex-shrink-0 flex flex-col h-screen sticky top-0 border-r"
      style={{ backgroundColor: "var(--sidebar)", borderColor: "var(--border)" }}
    >
      {/* Logo */}
      <div className="p-5 border-b" style={{ borderColor: "var(--border)" }}>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white text-sm">
            D
          </div>
          <div>
            <p className="font-semibold text-sm" style={{ color: "var(--text-1)" }}>
              DDAM Hub
            </p>
            <p className="text-xs" style={{ color: "var(--text-3)" }}>
              Data & Research
            </p>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
        {NAV.map(({ href, label, icon: Icon }) => {
          const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                active
                  ? "bg-blue-600/20 text-blue-500 border border-blue-500/20"
                  : ""
              }`}
              style={
                !active
                  ? { color: "var(--text-2)" }
                  : undefined
              }
              onMouseEnter={(e) => {
                if (!active) {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "var(--overlay-sm)";
                  (e.currentTarget as HTMLElement).style.color = "var(--text-1)";
                }
              }}
              onMouseLeave={(e) => {
                if (!active) {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "";
                  (e.currentTarget as HTMLElement).style.color = "var(--text-2)";
                }
              }}
            >
              <Icon size={15} />
              {label}
            </Link>
          );
        })}
      </nav>

      {/* Bottom */}
      <div className="p-3 space-y-1 border-t" style={{ borderColor: "var(--border)" }}>
        {/* Theme toggle */}
        <button
          onClick={toggle}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all"
          style={{ color: "var(--text-2)" }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundColor = "var(--overlay-sm)";
            (e.currentTarget as HTMLElement).style.color = "var(--text-1)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundColor = "";
            (e.currentTarget as HTMLElement).style.color = "var(--text-2)";
          }}
        >
          {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
          {theme === "dark" ? "Light Mode" : "Dark Mode"}
        </button>

        <Link
          href="/settings"
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all"
          style={{ color: "var(--text-3)" }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundColor = "var(--overlay-sm)";
            (e.currentTarget as HTMLElement).style.color = "var(--text-1)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundColor = "";
            (e.currentTarget as HTMLElement).style.color = "var(--text-3)";
          }}
        >
          <Settings size={15} />
          Settings
        </Link>
      </div>
    </aside>
  );
}
