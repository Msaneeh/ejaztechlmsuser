import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { Bell, PanelRight } from "lucide-react";
import { Button } from "@base-ui/react";
import AuthContext from "@/store/AuthContext";

const Navbar = ({ onToggleSidebar, isSidebarOpen }) => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  return (
    <header className="sticky top-0 z-40 w-full glass-panel border-b border-border bg-background/80 backdrop-blur-md shrink-0">
      <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          {/* Sidebar Toggle — visible on all screen sizes when logged in */}
          {isLoggedIn && (
            <button
              type="button"
              onClick={onToggleSidebar}
              className="p-2 rounded-xl text-muted-text hover:text-foreground hover:bg-surface2 border border-transparent hover:border-border transition-all"
              aria-label="Toggle Navigation Sidebar"
              aria-expanded={isSidebarOpen}
            >
              <PanelRight
                className={`w-5 h-5 transition-transform duration-300 ${
                  isSidebarOpen ? "" : "rotate-180"
                }`}
              />
            </button>
          )}

          <div className="flex items-center gap-2">
            <img
              src="/logo.jpg"
              alt="Company Logo"
              className="h-8 w-auto object-contain"
            />
            <span className="text-lg font-bold tracking-tight text-foreground">
              Ejaztech LMS
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {!isLoggedIn && (
            <Button
              type="button"
              className="px-4 py-2 text-sm font-medium text-foreground hover:bg-surface2 border border-solid hover:border-border rounded-xl transition-all cursor-pointer"
            >
              <Link to="/auth">Sign In</Link>
            </Button>
          )}
          {!isLoggedIn && (
            <Button
              type="button"
              className="px-4 py-2 text-sm font-medium bg-foreground text-background hover:bg-foreground/90 rounded-xl transition-all cursor-pointer shadow-xs"
            >
              <Link to="/auth">Sign Up</Link>
            </Button>
          )}
          {isLoggedIn && (
            <Link
              to="/notification"
              className="relative p-2 rounded-xl text-muted-text hover:text-foreground hover:bg-surface2 border border-transparent hover:border-border transition-all cursor-pointer"
              aria-label="Notifications"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-foreground" />
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;