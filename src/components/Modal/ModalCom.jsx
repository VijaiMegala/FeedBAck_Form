import { Box, Modal, TextField } from "@mui/material";
import ModalStyles from "./modal.module.scss";
import React, { useState } from "react";

export const ModalCom = ({ open, handleClose, title, buttonName, onCreate }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleCreate = () => {
    onCreate(inputValue); 
    handleClose(); 
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
        }}
      >
        <div className={ModalStyles.container}>
          <div>
            <span className={ModalStyles.containerTitle}>{title}</span>
            <TextField 
              fullWidth 
              variant="standard" 
              value={inputValue} 
              onChange={handleInputChange} 
            />
          </div>

          <div className={ModalStyles.containerButtons}>
            <div 
              className={ModalStyles.containerButtonsOk} 
              onClick={handleCreate}
            >
              {buttonName}
            </div>
            <div 
              onClick={handleClose} 
              className={ModalStyles.containerButtonsCancel}
            >
              Cancel
            </div>
          </div>
        </div>
      </Box>
    </Modal>
  );
};
