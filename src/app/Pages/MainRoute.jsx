import { auth } from "../utils/firebase";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Component/Footer/Footer";
import Header from '../Component/Header/Header';
import { useDispatch } from "react-redux";
import { updateUser } from "../redux/slices/authSlice";
// import Navbar from "../Component/Navbar/Nav";


function MainRoute() {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) =>{
                if(!authUser)return dispatch(updateUser(null));
                dispatch(updateUser({
                  ...authUser?.providerData[0]
                }));
    })  
    return () => {
      unsubscribe()
    }
  }, [])



  return (
    <>
    <Header />

  
   
      <Outlet />
      {/* <Footer /> */}
    </>
  )
}

export default MainRoute