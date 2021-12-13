import 'chart.js/auto';
import { Bar } from "react-chartjs-2";

const labels = ["1991", "1992", "1993", "1994", "1995", "1996", "1997", "1998", "1999", "2000"];


const data = {
  labels,
  datasets: [
    {
      label: "Number of Websites",
      data: [1, 10, 130, 2738, 23500, 257601, 1117255, 2410067, 3177453, 17087182],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
    label: "Number of users",
    data: ["", "", 14161570, 25454590, 44838900, 77433860, 120758310, 188023930, 280866670, 413425190 ],
    backgroundColor: 'rgba(53, 162, 235, 0.5)',
    }
  ]
}

function Chart1() {
  return <div>
    <Bar data={data} />
  </div>
}

export default Chart1;