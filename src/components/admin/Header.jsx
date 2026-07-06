import { Layout, Typography } from "antd";

const { Header } = Layout;
const { Title } = Typography;

const AdminHeader = () => {
  return (
    <Header
      style={{
        background: "#fff",
        display: "flex",
        alignItems: "center",
        padding: "0 24px",
      }}
    >
      <Title level={4} style={{ margin: 0 }}>
        Portfolio Admin
      </Title>
    </Header>
  );
};

export default AdminHeader;