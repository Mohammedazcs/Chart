import React, { useState } from "react";
import {
  ComposedChart,
  BarChart,
  Bar,
  LineChart,
  Line,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  CartesianGrid,
  ReferenceLine,
  ResponsiveContainer,
  XAxis,
  YAxis,
  LabelList,
  Layer,
  Label,
} from "recharts";
import data from "./data.json";
import "./Chart.scss";

const Chart = () => {
  const [chartType, setChartType] = useState("lineChart");

  const handleChartChange = (type) => {
    setChartType(type);
  };

  const renderChart = () => {
    switch (chartType) {
      case "lineChart":
        return (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data.lineChart}>
              <Line type="monotone" dataKey="value" stroke="#8884d8" />
              <XAxis dataKey="month" />
            </LineChart>
          </ResponsiveContainer>
        );
      case "barChart":
        return (
          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart data={data.barChart}>

            <XAxis dataKey="month" tick={{ fontWeight: 'bold' }} tickFormatter={(value) => value.slice(0, 3)} />

              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Legend />

              <Bar
                dataKey="planPercentage"
                fill="#8884d8"
                name="Plan"
                yAxisId="left"
                barSize={20}
              >
                <LabelList
                  dataKey="planPercentage"
                  position="top"
                  formatter={(value) => `${value}%`}
                />
              </Bar>

              <Bar
                dataKey="actualPercentage"
                fill="#82ca9d"
                name="Actual"
                yAxisId="left"
                barSize={20}
              >
                <LabelList
                  dataKey="actualPercentage"
                  position="top"
                  formatter={(value) => `${value}%`}
                />
              </Bar>

              <Line
                dataKey="cumPlanPercentage"
                stroke="#8884d8"
                name="Cumulative Plan"
                yAxisId="right"
                strokeWidth={3}
              />
              <Line
                dataKey="cumActualPercentage"
                stroke="#82ca9d"
                name="Cumulative Actual"
                yAxisId="right"
                strokeWidth={3}
              />
            </ComposedChart>
          </ResponsiveContainer>
        );

      case "pieChart":
        return (
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={data.pieChart}
                dataKey="value"
                nameKey="month"
                fill="#8884d8"
              />
            </PieChart>
          </ResponsiveContainer>
        );
      default:
        return null;
    }
  };

  return (
    <div className="chart-container">
      <div className="chart-buttons">
        <button onClick={() => handleChartChange("lineChart")}>
          Line Chart
        </button>
        <button onClick={() => handleChartChange("barChart")}>Bar Chart</button>
        <button onClick={() => handleChartChange("pieChart")}>Pie Chart</button>
      </div>
      <div className="chart">{renderChart()}</div>
    </div>
  );
};

export default Chart;
