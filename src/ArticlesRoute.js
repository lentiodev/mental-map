import React from 'react'
import Navbar from './components/NavBar'
import ArticlesSection from './ArticlesSection'
import Footer from '../components/Footer'



const ArticlesRoute = () => {
  return (
    <div>
        <Navbar />
        <ArticlesSection />
        <Footer />
    </div>
  )
}

export default ArticlesRoute;