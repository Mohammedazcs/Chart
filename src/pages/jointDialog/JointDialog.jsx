import React from "react";
import {
  Dialog,
  DialogContent,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
} from "@mui/material";

const JointDialog = ({ open, handleClose, selectedSize }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogContent>
        <h2>Selected Pipe Detail</h2>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Shop/Field</TableCell>
                <TableCell>Pipe Size</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {selectedSize.filteredData.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.Type}</TableCell>
                  <TableCell>{item.Size}</TableCell>
                  <TableCell>{item.Status}</TableCell>
                  <TableCell>{item.Date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </DialogContent>

      <div style={{ textAlign: "center", margin: "20px 0" }}>
        <Button onClick={handleClose} variant="contained" color="primary">
          Close
        </Button>
      </div>
    </Dialog>
  );
};

export default JointDialog;
