import { 
  Routes, 
  Route, 
} from "react-router-dom";


import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import MainRoute from "./MainRoute";
 import UserPage from "./UserPage";
// import RoutesWrapper from "./RoutesWrapper";
// import SingleProduct from "./SingleProduct";
// import AboutPage from "./AboutPage";
// import UserPage from "./UserPage";

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<MainRoute />}>
        <Route index element={<HomePage />} />

        <Route path="user/:id" element={<UserPage />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem", textAlign: "center" }}>
              <p>404 Page not found</p>
            </main>
          }
        />
        <Route path="login" element={<LoginPage /> }  />
        console.log(login)
      </Route>
    </Routes>
  );
}

export default Pages;
