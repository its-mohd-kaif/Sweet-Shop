import NavBar from "./Components/NavBar";
import Signup from "./Components/Signup";
import Signin from "./Components/Signin";
import { Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";
import CartPage from "./Components/CartPage";
import About from "./Components/About";
import Contact from "./Components/Contact";
// noteContext Ror handling Products data
export const noteContext = createContext();
// textContext For handling Increase Decrease size of Text
export const textContext = createContext();

function App() {
  const [data, setData] = useState([]);
  const [text, setText] = useState("initial");
  return (
    <div>
      <noteContext.Provider value={{ data, setData }}>
        <textContext.Provider value={{ text, setText }}>
          <Routes>
            <Route path="/" element={<NavBar />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Signin" element={<Signin />} />
            <Route path="/Cart" element={<CartPage />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </textContext.Provider>
      </noteContext.Provider>
    </div>
  );
}

export default App;
