import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Layers,
  Award,
  CheckSquare,
  HelpCircle,
  Settings,
  LogOut,
  User,
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
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
        />
      )}

      <aside
        className={`
          fixed md:static top-16 md:top-0 left-0 z-50 md:z-0
          flex flex-col
          h-[calc(100vh-64px)] md:h-full
          bg-card text-card-foreground border-r border-border
          shrink-0 overflow-hidden
          transition-all duration-300 ease-in-out
          ${isOpen
            ? "translate-x-0 md:w-64 md:opacity-100"
            : "-translate-x-full md:translate-x-0 md:w-0 md:opacity-0 md:border-r-0"}
        `}
      >
        <div className="flex w-64 flex-col h-full">
          <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => {
                   
                    if (window.innerWidth < 768) onClose();
                  }}
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


          <div className="p-3 border-t border-border space-y-1 shrink-0">
            <Link to="/profile">
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
            </Link>

            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-destructive hover:bg-destructive/10 transition-colors"
            >
              <LogOut className="h-5 w-5 shrink-0" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;