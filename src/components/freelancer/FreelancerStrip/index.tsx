import Chip from '@material-ui/core/Chip'
import Image from 'next/image'
import React from 'react'

const FreelancerStrip = ({ freelancer, rate, updateFreelancerIndex, index }) => {
  const { picture, name, title, skills } = freelancer
  return (
    <button type="button" onClick={() => updateFreelancerIndex(index)} className="flex p-3 m-4 border-2 border-solid">
      <div className="flex flex-col items-center">
        {picture ? <Image height={68} width={68} src={picture} className="rounded-full" /> : null}
        <p>{rate}/hr</p>
      </div>
      <div className="flex flex-col pl-4">
        <div className="flex-1">
          <p>{name}</p>
          <p className="font-semibold">{title}</p>
        </div>
        <div>
          {skills.map((a) => (
            <Chip label={a.name} />
          ))}
        </div>
      </div>
    </button>
  )
}
export default FreelancerStrip
