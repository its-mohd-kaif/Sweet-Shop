import NavBar from "./Components/NavBar";
import Signup from "./Components/Signup";
import Signin from "./Components/Signin";
import { Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";
import CartPage from "./Components/CartPage";
export const noteContext = createContext();
export const displayContext = createContext();

function App() {
  const [data, setData] = useState([]);
  const [display, setDisplay] = useState([]);
  return (
    <div>
      <noteContext.Provider value={{ data, setData }}>
        <displayContext.Provider value={{ display, setDisplay }}>
          <Routes>
            <Route path="/" element={<NavBar />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Signin" element={<Signin />} />
            <Route path="/Cart" element={<CartPage />} />
          </Routes>
        </displayContext.Provider>
      </noteContext.Provider>
    </div>
  );
}

export default App;
