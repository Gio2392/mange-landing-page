import { Navbar, Hero, Profits, Testimonials, Reinfor, Footer } from './layout'

function App() {

  return (
    <>

       {/*** Background ***/}

      <div className="bg">
        <div className="bg__pattern-1"></div>
        <div className="bg__pattern-2"></div>
      </div>
      
       {/*** End Background ***/}
    
      <Navbar />
      <Hero />
      <Profits />
      <Testimonials />
      <Reinfor />
      <Footer />
    </>
  )
}

export default App
