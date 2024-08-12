import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import link from "../../env";

const Login = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${link()}/api/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      if (res.ok) {
        const data = await res.json();
        localStorage.setItem("authToken", data.token);
        navigate("/main");
      } else {
        console.error("Login Failed");
      }
      setEmail("");
      setPassword("");
    } catch (err) {
      console.error("error during:", err);
    }
  };
  return (
    <div className="login">
      <form onSubmit={submitHandler}>
        <div className="img">
          <img src={require("../../assets/logo.png")} alt="logo" />
        </div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="البريد الالكتروني"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="كلمة المرور"
        />
        <button type="submit">الدخول</button>
      </form>
    </div>
  );
};

export default Login;
