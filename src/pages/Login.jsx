import { useState } from "react";
import { Input } from "@/components/ui/input";
import { useApp } from "../context/AppContext";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useApp();
  const navigate = useNavigate();

  function handleLogin() {
    dispatch({ type: "LOGIN", payload: { email } });
    navigate("/");
  }
  return (
    <div>
      <Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={handleLogin}>Log in</Button>
    </div>
  );
}

export default Login;
