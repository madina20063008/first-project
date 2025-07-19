import React from 'react'
import Header from '../modules/Header/Header'
import Blogs from '../modules/Blogs/Blogs'
import Staff from '../modules/Staff/Staff'
import Gallery from '../modules/Gallery/Gallery'
import Join from '../modules/Join/Join'

const Home = () => {
    return (
        <div>
            <Header />
            <Blogs />
            <Staff />
            <Gallery />
            <Join />
        </div>
    )
}

export default Home