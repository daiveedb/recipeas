import React from 'react'
import { useLocation } from 'react-router-dom'

const RecipePage = () => {
    const state = useLocation().state.item
  return (
    <div>{state.title}</div>
  )
}

export default RecipePage