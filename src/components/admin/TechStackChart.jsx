import { useMemo } from "react";
import ReactECharts from "echarts-for-react";
import { Empty } from "antd";

// Palet warna senada dengan aksen violet yang dipakai di seluruh dashboard
const COLORS = [
  "#7c3aed",
  "#a78bfa",
  "#0891b2",
  "#22d3ee",
  "#f59e0b",
  "#f472b6",
  "#34d399",
  "#f87171",
  "#818cf8",
  "#94a3b8",
];

const TechStackChart = ({ projects, loading }) => {
  // Agregasi: hitung berapa kali tiap teknologi muncul di seluruh project
  const chartData = useMemo(() => {
    const counts = {};

    projects.forEach((project) => {
      (project.techStack || []).forEach((tech) => {
        counts[tech] = (counts[tech] || 0) + 1;
      });
    });

    return Object.entries(counts)
      .map(([name, value]) => ({ name, value }))
      .sort((a, b) => b.value - a.value);
  }, [projects]);

  const option = {
    tooltip: {
      trigger: "item",
      formatter: "{b}: {c} project ({d}%)",
    },
    legend: {
      orient: "vertical",
      right: 10,
      top: "middle",
      textStyle: { color: "#94a3b8" },
    },
    color: COLORS,
    series: [
      {
        name: "Tech Stack",
        type: "pie",
        radius: ["45%", "72%"],
        center: ["38%", "50%"],
        avoidLabelOverlap: true,
        itemStyle: {
          borderRadius: 6,
          borderColor: "#1f1f1f",
          borderWidth: 2,
        },
        label: {
          show: false,
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 14,
            fontWeight: "bold",
          },
        },
        data: chartData,
      },
    ],
  };

  if (!loading && chartData.length === 0) {
    return <Empty description="Belum ada data tech stack" />;
  }

  return (
    <ReactECharts
      option={option}
      style={{ height: 320 }}
      showLoading={loading}
      notMerge
    />
  );
};

export default TechStackChart;