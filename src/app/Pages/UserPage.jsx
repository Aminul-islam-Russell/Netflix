import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
// import { useNavigate} from "react-router-dom";


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

function UserPage() {
  // let navigate = useNavigate();
  const [user, setUser] = useState(null);
  let params = useParams();

  useEffect(() => {
    const user = USERS.find((user) => user.id === parseInt(params.userId));
    setUser(user);
  }, [params?.userId]);

  return (
    <>
      <div className="text-center">
        <br />
        {/* <h1>Single User {params.userId}</h1> */}
        <div>
          {user? (
            <>
            <h3>Single User id: {params?.userId}</h3>
          <h3>Single User name: {user?.name}</h3>
            </>
          ) : (
            <h1>User Not Found .....</h1>
          )}
          
        </div>
        <br />
        <Link to="/users">Back to Users</Link>
      </div>
    </>
  );
}

export default UserPage;
