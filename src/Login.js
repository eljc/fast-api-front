import { useNavigate } from "react-router";
import { fetchToken, setToken } from "./Auth";
import { useState } from "react";
import axios from "axios";

// https://github.com/oyedeletemitope/login-authentication-with-react-and-FastAPI

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //check to see if the fields are not empty
  const login = () => {
    if ((username === "") & (password === "")) {
      return;
    } else {
      // make api call to our backend. we'll leave thisfor later
      axios
        .post("http://localhost:8000/api/auth/login", {
          email: username,
          password: password,
        })
        .then(function (response) {
          console.log(response.data, "response.data");
          if (response.data) {
            console.log(response.data);
            setToken(response.data.access_token);
            navigate("/posts");
          }
        })
        .catch(function (error) {
          console.log(error, "error");
        });
    }
  };

  return (
    <div style={{ minHeight: 800, marginTop: 30 }}>
      <h1>login page</h1>
      <div style={{ marginTop: 30 }}>
        {fetchToken() ? (
          <p>you are logged in {fetchToken()}</p>
        ) : (
          <div>
            <form>
              <label style={{ marginRight: 10 }}>Username</label>
              <input
                type="text"
                onChange={(e) => setUsername(e.target.value)}
              />

              <label style={{ marginRight: 10 }}>Password</label>
              <input
                type="text"
                onChange={(e) => setPassword(e.target.value)}
              />

              <button type="button" onClick={login}>
                Login
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
