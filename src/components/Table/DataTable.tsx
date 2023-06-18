import React, { useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import './DataTable.module.scss';
import IconButton from '@mui/material/IconButton';
import ConfirmDialog from '../Dialog/ConfirmDialog';

interface DataTableProps<T> {
    columns: GridColDef[];
    rows: T[];
    onDeleteItem?: (id: number) => void;
    onEditItem?: (id: number) => void;
}

const DataTable = <T extends object>({ columns, rows, onDeleteItem, onEditItem }: DataTableProps<T>) => {
    const [openConfirmDialog, setOpenConfirmDialog] = useState(false);
    const [selectedId, setSelectedId] = useState<number | null>(null);

    const onDeleteButtonClick = (id: number) => {
        setOpenConfirmDialog(true);
        setSelectedId(id);
    };

    const onClose = (confirm: boolean) => {
        setOpenConfirmDialog(false);
        if (confirm && selectedId) {
            onDeleteItem?.(selectedId);
        }
    };

    const columnsWithAction: GridColDef[] = onDeleteItem || onEditItem ? [...columns, {
        field: 'actions',
        type: 'actions',
        headerName: 'Actions',
        flex: 1,
        cellClassName: 'actions',
        renderCell: (params) => (
            <>
                {onEditItem && <IconButton aria-label="edit" color="primary" onClick={() => onEditItem(params.row.id)}>
                    <EditIcon />
                </IconButton>}
                {onDeleteItem && <IconButton aria-label="delete" color="error" onClick={() => onDeleteButtonClick(params.row.id)}>
                    <DeleteIcon />
                </IconButton>}
            </>
        ),
    }] : columns;

    return (
        <>
            <DataGrid
                rows={rows}
                columns={columnsWithAction}
                hideFooter
                getRowClassName={(params) =>
                    params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
                }
                className="StripedDataGrid"
            />
            {onDeleteItem && <ConfirmDialog
                open={openConfirmDialog}
                onClose={onClose}
                title="Confirm Delete"
                message="Do you want to delete this item?"
            />}
        </>
    );
}

export default DataTable