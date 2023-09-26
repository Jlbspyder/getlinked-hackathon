import React from 'react'
import { Link } from 'react-router-dom'

const Confirmation = () => {
  return (
    <>
      <div className='confirm'>
        <img src="/images/sata-star.png" className="confirm-satastar" />
        <img src="/images/sata-star.png" className="confirm-satastar2" />
        <img src="/images/gray-star.png" className="confirm-graystar" />
        <div className="confirmation__img">
          <picture>
            <source media='(min-width:770px)' srcSet='/images/congratulation-destop.png' />
            <img src="/images/congratulation-mobile.png" alt="congrats" className='congrats' />
          </picture>
        </div>
        <div className="confirmation__info">
          <h2>Congratulations<br/> you have successfully registered!</h2>
          <p>Yes, it was easy and you did it! Check your mail
            box for next step
          </p>
          <Link to="/"><button className='mobile back'>Back</button></Link>
          <Link to="/"><button className='btn reg'>Back</button></Link>
        </div>
      </div>
    </>
  )
}

export default Confirmation
