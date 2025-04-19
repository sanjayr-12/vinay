import { useEffect, useRef, useState } from "react";
import Upload from "./Upload";
import Generate from "./Generate";
import { useUserStore } from "../store/Store";
import { Roles } from "../types/store.types";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const user = useUserStore((state) => state.user);

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
    
    
  const openUploadModal = () => {
    const modal = document.getElementById("my_modal_1") as HTMLDialogElement;
    modal?.showModal();
    };
    
     const openGenerateModel = () => {
       const model = document.getElementById("my_modal_2") as HTMLDialogElement;
       model?.showModal();
     };


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
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          {user?.roles.includes(Roles.ADMIN) && (
            <li>
              <a onClick={openUploadModal}>Upload</a>
            </li>
          )}
          <li>
            <a onClick={openGenerateModel}>Generate</a>
          </li>
        </ul>
      </div>
      <Upload />
      <Generate />
    </div>
  );
};

export default SideBar;
