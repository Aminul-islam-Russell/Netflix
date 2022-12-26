import { Link, Outlet } from "react-router-dom";

const USERS = [
  {
    id: 1,
    name: "Russell",
  },
  {
    id: 2,
    name: "Raiyan",
  },
  {
    id: 3,
    name: "Masnun",
  },
];

  function UsersPage() {
  return (
    <div className="text-3xl text-center">
      <h1 >Users</h1>
      <ul >
        {USERS.map(user => (
          <li  key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>

        ))}

      </ul>     

      <Outlet />

    </div>
  );
}

export default UsersPage;
