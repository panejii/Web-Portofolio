import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Typography,
  Row,
  Col,
  Card,
  Statistic,
  List,
  Tag,
  Skeleton,
  Empty,
  Button,
} from "antd";
import {
  AppstoreOutlined,
  ToolOutlined,
  MailOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

import { getProjects } from "../../services/projectService";
import { getSkills } from "../../services/skillService";
import { getMessages } from "../../services/messageService";

const { Title, Text } = Typography;

const Dashboard = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [messages, setMessages] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [projectsData, skillsData, messagesData] = await Promise.all([
        getProjects(),
        getSkills(),
        getMessages(),
      ]);

      setProjects(projectsData);
      setSkills(skillsData);
      setMessages(messagesData);
    } catch (error) {
      console.error("Gagal memuat data dashboard:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const unreadCount = messages.filter((msg) => !msg.isRead).length;
  const recentMessages = [...messages]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 5);

  return (
    <>
      <Title level={2} style={{ marginBottom: 4 }}>
        Dashboard
      </Title>
      <Text type="secondary">Ringkasan konten portofolio kamu.</Text>

      <Row gutter={[16, 16]} style={{ marginTop: 24 }}>
        <Col xs={24} sm={12} lg={8}>
          <Card
            hoverable
            onClick={() => navigate("/admin/projects")}
            style={{ borderRadius: 12 }}
          >
            <Statistic
              title="Total Projects"
              value={projects.length}
              loading={loading}
              prefix={<AppstoreOutlined style={{ color: "#7c3aed" }} />}
              valueStyle={{ color: "#7c3aed" }}
            />
          </Card>
        </Col>

        <Col xs={24} sm={12} lg={8}>
          <Card
            hoverable
            onClick={() => navigate("/admin/skills")}
            style={{ borderRadius: 12 }}
          >
            <Statistic
              title="Total Skills"
              value={skills.length}
              loading={loading}
              prefix={<ToolOutlined style={{ color: "#0891b2" }} />}
              valueStyle={{ color: "#0891b2" }}
            />
          </Card>
        </Col>

        <Col xs={24} sm={12} lg={8}>
          <Card
            hoverable
            onClick={() => navigate("/admin/messages")}
            style={{ borderRadius: 12 }}
          >
            <Statistic
              title="Pesan Belum Dibaca"
              value={unreadCount}
              suffix={`/ ${messages.length}`}
              loading={loading}
              prefix={<MailOutlined style={{ color: "#dc2626" }} />}
              valueStyle={{ color: unreadCount > 0 ? "#dc2626" : "#16a34a" }}
            />
          </Card>
        </Col>
      </Row>

      <Card
        style={{ marginTop: 24, borderRadius: 12 }}
        title="Pesan Masuk Terbaru"
        extra={
          <Button
            type="link"
            onClick={() => navigate("/admin/messages")}
            icon={<ArrowRightOutlined />}
            iconPosition="end"
          >
            Lihat semua
          </Button>
        }
      >
        {loading ? (
          <Skeleton active paragraph={{ rows: 3 }} />
        ) : recentMessages.length === 0 ? (
          <Empty description="Belum ada pesan masuk" />
        ) : (
          <List
            dataSource={recentMessages}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  title={
                    <span>
                      {item.name}{" "}
                      {!item.isRead && <Tag color="red">Baru</Tag>}
                    </span>
                  }
                  description={item.message}
                />
                <Text type="secondary" style={{ whiteSpace: "nowrap" }}>
                  {new Date(item.createdAt).toLocaleDateString("id-ID")}
                </Text>
              </List.Item>
            )}
          />
        )}
      </Card>
    </>
  );
};

export default Dashboard;