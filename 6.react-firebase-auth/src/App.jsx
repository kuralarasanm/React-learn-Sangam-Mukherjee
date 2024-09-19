import { Link, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import AuthPage from "./pages/private-route";
import ProfilePage from "./pages/profile";

function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold sm:text-5xl ms-10">firebase auth</h1>
      <div className="ms-10 mt-4">
        <Link to="/login" className="text-green-400 ms-2 font-bold text-3xl  ">-Login</Link>
        <Link to="/register" className="text-lime-300 ms-2 font-bold text-3xl  ">-Register</Link>
      </div>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/profile"
          element={
            <AuthPage>
              <ProfilePage />
            </AuthPage>
          }
        />
      </Routes>
    </div>
  );
}

export default App;