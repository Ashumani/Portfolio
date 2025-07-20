import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Title,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend, Title);

const BarChart = ({ label = [], dataSet = [] }) => {
  const colors = [
    'rgba(249, 115, 22, 0.8)',   // orange
    'rgba(59, 130, 246, 0.8)',   // blue
    'rgba(16, 185, 129, 0.8)',   // green
    'rgba(99, 102, 241, 0.8)',   // indigo
    'rgba(236, 72, 153, 0.8)',   // pink
    'rgba(251, 191, 36, 0.8)',   // yellow
  ];

  const data = {
    labels: label,
    datasets: [
      {
        label: 'Count',
        data: dataSet.length === label.length ? dataSet : label.map(() => 80),
        backgroundColor: label.map((_, i) => colors[i % colors.length]),
        borderRadius: 12,
        barThickness: 40,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: 'My Visitor Insights',
        font: {
          size: 20,
          weight: 'bold',
        },
        color: '#1f2937',
        padding: { top: 10, bottom: 20 },
      },
      tooltip: {
        backgroundColor: '#111827',
        titleColor: '#facc15',
        bodyColor: '#f9fafb',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: Math.max(...dataSet),
        ticks: { color: '#4b5563' },
        // grid: { color: '#e5e7eb' },
      },
      x: {
        ticks: { color: '#4b5563' },
        grid: { display: false },
      },
    },
  };

  return (
    <div className="p-4 max-w-3xl mx-auto mt-10">
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
