import { useEffect, useState } from "react";
import {
  Typography,
  Table,
  Button,
  Tag,
  Image,
  Popconfirm,
  Modal,
  Form,
  Input,
  Select,
  Switch,
  InputNumber,
  Space,
  message,
} from "antd";
import {
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  GithubOutlined,
  LinkOutlined,
} from "@ant-design/icons";

import {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
} from "../../services/projectService";

const { Title } = Typography;
const { TextArea } = Input;

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [form] = Form.useForm();

  const fetchProjects = async () => {
    setLoading(true);
    try {
      const data = await getProjects();
      setProjects(data);
    } catch (error) {
      message.error("Gagal memuat data project");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const openCreateModal = () => {
    setEditingProject(null);
    form.resetFields();
    setModalOpen(true);
  };

  const openEditModal = (project) => {
    setEditingProject(project);
    form.setFieldsValue(project);
    setModalOpen(true);
  };

  const handleDelete = async (id) => {
    try {
      await deleteProject(id);
      message.success("Project berhasil dihapus");
      fetchProjects();
    } catch (error) {
      message.error("Gagal menghapus project");
    }
  };

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      setSubmitting(true);

      if (editingProject) {
        await updateProject(editingProject._id, values);
        message.success("Project berhasil diperbarui");
      } else {
        await createProject(values);
        message.success("Project berhasil ditambahkan");
      }

      setModalOpen(false);
      fetchProjects();
    } catch (error) {
      if (error?.errorFields) return; // validation error, biarkan form tampil
      message.error("Gagal menyimpan project");
    } finally {
      setSubmitting(false);
    }
  };

  const columns = [
    {
      title: "Gambar",
      dataIndex: "imageUrl",
      key: "imageUrl",
      width: 90,
      render: (url) => (
        <Image
          src={url}
          alt="preview"
          width={60}
          height={45}
          style={{ objectFit: "cover", borderRadius: 6 }}
          fallback="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI0NSIgdmlld0JveD0iMCAwIDYwIDQ1Ij48cmVjdCB3aWR0aD0iNjAiIGhlaWdodD0iNDUiIGZpbGw9IiNlZWUiLz48L3N2Zz4="
        />
      ),
    },
    {
      title: "Judul",
      dataIndex: "title",
      key: "title",
      render: (title, record) => (
        <Space direction="vertical" size={0}>
          <strong>{title}</strong>
          {record.featured && <Tag color="gold">Featured</Tag>}
        </Space>
      ),
    },
    {
      title: "Tech Stack",
      dataIndex: "techStack",
      key: "techStack",
      render: (techStack) => (
        <>
          {(techStack || []).map((tech) => (
            <Tag color="purple" key={tech}>
              {tech}
            </Tag>
          ))}
        </>
      ),
    },
    {
      title: "Link",
      key: "links",
      render: (_, record) => (
        <Space>
          {record.websiteUrl && (
            <a href={record.websiteUrl} target="_blank" rel="noreferrer">
              <LinkOutlined />
            </a>
          )}
          {record.githubUrl && (
            <a href={record.githubUrl} target="_blank" rel="noreferrer">
              <GithubOutlined />
            </a>
          )}
        </Space>
      ),
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
            title="Hapus project ini?"
            description="Tindakan ini tidak bisa dibatalkan."
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
          Projects
        </Title>
        <Button type="primary" icon={<PlusOutlined />} onClick={openCreateModal}>
          Tambah Project
        </Button>
      </div>

      <Table
        columns={columns}
        dataSource={projects}
        rowKey="_id"
        loading={loading}
        pagination={{ pageSize: 6 }}
      />

      <Modal
        title={editingProject ? "Edit Project" : "Tambah Project"}
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
            name="title"
            label="Judul Project"
            rules={[{ required: true, message: "Judul wajib diisi" }]}
          >
            <Input placeholder="Website Sekolah" />
          </Form.Item>

          <Form.Item
            name="description"
            label="Deskripsi"
            rules={[{ required: true, message: "Deskripsi wajib diisi" }]}
          >
            <TextArea rows={3} placeholder="Deskripsi singkat project" />
          </Form.Item>

          <Form.Item
            name="imageUrl"
            label="URL Gambar"
            rules={[{ required: true, message: "URL gambar wajib diisi" }]}
          >
            <Input placeholder="https://..." />
          </Form.Item>

          <Form.Item name="techStack" label="Tech Stack">
            <Select
              mode="tags"
              placeholder="Ketik lalu Enter, mis: React, TailwindCSS"
              tokenSeparators={[","]}
            />
          </Form.Item>

          <Form.Item name="websiteUrl" label="Website URL">
            <Input placeholder="https://..." />
          </Form.Item>

          <Form.Item name="githubUrl" label="Github URL">
            <Input placeholder="https://github.com/..." />
          </Form.Item>

          <Space size="large">
            <Form.Item name="featured" label="Featured" valuePropName="checked">
              <Switch />
            </Form.Item>

            <Form.Item name="aosDelay" label="AOS Delay">
              <InputNumber min={0} step={100} placeholder="200" />
            </Form.Item>
          </Space>
        </Form>
      </Modal>
    </>
  );
};

export default Projects;