import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // icons for toggle

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username") || "Guest";
  const isLoggedIn = !!token;

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
  const [notificationCount] = useState(Math.floor(Math.random() * 10) + 1); // dummy count

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    navigate("/login", { replace: true });
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`bg-gradient-to-br from-pink-700 via-purple-600 to-indigo-400 p-4 fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center max-w-6xl px-4 sm:px-6 lg:px-8">
        <NavLink
          to="/"
          className="text-white text-lg sm:text-xl font-bold no-underline"
        >
          BMDL
        </NavLink>

        {/* Hamburger menu toggle (mobile) */}
        <button
          className="sm:hidden text-white text-2xl"
          onClick={() => setShowMenu((prev) => !prev)}
        >
          {showMenu ? <FaTimes /> : <FaBars />}
        </button>

        {/* Links (Desktop) */}
        <div className="hidden sm:flex items-center gap-6">
          <NavLink
            to="/landing"
            className={({ isActive }) =>
              `text-white no-underline px-4 py-2 rounded text-sm ${
                isActive ? "bg-white/10 font-bold" : "hover:bg-white/10"
              }`
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `text-white no-underline px-4 py-2 rounded text-sm ${
                isActive ? "bg-white/10 font-bold" : "hover:bg-white/10"
              }`
            }
          >
            Profile
          </NavLink>
          {isLoggedIn ? (
            <>
              <span className="text-white text-sm flex items-center gap-1">
                Welcome, {username}
                <span className="bg-red-600 text-white text-xs rounded-full px-2 py-0.5 ml-1">
                  {notificationCount}
                </span>
              </span>
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white px-4 py-2 rounded text-sm hover:bg-red-700 transition-colors"
              >
                Logout
              </button>
            </>
          ) : (
            <NavLink
              to="/signup"
              className="text-white px-4 py-2 rounded hover:bg-white/10 text-sm"
            >
              Sign Up
            </NavLink>
          )}
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {showMenu && (
        <div className="sm:hidden mt-4 space-y-4 px-4">
          <NavLink
            to="/landing"
            className="block text-white no-underline px-4 py-2 rounded text-sm hover:bg-white/10"
            onClick={() => setShowMenu(false)}
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/profile"
            className="block text-white no-underline px-4 py-2 rounded text-sm hover:bg-white/10"
            onClick={() => setShowMenu(false)}
          >
            Profile
          </NavLink>
          {isLoggedIn ? (
            <>
              <span className="block text-white text-sm">
                Welcome, {username}
                <span className="bg-red-600 text-white text-xs rounded-full px-2 py-0.5 ml-2">
                  {notificationCount}
                </span>
              </span>
              <button
                onClick={() => {
                  handleLogout();
                  setShowMenu(false);
                }}
                className="w-full bg-red-600 text-white px-4 py-2 rounded text-sm hover:bg-red-700 transition-colors"
              >
                Logout
              </button>
            </>
          ) : (
            <NavLink
              to="/signup"
              className="block text-white no-underline px-4 py-2 rounded text-sm hover:bg-white/10"
              onClick={() => setShowMenu(false)}
            >
              Sign Up
            </NavLink>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
