import React from 'react'
import Home_Page from './Home_Page'
import Navbar from '../components/Navbar'

const Layout_Page = () => {
  return (
    <div className=' w-full h-full overflow-hidden '>
        <div className=' w-full h-full relative'>
            <div className=' w-full absolute z-50 top-0 left-0'>
                <Navbar/>
            </div>
            <Home_Page/>
        </div>
    </div>
  )
}

export default Layout_Page