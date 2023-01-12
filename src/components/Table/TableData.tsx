import React from 'react';

import Box from '@mui/material/Box';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { TablesData } from '../../data/TablesData/TablesData';

interface Column {
  id:
    | 'Десятки/Единицы'
    | '1'
    | '2'
    | '3'
    | '4'
    | '5'
    | '6'
    | '7'
    | '8'
    | '9'
    | '10';
  label: string;
  minWidth?: number;
  align?: 'center';
  format?: (value: number) => string;
}

const columns: Column[] = [
  { id: 'Десятки/Единицы', label: 'Десятки/Единицы', minWidth: 170 },
  { id: '1', label: '1' },
  { id: '2', label: '2' },
  { id: '3', label: '3' },
  { id: '4', label: '4' },
  { id: '5', label: '5' },
  { id: '6', label: '6' },
  { id: '7', label: '7' },
  { id: '8', label: '8' },
  { id: '9', label: '9' },
  { id: '10', label: '10' },
];

interface TableID {
  id: number;
}

const TableData: React.FC<TableID> = (idTable) => {
  const { id } = idTable;
  console.log(id);
  return (
    <Box sx={{ overflow: 'auto' }}>
      <Box sx={{ width: '100%', display: 'table', tableLayout: 'fixed' }}>
        <Paper>
          <TableContainer>
            <Table
              style={{ width: '100%' }}
              stickyHeader
              aria-label='sticky table'>
              <TableHead>
                <TableRow>
                  <TableCell align='center' colSpan={11}>
                    100 000 рендерингов (мс)
                  </TableCell>
                </TableRow>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell key={column.id} align={'center'}>
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {TablesData[id] ? (
                  TablesData[id].table.map((data) => (
                    <TableRow key={data.idRow}>
                      {Object.values(data.row).map((item, index) => (
                        <TableCell key={index} align={'center'}>
                          {item}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : (
                  <p>No table found</p>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>
    </Box>
  );
};

export default TableData;
