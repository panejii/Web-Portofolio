import { Layout, Menu } from "antd";
import {
  DashboardOutlined,
  AppstoreOutlined,
  ToolOutlined,
  MailOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

import { useNavigate } from "react-router-dom";

const { Sider } = Layout;

const AdminSidebar = () => {
  const navigate = useNavigate();

  return (
    <Sider theme="dark">
      <div
        style={{
          color: "white",
          fontSize: 22,
          textAlign: "center",
          padding: 20,
          fontWeight: "bold",
        }}
      >
        Admin
      </div>

      <Menu
        theme="dark"
        mode="inline"
        onClick={({ key }) => navigate(key)}
        items={[
          {
            key: "/admin",
            icon: <DashboardOutlined />,
            label: "Dashboard",
          },
          {
            key: "/admin/projects",
            icon: <AppstoreOutlined />,
            label: "Projects",
          },
          {
            key: "/admin/skills",
            icon: <ToolOutlined />,
            label: "Skills",
          },
          {
            key: "/admin/messages",
            icon: <MailOutlined />,
            label: "Messages",
          },
          {
            key: "/",
            icon: <LogoutOutlined />,
            label: "Logout",
          },
        ]}
      />
    </Sider>
  );
};

export default AdminSidebar;