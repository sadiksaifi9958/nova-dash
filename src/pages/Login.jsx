import { useState } from "react";
import { Input } from "@/components/ui/input";
import { useApp } from "../context/AppContext";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useApp();
  const navigate = useNavigate();
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  function handleLogin() {
    let isValid = true;
    setEmailError("");
    setPasswordError("");

    if (!email.includes("@") || !email.includes(".")) {
      setEmailError("Please provide valid email address");
      isValid = false;
    }

    if (password.length < 6) {
      setPasswordError("Password must aleast 6 characters");
      isValid = false;
    }

    if (isValid) {
      dispatch({ type: "LOGIN", payload: { email } });
      navigate("/");
    }
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-muted">
      <Card className="w-full max-w-sm shadow-lg">
        <CardHeader>
          <CardTitle className="text-center">Login to NovaDesk</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p className="text-sm text-destructive">{emailError}</p>
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="text-sm text-destructive">{passwordError}</p>
          </div>
          <Button onClick={handleLogin}>Log in</Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default Login;
