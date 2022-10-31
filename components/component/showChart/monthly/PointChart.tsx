import React from "react";
import { observer } from "mobx-react-lite";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { setterStore } from "../../../../stores/setterStore";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
  },
  scales: {
    y: {
      suggestedMin: 0,

      suggestedMax: 100,
      ticks: {
        // forces step size to be 50 units
        stepSize: 10,
      },
    },
  },
} as const;

const PointChart = observer(() => {
  const labels = [];

  for (let i = 0; i < 7; i++) {
    const someDate = new Date(setterStore.calenderBetween.start);
    const duration = i;
    someDate.setTime(someDate.getTime() + duration * 24 * 60 * 60 * 1000);

    labels.push(someDate.getDate());
  }

  const data = {
    labels: labels,
    datasets: [
      {
        label: "ยอด Point / Monthly",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: "#3766FF",
        tension: 0.1,
      },
    ],
  };

  return (
    <div>
      <Line options={options} data={data} />
    </div>
  );
});

export default PointChart;
