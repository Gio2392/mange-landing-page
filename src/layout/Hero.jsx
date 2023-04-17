import { Button } from '../components'

import './hero.css'

export const Hero = () => {
  return (
    <>

   
    
      <div className='container hero'>
        <div className="hero__image">
          <img src='images/illustration-intro.svg' alt="illustration" />
        </div>
       <div className='hero__content'>
         <h2 className='hero__title'>Bring everyone together to build better products.</h2>
         <p className="text">Manage makes it simple for software teams to plan day-to-day 
          tasks while keeping the larger team goals in view.</p>
         <Button text='Get Started' color='orange' />
       </div>
      </div>
    </>
    

  )
}
