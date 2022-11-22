import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Coins from "./components/Coins";
import Exchanges from "./components/Exchanges";
import CoinDetails from "./components/CoinDetails";
import Footer from "./components/Footer";
import SignIn from "./Authentication/SignIn";
import SignUp from "./Authentication/SignUp";
import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

export const MainContext = createContext();
function App() {
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

export default App;
