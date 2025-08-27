import { LineChart as LChart, Line, XAxis, YAxis } from "recharts";
const LineChart = () => {
  const studentMarks = [
    { id: 1, name: "Ayesha", math: 78, physics: 82, chemistry: 75 },
    { id: 2, name: "Rahim", math: 85, physics: 88, chemistry: 90 },
    { id: 3, name: "Sadia", math: 92, physics: 91, chemistry: 89 },
    { id: 4, name: "Tanvir", math: 70, physics: 68, chemistry: 72 },
    { id: 5, name: "Nusrat", math: 88, physics: 85, chemistry: 87 },
    { id: 6, name: "Kamal", math: 64, physics: 70, chemistry: 65 },
    { id: 7, name: "Farhana", math: 79, physics: 75, chemistry: 80 },
    { id: 8, name: "Sabbir", math: 95, physics: 93, chemistry: 97 },
    { id: 9, name: "Rafi", math: 81, physics: 84, chemistry: 78 },
    { id: 10, name: "Mitu", math: 73, physics: 76, chemistry: 74 },
  ];

  return (
    <div>
      <LChart width={1460} height={300} data={studentMarks}>
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Line dataKey="math" stroke="red"></Line>
        <Line dataKey="chemistry" stroke="green"></Line>
        <Line dataKey="physics" stroke="blue"></Line>
      </LChart>
    </div>
  );
};

export default LineChart;
