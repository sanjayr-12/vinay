import { useEffect, useState } from "react";
import { getAllUsers } from "../apis/apiStore";
import { Roles, User } from "../types/store.types";

export const UsersCard = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const users = await getAllUsers();
        setUsers(users.data);
        console.log(users);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className="mt-5 flex justify-center items-center flex-wrap gap-10">
      {users.length > 0 &&
        users.map((user: User) => {
          return (
            <div
              className={`card w-96 ${
                user.roles.includes(Roles.ROOT) ||
                user.roles.includes(Roles.ADMIN)
                  ? "bg-green-700 text-white"
                  : "bg-yellow-700 text-white"
              }`}
              key={user._id}
            >
              <div className="card-body">
                <h2 className="card-title">{user.name}</h2>
                <p>Roles: {user.roles.join(", ")}</p>
                {!user.roles.includes(Roles.ADMIN) &&
                !user.roles.includes(Roles.ROOT) ? (
                  <div className="card-actions justify-end">
                    <button className="btn">Make em Admin</button>
                  </div>
                ) : (
                  <div className="card-actions justify-end">
                    <button className="btn" disabled>
                      {user.roles.includes(Roles.ROOT)
                        ? "Yo i am king"
                        : "Yo i am admin"}
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
    </div>
  );
};
