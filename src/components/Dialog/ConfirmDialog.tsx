import * as React from 'react';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Dialog from '@mui/material/Dialog';
import DialogContentText from "@mui/material/DialogContentText";

interface ConfirmDialogProps {
    open: boolean;
    onClose: (value: boolean) => void;
    title?: string;
    message?: string;
  }
  
  const ConfirmDialog: React.FC<ConfirmDialogProps> = ({ title, message, onClose, open }) => {  
    const handleCancel = () => {
      onClose(false);
    };
  
    const handleConfirm = () => {
      onClose(true);
    };
  
    return (
      <>
        <Dialog open={open} onClose={handleCancel}>
          <DialogTitle>{title || "Confirm"}</DialogTitle>
          <DialogContent>
            <DialogContentText>{message || "Confirm do action?"}</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button variant="outlined" color="info" onClick={handleCancel}>No</Button>
            <Button variant="contained" color="error" onClick={handleConfirm}>Yes</Button>
          </DialogActions>
        </Dialog>
      </>
    );
  };
  
  export default ConfirmDialog;