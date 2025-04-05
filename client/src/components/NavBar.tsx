import { useUserStore } from "../store/userStore";
import { Roles } from "../types/store.types";

const NavBar = () => {
  const user = useUserStore((state) => state.user);

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Vinay</a>
      </div>
      <div className="flex-none items-end justify-end">
        <ul className="menu menu-horizontal px-1">
          {user?.roles.includes(Roles.ADMIN) && (
            <li>
              <a>Upload</a>
            </li>
          )}
          <li>
            <p>{user?.name}</p>
          </li>
        </ul>
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            <img alt="user profile image" src={user?.imageUrl} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
