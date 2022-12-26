// import "./App.css";

// import Port from "./app/Component/Port/words";
// import { Routes, Route } from "react-router-dom";
// import AboutPage from "./app/Pages/AboutPage";
// import HomePage from "./app/Pages/HomePage";
// import MainRoute from "./app/Pages/MainRoute";
// import NotFound from "./app/Pages/NotFound";
// import UserPage from "./app/Pages/UserPage";
// import UsersPage from "./app/Pages/UsersPage";
// import { Provider } from "react-redux";
// import { store } from "../src/app/redux/store";

// function App() {
//   return (
//     <>
//       <Provider store={store}>
//         {/* <Header /> */}
//         <Routes>
//           <Route path="/" element={<MainRoute />}>
//             <Route index element={<HomePage />} />
//             {/* <Route path="/" element={<HomePage />} /> */}
//             <Route path="about" element={<AboutPage />} />
//             <Route path="users" element={<UsersPage />}>
//               <Route
//                 index
//                 element={
//                   <main style={{ padding: "1rem" }}>
//                     <p>Select an User</p>
//                   </main>
//                 }
//               />
//               <Route path=":userId" element={<UserPage />} />
//             </Route>

//             <Route path="*" element={<NotFound />} />
//           </Route>
//         </Routes>
//       </Provider>

//       {/* <div>
//         <Header />
//         <Port />
//       </div> */}
//     </>
//   );
// }

// export default App;

import "./App.css";
import { Provider } from "react-redux";
import { store } from "./app/redux/store";
import Pages from "./app/Pages";

function App() {
  return (
    <Provider store={store}>
      <Pages />
    </Provider>
  );
}

export default App;
