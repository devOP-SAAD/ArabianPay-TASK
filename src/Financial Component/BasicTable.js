import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('SR 1000', 159, 6.0, 24, 4.0),
  createData('SR 1000', 237, 9.0, 37, 4.3),
  createData('SR 1000', 262, 16.0, 24, 6.0),
  createData('SR 1000', 305, 3.7, 67, 4.3),
  createData('SR 1000', 356, 16.0, 49, 3.9),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow style={{fontWeight:"bold"}}>
            <TableCell style={{fontWeight:"bold"}}># Limit Arbianpay after</TableCell>
            <TableCell style={{fontWeight:"bold"}} align="right">Limit Arabianpay before</TableCell>
            <TableCell style={{fontWeight:"bold"}} align="right">Limit Simah</TableCell>
            <TableCell style={{fontWeight:"bold"}} align="right">Reading date</TableCell>
            <TableCell style={{fontWeight:"bold"}} align="right">Option</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.calories}</TableCell>
              <TableCell align="center">{row.fat}</TableCell>
              <TableCell align="center">{row.carbs}</TableCell>
              <TableCell align="center">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
