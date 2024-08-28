import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  
import MainContainerStyles from './mainContainer.module.scss';
import { AddCard } from '../Cards/AddCard';
import { DisplayCard } from '../Cards/DisplayCard';
import { ModalCom } from '../Modal/ModalCom';

export const MainContainer = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();  

  const handleOpen = () => setOpen(true);
  
  const handleClose = () => setOpen(false);

  const handleCreateForm = (title) => {
    navigate('/create-form', { state: { title } }); 
  };

  return (
    <div className={MainContainerStyles.container}>
      <AddCard onClick={handleOpen} />
      
      <DisplayCard label={"Delivery"} submitted={"10"} viewed={"55"} published={"8/8/2024"} />
      <DisplayCard label={"Product Quality"} submitted={"100"} viewed={"300"} published={"7/8/2024"} />

      <ModalCom 
        open={open} 
        handleClose={handleClose} 
        title={"Create Feedback Form"} 
        buttonName={"Create"}
        onCreate={handleCreateForm}  
      />
    </div>
  );
};
