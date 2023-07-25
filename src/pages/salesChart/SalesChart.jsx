import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList,
  Label,
} from "recharts";
import jsonData from "./data1.json";

import "./SalesChart.scss"; // Import SCSS file for styling

const SalesChart = () => {
  const [chartData, setChartData] = useState([]);
  const [selectedField, setSelectedField] = useState("");
  const [selectedChartType, setSelectedChartType] = useState("");

  useEffect(() => {
    setChartData(jsonData.data);
  }, []);

  const handleFieldChange = (event) => {
    setSelectedField(event.target.value);
  };

  const handleChartChange = (chartType) => {
    setSelectedChartType(chartType);
  };

  const transformData = () => {
    const fieldValueMap = {};

    chartData.forEach((dataPoint) => {
      const field = dataPoint[selectedField.toLowerCase()];
      const sales = dataPoint.sales;

      if (fieldValueMap[field]) {
        fieldValueMap[field] += sales;
      } else {
        fieldValueMap[field] = sales;
      }
    });

    return Object.keys(fieldValueMap).map((field) => ({
      name: field,
      value: fieldValueMap[field],
    }));
  };

  const renderChart = () => {
    const transformedData = transformData();
    if (transformedData.length > 0 && selectedChartType === "pie") {
      return (
        <PieChart key={selectedChartType} width={800} height={400}>
          <Pie
            data={transformedData}
            dataKey="value"
            nameKey="name"
            fill="#8884d8"
            label={({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
              const RADIAN = Math.PI / 180;
              const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
              const x = cx + radius * Math.cos(-midAngle * RADIAN);
              const y = cy + radius * Math.sin(-midAngle * RADIAN);

              return (
                <text
                  x={x}
                  y={y}
                  fill="#8884d8"
                  textAnchor={x > cx ? "start" : "end"}
                  dominantBaseline="central"
                >
                  {`${transformedData[index].name} (${(percent * 100).toFixed(0)}%)`}
                </text>
              );
            }}
          />
          <Tooltip />
          <Legend />
        </PieChart>
      );
    }

    if (transformedData.length > 0 && selectedChartType !== "pie") {
      let ChartComponent = null;

      if (selectedChartType === "line") {
        ChartComponent = LineChart;
      } else if (selectedChartType === "bar") {
        ChartComponent = BarChart;
      }

      if (ChartComponent) {
        return (
          <ChartComponent
            key={selectedChartType}
            width={800}
            height={400}
            data={transformedData}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis>
              <Label value={selectedField} offset={-10} position="insideLeft" />
            </YAxis>
            <Tooltip />
            <Legend />
            {selectedChartType === "line" && (
              <Line type="monotone" dataKey="value" stroke="#8884d8">
                <LabelList
                  dataKey="value"
                  position="top"
                  content={({ x, y, value }) => (
                    <text x={x} y={y} dy={-10} textAnchor="middle">{value}</text>
                  )}
                />
              </Line>
            )}
            {selectedChartType === "bar" && (
              <Bar dataKey="value" fill="#8884d8">
                <LabelList dataKey="value" position="top" />
              </Bar>
            )}
          </ChartComponent>
        );
      }
    }

    return null;
  };

  return (
    <div className="sales-chart-container">
      <h1 className="chart-title">Sales Analysis Charts</h1>

      <div className="options-container">
        <div className="field-select-container">
         {/*  <label htmlFor="field-select">Select Field:</label> */}
          <select
            id="field-select"
            value={selectedField}
            onChange={handleFieldChange}
          >
            <option value="">-- Select Chart Field --</option>
            <option value="sales">Total Sales</option>
            <option value="region">Region</option>
            <option value="supervisor">Supervisor</option>
            <option value="salesman">Salesman</option>
            <option value="month">Month</option>
            <option value="year">Year</option>
            <option value="product">Product</option>
          </select>
        </div>

        <div className="chart-type-container">
          {/* <label>Chart Types:</label> */}
          <div className="chart-buttons">
            <button onClick={() => handleChartChange("line")}>
              Line Chart
            </button>
            <button onClick={() => handleChartChange("bar")}>Bar Chart</button>
            <button onClick={() => handleChartChange("pie")}>Pie Chart</button>
          </div>
        </div>
      </div>

      <div className="chart">{renderChart()}</div>
    </div>
  );
};

export default SalesChart;
