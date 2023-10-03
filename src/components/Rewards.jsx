import React from 'react'

const Rewards = () => {
  return (
    <div className='rewards'>
        <img src="/images/sata-star.png" alt="star" className='reward-sata' />
        <img src="/images/sata-star.png" alt="star" className='reward-sata2' />
        <img src="/images/white-star.png" alt="star" className='reward-whitestar' />
        <img src="/images/white-star.png" alt="star" className='reward-whitestar2' />
        <img src="/images/white-star.png" alt="star" className='reward-whitestar3' />
        <img src="/images/white-star.png" alt="star" className='reward-whitestar4' />
        <img src="/images/gray-star.png" alt="star" className='reward-graystar' />
        <img src="/images/Purple-Lens-Flare-straight.png" className='reward-purpleBg' />
        <img src="/images/Purple-Lens-Flare-straight.png" className='reward-purpleBg2' />
      <div className='rewards__info'>
        <h2>Prizes and</h2>
        <h2><span>Rewards</span></h2>
        <p>
            Highlight of the prizes or rewards for winners
            and for participants.
        </p>
      </div>
      <div className="reward">
          <div className='rewards__trophy'>
            <picture>
                <source media='(min-width:770px)' srcSet='/images/trophy.png' className='desktop-trophy' />
                <img src="/images/trophy-mobile.png" alt="trophy" className='mobile-trophy' />
            </picture>
          </div>
          <div className='rewards__medals'>
          <picture>
                <source media='(min-width:770px)' srcSet='/images/Rewards.png' className='desktop-reward' />
                <img src="/images/Rewards-mobile.png" alt="reward" className='mobile-reward' />
          </picture>
          </div>
      </div>
    </div>
  )
}

export default Rewards
