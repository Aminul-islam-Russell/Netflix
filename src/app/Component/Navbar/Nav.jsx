import { NavLink } from "react-router-dom";

const NAV_LINKS = [
  // {
  //   path: '/',
  //   name: 'HiUser'
  // },
  {
    path: '/',
    name: 'Home',
  },
  {
    path: '/about' ,
    name: 'About',
  },
  {
    path:  '/users' ,
    name: 'Users',
  },
];

function Navbar() {
  return (
    <div className="text-3xl text-center mt-10">
      <h1>Navbar</h1>

      <div>
        {NAV_LINKS.map(item => (
             <NavLink
             style={({ isActive }) => {
               return {
                 color: isActive ? "red" : "",
               };
             }}
             to={item?.path}
             key={item?.path}

           >  ||{" "}

             {item?.name}
           </NavLink> 
        ))}
      </div>
    </div>
  )
}

export default Navbar
