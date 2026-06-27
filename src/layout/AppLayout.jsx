import { Outlet } from "react-router-dom";
import { useSidebarStore } from "@/store/useSidebarStore";
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
  useSidebar,
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

function SidebarNav() {
  const { state } = useSidebar();

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>{state === "expanded" ? "NovaDash" : "ND"}</SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Console</SidebarGroupLabel>
          <SidebarMenu className="gap-2">
            {pages.map((item) => (
              <SidebarMenuItem key={item.path}>
                <SidebarMenuButton asChild>
                  <NavLink
                    to={item.path}
                    className="flex gap-2 items-center w-full px-2 py-4 rounded-md"
                  >
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

function AppLayout() {
  return (
    <SidebarProvider>
      <SidebarNav />
      <SidebarTrigger />
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </SidebarProvider>
  );
}

export default AppLayout;
