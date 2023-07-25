import React, { useState } from 'react';
import ReactDataGrid from 'react-data-grid';

const ExampleGrid = () => {
  const [data, setData] = useState([
    { Data: "Jan", Amount: 100 },
    { Data: "Feb", Amount: 200 },
    { Data: "Mar", Amount: 150 },
    { Data: "Apr", Amount: 300 },
    { Data: "May", Amount: 250 },
    { Data: "Jun", Amount: 175 },
    { Data: "Jul", Amount: 225 },
    { Data: "Aug", Amount: 275 },
    { Data: "Sep", Amount: 225 },
    { Data: "Oct", Amount: 325 },
  ]);

  // Calculate total
  const total = data.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.Amount;
  }, 0);

  // Create a new array with month names and the total
  const summaryRow = [
    { Data: "Total", Amount: total },
  ];

  // Combine the original data with the summary row
  const allData = [...data, ...summaryRow];

  // Define columns for the data grid
  const columns = [
    { key: "Data", name: "Month" },
    { key: "Amount", name: "Amount" },
  ];

  return (
    <ReactDataGrid
      columns={columns}
      rowGetter={i => allData[i]}
      rowsCount={allData.length}
    />
  );
}

export default ExampleGrid;
