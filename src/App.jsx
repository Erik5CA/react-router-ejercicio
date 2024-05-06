import { Routes } from "react-router-dom";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { Modelo } from "./reyes/Modelo";
import Nav from "./components/Nav";
import Error404 from "./components/Error404";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/reyes/:rey" element={<Modelo />}></Route>
        <Route path="*" element={<Error404 />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
