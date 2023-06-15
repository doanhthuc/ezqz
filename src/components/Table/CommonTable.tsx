import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import ActionButton from '../Button/ActionButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ConfirmDialog from '../Dialog/ConfirmDialog';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';

export interface TableColumn<T> {
  header: string,
  accessor: keyof T
  align?: "left" | "right" | "center";
  formatValue?: (value: T[keyof T]) => React.ReactNode;
  styling?: object;
}

interface TableProps<T> {
  columns: TableColumn<T>[];
  data: T[];
  onDeleteItem?: (id: number) => void;
  onEditItem?: (id: number) => void;
  styling?: object;
}

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  }
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
    borderBottom: '1px solid black',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    maxWidth: 200,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  }
}));

const CommonTable = <T extends { id?: number }>({ columns, data, onDeleteItem, onEditItem, styling }: TableProps<T>) => {
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const handleDeleteItem = (id: number) => onDeleteItem && onDeleteItem(id);

  const handleEditItem = (id: number) => onEditItem && onEditItem(id);

  const onDeleteButtonClick = (id: number) => {
    setOpenConfirmDialog(true);
    setSelectedId(id);
  };

  const onClose = (confirm: boolean) => {
    setOpenConfirmDialog(false);
    if (confirm && selectedId) {
      handleDeleteItem(selectedId);
    }
  };

  return (
    <>
      <TableContainer component={Paper} sx={{ ...styling }}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <StyledTableCell key={column.header} align={column.align || 'left'} sx={{ ...column.styling }}>
                  {column.header}
                </StyledTableCell>
              ))}
              {onDeleteItem || onEditItem ? (
                <StyledTableCell align="center">Actions</StyledTableCell>
              ) : null}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <StyledTableRow key={row.id || null} >
                {columns.map((column) => (
                  <StyledTableCell key={`${row.id || ''} ${String(column.accessor)}`} align={column.align || 'left'} sx={{ ...column.styling }} >
                    <>
                      {column.formatValue ? column.formatValue(row[column.accessor]) : row[column.accessor]}
                    </>
                  </StyledTableCell>
                ))}
                {onDeleteItem || onEditItem && row.id ? (
                  <StyledTableCell align="center">
                    {(onEditItem) && (
                      <ActionButton
                        aria-label="edit"
                        color="primary"
                        icon={<EditIcon />}
                        onClick={() => handleEditItem(row.id!)}
                      />
                    )}
                    {onDeleteItem && (
                      <ActionButton
                        aria-label="delete"
                        color="error"
                        icon={<DeleteIcon />}
                        onClick={() => onDeleteButtonClick(row.id!)}
                      />
                    )}
                  </StyledTableCell>
                ) : null}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {onDeleteItem && <ConfirmDialog
        open={openConfirmDialog}
        onClose={onClose}
        title="Confirm Delete"
        message="Do you want to delete this item?"
      />}
    </>
  )
}

export default CommonTable