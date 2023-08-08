import React from 'react'
import PageHeader from '../components/PageHeader'
import CategoriesGrid from '../components/CategoriesGrid'
import Footer from '../components/Footer'

const Categories = () => {
  return (
    <div>
      <PageHeader header = 'Recipeas Categories'/>
      <CategoriesGrid/>
      <Footer/>
    </div>
  )
}

export default Categories