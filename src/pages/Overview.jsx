import React from 'react'
import BigIdea from '../components/BigIdea'
import Attributes from '../components/Attributes'
import Rules from '../components/Rules'
import Rewards from '../components/Rewards'
import Privacy from '../components/Privacy'

const Overview = () => {
  return (
    <div className='timeline'>
      <Privacy />
      <Rules />
      <Rewards />
      <BigIdea />
      <Attributes />
    </div>
  )
}

export default Overview
