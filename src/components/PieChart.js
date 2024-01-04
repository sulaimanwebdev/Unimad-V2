import React from 'react';

const PieChart = ({ completedTasks }) => {
  const totalTasks = 24;
  const completedPercentage = (completedTasks / totalTasks) * 100;
  const chartSize = 220; // Adjust the size as needed
  const strokeWidth = 12; // Adjust the thickness of the chart

  const drawPieChart = () => {
    const radius = (chartSize - strokeWidth) / 2;

    return (
      <svg width={chartSize} height={chartSize}>
        <circle
          cx={chartSize / 2}
          cy={chartSize / 2}
          r={radius}
          fill={completedPercentage === 100 ? '#4C8AE1' : '#4C8AE133'}
          stroke="#fff"
          strokeWidth={strokeWidth}
        />
        {completedPercentage > 0 && completedPercentage < 100 && (
          <>
            <path
              d={getArcPath(completedPercentage, radius)}
              fill="#4C8AE1"
            />
            <circle
              cx={chartSize / 2}
              cy={chartSize / 2}
              r={radius}
              fill="none"
              stroke="#fff"
              strokeWidth={strokeWidth}
            />
          </>
        )}
      </svg>
    );
  };

  const getArcPath = (percentage, radius) => {
    const startAngle = 0;
    const endAngle = (percentage * Math.PI) / 50;

    const x1 = chartSize / 2 + radius * Math.cos(startAngle);
    const y1 = chartSize / 2 + radius * Math.sin(startAngle);
    const x2 = chartSize / 2 + radius * Math.cos(endAngle);
    const y2 = chartSize / 2 + radius * Math.sin(endAngle);

    const largeArcFlag = percentage > 50 ? 1 : 0;

    return `M${chartSize / 2} ${chartSize / 2} L${x1} ${y1} A${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;
  };

  return drawPieChart();
};

export default PieChart;