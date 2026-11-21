import React from 'react'
import Hero_Section from '../sections/Hero_Section'
import Vehicles_Section from '@/sections/Vehicles_Section'
import Featured_Parts_Section from '@/sections/Featured_Parts_Section'
import Why_Section from '@/sections/Why_Section'
import Steps_Section from '@/sections/Steps_Section'
import Reviews_Section from '@/sections/Reviews_Section'
import Popular_Parts_section from '@/sections/Popular_Parts_section'

const Home_Page = () => {
  return (
    <div className=' w-full h-full overflow-hidden'>
        <section id='home'>
            <Hero_Section/>
        </section>
        <section id='vehicles'>
            <Vehicles_Section/>
        </section>
        <section id='featured'>
            <Featured_Parts_Section/>
        </section>
        <section id='why'>
            <Why_Section/>
        </section>
        <section id='steps'>
            <Steps_Section/>
        </section>
        <section id='reviews'>
            <Reviews_Section/>
        </section>
        <section id='popular'>
            <Popular_Parts_section/>
        </section>
    </div>
  )
}

export default Home_Page