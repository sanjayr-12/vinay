import { logoutAPI } from "../apis/apiStore";
import { useUserStore } from "../store/Store";
import { Roles } from "../types/store.types";
import { useNavigate } from "react-router-dom";
import Upload from "./Upload";

const NavBar = () => {
  const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await logoutAPI();
      setUser({ _id: undefined, name: undefined, imageUrl: undefined, roles: [] });
      navigate("/login", { replace: true });
      console.log(response.message);
    } catch (error) {
      console.log(error);
    }
  };

  const openUploadModal = () => {
    const modal = document.getElementById("my_modal_1") as HTMLDialogElement;
    modal?.showModal();
  };

  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Vinay</a>
        </div>
        <div className="flex-none items-end justify-end">
          <ul className="menu menu-horizontal px-1">
            {user?.roles.includes(Roles.ADMIN) && (
              <li>
                <a onClick={openUploadModal}>Upload</a>
              </li>
            )}
            <li>
              <p>{user?.name}</p>
            </li>
          </ul>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img alt="User profile" src={user?.imageUrl} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">Profile</a>
              </li>
              <li onClick={handleLogout}>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Upload />
    </>
  );
};

export default NavBar;
