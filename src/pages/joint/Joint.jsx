import React, { useState, useEffect } from "react";
import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
} from "@mui/material";

import data from "./Data3.Json";

import JointDialog from "../jointDialog/JointDialog";
import ChartDialog from "../chartDialog/ChartDialog";

import "./Joint.scss";

console.log(data);

const calculateJoints = (type, size) => {
  const filteredData = data.filter(
    (item) => item.Type === type && item.Size === size
  );
  const totalCount = filteredData.length;

  const completedCount = filteredData.filter(
    (item) => item.Status === "Completed"
  ).length;
  const pendingCount = filteredData.filter(
    (item) => item.Status === "Pending"
  ).length;

  return [totalCount, completedCount, pendingCount];
};

const calculateInchDia = (totalJoints, size) => {
  return totalJoints * size;
};

const Joint = () => {
  const sizes = [...new Set(data.map((item) => item.Size))];

  const [openDialog, setOpenDialog] = useState(false);

  const [selectedSize, setSelectedSize] = useState({
    filteredData: [],
  });

  const handleDoubleClick = (size) => {
    const filteredData = data.filter((item) => item.Size === size);

    setSelectedSize({ filteredData });
    setOpenDialog(true);
  };

  // Function to handle closing the dialog
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const [openChartDialog, setOpenChartDialog] = useState(false);
  const [chartData, setChartData] = useState([]);

  const [clickedButton, setClickedButton] = useState("");

  useEffect(() => {
    if (clickedButton === "chart") {
      // Logic for generating chart
      const chartData = [
        { name: "Total Joints", value: overallTotals.overallTotal },
        { name: "Shop Joints", value: overallTotals.shopTotal },
        { name: "Field Joints", value: overallTotals.fieldTotal },
      ];
      setChartData(chartData);
      setOpenChartDialog(true);
    } else if (clickedButton === "chartDIA") {
      // Logic for generating DIA inch chart
      const chartData = [
        { name: "Total Dia INCHES", value: overallTotals.totalInch },
        { name: "Shop Dia INCHES", value: overallTotals.shopInch },
        { name: "Field Dia Inches", value: overallTotals.fieldInch },
      ];
      setChartData(chartData);
      setOpenChartDialog(true);
    }
  }, [clickedButton]);

  const handleGenerateChart = () => {
    setClickedButton("chart");
  };

  const handleGenerateChartDIA = () => {
    setClickedButton("chartDIA");
  };

  const shopTotalJoints = {};
  const shopJointsCompleted = {};
  const shopJointsBalance = {};

  const fieldTotalJoints = {};
  const fieldJointsCompleted = {};
  const fieldJointsBalance = {};

  const shopInchDia = {};
  const fieldInchDia = {};
  const totalInchDia = {};

  const overallTotalJoints = {};
  const totalJointsCompleted = {};
  const totalJointsBalance = {};

  sizes.forEach((size) => {
    [shopTotalJoints[size],shopJointsCompleted[size],shopJointsBalance[size],] = calculateJoints("S", size);
    [fieldTotalJoints[size],fieldJointsCompleted[size],fieldJointsBalance[size],] = calculateJoints("F", size);

    overallTotalJoints[size] = shopTotalJoints[size] + fieldTotalJoints[size];

    shopInchDia[size] = calculateInchDia(shopTotalJoints[size], size);
    fieldInchDia[size] = calculateInchDia(fieldTotalJoints[size], size);
    totalInchDia[size] = shopInchDia[size] + fieldInchDia[size];

    totalJointsCompleted[size] = shopJointsCompleted[size] + fieldJointsCompleted[size];
    totalJointsBalance[size] = shopJointsBalance[size] + fieldJointsBalance[size];
  });

  const overallTotals = sizes.reduce(
    (acc, size) => {
      acc.shopTotal += shopTotalJoints[size];
      acc.fieldTotal += fieldTotalJoints[size];
      acc.overallTotal += overallTotalJoints[size];

      acc.shopInch += shopInchDia[size];
      acc.fieldInch += fieldInchDia[size];
      acc.totalInch += totalInchDia[size];

      acc.shopCompleted += shopJointsCompleted[size];
      acc.fieldCompleted += fieldJointsCompleted[size];
      acc.totalCompleted += totalJointsCompleted[size];

      acc.shopBalance += shopJointsBalance[size];
      acc.fieldBalance += fieldJointsBalance[size];
      acc.totalBalance += totalJointsBalance[size];

      return acc;
    },
    {
      shopTotal: 0,
      fieldTotal: 0,
      overallTotal: 0,

      shopInch: 0,
      fieldInch: 0,
      totalInch: 0,

      shopCompleted: 0,
      fieldCompleted: 0,
      totalCompleted: 0,

      shopBalance: 0,
      fieldBalance: 0,
      totalBalance: 0,
    }
  );

  return (
    <div className="container">
      <TableContainer className="MuiTableContainer-root">
        <Table className="MuiTable-root">
          <TableHead className="MuiTableHead-root">
            <TableRow>
              {/* Table Head Fields */}
              <TableCell>Pipe Size</TableCell>
              <TableCell>Shop Joints</TableCell>
              <TableCell>Field Joints</TableCell>
              <TableCell>Total Joints</TableCell>
              <TableCell>Shop Inch Dia</TableCell>
              <TableCell>Field Inch Dia</TableCell>
              <TableCell>Total Inch Dia</TableCell>
              <TableCell>Shop Joints Comp.</TableCell>
              <TableCell>Field Joints Comp.</TableCell>
              <TableCell>Total Joints Comp.</TableCell>
              <TableCell>Shop Joints Balance</TableCell>
              <TableCell>Field Joints Balance</TableCell>
              <TableCell>Total Joints Balance</TableCell>
              <TableCell>Action</TableCell> {/* New table header cell */}
            </TableRow>
          </TableHead>
          <TableBody className="MuiTableBody-root">
            {sizes.map((size) => (
              <TableRow key={size}>
                <TableCell>{size}</TableCell>
                <TableCell>{shopTotalJoints[size]}</TableCell>
                <TableCell>{fieldTotalJoints[size]}</TableCell>
                <TableCell>{overallTotalJoints[size]}</TableCell>

                <TableCell>{shopTotalJoints[size] * size}</TableCell>
                <TableCell>{fieldTotalJoints[size] * size}</TableCell>
                <TableCell>{overallTotalJoints[size] * size}</TableCell>

                {/*<TableCell>{shopInchDia[size]}</TableCell>
                <TableCell>{fieldInchDia[size]}</TableCell>
                <TableCell>{totalInchDia[size]}</TableCell> */}


                <TableCell>{shopJointsCompleted[size]}</TableCell>
                <TableCell>{fieldJointsCompleted[size]}</TableCell>
                <TableCell>{totalJointsCompleted[size]}</TableCell>
                <TableCell>{shopJointsBalance[size]}</TableCell>
                <TableCell>{fieldJointsBalance[size]}</TableCell>
                <TableCell>{totalJointsBalance[size]}</TableCell>
                <TableCell>
                  <button
                    onClick={() => handleDoubleClick(size)}
                    style={{ padding: "8px 16px" }}
                  >
                    View Detail
                  </button>
                </TableCell>
              </TableRow>
            ))}
            <TableRow>
              {/* Table Footer Fields */}
              <TableCell>Total:</TableCell>
              <TableCell>{overallTotals.shopTotal}</TableCell>
              <TableCell>{overallTotals.fieldTotal}</TableCell>
              <TableCell>{overallTotals.overallTotal}</TableCell>
              <TableCell>{overallTotals.shopInch}</TableCell>
              <TableCell>{overallTotals.fieldInch}</TableCell>
              <TableCell>{overallTotals.totalInch}</TableCell>
              <TableCell>{overallTotals.shopCompleted}</TableCell>
              <TableCell>{overallTotals.fieldCompleted}</TableCell>
              <TableCell>{overallTotals.totalCompleted}</TableCell>
              <TableCell>{overallTotals.shopBalance}</TableCell>
              <TableCell>{overallTotals.fieldBalance}</TableCell>
              <TableCell>{overallTotals.totalBalance}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <div style={{ textAlign: "center", margin: "20px 0" }}>
        <Button
          onClick={handleGenerateChart}
          variant="contained"
          color="primary"
        >
          Joints Chart
        </Button>
      </div>

      <Button
        onClick={handleGenerateChartDIA}
        variant="contained"
        color="primary"
      >
        Generate Chart DIA Inch
      </Button>

      <ChartDialog
        open={openChartDialog}
        handleClose={() => setOpenChartDialog(false)}
        chartData={chartData}
      />

      <JointDialog
        open={openDialog}
        handleClose={handleCloseDialog}
        selectedSize={selectedSize}
      />
    </div>
  );
};

export default Joint;
