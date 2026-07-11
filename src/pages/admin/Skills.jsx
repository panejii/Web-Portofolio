import { useEffect, useState } from "react";
import {
  Typography,
  Table,
  Button,
  Tag,
  Avatar,
  Popconfirm,
  Modal,
  Form,
  Input,
  InputNumber,
  Space,
  message,
} from "antd";
import {
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  ToolOutlined,
} from "@ant-design/icons";

import {
  getSkills,
  createSkill,
  updateSkill,
  deleteSkill,
} from "../../services/skillService";

const { Title } = Typography;

const categoryColors = {
  Framework: "geekblue",
  Language: "green",
  "Design App": "magenta",
  "Code Editor": "orange",
  Repository: "cyan",
  "Javascript Runtime": "gold",
};

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);
  const [editingSkill, setEditingSkill] = useState(null);
  const [form] = Form.useForm();

  const fetchSkills = async () => {
    setLoading(true);
    try {
      const data = await getSkills();
      setSkills(data);
    } catch (error) {
      message.error("Gagal memuat data skill");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  const openCreateModal = () => {
    setEditingSkill(null);
    form.resetFields();
    setModalOpen(true);
  };

  const openEditModal = (skill) => {
    setEditingSkill(skill);
    form.setFieldsValue(skill);
    setModalOpen(true);
  };

  const handleDelete = async (id) => {
    try {
      await deleteSkill(id);
      message.success("Skill berhasil dihapus");
      fetchSkills();
    } catch (error) {
      message.error("Gagal menghapus skill");
    }
  };

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      setSubmitting(true);

      if (editingSkill) {
        await updateSkill(editingSkill._id, values);
        message.success("Skill berhasil diperbarui");
      } else {
        await createSkill(values);
        message.success("Skill berhasil ditambahkan");
      }

      setModalOpen(false);
      fetchSkills();
    } catch (error) {
      if (error?.errorFields) return;
      message.error("Gagal menyimpan skill");
    } finally {
      setSubmitting(false);
    }
  };

  const columns = [
    {
      title: "Icon",
      dataIndex: "imageUrl",
      key: "imageUrl",
      width: 70,
      render: (url) => <Avatar src={url} icon={<ToolOutlined />} shape="square" />,
    },
    {
      title: "Nama Skill",
      dataIndex: "name",
      key: "name",
      render: (name) => <strong>{name}</strong>,
    },
    {
      title: "Kategori",
      dataIndex: "category",
      key: "category",
      render: (category) => (
        <Tag color={categoryColors[category] || "default"}>{category}</Tag>
      ),
    },
    {
      title: "AOS Delay",
      dataIndex: "aosDelay",
      key: "aosDelay",
      width: 100,
    },
    {
      title: "Aksi",
      key: "action",
      width: 120,
      render: (_, record) => (
        <Space>
          <Button
            icon={<EditOutlined />}
            size="small"
            onClick={() => openEditModal(record)}
          />
          <Popconfirm
            title="Hapus skill ini?"
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
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 16,
        }}
      >
        <Title level={2} style={{ margin: 0 }}>
          Skills
        </Title>
        <Button type="primary" icon={<PlusOutlined />} onClick={openCreateModal}>
          Tambah Skill
        </Button>
      </div>

      <Table
        columns={columns}
        dataSource={skills}
        rowKey="_id"
        loading={loading}
        pagination={{ pageSize: 8 }}
      />

      <Modal
        title={editingSkill ? "Edit Skill" : "Tambah Skill"}
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        onOk={handleSubmit}
        confirmLoading={submitting}
        okText="Simpan"
        cancelText="Batal"
        destroyOnClose
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="name"
            label="Nama Skill"
            rules={[{ required: true, message: "Nama wajib diisi" }]}
          >
            <Input placeholder="React JS" />
          </Form.Item>

          <Form.Item
            name="category"
            label="Kategori"
            rules={[{ required: true, message: "Kategori wajib diisi" }]}
          >
            <Input placeholder="Framework / Language / Design App / ..." />
          </Form.Item>

          <Form.Item
            name="imageUrl"
            label="URL Icon"
            rules={[{ required: true, message: "URL icon wajib diisi" }]}
          >
            <Input placeholder="https://..." />
          </Form.Item>

          <Form.Item name="aosDelay" label="AOS Delay">
            <InputNumber min={0} step={100} placeholder="100" style={{ width: "100%" }} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default Skills;