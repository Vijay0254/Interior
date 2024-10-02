import React from 'react'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Brands from './Components/Brands'
import Features from './Components/Features'
import Banner1 from './Components/Banner1'
import Banner2 from './Components/Banner2'
import Testimonials from './Components/Testimonials'
import Subscribe from './Components/Subscribe'
import Footer from './Components/Footer'

const App = () => {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <Hero />
      <Brands />
      <Features />
      <Banner1 />
      <Banner2 />
      <Testimonials />
      <Subscribe />
      <Footer />
    </main>
  )
}

export default App