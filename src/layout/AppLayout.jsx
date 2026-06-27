import { Outlet } from "react-router-dom";
import { useSidebarStore } from "@/store/useSidebarStore";
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  BarChart3,
  Settings,
  User,
} from "lucide-react";

const pages = [
  { path: "/", label: "Dashboard", icon: <LayoutDashboard /> },
  { path: "analytics", label: "Analytics", icon: <BarChart3 /> },
  { path: "users", label: "Users", icon: <Users /> },
  { path: "settings", label: "Settings", icon: <Settings /> },
  { path: "profile", label: "Profile", icon: <User /> },
];

function AppLayout() {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarContent className="mx-2">
          <h2 className="px-2 mt-2">NovaDash</h2>
          {pages.map((item) => (
            <NavLink
              to={item.path}
              key={item.path}
              className={({ isActive }) =>
                `flex gap-2 items-center w-full px-2 py-4 rounded-md ${isActive ? "bg-zinc-200 dark:bg-zinc-700 font-semibold" : ""}`
              }
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </NavLink>
          ))}
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
