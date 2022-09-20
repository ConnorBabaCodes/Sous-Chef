import { useState } from 'react'

import Header from '/src/components/Header'
import Hero from '/src/components/Hero'
import HomeSearch from '/src/components/HomeSearch'

function App() {


  return (
    <div className="App">
      <Header />
      <Hero />
      <main>
      <HomeSearch />
      </main>
      <footer>this is the footer</footer>
    </div>
  )
}

export default App
