import { Outlet } from "react-router-dom";
import { useSidebarStore } from "@/store/useSidebarStore";
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { NavLink } from "react-router-dom";
import { LayoutDashboard, Users, BarChart3, Settings } from "lucide-react";
import { useApp } from "@/context/AppContext";
import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
const pages = [
  { path: "/", label: "Dashboard", icon: <LayoutDashboard /> },
  { path: "analytics", label: "Analytics", icon: <BarChart3 /> },
  { path: "users", label: "Users", icon: <Users /> },
  { path: "settings", label: "Settings", icon: <Settings /> },
];

function AppLayout() {
  const { dispatch } = useApp();
  const navigate = useNavigate();

  function handleLogout() {
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  }

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarContent>
          <h2 className="px-2 mt-2">NovaDesk</h2>
          {pages.map((item) => (
            <NavLink
              to={item.path}
              key={item.path}
              className="flex gap-2 items-center w-full px-2 py-4"
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </NavLink>
          ))}
          <Button onClick={handleLogout} className="w-fit mx-2 my-4">
            Logout <LogOut />
          </Button>
        </SidebarContent>
      </Sidebar>
      <SidebarTrigger />
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </SidebarProvider>
  );
}

export default AppLayout;
