import React from 'react'
import SideBarStyles from '../SideBar/sideBar.module.scss'
import { InputDetails } from '../InputDetails/InputDetails'

export const SideBarSubCom = ({children, title}) => {

console.log('Title:', title); 

  return (
    <div className={SideBarStyles.inputsContainer}>
         <span className={SideBarStyles.inputsContainerTitle}>{title}</span>
         <div className={SideBarStyles.inputsContainerInputs}>
            {children}
         </div>
      </div>
  )
}
