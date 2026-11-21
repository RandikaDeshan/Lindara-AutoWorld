import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout_Page from "./pages/Layout_Page";
import Home_Page from "./pages/Home_Page";
import About_Us_Page from "./pages/About_Us_Page";
import Parts_Page from "./pages/Parts_Page";
import Find_By_Vehicle_Page from "./pages/Find_By_Vehicle_Page";
import Brands_Page from "./pages/Brands_Page";
import Contact_Page from "./pages/Contact_Page";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout_Page />}>
            <Route index element={<Home_Page />}></Route>
            <Route path="/parts" element={<Parts_Page />}></Route>
            <Route path="/vihecle" element={<Find_By_Vehicle_Page />}></Route>
            <Route path="/brands" element={<Brands_Page />}></Route>
            <Route path="/about" element={<About_Us_Page />}></Route>
            <Route path="/contact" element={<Contact_Page />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
