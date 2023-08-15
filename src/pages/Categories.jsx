import React,{useEffect} from 'react'
import PageHeader from '../components/utilityComponents/PageHeader'
import CategoriesGrid from '../components/categoryComponents/CategoriesGrid'
import Footer from '../components/utilityComponents/Footer'

const Categories = () => {

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  })

  return (
    <div>
      <PageHeader header = 'Recipeas Categories'/>
      <CategoriesGrid/>
      <Footer/>
    </div>
  )
}

export default Categories