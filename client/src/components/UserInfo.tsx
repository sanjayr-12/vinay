import { useEffect, useState } from "react";
import { getUserInfo } from "../apis/apiStore";
import { User } from "../types/store.types";

const UserInfo = () => {
  const [userInfo, setUserInfo] = useState<User | undefined>(undefined);
  useEffect(() => {
    (async () => {
      try {
        const response = await getUserInfo();
        setUserInfo(response.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <dialog id="user_info_modal" className="modal">
      <div className="modal-box">
        {userInfo && (
          <div className="card-body items-center text-center">
            <div className="avatar">
              <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={userInfo.imageUrl} alt="user-img" />
              </div>
            </div>
            <h2 className="card-title mt-4">{userInfo.name}</h2>
            <div className="badge badge-primary mt-2">
              {userInfo.roles
                .map((role) =>
                  role === "USER" ? "MEMBER" : role.toUpperCase()
                )
                .join(" | ")}
            </div>
          </div>
        )}
        <div className="modal-action">
          <form method="dialog">
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default UserInfo;
