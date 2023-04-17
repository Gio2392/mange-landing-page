import { footerItems, socialMedia } from '../data';
import { Form } from '../components';
import './footer.css';

export const Footer = () => {
  return (
    <footer>

    <div className='container footer'>
        <Form />
      
        <div className="footer__menu">
          <ul>
            {
              footerItems.map( (foo, index ) => (
                <li key={index}><a href="#">{foo}</a></li>
              ))
            }
          </ul>
        </div>
      
        <div className="footer__social">
          {
            socialMedia.map( ({uid, name, url, image}) => (
              <div key={uid} className="social__icon">
                <a href={url}>
                  <img src={image} alt={name} />
                </a>
              </div>
            ))
          }
        </div>
        
        <div className="footer__logo">
          <img src='images/logo-footer.svg' alt="company logo" />
        </div>
        <div className="footer__copy copy__text">Copyright 2020. All Rights Reserved</div>
    </div>

    </footer>
  )
}
