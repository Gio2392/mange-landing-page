import { Slides, Button } from "../components";

import './testimonials.css';


export const Testimonials = () => {
  return (
    <section className="container testimonials">
      <h3 className="title title-medium center">What they’ve said</h3>
      <div className="wrapper">
        <Slides />
      </div>

      <Button text="Get Started" color="orange"/>
    </section>
  )
}
