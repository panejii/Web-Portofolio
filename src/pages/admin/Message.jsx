import { useEffect, useState } from "react";
import {
  Typography,
  Table,
  Tag,
  Button,
  Popconfirm,
  Drawer,
  Space,
  message,
} from "antd";
import {
  EyeOutlined,
  DeleteOutlined,
  MailOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

import {
  getMessages,
  markMessageAsRead,
  deleteMessage,
} from "../../services/messageService";

const { Title, Paragraph, Text } = Typography;

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState(null);

  const fetchMessages = async () => {
    setLoading(true);
    try {
      const data = await getMessages();
      setMessages(data);
    } catch (error) {
      message.error("Gagal memuat pesan masuk");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const openMessage = async (record) => {
    setSelectedMessage(record);
    setDrawerOpen(true);

    if (!record.isRead) {
      try {
        await markMessageAsRead(record._id);
        setMessages((prev) =>
          prev.map((m) => (m._id === record._id ? { ...m, isRead: true } : m))
        );
      } catch (error) {
        // gagal update status baca tidak perlu mengganggu pengalaman lihat pesan
        console.error(error);
      }
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteMessage(id);
      message.success("Pesan berhasil dihapus");
      setDrawerOpen(false);
      fetchMessages();
    } catch (error) {
      message.error("Gagal menghapus pesan");
    }
  };

  const columns = [
    {
      title: "Status",
      dataIndex: "isRead",
      key: "isRead",
      width: 100,
      render: (isRead) =>
        isRead ? (
          <Tag color="default" icon={<CheckCircleOutlined />}>
            Dibaca
          </Tag>
        ) : (
          <Tag color="red" icon={<MailOutlined />}>
            Baru
          </Tag>
        ),
    },
    {
      title: "Pengirim",
      dataIndex: "name",
      key: "name",
      render: (name, record) => (
        <span style={{ fontWeight: record.isRead ? 400 : 700 }}>{name}</span>
      ),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Pesan",
      dataIndex: "message",
      key: "message",
      ellipsis: true,
    },
    {
      title: "Tanggal",
      dataIndex: "createdAt",
      key: "createdAt",
      width: 150,
      render: (date) => new Date(date).toLocaleDateString("id-ID"),
      sorter: (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
    },
    {
      title: "Aksi",
      key: "action",
      width: 100,
      render: (_, record) => (
        <Space>
          <Button
            icon={<EyeOutlined />}
            size="small"
            onClick={() => openMessage(record)}
          />
          <Popconfirm
            title="Hapus pesan ini?"
            onConfirm={() => handleDelete(record._id)}
            okText="Hapus"
            cancelText="Batal"
            okButtonProps={{ danger: true }}
          >
            <Button icon={<DeleteOutlined />} size="small" danger />
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <>
      <Title level={2}>Messages</Title>

      <Table
        columns={columns}
        dataSource={messages}
        rowKey="_id"
        loading={loading}
        pagination={{ pageSize: 8 }}
      />

      <Drawer
        title="Detail Pesan"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        width={400}
        extra={
          selectedMessage && (
            <Popconfirm
              title="Hapus pesan ini?"
              onConfirm={() => handleDelete(selectedMessage._id)}
              okText="Hapus"
              cancelText="Batal"
              okButtonProps={{ danger: true }}
            >
              <Button icon={<DeleteOutlined />} danger>
                Hapus
              </Button>
            </Popconfirm>
          )
        }
      >
        {selectedMessage && (
          <>
            <Text type="secondary">Nama</Text>
            <Paragraph strong>{selectedMessage.name}</Paragraph>

            <Text type="secondary">Email</Text>
            <Paragraph strong>{selectedMessage.email}</Paragraph>

            <Text type="secondary">Tanggal</Text>
            <Paragraph strong>
              {new Date(selectedMessage.createdAt).toLocaleString("id-ID")}
            </Paragraph>

            <Text type="secondary">Pesan</Text>
            <Paragraph>{selectedMessage.message}</Paragraph>
          </>
        )}
      </Drawer>
    </>
  );
};

export default Messages;