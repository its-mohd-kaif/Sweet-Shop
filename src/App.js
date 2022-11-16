import NavBar from "./Components/NavBar";
import Signup from "./Components/Signup";
import Signin from "./Components/Signin";
import { Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";
import CartPage from "./Components/CartPage";
export const noteContext = createContext();

function App() {
  const [data, setData] = useState([]);
  return (
    <div>
      <noteContext.Provider value={{ data, setData }}>
          <Routes>
            <Route path="/" element={<NavBar />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Signin" element={<Signin />} />
            <Route path="/Cart" element={<CartPage />} />
          </Routes>
      </noteContext.Provider>
    </div>
  );
}

export default App;
