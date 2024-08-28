import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'; 
import CreateFormStyle from '../../styles/createForm.module.scss';
import SideBarStyles from '../../components/SideBar/sideBar.module.scss';
import { Header } from '../../components/Header/Header';
import { SideBar } from '../../components/SideBar/SideBar';
import { InputDisplay } from '../../components/InputDisplay/InputDisplay';
import { InputEditCom } from '../../components/InputEdit/InputEditCom';

const saveDataToFile = async (data) => {
  try {
    const response = await fetch('http://localhost:3000/api/save', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Failed to save data');
    }

    const result = await response.text();
    console.log(result); 
    return result;
  } catch (error) {
    console.error('Error saving data:', error);
    throw error;
  }
};


export const CreateForm = () => {
  const location = useLocation();
  const [title, setTitle] = useState(location.state || {});
  const [inputs, setInputs] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentEditInput, setCurrentEditInput] = useState(null);
  const [logicDetails, setLogicDetails] = useState({ url: '', date: '', time: '' }); 

  const addInput = (type, title) => {
    setInputs(prevInputs => [...prevInputs, { type, title, id: Date.now(), options: [] }]);
  };

  const handleEditInput = (id) => {
    const inputToEdit = inputs.find(input => input.id === id);
    setCurrentEditInput(inputToEdit);
    setIsEditing(true);
  };

  const handleLogicChange = (updatedLogic) => {
    setLogicDetails(updatedLogic);
  };

  const handleSave = async () => {
    const formDetails = {
      title: title,
      inputs: inputs,
      logicDetails: logicDetails, 
      submission: {}, 
    };

    try {
      await saveDataToFile(formDetails);
      alert('Form data saved successfully!');
    } catch (error) {
      console.error('Error saving form data:', error);
    }
  };

  return (
    <div className={CreateFormStyle.container}>
      <Header isCreate={true} onSave={handleSave} />
      <section style={{ display: "flex", minHeight: "100vh" }}>
        <InputDisplay 
          title={title || "Default Title"} 
          inputs={inputs} 
          setTitle={setTitle}
          removeInput={(id) => setInputs(inputs.filter(input => input.id !== id))} 
          handleEditInput={handleEditInput} 
        />

        <div className={SideBarStyles.sideBarContainer}>
          {isEditing ? (
            <InputEditCom 
              type={currentEditInput?.type === "radio" || currentEditInput?.type === "categories" ? "options" : "text"} 
              initialData={currentEditInput} 
              onSave={saveEditedInput}
              onCancel={cancelEdit}
            />
          ) : (
            <SideBar addInput={addInput} onLogicChange={handleLogicChange} />
          )}
        </div>
      </section>
    </div>
  );
};
