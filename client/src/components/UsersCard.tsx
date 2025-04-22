import { useEffect, useState } from "react";
import { getAllUsers } from "../apis/apiStore";
import { Roles, User } from "../types/store.types";
// import toast, { Toaster } from "react-hot-toast";
import Loading from "../utils/Loading";

export const UsersCard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const users = await getAllUsers();
        setUsers(users.data);
        console.log(users);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) {
    return <Loading />;
  }

  // const handleUserAction = async () => {
  //   toast(
  //     "Hold your horses! 🐎 This admin-making feature is still in development... Maybe next year? 🎭",
  //     {
  //       icon: "🎪",
  //     }
  //   );
  // };

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
                <p>
                  Roles:{" "}
                  {user.roles
                    .map((role) => (role === Roles.USER ? "MEMBER" : role))
                    .join(", ")}
                </p>
                {/* {!user.roles.includes(Roles.ADMIN) &&
                !user.roles.includes(Roles.ROOT) ? (
                  <div className="card-actions justify-end">
                    <button className="btn" onClick={handleUserAction}>
                      Make em Admin
                    </button>
                  </div>
                ) : (
                  <div className="card-actions justify-end">
                    <button className="btn" disabled>
                      {user.roles.includes(Roles.ROOT)
                        ? "Yo i am king"
                        : "Yo i am admin"}
                    </button>
                  </div>
                )} */}
              </div>
            </div>
          );
        })}
      {/* <Toaster /> */}
    </div>
  );
};
