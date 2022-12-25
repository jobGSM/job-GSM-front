import { Main, SignIn, SignUp } from "./Pages";
import { Header } from "./Components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Global.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/SignIn" element={<SignIn />}></Route>
          <Route path="/SignUp" element={<SignUp />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
