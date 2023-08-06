import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import { RequireToken } from "./Auth";
import Posts from "./Posts";
import Profile from "./Profile";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/posts"
          element={
            <RequireToken>
              <Posts />
            </RequireToken>
          }
        />
        <Route
          path="/profile"
          element={
            <RequireToken>
              <Profile />
            </RequireToken>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
