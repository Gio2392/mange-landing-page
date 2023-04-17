import { profits } from '../data';

import './profits.css';

export const Profits = () => {
  return (
    <div className="container profits">
      <div className="profits__info">
        <h3 className="title center">What’s different about Manage?</h3>
        <p className="text__s center">Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams. </p>
      </div>
      <div className="profits__items">
        {
          profits.map(profit => (
            <div key={profit.id} className="profit__item">
              <span className='profit__item-order subtitle'>{profit.id}</span>
              <p className="profit__item-title subtitle">{profit.title}</p>
              <p className="profit__item-text text__s">{profit.text}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}
