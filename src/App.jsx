import React from 'react'
import Header from './modules/Header/Header'
import Blogs from './modules/Blogs/Blogs'
import Staff from './modules/Staff/Staff'
import Gallery from './modules/Gallery/Gallery'
import Main from './modules/Footer/Footer'
import Footer from './modules/Footer/Footer'

const App = () => {
  return (
    <div className="">
      <Header />
      <Blogs />
      <Staff/>
      <Gallery/>
      <Footer/>
    </div>
  )
}

export default App