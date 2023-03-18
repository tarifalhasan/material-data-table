import * as React from 'react';
import { Box } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import ArrowUpwardTwoToneIcon from '@mui/icons-material/ArrowUpwardTwoTone';
import Paper from '@mui/material/Paper';
import OptionsBtn from '../ui/Option';
import DataTableHeader from './Header';

function createData(
  name: string,
  position: string,
  office: string,
  age: number,
  startDate: string,
  Salary: number
) {
  return {
    name,
    position,
    office,
    age,
    startDate,
    Salary,
  };
}

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            <OptionsBtn />
          </IconButton>
        </TableCell>
        <TableCell scope="left">{row.name}</TableCell>
        <TableCell align="left">{row.position}</TableCell>
        <TableCell align="left">{row.office}</TableCell>
        <TableCell align="right">{row.age}</TableCell>
        <TableCell align="right">{row.startDate}</TableCell>
        <TableCell align="right">{row.Salary}</TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const rows = [
  createData(
    'Tarif AL Hasan',
    'CEO',
    'Tarif Tech ',
    24,
    '24/12/2020',
    32,
    2299
  ),
  createData('Omor', 'MD', 'Tarif Tech ', 24, '24/12/2020', 4499),
];

export default function DataTable() {
  return (
    <Box>
      <DataTableHeader />
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell className="flex items-center" align="left">
                <b> Name</b>
                <ArrowUpwardTwoToneIcon />
              </TableCell>
              <TableCell align="left">Position</TableCell>
              <TableCell align="left">office</TableCell>
              <TableCell align="right">age</TableCell>
              <TableCell align="right">Start date</TableCell>
              <TableCell align="right">Salary</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <Row key={row.name} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
