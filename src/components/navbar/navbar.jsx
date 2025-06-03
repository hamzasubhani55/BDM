import { useEffect, useState, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username") || "Guest";
  const avatar =
    localStorage.getItem("avatar") || "https://i.pravatar.cc/150?u=temp";
  const isLoggedIn = !!token;

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [notificationCount] = useState(Math.floor(Math.random() * 10) + 1);

  const dropdownRef = useRef(null);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("avatar");
    setShowDropdown(false);
    navigate("/login", { replace: true });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Example: navigate to a search page
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY <= lastScrollY || currentScrollY <= 50);
      setLastScrollY(currentScrollY);
    };

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
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
            Home
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `text-white no-underline px-4 py-2 rounded text-sm ${
                isActive ? "bg-white/10 font-bold" : "hover:bg-white/10"
              }`
            }
          >
            Contact
          </NavLink>

           <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-white no-underline px-4 py-2 rounded text-sm ${
                isActive ? "bg-white/10 font-bold" : "hover:bg-white/10"
              }`
            }
          > 
            About
          </NavLink>

          {/* Search (Desktop) */}
          <form onSubmit={handleSearch} className="hidden sm:block flex-1 mx-6">
            <input
              type="text"
              placeholder="Search..."
              className="w-60 px-3 py-2 rounded-full bg-white/20 text-white placeholder-white/80 outline-none focus:bg-white/30 transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>

          {isLoggedIn ? (
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setShowDropdown((prev) => !prev)}
                className="flex items-center gap-2 text-white text-sm"
              >
                <img
                  src={avatar}
                  alt="avatar"
                  className="w-9 h-9 rounded-full object-cover border-2 border-white"
                />
                <span className="hidden sm:inline">Hi, {username}</span>
              </button>

              {showDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded shadow-lg z-50 py-2 text-sm text-gray-800">
                  <div className="px-4 py-2 font-semibold border-b">
                    Options
                  </div>
                  <NavLink
                    to="/profile"
                    onClick={() => setShowDropdown(false)}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    View Profile
                  </NavLink>
                  <NavLink
                    to="/settings"
                    onClick={() => setShowDropdown(false)}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Settings
                  </NavLink>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
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
          {/* Search (Mobile) */}
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-3 py-2 rounded bg-white/20 text-white placeholder-white/80 outline-none focus:bg-white/30 transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>

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
              <div className="flex items-center gap-2 text-white text-sm">
                <img
                  src={avatar}
                  alt="avatar"
                  className="w-8 h-8 rounded-full object-cover border-2 border-white"
                />
                <span>Hi, {username}</span>
                <span className="bg-red-600 text-white text-xs rounded-full px-2 py-0.5 ml-1">
                  {notificationCount}
                </span>
              </div>
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
