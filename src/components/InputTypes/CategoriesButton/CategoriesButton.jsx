import React from 'react'
import CategoryButtonStyles from './categoryButton.module.scss'

export const CategoriesButton = ({text}) => {
  return (
    <div className={CategoryButtonStyles.container}>
        {text}
    </div>
  )
}
