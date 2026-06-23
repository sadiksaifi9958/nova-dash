import { useApp } from "@/context/AppContext";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

function Profile() {
  const { state, dispatch } = useApp();
  const navigate = useNavigate();

  function handleLogout() {
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4 items-center">
        <Avatar>
          <AvatarFallback>
            {state.user?.email?.[0]?.toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div>{state.user?.email}</div>
      </div>
      <Button onClick={handleLogout} className="w-fit mx-2 my-4">
        Logout <LogOut />
      </Button>
    </div>
  );
}

export default Profile;
