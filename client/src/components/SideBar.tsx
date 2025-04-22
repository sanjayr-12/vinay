import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../store/Store";
import { Roles } from "../types/store.types";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const users = useUserStore((state) => state.user);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="drawer">
      <input
        id="my-drawer"
        type="checkbox"
        className="drawer-toggle"
        checked={isOpen}
        onChange={() => setIsOpen(!isOpen)}
      />
      <div className="drawer-content">
        <label htmlFor="my-drawer" className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </label>
      </div>
      <div className="drawer-side max-w-40 z-[9999]" ref={sidebarRef}>
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
          onClick={() => setIsOpen(false)}
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          <li>
            <a onClick={() => navigate("/")}>Home</a>
          </li>
          {users?.roles.includes(Roles.ROOT) && (
            <li
              onClick={() => {
                navigate("/users");
              }}
            >
              <a>Users</a>
            </li>
          )}
          <li onClick={() => navigate("/analysis")}>
            <a>Site Analysis</a>
          </li>
          <li onClick={() => navigate("/updates")}>
            <a>Updates</a>
          </li>
          <li
            onClick={() => {
              navigate("/design");
            }}
          >
            <a>Design Details</a>
          </li>
          <li onClick={() => navigate("/interior")}>
            <a>Interior Design</a>
          </li>
          <li
            onClick={() => {
              navigate("/feedback");
            }}
          >
            <a>Feedback</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
