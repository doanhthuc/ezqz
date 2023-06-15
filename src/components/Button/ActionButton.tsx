import React from 'react';
import { IconButton, IconButtonProps } from '@mui/material';

interface ActionButtonProps extends IconButtonProps {
  icon: React.ReactElement;
  onClick: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({ icon, onClick, ...props }) => {
  return (
    <IconButton {...props} onClick={onClick}>
      {icon}
    </IconButton>
  );
};

export default ActionButton;