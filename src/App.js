import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Coins from "./components/Coins";
import Exchanges from "./components/Exchanges";
import CoinDetails from "./components/CoinDetails";
import Footer from "./components/Footer";
import SignIn from "./Authentication/SignIn";
import SignUp from "./Authentication/SignUp";
import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebase";

// firebase.auth().currentUser

export const MainContext = createContext();
function App() {
  // const navigate = useNavigate();
  const [user, setUser] = useState();
  const [mainData, setMainData] = useState({});
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user !== null) {
        setUser(user);
        console.log("User Logged In ");
      } else {
        console.log("No user found");
      }
    });
  }, [user]);

  // alpha code //

  // const { pathname } = useLocation();
  return (
    <MainContext.Provider value={[mainData, setMainData]}>
      <Router>
        <div
          style={{
            background: "black",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            minHeight: "100vh",
          }}
        >
          {user ? (
            <>
              <Header />
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/coins" element={<Coins />} />
                <Route path="/exchanges" element={<Exchanges />} />
                <Route path="/coin/:id" element={<CoinDetails />} />
              </Routes>
              <Footer />
            </>
          ) : (
            <Routes>
              <Route path="/" element={<SignUp />} />
              <Route path="/signin" element={<SignIn />} />
            </Routes>
          )}
        </div>
      </Router>
    </MainContext.Provider>
  );
}
// {location !== "/signin" && location !== "/signup" && <Footer />}

export default App;
