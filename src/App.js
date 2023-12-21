import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./components/SignIn.jsx";
import Layout from "./components/Layout.jsx";
import SignInPage from "./components/SignInPage.jsx";
import SignUp from "./components/SignUp.jsx";
import Home from "./components/Home.jsx";
import SignUpPage from "./components/SignUpPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/home" element={<SignInPage />} />
          <Route path="/welcome" element={< SignUpPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
