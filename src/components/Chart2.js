import 'chart.js/auto';
import { Bar } from "react-chartjs-2";

const labels = ["United States", "Japan ", "Germany", "Canada", "United Kingdom"];


const data = {
  labels,
  datasets: [
    {
    label: "Number of users",
    data: [2500000, 2000000, 1500000, 1200000, 1100000 ],
    backgroundColor: 'rgba(53, 162, 235, 0.5)',
    }
  ]
}

function Chart2() {
  return <div>
    <Bar data={data} />
  </div>
}

export default Chart2;