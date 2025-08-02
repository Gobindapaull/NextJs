import React from 'react'

const TeamMember = ({params}) => {
    const name = params.name;
  return (
    <div className='text-5xl text-white'>TeamMember: {name}</div>
  )
}

export default TeamMember
