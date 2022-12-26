//  import { useNavigate } from "react-router-dom";
// // import AboutPage from "./AboutPage";
// // import UsersPage from "./UsersPage";

// function HomePage() {
//   const navigate = useNavigate();
//   const Iknow = () => {
//     navigate("/about");
//   };

//   return (
//     <>
//        {/* <Link to="/about">About</Link> */}
//       <div className="text-3xl text-center mt-10">
//         HomePage
     
//         <br />
//         <button onClick={Iknow}>HaHa</button>
//       </div>

      
//     </>
//   );
// }

// export default HomePage;


import Navbar from "../Component/Navbar/Nav"
import AboutPage from "./AboutPage";
import UserPage from "./UserPage";
import UsersPage from "./UsersPage";

function HomePage() {
  
    return (
        <>
       
            <Navbar />
            <AboutPage />
            <UserPage />
            <UsersPage />
            
        </>
    )
}

export default HomePage






