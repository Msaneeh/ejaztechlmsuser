import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Layers,
  Award,
  CheckSquare,
  HelpCircle,
  Settings,
  LogOut,
  User,
  PanelRight,
} from "lucide-react";

const Sidebar = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const navItems = [
    { label: "Dashboard", path: "/dashbord", icon: LayoutDashboard },
    { label: "Phases", path: "/phases", icon: Layers },
    { label: "Certificates", path: "/certificates", icon: Award },
    { label: "Tasks", path: "/tasks", icon: CheckSquare },
    { label: "Quizzes", path: "/quizzes", icon: HelpCircle },
    { label: "Settings", path: "/settings", icon: Settings },
  ];

  const handleLogout = () => {
    navigate("/auth");
  };

  return (
    <>
      {/* Mobile backdrop overlay */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
        />
      )}

      {/* Sidebar Shell */}
      <aside
        className={`fixed md:static top-16 left-0 z-50 flex flex-col h-[calc(100vh-64px)] w-64 bg-card text-card-foreground border-r border-border transform transition-transform duration-300 ease-in-out shrink-0 overflow-hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        {/* Sidebar Header with PanelRight Icon */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-border shrink-0">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          </span>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-accent text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Toggle Sidebar"
          >
            <PanelRight className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation Links Area */}
        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={onClose}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium text-sm transition-all ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  }`
                }
              >
                <IconComponent className="h-5 w-5 shrink-0" />
                <span className="truncate">{item.label}</span>
              </NavLink>
            );
          })}
        </nav>

        {/* User Profile & Logout Footer */}
        <div className="p-3 border-t border-border space-y-1 shrink-0">
          <div className="flex items-center gap-3 px-3 py-2">
            <div className="h-8 w-8 rounded-full bg-accent flex items-center justify-center shrink-0">
              <User className="h-4 w-4 text-accent-foreground" />
            </div>
            <div className="flex flex-col truncate">
              <span className="text-sm font-semibold leading-none text-foreground truncate">
                User Name
              </span>
              <span className="text-xs text-muted-foreground truncate">
                user@example.com
              </span>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-destructive hover:bg-destructive/10 transition-colors"
          >
            <LogOut className="h-5 w-5 shrink-0" />
            <span>Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;