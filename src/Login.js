import { useNavigate } from "react-router";
import { fetchToken, setToken } from "./Auth";
import { useState } from "react";
import axios from "axios";
import { Button, InputGroup } from "rsuite";
import "rsuite/dist/rsuite.min.css";

// https://github.com/oyedeletemitope/login-authentication-with-react-and-FastAPI

const styles = {
  width: 300,
  marginBottom: 10,
};

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
        .then(function(response) {
          console.log(response.data, "response.data");
          if (response.data) {
            console.log(response.data);
            setToken(response.data.access_token);
            navigate("/posts");
          }
        })
        .catch(function(error) {
          console.log(error, "error");
        });
    }
  };

  return (
    <div style={{ minHeight: 800, marginTop: 30 }}>
      <h1>login page</h1>
      <div style={{ marginTop: 30 }}>
        {fetchToken() ? (
          <p>you are logged in</p>
        ) : (
          <div>
            <form>
              <InputGroup style={styles}>
                <InputGroup.Addon> Username</InputGroup.Addon>
                <input
                  size="md"
                  type="text"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </InputGroup>
              <InputGroup style={styles}>
                <InputGroup.Addon> Password</InputGroup.Addon>
                <input
                  size="md"
                  type="text"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </InputGroup>
              <div style={styles}>
                <Button appearance="primary" onClick={login}>
                  Login
                </Button>
              </div>{" "}
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
