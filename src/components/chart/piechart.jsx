// File: src/components/PieChart.jsx (or similar)

import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register the necessary elements (Kept this for context/completeness)
ChartJS.register(
  ArcElement, 
  Tooltip, 
  Legend
);

// Define default options with the desired legend position
const defaultOptions = {
    responsive: true,
    maintainAspectRatio: false, // Useful if using fixed width/height
    layout: {
        // Set equal padding on all sides, or specifically left/right,
        // to force the circular chart itself to center. 
        // 20 pixels on each side is a good starting point.
        padding: {
            left: 80, 
            right: -10,
            top: 10,
            bottom: 10,
        }
    },
    plugins: {
        legend: {
            // --- THIS IS THE KEY CHANGE ---
            position: 'bottom', // Sets the legend position to the bottom
            // ------------------------------
            labels: {
                // Optional: You can customize label appearance here (e.g., font size)
            }
        },
        title: {
            display: false, // Hide title by default
        },
    },
};

function PieChart({ chartData, options = {} }) {
    // Merge the default options with any options passed as a prop
    // This allows the user to override other settings while keeping the legend at the bottom
    const mergedOptions = { 
        ...defaultOptions, 
        ...options,
        plugins: {
            ...defaultOptions.plugins,
            ...(options.plugins || {}),
        }
    };

    return (
        <div className="pie-chart-container" style={{ width: '400px', height: '400px' }}>
            {/* Pass the merged options to the Pie component */}
            <Pie data={chartData} options={mergedOptions} />
        </div>
    );
}

export default PieChart;