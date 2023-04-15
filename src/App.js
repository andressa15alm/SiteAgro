import React from 'react'
import {Header,Footer, Blog, Features,Agro,Possibility} from "./containes";
import{Cta,Navbar} from "./components"
import "./App.css";



const App = () => {
  return (
    <div className='App'>
    <div className='gradiente-bg'>
      <Navbar/>
      <Header/>
    </div>
    
    <Agro/>
    <Features/>
    <Possibility/>
    <Cta/>
    <Blog/>
    <Footer/>
</div>
  )
}

export default App