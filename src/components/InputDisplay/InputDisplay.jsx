import React, { useState } from 'react';
import InputDisplayStyles from './inputDisplay.module.scss';
import { MdKeyboardArrowLeft, MdEdit } from "react-icons/md";
import { InputCon } from '../InputCon/InputCon';
import { ModalCom } from '../Modal/ModalCom';

export const InputDisplay = ({ title, inputs, removeInput, handleEditInput, setTitle }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleSaveTitle = (newTitle) => {
    setTitle(newTitle); // Update the title in the parent component
  };
  // console.log(title);
  return (
    <div className={InputDisplayStyles.inputDisplayContainer}>
      <div className={InputDisplayStyles.inputDisplayContainerMain}>
        <div className={InputDisplayStyles.inputDisplayContainerMainHeader}>
          <MdKeyboardArrowLeft size={34} color='white' className={InputDisplayStyles.EditIcon} />
          <span>{title.title}</span>
          <MdEdit 
            size={20} 
            color='white' 
            className={InputDisplayStyles.EditIcon} 
            onClick={handleModalOpen} // Open modal on click
          />
        </div>

        {inputs.length > 0 ? (
          inputs.map(input => (
            <InputCon
              key={input.id}
              title={input.title}
              type={input.type}
              options={input.options}
              onDelete={() => removeInput(input.id)} // Pass the remove function to InputCon
              onEdit={() => handleEditInput(input.id)} // Pass the handleEditInput function to InputCon
            />
          ))
        ) : (
          <span className={InputDisplayStyles.DefaultText}>Add Fields</span>
        )}
      </div>

      {/* Modal Component */}
      <ModalCom 
        open={isModalOpen} 
        handleClose={handleModalClose}
        title="Edit"
        buttonName="Save"
        onCreate={handleSaveTitle}
      />
    </div>
  );
};
