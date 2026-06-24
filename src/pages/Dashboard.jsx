import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Users, DollarSign, Activity, TrendingUp } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const stats = [
  { title: "Total Users", value: "8,492", icon: <Users /> },
  { title: "Total Revenue", value: "$42,300", icon: <DollarSign /> },
  { title: "Active Sessions", value: "1,204", icon: <Activity /> },
  { title: "Conversion Rate", value: "3.8%", icon: <TrendingUp /> },
];

const revenueData = [
  { month: "Jan", revenue: 4000 },
  { month: "Feb", revenue: 3200 },
  { month: "Mar", revenue: 5100 },
  { month: "Apr", revenue: 4700 },
  { month: "May", revenue: 6200 },
  { month: "Jun", revenue: 7300 },
];

function Dashboard() {
  return (
    <div className="w-full">
      <div className="w-full grid grid-cols-4 gap-4 mb-8">
        {stats.map((item) => (
          <Card key={item.title}>
            <CardHeader>
              <span>{item.icon}</span>
              <CardTitle>{item.title}</CardTitle>
            </CardHeader>
            <CardContent>{item.value}</CardContent>
          </Card>
        ))}
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Revenue Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={revenueData}>
              <XAxis dataKey="month"></XAxis>
              <YAxis></YAxis>
              <Tooltip></Tooltip>
              <Bar dataKey="revenue" fill="var(--chart-4)"></Bar>
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}

export default Dashboard;
