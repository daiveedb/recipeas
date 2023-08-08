import React from 'react'
import { useLocation } from 'react-router-dom'
import PageHeader from '../components/PageHeader'

const CategoryPage = () => {

    const state = useLocation().state.category

  return (
    <div>
        <PageHeader header={state.categoryName} />
    </div>
  )
}

export default CategoryPage