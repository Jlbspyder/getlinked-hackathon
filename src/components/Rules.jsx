import React from 'react'

const Rules = () => {
  return (
    <div className="rule idea flex" id='rules'>
        <img src="/images/Purple-Lens-Flare-straight.png" alt="flare" className='purple-bg' />
        <img src="/images/Purple-Lens-Flare-straight.png" alt="flare" className='purple-bg2' />
        <div className='idea__pix'>
            <div className="light">
                <img src="/images/woman-sitting-mobile.png" alt="idea" className='idea__img' />
            </div>
            <img src="/images/gray-star.png" alt="star" className='rules-graystar' />
            <img src="/images/white-star.png" alt="star" className='rules-whitestar' />
        </div>
        <div className='idea__info'>
            <h2>Rules and</h2>
            <h2><span>Guidelines</span></h2>
            <p>Our tech hackathon is a melting pot of visionaries,
                and its purpose is as clear as day: to shape the future.
                Whether you're a coding genius, a design maverick, or a 
                concept wizard, you'll have the chance to transform your ideas
                into reality. Solving real-world problems, pushing the boundaries
                of technology, and creating solutions that can change the world,
                that's what wr're all about! 
            </p>
            <img src="/images/white-star.png" alt="star" className='rules-whitestar2' />
        </div>
    </div>      
  )
}

export default Rules
